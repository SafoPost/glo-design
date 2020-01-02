<?php

$userName = $_POST['userName'];
$userPhone = $_POST['userPhone'];
$userEmail = $_POST['userEmail'];
$userQuestion = $_POST['userQuestion'];

// Load Composer's autoloader
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug  = 0;                          // Enable verbose debug output
    $mail->isSMTP();                                // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';           // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                       // Enable SMTP authentication
    $mail->Username   = 'safopost.glo@gmail.com';   // SMTP username
    $mail->Password   = 'zd2-9JC-Exm-8MQ';          // SMTP password
    $mail->SMTPSecure = 'ssl';                      // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 465;                        // TCP port to connect to
    $mail->CharSet    = 'utf-8';

    //Recipients
    $mail->setFrom('safopost.glo@gmail.com', 'Софья');
    $mail->addAddress('s.i.post@mail.ru');          // Add a recipient

    // Content
    $mail->isHTML(true);                            // Set email format to HTML
    $mail->Subject = 'Новая заявка с сайта';
    $mail->Body    = "Пользователь оставил данные. Имя: ${userName}, телефон: ${userPhone}, почта: ${userEmail}, вопрос: ${userQuestion}";

    $mail->send();
    echo "Форма успешно отправлена";
    //header('Location: thanks.html');
} catch (Exception $e) {
    echo "Заявка не отправлена, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}