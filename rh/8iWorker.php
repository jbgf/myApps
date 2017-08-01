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
                        <div class="un-block-1">工         种</div>
                        <div class="un-block-2">
                            <div class="inputSet1">
                                <label>
                                    <input class="checkBox" type="radio" name="">水工
                                </label>
                                <div class="dpart">
                                    <input type="text" name="">元 / 天
                                </div>
                            </div>  <!-- inputSet1 end -->
                            <div class="inputSet1">
                                <label>
                                    <input class="checkBox" type="radio" name="">木工
                                </label>
                            </div>  <!-- inputSet1 end -->
                            <div class="inputSet1">
                                <label>
                                    <input class="checkBox" type="radio" name="">瓦工
                                </label>

                                <div class="dpart">
                                    <input type="text" name="">元 / 天
                                </div>
                            </div>  <!-- inputSet1 end -->
                            <div class="inputSet1">
                                <label>
                                    <input class="checkBox" type="radio" name="">电工
                                </label>
                            </div>
                            <div class="inputSet1">
                                <label>
                                    <input class="checkBox" type="radio" name="">油工
                                </label>
                            </div>
                            <div class="inputSet1">
                                <label>
                                    <input class="checkBox" type="radio" name="">杂工
                                </label>
                            </div>
                        </div>
                    </li>
                    <li class="form-row">
                        <div class="un-block-1">施工户数</div>
                        <div class="un-block-2">
                            <input type="text" name="" placeholder="请输入您的施工户数">
                        </div>
                    </li>
                                 
                    
                    
                    <li class="form-row">
                        <div class="un-block-1">从业时间</div>
                        <div class="un-block-2">
                            <input type="text" name="" placeholder="请输入从业时间">
                        </div>
                    </li>
                    <li class="form-row">
                        <div class="un-block-1">您的地址</div>
                        <div class="un-block-2">
                            <input type="text" name="" placeholder="请输入您的地址">
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