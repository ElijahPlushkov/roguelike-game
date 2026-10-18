import { createContinueButton, endEvent } from "./helperFunctions.js";
import { QuestJournalUpdater } from "./QuestJournalUpdater.js";
import { ChangeStats } from "./ChangeStats.js";
import { AdventureLog } from "./AdventureLog.js";
import { getEvent } from "./data/eventData/eventDataManager.js";
import { gameData } from "./data/gameData.js";

export const eventWindow = document.querySelector(".event-box");
export const eventOptions = document.querySelector(".event-options");
const eventDescription = document.querySelector(".event-description");

const adventureLogHandler = new AdventureLog();
const journalUpdater = new QuestJournalUpdater();

export function initEvent(eventId) {
    eventWindow.classList.toggle("hidden");
    gameData.isEventActive = true;

    const event = getEvent(eventId);

    eventDescription.className = "event-text-color";
    eventDescription.innerHTML = event.event.replace(/\n/g, '<br>');
    eventOptions.innerHTML = "";

    let continueButton = createContinueButton();
    eventOptions.prepend(continueButton);
    continueButton.addEventListener("click", function () {

        if (event.quest) {
            journalUpdater.journalUpdater(event.quest);
        }

        endEvent(eventId, "completed", eventDescription, eventOptions, eventWindow, "event");
        const reward = event.reward;
        console.log(reward);
        let statChanger = new ChangeStats();
        statChanger.changeStats(reward);
        adventureLogHandler.appendEventResolutionMessage(reward);
    });
}