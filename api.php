<?php

require 'includes/_database.php';

// session_start();

header('content-type:application/json');

$data = json_decode(file_get_contents('php://input'), true);

$isOk = false;

// if (
//     !array_key_exists('token', $_SESSION) || !array_key_exists('token', $data)
//     || $_SESSION['token'] !== $data['token']
// ) {
//     echo json_encode([
//         'result' => 'false',
//         'error' => 'Accès refusé, jeton invalide.'
//     ]);
//     exit;
// }

// htmlspecialchars()



if ($data['action'] === 'addchoice' && $_SERVER['REQUEST_METHOD'] === 'PUT') {
    $text_button = $data['textButton'];
    $idNodeParent = intval(strip_tags($data['idParent']));
    $query = $dbCo->prepare("INSERT INTO choice (text_button, id_node_parent) VALUES (:text_button, :id_node_parent)");

    $isOk = $query->execute([
                ':text_button' => strip_tags($text_button),
                ':id_node_parent' =>intval(strip_tags($idNodeParent))
    ]);

    $queryPriority = $dbCo->prepare('SELECT LAST_INSERT_ID() AS id_node FROM `choice`');
    $isOk = $queryPriority->execute();
    $result = $queryPriority->fetch();

    echo json_encode([
        'result' => $isOk && $query->rowCount() > 0,
        'id_node_parent' => $idNodeParent,
        'text_button' => $text_button,
        'idNode' => intval($result['id_node']),
    ]);
    exit;
}


if ($data['action'] === 'delete' && $_SERVER['REQUEST_METHOD'] === 'PUT') {
    $id = intval(strip_tags($data['idChoice']));
    $query = $dbCo->prepare("DELETE FROM choice WHERE id_choice = :id_choice");
    $isOk = $query->execute([
                ':id_choice' =>$id
    ]);

    echo json_encode([
        'result' => true,
        'message' => 'Everything is ok',
    ]);
    exit;
}


if ($data['action'] === 'rename' && $_SERVER['REQUEST_METHOD'] === 'PUT') {
    $id = intval(strip_tags($data['idChoice']));
    $name = trim(strip_tags($data['choiceText']));
    $query = $dbCo->prepare("UPDATE `choice` SET `text_button` = :choiceText WHERE `id_choice` = :idChoice;");
    $isOk = $query->execute([
        'idChoice' => $id,
        'choiceText' => $name
    ]);
    echo json_encode([
        'result' => $isOk && $query->rowCount() > 0,
        'idChoice' => $id,
        'choiceText' => $name
    ]);
    exit;
}


if ($data['action'] === 'renameNode' && $_SERVER['REQUEST_METHOD'] === 'PUT') {
    $id = intval(strip_tags($data['idChoice']));
    $name = trim(strip_tags($data['choiceText']));
    $query = $dbCo->prepare("UPDATE `node` SET `text` = :text WHERE `id_history` = :idHistory;");
    $isOk = $query->execute([
        'idHistory' => $id,
        'text' => $name
    ]);
    echo json_encode([
        'result' => $isOk && $query->rowCount() > 0,
        'idHistory' => $id,
        'text' => $name
    ]);
    exit;
}


if ($data['action'] === 'addChoiceDestination' && $_SERVER['REQUEST_METHOD'] === 'PUT') {
    $id = intval(strip_tags($data['idNode']));
    $idChoice = intval(strip_tags($data['idChoice']));
    $query = $dbCo->prepare("UPDATE `choice` SET `id_node_destination` = :id WHERE `id_choice` = :idChoice;");
    $isOk = $query->execute([
        'id' => $id,
        'idChoice' => $idChoice
    ]);
    echo json_encode([
        'result' => $isOk && $query->rowCount() > 0,
        'idNode' => $id,
        'idChoice' => $idChoice
    ]);
    exit;
}

if ($data['action'] === 'remove' && $_SERVER['REQUEST_METHOD'] === 'PUT') {
    $id_node_destination = intval(strip_tags($data['id_node_destination']));
    $idChoice = intval(strip_tags($data['idChoice']));
    $query = $dbCo->prepare("UPDATE choice SET id_node_destination = NULL WHERE `id_choice` = :idChoice;");
    $isOk = $query->execute([
    'idChoice' => $idChoice
]);
    echo json_encode([
        'result' => $isOk && $query->rowCount() > 0,
        'idChoice' => $idChoice
    ]);
    exit;
}

// if ($data['action'] === 'addChoiceDestination' && $_SERVER['REQUEST_METHOD'] === 'PUT') {
//     $id = intval(strip_tags($data['idNode']));
//     $idDestination = intval(strip_tags($data['idDestination']));
//     $query = $dbCo->prepare("UPDATE `choice` SET `id_node_destination` = :idDestination WHERE `id_node_parent` = :id;");
//     $isOk = $query->execute([
//         'id' => $id,
//         'idDestination' => $idDestination
//     ]);
//     echo json_encode([
//         'result' => $isOk && $query->rowCount() > 0,
//         'idNode' => $id,
//         'idDestination' => $idDestination
//     ]);
//     exit;
// }

if ($data['action'] === 'renameText' && $_SERVER['REQUEST_METHOD'] === 'PUT') {
    $idNode = intval(strip_tags($data['idNode']));
    $text = strip_tags($data['text']);
    $query = $dbCo->prepare("UPDATE `node` SET `text` = :text WHERE `id_node` = :idNode;");
    $isOk = $query->execute([
        'idNode' => $idNode,
        'text' => $text
    ]);
    echo json_encode([
        'result' => $isOk && $query->rowCount() > 0,
        'idNode' => $idNode,
        'text' => $text
    ]);
    exit;
}


// if ($data['action'] === 'select' && $_SERVER['REQUEST_METHOD'] === 'PUT') {
//     $id_type = intval(strip_tags($data['id_type']));
//     $query = $dbCo->prepare("SELECT * FROM history WHERE id_type = :id_type");
//     $isOk = $query->execute([
//     'id_type' => $id_type
// ]);
//     echo json_encode([
//         'result' => $isOk && $query->rowCount() > 0,
//         'id_type' => $id_type
//     ]);
//     exit;
// }