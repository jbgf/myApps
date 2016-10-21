$(function(){
	//banner swiper轮播
	var mySwiper = new Swiper ('#swiper-container01', {
	    autoplay:5000,
	    loop: true,
	    pagination: '#swiper-pagination01'

	}) 

	//首页news tab切换
	tab("#swiper-container02",3,"#swiper-container03");
	
	//center tab切换
	var numPerView = $("#swiper-container04").find(".tab").length;
		numPerView = numPerView <= 4 ? numPerView :4;
	tab("#swiper-container04",numPerView,"#swiper-container05");
	
	/*sideBar*/
	$(".sideBarBtn").on("tap click",function(){
              $(".affix_p_sideBar .siderBar01").toggleClass("on");
              background(this);
    })

	//bottomBar 
	
    $(".affix_p_bottom").Affix({
        offset:{
            bottom: $('.footer').innerHeight()
        }
    })
    
    $(window).load(function(){
    	$(".affix_p_sideBar").Affix({
	        offset:{
	        	top:$(".m-logoRow").height(),	
	            bottom: $('.footer').innerHeight()
	        }
	    })
    })
    
})

function background(trigger){
	var b = $(".bg");
	if(b.length == 0){
		b = $("<div class='bg'/>");
		b.appendTo("body");	
		b.on("tap click",function(){$(trigger).trigger("tap")});
	}
	b.toggleClass("on");
}

function tab(tab,perView,slider){
		if($(tab).length == 0)return;
		var num01 = $(slider).find(".swiper-slide").length;
		var status = num01 > perView ? true : false;
		var mySwiper02;	
    	if(status){
    		mySwiper02 = new Swiper (tab, {
			    /*autoplay:5000,*/
			    loop: status,
			    slidesPerView:perView,
			    slideToClickedSlide:true
			})
    	}else{
    		$(tab).find(".swiper-slide").eq(0).addClass("swiper-slide-active")
    		$(tab).find(".swiper-slide").css("width",100/perView+"%").on("click",function(){
    			mySwiper03.slideTo( $(this).index())
    		});
    	}

		var mySwiper03 = new Swiper (slider, {
		    loop: status,
		    onSlideChangeStart: function(swiper){
		      if(!status){
		      	    $(tab).find(".tab ").removeClass('swiper-slide-active')
		            $(tab).find(".tab ").eq(swiper.activeIndex).addClass('swiper-slide-active') 	 	
		      }
		    },
		    slidesPerView:1,
		    autoHeight: true,
		    loopAdditionalSlides:(status?mySwiper02.slides.length:num01-num01)/2-1   //复制后的slide数量要一样
		})
		if(status){
			mySwiper02.params.control = mySwiper03;  /*双向控制*/
			mySwiper03.params.control = mySwiper02;
	    }
}