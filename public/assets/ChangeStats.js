import {displayPollen, gameData} from "./gameData.js";
import {displayAdventureLogMessage} from "./helperFunctions.js";
import {playerObject} from "./main.js";

export class ChangeStats {
    changeStats(reward) {
        for (const [key, value] of Object.entries(reward)) {
            if (key === "pollen") {
                gameData.pollen += value;
            } else {
                gameData.playerCharacteristics[key] += value;
            }
            this.updateDomStats(key, value);
            this.updatePlayerObjectStats(key);
            playerObject.changeAttributes(key);
        }
    }

    updateDomStats(key, value) {
        if (key === "pollen") {
            displayPollen.textContent = gameData.pollen;
            displayAdventureLogMessage(key, value, "event-text-color");
        } else {
            const displayCharacteristic = document.querySelector(`.${key}-stat-value`);
            if (displayCharacteristic) {
                displayCharacteristic.textContent = gameData.playerCharacteristics[key];
                displayAdventureLogMessage(key, value, "event-text-color");
            } else {
                console.warn(`Missing DOM element for: .${key}-characteristic-count`);
            }
        }
    }

    updatePlayerObjectStats(key) {
        if (key === "pollen") {
            playerObject.setPollen(gameData.pollen);
        } else if (key === "might") {
            playerObject.setMight(gameData.playerCharacteristics.might);
        } else if (key === "reputation") {
            playerObject.setReputation(gameData.playerCharacteristics.reputation);
        } else if (key === "prayer") {
            playerObject.setPrayer(gameData.playerCharacteristics.prayer);
        } else {
            playerObject.setAgility(gameData.playerCharacteristics.agility);
        }
    }
}