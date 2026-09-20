import {revealSection} from "../dynamicSectionHandler.js";

export const teleportData = {
    "id": "teleports",
    "teleports": [
        {
            "id": "first-kingdom-site-teleport-1",
            "isPowered": true,
            "charges": 2,
            "endPointCoordinates": {
                "x": 33,
                "y": 12
            },
            "script": () => revealSection("oldRoom")
        },
        {
            "id": "first-kingdom-site-teleport-2",
            "isPowered": true,
            "charges": 2,
            "endPointCoordinates": {
                "x": 33,
                "y": 8
            }
        },
        {
            "id": "first-kingdom-site-teleport-3",
            "isPowered": false,
            "charges": 1,
            "endPointCoordinates": {
                "x": 15,
                "y": 7
            }
        },
        {
            "id": "first-kingdom-site-teleport-4",
            "isPowered": false,
            "charges": 0,
            "endPointCoordinates": {
                "x": 15,
                "y": 15
            }
        },
        {
            "id": "first-kingdom-site-teleport-5",
            "isPowered": true,
            "charges": 1,
            "endPointCoordinates": {
                "x": 22,
                "y": 8
            }
        },
        {
            "id": "first-kingdom-site-teleport-6",
            "isPowered": false,
            "charges": 0,
            "endPointCoordinates": {
                "x": 15,
                "y": 1
            }
        }
    ]
}