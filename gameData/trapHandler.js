import { trapData } from "./data/trapData.js";
import { displayCurrentHealth, displayCurrentMysticism, gameData, player } from "./data/gameData.js";
import { changeTileType } from "./mapHandler.js";
import { AdventureLogHandler } from "./AdventureLogHandler.js";
import { endEvent, markEventSeen } from "./helperFunctions.js";
import { ChangeStats } from "./ChangeStats.js";

const adventureLogHandler = new AdventureLogHandler();

const trapWindow = document.querySelector(".trap-box");
const trapDescription = document.querySelector(".trap-description");
const trapOptions = document.querySelector(".trap-options");

export function initTrap(trapId, x, y) {
    let trap = trapData.traps.find(trap => trapId === trap.id);

    if (trap.active && !trap.detected) {
        applyEffect(trap.effect);
        adventureLogHandler.appendFailMessage("You fall into a trap.");
        trap.detected = true;
        changeTileType(x, y, "⁜");
    } else if (trap.active && trap.detected) {
        trapWindow.classList.remove("hidden");
        trapDescription.className = "event-text-color";
        trapDescription.textContent = "Do you want to disarm the trap?";

        const disarmButton = createActionButton("disarm");
        const leaveButton = createActionButton("leave");

        disarmButton.onclick = () => {
            if (canDisarm(gameData.playerCharacteristics.agility, trap.disarm)) {
                trap.active = false;
                changeTileType(x, y, ".");
                resolveTrapEncounter(trap, trapId, "disarmed", trapDescription, trapOptions, trapWindow);
                adventureLogHandler.appendSuccessfulMessage("You disarmed the trap.");
            } else {
                applyEffect(trap.effect);
                adventureLogHandler.appendFailMessage("You fail to disarm the trap.");
            }
        }

        leaveButton.onclick = () => {
            gameData.isEventActive = false;
            trapWindow.classList.add("hidden");
            trapDescription.textContent = "";
            trapOptions.textContent = "";
            adventureLogHandler.appendSuccessfulMessage("You stay away from the trap.");
        }
    }
}

function resolveTrapEncounter(trap, trapId, status, trapDescription, trapOptions, trapWindow) {
    endEvent(trapId, status, trapDescription, trapOptions, trapWindow);
    const reward = trap.reward;
    let statChanger = new ChangeStats();
    statChanger.changeStats(reward);
    markEventSeen(trapId);
    gameData.isEventActive = false;
}

function canDisarm(agility, disarm) {
    return (agility + Math.floor(Math.random() * agility)) > disarm;
}

export function isTrapDetected(x, y, trapId) {
    let isDetected;
    let trap = trapData.traps.find(trap => trapId === trap.id);
    isDetected = trap.requirements.prayer <= player.prayer;
    if (isDetected) {
        trap.detected = true;
        adventureLogHandler.appendFailMessage("You see a trap!");
        changeTileType(x, y, "⁜");
    }
    return isDetected;
}

function applyEffect(effect) {
    const attributes = ["might", "agility", "prayer", "reputation"];

    for (const [key, value] of Object.entries(effect)) {
        if (key === "health") {
            player.setCurrentHealth(player.getCurrentHealth() - value);
            gameData.currentHealth = player.currentHealth;
            displayCurrentHealth.textContent = player.currentHealth;
        }
        if (key === "mysticism") {
            player.setCurrentMysticism(player.getCurrentMysticism() - value);
            gameData.currentMysticism = player.currentMysticism;
            displayCurrentMysticism.textContent = player.currentMysticism;
        }
        if (attributes.includes(key)) {
            let statChanger = new ChangeStats();
            statChanger.changeStats(effect);
            adventureLogHandler.appendEventMessage(effect);
        }
    }
}

function createActionButton(type) {
    const button = document.createElement("button");
    button.classList.add("trap-button", `${type}-button`);
    if (type === "leave") {
        button.textContent = "Leave";
    } else {
        button.textContent = "Disarm";
    }
    trapOptions.prepend(button);
    return button;
}