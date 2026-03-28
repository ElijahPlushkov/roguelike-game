import {
    gameData,
    displayPollen,
    adventureLog,
    eventDescription,
    eventOptions,
    eventInfo,
    enemyData,
    npcData
} from "./gameData.js";
import {handleDeath} from "./deathHandler.js";
import {appendContinueButton, endEvent} from "./helperFunctions.js";
import {RandomEnemyFactory} from "./RandomEnemyFactory.js";
import {NpcFactory} from "./NpcFactory.js";
import {Combat} from "./Combat.js";
import {playerObject} from "./main.js";
import {UniqueEnemyFactory} from "./UniqueEnemyFactory.js";

const fightButton = document.querySelector(".fight-btn");
const negotiateButton = document.querySelector(".negotiate-btn");
const fleeButton = document.querySelector(".flee-btn");

const attackTypes = document.querySelector(".combat-attack-types");
const actionTypes = document.querySelector(".combat-action-types");

export function initCombat(enemyId, enemyType) {
    let combatController = new AbortController();
    const { signal } = combatController;

    let enemy;

    if (enemyType === "unique") {
        enemy = enemyData.enemies.find(enemy => enemy.id === enemyId);
        let uniqueEnemyFactory = new UniqueEnemyFactory();
        enemy = uniqueEnemyFactory.createUniqueEnemy(enemy);
        console.log(enemy);
    } else if (enemyType.includes("random")) {
        let enemyFactory = new RandomEnemyFactory();
        enemy = enemyFactory.createRandomEnemy(enemyType);
        console.log(enemy);
    } else if (enemyType === "npc") {
        let npcFactory = new NpcFactory();
        let npc = npcData.npcs.find(npc => npc.id === enemyId);
        enemy = npcFactory.createNpcEnemy(npc);
        console.log(enemy);
    }

    // start a new combat
    let newCombat = new Combat(enemy, playerObject);
    newCombat.initCombat();
    let attackType;
    let weaponDamage;

    fightButton.addEventListener("click", () => {
        combat(newCombat, attackType, weaponDamage, enemyId, combatController, signal);
    });

    negotiateButton.addEventListener("click", () => {
       if (!checkReputation(playerObject, enemy)) {
           combat(newCombat, attackType, weaponDamage, enemyId, combatController, signal);
       } else {
           newCombat.finishCombat(enemyId);
       }
    });

    fleeButton.addEventListener("click", () => {
        if (!hasFled(playerObject, enemy)) {
            combat(newCombat, attackType, weaponDamage, enemyId, combatController, signal);
        } else {
            newCombat.finishCombat(enemyId);
        }
    });
}

function combat(newCombat, attackType, weaponDamage, enemyId, combatController, signal) {
    attackTypes.classList.remove("hidden");
    actionTypes.classList.add("hidden");
    let attackBtns = document.querySelectorAll(".attack-button");

    newCombat.toggleShield();

    if (newCombat.enemy.health > 0) {
        if (newCombat.initiative) {
            attackBtns.forEach(button => {
                button.addEventListener("click", () => {
                    attackType = button.dataset.attackType;
                    weaponDamage = Number(button.dataset.damage);
                    newCombat.playerAttack(weaponDamage);
                    if (newCombat.enemy.health <= 0) {
                        newCombat.finishCombat(enemyId);
                        combatController.abort();
                        return;
                    }
                    newCombat.enemyAttack();
                    if (playerObject.health <= 0) {
                        handleDeath();
                    }
                }, {signal});
            });
        } else {
            newCombat.enemyAttack();
            if (playerObject.health <= 0) {
                handleDeath();
            }
            attackBtns.forEach(button => {
                button.addEventListener("click", () => {
                    attackType = button.dataset.attackType;
                    weaponDamage = Number(button.dataset.damage);
                    newCombat.playerAttack(weaponDamage);
                    if (newCombat.enemy.health <= 0) {
                        newCombat.finishCombat(enemyId);
                        combatController.abort();
                        return;
                    }
                    newCombat.enemyAttack();
                    if (playerObject.health <= 0) {
                        handleDeath();
                    }
                }, {signal});
            });
        }
    }
}

function checkReputation(playerObject, enemy) {
    // compare the attributes?
    return false;
}

function hasFled(playerObject, enemy) {
    // compare the attributes?
    // if fled, the enemy remains
    // the player steps on the previous tile
    return false;
}

function displayCombatInfo(enemyChar, playerChar, enemyDifficulty) {
    let combatInfo = document.createElement("p");
    combatInfo.classList.add(".dialogue-text-color");
    combatInfo.textContent = "You: " + playerChar + " / " + "Enemy: " + enemyChar + " / Difficulty: " + enemyDifficulty;
    eventInfo.prepend(combatInfo);
}

function toggleShield(playerObject) {

}