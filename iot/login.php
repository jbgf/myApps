<?php include './common/head.html' ?>
 
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
      
      <div class="login_banner middleTable" style="background:url(img/login_banner.jpg) center center;background-size:cover;">
          <div class="middleRow ">
              <div class="banner_inner ">
             
                  <div class="loginZone bg-white  ">
                        <div class="title title02 mar-center align-center blue ">
                        <div class="title_inner"><img class="icon" src="img/icon_04.png">会员登录</div>
                        </div>
                          <form class="login-form" action="" method="post">
                              <div class="form-row ">
                                <label >登录帐号:</label>
                                <input type="text" class="input-base uname" id="user" name="username" placeholder="用户名">
                              </div>
                              <div class="form-row ">
                                <label >登录密码:</label>
                                <input type="password" class="input-base pword " name="password" placeholder="密码">
                              </div>
                              
                              <div class="form-row auto-login-row">
                                <div class="">
                                <input type="checkbox" class="check float-l"></input><span class="smallSize float-l">自动登录</span></div>
                                 <a class="float-r blue">忘记密码</a>
                              </div>
                                  
                              
                             
                              <button id="submit" name="submit" class="login button">登录</button>
                              <p class="quick_sign_up align-center">没有账户？<a class="orange">快速注册</a></p>
                          </form>
                      
                  </div>
              
              </div>
          </div>
      </div>
     
      
       
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

<?php include './common/foot.html' ?>    