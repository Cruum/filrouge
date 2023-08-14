<?php
require 'includes/header.php';
require 'includes/_database.php';

?>
         <section class="header">
            <div class="header-div">
                <h1 class="title_main"><em> Réincartaysie</em></h1>
            </div>
        </section>
  <div>
        <div class="contenaireimg contenaire histories">
            <a type="button" value = "Rafraîchir" onclick="history.go(0)"><img class="imgretour choice-itm" src="img/annuler (1).png" alt=""> </a>
        </div>
    </div>
    </header>
  

    <?php

    $idhistory = $_GET['id_history'];

    $query = $dbCo->prepare("SELECT id_history, id_node, text, img FROM node WHERE id_history = :id  GROUP BY id_node ");
    $query->execute([
        ':id' => intval(strip_tags($idhistory))
    ]);
    $result = $query->fetchALL();
    // var_dump($result);


        foreach($result as $node){
          '{id:"'.$node['id_node'].'",
            text:'.$node['text'].', 
            img:'.$node['img'].',
            choice:[';
            
            $idnode=$node['id_node'];
            $query = $dbCo->prepare("SELECT id_node_destination, text_button FROM node JOIN choice ON id_node_parent WHERE :id = id_node_parent GROUP BY id_choice ");
            $query->execute([
                ':id' => intval(strip_tags($idnode))
            ]);
            $choices = $query->fetchALL();
            // var_dump( $choices);
            foreach($choices as $choice){
                '{
                    text:'.$choice['text_button'].'
                    nextText:'.$choice['id_node_destination'].'
                },';
            }']},' ;
        }

   ?>
<?php

// Initialisez un tableau vide pour stocker les nœuds et les choix
$JSONData = array();

foreach ($result as $node) {
    $nodeObj = array(
        'id' => $node['id_node'],
        'text' => $node['text'],
        'img' => $node['img'],
        'choice' => array()
    );

    $idnode = $node['id_node'];
    $query = $dbCo->prepare("SELECT id_node_destination, text_button FROM node JOIN choice ON id_node_parent WHERE :id = id_node_parent GROUP BY id_choice");
    $query->execute([
        ':id' => intval(strip_tags($idnode))
    ]);
    $choices = $query->fetchAll();

    foreach ($choices as $choice) {
        $choiceObj = array(
            'text' => $choice['text_button'],
            'nextText' => $choice['id_node_destination']
        );
        // Ajouter le choix à l'array 'choice' du nœud en cours
        $nodeObj['choice'][] = $choiceObj;
    }

    // Ajouter le nœud complet à l'array JSONData
    $JSONData[] = $nodeObj;
}

// Convertir l'array JSONData en chaîne JSON
$JSONString = json_encode($JSONData);


?>
  
    <main class=" main-histoire">

        <section class="contenaire contenaire-history">
            <div class="contenaire-history-wrap">
                <img class="contenaire-history_img" src="img/actu-guides-prairies.jpg" alt="image d'une vallée" id="img">
                <p class="history-txt" id="histoire" data-id-node="0">
                </p>
            </div>

 </section>

 <section class=" display" id="zone_choice">

 <div class="button-item" id="div_button">
    <button class="choice-itm" id="choice1" href="#">Option 1</button> 
    <button class="choice-itm" id="choice1" href="#">Option 2</button> 
    <button class="choice-itm" id="choice1" href="#">Option 3</button> 
    <button class="choice-itm" id="choice1" href="#">Option 4</button> 


</div>

</section>

       
    </main>

</body>
<?php
echo '<script>const JSON = ' . $JSONString . ';</script>';
?>
<script src="js/script.js"></script>
<script src="js/menuscript.js"></script>
</html>