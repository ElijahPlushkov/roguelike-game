<?php

session_start();
require __DIR__ . "/../models/save-game.model.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $saveData = json_decode(file_get_contents("php://input"), true);
    $id = $_SESSION["id"];

    $saveGame = new saveGame();
    $saveGame->uploadSaveFile($id, $saveData);
}