
    HdGame.wxConfigArg = {
        url : 'https://hd.faisco.cn/11957983/2/load.html?style=42'
    };
    (function(){
        if(false){
            return;
        }
        //判断该玩家是否已获取过礼物
        var arr=['一','二','三','四','五','六','七','八'];
        var haveAward = false;
        if(haveAward){        
            var itemInfo = {"id":1,"aid":11957983,"code":0,"name":"王威","awardLevel":0,"achievement":"20","gameId":2,"codeStatus":0,"info":"{\"headImg\":\"http://wx.qlogo.cn/mmopen/ajNVdqHZLLDXebVxqmbF5CvwDrzYL7NJCRtIKKc3CtE4l3BWiblQkY9OjTIX4ia2dExGgAKMMzhglmvT4L7lHeiaQ/0\"}","award":"","openId":"o1ueSjorrC3xUjCq8E6tOqM6J1vM","zlid":0,"flag":0,"openIdB":"","drawTotal":0,"codeList":"","jointime":1479392917000,"prop1":""};
            HdGame.currentAward = itemInfo.award;
            var awardLevel = itemInfo.awardLevel;
            if( awardLevel != 900 && awardLevel > 0 ){  
                if(true && 9 >= awardLevel){
                    var nameList = ["一等奖","二等奖","三等奖","四等奖","五等奖","六等奖","七等奖","八等奖","安慰奖"];          
                    HdGame.currentAwardStyle = nameList[awardLevel-1];
                }else{
                    HdGame.currentAwardStyle = arr[awardLevel-1];
                }
            }else{
                HdGame.currentAwardStyle = 'null';
            }    
        }
        //判断该玩家是否已有过排行榜
        var r = {"rank":1,"score":"20.00"};
          
        HdGame.currentRank=r.rank;
        HdGame.currentScore=r.score;
        setWxShareByStatus();

    })();
    
    wx.config({ 
          debug: false,
          appId: 'wx25367438c8ce0799',
          timestamp: 1479431680,
          nonceStr: 'a045d72c-2f4b-4a5e-ab6b-c84a3f85e85f',
          signature: '323abea2183a8aeebfbc94f9a49cc3321b07fd5e',
          jsApiList: [
            'checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'hideMenuItems',
            'showMenuItems',
            'hideAllNonBaseMenuItem',
            'showAllNonBaseMenuItem',
            'translateVoice',
            'startRecord',
            'stopRecord',
            'onRecordEnd',
            'playVoice',
            'pauseVoice',
            'stopVoice',
            'uploadVoice',
            'downloadVoice',
            'chooseImage',
            'previewImage',
            'uploadImage',
            'downloadImage',
            'getNetworkType',
            'openLocation',
            'getLocation',
            'hideOptionMenu',
            'showOptionMenu',
            'closeWindow',
            'scanQRCode',
            'chooseWXPay',
            'openProductSpecificView',
            'addCard',
            'chooseCard',
            'openCard'
          ]
    });
    
    wx.ready(function(){
        //添加卡券
        
        $('#awardCollectionBtn').on('touchstart',function(){ 
            var isAddCard = true;
            var award = g_config.wxAward;
            var generateWxcard = award.genewxcard;
            if(generateWxcard){
                if(false){
                    HdGame.statusMsg('活动尚未发布','无法加入到微信卡券');
                    return;
                }
                var str = $('#awardDetailBox .codeBgTime').html().replace(/\./g,'/');
                var targetTimeStamp = new Date(str).getTime();
                if(targetTimeStamp > new Date().getTime()){
                    HdGame.statusMsg('未到兑奖时间');
                    return;
                }
                
                var cardId = award.wxcardid;
                var code = $('#awardDetailBox .codeLine .code').text();
                var sysCode = $('#awardDetailBox .codeLine .code').attr('code');
                var depositTime = g_config.award.depositTime;
                HdGame.tlog(cardId);
                HdGame.tlog(code);
                $.ajax({
                    type : 'post',
                    url : '//hd.faisco.cn/ajax/hdgame_h.jsp?cmd=getCardSign&cardTick=&cardId='+cardId+'&code='+code+'&openId=o1ueSjorrC3xUjCq8E6tOqM6J1vM',                    
                    error : function(){ 
                        if(m_debug){
                            alert( '服务繁忙，请稍候重试' ); 
                        }   
                    },
                    success : function(data){
                        HdGame.tlog('getCardSign',data);
                        var result = $.parseJSON(data);
                        var cardExt = "{\"timestamp\":\""+result.timestamp+"\",\"openid\":\"o1ueSjorrC3xUjCq8E6tOqM6J1vM\",\"nonce_str\":\""+ result.nonce_str +"\",\"code\":\""+ code +"\",\"signature\":\""+result.sign+"\"}";                 
                        if(depositTime && depositTime <　Date.parse(new Date())){
                            isAddCard = false;
                        }   
                        HdGame.tlog("depositTime="+depositTime);
                        if(isAddCard){
                            wx.addCard({
                                  cardList: [
                                    {
                                      cardId: cardId,
                                      cardExt: cardExt
                                    }
                                  ],
                                  success: function (res) {
                                        HdGame.tlog('addCard',res);
                                        HdGame.logDog(1000108 ,1);  //领取微信卡券

                                        //alert('已添加卡券：' + JSON.stringify(res.cardList));
                                        var resItem = res.cardList[0];
                                        isAddCard = false;
                                        $('#awardCollectionBtn').text("打开微信卡券");

                                        if(resItem.isSuccess){
                                            $.ajax({
                                                type : 'get',
                                                url : '//hd.faisco.cn/ajax/hdgame_h.jsp?cmd=setCode&code='+sysCode,                    
                                                error : function(){ 
                                                    if(m_debug){
                                                        alert( '服务繁忙，请稍候重试' ); 
                                                    }   
                                                },
                                                success : function(data){
                                                    HdGame.tlog('setCode',data);
                                                    var result = $.parseJSON(data);
                                                }
                                            }); 
                                        }                       
                                  }
                            });                     
                        }else{  
                            wx.openCard({
                                cardList: [{
                                    cardId: cardId,
                                    code: code
                                }]// 需要打开的卡券列表
                            });     
                        }                       
                    }
                }); 
                
            }   
        });
    });

    wx.ready(function () {
       /* wx.hideMenuItems({
            menuList: ['menuItem:copyUrl'] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮
        });*/
        
        
            wx.showAllNonBaseMenuItem();
        
        
        try{         
            //是否显示朋友圈分享
            
                
            //微信错误
            wx.error(function(res){
                if(m_debug){
                    alert($.toJSON(res));
                }
            });

        }catch(e){
            alert(e.message);
        }

    });
       
    function decodeHtml(html){
        return html && html.replace ? (html.replace(/&nbsp;/gi, " ").replace(/&lt;/gi, "<").replace(/&gt;/g, ">")
            .replace(/&#92;/gi, "\\").replace(/&#39;/gi, "\'").replace(/&quot;/gi, "\"").replace(/\<br\/\>/gi, "\n").replace(/&amp;/gi, "&")) : html;
    };
    
    /*wx.ready(function () {
        var isApple = window.navigator.userAgent.indexOf('iPhone') > -1 || window.navigator.userAgent.indexOf('iPad') > -1 || window.navigator.userAgent.indexOf('iPod') > -1;
        var isAndroid = window.navigator.userAgent.indexOf('isAndroid') > -1;
        var sysType = 'unknown';
        if(isApple){
            sysType = 'apple';
        }else if(isAndroid){
            sysType = 'android';
        }
        wx.getNetworkType({
            success: function (res) {
                var networkType = res.networkType; // 返回网络类型2g，3g，4g，wifi           
                var netType = 'other';
                if(networkType === 'wifi'){
                    netType = 'wifi';
                }else{
                    netType = 'other';
                }
                alert('o1ueSjorrC3xUjCq8E6tOqM6J1vM');
                $.ajax({
                    url: '//hd.faisco.cn/ajax/hdgame_h.jsp?cmd=setBehavior&gameId=2&openId=o1ueSjorrC3xUjCq8E6tOqM6J1vM',
                    type: 'post',
                    data: {netType: netType, sysType: sysType},
                    success: function(result){
                        //TODO
                    }
                });
                      
            }
        });
    });*/

    function setWxShare(desc,url,callBack){
        if(!_manage){
            desc = desc.replace('红包','');
        }   
        desc = decodeHtml(desc);
        var pyqUrl = url;
        //分享多域名
              
                //是否已经设置过动态分享链接，防止重复设置
                /*if(!arguments.callee.isSetDynRoot){
                    pyqUrl = 'http://www.hdpyqd.com/' + url.replace('http://','').replace('https://','');
                    arguments.callee.isSetDynRoot = true;
                }*/
                //pyqUrl = 'http://www.hdpyqd.com/' + url.replace('http://','').replace('https://','') + '&fsl=b';

                var urlParameterSet = url.split("?")[1].split("&");
                var urlParameter = "";
                for( var i = 0; i < urlParameterSet.length; i++ ){
                    var itemPar = urlParameterSet[i];
                    if( itemPar.split("=")[0] === "aid" || itemPar.split("=")[0] === "id" || itemPar.split("=")[0] === "style" ){
                        continue;
                    }
                    if( urlParameter.length > 0 ){
                        urlParameter += "&";
                    }
                    urlParameter +=itemPar;
                    
                }
                //console.log("urlParameter="+urlParameter);
                if( false){
                    pyqUrl =  "http://www.hdpyqd.com/share.jsp?fsl=b&aid=11957983&id=2&"+urlParameter;
                }else{
                    pyqUrl = 'http://www.hdpyqd.com/' + "11957983/2/share.jsp?fsl=b&"+urlParameter ;
                }
                
        
        //分享链接统一加上自己的openid
        url = HdGame.setUrlArg(url,['otherplayer','o1ueSjorrC3xUjCq8E6tOqM6J1vM']);
        pyqUrl = HdGame.setUrlArg(pyqUrl,['otherplayer','o1ueSjorrC3xUjCq8E6tOqM6J1vM']);
         //分享链接统一加上分享层数
        url = HdGame.setUrlArg(url,['shareDeep','256']);
        pyqUrl = HdGame.setUrlArg(pyqUrl,['shareDeep','256']);
        
        
        //如果4个设置项都和上次一样，就直接返回
        if(url === HdGame.wxConfigArg.url && HdGame.wxConfigArg.desc === desc && HdGame.wxConfigArg.callBack === callBack && HdGame.wxConfigArg.pyqUrl === pyqUrl){
            return;
        }

        wx.ready(function () {
            // 1 判断当前版本是否支持指定 JS 接口，支持批量判断
            var wxConfigShareImg = '//hd.faisys.com/image/game/l_wzytzs.jpg?v=201508111845';
            if(!/^http:/.test(wxConfigShareImg) && /^\/\//.test(wxConfigShareImg)){
                wxConfigShareImg = 'http:' + wxConfigShareImg;
            }

            try{         
                //分享朋友设置                      
                wx.onMenuShareAppMessage({
                    title: decodeHtml('参与活动赢大奖'), // 分享标题
                    desc: desc, // 分享描述
                    link: url,  // 分享链接
                    imgUrl: wxConfigShareImg, // 分享图标
                    type: 'link', // 分享类型,music、video或link，不填默认为link
                /*  dataUrl: '',*/ // 如果type是music或video，则要提供数据链接，默认为空
                    success: function () { 
                        $.ajax({
                            type : 'post',
                            url : '//hd.faisco.cn/ajax/hdgame_h.jsp?cmd=setShareNum&aid=11957983&gameId=2&openId=o1ueSjorrC3xUjCq8E6tOqM6J1vM&type=friend',
                            error : function(){ 
                                if(m_debug){
                                    alert( '服务繁忙，请稍候重试' ); 
                                }   
                            },
                            success : function(data){ 
                                if(!m_debug){
                                    //统计分享  
                                    HdGame.logDog(1000004,51);
                                    HdGame.logObjDog(1000092, 2, 2);
                                    HdGame.logDog(1000055,0);
                                }
                                handleShareAward(data);
                                callBack && callBack(data);
                            }
                        });

                    },
                    cancel: function () { 
                        // 用户取消分享后执行的回调函数
                        //alert(url);
                    }
                });
                //分享朋友圈设置
                wx.onMenuShareTimeline({
                      title: desc,
                      link: pyqUrl,
                      imgUrl: wxConfigShareImg+"xxxxx",
                      success: function (res) {
                        $.ajax({
                            type : 'post',
                            url : '//hd.faisco.cn/ajax/hdgame_h.jsp?cmd=setShareNum&aid=11957983&gameId=2&openId=o1ueSjorrC3xUjCq8E6tOqM6J1vM&type=pyq',
                            error : function(){ 
                                if(m_debug){
                                    alert( '服务繁忙，请稍候重试' ); 
                                }  
                            },
                            success : function(data){
                                if(!m_debug){
                                    //统计分享                                  
                                    HdGame.logDog(1000004,51);
                                    HdGame.logObjDog(1000092, 2, 2);
                                    HdGame.logDog(1000055,1);
                                }
                                //alert(wxConfigShareImg);
                                handleShareAward(data);
                                callBack && callBack(data);
                            }
                        });     
                      },
                      cancel: function (res) {
                        //$("#sharePanel").hide();
                      }/*,
                      fail: function (res) {
                        alert(JSON.stringify(res));
                      }*/
                });
                HdGame.tlog('当前分享朋友链接：',url);
                HdGame.tlog('当前分享朋友圈链接：',pyqUrl);
            }catch(e){
                alert(e.message);
            }
        });
        HdGame.wxConfigArg.desc = desc;
        HdGame.wxConfigArg.url = url;
        HdGame.wxConfigArg.callBack = callBack;
        HdGame.wxConfigArg.pyqUrl = pyqUrl;
    }

    function setWxShareUrlArg(){
        var argsArray = Array.prototype.slice.call(arguments);
        argsArray.unshift(HdGame.wxConfigArg.url);
        setWxShare(HdGame.wxConfigArg.desc,HdGame.setUrlArg.apply(HdGame,argsArray),HdGame.wxConfigArg.callBack);
    }
    function removeWxShareUrlArg(){
        var argsArray = Array.prototype.slice.call(arguments);
        argsArray.unshift(HdGame.wxConfigArg.url);
        setWxShare(HdGame.wxConfigArg.desc,HdGame.removeUrlArg.apply(HdGame,argsArray),HdGame.wxConfigArg.callBack);
    }
    function setShareText(text){
        text = text.replace(/\u200b/g,'').replace(/&nbsp;/g,' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
        return text.replace(/<span class=["']tag["'] contenteditable=["']?false["']?>(.+?)<\/span>/g,function(match,$1){
            switch($1){
                case '玩家名称':
                    if(false){
                        return HdGame.hykjUserName;
                    }else{
                        return "王威";
                    }
                case '游戏成绩':
                    if(false){
                        return parseInt(HdGame.currentScore) + "分";
                    }else{
                        return HdGame.currentScore;
                    }
                    
                case '游戏排名':
                    return HdGame.currentRank;
                case '奖品名称':
                    return HdGame.currentAward;
                case '奖项等级':
                    return HdGame.currentAwardStyle;
                case '收集的字':
                    return '"'+HdGame.ccndrmTitle+'"';
            }
        });
    }
    function setWxShareByStatus(url,callBack,noOtherplayer){
        if(false){
            return;
        }
        typeof url === 'undefined' && (url = HdGame.wxConfigArg.url);
        typeof callBack === 'undefined' && (callBack = HdGame.wxConfigArg.callBack);
        if(true){
            if(false){
                setWxShare(setShareText('轻轻松松就能抽到大奖，积攒多年的人品终于有用了，你也赶紧来抽奖吧！！'),url,callBack);
                return;
            }
            if(HdGame.currentAward){
                setWxShare(setShareText('\x3cspan class=\x22tag\x22 contenteditable=\x22false\x22\x3e玩家名称\x3c/span\x3e已经在活动里赢得\x3cspan class=\x22tag\x22 contenteditable=\x22false\x22\x3e奖品名称\x3c/span\x3e，你也快来玩游戏赢大奖吧！'),url,callBack);
            }else if(HdGame.currentRank){
                //url = noOtherplayer ? url : HdGame.setUrlArg(url,['otherplayer','o1ueSjorrC3xUjCq8E6tOqM6J1vM']);//在setWxShare中统一加上openid
                setWxShare(setShareText('\x3cspan class=\x22tag\x22 contenteditable=\x22false\x22\x3e玩家名称\x3c/span\x3e以\x3cspan class=\x22tag\x22 contenteditable=\x22false\x22\x3e游戏成绩\x3c/span\x3e的成绩傲视群雄，你敢来挑战Ta赢取丰厚奖品吗？'),url,callBack)
            }else{
                //HdGame.tlog("轻轻松松就能抽到大奖，积攒多年的人品终于有用了，你也赶紧来抽奖吧！！");
                setWxShare(setShareText('轻轻松松就能抽到大奖，积攒多年的人品终于有用了，你也赶紧来抽奖吧！！'),url,callBack);
            }
        }
    }
    function handleShareAward(data){
        var result = $.parseJSON(data);
        HdGame.tlog("shareaward",result.shareaward);
        if(result && result.shareaward){
            drawTimesLimit += 1;
            if(true){
                HdGame.resulePoup.resuleArg.count += 1;
            }
            $(".dayDrawCount").text(drawTimesLimit-count<0 ? 0:(drawTimesLimit-count));
            g_config.showHelpGuide = false;
            if(false){
                var scoreUnit = $('.gameScoreUnit').eq(0).text();
                qdydjAddText($('#grade .specil'),1);
                HdGame.statusMsg('分享成功，获得'+1+scoreUnit);
            }
        }
        $("#helpGuideBox").hide();
    }
