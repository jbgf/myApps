<?php include './common/rhead.html' ?>
<link rel="stylesheet" type="text/css" href="css/home.css">
<link rel="stylesheet" type="text/css" href="css/font-awesome.css">

<link rel="stylesheet" type="text/css" href="iconfont/iconfont.css">
<script type="text/javascript" src="js/jquery.validate.js"></script>
<script type="text/javascript" src="js/layer/layer.js"></script>
<script type="text/javascript" src="js/home.js"></script>



<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
<input type="hidden" id="refreshed" value="no">     
    <div class="notifications">
        <div class="container1000">
            <span><i class="iconfont">&#xe6ad;</i>欢迎注册IQTC会员，体验在线检测服务。</span>
            <span class="float-r">客户须知 &gt;</span>
        </div>
    </div>
    <div class="centerMiddle content-bg ">
        <div class="centerWrapper container1000 ">
            <div class="c_contentPart">
                
                <form id="solutionF" action="test.php" class="solution_form mar-center clear" enctype="multipart/form-data" method="POST">
                <p class="chead02">登录信息</p>
                     <div class="form-row height-auto">
                         <div class="un-block-1 align-right mediumSize">
                             <span class="red">*</span><span>用户名：</span>
                         </div>
                         <div class="un-block-2">
                            <input id="userName" class="baseInput" name="case" type="text" maxlength="12" required></input>
                            <p class="tips_p">请填写您登陆的用户名，字母和数字组合，如john,long123</p>
                         </div>
                         
                     </div>
                     <div class="form-row height-auto">
                         <div class="un-block-1 align-right mediumSize">
                             <span class="red">*</span><span>手机号：</span>
                         </div>
                         <div class="un-block-2">
                            <input class="baseInput" name="phoneNum" type="text"  required></input>
                            <p class="tips_p">请填写您的手机号码</p>
                         </div>
                         
                     </div>
                     <div class="form-row height-auto">
                         
                         <div class="un-block-1 align-right mediumSize">
                             <span class="red">*</span><span>手机验证码：</span>
                         </div>
                         <div class="un-block-2">
                            <div class="codeRow">
                                <div class="ciWrapper">
                                <input class="baseInput codeInput" name="phone" type="text" maxlength="11" required>
                                </div>
                                <div class="codeBWrapper">
                                        <a><div class="codeBtn">获取验证码</div></a>
                                </div>
                            </div>
                            <p class="tips_p">请输入手机验证码</p>
                         </div>
                         
                     </div>
                     
                     <div class="form-row height-auto">
                         <div class="un-block-1 align-right mediumSize">
                             <span class="red">*</span><span>密码：</span>
                         </div>
                         <div class="un-block-2">
                            <input class="baseInput" id="pass" name="pass" type="password" required></input>
                            <p class="tips_p">请填写您登陆的密码</p>
                        </div>
                         
                     </div>
                     <div class="form-row height-auto">
                         <div class="un-block-1 align-right mediumSize">
                             <span class="red">*</span><span>确认密码：</span>
                         </div>
                         <div class="un-block-2">
                            <input class="baseInput" name="passAgain" type="password" required>
                             <p class="tips_p">请再次填写您登陆的密码，确认两次输入一致</p>
                        </div>
                         
                     </div>
                <p class="chead02">公司信息</p>
                     <div class="form-row height-auto">
                         <div class="un-block-1 align-right mediumSize">
                             <span class="red">*</span><span>企业正式名称：</span>
                         </div>
                         <div class="un-block-2">
                            <input class="baseInput" name="cor_name" type="text" required></input>
                            
                         </div>
                         
                     </div>
                     <div class="form-row height-auto">
                         <div class="un-block-1 align-right mediumSize">
                             <span class="red">*</span><span>公司地址：</span>
                         </div>
                         <div class="un-block-2">
                            <input class="baseInput" name="cor_add" type="text" required></input>
                            
                         </div>
                         
                     </div>
                     <div class="form-row height-auto">
                         <div class="un-block-1 align-right mediumSize">
                             <span class="red">*</span><span>营业执照：</span>
                         </div>
                         <div class="un-block-2">
                            <div class="baseInput" data-name="cor_licence" data-required="true"></div>
                         </div>
                         <div class="un-block-3">
                            <div class="upload_btn">上传</div>
                         </div>
                     </div>
                     
                     <div class="form-row height-auto">
                         <div class="un-block-1 align-right mediumSize">
                             <span class="red">*</span><span>组织机构代码证：</span>
                         </div>
                         <div class="un-block-2">
                            <div class="baseInput" data-name="cor_codeLicence" data-required="true"></div>
                           
                        </div>
                        <div class="un-block-3">
                            <div class="upload_btn">上传</div>
                         </div>
                         
                     </div>
                     <div class="form-row height-auto">
                         <div class="un-block-1 align-right mediumSize">
                             <span class="red">*</span><span>法人代表身份证扫描件： </span>
                         </div>
                         <div class="un-block-2">
                            <div class="baseInput" data-name="cor_id" data-required="true"></div>
                             
                        </div>
                        <div class="un-block-3">
                            <div class="upload_btn">上传</div>
                         </div>
                         
                     </div>
                     <div class="form-row height-auto">
                         <div class="un-block-1 align-right mediumSize">
                             <span class="red">*</span><span>授权代理人身份证扫描件： </span>
                         </div>
                         <div class="un-block-2">
                            <div class="baseInput" data-name="cor_otherid" data-required="true"></div>
                             
                        </div>
                        <div class="un-block-3">
                            <div class="upload_btn">上传</div>
                         </div>
                         
                     </div>
                     <div class="form-row height-auto">
                         <div class="un-block-1 align-right ">
                             <span>企业公章或授权代理人签名扫描件:</span>
                         </div>
                         <div class="un-block-2">
                            <div class="baseInput" data-name="phone"></div>
                            <div class="agreement">
                                <div class="labelWrapper">
                                        <label id="agreeLabel" for="agreementCheck" class="check">
                                             <input id="agreementCheck" class="labelFor" name="agreementCheck" type="checkbox" required>
                                            <div class="checkBox"></div>
                                        </label>
                                        <div id="agreeBtn">我已阅读并同意
                                        <span id="agreeBox" class="blue">《福建检验检疫局委托检测客户须知》</span>相关内容 </div>
                                </div>

                                 
                            </div> 
                         </div>
                         <div class="un-block-3">
                            <div class="upload_btn">上传</div>
                         </div>
                     </div>


                     <div class="form-row submit-row">
                         <div class="un-block-1"></div>
                         <div class="un-block-2 ">
                            <button id="register_btn" class=" white font-weight cursor" type="submit" value="">注册</button>
                         </div>
                         
                         <div class="un-block-3 "></div>
                     </div>
                     <script type="text/javascript">
                         $(function(){
                            (function agreementBtn(){
                                    var ww = $(window).width(),
                                        wh = $(window).height();
                                        $("#agreeBox").on("click",function(e){
                                            e.preventDefault();
                                            var content = "hello world!";
                                            
                                            var modal = layer.open({
                                                        title:"协议",
                                                        type: 1,
                                                        area: [ww*.85+'px', wh*.8+'px'], //宽高
                                                        content: '<div style="padding:20px;">'+content+'</div>'
                                            })
                                        })
                            })()

                            var label = $("#agreeLabel");
                            var rBtn = $("#register_btn");
                            (function lableF(){
                                    
                                    label.on("click",function(e){
                                        if($(e.target).is('input')){
                                            return;
                                        }
                                        rBtn.toggleClass("disabledLink");    
                                        rBtn[0].disabled = !rBtn[0].disabled;
                                        
                                    });
                                    var ib = isGoBack();
                                    if(ib){
                                        
                                    }else{
                                        rBtn.addClass("disabledLink");
                                        rBtn[0].disabled = true; 
                                        label.trigger("click");
                                    }
                                    
                            })()

                            $("#solutionF").submit(function(){
                                if(!label.find("input").is(":checked")){
                                    return false;
                                }
                                
                            })
                            uploadBtn($(".upload_btn"));
                         })
                                         
                         
                         $(".solution_form").validate({
                                    rules: {
                                      phoneNum:{
                                        required:true,
                                        isTel:true
                                      },
                                      passAgain: { required: true,
                                                   equalTo: "#pass"}
                                      
                                    },

                                    ignore: "",    /*忽略，默认忽略:hidden,""表示清空*/
                                    focusCleanup:true,
                                    errorPlacement:function(label,element){
                                        
                                        if ($(element).is(':input[type="file"]') ) { 
                                            $('<p class="tips_p" style="color:red"></p>').append(label).insertAfter($(element).parents(".form-row").find(".baseInput"));
                                        }
                                    },
                                    success:function(label,element){
                                           $(label).remove();

                                    }
                         });


                     </script>
                </form>
            </div>
        </div>  
    </div>
      
       
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->  
    
<?php include './common/rfoot.html' ?>    