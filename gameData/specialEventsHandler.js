import {gameData, specialMessageDescription, specialMessageOptions, specialMessageWindow} from "./data/gameData.js";
import { createContinueButton, markEventSeen } from "./helperFunctions.js";
import { locationData as firstKingdomSiteLocationData } from "./data/levels/first-kingdom-site.js";
import { changeTileType } from "./mapHandler.js";
import { QuestJournalUpdater } from "./QuestJournalUpdater.js";
import { AdventureLog } from "./AdventureLog.js";
import { teleportData } from "./data/teleportData.js";
import { specialEventData } from "./data/specialEventData.js";

let journalUpdater = new QuestJournalUpdater();
const adventureLogHandler = new AdventureLog();

// list of special events
const antColonyAreInfectedAntsDefeatedEvent = "antColonyAreInfectedAntsDefeatedEvent";
const firstKingdomSiteChlorophiusCelliaSwitchersEvent = "firstKingdomSiteChlorophiusCelliaSwitchersEvent";

export function initSpecialEvent(id) {
    let specialEvent = specialEventData.specialEvents.find(specialEvent => specialEvent.id === id);
    if (specialEvent) {
        if (!specialEvent.hasOccurred) {
            specialEvent.script();
            specialEvent.hasOccured = true;
        } else {
            return;
        }
    } else {
        return;
    }
}

export function displaySpecialMessage(message) {
    gameData.isEventActive = true;
    specialMessageWindow.classList.remove("hidden");
    specialMessageDescription.textContent = message;

    let continueButton = createContinueButton();
    specialMessageOptions.prepend(continueButton);

    continueButton.addEventListener("click", () => {
        // gameData.hasSpecialMessage = false;
        gameData.specialMessage = "";
        specialMessageWindow.classList.add("hidden");
        gameData.isEventActive = false;
    });
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