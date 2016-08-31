$(function(){
  //预约顾问；
  appointment();
  //广告关闭
  adClose();
  
  navHeightLight();

  $("#iiTax_type li").each(function(index){
        $(this).click(function(){
            location.href = "iiTax"+index+".html";
        })
        
  });
 
  $(".reset").click(function(e){
      e.preventDefault();
      $(".num").val("")
  })
 
});

  var navHeightLight = function(){
      var href = location.href,
          reg = /[a-zA-Z]+=/;
      var navIndex = href.split(reg)[1];
      var tabArray = ["first","publish&qiuzhi&job","taxtool","video","account","answer","shop","news"]
      var tabIndex ;
          getIndex();
      function getIndex(){
          if(!navIndex){tabIndex = 0;return;}
          $.each(tabArray,function(index){
              var t = searchArray(tabArray[index],"&");
              if(t != -1){
                tabIndex = index; return false; 
              }
          });
      };
       
      function searchArray(i,selector){
          var a = i.split(selector);
          var t;
          for(var j=0;j<a.length;j++){
              
              if(navIndex)t = navIndex.indexOf(a[j]);
              if(t != -1){
                return t; 
              }
          }
          return t;
      }
      $(".head .g-header-nav a").eq(tabIndex).addClass("on");
  }

  //预约顾问；
  var appointment = function(){
      var contact = $(".contact "),
      post_demands = $(".container .post_demands img");
      
      contact.find(".close").on('click',function(){
          toggleContact()  ;
      });
      post_demands.on('click',function(){
          toggleContact()  ;
      });

      var toggleContact = function(){
          contact.toggle();
          post_demands.toggle();
      };
  };

  //广告关闭
  function adClose(){
        var $topAd = $(".topAd"),
            $leftAd = $(".leftAd"),
            $rightAd = $(".rightAd");

        $(".ad .close").on('click', function(event) {
            var $ad = $(this).parent(".ad");
                $ad.hide();
            var cookieValue = $ad.attr("data");
            setCookie(cookieValue,"close");
        });
        
        var adTopState = getCookie("top");
        var adLeftState = getCookie("left");
        var adRightState = getCookie("right");

       
        if(adTopState){$topAd.hide();}
        if(adLeftState){$leftAd.hide();}
        if(adRightState){$rightAd.hide();}

  }

  function setCookie(name,value,hours){
  
    var exp = new Date();
    exp.setTime(exp.getTime() + hours*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
  }
  function getCookie(name){
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
    return unescape(arr[2]);
    else
    return null;
  }
	
	
