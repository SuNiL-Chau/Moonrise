<?php

$to = 'anandita@brandingbymoonrise.com';
$ccemail = 'ananditagoenka@gmail.com';


echo "not Contact";
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if (isset($_POST["contact_form"]) && isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["message"])) {
        echo "COntact";
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];
        $phone = $_POST["phone"];

        $subject = "New Contact Form Submission";

        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n";

        if (isset($phone)) {
            $email_content .= "Phone:\n$phone\n";
        }

        $email_content .= "Message:\n$message\n";

        $headers = "From: $name <$email>\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Cc: $ccemail\r\n";

        if (mail($to, $subject, $email_content, $headers)) {
            return true;
        } else {
            return false;
        }
    }

    if (isset($_POST["letsTalk"]) && isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["project_idea"])) {

        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];
        $phone = $_POST["phone"];

        $subject = "New Contact Form Submission";

        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n";

        if (isset($phone)) {
            $email_content .= "Phone:\n$phone\n";
        }

        $email_content .= "Message:\n$message\n";

        $headers = "From: $name <$email>\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Cc: $ccemail\r\n";

        if (mail($recipient, $subject, $email_content, $headers)) {
            return true;
        } else {
            return false;
        }
    }
}
