<?php include './head.html' ?>    <!-- 联系我们 -->
<div class="mainBody">
    <div id="webContainerBox" class="webContainerBox">
         <div id="webModuleContainer" class="webModuleContainer">
              <div id='module308'  class='form Handle  formStyle6 ' _autoHeight='1' _height='0'>
                    <div class='formBannerTitle formBannerTitle308'>

                        <div class='titleCenter titleCenter308'>
                            <div class='titleText titleText308'><div class='titleTextIcon icon-titleText'>&nbsp;</div><div class='textContent'>联系我们</div>
                            </div>
                            <div class='formBannerMore formBannerMore308'>
                                <a class='titleMoreLink titleMoreLink308' href=/nr.jsp?moduleId=308>
                                    <span class='titleMoreIcon icon-titleMore titleMoreIcon308'>&nbsp;</span>
                                </a>
                            </div>
                        </div>
                    </div>   <!-- 标题 -->

                    <div class='formMiddle formMiddle308'>
                    <div class='middleCenter middleCenter308'>
                        <div class='formMiddleContent formMiddleContent308 moduleContent'>
                            <div class="mainContent bg-white">
                                 <div class="header10"><span class="title">中国·福建武夷新区管理委员会</span></div>
                                 <div class="map_wrapper" style="padding-bottom:10px;">
                                      <div style="width:100%;height:265px;border:#ccc solid 1px;font-size:12px" id="map"></div> 
                                      <style type="text/css">
                                          .anchorBL{display:none;}
                                          .BMapLabel{display: none!important;}
                                      </style> 
                                      <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=bT5d3SyGp0VfmwROzCumXsl551zI7WcD"></script>
                                        <script type="text/javascript">
                                          var map;
                                          var ll_arr = [
                                                          {x:118.107726,y:27.373567}
                                                       ];
                                              initMap();
                                          //创建和初始化地图函数：
                                          function initMap(){
                                            createMap();//创建地图
                                            centerMap(ll_arr[0]);
                                            setMapEvent();//设置地图事件
                                            addMapControl();//向地图添加控件
                                            addMapOverlay(ll_arr);//向地图添加覆盖物
                                          }
                                          function createMap(){ 
                                            map = new BMap.Map("map"); 
                                            
                                          }
                                          function centerMap(mapItem){ 
                                            map.centerAndZoom(new BMap.Point(mapItem.x,mapItem.y),15);   //缩放级别
                                          }
                                          function setMapEvent(){
                                            map.enableScrollWheelZoom();
                                            map.enableKeyboard();
                                            map.enableDragging();
                                            map.enableDoubleClickZoom()
                                          }
                                          function addClickHandler(target,window){
                                            target.addEventListener("click",function(){
                                              target.openInfoWindow(window);
                                            });
                                          }
                                          function addMapOverlay(mapArr){
                                              var icon = {w:21,h:34};
                                              for (var i = mapArr.length - 1; i >= 0; i--) {
                                                    
                                                    var cod = mapArr[i];
                                                    var point = new BMap.Point(cod.x,cod.y);
                                                    var iconImg = createIcon(icon);
                                                    var marker = new BMap.Marker(point,{icon:iconImg});
                                                    map.addOverlay(marker);
                                                    
                                              }
                                                  function createIcon(json){
                                                      var icon = new BMap.Icon(
                                                          "image/marker.png", 
                                                          new BMap.Size(json.w,json.h),
                                                          {
                                                              /*anchor控制偏移坐标点相对图片左上角的偏移，offset不管用*/
                                                              anchor:new BMap.Size(json.w/2,json.h)
                                                          }
                                                      )
                                                      return icon;
                                                  }

                                          }
                                          //向地图添加控件
                                          function addMapControl(){
                                            var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
                                            scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
                                            map.addControl(scaleControl);
                                           
                                          }
                                          

                                              
                                              
                                        </script>

                                 </div>
                                 <ul class="contactInfo">
                                     <li class="row-block">
                                        <div class="inner">
                                             <div class="ciBlock">
                                                <div class="ciBlock-left">
                                                  <i class="iconfont icon-llcouponsupportedshopaddress" aria-hidden="true"></i>
                                                </div>
                                                <div class="ciBlock-right">
                                                  地址：福建省南平市建阳市嘉禾大道（童子山立交桥旁）
                                                </div>
                                             </div>
                                        </div>
                                     </li>
                                     <li class="row-block">
                                        <div class="inner">
                                             <div class="ciBlock">
                                                <div class="ciBlock-left">  
                                                  <i class="iconfont icon-lianxifangshi" aria-hidden="true"></i>
                                                </div>
                                                <div class="ciBlock-right">  
                                                  电话：0599-5671026　　0599-8292111
                                                </div>
                                             </div>
                                        </div>
                                     </li>
                                     <li class="row-block">
                                        <div class="inner">
                                             <div class="ciBlock">
                                                <div class="ciBlock-left">
                                                  <i class="iconfont icon-fax1" aria-hidden="true"></i>
                                                </div>
                                                <div class="ciBlock-right">  
                                                  传真：0599-5671178
                                                </div>
                                             </div>
                                        </div>
                                     </li>
                                     <li class="row-block">
                                        <div class="inner">
                                             <div class="ciBlock">
                                                <div class="ciBlock-left">
                                                  <i class="iconfont icon-email1" style="" aria-hidden="true"></i>
                                                </div>
                                                <div class="ciBlock-right">  
                                                  e-mail：zsjggyx@163.com
                                                </div>
                                             </div>
                                        </div>
                                     </li>
                                     <li class="row-block">
                                        <div class="inner">
                                             <div class="ciBlock">
                                                <div class="ciBlock-left">
                                                  <i class="iconfont icon-internet" aria-hidden="true"></i>
                                                </div>
                                                <div class="ciBlock-right">
                                                  网址：www.wyxq.gov.cn
                                                </div>
                                             </div>
                                        </div>
                                     </li>
                                     <li class="row-block">
                                        <div class="inner">
                                             <div class="ciBlock">
                                                <div class="ciBlock-left">
                                                  <i class="iconfont icon-svg17" aria-hidden="true"></i>
                                                </div>
                                                <div class="ciBlock-right">
                                                  邮编：354200
                                                </div>
                                             </div>
                                        </div>
                                     </li>

                                 </ul>
                            </div>
                    
                        </div>
                    </div>
                    </div>
              </div>
         </div>
    </div>
</div>
<?php include './foot.html' ?>