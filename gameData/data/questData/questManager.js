import { questData as newOldHome } from "./new-old-home.js";
import { questData as strikeBack } from './strike-back.js';
import { questData as antsAndQueens } from './ants-and-queens.js';
import { questData as spiderThreats } from "./spider-threats.js"

const questRegistry = {
    "new-old-home": newOldHome,
    "strike-back": strikeBack,
    "ants-and-queens": antsAndQueens,
    "spider-threats": spiderThreats
}
export function getQuest(id) {
    const quest = questRegistry[id];
    if (!quest) {
        console.error(`Quest "${id}" not found`);
        return null;
    }
    return quest;
}