import {adventureLog, eventOptions, gameData} from "./gameData.js";

export function appendContinueButton() {
    const continueButton = document.createElement("button");
    continueButton.textContent = "Continue.";
    continueButton.className = "option-button option-button_small";

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

    setTimeout(() => {
        rejection.remove();
    }, 5000);
}

export function displayAdventureLogMessage(key, value, ccsClass) {
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

export function endEvent(id, status, description, options) {
    gameData.isEventActive = false;
    updateGameProgress(id, status);
    description.textContent = "";
    options.textContent = "";
}

function updateGameProgress(id, finalState) {
    let event = gameData.eventOutcomes.find(e => e.event === id);
    if (event) {
        if (event.outcome !== finalState) {
            event.outcome = finalState;
        }
    } else {
        gameData.eventOutcomes.push({
            event: id,
            outcome: finalState
        });
    }
    console.log(gameData.eventOutcomes);
}

export function hasSeenEvent(id) {
    return gameData.seenEvents.includes(id);
}

export function markEventSeen(id) {
    gameData.seenEvents.push(id);
}