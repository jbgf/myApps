<?php include './common/head.html' ?>

<!-- validate start -->
        <script type="text/javascript" src="js/jquery.validate.js"></script>
     
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
                <div class="row-block on">
                    <div class="inner"><a class="t">修改密码</a></div>
                </div>
                <div class="row-block">
                    <div class="inner"><a class="t">用户认证</a></div>
                </div>
            </div>
        </div>
        <div class="middle_part ">
            <div class="contentWrapper">
               <div class="bg-cyan">
                   <div class="container1200">
                     <div class="p_container bg-white">
                            <form class="solution_form mar-center clear" novalidate="novalidate">
                             
                             <div class="form-row">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span>手机号码验证：</span>
                                 </div>
                                 <div class="un-block-2 get_ic">
                                     <div class="row">
                                         <div class="row-block input">
                                             <div class="inner">
                                                 <input class="baseInput" name="phone" type="text" maxlength="11" istel="true" required="" aria-required="true">
                                             </div>
                                         </div>
                                         <div class="row-block btn">
                                             <div class="inner">
                                                 <a class="ic_btn bg-orange white displayBlock align-center">获取验证码</a>
                                             </div>
                                         </div>
                                     </div>   
                                 
                                 </div>
                                 <div class="tips un-block-3 smallSize gray">
                                     <span class="red">*</span>
                                     <span>请输入注册手机号码</span>
                                 </div>
                                 
                             </div>
                             <div class="form-row">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span>短信验证码：</span>
                                 </div>
                                 <div class="un-block-2">
                                 <input class="baseInput" name="identify" type="text" required="" aria-required="true"></div>
                                 <div class="tips un-block-3 smallSize gray">
                                     <span class="red">*</span>
                                     <span>请输入验证码</span>
                                 </div>
                             </div>
                             
                             
                             <div class="form-row submit-row ">
                                 <div class="un-block-1"></div>
                                 <div class="un-block-2 ">
                                    <a id="nextStep" class="baseInput bg-blue white font-weight cursor" >
                                        下一步
                                    </a>
                                 </div>
                                 
                             </div>
                             <script type="text/javascript">
                                 $(function(){
                                    $(".solution_form").validate({
                                          rules:{
                                               passAgain: { required: true,
                                                            equalTo: "#password"}
                                          },
                                    });
                                    jQuery.validator.addMethod("isTel", function(value,element) {   
                                        var length = value.length;   
                                        var mobile = /^1(3[0-9]|4[57]|5[0-35-9]|8[0-9]|70)\d{8}$/;   
                                         
                                        return this.optional(element) || (length==11 && mobile.test(value));   
                                    }, "请正确填写您的联系方式"); 
                                 })
                             </script> 
                         </form>
                        
                     </div>  
                   </div>
               </div>
            </div>
        </div>

<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

<?php include './common/foot.html' ?>    