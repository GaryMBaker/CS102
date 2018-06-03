<?php


$to = 'garybakerdev@gmail.com';
$subject = $_POST['subject'].", From: ".$_POST['email'];
$from = $_POST['fname'];
$fromEmail = $_POST['email'];
$message = $_POST['msg'];

$header = 'From: ' . $from . '<' . $fromEmail . '>';

if(!mail($to, $subject, $message, $header)){
    die('Error sending email.');
}else{
    header('Location:/');
}