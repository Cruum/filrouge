<?php
require 'includes/header.php';
require 'includes/_database.php';
require 'includes/_functions.php';
require 'includes/_config.php';
?>



</header>

<?php



$idHistory = $_GET['idhistory'];
$query = $dbCo->prepare("SELECT id_history, name_history FROM history WHERE id_history = :id");
$query->execute([
    ':id' => intval(strip_tags($idHistory))
]);
$result = $query->fetchAll();

?>
<main class="main-histoire">




    <h1 class="title_main">Création des choix</h1>
    <h2 class="title_main"> <?php echo implode(selectTittle($result))  ?> </h2>

    <section class="contenaire form">
        <?php
        $idNode = $_GET['id'];
        $query = $dbCo->prepare("SELECT id_node, text, tittleNode  FROM node WHERE id_node = :id ");
        $query->execute([
            ':id' => intval(strip_tags($idNode))
        ]);
        $result = $query->fetchALL();
        // var_dump($result);

        $texts = selectText($result, 'tittleNode');
        echo implode('', $texts);


        $idNode = $_GET['id'];
        $query = $dbCo->prepare("SELECT text_button, id_choice, id_node_destination  FROM choice JOIN node ON id_node_parent WHERE id_node_destination = :id AND id_node = :id ");
        $query->execute([
            ':id' => intval(strip_tags($idNode))
        ]);
        $choices = $query->fetchALL();

        // var_dump($choices);


        echo '<ul class="choice_list_destination" id="choiceContext" data-id="'.$_GET['id'].'">Choix qui mènent à ce contexte:'

        ?>
        <?php
        foreach ($choices as $choice) {
            echo '<li class="item_choice_destination" data-id = '.$choice['id_choice'] .'>' . $choice['text_button']  .  
            '      <button class="button-delete" data-id="' . $choice['id_choice'] . '" >➖</button>
            </li>';
        };
        echo '</ul>';
        $idHistory = $_GET['idhistory'];
    
        $query = $dbCo->prepare("SELECT c.text_button, c.id_choice 
        FROM choice c
        JOIN node n ON c.id_node_parent = n.id_node
        JOIN (
            SELECT id_node
            FROM node 
            JOIN choice  ON id_node_parent = id_node_parent
            WHERE id_history = :id
        ) subquery ON id_node_parent = subquery.id_node
        GROUP BY c.id_choice;");
        $query->execute([
            ':id' => intval(strip_tags($idHistory))
        ]);
        $choices = $query->fetchALL();

        // var_dump($choices);

        echo '<label for="pet-select">Ajouter un choix :</label>
<select class="select" name="theme" id="theme-task" data-id= '. $result[0]['id_node'] .'> 
<option value="">--Please choose an option--</option> 
';

        echo implode("", selectChoice($choices));
        // il faut que pour chaque valeur, option value doit ajouté
        echo '</select>';

        $texts = selectText($result, 'text');
        echo implode('', $texts);

        echo '<ul class="main-nav-list" id="list" data-id=' . $result[0]['id_node'] . '>';

        $idNode = $_GET['id'];
        $query = $dbCo->prepare("SELECT text_button, id_node_parent, text, id_node, id_choice, id_node_destination  FROM choice JOIN node ON id_node_parent WHERE id_node_parent = :id AND id_node = :id ");
        $query->execute([
            ':id' => intval(strip_tags($idNode))
        ]);
        $choices = $query->fetchALL();

        foreach ($choices as $choice) {

            echo '<li class="node " data-id="' . $choice['id_choice'] . '" >
     <div>
     <p data-text-id="' . $choice['id_choice']  . '">' . $choice['text_button']  .  '</p> 
     <button type="button" class="js-btn-rename" data-id="' . $choice['id_choice'] . '">Edit</button>
     <button class="button-delete" data-id="' . $choice['id_choice'] . '" >➖</button>
     </div>
     </li>';
        };
        ?>


        </div>
        </div>
        <!-- <section id="choice_zone"></section> -->
    </section>

    <template id="renameFormTemplate">
        <form action="" method="post" data-form-id="">
            <input type="text" name="choiceText" value="">
            <input type="hidden" name="idChoice" value="">
            <input type="submit" value="valider">
        </form>
    </template>

    <button id="add_choise"> ➕ </button>

    <a href="createhistory.php">Créer votre histoire</a>
</main>
</body>
<script src="createchoise.js"></script>
<script src="menuscript.js"></script>

</html>