<?php

$destinatario = 'marturanga@gmail.com';

$nombre = $_POST['name'];
$mail = $_POST['email'];
$whatsapp = $_POST['whatsapp'];
$horario = $_POST['horario'];
$llamarpor1 = $_POST['llamarpor1'];
$llamarpor2 = $_POST['llamarpor2'];
$llamarpor3 = $_POST['llamarpor3'];
$interes1 = $_POST['interes1'];
$interes2 = $_POST['interes2'];
$interes3 = $_POST['interes3'];
$interes4 = $_POST['interes4'];
$interes5 = $_POST['interes5'];
$interes6 = $_POST['interes6'];
$interes7 = $_POST['interes7'];
$interes8 = $_POST['interes8'];
$message = $_POST['message'];

$header = 'Datos del interesado - contacto';
$asunto = 'Futuro alumno DeROSE Palermo';

$mensaje = "Nombre: " . $nombre . "\r\n";
$mensaje .="mail: " . $mail . "\r\n";
$mensaje .="Wap: " . $whatsapp . "\r\n";
$mensaje .="Contactar por: " . $llamarpor1 . "\r\n";
$mensaje .="Contactar por: " . $llamarpor2 . "\r\n";
$mensaje .="Contactar por: " . $llamarpor3 . "\r\n";
$mensaje .="Intereses: " . $interes1 . "\r\n";
$mensaje .="Intereses: " . $interes2 . "\r\n";
$mensaje .="Intereses: " . $interes3 . "\r\n";
$mensaje .="Intereses: " . $interes4 . "\r\n";
$mensaje .="Intereses: " . $interes5 . "\r\n";
$mensaje .="Intereses: " . $interes6 . "\r\n";
$mensaje .="Intereses: " . $interes7 . "\r\n";
$mensaje .="Intereses: " . $interes8 . "\r\n";
$mensaje .="Franja horaria para contactar: " . $horario . "\r\n";
$mensaje .="Mensaje: " . $message . "\r\n";


mail($destinatario, $asunto, $mensaje, $header);

header ('Location: pages/exito.html');
?>