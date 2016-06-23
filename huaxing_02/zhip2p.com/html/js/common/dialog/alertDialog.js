/**
 * 提示框组件,需要导入jquery后使用
 * @param args 参数
 * @returns
 * 调用方式:
 * 	$.alertDialog.show({
		"msg":"投资成功!",			// 提示信息,必填
		"callBack": function() {	// 点击确定的回调函数,可选
			alert("投资成功,请确认123!");
		},
		"title":"测试标题"			// 标题,可选
	});
 * 
 */
function AlertDialog(args) {
	if(args.msg) {
		this.msg = args.msg;
	} else {
		this.msg = "";
	}
	this.callBack = args.callBack;
	if(args.title) {
		this.title = args.title;
	} else {
		this.title = "";
	}
}

/**
 * 打开提示框
 * @returns
 */
AlertDialog.prototype.open = function() {
	var _this = this;
	// 渲染提示框
	var $dialog =  _this.render();
	$dialog.show();
}

/**
 * 提示框渲染
 * @returns
 */
AlertDialog.prototype.render = function() {
	var _this = this;
	var arrStr = [];
	arrStr.push('<div id="div_alert_msg">');
	arrStr.push('<div class="win_bg"></div>');
	arrStr.push('<div class="tiwin_box">');
	arrStr.push('<div class="close" id="alert_close_btn">×</div>');
	arrStr.push('<div class="tiwin_fontcont" id="div_alert_msg_text"></div>');
	arrStr.push('<div class="tiwin_buttc"><button type="button" id="alert_conf_btn" class="button_n boradius">确认</button></div>');
	arrStr.push('</div>');
	arrStr.push('</div>');
	// 转化为对象
	var $dialog = $(arrStr.join(""));
	// 设置遮罩层的高度和宽度，避免出现滚动条下面的区域未被遮罩的情况
	$dialog.find('.win_bg').css({ "width": $(document).width(), "height": $(document).height() });
	// 将对话框追加到body中
	$dialog.appendTo("body");
	// 提示信息
	$dialog.find('#div_alert_msg_text').text(_this.msg);
	$dialog.find('#alert_close_btn').bind('click',function() {
		$dialog.remove();
	});
	// 回调函数
	var wrappedCallBack=function() {
		if(_this.callBack){
			_this.callBack();
		}
		$dialog.remove();
	};
	$dialog.find('#alert_conf_btn').bind('click',wrappedCallBack);
	return $dialog; 
}

$.alertDialog = {
	show : function(args) {
		 new AlertDialog(args).open();
	}
}