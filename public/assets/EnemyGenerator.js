
class GenericEnemy {
    difficulty = null // String
    race = null // String
    characteristics = null // Object
    fleeConditions = null // Object
    description = null // String
    combatVictory = null // String
    combatDefeat = null // String
    negotiationVictory = null // String
    negotiationDefeat = null // String
    fleeSuccess = null // String
    fleeFailure = null // String
    options = null // Array

    constructor(difficulty, race, characteristics, fleeConditions,
                description, combatVictory, combatDefeat, negotiationVictory, negotiationDefeat, fleeSuccess, fleeFailure, options) {
        this.difficulty = difficulty
        this.race = race
        this.characteristics = characteristics
        this.fleeConditions = fleeConditions
        this.description = description
        this.combatVictory = combatVictory
        this.combatDefeat = combatDefeat
        this.negotiationVictory = negotiationVictory
        this.negotiationDefeat = negotiationDefeat
        this.fleeSuccess = fleeSuccess
        this.fleeFailure = fleeFailure
        this.options = options
    }
}

export class GenerateEnemy {

    constructor(difficulty) {
        this.difficulty = difficulty
    }

    generateEnemy() {
        let difficulty = this.difficulty
        let race = this.setRace()
        let characteristics = this.setCharacteristics()
        let fleeConditions = this.setFleeConditions()
        let description = this.setDescription() + race
        let combatVictory = this.setCombatVictory()
        let combtaDefeat = this.setCombatDefeat()
        let negotiationVictory = this.setNegotiationVictory()
        let negotiationDefeat = this.setNegotiationDefeat()
        let fleeSuccess = this.setFleeSuccess()
        let fleeFailure = this.setFleeFailure()
        let options = this.setOptions()
        return new GenericEnemy(difficulty, race, characteristics,
            fleeConditions, description, combatVictory,
            combtaDefeat, negotiationVictory, negotiationDefeat, fleeSuccess, fleeFailure, options)
    }

    setRace() {
        if (this.difficulty === "flimsy") {
            let flimsyRaces = ['tick', 'gnat']
            let randomIndex = Math.floor(Math.random() * flimsyRaces.length)
            return flimsyRaces[randomIndex]
        }

        if (this.difficulty === "weak") {
            let weakRaces = ['ant', 'mosquito', 'fly']
            let randomIndex = Math.floor(Math.random() * weakRaces.length)
            return weakRaces[randomIndex]
        }
        if (this.difficulty === "average") {
            let averageRaces = ['butterfly', 'wasp', 'bee']
            let randomIndex = Math.floor(Math.random() * averageRaces.length)
            return averageRaces[randomIndex]
        }
    }

    setCharacteristics() {
        if (this.difficulty === "flimsy") {
            return {
                might: this.getRandomNumber(0, 1),
                reputation: this.getRandomNumber(0, 1),
                prayer: this.getRandomNumber(0, 1)
            }
        }
        if (this.difficulty === "weak") {
            return {
                might: this.getRandomNumber(1, 10),
                reputation: this.getRandomNumber(1, 10),
                prayer: this.getRandomNumber(1, 10)
            }
        }
        if (this.difficulty === "average") {
            return {
                might: this.getRandomNumber(11, 20),
                reputation: this.getRandomNumber(11, 20),
                prayer: this.getRandomNumber(11, 20)
            }
        }
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