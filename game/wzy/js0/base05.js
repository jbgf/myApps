
	
	$.ajaxSettings.errorCall.push(function(callbackContext, status, error){
        if(/logAjaxErr_h\.jsp/.test(callbackContext.url) && /cmd=hdajaxErr/.test(callbackContext.url)){
            return;
        }
		var faiAjax = top._faiAjax || Fai.top._faiAjax || $;
		if( faiAjax ){
			faiAjax.ajax({
				type	: "post",
				url		: "//hd.faisco.cn/ajax/logAjaxErr_h.jsp?cmd=hdajaxErr&error="+error+"&status="+status+"&openId=o1ueSjorrC3xUjCq8E6tOqM6J1vM&aid=11957983&gameId=2",
				data	: 'msg=' + HdGame.encodeHtml('ajaxUrl='+HdGame.encodeUrl(callbackContext.url)+';refer='+HdGame.encodeUrl(top.location.href))
			});
		}
	});
	
