import { revealSection } from "../dynamicSectionHandler.js";
import {
    firstKingdomHunterEncounter,
    firstKingdomSiteCindelGuattaRescued,
    firstKingdomSitePriestSlain,
    isAntColonyInfected
} from "./specialEventScripts.js";

export const specialEventData = {
    "id": "special-events",
    "specialEvents": [
        {
            "id": "reveal-abandoned-hall",
            "hasOccurred": false,
            "script": () => revealSection("abandonedHalls")
        },
        {
            "id": "ant-colony-outcome",
            "hasOccurred": false,
            "script": () => isAntColonyInfected()
        },
        {
            "id": "first-kingdom-fort-hunter-encounter",
            "hasOccurred": false,
            "script": () => firstKingdomHunterEncounter()
        },
        {
            "id": "firstKingdomSiteCindelGuattaRescued",
            "hasOccurred": false,
            "script": () => firstKingdomSiteCindelGuattaRescued()
        },
        {
            "id": "first-kingdom-site-mold-undead-priest",
            "hasOccurred": false,
            "script": () => firstKingdomSitePriestSlain()
        }
    ]
}