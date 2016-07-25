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
})

	
	
