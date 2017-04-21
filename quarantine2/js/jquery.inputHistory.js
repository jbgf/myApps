+function ($) {
        'use strict';

        function inputHistory(element, options) {
          this.$body          = $(document.body)
          this.$element = $(element)
          this.options  = $.extend({}, inputHistory.DEFAULTS, options)
          this.ulClass = this.options.ulClass
          this.storaged_stack = this.options.data
          this.target = this.options.target
          this.inputs = this.$element.find(this.target);
          
          this.ini();
        }
 
        inputHistory.VERSION  = '1.0'

        inputHistory.DEFAULTS = {
          ulClass:"ih-ul",
          target:":input",
          activeClass:"active"
        }
        
        inputHistory.prototype.ini = function(){
          var that = this;
              that.createUl();
              /*that.operate_stack(0,"root");*/
              /*that.choose();
              that.chooseItem();
              that.sure();*/
        }  

        inputHistory.prototype.createUl = function(){
          var that = this;
          var string = "<ul class="+that.ulClass+" style=''/>";
              that.background();
              that.inputs.each(function(i,e){

                var obj = {addComplete:false,arr:new Array()};
                    that.storaged_stack.push(obj);
                    $(e).change(function(){
                        var value = $(this).val();
                        that.add_stack(i,value)
                    })
                        .on("click",function(){
                            
                            that.showHistory(i,e)
                        })

                        .bind('input propertychange',function(){
                            that.hideHistory(i)                            
                        })
                        .wrap("<div class='ihInner' style='height:100%;'></div>")
                        .parent(".ihInner")
                        .wrap("<div class='ihWrapper' data-order="+i+" style='position:relative;height:100%;padding:5px;'></div>")
                        .after(string)
              })
              that.inputWrappers = that.inputs.parents(".ihWrapper");
              that.uls = that.inputWrappers.find("."+that.ulClass);
             
              
              that.inputWrappers.on("click",".ihli",function(e){
                      
                  var thiswrapper = $(this).parents(".ihWrapper"),
                      
                      indexofInput = thiswrapper.attr("data-order"),
                      indexofLi = $(this).attr("data-order");

                      that.hideHistory(indexofInput)
                      that.updateInput(indexofInput,indexofLi,this)
              })
        }

        inputHistory.prototype.background = function(){
            var that = this;
                that.$bg = $(document.createElement('div'))
                              .css({
                                position:"fixed",
                                left:0,
                                top:0,
                                right:0,
                                bottom:0,
                                display:"none"
                              })
                              .appendTo($("body"))
                              .on("click",function(e){
                                  if (e.target !== e.currentTarget) return
                                  $(this).hide();
                                  that.curUl.hide();  
                              })
        }

        inputHistory.prototype.updateInput = function(index1,index2,ele){
          var that = this;
          var value = that.storaged_stack[index1]["arr"][index2];
              
              that.inputs.eq(index1).val(value);

        }        

        inputHistory.prototype.hideHistory = function(index,ele){
          var that = this;
          var curUl = that.uls.eq(index);
              curUl.hide();
              that.$bg.hide();
        }
        inputHistory.prototype.showHistory = function(index,ele){
          var that = this;
          var arr = that.storaged_stack[index]["arr"];            
              console.log(that.dataArr)
              if(arr && arr.length > 0 /*&& ele.value ==""*/){
                  that.curUl = that.uls.eq(index)
                  if(arr.length > that.curUl.find("li").length){
                    var li = "<li class='ihli' data-order="+(arr.length-1)+">"+arr[arr.length-1]+"</li>";
                    that.curUl.append(li)  ;
                  }
                  that.curUl.show();
                  that.$bg.show();
              }
        }

        inputHistory.prototype.add_stack = function(index,value){
          var that = this;
          var arr = that.storaged_stack[index]["arr"];              
          /*var ul = that.uls.eq(index);*/

              if(arr.indexOf(value) == -1){
                  arr.push(value);
                  
                  /*var li = "<li class='ihli' data-order="+(arr.length-1)+">"+value+"</li>";
                      ul.append(li);*/
              }
              /*console.log(that.storaged_stack[index])*/
        }

        // inputHistory PLUGIN DEFINITION
        // ===========================

        function Plugin(option) {
          return this.each(function () {
            var $this   = $(this)
            var data    = $this.data('bs.inputHistory')
            var options = typeof option == 'object' && option

            if (!data) $this.data('bs.inputHistory', (data = new inputHistory(this, options)))
            
            if (typeof option == 'string') data[option]()
          })
        }

        var old = $.fn.inputHistory

        $.fn.inputHistory             = Plugin
        $.fn.inputHistory.Constructor = inputHistory
 
 
        // inputHistory NO CONFLICT
        // =====================

        $.fn.inputHistory.noConflict = function (){
          $.fn.inputHistory = old
          return this
        }

        // inputHistory DATA-API
        // ==================
        /*获取data-xx属性,作为option*/
        /*$(window).on('load.bs.inputHistory.data-api', function () {
          $('[data-hover="_window"]').each(function () {
            var $w = $(this)
            Plugin.call($w, $w.data())   
          })
        })*/

}(jQuery);