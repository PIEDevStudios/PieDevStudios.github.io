<?php
    $db_server = "localhost";
    $db_user = "root";
    $db_pass = "";
    $db_name = "piewebdb";
    $conn = "";

    try {
        $conn = mysqli_connect($db_server, $db_user, $db_pass, $db_name);
    } catch (mysqli_sql_exception) {
        echo "Connection failed: " . mysqli_connect_error();
    }
    if ($conn) {
        echo "Connected successfully";
    }
?>