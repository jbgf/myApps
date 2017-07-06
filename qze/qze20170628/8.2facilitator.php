<?php include 'head.html' ?>
   <div class="container1140">
        <div class="middlePart ">
             <div class="header04">
                 <div class="url">
                     您现在的位置首页：首页 > 泉州产业概况
                 </div>
                 <div class="h-title01">
                     <div class="text">泉州产业概况</div>
                 </div>
                 
             </div>
             <div class="sideListContent mainLrWrapper">
                  <div class="sideListContent_right scLR">
                      <div class="inner">
                          <div class="header05">基本信息</div>
                          <div class="list10 list">
                            <ul>
                                <li>
                                    <div class="icon list10_left"><img  src="img/icon1.png"></div>
                                    <div class="text list10_right">电话：05466131154 </div>
                                </li>
                                <li>
                                    <div class="icon list10_left"><img  src="img/icon2.png"></div>
                                    <div class="text list10_right">邮箱：xxxxx@126.com </div>  
                                </li>
                                <li>
                                    <div class="icon list10_left"><img  src="img/icon3.png"></div>
                                    <div class="text list10_right">地址：杭州滨江区南环路 3758号</div>  
                                </li>
                                
                            </ul>
                          </div>
                          <div>
                              baidu map
                          </div>
                      </div>
                  </div>
                  <div class="sideListContent_left scLR">
                      <div class="inner">
                          <ul class="news-ul05">
                              <li class="newsRow over-flow">
                                <div class="cl-pic float-l ">
                                  <img src="img/newsTab01_pic.jpg">
                                </div>
                                
                                <div class="cl-newsBox margin-l-200">
                                    
                                    <div class="cl-title">
                                      <a class="cl-p01 ellipsis">深化改革——上海检验检疫局扎实开展“两学一做”学习教育</a>
                                      
                                    </div>
                                     
                                    <div class="cl-text">
                                      <p>
                                          <span class="g">主营项目：</span>计算机软件的开发及销售；计算机系统集成；通讯工程的设计、施工；计算机硬件及设备材料，非专控通讯设备，通讯工程材料、电子电器、通讯设备的销售
                                      </p>
                                      <p>
                                          <span class="g">公司网址：</span>http://yuyangip.com
                                      </p>
                                    </div> 
                                </div>
                              </li>
                          </ul>

                          
                          <div class="basicContent">
                              <div class="header06">
                                  <ul class="h06ul">
                                    <li class="on"><a>公司简介</a></li>
                                  </ul>
                              </div>
                              <div class="p">
                                  东部电子商务园是杭州市余杭区乔司街道五星村与杭州东部电子商务有限公司联合共建，由杭州东部电子商务有限公司运营的专业化电子商务公
                              </div>
                              <div class="header06">
                                  <ul class="h06ul">
                                    <li class="on"><a>服务产品</a></li>
                                  </ul>
                              </div>
                              <div class="facilitatorRow">
                                  <div class="row-block">
                                      <div class="inner">
                                        <div class="imgBox">
                                            <img src="img/hirePic01.png">
                                        </div>
                                        <div class="text">
                                            <p class="title">如何分析客户 关注什么内容</p>
                                            
                                        </div>
                                      </div>
                                  </div>
                                  <div class="row-block">
                                      <div class="inner">
                                        <div class="imgBox">
                                            <img src="img/hirePic01.png">
                                        </div>
                                        <div class="text">
                                            <p class="title">如何分析客户 关注什么内容</p>
                                            
                                        </div>
                                      </div>
                                  </div>
                                  <div class="row-block">
                                      <div class="inner">
                                        <div class="imgBox">
                                            <img src="img/hirePic01.png">
                                        </div>
                                        <div class="text">
                                            <p class="title">如何分析客户 关注什么内容</p>
                                           
                                        </div>
                                      </div>
                                  </div>
                                  <div class="row-block">
                                      <div class="inner">
                                        <div class="imgBox">
                                            <img src="img/hirePic01.png">
                                        </div>
                                        <div class="text">
                                            <p class="title">如何分析客户 关注什么内容</p>
                                            
                                        </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          
                      </div>
                  </div>

             </div>
        </div>
   </div>
    
  <script type="text/javascript">
      window.onload = function(){ 
          var _config = [
            {wrapper:".sideListContent",children:"",class:".scLR",mode:0} 
        ];
        $(".list09 .expandBtn").on("click",function(){
            var $li = $(this).parents("li"),
                $jobInfo = $li.find(".jobInfo"),
                $icons = $li.find(".expandBtn");
                $li.toggleClass("active");
                $jobInfo.toggle();
                $icons.toggle();
 
        })
        equalHeight(_config);
      }       
  </script>      

<?php include 'foot.html' ?>     