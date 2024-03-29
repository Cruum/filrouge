<?php 
    session_start(); // Démarrage de la session
    require 'includes/_database.php';

    if(!empty($_POST['email']) && !empty($_POST['password'])) // Si il existe les champs email, password et qu'il sont pas vident
    {
        // Patch XSS
        $email = htmlspecialchars($_POST['email']); 
        $password = htmlspecialchars($_POST['password']);
        
        $email = strtolower($email); // email transformé en minuscule
        
        // On regarde si l'utilisateur est inscrit dans la table utilisateurs
        $check = $dbCo->prepare('SELECT id_gamer, pseudo, email, password, token FROM gamer WHERE email = ?');
        $check->execute(array($email));
        $data = $check->fetch();
        $row = $check->rowCount();
        
        // var_dump($password);
        // var_dump($row);
        // exit;

        // Si > à 0 alors l'utilisateur existe
        if($row > 0)
        {
            // Si le mail est bon niveau format
            if(filter_var($email, FILTER_VALIDATE_EMAIL))
            {
                // Si le mot de passe est le bon
                if(password_verify($password, $data['password']))
                {
                    // On créer la session et on redirige sur landing.php
                    $_SESSION['user'] = $data['token'];
                    $_SESSION['id_gamer'] = $data['id_gamer'];
                    header('Location: landing.php');
                    die();
                }else{ header('Location: connexion.php?login_err=password'); die(); }
            }else{ header('Location: connexion.php?login_err=email'); die(); }
        }else{ header('Location: connexion.php?login_err=already'); die(); }
    }else{ header('Location: connexion.php?error'); die();} // si le formulaire est envoyé sans aucune données