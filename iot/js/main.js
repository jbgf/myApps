/*加载公共部分*/
		function commonHead(callback){
		    $.ajax({
		        url:"common/common.html",
		        type:"GET",
		        success:function(data){

		            var htag = $(data).find("#headTag").html(),
		            	header = $(data).find("#header"),
		            	footer = $(data).find("#footer");
		            $("head").append(htag);
		            $('.headerDiv').append(header);
		            $('.footerDiv').append(footer);
		            setTimeout(callback,0);
		        }
		    });
		}
/*加载公共部分*/
$(function(){
	
	

	var c = function(){


		

		(function slider(){

			      	 jQuery(".slideBox01").slide({mainCell:".bd ul",autoPlay:true,effect:"leftLoop",easing:"swing",interTime:"3500"});
			      
		})();

		/* login row slide start */
		(function(){
	        
	                 jQuery(".picScroll04").slide({mainCell:".bd ul",autoPlay:true,effect:"leftLoop",easing:"swing",interTime:"3500"});  
	          
		})();
		/* login row slide end */
	};
	c();

	/*高度统一的问题*/
	var _config = [
		{selector:".iot_content_row",children:".bd img",class0:".height_d",class1:".height_f"},		
		{selector:"#leftSideBar_wrapper",children:"",class0:".leftSide",class1:".rightContent"},
		{selector:"#rightSideBar_wrapper",children:"",class0:".rightSide",class1:".leftContent"},	
		{selector:".product_article",children:"",class0:".article_zone",class1:".product_column"}	
	];
	function equalHeight(options){
		$(options).each(function(i,e){
			if($(e.selector).length == 0){return };
			$(e.selector).each(function(index,element){
				var height_d = $(this).find(e.class0),
					height_d_h = height_d.height();
				var height_f = $(this).find(e.class1),
					height_f_h = height_f.height();
				var b = Math.max(height_d_h,height_f_h);
					height_d.height(b);
					height_f.height(b);
				
				if(e.children !="")height_f.find(e.children).height(height_d_h);
			})
		})

			

	}
	setTimeout(function(){equalHeight(_config)},200);

})


function showMessage(msg){
	alert(msg)
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
            background:"#fff",
            "box-shadow":"0 0 10px gray",
            border: "1px solid #ddd",
            
            "z-index":"99"
        });

    this.getPosition(this.$element);
    
        
  }

  hover_window.prototype.getPosition = function (ele) {
    var _self = this;
    var fixleft,fixtop,posFixObj;
    
      ele.load(function(){
          $(this).addClass("loaded");
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

                /*pos.top  += _self.options.offset;
                if(ma.length > 1){
                    pos.top += ma[0];
                    pos.left += ma[3];
                }*/
            }
           
            _self._window.css({
                left: pos.left + fixleft,
                top:pos.top + fixtop
            })
      }

    
  }
  hover_window.prototype.reset = function(content){

    return content.css({"margin":"0px",width:"100%",height:"100%"})
    
  }

  hover_window.prototype.show = function () {
    
    this._window.show().addClass("on");
  }

  hover_window.prototype.hide = function () {
    this._window.hide().removeClass("on");
  }
  hover_window.prototype.caret = function(){
    var caret = '<div class="caret" style="position:absolute"></div>';
    
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

+function ($) {
  'use strict';

  // elli_text CLASS DEFINITION
  // ==========================

  function elli_text(element, options) {
   
    this.$element = $(element)
    this.options  = $.extend({}, elli_text.DEFAULTS, options)
   
    this._window = "";
    this._ellibtnText = "展示更多";
    this.text = $.trim(this.$element.text());
    this.sub = "";
    this.flag = 0;
    this._sub();  
   
  }

  elli_text.VERSION  = '1.0'

  elli_text.DEFAULTS = {
    length:30,
    _ellibtnText:"展示更多"
  }
  
  elli_text.prototype._ellibutton = function(){
    var that = this;
    var id = that.options.index;
    var _button = '<span class="elli_b blue" data-id='+id+' style="cursor:pointer ;position:absolute;box-sizing:border-box;">'/**/
                            +that._ellibtnText
                  +'</span>'; 
        that._bindClick(id);
    return _button;
  }

  elli_text.prototype._bindClick = function(id){
    var that = this;
    var callback = this.options.test_function;
    if(!that.options.ajax_a && typeof(callback) == "function" && callback()){
        _onclick();

    }

    if(that.options.ajax_a){
        var aobj = that.options.ajax_a,aobj_config,
            aobj_config = {dataType: "text",method: "POST"};
        var request = $.ajax(
            $.extend({}, aobj_config,{url:aobj.url,data:aobj.data} )
        );
        request.done(function(data){
            if(typeof( aobj.success ) == "function" ){
                if(aobj.success(data)){
                    _onclick();
                };
            }
        })
    }

    function _onclick(){
        var trigger = '[data-id='+id+']';
        $(document).on("click",trigger,function(){
               /* console.log(that.$element)*/
                if(that.flag ==1){
                  that.$element.html(that.text);
                  /*console.log(that.$element.data("id"))*/
                }     
        })
        
    }  

    
  }

  elli_text.prototype._sub = function(text){
    var that = this;
    var str = that.text,elliBtn;

    elliBtn = that._ellibutton();
    if(str.length>this.options.length){

      that.sub = str.substring(0,this.options.length) + "..." +elliBtn;
      
      that.flag = 1;
    } else {
      that.sub = str

    }
    
    this.$element.html(that.sub);

    
    

  }

  // elli_text PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function (i,e) {
      var $this   = $(this)
      var data    = $this.data('bs.elli_text')
      var options = typeof option == 'object' && $.extend(option,{index:i}) 

      if (!data) $this.data('bs.elli_text', (data = new elli_text(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.elli_text

  $.fn.elli_text             = Plugin
  $.fn.elli_text.Constructor = elli_text


  // elli_text NO CONFLICT
  // =====================

  $.fn.elli_text.noConflict = function (){
    $.fn.elli_text = old
    return this
  }

  // elli_text DATA-API
  // ==================

  $(window).on('load.bs.elli_text.data-api', function () {
    $('[data-hover="_window"]').each(function () {
      var $w = $(this)
      Plugin.call($w, $w.data())   /*获取data-xx属性,作为option*/
    })
  })

}(jQuery);