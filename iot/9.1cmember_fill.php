<?php include './common/head.html' ?>
<!-- 多级联动js -->        
        <script type="text/javascript" src="js/jquery.cxselect.js"></script>
<!-- validate start -->
        <script type="text/javascript" src="js/jquery.validate.js"></script>
<!-- webupload start -->
        <link rel="stylesheet" type="text/css" href="css/webuploader.css">
        <script type="text/javascript" src="js/webuploader.min.js"></script>
       
    
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
                <div class="row-block on">
                    <div class="inner"><a class="t">完善资料</a></div>
                </div>
                <div class="row-block ">
                    <div class="inner"><a class="t">修改密码</a></div>
                </div>
                <div class="row-block ">
                    <div class="inner"><a class="t">用户认证</a></div>
                </div>
            </div>
        </div>
        <div class="middle_part ">
            <div class="contentWrapper">
               <div class="bg-cyan">
                   <div class="container1200">
                     <div class="p_container bg-white">
                         

                         <form class="solution_form mar-center  clear">
                             <div class="form-row relative">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span>用户名：</span>
                                 </div>
                                 <div class="un-block-2">
                                    zzzzz33333
                                 </div>
                                 <div class="un-block-3 avatar_upload ">
                                     <div class="avatarWrapper abs">
                                        <div class="avatarinner img_attached">
                                            <img class="full" src="img/icon35.png">
                                        </div>
                                        <a class="picker bg-orange white baseInput displayBlock" >上传头像</a> 
                                        <p class="smallSize gray">支持JPG、PNG，不要超过2M</p>   
                                     </div>
                                 </div>
                             </div>
                            
                             
                             
                             <div class="form-row ">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span>性别：</span>
                                 </div>
                                 <div class="un-block-2">
                                 <input id="radiomale" class="" placeholder="" name="contact" type="radio"  value=""></input>
                                 <label for="radiomale">男</label>
                                 <input id="radiofemale" class="" placeholder="" name="contact" type="radio"  value=""></input>
                                 <label for="radiofemale">女</label>
                                 
                                 
                                 </div>
                             </div>
                             <div class="form-row height-auto">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span>所在地：</span>
                                 </div>
                                 <div class="un-block-3">
                                     <div class="selectRow">
                                        <select class="c1 s02" data-required="false" name="province" data-first-title="请选择省份" >
                                            
                                            
                                        </select>
                                        <select class="c2 s02" name="city" data-required="false" data-first-title="请选择城市" >
                                            
                                            
                                        </select>
                                        
                                    </div>
                                    <script type="text/javascript">
                                      $(function(){
                                        
                                          $(".selectRow").cxSelect({
                                            url: 'common/cityData.json',               
                                            selects: ['c1', 'c2'],  
                                            
                                          });
                                      })
                                    </script>
                                 
                                 
                                 </div>

                             </div>
                             <div class="form-row ">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span>工作单位或所在学校：</span>
                                 </div>
                                 <div class="un-block-2">
                                 <input class="baseInput" placeholder="" name="num" type="text" ></input>
                                 
                                 
                                 </div>
                             </div>
                             <div class="form-row height-auto">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span>简介：</span>
                                 </div>
                                 <div class="un-block-2">
                                 <textarea class="baseInput" placeholder="" name="ainfo" type="text"  ></textarea>
                                 </div>
                                 
                             </div>
                             <div class="form-row height-auto">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span>手机：</span>
                                 </div>
                                 <div class="un-block-2">
                                 <input class="baseInput" placeholder="" name="adrdetails" type="text" ></input>
                                 
                                 
                                 </div>
                             </div>
                             <div class="form-row height-auto">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span>邮箱：</span>
                                 </div>
                                 <div class="un-block-2">
                                 <input class="baseInput" placeholder="" name="adrdetails" type="text" ></input>
                                 
                                 
                                 </div>
                             </div>
                             <div class="form-row height-auto">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span>QQ：</span>
                                 </div>
                                 <div class="un-block-2">
                                 <input class="baseInput" placeholder="" name="adrdetails" type="text" ></input>
                                 
                                 
                                 </div>
                             </div>
                             
                             <div class="form-row submit-row">
                                 <div class="un-block-1"></div>
                                 <div class="un-block-2 ">
                                    <input class="baseInput bg-blue white font-weight cursor" type="submit" value="保存修改"></input>
                                 </div>
                                 <div class="un-block-3 "></div>
                             </div>
                             <script type="text/javascript">
                                    
                                    var maxSingleSize = 2,
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
                                        fileVal:'test',
                                        fileSingleSizeLimit:maxSingleSize*1024*1024,
                                        duplicate:true
                                    });
                                    
                                    
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
                                        inputs.on("input propertychange",function(){
                                                
                                        });

                                         $(".solution_form").validate({
                                             rules:{
                                                county:{
                                                    required: function(){
                                                        return $(".county option").length > 0;
                                                }}
                                             },
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

<?php include './common/foot.html' ?>