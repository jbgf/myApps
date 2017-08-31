<?php include './head.html' ?>
<script type="text/javascript" src="js/layer/layer.js"></script>
<style type="text/css"></style>
<!-- 地区选择插件 -->
<link rel="stylesheet" type="text/css" href="css/mobile-select-area.css">
<link rel="stylesheet" type="text/css" href="css/dialog.css">
<script type="text/javascript" src="js/dialog.js"></script> 
<script type="text/javascript" src="js/mobile-select-area.js"></script>

<div class="pageWrapper-bg">
    <?php include './header.html' ?>      <!-- 导航栏 -->
    <?php include './slider1.html' ?>     <!-- 轮播栏 -->
    <ul class="floorList">
        <li class="row main">
            <div class="rowInner">
                <div class="row-left">
                    <div class="avatar1">
                        <img src="img/icon1.png">
                        <span class="tagButton button sm bg-blue icon">楼主</span>
                    </div>
                    
                </div>
                <div class="row-right">
                    <div class="">
                         <span class="username">小幺</span><br><span class="tips">发送“太阳城”进行有奖互动哦</span>
                    </div>
                    <div class="">
                        
                        <div style="display: inline-block;">
                            <div class="flower show-favor"><img class="scaleImg" src="img/flower.png"></div>
                        </div>
                    </div>
                        
                </div>
            </div>
        </li>    
        <div id="flistOutput" class="mainContent"></div>              
    </ul>

      

    <div class="modalX">
         <div class="modal-favor homePoupMask02">
              <img src="img/favor.gif" class="" width="210" alt="">
         </div>  <!-- 点赞弹窗 end -->

         <div class="modal-form homePoupMask02">
                <div class="info_wrapper  mar-center zindex relative ">
                        
                        <!-- <p>请先填写您的资料：</p> -->
                        <form class="info_form mar-center zindex relative" style="">
                            <div class="header1 align-center">
                                     请填写您的兑奖信息
                            </div>
                            <div class="info_form_inner">
                                <div class="ab"><img src="img/banner02.png" alt=""></div>
                                
                                <label class="required"><input id="trueName" type="text" name="" placeholder="姓名 "></label>
                                <label>
                                    <input id="tel" type="text" name="" placeholder="联系方式">
                                    
                                </label>
                                
                                <label><input id="adr" type="text" name="" placeholder="联系地址" readonly="true"></label>
                                 <label><input id="adr_details" type="text" name="" placeholder="详细地址 "></label>
                                 <label><input id="adr_add" type="text" name="" placeholder="地址备注 "></label>
                                
                                <div class="tips">
                                    <div class="tips-left red">注：</div>
                                    <div class="tips-right">以上均为必填，否则兑奖无效本期礼品由太阳城独家提供</div>
                                </div>
                                <button id="submitBtn" class="button lg bg-blue" type="submit">
                                    <a>提交</a>
                                </button>
                                
                            </div>
                            
                        </form> 
                        <script>
                            
                            var selectArea = new MobileSelectArea();
                            selectArea.init({trigger:$('#adr'),value:'',data:'data.json',position:'bottom'});
                        </script>   
                </div>
         </div>  <!-- 表格弹窗 end -->
         <script type="text/javascript">
             
            //表单校验
                        
            $("#submitBtn").click(function(){
                        
                  var trueName = $("#trueName").val();
                  var tel = $("#tel").val();
                  var area = $("#adr").val();
                  var address = $("#adr_details").val();
                  var mobile = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
                  if(trueName==''){
                    layer.tips('请输入用户名', '#trueName', {
                      tips: [1, '#3595CC'],
                      time: 4000
                    });
                    return false;
                  }else if(tel==''){
                     layer.tips('请输入手机号', '#tel', {
                      tips: [1, '#3595CC'],
                      time: 4000
                    });
                    return false;
                  }else if(!mobile.test(tel)){
                     layer.tips('请输入合法的手机号', '#tel', {
                      tips: [1, '#3595CC'],
                      time: 4000
                    });
                     return false;
                  }else if(area==''){
                     layer.tips('请选择地区', '#adr', {
                      tips: [1, '#3595CC'],
                      time: 4000
                    });
                     return false;
                  }
                  else if(address==''){
                     layer.tips('请输入详细地址', '#adr_details', {
                      tips: [1, '#3595CC'],
                      time: 4000
                    });
                     return false;
                  }
                            
            });
            

         </script>
         
         <textarea id="plistta" style="display:none;">
                <li>
                    <div class="block">
                        <div class="avatar1 ">
                            <img src=$avatar$>
                        </div>                                           
                        $userName$
                    </div>
                    <div class="block">
                    <span class="tagButton button  bg-orange icon">第$PrizefloorNum$层</span>
                    </div>   
                </li> 
         </textarea>


         <div class="modal-prizeList homePoupMask02 " ><!--style="display: block"  -->
              <div class="homePoupInner info_wrapper mar-center zindex relative ">
                        
                        <form  class=" mar-center zindex relative" style="">
                            <div class="header1 align-center">
                                     中奖名单
                            </div>
                            <ul class="pl-first">
                                <div class="block">用户名</div>
                                <div class="block">中奖楼层</div>
                            </ul>
                            <div class="info_form_inner type2">
                                
                                <ul class="hpm02_mainHeight">
                                   
                                    <div id="plistOutput"></div>
                                </ul>

                                <div class="ab"><img src="img/banner02.png" alt=""></div>
                                
                            </div>
                            
                        </form> 
                        <script type="text/javascript">
                            +function(){
                                /*前端测试使用*/
                                var data1 = [
                                    {
                                        avatar: "img/icon1.png",         /*头像*/
                                        userName:"小幺",/*用户名*/
                                        PrizefloorNum:1,       /*所在楼层数*/
                                    },
                                    {
                                        avatar: "img/icon1.png",         /*头像*/
                                        userName:"小幺",/*用户名*/
                                        PrizefloorNum:1,       /*所在楼层数*/
                                    },
                                    {
                                        avatar: "img/icon1.png",         /*头像*/
                                        userName:"小幺",/*用户名*/
                                        PrizefloorNum:1,       /*所在楼层数*/
                                    },
                                    {
                                        avatar: "img/icon1.png",         /*头像*/
                                        userName:"小幺",/*用户名*/
                                        PrizefloorNum:1,       /*所在楼层数*/
                                    },
                                    {
                                        avatar: "img/icon1.png",         /*头像*/
                                        userName:"小幺",/*用户名*/
                                        PrizefloorNum:1,       /*所在楼层数*/
                                    },
                                    {
                                        avatar: "img/icon1.png",         /*头像*/
                                        userName:"小幺",/*用户名*/
                                        PrizefloorNum:1,       /*所在楼层数*/
                                    }
                                ];
                                /*前端测试使用*/
                                jsonTemplate("#plistta",data1,"#plistOutput");
                            }();
                        </script> 
                </div>
         </div>  <!-- 获奖名单弹窗 end -->

         <div class="modal-qr homePoupMask02 " >
                <div class="homePoupInner mar-center ">
                    <div class="header1 align-center">
                             扫二维码，加入喊楼队伍
                    </div>
                    <div class="skillSupPoup_wrapper relative">
                        <div class="qr">
                             <img src="img/qr.png">
                             
                        </div>
                    </div>
                    <div class="modalBox_close"><img src="img/close.png"></div>
                </div>
               
         </div>  <!-- 二维码弹窗 end -->        
    </div>
    
    <textarea id="flistta" style="display:none;">
        <li class="row">
            <div class="rowInner">
                <div class="row-left">
                    <div class="avatar1 ">
                        <img src=$avatar$>
                    </div>
                </div>
                <div class="row-right">
                    <div class="">
                         <span class="username">$userName$</span><br>$keyWord$
                    </div> 
                    <div class=" align-right">
                        <div class="imgbox iBlock $prizeImg$" style=""><img class="scaleImg" src=$prizeImg$ alt=""></div>
                        <div class="iBlock">
                            <span class="tagButton button  bg-orange icon $floorNum$">第$floorNum$层</span>
                            <br>$time$
                        </div>

                        
                    </div>
                       
                </div>
            </div>
        </li>
    </textarea>
    <script type="text/javascript">
            

            +function(){
                /*前端测试使用*/
                var data1 = [
                    {
                        avatar: "img/icon1.png",         /*头像*/
                        userName:"小幺",/*用户名*/
                        keyWord:"太阳城",/*发送的关键词*/
                        time:"2014-12-30 20:58:20.000000", /*发送时间*/
                        floorNum:1,       /*所在楼层数，没中奖则没有*/
                        prizeImg:"img/prized.png"  /*中奖图片，没中则没有*/
                    },
                    {
                        avatar: "img/icon1.png",         /*头像*/
                        userName:"小幺2",/*用户名*/
                        keyWord:"太阳城2",/*发送的关键词*/
                        time:"2017-6-30 20:58:20.000000", /*发送时间*/
                        floorNum:2       /*所在楼层数*/
                    },
                    {
                        avatar: "img/icon1.png",         /*头像*/
                        userName:"小幺2",/*用户名*/
                        keyWord:"太阳城2",/*发送的关键词*/
                        time:"2017-8-16 20:58:20.000000", /*发送时间*/
                        floorNum:3       /*所在楼层数*/
                    },
                    {
                        avatar: "img/icon1.png",         /*头像*/
                        userName:"小幺2",/*用户名*/
                        keyWord:"太阳城2",/*发送的关键词*/
                        time:"2017-8-17 15:58:20.000000", /*发送时间*/
                        floorNum:3       /*所在楼层数*/
                    },
                    {
                        avatar: "img/icon1.png",         /*头像*/
                        userName:"小幺2",/*用户名*/
                        keyWord:"太阳城2",/*发送的关键词*/
                        time:"2017-8-17 15:58:20.000000", /*发送时间*/
                        
                    },
                    {
                        avatar: "img/icon1.png",         /*头像*/
                        userName:"小幺2",/*用户名*/
                        keyWord:"太阳城2",/*发送的关键词*/
                        time:"2017-8-17 15:58:20.000000", /*发送时间*/
                        floorNum:4       /*所在楼层数*/
                    }
                ];

                /*前端测试使用*/
                
                $.each(data1,function(index,e){       /*将发送时间转化为相应的文字*/
                    
                    e['time'] = getTimeString(e['time']);
                    
                })
                
                jsonTemplate("#flistta",data1,"#flistOutput");
            }();
        $(function(){

            /*绑定点赞弹窗*/

            var modalf = setModal(".modal-favor",".show-favor",function(){
                
                setTimeout(function(){modalf.trigger("close")},1500);

            })          
            var favorImg = modalf.find('img');
            var favorsrc =  favorImg.attr("src");          
            modalf.on("close",function(){

                /*favorImg.attr('src','');*/
                favorImg.removeAttr('src');
            })
            modalf.on("show",function(){
                favorImg.attr('src',favorsrc);
            })

            var modalqr = setModal(".modal-qr",".show-qr");      /*二维码弹窗*/
            var modalqr = setModal(".modal-prizeList",".show-prizeList");      /*prizeList弹窗*/


            /*表格弹窗*/
            if(0){
                setModal(".modal-form")
            }

            if(0){
                var offsettop = $('.floorList li:last').offset().top; 
                $('html,body').animate({scrollTop:offsettop});
            }

        })
        

    //获取滚动条当前的位置 
    function getScrollTop() { 
        var scrollTop = 0; 
        if (document.documentElement && document.documentElement.scrollTop) { 
        scrollTop = document.documentElement.scrollTop; 
        } 
        else if (document.body) { 
        scrollTop = document.body.scrollTop; 
        } 
        return scrollTop; 
    } 

    //获取当前可视范围的高度 
    function getClientHeight() { 
        var clientHeight = 0; 
        if (document.body.clientHeight && document.documentElement.clientHeight) { 
        clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight); 
        } 
        else { 
        clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight); 
        } 
        return clientHeight; 
    } 

    //获取文档完整的高度 
    function getScrollHeight() { 
        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight); 
    } 
    window.onscroll = function () { 
        //ajax从这里开始
        if (getScrollTop() + getClientHeight() == getScrollHeight()) {
                           
                
        }
    } 
    
      
    </script>

</div>
<?php include './dialogBar.html' ?>   
<?php include './foot.html' ?>





