import {adventureLog, gameData} from "./gameData.js";
import {clearStorage} from "./helperFunctions.js";

export function handleDeath() {
    const deathMessage = document.createElement("div");
    deathMessage.textContent = "you are dead";
    adventureLog.prepend(deathMessage);

    gameData.eventActive = true;

    try{
        setTimeout(function() {
            window.location.replace('death-screen');
        }, 5000);
    } catch (e) {
        console.log("an error occurred");
    }

    clearStorage();
}