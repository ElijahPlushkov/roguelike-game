import {gameData} from "./gameData.js";
import {updateGameProgress} from "./saveGame.js";

export function appendContinueButton(eventType) {
    const newEvent = eventType;

    const continueButton = document.createElement("button");
    continueButton.textContent = "Continue";
    continueButton.className = "dialogue-button";
    newEvent.appendChild(continueButton);
    continueButton.addEventListener("click", () => {
        endEvent();
        newEvent.removeChild(continueButton);
    });
}
let eventBox = document.querySelector(".event-box");

export function displayEventBox() {
    eventBox.classList.remove("hidden");
}

export function endEvent(slug, status) {
    gameData.eventActive = false;
    updateGameProgress(slug, status);
    eventBox.classList.add("hidden");
}

export function hasSeenEvent(slug) {
    // let requiredSlug = `event_${slug}`;
    return gameData.gameProgress.seenEvents.includes(slug);
    // return localStorage.getItem(`event_${slug}`) === "true";
}

export function markEventSeen(slug) {
    gameData.gameProgress.seenEvents.push(slug);

    // localStorage.setItem(`event_${slug}`, "true");
}

export function clearStorage() {
    gameData.gameProgress.seenEvents = [];
    // localStorage.clear();
}

// export const clearLocalStorage = document.getElementById("clearStorage");
// clearLocalStorage.addEventListener("click", clearStorage);