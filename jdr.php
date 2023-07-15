<?php
require 'includes/header.php';

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
  

    <main class=" main-histoire">

        <section class="contenaire contenaire-history">
            <div class="contenaire-history-wrap">
                <img class="contenaire-history_img" src="img/actu-guides-prairies.jpg" alt="image d'une vallée" id="img">
                <p class="history-txt" id="histoire" data-id-node="0">Vos paupières sont lourdes, vous fermez les yeux et au moment où
                    vous les ouvrez, vous n’êtes plus sur votre chaise mais vous vous trouvez à la frontière entre une
                    vaste clairière verdoyante et l’oré d’une forêt.
                    <br> Vous entendez un bruit, vous retournez et vous voyez un homme-lézard qui siffle, il est vert,
                    écailleux avec un bouclier qui semble être en bois et une masse faite d’une pierre attachée à un
                    morceau de bois. Il vous dépasse en taille d’au moins une tête.
                    Que faites-vous?
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
<script src="script.js"></script>
<!-- <script src="menuscript.js"></script> -->
</html>