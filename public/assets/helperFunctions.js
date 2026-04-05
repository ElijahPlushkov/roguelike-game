import {adventureLog, eventBox, gameData} from "./gameData.js";

export function appendContinueButton() {
    const continueButton = document.createElement("button");
    continueButton.textContent = "Continue.";
    continueButton.className = "option-button option-button_small";

    return continueButton;
}

export function displayAdventureLogMessage(key, value, ccsClass) {
    const adventureLogMessage = document.createElement("p");
    adventureLogMessage.className = ccsClass;

    let text;

    if (value < 0) {
        if (key === "pollen") {
            if (value === -1) {
                text = `You lose: ${value} pollen grain.`;
            } else {
                text = `You lose: ${value} pollen grains.`;
            }
        } else {
            text = `You lose: ${value} ${key}.`;
        }
    } else {
        if (key === "pollen") {
            if (value === 1) {
                text = `Your reward: ${value} pollen grain.`;
            } else {
                text = `Your reward: ${value} pollen grains.`;
            }
        } else {
            text = `Your reward: ${value} ${key}.`;
        }
    }
    adventureLogMessage.textContent = text;
    adventureLog.prepend(adventureLogMessage);
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