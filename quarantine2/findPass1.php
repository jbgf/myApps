<?php include './common/centerhead.html' ?>
<link rel="stylesheet" type="text/css" href="css/home.css">
<link rel="stylesheet" type="text/css" href="css/font-awesome.css">
<script type="text/javascript" src="js/home.js"></script>
<script type="text/javascript" src="js/jquery.validate.js"></script>
<!-- 第一步 -->

<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
      <div class="login_banner middleTable" style="background:url(img/login_banner01.jpg) center center;background-size:cover;">
          <div class="middleRow ">
              <div class="banner_inner ">
             
                  <div class="loginZone bg-white  ">
                        <div class="title title02  align-center blue ">
                        <div class="title_inner">
                              找回密码                            
                        </div>
                        </div>
                        <form class="login-form" action="" method="post">
                              <div class="form-row findPassRow">
                                    1、接收验证码重新设置密码
                              </div>
                              <div class="form-row ">
                                
                                <input type="text" class="input-base uname" id="user" name="username" placeholder="输入手机号码">
                              </div>
                              
                              <div class="form-row ">
                                
                                <div class="verifyRow">
                                    <input type="text" class="input-base m-b verifyInput" name="password" placeholder="输入验证码">
                                    <a href="#">
                                        <div class="verifyImg">
                                            <img src="img/verifyimage.png">
                                            <div class="verifyText">换一张</div>
                                        </div>
                                    </a>
                                </div>
                                
                              </div>  
                              
                              <div class="form-row ">
                                <button id="submit" name="submit" class="login button">下一步</button>
                              </div>
                              <div class="form-row">
                                    <p class="quick_sign_up align-center">
                                        没有账户？<a class="orange">快速注册</a>
                                        
                                    </p>
                              </div>
                        </form>
                      
                  </div>
              
              </div>
          </div>
      </div>
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->  

    
<?php include './common/centerfoot.html' ?>    