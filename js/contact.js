/**
 * awards
 */
$(function () {
    $(window).resize();


        $(".networks li").css({
            "opacity": "1",
            "top":0
        });
    $(".office-details").css({
        "opacity": "1"
    });
        $(".offices h1").css({
            "width": "100%",
            "height": "200px",
            "opacity": "1"
        });
        $("h2").css({
            "opacity": "1",
            "top":0
        });

    }
);
$(window).resize(function () {
    var ww = parseInt($("body").css('width'));
    $("#contact .offices").css({
        "margin-bottom":75*ww/1520+"px"
    });
    $("#contact .networks").css({
        "margin-top":75*ww/1520+"px"
    });
    $("#contact .offices .office h1").css({

            "font-size": ww * 0.13 + "px",
            "height": ww / 1520 * 200 + "px"
        }
    );
    $(".office h2").css({
        "transition":"",
        "font-size": ww * 0.026 + "px"
    });
    if (ww >= 800 && ww <= 1000)
        $("#contact .projects .project").css("width", "33%");
    if (ww < 800)
        $("#contact .projects .project").css("width", "50%");
    if (ww > 1000)
        $("#contact .projects .project").css("width", "25%");
});

