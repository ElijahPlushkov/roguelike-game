export const npcData = {
    "name": "Mua'Ranu",
    "id": "mua-ranu-ant-queen",
    "coordinates": {"x": 24, "y": 20},
    "tileImage": "",
    "characteristics": {
        "might": 5,
        "reputation": 20,
        "prayer": 10,
        "agility": 5
    },
    "isAlive": true,
    "disposition": 50,
    "characterClass": "knight-mystic",
    "characterDescription": "You see an ant queen with tear-stained eyes. She looks weak, but her royal posture remains.",
    "combatDescription": "With a chilling war cry, Ag'Ra leaps at you.",
    "combatDifficulty": "average",
    "weapon": "ivory-sword",
    "armor": "silk-robe",
    "shield": "ivory-shield",
    "spells": "none",
    "isImportant": false,
    "faction": "ant-colony",
    "dialogue": "mua-ranu-ant-queen-dialogue",
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
            "key": "learn",
            "label": "Learn."
        }
    ]
}