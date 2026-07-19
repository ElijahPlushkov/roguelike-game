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

            const eventMessage = this.createDomElementMessage();

            let text;

            if (value < 0) {
                if (key === "pollen") {
                    if (value === -1) {
                        eventMessage.className = "log-entry";
                        text = `You lose: ${value} pollen grain.`;
                    } else {
                        text = `You lose: ${value} pollen grains.`;
                    }
                } else {
                    text = `You lose: ${value} ${key}.`;
                }
            } else {
                eventMessage.className = "dialogue-text-color";
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
        combatMessage.className = "dialogue-text-color";
        combatMessage.textContent = `Your ${key} increased by ${value}. You collect ${pollenChange} pollen grains.`;
        this.adventureLog.prepend(combatMessage);
        this.appendVictoryMessage(race);
    }

    appendVictoryMessage(race) {
        const defeatMessage = this.createDomElementMessage();
        defeatMessage.className = "event-text-color";
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
        questJournalMessage.className = "event-text-color";
        questJournalMessage.textContent = message;
        this.adventureLog.prepend(questJournalMessage);
    }

    appendDeathMessage(message) {
        const deathMessage = this.createDomElementMessage();
        deathMessage.className = "log-entry";
        deathMessage.textContent = message;
        this.adventureLog.prepend(deathMessage);
    }

    appendSuccessfulMessage(message) {
        const systemMessage = this.createDomElementMessage();
        systemMessage.className = "dialogue-text-color";
        systemMessage.textContent = message;
        this.adventureLog.prepend(systemMessage);
    }

    appendFailMessage(message) {
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