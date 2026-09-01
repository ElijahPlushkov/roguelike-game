import { gameData, eventDescription, eventOptions, eventWindow } from "./data/gameData.js";
import { endEvent, createContinueButton, hasSpecialRequirements } from "./helperFunctions.js";
import { handleDeath } from "./deathHandler.js";
import { QuestJournalUpdater } from "./QuestJournalUpdater.js";
import { npcBox, npcDialogueWindowDescription, npcDialogueWindowOptions, registerNpcDeath } from "./npcHandler.js";
import { ChangeStats } from "./ChangeStats.js";
import { initCombat } from "./combatHandler.js";
import { AdventureLog } from "./AdventureLog.js";
import { getDialogue } from "./data/dialogueData/dialogueDataManager.js";

const adventureLogHandler = new AdventureLog();
const journalUpdater = new QuestJournalUpdater();

export function initDialogue(dialogueId, stateKey, dialogueSource = null) {
    //find the dialogue
    const dialogue = getDialogue(dialogueId);

    let dialogueWindow;
    let dialogueDescription;
    let dialogueOptions;

    if (dialogueSource === "npc") {
        dialogueWindow = npcBox;
        dialogueDescription = npcDialogueWindowDescription;
        dialogueOptions = npcDialogueWindowOptions;
    } else {
        dialogueWindow = eventWindow;
        dialogueDescription = eventDescription;
        dialogueOptions = eventOptions;
    }

    if (dialogue.requirements) {
        if (!hasSpecialRequirements(dialogue)) {
            dialogueDescription.textContent = dialogue.rejection;
            return;
        }
    }

    //initiate the starting key
    let currentStateKey = stateKey || defineDialogueEntryPoint(dialogue);
    let currentState = dialogue[currentStateKey];

    if (!currentState) {
        console.error(`State "${currentStateKey}" not found in dialogue "${dialogueId}"`);
        return;
    }

    //add dialogue state's description to the event-box
    dialogueDescription.textContent = currentState.description;
    dialogueDescription.className = "dialogue-text-color";

    // clear dialogue options
    dialogueOptions.innerHTML = '';

    //check for options, if no options left, the dialogue will end
    if (currentState.options && currentState.options.length > 0) {

        const visibleOptions = currentState.options.filter(option =>
            checkOptionConditions(option.optionConditions)
        );

        console.log(gameData.quests);
        let optionsCount = 1;

        visibleOptions.forEach(option => {
            const button = document.createElement("button");
            button.textContent = optionsCount++ + ". " + option.label + displayStatRequirementsInfo(option);
            button.className = 'option-button';

            button.addEventListener("click", () => {

                //if a certain option has a requirement, the function will check it
                if (option.requirements) {
                    let canProceed = true;

                    for (const [charKey, requiredValue] of Object.entries(option.requirements)) {
                        if ((gameData.playerCharacteristics[charKey] || 0) < requiredValue) {
                            canProceed = false;
                            dialogueDescription.textContent = option.rejection;
                            break;
                        }
                    }
                    if (!canProceed) {
                        return;
                    }
                }

                // if an option has a reward or debuff
                if (option.characteristics) {
                    let statChanger = new ChangeStats();
                    statChanger.changeStats(option.characteristics);
                    adventureLogHandler.appendEventMessage(option.characteristics);
                }

                // if an option has a quest marker
                if (option.quest) {
                    journalUpdater.journalUpdater(option.quest);
                }

                // if an option has an npc death marker
                if (option.npcDeath) {
                    registerNpcDeath(option.npcDeath.id);
                }

                // if an option has a combat marker
                if (option.initCombat) {
                    initCombat(option.initCombat.id, "npc");
                }

                // initiate next dialogue stage
                const nextStateKey = option.key;
                if (nextStateKey) {
                    dialogueOptions.innerHTML = '';
                    initDialogue(dialogueId, nextStateKey, dialogueSource);
                }
            });
            dialogueOptions.appendChild(button);
        });
        //if no options left, register the final outcome
    } else {

        const finalStateKey = stateKey || currentStateKey;
        console.log(finalStateKey);
        const finalState = dialogue[finalStateKey];
        console.log(finalState);

        if (!finalState) {
            console.error("Invalid final state:", finalStateKey);
            return;
        }

        dialogueOptions.innerHTML = "";
        let continueButton = createContinueButton();
        dialogueOptions.prepend(continueButton);

        continueButton.addEventListener("click", function () {
            endEvent(dialogueId, finalStateKey, dialogueDescription, dialogueOptions, dialogueWindow, "dialogue");
            console.log(gameData.dialogueOutcomes);
            if (dialogue.quest) {
                journalUpdater.journalUpdater(dialogue.quest);
            }
            if (finalState.characteristics) {
                let statChanger = new ChangeStats();
                statChanger.changeStats(finalState.characteristics);
                adventureLogHandler.appendEventMessage(finalState.characteristics);
            }
        });

        if (stateKey === "death") {
            handleDeath();
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
                    const quest = gameData.quests.find(quest => quest.id === condition.id);
                    if (quest) {
                        return quest.states.includes(condition.state);
                    }
                }
                else if (condition.dialogueOutcome) {
                    const dialogueOutcome = gameData.dialogueOutcomes.find(dialogue => condition.dialogueOutcome === dialogue.outcome);
                    if (!dialogueOutcome) {
                        return;
                    }
                    return condition.dialogueOutcome === dialogueOutcome.outcome;
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

    if (optionConditions.dialogueOutcome) {
        const { id, outcome } = optionConditions.dialogueOutcome;
        const dialogue = gameData.dialogueOutcomes.find(dialogue => dialogue.id === id);
        console.log(dialogue);
        return dialogue ? dialogue.outcome === outcome : false;
    }

    if (optionConditions.quest) {
        const { id, state } = optionConditions.quest;
        const quest = gameData.quests.find(quest => quest.id === id);
        if (quest) {
            return quest.states.includes(state);
        } else {
            return false;
        }
    }

    if (optionConditions.npc) {
        const {id, isAlive} = optionConditions.npc;
        const npc = gameData.npcs.find(npc => npc.id === id);
        if (npc) {
            return npc.isAlive === isAlive;
        } else {
            return false;
        }
    }
    return true;
}

function displayStatRequirementsInfo(option) {

    let requirementInfo = "";

    if (option.requirements) {
        for (const [requirement, value] of Object.entries(option.requirements)) {
            let abbreviations = requirement.slice(0, 1).toUpperCase();
            requirementInfo += " [" + abbreviations + ": " + value + "]";
        }
    }
    return requirementInfo;
}