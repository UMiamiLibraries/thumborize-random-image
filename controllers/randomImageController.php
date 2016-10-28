<?php

include('/../config/config.php');

$random_Image = function ($size, $base_url) {
    $image_vault_path = dirname(__FILE__) . '/../assets/image_vault';

    $files = glob($image_vault_path . '/*.*');

    $image = 0;
    if (count($files) != 0)
        $image = array_rand($files) + 1;

    if ($image) {
        $original_url = $size . '/smart/' . $base_url . explode("..", $files[$image - 1])[1];
        $encoded_signature = generate_encoded_signature($original_url);

        $secured_url =  $encoded_signature . '/' . $original_url;
        echo $secured_url;
    }
};

function generate_encoded_signature ($to_encode) {
    $signature =  hash_hmac("sha1", $to_encode, SECURITY_KEY);
    $bin_signature = hex2bin($signature);
    $encoded = rtrim(strtr(base64_encode($bin_signature), '+/', '-_'));

    return $encoded;
}

$random_Image(htmlspecialchars(htmlspecialchars($_GET['size'])),htmlspecialchars($_GET['base_url']));