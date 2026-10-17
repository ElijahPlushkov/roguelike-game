import { gameData, specialMessageDescription, specialMessageOptions, specialMessageWindow } from "./data/gameData.js";
import { createContinueButton } from "./helperFunctions.js";
import { specialEventData, collectionQuests } from "./data/specialEventData.js";

export function initSpecialEvent(id) {
    let specialEvent = specialEventData.specialEvents.find(specialEvent => specialEvent.id === id);
    if (specialEvent) {
        if (!specialEvent.hasOccurred) {
            specialEvent.script();
            specialEvent.hasOccured = true;
        } else {
            return;
        }
    } else {
        return;
    }
}

export function initCollectionQuests() {
    for (const questId of collectionQuests) {
        let specialEvent = specialEventData.specialEvents.find(specialEvent => specialEvent.id === questId);

        if (!specialEvent || specialEvent.hasOccurred) continue;

        let canOccur = specialEvent.script();
        if (canOccur) {
            specialEvent.hasOccurred = true;
        } else {
            continue;
        }
    }
}

export function displaySpecialMessage(message) {
    gameData.isEventActive = true;
    specialMessageWindow.classList.remove("hidden");
    specialMessageDescription.textContent = message;

    let continueButton = createContinueButton();
    specialMessageOptions.prepend(continueButton);

    continueButton.addEventListener("click", () => {
        gameData.specialMessage = "";
        specialMessageWindow.classList.add("hidden");
        gameData.isEventActive = false;
    });
}