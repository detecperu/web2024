<?php

require 'PHPMailer/PHPMailerAutoload.php';
$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->SMTPAuth = true;
$mail->Username = "lsfuentes37@gmail.com";
//Contrase«Ða del correo: detec.peru
$mail->Password = "@Fuentes23021992";
$mail->FromName =  $_POST['your-name'];
//$mail->addAddress('contacto@detec-peru.com','DETEC-PERU');
//$mail->addAddress('contacto.detec.peru@gmail.com','DETEC-PERU');
$mail->addAddress('luis.fuentescast@outlook.com', 'DETEC-PERU');
$mail->AddReplyTo($_POST['your-email'], $_POST['your-name']);

$mail->Subject = $_POST['your-subject'];
$cuerpo  = $_POST['your-message'];
$cuerpo .= '<br><br><br><br>Correo enviado por:<br>'.$_POST['your-name'].' - '.$_POST['your-email'];

$body = utf8_decode($cuerpo);


$mail->msgHTML($body);
$mail->AltBody= $body;

if (isset($_FILES['your-file'])){
	$mail->addAttachment($_FILES['your-file']['tmp_name'], $_FILES['your-file']['name']);
}

if (!$mail->send()) {
	if ($_POST['your-page'] == 'contact'){
		header('Location: contact.html');
	}else{
		header('Location: index.html');
	}
} else {
	if ($_POST['your-page'] == 'contact'){
		header('Location: contact.html');
	}else{
		header('Location: index.html');
	}
}
?>