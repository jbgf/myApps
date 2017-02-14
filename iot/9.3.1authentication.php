<?php include './common/head.html' ?>

<!-- validate start -->
        <script type="text/javascript" src="js/jquery.validate.js"></script>
    
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
        <div class="p_banner middleTable" style="background:url(img/member_banner.png) center center">
            <div class="middleRow">
                <div class="banner_inner">
                        <div class="avatarWrapper white">
                            <div class="avatar01 mar-center">
                                <img class="full circle" src="img/avatar.png">
                            </div>
                            <p class="name align-center bigSize font-weight">丁文礼</p>
                            <p class="intro mar-center align-left">普通会员，痛客平台在与痛客进行充分沟通后， 根据痛客平台专业操作，对痛点进行分解和定义的文档。</p>
                        </div>
                </div>    
            </div>
        </div>
        <div class="member_url align-center">
            <div class="row mediumSize">
                <div class="row-block">
                    <div class="inner"><a class="t">完善资料</a></div>
                </div>
                <div class="row-block ">
                    <div class="inner"><a class="t">修改密码</a></div>
                </div>
                <div class="row-block on">
                    <div class="inner"><a class="t">用户认证</a></div>
                </div>
            </div>
        </div>
        <div class="middle_part ">
            <div class="contentWrapper">
               <div class="bg-cyan">
                   <div class="container1200">
                     <div class="p_container bg-white">
                         <form class="solution_form mar-center clear" >
                            <div class="authentication_wrapper mar-center">
                             <div class="form-row height-auto">
                                 <p class="mediumSize align-center">选择你的身份，进行相应认证，即可发布痛点</p>
                                 
                             </div>
                             <div class="form-row height-auto clear">
                                 <div class="choose clear">
                                     <div class="block-2 float-l">
                                        <div class="userWrapper middleTable">    
                                         <div class="middleRow">
                                         <div class="user per mar-center">
                                             <img class="icon" src="img/icon25.png">
                                         </div>
                                         </div>
                                        </div>
                                        <p class="info align-center">创客认证</p> 
                                     </div>
                                     <div class="block-2  float-l">
                                        <div class="userWrapper middleTable"> 
                                         <div class="middleRow">
                                         <div class="user ent on mar-center ">
                                             <img class="icon" src="img/icon26.png">
                                         </div>
                                         </div>
                                        </div>
                                        <p class="info align-center">企业认证</p>
                                     </div>
                                 </div>
                             </div>
                             <div class="form-row submit-row height-auto">
                                 
                                 <div class="nextWrapper mar-center">
                                    <input id="nextStep" class="baseInput bg-blue white font-weight cursor" type="submit" value="下一步">

                                 </div>
                                 
                             </div>
                             </div> 
                         </form>
                        <script type="text/javascript">
                            $(function(){
                                var users = $(".solution_form .user");
                                $(".solution_form .user").click(function(event) {
                                    if($(this).hasClass('on')){}
                                        else{
                                            users.toggleClass('on');
                                            $(this).parents(".block-2").addClass('on').siblings('.block-2').removeClass('on');
                                        }
                                    
                                });
                            })
                            
                        </script>
                     </div>  
                   </div>
               </div>
            </div>
        </div>

<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

<?php include './common/foot.html' ?>    