/**
 * 分页组件
 */
function Page(args) {
	this.pageUrl = args.pageUrl;	// 请求路径,必填
	this.ele = args.ele;			// 渲染元素标识,必填
	this.theadStr = args.theadStr;	// 表头,可选,html文本
	this.param = args.param;		// 请求参数,可选,json对象
	this.pageNo = args.pageNo;		// 当前显示页码,必填
	if(args.pageSize) {				// 分页大小,可选,如果不传则默认为10
		this.pageSize = args.pageSize;
	} else {
		this.pageSize = 10;
	}
	this.drawTr = args.drawTr;		// 表格行绘制回调函数
}
/**
 * 组件渲染
 * @param mPageNo 页码(可不传,不传时从对象的pageNo中获取)
 */
Page.prototype.render = function(mPageNo) {
	var _this = this;
	if (typeof (_this.param) != "undefined" && _this.param != null) {
		_this.param.pageNo = (!mPageNo ? _this.pageNo : mPageNo);
		_this.param.pageSize = _this.pageSize;
	} else {
		_this.param = {
			"pageNo" : (!mPageNo ? _this.pageNo : mPageNo),
			"pageSize" : _this.pageSize
		};
	}
	$.post(_this.pageUrl, _this.param, function(result) {
		if (result.rs) {
			_this.drawTbody(result.datas);
		} else {
			alert(result.msg);
		}
	});
}
/**
 * 分页
 * @param pageNo 页码
 */
Page.prototype.page = function(pageNo) {
	var _this = this;
	_this.render(pageNo);
}
Page.prototype.drawTbody = function(page){
	var _this = this;
	var arrStr = [];
	for(var i=0; i<page.datas.length; i++) {
		arrStr.push(_this.drawTr(page.datas[i],i+1));
	}
	// 清空列表本体
	$("#"+this.ele+"Tbody").html("");
	$("#"+this.ele+"Tbody").html(_this.theadStr+arrStr.join(""));
	// 清空分页栏
	$("#"+this.ele+"Pager").html("");
	if(page.totalPages > 1){
		$("#"+this.ele+"Pager").html(_this.drawPager(page.pageNo, page.totalPages, page.totalNum));
	}
}
/**
 * 分页栏
 * @param curPage
 * @param totalPage
 * @returns
 */
Page.prototype.drawPager = function(curPage, totalPage, total){
	var _this = this;
	var arrStr = [];
	arrStr.push('<a href="javascript:void(0);" onclick="'+'window.'+_this.ele+'Pager.page(1);"> 首页</a>');
	if(curPage == 1){
		arrStr.push('<span class="disabled"> 上一页 </span>');
	}else{
		arrStr.push('<a href="javascript:void(0);" onclick="'+'window.'+_this.ele+'Pager.page('+(curPage-1)+');"> 上一页 </a>');
	}
	if(curPage > totalPage){
		curPage = totalPage;
	}
	if(curPage < 1){
		curPage = 1;
	}
	if(totalPage < 8){//1-7页，则全部显示
		for(var i=1; i<=totalPage; i++){
			if(i == curPage){
				arrStr.push('<span class="current">'+i+'</span>');
			}else{
				arrStr.push('<a href="javascript:void(0);" onclick="'+'window.'+_this.ele+'Pager.page('+i+');">'+i+'</a>');
			}
		}
	}else{//超过7页
		var lft = 3;//左偏移量
		var rgt = 3;//右偏移量
		if(curPage < 4){//左边偏移量小于3个，需向右边借位
			lft = curPage -1;
			rgt = 6-lft;
		}
		if(totalPage - curPage < 3){//右边偏移量剩余小于3个，需向左边借位
			rgt = totalPage - curPage;
			lft = 6-rgt;
		}
		for(var i=lft; i>0; i--){
			arrStr.push('<a href="javascript:void(0);" onclick="'+'window.'+_this.ele+'Pager.page('+(curPage-i)+');">'+(curPage-i)+'</a>');
		}
		arrStr.push('<span class="current">'+curPage+'</span>');
		for(var i=1; i<=rgt; i++){
			arrStr.push('<a href="javascript:void(0);" onclick="'+'window.'+_this.ele+'Pager.page('+(curPage+i)+');">'+(curPage+i)+'</a>');
		}
	}
	if(curPage >= totalPage){
		arrStr.push('<span class="disabled"> 下一页</span>');
	}else{
		arrStr.push('<a href="javascript:void(0);" onclick="'+'window.'+_this.ele+'Pager.page('+(curPage+1)+');"> 下一页</a>');
	}
	arrStr.push('<a href="javascript:void(0);" onclick="'+'window.'+_this.ele+'Pager.page('+totalPage+');"> 尾页</a><span>'+((curPage-1)*(_this.pageSize)+1)+'-'+(curPage * (_this.pageSize) > total ? total : curPage * (_this.pageSize))+'条，共'+total+'条</span>');
	
	return arrStr.join("");
}

$.pagination = {
	show : function(args) {
		var pager = new Page(args);
		pager.render();
		// 将变量存放到window对象中,供之后分页调用
		window[pager.ele + 'Pager'] = pager;
	}
}