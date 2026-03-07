import {gameData, displayCurrentHealth, eventDescription, eventOptions, adventureLog} from "./gameData.js";
import {registerCombatOutcome} from "./combatHandler.js";
import {endEvent} from "./helperFunctions.js";

export class Combat {

    combatWindow = document.querySelector(".combat-box")
    combatLog = document.querySelector(".combat-progress-window")
    initiative = null
    isCombatOn = false

    constructor(enemy, player) {
        this.enemy = enemy
        this.player = player
    }

    initCombat() {
        // show the combat window
        this.showCombatWindow();
        // show the player's info
        this.displayPlayerInfo(this.player);
        // show the enemy
        this.displayEnemyInfo(this.enemy);
        // define the initiative
        this.initiative = this.defineInitiative(); // true/false

        this.isCombatOn = true;
    }

    playerAttack(weaponDamage) {
        // calculate if an attack was successful
        let hitChance = Math.floor((this.player.agility / (this.enemy.characteristics.agility * 1.5)) * 100 + (this.player.accuracy / 2));
        let dodgeChance = Math.floor((this.enemy.characteristics.agility / this.player.agility)  * 10 + (this.enemy.evasion / 2));

        let hasHit = hitChance - dodgeChance;

        // regular strike
        let roll = Math.floor(Math.random() * 100);
        let chance = Math.max(5, Math.min(95, hasHit));

        // lucky strike
        let luckyRoll = Math.floor(Math.random() * 100);
        let luckyStrikeChance = 2;

        if (roll > chance && luckyRoll > luckyStrikeChance) {
            this.displayPlayerCombatMessage("You miss");
        } else {
            // calculate damage
            let damageDealt = (weaponDamage - this.enemy.armor.armorRate) * this.player.might;
            if (damageDealt <= 0) {
                damageDealt = 1;
            }
            this.decreaseEnemyHealth(damageDealt);
            this.displayPlayerCombatMessage("You deal " + damageDealt + "D");
        }
    }

    enemyAttack() {
        // calculate if an attack was successful
        let hitChance = Math.floor((this.enemy.characteristics.agility / (this.player.agility * 1.5)) * 100 + (this.enemy.accuracy / 2));
        let dodgeChance = Math.floor((this.player.agility / this.enemy.characteristics.agility)  * 10 + (this.player.evasion / 2));

        let hasHit = hitChance - dodgeChance;

        // regular strike
        let roll = Math.floor(Math.random() * 100);
        let chance = Math.max(5, Math.min(95, hasHit));

        // lucky strike
        let luckyRoll = Math.floor(Math.random() * 100);
        let luckyStrikeChance = 2;

        if (roll > chance && luckyRoll > luckyStrikeChance) {
            this.displayEnemyCombatMessage("Enemy misses");
        } else {
            // calculate damage
            let attackTypes = Object.values(this.enemy.weapon.attackTypes);
            let weaponDamage = attackTypes[Math.floor(Math.random() * attackTypes.length)];
            let damageDealt = (weaponDamage - this.player.armor.armorRate) * this.enemy.characteristics.might;
            if (damageDealt <= 0) {
                damageDealt = 1;
            }
            this.decreasePlayerHealth(damageDealt);
            this.displayEnemyCombatMessage("Enemy deals " + damageDealt + "D");
        }
    }

    showCombatWindow() {
        this.combatWindow.classList.remove("hidden");
    }

    hideCombatWindow() {
        this.combatWindow.classList.add("hidden");
    }

    displayPlayerInfo(player) {
        let playerWeapon = document.querySelector(".combat-weapon");
        playerWeapon.textContent = player.weapon.name;

        let playerAccuracy = document.querySelector(".player-accuracy");
        playerAccuracy.textContent = player.accuracy;

        let playerEvasion = document.querySelector(".player-evasion");
        playerEvasion.textContent = player.evasion;

        let chopDamage = document.querySelector(".weapon-chop-damage");
        chopDamage.textContent = player.weapon.attackTypes.chop;

        let chopBtn = document.querySelector(".chop-btn");
        chopBtn.dataset.damage = player.weapon.attackTypes.chop;

        let slashDamage = document.querySelector(".weapon-slash-damage");
        slashDamage.textContent = player.weapon.attackTypes.slash;

        let slashBtn = document.querySelector(".slash-btn");
        slashBtn.dataset.damage = player.weapon.attackTypes.slash;

        let thrustDamage = document.querySelector(".weapon-thrust-damage");
        thrustDamage.textContent = player.weapon.attackTypes.thrust;

        let thrustBtn = document.querySelector(".thrust-btn");
        thrustBtn.dataset.damage = player.weapon.attackTypes.thrust;
    }

    displayEnemyInfo(enemy) {
        let enemyName = document.querySelector(".enemy-name");
        enemyName.textContent = enemy.race;

        let enemyDifficulty = document.querySelector(".enemy-difficulty");
        enemyDifficulty.textContent = enemy.difficulty;

        let enemyMaxHealth = document.querySelector(".enemy-max-health");
        enemyMaxHealth.textContent = enemy.health;

        let enemyCurrentHealth = document.querySelector(".enemy-current-health");
        enemyCurrentHealth.textContent = enemy.health;

        let enemyMaxMysticism = document.querySelector(".enemy-max-mysticism");
        enemyMaxMysticism.textContent = enemy.mysticism;

        let enemyCurrentMysticism = document.querySelector(".enemy-current-mysticism");
        enemyCurrentMysticism.textContent = enemy.mysticism;

        let enemyClass = document.querySelector(".enemy-class");
        enemyClass.textContent = enemy.enemyClass;

        let enemyWeapon = document.querySelector(".enemy-weapon");
        enemyWeapon.textContent = enemy.weapon.name;
    }

    defineInitiative() {
        return Math.floor(Math.random() * 2);
    }

    finishCombat(enemyId) {
        this.isCombatOn = false;
        let isSuccessful = true;
        adventureLog.prepend(registerCombatOutcome(this.enemy.difficulty, isSuccessful));
        endEvent(enemyId, isSuccessful, eventDescription, eventOptions);
        this.hideCombatWindow();
    }

    decreaseEnemyHealth(damageDealt) {
        console.log("player deals: " + damageDealt);
        this.enemy.health = this.enemy.health - damageDealt;
        let enemyCurrentHealth = document.querySelector(".enemy-current-health");
        enemyCurrentHealth.textContent = this.enemy.health;
    }

    decreasePlayerHealth(damageDealt) {
        console.log("enemy deals: " + damageDealt);
        this.player.health = this.player.health - damageDealt;
        gameData.currentHealth = this.player.health;
        displayCurrentHealth.textContent = gameData.currentHealth;
    }

    displayPlayerCombatMessage(message) {
        let newMessage = document.createElement("p");
        newMessage.textContent = message;
        newMessage.classList.add("combat-player-message");
        this.combatLog.append(newMessage);
    }

    displayEnemyCombatMessage(message) {
        let newMessage = document.createElement("p");
        newMessage.textContent = message;
        newMessage.classList.add("combat-enemy-message");
        this.combatLog.append(newMessage);
    }
}