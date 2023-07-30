<?php
require 'includes/header.php';
require 'includes/_database.php';
require 'includes/_functions.php';
require 'includes/_config.php';

?>



</header>

<main class="main-histoire">

    <h1 class="title_main">Création de l'histoire</h1>
    <h2 class="title_main">Titre du JDR</h2>

    <section class="contenaire form"> 

        <form class="form_group" action="actions.php" method="POST">

            <div class="form_item">
                <label for="nameJDR">Nom du Jeux de Rôle: </label>
                <input class="input" type="text" name="nameJDR" id="nameJDR">
            </div>

    <div>
    <label for="describe">Ecriver la description de votre jeux de rôle:</label>
    <textarea class="form_text" id="describe" name="describe"
      rows="10" cols="100%">
      Description de l'histoire
    </textarea>
    </div>
    <input type="hidden" name="token" value="' . $_SESSION['token'] . '">
    <input type="hidden" name="update" value="' . $task['Id_task'] . '">
    <button class="form_buton" type="submit" value="Sauvegarder!" name="initialisation"> Sauvegarder!</button>
    </form>
    
    </section>

    <script src="menuscript.js"></script>

</main>
