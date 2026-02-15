import {NewEnemy} from "./NewEnemy.js";

export class RandomEnemyFactory {

    flimsyRaces = ['tick', 'gnat']
    weakRaces = ['ant', 'mosquito', 'fly']
    averageRaces = ['butterfly', 'wasp', 'bee']

    BASE_HEALTH = 10
    BASE_MYSTICISM = 10
    BASE_WILLPOWER = 10

    BASE_SPELL_CHANCE = 10

    healthModifiers = {
        flimsy: 1,
        weak: 2,
        average: 3
    }

    mysticismModifiers = {
        flimsy: 0.5,
        weak: 1,
        average: 2
    }

    willpowerModifiers = {
        flimsy: 0.3,
        weak: 0.9,
        average: 1.5
    }

    createRandomEnemy(difficulty) {
        let enemyDifficulty = difficulty
        let race = this.setRace(enemyDifficulty)
        let characteristics = this.setCharacteristics(enemyDifficulty)
        let health = this.setHealth(characteristics.might, enemyDifficulty)
        let mysticism = this.setMysticism(characteristics.prayer, enemyDifficulty)
        let willpower = this.setWillpower(characteristics.prayer, enemyDifficulty)
        let accuracy = characteristics.agility
        let evasion = characteristics.agility
        let spellChance = this.BASE_SPELL_CHANCE
        let fleeConditions = this.setFleeConditions()
        let description = this.setDescription() + race
        let combatVictory = this.setCombatVictory()
        let combatDefeat = this.setCombatDefeat()
        let negotiationVictory = this.setNegotiationVictory()
        let negotiationDefeat = this.setNegotiationDefeat()
        let fleeSuccess = this.setFleeSuccess()
        let fleeFailure = this.setFleeFailure()
        let options = this.setOptions()

        return new NewEnemy(enemyDifficulty, race,
            characteristics, health, mysticism, willpower, accuracy, evasion, spellChance,
            fleeConditions, description,
            combatVictory, combatDefeat, negotiationVictory, negotiationDefeat, fleeSuccess, fleeFailure, options)
    }

    setRace(difficulty) {
        if (difficulty === "flimsy") {
            let randomIndex = Math.floor(Math.random() * this.flimsyRaces.length)
            return this.flimsyRaces[randomIndex]
        }

        if (difficulty === "weak") {
            let randomIndex = Math.floor(Math.random() * this.weakRaces.length)
            return this.weakRaces[randomIndex]
        }
        if (difficulty === "average") {
            let randomIndex = Math.floor(Math.random() * this.averageRaces.length)
            return this.averageRaces[randomIndex]
        }
    }

    setCharacteristics(difficulty) {
        if (difficulty === "flimsy") {
            return {
                might: this.getRandomNumber(0, 1),
                reputation: this.getRandomNumber(0, 1),
                prayer: this.getRandomNumber(0, 1),
                agility: this.getRandomNumber(0, 1)
            }
        }
        if (difficulty === "weak") {
            return {
                might: this.getRandomNumber(1, 10),
                reputation: this.getRandomNumber(1, 10),
                prayer: this.getRandomNumber(1, 10),
                agility: this.getRandomNumber(1, 10)
            }
        }
        if (difficulty === "average") {
            return {
                might: this.getRandomNumber(11, 20),
                reputation: this.getRandomNumber(11, 20),
                prayer: this.getRandomNumber(11, 20),
                agility: this.getRandomNumber(11, 20)
            }
        }
    }

    setHealth(might, difficulty) {
            return this.BASE_HEALTH + (might + Math.floor(might * this.healthModifiers[difficulty]))
    }

    setMysticism(prayer, difficulty) {
        return this.BASE_MYSTICISM + (prayer + Math.floor(prayer * this.mysticismModifiers[difficulty]))
    }

    setWillpower(prayer, difficulty) {
        return this.BASE_WILLPOWER + (prayer + Math.floor(prayer * this.willpowerModifiers[difficulty]))
    }


    setFleeConditions() {
        return {
            might: Math.floor(this.getRandomNumber(10, 20) / 2),
            reputation: Math.floor(this.getRandomNumber(10, 20) / 2),
            prayer: Math.floor(this.getRandomNumber(10, 20) / 2)
        }
    }

    setDescription() {
        return "You meet a "
    }

    setCombatVictory() {
        return "You win a victory."
    }

    setCombatDefeat() {
        return "You lose. What a shame."
    }

    setNegotiationVictory() {
        return "Your words are heard."
    }

    setNegotiationDefeat() {
        return "No one listens to your false speeches."
    }

    setFleeSuccess() {
        return "You avoid combat."
    }

    setFleeFailure() {
        return "It's impossible to avoid combat."
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

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}