<?php

$name = $_POST['name'];
$email = $_POST['email'];
$recipient = 'tanmaysomani2003@gmail.com';
$subject = 'New Contact Form Submission';
$body = "Name: $name\n";
$body .= "Email: $email\n";
$headers = "From: $name <$email>";
$mailSent = mail($recipient, $subject, $body, $headers);

if ($mailSent) {
  echo json_encode(array('status' => 'success'));
} else {
  echo json_encode(array('status' => 'error'));
}
?>
