
function getInfo(i){var owlInfo=i,prop,value,name;$('.center_nav li').eq(owlInfo.currentPosition).find('a').removeClass('nobg').parents('li').siblings().find('a').addClass('nobg');$('.center_nav li').eq(owlInfo.currentPosition).find('.triangle').fadeIn(200).parents('li').siblings().find('.triangle').fadeOut();}
news_p=-1;function about_Slide(obj){if(window.location.href.search(/#/g)!=-1){var tar=$("#"+window.location.href.substring(window.location.href.lastIndexOf('#')+1));if(tar.attr('id')=='introduce'){$("html,body").animate({scrollTop:130},600);}else if(tar.attr('id')=='ceo'){$("html,body").animate({scrollTop:180},600);}else{$("html,body").animate({scrollTop:330},600);}
var about_Slide=obj.parent().next('.content');obj.parent().next('.content').not(tar.parents('.about_slide_title').parent().next('.content')).slideUp(200);tar.next('i').removeClass('fa-plus').addClass('fa-minus');tar.parents('.about_slide_title').addClass('change purple_bg white').find('i,h2').css('color','#fff');obj.click(function(){obj.find('.right').find('i').not(obj.find('.right').find('i').eq($(obj).index($(this)))).removeClass('fa-minus').addClass('fa-plus')
$(this).parent().next('.content').slideToggle(200);var changI=$(this).find('.right').find('i');if(changI.hasClass('fa-plus')){changI.removeClass('fa-plus').addClass('fa-minus');}else{changI.removeClass('fa-minus').addClass('fa-plus')}
about_Slide.not(about_Slide.eq($(obj).index($(this)))).slideUp(200);$(this).addClass('change purple_bg white').find('i,h2').css('color','#fff');obj.not($(this)).removeClass('change purple_bg white').find('i,h2').css('color','#8c64a0')});}}
$('input,textarea').each(function(index,element){$(element).addClass('inputid');$(element).click(function(event){var inputvalue=$(element).val();if($(element).hasClass("inputid")&&$(this).attr('type')!='submit'){$(element).val('');$(element).keyup(function(){$(element).removeClass('inputid');});}
event.stopPropagation();$(element).keyup(function(){inputvalue=$(this).val();});var _inputthis=$(this);$(document).click(function(event){if($(element).hasClass("select_input")){return false;}else{_inputthis.val(inputvalue);}});});});$(window).load(function(){$(".loader-item").delay(0).fadeOut();$("#pageloader").delay(0).fadeOut("slow");});$(function(){$('.back_top').click(function(){var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;$(document.documentElement).animate({scrollTop:0},800);$(document.body).animate({scrollTop:0},800);})
$(".banner").owlCarousel({items:1,itemsMobile:false,dotsSpeed:500,navSpeed:500,autoplayTimeout:4000,loop:true,autoplay:true,stopOnHover:true,nav:false,dots:false,rewindNav:true,rewindSpeed:0,paginationNumbers:false,responsive:true,lazyLoad:true})
$(".nav_list .row").owlCarousel({items:1,itemsMobile:false,dotsSpeed:500,navSpeed:500,info:getInfo,autoplayTimeout:4000,loop:true,autoHeight:true,nav:false,dots:false,stopOnHover:true,rewindNav:true,rewindSpeed:0,paginationNumbers:false,responsive:true,startPosition:1})
var owl=$(".nav_list .row").data('owlCarousel');$('.center_nav li').eq(0).find('a').click(function(){owl.goTo(0);})
$('.center_nav li').eq(1).find('a').click(function(){owl.goTo(1);})
$('.center_nav li').eq(2).find('a').click(function(){owl.goTo(2);})
$.slidebars({siteClose:true,hideControlClasses:false,scrollLock:false});$('.brand  .hide_content').slideUp();$('.brand .title').click(function(){if($(this).find('.fa-plus').length){$(this).find('.fa-plus').removeClass('fa-plus').addClass('fa-minus');}else{$(this).find('.fa-minus').removeClass('fa-minus').addClass('fa-plus');}
$('.brand  .hide_content').slideToggle(200);});$('.sb-slidebar .button').click(function(){$.slidebars.close();});var $swipeArea=$(".sb-slidebar");function handleTouchySwipe(event,$target,data){if(data.direction=='left'){$.slidebars.close();}}
if(!(navigator.userAgent.search(/mqqbrowser/ig)!=-1)){$swipeArea.on("touchy-swipe",handleTouchySwipe);}
$(".certificate_slide").owlCarousel({items:4,itemsMobile:false,dotsSpeed:500,navSpeed:500,autoplayTimeout:4000,loop:true,autoplay:true,margin:10,stopOnHover:true,nav:false,dots:false,rewindNav:true,rewindSpeed:0,paginationNumbers:false,responsive:true,lazyLoad:true,autoHeight:true,dots:true});$(".evrm_slide").owlCarousel({items:2,itemsMobile:false,dotsSpeed:500,navSpeed:500,autoplayTimeout:4000,loop:true,autoplay:true,margin:20,stopOnHover:true,nav:false,dots:false,rewindNav:true,rewindSpeed:0,paginationNumbers:false,responsive:true,lazyLoad:true,autoHeight:true,dots:true});$(".introduce_slide .wrap").owlCarousel({items:1,itemsMobile:false,dotsSpeed:500,navSpeed:500,autoplayTimeout:4000,loop:true,autoplay:true,stopOnHover:true,nav:false,dots:false,rewindNav:true,rewindSpeed:0,paginationNumbers:false,responsive:true,lazyLoad:true,autoHeight:true,dots:true});about_Slide($('hgroup.about_slide_title'));$('.hide_content a').click(function(){setTimeout(function(){if(window.location.href.search(/about/g)!=-1){location.reload();}},50)})
$(".case_slide").owlCarousel({items:1,itemsMobile:false,dotsSpeed:500,navSpeed:500,autoplayTimeout:4000,loop:true,autoplay:true,stopOnHover:true,nav:false,dots:false,rewindNav:true,rewindSpeed:0,paginationNumbers:false,responsive:true,lazyLoad:true,autoHeight:true,dots:true});$('.contact_nav a').click(function(event){var tar='.'+$(this).data('name');if(tar!='.undefined'){$("html,body").animate({scrollTop:$(tar).offset().top-10},300);event.preventDefault();}});$('.expert_link').click(function(){$(this).addClass('expert_remeber');})
$('.hot_items_list_a').click(function(){$(this).addClass('hot_item_remember');})
$(".hot_items_titleslide").owlCarousel({items:1,itemsMobile:false,dotsSpeed:500,navSpeed:500,autoplayTimeout:2000,loop:true,autoplay:true,stopOnHover:true,nav:false,dots:false,rewindNav:true,rewindSpeed:0,paginationNumbers:false,responsive:true,lazyLoad:true,autoHeight:true});})
function checkyuyue()
{if(Form1.fromname.value==""||Form1.fromname.value=='姓名：')
{alert("您没有填姓名");document.Form1.fromname.focus();return false;}
if(!isCardName(Form1.fromname.value))
{alert("请填写中文名称!");return false;}
if(Form1.email.value==''||Form1.email.value=='请选择分类'){alert("请选择项目");document.Form1.email.focus();return false;}
if(!isCardName(Form1.email.value))
{alert("项目名称错误！");return false;}
if(Form1.lianxi.value==""||Form1.lianxi.value=='电话：')
{alert("请填写您个人的手机号码！");document.Form1.lianxi.focus();return false;}
if(Form1.lianxi.value.length<7||Form1.lianxi.value.length>13)
{alert("手机号码格式不正确");document.Form1.lianxi.focus();return false;}
if(!isMobile(Form1.lianxi.value))
{alert("手机号码错误!");return false;}
return true;}
function isChinese(s)
{var patrn=/^\s*[\u4e00-\u9fa5]{1,15}\s*$/;if(!patrn.exec(s))
{return false;}
return true;}
function isNumber(s)
{var patrn=/^\s*\d+\s*$/;if(!patrn.exec(s))
{return false;}
return true;}
function isMobile(s)
{var patrn=/^\s*(15\d{9}|188\d{8}|189\d{8}|13[0-9]\d{8})\s*$/;if(!patrn.exec(s))
{return false;}
return true;}
function isIdCard(s)
{var patrn=/^\s*\d{15}\s*$/;var patrn1=/^\s*\d{16}[\dxX]{2}\s*$/;if(!patrn.exec(s)&&!patrn1.exec(s))
{return false;}
return true;}
function isCardName(s)
{var patrn=/^\s*[\u4e00-\u9fa5]{1,}[\u4e00-\u9fa5.·]{0,25}[\u4e00-\u9fa5]{1,}\s*$/;if(!patrn.exec(s))
{return false;}
return true;}
function checkradio(name){var a=1;var radioname=document.getElementsByName(name);for(i=0;i<radioname.length;i++){if(radioname[i].checked)a=0;}
return a;}