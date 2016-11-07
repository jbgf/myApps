$(function(){
	toggleBtn();

	
	//superSlider
	jQuery("#demo1").slide({ mainCell:"#bd ul",titCell:"#demo2 ul li",effect:"fold",autoPlay:true,triggerTime:500,delayTime:400});
	jQuery("#demo2").slide({ mainCell:"ul",prevCell:".sPrev",nextCell:".sNext",effect:"topLoop",autoPlay:true,triggerTime:500,vis:4,delayTime:400});
	})

function toggleBtn(){
	$(document).on("click",".foreword .tBtn",function(){
		var hideText = $(this).siblings(".hideText");
		var wrapper = $(this).parents(".text_w");

		var v;
		//获取隐藏的文本
		if(hideText.length){
			hideText.toggle();
		};
		v = hideText.is(":visible");

		//切换按钮文字
		if(v){

			$(this).html("【收起】");
			wrapper.css("height","auto");				
		}else{
			$(this).html("【详细】");
			wrapper.css("height","196px");
		}


	})
}