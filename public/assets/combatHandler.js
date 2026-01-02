import {gameData, displayPollen, adventureLog, eventDescription, eventOptions, eventInfo, enemyData} from "./gameData.js";
import {handleDeath} from "./deathHandler.js";
import {appendContinueButton, endEvent} from "./helperFunctions.js";
import {GenerateEnemy} from "./EnemyGenerator.js";

export function initCombat(enemySlug, isImportant, difficulty) {

    let enemy;

    if (isImportant === "true") {
        enemy = enemyData.enemies.find(enemy => enemy.slug === enemySlug);
    } else {
        let newEnemy = new GenerateEnemy(difficulty);
        enemy = newEnemy.generateEnemy();
        console.log(enemy);
    }

    const enemyChars = enemy.characteristics;
    const enemyFleeRequirements = enemy.flee;
    const enemyDifficulty = enemy.difficulty;
    let isSuccessful;

    console.log(enemySlug, enemyDifficulty);

    //create a combat's description
    eventDescription.textContent = enemy.description;
    eventDescription.className = "combat-text-color";

    //create options
    eventOptions.innerHTML = '';

    //add text to option buttons
    enemy.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option.label;
        button.className = 'option-button';
        eventOptions.appendChild(button);

        button.addEventListener("click", () => {

            //check fight outcome
            if (button.textContent === "Fight.") {
                if (enemyChars.might - gameData.playerCharacteristics.might > 2
                    && !["flimsy", "weak", "average"].includes(enemyDifficulty)) {
                    eventOptions.innerHTML = '';
                    handleDeath();
                    return;
                } else if (enemyChars.might - gameData.playerCharacteristics.might > 2) {
                    isSuccessful = false;
                    eventDescription.textContent = enemy.combatDefeat + " ";
                } else {
                    isSuccessful = true;
                    eventDescription.textContent = enemy.combatVictory + " ";
                }

                displayCombatInfo(enemyChars.might, gameData.playerCharacteristics.might, enemyDifficulty);

                eventOptions.innerHTML = "";
                let continueButton = appendContinueButton();
                eventOptions.prepend(continueButton);
                continueButton.addEventListener("click", function () {
                    eventInfo.innerHTML = "";
                    adventureLog.prepend(resolveCombat(enemyDifficulty, isSuccessful, gameData.pollen));
                    endEvent(enemySlug, isSuccessful, eventDescription, eventOptions);
                });
            }

            //check negotiate outcome
            if (button.textContent === "Negotiate.") {
                if (enemyChars.reputation - gameData.playerCharacteristics.reputation > 2
                    && !["flimsy", "weak", "average", "tough"].includes(enemyDifficulty)) {
                    eventOptions.innerHTML = '';
                    handleDeath();
                    return;
                } else if (enemyChars.reputation - gameData.playerCharacteristics.reputation > 2) {
                    isSuccessful = false;
                    eventDescription.textContent = enemy.negotiationDefeat + " ";
                } else {
                    isSuccessful = true;
                    eventDescription.textContent = enemy.negotiationVictory + " ";
                }

                displayCombatInfo(enemyChars.reputation, gameData.playerCharacteristics.reputation, enemyDifficulty);

                eventOptions.innerHTML = "";
                let continueButton = appendContinueButton();
                eventOptions.prepend(continueButton);
                continueButton.addEventListener("click", function () {
                    eventInfo.innerHTML = "";
                    adventureLog.prepend(resolveCombat(enemyDifficulty, isSuccessful, gameData.pollen));
                    endEvent(enemySlug, isSuccessful, eventDescription, eventOptions);
                });
            }

            //check flee outcome
            if (button.textContent === "Flee.") {
                if (enemyDifficulty === "flimsy" || enemyDifficulty === "weak" || enemyDifficulty === "average") {
                    isSuccessful = false;
                    eventDescription.textContent = enemy.fleeSuccess + " ";
                } else {
                    if (enemyDifficulty === "boss" || enemyDifficulty === "legendary") {
                        eventOptions.innerHTML = '';
                        handleDeath();
                        return;
                    } else if (gameData.playerCharacteristics.might < enemyFleeRequirements.might ||
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
                    eventInfo.innerHTML = "";
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

    const displayCharacteristic = document.querySelector(`.${charKey}-stat-value`);

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
    combatResolution.classList.add("combat-text-color");

    if (isSuccessful === false) {
        gameData.playerCharacteristics[charKey] += decrease;
        displayCharacteristic.textContent = gameData.playerCharacteristics[charKey];
        displayPollen.textContent = gameData.pollen -= gameData.pollenChange;
        combatResolution.textContent = `Your ${charKey} decreased by ${Math.abs(decrease)}. You lose ${gameData.pollenChange} pollen grains.`;
        return combatResolution;
    } else {
        gameData.playerCharacteristics[charKey] += increase;
        displayCharacteristic.textContent = gameData.playerCharacteristics[charKey];
        displayPollen.textContent = gameData.pollen += gameData.pollenChange;
        combatResolution.textContent = `Your ${charKey} increased by ${increase}. You collect ${gameData.pollenChange} pollen grains.`;
        return combatResolution;
    }
}

function displayCombatInfo(enemyChar, playerChar, enemyDifficulty) {
    let combatInfo = document.createElement("p");
    combatInfo.classList.add(".dialogue-text-color");
    combatInfo.textContent = "You: " + playerChar + " / " + "Enemy: " + enemyChar + " / Difficulty: " + enemyDifficulty;
    eventInfo.prepend(combatInfo);
}