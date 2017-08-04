$(function(){
	/*背景图片*/
	
	

	var page = {
		ini:function(e){
			var that = this;
			document.addEventListener('touchmove',function(event){
				event.preventDefault(); },false);
			
			var wh = $(window).height();
				$(e).height(function(i,h){
							return wh;
				});
				$(".page").not($(".page").first()).addClass("hide")
			/*按钮垂直居中，用在opera mini不支持transformY*/
			/*var btnText_height = $(e).find(".LinkText").height();
			$(e).find(".LinkText").css("margin-top",-btnText_height/2);*/
			/*翻页*/
			$(".nextPage").on("touchend",function(){
				
				that.turnPage(this,1);
			});
			$(".prevPage").on("touchend",function(){
				
				that.turnPage(this,3);
			});	
		},
		turnPage:function(trigger,index){
			
			var pages = $(".page");
			var currentIndex = pages.index($(trigger).parents(".page")),
				nextIndex,outClass,inClass;
				
			var pageTotal = pages.length,
			    towards = { up:1, right:2, down:3, left:4},
			    isAnimating = false;
			if (isAnimating) return;
			if (currentIndex < pageTotal) { 
				
			}else{
				currentIndex=1;
			};
			switch(index) {
				case towards.up:
					if(currentIndex == pageTotal-1 ){return}
					outClass = 'pt-page-moveToTop';
					inClass = 'pt-page-moveFromBottom';
					nextIndex = currentIndex + 1; 
					break;
				case towards.down:
					if(currentIndex == 0 ){return}
					outClass = 'pt-page-moveToBottom';
					inClass = 'pt-page-moveFromTop';
					nextIndex = currentIndex - 1;
					break;
			}
			pageMove();
			
			function pageMove(){
				var currentPage = pages.eq(currentIndex),
					nextPage = pages.eq(nextIndex);
					
					nextPage.removeClass("hide");
					currentPage.addClass(outClass);

					nextPage.addClass(inClass);
					isAnimating = true;

				setTimeout(function(){
					currentPage.removeClass('page-current');
					currentPage.removeClass(outClass);
					currentPage.addClass("hide");
					//currentPage.find("img").addClass("hide");
					
					nextPage.addClass('page-current');
					nextPage.removeClass(inClass);
					//nextPage.find("img").removeClass("hide");
					
					isAnimating = false;
				},600);
			};
			
			
		}
	};
	page.ini(".pageWrapper");

	var oil_drum ={
		score_array:[404324,122455,1082455],
		city_arr:['福州','厦门','平潭'],
		score_ceil:500,
		full_stack:5,
		ini:function(){
			var that = this;
			var groups = $(".oil_drum").find(".cans_wrapper");
			var wrapper = $(".sta_wrapper");
			var rate_arr = that.get_rate();
			var max = Math.max.apply(null, rate_arr); 
			var total = that.score_array.reduce(function(accumulator, currentValue, currentIndex, array) {
												  return accumulator + currentValue;
												});
			$("#sta_total").text(total)
			wrapper.hide();

			groups.forEach(function(e,i,a){
				var cans = '';
				var index = i+1;
				var indexFrom;
				for(var j = 0,l = oil_drum.full_stack; j < l;j++){
					var z = l-j;
					var visible = j < l - rate_arr[i] ? "view_hide": "";
						if(j< l - max){
							visible = "hide";
						}else if(j == l-max){
							visible += " first_seen"
						}
							;
					cans += '<div class="img_w relative '+visible+' " style="z-index:'+z+'"><img src="img/can'+index+'.png"></div>';
				}
				var text = $('<div><p>'+that.score_array[i]+'</p><p>'+that.city_arr[i]+'</p></div>');
					text.addClass("white align-center")
					
				$(e).append(cans).after(text);
			})
			/*插入dom到页面会导致载入时结构变动，影响美观，先隐藏在display*/
			setTimeout(function(){wrapper.show()},0);

			if($(".marqueebox").length>0){
				var liHeight =parseInt( $(".marqueebox li").height())|| null;
				startmarquee(liHeight,200,1500);
			}
			
		},
		get_rate:function(){
			var that = this;
			var ceil = that.set_ceil(),
				numOfCan = that.full_stack;
			var arr = that.score_array;
			var arr2 = [];
			arr.map(function(item,index){
				var rate = Math.ceil(item/ceil*numOfCan);
				
				arr2.push(rate);
			})
			/*返回应该显示的油桶序号*/
			return arr2;
		},
		set_ceil:function(){
			var that = this;
			var ceil = that.score_ceil,
				arr = that.score_array;
			var max = Math.max.apply(null, arr);
			while(ceil<max){
				ceil = ceil*2;
			}
			console.log(ceil)
			return ceil;
		}
	};
	oil_drum.ini();


	
})

var game = {
	    /********************************************************************************
	    *****************************后台返回题目相关信息********************************
	    *********************************************************************************/
		answerList : [{"title":"中国古代名医华佗为谁所杀？","answer":"曹操","wrong":["吕布","刘备"]},{"title":"中国农历的哪个节气有着北方吃饺子、南方吃汤圆的习俗？","answer":"冬至","wrong":["春节","元宵"]},{"title":"圆周率大约值是多少？","answer":"3.1416","wrong":["0.8664","1.7341"]},{"title":"一千克铁和一千克棉花哪个重？","answer":"一样重","wrong":["铁","棉花"]},{"title":"西游记中去西天取经的\u201C唐三藏\u201D真名叫什么？","answer":"玄奘","wrong":["唐僧","玄慈"]},{"title":"李白被后人称为？","answer":"诗仙","wrong":["诗鬼","诗圣"]},{"title":"《孙子兵法》的作者是？","answer":"孙武","wrong":["孙子","孙膑"]},{"title":"狗热时用什么散热？","answer":"舌头","wrong":["耳朵","皮肤"]},{"title":"2008年奥运会在哪里举办？","answer":"北京","wrong":["伦敦","里约热内卢"]},{"title":"火警电话是？","answer":"119","wrong":["114","911"]}],
        /********************************************************************************
	    *****************************后台返回题目相关信息********************************
	    *********************************************************************************/
        totalgrade:100,     /*获取总分*/
        answerNum : 5,		/*题数*/
        answerCounter : 0, 
        canAnswer : true,
        thisround_grade:0, 
        points_per:1,   
		ready:function(){
			var that = this;
			/*$(".gameBox").show();*/
			
			$('.readyBtn').on('touchstart',function(e){
	                $(".poupMask").hide();
	                /*ready倒计时*/
	                /*$('.gopng_readyTips,.gopng_readyBtn').hide();
	                $('.timer').show();
	                var timeCount = 3;
	                var timer = setInterval(function(){
	                    if(timeCount <= 1){
	                        clearInterval(timer);
	                        $('.poupMask').hide();
	                    }
	                    timeCount -= 1;
	                    $('.timer').addClass('gopng_'+timeCount);
	                },500);*/
		                
		    });
			
			that.initGameByIndex(Math.floor(Math.random()*that.answerList.length));
			that.grade.ini();
			

			/*下一题*/	
		    $('.nextquestion').on('touchstart',function(e){
                that.canAnswer = true;
                $('.answerItem .gopng_circle').each(function(){
                    $(this).removeClass('gopng_right gopng_error');
                });
                that.initGameByIndex(Math.floor(Math.random()*that.answerList.length));
            });
		    that.judge();
		},
		judge:function(){
			var that = this;
			var p = new that.processBar;
			/*判断答题正确或错误*/	
            $('.answerItem').on('touchend',function(e){
                /*if(_gameOver){
                    return;
                }*/
                if(that.canAnswer){
                    if($(this).find('.answer').data('isAnswer')){
                        $(this).find('.gopng_circle').addClass('gopng_right');
                        that.grade.add(that.points_per);
                        /*正确声音*/
                        /*var r_url = music.musicList.right;
                        music._play(r_url);*/
                        p.create();
                    }else{
                        $(this).find('.gopng_circle').addClass('gopng_error');
                        $('.answerItem').each(function(){
                            if($(this).find('.answer').data('isAnswer')){
                                $(this).find('.gopng_circle').addClass('gopng_right');
                            }
                        })
                       /*错误声音*/
                        /*var w_url = music.musicList.false;
                        music._play(w_url);*/
                    }
                    that.canAnswer = false;
                } 
            });
		},
		initGameByIndex:function(index,flag) {
	        var that = this;
	        that.answerCounter++;
	        
	        if( that.answerCounter > that.answerNum ){
	            return;
	        }

	        if( that.answerCounter == that.answerNum ){
	            $('.nextquestion').hide();
	            $('.checkBtn').show();
	            $('.checkBtn').on("touchend",function(){
	            	$(".answer_wrapper").hide();
	            	result.ini();
	            })

	        }
	        
	        var answer = that.answerList[index];
	        var list = [answer.answer].concat(answer.wrong);
	        var answerOrder = [0,1,2];
	        /*设置题目*/
	        $('#titleList').text(answer.title);
	        /*设置序号*/
	        var itemCount ="(" + that.answerCounter + "/" + that.answerNum + ")";
	        $(".indexItem").text(itemCount);
	        if(!flag){
	            $('.answer').each(function(i){
	                var r = Math.floor(Math.random()*answerOrder.length);
	                var el = $('.answer').eq(answerOrder[r]);
	                /*设置正误，选项内容*/
	                el.text(list[i]).data("isAnswer",false);
	                

	                if(i == 0){
	                    el.data("isAnswer",true);
	                }
	                /*减去已经选中答案*/
	                answerOrder.splice(r,1);
	            });
	            /*减去已经选中的题目*/
	            that.answerList.splice(index,1);
	        }else{
	            $('.answer').each(function(i){
	                var el = $('.answer').eq(answerOrder[i]);
	                el.text(list[i]);
	            });
	        }
	    },
	    grade:{
	    	ini:function(){

	    		$("#totalgrade").text(game.totalgrade);
	    		$("#grade").text("0");
	    	},
	    	add:function(points){
	    		
	    		setValue("#grade",points);
	    		game.thisround_grade +=points;
	    		setValue("#totalgrade",points);
	    		game.totalgrade += points;
	    		function setValue(e,points){
	    			var cv =parseInt($(e).text());
			    		cv+= points;
			    		$(e).text(cv);

	    		}
	    	}	
	    },
	    processBar:function(){
	    	this.Bar = $(".processBar");
	    	
	    	this.w = this.Bar.width()/game.answerNum+'px';
	    	this.create = function(){

	    		var process_block = $("<div class='process_block' style='width:"+this.w+"'></div>");
	    		var addonIcon = $(".addonIcon img");
	    		$(".processThumb").append(process_block);
	    		addonIcon.addClass("shake");
	    		setTimeout(function(){
	    			addonIcon.removeClass("shake");
	    		},800)
	    	}	
	    }
	};

var result = {
	range:100,      /****************现在的排名**********************************/
	
	ini:function(){
		var that = this;
		var grade = game.thisround_grade;
		var totalgrade = game.totalgrade;
		var success = that.determine();
		var text,img1,img2 ;

		$(".result_wrapper").show();

		$(".this_score").text(grade);
		$(".all_score").text(totalgrade);
		$(".rangeNow").text(that.range)
		if(success){
			text = "真棒，全答对了！可谓是自贸区小达人！";
			img1 = 'img/a_bg7.png';
			img2 = 'img/btnbg02.png';
		}else{
			text = "差一点没全对，下一轮再接再厉哦~";
			img1 = 'img/a_bg6.png';
			img2 = 'img/btnbg04.png';
			
			$(".wheel_prize").on("touchend",function(e){
					e.preventDefault();
					return false;

			}).css("color","#a4a4a4")
		}
		$(".result_tips").text(text);
		$(".result_bg").attr({src:img1});
		$(".wheel_prize img").attr({src:img2})
		this.share();

	},
	determine:function(){
		var result ;
		var grade = game.thisround_grade;
		grade < game.answerNum * game.points_per ? result = false:result = true;
		return result;
	},
	share:function(){
		var modal = $(".homePoupMask02");
		$(".come_again").on("touchend",function(){
			
			modal.show();
			
		});
		$(document).on("touchend",".window_close",function(){
			modal.hide();
		});
	}
};

var wheel = {
	ini:function(){

		$(document).on("touchend",".window_close",function(){
			var modal = $(this).parents(".poupMask");
			
				modal.hide();
			
			
		});
	},
	scroll:function(){
		this.p = false;	
		this.t = null;
		/*lh为空会连续移动*/
		function startmarquee(speed,delay) {   //函数 函数名(变量1,变量2,变量3)滚动高度,速度,延迟
				var p=false; //定义变量 p为假;
				var t; //定义变量t了
				var o=document.getElementById("marqueebox"); //定义变量o为document.getElementByIdx_x("marqueebox")对象
				o.innerHTML+=o.innerHTML; //设置变量o的innerHTML对象为自加;设置为类似123123的队列。当高度大于
				//一般，即经过一半的队列（个数）时，马上设置为margintop=0的初始位置，因为位于第二段的开始，所以没有抖动。
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
		}
	}
};
wheel.ini();


/*lh为空会连续移动*/
function startmarquee(lh,speed,delay) {   //函数 函数名(变量1,变量2,变量3)滚动高度,速度,延迟
		var p=false; //定义变量 p为假;
		var t; //定义变量t了
		var o=document.getElementsByClassName("marqueebox")[0]; //定义变量o为document.getElementByIdx_x("marqueebox")对象
		o.innerHTML+=o.innerHTML; //设置变量o的innerHTML对象为自加;设置为类似123123的队列。当高度大于
		//一般，即经过一半的队列（个数）时，马上设置为margintop=0的初始位置，因为位于第二段的开始，所以没有抖动。
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
}




