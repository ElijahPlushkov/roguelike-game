export const doorData = {
    "id": "chapter_1_doors",
    "doors": [
        {
            "id": "spider-liar-door-1",
            "type": "door",
            "tileType": "door",
            "requirements": {},
            "isLocked": "",
            "rejection": "",
            "description": "You see a decayed door with some wooden planks missing. A clammy wind is seeping out through the gaps. Water is dripping down from moss-covered bricks above you. You feel chilly.",
            "reward": {}
        },

        {
            "id": "spider-liar-door-2",
            "type": "door",
            "tileType": "door",
            "requirements": {},
            "isLocked": "",
            "rejection": "",
            "description": "You open the door to a large webby room.",
            "reward": {}
        },
        {
            "id": "spider-liar-door-3",
            "type": "door",
            "tileType": "door",
            "requirements": {},
            "isLocked": "3",
            "rejection": "",
            "description": "A sturdy oak door looks battered from unfruitful attempts at bashing it.",
            "reward": {
                "pollen": 3
            }
        },
        {
            "id": "ant-col-door-1",
            "type": "door",
            "tileType": "door",
            "requirements": {},
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
            "requirements": {},
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
            "requirements": {}, // there should be a quest state or dialogue outcome
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
            "requirements": {},
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
            "requirements": {},
            "isLocked": "7",
            "rejection": "",
            "description": "You see a study door made of stone. The inscription says: 'Armory.'",
            "reward": {
                "pollen": 5
            }
        },
        {
            "id": "ant-col-door-6",
            "type": "door",
            "tileType": "door",
            "requirements": {},
            "isLocked": "",
            "rejection": "",
            "description": "You open the door to the nursery chamber. You see a diseased ant attacking a young nurse.",
            "reward": {}
        },
        {
            "id": "ant-col-door-7",
            "type": "door",
            "tileType": "door",
            "requirements": {}, //a dialogue or quest outcome
            "isLocked": "",
            "rejection": "",
            "description": "You open the door to the Queen's chamber. It's dark and quiet.",
            "reward": {}
        },
        {
            "id": "wasp_lair_gates",
            "type": "door",
            "tileType": "door",
            "requirements": {
                "might": 10
            },
            "rejection": "You see tall castle gates guarding an old fortification. Great walls outspread on both sides with their time-worn merlons look like preybird wings. Something about the gates seems off. The longer you look at them, the more uncomfortable it feels. You try to push the gates, but they won't surrender to your strength. The ancient castle gates remain silent.",
            "description": "You see tall castle gates guarding an old fortification. Great walls outspread on both sides with their time-worn merlons look like preybird wings. Something about the gates seems off. The longer you look at them, the more uncomfortable it feels. You try to push the gates, and hear loud rusty echo. You keep pushing. At some point the rusty echo grows into metal screaching, but you persevere. Finally, the gates are open. Enter if you dare.",
            "reward": {}
        }
    ]
}