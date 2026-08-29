import { activatorData } from "./data/activatorData.js";
import { AdventureLogHandler } from "./AdventureLogHandler.js";
import { gameData } from "./data/gameData.js";
import { endEvent } from "./helperFunctions.js";

const activatorBox = document.querySelector(".activator-box");
const activatorDescription = document.querySelector(".activator-description");
const activatorOptions = document.querySelector(".activator-options");

const adventureLog = new AdventureLogHandler();

export function initActivator(activatorId) {
    gameData.isEventActive = true;

    const activator = activatorData.activators.find(activator => activator.id === activatorId);

    const activateButton = createActionButton("activate");
    const deactivateButton = createActionButton("deactivate");
    const leaveButton = createActionButton("leave");

    activatorDescription.textContent = activator.description;

    if (!activator.isActive) {
        deactivateButton.classList.add("hidden");
    } else {
        activateButton.classList.add("hidden");
    }

    activatorBox.classList.remove("hidden");

    activateButton.onclick = () => {
        activator.scriptActivate();
        activator.isActive = true;
        adventureLog.appendActivatorMessage(activator.activatedMessage);
        endEvent(activator.id, activator.isActive, activatorDescription, activatorOptions, activatorBox, "activator");
    }

    deactivateButton.onclick = () => {
        activator.scriptDeactivate();
        activator.isActive = false;
        adventureLog.appendActivatorMessage(activator.deactivatedMessage);
        endEvent(activator.id, activator.isActive, activatorDescription, activatorOptions, activatorBox, "activator");
    }

    leaveButton.onclick = () => {
        activatorBox.classList.add("hidden");
        activatorOptions.innerHTML = "";
    }
}

function createActionButton(type) {
    const button = document.createElement("button");
    button.classList.add("activator-button", `${type}-button`);
    if (type === "activate") {
        button.textContent = "Activate";
    } else if (type === "deactivate") {
        button.textContent = "Deactivate";
    } else {
        button.textContent = "Leave";
    }
    activatorOptions.prepend(button);
    return button;
}