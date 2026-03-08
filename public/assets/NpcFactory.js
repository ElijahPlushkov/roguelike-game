import {NewEnemy} from "./NewEnemy.js";

export class NpcFactory {

    HEALTH_MODIFIER = 2;
    MYSTICISM_MODIFIER = 1;
    WILLPOWER_MODIFIER = 0.5;

    BASE_HEALTH = 10;
    BASE_MYSTICISM = 10;
    BASE_WILLPOWER = 10;

    BASE_SPELL_CHANCE = 10

    createNpcEnemy(npc) {
        let race = npc.race;
        let enemyClass = npc.npcClass;
        let weapon = npc.weapon;
        let armor = npc.armor;
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
        let combatVictory = this.setCombatVictory();
        let combatDefeat = this.setCombatDefeat();
        let fleeSuccess = this.setFleeSuccess();
        let fleeFailure = this.setFleeFailure();
        let options = this.setOptions();

        return new NewEnemy("none", race, enemyClass, weapon, armor, shield, spells,
            characteristics, health, mysticism, willpower, accuracy, evasion, spellChance,
            fleeConditions, description,
            combatVictory, combatDefeat,"none", "none", fleeSuccess, fleeFailure, options)
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

    setCombatVictory() {
        return "You win a victory.";
    }

    setCombatDefeat() {
        return "You lose. What a shame.";
    }

    setFleeSuccess() {
        return "You avoid combat.";
    }

    setFleeFailure() {
        return "It's impossible to avoid combat.";
    }

    setOptions() {
        return [
            {
                key: "fight",
                label: "Fight."
            },
            {
                key: "negotiate",
                label: "Negotiate."
            },
            {
                key: "flee",
                label: "Flee."
            }
        ]
    }
}