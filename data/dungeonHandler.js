import { parseLevelData } from "./gameData.js";

export function loadDungeon(id) {
    parseLevelData(id);
}

export function exitDungeon(id, spawnPosition) {
    parseLevelData(id, spawnPosition);
}