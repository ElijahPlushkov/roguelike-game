import { teleportData } from "./data/teleportData.js";
import { mapRender } from "./mapRender.js";
import { playerCoordinates } from "./data/gameData.js";

export function initTeleport(teleportId) {
    let teleport = teleportData.teleports.find(teleport => teleport.id === teleportId);
    if (teleport) {
        if (teleport.charges > 0) {
            playerCoordinates.x = teleport.endPointCoordinates.x;
            playerCoordinates.y = teleport.endPointCoordinates.y;
            mapRender()
        }
    }
}