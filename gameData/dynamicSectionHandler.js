import { sections } from "./data/gameData.js";
import { mapRender } from "./mapRender.js";
import { hasSpecialRequirements } from "./helperFunctions.js";

export function revealSection(id) {
    let section = sections.find(section => section.id === id);
    if (hasSpecialRequirements(section)) {
        section.isVisible = true;
        mapRender();
        return true;
    } else {
        console.log("the requirements are not met. don't reveal.");
        return false;
    }
}