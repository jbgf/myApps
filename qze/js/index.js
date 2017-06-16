$(function(){
          
          jQuery.fn.isChildOf = function(b){
              return (this.parents(b).length > 0);
          };

          //导航栏
          showTime();
          var st = 180;
          $('.navbar-block').mouseenter(function () {
              $(this).find('ul').stop(false, true).slideDown(st);
          }).mouseleave(function () {
              $(this).find('ul').stop(false, true).slideUp(st);
          });

          //banner 轮播
          //jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true,effect:"leftLoop",easing:"swing",interTime:"3500"});
          //最新公告文字滚动
            jQuery(".txtScroll-left").length>0 && jQuery(".txtScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,scroll:1,vis:1,trigger:"click"});
          //news滚动
          jQuery("#newsBox01").length>0 && jQuery("#newsBox01").slide({mainCell:".bd ul",autoPlay:true,effect:"leftLoop",easing:"swing",interTime:"3500"});  
          //news tab切换
          jQuery(".slideTxtBox").length>0 && jQuery(".slideTxtBox").slide();
          if($(" .rangePic .bd li").length>4){
                  jQuery(".rangePic").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,scroll:1,vis:4,trigger:"click",interTime:6000});
          }


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
            });


            $(".l-sider02 .list .item:not(.on)").hover(function(){
              $(this).addClass("on")
           },function(){
              $(this).removeClass("on")
           });
            var item_on = $(".l-sider02").find(".item.on");
            if(item_on.length != 0){item_on.parents(".list").prev(".floor").trigger("click")}

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
function showTime(){ 
            var show_day=new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六'); 
            var time=new Date(); 
            var year=time.getFullYear(); 
            var month=time.getMonth(); 
            var date=time.getDate(); 
            var day=time.getDay(); 
            var hour=time.getHours(); 
            var minutes=time.getMinutes(); 
            var second=time.getSeconds(); 
            month=month+1; 
            month<10?month='0'+month:month; 
            
            hour<10?hour='0'+hour:hour; 
            minutes<10?minutes='0'+minutes:minutes; 
            second<10?second='0'+second:second; 
            var now_time=year+'年'+month+'月'+date+'日'+' '+show_day[day]+' '+hour+':'+minutes+':'+second; 
            var showTimeDiv = document.getElementById('showtime');
                
                if(showTimeDiv){
                    showTimeDiv.innerHTML = now_time; 
                    setTimeout(showTime,1000);  
                }else{
                  
                  return false;
                }
            
};