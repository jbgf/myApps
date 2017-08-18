<?php include './head.html' ?>
<!-- 地区选择插件 -->
<link rel="stylesheet" type="text/css" href="css/mobile-select-area.css">
<link rel="stylesheet" type="text/css" href="css/dialog.css">
<script type="text/javascript" src="js/dialog.js"></script> 
<script type="text/javascript" src="js/mobile-select-area.js"></script>   

    <div class="pageWrapper-bg" >
                <div class="a_bg"><img src="img/mainBg.jpg" alt="bg"></div>
                
                <div class="pageMain" style="">
                    <div class="info_wrapper  mar-center zindex relative ">
                            <div class="img-box">
                                <img src="img/indexTitle9.png">    
                            </div>
                            <!-- <p>请先填写您的资料：</p> -->
                            <form id="info_form" class="mar-center zindex relative" style="">
                                <div class="info_form_inner">
                                    <div class="prize-info">
                                        恭喜获得xxxx公司提供的xxxx1份，<br>请认真填写您的兑奖信息。
                                    </div>
                                    <div class="ifi-title">信息填写</div>
                                    <label><input type="text" name="" placeholder="姓名 "></label>
                                    <label>
                                        <input type="text" name="" placeholder="联系方式">
                                        
                                    </label>
                                    <label><input id="adr" type="text" name="" placeholder="联系地址 "></label>
                                     <label><input id="adr_details" type="text" name="" placeholder="详细地址 "></label>
                                     <label><input id="adr_add" type="text" name="" placeholder="地址备注 "></label>
                                    
                                    
                                </div>
                                <button class="button lg-button1 yellowBg">
                                    <a><img src="img/lgbutton1bg1.png">
                                    <div class="text">
                                        <div class="center">确定</div>
                                    </div></a>
                                </button>
                            </form> 
                            <script>
                                var selectArea = new MobileSelectArea();
                                selectArea.init({trigger:$('#adr'),value:'',data:'data.json',position:'bottom'});
                            </script>   
                    </div>

                    

                    <div class="host-info align-center">
                        <img src="img/f1.png">本活动由正统网-正统商城主办
                    </div>
                    
                </div>

           
    </div>

   
    
</body>
</html>  