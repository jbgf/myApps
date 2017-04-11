<?php include './common/centerhead.html' ?>
<link rel="stylesheet" type="text/css" href="css/home.css">
<link rel="stylesheet" type="text/css" href="css/font-awesome.css">
<link rel="stylesheet" type="text/css" href="iconfont/iconfont.css">
<script type="text/javascript" src="js/jquery.validate.js"></script>
<script type="text/javascript" src="js/home.js"></script>


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
                            <span class="iconBg"><i class="iconfont ">&#xe6ae;</i></span>
                            <span class="icontext">企业信息</span>
                            </p>
                        </a>
                        <ul class="sideBar_ul hide" style="">
                            <li class="sideBar_li">
                                <a class="sideBar_a">
                                    <p>
                                        <span class="icontext">- 修改密码</span>
                                    </p>
                                </a>
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
                <div class="ulAddon"></div>
                <script type="text/javascript">
                    $(function(){
                        var sideBar = {
                            'data-string':"open",
                            ini:function(){
                                    $(".sideBar02 .sideBar_li").each(function(i,e){
                                        var childList = $(e).children("ul.sideBar_ul");
                                            childList.length>0 ? 
                                            $(e).addClass("childList")
                                                .on("click",function(){
                                                            childList.slideToggle();
                                                            $(this).toggleClass("on")
                                                })
                                        : $(e).children(".sideBar_a").addClass("bottom");
                                    });
                                    this.active();        
                            },
                            active:function(){
                                var string = this["data-string"];
                            }   
                        };
                        sideBar.ini();

                        
        
                    })
                    
                </script>
            </div>
        </div> 
        <div class="rightWrapper">
            <div class="header02 clear">
              <div class="more float-l">你的位置：<a href="/">网站首页</a> &gt; <a href="/index.php?s=news&amp;c=category&amp;id=1">产品检测范围</a>&gt;<a href="/index.php?s=news&amp;c=category&amp;id=36">食品理化检测</a>                              
              </div>
            </div>
            <div class="commonWrapper">
            <form class="solution_form mar-center clear">
                 <div class="form-row">
                     <div class="un-block-1 align-right mediumSize">
                         <span class="red">*</span><span>当前手机号码：</span>
                     </div>
                     <div class="un-block-2">
                         <span>12345678901</span>
                     </div>
                     
                 </div>
                 <div class="form-row height-auto">
                     <div class="un-block-1 align-right mediumSize">
                         <span class="red">*</span><span>新手机号：</span>
                     </div>
                     <div class="un-block-2">
                        <input class="baseInput" name="phoneNum" type="text" required>
                        <p class="tips_p">请输入11位数字手机号码</p>
                     </div>
                     
                 </div>
                 <div class="form-row height-auto">
                         
                     <div class="un-block-1 align-right mediumSize">
                         <span class="red">*</span><span>验证码：</span>
                     </div>
                     <div class="un-block-2">
                        <div class="codeRow">
                            <div class="ciWrapper">
                            <input class="baseInput codeInput" name="verify" type="text"  required="" aria-required="true">
                            </div>
                            <div class="codeBWrapper">
                                    <a><div class="codeBtn" style="background:#ff9235;">获取验证码</div></a>
                            </div>
                        </div>
                        <p class="tips_p">请输入手机验证码</p>
                     </div>
                     
                 </div>
                 
                 <div class="form-row submit-row">
                     <div class="un-block-1"></div>
                     <div class="un-block-2 ">
                        <button id="register_btn" class="white font-weight cursor" type="submit" value="">确定修改</button>
                     </div>
                     <div class="un-block-3"></div>
                 </div>
                 <script type="text/javascript">
                     
                     $(".solution_form").validate({
                                rules: {
                                      phoneNum:{
                                        required:true,
                                        isTel:true
                                      }
                                },
                                errorPlacement:function(label,element){

                                },
                                success:function(label,element){
                                    $(element).data("validate",true);

                                }
                     });
                 </script>
            </form>
            </div>
        </div>  
    </div>
      
       
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->  
    
<?php include './common/centerfoot.html' ?>    