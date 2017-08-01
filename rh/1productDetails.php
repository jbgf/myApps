<?php include './head.html' ?>
    <div class="header10">
        <ul class=" type1">
            <li>
                <div class="inner">
                    易货展示
                </div>
            </li>
            <li class="on">
                <div class="inner">
                    货源登记
                </div>
            </li>
            <li>
                <div class="inner">
                    易货成交
                </div>
            </li>
        </ul>
    </div><!-- header10 type1 -->

    <div class="header12">尼康多功能单反相机</div>
    <div class="mainWidth1 mar-center">
        <div class="header11 color">
             <div class="title ">
              
               <div class="text">市场价格：<span class="red">2000.00</span>元</div>
             </div>
        </div><!-- header11 end -->
    </div>

    <div id="iSwiper" class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="img/iswiper01.png"></div>
                <div class="swiper-slide"><img src="img/iswiper01.png"></div>
                <div class="swiper-slide"><img src="img/iswiper01.png"></div>
                <div class="swiper-slide"><img src="img/iswiper01.png"></div>
                
            </div>
            
            <div class="swiper-pagination"></div>
    </div>
    <script>
        +function(){
            var swiper = new Swiper('#iSwiper', {
                pagination: '.swiper-pagination',
                slidesPerView: 'auto',
                centeredSlides: true,
                paginationClickable: true,
                spaceBetween: 30,
                loop: true
            });    
        }()
        
    </script>
     <!--首页 Swiper -->

     <div class="mainWidth1">
        <div class="content1">
             <ul>
                 <li>
                     <div class="content1-left">
                          姓名：                   
                     </div>
                     <div class="content1-right">占锋</div>
                 </li>
                 <li>
                     <div class="content1-left">
                          联系方式：                   
                     </div>
                     <div class="content1-right">13850350908</div>
                 </li>
                 <li>
                     <div class="content1-left">
                          住址：                   
                     </div>
                     <div class="content1-right">宁德市蕉北</div>
                 </li>
                 <li>
                     <div class="content1-left">
                          货物名称：                   
                     </div>
                     <div class="content1-right">单反相机</div>
                 </li>
             </ul>
        </div><!-- content1 end -->


        <div class="abWrapper">
            <div id="FloatAB" class="FloatAB">  
                <div class="wrapper">
                      
                    <div class="item" title='' href="" >  
                    <img src="img/nav05.png" /></div>  
                    <a class="close"  >
                        <img class="icon" src="img/close.png">
                    </a>
                </div>
            </div>
             
        </div><!--  证书弹窗 -->

        <div class="buttonGroup1">
            <div class="buttonWrapper">
                <a><div class="button1 bg-red" onclick="FloatAB('#FloatAB')">
                    查看质量证书
                </div>
                </a>
            </div>

            <div class="buttonWrapper">
                <a><div class="button1 bg-orange">
                    查看质量证书
                </div>
                </a>
            </div>
        </div><!-- buttonGroup1 end -->

    </div>

</body>
</html>