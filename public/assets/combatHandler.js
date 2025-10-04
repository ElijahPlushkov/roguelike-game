import {enemyData} from "./dataLoaders.js";
import {gameData, displayPollen} from "./gameData.js";
import {adventureLog} from "./gameData.js";
import {handleDeath} from "./deathHandler.js";
import {appendContinueButton} from "./helperFunctions.js";

export function initCombat(enemySlug) {

    const enemy = enemyData.enemies.find(enemy => enemy.slug === enemySlug);

    const enemyChars = enemy.characteristics;
    const enemyFleeRequirements = enemy.flee;
    const enemyDifficulty = enemy.difficulty;
    let isSuccessful;

    //create a combat's description
    const newCombat = document.createElement("div");
    const eventType = newCombat;
    newCombat.className = "adventure-log__new-combat";
    newCombat.textContent = enemy.description;
    adventureLog.prepend(newCombat);

    //create options
    const options = document.createElement("div");
    newCombat.append(options);
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
                    newCombat.textContent = enemy.combatDefeat + " "
                        + resolveCombat(enemyDifficulty, isSuccessful, gameData.pollen);
                }
                else {
                    isSuccessful = true;
                    newCombat.textContent = enemy.combatVictory + " "
                        + resolveCombat(enemyDifficulty, isSuccessful, gameData.pollen);
                }
                appendContinueButton(eventType);
            }

            //check negotiate outcome
            if (button.textContent === "negotiate") {
                if (enemyChars.reputation - gameData.playerCharacteristics.reputation >= 2) {
                    options.innerHTML = '';
                    handleDeath();
                    return;
                } else if (enemyChars.reputation - gameData.playerCharacteristics.reputation === 1) {
                    isSuccessful = false;
                    newCombat.textContent = enemy.negotiationDefeat + " "
                        + resolveCombat(enemyDifficulty, isSuccessful, gameData.pollen);
                } else {
                    isSuccessful = true;
                    newCombat.textContent = enemy.negotiationVictory + " "
                        + resolveCombat(enemyDifficulty, isSuccessful, gameData.pollen);
                }
                appendContinueButton(eventType);
            }

            //check flee outcome
            if (button.textContent === "flee") {
                if (enemyDifficulty === "flimsy" || enemyDifficulty === "weak" || enemyDifficulty === "average") {
                    isSuccessful = false;
                    newCombat.textContent = enemy.fleeSuccess + " "
                        + resolveCombat(enemyDifficulty, isSuccessful, gameData.pollen);
                } else {
                    if (enemyDifficulty === "boss" || enemyDifficulty === "legendary") {
                        options.innerHTML = '';
                        handleDeath();
                        return;
                    }
                    else if (gameData.playerCharacteristics.might < enemyFleeRequirements.might ||
                        gameData.playerCharacteristics.prayer < enemyFleeRequirements.prayer) {
                        isSuccessful = false;
                        newCombat.textContent = enemy.fleeFailure + " "
                            + resolveCombat(enemyDifficulty, isSuccessful, gameData.pollen);
                    } else {
                        isSuccessful = false;
                        newCombat.textContent = enemy.fleeSuccess + " "
                            + resolveCombat(enemyDifficulty, isSuccessful, gameData.pollen);
                    }
                }
                appendContinueButton(eventType);
            }
        });
    });
}

export function resolveCombat(enemyDifficulty, isSuccessful) {

    let increase;
    let decrease;
    let pollenChange;

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

    if (isSuccessful === false) {
        gameData.playerCharacteristics[charKey] += decrease;
        displayCharacteristic.textContent = gameData.playerCharacteristics[charKey];
        displayPollen.textContent = gameData.pollen -= gameData.pollenChange;
        return `Your ${charKey} decreased by ${Math.abs(decrease)}. You lose ${gameData.pollenChange} pollen grains`;
    } else {
        gameData.playerCharacteristics[charKey] += increase;
        displayCharacteristic.textContent = gameData.playerCharacteristics[charKey];
        displayPollen.textContent = gameData.pollen += gameData.pollenChange;
        return `Your ${charKey} increased by ${increase}. You collect ${gameData.pollenChange} pollen grains`;
    }
}