import { dialogueData as spiderEncounter1 } from "./spider-encounter-1.js";
import { dialogueData as dyingAnt } from "./spider-lair-dying-ant.js";
import { dialogueData as antColAgimSa } from "./ant-col-agim-sa-dialogue.js";

const dialogueRegistry = {
    "spider-encounter-1": spiderEncounter1,
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