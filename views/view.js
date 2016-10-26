var randomImage = {

    thumborServerSettings: {'url':'http://' + window.location.host + ':8888/unsafe/'},

    init: function (width, height) {
        setInterval(function() {
            randomImage.getRandomThumborizedImage(width, height);
        }, 4000);
    },
    getRandomThumborizedImage: function (width, height) {
        $.ajax({
            type: "GET",
            url: 'controllers/randomImageController.php',
            success: function (selectedImage) {
                var getUrl = window.location;
                var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];

                var setting = width + 'x' + height + '/';
                if (selectedImage) {
                    $("#original").attr('src', baseUrl + selectedImage);
                    $("#thumborized").attr('src', randomImage.thumborServerSettings.url + setting +  baseUrl + selectedImage);
                }
            }
        });
    }
};
