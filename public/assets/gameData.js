export const gameData = {
    player: {x: 0, y: 0},

    quests: [{
        id: "ants_and_queens",
        state: "evidence_against_shaman"
    }],

    npcs: [{name: "ant shaman", isAlive: "true"}],

    eventActive: false,
    stateKey: "",

    playerCharacteristics: {
        reputation: 8,
        might: 0,
        prayer: 0
    },

    pollen: 0,

    gameProgress: {
        currentCoordinates: {x: 0, y: 0},
        currentCharacteristics: {
            reputation: 0,
            might: 0,
            prayer: 0
        },
        seenQuests: [],
        currentPollen: 0,
        seenEvents: [],
        eventOutcomes: [],
        dialogueOutcomes: []
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

const journalBox = document.querySelector(".journal-box");

const journalClose = document.querySelector(".journal-close");

export {adventureLog,
    displayReputation, displayMight, displayPrayer, displayPollen,
    eventDescription, eventOptions, eventInfo,
    journalBox, journalClose};
