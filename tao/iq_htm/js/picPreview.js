$(function(){
	var objUrl;
	$('.upload').on("click",function(){$("#file0").click()})
	
	$('.browse').on('click',function(){

		$(".modalBox-body").find("img").attr({'src':objUrl})
		$(".modalBox").modalBox({

		});
		
	});
	
	$("#file0").change(function(){
		objUrl = getObjectURL(this.files[0]);


		$(".form_w_12 input").val(this.files[0].name)
	
	})
}) ;
	//建立一個可存取到該file的url
	function getObjectURL(file) {
		var url = null ; 
		if (window.createObjectURL!=undefined) { // basic
			url = window.createObjectURL(file) ;
		} else if (window.URL!=undefined) { // mozilla(firefox)
			url = window.URL.createObjectURL(file) ;
		} else if (window.webkitURL!=undefined) { // webkit or chrome
			url = window.webkitURL.createObjectURL(file) ;
		}
		return url ;
	}
		