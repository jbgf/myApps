<?php include './common/head.html' ?>

<!-- validate start -->
        <script type="text/javascript" src="js/jquery.validate.js"></script>

    
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
        
            
        <div class="middle_part ">
            <div class="contentWrapper">
               <div class="signUpBox">
                   <div class="container1200">
                     <div class="createBox  bg-white">
                         <div class="title  align-center ">
                            <p class="h blue font-weight bigSize">欢迎加入海峡物联网平台</p>
                            
                         </div>
                         
                         <form class="solution_form mar-center clear">
                             <div class="form-row">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span>帐号：</span>
                                 </div>
                                 <div class="un-block-2"><input class="baseInput"  name="case" type="text" minlength="2" maxlength="9" required></input></div>
                                 <div class="tips un-block-3 smallSize gray">
                                 <span class="red">*</span>
                                 <span>请输入2-9个字符</span></div>
                             </div>
                             <div class="form-row">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span>登录密码：</span>
                                 </div>
                                 <div class="un-block-2">
                                    <input id="password" class="baseInput" name="password"  type="password" minlength="6" maxlength="32" required></input>
                                 </div>
                                 <div class="tips un-block-3 smallSize gray">
                                 <span class="red">*</span>
                                 <span>请输入6-32位密码</span></div>
                             </div>
                             <div class="form-row">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span>确认密码：</span>
                                 </div>
                                 <div  class="un-block-2">
                                 <input id="passAgain" class="baseInput"  name="passAgain" type="text" required></input></div>
                                 <div class="tips un-block-3 smallSize gray">
                                 <span class="red">*</span>
                                 <span>请再输入一次密码</span></div>
                             </div>
                             <div class="form-row">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span>手机号码：</span>
                                 </div>
                                 <div class="un-block-2 get_ic">
                                 <div class="row">
                                     <div class="row-block input">
                                         <div class="inner">
                                             <input class="baseInput"  name="phone" type="text" maxlength="11" isTel="true" required></input>
                                         </div>
                                     </div>
                                     <div class="row-block btn">
                                         <div class="inner">
                                             <a class="ic_btn bg-orange white displayBlock align-center">获取验证码</a>
                                         </div>
                                     </div>
                                 </div>   
                                 
                                 </div>
                                 
                             </div>
                             <div class="form-row">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span>短信验证码：</span>
                                 </div>
                                 <div class="un-block-2">
                                 <input class="baseInput"  name="identify" type="text" required></input></div>
                                 <div class="tips un-block-3 smallSize gray"></div>
                             </div>
                             
                             
                             <div class="form-row submit-row height-auto">
                                 <div class="un-block-1"></div>
                                 <div class="un-block-2 ">
                                    <input class="baseInput bg-blue white font-weight cursor" type="submit" value="注&nbsp;&nbsp;册"></input>
                                    <p class="align-center">已有帐号？去<a class="orange" style="margin-left: 5px">登录</a></p>

                                 </div>
                                 <div class="un-block-3 "></div>
                             </div>
                            
                         </form>
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
                     </div>  
                   </div>
               </div>
            </div>
        </div>
        
       
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

<?php include './common/foot.html' ?> 