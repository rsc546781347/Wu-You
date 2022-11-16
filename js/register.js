// 找到输入电话
var tel = document.getElementsByClassName('tel')[0];
// 验证码
var sp = document.getElementsByClassName('sp')[0];
// 输入短信验证码
var yard = document.getElementsByClassName('yard')[0];
// 密码
var pass = document.getElementsByClassName('pass')[0];
// 提示语句
var s1 = document.getElementsByClassName('s1')[0];
var s2 = document.getElementsByClassName('s2')[0];
var s3 = document.getElementsByClassName('s3')[0];

// 手机号验证
tel.onfocus = function() {
    s1.innerHTML = '请输入手机号';
    s1.style.color = 'green';
}

var reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
tel.onblur = function() {

    if (tel.value == '') {
        s1.innerHTML = '号码不能为空';
        s1.style.color = 'red';
    } else if (!reg.test(tel.value)) {
        s1.innerHTML = '13开头11位数字'
        s1.style.color = 'red';

    } else {
        s1.innerHTML = '号码输入正确'
        s1.style.color = 'black';
    }
}


// 验证码部分
// 生成随机数  获取验证码



// 倒计时
var time = 60;
var timer;
var str = '';
sp.onclick = function() {


    for (var i = 1; i <= 1; i++) {
        var num = Math.random() * 9;
        num = Math.round(num);
        if (num < 1) {
            num += 1;
        }
        str = num;
    }
    alert('验证码为' + str);

    // sp.disabled = true;
    // 禁用
    sp.style.pointerEvents = 'none'

    clearInterval(timer);
    timer = setInterval(function() {

        time--;
        sp.innerHTML = '剩余' + time + '秒';

        if (time == 0) {
            clearInterval(timer);
            sp.innerHTML = '重新获取';
            sp.style.pointerEvents = ''
            time = 60;

        }
    }, 1000)


}

yard.onfocus = function() {
    s2.innerHTML = '请输入验证码';
    s2.style.color = 'green';
}

yard.onblur = function() {
    if (yard.value == '') {
        s2.innerHTML = '不能为空'
        s2.style.color = 'red'
    } else if (yard.value == str) {
        s2.innerHTML = '验证码输入正确'
        s2.style.color = 'black';
    } else {
        s2.innerHTML = '验证码输入错误'
        s2.style.color = 'red';
    }
}





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


//点击立即注册部分
var ipt = document.getElementsByClassName('ipt')[0];
ipt.onclick = function() {
    if (reg.test(tel.value) && reg1.test(pass.value) && yard.value == str) {
        alert('注册成功');
        location.href = './login.html';
        setCookie('tel', tel.value);
        setCookie('pass', pass.value);
    } else {
        alert('注册失败');
    }
}