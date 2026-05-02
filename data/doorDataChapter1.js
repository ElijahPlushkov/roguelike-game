export const doorDataChapter1 = {
    "id": "chapter_1_doors",
    "doors": [
        {
            "id": "spider_door_1",
            "type": "door",
            "tileType": "door",
            "requirements": {},
            "rejection": "",
            "description": "A decayed door with many wooden planks missing opens into a dark dank corridor. You see moss-grown bricks and hear water dripping. A clammy wind walks out. You feel chilly.",
            "reward": {
                "pollen": 1
            }
        },
        {
            "id": "spider_door_2",
            "type": "door",
            "tileType": "door",
            "requirements": {
                "might": 1
            },
            "rejection": "The steady door won't open.",
            "description": "You open the door to a large webby room.",
            "reward": {
                "pollen": 3
            }
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