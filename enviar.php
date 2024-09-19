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
            
            // Llamando a los campos
            $Nombre     = $_POST['Nombre'];
            $Asunto     = $_POST['Asunto'];
            $Correo     = $_POST['Correo'];
            $Mensaje    = $_POST['Mensaje'];
            
            // Datos para el correo de empresa
            $destinatario = "contacto@detec-peru.com";
            $destinatarioBCC = "detec-peru@seosolutionsperu.com";
            $asunto       = "CONTACTANOS DESDE LA WEB - DETEC-PERU.COM";
            
            $carta  = "El cliente        : $Nombre \n";
            $carta .= "Con Asunto        : $Asunto \n";
            $carta .= "y Correo          : $Correo \n";
            $carta .= "Indica            : $Mensaje";
            
            $head = implode("\r\n", [
                "MIME-Version: 1.0",
                "Content-type: text/plain; charset=utf-8",
                "Bcc: $destinatarioBCC"
              ]);

            //  Datos para el correo de Clientes
            mail($destinatario, $asunto, $carta, $head);
            $response=array('error'=>'0','mensaje'=>'Todo OK');
    	    
        }
    }
    else 
    {
        $response=array('error'=>'1','mensaje'=>'Debe de Seleccionar el Captcha');
    }
    
    echo json_encode($response);
?>