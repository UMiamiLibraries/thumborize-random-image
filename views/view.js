var randomImage = {

    init: function (width, height) {
        setInterval(function() {
            randomImage.getRandomThumborizedImage(width, height);
        }, 1250);
    },
    getRandomThumborizedImage: function (width, height) {
        $.ajax({
            type: "GET",
            url: 'controllers/randomImageController.php',
            data: {
                "width": width,
                "height": height
            },
            success: function (randomImage) {
                var getUrl = window.location;
                var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];

                if (randomImage) {
                    $("img").attr('src', baseUrl + randomImage);
                }
            }
        });
    }
};
