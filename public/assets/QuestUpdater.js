import {adventureLog, gameData, journalBox, questData} from "./gameData.js";
import {registerEventOutcome} from "./eventHandler.js";

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

    findCurrentState(currentQuest, questState) {
        let states = currentQuest.states;
        return states.find(state => state.id === questState);
    }

    doesQuestExistInDom(allActiveQuests, questId) {
        for (let questItem of allActiveQuests) {
            if (questItem.id === questId) {
                return true;
            }
        }
        return false;
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

        if (finishingStates.includes(questState)) {
            this.updateQuest(questId, questState, currentQuest, activeQuests, allActiveQuests);
            this.finishQuest(questId, activeQuests, allActiveQuests);
            this.questFinishNotification();
            this.giveReward(questState, currentQuest);
        }
        else if (this.doesQuestExistInDom(allActiveQuests, questId) && !finishingStates.includes(questState)) {
            this.updateQuest(questId, questState, currentQuest, activeQuests, allActiveQuests);
            this.questUpdateNotification();
        }
         else {
            this.addNewQuest(questId, questState, currentQuest);
            this.questUpdateNotification();
        }

        this.updateGameDataObject(questId, questState);
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

        let currentState = this.findCurrentState(currentQuest, questState);

        p.textContent = currentState.description;
        descriptionBox.appendChild(p);

        questList.appendChild(currentQuestItem);
    }

    updateQuest(questId, questState, currentQuest, activeQuests, allActiveQuests) {

        for (let questItem of allActiveQuests) {
            if (questItem.id === questId) {
                const descriptionBox = questItem.querySelector('.quest-description');
                const p = document.createElement("p");

                let currentState = this.findCurrentState(currentQuest, questState);

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
        let currentState = this.findCurrentState(currentQuest, questState);

        if (currentState.reward) {
            let reward = currentState.reward;
            registerEventOutcome(reward)
        }
    }

    questUpdateNotification() {
        let newNotification = document.createElement("p");
        newNotification.textContent = "Journal updated."
        adventureLog.prepend(newNotification);
    }

    questFinishNotification() {
        let finishNotification = document.createElement("p");
        finishNotification.textContent = "Quest completed."
        adventureLog.prepend(finishNotification);
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

    updateGameDataObject(questId, questState) {
        let q = gameData.quests.find(quest => quest.id === questId);
        if (q) {
            if (!q.states.includes(questState)) {
                q.states.push(questState);
            }
        } else {
            gameData.quests.push({
                id: questId,
                states: [questState]
            });
        }

        console.log(gameData.quests);
    }
}