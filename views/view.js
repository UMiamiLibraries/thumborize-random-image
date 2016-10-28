var randomImage = {

    thumborServerSettings: {'url':'http://' + window.location.host + ':8888/'},

    init: function (width, height) {
            randomImage.getRandomThumborizedImage(width, height);
    },
    getRandomThumborizedImage: function (width, height) {
        var getUrl = window.location;
        var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
        var size = width + 'x' + height ;
        $.ajax({
            type: "GET",
            url: 'controllers/randomImageController.php',
            data: {
              size :  size,
              base_url: baseUrl
            },
            success: function (selectedImage) {
                if (selectedImage) {
                    $("#thumborized").attr('src', randomImage.thumborServerSettings.url + selectedImage);
                }
            }
        });
    }
};
