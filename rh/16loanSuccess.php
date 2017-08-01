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

        
        <div class="form6 bg-white">
            <form class="mainWidth2">
                <div class="align-center">
                    <img style="width:97px" src="img/ba2.png">
                    <p class="successInfo" style="color:#000;font-size: 1.2rem;padding-top: 0.5rem">恭喜您提交成功</p>
                </div>
                <div style="padding:2.5rem 0 1.5rem">
                    <a><button class="button1 bg-red" type="submit">
                        查看质量证书
                    </button>
                    </a>
                </div>
                 
            </form>
        </div>
        </div>
    </div>  
</body>
</html>