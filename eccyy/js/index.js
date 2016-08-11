//首页广告和banner
$(function(){
	
/*导航切换*/	

	for(i=0;i<7;i++){$(".nav-ul li a").eq(i).wrapInner( '<span class="out out'+i+' "></span>' );}
	
	for(i=0;i<7;i++){$(".nav-ul li a").eq(i).each(function() {
		$( '<span class="over over'+i+'">' +  $(this).text() + '</span>' ).appendTo( this );
	});}

	$(".nav-ul li a").hover(function() {
		$(".out",	this).stop().animate({'top':	'121px'},	300); // move down - hide
		$(".over",	this).stop().animate({'top':	'0'},		300); // move down - show

	}, function() {
		$(".out",	this).stop().animate({'top':	'28px'},	300); // move up - show
		$(".over",	this).stop().animate({'top':	'-121px'},	300); // move up - hide
	});	
	
});

/*新品推荐*/
$(function(){
	$("#safety_left a").hover(function(){
		
		$(this).children(".safelicon").stop().animate({top:"283px"},100);
		$(this).find(".st_hs").show();
	},function(){
		$(this).children(".safelicon").stop().animate({top:"328px"},100);
		$(this).find(".st_hs").show();
	});
/*安全标准*/

	$("#safety_right_conr ul li").hover(function(){
		
		var _index = $(this).index();
		
		$("#safety_right_conr ul li").removeClass('safety_hli').eq(_index).addClass('safety_hli');
		
		for(var _i = 0; _i < 6; _i++){
			if(_i != _index){
				$("#safety_right_conl").children('div').children('span').eq(_i).css('bottom','-68px');
			}
		}
		
		$("#safety_right_conl").children('div').hide().eq(_index).show().children('span').stop(true,false).animate({bottom:'0px'},500);
	});
})