<?php include './common/head.html' ?>

<!-- validate start -->
        <script type="text/javascript" src="js/jquery.validate.js"></script>
<!-- webupload start -->
        <link rel="stylesheet" type="text/css" href="css/webuploader.css">
        <script type="text/javascript" src="js/webuploader.min.js"></script>
        
<!-- webupload end -->
        <script type="text/javascript" src="js/upload.js"></script>
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
        
            
        <div class="middle_part ">
            <div class="contentWrapper">
               <div class="bg-cyan">
                   <div class="container1200">
                     <div class="createBox p_container bg-white">
                         <div class="title  align-center ">
                            <p class="h blue font-weight bigSize">创建解决方案</p>
                            <p class="smallSize gray">注：带<span class="red">*</span>为必填项，请填写完毕后提交</p>
                         </div>
                         <div class="b_title bg-superGray mediumSize mar-center align-left">
                               <span class="gray">关联痛点：</span> <span>拯救心灵无人区</span>   
                         </div>
                         <form class="solution_form mar-center clear">
                             <div class="form-row">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span class="red">*</span><span>方案名称：</span>
                                 </div>
                                 <div class="un-block-2"><input class="baseInput" placeholder="请输入方案名称" name="case" type="text" maxlength="12" required></input></div>
                                 <div class="tips un-block-3 smallSize gray">字数限制<span class="numlimited">0</span><span>/12</span></div>
                             </div>
                             <div class="form-row">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span class="red">*</span><span>方案联系人姓名：</span>
                                 </div>
                                 <div class="un-block-2">
                                    <input class="baseInput" name="name" placeholder="方案联系人姓名" type="text" maxlength="6" required></input>
                                 </div>
                                 <div class="tips un-block-3 smallSize gray">字数限制<span class="numlimited">0</span><span>/6</span></div>
                             </div>
                             <div class="form-row">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span class="red">*</span><span>方案联系人手机：</span>
                                 </div>
                                 <div class="un-block-2"><input class="baseInput" placeholder="方案联系人手机" name="phone" type="text" maxlength="11" required></input></div>
                                 <div class="tips un-block-3 smallSize gray">字数限制<span class="numlimited">0</span><span>/11</span></div>
                             </div>
                             <div class="form-row height-auto">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span class="red">*</span><span>上传附件：</span>
                                 </div>
                                 <div class="un-block-2 attached">
                                    
                                    <a id="btnUploadPcb" class=" mediumSize ">点击上传</a>
                                    <input id="file0" class="hide" type="file" name="">

                                 </div>
                                 <div class="un-block-3 smallSize gray">
                                     <p>1、支持格式为pdf，ppt，doc，jpg，jpeg，png </p>
                                     <p>2、大小不要超过5M</p>
                                 </div>

                             </div>
                             <div class="form-row height-auto">     
                                 <div class="un-block-1"></div>
                                 <div class="un-block-3 ">
                                     <div class="upload_zone"></div>
                                 </div>
                             </div>
                             <div class="form-row submit-row">
                                 <div class="un-block-1"></div>
                                 <div class="un-block-2 ">
                                    <button class="baseInput bg-orange white font-weight bigSize cursor" type="submit" value="">发&nbsp;&nbsp;布</button>
                                 </div>
                                 <div class="un-block-3 "></div>
                             </div>
                             <script type="text/javascript">
                                var inputs = $(".solution_form input[type=text]");
                                var flag = false,
                                    complete = false;
                                    inputs.on("input propertychange",function(){
                                            $(this).parents(".form-row").find(".numlimited").html(this.value.length)
                                    });

                                 $(".solution_form").validate({
                                             success:function(label,element){
                                                $(element).data("validate",true);
                                            }
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