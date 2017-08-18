$(function(){
    var sideBar = {
        sideBarObj:$(".sideBar02"),
        ini:function(){
              this.floor();
              this.sideBarObj.find(".sideBar_li").each(function(i,e){
                  var sideBar_a = $(e).children(".sideBar_a");
                  var childList = $(e).children("ul.sideBar_ul");
                          childList.length>0 ? 
                          sideBar_a.addClass("childList")
                                   .on("click",function(){
                                          childList.slideToggle();
                                          $(this).toggleClass("on");
                                          $(e).toggleClass("expand")
                                    })
                          :sideBar_a.addClass("bottom");
                  if(sideBar_a.hasClass("current")){
                      /*父代全展开*/
                      $(e).parents(".sideBar_li").children(".sideBar_a").trigger("click");
                  }else{
                        
                  }
              });
        },
        floor:function(){    /*确定层级：level1 level2*/
              var that = this;
              var ul = this.sideBarObj;
              var floor = 0;
                  
                  addFloor(ul);

                  function addFloor(parent){
                        
                      var lis = parent.children(".sideBar_li");
                          
                          if(lis.length>0){
                              floor++;
                              lis.addClass("level"+floor);
                              lis.each(function(i,e){

                                  var parentUL = $(e).children(".sideBar_ul");
                                  if(parentUL.length>0){addFloor(parentUL)}
                              })
                          }
                  }
        }   
    };
    sideBar.ini();
})




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


+function ($) {
        'use strict';
        // hover_window CLASS DEFINITION
        // ==========================

        function hover_window(element, options) {
          this.$body          = $(document.body)
          this.$element = $(element)
          this.options  = $.extend({}, hover_window.DEFAULTS, options)
          this._window = "";
          this.create();  
          this.$element.on('mouseenter.bs.hover_window', $.proxy(this.show, this))
          this.$element.on('mouseleave.bs.hover_window', $.proxy(this.hide, this))
          
        }

        hover_window.VERSION  = '1.0'

        hover_window.DEFAULTS = {
          type:1,            /*2为tips*/
          offset: 10,
          position:"bottom",
          bg:"#fff",
          width:"125px",
          height:"125px"
        }
        
        hover_window.prototype.template = function(){
          this._window = $('<div style="position:absolute;box-sizing:border-box;display:none;">'/**/
                                  +'<div class="inner" style="position:relative;height:100%;width:100%;"></div>'
                            +'</div>'); 
        }

        hover_window.prototype.create = function(){
          var that = this;
          var content = this.reset($(this.options.content)) ;
              this.template();

          var parent = this.$element.parent();
          
          var arr = ["top","right","bottom","left"];

              this._window.find(".inner").html(content);
              this.$element.css({position:"relative"});
              this._window.appendTo(parent).css({
                  width:that.options.width,
                  height:that.options.height,
                  padding:"5px",
                  background:that.options.bg,
                  "box-shadow":"0 0 10px gray",
                  border: "1px solid #ddd",
                  "box-sizing":"border-box",
                  "z-index":"99"
              });

          this.getPosition(this.$element);
              
        }

        hover_window.prototype.getPosition = function (ele) {
          var _self = this;
          var fixleft,fixtop,posFixObj;
          
            ele.find("img").load(function(){
                ele.addClass("loaded");
                call_f();
            })
            
            ele.hasClass("loaded")?"":call_f();
            function call_f(){
                var pos = ele.position(),ma,posFix;
                    ma = _self.$element.css("margin").split(" ").map(function(cv,index){
                            return parseInt(cv);
                    });
                    if( ma.length > 1 ){
                          pos.top += ma[0];
                          pos.left += ma[3];
                    }

                  if(_self.options.position == "bottom"){
                      pos.top += _self.options.offset;

                      fixleft = -(_self._window.outerWidth()/2 - ele.outerWidth()/2);
                      fixtop = ele.outerHeight();
                  }
                  if(_self.options.position == "left"){
                      pos.left -= _self.options.offset;
                      fixleft = -(_self._window.outerWidth());
                      fixtop = -(_self._window.outerHeight()/2 - ele.outerHeight()/2);  
                  }
                  if(_self.options.position == "right"){
                      var caret = _self.caret("right")  ;

                      pos.left += _self.options.offset;
                      fixleft = 0;
                      fixtop = -(_self._window.outerHeight()/2 - ele.outerHeight()/2);
                      _self._window.find(".inner").append(caret);  
                  }
                 
                  _self._window.css({
                      left: pos.left + fixleft,
                      top:pos.top + fixtop
                  })
            }

          
        }
        hover_window.prototype.reset = function(content){
          var css_config = {}
          if(this.options.type == 1){
             $.extend(css_config,{
                  "margin":"0px",
                  width:"100%",
                  height:"100%"
             })
          }
          if(this.options.type == 0){
             $.extend(css_config,{
                  width:"200px",
                  'white-space': 'normal',
                  'word-wrap': 'break-word',
                  'line-height': '20px'
             })  
          }
          $.extend(css_config,{
                  display:"block"
          })
          content.css(css_config)
          return content;
        }

        hover_window.prototype.show = function () {
          
          this._window.show().addClass("on");
        }

        hover_window.prototype.hide = function () {
          this._window.hide().removeClass("on");
        }
        hover_window.prototype.caret = function(pos){
          var caret = $('<div class="caret-'+pos+'" style="position:absolute"></div>');
          var css_fig = {};
          if(this.options.position == "right"){
            $.extend(css_fig,{
                  left:"-13px",
                  top:"50%",
                  transform:"translateY(-50%)"
            });
            caret.css(css_fig);
          }
          return caret;
        }

        // hover_window PLUGIN DEFINITION
        // ===========================

        function Plugin(option) {
          return this.each(function () {
            var $this   = $(this)
            var data    = $this.data('bs.hover_window')
            var options = typeof option == 'object' && option

            if (!data) $this.data('bs.hover_window', (data = new hover_window(this, options)))
            if (typeof option == 'string') data[option]()
          })
        }

        var old = $.fn.hover_window

        $.fn.hover_window             = Plugin
        $.fn.hover_window.Constructor = hover_window


        // hover_window NO CONFLICT
        // =====================

        $.fn.hover_window.noConflict = function (){
          $.fn.hover_window = old
          return this
        }

        // hover_window DATA-API
        // ==================

        $(window).on('load.bs.hover_window.data-api', function () {
          $('[data-hover="_window"]').each(function () {
            var $w = $(this)
            Plugin.call($w, $w.data())   /*获取data-xx属性,作为option*/
          })
        })

}(jQuery);




/*jQuery.validator.addMethod("isTel", function(value,element) {   
                      
    var length = value.length;   
    var mobile = /^1(3[0-9]|4[57]|5[0-35-9]|8[0-9]|70)\d{8}$/;   
     
    return this.optional(element) || (length==11 && mobile.test(value));   
}, "请正确填写您的联系方式");
*/

 

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



