import {ChangeAttributes} from "./ChangeAttributes.js";

export class Player {

    BASE_HEALTH = 10;
    BASE_MYSTICISM = 10;
    BASE_WILLPOWER = 10;

    health = 0;
    mysticism = 0;
    willpower = 0;

    might = 0;
    reputation = 0;
    prayer = 0;
    agility = 0;
    pollen = 0;

    BASE_ACCURACY = 0;
    BASE_EVASION = 0;
    BASE_SPELL_CHANCE = 15;

    constructor(might, reputation, prayer, agility, pollen) {
        this.health = this.BASE_HEALTH;
        this.mysticism = this.BASE_MYSTICISM;
        this.willpower = this.BASE_WILLPOWER;

        this.might = might;
        this.reputation = reputation;
        this.prayer = prayer;
        this.agility = agility;
        this.pollen = pollen;

        this.BASE_ACCURACY = this.agility;
        this.BASE_EVASION = this.agility;
        this.BASE_SPELL_CHANCE = 15;
    }

    setMight(newValue) {
        this.might = newValue;
    }

    setReputation(newValue) {
        this.reputation = newValue;
    }

    setPrayer(newValue) {
        this.prayer = newValue;
    }

    setAgility(newValue) {
        this.agility = newValue;
    }

    setPollen(newValue) {
        this.pollen = newValue;
    }

    setHealth(newValue) {
        this.health = newValue;
    }

    setMysticism(newValue) {
        this.mysticism = newValue;
    }

    setWillpower(newValue) {
        this.willpower = newValue;
    }

    getMight() {
        return this.might;
    }

    getReputation() {
        return this.reputation;
    }

    getPrayer() {
        return this.prayer;
    }

    getAgility() {
        return this.agility;
    }

    getHealth() {
        return this.health;
    }

    getMysticism() {
        return this.mysticism;
    }

    getWillpower() {
        return this.willpower;
    }

    setStartingInventory() {

    }
    changeAttributes(stat) {
        let attributeChanger = new ChangeAttributes();
        attributeChanger.changeAttributes(stat);
    }
}