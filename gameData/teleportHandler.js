import { teleportData } from "./data/teleportData.js";
import { mapRender } from "./mapRender.js";
import { playerCoordinates } from "./data/gameData.js";
import { AdventureLog } from "./AdventureLog.js";

const adventureLogHandler = new AdventureLog();

export function initTeleport(teleportId) {
    let teleport = teleportData.teleports.find(teleport => teleport.id === teleportId);
    if (teleport) {
        if (teleport.charges > 0) {
            teleport.charges = teleport.charges - 1;
            playerCoordinates.x = teleport.endPointCoordinates.x;
            playerCoordinates.y = teleport.endPointCoordinates.y;
            if (teleport.script) {
                teleport.script();
            }
            mapRender()
        } else {
            adventureLogHandler.appendFailMessage("Teleport is out of charge.");
        }
    }
}