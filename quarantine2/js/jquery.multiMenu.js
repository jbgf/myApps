+function ($) {
        'use strict';

        function multiMenu(element, options) {
          this.$body = $(document.body)
          this.$element = $(element)
          this.options  = $.extend({}, multiMenu.DEFAULTS, options)
          this.$wrapper = this.$element.parents(".modalBox")
          this.$chooseZone = this.$wrapper.find(".chooseZone");
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
          this.choosed_arr = [];
          this.curObj = this.allData;
          this.arrToChoose = this.curObj.sub;
          this.tempResultStorage = [];
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
              that.$chooseZone.on("click.multiMenu","li"/*'.'+that.mainClass+''*/,function(){
                  
                  if(that.hasSub() && $(this).hasClass(that.activeClass)){return}
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
                      
                      /*如果不是最后一级*/
                      if(that.hasSub()){
                        /*如果不是倒二级*/
                         if(!that.isFinalLevel()){
                            that.createlevel();  
                         }else{
                        /*如果是倒二级，则创建多选待选区*/  
                            that.createMultiChoose(); 
                         }
                      }
                      /*如果是最后一级*/
                      if($(this).hasClass(that.mcClass)){
                          var index = $(this).parents("ul").find('.'+that.mcClass+'').index($(this));
                          var item = that.curObj;
                          var flag = $(this).hasClass("choosed");
                              
                              if(item['choosed']){
                                  if(flag){
                                      var dindex = $(this).attr("data-cindex");
                                        that.cancel(item,dindex);
                                  }  
                              }else{
                              /*如果还不是选中的进入临时程序*/
                                  that.tempResult(flag,item,this);        
                              }
                      } 
                      $(this).addClass(that.activeClass)
                             .siblings('.'+that.mainClass+'').removeClass(that.activeClass);   
                      
              })
        }

        multiMenu.prototype.cancel = function (item,dindex){
              var that = this;
                  item["choosed"] = false;
                  $(".choosedZone li[data-cindex="+dindex+"]",that.wrapper).remove();
                  $(".multiChooseZone li[data-cindex="+dindex+"]",that.wrapper)
                        .removeClass("choosed")
                        .removeAttr("data-cindex");
                  $(".outermulti-ul li[data-cindex="+dindex+"]",that.outer).remove();
                  
                  that.updateAfterCancel(dindex);
        }

        multiMenu.prototype.tempResult = function (flag,item,ele) {
            var that = this;
                flag?getRidOf():add();

        /*抽象函数 更新tempResultStorage*/
                    function getRidOf(){
                        var ta_index = $(ele).attr("data-taindex");
                        var $ele1 = $(ele).removeClass("choosed").removeAttr("data-taindex");
                        var $ele2 = that.$choosedZoneUl.find("li[data-taindex="+ta_index+"]").remove();
                            that.tempResultStorage.splice(ta_index,1);
                            item['tempChoosed'] = false;
                            item['tindex'] = false;
                    }
                    function add(){
                        var ta_index = that.tempResultStorage.length,
                            cli = $("<li class='choosed_li' data-taindex="+ta_index+">"+item.name+"</li>");
                        var $ele1 = $(ele).addClass("choosed").attr({"data-taindex":ta_index});
                        var $ele2 =
                             cli.appendTo(that.$choosedZoneUl).on("click",function(){
                                 var ta_index = $ele1.attr("data-taindex");
                                 $ele1.removeClass('choosed').removeAttr("data-taindex");
                                 $ele2.remove();
                                 /*去除临时选择集合中的某项*/    
                                 that.tempResultStorage.splice(ta_index,1);
                            });
                            item['tempChoosed'] = true;
                            item['tindex'] = ta_index;
                            /*临时选中的元素各项信息存储*/ 
                            that.tempResultStorage.push({
                                item:item,
                                element:{ele1:$ele1,ele2:$ele2},
                                historyTemp:that.historyTemp_stack.slice(0)
                            });
                    }
        }

        multiMenu.prototype.createMultiChoose = function () {
          var that = this;
      
          var string = "<ul class='multi-choose-ul'>";/*多选待选区*/
       
              var arr = that.arrToChoose;  /*当前待选的数组*/  
             
              $.each(arr,function(i,e){

                var cla = that.mcClass;
                var ca_index,ta_index;
                
                if(e.choosed){             /*如果item有记录是选中的*/
                    ca_index = e["cindex"];
                    cla+=" choosed";
                }else if(e.tempChoosed){   /*如果item有记录是临时选中的*/
                    ta_index = e['tindex'];
                    cla+=" choosed";
                }else{
                    ca_index = false;
                    ta_index = false;
                }
                  string +='<li class="'+cla+'" data-cindex='+ca_index+' data-taindex='+ta_index+' >'+e.name+'</li>'
              })
              string +="</ul>";
          
          that.$multiChooseZone = 
                  $("<div class='multiChooseZone'></div>")
                      .append(string)
                      .appendTo(that.$element)

        }

        multiMenu.prototype.add = function (item,ele,historyTemp) {
              var that = this;
              var ca_index = that.choosed_arr.length;
              var $ele1 = ele.ele1;
              var $ele2 = ele.ele2;
                  $ele1.attr({"data-cindex":ca_index}).removeAttr("data-taindex");
                  $ele2.attr({"data-cindex":ca_index}).removeAttr("data-taindex").on("click",function(){
                      that.cancel(item,ca_index);
                  });
                  item["choosed"] = true;
                  item["cindex"] = ca_index;

                  item["tempChoosed"] = false;
                  item["tindex"] = false;
                  
                  that.history_allTemp_stack.push(historyTemp);
                  that.choosed_arr.push(item);
                  
        } 
        
        multiMenu.prototype.updateAfterCancel = function (dindex){
              var that = this;
                  
                  $(".choosedZone li[data-cindex]",that.wrapper).each(function(i,e){
                        var index = $(this).attr("data-cindex");
                            if(index > dindex){
                                $(this).attr("data-cindex",index-1);
                            }
                  });
                  $(".multiChooseZone li[data-cindex]",that.wrapper).each(function(i,e){
                        var index = $(this).attr("data-cindex");
                            if(index > dindex){
                                $(this).attr("data-cindex",index-1);
                            }

                  });
                  $(".outermulti-ul li[data-cindex]",that.outer).each(function(i,e){
                        var index = $(this).attr("data-cindex");
                            if(index > dindex){
                                $(this).attr("data-cindex",index-1);
                            }
                  });
                  
                  that.choosed_arr.splice(dindex,1);
                  that.updateTargetInput(that.choosed_arr);


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
        }


        multiMenu.prototype.sure = function (){
            var that = this;
            var success = that.options.success;
                
                that.$wrapper.on("click",".sampleBtn",function(){
                  
                  $.each(that.tempResultStorage,function(i,e){
                      that.add.call(that,e.item,e.element,e.historyTemp);  
                  })
                  if(that.choosed_arr.length>0 ){
                    if(success && typeof(success) == "function" ){
                        $.proxy(success,that.$element[0])(that.choosed_arr,that);
                        /*that.updateTargetInput(that.choosed_arr);*/
                    }else{}
                  }


                  that.resetTempResult(0);
                  that.$wrapper.find(".close").trigger("click");
                  that.recordHistory();

                })
                
        }

         multiMenu.prototype.recordHistory = function (){
            var that = this;

            for (var i = 0; i < that.choosed_arr.length; i++) {
                if(that.choosed_arr[i]){  //可能是null
                  var string = that.history_allTemp_stack[i].join(",");
                  if(string.length>0 && that.historyIndexChain.indexOf(string) == -1){
                      that.historyIndexChain.push(string);
                      that.historyStack.push(that.choosed_arr[i]); 
                  }
                }
            }

        }

        multiMenu.prototype.resetTempResult = function (mode){
            var that = this;
            
            $.each(that.tempResultStorage,function(i,e){
                   var element = e.element;
                   var $ele1 = element.ele1;
                   var $ele2 = element.ele2;
                       $ele1.removeAttr("data-taindex"); 
                       if(mode==0){
                         $ele2.removeAttr("data-taindex")
                       };
                       if(mode==1){
                         $ele1.removeClass("choosed") 
                         $ele2.remove();
                       }
            })
            that.tempResultStorage.length = 0;
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

        multiMenu.prototype.updateMultiChooseZoneWhenAddFromHistory = function (ul_index){
            var that = this;

                if(that.stack.length <2)return;
              
                that.operate_stack(0,ul_index);
            var item = that.curObj;
                
            var ca_index = that.choosed_arr.length-1;
                
                if(item["choosed"]){
                   
                    that.$multiChooseZone.find("li").eq(ul_index).addClass('choosed').attr('data-cindex',ca_index);
                }
        }

        multiMenu.prototype.chooseFromHistory = function (){
            var that = this;
                that.historyUl = that.historyUl.on("click","li",function(){
                    var ul_index = $(this).attr("data-order"),item,
                        /*item = that.historyStack[ul_index],*/
                        indexarr = that.historyIndexChain[ul_index].split(",");
                    var arr = that.stack[0];
                        that.locateByIndexChain(indexarr,arr,function(index){
                            item = arr[indexarr[index]];
                            if(that.choosed_arr.indexOf(item) == -1){
                                that.addToMenuFromHistory(item,ul_index);
                                that.updateMultiChooseZoneWhenAddFromHistory(indexarr[index]);
                                that.addToOuterResult(that.choosed_arr);  
                                that.updateTargetInput(that.choosed_arr);  
                            };
                        })
                         
                })
        }        

        multiMenu.prototype.locateByIndexChain = function (indexarr,arr,callBack){
            var index = 0;
            (function loop(){
              /*通过index chain获取当前的item*/                            
                      if(index < indexarr.length -1){
                          arr = arr[indexarr[index]]['sub'];
                          index += 1;
                          loop();
                      }else{
                          callBack(index);
                          
                      }
           })(); 
        }


        multiMenu.prototype.addToMenuFromHistory = function (item,ul_index){
            var that = this;
            var arr = [];
            //操作choosed_arr
                that.choosed_arr.push(item);

                $.each(historyIndexChain[ul_index].split(","),function(i,e){
                      arr.push(parseInt(e));                
                })
                that.history_allTemp_stack.push(arr);
                
            var ca_index = that.choosed_arr.length-1,
                cli = $("<li class='choosed_li' data-cindex="+ca_index+">"+item.name+"</li>");

                cli.appendTo(that.$choosedZoneUl).on("click",function(){
                    var ca_index = $(this).attr("data-cindex");
                        that.cancel(item,ca_index);
                });
            //操作item
                item["choosed"] = true;
                item["cindex"] = ca_index;
               
                that.resetTempResult(1);

        }

        multiMenu.prototype.updateTargetInput = function (arr){
            var that = this,
                input = that.targetInput;

                updateInput(input,arr);
                
                function updateInput(targetInput,arr){
                    var string="";
                    for(var i = 0 ;i<arr.length;i++){
                      if(arr[i]){

                        string+=arr[i].id+'&'+arr[i].mod+',';
                      }
                    }
                    string = string.substring(0,string.length-1);
                    targetInput.val(string);
                }
        }
        
        multiMenu.prototype.addToOuterResult = function (choosed_arr){
            var that = this;
            var arr = choosed_arr;
            if(that.enableAddToOuter != 1)return;
            var ul = $("<ul class='outermulti-ul'/>");
                for(var i = 0 ;i<arr.length;i++){
                    if(arr[i]){
                      var li =$('<li class="choosed_li" data-cindex='+i+'>'+arr[i].name+'</li>');
                      li.appendTo(ul).on("click",function(){
                          var index = $(this).attr("data-cindex"),
                              item = arr[index];
                          
                          that.cancel(item,index);
                        
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

        

}(jQuery);



