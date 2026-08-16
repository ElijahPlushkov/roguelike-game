import {
    eventWindow,
    gameData, playerCoordinates,
    specialMessageDescription, specialMessageOptions,
    specialMessageWindow
} from "./data/gameData.js";
import {createContinueButton, markEventSeen} from "./helperFunctions.js";
import { mapRender } from "./mapRender.js";
import { levelData } from "./data/levels/ant-colony.js";
import { changeTileType } from "./mapHandler.js";

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

export function antColonyAreInfectedAntsDefeated() {
    if (gameData.combatOutcomes.length < 8) {
        return;
    }
    const combatOutcomes = gameData.combatOutcomes;
    const strCombatOutcomes = new Set(combatOutcomes.map(combat => JSON.stringify(combat)));

    return requirements.every(combat => strCombatOutcomes.has(JSON.stringify(combat)));
}

export function isAntColonyInfected() {
    let antsAndQueens = gameData.quests.find(quest => quest.id === "ants-and-queens");
    console.log(antsAndQueens);
    if (antsAndQueens) {
        if (antsAndQueens.states.includes("aftermath-colony-infected") && eventWindow.classList.contains("hidden")) {
            console.log("quest found, see what's next");
            specialMessageWindow.classList.remove("hidden");
            specialMessageDescription.textContent = "Your actions led the colony to its demise. The queen's mind does not belong to her anymore, she is but a vessel for countless larvae who wil be carrying the demonic disease since the very moment they are conceived. They will grow into an army of infectious warrior unified under the banner of a mysterious King.";

            let continueButton = createContinueButton();
            specialMessageOptions.prepend(continueButton);

            continueButton.addEventListener("click", () => {
                gameData.playerCoordinates.x = 11;
                gameData.playerCoordinates.y = 2;
                playerCoordinates.x = 11;
                playerCoordinates.y = 2;
                levelData.tileData.enemies.push({ "type": "enemy", "id": "ant-col-diseased-ant-9", "enemyType": "random-weak", "race": "ant", "x": 11, "y": 3 });
                changeTileType(11, 3, "e");
                mapRender();
                specialMessageWindow.classList.add("hidden");

                markEventSeen("antColonyOutcome");
            });
        } else {
            return;
        }
    } else {
        return;
    }
}