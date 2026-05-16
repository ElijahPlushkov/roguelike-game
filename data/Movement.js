export class Movement {
    defineFieldOfView(x, y) {

        let tiles = document.querySelectorAll(".tile");

        tiles.forEach(tile => {
            if (parseInt(tile.dataset.x) === (x + 1) && parseInt(tile.dataset.y) === y) {
                tile.classList.add("tile-fov");
            }
            if (parseInt(tile.dataset.x) === (x - 1) && parseInt(tile.dataset.y) === y) {
                tile.classList.add("tile-fov");
            }
            if (parseInt(tile.dataset.y) === (y + 1) && parseInt(tile.dataset.x) === x) {
                tile.classList.add("tile-fov");
            }
            if (parseInt(tile.dataset.y) === (y - 1) && parseInt(tile.dataset.x) === x) {
                tile.classList.add("tile-fov");
            }

            if (parseInt(tile.dataset.y) === (y + 1) && parseInt(tile.dataset.x) === (x + 1)) {
                tile.classList.add("tile-fov");
            }
            if (parseInt(tile.dataset.y) === (y - 1) && parseInt(tile.dataset.x) === (x + 1)) {
                tile.classList.add("tile-fov");
            }

            if (parseInt(tile.dataset.y) === (y + 1) && parseInt(tile.dataset.x) === (x - 1)) {
                tile.classList.add("tile-fov");
            }
            if (parseInt(tile.dataset.y) === (y - 1) && parseInt(tile.dataset.x) === (x - 1)) {
                tile.classList.add("tile-fov");
            }
        })
    }
}