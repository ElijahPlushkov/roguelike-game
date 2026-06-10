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

    tooltip.textContent = `Position: ${tile.dataset.x}, ${tile.dataset.y} | Type: ${tile.dataset.type || 'Unknown'}`;
    tooltip.style.left = event.clientX + 10 + 'px';
    tooltip.style.top = event.clientY + 10 + 'px';
    tooltip.style.display = 'block';

    tile.onmouseleave = () => {
        tooltip.style.display = 'none';
    };
}