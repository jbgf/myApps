function page(pageNo){
	if(typeof(param) != "undefined" && param != null ){
		param.pageNo = pageNo;
	}else{
		param = {"pageNo": pageNo};
	}
	window.pageNo = pageNo;
	$.post(pageUrl, param,
		function(obj){
	    	if(obj.rs){
	    		drawPage(obj.datas);
	    	}else{
	    		alert(obj.msg);
	    	}
		});
}

function drawPage(page){
	var arrStr = [];
	for(var i=0; i<page.datas.length; i++) {
		arrStr.push(drawTr(page.datas[i],i+1));
	}
	$(ele+"Tbody").html(theadStr+arrStr.join(""));
	if(page.totalPages > 1){
		$(ele+"Pager").html(drawPager(page.pageNo, page.totalPages, page.totalNum));
	}else{
		$(ele+"Pager").html("");
	}
}

/**
 * 分页栏
 * @param curPage
 * @param totalPage
 * @returns
 */
function drawPager(curPage, totalPage, total){
	var arrStr = [];
	arrStr.push('<a href="javascript:void(0);" onclick="page(1);"> 首页</a>');
	if(curPage == 1){
		arrStr.push('<span class="disabled"> 上一页 </span>');
	}else{
		arrStr.push('<a href="javascript:void(0);" onclick="page('+(curPage-1)+');"> 上一页 </a>');
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
				arrStr.push('<a href="javascript:void(0);" onclick="page('+i+');">'+i+'</a>');
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
			arrStr.push('<a href="javascript:void(0);" onclick="page('+(curPage-i)+');">'+(curPage-i)+'</a>');
		}
		arrStr.push('<span class="current">'+curPage+'</span>');
		for(var i=1; i<=rgt; i++){
			arrStr.push('<a href="javascript:void(0);" onclick="page('+(curPage+i)+');">'+(curPage+i)+'</a>');
		}
	}
	if(curPage >= totalPage){
		arrStr.push('<span class="disabled"> 下一页</span>');
	}else{
		arrStr.push('<a href="javascript:void(0);" onclick="page('+(curPage+1)+');"> 下一页</a>');
	}
	arrStr.push('<a href="javascript:void(0);" onclick="page('+totalPage+');"> 尾页</a><span>'+((curPage-1)*10+1)+'-'+(curPage * 10 > total ? total : curPage * 10)+'条，共'+total+'条</span>');
	
	return arrStr.join("");
}


//金额格式化  ep,调用：fmoney("12345.675910", 3)，返回12,345.676
function fmoney(s, n) {
	var tag=true;
	if(parseFloat(s)<0){
		tag=false;
		s=-s;
	}
	n = n > 0 && n <= 20 ? n : 2; 
	s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + ""; 
	var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1]; 
	t = ""; 
	
	for (var i = 0; i < l.length; i++) { 
		t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : ""); 
	}
	if(tag){
		return t.split("").reverse().join("") + "." + r;
	}else{
		return "-"+t.split("").reverse().join("") + "." + r;
	}
}

//金额格式化  ep,调用：fmoney("12345.000910", 3)，返回12,345
function fmoneyTrim(s, n){
	var money = fmoney(s, n);
	var point = money.substring(money.indexOf(".")+1, money.length);
	if(parseInt(point) == 0){
		return money.substring(0, money.indexOf("."));
	}else{
		return money;
	}
}

//还原函数：
function rmoney(s) { 
	return parseFloat(s.replace(/[^\d\.-]/g, "")); 
}

/**
 * 美工 - tab
 * @param num
 * @param name
 * @param namebody
 * @param count
 * @param sele
 * @param nosele
 */
function ucatch(num, name, namebody, count, sele, nosele) {
	for (var id = 1; id <= count; id++) {
		var testbody = namebody + "" + id;
		var p = name + "" + id;
		if (id == num) {
			document.getElementById(testbody).style.display = "block";
			document.getElementById(p).className = sele;
		} else {
			document.getElementById(testbody).style.display = "none";
			if (id == 1) {
				document.getElementById(p).className = nosele;
			} else {
				document.getElementById(p).className = nosele;
			}
		}
	}
}
//截取字符串，多余的部分用...代替  
function fixString(str, len) {  
    var strlen = 0;  
    var s = "";  
    for (var i = 0; i < str.length; i++) {  
        if (str.charCodeAt(i) > 128) {  
            strlen += 2;  
        } else {  
            strlen++;  
        }  
        s += str.charAt(i);  
        if (strlen >= len) {  
            return s+"...";  
        }  
    }  
    return s;  
} 
/**
 *空值替换
 * @param arg 原值
 * @param rep 为空的替换值
 */
function nvl(arg,rep){
	if(!arg==true){
		return rep;
	}
	return arg;
}
/**
 *特定值替换
 * @param arg 原值
 * @param match 匹配值
 * @param rep 匹配后的替换值
 */
function decode(arg,match,rep){
	if(arg==match){
		return rep;
	}
	return arg;
}

/**
 *敏感信息隐藏（手机号码、银行卡号等）
 * @param arg 原值
 */
function vague(arg){
	if (typeof (arg) == "undefined") {
		return ""
	}
	var _arg = arg.toString().trim();
	if (_arg.length < 8) {
		return arg
	}
	return _arg.substring(0, 4)
			+ _arg.substring(4, _arg.length - 3).replace(
					new RegExp(/\w/g), "*")
			+ _arg.substring(_arg.length - 3, _arg.length)
}

//小写金额转中文大写
function Arabia_to_Chinese(Num,errorTip){
	if(errorTip)errorTip.hide();
	for(i=Num.length-1;i>=0;i--)
	{
	Num = Num.replace(",","")//替换tomoney()中的“,”
	Num = Num.replace(" ","")//替换tomoney()中的空格
	}
	Num = Num.replace("￥","")//替换掉可能出现的￥字符
	if(isNaN(Num)) { //验证输入的字符是否为数字
		if(errorTip){
			errorTip.text("请检查输入金额是否正确");
			errorTip.css({'display':'inline'});
		}
	return "";
	}
	
	for (i=0;Num.charAt(i)=='0'&&Num.length>1;){    //替换掉数字前面出现的0
		Num=Num.substr(1,Num.length);
		}
	//---字符处理完毕，开始转换，转换采用前后两部分分别转换---//
	part = String(Num).split(".");
	newchar = "";
	if(Num==""){newchar="零圆整"}
	//小数点前进行转化
	for(i=part[0].length-1;i>=0;i--){
	if(part[0].length > 10){  
		if(errorTip){
			errorTip.text("数额最大不能超过100亿");
			errorTip.css({'display':'inline'});
		}
		return "";}//若数量超过拾亿单位，提示
	
	tmpnewchar = ""
	perchar = part[0].charAt(i);
	switch(perchar){
	case "0": tmpnewchar="零" + tmpnewchar ;break;
	case "1": tmpnewchar="壹" + tmpnewchar ;break;
	case "2": tmpnewchar="贰" + tmpnewchar ;break;
	case "3": tmpnewchar="叁" + tmpnewchar ;break;
	case "4": tmpnewchar="肆" + tmpnewchar ;break;
	case "5": tmpnewchar="伍" + tmpnewchar ;break;
	case "6": tmpnewchar="陆" + tmpnewchar ;break;
	case "7": tmpnewchar="柒" + tmpnewchar ;break;
	case "8": tmpnewchar="捌" + tmpnewchar ;break;
	case "9": tmpnewchar="玖" + tmpnewchar ;break;
	}
	switch(part[0].length-i-1){
	case 0: tmpnewchar = tmpnewchar +"圆" ;break;
	case 1: if(perchar!=0)tmpnewchar= tmpnewchar +"拾" ;break;
	case 2: if(perchar!=0)tmpnewchar= tmpnewchar +"佰" ;break;
	case 3: if(perchar!=0)tmpnewchar= tmpnewchar +"仟" ;break;
	case 4: tmpnewchar= tmpnewchar +"万" ;break;
	case 5: if(perchar!=0)tmpnewchar= tmpnewchar +"拾" ;break;
	case 6: if(perchar!=0)tmpnewchar= tmpnewchar +"佰" ;break;
	case 7: if(perchar!=0)tmpnewchar= tmpnewchar +"仟" ;break;
	case 8: tmpnewchar= tmpnewchar +"亿" ;break;
	case 9: tmpnewchar= tmpnewchar +"拾" ;break;
	}
	newchar = tmpnewchar + newchar;
	}
	//小数点之后进行转化
	if(Num.indexOf(".")!=-1){
	if(part[1].length > 2) {
		if(errorTip){
			errorTip.text("数额精度不能超过分");
			errorTip.css({'display':'inline'});
		}
		return "";
		//part[1] = part[1].substr(0,2)
	}
	for(i=0;i<part[1].length;i++){
	tmpnewchar = ""
	perchar = part[1].charAt(i)
	switch(perchar){
	case "0": tmpnewchar="零" + tmpnewchar ;break;
	case "1": tmpnewchar="壹" + tmpnewchar ;break;
	case "2": tmpnewchar="贰" + tmpnewchar ;break;
	case "3": tmpnewchar="叁" + tmpnewchar ;break;
	case "4": tmpnewchar="肆" + tmpnewchar ;break;
	case "5": tmpnewchar="伍" + tmpnewchar ;break;
	case "6": tmpnewchar="陆" + tmpnewchar ;break;
	case "7": tmpnewchar="柒" + tmpnewchar ;break;
	case "8": tmpnewchar="捌" + tmpnewchar ;break;
	case "9": tmpnewchar="玖" + tmpnewchar ;break;
	}
	if(i==0)tmpnewchar =tmpnewchar + "角";
	if(i==1)tmpnewchar = tmpnewchar + "分";
	newchar = newchar + tmpnewchar;
	}
	}
	//替换所有无用汉字
	while(newchar.search("零零") != -1)
	newchar = newchar.replace("零零", "零");
	newchar = newchar.replace("零亿", "亿");
	newchar = newchar.replace("零万", "万");
	newchar = newchar.replace("亿万", "亿");
	newchar = newchar.replace("零角", "零");
	newchar = newchar.replace("零圆", "圆");
	newchar = newchar.replace("零分", "");
	if(newchar.charAt(0) == "圆"&&newchar.length!=1){
	  newchar=newchar.substr(1,newchar.length);
	}
	if(newchar.charAt(0) == "整"||newchar=="圆"){
	  newchar="零圆整";
	}
	
	if(newchar!="零圆整"&&newchar.charAt(newchar.length-1) == "零")
	newchar=newchar.substr(0,newchar.length-1);
	if (newchar.charAt(newchar.length-1) == "圆")
	newchar = newchar+"整"
	if(newchar=='')
		newchar="零圆整";
	
	return newchar;
}

Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

Date.prototype.addDays = function (days) {
	var d=this;
	d.setDate(d.getDate()+days);
};

Date.prototype.addMonths = function (months) {
	var d=this.getDate();
	this.setMonth(this.getMonth() + months)
	
	if(this.getDate() < d){
		this.setDate(0);
	}
	
};

/**
 *返回两个日期相差的天数
 * day1 距离1970年1月1日毫秒数
 * day2 距离1970年1月1日毫秒数
 */
Date.prototype.diffDays = function (day1,day2) {
	if(!day1 || !day2){
		alert("Error-->Date.diffDays传入参数为空！");
		return;
	}
    //把相差的毫秒数转换为天数
	var iDays  =  parseFloat(Math.abs(day1  -  day2)  /  (1000  *  60  *  60  *24));  
	return iDays;
};

/**
 *返回两个日期相差的月份数
 * day1 距离1970年1月1日毫秒数
 * day2 距离1970年1月1日毫秒数
 */
Date.prototype.diffMonths = function (day1,day2) {
	if(!day1 || !day2){
		alert("Error-->Date.diffMonths传入参数为空！");
		return;
	}
	day1 = new Date(new Date(day1).format("yyyy/MM/dd"));
	day2 = new Date(new Date(day2).format("yyyy/MM/dd"));
	var year1 = day1.getFullYear();
	var month1 = day1.getMonth();
	var year2 = day2.getFullYear();
	var month2 = day2.getMonth();
	return Math.abs((year2 - year1) * 12 + (month2 - month1));
};
//js常量
var Constants = (function(){
	var Tmp = {
			//一年的天数
			YEAR_DAY_COUNT: 365
	}
	Tmp.getConstant=function(name) {
		return Tmp[name];
	}
  return Tmp;
})();
