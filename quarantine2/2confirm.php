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
                        <span class="text"><i class="fa fa-calculator" aria-hidden="true"></i> 在线委托 </span>
                    </div>
                    <div class="r-link float-r">
                        <div class="process on">
                            <div class="circleNum">1</div>
                            <div class="r-ftext">填写样品信息</div>
                        </div>
                        <div class="process on">
                            <div class="circleNum">2</div>
                            <div class="r-ftext">信息确认</div>
                        </div>
                        <div class="process ">
                            <div class="circleNum">3</div>
                            <div class="r-ftext">提交</div>
                        </div>
                    </div>
                    
                </div>
   
                <div class="c_contentPart">
                    <div class="tp02 bigSize font-weight titleColor">
                        <span class="t">价格清单</span>
                        
                    </div>
                    <div class="priceTable">
                        <table >
                            <tr>
                                <td>样品名称</td>
                                <td>检测项目</td>
                                <td>检测价格</td>
                            </tr>
<!-- ___________________________________________________________ -->                            
                            <tr>
                                <td >样品一</td>
                                <td>
                                    <table>
                                        
                                        <tr><td>项目1</td></tr>
                                        <tr><td>项目1</td></tr>
                                        <tr><td>项目1</td></tr>
                                    </table>
                                </td>

                                <td>
                                    <table>
                                        
                                        <tr><td>100</td></tr>
                                        <tr><td>110</td></tr>
                                        <tr><td>120</td></tr>
                                    </table>
                                </td>

                            </tr>

                            <tr>
                                <td >样品二</td>
                                <td>
                                    <table>
                                        <tr><td>项目1</td></tr>
                                        
                                    </table>
                                </td>

                                <td>
                                    <table>
                                        
                                        <tr><td>100</td></tr>
                                        
                                    </table>
                                </td>
                            </tr>

                            <tr>
                                <td >样品二</td>
                                <td>
                                    <table>
                                        <tr><td>项目1</td></tr>
                                        <tr><td>项目9</td></tr>
                                    </table>
                                </td>

                                <td>
                                    <table>
                                        
                                        <tr><td>100</td></tr>
                                        <tr><td>110</td></tr>
                                        
                                    </table>
                                </td>
                            </tr>
<!-- ___________________________________________________________ -->                            
                        </table> 
                    </div>

                    <div class="tp02 bigSize font-weight titleColor">
                        <span class="t">委托单位信息</span>
                    </div>
                    <div class="companyInfo solution_form">
                        <div class="form-row height-auto">
                             <div class="un-block-1 align-right  ">
                                 <span class="red">*</span><span>委托单位信息： </span>
                             </div>
                             <div class="un-block-2">
                                <span>福建润商网络技术有限公司 福建省福州市鼓楼区 </span>
                             </div>
                        </div>
                        <div class="form-row height-auto">
                             <div class="un-block-1 align-right  ">
                                 <span class="red">*</span><span>委托单位地址：</span>
                             </div>
                             <div class="un-block-2">
                                <span>福建润商网络技术有限公司 福建省福州市鼓楼区 </span>
                             </div>
                        </div>
                    </div>
                    
    <!-- form start -->                 
                    <form>
                        <div class="tp02 bigSize font-weight titleColor">
                            <span class="t">联系人信息</span>
                            <div id="addSample" class="sampleBtn "><span>新增联系人</span></div>
                        </div>
                        <div class="contactTabel">
                            <table>
                                <tr>
                                    <td>
                                        <div class="labelWrapper04">
                                            <label id="" class="radio">
                                                <input type="checkbox" class="labelFor"  name="lang" value="ch">
                                                <div class="radioBox"></div>
                                                
                                            </label>
                                        </div>
                                        <span class="ispan">
                                            张三<input type="hidden" name="data[1][user]">
                                        </span>
                                        <span class="ispan">
                                            12345678910<input type="hidden" name="data[1][tel]">
                                        </span>
                                        <span class="ispan">
                                            0591-3877777<input type="hidden" name="data[1][tel]">
                                        </span>
                                        <span class="ispan">
                                            0591-3877777
                                            <input type="hidden" name="data[1][tel]">
                                        </span>
                                        <span class="ispan">
                                            3877777＠qq.com
                                            <input type="hidden" name="data[1][mail]">
                                        </span>
                                        <span class="ispan">
                                            福建省福州市鼓楼区
                                            <input type="hidden" name="data[1][add]">
                                        </span>
                                    <td>
                                        <div class="buttonW">
                                            <div class="smallBtn bg-green2">
                                                <i class="iconfont">&#xe77d;</i>
                                                编辑
                                            </div>
                                            <div class="smallBtn bg-orange3">
                                                <i class="iconfont">&#xe7c5;</i>
                                                删除
                                            </div>
                                        </div>
                                        <div class="buttonW">
                                            <div class="smallBtn bg-blue2">
                                                <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
                                                设为默认
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="labelWrapper04">
                                            <label id="" class="radio">
                                                <input type="checkbox" class="labelFor"  name="lang" value="ch">
                                                <div class="radioBox"></div>
                                                
                                            </label>
                                        </div>
                                        <span class="ispan">
                                            张三<input type="hidden" name="data[1][user]">
                                        </span>
                                        <span class="ispan">
                                            12345678910<input type="hidden" name="data[1][tel]">
                                        </span>
                                        <span class="ispan">
                                            0591-3877777<input type="hidden" name="data[1][tel]">
                                        </span>
                                        <span class="ispan">
                                            0591-3877777
                                            <input type="hidden" name="data[1][tel]">
                                        </span>
                                        <span class="ispan">
                                            3877777＠qq.com
                                            <input type="hidden" name="data[1][mail]">
                                        </span>
                                        <span class="ispan">
                                            福建省福州市鼓楼区
                                            <input type="hidden" name="data[1][add]">
                                        </span>
                                    <td>
                                        <div class="buttonW">
                                            <div class="smallBtn bg-green2">
                                                <i class="iconfont">&#xe77d;</i>
                                                编辑
                                            </div>
                                            <div class="smallBtn bg-orange3">
                                                <i class="iconfont">&#xe7c5;</i>
                                                删除
                                            </div>
                                        </div>
                                        <div class="buttonW">
                                            <div class="smallBtn bg-blue2">
                                                <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
                                                设为默认
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="submitZone">
                            <div class="agreement">
                                <div class="labelWrapper">
                                        <label id="agreeLabel" for="agreementCheck" class="check">
                                             <input id="agreementCheck" class="labelFor" name="agreementCheck" type="checkbox" required="" aria-required="true">
                                            <div class="checkBox"></div>
                                        </label>
                                        <div id="agreeBtn"> 我已阅读并同意
                                        <span id="agreeBox01" class="agreeBox blue">《IQTC委托检测客户须知》
                                        </span>和
                                        <span id="agreeBox02" class="agreeBox blue">
                                        《委托检验协议书》
                                        </span>
                                         相关内容</div>
                                </div>
                            </div>
                            <div class="align-center">
                                <div id="return" class="sampleBtn"><span>返回</span></div>
                                <div id="submitInfo" class="sampleBtn bg-orange3"><span>提交信息</span></div>
                            </div>
                        </div>
                        
                    </form>
    <!-- form end -->                                    
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

    $("#agreeBox01").on("click",function(e){
        e.preventDefault();
        var content = "hello world!";
        
        var modal = layer.open({
                    title:"协议",
                    type: 1,
                    area: [ww*.85+'px', wh*.8+'px'], //宽高
                    content: '<div style="padding:20px;">'+content+'</div>'
        })
    })

    $("#agreeBox02").on("click",function(e){
        e.preventDefault();
        var content = "hello world!";
        
        var modal = layer.open({
                    title:"协议",
                    type: 1,
                    area: [ww*.85+'px', wh*.8+'px'], //宽高
                    content: '<div style="padding:20px;">'+content+'</div>'
        })
    })

    var label = $("#agreeLabel");
    var rBtn = $("#submitInfo");
    lableF(label,rBtn);
})   
</script>
    
<?php include './common/foot.html' ?>    