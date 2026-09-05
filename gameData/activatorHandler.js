import { activatorData } from "./data/activatorData.js";
import { AdventureLog } from "./AdventureLog.js";
import { gameData, player } from "./data/gameData.js";
import { endEvent } from "./helperFunctions.js";
import { changeTileType } from "./mapHandler.js";

const activatorBox = document.querySelector(".activator-box");
const activatorDescription = document.querySelector(".activator-description");
const activatorOptions = document.querySelector(".activator-options");
let activateButton;
let deactivateButton;
let leaveButton;

const adventureLog = new AdventureLog();

export function initActivator(activatorId) {
    const activator = activatorData.activators.find(activator => activator.id === activatorId);

    if (activator.detected) {
        gameData.isEventActive = true;

        let activationRequirement;
        if (activator.activate > 0) {
            activationRequirement = ": " + "[M:" + activator.activate + "]";
        }

        if (activator.type === "toggleable") {
            activateButton = createActionButton("activate", activationRequirement);
            deactivateButton = createActionButton("deactivate");
            leaveButton = createActionButton("leave");
        } else {
            activateButton = createActionButton("activate", activationRequirement);
            leaveButton = createActionButton("leave");
        }

        activatorDescription.textContent = activator.description;

        if (!activator.isActive) {
            deactivateButton.classList.add("hidden");
        } else {
            activateButton.classList.add("hidden");
        }

        activatorBox.classList.remove("hidden");

        activateButton.onclick = () => {
            if (canActivate(activator)) {
                activator.scriptActivate();
                activator.isActive = true;
                adventureLog.appendActivatorMessage(activator.activatedMessage);
                endEvent(activator.id, activator.isActive, activatorDescription, activatorOptions, activatorBox, "activator");
            } else {
                adventureLog.appendActivatorMessage("You cannot activate it.");
                return;
            }
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
            gameData.isEventActive = false;
        }
    } else {
        return;
    }
}

function createActionButton(type, activationRequirement = null) {
    const button = document.createElement("button");
    button.classList.add("activator-button", `${type}-button`);
    if (type === "activate") {
        if (activationRequirement) {
            button.textContent = "Activate" + activationRequirement;
        } else {
            button.textContent = "Activate";
        }
    } else if (type === "deactivate") {
        button.textContent = "Deactivate";
    } else {
        button.textContent = "Leave";
    }
    activatorOptions.prepend(button);
    return button;
}

function canActivate(activator) {
    return activator.activate <= player.might;
}

export function isActivatorDetected(x, y, activatorId) {
    let isDetected;
    let activator = activatorData.activators.find(activator => activatorId === activator.id);
    isDetected = activator.requirements <= player.prayer;
    if (isDetected) {
        changeTileType(x, y, "⊡");
        activator.detected = true;
        // adventureLog.appendSuccessfulMessage("You found an activator.");
    }
    return isDetected;
}