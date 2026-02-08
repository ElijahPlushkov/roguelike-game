import {playerObject} from "./main.js";
import {displayCurrentHealth, displayCurrentMysticism, displayMaxHealth, displayMaxMysticism, displayWillpower, gameData} from "./gameData.js";

export class ChangeAttributes {
    HEALTH_MODIFIER = 2.5;
    MYSTICISM_MODIFIER = 2;
    WILLPOWER_MODIFIER = 1.5;

    changeAttributes(stat) {
        if (stat === "pollen" || stat === "reputation" || stat === "agility") {
            return;
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
        }

        this.updateDomAttributes();
    }

    changeHealth() {
        let health = playerObject.getHealth();
        let might = playerObject.getMight();
        return health + (might + Math.floor(might * this.HEALTH_MODIFIER));
    }

    changeMysticism() {
        let mysticism = playerObject.getMysticism();
        let prayer = playerObject.getPrayer();
        return mysticism + (prayer + Math.floor(prayer * this.MYSTICISM_MODIFIER));
    }

    changeWillpower() {
        let willpower = playerObject.getWillpower();
        let prayer = playerObject.getPrayer();
        return willpower + (prayer + Math.floor(prayer * this.WILLPOWER_MODIFIER));
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