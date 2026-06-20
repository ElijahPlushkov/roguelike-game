import { doorData } from "./data/doorData.js";
import { gameData, eventDescription, eventOptions, levelData, eventBox } from "./data/gameData.js";
import { appendContinueButton, endEvent, hasSeenEvent, markEventSeen } from "./helperFunctions.js";
import { ChangeStats } from "./ChangeStats.js";
import { AdventureLogHandler } from "./AdventureLogHandler.js";
import { canBashDoor, canPickLock } from "./locationHandler.js";

const adventureLogHandler = new AdventureLogHandler();
const unlockButton = eventOptions.querySelector(".unlock-button");
const bashButton = eventOptions.querySelector(".bash-button");

export function accessDoor(x, y) {
    const doors = [...(levelData.tileData.doors) || []];

    const doorTile = doors.find(doorTile => doorTile.x === x && doorTile.y === y);

    console.log(doorTile);

    if (!doorTile) {
        return true;
    }

    if (doorTile.id) {
        const doorId = doorTile.id;

        const door = doorData.doors.find(door => door.id === doorId);

        let status = "completed";

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
                    adventureLogHandler.appendSystemMessage("You successfully unlocked the door.");
                } else {
                    adventureLogHandler.appendSystemMessage("You failed to unlock the door.");
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
                    adventureLogHandler.appendSystemMessage("You bashed the door with all your might.");
                } else {
                    adventureLogHandler.appendSystemMessage("You are too weak to bash this door.");
                    doorTile.type = "unwalkable";
                    return false;
                }
            }
        }

        if (!hasSeenEvent(doorId)) {
            eventBox.classList.toggle("hidden");
            eventDescription.className = "event-text-color";
            eventDescription.textContent = door.description;
            gameData.isEventActive = true;
            let continueButton = appendContinueButton();
            eventOptions.prepend(continueButton);
            continueButton.addEventListener("click", function () {
                endEvent(doorId, status, eventDescription, eventOptions);
                const reward = door.reward;
                let statChanger = new ChangeStats();
                statChanger.changeStats(reward);
                markEventSeen(doorId);
                gameData.isEventActive = false;
            });
        }
        return true;
    }
}