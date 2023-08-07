<!-- --------------------------------------------------------- -->
<!-- bloc modification histoire page modif -->

<?php  
        echo '<section class="histories">';
        foreach($result as $history){
   echo '<article class="history-contenaire">
   <div class="history contenaire contenaire-dimension">
       <a class="history-lnk" href="#">
       <img class="history-img" src="getImage.php?id=' . $history['id_history'] . '" alt="image fantastique d un grand arbre">
       </a>
       <a href="#">
           <h2 class="history-tlt">' . $history['name_history'] . '</h2>
       </a>
       <h3 class="history-theme"> thèmes</h3>
       <p class="history-resume">' . $history['describe_history'] . '</p>
       <div class="buttonMJ">
           <form class="form_group" action="actions.php" method="POST">
               <input type="hidden" name="id_history" value="' . $history['id_history'] . '">
               <button class="buttonplus" type="submit" value="' . $history['id_history'] . '" name="id_history">➕</button>
           </form>

           <form class="form_group" action="actions.php" method="POST"> 
               <input type="hidden" name="delete" value="' . $history['id_history'] . '"> 
               <button class="buttonplus" type="submit" value="delete" name="delete">➖</button> 
           </form>
       </div>
   </div>
</article>';};
            echo '</section>';
?>