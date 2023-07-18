<?php
require 'includes/_database.php';


if (isset($_POST['initialisation'])) {

    $nameJDR = $_POST['nameJDR'];
    $describe = $_POST['describe'] ;
    $query = $dbCo->prepare("INSERT INTO history (name_history, describe_history) VALUES (:nameJDR, :describe)");
    $isOk = $query->execute([
        ':nameJDR' => strip_tags($nameJDR),
        ':describe' => strip_tags($describe), 
    ]);
     if ($query->rowCount()) {
    }
    header('Location:createhistory.php?msg=' . ($isOk ? 'Tous a été ajoutée' : 'Un problème a été rencontré lors de l\'ajout de la tâche'));
    exit;
}

if (isset($_POST['submit'])) {

    $text = $_POST['story'];
    $img = $_POST['img'] ;
    $tittleNode = $_POST['tittleNode'];
    $idHistory = $_POST['idHistory'];

    $query = $dbCo->prepare("INSERT INTO node (text, img, tittleNode, id_history ) VALUES (:text, :img, :tittleNode, :id_history)");
    $isOk = $query->execute([
        ':text' => strip_tags($text),
        ':img' => strip_tags($img), 
        ':tittleNode' => strip_tags($tittleNode),
        ':id_history' => intval(strip_tags($idHistory))
    ]);
     if ($query->rowCount()) {
    }
    header('Location:affectation.php?id='. intval($idHistory).'&msg=' . ($isOk ? 'Tous a été ajoutée' : 'Un problème a été rencontré lors de l\'ajout de la tâche'));
    exit;
}



if (isset($_POST['delete'])) {

    $idHistory = $_POST['delete'];

    $query = $dbCo->prepare("DELETE * FROM `history` h  JOIN node n ON h.id_history = n.id_history  
    LEFT JOIN choice c ON n.id_node = c.id_node_parent WHERE h.id_history = 3;");
    $isOk = $query->execute([
        ':id_history' => intval(strip_tags($idHistory))
    ]);
     if ($query->rowCount()) {
    }
    header('Location:modification.php?msg=' . ($isOk ? 'Tous a été supprimé' : 'Un problème a été rencontré lors de la suppression de la tâche'));
    exit;
}


if (isset($_POST['id_history'])) {
    $idHistory = $_POST['id_history'];

    $query = $dbCo->prepare("SELECT id_history FROM history WHERE id_history = :id_history");
    $isOk = $query->execute([
        ':id_history' => intval(strip_tags($idHistory))
    ]);
    header('Location:affectation.php?id=' . intval($idHistory) . '&msg=' . ($isOk ? 'Tout a été ajouté' : 'Un problème a été rencontré lors de l\'ajout de la tâche'));
    exit;
}

// if (isset($_GET['createchoice'])){

//     $idHistory = $_GET['id'];
//     $query = $dbCo->prepare("SELECT id_history, name_history FROM history WHERE node.id_history = :id");
//     $query->execute([
//         ':id' => intval(strip_tags($idHistory))
//     ]);
//     $result = $query->fetch();

// }





// $isOk = false;
// if (!array_key_exists('HTTP_REFERER', $_SERVER)
//     || !str_contains($_SERVER['HTTP_REFERER'], 'http://localhost/intro-php/')) {
//     header('Location: createchoice.php?msg=error_referer');
//     exit;
// }
// else if (!array_key_exists('token', $_SESSION) || !array_key_exists('token', $_REQUEST)
//     || $_SESSION['token'] !== $_REQUEST['token']) {
    //     header('Location: createchoice.php?msg=error_csrf');
    //     exit;
    // }
    


//     if ($_REQUEST['addchoice'] === 'add' && $_SERVER['REQUEST_METHOD'] == 'POST') {
//     $query = $dbCo->prepare("INSERT INTO `choice`(`text_button`, `id_node_parent`)
//         VALUES (:text_button, :id_node_parent)");
//     $isOk = $query->execute([
//         'text_button' => strip_tags($_POST['text_button']),
//         'id_node_parent' => strip_tags($_POST['id_node_parent']),
//     ]);
// }
// else if ($_REQUEST['addchoice'] === 'increase' && $_SERVER['REQUEST_METHOD'] == 'GET') {
    
// }

// header('Location: createchoice.php?msg='.($isOk ? 'add_ok' : 'add_ko'));
// exit;


// if (isset($_POST['choice'])) {

//     $text_button = $_POST['text_button'];
//     $idNodeParent= $_POST['id_node']; 
//     $query = $dbCo->prepare("INSERT INTO choice (text_button, id_node_parent) VALUES (:text_button, :id_node_parent)");
//     $isOk = $query->execute([
//         ':text_button' => strip_tags($text_button),
//         ':id_node_parent' =>intval(strip_tags($idNodeParent)) ,
//     ]);
//     header('Location:affectation.php?id='. intval($idHistory).'msg=' . ($isOk ? 'Tous a été ajoutée' : 'Un problème a été rencontré lors de l\'ajout de la tâche'));
//     exit;
// }



?>