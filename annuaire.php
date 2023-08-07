<?php
require 'includes/header.php';
require 'includes/_database.php';
?>
    </header>
    <h1 class="title_main">Scénarios</h1>

    <main class="main-histoire">

        <section>
<?php
require 'includes/wording.php'
?>

        </section>

     <?php   $query = $dbCo->prepare("SELECT id_history, describe_history, name_history, image, id_type FROM history");
$query->execute();
$result = $query->fetchAll();
// var_dump($result);
?>

        <?php  
require 'includes/blocbook.php';
        ?>

    </main>

</body>
<script src="menuscript.js"></script>
<script src="annuaire.js"></script>

</html>