<?php include './head.html' ?>

    <div class="pageWrapper">
   
            
                <!-- 背景 start -->
                <div class="a_bg"><img src="img/mainBg.jpg" alt="bg"></div>
                <!-- 背景 end -->
                <div id="flyAndDrop" class="canvasZone"></div>
                <div class="pageMain" style="margin-top: -15%;">
                     
                     <div class="avatar">
                        <img class="bg" src="img/avatar1bg.png">
                        <div class="text">
                            <div class="middle">
                                <div class="avatar1 ">
                                    <img src="img/avatar1.png">
                                </div>
                                <div class="name ellipsis " style="">猪猪猪猪猪猪猪猪猪猪猪猪猪猪猪猪猪猪猪猪猪猪猪猪猪猪猪猪猪猪猪猪猪猪猪猪</div>
                            </div>
                        </div>
                     </div>
                     <div class="brandbg">
                     </div>
                     <ul class="rows md-rows">
                        <li class="row-2-block">
                            <div id="bridge" class="help1 md-button1 yellowBg" >     <!-- 一天仅有一次机会加 class hide -->
                                <a><img src="img/mdbutton1bg0.png">
                                <div class="text">
                                    <div class="center">我要搭桥</div>
                                </div></a>
                            </div>
                            <div class="help2 md-button1 grayBg hide">    
                                <a><img src="img/mdbutton1bg1.png">
                                <div class="text">
                                    <div class="center">我要搭桥</div>
                                </div></a>
                            </div>
                        </li>
                        <li class="row-2-block">
                            <!-- 一天仅有一次机会加 class hide -->
                            
                            <div class="help1 show-share md-button1 blueBg">
                                <a class=""><img src="img/mdbutton1bg2.png">
                                <div class="text">
                                    <div class="center">好友助力</div>
                                </div></a>
                            </div>
                            <div  class="help2 md-button1 grayBg hide">
                                <a><img src="img/mdbutton1bg1.png">
                                <div class="text">
                                    <div class="center">好友助力</div>
                                </div></a>
                            </div>
                        </li>
                    </ul>
                         
                     
                    
                    
                </div>
                <div class="host-info align-center">
                    <img src="img/f1.png">本活动由正统网-正统商城主办
                </div>
           
    </div>

    <div class="modal-brand homePoupMask02 " >
            <div class="homePoupInner mar-center">
                <div class="skillSupPoup_wrapper relative">
                    <div class="brandBox">
                        <div class="align-center">
                            <img id="brandImg" src="img/f5.png" alt="">
                            <div class="title">品牌故事</div>
                        </div>
                        <div id="brandStory">
                            品牌故事品牌故事品牌故事品牌，故事品牌故事品牌故事，品牌故事品牌故事品牌故事品牌故事品牌故事品牌故事，品牌故事品牌故事品牌故事
                        </div>
                        <div class="title" style="margin-top: 1rem;">本期礼品</div>
                        <div class="picText1">
                            <ul>
                                <li>
                                    <div class="picText1-left align-center">
                                         <img id="giftPic" src="img/gift.png" alt="">
                                    </div>
                                    <div id="giftText" class="picText1-right">
                                         Melais防漏吸管运动水 杯大容量塑料健身水壶
                                    </div>
                                </li>
                                <li>
                                    <div class="picText1-left align-center">
                                         <img id="giftPic" src="img/gift.png" alt="">
                                    </div>
                                    <div id="giftText" class="picText1-right">
                                         Melais防漏吸管运动水 杯大容量塑料健身水壶
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div id="link" class="link"></div>
                    </div>
                </div>
                <div class="modalBox_close"><img src="img/close.png"></div>
            </div>
           
    </div>  <!-- 品牌故事弹窗 end -->
         
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
    <audio id="audio">
        <source src="bonus.mp3" type="audio/mpeg">
    </audio>
    <script type="text/javascript">
         $(function(){

            var thisJson = {                  /*本次搭桥获得的品牌data*/
                brandImg:"img/f5.png",
                story:"storystorystorystorystorystorystory",
                gift:[
                    {
                         giftPic:"img/gift.png",
                         giftText:"Melais防漏吸管运动水 杯大容量塑料健身水壶",
                    },
                    {
                         giftPic:"img/gift.png",
                         giftText:"2",
                    }
                ],
               
                link:"<a href='http://www.baidu.com'>上正统商城【远山旗舰店】，了解更多产品>></a>"
            };

            var birdOption = {                                            /* 喜鹊的配置*/
                    data:thisJson,      
                    birdImgsArr:['img/bird1.png','img/bird2.png'],      /*喜鹊动作图片*/
            };

            var allData = {
                mode:0,
                birdSpeed:10,
                birdWrapper:"#flyAndDrop",
                birdmp3:"bonus.mp3",
                brandNum:30,                     /*所有商标的数量*/
                brandJsons:[                     /*之前搭桥获得的所有品牌data*/
                            /*{
                                brandImg:"img/f5.png",
                                story:"storystorystorystorystorystorystory",
                                gift:[
                                    {
                                         giftPic:"img/gift.png",
                                         giftText:"Melais防漏吸管运动水 杯大容量塑料健身水壶",
                                    },
                                    {
                                         giftPic:"img/gift.png",
                                         giftText:"2",
                                    }
                                ],
                                link:"<a href='http://www.baidu.com'>上正统商城【远山旗舰店】，了解更多产品>></a>"
                            },
                            {
                                brandImg:"img/f1.png",
                                story:"storystorystorystorystorystorystory",
                                gift:[
                                    {
                                         giftPic:"img/gift.png",
                                         giftText:"Melais防漏吸管运动水 杯大容量塑料健身水壶",
                                    },
                                    {
                                         giftPic:"img/gift.png",
                                         giftText:"2",
                                    }
                                ],
                                link:"<a>dream!</a>"
                            },
                            {
                                brandImg:"img/f5.png",
                                story:"storystorystorystorystorystorystory",
                                gift:[
                                    {
                                         giftPic:"img/gift.png",
                                         giftText:"Melais防漏吸管运动水 杯大容量塑料健身水壶",
                                    },
                                    {
                                         giftPic:"img/gift.png",
                                         giftText:"2",
                                    }
                                ],
                                link:"<a href='http://www.baidu.com'>上正统商城【远山旗舰店】，了解更多产品>></a>"
                            },
                            {
                                brandImg:"img/f1.png",
                                story:"storystorystorystorystorystorystory",
                                gift:[
                                    {
                                         giftPic:"img/gift.png",
                                         giftText:"Melais防漏吸管运动水 杯大容量塑料健身水壶",
                                    },
                                    {
                                         giftPic:"img/gift.png",
                                         giftText:"2",
                                    }
                                ],
                                link:"<a>dream!</a>"
                            },
                            {
                                brandImg:"img/f5.png",
                                story:"storystorystorystorystorystorystory",
                                gift:[
                                    {
                                         giftPic:"img/gift.png",
                                         giftText:"Melais防漏吸管运动水 杯大容量塑料健身水壶",
                                    },
                                    {
                                         giftPic:"img/gift.png",
                                         giftText:"2",
                                    }
                                ],
                                link:"<a href='http://www.baidu.com'>上正统商城【远山旗舰店】，了解更多产品>></a>"
                            },
                            {
                                brandImg:"img/f1.png",
                                story:"storystorystorystorystorystorystory",
                                gift:[
                                    {
                                         giftPic:"img/gift.png",
                                         giftText:"Melais防漏吸管运动水 杯大容量塑料健身水壶",
                                    },
                                    {
                                         giftPic:"img/gift.png",
                                         giftText:"2",
                                    }
                                ],
                                link:"<a>dream!</a>"
                            }*/
                        ],
                complete:function(){                /*若集齐商标，则提示搭桥*/
                        setModal(".modal-fulled")
                }
            }
            
            var brand = new brandWall(allData);                       
                $(".help1").on("click",function(){
                    /*判断能否“我要搭桥”*/
                    if(1)$(this).addClass("hide").siblings(".help2").removeClass("hide")
                })    
                  
                setModal(".modal-share",".show-share",function(trigger){
                    /*判断能否“我要助力”*/
                    if(1)$(trigger).addClass("hide").siblings(".help2").removeClass("hide")   
                }); 
                
              setModal(".modal-fulled")
                $("#bridge").on("click",function(){
                      brand.birds(birdOption);
                })
                  
         })
    </script>

</body>
</html>  