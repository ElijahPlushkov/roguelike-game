export const dialogueData = {
    "id": "spider-lair-dying-ant",
    "type": "dialogue",
    "requirements": {},
    "rejection": "",
    "start": "greetings",
    "greetings": {
        "description": "Among motionless ash carcasses, you notice a slight movement. At first, you think to yourself that your eyes betray you and that you simply want to see someone alive, but then you approach the source of movement. An ant is still alive. One of her arms is not entangled in web, so she gestures for you to come closer. Her lips move; she is trying to say something, but her words are unintelligible.",
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
                "rejection": "You don't have the strength to end the creature's life."
            },
            {
                "label": "Get down on your knees and pray.",
                "key": "pray",
                "requirements": {
                    "prayer": 3
                },
                "rejection": "The gods don't hear you from this despicable place."
            },
            {
                "label": "Leave the wretched being.",
                "key": "leave"
            }
        ]
    },
    "lean": {
        "description": "-Voice... speak... not queen... I scared. So deman... The ant dies.",
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
                "rejection": "The gods don't hear you from this despicable place."
            },
            {
                "label": "Leave the wretched being.",
                "key": "leave"
            }
        ]
    },
    "leave": {
        "description": "You turn away and leave. There is nothing you can do.",
        "options": []
    },
    "examine": {
        "description": "The ant's body displays signs of the demonic disease. It hasn't been able to consume all her body, but you can clearly see small inflamed cysts on the head, neck, and shoulders. Perhaps the rest of her body, which is covered by the web, is also damaged. However, her condition, as far as you know, is terminal. There is a high chance she got the parasite quite a while ago. Unfortunately, while you were examining the ant's condition, she died. There is nothing else you could do for the wretched being.",
        "options": [],
        "characteristics": {
            "might": 1
        }
    },
    "kill": {
        "description": "A few years ago, you would hardly have believed that. Now you gather your strength and end the life of the wretched being, freeing his soul and ending his earthly misery. Although the act is bloody, the gods approve your deed.",
        "options": [],
        "characteristics": {
            "prayer": 1
        }
    },
    "pray": {
        "description": "You pray to the gods. Your intuition tells you to read a prayer of the mind, however inappropriate it may seem. Suddenly you see a dream that is not entirely your own. It is a shared dream. A nightmare. A beast. A devourer. A sleeper. Eluding. The vision lasts for one moment, but you feel fear putting its cold hands on your neck. You shake it off, but the unpleasant aftertaste remains.",
        "options": [],
        "characteristics": {
            "prayer": 1
        }
    },
    "finalOutcome": {
        "description": "",
        "characteristics": {}
    }
}