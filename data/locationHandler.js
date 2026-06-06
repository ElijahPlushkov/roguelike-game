import { gameData, parseLevelData } from "./gameData.js";
import { getLevel } from "./levels/levelsData.js";
import { markLocationSeen } from "./helperFunctions.js";
import { initCombat } from "./combatHandler.js";
import { AdventureLogHandler } from "./AdventureLogHandler.js";

let adventureLogHandler = new AdventureLogHandler();

export function checkDungeonAccess(id) {
    gameData.isEventActive = true;

    let level = getLevel(id);
    let dungeonWindow = document.querySelector(".dungeon-box");
    dungeonWindow.classList.remove("hidden");

    let dungeonDescription = dungeonWindow.querySelector(".dungeon-description");

    markLocationSeen({id: level.id, name: level.name, type: level.type});

    let yesBtn = dungeonWindow.querySelector(".dungeon-door-button-yes");
    let noBtn = dungeonWindow.querySelector(".dungeon-door-button-no");
    let fightGuardianBtn = dungeonWindow.querySelector(".fight-guardian");
    let unlockBtn = dungeonWindow.querySelector(".unlock-button");
    let bashBtn = dungeonWindow.querySelector(".bash-button");

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
        fightGuardianBtn.classList.remove("hidden");
        yesBtn.classList.add("hidden");

        fightGuardianBtn.onclick = () => {
            initCombat(level.isGuarded.id, level.isGuarded.enemyType);
        };

        document.addEventListener("combatEnded", () => {
            isGuardianDefeated = gameData.eventOutcomes.find(e => e.event === level.isGuarded.id);
            if (isGuardianDefeated) {
                dungeonDescription.textContent = "You found a " + level.type + " called " + level.name + ". You have defeated its guardian." +
                    " Do you wish to enter?"
                fightGuardianBtn.classList.add("hidden");
                yesBtn.classList.remove("hidden");
            }
        });
    }

    if (level.isLocked) {
        dungeonDescription.textContent = "You found a " + level.type + " called " + level.name + ". It's locked." +
            " The lock level is " + level.isLocked;
        unlockBtn.classList.remove("hidden");
        bashBtn.classList.remove("hidden");
        yesBtn.classList.add("hidden");

        unlockBtn.onclick = () => {
            let isUnlocked = pickLock(gameData.playerCharacteristics.agility, level.isLocked);
            if (isUnlocked) {
                level.isLocked = "";
                yesBtn.classList.remove("hidden");

                unlockBtn.classList.add("hidden");
                bashBtn.classList.add("hidden");
                adventureLogHandler.appendSystemMessage("You successfully unlocked the door.");
                dungeonDescription.textContent = "You found a " + level.type + " called " + level.name + ". It's unlocked.";
            } else {
                adventureLogHandler.appendSystemMessage("You failed to unlock the door.");
            }
        }

        bashBtn.onclick = () => {
            let isBashed = bashDoor(gameData.playerCharacteristics.might, level.isLocked);
            if (isBashed) {
                level.isLocked = "";
                yesBtn.classList.remove("hidden");

                unlockBtn.classList.add("hidden");
                bashBtn.classList.add("hidden");
                adventureLogHandler.appendSystemMessage("You bashed the door with all your might.");
                dungeonDescription.textContent = "You found a " + level.type + " called " + level.name + ". The door is destroyed.";
            } else {
                adventureLogHandler.appendSystemMessage("You are too weak to bash this door.");
            }
        }
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

function pickLock(agility, lock) {
    return (agility + Math.floor(Math.random() * agility)) > lock;
}

function bashDoor(might, lock) {
    return (might + Math.floor(Math.random() * might)) > lock;
}