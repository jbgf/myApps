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
        <div class="avatarBgPlaceholder"></div>

        <form enctype="multipart/form-data">

            <div class="form5 bg-white">
                <div class="align-center">
                    <div class="avatar4 uploadBtn" >
                        <input type="file" name="">
                    </div>
                    <script type="text/javascript">
                        +function(){
                            getUpload(".avatar4 input[type='file']")
                        }()
                    </script> <!-- avatar4 end -->
                </div>
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
                            籍         贯
                        </div>
                        <div class="un-block-2">
                            <input type="text" name="" placeholder="请输入籍贯">
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
                            学历
                        </div>
                        <div class="un-block-2">
                            <input type="text" name="" placeholder="请输入学历">
                        </div>
                    </li>
                    <li class="form-row">
                        <div class="un-block-1">
                            院校
                        </div>
                        <div class="un-block-2">
                            <input type="text" name="" placeholder="请输入院校">
                        </div>
                    </li>
                    <li class="form-row">
                        <div class="un-block-1">
                            专业
                        </div>
                        <div class="un-block-2">
                            <input type="text" name="" placeholder="请输入学科专业">
                        </div>
                    </li>
                    <li class="form-row">
                        <div class="un-block-1">
                            毕业时间
                        </div>
                        <div class="un-block-2">
                            <input type="text" name="" placeholder="请输入毕业时间">
                        </div>
                    </li>
                    <li class="form-row">
                        <div class="un-block-1">
                            从业时间
                        </div>
                        <div class="un-block-2">
                            <input type="text" name="" placeholder="请输入从业时间">
                        </div>
                    </li>
                    <li class="form-row">
                        <div class="un-block-1">
                            擅长风格
                        </div>
                        <div class="un-block-2">
                            <input type="text" name="" placeholder="请输入擅长风格">
                        </div>
                    </li>
                    <li class="form-row">
                        <div class="un-block-1">设计工费</div>
                        <div class="un-block-2">
                            <div class="inputSet1">
                                
                                <div class="dpart" style="color:#000">
                                    <input type="text" style="border:none" name="">元 / 天
                                </div>
                            </div>  <!-- inputSet1 end -->
                            
                        </div>
                    </li>
                    <li class="form-row">
                        <div class="un-block-1">工种</div>
                        <div class="un-block-2 designTypeRow">
                            <label>
                                <input class="checkBox" type="radio" name="">CAD图
                            </label>
                            <label>
                                <input class="checkBox" type="radio" name="">效果图
                            </label>
                            <label>
                                <input class="checkBox" type="radio" name="">施工工艺
                            </label>
                            <label>
                                <input class="checkBox" type="radio" name="">材料知识
                            </label>
                            <label>
                                <input class="checkBox" type="radio" name="">独立签单
                            </label>
                            <label>
                                <input class="checkBox" type="radio" name="">实习生
                            </label>
                        </div>
                    </li>
                                 
                   
                    <li class="form-row">
                        <div class="un-block-1">个人简介</div>
                        <div class="un-block-2">
                            <textarea type="text" name="" placeholder="请输入个人简介" rows="5">
                            </textarea>
                        </div>
                    </li>
                    
                </ul>
            </div>
        

        <div class="buttonWrapper">
        <a><button type="submit" class="button1 bg-red" >
            提交信息
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