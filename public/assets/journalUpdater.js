
import {adventureLog, journalBox} from "./gameData.js";
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

    addNewQuest(quest) {
        let questId = quest.id;
        let questState = quest.state;
        const newQuest = this.findQuest(questId);

        console.log(newQuest);

        const questList = document.querySelector('.quest-list-active');
        const template = document.getElementById('quest-template');

        const newQuestItem = template.content.cloneNode(true);

        newQuestItem.querySelector('.quest-title').textContent = newQuest.title;
        newQuestItem.querySelector(".quest-item").id = questId;

        const descriptionBox = newQuestItem.querySelector('.quest-description');
        descriptionBox.innerHTML = "";

        const p = document.createElement("p");

        let states = newQuest.states;
        let currentState = states.find(state => state.id === questState);

        p.textContent = currentState.description;
        descriptionBox.appendChild(p);

        questList.appendChild(newQuestItem);
    }

    updateQuest(quest) {
        let questId = quest.id;
        let questState = quest.state;
        const currentQuest = this.findQuest(questId);

        const activeQuests = document.querySelector(".quest-list-active");
        const allActiveQuests = activeQuests.getElementsByClassName("quest-item");

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

    finishQuest(quest) {
        this.updateQuest(quest);

        let questId = quest.id;
        let questState = quest.state;
        const currentQuest = this.findQuest(questId);

        const activeQuests = document.querySelector(".quest-list-active");
        const allActiveQuests = activeQuests.getElementsByClassName("quest-item");

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

    questUpdateNotification(){
        let newNotification = document.createElement("p");
        newNotification.textContent = "Journal updated."
        adventureLog.prepend(newNotification);
    }
}


