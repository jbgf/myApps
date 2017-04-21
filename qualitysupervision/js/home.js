$(function(){

    $(".sideBar03 .sideBar_li").each(function(i,e){
        var childList = $(e).children("ul.sideBar_ul");
            childList.length>0 ? 
            $(e).addClass("childList").children(".sideBar_a")
                .on("click",function(e){
                            e.stopPropagation();
                            childList.slideToggle();
                            $(this).parent().toggleClass("on")
                })
        : $(e).children(".sideBar_a").addClass("bottom");
        if($(e).hasClass("on")){
            $(e).parents(".sideBar_li").children(".sideBar_a").trigger("click");
        }
    });

})