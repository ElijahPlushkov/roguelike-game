import { gameData, playerCoordinates } from "./gameData.js";
import { locationData as antColonyLocationData } from "./levels/ant-colony.js";
import { changeTileType } from "../mapHandler.js";
import { mapRender } from "../mapRender.js";
import { revealSection } from "../dynamicSectionHandler.js";
import { isDialogueOutcomeEqual } from "../helperFunctions.js";
import { getNpc } from "./npcData/npcDataManager.js";
import { AdventureLog } from "../AdventureLog.js";
import { locationData as firstKingdomSiteLocationData } from "./levels/first-kingdom-site.js";
import { displaySpecialMessage } from "../specialEventsHandler.js";

const adventureLogHandler = new AdventureLog();

export function isAntColonyInfected() {
    let antsAndQueens = gameData.quests.find(quest => quest.id === "ants-and-queens");
    let message;
    if (antsAndQueens) {
        if (antsAndQueens.states.includes("aftermath-colony-infected")) {
            message = "Your actions led the colony to its demise. The queen's mind does not belong to her anymore; she is but a vessel for countless larvae who will be carrying the demonic disease from the very moment they are conceived. They will grow into an army of infectious warriors, unified under the banner of a mysterious King";

            gameData.playerCoordinates.x = 11;
            gameData.playerCoordinates.y = 2;
            playerCoordinates.x = 11;
            playerCoordinates.y = 2;
            antColonyLocationData.tileData.enemies.push({ "type": "enemy", "id": "ant-col-diseased-ant-9", "enemyType": "random-average", "race": "ant", "x": 11, "y": 3 });
            antColonyLocationData.tileData.enemies.push({ "type": "enemy", "id": "ant-col-diseased-ant-9", "enemyType": "random-average", "race": "ant", "x": 24, "y": 17 });
            changeTileType(11, 3, "e");
            changeTileType(24, 17, "e");
            mapRender();

            displaySpecialMessage(message);
        } else if (antsAndQueens.states.includes("aftermath-colony-saved")
            && gameData.npcs.find(npc => npc.id === "agra-warchief").isAlive === false) {

            message = "Although the mighty warchief has been slain, the colony now has a chance to survive. The infected attack was not the last one, but the local ants have learned how to fight the demonic disease. And the queen's mind, not entirely at ease, will work toward creating ants immune to the demonic illness.";

            revealSection("tradingPost");
            changeTileType(14, 3, "□");
            changeTileType(12, 1, ".");

            displaySpecialMessage(message);
        } else if (antsAndQueens.states.includes("aftermath-colony-saved")
            && gameData.npcs.find(npc => npc.id === "agra-warchief").isAlive) {

            message = "Thanks to your timely interference, the colony has repelled an unexpected attack, and the ant behind it has turned into dust. The local ants are now fully prepared for more attacks, feeling secure under the banners of the mighty Agra. And the queen's mind, although not entirely at ease, will work toward creating ants immune to the demonic illness.";

            revealSection("tradingPost");
            changeTileType(12, 1, ".");

            displaySpecialMessage(message);
        }
    } else {
        console.log("no quest.");
    }
}

export function firstKingdomHunterEncounter() {
    if (isDialogueOutcomeEqual("first-kingdom-fort-hunter-encounter", "consent")) {
        changeTileType(33, 5, ".");
    } else {
        changeTileType(33, 5, ".");
        changeTileType(27, 3, ".");
        changeTileType(27, 4, ".");
        let npc = getNpc("cindel-guatta-first-kingdom-site-hunter");
        npc.isAlive = false;
        changeTileType(npc.coordinates.x, npc.coordinates.y, ".");
    }
    revealSection("revealedTunnel");
    adventureLogHandler.appendEventMessage("You hear a wall crumbling down, revealing a passage.");
}

export function firstKingdomSiteCindelGuattaRescued() {
    if (isDialogueOutcomeEqual("cindel-guatta-first-kingdom-site-hunter-dialogue", "gladHelp") ||
        isDialogueOutcomeEqual("cindel-guatta-first-kingdom-site-hunter-dialogue", "anythingForMe")) {

        changeTileType(29, 3, ".");
        changeTileType(30, 3, ".");
        changeTileType(31, 3, ".");

        let npc = firstKingdomSiteLocationData.tileData.npcs.find(npc => npc.id === "cindel-guatta-first-kingdom-site-hunter");
        npc.x = 1;
        npc.y = 1;
        changeTileType(28, 3, ".");
    }
}

export function firstKingdomSitePriestSlain() {
    let priest = gameData.combatOutcomes.find(enemy => enemy.id === "first-kingdom-site-mold-undead-priest");
    if (priest.outcome) {
        changeTileType(27, 3, ".");
        changeTileType(27, 4, ".");
    } else {
        return;
    }
}