<?php

include("conexion.php");

$dni = $_POST['dni'];
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$contrasena = $_POST['contrasena'];

$insertar = "INSERT INTO cliente(dni, nombre_cliente, apellido, CONTRASEÑA) VALUES($dni, '$nombre', '$apellido','$contrasena')";

$insertar_l = "INSERT INTO login(DNI, contraseña) VALUES ($dni, '$contrasena')";

$result = conexion($insertar);

$result = conexion($insertar_l);

$comprobar = "SELECT dni FROM cliente WHERE dni=$dni";

$result = conexion($comprobar);
$array = mysqli_fetch_array($result, MYSQLI_NUM);

if( is_null($array) ){
    /*echo 'hola';*/
    
    echo "<script> 
    location.href = 'index.html';
    alert('Error en el registro');
    </script>";
    

}else{
   
   /*echo 'hass';*/
    echo "<script> 
        location.href = 'index.html';
        alert('Registro realizado correctamente');
        </script>";

}

?>