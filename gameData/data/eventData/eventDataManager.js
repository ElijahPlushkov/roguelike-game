import { eventData as spiderTunnel } from "./spider-tunnel.js";
import { eventData as spiderLiarDesc} from "./spider-liar-desc.js";
import { eventData as spiderLiarPreyAnt } from "./spider-liar-prey-ant.js"
import { eventData as spiderLiarPreyFly } from "./spider-liar-prey-fly.js";

const eventRegistry = {
    "spider-tunnel": spiderTunnel,
    "spider-lair-desc": spiderLiarDesc,
    "spider-lair-prey-ant": spiderLiarPreyAnt,
    "spider-liar-prey-fly": spiderLiarPreyFly
}

export function getEvent(id) {
    const event = eventRegistry[id];
    if (!event) {
        console.error(`Event "${id}" not found`);
        return null;
    }
    return event;
}