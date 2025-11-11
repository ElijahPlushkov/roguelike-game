import {dialogueData} from "./dataLoaders.js";
import {gameData, eventDescription, eventOptions} from "./gameData.js";
import {endEvent, appendContinueButton, displayAdventurelogMessage} from "./helperFunctions.js";
import {handleDeath} from "./deathHandler.js";

export function initDialogue(dialogueSlug, stateKey) {
    //find the dialogue
    const dialogue = dialogueData.dialogues.find(dialogue => dialogue.slug === dialogueSlug);

    //initiate the starting key
    const currentStateKey = stateKey || dialogue.start || "greetings";
    const currentState = dialogue[currentStateKey];

    if (!currentState) {
        console.error(`State "${currentStateKey}" not found in dialogue "${dialogueSlug}"`);
        return;
    }

    //add dialogue state's description to the adventure log
    eventDescription.textContent = currentState.description;
    eventDescription.className = "dialogue-color";

    // clear dialogue options
    eventOptions.innerHTML = '';

    //check for options, if no options left, the dialogue will end
    if (currentState.options && currentState.options.length > 0) {
        currentState.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option.label;
            button.className = 'dialogue-button';

            button.addEventListener("click", () => {

                const optionData = option;

                //if a certain option has a requirement, the function will check it
                if (optionData.requirements) {
                    let canProceed = true;

                    for (const [charKey, requiredValue] of Object.entries(optionData.requirements)) {
                        if ((gameData.playerCharacteristics[charKey] || 0) < requiredValue) {
                            canProceed = false;
                            const rejection = document.createElement("div");
                            rejection.textContent = optionData.rejection || "You cannot do this.";
                            eventDescription.prepend(rejection);
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
                        const displayCharacteristic = document.querySelector(`.${key}-characteristic-count`);
                        displayCharacteristic.textContent = gameData.playerCharacteristics[key];

                        displayAdventurelogMessage(value, key, "dialogue-color");
                    }
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

        const finalState = dialogue[stateKey];

        dialogue.finalOutcome = {
            finalKey: stateKey,
            description: finalState.description,
            characteristics: finalState.characteristics
        }

        const dialogueOutcome = dialogue.finalOutcome.characteristics;

        if (dialogueOutcome) {
            eventOptions.innerHTML = "";
            let continueButton = appendContinueButton();
            eventOptions.prepend(continueButton);
            continueButton.addEventListener("click", function () {
                endEvent(dialogueSlug, stateKey, eventDescription, eventOptions);
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

        const displayCharacteristic = document.querySelector(`.${key}-characteristic-count`);
        if (displayCharacteristic) {
            displayCharacteristic.textContent = gameData.playerCharacteristics[key];

            displayAdventurelogMessage(value, key, "dialogue-color");

        } else {
            console.warn(`Missing DOM element for: .${key}-characteristic-count`);
        }
    }
}