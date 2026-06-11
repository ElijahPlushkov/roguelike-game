import { gameData } from "./gameData.js";

export function displayMapInfo() {
    let tiles = document.querySelectorAll(".tile");

    tiles.forEach(tile => {
        tile.addEventListener('mouseenter', (e) => {
            showTileInfo(tile, e);
        });
    });
}

function showTileInfo(tile, event) {
    let tooltip = document.getElementById('tile-tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.id = 'tile-tooltip';
        tooltip.classList.add("tooltip");
        document.body.appendChild(tooltip);
    }

    let tileX = parseInt(tile.dataset.x);
    let tileY = parseInt(tile.dataset.y);

    let tooltipText = "";

    if (tile.dataset.type === "dungeon") {
        let foundLocation = gameData.locations.find(location =>
            location.locationCoordinates.x === tileX &&
            location.locationCoordinates.y === tileY
        );

        if (foundLocation) {
            tile.dataset.name = foundLocation.name;
            tooltipText = `Position: ${tileX}, ${tileY} | Name: ${foundLocation.name}`;
        } else {
            tooltipText = `Position: ${tileX}, ${tileY} | Type: Dungeon (Unnamed)`;
        }
    } else {
        tooltipText = `Position: ${tileX}, ${tileY} | Type: ${tile.dataset.type || 'Unknown'}`;
    }

    tooltip.textContent = tooltipText;
    tooltip.style.left = event.clientX + 10 + 'px';
    tooltip.style.top = event.clientY + 10 + 'px';
    tooltip.style.display = 'block';

    tile.onmouseleave = () => {
        tooltip.style.display = 'none';
    };
}