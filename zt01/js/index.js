$(function(){
	toggleBtn();
	//superSlider

	jQuery("#demo1").slide({ mainCell:".bd ul",prevCell:".sPrev",nextCell:".sNext",effect:"topLoop",autoPlay:true,triggerTime:0 });
			
	})

function toggleBtn(){
	$(document).on("click",".tBtn",function(){
		var hideText = $(this).prev(".hideText");
		var v;
		//获取隐藏的文本
		if(hideText.length){
			hideText.toggle();
		};
		v = hideText.is(":visible");

		//切换按钮文字
		if(v){
			$(this).html("【收起】");				
		}else($(this).html("【详细】"))


	})
}