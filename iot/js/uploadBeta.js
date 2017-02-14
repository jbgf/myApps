
+function ($) {
  'use strict';

  // uploadBeta CLASS DEFINITION
  // ==========================

  function uploadBeta(element, options) {
    this.$form          = $(element)
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, uploadBeta.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav dt > a'
    this.offsets        = []
    this.targets        = []
    this.topArray = [];
    this.activeTarget   = null
    this.scrollHeight   = 0
    this.lastIndex = 0;
    this.arrowTop();

    this.$scrollElement.on('scroll.bs.uploadBeta', $.proxy(this.process, this))
    
    this.refresh()
    this.process()
    
  }

  uploadBeta.VERSION  = '3.3.6'

  uploadBeta.DEFAULTS = {
    offset: 10
  }
  uploadBeta.prototype.uploadBtn = function () {
   
        var myNav = $(this.options.target);

        var myNavHeight = myNav.height();
        var navdtHeight = $(this.selector).height();
        
        for(var i= 0 ;i<myNav.find("a").length;i++){
            this.topArray.push(i*navdtHeight);
        }
      
    
  }
  uploadBeta.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  uploadBeta.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    /*offssetBase提前或延后的active的距离。通过修改that.offsets实现。*/
    var offsetBase    = -130     

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })

  }

  uploadBeta.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      
      
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1]) 
        && this.activate(targets[i],i) 

    }
  }
  
  uploadBeta.prototype.activate = function (target,index) {
    
  
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'
     
    var active = $(selector)
      .parents('dt')
      .addClass('active');
      console.log($(this.targets[index]).text())
    $(selector).text($(this.targets[index]).text())
    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('dl.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.uploadBeta')
  }

  uploadBeta.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active').end()
      .each(function(index, el) {
          $(el).text(index+1+'F')
      });
  }


  // uploadBeta PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.uploadBeta')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.uploadBeta', (data = new uploadBeta(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.uploadBeta

  $.fn.uploadBeta             = Plugin
  $.fn.uploadBeta.Constructor = uploadBeta


  // uploadBeta NO CONFLICT
  // =====================

  $.fn.uploadBeta.noConflict = function () {
    $.fn.uploadBeta = old
    return this
  }


  // uploadBeta DATA-API
  // ==================

  $(window).on('load.bs.uploadBeta.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

