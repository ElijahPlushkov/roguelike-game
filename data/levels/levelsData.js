import { levelData as chapter1 } from './chapter_1.js';
import { levelData as spider_liar } from './spider-liar.js';

export const levelRegistry = {
    "chapter_1": chapter1,
    "spider-liar": spider_liar
};

export function getLevel(id) {
    const level = levelRegistry[id];
    if (!level) {
        console.error(`Level "${id}" not found`);
        return null;
    }
    return level;
}