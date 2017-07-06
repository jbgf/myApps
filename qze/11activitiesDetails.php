<?php include 'head.html' ?>
   <div class="container1140">
        <div class="">
            <div class="header04">
                 <div class="url">
                     您现在的位置首页：首页 &gt; 泉州产业概况
                 </div>
                 <div class="h-title01">
                     <div class="text">活动图片</div>
                 </div>
            </div>
           
            <div class="border-row whiteBg">
                <div class="rowInner">  
                    <div id="demo1" class="picBtnTop02 clear">
                        <div class="left_show">
                            <div class="picWrapper">
                                <div class="pic "></div>
                                
                            </div>
                            <div class="slide_wrapper">
                                <div class="h_slide">
                                    <a class="prev" href="javascript:void(0)"></a>
                                    <a class="next" href="javascript:void(0)"></a>

                                    <div class="bd ">
                                        
                                        <ul >
                                            <li ><div class="inner ">
                                                   <div class="border"><img src="img/product01.jpg" /></div>
                                                </div>
                                            </li>
                                            <li ><div class="inner ">
                                                   <div class="border"><img src="img/slider01.png" /></div>
                                                </div>
                                            </li>
                                            <li ><div class="inner ">
                                                   <div class="border"><img src="img/product01.jpg" /></div>
                                                </div>
                                            </li>
                                            <li ><div class="inner ">
                                                   <div class="border"><img src="img/product01.jpg" /></div>
                                                </div>
                                            </li>
                                            <li ><div class="inner ">
                                                   <div class="border"><img src="img/product01.jpg" /></div>
                                                </div>
                                            </li>
                                            <li ><div class="inner ">
                                                   <div class="border"><img src="img/product01.jpg" /></div>
                                                </div>
                                            </li>
                                            <li ><div class="inner ">
                                                   <div class="border"><img src="img/product01.jpg" /></div>
                                                </div>
                                            </li>
                                            <li ><div class="inner ">
                                                   <div class="border"><img src="img/product01.jpg" /></div>
                                                </div>
                                            </li>
                                            <li ><div class="inner ">
                                                   <div class="border"><img src="img/product01.jpg" /></div>
                                                </div>
                                            </li>
                                            <li ><div class="inner ">
                                                   <div class="border"><img src="img/product01.jpg" /></div>
                                                </div>
                                            </li><li ><div class="inner ">
                                                   <div class="border"><img src="img/product01.jpg" /></div>
                                                </div>
                                            </li>
                                            <li ><div class="inner ">
                                                   <div class="border"><img src="img/product01.jpg" /></div>
                                                </div>
                                            </li>
                                            <li ><div class="inner ">
                                                   <div class="border"><img src="img/product01.jpg" /></div>
                                                </div>
                                            </li>
                                        </ul>
                                        
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
            {wrapper:".row2",children:"",class:".isWrapper",mode:0} ,
            {wrapper:".row4",children:"",class:".hriw",mode:0}
        ];

        equalHeight(_config);

        /*内页产品轮播*/
        var leftSlide = {

          ini:function(){

              var visible = 7;
              var li = $("#demo1 .product_li");
              var slideWrapper = $(".h_slide");
              var slides = slideWrapper.find("li",".bd");
              
              slides.each(function(i,e){
                 $(this).attr("data-index",i);
              });
              this.slide(visible,slideWrapper);
               $(".left_show .pic").html('<img src="'+slides.first().find("img").attr("src")+'">')
               
          },
          slide:function(visible,slideWrapper){
              var that = this;
              $(".h_slide").slide({pnLoop:false,mainCell:".bd ul",vis:visible,effect:"leftLoop",easing:"swing",interTime:"3500"
              }); 
              var li = slideWrapper.find("li",".bd");
              li.hover(function(){
                 var li = $(this);
                 li.addClass("on");
                 var i = $(this).attr("data-index");
                
                 var t = setTimeout(function(){that.switch(li,i,t)},300);
              },function(){
                 $(this).removeClass("on")
              })
          },
          switch:function(li,index,t){
              
              if(!li.hasClass("on")){clearTimeout(t);return;}
              
              $(".left_show .pic").html('<img src="'+li.find("img").attr("src")+'">')
              

          }
        };
        leftSlide.ini(); 
    }
</script>  


<?php include 'foot.html' ?>