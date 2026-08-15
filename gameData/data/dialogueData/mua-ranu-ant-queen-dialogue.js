export const dialogueData = {
    "id": "mua-ranu-ant-queen-dialogue",
    "type": "dialogue",
    "requirements": {
        "anyOf": [
            {
                "id": "ants-and-queens",
                "state": "meet-queen"
            }
        ]
    },
    "rejection": "The queen is sitting with her eyes closed. Her wrinkled face is strained. She appears to be in deep thoughts.",
    "start": "greetings",
    "entryPoints": [
        {
            "state": "moreHelp",
            "stateConditions": {
                "anyOf": [
                    {
                        "id": "ants-and-queens",
                        "state": "aftermath-colony-saved"
                    }
                ]
            }
        }
    ],
    "greetings": {
        "description": "The ant queen is sitting silently on her wooden throne. She is dressed in elegant silk robe, long gloves and a stylish hat. However her attire doesn't seem neat as if the queen has recently had hard time attending to her toilet. Suddenly, she speaks. Her voice is loud and stern. —I haven't invited you to my chambers! Where is Ag'Ra? Why did she let you in? Ag'Ra! Take them out of here.",
        "options": [
            {
                "label": "Make a courtesy and politely introduce yourself.",
                "key": "politeIntroduce"
            },
            {
                "label": "Introduce yourself without courtesy.",
                "key": "impoliteIntroduce"
            },
            {
                "label": "Demand attention to what you are going to say.",
                "key": "demandAttention"
            }
        ]
    },
    "politeIntroduce": {
        "description": "—I don't know why you are here. You clearly shouldn't be. I have no time for you. I have to tend to my babies. My poor babies.",
        "options": [
            {
                "label": "Tell the queen about the situation in the colony.",
                "key": "tellAboutSituationColony",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "cleansing"
                }
            }
        ]
    },
    "impoliteIntroduce": {
        "description": "—I don't know why you are here. You clearly shouldn't be. You are rude at that! I have no time for you. I have to tend to my babies. My poor babies.",
        "options": [
            {
                "label": "Tell the queen about the situation in the colony.",
                "key": "tellAboutSituationColony",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "cleansing"
                }
            }
        ]
    },
    "demandAttention": {
        "description": "—How dare you speak to me this way! I don't know you! I don't know why you are here. You clearly shouldn't be. You are rude at that! I have no time for you. I have to tend to my babies. My poor babies.",
        "options": [
            {
                "label": "Tell the queen about the situation in the colony.",
                "key": "tellAboutSituationColony",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "cleansing"
                }
            }
        ]
    },
    "tellAboutSituationColony": {
        "description": "The queen listens. Her look gets sterner with your every word. Finally, she is on the verge of tears, but she takes hold of herself. For a moment she sits motionlessly. Then she abruptly stands up. —I have known everything long before you told me, for I can see through my subjects' eyes. I saw you through Asa-La's eyes. To tell you the whole truth it was I who was speaking to you through her mouth. I knew about the betrayal, but I was indecisive. I needed someone to do the dirty job for me. Now I must do what I hesitated to do long ago.",
        "options": [
            {
                "label": "Continue.",
                "key": "continueQueensSpeech"
            }
        ]
    },
    "continueQueensSpeech": {
        "description": "*The queen raises her ivory sword and shield* —As the sole queen of the colony I must protect it even if sometimes it comes at a great cost. My true ants I order you assail your former fellows. This is the only way to save us. I will guide you. Forward, my ants!",
        "options": [
            {
                "label": "Witness the battle.",
                "key": "witnessBattle"
            }
        ]
    },
    "witnessBattle": {
        "description": "Every uninfected ant in the colony heard their queen. You hear great commotion outside. Together with Ladybug you leave the queen's chambers to witness a horrendous and violent sight of fighting. Ants are trying to kill each other with everything they have. They bite, they cut, they thrash, they thrust, they tear out limbs, they throw stones and heavy objects. They are led by their queen's orders loud in their minds. Orders their very nature cannot ignore.",
        "options": [
            {
                "label": "Join the uninfected ants in fighting.",
                "key": "joinFight",
                "characteristics": {
                    "reputation": 1
                }
            },
            {
                "label": "Observe.",
                "key": "observe"
            },
            {
                "label": "Retreat to the chambers.",
                "key": "retreatToChambers"
            }
        ]
    },
    "joinFight": {
        "description": "You join the battle to fight alongside the healthy ants. Your shield and spear helped to turn the tides of combat to the favor of your allies. Ladybug was fighting alongside you protecting the ants from projectiles with force shields and distracting enemies with her psychic abilities. Together you saved some ant lives that otherwise would have been wasted in battle.",
        "options": [
            {
                "label": "Return to the queen.",
                "key": "returnQueen",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "aftermath-colony-saved"
                }
            },
            {
                "label": "Help the wounded.",
                "key": "helpWounded",
                "characteristics": {
                    "prayer": 1
                }
            },
            {
                "label": "Salvage valuables from the dead.",
                "key": "salvageValuables",
                "characteristics": {
                    "reputation": -1,
                    "pollen": 200
                }
            }
        ]
    },
    "retreatToChambers": {
        "description": "You find rescue behind the walls of the queens chambers. The queen is standing as if in a trance. Her eyes move quickly, but her body is not moving. Some long minutes later the fighting outside gets less intense. Judging by the queen's state, the healthy ants have won a victory. Soon she will be ready to speak.",
        "options": [
            {
                "label": "Speak to the queen.",
                "key": "returnQueen",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "aftermath-colony-saved"
                }
            },
            {
                "label": "Help the wounded.",
                "key": "helpWounded",
                "characteristics": {
                    "prayer": 1
                }
            },
            {
                "label": "Salvage valuables from the dead.",
                "key": "salvageValuables",
                "characteristics": {
                    "reputation": -1,
                    "pollen": 200
                }
            }
        ]
    },
    "observe": {
        "description": "You observe a fierce battle. Ladybug leaps into fighting to support the uninfected ants. She is very efficient at protecting the ants from projectiles with force shields and distracting enemies with her psychic abilities. Thanks to her support a couple of ant lives were saved that otherwise would have been wasted in battle.",
        "options": [
            {
                "label": "Return to the queen.",
                "key": "returnQueen",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "aftermath-colony-saved"
                }
            },
            {
                "label": "Help the wounded.",
                "key": "helpWounded",
                "characteristics": {
                    "prayer": 1
                }
            },
            {
                "label": "Salvage valuables from the dead.",
                "key": "salvageValuables",
                "characteristics": {
                    "reputation": -1,
                    "pollen": 200
                }
            }
        ]
    },
    "helpWounded": {
        "description": "With your timely healing prayers you are able to heal some wounded ants. Unfortunately, some ants were lost forever.",
        "options": [
            {
                "label": "Return to the queen.",
                "key": "returnQueen",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "aftermath-colony-saved"
                }
            },
            {
                "label": "Salvage valuables from the dead.",
                "key": "salvageValuables",
                "characteristics": {
                    "reputation": -1,
                    "pollen": 200
                }
            }
        ]
    },
    "salvageValuables": {
        "description": "The ants despise your act of looting and don't allow you to touch any dead ant.",
        "options": [
            {
                "label": "Return to the queen.",
                "key": "returnQueen",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "aftermath-colony-saved"
                }
            },
            {
                "label": "Help the wounded.",
                "key": "helpWounded",
                "characteristics": {
                    "prayer": 1
                }
            }
        ]
    },
    "returnQueen": {
        "description": "—I am eternally grateful for your assistance, knight. From now on, our entire effort will be thrown to restoring our colony to its former prosperity. We will find new ways as the old ones are gone. You will always be a welcomed guest here. Come if you need to restore your strength or trade. And if you are ever willing to help, I am sure there will be work for you.",
        "options": [
            {
                "label": "Thank the queen and leave.",
                "key": "thankQueen"
            }
        ]
    },
    "thankQueen": {
        "description": "—Farewell, knight",
        "options": []
    },
    "moreHelp": {
        "description": "—Please, talk to me later.",
        "options": []
    }
}