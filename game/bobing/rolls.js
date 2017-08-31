var lastLeft = new Date();
var lastRight = new Date();
var shaking = false;
var stopNum = 0;
var ds, a1, a2, a3, a4, a5, a6;
var flag=0; //鍗氶ゼ鍒濆鐘舵€�
window.sounds = new Object();
var sound = new Audio(img_dir+'/bo.mp3');
var gamecoin = 0;
sound.load();
// 棣栧厛锛屽畾涔変竴涓憞鍔ㄧ殑闃€鍊�
var SHAKE_THRESHOLD = 800;
// 瀹氫箟涓€涓彉閲忎繚瀛樹笂娆℃洿鏂扮殑鏃堕棿
var last_update = 0;
// 绱ф帴鐫€瀹氫箟x銆亂銆亃璁板綍涓変釜杞寸殑鏁版嵁浠ュ強涓婁竴娆″嚭鍙戠殑鏃堕棿
var x;
var y;
var z;
var last_x;
var last_y;
var last_z;

function deviceMotionHandler(eventData) {
    var acceleration = eventData.accelerationIncludingGravity; 
    var curTime = new Date().getTime(); 
    var diffTime = curTime -last_update;
    if (diffTime > 100) {
        last_update = curTime; 

        x = acceleration.x; 
        y = acceleration.y; 
        z = acceleration.z; 

        var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000; 

        if (speed > SHAKE_THRESHOLD) { 
            begin_func();
        }

        last_x = x; 
        last_y = y; 
        last_z = z; 
    } 
}

window.onload = function() {
    window.scroll(0, 0);
    
    
    if (window.DeviceMotionEvent) {
        
        window.addEventListener('devicemotion', deviceMotionHandler, false);
    }
    
    gamecoin = parseInt($("#id_gamecoin").html());

    
}

function imghide() {

    var str = bbajax(app_dir+'/Index/startGame');
    //$("#txt").show();
    
    switch (str.status) {
        case '200':

            sound.play();
            $('.dice').show().addClass('active');
            ds = str.roll;
            a1 = ds.substr(0, 1);
            a2 = ds.substr(1, 1);
            a3 = ds.substr(2, 1);
            a4 = ds.substr(3, 1);
            a5 = ds.substr(4, 1);
            a6 = ds.substr(5, 1);
            $('.dice1').children('img').attr('src', img_dir+"/dian"+a1 +".png");
            $('.dice2').children('img').attr('src', img_dir+"/dian"+a2 +".png");
            $('.dice3').children('img').attr('src', img_dir+"/dian"+a3 +".png");
            $('.dice4').children('img').attr('src', img_dir+"/dian"+a4 +".png");
            $('.dice5').children('img').attr('src', img_dir+"/dian"+a5 +".png");
            $('.dice6').children('img').attr('src', img_dir+"/dian"+a6 +".png");
            //for (var i=0; i < 6; i++){
            //  $('.dice'+[i+1]).children('img').attr('src', '/images/bobingh5/common/dice'+resultArray[i]+'.png');
            //};
            //document.getElementById("rezult").innerHTML = "<img src='"+img_dir+"/dian"+a1+".png' id='p1' class='p_1' /> <img src='"+img_dir+"/dian"+a2+".png' id='p2' class='p_2' /> <img src='"+img_dir+"/dian"+a3+".png' class='p_3' /> <img src='"+img_dir+"/dian"+a4+".png' id='p4' class='p_4' /> <img src='"+img_dir+"/dian"+a5+".png' id='p5' class='p_5' /> <img src='"+img_dir+"/dian"+a6+".png' id='p6' class='p_6' />";
            

            addinfo(str);

            
            break;
        case '201':
            $("#txt").html("鎮ㄧ殑鍗氶ゼ娆℃暟宸茬粡鐢ㄥ畬锛�");
            break;
        case '204':
            $("#txt").html("鏈鍗氶ゼ娲诲姩宸茬粡缁撴潫锛�");
            break;
        default:
            $("#txt").html("鍑洪敊鍟�,璇烽噸璇曪紒");
            //window.location.reload();
            break;
    };
    $("#loading").hide();
    $("#rezult").show();
    $("#boyiba").attr("disabled", false);
    //$("#i_bg").attr("src","images/l"+arr[5]+".wav")
}


function addinfo(str) {

    
    setTimeout(diceReset, 1000);
    
    setTimeout(function(){
        $("#id_leftcount").html(str.times);
            
        $("#my_rank").html(str.my_rank);
        gamecoin += parseInt(str.score_each);
        var gchtml = document.getElementById("id_gamecoin");
        gchtml.innerHTML = gamecoin;
        $("#txt").show();
        $("#txt").html(str.word);
    }, 1500);
    
    //
    
    $("#wx_share_desc").val(str.wx_share_msg);
    shareFn();
    
    
    
}

function diceReset(){
    $('.dice').removeClass('active');
    
    flag=1;
    
}


var nowDate = 0, lastDate = 0;

function begin_func() {
        if(flag){
            flag=0;
            nowDate = new Date().getTime();
            //  alert(nowDate-lastDate);
            if (nowDate - lastDate < 1500) {
                lastDate = nowDate;
                return false;
            }
            
            var bbCount = parseInt($("#id_leftcount").html());
            if (bbCount > 0) {
                
                $("#txt").hide();
                $("#rezult").hide();
                $("#yaobin").hide();
                $("#loading").show();
                $("#boyiba").attr("disabled", true);
                
                setTimeout(imghide, 500);

            } else {
                $("#txt").show();
                $("#txt").html("鎮ㄤ粖鏃ョ殑娆℃暟宸茬敤灏�,璇锋槑澶╃户缁紒");
            }
        }
        
     
    

}

function addOne(){
    
    $('#mcover').show();
    
}

var jqresult;
function bbajax(url) {
    
    $.ajax({
        url : url,
        type : 'post',
        dataType : "json",
        async : false,
        error : function(ret, error) {
            //alert(ret.responseText);
        },
        success : function(ret) {

            if (!ret) {
                return;
            }
            jqresult = ret;
        }
    });

    return jqresult;
}

function aaajax(url) {

    $.ajax({
        url : url,
        type : 'post',
        dataType : "json",
        async : false,
        error : function(ret, error) {
            //alert(ret.responseText);
        },
        success : function(ret) {
            
            if (!ret) {
                return;
            }
            jqresult = ret;
        }
    });

    return jqresult;
}

function ccajax(url) {

    $.ajax({
        url : url,
        type : 'post',
        dataType : "json",
        data : {
            type : "addOne"
        },
        async : false,
        error : function(ret, error) {
            //alert(ret.responseText);
        },
        success : function(ret) {

            if (!ret) {
                return;
            }
            jqresult = ret;
        }
    });

    return jqresult;
}

function shareHide(){
    
    $("#shareImg").hide();
    
}
