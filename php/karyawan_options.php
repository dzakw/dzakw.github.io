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

// Fetch all idcards from the karyawan table, sorted by idcard
$sql = "SELECT idcard FROM karyawan ORDER BY idcard ASC";
$result = $conn->query($sql);

// Check if there are results
if ($result->num_rows > 0) {
    // Output each idcard as an <option> element
    while($row = $result->fetch_assoc()) {
        echo '<option value="' . $row['idcard'] . '">' . $row['idcard'] . '</option>';
    }
} else {
    echo '<option value="">No employees found</option>';
}

// Close the connection
$conn->close();
?>
