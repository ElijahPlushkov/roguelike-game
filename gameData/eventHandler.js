import { eventDescription, eventOptions, eventWindow } from "./data/gameData.js";
import { createContinueButton, endEvent } from "./helperFunctions.js";
import { QuestJournalUpdater } from "./QuestJournalUpdater.js";
import { ChangeStats } from "./ChangeStats.js";
import { AdventureLogHandler } from "./AdventureLogHandler.js";
import { getEvent } from "./data/eventData/eventDataManager.js";

const adventureLogHandler = new AdventureLogHandler();

export function initEvent(eventId) {

    const event = getEvent(eventId);

    eventDescription.className = "event-text-color";
    eventDescription.textContent = event.event;

    eventOptions.innerHTML = "";

    let continueButton = createContinueButton();
    eventOptions.prepend(continueButton);
    continueButton.addEventListener("click", function () {

        if (event.quest) {
            let journalUpdater = new QuestJournalUpdater();
            journalUpdater.journalUpdater(event.quest);
        }

        endEvent(eventId, "completed", eventDescription, eventOptions, eventWindow);
        const reward = event.reward;
        console.log(reward);
        let statChanger = new ChangeStats();
        statChanger.changeStats(reward);
        adventureLogHandler.appendEventMessage(reward);
    });
}