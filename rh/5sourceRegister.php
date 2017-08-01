<?php include './head.html' ?>
    <div class="header10">
        <ul class=" type1">
            <li>
                <div class="inner">
                    易货展示
                </div>
            </li>
            <li class="on">
                <div class="inner">
                    货源登记
                </div>
            </li>
            <li>
                <div class="inner">
                    易货成交
                </div>
            </li>
        </ul>
    </div><!-- header10 type1 -->

    <div class="srWrapper">
        <form enctype="multipart/form-data">
            <div class="form5 bg-white">
                <ul>
                    <li class="form-row">
                        <div class="un-block-1">
                            您的姓名 
                        </div>
                        <div class="un-block-2">
                            <input type="" name="" placeholder="请输入您的姓名">
                        </div>
                    </li>
                    <li class="form-row">
                        <div class="un-block-1">
                            联系方式
                        </div>
                        <div class="un-block-2">
                            <input type="" name="" placeholder="请输入您的联系方式">
                        </div>
                    </li>
                    <li class="form-row">
                        <div class="un-block-1">联系地址</div>
                        <div class="un-block-2">
                            <input type="" name="" placeholder="请输入您的联系地址">
                        </div>
                    </li>
                    <li class="form-row">
                        <div class="un-block-1">货物名称</div>
                        <div class="un-block-2">
                            <input type="" name="" placeholder="请输入您的货物名称">
                        </div>
                    </li>
                                 
                    <li class="form-row">
                        <div class="un-block-1">
                            货物图片
                        </div>
                        <div class="un-block-2 uploadBlock">
                            <div class="row-block">
                                <div class="inner">
                                    <label >
                                        <div class="uploadBtn">
                                            <input type="file" name="">
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div class="row-block">
                                <div class="inner">
                                    <label >
                                        <div class="uploadBtn">
                                            <input type="file" name="">
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="form-row">
                        <div class="un-block-1">产地</div>
                        <div class="un-block-2">
                            <input type="" name="" placeholder="请输入产地">
                        </div>
                    </li>
                    <li class="form-row">
                        <div class="un-block-1">等级</div>
                        <div class="un-block-2">
                            <input type="" name="" placeholder="请输入等级">
                        </div>
                    </li>
                    <li class="form-row">
                        <div class="un-block-1">包装</div>
                        <div class="un-block-2">
                            <input type="" name="" placeholder="请输入包装">
                        </div>
                    </li>
                    <li class="form-row">
                        <div class="un-block-1">生产日期</div>
                        <div class="un-block-2">
                            <input type="" name="" placeholder="请输入生产日期">
                        </div>
                    </li>
                    <li class="form-row">
                        <div class="un-block-1">质保期</div>
                        <div class="un-block-2">
                            <input type="" name="" placeholder="请输入质保期">
                        </div>
                    </li>
                    <li class="form-row">
                        <div class="un-block-1">
                            质量证书
                        </div>
                        <div class="un-block-2 uploadBlock">
                            <div class="row-block">
                                <div class="inner">
                                    <label >
                                        <div class="uploadBtn">
                                            <input type="file" name="">
                                        </div>
                                    </label>
                                </div>
                            </div>
                            
                        </div>
                    </li>
                    <li class="form-row">
                        <div class="un-block-1">产品描述</div>
                        <div class="un-block-2">
                            <input type="" name="" placeholder="请输入产品描述">
                        </div>
                    </li>
                    <li class="form-row">
                        <div class="un-block-1">易货意向</div>
                        <div class="un-block-2">
                            <input type="" name="" placeholder="请输入易货意向">
                        </div>
                    </li>
                     <li class="form-row">
                        <div class="un-block-1">参考价格</div>
                        <div class="un-block-2">
                            <input type="" name="" placeholder="参考价格">
                        </div>
                    </li>
                </ul>
            </div>
        

        <div class="buttonWrapper">
        <a><button type="submit" class="button1 bg-red" >
            在线预定
        </button>
        </a>
        </div>
        </form> 
    </div>  
</body>
<script type="text/javascript">
    +function(){
        getUpload(".form5 input[type='file']")
    }()
</script>
</html>