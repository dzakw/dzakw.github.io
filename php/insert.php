<?php
header('Content-Type: application/json');

$response = ["success" => false, "message" => ""];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $car = $_POST['car'];
    $nationality = $_POST['nationality'];
    $isMarried = $_POST['isMarried'];

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

    // Insert data into the database
    $sql = "INSERT INTO users (name, email, car, nationality, isMarried) VALUES ('$name', '$email', '$car', '$nationality', '$isMarried')";
    if ($conn->query($sql) === TRUE) {
        $response['success'] = true;
        $response['message'] = "Data successfully recorded.";
    } else {
        $response['message'] = "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}

echo json_encode($response);
?>
