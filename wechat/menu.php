<?php
/*menu.php文件在本地服务器用浏览器打开即可*/

/*测试号*/
/*wxeb7c17340aebe6dc
8b6ac5fc25df257a6384cf3630932f5a*/

/*个人公众号
wx722e993eb7b1d17e
3a14338b4e0b709a627a0b52f529f5b3*/

require ("token.php");
$token_class = new class_token();
$access_token = $token_class->ini_token();
/*$url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".$appid."&secret=".$appsecret;

$output = https_request($url);
$jsoninfo = json_decode($output, true);

$access_token = $jsoninfo["access_token"];*/

$jsonmenu = '{
      "button":[
      {
           "name":"天气预报",
           "sub_button":[
            {
               "type":"click",
               "name":"北京天气",
               "key":"天气北京"
            },
            {
               "type":"click",
               "name":"上海天气",
               "key":"天气上海"
            },
            {
               "type":"click",
               "name":"广州天气",
               "key":"天气广州"
            },
            {
               "type":"click",
               "name":"深圳天气",
               "key":"天气深圳"
            },
            {
                "type":"view",
                "name":"本地天气",
                "url":"http://m.hao123.com/a/tianqi"
            }]
      

       },
       {
           "name":"ww哥",
           "sub_button":[
            {
               "type":"click",
               "name":"公司简介",
               "key":"company"
            },
            {
               "type":"click",
               "name":"趣味游戏",
               "key":"游戏"
            },
            {
                "type":"click",
                "name":"讲个笑话",
                "key":"笑话"
            }]
       

       }]
 }';

$url = "https://api.weixin.qq.com/cgi-bin/menu/create?access_token=".$access_token;
$result = $token_class->https_request($url, $jsonmenu);
var_dump($result);


?>        
