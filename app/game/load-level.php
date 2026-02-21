<?php
header('Content-Type: application/json');

require __DIR__ . "/../models/upload-level.model.php";

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    $id = $_GET["id"] ?? null;

    if (!$id) {
        http_response_code(400);
        echo json_encode(["error" => "Missing id"]);
        exit;
    }

    $levelController = new LevelController();
    $levelData = $levelController->loadLevel($id);

    if ($levelData) {
        echo json_encode($levelData, true);
    }
}