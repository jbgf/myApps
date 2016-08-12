var AutoPlayObj = null;
var MoveTimeObj;

var Speed = 5; //速度(毫秒)
var Space = 10; //每次移动(px)
var PageWidth = 793; //翻页宽度
var fill = 0; //整体移位
var MoveLock = false;

var Comp = 0;
$(function(){
    /***中间图片滚动***/
   
    GetObj("List2").innerHTML = GetObj("List1").innerHTML;
    GetObj('ISL_Cont').scrollLeft = fill;
    GetObj("ISL_Cont").onmouseover = function() { clearInterval(AutoPlayObj); }
    GetObj("ISL_Cont").onmouseout = function() { AutoPlay(); }
    AutoPlay();
});

function GetObj(objName) { if (document.getElementById) { return eval('document.getElementById("' + objName + '")') } else { return eval('document.all.' + objName) } }
function AutoPlay() { //自动滚动
   clearInterval(AutoPlayObj);
    AutoPlayObj = setInterval('ISL_GoDown();ISL_StopDown();', 5000); //间隔时间

}
function ISL_GoUp() { //上翻开始
    if (MoveLock) return;
    clearInterval(AutoPlayObj);
    MoveLock = true;
    MoveTimeObj = setInterval('ISL_ScrUp();', Speed);
}
function ISL_StopUp() { //上翻停止
    clearInterval(MoveTimeObj);
    if (GetObj('ISL_Cont').scrollLeft % PageWidth - fill != 0) {
        Comp = fill - (GetObj('ISL_Cont').scrollLeft % PageWidth);
        CompScr();
    } else {
        MoveLock = false;
    }
    AutoPlay();
}
function ISL_ScrUp() { //上翻动作
    if (GetObj('ISL_Cont').scrollLeft <= 0) { GetObj('ISL_Cont').scrollLeft = GetObj('ISL_Cont').scrollLeft + GetObj('List1').offsetWidth }
    GetObj('ISL_Cont').scrollLeft -= Space;
}
function ISL_GoDown() { //下翻
    clearInterval(MoveTimeObj);
    if (MoveLock) return;
    clearInterval(AutoPlayObj);
    MoveLock = true;
    ISL_ScrDown();
    MoveTimeObj = setInterval('ISL_ScrDown()', Speed);
}
function ISL_StopDown() { //下翻停止
    clearInterval(MoveTimeObj);
    if (GetObj('ISL_Cont').scrollLeft % PageWidth - fill != 0) {
        Comp = PageWidth - GetObj('ISL_Cont').scrollLeft % PageWidth + fill;
        CompScr();
    } else {
        MoveLock = false;
    }
    AutoPlay();
}
function ISL_ScrDown() { //下翻动作
    if (GetObj('ISL_Cont').scrollLeft >= GetObj('List1').scrollWidth) { GetObj('ISL_Cont').scrollLeft = GetObj('ISL_Cont').scrollLeft - GetObj('List1').scrollWidth; }
    GetObj('ISL_Cont').scrollLeft += Space;
}
function CompScr() {
    var num;
    if (Comp == 0) { MoveLock = false; return; }
    if (Comp < 0) { //上翻
        if (Comp < -Space) {
            Comp += Space;
            num = Space;
        } else {
            num = -Comp;
            Comp = 0;
        }
        GetObj('ISL_Cont').scrollLeft -= num;
        setTimeout('CompScr()', Speed);
    } else { //下翻
        if (Comp > Space) {
            Comp -= Space;
            num = Space;
        } else {
            num = Comp;
            Comp = 0;
        }
        GetObj('ISL_Cont').scrollLeft += num;
        setTimeout('CompScr()', Speed);
    }
}


function CheckLogin(form){
   if(form.username.value==""){
      alert("请填写您的客户编号或手机号码!");
      form.username.focus();
	  return false;
   }
   if(form.password.value==""){
      alert("请填写登录密码！");
	  form.password.focus();
	  return false;
   
   }
  return true;
}


function CheckProForm(form){
   if(form.no.value==""||form.no.value=="请输入您的单号"){
      alert("请输入您要查询的订单号！");
	  form.no.focus();
	  return false;
   
   }

  return true;
}


$(document).ready(function() {
    $("#kw").focusin(function() {
        if ($.trim($(this).val()) == '请输入IC型号') { $(this).val(''); }
    }).focusout(function() {
        if ($.trim($(this).val()) == '请输入IC型号' || $.trim($(this).val()) == '') { $(this).val('请输入IC型号'); }
    });

    $("#no").focusin(function() {
        if ($.trim($(this).val()) == '请输入您的单号') { $(this).val(''); }
    }).focusout(function() {
        if ($.trim($(this).val()) == '请输入您的单号' || $.trim($(this).val()) == '') { $(this).val('请输入您的单号'); }
    });
});

/***banner图滚动***/
$(function() {
    (function() {
        var curr = 0;
        $("#jsNav .trigger").each(function(i) {
            $(this).click(function() {
                curr = i;
                $("#banner a").eq(i).fadeIn("slow").siblings("a").hide();
                $(this).siblings(".trigger").removeClass("imgSelected").end().addClass("imgSelected");
                return false;
            });
        });
        var pg = function(flag) {
            //flag:true表示前翻， false表示后翻
            if (flag) {
                if (curr == 0) {
                    todo = 5;
                } else {
                    todo = (curr - 1) % 5;
                }
            } else {
                todo = (curr + 1) % 5;
            }
            $("#jsNav .trigger").eq(todo).click();
        };
        //自动翻
        var timer = setInterval(function() {
            todo = (curr + 1) % 5;
            $("#jsNav .trigger").eq(todo).click();
        }, 4000);

        //鼠标悬停在触发器上时停止自动翻
        $("#jsNav a").hover(function() {
            clearInterval(timer);
        },
		function() {
		    timer = setInterval(function() {
		        todo = (curr + 1) % 5;
		        $("#jsNav .trigger").eq(todo).click();
		    }, 4000);
		}
		);
    })();
});

/****问答滚动****/
var $1 = function(d) {
    typeof d == "string" && (d = document.getElementById(d));
    return $1.fn.call(d);
};
$1.fn = function() {//附加2个方法
    this.$1ADD = function(fn) { CLS.add(this, fn) };
    this.addEvent = function(sEventType, fnHandler) {
        if (this.addEventListener) { this.addEventListener(sEventType, fnHandler, false); }
        else if (this.attachEvent) { this.attachEvent("on" + sEventType, fnHandler); }
        else { this["on" + sEventType] = fnHandler; }
    }
    this.removeEvent = function(sEventType, fnHandler) {
        if (this.removeEventListener) { this.removeEventListener(sEventType, fnHandler, false); }
        else if (this.detachEvent) { this.detachEvent("on" + sEventType, fnHandler); }
        else { this["on" + sEventType] = null; }
    }
    return this;
};
var Class = { create: function() { return function() { this.initialize.apply(this, arguments); } } };
var Bind = function(obj, fun, arr) { return function() { return fun.apply(obj, arr); } }
var Marquee = Class.create();
Marquee.prototype = {
    initialize: function(id, name, out, speed) {
        this.name = name;
        this.box = $1(id);
        this.out = out;
        this.speed = speed;
        this.d = 1;
        this.box.style.position = "relative";
        this.box.scrollTop = 0;
        var _li = this.box.firstChild;
        while (typeof (_li.tagName) == "undefined") _li = _li.nextSibling;
        this.lis = this.box.getElementsByTagName(_li.tagName);
        this.len = this.lis.length;
        for (var i = 0; i < this.lis.length; i++) {//计算该复制多少节点，保证无缝滚动，没必要的就不复制
            var __li = document.createElement(_li.tagName);
            __li.innerHTML = this.lis[i].innerHTML;
            this.box.appendChild(__li);
            if (this.lis[i].offsetTop >= this.box.offsetHeight) break;
        }
        this.Start();
        this.box.addEvent("mouseover", Bind(this, function() { clearTimeout(this.timeout); }, []));
        this.box.addEvent("mouseout", Bind(this, this.Start, []));
    },
    Start: function() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.name + ".Up()", this.out * 5000)
    },
    Up: function() {
        clearInterval(this.interval);
        this.interval = setInterval(this.name + ".Fun()", 10);
    },
    Fun: function() {
        this.box.scrollTop += this.speed;
        if (this.lis[this.d].offsetTop <= this.box.scrollTop) {
            clearInterval(this.interval);
            this.box.scrollTop = this.lis[this.d].offsetTop;
            this.Start();
            this.d++;
        }
        if (this.d >= this.len + 1) {
            this.d = 1;
            this.box.scrollTop = 0;
        }
    }
};
$1(window).addEvent("load", function() {
    marquee = new Marquee("nli_con", "marquee", 1, 2); //加载完后运行代码，
	marquee2 = new Marquee("nli_con2", "marquee2", 1, 2); //加载完后运行代码，
});
