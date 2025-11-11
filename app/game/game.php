<?php

require_once __DIR__ . "/../views/header.php";
?>

<body>
<div class="game-container">

<section class="game-info">

    <div class="players-info">
        <div class="players-info__item">REPUTATION <span class="reputation-characteristic-count">0</span>|</div>
        <div class="players-info__item">MIGHT <span class="might-characteristic-count">0</span>|</div>
        <div class="players-info__item">PRAYER <span class="prayer-characteristic-count">0</span>|</div>
        <div class="players-info__item">POLLEN <span class="pollen-quantity-count">0</span></div>
    </div>

    <div class="game-info__divider">||</div>

    <div class="menu">

        <div class="menu__item"><a class="menu__link menu__link-ingame" href="main-menu">[Menu]</a></div>
        <div class="menu__item" id="saveGame">[Save]</div>
        <div class="menu__item" id="loadGame">[Load]</div>
        <div class="menu__item">[Settings]</div>
    </div>

</section>

<section class="level-title">
    <h3 class="level-title__heading"></h3>
</section>

    <div class="container">
<section class="map-display">
    <div id="game" class="tile-grid"></div>
</section>

<section>
    <div class="event-box">
        <div class="event-content">
            <div class="event-portrait">
                <img src="assets/spider-placeholder.png" class="event-portrait__image">
            </div>
            <div class="event-description">This is the description.</div>
            <div class="event-options"></div>
        </div>
    </div>
</section>
</div>
<section class="adventure-log-container">
    <div class="adventure-log"></div>
</section>

</div>

<script type="module" src="/roguelike-game/public/assets/main.js"></script>
</body>
</html>