<?php
// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];

// Set up the recipient email address
$recipient = 'your-email@example.com';

// Set up the email subject
$subject = 'New Contact Form Submission';

// Set up the email body
$body = "Name: $name\n";
$body .= "Email: $email\n";

// Set up the email headers
$headers = "From: $name <$email>";

// Send the email
$mailSent = mail($recipient, $subject, $body, $headers);

// Check if the email was sent successfully
if ($mailSent) {
  // Send a success response
  echo json_encode(array('status' => 'success'));
} else {
  // Send an error response
  echo json_encode(array('status' => 'error'));
}
?>
