+function ($) {
        'use strict';

        function multiMenu(element, options) {
          this.$body          = $(document.body)
          this.$element = $(element)
          this.options  = $.extend({}, multiMenu.DEFAULTS, options)
          this.allData = this.options.allData;
          this.stack = [];
          this.curObj = this.allData;
          this.arrToChoose = this.curObj.sub;
          this.mainClass = this.options.class;
          this.mcClass = this.options.mcClass;
          this.activeClass = this.options.activeClass;
          this.ini(this.allData);

          /*this._window = "";
          this.create();  
          this.$element.on('mouseenter.bs.multiMenu', $.proxy(this.show, this))
          this.$element.on('mouseleave.bs.multiMenu', $.proxy(this.hide, this))*/
          
        }

        multiMenu.VERSION  = '1.0'

        multiMenu.DEFAULTS = {
          class:"multi-li",
          mcClass:"mc-li",
          activeClass:"active"
         /* type:1,            
          offset: 10,
          position:"bottom",
          bg:"#fff",
          width:"125px",
          height:"125px"*/
        }
        

        multiMenu.prototype.ini = function () {
          var that = this;
              that.createlevel();
              that.operate_stack(0,"root");
              that.choose();
              that.chooseItem();
        }  

        multiMenu.prototype.choose = function () {
          var that = this;
          var index_li,index_ul;  
          var num;
              $(document).on("click",'.'+that.mainClass+'',function(){
                  if($(this).hasClass(that.activeClass)){return}
                  var uls = that.$element.find("ul");
                  var ul = $(this).parent("ul"),sameLevel;
                      index_ul = uls.index(ul);
                      index_li = ul.children("li").index($(this));
                      
                      num = that.getPopNum(ul,index_ul),
                      sameLevel = num == 0;
                      
                      that.operate_stack(num,index_li);
                      if(!sameLevel){
                        ul.nextAll().remove()
                        /*$(".multiChooseZone").html("");*/
                      } 
                      if(that.hasSub(index_li)){
                         if(!that.isFinalLevel()){
                            that.createlevel();  
                         }else{
                            that.multiChoose();    
                         }
                      }
                      
                      $(this).addClass(that.activeClass)
                             .siblings('.'+that.mainClass+'').removeClass(that.activeClass);   
              
              })
        }

        multiMenu.prototype.isFinalLevel = function (index) {
            var that = this;
            var status ;
            
            if("final" in that.curObj){
                status = true;
            }else{
                status = false;
            }
            return status;
        }

        multiMenu.prototype.hasSub = function (index) {
            var that = this;
            var status ;
            
            if("sub" in that.curObj){
                status = true;
            }else{
                status = false;
            }
            return status;
        }

        multiMenu.prototype.operate_stack = function(popNum,index){
          var that = this;
          
           if(index != "root"){
              /*if(!that.isFinalLevel()){*/

                  popNum > 0 && that.stack.splice(-popNum,popNum);
                  that.curObj = that.stack[that.stack.length - 1][index];
                  that.arrToChoose = that.curObj.sub;
                  that.stack.push(that.arrToChoose);

              /*}*/
              
              
           }else{

              that.stack.splice(0,that.stack.length);
              that.stack.push(that.arrToChoose);
              
           }
        }        

        multiMenu.prototype.getPopNum = function(ul,index_ul){
          var that = this;
          var data  = ul.data('bs.multiMenu'),num;
              if (!data) {
                $(ul).data('bs.multiMenu', (data = index_ul));
              }
              num = ( that.stack.length - 1 ) - index_ul;
              return num;

        }

        multiMenu.prototype.createlevel = function(){
          var that = this;
          var string = "<ul class='multi-ul'>";
          
              var arr = that.arrToChoose;
            
              $.each(arr,function(i,e){
                  string +='<li class='+that.mainClass+'>'+e.name+'</li>'
              })
                  string +="</ul>";
                  that.$element.append(string);
          
              /*that.multiChoose();*/
          
          /*that.multiTag();*/
        }
        
        multiMenu.prototype.chooseItem = function (ele) {
          var that = this;
              that.choosed_arr = [];
          $(document).on("click",'.'+that.mcClass+'',function(){
              if(!that.isFinalLevel()){
                return;
              }
              var index = $(this).parents("ul").find('.'+that.mcClass+'').index($(this));
              
              var item = that.curObj.sub[index];

                  that.choosed_arr.push(item.name); 
              var citem = item.name,
                  ca_index = that.choosed_arr.length-1;

              $(this).hasClass("choosed")
              ?that.cancel(ca_index)
              :$(this).addClass("choosed").data("ca_index",ca_index),that.choosed(citem,ca_index);
          })          
        }

        multiMenu.prototype.choosed = function (citem,ca_index) {
          var that = this,
              cli = $("<li class='choosed_li' data-cindex="+ca_index+">"+citem+"</li>");
              cli.appendTo(".choosedZone").on("click",function(){
                  that.cancel(this,ca_index);
              })
                    
        }

        multiMenu.prototype.cancel = function (ele,ca_index){
          $(".choosedZone li[data-cindex]").remove();
          $(".multiChooseZone li[data-cindex]")
                .removeClass("choosed")
                .removeAttr("data-cindex");
        }

        multiMenu.prototype.multiChoose = function (ele) {
          var that = this;
          var string = "<ul class='multi-choose-ul'>";
          
              var arr = that.arrToChoose;
            
              $.each(arr,function(i,e){
                  string +='<li class='+that.mcClass+'>'+e.name+'</li>'
              })
                  string +="</ul>";
                  $("<div class='multiChooseZone'></div>")
                          .append(string)
                          .appendTo(that.$element);

        }
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

function triggerMenu(trigger,json){
    $(document).on("click",trigger,function(){
            modalBox = $(this).parents("table").next(".modalBox01");
            /*console.log(modalBox)*/
            modalBox.modalBox();
            modalBox.off('shown.bs.modalBox').on('shown.bs.modalBox', function (e) {
                
                modalBox.find(".chooseZone").multiMenu({allData:json})
            })
    });    
}