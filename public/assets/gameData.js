import {chapterOneSlugs, CHAPTERS} from "./slugs.js";
import {mapRender} from "./mapRender.js";

export const gameData = {
    player: {x: 24, y: 6},

    quests: [],

    npcs: [],

    eventActive: false,
    stateKey: "",

    playerCharacteristics: {
        reputation: 10,
        might: 10,
        prayer: 10,
        agility: 10
    },

    pollen: 0,

    gameProgress: {
        currentCoordinates: {x: 0, y: 0},
        currentCharacteristics: {
            reputation: 0,
            might: 0,
            prayer: 0,
            agility: 0
        },
        seenQuests: [],
        currentPollen: 0,
        seenEvents: [],
        eventOutcomes: [],
        metNpcs: []
    }
};

const adventureLog = document.querySelector(".adventure-log");

const displayReputation = document.querySelector(".reputation-stat-value");
displayReputation.textContent = gameData.playerCharacteristics.reputation;

const displayMight = document.querySelector(".might-stat-value");
displayMight.textContent = gameData.playerCharacteristics.might;

const displayPrayer = document.querySelector(".prayer-stat-value");
displayPrayer.textContent = gameData.playerCharacteristics.prayer;

const displayAgility = document.querySelector(".agility-stat-value");
displayAgility.textContent = gameData.playerCharacteristics.agility;

const displayPollen = document.querySelector(".pollen-stat-value");
displayPollen.textContent = gameData.pollen;

const eventDescription = document.querySelector(".event-description");

const eventOptions = document.querySelector(".event-options");

const eventInfo = document.querySelector(".event-info");

const journalBox = document.querySelector(".journal-box");

const journalClose = document.querySelector(".journal-close");

export {adventureLog,
    displayReputation, displayMight, displayPrayer, displayAgility, displayPollen,
    eventDescription, eventOptions, eventInfo,
    journalBox, journalClose};

let levelData = {};

let chapterName = "";

let map = [];
let player = {x: 0, y: 0};
let tileSet = {};

let dialogueData = {};
let eventData = {};
let doorData = {};
let enemyData = {};
let questData = {};
let npcData = {};

export function loadLevelData(slug = CHAPTERS.CHAPTER_1) {
    fetch("/roguelike-game/load-level?slug=" + slug)
        .then(response => response.json())
        .then(level => {
            levelData = level;
            chapterName = level.name;
            map = level.tilemap;
            player = level.player;
            tileSet = level.tileset;

            const chapterHeading = document.querySelector(".level-title__heading");
            chapterHeading.textContent = `-=${chapterName}=-`;

            mapRender(map, player);
        })
        .catch(err => {
            console.error("Failed to load level:", err);
        });
}

export function loadDialogueData(slug = chapterOneSlugs.DIALOGUES) {
    fetch("/roguelike-game/load-script?slug=" + slug)
        .then(response => response.json())
        .then(dialogues => {
            dialogueData = dialogues;
        })
        .catch(err => {
            console.error("Failed to load dialogues:", err);
        });
}

export function loadEventData(slug = chapterOneSlugs.EVENTS) {
    fetch("/roguelike-game/load-script?slug=" + slug)
        .then(response => response.json())
        .then(events => {
            eventData = events;
        })
        .catch(err => {
            console.error("Failed to load events:", err);
        });
}

export function loadDoorData(slug = chapterOneSlugs.DOORS) {
    fetch("/roguelike-game/load-script?slug=" + slug)
        .then(response => response.json())
        .then(doors => {
            doorData = doors;
        })
        .catch(err => {
            console.error("Failed to load doors:", err);
        });
}

export function loadEnemyData(slug = chapterOneSlugs.ENEMIES) {
    fetch("/roguelike-game/load-script?slug=" + slug)
        .then(response => response.json())
        .then(enemies => {
            enemyData = enemies;
        })
        .catch(err => {
            console.error("Failed to load enemies:", err);
        });
}

export function loadQuestData(slug = chapterOneSlugs.QUESTS) {
    fetch("/roguelike-game/load-script?slug=" + slug)
        .then(response => response.json())
        .then(quests => {
            questData = quests;
        })
        .catch(err => {
            console.error("Failed to load quests:", err);
        });
}

export function loadNpcData(slug = chapterOneSlugs.NPCS) {
    fetch("/roguelike-game/load-script?slug=" + slug)
        .then(response => response.json())
        .then(npcs => {
            npcData = npcs
        })
        .catch(err => {
            console.error("Failed to load npcs:", err);
        });
}

export {levelData, chapterName, map, player, tileSet, dialogueData, eventData, doorData, enemyData, questData, npcData};