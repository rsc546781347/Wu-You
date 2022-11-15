// 点击切换登录方式
var li_ = document.querySelectorAll('.login li');
// console.log(li_);
var ipt1 = document.querySelectorAll('.ipt1');
for (var i = 0; i <= li_.length; i++) {
    li_[i].setAttribute('index', i);
    // li被点击的时候
    touch.on(li_[i], 'tap', function() {
        var index = this.getAttribute('index');
        for (var j = 0; j < li_.length; j++) {
            li_[j].className = '';
            li_[index].className = 'color';
        }

        for (var k = 0; k < ipt1.length; k++) {
            ipt1[k].style.display = 'none';
            ipt1[index].style.display = 'block';
        }
    })
}