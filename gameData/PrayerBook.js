import { AdventureLog } from "./AdventureLog.js";
import { prayerData } from "./data/prayerData.js";
import {displayCurrentMysticism, gameData, player} from "./data/gameData.js";

const adventureLogHandler = new AdventureLog();

export class PrayerBook {
    adventureLogHandler = new AdventureLog();
    prayerBook = document.querySelector(".prayer-book-box");
    prayerList = document.querySelector(".prayer-book-list");
    combatPrayers = document.querySelector(".combat-prayers");
    availablePrayers = gameData.prayers;

    togglePrayersBook() {
        this.prayerBook.classList.toggle("hidden");
    }

    closePrayersBook() {
        this.prayerBook.classList.add("hidden");
    }

    displayPrayers() {
        this.availablePrayers.forEach(prayerId => {
            let newPrayerLi = document.createElement("li");
            let prayer = this.findPrayer(prayerId);
            newPrayerLi.id = prayer.id;
            newPrayerLi.classList.add("prayer-book-prayer");
            newPrayerLi.textContent = prayer.name;
            this.prayerList.append(newPrayerLi);
        })
    }

    displayCombatPrayers() {
        let combatPrayers = this.findCombatPrayers();

        combatPrayers.forEach(combatPrayer => {
            let newCombatPrayerButton = document.createElement("button");
            newCombatPrayerButton.id = combatPrayer.id;
            newCombatPrayerButton.classList.add("combat-prayer-button");
            newCombatPrayerButton.dataset.damage = combatPrayer.effect.damage;
            newCombatPrayerButton.dataset.damageType = combatPrayer.effect.type;
            newCombatPrayerButton.textContent = combatPrayer.name;
            this.combatPrayers.append(newCombatPrayerButton);
            this.combatPrayers.classList.remove("hidden");
        });
    }

    removeCombatPrayers() {
        this.combatPrayers.innerHTML = "";
        this.combatPrayers.classList.add("hidden");
    }

    findCombatPrayers() {
        let combatPrayers = [];
        this.availablePrayers.forEach(prayerId => {
            let prayer = this.findPrayer(prayerId);

            if (prayer.isCombat) {
                combatPrayers.push(prayer);
            }
        });
        return combatPrayers;
    }

    hasEnoughMysticismCombatPrayer(combatPrayerId) {
        let combatPrayer = this.findPrayer(combatPrayerId);
        return player.currentMysticism >= combatPrayer.cost;
    }

    decreasePlayerCurrentMysticismInCombat(combatPrayerId) {
        let prayer = this.findPrayer(combatPrayerId);
        this.decreaseCurrentMysticism(prayer);
    }

    invokePrayer(id) {
        let prayer = this.findPrayer(id);
        if (player.currentMysticism < prayer.cost) {
            adventureLogHandler.appendFailMessage("Not enough mysticism.");
        } else if (!this.checkSpellChance()) {
            this.decreaseCurrentMysticism(prayer);
            adventureLogHandler.appendFailMessage("You fail to cast the spell.");
        } else {
            this.decreaseCurrentMysticism(prayer);
            prayer.effect();
        }
    }

    decreaseCurrentMysticism(prayer) {
        player.setCurrentMysticism(player.currentMysticism -= prayer.cost);
        displayCurrentMysticism.textContent = player.getCurrentMysticism();
        gameData.currentMysticism = player.getCurrentMysticism();
    }

    checkSpellChance() {
        return Math.floor(Math.random() * 100) < player.spellChance;
    }

    findPrayer(id) {
        return prayerData.prayers.find(prayer => prayer.id === id);
    }
}