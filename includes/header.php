<?php
       echo '<!DOCTYPE html>
       <html lang="fr">
       
       <head>
           <meta charset="UTF-8">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <link rel="preconnect" href="https://fonts.googleapis.com">
           <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
           <link href="https://fonts.googleapis.com/css2?family=Almendra:wght@400;700&display=swap" rel="stylesheet">
           <link rel="stylesheet" href="cssfilrouge.css">
           <title>Fil Rouge</title>
       </head>
       
       <body class="PlayCreateJDR">
       
           <header>
               <nav class="nav-barre">
                   <div class="nav-contenaire-name">
                       <h2 class="nav-name">P&CJDR</h2>
                       <!-- <a href="index.php"> <img class="header-logo"
                               src="graphique-vectoriel-de-l-élément-silhouette-hydra-monstre-illustration-d-un-design-la-isolée-sur-le-fond-blanc-204621519 1.png"
                               alt=""> </a> -->
                   </div>
       
                   <ul class="nav-ul">
                       <!-- <a class="nav-logo" href="#"> <img class="header-logo"
                               src="graphique-vectoriel-de-l-élément-silhouette-hydra-monstre-illustration-d-un-design-la-isolée-sur-le-fond-blanc-204621519 1.png"
                               alt=""> </a> -->
                       <li class="test"><a class="nav_lnk" href="index.php">
                               <svg class="svg" xmlns="http://www.w3.org/2000/svg"
                                   viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                   <path
                                       d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                               </svg>
                               <div class="nav_link_destok"> Accueil</div>
                           </a> </li>
       
                       <li class="test"><a  class="nav_lnk" id="principal">
       
                               <svg class="svg" xmlns="http://www.w3.org/2000/svg"
                                   viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                   <path
                                       d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                               </svg>
       
                               <div class="nav_link_destok"> Histoires</div>
                           </a>
                           <div class="navinnav display menu" id="menu">
                               <!-- <nav class="menu" id="menu"> -->
                                   <ul class="menulist" id="menuHistoire">
                                       <li class="menu-itm"><a class="li_lnk menulnk" href="annuaire.php"> Jouer</a></li>
                                       <li class="menu-itm"><a class="li_lnk menulnk" href="createjdr.php"> Créer </a></li>
                                       <li class="menu-itm"><a class="li_lnk menulnk" href="modification.php">Modifier</a></li>
                                   </ul>
                               <!-- </nav> -->
                           </div>
                       </li>
       
       
                       <li class="test"><a class="nav_lnk" href="dashboard.php">
       
                               <svg class="svg" xmlns="http://www.w3.org/2000/svg"
                                   viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                   <path
                                       d="M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
                               </svg>
       
                               <div class="nav_link_destok"> Dashboard</div>
                           </a></li>
                       <li class="test"><a class="nav_lnk" href="connexion.php">
       
                               <svg class="svg" xmlns="http://www.w3.org/2000/svg"
                                   viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                   <path
                                       d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                               </svg>
       
                               <div class="nav_link_destok">Compte</div>
                           </a> </li>
                   </ul>
               </nav> ' 
        ?>






