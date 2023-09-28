<?php
//connect to database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "contactus";
$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
 die("Connection failed: " . mysqli_connect_error());
}
 //get form data
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$message = $_REQUEST['message'];
    
$sql = "INSERT INTO contact(name, email, message)
VALUES ('$name', '$email', '$message)";
if (mysqli_query($conn, $sql))
 echo "New record created successfully";
else
 echo "Error: " . $sql . "<br>" . mysqli_error($conn);
mysqli_close($conn);
?>