/*圆角插件*/
(function($){var style=document.createElement('div').style,moz=style['MozBorderRadius']!==undefined,webkit=style['WebkitBorderRadius']!==undefined,radius=style['borderRadius']!==undefined||style['BorderRadius']!==undefined,mode=document.documentMode||0,noBottomFold=$.browser.msie&&(($.browser.version<8&&!mode)||mode<8),expr=$.browser.msie&&(function(){var div=document.createElement('div');try{div.style.setExpression('width','0+0');div.style.removeExpression('width')}catch(e){return false};return true})();$.support=$.support||{};$.support.borderRadius=moz||webkit||radius;function sz(el,p){return parseInt($.css(el,p))||0};function hex2(s){s=parseInt(s).toString(16);return(s.length<2)?'0'+s:s};function gpc(node){while(node){var v=$.css(node,'backgroundColor'),rgb;if(v&&v!='transparent'&&v!='rgba(0, 0, 0, 0)'){if(v.indexOf('rgb')>=0){rgb=v.match(/\d+/g);return'#'+hex2(rgb[0])+hex2(rgb[1])+hex2(rgb[2])};return v};if(node.nodeName.toLowerCase()=='html')break;node=node.parentNode};return'#ffffff'};function getWidth(fx,i,width){switch(fx){case'round':return Math.round(width*(1-Math.cos(Math.asin(i/width))));case'cool':return Math.round(width*(1+Math.cos(Math.asin(i/width))));case'sharp':return width-i;case'bite':return Math.round(width*(Math.cos(Math.asin((width-i-1)/width))));case'slide':return Math.round(width*(Math.atan2(i,width/i)));case'jut':return Math.round(width*(Math.atan2(width,(width-i-1))));case'curl':return Math.round(width*(Math.atan(i)));case'tear':return Math.round(width*(Math.cos(i)));case'wicked':return Math.round(width*(Math.tan(i)));case'long':return Math.round(width*(Math.sqrt(i)));case'sculpt':return Math.round(width*(Math.log((width-i-1),width)));case'dogfold':case'dog':return(i&1)?(i+1):width;case'dog2':return(i&2)?(i+1):width;case'dog3':return(i&3)?(i+1):width;case'fray':return(i%2)*width;case'notch':return width;case'bevelfold':case'bevel':return i+1;case'steep':return i/2+1;case'invsteep':return(width-i)/2+1}};$.fn.corner=function(options){if(this.length==0){if(!$.isReady&&this.selector){var s=this.selector,c=this.context;$(function(){$(s,c).corner(options)})};return this};return this.each(function(index){var $this=$(this),o=[$this.attr($.fn.corner.defaults.metaAttr)||'',options||''].join(' ').toLowerCase(),keep=/keep/.test(o),cc=((o.match(/cc:(#[0-9a-f]+)/)||[])[1]),sc=((o.match(/sc:(#[0-9a-f]+)/)||[])[1]),width=parseInt((o.match(/(\d+)px/)||[])[1])||10,re=/round|bevelfold|bevel|notch|bite|cool|sharp|slide|jut|curl|tear|fray|wicked|sculpt|long|dog3|dog2|dogfold|dog|invsteep|steep/,fx=((o.match(re)||['round'])[0]),fold=/dogfold|bevelfold/.test(o),edges={T:0,B:1},opts={TL:/top|tl|left/.test(o),TR:/top|tr|right/.test(o),BL:/bottom|bl|left/.test(o),BR:/bottom|br|right/.test(o)},strip,pad,cssHeight,j,bot,d,ds,bw,i,w,e,c,common,$horz;if(!opts.TL&&!opts.TR&&!opts.BL&&!opts.BR)opts={TL:1,TR:1,BL:1,BR:1};if($.fn.corner.defaults.useNative&&fx=='round'&&(radius||moz||webkit)&&!cc&&!sc){if(opts.TL)$this.css(radius?'border-top-left-radius':moz?'-moz-border-radius-topleft':'-webkit-border-top-left-radius',width+'px');if(opts.TR)$this.css(radius?'border-top-right-radius':moz?'-moz-border-radius-topright':'-webkit-border-top-right-radius',width+'px');if(opts.BL)$this.css(radius?'border-bottom-left-radius':moz?'-moz-border-radius-bottomleft':'-webkit-border-bottom-left-radius',width+'px');if(opts.BR)$this.css(radius?'border-bottom-right-radius':moz?'-moz-border-radius-bottomright':'-webkit-border-bottom-right-radius',width+'px');return};strip=document.createElement('div');$(strip).css({overflow:'hidden',height:'1px',minHeight:'1px',fontSize:'1px',backgroundColor:sc||'transparent',borderStyle:'solid'});pad={T:parseInt($.css(this,'paddingTop'))||0,R:parseInt($.css(this,'paddingRight'))||0,B:parseInt($.css(this,'paddingBottom'))||0,L:parseInt($.css(this,'paddingLeft'))||0};if(typeof this.style.zoom!=undefined)this.style.zoom=1;if(!keep)this.style.border='none';strip.style.borderColor=cc||gpc(this.parentNode);cssHeight=$(this).outerHeight();for(j in edges){bot=edges[j];if((bot&&(opts.BL||opts.BR))||(!bot&&(opts.TL||opts.TR))){strip.style.borderStyle='none '+(opts[j+'R']?'solid':'none')+' none '+(opts[j+'L']?'solid':'none');d=document.createElement('div');$(d).addClass('jquery-corner');ds=d.style;bot?this.appendChild(d):this.insertBefore(d,this.firstChild);if(bot&&cssHeight!='auto'){if($.css(this,'position')=='static')this.style.position='relative';ds.position='absolute';ds.bottom=ds.left=ds.padding=ds.margin='0';if(expr)ds.setExpression('width','this.parentNode.offsetWidth');else ds.width='100%'}else if(!bot&&$.browser.msie){if($.css(this,'position')=='static')this.style.position='relative';ds.position='absolute';ds.top=ds.left=ds.right=ds.padding=ds.margin='0';if(expr){bw=sz(this,'borderLeftWidth')+sz(this,'borderRightWidth');ds.setExpression('width','this.parentNode.offsetWidth - '+bw+'+ "px"')}else ds.width='100%'}else{ds.position='relative';ds.margin=!bot?'-'+pad.T+'px -'+pad.R+'px '+(pad.T-width)+'px -'+pad.L+'px':(pad.B-width)+'px -'+pad.R+'px -'+pad.B+'px -'+pad.L+'px'};for(i=0;i<width;i++){w=Math.max(0,getWidth(fx,i,width));e=strip.cloneNode(false);e.style.borderWidth='0 '+(opts[j+'R']?w:0)+'px 0 '+(opts[j+'L']?w:0)+'px';bot?d.appendChild(e):d.insertBefore(e,d.firstChild)};if(fold&&$.support.boxModel){if(bot&&noBottomFold)continue;for(c in opts){if(!opts[c])continue;if(bot&&(c=='TL'||c=='TR'))continue;if(!bot&&(c=='BL'||c=='BR'))continue;common={position:'absolute',border:'none',margin:0,padding:0,overflow:'hidden',backgroundColor:strip.style.borderColor};$horz=$('<div/>').css(common).css({width:width+'px',height:'1px'});switch(c){case'TL':$horz.css({bottom:0,left:0});break;case'TR':$horz.css({bottom:0,right:0});break;case'BL':$horz.css({top:0,left:0});break;case'BR':$horz.css({top:0,right:0});break};d.appendChild($horz[0]);var $vert=$('<div/>').css(common).css({top:0,bottom:0,width:'1px',height:width+'px'});switch(c){case'TL':$vert.css({left:width});break;case'TR':$vert.css({right:width});break;case'BL':$vert.css({left:width});break;case'BR':$vert.css({right:width});break};d.appendChild($vert[0])}}}}})};$.fn.uncorner=function(){if(radius||moz||webkit)this.css(radius?'border-radius':moz?'-moz-border-radius':'-webkit-border-radius',0);$('div.jquery-corner',this).remove();return this};$.fn.corner.defaults={useNative:true,metaAttr:'data-corner'}})(jQuery);
/*IE6png透明*/
(function($){var jspath=$('script').last().attr('src');var basepath='';if(jspath.indexOf('/')!=-1){basepath+=jspath.substr(0,jspath.lastIndexOf('/')+1);}$.fn.fixpng=function(options){function _fix_img_png(el,emptyGIF){var images=$('img[src*="png"]',el||document),png;images.each(function(){png=this.src;width=this.width;height=this.height;this.src=emptyGIF;this.width=width;this.height=height;this.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+png+"',sizingMethod='scale')";});}function _fix_bg_png(el){var bg=$(el).css('background-image');if(/url\([\'\"]?(.+\.png)[\'\"]?\)/.test(bg)){var src=RegExp.$1;$(el).css('background-image','none');$(el).css("filter","progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+src+"',sizingMethod='scale')");}}if($.browser.msie&&$.browser.version<7){return this.each(function(){var opts={scope:'',emptyGif:basepath+'blank.gif'};$.extend(opts,options);switch(opts.scope){case'img':_fix_img_png(this,opts.emptyGif);break;case'all':_fix_img_png(this,opts.emptyGif);_fix_bg_png(this);break;default:_fix_bg_png(this);break;}});}}})(jQuery);
//全局函数
function pressCaptcha(obj){obj.value=obj.value.toUpperCase()};function ResumeError(){return true};window.onerror=ResumeError;function SetHome(obj,vrl){try{obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl)}catch(e){if(window.netscape){try{netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")}catch(e){alert("Your Browser does not support")};var prefs=Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);prefs.setCharPref('browser.startup.homepage',vrl)}}};function addFavorite(){var vDomainName=window.location.href;var description=document.title;try{window.external.AddFavorite(vDomainName,description)}catch(e){window.sidebar.addPanel(description,vDomainName,"")}};function metHeight(group){tallest=0;group.each(function(){thisHeight=$(this).height();if(thisHeight>tallest){tallest=thisHeight}});group.height(tallest)};function metmessagesubmit(info3,info4){if(document.myform.pname.value.length==0){alert(info3);document.myform.pname.focus();return false};if(document.myform.info.value.length==0){alert(info4);document.myform.info.focus();return false}};function addlinksubmit(info2,info3){if(document.myform.webname.value.length==0){alert(info2);document.myform.webname.focus();return false};if(document.myform.weburl.value.length==0||document.myform.weburl.value=='http://'){alert(info3);document.myform.weburl.focus();return false}};function textWrap(my){var text='',txt=my.text();txt=txt.split("");for(var i=0;i<txt.length;i++){text+=txt[i]+'<br/>'};my.html(text)}
//以上JS代码不建议去除，尤其是全局函数。
/*鼠标移到图片上显示稍微透明*/
$(function () {
$('.tupAple img').fadeTo("fast", 0.5);
$('.tupAple img').hover(
function() {$(this).fadeTo("fast", 1);},
function() {$(this).fadeTo("fast", 0.5);
});
});
/*头部导航*/
$("#top-nav li[class!='line']").hover(
	function (i){
		if($(this).find('dl').size()>0){
			var ctk=0,my=$(this).index();
			   $('#top-nav li').each(function(j){
				if(j>=my){
					 ctk+=$(this).width();
				}
					 return ctk;
			   }); 
			var dw = $(this).find('dl').width();
			var z = ctk-dw;
			if(z<0&&dw<670){
				$(this).find('dl').css("left",z+'px');
			}
            if(dw>=670){
			    $(this).css("position","static");
				$('#top-nav').css("position","relative");
			    $(this).find('dl').addClass('gdwizh');
			}			
			$(this).find('dl').show();	   
		}
	   $(this).find('a.nav').addClass('hover');			
	}
	,
	function(i){
	   $(this).find('dl').hide();
	   $(this).find('a.nav').removeClass('hover');
	}
);
$('#top-nav dl dd').find('a:last').addClass('nolinex');
/*首页JS*/
$('#hanli,#anlilist').hover(function(){
    $('#anlilist').removeClass('none');
},function(){
	$('#anlilist').addClass('none');
});
/*模板定义函数*/
function proxy(dom,lei,type){
	if(dom){
		dom.hover(function(){
			$(this).addClass(lei);
			if(type==1){
				if($(this).find('.sub').length>0){
					$(this).find('.sub').show()
				}
				else{
					$(this).addClass(lei+'er')
				}
			}
		}
		,function(){
			$(this).removeClass(lei);
			if(type==1){
				if($(this).find('.sub').length>0){
					$(this).find('.sub').hide()
				}
				else{
					$(this).removeClass(lei+'er');
				}
			}
		})
	}
}
function navnow(dom,part2,part3,none){
	var li=dom.find(".navnow dt[id*='part2_']");
	var dl=li.next("dd.sub");
	if(none)dl.hide();
	if(part2.next("dd.sub").length>0)part2.next("dd.sub").show();
	if(part3.length>0)part3.parent('dd.sub').show();
	li.bind('click',function(){
		var fdl=$(this).next("dd.sub");
		if(fdl.length>0){
			fdl.is(':hidden')?fdl.show():fdl.hide();
			fdl.is(':hidden')?$(this).removeClass('launched'):$(this).addClass('launched');
		}
	})
}
function partnav(c2,c3,jsok){
	var part2=$('#part2_'+c2);
	var part3=$('#part3_'+c3);
	if(part2)part2.addClass('on');
	if(part3)part3.addClass('on');
	if(jsok!=0)navnow($('#sidebar'),part2,part3);
}
function DownWdith(group){
	tallest=0;
	group.each(function(){
		thisWdith=$(this).width();
		if(thisWdith>tallest){
			tallest=thisWdith
		}
	});
	group.width(tallest);
}
function Iframedom(){
	var Iframe=$("#iframe");
	var Iframe_Conts=Iframe.contents().find("body");
	Iframe_Conts.css("height","100%");
	var Iframe_div=Iframe_Conts.find("div.main_deng");
	var Iframe_div1=Iframe_Conts.find("div.main_zhuce");
	Iframe_div.css("margin","0px auto");
	Iframe_div1.css("margin","0px auto");
	var Iframe_Height=Iframe_Conts.outerHeight(true);
	Iframe.height(Iframe_Height);
}
function productlist(dom,l){
	var w=dom.width();
	var p=((w/l)-dom.find('li').width())/2;
	if(p<0)p=0;
	dom.find('li').css("margin","0px "+p+"px");
}
/*自定义函数结束*/
//以下为执行代码
var module=Number($("footer").attr('data-module')),navdown=$("#nav_"+$("footer").attr('data-navdown')),classnow=Number($("footer").attr('data-classnow'));
if(module){//全部页面
	$("#web_logo,nav ul li a").bind("focus",function(){if(this.blur)this.blur();});//IE
	if(navdown)navdown.addClass('navdown');//当前栏目
}
if(module!=10001){//所有内页
	var csnow=$("#sidebar").attr('data-csnow'),class3=$("#sidebar").attr('data-class3'),jsok=$("#sidebar").attr('data-jsok');
	partnav(csnow,class3,jsok);//侧栏导航点击展开隐藏
}
switch(module){
	case 10001://首页		    
		metHeight($(".contour-1"));//等高
	break;
	case 3://产品模块
		var plist = $('#productlist');
		if(plist.size()>0){
			metHeight(plist.find('li'));
		}else{
			var pshow=$(".pshow");
			var pshow_ddwh=pshow.width()-pshow.find("dt").width();
			pshow.find("dd").width(pshow_ddwh);
			var parlt=$('.pshow dd li');
			parlt.each(function(){
				var parst=$(this).find('span');
				if(parst.height()<$(this).height())parst.height($(this).height());
			});
		}
	break;
	case 4://下载模块
		var showdownload = $('#showdownload');
		if(showdownload.size()>0){
			var parlt=$('.paralist li');
			parlt.each(function(){
				var parst=$(this).find('span');
				if(parst.height()<$(this).height())parst.height($(this).height());
			});
			DownWdith($('.paralist li span'));
			$('.paralist li:last').css("border-bottom","0")
		}
	break;
	case 5://图片模块
		var ilist = $('#imglist');
		if(ilist.size()>0){
			metHeight(ilist.find('li'));
		}
	break;
}
	$("nav li:first").addClass('flcorner');//圆角
	$("nav li:last").addClass('ricorner');//圆角
$('.myCorner').corner();//圆角
var ie6 = (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion) == 4 && navigator.appVersion.indexOf("MSIE 6.0") != -1);
if (jQuery.browser.msie && ie6){
	$(document.body).fixpng({scope:'img'});
}