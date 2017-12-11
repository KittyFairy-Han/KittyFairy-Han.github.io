
/*
 加载时-----------------------------------------------------------------------------------------------------------------
 =======================================================================================================================
 -----------------------------------------------------------------------------------------------------------------------
 */
$(function () {
    $(window).resize();


    var i=1;var k=1;
    /*
    轮播计时器--->>>>>>>>>>>>>>----进度条变化
     */
    var two=setInterval(function(){
        if(k>1) $(".pro").css("display","block");
        if(k%2==1)
            $(".con").css({
            "width":"0"
        });
        else $(".con").css({
            "width":"100%"
        });
        k++;
    },5000);
    /*
    //轮播计时器--->>>>>>>>>>>>>>----内容轮播
    */
    var tone=setInterval(function(){
        disp(i);
        i++;
    },10000);
    /*
    //按钮点击--->>>>>>>>>>>>>>
    */
    //播放--》暂停
    $(".play").click(function () {
        $(".play").css("display","none");
        $(".pause").css("display","block");
        $('.media video').trigger('pause');
    });
    //暂停--》播放
    $(".pause").click(function () {
        $(".pause").css("display","none");
        $(".play").css("display","block");
        $('.media video').trigger('play');
    });
    var v = $('.media video').get(0); //DOM对象 ( $v.get()[0] 也可以 )
    //有声--》无声
    $(".mute").click(function () {
        $(".mute").css("display","none");
        $(".unmute").css("display","block");
        v.muted=true;
    });
    //无声--》有声
    $(".unmute").click(function () {
        $(".unmute").css("display","none");
        $(".mute").css("display","block");
        v.muted=false;
    })



});



/*
 轮播函数-------------------------------------------------------------------------------------------------------------
 =======================================================================================================================
 -----------------------------------------------------------------------------------------------------------------------
 */
/*
 主函数内容变化
 */
function disp(j) {
    if(j%2==1){
        $(".progress").css("top","100px");
        $(".white").css({
            "top":"100px"
        });
        hide(".slide:last-of-type");
        show(".slide:first-of-type");
    }
    else {
        $(".progress").css("top","150px");
        $(".white").css({
            "top":"150px"

        });
        hide(".slide:first-of-type");
        show(".slide:last-of-type");
    }
}
/*
显示内容
 */
function show(x) {
    $(x+" .logos").css({
        "width":"100%",
        "opacity":"1"
    });
    $(x+" .line:first-of-type").css({
        "height":"100px",
        "top":0
    });
    $(x+" .line:nth-of-type(2)").css({
        "height":"100px",
        "top":120
    });
    $(x+" .line:nth-of-type(3)").css({
        "height":"100px",
        "top":240
    })
}
/*
隐藏内容
 */
function hide(x) {
    $(x+" .logos").css({
        "width":"0",
        "opacity":"0"
    });
    $(x+" .line:first-of-type").css({
        "height":"0",
        "top":-20
    });
    $(x+" .line:nth-of-type(2)").css({
        "height":"0",
        "top":100
    });
    $(x+" .line:nth-of-type(3)").css({
        "height":"0",
        "top":220
    })
}



/*
 窗口改变时-------------------------------------------------------------------------------------------------------------
 =======================================================================================================================
 -----------------------------------------------------------------------------------------------------------------------
 */
$(window).resize(function() {
    var ww=parseInt($("body").css("width"));
    $(".media video").css("left",-(1520-ww)/2+"px");
});