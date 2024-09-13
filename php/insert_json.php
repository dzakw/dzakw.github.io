<?php
header('Content-Type: application/json');

$response = ["success" => false, "message" => ""];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the raw POST data
    $jsonData = file_get_contents('php://input');

    // Database connection parameters
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "learn_frontend";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        $response['message'] = "Connection failed: " . $conn->connect_error;
        echo json_encode($response);
        exit();
    }

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO users_json (user_data) VALUES (?)");
    $stmt->bind_param("s", $jsonData);

    // Execute the query
    if ($stmt->execute()) {
        $response['success'] = true;
        $response['message'] = "Data successfully recorded.";
    } else {
        $response['message'] = "Error: " . $stmt->error;
    }

    // Close the connection
    $stmt->close();
    $conn->close();
}

echo json_encode($response);
?>
