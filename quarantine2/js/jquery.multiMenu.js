+function ($) {
        'use strict';

        function multiMenu(element, options) {
          this.$body          = $(document.body)
          this.$element = $(element)
          this.options  = $.extend({}, multiMenu.DEFAULTS, options)
          this.allData = this.options.allData;
          this.levelNum = 0;
          this.currentDataNode = this.allData;
          this.mainClass = this.options.class;
          this.ini(this.allData);

          /*this._window = "";
          this.create();  
          this.$element.on('mouseenter.bs.multiMenu', $.proxy(this.show, this))
          this.$element.on('mouseleave.bs.multiMenu', $.proxy(this.hide, this))*/
          
        }

        multiMenu.VERSION  = '1.0'

        multiMenu.DEFAULTS = {
          class:"multi-li"
         /* type:1,            
          offset: 10,
          position:"bottom",
          bg:"#fff",
          width:"125px",
          height:"125px"*/
        }
        

        multiMenu.prototype.ini = function () {
          var that = this;
               
             
          
              that.createlevel("root");
              that.choose();
        }  

        multiMenu.prototype.choose = function () {
          var that = this;
          var index;  

              $(document).on("click",'.'+that.mainClass+'',function(){

                  index = $(this).parent("ul").children("li").index($(this));
                  that.createlevel(index) ;
              })
              
        }

        multiMenu.prototype.getCurrentNode = function (index) {
          var that = this;

          if(index != "root"){
            console.log(that.currentDataNode)
            if("sub" in that.currentDataNode){
                that.currentDataNode = that.currentDataNode.sub[index];  
            }else{
               /* that.currentDataNode = that.currentDataNode.sub[index];  */
            }
            
          }else{
            that.currentDataNode = that.allData; 
          }
        }

        multiMenu.prototype.getData = function (dnode) {
          var that = this;
          var arr = [];
              if(dnode.sub){
                  $.each(dnode.sub,function(i,e){
                      arr.push(e.name);
                  })
                  return arr;  
              }
        }        

        multiMenu.prototype.createlevel = function(datalevel){
          var that = this;
          var string = "<ul>";
          
          that.getCurrentNode(datalevel); 
          
          if(!that.isFinalLevel()){
              var level_data = that.getData(that.currentDataNode);
           
              $.each(level_data,function(i,e){
                  string +='<li class='+that.mainClass+'>'+e+'</li>'
              })
                  string +="</ul>";
                  that.$element.append(string);
          }else{
              that.multiChoose();
          }
          that.multiTag();
        }
        
        multiMenu.prototype.isFinalLevel = function (ele) {
            var that = this;
            var status ;
            
            if("sub" in that.currentDataNode){
                status = false;
            }else{
                status = true;
            }
            return status;
        }
        multiMenu.prototype.multiChoose = function (ele) {}
        multiMenu.prototype.multiTag = function (ele) {}

        multiMenu.prototype.reset = function (ele) {
          var that = this;
          
        }

        // multiMenu PLUGIN DEFINITION
        // ===========================

        function Plugin(option) {
          return this.each(function () {
            var $this   = $(this)
            var data    = $this.data('bs.multiMenu')
            var options = typeof option == 'object' && option

            if (!data) $this.data('bs.multiMenu', (data = new multiMenu(this, options)))
            if (typeof option == 'string') data[option]()
          })
        }

        var old = $.fn.multiMenu

        $.fn.multiMenu             = Plugin
        $.fn.multiMenu.Constructor = multiMenu


        // multiMenu NO CONFLICT
        // =====================

        $.fn.multiMenu.noConflict = function (){
          $.fn.multiMenu = old
          return this
        }

        // multiMenu DATA-API
        // ==================

        $(window).on('load.bs.multiMenu.data-api', function () {
          $('[data-hover="_window"]').each(function () {
            var $w = $(this)
            Plugin.call($w, $w.data())   /*获取data-xx属性,作为option*/
          })
        })

}(jQuery);