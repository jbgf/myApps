var keyword_info_htmlContent = '<div class="current">您的位置：<a href="#">首页</a> &gt;&gt; <a href="#">推荐产品</a> &gt;&gt; ' + keyword_info_title + '</div>' +
'<form id="frmClac" name="frmClac"><input type="hidden" id="hidMaterial" name="hidMaterial" value="建滔KB A级料" /><div class="keywordLeft"><div class="logoonline"><h1>' +
keyword_info_titleKeyword + '计价器</h1><div class="Guided"><input type="button" value="免费注册" class="pcbbtna" onclick="window.open(\'/member/register.aspx\')" /></div></div>' +
'<div class="regleftbar"><ul class="regstep three"><li class="green">填写计价需求</li><li class="green">产品计价</li><li class="green">计算成功</li></ul></div>' +
'<div class="boson"><table width="100%" border="0" cellspacing="0" cellpadding="0" class="orderdetail">' +
'<tr><td width="13%" height="35" class="font2">板子层数：</td>' +
'<td width="39%"><input type="radio" name="hidLayers" value="1" style="margin-left: 5px" />&nbsp;1&nbsp;<input type="radio" name="hidLayers" value="2" style="margin-left: 5px" checked="checked" />&nbsp;2&nbsp;<input type="radio" name="hidLayers" value="4" style="margin-left: 5px" />&nbsp;4&nbsp;<input type="radio" name="hidLayers" value="6" style="margin-left: 5px" />&nbsp;6</td>' +
'<td height="35" class="font2">订单类型：</td><td><span id="spOrderType">样板(板材： FR4)</span></td></tr>' +
'<tr><td height="35" class="font2">板子宽度：</td><td class="orderdetail"><input name="hidWidth" type="text" class="txtstyle1" id="hidWidth" size="15" data-options="required:true,validType:\'num\'" />&nbsp;<em>厘米</em></td>' +
'<td height="35" class="font2">&nbsp;</td><td>&nbsp;</td></tr>' +
'<tr><td height="35" class="font2">板子长度：</td><td><input name="hidLength" type="text" class="txtstyle1" id="hidLength" size="15" data-options="required:true,validType:\'num\'" />&nbsp;<em>厘米</em></td>' +
'<td height="35" class="font2">&nbsp;</td><td>&nbsp;</td></tr>' +
'<tr><td width="13%" class="font2">板子数量：</td><td width="35%"><input name="hidNum" type="text" class="txtstyle1" id="hidNum" size="15" data-options="required:true,validType:\'num\'" onfocus="SelectNum()" readonly="readonly" />&nbsp;<em>PCS</em></td>' +
'<td height="35" class="font2">&nbsp;</td><td>&nbsp;</td></tr>' +
'<tr><td class="font2">拼版款数：</td><td><input name="txtPinBanNum" value="1" type="text" class="txtstyle1" id="txtPinBanNum" size="15" data-options="required:true,validType:\'num\'" /></td>' +
'<td height="35" class="font2">&nbsp;</td><td>&nbsp;</td></tr></table>' +
'<table width="100%" border="0" cellspacing="0" cellpadding="0" class="orderdetail">' +
'<tr><td width="13%" height="32" class="font2">阻焊颜色：</td>' +
'<td width="87%" class="orderdetail"><input type="radio" checked="checked" value="绿色" name="radSolderColor" onclick="SetColor()" />&nbsp;' +
'<font size="4" color="green">■</font>绿色<input type="radio" title="免颜色费" value="红色" name="radSolderColor" onclick="SetColor()" />&nbsp;' +
'<font size="4" color="red">■</font>红色<input type="radio" title="免颜色费" value="黄色" name="radSolderColor" onclick="SetColor()" />&nbsp;' +
'<font size="4" color="yellow">■</font>黄色<input type="radio" title="免颜色费" value="蓝色" name="radSolderColor" onclick="SetColor()" />&nbsp;' +
'<font size="4" color="blue">■</font>蓝色<input type="radio" title="免颜色费" value="白色" name="radSolderColor" onclick="SetColor()" />&nbsp;' +
'<font size="4">□</font>白色<input type="radio" title="温馨提示：黑油暂时不接收24小时加急(免颜色费)" value="黑色" name="radSolderColor" onclick="SetColor()" />' +
'<font size="4">■</font>黑色<input type="radio" title="无阻焊" value="无" name="radSolderColor" onclick="SetColor()" /> 无</td></tr>' +
'<tr><td height="32" class="font2">板子厚度：</td>' +
'<td><input type="radio" title="提示(单位mm) 建议选择板厚0.6~1.6 其它板厚价格比0.6~1.6工程费要高100~200元" value="0.4" name="radBoardThickness" />&nbsp;0.4&nbsp;' +
'<input type="radio" title="提示(单位mm) 建议选择板厚0.6~1.6 其它板厚价格比0.6~1.6工程费要高100~200元" value="0.6" name="radBoardThickness" />&nbsp;0.6&nbsp;' +
'<input type="radio" value="0.8" name="radBoardThickness" />&nbsp;0.8&nbsp;<input type="radio" value="1.0" name="radBoardThickness" />&nbsp;1.0&nbsp;<input type="radio" value="1.2" name="radBoardThickness" />&nbsp;1.2&nbsp;' +
'<input type="radio" checked="checked" value="1.6" name="radBoardThickness" />&nbsp;1.6&nbsp;<input type="radio" title="提示(单位mm) 建议选择板厚0.6~1.6 其它板厚价格比0.6~1.6工程费要高100~200元" value="2.0" name="radBoardThickness" />&nbsp;2.0&nbsp;</td></tr></table>' +
'<table width="100%" border="0" cellspacing="0" cellpadding="0" class="orderdetail">' +
'<tr><td height="35" class="font2">焊盘喷镀：</td>' +
'<td class="orderdetail"><input type="radio" checked="checked" value="有铅喷锡" name="radPlatingType" />&nbsp;有铅喷锡&nbsp;' +
'<input type="radio" title="无铅喷锡比有铅喷锡,喷镀费每款高20元" value="无铅喷锡" name="radPlatingType" />&nbsp;无铅喷锡&nbsp;' +
'<input type="radio" title="沉金比有铅喷锡,喷镀费每款高100元" value="沉金" name="radPlatingType" />&nbsp;沉金</td>' +
'<td height="35" class="font2">飞针测试：</td>' +
'<td><input type="radio" name="radTestType" checked="checked" value="全部测试"  title="对于线宽线距小于0.5mm,过孔小于0.5mm,请选择全部测试,保证100%的产品合格率。" />&nbsp;全测&nbsp;<input type="radio" name="radTestType" checked="checked" value="抽测试" title="线宽大于0.5mm,过孔大于0.5mm，路线比较少的可以选择抽测试，合格率95%以上，当合格率小于95%,我司免费全测" />&nbsp;抽测&nbsp;<input type="radio" name="radTestType" value="不测试" />&nbsp;不测&nbsp;</td></tr>' +
'<tr><td width="13%" height="35" class="font2">阻焊覆盖：</td>' +
'<td width="44%" class="orderdetail"><input type="radio" title="过孔盖油指的是过孔上不做表面喷锡/沉金 ，过孔开窗指的是过孔上做表面喷锡/沉金，如无特殊要求，如果不做特殊说明一般为过孔盖油" checked="checked" value="过孔盖油" name="radZhfg" />&nbsp;过孔盖油&nbsp;' +
'<input type="radio" title="过孔盖油指的是过孔上不做表面喷锡/沉金 ，过孔开窗指的是过孔上做表面喷锡/沉金，如无特殊要求，如果不做特殊说明一般为过孔盖油" value="过孔开窗" name="radZhfg" />&nbsp;过孔开窗</td>' +
'<td width="13%" height="35" class="font2">铜箔厚度：</td>' +
'<td width="30%"><input type="radio" checked="checked" value="1/1oz" name="radCopperThickness" />&nbsp;1/1oz&nbsp;<input type="radio" value="2/2oz" name="radCopperThickness" />&nbsp;2/2oz&nbsp;</td></tr>' +
'<tr><td height="35" class="font2">字符颜色：</td>' +
'<td><input type="radio" checked="checked" value="白色" name="radFontColor" />&nbsp;<font size="4">□</font>白色&nbsp;' +
'<input type="radio" value="黑色" name="radFontColor" />&nbsp;<font size="4">■</font>黑色&nbsp;<input type="radio" value="无" name="radFontColor" />&nbsp;无</td>' +
'<td height="35" class="font2">需要发票：</td>' +
'<td><input type="radio" checked="checked" value="0" name="radNeedBill" onclick=\'$("#hidBill").val("0");\' />&nbsp;不需要&nbsp;' +
'<input type="radio" value="1" name="radNeedBill" onclick="NeedBill()" />&nbsp;需要<input type="hidden" id="hidBill" name="hidBill" /></td></tr>' +
'<tr><td height="35" class="font2">交货时间：</td>' +
'<td class="orderdetail"><select id="radDeliveryDays" name="radDeliveryDays" class="txtstyleaa"></select></td><td height="35" class="font2">快递公司：</td>' +
'<td><select id="select" name="selExpressName" class="txtstyleaa">' +
'<option value="联昊通">联昊通</option><option value="全日通">全日通</option>' +
'<option value="顺丰">顺丰(运费到付)</option><option value="德邦物流">德邦物流(运费到付)</option></select></td></tr></table></div>' +
'<div class="boson1"><div class="delivery">快递代收:<em id="expressMoney">￥ 0</em>元</div>' +
'<table width="100%" border="0" cellspacing="0" cellpadding="0" class="orderdetail"><tr>' +
'<td width="100" height="25" align="center" class="font3">工程费</td><td width="100" align="center" class="font3">拼版费</td>' +
'<td width="100" align="center" class="font3">板费</td><td width="100" align="center" class="font3">菲林费</td>' +
'<td width="100" align="center" class="font3">税费</td><td width="100" align="center" class="font3">喷镀费</td>' +
'<td width="100" align="center" class="font3">测试费</td><td width="100" align="center" class="font3">加急费</td>' +
'<td width="100" align="center" class="font3">颜色费</td></tr>' +
'<tr id="trExpressMoney"><td height="25" align="center" class="font4">0</td><td align="center" class="font4">0<em></em></td>' +
'<td align="center" class="font4">0</td><td align="center" class="font4"><p>0</p></td>' +
'<td align="center" class="font4">0</td><td align="center" class="font4">0</td><td align="center" class="font4">0</td>' +
'<td align="center" class="font4">0</td><td align="center" class="font4">0</td></tr></table></div>' +
'<div class="boson1"><div class="delivery delivery1">网络支付:<em></em><em id="netMoney">￥0</em>元</div>' +
'<table width="100%" border="0" cellspacing="0" cellpadding="0" class="orderdetail"><tr>' +
'<td width="100" height="25" align="center" class="font3">工程费</td><td width="100" align="center" class="font3">拼版费</td>' +
'<td width="100" align="center" class="font3">板费</td><td width="100" align="center" class="font3">菲林费</td>' +
'<td width="100" align="center" class="font3">税费</td><td width="100" align="center" class="font3">喷镀费</td>' +
'<td width="100" align="center" class="font3">测试费</td><td width="100" align="center" class="font3">加急费</td><td width="100" align="center" class="font3">颜色费</td></tr>' +
'<tr id="trNetMoney"><td height="25" align="center" class="font4">0</td><td align="center" class="font4">0<em></em></td><td align="center" class="font4">0</td>' +
'<td align="center" class="font4"><p>0</p></td><td align="center" class="font4">0</td><td align="center" class="font4">0</td>' +
'<td align="center" class="font4">0</td><td align="center" class="font4">0</td><td align="center" class="font4">0</td></tr></table></div>' +
'<div class="fonat5">您是否对以上计算的价格满意？想购买此产品只需上传PDB文件，在线便可下单。</div><div class="sumbitbox"><input name="pcbfile" type="hidden" id="pcbfile"/><input name="orgname" type="hidden" id="orgname" /><input id="btnUploadPcb" type="button" value="上传PCB文件并保存订单" class="pcbbtna" /></div><div class="clear"></div></div></form>' +
'<div class="keywordRight"><div class="Title fonat">捷多邦工厂展示</div>' +
'<div class="Title"><div class="ad"><ul class="slider">' +

'<li><img src="img/01.jpg" style="width: 390px; height: 220px" alt="" /></li><li><img src="img/02.jpg" style="width: 390px" alt="" /></li>' +
'<li><img src="img/03.jpg" style="width: 390px" alt="" /></li>'+
'<li><img src="img/04.jpg" style="width: 390px" alt="" /></li></ul>' +

'<ul class="num"><li>1</li><li>2</li><li>3</li><li>4</li></ul></div></div>' +
'<div class="Title1 fonat">常见问题</div>' +
'<div class="tstuk"><p>' +
'<span class="foanr13">注册时如需要填业务员编号请填“A”</span><br />' +
'<span class="font4">问：可以快速注册吗？ </span><br />答：可以。请点上面的按钮进入快速注册资料填写页面，只需要填带*选项. 成功获得ID号后,请记下.可以点"现在去下单"登录。<br /><br />' +
'<span class="font4">问：注册时,我可以不填写真实信息吗?</span><br />答：可以,登录后可再修改为正确的注册资料. 不修改也可以正常下单,下单时可单独填写地址收件人。<br /><br />' +
'<span class="font4">问: 注册提示不成功或后缀不是“F”怎么办?</span><br />答: 请给客服QQ1563289095留言您的邮箱、手机、收件人和地址代为注册。<br /><br />' +
'<span class="font4">问：忘记客户编码ID和密码怎么办? </span><br />答：忘记客编可找客服提供注册时的信息找回. 忘记密码可以点这里自助找回。<span class="font4"><br /><br />' +
'问：贵公司板子的价格是多少? </span><br />答：双面板打样是5分/平方厘米,小批量是4分. 请您通过左边的计价器,输入板子的长、宽、数量自助计算.计价器可自动分辨是样板还是小批量,或者是优惠套餐。<br /><br />' +
'<span class="font4">问：样板，小批量，特价套餐是怎么区分？</span><br />答：每款板＜100片且总面积＜1平方米,就算样板,超过就是小批量.请在左边计价器计算,将自动分辨. 特价:长宽≤5x5CMx10片50元,≤10x10CMx10片100元。<br /><br />' +
'<span class="font4">问：工厂支持什么格式的文件？ </span><br />答：*.PCB,*.PCBDOC,GERBER(RS-274-X)等格式都可以支持.偏门的软件画的图可以导出GERBER做板。<br /><br />' +
'<span class="font4">问：如何下单,传文件,需要和客服联系吗？ </span><br />答：下单全程不需要联系客服.您可以上网登录下单,网上传文件,等待审核,网上付款,网上查流程等等操作.遇到问题才联系客服. 如何下单。<br /><br />' +
'<span class="font4">问：正常多久时间可以出货?可以加急吗? </span><br />答：正常是3-4天出货,如果选加急可48小时或24小时。<br /><br />' +
'<span class="font4">问：如何网上付款? </span><br />答：下单后,等待审核完成(约30分钟),这时就可以点确认进入网上付款了.付款可以用各家网上银行,或支付宝,财付通等。<br /><br />' +
'<span class="font4">问：如何查看订单进度和快递到哪里了? </span><br />答：登录系统后,查看对应的订单,可以查到当前完成的进度,和快递已经运到了什么地方。<br /><br />' +
'<span class="font4">问：我有很多款板子要下单,可否帮忙拼版? </span><br />答：很多款板子一起下单时,如果你不想自己拼板,你可以打成一包,里面附带生产要求说明文件:"每款板的工艺,数量,是否拼板出货等".填单时长宽数量都填1.上传整包文件上去后,等待审核报价.如审核发现问题,会电话与您联系。<br /><br />' +
'<span class="font4">问：工厂能做的线宽,线距,孔径是多少？</span><br />答：线宽最小6mil,线距最小6mil,过孔和焊盘孔径最小0.3mm.一块板的边长最大30*40cm。<br /><br /></p></div></div></div>' +
'<div class="clear"></div>' +
'<div id="divNeddBill" style="display: none"></div><!-- 弹出登陆注册框 --><div id="regbox" style="display: none"></div><div id="uppcb" style="display: none"></div>' +
'<div id="divSelectNum" style="width: 550px; padding: 8px; display: none;"><table width="100%" border="0" cellspacing="0" cellpadding="0">' +
'<tr><td width="100" height="30"><input name="countNumer" value="5" type="radio" />5</td>' +
'<td width="100"><input name="countNumer" value="10" type="radio" />10</td>' +
'<td width="100"><input name="countNumer" value="15" type="radio" />15</td>' +
'<td width="100"><input name="countNumer" value="20" type="radio" />20</td>' +
'<td width="100"><input name="countNumer" value="25" type="radio" />25</td>' +
'<td width="100"><input name="countNumer" value="30" type="radio" />30</td>' +
'<td width="100"><input name="countNumer" value="30" type="radio" />40</td>' +
'<td width="100"><input name="countNumer" value="30" type="radio" />50</td></tr>' +
'<tr><td width="100"><input name="countNumer" value="75" type="radio" />75</td>' +
'<td height="30"><input name="countNumer" value="100" type="radio" />100</td>' +
'<td><input name="countNumer" value="125" type="radio" />125</td>' +
'<td><input name="countNumer" value="150" type="radio" />150</td>' +
'<td><input name="countNumer" value="200" type="radio" />200</td>' +
'<td><input name="countNumer" value="250" type="radio" />250</td>' +
'<td><input name="countNumer" value="300" type="radio" />300</td>' +
'<td><input name="countNumer" value="350" type="radio" />350</td></tr>' +
'<tr><td><input name="countNumer" value="400" type="radio" />400</td>' +
'<td height="30"><input name="countNumer" value="450" type="radio" />450</td>' +
'<td><input name="countNumer" value="500" type="radio" />500</td>' +
'<td><input name="countNumer" value="600" type="radio" />600</td>' +
'<td><input name="countNumer" value="700" type="radio" />700</td>' +
'<td><input name="countNumer" value="800" type="radio" />800</td>' +
'<td><input name="countNumer" value="900" type="radio" />900</td>' +
'<td><input name="countNumer" value="1000" type="radio" />1000</td></tr>' +
'<tr><td><input name="countNumer" value="1500" type="radio" />1500</td>' +
'<td height="30"><input name="countNumer" value="2000" type="radio" />2000</td>' +
'<td><input name="countNumer" value="2500" type="radio" />2500</td>' +
'<td><input name="countNumer" value="3000" type="radio" />3000</td>' +
'<td><input name="countNumer" value="3500" type="radio" />3500</td>' +
'<td><input name="countNumer" value="4000" type="radio" />4000</td>' +
'<td><input name="countNumer" value="4500" type="radio" />4500</td>' +
'<td><input name="countNumer" value="5000" type="radio" />5000</td></tr>' +
'<tr><td><input name="countNumer" value="5500" type="radio" />5500</td>' +
'<td height="30"><input name="countNumer" value="6000" type="radio" />6000</td>' +
'<td><input name="countNumer" value="6500" type="radio" />6500</td>' +
'<td><input name="countNumer" value="7000" type="radio" />7000</td>' +
'<td><input name="countNumer" value="7500" type="radio" />7500</td>' +
'<td><input name="countNumer" value="8000" type="radio" />8000</td>' +
'<td colspan="3">输入数量：<input type="text" onclick=\'$(":radio[name=countNumer][checked]").attr("checked",false)\' name="txtSelNum" id="txtSelNum" style="width: 40px" /></li></td></tr></table>' +
'<div style="clear: both"></div>' +
'<div style="text-align: center; margin-top: 10px;">' +
'<a href="javascript:void(0)" onclick=\'SetNum();return false;\' class="btnhoverstyle"><input id="Button1" type="button" value="提交" />&nbsp;</a>' +
'<a href="javascript:void(0)" class="btnhoverstyle"><input id="btn2" type="reset" value="取消" onclick=\'$("hidNum").val("");$("#divSelectNum").dialog("close");\' /></a></div>';

function printHtmlContent() {
    document.write(keyword_info_htmlContent);
}

var _isClac = false;
function SetColor() {
    if ($(":radio[name=radSolderColor][checked]").val() == "无") {
        $("input[name='radFontColor'][value='黑色']").attr("disabled", false);
        $("input[name='radFontColor'][value='白色']").attr("disabled", false);
    }
    else if ($(":radio[name=radSolderColor][checked]").val() == "白色") {
        $("input[name='radFontColor'][value='黑色']").attr("disabled", false);
        if ($(":radio[name=radFontColor][checked]").val() == "白色") {
            $("input[name='radFontColor'][value='黑色']").attr("checked", true);
        }
        $("input[name='radFontColor'][value='白色']").attr("disabled", true);
    }
    else {
        $("input[name='radFontColor'][value='白色']").attr("disabled", false);
        if ($(":radio[name=radFontColor][checked]").val() == "黑色") {
            $("input[name='radFontColor'][value='白色']").attr("checked", true);
        }
        $("input[name='radFontColor'][value='黑色']").attr("disabled", true);
    }
}
function SetDeliveryDays(type) {
    $("#radDeliveryDays").empty();
    var width = parseFloat($("#hidWidth").val());
    var length = parseFloat($("#hidLength").val());
    var num = parseInt($("#hidNum").val());
    var m2 = CalcSquare(width, length, num);
    if (type == 0) {
        var d = CalcOrderType(width, length, num);
        type = (d == "小批量" ? 2 : 1);
    }
  
	
	
    var layers = $('input[name="hidLayers"]:checked').val();
		 
	
    if (type == 1) {
		
		
		 if (m2 >= 5 && m2 <= 10) {
				$("#radDeliveryDays").append("<option value=\"6\">正常6-7天(小批量)</option>");
				return;
			}
			else if (m2 > 10) {
				$("#radDeliveryDays").append("<option value=\"7\">正常7-8天（小批量）</option>");
				return;
			}
		
		 
            if (layers == 4) {
                $("#radDeliveryDays").append("<option value=\"4\">正常4-5天（样板）</option><option value=\"2\">多层板48小时加急</option><option value=\"3\">多层板72小时加急</option>");
            }
            else if (layers == 6) {
                $("#radDeliveryDays").append("<option value=\"5\">正常5-6天（样板）</option><option value=\"3\">多层板72小时加急</option><option value=\"4\">多层板96小时加急</option>");
            }
            else {

                $("#radDeliveryDays").append("<option value=\"3\">正常3-4天(样板)</option><option value=\"1\">样板24小时加急</option><option value=\"2\">样板48小时加急</option>");
            }
    }
    else if (type == 2) { 
		   if(layers==1 || layers==2)
		    {
				if (m2 < 5) {
					$("#radDeliveryDays").append("<option value=\"5\">正常5-6天(小批量)</option>");
				}
			   else if (m2 >= 5 && m2 <= 10) {
					$("#radDeliveryDays").append("<option value=\"6\">正常6-7天(小批量)</option>");
					return;
				}
				else if (m2 > 10) {
					$("#radDeliveryDays").append("<option value=\"7\">正常7-8天（小批量）</option>");
					return;
				}
			 
			}
			else if (layers==4)
			{
				
				if (m2 < 5) {
					$("#radDeliveryDays").append("<option value=\"6\">正常6-7天(小批量)</option>");
				}
				else if( m2>=5 && m2<=10 ){
				    $("#radDeliveryDays").append("<option value=\"7\">正常7-8天(小批量)</option>");
				}
				else {
					$("#radDeliveryDays").append("<option value=\"8\">正常8-10天(小批量)</option>");
				} 
			}
			else{
				if (m2 < 5) {
					$("#radDeliveryDays").append("<option value=\"7)\">正常7-8天(小批量)</option>");
				} 
				else {
					$("#radDeliveryDays").append("<option value=\"8\">正常8-10天(小批量)</option>");
				} 
			
			} 
	 
    }
	ClacPrice();
}
if (2 == 1) {
    $("input[name='radTestType'][value='不测试']").attr("checked", true);
    $("input[name='radTestType'][value='全部测试(样板免费)']").attr('checked', false);
    $("input[name='radTestType'][value='全部测试(样板免费)']").attr('disabled', true);
}
else if (2 == 4) {
    $("input[name='radBoardThickness'][value='0.4']").attr('disabled', true);
}
function SetSelVal() {
    if ($("#hidNum").val() != "") {
        var width = parseFloat($("#hidWidth").val());
        var length = parseFloat($("#hidLength").val());
        var num = parseInt($("#hidNum").val());
        if (width == 0 || length == 0 || length == 0) return;
        var d = CalcOrderType(width, length, num);
		var cailiao = (d != "小批量" ? "FR-4(建滔KB6160A)" : "FR-4(国纪 A级料)");
        $("#spOrderType").html("<font color='red'>" + d + "</font> (板材： " + cailiao + ")")
        if (d == "小批量") {
            SetDeliveryDays(2);
        }
        else {
            SetDeliveryDays(1);
        }
    }
}
function CalcSquare(width, length, num) { return (parseFloat(width) * parseFloat(length) * parseInt(num) / 10000.0); }
function SetBill(val) { $("#hidBill").val(val);ClacPrice(); }
function BillColose() { $(".panel-tool-close").click(); }
function NeedBill() {
    $("#divNeddBill").show();
    $('#divNeddBill').dialog({
        title: '请选择发票类型',
        width: 600,
        height: 400,
        closed: false,
        cache: false,
        modal: true,
        content: '<iframe src="/member/order/order_bill.aspx" width="100%" height="100%" frameborder="0" border="0" scrolling="no"></iframe>'
    });
}
function ClacPrice(callback) {
    var width = parseFloat($("#hidWidth").val());
    var length = parseFloat($("#hidLength").val());
    var num = parseInt($("#hidNum").val());
    var pbnum = parseInt($("#txtPinBanNum").val())
    if (isNaN(width) || isNaN(length) || isNaN(num) || isNaN(pbnum) || width == 0 || length == 0 || num == 0 || pbnum == 0) {
        RestPrice();
        return;
    }
    $.ajax({
        url: "/member/ajax.aspx?act=CalcPrice",
        dataType: "json",
        type: "POST",
        data: $("#frmClac").serialize(),
        success: function(d) {
            if (d.OK) {
                _isClac = true;
                $("#expressMoney").html("￥ " + d.ZF); //总费
                var priceArray = [];
                for (var key in d) { priceArray.push(d[key]); }
                $("#trExpressMoney td").each(function(index, obj) {
                    $(obj).html(priceArray[index]);
                });

                $("#netMoney").html("￥ " + d.NETZF); //总费
                $("#trNetMoney td").each(function(index, obj) {
                    $(obj).html(priceArray[index + 10]);
                });
                if (callback) { callback(); }

            }
            else {
                $.messager.alert('提示', '计算价格失败,请重试或点击在线计价导航!', 'show');
                RestPrice();
            }
        }
    });
}
$.extend($.fn.validatebox.defaults.rules, {
    num: {
        validator: function(value, param) {
            return !isNaN(value) && value > 0;
        },
        message: '必须填写数值类型并大于0.'
    }
});
var loginBox;
function SaveOrder() {
    if (isLogin) {
        $("#uppcb").show();
        $('#uppcb').dialog({
            title: '上传Pcb文件',
            width: 600,
            height: 300,
            closed: false,
            cache: false,
            modal: true,
            content: '<iframe src="/upload/multiupload.aspx?uptype=pcbfile&uploadnum=1&funname=UploadSeccess&scriptPage=web/common/upload.aspx" width="100%" height="100%" frameborder="0" border="0" scrolling="no"></iframe>'
        });
    }
    else {
        $("#regbox").show();
        loginBox = $('#regbox').dialog({
            title: '登陆或注册',
            top: 320,
            width: 550,
            height: 600,
            closed: false,
            cache: false,
            modal: true,
            content: '<iframe src="/online/iframelogin.aspx" width="100%" height="100%" frameborder="0" border="0" scrolling="no"></iframe>'
        });
    }

}
function UploadSeccess(filename, orgname) {  
	$("#pcbfile").val(filename);	
	$("#orgname").val(orgname);	
	 $.ajax({
        url: "/member/order/ajax.aspx?act=AddOrder",
        dataType: "json",
        type: "POST",
        data: $("#frmClac").serialize(),
        success:function(d) {
			  if(d.sucess == "True")
			  {
                   $.messager.alert('成功', d.msg, 'info');
                   window.location.href = "/member/default.aspx?url=order/order_list.aspx";
				  
			  }
			  else{
				  
                  $.messager.alert('失败', d.msg, 'error');
			  }
			
			}
             
        
    });
	
	
	
	//$.post("/member/order/ajax.aspx?act=AddOrder", { pcbfile: filename, orgname: orgname }, OrderCallBack); 
 }
function setLoginHeight(h) {
    loginBox.height(h);
    $(".window-shadow").height(h);
}
function logSucess() {
    $('#regbox').dialog('close'); isLogin = true;
    $("#btnUploadPcb").click();
}
function regSucess() {
    $('#regbox').dialog('close'); isLogin = true;
    $("#btnUploadPcb").click();
}
 
function RestPrice() {
    _isClac = false;
    $("#expressMoney").html("￥ 0"); //总费
    var priceArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    //快递价格
    $("#trExpressMoney td").each(function(index, obj) {
        $(obj).html(priceArray[index]);
    });
    $("#netMoney").html("￥ 0"); //总费
    $("#trNetMoney td").each(function(index, obj) {
        $(obj).html(priceArray[index]);
    });
}
// 通过控制top ，来显示不同的幻灯片
function showImg(index) {
    var adHeight = $(".ad").height();
    $(".slider").stop(true, false).animate({ top: -adHeight * index }, 300);
    $(".num li").removeClass("cur").eq(index).addClass("cur");
}
function SelectNum() {
    var width = parseFloat($("#hidWidth").val());
    var length = parseFloat($("#hidLength").val());
    if (isNaN(width) || isNaN(length) || width == 0 || length == 0) {
        $.messager.alert('提示', '填先写板子长度和宽度，并必须为大于0的数值!', 'show');
        $("#hidNum").blur();
        return false;
    }
    $("#divSelectNum").show();
    $('#divSelectNum').dialog({
        title: '选择数量',
        width: 500,
        height: 250,
        closed: false,
        cache: false,
        modal: true
    });
}
function SetNum() {
    var width = parseFloat($("#hidWidth").val());
    var length = parseFloat($("#hidLength").val());
    var num = $("#hidNum").val();
    if (parseInt($("#txtSelNum").val()) > 0) {
        num = parseInt($("#txtSelNum").val());
        if (CalcSquare(width, length, num) < 5) {
            $.messager.alert('提示', '当板子的面积大于5平方的时候才能手动输入数量!', 'show');
        }
        else {
            $("#hidNum").val(num); $("#hidNum").blur(); $("#divSelectNum").dialog("close");
        }
    } else { $("#divSelectNum").dialog("close"); }
	ClacPrice();
}
function SetBoardThickness(){
		var selVal = $(":radio[name='radBoardThickness'][checked]").val();
         if(selVal=="0.4"||selVal=="0.6"||selVal=="0.8") {	
		 	$("input[name='radCopperThickness'][value='1/1oz']").attr("checked", true);	 
	    	$("input[name='radCopperThickness'][value='2/2oz']").attr("disabled", true);	 
		 }
		 else {
			$("input[name='radCopperThickness'][value='2/2oz']").attr("disabled", false);	 
	     }
	}

function SetTest()
{
	var selVal = $(":radio[name=hidLayers][checked]").val();
	   if(selVal=="4"||selVal=="6")
	   {
		  $("input[name='radTestType'][value='全部测试(样板免费)']").attr("checked", true);
		  $("input[name='radTestType'][value='不测试']").attr("disabled", true);  
	   }
	   else { 
		  $("input[name='radTestType'][value='不测试']").attr("disabled", false);
	   }   
	   
	      
	   if(selVal=="6")
	   {
		   	$("input[name='radBoardThickness'][value='0.4']").attr("disabled", true);
			$("input[name='radBoardThickness'][value='0.6']").attr("disabled", true);
			$("input[name='radBoardThickness'][value='1.6']").attr("checked", true);
	   }
	  else if(selVal=="4")
	   {
			$("input[name='radBoardThickness'][value='0.4']").attr("disabled", true);
			$("input[name='radBoardThickness'][value='0.6']").attr("disabled", false);
			$("input[name='radBoardThickness'][value='1.6']").attr("checked", true);
	   }
	  
	  else {
			$("input[name='radBoardThickness'][value='0.4']").attr("disabled", false);	
			$("input[name='radBoardThickness'][value='0.6']").attr("disabled", false);	

	    }
		SetBoardThickness();
	   
}
function CheckWH(obj)
{
	 if(parseFloat(obj.val())>120){
		   $.messager.alert('提示', '我司可生产最大长度为120cm,请重新输入!', 'show');
		   obj.val(""); 
		
		}
}
 
$(document).ready(function() {    
 
	var allStr='<option value="1">样板24小时加急</option><option value="2">样板48小时加急</option><option value="2">多层板48小时加急</option><option value="3">多层板72小时加急</option><option value="4">多层板96小时加急</option><option value="3">正常3-4天(样板)</option><option value="4">正常4-5天(样板)</option><option value="5">正常5-6天(样板)</option><option value="6">正常6-7天(小批量)</option><option value="7">正常7-8天(小批量)</option><option value="8">正常8-10天(小批量)</option>';
 
	
	$("#radDeliveryDays").append(allStr); //默
    $('input[name="hidLayers"]').click(function() { SetDeliveryDays(0);SetTest(); });
	$(":radio[name='radBoardThickness']").click(SetBoardThickness);

    $("#hidNum").blur(function() { SetSelVal(); });
    $("#hidNum,#hidWidth,#hidLength").change(function() { SetSelVal(); });
	$("#hidWidth,#hidLength").change(function() { CheckWH($(this)); });
    $("#btnUploadPcb").click(function() {
        if (!_isClac) {
            $.messager.alert('提示', '请先填写好表单计算价格后再上传pcb!', 'show');
            return false;
        }
        ClacPrice(SaveOrder);
    });
    $(":radio[name=countNumer]").click(function() { $("#hidNum").val($(this).val()); ClacPrice(); $("#hidNum").blur(); $("#txtSelNum").val(""); });
    $("#frmClac input,#frmClac select").change(function() { ClacPrice(); });

    /**图片轮换**/
    var len = $(".num > li").length;
    var index = 0;
    var adTimer;
    $(".num li").mouseover(function() {
        index = $(".num li").index(this);
        showImg(index);
    }).eq(0).mouseover();
    //滑入 停止动画，滑出开始动画.
    $('.ad').hover(function() {
        clearInterval(adTimer);
    }, function() {
        adTimer = setInterval(function() {
            showImg(index)
            index++;
            if (index == len) { index = 0; }
        }, 3000);
    }).trigger("mouseleave");
});