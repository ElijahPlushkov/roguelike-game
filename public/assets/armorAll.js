const walnutCuirass = {
    name: 'Walnut Cuirass',
    id: 'walnut_cuirass',
    type: 'heavy',
    armorRate: 3,
    effect: {
        agility: -3
    },
    enchantment: 'none',
    durability: 70,
    weight: 6,
    value: 20
}

export const heavyCuirasses = [walnutCuirass];

const waxCuirass = {
    name: 'Wax Cuirass',
    id: 'wax_cuirass',
    type: 'medium',
    armorRate: 2,
    effect: {
        agility: -2
    },
    enchantment: 'none',
    durability: 60,
    weight: 5,
    value: 15
}

export const mediumCuirasses = [waxCuirass];

const silkShirt = {
    name: 'Silk Shirt',
    id: 'silk_shirt',
    type: 'clothes',
    armorRate: 0,
    effect: {
        agility: +1
    },
    enchantment: 'none',
    durability: 15,
    weight: 1,
    value: 30
}

export const shirts = [silkShirt];