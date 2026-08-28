import { gameData, parseLevelData, dungeonWindow } from "./data/gameData.js";
import { getLocation } from "./data/levels/locationsData.js";
import { hasDiscoveredLocation, markLocationSeen } from "./helperFunctions.js";
import { initCombat } from "./combatHandler.js";
import { AdventureLogHandler } from "./AdventureLogHandler.js";

let locationName = document.querySelector(".location-name");

let adventureLogHandler = new AdventureLogHandler();

let dungeonDescription = dungeonWindow.querySelector(".dungeon-description");

let yesBtn = dungeonWindow.querySelector(".dungeon-door-button-yes");
let noBtn = dungeonWindow.querySelector(".dungeon-door-button-no");
let fightGuardianBtn = dungeonWindow.querySelector(".fight-guardian");
let unlockBtn = dungeonWindow.querySelector(".unlock-button");
let bashBtn = dungeonWindow.querySelector(".bash-button");

export function handleDungeonAccess(id, locationCoordinates) {
    gameData.isEventActive = true;
    dungeonWindow.classList.remove("hidden");
    let location = getLocation(id);

    let hasDiscovered = hasDiscoveredLocation(location.id);

    if (!hasDiscovered) {
        adventureLogHandler.appendLocationDiscoveryMessage(location.name);
    } else {
        adventureLogHandler.appendLocationVisitingMessage(location.name);
    }

    markLocationSeen({id: location.id, name: location.name, type: location.type, locationCoordinates: locationCoordinates});

    yesBtn.onclick = () => {
        gameData.isEventActive = false;
        dungeonWindow.classList.add("hidden");
        loadDungeon(id);
        locationName.textContent = location.name;
    };

    noBtn.onclick = () => {
        gameData.isEventActive = false;
        dungeonWindow.classList.add("hidden");
    };

    let isGuardianDefeated = gameData.eventOutcomes.find(e => e.event === location.isGuarded.id);

    if (location.isGuarded && !isGuardianDefeated && location.isLocked) {
        handleGuardian(isGuardianDefeated, location);
    } else if (location.isGuarded && !isGuardianDefeated) {
        handleGuardian(isGuardianDefeated, location);
    } else if (location.isLocked) {
        handleLock(location);
    } else {
        if (hasDiscovered) {
            dungeonDescription.textContent = "Do you wish to enter " + location.name + "?";
        } else {
            dungeonDescription.textContent = "You found a " + location.type + " called " + location.name + ". Do you wish to enter?";
        }
    }
}

export function loadDungeon(id) {
    parseLevelData(id);
}

export function exitDungeon(id, spawnPosition) {
    locationName.textContent = "Chyceen Borderlands";
    parseLevelData(id, spawnPosition);
}

export function canPickLock(agility, lock) {
    return (agility + Math.floor(Math.random() * agility)) > lock;
}

export function canBashDoor(might, lock) {
    return (might + Math.floor(Math.random() * might)) > lock;
}

function handleGuardian(isGuardianDefeated, location) {
    dungeonDescription.textContent = "You found a " + location.type + " called " + location.name + ". It has a guardian." +
        " Do you wish to fight them?";
    fightGuardianBtn.classList.remove("hidden");
    yesBtn.classList.add("hidden");

    fightGuardianBtn.onclick = () => {
        initCombat(location.isGuarded.id, location.isGuarded.enemyType);
    };

    document.addEventListener("combatEnded", () => {
        isGuardianDefeated = gameData.eventOutcomes.find(e => e.event === location.isGuarded.id);
        if (isGuardianDefeated) {
            fightGuardianBtn.classList.add("hidden");
            if (location.isLocked) {
                dungeonDescription.textContent = "You found a " + location.type + " called " + location.name + ". You have defeated its guardian." +
                    " The door is locked." + " The lock level is " + location.isLocked;
                handleLock(location);
            } else {
                yesBtn.classList.remove("hidden");
            }
        }
    });
}

function handleLock(location) {
    unlockBtn.classList.remove("hidden");
    bashBtn.classList.remove("hidden");
    yesBtn.classList.add("hidden");

    unlockBtn.onclick = () => {
        let isUnlocked = canPickLock(gameData.playerCharacteristics.agility, location.isLocked);
        if (isUnlocked) {
            location.isLocked = "";
            yesBtn.classList.remove("hidden");

            unlockBtn.classList.add("hidden");
            bashBtn.classList.add("hidden");
            adventureLogHandler.appendSuccessfulMessage("You successfully unlocked the door.");
            dungeonDescription.textContent = "You found a " + location.type + " called " + location.name + ". It's unlocked. Do you wish to enter?";
        } else {
            adventureLogHandler.appendFailMessage("You failed to unlock the door.");
        }
    }

    bashBtn.onclick = () => {
        let isBashed = canBashDoor(gameData.playerCharacteristics.might, location.isLocked);
        if (isBashed) {
            location.isLocked = "";
            yesBtn.classList.remove("hidden");

            unlockBtn.classList.add("hidden");
            bashBtn.classList.add("hidden");
            adventureLogHandler.appendSuccessfulMessage("You bashed the door with all your might.");
            dungeonDescription.textContent = "You found a " + location.type + " called " + location.name + ". The door is destroyed. Do you wish to enter?";
        } else {
            adventureLogHandler.appendFailMessage("You are too weak to bash this door.");
        }
    }
}