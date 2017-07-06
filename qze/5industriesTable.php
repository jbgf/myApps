<?php include 'head.html' ?>

   <div class="container1140">
        <div class="middlePart ">
             <div class="header04">
                 <div class="url">
                     您现在的位置首页：首页 > 泉州产业概况
                 </div>
                 <div class="h-title01">
                     <div class="text">泉州产业概况</div>
                 </div>
             </div> 
             <div class="mainLrWrapper">
                  <div class="header07">
                      产业数据报表
                  </div>
                  <form class="">
                      <div class="form1">
                          <div class="form-row">
                              <div class="un-block-1">
                                  从业人员末期人数（个）：
                              </div>
                              <div class="un-block-2">
                                  <input type="text" name="" class="baseInput">
                              </div>
                          </div>

                          <div class="form-row">
                              <div class="un-block-1">
                                  上年同期从业人数期末人数（个）：
                              </div>
                              <div class="un-block-2">
                                  <input type="text" name="" class="baseInput">
                              </div>
                          </div>

                          <div class="form-row h-auto" style="padding:10px 0;">
                              <div class="un-block-1">
                                  上年同期从业人数期末人数（个）：
                              </div>
                              <div class="un-block-3">
                                  <div id="checkWrapper" class="checkWrapper">
                                      <label>
                                          <input type="checkbox" name="">
                                          <span>智慧云服务</span>
                                      </label>
                                      <label>
                                          <input type="checkbox" name="">
                                          <span>文创媒体</span>
                                      </label>
                                      <label>
                                          <input type="checkbox" name="">
                                          <span>农业互联网</span>
                                      </label>

                                      <label>
                                          <input type="checkbox" name="">
                                          <span>智慧云服务</span>
                                      </label>
                                      <label>
                                          <input type="checkbox" name="">
                                          <span>文创媒体</span>
                                      </label>
                                      <label>
                                          <input type="checkbox" name="">
                                          <span>农业互联网</span>
                                      </label>

                                  </div>
                              </div>
                          </div>

                          <div class="form-row">
                              <div class="un-block-1">
                                  电子商务销售金额（千元）：
                              </div>
                              <div class="un-block-2">
                                  <input type="text" name="" class="baseInput">
                              </div>
                          </div>

                          <div class="form-row">
                              <div class="un-block-1">
                                  上年同期电子商务销售金额（千元）：
                              </div>
                              <div class="un-block-2">
                                  <input type="text" name="" class="baseInput">
                              </div>
                          </div>

                          <div class="form-row">
                              <div class="un-block-1">
                                  签订合同金额合计（千元）：
                              </div>
                              <div class="un-block-2">
                                  <input type="text" name="" class="baseInput">
                              </div>
                          </div>


                          <div class="form-row">
                              <div class="un-block-1">
                                  上年同期签订合同金额（千元）：
                              </div>
                              <div class="un-block-2">
                                  <input type="text" name="" class="baseInput">
                              </div>
                          </div>

                          <div class="form-row">
                              <div class="un-block-1">
                                  执行合同金额（千元）：
                              </div>
                              <div class="un-block-2">
                                  <input type="text" name="" class="baseInput">
                              </div>
                          </div>

                          <div class="form-row">
                              <div class="un-block-1">
                                  上年同期执行合同金额（千元）：
                              </div>
                              <div class="un-block-2">
                                  <input type="text" name="" class="baseInput">
                              </div>
                          </div>

                          <div class="form-row h-auto" style="padding-bottom: 20px">
                              <div class="un-block-1"></div>
                              <div class="un-block-2">
                                  <input type="submit" name="" class="" value="提交">
                              </div>
                          </div>
                      </div>
                  </form>
             </div>
        </div>
   </div>
    
  <script type="text/javascript">
      window.onload = function(){
          var labels = $("#checkWrapper label");
          var nums = labels.length;
          labels.each(function(i,e){
              var nth = i + 1;
                  if(nth>0 && nth%3==0 && nth<nums){
                      $(e).after("<br>");
                      console.log(nth)
                  }
          })
      }
</script>      

<?php include 'foot.html' ?>     