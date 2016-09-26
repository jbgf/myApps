$(function(){
          //banner 轮播
          jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true,effect:"leftLoop",easing:"swing",interTime:"3500"});
          //最新公告文字滚动
           jQuery(".txtScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,scroll:2,vis:2,trigger:"click"});
          //news滚动
          jQuery("#newsBox01").slide({mainCell:".bd ul",autoPlay:true,effect:"leftLoop",easing:"swing",interTime:"3500"});  
          //news tab切换
          jQuery(".slideTxtBox").slide();
          

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
           //关于我们
           $('.abtn-wrapper:not(.on)').hover(function(){
              $(this).addClass("on")
           },function(){
              $(this).removeClass("on")
           })
})