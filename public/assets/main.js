import {gameData, adventureLog, journalClose, levelData, map, player, tileSet, dialogueData, eventData,
    loadLevelData, loadDialogueData, loadEventData, loadDoorData, loadEnemyData, loadQuestData, loadNpcData} from "./gameData.js";
import {initEvent} from "./eventHandler.js";
import {mapRender} from "./mapRender.js";
import {initDialogue} from "./dialogueHandler.js";
import {initCombat} from "./combatHandler.js";
import {accessDoor} from "./doorHandler.js";
import {initNpc} from "./npcHandler.js";
import {hasSeenEvent, markEventSeen, appendRejectionMessage} from "./helperFunctions.js";
import {saveGame} from "./saveGame.js";
import {applySavedFile} from "./loadGame.js";
import {QuestUpdater} from "./QuestUpdater.js";
import {handleDeath} from "./deathHandler.js";

document.addEventListener("DOMContentLoaded", () => {
    loadLevelData();
    loadDialogueData();
    loadEventData();
    loadDoorData();
    loadEnemyData();
    loadQuestData();
    loadNpcData();

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

        mapRender();
        checkForAnyEvent(player.x, player.y);
    });
});

function checkForAnyEvent(x, y) {

    const allEvents = [
        ...(levelData.tileData.events || []),
        ...(levelData.tileData.dialogues || []),
        ...(levelData.tileData.enemies || []),
        ...(levelData.tileData.npcs || [])
    ]

    const newEvent = allEvents.find(event => event.x === x && event.y === y);

    console.log(newEvent);

    if (newEvent) {
        //an event cannot start unless the player meets its requirements
        if (!requirementsCheck(newEvent)) {
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
                console.log(gameData.gameProgress);
            }
        }

        if (newEvent.type === "enemy") {
            const enemySlug = newEvent.slug;
            const isImportant = newEvent.isImportant;
            const difficulty = newEvent.difficulty;
            if (!hasSeenEvent(enemySlug)) {
                gameData.eventActive = true;
                initCombat(enemySlug, isImportant, difficulty);
                markEventSeen(enemySlug);
            }
        }

        if (newEvent.type === "npc") {
            const npcName = newEvent.name;
            gameData.eventActive = true;
            initNpc(npcName);
        }
    }
}

function isWalkable(x, y) {
    const tileType = map[y][x];

    const currentTile = tileSet[tileType];

    if (currentTile.walkable === false) {
        const newLogEntry = document.createElement("p");
        newLogEntry.className = "log-entry";
        newLogEntry.textContent = "You can't walk here!";
        adventureLog.prepend(newLogEntry);
        return false;
    }
    if (currentTile.type === "door") {
        return accessDoor(x, y);
    }
    return true;
}

function checkMight() {
    if (gameData.playerCharacteristics.might <= -3) {
        handleDeath();
    }
}

function isRequirementPassed(requirements, event) {
    if (gameData.gameProgress.eventOutcomes[requirements.eventSlug]) {
        if (gameData.gameProgress.eventOutcomes[requirements.eventSlug].eventOutcome === requirements.eventOutcome) {
            return true;
        }
        appendRejectionMessage(event);
        return false;
    }

    for (const [key, value] of Object.entries(requirements)) {
        if (gameData.playerCharacteristics[key] < value) {
            appendRejectionMessage(event);
            return false;
        }
    }
    return true;
}

function requirementsCheck(newEvent) {

    let isPassed = true;

    if (newEvent.type === "dialogue") {
        const dialogueSlug = newEvent.slug;
        const dialogue = dialogueData.dialogues.find(dialogue => dialogue.slug === dialogueSlug);

        if (!dialogue.requirements) {
            isPassed = true;
        } else {
            const requirements = dialogue.requirements;
            isPassed = isRequirementPassed(requirements, dialogue);
        }
    }
    if (newEvent.type === "event") {
        const eventSlug = newEvent.slug;
        const event = eventData.events.find(event => event.slug === eventSlug);

        if (!event.requirements) {
            isPassed = true;
        } else {
            const requirements = event.requirements;
            isPassed = isRequirementPassed(requirements, event);
        }
    }
    return isPassed;
}

const saveGameButton = document.getElementById("saveGame");
saveGameButton.addEventListener("click", saveGame);

const loadGameButton = document.getElementById("loadGame");
loadGameButton.addEventListener("click", applySavedFile);

const questJournal = document.getElementById("questJournal");
let journalUpdater = new QuestUpdater();
questJournal.addEventListener("click", () => {
    journalUpdater.toggleJournal();
});

journalClose.addEventListener("click", () => {
    journalUpdater.closeJournal();
});