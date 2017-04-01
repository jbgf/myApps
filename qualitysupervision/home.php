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
              <li style="background:url(img/banner2-1.jpg) center center no-repeat"></li>
              <li style="background:url(img/banner3.jpg) center center no-repeat"></li>
              <li style="background:url(img/banner4.jpg) center center no-repeat"></li>
              <li style="background:url(img/banner5.jpg) center center no-repeat"></li>
            </ul>
          </div>
    </div>

  <script type="text/javascript">
        (function slider(){
                    $(".slideBox01").length > 0 && jQuery(".slideBox01").slide({titCell:".hd ul",autoPage:"<li><a></a></li>",prevCell:".prev",nextCell:".next", mainCell:".bd ul",autoPlay:true,effect:"leftLoop",easing:"swing",interTime:"3500"});
        })();
  </script>
    
    <div class="q_content">
        <div class="container1200">
            <div class="q_content_right float-r">
                <div class="news_h">
                    <div class="h-title01 float-l">
                        <span class="icon"><img src="img/icon1.png"></span>
                        <span class="text">NEWS</span>
                    </div>
                    <a class="more float-r">MORE<img src="img/icon2.png"></a>
                </div>
                <div id="slidew_r" class="slidewrapper">
                  <div class="swinner">
                      <div id="slideBd" class="bd">
                        <ul>
                          <li class="on">
                            <a href="#">
                            <div class="slideBd_left ">
                              <img class="dataImg full" src="img/icon3.png">
                              <div class="date">
                                  <span class="day">01</span><br>
                                  <span class="ym">2017-Feb</span>
                              </div>
                            </div>
                            <div class="slideBd_right">
                              <div class="title">
                                <span class="ellipsis">Delegation from STC visited FQII</span>
                                <span class="date ">2017-Feb-01</span>
                                
                              </div>
                              <div class="news_intro">January 10th, 2017, Mr.Li Jinquan, the General Manager of Hong.</div>
                            </div>
                            </a>
                          </li>
                          <li>
                            <div class="slideBd_left ">
                              <img class="dataImg full" src="img/icon3.png">
                              <div class="date">
                                  <span class="day">01</span><br>
                                  <span class="ym">2017-Feb</span>
                              </div>
                            </div>
                            <div class="slideBd_right">
                              <div class="title">
                                <span class="ellipsis">Delegation from STC visited FQII</span>
                                <span class="date ">2017-Feb-01</span>
                                
                              </div>
                              <div class="news_intro">January 10th, 2017, Mr.Li Jinquan, the General Manager of Hong.</div>
                            </div>
                          </li>
                          <li>
                            <div class="slideBd_left ">
                              <img class="dataImg full" src="img/icon3.png">
                              <div class="date">
                                  <span class="day">01</span><br>
                                  <span class="ym">2017-Feb</span>
                              </div>
                            </div>
                            <div class="slideBd_right">
                              <div class="title">
                                <span class="ellipsis">Delegation from STC visited FQII</span>
                                <span class="date ">2017-Feb-01</span>
                                
                              </div>
                              <div class="news_intro">January 10th, 2017, Mr.Li Jinquan, the General Manager of Hong.</div>
                            </div>
                          </li>
                          <li>
                            <div class="slideBd_left ">
                              <img class="dataImg full" src="img/icon3.png">
                              <div class="date">
                                  <span class="day">01</span><br>
                                  <span class="ym">2017-Feb</span>
                              </div>
                            </div>
                            <div class="slideBd_right">
                              <div class="title">
                                <span class="ellipsis">Delegation from STC visited FQII</span>
                                <span class="date ">2017-Feb-01</span>
                                
                              </div>
                              <div class="news_intro">January 10th, 2017, Mr.Li Jinquan, the General Manager of Hong.</div>
                            </div>
                          </li>
                          <li>
                            <div class="slideBd_left ">
                              <img class="dataImg full" src="img/icon3.png">
                              <div class="date">
                                  <span class="day">01</span><br>
                                  <span class="ym">2017-Feb</span>
                              </div>
                            </div>
                            <div class="slideBd_right">
                              <div class="title">
                                <span class="ellipsis">Delegation from STC visited FQII</span>
                                <span class="date ">2017-Feb-01</span>
                                
                              </div>
                              <div class="news_intro">January 10th, 2017, Mr.Li Jinquan, the General Manager of Hong.</div>
                            </div>
                          </li>
                          
                        </ul>
                      </div>
                      
                  </div>
                  <script type="text/javascript">
                      var lis = $("#slideBd li");
                      lis.hover(function(){
                          if($(this).hasClass("on")){return};
                          lis.removeClass("on");
                          $(this).addClass("on");
                      }); 
                  </script>  
                </div>
            </div>
            <div class="q_content_left">
                <div class="news_h">
                    <div class="h-title01 float-l">
                        <span class="icon"><img src="img/icon1.png"></span>
                        <span class="text">INDUSTRIES</span>
                    </div>
                    
                </div>
                <div class="slidewrapper">
                  <div class="swinner">
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
                                              <h3>Electics&Electronic</h3>
                                              <div class="outer"><p>You could find the highlights of lastese chages.</p>
                                              </div>
                                          </div>  
                                      </div>
                                    </a>
                                    </div>
                                </div>
                                <div class="swiper-slide row-block">
                                    <div class="inner">
                                    <a>
                                      <div class="innerWrapper">
                                          <img src="img/ls02.jpg">
                                          <div class="info">
                                              <h3>Electics&Electronic</h3>
                                              <div class="outer"><p>You could find the highlights of lastese chages.</p>
                                              </div>
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
                                              <div class="outer"><p>You could find the highlights of lastese chages.</p></div>
                                          </div>  
                                      </div>
                                    </a>
                                    </div>
                                </div>
                                <div class="swiper-slide green-slide">
                                  <div class="title">Slide 4</div>
                                </div>
                                <div class="swiper-slide pink-slide">
                                  <div class="title">Slide 5</div>
                                </div>
                                <div class="swiper-slide red-slide">
                                  <div class="title">Slide 6</div>
                                </div>
                                <div class="swiper-slide blue-slide">
                                  <div class="title">Slide 7</div>
                                </div>
                                <div class="swiper-slide orange-slide">
                                  <div class="title">Slide 8</div>
                                </div>
                                <div class="swiper-slide orange-slide">
                                  <div class="title">Slide 9</div>
                                </div>
                            </div>
                            <div class="pagination"></div>
                        </div>
                        
                        <script>
                        var pagi = $("#gallary .pagination");
                        var num = 9,perview = 3;
                        var mySwiper = new Swiper('.swiper-container',{
                            pagination: '.pagination',
                            paginationClickable: true,
                            slidesPerView: perview,
                            loop : true,
                            onInit: function(swiper){
                                  var spans = pagi.find("span");
                                  activeIndex(0,spans,perview,num); 
                            },
                            onSlideChangeStart: function(swiper){
                                  var spans = pagi.find("span"),
                                      active = pagi.find(".swiper-active-switch");
                                  var index = spans.index(active);
                                      activeIndex(index,spans,perview,num) 
                                      
                            }
                        })
                        $('.gallaryWrapper .prev').click(function(){
                            mySwiper.swipePrev(); 
                        })
                        $('.gallaryWrapper .next').click(function(){
                            mySwiper.swipeNext(); 
                        })
                        function activeIndex(index,spans,perview,num){
                            spans.removeClass("visible");
                            var curIndex;
                            for(var i = 0;i < perview; i++){
                                          curIndex = (index + i > num -1 )? Math.abs(num-(index + i)) :(index + i);
                                          
                                          spans.eq(curIndex).addClass("visible");
                            } 
                        }
                        </script>
                    </div>
                        <!-- <a class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></a>
                        <a class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></a>
                        
                        
                       
                    </div>
                    <script type="text/javascript">
                      jQuery(".gallaryWrapper").slide({mainCell:".bd ul",titCell:".hd ul",autoPlay:false,autoPage:"<li><a></a></li>",prevCell:".prev",nextCell:".next",vis:3,scroll:3,effect:"leftLoop"}); 
                    </script> -->  
                  </div>
                </div>
            </div>
        </div>
    </div>


<?php include 'foot.html' ?>