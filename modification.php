<?php
require 'includes/header.php';
require 'includes/_database.php';

?>

    </header>
    <h1 class="title_main">Vos Scénarios</h1>
    <div class="title-button">
        <h2>Ajouter un scénario</h2>
        <a href="createjdr.php" class="buttonplus"><i class="fa-regular fa-plus" style="color: #ffffff;"></i><a>
    </div>

    <main class="main">

        <section>

            <div class="contenaire categorie">
                <h2 class="categorie-tlt">Catégorie</h2>
                <div class="categorie-div">
                    <ul class="categorie-lst">
                        <li class="categorie-itm"> <input type="checkbox"> Héroic fantasy </li>
                        <li class="categorie-itm"> <input type="checkbox">Contemporain </li>
                        <li class="categorie-itm"><input type="checkbox">Post-Apo</li>
                        <li class="categorie-itm"><input type="checkbox">Horreur</li>
                        <li class="categorie-itm"><input type="checkbox"> Science-fiction</li>
                        <li class="categorie-itm"><input type="checkbox">Steampunk</li>
                    </ul>
                </div>
            </div>
        </section>


        <?php

$query = $dbCo->prepare("SELECT id_history, describe_history, name_history, image FROM history");
$query->execute();
$result = $query->fetchAll();
// var_dump($result);

?>
<main class="main-histoire">


        <?php  
require 'includes/blocmodification.php';
        ?>

    </main>

</body>
<script src="menuscript.js"></script>
</html>