import{ map, player } from "./dataLoaders.js";

export function mapRender() {

    const gameContainer = document.getElementById("game");
    gameContainer.innerHTML = "";

    for (let y = 0; y < map.length; y++) {
        const row = document.createElement("div");
        row.classList.add("tile-row");

        for (let x = 0; x < map[y].length; x++) {
            const tileType = map[y][x];
            const tile = document.createElement("div");
            tile.classList.add("tile");

            if (x === player.x && y === player.y) {
                tile.classList.add("player");
                tile.textContent = "Ж";
            } else {
                switch (tileType) {
                    case "#":
                        tile.classList.add("wall");
                        tile.textContent = "#";
                        break;
                    case "=":
                        tile.classList.add("wooden-wall");
                        tile.textContent = "=";
                        break;
                    case "α":
                        tile.classList.add("boulder");
                        tile.textContent = "α";
                        break;
                    case ".":
                        tile.classList.add("floor");
                        tile.textContent = ".";
                        break;
                    case "□":
                        tile.classList.add("cobble");
                        tile.textContent = "□";
                        break;
                    case "T":
                        tile.classList.add("tree");
                        tile.textContent = "Т";
                        break;
                    case "N":
                        tile.classList.add("npc");
                        tile.textContent = "N";
                        break;
                    case "E":
                        tile.classList.add("enemy");
                        tile.textContent = "E";
                        break;
                    case "Ω":
                        tile.classList.add("item");
                        tile.textContent = "Ω";
                        break;
                    case "П":
                        tile.classList.add("door");
                        tile.textContent = "П";
                        break;
                    case "Θ":
                        tile.classList.add("altar");
                        tile.textContent = "Θ";
                        break;
                    case "t":
                        tile.classList.add("short-tree");
                        tile.textContent = "t";
                        break;
                    case "*":
                        tile.classList.add("pine-tree");
                        tile.textContent = "*";
                        break;
                    case "▲":
                        tile.classList.add("mountain");
                        tile.textContent = "▲";
                        break;
                    case "≈":
                        tile.classList.add("water");
                        tile.textContent = "≈";
                        break;
                    default:
                        tile.classList.add("unknown");
                        break;
                }
            }
            row.appendChild(tile);
        }

        gameContainer.appendChild(row);
    }
}