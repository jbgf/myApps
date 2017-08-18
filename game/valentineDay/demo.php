<?php include './head.html' ?>
    <div class="pageWrapper-bg">
           
                <!-- 背景 start -->
                <div class="a_bg"><img src="img/mainBg.jpg" alt="bg"></div>
                <!-- 背景 end -->
                
                <div class="pageMain">
                     
                     <div class="header07">
                        <div class="sm-button2">
                            <a><img src="img/smbutton2bg1.png">
                            <div class="text">
                                <div class="center">X20</div>
                            </div></a>
                         </div>
                        <div class="h-title01">
                            <i class="fa fa-comment" aria-hidden="true"></i>
                            礼品2
                        </div>
                    </div>

                    <div id="bgMusic" class="bgMusic"></div>
                    <script type="text/javascript">
                        $("#bgMusic").on("click",function(){$(this).toggleClass("off")})
                    </script>
                    <ul class="rows md-rows">
                        <li class="row-2-block">
                             <div class="md-button1 grayBg">
                                <a><img src="img/mdbutton1bg1.png">
                                <div class="text">
                                    <div class="center">帮好友搭桥</div>
                                </div></a>
                            </div>
                        </li>
                        <li class="row-2-block">
                             <div class="md-button1 blueBg">
                                <a><img src="img/mdbutton1bg2.png">
                                <div class="text">
                                    <div class="center">我也要搭桥</div>
                                </div></a>
                            </div>
                        </li>
                    </ul>
                     <div class=" sm-button2 ">
                        <a><img src="img/smbutton2bg1.png">
                        <div class="text">
                            <div class="center">X20</div>
                        </div></a>
                     </div>
                     <div class="indexTitle"><img src="img/indexTitle.png"></div>

                     

                    
                         
                     <div class="show-qr daqiao lg-button1 yellowBg">
                        <div class="daqiaoTips">
                            <div class="ht1Wrapper  hide">
                                <div class="helpFriends-text1">
                                    点击“我要搭桥”<br>
                                    先发起搭桥行动哦~
                                </div>
                                <div class="align-right"><img class="ht1-arrow" src="img/helpFriends-text1Arrow.png"></div>
                            </div>
                        </div><!-- 好友助力若未搭桥则提示“先搭桥” -->

                        <a><img src="img/lgbutton1bg1.png">
                        <div class="text">
                            <div class="center">我要搭桥</div>
                        </div></a>
                    </div>

                    <div class="helpFriends lg-button1 blueBg">
                        <a><img src="img/lgbutton1bg2.png">
                        <div class="text">
                            <div class="center">好友助力</div>
                        </div></a>
                    </div>

                    <div class="align-center">
                    <div class="show-rule buttonheart sm">
                        <a><img class="img-smbuttonheart" src="img/smbuttonheart.png">
                        <div class="text">
                            <div class="center">活动<br>规则</div>
                        </div></a>
                    </div>
                    <div class="show-prize buttonheart sm">
                        <a><img class="img-smbuttonheart" src="img/smbuttonheart.png">
                        <div class="text">
                            <div class="center">我的<br>奖品</div>
                        </div></a>
                    </div>
                    </div>   

                    <ul class="fri-ul hide">
                        <li><img src="img/f1.png"></li>
                        <li><img src="img/f2.png"></li>
                        <li><img src="img/f3.png"></li>
                        <li><img src="img/f4.png"></li>
                        <li><img src="img/f5.png"></li>
                    </ul>
                    <script type="text/javascript">
                        var imgs = $(".fri-ul img"),length = imgs.length;
                        $(".fri-ul img").each(function(i,e){
                            var src = e.src;
                                e.src = "";
                                e.src = src;
                                e.onload = function(){
                                    e.width = e.width/2;

                                }
                                
                                
                        })
                        setTimeout(function(){$(".fri-ul").show()},500);
                    </script>
                    
                    <div class="host-info align-center">
                        <img src="img/f1.png">本活动由正统网-正统商城主办
                    </div>
                </div>

            
    </div>

    <div class="modalZone">
         <div class="modalQr homePoupMask02 ">
                <div class="homePoupInner mar-center">
                    <div class="skillSupPoup_wrapper relative">
                        <div class="qr">
                             <img src="img/qr.png">
                             <p class="tips">长按关注，发起搭桥</p>
                        </div>
                    </div>
                    <div class="modalBox_close"><img src="img/close.png"></div>
                </div>
               
         </div>  <!-- 二维码弹窗 end -->

         <div class="modal-daqiao-tips homePoupMask02 "></div>  <!-- 搭桥提示弹窗 end -->
         <div class="modal-rule homePoupMask02 " >
                <div class="homePoupInner mar-center">
                    <div class="skillSupPoup_wrapper relative">
                        <div class="align-center">
                            <div class="show-rule header01 sm">
                                <a><img class="img-smbuttonheart" src="img/smbuttonheart.png">
                                <div class="text">
                                    <div class="center">活动规则</div>
                                </div></a>
                            </div>
                        </div>
                        <div class="content-box rule-box">
                            <p>1、一次性答对6道题，即可参与抽奖，100M流量大奖等着您。</p>
                            <p>2、每人每天有3次答题机会，转发可额外获得1次答题机会，每人每天最多有5次答题机会。</p>
                            <p>3、奖品将于活动结束后15个工作日内发放完毕。</p>
                            <p>4、一次性答对6道题，即可参与抽奖，100M流量大奖等着您。</p>
                        </div>
                        <div class="ab">
                            <img src="img/vab1.png">
                            <p>法律允许范围内，本活动解释权归正统商城所有</p>
                        </div>
                    </div>
                    <div class="modalBox_close"><img src="img/close.png"></div>
                </div>
               
         </div>  <!-- 规则弹窗 end -->
         <div class="modal-prize homePoupMask02 ">
                <div class="homePoupInner mar-center">
                    <div class="skillSupPoup_wrapper relative">
                        <div class="align-center">
                            <div class="show-rule header01 sm">
                                <a><img class="img-smbuttonheart" src="img/smbuttonheart.png">
                                <div class="text">
                                    <div class="center">我的奖品</div>
                                </div></a>
                            </div>
                        </div>
                        <div class="content-box prize-box">
                             <div class="pl-top rows">
                                   <div class="row-3-block">奖品名称</div>
                                   <div class="row-3-block">中奖时间</div>
                                   <div class="row-3-block">兑奖</div>
                             </div> 
                             <div class="swiper-container">
                                 <div class="prize-list swiper-wrapper">
                                        
                                       <div class="rows swiper-slide">
                                               <div class="row-3-block">七夕伴手礼</div>
                                               <div class="row-3-block">08-24 08:25</div>
                                               <div class="row-3-block">
                                                    <div class=" sm-button1 ">
                                                        <a><img src="img/smbutton1bg1.png">
                                                        <div class="text">
                                                            <div class="center">已填写</div>
                                                        </div></a>
                                                    </div>
                                               </div>
                                       </div>
                                       <div class="rows swiper-slide">
                                               <div class="row-3-block">XXXXXXXX...</div>
                                               <div class="row-3-block">08-24 08:25</div>
                                               <div class="row-3-block">
                                                    <div class=" sm-button1 blueBg">
                                                        <a><img src="img/smbutton1bg2.png">
                                                        <div class="text">
                                                            <div class="center">未填写</div>
                                                        </div></a>
                                                    </div>
                                               </div>
                                       </div>
                                       <div class="rows swiper-slide">
                                               <div class="row-3-block">XXXXXXXX...</div>
                                               <div class="row-3-block">08-24 08:25</div>
                                               <div class="row-3-block">
                                                    <div class=" sm-button1 blueBg">
                                                        <a><img src="img/smbutton1bg2.png">
                                                        <div class="text">
                                                            <div class="center">未填写</div>
                                                        </div></a>
                                                    </div>
                                               </div>
                                       </div>
                                       <div class="rows swiper-slide">
                                               <div class="row-3-block">XXXXXXXX...</div>
                                               <div class="row-3-block">08-24 08:25</div>
                                               <div class="row-3-block">
                                                    <div class=" sm-button1 blueBg">
                                                        <a><img src="img/smbutton1bg2.png">
                                                        <div class="text">
                                                            <div class="center">未填写</div>
                                                        </div></a>
                                                    </div>
                                               </div>
                                       </div>
                                 </div>
                             </div>
                             <script type="text/javascript">
                                 +function(){
                                        $(function(){
                                            
                                            var slidesNum = 3;
                                            
                                                $('.swiper-container').height(120);
                                                var swiper = new Swiper('.swiper-container', {
                                                    
                                                    direction: 'vertical',
                                                    slidesPerView:slidesNum,
                                                    observer:true,
                                                    observeParents:true,
                                                    loop:true
                                                });
                                        })
                                            
                                 }()
                             </script>
                        </div>
                        <div class="ab">
                            <img src="img/vab1.png">
                            <p>法律允许范围内，本活动解释权归正统商城所有</p>
                        </div>
                    </div>
                    <div class="modalBox_close"><img src="img/close.png"></div>
                </div>
               
         </div>  <!-- 奖品弹窗 end -->
         <div class="modal-starting homePoupMask02 "  style="">
             <img class="sharebird" src="img/sharebird.png" alt="">
             <div class="activitiesInfo starting align-center white">
                  <div class="shine"><img  src="img/staringInfo1.png"></div>
                  <p>赶紧提前通知好友</p>
             </div>
         </div>  <!-- 活动即将开始弹窗 end -->
         <div class="modal-end homePoupMask02 "  style="">
             
             <div class="activitiesInfo end align-center white">
                  <img src="img/endtips1.png">
                  <p>8月28日20:00<br>见证牛郎织女浪漫相会<br><span class="tips1">抢七夕伴手礼</span></p>
             </div>
         </div>  <!-- 活动结束，提示下一活动弹窗 end -->
         <div class="modal-fulled homePoupMask02 "  style="">
             
             <div class="activitiesInfo starting align-center white">
                  <img src="img/info2.png">
                  <div class="buttonheart shine">
                    <a><img class="img-smbuttonheart" src="img/smbuttonheart.png">
                    <div class="text">
                        <div class="center">搭桥</div>
                    </div></a>
                  </div>
             </div>
         </div><!-- 集齐商标，提示搭桥弹窗 end -->
         <div class="modal-share homePoupMask02 "  style="">
             <img class="sharebird" src="img/sharebird.png" alt="">
             <div class="clear"></div>
             <div class="tipsguide">
                <p class="hpm02-tipsInfo">
                    分享活动至好友或朋友圈
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
         </div><!-- 好友助力，提示搭桥弹窗 end -->
         <div class="modal-infoComplete homePoupMask02 "  style="">
             
             <div class="activitiesInfo info2 align-center white">
                  <div class="align-center img1" ><img src="img/giftboximg.png" alt=""></div>  
                  <div class="shine"><img  src="img/info3.png"></div>
                  <p>8月28日20:00<br>见证牛郎织女浪漫相会<br><span class="yellow">抢七夕伴手礼</span></p>
             </div>
         </div>  <!-- 兑奖页面已填写弹窗 end -->
    </div>
    <script type="text/javascript">
        


        var flag = 1;
        var mp3 = "bgmusic04H.mp3";
        audioEngine.init([mp3]);    
        audioEngine.playMusic(mp3, false);
        $("#bgMusic").on("touchend",function(){
            if(flag){
                flag = 0;
                audioEngine.stopMusic()
            }else{
                flag = 1;
                audioEngine.playMusic(mp3, false);
            }
        })
        /*若未关注，点击我要搭桥，则弹出二维码弹窗,已关注则跳转搭桥*/
        if(1){
            setModal(".modalQr",".show-qr a")
        }else{}    
        /*若未搭桥，点击我要助力，则提示搭桥，若已搭桥跳转到助力搭桥*/
        if(1){
            var ht1Wrapper = $(".ht1Wrapper");
            setModal(".modal-daqiao-tips",".helpFriends")
            .on("show",function(){
                ht1Wrapper.show();
                $(".show-qr").addClass("bgUpZindex")
            })
            .on("close",function(){
                ht1Wrapper.hide();
                
                $(".show-qr").removeClass("bgUpZindex")
            });
        }else{

        }
        setModal(".modal-rule",".show-rule")  /*规则弹窗*/
        setModal(".modal-prize",".show-prize")  /*奖品弹窗*/
        /*若未开始活动，则提示通知好友*/
        if(0){
            setModal(".modal-starting")
        }else{}
        /*若未已结束，则提示搭桥结束*/
        if(0){
            setModal(".modal-end");
        }else{}
        /*若集齐商标，则提示搭桥*/
        if(0){
            setModal(".modal-fulled")
        }else{}
        /*若XXX，则提示微信分享*/
        if(0){
            setModal(".modal-infoComplete")
        }else{}
       if(0){setModal(".modal-share")}     /*好友助力，提示搭桥弹窗 end */
    </script>

</body>
</html>  