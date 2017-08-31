$(function(){
/*背景图片*/
	window.RAF = (function(){
       return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {window.setTimeout(callback, 1000 / 60); };
            })();
	var page = {
		ini:function(e){
			var that = this;
			if($(e).length>0){
				/*document.addEventListener('touchmove',function(event){
				event.preventDefault(); },false);*/
			
				var wh = $(window).height();
					$(e).height(function(i,h){
								return wh;
					});	
			}
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

String.prototype.temp = function(obj) {
    return this.replace(/\$\w+\$/gi, function(matchs) {
        var key = matchs.replace(/\$/g, "")
        var returns = obj[key];
        /*若果没有floorNum则隐藏floor tag*/
        if(returns + "" == "undefined"){
            if(key == "floorNum"){
                returns = "opacity0";
            }else if(key == "prizeImg"){
                returns = "hide";
            }else{
                returns = ""
            }
        }
        return returns;
    });
};

function isWorkTime(){      /*是否工作时间*/
    var date = new Date();
    var days = date.getDay();
    var hours = date.getHours();
    var isWorkDay = (days != 0 && days != 6);
    var isWorkingTime = ( 8 <= hours  && hours < 18 );
    var status = isWorkDay && isWorkingTime;
    return status;
}

function jsonTemplate(template,json,output){
    var htmlList = '',
        htmlTemp = $(template).val();
    json.forEach(function(object) {
        htmlList += htmlTemp.temp(object);
    });
    $(output).html(htmlList);
}

var wh = $(window).height(),
	ww = $(window).width();

//比较数据库格式时间2014-12-30 20:58:20.000000；和现在时间的方法
function getTimeString(commentTime){
    var myDate = new Date();
    
    var commentYMD = commentTime.split(" ")[0],
    commentHMS = commentTime.split(" ")[1],
    YMD = commentYMD.split("-"),
    HMS = commentHMS.split(":");
    HMS[2]=HMS[2].substring(0,2);

    var applydate = new Date(YMD[0],YMD[1]-1,YMD[2],HMS[0],HMS[1],HMS[2]);
    
    //根据时间差来显示时间，如“2天前”
    var timeAgo = myDate - applydate;
    var oneDay = 1000*60*60*24,
        oneHour =1000*60*60,
        oneMinute =1000*60;
    var timeString = timeAgo > (oneDay *7)?commentYMD:
                     timeAgo <= (oneDay *7) && timeAgo >= oneDay ?parseInt(timeAgo/oneDay)+' 天前':
                     timeAgo < (oneHour * 24) && timeAgo >= oneHour ? parseInt(timeAgo/oneHour)+' 小时前':
                     timeAgo < (oneMinute * 60) && timeAgo >= oneMinute?parseInt(timeAgo/oneMinute)+' 分钟前':
                     "刚刚";
    return timeString;
    
};

function jumpTo(selector,url){
	$(selector).on("touchend",function(e){
		e.preventDefault();
		location.href = url;
	})
}

var lastModal;
function setModal(modalSelector,triggerSelector,callBack){
    
    var modal = $(modalSelector);
    var close = $(modalSelector).find(".modalBox_close");
    	
        modal.on("close",function(){
            modal.fadeOut(500);
            /*去除背景固定*/
            $("body").removeClass("fixed");
        });
        modal.on("show",function(){
        	modal.show();
            if(lastModal != modal){lastModal && lastModal.is(':visible') && lastModal.trigger("close");lastModal = modal;}
            /*背景固定*/
            $("body").addClass("fixed");
        });    
        if(triggerSelector){
            if(triggerSelector == 1){
            	callBack && typeof callBack == 'function' && callBack();    
            	modal.trigger("show");
            }else{
            	$(document).on("touchend",triggerSelector,function(){
	            	/*show后则执行回调函数*/
	        		callBack && typeof callBack == 'function' && callBack(this);  
	        		modal.trigger("show");  
	            })
            }
            
            modal.on("touchend",function(e){
		        if(e.target == e.currentTarget){modal.trigger("close");}
		    });
        }else{
               modal.trigger("show");
        }
        close.on("touchend",function(){
            modal.trigger("close");
        });
        return modal;
}



function sprite(options){

	this.wrapper = options.wrapper;
	
    
	this.src = options.src;
	this.width = options.width;
	this.height = options.height;
	this.canvas = $("<canvas width="+this.width+" height="+this.height+"></canvas>")[0];
	this.ctx = this.canvas.getContext("2d");	
	this.img = new Image();
	this.speed = 10;
	this.x = 0;
	this.y = 0;
	this.fx = 0;
	this.fy = 0;
	var that = this;
	this.img.onload = function(){
        that.scale(that.img);
       
        that.render(that.img);
       
	}
	this.img.src = this.src;
	$(this.wrapper).append(this.canvas);
}
sprite.prototype.scale = function(img){

	return {width:img.width/2,height:img.height/2}
}
sprite.prototype.render = function(img){
	var that  = this;
	this.ctx.clearRect(0,0,this.width,this.height);
	this.ctx.fillStyle = 'rgba(0,0,0,1)';
	
	this.ctx.fillRect(this.fx,this.fy,this.width,this.height);
	this.ctx.globalCompositeOperation = 'source-out';
	this.ctx.drawImage(img,this.x,this.y,this.width,this.height);         /*画背景*/

	if(that.update()){
		
		setTimeout(function(){that.render(img)},that.moveFrequency)
	}else{

	};
	
}

sprite.prototype.update = function(){
	
	this.fx +=2;
	if(this.fx<this.width){return true}
}




function scaleImg(wrapper,callback){
    var imgs = $(wrapper).find("img"),length = imgs.length,count = 0;
        imgs.each(function(i,e){
            var src = e.src;
                e.src = "";
                e.src = src;
                e.onload = function(){
                    
                    e.width = e.width/2;
                    count ++;
                    if(count == length){callback && typeof(callback) == "function" && callback()}
                }
               
        })
        setTimeout(function(){$(wrapper).show()},500);
}

function scaleImg2(imgSelector){
    var imgs = $(imgSelector),length = imgs.length;
        imgs.each(function(i,e){
            var src = e.src;
                $(e).removeAttr("src");
                e.src = src;
                e.onload = function(){
                    e.width = e.width/2;
                    $(e).css({'visibility':'visible'});
                }
               
        })
        
        //setTimeout(function(){$(imgSelector).show()},500);
}

