import {dialogueData} from "./dataLoaders.js";
import {gameData} from "./gameData.js";
import {adventureLog} from "./gameData.js";
import {endEvent} from "./helperFunctions.js";
import {handleDeath} from "./deathHandler.js";

export function initDialogue(dialogueSlug, stateKey) {

    const dialogue = dialogueData.dialogues.find(dialogue => dialogue.slug === dialogueSlug);
    const currentStateKey = stateKey || dialogue.start || "greetings";
    const currentState = dialogue[currentStateKey];

    if (!currentState) {
        console.error(`State "${currentStateKey}" not found in dialogue "${dialogueSlug}"`);
        return;
    }

    console.log(currentState);

    const description = document.createElement("p");
    description.textContent = currentState.description;
    description.className = "dialogue-color";

    adventureLog.prepend(description);

    const options = document.createElement("div");
    description.append(options);
    options.innerHTML = '';

    if (currentState.options && currentState.options.length > 0) {
        currentState.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option.label;
            button.className = 'dialogue-button';

            button.addEventListener("click", () => {

                const optionData = option;

                if (optionData.requirements) {
                    let canProceed = true;

                    for (const [charKey, requiredValue] of Object.entries(optionData.requirements)) {
                        if ((gameData.playerCharacteristics[charKey] || 0) < requiredValue) {
                            canProceed = false;
                            const rejection = document.createElement("div");
                            rejection.textContent = optionData.rejection || "You cannot do this.";
                            adventureLog.prepend(rejection);
                            break;
                        }
                    }
                    if (!canProceed) {
                        return;
                    }
                }

                const nextStateKey = option.key;
                if (nextStateKey) {
                    options.innerHTML = '';
                    initDialogue(dialogueSlug, nextStateKey);
                }
            });
            options.appendChild(button);
        });
    } else {

        const finalState = dialogue[stateKey];

        dialogue.finalOutcome = {
            description: finalState.description,
            characteristics: finalState.characteristics
        }

        const dialogueOutcome = dialogue.finalOutcome.characteristics;

        if (dialogueOutcome) {
            registerDialogueOutcome(dialogueOutcome);
        }

        if (stateKey === "death") {
            handleDeath();
            return;
        }

        const continueButton = document.createElement("button");
        continueButton.textContent = "Continue";
        continueButton.className = "dialogue-button";
        options.appendChild(continueButton);
        continueButton.addEventListener("click", () => {
            endEvent();
            options.removeChild(continueButton);
            console.log("Final outcome registered:", dialogue.finalOutcome);
        });
    }
}

export function registerDialogueOutcome(dialogueOutcome) {
    for (const [key, value] of Object.entries(dialogueOutcome)) {
        gameData.playerCharacteristics[key] += value;

        const displayCharacteristic = document.querySelector(`.${key}-characteristic-count`);
        if (displayCharacteristic) {
            displayCharacteristic.textContent = gameData.playerCharacteristics[key];

            const charChange = document.createElement("p");
            charChange.className = "log-entry";
            charChange.textContent = `Your reward: ${value} ${key}`;
            adventureLog.prepend(charChange);

        } else {
            console.warn(`Missing DOM element for: .${key}-characteristic-count`);
        }
    }
}