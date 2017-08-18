<?php
require ("../etc/configuration.php");
 $appid = "wxeb7c17340aebe6dc";
$appsecret = "8b6ac5fc25df257a6384cf3630932f5a";  

    class class_token
{
    public $appid,$appsecret;
    public function ini_token(){

        $query = "SELECT * FROM `wx_token` WHERE `type` = 'access_token'";
        $result = db_connection($query);
        if($result == NULL){
            $this->remote_token($appid,$appsecret);
            $this->db_token();
            return;
        };
        while($row = mysql_fetch_array($result))
        {
            $this->expires_time = $row['expire'];
            $this->access_token = $row['value'];
            break;
        };
        if( time() > ($this->expires_time + 3600)){
            $this->remote_token($appid,$appsecret);
            $this->db_token();
            return $this->access_token;
        }else{
            return $this->access_token;
        };
    }
    public function https_request($url,$data = null){
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
        if (!empty($data)){
            curl_setopt($curl, CURLOPT_POST, 1);
            curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
        }
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        $output = curl_exec($curl);
        curl_close($curl);
        return $output;
    }

    //构造函数，获取Access Token
    public function db_token()
    {
        
        $query = "DROP TABLE IF EXISTS `wx_token`".
            "CREATE TABLE IF NOT EXISTS `wx_token` (
              `id` int(1) NOT NULL,
              `type` varchar(20) NOT NULL,
              `expire` varchar(16) NOT NULL,
              `value` varchar(600) NOT NULL,
              PRIMARY KEY (`id`)
            ) ENGINE=MyISAM DEFAULT CHARSET=utf8;".
            "INSERT INTO `wx_token` (`id`, `type`, `expire`, `value`) VALUES
            (1, 'access_token', $this->expires_time, $this->access_token),
            (2, 'jsapi_ticket', '', '')";
            db_connection($query);
        
    }
     
    public function cache_token(){


        //2. 缓存形式
        if (isset($_SERVER['HTTP_APPNAME'])){        //SAE环境，需要开通memcache
            $mem = memcache_init();
        }else {                                        //本地环境，需已安装memcache
            $mem = new Memcache;
            $mem->connect('localhost', 11211) or die ("Could not connect");
        }
        $this->access_token = $mem->get($this->appid);
        if (!isset($this->access_token) || empty($this->access_token)){
            $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".$this->appid."&secret=".$this->appsecret;
            $res = $this->http_request($url);
            $result = json_decode($res, true);
            $this->access_token = $result["access_token"];
            $mem->set($this->appid, $this->access_token, 0, 3600);
        }
    }
    
    public function local_token(){

        //3. 本地写入
        $res = file_get_contents('access_token.json');
        $result = json_decode($res, true);
        $this->expires_time = $result["expires_time"];
        $this->access_token = $result["access_token"];

        if (time() > ($this->expires_time + 3600)){
            $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".$this->appid."&secret=".$this->appsecret;
            $res = $this->http_request($url);
            $result = json_decode($res, true);
            $this->access_token = $result["access_token"];
            $this->expires_time = time();
            file_put_contents('access_token.json', '{"access_token": "'.$this->access_token.'", "expires_time": '.$this->expires_time.'}');
        }
    }
    
    public function remote_token($appid = NULL, $appsecret = NULL){    
        if($appid && $appsecret){
            $this->appid = $appid;
            $this->appsecret = $appsecret;
        }
        $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".$this->appid."&secret=".$this->appsecret;
        $res = $this->https_request($url);
        $result = json_decode($res, true);
        $this->access_token = $result["access_token"];
        $this->expires_time = time();
        return $this->access_token;
    }
}    
?>