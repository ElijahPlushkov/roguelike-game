export class NewEnemy {

    health = 0 // int
    mysticism = 0 // int
    willpower = 0 // int
    accuracy = 0 // int
    evasion = 0 // int
    spellChance = 0 // int

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

    constructor(difficulty, race, characteristics, health, mysticism, willpower, accuracy, evasion, spellChance,
                fleeConditions, description, combatVictory, combatDefeat, negotiationVictory, negotiationDefeat,
                fleeSuccess, fleeFailure, options) {
        this.difficulty = difficulty
        this.race = race
        this.characteristics = characteristics
        this.health = health
        this.mysticism = mysticism
        this.willpower = willpower
        this.accuracy = accuracy
        this.evasion = evasion
        this.spellChance = spellChance
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