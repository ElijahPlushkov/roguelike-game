import { displayCurrentHealth, gameData, player } from "./data/gameData.js";
import { getEnemy } from "./data/enemyData/enemyDataManager.js";
import { AdventureLog } from "./AdventureLog.js";
import { weaponData } from "./data/weaponData.js";
import { animate } from "../node_modules/animejs/dist/bundles/anime.esm.js";

const adventureLog = new AdventureLog();

export class StationaryEnemy {

    enemyCoordinates = null;
    playerTile = null;
    enemyTile = null;
    projectile = null;

    constructor(enemyId, coordinates) {
        this.enemy = getEnemy(enemyId)
        this.enemyCoordinates = coordinates
        this.enemyAmmoQuantity = this.giveRandomAmmoQuantity();
    }

    giveRandomAmmoQuantity(min = 3, max = 5) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    detectPlayer() {
        if (Math.abs(gameData.playerCoordinates.x - this.enemyCoordinates.x) <= 3
        && this.enemyCoordinates.y === gameData.playerCoordinates.y) {
            if (this.enemyAmmoQuantity <= 0) {
                adventureLog.appendStationaryEnemyAttackMessage("Enemy is out of ammo.");
            } else {
                this.setProjectilePosition();
                this.stationaryEnemyRangedAttack();
            }
        }

        else if (this.enemyCoordinates.y === (gameData.playerCoordinates.y - 1)
            && (Math.abs(gameData.playerCoordinates.x - this.enemyCoordinates.x) <= 3)) {
            if (this.enemyAmmoQuantity <= 0) {
                adventureLog.appendStationaryEnemyAttackMessage("Enemy is out of ammo.");
            } else {
                this.setProjectilePosition();
                this.stationaryEnemyRangedAttack();
            }
        }

        else if (this.enemyCoordinates.y === (gameData.playerCoordinates.y + 1)
            && (Math.abs(gameData.playerCoordinates.x - this.enemyCoordinates.x) <= 3)) {
            if (this.enemyAmmoQuantity <= 0) {
                adventureLog.appendStationaryEnemyAttackMessage("Enemy is out of ammo.");
            } else {
                this.setProjectilePosition();
                this.stationaryEnemyRangedAttack();
            }
        }
    }

    stationaryEnemyRangedAttack() {
        let attackTypes;
        let attackType;
        let weaponDamage;
        let hasMissed;

        let weaponId = this.enemy.weapon;
        let weapon = weaponData.weapons.find(weapon => weapon.id === weaponId);

        // calculate if an attack was successful
        let hitChance = Math.floor((this.enemy.characteristics.agility / (player.agility * 1.5)) * 100 + (this.enemy.characteristics.agility / 2));
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
            hasMissed = true;
        } else {
            hasMissed = false;
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
        this.launchProjectile(hasMissed);
        this.enemyAmmoQuantity = this.enemyAmmoQuantity - 1;
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
        this.findEnemyTile();
        this.findPlayerTile();
        this.enemyTile.appendChild(this.projectile);
    }

    launchProjectile(hasMissed) {
        const x = parseInt(this.enemyTile.dataset.x);
        const y = parseInt(this.enemyTile.dataset.y);

        const targetX = parseInt(this.playerTile.dataset.x);
        const targetY = parseInt(this.playerTile.dataset.y);

        const tileWidth = 20;

        const distanceX = (targetX - x) * tileWidth;
        const distanceY = (targetY - y) * tileWidth;

        if (hasMissed) {
            this.animateMiss(distanceX, distanceY);
        } else {
            this.animateHit(distanceX, distanceY);
        }
    }

    animateHit(distanceX, distanceY) {
        animate(this.projectile, {
            translateX: distanceX + 5,
            translateY: distanceY + 5,

            duration: 500,
            ease: "linear",

            onComplete: () => {
                this.projectile.remove();

                animate(this.playerTile, {
                    opacity: [
                        { to: 0, duration: 75 },
                        { to: 1, duration: 75 },
                        { to: 0, duration: 75 },
                        { to: 1, duration: 75 }
                    ],
                    ease: "linear"
                });
            }
        });
    }

    animateMiss(distanceX, distanceY) {
        animate(this.projectile, {
            translateX: distanceX + 5,
            translateY: distanceY + 5,

            duration: 500,
            ease: "linear",

            onComplete: () => {
                this.projectile.remove();
            }
        });
    }
}