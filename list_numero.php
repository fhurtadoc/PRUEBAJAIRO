<?php 
include_once('conexion.php');
$query="SELECT numero FROM numero WHERE id=1";
$result=mysqli_query($conexion, $query);
$numero = mysqli_fetch_assoc($result);
$jsonstring=json_encode($numero);
echo $jsonstring;