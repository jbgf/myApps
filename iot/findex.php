<?php include './common/head.html' ?>
    	<script type="text/javascript">
        	$(function(){
        		var c = function(){
        			
          		    jQuery("#textTab02").slide({mainCell:".bd ul",titCell:".hd li"}); 

          		    jQuery(".application_zone").slide({mainCell:".bd ul.app_ul",titCell:".hd li"}); 
           
          		    jQuery("#textTab03").slide({mainCell:".bd ul",titCell:".hd li" }); 
               
					jQuery(".creator_slide .creator_inner_slide").slide({mainCell:"ul",vis:4,prevCell:".sprev",nextCell:".snext",effect:"leftLoop"})
					
					jQuery(".creator_slide").slide({mainCell:".creator_li_ul",vis:3,titCell:".creator_title li"})

	    			$(".cooperate_link img").addClass("grayfilter").hover(
	    				function(){
	    				$(this).removeClass("grayfilter")
	    			},
	    				function(){$(this).addClass("grayfilter")
	    			})
		    		
        		}
        		/*commonHead(c);*/c();
        	})
        </script>

    	<!-- slide start -->
			
	    <div class="slideBox slideBox01" >
	          <div class="hd">
	            <ul>
	              <li><a></a></li>
	              <li><a></a></li>
	              <li><a></a></li>
	              <li><a></a></li>
	            </ul>
	          </div>
	          <div class="bd">
	            <ul>
	              <li><a href="#" target="_blank" style="background:url(img/slider01.jpg) center center no-repeat"></a></li>
	              <li><a href="#" target="_blank" style="background:url(img/slider01.jpg) center center no-repeat"></a></li>
                  <li><a href="#" target="_blank" style="background:url(img/slider01.jpg) center center no-repeat"></a></li>
                  <li><a href="#" target="_blank" style="background:url(img/slider01.jpg) center center no-repeat"></a></li>
	            </ul>
	          </div>
	    </div>
		
    	<!-- slide end -->
        
    	<div class="iot_content container1200">
		    <!-- TAG line start  -->                         
		        <div class="iot_content_row">
					<div class="sbcontent02 clear">
			              <div class="abtn-wrapper on">
			              	<div class="abtn-inner">
			              	<div class="bg">
			              	<a class="a02-btn btn01">
			              		<i class="iconfont">&#xe700;</i>
			              		<p>中心概况</p>
			              	</a>
			              	</div>
			              	</div>
			              </div>
			              <div class="abtn-wrapper ">
			              	<div class="abtn-inner">
			              	<div class="bg">
			              	<a class="a02-btn btn01">
			              		<i class="iconfont">&#xe716;</i>
			              		<p>最新公告</p>
			              	</a>
			              	</div>
			              	</div>
			              </div>
			              <div class="abtn-wrapper ">
			              	<div class="abtn-inner">
			              	<div class="bg">
			              	<a class="a02-btn btn01">
			              		<i class="iconfont">&#xe63c;</i>
			              		<p>我要发布产品</p>
			              	</a>
			              	</div>
			              	</div>
			              </div>
			              <div class="abtn-wrapper ">
			              	<div class="abtn-inner">
			              	<div class="bg">
			              	<a class="a02-btn btn01">
			              		<i class="iconfont">&#xe6d0;</i>
			              		<p>痛点悬赏</p>
			              	</a>
			              	</div>
			              	</div>
			              </div>
			              <div class="abtn-wrapper ">
			              	<div class="abtn-inner">
			              	<div class="bg">
			              	<a class="a02-btn btn01">
			              		<i class="iconfont">&#xe658;</i>
			              		<p>发布痛点</p>
			              	</a>
			              	</div>
			              	</div>
			              </div>
			              <div class="abtn-wrapper ">
			              	<div class="abtn-inner">
			              	<div class="bg">
			              	<a class="a02-btn btn01">
			              		<i class="iconfont">&#xe66e;</i>
			              		<p>成为创客</p>
			              	</a>
			              	</div>
			              	</div>
			              </div>
			              <div class="abtn-wrapper ">
			              	<div class="abtn-inner">
			              	<div class="bg">
			              	<a class="a02-btn btn01">
			              		<i class="iconfont">&#xe6c4;</i>
			              		<p>联系我们</p>
			              	</a>
			              	</div>
			              	</div>
			              </div>
			              <div class="abtn-wrapper ">
			              	<div class="abtn-inner">
			              	<div class="bg">
			              	<a class="a02-btn btn01">
			              		<i class="iconfont">&#xe6a8;</i>
			              		<p>在线留言</p>
			              	</a>
			              	</div>
			              	</div>
			              </div>
			              
			        </div>
		        </div>    

		                
		    <!-- TAG line end  --> 
		    <!-- login row start  -->
		    	<div class="iot_content_row row01">
		    		<div class="iot_content_inner">
			    		<div class="iot_left height_f">
				    		<div class="picScroll04 slideBox03 newsBox n-pic">
					            <div class="hd">
					              <ul>
					                <li><a>1</a></li>
					                <li><a>2</a></li>
					                <li><a>3</a></li>
					              </ul>
					            </div>
					            <div class="bd">
					                <ul>
					                  <li>
					                      <a href="#" target="_blank"><img src="img/n-pic.png">
					                      </a>
					                  </li>
					                  <li>
					                      <a href="#" target="_blank"><img src="img/n-pic.png">
					                      </a>
					                  </li>
					                  <li>
					                      <a href="#" target="_blank"><img src="img/n-pic.png">
					                      </a>
					                  </li>
					                </ul>
					            </div>
					        </div>	
					    </div>
					    <div class="iot_right iot_right01 height_d">
					    	
			                <div class="loginZone ">
			                    	<h4 class="title title01 blue bg-lightGray align-center"><img class="icon" src="img/icon_04.png">会员登录</h4>
			                        <form class="login-form" action="" method="post">
			                            <div class="form-row ">
			                            	<input type="text" class="input-base uname" id="user" name="username" placeholder="用户名">
			                            </div>
			                            <div class="form-row ">
			                            	<input type="password" class="input-base pword " name="password" placeholder="密码">
			                            </div>
			                            
			                            <div class="form-row ">
			                            	<div class="verifyRow">
				                            	<input type="text" class="input-base m-b verifyInput" name="password" placeholder="验证码">
				                            	<a class="verifyImg">
				                                    <img src="img/verifyimage.png">
				                                </a>
			                                </div>
			                            </div>
			                             
			                            <button id="submit" name="submit" class="login button">立即登录</button>
			                            <p class="quick_sign_up align-right">没有账户？<a class="orange">快速注册</a></p>
			                        </form>
			                    
			                </div>
<!-- 新增 登录状态 -->			                
			                <div class="loginZone hide">
			                    	<h4 class="title title01 blue bg-lightGray align-center"><img class="icon" src="img/icon_04.png">会员登录</h4>
			                        <div class="bg relative">
			                        	<img class="full" src="img/logined.jpg">
			                        	<div class="absfull">
			                        		<div class="avatarWrapper ">
	                                            <div class="avatar mar-center">
	                                                <img class="circle" src="img/avatar.png">
	                                            </div>
	                                            <p class="name align-center mediumSize">欢迎你！丁礼文</p>

                                            </div>
                                            <a class="btn_ath white align-center mediumSize bg-orange displayBlock mar-center">用户认证 </a>
                                            <p class="logOut align-center">
                                            <a href="" class="smallSize blue">退出登录</a>
                                            </p>
			                        	</div>
			                        </div>
			                    
			                </div>
<!-- 新增 登录状态 end-->				            
					    </div>
				    </div>
		    	</div>
			      
		           
		    
		    <!-- login row end  -->
		    <!-- news line start -->
		    	<div class="iot_content_row row02">
		    		<div class="iot_content_inner">
			    		<div id="textTab02" class="iot_left height_d clear">
			    				<div class="news_h">
			    					<div class="h-title01 float-l">
										<span class="icon"><img src="img/icon_05.png"></span>
										<span class="text">新闻资讯 </span>
									</div>
					    			<div class="hd h-relative float-r">
										<ul>
											<li class="relative_link divider"><a >最新动态</a></li>
											<li class="relative_link divider"><a >行业快讯</a></li>
											<li class="relative_link divider"><a >公告通知</a></li>
										</ul>
									</div>
									
					    		</div>
					    		
					    				
					    		<!--新闻tab切换 start-->                               
			                       <div  class="slideTxtBox  case02" >
			                            
			                            <div class="bd">
			                              <ul class="switch">
			                                <li class="switch-li">
			                                      <div class="textTab01">
				                                      <div class="s-general">
					                                      <p class="stb-text">第六届中国国际服务外包交易博览会...</p>
					                                      <p class="stb-text02">8月29日下午，中国国际投资促进会与杭州市商务委员会在北京中关村软件园联合召开了第六促进会与杭州市商务委员会在北促进会与杭州市商务委员会在北...<a class="button blue">[详情]</a></p>
				                                      </div>
				                                      <div class="news-list01">
				                                          <ul>
				                                              <li>
				                                              	
				                                              	<a class="ellipsis float-l">
                                                                2014年度上海市服务贸易发展专项资展专项资展专项资展专项资展专项资金申
                                                                </a>
                                                                <span class="date blue">2017-01-25</span>  
				                                              </li>
                                                              <li>
                                                                
                                                                <a class=" float-l">
                                                                <span class="ellipsis">2014年度上海市服务贸易发展专项资展专项资展专项资展专项资展专项资金申 </span>
                                                                </a>
                                                                <span class="date blue">2017-01-25</span>  
                                                              </li>
                                                              <li>
                                                                
                                                                <a class=" float-l">
                                                                <span class="ellipsis">2014年度上海市服务贸易发展专项资展专项资展专项资展专项资展专项资金申 </span>
                                                                </a>
                                                                <span class="date blue">2017-01-25</span>  
                                                              </li>
                                                              <li>
                                                                
                                                                <a class=" float-l">
                                                                <span class="ellipsis">2014年度上海市服务贸易发展专项资展专项资展专项资展专项资展专项资金申 </span>
                                                                </a>
                                                                <span class="date blue">2017-01-25</span>  
                                                              </li>
				                                              

				                                          </ul>  
				                                      </div>
			                                      </div>
			                                      <div class="newsTab01_pic">
								    					<img class="full" src="img/newsTab01_pic.png">
								    			  </div>

			                                </li>
			                                <li class="switch-li">2 </li>
			                                <li class="switch-li"> 3</li>
			                              </ul>
			                              
			                            </div>
			                        </div>
			            		<!--新闻tab切换 end-->
							    		
				              
			    		</div>
<!-- 新增 顺序修改 -->			    		
			    		<div class="iot_right height_f i_white">
			    				
			    				<a class="serviceBtn bg-l-blue"><i class="iconfont">&#xe7d9;</i><span>入会邀请函</span></a>
			    				<a class="serviceBtn bg-l-green"><i class="iconfont">&#xe666;</i><span>下载中心</span></a>
			    				<a class="serviceBtn bg-orange"><i class="iconfont">&#xe66d;</i><span>中心服务</span></a>
			    		</div>
<!-- 新增 顺序修改 end -->			    		
			    	</div>
		    		
		    	</div>
		    <!-- news line end -->
        	
        	<!-- banner ad line start -->

		    <div class="banner_row middleTable" style="">	
		    	<img src="img/innerBanner06.jpg">
		    	<a class="text middleRow align-center zindex relative white">
		    			<p>第二届全球智慧城市(福州)高峰论坛</p>
		    			<p>暨百城百企经济技术合作会议</p>
		    	</a>
		    </div>
		    <!-- banner ad line end -->
        </div>

        <div class="application_zone titleColor ">
        	<div class="container1200 clear">

        		<div class="hd cell-l float-l">
        			<div class="inner">	
	        			<div class=" title bigSize blue">互联网产品应用</div>
	        			<ul>
	        				<li class="on"><a>智慧工业</a></li>
	        				<li><a> 智慧农业</a></li>
	        				<li><a> 节能环保</a></li>
	        				<li><a> 商贸流通</a></li>
	        				<li><a> 交通能源</a></li>
	        				<li><a> 公共安全</a></li>
	        				<li><a> 社会事业</a></li>
	        				<li><a> 城市管理</a></li>
	        				<li><a> 安全生产</a></li>
	        			</ul>
        			</div>
        		</div>
        		<div class="cell-r float-l">
        			<div class="bd inner">	
        				<ul class="app_ul">
        					<li>
        					<div class="title mediumSize">主要是传感器，云平台等物联网技术在传统农业上的运用，通过移动平台或者电脑平台对农业生产进行控制，做到精确感知、精准操作、精细管理</div>
        					<div class=" row">
        						<ul>
        							<li class="row-block">
        								<a class="inner">
        								<div class="rb_box">
        									<div class="imgbox"><img class="" src="img/boxpic01.png"> </div>
        									<div class="text">畜牧物联网管理系统 畜牧物联网</div>
        								</div>
        								</a>
        							</li>
        							<li class="row-block">
        								<div class="inner">
        								<div class="rb_box">
        									<div class="imgbox"><img class="" src="img/boxpic01.png"> </div>
        									<div class="text">畜牧物联网管理系统 畜牧物联网</div>
        								</div>
        								</div>
        							</li>
        							<li class="row-block">
        								<div class="inner">
        								<div class="rb_box">
        									<div class="imgbox"><img class="" src="img/boxpic01.png"> </div>
        									<div class="text">畜牧物联网管理系统 畜牧物联网</div>
        								</div>
        								</div>
        							</li>
        							<li class="row-block">
        								<div class="inner">
        								<div class="rb_box">
        									<div class="imgbox"><img class="" src="img/boxpic01.png"> </div>
        									<div class="text">畜牧物联网管理系统 畜牧物联网</div>
        								</div>
        								</div>
        							</li>
        						</ul>
        					</div>
        					</li>
        					<li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li>

        				</ul>
        			</div>	
        		</div>
    				
        	</div>	
        </div>
        
 		<div class="content_down">
 			<div class="container1200">
 			<!-- 申报项目等 start-->	
		    	<div class="iot_content_row row03 ">
		    		<div class="iot_content_inner">
		    <!-- textTab03 轮播 start -->
			    		<div id="textTab03" class="iot_left height_f clear">
			    				<div class="news_h">
			    					
					    			<div class="hd h-relative float-l">
										<ul>
											<li class="relative_link"><a >申报项目</a></li>
											<li class="relative_link"><a >申报项目</a></li>
											<li class="relative_link"><a >企业动态</a></li>
											
										</ul>
									</div>
									
					    		</div>
					    		
					    		                         
			                       <div  class="slideTxtBox  " >
			                            
			                            <div class="bd">
			                              <ul class="switch">
			                                <li class="switch-li">
			                                      <div class="">
				                                      <div class="s-general">
				                                      	  <div class="newsTab02_pic">
										    					<img src="img/newsTab01_pic.png">
										    			  </div>
										    			  <div class="textTab02">
										    			  		<p class="stb-text">第六届中国国际服务外包交易博览会...</p>
					                                      <p class="stb-text02">8月29日下午，中国国际投资促进会与杭州市商务委员会在北京中关村软件园联合召开了第六促进会与杭州市商务委员会在北促进会与杭州市商务委员会在北...<a class="button blue">[详情]</a></p>
										    			  

										    			  </div>	
					                                      
				                                      </div>
				                                      <div class="news-list01">
				                                          <ul>
				                                              <li>
				                                              	<a class="t blue float-l">最新政策</a>
				                                              	<a class="divider float-l"><span class="text">2014年度上海市服务贸易发展专项资金申 </span>  </a>
				                                              	<span class="date">[6-16]</span>
				                                              </li>
				                                              <li>
				                                              	<a class="t blue float-l">行业展会</a>
				                                              	<a class="divider float-l"><span class="text">2014年度上海市服务贸易发展专项资金申 </span>  </a>
				                                              	<span class="date">[6-16]</span>
				                                              </li>
				                                              <li>
				                                              	<a class="t blue float-l">行业展会</a>
				                                              	<a class="divider float-l"><span class="text">2014年度上海市服务贸易发展专项资金申 </span>  </a>
				                                              	<span class="date">[6-16]</span>
				                                              </li>
				                                              <li>
				                                              	<a class="t blue float-l">行业展会</a>
				                                              	<a class="divider float-l"><span class="text">2014年度上海市服务贸易发展专项资金申 </span>  </a>
				                                              	<span class="date">[6-16]</span>
				                                              </li>
				                                              <li>
				                                              	<a class="t blue float-l">行业展会</a>
				                                              	<a class="divider float-l"><span class="text">2014年度上海市服务贸易发展专项资金申 </span>  </a>
				                                              	<span class="date">[6-16]</span>
				                                              </li>
				                                              

				                                          </ul>  
				                                      </div>
			                                      </div>
			                                      

			                                </li>
			                                <li class="switch-li">2 </li>
			                                <li class="switch-li"> 3</li>
			                              </ul>
			                              
			                            </div>
			                        </div>
			            		
							    		
				              
			    		</div>
			<!-- textTab03 轮播 end -->
			    		<div class="iot_right height_d ">
			    				<div class="news_h">
			    					<div class="h-title01 float-l">
										<span class="icon"><img src="img/icon_05.png"></span>
										<span class="text">专家团队 </span>
									</div>
					    			<a class="float-r">MORE+</a>
									
					    		</div>
					    		<div class="team">

					    			<div class="floor">
										<div class="specialist">
							                  <div class="a01-img float-l"><img src="img/n-pic02.png"></div>
							                  <div class="a01-text">
							                    <p class="a01-title">
<!-- 新增 将专家改为姓名+ 头衔 -->							                    
							                    <span class="bigSize orange">刘海涛</span>
							                    <span class="gray smallSize" style="margin-left:1px;">博士</span></p>
<!-- 新增 将专家改为姓名+ 头衔 end-->							                    
							                    <p class="a01-text02">中国国际投资促进会与杭州市商务委员会在北京中关村软件园联合召开了第六届中...</p>
							                  </div>
							            </div>
					    			</div>
					    			
					    			<div class="floor">
										<div class="specialist">
							                  <div class="a01-img float-l"><img src="img/n-pic02.png"></div>
							                  <div class="a01-text">
							                    <p class="a01-title">
							                    <span class="bigSize orange">刘海涛</span>
							                    <span class="gray smallSize" style="margin-left:1px;">博士</span></p>
							                    <p class="a01-text02">中国国际投资促进会与杭州市商务委员会在北京中关村软件园联合召开了第六届中...</p>
							                  </div>
							            </div>
					    			</div>
					    			<div class="floor">
										<div class="specialist">
							                  <div class="a01-img float-l"><img src="img/n-pic02.png"></div>
							                  <div class="a01-text">
							                    <p class="a01-title">
							                    <span class="bigSize orange">刘海涛</span>
							                    <span class="gray smallSize" style="margin-left:1px;">博士</span></p>
							                    <p class="a01-text02">中国国际投资促进会与杭州市商务委员会在北京中关村软件园联合召开了第六届中...</p>
							                  </div>
							            </div>
					    			</div>
					    		</div>
			    		</div>
			    	</div>
		    		
		    	</div>
		    	
		    <!-- 申报项目等 end-->

		    
 			</div>
 			<!-- 创客空间 start -->
				<div class="creatorZone relative">
					<div class="absfull">
						<div class="creator_slide container1200">
							<div class="creator_title ">
								<p class="blue">创客空间</p>
								<ul>
									<li>热门痛点</li>
									<li>创业精英         </li>
									<li>众创空间</li>
								</ul>
							</div>
							<div class="bd creator_li">
								<ul class="creator_li_ul">
									<li>
										<div class="creator_inner_slide">
											<div class="direction">
												<div class="sprev directionBtn"><i class="iconfont">&#xe61f;</i></div>
												<div class="snext directionBtn"><i class="iconfont">&#xe624;</i></div>
											</div>
											<div class="gallary">
												<div class="bd row">
												<ul>
        											<li class="row-block">
        												<div class="inner">
        												<div class="imgbox">
        													<img class="full" src="img/cr_slide.jpg">
        												</div>
        												<div class="textbox ">
        													<p class="">搭建能同时带动多个头显 设备使用的VR+云服务...</p>
        												</div>
        												</div>
        											</li>
        											<li class="row-block">
        												<div class="inner">
        												<div class="imgbox">
        													<img class="full" src="img/cr_slide.jpg">
        												</div>
        												<div class="textbox ">
        													<p class="">搭建能同时带动多个头显 设备使用的VR+云服务...</p>
        												</div>
        												</div>
        											</li>
        											<li class="row-block">
        												<div class="inner">
        												<div class="imgbox">
        													<img class="full" src="img/cr_slide.jpg">
        												</div>
        												<div class="textbox ">
        													<p class="">搭建能同时带动多个头显 设备使用的VR+云服务...</p>
        												</div>
        												</div>
        											</li>
        											<li class="row-block">
        												<div class="inner">
        												<div class="imgbox">
        													<img class="full" src="img/cr_slide.jpg">
        												</div>
        												<div class="textbox ">
        													<p class="">搭建能同时带动多个头显 设备使用的VR+云服务...</p>
        												</div>
        												</div>
        											</li>
        										</ul>
        										</div>
        										
											</div>
										</div>
									</li>
									<li>2</li>
									<li>3</li>

								</ul>
							</div>
							
						</div>
					</div>
					<img class="full" src="img/creator_bg.jpg">
				</div>
		    <!-- 创客空间 end -->

		    <!-- 合作共赢 start -->
		    	<div class="cooperateZone">
		    		<div class="container1200">
			    		<div class="header_center clear">
			    			<div class="float-l left"></div>
			    			<div class="float-l center">
			    				<div class="inner">
			    					<div class="center_top">合作共赢</div>
			    					<div class="center_down">Cooperation</div>
			    				</div>
			    			</div>
			    			<div class="float-l right"></div>
			    		</div>	
			    		<div class="co_slide">

					    	<ul class="co_ul">	
					    		<li class="li_page">
						    		<div class="cooperate_link">
						    			<div class=" row">
			        						<ul>
			        							<li class="row-block">
			        								<a class="inner">
			        									<img class="absCenter" src="img/co01.png">
			        								</a>
			        							</li>
			        							<li class="row-block">
			        								<a class="inner">
			        									<img class="absCenter" src="img/co01.png">
			        								</a>
			        							</li>
			        							<li class="row-block">
			        								<a class="inner">
			        									<img class="absCenter" src="img/co01.png">
			        								</a>
			        							</li>
			        							<li class="row-block">
			        								<a class="inner">
			        									<img class="absCenter" src="img/co01.png">
			        								</a>
			        							</li>
			        							<li class="row-block">
			        								<a class="inner">
			        									<img class="absCenter" src="img/co01.png">
			        								</a>
			        							</li>
			        							<li class="row-block">
			        								<a class="inner">
			        									<img class="absCenter" src="img/co01.png">
			        								</a>
			        							</li>
			        							<li class="row-block">
			        								<a class="inner">
			        									<img class="absCenter" src="img/co01.png">
			        								</a>
			        							</li>
			        							<li class="row-block">
			        								<a class="inner">
			        									<img class="absCenter" src="img/co01.png">
			        								</a>
			        							</li>
			        							<li class="row-block">
			        								<a class="inner">
			        									<img class="absCenter" src="img/co01.png">
			        								</a>
			        							</li>
			        							<li class="row-block">
			        								<a class="inner">
			        									<img class="absCenter" src="img/co01.png">
			        								</a>
			        							</li>
			        							<li class="row-block">
			        								<a class="inner">
			        									<img class="absCenter" src="img/co01.png">
			        								</a>
			        							</li>
			        							<li class="row-block">
			        								<a class="inner">
			        									<img class="absCenter" src="img/co01.png">
			        								</a>
			        							</li>
			        							<li class="row-block">
			        								<a class="inner">
			        									<img class="absCenter" src="img/co01.png">
			        								</a>
			        							</li>
			        							<li class="row-block">
			        								<a class="inner">
			        									<img class="absCenter" src="img/co01.png">
			        								</a>
			        							</li>
			        							<li class="row-block">
			        								<a class="inner">
			        									<img class="absCenter" src="img/co01.png">
			        								</a>
			        							</li>
			        							<li class="row-block">
			        								<a class="inner">
			        									<img class="absCenter" src="img/co01.png">
			        								</a>
			        							</li>
			        							<li class="row-block">
			        								<a class="inner">
			        									<img class="absCenter" src="img/co01.png">
			        								</a>
			        							</li>
			        							<li class="row-block">
			        								<a class="inner">
			        									<img class="absCenter" src="img/co01.png">
			        								</a>
			        							</li>
			        						</ul>
			        					</div>
			        					
						    		</div>
					    		</li>

					    		
					    	
					    	</ul>
					    	<div class="hd">
					    		<ul>
					    			<li></li>
					    			<li></li>
					    		</ul>
					    	</div>
					    	<script type="text/javascript">
					    		$(function(){
					    			var rowNum = 6,
					    				e_page = rowNum *2,
					    				
					    				targetWrapper = $(".li_page").eq(0);
					    			
					    			var lis = $(".cooperate_link li"),
					    				pageNum = Math.ceil(lis.length / e_page);

					    			lis.each(function(i,e){
					    				var curpage = Math.floor(i/e_page) + 1;

					    				if(curpage > 1){
					    					$(e).appendTo(targetWrapper.find("ul"))
					    				}
					    				if((i + 1 ) % e_page == 0){

					    					var page = $('<li class="li_page"><div class="cooperate_link"><div class="row"><ul></ul></div></div></li>');

					    					$(".co_ul").append(page);

					    					targetWrapper = $(".li_page").eq(curpage);
					    				}
					    			})

					    			$(".li_page .inner").each(function(i,e){
					    				if( (i+1) % rowNum == 0 ){$(e).addClass("rowLast")}
					    				if((i+1)>rowNum){$(e).addClass("rowTwo")}
					    			});


					    			jQuery(".co_slide").slide({mainCell:"ul.co_ul",titCell:".hd li"}); 
					    		})
					    		
					    	</script>	
			    		</div>

		    		</div>
		    		
		    	</div>
		    <!-- 合作共赢 end -->
 		</div>
 		
<?php include './common/foot.html' ?>		
 	
    