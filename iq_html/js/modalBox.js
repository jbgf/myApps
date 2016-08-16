+function ($) {
  'use strict';

  // modalBox CLASS DEFINITION
  // ======================

  var modalBox = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modalBox-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modalBox-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modalBox')
        }, this))
    }
  }

  modalBox.VERSION  = '3.3.6'

  modalBox.TRANSITION_DURATION = 300
  modalBox.BACKDROP_TRANSITION_DURATION = 150

  modalBox.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  modalBox.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  modalBox.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modalBox', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modalBox-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modalBox', '[data-dismiss="modalBox"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modalBox', function () {
      that.$element.one('mouseup.dismiss.bs.modalBox', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modalBoxs dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modalBox', { relatedTarget: _relatedTarget })

      that.$element.children().eq(0).css("position", "absolute").css({
           "margin":"0px",
           "top": function () {
               return (that.$element.height() - that.$element.children().eq(0).height()-40) / 2 + "px";
           },
           "left": function () {
               return (that.$element.width() - that.$element.children().eq(0).width()) / 2 + "px";
           }
       });

      transition ?
        that.$dialog // wait for modalBox to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(modalBox.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  modalBox.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modalBox')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modalBox')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modalBox')
      .off('mouseup.dismiss.bs.modalBox')

    this.$dialog.off('mousedown.dismiss.bs.modalBox')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hidemodalBox, this))
        .emulateTransitionEnd(modalBox.TRANSITION_DURATION) :
      this.hidemodalBox()
  }

  modalBox.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modalBox') // guard against infinite focus loop
      .on('focusin.bs.modalBox', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  modalBox.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modalBox', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modalBox')
    }
  }

  modalBox.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modalBox', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modalBox')
    }
  }

  modalBox.prototype.hidemodalBox = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modalBox-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modalBox')
    })
  }

  modalBox.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  modalBox.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modalBox-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modalBox', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(modalBox.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(modalBox.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modalBoxs

  modalBox.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  modalBox.prototype.adjustDialog = function () {
    var modalBoxIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalBoxIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalBoxIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  modalBox.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  modalBox.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  modalBox.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  modalBox.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  modalBox.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modalBox-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // modalBox PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modalBox')
      var options = $.extend({}, modalBox.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modalBox', (data = new modalBox(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modalBox

  $.fn.modalBox             = Plugin
  $.fn.modalBox.Constructor = modalBox


  // modalBox NO CONFLICT
  // =================

  $.fn.modalBox.noConflict = function () {
    $.fn.modalBox = old
    return this
  }


  // modalBox DATA-API
  // ==============

  $(document).on('click.bs.modalBox.data-api', '[data-toggle="modalBox"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modalBox') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modalBox', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modalBox will actually get shown
      $target.one('hidden.bs.modalBox', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);