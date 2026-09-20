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

export function emptyScript() {
    console.log("the empty script activated. it does absolutely nothing save for displaying this message.");
}

export function firstKingdomSiteWallRemover() {
    changeTileType(4, 10, ".");

    setTimeout(() => firstKingdomSiteWallRestore(), 5000);
}

function firstKingdomSiteWallRestore() {
    changeTileType(4, 10, "#");
}