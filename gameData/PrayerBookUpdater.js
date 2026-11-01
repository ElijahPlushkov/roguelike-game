import { AdventureLog } from "./AdventureLog.js";

export class PrayerBookUpdater {
    adventureLogHandler = new AdventureLog();
    prayerBook = document.querySelector(".prayer-book-box");

    togglePrayersBook() {
        this.prayerBook.classList.toggle("hidden");
    }

    closePrayersBook() {
        this.prayerBook.classList.add("hidden");
    }
}