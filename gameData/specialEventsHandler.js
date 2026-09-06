import {
    gameData, map, playerCoordinates,
    specialMessageDescription, specialMessageOptions,
    specialMessageWindow
} from "./data/gameData.js";
import { createContinueButton, markEventSeen } from "./helperFunctions.js";
import { mapRender } from "./mapRender.js";
import { locationData } from "./data/levels/ant-colony.js";
import { changeTileType } from "./mapHandler.js";
import { QuestJournalUpdater } from "./QuestJournalUpdater.js";

let journalUpdater = new QuestJournalUpdater();

// list of special events
const antColonyAreInfectedAntsDefeatedEvent = "antColonyAreInfectedAntsDefeatedEvent";
const antColonyOutcome = "antColonyOutcome"; //TODO what kind of outcome?

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
                locationData.tileData.enemies.push({ "type": "enemy", "id": "ant-col-diseased-ant-9", "enemyType": "random-weak", "race": "ant", "x": 11, "y": 3 });
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
        }
    } else {
        return;
    }
}

export function FirstKingdomFortLightTorch() {
    let event = gameData.eventOutcomes.find(event => event.id === "lighting-torch");
    if (event && event.outcome === "completed") {
        map.splice(16, 1, ["","","","","","#","#","#","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]);
        map.splice(15, 1, ["","","","","","#","θ","#","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]);
        map.splice(14, 1, ["","","","","","#",".","#","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]);
        map.splice(13, 1, ["","","","","","#",".","#","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]);
        mapRender();
    }
}