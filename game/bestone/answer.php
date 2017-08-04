<!DOCTYPE html>
<html>

<head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <link rel="stylesheet" type="text/css" href="css/base.css">
    <link rel="stylesheet" type="text/css" href="css/frame.css">
    <link rel="stylesheet" type="text/css" href="css/home.css">
    <script type="text/javascript" src="js/fastclick.js"></script>
    <script type="text/javascript" src="js/jquery.min.js"></script>
    
    <script type="text/javascript" src="js/home.js"></script>

    <script type="text/javascript">
           /*fastclick start*/
           if ('addEventListener' in document) {
                document.addEventListener('DOMContentLoaded', function() {
                    FastClick.attach(document.body);
                }, false);
            }
          /*fontSize */
          (function htmlFontSize (){
                    var rate = 19;
                    var baseFontSize;
                    var clientWidth = document.documentElement ? document.documentElement.clientWidth : document.body.clientWidth;
                        if(clientWidth > 640) clientWidth = 640;

                        baseFontSize = clientWidth * 1/rate;
                        document.documentElement.style.fontSize = baseFontSize+"px";
                        /*document.body.style.fontSize = baseFontSize+"px";*/
                        
                        return clientWidth * 1/rate;
          })();
          window.onload = function(){
        
                /*var array = {$alist};
                
                var b_array = [];
                    $.each(array,function(i,e){

                        var obj = {};
                            obj['title'] = e.title;
                        var answer = e.result;    
                        var wrong_array = [];
                            for(var j = 0 ,l  = e.options.length;j<l;j++){
                                 if(e.options[j][1] == answer){
                                    answer = e.options[j][0];
                                 }else{
                                    wrong_array.push(e.options[j][0]);
                                 }
                            }
                            obj['answer'] = answer;
                            obj['wrong'] = wrong_array;
                            
                            b_array.push(obj);
                            console.log(b_array);
                        
                    })*/
               
                var options = {
                    /*题目*/
                    answerList : [
                        {"question_id":10,
                        "title":"中国古代名医华佗为谁所杀？",
                        "answer":["曹操","自己（多选测试）"],
                        "wrong":["吕布","刘备","以上皆是"]
                        },
                        {"question_id":10,"title":"中国农历的哪个节气有着北方吃饺子、南方吃汤圆的习俗？",
                        "answer":["冬至"],
                        "wrong":["春节","元宵","以上皆是"]},
                        {"question_id":10,"title":"圆周率大约值是多少？",
                         "answer":["3.1416"],
                         "wrong":["0.8664","1.7341","以上皆是"]},
                         {"question_id":10,"title":"一千克铁和一千克棉花哪个重？",
                         "answer":["一样重","你重（多选测试）"],
                         "wrong":["铁","棉花"]},
                         {"question_id":10,"title":"西游记中去西天取经的\u201C唐三藏\u201D真名叫什么？",
                         "answer":["玄奘","悟空（多选测试）"],
                         "wrong":["唐僧","玄慈","以上皆是"]},
                         {"question_id":10,"title":"李白被后人称为？",
                         "answer":["诗仙"],
                         "wrong":["诗鬼","诗圣","以上皆是"]},
                         {"question_id":10,"title":"《孙子兵法》的作者是？",
                         "answer":["孙武"],"wrong":["孙子","孙膑"]},
                         {"title":"狗热时用什么散热？",
                         "answer":["舌头","空调（多选测试）"],"wrong":["耳朵","皮肤"]},
                         {"question_id":10,"title":"2008年奥运会在哪里举办？",
                         "answer":["北京"],"wrong":["伦敦","里约热内卢"]},
                         {"question_id":10,"title":"火警电话是？",
                         "answer":["119","10086（多选测试）"],"wrong":["114","911"]}],
                    /*题数*/
                    answerNum:2,
                    mode:"random"
                }
                game.ready(options);
             
            }
    </script>
    
</head>
<body>
<div class="pageWrapper">
    
    <!-- answer 答题页面 start -->
    <!-- result 结果页 start -->
    <div class="page bg-light-yellow">
        <div class="absfull">
            <img class="full-wh" src="img/a_bg4.png">
        </div>
       

        <!-- answer 答题页面 start -->
        <div class="answer_wrapper inner_wrapper gameBox mar-center hide">
             
             
             <div class="score_info">
                
                <div id="gameTopBar" class="gameTopBar  white" >
                    <div class="time float-r" >
                        <img src="img/countDown.png">
                        <div class="absfull">
                            <div class="textW middleTable full-wh">
                                <div class="middleRow">倒计时<span class="timeCount "></span>秒</div>
                            </div>
                        </div>
                    </div>
                    <div class="logo"><img src="img/logo.png"></div>
                    <div class="tips relative">
                        <div class="wrapper">
                            <span class="indexItem"></span><span>（共10道题，每道答题时间30秒）</span>
                        </div>
                    </div>
                </div>
             </div>
             
             <!-- 答题区 start -->
             <div class="select">
                <img id="select_bg" class="full-wh" src="img/a_bg3.png">
                
                <div id="txtContBox" class="txtContBox absCenter" >
                    <div class=""><span id="titleList"></span></div>
                    <div id="answerList" class="">
                                 
                    </div>
                </div>
             </div>
             <!-- 答题区 end -->
             <div class="nextone">
                 <img src="img/nextone.png">
             </div>
        </div> 
    </div>
    <!-- answer 答题页面 end -->
    <!-- result 结果页 end -->
</div>
</body>
</html>