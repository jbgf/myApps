<!DOCTYPE html>
<html>
<head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <style type="text/css">
        html,body{position: relative;}
        html,body,.main{height: 100%;}
        .top,.bottom{position: fixed;font-size: 2rem;color:#fff;left:0;right: 0;background:red;z-index: 999}
        .top{top:0;}
        .main{overflow-y: scroll;-webkit-overflow-scrolling: touch;position: absolute;left:0;right: 0;}
        .main .scroll{height: 1000px;background:linear-gradient(to bottom,#000,blue);}
        .bottom{bottom:0;}
        input{width:100%;height: 2rem;}
    </style>
</head>
<body>
    <div class="top"> top</div>
    <div class="main"><div class="scroll"></div></div>
    <div class="bottom"> bottom<input type="" name=""></div>
</body>
</html>