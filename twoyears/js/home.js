/**
 * Created by Administrator on 2017/6/23.
 */

window.onload = function() {

    var _config = [
        {wrapper: ".summarize", children: "", class: ".sum-block", mode: 0},
        {wrapper: ".sumTagRow1", children: "", class: ".st-tag", mode: 0},
        {wrapper: ".sumTagRow3", children: "", class: ".st-tag", mode: 0}
    ];

    equalHeight(_config);
    +function(){
        var ww = $(window).width();
        var nav = $("#myScrollspy .nav");
        var ot = $("#myScrollspy").offset().top - 200;
        var msh = nav.height();

            $('body').scrollspy({ 
                target: '#myScrollspy',
                offset:ot
            });
            $("#myScrollspy").affix({
                offset:{
                    top:ot,
                    bottom: function () {
                    return (this.bottom = 
                        $('.footer').outerHeight(true) + msh) 
                    }
                }
            })
            var timer0 = null;
            var timer = null;
            var seconds = 10;
            $(".scrollTop").on("click",function(){
                
                    
                    if(requestAnimationFrame){
                        cancelAnimationFrame(timer);
                        timer = requestAnimationFrame(function fn(){
                            var oTop = document.body.scrollTop || document.documentElement.scrollTop;
                            if(oTop > 0){
                                document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
                                timer = requestAnimationFrame(fn);
                            }else{
                                cancelAnimationFrame(timer);

                            }
                        });
                    }else{
                        clearTimeout(timer);
                        timer = setTimeout(function fn(){
                            var oTop = document.body.scrollTop || document.documentElement.scrollTop;
                            if(oTop > 0){
                                document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
                                timer = setTimeout(fn,seconds);
                            }else{
                                clearTimeout(timer);
                            }
                        },seconds)
                    }
                    
                
            })
            if(ww < 1300){
                +function isRolling(){
                        var isScrollFlag = false;
                        var isScrolling = false;
                        var seconds = 1000;
                            $(window).scroll(function(){
                                
                                if(!isScrolling){
                                    nav.fadeIn();
                                }
                                isScrolling = true;
                                isScrollFlag = true;
                                clearTimeout(timer0);
                                timer0 = setTimeout(function fn(){
                                    
                                    if(isScrollFlag){
                                        isScrollFlag = false;
                                        timer0 = setTimeout(fn,seconds);
                                    }else{

                                        clearTimeout(timer0);
                                        isScrolling = false;
                                        nav.fadeOut();
                                    }
                                },seconds)
                            

                            })
                        
                }() 
            }
           
        
    }()
    
}

function equalHeight(options){
    console.log('test');
    jQuery(options).each(function(i,e){
        var heightArr = [],
            max = 0;

        if(jQuery(e.wrapper).length == 0 || (e.mode == undefined)){return };
        if(e.mode == 0){
            jQuery(e.wrapper).each(function(){

                var $eles = jQuery(this).find(e.class);

                $eles.each(function(index,element){
                    var height = jQuery(element).height();
                    height > max ? max = height : "";
                })
                $eles.height(max);
                if(e.children !="")$eles.find(e.children).height(max);

            })
        }
        if(e.mode == 1){
            var $eles = jQuery(e.wrapper).find(e.class);

            $eles.each(function(index,element){
                var height = jQuery(element).height();
                height > max ? max = height : "";
            })
            $eles.height(max);
            if(e.children !="")$eles.find(e.children).height(max);
        }
    })
}