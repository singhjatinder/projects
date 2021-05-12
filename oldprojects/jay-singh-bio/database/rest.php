<?php
require_once('database.php');
// Check to see if format and action is even provided otherwise, print corresponding  error message
if(isset($_GET['format'])){
    $format = $_GET['format'];
    $action = $_GET['action'];
    //Check to see format = json and action =courses
    if($format === 'json' && $action === 'courses'){
        // write query to get all the courses with all the courses
        $query = "select * from sk_courses";
        $result = [];
        $index = 0 ;

        //set header to Json
        header("Content-Type: application/json");

        //run the query and save the details in a array variable
        foreach ($db->query($query) as $row) {
            $result[$index] = array('courseID' => $row['courseID'],
                'courseName'=> $row['courseName']);
            $index++;
        }
        //output the json and make it look PREETYYYYYY
        echo json_encode($result, JSON_PRETTY_PRINT);
        //Check to see format = json and action = students
    }
}
?>