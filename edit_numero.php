<?php 
include_once('conexion.php');
echo($_POST['numero']);
$numero=($_POST['numero']);
$UPDATE="UPDATE numero SET numero='$numero' WHERE id=1";
$result=mysqli_query($conexion, $UPDATE);


?>