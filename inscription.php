<?php
require 'includes/header.php';

?>
</header>
<head> <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"> </head>

<main>
    <section>

    <?php 
                if(isset($_GET['reg_err']))
                {
                    $err = htmlspecialchars($_GET['reg_err']);

                    switch($err)
                    {
                        case 'success':
                        ?>
                            <div class="alert alert-success">
                                <strong>Succès</strong> inscription réussie !
                            </div>
                        <?php
                        break;

                        case 'password':
                        ?>
                            <div class="alert alert-danger">
                                <strong>Erreur</strong> mot de passe différent
                            </div>
                        <?php
                        break;

                        case 'email':
                        ?>
                            <div class="alert alert-danger">
                                <strong>Erreur</strong> email non valide
                            </div>
                        <?php
                        break;

                        case 'email_length':
                        ?>
                            <div class="alert alert-danger">
                                <strong>Erreur</strong> email trop long
                            </div>
                        <?php 
                        break;

                        case 'pseudo_length':
                        ?>
                            <div class="alert alert-danger">
                                <strong>Erreur</strong> pseudo trop long
                            </div>
                        <?php 
                        case 'already':
                        ?>
                            <div class="alert alert-danger">
                                <strong>Erreur</strong> compte deja existant
                            </div>
                        <?php 

                    }
                }
                ?>

        <form action="inscription_traitement.php" class="position-absolute top-50 start-50 translate-middle" method="post">
            <h1 class="fs-1 text-center">Inscription</h1>

            <div class="card p-4">
                <div class="mb-4">
                    <div class="col-auto">
                        <label for="exampleaccount" class="form-label">Nome de compte</label>
                        <label class="visually-hidden" for="autoSizingInput">Name</label>
                        <input type="text" name="pseudo" class="form-control" id="autoSizingInput" required="required" autocomplete="off">
                    </div>

                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required="required" autocomplete="off">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>

                    <label for="inputPassword5" class="form-label">Password</label>
                    <input type="password" name="password" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock" required="required" autocomplete="off">

                    <label for="inputPassword5" class="form-label">Vérification Password</label>
                    <input type="password" name="password_retype" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock" required="required" autocomplete="off">
                    <div id="passwordHelpBlock" class="form-text">
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain
                        spaces, special characters, or emoji.
                    </div>
                </div>
                <input type="hidden" name="token" value="' . $_SESSION['token'] . '">
                <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
    </section>
</main>





<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js"
    integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE"
    crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js"
    integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ"
    crossorigin="anonymous"></script>
</body>
<script src="js/menuscript.js"></script>
</html>