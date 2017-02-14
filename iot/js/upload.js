    $(function(){
        upload.uploadBtn();
        $(".solution_form").submit(function(){
            var status = upload.CheckExt(this);
            if(!status)return false;
        })
    })
    
    var upload = {
        uploadBtn:function(){
            $('#btnUploadPcb').on("click",function(){$("#file0").click()});
            $("#file0").change(function(){
                objUrl = getObjectURL(this.files[0]);
                $('.upload_zone').text(this.files[0].name);
            });

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
        },
        CheckExt:function(form){

            var isIE = /msie/i.test(navigator.userAgent) && !window.opera; 
            /*单位M*/
            var filemaxsize = 5;
            var fileSize = 0;
            var fileName = $("#btnUploadPcb").val();
            var fileEle = document.getElementById("file0");

            return fileEmpty() && fileS() && fileT();

            function clearFile(){
                fileEle.value =""; 
                $('.upload_zone').text("");
            }

            function fileEmpty(){
                var e = fileEle.value != "";
                if(!e){alert("文件未上传")}
                return e;
                    
            }

            function fileS(){
                
                if (isIE && !form.files){ 
                    
                    var fileSystem = new ActiveXObject("Scripting.FileSystemObject"); 
                    
                    var file = fileSystem.GetFile (fileName); 
                    fileSize = file.Size; 
                } else { 
                        fileSize = fileEle.files[0].size; 

                } 

                var size = fileSize / (1024*1024); 
                if(size>filemaxsize){ 
                    clearFile();
                    alert("文件最大限制为"+filemaxsize+"M！"); 
                    
                    return false; 
                }else{return true} 
            };
            
            function fileT(){
                var fileT = new Array("pdf","ppt","doc","jpg","jpeg","png");  //定义可支持的文件类型数组
                var fa = fileName.split(".");
                var fType = fa[fa.length-1];
                var typeFlag = false;
                
                for(var i=0;i<fileT.length;i++){
                　　if(fileT[i] == fType){
                        typeFlag = true;
                        break;                        
                　　}
                }
                if(!typeFlag){
                    clearFile();
                    alert("文件格式应为pdf，ppt，doc，jpg，jpeg，png!")
                }
                return typeFlag;
            }
            
        }
            
    };

    

    

    
                