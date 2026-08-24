import { gameData } from "./data/gameData.js";
import { initDialogue } from "./dialogueHandler.js";
import { initCombat } from "./combatHandler.js";
import { getNpc } from "./data/npcData/npcDataManager.js";
import { changeTileType } from "./mapHandler.js";

export const npcBox = document.querySelector(".npc-box");

let npcPersonalInfoName = document.querySelector(".npc-personal-info-name");
let npcPersonalInfoRace = document.querySelector(".npc-personal-info-race");
let npcPersonalInfoDisposition = document.querySelector(".npc-personal-info-disposition");
let npcPersonalInfoFaction = document.querySelector(".npc-personal-info-faction");

export const npcDialogueWindowDescription = document.querySelector(".npc-dialogue-window-description");
export const npcDialogueWindowOptions = document.querySelector(".npc-dialogue-window-options");

export function initNpc(id, coordinates) {

    let npc = getNpc(id);

    if (!hasMetNpc(npc)) {
        gameData.npcs.push({id: npc.id, isAlive: npc.isAlive});
    }

    if (!isNpcAlive(npc.id)) {
        gameData.isEventActive = false;
        return;
    }

    console.log(gameData.npcs);

    npcBox.classList.toggle("hidden");

    npcDialogueWindowDescription.textContent = npc.characterDescription;
    npcDialogueWindowDescription.className = "event-text-color";

    npcDialogueWindowOptions.innerHTML = "";

    npcPersonalInfoName.textContent = "NAME: " + npc.name;
    npcPersonalInfoRace.textContent = "RACE: " + npc.race;
    npcPersonalInfoDisposition.textContent = "DISPOSITION: " + npc.disposition + "/100";
    npcPersonalInfoFaction.textContent = "FACTION: " + npc.faction;

    npc.interactionOptions.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option.label;
        button.className = "option-button";
        npcDialogueWindowOptions.appendChild(button);

        button.addEventListener("click", () => {
            if (button.textContent === "Talk.") {
                let npcDialogue = npc.dialogue;
                initDialogue(npcDialogue, null, "npc");
            }
            if (button.textContent === "Fight.") {
                initCombat(npc.id, "npc", coordinates);
            }
        })
    });

    npcDialogueWindowOptions.appendChild(createFarewellButton());
}

function createFarewellButton() {
    const button = document.createElement("button");
    button.textContent = "Farewell.";
    button.className = "option-button";
    button.addEventListener("click", () => {
        gameData.isEventActive = false;
        npcBox.classList.toggle("hidden");
        npcDialogueWindowOptions.innerHTML = "";
    });

    return button;
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
    let npc = getNpc(npcId);
    changeTileType(npc.coordinates.x, npc.coordinates.y, ".");
}
