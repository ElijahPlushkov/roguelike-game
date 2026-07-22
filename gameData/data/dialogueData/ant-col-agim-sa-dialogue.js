export const dialogueData = {
    "id": "ant-col-agim-sa-dialogue",
    "type": "dialogue",
    "requirements": {},
    "rejection": "",
    "start": "greetings",
    "entryPoints": [
        {
            "state": "reportBack",
            "stateConditions": {
                "anyOf": [
                    {
                        "id": "strike-back",
                        "state": "diseased-ants-killed"
                    },
                    {
                        "eventOutcome": "gladlyAssist"
                    },
                    {
                        "eventOutcome": "notSlain"
                    }
                ]
            }
        },
        {
            "state": "knightTransformation",
            "stateConditions": {
                "anyOf": [
                    {
                        "eventOutcome": "refuseAssist"
                    }
                ]
            }
        },
        {
            "state": "fightAnt",
            "stateConditions": {
                "anyOf": [
                    {
                        "eventOutcome": "fightAnt"
                    }
                ]
            }
        }
    ],
    "greetings": {
        "description": "Stay right there, stranger! What's the purpose of your visit? Speak swiftly, as I don't have time to talk.",
        "options": [
            {
                "label": "Introduce yourself and explain why you are here.",
                "key": "introductionAndExplanation",
                "optionConditions": {
                    "quest": {
                        "id": "ants_and_queens",
                        "state": "start"
                    }
                }
            },
            {
                "label": "Introduce yourself.",
                "key": "introduction"
            },
            {
                "label": "Demand entry.",
                "key": "demandEntering"
            },
        ]
    },
    "introductionAndExplanation": {
        "description": "I can't believe our luck! Sir Knight, I implore you to help our colony. Some of our brothers and sisters turned into demonic creatures right after awakening. We completely lost control over them. They assaulted us unexpectedly and gained the upper hand. Our war chief and some of our sisters are resisting, but we have already lost many. Please eliminate our diseased folks, it's impossible to save them.",
        "options": [
            {
                "label": "I will gladly assist you.",
                "key": "gladlyAssist"
            },
            {
                "label": "Refuse to assist.",
                "key": "refuseAssist"
            },
        ]
    },
    "introduction": {
        "description": "I never thought I would ever see one of your kind. Nevertheless, Sir Knight, I implore you to help our colony. Some of our brothers and sisters turned into demonic creatures right after awakening. We completely lost control over them. They assaulted us unexpectedly and got the upper hand. Our war chief and some of our sisters are resisting, but we already lost a lot. Please eliminate our diseased folks, it's impossible to save them.",
        "options": [
            {
                "label": "I will gladly assist you.",
                "key": "gladlyAssist",
                "quest": {
                    "id": "strike-back",
                    "state": "start"
                }
            },
            {
                "label": "Refuse to assist.",
                "key": "refuseAssist"
            },
        ]
    },
    "gladlyAssist": {
        "description": "Be careful, Sir Knight! These abominations are lurking everywhere.",
        "options": []
    },
    "demandEntering": {
        "description": "You shall not pass, stranger. Only over my dead body.",
        "options": [
            {
                "label": "Fight the ant.",
                "key": "fightAnt"
            },
            {
                "label": "Back down and leave.",
                "key": "backDown"
            },
        ]
    },
    "fightAnt": {
        "description": "Let it be.",
        "initCombat": true,
        "options": []
    },
    "backDown": {
        "description": "Right choice",
        "options": []
    },
    "refuseAssist": {
        "description": "I am deeply saddened by your words, Sir Knight. We will manage on our own then. Now leave, don't waste my time.",
        "options": []
    },
    "knightTransformation": {
        "description": "You sense that something has suddenly changed. In one moment it was there, but now it's gone. You look at the ant-knight and realize that her true self has left her. She is now belongs to a mysterious force that is powerful enough to separate ants from their queen and take them under its control. The ant-knight prepares to fight you.",
        "options": [
            {
                "label": "Fight the ant.",
                "key": "fightAnt"
            }
        ]
    },
    "reportBack": {
        "description": "Sir Knight, please tell me you have brought the good news.",
        "options": [
            {
                "label": "I haven't slain them all yet.",
                "key": "notSlain"
            },
            {
                "label": "The demonic ants are slain.",
                "key": "antsSlain",
                "optionConditions": {
                    "quest": {
                        "id": "strike-back",
                        "state": "diseased-ants-killed"
                    }
                }
            }
        ]
    },
    "notSlain": {
        "description": "Please, it's urgent. They are about to overrun us.",
        "options": []
    },
    "antsSlain": {
        "description": "Sir Knight, I am forever grateful to you. It is indeed true what they say about your order.",
        "options": [
            {
                "label": "I am glad I could help.",
                "key": "knightTransformation",
                "quest": {
                    "id": "strike-back",
                    "state": "siege-lifted"
                }
            },
            {
                "label": "Will you offer any reward?",
                "key": "knightTransformation",
                "quest": {
                    "id": "strike-back",
                    "state": "siege-lifted"
                }
            },
        ]
    }
}