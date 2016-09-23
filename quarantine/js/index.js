$(function(){
          //banner 轮播
          jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true,effect:"leftLoop",easing:"swing",interTime:"3500"});
          //最新公告文字滚动
           jQuery(".txtScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,scroll:2,vis:2,trigger:"click"});
            
})