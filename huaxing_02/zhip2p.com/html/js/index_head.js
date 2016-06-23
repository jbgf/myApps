var cookie_user_key="P2P_LOGIN_USER";
var session_user_key="SESSION_LOGIN_USER_KEY";
$(document).ready(function(){
	if("true"!=isIndex){
	  createCodeWin();
	}
	init_head();
});

function weixinShow(){
	$('#weixin_png').css("display","block");
}


function weixinHidden(){
	$('#weixin_png').css("display","none");
}

//企业QQ 客服在线
function showQYqq() {
	console.log(1);
	window
			.open(
					'http://crm2.qq.com/page/portalpage/wpa.php?uin=800068724&aty=0&a=0&curl=&ty=1',
					'在线客服',
					'height=405,width=500,top=200,left=200,toolbar=no,menubar=no,scrollbars=yes, resizable=no,location=no, status=no');
}

function init_head(){
//	alert("init");
	$('#topbar-nav-id').html(getHeadHtmlStr()); 
	try{
		if(loginName != '' && loginName.length > 0){
			$.get(ctx+"/member/message/doUnreadNum", function(obj){
				if(obj.rs && parseInt(obj.datas) > 0){
					$("#loginNameA").after('<a href="'+ctx+'/member/message/goMessage" class="g-topbar-nav-link">未读消息[ <span style="color:red">'+obj.datas+'</span> ]</a>');
					$("#messageNumDiv").html(obj.datas);
					$("#messageNumDiv").parent(".user_trumpet").attr("title", "您有"+obj.datas+"封站内信");
				}else{
					$("#messageNumDiv").parent(".user_trumpet").attr("title", "您有0封站内信");
					$("#messageNumDiv").remove();
				}
			})
		}
	}catch(e){}
}
//--------------------------------------------登录相关 start-------------------------------------------
function createCodeWin(){
	$("#secimgWin").attr("src",ctx+"/code.jpg?"+new Date().getTime());
}
function alertLoginMsgWin(s){
	$("#login_error_id_win").html("错误提示:"+s);
	$("#login_error_id_win").css('display','block'); 
}

function doLoginWin(){
	var s=$.trim(document.getElementById("loginName_win").value);
	var p=$.trim(document.getElementById("password_win").value);
	var c=$.trim(document.getElementById("code_win").value);
	if(null==s||s.length==0){
		alertLoginMsgWin("请输入用户名/手机号");
		return false;
	}
	if(null==p||p.length==0){
		alertLoginMsgWin("请输入登录密码");
		return false;
	}
	if(null==c||c.length==0){
		alertLoginMsgWin("请输入验证码");
		return false;
	}
    var datas = $("#login_form_win").serialize();
    $.ajax({
		url:ctx+'/login/doLogin',
		type: 'post',
		data: datas,
		//dataType: 'json',
		cache: false,
		async: false,
		error: function(obj){
	    },
	    success: function(obj){
	    	if(obj.rs){
	    		loginName=s;
	    		init_head();
	    		$('#win_login_ajax').hide();
	    		//window.location.href=obj.msg;
	    		//window.location.href=ctx+"/";
	    		//window.location.href=document.referrer;
	    	}else{
	    		alertLoginMsgWin(obj.msg);
	    		createCodeWin();
	    	}
	    }
	 });
} 
//--------------------------------------------登录相关 end-------------------------------------------


function getHeadHtmlStr(){
	var g_topbar_nav_Html = "";
	if(null==loginName||""==loginName||0==loginName.length){
		g_topbar_nav_Html+=
		     '<a  href="#"  class="g-topbar-nav-link" onclick="goReg();return false;">注册</a>'+
		     '<a  href="#"  class="g-topbar-nav-link" onclick="goLogin();return false;">登录</a>';
	}else{
		g_topbar_nav_Html+=
	     '<a id="loginNameA"  href="'+ctx+'/member/center/goCenter"  class="g-topbar-nav-link">欢迎，'+loginName+'</a>'+
	     '<a  href="#"  class="g-topbar-nav-link" onclick="goLoginOut();return false;">退出</a>';
	}
	
	g_topbar_nav_Html+=
    '<a  href="'+ctx+'/about/goAboutUs?tab=4"  class="g-topbar-nav-link">帮助中心</a>'+
    '<a  href="'+ctx+'/about/goAboutUs?tab=0"  class="g-topbar-nav-link">关于我们</a>'+
    '<a  href="'+ctx+'/insurance/goInsurance"  class="g-topbar-nav-link">安全保障</a>';
	var str=g_topbar_nav_Html;
	return str;
}

/**
 * 判断是否已登录
 * @returns {Boolean}
 */
function isLogin(){
	if(null==getCookie(cookie_user_key)){
		return false;
	}else{
		return true;
	}
}
/**
 * 返回登录名
 * @param name
 * @returns
 */
function getCookie(name)
{
  var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
  if(arr != null) return unescape(arr[2]);
  return null;
}
/**
 * 注册页
 */
function goReg(){
	window.location.href=ctx+"/reg/goReg";
}
/**
 * 登录页
 */
function goLogin(){
//		
		if("true"==isIndex){
			window.location.href=ctx+"/login/goLogin";
		}else{
			$('#win_login_ajax').show();
		}
}
/**
 * 退出登录
 */
function goLoginOut(){
	$.ajax({
		url: ctx+'/login/loginOut',
		success: function(data){
			window.location.href=ctx+"/index.jsp";
		}
	});
}