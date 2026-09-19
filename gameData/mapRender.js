import { gameData, map, playerCoordinates, sections } from "./data/gameData.js";
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
            tile.dataset.x = x;
            tile.dataset.y = y;
            tile.dataset.walkable = true;

            if (sections.length !== 0) {
                for (let section of sections) {
                    const inWidth = x >= section.width[0] && x <= section.width[section.width.length - 1];
                    const inHeight = y >= section.height[0] && y <= section.height[section.height.length - 1];

                    if (!inWidth || !inHeight || !section.isVisible) {
                        drawTiles(tile, x, y, "unknown");
                    }
                    if (inWidth || inHeight || section.isVisible) {
                        drawTiles(tile, x, y, tileType);
                    }
                }
            } else {
                drawTiles(tile, x, y, tileType);
            }
            row.appendChild(tile);
        }
        gameContainer.appendChild(row);
        movement.defineFieldOfView(gameData.playerCoordinates.x, gameData.playerCoordinates.y);
        displayMapInfo();
    }
}

function drawTiles(tile, x, y, tileType) {
    tile.classList.add("tile");

    if (x === playerCoordinates.x && y === playerCoordinates.y) {
        tile.classList.add("player");
        tile.textContent = "Ж";
        tile.dataset.type = "player";
    } else {
        switch (tileType) {
            case "#":
                tile.classList.add("wall");
                tile.textContent = "#";
                tile.dataset.type = "stone wall";
                tile.dataset.walkable = false;
                break;
            case "=":
                tile.classList.add("wooden-wall");
                tile.textContent = "=";
                tile.dataset.type = "wooden wall";
                tile.dataset.walkable = false;
                break;
            case "α":
                tile.classList.add("boulder");
                tile.textContent = "α";
                tile.dataset.type = "boulder";
                tile.dataset.walkable = true;
                break;
            case ".":
                tile.classList.add("dirt");
                tile.textContent = ".";
                tile.dataset.type = "dirt";
                tile.dataset.walkable = true;
                break;
            case "□":
                tile.classList.add("cobble");
                tile.textContent = "□";
                tile.dataset.type = "cobble";
                tile.dataset.walkable = true;
                break;
            case "T":
                tile.classList.add("tree");
                tile.dataset.type = "tree";
                tile.dataset.walkable = false;
                break;
            case "c":
                tile.classList.add("npc");
                tile.textContent = "c";
                tile.dataset.type = "npc";
                tile.dataset.walkable = true;
                break;
            case "e":
                tile.classList.add("enemy");
                tile.textContent = "e";
                tile.dataset.type = "enemy";
                tile.dataset.walkable = true;
                break;
            case "Ω":
                tile.classList.add("altar");
                tile.textContent = "Ω";
                tile.dataset.type = "altar";
                tile.dataset.walkable = true;
                break;
            case "П":
                tile.classList.add("door");
                tile.textContent = "П";
                tile.dataset.type = "door";
                tile.dataset.walkable = true;
                break;
            case "t":
                tile.classList.add("birch");
                tile.dataset.type = "birch";
                tile.dataset.walkable = false;
                break;
            case "*":
                tile.classList.add("pine-tree");
                tile.textContent = "*";
                tile.dataset.type = "pine-tree";
                tile.dataset.walkable = false;
                break;
            case "▲":
                tile.classList.add("mountain");
                tile.textContent = "▲";
                tile.dataset.type = "mountain";
                tile.dataset.walkable = false;
                break;
            case "≈":
                tile.classList.add("water");
                tile.textContent = "≈";
                tile.dataset.type = "water";
                tile.dataset.walkable = false;
                break;
            case "Δ":
                tile.classList.add("camp");
                tile.dataset.type = "camp";
                tile.dataset.walkable = true;
                break;
            case "⌂":
                tile.classList.add("dungeon-door");
                tile.textContent = "⌂";
                tile.dataset.type = "dungeon";
                tile.dataset.walkable = true;
                break;
            case "F":
                tile.classList.add("building");
                tile.textContent = "F";
                tile.dataset.type = "building";
                tile.dataset.walkable = true;
                break;
            case "<":
                // tile.classList.add("");
                tile.textContent = "<";
                tile.dataset.type = "exit";
                tile.dataset.walkable = true;
                break;
            case "▣":
                // tile.classList.add("");
                tile.textContent = "▣";
                tile.dataset.type = "chest";
                tile.dataset.walkable = true;
                break;
            case "⁜":
                tile.classList.add("trap");
                tile.textContent = "⁜";
                tile.dataset.type = "trap";
                tile.dataset.walkable = true;
                break;
            case "⇄":
                tile.classList.add("dirt");
                tile.textContent = "⇄";
                tile.dataset.type = "signpost";
                tile.dataset.walkable = true;
                break;
            case "⊡":
                tile.classList.add("cobble");
                tile.textContent = "⊡";
                tile.dataset.type = "button";
                tile.dataset.walkable = true;
                break;
            case "θ":
                tile.classList.add("altar");
                tile.textContent = "θ";
                tile.dataset.type = "teleport";
                tile.dataset.walkable = true;
                break;
            case "ʘ":
                tile.classList.add("npc");
                tile.textContent = "ʘ";
                tile.dataset.type = "chlorophius cellia" //TODO think of another name
                tile.dataset.walkable = true;
                break;
            case "ħ":
                tile.classList.add("boulder");
                tile.textContent = "ħ";
                tile.dataset.type = "grave"
                tile.dataset.walkable = true;
                break;
            case "":
                tile.classList.add("unknown");
                tile.textContent = "";
                tile.dataset.type = "unknown";
                tile.dataset.walkable = false;
                break;
        }
    }
}