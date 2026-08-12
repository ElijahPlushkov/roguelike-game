export const dialogueData = {
    "id": "jaemah-roseborn-dialogue",
    "type": "dialogue",
    "requirements": {
        "anyOf": [
            {
                "id": "strike-back",
                "state": "siege-lifted"
            }
        ]
    },
    "rejection": "—I cannot speak with you now, as we are resisting the attack. Join or leave.",
    "start": "greetings",
    "entryPoints": [
        {
            "state": "aftermath",
            "stateConditions": {
                "anyOf": [
                    {
                        "id": "ants-and-queens",
                        "state": "aftermath-colony-saved"
                    }
                ]
            }
        },
        {
            "state": "postAftermath",
            "stateConditions": {
                "anyOf": [
                    {
                        "dialogueOutcome": "setoff"
                    }
                ]
            }
        },
        {
            "state": "talkToQueen",
            "stateConditions": {
                "anyOf": [
                    {
                        "id": "ants-and-queens",
                        "state": "meet-queen"
                    }
                ]
            }
        },
        {
            "state": "shamanDead",
            "stateConditions": {
                "anyOf": [
                    {
                        "id": "ants-and-queens",
                        "state": "shaman-killed"
                    },
                    {
                        "id": "ants-and-queens",
                        "state": "kill-shaman"
                    }
                ]
            }
        },
        {
            "state": "evidenceAgainstShaman",
            "stateConditions": {
                "anyOf": [
                    {
                        "id": "ants-and-queens",
                        "state": "found-evidence-against-shaman"
                    },
                    {
                        "id": "ants-and-queens",
                        "state": "find-evidence-against-shaman"
                    }
                ]
            }
        },
        {
            "state": "isWarchiefDealtWith",
            "stateConditions": {
                "anyOf": [
                    {
                        "id": "ants-and-queens",
                        "state": "deal-with-warchief"
                    }
                ]
            }
        },
        {
            "state": "refuseAssist",
            "stateConditions": {
                "anyOf": [
                    {
                        "dialogueOutcome": "refuseAssist"
                    }
                ]
            }
        }
    ],
    "greetings": {
        "description": "—Ah, knight, you may come in handy here. I recruit you to assist me. Now listen what you must do. I need to have a conversation with the local ant queen, but the warchief refuses to allow me in.",
        "options": [
            {
                "label": "Interrupt the lady and ask her name.",
                "key": "task"
            },
            {
                "label": "Interrupt the lady and say that you are here to investigate the ants unusual behavior.",
                "key": "task",
                "optionConditions": {
                    "quest": {
                        "id": "ants-and-queens",
                        "state": "start"
                    }
                }
            },
            {
                "label": "Interrupt the lady and firmly ask her to be more polite.",
                "key": "task"
            },
            {
                "label": "Continue listening.",
                "key": "listen"
            }
        ]
    },
    "task": {
        "description": "—Don't interrupt me! She respects only brute force, so perhaps you have had sufficient training to prove yourself a decent match. On the other hand, any subterfuge will suffice. And don't kill her; she will be of use to me later. Now go. I don't have time for you. *The lady turns away*.",
        "options": [
            {
                "label": "Ask the lady about her purpose here.",
                "key": "ignoring",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "deal-with-warchief"
                }
            },
            {
                "label": "Say that you are here to investigate the ants unusual behavior.",
                "key": "ignoring",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "deal-with-warchief"
                }
            },
            {
                "label": "Ask about the colony.",
                "key": "ignoring",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "deal-with-warchief"
                }
            },
            {
                "label": "Ask about the War Chief.",
                "key": "ignoring",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "deal-with-warchief"
                }
            },
            {
                "label": "Ask about the Queen.",
                "key": "ignoring",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "deal-with-warchief"
                }
            },
            {
                "label": "Ask about the Shaman.",
                "key": "ignoring",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "deal-with-warchief"
                }
            }
        ]
    },
    "listen": {
        "description": "—Don't interrupt me! She respects only brute force, so perhaps you have had sufficient training to prove yourself a decent match. On the other hand, any subterfuge will suffice. And don't kill her; she will be of use to me later. Now go. I don't have time for you. *The lady turns away*.",
        "options": [
            {
                "label": "Ask the lady about her purpose here.",
                "key": "ignoring",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "deal-with-warchief"
                }
            },
            {
                "label": "Say that you are here to investigate the ants unusual behavior.",
                "key": "ignoring",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "deal-with-warchief"
                }
            },
            {
                "label": "Ask about the colony.",
                "key": "ignoring",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "deal-with-warchief"
                }
            },
            {
                "label": "Ask about the War Chief.",
                "key": "ignoring",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "deal-with-warchief"
                }
            },
            {
                "label": "Ask about the Queen.",
                "key": "ignoring",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "deal-with-warchief"
                }
            },
            {
                "label": "Ask about the Shaman.",
                "key": "ignoring",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "deal-with-warchief"
                }
            }
        ]
    },
    "ignoring": {
        "description": "The lady ignores you.",
        "options": []
    },
    "isWarchiefDealtWith": {
        "description": "—Report.",
        "options": [
            {
                "label": "Say that you have dealt with the warchief.",
                "key": "warchiefDealtWith",
                "optionConditions": {
                    "quest": {
                        "id": "ants-and-queens",
                        "state": "warchiefDealtWith"
                    }
                },
                "quest": {
                    "id": "ants-and-queens",
                    "state": "find-evidence-against-shaman"
                }
            },
            {
                "label": "Say that you haven't dealt with the warchief.",
                "key": "warchiefNotDealtWith"
            },
            {
                "label": "Say that you refuse to assist the lady.",
                "key": "refuseAssist",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "abandon-ladybug"
                }
            }
        ]
    },
    "warchiefDealtWith": {
        "description": "—Excellent! But we must act quickly now. I suspect that with the warchief on our side, the local shaman will make his next move. Some of the ants are wary of him, but they refuse to speak with me on the matter. Perhaps, you will have more luck. Talk to me when you are done.",
        "options": []
    },
    "warchiefNotDealtWith": {
        "description": "—Don't come back until you perform your task!",
        "options": []
    },
    "refuseAssist": {
        "description": "—I don't need you then! Disappear!",
        "options": []
    },
    "evidenceAgainstShaman": {
        "description": "—Any luck?",
        "options": [
            {
                "label": "Say that you have evidence against the shaman.",
                "key": "foundEvidence",
                "optionConditions": {
                    "quest": {
                        "id": "ants-and-queens",
                        "state": "found-evidence-against-shaman"
                    }
                }
            },
            {
                "label": "Say that you haven't found anything.",
                "key": "foundNothing"
            },
            {
                "label": "Say that you refuse to assist the lady.",
                "key": "refuseAssist",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "abandon-ladybug"
                }
            }
        ]
    },
    "foundEvidence": {
        "description": "—I knew that this bastard was behind it. Ha! *She clenches her fists* —Knight, I order you execute the criminal.",
        "options": [
            {
                "label": "I will do it immediately.",
                "key": "acceptKillShaman",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "kill-shaman"
                }
            },
            {
                "label": "Say that you refuse to assist the lady.",
                "key": "refuseAssist",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "abandon-ladybug"
                }
            }
        ]
    },
    "acceptKillShaman": {
        "description": "—Do not trust a word he says.",
        "options": []
    },
    "foundNothing": {
        "description": "—Do not come back until you find something.",
        "options": []
    },
    "shamanDead": {
        "description": "—Knight, report.",
        "options": [
            {
                "label": "The shaman has been executed.",
                "key": "shamanExecuted",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "meet-queen"
                },
                "optionConditions": {
                    "quest": {
                        "id": "ants-and-queens",
                        "state": "shaman-killed"
                    }
                }
            },
            {
                "label": "Say that you haven't dealt with the shaman.",
                "key": "shamanNotExecuted"
            },
            {
                "label": "Say that you refuse to assist the lady.",
                "key": "refuseAssist",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "abandon-ladybug"
                }
            }
        ]
    },
    "shamanExecuted": {
        "description": "—Great to hear the bastard is dead. We must go to the queen and tell her everything we have learnt.",
        "options": []
    },
    "shamanNotExecuted": {
        "description": "—Oh! Do not tell me you are just wasting our time.",
        "options": []
    },
    "talkToQueen": {
        "description": "—Knight, it's time to meet the queen. Let's talk to her and tell her everything we have uncovered.",
        "options": []
    },
    "aftermath": {
        "description": "—Knight, I am grateful to you for your professional and timely assistance. Without you, the colony would not have survived. Unfortunately, we have won only one battle, not the war. That is the reason why I need your assistance once more. Go to an abandoned altar in the east of here and confront any ants who are occupied with its diassabling.",
        "options": [
            {
                "label": "Say that you set off immediately.",
                "key": "setoff"
            },
            {
                "label": "Say that you want to know more about your new ally.",
                "key": "knowmore"
            }
        ]
    },
    "knowmore": {
        "description": "—I am Jaemah Roseborn, a noble ladybug. That's all you need to know. Go now!",
        "options": [
            {
                "label": "Say that you set off immediately.",
                "key": "setoff"
            }
        ]
    },
    "postAftermath": {
        "description": "—I believe I've shared everything with you. I have a lot to do now here in the colony.",
        "options": [
            {
                "label": "Say that you set off immediately.",
                "key": "setoff"
            }
        ]
    },
    "setoff": {
        "description": "—Take care.",
        "options": []
    }
}