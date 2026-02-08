import {chapterOneSlugs, CHAPTERS} from "./slugs.js";
import {mapRender} from "./mapRender.js";

export const gameData = {
    playerCoordinates: {x: 0, y: 1},

    health: 10,
    currentHealth: 10,
    mysticism: 10,
    currentMysticism: 10,
    willpower: 10,

    quests: [],

    npcs: [],

    eventOutcomes: [],
    seenEvents: [],

    isEventActive: false,

    playerCharacteristics: {
        reputation: 1,
        might: 1,
        prayer: 1,
        agility: 1
    },

    pollen: 0,
};

const adventureLog = document.querySelector(".adventure-log");

const displayMaxHealth = document.querySelector(".max-health");
displayMaxHealth.textContent = gameData.health;

const displayCurrentHealth = document.querySelector(".current-health");
displayCurrentHealth.textContent = gameData.currentHealth;

const displayMaxMysticism = document.querySelector(".max-mysticism");
displayMaxMysticism.textContent = gameData.mysticism;

const displayCurrentMysticism = document.querySelector(".current-mysticism");
displayCurrentMysticism.textContent = gameData.currentMysticism;

const displayWillpower = document.querySelector(".current-willpower");
displayWillpower.textContent = gameData.willpower;

const displayMight = document.querySelector(".might-stat-value");
displayMight.textContent = gameData.playerCharacteristics.might;

const displayReputation = document.querySelector(".reputation-stat-value");
displayReputation.textContent = gameData.playerCharacteristics.reputation;

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
    displayMaxHealth, displayCurrentHealth, displayMaxMysticism, displayCurrentMysticism, displayWillpower,
    displayReputation, displayMight, displayPrayer, displayAgility, displayPollen,
    eventDescription, eventOptions, eventInfo,
    journalBox, journalClose};

let levelData = {};

let chapterName = "";

let map = [];
let playerCoordinates = {x: 0, y: 0};
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
            playerCoordinates = level.player;
            tileSet = level.tileset;

            const chapterHeading = document.querySelector(".level-title__heading");
            chapterHeading.textContent = `-=${chapterName}=-`;

            mapRender(map, playerCoordinates);
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

export {levelData, chapterName, map, playerCoordinates, tileSet, dialogueData, eventData, doorData, enemyData, questData, npcData};