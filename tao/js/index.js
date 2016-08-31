$(document).ready(function(){
	
	newsImg();
	
	
	
	dropDown();
	
	switchProduct();
	quickBar();
	if($(".slider").length!=0)
	$('.slider').glide({
		type: 'carousel',
		
	});
});



function scrollLink(speed,delay,ele) {   //函数 函数名(变量1,变量2,变量3)滚动高度,速度,延迟
            var p=false; //定义变量 p为假;
            var t; //定义变量t了
            var $ul=$(ele+" ul");  //定义变量o为document.getElementByIdx_x("marqueebox")对象
            var ul = $ul[0];
            var blockNum = $ul.children("li").length;
            //if(blockNum<4){return}

            var lengthUl = ul.scrollWidth;
            var singleBlock = lengthUl/(blockNum);
             var arrowLeft = $(ele).find(".arrow_left");
            var arrowRight = $(ele).find(".arrow_right");
            
            var index;
            
            var array = new Array();
            for(var i= 1;i<=blockNum;i++){
              array.push(i*singleBlock)
            };
            
            var list = $ul.html();
            
            $ul.append(list).prepend(list); //
            
            ul.style.marginLeft=-lengthUl+'px'; //o的属性，设置或获取对象的上边距宽度
            
            ul.onmouseover=function(){p=true;} 
            ul.onmouseout=function(){p=false;} 

            function start(){ 
              function arrow(){
                arrowRight.on("click",function(){
                        getIndex()
                       
                      if(!$ul.is(":animated"))
                      $ul.stop(false,true).animate({'margin-left':'-='+singleBlock},{duration:'fast',complete:function(){if(index==blockNum){index=1;ul.style.marginLeft=-lengthUl+'px';}}})
                });
                arrowLeft.on("click",function(){
                        getIndex();
                      
                      if(!$ul.is(":animated"))                    
                      $ul.stop(false,true).animate({'margin-left':'+='+singleBlock},{duration:'fast',complete:function(){ if(index==blockNum){index=1;ul.style.marginLeft=-lengthUl+'px';}}})
                })
              }
              arrow();
            } 
            function getIndex(){
                var marginLeft = ul.style.marginLeft;
                for(var i = 1;i<=blockNum;i++){
                  
                      if(Math.abs(parseInt(marginLeft)+lengthUl)<array[i-1]){
                        index = i;
                        
                        return ;
                      }
                      
                };
                
            }
            function scrolling(){ //“滚动”函数
              var marginLeft = ul.style.marginLeft;
            }

            start();
        };
function quickBar(){
	/*电话*/

	$(".quick_tel").on("click",function(){
		
		$('html,body').scrollTop($('.bottom').offset().top);
	})
	/*返回顶部*/
	$(".backToTop").on("click",function(){$("body").scrollTop(0)});
	/*百度地图*/
	
	/*qq客服,uin为你的qq，site为你的网址*/
	
	/*新浪微博*/
	$(".weibo").on("click",function(){
		window.sharetitle = "发现了一个不错的网站";
	//	window.shareUrl = "img/tao_logo.PNG";
		(function share(){
			//d指的是window,注释掉的部分为图片
			(function(s,d,e){try{}catch(e){}var f='http://v.t.sina.com.cn/share/share.php?',u=d.location.href,p=['url=',e(u),'&title=',e(window.sharetitle),'&appkey=2924220432'
				/*,'&pic=',e(window.shareUrl)*/].join('');function a(){if(!window.open([f,p].join(''),'mb',['toolbar=0,status=0,resizable=1,width=620,height=450,left=',(s.width-620)/2,',top=',(s.height-450)/2].join('')))u.href=[f,p].join('');};if(/Firefox/.test(navigator.userAgent)){setTimeout(a,0)}else{a()}})(screen,document,encodeURIComponent);
		}());

	})
};
function switchProduct(){
	/*热门商品切换*/
      $(".product h1 .news_title").on("click",function(){
      		$(this).toggleClass("on off").siblings(".news_title").toggleClass("on off")
      		$(".product .product_r").toggle();
      })
}

function dropDown(){
	$(".dropDownButton").on("click",function(){
		 var $ul = $(this).siblings("ul");      
		 $ul.show();
		 $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .appendTo($("body"))
          .on('click', clearMenus);


          function clearMenus(){
          	 $ul.hide();
          	 $(".dropdown-backdrop").remove();
          }
	});
	$('[class*="dropDownMenu"] ul li').on("click",function(){
		 var value = $(this).html();
		 var $ul = $(this).parent("ul"); 
		 var $menu =  $ul.parents('[class*="dropDownMenu"]');
		 var dropDownText = $menu.find(".dropDownText");
		 dropDownText.html(value).val(value);
		 $ul.hide();
		 $(".dropdown-backdrop").remove();
	}).first().click()

}
function linkArrow(){
	var ul=$(".link_content ul")[0]; //定义变量o为document.getElementByIdx_x("marqueebox")对象
		//if(!o)return;
		ul.innerHTML+=ul.innerHTML; 
	$(".link_box .arrow_left").on("click",function(){

		if(Math.abs(parseInt(ul.style.marginLeft))>=ul.scrollWidth/2) ul.style.marginLeft=0; 
	})
}

function ui(){
	$(".about_content_l .div03").css({"height":$(".about_content_r").height()-101+'px'})
}

var newsImg = function(){
		/*测试数据*/
		
		$(".new_thumb a").click(function(e){
			e.preventDefault();
			$(".new_thumb a").removeClass('active');
			$(this).addClass('active');
			$(".new_pic_title").html($(this).data("title"));

			var href = $(".new_thumb a.active").attr("href");
			var activeImg = $(".new_thumb a.active").find("img").attr("src");
			$(".new_pic_lg a").attr({'href':href});
			$(".new_pic_lg img").attr({"src":activeImg});
		});
		$(".new_thumb a").first().trigger('click');
		
}







//加载首页新闻
function loadIndexNews(){
	try{
	$.get(ctx+"/notice/doGetIndexNews", function(obj){
		if(obj.rs){
			var item = obj.datas;
			$("#index_news_title").html(item["NOTICE_TITLE"]);
			if(item["IS_LINK"] == 1){
				$("#index_news_context").html("");
				$("#index_news_url").attr("href", item["LINK_URL"]).attr("target", "_blank");
			}else{
				$("#index_news_context").html(item["NOTICE_CONTENT"]);
				$("#index_news_url").attr("href", (ctx+'/notice/getNotice?pkNotice='+item["PK_NOTICE"]))
			}
			$("#index_news_url").show();
		}else{
			$("#index_news_url").hide();
		}
	});
	}catch(e){}
}

//生产环境特殊要求，直接跳转到 新员工奖励十元的公告 16.03.15 add by syy
function jumpNotice(pkNotice){
	window.location.href=ctx+"/notice/getNotice?pkNotice="+pkNotice;
}