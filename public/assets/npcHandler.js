import {npcData} from "./dataLoaders.js";
import {eventDescription, eventOptions} from "./gameData.js";
import {initDialogue} from "./dialogueHandler.js";

function initNpc(name) {

    let npc = npcData.npcs.find(npc => npc.name === name)

    eventDescription.textContent = npc.description;
    eventDescription.className = "event-text-color";

    eventOptions.innerHTML = '';

    npc.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option.label;
        button.className = 'option-button';
        eventOptions.appendChild(button);

        button.addEventListener("click", () => {
            if (button.textContent === "Talk.") {
                let npcDialogue = npc.boundDialogues;
                initDialogue(npcDialogue);
            }
            if (button.textContent === "Fight.") {
                // to be continued
            }
        })
    })
}