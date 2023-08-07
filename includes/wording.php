
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
                        echo '<li class="categorie-itm"> <input type="radio" name="wording" value="' . $type["id_type"] . '" data-type="' . $type["id_type"] . '">' . $type["wording"] . '</li>';
                      } ?>
                    </ul>
                </div>
            </div>