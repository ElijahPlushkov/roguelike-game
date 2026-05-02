import {
    gameData,
    displayCurrentHealth,
    eventDescription,
    eventOptions,
    combatWindow, combatLog, displayPollen, armorRateModifier, agilityModifier, playerCoordinates
} from "./gameData.js";
import {endEvent, markEventSeen} from "./helperFunctions.js";
import {ChangeStats} from "./ChangeStats.js";
import {handleDeath} from "./deathHandler.js";
import {previousCoordinates} from "./mainHandler.js";
import {mapRender} from "./mapRender.js";
import {AdventureLogHandler} from "./AdventureLogHandler.js";

export class Combat {

    initiative = null;
    isCombatOn = false;
    enemy = null;
    player = null;
    enemyId = null;
    isShieldEquipped = false;

    statChanger = new ChangeStats();
    adventureLogHandler = new AdventureLogHandler();

    actionTypes = document.querySelector(".combat-action-types");
    attackTypes = document.querySelector(".combat-attack-types");
    shield = document.querySelector(".shield");
    ammunitionCounter = document.querySelector(".ammunition-counter");

    constructor(enemy, player, enemyId) {
        this.enemy = enemy;
        this.player = player;
        this.enemyId = enemyId;
    }

    startCombat() {
        gameData.isEventActive = true;
        this.showCombatWindow();
        this.displayPlayerInfo(this.player);
        this.displayEnemyInfo(this.enemy);
        this.initiative = this.defineInitiative(); // bool
        this.isCombatOn = true;

        let fightButton = this.createActionButtons("fight-btn", "Fight.", "fight");
        let negotiateButton = this.createActionButtons("negotiate-btn", "Negotiate.", "negotiate");
        let fleeButton = this.createActionButtons("flee-btn", "Flee.", "flee");

        this.actionTypes.append(fightButton, negotiateButton, fleeButton);

        this.initRounds();
    }

    initRounds() {
        this.actionTypes.addEventListener("click", this.handleActionButtons);
        this.attackTypes.addEventListener("click", this.handleAttackButtons);
        this.shield.addEventListener("click", this.toggleShield);
    }

    finishCombat() {
        this.isCombatOn = false;
        let isSuccessful = true;
        this.resolveCombat(this.enemy.difficulty, this.enemy.race);
        endEvent(this.enemyId, isSuccessful, eventDescription, eventOptions);
        markEventSeen(this.enemyId);
        this.clearCombatState();
    }

    clearCombatState() {
        this.hideCombatWindow();
        combatLog.innerHTML = "";
        this.enemy = null;
        this.unequipShield();
        gameData.isEventActive = false;
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
        const attackType = button.dataset.attackType;
        this.executeAttackRound(weaponDamage, attackType);
    }

    executeAttackRound(weaponDamage, attackType) {
        this.playerAttack(weaponDamage, attackType);

        if (this.enemy.health <= 0) {
            this.finishCombat(this.enemy.id);
            return;
        }

        this.enemyAttack();

        if (this.player.health <= 0) {
            handleDeath();
            this.shield.removeEventListener("click", this.toggleShield);
            this.attackTypes.removeEventListener("click", this.handleAttackButtons);
        }
    }

    handleActionButtons = (event) => {
        const button = event.target.closest(".action-button");
        if (!button) return;

        const action = button.dataset.action;

        if (action === "fight") {
            this.toggleCombatButtons();
            if (!this.initiative) {
                this.enemyAttack();
                if (this.player.health <= 0) {
                    handleDeath();
                    this.shield.removeEventListener("click", this.toggleShield);
                    this.attackTypes.removeEventListener("click", this.handleAttackButtons);
                }
            }
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

    fleeCombat() {
        this.isCombatOn = false;

        playerCoordinates.x = previousCoordinates.x;
        playerCoordinates.y = previousCoordinates.y;

        gameData.playerCoordinates.x = previousCoordinates.x;
        gameData.playerCoordinates.y = previousCoordinates.y;

        this.statChanger.changeStats({["pollen"]: -10}, {["reputation"]: -1});
        this.adventureLogHandler.appendFleeMessage(this.enemy.fleeSuccess);
        this.clearCombatState();
        mapRender();
    }

    hasFled() {
        if (this.enemy.difficulty === 'boss' || this.enemy.difficulty === 'legendary') {
            return false;
        }
        return this.player.agility - this.enemy.characteristics.agility >= 3;
    }

    checkReputation() {
        return this.player.reputation - this.enemy.characteristics.reputation >= 2;
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
        this.player.agility = this.player.agility - this.player.shield.armorRate;
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

    playerAttack(weaponDamage, attackType) {
        if (attackType === "ranged" && this.player.ammunition <= 0) {
            this.displayPlayerCombatMessage("Your ammunition is depleted.");
            return;
        }
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
            this.displayPlayerCombatMessage("You miss.");
            if (attackType === "ranged") {
                this.player.ammunition -= 1;
                this.ammunitionCounter.textContent = this.player.ammunition;
            }
        } else {
            if (attackType === "ranged") {
                this.player.ammunition -= 1;
                this.ammunitionCounter.textContent = this.player.ammunition;
            }
            // calculate damage
            let damageReduction = this.calculateDamageReduction(attackType, "player");
            let damageDealt = (weaponDamage - this.enemy.armor.armorRate) * this.player.might;
            let reduction = Math.floor(damageDealt / 100 * damageReduction);
            damageDealt = damageDealt - reduction;
            if (damageDealt <= 0) {
                damageDealt = 1;
            }
            this.decreaseEnemyHealth(damageDealt);
            this.displayPlayerCombatMessage("You deal " + damageDealt + "D.");
        }
    }

    calculateDamageReduction(attackType, attacker) {
        const reductionPercentage = {
            unarmored: { chop: 0, thrust: 0, slash: 0, ranged: 0 },
            clothes: { chop: 5, thrust: 10, slash: 15, ranged: 5 },
            light: { chop: 25, thrust: 30, slash: 35, ranged: 25 },
            medium: { chop: 35, thrust: 45, slash: 55, ranged: 40 },
            heavy: { chop: 50, thrust: 55, slash: 85, ranged: 70 }
        };

        if (attacker === "player") {
            let enemyArmorType = this.enemy.armor.type;

            const armorData = reductionPercentage[enemyArmorType];
            if (armorData && attackType in armorData) {
                return armorData[attackType];
            }
        } else {
            let playerArmorType = this.player.armor.type;

            const armorData = reductionPercentage[playerArmorType];
            if (armorData && attackType in armorData) {
                return armorData[attackType];
            }
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
            let attackTypes = Object.keys(this.enemy.weapon.attackTypes);
            let attackType = attackTypes[Math.floor(Math.random() * attackTypes.length)];
            let weaponDamage = this.enemy.weapon.attackTypes[attackType];

            let damageReduction = this.calculateDamageReduction(attackType, "enemy");
            let damageDealt = (weaponDamage - this.player.armor.armorRate) * this.enemy.characteristics.might;
            let reduction = Math.floor(damageDealt / 100 * damageReduction);
            damageDealt = damageDealt - reduction;
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

        let rangedBtn = document.querySelector(".ranged-btn");

        if (player.rangedWeapon === "none") {
            rangedBtn.className = "hidden";
        } else {
            let rangedDamage = document.querySelector(".weapon-ranged-damage");
            rangedDamage.textContent = player.rangedWeapon.damage;
            rangedBtn.dataset.damage = player.rangedWeapon.damage;

            this.ammunitionCounter.textContent = player.ammunition;
        }
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

    resolveCombat(enemyDifficulty, race) {

        let increase;
        let pollenChange;

        const characteristics = Object.keys(gameData.playerCharacteristics);
        const charKey = characteristics[Math.floor(Math.random() * characteristics.length)];

        if (enemyDifficulty === "flimsy") {
            increase = 1;
            pollenChange = Math.floor(Math.random() * 7) + 1;
        } else if (enemyDifficulty === "weak") {
            increase = 1;
            pollenChange = Math.floor(Math.random() * 10) + 1;
        } else if (enemyDifficulty === "average") {
            increase = 2;
            pollenChange = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
        } else if (enemyDifficulty === "tough") {
            increase = 3;
            pollenChange = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
        } else if (enemyDifficulty === "master") {
            increase = 4;
            pollenChange = Math.floor(Math.random() * (60 - 40 + 1)) + 40;
        } else if (enemyDifficulty === "boss") {
            increase = 5;
            pollenChange = Math.floor(Math.random() * (80 - 60 + 1)) + 60;
        }

        displayPollen.textContent = gameData.pollen += pollenChange;
        this.statChanger.changeStats({[charKey]: increase });
        this.adventureLogHandler.appendCombatResolutionMessage(charKey, increase, pollenChange, race);
    }
}