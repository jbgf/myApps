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
		$(".nextPage").on("click",function(){
			
			that.turnPage(this,1);
		});

		$(".prevPage").on("click",function(){
			
			that.turnPage(this,3);
		});	

		
		
	},
	showPage:function(options){
		var trigger,target,callBack,context,_index;
			trigger = options.trigger;
			target = options.target;
			callBack = options.callBack;
			context = options.context;
			_index = options.index;
		
		var pages = $(".page");
		var currentIndex = pages.index($(trigger).parents(".page"));
		var nextIndex = _index != undefined ? _index : pages.index($(target).parents(".page"));
		
		var currentPage = pages.eq(currentIndex),
			nextPage = pages.eq(nextIndex);	
			
			currentPage.hide();
			if(callBack){
				nextPage.show(0,$.proxy(callBack,context))
			}else{nextPage.show();}


	},
	turnPage:function(trigger,dir){
		
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
		switch(dir) {
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



})

var game = {
	    /********************************************************************************
	    *****************************后台返回题目相关信息********************************
	    *********************************************************************************/
		answerList : [{"title":"中国古代名医华佗为谁所杀？","answer":"曹操","wrong":["吕布","刘备"]},{"title":"中国农历的哪个节气有着北方吃饺子、南方吃汤圆的习俗？","answer":"冬至","wrong":["春节","元宵"]},{"title":"圆周率大约值是多少？","answer":"3.1416","wrong":["0.8664","1.7341"]},{"title":"一千克铁和一千克棉花哪个重？","answer":"一样重","wrong":["铁","棉花"]},{"title":"西游记中去西天取经的\u201C唐三藏\u201D真名叫什么？","answer":"玄奘","wrong":["唐僧","玄慈"]},{"title":"李白被后人称为？","answer":"诗仙","wrong":["诗鬼","诗圣"]},{"title":"《孙子兵法》的作者是？","answer":"孙武","wrong":["孙子","孙膑"]},{"title":"狗热时用什么散热？","answer":"舌头","wrong":["耳朵","皮肤"]},{"title":"2008年奥运会在哪里举办？","answer":"北京","wrong":["伦敦","里约热内卢"]},{"title":"火警电话是？","answer":"119","wrong":["114","911"]}],
        /********************************************************************************
	    *****************************后台返回题目相关信息********************************
	    *********************************************************************************/
        totalgrade:6,     /*获取总分*/
        answerNum : 5,		/*题数*/
        answerCounter : 0, 
        canAnswer : true,
        thisround_grade:0, 
        points_per:1,   
		ready:function(){

			var that = this;
				$(".zone_wrapper .qiu").off("click").on("click",function(){
					var cityName = $(this).attr("data-city");
					$.ajax({
		                  method: "POST",  
		                  url: "",
		                  data: { city:cityName },
		                  dataType: "json"
		            }).done(function(data){
		                  that.update(data);

		                  var   zone_wrapper = $(".zone_wrapper");
								zone_wrapper.hide();
								$("#cityName").text(cityName)
								$(".answer_wrapper").show(0,function(){
									$('.readyBtn').off('click').on('click',function(e){
						                $(this).parents(".poupMask").hide();
							    	});

									that.initGameByIndex(Math.floor(Math.random()*that.answerList.length));
									that.grade.ini();

									/*下一题*/	
								    $('.nextquestion').off('click').on('click',function(e){
						                that.canAnswer = true;
						                $('.answerItem .gopng_circle').each(function(){
						                    $(this).removeClass('gopng_right gopng_error');
						                });
						                that.initGameByIndex(Math.floor(Math.random()*that.answerList.length));
						            });
								    that.judge();
								});


		            })

				})
				
			
		},
		update:function(options){
			var that = this;
			
	        that.answerList = options.answerList;/*[{"title":"中国古代名医华佗为谁所杀？","answer":"曹操","wrong":["吕布","刘备"]},{"title":"中国农历的哪个节气有着北方吃饺子、南方吃汤圆的习俗？","answer":"冬至","wrong":["春节","元宵"]},{"title":"圆周率大约值是多少？","answer":"3.1416","wrong":["0.8664","1.7341"]},{"title":"一千克铁和一千克棉花哪个重？","answer":"一样重","wrong":["铁","棉花"]},{"title":"西游记中去西天取经的\u201C唐三藏\u201D真名叫什么？","answer":"玄奘","wrong":["唐僧","玄慈"]},{"title":"李白被后人称为？","answer":"诗仙","wrong":["诗鬼","诗圣"]},{"title":"《孙子兵法》的作者是？","answer":"孙武","wrong":["孙子","孙膑"]},{"title":"狗热时用什么散热？","answer":"舌头","wrong":["耳朵","皮肤"]},{"title":"2008年奥运会在哪里举办？","answer":"北京","wrong":["伦敦","里约热内卢"]},{"title":"火警电话是？","answer":"119","wrong":["114","911"]}];*/
	        that.answerCounter = 0; 
	        that.canAnswer = true;
	        that.thisround_grade=0; 
	        totalgrade = options.totalgrade;
		},
		judge:function(){
			var that = this;
			var p = new that.processBar;
			/*判断答题正确或错误*/	
            $('.answerItem').on('click',function(e){
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
		finished:function(){
			$('.nextquestion').hide();
	        $('.checkBtn').show();

		},
		initGameByIndex:function(index,flag) {
	        var that = this;
	        that.answerCounter++;
	        
	        if( that.answerCounter > that.answerNum ){
	            return;
	        }

	        if( that.answerCounter == that.answerNum ){
	            that.finished();
	            $('.checkBtn').on("click",function(){
	            	
	            	$(".answer_wrapper").hide();

	            	result.ini();
	            })

	        }
	        
	        var answer = that.answerList[index];
	        var list = [answer.answer].concat(answer.wrong);
	        var answerOrder = [];
	        	for(var k = 0,l = list.length;k<l;k++){
	        		answerOrder.push(k)
	        	}
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

var oil_drum ={
	score_array:[404324,122455,1082455],
	city_arr:['福州','厦门','平潭'],
	score_ceil:500,
	full_stack:5,
	container:$(".sta_wrapper"),
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
		/*清空*/
		groups.html("").siblings(".oilText").remove();
		groups.each(function(i,e){
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
				text.addClass("oilText white align-center")
				
			$(e).append(cans).after(text);
		})

		
		/*插入dom到页面会导致载入时结构变动，影响美观，先隐藏在display*/
		setTimeout(function(){wrapper.show(0,function(){
			/*轮播名单*/
			jQuery(".txtMarquee-top").slide({mainCell:".bd ul",autoPlay:true,effect:"topMarquee",vis:6,interTime:50});
		})},0);
			
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
			$(".wheel_prize").css("color","inherit").attr("href","wheel.html");

		}else{
			text = "差一点没全对，下一轮再接再厉哦~";
			img1 = 'img/a_bg6.png';
			img2 = 'img/btnbg04.png';
			$(".wheel_prize").css("color","#a4a4a4").attr("href","#");;
			
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
		$(".come_again").on("click",function(){
			
			modal.show();
			
		});
		$(document).on("click",".window_close",function(){
			modal.hide();
		});
	}
};


var wheel = {
	/********************************************************************************************
	*********************************奖项设置****************************************************
	*********************************************************************************************/
	points_spend:5,        			/*每题5分*/
	prizeList:["谢谢参与","1元代金券","谢谢参与","2元代金券","谢谢参与","3元代金券","谢谢参与","4元代金券"],
	
	ini:function(){
		var that = this;
		var pointsNow = game.totalgrade;     /*现在的积分*/
		var wheel_wrapper = $(".wheel_wrapper");
		 	that.rule();
			that.rotate(pointsNow);
			$("#poupMask_info1").show();
			
			jQuery(".txtMarquee-top").slide({mainCell:".bd ul",autoPlay:true,effect:"topMarquee",vis:6,interTime:50});
	},
	rule:function(){
		$(".ruleLink").off("click").on("click",function(){
			$("#poupMask_info1").show()
		});
		$(".window_close").off("click").on("click",function(){
			var modal = $(this).parents(".poupMask");
				modal.hide();
				
		});
	},
	points:function(pointsNow){
		var that = this;

		if(pointsNow<that.points_spend){
			return false;
		}else{return true;}	
	},
	rotate:function(pointsNow){
		var that = this;
		var $rotaryArrow = $('#rotaryArrow');
		var $result = $('#wheel_result');
		var $resultTxt = $result.find("p");
				
		var num = that.prizeList.length;
		var anglePer = 360/num;	

		var w_arr = []	;
		for(var i = 0;i<num;i++){
			w_arr.push(i)
		}
		var flag = true;
		$rotaryArrow.off("click").on("click",function(){
			var data;
			
			flag = that.points(pointsNow)
			if(flag){
				data = w_arr[Math.floor(Math.random()*w_arr.length)];
			/*是否获奖*/	
				var text = that.prizeList[data] == "谢谢参与"?"谢谢参与!":"恭喜您获得了"+that.prizeList[data];
				rotateFunc(data,data*anglePer,text);
				pointsNow = pointsNow - that.points_spend;
			}else{
				$("#poupMask_info2").show()
			}		
			
		});

		var rotateFunc = function(awards,angle,text){  //awards:奖项，angle:奖项对应的角度
			$rotaryArrow.stopRotate();
			$rotaryArrow.rotate({
				angle: 0,
				duration: 5000,
				animateTo: angle + 1440,  //angle是图片上各奖项对应的角度，1440是让指针固定旋转4圈
				callback: function(){
					$resultTxt.html(text);
					$result.show();


				}
			});
		};

		
	}
	
};
