import { gameData, map, playerCoordinates } from "./data/gameData.js";
import { Movement } from "./Movement.js";
import { displayMapInfo } from "./mapHandler.js";

let movement = new Movement();

export function mapRender() {

    const gameContainer = document.getElementById("game-map");
    gameContainer.innerHTML = "";

    for (let y = 0; y < map.length; y++) {
        const row = document.createElement("div");
        row.classList.add("tile-row");

        for (let x = 0; x < map[y].length; x++) {
            const tileType = map[y][x];
            const tile = document.createElement("div");
            tile.classList.add("tile");
            tile.dataset.x = x;
            tile.dataset.y = y;

            if (x === playerCoordinates.x && y === playerCoordinates.y) {
                tile.classList.add("player");
                tile.textContent = "Ж";
            } else {
                switch (tileType) {
                    case "#":
                        tile.classList.add("wall");
                        tile.textContent = "#";
                        tile.dataset.type = "wall";
                        break;
                    case "=":
                        tile.classList.add("wooden-wall");
                        tile.textContent = "=";
                        tile.dataset.type = "wooden wall";
                        break;
                    case "α":
                        tile.classList.add("boulder");
                        tile.textContent = "α";
                        tile.dataset.type = "boulder";
                        break;
                    case ".":
                        tile.classList.add("dirt");
                        tile.textContent = ".";
                        tile.dataset.type = "dirt";
                        break;
                    case "□":
                        tile.classList.add("cobble");
                        tile.textContent = "□";
                        tile.dataset.type = "cobble";
                        break;
                    case "T":
                        tile.classList.add("tree");
                        tile.dataset.type = "tree";
                        break;
                    case "c":
                        tile.classList.add("npc");
                        tile.textContent = "c";
                        tile.dataset.type = "npc";
                        break;
                    case "e":
                        tile.classList.add("enemy");
                        tile.textContent = "e";
                        tile.dataset.type = "enemy";
                        break;
                    case "Ω":
                        tile.classList.add("item");
                        tile.textContent = "Ω";
                        tile.dataset.type = "altar";
                        break;
                    case "П":
                        tile.classList.add("door");
                        tile.textContent = "П";
                        tile.dataset.type = "door";
                        break;
                    case "Θ":
                        tile.classList.add("altar");
                        tile.textContent = "Θ";
                        break;
                    case "t":
                        tile.classList.add("birch");
                        tile.dataset.type = "birch";
                        break;
                    case "*":
                        tile.classList.add("pine-tree");
                        tile.textContent = "*";
                        tile.dataset.type = "pine-tree";
                        break;
                    case "▲":
                        tile.classList.add("mountain");
                        tile.textContent = "▲";
                        tile.dataset.type = "mountain";
                        break;
                    case "≈":
                        tile.classList.add("water");
                        tile.textContent = "≈";
                        tile.dataset.type = "water";
                        break;
                    case "Δ":
                        tile.classList.add("camp");
                        tile.dataset.type = "camp";
                        break;
                    case "⌂":
                        tile.classList.add("dungeon-door");
                        tile.textContent = "⌂";
                        tile.dataset.type = "dungeon";
                        break;
                    case "F":
                        tile.classList.add("building");
                        tile.textContent = "F";
                        tile.dataset.type = "building";
                        break;
                    case "<":
                        // tile.classList.add("");
                        tile.textContent = "<";
                        break;
                    case "▣":
                        // tile.classList.add("");
                        tile.textContent = "▣";
                        break;
                    default:
                        tile.classList.add("unknown");
                        break;
                }
            }
            row.appendChild(tile);
        }
        gameContainer.appendChild(row);
        movement.defineFieldOfView(gameData.playerCoordinates.x, gameData.playerCoordinates.y);
        displayMapInfo();
    }
}