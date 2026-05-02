<?php
session_start();
require __DIR__ . "/../models/upload-level.model.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $levelId = $_POST["level-id"];
    $name = $_POST["name"];
    $levelData = $_POST["level-data"];

    $levelController = new LevelController();
    $levelController->uploadLevel($levelId, $name, $levelData);
}