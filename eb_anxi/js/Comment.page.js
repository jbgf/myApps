/*================================================================
Created:2013-10-28
Author：KESION.Inc
Copyright:www.Kesion.com  bbs.kesion.com
Version:KesionICMS V3.0
Service QQ：4000080263
==================================================================*/
//评论支持
function Support(id,typeid,channelid,installdir){
	$.ajax({
	   type: "POST",
	   url: installdir+'plus/Comment.aspx',
	   data: 'action=Support&channelid='+channelid+'&Type='+typeid+'&id=' +id,
	   success: function(s){
		  if (s=='good'||s=='bad'){
				if (s=='good'){
				 $("#d"+id).html(parseInt($("#d"+id).html())+1);	
				 KesionJS.Message('success.gif','成功赞了一下!');
				}
				else{
				 $("#c"+id).html(parseInt($("#c"+id).html())+1);
				 KesionJS.Message('success.gif','成功踩了一下!');
				 }
			
		   }else{
			   KesionJS.Message('error.gif',s);
		   } }
	});
 }
 //评论举报
 function CmtReport(id){
	 $.ajax({
	   type: "get",
	   url: appurl +"plus/comment.aspx",
	   data: "channelid=1&id="+id+"&action=Reports",
	   success: function(s){
		  if (s=='success'){
			  KesionJS.Message("success.gif","已收录您的举报！");
		  }
	   }
	});
		   
		   
 }
 
 //当前页,频道ID,栏目ID，信息ID,Action,InstallDir
function Page(curPage,channelid,infoid,action,installdir){
   this._channelid = channelid;
   this._infoid    = infoid;
   this._action    = action;
   this._url       = installdir +"plus/comment.aspx";
   
   this._c_obj="c_"+infoid;
   this._p_obj="p_"+infoid;
   this._installdir=installdir;
   this._page=curPage;
   loadDate(1,0);
   }
function loadDate(p,showmypost)
{  
   this._page=p;
   $.ajax({
	   type: "POST",
	   url: _url,
	   data: "showmypost="+showmypost+"&from3g="+from3g+"&channelid="+_channelid+"&id="+_infoid+"&action=" +_action+"&page="+p,
	   success: function(s){
		   if (s.indexOf("{ks:page}")==-1){ //发表，插到最前面
		        if (s!=''){
				  $("#cmtnum").html(parseInt($("#cmtnum").html())+1);
				  $(".cmtnum").html($("#cmtnum").html());
					if ($("#cmttbody")[0]==undefined){
						top.location.reload();
						// $("#"+_c_obj).html("<table class='cmt' width='98%' border='0' align='center' cellpadding='0' cellspacing='1'><tbody id='cmttbody'>"+s+"</tbody></table>");
					 }else{
						 $("#cmttbody").prepend(s);
					 }
				}
			 }else{
				  var pagearr=s.split("{ks:page}")
				  var pageparamarr=pagearr[1].split("|");
				  count=pageparamarr[0];    
				  perpagenum=pageparamarr[1];
				  pagecount=pageparamarr[2];
				  itemunit=pageparamarr[3];   
				  itemname=pageparamarr[4];
				  pagestyle=pageparamarr[5];
				  
				  if (p==1){
				  
				  }else{
					  $("#cmttbody").append(pagearr[0]);
				  }
				  pagelist();
		 }
		   
	   }
	});
   
   
  
}

function pagelist(){
	 if (this.pagecount<=1) return;
	 if (this.pagecount==this._page){
	 statushtml="<div class=\"cmtloadtips\">已全部加载完</div>"
	 }else{
	 statushtml="<div class=\"cmtloadtips\" id=\"loadbartips\" onclick=\"nextPage()\">加载更多内容</div>"
	 }
	 
	 if (this.pagecount!=""&&this.count!=0)
	 {
	 $("#"+this._p_obj).html(statushtml);
	 }
}

function nextPage(){
   if(this._page<this.pagecount){
	  $("#loadbartips").html("正在努力加载中...");
      loadDate(this._page+1,0);
   }else{
     KesionJS.Alert("已经到最后一页了");
   }
}
