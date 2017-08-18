$(function(){
/*背景图片*/
	window.RAF = (function(){
       return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {window.setTimeout(callback, 1000 / 60); };
            })();
	var page = {
		ini:function(e){
			var that = this;
			if($(e).length>0){
				document.addEventListener('touchmove',function(event){
				event.preventDefault(); },false);
			
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

var wh = $(window).height(),
	ww = $(window).width();

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
            modal.hide();
        });
        modal.on("show",function(){
        	modal.show();
            if(lastModal != modal){lastModal && lastModal.is(':visible') && lastModal.trigger("close");lastModal = modal;}
            
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

function brandWall (allData){
	this.allData = allData;
	this.jsons = allData.brandJsons;                 /*使用data-index 与jsons一一对应*/
	this.num = allData.brandNum;
	this.birdOption = allData.birdOption;
	this.birdSpeed = this.birdOption.speed || 10;
	this.canvasheight = wh/4;
	this.wrapper = $(allData.birdOption.wrapper);
	this.mode = allData.mode;
	this.moveFrequency = 50;						/*50ms 一帧*/
	this.delay = 3000;								/*动画播放间隔*/	
	this.actionFrequency = 2;                       /*2帧一个动作*/
	if(this.mode == 0)this.ini();
}

/*构建 品牌墙*/
brandWall.prototype.brandStructure = function(){
	var that = this;
    var blocks = "";
    var num = that.num;
    var row = 5;
    var column = Math.ceil(num/row);
    var ulstring = '<ul class="brandbg-ul">';
    var listring = "",rowstring = "",rowfinished;
    
    var rowsNumTaken = Math.ceil((that.jsons.length || 1)/column)*column;        /*必须不为0*/
    var json_length = that.jsons.length;
    for(var i = 0 ;i<num;i++){
        +function(){
            rowfinished = (i+1)%column == 0;
            /*若i == json_length 则为商标要放置的位置，id=comehere*/
            var string = that.jsons[i]?'<li class="row-block"><div class="inner"><div class="brand img" data-index='+i+'><img  src='+that.jsons[i].brandImg+'></div></div></li>':i==json_length?'<li class="row-block"><div class="inner"><div id="comehere" class="brand "></div></div></li>':'<li class="row-block"><div class="inner"><div class="brand"></div></div></li>';
            rowstring = rowstring + string ;
            if(rowfinished){
                listring = rowstring + listring;
                rowstring = "";
            }
        }()
    }
    ulstring +=listring+'</ul>';     
                           
    $(".brandbg").append(ulstring);
    /*点击品牌墙的品牌，弹出品牌故事弹窗*/
    

    var modalBrand = setModal(".modal-brand",".img",function(trigger){
    	var index = $(trigger).attr("data-index");
    	var json = that.jsons[index];
    	/*更新弹窗的内容*/
    	var lis = "";
    	
    	var link = $(json.link);
    	var href = link.attr("href");
    	link.removeAttr("href").appendTo($("#link"));
    	
    	setTimeout(function(){link.attr("href",href)},1500);
    	$.each(json.gift,function(i,e){
    		lis+= '<div class="picText1-left align-center"><img src='+e.giftPic+' alt=""></div><div class="picText1-right">'+e.giftText+'</div>';
    	})
    	$("#brandStory").text(json.story)
    	$(".picText1").html(lis);
    	$("#brandImg").attr("src",json.brandImg)
    	
    	modalBrand.one("close",function(){
    		$("#link").html("");
    	})

    	
    });
    
}

brandWall.prototype.ini = function(){
	var that = this;
		that.loadSource();
		this.brandStructure(that.jsons);
		that.wrapper.css("height",that.canvasheight);
		that.isComplete();
}

brandWall.prototype.loadSource = function(){
	var mp3 = this.birdOption.mp3;
	audioEngine.init([mp3]);	
}


brandWall.prototype.isComplete = function(){
	var that = this;
		if(that.jsons.length == that.num){       /*若已集齐商标则回调函数*/
			var complete = that.allData.complete;           
			complete && typeof complete == 'function' && complete();    
		}
}

brandWall.prototype.birds = function(options){
	var that = this;
	var birdWrapper = that.wrapper,blockwidth;
	
	var canvaswidth = that.wrapper.width();
	var canvasheight = that.canvasheight;
	var canvas = $("<canvas width="+canvaswidth+" height="+canvasheight+"></canvas>")[0];
	var speed = this.birdSpeed;
	var bird_x,bird_y;
	var size,brandsize;
	var block_x,block_y;
	var block_size;
	var flymove;
	var birdImgsArr = options.birdImgsArr;
	var brand = options.data.brandImg;
	var point ; /*投掷点*/
	var r = 5;  /*小方块的圆角半径*/ 
	var i=0,    /*遍历喜鹊动作数组使用*/
		count = 0;      /*频率计数*/
		
	that.wrapper.css({
		height:canvasheight
	})
	var ctx = canvas.getContext("2d");
	var img = new Image(),
		img1 = new Image(),
		imgBrand = new Image();
		img.onload = function(){
			size = scaleImg(img);
			bird_x = -size.width/2;
			bird_y = 0;
			block_x = bird_x + size.width;
			block_y = 0;
			blockwidth = $(".brandbg .brand").width();
			blockheight = blockwidth;

			img1.onload = function(){
				birdArr = [img,img1];
				drawBrand();
			}
			img1.src = birdImgsArr[1];
		};
		img.src = birdImgsArr[0];

	img.className +=" bird-img" ;
	birdWrapper.append(canvas);

	function dropPoint(){       /*投掷点*/
		point = {x:canvaswidth/2};  
	}

	function fly(){
		ctx.clearRect(0,0,canvaswidth,canvasheight);  
		count++;
		if(count > that.actionFrequency){         /*超过that.actionFrequency的换一张图片，表示煽动翅膀*/
			count = 0;
			i++;
			i=i%birdImgsArr.length;
		}
		if(block_x + blockwidth < point.x){
			/*移动坐标*/
			bird_x +=speed;      
			block_x +=speed;
			brand_x +=speed;	

		}else{
			flyAndDrop();
			return 
		}
		
		drawRoundedRect(block_x,block_y,blockwidth,blockheight,r,"#fff");  /*画圆角矩形*/
		ctx.drawImage(imgBrand,brand_x,brand_y,brandsize.width,brandsize.height);	 /*画矩形中的商标*/			
		ctx.drawImage(birdArr[i],bird_x,bird_y,size.width,size.height);         /*画鸟*/
		if(bird_x < canvaswidth){
			
			setTimeout(fly,that.moveFrequency);
			 
		}else{
			ctx.restore()
		};
	}
	function flyAndDrop(){
		block_y +=speed;
		brand_y +=speed;	
		drawRoundedRect(block_x,block_y,blockwidth,blockheight,r,"#fff");  /*画圆角矩形*/
		ctx.drawImage(imgBrand,brand_x,brand_y,brandsize.width,brandsize.height);	 /*画矩形中的商标*/			
		ctx.drawImage(birdArr[i],bird_x,0,size.width,size.height);         /*画鸟*/

		if(block_y + blockheight > canvasheight){
			bird_x += speed;
		}

		if(bird_x < canvaswidth){
			
			setTimeout(fly,that.moveFrequency);
			
		}else{
			ctx.restore();
			showBrand(options.data);           /*投掷成功*/
		};
	}

	function showBrand(data){            /*success喜鹊投掷商标之后展示到相应的位置*/
		
		var target = $("#comehere").attr("data-index",that.jsons.length).addClass("img").append("<img class='shown'  src="+data.brandImg+">");
		that.jsons.push(data)       /*本次添加的数据添加到所有的brandData数据中*/
		
		wx.config({
            // 配置信息, 即使不正确也能使用 wx.ready
            debug: false,
            appId: '',
            timestamp: 1,
            nonceStr: '',
            signature: '',
            jsApiList: []
        });
        wx.ready(function() {
        	audioEngine.playEffect(options.mp3, false);    
        });
		
		that.isComplete();

	}

	function drawBrand(){

		imgBrand.onload = function(){
			brandsize = scaleImg(this);
			/*先缩放图片*/
			if(blockwidth < brandsize.width || blockheight < brandsize.height){
				var rate = Math.max(brandsize.width/blockwidth,brandsize.height/blockheight);
				brandsize.width = brandsize.width/rate;
				brandsize.height = brandsize.height/rate;
			}
			var offsetX = (blockwidth-brandsize.width)/2;
			var offsetY = (blockheight-brandsize.height)/2;
			
			brand_x = block_x + offsetX;
			brand_y = block_y + offsetY;
			dropPoint();     /*计算投掷点*/
			fly();	

		}
		imgBrand.src = brand;
	}

	function scaleImg(img){ /*缩为原来的50%；*/
		img.width = img.width/2;
		img.height = img.height/2;
		return {width:img.width,height:img.height}
	}
	

	function drawRoundedRect(x,y,w,h,r,bgcolor){
		ctx.beginPath();
		ctx.moveTo(x+r,y);
		ctx.fillStyle = bgcolor;
		ctx.arcTo(x+w,y,x+w,y+h,r);
		ctx.arcTo(x+w,y+h,x,y+h,r);
		ctx.arcTo(x,y+h,x,y,r);
		ctx.arcTo(x,y,x+w,y,r);
		ctx.fill();
		ctx.closePath();
	}
	
}
brandWall.prototype.birdsfly = function(options){
	var that = this;
	var birdWrapper = that.wrapper;
	
	var canvaswidth = that.wrapper.width();
	var canvasheight = that.canvasheight;
	var canvas = $("<canvas width="+canvaswidth+" height="+canvasheight+"></canvas>")[0];
	var speed = this.birdSpeed;
	var initial_bird_x;
	var initial_bird_y;
	var bird_x;
	var bird_y;
	
	var size;
	
	
	var birdImgsArr = options.birdImgsArr;
	
	var i=0,    /*遍历喜鹊动作数组使用*/
		count = 0;      /*频率计数*/
		
	that.wrapper.css({
		height:canvasheight
	})
	var ctx = canvas.getContext("2d");
	var img = new Image(),
		img1 = new Image();
		img.onload = function(){
			size = scaleImg(img);
			initial_bird_x = -size.width/2;
			initial_bird_y = (canvasheight - size.height)/2;
			bird_x = initial_bird_x;
			bird_y = initial_bird_y;
			img1.onload = function(){
				birdArr = [img,img1];
				fly();
			}
			img1.src = birdImgsArr[1];
		};
		img.src=birdImgsArr[0];
	
	img.className +=" bird-img" ;
	birdWrapper.append(canvas);

	function fly(){
		ctx.clearRect(0,0,canvaswidth,canvasheight);  
		count++;
		if(count > that.actionFrequency){         /*超过frequency的换一张图片，表示煽动翅膀*/
			count = 0;
			i++;
			i=i%birdImgsArr.length;
		}
		
		/*移动坐标*/
		bird_x += speed;      
				
		ctx.drawImage(birdArr[i],bird_x,bird_y,size.width,size.height);         /*画鸟*/
		if(bird_x < canvaswidth){
			
			setTimeout(fly,that.moveFrequency);
			
		}else{
			
			reset();
			setTimeout(fly,that.delay);
		};
	}
	
	function reset(){
		ctx.restore();
		bird_x = initial_bird_x;
		bird_y = initial_bird_y;

	}
	
	function scaleImg(img){ /*缩为原来的50%；*/
		img.width = img.width/2;
		img.height = img.height/2;
		return {width:img.width,height:img.height}
	}
	
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


function bridge(options){
	this.options = options;
	this.wrapper = $(options.wrapper);
	this.css = options.css
    this.speed = 10;
	this.src = options.src;
	this.width = options.width;
	this.height = options.height;
	this.canvas = $("<canvas ></canvas>")[0];
	this.ctx = this.canvas.getContext("2d");	
	this.img = new Image();
	this.speed = 2;
	this.delay = 100;
	this.x ;
	this.y ;
	this.imgwidth;
	this.imgheight;
	
}

bridge.prototype._createBg = function(){
	var that = this;
	this.img.onload = function(){
        
        var rate ;
        var imgwidth;
        var imgheight;
        that.canvas.width = that.width;
        $(that.canvas).attr({'id':that.options.id,"class":that.options.class});
        rate = that.canvas.width/that.img.width;

        imgwidth = that.img.width*rate;
        imgheight = that.img.height*rate;
        that.canvas.height = imgheight;
        
        that.x = 0;
        that.y = 0;
        that.ctx.drawImage(that.img,that.x,that.y,imgwidth,imgheight); 
		that.css ? $(that.canvas).css(that.css).appendTo(that.wrapper) : $(that.canvas).appendTo(that.wrapper)

	}
	this.img.src = this.src;
	return this;
	
}	


bridge.prototype._createwoman = function(){
	var that = this;
	var offsetY = that.width*0.15;
	var point1,point2,a,b,c;	/*y = ax2 + bx + c;对称轴为-b/2a,已知2个点可以确定抛物线*/
	this.img.onload = function(){
        var size = that.scale(that.img);
        that.canvas.width = that.width;
        that.canvas.height = that.height;
        that.imgwidth = size.width;
        that.imgheight = size.height;
        that.x = 0;
        that.y = that.height - size.height - offsetY;
        
        point1 = {x:that.x,y:that.y};
		point2 = {x:that.width/2,y:point1.y - offsetY * 0.3};      /* offsetY*1.2 为经验值*/
		
		a = -(point1.y - point2.y)/(Math.pow(point1.x,2) - Math.pow(point2.x,2));
		b = -a*that.width;
		c = (point1.y) -a*Math.pow(point1.x,2) -b*point1.x;

       
		$(that.canvas).appendTo(that.wrapper).css(that.css);
		render();
	}
	this.img.src = this.src;
	
	function render(){
		that.ctx.clearRect(0,0,that.width,that.height);
        line();
        
        that.ctx.drawImage(that.img,that.x,that.y,that.imgwidth,that.imgheight); 
        if(that.x < that.width/2-that.imgwidth){
        	setTimeout(render,that.delay);
        }
	}

	function line(){
		that.x += that.speed;
		that.y = a*Math.pow(that.x,2) + b*that.x + c;
	}

	return this;

}	

bridge.prototype._createman = function(){
	var that = this;
	
	var offsetY = that.width*0.15;
	var point1,point2,a,b,c;	/*y = ax2 + bx + c;对称轴为-b/2a,已知2个点可以确定抛物线*/
	this.img.onload = function(){
        var size = that.scale(that.img);
        that.imgwidth = size.width;
        that.imgheight = size.height;
        that.canvas.width = that.width;
        that.canvas.height = that.height;
        that.x = that.width - size.width;        /*初始化*/
        that.y = that.height - offsetY - size.height;

        point1 = {x:that.x,y:that.y};
		point2 = {x:that.width/2,y:point1.y - offsetY * 1.2};      /* offsetY*1.2 为经验值*/
		
		a = (point1.y - point2.y)/(Math.pow(point1.x,2) - Math.pow(point2.x,2));
		b = -a*that.width;
		c = (point1.y) -a*Math.pow(point1.x,2) -b*point1.x;
		
        $(that.canvas).appendTo(that.wrapper).css(that.css);
        render();
		
	}
	this.img.src = this.src;

	function render(){
		that.ctx.clearRect(0,0,that.width,that.height);
		
        line();
        that.ctx.drawImage(that.img,that.x,that.y,that.imgwidth,that.imgheight); 
        if(that.x > that.width/2){
        
        	setTimeout(render,that.delay);
        }else{

            that.options.end && typeof(that.options.end) == 'function' && that.options.end()
        }
	}

    

	function line(){
		that.x -= that.speed;
		that.y = a*Math.pow(that.x,2) + b*that.x + c;
	}
	
	return this;
}

bridge.prototype._createheart = function(){
    var that = this;
    that.img.onload = function(){
        var size = that.scale(that.img);
        that.imgwidth = size.width;
        that.imgheight = size.height;
        that.canvas.width = that.width;
        that.canvas.height = that.height;
        that.x = that.width/2 - size.width;        /*初始化*/
        that.y = that.height/2 - size.height;
        
        var loop = function(){
            that.ctx.clearRect(0,0,that.width,that.height);
            hy -= that.speed;

            that.ctx.drawImage(img,hx,hy,size.width,size.height); 
        }
        if(hy > 0){
            setTimeout(loop,that.delay);
        }else{
            that.ctx.restore();
        }
    }
    

}

bridge.prototype.scale = function(img){
	
	return {width:img.width/2,height:img.height/2}
}


function scaleImg(wrapper){
    var imgs = $(wrapper).find("img"),length = imgs.length;
        imgs.each(function(i,e){
            var src = e.src;
                e.src = "";
                e.src = src;
                e.onload = function(){
                    console.log(e.width)
                    e.width = e.width/2;
                    console.log(e.width)
                }
               
        })
        setTimeout(function(){$(wrapper).show()},500);
}

