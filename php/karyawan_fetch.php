<?php
// Database connection settings
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "learn_frontend";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the 'idcard' parameter is set in the request
if (isset($_GET['idcard'])) {
    $idcard = $_GET['idcard'];

    // Prepare and execute the SQL statement to fetch employee data based on the idcard
    $sql = "SELECT idcard, name, team FROM karyawan WHERE idcard = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $idcard);
    $stmt->execute();
    $result = $stmt->get_result();

    // Check if data is found
    if ($result->num_rows > 0) {
        // Output the employee details with HTML for styling
        while ($row = $result->fetch_assoc()) {
            echo "<div class='employee-card'>";
            echo "<p><strong>ID Card:</strong> " . $row['idcard'] . "</p>";
            echo "<p><strong>Name:</strong> " . $row['name'] . "</p>";
            echo "<p><strong>Team:</strong> " . $row['team'] . "</p>";
            echo "</div>";
        }
    } else {
        echo "<div class='employee-card'>No employee found with this ID card.</div>";
    }

    // Close statement
    $stmt->close();
} else {
    echo "<div class='employee-card'>ID card number not provided.</div>";
}

// Close the connection
$conn->close();
?>
