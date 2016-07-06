
			
			

/*lh为空会连续移动*/
function startmarquee(lh,speed,delay) {   //函数 函数名(变量1,变量2,变量3)滚动高度,速度,延迟
		var p=false; //定义变量 p为假;
		var t; //定义变量t了
		var o=$(".policy .news_list")[0]; //定义变量o为document.getElementByIdx_x("marqueebox")对象
		o.innerHTML+=o.innerHTML; //设置变量o的innerHTML对象为自加;设置为类似123123的队列。当高度大于
		//一般，即经过一半的队列（个数）时，马上设置为margintop=0的初始位置，因为位于第二段的开始，所以没有抖动。
		$(o).wrap('<div style="overflow:hidden;height:217px;margin-top:23px;"></div>')

		o.style.marginTop=0; //o的属性，设置或获取对象的上边距宽度
		o.onmouseover=function(){p=true;} //光标在滚动字幕范围内暂停滚动
		o.onmouseout=function(){p=false;} //光标在滚动字幕范围外也就是离开的时候继续滚动

		function start(){ //“开始”函数
			t=setInterval(scrolling,speed); //给前面定义的变量t赋值=自动（滚动，速度）
			//speed：在间隔短时间（如20ms）移动1像素，模拟速度
			if(!p) o.style.marginTop=parseInt(o.style.marginTop)-1+"px"; //当P为空，属性o的上边距宽度为数字[把变量o上边距宽度转为integer类型，其中parseInt功能为转换]
		}	//因为margintop初始值为0防止一开始定时器就（o.style.marginTop)%lh!=0）为0停止

		function scrolling(){ //“滚动”函数
			if(parseInt(o.style.marginTop)%lh!=0){ //如果对象o的上边距宽度为空，则为0（parseInt为转换作用）
			o.style.marginTop=parseInt(o.style.marginTop)-1+"px"; //上边距宽度为数字[把变量o上边距宽度转为integer类型，其中parseInt功能为转换]
			if(Math.abs(parseInt(o.style.marginTop))>=o.scrollHeight/2) o.style.marginTop=0; //如果计算出来的上边距宽度大于或者等于滚动的高度除以2 则o的上边距宽度为0
			}else{ //否则
			clearInterval(t); //指定T为空
			setTimeout(start,delay)//;指定暂停时间(开始，延迟)
			}//相当于end if，表示结束如果
			}//相当于end if，表示结束如果

			//新的开始，不包含在前面的如果里面
			setTimeout(start,delay); //指定暂停时间(开始，延迟)
};

$(function(){
	var liHeight =parseInt( $(".policy .news_list li").height()) || null;
	startmarquee(liHeight,20,1500);
})

