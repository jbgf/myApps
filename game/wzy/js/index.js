
$(function(){
	
	var game = {
		answerList : [{"title":"中国古代名医华佗为谁所杀？","answer":"曹操","wrong":["吕布","刘备"]},{"title":"中国农历的哪个节气有着北方吃饺子、南方吃汤圆的习俗？","answer":"冬至","wrong":["春节","元宵"]},{"title":"圆周率大约值是多少？","answer":"3.1416","wrong":["0.8664","1.7341"]},{"title":"一千克铁和一千克棉花哪个重？","answer":"一样重","wrong":["铁","棉花"]},{"title":"西游记中去西天取经的\u201C唐三藏\u201D真名叫什么？","answer":"玄奘","wrong":["唐僧","玄慈"]},{"title":"李白被后人称为？","answer":"诗仙","wrong":["诗鬼","诗圣"]},{"title":"《孙子兵法》的作者是？","answer":"孙武","wrong":["孙子","孙膑"]},{"title":"狗热时用什么散热？","answer":"舌头","wrong":["耳朵","皮肤"]},{"title":"2008年奥运会在哪里举办？","answer":"北京","wrong":["伦敦","里约热内卢"]},{"title":"火警电话是？","answer":"119","wrong":["114","911"]}],
        answerNum : 10,
        answerCounter : 0, 
        canAnswer : true,
            
		ready:function(){
			var that = this;
			$(".gameBox").show();
			
			$('#readBtn').on('touchstart',function(e){
	                $('.gopng_readyTips,.gopng_readyBtn').hide();
	                $('.timer').show();
	                var timeCount = 3;
	                var timer = setInterval(function(){
	                    if(timeCount <= 1){
	                        clearInterval(timer);
	                        $('.poupMask').hide();
	                    }
	                    timeCount -= 1;
	                    $('.timer').addClass('gopng_'+timeCount);
	                },500);
		                
		    });
			
			that.initGameByIndex(Math.floor(Math.random()*that.answerList.length));
			that.grade.ini();
			/*下一题*/	
		    $('#nextBtn').on('touchstart',function(e){
                that.canAnswer = true;
                $('.answerItem .gopng_circle').each(function(){
                    $(this).removeClass('gopng_right gopng_error');
                });
                that.initGameByIndex(Math.floor(Math.random()*that.answerList.length));
            });
		    /*答题正确或错误*/	
            $('.answerItem').on('touchend',function(e){
                /*if(_gameOver){
                    return;
                }*/
                if(that.canAnswer){
                    if($(this).find('.answer').data('isAnswer')){
                        $(this).find('.gopng_circle').addClass('gopng_right');
                        that.grade.add(10);
                        /*hg.sound.play(1);*/
                        var r_url = music.musicList.right;
                        music._play(r_url);
                    }else{
                        $(this).find('.gopng_circle').addClass('gopng_error');
                        $('.answerItem').each(function(){
                            if($(this).find('.answer').data('isAnswer')){
                                $(this).find('.gopng_circle').addClass('gopng_right');
                            }
                        })
                       /*声音*/
                        var w_url = music.musicList.false;
                        music._play(w_url);
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
	            $('.nextBtn').hide();
	            $('.checkBtn').show();
	        }

	        var answer = that.answerList[index];
	        var list = [answer.answer].concat(answer.wrong);
	        var answerOrder = [0,1,2];
	        $('#titleList').text(answer.title);
	        if(!flag){
	            $('.answer').each(function(i){
	                var r = Math.floor(Math.random()*answerOrder.length);
	                var el = $('.answer').eq(answerOrder[r]);
	                el.text(list[i]).data("isAnswer",false);
	                if(i == 0){
	                    el.data("isAnswer",true);
	                }
	                answerOrder.splice(r,1);
	            });
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
	    		$("#grade").text("0");
	    	},
	    	add:function(points){
	    		var cv =parseInt($("#grade").text());
	    		cv+= points;
	    		$("#grade").text(cv);
	    	}	
	    }
	};
	/*音乐效果*/
	var music = {
		_context : '',
  		oBuffer : {},  // 存放webaudio的buffer
  		oAudio : {},   // 存放audio标签用于支持安卓微信
  		oNode : {},    // 存放webaudio结点
  		bSWA : false,             // 是否支持webaudio
		musicList:{
			right:"music/bonus.mp3",
			false:"music/err.mp3",
			button:"music/button.mp3",
			bg:"music/bgmusic04H.mp3"
		},
		ini_music:function(musicList){

			var that = this;
			if (window.AudioContext || window.webkitAudioContext || window.mozAudioContext) {
			    that['_context'] = new (window.AudioContext || window.webkitAudioContext || window.mozAudioContext)();
			    that.bSWA = true;
			}
			var aList = [];
			for(var i in musicList){
				aList.push(musicList[i]);
			}
			
			if (typeof aList == 'undefined' || (!(aList instanceof Array) && !(typeof aList == 'string'))) {
		      return;
		    }
		    if (!(aList instanceof Array) && typeof aList == 'string') {
		      aList = [aList];
		    }
		    for (var i = 0; i < aList.length; i++) {
		      var url = aList[i];
		      that.load_music(url);
		    };

		    /*按钮音*/
		    var b_url = that.musicList.button;
		    that.button_music(b_url);

		    /*背景音乐*/
		    var bg_url = that.musicList.bg;
		    that.bg_music(bg_url,true);

		},
		load_music:function(url,bPlay){
			var that = this;
			if (!/\.(mp3|wav|ogg)$/.test(url)) {
		      console.error('error type of media, only support mp3|wav|ogg files');
		      return;
		    }
		    var request = new XMLHttpRequest();
		    request.open('GET', url, true);
		    request.responseType = 'arraybuffer';
		    request.onload = function() {
		      	that['_context']['decodeAudioData'](request.response, function(buffer) {
		        that['oBuffer'][url] = buffer;
		        
		      });
		    };
		    request.send();
			
		},
		bg_music:function(url,bLoop){
			
			var that = this;
			var play = false;
			$("#startBtnImg").tap(function(){
				if (!that.bSWA) {

			      that._playEffectByTag(url, bLoop);
			      return;
			    }
			    if (typeof that['oBuffer'][url] == 'undefined') {
			      
			      that.load_music(url, true, bLoop);
			    } else {

			      that._play(url, bLoop);
			      that['bgm'] = url;
			    };
			    play = true;
			});
			$(".soundIcon").click(function(){
				$(this).toggleClass("soundIconPlay soundIconOff");
				if(play){
					that.disconnectMusic(url);
					play = false;
				}else{
					that.connectMusic(url);
					play = true;
				}
			})
		},
		
		button_music:function(url, bLoop){
			var that = this;
			$(".buttonImg").tap(function(){
				if (!that.bSWA) {
			      that._playEffectByTag(url, bLoop);
			      return;
			    }
			    if (typeof that['oBuffer'][url] == 'undefined') {
			      that.loadAudio(url, true, bLoop);
			    } else {
			      that._play(url, bLoop);
			    }
			})
			
		},
		connectMusic:function(url,bLoop){
			var that = this;
			var audio = that['oNode'][url];
			var destination = that['_context'].destination;
		    audio.connect(destination); 
		},

		disconnectMusic : function(url) {
		    var that = this;
		    if (!that.bSWA) {
		      that._stopMusicByTag();
		      return;
		    }
		    var url = that['bgm'];
		        
		    if (url == '') {
		      return;
		    }
		    var audio = that['oNode'][url];
		    var destination = that['_context'].destination;
		    audio.disconnect(destination);
		},
		_play:function(url, bLoop){

			var that = this;
			//支持webaudio
		    var _buffer = that['oBuffer'][url];
		    var destination = that['_context'].destination;
		    var audio = that['_context'].createBufferSource();
		    audio.buffer = _buffer;
		    audio.connect(destination);
		    audio.loop = bLoop || false;
		    that['oNode'][url] = audio;
		    
		    if (audio.start) {
		      audio.start(0, 0);
		    } else if (audio['noteGrainOn']) {
		      var duration = audio.buffer.duration;
		      audio['noteGrainOn'](0, 0, duration);
		    } else {
		      audio['noteOn'](0);
		    }
		}

	};
	music.ini_music(music.musicList);

	//规则页面
	var front = {
		poupInfoBox : $("#poupInfoBox"),
		head : $(".poupHead"),
		start:function(){
			var that = this;
			that.next();
			iniHeight(".frontBg");
			

			$("#ruleImg").click(function(){
				that.poupInfoBox.show();
				var height = $(window).height() - that.head.height();
				$("#popTabBox").height(height-50);
				that.ruleClose();
				that.rule_switchTab();
				that.rule_mask();
			});

			setTimeout(function(){
	            $('#startBtnImg').addClass('startTada');
	        },1000);
		},
		next:function(){
			$("#startBtnImg").click(function(){
				$(".front").hide();
				game.ready();
				
			})
		},
		ruleClose:function(){
			var that = this;
			$(document).on("click",".poupClose",function(){
				that.poupInfoBox.hide();
			})
		},
		rule_switchTab:function(){
			$(".poupTitleMune").click(function(){
				var index = $(this).index();
				$(this).addClass("on").siblings(".poupTitleMune").removeClass("on");
				$("#popTabBox .tab").hide().eq(index).show();
			})
		},
		rule_mask:function(){
			$(document).on("click",".focusUs",function(){
				$("#skillSupMask").show();
			})
			$("#skillSupMask").click(function(e){
				
				if (e.target !== e.currentTarget) return;
				$("#skillSupMask").hide();
			})
		}

	};
	front.start();

})

function iniHeight(e){
	$(e).height(function(i,h){
				return $(window).height();
	});
}

