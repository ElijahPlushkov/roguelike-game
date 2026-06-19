import { eventData as spiderTunnel } from "./eventData/spider-tunnel.js";

const eventRegistry = {
    "spider-tunnel": spiderTunnel
}

export function getEvent(id) {
    const event = eventRegistry[id];
    if (!event) {
        console.error(`Event "${id}" not found`);
        return null;
    }
    return event;
}