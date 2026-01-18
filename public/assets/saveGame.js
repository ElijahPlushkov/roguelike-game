import {adventureLog, gameData, player} from "./gameData.js";

export function updateGameProgress(slug, finalState) {
    gameData.gameProgress.eventOutcomes[slug] = {
        eventOutcome: finalState
    }
    console.log(gameData.gameProgress.eventOutcomes);
}

function prepareSaveData() {
    gameData.gameProgress.currentCoordinates.x = player.x;
    gameData.gameProgress.currentCoordinates.y = player.y;

    gameData.gameProgress.currentCharacteristics.might = gameData.playerCharacteristics.might;
    gameData.gameProgress.currentCharacteristics.reputation = gameData.playerCharacteristics.reputation;
    gameData.gameProgress.currentCharacteristics.agility = gameData.playerCharacteristics.agility;
    gameData.gameProgress.currentCharacteristics.prayer = gameData.playerCharacteristics.prayer;

    gameData.gameProgress.currentPollen = gameData.pollen;

    gameData.gameProgress.seenQuests = gameData.quests;
    gameData.gameProgress.metNpcs = gameData.npcs;

    return gameData.gameProgress;
}

export function saveGame() {
    const preparedSaveData = prepareSaveData();
    fetch("/roguelike-game/saveGame", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(preparedSaveData)
    })
        .then(result => result.json())
        .then(data => {
            let saveMessage = document.createElement("p");
            saveMessage.textContent = "Game saved.";
            adventureLog.prepend(saveMessage);
            console.log("game saved:", data);
        })
        .catch(error => console.error("save failed:", error));
}