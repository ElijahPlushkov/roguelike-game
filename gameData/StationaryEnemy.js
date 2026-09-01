import { displayCurrentHealth, gameData, player } from "./data/gameData.js";
import { getEnemy } from "./data/enemyData/enemyDataManager.js";
import { AdventureLog } from "./AdventureLog.js";
import { weaponData } from "./data/weaponData.js";

const adventureLog = new AdventureLog();

export class StationaryEnemy {

    enemyCoordinates = null;
    playerTile = null;
    enemyTile = null;
    projectile = null;

    constructor(enemyId, coordinates) {
        this.enemy = getEnemy(enemyId)
        this.enemyCoordinates = coordinates
    }

    detectPlayer() {
        if (Math.abs(gameData.playerCoordinates.x - this.enemyCoordinates.x) <= 3
        && this.enemyCoordinates.y === gameData.playerCoordinates.y) {
            // this.stationaryEnemyRangedAttack();
            this.setProjectilePosition();
        }

        if (this.enemyCoordinates.y === (gameData.playerCoordinates.y - 1)
            && (Math.abs(gameData.playerCoordinates.x - this.enemyCoordinates.x) <= 3)) {
            // this.stationaryEnemyRangedAttack();
            this.setProjectilePosition();
        }

        if (this.enemyCoordinates.y === (gameData.playerCoordinates.y + 1)
            && (Math.abs(gameData.playerCoordinates.x - this.enemyCoordinates.x) <= 3)) {
            // this.stationaryEnemyRangedAttack();
            this.setProjectilePosition();
        }
    }

    stationaryEnemyRangedAttack() {
        let attackTypes;
        let attackType;
        let weaponDamage;

        let weaponId = this.enemy.weapon;
        let weapon = weaponData.weapons.find(weapon => weapon.id === weaponId);

        // calculate if an attack was successful
        let hitChance = Math.floor((this.enemy.characteristics.agility / (player.agility * 1.5)) * 100 + (this.enemy.accuracy / 2));
        let dodgeChance = Math.floor((player.agility / this.enemy.characteristics.agility)  * 10 + (player.evasion / 2));

        let hasHit = hitChance - dodgeChance;

        // regular strike
        let roll = Math.floor(Math.random() * 100);
        let chance = Math.max(5, Math.min(95, hasHit));

        // lucky strike
        let luckyRoll = Math.floor(Math.random() * 100);
        let luckyStrikeChance = 2;

        if (roll > chance && luckyRoll > luckyStrikeChance) {
            adventureLog.appendStationaryEnemyAttackMessage("Enemy misses.");
        } else {
            // define attack type ranged / melee
            // calculate damage
            if (weapon.attackTypes.ranged > 0) {
                attackType = "ranged";
                weaponDamage = weapon.attackTypes["ranged"];
            } else {
                attackTypes = Object.keys(this.enemy.weapon.attackTypes);
                attackType = attackTypes[Math.floor(Math.random() * attackTypes.length)];
                weaponDamage = this.enemy.weapon.attackTypes[attackType];
            }

            let damageReduction = this.calculateDamageReduction(attackType);
            let damageDealt = (weaponDamage - player.armor.armorRate) * this.enemy.characteristics.might;
            let reduction = Math.floor(damageDealt / 100 * damageReduction);
            damageDealt = damageDealt - reduction;
            if (damageDealt <= 0) {
                damageDealt = 1;
            }
            this.decreasePlayerHealth(damageDealt);
            adventureLog.appendStationaryEnemyAttackMessage("Enemy deals " + damageDealt + "D");
        }
    }

    decreasePlayerHealth(damageDealt) {
        player.setCurrentHealth(player.getCurrentHealth() - damageDealt);
        gameData.currentHealth = player.currentHealth;
        displayCurrentHealth.textContent = player.currentHealth;
    }

    calculateDamageReduction(attackType) {
        const reductionPercentage = {
            unarmored: { chop: 0, thrust: 0, slash: 0, ranged: 0 },
            clothes: { chop: 5, thrust: 10, slash: 15, ranged: 5 },
            light: { chop: 25, thrust: 30, slash: 35, ranged: 25 },
            medium: { chop: 35, thrust: 45, slash: 55, ranged: 40 },
            heavy: { chop: 50, thrust: 55, slash: 85, ranged: 70 }
        };

        let playerArmorType = player.armor.type;

        const armorData = reductionPercentage[playerArmorType];
        if (armorData && attackType in armorData) {
            return armorData[attackType];
        }
    }

    drawProjectile() {
        const projectile = document.createElement("div");

        projectile.classList.add("projectile");

        projectile.style.width = "10px";
        projectile.style.height = "10px";
        projectile.style.left = "5px";
        projectile.style.top = "5px";
        projectile.style.backgroundColor = "red";

        return projectile;
    }

    findPlayerTile() {
        let tiles = document.querySelectorAll(".tile");
        tiles.forEach(tile => {
            if (gameData.playerCoordinates.x === parseInt(tile.dataset.x) && gameData.playerCoordinates.y === parseInt(tile.dataset.y)) {
                this.playerTile = tile;
            }
        });
    }

    findEnemyTile() {
        let tiles = document.querySelectorAll(".tile");
        tiles.forEach(tile => {
            if (this.enemyCoordinates.x === parseInt(tile.dataset.x) && this.enemyCoordinates.y === parseInt(tile.dataset.y)) {
                this.enemyTile = tile;
            }
        });
    }

    setProjectilePosition() {
        this.projectile = this.drawProjectile();

        this.findPlayerTile();
        this.findEnemyTile();

        this.enemyTile.appendChild(this.projectile);

        this.launchProjectile();
    }

    launchProjectile() {
        console.log(this.projectile);
        const x = parseInt(this.enemyTile.dataset.x);
        const y = parseInt(this.enemyTile.dataset.y);

        const targetX = parseInt(this.playerTile.dataset.x);
        const targetY = parseInt(this.playerTile.dataset.y);

        const tileWidth = 20;

        const distanceX = (targetX - x) * tileWidth;
        const distanceY = (targetY - y) * tileWidth;

        requestAnimationFrame(() => {
            this.projectile.style.left = `${distanceX + 5}px`;
            this.projectile.style.top = `${distanceY + 5}px`;
            this.projectile.style.transition = "left 500ms linear, top 500ms linear";
        });
    }
}