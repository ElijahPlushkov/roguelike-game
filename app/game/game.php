<?php

require_once __DIR__ . "/../views/header.php";
?>

<body>
<div class="container-flex-center">
    <div class="game-interface">

        <section class="player-stats">
            <div class="stats-display">
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
                        <!--                    <img src="" class="event-portrait__image">-->
                    </div>
                    <div class="event-description">Use WASD to move.</div>
                    <div class="event-info"></div>
                    <div class="event-options"></div>
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

        <section class="adventure-log-container">
            <div class="adventure-log"></div>
        </section>

    </div>
</div>
<script type="module" src="/roguelike-game/public/assets/main.js"></script>
</body>

</html>