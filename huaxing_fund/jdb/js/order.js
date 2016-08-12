function EnHtmlCode(str) {
    return str.replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

}



function GetColor(color) {
    switch (color) {

        case "绿色":
            return "<font color=\"green\">绿色</font>";
            break;
        case "红色":
            return "<font color=\"red\">红色</>";
            break;
        case "黄色":
            return "<font color=\"#FF6600\">黄色</>";
            break;
        case "蓝色":
            return "<font color=\"blue\">蓝色</>";
            break;
        case "白色":
            return "<font color=\"#999999\">白色</font>";
            break;
        case "黑色":
            return "黑色";
            break;
        case "无":
            return "无";
            break;
    }

}



function GetStatus(status) {
    if (status == 1) {
        return "<font color=\"blue\">待审核</font>";
    }
    else if (status == 2) {
        return "<font color=\"#666633\">审核中</>";
    }
    else if (status == 5) {
        return "<font color=\"#999999\">交易取消</font>";
    }
    else if (status == 6) {
        return "<font color=\"green\">已审核</font>";
    }
    else if (status >= 7 && status < 100) {
        return "已提交工厂生产";
    }
    else if (status == 100) {
        return "交易成功";
    }
    else {
        return "<font color=\"red\">状态出错</font>";
    }
}

function GetAdvancePaymentStr(status) {
    switch (status.toString()) {
        case "1":
            return "尚未审核";
            break;
        case "2":
            return "<font color=green>转帐成功</font>";
            break;
        case "3":
            return "<font color=red>转帐失败</font>";
            break;
    }
}


function GetOrderTypeStr(type) {
    switch (type.toString()) {
        case "1":
            return "样板";
            break;
        case "2":
            return "小批量";
            break;
    }
}
function GetBill(type) {
    switch (type.toString()) {

        case "0":
            return "不要发票";
        case "1":
            return "普通发票";
        case "2":
            return "增值税";
    }
}


function GetPayType(type) {
    switch (type.toString()) {
        case "0":
            return "等待支付";
        case "1":
            return "支付宝";
        case "2":
            return "财付通";
        case "3":
            return "快递代收";
        case "4":
            return "预付款支付";
        case "6":
            return "微信支付";
    }
}

function IsTrue(val, row, index) {
    return val ? "是" : "否";
}
function IsReorder(val, row, index) {
    switch (val.toString()) {
        case "0":
            return "新单";
        case "1":
            return "返单";
        case "2":
            return "补料单";
    }
}


function IsRelTrue(val, row, index) {
    return val ? "<font color=green>是</font>" : "<font color=red>否</font>";
}

var minData = "2000-01-01 00:00:00";
function IsMinTime(val, row, index) {

    return val == minData ? "" : val;
}


function GetDate(val, row, index) {
    var d = val.split(' ');
    if (d.length == 2) {
        return val == minData ? "" : d[0];
    }
    else {
        return val;
    }
}




function CalcOrderType(width, height, num) {
    if (num > 50 || (width * height * num / 10000) > 1) {
        return "小批量";
    }
    return "样板";
}

function CalcWeight(width, height, num, houdu) {
    var sq = (parseFloat(width) * parseFloat(height) * parseInt(num) / 10000.0);
    var weight = 0;
    switch (houdu) {
		 case 2.4:
            weight = sq * 5;
            break;
        case 2:
            weight = sq * 4.5;
            break;
        case 1.6:
            weight = sq * 3.5;
            break;
        case 1.2:
            weight = sq * 3;
            break;
        case 1:
            weight = sq * 2.6;
            break;
        case 0.8:
            weight = sq * 1.8;
            break;
        case 0.6:
            weight = sq * 1.4;
            break;
        case 0.4:
            weight = sq * 1;
            break;
    }
    return weight;
}
