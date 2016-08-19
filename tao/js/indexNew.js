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
      var tabArray = [undefined,"publish","taxtool","video","account","answer","shop","news"]
      var tabIndex = tabArray.indexOf(navIndex);
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
    
        $(".head .ad .close").on('click', function(event) {
            $(this).parent("div").hide();
        });
        
  }

	
	
