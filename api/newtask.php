<?php



if (empty($_POST["text"]) || empty($_POST["done"])) {

    http_response_code(400);

    exit("Dati non validi");
}


$tasks = file_get_contents("../tasks.json");
$tasks = json_decode($tasks, true);

$newTask = [
    "text" => $_POST["text"],
    "done" => "false"
];

$tasks[] = $newTask;

$tasks_json = json_encode($tasks, JSON_PRETTY_PRINT);

file_put_contents("../tasks.json", $tasks_json);

header("Content-Type: application/json");

echo json_encode($newTask);
