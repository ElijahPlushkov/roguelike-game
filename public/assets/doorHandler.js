import {doorData, levelData} from "./dataLoaders.js";
import {adventureLog, gameData} from "./gameData.js";
import {registerEventOutcome} from "./eventHandler.js";
import { appendContinueButton } from "./helperFunctions.js";
import {hasSeenEvent, markEventSeen} from "./helperFunctions.js";

export function accessDoor(x, y) {
    const doors = [...(levelData.layers.doors) || []];

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
                    const rejection = document.createElement("div");
                    rejection.textContent = door.rejection || "You are not worthy to enter";
                    adventureLog.prepend(rejection);
                    return false;
                }
            }
        }
        if (!hasSeenEvent(doorSlug)) {
            const newEvent = document.createElement("div");
            const eventType = newEvent;
            newEvent.className = "adventure-log__new-event";
            newEvent.textContent = door.description;
            adventureLog.prepend(newEvent);

            const reward = door.reward;
            registerEventOutcome(reward);

            appendContinueButton(eventType);
            markEventSeen(doorSlug);
        }
        return true;
    }
}