import {gameData} from "./gameData.js";
import {AdventureLogHandler} from "./AdventureLogHandler.js";

const adventureLogHandler = new AdventureLogHandler();

export function handleDeath() {
    adventureLogHandler.appendDeathMessage("You are dead.");

    gameData.isEventActive = true;

    try{
        setTimeout(function() {
            window.location.replace('death-screen');
        }, 5000);
    } catch (e) {
        console.log("an error occurred");
    }
}