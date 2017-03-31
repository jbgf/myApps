<?php include './common/centerhead.html' ?>
<link rel="stylesheet" type="text/css" href="css/home.css">
<link rel="stylesheet" type="text/css" href="css/font-awesome.css">
<link rel="stylesheet" type="text/css" href="iconfont/iconfont.css">


<script type="text/javascript" src="js/home.js"></script>
<script type="text/javascript" src="js/jquery.validate.js"></script>

<link rel="stylesheet" type="text/css" href="css/jquery.multiMenu.css">
<script type="text/javascript" src="js/jquery.multiMenu.js"></script>

<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
      
   
    <div class="centerMiddle container1000">
      

            <div id="multiMenu"></div>

            <script type="text/javascript">
                var json ={sub:[ 
                            {
                                name:"1",
                                sub:[
                                        {
                                            name:"2"
                                        },
                                        {
                                            name:"2"
                                        },
                                        {
                                            name:"2"
                                        }

                                ]
                            },
                            {
                                name:"1",
                                sub:[
                                        {
                                            name:"2",
                                            sub:[
                                                {
                                                    name:"3"
                                                },
                                                {
                                                    name:"3"
                                                }
                                            ]
                                        }
                                ]
                            },
                            {
                                name:"1"
                            }
                ]};
                $("#multiMenu").multiMenu({allData:json})
            </script>
         
    </div>
      
       
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->  
    
