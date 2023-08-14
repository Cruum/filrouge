<?php
require 'includes/_database.php';
session_start();

if (isset($_POST['initialisation'])) {

    $nameJDR = $_POST['nameJDR'];
    $describe = $_POST['describe'] ;
    $image = $_FILES['image']; // Utiliser $_FILES['image'] pour accéder aux informations sur le fichier
    $wording =$_POST['wording'];

    $queryGetType = $dbCo->prepare("SELECT id_type FROM type WHERE wording = :wording");
    $queryGetType->execute([':wording' => $wording]);
    $resultGetType = $queryGetType->fetch();
    if ($resultGetType) {
        $id_type = $resultGetType['id_type'];

        // Requête d'insertion dans la table "history"
        $query = $dbCo->prepare("INSERT INTO history (name_history, image, describe_history, id_type) VALUES (:nameJDR, :image, :describe, :id_type)");
        $isOk = $query->execute([
            ':nameJDR' => strip_tags($nameJDR),
            ':image' => $image['name'], // Utiliser $img['name'] pour obtenir le nom du fichier
            ':describe' => strip_tags($describe),
            ':id_type' => intval($id_type)
        ]);
        // Déplacer le fichier téléchargé vers le dossier cible
        $target_dir = getcwd() . "/uploaded/";
$target_path = $target_dir . $image['name'];
    $tmp_name = $image['tmp_name'];
    $move_success = move_uploaded_file($tmp_name, $target_path);



    $newHistoryID = $dbCo->lastInsertId();
    $currentDateTime = new DateTime();
    $currentDateTimeString = $currentDateTime->format('Y-m-d H:i:s');
    $id_gamer = $_POST['id_gamer'];
    

    $query = $dbCo->prepare("INSERT INTO game (id_gamer, date_hour_game, id_history) VALUES (:id_gamer, :date_hour_game, :id_history)");
    $isOk = $query->execute([
        ':id_gamer' => strip_tags($id_gamer),
        ':date_hour_game' => $currentDateTimeString,
        ':id_history' => strip_tags($newHistoryID),
    ]);        

    header('Location:createhistory.php?msg=' . ($isOk ? 'Tous a été ajoutée' : 'Un problème a été rencontré lors de l\'ajout de la tâche'));
    exit;
}else {
    // Le wording spécifié n'existe pas dans la table "type"
    echo "Le wording spécifié n'existe pas dans la table 'type'.";
}}

if (isset($_POST['submit'])) {
    $text = $_POST['story'];
    $img = $_FILES['img']; // Utiliser $_FILES['monImage'] pour accéder aux informations sur le fichier
    $tittleNode = $_POST['tittleNode'];
    $idHistory = $_POST['idHistory'];

    $query = $dbCo->prepare("INSERT INTO node (text, img, tittleNode, id_history ) VALUES (:text, :img, :tittleNode, :id_history)");
    $isOk = $query->execute([
        ':text' => strip_tags($text),
        ':img' => $img['name'], // Utiliser $img['name'] pour obtenir le nom du fichier
        ':tittleNode' => strip_tags($tittleNode),
        ':id_history' => intval(strip_tags($idHistory))
    ]);

    // Déplacer le fichier téléchargé vers le dossier cible
    $tmp_name = $img['tmp_name'];
    $target_path = "uploaded/" . $img['name'];
    $move_success = move_uploaded_file($tmp_name, $target_path);

    header('Location: affectation.php?id=' . intval($idHistory) . '&msg=' . ($isOk ? 'Tous a été ajoutée' : 'Un problème a été rencontré lors de l\'ajout de la tâche'));
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



if (isset($_POST['update_jdr'])) {
    $nameJDR = $_POST['nameJDR'];
    $describe = $_POST['describe'];
    $idHistory = intval(strip_tags($_POST['update_jdr'])); 

    // Vérifier si une nouvelle image a été choisie
    if (!empty($_FILES['image']['name'])) {
        // Une nouvelle image a été sélectionnée
        $image = $_FILES['image'];
        $target_dir = getcwd() . "/uploaded/";
        $target_path = $target_dir . $image['name'];
        $tmp_name = $image['tmp_name'];
        $move_success = move_uploaded_file($tmp_name, $target_path);
        $image_name = $image['name'];
    } else {
        // Aucune nouvelle image sélectionnée, utiliser l'ancienne valeur de l'image
        $query = $dbCo->prepare("SELECT image FROM history WHERE id_history = :idHistory");
        $query->execute([':idHistory' => $idHistory]);
        $row = $query->fetch();
        $image_name = $row['image'];
    }

    $query = $dbCo->prepare("UPDATE history SET name_history = :nameJDR, image = :image, describe_history = :describe WHERE id_history = :idHistory ");
    $isOk = $query->execute([
        ':nameJDR' => strip_tags($nameJDR),
        ':image' => $image_name,
        ':describe' => strip_tags($describe),
        ':idHistory' => $idHistory,
    ]);

    header('Location:affectation.php?id=' . $idHistory . '&msg=' . ($isOk ? 'Tout a été ajouté' : 'Un problème a été rencontré lors de l\'ajout de la tâche'));
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