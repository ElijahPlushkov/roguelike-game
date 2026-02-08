import {adventureLog, gameData} from "./gameData.js";

export function handleDeath() {
    const deathMessage = document.createElement("div");
    deathMessage.textContent = "you are dead";
    adventureLog.prepend(deathMessage);

    gameData.isEventActive = true;

    try{
        setTimeout(function() {
            window.location.replace('death-screen');
        }, 5000);
    } catch (e) {
        console.log("an error occurred");
    }
}