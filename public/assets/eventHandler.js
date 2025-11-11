import {eventData} from "./dataLoaders.js";
import { gameData, displayPollen, eventDescription, eventOptions} from "./gameData.js";
import {appendContinueButton, displayAdventurelogMessage, endEvent} from "./helperFunctions.js";

export function initEvent(eventSlug) {

    const event = eventData.events.find(event => event.slug === eventSlug);

    eventDescription.className = "adventure-log__new-event";
    eventDescription.textContent = event.event;

    eventOptions.innerHTML = "";

    let continueButton = appendContinueButton();
    eventOptions.prepend(continueButton);
    continueButton.addEventListener("click", function () {
        endEvent(eventSlug, "completed", eventDescription, eventOptions);
        const reward = event.reward;
        registerEventOutcome(reward);
    });
}

export function registerEventOutcome(reward) {

    for (const [key, value] of Object.entries(reward)) {

        if (key === "pollen") {
            gameData.pollen += value;
            displayPollen.textContent = gameData.pollen;
            displayAdventurelogMessage(value, key, "log-entry");
        }

        else {
            gameData.playerCharacteristics[key] += value;

            const displayCharacteristic = document.querySelector(`.${key}-characteristic-count`);

            if (displayCharacteristic) {
                displayCharacteristic.textContent = gameData.playerCharacteristics[key];

                displayAdventurelogMessage(value, key, "log-entry");

            } else {
                console.warn(`Missing DOM element for: .${key}-characteristic-count`);
            }
        }
    }
}