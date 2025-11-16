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
                <div class="stat-item">POLLEN <span class="pollen-stat-value">0</span></div>
            </div>

            <div class="stats-divider">||</div>

            <div class="game-menu">

                <div class="game-menu-item"><a class="game-menu-link game-menu-link_ingame" href="main-menu">[Menu]</a>
                </div>
                <div class="game-menu-item" id="saveGame">[Save]</div>
                <div class="game-menu-item" id="loadGame">[Load]</div>
                <div class="game-menu-item">[Settings]</div>
            </div>

        </section>

        <section class="level-title">
            <h3 class="level-title__heading"></h3>
        </section>

        <section class="game-view">
            <div class="map-display">
                <div id="game-map" class="tile-grid"></div>
            </div>

            <div class="event-box">
                <div class="event-content">
                    <div class="event-portrait">
<!--                        <img src="assets/spider-placeholder.png" class="event-portrait__image">-->
                    </div>
                    <div class="event-description">Use WASD to move.</div>
                    <div class="event-options"></div>
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