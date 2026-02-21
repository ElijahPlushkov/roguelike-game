import {NewEnemy} from "./NewEnemy.js";

class NewNpcEnemy {

    BASE_HEALTH = 10;
    BASE_MYSTICISM = 10;
    BASE_WILLPOWER = 10;

    HEALTH_MODIFIER = 2;
    MYSTICISM_MODIFIER = 1;
    WILLPOWER_MODIFIER = 0.5;

    BASE_SPELL_CHANCE = 10

    createNpcEnemy(npcCharacteristics, npcName, npcRace) {
        let enemyDifficulty = "none";
        let name = npcName;
        let race = npcRace;
        let characteristics = npcCharacteristics;
        let health = this.setHealth(characteristics.might);
        let mysticism = this.setMysticism(characteristics.prayer);
        let willpower = this.setWillpower(characteristics.prayer);
        let accuracy = characteristics.agility;
        let evasion = characteristics.agility;
        let spellChance = this.BASE_SPELL_CHANCE;
        let fleeConditions = this.setFleeConditions();
        let description = this.setDescription() + name;
        let combatVictory = name + this.setCombatVictory();
        let combatDefeat = name + this.setCombatDefeat();
        let negotiationVictory = "";
        let negotiationDefeat = "";
        let fleeSuccess = this.setFleeSuccess();
        let fleeFailure = this.setFleeFailure();
        let options = this.setOptions();

        return new NewEnemy(enemyDifficulty, race,
            characteristics, health, mysticism, willpower, accuracy, evasion, spellChance,
            fleeConditions, description,
            combatVictory, combatDefeat, negotiationVictory, negotiationDefeat, fleeSuccess, fleeFailure, options)
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

    setFleeConditions() {
        return {
            might: Math.floor(this.getRandomNumber(10, 20) / 2),
            reputation: Math.floor(this.getRandomNumber(10, 20) / 2),
            prayer: Math.floor(this.getRandomNumber(10, 20) / 2)
        }
    }

    setDescription() {
        return "You are about to fight ";
    }

    setCombatVictory() {
        return " has been defeated!";
    }

    setCombatDefeat() {
        return " has defeated you!";
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
                key: "flee",
                label: "Flee."
            }
        ]
    }

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}