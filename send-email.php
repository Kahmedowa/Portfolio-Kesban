<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "k.ahmedowa94@gmail.com";
    $subject = "Contact Form Submission: " . $_POST['subject'];
    $message = "Name: " . $_POST['name'] . "\n\n" . "Email: " . $_POST['email'] . "\n\n" . "Message:\n" . $_POST['message'];
    $headers = "From: " . $_POST['email'];

    // Debugging step - log POST data
    error_log("Received POST data: " . print_r($_POST, true));

    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you! Your message has been sent.";
    } else {
        error_log("Mail function failed.");
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
} else {
    error_log("Invalid request method: " . $_SERVER["REQUEST_METHOD"]);
    echo "Invalid request.";
}
?>
