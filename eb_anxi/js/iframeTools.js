/*!
 * artDialog iframeTools
 * Date: 2011-11-25 13:54
 * http://code.google.com/p/artdialog/
 * (c) 2009-2011 TangBin, http://www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://creativecommons.org/licenses/LGPL/2.1/
 */
;(function ($, window, artDialog, undefined) {

var _topDialog, _proxyDialog, _zIndex,
	_data = '@ARTDIALOG.DATA',
	_open = '@ARTDIALOG.OPEN',
	_opener = '@ARTDIALOG.OPENER',
	_winName = window.name = window.name
	|| '@ARTDIALOG.WINNAME' + + new Date,
	_isIE6 = window.VBArray && !window.XMLHttpRequest;

$(function () {
	!window.jQuery && document.compatMode === 'BackCompat'
	// ²»Ö§³Ö¹ÖÒìÄ£Ê½£¬ÇëÓÃÖ÷Á÷µÄXHTML1.0»òÕßHTML5µÄDOCTYPEÉêÃ÷
	&& alert('artDialog Error: document.compatMode === "BackCompat"');
});
	
	
/** »ñÈ¡ artDialog ¿É¿ç¼¶µ÷ÓÃµÄ×î¸ß²ãµÄ window ¶ÔÏó */
var _top = artDialog.top = function () {
	var top = window,
	test = function (name) {
		try {
			var doc = window[name].document;	// ¿çÓò|ÎÞÈ¨ÏÞ
			doc.getElementsByTagName; 			// chrome ±¾µØ°²È«ÏÞÖÆ
		} catch (e) {
			return false;
		};
		
		return window[name].artDialog
		// ¿ò¼Ü¼¯ÎÞ·¨ÏÔÊ¾µÚÈý·½ÔªËØ
		&& doc.getElementsByTagName('frameset').length === 0;
	};
	
	if (test('top')) {
		top = window.top;
	} else if (test('parent')) {
		top = window.parent;
	};
	
	return top;
}();
artDialog.parent = _top; // ¼æÈÝv4.1Ö®Ç°°æ±¾£¬Î´À´°æ±¾½«É¾³ý´Ë


_topDialog = _top.artDialog;


// »ñÈ¡¶¥²ãÒ³Ãæ¶Ô»°¿òµþ¼ÓÖµ
_zIndex = function () {
	return _topDialog.defaults.zIndex;
};



/**
 * ¿ç¿ò¼ÜÊý¾Ý¹²Ïí½Ó¿Ú
 * @see		http://www.planeart.cn/?p=1554
 * @param	{String}	´æ´¢µÄÊý¾ÝÃû
 * @param	{Any}		½«Òª´æ´¢µÄÈÎÒâÊý¾Ý(ÎÞ´ËÏîÔò·µ»Ø±»²éÑ¯µÄÊý¾Ý)
 */
artDialog.data = function (name, value) {
	var top = artDialog.top,
		cache = top[_data] || {};
	top[_data] = cache;
	
	if (value !== undefined) {
		cache[name] = value;
	} else {
		return cache[name];
	};
	return cache;
};


/**
 * Êý¾Ý¹²ÏíÉ¾³ý½Ó¿Ú
 * @param	{String}	É¾³ýµÄÊý¾ÝÃû
 */
artDialog.removeData = function (name) {
	var cache = artDialog.top[_data];
	if (cache && cache[name]) delete cache[name];
};


/** ¿ç¿ò¼ÜÆÕÍ¨¶Ô»°¿ò */
artDialog.through = _proxyDialog = function () {
	var api = _topDialog.apply(this, arguments);
		
	// »º´æ´Óµ±Ç° window£¨¿ÉÄÜÎªiframe£©µ÷³öËùÓÐ¿ç¿ò¼Ü¶Ô»°¿ò£¬
	// ÒÔ±ãÈÃµ±Ç° window Ð¶ÔØÇ°È¥¹Ø±ÕÕâÐ©¶Ô»°¿ò¡£
	// ÒòÎªiframe×¢ÏúºóÒ²»á´ÓÄÚ´æÖÐÉ¾³ýÆä´´½¨µÄ¶ÔÏó£¬ÕâÑù¿ÉÒÔ·ÀÖ¹»Øµ÷º¯Êý±¨´í
	if (_top !== window) artDialog.list[api.config.id] = api;
	return api;
};

// ¿ò¼ÜÒ³ÃæÐ¶ÔØÇ°¹Ø±ÕËùÓÐ´©Ô½µÄ¶Ô»°¿ò
_top !== window && $(window).bind('unload', function () {
	var list = artDialog.list, config;
	for (var i in list) {
		if (list[i]) {
			config = list[i].config;
			if (config) config.duration = 0; // È¡Ïû¶¯»­
			list[i].close();
			//delete list[i];
		};
	};
});


/**
 * µ¯´° (iframe)
 * @param	{String}	µØÖ·
 * @param	{Object}	ÅäÖÃ²ÎÊý. ÕâÀï´«ÈëµÄ»Øµ÷º¯Êý½ÓÊÕµÄµÚ1¸ö²ÎÊýÎªiframeÄÚ²¿window¶ÔÏó
 * @param	{Boolean}	ÊÇ·ñÔÊÐí»º´æ. Ä¬ÈÏtrue
 */
artDialog.open = function (url, options, cache) {
	options = options || {};
	
	var api, DOM,
		$content, $main, iframe, $iframe, $idoc, iwin, ibody,
		top = artDialog.top,
		initCss = 'position:absolute;left:-9999em;top:-9999em;border:none 0;background:transparent',
		loadCss = 'width:100%;height:100%;border:none 0';
	if (cache === false) {
		var ts = + new Date,
			ret = url.replace(/([?&])_=[^&]*/, "$1_=" + ts );
		url = ret + ((ret === url) ? (/\?/.test(url) ? "&" : "?") + "_=" + ts : "");
	};
		
	var load = function () {
		var iWidth, iHeight,
			loading = DOM.content.find('.aui_loading'),
			aConfig = api.config;
		
		$content.addClass('aui_state_full');
		
		loading && loading.hide();
		
		try {
			iwin = iframe.contentWindow;
			$idoc = $(iwin.document);
			ibody = iwin.document.body;
		} catch (e) {// ¿çÓò
			iframe.style.cssText = loadCss;
			
			aConfig.follow
			? api.follow(aConfig.follow)
			: api.position(aConfig.left, aConfig.top);
			
			options.init && options.init.call(api, iwin, top);
			options.init = null;
			return;
		};
		
		// »ñÈ¡iframeÄÚ²¿³ß´ç
		iWidth = aConfig.width === 'auto'
		? $idoc.width() + (_isIE6 ? 0 : parseInt($(ibody).css('marginLeft')))
		: aConfig.width;
		
		iHeight = aConfig.height === 'auto'
		? $idoc.height()
		: aConfig.height;
		
		// ÊÊÓ¦iframe³ß´ç
		setTimeout(function () {
			iframe.style.cssText = loadCss;
		}, 0);// setTimeout: ·ÀÖ¹IE6~7¶Ô»°¿òÑùÊ½äÖÈ¾Òì³£
		api.size(iWidth, iHeight);
		
		// µ÷Õû¶Ô»°¿òÎ»ÖÃ
		aConfig.follow
		? api.follow(aConfig.follow)
		: api.position(aConfig.left, aConfig.top);
		
		options.init && options.init.call(api, iwin, top);
		options.init = null;
	};
		
	var config = {
		zIndex: _zIndex(),
		init: function () {
			api = this;
			DOM = api.DOM;
			$main = DOM.main;
			$content = DOM.content;
			
			iframe = api.iframe = top.document.createElement('iframe');
			iframe.src = url;
			iframe.name = 'Open' + api.config.id;
			iframe.style.cssText = initCss;
			iframe.setAttribute('frameborder', 0, 0);
			iframe.setAttribute('allowTransparency', true);
			
			$iframe = $(iframe);
			api.content().appendChild(iframe);
			iwin = iframe.contentWindow;
		//	$(".aui_outer").show();	 //Ôö¼Ó
			try {
				iwin.name = iframe.name;
				artDialog.data(iframe.name + _open, api);
				artDialog.data(iframe.name + _opener, window);
			} catch (e) {};
			
			$iframe.bind('load', load);
		},
		close: function () {
			$iframe.css('display', 'none').unbind('load', load);

			if (options.close && options.close.call(this, iframe.contentWindow, top) === false) {
				return false;
			};
			$content.removeClass('aui_state_full');
			
			// ÖØÒª£¡ÐèÒªÖØÖÃiframeµØÖ·£¬·ñÔòÏÂ´Î³öÏÖµÄ¶Ô»°¿òÔÚIE6¡¢7ÎÞ·¨¾Û½¹input
			// IEÉ¾³ýiframeºó£¬iframeÈÔÈ»»áÁôÔÚÄÚ´æÖÐ³öÏÖÉÏÊöÎÊÌâ£¬ÖÃ»»srcÊÇ×îÈÝÒ×½â¾öµÄ·½·¨
			$iframe[0].src = 'about:blank';
			$iframe.remove();
		//	$(".aui_outer").hide();//Ôö¼Ó
			try {
				artDialog.removeData(iframe.name + _open);
				artDialog.removeData(iframe.name + _opener);
			} catch (e) {};
		}
	};
	
	// »Øµ÷º¯ÊýµÚÒ»¸ö²ÎÊýÖ¸ÏòiframeÄÚ²¿window¶ÔÏó
	if (typeof options.ok === 'function') config.ok = function () {
		return options.ok.call(api, iframe.contentWindow, top);
	};
	if (typeof options.cancel === 'function') config.cancel = function () {
		return options.cancel.call(api, iframe.contentWindow, top);
	};
	
	delete options.content;

	for (var i in options) {
		if (config[i] === undefined) config[i] = options[i];
	};
	
	return _proxyDialog(config);
};


/** ÒýÓÃopen·½·¨À©Õ¹·½·¨(ÔÚopen´ò¿ªµÄiframeÄÚ²¿Ë½ÓÐ·½·¨) */
artDialog.open.api = artDialog.data(_winName + _open);


/** ÒýÓÃopen·½·¨´¥·¢À´Ô´Ò³Ãæwindow(ÔÚopen´ò¿ªµÄiframeÄÚ²¿Ë½ÓÐ·½·¨) */
artDialog.opener = artDialog.data(_winName + _opener) || window;
artDialog.open.origin = artDialog.opener; // ¼æÈÝv4.1Ö®Ç°°æ±¾£¬Î´À´°æ±¾½«É¾³ý´Ë

/** artDialog.open ´ò¿ªµÄiframeÒ³ÃæÀï¹Ø±Õ¶Ô»°¿ò¿ì½Ý·½·¨ */
artDialog.close = function () {
	var api = artDialog.data(_winName + _open);
	api && api.close();
	return false;
};

// µã»÷iframeÄÚÈÝÇÐ»»µþ¼Ó¸ß¶È
_top != window && $(document).bind('mousedown', function () {
	var api = artDialog.open.api;
	api && api.zIndex();
});


/**
 * AjaxÌî³äÄÚÈÝ
 * @param	{String}			µØÖ·
 * @param	{Object}			ÅäÖÃ²ÎÊý
 * @param	{Boolean}			ÊÇ·ñÔÊÐí»º´æ. Ä¬ÈÏtrue
 */
artDialog.load = function(url, options, cache){
	cache = cache || false;
	var opt = options || {};
		
	var config = {
		zIndex: _zIndex(),
		init: function(here){
			var api = this,
				aConfig = api.config;
			
			$.ajax({
				url: url,
				success: function (content) {
					api.content(content);
					opt.init && opt.init.call(api, here);		
				},
				cache: cache
			});
			
		}
	};
	
	delete options.content;
	
	for (var i in opt) {
		if (config[i] === undefined) config[i] = opt[i];
	};
	
	return _proxyDialog(config);
};


/**
 * ¾¯¸æ
 * @param	{String}	ÏûÏ¢ÄÚÈÝ
 */
artDialog.alert = function (content, callback) {
	return _proxyDialog({
		id: 'Alert',
		zIndex: _zIndex(),
		icon: 'warning',
		fixed: true,
		lock: true,
		content: content,
		ok: true,
		close: callback
	});
};


/**
 * È·ÈÏ
 * @param	{String}	ÏûÏ¢ÄÚÈÝ
 * @param	{Function}	È·¶¨°´Å¥»Øµ÷º¯Êý
 * @param	{Function}	È¡Ïû°´Å¥»Øµ÷º¯Êý
 */
artDialog.confirm = function (content, yes, no) {
	return _proxyDialog({
		id: 'Confirm',
		zIndex: _zIndex(),
		icon: 'question',
		fixed: true,
		lock: true,
		opacity: .7,
		content: content,
		ok: function (here) {
			return yes.call(this, here);
		},
		cancel: function (here) {
			return no && no.call(this, here);
		}
	});
};


/**
 * ÌáÎÊ
 * @param	{String}	ÌáÎÊÄÚÈÝ
 * @param	{Function}	»Øµ÷º¯Êý. ½ÓÊÕ²ÎÊý£ºÊäÈëÖµ
 * @param	{String}	Ä¬ÈÏÖµ
 */
artDialog.prompt = function (content, yes, value) {
	value = value || '';
	var input;
	
	return _proxyDialog({
		id: 'Prompt',
		zIndex: _zIndex(),
		icon: 'question',
		fixed: true,
		lock: true,
		opacity: .1,
		content: [
			'<div style="margin-bottom:5px;font-size:12px">',
				content,
			'</div>',
			'<div>',
				'<input value="',
					value,
				'" style="width:18em;padding:6px 4px" />',
			'</div>'
			].join(''),
		init: function () {
			input = this.DOM.content.find('input')[0];
			input.select();
			input.focus();
		},
		ok: function (here) {
			return yes && yes.call(this, input.value, here);
		},
		cancel: true
	});
};


/**
 * ¶ÌÔÝÌáÊ¾
 * @param	{String}	ÌáÊ¾ÄÚÈÝ
 * @param	{Number}	ÏÔÊ¾Ê±¼ä (Ä¬ÈÏ1.5Ãë)
 */
artDialog.tips = function (content, time) {
	return _proxyDialog({
		id: 'Tips',
		zIndex: _zIndex(),
		title: false,
		cancel: false,
		fixed: true,
		lock: false
	})
	.content('<div style="padding: 0 1em;">' + content + '</div>')
	.time(time || 1.5);
};
/**
 * ¶ÌÔÝÌáÊ¾,ÒÔÏÂÔö¼ÓµÄº¯Êý
 * @param	{String}	ÌáÊ¾ÄÚÈÝ
 * @param	{Number}	ÏÔÊ¾Ê±¼ä (Ä¬ÈÏ1.5Ãë)
 */
artDialog.tips = function (content, time,ico,callback) {
	return _proxyDialog({
		id: 'Tips',
		zIndex: _zIndex(),
		title: false,
		cancel: false,
		fixed: true,
		lock: false,
		close: callback
	})
	.content('<div style="padding: 0 1em;">' + content + '</div>')
	.time(time || 1.5);
};

// ÔöÇ¿artDialogÍÏ×§ÌåÑé
// - ·ÀÖ¹Êó±êÂäÈëiframeµ¼ÖÂ²»Á÷³©
// - ¶Ô³¬´ó¶Ô»°¿òÍÏ¶¯ÓÅ»¯
$(function () {
	var event = artDialog.dragEvent;
	if (!event) return;

	var $window = $(window),
		$document = $(document),
		positionType = _isIE6 ? 'absolute' : 'fixed',
		dragEvent = event.prototype,
		mask = document.createElement('div'),
		style = mask.style;
		
	style.cssText = 'display:none;position:' + positionType + ';left:0;top:0;width:100%;height:100%;'
	+ 'cursor:move;filter:alpha(opacity=0);opacity:0;background:#FFF';
		
	document.body.appendChild(mask);
	dragEvent._start = dragEvent.start;
	dragEvent._end = dragEvent.end;
	
	dragEvent.start = function () {
		var DOM = artDialog.focus.DOM,
			main = DOM.main[0],
			iframe = DOM.content[0].getElementsByTagName('iframe')[0];
		
		dragEvent._start.apply(this, arguments);
		style.display = 'block';
		style.zIndex = artDialog.defaults.zIndex + 3;
		
		if (positionType === 'absolute') {
			style.width = $window.width() + 'px';
			style.height = $window.height() + 'px';
			style.left = $document.scrollLeft() + 'px';
			style.top = $document.scrollTop() + 'px';
		};
		
		if (iframe && main.offsetWidth * main.offsetHeight > 307200) {
			main.style.visibility = 'hidden';
		};
	};
	
	dragEvent.end = function () {
		var dialog = artDialog.focus;
		dragEvent._end.apply(this, arguments);
		style.display = 'none';
		if (dialog) dialog.DOM.main[0].style.visibility = 'visible';
	};
});

})(this.art || this.jQuery, this, this.artDialog);

