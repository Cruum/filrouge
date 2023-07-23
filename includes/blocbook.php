<!-- --------------------------------------------------------- -->
<!-- bloc présentation histoire page annuaire -->
<?php 
        echo '<section class="histories">';
        foreach($result as $history){
   echo '<article class="history-contenaire">
                <div class="history contenaire contenaire-dimension">
                    <a class="history-lnk" href="#"><img class="history-img"
                            src='.$history['image'].'
                            alt="image fantastique d un grand arbre"></a>
                    <a href="#">
                        <h2 class="history-tlt">'.$history['name_history'].'</h2>
                    </a>
                    <h3 class="history-theme"> thèmes</h3>
                    <p class="history-resume">'.$history['describe_history'].'</p>
                    <a href="jdr.php?id_history= '.$history['id_history'].'"class="history-button"> Commencer l\'histoire </a>
                </div>
            </article>';};
            echo '</section>';
    ?>
