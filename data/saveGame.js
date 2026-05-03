import {gameData} from "./gameData.js";
import {AdventureLogHandler} from "./AdventureLogHandler.js";

const adventureLogHandler = new AdventureLogHandler();

export async function saveGame() {
    if (gameData.isEventActive) {
        adventureLogHandler.appendSystemMessage("Cannot save now.");
        return;
    }

    try {
        await window.api.saveGame(gameData);
        adventureLogHandler.appendSystemMessage("Game saved.");
    } catch (err) {
        console.error(err);
        adventureLogHandler.appendSystemMessage("Save failed.");
    }
}