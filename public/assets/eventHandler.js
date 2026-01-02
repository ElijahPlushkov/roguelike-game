import {gameData, displayPollen, eventDescription, eventOptions, eventData} from "./gameData.js";
import {appendContinueButton, displayAdventureLogMessage, endEvent} from "./helperFunctions.js";
import {QuestUpdater} from "./QuestUpdater.js";

export function initEvent(eventSlug) {

    const event = eventData.events.find(event => event.slug === eventSlug);

    eventDescription.className = "event-text-color";
    eventDescription.textContent = event.event;

    eventOptions.innerHTML = "";

    let continueButton = appendContinueButton();
    eventOptions.prepend(continueButton);
    continueButton.addEventListener("click", function () {

        if (event.quest) {
            let journalUpdater = new QuestUpdater();
            journalUpdater.questUpdater(event.quest);
        }

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
            displayAdventureLogMessage(value, key, "event-text-color");
        } else {
            gameData.playerCharacteristics[key] += value;

            const displayCharacteristic = document.querySelector(`.${key}-stat-value`);

            if (displayCharacteristic) {
                displayCharacteristic.textContent = gameData.playerCharacteristics[key];

                displayAdventureLogMessage(value, key, "event-text-color");

            } else {
                console.warn(`Missing DOM element for: .${key}-characteristic-count`);
            }
        }
    }
}