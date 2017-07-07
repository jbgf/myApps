 <?php include 'head.html' ?>

 <div class="login_banner middleTable" style="background:url(img/login_banner.jpg) center center;background-size:cover;">
        <div class="middleRow ">
            <div class="banner_inner ">
           
                <div class="loginZone bg-white  ">
                    <div class="loginInner">
                        <div class="logoZone">
                          <img src="img/logo.png">
                        </div>
                        <form class="login-form" action="" method="post">
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
                              <input type="checkbox" class="check float-l"></input><span class="smallSize float-l">记住账号</span></div>
                               
                            </div>
                           
                            <button id="submit" name="submit" type="submit" class="login button">登录</button>
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
<?php include 'foot.html' ?>    