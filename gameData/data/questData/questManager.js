import { questData as strikeBack } from './strike-back.js';
import { questData as antsAndQueens } from './ants-and-queens.js';
import { questData as spiderThreats } from "./spider-threats.js"

const questRegistry = {
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