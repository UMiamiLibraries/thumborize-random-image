<?php

$width = htmlspecialchars($_GET['width']);
$height = htmlspecialchars($_GET['height']);
?>

<img id='thumborized' src="">

<script src='http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js'></script>

<script>

    <?php include("views/view.js"); ?>

    var i = randomImage;
    i.init(<?php echo $width . ',' . $height?>);

</script>