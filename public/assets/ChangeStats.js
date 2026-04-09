import {displayPollen, gameData, player} from "./gameData.js";
import {displayAdventureLogMessage} from "./helperFunctions.js";
import {AdventureLogHandler} from "./AdventureLogHandler.js";

export class ChangeStats {

    adventureLogHandler = new AdventureLogHandler();

    changeStats(reward) {
        for (const [key, value] of Object.entries(reward)) {
            if (key === "pollen") {
                gameData.pollen += value;
            } else {
                gameData.playerCharacteristics[key] += value;
            }
            this.updateDomStats(key, value);
            this.updatePlayerObjectStats(key);
            player.changeAttributes(key);
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