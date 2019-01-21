<?php
$servername = "localhost:3306";
$username = "root";
$password = "";
$dbname = "vaultcode";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?> 
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<meta name="description" content="JS">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<title>JS</title>
</head>
<body>
	<div class="flashButtons">
	<div id="greenBlock"></div>
	<div id="redBlock"></div>
	</div>
	<div class="main-container">
		<div class="button_code">
			<button class="buttonNumber" value="1" onclick="getNumber(this)">1</button>
			<button class="buttonNumber" value="2" onclick="getNumber(this)">2</button>
			<button class="buttonNumber" value="3" onclick="getNumber(this)">3</button>
		</div>

		<div id="code-container"></div>
	</div>
	<script type="text/javascript" src="js/main.js"></script>
</body>
</html>