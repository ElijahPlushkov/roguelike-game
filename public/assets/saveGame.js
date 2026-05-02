import {gameData} from "./gameData.js";
import {AdventureLogHandler} from "./AdventureLogHandler.js";

const adventureLogHandler = new AdventureLogHandler();

export function saveGame() {
    if (gameData.isEventActive) {
        adventureLogHandler.appendSystemMessage("Cannot save now.");
        return;
    }
    fetch("/roguelike-game/saveGame", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(gameData)
    })
        .then(result => result.json())
        .then(data => {
            adventureLogHandler.appendSystemMessage("Game saved.");
            console.log("game saved:", data);
        })
        .catch(error => console.error("save failed:", error));
}