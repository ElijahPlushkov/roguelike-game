import {
    emptyScript,
    firstKingdomSiteBridgeActivate,
    firstKingdomSiteBridgeDeactivate,
    firstKingdomSiteWallRemover
} from "./activatorScripts.js";

export const activatorData = {
    "id": "activators",
    "activators": [
        {
            "id": "first-kingdom-site-broken-bridge-activator",
            "type": "toggleable",
            "isActive": false,
            "detected": true,
            "activate": 0,
            "requirements": 0,
            "activatedMessage": "Nothing changes.",
            "deactivatedMessage": "Nothing changes.",
            "description": "This bridge activator seems to be broken.",
            "scriptActivate": () => emptyScript(),
            "scriptDeactivate": () => emptyScript()
        },
        {
            "id": "first-kingdom-site-door-activator",
            "type": "permanent",
            "isActive": false,
            "detected": true,
            "activate": 0,
            "requirements": 0,
            "activatedMessage": "The door is open.",
            "deactivatedMessage": "You cannot deactivate it.",
            "description": "You see an old pressing plate. Do you wish to step on it?",
            "scriptActivate": () => emptyScript(),
            "scriptDeactivate": () => emptyScript()
        },
        {
            "id": "first-kingdom-site-wall-remover",
            "type": "temporary",
            "isActive": false,
            "detected": false,
            "activate": 1000,
            "requirements": 0,
            "activatedMessage": "The wall slides down.",
            "deactivatedMessage": "The wall goes up.",
            "description": "An old lever seems a bit stuck. Do you wish to pull it?",
            "scriptActivate": () => firstKingdomSiteWallRemover(),
            "scriptDeactivate": () => emptyScript()
        }
    ]
}