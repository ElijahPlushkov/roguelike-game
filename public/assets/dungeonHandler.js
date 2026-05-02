import {playerCoordinates, loadLevelData} from "./gameData.js";
import {mapRender} from "./mapRender.js";

export function loadDungeon(id) {
    loadLevelData(id);
}

export function exitDungeon(id, spawnPosition) {
    loadLevelData(id, spawnPosition);
}