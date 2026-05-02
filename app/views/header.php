<?php

require __DIR__ . "/../../config/pages.php";

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?= htmlspecialchars(setPageName($pages, $pageKey)) ?></title>
    <link rel="stylesheet" href="/roguelike-game/public/assets/css/main.css">
</head>