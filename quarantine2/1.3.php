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
                
                <div  class="searchform01 mar-center " >
                         
                       <div class="form-row height-auto">
                           <div class="un-block-1 align-right  ">
                               <span>企业正式名称：</span>
                           </div>
                           <div class="un-block-2">
                              <input class="baseInput" data-name="company">
                           </div>
                           <div class="un-block-3">
                              <a><div class="searchBtn">查询</div></a>
                           </div>
                           
                       </div>
                         
                </div>

                <div id="show_newsTW">
                   
                    <p class="epTable_t">报验结果</p>
                    <table>
                        <tbody>
                            <tr>
                                <td>委托单编号</td>
                                <td>报告编号</td>
                                <td>委托时间</td>
                                <td>样品名称</td>
                                <td>联系人</td>
                                <td>支付状态</td>
                                <td>订单状态</td>
                                <td>查询密码</td>
                                <td>报告下载</td>
                            </tr>
                            <tr>
                                  <td>
                                      3113117183
                                  </td>
                                  <td>
                                      123456
                                  </td>
                                  <td>
                                     2017-02-21 
                                  </td>
                                  <td>
                                      样品
                                  </td>
                                  <td>
                                      张三
                                  </td>
                                  <td>
                                     未支付 <br/><span class="link">立即支付 </span>
                                  </td>
                                  <td>
                                      <i class="fa fa-clock-o" aria-hidden="true"></i>
                                      <br/>预报检
                                  </td>
                                  <td>
                                      123
                                  </td>
                                  <td>
                                     <p>
                                        <span class="print link" data-url="common/test.pdf">打印</span> 
                                        <span class="cancel link">取消</span>
                                     </p>
                                     <span class="link">报告下载 </span>
                                  </td>

                            </tr>
                            <tr>
                                  <td>
                                      3113117183
                                  </td>
                                  <td>
                                      123456
                                  </td>
                                  <td>
                                     2017-02-21 
                                  </td>
                                  <td>
                                      样品
                                  </td>
                                  <td>
                                      张三
                                  </td>
                                  <td>
                                     未支付 <br/><span class="link">立即支付 </span>
                                  </td>
                                  <td>
                                      <i class="fa fa-thumb-tack" aria-hidden="true"></i>
                                      <br/>预报检
                                  </td>
                                  <td>
                                      123
                                  </td>
                                  <td>
                                     <p>
                                        <span class="print link">打印</span> 
                                        <span class="cancel link">取消</span>
                                     </p>
                                     <span class="link">报告下载 </span>
                                  </td>

                            </tr>
                            <tr>
                                  <td>
                                      3113117183
                                  </td>
                                  <td>
                                      123456
                                  </td>
                                  <td>
                                     2017-02-21 
                                  </td>
                                  <td>
                                      样品
                                  </td>
                                  <td>
                                      张三
                                  </td>
                                  <td>
                                     未支付 <br/><span class="link">立即支付 </span>
                                  </td>
                                  <td>
                                      <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
                                      <br/>预报检
                                  </td>
                                  <td>
                                      123
                                  </td>
                                  <td>
                                     <p>
                                        <span class="print link" data-url="common/test.pdf">打印</span> 
                                        <span class="cancel link">取消</span>
                                     </p>
                                     <span class="link">报告下载 </span>
                                  </td>

                            </tr>
                            <tr>
                                  <td>
                                      3113117183
                                  </td>
                                  <td>
                                      123456
                                  </td>
                                  <td>
                                     2017-02-21 
                                  </td>
                                  <td>
                                      样品
                                  </td>
                                  <td>
                                      张三
                                  </td>
                                  <td>
                                     月结
                                  </td>
                                  <td>
                                      <i class="fa fa-check-circle" aria-hidden="true"></i>
                                      <br/>预报检
                                  </td>
                                  <td>
                                      123
                                  </td>
                                  <td>
                                     <p>
                                        <span class="print link" data-url="common/test.pdf">打印</span> 
                                        <span class="cancel link">取消</span>
                                     </p>
                                     <span class="link">报告下载 </span>
                                  </td>

                            </tr>
                        
                        </tbody>
                        <script type="text/javascript">
                            $("#show_newsTW .print").on("click",function(){
                                var url = $(this).attr("data-url");
                                if(url)print(url);
                            })
                        </script>
                    </table>
                </div>
            </div>
        </div>  
    </div>
      
       
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->  
    
<?php include './common/centerfoot.html' ?>    