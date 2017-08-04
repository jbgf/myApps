<?php include './head.html' ?>
<script type="text/javascript">
    window.onload = function(){
        var options = {
            /*题目*/
            answerList : [
                {"question_id":10,
                "title":"中国古代名医华佗为谁所杀？",
                "answer":["曹操曹操曹操曹操曹操曹操曹操曹操曹操曹操曹操曹操","自己（多选测试）"],
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
            answerNum:6,                 
            mode:"random",
            /*每题时间,单位S*/
            time:30,        
            points_per:1,/*每题分数*/       
        }
        game.ready(options);
              
    }    

</script>
<div class="pageWrapper">
    <!-- answer 答题页面 start -->
    
    <div class="page bg_waterblue">
       
        <!-- answer 答题页面 start -->
        <div class="answer_page_wrapper inner_wrapper gameBox mar-center ">
             <!-- ready页面 start-->
             <div class="poupMask">
                    
                
                    <div id="" class="homePoupInner skillSupPoup">
                        <div class="p-logoRow">
                            <div class="p-logoRow-inner">
                                <div class="img"><img src="img/logo.png"></div>
                                <div class="tips">12312小贴士</div>
                            </div>
                        </div>
                        <div class="tips01 ">
                            <div class="tipsBg tipsBg1">
                                <img style="margin-left: 22%;" src="img/tipsBg01.png">
                            </div>
                            <p class="tipsInfo">
                                <span>"12312”</span>是全国统一、规范运作的 
                                <span>商务举报投诉</span>服务中心的热线电话。
                            </p>
                        </div>
                        <div class="tips01">
                            <div class="tipsBg tipsBg2">
                                <img style="margin-left: 10%;" src="img/tipsBg02.png">
                            </div>
                            <p class="tipsInfo">
                                <span>"12312”</span>接受社会公众对<span>特许经营、单用
                                途商业预付卡、零售商促销、零供交易、成
                                品油市场管理、原油市场管理、拍卖、再生
                                资源回收、报废汽车回收、二手车管理、直
                                销行业管理、旧电子电器产品流通、家政服
                                务业、美容美发、洗染、技术进口出口、对
                                外劳务合作、对外承包工程等内外贸、外经
                                领域和反倾销、反补贴、反垄断等流通领域</span>
                                的举报投诉。
                            </p>
                        </div>
                        <div class="tips01">
                            <div class="tipsBg tipsBg3">
                                <img style="" src="img/tipsBg03.png">
                            </div>
                            <p class="tipsInfo">
                                <span>"12312”</span>采集、上报<span>危害商务流通秩序的
                                突然事件和国内外贸易中的异常情况以及市
                                场经济秩序</span>方面的重要消息。
                            </p>
                        </div>
                        
                    </div>
                    <div id="startAnswer" class="button">
                        <img src="img/buttonbg1.png">
                        <div class="text">
                            <div class="center">开始答题</div>
                        </div>
                    </div>
                   
             </div>
             <div class="poupMask1 ">
                 <div id="skillSupPoup1" class="homePoupInner img-center ">
                    <div class="imgBox right">
                        <img class="man" src="img/rightBg.png">
                        <div class="resultInfo">
                            <span class="textRight">您答对了！真棒！</span>
                        </div>
                    </div>
                    <div class="imgBox wrong">
                        <img class="man" src="img/wrongBg.png">
                        <div class="resultInfo">
                            <div class="textWrong">您答错了！真遗憾！</div> 
                            <div class="answerIs"></div>   
                        </div>

                    </div>
                    <div id="results-startAnswer" class="button">
                        <img src="img/buttonbg1.png">
                        <div class="text">
                            <div id="nextOne" class="center">挑战下一题</div>
                        </div>
                    </div>
                 </div>
             </div>
             <!-- 答题区 start -->
             <div class="absfull">
                <img class="full-wh" src="img/a_bg4.png">
             </div>

             <!-- answer 答题页面 start -->
             <div class="answer_wrapper gameBox mar-center ">
                                  
                 <div class="score_info">
                    
                    <div id="gameTopBar" class="gameTopBar white" >
                        <div class="time middleTable float-r" >
                            
                            <div class="tableRow">
                                <div class="cell"><span class="indexItem"></span></div>
                                <div class=" cell">
                                    <div class="textW">倒计时<span class="timeCount "></span>秒</div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="logo"><img src="img/logo.png"></div>
                        
                    </div>
                 </div>
                 
                 <!-- 答题区 start -->
                 <div class="select">
                    <div class="s-title-wrapper">
                        <span id="titleList"></span>
                    </div>
                    <div id="txtContBox" class="txtContBox" >
                        
                        <div id="answerList" class="">
                                     
                        </div>
                    </div>
                 </div>
                 <!-- 答题区 end -->
                 <div class="index-bottom">
                 <p class="index-tech white">
                    主办单位：福建省商务厅<br>技术支持：福建润商网络技术有限公司
                 </p>
                 </div>
             </div> 
             <!-- 答题区 end -->
        </div> 

    </div>
    <!-- answer 答题页面 end -->
   
</div>
</body>
</html>