<?php

$host="localhost";
$user="itsys";
$password="12345";
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
