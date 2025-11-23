import{ map, player } from "./dataLoaders.js";

export const cameraView = {
    height: 21,
    width: 21
}

export function mapRender() {

    let cameraXStart = player.x - Math.floor(cameraView.width / 2);
    let cameraYStart = player.y - Math.floor(cameraView.height / 2);
    let cameraXEnd = cameraXStart + cameraView.width;
    let cameraYEnd = cameraYStart + cameraView.height;

    if (cameraXStart < 0) {
        cameraXStart = 0;
    }
    if (cameraYStart < 0) {
        cameraYStart = 0;
    }
    if (cameraXEnd > map[0].length)
        cameraXEnd = map[0].length;

    if (cameraYEnd > map.length) {
        cameraYEnd = map.length;
    }

    const gameContainer = document.getElementById("game-map");
    gameContainer.innerHTML = "";

    for (let y = cameraYStart; y < cameraYEnd; y++) {
        const row = document.createElement("div");
        row.classList.add("tile-row");

        for (let x = cameraXStart; x < cameraXEnd; x++) {
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
                        tile.classList.add("dirt");
                        tile.textContent = ".";
                        break;
                    case "□":
                        tile.classList.add("cobble");
                        tile.textContent = "□";
                        break;
                    case "T":
                        tile.classList.add("tree");
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
                        tile.classList.add("birch");
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