<?php
header('Content-Type: application/json');

// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "learn_frontend";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]);
    exit();
}

// Retrieve the latest 20 records from the 'users' table
$sql = "SELECT name, email, car, nationality, isMarried FROM users ORDER BY id DESC LIMIT 10";
$result = $conn->query($sql);

$usersData = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $usersData[] = $row;
    }
}

$conn->close();

// Send the JSON response back to the client
echo json_encode(["success" => true, "data" => $usersData]);
?>
