
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


    +function ($) {
        'use strict';
        function createMenu(element,json){
            this.$element = $(element)
            this.$element.multiMenu({
                  allData:json,
                  outer:".tableWrapper01",
                  targetInput:".choosedItem",
                  enableAddToOuter:1,
                  success:function(arr,menu){
                          var targetInput = menu.targetInput;
                              menu.updateTargetInput(arr);
                              menu.addToOuterResult(arr);
                              
                              
                  }
            })
        }
        $.fn.createMenu    = function(json){
              return this.each(function () {
                var $this   = $(this)
                var data    = $this.data('bs.createMenu')
               
                if (!data) $this.data('bs.createMenu', (data = new createMenu(this, json)))
               
              })
        }
    }(jQuery);

    /*创建表格 start*/
    function tableMake(json){
          var table = $("#template01").val();
          var tNum;
          var $allTable,
              indexToD,
              $tableToD;                     
              $("#addSample").on("click",function(){
                  $allTable = $(".tableSection table");
                  tableBuild(table,json);
              }).click()

          function tableBuild(tableEle,json){
              
                  tNum = $allTable.length + 1;
              var title = "样品" + (tNum);
                  
                  $(tableEle).css("opacity",0).appendTo($(".tableSection"))
                             .animate({"opacity":1},function(){
                                  var box = $(this).find(".chooseZone"); 
                                      $(this).find("table").inputHistory(); 
                                      box.createMenu(json);
                              })
                             .find(".titleName").text(title).end()
                             .find(":input").each(function(i,e){
                                var name = $(e).attr("name");
                                    $(e).attr("name",'sample['+tNum+']'+name)
                             }).end()
                             .find(".fa-trash-o").on("click",function(){
                                tNum > 1 
                                ?(
                                  $allTable = $(".tableSection table"),
                                  $tableToD = $(this).parents("table"),
                                  indexToD = $allTable.index($tableToD),
                                  updateTable($allTable,indexToD),
                                  $tableToD.parents(".tableWrapper01").animate({"opacity":0,"height":"toggle"},function(){
                                        $(this).remove();
                                    })
                                  )
                                :alert('请至少填写一个样品');
                             });

          }

          function updateTable($tables,index){
              /*var $tableToChange = $tables.filter(':gt('+index+')');*/
                var reg = /\[(\d+)\]/;
                  tNum -=1;
                  $tables.each(function(i,e){
                    
                    if(i>index){

                        $(e).find(".titleName").text("样品" + i ).end()
                            .find(":input").each(function(input_index,input){
                              
                              var name = $(input).attr("name");
                              var num = reg.exec(name)[1];
                                  name = (name.replace(reg,'['+(num-1)+']'));
                                  $(input).attr("name",name)
                            })
                    }
                  })
          }

    }
    /*创建表格 end*/

     
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





