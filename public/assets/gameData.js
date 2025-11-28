export const gameData = {
    // Map & Player
    map: [],
    player: {x: 0, y: 0},
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
        might: 0,
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

const displayReputation = document.querySelector(".reputation-stat-value");
displayReputation.textContent = gameData.playerCharacteristics.reputation;

const displayMight = document.querySelector(".might-stat-value");
displayMight.textContent = gameData.playerCharacteristics.might;

const displayPrayer = document.querySelector(".prayer-stat-value");
displayPrayer.textContent = gameData.playerCharacteristics.prayer;

const displayPollen = document.querySelector(".pollen-stat-value");
displayPollen.textContent = gameData.pollen;

const eventDescription = document.querySelector(".event-description");

const eventOptions = document.querySelector(".event-options");

const eventInfo = document.querySelector(".event-info");

export {adventureLog, displayReputation, displayMight, displayPrayer, displayPollen, eventDescription, eventOptions, eventInfo};