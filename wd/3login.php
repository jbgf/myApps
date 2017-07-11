<?php include 'simpleHead.html' ?>

 <div class="login_banner middleTable" style="background:url(img/login_banner.png) 25% center no-repeat">
        <div class="middleRow ">
            <div class="banner_inner ">
              
                  <div class="loginZone bg-white  ">
                      <div class="loginInner">
                          <div class="logoZone">
                            <img src="img/logo.png">
                          </div>
                          <form id="myform" class="login-form" action="" method="post">
                              <div class="err-row">
                                <!-- 您还没有输入正确的用户名 -->
                              </div>
                              <div class="form-row ">
                                <input type="text" class="input-base uname" id="user" name="username" placeholder="请输入用户名">
                              </div>
                              <div class="form-row ">
                                
                                <input type="password" class="input-base pword " name="password" placeholder="请输入密码">
                              </div>
                              
                              <div class="form-row auto-login-row">
                                <div class="">
                                <input type="checkbox" name="remember" class="check float-l"></input><span class="smallSize float-l">记住账号</span></div>
                                 
                              </div>
                             
                              <button id="submit" name="submit" type="submit" class="login button">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</button>
                              <p class="quick_sign_up clear">
                                <a class="float-l">立即注册</a>
                                <a class="float-r">忘记密码？</a>
                              </p>
                          </form>
                      </div>
                  </div>
              
            </div>
        </div>
    </div>
    <script type="text/javascript">
      +function(){
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
          var validator = $("#myform").validate({
               rules: {
                        "username":{
                            required:true,
                            maxlength:20
                          },
                        "password":{
                              required:true
                        }
                      },
               messages:{
                      "username":{
                              required:"请填写您的姓名",
                              maxlength:"小于等于20个字符（包括A-Z、a-z、0-9、汉字、不含特殊符号）"
                          },
                      "password":{
                              required:"请填写您的密码",
                              
                          }
               },
               success:function(label,element){
                /*若全对则清空错误提示区*/
                    if(!validator.numberOfInvalids()){
                        $(".err-row").html("")

                     }
               }     
               
          });
      }()
      
    </script>
<?php include 'simpleFoot.html' ?>    