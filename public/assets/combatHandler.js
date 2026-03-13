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

    let attackBtns = document.querySelectorAll(".attack-button");

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

function displayCombatInfo(enemyChar, playerChar, enemyDifficulty) {
    let combatInfo = document.createElement("p");
    combatInfo.classList.add(".dialogue-text-color");
    combatInfo.textContent = "You: " + playerChar + " / " + "Enemy: " + enemyChar + " / Difficulty: " + enemyDifficulty;
    eventInfo.prepend(combatInfo);
}