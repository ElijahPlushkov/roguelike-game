export const enemyData = {
    "id": "chapter_1_enemies",
    "enemies": [
        {
            "id": "mosquito_scout_1",
            "race": "mosquito",
            "difficulty": "flimsy",
            "enemyClass": "scout",
            "weapon": "stone_dagger",
            "armor": "cotton_shirt",
            "shield": "none",
            "spells": [],
            "flee": {
                "might": 0,
                "prayer": 0
            },
            "characteristics": {
                "might": 0,
                "reputation": 0,
                "prayer": 0,
                "agility": 0
            },
            "description": "You meet a hostile mosquito scout.'Goway o yall see ma big sabler'."
        },
        {
            "id": "mosquito_guard_1",
            "race": "mosquito",
            "difficulty": "weak",
            "enemyClass": "scout",
            "weapon": "oak_spear",
            "armor": "wax_cuirass",
            "shield": "none",
            "spells": [],
            "flee": {
                "might": 0,
                "prayer": 0
            },
            "characteristics": {
                "might": 1,
                "reputation": 1,
                "prayer": 1,
                "agility": 1
            },
            "description": "A mosquito guard stands mothionless in the dim torch light. Upon seeing you he lifts his spear and prepares to attack you."
        },
        {
            "id": "flies_gang",
            "type": "fly",
            "difficulty": "weak",
            "flee": {
                "might": 1,
                "prayer": 1
            },
            "characteristics": {
                "might": 2,
                "reputation": 2,
                "prayer": 2
            },
            "description": "A gang of flies appears out of nowhere. They surrender you, daggers ready. You are not able to identify their origin as they don't have any distinctive badges, nor uniform. They just seem like a rough sort of flies.",
            "options": [
                {
                    "key": "fight",
                    "label": "Fight."
                },
                {
                    "key": "negotiate",
                    "label": "Negotiate."
                },
                {
                    "key": "flee",
                    "label": "Flee."
                }
            ],
            "combatVictory": "Rusty daggers are unable to penetrate your chitin armor and shield whereas your spear is proved to be lethal for worn dirty clothes of the flies. You manage to overwhelm two ruffians, the third preferred to fly away living his fellows' bodies behind.",
            "combatDefeat": "Surrendered, you quickly got confused by the attackers' quick reflexes. You feel painful stings from every side. Fortunately, the ruffians didn't intend to slay you, they just grabbed some of your pollen and flew away.",
            "negotiationVictory": "The flies change their formation and now stand in fron of you listening closely. When you finish, they make a circle and lean their heads inside. They whisper something, giving you quick looks from time to time. Finally, they nod their heads and leave you alone.",
            "negotiationDefeat": "The flies laugh at you. One of them even dares to approach you and pat you on the shoulder. Still laughing. They take some of your pollen. Still laughing.",
            "fleeSuccess": "Flies seem unable to find you among the rocks. They scratch their heads, argue a bit and fly away.",
            "fleeFailure": "Flies seem unable to find you among the rocks. They scratch their heads, argue a bit and fly away."
        }
    ]
}