<?php
session_start();

if (!isset($_SESSION['user'])) {
    header('Location: connexion.php');
    die();
}

$userID = $_SESSION['id_gamer'];
