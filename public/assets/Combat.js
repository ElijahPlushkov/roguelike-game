
export class Combat {

    isCombatOn = false
    combatWindow = document.querySelector(".combat-box")

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

        this.isCombatOn = true;
    }

    handleCombat(playerAction, enemyAction) {

        if (!this.isCombatOn) {
            return;
        }

        // define the initiative
        let initiative = this.defineInitiative(); // true/false

        // if enemy health >= 0
        while (this.enemy.getHealth() > 0 || this.player.getHealth() > 0) {
            this.initNextTurn(initiative, playerAction, enemyAction);
        }
        this.finishCombat();
    }

    initNextTurn(initiative, playerAction, enemyAction) {
        if (initiative) {
            // player action
            this.playerCombatAction(playerAction, this.enemy, this.player);
            // enemy action
            this.enemyCombatAction(enemyAction, this.enemy, this.player);
        } else {
            // enemy action
            this.enemyCombatAction(enemyAction, this.enemy, this.player);
            // player action
            this.playerCombatAction(playerAction, this.enemy, this.player);
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

        let slashDamage = document.querySelector(".weapon-slash-damage");
        slashDamage.textContent = player.weapon.attackTypes.slash;

        let thrustDamage = document.querySelector(".weapon-thrust-damage");
        thrustDamage.textContent = player.weapon.attackTypes.thrust;
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

    playerCombatAction(playerAction, enemy, player) {

    }

    enemyCombatAction(enemyAction, enemy, player) {

    }
}