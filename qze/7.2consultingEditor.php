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
                  
                  <form class="">
                      <div class="form2">

                          <div class="form-row">
                              <div class="un-block-1">
                                  标题： 
                              </div>
                              <div class="un-block-2">
                                  <input type="text" name="" class="baseInput">
                              </div>
                          </div>

                          <div class="form-row h-auto" style="padding:10px 0;">
                              <div class="un-block-1">
                                  内容：  
                              </div>
                              <div class="un-block-3">
                                  编辑器
                              </div>
                          </div>
                          

                          <div class="form-row h-auto" style="padding-bottom: 20px">
                              <div class="un-block-1"></div>
                              <div class="un-block-3">
                                  <input type="submit" name="" class="" value="提 交">
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