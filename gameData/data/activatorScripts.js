import { changeTileType } from "../mapHandler.js";

export function firstKingdomSiteBridgeActivate() {
    changeTileType(6, 6, "□");
    changeTileType(6, 7, "□");
    changeTileType(6, 8, "□");
}

export function firstKingdomSiteBridgeDeactivate() {
    changeTileType(6, 6, "≈");
    changeTileType(6, 7, "≈");
    changeTileType(6, 8, "≈");
}