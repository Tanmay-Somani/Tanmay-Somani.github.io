<?php

$name = isset($_POST["name"]) ? htmlspecialchars($_POST["name"]) : "";
$email = isset($_POST["email"])
    ? filter_var($_POST["email"], FILTER_SANITIZE_EMAIL)
    : "";
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        "status" => "error",
        "message" => "Invalid email address",
    ]);
    exit();
}
$recipient = "tanmaysomani2003@gmail.com";
$subject = "New Contact Form Submission";
$body = "Name: $name\n";
$body .= "Email: $email\n";
$headers = "From: $name <$email>";
$mailSent = mail($recipient, $subject, $body, $headers);

if ($mailSent) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode([
        "status" => "error",
        "message" => "Failed to send email",
    ]);
}
?>