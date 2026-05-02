<?php

require_once __DIR__ . "/../../core/Dbh.php";

class LoadGame extends Dbh {
    private $db;

    public function __construct() {
        $this->db = $this->connect();
    }

    public function loadSavedGame($userId) {
        $stmt = $this->db->prepare("SELECT save_data FROM users WHERE id = ?");
        $stmt->execute([$userId]);

        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        return $result["save_data"];
    }
}