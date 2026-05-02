import {displayPollen, gameData, player} from "./gameData.js";

export class ChangeStats {

    changeStats(reward) {
        for (const [key, value] of Object.entries(reward)) {
            if (key === "pollen") {
                gameData.pollen += value;
            } else {
                gameData.playerCharacteristics[key] += value;
            }
            this.updateDomStats(key);
            this.updatePlayerObjectStats(key);
            player.changeAttributes(key);
        }
    }

    updateDomStats(key) {
        if (key === "pollen") {
            displayPollen.textContent = gameData.pollen;
        } else {
            const displayCharacteristic = document.querySelector(`.${key}-stat-value`);
            if (displayCharacteristic) {
                displayCharacteristic.textContent = gameData.playerCharacteristics[key];
            } else {
                console.warn(`Missing DOM element for: .${key}-characteristic-count`);
            }
        }
    }

    updatePlayerObjectStats(key) {
        if (key === "pollen") {
            player.setPollen(gameData.pollen);
        } else if (key === "might") {
            player.setMight(gameData.playerCharacteristics.might);
        } else if (key === "reputation") {
            player.setReputation(gameData.playerCharacteristics.reputation);
        } else if (key === "prayer") {
            player.setPrayer(gameData.playerCharacteristics.prayer);
        } else {
            player.setAgility(gameData.playerCharacteristics.agility);
        }
    }
}