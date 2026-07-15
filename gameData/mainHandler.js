import {
    gameData, journalClose, levelData, map, playerCoordinates, tileSet,
    parseLevelData, eventWindow, chapterId, player
} from "./data/gameData.js";
import { dialogueData } from "./data/dialogueData.js";
import { initEvent } from "./eventHandler.js";
import { mapRender } from "./mapRender.js";
import { initDialogue } from "./dialogueHandler.js";
import { initCombat } from "./combatHandler.js";
import { accessDoor } from "./doorHandler.js";
import { initNpc } from "./npcHandler.js";
import { hasSeenEvent, markEventSeen } from "./helperFunctions.js";
import { saveGame } from "./saveGame.js";
import { loadSavedGame } from "./loadGame.js";
import { QuestJournalUpdater } from "./QuestJournalUpdater.js";
import { handleDeath } from "./deathHandler.js";
import { handleDungeonAccess, exitDungeon } from "./locationHandler.js";
import { AdventureLogHandler } from "./AdventureLogHandler.js";
import { getEvent } from "./data/eventData/eventDataManager.js";
import { changeTileType } from "./mapHandler.js";
import { trapData } from "./data/trapData.js";

let spawnPosition;
let spawnChapter;

export let previousCoordinates = {
    x: 0,
    y: 0
}

const adventureLogHandler = new AdventureLogHandler();

document.addEventListener("DOMContentLoaded", () => {
    parseLevelData("chapter_1");

    console.log(player);

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

        previousCoordinates = {
            x: playerCoordinates.x,
            y: playerCoordinates.y
        }

        const newX = playerCoordinates.x + dx;
        const newY = playerCoordinates.y + dy;

        scanSurroundingsForDangers(newX - 1, newY);
        scanSurroundingsForDangers(newX + 1, newY);
        scanSurroundingsForDangers(newX, newY - 1);
        scanSurroundingsForDangers(newX, newY + 1);

        if (isWalkable(newX, newY)) {
            playerCoordinates.x = newX;
            playerCoordinates.y = newY;
            gameData.playerCoordinates.x = newX;
            gameData.playerCoordinates.y = newY;
            mapRender();
            checkForAnyEvent(playerCoordinates.x, playerCoordinates.y);
        }
    });
});

function  findAllEvents() {
    return [
        ...(levelData.tileData.events || []),
        ...(levelData.tileData.dialogues || []),
        ...(levelData.tileData.enemies || []),
        ...(levelData.tileData.npcs || []),
        ...(levelData.tileData.locations || []),
        ...(levelData.tileData.locationExit || []),
        ...(levelData.tileData.traps || [])
    ]
}

function scanSurroundingsForDangers(x, y) {
    const newEvent = findAllEvents().find(event => event.x === x && event.y === y);

    if (newEvent) {
        if (newEvent.type === "enemy" && newEvent.aggressive) {
            const enemyId = newEvent.id;
            const enemyType = newEvent.enemyType;
            if (!hasSeenEvent(enemyId)) {
                initCombat(enemyId, enemyType, {x: newEvent.x, y: newEvent.y});
            }
        }
        if (newEvent.type === "trap") {
            const trapId = newEvent.id;
            isTrapDetected(x, y, trapId);
        }
    }
}

function isTrapDetected(x, y, trapId) {
    let isDetected;
    let trap = trapData.traps.find(trap => trapId === trap.id);
    isDetected = trap.requirements.prayer <= player.prayer;
    if (isDetected) {
        trap.detected = true;
        adventureLogHandler.appendSystemMessage("You see a trap!");
        changeTileType(x, y, "o");
    }
    return isDetected;
}

function checkForAnyEvent(x, y) {
    const newEvent = findAllEvents().find(event => event.x === x && event.y === y);

    if (newEvent) {
        //an event cannot start unless the player meets the requirements
        if (!requirementsCheck(newEvent)) {
            return;
        }

        if (newEvent.type === "event") {
            const eventId = newEvent.id;
            if (!hasSeenEvent(eventId)) {
                eventWindow.classList.toggle("hidden");
                gameData.isEventActive = true;
                initEvent(eventId);
                markEventSeen(eventId);
            }
        }

        if (newEvent.type === "dialogue") {
            const dialogueId = newEvent.id;
            if (!hasSeenEvent(dialogueId)) {
                eventWindow.classList.toggle("hidden");
                gameData.isEventActive = true;
                initDialogue(dialogueId, gameData.stateKey);
                markEventSeen(dialogueId);
            }
        }

        if (newEvent.type === "enemy") {
            const enemyId = newEvent.id;
            const enemyType = newEvent.enemyType;
            if (!hasSeenEvent(enemyId)) {
                initCombat(enemyId, enemyType, {x: newEvent.x, y: newEvent.y});
            }
        }

        if (newEvent.type === "npc") {
            const npcId = newEvent.id;
            eventWindow.classList.toggle("hidden");
            gameData.isEventActive = true;
            initNpc(npcId);
        }

        if (newEvent.type === "location") {
            spawnPosition = {x: newEvent.x, y: newEvent.y};
            spawnChapter = chapterId;
            const locationId = newEvent.id;
            handleDungeonAccess(locationId, {x: newEvent.x, y: newEvent.y});
        }

        if (newEvent.type === "locationExit") {
            exitDungeon(spawnChapter, spawnPosition);
        }
    }
}

function isWalkable(x, y) {
    const tileType = map[y][x];

    const currentTile = tileSet[tileType];

    if (currentTile.walkable === false) {
        adventureLogHandler.appendSystemMessage("You can't walk here!");
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
        adventureLogHandler.appendRejectionMessage(event);
        return false;
    }

    for (const [key, value] of Object.entries(requirements)) {
        if (gameData.playerCharacteristics[key] < value) {
            adventureLogHandler.appendRejectionMessage(event);
            return false;
        }
    }
    return true;
}

function requirementsCheck(newEvent) {

    let isPassed = true;

    if (newEvent.type === "dialogue") {
        const dialogueId = newEvent.id;
        const dialogue = dialogueData.dialogues.find(dialogue => dialogue.id === dialogueId);

        if (!dialogue.requirements) {
            isPassed = true;
        } else {
            const requirements = dialogue.requirements;
            isPassed = isRequirementPassed(requirements, dialogue);
        }
    }
    if (newEvent.type === "event") {
        const eventId = newEvent.id;
        const event = getEvent(eventId);

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