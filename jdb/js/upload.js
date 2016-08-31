 
   
   
    $(document).ready(function() {
        //设置提示框位置
        $(".loading").css({ "top": $(document).height() / 2 - 20 + "px", "left": ($(document).width() - $(".loading").width()) / 2 + "px" });
       
    });

    function clear(){
        $('#file_upload').uploadifyClearQueue();
        $('#showfilename').val('');
    }

    function CheckExt(form){
        if(form.FileData.value==""){
            alert("请选择需要上载的文件！");
            form.FileData.focus();
            return false;    
        }
        var ext = form.FileData.value.substr(form.FileData.value.lastIndexOf(".")+1).toLowerCase();
        canupstr = "|" + canup + "|";
        if(canupstr.indexOf("|"+ext+"|")==-1){
            alert("上传文件格式出错，只能上传"+canup);
            return false;
        }    
        $("#shinfo").html("正在上传中....");
        return true; 
    }
    
    function GetFileSize(filesize)
    {
        filesize = filesize / 1024;
        if (filesize <1024)
        {
            return Math.ceil(filesize) + "K";
        }
        else
        {
            filesize = filesize / 1024;
            return Math.round(filesize, 2) + "M";
        }

    }
    
    
    