import { NewEnemy } from "./NewEnemy.js";
import { armorData } from "./armorData.js";
import { weaponData } from "./weaponData.js";

export class NpcEnemyFactory {

    HEALTH_MODIFIER = 2;
    MYSTICISM_MODIFIER = 1;
    WILLPOWER_MODIFIER = 0.5;

    BASE_HEALTH = 10;
    BASE_MYSTICISM = 10;
    BASE_WILLPOWER = 10;

    BASE_SPELL_CHANCE = 10

    createNpcEnemy(npc) {
        let race = npc.race;
        let difficulty = npc.difficulty;
        let enemyClass = npc.npcClass;
        let weapon = this.setWeapon(npc.weapon);
        let armor = this.setArmor(npc.armor);
        let shield = npc.shield;
        let spells = npc.spells; // object or array ?
        let characteristics = npc.characteristics;
        let health = this.setHealth(npc.characteristics.might);
        let mysticism = this.setMysticism(npc.characteristics.prayer);
        let willpower = this.setWillpower(npc.characteristics.prayer);
        let accuracy = npc.characteristics.agility;
        let evasion = npc.characteristics.agility;
        let spellChance = this.BASE_SPELL_CHANCE + npc.characteristics.prayer;
        let fleeConditions = this.setFleeConditions(npc.characteristics);
        let description = npc.description;

        return new NewEnemy(difficulty, race, enemyClass, weapon, armor, shield, spells,
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

    setArmor(id) {
        let armorId = id;
        this.armor = armorData.armors.find(armor => armor.id === armorId);
        return this.armor;
    }

    setWeapon(id) {
        let weaponId = id;
        this.weapon = weaponData.weapons.find(weapon => weapon.id === weaponId);
        return this.weapon;
    }
}