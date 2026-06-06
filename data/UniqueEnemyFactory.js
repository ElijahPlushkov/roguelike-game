import { NewEnemy } from "./NewEnemy.js";
import { weaponsByClass } from "./weaponsByClass.js";
import { armorByClass } from "./armorByClass.js";
import { armorData } from "./armorData.js";
import { weaponData } from "./weaponData.js";

export class UniqueEnemyFactory {

    HEALTH_MODIFIER = 2;
    MYSTICISM_MODIFIER = 1;
    WILLPOWER_MODIFIER = 0.5;

    BASE_HEALTH = 10;
    BASE_MYSTICISM = 10;
    BASE_WILLPOWER = 10;

    BASE_SPELL_CHANCE = 10

    createUniqueEnemy(enemy) {
        let enemyDifficulty = enemy.difficulty;
        let race = enemy.race;
        let enemyClass = enemy.enemyClass;
        let weapon;
        if (enemy.weapon === "random") {
           weapon = this.setRandomWeapon(enemyClass);
        } else {
            weapon = this.setWeapon(enemy.weapon);
        }
        let armor;
        if (enemy.armor === "random") {
            armor = this.setRandomArmor(enemyClass);
        } else {
            armor = this.setArmor(enemy.armor);
        }
        let shield;
        if (enemy.shield === "random") {
            shield = this.setShield(enemyClass);
        } else {
            shield = enemy.shield;
        }
        let spells; // object or array ?
        if (enemy.spells === "random") {
            spells = this.setSpells(enemyClass);
        } else {
            spells = enemy.spells;
        }
        let characteristics = enemy.characteristics;
        let health = this.setHealth(enemy.characteristics.might);
        let mysticism = this.setMysticism(enemy.characteristics.prayer);
        let willpower = this.setWillpower(enemy.characteristics.prayer);
        let accuracy = enemy.characteristics.agility;
        let evasion = enemy.characteristics.agility;
        let spellChance = this.BASE_SPELL_CHANCE + enemy.characteristics.prayer;
        let fleeConditions = this.setFleeConditions(enemy.characteristics);
        let description = enemy.description;

        return new NewEnemy(enemyDifficulty, race, enemyClass, weapon, armor, shield, spells,
            characteristics, health, mysticism, willpower, accuracy, evasion, spellChance,
            fleeConditions, description)
    }

    setHealth(might) {
        return this.BASE_HEALTH + (might + Math.floor(might * this.HEALTH_MODIFIER));
    }

    setMysticism(prayer) {
        return this.BASE_MYSTICISM + (prayer + Math.floor(prayer * this.MYSTICISM_MODIFIER));
    }

    setWillpower(prayer) {
        return this.BASE_WILLPOWER + (prayer + Math.floor(prayer * this.WILLPOWER_MODIFIER));
    }

    setFleeConditions(characteristics) {
        // TODO rethink this mechanic
        return {
            might: Math.floor(characteristics.might / 2),
            reputation: Math.floor(characteristics.reputation / 2),
            prayer: Math.floor(characteristics.prayer / 2),
            agility: Math.floor(characteristics.agility / 2)
        }
    }

    setWeapon(id) {
        let weaponId = id;
        this.weapon = weaponData.weapons.find(weapon => weapon.id === weaponId);
        return this.weapon;
    }

    setRandomWeapon(enemyClass) {
        if (enemyClass === "knight") {
            let randomWeaponIndex = Math.floor(Math.random() * weaponsByClass.knight.length);
            this.weapon = weaponsByClass.knight[randomWeaponIndex];
            return this.weapon;
        }
        if (enemyClass === "monk") {
            let randomWeaponIndex = Math.floor(Math.random() * weaponsByClass.monk.length);
            this.weapon = weaponsByClass.monk[randomWeaponIndex];
            return this.weapon;
        }
        if (enemyClass === "mystic") {
            let randomWeaponIndex = Math.floor(Math.random() * weaponsByClass.mystic.length);
            this.weapon = weaponsByClass.mystic[randomWeaponIndex];
            return this.weapon;
        }
    }

    setArmor(id) {
        let armorId = id;
        this.armor = armorData.armors.find(armor => armor.id === armorId);
        return this.armor;
    }

    setRandomArmor(enemyClass) {
        if (enemyClass === "knight") {
            let randomArmorIndex = Math.floor(Math.random() * armorByClass.knight.length);
            this.armor = armorByClass.knight[randomArmorIndex];
            return this.armor;
        }
        if (enemyClass === "monk") {
            let randomArmorIndex = Math.floor(Math.random() * armorByClass.monk.length);
            this.armor = armorByClass.monk[randomArmorIndex];
            return this.armor;
        }
        if (enemyClass === "mystic") {
            let randomArmorIndex = Math.floor(Math.random() * armorByClass.mystic.length);
            this.armor = armorByClass.mystic[randomArmorIndex];
            return this.armor;
        }
    }

    setShield(enemyClass) {

    }

    setSpells(enemyClass) {
        return undefined;
    }
}