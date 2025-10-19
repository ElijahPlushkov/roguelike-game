<?php
require_once __DIR__ . "/../../core/Dbh.php";

class saveGame extends Dbh {
    private $db;

    public function __construct() {
        $this->db = $this->connect();
    }

    public function uploadSaveFile($userId, $saveFile) {
        if (!$saveFile) {
            http_response_code(400);
            echo json_encode(['error' => 'save file is not provided']);
            return;
        }

        $stmt = $this->db->prepare("UPDATE users SET save_data = :save_data WHERE id = :id");
        $stmt->execute([
            ':save_data' => json_encode($saveFile),
            ':id' => $userId
        ]);

        echo json_encode(['success' => true, 'message' => 'game saved']);
    }
}