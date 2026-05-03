import {displayMight, displayPollen, displayPrayer, displayAgility, displayReputation, gameData, playerCoordinates} from "./gameData.js";
import {mapRender} from "./mapRender.js";
import {QuestJournalUpdater} from "./QuestJournalUpdater.js";
import {AdventureLogHandler} from "./AdventureLogHandler.js";

const adventureLogHandler = new AdventureLogHandler();

export async function loadSavedGame() {
    if (gameData.isEventActive) {
        adventureLogHandler.appendSystemMessage("Cannot load now.");
        return;
    }

    try {
        const payload = await window.api.loadGame();

        if (payload.version !== 1) {
            throw new Error("Unsupported save version");
        }

        Object.assign(gameData, payload.data);

        console.log("Game successfully loaded:", gameData);

        updatePlayerCharacteristics(
            displayMight,
            displayReputation,
            displayPrayer,
            displayAgility,
            displayPollen
        );
        updatePlayerPosition(gameData.playerCoordinates.x, gameData.playerCoordinates.y, playerCoordinates);

        mapRender();

        let journalUpdater = new QuestJournalUpdater();
        journalUpdater.loadSeenQuests(gameData.quests);

        adventureLogHandler.clearAdventureLog();
        adventureLogHandler.appendSystemMessage("Game loaded.");

    } catch (error) {
        console.log("Failed to load game:", error);
        adventureLogHandler.appendSystemMessage("Load failed.");
    }
}

function updatePlayerPosition(x, y, playerCoordinates) {
    playerCoordinates.x = x;
    playerCoordinates.y = y;
}

function updatePlayerCharacteristics(displayMight, displayReputation, displayPrayer, displayAgility, displayPollen) {
    displayMight.textContent = gameData.playerCharacteristics.might;
    displayReputation.textContent = gameData.playerCharacteristics.reputation;
    displayPrayer.textContent = gameData.playerCharacteristics.prayer;
    displayAgility.textContent = gameData.playerCharacteristics.agility;
    displayPollen.textContent = gameData.pollen;
}