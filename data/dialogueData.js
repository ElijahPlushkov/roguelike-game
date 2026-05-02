export const dialogueDataChapter1 = {
    "id": "chapter_1_dialogues",
    "dialogues": [
        {
            "id": "ant_nomad",
            "type": "dialogue",
            "requirements": {},
            "rejection": "",
            "start": "greetings",
            "greetings": {
                "description": "-On a small boulder you see an old ant sitting leaning on a yellow pine needle. He greets you quietly, but kindly. --Good morning, young knight. What can an old ant like me do for you?",
                "options": [
                    {
                        "label": "Ask about your grasshopper steed.",
                        "key": "steed"
                    },
                    {
                        "label": "Who are you?",
                        "key": "identity"
                    },
                    {
                        "label": "How can I reach the Chyceen border?",
                        "key": "border"
                    },
                    {
                        "label": "Ignore and pass by.",
                        "key": "ignore"
                    }
                ]
            },
            "steed": {
                "description": "-Sorry, knight, but I didn't see your steed.",
                "options": [
                    {
                        "label": "Who are you?",
                        "key": "identity"
                    },
                    {
                        "label": "Ask about the border.",
                        "key": "border"
                    },
                    {
                        "label": "Share some pollen with the old ant. Thank him and leave.",
                        "key": "goodbye"
                    }
                ]
            },
            "identity": {
                "description": "-I am an ant without a colony. I wander these lands for many cycles.",
                "options": [
                    {
                        "label": "Why do you not have a colony?",
                        "key": "backstory"
                    },
                    {
                        "label": "Ask about your steed.",
                        "key": "steed"
                    },
                    {
                        "label": "Ask about the border.",
                        "key": "border"
                    }
                ]
            },
            "border": {
                "description": "-Follow the road till you see an abandoned outpost. Don't go through it because it is now occupied by a very unpleasant spider. Take a longer route around the lake passing by an ant colony. Then you will see and old altar, but it's closed for now and I try to avoid this place. Next you will see a large bridge that leads to the border.",
                "options": [
                    {
                        "label": "Thank him and leave.",
                        "key": "goodbye"
                    },
                    {
                        "label": "Ask about your steed.",
                        "key": "steed"
                    }
                ]
            },
            "backstory": {
                "description": "-My colony was infected by the evil spirit. My beloved queen changed overnight and was not herself anymore. This spirit was very powerful. Myself and a group of others were driven out of our home. And you know how hard it is for us. My siblings died of grief. Our bond to the queen was removed. Only I have survived destined to live in solitude because I am not able to join other colonies.",
                "options": [
                    {
                        "label": "Express sympathy and thank him for sharing his story.",
                        "key": "goodbye"
                    },
                    {
                        "label": "Share some pollen with the old ant. Thank him and leave.",
                        "key": "goodbye"
                    },
                    {
                        "label": "Ask about your steed.",
                        "key": "steed"
                    }
                ]
            },
            "goodbye": {
                "description": "-Have a nice day, young knight.",
                "options": [],
                "characteristics": {
                    "reputation": 1
                }
            },
            "ignore": {
                "description": "You don't pay any attention to the old beggar deciding to venture forward.",
                "options": [],
                "characteristics": {
                    "reputation": -1
                }
            },
            "finalOutcome": {
                "description": "",
                "characteristics": {}
            }
        },
        {
            "id": "butterfly_encounter_1",
            "type": "dialogue",
            "requirements": {},
            "rejection": "",
            "start": "greetings",
            "greetings": {
                "description": "A quite flapping sound is heard among the thick trees. You feel a cold gust of wind, a remnant of autumn and winter. From above the tree tops a shadow appears on the dirt road in front of you. You look up and see a butterfly approaching. She lands a few steps ahead of you causing dust particles and tiny pebbles dart away as if in great haste they were making way for their lady.",
                "options": [
                    {
                        "label": "Continue.",
                        "key": "continue"
                    }
                ]
            },
            "continue": {
                "description": "The lady butterfly looks particularly stunning. Her robes are exquisite and adorned with golden and silver embroidery. With her wings glimmering in the morning sun, she approaches you. Her eyes are concealed beneath a veil, but you feel that the lady is examining you closely.",
                "options": [
                    {
                        "label": "Wait till the lady speaks.",
                        "key": "wait"
                    },
                    {
                        "label": "Greet the noble lady first.",
                        "key": "speak"
                    },
                    {
                        "label": "Examine the lady more closely.",
                        "key": "examine"
                    }
                ]
            },
            "wait": {
                "description": "—Sir knight, you must be exhausted after a long journey. Is this the reason why you do not greet me according to my status? But I forgive you. Tell me, what is your quest here?",
                "options": [
                    {
                        "label": "Tell the lady about your objective in Chyceen.",
                        "key": "tell"
                    },
                    {
                        "label": "Politely refuse.",
                        "key": "refuse"
                    }
                ]
            },
            "speak": {
                "description": "You greet the lady with a warm, but courteous smile and a slight bow. In the way you had been taught at home. She accepts your courtesy and speaks. – Greetings to you, sir knight. It’s always a pleasure to meet someone who has learnt his manners in this savage lands. Tell me, what is your quest here?",
                "options": [
                    {
                        "label": "Tell the lady about your objective in Chyceen.",
                        "key": "tell"
                    },
                    {
                        "label": "Politely refuse.",
                        "key": "refuse"
                    }
                ]
            },
            "examine": {
                "description": "You take your time to examine the lady more closely. Her blond hair is adorned with a silver diadem that shines like a rainbow. Full lips pressed tight, but seem to be on the verge of giving strict orders. The lady appears to be in a great shape, although displaying boastful femininity, she has not lost her grace and ease of each step and flap. Her high boots might be the lease graceful thing as they are covered with dew and dust. The lady has definitely been on the road for a while. –Sir knight, you must be exhausted after a long journey. You have lost your manners somewhere along the road. Even in this god-forsaken lands, there is always a place for courtesy. But I forgive you. Tell me, what is your quest here?",
                "options": [
                    {
                        "label": "Tell the lady about your objective in Chyceen.",
                        "key": "tell"
                    },
                    {
                        "label": "Politely refuse.",
                        "key": "refuse"
                    }
                ]
            },
            "tell": {
                "description": "You share with the lady some details about your quest in Chyceen. She seems pleased. A faint smile appears on her lips. –How courageous of you to venture forth into these lands. I have always admired your order’s perseverance. But let me warn you, sir knight. I have been exploring these lands for some time and I can tell you that terrible things are happening here. Let me share something with you in exchange. In one of the abandoned watchtowers down the road dwells a spider. He has been seen hunting ants from the nearby colony and I urge you to constantly be on your guard. Should you meet the villain, it’s to your own judgement as how to deal with him. He is powerful indeed. You need allies to overwhelm him. I guess the local ants are sick and tired of him.",
                "options": [
                    {
                        "label": "Ask the lady to share more information about the spider.",
                        "key": "spider"
                    },
                    {
                        "label": "Ask the lady about the ant colony",
                        "key": "colony"
                    },
                    {
                        "label": "Thank lady for sharing information with you",
                        "key": "thank"
                    }
                ]
            },
            "thank": {
                "description": "–I am glad to share useful information with you.",
                "options": [
                    {
                        "label": "Ask the lady to share more information about the spider.",
                        "key": "spider"
                    },
                    {
                        "label": "Ask the lady about the ant colony",
                        "key": "colony"
                    }
                ]
            },
            "refuse": {
                "description": "As a member of the saint order you should never disclose your intentions — this what you tell the lady. —I didn’t expect anything else from a knight like yourself. I am glad you value reliability and loyalty. Hard to find such assets here. It seems that I can share something with you. I have been exploring these lands for some time and I can tell you that terrible things are happening here. Let me share something with you in exchange. In one of the abandoned watchtowers down the road dwells a spider. He has been seen hunting ants from the nearby colony and I urge you to constantly be on guard. Should you meet the villain, it’s to your own judgement as how to deal with him. He is powerful indeed. You need allies to overwhelm him. I guess the local ants are sick and tired of him.",
                "options": [
                    {
                        "label": "Ask the lady to share more information about the spider.",
                        "key": "spider"
                    },
                    {
                        "label": "Ask the lady about the ant colony.",
                        "key": "colony"
                    }
                ]
            },
            "spider": {
                "description": "—I have never had a chance to meet him personally, but I have solid evidence of his existence. And even more solid evidence of his crimes. He hunts the local ants and has already murdered quite a few of them. The ants have always been loyal to the crown — it would be injustice to leave them alone without protection. I cannot command you as you are not my subordinate, but I implore you to put the ants’ miseries to an end. They do not deserve such ill fate.",
                "options": [
                    {
                        "label": "Tell the lady that you will deal with the spider.",
                        "key": "dealSpider",
                        "quest": {
                            "id": "spider_threats",
                            "state": "start"
                        }
                    },
                    {
                        "label": "Tell the lady that you want to focus on your quest.",
                        "key": "noDeal"
                    },
                    {
                        "label": "Ask the lady about the ant colony.",
                        "key": "colony"
                    }
                ]
            },
            "dealSpider": {
                "description": "The lady claps her hands seemingly excited. She leaps in the air levitating for just a second. —I knew you couldn’t refuse me! Sir knight, how can I aid you in your journey? Which power do you rely on? Tell me and I will give you my blessing. This is not much, but I wager my hope it will help you.",
                "options": [
                    {
                        "label": "You rely on your military training.",
                        "key": "might",
                        "characteristics": {
                            "might": 1
                        }
                    },
                    {
                        "label": "You prefer to set conflicts with diplomacy.",
                        "key": "reputation",
                        "characteristics": {
                            "reputation": 1
                        }
                    },
                    {
                        "label": "Religion is your major guidance and source of power.",
                        "key": "prayer",
                        "characteristics": {
                            "prayer": 1
                        }
                    }
                ]
            },
            "noDeal": {
                "description": "The lady lowers her wings in great disappointment. —You can’t survive for long without allies, sir knight. I hope next time you will be more flexible and observant. Farewell.",
                "characteristics": {
                    "reputation": -1
                },
                "options": []
            },
            "might": {
                "description": "—May your spear be trustworthy and your hands won’t shake. It was a pleasure to talk to you. Now I must go. We will met again soon.",
                "options": [
                    {
                        "label": "Bid farewell",
                        "key": "farewell"
                    }
                ]
            },
            "reputation": {
                "description": "—May your tongue speaks silver words. It was a pleasure to talk to you. Now I must go. We will met again soon.",
                "options": [
                    {
                        "label": "Bid farewell",
                        "key": "farewell"
                    }
                ]
            },
            "prayer": {
                "description": "—May the gods of justice be with you. It was a pleasure to talk to you. Now I must go. We will met again soon.",
                "options": [
                    {
                        "label": "Bid farewell",
                        "key": "farewell"
                    }
                ]
            },
            "colony": {
                "description": "—The ants, poor things, they suffer from the spider’s murderous assaults. Their queen is still weak after winter, so she cannot provide sufficient protection. Many of the ants go astray since their connection to the queen is also weak. That’s when they fall victims to the devil. You might want to visit their keep. Go south past the abandoned tower. Keep to the right when the road forks.",
                "options": [
                    {
                        "label": "Tell the lady that you will deal with the spider.",
                        "key": "dealSpider",
                        "quest": {
                            "id": "spider_threats",
                            "state": "start"
                        }
                    },
                    {
                        "label": "Tell the lady that you want to focus on your quest.",
                        "key": "noDeal"
                    }
                ]
            },
            "farewell": {
                "description": "—Farewell. I will be looking forward to our next meeting, sir knight.",
                "options": [],
                "characteristics": {}
            },
            "finalOutcome": {
                "description": "",
                "characteristics": {}
            }
        },
        {
            "id": "dead_steed",
            "type": "dialogue",
            "requirements": {},
            "rejection": "",
            "start": "discovery",
            "quest": {
                "id": "find_steed",
                "state": "find_murderer"
            },
            "discovery": {
                "description": "Suddenly, you see a shiny object on the dusty road. You come closer only to find a familiar badge that was attached to your grasshopper steed's saddle. You look around and notice a patch of flattened grass leading away from the road. You follow the path. An unpleasant stench touches your nose. There is something lying in the grass. Upon closer examination you realize that you are looking at your steed's carcass. The internals are gone and a large ripping wound is visible on the stomach. The steed's legs are twisted. One of the antennas is ripped out.",
                "options": [
                    {
                        "label": "Examine the wound more closely.",
                        "key": "wound"
                    },
                    {
                        "label": "Look around for clues.",
                        "key": "clues"
                    },
                    {
                        "label": "Search for your belongings.",
                        "key": "belongings"
                    },
                    {
                        "label": "Leave the scene as fast as possible.",
                        "key": "noExamination"
                    }
                ]
            },
            "wound": {
                "description": "It seems that the wound was made with claws or a weapon resembling a pickaxe.",
                "options": [
                    {
                        "label": "Look around for clues.",
                        "key": "clues"
                    },
                    {
                        "label": "Search for your belongings.",
                        "key": "belongings"
                    },
                    {
                        "label": "Leave.",
                        "key": "leave"
                    }
                ]
            },
            "clues": {
                "description": "You can't find any signs of resisting. The murderer must have put the grasshopper steed to sleep or demobilize him completely, so he couldn't fight back. What's more, you have been able to spot many ant footprints.",
                "options": [
                    {
                        "label": "Examine the wound more closely.",
                        "key": "wound"
                    },
                    {
                        "label": "Search for your belongings.",
                        "key": "belongings"
                    },
                    {
                        "label": "Leave.",
                        "key": "leave"
                    }
                ]
            },
            "belongings": {
                "description": "You are not able to find anything of value. All your equipment, so carefully selected and obtained for the journey, is gone.",
                "options": [
                    {
                        "label": "Look around for clues.",
                        "key": "clues"
                    },
                    {
                        "label": "Examine the wound more closely.",
                        "key": "wound"
                    },
                    {
                        "label": "Leave.",
                        "key": "leave"
                    }
                ]
            },
            "leave": {
                "description": "Heartbroken you leave your loyal friend behind. He was not destined to follow you this far.",
                "options": [],
                "characteristics": {
                    "prayer": 1
                }
            },
            "noExamination": {
                "description": "In haste or out of fear you leave your loyal follower's body.",
                "options": [],
                "characteristics": {
                    "prayer": -1
                }
            },
            "finalOutcome": {
                "description": "",
                "characteristics": {}
            }
        },
        {
            "id": "spider_encounter_1",
            "type": "dialogue",
            "requirements": {},
            "rejection": "",
            "start": "greetings",
            "greetings": {
                "description": "You hear, but rather sense that something or someone is present and watching you closely. Looking around there is no one.",
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
                "description": "—Impatient visitor. You come to my abode and demand something. How impetious. Let me have a closer look at my dinner. You see a large shadow descending from the ceiling. —Ah, young knight. Yes, I was expecting you. Perhaps my dinner should be postponed for a while. Tell me, what is it that you have come for?",
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
            "talk": {
                "description": "—I must admit I feel joy hearing you say it. I spend most of my time in solitude. The ones I usually talk to are my preys, but, as you might have guessed, they are not much of interlocutors. But let us first be properly introduce. My name is Heildin the Wise. And this is my humble keep where I dwell away from people.",
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
                "description": "—Welcome to my home, young knight of the Pine Order. In my travels I have seen your comrades. I even helped Nurzuuhl the Bright to defeat Routmort the Decaying. Yes, I was a young spider back then and I remember vividly the feeling of battle. It was sublime. I was near Nurzuuhl when he cast his spell and sent the vampire to the void. I saw it with my own eyes, young knight. I saw it.",
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
                "description": "—I know who you are anyway, knight of the Pine Order. In my travels I have seen your comrades. I even helped Nurzuuhl the Bright to defeat Routmort the Decaying. Yes, I was a young spider back then and I remember vividly the feeling of battle. It was sublime. I was near Nurzuuhl when he cast his spell and sent the vampire to the void. I saw it with my own eyes, young knight. I saw it.",
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
                "description": "—How preposterous! And how utterly mindless of you. You either forgot that only a spider can evict another spider or you are playing a fool. Iether way I do not appreciate. I was of higher respect of you.",
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
                "description": "—And after the battle Nurzuuhl himself decorated me with a medal I have been proudly wearing till this day. *He toches a faded medal on his chest* He told me to look for his folks and hunt any vampire I encounter. This is what I devoted my life to. This is what I have been doing lately.",
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
                "description": "The spider comes closer. You can now see his old half-blind eyes and a long white beard. All his body used to be coal-black, but now it’s dark-gray. Heildin lowers his voice and speaks. —Unlike you, young knight, I dream in winter. My dreams used to be tranquil and uneventful, but since I moved to this land, my dreams have changed. Five winters I see the same dream over and over. I see a shapeless devourer, a deceiver, shapeshifter. I try to hunt it, but it eludes me every time. Something flies, but I cannot see it. I set traps, I wait, I hunt, but all in vain. Something evil, invisible, too quick to be caught is residing here. I know for sure that it’s a powerful shapeshifter. And it’s likely diseased. But as to its plans I am yet to figure it out.",
                "options": [
                    {
                        "label": "How do you know?",
                        "key": "know"
                    }
                ]
            },
            "know": {
                "description": "—I have hunted a number of drowsy ants from the nearby colony. I have seen their insides. Some of them were diseased. But some of them not. Last cycle I saw them demolishing an ancient altar down by the river. That doesn’t seem like their usual behavior. What do you think?",
                "options": [
                    {
                        "label": "I need to investigate this.",
                        "key": "investigate",
                        "quest": {
                            "id": "ants_and_queens",
                            "state": "start"
                        }
                    },
                    {
                        "label": "Demand spider leave this land.",
                        "key": "demandLeave"
                    },
                    {
                        "label": "You confessed your crime of killing innocent ants. You will die.",
                        "key": "slay",
                        "quest": {
                            "id": "spider_threats",
                            "state": "execute"
                        }
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
            "finalOutcome": {
                "description": "",
                "characteristics": {}
            }
        },
        {
            "id": "spider_lair_dying_ant",
            "type": "dialogue",
            "requirements": {},
            "rejection": "",
            "start": "greetings",
            "greetings": {
                "description": "Among motionless ash carcasses you notice a slight movement. At first, you think to yourself that your eyes betray you and you simply want to see someone alive, but then you approach the source of movement. An ant is still alive. One of his arms is not entangled into web, so he gestures you to come closer. His lips move, he is trying to say something, but his words are uniteligeable.",
                "options": [
                    {
                        "label": "Lean forward to discern the speech.",
                        "key": "lean"
                    },
                    {
                        "label": "Examine the ant.",
                        "key": "examine",
                        "requirements": {
                            "might": 3
                        },
                        "rejection": "You don't notice anything suspicious."
                    },
                    {
                        "label": "Kill the ant.",
                        "key": "kill",
                        "requirements": {
                            "might": 4
                        },
                        "rejection": "You don't have the stength to end the creature's life."
                    },
                    {
                        "label": "Get down on your knees and pray.",
                        "key": "pray",
                        "requirements": {
                            "prayer": 3
                        },
                        "rejection": "The gods don't hear you from this dispicable place."
                    },
                    {
                        "label": "Leave the wretched being.",
                        "key": "leave"
                    }
                ]
            },
            "lean": {
                "description": "-Voice... speak... not queen... I'm scared. So deman... The ant dies.",
                "options": [
                    {
                        "label": "Examine the ant.",
                        "key": "examine",
                        "requirements": {
                            "might": 3
                        },
                        "rejection": "You don't notice anything suspicious."
                    },
                    {
                        "label": "Get down on your knees and pray.",
                        "key": "pray",
                        "requirements": {
                            "prayer": 3
                        },
                        "rejection": "The gods don't hear you from this dispicable place."
                    },
                    {
                        "label": "Leave the wretched being.",
                        "key": "leave"
                    }
                ]
            },
            "leave": {
                "description": "You turn away and leave. There is nothing you can do.",
                "characteristics": {},
                "options": []
            },
            "examine": {
                "description": "The ant's body displays signs of the demonic disease. It hasn't been able to consume all his body, but you can clear see small inflamed cysts on his head, neck, and shoulders. Perhaps the rest of his body that is covered by the web is also damaged. However his condition, as far as you know, is far from terminal. There is high chance he has got the parasite recently. Unfortunately, while you were examining the ant's condition, he died. There is nothing else you could do for the wretched being.",
                "options": [],
                "characteristics": {
                    "might": 1
                }
            },
            "kill": {
                "description": "A few years ago you would hardly believe that. Now you gather your strength and end the life of the wretched being. Freeing his soul and ending his earthly misery. Although the act is bloody, the gods approve your deed.",
                "options": [],
                "characteristics": {
                    "prayer": 1
                }
            },
            "pray": {
                "description": "You pray to the gods. Your intuition tells you to read a prayer of the mind however inappropriate it may seem. Suddenly you see a dream that is not entirely your own. It is a shared dream. A nightmare. A beast. A devour. A sleeper. Eluding. The vision lasts for one moment, but you feel fear putting his cold hands on your neck. You shake it off, but the unpleasant after taste remains.",
                "options": [],
                "characteristics": {
                    "prayer": 1
                }
            },
            "finalOutcome": {
                "description": "",
                "characteristics": {}
            }
        },
        {
            "id": "flies_camp",
            "type": "dialogue",
            "requirements": {
                "eventId": "flies_gang",
                "eventOutcome": true
            },
            "rejection": "The camp is guarded by a gang of flies. You are not welcomed.",
            "start": "entering",
            "entering": {
                "description": "You enter a little forest camp. Four twig-made shelters stand around a weak campfire. The coals are still hot, but there are no flames. The place smells of wet leaves and fresh pollen.",
                "options": [
                    {
                        "label": "Build a new fire.",
                        "key": "fire"
                    },
                    {
                        "label": "Search the shelters.",
                        "key": "shelters"
                    },
                    {
                        "label": "Examine the surrounding area.",
                        "key": "examine"
                    },
                    {
                        "label": "Leave.",
                        "key": "leave"
                    }
                ]
            },
            "fire": {
                "description": "You start a new fire. It's warm and cozy. The dry wood is crackling quietly. The day was hard.",
                "options": [
                    {
                        "label": "Cook food",
                        "key": "cook"
                    },
                    {
                        "label": "Search the shelters.",
                        "key": "shelters"
                    },
                    {
                        "label": "Leave.",
                        "key": "leave"
                    },
                    {
                        "label": "Examine the surrounding area.",
                        "key": "examine"
                    }
                ]
            },
            "cook": {
                "description": "You gather what little food you have from your bag and make a watery stew from berries, herbs and dry pumpkin seeds. Although it's not nourishing, it's hot and fragrant. You sip it slowly meditatively.",
                "options": [
                    {
                        "label": "Search the shelters.",
                        "key": "shelters"
                    },
                    {
                        "label": "Leave.",
                        "key": "leave"
                    },
                    {
                        "label": "Examine the surrounding area.",
                        "key": "examine"
                    }
                ]
            },
            "shelters": {
                "description": "Which shelter do you want to search?",
                "options": [
                    {
                        "label": "Go to the first shelter.",
                        "key": "shelter1"
                    },
                    {
                        "label": "Go to the second shelter.",
                        "key": "shelter2"
                    },
                    {
                        "label": "Go to the third shelter.",
                        "key": "shelter3"
                    },
                    {
                        "label": "Go to the fourth shelter.",
                        "key": "shelter4"
                    },
                    {
                        "label": "Examine the surrounding area.",
                        "key": "examine"
                    },
                    {
                        "label": "Leave.",
                        "key": "leave"
                    }
                ]
            },
            "shelter1": {
                "description": "You find nothing interesting.",
                "options": [
                    {
                        "label": "Go to the second shelter.",
                        "key": "shelter2"
                    },
                    {
                        "label": "Go to the third shelter.",
                        "key": "shelter3"
                    },
                    {
                        "label": "Go to the fourth shelter.",
                        "key": "shelter4"
                    },
                    {
                        "label": "Examine the surrounding area.",
                        "key": "examine"
                    },
                    {
                        "label": "Leave.",
                        "key": "leave"
                    }
                ]
            },
            "shelter2": {
                "description": "Searching through a bed of leaves, you find a small scroll. It's partly wet, but the letters are legible though written with an unsteady hand. It says: 'Not delay in barren lands spider hunt meet on outpost go fast'",
                "options": [
                    {
                        "label": "Go to the first shelter.",
                        "key": "shelter1"
                    },
                    {
                        "label": "Go to the third shelter.",
                        "key": "shelter3"
                    },
                    {
                        "label": "Go to the fourth shelter.",
                        "key": "shelter4"
                    },
                    {
                        "label": "Examine the surrounding area.",
                        "key": "examine"
                    },
                    {
                        "label": "Leave.",
                        "key": "leave"
                    }
                ]
            },
            "shelter3": {
                "description": "Hidden under a pile of pebbles, you managed to find a codebook of the Order of Scavengers. One cannot call it a book exactly, but rather a pamphlet with a list of rules to follow. Memorizing these rules will help any fly to join the order. Some pages are missing. Some are torn. You decide to keep it for further reading and analyzing.",
                "options": [
                    {
                        "label": "Go to the first shelter.",
                        "key": "shelter1"
                    },
                    {
                        "label": "Go to the second shelter.",
                        "key": "shelter2"
                    },
                    {
                        "label": "Go to the fourth shelter.",
                        "key": "shelter4"
                    },
                    {
                        "label": "Examine the surrounding area.",
                        "key": "examine"
                    },
                    {
                        "label": "Leave.",
                        "key": "leave"
                    }
                ]
            },
            "shelter4": {
                "description": "This shelter looks particularly clean and, one can even say, cozy. The outside part is covered with mud, so the inside space is dry and warm. Instead of a leaf bed there is a hemp blanket. The shelter even has a curtain to hide the dweller from the rest of the camp. Is it wise to take a rest here?",
                "options": [
                    {
                        "label": "Take a short rest.",
                        "key": "rest",
                        "characteristics": {
                            "prayer": -1,
                            "might": -1
                        }
                    },
                    {
                        "label": "Go to the first shelter.",
                        "key": "shelter1"
                    },
                    {
                        "label": "Go to the second shelter.",
                        "key": "shelter2"
                    },
                    {
                        "label": "Go to the third shelter.",
                        "key": "shelter3"
                    },
                    {
                        "label": "Examine the surrounding area.",
                        "key": "examine"
                    },
                    {
                        "label": "Leave.",
                        "key": "leave"
                    }
                ]
            },
            "rest": {
                "description": "You quickly fall fast asleep. In your dream a tall silhouette with long wings approaches you. It urges you to follow. You try to resist, but as if hypnotized you obey. Through a veil of silence you hear chomping, gulping, squelching. Next you are lying on the table unable to move, unable to scream. The silhouette stands over you. It puts its clawed hands on your mouth. Something heavy approaches with distinctive stomps sounding like bell tolls. Stomp. Stomp. Stomp. A giant caterpillar slowly rises over you. Its body covered with red crust. You look it in the eye and can see only the insanity caused by the demonic disease. The caterpillar opens its mouth denuding blood-covered fangs. You wake up feeling even more exhausted.",
                "options": [
                    {
                        "label": "Go to the first shelter.",
                        "key": "shelter1"
                    },
                    {
                        "label": "Go to the second shelter.",
                        "key": "shelter2"
                    },
                    {
                        "label": "Go to the third shelter.",
                        "key": "shelter3"
                    },
                    {
                        "label": "Examine the surrounding area.",
                        "key": "examine"
                    },
                    {
                        "label": "Leave.",
                        "key": "leave"
                    }
                ]
            },
            "examine": {
                "description": "You decide to take a stroll around the camp. By a small puddle of rain water you find a grave framed by small rocks. On a twig put in the dirt there is a note written a small slip of paper torn from a book which says: 'die in battle against ants sleep hero'",
                "options": [
                    {
                        "label": "Search the shelters.",
                        "key": "shelters"
                    },
                    {
                        "label": "Leave.",
                        "key": "leave"
                    }
                ]
            },
            "leave": {
                "description": "You continue onward.",
                "options": [],
                "characteristics": {}
            },
            "finalOutcome": {
                "description": "",
                "characteristics": {}
            }
        },
        {
            "id": "ladybug_conversation_1",
            "type": "dialogue",
            "requirements": {
                "reputation": 5
            },
            "rejection": "The noble ladybug eyes you with indignation and refuses to speak.",
            "start": "greetings",
            "entryPoints": [
                {
                    "state": "aftermath",
                    "stateConditions": {
                        "anyOf": [
                            {
                                "id": "ants_and_queens",
                                "state": "aftermath_colony_saved"
                            }
                        ]
                    }
                },
                {
                    "state": "postAftermath",
                    "stateConditions": {
                        "anyOf": [
                            {
                                "eventOutcome": "setoff"
                            }
                        ]
                    }
                },
                {
                    "state": "talkToQueen",
                    "stateConditions": {
                        "anyOf": [
                            {
                                "id": "ants_and_queens",
                                "state": "meet_queen"
                            }
                        ]
                    }
                },
                {
                    "state": "shamanDead",
                    "stateConditions": {
                        "anyOf": [
                            {
                                "id": "ants_and_queens",
                                "state": "shaman_killed"
                            },
                            {
                                "id": "ants_and_queens",
                                "state": "kill_shaman"
                            }
                        ]
                    }
                },
                {
                    "state": "evidenceAgainstShaman",
                    "stateConditions": {
                        "anyOf": [
                            {
                                "id": "ants_and_queens",
                                "state": "found_evidence_against_shaman"
                            },
                            {
                                "id": "ants_and_queens",
                                "state": "find_evidence_against_shaman"
                            }
                        ]
                    }
                },
                {
                    "state": "isWarchiefDealtWith",
                    "stateConditions": {
                        "anyOf": [
                            {
                                "id": "ants_and_queens",
                                "state": "deal_with_warchief"
                            }
                        ]
                    }
                },
                {
                    "state": "postRefuseAssist",
                    "stateConditions": {
                        "anyOf": [
                            {
                                "eventOutcome": "refuseAssist"
                            },
                            {
                                "eventOutcome": "postRefuseAssist2"
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
                                "id": "ants_and_queens",
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
                "description": "—Don't interrupt me! She respects only brute force, so perhaps you have had sufficient training to prove yourself a decent match. On the other hand, any subterfuge will suffice. Now go. I don't have time for you. The lady turns away.",
                "options": [
                    {
                        "label": "Ask the lady about her purpose here.",
                        "key": "ignoring",
                        "quest": {
                            "id": "ants_and_queens",
                            "state": "deal_with_warchief"
                        }
                    },
                    {
                        "label": "Say that you are here to investigate the ants unusual behavior.",
                        "key": "ignoring",
                        "quest": {
                            "id": "ants_and_queens",
                            "state": "deal_with_warchief"
                        }
                    },
                    {
                        "label": "Ask about the colony.",
                        "key": "ignoring",
                        "quest": {
                            "id": "ants_and_queens",
                            "state": "deal_with_warchief"
                        }
                    },
                    {
                        "label": "Ask about the War Chief.",
                        "key": "ignoring",
                        "quest": {
                            "id": "ants_and_queens",
                            "state": "deal_with_warchief"
                        }
                    },
                    {
                        "label": "Ask about the Queen.",
                        "key": "ignoring",
                        "quest": {
                            "id": "ants_and_queens",
                            "state": "deal_with_warchief"
                        }
                    },
                    {
                        "label": "Ask about the Shaman.",
                        "key": "ignoring",
                        "quest": {
                            "id": "ants_and_queens",
                            "state": "deal_with_warchief"
                        }
                    }
                ]
            },
            "listen": {
                "description": "—She respects only brute force, so perhaps you have had sufficient training to prove yourself a decent match. On the other hand, any subterfuge will suffice. It's imperative that you don't kill her. Now go. The lady turns away.",
                "options": [
                    {
                        "label": "Ask the lady about her purpose here.",
                        "key": "ignoring",
                        "quest": {
                            "id": "ants_and_queens",
                            "state": "deal_with_warchief"
                        }
                    },
                    {
                        "label": "Say that you are here to investigate the ants unusual behavior.",
                        "key": "ignoring",
                        "quest": {
                            "id": "ants_and_queens",
                            "state": "deal_with_warchief"
                        }
                    },
                    {
                        "label": "Ask about the colony.",
                        "key": "ignoring",
                        "quest": {
                            "id": "ants_and_queens",
                            "state": "deal_with_warchief"
                        }
                    },
                    {
                        "label": "Ask about the War Chief.",
                        "key": "ignoring",
                        "quest": {
                            "id": "ants_and_queens",
                            "state": "deal_with_warchief"
                        }
                    },
                    {
                        "label": "Ask about the Queen.",
                        "key": "ignoring",
                        "quest": {
                            "id": "ants_and_queens",
                            "state": "deal_with_warchief"
                        }
                    },
                    {
                        "label": "Ask about the Shaman.",
                        "key": "ignoring",
                        "quest": {
                            "id": "ants_and_queens",
                            "state": "deal_with_warchief"
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
                                "id": "ants_and_queens",
                                "state": "warchiefDealtWith"
                            }
                        },
                        "quest": {
                            "id": "ants_and_queens",
                            "state": "find_evidence_against_shaman"
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
                            "id": "ants_and_queens",
                            "state": "abandon_ladybug"
                        }
                    }
                ]
            },
            "warchiefDealtWith": {
                "description": "—Excellent! But we must act quickly now. I suspect that with the warchief on our side, the local shaman will make his move. Some of the ants are wary of him, but they refuse to speak with me on the matter. Perhaps, you will have more luck. Talk to me when you are done.",
                "options": []
            },
            "warchiefNotDealtWith": {
                "description": "—Don't come back untill you perform your task!",
                "options": []
            },
            "refuseAssist": {
                "description": "—I don't need you then! Disappear!",
                "options": []
            },
            "postRefuseAssist": {
                "description": "She ignores you. You walk away.",
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
                                "id": "ants_and_queens",
                                "state": "found_evidence_against_shaman"
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
                            "id": "ants_and_queens",
                            "state": "abandon_ladybug"
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
                            "id": "ants_and_queens",
                            "state": "kill_shaman"
                        }
                    },
                    {
                        "label": "Say that you refuse to assist the lady.",
                        "key": "refuseAssist",
                        "quest": {
                            "id": "ants_and_queens",
                            "state": "abandon_ladybug"
                        }
                    }
                ]
            },
            "acceptKillShaman": {
                "description": "—Do not trust a word he says.",
                "options": []
            },
            "foundNothing": {
                "description": "—Do not come back untill you find something.",
                "options": []
            },
            "shamanDead": {
                "description": "—Knight, report.",
                "options": [
                    {
                        "label": "The shaman has been executed.",
                        "key": "shamanExecuted",
                        "quest": {
                            "id": "ants_and_queens",
                            "state": "meet_queen"
                        },
                        "optionConditions": {
                            "quest": {
                                "id": "ants_and_queens",
                                "state": "shaman_killed"
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
                            "id": "ants_and_queens",
                            "state": "abandon_ladybug"
                        }
                    }
                ]
            },
            "shamanExecuted": {
                "description": "—Great to hear the bastard is dead. We must go to the queen and tell her everything we have learnt.",
                "options": []
            },
            "shamanNotExecuted": {
                "description": "—Oh! Do not tell me you are just wasting time.",
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
                "options": [],
                "characteristics": {}
            },
            "finalOutcome": {
                "description": "",
                "characteristics": {}
            }
        },
        {
            "id": "ant_shaman_conversation",
            "type": "dialogue",
            "requirements": {},
            "rejection": "",
            "start": "greetings",
            "entryPoints": [
                {
                    "state": "postInfecting",
                    "stateConditions": {
                        "anyOf": [
                            {
                                "id": "ants_and_queens",
                                "state": "aftermath_colony_infected"
                            }
                        ]
                    }
                },
                {
                    "state": "changeMindAboutLadybug",
                    "stateConditions": {
                        "anyOf": [
                            {
                                "eventOutcome": "refuse"
                            }
                        ]
                    }
                },
                {
                    "state": "isLadybugKilled",
                    "stateConditions": {
                        "anyOf": [
                            {
                                "id": "ants_and_queens",
                                "state": "kill_ladybug"
                            }
                        ]
                    }
                },
                {
                    "state": "changeMindAboutWarchief",
                    "stateConditions": {
                        "anyOf": [
                            {
                                "eventOutcome": "refuseKillWarchief"
                            }
                        ]
                    }
                },
                {
                    "state": "isWarchiefDead",
                    "stateConditions": {
                        "anyOf": [
                            {
                                "name": "warchief",
                                "isAlive": "false"
                            },
                            {
                                "id": "ants_and_queens",
                                "state": "kill_warchief"
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
                                "id": "ants_and_queens",
                                "state": "found_evidence_against_shaman"
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
                "description": "*The shaman nods with understanding and removes the bowl.* —Divine spirit, heed my plead. The colony is in great danger, and my powers are not enough. You can see these poor souls. *The shaman points at some ants lying on a straw blanket at the opposite side of the shack.* They are dying from the demonic disease, not long before they go astray and further weaken our colony.",
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
                                "id": "ants_and_queens",
                                "state": "found_evidence_against_shaman"
                            }
                        }
                    }
                ]
            },
            "ladybugTellMore": {
                "description": "—There is not much more to tell you. Little have I learnt about her. We had a couple of conversations, but they were more like interrogations.",
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
                                "id": "ants_and_queens",
                                "state": "found_evidence_against_shaman"
                            }
                        }
                    }
                ]
            },
            "colonyTellMore": {
                "description": "*Ah'Ruhn signs* —It used to be a florishing and prosperous colony. What you see now is a remnant of our ancient glory. The new Chyceen king doesn't do anything to prevent the demonic disease from spreading. Instead of helping us, he decided to abandon us. Now we survive on our own with what little we have.",
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
                                "id": "ants_and_queens",
                                "state": "found_evidence_against_shaman"
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
                                "id": "ants_and_queens",
                                "state": "found_evidence_against_shaman"
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
                                "id": "ants_and_queens",
                                "state": "found_evidence_against_shaman"
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
                            "id": "ants_and_queens",
                            "state": "kill_ladybug"
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
                "options": [],
                "characteristics": {}
            },
            "refuse": {
                "description": "—I am deeply saddened by your words. I hope that you will change your mind. *Ah'Ruhn turns away and goes to his patients.*",
                "options": [],
                "characteristics": {}
            },
            "changeMindAboutLadybug": {
                "description": "—Divine spirit, have you changed your mind about my proposal?",
                "options": [
                    {
                        "label": "Accept.",
                        "key": "accept",
                        "quest": {
                            "id": "ants_and_queens",
                            "state": "kill_ladybug"
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
                                "id": "ants_and_queens",
                                "state": "found_evidence_against_shaman"
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
                            "quest": {
                                "id": "ants_and_queens",
                                "state": "ladybug_defeated"
                            }
                        }
                    },
                    {
                        "label": "Present the evidence of his betrayal.",
                        "key": "evidenceAgainstShaman",
                        "optionConditions": {
                            "quest": {
                                "id": "ants_and_queens",
                                "state": "found_evidence_against_shaman"
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
                "description": "—Don't hesistate.",
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
                            "id": "ants_and_queens",
                            "state": "kill_warchief"
                        }
                    },
                    {
                        "label": "Say that you must proceed on your quest.",
                        "key": "refuseKillWarchief"
                    }
                ]
            },
            "warchiefTellMore": {
                "description": "—Ag'Ra is the queen's elite guard. She created this formiddable female ant in her womb to have a guard who will never succumb to betrayal. That is the problem. Ag'Ra heeds only the orders of the queen. I resent to say this, but the only way is to make her perish.",
                "options": [
                    {
                        "label": "Say that you will see into it.",
                        "key": "acceptKillWarchief",
                        "quest": {
                            "id": "ants_and_queens",
                            "state": "kill_warchief"
                        }
                    },
                    {
                        "label": "Say that you must proceed on your quest.",
                        "key": "refuseKillWarchief"
                    }
                ]
            },
            "acceptKillWarchief": {
                "description": "—I must warn you that the warchief is a mighty warrior. I will put a spell on him when you engage into battle with him. It will assist you. Now, let's do what must be done.",
                "options": [],
                "characteristics": {}
            },
            "isWarchiefDead": {
                "description": "—Is the might warchief dead?",
                "options": [
                    {
                        "label": "She is not a threat anymore.",
                        "key": "warchiefKilled",
                        "optionConditions": {
                            "quest": {
                                "id": "ants_and_queens",
                                "state": "warchief_defeated"
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
                "options": [],
                "characteristics": {}
            },
            "changeMindAboutWarchief": {
                "description": "—Divine spirit, are you ready to finish what we started?",
                "options": [
                    {
                        "label": "Say that you will see into it.",
                        "key": "acceptKillWarchief",
                        "quest": {
                            "id": "ants_and_queens",
                            "state": "kill_warchief"
                        }
                    },
                    {
                        "label": "Say that you must proceed on your quest.",
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
                        "key": "leave"
                    }
                ]
            },
            "death": {
                "description": "You are approaching the shaman wielding your spear. —Divine spirit, there is no turning back. The deed is done. Kill him! Suddenly all attention is turned to you and you find yourself surrounded by numerous infected ants. You fight bravely, but the ants are ferocious. They start consuming you alive bit by bit. You see your own flesh in the hand of the insane. When an ant rips off your forearm, you no longer have will to continue fighting. The ants consume your body.",
                "options": []
            },
            "explanation": {
                "description": "—Divine spirit, what explanation do you need? See for yourself. We are the subjects of the new king. He will dethrone the old gods and establish a new kingdom. Perhaps, there will be a place for you, some reward for your help here. But now, divine spirit, the savior of the colony, you must leave. I take mercy on you, but you have only one chance.",
                "options": [
                    {
                        "label": "Try to kill the shaman.",
                        "key": "death"
                    },
                    {
                        "label": "Leave.",
                        "key": "leave",
                        "quest": {
                            "id": "ants_and_queens",
                            "state": "aftermath_colony_infected"
                        }
                    },
                    {
                        "label": "Who is this new god?",
                        "key": "newGod"
                    }
                ]
            },
            "newGod": {
                "description": "—Go to the alter to the west of here and see for yourself.",
                "options": [
                    {
                        "label": "Try to kill the shaman.",
                        "key": "death"
                    },
                    {
                        "label": "Leave.",
                        "key": "leave",
                        "quest": {
                            "id": "ants_and_queens",
                            "state": "aftermath_colony_infected"
                        }
                    }
                ]
            },
            "leave": {
                "description": "—Do not come back here. This colony is not part of your domain from now on.",
                "options": [],
                "characteristics": {}
            },
            "postInfecting": {
                "description": "—Knight, I warned you against coming back to my colony. There is no place for you here. You will die now.",
                "initCombat": true,
                "options": [],
                "characteristics": {}
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
                        "key": "npcCombat"
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
                        "key": "npcCombat"
                    }
                ]
            },
            "keepListening": {
                "description": "—Yes, I saw Him. The new King, the rightful King who will establish a new kingdom on the ambers of the ancient. He told me everything. It wasn't a dream, but a sublime vision. I felt blissfull, gleefull. My new King also granted me with the divine disease. That's not what you think it is. You call it demonic, but it is divine. I don't feel the presence of gods, nor my former queen. Only His pure, divine, blissful power. He will save us.",
                "options": [
                    {
                        "label": "Sentence the shaman to death for his betrayal.",
                        "key": "npcCombat"
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
                        "key": "npcCombat"
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
                        "key": "npcCombat"
                    },
                    {
                        "label": "Tell the shaman what you have learnt from the moss.",
                        "key": "moss"
                    }
                ]
            },
            "moss": {
                "description": "Ah'Ruhn wants to say something, but stops mid-sentence. You look at his face and notic how old he is. His face is scared by wrinkles, his antanae are covered in colorless hair. He sits heavily on the floor. —I hear you, my queen. Yes, I still remember the warmth of your womb and the joy of being born. I went astray because I wanted to save us. There is no forgiveness for me I know. I know. *The shaman bursts into tears. After a minute he stands up.* —Leave unless you want to burn with me. *He laughs madly.*.",
                "options": [
                    {
                        "label": "Leave hastily.",
                        "key": "leaveHastily",
                        "quest": {
                            "id": "ants_and_queens",
                            "state": "shaman_killed"
                        },
                        "npcDeath": {
                            "id": "ant_shaman",
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
                            "id": "ants_and_queens",
                            "state": "shaman_killed"
                        },
                        "npcDeath": {
                            "id": "ant_shaman",
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
                "initCombat": true,
                "options": []
            },
            "comeLater": {
                "description": "Ah'Ruhn doesn't say anything.",
                "options": []
            },
            "finalOutcome": {
                "description": "",
                "characteristics": {}
            }
        },
        {
            "id": "warchief_conversation",
            "type": "dialogue",
            "requirements": {
                "might": 7
            },
            "rejection": "The warchief doesn't mind you.",
            "start": "greetings",
            "entryPoints": [
                {
                    "state": "shamanAskedKill",
                    "stateConditions": {
                        "anyOf": [
                            {
                                "id": "ants_and_queens",
                                "state": "kill_warchief"
                            }
                        ]
                    }
                },
                {
                    "state": "postDealingWith",
                    "stateConditions": {
                        "anyOf": [
                            {
                                "id": "ants_and_queens",
                                "state": "meet_queen"
                            },
                            {
                                "id": "ants_and_queens",
                                "state": "cleansing"
                            },
                            {
                                "id": "ants_and_queens",
                                "state": "shaman_killed"
                            },
                            {
                                "id": "ants_and_queens",
                                "state": "kill_shaman"
                            },
                            {
                                "id": "ants_and_queens",
                                "state": "warchiefDealtWith"
                            },
                            {
                                "id": "ants_and_queens",
                                "state": "aftermath_colony_saved"
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
                                "id": "ants_and_queens",
                                "state": "kill_warchief"
                            }
                        ]
                    }
                }
            ],
            "greetings": {
                "description": "—Whacha want from ma Queen? You not seem like an ant.",
                "options": [
                    {
                        "label": "Challenge to a fair fight.",
                        "key": "fairFight",
                        "optionConditions": {
                            "quest": {
                                "id": "ants_and_queens",
                                "state": "deal_with_warchief"
                            }
                        },
                        "combat": {
                            "id": "ant_warchief",
                            "type": "npc"
                        },
                        "rejection": "You not worth ma time, buggie.",
                        "requirements": {
                            "might": 1
                        }
                    },
                    {
                        "label": "Tell a silly joke.",
                        "key": "tellJoke",
                        "optionConditions": {
                            "quest": {
                                "id": "ants_and_queens",
                                "state": "deal_with_warchief"
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
                                "id": "ants_and_queens",
                                "state": "deal_with_warchief"
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
                                "id": "ants_and_queens",
                                "state": "deal_with_warchief"
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
                                "id": "ants_and_queens",
                                "state": "deal_with_warchief"
                            }
                        },
                        "rejection": "Good compliment, but not sincere.",
                        "requirements": {
                            "reputation": 7
                        }
                    },
                    {
                        "label": "Ask if there is anything you can do to help the warchief.",
                        "key": "helpWarchief",
                        "optionConditions": {
                            "quest": {
                                "id": "ants_and_queens",
                                "state": "deal_with_warchief"
                            }
                        }
                    },
                    {
                        "label": "Leave.",
                        "key": "leave"
                    }
                ]
            },
            "fairFight": {
                "description": "—Finally a worthy opponent.",
                "options": []
            },
            "tellJoke": {
                "description": "*The warchief laughs so hard you have an impression that that was the only joke she has heard in her entire life. Maybe the first ever joke she has actually understood.* —Well, you seem like good fella. I may let you in if you promise to behave.",
                "options": [
                    {
                        "label": "Thank and leave.",
                        "key": "leave",
                        "quest": {
                            "id": "ants_and_queens",
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
                            "id": "ants_and_queens",
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
                            "id": "ants_and_queens",
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
                            "id": "ants_and_queens",
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
                            "id": "ants_and_queens",
                            "state": "kill_scuttle_flies"
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
                            "eventId": "scuttle_flies_gang",
                            "eventOutcome": true
                        },
                        "quest": {
                            "id": "ants_and_queens",
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
                "initCombat": true,
                "options": []
            },
            "finalOutcome": {
                "description": "",
                "characteristics": {}
            }
        },
        {
            "id": "ant_witness",
            "type": "dialogue",
            "requirements": {
                "id": "ants_and_queens",
                "state": "found_evidence_against_shaman"
            },
            "rejection": "The ant is busy and doesn't want to talk.",
            "start": "greetings",
            "greetings": {
                "description": "*An ant forager approaches you quietly. She looks both sides and invites to speak behind a heap of wooden sticks* -Knight, I know who you are. You are one of those beetles who don't sleep in winter. I have something to say.",
                "options": [
                    {
                        "label": "I am listening.",
                        "key": "listen"
                    },
                    {
                        "label": "Who is your master?",
                        "key": "master"
                    },
                    {
                        "label": "I don't have time.",
                        "key": "noTime"
                    }
                ]
            },
            "master": {
                "description": "-My Queen Mua'Ranu is my sole master. I swear.",
                "options": [
                    {
                        "label": "I am listening.",
                        "key": "listen"
                    },
                    {
                        "label": "If you lie, you will be prosecuted.",
                        "key": "antThreatened"
                    },
                    {
                        "label": "I don't have time.",
                        "key": "noTime"
                    }
                ]
            },
            "noTime": {
                "description": "-Please, it's very important. Please, knight, hear me out. This is about my colony and my people.",
                "options": [
                    {
                        "label": "I am listening.",
                        "key": "listen"
                    },
                    {
                        "label": "Who is your master?",
                        "key": "master"
                    },
                    {
                        "label": "Refuse to talk and proceed on your way.",
                        "key": "antRejected"
                    }
                ]
            },
            "antRejected": {
                "description": "-You are just like the rest of you, haughty noble folks. *The ant returns to her duties*.",
                "options": []
            },
            "antThreatened": {
                "description": "-I am not afraid. Your law doesn't have any value or power here. You are just like the rest of you, haughty noble folks. *The ant returns to her duties*.",
                "options": []
            },
            "listen": {
                "description": "-Last cycle I was a young ant. It was my second cycle. I was tasked with tending for the eggs by my queen Mua'Ranu. All of them hatched as healthy ants, my fellows. I wasn't allowed to go outside,so I fell asleep for the winter right by my queen and her new eggs. But when I heard the song of spring a few moons back I was the first to wake up. *The ant pauses. You notice a slight shaking in her limbs. She now whispers.* -At least I thought I was the first.",
                "options": [
                    {
                        "label": "Please go on.",
                        "key": "goOn"
                    },
                    {
                        "label": "Get to the point.",
                        "key": "toPoint"
                    }
                ]
            },
            "toPoint": {
                "description": "*The ant speaks faster.* -I saw Ah'Ruhn. He was there doing something with the eggs. He spoiled them. Oh, he spoiled them. They were not good eggs anymore. *The ant begins speaking faster and quieter. You lean forward to hear her better.* -When they hatched, my queen was not pleased. No-no-no. She was... confused. Then she got enraged. She ordered everyone out. Out! I haven't seen her since. I got a new task: foraging. But that's not all.",
                "options": [
                    {
                        "label": "Tell me more.",
                        "key": "tellMore"
                    },
                    {
                        "label": "Come on, girl, I don't have the whole day.",
                        "key": "comeOn"
                    }
                ]
            },
            "goOn": {
                "description": "-I saw Ah'Ruhn. He was there doing something with the eggs. He spoiled them. Oh, he spoiled them. They were not good eggs anymore. *The ant begins speaking faster and quieter. You lean forward to hear her better.* -When they hatched, my queen was not pleased. No-no-no. She was... confused. Then she got enraged. She ordered everyone out. Out! I haven't seen her since. I was tasked with foraging. But that's not all.",
                "options": [
                    {
                        "label": "Tell me more.",
                        "key": "tellMore"
                    },
                    {
                        "label": "Come on, girl, I don't have the whole day.",
                        "key": "comeOn"
                    }
                ]
            },
            "comeOn": {
                "description": "*The ant seems insulted by your words. She swallows and continues.* -I saw Ah'Ruhn. He was there doing something with the eggs. He spoiled them. Oh, he spoiled them. They were not good eggs anymore. *The ant begins speaking faster and quieter. You lean forward to hear her better.* -When they hatched, my queen was not pleased. No-no-no. She was... confused. Then she got enraged. She ordered everyone out. Out! I haven't seen her since. I was tasked with foraging. But that's not all.",
                "options": [
                    {
                        "label": "How do you know?",
                        "key": "howKnow"
                    },
                    {
                        "label": "Do you have any proof?",
                        "key": "proof"
                    }
                ]
            },
            "proof": {
                "description": "-I don't, but Ah'Ruhn claims that he was one of the last to wake up beacuse he is very old. Besides, since I got into foraging, I was able to see more of my fellows. Sometimes I see that they work like the rest of us, but there are times when they suddenly stop, shake their heads and rub their eyes as if something like dust got onto their faces, they might mumble something or even look scared afterwards. But when this strange feeling is gone, they look normal. But this is not normal.",
                "options": [
                    {
                        "label": "Can you show me?",
                        "key": "showMe"
                    }
                ]
            },
            "tellMore": {
                "description": "-I haven't seen those younglings. They are still inside with the queen. You can say I am crazy, but I think Ah'Ruhn gave them the demonic disease. Many of my fellows got infected. Some went astray and now are somewhere in the barrenlands, walking mindless. And I think that many of us are also infected, but they don't know about it.",
                "options": [
                    {
                        "label": "How do you know?",
                        "key": "howKnow"
                    },
                    {
                        "label": "Do you have any proof?",
                        "key": "proof"
                    }
                ]
            },
            "howKnow": {
                "description": "-Since I got into foraging, I was able to see more of my fellows. Sometimes I see that they work like the rest of us, but there are times when they suddenly stop, shake their heads and rub their eyes as if something like dust got onto their faces, they might mumble something or even look scared afterwards. But when this strange feeling is gone, they look kind of normal. But this is not normal. Not at all.",
                "options": [
                    {
                        "label": "Can you show me?",
                        "key": "showMe"
                    }
                ]
            },
            "showMe": {
                "description": "*The ant point at a group of her fellow ants carrying sand and water for one of the shacks.* -Observe! *One of ants stops. She drops her sandbag and looks around in frustration, but you cannot understand what she is trying to see. She shakes her head as if she was saying 'no' to someone, but there is no one talking to her. In the next second she looks frightened. For a moment she gathers her thoughts. She grabs her bag and joins the rest.* -Knight, what do you make of it?",
                "options": [
                    {
                        "label": "This is a strange symptom.",
                        "key": "strangeSymptom"
                    },
                    {
                        "label": "I am not impressed.",
                        "key": "notImpressed"
                    },
                    {
                        "label": "I need to see more of this.",
                        "key": "seeMore"
                    }
                ]
            },
            "notImpressed": {
                "description": "-Then look harder, noblebug. This is obviously not right. We, ants, never behave like that. If we have a task, we do it, then we get another task. We never stop unless we are told to do so by the queen.",
                "options": [
                    {
                        "label": "I need to see more of this.",
                        "key": "seeMore"
                    }
                ]
            },
            "strangeSymptom": {
                "description": "-I don't know. But this is not right. We, ants, never behave like that. If we have a task, we do it, then we get another task. We never stop unless we are told to do so by the queen.",
                "options": [
                    {
                        "label": "I need to see more of this.",
                        "key": "seeMore"
                    }
                ]
            },
            "seeMore": {
                "description": "-Just stay here and observe. I must go now.",
                "options": [
                    {
                        "label": "Thank the ant and begin observing.",
                        "key": "observe"
                    }
                ]
            },
            "observe": {
                "description": "As the time goes by, you witness more cases of unusual ants' behavior. They are quite numerous, and that's what scares you most. The ladybug might want to hear about it.",
                "options": [
                    {
                        "label": "Stop observing.",
                        "key": "antsObserved",
                        "quest": {
                            "id": "ants_and_queens",
                            "state": "found_evidence_against_shaman"
                        }
                    }
                ]
            },
            "antsObserved": {
                "description": "Time to speak with the ladybug.",
                "options": []
            },
            "finalOutcome": {
                "description": "",
                "characteristics": {}
            }
        },
        {
            "id": "ant_queen_conversation",
            "type": "dialogue",
            "requirements": "",
            "rejection": "",
            "start": "greetings",
            "entryPoints": [
                {
                    "state": "moreHelp",
                    "stateConditions": {
                        "anyOf": [
                            {
                                "id": "ants_and_queens",
                                "state": "aftermath_colony_saved"
                            }
                        ]
                    }
                }
            ],
            "greetings": {
                "description": "The ant queen is sitting silently on her wooden throne. She is dressed in elegant cotton dress, long gloves and a stylish hat. However her attire doesn't seem neat as if the queen has recently had hard time attending to her toilet. Suddenly, she speaks. Her voice is loud and stern. —I haven't invited you to my chambers! Where is Ag'Ra. Why did she let you in? Ag'Ra! Take them out of here.",
                "options": [
                    {
                        "label": "Make a courtsey and politely introduce yourself.",
                        "key": "politeIntroduce"
                    },
                    {
                        "label": "Inroduce yourself without courtsey.",
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
                            "id": "ants_and_queens",
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
                            "id": "ants_and_queens",
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
                            "id": "ants_and_queens",
                            "state": "cleansing"
                        }
                    }
                ]
            },
            "tellAboutSituationColony": {
                "description": "The queen listens. Her look gets sterner with your every word. Finally, she is on the verge of tears, but she takes hold of herself. For a moment she sits motionlessly. Then she abruptly stands up. —As the sole queen of the colony I must protect it even if sometimes it comes at a great cost. My true ants I order you assail your former fellows. This is the only way to save us. I will guide you. Forward, my ants!",
                "options": [
                    {
                        "label": "Continue.",
                        "key": "continueQueensSpeech"
                    }
                ]
            },
            "continueQueensSpeech": {
                "description": "Every uninfected ant in the colony heard their queen. You hear great commotion outside. Together with Ladybug you leave the queen's chambers to witnes a horrendous and violent sight of fighting. Ants are trying to kill each other with everything they have. They bite, they cut, they thrash, they thrust, they tear out limbs, they throw stones and heavy objects. They are led by their queen's orders loud in their minds. Orders their very nature cannot ignore.",
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
                "description": "You join the battle to fight alongside the healthy ants. Your shield and spear helped to turn the tides of combat to the favor of your allies. Ladybug was fighting alongside you protecting the ants from projectiles with force shields and distracting enemies with her phychic abilities. Together you saved some ant lives that otherwise would have been wasted in battle.",
                "options": [
                    {
                        "label": "Return to the queen.",
                        "key": "returnQueen",
                        "quest": {
                            "id": "ants_and_queens",
                            "state": "aftermath_colony_saved"
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
                            "reputation": -1
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
                            "id": "ants_and_queens",
                            "state": "aftermath_colony_saved"
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
                            "reputation": -1
                        }
                    }
                ]
            },
            "observe": {
                "description": "You observe a fierce battle. Ladybug leaps into fighting to support the uninfected ants. She is very efficient at protecting the ants from projectiles with force shields and distracting enemies with her phychic abilities. Thanks to her support a couple of ant lives were saved that otherwise would have been wasted in battle.",
                "options": [
                    {
                        "label": "Return to the queen.",
                        "key": "returnQueen",
                        "quest": {
                            "id": "ants_and_queens",
                            "state": "aftermath_colony_saved"
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
                            "reputation": -1
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
                            "id": "ants_and_queens",
                            "state": "aftermath_colony_saved"
                        }
                    },
                    {
                        "label": "Salvage valuables from the dead.",
                        "key": "salvageValuables",
                        "characteristics": {
                            "reputation": -1
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
                            "id": "ants_and_queens",
                            "state": "aftermath_colony_saved"
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
            },
            "finalOutcome": {
                "description": "",
                "characteristics": {}
            }
        }
    ]
}