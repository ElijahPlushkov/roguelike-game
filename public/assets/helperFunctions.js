import {adventureLog, gameData} from "./gameData.js";
import {updateGameProgress} from "./saveGame.js";

export function appendContinueButton() {
    const continueButton = document.createElement("button");
    continueButton.textContent = "Continue";
    continueButton.className = "dialogue-button";

    return continueButton;
}

export function displayAdventurelogMessage(value, key, ccsClass) {
    const charChange = document.createElement("p");
    charChange.className = ccsClass;
    if (key === "pollen") {
        if (value === 1) {
            charChange.textContent = `Your reward: ${value} pollen grain`;
        }
        charChange.textContent = `Your reward: ${value} pollen grains`;
    }
    charChange.textContent = `Your reward: ${value} ${key}`;
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
