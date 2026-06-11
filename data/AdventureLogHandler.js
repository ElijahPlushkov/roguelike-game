export class AdventureLogHandler {

    adventureLog = document.querySelector(".adventure-log");

    appendRejectionMessage(eventData) {
        const existingRejection = this.adventureLog.querySelector(".rejection-text-color");
        if (existingRejection) {
            return;
        }

        const rejection = this.createDomElementMessage();
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

    createDomElementMessage() {
        return document.createElement("li");
    }

    appendCombatResolutionMessage(key, value, pollenChange, race) {
        const combatMessage = this.createDomElementMessage();
        combatMessage.className = "log-entry";
        combatMessage.textContent = `Your ${key} increased by ${value}. You collect ${pollenChange} pollen grains.`;
        this.adventureLog.prepend(combatMessage);
        this.appendVictoryMessage(race);
    }

    appendVictoryMessage(race) {
        const defeatMessage = this.createDomElementMessage();
        defeatMessage.className = "log-entry";
        defeatMessage.textContent = `You defeated: ${race}.`;
        this.adventureLog.prepend(defeatMessage);
    }

    appendFleeMessage(message) {
        const fleeMessage = this.createDomElementMessage();
        fleeMessage.className = "combat-text-color";
        fleeMessage.textContent = message;
        this.adventureLog.prepend(fleeMessage);
    }

    appendQuestJournalMessage(message) {
        const questJournalMessage = this.createDomElementMessage();
        questJournalMessage.className = "dialogue-text-color";
        questJournalMessage.textContent = message;
        this.adventureLog.prepend(questJournalMessage);
    }

    appendDeathMessage(message) {
        const deathMessage = this.createDomElementMessage();
        deathMessage.className = "dialogue-text-color";
        deathMessage.textContent = message;
        this.adventureLog.prepend(deathMessage);
    }

    appendSystemMessage(message) {
        const systemMessage = this.createDomElementMessage();
        systemMessage.className = "log-entry";
        systemMessage.textContent = message;
        this.adventureLog.prepend(systemMessage);
    }

    appendLocationDiscoveryMessage(locationName) {
        const locationMessage = this.createDomElementMessage();
        locationMessage.className = "dialogue-text-color";
        locationMessage.textContent = "You discovered: " + locationName;
        this.adventureLog.prepend(locationMessage);
    }

    clearAdventureLog() {
        this.adventureLog.innerHTML = "";
    }
}