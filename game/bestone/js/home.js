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
/*！！！！！！！*/			/*黑板高度*/
			$("#a_bg8").height(function(i,h){
						return wh*.65;
			}).css({"width":"100%","display":"block"});

/*！！！！！！！*/			/*答题按钮位置*/
			$("#start_answer").css({"bottom":wh*.1,"position":"relative"})

			$(".page").not($(".page").first()).addClass("hide")
		
			
			
			+function ruletop_offset(){
				var modal = $(".homePoupMask02"),
					modalHeight;
					$(".rulePage").on("click",function(){
						modal.show(0,function(){
							if(!modalHeight)
							makeCenter($(".skillSupPoup_wrapper"));
						});
					});
					$(document).on("click",".window_close",function(){
							modal.hide();
					});

					function makeCenter($obj){               
					    $obj.css({
					       "top": function () {
					           return (wh - (modalHeight =$(this).height())) / 2 + "px";
					       }
					    })    
					}


			}()
			
			
		
		
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



});
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
        delay:1000,           /*答题完的间隔时间ms*/
        final_time:5,        /*最后答题时间提示*/
        num_answer:0,        /*第几次答题*/
        clock:null,
        _gameOver:false,
        mode:null,
		ready:function(_options){

			  var that = this;
			  
			  that.update(_options);
				
				$(".answer_wrapper").show(0,function(){
					
					that.initGameByIndex(Math.floor(Math.random()*that.answerList.length));
					that.grade.ini();
/*！！！！！！！*/
					$("#select_bg").css({'height':wh*.65})
				    that.judge();         //判断正误
				    that.trigger_next();  //下一题
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
                    	//setTimeout(function(){location.href = resultUrl},that.delay);	
                    }else{
                    	setTimeout(function(){that.nextquestion()},that.delay);	
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
		        that.mode = _options.mode;
		        that.answerNum = _options.answerNum;
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
	                        that.chooseComplete();
	                        return;
	                    }
	                
	                },that.delay);
	                 
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
				that.jumpToResult();
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
            	/*$.ajax({
					  method: "POST",
					  url: "test.php",
					  data: { 
					  	problem_id: problem_id, 
					  	question_id: question_id ,
					  	answer:answer
					  },
					  dataType: 'json'
				})*/
				 

                if(that.canAnswer){
                	
					that.numAnswered++;                
                    if($(this).find('.answer').data('isAnswer')){
                        $(this).find('.gopng_circle').addClass('gopng_right');
                        if(that.numAnswered == that.answerArrLength){
                        	that.isRight = true;
                        }
                    }else{
                        $(this).find('.gopng_circle').addClass('gopng_error');
                        that.showCorrectAnswer();
                        /*答错了不可以再选*/
                        that.canAnswer = false;
                       /* that.isRight = false;*/
                        /*that.chooseComplete();*/
                    }
                    /*单选题只能选一次不可以再选*/
                    if(that.answerArrLength == 1){that.canAnswer = false;}
                 	   
                } 
            });
		},
		showCorrectAnswer:function(){
			
			$('.answerItem').each(function(){
                if($(this).find('.answer').data('isAnswer')){
                    $(this).find('.gopng_circle').addClass('gopng_right');
                }
            })
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
		showPopUp:function(){
			$(".poupMask").show();
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
	        $('#titleList').text(that.answerCounter+'、'+answer.title);
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


var result = {
	range:100,      /****************现在的排名**********************************/
	
	ini:function(_options){
		var that = this;
		var num = _options.num_answer;   
		var text,img1,img2 ;

		if(!_options.result){
			/*没有全答对*/
			$(".result_all .innerResult").eq(num-1).show(0,function(){
				$(".qr").show();	
			});
		}else{
			/*全答对*/
		}	
		
		jQuery(".list_inner").slide({mainCell:"ul",autoPlay:true,effect:"topLoop",vis:5,interTime:1500});

		var prize = _options.prize;
		/*设置是否中奖，图片路径*/   /*未中奖'img/scratch02.png'*/
		var prizeBg_url,
			envelope_url,
			prize_info,
			tips_info,
			poupBtn_url,
			poupBtn_text;
			
			if(prize == true){
				$(".tips_info").html('<p>恭喜！</p><p> 您获得100兆流量！</p>');
				
			}

			if(num == 1 && prize == false){
				$(".tips_info").html('<p>遗憾！</p><p> 请返回首页继续答题！</p>');
				
			}
			
			if(num == 1 && prize == true){
				$(".tips_info02").html('可返回首页，继续答题与刮奖');
			}
			if(num == 2 && prize == false){
				$(".tips_info").html('<p>遗憾！</p><p> 转发可获得1次答题机会！</p>');
				
				poupBtn_url = 'img/btnbgyellow.png';
				poupBtn_text = '转发';     
				$("#share_here").show();  /*转发*/
			}
			if(num == 2 && prize == true){
				$(".tips_info02").html('转发与好友分享喜悦');
				poupBtn_url = 'img/btnbgyellow.png';
				poupBtn_text = '分享';
				$("#share_here").show();  /*转发*/
			}
			if(num == 3 && prize == false){
				$(".tips_info").html('<p>遗憾！</p><p> 请明日再来！</p>');
				$(".tips_info02").html('每日仅可参与3次');
			}
			
			prize ?	(
					prizeBg_url = 'img/scratch01.png',
					envelope_url = 'img/envelope01.png',
					$(".prize_info").html('<p style="font-size:2rem;">100M</p>'
                                    +'<p style="font-size:.7rem;">流量礼包</p>')
					)
				  : (
				  	prizeBg_url = 'img/scratch02.png',
					envelope_url = 'img/envelope02.png',
					$(".prize_info").html('<div class="absCenter" style="padding-top:1rem;">谢谢参与</div>').removeClass("gold")
					)	;

        if($(".scratchPad_wrapper").length > 0){

        	$(".scratchPad_wrapper").wScratchPad({
            
	            image: prizeBg_url, //刮奖结果图片
	            image2:'img/mask.png',
	            width: '90%',
	            height: '90%',
	            spClass: 'absCenter',
	            /*离开*/
	            scratchUp:function(e,p){
	            			$(".homePoupMask02 .bg").attr({src:envelope_url});

							$(".homePoupMask02 .return_first .poupBtn").attr({src:poupBtn_url})
							$(".homePoupMask02 .return_first .text").text(poupBtn_text)

							if(num ==3){$(".homePoupMask02 .poupBtn").parents(".return_first").remove()}
							$(".homePoupMask02 ").show();
							$(".scratchPad_wrapper canvas").hide();
	            },
	            /*百分比*/
	            /*scratchMove:function(e,p){
					var flag = p>15;        
						if(flag){
							$(".homePoupMask02 .bg").attr({src:envelope_url});

							$(".homePoupMask02 .return_first .poupBtn").attr({src:poupBtn_url})
							$(".homePoupMask02 .return_first .text").text(poupBtn_text)

							if(num ==3){$(".homePoupMask02 .poupBtn").parents(".return_first").remove()}
							$(".homePoupMask02 ").show();

						}
	            }*/

	        });
        };

        var chance = _options.chance;
        	if(!chance){
        		$(".pageWrapper").hide();
        		that.mask(function(){
        			location.href = 'index.html';
        		})
        	}
	},
	mask:function(callBack){
		var text = '没机会了,跳转到首页';
			delay = 2000;
		var mask = '<div class="homePoupMask02 " >'
						+'<div id="skillSupPoup" class="homePoupInner relative img-center align-center " >'
                            +'<div class="skillSupPoup_wrapper ">	'
								+'<div id="wheel_result" class="result absCenter align-center white poupMask " >'
			                        +'<div class="inner relative absCenter " style="height:3rem;">'
			                            +'<p>'+text+'</p>'
			                        +'</div>'
			                    +'</div>'
	                		+'</div>'
                        +'</div>'
	                +'</div>' 
	                    ;
        	$("body").append(mask);
        	if(callBack)setTimeout(callBack,delay);
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


