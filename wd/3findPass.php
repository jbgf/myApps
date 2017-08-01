<?php include 'simpleHead.html' ?>

    <div class="formBanner">
        <div class="header05">
            <div class="h-title01">找回密码</div>
        </div>
        <div class="process_show">
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
        <form class="form3 mar-center clear float-l" >
            <!-- 第一步 -->
            <div class="formInner active">                 
              
               <div class="form-row">
                   <div class="un-block-1 align-right mediumSize">
                       <span>会员名：</span>
                   </div>
                   <div class="un-block-2">
                   <input class="baseInput" name="username" type="text" required="" ></div>
                   
               </div>
               <div class="form-row">
                   <div class="un-block-1 align-right mediumSize">
                       <span>手机号：</span>
                   </div>
                   <div class="un-block-2">
                   <input class="baseInput" name="cellphone" type="text" required="" aria-required="true"></div>
                   
               </div>
               <div class="form-row">
                   <div class="un-block-1 align-right mediumSize">
                       <span>验证码：</span>
                   </div>
                   <div class="un-block-2 get_ic">
                       <div class="row">
                           <div class="row-block input">
                               <div class="inner">
                                   <input class="baseInput" id="testvalidator" name="testvalidator" type="text" maxlength="11">
                               </div>
                           </div>
                           <div class="row-block btn">
                               <div class="inner">
                                   <a id="sendCode" class="ic_btn white displayBlock align-center">发送验证码</a>
                               </div>
                           </div>
                       </div>   
                   
                   </div>
                   
               </div>
               
               <div class="form-row submit-row">
                   
                   <div class="un-block-3" style="padding-left: 0;">
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
            <div class="formInner ">                 
               
                <div class="successInfo">
                    <p class="title"><i class="iconfont">&#xe633;</i>恭喜你，修改成功</p>
                    <p>即将跳转至<a class="o">主页</a>，请至登录界面重新<a class="o">登陆</a></p>
                </div>
            </div> 
       </form>
       <div class="clear"></div>
    </div>
    <script type="text/javascript">
        $(function(){
            function countDown(countDownContainer,text){
                 
                var timeCount = 60,    /*倒计时秒数s*/
                    i = 0,
                    $countDown = $(countDownContainer);
                    $countDown.text(timeCount+"秒后再发送");   /*倒计时文字*/

                 var timer = setInterval(function(){
                    i += 1;

                    $countDown.text(timeCount-i+"秒后再发送");
                    if(timeCount <= i){
                        clearInterval(timer);
                        $countDown.text(text)
                        return;
                    }
                
                },1000);
                 
                return timer; 
                            
            }
            var validatorForm = $(".form3");
            validatorForm.css({
              
              'margin-left':($(window).width()-$(".form3").width())/2+'px'
            })
            $(".form3 .un-block-2").after("<div class='un-block-3'><div class='tips'></div></div>")

            jQuery.validator.addMethod("isTel", function(value,element) {   
                    var length = value.length;   
                    var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;   
                    
                    return this.optional(element) || (length==11 && mobile.test(value));   
                }, "请正确填写您的联系方式"); 

            validatorForm.validate({
                                  rules:{
                                       password:{
                                          required:true
                                       },
                                       passAgain: {equalTo: "#password"},
                                       username:{
                                          required:true
                                       },
                                       cellphone:{
                                          required:true,
                                          isTel:true
                                       },
                                       testvalidator:{
                                          required:true,
                                          remote: {
                                              /*后台  echo json_encode(true)验证通过，否则不通过*/
                                              url: "check.php", 
                                              type: "post",
                                              data: {
                                                username: function() {
                                                  /*向后台发送输入的验证码*/
                                                  return $( "#testvalidator" ).val();
                                                }
                                              }
                                          }
                                      }

                                  },
                                  messages:{
                                      username:{
                                        required:"请输入您的用户名"
                                      },
                                      password:{
                                        required:"请输入您的密码"
                                      },
                                      cellphone:{
                                        required:"请输入您的手机号码",
                                        isTel:"请输入正确手机号码"
                                      },
                                      passAgain:{
                                         required:"请再次输入您的密码",
                                        equalTo:"两次输入的密码不相同"
                                      },
                                      testvalidator:{
                                        required:"请输入验证码",
                                        remote:"输入验证码错误"}
                                  },
                                  errorPlacement: function (label, element) {
                                        $(element).parents(".form-row").find(".tips").html("*"+label.text()).css({color:"#1296db"})
                                  },
                                  success:function(label,element){
                                        
                                        /*还原回原来的提示信息*/
                                        $(element).parents(".form-row").find(".tips").html("");
                                  }   
                                 
            });

            /*发送验证码按钮*/
            $("#sendCode").on("click",function(){
                var self = this;
               
                if(validatorForm.find("[name=username]").valid() && validatorForm.find("[name=cellphone]").valid()){
                    $.ajax({
                      url: "check.php",    
                      method: "POST",
                      data: { },
                      dataType: "json",
                      success:function(data){
                          if(data){    /*发送成功，开始倒计时*/
                              var text = $(self).text();
                              countDown(self,text);
                          }
                      }
                    });
                }  
                  
            });
        })
      
    </script>
<?php include 'simpleFoot.html' ?>    