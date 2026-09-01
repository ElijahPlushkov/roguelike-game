import { gameData } from "./data/gameData.js";
import { AdventureLog } from "./AdventureLog.js";

const adventureLogHandler = new AdventureLog();

export function handleDeath() {
    adventureLogHandler.appendDeathMessage("You are dead.");

    gameData.isEventActive = true;

    try{
        setTimeout(function() {
            window.location.replace("death-screen.html");
        }, 1000);
    } catch (e) {
        console.log("an error occurred");
    }
}