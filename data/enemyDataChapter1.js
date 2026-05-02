export const enemyDataChapter1 = {
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
            "description": "You meet a hostile mosquito scout.'Goway o yall see ma big sabler'.",
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
            "combatVictory": "The mosquito scout screams and tries to insert his rusty dagger in you. Gracefully, you manage to reflect his blow. By striking back, you penetrate the mosquito's body with your chitin spear. He sheds some pale drops of blood before falling to the side of the road.",
            "combatDefeat": "You didn't have the strength to defeat even a weak mosquito. You are a disgrace for the Order.",
            "negotiationVictory": "Mosquito is bewildered by your words. He thinks for a while. Then thinks again. He doesn't understand that he doesn't understand a word you say therefore understands. He assumes a respectful posture with his wings upwards, he bows and lets you proceed.",
            "negotiationDefeat": "Mosquito is too dumb to understand your eloquent speech. He gets angry at the big brain bug. With all his strength he strikes a blow.",
            "fleeSuccess": "The mosquito laughs so hard, he nearly wets his pants. He is not even embarrassed. You are the one who should be.",
            "fleeFailure": "The mosquito laughs so hard, he nearly wets his pants. He is not even embarrassed. You are the one who should be."
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
            "description": "A mosquito guard stands mothionless in the dim torch light. Upon seeing you he lifts his spear and prepares to attack you.",
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
            "combatVictory": "Blinded by the dark of the corridor, the mosquito guard misses his strike. However, your strike is precise. He drops his weapon to lean against the wall, but his strength leaves him. He slid down the wall. A weak almost unnoticeable body is to remain in the dark.",
            "combatDefeat": "You didn't have enough strength to defeat the mosquito guard. You are a disgrace for the Order",
            "negotiationVictory": "The mosquito remains silent for a second, then he steps away gesturing you to pass.",
            "negotiationDefeat": "The mosquito is not impressed by your speech. He remains determined to guard his post.",
            "fleeSuccess": "You hear a low chuckle from the other end of the corridor. Such a disgrace.",
            "fleeFailure": "You hear a low chuckle from the other end of the corridor. Such a disgrace."
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