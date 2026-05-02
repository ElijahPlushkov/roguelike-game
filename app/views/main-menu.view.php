<body>
<div class="container-flex-center">
    <section class="game-name">
        <h2 class="game-name__title">Beetlejust</h2>
    </section>

    <div class="main-menu-container">
        <?php if (!isset($_SESSION["id"])) : ?>
            <section class="main-menu__authentication">

                <div class="main-menu__container">
                    <h2 class="main-menu__heading">New Player</h2>
                    <form action="register" method="POST" class="main-menu__form">
                        <input type="text" name="username" placeholder="Username" required class="main-menu__input">
                        <input type="password" name="password" placeholder="Password" required class="main-menu__input">
                        <button type="submit" name="register" class="main-menu__button">Register</button>
                    </form>
                </div>

                <div class="main-menu__container">
                    <h2 class="main-menu__heading">Famed Player</h2>
                    <form action="login" method="POST" class="main-menu__form">
                        <input type="text" name="username" placeholder="Username" required class="main-menu__input">
                        <input type="password" name="password" placeholder="Password" required class="main-menu__input">
                        <button type="submit" name="login" class="main-menu__button">Login</button>
                    </form>
                </div>

            </section>
        <?php else : ?>
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
                </div>
            </section>
        <?php endif; ?>
        <section class="main-menu__container">

            <?php if (isset($_SESSION["id"])) : ?>
                <a href="game">
                    <button type="submit" class="main-menu__button">New Game</button>
                </a>

                <div class="main-menu__button">
                    Load Game
                </div>
            <?php endif; ?>
            <div class="main-menu__button">
                Lore Book
            </div>

            <div class="main-menu__button">
                Send a Note
            </div>

            <div class="main-menu__button">
                Controls
            </div>

            <div class="main-menu__button">
                <a class="main-menu__link" href="upload-level">Level Uploader</a>
            </div>

            <div class="main-menu__button">
                <a class="main-menu__link" href="upload-script">Script Uploader</a>
            </div>

            <form action="logout" method="POST">
                <button type="submit" class="main-menu__button">Quit</button>
            </form>

        </section>
    </div>
</div>
</body>

</html>
