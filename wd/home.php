<?php include 'head.html' ?>
   <div class="middlePart">
        <div class="banner02" style="background:url(img/banner02.jpg) center center no-repeat;">
        
        </div>
        
        <!-- scollspy start -->
        <div  id="myScrollspy1">
            <div class="row">
                    <div class="container1150" style="position: relative;"> 
                        <div class="nav " >
                            <div class="top">
                                <img src="img/staffixTop.png">
                                <div class="topbody">
                                    <div class="text">
                                        <p>全国咨询电话</p>
                                        <p>400-0858-319</p>
                                    </div>
                                    <a href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzkzODA3MDY3OV80MDI1ODFfNDAwMDg1ODMxOV8yXw" class="qqbtn">
                                      <img src="img/qqbtn.png">
                                    </a>
                                </div>
                            </div>
                            <div  class="scrollTop">
                                <div class="stWrapper">
                                    <img src="img/scrollTop.png">
                                </div>
                            </div>
                        </div>
                   </div> 
            </div>
        </div>
        <script type="text/javascript">
            $(function(){
                +function scrollAffix(){
                    var ww = $(window).width();
                    var nav = $("#myScrollspy1 .nav");
                    var ot = $("#myScrollspy1").offset().top - 200;
                    var msh = nav.height();
                    var minWidth = 10000; 
                    var timer0 = null;
                    var timer = null;
                    var seconds = 10;
                    var _ms = 10000; /*1000ms 不滚动则滚动条消失*/    
                        $("#myScrollspy1").affix({
                            offset:{
                                top:ot,
                                bottom: function () {

                                return (this.bottom = 
                                    $('.footer').outerHeight(true) + msh) 
                                }
                            }
                        })

                        nav.show();
                        
                        /*返回顶部*/
                        $(".scrollTop").on("click",function(){
                            
                                
                                if(requestAnimationFrame){
                                    cancelAnimationFrame(timer);
                                    timer = requestAnimationFrame(function fn(){
                                        var oTop = document.body.scrollTop || document.documentElement.scrollTop;
                                        if(oTop > 0){
                                            document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
                                            timer = requestAnimationFrame(fn);
                                        }else{
                                            cancelAnimationFrame(timer);

                                        }
                                    });
                                }else{
                                    clearTimeout(timer);
                                    timer = setTimeout(function fn(){
                                        var oTop = document.body.scrollTop || document.documentElement.scrollTop;
                                        if(oTop > 0){
                                            document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
                                            timer = setTimeout(fn,seconds);
                                        }else{
                                            clearTimeout(timer);
                                        }
                                    },seconds)
                                }
                                
                            
                        })
                        
                       
                    
                }()  
            })
            
        </script>

        <div class="homeProductCenterTab">
            <div class="header03">
                <div class="h-title01">产品中心</div>
            </div>
            <div id="tab04"  class="slideTxtBox tab04" >
                <div class="hd">

                    <ul>
                        <li>
                            <div class="hdInner">行业动态</div></li>
                        <li>
                            <div class="hdInner">活动信息
                            </div>
                        </li>
                        <li>
                            <div class="hdInner">宣传展示
                            </div>
                        </li>
                        <li>
                            <div class="hdInner">营销互动
                            </div>
                        </li>
                        <li>
                            <div class="hdInner">推广吸粉
                            </div>
                        </li>
                        <li>
                            <div class="hdInner">行业应用
                            </div>
                        </li>
                                                              
                    </ul>
                    
                </div>
                <div class="bd">
                    <div class="switch">
                        <div class="container1150">
                            <div class="pWrapper03">
                                <div class="prow03">
                                    <div class="productDiamond productDiamond_1">
                                      <a href="#">
                                      <div class="str-inner">
                                          <div class="pic">
                                              <img src="img/iconBg07.png">
                                          </div>
                                          <div class="title">零售业全渠道电商整体解决方案</div>
                                          <div class="text">微分销</div>
                                      </div>
                                      </a>
                                    </div>
                                    <div class="productDiamond productDiamond_2">
                                      <div class="str-inner">
                                          <div class="pic">
                                              <img src="img/iconBg08.png">
                                          </div>
                                          <div class="title">零售业全渠道电商整体解决方案</div>
                                          <div class="text">微分销</div>
                                      </div>
                                    </div>
                                    <div class="productDiamond productDiamond_3">
                                      <div class="str-inner">
                                          <div class="pic">
                                              <img src="img/iconBg09.png">
                                          </div>
                                          <div class="title">零售业全渠道电商整体解决方案</div>
                                          <div class="text">微分销</div>
                                      </div>
                                    </div>
                                    <div class="productDiamond productDiamond_4">
                                      <div class="str-inner">
                                          <div class="pic">
                                              <img src="img/iconBg10.png">
                                          </div>
                                          <div class="title">零售业全渠道电商整体解决方案</div>
                                          <div class="text">微分销</div>
                                      </div>
                                    </div>
                                    <div class="productDiamond productDiamond_5">
                                      <div class="str-inner">
                                          <div class="pic">
                                              <img src="img/iconBg11.png">
                                          </div>
                                          <div class="title">零售业全渠道电商整体解决方案</div>
                                          <div class="text">微分销</div>
                                      </div>
                                    </div>
                                    <div class="productDiamond productDiamond_6">
                                      <div class="str-inner">
                                          <div class="pic">
                                              <img src="img/iconBg12.png">
                                          </div>
                                          <div class="title">零售业全渠道电商整体解决方案</div>
                                          <div class="text">微分销</div>
                                      </div>
                                    </div>
                                    <div class="productDiamond productDiamond_7">
                                      <div class="str-inner">
                                          <div class="pic">
                                              <img src="img/iconBg08.png">
                                          </div>
                                          <div class="title">零售业全渠道电商整体解决方案</div>
                                          <div class="text">微分销</div>
                                      </div>
                                    </div>
                                    <div class="productDiamond productDiamond_8">
                                      <div class="str-inner">
                                          <div class="pic">
                                              <img src="img/iconBg14.png">
                                          </div>
                                          <div class="title">零售业全渠道电商整体解决方案</div>
                                          <div class="text">微分销</div>
                                      </div>
                                    </div>
                                    <div class="productDiamond productDiamond_9">
                                      <div class="str-inner">
                                          <div class="pic">
                                              <img src="img/iconBg15.png">
                                          </div>
                                          <div class="title">零售业全渠道电商整体解决方案</div>
                                          <div class="text">微分销</div>
                                      </div>
                                    </div>
                                    <div class="productDiamond productDiamond_10">
                                      <div class="str-inner">
                                          <div class="pic">
                                              <img src="img/iconBg16.png">
                                          </div>
                                          <div class="title">零售业全渠道电商整体解决方案</div>
                                          <div class="text">微分销</div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="switch">


                    </div>
                </div>
            </div>
            <script type="text/javascript">
                
                +function tab04(){ //news tab切换
                    jQuery("#tab04").slide(); }()

            </script>
        </div>
        <div class="banner03" style="background:url(img/banner03.jpg) center center no-repeat;">
            <p class="text">微店管家，至今我们服务了 <span id="servedNum" class="num servedNum">105080</span> 个商家，创造价值（交易额）上亿</p>
            <script type="text/javascript">
                +function(){
                    var numDiv = $("#servedNum"),
                    value = numDiv.text(),differ = 100 ,
                    differi = 5,
                    differt = 10,
                    valueNow = value - differ;
                    numDiv.text(valueNow);
                    +function myTimer(){
                        var flag = valueNow >= value,
                            add = Math.round(Math.random()*differi),
                            randomTime = Math.round(Math.random()*differt);
                            
                            if(flag){return false;}
                            valueNow += add;
                            numDiv.text(valueNow);
                            setTimeout(myTimer,randomTime*1000);
                    }()
                }()
                
            </script>
        </div>
        <div class="homeSolutionPt">
            <div class="container1150">
                <div class="header03">
                    <div class="h-title01">解决方案</div>
                </div>
                <div class="homeSPtRow">
                    <div class="hspt">
                        <div class="str-inner">
                            <div class="hsptBlock ">
                                <div class="img">
                                  <img src="img/hspt.jpg">
                                  <div class="info-hover">
                                      <h3 class="ih-title">微商城解决方案</h3>
                                      <div class="ih-text">
                                          微分销（即微信分销），在大数据时代背景下企业数据营销方式，是基于微信公众平台定制研发，专门为品牌公司和商家提供微信连锁商城、微分销渠道的三级分销微信商城体系，微分销助力商家高粘度、快速将自媒体转化为自有分销商。 
                                      </div>
                                  </div>
                                </div>
                                <div class="hspt-bottom">
                                    <div class="bdvantageRow">
                                        <div class="row-block">
                                            <div class="inner">
                                                <i class="iconfont">&#xe62c;</i>
                                                <div class="title middleTable">
                                                  <div class="middleRow">会员系统</div>
                                                </div>
                                                <div class="bdText">
                                                    会员管理代理管理客服会员管理代理管理客服
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row-block">
                                            <div class="inner">
                                                <i class="iconfont">&#xe69c;</i>
                                                <div class="title middleTable">
                                                  <div class="middleRow">数据魔方</div>
                                                </div>
                                                <div class="bdText">
                                                    会员管理代理管理客服会员管理代理管理客服
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row-block">
                                            <div class="inner">
                                                <i class="iconfont">&#xe6ae;</i>
                                                <div class="title middleTable" >
                                                    <div class="middleRow">ERP对接</div>
                                                </div>
                                                <div class="bdText">
                                                    会员管理代理管理客服会员管理代理管理客服
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row-block">
                                            <div class="inner">
                                                <i class="iconfont">&#xe608;</i>
                                                <div class="title middleTable">
                                                    <div class="middleRow">可视化
                                                    <br>模板装修
                                                    </div>
                                                </div>
                                                <div class="bdText">
                                                    会员管理代理管理客服会员管理代理管理客服
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text">
                                        <div class="hspt_title">微营销解决方案</div>
                                        <div class="hspt_text">开启PC+手机+APP全网分销新时代传统企业可将线下渠道一键上线，实现线上线下互通,客户倍增。</div>
                                    </div>
                                    <p class="hspt-p">他们正在使用</p>
                                    <ul class="link">
                                        
                                        <li class="linkBlock">
                                            <div class="str-inner">
                                                <div class="link-inner"><img src="img/homelink.png"></div>
                                            </div>
                                        </li>
                                        <li class="linkBlock">
                                            <div class="str-inner">
                                                <div class="link-inner"><img src="img/homelink.png"></div>
                                            </div>
                                        </li>
                                        <li class="linkBlock">
                                            <div class="str-inner">
                                                <div class="link-inner"><img src="img/homelink.png"></div>
                                            </div>
                                        </li>
                                   
                                        <li class="linkBlock">
                                            <div class="str-inner">
                                                <div class="link-inner"><img src="img/homelink.png"></div>
                                            </div>
                                        </li>
                                       
                                    </ul>
                                    <p class="hspt-p align-right"><a>进入微分销专题页 ></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hspt">
                        <div class="str-inner">
                            <div class="hsptBlock ">
                                <div class="img">
                                  <img src="img/hspt.jpg">
                                  <div class="info-hover">
                                      <h3 class="ih-title">微商城解决方案</h3>
                                      <div class="ih-text">
                                          微分销（即微信分销），在大数据时代背景下企业数据营销方式，是基于微信公众平台定制研发，专门为品牌公司和商家提供微信连锁商城、微分销渠道的三级分销微信商城体系，微分销助力商家高粘度、快速将自媒体转化为自有分销商。 
                                      </div>
                                  </div>
                                </div>
                                <div class="hspt-bottom">
                                    <div class="bdvantageRow">
                                        <div class="row-block">
                                            <div class="inner">
                                                <i class="iconfont">&#xe62c;</i>
                                                <div class="title middleTable">
                                                  <div class="middleRow">会员系统</div>
                                                </div>
                                                <div class="bdText">
                                                    会员管理代理管理客服会员管理代理管理客服
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row-block">
                                            <div class="inner">
                                                <i class="iconfont">&#xe69c;</i>
                                                <div class="title middleTable">
                                                  <div class="middleRow">数据魔方</div>
                                                </div>
                                                <div class="bdText">
                                                    会员管理代理管理客服会员管理代理管理客服
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row-block">
                                            <div class="inner">
                                                <i class="iconfont">&#xe6ae;</i>
                                                <div class="title middleTable" >
                                                    <div class="middleRow">ERP对接</div>
                                                </div>
                                                <div class="bdText">
                                                    会员管理代理管理客服会员管理代理管理客服
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row-block">
                                            <div class="inner">
                                                <i class="iconfont">&#xe608;</i>
                                                <div class="title middleTable">
                                                    <div class="middleRow">可视化
                                                    <br>模板装修
                                                    </div>
                                                </div>
                                                <div class="bdText">
                                                    会员管理代理管理客服会员管理代理管理客服
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text">
                                        <div class="hspt_title">微营销解决方案</div>
                                        <div class="hspt_text">开启PC+手机+APP全网分销新时代传统企业可将线下渠道一键上线，实现线上线下互通,客户倍增。</div>
                                    </div>
                                    <p class="hspt-p">他们正在使用</p>
                                    <ul class="link">
                                        
                                        <li class="linkBlock">
                                            <div class="str-inner">
                                                <div class="link-inner"><img src="img/homelink.png"></div>
                                            </div>
                                        </li>
                                        <li class="linkBlock">
                                            <div class="str-inner">
                                                <div class="link-inner"><img src="img/homelink.png"></div>
                                            </div>
                                        </li>
                                        <li class="linkBlock">
                                            <div class="str-inner">
                                                <div class="link-inner"><img src="img/homelink.png"></div>
                                            </div>
                                        </li>
                                   
                                        <li class="linkBlock">
                                            <div class="str-inner">
                                                <div class="link-inner"><img src="img/homelink.png"></div>
                                            </div>
                                        </li>
                                       
                                    </ul>
                                    <p class="hspt-p align-right"><a>进入微分销专题页 ></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hspt">
                        <div class="str-inner">
                            <div class="hsptBlock ">
                                <div class="img">
                                  <img src="img/hspt.jpg">
                                  <div class="info-hover">
                                      <h3 class="ih-title">微商城解决方案</h3>
                                      <div class="ih-text">
                                          微分销（即微信分销），在大数据时代背景下企业数据营销方式，是基于微信公众平台定制研发，专门为品牌公司和商家提供微信连锁商城、微分销渠道的三级分销微信商城体系，微分销助力商家高粘度、快速将自媒体转化为自有分销商。 
                                      </div>
                                  </div>
                                </div>
                                <div class="hspt-bottom">
                                    <div class="bdvantageRow">
                                        <div class="row-block">
                                            <div class="inner">
                                                <i class="iconfont">&#xe62c;</i>
                                                <div class="title middleTable">
                                                  <div class="middleRow">会员系统</div>
                                                </div>
                                                <div class="bdText">
                                                    会员管理代理管理客服会员管理代理管理客服
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row-block">
                                            <div class="inner">
                                                <i class="iconfont">&#xe69c;</i>
                                                <div class="title middleTable">
                                                  <div class="middleRow">数据魔方</div>
                                                </div>
                                                <div class="bdText">
                                                    会员管理代理管理客服会员管理代理管理客服
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row-block">
                                            <div class="inner">
                                                <i class="iconfont">&#xe6ae;</i>
                                                <div class="title middleTable" >
                                                    <div class="middleRow">ERP对接</div>
                                                </div>
                                                <div class="bdText">
                                                    会员管理代理管理客服会员管理代理管理客服
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row-block">
                                            <div class="inner">
                                                <i class="iconfont">&#xe608;</i>
                                                <div class="title middleTable">
                                                    <div class="middleRow">可视化
                                                    <br>模板装修
                                                    </div>
                                                </div>
                                                <div class="bdText">
                                                    会员管理代理管理客服会员管理代理管理客服
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text">
                                        <div class="hspt_title">微营销解决方案</div>
                                        <div class="hspt_text">开启PC+手机+APP全网分销新时代传统企业可将线下渠道一键上线，实现线上线下互通,客户倍增。</div>
                                    </div>
                                    <p class="hspt-p">他们正在使用</p>
                                    <ul class="link">
                                        
                                        <li class="linkBlock">
                                            <div class="str-inner">
                                                <div class="link-inner"><img src="img/homelink.png"></div>
                                            </div>
                                        </li>
                                        <li class="linkBlock">
                                            <div class="str-inner">
                                                <div class="link-inner"><img src="img/homelink.png"></div>
                                            </div>
                                        </li>
                                        <li class="linkBlock">
                                            <div class="str-inner">
                                                <div class="link-inner"><img src="img/homelink.png"></div>
                                            </div>
                                        </li>
                                   
                                        <li class="linkBlock">
                                            <div class="str-inner">
                                                <div class="link-inner"><img src="img/homelink.png"></div>
                                            </div>
                                        </li>
                                       
                                    </ul>
                                    <p class="hspt-p align-right"><a>进入微分销专题页 ></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grayBg">
                <div class="container1150">
                    <div class="header03">
                        <div class="h-title01">管家动态</div>
                    </div>
                    <div class="butlerRow">
                        <div class="row-block">
                            <div class="inner">
                                <div class="header04">
                                    <div class="hdinner">
                                        <div class="h-title01 float-l">

                                            <span class="text">行业动态</span>
                                        </div>
                                        <a class="more float-r">MORE</a>
                                    </div>
                                </div>
                                <div class="imgbox">    
                                    <img src="img/b01.png">
                                </div>
                                <div class="list15 list">
                                  <ul>
                                      <li><a>
                                          
                                          <div class="text">
                                              <span class="date">【09-04】</span>
                                              2014年度上海市服务贸易发展专项资金申 
                                          </div>
                                          
                                          </a></li>
                                      <li><a>
                                          
                                          <div class="text">
                                              <span class="date">【09-04】</span>
                                              2014年度上海市服务贸易发展专项资金申 
                                          </div>
                                          
                                          </a></li>
                                      <li><a>
                                          
                                          <div class="text">
                                              <span class="date">【09-04】</span>
                                              2014年度上海市服务贸易发展专项资金申 
                                          </div>
                                          
                                          </a></li>
                                      <li><a>
                                          
                                          <div class="text">
                                              <span class="date">【09-04】</span>
                                              2014年度上海市服务贸易发展专项资金申 
                                          </div>
                                          
                                          </a></li>
                                      <li><a>
                                          
                                          <div class="text">
                                              <span class="date">【09-04】</span>
                                              2014年度上海市服务贸易发展专项资金申 
                                          </div>
                                          
                                          </a></li>
                                    
                                  </ul>
                                </div>
                            </div>
                        </div>
                        <div class="row-block">
                            <div class="inner">
                                <div class="header04">
                                    <div class="hdinner">
                                        <div class="h-title01 float-l">

                                            <span class="text">行业动态</span>
                                        </div>
                                        <a class="more float-r">MORE</a>
                                    </div>
                                </div>
                                <div class="imgbox">    
                                    <img src="img/b01.png">
                                </div>
                                <div class="list15 list">
                                  <ul>
                                      <li><a>
                                          
                                          <div class="text">
                                              <span class="date">【09-04】</span>
                                              2014年度上海市服务贸易发展专项资金申 
                                          </div>
                                          
                                          </a></li>
                                      <li><a>
                                          
                                          <div class="text">
                                              <span class="date">【09-04】</span>
                                              2014年度上海市服务贸易发展专项资金申 
                                          </div>
                                          
                                          </a></li>
                                      <li><a>
                                          
                                          <div class="text">
                                              <span class="date">【09-04】</span>
                                              2014年度上海市服务贸易发展专项资金申 
                                          </div>
                                          
                                          </a></li>
                                      <li><a>
                                          
                                          <div class="text">
                                              <span class="date">【09-04】</span>
                                              2014年度上海市服务贸易发展专项资金申 
                                          </div>
                                          
                                          </a></li>
                                      <li><a>
                                          
                                          <div class="text">
                                              <span class="date">【09-04】</span>
                                              2014年度上海市服务贸易发展专项资金申 
                                          </div>
                                          
                                          </a></li>
                                    
                                  </ul>
                                </div>
                            </div>
                        </div>
                        <div class="row-block">
                            <div class="inner">
                                <div class="header04">
                                    <div class="hdinner">
                                        <div class="h-title01 float-l">

                                            <span class="text">行业动态</span>
                                        </div>
                                        <a class="more float-r">MORE</a>
                                    </div>
                                </div>
                                <div class="imgbox">    
                                    <img src="img/b01.png">
                                </div>
                                <div class="list15 list">
                                  <ul>
                                      <li><a>
                                          
                                          <div class="text">
                                              <span class="date">【09-04】</span>
                                              2014年度上海市服务贸易发展专项资金申 
                                          </div>
                                          
                                          </a></li>
                                      <li><a>
                                          
                                          <div class="text">
                                              <span class="date">【09-04】</span>
                                              2014年度上海市服务贸易发展专项资金申 
                                          </div>
                                          
                                          </a></li>
                                      <li><a>
                                          
                                          <div class="text">
                                              <span class="date">【09-04】</span>
                                              2014年度上海市服务贸易发展专项资金申 
                                          </div>
                                          
                                          </a></li>
                                      <li><a>
                                          
                                          <div class="text">
                                              <span class="date">【09-04】</span>
                                              2014年度上海市服务贸易发展专项资金申 
                                          </div>
                                          
                                          </a></li>
                                      <li><a>
                                          
                                          <div class="text">
                                              <span class="date">【09-04】</span>
                                              2014年度上海市服务贸易发展专项资金申 
                                          </div>
                                          
                                          </a></li>
                                    
                                  </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container1150 friendZone">
                <div class="header03">
                    <div class="h-title01 noborder">携手共赢，与众多合作伙伴开拓微店新生态</div>
                    <div class="makeborder"></div>
                    <div class="sub-title">
                        优质企业入驻，你的最优选择
                    </div>
                </div>
                <div class="friendsRow">
                    <div class="row-block">
                      <div class="inner">
                         <div class="box"><img src="img/4.png"></div>
                      </div>
                    </div>
                    <div class="row-block">
                      <div class="inner">
                         <div class="box"><img src="img/4.png"></div>
                      </div>
                    </div>
                    <div class="row-block">
                      <div class="inner">
                         <div class="box"><img src="img/4.png"></div>
                      </div>
                    </div>
                    <div class="row-block">
                      <div class="inner">
                         <div class="box"><img src="img/4.png"></div>
                      </div>
                    </div>
                    <div class="row-block">
                      <div class="inner">
                         <div class="box"><img src="img/4.png"></div>
                      </div>
                    </div>
                    <div class="row-block">
                      <div class="inner">
                         <div class="box"><img src="img/4.png"></div>
                      </div>
                    </div>
                    <div class="row-block">
                      <div class="inner">
                         <div class="box"><img src="img/4.png"></div>
                      </div>
                    </div>
                    <div class="row-block">
                      <div class="inner">
                         <div class="box"><img src="img/4.png"></div>
                      </div>
                    </div>
                </div>
                <div class="align-center">
                    <a><div class="roundBtn01">
                      点击查看更多
                    </div></a>
                </div>
            </div>
        </div>

   </div>
    


<?php include 'foot.html' ?>