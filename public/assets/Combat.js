import {
    gameData,
    displayCurrentHealth,
    eventDescription,
    eventOptions,
    adventureLog,
    combatWindow, combatLog, displayPollen, armorRateModifier, agilityModifier
} from "./gameData.js";
import {endEvent} from "./helperFunctions.js";
import {ChangeStats} from "./ChangeStats.js";
import {handleDeath} from "./deathHandler.js";

export class Combat {

    initiative = null;
    isCombatOn = false;
    enemy = null;
    player = null;
    enemyId = null;
    isShieldEquipped = false;

    actionTypes = document.querySelector(".combat-action-types");
    attackTypes = document.querySelector(".combat-attack-types");
    shield = document.querySelector(".shield");

    constructor(enemy, player, enemyId) {
        this.enemy = enemy;
        this.player = player;
        this.enemyId = enemyId;
    }

    startCombat() {
        this.showCombatWindow();
        this.displayPlayerInfo(this.player);
        this.displayEnemyInfo(this.enemy);
        this.initiative = this.defineInitiative(); // bool
        this.isCombatOn = true;

        let fightButton = this.createActionButtons("fight-btn", "Fight.", "fight");
        let negotiateButton = this.createActionButtons("negotiate-btn", "Negotiate.", "negotiate");
        let fleeButton = this.createActionButtons("flee-btn", "Flee.", "flee");

        this.actionTypes.append(fightButton, negotiateButton, fleeButton);

        this.initRounds(this.enemyId);
    }

    initRounds() {
        this.actionTypes.addEventListener("click", this.handleActionButtons);
        this.attackTypes.addEventListener("click", this.handleAttackButtons);
        this.shield.addEventListener("click", this.toggleShield);
    }

    finishCombat() {
        this.isCombatOn = false;
        let isSuccessful = true;
        this.registerCombatOutcome(this.enemy.difficulty, isSuccessful);
        endEvent(this.enemyId, isSuccessful, eventDescription, eventOptions);
        this.hideCombatWindow();
        combatLog.innerHTML = "";
        this.enemy = null;
        this.unequipShield();
        this.removeActionButtons();
        this.actionTypes.removeEventListener("click", this.handleActionButtons);
        this.attackTypes.removeEventListener("click", this.handleAttackButtons);
        this.shield.removeEventListener("click", this.toggleShield);
        this.actionTypes.classList.remove("hidden");
        this.attackTypes.classList.add("hidden");
    }

    handleAttackButtons = (event) => {
        const button = event.target.closest(".attack-button");
        if (!button) return;

        const weaponDamage = Number(button.dataset.damage);
        this.executeAttackRound(weaponDamage);
    }

    executeAttackRound(weaponDamage) {
        this.playerAttack(weaponDamage);

        if (this.enemy.health <= 0) {
            this.finishCombat(this.enemy.id);
            return;
        }

        this.enemyAttack();

        if (this.player.health <= 0) {
            handleDeath();
        }
    }

    handleActionButtons = (event) => {
        const button = event.target.closest(".action-button");
        if (!button) return;

        const action = button.dataset.action;

        if (action === "fight") {
            this.toggleCombatButtons();
        }
        if (action === "negotiate") {
            if (this.checkReputation()) {
                this.finishCombat(this.enemyId);
            } else {
                this.displayEnemyCombatMessage("Your words are not heard.");
            }
        }
        if (action === "flee") {
            if (this.hasFled()) {
                this.fleeCombat();
            } else {
                this.displayEnemyCombatMessage("You cannot flee.");
            }
        }
    }

    createActionButtons(className, text, actionType) {
        const btn = document.createElement('button');
        btn.className = `combat-button action-button ${className}`;
        btn.textContent = text;
        btn.dataset.action = actionType;
        return btn;
    }

    removeActionButtons() {
        this.actionTypes.innerHTML = "";
    }

    toggleCombatButtons() {
        this.actionTypes.classList.add("hidden");
        this.attackTypes.classList.remove("hidden");
    }

    toggleShield = (event) => {
        const button = event.target.closest(".shield");
        if (!button) return;

        this.shield.classList.toggle("shield-active");
        if (this.shield.classList.contains("shield-active")) {
            this.equipShield();
        } else {
            this.unequipShield();
        }
    }

    equipShield() {
        this.player.armor.armorRate = this.player.armor.armorRate + this.player.shield.armorRate;
        this.player.agility = this.player.agility - this.player.shield.armorRate / 2;
        this.isShieldEquipped = true;

        armorRateModifier.classList.add("positiveBuff");
        armorRateModifier.textContent = `(+${this.player.shield.armorRate})`;

        agilityModifier.classList.add("negativeBuff");
        agilityModifier.textContent = `(-${this.player.shield.armorRate})`;
    }

    unequipShield() {
        this.player.armor.armorRate = this.player.armor.armorRate - this.player.shield.armorRate;
        this.player.agility = this.player.agility + this.player.shield.armorRate / 2;
        this.isShieldEquipped = false;

        armorRateModifier.textContent = "";

        agilityModifier.textContent = "";
        this.shield.classList.remove("shield-active");
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
        combatWindow.classList.remove("hidden");
    }

    hideCombatWindow() {
        combatWindow.classList.add("hidden");
    }

    displayPlayerInfo(player) {
        let playerWeapon = document.querySelector(".combat-weapon");
        playerWeapon.textContent = player.weapon.name;

        // let playerAccuracy = document.querySelector(".player-accuracy");
        // playerAccuracy.textContent = player.accuracy;
        //
        // let playerEvasion = document.querySelector(".player-evasion");
        // playerEvasion.textContent = player.evasion;

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

        let rangedDamage = document.querySelector(".weapon-ranged-damage");
        rangedDamage.textContent = player.rangedWeapon.attack;

        let rangedBtn = document.querySelector(".ranged-btn");
        rangedBtn.dataset.damage = player.rangedWeapon.attack;
    }

    displayEnemyInfo(enemy) {
        let enemyRace = document.querySelector(".enemy-race");
        enemyRace.textContent = enemy.race;

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
        combatLog.append(newMessage);
    }

    displayEnemyCombatMessage(message) {
        let newMessage = document.createElement("p");
        newMessage.textContent = message;
        newMessage.classList.add("combat-enemy-message");
        combatLog.append(newMessage);
    }

    registerCombatOutcome(enemyDifficulty, isSuccessful) {

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
            displayPollen.textContent = gameData.pollen -= gameData.pollenChange;
            combatResolution.textContent = `Your ${charKey} decreased by ${Math.abs(decrease)}. You lose ${gameData.pollenChange} pollen grains.`;
            adventureLog.prepend(combatResolution);
            let statChanger = new ChangeStats();
            statChanger.changeStats(charKey);
        } else {
            displayPollen.textContent = gameData.pollen += gameData.pollenChange;
            combatResolution.textContent = `Your ${charKey} increased by ${increase}. You collect ${gameData.pollenChange} pollen grains.`;
            adventureLog.prepend(combatResolution);
            let statChanger = new ChangeStats();
            statChanger.changeStats({[charKey]: increase });
        }
    }

    checkReputation() {
        return this.player.reputation - this.enemy.characteristics.reputation >= 2;
    }

    fleeCombat() {
        this.isCombatOn = false;
        this.hideCombatWindow();
        this.enemy = null;
        this.unequipShield();
        gameData.isEventActive = false;
        console.log(gameData.isEventActive);

        this.player.reputation = this.player.reputation - 1;
        console.log(this.player.reputation);

        this.player.pollen = this.player.pollen - 10;
        console.log(this.player.pollen);
    }

    hasFled() {
        if (this.enemy.difficulty === 'boss' || this.enemy.difficulty === 'legendary') {
            return false;
        }
        return this.player.agility - this.enemy.characteristics.agility >= 3;
    }
}