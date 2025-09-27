import {gameData} from "./gameData.js";

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

export function endEvent() {
    gameData.eventActive = false;
}

export function hasSeenEvent(slug) {
    return localStorage.getItem(`event_${slug}`) === "true";
}

export function markEventSeen(slug) {
    localStorage.setItem(`event_${slug}`, "true");
}

export function clearStorage() {
    localStorage.clear();
}

export const clearLocalStorage = document.getElementById("clearStorage");
clearLocalStorage.addEventListener("click", clearStorage);