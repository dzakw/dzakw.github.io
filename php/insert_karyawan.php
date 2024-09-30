<?php
include 'connect.php'; // Make sure the connection is correct

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['fname'];
    $idcard = $_POST['idcard'];
    $team = $_POST['team']; // Team can be null

    // Format name and team
    $name = ucwords(strtolower(trim($name))); // Capitalize first letter of each word
    $team = ucwords(strtolower(trim($team))); // Capitalize first letter of each word

    // Prepare the SQL statement to insert data into the 'karyawan' table
    $sql = "INSERT INTO karyawan (name, idcard, team) VALUES (?, ?, ?)";

    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param("sss", $name, $idcard, $team); // Bind all three parameters
        if ($stmt->execute()) {
            header("Location: ../index.php");
            exit();
        } else {
            echo "Error: " . $stmt->error;
        }
        $stmt->close();
    }
}

$conn->close();
?>
