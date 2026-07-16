import { trapData } from "./data/trapData.js";
import { displayCurrentHealth, gameData, player } from "./data/gameData.js";
import { changeTileType } from "./mapHandler.js";
import { AdventureLogHandler } from "./AdventureLogHandler.js";

const adventureLogHandler = new AdventureLogHandler();

export function initTrap(trapId) {
    let trap = trapData.traps.find(trap => trapId === trap.id);
    if (trap.active && !trap.detected) {
        applyEffect(trap.effect);
        adventureLogHandler.appendSystemMessage("You fall into a trap.");
    } else {
        adventureLogHandler.appendSystemMessage("You avoid a trap.");
    }
}

export function isTrapDetected(x, y, trapId) {
    let isDetected;
    let trap = trapData.traps.find(trap => trapId === trap.id);
    isDetected = trap.requirements.prayer <= player.prayer;
    if (isDetected) {
        trap.detected = true;
        adventureLogHandler.appendSystemMessage("You see a trap!");
        changeTileType(x, y, "⁜");
    }
    return isDetected;
}

function applyEffect(effect) {
    for (const [key, value] of Object.entries(effect)) {
        if (key === "health") {
            player.setCurrentHealth(player.getCurrentHealth() - value);
            gameData.currentHealth = player.currentHealth;
            displayCurrentHealth.textContent = player.currentHealth;
        }
    }
}