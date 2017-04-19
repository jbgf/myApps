<?php include './common/head.html' ?>
<link rel="stylesheet" type="text/css" href="iconfont/iconfont.css">
<link rel="stylesheet" type="text/css" href="css/font-awesome.css">
<link rel="stylesheet" type="text/css" href="css/home.css">
<script type="text/javascript" src="js/jquery.validate.js"></script>
<script type="text/javascript" src="js/modalBox.js"></script>
<script type="text/javascript" src="js/jquery.multiMenu.js"></script>
<script type="text/javascript" src="js/home.js"></script>
    
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
    <!-- template01 start-->            
                <textarea id="template01" style="display:none">
                    <div class="tableWrapper01">
                    <table>
                        <tr>
                            <td colspan="6">
                                <span class="titleName">样品1</span>
                                <i class="fa fa-trash-o " aria-hidden="true"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>样品名称 </td>
                            <td colspan="5" class="sname inputTd"><input type="text" name="sname"></td>
                        </tr>
                        <tr>
                            <td>样品标记  </td>
                            <td class="smark inputTd"><input type="text" name="smark"></td>
                            <td>样品份数 </td>
                            <td class="sNum inputTd"><input type="text" name="sNum"></td>
                            <td>数量、重量/每份 </td>
                            <td class="sPinfo inputTd"><input type="text" name="sPinfo"></td>
                        </tr>
                        <tr>
                            <td>
                                检测项目
                                <div class="addItemBtn tips">添加检测项目</div>
                            </td>
                            <td colspan="3"><input class="choosedItem" type="hidden" name="choosedItem"></td>
                            <td>
                                检测依据
                                <div class="tips">（本栏留空视为同意由
                                <br/> 本中心选定依据）</div>
                            </td>
                            <td class="sGist inputTd">
                                <textarea type="text" name="sGist"/>
                            </td>
                        </tr>
                    </table>

                    <div  class="modalBox fade modalBox01">
                            <div class="modalBox-dialog" role="document">
                                <div class="modalBox-content">
                                  <div class="modalBox-header">
                                        <button type="button" class="close" data-dismiss="modalBox" aria-label="Close">
                                          <span aria-hidden="true">×</span>
                                        </button>
                                        <p class="modalBox-title">选择检测项目</p>
                                  </div>
                                  <div class="modalBox-body nopadding">
                                        <div class="chooseZone"></div>
                                      
                                  </div>
                                  <div class="modalBox-header">
                                        
                                        <p class="modalBox-title">已选择检测项目</p>
                                  </div>
                                  <div class="modalBox-body">
                                        <div class="choosedZone"></div>
                                        <div class="sampleBtn"><span>确定</span></div>
                                  </div>
                                </div>
                          </div>
                    </div>
                    </div>
                </textarea>
    <!-- template01 end -->
                <div class="c_contentPart">
                    <p class="tp01 bigSize font-weight titleColor">样品信息</p>
    <!-- form start -->                
                    <form>
                        <div class="tableSection">
                            
                        </div>
                        <div class="addRow">
                            <div id="addSample" class="sampleBtn"><span>新增样品</span></div>
                        </div>
                       
                            

                        

                        <p class="tp01 bigSize font-weight titleColor">其他信息</p>
                        <div class="othertable">
                            <table>
                                <tr>
                                    <td>检测报告要求 </td>
                                    <td>
                                        <div class="labelWrapper03">
                                            <label id=""  class="radio">
                                                <input type="checkbox" class="labelFor"  name="result" checked="true">
                                                <div class="radioBox"></div>
                                                <span class="radioText">出具检测结果</span>
                                            </label>
                                        </div>
                                    </td>
                                    <td>检测报告语种 </td>
                                    <td>
                                        <div class="labelWrapper03">
                                            <label id="" class="radio">
                                                <input type="radio" class="labelFor"  name="lang" value="ch">
                                                <div class="radioBox"></div>
                                                <span class="radioText">中文</span>
                                            </label>
                                        </div>
                                        <div class="labelWrapper03">
                                            <label id=""  class="radio">
                                                <input type="radio" class="labelFor"  name="lang" value="en">
                                                <div class="radioBox"></div>
                                                <span class="radioText">英文</span>
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>检测报告语种</td>
                                    <td>
                                        <div class="labelWrapper03">
                                            <label id="" class="radio">
                                                <input type="radio" class="labelFor"  name="yesno" value="ch">
                                                <div class="radioBox"></div>
                                                <span class="radioText">是</span>
                                            </label>
                                        </div>
                                        <div class="labelWrapper03">
                                            <label id=""  class="radio">
                                                <input type="radio" class="labelFor"  name="yesno" value="en">
                                                <div class="radioBox"></div>
                                                <span class="radioText">否</span>
                                            </label>
                                        </div>
                                    </td>
                                    <td>提供的资料</td>
                                    <td class="inputTd"> 
                                        <input type="" name="">
                                    </td>
                                </tr>
                                <tr>
                                    <td>报告递送方式 </td>
                                    <td>
                                        <div class="row">
                                            <div class="labelWrapper03">
                                                <span class="float-l">电子报告：</span>
                                                <label id="" class="radio">
                                                    <input type="radio" class="labelFor"  name="ways" value="ch">
                                                    <div class="radioBox"></div>
                                                    <span class="radioText">电子报告</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="labelWrapper03">
                                                <span class="float-l">纸质报告：</span>
                                                <label id=""  class="radio">
                                                    <input type="radio" class="labelFor"  name="ways" value="en">
                                                    <div class="radioBox"></div>
                                                    <span class="radioText">自取</span>
                                                </label>
                                            </div>
                                            <div class="labelWrapper03">
                                                <label id=""  class="radio">
                                                    <input type="radio" class="labelFor"  name="ways" value="en">
                                                    <div class="radioBox"></div>
                                                    <span class="radioText">挂号信</span>
                                                </label>
                                            </div>
                                            <div class="labelWrapper03">
                                                <label id=""  class="radio">
                                                    <input type="radio" class="labelFor"  name="ways" value="en">
                                                    <div class="radioBox"></div>
                                                    <span class="radioText">快递（到付）</span>
                                                </label>
                                            </div>
                                        </div>
                                    </td>
                                    <td>是否取回<br/>剩余样品 </td>
                                    <td>
                                        <div class="labelWrapper03">
                                            <label id="" class="radio">
                                                <input type="radio" class="labelFor"  name="get" value="get">
                                                <div class="radioBox"></div>
                                                <span class="radioText">是</span>
                                            </label>
                                        </div>
                                        <div class="labelWrapper03">
                                            <label id=""  class="radio">
                                                <input type="radio" class="labelFor"  name="get" value="en">
                                                <div class="radioBox"></div>
                                                <span class="radioText">否（未选择视同否）</span>
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                                <script type="text/javascript">
                                    var allInputs = $(".othertable table").find("[type='radio']");
                                    var radio = allInputs.parents(".labelWrapper03");
                                        radio.on("click",function(e){
                                            if($(e.target).is('input')){
                                                  return;
                                            }
                                            var input = $(this).find("input");
                                            var checked = input.data("check");

                                            if(checked == 1){
                                                
                                                input.removeAttr('checked').data("check",0).addClass("nochecked");
                                            }else{
                                                input.parents("td").find("input[type='radio']").removeAttr('checked').data("check",0).addClass("nochecked");
                                                input.attr('checked',true).data("check",1).removeClass("nochecked");
                                            }
                                        })
                                </script>
                            </table>   
                        </div>
                        <div class="addRow">
                            <button id="next" class="displayBlock sampleBtn mar-center" type="submit"><span>下一步</span></button>
                        </div>
                    </form>
    <!-- form end -->                                    
                </div>
            </div>
        </div>  
    </div>




<script type="text/javascript">
$(function(){
    var ww = $(window).width();
    var wh = $(window).height();
    
        tableMake();
    var modalBox;
    var json ={sub:[ 
                {
                    name:"食品",
                    sub:[
                            {
                                name:"动物源性滋补品"
                            },
                            {
                                name:"果蔬及其制品"
                            },
                            {
                                name:"粮食及其制品",
                                sub:[
                                    {
                                        name:"大米转基因"
                                    },
                                    {
                                        name:"速冻面米食品"
                                    },
                                    {
                                        name:"膨化食品"
                                    },
                                    {
                                        name:"糕点"
                                    },
                                    {
                                        name:"速冻面米食品"
                                    },
                                    {
                                        name:"饼干"
                                    },
                                    {
                                        name:"粮谷中农药残留"
                                    },
                                    {
                                        name:"油炸小食品"
                                    },
                                    {
                                        name:"粮食"
                                    },
                                    {
                                        name:"发酵性豆制品"
                                    },
                                    {
                                        name:"方便面"
                                    },
                                    {
                                        name:"粮谷中农药残留"
                                    },
                                    {
                                        name:"油炸小食品"
                                    },
                                    {
                                        name:"粮食"
                                    },
                                    {
                                        name:"发酵性豆制品"
                                    },
                                    {
                                        name:"方便面"
                                    },
                                    {
                                        name:"豆制品"
                                    },
                                    {
                                        name:"非发酵性豆制品",
                                        final:1,
                                        sub:[
                                            {
                                                name:"总砷"
                                            },
                                            {
                                                name:"志贺氏菌"
                                            },
                                            {
                                                name:"大肠菌群"
                                            },
                                            {
                                                name:"糖精钠"
                                            },{
                                                name:"沙门氏菌"
                                            },
                                            {
                                                name:"山梨酸"
                                            },{
                                                name:"方便面"
                                            },
                                            {
                                                name:"铅"
                                            },{
                                                name:"金黄色葡萄球菌 菌落总数"
                                            }
                                            
                                        ]
                                    }
                                ]
                            },
                            {
                                name:"油脂及其制品"
                            },
                            {
                                name:"粮食及其制品"
                            },
                            {
                                name:"调味品"
                            },
                            {
                                name:"饮品"
                            },
                            {
                                name:"酒类"
                            },
                            {
                                name:"糖类"
                            },
                            {
                                name:"罐头食品"
                            },
                            {
                                name:"动物源性滋补品"
                            },
                            {
                                name:"果蔬及其制品"
                            },
                            {
                                name:"粮"
                            }

                    ]
                },
                {
                    name:" 食品接触材料",
                    sub:[
                            {
                                name:"23",
                                sub:[
                                    {
                                        name:"3"
                                    },
                                    {
                                        name:"3"
                                    }
                                ]
                            }
                    ]
                },
                {
                    name:"水产"
                },
                {
                    name:"动物及动物产品"
                },{
                    name:"转基因农产品"
                },{
                    name:"化妆品"
                },{
                    name:"营养标签"
                },{
                    name:"饲料及添加物"
                },{
                    name:"石油化工品"
                },{
                    name:"矿弄品/金属材料"
                },{
                    name:"电子电器"
                }
    ]};
    triggerMenu(".addItemBtn",json);
})

   
</script>
    
<?php include './common/foot.html' ?>    