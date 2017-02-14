$(function(){
/*背景图片*/
var wh = $(window).height(),
	ww = $(window).width();
var page = {
	ini:function(e){
		var that = this;
		document.addEventListener('touchmove',function(event){
			event.preventDefault(); },false);
		
		
			$(e).height(function(i,h){
						return wh;
			});

			$(".wrapper01").css({top:-wh*0.08})
			
		/*规则 start*/
		var modal = $(".homePoupMask02");
			var ratew = 0.9;
			var rateh = 0.6;
			$("#rule_details").css({"height":wh*rateh,'width':ww*ratew}).parents("#skillSupPoup").css({"height":wh*rateh,'width':ww*ratew})

		$(".ruleBtn").on("click",function(){
			modal.show();
		});
		$(document).on("click",".closeBtn",function(){
				modal.hide();
		});

	}
};
page.ini(".pageWrapper");



});
