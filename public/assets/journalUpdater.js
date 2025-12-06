
import {journalBox} from "./gameData.js";
import {questData} from "./dataLoaders.js";

export class JournalUpdater {
    journalBox = journalBox

    toggleJournal() {
        this.journalBox.classList.toggle("hidden");
    }

    closeJournal() {
        this.journalBox.classList.add("hidden");
    }

    addNewQuest(questId) {
        const newQuest = this.findQuest(questId);
        console.log(newQuest);

        const template = document.getElementById('quest-template');

        const questList = document.querySelector('.quest-list');

        const clone = template.content.cloneNode(true);

        clone.querySelector('.quest-title').textContent = newQuest.title;

        const descriptionBox = clone.querySelector('.quest-description');
        descriptionBox.innerHTML = "";

        const p = document.createElement("p");

        let states = newQuest.states;
        let startState = states.find(state => state.id === "start")

        p.textContent = startState.description;
        descriptionBox.appendChild(p);

        questList.appendChild(clone);
    }

    findQuest(questId) {
        return questData.quests.find(quest => quest.id === questId);
    }
}


