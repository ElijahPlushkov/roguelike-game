
import {adventureLog, gameData, journalBox} from "./gameData.js";
import {questData} from "./dataLoaders.js";

export class JournalUpdater {
    journalBox = journalBox

    toggleJournal() {
        this.journalBox.classList.toggle("hidden");
    }

    closeJournal() {
        this.journalBox.classList.add("hidden");
    }

    findQuest(questId) {
        return questData.quests.find(quest => quest.id === questId);
    }

    questUpdater(quest) {
        let questId = quest.id;
        let questState = quest.state;
        let currentQuest = this.findQuest(questId);

        const activeQuests = document.querySelector(".quest-list-active");
        const allActiveQuests = activeQuests.getElementsByClassName("quest-item");

        if (questState === "start") {
            this.addNewQuest(questId, questState, currentQuest);
        }
        if (questState !== "start" && questState !== "finish") {
            this.updateQuest(questId, questState, currentQuest, activeQuests, allActiveQuests);
        }
        if (questState === "finish") {
            this.finishQuest(questId, questState, currentQuest, activeQuests, allActiveQuests);
        }
        this.questUpdateNotification();

        this.updateGameDataObject(quest);
    }

    addNewQuest(questId, questState, currentQuest) {

        console.log(currentQuest);

        const questList = document.querySelector('.quest-list-active');
        const template = document.getElementById('quest-template');

        const currentQuestItem = template.content.cloneNode(true);

        currentQuestItem.querySelector('.quest-title').textContent = currentQuest.title;
        currentQuestItem.querySelector(".quest-item").id = questId;

        const descriptionBox = currentQuestItem.querySelector('.quest-description');
        descriptionBox.innerHTML = "";

        const p = document.createElement("p");

        let states = currentQuest.states;
        let currentState = states.find(state => state.id === questState);

        p.textContent = currentState.description;
        descriptionBox.appendChild(p);

        questList.appendChild(currentQuestItem);
    }

    updateQuest(questId, questState, currentQuest, activeQuests, allActiveQuests) {

        for (let questItem of allActiveQuests) {
            if (questItem.id === questId) {
                let currentQuestItem = questItem;
                const descriptionBox = currentQuestItem.querySelector('.quest-description');
                const p = document.createElement("p");

                let states = currentQuest.states;
                let currentState = states.find(state => state.id === questState);

                p.textContent = currentState.description;
                descriptionBox.appendChild(p);
            }
        }
    }

    finishQuest(questId, questState, currentQuest, activeQuests, allActiveQuests) {

        this.updateQuest(questId, questState, currentQuest, activeQuests, allActiveQuests);

        for (let questItem of allActiveQuests) {
            if (questItem.id === questId) {
                let currentQuestItem = questItem;

                activeQuests.removeChild(currentQuestItem);

                currentQuestItem.querySelector(".quest-title").classList.add("quest-title_completed");

                const completedQuests = document.querySelector(".quest-list-completed");
                completedQuests.prepend(currentQuestItem);
            }
        }
    }

    questUpdateNotification() {
        let newNotification = document.createElement("p");
        newNotification.textContent = "Journal updated."
        adventureLog.prepend(newNotification);
    }

    removeAllQuests() {
        const activeQuests = document.querySelector(".quest-list-active");
        const allActiveQuests = activeQuests.querySelectorAll(".quest-item");

        allActiveQuests.forEach(questItem => {
            questItem.remove();
        });
    }

    loadSeenQuests(quests) {
        this.removeAllQuests();
        for (let quest of quests) {
            this.questUpdater(quest);
        }
    }

    updateGameDataObject(quest) {
        gameData.quests.push(quest);
        console.log(gameData.quests);
    }
}