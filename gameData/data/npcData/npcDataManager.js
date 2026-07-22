import { npcData as antColAgimSa } from './ant-col-agim-sa.js';
import { npcData as heildinWiseSpider } from './heildin-wise-spider.js';

const npcRegistry = {
    "ant-col-agim-sa": antColAgimSa,
    "heildin-wise-spider": heildinWiseSpider

}
export function getNpc(id) {
    const npc = npcRegistry[id];
    if (!npc) {
        console.error(`Event "${id}" not found`);
        return null;
    }
    return npc;
}