/*实验三的 登录注册验证 */
function check() {

    var input1 = document.getElementsByTagName('input')[0].value;
    var input2 = document.getElementsByTagName('input')[1].value;
    if (input1 == 0){
        alert("请将用户名填写完整")
    }else if (input2 == 0){
        alert("请将密码填写完整")
    }
    else {
        alert("登录成功实现跳转")
    }
}
function check2() {

    var input1 = document.getElementsByTagName('input')[0].value;
    var input2 = document.getElementsByTagName('input')[1].value;
    var input3 = document.getElementsByTagName('input')[2].value;
    var input4 = document.getElementsByTagName('input')[3].value;
    if (input1 == 0){
        alert("请填写手机号")
    }else if (input2 == 0){
        alert("请填写密码")
    }else if (input3 != input2){
        alert("请填写一致的密码")
    }else if (input4 == 0){
        alert("请输入验证码")
    } else {
        alert("注册成功实现跳转")
    }
}
