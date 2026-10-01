import { eventData as spiderLairTunnel } from "./spider-lair-tunnel.js";
import { eventData as spiderLairDesc} from "./spider-lair-desc.js";
import { eventData as spiderLairPreyAnt } from "./spider-lair-prey-ant.js"
import { eventData as spiderLairPreyFly } from "./spider-lair-prey-fly.js";
import { eventData as firstKingdomSiteSwitcherRoom } from "./first-kingdom-site-switcher-room.js";
import { eventData as firstKingdomSiteMosaic } from "./first-kingdom-site-mosaic.js";

const eventRegistry = {
    "spider-lair-tunnel": spiderLairTunnel,
    "spider-lair-desc": spiderLairDesc,
    "spider-lair-prey-ant": spiderLairPreyAnt,
    "spider-lair-prey-fly": spiderLairPreyFly,
    "first-kingdom-site-switcher-room": firstKingdomSiteSwitcherRoom,
    "first-kingdom-site-mosaic": firstKingdomSiteMosaic
}

export function getEvent(id) {
    const event = eventRegistry[id];
    if (!event) {
        console.error(`Event "${id}" not found`);
        return null;
    }
    return event;
}