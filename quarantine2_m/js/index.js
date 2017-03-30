$(function(){
	

	//banner swiper轮播
	var mySwiper = new Swiper ('#swiper-container01', {
	    autoplay:5000,
	    loop: true,
	    pagination: '#swiper-pagination01'

	}) 

	//首页news tab切换
	tab_index("#swiper-container02",3,"#swiper-container03");
	
	//center tab切换
	var tabNum = $("#swiper-container04").find(".tab").length;
	tabNum = tabNum>3?3:tabNum;
	tab("#swiper-container04",tabNum);
	
	var tabNum06 = $("#swiper-container06").find(".tab").length;
	tabNum06 = tabNum06>3?3:tabNum06;
	tab("#swiper-container06",tabNum06);

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

function tab(tab,perView){
		if($(tab).length == 0)return;
		var num01 = $(tab).find(".swiper-slide").length;
		var status = num01 > perView ? true : false;
		var mySwiper02;	
    	if(status){
    		mySwiper02 = new Swiper (tab, {
			    /*autoplay:5000,*/
			    onInit: function(swiper){
			    	var index;
			    	$.each(swiper.slides,function(i,e){
			    		if($(this).hasClass("ss-active")){
			    			 index = i;return false;
			    			
			    		}
			    	})
			    	swiper.slideTo(index);
			    },
			    loop: status,
			    slidesPerView:perView,
			  //  slideToClickedSlide:true
			})
    	}else{
    		//$(tab).find(".swiper-slide").eq(0).addClass("swiper-slide-active")
    		$(tab).find(".swiper-slide.ss-active").addClass("swiper-slide-active");
    		$(tab).find(".swiper-slide").css("width",100/perView+"%").on("click",function(){
    			mySwiper03.slideTo( $(this).index())
    		});
    	}

}


function tab_index(tab,perView,slider){
		if($(tab).length == 0)return;
    	var mySwiper02 = new Swiper (tab, {
		    /*autoplay:5000,*/
		    loop: true,
		    slidesPerView:perView,
		    slideToClickedSlide:true,
		})
		
		var num01 = $(slider).find(".swiper-slide").length;

		var mySwiper03 = new Swiper (slider, {
		    loop: true,
		    slidesPerView:1,
		    autoHeight:true,   //自动调整高度
		    loopAdditionalSlides:(mySwiper02.slides.length-num01)/2-1   //复制后的slide数量要一样
		})
		mySwiper02.params.control = mySwiper03;  /*双向控制*/
		mySwiper03.params.control = mySwiper02;
}