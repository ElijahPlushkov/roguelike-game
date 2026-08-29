import { firstKingdomSiteBridgeActivate, firstKingdomSiteBridgeDeactivate } from "./activatorScripts.js";

export const activatorData = {
    "id": "activators",
    "activators": [
        {
            "id": "first-kingdom-site-bridge-activator",
            "type": "toggleable",
            "isActive": false,
            "activatedMessage": "The bridge rises from the water.",
            "deactivatedMessage": "The bridge sinks back underwater.",
            "description": "This is an old stone button. Do you wish to press it?",
            "scriptActivate": () => firstKingdomSiteBridgeActivate(),
            "scriptDeactivate": () => firstKingdomSiteBridgeDeactivate()
        }
    ]
}