<?php include './common/centerhead.html' ?>
<link rel="stylesheet" type="text/css" href="css/home.css">
<link rel="stylesheet" type="text/css" href="css/font-awesome.css">

<link rel="stylesheet" type="text/css" href="iconfont/iconfont.css">

<script type="text/javascript" src="js/home.js"></script>
<script type="text/javascript" src="js/jquery.validate.js"></script>


<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
      
    <div class="banner middleTable" style="background:url(img/banner04.jpg) center center">
        <div class="middleRow">
            <div class="banner_inner">
                <div class="introduceBox">
                    <div class="bigh white">
                        企业中心
                    </div> 
                    <div class="e white">
                        Enterprise Center
                    </div> 
                </div>
            </div>    
        </div>
    </div>
    <div class="centerMiddle container1000">
        <div class="leftSide">
            <div class="sideBar02">
                <ul class="sideBar_ul">
                    <li class="sideBar_li ">
                        <a class="sideBar_a">
                            <p>
                            <span class="iconBg"><i class="iconfont ">&#xe6ae;</i></span>企业信息       
                            </p>
                        </a>
                        <ul class="list outer hide" style="">
                            <li class="list_li">
                                <a class="item">
                                <p class="t01">- 修改密码<span class="caret"></span></p></a>
                            </li>
                            <li class="list_li">
                                <a class="item"><p class="t01">- 修改账户信息<span class="caret"></span></p></a>
                            </li>
                        </ul>
                    </li>
                    
                    <li class="sideBar_li on">
                        <a class="sideBar_a"><p>
                            <span class="iconBg"><i class="iconfont ">&#xe601;</i></span>委托单信息</p>
                        </a>
                        
                    </li>
                    
                    <li class="sideBar_li">
                        <a class="sideBar_a">
                        <p><span class="iconBg"><i class="iconfont ">&#xe66c;</i></span>网上委托</p>
                        </a>
                    </li>
                    <li class="sideBar_li">
                        <a class="sideBar_a">
                            <p><span class="iconBg"><i class="iconfont ">&#xebc8;</i></span>帮助中心</p>
                        </a>
                    </li>
                </ul>
                <script type="text/javascript">
                    $(function(){
                        $(document).on("click",".sideBar_li",function(){
                            var list = $(this).next(".list");
                            list.length>0 
                            && list.slideToggle();
                        });
                        $(document).on("click",".list_li",function(){
                            var list = $(this).next(".list");
                            list.length>0 
                            && (list.slideToggle(),$(this).toggleClass("on"));
                        })
                    })
                    
                </script>
            </div>
        </div> 
    </div>
      
       
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->  
    
<?php include './common/centerfoot.html' ?>    