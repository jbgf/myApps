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
                    var rate = 25;
                    var baseFontSize;
                    var rootElement = document.documentElement ? document.documentElement : document.body;
                    var clientWidth = rootElement.clientWidth;
                        if(clientWidth > 640) clientWidth = 640;

                        baseFontSize = clientWidth * 1/rate;
                        
                        rootElement.style.fontSize = baseFontSize+"px";
                        
                        return clientWidth * 1/rate;
          })();
        
    </script>
    
</head>
<body>
<div class="pageWrapper">
    <!-- 首页 start --> 
    <div class="page">
	    <!-- 背景 start -->
    	<div class="a_bg"><img src="img/a_bg.jpg" alt=""></div>
    	<!-- 背景 end -->
        <div class="first_wrapper">
            
        
                <div class=" zindex relative" style="padding-top:0;">
                    <img id="a_bg8" class="a_bg8" src="img/a_bg8.png">
                    
                        <div class=" abs" style="width: 33%;bottom: -7.2rem;right: 0;">
                            <img src="img/man1.png">    
                        </div>
                        <div class="rulePage abswidth align-center" style="bottom: 2rem;">
                            <img src="img/btnbg02.png" style="width: 33%;">
                        </div>
                    
                </div>    
                 

                 <div class="absBottom ">
                     <a id="start_answer" class="button cbutton return_first mar-center i_white zindex" href="answer.php">
                        <img class="full-img" src="img/btnbg04.png">
                        <div class="absmiddle mar-center full-widthCenter">
                            <!-- <span class="text" style="">   开始答题</span> -->
                        </div>
                     </a>   
                     
                 </div>    
                 
                 <!-- 规则页 start -->
                <div class="homePoupMask02 hide" >
                        <div id="skillSupPoup" class="homePoupInner  img-center align-center ">
                            <div class="skillSupPoup_wrapper relative" >
                                <div class="bg">
                                    <img src="img/a_bg3.png">
                                </div>
                                <div id="rule_details" style="text-align:left;line-height:1.3rem;">
                                    
                                    <div class="rule_icon align-center"><img src="img/rule_icon.png" style="width:45%;"></div>
                                    <div style="">
                                        <p style="">
                                            1、总共10道题目，每道题作答时间为30秒，每答对1题获得10分，答题错误或者超时则不得分。 
                                        </p>
                                        <p>
                                            2、每个人不限答题次数。 
                                        </p>
                                        <p style="">
                                            3、全部答对获得满分即可挑选奖品。
                                        </p>
                                        <p style="">
                                            4、按照取得满分的顺序获得挑选奖品的优先权。
                                        </p>
                                        
                                    </div>
                                    
                                </div>
                            
                            <div class="window_close"><img class="close" src="img/close.png"></div>
                            </div>
                        </div>
                </div>
                <!-- 规则页 end -->
         </div>                             
    </div>
    <!-- 首页 end -->
    

    
    
</div>
</body>
</html>