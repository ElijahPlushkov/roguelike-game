import {eventBox, gameData} from "./gameData.js";

export function appendContinueButton() {
    const continueButton = document.createElement("button");
    continueButton.textContent = "Continue.";
    continueButton.className = "option-button option-button_small";

    return continueButton;
}

export function endEvent(id, status, description, options) {
    gameData.isEventActive = false;
    updateGameProgress(id, status);
    description.textContent = "";
    options.textContent = "";
    eventBox.classList.add("hidden");
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