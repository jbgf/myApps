<?php include 'head.html' ?>
    <div class="innerbanner" style="background:url(img/banner01.png) center center ">
        <div class="container1200"><div class="iText">About FQII</div></div>

    </div>
    <div class="centerMiddle container1200">
        <div class="center_innerWrapper">
            <div class="leftSide">

                <div class="sideBar03">
                    <div class="sb_brand">About FQII</div>
                    <ul class="sideBar_ul level1">
                        <li class="sideBar_li ">
                            <a class="sideBar_a ">
                                <p>
                                
                                <span class="icontext">Introduction</span>
                                </p>
                            </a>
                        </li>
                        <li class="sideBar_li on">
                            <a class="sideBar_a ">
                                <p>
                                
                                <span class="icontext">Development</span>
                                </p>
                            </a>
                        </li>
                        <li class="sideBar_li">
                            <a class="sideBar_a">
                                <p>
                                    <span class="icontext">Core Value of FQII</span>
                                </p>
                            </a>
                        </li>
                        <li class="sideBar_li ">
                            <a class="sideBar_a">
                                <p>
                                    <span class="icontext">Bases of FQII</span>
                                </p>
                            </a>    
                        </li>
                        <li class="sideBar_li ">
                            <a class="sideBar_a">
                                <p>
                                    
                                    <span class="icontext">FQII Qualifications</span>
                                </p>
                            </a>
                            
                        </li>
                        
                        <li class="sideBar_li">
                            <a class="sideBar_a">
                                <p>
                                    
                                    <span class="icontext">Organization Structure</span>
                                </p>
                            </a>
                        </li>
                        <li class="sideBar_li">
                            <a class="sideBar_a">
                                <p>
                                    
                                    <span class="icontext">Contact us</span>
                                </p>
                            </a>
                        </li>
                    </ul>
                    
                </div>
            </div>
            <div class="rightContent">
                <div class="news_h02">
                    <div class="h-title01 float-l">
                        <span class="text"> Introduction </span>
                    </div>
                    <span class="r-link float-r">
                        <a class="link"> Home</a>
                        <a class="link"> About FQII</a>
                        <a class="link on">Introduction</a>
                    </span>
                      
                </div>
                
                
                <div class="commonWrapper">
                    <div class="addWrapper">
                        <div id="addRow" class="">
                            <div class="row-block">
                                <div class="inner">
                                    <div class="border">
                                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                                        <p>Fuzhou Base</p>
                                        <p class="addInfo">
                                            ADD
                                            <br/> Hill Road,No. 121,Yang Qiao Road, Hongshan Town,Fuzhou City 
                                            <br/>TEL：0591-00000000
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row-block">
                                <div class="inner">
                                    <div class="border active">
                                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                                        <p>Fuzhou Base</p>
                                        <p class="addInfo">
                                            ADD
                                            <br/>Innovation Road 101,Mawei, Fuzhou City 
                                            <br/>TEL：0591-00000000
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row-block">
                                <div class="inner">
                                    <div class="border">
                                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                                        <p>Fuzhou Base</p>
                                        <p class="addInfo">
                                            ADD
                                            <br/> Hill Road,No. 121,Yang Qiao Road, Hongshan Town,Fuzhou City 
                                            <br/>TEL：0591-00000000
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="map_wrapper">
                        <div style="width:885px;height:550px;border:#ccc solid 1px;font-size:12px" id="map"></div> 
                        <style type="text/css">
                            .anchorBL{display:none;}
                        </style> 
                        <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=bT5d3SyGp0VfmwROzCumXsl551zI7WcD"></script>
                          <script type="text/javascript">
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
                              map.centerAndZoom(new BMap.Point(mapItem.x,mapItem.y),17);
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
                              for (var i = mapArr.length - 1; i >= 0; i--) {
                                    addLabel(mapArr[i]);   
                              }
                              function addLabel(mapItem){
                                      var point = new BMap.Point(mapItem.x,mapItem.y);
                                      var myLabel = new BMap.Label("<a style='color:red;text-decoration:none' ></a>",     
                                        {offset:new BMap.Size(-0,-0),                 
                                        position:point});                                //label的位置
                                        myLabel.setStyle({                                   
                                            fontSize:"14px",               //字号
                                            border:"0",                    //边
                                            height:"34px",                //高度
                                            width:"21px",                 //宽
                                            textAlign:"center",            //文字水平居中显示
                                            lineHeight:"1",            //行高，文字垂直居中显示
                                            background:"url(img/marker.png) no-repeat",    //背景图片，这是房产标注的关键！
                                            cursor:"pointer"
                                        });  
                                      map.addOverlay(myLabel);
                              }
                            }
                            //向地图添加控件
                            function addMapControl(){
                              var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
                              scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
                              map.addControl(scaleControl);
                              /*var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:0});
                              map.addControl(navControl);*/
                            }
                            var map;
                            
                                
                            var ll_arr = [
                                            {x:119.275963,y:26.077501},
                                            {x:119.412048,y:26.028132},
                                            {x:119.291849,y:26.08726}
                                         ];
                                initMap();

                                var all = $("#addRow .border");
                                $("#addRow .border").click(function(){
                                    
                                    var index = all.index($(this));
                                    centerMap(ll_arr[index]);

                                    all.removeClass("active");
                                    $(this).toggleClass("active");
                                })
                                
                          </script>

                        </div>
                    </div>
                </div> 

                
            </div>  
        </div>
    </div>

<?php include 'foot.html' ?>