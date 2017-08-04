
    var _gameOver = false;
    var answerList = answerListOld = [{"title":"中国古代名医华佗为谁所杀？","answer":"曹操","wrong":["吕布","刘备"]},{"title":"中国农历的哪个节气有着北方吃饺子、南方吃汤圆的习俗？","answer":"冬至","wrong":["春节","元宵"]},{"title":"圆周率大约值是多少？","answer":"3.1416","wrong":["0.8664","1.7341"]},{"title":"一千克铁和一千克棉花哪个重？","answer":"一样重","wrong":["铁","棉花"]},{"title":"西游记中去西天取经的\u201C唐三藏\u201D真名叫什么？","answer":"玄奘","wrong":["唐僧","玄慈"]},{"title":"李白被后人称为？","answer":"诗仙","wrong":["诗鬼","诗圣"]},{"title":"《孙子兵法》的作者是？","answer":"孙武","wrong":["孙子","孙膑"]},{"title":"狗热时用什么散热？","answer":"舌头","wrong":["耳朵","皮肤"]},{"title":"2008年奥运会在哪里举办？","answer":"北京","wrong":["伦敦","里约热内卢"]},{"title":"火警电话是？","answer":"119","wrong":["114","911"]}];
    var answerNum = 10
    var answerCounter = 0;
    if(answerList && answerNum > answerList.length){
        answerNum = answerList.length;
    }
    var rAnswer,canAnswer = true; 
    var gameStatus = {
        index  : 0,
        status : ""
    }

    $(function(){
        gameInit();   
        if(_manage){ 
            initGameByIndex(0,true);
            $('#titleList,#txtContBox').css('z-index',100);
            $('.poupMask').hide();
            $('#titleList').css('pointer-events','none');
            hg.on('save',function(setting){
                if(answerList.len){
                    answerList.length = answerList.len;
                    answerList[answerList.length-1].rAnswer = rAnswer;
                }
                setting.answerList = $.toJSON(answerList);
                setting.answerNum = answerNum;
            });  
            parent.$('.TheKlcfTips').text('该活动最高成绩为'+ answerNum*10 +'分');

            parent.addEditBtn('编辑题目','.gameBgBox',function(){
                $$('#uploadBg').fadeIn(200);
                $$('#uploadImgBox').css('left',$$('.editDetail').offset().left+12).removeClass('uploadUp').addClass('uploadDown');
                var uploadInfoBox = $$('#uploadInfoBox');
                uploadInfoBox.css('overflow-y','auto').html('');
                $$('#uploadBoxTitle').html('编辑题目');
                if(typeof answerList.len === 'undefined'){
                    answerList.len = answerList.length;
                }
                var list = answerList;
                //var arr = ['一','二','三','四','五','六','七','八','九','十','十一','十二','十三','十四','十五','十六','十七','十八','十九','二十'];
                var arr = getUpcaseArr(50);
                
                var allSelectItem = createSelectItem(50);
                var useSelectItem = createSelectItem(answerList.len);
                
                var selectTitleBoxHtml = 
                '<div class="setTitleBox" style="margin-top:10px; margin-bottom:2px">'+
                    '<div style="display:inline-block;margin-right:20px;">题库总数：<select id="setAllTitleNums" class="input" name="titleNums" style="height: 22px; width: 47px;padding-left: 3px;">'+allSelectItem+'</select> 条</div>'+
                    '<div style="display:inline-block;">每次随机出 <select id="setUseTitleNums" class="input" name="titleNums" style="height: 22px; width: 47px;padding-left: 3px;">'+useSelectItem+'</select> 道题目</div>'+
                '</div>';
                var selectTitleBox = $(selectTitleBoxHtml);
                uploadInfoBox.before(selectTitleBox);
                
                selectTitleBox.find('#setAllTitleNums').val(answerList.len);
                selectTitleBox.find('#setUseTitleNums').val(answerNum);
                //selectTitleBox.find('#setUseTitleNums option:gt('+(answerList.len-1)+')').hide();
                $$('#setAllTitleNums').change(function(){
                    var titleNum = $(this).val();
                    
                    answerList.len = titleNum;
                    if( answerList.length < titleNum){
                        for(var i = answerList.length; i < titleNum; i++){
                            answerList.push({
                                "title" :"题目"+arr[i],
                                "answer":"正确答案",
                                "wrong":["错误答案","错误答案"]
                            });
                        } 
                    }
                    creatTitleList();

                    var $setUseTitleNums = $$('#setUseTitleNums');
                    var oldUseLen = parseInt( $$('#setUseTitleNums').val() );
                    $setUseTitleNums.empty();
                    $setUseTitleNums.append( createSelectItem(answerList.len) );
                    if(oldUseLen>answerList.len){
                        $setUseTitleNums.val(answerList.len);
                        $setUseTitleNums.change();
                    }else{
                        $setUseTitleNums.val(oldUseLen);
                    }
                    //selectTitleBox.find('#setUseTitleNums option').hide();
                    //selectTitleBox.find('#setUseTitleNums option:lt('+answerList.len+')').show();
                });

                $$('#setUseTitleNums').change(function(){
                    answerNum = parseInt( $(this).val() );
                    parent.$('.TheKlcfTips').text('该活动最高成绩为'+ answerNum*10 +'分');

                    if(parent.$('#drawLimit').val().trim() > answerNum*10){
                        parent.$('.tabSetting').each(function(){
                            if($(this).attr('option') == 3){
                                parent.changeTab($(this));
                            }
                        })
                        parent.$('.TheKlcfTips').hide();
                        parent.$('.MyLimit').show().html('请输入数字0-'+ answerNum*10);
                        parent.ERR.addErr(parent.$('#drawLimit'));
                    }else{
                        parent.ERR.removeErr(parent.$('#drawLimit'));
                        parent.$('.TheKlcfTips').text('该活动最高成绩为'+ answerNum*10 +'分');
                        parent.$('.MyLimit').hide();
                    }
                });
            
                var uploadMusicLine = '';
                for(var i = $$('.answerUploadBox').length; i < answerList.length; i++){
                    var answer = answerList[i];
                    arr[i] = arr[i].length == 1?(arr[i]+'&nbsp;'):arr[i];
                    uploadMusicLine += '<div class="answerUploadBox uploadLine" _index='+i+' >';
                    uploadMusicLine += addAnswerLine('题目'+arr[i],'题目',answer,'title',100);
                    uploadMusicLine += addAnswerLine('正确答案','答案',answer,'answer',60);
                    for(var j = 0; j < answer.wrong.length; j++){
                        uploadMusicLine += addAnswerLine("错误答案","答案",answer,'wrong',60,j);
                    }
                    uploadMusicLine += '</div>';
                }
                uploadInfoBox.append(uploadMusicLine);
                creatTitleList();

                $$('#uploadImgBox').on('blur','.answerLine .setAnswer',function(){                 
                    var val = $(this).val();
                    var key = $(this).attr('_key');
                    var index = $(this).parents('.answerUploadBox').attr('_index');

                    if(!$(this).hasClass('inputErr') ){
                        if(key === 'wrong'){
                            answerList[index][key][$(this).attr('_index')] = val;
                        }else if(key === 'rAnswer'){
                            answerList[ranser][key] = val;
                            rAnswer = val;
                        }else{
                            answerList[index][key] = val;
                        }
                    }

                }).on('keyup','.answerLine .setAnswer',function(){
                    var str = $(this).val()? $(this).val().replace(/[^\x00-\xff]/g, "**") : '';
                    var length = str.trim().length;
                    var count = 0, count1 = 0;
                    var maxLength = parseInt($(this).attr('data-length'));
                    for (var i = 0; i < str.length; i++){
                        var flat = str.substr(i, 1);
                        if (flat == "*") {
                            count++;
                        }else{
                            count1++;
                        }
                    }
                    var size = 0;
                    size = count + count1;

                    if( size == 0 || size > maxLength){
                        $(this).addClass("inputErr");
                        $(this).parent().find('.updMusicErr').show();
                    }else{
                        $(this).removeClass("inputErr");
                        $(this).parent().find('.updMusicErr').hide();
                    }
                });

                $$('#uploadImgBox').on('keyup','.answerLine .title',function(){
                    if($(this).parents('.answerUploadBox').attr('_index') == 0 ){
                        $('#titleList').text($(this).val())
                    }
                });

                $$('#uploadImgBox').on('keyup','.answerLine .answer',function(){
                    if($(this).parents('.answerUploadBox').attr('_index') == 0 ){
                        $('.answerItem').eq(0).find('.answer').text($(this).val());
                    }
                });

                $$('#uploadImgBox').on('keyup','.answerLine .wrong',function(){
                    if($(this).parents('.answerUploadBox').attr('_index') == 0 ){
                        $('.answerItem').eq(parseInt($(this).attr('_index')) + 1).find('.answer').text($(this).val());
                    }
                });

                $$('#uploadImgBox').data("editClose",function(){
                    $$('.answerUploadBox').eq(0).find('.setAnswer').each(function(i){
                        if($(this).val().length == 0){
                            var list = [answerList[0].answer].concat(answerList[0].wrong);
                            if(i == 0){
                                $('#titleList').text(answerList[0].title);
                            }else{
                                $('.answerItem').eq(i-1).find('.answer').text(list[i-1]);
                            }
                            
                        }
                    })
                    selectTitleBox.remove();
                    selectTitleBox = null;
                });

                function createSelectItem(num){
                    var selectItemStr = '';
                    for( var i = 1; i<= num; i++){
                        selectItemStr += '<option value="'+i+'">'+i+'</option>';
                    }
                    return selectItemStr;
                }

                function creatTitleList(){
                    var uploadMusicLine = '';
                    for( var j = 0; j < answerList.len; j++){
                        $$('.answerUploadBox').eq(j).removeClass('hide');
                    }
                    for(var i = answerList.len; i <= answerList.length; i++){
                        $$('.answerUploadBox').eq(i).addClass('hide');
                    } 
                    if($$('.answerUploadBox').length < answerList.length){
                        for(var i = $$('.answerUploadBox').length; i < answerList.length; i++){
                            var answer = answerList[i];
                            //arr[i] = arr[i].length == 1?(arr[i]+'&nbsp;'):arr[i];
                            uploadMusicLine += '<div class="answerUploadBox uploadLine" _index='+i+' >';
                            uploadMusicLine += addAnswerLine('题目'+arr[i],'题目',answer,'title',100);
                            uploadMusicLine += addAnswerLine('正确答案','答案',answer,'answer',60);
                            for(var j = 0; j < answer.wrong.length; j++){
                                uploadMusicLine += addAnswerLine("错误答案","答案",answer,'wrong',60,j);
                            }
                            uploadMusicLine += '</div>';
                        }
                        $$('#uploadInfoBox').append(uploadMusicLine);
                    }
                }

                function addAnswerLine(title,err,answer,key,len,index) {
                    var val = answer[key],keyStr = '_key="'+key+'"';
                    if(typeof index !== 'undefined'){
                        val = val[index];
                        keyStr += ' _index='+index;
                    }
                    val = HdGame.encodeHtml(val);
                    return '<div class="answerLine">'+
                        '<span class="flag">*</span><span class="answerTitle">'+title+'</span>'+
                        '<input type="text" class="setAnswer '+key+'" data-length="'+len+'" value="'+ val +'" '+keyStr+' >'+
                        '<div class="hide updMusicErr" >输入不能为空且长度不超过'+len/2+'个汉字或'+len+'个英文字母</div>'+
                    '</div>';
                }
                return false;
            });
        }else{
            stopTouchendPropagationAfterScroll();
            hg.time.on('end',function(){
                _gameOver = true;
                gameOver(hg.grade.val);
            });

            $('#readBtn').on('touchstart',function(e){
                $('.gopng_readyTips,.gopng_readyBtn').hide();
                $('.timer').show();
                var timeCount = 3;
                var timer = setInterval(function(){
                    if(timeCount <= 1){
                        clearInterval(timer);
                        $('.poupMask').hide();
                        hg.time.start();
                    }
                    timeCount -= 1;
                    $('.timer').addClass('gopng_'+timeCount);
                },500);
                
            });
            
            $('#nextBtn').on('touchstart',function(e){
                canAnswer = true;
                $('.answerItem .gopng_circle').each(function(){
                    $(this).removeClass('gopng_right gopng_error');
                })
                initGameByIndex(Math.floor(Math.random()*answerList.length));
            });
            $('#gameLayerBox').on('touchstart',function(e){
                if(_gameOver){
                    return;
                }
            });
            $('.answerItem').on('touchend',function(e){
                if(_gameOver){
                    return;
                }
                if(canAnswer){
                    if($(this).find('.answer').data('isAnswer')){
                        $(this).find('.gopng_circle').addClass('gopng_right');
                        hg.grade(10);
                        hg.sound.play(1);
                    }else{
                        $(this).find('.gopng_circle').addClass('gopng_error');
                        $('.answerItem').each(function(){
                            if($(this).find('.answer').data('isAnswer')){
                                $(this).find('.gopng_circle').addClass('gopng_right');
                            }
                        })
                        hg.sound.play(2);
                    }
                    canAnswer = false;
                } 
            });
            
            $('#checkBtn').on('touchstart',function(e){
                hg.time.end();
                gameOver(hg.grade.val);
            })
        }       
    });

    function getUpcaseArr(size){
        var arr = [];
        var upcaseArr = ['一','二','三','四','五','六','七','八','九'];
        for(var i=1;i<=size;i++){
            var upcaseStr = '';
            var decade = parseInt(i/10);
            if(decade>0){
                if(decade == 1){
                    upcaseStr += "十";
                }else{
                    upcaseStr += upcaseArr[decade-1] + "十";
                }
            }
            var unit = parseInt(i%10);
            if(unit != 0){
                upcaseStr += upcaseArr[unit-1];
            }
            
            arr.push(upcaseStr);
        }
        return arr;
    }

    function stopTouchendPropagationAfterScroll(){
        var locked = false;
        window.addEventListener('touchmove', function(ev){
            locked || (locked = true, window.addEventListener('touchend', stopTouchendPropagation, true));
        }, true);
        function stopTouchendPropagation(ev){
            ev.stopPropagation();
            window.removeEventListener('touchend', stopTouchendPropagation, true);
            locked = false;
        }
    }
    
    function initGameByIndex(index,flag) {
        answerCounter++;
        gameStatus.index = index;
        if( answerCounter > answerNum ){
            return;
        }

        if( answerCounter == answerNum ){
            $('.nextBtn').hide();
            $('.checkBtn').show();
        }

        var answer = answerList[index];
        var list = [answer.answer].concat(answer.wrong);
        var answerOrder = [0,1,2];
        $('#titleList').text(answer.title);
        if(!flag){
            $('.answer').each(function(i){
                var r = Math.floor(Math.random()*answerOrder.length);
                var el = $('.answer').eq(answerOrder[r]);
                el.text(list[i]).data("isAnswer",false);
                if(i == 0){
                    el.data("isAnswer",true);
                }
                answerOrder.splice(r,1);
            });
            answerList.splice(index,1);
        }else{
            $('.answer').each(function(i){
                var el = $('.answer').eq(answerOrder[i]);
                el.text(list[i]);
            });
        }
    }

    function showGamePage(){
        $('#ruleImg').hide();
        $('.homeBtnBox').hide();
        $('.footerBox').hide(); 
        $('.home').hide();
        $('#poupInfoBox').hide();
        $('.resuleBox').hide();
        $('.gameBox').show();   
    }
    function gameInit() {
        hg.grade.set(0);
        if(!_manage){
            _gameOver = false;
            hg.time.init();
            $('.nextBtn,.poupMask,.gopng_readyTips,.gopng_readyBtn').show();
            $('.timeUpImg').hide();
            $('.checkBtn,.poupMask .timer').hide();
            $('.poupMask .timer').removeClass('gopng_1 gopng_2');
            $('.gopng_circle').removeClass('gopng_right gopng_error')
            answerList = [{"title":"中国古代名医华佗为谁所杀？","answer":"曹操","wrong":["吕布","刘备"]},{"title":"中国农历的哪个节气有着北方吃饺子、南方吃汤圆的习俗？","answer":"冬至","wrong":["春节","元宵"]},{"title":"圆周率大约值是多少？","answer":"3.1416","wrong":["0.8664","1.7341"]},{"title":"一千克铁和一千克棉花哪个重？","answer":"一样重","wrong":["铁","棉花"]},{"title":"西游记中去西天取经的\u201C唐三藏\u201D真名叫什么？","answer":"玄奘","wrong":["唐僧","玄慈"]},{"title":"李白被后人称为？","answer":"诗仙","wrong":["诗鬼","诗圣"]},{"title":"《孙子兵法》的作者是？","answer":"孙武","wrong":["孙子","孙膑"]},{"title":"狗热时用什么散热？","answer":"舌头","wrong":["耳朵","皮肤"]},{"title":"2008年奥运会在哪里举办？","answer":"北京","wrong":["伦敦","里约热内卢"]},{"title":"火警电话是？","answer":"119","wrong":["114","911"]}];
            answerNum = 10
            answerCounter = 0; 
            canAnswer = true;
            initGameByIndex(Math.floor(Math.random()*answerList.length));
        }
    }
    function home(){
        $('#ruleImg').show();
        $('.homeBtnBox').show();
        $('.footerBox').show();
        $('.gameBox').hide();
        startBtnDelay();
        $('.home').show();
        $('#poupInfoBox').hide();
        $('.resuleBox').hide();
        gameInit();
    }   
    function gameRestart() {
        $('.gameBox').show();
        gameInit();
    }   
