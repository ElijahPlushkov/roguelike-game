
import {displayCurrentHealth, displayCurrentMysticism, displayMaxHealth, displayMaxMysticism, displayWillpower, gameData, player} from "./gameData.js";

export class ChangeAttributes {
    HEALTH_MODIFIER = 2;
    MYSTICISM_MODIFIER = 1;
    WILLPOWER_MODIFIER = 0.5;

    changeAttributes(stat) {
        if (stat === "pollen" || stat === "reputation") {
            return;
        }
        if (stat === "agility") {
            gameData.accuracy = this.changeAccuracy();
            player.setAccuracy(gameData.accuracy);
            gameData.evasion = this.changeEvasion();
            player.setEvasion(gameData.evasion);
        }
        if (stat === "might") {
            gameData.health = this.changeHealth();
            player.setHealth(gameData.health);
        }
        if (stat === "prayer") {
            gameData.mysticism = this.changeMysticism();
            player.setMysticism(gameData.mysticism);
            gameData.willpower = this.changeWillpower();
            player.setWillpower(gameData.willpower);
            gameData.spellChance = this.changeSpellChance();
            player.setSpellChance(gameData.spellChance);
        }
        this.updateDomAttributes();
    }

    changeHealth() {
        let health = player.getHealth();
        let might = player.getMight();
        return player.BASE_HEALTH + (might + Math.floor(might * this.HEALTH_MODIFIER));
    }

    changeMysticism() {
        let mysticism = player.getMysticism();
        let prayer = player.getPrayer();
        return player.BASE_MYSTICISM + (prayer + Math.floor(prayer * this.MYSTICISM_MODIFIER));
    }

    changeWillpower() {
        let willpower = player.getWillpower();
        let prayer = player.getPrayer();
        return player.BASE_WILLPOWER + (prayer + Math.floor(prayer * this.WILLPOWER_MODIFIER));
    }

    changeAccuracy() {
        return player.agility;
    }

    changeEvasion() {
        return player.agility;
    }

    changeSpellChance() {
        return player.getPrayer();
    }

    updateDomAttributes() {
        if (displayMaxHealth.textContent === displayCurrentHealth.textContent) {
            displayCurrentHealth.textContent = gameData.health;
            displayMaxHealth.textContent = gameData.health;
        } else {
            displayMaxHealth.textContent = gameData.health;
        }
        if (displayMaxMysticism.textContent === displayCurrentMysticism.textContent) {
            displayCurrentMysticism.textContent = gameData.mysticism;
            displayMaxMysticism.textContent = gameData.mysticism;
        } else {
            displayMaxMysticism.textContent = gameData.mysticism;
        }
        displayWillpower.textContent = gameData.willpower;
    }
}