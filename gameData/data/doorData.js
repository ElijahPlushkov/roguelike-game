export const doorData = {
    "id": "chapter_1_doors",
    "doors": [
        // spider liar
        {
            "id": "spider-liar-door-1",
            "type": "door",
            "tileType": "door",
            "isLocked": "",
            "rejection": "",
            "description": "You see a decayed door with some wooden planks missing. A clammy wind is seeping out through the gaps. Water is dripping down from moss-covered bricks above you. You feel chilly.",
            "reward": {}
        },

        {
            "id": "spider-liar-door-2",
            "type": "door",
            "tileType": "door",
            "isLocked": "",
            "rejection": "",
            "description": "You open the door to a large webby room.",
            "reward": {}
        },
        {
            "id": "spider-liar-door-3",
            "type": "door",
            "tileType": "door",
            "isLocked": "3",
            "rejection": "",
            "description": "A sturdy oak door looks battered from unfruitful attempts at bashing it.",
            "reward": {
                "pollen": 3
            }
        },
        // ant colony
        {
            "id": "ant-col-door-1",
            "type": "door",
            "tileType": "door",
            "isLocked": "2",
            "rejection": "",
            "description": "An old wooden door seems like it was restored and fortified not long ago.",
            "reward": {
                "pollen": 2
            }
        },
        {
            "id": "ant-col-door-2",
            "type": "door",
            "tileType": "door",
            "isLocked": "10",
            "rejection": "",
            "description": "You see a study door made of stone.",
            "reward": {
                "pollen": 10
            }
        },
        {
            "id": "ant-col-door-3",
            "type": "door",
            "tileType": "door",
            "isLocked": "10",
            "rejection": "",
            "description": "In front of you there is a door that looks ancient and forgotten. You recognize some formic inscriptions.",
            "reward": {
                "pollen": 10
            }
        },
        {
            "id": "ant-col-door-4",
            "type": "door",
            "tileType": "door",
            "isLocked": "8",
            "rejection": "",
            "description": "This door resembles the previous one. However, this time you can read the inscriptions: 'Queen's Chamber.'",
            "reward": {
                "pollen": 10
            }
        },
        {
            "id": "ant-col-door-5",
            "type": "door",
            "tileType": "door",
            "isLocked": "7",
            "rejection": "",
            "description": "You see a sturdy door made of stone. The inscription says: 'Armory.'",
            "reward": {
                "pollen": 5
            }
        },
        {
            "id": "ant-col-door-6",
            "type": "door",
            "tileType": "door",
            "isLocked": "",
            "rejection": "",
            "description": "You open the door to the nursery chamber. You see a diseased ant attacking a young nurse.",
            "reward": {}
        },
        {
            "id": "ant-col-door-7",
            "type": "door",
            "tileType": "door",
            "requirements": {
                "anyOf": [
                    {
                        "id": "agra-warchief",
                        "isAlive": false
                    },
                    {
                        "id": "ants-and-queens",
                        "state": "warchiefDealtWith"
                    }
                ]
            },
            "isLocked": "",
            "rejection": "Ag'Ra doesn't let you in.",
            "description": "You open the door to the Queen's chamber. It's dark and quiet.",
            "reward": {}
        },
        {
            "id": "ant-col-door-8",
            "type": "door",
            "tileType": "door",
            "requirements": {
                "anyOf": [
                    {
                        "id": "strike-back",
                        "state": "start"
                    },
                    {
                        "id": "ant-col-agim-sa",
                        "isAlive": false
                    }
                ]
            },
            "isLocked": "",
            "rejection": "You cannot bash or unlock this door.",
            "description": "You open the door to an ant colony. It's poorly lit and looks miserable.",
            "reward": {}
        },
        // first kingdom fort
        {
            "id": "first-kingdom-site-bridge-door-1",
            "type": "door",
            "tileType": "door",
            "requirements": {
                "anyOf": [
                    {
                        "id": "first-kingdom-site-door-activator",
                        "activatorStatus": true
                    }
                ]
            },
            "isLocked": "",
            "rejection": "You cannot bash or unlock this door.",
            "description": "The corridor behind the door smells like rotten plants.",
            "reward": {}
        },
    ]
}