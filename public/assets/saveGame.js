import {adventureLog, gameData} from "./gameData.js";

export function saveGame() {
    if (gameData.isEventActive) {
        adventureLog.prepend("Cannot save now.");
        return;
    }
    fetch("/roguelike-game/saveGame", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(gameData)
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