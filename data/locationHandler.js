import { gameData, parseLevelData } from "./gameData.js";
import { getLevel } from "./levels/levelsData.js";
import { markLocationSeen } from "./helperFunctions.js";
import { initCombat } from "./combatHandler.js";

export function checkDungeonAccess(id) {
    gameData.isEventActive = true;

    let level = getLevel(id);
    let dungeonWindow = document.querySelector(".dungeon-box");
    dungeonWindow.classList.remove("hidden");

    let dungeonDescription = dungeonWindow.querySelector(".dungeon-description");

    markLocationSeen({id: level.id, name: level.name, type: level.type});

    let yesBtn = dungeonWindow.querySelector(".dungeon-door-button-yes");
    let noBtn = dungeonWindow.querySelector(".dungeon-door-button-no");
    let fightGuardian = dungeonWindow.querySelector(".fight-guardian");

    yesBtn.onclick = () => {
        gameData.isEventActive = false;
        dungeonWindow.classList.add("hidden");
        loadDungeon(id);
    };

    noBtn.onclick = () => {
        gameData.isEventActive = false;
        dungeonWindow.classList.add("hidden");
    };

    let isGuardianDefeated = gameData.eventOutcomes.find(e => e.event === level.isGuarded.id);

    if (level.isGuarded && !isGuardianDefeated) {
        dungeonDescription.textContent = "You found a " + level.type + " called " + level.name + ". It has a guardian." +
            " Do you wish to fight them?";
        fightGuardian.classList.remove("hidden");
        yesBtn.classList.add("hidden");

        fightGuardian.onclick = () => {
            initCombat(level.isGuarded.id, level.isGuarded.enemyType);
        };

        document.addEventListener("combatEnded", () => {
            isGuardianDefeated = gameData.eventOutcomes.find(e => e.event === level.isGuarded.id);
            if (isGuardianDefeated) {
                fightGuardian.classList.add("hidden");
                yesBtn.classList.remove("hidden");
            }
        });
    }

    if (!level.isLocked && !level.isGuarded) {
        dungeonDescription.textContent = "You found a " + level.type + " called " + level.name + ". Do you wish to enter?";
    }
}


export function loadDungeon(id) {
    parseLevelData(id);
}

export function exitDungeon(id, spawnPosition) {
    parseLevelData(id, spawnPosition);
}