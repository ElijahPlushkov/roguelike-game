import { ChangeStats } from "../ChangeStats.js";
import { parseLevelData } from "./gameData.js";

let statChanger = new ChangeStats;
export function modusDomini() {
    statChanger.changeStats({"might": 100, "agility": 100, "reputation": 100, "prayer": 100});
}

export function divinaIntervention() {
    parseLevelData("chyceen-borderlands", {x: 0, y: 0});
}

export function acidArrow() {
    return 10; // damage
}