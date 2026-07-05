import {dialogueData as spiderEncounter1} from "./spider-encounter-1.js";

const dialogueRegistry = {
    "spider-encounter-1": spiderEncounter1
}

export function getDialogue(id) {
    const dialogue = dialogueRegistry[id];
    if (!dialogue) {
        console.error(`Dialogue "${id}" not found`);
        return null;
    }
    return dialogue;
}