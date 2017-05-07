+function ($) {
        'use strict';

        function multiMenu(element, options) {
          this.$body = $(document.body)
          this.$element = $(element)
          this.options  = $.extend({}, multiMenu.DEFAULTS, options)
          this.$wrapper = this.$element.parents(".modalBox")
          this.outer = this.$element.parents(this.options.outer);
          this.allData = this.deepCopy(this.options.allData);//使用深拷贝否则数据被修改，用于下一个实例
          this.targetInput = this.outer.find(this.options.targetInput);

          this.enableAddToOuter = this.options.enableAddToOuter;

          this.historyIndexChain = window['historyIndexChain'] ? window['historyIndexChain'] : window['historyIndexChain'] = []; 
          this.historyStack = window['historyStack'] ? window['historyStack'] : window['historyStack'] = []; 
          this.history_allTemp_stack = [];
          this.historyTemp_stack = [];
          this.historyTrigger = "[data-history]";
          this.historyZone = this.outer.find(this.historyTrigger);

          this.stack = [];
          this.storaged_stack = [];
          this.curObj = this.allData;
          this.arrToChoose = this.curObj.sub;
          this.mainClass = this.options.class;
          this.mcClass = this.options.mcClass;
          this.activeClass = this.options.activeClass;
          
          this.ini(this.allData);
          
        }
 
        multiMenu.VERSION  = '1.0'

        multiMenu.DEFAULTS = {
          class:"multi-li",
          mcClass:"mc-li",
          activeClass:"active"
        }

        multiMenu.prototype.ini = function () {
          var that = this;
              that.createlevel();

              /*多选结果区*/
              var length = that.$wrapper.find(".choosedZone ul").length;

              if(length==0){
                  that.$wrapper.find(".choosedZone").append("<ul></ul>");                          
                  that.$choosedZoneUl = that.$wrapper.find(".choosedZone ul");  
              }

              that.operate_stack(0,"root");
              that.choose();
              that.chooseItem();
              that.sure();
              that.iniHistory();

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
              that.$wrapper.on("click.multiMenu","li"/*'.'+that.mainClass+''*/,function(){
                  
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
          that.$multiChooseZone = 
                  $("<div class='multiChooseZone'></div>")
                      .append(string)
                      .appendTo(that.$element);
      
          
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
        /*保存历史记录，通过每次点击的index来保存一条index chain用于定位*/     
              popNum > 0 && that.historyTemp_stack.splice(-popNum,popNum);
              if(!that.hasSub()){
                that.historyTemp_stack.splice(-1,1);
              } 
              that.historyTemp_stack.push(index);
              
        /*用栈来保存当前的位置*/      
              popNum > 0 && that.stack.splice(-popNum,popNum);
              that.curObj = that.stack[that.stack.length - 1][index];
              if(that.hasSub()){
                  that.arrToChoose = that.curObj.sub;
                  that.stack.push(that.arrToChoose);  
              }
              
           }else{
              that.stack.push(that.arrToChoose);
           }
        }        

        multiMenu.prototype.getPopNum = function(ul,index_ul){
          var that = this;
          var num = ( that.stack.length - 1 ) - index_ul;
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

              that.$wrapper.on("click",'.'+that.mcClass+'',function(){
                  

                  var index = $(this).parents("ul").find('.'+that.mcClass+'').index($(this));
                  var item = that.curObj;
                  $(this).hasClass("choosed")
                  ?that.cancel(item,$(this).attr("data-cindex"))
                  :that.add(item,index,this)
              })          
        }
        
        

        multiMenu.prototype.sure = function (){
            var that = this;
            var success = that.options.success;
                
                that.$wrapper.on("click",".sampleBtn",function(){
                  that.recordHistory();
                  if( that.choosed_arr.length>0 ){
                    if(success && typeof(success) == "function" ){
                        $.proxy(success,that.$element[0])(that.choosed_arr,that);
                        /*that.updateTargetInput(that.choosed_arr);*/
                    }else{}
                  }
                  
                  that.$wrapper.find(".close").trigger("click");
                })
                
        }

        multiMenu.prototype.recordHistory = function (){
            var that = this;
            /*var string =  that.historyTemp_stack.join(",");*/

            for (var i = 0; i < that.choosed_arr.length; i++) {
                if(that.choosed_arr[i]){  //可能是null
                  
                  var string = that.history_allTemp_stack[i].join(",");
                  
                  if(string.length>0 && that.historyIndexChain.indexOf(string) == -1){
                      
                      that.historyIndexChain.push(string);
                      that.historyStack.push(that.choosed_arr[i]); 
                      /*console.log(that.choosed_arr)*/
                  }
                }
            }

        }

        multiMenu.prototype.background = function(){
            var that = this;
                that.$bg = $(document.createElement('div'))
                              .css({
                                position:"fixed",
                                background:"rgba(0,0,0,0.5)",
                                left:0,
                                top:0,
                                right:0,
                                bottom:0,
                                display:"none",
                                cursor:"cell"
                              })
                              .appendTo(that.$body)
                              .on("click",function(e){
                                  if (e.target !== e.currentTarget) return
                                  
                                  that.$bg.hide();
                                  that.historyUl.hide();  
                              })
        }

        multiMenu.prototype.iniHistory = function (){
            var that = this;
                
            var ul = "<ul class='multiMenu_history' style=''></ul>";
                that.background();
            that.historyUl = $(ul).appendTo(that.historyZone.css("position","relative"));
            that.showHistory();
            that.chooseFromHistory();
        }

        multiMenu.prototype.updateMultiChooseZoneWhenAdd = function (ul_index){
            var that = this;

                if(that.stack.length <2)return;
                console.log(that.stack)
                that.operate_stack(0,ul_index);
            var item = that.curObj;
                
            var ca_index = that.choosed_arr.length;
                
                if(item['choosed']){
                   
                    that.$multiChooseZone.find("li").eq(ul_index).addClass('choosed').attr('data-cindex',ca_index);
                }
        }
        multiMenu.prototype.add = function (item,index,ele) {
          var that = this;
              that.choosed_arr.push(item);
          var ca_index = that.choosed_arr.length-1,

              cli = $("<li class='choosed_li' data-cindex="+ca_index+">"+item.name+"</li>");
              item["choosed"] = true;
              item["cindex"] = ca_index;
              item['ul-index'] = index;

              that.history_allTemp_stack.push(that.historyTemp_stack.slice(0));
              cli.appendTo(that.$choosedZoneUl).on("click",function(){
                  that.cancel(item,ca_index);
              });
              
              if(ele){
                  /*来自点击选取*/
                  $(ele).addClass('choosed').attr('data-cindex',ca_index);
              }

        }
        multiMenu.prototype.chooseFromHistory = function (){
            var that = this;
                that.historyUl = that.historyUl.on("click","li",function(){
                    var ul_index = $(this).attr("data-order"),item,
                        /*item = that.historyStack[ul_index],*/
                        indexarr = that.historyIndexChain[ul_index].split(","),
                        index = 0;
                        
                    var arr = that.stack[0];
                        
                        (function loop(){
                    /*通过index chain获取当前的item*/                            
                            
                            
                            
                            if(index < indexarr.length -1){
                              
                                arr = arr[indexarr[index]]['sub'];
                                index += 1;
                                
                                loop();
                            }else{
                                
                                item = arr[indexarr[index]];
                                
                                if(that.choosed_arr.indexOf(item) == -1){

                                    that.add(item,index-1);
                                    that.updateMultiChooseZoneWhenAdd(indexarr[index]);
                                    that.addToOuterResult(that.choosed_arr,item);  
                                };
                            }
                        })(); 

                                               
                })
        }        

        multiMenu.prototype.updateTargetInput = function (arr){
            var that = this,
                input = that.targetInput;

                updateInput(input,arr);
                
                function updateInput(targetInput,arr){
                    var string="";
                    for(var i = 0 ;i<arr.length;i++){
                      if(arr[i]){
                        string+=arr[i].id+',';
                      }
                    }
                    targetInput.val(string);
                }
        }
        

        multiMenu.prototype.addToOuterResult = function (arr,item){
            var that = this;
           
            if(that.enableAddToOuter != 1)return;
            var ul = $("<ul class='outermulti-ul'/>");
                for(var i = 0 ;i<arr.length;i++){
                    if(arr[i]){
                      var li =$('<li class="choosed_li" data-i='+i+'>'+arr[i].name+'</li>');
                      li.appendTo(ul).on("click",function(){
                          var index = $(this).attr("data-i"),
                              item = arr[index];
                          that.cancel(item,index);
                          /*success();*/
                          $(this).remove();
                      }) 
                    }    
                }
                that.targetInput.data("ca",arr)
                    .prev("ul").remove().end()
                    .before(ul);
        } 

        multiMenu.prototype.showHistory = function (){
            var that = this;
                         
                that.outer.on("click",that.historyTrigger,function(e){
                    var arr = that.historyStack,
                        ul = that.historyUl,
                        ul_length = ul.find("li").length;

                    if(arr && arr.length > 0 ){
                            
                      that.$bg.show();
                      that.historyUl.show();
                    }

                    if(arr.length > ul_length){
                      
                      var newarr = arr.slice(ul_length);
                      var lis = "";
                      for (var i = 0; i < newarr.length; i++) {
                          
                          var io = i + ul_length;
                              lis += "<li style='' data-order="+(io)+">"+newarr[i]["name"]+"</li>"; 
                      }
                      
                      ul.append(lis);
                    }
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



