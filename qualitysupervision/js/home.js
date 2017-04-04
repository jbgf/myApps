$(function(){

    $(".sideBar03 .sideBar_li").each(function(i,e){
        var childList = $(e).children("ul.sideBar_ul");
            childList.length>0 ? 
            $(e).addClass("childList")
                .on("click",function(){
                            childList.slideToggle();
                            $(this).toggleClass("on")
                })
        : $(e).children(".sideBar_a").addClass("bottom");
    })

})