<?php
require 'includes/header.php';
require 'includes/_database.php';
require 'includes/_functions.php';
require 'includes/_config.php';
?>


</header>

<?php
$idHistory = $_GET['id'];
$query = $dbCo->prepare("SELECT node.id_node, node.text, node.tittleNode, node.id_history, node.img, history.name_history, history.image, history.describe_history FROM node JOIN history ON node.id_history = history.id_history WHERE node.id_history = :id");
$query->execute([
    ':id' => intval(strip_tags($idHistory))
]);
$result = $query->fetchAll();
// var_dump($result);

?>
<main class="main-histoire">

    <h1 class="title_main">Affecter les choix au histoire</h1>
    <h2 class="title_main"> <?php echo implode(selectTittle($result))  ?> </h2>


    <div>
        <div>
            <a class="button.btn-1" href="createhistory.php">Créer votre histoire</a>
            <button id="editjdr">Editer l'histoire</button>
        </div>

        <form class="form_group form_display display" action="actions.php" method="POST" enctype="multipart/form-data">
            <div class="form_group_display">
                <div class="form_item">
                    <label for="nameJDR">Nom du JDR: </label>
                    <input class="input" type="text" name="nameJDR" id="nameJDR" value=" <?= $result[0]['name_history'] ?>">
                </div>

                <div class="form_item">
                    <label for="upload">Changer d'Image</label>
                    <input type="file" id="upload" name="image" accept="image/png, image/jpeg" value="<?= $result[0]['image'] ?>">
                </div>

                <div>
                    <label for="describe">Description:</label>
                    <textarea class="form_text" id="describe" name="describe" rows="10" cols="100%" value=" <?= $result[0]['describe_history'] ?>">
        <?= $result[0]['describe_history'] ?>
        </textarea>
                </div>
            </div>
            <input type="hidden" name="token" value="' . $_SESSION['token'] . '">
            <button class="form_button" type="submit" name="update_jdr" value=<?= $idHistory = $_GET['id'] ?>> Sauvegarder!</button>

        </form>


    </div>



    <?php

    echo '<ul class="main-nav-list" id="ul">';
    foreach ($result as $node) {
    ?>
        <li id="list" class="node">
                <div class="list_text_history">
                    <div >
                <img class="history-img"
                            src= "uploaded/<?= $node['img']?> " data-text="<?= $node['img']?>" >
               </div>
                <div class="node_text">
                    <a href="createchoice.php?id=<?= $node['id_node']; ?>&idhistory=<?php echo $node['id_history']; ?>" data-id=<?= $node['id_node'] ?>><?php echo $node['tittleNode']; ?></a>
                    <button type="button" class="js-btn-rename" data-id="<?php echo $node['id_node']; ?>">Edit</button>
                    <p data-text-id="<?php echo $node['id_node']; ?>"><?php echo $node['text']; ?></p>
                </div>
                </div>
                <details>
                    <summary>Les différents choix affiliés à ce contexte de l'histoire</summary>

                    <?php
                    // $idNode = $result['id_node'];
                    $query2 = $dbCo->prepare("SELECT text_button, id_node_parent, id_node, id_choice  FROM choice JOIN node ON id_node_parent WHERE id_node_parent = :id GROUP BY id_choice;");
                    $query2->execute([
                        ':id' => intval(strip_tags($node['id_node']))
                    ]);
                    $choices = $query2->fetchALL();
                    // var_dump($choices);
                    foreach ($choices as $choice) { ?>
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
                <input type="text" name="text" value="">
                <input type="hidden" name="idChoice" value="">

                <label for="upload">Changer d'Image</label>
                    <input type="file" id="upload" name="image" accept="image/png, image/jpeg" value="<?= $result[0]['image'] ?>">

                <input type="submit" value="valider">
            </form>
        </template>
    </section>
</main>
</body>
<script src="changetext.js"></script>
<script src="menuscript.js"></script>

</html>