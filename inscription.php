<?php 
header("Access-Control-Allow-Origin: *"); 
define('MYSQL_SERVEUR', 'localhost');
define('MYSQL_UTILISATEUR', 'root');
define('MYSQL_MOTDEPASSE', '');
define('MYSQL_BASE', 'bdd_login');

$mysql = new MySQLi(MYSQL_SERVEUR, MYSQL_UTILISATEUR, MYSQL_MOTDEPASSE, MYSQL_BASE);

$message='Test';
 
echo '<script type="text/javascript">window.alert("'.$message.'");</script>';
$mysql->close();
  ?>