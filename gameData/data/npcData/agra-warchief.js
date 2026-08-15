export const npcData = {
    "id": "agra-warchief",
    "name": "Ag'Ra",
    "race": "ant",
    "coordinates": {"x": 24, "y": 17},
    "tileImage": "",
    "characteristics": {
        "might": 15,
        "reputation": 10,
        "prayer": 5,
        "agility": 14
    },
    "isAlive": true,
    "disposition": 40,
    "characterClass": "barbarian",
    "characterDescription": "A muscular female warchief is standing in front of you. She is twice as big as you are and clasping a bone bident.",
    "combatDescription": "With a chilling war cry, Ag'Ra leaps at you.",
    "combatDifficulty": "average",
    "weapon": "bone-bident",
    "armor": "fur-cuirass",
    "shield": "none",
    "spells": "none",
    "isImportant": false,
    "faction": "ant-colony",
    "dialogue": "agra-warchief-dialogue",
    "interactionOptions": [
        {
            "key": "dialogue",
            "label": "Talk."
        },
        {
            "key": "fight",
            "label": "Fight."
        },
        {
            "key": "train",
            "label": "Train."
        }
    ]
}