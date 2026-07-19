import { gameData } from "./data/gameData.js";
import { AdventureLogHandler } from "./AdventureLogHandler.js";

const adventureLogHandler = new AdventureLogHandler();

export async function saveGame() {
    if (gameData.isEventActive) {
        adventureLogHandler.appendFailMessage("Cannot save now.");
        return;
    }

    try {
        await window.api.saveGame(gameData);
        adventureLogHandler.appendSuccessfulMessage("Game saved.");
    } catch (err) {
        console.error(err);
        adventureLogHandler.appendFailMessage("Save failed.");
    }
}