import {adventureLog, displayMight, displayPollen, displayPrayer, displayAgility, displayReputation, gameData, player} from "./gameData.js";
import {mapRender} from "./mapRender.js";
import {QuestJournalUpdater} from "./QuestJournalUpdater.js";

export async function loadSavedGame() {
    try {
        const response = await fetch("/roguelike-game/loadGame");
        const savedGame = await response.json();

        gameData.player.x = savedGame.player.x
        gameData.player.y = savedGame.player.y;

        gameData.playerCharacteristics.might = savedGame.playerCharacteristics.might;
        gameData.playerCharacteristics.reputation = savedGame.playerCharacteristics.reputation;
        gameData.playerCharacteristics.prayer = savedGame.playerCharacteristics.prayer;
        gameData.playerCharacteristics.agility = savedGame.playerCharacteristics.agility;

        gameData.pollen = savedGame.pollen;

        gameData.eventOutcomes = savedGame.eventOutcomes || [];
        gameData.seenEvents = savedGame.seenEvents || [];

        gameData.quests = savedGame.quests || [];
        gameData.npcs = savedGame.npcs || [];

        console.log("Game successfully loaded:", gameData);

        updatePlayerPosition(gameData.player.x, gameData.player.y, player);
        mapRender();
        updatePlayerCharacteristics(displayMight, displayReputation, displayPrayer, displayAgility, displayPollen);

        let journalUpdater = new QuestJournalUpdater();
        journalUpdater.loadSeenQuests(gameData.quests);

        adventureLog.innerHTML = "";

        let loadMessage = document.createElement("p");
        loadMessage.textContent = "Game loaded.";
        adventureLog.prepend(loadMessage);

    } catch (error) {
        console.log("Failed to load game:", error);
    }
}

function updatePlayerPosition(x, y, player) {
    player.x = x;
    player.y = y;
}

function updatePlayerCharacteristics(displayMight, displayReputation, displayPrayer, displayAgility, displayPollen) {
    displayMight.textContent = gameData.playerCharacteristics.might;
    displayReputation.textContent = gameData.playerCharacteristics.reputation;
    displayPrayer.textContent = gameData.playerCharacteristics.prayer;
    displayAgility.textContent = gameData.playerCharacteristics.agility;
    displayPollen.textContent = gameData.pollen;
}