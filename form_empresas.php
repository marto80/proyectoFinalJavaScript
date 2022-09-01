<?php

$destinatario = 'marturanga@gmail.com';

$nombre = $_POST['name'];
$mail = $_POST['email'];
$telefono = $_POST['telefono'];
$empresa = $_POST['empresa'];
$message = $_POST['message'];

$header = 'Datos de la empresa - contacto';
$asunto = 'Futura empresa para DeROSE Palermo';

$mensaje = "Nombre: " . $nombre . "\r\n";
$mensaje .="Mail: " . $mail . "\r\n";
$mensaje .="Tel: " . $telefono . "\r\n";
$mensaje .="Empresa: " . $empresa . "\r\n";
$mensaje .="Mensaje: " . $message . "\r\n";


mail($destinatario, $asunto, $mensaje, $header);

header ('Location: pages/exito.html');
?>