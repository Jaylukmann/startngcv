<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Kazeem's CV Messages response page.</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#031724">
    <meta name="keyword" content="Kazeem Asifat's CV, Kazeem's Resume, Kazeem Asifat HNG, Kazeem Asifat HNG Internship, kazeem github, kazeem asifat adeniyi">
    <meta name="description" content="">
    <link rel="stylesheet" type="text/css" href="css/main.css">
</head>
<body>
	<div class="page-wrapper" id="day">
		<section>
			<h4 style="margin-bottom: 10px;">Kazeem's contact form messages. The message writes to the .txt file and also reads the message from it.</h4>

			<!-- The button to lead back to main page -->
			<a href="index.html" class="margin-bottom">
	            <button class="btn php-button" id="contactButton">
	            	Go Back
	            </button>
	        </a> 
	        <a href="contact-messages.txt" class="margin-bottom">
	            <button class="new-btn">
	            	Open .txt file
	            </button>
			</a> 

			<?php

				if (!isset($_POST['submit'])) {
					header("Location: index.html");
				}
				else {
					
					// code to clean the inputs
					function cleanUsersTextInput($data) {
						$data = trim($data);
						$data = stripcslashes($data);
						$data = htmlspecialchars($data);
						return $data;
					}

					// Format the date
					function customizeDate($date){
						return date('F j, Y, g:i a', strtotime($date));
					}

					$name = cleanUsersTextInput($_POST['name']);
					$email = cleanUsersTextInput($_POST['email']);
					$title = cleanUsersTextInput($_POST['title']);
					$message = cleanUsersTextInput($_POST['message']);

					// Opens the text file
					$contactFile = fopen("contact-messages.txt", "a") or die("Unable to access the file that will display your message at the moment, please try again later!!!");

					// wrap the message in a border
					$styledMessage = "
					<p class='eachMessage'><b>Name:</b> ".
						$name."<br><b>Email:</b> ".$email."<br><b>Title:</b> ".$title."<br><b>Message:</b> ".$message.
					"</p>";

					// write the message in the file.
					fwrite($contactFile, $styledMessage);

					// show message to user
					$messageFile = fopen("contact-messages.txt", "r") or die("Unable to display your messages now, please try again later!!!");

					echo fread($messageFile, filesize("contact-messages.txt"));

					fclose($contactFile);					
				}
			?>
		</section>
	</div>
</body>
</html>
