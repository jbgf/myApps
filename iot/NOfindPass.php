<?php include './common/head.html' ?>
 
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
      
      <div class="login_banner middleTable" style="background:url(img/login_banner01.jpg) center center;background-size:cover;">
          <div class="middleRow ">
              <div class="banner_inner ">
             
                  <div class="loginZone bg-white ">
                        <div class="title title02 mar-center align-center blue ">
                        <div class="title_inner">
                            找回密码
                        </div>
                        </div>
                          <form class="login-form" action="" method="post">
                              <div class="">
                                  <div class="form-row ">
                                    <label>输入手机号码:</label>
                                    <input type="text" class="input-base uname" id="user" name="username" placeholder="输入手机号码">
                                  </div>
                                  <div class="form-row ">
                                    <label>验证码:</label>
                                    <div class="verifyRow">
                                        
                                        <input type="text" class="input-base verifyInput " name="password" placeholder="输入验证码">
                                        <img class="verifyImg" src="img/icon41.jpg">
                                    </div>
                                  </div>
                                   <button id="submit" type="submit" name="submit" class="login button align-center" value="">下一步</button>
                              </div>
                              <div class="hide">
                                  <div class="form-row ">
                                    <label >接受验证码重新设置密码:</label>
                                    <input type="text" class="input-base uname" id="user" name="username" placeholder="短信验证凭证">
                                  </div>
                                  <div class="form-row ">
                                    
                                    <input type="password" class="input-base pword " name="password" placeholder="重置密码">
                                  </div>
                                  <div class="form-row ">
                                    
                                    <input type="text" class="input-base pword " name="password" placeholder="确认密码">
                                  </div>

                                  <div class="form-row">
                                    <div class="verifyRow">
                                    <input type="text" class="input-base verifyInput " name="password" placeholder="验证码">
                                    <img class="verifyImg" src="img/icon41.jpg">
                                    </div>
                                  </div>
                                  
                                 
                                  <input id="submit" type="submit" name="submit" class="login button align-center" value="确&nbsp;&nbsp;定">
                              </div>

                              <p class="quick_sign_up align-center">已有账户？<a class="orange">在此登录</a></p>

                          </form>
                      
                  </div>
              
              </div>
          </div>
      </div>
     
      
       
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

<?php include './common/foot.html' ?>    