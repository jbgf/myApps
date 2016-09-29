$(function(){
          //导航栏
          var st = 180;
          $('.navbar-block').mouseenter(function () {
              $(this).find('ul').stop(false, true).slideDown(st);
          }).mouseleave(function () {
              $(this).find('ul').stop(false, true).slideUp(st);
          });

          //banner 轮播
          jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true,effect:"leftLoop",easing:"swing",interTime:"3500"});
          //最新公告文字滚动
           jQuery(".txtScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,scroll:2,vis:2,trigger:"click"});
          //news滚动
          jQuery("#newsBox01").slide({mainCell:".bd ul",autoPlay:true,effect:"leftLoop",easing:"swing",interTime:"3500"});  
          //news tab切换
          jQuery(".slideTxtBox").slide();
          

/*r-sider01*/
          //服务支持
          $('.content01 .floor:not(.on)').hover(function(){
              $(this).addClass("on")
           },function(){
              $(this).removeClass("on")
           })  

          //产品检测范围
           $('.rp-img:not(.on)').hover(function(){
              $(this).addClass("on")
           },function(){
              $(this).removeClass("on")
           })
           //关于我们,右
           $('.abtn-wrapper:not(.on)').hover(function(){
              $(this).addClass("on")
           },function(){
              $(this).removeClass("on")
           })

/*左侧边栏 */
    /*l-sider01*/
            $(".l-sider01 .floor:not(.f00,.on)").hover(function(){
              $(this).addClass("on")
           },function(){
              $(this).removeClass("on")
           })
    /*l-sider02*/
            $(".l-sider02 .floor").on("click",function(){
                $(this).toggleClass("current").siblings('.list').slideToggle();
            })

            $(".l-sider02 .list .item:not(.on)").hover(function(){
              $(this).addClass("on")
           },function(){
              $(this).removeClass("on")
           })

/*左侧边栏 end     */
            $(".pagination ul li:not(.right,.left,.on,.ellipsis)").hover(function(){
              $(this).addClass("on")
           },function(){
              $(this).removeClass("on")
           })

           /*产品检测方案及背景介绍切换*/ 
           $(".hbtnBox .hbtn").hover(function(){
              var on = $(this).hasClass('on');
              if(on){return}else{
                $(this).addClass('on').siblings('.hbtn').removeClass('on');

                var textBody = $(this).parents(".r-row").find(".text-body");
                textBody.toggle();
              }

              
           })
           /*测试范围详情*/
           $(".riRow").click(function(){
              $(this).find(".riRow-t02").slideToggle("fast");
           })
})