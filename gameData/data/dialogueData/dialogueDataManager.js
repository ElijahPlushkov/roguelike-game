import { dialogueData as heildinWiseEncounter1 } from "./heildin-wise-encounter-1.js";
import { dialogueData as dyingAnt } from "./spider-lair-dying-ant.js";
import { dialogueData as antColAgimSa } from "./ant-col-agim-sa-dialogue.js";

const dialogueRegistry = {
    "heildin-wise-encounter-1": heildinWiseEncounter1,
    "spider-lair-dying-ant": dyingAnt,
    "ant-col-agim-sa-dialogue": antColAgimSa
}

export function getDialogue(id) {
    const dialogue = dialogueRegistry[id];
    if (!dialogue) {
        console.error(`Dialogue "${id}" not found`);
        return null;
    }
    return dialogue;
}