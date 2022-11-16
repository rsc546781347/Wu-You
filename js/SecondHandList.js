// 找到要点击的a
var a_ = document.querySelectorAll('.flet a');
// sapn三角形
var span_ = document.querySelectorAll('.flet span');
// 找到隐藏元素
var lis = document.querySelectorAll('.lis');
// 整体部分
var head = document.getElementsByClassName('head')[0];
// 蒙版
var mb = document.getElementsByClassName('mb')[0];
for (var i = 0; i <= a_.length; i++) {
    a_[i].setAttribute('index', i);
    a_[i].onclick = function() {
        // 向上移动
        head.style.position = 'absolute';
        head.style.top = '0';



        var index = this.getAttribute('index');

        for (var j = 0; j < a_.length; j++) {
            a_[j].className = '';
            a_[index].className = 'color';
        }
        for (var m = 0; m < span_.length; m++) {
            span_[m].id = '';
            span_[index].id = 's';
        }

        for (var k = 0; k < lis.length; k++) {
            lis[k].style.display = 'none';
            lis[index].style.display = 'block';
            mb.style.display = 'block';
            mb.onclick = function() {
                mb.style.display = 'none';
                lis[index].style.display = 'none';
                // a_[j].className = '';
                a_[index].className = '';
                // span_[m].id = '';
                span_[index].id = '';
                head.style.position = '';
                // head.style.top = '0';
            }
        }
    }
}