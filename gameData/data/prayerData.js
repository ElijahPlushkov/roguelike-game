import {acidArrow, divinaIntervention, modusDomini} from "./prayerEffects.js";

export const prayerData = {
    "id": "prayers",
    "prayers": [
        {
            "id": "modus-domini",
            "name": "Modus Domini",
            "requirement": 1, // prayer
            "effect": () => modusDomini(),
            "cost": 20000000, // mysticism
            "isCombat": false,
            "school": ""
        },
        {
            "id": "divina-intervention",
            "name": "Divine Intervention",
            "requirement": 1, // prayer
            "effect": () => divinaIntervention(),
            "cost": 1, // mysticism
            "isCombat": false,
            "school": ""
        },
        {
            "id": "acid-arrow",
            "name": "Acid Arrow",
            "requirement": 1, // prayer
            "effect": {
                "damage": 10,
                "type": "acid"
            },
            "cost": 5, // mysticism
            "isCombat": true,
            "school": ""
        }
    ]
}