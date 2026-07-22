export const questData = {
    "id": "strike-back",
    "title": "Strike Back",
    "states": [
        {
            "id": "start",
            "description": "Agim Sa, an ant-knight, asked you to eliminate a group of diseased ants who are invading her colony."
        },
        {
            "id": "diseased-ants-killed",
            "description": "All the demonic ants are slain. You can return to Agim Sa to report your success."
        },
        {
            "id": "siege-lifted",
            "description": "Although the demonic ants were slain, your victory was smeared by Agim Sa's sudden transformation into a demonic ant. You had to kill her as well.",
            "flag": "finish",
            "reward": {
                "pollen": 30,
                "reputation": 2
            },
            "outcomes": {
                "ant-colony": "development progress++"
            }
        }
    ]
}