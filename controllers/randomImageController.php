<?php

$random_Image = function () {
    $image_vault_path = dirname(__FILE__) . '/../assets/image_vault';

    $files = glob($image_vault_path . '/*.*');
    $image = array_rand($files);

    if ($image) {
        echo explode("..", $files[$image])[1];
    }

};

$random_Image();