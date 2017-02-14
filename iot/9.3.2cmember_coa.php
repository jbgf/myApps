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

                         <form class="solution_form mar-center clear">
                             <div class="form-row height-auto">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span class="red">*</span><span>企业全称：</span>
                                 </div>
                                 <div class="un-block-2">
                                 <input class="baseInput" placeholder="" name="cname" type="text" required></input>
                                 <p class="gray">请填写您营业执照上的企业名称</p>
                                 </div>
                                 
                             </div>
                            
                             <div class="form-row height-auto">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span class="red">*</span><span>营业执照：</span>
                                 </div>
                                 <div class="un-block-2 attached">
                                    <div class="img_attached"><img class="full" src="img/card0.png"></div>
                                    <button class="picker" >点击上传</button>


                                 </div>
                                 <div class="un-block-3 smallSize gray">
                                     <p >
                                     1.请上传营业执照正本或最新年检副本的彩色扫描件或照片  </p>
                                     <p>2.照片要求格式为JPG/JPEG/GIF/PNG，大小不要超过5M</p>
                                     <p class="baseFontColor">注：您的营业执照信息我们将严格保密，请放心上传 </p>
                                 </div>

                             </div>
                             <div class="form-row auto-height">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span class="red">*</span><span>营业执照注册号：</span>
                                 </div>
                                 <div class="un-block-2">
                                    <input class="baseInput" placeholder="" name="license" type="text"  required></input>
                                 
                                    
                                 </div>
                             </div>
                             <div class="form-row ">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span class="red">*</span><span>联系人：</span>
                                 </div>
                                 <div class="un-block-2">
                                 <input class="baseInput" placeholder="" name="contact" type="text" required></input>
                                 
                                 
                                 </div>
                             </div>
                             <div class="form-row ">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span class="red">*</span><span>联系方式：</span>
                                 </div>
                                 <div class="un-block-2">
                                 <input class="baseInput" placeholder="" name="num" type="text" required></input>
                                 
                                 
                                 </div>
                             </div>
                             <div class="form-row height-auto">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span class="red">*</span><span>办公地址：</span>
                                 </div>
                                 <div class="un-block-3">
                                     <div class="selectRow">
                                        <select class="c1 s02" style="overflow:scroll" data-required="false" name="province" data-first-title="请选择省份" required>
                                            
                                            
                                        </select>
                                        <select class="c2 s02" name="city" data-required="false" data-first-title="请选择城市" required>
                                            
                                            
                                        </select>
                                        <select class="c3 s02 county" name="county" data-required="false" data-first-title="请选择区/县">
                                            
                                            
                                        </select> 
                                    </div>
                                    <script type="text/javascript">
                                      $(function(){
                                        
                                          $(".selectRow").cxSelect({
                                            url: 'common/cityData.json',               
                                            selects: ['c1', 'c2','c3'],  
                                            
                                          });
                                      })
                                    </script>
                                 
                                 
                                 </div>

                             </div>
                             <div class="form-row height-auto">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span class="red">*</span><span>详细地址：</span>
                                 </div>
                                 <div class="un-block-2">
                                 <input class="baseInput" placeholder="" name="adrdetails" type="text" required></input>
                                 
                                 
                                 </div>
                             </div>
                             <div class="form-row height-auto">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span class="red">*</span><span>认证说明：</span>
                                 </div>
                                 <div class="un-block-2">
                                 <textarea class="baseInput" placeholder="" name="ainfo" type="text" maxlength="60" required></textarea>
                                 
                                 <p class="gray">请完善认证说明，最多60个字符</p>
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

<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

<?php include './common/foot.html' ?>  