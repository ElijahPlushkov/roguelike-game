// this class will manage the adventure log
// add correct messages
// attach timestamps with in-game time

export class AdventureLogHandler {

    adventureLog = document.querySelector(".adventure-log");

    appendRejectionMessage(eventData) {
        const existingRejection = this.adventureLog.querySelector(".rejection-text-color");
        if (existingRejection) {
            return;
        }

        const rejection = document.createElement("p");
        rejection.textContent = eventData.rejection;
        rejection.classList.add("rejection-text-color");
        this.adventureLog.prepend(rejection);
    }

    appendEventMessage(reward) {
        for (const [key, value] of Object.entries(reward)) {

            const eventMessage = document.createElement("p");
            eventMessage.className = "event-text-color";
            let text;

            if (value < 0) {
                if (key === "pollen") {
                    if (value === -1) {
                        text = `You lose: ${value} pollen grain.`;
                    } else {
                        text = `You lose: ${value} pollen grains.`;
                    }
                } else {
                    text = `You lose: ${value} ${key}.`;
                }
            } else {
                if (key === "pollen") {
                    if (value === 1) {
                        text = `Your reward: ${value} pollen grain.`;
                    } else {
                        text = `Your reward: ${value} pollen grains.`;
                    }
                } else {
                    text = `Your reward: ${value} ${key}.`;
                }
            }

            eventMessage.textContent = text;
            this.adventureLog.prepend(eventMessage);
        }
    }

    appendCombatResolutionMessage(key, value, pollenChange, race) {
        const combatMessage = document.createElement("p");
        combatMessage.className = "log-entry";

        let text;
        text = `Your ${key} increased by ${value}. You collect ${pollenChange} pollen grains.`

        combatMessage.textContent = text;
        this.adventureLog.prepend(combatMessage);
        this.appendDefeatMessage(race);
    }

    appendDefeatMessage(race) {
        const defeatMessage = document.createElement("p");
        defeatMessage.className = "log-entry";

        let text;
        text = `You defeated: ${race}.`

        defeatMessage.textContent = text;
        this.adventureLog.prepend(defeatMessage);
    }

    appendFleeMessage(message) {
        const fleeMessage = document.createElement("p");
        fleeMessage.className = "combat-text-color";
        fleeMessage.textContent = message;
        this.adventureLog.prepend(fleeMessage);
    }

    appendQuestJournalMessage(message) {
        const questJournalMessage = document.createElement("p");
        questJournalMessage.className = "dialogue-text-color";
        questJournalMessage.textContent = message;
        this.adventureLog.prepend(questJournalMessage);
    }

    appendDeathMessage(message) {
        const deathMessage = document.createElement("p");
        deathMessage.className = "dialogue-text-color";
        deathMessage.textContent = message;
        this.adventureLog.prepend(deathMessage);
    }

    appendSystemMessage(message) {
        const systemMessage = document.createElement("p");
        systemMessage.className = "log-entry";
        systemMessage.textContent = message;
        this.adventureLog.prepend(systemMessage);
    }

    clearAdventureLog() {
        this.adventureLog.innerHTML = "";
    }
}