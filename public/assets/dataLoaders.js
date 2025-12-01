import {CHAPTERS, chapterOneSlugs} from "./slugs.js";
import {mapRender} from "./mapRender.js";

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

//load data
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

export { levelData, chapterName, map, player, tileSet, dialogueData, eventData, doorData, enemyData, questData};