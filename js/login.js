// 登录
// 找到输入电话
var tel = document.getElementsByClassName('tel')[0];
var tel1 = document.getElementsByClassName('tel1')[0];
// 验证码
var sp = document.getElementsByClassName('sp')[0];
// 输入短信验证码
var yard = document.getElementsByClassName('yard')[0];
// 密码
var pass = document.getElementsByClassName('pass')[0];
// 提示语句
var s1 = document.getElementsByClassName('s1')[0];
var s11 = document.getElementsByClassName('s11')[0];
var s2 = document.getElementsByClassName('s2')[0];
var s3 = document.getElementsByClassName('s3')[0];



// // 手机号验证1
// tel.onfocus = function() {
//     s1.innerHTML = '请输入手机号';
//     s1.style.color = 'green';
// }

// var reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
// tel.onblur = function() {

//     if (tel.value == '') {
//         s1.innerHTML = '号码不能为空';
//         s1.style.color = 'red';
//     } else if (!reg.test(tel.value)) {
//         s1.innerHTML = '13开头11位数字'
//         s1.style.color = 'red';

//     } else {
//         s1.innerHTML = '号码输入正确'
//         s1.style.color = 'black';
//     }
// }



// 手机号验证2
tel1.onfocus = function() {
    s11.innerHTML = '请输入手机号';
    s11.style.color = 'green';
}

var reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
tel1.onblur = function() {

    if (tel1.value == '') {
        s11.innerHTML = '号码不能为空';
        s11.style.color = 'red';
    } else if (!reg.test(tel1.value)) {
        s11.innerHTML = '13开头11位数字'
        s11.style.color = 'red';

    } else {
        s11.innerHTML = '号码输入正确'
        s11.style.color = 'black';
    }
}



// // 验证码部分
// // 生成随机数  获取验证码
// var str = '';
// sp.onclick = function() {

//     for (var i = 1; i <= 1; i++) {
//         var num = Math.random() * 9;
//         num = Math.round(num);
//         if (num < 1) {
//             num += 1;
//         }
//         str += num;
//     }
//     alert('验证码为' + str);



//     // 倒计时


//     var time = 60;
//     var timer = setInterval(function() {
//         time--;
//         sp.innerHTML = '剩余' + time + '秒';

//         if (time == 0) {
//             clearInterval(timer);
//             sp.innerHTML = '重新获取';
//         }
//     }, 1000)

// }

// yard.onfocus = function() {
//     s2.innerHTML = '请输入验证码';
//     s2.style.color = 'green';
// }

// yard.onblur = function() {
//     if (yard.value == '') {
//         s2.innerHTML = '不能为空'
//         s2.style.color = 'red'
//     } else if (yard.value == str) {
//         s2.innerHTML = '验证码输入正确'
//         s2.style.color = 'black';
//     } else {
//         s2.innerHTML = '验证码输入错误'
//         s2.style.color = 'red';
//     }
// }





// 密码部分
pass.onfocus = function() {
    s3.innerHTML = '6-12位字母数字';
    s3.style.color = 'green';
}
var reg2 = /^\w{6,12}$/;
var reg1 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
pass.onblur = function() {

    if (pass.value == '') {
        s3.innerHTML = '密码不能为空';
        s3.style.color = 'red';
    } else if (!reg1.test(pass.value)) {
        s3.innerHTML = '输入必须要同时包含数字 英文';
        s3.style.color = 'red';

    } else if (!reg2.test(pass.value)) {
        s3.innerHTML = '长度有误';
        s3.style.color = 'red';
    } else {
        s3.innerHTML = '密码输入正确'
        s3.style.color = 'black';
    }
}


// 点击登录部分
var ipts = document.getElementsByClassName('ipts')[0];
ipts.onclick = function() {
    // 获取cookie
    var tel_ = getCookie('tel');
    var pass_ = getCookie('pass');

    if (tel.value == tel_ && pass.value == pass_) {
        alert('输入正确 登录成功');
        setCookie('name', true)
        location.href = './myMessage.html';
    } else if (tel1.value == tel_ && yard.value == str) {
        alert('输入正确 登录成功');
        setCookie('name', true)
        location.href = './myMessage.html';
    } else {
        alert('输入错误 登录失败');
    }
}





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