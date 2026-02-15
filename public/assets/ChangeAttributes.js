import {playerObject} from "./main.js";
import {displayCurrentHealth, displayCurrentMysticism, displayMaxHealth, displayMaxMysticism, displayWillpower, gameData} from "./gameData.js";

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
            playerObject.setAccuracy(gameData.accuracy);
            console.log(playerObject.accuracy);
            gameData.evasion = this.changeEvasion();
            playerObject.setEvasion(gameData.evasion);
            console.log(playerObject.evasion);
        }
        if (stat === "might") {
            gameData.health = this.changeHealth();
            playerObject.setHealth(gameData.health);
        }
        if (stat === "prayer") {
            gameData.mysticism = this.changeMysticism();
            playerObject.setMysticism(gameData.mysticism);
            gameData.willpower = this.changeWillpower();
            playerObject.setWillpower(gameData.willpower);
            gameData.spellChance = this.changeSpellChance();
            playerObject.setSpellChance(gameData.spellChance);
            console.log(playerObject.spellChance);
        }
        this.updateDomAttributes();
    }

    changeHealth() {
        let health = playerObject.getHealth();
        let might = playerObject.getMight();
        return playerObject.BASE_HEALTH + (might + Math.floor(might * this.HEALTH_MODIFIER));
    }

    changeMysticism() {
        let mysticism = playerObject.getMysticism();
        let prayer = playerObject.getPrayer();
        return playerObject.BASE_MYSTICISM + (prayer + Math.floor(prayer * this.MYSTICISM_MODIFIER));
    }

    changeWillpower() {
        let willpower = playerObject.getWillpower();
        let prayer = playerObject.getPrayer();
        return playerObject.BASE_WILLPOWER + (prayer + Math.floor(prayer * this.WILLPOWER_MODIFIER));
    }

    changeAccuracy() {
        return playerObject.agility;
    }

    changeEvasion() {
        return playerObject.agility;
    }

    changeSpellChance() {
        return playerObject.getPrayer();
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