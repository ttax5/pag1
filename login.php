<?php

// alert('Registro realizado correctamente');

include("conexion.php");

$dni = $_POST['dni'];
$contrasena = $_POST['contrasena'];
		
$consulta="SELECT * FROM login WHERE contraseña = '$contrasena' AND DNI = $dni;";

$result = conexion($consulta);
$array = mysqli_fetch_array($result, MYSQLI_NUM);

if ( is_null($array) ){
	/*echo 'hola';*/
    
    echo "<script> 
    location.href = 'index.html';
    alert('Error en el registro');
    </script>";
}else{
	/*echo 'hass';*/
    echo "<script> 
        location.href = '/html/inicio.html';
        </script>";
}

?>