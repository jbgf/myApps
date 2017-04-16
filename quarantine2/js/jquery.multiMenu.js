+function ($) {
        'use strict';

        function multiMenu(element, options) {
          this.$body          = $(document.body)
          this.$element = $(element)
          this.options  = $.extend({}, multiMenu.DEFAULTS, options)
          this.allData = this.options.allData;
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
          $(document).on("click",'.'+that.mcClass+'',function(){
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

              cli.appendTo(".choosedZone ul").on("click",function(){
                  that.cancel(item,ca_index);
              });
              $(ele).addClass('choosed').attr('data-cindex',ca_index);
        }

        multiMenu.prototype.sure = function (){
            var that = this;
            var success = that.options.success;
            $(document).on("click",".sampleBtn",function(){
              if(that.choosed_arr.length>0){
                if(success && typeof(success) == "function" ){
                    
                    $.proxy(success,that.$element[0])(that.choosed_arr,that)
                }else{
                    /*var string="";
                    for(var i = 0 ;i<that.choosed_arr.length;i++){
                        if(that.choosed_arr[i])string+=that.choosed_arr[i]+',';
                    }
                    $(".choosedItem").data("ca",that.choosed_arr).val(string)
*/
                }
                
              }
              $(this).parents(".modalBox").find(".close").trigger("click");
            })
        }

        multiMenu.prototype.cancel = function (item,dindex){
          var that = this;
          that.choosed_arr[dindex] = null;
          item["choosed"] = false;
          $(".choosedZone li[data-cindex="+dindex+"]").remove();
          $(".multiChooseZone li[data-cindex="+dindex+"]")
                .removeClass("choosed")
                .removeAttr("data-cindex");
        }

        multiMenu.prototype.multiChoose = function (ele) {
          var that = this;
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
                  $(that.$element).parents(".modalBox").find(".choosedZone").append("<ul></ul>");                          

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
                
                modalBox.find(".chooseZone").multiMenu({
                  allData:json,
                  success:function(arr,menu){
                    undateInput(arr);
                    var ul = $("<ul class='multi-ul'/>");
                    for(var i = 0 ;i<arr.length;i++){
                        if(arr[i]){
                          var li =$('<li class="choosed_li" data-i='+i+'>'+arr[i].name+'</li>');
                          
                          
                          li.appendTo(ul).on("click",function(){
                              var index = $(this).attr("data-i"),
                                  item = arr[index];
                              menu.cancel(item,index);
                              undateInput(arr);
                              $(this).remove();
                          })
                        }
                    }
                  
                    $(".choosedItem").data("ca",arr)
                                     
                                     .prev("ul").remove().end()
                                     .before(ul);

                  }

                  
                })
                function undateInput(arr){
                  var string="";
                  for(var i = 0 ;i<arr.length;i++){
                    if(arr[i]){
                      string+=arr[i].name+',';
                    }
                  }
                  $(".choosedItem").val(string);
                }
            })
    });    
}