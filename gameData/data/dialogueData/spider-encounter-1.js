export const dialogueData =   {
    "id": "spider-encounter-1",
    "type": "dialogue",
    "requirements": {},
    "rejection": "",
    "start": "greetings",
    "entryPoints": [
        {
            "state": "spiderEscape",
            "stateConditions": {
                "anyOf": [
                    {
                        "eventOutcome": "escape"
                    },
                    {
                        "eventOutcome": "leave"
                    },
                    {
                        "eventOutcome": "refuseInvestigate"
                    }
                ]
            }
        },
        {
            "state": "agreedToInvestigate",
            "stateConditions": {
                "anyOf": [
                    {
                        "eventOutcome": "investigate"
                    }
                ]
            }
        },
        {
            "state": "agreedToInvestigate",
            "stateConditions": {
                "anyOf": [
                    {
                        "eventOutcome": "appreciate"
                    }
                ]
            }
        }
    ],
    "greetings": {
        "description": "You can hear, but rather sense that something or someone is present and watching you closely. Looking around you notice no one.",
        "options": [
            {
                "label": "Show yourself!",
                "key": "demand"
            },
            {
                "label": "Greetings! I am a knight of the Pine Order",
                "key": "introduce"
            },
            {
                "label": "Wait patiently",
                "key": "wait"
            }
        ]
    },
    "demand": {
        "description": "—Impatient visitor. You come to my abode and demand something. How impetious. Let me have a closer look at you. *You see a large shadow descending from the ceiling.* —Ah, young knight. Yes, I was expecting you. Perhaps my dinner should be postponed for a while. Tell me, what is it that you have come for?",
        "options": [
            {
                "label": "I want to talk.",
                "key": "talk",
                "quest": {
                    "id": "spider_threats",
                    "state": "mercy"
                }
            },
            {
                "label": "I am here to slay you.",
                "key": "slay",
                "quest": {
                    "id": "spider_threats",
                    "state": "execute"
                }
            },
            {
                "label": "I haven’t decided yet.",
                "key": "hesitation"
            }
        ]
    },
    "introduce": {
        "description": "You see a large shadow descending from the ceiling. —Ah, young knight. Yes, I was expecting you. Perhaps my dinner should be postponed for a while. Tell me, what is it that you have come for?",
        "options": [
            {
                "label": "I want to talk.",
                "key": "talk",
                "quest": {
                    "id": "spider_threats",
                    "state": "mercy"
                }
            },
            {
                "label": "I am here to slay you.",
                "key": "slay",
                "quest": {
                    "id": "spider_threats",
                    "state": "execute"
                }
            },
            {
                "label": "I haven’t decided yet.",
                "key": "hesitation"
            }
        ]
    },
    "wait": {
        "description": "After waiting for some time in intimidating silence you see a large shadow descending from the ceiling. —Ah, young knight. Yes, I was expecting you. Perhaps my dinner should be postponed for a while. Tell me, what is it that you have come for?",
        "options": [
            {
                "label": "I want to talk.",
                "key": "talk"
            },
            {
                "label": "I am here to slay you.",
                "key": "slay",
                "quest": {
                    "id": "spider_threats",
                    "state": "execute"
                }
            },
            {
                "label": "I haven’t decided yet.",
                "key": "hesitation"
            }
        ]
    },
    "talk": {
        "description": "—I must admit I feel joy hearing you say that. I spend most of my time in solitude. The ones I usually talk to are my preys, but, as you might have guessed, they are not much of interlocutors. But let us first be properly introduce. My name is Heildin the Wise. And this is my humble keep where I dwell away from the rest of the world.",
        "options": [
            {
                "label": "Politely introduce yourself.",
                "key": "politely"
            },
            {
                "label": "Refuse to introduce yourself",
                "key": "refuse"
            },
            {
                "label": "Demand spider leave this land.",
                "key": "demandLeave"
            }
        ]
    },
    "politely": {
        "description": "—Welcome to my home, young knight of the Pine Order. In my travels I have seen your comrades. I fought alongside Sir Grassmore at the Battle of Gleaming Beach. He led us into battle against the water people, my half-brothers. With my own eyes I saw Sir Grassmore striking down the water people's chief. They scattered, and their remains were cleared after the tide. It was sublime.",
        "options": [
            {
                "label": "Continue listening",
                "key": "listen"
            },
            {
                "label": "Interrupt and ask about Heildin’s current business.",
                "key": "business"
            },
            {
                "label": "Demand spider leave this land.",
                "key": "demandLeave"
            }
        ]
    },
    "refuse": {
        "description": "—I know who you are anyway, knight of the Pine Order. In my travels I have seen your comrades. I fought alongside Sir Grassmore at the battle of Gleaming Beach. He led us into battle against the water people, my half-brothers. With my own eyes I saw Sir Grassmore striking down the water people's chief. They scattered, and their remains were cleared after the tide. It was sublime.",
        "options": [
            {
                "label": "Continue listening",
                "key": "listen"
            },
            {
                "label": "Interrupt and ask about Heildin’s current business.",
                "key": "business"
            },
            {
                "label": "Demand spider leave this land.",
                "key": "demandLeave"
            }
        ]
    },
    "demandLeave": {
        "description": "—How preposterous! And how utterly mindless of you. You either forgot that only a spider can evict another spider or you are playing a fool. Either way I do not appreciate it. I was of higher respect of you.",
        "options": [
            {
                "label": "What do you mean?",
                "key": "business"
            },
            {
                "label": "I was assigned to get rid of you.",
                "key": "getRid"
            }
        ]
    },
    "listen": {
        "description": "—And after the battle, Sir Grassmore himself decorated me with a medal I have been proudly wearing till this day. *He touches a faded medal on his chest.* He told me to look for his folks. This is what I devoted my life to. This is what I have been doing lately.",
        "options": [
            {
                "label": "What have you been doing?",
                "key": "business"
            },
            {
                "label": "Demand spider leave this land.",
                "key": "demandLeave"
            }
        ]
    },
    "business": {
        "description": "The spider comes closer. You can now see his old half-blind eyes, some of which became completely white, and a long, but sparse white beard. All his body used to be coal-black, but now it’s dark-gray. Heildin lowers his voice and speaks. —Unlike you, young knight, I dream in winter. My dreams used to be tranquil and uneventful, but since I moved to this land, my dreams have changed. Five winters I see the same dream over and over. I see a shapeless devourer, a deceiver, shapeshifter. I try to hunt it, but it eludes me every time. Something flies, but I cannot see it. I set traps, I wait, I hunt, but all in vain. Something evil, invisible, too quick to be caught is residing here. I know for sure that it’s a powerful shapeshifter. And it’s likely diseased. But as to its plans I am yet to figure it out.",
        "options": [
            {
                "label": "How do you know?",
                "key": "know"
            }
        ]
    },
    "know": {
        "description": "—I have hunted a number of drowsy ants from the nearby colony. I have seen their insides. Some of them were diseased. But some of them were not. Last cycle, I saw them demolishing an ancient altar down by the river. That doesn’t seem like their usual behavior. What do you think?",
        "options": [
            {
                "label": "Indeed it sounds unusual. I need to investigate this.",
                "key": "investigate",
                "quest": {
                    "id": "ants_and_queens",
                    "state": "start"
                }
            },
            {
                "label": "There might be other reasons behind it. I won't side with you.",
                "key": "refuseInvestigate"
            },
            {
                "label": "Demand spider leave this land.",
                "key": "demandLeave"
            }
        ]
    },
    "investigate": {
        "description": "—That is a wise decision! Go to the small ant colony south of here. See it for yourself. But be careful, the deceiver is somewhere out there. Take care, young knight. Heildin the Wise disappears in the dark corners of the room. You no longer feel his presence.",
        "characteristics": {
            "reputation": 1
        },
        "options": []
    },
    "refuseInvestigate": {
        "description": "—That is an unwise decision! I hope you will learn how to be more sagacious. Take care, young knight. *Heildin the Wise disappears in the dark corners of the room. You no longer feel his presence.*",
        "characteristics": {
            "reputation": -1
        },
        "options": [
            {
                "label": "Leave.",
                "key": "leave"
            }
        ]
    },
    "getRid": {
        "description": "—You might try, but I give you my warning that I will not succumb to you easily.",
        "options": [
            {
                "label": "Enough talk. I will slay you!",
                "key": "slay",
                "quest": {
                    "id": "spider_threats",
                    "state": "execute"
                }
            },
            {
                "label": "Lady Butterfly tasked me to deal with you.",
                "key": "lady"
            },
            {
                "label": "In the name of the law, confess what you have been doing here.",
                "key": "business"
            }
        ]
    },
    "slay": {
        "description": "-Such an unwise decision. Not many of your comrades have fallen victims of a spider.",
        "options": [
            {
                "label": "Fight Heildin.",
                "key": "death"
            }
        ]
    },
    "lady": {
        "description": "Heildin thinks for a moment. —Young knight, sheath your weapon otherwise you leave me no choice.",
        "options": [
            {
                "label": "Never! Defend yourself.",
                "key": "slay",
                "quest": {
                    "id": "spider_threats",
                    "state": "execute"
                }
            },
            {
                "label": "Sheath your spear.",
                "key": "escape"
            }
        ]
    },
    "escape": {
        "description": "Heildin the Wise suddenly disappears in the dark corners of the room. You no longer feel his presence.",
        "characteristics": {
            "reputation": -1,
            "prayer": -1
        },
        "options": []
    },
    "death": {
        "description": "In one mirage-like leap Heildin attacks you. Next thing you realize is your body burning within, but your limbs are numb. In great pain you watch the spider knitting his web around you. That was the last thing you saw in your life.",
        "options": []
    },
    "hesitation": {
        "description": "-Do not waste my time. Are you a visitor or dinner? Introduce yourself.",
        "options": [
            {
                "label": "Politely introduce yourself.",
                "key": "politely"
            },
            {
                "label": "Refuse to introduce yourself",
                "key": "refuse"
            },
            {
                "label": "Demand spider leave this land.",
                "key": "demandLeave"
            }
        ]
    },
    "spiderEscape": {
        "description": "You don't sense Heldin's presence anymore. The place now feels completely deserted.",
        "options": [
            {
                "label": "Leave.",
                "key": "leave"
            }
        ]
    },
    "agreedToInvestigate": {
        "description": "-I will assist you with all my powers.",
        "options": [
            {
                "label": "Greatly appreciate it.",
                "key": "appreciate"
            }
        ]
    },
    "appreciate": {
        "description": "Heildin nods back.",
        "options": [],
        "characteristics": {}
    },
    "leave": {
        "description": "You leave.",
        "options": [],
        "characteristics": {}
    },
    "finalOutcome": {
        "description": "",
        "characteristics": {}
    }
}