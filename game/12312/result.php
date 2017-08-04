<?php include './head.html' ?>
<div class="pageWrapper">
    <!-- 规则页 start -->
    <div class="page bg_waterblue">
    <div class="absfull">
        <img class="full-wh" src="img/a_bg5.jpg">
    </div>
    <!-- result 结果页 start -->
        <div class="result_wrapper mar-center ">
        <!-- 结果1 ：中奖 -->
            <div class="result-inner result-inner1 hide">
            <div class="result">

              <img src="img/a_bg6.png">

              
              <div class="result_score abs">
                <div class="img-box"><img src="img/logo.png"></div>
                <div>
                    <p>看来您一定是XXX小达人！ </p>
                    <p class="scores">您的得分：<span >100分</span></p>
                </div>
                
              </div>
            </div>
            <div class="button">
                <a><img src="img/buttonbg1.png">
                <div class="text">
                    <div class="center">点击抽奖</div>
                </div></a>
            </div>
            </div>
        <!-- 结果1 ：中奖 -->
        <!-- 结果2 ：未中奖 -->
            <div class="result-inner result-inner2 ">
                <div class="result">

                  <img src="img/a_bg7.png">

                  <div class="result_score abs">
                    <div class="img-box"><img src="img/logo.png"></div>
                    <div>
                        <p>可惜啊，您和抽奖机会擦肩而过 </p>
                        <p class="scores">您的得分：80分</p>
                        <!-- 快说，您有几题是蒙的？
                        闯关尚未成功，同志仍需努力
                        您是不是每题都选C？
                        快告诉我我，您是如何成功避开所有正确答案的？ -->
                    </div>
                    
                  </div>
                </div>
                <div  class="button ">
                    <div class="come_again">
                        <img src="img/buttonbg1.png">
                        <div class="text">
                            <div class="center">再来一次</div>
                        </div>
                    </div>
                </div>
                <div class="tellyou">
                        温馨提示：转发可获得一次新的答题机会。
                        <br>每天最多可答题5次。
                </div>
            </div>
        <!-- 结果2 ：未中奖 -->    
        <!-- 分享朋友圈 start -->
            <div id="skillSupMask" class="homePoupMask02 " >
                    <div class="img-box" style="top:0;right:0;text-align:right;">
                        <img src="img/share.png">
                    </div>
                    <div id="skillSupPoup" class="homePoupInner mar-center">
                        <div class="skillSupPoup_wrapper relative">
                        
                        <div class="text">再来一次</div>
                        <div class="tips tips1 ">
                            <p class="hpm02-tipsInfo">
                                转发分享，可获得1次答题机会， 每天最多分享2次。
                            </p>
                            <div class="hpm02-guide">
                                <p>
                                    1、点击右上角 
                                </p>
                                <p>
                                    2、点击<img src="img/share1.png">或<img src="img/share2.png">分享 
                                </p>
                            </div>
                        </div>

                        <div class="tips tips2 hide">
                            <p class="hpm02-tipsInfo">
                                感谢您的参与， 
                                <br>您今天的答题机会已经用完， 
                                <br>请明天再来挑战。
                            </p>
                            
                        </div>

                        </div>
                    </div>
                    <div class="modalBox_close button">
                        <img src="img/buttonbg1.png">
                        <div class="text">
                            <div class="center">我知道了</div>
                        </div>
                    </div>
                    
            </div>
        <!-- 分享朋友圈 end -->
        </div>
    <!-- result 结果页 end -->
    <div class="index-bottom">
        <p class="index-tech">
            主办单位：福建省商务厅<br>技术支持：福建润商网络技术有限公司
        </p>  
    </div>
    </div>
</div>
<script type="text/javascript">
    result.ini();
</script>
</body>
</html>