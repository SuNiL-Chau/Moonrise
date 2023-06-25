<?php
$to = 'moonrisetech@gmail.com';
$subject = 'Form Submission';
$message = "Hi,\n\nYou have received a form submission for coming soon:\n\nMail ID: " . $_POST['email'];
$headers = "From: your_email@example.com" . "\r\n" .
    "Reply-To: your_email@example.com" . "\r\n";

mail($to, $subject, $message, $headers);