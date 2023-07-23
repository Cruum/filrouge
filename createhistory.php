<?php
require 'includes/header.php';
require 'includes/_database.php';
require 'includes/_functions.php';
require 'includes/_config.php';
?>



</header>

<main class="main-histoire">

    <h1 class="title_main">Création du contenu</h1>
    <h2 class="title_main">Titre du JDR</h2>

    <section class="contenaire form">
        <?php
        $query = $dbCo->prepare("SELECT id_history ,name_history FROM history ORDER BY id_history ASC");
        $query->execute();
        $result = $query->fetchAll();

        ?>
        <form class="form_group" action="actions.php" method="POST">

            <?php

            echo '<label for="pet-select">Choose Histoire:</label>
            <select name="idHistory" id="nameHistory"> 
            <option value="">--Please choose an option--</option> 
            ';

            echo implode("", selectHistory($result));
            // il faut que pour chaque valeur, option value doit ajouté
            echo '</select>';
            ?>


            <div class="form_item">
                <label for="tittleNode">Nom du Titre:</label>
                <input class="input" type="text" name="tittleNode" id="tittleNode">
            </div>



            <div class="form_item">
                <label for="img">Choisisser une Image</label>
                <input type="file" id="img" name="img" accept="image/png, image/jpeg">
            </div>

            <div>
                <label for="story">Ecriver votre histoire:</label>
                <textarea class="form_text" id="story" name="story" rows="10" cols="100%">
    Contexte de l'histoire
    </textarea>
            </div>
            <input type="hidden" name="token" value="' . $_SESSION['token'] . '">
            <input type="hidden" name="submit" value="' . $task['Id_task'] . '">
            <button class="form_buton" type="submit" value="Sauvegarder!" name="submit"> Sauvegarder!</button>
        </form>
    </section>



</main>