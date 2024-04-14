<?php
// Database connection parameters
$servername = "localhost"; // Change this to your database server
$username = "root"; // Change this to your database username
$password = "vamsi123"; // Change this to your database password
$dbname = "login"; // Change this to your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Extract data from form
    $username = $_GET['username'];
    $password = $_GET['password'];

    // SQL statement to insert data into the table
    $sql = "INSERT INTO login-data (username,password) VALUES ('$username', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "Details matched";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

error_reporting(E_ALL);
ini_set('display_errors', 1);


// Close connection
$conn->close();
?>
