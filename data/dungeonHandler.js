import {playerCoordinates, parseLevelData} from "./gameData.js";
import {mapRender} from "./mapRender.js";

export function loadDungeon(id) {
    parseLevelData(id);
}

export function exitDungeon(id, spawnPosition) {
    parseLevelData(id, spawnPosition);
}