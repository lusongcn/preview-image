$(document).ready(function(){
    $("body").prepend('<div class="preview-image-shadow"></div><div class="preview-image-cotainer"><img src=""></div>');
    $(".preview-image-content img").click(function(){
        previewImage($(this).attr("src"));
    });

    $(".preview-image-shadow").click(function(){
        $(".preview-image-shadow").hide();
        $(".preview-image-cotainer").css("display","none");
    });
    $(".preview-image-cotainer").click(function(){
        $(".preview-image-shadow").hide();
        $(".preview-image-cotainer").css("display","none");
    });
});
function previewImage(imgsrc) {
    var img = new Image();
    img.src = imgsrc;
    var windowWidth = document.documentElement.clientWidth;
    var windowHeight = document.documentElement.clientHeight;
    $(".preview-image-shadow").show();
    $(".preview-image-cotainer img").css({"width":img.width,"height":img.height});
    if (windowWidth <= img.width) {
        var newWidth = windowWidth-30;
        var height = (newWidth/img.width*img.height).toFixed(0);
        $(".preview-image-cotainer img").css({"width":newWidth,"height":height});
    }
    if (windowHeight <= img.height) {
        var newHeight = windowHeight-30;
        var width = (newHeight/img.height*img.width).toFixed(0);
        $(".preview-image-cotainer img").css({"width":width,"height":newHeight});
    }
    $(".preview-image-cotainer img").attr("src",imgsrc);
    $(".preview-image-cotainer").css("display","flex");
}