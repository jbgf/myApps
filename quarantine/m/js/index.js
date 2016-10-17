$(function(){
	

	//banner swiper轮播
	var mySwiper = new Swiper ('#swiper-container01', {
	    autoplay:5000,
	    loop: true,
	    pagination: '#swiper-pagination01'

	}) 



	//news tab切换
	var mySwiper02 = new Swiper ('#swiper-container02', {
	    /*autoplay:5000,*/
	    loop: true,
	    slidesPerView:3,
	    slideToClickedSlide:true,
	})
	var mySwiper03 = new Swiper ('#swiper-container03', {
	    loop: true,
	    slidesPerView:1,
	    loopAdditionalSlides:2   //复制后的slide数量要一样
	})
	mySwiper02.params.control = mySwiper03;  /*双向控制*/
	mySwiper03.params.control = mySwiper02;
	
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