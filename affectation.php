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

?>
<main class="main-histoire">
<?= getNavigation($breadcrumb)?>
    <h1 class="title_main">Affecter les choix au histoire</h1>
    <h2 class="title_main"> <?php echo implode(selectTittle($result))  ?> </h2>


    <?php

    echo '<ul class="main-nav-list" id="list">';
    foreach ($result as $node) {

        echo '<li class="node" >
        <div>
        <a href="createchoice.php?id='. $node['id_node'].' &idhistory='. $node['id_history'].'">' . $node['tittleNode'] . '</a>
        <button type="button" class="js-btn-rename" data-id="'.$node['id_node'] . '">Edit</button>
        <p>' . $node['text']  . '</p>
        </div>
        </li>';
    };


    ?>
    <section class="contenaire form">


    </main>
</body>
<script src="createchoise.js"></script>
<script src="menuscript.js"></script>
</html>