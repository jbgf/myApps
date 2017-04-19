<?php include './common/head.html' ?>
<link rel="stylesheet" type="text/css" href="iconfont/iconfont.css">
<link rel="stylesheet" type="text/css" href="css/font-awesome.css">
<link rel="stylesheet" type="text/css" href="css/home.css">
<script type="text/javascript" src="js/jquery.validate.js"></script>
<script type="text/javascript" src="js/home.js"></script>
<script type="text/javascript" src="js/layer/layer.js"></script>
    
     <div class="centerMiddle content-bg ">
        <div class="centerWrapper container1000 ">
            <div class="commonWrapper">

                <div class="news_h03">
                    <div class="h-title01 float-l">
                        <span class="text"><i class="fa fa-calculator" aria-hidden="true"></i> 支付方式 </span>
                    </div>
                    
                </div>
                <div class="c_contentPart">
                    <div id="paywayW">
                        <div class="payWay">
                            <form>
                                <table>
                                    <tr>
                                        <td>
                                            <div class="labelWrapper04">
                                                <label id="" class="radio">
                                                    <input type="radio" class="labelFor"  name="way" checked="true">
                                                    <div class="radioBox"></div>
                                                    
                                                </label>
                                            </div>
                                        </td>
                                        <td class="zhi"><i class="iconfont">&#xe625;</i>
                                            <span class="t">支付宝</span>

                                        </td>
                                        <td>价格：1000$</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="labelWrapper04">
                                                <label id="" class="radio">
                                                    <input type="radio" class="labelFor"  name="way" >
                                                    <div class="radioBox"></div>
                                                    
                                                </label>
                                            </div>
                                        </td>
                                        <td class="we"><i class="iconfont">&#xe60a;</i>
                                            <span class="t">微信支付</span>

                                        </td>
                                        <td>价格：1000$</td>
                                    </tr>

                                </table>
                                <div class="psubmitZone">
                                    <button id="confirmPay" type="submit" name="">确认支付</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>


<script type="text/javascript" src="js/modalBox.js"></script>
<script type="text/javascript" src="js/jquery.multiMenu.js"></script>

<script type="text/javascript">
$(function(){
    var ww = $(window).width();
    var wh = $(window).height();

   

})   
</script>
    
<?php include './common/foot.html' ?>    