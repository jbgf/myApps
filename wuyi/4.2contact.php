<?php include 'head.html' ?>
<div class="banner" style="background:url(img/banner1.jpg) center center no-repeat"></div>
  <div class="container1200">
    
    <div class="leftSideBarWrapper">
      <div class="leftSideBarWrapper-left">
        <div class="l-sider01">
            <div class="brand bg-green">
                <p class="title">走进新区</p>
                <span class="text">Walk into the New District</span>
            </div>
            <!-- current 表示页面载入时激活的项 -->
            <ul class="sideBar02 sideBar_ul ">
                
                <li class="sideBar_li">
                  <a class="floor sideBar_a"><p class="t01">IQTC服务指南</p></a>
                  <ul class="sideBar_ul hide ">
                      <li class="sideBar_li ">
                          <a class="floor sideBar_a current"><p class="t01">1</p></a>
                      </li>
                      <li class="sideBar_li"><a class="floor sideBar_a "><p class="t01">2</p></a></li>
                  </ul>
                </li>
                <li class="sideBar_li">
                  <a class="floor sideBar_a"><p class="t01">投资环境</p></a>
                  <ul class="sideBar_ul hide ">
                      <li class="sideBar_li ">
                          <a class="floor sideBar_a"><p class="t01">1</p></a>
                      </li>
                      <li class="sideBar_li"><a class="floor sideBar_a "><p class="t01">2</p></a></li>
                  </ul>
                </li>
                <li class="sideBar_li"><a class="floor sideBar_a "><p class="t01">常见问题</p></a></li>
            </ul>
            <div class="border"><img src="img/border.png"></div>
        </div>
      </div>
      <div class="leftSideBarWrapper-right">
           <div class="header08 clear">
                <span class="h-title01">联系我们</span>
                <div class="more float-r">你的位置：<a>网站首页</a> > <a>联系我们</a> </div>
           </div>
           <div class="lsbw-bottom">
                <div class="contactBox">
                   <div class="header10"><span class="title">中国·福建武夷新区管理委员会</span></div>
                   <div class="map_wrapper" style="padding:25px 0;">
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
                                            "img/marker.png", 
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
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                    地址：福建省南平市建阳市嘉禾大道（童子山立交桥旁）
                               </div>
                          </div>
                       </li>
                       <li class="row-block">
                          <div class="inner">
                               <div class="ciBlock">
                                    <i class="fa fa-phone-square" aria-hidden="true"></i>
                                    电话：0599-5671026　　0599-8292111
                               </div>
                          </div>
                       </li>
                       <li class="row-block">
                          <div class="inner">
                               <div class="ciBlock">
                                    <i class="fa fa-fax" aria-hidden="true"></i>
                                    传真：0599-5671178
                               </div>
                          </div>
                       </li>
                       <li class="row-block">
                          <div class="inner">
                               <div class="ciBlock">
                                    <i class="fa fa-paper-plane" aria-hidden="true"></i>
                                    
                                    e-mail：zsjggyx@163.com
                               </div>
                          </div>
                       </li>
                       <li class="row-block">
                          <div class="inner">
                               <div class="ciBlock">
                                    <i class="fa fa-edge" aria-hidden="true"></i>
                                    网址：www.wyxq.gov.cn
                               </div>
                          </div>
                       </li>
                       <li class="row-block">
                          <div class="inner">
                               <div class="ciBlock">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                    邮编：354200
                               </div>
                          </div>
                       </li>

                   </ul>
                </div>
                
               
           </div>
           
      </div>
    </div>
  </div>

<?php include 'foot.html' ?>