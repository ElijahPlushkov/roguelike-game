import { levelData as chapter1 } from './chapter_1.js';
import { levelData as spiderLair } from './spider-lair.js';
import { levelData as antColony } from './ant-colony.js';

const levelRegistry = {
    "chapter_1": chapter1,
    "spider-liar": spiderLair,
    "ant-colony": antColony
};

export function getLevel(id) {
    const level = levelRegistry[id];
    if (!level) {
        console.error(`Level "${id}" not found`);
        return null;
    }
    return level;
}