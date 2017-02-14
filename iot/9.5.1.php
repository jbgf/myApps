<?php include './common/head.html' ?>

<!-- 多级联动js -->        
        <script type="text/javascript" src="js/jquery.cxselect.js"></script>
<!-- validate start -->
        <script type="text/javascript" src="js/jquery.validate.js"></script>
    
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
        <div class="p_banner middleTable" style="background:url(img/member_banner02.jpg) center center">
            <div class="middleRow">
                <div class="banner_inner">
                        <div class="avatarWrapper white">
                            <div class="avatar01 mar-center">
                                <img class="full circle" src="img/icon27.png">
                                <div class="member abs">
                                    <img src="img/icon26.png">
                                </div>
                            </div>
                            <p class="name align-center bigSize font-weight">华为科技有限公司</p>
                            <p class="intro mar-center align-left">企业会员，痛客平台在与痛客进行充分沟通后， 根据痛客平台专业操作，对痛点进行分解和定义的文档。</p>
                        </div>
                </div>    
            </div>
        </div>
        <div class="member_url align-center">
            <div class="row mediumSize">
                <div class="row-block">
                    <div class="inner"><a class="t">完善资料</a></div>
                </div>
                <div class="row-block ">
                    <div class="inner"><a class="t">修改密码</a></div>
                </div>
                <div class="row-block on">
                    <div class="inner"><a class="t">发布企业产品</a></div>
                </div>
                <div class="row-block ">
                    <div class="inner"><a class="t">发布痛点</a></div>
                </div>
                <div class="row-block ">
                    <div class="inner"><a class="t">发布创业项目</a></div>
                </div>
                <div class="row-block ">
                    <div class="inner"><a class="t">用户认证</a></div>
                </div>
            </div>
        </div>
        <div class="middle_part ">
            <div class="contentWrapper">
               <div class="bg-cyan">
                   <div class="container1200 ">
                   <div class="container_margin">
                     <div class="solution_tab float-l">
                         <div class="row">
                                <ul>
                                    <li class="row-block">
                                        <a class="inner on" href="">发布的产品(<span class="num">0</span>)</a>
                                    </li>
                                    <li class="row-block ">
                                        <a class="inner  new" href="">发布的新闻(<span class="num">1</span>)</a>
                                    </li>
                                    

                                </ul>    
                         </div>
                         
                     </div>
                     <div class="clear"></div>
                     <div class="s_container bg-white">
                         <div class="released_row">
                            <div class="selectRow">
                                <select class="c1 s01" data-required="false" data-first-title="一级分类">
                                    
                                    
                                </select>
                                <select class="c2 s01" data-required="false" data-first-title="二级分类">
                                    
                                    
                                </select>
                                <a class=" search displayBlock  align-center float-l bg-blue"><img class="vm" src="img/icon_03.png"></a>  
                            </div>
                            <script type="text/javascript">
                              $(function(){
                                
                                  $(".selectRow").cxSelect({
                                    url: 'common/test.json',               
                                    selects: ['c1', 'c2'],  
                                    
                                  });
                              })
                            </script>
                            <a class="create_btn bg-orange white displayBlock align-center mediumSize float-r">
                              <i class="iconfont bigSize">&#xe658;</i>发布产品
                            </a>
                         </div>
                         <div class="clear"></div>
                         <div class="bountyForm form03">
                                    <div class="b_title bg-blue white align-center">
                                        <div class="col un-block-1">ID</div>
                                        <div class="col un-block-2 align-left">
                                          <div class="inner">产品标题</div>
                                        </div>
                                        <div class="col un-block-3 ">产品分类</div>
                                        <div class="col un-block-4 "><span class="range">排序</span></div>
                                        <div class="col un-block-5">显示</div>
                                        <div class="col un-block-6">操作</div>
                                        
                                    </div>
                                    <div class="bf_wrapper bg-white">
                                        <div class="bf_line">
                                              <div class="b_row align-center clear ">
                                                  <div class="col un-block-1">
                                                      888
                                                  </div>
                                                  <div class="col un-block-2 align-left">
                                                    <div class="inner">
                                                    <div class="h">京蒙探索精准扶贫新模式精准扶贫新模式</div>
                                                    
                                                    </div>
                                                  </div>
                                                  <div class="col un-block-3 align-center">
                                                      <div class="tag iBlock">
                                                        <ul class="ul02 clear white">
                                                             <li class="pnav_li pnav_li_03"><a>
                                                                  <span>IT</span>
                                                                  <span>通信</span>
                                                                  <span>电子</span>
                                                             </a></li>
                                                             <li class="pnav_li pnav_li_03"><a><span>建筑业</span></a></li>
                                                             <li class="pnav_li pnav_li_03"><a><span>金融业</span></a></li>
                                                             
                                                        </ul>
                                                    </div>
                                                  </div>
                                                  <div class="col un-block-4">
                                                      75
                                                  </div>
                                                  <div class="col un-block-5 align-center">
                                                      <img src="img/icon31.png">
                                                  </div>
                                                  <div class="col un-block-6 align-center">
                                                      <p class="text iBlock">
                                                        <a href="#" class="operationBtn orange">修改</a>
                                                        <a href="#" class="operationBtn ">删除</a>
                                                      </p>
                                                     
                                                  </div>
                                              </div>
                                             
                                        </div>
                                        <div class="bf_line">
                                              <div class="b_row align-center clear ">
                                                  <div class="col un-block-1">
                                                      888
                                                  </div>
                                                  <div class="col un-block-2 align-left">
                                                    <div class="inner">
                                                    <div class="h">京蒙探索精准扶贫新模式精准扶贫新模式</div>
                                                    
                                                    </div>
                                                  </div>
                                                  <div class="col un-block-3 align-center">
                                                      <div class="tag iBlock">
                                                        <ul class="ul02 clear white">
                                                             <li class="pnav_li pnav_li_03"><a>
                                                                  <span>IT</span>
                                                                  <span>通信</span>
                                                                  <span>电子</span>
                                                             </a></li>
                                                             <li class="pnav_li pnav_li_03"><a><span>建筑业</span></a></li>
                                                             <li class="pnav_li pnav_li_03"><a><span>金融业</span></a></li>
                                                             
                                                        </ul>
                                                    </div>
                                                  </div>
                                                  <div class="col un-block-4">
                                                      75
                                                  </div>
                                                  <div class="col un-block-5 align-center">
                                                      <img src="img/icon31.png">
                                                  </div>
                                                  <div class="col un-block-6 align-center">
                                                      <p class="text iBlock">
                                                        <a href="#" class="operationBtn orange">修改</a>
                                                        <a href="#" class="operationBtn ">删除</a>
                                                      </p>
                                                     
                                                  </div>
                                              </div>
                                             
                                        </div>
                                        <div class="bf_line">
                                              <div class="b_row align-center clear ">
                                                  <div class="col un-block-1">
                                                      888
                                                  </div>
                                                  <div class="col un-block-2 align-left">
                                                    <div class="inner">
                                                    <div class="h">京蒙探索精准扶贫新模式精准扶贫新模式</div>
                                                    
                                                    </div>
                                                  </div>
                                                  <div class="col un-block-3 align-center">
                                                      <div class="tag iBlock">
                                                        <ul class="ul02 clear white">
                                                             <li class="pnav_li pnav_li_03"><a>
                                                                  <span>IT</span>
                                                                  <span>通信</span>
                                                                  <span>电子</span>
                                                             </a></li>
                                                             <li class="pnav_li pnav_li_03"><a><span>建筑业</span></a></li>
                                                             <li class="pnav_li pnav_li_03"><a><span>金融业</span></a></li>
                                                             
                                                        </ul>
                                                    </div>
                                                  </div>
                                                  <div class="col un-block-4">
                                                      75
                                                  </div>
                                                  <div class="col un-block-5 align-center">
                                                      <img src="img/icon32.png">
                                                  </div>
                                                  <div class="col un-block-6 align-center">
                                                      <p class="text iBlock">
                                                        <a href="#" class="operationBtn orange">修改</a>
                                                        <a href="#" class="operationBtn ">删除</a>
                                                      </p>
                                                     
                                                  </div>
                                              </div>
                                             
                                        </div>
                                       

                                        <div class="pagination02 align-center" data-type="pagination">
                                        
                                            <ul>
                                                <li class="left"><a>上一页</a></li>
                                                <li class=""><a>1</a></li>
                                                <li class=""><a>2</a></li>
                                                <li class="on"><a>3</a></li>
                                                <li class=""><a>4</a></li>
                                                <li class=""><a>5</a></li>
                                                <li class="ellipsis"><a>···</a></li>
                                                <li class="last"><a>末页</a></li>
                                                <li class="right"><a>下一页</a></li>

                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div>
                     </div>
                   </div>  
                   </div>
               </div>
            </div>
        </div>

<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

<?php include './common/foot.html' ?>  