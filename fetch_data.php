<?php
// offset index
$startIndex = $_GET['startIndex'];

// get json data
$jsonData = file_get_contents('data.json');
$data = json_decode($jsonData, true); // convert data to array

// validate data count 
if ($startIndex >= count($data)) {
  echo json_encode(['data' => "No more people!"]);
  http_response_code(500);
  return;
}

// send success response
$response = array(
  'data' => array_slice($data, $startIndex, 3)
);

header('Content-Type: application/json');
echo json_encode($response);
?>