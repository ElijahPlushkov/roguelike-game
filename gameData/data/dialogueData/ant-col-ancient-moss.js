export const dialogueData = {
    "id": "ant-col-ancient-moss",
    "type": "dialogue",
    "start": "greetings",
    "greetings": {
        "description": "You sense a strange presence, a distant echo. Something is searching for you, trying to penetrate your mind.",
        "options": [
            {
                "label": "Allow it to get inside your mind.",
                "key": "allow"
            },
            {
                "label": "Resist the intrusion.",
                "key": "resist"
            }
        ]
    },
    "resist": {
        "description": "Whatever it was, it retreated.",
        "options": []
    },
    "allow": {
        "description": "You close your eyes and concentrate. Your breath is even, your limbs are lax. You hear a distant voice, a whisper. It's distant as if it were a voice from thousands of years ago. From times so ancient you cannot even fathom.",
        "options": [
            {
                "label": "Try to discern what it is saying.",
                "key": "discern"
            },
            {
                "label": "Resist the intrusion.",
                "key": "resist"
            }
        ]
    },
    "discern": {
        "description": "—Hear us, winter walker, through the veil of time we are calling you. Heed our words. We saw it all, we saw the coming of your ancestor, we saw what he brought with him. This disease is alien; it kills the beings from this world. Only a few can harness its power.",
        "options": [
            {
                "label": "How can I fight this disease?",
                "key": "fightDisease"
            },
            {
                "label": "Who are you?",
                "key": "whoAreYou"
            },
            {
                "label": "What powers does it grant?",
                "key": "powers"
            }
        ]
    },
    "fightDisease": {
        "description": "—Do not succumb to it. Their words are sweet poison. It will transform your body and steal your mind from you.",
        "options": [
            {
                "label": "Who are you?",
                "key": "whoAreYou"
            },
            {
                "label": "What powers does it grant?",
                "key": "powers"
            }
        ]
    },
    "whoAreYou": {
        "description": "—We are moss. We have been here long before your species started to roam this world. We are one. One mind, free from the bounds of time, but bound to space.",
        "options": [
            {
                "label": "How can I fight this disease?",
                "key": "fightDisease"
            },
            {
                "label": "What powers does it grant?",
                "key": "powers"
            }
        ]
    },
    "powers": {
        "description": "—Are you asking because you are tempted?",
        "options": [
            {
                "label": "I am not tempted.",
                "key": "notTempted"
            },
            {
                "label": "I haven't decided.",
                "key": "notDecided"
            },
            {
                "label": "I want to wield its powers.",
                "key": "tempted"
            }
        ]
    },
    "notTempted": {
        "description": "—Those who are will perish like creatures whose mind does not belong to them. A more powerful, vile mind will take over them.",
        "options": [
            {
                "label": "Is there a cure?",
                "key": "cure"
            }
        ]
    },
    "cure": {
        "description": "—For every disease there is a cure. And now accept our blessing, for your path is only beginning. Looks are deceiving, true intentions are hidden, and outcomes may surprise you, but the truth is there for you to see.",
        "options": [
            {
                "label": "Accept the blessing.",
                "key": "acceptMossBlessing",
                "characteristics": {
                    "prayer": 2
                }
            }
        ]
    },
    "acceptMossBlessing": {
        "description": "You can hear the moss no more.",
        "options": []
    },
    "notDecided": {
        "description": "—Those who are will perish like creatures whose mind does not belong to them. A more powerful vile mind will take over them. Make a decision before it's too late. Now go. Farewell.",
        "options": [
            {
                "label": "Farewell.",
                "key": "farewell"
            }
        ]
    },
    "farewell": {
        "description": "You can hear the moss no more.",
        "options": []
    },
    "tempted": {
        "description": "—Then soon your mind will belong to someone else. Eternal darkness awaits you.",
        "options": [
            {
                "label": "We'll see.",
                "key": "see"
            }
        ]
    },
    "see": {
        "description": "You can hear the moss no more.",
        "options": []
    }
}