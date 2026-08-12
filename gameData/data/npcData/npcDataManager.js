import { npcData as antColAgimSa } from './ant-col-agim-sa.js';
import { npcData as heildinWiseSpider } from './heildin-wise-spider.js';
import { npcData as jaemahRosebornLadybug } from './jaemah-roseborn-ladybug.js';
import { npcData as ahRuhnAntShaman } from "./ah-ruhn-ant-shaman.js";
import { npcData as antColAsaLa } from "./ant-col-asa-la.js";
import { npcData as agraWarchief} from "./agra-warchief.js";

const npcRegistry = {
    "ant-col-agim-sa": antColAgimSa,
    "heildin-wise-spider": heildinWiseSpider,
    "jaemah-roseborn-ladybug": jaemahRosebornLadybug,
    "ah-ruhn-ant-shaman": ahRuhnAntShaman,
    "ant-col-asa-la": antColAsaLa,
    "agra-warchief": agraWarchief

}
export function getNpc(id) {
    const npc = npcRegistry[id];
    if (!npc) {
        console.error(`Event "${id}" not found`);
        return null;
    }
    return npc;
}