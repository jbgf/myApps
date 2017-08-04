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
		//	$(".page").not($(".page").first()).addClass("hide")
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

var wh = $(window).height(),
	ww = $(window).width();
var game = {
	    /********************************************************************************
	    *****************************后台返回题目相关信息********************************
	    *********************************************************************************/
		answerList : [],
        /********************************************************************************
	    *****************************后台返回题目相关信息********************************
	    *********************************************************************************/
        totalgrade:6,     /*获取总分*/
        answerNum : 5,		/*题数*/
        answerCounter : 0, 
        canAnswer : true,
        thisround_grade:0,  /*本轮得分*/
        points_per:1,       /*每题分数*/
        time:30,             /*答题时间*/
        delay:500,           /*答题完的间隔时间ms*/
        final_time:5,        /*最后答题时间提示*/
        num_answer:0,        /*第几次答题*/
        clock:null,
        _gameOver:false,
        mode:null,
       	whichAnswer:[],
		ready:function(_options){

			  var that = this;
			  
				  that.update(_options);
				  that.showTipsPopUp(that.delay);	
				  $(".answer_wrapper").show(0,function(){
						that.startAnswerEvent();
						//that.initGameByIndex(Math.floor(Math.random()*that.answerList.length));
						that.grade.ini();
	/*！！！！！！！*/
						$("#select_bg").css({'height':wh*.65})

					    that.judge();
					    that.trigger_next();
				  });
				  
				
		},
		jumpToResult:function(){
				var that = this;

                	/*如果答题结束结束*********************/
                    if(that._gameOver){
					/*本轮得分*********************/               	
                    	
                    	var points = that.thisround_grade;
                    /*第几次答题*********************/ 
                    	var num = that.num_answer; 
                    	var flag = determine(points),
                    		resultUrl;

                    		resultUrl = flag?'goodresult.php' : 'badresult.php';              	
                    	console.log(points)
                    //	setTimeout(function(){location.href = resultUrl},that.delay);	
                    }else{
                    //	that.showTipsPopUp();	
                    //	setTimeout(function(){that.nextquestion()},that.delay);	
                    }

				function determine(points){
					var result ;
					
						points < game.answerNum * game.points_per ? result = false:result = true;
						
						return result;
				}
                
		},
		trigger_next:function(){
				var that = this;
				$(document).on('click','.nextone',function(e){
					that.chooseComplete();
				})
		},
		startAnswerEvent:function(){
			var that = this;

				$(document).on("click","#startAnswer",function(){
						$(".poupMask").hide();
						that.nextquestion();
				});
				$(document).on("click","#results-startAnswer",function(){
						
						if(that._gameOver){

							return false;
						}else{
							$(".poupMask1").hide();
							that.nextquestion()
							//setTimeout(function(){that.nextquestion()},that.delay);
							//that.showTipsPopUp();	
						}
						
				});
				

		},
		nextquestion:function(){
				/*下一题*/	
				    var that = this;
				    	if(that._gameOver){
		                    return;
		                };
		                $('.answerItem .gopng_circle').each(function(){
		                    $(this).removeClass('gopng_right gopng_error');
		                });
		                that.initGameByIndex(Math.floor(Math.random()*that.answerList.length));
		            
		},
		update:function(_options){
			var that = this;
				
		        that.answerList = _options.answerList;
		        that.totalgrade = _options.totalgrade;
		        that.points_per = _options.points_per;
		        that.mode = _options.mode;
		        that.answerNum = _options.answerNum;
		        that.time = _options.time;
		        that.num_answer = _options.num_answer;
		        that.answerCounter = 0; 
		        that.canAnswer = true;
		        that.thisround_grade = 0; 
		},
		countDown:function(){
					 var that = this,
	                 timeCount = that.time,
	                 i = 0,
	                 final_time = that.final_time;
	                 $(".timeCount").text(timeCount);

	                 var timer = setInterval(function(){
	                    i += 1;

	                    $(".timeCount").text(timeCount-i);
	                    if(timeCount <= i){
	                        that.stopCount(timer);
	                        that.showResult('timeout');
	                        return;
	                    }
	                
	                },1000);
	                 
	                return timer; 
		                
		},
		chooseComplete:function(){
			var that = this;
				if(that.clock){that.stopCount(that.clock)}
				if(that.isRight){
					that.grade.add(that.points_per);
				}else{
					that.showCorrectAnswer();	
				}
		},
		stopCount:function(clock){
				clearInterval(clock);
		},
		judge:function(){
			var that = this;
			/*var p = new that.processBar;*/
			/*判断答题正确或错误*/	
            $(document).on('click','.answerItem',function(e){
            	var problem_id = $(this).parents("#answerList").attr("data_question"),
            		question_id = $(this).parents("#answerList").attr("data_problem"),
            		answer = $(this).find(".answer").text();

                if(that.canAnswer){
                	
					that.numAnswered++;                
                    var isRight = $(this).find('.answer').data('isAnswer');
                    if(isRight){
                        $(this).find('.gopng_circle').addClass('gopng_right');
                        if(that.numAnswered == that.answerArrLength){
                        	//that.isRight = true;
                        }
                        that.isRight = true;
                    }else{
                        $(this).find('.gopng_circle').addClass('gopng_error');
                       /* that.showCorrectAnswer();*/
                        /*答错了不可以再选*/
                        that.canAnswer = false;
                    }
                    /*单选题只能选一次不可以再选*/
                    if(that.answerArrLength == 1){that.canAnswer = false;}
                 	
                 	that.showResult(isRight);
                } 
            });
		},
	//每答一道题展示结果;		
		showResult:function(isRight){
			var that = this;
			that.chooseComplete();
			$(".poupMask1 .imgBox").hide();
			if(isRight == true){
				$(".poupMask1").addClass("right");
				$(".poupMask1 .imgBox.right").show();

			}else{
				$(".poupMask1").removeClass("right");
				$(".poupMask1 .imgBox.wrong").show();
				var textWrong;
				if(isRight == false){
					textWrong = '您答错了！真遗憾！';
				}
				if(isRight == 'timeout'){
					textWrong = '您超时了！真遗憾！';
				}
				$('.textWrong').text(textWrong);
				$(".resultInfo .answerIs").text('正确答案：'+that.whichAnswer.toString());	
			}
			if(this._gameOver){
				
				$("#nextOne").text('交卷咯').on("click",function(){
					location.href = 'http:www.baidu.com'/*'result.php'*/;
					/*本轮分数
					that.thisround_grade*/
				})
				
				

			}
			setTimeout(function(){$(".poupMask1").show();},150) 
		},
		showCorrectAnswer:function(){
			var that = this;
			that.whichAnswer.length = 0;
			$('.answerItem').each(function(i,e){
                if($(this).find('.answer').data('isAnswer')){
                    $(this).find('.gopng_circle').addClass('gopng_right');
                    that.whichAnswer.push( String.fromCharCode(65+i));
                }
            })
            console.log(that.whichAnswer)
		},
		finished:function(){
			$('.nextone img').attr("src","img/checkresult.png");
	        /*$('.checkBtn').show();*/
	        this._gameOver = true;
	        

		},

		getAnswerFromArr:function(answer){
			var that = this;
				that.answerArrLength = answer['answer'].length;
			return answer['answer'].concat(answer['wrong']);
		},
		showTipsPopUp:function(delay){
			 	
				/*随机出现的小贴士*/
				var tips = $(".poupMask .tips01");
				var num  = Math.floor(Math.random()*(tips.length));
					console.log(num)
					tips.removeClass("on").eq(num).addClass("on");
					$(".gameBox").show()
					//setTimeout(function(){$(".gameBox").show();},delay);
			
		},
		initGameByIndex:function(index,flag) {
	        var that = this;
	        	that.answerCounter++;
	        	that.canAnswer = true;
	        	that.isRight = false;
	        	that.numAnswered = 0;
	        	
	        if( that.answerCounter > that.answerNum ){
	            return;
	        }

	        if( that.answerCounter == that.answerNum ){
	            that.finished();
	        }
	        
	        $(this).parents("#answerList").attr({"data_question":""});
	        $(this).parents("#answerList").attr({"data_problem":""})
	        if(that.clock){that.stopCount(that.clock)}
	        that.clock = that.countDown();

	        var answer = that.answerList[index];
	        /*组成数组*/
	        var list = that.getAnswerFromArr(answer);
	       
	        var question_id = answer.question_id,
	        	problem_id = answer.problem_id;

	        $("#answerList").html("");
	        var answerItem = '<div class="answerItem">'
                                +'<span class="gopng_circle"></span>'
                                +'<div class="answerBox"><span class="answer"></span></div>'
                            +'</div>'
                            +'<div class="clear"></div>';
                  
            /*新建答案序号数组*/                  
	        var answerOrder = [];
	        	for(var k = 0,l = list.length;k<l;k++){
	        		answerOrder.push(k);
	        		$("#answerList").append(answerItem)
	        	}
	        if(question_id)$("#answerList").attr({"data_question":question_id});
            if(problem_id)$("#answerList").attr({"data_problem":problem_id});  	
	        /*设置题目*/
	        $('#titleList').text('Q'+that.answerCounter+':'+answer.title);
	        /*设置序号*/
	        var itemCount ="<span class='yellow'>"+ that.answerCounter +"</span>"+ "/" + that.answerNum ;
	        $(".indexItem").html(itemCount);
	        if(!flag){
	        	var last;

	            $('.answer').each(function(i){
	            /*选项第一个为正确，然后随机选取*/
	                var r = Math.floor(Math.random()*answerOrder.length);
	                var el,index_of;
	                if(that.mode == "random"){
	                	index_of = r;
	                	el = $('.answer').eq(answerOrder[index_of]);

	                }else if(that.mode == "order"){
	                	index_of = i;
	                	el = $('.answer').eq(index_of);
	                }
	                
	                /*设置正误，选项内容*/
	                el.text(list[i]).data("isAnswer",false);
	               	/*处理选项中有以上两字*/
	                if(list[i].indexOf('以上') != -1 ){last = el.parents(".answerItem");}
	                if(i < that.answerArrLength){
	                    el.data("isAnswer",true)/*.attr('data-test','yes')*/;
	                } 
	                /*减去已经选中答案的序号*/
	                answerOrder.splice(index_of,1);
	                
	            });

	            if(last )last.insertAfter(".clear:last");	
	            $(".answer").each(function(i,e){
	            	$(this).prepend(String.fromCharCode(65+i)+'.');
	            })
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
			that.share();
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
		$(document).on("click",".modalBox_close",function(){
            
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
