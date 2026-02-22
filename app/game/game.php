<?php

require_once __DIR__ . "/../views/header.php";
?>

<body>
<div class="container-flex-center">
    <div class="game-interface">

        <section class="player-stats">
            <div class="stats-display">
                <div class="stat-item">HEALTH {<span class="current-health">10</span>/<span class="max-health">10</span>}</span></div>
                <div class="stat-item">MYSTICISM {<span class="current-mysticism">10</span>/<span class="max-mysticism">10</span>}</div>
                <div class="stat-item">WILLPOWER {<span class="current-willpower">10</span>}</div>

                <div class="stat-item">REPUTATION <span class="reputation-stat-value">0</span>|</div>
                <div class="stat-item">MIGHT <span class="might-stat-value">0</span>|</div>
                <div class="stat-item">PRAYER <span class="prayer-stat-value">0</span>|</div>
                <div class="stat-item">AGILITY <span class="agility-stat-value">0</span>|</div>
                <div class="stat-item">POLLEN <span class="pollen-stat-value">0</span></div>
            </div>
            <div class="stats-divider">||</div>
            <div class="game-menu">
                <div class="game-menu-item"><a class="game-menu-link game-menu-link_ingame" href="main-menu">[Menu]</a></div>
                <div class="game-menu-item" id="saveGame">[Save]</div>
                <div class="game-menu-item" id="loadGame">[Load]</div>
                <div class="game-menu-item" id="questJournal">[Journal]</div>
            </div>
        </section>

        <section class="level-title">
            <h3 class="level-title__heading"></h3>
        </section>

        <section class="game-view">
            <div class="map-display">
                <div id="game-map" class="tile-grid"></div>
            </div>

            <!--events-->
            <div class="event-box">
                <div class="event-content">
                    <div class="event-portrait">
                        <!--<img src="" class="event-portrait__image">-->
                    </div>
                    <div class="event-description">Use WASD to move.</div>
                    <div class="event-info"></div>
                    <div class="event-options"></div>
                </div>
            </div>

            <div class="combat-box">
                <div class="combat-content">
                    <div class="combat-description">You meet a new enemy. He is wielding a wooden staff.</div>
                    <hr style="margin-bottom: 10px; margin-top: 10px">
                    <div class="combat-display">
                        <div class="combat-weapon-window">
                            <div class="combat-weapon">Wooden Spear</div>
                            <div class="combat-player-info">
                                <p>Accuracy: <span class="player-accuracy">10</span>%</p>
                                <p>Evasion: <span class="player-evasion">10</span>%</p>
                            </div>
                            <div class="combat-attack-types">
                                <button class="attack-button">Chop: <span class="weapon-chop-damage">5</span>D</button>
                                <button class="attack-button">Slash: <span class="weapon-slash-damage">6</span>D</button>
                                <button class="attack-button">Thrust: <span class="weapon-thrust-damage">7</span>D</button>
                            </div>
                            <div class="combat-defense-mode">
                                <button class="attack-button">Shield</button>
                            </div>
                        </div>

                        <div class="combat-progress-window">
                            <p class="combat-player-message">>player message</p>
                            <p class="combat-enemy-message">enemy message<</p>
                        </div>

                        <div class="combat-magic-window">
                            <div class="magic-schools-slider">School of Thoughts</div>
                            <div class="magic-player-info">
                                <p>Spell chance: <span class="player-spell-chance">10</span>%</p>
                                <p>Willpower: <span class="player-spell-chance">10</span>%</p>
                            </div>
                            <div class="magic-spells">
                                <button class="magic-button">Telepathy</button>
                                <button class="magic-button">Mind Blow</button>
                                <button class="magic-button">Mind Wave</button>
                                <button class="magic-button">Pacify</button>
                            </div>
                        </div>
                    </div>
                    <div class="combat-footer">
                        <button class="option-button option-button_small take-mercy">Take mercy</button>
                        <button class="option-button option-button_small execute">Execute</button>
                        <button class="option-button option-button_small ask-mercy">Ask mercy</button>
                    </div>
                </div>
            </div>

            <!--journal-->
            <div class="journal-box hidden">
                <div class="journal-content">
                    <div class="journal-header">
                        <h3>Quest Journal</h3>
                        <button class="journal-close">✕</button>
                    </div>

                    <div class="journal-active-quests">
                        <h4 class="journal-section-title">Active Quests</h4>
                        <div class="quest-list-active">
                            <template id="quest-template">
                                <div class="quest-item">
                                    <div class="quest-header">
                                        <span class="quest-toggle">▶</span>
                                        <span class="quest-title">Reach the Chyceen border</span>
                                    </div>
                                    <div class="quest-description">
                                        <p>Your Order assigned you to travel to Chyceen.</p>
                                        <p>Speak to the commandant of the Chyceen fort.</p>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>

                    <div class="journal-completed-quests">
                        <h4 class="journal-section-title">Completed Quests</h4>
                        <div class="quest-list-completed">
                            <div class="quest-item_completed">
                                <div class="quest-header">
                                    <span class="quest-toggle">▶</span>
                                    <span class="quest-title_completed">Arrive to the Borderlands</span>
                                </div>
                                <div class="quest-description">
                                    <p>You have arrived to the Borderlands last night.
                                        It was an exhausting journey, so you broke camp and rested for the night.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="bottom-interface">
            <div class="adventure-log"></div>
            <div class="inventory">
<!--                <div class="inventory-header">-->
<!--                    <h4>Inventory</h4>-->
<!--                    <h4>Wielding: <span>Wooden Spear</span></h4>-->
<!--                    <h4>Wearing: <span>Wax cuirass</span></h4>-->
<!--                    <h4>Shield: <span>Wooden shield</span></h4>-->
<!--                </div>-->
<!--                <div class="inventory-content">-->
<!--                    <div class="inventory-category">-->
<!--                        <h4 class="inventory-category__heading">Weapon</h4>-->
<!--                        <p>Wooden dagger</p>-->
<!--                        <p>Wooden spear</p>-->
<!--                    </div>-->
<!--                    <div class="inventory-category">-->
<!--                        <h4 class="inventory-category__heading">Armor</h4>-->
<!--                        <p>Wooden shield</p>-->
<!--                        <p>Wax cuirass</p>-->
<!--                    </div>-->
<!--                    <div class="inventory-category">-->
<!--                        <h4 class="inventory-category__heading">Food</h4>-->
<!--                        <p>Apple seed</p>-->
<!--                        <p>Water drop</p>-->
<!--                        <p>Pepper bag</p>-->
<!--                    </div>-->
<!--                    <div class="inventory-category">-->
<!--                        <h4 class="inventory-category__heading">Portions</h4>-->
<!--                    </div>-->
<!--                    <div class="inventory-category">-->
<!--                        <h4 class="inventory-category__heading">Magic Books</h4>-->
<!--                    </div>-->
<!--                </div>-->
            </div>
        </section>

    </div>
</div>
<script type="module" src="/roguelike-game/public/assets/main.js"></script>
</body>

</html>