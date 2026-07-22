import { npcData } from "./data/npcData.js";
import { eventDescription, eventOptions, gameData } from "./data/gameData.js";
import { initDialogue } from "./dialogueHandler.js";
import { initCombat } from "./combatHandler.js";
import { getNpc } from "./data/npcData/npcDataManager.js";

export function initNpc(id) {

    let npc = getNpc(id);

    if (!hasMetNpc(npc)) {
        gameData.npcs.push({id: npc.id, isAlive: npc.isAlive});
    }

    if (!isNpcAlive(npc.id)) {
        gameData.isEventActive = false;
        return;
    }

    console.log(gameData.npcs);

    eventDescription.textContent = npc.characterDescription;
    eventDescription.className = "event-text-color";

    eventOptions.innerHTML = '';

    npc.interactionOptions.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option.label;
        button.className = 'option-button';
        eventOptions.appendChild(button);

        button.addEventListener("click", () => {
            if (button.textContent === "Talk.") {
                let npcDialogue = npc.dialogue;
                initDialogue(npcDialogue);
            }
            if (button.textContent === "Fight.") {
                initCombat(npc.id, "npc");
            }
        })
    })
}

function hasMetNpc(npc) {
    for (let n of gameData.npcs) {
        if (npc.id === n.id) {
            return true;
        }
    }
    return false;
}

function isNpcAlive(npcId) {
    let n = gameData.npcs.find(npc => npc.id === npcId);
    if (n) {
        return n.isAlive;
    }
}

export function registerNpcDeath(npcId) {
    let deadNpc = gameData.npcs.find(npc => npc.id === npcId);
    deadNpc.isAlive = false;
}
