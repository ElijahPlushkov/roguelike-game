import { gameData } from "./data/gameData.js";
import {questScript} from "./questScript.js";
import { QuestJournalUpdater } from "./QuestJournalUpdater.js";


export function createContinueButton() {
    const continueButton = document.createElement("button");
    continueButton.textContent = "Continue.";
    continueButton.className = "option-button option-button_small";
    return continueButton;
}

let isConsequenceTriggered = false;

export function endEvent(id, status, description, options, activeWindow, eventType) {
    gameData.isEventActive = false;
    updateGameProgress(id, status, eventType);
    description.textContent = "";
    options.textContent = "";
    activeWindow.classList.add("hidden");

    // TODO this is a temporary solution
    const questActive = questScript();

    if (questActive && !isConsequenceTriggered) {
        let journalUpdater = new QuestJournalUpdater();
        journalUpdater.journalUpdater({id: "strike-back", state: "diseased-ants-killed"});
        isConsequenceTriggered = true;
    } else if (questActive && isConsequenceTriggered) {
        return;
    }
}

function updateGameProgress(id, finalState, eventType) {
    if (eventType === "dialogue") {
        let dialogue = gameData.dialogueOutcomes.find(dialogue => dialogue.dialogue === id);
        if (dialogue) {
            if (dialogue.outcome !== finalState) {
                dialogue.outcome = finalState
            }
        } else {
            gameData.dialogueOutcomes.push({
                dialogue: id,
                outcome: finalState
            })
        }
    }
    if (eventType === "combat") {
        let enemy = gameData.combatOutcomes.find(enemy => enemy.enemy === id);
        if (enemy) {
            if (enemy.outcome !== finalState) {
                enemy.outcome = finalState
            }
        } else {
            gameData.combatOutcomes.push({
                enemy: id,
                outcome: finalState
            })
        }
    }
    if (eventType === "event") {
        let event = gameData.eventOutcomes.find(event => event.event === id);
        if (event) {
            if (event.outcome !== finalState) {
                event.outcome = finalState;
            }
        } else {
            gameData.eventOutcomes.push({
                event: id,
                outcome: finalState
            });
        }
    }
    if (eventType === "door") {
        let door = gameData.doorOutcomes.find(door => door.door === id);
        if (door) {
            if (door.outcome !== finalState) {
                door.outcome = finalState
            }
        } else {
            gameData.doorOutcomes.push({
                door: id,
                outcome: finalState
            })
        }
    }
    if (eventType === "trap") {
        let trap = gameData.trapOutcomes.find(trap => trap.trap === id);
        if (trap) {
            if (trap.outcome !== finalState) {
                trap.outcome = finalState
            }
        } else {
            gameData.trapOutcomes.push({
                trap: id,
                outcome: finalState
            })
        }
    }
}

export function hasSeenEvent(id) {
    return gameData.seenEvents.includes(id);
}

export function markEventSeen(id) {
    gameData.seenEvents.push(id);
}

export function markLocationSeen(info) {
    let locationId = info.id;
    let location = gameData.locations.find(location => location.id === locationId);
    if (!location) {
        gameData.locations.push(info);
        console.log(gameData.locations);
    }
}