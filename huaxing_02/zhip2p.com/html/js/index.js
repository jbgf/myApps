$(document).ready(function(){
	$('#div_wind_id').html(getWindHtmlStr()); 
	$('.g-header-logo').attr('href',ctx+'/index.jsp'); 
	loadNotice();
	initProductFlowArea();
	initProductAssignArea();
	loadNavDatas();
	loadIndexNews();
});
function getWindHtmlStr(){
	var div_wind_html='';
	if(null==loginName||""==loginName||0==loginName.length){
		div_wind_html+=
		'<h1>智钱包</h1>'+
		'<div><span class="xy_font">最高年化收益率</span><span class="num_fonty">15%</span></div>'+
		'<div class="reg_minfont"><span>40</span>倍活期存款收益，<span>4.5</span>倍定期存款收益</div>'+
		'<div class="mar_t30"><button type="submit" class="button but_yellow w280" data-category="立即注册" data-label="register" onclick="goReg();">立即注册</button></div>'+
		'<div class="mar_t30"><a href="'+ctx+'/login/goLogin" class="index_loginlink">有账户，立即登录&gt;&gt;</a> </div>';
	}else{
		var availableMoney=0;
		var totalMoney=0;
		$.ajax({
			url : ctx+'/index/getMoney',          //后台处理页面
	        type : "post",
	        dataType : "json",
	        cache: false,
	   		async: false,
	        data : {},
	        success:function(obj){
	        	if(obj.rs){
	        		var datas = obj.datas;
	        		availableMoney=datas.availableMoney;
	        		totalMoney=datas.totalMoney;
		    	}else{
		    		availableMoney=datas.availableMoney;
		    		totalMoney=datas.totalMoney;
		    	}
	        }
		  }
		);
		div_wind_html+=
		'<div class="logined">'+
		'   <h3>欢迎使用智钱包</h3>'+
		'   <ul class="amount-info">'+
		'     <li><span>欢迎您，</span><em>'+loginName+'</em></li>'+
		'      <li><span>可用余额：</span><em>'+availableMoney.toFixed(2)+'</em> 元</li>'+
		'      <li><span>个人总资产：</span><em>'+totalMoney.toFixed(2)+'</em> 元</li>'+
		'   </ul>'+
		'   <div class="mar_t30"><button type="button" class="button but_yellow w280" onclick="window.location.href=\''+ctx+'/member/center/goCenter\';">管理我的钱包</button></div>'+
		'   <div class="ft">'+
		'        <a href="'+ctx+'/member/recharge/goRecharge?tab=1" class="recharge tongji" data-category="首页-充值" data-label="index">充值</a>'+
		'        <a href="'+ctx+'/member/withdrawals/goWithdrawals?tab=1" class="withdrawal tongji" data-category="首页-提现" data-label="index">提现</a>'+
		'   </div>'+
		'</div>';
	}
	return div_wind_html;
}

function loadNotice(){
	$.post(ctx+'/notice/doPage?pageSize=1&pageNo=1&dictNoticeType=NOTICE', function(rs){
		if(rs.rs){
			var arrStr = [];
			for(var i=0; i<rs.datas.datas.length; i++){
				var obj = rs.datas.datas[i];
				if(obj["IS_LINK"] == 1){
					arrStr.push('<li><a href="'+obj["LINK_URL"]+'" target="_blank">');
					arrStr.push(obj["CREATE_BY_TIME_STR"]+ "  "+obj["NOTICE_TITLE"]);
					arrStr.push("</a></li>");
				}else{
					arrStr.push('<li><a href="'+ctx+'/notice/getNotice?pkNotice='+obj["PK_NOTICE"]+'">');
					arrStr.push(obj["CREATE_BY_TIME_STR"]+ "  "+obj["NOTICE_TITLE"]);
					arrStr.push("</li>");
				}
			}
			$("#noticeDiv").html(arrStr.join(''));
		}
	});
}
//高收益专区
function initProductFlowArea(){
	 function drawTr(obj){
			var attr= [];
			attr.push('   <div class="inddiv4">');
			attr.push('     <h2>'+fixString(obj.PRODUCT_NAME,16)+'</h2>');
			attr.push('     <div> ');
			attr.push('        <div class="ind_base1 w50">');
			attr.push('        <p class="line1 g-rate1">'+(obj.ANNUAL_RATE*100).toFixed(2)+'<span class="percent">%</span></p>');
			attr.push('        <p>年化收益</p>');
			attr.push('       </div>');
			attr.push('        <div class="ind_base1 w50 bol">');
			attr.push('        <p class="line2">'+obj.INVESTMENT_DAYS+'天</p>');
			attr.push('        <p>项目期限</p>');
			attr.push('       </div>');
			attr.push('     </div>');
			attr.push('     <div class="cp_jingdu"><span class="b_jingdu b_jd'+(obj.HAD_FINANCING_AMOUNT/obj.PRODUCT_FINANCING_AMOUNT*100).toFixed(0)+'">'+(obj.HAD_FINANCING_AMOUNT/obj.PRODUCT_FINANCING_AMOUNT*100).toFixed(2)+'%</span></div>');
			attr.push('      <div class="indcontf"><span>还剩</span><span class="yellow_color">'+fmoney(obj.NON_FINANCING_AMOUNT,2)+'元</span></div>');
			if(obj.PRODUCT_STATUS == 2){
				attr.push('      <div class="ind_butt"><a href="'+ctx+'/product/productView?productId='+obj.PK_PRODUCT_FLOW+'" class="g-btn g-btn-medium-major">马上投资</a></div>');
			}else{
				attr.push('      <div class="ind_butt"><a href="'+ctx+'/product/productView?productId='+obj.PK_PRODUCT_FLOW+'" class="g-btn g-btn-medium-major g-btn-grey">已满标</a></div>');
			}
			attr.push(' </div>');
			return attr.join("");
		}
	 var page={
				"pageUrl" : ctx+"/index/getIndexProductFlows", // 请求路径,必填
				"ele" :"productFlows",  // 渲染元素标识,必填
				"theadStr" : "", // 表头,可选,html文本
				"param" : {}, // 请求参数,可选,json对象{‘arg1’:’’,’arg2’:’’..}
				"pageNo" : 1, // 当前显示页码,必填
				"drawTr" : drawTr // 表格行绘制回调函数
		}
	 $.pagination.show(page);
}

//债权转让
function initProductAssignArea(){
	 function drawTr(obj){
			var attr= [];
			attr.push('<tr>');
			attr.push('<td class="numberfont">'+(obj.ANNUAL_RATE*100).toFixed(2)+'<span class="percent">%</span></td>');
			attr.push('<td>'+ Math.ceil(new Date().diffDays(obj.NOW_TIME,obj.PRODUCT_END_TIME))+'天</td>');
			attr.push('<td>'+fmoney(obj.REMAIN_AMOUNT,2)+'元</td>');
			attr.push('<td><a href="'+ctx+'/productAssign/productAssignDetail?pkProductAssign='+obj.PK_PRODUCT_ASSIGN+'" class="g-btn g-btn-medium-major">立即加入</a></td>');
			attr.push('</tr>');
			return attr.join("");
		}
	 var page={
				"pageUrl" : ctx+"/index/getIndexProductAssigns", // 请求路径,必填
				"ele" :"productAssigns",  // 渲染元素标识,必填
				"theadStr" : "<tr><th>年化利率</th><th>剩余期限</th><th>转让金额</th><th>状态</th></tr>", // 表头,可选,html文本
				"param" : {}, // 请求参数,可选,json对象{‘arg1’:’’,’arg2’:’’..}
				"pageNo" : 1, // 当前显示页码,必填
				"drawTr" : drawTr // 表格行绘制回调函数
		}
	 $.pagination.show(page);
}

//导航数据
function loadNavDatas(){
	$.post(ctx+'/navData/getNavDatas', function(rs){
		if(rs.datas){
			$("#investorCntId").html(fmoneyTrim(rs.datas[0],0));
			$("#amountSumId").html(fmoneyTrim(rs.datas[1],0));
			$("#revenueTotalId").html(fmoneyTrim(rs.datas[2],0));
		}
	});
}

var glide = $('.slider').glide({
	//autoplay:true,//是否自动播放 默认值 true如果不需要就设置此值
	animationTime:500, //动画过度效果，只有当浏览器支持CSS3的时候生效
	arrows:true, //是否显示左右导航器
	arrowsWrapperClass: "arrowsWrapper",//滑块箭头导航器外部DIV类名
	arrowMainClass: "slider-arrow",//滑块箭头公共类名
	arrowRightClass:"slider-arrow--right",//滑块右箭头类名
	arrowLeftClass:"slider-arrow--left",//滑块左箭头类名
	arrowRightText:"",//定义左右导航器文字或者符号也可以是类
	arrowLeftText:"",
	nav:true, //主导航器也就是本例中显示的小方块
	navCenter:true, //主导航器位置是否居中
	navClass:"slider-nav",//主导航器外部div类名
	navItemClass:"slider-nav__item", //本例中小方块的样式
	navCurrentItemClass:"slider-nav__item--current" //被选中后的样式
});

//加载首页新闻
function loadIndexNews(){
	try{
	$.get(ctx+"/notice/doGetIndexNews", function(obj){
		if(obj.rs){
			var item = obj.datas;
			$("#index_news_title").html(item["NOTICE_TITLE"]);
			if(item["IS_LINK"] == 1){
				$("#index_news_context").html("");
				$("#index_news_url").attr("href", item["LINK_URL"]).attr("target", "_blank");
			}else{
				$("#index_news_context").html(item["NOTICE_CONTENT"]);
				$("#index_news_url").attr("href", (ctx+'/notice/getNotice?pkNotice='+item["PK_NOTICE"]))
			}
			$("#index_news_url").show();
		}else{
			$("#index_news_url").hide();
		}
	});
	}catch(e){}
}

//生产环境特殊要求，直接跳转到 新员工奖励十元的公告 16.03.15 add by syy
function jumpNotice(pkNotice){
	window.location.href=ctx+"/notice/getNotice?pkNotice="+pkNotice;
}