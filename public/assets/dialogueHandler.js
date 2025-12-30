import {dialogueData} from "./dataLoaders.js";
import {gameData, eventDescription, eventOptions} from "./gameData.js";
import {endEvent, appendContinueButton, displayAdventureLogMessage, appendRejectionMessage} from "./helperFunctions.js";
import {handleDeath} from "./deathHandler.js";
import {JournalUpdater} from "./JournalUpdater.js";

export function initDialogue(dialogueSlug, stateKey) {
    //find the dialogue
    const dialogue = dialogueData.dialogues.find(dialogue => dialogue.slug === dialogueSlug);

    //initiate the starting key
    let currentStateKey = stateKey || defineDialogueEntryPoint(dialogue);
    let currentState = dialogue[currentStateKey];

    if (!currentState) {
        console.error(`State "${currentStateKey}" not found in dialogue "${dialogueSlug}"`);
        return;
    }

    //add dialogue state's description to the event-box
    eventDescription.textContent = currentState.description;
    eventDescription.className = "dialogue-text-color";

    // clear dialogue options
    eventOptions.innerHTML = '';

    //check for options, if no options left, the dialogue will end
    if (currentState.options && currentState.options.length > 0) {
        currentState.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option.label;
            button.className = 'option-button';

            button.addEventListener("click", () => {

                const optionData = option;

                //if a certain option has a requirement, the function will check it
                if (optionData.requirements) {
                    let canProceed = true;

                    for (const [charKey, requiredValue] of Object.entries(optionData.requirements)) {
                        if ((gameData.playerCharacteristics[charKey] || 0) < requiredValue) {
                            canProceed = false;
                            appendRejectionMessage(optionData);
                            break;
                        }
                    }
                    if (!canProceed) {
                        return;
                    }
                }

                // if an option has a reward or debuff
                if (optionData.characteristics) {
                    for (const [key, value] of Object.entries(optionData.characteristics)) {
                        gameData.playerCharacteristics[key] += value;
                        const displayCharacteristic = document.querySelector(`.${key}-stat-value`);
                        displayCharacteristic.textContent = gameData.playerCharacteristics[key];

                        displayAdventureLogMessage(value, key, "dialogue-text-color");
                    }
                }

                // if an option has a quest marker
                if (optionData.quest) {
                    let journalUpdater = new JournalUpdater();
                    journalUpdater.questUpdater(optionData.quest);
                }

                // initiate next dialogue stage
                const nextStateKey = option.key;
                if (nextStateKey) {
                    eventOptions.innerHTML = '';
                    initDialogue(dialogueSlug, nextStateKey);
                }
            });
            eventOptions.appendChild(button);
        });
        //if no options left, register the final outcome
    } else {

        const finalStateKey = stateKey || currentStateKey;
        const finalState = dialogue[finalStateKey];

        if (!finalState) {
            console.error("Invalid final state:", finalStateKey);
            return;
        }

        // dialogue.finalOutcome = {
        //     finalKey: stateKey,
        //     description: finalState.description,
        //     characteristics: finalState.characteristics
        // }

        gameData.gameProgress.dialogueOutcomes[dialogueSlug] = {
            finalKey: stateKey,
            characteristics: finalState.characteristics
        };

        const dialogueOutcome = finalState.characteristics;

        if (dialogueOutcome) {
            eventOptions.innerHTML = "";
            let continueButton = appendContinueButton();
            eventOptions.prepend(continueButton);
            continueButton.addEventListener("click", function () {
                endEvent(dialogueSlug, stateKey, eventDescription, eventOptions);
                if (dialogue.quest) {
                    let journalUpdater = new JournalUpdater();
                    journalUpdater.questUpdater(dialogue.quest);
                }
                registerDialogueOutcome(dialogueOutcome);
            });
        }

        if (stateKey === "death") {
            handleDeath();
            return;
        }

        console.log(gameData.gameProgress.eventOutcomes);
        console.log("Final outcome registered:", dialogue.finalOutcome);
    }
}

export function registerDialogueOutcome(dialogueOutcome) {
    for (const [key, value] of Object.entries(dialogueOutcome)) {
        gameData.playerCharacteristics[key] += value;

        const displayCharacteristic = document.querySelector(`.${key}-stat-value`);
        if (displayCharacteristic) {
            displayCharacteristic.textContent = gameData.playerCharacteristics[key];

            displayAdventureLogMessage(value, key, "dialogue-text-color");

        } else {
            console.warn(`Missing DOM element for: .${key}-characteristic-count`);
        }
    }
}

function defineDialogueEntryPoint(dialogue) {
    if (!dialogue.entryPoints) {
        return dialogue.start;
    }
    for (let entryPoint of dialogue.entryPoints) {
        if (entryPoint.stateConditions.anyOf) {
            const isConditionMet = entryPoint.stateConditions.anyOf.some(condition => {
                if (condition.id && condition.state) {
                    const quest = gameData.quests.find(q => q.id === condition.id);
                    return quest.state === condition.state;
                }
            });
            if (isConditionMet) {
                return entryPoint.state;
            }
        }
    }
    return dialogue.start;
}
