import { sections } from "./data/gameData.js";
import { mapRender } from "./mapRender.js";

export function revealSection(id) {
    let section = sections.find(section => section.id === id);
    section.isVisible = true;
    mapRender();
}