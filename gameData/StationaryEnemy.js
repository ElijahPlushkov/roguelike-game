import { gameData } from "./data/gameData.js";

export class StationaryEnemy {

    enemyCoordinates = null;

    constructor(coordinates) {
        this.enemyCoordinates = coordinates
    }

    detectPlayer() {
        if ((gameData.playerCoordinates.x - this.enemyCoordinates.x) <= 3
        && this.enemyCoordinates.y === gameData.playerCoordinates.y) {
            console.log("pew-pew");
        }
    }
}