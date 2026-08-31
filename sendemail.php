<?php



$file =$_POST['file'];

$filename = $_POST['filename'];

$content = file_get_contents( $file);

$content = chunk_split(base64_encode($content));

$uid = md5(uniqid(time()));

$name = basename($file);



$mailto='office@pcf.ro';

$from_name=$_POST['name'];

$from_surname=$_POST['surname'];

$from_mail=$_POST['email'];

$from_phone=$_POST['phone'];

$from_description=$_POST['description'];



$from_mail1='office@pcf.ro';




$message='Buna ziua,'."\r\n\r\n";

$message.='Aveti un nou candidat cu urmatoarele date:'."\r\n\r\n";

$message.='Nume: '.$from_name."\r\n";

$message.='Prenume: '.$from_surname."\r\n";

$message.='Email: '.$from_mail."\r\n";

$message.='Telefon: '.$from_phone."\r\n";

$message.='Descriere: '.$from_description."\r\n";

$message.='GDPR: Acceptat'."\r\n";



 

$subject='Aveti un nou candidat';





// header

$header = "From: Office PCF <".$from_mail1.">\r\n";

$header .= "Reply-To: ".$from_mail."\r\n";

$header .= "MIME-Version: 1.0\r\n";

$header .= "Content-Type: multipart/mixed; boundary=\"".$uid."\"\r\n\r\n";



// message & attachment

$nmessage = "--".$uid."\r\n";

$nmessage .= "Content-type:text/plain; charset=iso-8859-1\r\n";

$nmessage .= "Content-Transfer-Encoding: 7bit\r\n\r\n";

$nmessage .= $message."\r\n\r\n";

$nmessage .= "--".$uid."\r\n";

$nmessage .= "Content-Type: application/octet-stream; name=\"".$filename."\"\r\n";

$nmessage .= "Content-Transfer-Encoding: base64\r\n";

$nmessage .= "Content-Disposition: attachment; filename=\"".$filename."\"\r\n\r\n";

$nmessage .= $content."\r\n\r\n";

$nmessage .= "--".$uid."--";







if (mail($mailto, $subject, $nmessage, $header)) {

    $res=array();

    $res['succesfull']='true';

    echo json_encode($res); // Or do something here

} else {

  $res=array();

  $res['succesfull']='false';

  echo json_encode($res); // Or do something here

}

?>