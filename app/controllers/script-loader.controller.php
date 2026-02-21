<?php

session_start();
require __DIR__ . "/../models/script-loader.model.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $type = $_POST["type"];
    $scriptData = $_POST["script-data"];

    $scriptLoader = new ScriptLoader();
    $scriptLoader->uploadScript($name, $type, $scriptData);
}