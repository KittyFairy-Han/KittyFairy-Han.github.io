$(function () {
   $(window).resize();
});
$(window).resize(function () {
    var ww=parseInt($("body").css('width'));
    $("#about h1").css("font-size",ww/1520*40+"px")
});