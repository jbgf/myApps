<?php include './common/head.html' ?>

<!-- validate start -->
        <script type="text/javascript" src="js/jquery.validate.js"></script>
    
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
        <div>
            <div class="banner" style="background:url(img/banner01.jpg) center center"></div>
            <div class="middle_part container1200">
                <div class="contentWrapper">
                    <div id="leftSideBar_wrapper">
                    <div class="leftSide" >
                        
                        <div class="leftSide_ad">
                            <a><img src="img/leftSide_ad.jpg"></a>
                        </div>
                        <div class="LeftserviceBtn i_white">
                            <a class="serviceBtn bg-orange"><i class="iconfont">&#xe66d;</i><span>中心服务</span></a>
                            <a class="serviceBtn bg-l-blue"><i class="iconfont">&#xe7d9;</i><span>入会邀请函</span></a>
                            <a class="serviceBtn bg-l-green"><i class="iconfont">&#xe666;</i><span>下载中心</span></a>
                        </div>
                    </div>
                    <div class="rightContent">
                        <ul class="rightContent_ul">
                            <li class="rightWrapper0">
                            <div class="content_head">
                                <span class="title blue bigSize">在线留言</span>
                                <span class="r-link float-r">
                                    <a>首页</a>&gt;
                                    <a>在线留言</a>
                                </span>
                            </div>
                            
                            <div class="form-content01 mar-center">
                                <form id="myform02" name="myform02">
                                    <div class="m-form-line clear">
                                        <div class="block-1 input-set05">
                                            <span class="text">留言人:</span>
                                            <div class="inputBox ">
                                                <input type="text" class="small" name="data[title]">
                                                <div class="tips font-s ellipsis">小于等于20个字符（包括A-Z、a-z、0-9、汉字、不含特殊符号）</div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div class="m-form-line clear">
                                        <div class="block-1 input-set05">
                                            <span class="text">您的邮箱:</span>
                                            <div class="inputBox clear">
                                                <input type="text" class="small" name="email">
                                                <div class="tips font-s ellipsis">示范：example@mail.com</div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="m-form-line clear">
                                        <div class="block-1 input-set05">
                                            <span class="text">留言内容:</span>
                                            <div class="inputBox textarea clear">
                                                <textarea class="big" name="data[text]"></textarea>
                                                <div class="tips font-s ">小于等于500字符</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="m-form-line clear">
                                        <div class="block-1 input-set05">
                                            <span class="text">验证码:</span>
                                            <div class="inputBox ">
                                                <input type="text" class="small" name="data[code]"><div></div>
                                                <div class="verification_code float-l"><img src="img/verifyimage.png" alt=""></div>
                                                <div class="tips font-s ellipsis">看不清楚？换张图片</div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="m-form-line buttonRow">
                                        <div class="input-set05">
                                        <button class="m-btn mediumSize bg-blue" type="submit ">发表留言</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            
                            <script type="text/javascript">
                                
                                $(function(){
                                    validator("#myform02");
                                })
                                    
                                    function validator(formId){
                                        if($(formId).length == 0)return;
                                        /*向插件添加不允许特殊字符的方法*/
                                        /*！！！如果addMethod没反应可以在 additional-methods.js 文件中添加或者在 jquery.validate.js 文件中添加。建议一般写在 additional-methods.js 文件中。*/
                                        jQuery.validator.addMethod("specialCharValidate", function(value, element) { 
                                        var pattern = new RegExp("[`~!@%#$^&*()=|{}':;',　\\[\\]<>/? \\.；：%……+￥（）【】‘”“'。，、？]"); 
                                        return this.optional(element)||!pattern.test(value) ; 
                                        },"不允许包含特殊符号!"); 
                                        
                                        /*存放原先的提示信息*/
                                        var t = $(formId).find(".tips");
                                        var b = [];
                                            t.each(function(i,e){
                                              b.push($(e).html());
                                            })
                                         
                                        
                                        $(formId).validate({
                                             rules: {
                                                      "data[title]":{
                                                          required:true,
                                                          maxlength:20,
                                                          specialCharValidate:true
                                                        },
                                                      "email":{
                                                            required:true,
                                                            email:true
                                                      },
                                                      "data[text]":{
                                                        required:true,
                                                        maxlength:500
                                                      },
                                                      "data[code]":"required"
                                                    },
                                             messages:{
                                                    "data[title]":{
                                                            required:"请填写您的姓名",
                                                            maxlength:"小于等于20个字符（包括A-Z、a-z、0-9、汉字、不含特殊符号）"
                                                        },
                                                    "email":{
                                                            required:"请填写您的邮箱",
                                                            email:"邮箱格式不正确"
                                                        },
                                                    "data[text]":{
                                                              required:"请填写留言内容",
                                                              maxlength:"小于等于500字符"
                                                            },
                                                    "data[code]":"请填写验证码"
                                             },
                                             errorPlacement: function (label, element) {
                                                    $(element).nextAll(".tips").html(label.text()).css({color:"red"})
                                             },
                                             success:function(label,element){
                                                    var index = $(formId).find(":input").index($(element));
                                                    /*还原回原来的提示信息*/
                                                    $(element).next(".tips").html(b[index]).css({color:"#b5b5b5"});
                                                    

                                             }
                                        });
                                        
                                    }
                                
                            
                            </script>
                            </li>
                            
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <script type="text/javascript">
            jQuery("#leftSideBar_wrapper").slide({mainCell:".rightContent_ul",titCell:".leftSide li"}); 
        </script>
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

<?php include './common/foot.html' ?>