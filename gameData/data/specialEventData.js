import { revealSection } from "../dynamicSectionHandler.js";
import {
    antColonyAreInfectedAntsDefeated,
    firstKingdomHunterEncounter,
    firstKingdomSiteChlorophiusCelliaSwitchers,
    firstKingdomSiteCindelGuattaRescued,
    firstKingdomSitePriestSlain,
    isAntColonyInfected
} from "./specialEventScripts.js";

export const specialEventData = {
    "id": "special-events",
    "specialEvents": [
        {
          "id": "antColonyAreInfectedAntsDefeated",
          "hasOccurred": false,
          "script": () => antColonyAreInfectedAntsDefeated()
        },
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
            "id": "firstKingdomSiteChlorophiusCelliaSwitchers",
            "hasOccurred": false,
            "script": () => firstKingdomSiteChlorophiusCelliaSwitchers()
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

export const collectionQuests = ["antColonyAreInfectedAntsDefeated", "firstKingdomSiteChlorophiusCelliaSwitchers"];