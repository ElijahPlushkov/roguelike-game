import { revealSection } from "../dynamicSectionHandler.js";

export const specialEventData = {
    "id": "special-events",
    "specialEvents": [
        {
            "id": "reveal-abandoned-hall",
            "hasOccurred": false,
            "script": () => revealSection("abandonedHalls")
        }
    ]
}