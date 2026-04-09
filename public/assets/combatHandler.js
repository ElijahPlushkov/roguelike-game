import {
    enemyData,
    npcData,
    player
} from "./gameData.js";
import {RandomEnemyFactory} from "./RandomEnemyFactory.js";
import {NpcFactory} from "./NpcFactory.js";
import {Combat} from "./Combat.js";
import {UniqueEnemyFactory} from "./UniqueEnemyFactory.js";

export function initCombat(enemyId, enemyType) {
    let enemy;

    if (enemyType === "unique") {
        enemy = enemyData.enemies.find(enemy => enemy.id === enemyId);
        let uniqueEnemyFactory = new UniqueEnemyFactory();
        enemy = uniqueEnemyFactory.createUniqueEnemy(enemy);
        console.log(enemy);
    } else if (enemyType.includes("random")) {
        let enemyFactory = new RandomEnemyFactory();
        enemy = enemyFactory.createRandomEnemy(enemyType);
        console.log(enemy);
    } else if (enemyType === "npc") {
        let npcFactory = new NpcFactory();
        let npc = npcData.npcs.find(npc => npc.id === enemyId);
        enemy = npcFactory.createNpcEnemy(npc);
        console.log(enemy);
    }

    // start a new combat
    let newCombat = new Combat(enemy, player, enemyId);
    newCombat.startCombat();
}
