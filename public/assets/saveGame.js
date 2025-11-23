import {adventureLog, gameData} from "./gameData.js";
import {player} from "./dataLoaders.js";

export function updateGameProgress(slug, finalState) {
    let newOutcome = {
        eventSlug: slug,
        eventOutcome: finalState
    }
    gameData.gameProgress.eventOutcomes.push(newOutcome);
}

function prepareSaveData() {
    gameData.gameProgress.currentCoordinates.x = player.x;
    gameData.gameProgress.currentCoordinates.y = player.y;

    gameData.gameProgress.currentCharacteristics.might = gameData.playerCharacteristics.might;
    gameData.gameProgress.currentCharacteristics.reputation = gameData.playerCharacteristics.reputation;
    gameData.gameProgress.currentCharacteristics.prayer = gameData.playerCharacteristics.prayer;

    gameData.gameProgress.currentPollen = gameData.pollen;

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
            saveMessage.textContent = "game saved";
            adventureLog.prepend(saveMessage);
            console.log("game saved:", data);
        })
        .catch(error => console.error("save failed:", error));
}