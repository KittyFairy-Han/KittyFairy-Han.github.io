/**
 * awards
 */
$(function () {
        $(window).resize();


        for (var i = 1; i <= 10; i++) {
            $(".box").prepend(function () {
                var text = $(this).children().html();
                return "<span>" + text + "</span>";
            });
            $(".box").css({
                "top": -300 * i + "px",
                "opacity": "1"
            });
        }
        $(".right h1").css({
            "opacity": "1"
        });
    }
);

$(window).resize(function() {
    var ww=parseInt($("body").css('width'));
    var feature_w=parseInt($(".featured").css('width'));
    $(".awards-header .box").css("font-size",ww*0.16+"px");
    $(".awards-header .right h1").css("font-size",ww*0.1+"px");
    $("#awards .featured div").css({
        "margin-left":(feature_w-610)/5/2+"px",
        "margin-right":(feature_w-610)/5/2+"px"
    });
});

