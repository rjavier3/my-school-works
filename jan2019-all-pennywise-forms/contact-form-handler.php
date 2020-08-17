<?php
	$creature = $_POST['creature'];
	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
	$message = $_POST['message'];


	$email_from = 'saaafe.spam@gmail.com';

	$email_subject = "New Form Submission";

	$email_body = 	"Creature: $creature.\n".
					"User Name: $name.\n".
					"User Email: $visitor_email.\n".
					"User Message: $message.\n";


	$to = "saaafe.spam@gmail.com";

	$headers = "From: $email_from \r\n";

	$headers .= "Reply To: $visitor_email \r\n";

	mail($to,$email_subject,$email_body,$headers);

	header("Location: post-sent.html");
?>