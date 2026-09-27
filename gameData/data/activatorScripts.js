import { changeTileType } from "../mapHandler.js";
import { locationData as firstKingdomSiteLocationData } from "./levels/first-kingdom-site.js";

export function emptyScript() {
    console.log("the empty script activated. it does absolutely nothing save for displaying this message.");
}

export function firstKingdomSiteGraveAndChestActivator() {
    changeTileType(34, 16, "e");
    changeTileType(35, 16, "▣");
    firstKingdomSiteLocationData.tileData.enemies.push({ "type": "enemy", "id": "mold-undead-7", "enemyType": "random-weak", "race": "mold undead", "aggressive": 1, "x": 34, "y": 16 });
}