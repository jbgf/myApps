<?php include './common/head.html' ?>

<!-- validate start -->
        <script type="text/javascript" src="js/jquery.validate.js"></script>
<!-- webupload start -->
        <link rel="stylesheet" type="text/css" href="css/webuploader.css">
        <script type="text/javascript" src="js/webuploader.min.js"></script>
        
<!-- webupload end -->        
    
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
        <div class="p_banner middleTable" style="background:url(img/member_banner.png) center center">
            <div class="middleRow">
                <div class="banner_inner">
                        <div class="avatarWrapper white">
                            <div class="avatar01 mar-center">
                                <img class="full circle" src="img/avatar.png">
                            </div>
                            <p class="name align-center bigSize font-weight">丁文礼</p>
                            <p class="intro mar-center align-left">普通会员，痛客平台在与痛客进行充分沟通后， 根据痛客平台专业操作，对痛点进行分解和定义的文档。</p>
                        </div>
                </div>    
            </div>
        </div>
        <div class="member_url align-center">
            <div class="row mediumSize">
                <div class="row-block">
                    <div class="inner"><a class="t">完善资料</a></div>
                </div>
                <div class="row-block ">
                    <div class="inner"><a class="t">修改密码</a></div>
                </div>
                <div class="row-block on">
                    <div class="inner"><a class="t">用户认证</a></div>
                </div>
            </div>
        </div>
        <div class="middle_part ">
            <div class="contentWrapper">
               <div class="bg-cyan">
                   <div class="container1200">
                     <div class="p_container bg-white">
                         <div class="process_show mar-center">
                             <ul class="rows ">
                                 <li class="row-block-4">
                                    <div class="innerBlock i1 white align-center">认证资料填写</div>
                                 </li>
                                 <li class="row-block-4">
                                    <div class="innerBlock i2 align-center">
                                        认证审核
                                    </div>
                                 </li>
                                 <li class="row-block-4">
                                    <div class="innerBlock i3 align-center">
                                        审核结果
                                    </div>
                                 </li>
                             </ul>
                         </div>

                         <form class="solution_form mar-center clear" enctype="multipart/form-data">
                             <div class="form-row height-auto">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span class="red">*</span><span>真实姓名：</span>
                                 </div>
                                 <div class="un-block-2">
                                 <input class="baseInput" placeholder="" name="case" type="text" maxlength="12" required></input>
                                 <p class="gray">请填写与身份证上一致的名字</p>
                                 </div>
                                 <div class="tips un-block-3 smallSize gray"></div>
                             </div>
                            
                             <div class="form-row height-auto">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span class="red">*</span><span>身份证正面照：</span>
                                 </div>
                                 <div class="un-block-2 attached">
                                    <div class="img_attached"><img class="full" src="img/card0.png"></div>
                                    <button class="picker" >点击上传</button>


                                 </div>
                                 <div class="un-block-3 smallSize gray">
                                     <p >
                                     1.请上传身份证正面带有头像的扫描件或清晰照片</p>
                                     <p>2.照片要求格式为JPG/JPEG/GIF/PNG，大小不要超过5M</p>
                                     <p class="baseFontColor">注：您的证件信息我们将严格保密，请放心上传 </p>
                                 </div>

                             </div>
                             <div class="form-row height-auto">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span class="red">*</span><span>身份证背面照：</span>
                                 </div>
                                 <div class="un-block-2 attached">
                                    <div class="img_attached"><img class="full" src="img/card1.png"></div>
                                    <button class="picker" >点击上传</button>


                                 </div>
                                 <div class="un-block-3 smallSize gray">
                                     <p >
                                     1.请上传身份证背面的扫描件或清晰照片</p>
                                     <p>2.照片要求格式为JPG/JPEG/GIF/PNG，大小不要超过5M</p>
                                     <p class="baseFontColor">注：您的证件信息我们将严格保密，请放心上传 </p>
                                 </div>

                             </div>
                             <div class="form-row submit-row">
                                 <div class="un-block-1"></div>
                                 <div class="un-block-2 ">
                                    <input class="baseInput bg-orange white font-weight cursor" type="submit" value="提交认证"></input>
                                 </div>
                                 <div class="un-block-3 "></div>
                             </div>
                             <script type="text/javascript">
                                    
                                    var maxSingleSize = 5,
                                       /* maxNum = 2,*/
                                        uploadedNum = 0,
                                        minUploadNum = $(".picker").length;

                                    var uploader = WebUploader.create({
                                        /*auto: true,*/
                                        swf: 'common/Uploader.swf',
                                        server: 'php/fileupload.php',
                                        pick: '.picker',
                                        resize: false,
                                        accept: {
                                            extensions: 'jpg,jpeg,png,gif'
                                        },
                                       /* fileNumLimit:maxNum,*/
                                       /*print_r($_FILES);*/
                                        fileVal:'test',  
                                        fileSingleSizeLimit:maxSingleSize*1024*1024,
                                        duplicate:true
                                    });
                                    
                                    uploader.on("beforeFileQueued",function(file){
                                        
                                        
                                    })
                                    uploader.on('fileQueued', function( file ) {
                                        uploader.makeThumb( file, function( error, ret ){
                                            
                                            var ruid = file.source.ruid,
                                                upId = '#rt_'+ruid;
                                            var picker = $(upId).parents(".picker");
                                            var lastFileId = picker.data("fileId");
                                                if(lastFileId){
                                                    uploader.removeFile(lastFileId,true);
                                                }

                                                picker.data("fileId",file.id);
                                            var thumb = picker.prevAll(".img_attached").find("img");
                                            
                                                thumb.attr({
                                                    src: ret
                                                });  
                                        });
                                        uploadedNum += 1;
                                      
                                    });
                                    
                                    uploader.on("error",function (type){
                                        if (type=="Q_TYPE_DENIED"){
                                            showMessage("请上传jpg，jpeg，gif，png格式文件");
                                        }else if(type=="F_EXCEED_SIZE"){
                                            showMessage("文件大小不能超过"+maxSingleSize+"M");
                                        }else if(type=="Q_EXCEED_NUM_LIMIT"){
                                            showMessage("文件总数不能超过"+maxNum+"个");
                                        }

                                    });

                                    
                                    
                                    $(function(){
                                        var inputs = $(".solution_form input[type=text]");
                                        var flag = false,
                                            complete = false;

                                         $(".solution_form").validate({
                                             success:function(label,element){
                                                $(element).data("validate",true);
                                            }
                                         });
                                         $(".solution_form").submit(function(event) {

                                                if(!complete)event.preventDefault();
                                                if(uploadedNum < minUploadNum){
                                                    
                                                    showMessage("请上传文件！")
                                                    
                                                    return false;
                                                }else{
                                                   
                                                    if(!flag && (function(){
                                                        inputs.each(function(i,e){

                                                            if(!$(e).data("validate")){return false}
                                                        });
                                                        
                                                        return flag = true;
                                                    })()){uploader.upload();}
                                                    
                                                }
                                         });

                                         uploader.on("uploadSuccess",function(file,response ){
                                            complete = true;
                                            
                                            $(".solution_form").submit();
                                         })
                                    });
                             </script>
                         </form>
                        
                     </div>  
                   </div>
               </div>
            </div>
        </div>

<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

<?php include './common/foot.html' ?> 