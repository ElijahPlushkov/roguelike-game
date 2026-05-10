import { levelData as chapter1 } from './chapter_1.js';
import { levelData as dungeon } from './dungeon.js';

export const levelRegistry = {
    "chapter_1": chapter1,
    "dungeon": dungeon
};

export function getLevel(id) {
    const level = levelRegistry[id];
    if (!level) {
        console.error(`Level "${id}" not found`);
        return null;
    }
    return level;
}