import { dialogueData as heildinWiseEncounter1 } from "./heildin-wise-encounter-1.js";
import { dialogueData as dyingAnt } from "./spider-lair-dying-ant.js";
import { dialogueData as antColAgimSa } from "./ant-col-agim-sa-dialogue.js";
import { dialogueData as jaemahRosebornDialogue } from "./jaemah-roseborn-dialogue.js";
import { dialogueData as ahRuhnAntShamanDialogue } from "./ah-ruhn-ant-shaman-dialogue.js";
import { dialogueData as antColAncientMoss } from "./ant-col-ancient-moss.js";
import { dialogueData as antColAsaLaDialogue } from "./ant-col-asa-la-dialogue.js";
import { dialogueData as agraWarchiefDialogue } from "./agra-warchief-dialogue.js";
import { dialogueData as muaRanuAntQueenDialogue} from "./mua-ranu-ant-queen-dialogue.js";

const dialogueRegistry = {
    "heildin-wise-encounter-1": heildinWiseEncounter1,
    "spider-lair-dying-ant": dyingAnt,
    //ant-colony
    "ant-col-agim-sa-dialogue": antColAgimSa,
    "jaemah-roseborn-dialogue": jaemahRosebornDialogue,
    "ah-ruhn-ant-shaman-dialogue": ahRuhnAntShamanDialogue,
    "ant-col-ancient-moss": antColAncientMoss,
    "ant-col-asa-la-dialogue": antColAsaLaDialogue,
    "agra-warchief-dialogue": agraWarchiefDialogue,
    "mua-ranu-ant-queen-dialogue": muaRanuAntQueenDialogue
}

export function getDialogue(id) {
    const dialogue = dialogueRegistry[id];
    if (!dialogue) {
        console.error(`Dialogue "${id}" not found`);
        return null;
    }
    return dialogue;
}