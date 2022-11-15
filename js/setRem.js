var timer = null;

function setRem() {
    var ui_w = 375;
    var client_w = document.documentElement.clientWidth || document.body.clientWidth;
    //设置最大最小宽度
    client_w = client_w > 700 ? 700 : client_w;
    client_w = client_w < 300 ? 300 : client_w;
    // console.log(ui_w, client_w);

    var html = document.getElementsByTagName("html")[0];
    html.style.fontSize = (client_w / ui_w) * 10 + 'px';
}
// 当页面加载的时候  也要调用一下setRem 目的  默认 把html 根节点的字体大小 设置为10px
window.onload = setRem;

var flg = true;
window.onresize = function() {
    if (flg) {
        flg = false;
        setTimeout(function() {
            flg = true;
            setRem();
        }, 300)
    }
}