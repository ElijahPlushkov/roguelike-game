import {
    gameData, adventureLog, journalClose, levelData, map, playerCoordinates, tileSet, dialogueData, eventData,
    loadLevelData, loadDialogueData, loadEventData, loadDoorData, loadEnemyData, loadQuestData, loadNpcData
} from "./gameData.js";
import {initEvent} from "./eventHandler.js";
import {mapRender} from "./mapRender.js";
import {initDialogue} from "./dialogueHandler.js";
import {initCombat} from "./combatHandler.js";
import {accessDoor} from "./doorHandler.js";
import {initNpc} from "./npcHandler.js";
import {hasSeenEvent, markEventSeen, appendRejectionMessage} from "./helperFunctions.js";
import {saveGame} from "./saveGame.js";
import {loadSavedGame} from "./loadGame.js";
import {QuestJournalUpdater} from "./QuestJournalUpdater.js";
import {handleDeath} from "./deathHandler.js";
import {Player} from "./Player.js";

export let playerObject = new Player(
    gameData.playerCharacteristics.might,
    gameData.playerCharacteristics.reputation,
    gameData.playerCharacteristics.prayer,
    gameData.playerCharacteristics.agility,
    gameData.pollen
);
console.log(playerObject);

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
        if (gameData.isEventActive) {
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

        const newX = playerCoordinates.x + dx;
        const newY = playerCoordinates.y + dy;

        gameData.playerCoordinates.x = newX;
        gameData.playerCoordinates.y = newY;

        if (isWalkable(newX, newY)) {
            playerCoordinates.x = newX;
            playerCoordinates.y = newY;
        }

        mapRender();
        checkForAnyEvent(playerCoordinates.x, playerCoordinates.y);
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

    if (newEvent) {
        //an event cannot start unless the player meets the requirements
        if (!requirementsCheck(newEvent)) {
            return;
        }

        if (newEvent.type === "event") {
            const eventSlug = newEvent.slug;
            if (!hasSeenEvent(eventSlug)) {
                gameData.isEventActive = true;
                initEvent(eventSlug);
                markEventSeen(eventSlug);
            }
        }

        if (newEvent.type === "dialogue") {
            const dialogueSlug = newEvent.slug;
            if (!hasSeenEvent(dialogueSlug)) {
                gameData.isEventActive = true;
                initDialogue(dialogueSlug, gameData.stateKey);
                markEventSeen(dialogueSlug);
            }
        }

        if (newEvent.type === "enemy") {
            const enemySlug = newEvent.slug;
            const isImportant = newEvent.isImportant;
            const difficulty = newEvent.difficulty;
            if (!hasSeenEvent(enemySlug)) {
                gameData.isEventActive = true;
                initCombat(enemySlug, isImportant, difficulty);
                markEventSeen(enemySlug);
            }
        }

        if (newEvent.type === "npc") {
            const npcId = newEvent.id;
            gameData.isEventActive = true;
            initNpc(npcId);
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
    let currentEvent = gameData.eventOutcomes.find(currentEvent => currentEvent.event === event);
    if (currentEvent) {
        if (currentEvent.outcome === requirements.eventOutcome) {
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
loadGameButton.addEventListener("click", loadSavedGame);

const questJournal = document.getElementById("questJournal");
let journalUpdater = new QuestJournalUpdater();
questJournal.addEventListener("click", () => {
    journalUpdater.toggleJournal();
});

journalClose.addEventListener("click", () => {
    journalUpdater.closeJournal();
});