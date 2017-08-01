$(function(){
    
		isMobileDevice() == "mobile"?setViewport(1100):"";

    /*banner轮播 start*/
  		jQuery(".slideBox01").slide({mainCell:".bd ul",autoPlay:true,effect:"leftLoop",easing:"swing",interTime:"3500"});
  		/*banner轮播 end*/
  		
  		/*导航栏 start*/
  		var navbar = {
		    
	        ini : function(){
	        			var that = this;
	        			$(".navbar-block .naver_01").width($(".navbar-block").width());

	        			that.blockHover();
	        			that.itemHover();
	        			
	        },
	        itemHover:function(){
	        			var that = this;
	        			$(".navbar-line .navLi").hover(function(){
					        	var a = $(this).children("a");
					        	var choose = a.hasClass("itemChoose");
					        	if(!choose){
					        		var naver_wrapper = $(this).parents(".naver_wrapper");
					        		var index = naver_wrapper.find(".navLi").index($(this));
					        		a.addClass("itemChoose");
					        		$(this).siblings(".navLi").find("a").removeClass("itemChoose");
					        		that.showNpics(naver_wrapper,index);
					        		
					        	}
				        });
	        },
	        blockHover:function(){
	        	var that = this;
	        	var st = 180;
		        $('.navbar-line .navbar-block').mouseenter(function () {
		            $(this).find('.naver_wrapper').show();
		            
		            $(this).find(".navLi:first a").addClass("itemChoose");
		            that.showNpics($(this).find(".naver_wrapper"),0);
		        }).mouseleave(function () {
		        	$(this).find(".navLi a").removeClass("itemChoose");

		            $(this).find('.naver_wrapper').hide();
		        });
	        },
	        showNpics:function(wrapper,i){
	        			var pics = wrapper.find(".naver_inner");
				        	pics.eq(i).css({display:"inline-block"}).siblings(".naver_inner").hide();	
			}
	        
    	};
    	navbar.ini();
        /*导航栏 end*/

        
		/*产品介绍轮播*/
    jQuery("#productBox01").slide({mainCell:".bd ul",autoPlay:true,effect:"leftLoop",easing:"swing",interTime:"3500"});  
		/*咨询中心tab切换*/
		jQuery(".info_details").slide();
		
		/*middle_line 等高*/
		equalHeight();
		function equalHeight(){
    		var d = $(".middle_line>div");
    		var h = 0;
    		d.map(function(i,e){
    			$(e).height()>h?h = $(e).height():"";
    		});
    		d.height(h);
		}       
       	
    /*内页产品轮播*/
    var leftSlide = {

      ini:function(){

          var visible = 4;
          var li = $("#demo1 .right_show .product_li");
          var slideWrapper = $(".h_slide");
          var slides = slideWrapper.find("li",".bd");
          
          slides.each(function(i,e){
             $(this).attr("data-index",i);
          });
          this.slide(visible,slideWrapper)
           
      },
      slide:function(visible,slideWrapper){
          var that = this;
          $(".h_slide").slide({pnLoop:true,mainCell:".bd ul",vis:visible,effect:"leftLoop",easing:"swing",interTime:"3500",
            startFun:function( i, c, slider, titCell, mainCell, targetCell, prevCell, nextCell ){
            }
          }); 
          var li = slideWrapper.find("li",".bd");
          li.hover(function(){
             var li = $(this);
             li.addClass("on");
             var i = $(this).attr("data-index");
             /*300毫秒延迟*/
             var t = setTimeout(function(){that.switch(li,i,t)},300);
          },function(){
             $(this).removeClass("on")
          })
      },
      switch:function(li,index,t){
          
          if(!li.hasClass("on")){clearTimeout(t);return;}
          
          $(".left_show .pic").eq(index).fadeIn().siblings(".pic").hide();
          $(".right_show li").eq(index).fadeIn().siblings("li").hide();

      }
    };
    leftSlide.ini();
    var topSlide = {
      
      ini:function(){
          var visible = 4;
          var h = $("#demo1 .bd").height()/visible;
          var inner = $("#demo1 .inner");
          var inner_h = h- parseInt(inner.css("padding-top"))*2;
          var li = $("#demo1 .right_show .product_li");
          inner.height(inner_h);
          $("#demo1 .bd li").height(h);
          this.slide(li,visible);
      },
      arrow:function(){
          $(".prev,.next").click(function(e){
             if($(this).hasClass('disable'))e.preventDefault();
          })
      },
      slide:function(li,visible){
          this.arrow();
          $("#demo1").slide({trigger:"click",titCell:".bd li",mainCell:".bd ul",vis:visible,effect:"top",easing:"swing",interTime:"3500",
            startFun:function( i, c, slider, titCell, mainCell, targetCell, prevCell, nextCell ){
                li.hide();
                li.eq(i).fadeIn();                
            },
            endFun:function( i, c, slider, titCell, mainCell, targetCell, prevCell, nextCell ){
                /*if(i == 0){(prevCell.addClass('disable'))}else{
                  prevCell.removeClass('disable');
                }*/
            }
          });  
      }
    }	;
    /*topSlide.ini();*/
    /*内页产品轮播*/
       
    /*产品说明书锚点*/    
		$(".anchor-tab li").click(function(){
      $(this).addClass('active').siblings('li').removeClass('active');
    })
		    
	/*联系我们*/

	  validator_tooltip01("#myform"); 
                    
                     
		
	

})
function validator_tooltip01(formId){
    if($(formId).length == 0)return;
    /*向插件添加不允许特殊字符的方法*/
    jQuery.validator.addMethod("specialCharValidate", function(value, element) { 
    var pattern = new RegExp("[`~!@%#$^&*()=|{}':;',　\\[\\]<>/? \\.；：%……+￥（）【】‘”“'。，、？]"); 
    return this.optional(element)||!pattern.test(value) ; 
    },"不允许包含特殊符号!"); 
    
    /*存放原先的提示信息*/
    var t = $(formId).find(".tips");
    var b = [];
        t.each(function(i,e){
          b.push($(e).html());
        })
     
    
    $(formId).validate({
         rules: {
                  "data[title]":{
                      required:true,
                      maxlength:20,
                      specialCharValidate:true
                    },
                  "email":{
                        required:true,
                        email:true
                  },
                  "data[text]":{
                    required:true,
                    maxlength:500
                  },
                  "data[code]":"required"
                },
         messages:{
                "data[title]":{
                        required:"请填写您的姓名",
                        maxlength:"小于等于20个字符（包括A-Z、a-z、0-9、汉字、不含特殊符号）"
                    },
                "email":{
                        required:"请填写您的邮箱",
                        email:"邮箱格式不正确"
                    },
                "data[text]":{
                          required:"请填写留言内容",
                          maxlength:"小于等于500字符"
                        },
                "data[code]":"请填写验证码"
         },
         errorPlacement: function (label, element) {
                $(element).nextAll(".tips").html(label.text()).css({color:"red"})
         },
         success:function(label,element){
                var index = $(formId).find(":input").index($(element));
                /*还原回原来的提示信息*/
                $(element).nextAll(".tips").html(b[index]).css({color:"#b5b5b5"});
                

         }
    });
    
}

/*判断是否移动设备：isMobileDevice start*/
    function isMobileDevice(){
        
        var d;
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
          d="mobile";
        }else{
          d="web";  
        } 
        return d;
    }
    /*isMobileDevice end*/

    function setViewport(w){
            
            var vp = document.getElementById("vp");
            vp.content='width='+w+'';
 }