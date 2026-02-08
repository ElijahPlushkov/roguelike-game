import {eventDescription, eventOptions, eventData} from "./gameData.js";
import {appendContinueButton, endEvent} from "./helperFunctions.js";
import {QuestJournalUpdater} from "./QuestJournalUpdater.js";
import {ChangeStats} from "./ChangeStats.js";

export function initEvent(eventSlug) {

    const event = eventData.events.find(event => event.slug === eventSlug);

    eventDescription.className = "event-text-color";
    eventDescription.textContent = event.event;

    eventOptions.innerHTML = "";

    let continueButton = appendContinueButton();
    eventOptions.prepend(continueButton);
    continueButton.addEventListener("click", function () {

        if (event.quest) {
            let journalUpdater = new QuestJournalUpdater();
            journalUpdater.journalUpdater(event.quest);
        }

        endEvent(eventSlug, "completed", eventDescription, eventOptions);
        const reward = event.reward;
        console.log(reward);
        let statChanger = new ChangeStats();
        statChanger.changeStats(reward);
    });
}