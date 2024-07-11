<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    echo "Thank you, $name! I'll get back to you soon.";
} else {
    http_response_code(405);
    echo "Message not sent. Please try again.";
}
?>
