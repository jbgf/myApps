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

    <div class="mainContent">
        <div class="wnWrapper">
            <div class="formrow1">
                <div class="formrow1-left">
                    您选择的工种是
                </div>
                <div class="formrow1-right">
                    <select>
                        <option>水工</option>
                    </select>
                </div>
            </div><!-- formrow1 end --> 
            
            <div class="icongrounp3">
                <div class="row-block">
                    <div class="inner">
                        <div class="ig1Block on">
                            <div class="avatar3">
                                <img src="img/avatar1.png">
                            </div>
                            <div class="ig1Text">
                                <ol>
                                    <li class="name">有名字</li>
                                    <li class="job">
                                        工种：水工 
                                    </li>
                                    <li>工费标准：300元/天</li>
                                    
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row-block">
                    <div class="inner">
                        <div class="ig1Block">
                            <div class="avatar3">
                                <img src="img/avatar1.png">
                            </div>
                            <div class="ig1Text">
                                <ol>
                                    <li class="name">有名字</li>
                                    <li class="job">
                                        工种：水工 
                                    </li>
                                    <li>工费标准：300元/天</li>
                                    
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row-block">
                    <div class="inner">
                        <div class="ig1Block ">
                            <div class="avatar3">
                                <img src="img/avatar1.png">
                            </div>
                            <div class="ig1Text">
                                <ol>
                                    <li class="name">有名字</li>
                                    <li class="job">
                                        工种：水工 
                                    </li>
                                    <li>工费标准：300元/天</li>
                                    
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row-block">
                    <div class="inner">
                        <div class="ig1Block">
                            <div class="avatar3">
                                <img src="img/avatar1.png">
                            </div>
                            <div class="ig1Text">
                                <ol>
                                    <li class="name">有名字</li>
                                    <li class="job">
                                        工种：水工 
                                    </li>
                                    <li>工费标准：300元/天</li>
                                    
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!-- icongrounp3 end -->


            <a><div class="button3 bg-red" >
                我是工人
            </div>
            </a>
        </div>
    </div>  
</body>
<script type="text/javascript">
    $(".icongrounp3 .ig1Block").on("click",function(){
        $(".icongrounp3 .ig1Block").removeClass("on");
        $(this).addClass("on");
    })
</script>
</html>