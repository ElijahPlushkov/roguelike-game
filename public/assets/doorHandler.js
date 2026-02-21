import {gameData, eventDescription, eventOptions, doorData, levelData} from "./gameData.js";
import {appendContinueButton, endEvent, appendRejectionMessage, hasSeenEvent, markEventSeen} from "./helperFunctions.js";
import {ChangeStats} from "./ChangeStats.js";

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

        //check if the player can enter the door
        if (door) {
            for (const [charKey, requiredValue] of Object.entries(door.requirements)) {
                //if not, the rejection appears and the tiletype sets to unwalkable
                if ((gameData.playerCharacteristics[charKey] || 0) < requiredValue) {
                    doorTile.type = "unwalkable";
                    appendRejectionMessage(door);
                    return false;
                }
            }
        }
        if (!hasSeenEvent(doorId)) {
            eventDescription.className = "event-text-color";
            eventDescription.textContent = door.description;
            gameData.isEventActive = true;
            let continueButton = appendContinueButton();
            eventOptions.prepend(continueButton);
            continueButton.addEventListener("click", function () {
                endEvent(doorId, "completed", eventDescription, eventOptions);
                const reward = door.reward;
                // registerEventOutcome(reward);
                let statChanger = new ChangeStats();
                statChanger.changeStats(reward);
                markEventSeen(doorId);
                gameData.isEventActive = false;
            });
        }
        return true;
    }
}