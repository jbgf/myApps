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

                        $(".sideBar02 .sideBar_li").each(function(i,e){
                            var childList = $(e).children("ul.sideBar_ul");
                                childList.length>0 ? 
                                $(e).addClass("childList")
                                    .on("click",function(){
                                                childList.slideToggle();
                                                $(this).toggleClass("on")
                                    })
                            : $(e).children(".sideBar_a").addClass("bottom");
                        })
        
                    })
                    
                </script>
            </div>
        </div> 
        <div class="rightWrapper">
            <div class="header02 clear">
              <div class="more float-l">你的位置：<a href="/">网站首页</a> &gt; <a href="/index.php?s=news&amp;c=category&amp;id=1">产品检测范围</a>&gt;<a href="/index.php?s=news&amp;c=category&amp;id=36">食品理化检测</a>                              
              </div>
            </div>
            <div class="">
                <div class="c_contentPart">
                    <form id="solutionF" class="solution_form mar-center clear" enctype="multipart/form-data">
                            
                             <div class="form-row height-auto">
                                 <div class="un-block-1 align-right  ">
                                     <span>用户名：</span>
                                 </div>
                                 <div class="un-block-2">
                                    <span>123456789</span>
                                 </div>
                             </div>
                        
                             <div class="form-row height-auto">
                                 <div class="un-block-1 align-right  ">
                                     <span>手机号：</span>
                                 </div>
                                 <div class="un-block-2">
                                     <span>123456789</span>
                                 </div>
                             </div> 
                             <div class="form-row height-auto">
                                 <div class="un-block-1 align-right  ">
                                     <span>企业正式名称：</span>
                                 </div>
                                 <div class="un-block-2">
                                    <div class="baseInput" data-name="company">XXXXXX有限公司</div>
                                 </div>
                                 
                             </div>
                             <div class="form-row height-auto">
                                 <div class="un-block-1 align-right  ">
                                     <span>统一社会信用代码：</span>
                                 </div>
                                 <div class="un-block-2">
                                    <div class="baseInput">123456982556565</div>
                                 </div>
                                 
                             </div>
                             
                             <div class="form-row height-auto">
                                 <div class="un-block-1 align-right  ">
                                     <span>公司地址：</span>
                                 </div>
                                 <div class="un-block-2">
                                     <div class="baseInput">福建省福州市鼓楼区</div>
                                   
                                </div>
                                
                             </div>
                             <div class="form-row height-auto">
                                 <div class="un-block-1 align-right  ">
                                     <span>营业执照：</span>
                                 </div>
                                 <div class="un-block-2">
                                    <div class="baseInput" data-name="cor_otherid">894.jpg</div>
                                     
                                 </div>
                                 <div class="un-block-3">
                                    <div class="upload_btn">修改 </div>
                                 </div>
                                 
                             </div>
                             <div class="form-row height-auto">
                                 <div class="un-block-1 align-right  ">
                                     <span>组织机构代码证： </span>
                                 </div>
                                 <div class="un-block-2">
                                    <div class="baseInput">894.jpg</div>
                                 </div>
                                 <div class="un-block-3">
                                    <div class="upload_btn">修改 </div>
                                 </div>
                                 
                             </div>
                             <div class="form-row height-auto">
                                 <div class="un-block-1 align-right  ">
                                     <span>法人代表身份证扫描件：</span>
                                 </div>
                                 <div class="un-block-2">
                                    <div class="baseInput" >894.jpg</div> 
                                 </div>
                                 <div class="un-block-3">
                                    <div class="upload_btn">修改 </div>
                                 </div>
                             </div>

                             <div class="form-row height-auto">
                                 <div class="un-block-1 align-right  ">
                                     <span>授权代理人身份证扫描件：</span>
                                 </div>
                                 <div class="un-block-2">
                                    <div class="baseInput">894.jpg</div> 
                                 </div>
                                 <div class="un-block-3">
                                    <div class="upload_btn">修改 </div>
                                 </div>
                             </div>

                             <div class="form-row height-auto">
                                 <div class="un-block-1 align-right  ">
                                     <span>公司公章或授权代理人签名扫描件：</span>
                                 </div>
                                 <div class="un-block-2">
                                    <div class="baseInput">894.jpg</div> 
                                 </div>
                                 <div class="un-block-3">
                                    <div class="upload_btn">修改 </div>
                                 </div>
                             </div>

                             <div class="form-row submit-row">
                                 <div class="un-block-1"></div>
                                 <div class="un-block-2 ">
                                    <button id="register_btn" class=" white font-weight cursor" type="submit" value="">保存</button>
                                 </div>
                                 
                                 <div class="un-block-3 "></div>
                             </div>
                             <script type="text/javascript">
                                 $(function(){
                                    

                                    var label = $("#agreeLabel");
                                    var rBtn = $("#register_btn");
                                    uploadBtn($(".upload_btn"));
                                    
           
                                 })
                                 
                             </script>
                    </form>
                </div> 
            </div>
        </div>  
    </div>
      
       
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->  
    
<?php include './common/centerfoot.html' ?>    