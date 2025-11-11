import {enemyData} from "./dataLoaders.js";
import {gameData, displayPollen, adventureLog} from "./gameData.js";
import {handleDeath} from "./deathHandler.js";
import {appendContinueButton, displayEventBox, endEvent} from "./helperFunctions.js";

const description = document.querySelector(".event-description");

export function initCombat(enemySlug) {
    displayEventBox();

    const enemy = enemyData.enemies.find(enemy => enemy.slug === enemySlug);

    const enemyChars = enemy.characteristics;
    const enemyFleeRequirements = enemy.flee;
    const enemyDifficulty = enemy.difficulty;
    let isSuccessful;

    console.log(enemySlug, enemyDifficulty);

    //create a combat's description
    description.textContent = enemy.description;
    description.className = "adventure-log__new-combat";

    //create options
    const options = document.querySelector(".event-options");
    options.innerHTML = '';

    //add text to option buttons
    enemy.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option.label;
        button.className = 'dialogue-button';
        options.appendChild(button);

        button.addEventListener("click", () => {

            //check fight outcome
            if (button.textContent === "fight") {
                if (enemyChars.might - gameData.playerCharacteristics.might >= 2
                    && !["flimsy", "weak", "average"].includes(enemyDifficulty)) {
                    options.innerHTML = '';
                    handleDeath();
                    return;
                } else if (enemyChars.might - gameData.playerCharacteristics.might === 1) {
                    isSuccessful = false;
                    description.textContent = enemy.combatDefeat + " ";
                }
                else {
                    isSuccessful = true;
                    description.textContent = enemy.combatVictory + " ";
                }

                options.innerHTML = "";
                let continueButton = appendContinueButton();
                options.prepend(continueButton);
                continueButton.addEventListener("click", function () {
                    adventureLog.prepend(resolveCombat(enemyDifficulty, isSuccessful, gameData.pollen));
                    endEvent(enemySlug, isSuccessful);
                });
            }

            //check negotiate outcome
            if (button.textContent === "negotiate") {
                if (enemyChars.reputation - gameData.playerCharacteristics.reputation >= 2) {
                    options.innerHTML = '';
                    handleDeath();
                    return;
                } else if (enemyChars.reputation - gameData.playerCharacteristics.reputation === 1) {
                    isSuccessful = false;
                    descriptionn.textContent = enemy.negotiationDefeat + " ";
                } else {
                    isSuccessful = true;
                    description.textContent = enemy.negotiationVictory + " ";
                }

                options.innerHTML = "";
                let continueButton = appendContinueButton();
                options.prepend(continueButton);
                continueButton.addEventListener("click", function () {
                    adventureLog.prepend(resolveCombat(enemyDifficulty, isSuccessful, gameData.pollen));
                    endEvent(enemySlug, isSuccessful);
                });
            }

            //check flee outcome
            if (button.textContent === "flee") {
                if (enemyDifficulty === "flimsy" || enemyDifficulty === "weak" || enemyDifficulty === "average") {
                    isSuccessful = false;
                    description.textContent = enemy.fleeSuccess + " ";
                } else {
                    if (enemyDifficulty === "boss" || enemyDifficulty === "legendary") {
                        options.innerHTML = '';
                        handleDeath();
                        return;
                    }
                    else if (gameData.playerCharacteristics.might < enemyFleeRequirements.might ||
                        gameData.playerCharacteristics.prayer < enemyFleeRequirements.prayer) {
                        isSuccessful = false;
                        description.textContent = enemy.fleeFailure + " ";
                    } else {
                        isSuccessful = false;
                        description.textContent = enemy.fleeSuccess + " ";
                    }
                }
                options.innerHTML = "";
                let continueButton = appendContinueButton();
                options.prepend(continueButton);
                continueButton.addEventListener("click", function () {
                    adventureLog.prepend(resolveCombat(enemyDifficulty, isSuccessful, gameData.pollen));
                    endEvent(enemySlug, isSuccessful);
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