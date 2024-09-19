<?php

    $recaptcha = $_POST["captcha"];
    
    $url = 'https://www.google.com/recaptcha/api/siteverify';
    $data = array(
        'secret' => '6LepkNshAAAAAL9Gdsw0Xm7JfcmdVuo9NruKvRap',
        'response' => $recaptcha
    );

    $options = array(
        'http' => array (
            'method' => 'POST',
            'content' => http_build_query($data)
        )
    );
    
    $context  = stream_context_create($options);
    $verify = file_get_contents($url, false, $context);
    $captcha_success = json_decode($verify);
    
    if ($captcha_success->success) 
    {
        if($_POST){
            
            //Correo de Destino
            $destinatario = "contacto@detec-peru.com"; 
            $copiaoculta  = "detec-peru@seosolutionsperu.com";
            $from         = "contacto@detec-peru.com";
            
            // Asunto del Correo
            $asunto       = "TRABAJAR CON NOSOTROS DESDE LA WEB - DETEC-PERU.COM";
            
            // Llamando a los campos
            $Nombre     = $_POST['Nombre'];
            $Asunto     = $_POST['Asunto'];
            $Correo     = $_POST['Correo'];
            $Mensaje    = $_POST['Mensaje'];
            
            // Armamos el Cuerpo del correo
            $cuerpo  = "El cliente        : $Nombre \n";
            $cuerpo .= "Con Asunto        : $Asunto \n";
            $cuerpo .= "y Correo          : $Correo \n";
            $cuerpo .= "Indica            : $Mensaje";

            //Cod MD5 
            $separator = md5(time());

             // carriage return type (we use a PHP end of line constant)
            $eol = PHP_EOL;
            
            // main header (multipart mandatory)
            $headers  = "From: ".$from.$eol;
            $headers .= "Bcc: ".$copiaoculta.$eol;
            $headers .= "MIME-Version: 1.0".$eol;
            $headers .= "Content-Type: multipart/mixed; boundary=\"".$separator."\"".$eol.$eol;
                
            //Obtener datos del archivo subido 
            $file_tmp_name    = $_FILES['Adjunto']['tmp_name'];
            $file_name        = $_FILES['Adjunto']['name'];
            $file_size        = $_FILES['Adjunto']['size'];
            $file_type        = $_FILES['Adjunto']['type'];
            $file_error       = $_FILES['Adjunto']['error'];
        
            if($file_error > 0)
            {
                die('Error al subir el archivo. No se adjunto ningun archivo');
            }
            
            $handle = fopen($file_tmp_name, "r");
            $content = fread($handle, $file_size);
            fclose($handle);
            
            $attachment = chunk_split(base64_encode($content));
            
            //NOTICE I changed $headers to $body!!
            $body .= "Content-Transfer-Encoding: 7bit".$eol;
            $body .= "This is a MIME encoded message.".$eol; //had one more .$eol
                
            // message
            $body .= "--".$separator.$eol;
            $body .= "Content-Type: text/html; charset=\"iso-8859-1\"".$eol;
            $body .= "Content-Transfer-Encoding: 8bit".$eol.$eol;
            $body .= $cuerpo.$eol; //had one more .$eol
                
            // attachment
            $body .= "--".$separator.$eol;
            $body .= "Content-Type: application/octet-stream; name=\"".$file_name."\"".$eol;
            $body .= "Content-Transfer-Encoding: base64".$eol;
            $body .= "Content-Disposition: attachment".$eol.$eol;
            $body .= $attachment.$eol;
            $body .= "--".$separator."--";    

            // Send email 
            $mail = @mail($destinatario, $asunto, $body, $headers);
 
            // Email sending status 
            $status = $mail?"Correo electrónico enviado con éxito!":"El envío de correo electrónico falló."; 

            //  Datos para el correo de Clientes
            $response=array('error'=>'0','mensaje'=>$status,'Nombre del Archivo'=>$file_name);
    	    
        }
    }
    else 
    {
        $response=array('error'=>'1','mensaje'=>'Debe de Seleccionar el Captcha');
    }
    
    echo json_encode($response);
?>