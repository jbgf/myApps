$(function(){
	var contact = $(".contact "),post_demands = $(".container .post_demands img");
  var toggleContact = function(){
      contact.toggle();
      post_demands.toggle();
  };
	contact.find(".close").on('click',function(){
    	toggleContact()  ;
          
  });
	post_demands.on('click',function(){
		  toggleContact()  ;
  });


  $("#iiTax_type li").each(function(index){
        $(this).click(function(){
            location.href = "iiTax"+index+".html";
        })
        
  });
 

  $(".reset").click(function(e){
      e.preventDefault();

      $(".num").val("")
  })
    

  

 
})

	
	
