$(function () {
        var index;
        var pth = (window.location.href).slice(40);
        switch (pth) {
            case 'tool.html':
                index = 0;
                break;
            case 'play.html':
                index = 0;
                break;
            case  'work.html':
                index = 1;
                break;
            case  'vr.html':
                index = 2;
                break;
            case   'directors.html':
                index = 3;
                break;
            case  'awards.html':
                index = 4;
                break;
            case  'about.html':
                index = 5;
                break;
            case   'contact.html':
                index = 6;
                break;
        }


        var pth2 = (window.location.href).slice(35);
        switch (pth2) {
            case 'tool.html':
                index = 0;
                break;
            case 'play.html':
                index = 0;
                break;
            case  'work.html':
                index = 1;
                break;
            case  'vr.html':
                index = 2;
                break;
            case   'directors.html':
                index = 3;
                break;
            case  'awards.html':
                index = 4;
                break;
            case  'about.html':
                index = 5;
                break;
            case   'contact.html':
                index = 6;
                break;
        }


        link(index + 1);
    }
);

function link(x) {
    var aim = "nav>a:nth-child(" + x + ")";
    var t = $(aim + ">div:nth-child(2) span");
    $(aim + ">div:first-child").css("transform", "rotateX(-90deg)");
    $(aim + ">div:last-child").css("transform", "rotateX(0deg)");
    t.css("background-color", "red");
}


