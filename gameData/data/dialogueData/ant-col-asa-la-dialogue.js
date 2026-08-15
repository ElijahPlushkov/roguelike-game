export const dialogueData = {
    "id": "ant-col-asa-la-dialogue",
    "type": "dialogue",
    // "requirements": {
    //     "anyOf": [
    //         {
    //             "id": "strike-back",
    //             "state": "siege-lifted"
    //         }
    //     ]
    // },
    "rejection": "—I have to defend the eggs, Sir Knight. If we survive the attack, please come back. I have something to tell you.",
    "start": "greetings",
    "entryPoints": [
        {
            "state": "antRejected",
            "stateConditions": {
                "anyOf": [
                    {
                        "dialogueOutcome": "rejectAnt"
                    },
                    {
                        "dialogueOutcome": "antRejected"
                    }
                ]
            }
        },
        {
            "state": "ladybugDead",
            "stateConditions": {
                "anyOf": [
                    {
                        "id": "jaemah-roseborn-ladybug",
                        "isAlive": false
                    }
                ]
            }
        },
        {
            "state": "shamanDead",
            "stateConditions": {
                "anyOf": [
                    {
                        "id": "ah-ruhn-ant-shaman",
                        "isAlive": false
                    }
                ]
            }
        },
        {
            "state": "evidenceReceived",
            "stateConditions": {
                "anyOf": [
                    {
                        dialogueOutcome: "appreciateHelp"
                    },
                    {
                        dialogueOutcome: "notAppreciateHelp"
                    },
                    {
                        dialogueOutcome: "evidenceReceived"
                    }
                ]
            }
        }
    ],
    "greetings": {
        "description": "—Sir Knight, I am grateful you came to visit me. Please hear me out.",
        "options": [
            {
                "label": "I am listening.",
                "key": "listen"
            },
            {
                "label": "I don't have time.",
                "key": "noTime"
            }
        ]
    },
    "noTime": {
        "description": "—Please, it's very important. Please, knight, hear me out. This is about my colony and my people.",
        "options": [
            {
                "label": "I am listening.",
                "key": "listen"
            },
            {
                "label": "Refuse to talk and proceed on your way.",
                "key": "rejectAnt"
            }
        ]
    },
    "rejectAnt": {
        "description": "—You are just like the rest of you, haughty noble folks. *The ant returns to her duties.*",
        "options": []
    },
    "antRejected": {
        "description": "—Don't come here again. *The ant ignores you.*",
        "options": []
    },
    "listen": {
        "description": "—My name is Asa-La. Last cycle I was tasked with tending to the eggs by my Queen Mua'Ranu. All of them hatched as healthy ants, my fellows. When the winter approached, I fell asleep right by my queen and her new eggs. But when I heard the song of spring a few moons back, I was the first to wake up. *The ant pauses. You notice a slight shaking in her limbs. She now whispers.* —At least I thought I was the first.",
        "options": [
            {
                "label": "Please go on.",
                "key": "goOn"
            }
        ]
    },
    "goOn": {
        "description": "—I saw Ah'Ruhn. He was there doing something with the eggs. He spoiled them. Oh, he spoiled them, I am sure. They were not good eggs anymore. *The ant begins speaking faster and quieter. You lean forward to hear her better.* —When they hatched, my Queen was not pleased. No-no-no. She was... confused. Then she got enraged. She ordered everyone out. Out! I haven't seen her since. But that's not all.",
        "options": [
            {
                "label": "Tell me more.",
                "key": "tellMore"
            }
        ]
    },
    "tellMore": {
        "description": "—I haven't seen those younglings. They are still inside with the queen. You can say I am crazy, but I think Ah'Ruhn gave them the demonic disease. Many of my fellows got infected. Some went astray and now are somewhere in the barrenlands, walking mindless. And I think there are even more of us who got infected. The last attack may not be the last.",
        "options": [
            {
                "label": "Can you prove it was really Ah'Ruhn?",
                "key": "proof"
            }
        ]
    },
    "proof": {
        "description": "—I can! I found one of Ah'Ruhn's fetishes after he left the eggs. *Asa-La hands over a wooden amulet with formic inscriptions.* —It says 'By Ah'Ruhn enchanted, spread word of king.' I don't know what this might mean, but I believe you can figure it out. You and this haughty ladybug.",
        "options": [
            {
                "label": "I appreciate your help.",
                "key": "appreciateHelp",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "found-evidence-against-shaman"
                }
            },
            {
                "label": "I don't think this tells much.",
                "key": "notAppreciateHelp",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "found-evidence-against-shaman"
                }
            }
        ]
    },
    "appreciateHelp": {
        "description": "—I am glad to be of help, Sir Knight. We ants know the virtue of helping each other. Good luck!",
        "options": [],
        "characteristics": {
            "reputation": 1
        }
    },
    "notAppreciateHelp": {
        "description": "—It seems only we ants know the virtue of helping each other.",
        "options": []
    },
    "evidenceReceived": {
        "description": "—I have told you everything I know, Sir Knight.",
        "options": []
    },
    "ladybugDead": {
        "description": "—I cannot believe this foreign lady is gone. She was our only hope. Leave me. *Asa-La returns to her duties, but you see that she can barely hold back her tears.*",
        "options": []
    },
    "shamanDead": {
        "description": "—He finally got what he truly deserved. It pains me that one of our kind is able to betray our Queen. But we owe you and the ladybug. Thank you, Sir Knight.",
        "options": []
    }
}