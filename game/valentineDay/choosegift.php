<?php include './head.html' ?>
    
    <div class="pageWrapper-bg" >
                <div class="a_bg"><img src="img/mainBg.jpg" alt="bg"></div>
                <div class="fly-birds canvasZone"></div>
                <div class="pageMain" style="margin-top: -20%;">
                    <div class="gift-wrapper">  
                    <div class="indexTitle2"><img style="margin-left: 1rem;" src="img/indexTitle2.png"></div> 
                    <p class="gift-tips align-center">每天不定量礼品可供挑选<br>今天不选，若不怕错过，可明天再来~</p>
                    
                        <ul class="gift-box ">
                            <li class="row-block " data-id="0">
                                <div class="inner">
                                <a><div class="header07">
                                    <div class=" sm-button2">
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
                                <div class="inner-bottom">
                                    <img src="img/gift.png">
                                </div>
                                </div>
                            </li>
                            <li class="row-block grayfilter">
                                <div class="inner">
                                <div class="header07">
                                    <div class=" sm-button2">
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
                                <div class="inner-bottom">
                                    <img src="img/gift.png">
                                </div>
                                </div>
                            </li>
                            <li class="row-block">
                                <div class="inner">
                                <div class="header07">
                                    <div class=" sm-button2">
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
                                <div class="inner-bottom">
                                    <img src="img/gift.png">
                                </div>
                                </div>
                            </li>
                            <li class="row-block">
                                <div class="inner">
                                <div class="header07">
                                    <div class=" sm-button2">
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
                                <div class="inner-bottom">
                                    <img src="img/gift.png">
                                </div>
                                </div>
                            </li>
                            <li class="row-block">
                                <div class="inner">
                                <div class="header07">
                                    <div class=" sm-button2">
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
                                <div class="inner-bottom">
                                    <img src="img/gift.png">
                                </div>
                                </div>
                            </li>
                            <li class="row-block">
                                <div class="inner">
                                <div class="header07">
                                    <div class=" sm-button2">
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
                                <div class="inner-bottom">
                                    <img src="img/gift.png">
                                </div>
                                </div>
                            </li>
                        </ul>
                        <script type="text/javascript">
                            $(function(){
                                var button = $(".lg-button1.blueBg");
                                var buttonText = button.find(".center");
                                $(".gift-box .row-block:not(.grayfilter)").on("touchend",function(){
                                    $(this).toggleClass("on").siblings().removeClass("on")
                                    if(judgeOn()){
                                        buttonText.text("确定")
                                    }else{
                                        buttonText.text("明天再来")
                                    }    
                                });
                                button.on("touchend",function(){
                                    var id = judgeOn();

                                    if(id){
                                        alert(id)
                                        /*location.href = ""*/
                                    }else{
                                        alert('明天再来')
                                    }
                                })
                                function judgeOn(){
                                    
                                    var id = $(".gift-box .row-block.on").attr("data-id")
                                    return id;
                                }
                            })
                            
                        </script>
                    </div>

                    <div class="lg-button1 blueBg">
                        <a><img src="img/lgbutton1bg2.png">
                        <div class="text">
                            <div class="center">明天再来</div>
                        </div></a>
                    </div>

                    <div class="host-info align-center">
                        <img src="img/f1.png">本活动由正统网-正统商城主办
                    </div>
                    
                </div>

           
    </div>

   
    
</body>
</html>  