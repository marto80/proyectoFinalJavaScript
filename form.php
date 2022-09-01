<?php

$destinatario = 'marturanga@gmail.com';

$nombre = $_POST['name'];
$mail = $_POST['email'];
$whatsapp = $_POST['whatsapp'];
$horario = $_POST['horario'];
$llamarpor1 = $_POST['llamarpor1'];
$llamarpor2 = $_POST['llamarpor2'];
$llamarpor3 = $_POST['llamarpor3'];
$message = $_POST['message'];

$header = 'Datos del interesado - index';
$asunto = 'Futuro alumno DeROSE Palermo';

$mensaje = "Nombre: " . $nombre . "\r\n";
$mensaje .="mail: " . $mail . "\r\n";
$mensaje .="Wap: " . $whatsapp . "\r\n";
$mensaje .="Contactar por: " . $llamarpor1 . "\r\n";
$mensaje .="Contactar por: " . $llamarpor2 . "\r\n";
$mensaje .="Contactar por: " . $llamarpor3 . "\r\n";
$mensaje .="Franja horaria para contactar: " . $horario . "\r\n";
$mensaje .="Mensaje: " . $message . "\r\n";


mail($destinatario, $asunto, $mensaje, $header);

header ('Location: pages/exito.html');
?>