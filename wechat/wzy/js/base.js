
    var _manage = false,
        m_debug = false, 
        _resRoot = '//hdg.faisys.com',
        hg = {};
    //错误监控
    (function(){var _faiAjax=function(){var r=/\?/;var _o={type:"get",url:"",data:"",error:function(){},success:function(){}};var _sendRequest=function(o){var xmlhttp=null;o.type=o.type||_o.type;o.url=o.url||_o.url;o.data=o.data||_o.data;o.error=o.error||_o.error;o.success=o.success||_o.success;if(window.XMLHttpRequest){xmlhttp=new XMLHttpRequest()}else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP")}if(o.type!="post"){o.url+=(this.r.test(o.url)?"&":"?")+o.data;xmlhttp.open("GET",o.url,true);xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4&&xmlhttp.status==200){o.success(xmlhttp.responseText)}else{if(o.error){o.error()}}};xmlhttp.send()}else{xmlhttp.open("POST",o.url,true);xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=UTF-8");xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4&&xmlhttp.status==200){o.success(xmlhttp.responseText)}else{o.error()}};xmlhttp.send(o.data)}};return{ajax:function(option){try{_sendRequest(option)}catch(e){}}}}();hg._faiAjax=_faiAjax;var _jsErrCahche=[];window.onerror=function(sMsg,sUrl,sLine){if(sLine<1||typeof sMsg!="string"||sMsg.length<1){return}if(/WeixinJSBridge|_WXJS/.test(sMsg)){return}var log="Error:"+sMsg+";Line:"+sLine+";Url:"+sUrl;var alertLog="Error:"+sMsg+"\n"+"Line:"+sLine+"\n"+"Url:"+sUrl+"\n";var encodeUrl=function(url){return typeof url==="undefined"?"":encodeURIComponent(url)};var ajax=true;var obj={"m":sMsg,"u":sUrl,"l":sLine};for(var i=0;i<_jsErrCahche.length;i++){if(_jsErrCahche[i].m==obj.m&&_jsErrCahche[i].u==obj.u&&_jsErrCahche[i].l==obj.l){ajax=false;break}}if(ajax){_jsErrCahche.push(obj);_faiAjax.ajax({type:"post",url:"//hd.faisco.cn/ajax/logJsErr_h.jsp?cmd=jsErr",data:"msg="+encodeUrl(log)})}if(m_debug){if(HdGame&&HdGame.tlog){HdGame.tlog(alertLog)}else{alert(alertLog)}}}})();
    /*
    hg.assets  : {
          complete
          loadComplete
          onReady
          onload
          loadPage
        }
    */
    function isArray(arr){
        return Object.prototype.toString.call(arr) === "[object Array]";
    }
    (function(hg){
        var imgPaths = [],
            readyCallBack = [],
            loadCallBack = [];
        hg.assets = {
            complete : false,
            loadComplete : false,
            increment : 10,
            loadingStyle : 1,
            loadTimeout : 120000,
            add : function(src){     
                var self = this;
                if(self.complete || _manage){
                    return;
                }
                if(isArray(src)){
                    for (var i = src.length - 1; i >= 0; i--) {
                        self.add(src[i]);
                    };
                }else if(typeof src === 'string'){
                    imgPaths.push(src);
                }
                return this;
            },
            onReady : function(callBack){
                var self = this;
                if(self.complete){
                    callBack();
                }else{
                    readyCallBack.push(callBack);
                }
                return self;
            },
            onload  : function(callBack){
                var self = this;
                if(self.loadComplete){
                    callBack();
                }else{
                    loadCallBack.push(callBack);
                }
                return self;
            },
            loadPage: function() {
                if (_manage) return;
                var self = this,
                    percent = 1,
                    numLoaded = 0,
                    $loadPercent = document.getElementById("loadPercent"),
                    loadPallet;
                window.scrollTo(0, 0);
                if (self.loadingStyle === 1) {

                    loadimg(imgPaths)
                } else if (self.loadingStyle === 3) {
                    var logoImg = document.getElementById("preloadImg");
                    if (logoImg.complete) {
                        initLogoImg()
                    } else {
                        logoImg.onload = initLogoImg
                    }
                    function initLogoImg(img) {
                        var img = logoImg;
                        var h = img.height;
                        var w = img.width;
                        var bottomPageInfoDeg = -Math.atan(w / h) - Math.PI / 2;
                        var canvas = document.getElementById("preloadCanvas");
                        var ctx = canvas.getContext("2d");
                        var ratio = (window.devicePixelRatio || 1) / (ctx.backingStorePixelRatio || ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1);
                        var drawImg = function() {
                                ctx.fillStyle = "#fff";
                                ctx.fillRect(0.2 * g_rem * ratio, 0.2 * g_rem * ratio, w * ratio, h * ratio);
                                ctx.drawImage(img, 0.2 * g_rem * ratio, 0.2 * g_rem * ratio, w * ratio, h * ratio)
                            };
                        if (h === w) {
                            if (h > 3.5 * g_rem) {
                                h = w = 3.5 * g_rem
                            }
                            drawImg = function() {
                                ctx.save();
                                ctx.beginPath();
                                ctx.arc(canvas.width / 2, canvas.height / 2, w / 2 * ratio, 0, 2 * Math.PI);
                                ctx.clip();
                                ctx.fillStyle = "#fff";
                                ctx.fill();
                                ctx.drawImage(img, 0.2 * g_rem * ratio, 0.2 * g_rem * ratio, w * ratio, h * ratio);
                                ctx.restore()
                            }
                        } else {
                            if (w > h && w > 8 * g_rem) {
                                h = 8 * g_rem * h / w;
                                w = 8 * g_rem
                            } else {
                                if (h > w && h > 8 * g_rem) {
                                    w = 8 * g_rem * w / h;
                                    h = 8 * g_rem
                                }
                            }
                        }
                        canvas.width = (w + 0.4 * g_rem) * ratio;
                        canvas.height = (h + 0.4 * g_rem) * ratio;
                        canvas.style.width = w + 0.4 * g_rem + "px";
                        canvas.style.height = h + 0.4 * g_rem + "px";
                        if (h === w) {
                            ctx.beginPath();
                            ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, 2 * Math.PI);
                            ctx.clip()
                        }
                        ctx.strokeStyle = "#69c5ff";
                        ctx.lineWidth = 8 * g_rem * ratio;
                        loadPallet = function(tmp) {
                            ctx.beginPath();
                            ctx.arc(canvas.width / 2, canvas.height / 2, 4 * g_rem * ratio, bottomPageInfoDeg, bottomPageInfoDeg + tmp * (2 * Math.PI / 100));
                            ctx.stroke();
                            drawImg()
                        };
                        loadimg(imgPaths)
                    }
                }
                function setPercent(percent) {
                    $loadPercent.innerHTML = percent;
                    if (percent === 100) {
                        var index = 0;
                        setTimeout(function() {
                            index++;
                            if (index < 10) {
                                loadPallet && loadPallet(120);
                                setTimeout(arguments.callee, 17)
                            } else {
                                loadPallet = null
                            }
                        }, 17)
                    }
                    loadPallet && loadPallet(percent)
                }
                function loading() {

                    if (numLoaded < imgPaths.length) {
                        if (percent < 100 - imgPaths.length + numLoaded) {
                            percent++;
                            setPercent(percent - 1)

                        }

                    } else {
                        percent += 10;
                        percent > 100 && (percent = 100);
                        setPercent(percent - 1)
                    }
                    if (percent >= 100 && typeof $ != 'undefined') {
                        setPercent(100);
                        var flag = $(window).height() / $(window).width() < 1.575;
                        var bgHeight = flag ? $(window).width() * 1.575 : $(window).height();
                        setTimeout(function() {
                            $("#preloadPage").addClass("leftClose");
                            $("#homeBgBox,.gameBgBox").css("height", bgHeight / g_rem + "rem");
                            flag && $(".home .bottomSkill,#bottomSkill").css("top", (bgHeight - $(".bottomSkill").outerHeight()) / g_rem + "rem");
                            setTimeout(function() {
                                $loadPercent = null;
                                $("#preloadPage").hide()
                            }, 500);
                            complete();
                            self.loadComplete = true;
                            for (var n = loadCallBack.length, i = 0; i < n; i++) {
                                loadCallBack[i]()
                            }
                            loadCallBack = null;
                            logoImg = null;
                            $loadPercent = null
                        }, 300);
                        return
                    }
                    setTimeout(arguments.callee, 10)
                }
                function loadimg(arr) {
                    loading();
                    for (var i = arr.length - 1; i >= 0; i--) {
                        var img = new Image();

                        img.onload = loadCheckComplete;
                        img.onerror = loadCheckComplete;
                        img.src = arr[i];
                        self[arr[i]] = img;

                    }
                    if (self.loadTimeout) {
                        self._loadTimer = setTimeout(loadTimeout, self.loadTimeout)
                    }
                }
                function loadTimeout() {}
                function loadCheckComplete() {
                    numLoaded++;
                    
                    this.assets_complete = true;
                    if (numLoaded === imgPaths.length) {
                        complete()
                    }
                }
                function complete() {
                    if (self.complete) return;
                    clearTimeout(self._loadTimer);
                    numLoaded = imgPaths.length;
                    self.complete = true;
                    for (var n = readyCallBack.length, i = 0; i < n; i++) {
                        readyCallBack[i]()
                    }
                    readyCallBack = null
                }
            }
        };
    })(hg);
    /*----------------------------可编辑元素包装------------------------------------*/
    hg.edit = null;
    
    hg.edit = {};
    //通过conf文件配置可编辑元素的属性
    (function(hg){
        var origin = [{"name":"paper","pos":{"left":"1.7rem","top":"4.35rem"},"size":{"width":"12.55rem","height":"16.4rem"},"path":["//hdg.faisys.com/image/wzytzs/paper.png"],"css":[{"opt":0,"val":"rgb(114, 73, 24)","defVal":"rgb(114, 73, 24)","tra":1,"defTra":1}]},{"name":"nextBtn","pos":{"left":"4.9rem","top":"21.05rem"},"size":{"width":"6rem","height":"2.25rem"},"path":[["//hdg.faisys.com/image/wzytzs/nextBtn.png"],["//hdg.faisys.com/image/wzytzs/checkBtn.png"]]}];
        var originDef = [{"name":"paper","pos":{"left":"1.7rem","top":"4.35rem"},"size":{"width":"12.55rem","height":"16.4rem"},"path":["*_resRoot*/image/wzytzs/paper.png","图片01","200k"],"edit":"paper,nextBtn,checkBtn","css":[{"type":"color","name":"color","from":"#txtContBox","opt":0,"val":"rgb(114, 73, 24)","defVal":"rgb(114, 73, 24)","tra":1,"defTra":1}]},{"name":"nextBtn","pos":{"left":"4.9rem","top":"21.05rem"},"size":{"width":"6rem","height":"2.25rem"},"path":[["*_resRoot*/image/wzytzs/nextBtn.png","图片02","100k"],["*_resRoot*/image/wzytzs/checkBtn.png","图片03","100k"]],"edit":"paper,nextBtn"}];
        var originMod = null;
        
        function correct(list1,list2){
            return list2.map(function(val2){
                return list1.filter(function(val1){return val1.name === val2.name;})[0] || val2;
            });
        }
        originMod = originMod ? correct(originMod,originDef) : originMod;
        origin = originMod ? correct(origin,originMod) : correct(origin,originDef);
        //将图片放进缓存数组内
        for(var i=0;i < originDef.length;i++){
            var path = origin[i].path;
            var pathDef = originMod ? originMod[i].path : originDef[i].path;
            if(pathDef){
                if(!path){
                    origin[i].path = path = pathDef;
                }else if(!isArray(path[0]) && isArray(pathDef[0])){
                    origin[i].path = path = [].concat(pathDef).splice(0,1,path);
                }
                if(isArray(path[0])){
                    for(var j=0;j < pathDef.length;j++){
                        if(!path[j]) path[j] = pathDef[j];
                        if(!path[j][0]) path[j][0] = pathDef[j][0];
                        hg.assets.add(path[j][0].replace('*_resRoot*',_resRoot));
                    }
                }else{
                    if(!path[0]) path[0] = pathDef[0];
                    hg.assets.add(path[0].replace('*_resRoot*',_resRoot));
                }
            }
        }
        if(false && origin[1].path[0] == _resRoot + "/image/tgcm/answer.png"){
            origin[1].path[0] = [_resRoot + "/image/tgcm/drag.png"];
        }
        hg.edit.origin = origin;
        hg.edit.originDef = originDef;
        hg.edit.originMod = originMod;
    })(hg);
    
    /*-----------------------资源loading-----------------------------*/
    //存放所有loading好的image对象,src为key
    hg.assets.add([
        "img/ruleImg_special.png",
        "img/homeBg.png",
        "//hdg.faisys.com/image/logo.jpg",
        "//hdg.faisys.com/image/ruleImg.png",
        "//hdg.faisys.com/image/success.png",
        "//hdg.faisys.com/image/light.png",
        "//hdg.faisys.com/image/bird.png",
        "//hdg.faisys.com/image/musicOff.png",
        "//hdg.faisys.com/image/musicOn.png",
        "//hdg.faisys.com/image/auBg.jpg",
        "http://wx.qlogo.cn/mmopen/ajNVdqHZLLDXebVxqmbF5CvwDrzYL7NJCRtIKKc3CtE4l3BWiblQkY9OjTIX4ia2dExGgAKMMzhglmvT4L7lHeiaQ/0",
    
        "//hdg.faisys.com/image/wzytzs/title.png?v=201509051300",
        "img/startBtn.png",
        "//hdg.faisys.com/image/wzytzs/gameBg.png?v=201509081300",
        "//hdg.faisys.com/image/lots1.png",
        "//hdg.faisys.com/image/lots2.png",
    
        '//hdg.faisys.com/image/faiImg.png?v=201509171041',
    
    ]);
    loadGamePreAssets();
    hg.assets.loadPage();//开始loading页面
    //全局变量
    var g_config = {"showSkillSup":true,"showSlide":false,"showMenu":true,"buy":false,"isNewGame":false,"isModel":false,"test":false,"isOem":false,"scoreType":false,"countsTimeType":0,"sortType":0,"drawLimitDef":60,"scoreSet":60,"style":42,"aid":11957983,"gameId":2,"openId":"o1ueSjorrC3xUjCq8E6tOqM6J1vM","playerId":1,"userName":"王威","headImg":"http://wx.qlogo.cn/mmopen/ajNVdqHZLLDXebVxqmbF5CvwDrzYL7NJCRtIKKc3CtE4l3BWiblQkY9OjTIX4ia2dExGgAKMMzhglmvT4L7lHeiaQ/0","authVer":0,"failSrcId":51,"scoreUnit":"分","testCMD":"","ajaxUrl":"//hd.faisco.cn/ajax/","startTime":"2016-11-17 22:23","setGameTimeInterval":10,"isDoubleGame":false,"awardList":[{"level":1,"amount":0,"awardtype":2,"cashtype":2,"attention":1,"cashsite":"请填写您的兑奖地址或者门店地址","pot":0,"style":"一等奖","t_type":"DATE_TYPE_FIX_TIME_RANGE","cbt":1479312000000,"cet":1480003199000,"cft":30,"cfbt":0,"tlmt":"[8]","ocimg":false,"opqrc":true,"optx":false,"oct":false,"oplink":false,"genewxcard":false,"iscuscode":false,"stl":"","opti":"凭券联系现场工作人员兑奖","btn":"了解更多","btl":"","servicepho":"","cashinfo":"","aimg":"//hdg.faisys.com/image/gift.png?v=201601141500","aimgw":"6rem","aimgh":"6rem","attentionimg":"","onlinect":1,"continfo":0,"usedAmount":0,"name":"价值100元礼品","onlinewxnum":""},{"level":2,"amount":0,"awardtype":2,"cashtype":2,"attention":1,"cashsite":"请填写您的兑奖地址或者门店地址","pot":0,"style":"二等奖","t_type":"DATE_TYPE_FIX_TIME_RANGE","cbt":1479312000000,"cet":1480003199000,"cft":30,"cfbt":0,"tlmt":"[8]","ocimg":false,"opqrc":true,"optx":false,"oct":false,"oplink":false,"genewxcard":false,"iscuscode":false,"stl":"","opti":"凭券联系现场工作人员兑奖","btn":"了解更多","btl":"","servicepho":"","cashinfo":"","aimg":"//hdg.faisys.com/image/gift.png?v=201601141500","aimgw":"6rem","aimgh":"6rem","attentionimg":"","onlinect":1,"continfo":0,"usedAmount":0,"name":"价值50元礼品","onlinewxnum":""},{"level":3,"amount":0,"awardtype":2,"cashtype":2,"attention":1,"cashsite":"请填写您的兑奖地址或者门店地址","pot":0,"style":"三等奖","t_type":"DATE_TYPE_FIX_TIME_RANGE","cbt":1479312000000,"cet":1480003199000,"cft":30,"cfbt":0,"tlmt":"[8]","ocimg":false,"opqrc":true,"optx":false,"oct":false,"oplink":false,"genewxcard":false,"iscuscode":false,"stl":"","opti":"凭券联系现场工作人员兑奖","btn":"了解更多","btl":"","servicepho":"","cashinfo":"","aimg":"//hdg.faisys.com/image/gift.png?v=201601141500","aimgw":"6rem","aimgh":"6rem","attentionimg":"","onlinect":1,"continfo":0,"usedAmount":0,"name":"价值10元礼品","onlinewxnum":""},{"level":4,"amount":0,"awardtype":2,"cashtype":2,"attention":1,"cashsite":"请填写您的兑奖地址或者门店地址","pot":0,"style":"四等奖","t_type":"DATE_TYPE_FIX_TIME_RANGE","cbt":1479312000000,"cet":1480003199000,"cft":30,"cfbt":0,"tlmt":"[8]","ocimg":false,"opqrc":true,"optx":false,"oct":false,"oplink":false,"genewxcard":false,"iscuscode":false,"stl":"","opti":"凭券联系现场工作人员兑奖","btn":"了解更多","btl":"","servicepho":"","cashinfo":"","aimg":"//hdg.faisys.com/image/gift.png?v=201601141500","aimgw":"6rem","aimgh":"6rem","attentionimg":"","onlinect":1,"continfo":0,"usedAmount":0,"name":"价值5元小礼品","onlinewxnum":""},{"level":5,"amount":0,"awardtype":2,"cashtype":2,"attention":1,"cashsite":"请填写您的兑奖地址或者门店地址","pot":0,"style":"五等奖","t_type":"DATE_TYPE_FIX_TIME_RANGE","cbt":1479312000000,"cet":1480003199000,"cft":30,"cfbt":0,"tlmt":"[8]","ocimg":false,"opqrc":true,"optx":false,"oct":false,"oplink":false,"genewxcard":false,"iscuscode":false,"stl":"","opti":"凭券联系现场工作人员兑奖","btn":"了解更多","btl":"","servicepho":"","cashinfo":"","aimg":"//hdg.faisys.com/image/gift.png?v=201601141500","aimgw":"6rem","aimgh":"6rem","attentionimg":"","onlinect":1,"continfo":0,"usedAmount":0,"name":"价值5元小礼品","onlinewxnum":""},{"level":6,"amount":0,"awardtype":2,"cashtype":2,"attention":1,"cashsite":"请填写您的兑奖地址或者门店地址","pot":0,"style":"六等奖","t_type":"DATE_TYPE_FIX_TIME_RANGE","cbt":1479312000000,"cet":1480003199000,"cft":30,"cfbt":0,"tlmt":"[8]","ocimg":false,"opqrc":true,"optx":false,"oct":false,"oplink":false,"genewxcard":false,"iscuscode":false,"stl":"","opti":"凭券联系现场工作人员兑奖","btn":"了解更多","btl":"","servicepho":"","cashinfo":"","aimg":"//hdg.faisys.com/image/gift.png?v=201601141500","aimgw":"6rem","aimgh":"6rem","attentionimg":"","onlinect":1,"continfo":0,"usedAmount":0,"name":"价值5元小礼品","onlinewxnum":""},{"level":7,"amount":0,"awardtype":2,"cashtype":2,"attention":1,"cashsite":"请填写您的兑奖地址或者门店地址","pot":0,"style":"七等奖","t_type":"DATE_TYPE_FIX_TIME_RANGE","cbt":1479312000000,"cet":1480003199000,"cft":30,"cfbt":0,"tlmt":"[8]","ocimg":false,"opqrc":true,"optx":false,"oct":false,"oplink":false,"genewxcard":false,"iscuscode":false,"stl":"","opti":"凭券联系现场工作人员兑奖","btn":"了解更多","btl":"","servicepho":"","cashinfo":"","aimg":"//hdg.faisys.com/image/gift.png?v=201601141500","aimgw":"6rem","aimgh":"6rem","attentionimg":"","onlinect":1,"continfo":0,"usedAmount":0,"name":"价值5元小礼品","onlinewxnum":""},{"level":8,"amount":0,"awardtype":2,"cashtype":2,"attention":1,"cashsite":"请填写您的兑奖地址或者门店地址","pot":0,"style":"八等奖","t_type":"DATE_TYPE_FIX_TIME_RANGE","cbt":1479312000000,"cet":1480003199000,"cft":30,"cfbt":0,"tlmt":"[8]","ocimg":false,"opqrc":true,"optx":false,"oct":false,"oplink":false,"genewxcard":false,"iscuscode":false,"stl":"","opti":"凭券联系现场工作人员兑奖","btn":"了解更多","btl":"","servicepho":"","cashinfo":"","aimg":"//hdg.faisys.com/image/gift.png?v=201601141500","aimgw":"6rem","aimgh":"6rem","attentionimg":"","onlinect":1,"continfo":0,"usedAmount":0,"name":"价值5元小礼品","onlinewxnum":""}],"comfort":{"ca":"价值5元小礼品","cas":"安慰奖","cc":119579832,"comAwardtype":2,"comcashtype":2,"conlinect":1,"comcashsite":"请填写您的兑奖地址或者门店地址","ccc":"","cttype":"DATE_TYPE_FIX_TIME_RANGE","comcbt":1479312000000,"comcet":1480003199000,"comft":30,"comfbt":0,"ctlmt":"[8]","comstl":"","comopti":"凭券联系现场工作人员兑奖","comoci":false,"comOpqrc":true,"comoptx":false,"comoct":false,"comOplink":false,"comiscuscode":false,"combtn":"了解更多","combtl":"","comservicephone":"","comcashinfo":"","comimg":"//hdg.faisys.com/image/gift.png?v=201601141500","comimgw":"6rem","comimgh":"6rem","comattentionimg":"","comcontinfo":0,"comusedamount":0,"comattention":1,"conlinewxnum":""},"isRegUserName":false,"isRegPhone":false,"isRegAddress":false,"awardInfoB":"","openAwardLinkNoDraw":false,"awardUsername":"","awardPhone":"","status":2,"afterWxCard":true,"haveAward":false,"showHelpGuide":false,"ipInfo":{"ip":"120.35.4.185","contry":"中国","provice":"福建省","city":"福州市","area":"华东","isp":"电信"},"contactNoDraw":"[-1]","isAOpenId":1,"linkInfoType":1,"afterLinkModify":true};
    var HdVerDef = {
        FREE : 0,  //免费版
        BY : 1,  //白银版
        BJ : 2,  //铂金版
    };
