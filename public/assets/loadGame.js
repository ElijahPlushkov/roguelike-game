import {adventureLog, displayMight, displayPollen, displayPrayer, displayReputation, gameData} from "./gameData.js";
import {player} from "./dataLoaders.js";
import {mapRender} from "./mapRender.js";

let savedPlayerCoordinates = {};
let savedPlayerCharacteristics = {};
let savedPollen = 0;
let savedSeenEvents = [];
let savedEventOutcomes = [];

//load a saved file from backend
function loadSavedGame() {
    fetch("/roguelike-game/loadGame")
        .then(response => response.json())
        .then(savedGame => {
            savedPlayerCoordinates = savedGame.currentCoordinates;
            savedPlayerCharacteristics = savedGame.currentCharacteristics;
            savedPollen = savedGame.currentPollen;
            savedSeenEvents = savedGame.seenEvents;
            savedEventOutcomes = savedGame.eventOutcomes;
        })
        .catch(error => {
            console.log("failed to load game", error);
        });
}

export async function applySavedFile() {
    try {
        const response = await fetch("/roguelike-game/loadGame");
        const savedGame = await response.json();

        gameData.player.x = savedGame.currentCoordinates.x;
        gameData.player.y = savedGame.currentCoordinates.y;

        gameData.playerCharacteristics.might = savedGame.currentCharacteristics.might;
        gameData.playerCharacteristics.reputation = savedGame.currentCharacteristics.reputation;
        gameData.playerCharacteristics.prayer = savedGame.currentCharacteristics.prayer;

        gameData.pollen = savedGame.currentPollen;

        gameData.gameProgress.seenEvents = savedGame.seenEvents || [];
        gameData.gameProgress.eventOutcomes = savedGame.eventOutcomes || [];

        console.log("Game successfully loaded:", gameData);

        updatePlayerPosition(gameData.player.x, gameData.player.y, player);
        mapRender();
        updatePlayerCharacteristics(displayMight, displayReputation, displayPrayer, displayPollen);

        adventureLog.innerHTML = "";

        let loadMessage = document.createElement("p");
        loadMessage.textContent = "game loaded";
        adventureLog.prepend(loadMessage);

    } catch (error) {
        console.log("Failed to load game:", error);
    }

}

function updatePlayerPosition(x, y, player) {
    player.x = x;
    player.y = y;
}

function updatePlayerCharacteristics(displayMight, displayReputation, displayPrayer, displayPollen) {
    displayMight.textContent = gameData.playerCharacteristics.might;
    displayReputation.textContent = gameData.playerCharacteristics.reputation;
    displayPrayer.textContent = gameData.playerCharacteristics.prayer;
    displayPollen.textContent = gameData.pollen;
}