    
    $(function(){

      function testLinks(options){
        var $hiddenLinks = $("#hiddenLinks");
          $hiddenLinks.css({
            position:'fixed',
            left:0,
            bottom:0,
            padding:'0 10px 20px',
            'z-index':'99999'
          })
          $hiddenLinks.find("a").css({
              background:'#fa812f',
              color:'#fff',
              display:'inline-block',
              'margin':'0 10px 5px 0',
              'border-radius':'5px',
              'padding':'2px 5px',

          })
          if(options.code == 0){
            $hiddenLinks.hide();
          }else if(options.code == 1){

          }
          

          $(document).keydown(function(e){ 
                /*alt + s*/ 
                if(event.altKey && event.keyCode == 83){
                 $("#hiddenLinks").toggle()
                } 
          })
      }
       
      testLinks({code:0})
      
      backToTop()

    })
    
    function backToTop(){
      var wh = $(window).height();

      var icon = $("<div style='position:fixed;z-index:99999;right:0.5rem;bottom:3rem;'><img style='width:46px' src='img/backTop.png'></div>");
      if($(document).height()>wh){
        icon.appendTo("body").on("click",function(){
            $('html,body').animate({scrollTop: '0px'}, 300);
        })
      }

      if($(window).scrollTop()>wh/2){
          
          icon.show()
        }else{
          icon.hide()
        }
      $(window).on("scroll",function(){
        if($(window).scrollTop()>wh/2){
          
          icon.show()
        }else{
          icon.hide()
        }
      })
    }

    function equalHeight(options){

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


    //漂浮窗口  
    function FloatAB(selector,mode) {  
      
            var obj = $(selector);  
            var windowHeight = $(window).height();//浏览器高度  
            var windowWidth = $(window).width();//浏览器宽度  
            var wrapper = obj.parents(".abWrapper");
                wrapper.show();
            $("body").css({
              "overflow-y": "hidden"
            });
            if (obj.find(".item").length == 0) return;//如果没有内容，不执行
            if(mode == 0){   //窗体运动
                var dirX = -1.5;//每次水平漂浮方向及距离(单位：px)，正数向右，负数向左，如果越大的话就会看起来越不流畅，但在某些需求下你可能会需要这种效果  
                var dirY = -1;//每次垂直漂浮方向及距离(单位：px)，正数向下，负数向上，如果越大的话就会看起来越不流畅，但在某些需求下你可能会需要这种效果  
                              
                var delay = 30;//定期执行的时间间隔，单位毫秒  
                var handler = setInterval(move, delay);//定期执行，返回一个值，这个值可以用来取消定期执行  
                              
                obj.hover(function() {//鼠标经过时暂停，离开时继续  
                    clearInterval(handler);//取消定期执行  
                }, function() {  
                    handler = setInterval(move, delay);  
                });

                $(window).resize(function() {//当改变窗口大小时，重新获取浏览器大小，以保证不会过界（飘出浏览器可视范围）或漂的范围小于新的大小  
                    windowHeight = $(window).height();//浏览器高度  
                    windowWidth = $(window).width();//浏览器宽度  
                });
            }else{
                
                
            }
            
            obj.show(0,function(){
                var width = obj.width();
                    width > windowWidth ? (width = windowWidth,obj.width(windowWidth)):"";
                 
                obj.css({ left: windowWidth / 2 - width / 2 + "px", top: windowHeight / 2 - obj.height() / 2 + "px" });//把元素设置成在页面中间     
                   
                
            });//元素默认是隐藏的，避免上一句代码改变位置视觉突兀，改变位置后再显示出来    
            
            
            obj.find(".close").click(function() {//绑定关闭按钮事件  
                close();  
            });  
              
            function move() {//定期执行的函数，使元素移动  
                var currentPos = obj.position();//获取当前位置，这是JQuery的函数，具体见：http://hemin.cn/jq/position.html  
                var nextPosX = currentPos.left + dirX;//下一个水平位置  
                var nextPosY = currentPos.top + dirY;//下一个垂直位置  
                              
               /* if (nextPosX >= windowWidth - obj.width()) {//这一段是本站特有的需求，当漂浮到右边时关闭漂浮窗口，如不需要可删除  
                    close();  
                }  */
          
                if (nextPosX <= 0 || nextPosX >= windowWidth - obj.width()) {//如果达到左边，或者达到右边，则改变为相反方向  
                    dirX = dirX * -1;//改变方向  
                    nextPosX = currentPos.left + dirX;//为了不过界，重新获取下一个位置  
                }  
                if (nextPosY <= 0 || nextPosY >= windowHeight - obj.height() - 5) {//如果达到上边，或者达到下边，则改变为相反方向。              
                    dirY = dirY * -1;//改变方向  
                    nextPosY = currentPos.top + dirY;//为了不过界，重新获取下一个位置  
                }  
                obj.css({ left: nextPosX + "px", top: nextPosY + "px" });//移动到下一个位置  
            }  
          
            function close() {//停止漂浮，并销毁漂浮窗口  
                clearInterval(handler);  
                /*obj.remove();*/
                wrapper.hide();
                $("body").css({
                  "overflow-y": "visible"
                });
            }  
    } 
    



    /*是否是返回 start*/
    function isGoBack(){
      /*html*/
      /*<input type="hidden" id="refreshed" value="no">*/
          var e = document.getElementById("refreshed");  
          if(e){
              if(e.value=="no"){
                e.value="yes";
                return false;  
              }
              else{
                e.value="no";
                return true;  /*location.reload();*/
              }  
          }
    }
    /*是否是返回 end*/

    /*获取上传文件*/
    function getUpload(input){
      $(input).change(function(e){
          var src = e.target || window.event.srcElement; 

          var filename = src.value;
              filename = filename.substring( filename.lastIndexOf('\\')+1 );
              
              $(this).parents(".uploadBtn").css({
                    'background':'url('+getObjectURL(this.files[0])+') 0% 0% / cover no-repeat'
              });
              
      });

    }

    function getObjectURL(file){
          var url = null ; 
          if (window.createObjectURL!=undefined){ // basic
              url = window.createObjectURL(file) ;
          } else if (window.URL!=undefined) { // mozilla(firefox)
              url = window.URL.createObjectURL(file) ;
          } else if (window.webkitURL!=undefined) { // webkit or chrome
              url = window.webkitURL.createObjectURL(file) ;
          }
          
          return url ;
    }

    function lableF(labelBtn,submitBtn){
                
            labelBtn.on("click",function(e){
                if($(e.target).is('input')){
                    return;
                }
                submitBtn.toggleClass("disabledLink");    
                submitBtn[0].disabled = !submitBtn[0].disabled;
                
            });
            var ib = isGoBack();
            if(ib){
                
            }else{
                submitBtn.addClass("disabledLink");
                submitBtn[0].disabled = true; 
                labelBtn.trigger("click");
            }        
    }



    function radioCancelable(radioWrapper){
        radioWrapper.on("click",function(e){
            if($(e.target).is('input')){
                  return;
            }
            var input = $(this).find("input");
            var checked = input.data("check");
            if(checked == 1){
                input.removeAttr('checked').data("check",0).addClass("nochecked");
            }else{
                input.parents("td").find("input[type='radio']").removeAttr('checked').data("check",0).addClass("nochecked");
                input.attr('checked',true).data("check",1).removeClass("nochecked");
            }
        })
    }





