<?php
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );

    $from = "js@jaysingh.info";
    $to = "singhjay269@gmail.com";
    $firstname = $_REQUEST['firstName'];
    $lastname = $_REQUEST['lastName'];
    $email = $_REQUEST['email'];
    $subject = $_REQUEST['subject'];
    $message = $_REQUEST['message'];
    $headers = "From: " . $from . "\r\n";
    $headers .= "CC: ".$email ."\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";



    $draft =
    "<html><body style=\"text-align: center\">"
    . "<img src=\"http://www.johnantons.com/userfiles/image/AFC%20Championship.png\" alt=\"GO PATS!!!\" width=\"320\" height=\"320\">"
    ."<h1 style=\"color: green\">" . $firstname . " " . $lastname . " has a message for you</h1>"
    . "<h3 style=\"color: red\">Email: " . $email . "</h3>"
    . "<p style=\"color: blue\">" . "<strong>". $message."</strong>" . "</p>"
    ."</body>'</html>";

    mail($to,$subject,$draft, $headers);
    echo
    "<html><body style=\"text-align: center\">"
    ."<img src=\"http://www.johnantons.com/userfiles/image/AFC%20Championship.png\" alt=\"GO PATS!!!\" width=\"320\" height=\"320\">"
    ."<h1 style=\"color: green;\">An email has been send to Jay Singh and he will reach back as soon as he can.</h1>"
    ."<h2>Click <a href=\"http://jaysingh.net\">jaysingh.net</a> to go back to the website.</h2>"
    ."</body>'</html>";

?>