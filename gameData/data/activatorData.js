import {
    emptyScript,
    firstKingdomSiteGraveAndChestActivator
} from "./activatorScripts.js";
import { revealSection } from "../dynamicSectionHandler.js";

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
            "scriptActivate": () => revealSection("mainHalls"),
            "scriptDeactivate": () => emptyScript()
        },
        {
            "id": "first-kingdom-site-grave-and-activator",
            "type": "permanent",
            "isActive": false,
            "detected": false,
            "activate": 3,
            "requirements": 3,
            "activatedMessage": "A mold undead rises from its grave!",
            "deactivatedMessage": "",
            "description": "An old lever seems a bit stuck. Do you wish to pull it?",
            "scriptActivate": () => firstKingdomSiteGraveAndChestActivator(),
            "scriptDeactivate": () => emptyScript()
        },
        {
            "id": "first-kingdom-site-portal-activator-1",
            "type": "permanent",
            "isActive": false,
            "detected": false,
            "activate": 5,
            "requirements": 0,
            "activatedMessage": "You power a chlorophius cellium",
            "deactivatedMessage": "",
            "description": "You see an old switcher with old roots going straight to chlorophius cellia.",
            "scriptActivate": () => emptyScript(),
            "scriptDeactivate": () => emptyScript()
        },
        {
            "id": "first-kingdom-site-portal-activator-2",
            "type": "permanent",
            "isActive": false,
            "detected": false,
            "activate": 5,
            "requirements": 0,
            "activatedMessage": "You power a chlorophius cellium",
            "deactivatedMessage": "",
            "description": "You see an old switcher with old roots going straight to chlorophius cellia.",
            "scriptActivate": () => emptyScript(),
            "scriptDeactivate": () => emptyScript()
        },
        {
            "id": "first-kingdom-site-portal-activator-3",
            "type": "permanent",
            "isActive": false,
            "detected": false,
            "activate": 5,
            "requirements": 0,
            "activatedMessage": "You power a chlorophius cellium",
            "deactivatedMessage": "",
            "description": "You see an old switcher with old roots going straight to chlorophius cellia.",
            "scriptActivate": () => emptyScript(),
            "scriptDeactivate": () => emptyScript()
        },
    ]
}