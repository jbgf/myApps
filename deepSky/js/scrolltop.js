
    var isIE=!!window.ActiveXObject; 
    var isIE6=isIE&&!window.XMLHttpRequest; 
	 $.fn.scrollToTop = function (settings) {
        settings = $.extend({
            startLine: 100, //滚动条高度大于此值 则显示top按钮
            scrollTo: 0, //滚动到的位置
            fadeDuration: [100, 50], //top按钮显示呈现/隐藏速度
            scrollDuration: 300 //点击top按钮后 滚动条滚动速度
        }, settings);

        var that = this,

         _elePosition = {}; //for ie6
        function _init() {
            if (settings.startLine >= $(window).scrollTop()) {
                that.hide();
            } else {
                that.show();
            } 
            //ie6
            if (isIE6) {
                that.css({ 'position': 'absolute' });
                _elePosition.top = parseInt(that.css('top'), 10);
                _elePosition.bottom = parseInt(that.css('bottom'), 10)+100;
            }
        }
        function _setTopForIE6() {
            var curScrollTop = $(this).scrollTop(),
                winHeight = $(window).height(),
                top;

            if (_elePosition.top || _elePosition.top === 0) {
                var eleHeight = that.height();

                if (winHeight < _elePosition.top + eleHeight) {
                    top = curScrollTop + winHeight - eleHeight;
                } else {
                    top = curScrollTop + _elePosition.top;
                }
            } else if (_elePosition.bottom || _elePosition.bottom === 0) {
                if (winHeight < _elePosition.bottom) {
                    top = curScrollTop;
                } else {
                    top = curScrollTop + winHeight - _elePosition.bottom;
                }
            }

            that.css({ 'top': top });
        }

        //ie6
        $(window).unbind('resize.scrollTop').bind('resize.scrollTop',function(){
             return false
        });

        $(window).scroll(function(){
          that.sTimeout && clearTimeout(that.sTimeout);
          that.sTimeout=setTimeout(function () {
            var scrollTop = settings.startLine || 0,
             curScrollTop = $(window).scrollTop();
            //handle ie6 
            if (isIE6) {
                _setTopForIE6();
            }
            if (curScrollTop >= scrollTop) {
                that.show();
            } else { 
                that.hide();
            }
        },200);
       });
       that.click(function (e) {
            $('body,html').animate({'scrollTop':0},200);
            e.preventDefault;
            return false;
        });
        _init();
        return that;
    }