export const questDataChapter1 = {
    "id": "chapter_1_quests",
    "quests": [
        {
            "id": "find_steed",
            "title": "Loyal Steed",
            "requirements": {},
            "states": [
                {
                    "id": "start",
                    "description": "Your steed as well as your belongings, save for armour and spear, have disappeared. Without them travelling further may be too dangerous. Besides, time is of the essence. You can linger no more."
                },
                {
                    "id": "find_murderer",
                    "description": "Apparently, your steed was murdered. Someone dared to damaged the Order's property and tried to jeopadize your mission by slowing you down. Whoever it was, the repercussions will be severe.",
                    "requirements": {
                        "event": "dead_steed"
                    }
                },
                {
                    "id": "murderer_found",
                    "description": "What a suprising turn of events!",
                    "requirements": {
                        "event": "find_murderer"
                    },
                    "flag": "finish",
                    "reward": {
                        "pollen": 30
                    },
                    "outcomes": {}
                },
                {
                    "id": "murderer_not_found",
                    "description": "The murder remains a mystery.",
                    "requirements": {
                        "event": "find_murderer"
                    },
                    "flag": "finish",
                    "reward": {
                        "prayer": -3
                    },
                    "outcomes": {}
                }
            ]
        },
        {
            "id": "spider_threats",
            "title": "Spider Threats",
            "requirements": {},
            "states": [
                {
                    "id": "start",
                    "description": "Lady Butterfly asked you to execute the local spider who is hunting the ants from the nearby colony."
                },
                {
                    "id": "mercy",
                    "description": "You have decided to take mercy on Heildin the Wise.",
                    "requirements": {
                        "event": "dead_steed"
                    },
                    "flag": "finish",
                    "reward": {
                        "reputation": 3
                    },
                    "outcomes": {}
                },
                {
                    "id": "execute",
                    "description": "In the name of the Order Heildin is sentenced to death.",
                    "requirements": {
                        "event": "dead_steed"
                    },
                    "flag": "finish",
                    "reward": {
                        "might": 3
                    },
                    "outcomes": {}
                }
            ]
        },
        {
            "id": "ants_and_queens",
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
                    "id": "ant_colony_arrival",
                    "description": "You arrive at the ant colony. It looks miserable and with very little ant population. You should look around and find someone who can tell you about the things here."
                },
                {
                    "id": "meet_ladybug",
                    "description": "You have met a noble ladybug. She is reluctant to talk, so there is no clue of what her purpose might be here."
                },
                {
                    "id": "meet_ant_shaman",
                    "description": "You have met the ant shaman, A'Ruhn. He is xenophobic and suspects the ladybug to be the cause of the colony's declining state."
                },
                {
                    "id": "meet_ant_warchief",
                    "description": "A mighty war chief vehemently protects his queen's keep. He doesn't allow you in under any circumstances."
                },
                {
                    "id": "deal_with_warchief",
                    "description": "The irritable ladybug ordered you to prove yourself a better warrior that the warchief in order to gain the warchief's recognition."
                },
                {
                    "id": "warchiefDealtWith",
                    "description": "You have managed to prove your worth to the warchief. She now respects you deeply."
                },
                {
                    "id": "kill_scuttle_flies",
                    "description": "The warchief asked you to kill some scuttle flies settled somewhere along the shores of lake Nimra to the north-west of the colony."
                },
                {
                    "id": "find_evidence_against_shaman",
                    "description": "The ladybug asked you to find any evidence of the local shaman's activities."
                },
                {
                    "id": "found_evidence_against_shaman",
                    "description": "You managed to find evidence of the shaman's link to the epidemy of the demonic disease in the ants colony. Ladybug will want to see this."
                },
                {
                    "id": "kill_shaman",
                    "description": "Ladybug asked you to make sure the shaman will perish soon."
                },
                {
                    "id": "kill_warchief",
                    "description": "Ah'Ruhn asked you to kill the war chief to set the queen free."
                },
                {
                    "id": "warChief_defeated",
                    "description": "The ant goliath is defeated in a fair battle."
                },
                {
                    "id": "shaman_killed",
                    "description": "A'Ruhn is dead."
                },
                {
                    "id": "meet_queen",
                    "description": "It's time to meet the queen and tell her everything you have learnt about the state of things at the colony."
                },
                {
                    "id": "cleansing",
                    "description": "Queen Mua'Ranu has heard you. She ordered to initiate cleansing in hopes of saving the remaining ants."
                },
                {
                    "id": "kill_ladybug",
                    "description": "A'Ruhn has asked you to get rid of Ladybug. He thinks she is responsible for infecting the colony' residents."
                },
                {
                    "id": "ladybug_defeated",
                    "description": "You have killed Ladybug."
                },
                {
                    "id": "abandon_ladybug",
                    "description": "Haughty and secretive Ladybug doesn't seem like an appropriate alliance."
                },
                {
                    "id": "infecting",
                    "description": "The diseased ants take over the colony. The queen get infected by the demonic disease. You were instrumental in this catastrophy."
                },
                {
                    "id": "aftermath_colony_infected",
                    "description": "With your assistance, the diseased ants leading by A'Ruhn the Shaman took the colony under their control. The queen is infected.",
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
                    "id": "aftermath_colony_saved",
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
    ]
}