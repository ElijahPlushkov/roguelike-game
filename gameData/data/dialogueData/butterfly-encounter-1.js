export const dialogueData = {
    "id": "butterfly-encounter-1",
    "type": "dialogue",
    "rejection": "",
    "start": "greetings",
    "greetings": {
        "description": "As you step on the bridge, you see a butterfly appear from the morning mist. So graceful and light-footed, she seems to be carried by the whispering waves of the weightless air. Gently, she touches the ground without making even a slight noise; the mist recedes. The water under the bridge falls silent.",
        "options": [
            {
                "label": "Meet the butterfly",
                "key": "meetButterfly"
            }
        ]
    },
    "meetButterfly": {
        "description": "The butterfly looks particularly stunning. Her robes are exquisitely wrought and adorned with golden and silver embroidery. With her wings glimmering in the morning sun, she approaches you. Her eyes are concealed beneath a silk veil, but you feel that they are examining you closely.",
        "options": [
            {
                "label": "Greet the noble lady first.",
                "key": "speakFirst"
            },
            {
                "label": "Wait till the lady speaks.",
                "key": "wait"
            },

            {
                "label": "Examine the lady more closely.",
                "key": "examine"
            }
        ]
    },
    "wait": {
        "description": "—Greetings, Sir Knight. My name is Lussia del Rexio. You must be exhausted after a long journey over the border. Is this the reason why you are not greeting me according to my status? But I forgive you. Tell me, what is your quest here?",
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
    "speakFirst": {
        "description": "You greet the lady with a warm but courteous smile and a slight bow, in the way you had been taught at home. She accepts your courtesy and speaks. —Greetings, Sir Knight. My name is Lussia del Rexio. It's always a pleasure to meet someone who has learned their manners in these savage lands. Tell me, what is your quest here?",
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
        "description": "You take your time to examine the lady more closely. Her head is adorned with a silver diadem that reflects the morning sunlight. Her robes, judging by their looks, were produced far away from these provincial lands. Her shoes as well seem foreign and are in perfect condition. The lady appears to be in great shape; although displaying boastful femininity, she has not lost her grace and the ease of each step and flap. —Greetings, Sir Knight. My name is Lussia del Rexio. You must be exhausted after a long journey over the border. You have lost your manners somewhere along the road. Even in these god-forsaken lands, there is always a place for courtesy. But I forgive you. Tell me, what is your quest here?",
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
        "description": "You share with the lady some details about your quest in Chyceen. She seems pleased. A faint smile appears on her lips. —How courageous of you to venture forth into these lands. I have always admired your order's perseverance. But let me warn you, Sir Knight. I have been exploring these lands for some time, and I can tell you that terrible things are happening here. Let me share something with you in exchange. In one of the abandoned watchtowers down the road dwells a spider. He has been seen hunting ants from the nearby colony, and I urge you to constantly be on your guard. Should you meet the villain, it's for your own judgement as to how to deal with him. He is powerful indeed. You need allies to overwhelm him. I gather the local ants are sick and tired of him.",
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
        "description": "As a member of the saint order, you should never disclose your intentions — this is what you tell the lady. —I didn't expect anything else from a knight such as yourself. I am glad you value reliability and loyalty. Hard to find such assets here. It seems that I can share something with you, though. I have been exploring these lands for some time, and I can tell you that terrible things are happening here. In one of the abandoned watchtowers down the road dwells a spider. He has been seen hunting ants from the nearby colony, and I urge you to constantly be on guard. Should you meet the villain, it's for your own judgement as to how to deal with him. He is powerful indeed. You need allies to overwhelm him. I gather the local ants are sick and tired of him.",
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
        "description": "—I have never had a chance to meet him personally, but I have solid evidence of his existence. And even more solid evidence of his crimes. He hunts the local ants and has already murdered quite a few of them. The ants have always been loyal to the crown — it would be an injustice to leave them unprotected. I cannot command you, as you are not my subordinate, but I implore you to put the ants' miseries to an end. They do not deserve such an ill fate.",
        "options": [
            {
                "label": "Tell the lady that you will deal with the spider.",
                "key": "dealSpider"
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
        "description": "The lady smiles. —I knew you couldn't refuse me! Sir Knight, how can I aid you in your journey? Which power do you rely on? Tell me, and I will give you my blessing. This is not much, but I wager my hope it will help you.",
        "options": [
            {
                "label": "You rely on your military prowess.",
                "key": "might",
                "characteristics": {
                    "might": 1
                }
            },
            {
                "label": "You prefer to settle conflicts with diplomacy.",
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
        "description": "The lady frowns and seems deeply disappointed. —You can’t survive for long without allies, Sir Knight. I hope next time you will be more flexible and observant. Farewell.",
        "characteristics": {
            "reputation": -1
        },
        "options": []
    },
    "might": {
        "description": "—May your spear be trustworthy and your hands won’t shake. It was a pleasure to talk to you. Now I must go. We will meet again soon.",
        "options": [
            {
                "label": "Bid farewell",
                "key": "farewell"
            }
        ]
    },
    "reputation": {
        "description": "—May your tongue speak silver words. It was a pleasure to talk to you. Now I must go. We will meet again soon.",
        "options": [
            {
                "label": "Bid farewell",
                "key": "farewell"
            }
        ]
    },
    "prayer": {
        "description": "—May the gods of justice be with you. It was a pleasure to talk to you. Now I must go. We will meet again soon.",
        "options": [
            {
                "label": "Bid farewell",
                "key": "farewell"
            }
        ]
    },
    "colony": {
        "description": "—The ants, poor things, they suffer from the spider's murderous assaults. Their queen is still weak after the last winter, so she cannot provide sufficient protection. Many of the ants go astray, since their connection to the queen is also weak. That's when they fall victims to the devious disease. You might want to visit their keep. Go south past the abandoned tower. Keep to the right when the road forks.",
        "options": [
            {
                "label": "Tell the lady that you will deal with the spider.",
                "key": "dealSpider"
            },
            {
                "label": "Tell the lady that you want to focus on your quest.",
                "key": "noDeal"
            }
        ]
    },
    "farewell": {
        "description": "—Farewell. I will be looking forward to our next meeting, Sir Knight.",
        "options": [],
        "characteristics": {}
    }
}