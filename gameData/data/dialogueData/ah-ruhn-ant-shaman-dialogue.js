export const dialogueData = {
    "id": "ah-ruhn-ant-shaman-dialogue",
    "type": "dialogue",
    // "requirements": {
    //     "anyOf": [
    //         {
    //             "id": "strike-back",
    //             "state": "siege-lifted"
    //         }
    //     ]
    // },
    "rejection": "—We are doomed. My magic is not able to stop this horde.",
    "start": "greetings",
    "entryPoints": [
        {
            "state": "postInfecting",
            "stateConditions": {
                "anyOf": [
                    {
                        "id": "ants-and-queens",
                        "state": "aftermath-colony-infected"
                    }
                ]
            }
        },
        {
            "state": "changeMindAboutLadybug",
            "stateConditions": {
                "anyOf": [
                    {
                        "dialogueOutcome": "refuse"
                    }
                ]
            }
        },
        {
            "state": "isWarchiefDead",
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
            "state": "isLadybugKilled",
            "stateConditions": {
                "anyOf": [
                    {
                        "id": "ants-and-queens",
                        "state": "kill-ladybug"
                    }
                ]
            }
        },
        {
            "state": "changeMindAboutWarchief",
            "stateConditions": {
                "anyOf": [
                    {
                        "dialogueOutcome": "refuseKillWarchief"
                    }
                ]
            }
        }
    ],
    "greetings": {
        "description": "—The day has come. I was expecting you, divine spirit. My dreams foretold your arrival. Please, welcome to my humble shack. Be seated. My name is Ah'Ruhn. I am the spiritual leader, the shaman, of my god-forgotten colony like my father was before me, and his father before him. Please, you must be weary after your journey. Drink this. *Ah'Rugn ladles something from a pot. It's hot and smells like herbs.*",
        "options": [
            {
                "label": "Accept the shaman's treat and thank him.",
                "key": "acceptSoup",
                "characteristics": {
                    "might": 1
                }
            },
            {
                "label": "Politely refuse.",
                "key": "refuseSoup"
            },
            {
                "label": "Present the evidence of his betrayal.",
                "key": "evidenceAgainstShaman",
                "optionConditions": {
                    "quest": {
                        "id": "ants-and-queens",
                        "state": "found-evidence-against-shaman"
                    }
                }
            }
        ]
    },
    "acceptSoup": {
        "description": "*You drink a warm soup made from a mixture of dried local herbs. You can taste dog rose, willow herb and carrots. You feel nourished.* —Divine spirit, heed my plead. The colony is in great danger, and my powers are not enough. You can see these poor souls. *The shaman points at some ants lying on a straw blanket at the opposite side of the shack.* They are dying from the demonic disease, not long before they go astray and further weaken our colony.",
        "options": [
            {
                "label": "Continue.",
                "key": "continue"
            }
        ]
    },
    "refuseSoup": {
        "description": "*The shaman nods with understanding and removes the bowl.* —Divine spirit, heed my plead. The colony is in great danger, and my powers are not enough. You can see these poor souls. *The shaman points at some ants lying on a straw blanket at the opposite side of the shack.* They are dying from the demonic disease; it's not long before they go astray and further weaken our colony.",
        "options": [
            {
                "label": "Continue.",
                "key": "continue"
            }
        ]
    },
    "continue": {
        "description": "—The gods showed me the cause of our suffering. Recently, just a few moons back, a ladybug came to settle in our colony. She is secretive and only spits out orders to others. But after she came, more and more of my fellow ants fell sick with the demonic disease.",
        "options": [
            {
                "label": "How can I help?",
                "key": "offerHelp"
            },
            {
                "label": "Tell me more about this ladybug.",
                "key": "ladybugTellMore"
            },
            {
                "label": "Tell me more about the colony.",
                "key": "colonyTellMore"
            },
            {
                "label": "Tell me more about yourself.",
                "key": "shamanTellMore"
            },
            {
                "label": "Remain silent.",
                "key": "remainSilent"
            },
            {
                "label": "Present the evidence of his betrayal.",
                "key": "evidenceAgainstShaman",
                "optionConditions": {
                    "quest": {
                        "id": "ants-and-queens",
                        "state": "found-evidence-against-shaman"
                    }
                }
            }
        ]
    },
    "ladybugTellMore": {
        "description": "—There is not much more to tell you. Little have I learnt about her. We had a couple of conversations, but they were more like interrogations. She is inquisitive, but she never tells about herself.",
        "options": [
            {
                "label": "How can I help?",
                "key": "offerHelp"
            },
            {
                "label": "Tell me more about the colony.",
                "key": "colonyTellMore"
            },
            {
                "label": "Tell me more about yourself.",
                "key": "shamanTellMore"
            },
            {
                "label": "Remain silent.",
                "key": "remainSilent"
            },
            {
                "label": "Present the evidence of his betrayal.",
                "key": "evidenceAgainstShaman",
                "optionConditions": {
                    "quest": {
                        "id": "ants-and-queens",
                        "state": "found-evidence-against-shaman"
                    }
                }
            }
        ]
    },
    "colonyTellMore": {
        "description": "*Ah'Ruhn signs* —It used to be a flourishing and prosperous colony. What you see now is a remnant of our ancient glory. The new Chyceen king doesn't do anything to prevent the demonic disease from spreading. Instead of helping us, he decided to abandon us. Now we survive on our own with what little we have.",
        "options": [
            {
                "label": "How can I help?",
                "key": "offerHelp"
            },
            {
                "label": "Tell me more about this ladybug.",
                "key": "ladybugTellMore"
            },
            {
                "label": "Tell me more about yourself.",
                "key": "shamanTellMore"
            },
            {
                "label": "Remain silent.",
                "key": "remainSilent"
            },
            {
                "label": "Present the evidence of his betrayal.",
                "key": "evidenceAgainstShaman",
                "optionConditions": {
                    "quest": {
                        "id": "ants-and-queens",
                        "state": "found-evidence-against-shaman"
                    }
                }
            }
        ]
    },
    "shamanTellMore": {
        "description": "—I have been the shaman of my colony for over forty cycles. My father was a shaman, his father was a shaman, and many of my forefathers served this colony as spiritual leaders. I am afraid I might be the last one.",
        "options": [
            {
                "label": "How can I help?",
                "key": "offerHelp"
            },
            {
                "label": "Tell me more about this ladybug.",
                "key": "ladybugTellMore"
            },
            {
                "label": "Tell me more about the colony.",
                "key": "colonyTellMore"
            },
            {
                "label": "Remain silent.",
                "key": "remainSilent"
            },
            {
                "label": "Present the evidence of his betrayal.",
                "key": "evidenceAgainstShaman",
                "optionConditions": {
                    "quest": {
                        "id": "ants-and-queens",
                        "state": "found-evidence-against-shaman"
                    }
                }
            }
        ]
    },
    "remainSilent": {
        "description": "—The gods showed me the cause of our suffering. Recently, just a few moons back, a ladybug came to settle in our colony. She is secretive and only spits out orders to others. But after she came, more and more of my fellow ants fell sick with the demonic disease.",
        "options": [
            {
                "label": "How can I help?",
                "key": "offerHelp"
            },
            {
                "label": "Tell me more about this ladybug.",
                "key": "ladybugTellMore"
            },
            {
                "label": "Tell me more about the colony.",
                "key": "colonyTellMore"
            },
            {
                "label": "Tell me more about yourself.",
                "key": "shamanTellMore"
            },
            {
                "label": "Remain silent.",
                "key": "offerHelp"
            },
            {
                "label": "Present the evidence of his betrayal.",
                "key": "evidenceAgainstShaman",
                "optionConditions": {
                    "quest": {
                        "id": "ants-and-queens",
                        "state": "found-evidence-against-shaman"
                    }
                }
            }
        ]
    },
    "offerHelp": {
        "description": "—Divine spirit, you can help. I know that your order has always been kind to us, winter sleepers. My exoskeleton is old and fragile, I cannot fight as well as I used to. Divine spirit, I implore you to slay the infector, so our colony can survive. No one but you can overwhelm such a deceptive foe.",
        "options": [
            {
                "label": "Accept.",
                "key": "accept",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "kill-ladybug"
                }
            },
            {
                "label": "Refuse.",
                "key": "refuse"
            }
        ]
    },
    "accept": {
        "description": "—Divine spirit, I knew you would be our savior. I cannot fight by your side, but I can give you my blessing of enhanced strength. Return to me when the culprit is no more.",
        "options": [
            {
                "label": "Accept the blessing.",
                "key": "acceptBlessing",
                "characteristics": {
                    "might": 1
                }
            }
        ]
    },
    "acceptBlessing": {
        "description": "*Ah'Ruhn closes his eyes and puts his hands on your shoulders. He then starts speaking in the ants tongue. You feel stronger momentarily.* —Divine spirit, don't hesitate.",
        "options": []
    },
    "refuse": {
        "description": "—I am deeply saddened by your words. I hope that you will change your mind. *Ah'Ruhn turns away and goes to his patients.*",
        "options": []
    },
    "changeMindAboutLadybug": {
        "description": "—Divine spirit, have you changed your mind about my proposal?",
        "options": [
            {
                "label": "Accept.",
                "key": "accept",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "kill-ladybug"
                }
            },
            {
                "label": "Refuse.",
                "key": "refuse"
            },
            {
                "label": "Tell me more about this ladybug.",
                "key": "ladybugTellMore"
            },
            {
                "label": "Tell me more about the colony.",
                "key": "colonyTellMore"
            },
            {
                "label": "Tell me more about yourself.",
                "key": "shamanTellMore"
            },
            {
                "label": "Present the evidence of his betrayal.",
                "key": "evidenceAgainstShaman",
                "optionConditions": {
                    "quest": {
                        "id": "ants-and-queens",
                        "state": "found-evidence-against-shaman"
                    }
                }
            }
        ]
    },
    "isLadybugKilled": {
        "description": "—Divine spirit, have you done what must be done?",
        "options": [
            {
                "label": "Ladybug is no more.",
                "key": "ladybugKilled",
                "optionConditions": {
                    "npc": {
                        "id": "jaemah-roseborn-ladybug",
                        "isAlive": false
                    }
                }
            },
            {
                "label": "Present the evidence of his betrayal.",
                "key": "evidenceAgainstShaman",
                "optionConditions": {
                    "quest": {
                        "id": "ants-and-queens",
                        "state": "found-evidence-against-shaman"
                    }
                }
            },
            {
                "label": "Not yet.",
                "key": "ladybugNotKilled"
            }
        ]
    },
    "ladybugNotKilled": {
        "description": "—Don't hesitate.",
        "options": []
    },
    "ladybugKilled": {
        "description": "—Divine spirit, you are truly a savior! You have our eternal gratitude. There is one more obstacle that we must overcome. The queen is oblivious to what's going on here, but she must hear about the situation. Her personal guard, warchief Ag'Ra, doesn't allow anyone to enter her chambers. Challenge her to a death fight, so we can reach the queen.",
        "options": [
            {
                "label": "Tell me more about the warchief.",
                "key": "warchiefTellMore"
            },
            {
                "label": "Say that you will see into it.",
                "key": "acceptKillWarchief",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "kill-warchief"
                }
            },
            {
                "label": "Refuse to kill the warchief.",
                "key": "refuseKillWarchief"
            }
        ]
    },
    "warchiefTellMore": {
        "description": "—Ag'Ra is the queen's elite guard. She created this formidable female ant in her womb to have a guard who will never succumb to betrayal. That is the problem. Ag'Ra heeds only the orders of the queen. I resent to say this, but the only way is to make her perish.",
        "options": [
            {
                "label": "Say that you will see into it.",
                "key": "acceptKillWarchief",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "kill-warchief"
                }
            },
            {
                "label": "Refuse to kill the warchief.",
                "key": "refuseKillWarchief"
            }
        ]
    },
    "acceptKillWarchief": {
        "description": "—I must warn you that the warchief is a mighty warrior. I will put a spell on her when you engage into battle with her. It will assist you. Now, let's do what must be done.",
        "options": []
    },
    "isWarchiefDead": {
        "description": "—Is the mighty warchief dead?",
        "options": [
            {
                "label": "She is not a threat anymore.",
                "key": "warchiefKilled",
                "optionConditions": {
                    "npc": {
                        "id": "agra-warchief",
                        "isAlive": false
                    }
                }
            },
            {
                "label": "It will happen soon.",
                "key": "happenSoon"
            }
        ]
    },
    "happenSoon": {
        "description": "—Make haste.",
        "options": []
    },
    "refuseKillWarchief": {
        "description": "—I hope you will change your mind. You have already done enough for us and could do more.",
        "options": []
    },
    "changeMindAboutWarchief": {
        "description": "—Divine spirit, are you ready to finish what we started?",
        "options": [
            {
                "label": "Say that you will see into it.",
                "key": "acceptKillWarchief",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "kill-warchief"
                }
            },
            {
                "label": "Say that you must proceed on your main quest.",
                "key": "refuseKillWarchief"
            }
        ]
    },
    "warchiefKilled": {
        "description": "*Ah'Ruhn claps his hands in excitement.* —Thank you, divine spirit. Now I must talk to the queen. Please wait for me here.",
        "options": [
            {
                "label": "Wait.",
                "key": "wait"
            }
        ]
    },
    "wait": {
        "description": "You wait for sometime before you hear commotion outside. You go out of the shack and see a bloodshed. In the narrow streets, between the shacks, on the wooden palisade the colony ants are fighting each other. By a closer look you realize that the fighting is going on between the diseased and uninfected ants. Unfortunately, the diseased ants are taking over. The shaman is standing next to the queen, rallying the infected residents.",
        "options": [
            {
                "label": "Try to kill the shaman.",
                "key": "death"
            },
            {
                "label": "Demand explanation.",
                "key": "explanation"
            },
            {
                "label": "Retreat from the colony.",
                "key": "leave",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "aftermath-colony-infected"
                }
            }
        ]
    },
    "death": {
        "description": "*You are approaching the shaman, your weapon ready*. —Divine spirit, there is no turning back. The deed is done. Kill the knight! *Suddenly all attention is turned to you and you find yourself surrounded by numerous infected ants. You fight bravely, but the ants are ferocious. They start consuming you alive bit by bit. You see your own flesh in the hand of the insane. When an ant rips off your forearm, you no longer have will to continue fighting. The ants consume your body*.",
        "options": []
    },
    "explanation": {
        "description": "—Divine spirit, what explanation do you need? See for yourself. We are the subjects of the new King. He will dethrone the old gods and establish a new kingdom. Perhaps, there will be a place for you, some reward for your help here. But now, divine spirit, the savior of the colony, you must leave. I take mercy on you, but you have only one chance.",
        "options": [
            {
                "label": "Try to kill the shaman.",
                "key": "death"
            },
            {
                "label": "Leave.",
                "key": "leave",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "aftermath-colony-infected"
                }
            },
            {
                "label": "Who is this new god?",
                "key": "newGod"
            },
            {
                "label": "Tell the shaman what you have learnt from the moss.",
                "key": "blasphemy",
                "optionConditions": {
                    "dialogueOutcome": {
                        "id": "ant-col-ancient-moss",
                        "outcome": "acceptMossBlessing"
                    }
                }
            }
        ]
    },
    "newGod": {
        "description": "—Go to the altar to the west of here and see for yourself.",
        "options": [
            {
                "label": "Try to kill the shaman.",
                "key": "death"
            },
            {
                "label": "Leave.",
                "key": "leave",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "aftermath-colony-infected"
                }
            },
            {
                "label": "Tell the shaman what you have learnt from the moss.",
                "key": "blasphemy",
                "optionConditions": {
                    "dialogueOutcome": {
                        "id": "ant-col-ancient-moss",
                        "outcome": "acceptBlessing"
                    }
                }
            }
        ]
    },
    "blasphemy": {
        "description": "—Blasphemy! How dare you say that about my King! *Ah'Ruhn is furious*. You will suffer!",
        "options": [
            {
                "label": "Defend yourself.",
                "key": "death"
            },
        ]
    },
    "leave": {
        "description": "—Do not come back here. This colony is not part of your domain from now on.",
        "options": []
    },
    "postInfecting": {
        "description": "—Knight, I warned you against coming back to my colony. There is no place for you here. You will die now.",
        "options": [
            {
                "label": "Try to kill the shaman.",
                "key": "death"
            }
        ]
    },
    "evidenceAgainstShaman": {
        "description": "—They are saying so because they are afraid. They do not want to believe in gods. They feel abandoned. They feel betrayed by their spiritual leader who is himself powerless against the epidemic. I work day and night to tend for the infected, and all in vain. If someone has to give up, I should be the first, but I will never do that. I am the shaman of this colony and I will take care of it till the end.",
        "options": [
            {
                "label": "I believe you.",
                "key": "believeShaman"
            },
            {
                "label": "I don't believe you.",
                "key": "notBelieveShaman"
            },
            {
                "label": "You sound like you haven't told the whole story.",
                "key": "notWholeStory"
            }
        ]
    },
    "believeShaman": {
        "description": "—Ancient spirits guide me. I am but an instrument in their hands. Their purpose is my purpose.",
        "options": [
            {
                "label": "I'll come back later.",
                "key": "comeLater"
            }
        ]
    },
    "notBelieveShaman": {
        "description": "—Ancient spirits guide me. I am but an instrument in their hands. Their purpose is my purpose.",
        "options": [
            {
                "label": "You sound like you haven't told the whole story.",
                "key": "notWholeStory"
            },
            {
                "label": "Sentence the shaman to death for his betrayal.",
                "key": "npcCombat",
                "initCombat": {
                    "id": "ah-ruhn-ant-shaman"
                }
            }
        ]
    },
    "notWholeStory": {
        "description": "*Ah'Ruhn sighs wearily.* —You want to hear the whole story. Let it be. Five cycles ago a new king took the throne in Chyceen. In the same cycle the demonic disease penerated the kingdom. It came from the east, and we were among the first to have been hit. At that time I prayed, I went to Chyceen to ask for help, but the new king didn't heed me. I left ignored. Then in winter I slept. And I saw him.",
        "options": [
            {
                "label": "Keep listening.",
                "key": "keepListening"
            },
            {
                "label": "Enough. Sentence the shaman to death for his betrayal.",
                "key": "npcCombat",
                "initCombat": {
                    "id": "ah-ruhn-ant-shaman"
                }
            }
        ]
    },
    "keepListening": {
        "description": "—Yes, I saw Him. The new King, the rightful King who will establish a new kingdom on the ambers of the ancient. He told me everything. It wasn't a dream, but a sublime vision. I felt blissfull, gleefull. My new King also granted me with the divine disease. That's not what you think it is. You call it demonic, but it is divine. I don't feel the presence of gods, nor my former queen. Only His pure, divine, blissful power. He will save us.",
        "options": [
            {
                "label": "Sentence the shaman to death for his betrayal.",
                "key": "npcCombat",
                "initCombat": {
                    "id": "ah-ruhn-ant-shaman"
                }
            },
            {
                "label": "The disease will kill you.",
                "key": "disease"
            },
            {
                "label": "Who is your new 'king'?",
                "key": "newKing"
            }
        ]
    },
    "newKing": {
        "description": "—You do not deserve to know the true name of my King. He has many followers, and our numbers are growing. And each day we are getting stronger. This colony will join my King. He will save it. And the likes of you will burn in his chastising fire.",
        "options": [
            {
                "label": "Sentence the shaman to death for his betrayal.",
                "key": "npcCombat",
                "initCombat": {
                    "id": "ah-ruhn-ant-shaman"
                }
            },
            {
                "label": "The disease will kill you.",
                "key": "disease"
            }
        ]
    },
    "disease": {
        "description": "—I will die, but I will be reborn into a new form. The form that is part of the King.",
        "options": [
            {
                "label": "Sentence the shaman to death for his betrayal.",
                "key": "npcCombat",
                "initCombat": {
                    "id": "ah-ruhn-ant-shaman"
                }
            },
            {
                "label": "Tell the shaman what you have learnt from the moss.",
                "key": "moss",
                "optionConditions": {
                    "dialogueOutcome": {
                        "id": "ant-col-ancient-moss",
                        "outcome": "acceptMossBlessing"
                    }
                }
            }
        ]
    },
    "moss": {
        "description": "Ah'Ruhn wants to say something, but stops mid-sentence. You look at his face and notice how old he is. His face is scared by wrinkles, his antanae are covered in colorless hair. He sits heavily on the floor. —I hear you, my queen. Yes, I still remember the warmth of your womb and the joy of being born. I went astray because I wanted to save us. There is no forgiveness for me I know. I know. *The shaman bursts into tears. After a minute he stands up.* —Leave unless you want to burn with me. *He falls silent.*.",
        "options": [
            {
                "label": "Leave hastily.",
                "key": "leaveHastily",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "shaman-killed"
                },
                "npcDeath": {
                    "id": "ah-ruhn-ant-shaman",
                    "isAlive": false
                }
            },
            {
                "label": "We can find the cure. The colony needs you.",
                "key": "findCure",
                "requirements": {
                    "reputation": 8
                },
                "rejection": "Ah'Ruhn doesn't heed your words."
            }
        ]
    },
    "findCure": {
        "description": "—I have done too much damage to my people. I want to cleanse my sins in fire. Now go!",
        "options": [
            {
                "label": "Leave hastily.",
                "key": "leaveHastily",
                "quest": {
                    "id": "ants-and-queens",
                    "state": "shaman-killed"
                },
                "npcDeath": {
                    "id": "ah-ruhn-ant-shaman",
                    "isAlive": false
                }
            }
        ]
    },
    "leaveHastily": {
        "description": "You leave the shack at the last moment before it gets engulfed in flames. The ants mobilize the put out the fire. You watch the traitor burn. After the fire is extinguished, you can see only dark and white coals. That's all that has been left from Ah'Ruhn the Shaman.",
        "options": []
    },
    "npcCombat": {
        "description": "—I will not turn myself in! *Ah'Ruhn prepares to fight.*",
        "options": []
    },
    "comeLater": {
        "description": "Ah'Ruhn doesn't say anything.",
        "options": []
    }
}