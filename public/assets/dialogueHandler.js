import {gameData, eventDescription, eventOptions, dialogueData} from "./gameData.js";
import {endEvent, appendContinueButton, displayAdventureLogMessage, appendRejectionMessage} from "./helperFunctions.js";
import {handleDeath} from "./deathHandler.js";
import {QuestUpdater} from "./QuestUpdater.js";
import {registerEventOutcome} from "./eventHandler.js";

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

        const visibleOptions = currentState.options.filter(option =>
            checkOptionConditions(option.optionConditions)
        );

        visibleOptions.forEach(option => {
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
                    let journalUpdater = new QuestUpdater();
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

        console.log(finalStateKey);

        if (!finalState) {
            console.error("Invalid final state:", finalStateKey);
            return;
        }

        gameData.gameProgress.eventOutcomes[dialogueSlug] = {
            eventOutcome: stateKey
        };

        if (finalState.characteristics) {
            eventOptions.innerHTML = "";
            let continueButton = appendContinueButton();
            eventOptions.prepend(continueButton);

            continueButton.addEventListener("click", function () {
                endEvent(dialogueSlug, stateKey, eventDescription, eventOptions);
                if (dialogue.quest) {
                    let journalUpdater = new QuestUpdater();
                    journalUpdater.questUpdater(dialogue.quest);
                }
                registerEventOutcome(finalState.characteristics);
            });
        }

        if (stateKey === "death") {
            handleDeath();
            return;
        }

        console.log(gameData.gameProgress.eventOutcomes);
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
                if (condition.eventOutcome) {
                    if (!gameData.gameProgress.eventOutcomes[dialogue.slug]) {
                        return;
                    }
                    const eventOutcome = gameData.gameProgress.eventOutcomes[dialogue.slug];
                    return condition.eventOutcome === eventOutcome.eventOutcome;
                }
            });
            if (isConditionMet) {
                return entryPoint.state;
            }
        }
    }
    return dialogue.start;
}

function checkOptionConditions(optionConditions) {
    if (!optionConditions) {
        return true;
    }
    if (optionConditions.quest) {
        const { id, state } = optionConditions.quest;
        const quest = gameData.quests.find(quest => quest.id === id);
        return quest.state === state
    }

    if (optionConditions.npc) {
        const {name, isAlive} = optionConditions.npc;
        const npc = gameData.npcs.find(npc => npc.name === name)
        return npc.isAlive === isAlive;
    }

    return true;
}
