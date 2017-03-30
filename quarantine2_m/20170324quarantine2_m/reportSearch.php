<?php include 'head.html' ?>
<!-- START  ************************************************************-->
<link rel="stylesheet" type="text/css" href="css/m-home.css">
<link rel="stylesheet" type="text/css" href="iconNew/iconfont.css">


<div class="m_header02 bg-blue container white text-center ">
    <a href="#" onclick="javascript:history.back(-1);"><i class="iconfont float-l margin-l-20">&#xe608;</i></a> 
    报告查询<a href="/"><i class="iconfont float-r">&#xe605;</i></a> 
</div>
<div class="middle">
     <div class="searchFormWrap">
         <form>
              <div class="form_row_wrapper">
                 <div class="form_row">
                    <div class="inner">
                         <div class="text un-block-1"><span class="red">*</span> 报告编号：</div>
                         <input id="number" name="number" class="input un-block-2" placeholder="示例编号3113117183">
                    </div>
                 </div>
                 <div class="form_row">
                    <div class="inner">
                         <div class="text un-block-1">查询密码：</div>
                         <input id="password" name="password" class="input un-block-2" placeholder="如需下载PDF报告，输入查询密码">
                    </div>
                 </div>
              </div>
              <div class="submitBox">
                     <input id="search_submit" type="submit" name="" value="提交查询">
                     <div class="info">
                            自2013年9月1日起本中心出具的检验报告，可根据报告
                            底部给出的查询密码使用本查询验证报告的完整内容。
                     </div>
              </div>
         </form>
     </div>   
     <div class="typeResult resultWrap" style="">
         <h4 class="title">报验结果</h4>
         <table class="resultTable">
             <tr class="tableRow">
                 <td class="un-block-1">报告编号</td>
                 <td class="un-block-2"><span id="numberno">3113117183</span></td>
             </tr>
             <tr class="tableRow ">
                 <td class="un-block-1">检测进度</td>
                 <td class="un-block-2">
                    <div class="state"><i class="iconfont icon-check"></i><span id="schedule">已检毕</span></div>

                 </td>
             </tr>
             <tr class="tableRow">
                 <td class="un-block-1">报告概况</td>
                 <td class="info un-block-2">
                    <p>送检客户名称：<span id="customer">福州市XXXXXXXX有限公司</span></p>
                    <p>样品名称：<span id="sample">XXXXXXXXXXXXXX</span></p>
                    <p>受理日期：<span id="accept_date">2016-12-12</span></p>
                    <p>预计检毕日期：<span id="predict_date">2017-01-01</span></p>
                    <p>实际检毕日期：<span id="reality_date">2017-01-01</span></p>
                 </td>
             </tr>
             <tr class="tableRow">
                 <td class="un-block-1 ">报告下载</td>
                 <td class="un-block-2 ">
                    <div class="pdf-downLoad ">
                          <a><i class="iconfont icon-download"></i>PDF下载</a>
                    </div>
                 </td>
             </tr>
         </table>
     </div>
     <div class="typeResult1" style="display:none"></div>
     <script type="text/javascript">
                              $(function(){
                                  

                                  //提交查询
                                   $("#search_submit").click(function(){
                                      var number = $("#number").val();
                                      var password = $("#password").val();
                                      $.ajax({
                                         type: "POST",
                                         url: "/index.php?c=inquiry&m=query_result",
                                         data: {'number':number,'password':password},
                                         dataType: "JSON",
                                         success: function(data){
                                          if(data==null){ 
                                            $(".typeResult").hide();
                                            $(".typeResult1").show().html('没有对应查询编号。');
                                          }else{ 
                                            $(".typeResult1").hide();
                                            $(".typeResult").show();
                                            $("#customer").html(data['CLIENT']);
                                            $("#numberno").html(data['NO']);
                                            $("#sample").html(data['GOODS_NAME']);
                                            $("#accept_date").html(data['DATE_RECORD']);
                                            $("#predict_date").html(data['DATE_DEMAND']);
                                            if(data.LAST_TEST_CHECK_DATE){ //已检毕
                                              if(data['APPLY_PASSWORD']){ //有查询密码
                                                $(".pdf-downLoad").removeClass("gray");
                                                $(".pdf-downLoad a").attr("href","./index.php?c=inquiry&m=downloadReportFile&filename="+data['RPT_NAMES']);
                                              }else{
                                                $(".pdf-downLoad").addClass("gray");
                                                $(".pdf-downLoad a").removeAttr("href");
                                              }
                                              $("#reality_date").html(data['LAST_TEST_CHECK_DATE']);
                                              $("#schedule").html("已检毕");
                                            }else if(data.DATE_RPT_CHECK){ //已签发
                                              $(".pdf-downLoad").addClass("gray");
                                              $(".pdf-downLoad a").removeAttr("href");
                                              $(".state i").removeClass().addClass("iconfont icon-tuding ");
                                              $("#schedule").html("已签发");
                                            }else if(data.DATE_RECORD){ //受理中
                                              $(".pdf-downLoad").addClass("gray");
                                              $(".pdf-downLoad a").removeAttr("href");
                                              $(".state i").removeClass().addClass("iconfont icon-time ");
                                              $("#schedule").html("已受理");
                                            }
                                          }
                                        }
                                     });
                                  })
                              })
                          </script>   
</div>

<!-- END  ************************************************************-->
<?php include 'foot.html' ?> 