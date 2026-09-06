import { gameData } from "./data/gameData.js";
import {
    antColonyAreInfectedAntsDefeated,
    FirstKingdomFortLightTorch,
    isAntColonyInfected
} from "./specialEventsHandler.js";

export function hasSpecialRequirements(event) {
    let isConditionMet = event.requirements.anyOf.some(condition => {
        if (condition.id && condition.isAlive !== undefined) {
            const npc = gameData.npcs.find(npc => npc.id === condition.id);
            return npc ? npc.isAlive === condition.isAlive : false;
        }

        if (condition.id && condition.state) {
            const quest = gameData.quests.find(quest => quest.id === condition.id);
            return quest ? quest.states.includes(condition.state) : false;
        }

        if (condition.dialogueOutcome) {
            const dialogueOutcome = gameData.dialogueOutcomes.find(
                outcome => outcome.dialogue === condition.id
            );
            return dialogueOutcome
                ? condition.dialogueOutcome === dialogueOutcome.outcome
                : false;
        }

        if (condition.activatorStatus) {
            const activator = gameData.activatorStatuses.find(activator => activator.id === condition.id);
            return activator ? activator.status === condition.activatorStatus : false;
        }
        return false;
    });

    return isConditionMet;
}

export function createContinueButton() {
    const continueButton = document.createElement("button");
    continueButton.textContent = "Continue.";
    continueButton.className = "option-button option-button_small";
    return continueButton;
}

export function endEvent(id, status, description, options, activeWindow, eventType) {
    gameData.isEventActive = false;
    updateGameProgress(id, status, eventType);
    description.textContent = "";
    options.textContent = "";
    activeWindow.classList.add("hidden");

    // TODO this is a temporary solution
   if (!hasSeenEvent("antColonyAreInfectedAntsDefeatedEvent")) {
       antColonyAreInfectedAntsDefeated();
   }

    if (!hasSeenEvent("antColonyOutcome")) {
        isAntColonyInfected();
    }

    if (!hasSeenEvent("light-torch")) {
        FirstKingdomFortLightTorch();
    }
}

function updateGameProgress(id, finalState, eventType) {
    if (eventType === "dialogue") {
        let dialogue = gameData.dialogueOutcomes.find(dialogue => dialogue.id === id);
        if (dialogue) {
            if (dialogue.outcome !== finalState) {
                dialogue.outcome = finalState
            }
        } else {
            gameData.dialogueOutcomes.push({
                id: id,
                outcome: finalState
            })
        }
    }
    if (eventType === "combat") {
        let enemy = gameData.combatOutcomes.find(enemy => enemy.id === id);
        if (enemy) {
            if (enemy.outcome !== finalState) {
                enemy.outcome = finalState
            }
        } else {
            gameData.combatOutcomes.push({
                id: id,
                outcome: finalState
            })
        }
        console.log(gameData.combatOutcomes);
    }
    if (eventType === "event") {
        let event = gameData.eventOutcomes.find(event => event.id === id);
        if (event) {
            if (event.outcome !== finalState) {
                event.outcome = finalState;
            }
        } else {
            gameData.eventOutcomes.push({
                id: id,
                outcome: finalState
            });
        }
    }
    if (eventType === "door") {
        let door = gameData.doorOutcomes.find(door => door.id === id);
        if (door) {
            if (door.outcome !== finalState) {
                door.outcome = finalState
            }
        } else {
            gameData.doorOutcomes.push({
                id: id,
                outcome: finalState
            })
        }
    }
    if (eventType === "trap") {
        let trap = gameData.trapOutcomes.find(trap => trap.id === id);
        if (trap) {
            if (trap.outcome !== finalState) {
                trap.outcome = finalState
            }
        } else {
            gameData.trapOutcomes.push({
                id: id,
                outcome: finalState
            })
        }
    }
    if (eventType === "activator") {
        let activator = gameData.activatorStatuses.find(activator => activator.id === id);
        if (activator) {
            if (activator.status !== finalState) {
                activator.status = finalState
            }
        } else {
            gameData.activatorStatuses.push({
                id: id,
                status: finalState
            })
        }
    }
    console.log(gameData.activatorStatuses);
}

export function hasSeenEvent(id) {
    return gameData.seenEvents.includes(id);
}

export function markEventSeen(id) {
    gameData.seenEvents.push(id);
    console.log(gameData.seenEvents);
}

export function markLocationSeen(info) {
    let locationId = info.id;
    let location = gameData.locations.find(location => location.id === locationId);
    if (!location) {
        gameData.locations.push(info);
        console.log(gameData.locations);
    }
}

export function hasDiscoveredLocation(locationId) {
    return gameData.locations.find(location => location.id === locationId);
}