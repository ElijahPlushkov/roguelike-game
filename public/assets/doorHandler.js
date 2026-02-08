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

    if (doorTile.slug) {
        const doorSlug = doorTile.slug;

        const door = doorData.doors.find(door => door.slug === doorSlug);

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
        if (!hasSeenEvent(doorSlug)) {
            eventDescription.className = "event-text-color";
            eventDescription.textContent = door.description;
            gameData.isEventActive = true;
            let continueButton = appendContinueButton();
            eventOptions.prepend(continueButton);
            continueButton.addEventListener("click", function () {
                endEvent(doorSlug, "completed", eventDescription, eventOptions);
                const reward = door.reward;
                // registerEventOutcome(reward);
                let statChanger = new ChangeStats();
                statChanger.changeStats(reward);
                markEventSeen(doorSlug);
                gameData.isEventActive = false;
            });
        }
        return true;
    }
}