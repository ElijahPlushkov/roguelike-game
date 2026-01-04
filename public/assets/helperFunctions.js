import {adventureLog, eventOptions, gameData} from "./gameData.js";
import {updateGameProgress} from "./saveGame.js";

export function appendContinueButton() {
    const continueButton = document.createElement("button");
    continueButton.textContent = "Continue.";
    continueButton.className = "option-button";

    return continueButton;
}

export function appendRejectionMessage(eventData) {
    const existingRejection = eventOptions.querySelector(".rejection-text-color");
    if (existingRejection) {
        return;
    }

    const rejection = document.createElement("p");
    rejection.textContent = eventData.rejection;
    rejection.classList.add("rejection-text-color");
    eventOptions.prepend(rejection);
}

export function displayAdventureLogMessage(value, key, ccsClass) {
    const charChange = document.createElement("p");
    charChange.className = ccsClass;
    if (key === "pollen") {
        if (value === 1) {
            charChange.textContent = `Your reward: ${value} pollen grain.`;
        }
        charChange.textContent = `Your reward: ${value} pollen grains.`;
    }
    charChange.textContent = `Your reward: ${value} ${key}.`;
    adventureLog.prepend(charChange);
}

export function endEvent(slug, status, description, options) {
    gameData.eventActive = false;
    updateGameProgress(slug, status);
    description.textContent = "";
    options.textContent = "";
}

export function hasSeenEvent(slug) {
    return gameData.gameProgress.seenEvents.includes(slug);
}

export function markEventSeen(slug) {
    gameData.gameProgress.seenEvents.push(slug);
}

export function clearStorage() {
    gameData.gameProgress.seenEvents = [];
}
