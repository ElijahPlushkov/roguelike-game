<?php

require_once __DIR__ . "/../../core/Dbh.php";

class LevelController extends Dbh {
    private $db;

    public function __construct() {
        $this->db = $this->connect();
    }

    public function uploadLevel($levelId, $name, $levelData) {

        if (!$levelData || !isset($levelId) || !isset($name)) {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid level data']);
            return;
        }

        $stmt = $this->db->prepare("INSERT INTO levels (name, level_id, level_data) VALUES (?, ?, ?) 
        ON DUPLICATE KEY UPDATE name = VALUES(name), level_data = VALUES(level_data)");

        $stmt->execute([$name,
                        $levelId,
                        json_encode($levelData)
        ]);

        echo json_encode(['success' => true, 'message' => 'Level uploaded successfully']);
    }

    public function loadLevel($levelId) {
        $stmt = $this->db->prepare("SELECT level_data FROM levels WHERE level_id= ?");
        $stmt->execute([$levelId]);
        $result =  $stmt->fetch(PDO::FETCH_ASSOC);

        $levelData = $result["level_data"];

        echo json_decode($levelData, true);
    }
}