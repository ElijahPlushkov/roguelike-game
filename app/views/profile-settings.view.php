<?php

require_once __DIR__ . "/../views/header.php";

?>

<body>
<div class="main-menu-container">
    <section class="main-menu__container">
        <h2 class="main-menu__heading">Edit Profile</h2>
        <div class="profile-section">
            <div class="profile-info">
                <p><strong>Username:</strong>
                    <?php echo htmlspecialchars($_SESSION["username"]); ?>
                </p>
                <form action="user-profile" method="POST" class="main-menu__form">
                    <label for="about">Edit About:</label>
                    <textarea id="about" name="about"
                              class="main-menu__input"><?php echo htmlspecialchars($about); ?></textarea>
                    <button type="submit" name="save-changes" class="main-menu__button">Save Changes</button>
                </form>
            </div>
            <a class="main-menu__button" href="main-menu">Cancel</a>
        </div>
    </section>
</div>
</body>
</html>