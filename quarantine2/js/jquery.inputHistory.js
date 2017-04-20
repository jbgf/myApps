+function ($) {
        'use strict';

        function inputHistory(element, options) {
          this.$body          = $(document.body)
          this.$element = $(element)
          this.options  = $.extend({}, inputHistory.DEFAULTS, options)
          this.ulClass = this.options.ulClass
          this.dataArr = this.options.data
          this.target = this.options.target
          this.inputs = this.$element.find(this.target);
          this.storaged_stack = [];
          this.ini();
        }
 
        inputHistory.VERSION  = '1.0'

        inputHistory.DEFAULTS = {
          ulClass:"ih-ul",
          target:":input",
          activeClass:"active"
        }
        
        inputHistory.prototype.ini = function () {
          var that = this;
              that.createUl();
              /*that.operate_stack(0,"root");*/
              /*that.choose();
              that.chooseItem();
              that.sure();*/
        }  

        inputHistory.prototype.createUl = function(){
          var that = this;
          var string = "<ul class="+that.ulClass+"/>";
            
              that.inputs.each(function(i,e){
                var arr = [];
                that.storaged_stack.push(arr);
                $(e).blur(function(){
                    var value = $(this).val();
                    that.add_stack(value,i)
                })
                    .on("click",function(){
                        that.showHistory(i,e)
                    })
                    .wrap("<div class='ihWrapper' style='width:100%;height:100%;'></div>")
                    .after(string)
              })
        }

        inputHistory.prototype.showHistory = function(index,ele){
          var that = this;
              /*console.log(index)*/
              
        }

        inputHistory.prototype.add_stack = function(value,index){
          var that = this;

              if(!(value in that.storaged_stack[index]))
              that.storaged_stack[index].push(value)
              console.log(that.storaged_stack[index])
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