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

            <div id="tag"></div>

            <div class="sideBar02">
                <ul class="sideBar_ul">
                    <li class="sideBar_li ">
                        <a class="sideBar_a">
                            <p>
                            <span class="iconBg"><i class="iconfont ">&#xe6ae;</i></span>
                            <span class="icontext">level 1</span>
                            </p>
                        </a>
                        <ul class="sideBar_ul hide" style="">
                            <li class="sideBar_li">
                                <a class="sideBar_a">
                                    <p>
                                        <span class="icontext">- level 2</span>
                                    </p>
                                </a>
                                <ul class="sideBar_ul hide" style="">
                                    <li class="sideBar_li ">
                                        <a class="sideBar_a">
                                            <p>
                                                <span class="icontext">- level 3 A</span>
                                            </p>
                                        </a>
                                    </li>
                                    <li class="sideBar_li ">
                                        <a class="sideBar_a">
                                            <p>
                                                <span class="icontext">- level 3 B</span>
                                            </p>
                                        </a>    
                                    </li>
                                </ul>
                            </li>
                            <li class="sideBar_li ">
                                <a class="sideBar_a">
                                    <p>
                                        <span class="icontext">- 修改账户信息</span>
                                    </p>
                                </a>    
                            </li>
                        </ul>
                    </li>
                    
                    <li class="sideBar_li ">
                        <a class="sideBar_a">
                            <p>
                                <span class="iconBg"><i class="iconfont ">&#xe601;</i></span>
                                <span class="icontext">委托单信息</span>
                            </p>
                        </a>
                        
                    </li>
                    
                    <li class="sideBar_li">
                        <a class="sideBar_a">
                            <p>
                                <span class="iconBg"><i class="iconfont ">&#xe66c;</i></span>
                                <span class="icontext">网上委托</span>
                            </p>
                        </a>
                    </li>
                    <li class="sideBar_li">
                        <a class="sideBar_a">
                            <p>
                                <span class="iconBg"><i class="iconfont ">&#xebc8;</i></span>
                                <span class="icontext">帮助中心</span>
                            </p>
                        </a>
                    </li>
                </ul>
                <script type="text/javascript">
                    $(function(){
                        var sb02 = $(".sideBar02");

                        sb02.find(".sideBar_li").each(function(i,e){
                            var isLevelOne = $(e).isChildOf(sb02);
                            var childList = $(e).children("ul.sideBar_ul");
                                childList.length>0 ? 
                                $(e).children(".sideBar_a").addClass("childList")
                                    .on("click",function(){
                                                childList.slideToggle();
                                                $(this).toggleClass("on expand")
                                    })
                            : isLevelOne ? "" : $(e).children(".sideBar_a").addClass("bottom");

                        })

                    })
                    
                </script>
            </div>
        </div> 
    </div>
      
       
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->  
    
<?php include './common/centerfoot.html' ?>    