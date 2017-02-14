$(function(){
	$('.btn_totop').scrollToTop();
	var checkData = {};
	

	function afterSelected(context, index, flag, oldIndex) {
		var con = context.content;
		var nav = context.nav;
		var $cla = context.selectClass;
		con.hide();
		con.eq(index).fadeIn(500);
		var oldIndex = $('.banner_btns a').attr('index');
		nav.removeClass($cla).eq(index).addClass($cla);
		context.index = index;
		
	};

	

	$('#content').scrollPagination({
		'contentPage': $(this).attr('index'), 
		'contentData': getData(getUrlParam('type')), 
		'contentLength': 5, 
		'scrollTarget': $(window), 
		'heightOffset': 10, 
		'beforeLoad': function() { 
			
			$('#loading').fadeIn();
		},
		'afterLoad': function(elementsLoaded) { // after loading content, you can use this function to animate your new elements
			var start = parseInt($('#content').attr('index'));
			var newsData = this.contentData;
			var dataLength = newsData.length;
			var next = start + 1;
			
			var startStep = start * this.contentLength;
			var nextStep = next * this.contentLength;
			nextStep = nextStep >= dataLength ? dataLength : nextStep;

			var appendData = newsData.slice(startStep, nextStep);

			$('#content').attr('index',next);
			var tpl = $('#news-template').html();
			var htmlStr = _.template(tpl)({data : appendData});
		    $('#content').append(htmlStr);
		    renderCheckData(checkData);
			if (nextStep >= dataLength) { 
				$('#nomoreresults').fadeIn();
				$('#content').stopScrollPagination();
			}
			$('#loading').fadeOut();
		}
	});
    
    
    
    

})

 function getUrlParam(key) {
 	var query = location.search;
 	var reg = "/^.*[\\?|\\&]" + key + "\\=([^\\&]*)/";
 	reg = eval(reg);
 	var ret = query.match(reg);
 	if (ret != null) {
 		return decodeURIComponent(ret[1]);
 	} else {
 		return "";
 	}
 };


/*获取对应类型的值*/
 function getData(type){
 	var typeData = [];
 	if(type){
 		for(var i = 0, length = news_data.length; i < length ; ++ i){
 			if(news_data[i]['type'].split('_')[0] == type){
 				typeData.push(news_data[i]);
 			}
 		}
 		return typeData;
 	}
 	return news_data;
 }

 /*
  * 渲染我的查看数量
  */
 function renderCheckData(data){
   for(var i in data){
   	 if($('#' + i).length > 0){
   	 	$('#' + i).find('[name="views-time"]').text(data[i].viewtimes);
   	 }
   }
 }
