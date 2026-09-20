export const dialogueData = {
    "id": "first-kingdom-fort-hunter-encounter",
    "type": "dialogue",
    "rejection": "",
    "start": "greetings",
    "greetings": {
        "description": "You see a male beetle dressed in damaged bright-green leather armor. He is standing behind a wooden barricade and shooting arrows at someone coming from the dark. His left wing is broken.",
        "options": [
            {
                "label": "Call his attention.",
                "key": "callAttention"
            },
            {
                "label": "Do not disturb.",
                "key": "notDisturb"
            }
        ]
    },
    "callAttention": {
        "description": "—Can't believe my luck! I am a local hunter. My name is Cindel Guatta, and I was unfortunate enough to fall down into this cursed place. Listen, I need to get out of here before the local undead get me. The bridge is broken and I can't fly due to my wound. If you could find another way around or get rid of these creatures, I would greatly appreciate it.",
        "options": [
            {
                "label": "I will try to do my best.",
                "key": "consent"
            },
            {
                "label": "There is nothing I can do.",
                "key": "refuse"
            }
        ]
    },
    "notDisturb": {
        "description": "You are about to turn away, but then you hear the beetle calling you. —Hey! Over here! Can't believe my luck! I am a local hunter. My name is Cindel Guatta, and I was unfortunate enough to fall down into this cursed place. Listen, I need to get out of here before the local undead get me. The bridge is broken and I can't fly due to my wound. If you could find another way around or get rid of these creatures, I would greatly appreciate it.",
        "options": [
            {
                "label": "I will try to do my best.",
                "key": "consent",
                "quest": {
                    "id": "mold-eradication",
                    "state": "hunter-request"
                }
            },
            {
                "label": "There is nothing I can do..",
                "key": "refuse"
            }
        ]
    },
    "consent": {
        "description": "—You are a savior! But please hurry up. I am not sure I can hold them off for long.",
        "options": []
    },
    "refuse": {
        "description": "—Curse you, this place, and these undead!",
        "options": []
    }
}