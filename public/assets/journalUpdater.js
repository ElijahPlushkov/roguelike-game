
import {journalBox} from "./gameData.js";

export class JournalUpdater {
    journalBox = journalBox

    toggleJournal() {
        this.journalBox.classList.toggle("hidden");
    }

    closeJournal() {
        this.journalBox.classList.add("hidden");
    }
}


