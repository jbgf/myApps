/**
 * 确认框组件,需要导入jquery后使用
 * @param args
 * @returns
 *  调用方式:
 * 	$.confirmDialog.show({
		"msg":"投资成功!确定还是取消(json)?",	// 提示信息,必填
		"confirmCallBack": function() {	// 点击确定的回调函数,可选
			alert("投资成功,请确认!");
		},
		"cancelCallBack": function() {	// 点击取消的回调函数,可选
			alert("投资成功,请取消!");
		},
		"title":"测试标题"	// 标题,可选
	});
 */
function ConfirmDialog(args) {
	if(args.msg) {
		this.msg = args.msg;
	} else {
		this.msg = "";
	}
	this.confirmCallBack = args.confirmCallBack;
	this.cancelCallBack = args.cancelCallBack;
	if(args.title) {
		this.title = args.title;
	} else {
		this.title = "";
	}
}

/**
 * 打开确认框
 * @returns
 */
ConfirmDialog.prototype.open = function() {
	var _this = this;
	// 渲染确认框
	var $dialog =  _this.render();
	$dialog.show();
}

/**
 * 确认框渲染
 * @returns
 */
ConfirmDialog.prototype.render = function() {
	var _this = this;
	var arrStr = [];
	arrStr.push('<div id="div_confirm_msg">');
	arrStr.push('<div class="win_bg"></div>');
	arrStr.push('<div class="tiwin_box">');
	arrStr.push('<div class="close" id="confirm_close_btn">×</div>');
	arrStr.push('<div class="tiwin_fontcont" id="div_confirm_msg_text"></div>');
	arrStr.push('<div class="tiwin_buttc"><button type="button" id="confirm_conf_btn" class="button_n boradius">确认</button><button type="button" id="confirm_cancel_btn" class="button_n boradius">取消</button></div>');
	arrStr.push('</div>');
	arrStr.push('</div>');
	// 转化为对象
	var $dialog = $(arrStr.join(""));
	// 设置遮罩层的高度和宽度，避免出现滚动条下面的区域未被遮罩的情况
	$dialog.find('.win_bg').css({ "width": $(document).width(), "height": $(document).height() });
	// 将对话框追加到body中
	$dialog.appendTo("body");
	// 提示信息
	$dialog.find('#div_confirm_msg_text').text(_this.msg);
	$dialog.find('#confirm_close_btn').bind('click',function() {
		$dialog.remove();
	});
	// 点击确认回调函数
	var wrappedCallBack=function() {
		if(_this.confirmCallBack){
			_this.confirmCallBack();
		}
		$dialog.remove();
	};
	$dialog.find('#confirm_conf_btn').bind('click',wrappedCallBack);
	// 点击取消回调函数
	var cancelWrappedCallBack=function() {
		if(_this.cancelCallBack){
			_this.cancelCallBack();
		}
		$dialog.remove();
	};
	$dialog.find('#confirm_cancel_btn').bind('click',cancelWrappedCallBack);
	return $dialog; 
}

$.confirmDialog = {
	show : function(args) {
		 new ConfirmDialog(args).open();
	}
}