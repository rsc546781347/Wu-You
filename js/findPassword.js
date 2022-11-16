// 找回密码中的确认密码
var pass1 = document.getElementsByClassName('pass1')[0];
var s4 = document.getElementsByClassName('s4')[0];
pass1.onfocus = function() {
    s4.innerHTML = '不能为空且两次要密码相等';
    s4.style.color = 'green';
}
var passreg = /^\w{6,12}$/;
pass1.onblur = function() {
    if (pass1.value == '') {
        s4.innerHTML = '密码不能为空';
        s4.style.color = 'red';
    } else if (!passreg.test(pass1.value)) {
        s4.innerHTML = '请输入6-12位密码';
        s4.style.color = 'red';
    } else if (pass.value != pass1.value) {
        s4.innerHTML = '两次密码不一致';
        s4.style.color = 'red';
    } else {
        s4.innerHTML = '密码输入正确'
        s4.style.color = 'black';
    }
}

//点击提交部分
var submit = document.getElementsByClassName('submit')[0];
submit.onclick = function() {
    // 删除之前存储的
    removeCookie('tel');
    removeCookie('pass');
    removeCookie('name');

    if (passreg.test(pass1.value) && reg1.test(pass.value) && yard.value == str) {
        alert('提交成功');
        location.href = './login.html';
        setCookie('tel', tel.value);
        setCookie('pass', pass.value);
    } else {
        alert('注册失败');
    }
}