<?php
require 'includes/header.php';

?>
</header>

<main>
    <section>
        <form class="position-absolute top-50 start-50 translate-middle">
            <h1 class="fs-1 text-center">Inscription</h1>

            <div class="card p-4">
                <div class="mb-4">
                    <div class="col-auto">
                        <label for="exampleaccount" class="form-label">Nome de compte</label>
                        <label class="visually-hidden" for="autoSizingInput">Name</label>
                        <input type="text" class="form-control" id="autoSizingInput">
                    </div>

                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>

                    <label for="inputPassword5" class="form-label">Password</label>
                    <input type="password" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock">
                    <label for="inputPassword5" class="form-label">Vérification Password</label>
                    <input type="password" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock">
                    <div id="passwordHelpBlock" class="form-text">
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain
                        spaces, special characters, or emoji.
                    </div>
                </div>
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
<script src="menuscript.js"></script>
</html>