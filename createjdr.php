<?php
session_start();

if (!isset($_SESSION['user'])) {
    header('Location: connexion.php');
    die();
}

$userID = $_SESSION['id_gamer'];

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

    <form class="form_group" action="actions.php" method="POST" enctype="multipart/form-data">
    <div class="form_item">
        <label for="nameJDR">Nom du Jeu de Rôle: </label>
        <input class="input" type="text" name="nameJDR" id="nameJDR">
    </div>

    <?php   $query = $dbCo->prepare("SELECT id_type, wording FROM type");
$query->execute();
$result = $query->fetchAll();
// var_dump($result);
?>
 <div class="contenaire categorie">
                <h2 class="categorie-tlt">Catégorie</h2>
                <div class="categorie-div">
                    <ul class="categorie-lst">
                      <?php foreach($result as $type){
                        echo '<li class="categorie-itm"> <input type="radio" name="wording" value="' . $type["wording"] . '">' . $type["wording"] . '</li>';
                      } ?>
                    </ul>
                </div>
            </div>

    <div class="form_item">
        <label for="upload">Choisissez une Image</label>
        <input type="file" id="upload" name="image" accept="image/png, image/jpeg">
    </div>

    <div>
        <label for="describe">Ecrivez la description de votre jeu de rôle:</label>
        <textarea class="form_text" id="describe" name="describe" rows="10" cols="100%">
            Description de l'histoire
        </textarea>
    </div>
    <input type="hidden" name="id_gamer" value=<?=" '  $userID  '"?>>
 
    <input type="hidden" name="token" value="' . $_SESSION['token'] . '">
    <button class="form_button" type="submit" name="initialisation"> Sauvegarder!</button>
</form>

    </section>

    <script src="js/menuscript.js"></script>

</main>