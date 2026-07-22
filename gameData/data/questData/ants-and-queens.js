export const questData = {
    "id": "ants-and-queens",
    "title": "Ants and Queens",
    "requirements": {
        "spider_threats": "mercy"
    },
    "states": [
        {
            "id": "start",
            "description": "Heildin the Wise is anxious about a certain shapeshifter from his winter dreams. He asks you to investigate the strange behavior of the ants from the nearby colony."
        },
        {
            "id": "ant-colony-arrival",
            "description": "You arrive at the ant colony. It looks miserable and with very little ant population. You should look around and find someone who can tell you about the things here."
        },
        {
            "id": "meet-ladybug",
            "description": "You have met a noble ladybug. She is reluctant to talk, so there is no clue of what her purpose might be here."
        },
        {
            "id": "meet-ant-shaman",
            "description": "You have met the ant shaman, Ah'Ruhn. He is xenophobic and suspects the ladybug to be the cause of the colony's declining state."
        },
        {
            "id": "meet-ant-warchief",
            "description": "A mighty war chief vehemently protects his queen's keep. He doesn't allow you in under any circumstances."
        },
        {
            "id": "deal-with-warchief",
            "description": "The irritable ladybug ordered you to prove yourself a better warrior that the warchief in order to gain the warchief's recognition."
        },
        {
            "id": "warchiefDealtWith",
            "description": "You have managed to prove your worth to the warchief. She now respects you deeply."
        },
        {
            "id": "kill-scuttle-flies",
            "description": "The warchief asked you to kill some scuttle flies settled somewhere along the shores of lake Nimra to the north-west of the colony."
        },
        {
            "id": "find-evidence-against-shaman",
            "description": "The ladybug asked you to find any evidence of the local shaman's activities."
        },
        {
            "id": "found-evidence-against-shaman",
            "description": "You managed to find evidence of the shaman's link to the epidemy of the demonic disease in the ants colony. Ladybug will want to see this."
        },
        {
            "id": "kill-shaman",
            "description": "Ladybug asked you to make sure the shaman will perish soon."
        },
        {
            "id": "kill-warchief",
            "description": "Ah'Ruhn asked you to kill the war chief to set the queen free."
        },
        {
            "id": "warChief-defeated",
            "description": "The ant goliath is defeated in a fair battle."
        },
        {
            "id": "shaman-killed",
            "description": "Ah'Ruhn is dead."
        },
        {
            "id": "meet-queen",
            "description": "It's time to meet the queen and tell her everything you have learnt about the state of things at the colony."
        },
        {
            "id": "cleansing",
            "description": "Queen Mua'Ranu has heard you. She ordered to initiate cleansing in hopes of saving the remaining ants."
        },
        {
            "id": "kill-ladybug",
            "description": "Ah'Ruhn has asked you to get rid of Ladybug. He thinks she is responsible for infecting the colony' residents."
        },
        {
            "id": "ladybug-defeated",
            "description": "You have killed Ladybug."
        },
        {
            "id": "abandon-ladybug",
            "description": "Haughty and secretive Ladybug doesn't seem like an appropriate alliance."
        },
        {
            "id": "infecting",
            "description": "The diseased ants take over the colony. The queen get infected by the demonic disease. You were instrumental in this catastrophy."
        },
        {
            "id": "aftermath-colony-infected",
            "description": "With your assistance, the diseased ants leading by Ah'Ruhn the Shaman took the colony under their control. The queen is infected.",
            "flag": "finish",
            "reward": {
                "pollen": 10,
                "might": 1
            },
            "outcomes": {
                "ladybug": "dead",
                "ant_colony": "false",
                "ant_queen": "infected"
            }
        },
        {
            "id": "aftermath-colony-saved",
            "description": "At a great cost, but the colony is now saved. All the shaman's accoplices have been slain.",
            "flag": "finish",
            "reward": {
                "pollen": 40,
                "reputation": 2,
                "prayer": 2
            },
            "outcomes": {
                "ladybug": "alive",
                "ant_colony": "true",
                "ant_queen": "not_infected"
            }
        }
    ]
}