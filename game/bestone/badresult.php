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
    <script type="text/javascript" src="js/jquery.SuperSlide.2.1.1.js"></script>
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
                var options = {num_answer:2,result:false,chance:true}
                result.ini(options);

          }
    </script>
    
</head>
<body>
<div class="pageWrapper">
    
    
    <div class="page bg-light-yellow">
        <div class="a_bg"><img src="img/a_bg2.png" alt=""></div>
    <!-- result 结果页 start -->
        <div class="result_wrapper inner_wrapper mar-center zindex ">
            <!-- 顶部栏 start -->
            <div class="score_info">
                <img src="img/range.png">
                <div id="gameTopBar" class="gameTopBar absCenter white" >
                    <div class="clear">
                        
                    </div>
                    
                    
                    <div class="relative">
                       
                        <div class="list_inner bd">
                            <ul class="marqueebox">
                                <li class="clear">
                                    <span class="iconmeta"><img src="img/icon1.png"></span>
                                    <span class="num">1</span>
                                    <span class="name">吴彦祖</span>
                                    <span class="points">100分</span>
                                    <span class="prizetime">2017-05-19 9:09</span>
                                </li>
                                <li class="clear">
                                    <span class="iconmeta"><img src="img/icon2.png"></span>
                                    <span class="num">2</span>
                                    <span class="name">吴彦祖</span>
                                    <span class="points">90分</span>
                                    <span class="prizetime">2017-05-19 9:09</span>
                                </li>
                                <li class="clear">
                                    <span class="iconmeta"><img src="img/icon3.png"></span>
                                    <span class="num">2</span>
                                    <span class="name">吴彦祖</span>
                                    <span class="points">90分</span>
                                    <span class="prizetime">2017-05-19 9:09</span>
                                </li>
                                <li class="clear">
                                    <span class="iconmeta"></span>
                                    <span class="num">2</span>
                                    <span class="name">吴彦祖</span>
                                    <span class="points">90分</span>
                                    <span class="prizetime">2017-05-19 9:09</span>
                                </li>
                                <li class="clear">
                                    <span class="iconmeta"></span>
                                    <span class="num">2</span>
                                    <span class="name">吴彦祖</span>
                                    <span class="points">90分</span>
                                    <span class="prizetime">2017-05-19 9:09</span>
                                </li>
                                <li class="clear">
                                    <span class="iconmeta"></span>
                                    <span class="num">2</span>
                                    <span class="name">last</span>
                                    <span class="points">90分</span>
                                    <span class="prizetime">2017-05-19 9:09</span>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
            <!-- 顶部栏 end -->
            <div class="result_all relative">
                <!-- 第一次 -->
                <div id="result01" class="innerResult ">
                    <div class="man mar-center"><img src="img/man3.png"></div>
                    <div class="text align-center">
                        <p class="tips01 red">很遗憾！您没有完全答对！</p>
                        <p class="tips02">
                            感谢您把挑选奖品的机会留给他人！ <br/>返回首页，继续答题
                        </p>
                        
                    </div>
                    <a id="returnHome" class="button cbutton return_first mar-center i_white" href="index.php">
                        <img class="full-img" src="img/close.png">
                        
                    </a>
                </div>
                <!-- 第一次 end-->
            </div>
             
            <!-- <div class="qr relative  align-center ">
                <div class="qr_inner mar-center"><img src="img/qr.png"></div>
                <span>润商网官方微信</span>
            </div>  -->  
            </div>
            
            <div class="homePoupMask02 hide" >
                <!-- 转发图标 start-->
                <div id="share_here" class="abs hide" style="z-index:10;top:0;right:1rem;width:80%">
                        <img src="img/share.png">
                </div>
                <!-- 转发图标 end-->
                <div id="skillSupPoup" class="homePoupInner img-center align-center ">
                    <div class="skillSupPoup_wrapper relative">
                        
                        <div class="window_close abs zindex"><img class="img-center close" src="img/close.png"></div>
                    </div>
                    
                </div>
            </div> 
            
        </div>
    <!-- result 结果页 end -->
    </div>
    
</div>
</body>
</html>