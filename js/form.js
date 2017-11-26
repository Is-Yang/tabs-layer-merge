$(function () {

	// 显示弹窗
	$(".clickLayer").click(function () {
		$(".layer-view").show();
		// 聚焦
		if($(".telphone")) {
			$(".telphone").focus();
		}
	});

	//关闭弹窗
	$(".close", ".layer-view").click(function () {
		$(".layer-view .box-wrapper").addClass("closeAnima");
		setTimeout(function() {
			$(".layer-view").hide();
			$(".layer-view .box-wrapper").removeClass("closeAnima");
		}, 330);
	});

	$(".tab-nav a").hover(function () {
		$(".tab-nav span").css('transform', 'translate('+ $(this).index() * 100 +'%)');
		$(this).addClass("active").siblings().removeClass("active");
	},function () {
		
	});

	$(".tab-nav a").click(function () {
		$(".tab-nav span").css('transform', 'translate('+ $(this).index() * 100 +'%)');
		$(this).addClass("active").siblings().removeClass("active");
		$(".tab-content > div").eq($(this).index()).show().css('transform', 'translate(0%)').siblings().hide().css('transform', 'translate(-115%, 0)');

	});

	// 登录验证
	$("#plogin .submit-btn").click(function () {

		var telphone = $("#plogin .telphone");
		var pwd = $("#plogin .pwd");

		if(!isTelSuccess(telphone)) {
			return false;
		}
		if(!isPwdSuccess(pwd)) {
			return false;
		}
		return true;
	});


	// 注册
	$("#pregister .submit-btn").click(function () {
		var telphone = $("#pregister .telphone");
		var codemsg = $("#pregister .code-msg");
		var pwd = $("#pregister .pwd");	

		if(!isTelSuccess(telphone)) {
			return false;
		}

		if(!isCodeMsg(codemsg)) {
			return false;
		}

		if(!isPwdSuccess(pwd)) {
			return false;
		}	
		return true;
	});

	
});

// 验证手机号
function isTelSuccess(tel) {
	if(tel.val() == "") {
		$(".formTip").html("手机号码不能为空~");
		tel.focus();
		return false;
	}else {
		$(".formTip").html("&nbsp;");
	}

	var phone = /^1(3|4|5|7|8)\d{9}$/; 
	if(!phone.test(tel.val())){
		$(".formTip").html("手机号码格式不正确~");
		tel.focus();
		return false;	
	}else{
		$(".formTip").html("&nbsp;");	
	}
	return true;
}

// 验证密码
function isPwdSuccess(pwd) {
	if(pwd.val() == "") {
		$(".formTip").html("密码不能为空~");
		pwd.focus();
		return false;
	}else {
		$(".formTip").html("&nbsp;");
	}
	return true;
}

// 确认密码
function checkRepwd(pwdAgain, pwd){
	if(pwdAgain.val() == ""){
		$(".formTip").html("确认密码不能为空~");
		pwdAgain.focus();
		return false;	
	}else{
		$(".formTip").html("&nbsp;");	
	}

	if(pwdAgain.val() != pwd.val()){
		$(".formTip").html("输入的密码不一致~");
		pwdAgain.focus();
		return false;
	}else{
		$(".formTip").html("&nbsp;");	
	}
	return true;
}

// 验证验证码
function isCodeMsg(codemsg) {
	if(codemsg.val() == "") {
		$(".formTip").html("请获取验证码~");
		codemsg.focus();
		return false;
	}else {
		$(".formTip").html("&nbsp;");
	}
	return true;
}

// 获取验证码倒计时
var Time=3,  t;
var c=Time
function timeCount(){
	$("#pregister .get-code").html("" + c + "s");
	$("#pregister .get-code").addClass("disabled");
    c=c-1;
    t=setTimeout("timeCount()",1000)
    if(c<0){
        c=Time;
        stopCount();
        $("#pregister .get-code").html("发送校验码");
        $("#pregister .get-code").removeClass("disabled");
    }
}
function stopCount(){
    clearTimeout(t);
}

