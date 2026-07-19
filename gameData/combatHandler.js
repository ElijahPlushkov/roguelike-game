import { player } from "./data/gameData.js";
import { RandomEnemyFactory } from "./RandomEnemyFactory.js";
import { NpcEnemyFactory } from "./NpcEnemyFactory.js";
import { Combat } from "./Combat.js";
import { UniqueEnemyFactory } from "./UniqueEnemyFactory.js";
import { npcData } from "./data/npcData.js";
import { getEnemy } from "./data/enemyData/enemyDataManager.js";

export function initCombat(enemyId, enemyType, enemyCoordinates, enemyRace) {
    let enemy;

    if (enemyType === "unique") {
        enemy = getEnemy(enemyId);
        let uniqueEnemyFactory = new UniqueEnemyFactory();
        enemy = uniqueEnemyFactory.createUniqueEnemy(enemy);
        console.log(enemy);
    } else if (enemyType.includes("random")) {
        let enemyFactory = new RandomEnemyFactory();
        enemy = enemyFactory.createRandomEnemy(enemyType, enemyRace);
        console.log(enemy);
    } else if (enemyType === "npc") {
        let npcFactory = new NpcEnemyFactory();
        let npc = npcData.npcs.find(npc => npc.id === enemyId);
        enemy = npcFactory.createNpcEnemy(npc);
        console.log(enemy);
    }

    // start a new combat
    let newCombat = new Combat(enemy, player, enemyId, enemyCoordinates);
    newCombat.startCombat();
}
