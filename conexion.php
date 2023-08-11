<?php
/*$servername = "localhost"; // Cambia esto con el nombre del servidor de la base de datos
$username = "id20955606_admin"; // Reemplaza con tu nombre de usuario de la base de datos
$password = "Lorena1234$."; // Reemplaza con tu contraseña de la base de datos
$dbname = "id20955606_lixts"; // Reemplaza con el nombre de tu base de datos

// Crea la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}*/

    function conexion($query) {
        $conexion=mysqli_connect('localhost', 'id20955606_admin', 'Lorena1234$.', 'id20955606_lixts');
        mysqli_set_charset($conexion, 'utf8');
        
        $res = mysqli_query($conexion, $query);


        mysqli_close($conexion);

        return $res;
    }    
?>
