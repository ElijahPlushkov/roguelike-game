import { doorData } from "./data/doorData.js";
import { gameData, levelData } from "./data/gameData.js";
import { endEvent, hasSeenEvent, markEventSeen } from "./helperFunctions.js";
import { ChangeStats } from "./ChangeStats.js";
import { AdventureLogHandler } from "./AdventureLogHandler.js";
import { canBashDoor, canPickLock } from "./locationHandler.js";

const doorWindow = document.querySelector(".door-box");
const doorDescription = document.querySelector(".door-description");
const doorOptions = document.querySelector(".door-options");

const adventureLogHandler = new AdventureLogHandler();

export function accessDoor(x, y) {
    const doors = [...(levelData.tileData.doors) || []];

    const doorTile = doors.find(doorTile => doorTile.x === x && doorTile.y === y);

    const doorId = doorTile.id;

    let status;

    if (!hasSeenEvent(doorId)) {
        const unlockButton = createActionButton("unlock");
        const bashButton = createActionButton("bash");

        const door = doorData.doors.find(door => door.id === doorId);

        doorWindow.classList.remove("hidden");
        doorDescription.className = "event-text-color";
        if (door.isLocked) {
            doorDescription.textContent = door.description + " It is locked.";
        } else {
            doorDescription.textContent = door.description;
        }

        gameData.isEventActive = true;

        //check if the player can enter the door
        if (door.isLocked) {
            unlockButton.classList.remove("hidden");
            bashButton.classList.remove("hidden");

            unlockButton.onclick = () => {
                let isUnlocked = canPickLock(gameData.playerCharacteristics.agility, door.isLocked);
                if (isUnlocked) {
                    door.isLocked = "";
                    status = "unlocked";
                    unlockButton.classList.add("hidden");
                    bashButton.classList.add("hidden");
                    adventureLogHandler.appendSuccessfulMessage("You successfully unlocked the door.");

                    resolveDoorEncounter(door, doorId, status, doorDescription, doorOptions, doorWindow);
                } else {
                    adventureLogHandler.appendFailMessage("You failed to unlock the door.");
                    doorTile.type = "unwalkable";
                    return false;
                }
            }

            bashButton.onclick = () => {
                let isBashed = canBashDoor(gameData.playerCharacteristics.might, door.isLocked);
                if (isBashed) {
                    door.isLocked = "";
                    status = "bashed";
                    unlockButton.classList.add("hidden");
                    bashButton.classList.add("hidden");
                    adventureLogHandler.appendSuccessfulMessage("You bashed the door with all your might.");

                    resolveDoorEncounter(door, doorId, status, doorDescription, doorOptions, doorWindow);
                } else {
                    adventureLogHandler.appendFailMessage("You are too weak to bash this door.");
                    doorTile.type = "unwalkable";
                    return false;
                }
            }
        } else {
            resolveDoorEncounter(door, doorId, status, doorDescription, doorOptions, doorWindow);
        }
    } else {
        return true;
    }
}

function resolveDoorEncounter(door, doorId, status, doorDescription, doorOptions, doorWindow) {
    endEvent(doorId, status, doorDescription, doorOptions, doorWindow);
    const reward = door.reward;
    let statChanger = new ChangeStats();
    statChanger.changeStats(reward);
    markEventSeen(doorId);
    gameData.isEventActive = false;
}

function createActionButton(type) {
    const button = document.createElement("button");
    button.classList.add("door-button", "hidden", `${type}-button`);
    if (type === "unlock") {
        button.textContent = "Unlock";
    } else {
        button.textContent = "Bash";
    }
    doorOptions.prepend(button);
    return button;
}