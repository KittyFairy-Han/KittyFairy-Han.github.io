
$(window).resize(function() {
    if(parseInt($("body").css('width'))<=1000){
        $("nav a").css("width","14.1%")
    }
    if(parseInt($("body").css('width'))<=760){
        $(".resi").css("display","block")
    }
    else {
        $(".resi").css("display","none")
    }
});