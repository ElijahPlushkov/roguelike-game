import { locationData as chyceenBorderlands } from './chyceen-borderlands.js';
import { locationData as spiderLair } from './spider-lair.js';
import { locationData as antColony } from './ant-colony.js';

const locationRegistry = {
    "chyceen-borderlands": chyceenBorderlands,
    "spider-liar": spiderLair,
    "ant-colony": antColony
};

export function getLocation(id) {
    const location = locationRegistry[id];
    if (!location) {
        console.error(`Location "${id}" not found`);
        return null;
    }
    return location;
}