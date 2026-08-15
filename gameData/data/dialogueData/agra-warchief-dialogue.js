export const dialogueData = {
    "id": "agra-warchief-dialogue",
    "type": "dialogue",
    // "requirements": {
    //     "anyOf": [
    //         {
    //             "id": "strike-back",
    //             "state": "siege-lifted"
    //         }
    //     ]
    // },
    "rejection": "—Look how I squeeze this infected bastard. Gruaaagh! Stay away, Ag'Ra doesn't need your help!",
    "start": "greetings",
    "entryPoints": [
        {
            "state": "shamanAskedKill",
            "stateConditions": {
                "anyOf": [
                    {
                        "id": "ants-and-queens",
                        "state": "kill-warchief"
                    }
                ]
            }
        },
        {
            "state": "postDealingWith",
            "stateConditions": {
                "anyOf": [
                    {
                        "id": "ants-and-queens",
                        "state": "meet-queen"
                    },
                    {
                        "id": "ants-and-queens",
                        "state": "cleansing"
                    },
                    {
                        "id": "ants-and-queens",
                        "state": "shaman-killed"
                    },
                    {
                        "id": "ants-and-queens",
                        "state": "kill-shaman"
                    },
                    {
                        "id": "ants-and-queens",
                        "state": "warchiefDealtWith"
                    },
                    {
                        "id": "ants-and-queens",
                        "state": "aftermath-colony-saved"
                    }
                ]
            }
        },
        {
            "state": "isFliesSlain",
            "stateConditions": {
                "anyOf": [
                    {
                        "eventOutcome": "willHelp"
                    },
                    {
                        "eventOutcome": "fliesNotSlain"
                    }
                ]
            }
        },
        {
            "state": "shamanAskedKill",
            "stateConditions": {
                "anyOf": [
                    {
                        "id": "ants-and-queens",
                        "state": "kill-warchief"
                    }
                ]
            }
        }
    ],
    "greetings": {
        "description": "—Whacha want from ma Queen?",
        "options": [
            {
                "label": "Sorry, for disturbing you",
                "key": "leave"
            },
            {
                "label": "I am a Knight of the Pine Order. I would like to request an audience from your queen.",
                "key": "queenAudience",
                "optionConditions": {
                    "quest": {
                        "id": "ants-and-queens",
                        "state": "deal-with-warchief"
                    }
                }
            },
            {
                "label": "The ladybug wants to talk to the queen. I am here on her behalf.",
                "key": "ladybugBehalf",
                "optionConditions": {
                    "quest": {
                        "id": "ants-and-queens",
                        "state": "deal-with-warchief"
                    }
                }
            }
        ]
    },
    "queenAudience": {
        "description": "Ah! You are a famous bunch. But ma Queen is not accepring anyone right now. Sorry.",
        "options": [
            {
                "label": "Challenge to a fair fight.",
                "key": "fairFight",
                "optionConditions": {
                    "quest": {
                        "id": "ants-and-queens",
                        "state": "deal-with-warchief"
                    }
                },
                "rejection": "You not worth ma time, buggie.",
                "requirements": {
                    "might": 8
                }
            },
            {
                "label": "Tell a silly joke.",
                "key": "tellJoke",
                "optionConditions": {
                    "quest": {
                        "id": "ants-and-queens",
                        "state": "deal-with-warchief"
                    }
                },
                "rejection": "The warchief is not impressed.",
                "requirements": {
                    "pollen": 30
                }
            },
            {
                "label": "Explain the situation in detail and politely ask admission to the Queen's chamber.",
                "key": "explainSituation",
                "optionConditions": {
                    "quest": {
                        "id": "ants-and-queens",
                        "state": "deal-with-warchief"
                    }
                },
                "rejection": "You not the first to come with such requests.",
                "requirements": {
                    "reputation": 6
                }
            },
            {
                "label": "Say that you have an urgent letter from the Emperor.",
                "key": "emperorLetter",
                "optionConditions": {
                    "quest": {
                        "id": "ants-and-queens",
                        "state": "deal-with-warchief"
                    }
                },
                "rejection": "You lie.",
                "requirements": {
                    "reputation": 6
                }
            },
            {
                "label": "Admire the warchief's armor and weapon.",
                "key": "admireWarchief",
                "optionConditions": {
                    "quest": {
                        "id": "ants-and-queens",
                        "state": "deal-with-warchief"
                    }
                },
                "rejection": "Good compliment, but not sincere.",
                "requirements": {
                    "reputation": 5
                }
            },
            {
                "label": "Leave.",
                "key": "leave"
            }
        ]
    },
    "ladybugBehalf": {
        "description": "I don't trust this ladybug. Our shaman say she is the root of trouble. If you are with 'er, I don trust you neither.",
        "options": [
            {
                "label": "Challenge to a fair fight.",
                "key": "fairFight",
                "optionConditions": {
                    "quest": {
                        "id": "ants-and-queens",
                        "state": "deal-with-warchief"
                    }
                },
                "rejection": "You not worth ma time, buggie.",
                "requirements": {
                    "might": 10
                }
            },
            {
                "label": "Tell a silly joke.",
                "key": "tellJoke",
                "optionConditions": {
                    "quest": {
                        "id": "ants-and-queens",
                        "state": "deal-with-warchief"
                    }
                },
                "rejection": "The warchief is not impressed.",
                "requirements": {
                    "pollen": 30
                }
            },
            {
                "label": "Explain the situation in detail and politely ask an admission to the Queen's chamber.",
                "key": "explainSituation",
                "optionConditions": {
                    "quest": {
                        "id": "ants-and-queens",
                        "state": "deal-with-warchief"
                    }
                },
                "rejection": "You not the first to come with such requests.",
                "requirements": {
                    "reputation": 8
                }
            },
            {
                "label": "Say that you have an urgent letter from the Emperor.",
                "key": "emperorLetter",
                "optionConditions": {
                    "quest": {
                        "id": "ants-and-queens",
                        "state": "deal-with-warchief"
                    }
                },
                "rejection": "You lie.",
                "requirements": {
                    "reputation": 8
                }
            },
            {
                "label": "Admire the warchief's armor and weapon.",
                "key": "admireWarchief",
                "optionConditions": {
                    "quest": {
                        "id": "ants-and-queens",
                        "state": "deal-with-warchief"
                    }
                },
                "rejection": "Good compliment, but not sincere.",
                "requirements": {
                    "reputation": 7
                }
            },
            {
                "label": "Leave.",
                "key": "leave"
            }
        ]
    },
    "fairFight": {
        "description": "—Finally a worthy opponent. *You spend some time sparring with the warchief. You show off your fighting skills, and she is impressed by your prowess.* —You surely did your homework back at the order. I like it. You may enter.",
        "options": [
            {
                "label": "Thank and leave.",
                "key": "leave",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "warchiefDealtWith"
                }
            }
        ]
    },
    "tellJoke": {
        "description": "*The warchief laughs so hard you have an impression that that was the only joke she has heard in her entire life. Maybe the first ever joke she has actually understood.* —Well, you seem like good fella. I may let you in if you promise to behave.",
        "options": [
            {
                "label": "Thank and leave.",
                "key": "leave",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "warchiefDealtWith"
                }
            }
        ]
    },
    "explainSituation": {
        "description": "—I trust you on this one, knight. But heed ma words: if you touch ma queen, I will slay you on sight. And believe me I will.",
        "options": [
            {
                "label": "Thank and leave.",
                "key": "leave",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "warchiefDealtWith"
                }
            }
        ]
    },
    "emperorLetter": {
        "description": "—I trust you on this one, knight. But heed ma words: if you touch ma queen, I will slay you on sight. And believe me I will.",
        "options": [
            {
                "label": "Thank and leave.",
                "key": "leave",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "warchiefDealtWith"
                }
            }
        ]
    },
    "admireWarchief": {
        "description": "—You have your way with words, knight. I appreciate your complement. Here many things taken for granted, and my fellas little admire quality of my gear. You may speak with the queen.",
        "options": [
            {
                "label": "Thank and leave.",
                "key": "leave",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "warchiefDealtWith"
                }
            }
        ]
    },
    "helpWarchief": {
        "description": "—It kind of you to aks. I stand here daily and nightly, so ma other duties got neglected. I heard that some scuttle flies settled somewhere along the south-west shores of lake Nimra to the north-west of here. They attacked one of our ants and put 'em eggs inside him head. Poor thing. We had to burn him. Listen, if you kill those scumbags, I will grant you access to the queens chambers.",
        "options": [
            {
                "label": "I will help.",
                "key": "willHelp",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "kill-scuttle-flies"
                }
            },
            {
                "label": "I actually want to talk about something else.",
                "key": "greetings"
            }
        ]
    },
    "leave": {
        "description": "—See ya later.",
        "options": []
    },
    "willHelp": {
        "description": "—Thank you. Come back to me when those scumbags got slain.",
        "options": []
    },
    "isFliesSlain": {
        "description": "—Tell me they met their filthy gods.",
        "options": [
            {
                "label": "They did.",
                "key": "fliesSlain",
                "optionConditions": {

                },
                "quest": {
                    "id": "ants-and-queens",
                    "state": "warchiefDealtWith"
                }
            },
            {
                "label": "They didn't.",
                "key": "fliesNotSlain"
            },
            {
                "label": "I actually want to talk about something else.",
                "key": "greetings"
            }
        ]
    },
    "fliesSlain": {
        "description": "—Gods know I hate flies! You have ma thanks, knight. I cannot share anything with you, but I can teach you how to survive in these lands. Name's Ag'Ra by the way. *Ag'Ra shows and tells you a couple of things you find extremely useful*.",
        "options": [
            {
                "label": "Thank and leave.",
                "key": "leave",
                "characteristics": {
                    "might": 1,
                    "agility": 1,
                    "reputation": 1
                }
            }
        ]
    },
    "fliesNotSlain": {
        "description": "—Come back to me when those scumbags got slain.",
        "options": []
    },
    "postDealingWith": {
        "description": "—Hello, fella! What can I do for you?",
        "options": [
            {
                "label": "Just checking on you. Goodbye.",
                "key": "leave"
            }
        ]
    },
    "shamanAskedKill": {
        "description": "—Whacha want from ma Queen? You not seem like an ant.",
        "options": [
            {
                "label": "Challenge to a fight.",
                "key": "fight",
                "rejection": "You not worth ma time, buggie.",
                "requirements": {
                    "might": 10
                }
            }
        ]
    },
    "fight": {
        "description": "—I will pierce you down.",
        "initCombat": {
            "id": "agra-warchief"
        }
    }
}