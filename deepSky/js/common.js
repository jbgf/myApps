  $(function(){
      /*导航栏*/
      (function(){
        
            var $hBdot=$("#h_bdot"),
                $hNav=$("#h_nav"),
                $hNavli=$hNav.find("li"),
                $hSubnav=$("#h_subnav"),
                $hSubDD=$hSubnav.find("dd"),
                $moreNav=$("#more_nav");
                //导航事件
                $("#nav_more").on("touchend",function(){
                  $moreNav.toggleClass('show');
                })
                $("#nav_more").on("mouseenter",function(){
                  $moreNav.addClass("show");
                });
                $moreNav.on("mouseleave",function(){
                  $moreNav.removeClass("show");
                  $hBdot.css({left:-9999,top:106});
                })
                $hNavli.on("mouseenter",function(){
                  $hBdot.css({left:18,top:106+$hNavli.index(this)*69});
                });
                $hNav.on("mouseleave",function(){
                  $hBdot.css({left:-9999});
                });
                $hSubnav.find("dt").on("mouseenter",function(){
                  $hBdot.css({left:18});
                  $hSdot.css({left:-9999});
                });
                $hSubDD.on("mouseenter",function(){
                  $hSdot.css({left:18,top:53+$hSubDD.index(this)*44});
                  $hBdot.css({left:-9999});
                });
                $hSubnav.on("mouseleave",function(){
                  $hSdot.css({left:-9999});
                }); 
             
          })();
  });

