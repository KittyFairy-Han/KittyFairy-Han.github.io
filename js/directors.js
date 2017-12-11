/**
 * directors
 */
$(function () {
    $(window).resize();


    $(".line-in").css({"height": "inherit"});
    $(".left").css("width", "55%");
    $(".right").css("width", "55%");
    $(".left-content").css({"width": "55%"});
    $(".right-content").css({"width": "55%"});
    $(".left-main").css({"width": "400px"});
    $(".right-main").css({"width": "400px"});
    $(".left-main").on("mouseover", function () {
        $(".left-content").css({"width": "0", "transition": "width .5s"});
        $(".right-content").css({"width": "55%", "transition": "width .5s"});
    });
    $(".left-main").on("mouseout", function () {
        $(".left-content").css({"width": "55%", "transition": "width .5s"});
    });
    $(".right-main").on("mouseover", function () {
        $(".left-content").css({"width": "55%", "transition": "width .5s"});
        $(".right-content").css({"width": "0", "transition": "width .5s"});
    });
    $(".right-main").on("mouseout", function () {
        $(".right-content").css({"width": "55%", "transition": "width .5s"});
    });
});
$(window).resize(function () {
        if (parseInt($("body").css('width')) <= 1000) {
            $("#directors .left-main ").css("left", "60px");
            $("#directors .right-main ").css("right", "60px");
            $("#directors  h1").css("font-size", "60px");
            $("#directors  p").css("font-size", "10px");
        }
        else {
            $("#directors .left-main ").css("left", "120px");
            $("#directors .right-main ").css("right", "120px");
            $("#directors  h1").css("font-size", "90px");
            $("#directors  p").css("font-size", "14px");
        }
    }
);


