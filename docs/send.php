<?php 

$name      =   htmlspecialchars($_POST['name'], ENT_QUOTES);
$phone     =   htmlspecialchars($_POST['phone'], ENT_QUOTES);
$email     =   htmlspecialchars($_POST['email'], ENT_QUOTES);

$email_to  = 'kabyr2@yandex.ru';
$headers   = "From: order@lidkom.ru";
$subject   = "Обратный звонок Lidkom";

$message  = "Имя:    $name\r\nТелефон:  $phone\r\nE-mail:  $email\r\n";
mail($email_to, $subject, $message, $headers);

?>