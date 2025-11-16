<?php

require_once __DIR__ . "/../views/header.php";

?>
<body>
<div class="main-menu-container">
    <section class="main-menu__container">
        <h2 class="main-menu__heading">User Profile</h2>

        <div class="profile-section">
            <div class="profile-info">
                <p><strong>Username:</strong>
                    <?php echo htmlspecialchars($_SESSION["username"]); ?>
                </p>
                <p><strong>Description:</strong></p>
                <p class="description">
                    <?php echo htmlspecialchars($about); ?>
                </p>
            </div>
            <br>
            <div class="stats-section">
                <h2 class="main-menu__heading">Statistics</h2>
                <ul class="stats-list">
                    <li class="stats-name">Chapters completed: <span class="stat-value">-</span></li>
                    <li class="stats-name">Enemies slayed: <span class="stat-value">-</span></li>
                    <li class="stats-name">Pollen collected: <span class="stat-value">-</span></li>
                </ul>
            </div>
            <form action="user-profile" method="POST">
                <button type="submit" name="edit-profile" class="main-menu__button">Edit Profile</button>
            </form>

            <form action="main-menu" method="GET">
                <button type="submit" class="main-menu__button">Back to Menu</button>
            </form>
        </div>
    </section>
</div>
</body>
</html>
