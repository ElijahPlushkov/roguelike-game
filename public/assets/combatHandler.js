import {enemyData} from "./dataLoaders.js";
import {gameData, displayPollen, adventureLog, eventDescription, eventOptions} from "./gameData.js";
import {handleDeath} from "./deathHandler.js";
import {appendContinueButton, endEvent} from "./helperFunctions.js";

export function initCombat(enemySlug) {

    const enemy = enemyData.enemies.find(enemy => enemy.slug === enemySlug);

    const enemyChars = enemy.characteristics;
    const enemyFleeRequirements = enemy.flee;
    const enemyDifficulty = enemy.difficulty;
    let isSuccessful;

    console.log(enemySlug, enemyDifficulty);

    //create a combat's description
    eventDescription.textContent = enemy.description;
    eventDescription.className = "adventure-log__new-combat";

    //create options
    eventOptions.innerHTML = '';

    //add text to option buttons
    enemy.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option.label;
        button.className = 'dialogue-button';
        eventOptions.appendChild(button);

        button.addEventListener("click", () => {

            //check fight outcome
            if (button.textContent === "fight") {
                if (enemyChars.might - gameData.playerCharacteristics.might >= 2
                    && !["flimsy", "weak", "average"].includes(enemyDifficulty)) {
                    eventOptions.innerHTML = '';
                    handleDeath();
                    return;
                } else if (enemyChars.might - gameData.playerCharacteristics.might === 1) {
                    isSuccessful = false;
                    eventDescription.textContent = enemy.combatDefeat + " ";
                }
                else {
                    isSuccessful = true;
                    eventDescription.textContent = enemy.combatVictory + " ";
                }

                eventOptions.innerHTML = "";
                let continueButton = appendContinueButton();
                eventOptions.prepend(continueButton);
                continueButton.addEventListener("click", function () {
                    adventureLog.prepend(resolveCombat(enemyDifficulty, isSuccessful, gameData.pollen));
                    endEvent(enemySlug, isSuccessful, eventDescription, eventOptions);
                });
            }

            //check negotiate outcome
            if (button.textContent === "negotiate") {
                if (enemyChars.reputation - gameData.playerCharacteristics.reputation >= 2) {
                    eventOptions.innerHTML = '';
                    handleDeath();
                    return;
                } else if (enemyChars.reputation - gameData.playerCharacteristics.reputation === 1) {
                    isSuccessful = false;
                    eventDescription.textContent = enemy.negotiationDefeat + " ";
                } else {
                    isSuccessful = true;
                    eventDescription.textContent = enemy.negotiationVictory + " ";
                }

                eventOptions.innerHTML = "";
                let continueButton = appendContinueButton();
                eventOptions.prepend(continueButton);
                continueButton.addEventListener("click", function () {
                    adventureLog.prepend(resolveCombat(enemyDifficulty, isSuccessful, gameData.pollen));
                    endEvent(enemySlug, isSuccessful, eventDescription, eventOptions);
                });
            }

            //check flee outcome
            if (button.textContent === "flee") {
                if (enemyDifficulty === "flimsy" || enemyDifficulty === "weak" || enemyDifficulty === "average") {
                    isSuccessful = false;
                    eventDescription.textContent = enemy.fleeSuccess + " ";
                } else {
                    if (enemyDifficulty === "boss" || enemyDifficulty === "legendary") {
                        eventOptions.innerHTML = '';
                        handleDeath();
                        return;
                    }
                    else if (gameData.playerCharacteristics.might < enemyFleeRequirements.might ||
                        gameData.playerCharacteristics.prayer < enemyFleeRequirements.prayer) {
                        isSuccessful = false;
                        eventDescription.textContent = enemy.fleeFailure + " ";
                    } else {
                        isSuccessful = false;
                        eventDescription.textContent = enemy.fleeSuccess + " ";
                    }
                }
                eventOptions.innerHTML = "";
                let continueButton = appendContinueButton();
                eventOptions.prepend(continueButton);
                continueButton.addEventListener("click", function () {
                    adventureLog.prepend(resolveCombat(enemyDifficulty, isSuccessful, gameData.pollen));
                    endEvent(enemySlug, isSuccessful, eventDescription, eventOptions);
                });
            }
        });
    });
}

export function resolveCombat(enemyDifficulty, isSuccessful) {

    let increase;
    let decrease;

    const characteristics = Object.keys(gameData.playerCharacteristics);
    const charKey = characteristics[Math.floor(Math.random() * characteristics.length)];

    const displayCharacteristic = document.querySelector(`.${charKey}-characteristic-count`);

    if (enemyDifficulty === "flimsy") {
        increase = 1;
        decrease = -1;
        gameData.pollenChange = Math.floor(Math.random() * 7) + 1;
    } else if (enemyDifficulty === "weak") {
        increase = 1;
        decrease = -1;
        gameData.pollenChange = Math.floor(Math.random() * 10) + 1;
    } else if (enemyDifficulty === "average") {
        increase = 2;
        decrease = -2;
        gameData.pollenChange = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    } else if (enemyDifficulty === "tough") {
        increase = 3;
        decrease = -4;
        gameData.pollenChange = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
    } else if (enemyDifficulty === "master") {
        increase = 4;
        decrease = -6;
        gameData.pollenChange = Math.floor(Math.random() * (60 - 40 + 1)) + 40;
    } else if (enemyDifficulty === "boss") {
        increase = 5;
        decrease = -8;
        gameData.pollenChange = Math.floor(Math.random() * (80 - 60 + 1)) + 60;
    }

    const combatResolution = document.createElement("p");
    combatResolution.classList.add("adventure-log__new-combat");

    if (isSuccessful === false) {
        gameData.playerCharacteristics[charKey] += decrease;
        displayCharacteristic.textContent = gameData.playerCharacteristics[charKey];
        displayPollen.textContent = gameData.pollen -= gameData.pollenChange;
        combatResolution.textContent = `Your ${charKey} decreased by ${Math.abs(decrease)}. You lose ${gameData.pollenChange} pollen grains`;
        return combatResolution;
    } else {
        gameData.playerCharacteristics[charKey] += increase;
        displayCharacteristic.textContent = gameData.playerCharacteristics[charKey];
        displayPollen.textContent = gameData.pollen += gameData.pollenChange;
        combatResolution.textContent =`Your ${charKey} increased by ${increase}. You collect ${gameData.pollenChange} pollen grains`;
        return combatResolution;
    }
}