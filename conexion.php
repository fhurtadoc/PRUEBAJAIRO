<?php

$host="localhost";
//$user="itsys";
$user="root";
//$password="12345";
$password="23Hilbert";
$db="pruebaJairo";

$conexion=mysqli_connect(
    $host,
    $user,
    $password,
    $db
);
if($conexion->connect_errno){
    die('conmect Error'.$conexion->connect_errno);
};
