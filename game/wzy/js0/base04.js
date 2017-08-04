
   var count = 0;
    var isPublish = true;
    var drawTimesLimit = 3;
    var drawTotalLimit = 6;
    var totalCount = 0;
    var isLimitDraw = isLimitDraw;
    var otherPlayerInfo = {};
    var showAwardList = false;
    var informNum = 0;
    var playerAwardList = [];
    var skillSupportType = 2;
    var skillName = HdGame.decodeHtml('凡科互动');
    var skillLink = HdGame.decodeUrl(HdGame.decodeHtml('http%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMjM5MTk5MjI3OA%3D%3D%26mid%3D209854000%26idx%3D1%26sn%3D82241d924839270d3ea820ad2d56c01b%23wechat_redirect'));
    var gameType = 0;
    var rankShowNum = 100;
    //初始化弹出层参数
    HdGame.initChangePoup({
        rankUrl        : '//hd.faisco.cn/ajax/hdgame_h.jsp?cmd=getRankList&aid=11957983&gameId=2&style=42&openId=o1ueSjorrC3xUjCq8E6tOqM6J1vM',
        awardUrl       : '//hd.faisco.cn/ajax/hdgame_h.jsp?cmd=getGiftList&aid=11957983&style=42',
        getRegAwardUrl : '//hd.faisco.cn/ajax/hdgame_h.jsp?cmd=getRegAwardList&aid=11957983&gameId=2&style=42&openId=o1ueSjorrC3xUjCq8E6tOqM6J1vM',
        openId         : 'o1ueSjorrC3xUjCq8E6tOqM6J1vM',
        gameId         : 2,
        mhaveScore     : (true && gameType != 3),
        informUrl      : '//hd.faisco.cn/ajax/hdgame_h.jsp?cmd=setInformNum&aid=11957983&gameId=2&openId=o1ueSjorrC3xUjCq8E6tOqM6J1vM',
        hasReport      : false,
        afterWxCard    : true
    });
    HdGame.resulePoup.init({
        drawType  : 1,
        checkRegUrl:'//hd.faisco.cn/ajax/hdgame_h.jsp?cmd=checkRegNum&aid=11957983&gameId=2&openId=o1ueSjorrC3xUjCq8E6tOqM6J1vM',  
        regUrl    : '//hd.faisco.cn/ajax/hdgame_h.jsp?cmd=setPlayerReg&aid=11957983&gameId=2&openId=o1ueSjorrC3xUjCq8E6tOqM6J1vM&flag1=true',
        home      : typeof home !== 'undefined' ? home : null,
        again     : typeof gameRestart !== 'undefined' ? gameRestart : null,
        giftInit  : luckDraw
    });
    $(function(){
        HdGame.sortRuleBox.init('abcde');
        //根据setting初始化页面设置
        
            HdGame.unPublishMsg();        
            if(true){ //奇葩BUG，魅蓝note如果不加未发布条玩游戏会一直抖，
                $('.unPublish').css('top',-2 + 'rem');  
            }                                            
        
        var hostName = HdGame.decodeHtml('请输入企业名称');
        var hostLink = HdGame.decodeHtml('http://').replace('http://','');
        var menuLink = HdGame.decodeHtml('').replace('http://','');
        var menuName = $('.menuName');
        if(false){
            $("#resulte-gift-showMyAward").data("openCode",'null');
            showAwardDetail4Draw();
        }

        
            var openAwardExpCookie = '11957983|2|o1ueSjorrC3xUjCq8E6tOqM6J1vM';
            if(!HdGame.getLocalStorage(openAwardExpCookie)){
                HdGame.setLocalStorage(openAwardExpCookie,'-');
                showRule();
            } 
        
        
        $('#showRankNum').text(rankShowNum);
        $('.hostName').text(hostName);

        $('#phoneInput,#nameInput,#addressInput').click(function(){
            $('#spxdPage').addClass('spxdPageHide');
        });
        $('#userSubmitBtn').on('touchstart',function(){
            if(!$(this).hasClass('submit')){
                return;
            }
            var name = $.trim( $('#nameInput').val() );
            var phone = $('#phoneInput').val().replace(/\s/g,"");
            var address = $.trim( $('#addressInput').val() );
            
            function checkPhone(phoneNum){
                if((/^1[34578]\d{9}$/.test(phoneNum) || /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(phoneNum))){ 
                    return true;
                }
                return false;
            }

            if( $('#nameInput').is(":visible")){
                if(name.length == 0){
                    HdGame.showMsgToast("请输入姓名",2000,'msg-toastBig');
                    return;
                }
                if(HdGame.checkCharacterLen(10,$('#nameInput'))){
                    HdGame.showMsgToast("姓名不能超过5个中文或10个英文字母",2000,'msg-toastBig');
                    return;
                }
                g_config.isRegUserName = true;
            }
            if( $('#phoneInput').is(":visible")){
                var reg = /^[0-9]*$/;

                if(!checkPhone(phone)){
                    HdGame.showMsgToast("请输入正确的号码",2000,'msg-toastBig');
                    return;
                }
                g_config.isRegPhone = true;         
            }
            if( $('#addressInput').is(":visible")){
                if(address.length == 0){
                    HdGame.showMsgToast("请输入联系地址",2000,'msg-toastBig');
                    return;
                }
                if(HdGame.checkCharacterLen(200,$('#addressInput'))){
                    HdGame.showMsgToast("联系地址不能超过100个中文或200个英文字母",2000,'msg-toastBig');
                    return;
                }
                g_config.isRegAddress = true;
            }
            
            name = name ? name : '';
            phone = phone ? phone : '';
            address = address ? address : '';
            g_config.awardUsername = name;
            g_config.awardPhone = phone;
            g_config.awardAddress = address;
            if(phone){
                HdGame.logDog(1000113); //hdv-玩家填写手机号码
            }

            //获取弹出联系方式框前所点击的奖项
            var clickIndex = $('.codeInfoBox.checked').index();
            if(clickIndex == -1){
                clickIndex = 0;
            }
            $('.ajaxLoadBg').show();
            $('.ajaxLoadBar').addClass('ajaxLoad');
            
            var userInfo = {};
            userInfo.ausername = name;
            userInfo.aphone = phone;
            userInfo.aadress = address;
            userInfo.headImg = 'http://wx.qlogo.cn/mmopen/ajNVdqHZLLDXebVxqmbF5CvwDrzYL7NJCRtIKKc3CtE4l3BWiblQkY9OjTIX4ia2dExGgAKMMzhglmvT4L7lHeiaQ/0';

            $.ajax({
                type : 'post',
                url : '//hd.faisco.cn/ajax/hdgame_h.jsp?cmd=setPhone&aid=11957983&gameId=2&openId=o1ueSjorrC3xUjCq8E6tOqM6J1vM&name=%E7%8E%8B%E5%A8%81&userInfo='+HdGame.encodeUrl($.toJSON(userInfo)),
                error : function(){ 
                    HdGame.otherAjaxComplete();
                    $('#spxdPage').removeClass('spxdPageHide');
                },
                success : function(data){   
                    $('#spxdPage').removeClass('spxdPageHide');
                    var result = $.parseJSON(data);
                    HdGame.otherAjaxComplete();
                    $('#awardUserInfoBg').hide();
                    //开启联系兑奖在填写联系方式后才输出兑奖码
                    if(result.success){
                        var codeInfoList = result.codeInfoList;
                        g_config.playerId = result.id;
                        for(var i = 0; i < codeInfoList.length; i++){
                            var codeInfo = codeInfoList[i];
                            var code = codeInfo.code;
                            var awardCode = codeInfo.awardCode;

                            if(i == clickIndex){
                                $('#awardDetailBox').find('.code').text(awardCode);
                                $('#awardDetailBox').find('.code').attr('code',code);
                            }
                            
                            var itemInfo = $("#codeInfo"+i).data("data");
                            itemInfo.awardCode = awardCode;
                            $("#codeInfo"+i).data("data",itemInfo);
                        }
                        console.log("lvox in"); 
                        HdGame.aUserInfo.hide();
                            
                    }                              
                }
            });    
        });
        $('#userCancelBtn').on('touchstart',function(){
            event.preventDefault();
            event.stopPropagation();
            $('#awardUserInfoBg').hide();
            $('#spxdPage').removeClass('spxdPageHide');
            $('.safetyBg').hide();
            if(gameType == 3){               
                home();
            }
        });
        $('.resule-status-send').on('touchstart',function(){
            if(_manage){
                return;
            }   
            if(g_config.haveAward){//已经中奖
                HdGame.changePoup(3);
            }else{
                luckDraw();
            }   
        });
        $('#helpGuideBox').on('touchend',function(){
            $('#helpGuideBox').hide();
        });
        //礼品弹出层初始化
        $('#awardInfo').on('click','.codeInfoBox',HdGame.openAwardDetail);
        $('#resulte-gift-showMyAward').on('touchstart',showAwardDetail4Draw);
        $('.awardCloseIcon').on('touchstart',function(){
            removeWxShareUrlArg('fromFav');
            $('#awardDetailBox').hide();
            $('#resule-gift-box,resule-status-box').hide();
            $('.gameBox').add('.home').removeClass('overflow-y-hidden');
            true && $('.bottomSkill').show();
        });
        $('.codeImg').on('click',function(){
            $('.codeDetailImgBox').show();
        });
        $('.codeDetailImgBox').click(function(){
            $(this).hide();
        });
        
        $('.awardCusText').on('touchstart',function(){
            if(true){
                $('#ticketDetailBox').show();
            }else{
                var awardCusTextInfo = $('#awardCusTextInfo');
                if(awardCusTextInfo.css('display') == 'block'){
                    $(this).find('.awardDeailIcon').removeClass('awardIncoSlideDown');
                    $(this).find('.awardDeailIcon').addClass('awardIncoSlideUp');               
                }else{
                    $(this).find('.awardDeailIcon').removeClass('awardIncoSlideUp');
                    $(this).find('.awardDeailIcon').addClass('awardIncoSlideDown');
                }           
                awardCusTextInfo.slideToggle();
            }
        });

        $('.ticketitle .closeBtn').on('touchstart',function(){
            $('#ticketDetailBox').hide();
        })

        
        if(true){
            $('.resule-fxts').hide();
        }
        true && g_config.showSkillSup && HdGame.logDog(1000028,0);
        if(false && g_config.showSkillSup){
            HdGame.logDog(1000062,2);
        }else if(false && g_config.showSkillSup){
            HdGame.logDog(1000067,2);
        }
        if(false){
            $('.home,.showBottomSkillPage').append('<div class="bottomSkill skillInfo">本游戏由 <span class="yySkill" style="text-decoration:underline;">凡科互动</span> 提供</div>');
            $('.yySkill').click(function(){
                
                $('#yyAttentionMask').show();
            });
        }else{
            if(false){
                $('.home,.showBottomSkillPage').append('<div class="bottomSkill skillInfo">页面技术由 <a href="http://mp.weixin.qq.com/s?__biz=MjM5MTk5MjI3OA==&mid=209854000&idx=1&sn=82241d924839270d3ea820ad2d56c01b#rd">凡科互动</a> 提供</div>');
            }else if(true){
                $('.home,.showBottomSkillPage').append('<div class="bottomSkill skillInfo">页面技术由 凡科互动 提供</div>');
            }
        }
    
        _manage && $('a').on('click',function(){ return false; });

        $('.homePoupMask').on('touchend',function(event){
            event.preventDefault();
            event.stopPropagation();
            if(_manage){
                return;
            }
            if($(event.target).hasClass('homePoupMask')){
                $(this).hide();
            }
        });
       
        $('.menuBtnBox').on('touchend',function(){
            HdGame.logDog(1000012);
        });
        if(true){
            $('#joinNumLine').show();
        }else{
            $('#joinNumLine').hide();
        }
        if(false){
            $('#Award_Round_Dot').css('display','inline-block');
        }
        if(false){
            $('#Mingdan_Round_Dot').css('display','inline-block');
        }
        if(false){
            $('#myAwardBtn').show();
        }
        if(false){            
            $('#selfAwardLine').show();
            $('#awardLineBox').hide();
        }else{
            $('#awardLineBox').show();
            $('#selfAwardLine').hide();
        }
        if(!true){
            $('.skillInfo').hide();
            $('.skillInfo').addClass('hideSkill');
        }
        if(false){
            $('.menuBtnBox').hide();
        }else if(false){
            if($.trim(menuLink).length == 0){
                menuName.css('text-decoration','none');
            }else{
                menuName.attr('href',HdGame.decodeHtml(''));
            }
        }else if(true){
            (function(){
                var attentionMask = $('#attentionMask');
                if(HdGame.decodeHtml('') === ''){
                    $('#QRImg').remove();
                }
                $('.menuBtnBox').on('touchend',function(){
                    attentionMask.show();
                });
            })();
        }
        if($.trim(hostLink).length == 0){
            $('.hostName').css('text-decoration','none');
            $('a.hostName').attr('href','#');
        }
        //总抽奖次数显示逻辑
        if(true){
            $('.totalDraw').hide();
        }else{
            $('.totalDraw').show();
            $('.dayDraw').hide(); 
            if(true){
                $('.dayDraw4Total').show();
            }
        }
        if($('#awardExplain').text().length == 0){
            $('#awardExplain_h').hide();
        }
        $('a.hostName').click(function(){
            HdGame.logDog(1000013);
        });
        if(skillSupportType == 1){
            $('.skillLine').css('padding','0');
            $('.skillCont').hide();
        }else if(skillSupportType == 3){
            $('.skillName').text(skillName);
            $('.skillName').attr('href',skillLink);
        }
        if(skillSupportType != 3 || skillLink.indexOf('mp.weixin.qq.com/s?__biz=MjM5MTk5MjI3OA==&mid=209854000&idx=1&sn=82241d924839270d3ea820ad2d56c01b#wechat_redirect') >= 0 ){
            $('.skillName').click(function(){
                if(_manage) return;
                HdGame.logDog(1000013);
                if(true){
                    HdGame.logDog(1000070,1);
                }else if(false){
                    HdGame.logDog(1000070,3);
                }else if(false){
                    HdGame.logDog(1000070,5);
                }
                $('#skillSupMask').show();
                return false;
            });
        }
        $('.skillInfo a').click(function(){
            if(_manage){
                return;
            }
            HdGame.logDog(1000005,0);
            if(true){
                HdGame.logDog(1000070,0);
            }else if(false){
                HdGame.logDog(1000070,2);
            }else if(false){
                HdGame.logDog(1000070,4);
            }
            typeof g_config.isAOpenId == 'number' && HdGame.logDog(1000115,3+g_config.isAOpenId);
            if(false){
                
                $('#yyAttentionMask').show();
                return false;
            }else if(true){
                $('#skillSupMask').show();
                return false;
            }
        });

        //音乐图标插入游戏位置
        
            $('.home').add('.gameBgBox').append('<div class="soundIconOff soundIcon" style="z-index:90"></div>');
            $('.home .soundIcon:not(".soundIconPlay")').css({
                "left":'0.75rem',
                "top":'1rem'
            });
            
               $('.home .soundIcon').hide();
            
        
    
        (function(){
            $('.gameBgBox .soundIcon').css('z-index','100');
            $('.soundIcon').addClass('soundIconPlay');
            var soundPauseCord = 'soundPause|11957983|2|o1ueSjorrC3xUjCq8E6tOqM6J1vM';
            $('.soundIcon').on('touchstart',function(){
                var self = $('.soundIcon');
                if(!self.hasClass('soundIconOff')){
                    hg.sound.allowPlay = false;
                    hg.sound.pauseAll();
                    HdGame.setLocalStorage(soundPauseCord,'-');
                }else{
                    hg.sound.allowPlay = true;
                    hg.sound.readyPlay(0,0,'loop');
                    HdGame.setLocalStorage(soundPauseCord,'');
                }
            });
            if(HdGame.getLocalStorage(soundPauseCord)){
                hg.sound.allowPlay = false;
                hg.sound.pauseAll();
            }
            $('#ruleImg').addClass('ruleImgAnimate');
            $('#startBtnImg,.startBtnImg').on('touchend',function(event){
                if(!startBtnAjax.call(this,event)){
                    return;
                }
                hg.sound.play("startButton");
                if(typeof hg.sound.cache[0] !== 'undefined' && typeof hg.sound.cache[0].playing !== 'undefined' && !hg.sound.cache[0].playing){
                    hg.sound.readyPlay(0,0,'loop');
                }
                
            }); 
        })();
    
    });

    //标题与开始按钮动画
    function startBtnDelay(){
        $('.titleImg').removeClass('titleDown').addClass('titleDown');
        $('#startBtnImg').removeClass('startTada');
        
            hg.sound.pauseAll();
        
        setTimeout(function(){
            $('#startBtnImg').addClass('startTada');
        },1000);
        //HdGame.tlog("nowIPInfo",{"ip":"120.35.4.185","contry":"中国","provice":"福建省","city":"福州市","area":"华东","isp":"电信"});
    }
    $(function(){
        if(_manage){        
            startBtnDelay();
        }else{
            hg.assets.onload(startBtnDelay);
        }
    })

    /*----------------PK环节--------------------*/
    function createPK(){
        $(".one").hide().siblings().show();
        $("#resule-status-box").show();
        $("#resule-status-head p").show();
        $(".resuleBox").show();
        $(".resule-bgLight").hide();
        $("#resule-status-ribbon").hide();
        $(".little-PK").show().siblings().hide();
        $(".resule-status-again").hide();
        $(".resule-status-home").hide();
        $(".resule-status-rightNow").show().siblings().hide();
        $(".resule-status-firstPage").show();
    }

    function finishPK(){
        $("#resule-status-box").hide();
        $("#resule-status-head p").hide();
        $(".resuleBox").hide();
        $(".resule-bgLight").show();
        $("#resule-status-ribbon").show();
        $(".little-PK").hide().siblings().show();
        $(".resule-status-again").show();
        $(".resule-status-home").show();
        $(".resule-status-rightNow").hide().siblings().show();
        $(".one").show().siblings().hide();
        $("#resule-status-ribbon").show();
        $(".resule-status-firstPage").hide();
    }
    $(function(){
        $(".one").show();
        $(".resule-status-firstPage").hide();
        //暂时去掉好友PK这个功能
        if(true && !_manage && otherPlayerInfo && typeof otherPlayerInfo.headImg !== "undefined" && typeof otherPlayerInfo.name !== "undefined" && typeof otherPlayerInfo.score !== "undefined" && typeof otherPlayerInfo.rank !== "undefined" && typeof otherPlayerInfo.award !== "undefined" && false){

            var crrPkrecord = 'PKrecord|' + otherPlayerInfo.aid + '|' + otherPlayerInfo.gameId + '|' + otherPlayerInfo.openId;
            if(!HdGame.getLocalStorage(crrPkrecord)){
                if(otherPlayerInfo.award != ""){
                    $(".WhetherAward").text("获得"+otherPlayerInfo.award).show();
                }
                $(".PKner-A img").attr("src",otherPlayerInfo.headImg);
                $(".userA-name").text(otherPlayerInfo.name);
                $(".fighter-B").text(otherPlayerInfo.name);
                $(".othergrade .resuleArg").text(otherPlayerInfo.score);
                $("#rankB .resuleArg").text(otherPlayerInfo.rank);
                createPK();
                //每次进入PK页面都会设置cookie
                HdGame.setLocalStorage(crrPkrecord,'-');
            }
        }
        $(".winAWard a").on("touchend",function(){
            showRule();
        });
        $(".resule-status-rightNow").on("touchend",function(){
            hg.on('startGame',function(){
                finishPK();
                hg.off('startGame',arguments.callee);
            });
            $("#startBtnImg").trigger("touchstart");
            $("#startBtnImg").trigger("touchend");
        });
        $(".resule-status-firstPage").on("touchend",function(){
            finishPK();
        });
    });
    $(function(){
        function sortBy(name){ //给数组里的对象按某个key的值排序
            return function(o, p){
                var firstItem, secondItem;
                if (typeof o === "object" && typeof p === "object" && o && p){
                    firstItem = o[name];
                    secondItem = p[name];
                    if (firstItem === secondItem) {return 0;}
                    if (typeof firstItem === typeof secondItem) { return firstItem < secondItem ? -1 : 1;}
                    return typeof firstItem < typeof secondItem ? -1 : 1;
                }
            }
        }
        if(_manage){
             $('.home,.showAwardBoxPage').append('<div class="showAwardBox"><ul class="awardInfoList"><li>'+
                '<div><img src="http://wx.qlogo.cn/mmopen/ajNVdqHZLLDXebVxqmbF5CvwDrzYL7NJCRtIKKc3CtE4l3BWiblQkY9OjTIX4ia2dExGgAKMMzhglmvT4L7lHeiaQ/0"><span class="winner">范女神<span>获得了<span class="award">100元优惠券</span></div>'+
                '<div><img src=""><span class="winner">小星儿<span>获得了<span class="award">50元优惠券</span></div>'+
                '<div><img src=""><span class="winner">LVYD<span>获得了<span class="award">30元优惠券</span></div>'+
                '<div><img src=""><span class="winner">萌妹子<span>获得了<span class="award">10元优惠券</span></div>'+
                '</li></ul></div>');

            $('#skillLine').css('min-height','1rem');
        }else if(!_manage && playerAwardList.length > 3){
            playerAwardList.sort(sortBy("awardLevel"));
            $('.home,.showAwardBoxPage').append('<div class="showAwardBox"><ul class="awardInfoList"><li></li></ul></div>');
            var awardList = '';
            $.each(playerAwardList,function(index,value){
                awardList += '<div><img src="'+ JSON.parse(this.info).headImg +'"><span class="winner">'+this.name+'<span>获得了<span class="award">'+this.award+'</span></div>';
            });
            $('.awardInfoList li').append(awardList);
        }
        if(!_manage){
            $('.showAwardBox').awardSlide({'margin_right':'0.8rem','speed': 15 }); 
            if(1 == 0){
                if(false){
                    var bottomSkill = $('.bottomSkill');
                    var flag = $(window).height()/$(window).width() < 1.575;
                    var bgHeight = flag ? $(window).width()*1.575 : $(window).height();
                    $('.home').html('');
                    $('.home').append(bottomSkill);
                    $('.home').append('<p style="font-size:0.9rem; color:#e7e7e7; text-align: center; padding-top:10rem; line-height: 1.3rem">活动已结束<br>请期待下次活动</p>');
                    $('.home').css({"height":bgHeight,"background":"#424242","width":"100%","position": "fixed","z-index":"500"});
                    document.title = '活动已结束';
                    $('.gameInfoBox').hide();
                     $('.showAwardBox').hide();
                    hg.sound.allowPlay = false;
                    hg.sound.pauseAll();
                }
            }
        }
        setTimeout(function(){
            var flag = $(window).height()/$(window).width() < 1.575;
            var bgHeight = flag ? $(window).width()*1.575 : $(window).height();
            var skillStatu = true?1:0;
            if(_manage){
                $('.showAwardBox').css("top",(bgHeight - $('.bottomSkill').outerHeight()*skillStatu-$('.showAwardBox').outerHeight()-2)/g_rem + 'rem');
            }else{
                $('.showAwardBox').css("top",(bgHeight - $('.bottomSkill').outerHeight()*skillStatu-$('.showAwardBox').outerHeight())/g_rem + 'rem');
            }
            if(true){
                $('.showAwardBox').css("top",(bgHeight - $('.bottomSkill').outerHeight()*skillStatu-$('.showAwardBox').outerHeight()-2)/g_rem + 'rem');
            }
        },50);
        if(!false){
            $('.showAwardBox').hide();
        }else if(!_manage){
            $('.showAwardBox').addClass('footerBox');
        }
    });
    //抽奖结果页或收藏卡劵的显示兑奖详细页
    function showAwardDetail4Draw(){
        home();  
        HdGame.changePoup(3);
    }
    function setAwardImgHeight(){
        $('#resule-gift-foot').css("margin-top",($('#resule-gift-sucImg').height()+35)/g_rem + 'rem');
    }

    function showRank(){
        HdGame.changePoup(1);
        $('#awardDetailBox').hide();
    }
    
    function showRule(){
        HdGame.changePoup(2);
        $('#awardDetailBox').hide();
    }
    function startBtnAjax(event,data){
        if(false){
            HdGame.statusMsg(2);
            hg.sound.allowPlay = false;
            hg.sound.pauseAll();
            return false;
        }
        var that = this;
        if(!hg.fireWith('startGamehead',that,[event,data])){
            return false;
        }
 
        if(false){
            HdGame.statusMsg("该游戏已超过最大参与人数！");
            return false;
        }
        //限制参与地区
        if( checkAreaLimit() != 'ok' ){ //不在限制的地区内，直接返回
            return false;
        }

        if(false){
            HdGame.statusMsg('你有疑似作弊行为，已被列入黑名单','');
            return false;
        }
        // 如果已经授权并且开启了强关注功能
        if(false){
            $('.body').off("touchend").on("touchend",function(event){
                var targetId = $(event.target).attr("id");
                if(targetId != "startBtnImg" && typeof targetId !== "undefined"){
                    $("#strongAttion").hide();
                }
            });
            $("#strongAttion").show().off("touchend").on("touchend",function(event){
                event.preventDefault();
                event.stopPropagation();
            });
            
            return false;
        }
        
        //参与前填写联系信息
        
        if(g_config.afterLinkModify && HdGame.shouldRegInfo(2,arguments,this)){
            return;
        }
        
        if(hg.showGameBox){
            $('.homeBtnBox,.bottomSkill').hide();
            $('.footerBox').hide(); 
            $('.home,#ruleImg').hide();
            $('.gameBox').show();
            if(typeof hg.sound.cache[0] !== 'undefined' && typeof hg.sound.cache[0].playing !== 'undefined' && !hg.sound.cache[0].playing){
                hg.sound.readyPlay(0,0,'loop');
            }
        }
        HdGame.logDog(1000002, 51);
        HdGame.logObjDog(1000092, 1, 2);
        hg.fireWith('startGame',that,[false,event,data]);
        return true;
    }


      
    function gameOver(_gameScore,callBack,option){
        
        if(_gameScore === 'fail'){          
            setTimeout(function(){
                HdGame.resulePoup.show({
                    isSuc:false,
                    gameScore:"fail",//闯关失败
                    minScore:60,
                    bestScore:'20.00',
                    isReg:HdGame.isReg, //是否报名
                    gameType:gameType,
                    rank:1,
                    count:drawTimesLimit-count<0 ? 0:(drawTimesLimit-count),
                    isLimitDrawTotal:false,
                    totalCount: drawTotalLimit - totalCount < 0 ? 0 : (drawTotalLimit - totalCount)
                });
            },900);
            return;
        }
        if(isNaN(_gameScore) || _gameScore < 0){
            _gameScore = 0;
        }
        //参与前填写
        if(false){//奥运男篮游戏没有开始按钮，点击支持直接调gameOver;
            if(g_config.afterLinkModify && HdGame.shouldRegInfo(2,arguments,this)){
                return;
            }       
        }else{
            //其他游戏报名型没有参与后填写设置项,这里判断不等于报名型防止旧数据在这里触发联系兑奖
            var infoType = 1;
            if(gameType == 3 || gameType == 1){
                infoType = 3;
            }
            if(gameType != 1 && HdGame.shouldRegInfo(infoType,arguments,this)){
                return;
            }
        }
        $('.ajaxLoadBg').show();
        $('.ajaxLoadBar').addClass('ajaxLoad');
        var _gameScoreStr = _gameScore + '';
        if(false){
            _gameScoreStr = changeTwoDecimal_f(_gameScore);
        }      
        var info = {headImg : "http://wx.qlogo.cn/mmopen/ajNVdqHZLLDXebVxqmbF5CvwDrzYL7NJCRtIKKc3CtE4l3BWiblQkY9OjTIX4ia2dExGgAKMMzhglmvT4L7lHeiaQ/0"};
        g_config.awardUsername && (info.ausername = g_config.awardUsername);   
        g_config.awardPhone && (info.aphone = g_config.awardPhone);    
        g_config.awardAddress && (info.aadress = g_config.awardAddress);
        var params = {};
        params.gameId = 2;
        params.style = 42;
        params.achieve = HdGame.encodeBase64('"'+_gameScoreStr+'"') + $.md5(11957983);
        params.openId = "o1ueSjorrC3xUjCq8E6tOqM6J1vM";
        params.name = "王威";
        
        params.info = $.toJSON(info);
        params.awardInfoB = g_config.awardInfoB;
        $.extend(params,option);
        $.ajax({
            type : 'post',
            url : '//hd.faisco.cn/ajax/hdgame_h.jsp?cmd=setAchieve&aid=11957983&playerId='+g_config.playerId,
            data : params,
            error : function(){               
                HdGame.otherAjaxComplete();
                $('#timeUpImg,.timeUpImg').removeClass('tada');
                callBack && callBack({
                    rt:-999,
                    msg:"ajax返回错误"
                });
                HdGame.tlog($.toJSON(arguments)); 
            },
            success : function(data){
                HdGame.tlog(data);                 
                var r = $.parseJSON(data);
                var isShowPoup = true;
                HdGame.otherAjaxComplete(); 
                if(r.rt == 0){
                    var arg={
                        isSuc:r.isSuc,
                        gameScore:_gameScoreStr,
                        minScore:60,
                        bestScore:r.score,
                        isReg:HdGame.isReg, //是否报名
                        gameType:gameType,
                        rank:r.rank,
                        beat:r.beat,
                        count:drawTimesLimit-count<0 ? 0:(drawTimesLimit-count),
                        isLimitDrawTotal:false,
                        totalCount: drawTotalLimit-totalCount<0 ? 0:(drawTotalLimit-totalCount),
                        isEqualDraw:false
                    };
                    setTimeout(function(){
                        var callBackArg = {rt:r.rt,msg:r.msg,arg:arg,pId:r.playerId}
                        g_config.playerId = r.playerId;
                        if(false){
                            callBackArg.infoList = r.infoList;
                            callBackArg.arg = arg;
                        }
                        if(false){
                            callBackArg.infoList = r.infoList;
                        }
                        callBack && (isShowPoup = callBack(callBackArg));
                        $('#timeUpImg,.timeUpImg').removeClass('tada');
                        isShowPoup !== false && HdGame.resulePoup.show(arg);
                    },300);
                }else if(r.rt == 11){
                    alert("已被检测到有作弊行为，再次被检测将永久禁止参与本游戏！");
                }else if(r.rt == 12){
                    alert("由于作弊行为，该微信号已永久禁止参与本游戏！");
                }else if(r.rt == 23){
                    HdGame.statusMsg("游戏已结束。");
                }else{
                    callBack && (isShowPoup = callBack({rt:r.rt,msg:r.msg}));
                    isShowPoup !== false && HdGame.resulePoup.show({
                        isSuc:false,
                        gameScore:'--',
                        minScore:60,
                        bestScore:'--',
                        isReg:HdGame.isReg, //是否报名
                        gameType:gameType,
                        rank:'--',
                        beat:'--',
                        count:drawTimesLimit-count<0 ? 0:(drawTimesLimit-count),
                        isLimitDrawTotal:false,
                        totalCount: drawTotalLimit-totalCount<0 ? 0:(drawTotalLimit-totalCount),
                        isEqualDraw:false
                    });
                    return;
                }
                if(r.rt !== 0){
                    callBack && callBack({rt:r.rt,msg:r.msg});
                }
            }
        });
        params = info = option = null;
        function changeTwoDecimal_f(x) {
            var f_x = parseFloat(x);
            if (isNaN(f_x)) {
                alert('function:changeTwoDecimal arguments error');
                return x;
            }
            var f_x = Math.round(x * 100) / 100;
            var s_x = f_x.toString();
            var pos_decimal = s_x.indexOf('.');
            if (pos_decimal < 0) {
                pos_decimal = s_x.length;
                s_x += '.';
            }
            while (s_x.length <= pos_decimal + 2) {
                s_x += '0';
            }
            return s_x;
        }
        
    }

function checkAreaLimit(){
    function logIPInfo(limitProvince,limitCity){
        $.ajax({
            type : 'post',
            data : {
                'aid' : 11957983,
                'gameId' : 2,
                'userName' : '王威',
                'ipInfo': $.toJSON(g_config.ipInfo),
                'lp': limitProvince,
                'lc': limitCity
            },
            url : '//hd.faisco.cn/ajax/hdgame_h.jsp?cmd=logIPInfo',
            success : function(data){  
            }
        });
    }
    
    var isShowMsg = true;
    if(typeof arguments[0] === 'boolean'){
        isShowMsg = arguments[0];
    }
    //限制参与地区
    if(false){ //有开启参与地区限制
        var areaLimit_province = '-1'.split(':');
        var areaLimit_city = '-1'.split(':');
        var now_province = g_config.ipInfo.provice;
        var now_city = g_config.ipInfo.city;
        if(areaLimit_province[0] != "-1"){
            if( now_province && now_city ){ //有当前ip信息
                if( areaLimit_city[0] == "-1" ){ //限制省份
                    if( areaLimit_province[0] != "-1" && now_province.indexOf(areaLimit_province[1]) == -1 ){
                        isShowMsg && HdGame.statusMsg("该活动限制地区",'该活动仅限'+areaLimit_province[1]+'地区的用户参与');
                        logIPInfo(areaLimit_province[1],areaLimit_city[1]);
                        return 'limit';
                    }
                }else{ //限制城市
                    if( areaLimit_province[0] != "-1" && now_province.indexOf(areaLimit_province[1]) == -1 ){ //用户不在限制的省份内
                        isShowMsg && HdGame.statusMsg("该活动限制地区",'该活动仅限'+areaLimit_city[1]+'地区的用户参与');
                        logIPInfo(areaLimit_province[1],areaLimit_city[1]);
                        return 'limit';
                    }
                }
            }else{ //没有查到当前ip信息，显示服务繁忙
                isShowMsg && HdGame.statusMsg("服务繁忙，请稍候重试",'');
                return 'busyness';
            }
        }
    }
    return 'ok';
} 

hg.on('beforeDraw',function(_arguments){
    //抽奖前填写联系信息
    var thisInfoType = 3;
    if(false){
        thisInfoType = 2;
    }
    
    if(g_config.afterLinkModify && HdGame.shouldRegInfo(thisInfoType,_arguments,this)){
        return false;
    }
});

var drawStatusLuckDraw = true;
function luckDraw(fn,option){

    if( checkAreaLimit() != 'ok' ){ //不在限制的地区内，直接返回
        home();
        return;
    }
    if(hg.fireWith('beforeDraw',this,[arguments]) === false){
        return false;
    }
    
    if(!drawStatusLuckDraw){
        return;
    }

    drawStatusLuckDraw=false;
    $('.ajaxLoadBg').show();
    $('.ajaxLoadBar').addClass('ajaxLoad'); 

    var params = {};
    params.gameId = 2;
    params.style = 42;
    
    params.userName = "王威";
    params.isPub = $.trim('');
    params.headImg = 'http://wx.qlogo.cn/mmopen/ajNVdqHZLLDXebVxqmbF5CvwDrzYL7NJCRtIKKc3CtE4l3BWiblQkY9OjTIX4ia2dExGgAKMMzhglmvT4L7lHeiaQ/0';
    $.extend(params,option);
    $.ajax({
        type : 'post',
        url : '//hd.faisco.cn/ajax/hdgame_h.jsp?cmd=getResult&aid=11957983&openId=o1ueSjorrC3xUjCq8E6tOqM6J1vM',
        data : params,
        error : function(){ 
            alert( '服务繁忙，请稍候重试!' );
            HdGame.otherAjaxComplete();
            drawStatusLuckDraw=true;
            if(gameType != 4){
                count++;
                totalCount++;
            }            
        },
        success : function(data){
            HdGame.tlog(data);
            HdGame.otherAjaxComplete(); 
            drawStatusLuckDraw=true;  
            var result = $.parseJSON(data);
            if(result.success){
                if(gameType != 4){
                    count++;
                    $(".dayDrawCount").text(drawTimesLimit-count<0 ? 0:(drawTimesLimit-count));
                    totalCount++;
                    $(".totalDrawCount").text(drawTotalLimit-totalCount<0 ? 0:(drawTotalLimit-totalCount));
                }   
                $('#resule-gift-box').attr('_level',result.awardIndex);
                g_config.haveAward = true;
                $('.resule-status-send').html("查看我的奖品");
            }else{
                if(result.rt === 27){
                    $('.resuleBox').hide();
                    HdGame.showLotsWait(5,function(){
                        $('.resuleBox').show();
                        //HdGame.resulePoup.startStatus = true; //开启摇一摇抽奖
                        luckDraw(fn,option);
                    });
                    return;
                }else if (result.rt === 1) {
                    count = drawTimesLimit;
                    $(".dayDrawCount").text(0);
                    HdGame.statusMsg(4);
                    if(!g_config.showHelpGuide){
                        $('#resule-gift-box').hide();
                        home('luckDraw');
                    }
                    return;
                }else if (result.rt === 13) {
                    HdGame.statusMsg(6);
                    count = drawTimesLimit;
                    totalCount = drawTotalLimit;
                    $(".dayDrawCount").text(0);
                    $(".totalDrawCount").text(0);
                    $('#resule-gift-box').hide();
                    home('luckDraw');
                    return;
                }else if( result.rt ===  -3 ){
                    HdGame.statusMsg("活动不存在。");
                    return;
                }else{  
                    if(result.rt === -2){
                        HdGame.tlog("参数错误。");
                    }else if(result.rt === -1){
                        HdGame.tlog("系统错误，请刷新再试。");
                    }
                    count++;
                    $(".dayDrawCount").text(drawTimesLimit-count<0 ? 0:(drawTimesLimit-count));
                    totalCount++;
                    $(".totalDrawCount").text(drawTotalLimit-totalCount<0 ? 0:(drawTotalLimit-totalCount));
                }
            }
            var arg={
                isSuc:result.success,
                giftStyle:result.awardStyle,
                giftName:result.awardName,
                giftCode:result.awardCode,
                awardTypeNum:result.awardTypeNum,
                giftImage:result.awardImage,
                awardImageW:result.awardImageW,
                awardImageH:result.awardImageH,
                awardIndex:result.awardIndex,
            };
            
            if(HdGame.getType(fn) === 'function'){
                fn(arg,result);
            }else{
                HdGame.resulePoup.showGift(arg);
            }
        }
    });     

}
$(function(){
    hg.fire('jsFootEnd');
})
