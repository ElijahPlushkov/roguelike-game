import { gameData } from "./data/gameData.js";

const requirements = [
    {id: "ant-col-diseased-ant-1", outcome: true},
    {id: "ant-col-diseased-ant-2", outcome: true},
    {id: "ant-col-diseased-ant-3", outcome: true},
    {id: "ant-col-diseased-ant-4", outcome: true},
    {id: "ant-col-diseased-ant-5", outcome: true},
    {id: "ant-col-diseased-ant-6", outcome: true},
    {id: "ant-col-diseased-ant-7", outcome: true},
    {id: "ant-col-diseased-ant-8", outcome: true}

]

export function questScript() {
    if (gameData.combatOutcomes.length < 8) {
        return;
    }

    const combatOutcomes = gameData.combatOutcomes;

    const strCombatOutcomes = new Set(combatOutcomes.map(combat => JSON.stringify(combat)));

    return requirements.every(combat => strCombatOutcomes.has(JSON.stringify(combat)));
}