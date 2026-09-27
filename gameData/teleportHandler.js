import { teleportData } from "./data/teleportData.js";
import { mapRender } from "./mapRender.js";
import { displayPollen, gameData, playerCoordinates } from "./data/gameData.js";
import { AdventureLog } from "./AdventureLog.js";

const adventureLogHandler = new AdventureLog();

const teleportBox = document.querySelector(".teleport-box");
const teleportDescription = document.querySelector(".teleport-description");
const teleportOptions = document.querySelector(".teleport-options");
let chargeButton;
let leaveButton;

export function initTeleport(teleportId, teleportCoordinates) {
    let teleport = teleportData.teleports.find(teleport => teleport.id === teleportId);
    if (teleport) {
        if (teleport.charges > 0) {
            teleport.charges = teleport.charges - 1;
            playerCoordinates.x = teleport.endPointCoordinates.x;
            playerCoordinates.y = teleport.endPointCoordinates.y;
            if (teleport.script) {
                teleport.script();
            }
            mapRender();
        } else {
            let chargeCost = calculateChargeCost(teleport, teleportCoordinates);
            gameData.isEventActive = true;
            teleportBox.classList.remove("hidden");
            teleportDescription.textContent = "The teleport has run out of charges. Do you wish to charge it? You need " + chargeCost + " pollen.";
            chargeButton = createActionButton("charge");
            leaveButton = createActionButton("leave");

            chargeButton.onclick = () => {
                if (gameData.pollen >= chargeCost) {
                    teleport.charges = 1;
                    gameData.pollen = gameData.pollen - chargeCost;
                    displayPollen.textContent = gameData.pollen;
                    hideTeleportBox();
                    adventureLogHandler.appendSuccessfulMessage("You charge the teleport.");
                } else {
                    hideTeleportBox();
                    adventureLogHandler.appendFailMessage("You don't have enough pollen.");
                }
            }

            leaveButton.onclick = () => {
                hideTeleportBox();
            }
        }
    }
}

function calculateChargeCost(teleport, teleportCoordinates) {
    let finalCost;
    const costPerTile = 20;

    let distanceX = Math.abs(teleportCoordinates.x - teleport.endPointCoordinates.x);
    let distanceY = Math.abs(teleportCoordinates.y - teleport.endPointCoordinates.y);

    if (distanceX > distanceY) {
        finalCost = distanceX * costPerTile;
    } else if (distanceX < distanceY) {
        finalCost = distanceY * costPerTile;
    } else {
        finalCost = distanceX * costPerTile;
    }

    return finalCost
}

function createActionButton(type) {
    const button = document.createElement("button");
    button.classList.add("teleport-button", `${type}-button`);
    if (type === "charge") {
        button.textContent = "Charge.";
    } else {
        button.textContent = "Leave.";
    }
    teleportOptions.prepend(button);
    return button;
}

function hideTeleportBox() {
    teleportBox.classList.add("hidden");
    teleportOptions.innerHTML = "";
    gameData.isEventActive = false;
}