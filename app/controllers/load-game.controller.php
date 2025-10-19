<?php

session_start();

require __DIR__ . "/../models/load-game.model.php";

if ($_SERVER["REQUEST_METHOD"] === "GET") {

    $userId = $_SESSION["id"];

    $loadSavedGame = new LoadGame();
    $saveFile = $loadSavedGame->loadSavedGame($userId);

    if ($saveFile) {
        header("Content-Type: application/json");
        echo $saveFile;
    } else {
        echo json_encode(["error" => "no saved games"]);
    }
}
