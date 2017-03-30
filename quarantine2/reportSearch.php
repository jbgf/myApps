<?php include './common/head.html' ?>
<link rel="stylesheet" type="text/css" href="css/home.css">
<link rel="stylesheet" type="text/css" href="css/font-awesome.css">
<script type="text/javascript" src="js/home.js"></script>
<script type="text/javascript" src="js/jquery.validate.js"></script>

    <div class="r_wrapper">
        <div class="banner" style="background:url(img/banner01.jpg) center center no-repeat"></div>
        <div class="">
            <div class="container1000">
                <div class="reportBox">
                    <div class="rh01 bg-lightGray">
                        <span class="mediumSize">报告查询</span>
                        <div class="rh01_url float-r">
                            <i class="fa fa-home water-blue" aria-hidden="true"></i>
                            <span class="u">你的位置：报告查询</span>
                        </div>
                    </div>
                    <div class="rhpadding">
                            <div class="typeform01">
                                <form id="checkResult">
                                    <div class="form-row height-auto">
                                         <div class="un-block-1 align-right ">
                                             <span class="red">*</span>
                                             <span >报告编号：</span>
                                         </div>
                                         <div class="un-block-2">
                                            <input class="baseInput"  name="case" type="text"  required number="true">
                                         </div>
                                         <div class="tips un-block-3  gray">
                                            <span>示例编号：3131172822</span>
                                            <i id="fa0" class="fa fa-question-circle red cursor mediumSize" aria-hidden="true"></i>

                                         </div>
                                     </div>
                                     <div class="form-row ">
                                         <div class="un-block-1 align-right ">
                                             
                                             <span >查询密码：</span>
                                         </div>
                                         <div class="un-block-2">
                                            <input class="baseInput"  name="case" type="text" >
                                         </div>
                                         <div class="tips un-block-3  gray">
                                            <span>若需下载PDF报告，请输入查询密码</span>
                                            <i id="fa1" class="fa fa-question-circle red cursor mediumSize" aria-hidden="true"></i>

                                         </div>
                                     </div>
                                     <div class="form-row submit-row height-auto">
                                         <div class="un-block-1"></div>
                                         <div class="un-block-2 ">
                                            <button class="search_submit baseInput bg-water-blue white font-weight bigSize cursor" type="submit" value="">提交查询</button>
                                            <div class="info">自2013年9月1日起本中心出具的检验报告，可根据报告底部给出的查 询密码使用本查询验证报告的完整内容。</div>
                                         </div>
                                     </div>

                                <script type="text/javascript">
                                    $(function(){
                                        $("#checkResult").validate({

                                             /*errorPlacement: function (label, element) {
                                                    $(element).val(label.text()).select()
                                             }*/
                                        })

                                        var content1 = '自2013年9月1日起本中心出具的检验报告，可根据报告底部给出的查 询密码使用本查询验证报告的完整内容。';
                                        var content2 = '你好呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀';
                                        $("#fa0").hover_window({
                                                        type :0,
                                                        position:"right",
                                                        offset:30,
                                                        content:'<span class="white">'+content1+'</span>',
                                                        bg:"#272822",
                                                        width:"auto",
                                                        height:"auto"
                                        });
                                        $("#fa1").hover_window({
                                                        type :0,
                                                        position:"right",
                                                        offset:30,
                                                        content:'<span class="white">'+content2+'</span>',
                                                        bg:"#272822",
                                                        width:"auto",
                                                        height:"auto"
                                        });
                                    })
                                </script>     
                                </form>
                            </div>

                            <div class="typeResult">
                                <div class="type_h">报验结果</div>
                                <div class="resultTable">
                                    <div class="b_title bg-green white align-center clear">
                                        <div class="col un-block-1">报验报告编号</div>
                                        <div class="col un-block-2 ">
                                          <div class="inner">检测进度</div>
                                        </div>
                                        <div class="col un-block-3">报告概况</div>
                                        <div class="col un-block-4">报告下载</div>
                                        
                                    </div>
                                    <div class="bf_wrapper bg-white">
                                        <div class="bf_line">
                                              <div class="b_row align-center clear ">
                                                  <div class="col un-block-1 middleTable">
                                                      <div class="middleRow">3113117183</div>
                                                  </div>
                                                  <div class="col un-block-2  middleTable">
                                                      <div class="state middleRow">
                                                          <i class="fa fa-check-circle green" aria-hidden="true"></i>
                                                          <!-- fa-thumb-tack -->
                                                          <!-- fa-clock-o -->
                                                          <br/>  
                                                          <span>已检毕</span>
                                                      </div>
                                                    
                                                  </div>
                                                  <div class="col un-block-3 middleTable">
                                                    <div class="mainText middleRow align-left">
                                                        <p>送检客户名称：福州市XXXXXX有限公司 </p>
                                                        <p>样品名称：XXXXXXXXXXXXXX </p>
                                                        <p>受理日期：2016-12-12 </p>
                                                        <p>预计检毕日期:2017-01-01</p>
                                                        <p>实际检毕日期:2017-01-01</p>
                                                    </div>
                                                  </div>
                                                  <div class="col un-block-4 middleTable">
                                                    <div class="pdf-downLoad middleRow">
                                                        <a><i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i><br/>
                                                        <span>PDF下载</span></a>
                                                    </div>
                                                  </div>
                                                  
                                              </div>
                                             
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php include './common/foot.html' ?>    