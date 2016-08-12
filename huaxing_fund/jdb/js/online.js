// JavaScript Document


var online = {

    selectNumHtmlIsAdd: false,
    selectNumHtml: '<div class="boardnumber" id="boardnumber" >' +
							'<ul>' +
							'<li><input type="radio" value="5" name="countNumer"/>5</li>' +
							'<li><input type="radio" value="10" name="countNumer"/>10</li>' +
							'<li><input type="radio" value="15" name="countNumer"/>15</li>' +
							'<li><input type="radio" value="20" name="countNumer"/>20</li>' +
							'<li><input type="radio" value="25" name="countNumer"/>25</li>' +
							'<li><input type="radio" value="30" name="countNumer"/>30</li>' +
							'<li><input type="radio" value="40" name="countNumer"/>40</li>' +
							'<li><input type="radio" value="50" name="countNumer"/>50</li>' +
							'<li><input type="radio" value="75" name="countNumer"/>75</li>' +
							'<li><input type="radio" value="100" name="countNumer"/>100</li>' +
							'<li><input type="radio" value="125" name="countNumer"/>125</li>' +
							'<li><input type="radio" value="150" name="countNumer"/>150</li>' +
							'<li><input type="radio" value="200" name="countNumer"/>200</li>' +
							'<li><input type="radio" value="250" name="countNumer"/>250</li>' +
							'<li><input type="radio" value="300" name="countNumer"/>300</li>' +
							'<li><input type="radio" value="350" name="countNumer"/>350</li>' +
							'<li><input type="radio" value="400" name="countNumer"/>400</li>' +
							'<li><input type="radio" value="450" name="countNumer"/>450</li>' +
							'<li><input type="radio" value="500" name="countNumer"/>500</li>' +
							'<li><input type="radio" value="600" name="countNumer"/>600</li>' +
							'<li><input type="radio" value="700" name="countNumer"/>700</li>' +
							'<li><input type="radio" value="800" name="countNumer"/>800</li>' +
							'<li><input type="radio" value="900" name="countNumer"/>900</li>' +
							'<li><input type="radio" value="1000" name="countNumer"/>1000</li>' +
							'<li><input type="radio" value="1500" name="countNumer"/>1500</li>' +
							'<li><input type="radio" value="2000" name="countNumer"/>2000</li>' +
							'<li><input type="radio" value="2500" name="countNumer"/>2500</li>' +
							'<li><input type="radio" value="3000" name="countNumer"/>3000</li>' +
							'<li><input type="radio" value="3500" name="countNumer"/>3500</li>' +
							'<li><input type="radio" value="4000" name="countNumer"/>4000</li>' +
							'<li><input type="radio" value="4500" name="countNumer"/>4500</li>' +
							'<li><input type="radio" value="5000" name="countNumer"/>5000</li>' +
							'<li><input type="radio" value="5500" name="countNumer"/>5500</li>' +
							'<li><input type="radio" value="6000" name="countNumer"/>6000</li>' +
							'<li><input type="radio" value="6500" name="countNumer"/>6500</li>' +
							'<li><input type="radio" value="7000" name="countNumer"/>7000</li>' +
							'<li><input type="radio" value="7500" name="countNumer"/>7500</li>' +
							'<li><input type="radio" value="8000" name="countNumer"/>8000</li>' +
							'<li style="width: 200px;">其他数量：<input id="txtSelNum" name="txtSelNum" type="text" class="txtstyle2"></li>' +
							'</ul>' +
							'<div class="boardnumberbtn">' +
							'<a href="javascript:void(0)" onclick="online.SetInputNum()">' +
							'<input id="btn2" type="button" value="提交"></a><a href="javascript:void(0)" onclick="online.CloseSelectNumDiv();"><input id="btn3" type="button" value="取消"></a></div>' +
							'</div>',


    CloseSelectNumDiv: function () {
        $('#boardnumber').hide();

    },

    CalcOrderType: function (width, height, num) {
        if (num > 50 || (width * height * num / 10000) > 1) {
            return "小批量";;
        }
        return "样板";
    },
    CalcSquare: function (width, length, num) {
        return (parseFloat(width) * parseFloat(length) * parseInt(num) / 10000.0);
    },

    SetLineWeight: function () {
        var lineWeight = $(":radio[name=radLineWeight][checked]").val();
        var radVias = $(":radio[name=radVias][checked]").val();
        if (lineWeight == "5/5mil" || lineWeight == "4/4mil" || radVias == "0.25" || radVias == "0.2") {
            $("input[name='radCopperThickness'][value='1/1oz']").attr("checked", true);
            $("input[name='radCopperThickness'][value='2/2oz']").attr("disabled", true);
            $("input[name='radCopperThickness'][value='3/3oz']").attr("disabled", true);
        }
        else {

            $("input[name='radCopperThickness'][value='2/2oz']").attr("disabled", false);
            $("input[name='radCopperThickness'][value='3/3oz']").attr("disabled", false);

        }
        online.SetCopperCopperThickness();
    },

    SetColor: function () {
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
    },


    SetLayers: function () {
        var selVal = $(":radio[name=hidLayers][checked]").val();
        if (selVal == "4" || selVal == "6") {
            $("input[name='radTestType'][value='全部测试']").attr("checked", true);
            $("input[name='radTestType'][value='不测试']").attr("disabled", true);


        }
        else {
            $("input[name='radTestType'][value='不测试']").attr("disabled", false);
        }


        if (selVal == "6") {
            $("input[name='radBoardThickness'][value='0.4']").attr("disabled", true);
            $("input[name='radBoardThickness'][value='0.6']").attr("disabled", true);
            $("input[name='radBoardThickness'][value='2.4']").attr("disabled", true);
            $("input[name='radBoardThickness'][value='1.6']").attr("checked", true);
        }
        else if (selVal == "4") {
            $("input[name='radBoardThickness'][value='0.4']").attr("disabled", true);
            $("input[name='radBoardThickness'][value='0.6']").attr("disabled", false);
            $("input[name='radBoardThickness'][value='2.4']").attr("disabled", true);
            $("input[name='radBoardThickness'][value='1.6']").attr("checked", true);

        }
        else if (selVal == "8" || selVal == "10") {
            $("input[name='radBoardThickness'][value='0.4']").attr("disabled", true);
            $("input[name='radBoardThickness'][value='0.6']").attr("disabled", true);
            $("input[name='radBoardThickness'][value='0.8']").attr("disabled", true);
            $("input[name='radBoardThickness'][value='1.0']").attr("disabled", true);
            $("input[name='radBoardThickness'][value='1.2']").attr("disabled", false);
            $("input[name='radBoardThickness'][value='1.6']").attr("disabled", false);
            $("input[name='radBoardThickness'][value='2.0']").attr("disabled", false);
            $("input[name='radBoardThickness'][value='2.4']").attr("disabled", false);
            $("input[name='radBoardThickness'][value='1.6']").attr("checked", true);
            if (selVal == "10") {
                $("input[name='radBoardThickness'][value='1.2']").attr("disabled", true);
            }
        }

        else {
            $("input[name='radBoardThickness'][value='0.4']").attr("disabled", false);
            $("input[name='radBoardThickness'][value='0.6']").attr("disabled", false);
            $("input[name='radBoardThickness'][value='2.4']").attr("disabled", false);

        }
        online.SetBoardThickness();

    },
    SetCopperCopperThickness: function () {
        var selBoardThickness = $(":radio[name='radBoardThickness'][checked]").val();
        var selectLayer = parseInt($(":radio[name=hidLayers][checked]").val());

        var lineWeight = $(":radio[name=radLineWeight][checked]").val();
        var radVias = $(":radio[name=radVias][checked]").val();

        if (lineWeight == "5/5mil" || lineWeight == "4/4mil" || radVias == "0.25" || radVias == "0.2") {
            $("input[name='radCopperThickness'][value='1/1oz']").attr("checked", true);
            $("input[name='radCopperThickness'][value='2/2oz']").attr("disabled", true);
            $("input[name='radCopperThickness'][value='3/3oz']").attr("disabled", true);
        }
        else if (selectLayer <= 2 && (selBoardThickness == "2.0" || selBoardThickness == "2.4")) {
            $("input[name='radCopperThickness'][value='3/3oz']").attr("disabled", false);
        }
        else {
            $("input[name='radCopperThickness'][value='1/1oz']").attr("checked", true);
            $("input[name='radCopperThickness'][value='3/3oz']").attr("disabled", true);
        }
        if (lineWeight == "4/4mil" || radVias == "0.2") {
            $("input[name='radInsideThickness'][value='1']").attr("disabled", true);
            $("input[name='radInsideThickness'][value='1.5']").attr("disabled", true);
        }
        if (selectLayer <= 2 && selBoardThickness <= 0.8) {
            $("input[name='radCopperThickness'][value='2/2oz']").attr("disabled", true);

        }
        else {
            $("input[name='radCopperThickness'][value='2/2oz']").attr("disabled", false);

        }
        var selMaterial = $("#selMaterial").val();
        if (selMaterial.indexOf('铝基板') > -1) {
            $("input[name='radCopperThickness'][value='1/1oz']").attr("checked", true);
            $("input[name='radCopperThickness'][value='2/2oz']").attr("disabled", true);
            $("input[name='radCopperThickness'][value='3/3oz']").attr("disabled", true);
        }

        if (selectLayer == 6) {
            if (selBoardThickness >= 1.6 && selBoardThickness <= 2.0) {
                $("input[name='radCopperThickness'][value='2/2oz']").attr("disabled", false);
            }
            else {
                $("input[name='radCopperThickness'][value='2/2oz']").attr("disabled", true);
                $("input[name='radInsideThickness'][value='1.5']").attr("disabled", true);

            }
        }
        if (selectLayer == 4) {
            if (selBoardThickness >= 0.6 && selBoardThickness <= 0.8) {
                $("input[name='radCopperThickness'][value='2/2oz']").attr("disabled", true);
                $("input[name='radInsideThickness'][value='1.5']").attr("disabled", true);
            }
            else {
                $("input[name='radCopperThickness'][value='2/2oz']").attr("disabled", false);
            }
        }
    }
	,
    SetPlatingType: function () {
        var selVal = $(":radio[name='radBoardThickness'][checked]").val();
        if (selVal == "0.4") {
            $("input[name='radPlatingType'][value='沉金']").attr("checked", true);
            $("input[name='radPlatingType'][value='有铅喷锡']").attr("disabled", true);
            $("input[name='radPlatingType'][value='无铅喷锡']").attr("disabled", true);
        }
        else {
            $("input[name='radPlatingType'][value='有铅喷锡']").attr("disabled", false);
            $("input[name='radPlatingType'][value='无铅喷锡']").attr("disabled", false);

        }
    },

    SetBoardThickness: function () {
        var selVal = $(":radio[name='radBoardThickness'][checked]").val();
        var selectLayer = $(":radio[name=hidLayers][checked]").val();
        if (selVal == "0.4" || selVal == "0.6" || selVal == "0.8" || selVal == "2.4") {
            $("input[name='radCopperThickness'][value='1/1oz']").attr("checked", true);
            $("input[name='radCopperThickness'][value='2/2oz']").attr("disabled", true);
        }
        else {
            $("input[name='radCopperThickness'][value='2/2oz']").attr("disabled", false);
        }
        if (selectLayer == "4" && (selVal == "1.4" || selVal == "2.0")) {
            $("input[name='radCopperThickness'][value='1/1oz']").attr("checked", true);
            $("input[name='radCopperThickness'][value='2/2oz']").attr("disabled", true);
        }
        else {
            $("input[name='radCopperThickness'][value='2/2oz']").attr("disabled", false);
        }


        if ($("#spInsideThickness").size() > 0) {

            if (selectLayer == "4" || selectLayer == "6" || selectLayer == "8" || selectLayer == "10") {
                $("#spInsideThickness").show();
                if (selectLayer == "4" && (selVal == "1.6" || selVal == "2.0")) {
                    $("input[name='radCopperThickness'][value='1/1oz']").attr("checked", true);
                    $("input[name='radCopperThickness'][value='2/2oz']").attr("disabled", false);
                    $("input[name='radCopperThickness'][value='3/3oz']").attr("disabled", false);

                    $("input[name='radInsideThickness'][value='1']").attr("disabled", false);
                    $("input[name='radInsideThickness'][value='1']").attr("checked", true);
                    $("input[name='radInsideThickness'][value='1.5']").attr("disabled", false);
                }
                else if (selectLayer == "6" && (selVal == "1.6" || selVal == "2.0")) {
                    $("input[name='radCopperThickness'][value='1/1oz']").attr("checked", true);
                    $("input[name='radCopperThickness'][value='2/2oz']").attr("disabled", false);
                    $("input[name='radCopperThickness'][value='3/3oz']").attr("disabled", false);

                    $("input[name='radInsideThickness'][value='1']").attr("disabled", false);
                    $("input[name='radInsideThickness'][value='1']").attr("checked", true);
                    $("input[name='radInsideThickness'][value='1.5']").attr("disabled", true);
                }
                else {

                    $("input[name='radCopperThickness'][value='1/1oz']").attr("checked", true);
                    $("input[name='radCopperThickness'][value='2/2oz']").attr("disabled", true);

                    $("input[name='radInsideThickness'][value='1']").attr("disabled", false);
                    $("input[name='radInsideThickness'][value='1']").attr("checked", true);
                    $("input[name='radInsideThickness'][value='1.5']").attr("disabled", true);
                }
            }
            else {
                $("#spInsideThickness").hide();
                $("input[name='radInsideThickness'][value='1']").attr("disabled", true);
                $("input[name='radInsideThickness'][value='1.5']").attr("disabled", true);

            }
        }


        online.SetCopperCopperThickness();
        online.SetPlatingType();
        online.ExpressTip();


    },
    ExpressTip: function () {

        var selectExpress = $("#selExpressType").val();
        if (selectExpress != "广东省外") { $("#smartExpressTip").hide(); return; };
        $("#smartExpressTip").show();
        if ($("#smartExpressTip").size() == 0) return;
        var w = online.GetBoardWidth();
        var h = online.GetBoardHeight();
        var n = parseInt($("#hidNum").val());
        var hd = parseFloat($(":radio[name=radBoardThickness][checked]").val());
        var weight = CalcWeight(w, h, n, hd).toFixed(1);
        if (isNaN(weight)) return;
        if (weight < 0.5) weight = 0.5;
        var expressName = weight > 10 ? "德邦物流" : "顺丰快递";
        $("#smartExpressTip").html("提示:此单重量约为:" + weight + "Kg, 建议使用" + expressName + ",费用请向" + expressName + "咨询");

    },
    MaterialChange: function () {
        var selMaterial = $("#selMaterial").val();
        var selectLayer = $(":radio[name=hidLayers][checked]").val();
        if (selMaterial.indexOf('铝基板') > -1 && selectLayer != 1) {
            $.messager.alert('提示', '铝基板只能选择单面板!!!', 'show');
            $("#selMaterial").val("FR-4")
            return false;
        }
        if (selMaterial.indexOf('铝基板') > -1) {

            $("input[name='radBoardThickness'][value='0.4']").attr("disabled", true);
            $("input[name='radBoardThickness'][value='0.6']").attr("disabled", true);
            // $("input[name='radBoardThickness'][value='0.8']").attr("disabled", true);
            $("input[name='radBoardThickness'][value='2.4']").attr("disabled", true);
            $("input[name='radBoardThickness'][value='1.6']").attr("checked", true);

            $("input[name='radCopperThickness'][value='1/1oz']").attr("checked", true);
            $("input[name='radCopperThickness'][value='2/2oz']").attr("disabled", true);
            $("input[name='radCopperThickness'][value='3/3oz']").attr("disabled", true);


            $("input[name='radFontColor'][value='黑色']").attr("disabled", false);
            $("input[name='radFontColor'][value='黑色']").attr("checked", true);
            $("input[name='radSolderColor'][value='白色']").attr("disabled", false);
            $("input[name='radSolderColor'][value='白色']").attr("checked", true);
            online.SetDeliveryDays();
        }

    },

    SetDeliveryDays: function (type) {
        online.ExpressTip();
        $("#radDeliveryDays").empty();
        var selMaterial = $("#selMaterial").val();
        var width = parseFloat($("#hidWidth").val());
        var length = parseFloat($("#hidLength").val());
        var num = parseInt($("#hidNum").val());
        var m2 = online.CalcSquare(width, length, num);
        var layers = $("#hidLayers").size() >= 1 ? (parseInt($("#hidLayers").val())) : (parseInt($(":radio[name=hidLayers][checked]").val()));
        var bh = parseFloat($(":radio[name='radBoardThickness'][checked]").val());
        var px = $(":radio[name='radPlatingType'][checked]").val();
        var zh = $(":radio[name='radSolderColor'][checked]").val();
        var th = $(":radio[name='radCopperThickness'][checked]").val();
        var ft = $(":radio[name='radFontColor'][checked]").val();
        var xj = $(":radio[name='radLineWeight'][checked]").val();
        var gk = $(":radio[name='radVias'][checked]").val();
        var isLjb = false;
        if (type == 0 || !type) {
            var d = online.CalcOrderType(width, length, num); if (d == "小批量") { type = 2; } else { type = 1; };

            if (selMaterial == "铝基板1.3") {

                var cailiao = "铝基板(导热系数1.3)"; isLjb = true;


            }
            else if (selMaterial == "铝基板2.0") {

                var cailiao = "铝基板(导热系数2.0)"; isLjb = true;
            }
            else {
                var cailiao = (d != "小批量" ? "FR-4(建滔KB6160A) 玻璃化温度:TG130 耐焊值:288°C" : "FR-4(国纪 A级料)  玻璃化温度:TG130 耐焊值:288°C");
                if (layers > 2) {
                    cailiao = "多层板FR-4建滔KB6160A级料,高TG板材,玻璃化温度:TG150(核心原材料更优质,高品质更稳定)";
                }
            }


            $("#spCailiao").show();
            $("#spOrderType").html(d);
            $("#spCailiao").text(cailiao);
        }
        if (m2 >= 2) { $("input[name='radZhfg'][value='过孔塞油']").attr("disabled", false); } else { $("input[name='radZhfg'][value='过孔塞油']").attr("disabled", true); }


        if (type == 1) {//样板

            if (m2 >= 5 && m2 <= 10) {
                $("#radDeliveryDays").append("<option value=\"6\">正常6-7天(小批量)</option>");
                return;
            }
            else if (m2 > 10) {
                $("#radDeliveryDays").append("<option value=\"7\">正常7-8天（小批量）</option>");
                return;
            }


            //alert("xxx" + layers);
            if (layers == 4) {
                $("#radDeliveryDays").append("<option value=\"4\">正常4-5天（样板）</option><option value=\"2\">多层板48小时加急</option><option value=\"3\">多层板72小时加急</option>");
            }
            else if (layers == 6) {
                $("#radDeliveryDays").append("<option value=\"5\">正常5-6天（样板）</option><option value=\"3\">多层板72小时加急</option><option value=\"4\">多层板96小时加急</option>");
            }
            else if (layers == 8) {
                $("#radDeliveryDays").append("<option value=\"7\">正常7-8天（样板）");
            }
            else if (layers == 10) {
                $("#radDeliveryDays").append("<option value=\"9\">正常9-10天（样板）");
            }
            else {
                if (layers <= 2 && (bh >= 0.8 && bh <= 1.6) && (px == "无铅喷锡" || px == "有铅喷锡") && zh == "绿色" && th == "1/1oz" && !isLjb) {
                    $("#radDeliveryDays").append("<option value=\"2\">正常2-3天(样板)</option><option value=\"0.5\">样板12小时加急</option><option value=\"1\">样板24小时加急</option>");
                } else {

                    $("#radDeliveryDays").append("<option value=\"3\">正常3-4天(样板)</option><option value=\"0.5\">样板12小时加急</option><option value=\"1\">样板24小时加急</option><option value=\"2\">样板48小时加急</option>");
                }
            }
        }
        else if (type == 2) {	 //小批量




            if (layers == 1 || layers == 2) {

                if ((m2 < 2 && num <= 100) && bh == 1.6 && zh == "绿色" && ft == "白色" && (px == "无铅喷锡" || px == "有铅喷锡") && th == "1/1oz" && xj == "6/6mil" && gk == "0.3" && !isLjb) {
                    $("#radDeliveryDays").append("<option value=\"3\">正常3-4天(小批量)</option>");
                }
                else if (m2 < 5 && bh == 1.6 && zh == "绿色" && ft == "白色" && (px == "无铅喷锡" || px == "有铅喷锡") && th == "1/1oz" && xj == "6/6mil" && gk == "0.3") {
                    $("#radDeliveryDays").append("<option value=\"4\">正常4-5天(小批量)</option>");
                }
                else if ((bh >= 0.8 && bh <= 1.6) && (px == "无铅喷锡" || px == "有铅喷锡") && zh == "绿色" && th == "1/1oz" && m2 <= 2 && num <= 100) {
                    $("#radDeliveryDays").append("<option value=\"4\">正常4-5天(小批量)</option>");
                }
                else if ((bh >= 0.8 && bh <= 1.6) && (px == "无铅喷锡" || px == "有铅喷锡") && zh == "绿色" && th == "1/1oz" && m2 <= 3 && num <= 200) {
                    $("#radDeliveryDays").append("<option value=\"5\">正常5-6天(小批量)</option>");
                }
                else if (m2 < 5) {
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
            else if (layers == 4) {

                if (m2 < 5) {
                    $("#radDeliveryDays").append("<option value=\"6\">正常6-7天(小批量)</option>");
                }
                else if (m2 >= 5 && m2 <= 10) {
                    $("#radDeliveryDays").append("<option value=\"7\">正常7-8天(小批量)</option>");
                }
                else {
                    $("#radDeliveryDays").append("<option value=\"8\">正常8-10天(小批量)</option>");
                }
            }
            else if (layers == 8) {
                $("#radDeliveryDays").append("<option value=\"9\">正常9-10天（小批量）");
            }
            else if (layers == 10) {
                $("#radDeliveryDays").append("<option value=\"10\">正常10-12天（小批量）");
            }
            else {
                if (m2 < 5) {
                    $("#radDeliveryDays").append("<option value=\"7\">正常7-8天(小批量)</option>");
                }
                else {
                    $("#radDeliveryDays").append("<option value=\"8\">正常8-10天(小批量)</option>");
                }

            }


        }

    },

    SetInputNum: function () {
        var width = parseFloat($("#hidWidth").val());
        var length = parseFloat($("#hidLength").val());
        if (isNaN(width) || width <= 0) {
            $.messager.alert('提示', '请填写板子宽度!', 'show'); return false;
        }
        if (isNaN(width) || width <= 0) {
            $.messager.alert('提示', '请填写板子长度!', 'show'); return false;
        }
        var num = $("#hidNum").val();
        if (parseInt($("#txtSelNum").val()) > 0) {
            num = parseInt($("#txtSelNum").val());
            if (online.CalcSquare(width, length, num) < 5) {
                $.messager.alert('提示', '当板子的面积大于5平方的时候才能手动输入数量!', 'show');
            }
            else {
                $("#hidNum").val(num); $("#hidNum").blur(); online.CloseSelectNumDiv();
                online.SetDeliveryDays();
            }
        } else { online.CloseSelectNumDiv(); }

    },
    CheckWidHei: function (obj) {
        if (parseFloat(obj.val()) > 120) {
            $.messager.alert('提示', '我司可生产最大长度为120cm,单位为cm,请重新输入!', 'show');
            obj.val("");

        }

    },
    GetBoardWidth: function () {
        var width = parseFloat($("#hidWidth").val());
        var length = parseFloat($("#hidLength").val());
        return width;
    }
	,
    GetBoardHeight: function () {
        var length = parseFloat($("#hidLength").val());
        return length;
    }
	,
    SetAllDeliveryType: function () {

        var allDeliveryTypeStr = '<option value="0.5">样板12小时加急</option><option value="1">样板24小时加急</option><option value="2">样板48小时加急</option><option value="2">多层板48小时加急</option><option value="3">多层板72小时加急</option><option value="4">多层板96小时加急</option><option value="3">正常3-4天(样板)</option><option value="4">正常4-5天(样板)</option><option value="5">正常5-6天(样板)</option><option value="6">正常6-7天(小批量)</option><option value="7">正常7-8天(小批量)</option><option value="8">正常8-10天(小批量)</option>';

        $("#radDeliveryDays").empty().append(allDeliveryTypeStr);
    },


    Init: function () {

        $.extend($.fn.validatebox.defaults.rules, {
            num: {
                validator: function (value, param) {

                    return !isNaN(value) && value > 0;
                },
                message: '必须填写数值类型并大于0.'
            }
        });


        if (!online.selectNumHtmlIsAdd && $("#boardnumber").size() == 0) {

            $(online.selectNumHtml).hide().insertAfter($("#hidNum")); online.electNumHtmlIsAdd = true;

        }

        $(":radio[name='radSolderColor']").click(function () { online.SetColor(); online.SetDeliveryDays(0); });

        $(":radio[name='hidLayers']").click(function () { online.SetDeliveryDays(0); online.SetLayers(); });
        $(":radio[name='radBoardThickness']").click(function () { online.SetBoardThickness(); online.SetDeliveryDays(0); });
        $(":radio[name='radCopperThickness']").click(function () { online.SetDeliveryDays(0); });


        $(":radio[name='radLineWeight']").click(function () { online.SetLineWeight(); });
        $(":radio[name='radVias']").click(function () { online.SetLineWeight(); });
        $(":radio[name='hidBill']").click(function () { if ($(":radio[name='hidBill'][checked]").val() == "0") { return; } else { $.messager.alert('开票提示', '· 17%增值税票，收取10个点的税金<br>增值税票需要<font color="red">累积货款2000元以上</font>，在系统上点“通知开票”，我方会尽快安排开好并寄出，寄发票的快递费用由捷多邦支付。每月只允许开一次增票，开票公司为“深圳捷多邦科技有限公司”。<br>因增值税票需要走对公帐户，我司不接受：a.之前未要求开票，后面要补开发票的，b.要求快递代收存现作帐的，敬请理解！<br>· 增值税普通发票，收取8个点的税金<br><b><font color="red">普通发票必须是消费满500元累积开出，一个月开一次，不随货寄出</font></b>，快递运费由捷多邦支付。<b><font color="red">当批多个订单金额累积开出，不接受分几张发票开出</font></b>。<b><font color="red">（如果不能接受，请慎重下单，以免造成不必要的误会）</font></b>。<br>如果贵司是一般纳税人，建议您选择17%增值税票，我司增值税票可以进行17%税点的抵扣', 'show'); } });



        $(":radio[name='countNumer']").click(function () { $("#hidNum").val($(this).val()); $("#txtSelNum").val(""); online.CloseSelectNumDiv(); online.SetDeliveryDays(0); });
        $(":radio[name='radPlatingType']").click(function () { online.SetDeliveryDays(0); });

        $("#onlineForm").submit(function () {
            if ($("#onlineForm").form('validate')) {
                if ($("#selExpressName").val() == "") { $.messager.alert('提示', '请选择快递类型!', 'show'); return false; } return true;
            };
            return false;
        });
        $("#selMaterial").change(function () { online.MaterialChange(); });


        $(document).ready(function () {
            if (online.GetBoardWidth() > 0) {
                online.SetDeliveryDays(0);
                online.SetBoardThickness();
            }
            else {
                online.SetAllDeliveryType();
            }
            $("#selExpressType").change();

        })
    }
}

online.Init();



$("#hidNum").click(function () { $("#boardnumber").show(); });
$("#selExpressType").change(function () {
    $("#selExpressName").empty();
    var type = $(this).val();
    if (type == "广东省内") {
        $("#selExpressName").append('<option value="">请选择...</option><option value="联昊通">联昊通</option><option value="速尔快递">速尔快递</option><option value="顺丰到付">顺丰(运费到付)</option><option value="顺丰寄付">顺丰(运费寄付)</option>');
        $(":radio[name='address']").each(function () {
            $(this).attr("disabled", $(this).attr("provincename") != "广东");

        });
    }
    else if (type == "广东省外") {
        $("#selExpressName").append('<option value="">请选择...</option><option value="顺丰到付">顺丰(运费到付)</option><option value="顺丰寄付">顺丰(运费寄付)</option><option value="德邦物流">德邦物流(运费到付)</option>');
        if ($("#radDeliveryDays").size() > 0 && $("#radDeliveryDays").val().indexOf("加急") == -1 && (typeof isShowExpressTip != "undefined")) {
            $("#selExpressName").append('<option value="天天快递">天天快递(样板包邮)</option>');
        }
        $(":radio[name='address']").each(function () {
            $(this).attr("disabled", $(this).attr("provincename") == "广东");
        });

    }
    else { $("#selExpressName").append('<option value="">请选择...</option>'); }
    online.ExpressTip();
    if ($(":radio[name='address'][checked]").attr("disabled") == "disabled") {

        $(":radio[name='address'][checked]").attr("checked", false);
    }

});
$("#selExpressType").empty(); $("#selExpressName").empty();
$("#selExpressType").append('<option value="">请选择省份...</option><option value="广东省内">广东省内</option><option value="广东省外">广东省外</option>');
$("#selExpressName").append('<option value="">请选择...</option>');


$("#hidNum,#hidWidth,#hidLength").change(function () { online.SetDeliveryDays(); });
$("#hidLength,#hidWidth").change(function () { online.CheckWidHei($(this)); });
$("#radDeliveryDays").change(function () { var val = $("#radDeliveryDays").val(); if (val == "0.5") $.messager.alert('12小时加急提示', '上午11：00前下单付款的，交期为当天晚上23：00发货,下午17：30前下单付款的，交期为第二天上午12：00前发货,数量最多30片,如需自提，请提前联系业务专员!', 'show'); });
//online.SetDeliveryDays();



