/*! artDialog v6.0.5 | https://github.com/aui/artDialog */
!(function () {

var __modules__ = {};

function require (id) {
    var mod = __modules__[id];
    var exports = 'exports';

    if (typeof mod === 'object') {
        return mod;
    }

    if (!mod[exports]) {
        mod[exports] = {};
        mod[exports] = mod.call(mod[exports], require, mod[exports], mod) || mod[exports];
    }

    return mod[exports];
}

function define (path, fn) {
    __modules__[path] = fn;
}



define("jquery", function () {
	return jQuery;
});


/*!
 * PopupJS
 * Date: 2014-11-09
 * https://github.com/aui/popupjs
 * (c) 2009-2014 TangBin, http://www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://www.gnu.org/licenses/lgpl-2.1.html
 */

define("popup", function (require) {

var $ = require("jquery");

var _count = 0;
var _isIE6 = !('minWidth' in $('html')[0].style);
var _isFixed = !_isIE6;


function Popup () {

    this.destroyed = false;


    this.__popup = $('<div />')
    /*浣跨敤 <dialog /> 鍏冪礌鍙兘瀵艰嚧 z-index 姘歌繙缃《鐨勯棶棰�(chrome)*/
    .css({
        display: 'none',
        position: 'absolute',
        /*
        left: 0,
        top: 0,
        bottom: 'auto',
        right: 'auto',
        margin: 0,
        padding: 0,
        border: '0 none',
        background: 'transparent'
        */
        outline: 0
    })
    .attr('tabindex', '-1')
    .html(this.innerHTML)
    .appendTo('body');


    this.__backdrop = this.__mask = $('<div />')
    .css({
        opacity: .7,
        background: '#000'
    });


    // 浣跨敤 HTMLElement 浣滀负澶栭儴鎺ュ彛浣跨敤锛岃€屼笉鏄� jquery 瀵硅薄
    // 缁熶竴鐨勬帴鍙ｅ埄浜庢湭鏉� Popup 绉绘鍒板叾浠� DOM 搴撲腑
    this.node = this.__popup[0];
    this.backdrop = this.__backdrop[0];

    _count ++;
}


$.extend(Popup.prototype, {
    
    /**
     * 鍒濆鍖栧畬姣曚簨浠讹紝鍦� show()銆乻howModal() 鎵ц
     * @name Popup.prototype.onshow
     * @event
     */

    /**
     * 鍏抽棴浜嬩欢锛屽湪 close() 鎵ц
     * @name Popup.prototype.onclose
     * @event
     */

    /**
     * 閿€姣佸墠浜嬩欢锛屽湪 remove() 鍓嶆墽琛�
     * @name Popup.prototype.onbeforeremove
     * @event
     */

    /**
     * 閿€姣佷簨浠讹紝鍦� remove() 鎵ц
     * @name Popup.prototype.onremove
     * @event
     */

    /**
     * 閲嶇疆浜嬩欢锛屽湪 reset() 鎵ц
     * @name Popup.prototype.onreset
     * @event
     */

    /**
     * 鐒︾偣浜嬩欢锛屽湪 foucs() 鎵ц
     * @name Popup.prototype.onfocus
     * @event
     */

    /**
     * 澶辩劍浜嬩欢锛屽湪 blur() 鎵ц
     * @name Popup.prototype.onblur
     * @event
     */

    /** 娴眰 DOM 绱犺妭鐐筟*] */
    node: null,

    /** 閬僵 DOM 鑺傜偣[*] */
    backdrop: null,

    /** 鏄惁寮€鍚浐瀹氬畾浣峓*] */
    fixed: false,

    /** 鍒ゆ柇瀵硅瘽妗嗘槸鍚﹀垹闄*] */
    destroyed: true,

    /** 鍒ゆ柇瀵硅瘽妗嗘槸鍚︽樉绀� */
    open: false,

    /** close 杩斿洖鍊� */
    returnValue: '',

    /** 鏄惁鑷姩鑱氱劍 */
    autofocus: true,

    /** 瀵归綈鏂瑰紡[*] */
    align: 'bottom left',

    /** 鍐呴儴鐨� HTML 瀛楃涓� */
    innerHTML: '',

    /** CSS 绫诲悕 */
    className: 'ui-popup',

    /**
     * 鏄剧ず娴眰
     * @param   {HTMLElement, Event}  鎸囧畾浣嶇疆锛堝彲閫夛級
     */
    show: function (anchor) {

        if (this.destroyed) {
            return this;
        }

        var that = this;
        var popup = this.__popup;
        var backdrop = this.__backdrop;

        this.__activeElement = this.__getActive();

        this.open = true;
        this.follow = anchor || this.follow;


        // 鍒濆鍖� show 鏂规硶
        if (!this.__ready) {

            popup
            .addClass(this.className)
            .attr('role', this.modal ? 'alertdialog' : 'dialog')
            .css('position', this.fixed ? 'fixed' : 'absolute');

            if (!_isIE6) {
                $(window).on('resize', $.proxy(this.reset, this));
            }

            // 妯℃€佹诞灞傜殑閬僵
            if (this.modal) {
                var backdropCss = {
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    userSelect: 'none',
                    zIndex: this.zIndex || Popup.zIndex
                };


                popup.addClass(this.className + '-modal');


                if (!_isFixed) {
                    $.extend(backdropCss, {
                        position: 'absolute',
                        width: $(window).width() + 'px',
                        height: $(document).height() + 'px'
                    });
                }


                backdrop
                .css(backdropCss)
                .attr({tabindex: '0'})
                .on('focus', $.proxy(this.focus, this));

                // 閿佸畾 tab 鐨勭劍鐐规搷浣�
                this.__mask = backdrop
                .clone(true)
                .attr('style', '')
                .insertAfter(popup);

                backdrop
                .addClass(this.className + '-backdrop')
                .insertBefore(popup);

                this.__ready = true;
            }


            if (!popup.html()) {
                popup.html(this.innerHTML);
            }
        }


        popup
        .addClass(this.className + '-show')
        .show();

        backdrop.show();


        this.reset().focus();
        this.__dispatchEvent('show');

        return this;
    },


    /** 鏄剧ず妯℃€佹诞灞傘€傚弬鏁板弬瑙� show() */
    showModal: function () {
        this.modal = true;
        return this.show.apply(this, arguments);
    },
    
    
    /** 鍏抽棴娴眰 */
    close: function (result) {
        
        if (!this.destroyed && this.open) {
            
            if (result !== undefined) {
                this.returnValue = result;
            }
            
            this.__popup.hide().removeClass(this.className + '-show');
            this.__backdrop.hide();
            this.open = false;
            this.blur();// 鎭㈠鐒︾偣锛岀収椤鹃敭鐩樻搷浣滅殑鐢ㄦ埛
            this.__dispatchEvent('close');
        }
    
        return this;
    },


    /** 閿€姣佹诞灞� */
    remove: function () {

        if (this.destroyed) {
            return this;
        }

        this.__dispatchEvent('beforeremove');
        
        if (Popup.current === this) {
            Popup.current = null;
        }


        // 浠� DOM 涓Щ闄よ妭鐐�
        this.__popup.remove();
        this.__backdrop.remove();
        this.__mask.remove();


        if (!_isIE6) {
            $(window).off('resize', this.reset);
        }


        this.__dispatchEvent('remove');

        for (var i in this) {
            delete this[i];
        }

        return this;
    },


    /** 閲嶇疆浣嶇疆 */
    reset: function () {

        var elem = this.follow;

        if (elem) {
            this.__follow(elem);
        } else {
            this.__center();
        }

        this.__dispatchEvent('reset');

        return this;
    },


    /** 璁╂诞灞傝幏鍙栫劍鐐� */
    focus: function () {

        var node = this.node;
        var popup = this.__popup;
        var current = Popup.current;
        var index = this.zIndex = Popup.zIndex ++;

        if (current && current !== this) {
            current.blur(false);
        }

        // 妫€鏌ョ劍鐐规槸鍚﹀湪娴眰閲岄潰
        if (!$.contains(node, this.__getActive())) {
            var autofocus = popup.find('[autofocus]')[0];

            if (!this._autofocus && autofocus) {
                this._autofocus = true;
            } else {
                autofocus = node;
            }

            this.__focus(autofocus);
        }

        // 璁剧疆鍙犲姞楂樺害
        popup.css('zIndex', index);
        //this.__backdrop.css('zIndex', index);

        Popup.current = this;
        popup.addClass(this.className + '-focus');

        this.__dispatchEvent('focus');

        return this;
    },


    /** 璁╂诞灞傚け鍘荤劍鐐广€傚皢鐒︾偣閫€杩樼粰涔嬪墠鐨勫厓绱狅紝鐓ч【瑙嗗姏闅滅鐢ㄦ埛 */
    blur: function () {

        var activeElement = this.__activeElement;
        var isBlur = arguments[0];


        if (isBlur !== false) {
            this.__focus(activeElement);
        }

        this._autofocus = false;
        this.__popup.removeClass(this.className + '-focus');
        this.__dispatchEvent('blur');

        return this;
    },


    /**
     * 娣诲姞浜嬩欢
     * @param   {String}    浜嬩欢绫诲瀷
     * @param   {Function}  鐩戝惉鍑芥暟
     */
    addEventListener: function (type, callback) {
        this.__getEventListener(type).push(callback);
        return this;
    },


    /**
     * 鍒犻櫎浜嬩欢
     * @param   {String}    浜嬩欢绫诲瀷
     * @param   {Function}  鐩戝惉鍑芥暟
     */
    removeEventListener: function (type, callback) {
        var listeners = this.__getEventListener(type);
        for (var i = 0; i < listeners.length; i ++) {
            if (callback === listeners[i]) {
                listeners.splice(i--, 1);
            }
        }
        return this;
    },


    // 鑾峰彇浜嬩欢缂撳瓨
    __getEventListener: function (type) {
        var listener = this.__listener;
        if (!listener) {
            listener = this.__listener = {};
        }
        if (!listener[type]) {
            listener[type] = [];
        }
        return listener[type];
    },


    // 娲惧彂浜嬩欢
    __dispatchEvent: function (type) {
        var listeners = this.__getEventListener(type);

        if (this['on' + type]) {
            this['on' + type]();
        }

        for (var i = 0; i < listeners.length; i ++) {
            listeners[i].call(this);
        }
    },


    // 瀵瑰厓绱犲畨鍏ㄨ仛鐒�
    __focus: function (elem) {
        // 闃叉 iframe 璺ㄥ煙鏃犳潈闄愭姤閿�
        // 闃叉 IE 涓嶅彲瑙佸厓绱犳姤閿�
        try {
            // ie11 bug: iframe 椤甸潰鐐瑰嚮浼氳烦鍒伴《閮�
            if (this.autofocus && !/^iframe$/i.test(elem.nodeName)) {
                elem.focus();
            }
        } catch (e) {}
    },


    // 鑾峰彇褰撳墠鐒︾偣鐨勫厓绱 
    __getActive: function () {
        try {// try: ie8~9, iframe #26
            var activeElement = document.activeElement;
            var contentDocument = activeElement.contentDocument;
            var elem = contentDocument && contentDocument.activeElement || activeElement;
            return elem;
        } catch (e) {}
    },


    // 灞呬腑娴眰
    __center: function () {
    
        var popup = this.__popup;
        var $window = $(window);
        var $document = $(document);
        var fixed = this.fixed;
        var dl = fixed ? 0 : $document.scrollLeft();
        var dt = fixed ? 0 : $document.scrollTop();
        var ww = $window.width();
        var wh = $window.height();
        var ow = popup.width();
        var oh = popup.height();
        var left = (ww - ow) / 2 + dl;
        var top = (wh - oh) * 382 / 1000 + dt;// 榛勯噾姣斾緥
        var style = popup[0].style;

        
        style.left = Math.max(parseInt(left), dl) + 'px';
        style.top = Math.max(parseInt(top), dt) + 'px';
    },
    
    
    // 鎸囧畾浣嶇疆 @param    {HTMLElement, Event}  anchor
    __follow: function (anchor) {
        
        var $elem = anchor.parentNode && $(anchor);
        var popup = this.__popup;
        

        if (this.__followSkin) {
            popup.removeClass(this.__followSkin);
        }


        // 闅愯棌鍏冪礌涓嶅彲鐢�
        if ($elem) {
            var o = $elem.offset();
            if (o.left * o.top < 0) {
                return this.__center();
            }
        }
        
        var that = this;
        var fixed = this.fixed;

        var $window = $(window);
        var $document = $(document);
        var winWidth = $window.width();
        var winHeight = $window.height();
        var docLeft =  $document.scrollLeft();
        var docTop = $document.scrollTop();


        var popupWidth = popup.width();
        var popupHeight = popup.height();
        var width = $elem ? $elem.outerWidth() : 0;
        var height = $elem ? $elem.outerHeight() : 0;
        var offset = this.__offset(anchor);
        var x = offset.left;
        var y = offset.top;
        var left =  fixed ? x - docLeft : x;
        var top = fixed ? y - docTop : y;


        var minLeft = fixed ? 0 : docLeft;
        var minTop = fixed ? 0 : docTop;
        var maxLeft = minLeft + winWidth - popupWidth;
        var maxTop = minTop + winHeight - popupHeight;


        var css = {};
        var align = this.align.split(' ');
        var className = this.className + '-';
        var reverse = {top: 'bottom', bottom: 'top', left: 'right', right: 'left'};
        var name = {top: 'top', bottom: 'top', left: 'left', right: 'left'};


        var temp = [{
            top: top - popupHeight,
            bottom: top + height,
            left: left - popupWidth,
            right: left + width
        }, {
            top: top,
            bottom: top - popupHeight + height,
            left: left,
            right: left - popupWidth + width
        }];


        var center = {
            left: left + width / 2 - popupWidth / 2,
            top: top + height / 2 - popupHeight / 2
        };

        
        var range = {
            left: [minLeft, maxLeft],
            top: [minTop, maxTop]
        };


        // 瓒呭嚭鍙鍖哄煙閲嶆柊閫傚簲浣嶇疆
        $.each(align, function (i, val) {

            // 瓒呭嚭鍙虫垨涓嬭竟鐣岋細浣跨敤宸︽垨鑰呬笂杈瑰榻�
            if (temp[i][val] > range[name[val]][1]) {
                val = align[i] = reverse[val];
            }

            // 瓒呭嚭宸︽垨鍙宠竟鐣岋細浣跨敤鍙虫垨鑰呬笅杈瑰榻�
            if (temp[i][val] < range[name[val]][0]) {
                align[i] = reverse[val];
            }

        });


        // 涓€涓弬鏁扮殑鎯呭喌
        if (!align[1]) {
            name[align[1]] = name[align[0]] === 'left' ? 'top' : 'left';
            temp[1][align[1]] = center[name[align[1]]];
        }


        //娣诲姞follow鐨刢ss, 涓轰簡缁檆ss浣跨敤
        className += align.join('-') + ' '+ this.className+ '-follow';
        
        that.__followSkin = className;


        if ($elem) {
            popup.addClass(className);
        }

        
        css[name[align[0]]] = parseInt(temp[0][align[0]]);
        css[name[align[1]]] = parseInt(temp[1][align[1]]);
        popup.css(css);

    },


    // 鑾峰彇鍏冪礌鐩稿浜庨〉闈㈢殑浣嶇疆锛堝寘鎷琲frame鍐呯殑鍏冪礌锛�
    // 鏆傛椂涓嶆敮鎸佷袱灞備互涓婄殑 iframe 濂楀祵
    __offset: function (anchor) {

        var isNode = anchor.parentNode;
        var offset = isNode ? $(anchor).offset() : {
            left: anchor.pageX,
            top: anchor.pageY
        };


        anchor = isNode ? anchor : anchor.target;
        var ownerDocument = anchor.ownerDocument;
        var defaultView = ownerDocument.defaultView || ownerDocument.parentWindow;
        
        if (defaultView == window) {// IE <= 8 鍙兘浣跨敤涓や釜绛変簬鍙�
            return offset;
        }

        // {Element: Ifarme}
        var frameElement = defaultView.frameElement;
        var $ownerDocument = $(ownerDocument);
        var docLeft =  $ownerDocument.scrollLeft();
        var docTop = $ownerDocument.scrollTop();
        var frameOffset = $(frameElement).offset();
        var frameLeft = frameOffset.left;
        var frameTop = frameOffset.top;
        
        return {
            left: offset.left + frameLeft - docLeft,
            top: offset.top + frameTop - docTop
        };
    }
    
});


/** 褰撳墠鍙犲姞楂樺害 */
Popup.zIndex = 1024;


/** 椤跺眰娴眰鐨勫疄渚� */
Popup.current = null;


return Popup;

});

// artDialog - 榛樿閰嶇疆
define("dialog-config", {

    /* -----宸叉敞閲婄殑閰嶇疆缁ф壙鑷� popup.js锛屼粛鍙互鍐嶈繖閲岄噸鏂板畾涔夊畠----- */

    // 瀵归綈鏂瑰紡
    //align: 'bottom left',
    
    // 鏄惁鍥哄畾瀹氫綅
    //fixed: false,
    
    // 瀵硅瘽妗嗗彔鍔犻珮搴﹀€�(閲嶈锛氭鍊间笉鑳借秴杩囨祻瑙堝櫒鏈€澶ч檺鍒�)
    //zIndex: 1024,

    // 璁剧疆閬僵鑳屾櫙棰滆壊
    backdropBackground: '#000',

    // 璁剧疆閬僵閫忔槑搴�
    backdropOpacity: 0.7,

    // 娑堟伅鍐呭
    content: '<span class="ui-dialog-loading">Loading..</span>',
    
    // 鏍囬
    title: '',

    // 瀵硅瘽妗嗙姸鎬佹爮鍖哄煙 HTML 浠ｇ爜
    statusbar: '',
    
    // 鑷畾涔夋寜閽�
    button: null,
    
    // 纭畾鎸夐挳鍥炶皟鍑芥暟
    ok: null,
    
    // 鍙栨秷鎸夐挳鍥炶皟鍑芥暟
    cancel: null,

    // 纭畾鎸夐挳鏂囨湰
    okValue: 'ok',
    
    // 鍙栨秷鎸夐挳鏂囨湰
    cancelValue: 'cancel',

    cancelDisplay: true,
    
    // 鍐呭瀹藉害
    width: '',
    
    // 鍐呭楂樺害
    height: '',
    
    // 鍐呭涓庤竟鐣屽～鍏呰窛绂�
    padding: '',
    
    // 瀵硅瘽妗嗚嚜瀹氫箟 className
    skin: '',

    // 鏄惁鏀寔蹇嵎鍏抽棴锛堢偣鍑婚伄缃╁眰鑷姩鍏抽棴锛�
    quickClose: false,

    // css 鏂囦欢璺緞锛岀暀绌哄垯涓嶄細浣跨敤 js 鑷姩鍔犺浇鏍峰紡
    // 娉ㄦ剰锛歝ss 鍙厑璁稿姞杞戒竴涓�
    cssUri: '../css/ui-dialog.css',

    // 妯℃澘锛堜娇鐢� table 瑙ｅ喅 IE7 瀹藉害鑷€傚簲鐨� BUG锛�
    // js 浣跨敤 i="***" 灞炴€ц瘑鍒粨鏋勶紝鍏朵綑鐨勫潎鍙嚜瀹氫箟
    innerHTML:
        '<div i="dialog" class="ui-dialog">'
        +       '<div class="ui-dialog-arrow-a"></div>'
        +       '<div class="ui-dialog-arrow-b"></div>'
        +       '<table class="ui-dialog-grid">'
        +           '<tr>'
        +               '<td i="header" class="ui-dialog-header">'
        +                   '<button i="close" class="ui-dialog-close">&#215;</button>'
        +                   '<div i="title" class="ui-dialog-title"></div>'
        +               '</td>'
        +           '</tr>'
        +           '<tr>'
        +               '<td i="body" class="ui-dialog-body">'
        +                   '<div i="content" class="ui-dialog-content"></div>'
        +               '</td>'
        +           '</tr>'
        +           '<tr>'
        +               '<td i="footer" class="ui-dialog-footer">'
        +                   '<div i="statusbar" class="ui-dialog-statusbar"></div>'
        +                   '<div i="button" class="ui-dialog-button"></div>'
        +               '</td>'
        +           '</tr>'
        +       '</table>'
        +'</div>'
    
});

/*!
 * artDialog
 * Date: 2014-11-09
 * https://github.com/aui/artDialog
 * (c) 2009-2014 TangBin, http://www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://www.gnu.org/licenses/lgpl-2.1.html
 */
define("dialog", function (require) {

var $ = require("jquery");
var Popup = require("popup");
var defaults = require("dialog-config");
var css = defaults.cssUri;


// css loader: RequireJS & SeaJS
if (css) {
    var fn = require[require.toUrl ? 'toUrl' : 'resolve'];
    if (fn) {
        css = fn(css);
        css = '<link rel="stylesheet" href="' + css + '" />';
        if ($('base')[0]) {
            $('base').before(css);
        } else {
            $('head').append(css);
        } 
    }
}


var _count = 0;
var _expando = new Date() - 0; // Date.now()
var _isIE6 = !('minWidth' in $('html')[0].style);
var _isMobile = 'createTouch' in document && !('onmousemove' in document)
    || /(iPhone|iPad|iPod)/i.test(navigator.userAgent);
var _isFixed = !_isIE6 && !_isMobile;


var artDialog = function (options, ok, cancel) {

    var originalOptions = options = options || {};
    

    if (typeof options === 'string' || options.nodeType === 1) {
    
        options = {content: options, fixed: !_isMobile};
    }
    

    options = $.extend(true, {}, artDialog.defaults, options);
    options.original = originalOptions;

    var id = options.id = options.id || _expando + _count;
    var api = artDialog.get(id);
    
    
    // 濡傛灉瀛樺湪鍚屽悕鐨勫璇濇瀵硅薄锛屽垯鐩存帴杩斿洖
    if (api) {
        return api.focus();
    }
    
    
    // 鐩墠涓绘祦绉诲姩璁惧瀵筬ixed鏀寔涓嶅ソ锛岀鐢ㄦ鐗规€�
    if (!_isFixed) {
        options.fixed = false;
    }


    // 蹇嵎鍏抽棴鏀寔锛氱偣鍑诲璇濇澶栧揩閫熷叧闂璇濇
    if (options.quickClose) {
        options.modal = true;
        options.backdropOpacity = 0;
    }
    

    // 鎸夐挳缁�
    if (!$.isArray(options.button)) {
        options.button = [];
    }


    // 鍙栨秷鎸夐挳
    if (cancel !== undefined) {
        options.cancel = cancel;
    }
    
    if (options.cancel) {
        options.button.push({
            id: 'cancel',
            value: options.cancelValue,
            callback: options.cancel,
            display: options.cancelDisplay
        });
    }
    
    
    // 纭畾鎸夐挳
    if (ok !== undefined) {
        options.ok = ok;
    }
    
    if (options.ok) {
        options.button.push({
            id: 'ok',
            value: options.okValue,
            callback: options.ok,
            autofocus: true
        });
    }
    

    return artDialog.list[id] = new artDialog.create(options);
};

var popup = function () {};
popup.prototype = Popup.prototype;
var prototype = artDialog.prototype = new popup();

artDialog.create = function (options) {
    var that = this;

    $.extend(this, new Popup());

    var originalOptions = options.original;
    var $popup = $(this.node).html(options.innerHTML);
    var $backdrop = $(this.backdrop);

    this.options = options;
    this._popup = $popup;

    
    $.each(options, function (name, value) {
        if (typeof that[name] === 'function') {
            that[name](value);
        } else {
            that[name] = value;
        }
    });


    // 鏇存柊 zIndex 鍏ㄥ眬閰嶇疆
    if (options.zIndex) {
        Popup.zIndex = options.zIndex;
    }


    // 璁剧疆 ARIA 淇℃伅
    $popup.attr({
        'aria-labelledby': this._$('title')
            .attr('id', 'title:' + this.id).attr('id'),
        'aria-describedby': this._$('content')
            .attr('id', 'content:' + this.id).attr('id')
    });


    // 鍏抽棴鎸夐挳
    this._$('close')
    .css('display', this.cancel === false ? 'none' : '')
    .attr('title', this.cancelValue)
    .on('click', function (event) {
        that._trigger('cancel');
        event.preventDefault();
    });
    

    // 娣诲姞瑙嗚鍙傛暟
    this._$('dialog').addClass(this.skin);
    this._$('body').css('padding', this.padding);


    // 鐐瑰嚮浠绘剰绌虹櫧澶勫叧闂璇濇
    if (options.quickClose) {
        $backdrop
        .on(
            'onmousedown' in document ? 'mousedown' : 'click',
            function () {
            that._trigger('cancel');
            return false;// 闃绘鎶㈠ず鐒︾偣
        });
    }


    // 閬僵璁剧疆
    this.addEventListener('show', function () {
        $backdrop.css({
            opacity: 0,
            background: options.backdropBackground
        }).animate(
            {opacity: options.backdropOpacity}
        , 150);
    });


    // ESC 蹇嵎閿叧闂璇濇
    this._esc = function (event) {
        var target = event.target;
        var nodeName = target.nodeName;
        var rinput = /^input|textarea$/i;
        var isTop = Popup.current === that;
        var keyCode = event.keyCode;

        // 閬垮厤杈撳叆鐘舵€佷腑 ESC 璇搷浣滃叧闂�
        if (!isTop || rinput.test(nodeName) && target.type !== 'button') {
            return;
        }
        
        if (keyCode === 27) {
            that._trigger('cancel');
        }
    };

    $(document).on('keydown', this._esc);
    this.addEventListener('remove', function () {
        $(document).off('keydown', this._esc);
        delete artDialog.list[this.id];
    });


    _count ++;
    
    artDialog.oncreate(this);

    return this;
};


artDialog.create.prototype = prototype;



$.extend(prototype, {

    /**
     * 鏄剧ず瀵硅瘽妗�
     * @name artDialog.prototype.show
     * @param   {HTMLElement Object, Event Object}  鎸囧畾浣嶇疆锛堝彲閫夛級
     */
    
    /**
     * 鏄剧ず瀵硅瘽妗嗭紙妯℃€侊級
     * @name artDialog.prototype.showModal
     * @param   {HTMLElement Object, Event Object}  鎸囧畾浣嶇疆锛堝彲閫夛級
     */

    /**
     * 鍏抽棴瀵硅瘽妗�
     * @name artDialog.prototype.close
     * @param   {String, Number}    杩斿洖鍊硷紝鍙 onclose 浜嬩欢鏀跺彇锛堝彲閫夛級
     */

    /**
     * 閿€姣佸璇濇
     * @name artDialog.prototype.remove
     */

    /**
     * 閲嶇疆瀵硅瘽妗嗕綅缃�
     * @name artDialog.prototype.reset
     */

    /**
     * 璁╁璇濇鑱氱劍锛堝悓鏃剁疆椤讹級
     * @name artDialog.prototype.focus
     */

    /**
     * 璁╁璇濇澶辩劍锛堝悓鏃剁疆椤讹級
     * @name artDialog.prototype.blur
     */

    /**
     * 娣诲姞浜嬩欢
     * @param   {String}    浜嬩欢绫诲瀷
     * @param   {Function}  鐩戝惉鍑芥暟
     * @name artDialog.prototype.addEventListener
     */

    /**
     * 鍒犻櫎浜嬩欢
     * @param   {String}    浜嬩欢绫诲瀷
     * @param   {Function}  鐩戝惉鍑芥暟
     * @name artDialog.prototype.removeEventListener
     */

    /**
     * 瀵硅瘽妗嗘樉绀轰簨浠讹紝鍦� show()銆乻howModal() 鎵ц
     * @name artDialog.prototype.onshow
     * @event
     */

    /**
     * 鍏抽棴浜嬩欢锛屽湪 close() 鎵ц
     * @name artDialog.prototype.onclose
     * @event
     */

    /**
     * 閿€姣佸墠浜嬩欢锛屽湪 remove() 鍓嶆墽琛�
     * @name artDialog.prototype.onbeforeremove
     * @event
     */

    /**
     * 閿€姣佷簨浠讹紝鍦� remove() 鎵ц
     * @name artDialog.prototype.onremove
     * @event
     */

    /**
     * 閲嶇疆浜嬩欢锛屽湪 reset() 鎵ц
     * @name artDialog.prototype.onreset
     * @event
     */

    /**
     * 鐒︾偣浜嬩欢锛屽湪 foucs() 鎵ц
     * @name artDialog.prototype.onfocus
     * @event
     */

    /**
     * 澶辩劍浜嬩欢锛屽湪 blur() 鎵ц
     * @name artDialog.prototype.onblur
     * @event
     */

    
    /**
     * 璁剧疆鍐呭
     * @param    {String, HTMLElement}   鍐呭
     */
    content: function (html) {
    
        var $content = this._$('content');

        // HTMLElement
        if (typeof html === 'object') {
            html = $(html);
            $content.empty('').append(html.show());
            this.addEventListener('beforeremove', function () {
                $('body').append(html.hide());
            });
        // String
        } else {
            $content.html(html);
        }
                
        return this.reset();
    },
    
    
    /**
     * 璁剧疆鏍囬
     * @param    {String}   鏍囬鍐呭
     */
    title: function (text) {
        this._$('title').text(text);
        this._$('header')[text ? 'show' : 'hide']();
        return this;
    },


    /** 璁剧疆瀹藉害 */
    width: function (value) {
        this._$('content').css('width', value);
        return this.reset();
    },


    /** 璁剧疆楂樺害 */
    height: function (value) {
        this._$('content').css('height', value);
        return this.reset();
    },


    /**
     * 璁剧疆鎸夐挳缁�
     * @param   {Array, String}
     * Options: value, callback, autofocus, disabled 
     */
    button: function (args) {
        args = args || [];
        var that = this;
        var html = '';
        var number = 0;
        this.callbacks = {};
        
           
        if (typeof args === 'string') {
            html = args;
            number ++;
        } else {
            $.each(args, function (i, val) {

                var id = val.id = val.id || val.value;
                var style = '';
                that.callbacks[id] = val.callback;


                if (val.display === false) {
                    style = ' style="display:none"';
                } else {
                    number ++;
                }

                html +=
                  '<button'
                + ' type="button"'
                + ' i-id="' + id + '"'
                + style
                + (val.disabled ? ' disabled' : '')
                + (val.autofocus ? ' autofocus class="ui-dialog-autofocus"' : '')
                + '>'
                +   val.value
                + '</button>';

                that._$('button')
                .on('click', '[i-id=' + id +']', function (event) {                
                    var $this = $(this);
                    if (!$this.attr('disabled')) {// IE BUG
                        that._trigger(id);
                    }
                
                    event.preventDefault();
                });

            });
        }

        this._$('button').html(html);
        this._$('footer')[number ? 'show' : 'hide']();

        return this;
    },


    statusbar: function (html) {
        this._$('statusbar')
        .html(html)[html ? 'show' : 'hide']();

        return this;
    },


    _$: function (i) {
        return this._popup.find('[i=' + i + ']');
    },
    
    
    // 瑙﹀彂鎸夐挳鍥炶皟鍑芥暟
    _trigger: function (id) {
        var fn = this.callbacks[id];
            
        return typeof fn !== 'function' || fn.call(this) !== false ?
            this.close().remove() : this;
    }
    
});



artDialog.oncreate = $.noop;



/** 鑾峰彇鏈€椤跺眰鐨勫璇濇API */
artDialog.getCurrent = function () {
    return Popup.current;
};



/**
 * 鏍规嵁 ID 鑾峰彇鏌愬璇濇 API
 * @param    {String}    瀵硅瘽妗� ID
 * @return   {Object}    瀵硅瘽妗� API (瀹炰緥)
 */
artDialog.get = function (id) {
    return id === undefined
    ? artDialog.list
    : artDialog.list[id];
};

artDialog.list = {};



/**
 * 榛樿閰嶇疆
 */
artDialog.defaults = defaults;



return artDialog;

});




/*!
 * drag.js
 * Date: 2013-12-06
 * https://github.com/aui/artDialog
 * (c) 2009-2014 TangBin, http://www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://www.gnu.org/licenses/lgpl-2.1.html
 */
define("drag", function (require) {

var $ = require("jquery");


var $window = $(window);
var $document = $(document);
var isTouch = 'createTouch' in document;
var html = document.documentElement;
var isIE6 = !('minWidth' in html.style);
var isLosecapture = !isIE6 && 'onlosecapture' in html;
var isSetCapture = 'setCapture' in html;


var types = {
    start: isTouch ? 'touchstart' : 'mousedown',
    over: isTouch ? 'touchmove' : 'mousemove',
    end: isTouch ? 'touchend' : 'mouseup'
};


var getEvent = isTouch ? function (event) {
    if (!event.touches) {
        event = event.originalEvent.touches.item(0);
    }
    return event;
} : function (event) {
    return event;
};


var DragEvent = function () {
    this.start = $.proxy(this.start, this);
    this.over = $.proxy(this.over, this);
    this.end = $.proxy(this.end, this);
    this.onstart = this.onover = this.onend = $.noop;
};

DragEvent.types = types;

DragEvent.prototype = {

    start: function (event) {
        event = this.startFix(event);

        $document
        .on(types.over, this.over)
        .on(types.end, this.end);
        
        this.onstart(event);
        return false;
    },

    over: function (event) {
        event = this.overFix(event);
        this.onover(event);
        return false;
    },

    end: function (event) {
        event = this.endFix(event);

        $document
        .off(types.over, this.over)
        .off(types.end, this.end);

        this.onend(event);
        return false;
    },

    startFix: function (event) {
        event = getEvent(event);

        this.target = $(event.target);
        this.selectstart = function () {
            return false;
        };

        $document
        .on('selectstart', this.selectstart)
        .on('dblclick', this.end);

        if (isLosecapture) {
            this.target.on('losecapture', this.end);
        } else {
            $window.on('blur', this.end);
        }

        if (isSetCapture) {
            this.target[0].setCapture();
        }

        return event;
    },

    overFix: function (event) {
        event = getEvent(event);
        return event;
    },

    endFix: function (event) {
        event = getEvent(event);

        $document
        .off('selectstart', this.selectstart)
        .off('dblclick', this.end);

        if (isLosecapture) {
            this.target.off('losecapture', this.end);
        } else {
            $window.off('blur', this.end);
        }

        if (isSetCapture) {
            this.target[0].releaseCapture();
        }

        return event;
    }
    
};


/**
 * 鍚姩鎷栨嫿
 * @param   {HTMLElement}   琚嫋鎷界殑鍏冪礌
 * @param   {Event} 瑙﹀彂鎷栨嫿鐨勪簨浠跺璞°€傚彲閫夛紝鑻ユ棤鍒欑洃鍚� elem 鐨勬寜涓嬩簨浠跺惎鍔�
 */
DragEvent.create = function (elem, event) {
    var $elem = $(elem);
    var dragEvent = new DragEvent();
    var startType = DragEvent.types.start;
    var noop = function () {};
    var className = elem.className
        .replace(/^\s|\s.*/g, '') + '-drag-start';

    var minX;
    var minY;
    var maxX;
    var maxY;

    var api = {
        onstart: noop,
        onover: noop,
        onend: noop,
        off: function () {
            $elem.off(startType, dragEvent.start);
        }
    };


    dragEvent.onstart = function (event) {
        var isFixed = $elem.css('position') === 'fixed';
        var dl = $document.scrollLeft();
        var dt = $document.scrollTop();
        var w = $elem.width();
        var h = $elem.height();

        minX = 0;
        minY = 0;
        maxX = isFixed ? $window.width() - w + minX : $document.width() - w;
        maxY = isFixed ? $window.height() - h + minY : $document.height() - h;

        var offset = $elem.offset();
        var left = this.startLeft = isFixed ? offset.left - dl : offset.left;
        var top = this.startTop = isFixed ? offset.top - dt  : offset.top;

        this.clientX = event.clientX;
        this.clientY = event.clientY;

        $elem.addClass(className);
        api.onstart.call(elem, event, left, top);
    };
    

    dragEvent.onover = function (event) {
        var left = event.clientX - this.clientX + this.startLeft;
        var top = event.clientY - this.clientY + this.startTop;
        var style = $elem[0].style;

        left = Math.max(minX, Math.min(maxX, left));
        top = Math.max(minY, Math.min(maxY, top));

        style.left = left + 'px';
        style.top = top + 'px';
        
        api.onover.call(elem, event, left, top);
    };
    

    dragEvent.onend = function (event) {
        var position = $elem.position();
        var left = position.left;
        var top = position.top;
        $elem.removeClass(className);
        api.onend.call(elem, event, left, top);
    };


    dragEvent.off = function () {
        $elem.off(startType, dragEvent.start);
    };


    if (event) {
        dragEvent.start(event);
    } else {
        $elem.on(startType, dragEvent.start);
    }

    return api;
};

return DragEvent;

});

/*!
 * artDialog-plus
 * Date: 2013-11-09
 * https://github.com/aui/artDialog
 * (c) 2009-2014 TangBin, http://www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://www.gnu.org/licenses/lgpl-2.1.html
 */
define("dialog-plus", function (require) {

var $ = require("jquery");
var dialog = require("dialog");
var drag = require("drag");

dialog.oncreate = function (api) {

    var options = api.options;
    var originalOptions = options.original;

    // 椤甸潰鍦板潃
    var url = options.url;
    // 椤甸潰鍔犺浇瀹屾瘯鐨勪簨浠�
    var oniframeload = options.oniframeload;

    var $iframe;


    if (url) {
        this.padding = options.padding = 0;

        $iframe = $('<iframe />');

        $iframe.attr({
            src: url,
            name: api.id,
            width: '100%',
            height: '100%',
            allowtransparency: 'yes',
            frameborder: 'no',
            scrolling: 'no'
        })
        .on('load', function () {
            var test;
            
            try {
                // 璺ㄥ煙娴嬭瘯
                test = $iframe[0].contentWindow.frameElement;
            } catch (e) {}

            if (test) {

                if (!options.width) {
                    api.width($iframe.contents().width());
                }
                
                if (!options.height) {
                    api.height($iframe.contents().height());
                }
            }

            if (oniframeload) {
                oniframeload.call(api);
            }

        });

        api.addEventListener('beforeremove', function () {

            // 閲嶈锛侀渶瑕侀噸缃甶frame鍦板潃锛屽惁鍒欎笅娆″嚭鐜扮殑瀵硅瘽妗嗗湪IE6銆�7鏃犳硶鑱氱劍input
            // IE鍒犻櫎iframe鍚庯紝iframe浠嶇劧浼氱暀鍦ㄥ唴瀛樹腑鍑虹幇涓婅堪闂锛岀疆鎹rc鏄渶瀹规槗瑙ｅ喅鐨勬柟娉�
            $iframe.attr('src', 'about:blank').remove();


        }, false);

        api.content($iframe[0]);

        api.iframeNode = $iframe[0];

    }


    // 瀵逛簬瀛愰〉闈㈠懠鍑虹殑瀵硅瘽妗嗙壒娈婂鐞�
    // 濡傛灉瀵硅瘽妗嗛厤缃潵鑷� iframe
    if (!(originalOptions instanceof Object)) {

        var un = function () {
            api.close().remove();
        };

        // 鎵惧埌閭ｄ釜 iframe
        for (var i = 0; i < frames.length; i ++) {
            try {
                if (originalOptions instanceof frames[i].Object) {
                    // 璁� iframe 鍒锋柊鐨勬椂鍊欎篃鍏抽棴瀵硅瘽妗嗭紝
                    // 闃叉瑕佹墽琛岀殑瀵硅薄琚己鍒舵敹鍥炲鑷� IE 鎶ラ敊锛氣€滀笉鑳芥墽琛屽凡閲婃斁 Script 鐨勪唬鐮佲€�
                    $(frames[i]).one('unload', un);
                    break;
                }
            } catch (e) {} 
        }
    }


    // 鎷栨嫿鏀寔
    $(api.node).on(drag.types.start, '[i=title]', function (event) {
        // 鎺掗櫎姘旀场绫诲瀷鐨勫璇濇
        if (!api.follow) {
            api.focus();
            drag.create(api.node, event);
        }
    });

};



dialog.get = function (id) {

    // 浠� iframe 浼犲叆 window 瀵硅薄
    if (id && id.frameElement) {
        var iframe = id.frameElement;
        var list = dialog.list;
        var api;
        for (var i in list) {
            api = list[i];
            if (api.node.getElementsByTagName('iframe')[0] === iframe) {
                return api;
            }
        }
    // 鐩存帴浼犲叆 id 鐨勬儏鍐�
    } else if (id) {
        return dialog.list[id];
    }

};



return dialog;

});


window.dialog = require("dialog-plus");

})();