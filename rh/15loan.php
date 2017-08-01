<?php include './head.html' ?>

    <div class="header10">
        <ul class="type2">
            <li>
                <div class="inner">
                    装修需求
                </div>
            </li>
            <li>
                <div class="inner">
                    工人需求
                </div>
            </li>
            <li class="on">
                <div class="inner">
                    设计需求
                </div>
            </li>
            <li>
                <div class="inner">
                    装修贷款
                </div>
            </li>
        </ul>
    </div><!-- header10 type2 -->

    <div class="mainContent">
        
        <div class="lWrapper" style="position: relative;">
            <img class="displayBlock" style="" src="img/pic01.png">
            <div class="tri1"></div>
            <script type="text/javascript">
            +function makeTri(){
                var width = $(".tri1").parent().width()/2 + 'px';
                var height = 1;
                $(".tri1").css({
                    'display': 'inline-block',
                    'width': 0,
                    'height': 0,
                    'vertical-align': 'top',
                    'border-bottom':''+height+'rem solid #fff',
                    'border-left':''+width+' solid transparent',
                    'border-right':''+width+' solid #fff',
                    'border-top':''+height+'rem solid transparent',
                    'position':'absolute',
                    left:0,right:0,bottom:0
                })
                
            }()
            
        </script>
        </div>
        
        <!-- 地区选择插件 -->
        <link rel="stylesheet" type="text/css" href="css/mobile-select-area.css">
        <link rel="stylesheet" type="text/css" href="css/dialog.css">
        <!-- <script type="text/javascript" src="../dist/zepto.js"></script> -->
        <script type="text/javascript" src="js/dialog.js"></script>
        
        <script type="text/javascript" src="js/mobile-select-area.js"></script>
        <div class="form6 bg-white" style="">
            <form class="mainWidth2">
                <div class="header13">
                    <div class="h-title01">快速申请专享贷</div>
                    <div class="border"></div>
                </div>
                <input type="text" name="" placeholder="姓名">
                <input type="text" name="" placeholder="手机">
                <input id="txt_area" class="adr" type="text" name="" placeholder="地址">
                <div style="padding:2.5rem 0 1.5rem">
                    <a><button class="button1 bg-red" type="submit">
                        查看质量证书
                    </button>
                    </a>
                </div>
                <script>
                    var selectArea = new MobileSelectArea();
                    selectArea.init({trigger:$('#txt_area'),value:'',data:'data.json',position:'bottom'});
                </script>
            </form>
        </div>
        
    </div>  
</body>
</html>