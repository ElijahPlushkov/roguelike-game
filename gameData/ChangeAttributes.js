import {
    displayCurrentHealth,
    displayCurrentMysticism,
    displayMaxHealth,
    displayMaxMysticism,
    displayWillpower,
    gameData, player
} from "./data/gameData.js";

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
            if (player.getCurrentHealth() === player.getHealth()) {
                gameData.health = this.changeHealth();
                player.setHealth(gameData.health);
                player.setCurrentHealth(player.getHealth());
            } else {
                gameData.health = this.changeHealth();
                player.setHealth(gameData.health);
            }
        }
        if (stat === "prayer") {
            if (player.getCurrentMysticism() === player.getMysticism()) {
                gameData.mysticism = this.changeMysticism();
                player.setMysticism(gameData.mysticism);
                player.setCurrentMysticism(player.getMysticism());
            } else {
                gameData.mysticism = this.changeMysticism();
                player.setMysticism(gameData.mysticism);
            }

            gameData.willpower = this.changeWillpower();
            player.setWillpower(gameData.willpower);
            gameData.spellChance = this.changeSpellChance();
            player.setSpellChance(gameData.spellChance);
        }
        this.updateDomAttributes();
    }

    changeHealth() {
        let might = player.getMight();
        return player.BASE_HEALTH + (might + Math.floor(might * this.HEALTH_MODIFIER));
    }

    changeMysticism() {
        let prayer = player.getPrayer();
        return player.BASE_MYSTICISM + (prayer + Math.floor(prayer * this.MYSTICISM_MODIFIER));
    }

    changeWillpower() {
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
        displayMaxHealth.textContent = player.getHealth();
        displayCurrentHealth.textContent = player.getCurrentHealth();

        displayMaxMysticism.textContent = player.getMysticism();
        displayCurrentMysticism.textContent = player.getCurrentMysticism();

        displayWillpower.textContent = gameData.willpower;
    }
}