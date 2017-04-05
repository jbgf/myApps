$(function(){

    $(".sideBar03 .sideBar_li").each(function(i,e){
        var childList = $(e).children("ul.sideBar_ul");
            childList.length>0 ? 
            $(e).addClass("childList").children(".sideBar_a")
                .on("click",function(e){
                            e.stopPropagation();
                            childList.slideToggle();
                            $(this).toggleClass("on")
                })
        : $(e).children(".sideBar_a").addClass("bottom");
    })

})