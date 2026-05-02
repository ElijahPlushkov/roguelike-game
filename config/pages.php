<?php

//this script updates a page's name in the header

$pages = [
    "game" => "Beetlejust",
    "main-menu" => "Main Menu",
    "death-screen" => "DEATH",
    "user-profile" => "User Profile"
];

$uri = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
$segments = explode("/", trim($uri, "/"));
$pageKey = end($segments);

function setPageName(array $pages, string $pageKey): string {
    $pageName = $pages[$pageKey];
    return $pageName;
}