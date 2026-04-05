// this class will manage the adventure log
// add correct messages
// attach timestamps with in-game time

import {adventureLog} from "./gameData.js";

export class AdventureLogHandler {
    appendRejectionMessage(eventData) {
        const existingRejection = adventureLog.querySelector(".rejection-text-color");
        if (existingRejection) {
            return;
        }

        const rejection = document.createElement("p");
        rejection.textContent = eventData.rejection;
        rejection.classList.add("rejection-text-color");
        adventureLog.prepend(rejection);
    }
}