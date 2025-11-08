export const gameData = {
    // Map & Player
    map: [],
    player: { x: 0, y: 0 },
    tileSet: {},

    // Level & Chapter
    levelData: {},
    chapterName: "",

    // Data sets
    dialogueData: {},
    eventData: {},
    doorData: {},
    itemData: {},
    enemyData: {},

    // State flags
    eventActive: false,
    stateKey: "",

    // Player stats
    playerCharacteristics: {
        reputation: 0,
        might: 3,
        prayer: 0
    },

    pollen: 0,

    // Game progress
    gameProgress: {
        currentCoordinates: {x: 0, y: 0},
        currentCharacteristics: {
            reputation: 0,
            might: 0,
            prayer: 0
        },
        currentPollen: 0,
        seenEvents: [],
        eventOutcomes: []
    }
};


const adventureLog = document.querySelector(".adventure-log");

const displayReputation = document.querySelector(".reputation-characteristic-count");
displayReputation.textContent = gameData.playerCharacteristics.reputation;

const displayMight = document.querySelector(".might-characteristic-count");
displayMight.textContent = gameData.playerCharacteristics.might;

const displayPrayer = document.querySelector(".prayer-characteristic-count");
displayPrayer.textContent = gameData.playerCharacteristics.prayer;

const displayPollen = document.querySelector(".pollen-quantity-count");
displayPollen.textContent = gameData.pollen;

export {adventureLog, displayReputation, displayMight, displayPrayer, displayPollen};