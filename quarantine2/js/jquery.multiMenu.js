+function ($) {
        'use strict';

        function multiMenu(element, options) {
          this.$body          = $(document.body)
          this.$element = $(element)
          this.wrapper = this.$element.parents(".modalBox")
          this.options  = $.extend({}, multiMenu.DEFAULTS, options)
          this.allData = this.deepCopy(this.options.allData);//使用深拷贝否则数据被修改，用于下一个实例
         
          this.stack = [];
          this.storaged_stack = [];
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
              that.sure();
        }  

        multiMenu.prototype.deepCopy= function(source) { 
          var that = this;
          var result={};
          for (var key in source) {
                result[key] = typeof source[key]==='object'? that.deepCopy(source[key]): source[key];
             } 
             return result; 
        }

        multiMenu.prototype.choose = function () {
          var that = this;
          var index_li,index_ul;  
          var num;
          /*不可以使用
          $(document).on("click.multiMenu",'.'+that.mainClass+'')
          导致多个实例绑定事件的触发
          */    
              $(that.wrapper).on("click.multiMenu",'.'+that.mainClass+'',function(){
                  
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
             
              popNum > 0 && that.stack.splice(-popNum,popNum);
             
              that.curObj = that.stack[that.stack.length - 1][index];
              that.arrToChoose = that.curObj.sub;
              that.stack.push(that.arrToChoose);

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
          $(that.wrapper).on("click",'.'+that.mcClass+'',function(){
              if(!that.isFinalLevel()){
                return;
              }
              var index = $(this).parents("ul").find('.'+that.mcClass+'').index($(this));
              var item = that.curObj.sub[index];
              $(this).hasClass("choosed")
              ?that.cancel(item,$(this).attr("data-cindex"))
              :(that.add(index,this))
          })          
        }
        
        multiMenu.prototype.add = function (index,ele) {
          var that = this,
              item = that.curObj.sub[index];
              that.choosed_arr.push(item);
          var ca_index = that.choosed_arr.length-1,

              cli = $("<li class='choosed_li' data-cindex="+ca_index+">"+item.name+"</li>");
              item["choosed"] = true;
              item["cindex"] = ca_index;
              
              cli.appendTo(that.$choosedZoneUl).on("click",function(){
                  that.cancel(item,ca_index);
              });
              $(ele).addClass('choosed').attr('data-cindex',ca_index);
        }

        multiMenu.prototype.sure = function (){
            var that = this;
            var success = that.options.success;
            $(that.wrapper).on("click",".sampleBtn",function(){
              if(that.choosed_arr.length>0){
                if(success && typeof(success) == "function" ){

                    $.proxy(success,that.$element[0])(that.choosed_arr,that)
                }else{
                   
                }
                
              }
              $(that.wrapper).find(".close").trigger("click");
            })
        }

        multiMenu.prototype.cancel = function (item,dindex){
          var that = this;
          that.choosed_arr[dindex] = null;
          item["choosed"] = false;

          $(".choosedZone li[data-cindex="+dindex+"]",that.wrapper).remove();
          $(".multiChooseZone li[data-cindex="+dindex+"]",that.wrapper)
                .removeClass("choosed")
                .removeAttr("data-cindex");
        }

        multiMenu.prototype.multiChoose = function (ele) {
          var that = this;
      /*多选待选区*/
          var string = "<ul class='multi-choose-ul'>";
          
              var arr = that.arrToChoose;
              
              $.each(arr,function(i,e){
                var cla = that.mcClass;
                var ca_index;
                if(e.choosed){
                    ca_index = e["cindex"];
                    cla+=" choosed";
                  
                }else{
                    ca_index = false;
                }
                  string +='<li class="'+cla+'" data-cindex='+ca_index+'>'+e.name+'</li>'
              })
                  string +="</ul>";
                  $("<div class='multiChooseZone'></div>")
                          .append(string)
                          .appendTo(that.$element);
                  if($(that.$element).parents(".modalBox").find(".choosedZone").find("ul").length==0)
      /*多选结果区*/
                  $(that.wrapper).find(".choosedZone").append("<ul></ul>");                          
                  that.$choosedZoneUl = that.wrapper.find(".choosedZone ul");
                  
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
        /*获取data-xx属性,作为option*/
        /*$(window).on('load.bs.multiMenu.data-api', function () {
          $('[data-hover="_window"]').each(function () {
            var $w = $(this)
            Plugin.call($w, $w.data())   
          })
        })*/

}(jQuery);



