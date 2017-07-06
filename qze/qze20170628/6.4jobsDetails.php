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
                          <div class="header05">联系方式</div>
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
                                
                            </ul>
                          </div>
                          
                      </div>
                  </div>
                  <div class="sideListContent_left scLR">
                      <div class="inner">
                          <ul class="news-ul06 ">
                                <li class="newsRow over-flow " style="padding-top: 0;">
                                                                    
                                      <div class="cl-pic float-l ">
                                        <img src="img/newsTab01_pic.jpg">
                                      </div>
                                      
                                      <div class="cl-newsBox margin-l-200">
                                           
                                          <div class="cl-title">
                                            <a class="cl-p01 ">
                                                金融学、社会工作
                                            </a>
                                          </div>
                                          <div class="ul03-wrapper">
                                            <p>
                                              <span class="g">赵老师 / 女 </span>
                                              
                                            </p>
                                            <p>
                                              <span class="g">发布时间：</span>
                                              <span>2017-04-10</span>
                                            </p>
                                          </div>
                                      </div>
                                    
                                </li>
                          </ul>
                          <div class="hr-basicInfo">
                              <p>
                                区域：泉州市 
                              </p>
                              <p>基本情况：<span>硕士</span><span>3-5年工作经验</span>
                              </p>
                              <p>求职意向：<span>会计</span><span>期望薪资: 面议</span><span>年龄: 27 岁</span>
                              </p>
                          </div>
                          <div class="basicContent">
                              <div class="header06">
                                  <ul class="h06ul">
                                    <li class="on"><a>工作经验</a></li>
                                    
                                  </ul>
                              </div>
                              <div class="p">
                                  福建新中联贸易有限公司 工作时间：2013年04月-至今 [3年5个月]薪资水平： 5000-8000元/月 在职职位：财务负
                              </div>
                              <div class="header06">
                                  <ul class="h06ul">
                                    <li class="on"><a>学历教育</a></li>
                                    
                                  </ul>
                              </div>
                              <div class="p">
                                  福建新中联贸易有限公司 工作时间：2013年04月-至今 [3年5个月]薪资水平： 5000-8000元/月 在职职位：财务负
                              </div>
                              <div class="header06">
                                  <ul class="h06ul">
                                    <li class="on"><a>自我评价</a></li>
                                    
                                  </ul>
                              </div>
                              <div class="p">
                                  福建新中联贸易有限公司 工作时间：2013年04月-至今 [3年5个月]薪资水平： 5000-8000元/月 在职职位：财务负
                              </div>
                          </div>
                          

                          <?php include './views/pagination.html' ?> 
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