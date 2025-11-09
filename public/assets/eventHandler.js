import {gameData} from "./gameData.js";
import {eventData} from "./dataLoaders.js";
import {adventureLog, displayReputation, displayMight, displayPrayer, displayPollen} from "./gameData.js";
import {appendContinueButton, displayEventBox, endEvent} from "./helperFunctions.js";

const description = document.querySelector(".event-description");
export function initEvent(eventSlug) {

    displayEventBox();

    const event = eventData.events.find(event => event.slug === eventSlug);

    // const description = document.querySelector(".event-description");
    description.className = "adventure-log__new-event";
    description.textContent = event.event;

    // const newEvent = document.createElement("div");
    // const eventType = newEvent;
    // newEvent.className = "adventure-log__new-event";
    // newEvent.textContent = event.event;
    // adventureLog.prepend(newEvent);

    // appendContinueButton(eventType);
    const options = document.querySelector(".event-options");
    options.innerHTML = "";
    const continueButton = document.createElement("button");
    continueButton.textContent = "Continue";
    continueButton.className = "dialogue-button";
    options.prepend(continueButton);
    continueButton.addEventListener("click", function () {
        endEvent(eventSlug, "completed");
    });


    const reward = event.reward;
    registerEventOutcome(reward);
}

export function registerEventOutcome(reward) {

    for (const [key, value] of Object.entries(reward)) {

        if (key === "pollen") {
            gameData.pollen += value;
            displayPollen.textContent = gameData.pollen;

            const charChange = document.createElement("p");
            charChange.className = "log-entry";
            if (value === 1) {
                charChange.textContent = `Your reward: ${value} pollen grain`;
            }
            charChange.textContent = `Your reward: ${value} pollen grains`;
            adventureLog.prepend(charChange);
        }

        else {
            gameData.playerCharacteristics[key] += value;

            const displayCharacteristic = document.querySelector(`.${key}-characteristic-count`);

            if (displayCharacteristic) {
                displayCharacteristic.textContent = gameData.playerCharacteristics[key];

                const charChange = document.createElement("p");
                charChange.className = "log-entry";
                charChange.textContent = `Your reward: ${value} ${key}`;
                adventureLog.prepend(charChange);

            } else {
                console.warn(`Missing DOM element for: .${key}-characteristic-count`);
            }
        }
    }
}