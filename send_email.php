<?php

$to = 'ananditagoenka@gmail.com';

$subject = 'Form Submission';

$message = "Hi,\n\nYou have received a form submission for coming soon:\n\nMail ID: " . $_POST['email'];

$headers = "From: ananditagoenka@gmail.com" . "\r\n" .

    "Reply-To: ananditagoenka@gmail.com" . "\r\n" .

    "CC: sunilthewiseman@gmail.com";



mail($to, $subject, $message, $headers);