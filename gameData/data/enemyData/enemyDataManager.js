import { enemyData as mosquitoScoutSpiderGang } from "./mosquito-scout-spider-gang.js";
import { enemyData as mosquitoGuardSpiderGang1 } from "./mosquito-guard-spider-gang-1.js";
import { enemyData as mosquitoGuardSpiderGang2 } from "./mosquito-guard-spider-gang-2.js";
import { enemyData as mosquitoChiefSpiderGang } from "./mosquito-chief-spider-gang.js"

const enemyRegistry = {
    "mosquito-scout-spider-gang": mosquitoScoutSpiderGang,
    "mosquito-guard-spider-gang-1": mosquitoGuardSpiderGang1,
    "mosquito-guard-spider-gang-2": mosquitoGuardSpiderGang2,
    "mosquito-chief-spider-gang": mosquitoChiefSpiderGang
}

export function getEnemy(id) {
    const enemy = enemyRegistry[id];
    if (!enemy) {
        console.error(`Enemy "${id}" not found`);
        return null;
    }
    return enemy;
}