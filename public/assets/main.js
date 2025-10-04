import { gameData, adventureLog } from "./gameData.js";
import { loadLevelData, loadDialogueData, loadEventData, loadDoorData, loadEnemyData } from "./dataLoaders.js";
import { levelData, map, player, tileSet, dialogueData, eventData, doorData } from "./dataLoaders.js";
import { initEvent } from "./eventHandler.js";
import { mapRender } from "./mapRender.js";
import { initDialogue } from "./dialogueHandler.js";
import { initCombat } from "./combatHandler.js";
import { accessDoor } from "./doorHandler.js";
import {hasSeenEvent, markEventSeen, clearLocalStorage, clearStorage} from "./helperFunctions.js";

document.addEventListener("DOMContentLoaded", () => {
    loadLevelData();
    loadDialogueData();
    loadEventData();
    loadDoorData();
    loadEnemyData();

    //movement
    document.addEventListener("keydown", (e) => {
        checkMight();
        if (gameData.eventActive) {
            return;
        }

        let dx = 0, dy = 0;

        switch (e.key) {
            case "w":
                dy = -1;
                break;
            case "s":
                dy = 1;
                break;
            case "a":
                dx = -1;
                break;
            case "d":
                dx = 1;
                break;

            case "ц":
                dy = -1;
                break;
            case "ы":
                dy = 1;
                break;
            case "ф":
                dx = -1;
                break;
            case "в":
                dx = 1;
                break;
            default:
                return;
        }

        const newX = player.x + dx;
        const newY = player.y + dy;

        if (isWalkable(newX, newY)) {
            player.x = newX;
            player.y = newY;
        }

        checkForAnyEvent(player.x, player.y);

        mapRender();

    });
});

function checkForAnyEvent(x, y) {

    const allEvents = [
        ...(levelData.layers.events || []),
        ...(levelData.layers.dialogues || []),
        ...(levelData.layers.enemies || []),
        ...(levelData.layers.items || [])
    ]

    const newEvent = allEvents.find(event => event.x === x && event.y === y);

    console.log(newEvent);

    if (newEvent) {

        //an event cannot start unless the player meets its requirements
        if (!characteristicCheck(newEvent)) {
            return;
        }

        if (newEvent.type === "event") {
            const eventSlug = newEvent.slug;
            if (!hasSeenEvent(eventSlug)) {
                gameData.eventActive = true;
                initEvent(eventSlug);
                markEventSeen(eventSlug);
            }
        }

        if (newEvent.type === "dialogue") {
            const dialogueSlug = newEvent.slug;
            if (!hasSeenEvent(dialogueSlug)) {
                gameData.eventActive = true;
                initDialogue(dialogueSlug, gameData.stateKey);
                markEventSeen(dialogueSlug);
            }
        }

        if (newEvent.type === "enemy") {
            const enemySlug = newEvent.slug;
            if (!hasSeenEvent(enemySlug)) {
                gameData.eventActive = true;
                initCombat(enemySlug);
                markEventSeen(enemySlug);
            }
        }
    }
}

function isWalkable(x, y) {
    const tileType = map[y][x];

    const currentTile = tileSet[tileType];

    if (currentTile.walkable === false) {
        const newLogEntry = document.createElement("p");
        newLogEntry.className = "log-entry";
        newLogEntry.textContent = "-you can't walk here";
        adventureLog.prepend(newLogEntry);
        return false;
    }
    if (currentTile.type === "door") {
        gameData.eventActive = true;
        return accessDoor(x, y);
    }
    return true;
}

function checkMight() {
    if (gameData.playerCharacteristics.might <= -3) {
        handleDeath();
    }
}

function characteristicCheck(newEvent) {

    if (newEvent.type === "dialogue") {
        const dialogueSlug = newEvent.slug;
        const dialogue = dialogueData.dialogues.find(dialogue => dialogue.slug === dialogueSlug);
        console.log(dialogue);

        if (!dialogue.requirements) {
            return true;
        } else {

            const requirements = dialogue.requirements;

            for (const [key, value] of Object.entries(requirements)) {
                if (gameData.playerCharacteristics[key] < value) {
                    const rejection = document.createElement("div");
                    rejection.textContent = dialogue.rejection;
                    adventureLog.prepend(rejection);
                    return false;
                }
            }
        }
    }
    if (newEvent.type === "event") {
        const eventSlug = newEvent.slug;
        const event = eventData.events.find(event => event.slug === eventSlug);

        if (!event.requirements) {
            return true;
        } else {

            const requirements = event.requirements;
            let isDead = false;
            for (const [key, value] of Object.entries(requirements)) {
                if (gameData.playerCharacteristics[key] < value) {
                    if (event.death === "death") {
                        isDead = true;
                        handleDeath();
                        return false;
                    } else {
                        const rejection = document.createElement("div");
                        rejection.textContent = event.rejection;
                        adventureLog.prepend(rejection);
                        return false;
                    }
                }
            }
        }
    }
    return true;
}