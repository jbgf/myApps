<?php include 'simpleHead.html' ?>

    <div class="formBanner">
        <div class="header05">
            <div class="h-title01">找回密码</div>
        </div>
        <div class="process_show ">
             <ul class="rows ">
                 <li class="iBlock i1 on">
                    
                      <div class="imgBox">
                      </div>
                      <p>重新输入信息</p>
                    </li>
                 </li>
                 <li class="iBlock i2">
                    
                      <div class="imgBox">
                      </div>
                    
                      <p>设置新密码</p>
                      
                 </li>
                 <li class="iBlock i3">
                    
                        <div class="imgBox"> 
                        </div>
                        <p>完成</p>
                    
                 </li>
             </ul>
        </div>
        <form class="form3 mar-center clear" >
            <!-- 第一步 -->
            <div class="formInner ">                 
              
               <div class="form-row">
                   <div class="un-block-1 align-right mediumSize">
                       <span>会员名：</span>
                   </div>
                   <div class="un-block-2">
                   <input class="baseInput" name="identify" type="text" required="" aria-required="true"></div>
                   
               </div>
               <div class="form-row">
                   <div class="un-block-1 align-right mediumSize">
                       <span>手机号：</span>
                   </div>
                   <div class="un-block-2">
                   <input class="baseInput" name="identify" type="text" required="" aria-required="true"></div>
                   
               </div>
               <div class="form-row">
                   <div class="un-block-1 align-right mediumSize">
                       <span>验证码：</span>
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
                                   <a class="ic_btn white displayBlock align-center">发送验证码</a>
                               </div>
                           </div>
                       </div>   
                   
                   </div>
                   
               </div>
               
               <div class="form-row submit-row ">
                   
                   <div class="un-block-3 ">
                      <button type="submit"  class="baseInput  white font-weight cursor" >
                          下一步
                      </button>
                   </div>
                   
               </div>
               
            </div> 
            <!-- 第二步 -->
            <div class="formInner ">                 
               
                <div class="err-row">
                    <!-- 您还没有输入正确的用户名 -->
                </div>
                   
               <div class="form-row">
                   <div class="un-block-1 align-right mediumSize">
                       <span class="red">*</span><span>登录密码：</span>
                   </div>
                   <div class="un-block-2">
                   <input class="baseInput" placeholder="请输入你的密码 " name="password" type="password" required="true" ></div>
                   
               </div>
               <div class="form-row">
                   <div class="un-block-1 align-right ">
                       <span class="red">*</span><span>密码确认：</span>
                   </div>
                   <div class="un-block-2">
                   <input class="baseInput" placeholder="请再次输入你的密码" name="passAgain" type="password" required="true" ></div>
                   
               </div>
               
               
               <div class="form-row submit-row ">
                   
                   <div class="un-block-3 ">
                      <button type="submit"  class="baseInput  white font-weight cursor" >
                          确&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;认
                      </button>
                   </div>
                   
               </div>

            </div> 
            <!-- 第三步 -->
            <div class="formInner active">                 
               
                <div class="successInfo">
                    <p class="title"><i class="iconfont">&#xe633;</i>恭喜你，修改成功</p>
                    <p>即将跳转至<a class="o">主页</a>，请至登录界面重新<a class="o">登陆</a></p>
                </div>
            </div> 
       </form>
    </div>
    <script type="text/javascript">
      $.validator.setDefaults({
          /*仅显示第一个错误*/
          invalidHandler: function(form, validator) {
              $.each(validator.invalid,function(key,value){
                  tmpkey = key;
                  tmpval = value;
                  validator.invalid = {};
                  validator.invalid[tmpkey] = value;
                  $(".err-row").html(value)
                  return false;
              });
          },
          errorPlacement:function(error, element) {
            
          },
          onkeyup: false,
          /*onfocusout:true,*/
          focusInvalid: true
      });
      var validator = $(".form3").validate({
                            rules:{
                                 passAgain: {equalTo: "#password"}
                            },
                            messages:{
                                passAgain:{
                                  equalTo:"两次输入的密码不相同"
                                }
                            },
                           success:function(label,element){
                            /*若全对则清空错误提示区*/
                                if(!validator.numberOfInvalids()){
                                    $(".err-row").html("")

                                 }
                           }     
                           
                      });
    </script>
<?php include 'simpleFoot.html' ?>    