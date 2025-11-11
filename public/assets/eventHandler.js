import {gameData} from "./gameData.js";
import {eventData} from "./dataLoaders.js";
import {adventureLog, displayPollen} from "./gameData.js";
import {appendContinueButton, displayEventBox, endEvent} from "./helperFunctions.js";

const description = document.querySelector(".event-description");

export function initEvent(eventSlug) {

    displayEventBox();

    const event = eventData.events.find(event => event.slug === eventSlug);

    description.className = "adventure-log__new-event";
    description.textContent = event.event;

    const options = document.querySelector(".event-options");
    options.innerHTML = "";

    let continueButton = appendContinueButton();
    options.prepend(continueButton);
    continueButton.addEventListener("click", function () {
        endEvent(eventSlug, "completed");
        const reward = event.reward;
        registerEventOutcome(reward);
    });
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