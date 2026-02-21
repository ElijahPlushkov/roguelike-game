<?php
header('Content-Type: application/json');

require __DIR__ . "/../models/script-loader.model.php";

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    $id = $_GET["id"] ?? null;

    if (!$id) {
        http_response_code(400);
        echo json_encode(["error" => "Missing id"]);
        exit;
    }

    $scriptLoader = new ScriptLoader();
    $scriptData = $scriptLoader->loadScript($id);

    if ($scriptData) {
        echo json_encode($scriptData, true);
    }
}