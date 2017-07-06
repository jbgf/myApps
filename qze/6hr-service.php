<?php include 'head.html' ?>
   <div class="container1140">
        <div class="">
            <div class="whiteBg">
                <div class="header04">
                     <div class="url">
                         您现在的位置首页：首页 > 泉州产业概况
                     </div>
                     <div class="h-title01">
                         <div class="text">人才中心</div>
                     </div>
                </div> 
                <div class="hr-search">
                  <form class="igForm" class="clear">
                      <div class="input_group ">
                        <div class="dropDownMenu">
                            <div class="dropDownButton">
                              <span class="dropDownText">找工作</span><span class="caret"></span>
                              <input type="hidden" name="" >
                            </div>
                            <ul style="display: none;">
                                <li class="on">找工作</li>
                                <li>找人才</li>
                            </ul>
                        </div> 
                        <div class="input-set02">
                            <input class="input1 input" type="text" name="" placeholder="请输入职位名称或企业名称">
                            <input class="input2 input" type="text" name="" placeholder="请输入工作地区">
                            <div id="searchButton" class="button bg-blue white">
                                <img src="img/isearch.png">
                                <span>搜&nbsp;索</span>
                            </div>
                            <input id="hideSubmit" type="submit" name="" style="display:none;">
                        </div>
            
                      </div>
                  </form>
                </div>  
                <script type="text/javascript">
                    +function dropDown(){
                        var $ul = $(".dropDownMenu ul");
                        var dropBtn = $(".dropDownButton");
                        
                        dropBtn.on("click",function(){
                             $(this).addClass("on");
                                 
                             $ul.show();
                             $(document.createElement('div'))
                              .addClass('dropdown-backdrop')
                              .appendTo($("body"))
                              .on('click', clearMenus);

                        });
                        $('[class*="dropDownMenu"] ul li').on("click",function(){
                             var value = $(this).html();
                             var $ul = $(this).parent("ul"); 
                             var $menu =  $ul.parents('[class*="dropDownMenu"]');
                             var dropDownText = $menu.find(".dropDownText");
                             var hiddenInput = dropBtn.find("input");
                                 dropDownText.html(value);
                                 hiddenInput.val(value)
                                 clearMenus();
                        }).first().click()
          
                        $("#searchButton").click(function(){
                            $("#hideSubmit").trigger("click");
                        })

                        function clearMenus(){
                             $ul.hide();
                             dropBtn.removeClass("on");
                             $(".dropdown-backdrop").remove();
                        }
                    }();

                </script>
                
                <div class="hr_row1 rmp">
                    <div class="hr_row1_right">
                        <!-- picScroll03 begin -->
                          <div class="slideBox slideBox02" >
                              <div class="hd">
                                <ul>
                                  <li><a></a></li>
                                  <li><a></a></li>
                                  <li><a></a></li>
                                </ul>
                              </div>
                              <div class="bd">
                                <ul>
                                  <li><a href="#" target="_blank"><img src="img/slider01.png"></a></li>
                                  <li><a href="#" target="_blank"><img src="img/slider01.png"></a></li>
                                  <li><a href="#" target="_blank"><img src="img/slider01.png"></a></li>
                                </ul>
                              </div>
                          </div>
                          <script type="text/javascript">
                              +function picScroll03 (){

                                  jQuery(".slideBox02").slide({mainCell:".bd ul",autoPlay:true,effect:"leftLoop",easing:"swing",interTime:"3500"});
                              }()
                          </script>  
                        <!-- picScroll03 end -->

                    </div>
                    <div class="hr_row1_left">
                        <ul class="hr-link">
                            <li class="row-block">
                                <div class="inner">
                                  <div class="hrl-inner on middleTable">
                                    <div class="middleRow">
                                      <div class="imgbox"><img src="img/hrl1.png"></div>
                                      <div class="text">找工作</div>
                                    </div>
                                  </div>
                                </div>
                            </li>
                            <li class="row-block">
                                <div class="inner">
                                  <div class="hrl-inner middleTable">
                                    <div class="middleRow">
                                      <div class="imgbox"><img src="img/hrl2.png"></div>
                                      <div class="text">找人才</div>
                                    </div>
                                  </div>
                                </div>
                            </li>
                            <li class="row-block">
                                <div class="inner">
                                  <div class="hrl-inner middleTable">
                                    <div class="middleRow">
                                      <div class="imgbox"><img src="img/hrl3.png"></div>
                                      <div class="text">发职位</div>
                                    </div>
                                  </div>
                                </div>
                            </li>
                            <li class="row-block">
                                <div class="inner">
                                  <div class="hrl-inner middleTable">
                                    <div class="middleRow">
                                      <div class="imgbox"><img src="img/hrl4.png"></div>
                                      <div class="text">创简历</div>
                                    </div>
                                  </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="row4 rmp border-row">
                    
                    <div class="hrWrapper">
                        <div class="hr">
                            <div class="str-inner">
                                <div class="hriw">
                                  <div class="head02">
                                      <div class="brand">
                                          <span class="text">人才招聘</span><img src="img/icon04.png">
                                      </div>
                                  </div>
                                  <div class="list04">
                                        <ul>
                                            <li>
                                            <a>
                                                <div class="icon"><img src="img/icon05.png"> </div>
                                                
                                                    <span class="date">【2017-09-04】</span>
                                                    <span class="text">2014年度上海市服务贸易发易发易发易发易发易发易发易发易发易发展专项资金申 </span>  
                                                
                                            </a>
                                            </li>
                                            <li>
                                            <a>
                                                <div class="icon"><img src="img/icon05.png"> </div>
                                                
                                                    <span class="date">【2017-09-04】</span>
                                                    <span class="text">2014年度上海市服务贸易发易发易发易发易发易发易发易发易发易发展专项资金申 </span>  
                                                
                                            </a>
                                            </li>
                                            <li>
                                            <a>
                                                <div class="icon"><img src="img/icon05.png"> </div>
                                                
                                                    <span class="date">【2017-09-04】</span>
                                                    <span class="text">2014年度上海市服务贸易发易发易发易发易发易发易发易发易发易发展专项资金申 </span>  
                                                
                                            </a>
                                            </li>
                                            <li>
                                            <a>
                                                <div class="icon"><img src="img/icon05.png"> </div>
                                                
                                                    <span class="date">【2017-09-04】</span>
                                                    <span class="text">2014年度上海市服务贸易发易发易发易发易发易发易发易发易发易发展专项资金申 </span>  
                                                
                                            </a>
                                            </li>
                                            <li>
                                            <a>
                                                <div class="icon"><img src="img/icon05.png"> </div>
                                                
                                                    <span class="date">【2017-09-04】</span>
                                                    <span class="text">2014年度上海市服务贸易发易发易发易发易发易发易发易发易发易发展专项资金申 </span>  
                                                
                                            </a>
                                            </li>
                                            
                                        </ul>  
                                  </div>
                                </div>
                            </div>
                        </div>
                        <div class="hr">
                            <div class="str-inner">
                                <div class="hriw">
                                    <div class="head02">
                                        <div class="brand">
                                            <span class="text">人才招聘</span><img src="img/icon04.png">
                                        </div>
                                    </div>
                                    <div class="list04">
                                          <ul>
                                              <li>
                                              <a>
                                                  <div class="icon"><img src="img/icon06.png"> </div>
                                                  
                                                      <span class="date">【2017-09-04】</span>
                                                      <span class="text">2014年度上海市服务贸易发易发易发易发易发易发易发易发易发易发展专项资金申 </span>  
                                                  
                                              </a>
                                              </li>
                                              <li>
                                              <a>
                                                  <div class="icon"><img src="img/icon06.png"> </div>
                                                  
                                                      <span class="date">【2017-09-04】</span>
                                                      <span class="text">2014年度上海市服务贸易发易发易发易发易发易发易发易发易发易发展专项资金申 </span>  
                                                  
                                              </a>
                                              </li>
                                              <li>
                                              <a>
                                                  <div class="icon"><img src="img/icon06.png"> </div>
                                                  
                                                      <span class="date">【2017-09-04】</span>
                                                      <span class="text">2014年度上海市服务贸易发易发易发易发易发易发易发易发易发易发展专项资金申 </span>  
                                                  
                                              </a>
                                              </li>
                                              <li>
                                              <a>
                                                  <div class="icon"><img src="img/icon06.png"> </div>
                                                  
                                                      <span class="date">【2017-09-04】</span>
                                                      <span class="text">2014年度上海市服务贸易发易发易发易发易发易发易发易发易发易发展专项资金申 </span>  
                                                  
                                              </a>
                                              </li>
                                              <li>
                                              <a>
                                                  <div class="icon"><img src="img/icon06.png"> </div>
                                                  
                                                      <span class="date">【2017-09-04】</span>
                                                      <span class="text">2014年度上海市服务贸易发易发易发易发易发易发易发易发易发易发展专项资金申 </span>  
                                                  
                                              </a>
                                              </li>
                                              
                                          </ul>  
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hr">
                            <div class="str-inner">
                                <div class="hriw">
                                    <div class="head02">
                                        <div class="brand">
                                            <span class="text">人才培训</span><img src="img/icon04.png">
                                        </div>
                                    </div>
                                    <div class="imgText01">
                                            <div class="imgText01-left">
                                                 <img src="img/pic02.png"> 
                                            </div>
                                            <div class="imgText01-right">
                                                 <div class="s-general">
                                                      
                                                      <p class="stb-info">泉州，福建省下辖地级区划， 简称“鲤”， 别名鲤城、刺桐城，位于福建省东南沿海，北承福州，南接厦 门，东望宝岛台 湾，辖四区、辖四区、辖四区、辖四区、辖四区、辖四区、</p>
                                                 </div>    
                                            </div>
                                            
                                    </div>
                                    <div class="list05">
                                          <ul>
                                              
                                              <li>
                                              <a>
                                                  <div class="icon"> </div>
                                                  
                                                      <span class="date">【2017-09-04】</span>
                                                      <span class="text">2014年度上海市服务贸易发易发易发易发易发易发易发易发易发易发展专项资金申 </span>  
                                                  
                                              </a>
                                              </li>
                                              <li>
                                              <a>
                                                  <div class="icon"> </div>
                                                  
                                                      <span class="date">【2017-09-04】</span>
                                                      <span class="text">2014年度上海市服务贸易发易发易发易发易发易发易发易发易发易发展专项资金申 </span>  
                                                  
                                              </a>
                                              </li>
                                              <li>
                                              <a>
                                                  <div class="icon"> </div>
                                                  
                                                      <span class="date">【2017-09-04】</span>
                                                      <span class="text">2014年度上海市服务贸易发易发易发易发易发易发易发易发易发易发展专项资金申 </span>  
                                                  
                                              </a>
                                              </li>
                                              <li>
                                              <a>
                                                  <div class="icon"> </div>
                                                  
                                                      <span class="date">【2017-09-04】</span>
                                                      <span class="text">2014年度上海市服务贸易发易发易发易发易发易发易发易发易发易发展专项资金申 </span>  
                                                  
                                              </a>
                                              </li>
                                              
                                          </ul>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="da_banner">
                <img src="img/6.jpg">
            </div>
           
            <div class="border-row">
                <div class="rowInner">  
                    <div class="head02">
                        <div class="brand">
                            <span class="text">人才招聘</span><img src="img/icon04.png">
                        </div>
                    </div>
                    <div class="hireRow">
                        <div class="row-block">
                            <div class="inner">
                              <div class="imgBox">
                                  <img src="img/hirePic01.png">
                              </div>
                              <div class="text">
                                  <p class="title">如何分析客户 关注什么内容</p>
                                  <p class="teacher">
                                    <span>讲师：魏延安</span>
                                    <span >时长：60分钟</span>
                                  </p>
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
                                  <p class="teacher">
                                    <span>讲师：魏延安</span>
                                    <span >时长：60分钟</span>
                                  </p>
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
                                  <p class="teacher">
                                    <span>讲师：魏延安</span>
                                    <span >时长：60分钟</span>
                                  </p>
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
                                  <p class="teacher">
                                    <span>讲师：魏延安</span>
                                    <span >时长：60分钟</span>
                                  </p>
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
            {wrapper:".row2",children:"",class:".isWrapper",mode:0} ,
            {wrapper:".row4",children:"",class:".hriw",mode:0}
        ];

        equalHeight(_config);
    }
</script>  


<?php include 'foot.html' ?>