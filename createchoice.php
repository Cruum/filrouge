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
    
    <?= getNavigation($breadcrumb)?>
<!-- 
<nav aria-label="Breadcrumb" class="breadcrumb">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Category</a></li>
        <li><a href="#">Sub Category</a></li>
        <li><a href="#">Type</a></li>
        <li>Product</li>
    </ul>
</nav>  -->
 
    <h1 class="title_main">Création des choix</h1>
    <h2 class="title_main"> <?php echo implode(selectTittle($result))  ?> </h2>

    <section class="contenaire form">
        <?php
        $idNode = $_GET['id'];
        $query = $dbCo->prepare("SELECT id_node, text  FROM node WHERE id_node = :id ");
        $query->execute([
            ':id' => intval(strip_tags($idNode))
        ]);
        $result = $query->fetchALL();
        // var_dump($result)
        ?>
        <?php

$texts = selectText($result);
echo implode('', $texts);
echo '<ul class="main-nav-list" id="list" data-id='.$result[0]['id_node'] .'>';


        $idNode = $_GET['id'];
        $query = $dbCo->prepare("SELECT text_button, id_node_parent, text, id_node, id_choice  FROM choice JOIN node ON id_node_parent WHERE id_node_parent = :id AND id_node = :id ");
        $query->execute([
            ':id' => intval(strip_tags($idNode))
        ]);
        $result = $query->fetchALL();
    // var_dump($result);

        foreach ($result as $choice) {

            echo '<li class="node " data-id="'.$choice['id_choice'] .'" >
     <div>
     <p data-text-id="' . $choice['id_choice']  . '">' . $choice['text_button']  .  '</p> 
     <button type="button" class="js-btn-rename" data-id="'.$choice['id_choice'] . '">Edit</button>
     <button class="button-delete" data-id="'.$choice['id_choice'] .'" >➖</button>
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


</main>
</body>
<script src="createchoise.js"></script>
<script src="menuscript.js"></script>
</html>