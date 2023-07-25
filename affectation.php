<?php
require 'includes/header.php';
require 'includes/_database.php';
require 'includes/_functions.php';
require 'includes/_config.php';
?>


</header>

<?php
$idHistory = $_GET['id'];
$query = $dbCo->prepare("SELECT node.id_node, node.text, node.tittleNode, node.id_history, history.name_history FROM node JOIN history ON node.id_history = history.id_history WHERE node.id_history = :id");
$query->execute([
    ':id' => intval(strip_tags($idHistory))
]);
$result = $query->fetchAll();
// var_dump($result);

// $idNode = $result['id_node'];
$query2 = $dbCo->prepare("SELECT text_button, id_node_parent, id_node, id_choice  FROM choice JOIN node ON id_node_parent WHERE id_node_parent = id_node GROUP BY id_choice;");
$query2->execute([
    // ':id' => intval(strip_tags($idNode))
]);
$choices = $query2->fetchALL();
// var_dump($choices);
?>
<main class="main-histoire">
    
    <h1 class="title_main">Affecter les choix au histoire</h1>
    <h2 class="title_main"> <?php echo implode(selectTittle($result))  ?> </h2>
    
    <div>
        <a class="history-button" href="createhistory.php">Créer votre histoire</a>
    </div>

    <?php

    echo '<ul class="main-nav-list" id="list">';
    foreach ($result as $node) {
        ?>
        <li class="node">
            <div>
                <a href="createchoice.php?id=<?php echo $node['id_node']; ?>&idhistory=<?php echo $node['id_history']; ?>" data-id=""><?php echo $node['tittleNode']; ?></a>
                <button type="button" class="js-btn-rename" data-id="<?php echo $node['id_node']; ?>">Edit</button> 
                <p data-text-id="<?php echo $node['id_node']; ?>"><?php echo $node['text']; ?></p>
            </div>
            <details>
                <summary>Les différents choix affiliés à ce contexte de l'histoire</summary>
                <?php foreach ($choices as $choice) { ?>
                    <p><?php echo $choice['text_button']; ?></p>
                <?php } ?>
                
            </details>
        </li>
        <?php
    }


    ?>
    <section class="contenaire form">
    <template id="renameFormTemplate">
    <form action="" method="post" data-form-id="">
        <input type="text" name="choiceText" value="">
        <input type="hidden" name="idChoice" value="">
        <input type="submit" value="valider">
    </form>
</template>
    </section>
    </main>
</body>
<script src="changetext.js"></script>
<script src="menuscript.js"></script>
</html>