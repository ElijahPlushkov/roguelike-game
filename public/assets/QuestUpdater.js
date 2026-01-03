import {adventureLog, displayPollen, gameData, journalBox, questData} from "./gameData.js";
import {displayAdventureLogMessage} from "./helperFunctions.js";

export class QuestUpdater {
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

        let states = currentQuest.states;
        let finishingStates = [];

        for (let state of states) {
            if (state.flag === "finish") {
                finishingStates.push(state.id);
            }
        }

        if (questState === "start") {
            this.addNewQuest(questId, questState, currentQuest);
        }
        else if (questState !== "start" && !finishingStates.includes(questState)) {
            this.updateQuest(questId, questState, currentQuest, activeQuests, allActiveQuests);
        }
        else {
            this.updateQuest(questId, questState, currentQuest, activeQuests, allActiveQuests);
            this.finishQuest(questId, activeQuests, allActiveQuests);
            this.giveReward(questState, currentQuest);
        }
        this.questUpdateNotification();

        this.updateGameDataObject(questId, questState, quest);
    }

    addNewQuest(questId, questState, currentQuest) {

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
                const descriptionBox = questItem.querySelector('.quest-description');
                const p = document.createElement("p");

                let states = currentQuest.states;
                let currentState = states.find(state => state.id === questState);

                p.textContent = currentState.description;
                descriptionBox.appendChild(p);
            }
        }
    }

    finishQuest(questId, activeQuests, allActiveQuests) {
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

    giveReward(questState, currentQuest) {
        let states = currentQuest.states;
        let currentState = states.find(state => state.id === questState);

        if (currentState.reward) {
            let reward = currentState.reward;

            for (const [key, value] of Object.entries(reward)) {

                if (key === "pollen") {
                    gameData.pollen += value;
                    displayPollen.textContent = gameData.pollen;
                    displayAdventureLogMessage(value, key, "event-text-color");
                }

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

    updateGameDataObject(questId, questState, quest) {
        let q = gameData.quests.find(quest => quest.id === questId);
        if (q) {
            q.state = questState;
        } else {
            gameData.quests.push(quest)
        }
        console.log(gameData.quests);
    }
}