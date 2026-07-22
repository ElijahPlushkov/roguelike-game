import { eventData as spiderLairTunnel } from "./spider-lair-tunnel.js";
import { eventData as spiderLairDesc} from "./spider-lair-desc.js";
import { eventData as spiderLairPreyAnt } from "./spider-lair-prey-ant.js"
import { eventData as spiderLairPreyFly } from "./spider-lair-prey-fly.js";

const eventRegistry = {
    "spider-lair-tunnel": spiderLairTunnel,
    "spider-lair-desc": spiderLairDesc,
    "spider-lair-prey-ant": spiderLairPreyAnt,
    "spider-lair-prey-fly": spiderLairPreyFly
}

export function getEvent(id) {
    const event = eventRegistry[id];
    if (!event) {
        console.error(`Event "${id}" not found`);
        return null;
    }
    return event;
}