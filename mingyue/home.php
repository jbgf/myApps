<?php include 'head.html' ?>
    <div class="slideBox slideBox01" >
          <div class="absfull">
              <div class="container1200 full-height relative">  
                  <a class="prev direction"></a>  
                  <a class="next direction"></a>
              </div>
          </div>
          <div class="hd">
            <ul></ul>
          </div>
          <div class="bd">
            <ul>
              <li style="background:url(img/banner1.jpg) center center no-repeat"></li>
              <li style="background:url(img/banner2.jpg) center center no-repeat"></li>
              
              <li style="background:url(img/banner3.jpg) center center no-repeat"></li>
              
            </ul>
          </div>
    </div>

  <script type="text/javascript">
        (function slider(){
                    $(".slideBox01").length > 0 && jQuery(".slideBox01").slide({titCell:".hd ul",autoPage:"<li><a></a></li>",prevCell:".prev",nextCell:".next", mainCell:".bd ul",autoPlay:true,effect:"leftLoop",easing:"swing",interTime:"3500"});
        })();
  </script>
  <div class="first_middle">  
    <div class="container1200">
       <div class="middle_content_row"> 
          <div class="q_content">
              <div class="row-block">
                  <div class="inner">
                      <div class="news_h">
                          <div class="h-title01 float-l">
                              <span class="icon"><img src="img/icon1.png"></span>
                              <span class="text">产品搜索</span>
                          </div>
                          <a class="more float-r">MORE<img src="img/icon2.png"></a>
                      </div>
                      <div class="qbox qbox1">
                          <form action="">
                          <table>
                              <tr>
                                <td width="75%">
                                  <div style="padding-right:5px;"><input id="searchtext" type="text" placeholder="请输入搜索内容">
                                  </div>  
                                </td>
                                <td width="25%">
                                  <div style="padding-left:5px;">
                                  <input id="searchbtn" type="submit" name="" value="搜索">
                                  </div>
                                </td>
                              </tr>
                              <tr><td colspan="4"><span class="title">关于我们</span></td></tr>
                              <tr id="aboutRow">
                                <td colspan="4">
                                    <span class="filter active">鑫海简介</span>
                                    <span class="filter">领导致辞</span>
                                    <span class="filter">荣誉证书</span>
                                    <span class="filter">联系我们</span></td>
                                    <input type="hidden" name="">
                              </tr>
                              <tr><td colspan="4"><span class="title">产品展示</span></td></tr>
                              <tr id="productRow">
                                <td>
                                    <span class="filter active">有色类产品化</span>
                                    <span class="filter">工类产品</span>
                                    <input type="hidden" name="">
                                </td>
                              </tr>
                          </table>
                          </form>
                      </div>
                      <script type="text/javascript">
                        $(".qbox1 .filter").on("click",function(){
                            var $tr = $(this).parents("tr"),flag = $(this).hasClass("active");
                                if(flag){
                                  return
                                }
                                else{
                                  $(this).addClass("active").siblings(".filter").removeClass("active")
                                  /*hidden input value 待填写！！！*/
                                  $tr.find("input").val('test');
                                }
                        })
                      </script>
                      
                  </div>
              </div>
              <div class="row-block">
                  <div class="inner">
                      <div class="news_h">
                          <div class="h-title01 float-l">
                              <span class="icon"><img src="img/icon1.png"></span>
                              <span class="text">新闻中心</span>
                          </div>
                          <a class="more float-r">MORE<img src="img/icon2.png"></a>
                      </div>
                      <div class="qbox qbox2">
                          <div id="" class="bd slideBd">
                                <ul>
                                    <li class="on">
                                      <a href="#">
                                      <div class="slideBd_left ">
                                        <img class="dataImg full" src="img/icon3.png">
                                        
                                      </div>
                                      <div class="slideBd_right">
                                        <div class="title">
                                          <span class="ellipsis">【行业资讯】药品零加成政策落地价药…</span>
                                          
                                          
                                        </div>
                                        <div class="news_intro">按照全面推开公立医院综合改革的通知，国内各级各类公立医院将于今年9月底前全部取消药品加成。《经济参考报》记者在已经取消药品加成</div>
                                      </div>
                                      </a>
                                    </li>
                                    <li class="">
                                      <a href="#">
                                      <div class="slideBd_left ">
                                        <img class="dataImg full" src="img/icon3.png">
                                        
                                      </div>
                                      <div class="slideBd_right">
                                        <div class="title">
                                          <span class="ellipsis">【行业资讯】药品零加成政策落地价药…</span>
                                          
                                          
                                        </div>
                                        <div class="news_intro">按照全面推开公立医院综合改革的通知，国内各级各类公立医院将于今年9月底前全部取消药品加成。《经济参考报》记者在已经取消药品加成</div>
                                      </div>
                                      </a>
                                    </li>
                                    <li class="">
                                      <a href="#">
                                      <div class="slideBd_left ">
                                        <img class="dataImg full" src="img/icon3.png">
                                        
                                      </div>
                                      <div class="slideBd_right">
                                        <div class="title">
                                          <span class="ellipsis">【行业资讯】药品零加成政策落地价药…</span>
                                          
                                          
                                        </div>
                                        <div class="news_intro">按照全面推开公立医院综合改革的通知，国内各级各类公立医院将于今年9月底前全部取消药品加成。《经济参考报》记者在已经取消药品加成</div>
                                      </div>
                                      </a>
                                    </li>
                                    <li class="">
                                      <a href="#">
                                      <div class="slideBd_left ">
                                        <img class="dataImg full" src="img/icon3.png">
                                        
                                      </div>
                                      <div class="slideBd_right">
                                        <div class="title">
                                          <span class="ellipsis">【行业资讯】药品零加成政策落地价药…</span>
                                          
                                          
                                        </div>
                                        <div class="news_intro">按照全面推开公立医院综合改革的通知，国内各级各类公立医院将于今年9月底前全部取消药品加成。《经济参考报》记者在已经取消药品加成</div>
                                      </div>
                                      </a>
                                    </li>
                                    
                                </ul>
                          </div>
                      </div>

                  </div>
              </div>
              <div class="row-block">
                  <div class="inner">
                      <div class="news_h">
                          <div class="h-title01 float-l">
                              <span class="icon"><img src="img/icon1.png"></span>
                              <span class="text">新闻中心</span>
                          </div>
                          <a class="more float-r">MORE<img src="img/icon2.png"></a>
                      </div>
                      <div class="qbox qbox2">
                          <div id="" class="bd slideBd">
                                <ul>
                                    <li class="on">
                                      <a href="#">
                                      <div class="slideBd_left ">
                                        <img class="dataImg full" src="img/icon3.png">
                                        
                                      </div>
                                      <div class="slideBd_right">
                                        <div class="title">
                                          <span class="ellipsis">【行业资讯】药品零加成政策落地价药…</span>
                                          
                                          
                                        </div>
                                        <div class="news_intro">按照全面推开公立医院综合改革的通知，国内各级各类公立医院将于今年9月底前全部取消药品加成。《经济参考报》记者在已经取消药品加成</div>
                                      </div>
                                      </a>
                                    </li>
                                    <li class="">
                                      <a href="#">
                                      <div class="slideBd_left ">
                                        <img class="dataImg full" src="img/icon3.png">
                                        
                                      </div>
                                      <div class="slideBd_right">
                                        <div class="title">
                                          <span class="ellipsis">【行业资讯】药品零加成政策落地价药…</span>
                                          
                                          
                                        </div>
                                        <div class="news_intro">按照全面推开公立医院综合改革的通知，国内各级各类公立医院将于今年9月底前全部取消药品加成。《经济参考报》记者在已经取消药品加成</div>
                                      </div>
                                      </a>
                                    </li>
                                    <li class="">
                                      <a href="#">
                                      <div class="slideBd_left ">
                                        <img class="dataImg full" src="img/icon3.png">
                                        
                                      </div>
                                      <div class="slideBd_right">
                                        <div class="title">
                                          <span class="ellipsis">【行业资讯】药品零加成政策落地价药…</span>
                                          
                                          
                                        </div>
                                        <div class="news_intro">按照全面推开公立医院综合改革的通知，国内各级各类公立医院将于今年9月底前全部取消药品加成。《经济参考报》记者在已经取消药品加成</div>
                                      </div>
                                      </a>
                                    </li>
                                    <li class="">
                                      <a href="#">
                                      <div class="slideBd_left ">
                                        <img class="dataImg full" src="img/icon3.png">
                                        
                                      </div>
                                      <div class="slideBd_right">
                                        <div class="title">
                                          <span class="ellipsis">【行业资讯】药品零加成政策落地价药…</span>
                                          
                                          
                                        </div>
                                        <div class="news_intro">按照全面推开公立医院综合改革的通知，国内各级各类公立医院将于今年9月底前全部取消药品加成。《经济参考报》记者在已经取消药品加成</div>
                                      </div>
                                      </a>
                                    </li>
                                    
                                </ul>
                          </div>
                      </div>

                  </div>
              </div> 
              <script type="text/javascript">
                  $(".slideBd").each(function(i,e){
                      var lis = $(e).find("li");
                        lis.hover(function(){
                            if($(this).hasClass("on")){return};
                            lis.removeClass("on");
                            $(this).addClass("on");
                        });
                  })
                         
                    
              </script>  
          </div>
       </div>
    </div>

    
    <div class="container1200"> 
      <div class="middle_content_row">
        <div class="gallaryWrapper">
            <a class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></a>
            <a class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></a>
            <div id="gallary" class="swiper-container">
                
                <div  class="swiper-wrapper">
                    <div class="swiper-slide row-block">
                        <div class="inner">
                        <a>
                          <div class="innerWrapper">
                              <img src="img/ls01.jpg">
                              <div class="info">
                                  <h3>滑轮</h3>
                                  
                              </div>  
                          </div>
                        </a>
                        </div>
                    </div>
                    <div class="swiper-slide row-block">
                        <div class="inner">
                        <a>
                          <div class="innerWrapper">
                              <img src="img/ls01.jpg">
                              <div class="info">
                                  <h3>Electics&Electronic</h3>
                                  
                              </div>  
                          </div>
                        </a>
                        </div>
                    </div>
                    <div class="swiper-slide row-block">
                        <div class="inner">
                        <a>
                          <div class="innerWrapper">
                              <img src="img/ls01.jpg">
                              <div class="info">
                                  <h3>Electics&Electronic</h3>
                                  
                              </div>  
                          </div>
                        </a>
                        </div>
                    </div>
                    <div class="swiper-slide row-block">
                        <div class="inner">
                        <a>
                          <div class="innerWrapper">
                              <img src="img/ls01.jpg">
                              <div class="info">
                                  <h3>Electics&Electronic</h3>
                                  
                              </div>  
                          </div>
                        </a>
                        </div>
                    </div>
                    <div class="swiper-slide row-block">
                        <div class="inner">
                        <a>
                          <div class="innerWrapper">
                              <img src="img/ls01.jpg">
                              <div class="info">
                                  <h3>Electics&Electronic</h3>
                                  
                              </div>  
                          </div>
                        </a>
                        </div>
                    </div>
                    <div class="swiper-slide row-block">
                        <div class="inner">
                        <a>
                          <div class="innerWrapper">
                              <img src="img/ls01.jpg">
                              <div class="info">
                                  <h3>Electics&Electronic</h3>
                                  
                              </div>  
                          </div>
                        </a>
                        </div>
                    </div>
                    <div class="swiper-slide row-block">
                        <div class="inner">
                        <a>
                          <div class="innerWrapper">
                              <img src="img/ls01.jpg">
                              <div class="info">
                                  <h3>Electics&Electronic</h3>
                                  
                              </div>  
                          </div>
                        </a>
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
      $(function(){
          var perview = 6;
          var mySwiper = new Swiper('.swiper-container',{
              slidesPerView: perview,
              loop : true
          })
          $('.gallaryWrapper .prev').click(function(){
              mySwiper.swipePrev(); 
          })
          $('.gallaryWrapper .next').click(function(){
              mySwiper.swipeNext(); 
          });

          var _config = [
              {wrapper:".q_content",children:"",class:".qbox",mode:0} 
          ];
          function equalHeight(options){
              jQuery(options).each(function(i,e){
                
                var heightArr = [],
                    max = 0; 

                if(jQuery(e.wrapper).length == 0 || (e.mode == undefined)){return };
                if(e.mode == 0){
                      jQuery(e.wrapper).each(function(){
                  
                          var $eles = jQuery(this).find(e.class);
                          
                              $eles.each(function(index,element){
                                  var height = jQuery(element).height();
                                      height > max ? max = height : "";
                              })

                              $eles.height(max);
                              if(e.children !="")$eles.find(e.children).height(max);
                          })  
                }
                if(e.mode == 1){
                      var $eles = jQuery(e.wrapper).find(e.class);
                      
                          $eles.each(function(index,element){
                              var height = jQuery(element).height();
                                  height > max ? max = height : "";
                          })  
                          $eles.height(max);
                          if(e.children !="")$eles.find(e.children).height(max);
                }
              })
          }
          equalHeight(_config);
      })      
            
 </script>
<?php include 'foot.html' ?>