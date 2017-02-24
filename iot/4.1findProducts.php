<?php include './common/head.html' ?>
 
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
        <div>
           
            <div class="middle_part ">
                <div class="contentWrapper">
                    <div class="right_linkBar_wrapper " >
                        <div class="right_linkBar_up container1200">
                            <div class="left_product">
                                <div class="product_banner">
                                    <img src="img/product_pic.png">
                                </div>
                                <div class="products_catagory">
                                    <div class="catagory_wrapper">
                                        <div class="title">应用类别</div>
                                        <div class="catagory-list">
                                            <ul class="row">
                                                <li class="row-block "><div class="inner">智慧工业                                  </div></li>
                                                <li class="row-block"><div class="inner">智慧农业</div></li>
                                                <li class="row-block "><div class="inner">节能环保</div></li>
                                                <li class="row-block"><div class="inner">商贸流通</div></li>
                                                <li class="row-block "><div class="inner">交通能源</div></li>
                                                <li class="row-block "><div class="inner">公共安全</div></li>
                                                <li class="row-block"><div class="inner">社会事业</div></li>
                                                <li class="row-block"><div class="inner">城市管理</div></li>
                                                <li class="row-block"><div class="inner">安全生产</div></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="catagory_item ">
                                        <ul class="catagory_item_switch">
                                            
                                            <li>
                                                <ul class="catagory_item_ul">
                                                    <li><a>智慧工业</a></li>
                                                    <li><a>智慧农业</a></li>
                                                    <li><a>节能环保</a></li>
                                                    <li><a>商贸流通</a></li>
                                                    <li><a>交通能源</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <ul class="catagory_item_ul">
                                                    <li><a>2</a></li>
                                                    
                                                </ul>
                                            </li>
                                            <li>
                                                <ul class="catagory_item_ul">
                                                    <li><a>3</a></li>
                                                    
                                                </ul>
                                            </li>
                                            <li>
                                                <ul class="catagory_item_ul">
                                                    <li><a>4</a></li>
                                                    
                                                </ul>
                                            </li>
                                            <li>
                                                <ul class="catagory_item_ul">
                                                    <li><a>5</a></li>
                                                    
                                                </ul>
                                            </li>
                                            <li>
                                                <ul class="catagory_item_ul">
                                                    <li><a>6</a></li>
                                                    
                                                </ul>
                                            </li>
                                            <li>
                                                <ul class="catagory_item_ul">
                                                    <li><a>7</a></li>
                                                    
                                                </ul>
                                            </li>
                                            <li>
                                                <ul class="catagory_item_ul">
                                                    <li><a>8</a></li>
                                                    
                                                </ul>
                                            </li>
                                            <li>
                                                <ul class="catagory_item_ul">
                                                    <li><a>9</a></li>
                                                    
                                                </ul>
                                            </li>
                                        </ul>
                                        <script type="text/javascript">
                                        var index = 0;
                                        var activeClassName = "on";
                                        var pluginClassName = "active";
                                        var flag = false;
                                            $(".catagory-list li").each(function(i,e){
                                                $(this).hasClass(activeClassName)
                                                ?(index = i,flag = true)
                                                :"";

                                            });
                                            
                                            jQuery(".products_catagory").slide({mainCell:".catagory_item_switch",titCell:".catagory-list li",defaultIndex:index,titOnClassName:pluginClassName});

                                            if(!flag){
                                                var citem = $(".catagory_item");
                                                citem.addClass("novis");
                                               
                                                $(".catagory-list li").on("mouseenter",function(){
                                                    citem.addClass("onhover");
                                                })
                                                $(".products_catagory").on("mouseleave",function(){
                                                    citem.removeClass("onhover");
                                                })
                                                
                                            }
                                                 
                                        </script>
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="right_linkBar">
                                <ul class="linkBar_ul">
                                    <li>
                                        <a class="wrapper">
                                        <div class="brand_img">
                                            <div class="full"><img class="" src="img/brand02.jpg"></div>
                                            
                                        </div>
                                        <p>华为技术有限公司</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="wrapper"><div class="brand_img">
                                            <img class="" src="img/icon_brand.png">
                                            
                                        </div>
                                        <p>华为技术有限公司</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="wrapper"><div class="brand_img">
                                            <img class="" src="img/icon_brand.png">
                                            
                                        </div>
                                        <p>华为技术有限公司</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="wrapper"><div class="brand_img">
                                            <img class="" src="img/icon_brand.png">
                                            
                                        </div>
                                        <p>华为技术有限公司</p>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div class="product_box">
                            <div class="container1200">
                            <div class="product_content">
                                <ul class=" row">
                                    <li class="row-block">
                                        <div class="inner">
                                            <div class="product_innerbox shadow">
                                                <div class="imgBox"><img src="img/product01.png"></div>
                                                <div class="textBox">
                                                    <div class="textinner">
                                                        <div class="textLine">
                                                           
                                                            
                                                            <div class="tips float-l">
                                                                <p>中柏金属双系统</p>
                                                                
                                                            </div>    
                                                        </div>
                                                        <div class="tagLine">
                                                            <img src="img/tagIcon.png">
                                                            <a>科技</a><a>机械</a><a>综合</a><a>活动</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="row-block">
                                        <div class="inner">
                                            <div class="product_innerbox shadow">
                                                <div class="imgBox"><img src="img/product01.png"></div>
                                                <div class="textBox">
                                                    <div class="textinner">
                                                        <div class="textLine">
                                                           
                                                            <span class="name"> 
                                                                <img src="img/icon06.png">智慧农业
                                                            </span>
                                                            <div class="tips float-r">
                                                                <p>中柏金属双系统</p>
                                                                <p>笔记本平板</p>
                                                            </div>    
                                                        </div>
                                                        <div class="tagLine">
                                                            <img src="img/tagIcon.png">
                                                            <a>科技</a><a>机械</a><a>综合</a><a>活动</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="row-block">
                                        <div class="inner">
                                            <div class="product_innerbox shadow">
                                                <div class="imgBox"><img src="img/product01.png"></div>
                                                <div class="textBox">
                                                    <div class="textinner">
                                                        <div class="textLine">
                                                           
                                                            <span class="name"> 
                                                                <img src="img/icon06.png">智慧农业
                                                            </span>
                                                            <div class="tips float-r">
                                                                <p>中柏金属双系统</p>
                                                                <p>笔记本平板</p>
                                                            </div>    
                                                        </div>
                                                        <div class="tagLine">
                                                            <img src="img/tagIcon.png">
                                                            <a>科技</a><a>机械</a><a>综合</a><a>活动</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="row-block">
                                        <div class="inner">
                                            <div class="product_innerbox shadow">
                                                <div class="imgBox"><img src="img/product01.png"></div>
                                                <div class="textBox">
                                                    <div class="textinner">
                                                        <div class="textLine">
                                                           
                                                            <span class="name"> 
                                                                <img src="img/icon06.png">智慧农业
                                                            </span>
                                                            <div class="tips float-r">
                                                                <p>中柏金属双系统</p>
                                                                <p>笔记本平板</p>
                                                            </div>    
                                                        </div>
                                                        <div class="tagLine">
                                                            <img src="img/tagIcon.png">
                                                            <a>科技</a><a>机械</a><a>综合</a><a>活动</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="row-block">
                                        <div class="inner">
                                            <div class="product_innerbox shadow">
                                                <div class="imgBox"><img src="img/product01.png"></div>
                                                <div class="textBox">
                                                    <div class="textinner">
                                                        <div class="textLine">
                                                           
                                                            <span class="name"> 
                                                                <img src="img/icon06.png">智慧农业
                                                            </span>
                                                            <div class="tips float-r">
                                                                <p>中柏金属双系统</p>
                                                                <p>笔记本平板</p>
                                                            </div>    
                                                        </div>
                                                        <div class="tagLine">
                                                            <img src="img/tagIcon.png">
                                                            <a>科技</a><a>机械</a><a>综合</a><a>活动</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>    
                            </div>
                            <div class="pagination02" data-type="pagination">
                                       
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
        
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

<?php include './common/foot.html' ?>    