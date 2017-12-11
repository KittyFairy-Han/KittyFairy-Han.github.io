/**
 * work
 */



$(function () {
    $(window).resize();


    $("#work .thumb").css({
        "transform":"rotateY(0)",
        "transition":" opacity .5s,background-position .5s,transform 1s"
    });
    //自动设置滚动条的长度
    var length = $("#work section").first().width()/$("#work").width()*$(".scrollbar").width();
    $(".scrollbar div").css("width",length);
    // //滚动监听
    // // if(window.location.pathname.indexOf("/Toolan/html/work.html")){
    //     var dis =0;
    //     $(window).on("mousewheel.first().width()",function(event){
    //         var value =  event.originalEvent.detail || event.originalEvent.wheelDelta;//监听滚轮的上下移动
    //         if(value>0){
    //             dis +=50;
    //         }else{
    //             dis-=50;
    //         }
    //         move(dis);
    //     });
    // // }
    //直接拉滚动条
    var down = false;
    $(".scrollbar").on("mousedown",function(){
        down = true;
    });
    $(document).on({
        "mouseup":function(){
            down = false;
        },
        "mousemove":function(event){
            if(down){
                //阻止鼠标默认事件
                event.stopPropagation();
                event.preventDefault();
                var x = event.clientX;
                var left = x - $(".scrollbar").offset().left-$(".scrollbar div").width()/2;
                move(left);
            }
        }
    });
});


function move(dis){
    //滚动条滑动
    $(".scrollbar div").css("left",dis);
    //内容滑动-实现联动
    var botton_total = $(".scrollbar").width()-$(".scrollbar div").width();
    var top_total = $("#work").width()-$(".scrollbar").width();
    var distance = (dis / botton_total)*top_total;
    $("#work").css("left",-distance);//内容滑动距离 = 滚动块滑动的距离/滚动条可以滑动的总距离*内容可以滑动的总距离
    //判断距离
    if($(".scrollbar div").position().left<0){
        $(".scrollbar div").css("left",0);
        $("#work").css("left",0);
    }
    if($(".scrollbar div").position().left>($(".scrollbar").width()-$(".scrollbar div").width())){
        $(".scrollbar div").css("left",($(".scrollbar").width()-$(".scrollbar div").width()));
        $("#work").css("left",-top_total);
    }
}
