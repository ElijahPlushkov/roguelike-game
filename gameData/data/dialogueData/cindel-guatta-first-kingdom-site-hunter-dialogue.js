export const dialogueData = {
    "id": "cindel-guatta-first-kingdom-site-hunter-dialogue",
    "type": "dialogue",
    "rejection": "",
    "start": "greetings",
    "entryPoints": [],
    "greetings": {
        "description": "—Sir Knight, your timely rescue is invaluable. You saved my life and I am forever grateful to you. I don't have any reward for you now, but make sure to meet me at my hunting camp east of here.",
        "options": [
            {
                "label": "I was glad to help.",
                "key": "gladHelp"
            },
            {
                "label": "The fighting was tough. Are you sure you don't have anything for me now?",
                "key": "anythingForMe",
                "characteristics": {
                    "pollen": 50
                }
            },
            {
                "label": "Where is your camp exactly?",
                "key": "whereCamp"
            }
        ]
    },
    "gladHelp": {
        "description": "Together with Cindel you build a shaky bridge over a pond. After that he bids farewell and leaves.",
        "options": []
    },
    "anythingForMe": {
        "description": "—Fair enough. I hope it will provide a sufficient compensation for your trouble. Together with Cindel you build a shaky bridge over a pond. After that he bids farewell and leaves.",
        "options": []
    },
    "whereCamp": {
        "description": "—Go west past an old altar, then cross the Sulahr river, after that turn south.",
        "options": [
            {
                "label": "I was glad to help.",
                "key": "gladHelp"
            },
            {
                "label": "The fighting was tough. Are you sure you don't have anything for me now?",
                "key": "anythingForMe",
                "characteristics": {
                    "pollen": 50
                }
            }
        ]
    },
}