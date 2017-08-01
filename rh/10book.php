<?php include './head.html' ?>
    <div class="header10">
        <ul class="type2">
            <li>
                <div class="inner">
                    装修需求
                </div>
            </li>
            <li>
                <div class="inner">
                    工人需求
                </div>
            </li>
            <li class="on">
                <div class="inner">
                    设计需求
                </div>
            </li>
            <li>
                <div class="inner">
                    装修贷款
                </div>
            </li>
        </ul>
    </div><!-- header10 type2 -->
    <div class="idWrapper">
       
        <form enctype="multipart/form-data">

            <div class="form5">
                
                <ul>
                       
                    <li class="form-row">
                        <div class="un-block-1">
                            您的姓名 
                        </div>
                        <div class="un-block-2">
                            <input type="text" name="" placeholder="请输入您的姓名">
                        </div>
                    </li>
                    <li class="form-row">
                        <div class="un-block-1">
                            联系方式
                        </div>
                        <div class="un-block-2">
                            <input type="text" name="" placeholder="请输入联系方式">
                        </div>
                    </li>
                    <li class="form-row">
                        <div class="un-block-1">
                            联系方式
                        </div>
                        <div class="un-block-2">
                            <input type="text" name="" placeholder="请输入联系方式">
                        </div>
                    </li>
                    <li class="form-row">
                        <div class="un-block-1">
                            联系地址
                        </div>
                        <div class="un-block-2">
                            <input type="text" name="" placeholder="请输入联系地址">
                        </div>
                    </li>
                    <li class="form-row">
                        <div class="un-block-1">
                            项目类型
                        </div>
                        <div class="un-block-2">
                            <input type="text" name="" placeholder="请输入项目类型">
                        </div>
                    </li>
                    <li class="form-row">
                        <div class="un-block-1">
                            工量预计
                        </div>
                        <div class="un-block-2">
                            <input type="text" name="" placeholder="请输入预计工程量">
                        </div>
                    </li>
                    <li class="form-row">
                        <div class="un-block-1">
                            施工时间
                        </div>
                        <div class="un-block-2">
                            <input type="text" name="" placeholder="请输入施工时间">
                        </div>
                    </li>
                    <li class="form-row">
                        <div class="un-block-1">所需工种</div>
                        <div class="un-block-2 book">
                            <div class="inputSet1 ">
                                <label>
                                    水工
                                </label>
                                <div class="dpart">
                                    <input type="text" name="">个
                                </div>
                                <div class="dpart">
                                    <input type="text" name="">天
                                </div>
                            </div>  <!-- inputSet1 end -->
                            <div class="inputSet1">
                                <label>
                                    木工
                                </label>
                                <div class="dpart">
                                    <input type="text" name="">个
                                </div>
                                <div class="dpart">
                                    <input type="text" name="">天
                                </div>
                            </div>  <!-- inputSet1 end -->
                            <div class="inputSet1">
                                <label>
                                    瓦工
                                </label>
                                <div class="dpart">
                                    <input type="text" name="">个
                                </div>
                                <div class="dpart">
                                    <input type="text" name="">天
                                </div>
                            </div>  <!-- inputSet1 end -->
                        </div>
                    </li>
                    
                    
                </ul>
            </div>
        

        <div class="buttonWrapper" style="margin:2rem auto;">
        <a><button type="submit" class="button1 bg-red" >
            提交信息
        </button>
        </a>
        </div>
        </form>

        <div class="bg-white">
            <div class="header08Wrapper">
                <div class="header08 color">
                     <div class="title float-r">
                       <i class="iconfont icon-triangle-copy red"></i>
                       <span class="text">参考标准</span>
                     </div>
                </div><!-- header08 end -->
            </div>
            <div class="">
                <ul class="list16" style="padding-bottom: 2rem;">
                    <li class="clear">
                        <div class="float-l">水工：</div>
                        <div class="float-r"><span class="red">100.00</span>元/日工</div>
                    </li>
                    <li class="clear">
                        <div class="float-l">木工：</div>
                        <div class="float-r"><span class="red">100.00</span>元/日工</div>
                    </li>
                </ul>
            </div>

        </div>

        

    </div>  
</body>
<script type="text/javascript">
    +function(){
        getUpload(".form5 input[type='file']")
    }()
</script>
</html>