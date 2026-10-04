import {
    gameData, playerCoordinates,
    specialMessageDescription, specialMessageOptions,
    specialMessageWindow
} from "./data/gameData.js";
import { createContinueButton, isDialogueOutcomeEqual, markEventSeen } from "./helperFunctions.js";
import { mapRender } from "./mapRender.js";
import { locationData as antColonyLocationData } from "./data/levels/ant-colony.js";
import { locationData as firstKingdomSiteLocationData } from "./data/levels/first-kingdom-site.js";
import { changeTileType } from "./mapHandler.js";
import { QuestJournalUpdater } from "./QuestJournalUpdater.js";
import { revealSection } from "./dynamicSectionHandler.js";
import { getNpc } from "./data/npcData/npcDataManager.js";
import { AdventureLog } from "./AdventureLog.js";
import { teleportData } from "./data/teleportData.js";
import { specialEventData } from "./data/specialEventData.js";

let journalUpdater = new QuestJournalUpdater();
const adventureLogHandler = new AdventureLog();

// list of special events
const antColonyAreInfectedAntsDefeatedEvent = "antColonyAreInfectedAntsDefeatedEvent";
const antColonyOutcome = "antColonyOutcome"; //TODO what kind of outcome?
const firstKingdomSiteChlorophiusCelliaSwitchersEvent = "firstKingdomSiteChlorophiusCelliaSwitchersEvent";

export function initSpecialEvent(id) {
    let specialEvent = specialEventData.specialEvents.find(specialEvent => specialEvent.id === id);
    if (!specialEvent.hasOccurred) {
        specialEvent.script();
        specialEvent.hasOccured = true;
    } else {
        return;
    }
}

export function antColonyAreInfectedAntsDefeated() {
    const requirements = [
        {id: "ant-col-diseased-ant-1", outcome: true},
        {id: "ant-col-diseased-ant-2", outcome: true},
        {id: "ant-col-diseased-ant-3", outcome: true},
        {id: "ant-col-diseased-ant-4", outcome: true},
        {id: "ant-col-diseased-ant-5", outcome: true},
        {id: "ant-col-diseased-ant-6", outcome: true},
        {id: "ant-col-diseased-ant-7", outcome: true},
        {id: "ant-col-diseased-ant-8", outcome: true}
    ]

    if (gameData.combatOutcomes.length < 8) {
        return;
    }
    const combatOutcomes = gameData.combatOutcomes;
    const strCombatOutcomes = new Set(combatOutcomes.map(combat => JSON.stringify(combat)));

    if (requirements.every(combat => strCombatOutcomes.has(JSON.stringify(combat)))) {
        journalUpdater.journalUpdater({id: "strike-back", state: "diseased-ants-killed"});
        markEventSeen(antColonyAreInfectedAntsDefeatedEvent);
    } else {
        return;
    }
}

export function isAntColonyInfected() {
    let antsAndQueens = gameData.quests.find(quest => quest.id === "ants-and-queens");
    if (antsAndQueens) {
        if (antsAndQueens.states.includes("aftermath-colony-infected")) {
            gameData.isEventActive = true;
            specialMessageWindow.classList.remove("hidden");
            specialMessageDescription.textContent = "Your actions led the colony to its demise. The queen's mind does not belong to her anymore; she is but a vessel for countless larvae who will be carrying the demonic disease from the very moment they are conceived. They will grow into an army of infectious warriors, unified under the banner of a mysterious King";

            let continueButton = createContinueButton();
            specialMessageOptions.prepend(continueButton);

            continueButton.addEventListener("click", () => {
                gameData.playerCoordinates.x = 11;
                gameData.playerCoordinates.y = 2;
                playerCoordinates.x = 11;
                playerCoordinates.y = 2;
                antColonyLocationData.tileData.enemies.push({ "type": "enemy", "id": "ant-col-diseased-ant-9", "enemyType": "random-average", "race": "ant", "x": 11, "y": 3 });
                antColonyLocationData.tileData.enemies.push({ "type": "enemy", "id": "ant-col-diseased-ant-9", "enemyType": "random-average", "race": "ant", "x": 24, "y": 17 });
                changeTileType(11, 3, "e");
                mapRender();
                specialMessageWindow.classList.add("hidden");

                markEventSeen(antColonyOutcome);
                gameData.isEventActive = false;
            });
        } else if (antsAndQueens.states.includes("aftermath-colony-saved")
            && gameData.npcs.find(npc => npc.id === "agra-warchief").isAlive === false) {
            gameData.isEventActive = true;
            specialMessageWindow.classList.remove("hidden");
            specialMessageDescription.textContent = "Although the mighty warchief has been slain, the colony now has a chance to survive. The infected attack was not the last one, but the local ants have learned how to fight the demonic disease. And the queen's mind, not entirely at ease, will work toward creating ants immune to the demonic illness.";

            let continueButton = createContinueButton();
            specialMessageOptions.prepend(continueButton);

            continueButton.addEventListener("click", () => {
                specialMessageWindow.classList.add("hidden");
                markEventSeen(antColonyOutcome);
                gameData.isEventActive = false;
            });

            revealSection("tradingPost");
            changeTileType(14, 3, "□");
            changeTileType(12, 1, ".");

        } else if (antsAndQueens.states.includes("aftermath-colony-saved")
            && gameData.npcs.find(npc => npc.id === "agra-warchief").isAlive) {
            gameData.isEventActive = true;
            specialMessageWindow.classList.remove("hidden");
            specialMessageDescription.textContent = "Thanks to your timely interference, the colony has repelled an unexpected attack, and the ant behind it has turned into dust. The local ants are now fully prepared for more attacks, feeling secure under the banners of the mighty Agra. And the queen's mind, although not entirely at ease, will work toward creating ants immune to the demonic illness.";

            let continueButton = createContinueButton();
            specialMessageOptions.prepend(continueButton);

            continueButton.addEventListener("click", () => {
                specialMessageWindow.classList.add("hidden");
                markEventSeen(antColonyOutcome);
                gameData.isEventActive = false;
            });

            revealSection("tradingPost");
            changeTileType(12, 1, ".");
        }
    } else {
        return;
    }
}

export function firstKingdomHunterEncounter() {
    if (revealSection("revealedTunnel")) {
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
    }
    adventureLogHandler.appendEventMessage("You hear a wall crumbling down, revealing a passage.");
}

export function firstKingdomSiteChlorophiusCelliaSwitchers() {
    const requirements = [
        {id: 'first-kingdom-site-portal-activator-1', status: true},
        {id: 'first-kingdom-site-portal-activator-2', status: true},
        {id: 'first-kingdom-site-portal-activator-3', status: true}
    ]

    const activatorStatuses = gameData.activatorStatuses;
    const strActivatorStatuses = new Set(activatorStatuses.map(status => JSON.stringify(status)));

    if (requirements.every(status => strActivatorStatuses.has(JSON.stringify(status)))) {
        markEventSeen(firstKingdomSiteChlorophiusCelliaSwitchersEvent);

        let teleport = teleportData.teleports.find(teleport => teleport.id === "first-kingdom-site-teleport-3");
        teleport.charges = 1;
        adventureLogHandler.appendSuccessfulMessage("You charge a teleport.");

        firstKingdomSiteLocationData.tileData.enemies.push({ "type": "enemy", "id": "mold-undead-8", "enemyType": "random-average", "race": "mold undead", "aggressive": 1, "x": 9, "y": 15 });
        changeTileType(9, 15, "e");
        adventureLogHandler.appendFailMessage("A mold undead awakens.");
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