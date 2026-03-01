import {gameData, displayCurrentHealth} from "./gameData.js";

export class Combat {

    isCombatOn = false
    combatWindow = document.querySelector(".combat-box")
    initiative = null

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

    initNextTurn(initiative, damage, action) {
        // TODO check whether the action is attack, magic or defense

        if (initiative) {
            // player action
            this.playerAttack(damage, this.enemy, this.player);
            // enemy action
            this.enemyAttack(this.enemy, this.player);
        } else {
            // enemy action
            this.enemyAttack(this.enemy, this.player);
            // player action
            this.playerAttack(damage, this.enemy, this.player);
        }
    }

    playerAttack(damage, enemy, player) {
        // calculate if an attack was successful
        let hitChance = Math.floor((player.agility / (enemy.agility * 1.5)) * 100 + (player.accuracy / 2));
        let dodgeChance = Math.floor((enemy.agility / player.agility)  * 10 + (enemy.evasion / 2));

        let hasHit = hitChance - dodgeChance;

        // regular strike
        let roll = Math.floor(Math.random() * 100);
        let chance = Math.max(5, Math.min(95, hasHit));

        // lucky strike
        let luckyRoll = Math.floor(Math.random() * 100);
        let luckyStrikeChance = 2;

        if (roll > chance && luckyRoll > luckyStrikeChance) {
            return "you missed";
        } else {
            // calculate damage
            let damageDealt = (damage - enemy.armor.armorRate) * player.might;
            if (damageDealt < 0) {
                damageDealt = 1;
            }
            this.decreaseEnemyHealth(damageDealt);
        }
    }

    showCombatWindow() {
        this.combatWindow.classList.remove("hidden");
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

    enemyAction() {

    }

    enemyAttack(enemy, player) {
        console.log("enemy attacks");
        player.health = player.health - 1;
        gameData.currentHealth = player.health;
        displayCurrentHealth.textContent = gameData.currentHealth;
    }

    finishCombat() {

    }

    decreaseEnemyHealth(damage) {
        this.enemy.health = this.enemy.health - damage;
        let enemyCurrentHealth = document.querySelector(".enemy-current-health");
        enemyCurrentHealth.textContent = this.enemy.health;
    }
}