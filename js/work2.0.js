/**
 * work
 */

/*
 加载时-----------------------------------------------------------------------------------------------------------------
 =======================================================================================================================
 -----------------------------------------------------------------------------------------------------------------------
 */
window.e_section_w=0;
window.main_w=0 ;
window.scroll_w=0 ;
window.div_w=0 ;
window.down = false;
$(function () {
    $(window).resize();


    var count=$("#work .thumb").length;
    //平移
    $("#work").css({
        "transform": "translateX(0)",
        "transition":"transform "+count*100+"ms"
    });
    //旋转
    for(var  i=1;i<=count;i++){
        $("#work .thumb:nth-child("+i+")").css({
            "transition":"transform 100ms "+100*(count-i)+"ms",
            "transform": "rotateY(0)"
        });
        if( i<=3)
        $("#work .thumb:nth-child("+i+")").css({
            "transition":"transform 400ms "+100*(count-4)+"ms",
            "transform": "rotateY(0deg)"
        });
    }
    //设置进度条长度
     window.main_w = $("#work").width();
     window.e_section_w = $(".thumb").width();
     window.scroll_w = $(".scrollbar").width();
     window.div_w = window.e_section_w / window.main_w * window.scroll_w;
    $(".scrollbar div").css("width", window.div_w);
    //
    setTimeout(function () {
        $("#work").css({
            "transition": "none"
        });
        $(".thumb").css({
            "transition": "opacity .5s,background-position .5s,transform .5s"
        });
    },2000);

    /*
     拉----滚动条
     */
    $(".scrollbar").on("mousedown", function () {
        window.down = true;
    });
    $(document).on({
        "mouseup": function () {
            window.down = false;
        },
        "mousemove": function (event) {
            mouseMove(event);
        }
    });
    /*
     滚动监听
     */
    if (window.location.href = ('file:///D:/DISK-LenovoCloud/toolan/html/work.html')||('http://localhost:63342/toolan/html/work.html')) {
        var isFirefox = navigator.userAgent.indexOf("Firefox") != -1;
        var mousewheel = isFirefox ? "DOMMouseScroll" : "mousewheel";
        $(document).on(mousewheel, function (event) {
            mouseWheel(event);
        });
    }
});





/*
 主函数-----------------------------------------------------------------------------------------------------------------
 =======================================================================================================================
 -----------------------------------------------------------------------------------------------------------------------
 */
/*
 拉动 滚动条主函数--------------------------------------------------------------------------------------------------------
 */
window.mouse_last_x = 0;
function mouseMove(event) {
    //阻止鼠标默认事件
    event.stopPropagation();
    event.preventDefault();
    $(document).bind("selectstart", function () {
        return false;
    });
    //拖拽时
    if (window.down) {
        //计算移动距离
        var div_left = event.clientX - window.mouse_last_x;
        move(div_left);
        //更新值
        window.mouse_last_x = event.clientX;
    }
}
/*
 滚动 鼠标滚轮-------------------------------------------------------------------------------------
 */
function mouseWheel(event) {
    var value = event.originalEvent.detail || event.originalEvent.wheelDelta;//监听滚轮的上下移动
    //判断如何平移
    if (value < 0) {
        move(50);
    }
    else {
        move(-50);
    }
}





/*
移动===================================================
 */
function move(div_dis) {
    var dis=div_dis+parseInt($(".scrollbar div").css("left"));
    //滚动条滑动
    $(".scrollbar div").css("left", dis);
    //内容滑动-实现联动(----------->>>>内容滑动距离 = 滚动块滑动的距离/滚动条可以滑动的总距离*内容可以滑动的总距离
    var s_div_left = window.scroll_w - window.div_w;
    var s_translate = window.main_w - window.scroll_w;
    var distance = (dis / s_div_left) * s_translate;
    $("#work").css({
        "transform": "translateX(" + (-distance) + "px)"
    });
    //判断距离
    if ($(".scrollbar div").position().left <=0) {
        $(".scrollbar div").css("left", 0);
        $("#work").css("transform", "translateX(0)");
    }
    if ($(".scrollbar div").position().left >=s_div_left) {
        $(".scrollbar div").css("left", s_div_left);
        $("#work").css("transform", "translateX(" + (-s_translate) + "px)");
    }
    // //判断如何翻转
    var n = distance / window.e_section_w;
    //向右
    if (div_dis > 0) {
        rotateRight(n);
    }
    //向左
    if (div_dis < 0) {
        rotateLeft(n);
    }
}
/*
 右侧翻转-------------------------------------------------------------------------------------------------
 */
function rotateRight(n) {
    var count=$("#work .thumb").length;
     n = n + 5;
    var c = Math.floor(n);
    if(c>count) c=count;
    if(c<1) c=1;
    for (var i = 1; (i <count); i++) {
        if(i<c){
            $(".thumb:nth-child(" + i + ")").css("transform", "rotateY(0)");
        }
        else if(i>c){
            $(".thumb:nth-child(" + i + ")").css("transform", "rotateY(80deg)");
        }
        else {
            if (n % 1 > 0.5) {
                $(".thumb:nth-child(" + c + ")").css("transform", "rotateY(0)")
            }
            else {
                $(".thumb:nth-child(" + c + ")").css("transform", "rotateY(80deg)");
            }
        }
    }
}
/*
 左侧翻转-------------------------------------------------------------------------------------------------
 */
function rotateLeft(n) {
    var count=$("#work .thumb").length;
    n = n + 1;
    var c = Math.floor(n);
    //判断最大最小
    if(c>=count-1) c=count-1;
    if(c<=2) c=2;
    // $("nav a:nth-child(6)").text(c);
    for (var i = count; (i >1); i--) {
        if(i>c){
            $(".thumb:nth-child(" + i + ")").css("transform", "rotateY(0)");
        }
        else if(i<c){
            $(".thumb:nth-child(" + i + ")").css("transform", "rotateY(-80deg)");
        }
        else {
            if (n % 1 < 0.5) {
                $(".thumb:nth-child(" + c + ")").css("transform", "rotateY(0)")
            }
            else {
                $(".thumb:nth-child(" + c + ")").css("transform", "rotateY(-80deg)");
            }
        }
    }
}


/*
 改变窗口时-----------------------------------------------------------------------------------------------------------------
 =======================================================================================================================
 -----------------------------------------------------------------------------------------------------------------------
 */
$(window).resize(function() {
    var ww=parseInt($("body").css("width"));
    if(ww<=1000){

    }
});