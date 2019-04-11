<?php
$to = "maxsusmail@gmail.com";
$theme = "Новый заказ в компанию Like Studio";
$from_user = $_GET['name'];
$from_email = $_GET['email'];
$message = "Имя пользователя: " .$_GET['name']. "<br>";
$message .= "Номер телефона: " .$_GET['phone']. "<br>";
$message .= "Email: " .$_GET['email']. "<br>";
$message .= "Комментарии: " .$_GET['message']. "<br>";
$headers = "From: $from_user <$from_email>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";
$result = mail($to, $theme, $message, $headers);
if ($result){
    echo ('1');
}
else {
    echo ('0');
}



