
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
        let newQuest = this.findDialogue(questId);
        console.log(newQuest)

        let questItem = document.querySelector(".journal-active-quests .quest-item");
        let title = questItem.querySelector(".quest-title");
        let description = questItem.querySelector(".quest-description");

        title.textContent = "Tempest"
        description.textContent = newQuest.states[0].text;
    }

    findDialogue(questId) {
        return questData.quests.find(quest => quest.id === questId);
    }
}


