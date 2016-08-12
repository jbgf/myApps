
 var provDOMId="";cityDOMId=""//省份城市控件Id;
 //设置省份
 var setProv= function(selectId){
 var obj=$("#"+selectId);
    obj.change(function () {setCity(cityDOMId,$(this).val());});
    obj.append("<option value='广东'>广东</option>");
    obj.append("<option value='北京'>北京</option>");
    obj.append("<option value='天津'>天津</option>");
    obj.append("<option value='河北'>河北</option>");
    obj.append("<option value='山西'>山西</option>");
    obj.append("<option value='内蒙古'>内蒙古</option>");
    obj.append("<option value='辽宁'>辽宁</option>");
    obj.append("<option value='吉林'>吉林</option>");
    obj.append("<option value='黑龙江'>黑龙江</option>");
    obj.append("<option value='上海'>上海</option>");
    obj.append("<option value='江苏'>江苏</option>");
    obj.append("<option value='浙江'>浙江</option>");
    obj.append("<option value='安徽'>安徽</option>");
    obj.append("<option value='福建'>福建</option>");
    obj.append("<option value='江西'>江西</option>");
    obj.append("<option value='山东'>山东</option>");
    obj.append("<option value='河南'>河南</option>");
    obj.append("<option value='湖北'>湖北</option>");
    obj.append("<option value='湖南'>湖南</option>");
    obj.append("<option value='广西'>广西</option>");
    obj.append("<option value='海南'>海南</option>");
    obj.append("<option value='重庆'>重庆</option>");
    obj.append("<option value='四川'>四川</option>");
    obj.append("<option value='贵州'>贵州</option>");
    obj.append("<option value='云南'>云南</option>");
    obj.append("<option value='西藏'>西藏</option>");
    obj.append("<option value='陕西'>陕西</option>");
    obj.append("<option value='甘肃'>甘肃</option>");
    obj.append("<option value='青海'>青海</option>");
    obj.append("<option value='宁夏'>宁夏</option>");
    obj.append("<option value='新疆'>新疆</option>");
    obj.append("<option value='香港'>香港</option>");
    obj.append("<option value='澳门'>澳门</option>");
    obj.append("<option value='台湾'>台湾</option>");
}

 //设置城市
var setCity=function(selectId,provId){
var obj=$("#"+selectId);
obj.empty();
switch(provId)
{
   case '':obj.append("<option value=''>城市</option>");break;
   case "广东":
    obj.append("<option value='广州'>广州</option>");
    obj.append("<option value='深圳'>深圳</option>");
    obj.append("<option value='珠海'>珠海</option>");
    obj.append("<option value='汕头'>汕头</option>");
    obj.append("<option value='韶关'>韶关</option>");
    obj.append("<option value='佛山'>佛山</option>");
    obj.append("<option value='江门'>江门</option>");
    obj.append("<option value='湛江'>湛江</option>");
    obj.append("<option value='茂名'>茂名</option>");
    obj.append("<option value='肇庆'>肇庆</option>");
    obj.append("<option value='惠州'>惠州</option>");
    obj.append("<option value='梅州'>梅州</option>");
    obj.append("<option value='汕尾'>汕尾</option>");
    obj.append("<option value='河源'>河源</option>");
    obj.append("<option value='阳江'>阳江</option>");
    obj.append("<option value='清远'>清远</option>");
    obj.append("<option value='东莞'>东莞</option>");
    obj.append("<option value='中山'>中山</option>");
    obj.append("<option value='潮州'>潮州</option>");
    obj.append("<option value='揭阳'>揭阳</option>");
    obj.append("<option value='云浮'>云浮</option>");
   break;
   case "北京":
    obj.append("<option value='北京市'>北京市</option>");
   break;
   case "天津":
    obj.append("<option value='天津市'>天津市</option>");
   break;
   case "河北":
    obj.append("<option value='石家庄'>石家庄</option>");
    obj.append("<option value='唐山'>唐山</option>");
    obj.append("<option value='秦皇岛'>秦皇岛</option>");
    obj.append("<option value='邯郸'>邯郸</option>");
    obj.append("<option value='邢台'>邢台</option>");
    obj.append("<option value='保定'>保定</option>");
    obj.append("<option value='张家口'>张家口</option>");
    obj.append("<option value='承德'>承德</option>");
    obj.append("<option value='沧州'>沧州</option>");
    obj.append("<option value='廊坊'>廊坊</option>");
    obj.append("<option value='衡水'>衡水</option>");
   break;
   case "山西":
    obj.append("<option value='太原'>太原</option>");
    obj.append("<option value='大同'>大同</option>");
    obj.append("<option value='阳泉'>阳泉</option>");
    obj.append("<option value='长治'>长治</option>");
    obj.append("<option value='晋城'>晋城</option>");
    obj.append("<option value='朔州'>朔州</option>");
    obj.append("<option value='晋中'>晋中</option>");
    obj.append("<option value='运城'>运城</option>");
    obj.append("<option value='忻州'>忻州</option>");
    obj.append("<option value='临汾'>临汾</option>");
    obj.append("<option value='吕梁'>吕梁</option>");
   break;
   case "内蒙古":
    obj.append("<option value='呼和浩特'>呼和浩特</option>");
    obj.append("<option value='包头'>包头</option>");
    obj.append("<option value='乌海'>乌海</option>");
    obj.append("<option value='赤峰'>赤峰</option>");
    obj.append("<option value='通辽'>通辽</option>");
    obj.append("<option value='鄂尔多斯'>鄂尔多斯</option>");
    obj.append("<option value='呼伦贝尔'>呼伦贝尔</option>");
    obj.append("<option value='巴彦淖尔'>巴彦淖尔</option>");
    obj.append("<option value='乌兰察布'>乌兰察布</option>");
    obj.append("<option value='锡林郭勒盟'>锡林郭勒盟</option>");
    obj.append("<option value='兴安盟'>兴安盟</option>");
    obj.append("<option value='阿拉善盟'>阿拉善盟</option>");
   break;
   case "辽宁":
    obj.append("<option value='沈阳'>沈阳</option>");
    obj.append("<option value='大连'>大连</option>");
    obj.append("<option value='鞍山'>鞍山</option>");
    obj.append("<option value='抚顺'>抚顺</option>");
    obj.append("<option value='本溪'>本溪</option>");
    obj.append("<option value='丹东'>丹东</option>");
    obj.append("<option value='锦州'>锦州</option>");
    obj.append("<option value='营口'>营口</option>");
    obj.append("<option value='阜新'>阜新</option>");
    obj.append("<option value='辽阳'>辽阳</option>");
    obj.append("<option value='盘锦'>盘锦</option>");
    obj.append("<option value='铁岭'>铁岭</option>");
    obj.append("<option value='朝阳'>朝阳</option>");
    obj.append("<option value='葫芦岛'>葫芦岛</option>");
   break;
   case "吉林":
    obj.append("<option value='长春'>长春</option>");
    obj.append("<option value='吉林'>吉林</option>");
    obj.append("<option value='四平'>四平</option>");
    obj.append("<option value='辽源'>辽源</option>");
    obj.append("<option value='通化'>通化</option>");
    obj.append("<option value='白山'>白山</option>");
    obj.append("<option value='松原'>松原</option>");
    obj.append("<option value='白城'>白城</option>");
    obj.append("<option value='延边朝鲜族自治州'>延边朝鲜族自治州</option>");
   break;
   case "黑龙江":
    obj.append("<option value='哈尔滨'>哈尔滨</option>");
    obj.append("<option value='齐齐哈尔'>齐齐哈尔</option>");
    obj.append("<option value='鹤岗市'>鹤岗市</option>");
    obj.append("<option value='双鸭山'>双鸭山</option>");
    obj.append("<option value='鸡西市'>鸡西市</option>");
    obj.append("<option value='大庆'>大庆</option>");
    obj.append("<option value='伊春'>伊春</option>");
    obj.append("<option value='牡丹江'>牡丹江</option>");
    obj.append("<option value='佳木斯'>佳木斯</option>");
    obj.append("<option value='七台河'>七台河</option>");
    obj.append("<option value='黑河'>黑河</option>");
    obj.append("<option value='绥化'>绥化</option>");
    obj.append("<option value='大兴安岭'>大兴安岭</option>");
   break;
   case "上海":
    obj.append("<option value='上海市'>上海市</option>");
   break;
   case "江苏":
    obj.append("<option value='南京'>南京</option>");
    obj.append("<option value='无锡'>无锡</option>");
    obj.append("<option value='徐州'>徐州</option>");
    obj.append("<option value='常州'>常州</option>");
    obj.append("<option value='苏州'>苏州</option>");
    obj.append("<option value='南通'>南通</option>");
    obj.append("<option value='连云港'>连云港</option>");
    obj.append("<option value='淮安'>淮安</option>");
    obj.append("<option value='盐城'>盐城</option>");
    obj.append("<option value='扬州'>扬州</option>");
    obj.append("<option value='镇江'>镇江</option>");
    obj.append("<option value='泰州'>泰州</option>");
    obj.append("<option value='宿迁'>宿迁</option>");
    obj.append("<option value='昆山'>昆山</option>");
   break;
   case "浙江":
    obj.append("<option value='杭州'>杭州</option>");
    obj.append("<option value='宁波'>宁波</option>");
    obj.append("<option value='温州'>温州</option>");
    obj.append("<option value='嘉兴'>嘉兴</option>");
    obj.append("<option value='湖州'>湖州</option>");
    obj.append("<option value='绍兴'>绍兴</option>");
    obj.append("<option value='金华'>金华</option>");
    obj.append("<option value='衢州'>衢州</option>");
    obj.append("<option value='舟山'>舟山</option>");
    obj.append("<option value='台州'>台州</option>");
    obj.append("<option value='丽水'>丽水</option>");
   break;
   case "安徽":
    obj.append("<option value='合肥'>合肥</option>");
    obj.append("<option value='芜湖'>芜湖</option>");
    obj.append("<option value='蚌埠'>蚌埠</option>");
    obj.append("<option value='淮南'>淮南</option>");
    obj.append("<option value='马鞍山'>马鞍山</option>");
    obj.append("<option value='淮北'>淮北</option>");
    obj.append("<option value='铜陵'>铜陵</option>");
    obj.append("<option value='安庆'>安庆</option>");
    obj.append("<option value='黄山'>黄山</option>");
    obj.append("<option value='滁州'>滁州</option>");
    obj.append("<option value='阜阳'>阜阳</option>");
    obj.append("<option value='宿州'>宿州</option>");
    obj.append("<option value='巢湖'>巢湖</option>");
    obj.append("<option value='六安'>六安</option>");
    obj.append("<option value='亳州'>亳州</option>");
    obj.append("<option value='池州'>池州</option>");
    obj.append("<option value='宣城'>宣城</option>");
    obj.append("<option value='天长'>天长</option>");

   break;
   case "福建":
    obj.append("<option value='福州'>福州</option>");
    obj.append("<option value='厦门'>厦门</option>");
    obj.append("<option value='莆田'>莆田</option>");
    obj.append("<option value='三明'>三明</option>");
    obj.append("<option value='泉州'>泉州</option>");
    obj.append("<option value='漳州'>漳州</option>");
    obj.append("<option value='南平'>南平</option>");
    obj.append("<option value='龙岩'>龙岩</option>");
    obj.append("<option value='宁德'>宁德</option>");
   break;
   case "江西":
    obj.append("<option value='南昌'>南昌</option>");
    obj.append("<option value='景德镇'>景德镇</option>");
    obj.append("<option value='萍乡'>萍乡</option>");
    obj.append("<option value='九江'>九江</option>");
    obj.append("<option value='新余'>新余</option>");
    obj.append("<option value='鹰潭'>鹰潭</option>");
    obj.append("<option value='赣州'>赣州</option>");
    obj.append("<option value='吉安'>吉安</option>");
    obj.append("<option value='宜春'>宜春</option>");
    obj.append("<option value='抚州'>抚州</option>");
    obj.append("<option value='上饶'>上饶</option>");
   break;
   case "山东":
    obj.append("<option value='济南'>济南</option>");
    obj.append("<option value='青岛'>青岛</option>");
    obj.append("<option value='淄博'>淄博</option>");
    obj.append("<option value='枣庄'>枣庄</option>");
    obj.append("<option value='东营'>东营</option>");
    obj.append("<option value='烟台'>烟台</option>");
    obj.append("<option value='潍坊'>潍坊</option>");
    obj.append("<option value='济宁'>济宁</option>");
    obj.append("<option value='泰安'>泰安</option>");
    obj.append("<option value='威海'>威海</option>");
    obj.append("<option value='日照'>日照</option>");
    obj.append("<option value='莱芜'>莱芜</option>");
    obj.append("<option value='临沂'>临沂</option>");
    obj.append("<option value='德州'>德州</option>");
    obj.append("<option value='聊城'>聊城</option>");
    obj.append("<option value='滨州'>滨州</option>");
    obj.append("<option value='菏泽'>菏泽</option>");
   break;
   case "河南":
    obj.append("<option value='郑州'>郑州</option>");
    obj.append("<option value='开封'>开封</option>");
    obj.append("<option value='洛阳'>洛阳</option>");
    obj.append("<option value='平顶山'>平顶山</option>");
    obj.append("<option value='安阳'>安阳</option>");
    obj.append("<option value='鹤壁'>鹤壁</option>");
    obj.append("<option value='新乡'>新乡</option>");
    obj.append("<option value='焦作'>焦作</option>");
    obj.append("<option value='濮阳'>濮阳</option>");
    obj.append("<option value='许昌'>许昌</option>");
    obj.append("<option value='漯河'>漯河</option>");
    obj.append("<option value='三门峡'>三门峡</option>");
    obj.append("<option value='南阳'>南阳</option>");
    obj.append("<option value='商丘'>商丘</option>");
    obj.append("<option value='信阳'>信阳</option>");
    obj.append("<option value='周口'>周口</option>");
    obj.append("<option value='驻马店'>驻马店</option>");
   break;
   case "湖北":
    obj.append("<option value='武汉'>武汉</option>");
    obj.append("<option value='黄石'>黄石</option>");
    obj.append("<option value='十堰'>十堰</option>");
    obj.append("<option value='荆州'>荆州</option>");
    obj.append("<option value='宜昌'>宜昌</option>");
    obj.append("<option value='襄樊'>襄樊</option>");
    obj.append("<option value='鄂州'>鄂州</option>");
    obj.append("<option value='荆门'>荆门</option>");
    obj.append("<option value='孝感'>孝感</option>");
    obj.append("<option value='黄冈'>黄冈</option>");
    obj.append("<option value='咸宁'>咸宁</option>");
    obj.append("<option value='随州'>随州</option>");
    obj.append("<option value='潜江'>潜江</option>");
   break;
   case "湖南":
    obj.append("<option value='长沙'>长沙</option>");
    obj.append("<option value='株洲'>株洲</option>");
    obj.append("<option value='湘潭'>湘潭</option>");
    obj.append("<option value='衡阳'>衡阳</option>");
    obj.append("<option value='邵阳'>邵阳</option>");
    obj.append("<option value='岳阳'>岳阳</option>");
    obj.append("<option value='常德'>常德</option>");
    obj.append("<option value='张家界'>张家界</option>");
    obj.append("<option value='益阳'>益阳</option>");
    obj.append("<option value='郴州'>郴州</option>");
    obj.append("<option value='永州'>永州</option>");
    obj.append("<option value='怀化'>怀化</option>");
    obj.append("<option value='娄底'>娄底</option>");
    obj.append("<option value='浏阳市'>浏阳市</option>");
    obj.append("<option value='湘西土家族苗族自治州'>湘西土家族苗族自治州</option>");
   break;
   case "广西":
    obj.append("<option value='南宁'>南宁</option>");
    obj.append("<option value='柳州市'>柳州市</option>");
    obj.append("<option value='桂林'>桂林</option>");
    obj.append("<option value='梧州'>梧州</option>");
    obj.append("<option value='北海'>北海</option>");
    obj.append("<option value='防城港'>防城港</option>");
    obj.append("<option value='钦州'>钦州</option>");
    obj.append("<option value='贵港'>贵港</option>");
    obj.append("<option value='玉林'>玉林</option>");
    obj.append("<option value='百色'>百色</option>");
    obj.append("<option value='贺州'>贺州</option>");
    obj.append("<option value='河池'>河池</option>");
    obj.append("<option value='来宾'>来宾</option>");
    obj.append("<option value='崇左'>崇左</option>");
   break;
   case "海南":
    obj.append("<option value='海口'>海口</option>");
    obj.append("<option value='三亚'>三亚</option>");
    obj.append("<option value='琼海市'>琼海市</option>");

   break;
   case "重庆":
    obj.append("<option value='重庆市'>重庆市</option>");
   break;
   case "四川":
    obj.append("<option value='成都'>成都</option>");
    obj.append("<option value='自贡'>自贡</option>");
    obj.append("<option value='攀枝花'>攀枝花</option>");
    obj.append("<option value='泸州'>泸州</option>");
    obj.append("<option value='德阳'>德阳</option>");
    obj.append("<option value='绵阳'>绵阳</option>");
    obj.append("<option value='广元'>广元</option>");
    obj.append("<option value='遂宁'>遂宁</option>");
    obj.append("<option value='内江'>内江</option>");
    obj.append("<option value='乐山'>乐山</option>");
    obj.append("<option value='南充'>南充</option>");
    obj.append("<option value='眉山'>眉山</option>");
    obj.append("<option value='宜宾'>宜宾</option>");
    obj.append("<option value='广安'>广安</option>");
    obj.append("<option value='达州'>达州</option>");
    obj.append("<option value='雅安'>雅安</option>");
    obj.append("<option value='巴中'>巴中</option>");
    obj.append("<option value='资阳'>资阳</option>");
    obj.append("<option value='阿坝州'>阿坝州</option>");
    obj.append("<option value='甘孜州'>甘孜州</option>");
    obj.append("<option value='凉山州'>凉山州</option>");
   break;
   case "贵州":
    obj.append("<option value='贵阳'>贵阳</option>");
    obj.append("<option value='六盘水'>六盘水</option>");
    obj.append("<option value='遵义'>遵义</option>");
    obj.append("<option value='安顺'>安顺</option>");
    obj.append("<option value='铜仁'>铜仁</option>");
    obj.append("<option value='毕节'>毕节</option>");
    obj.append("<option value='黔西南州'>黔西南州</option>");
    obj.append("<option value='黔东南州'>黔东南州</option>");
    obj.append("<option value='黔 南 州'>黔 南 州</option>");
    obj.append("<option value='都匀'>都匀</option>");
 

   break;
   case "云南":
    obj.append("<option value='昆明'>昆明</option>");
    obj.append("<option value='曲靖'>曲靖</option>");
    obj.append("<option value='玉溪'>玉溪</option>");
    obj.append("<option value='保山'>保山</option>");
    obj.append("<option value='昭通'>昭通</option>");
    obj.append("<option value='丽江'>丽江</option>");
    obj.append("<option value='临沧'>临沧</option>");
    obj.append("<option value='普洱'>普洱</option>");
    obj.append("<option value='文山'>文山</option>");
    obj.append("<option value='红河州'>红河州</option>");
    obj.append("<option value='西双版纳州'>西双版纳州</option>");
    obj.append("<option value='楚雄州'>楚雄州</option>");
    obj.append("<option value='大理州'>大理州</option>");
    obj.append("<option value='德宏州'>德宏州</option>");
    obj.append("<option value='怒江州'>怒江州</option>");
    obj.append("<option value='迪庆州'>迪庆州</option>");
   break;
   case "西藏":
    obj.append("<option value='拉萨'>拉萨</option>");
    obj.append("<option value='那曲'>那曲</option>");
    obj.append("<option value='昌都'>昌都</option>");
    obj.append("<option value='山南'>山南</option>");
    obj.append("<option value='日喀则'>日喀则</option>");
    obj.append("<option value='阿里'>阿里</option>");
    obj.append("<option value='林芝'>林芝</option>");
   break;
   case "陕西":
    obj.append("<option value='西安'>西安</option>");
    obj.append("<option value='铜川'>铜川</option>");
    obj.append("<option value='宝鸡'>宝鸡</option>");
    obj.append("<option value='咸阳'>咸阳</option>");
    obj.append("<option value='渭南'>渭南</option>");
    obj.append("<option value='延安'>延安</option>");
    obj.append("<option value='汉中'>汉中</option>");
    obj.append("<option value='榆林'>榆林</option>");
    obj.append("<option value='安康'>安康</option>");
    obj.append("<option value='商洛'>商洛</option>");
   break;
   case "甘肃":
    obj.append("<option value='兰州'>兰州</option>");
    obj.append("<option value='金昌'>金昌</option>");
    obj.append("<option value='白银'>白银</option>");
    obj.append("<option value='天水'>天水</option>");
    obj.append("<option value='嘉峪关'>嘉峪关</option>");
    obj.append("<option value='武威'>武威</option>");
    obj.append("<option value='张掖'>张掖</option>");
    obj.append("<option value='平凉'>平凉</option>");
    obj.append("<option value='酒泉'>酒泉</option>");
    obj.append("<option value='庆阳'>庆阳</option>");
    obj.append("<option value='定西'>定西</option>");
    obj.append("<option value='陇南'>陇南</option>");
    obj.append("<option value='临夏'>临夏</option>");
    obj.append("<option value='甘南'>甘南</option>");
    obj.append("<option value='嘉峪关市'>嘉峪关市</option>");
   break;
   case "青海":
    obj.append("<option value='西宁'>西宁</option>");
    obj.append("<option value='海东'>海东</option>");
    obj.append("<option value='海北'>海北</option>");
    obj.append("<option value='黄南'>黄南</option>");
    obj.append("<option value='海南'>海南</option>");
    obj.append("<option value='果洛'>果洛</option>");
    obj.append("<option value='玉树'>玉树</option>");
    obj.append("<option value='海西'>海西</option>");
   break;
   case "宁夏":
    obj.append("<option value='银川'>银川</option>");
    obj.append("<option value='石嘴山'>石嘴山</option>");
    obj.append("<option value='吴忠'>吴忠</option>");
    obj.append("<option value='固原'>固原</option>");
    obj.append("<option value='中卫'>中卫</option>");
   break;
   case "新疆":
    obj.append("<option value='乌鲁木齐'>乌鲁木齐</option>");
    obj.append("<option value='克拉玛依'>克拉玛依</option>");
    obj.append("<option value='吐鲁番'>吐鲁番</option>");
    obj.append("<option value='哈密'>哈密</option>");
    obj.append("<option value='和田'>和田</option>");
    obj.append("<option value='阿克苏'>阿克苏</option>");
    obj.append("<option value='喀什'>喀什</option>");
    obj.append("<option value='克孜勒苏柯尔克孜'>克孜勒苏柯尔克孜</option>");
    obj.append("<option value='巴音郭楞'>巴音郭楞</option>");
    obj.append("<option value='昌吉'>昌吉</option>");
    obj.append("<option value='博尔塔拉'>博尔塔拉</option>");
    obj.append("<option value='伊犁'>伊犁</option>");
   break;
   case "香港":
    obj.append("<option value='香港'>香港</option>");
   break;
   case "澳门":
    obj.append("<option value='澳门'>澳门</option>");
   break;
   case "台湾":
    obj.append("<option value='台北市'>台北市</option>");
    obj.append("<option value='高雄市'>高雄市</option>");
    obj.append("<option value='基隆市'>基隆市</option>");
    obj.append("<option value='台中市'>台中市</option>");
    obj.append("<option value='台南市'>台南市</option>");
    obj.append("<option value='新竹市'>新竹市</option>");
    obj.append("<option value='嘉义市'>嘉义市</option>");
    obj.append("<option value='新北市'>新北市</option>");
    obj.append("<option value='台东县'>台东县</option>");
    obj.append("<option value='竹北市'>竹北市</option>");
 obj.append("<option value='桃园市'>桃园市</option>");



   break;
}}
 //初始化 
 var initCity=function(provId,cityId){provDOMId=provId;cityDOMId=cityId;setProv(provId);}
 //设置选中值type=0代表省份，1代表城市，value代表值 
 var setSelect=function(type,value)
{
 if(type==0){ setCity(cityDOMId,value); $("#"+provDOMId+" option[value='"+value+"']").attr("selected", true);}
 else{ $("#"+cityDOMId+" option[value='"+value+"']").attr("selected", true);}
}
var GetProvinceAndCity = function(documentId, provValue, cityValue) {
    var html = $("#" + provDOMId + " option[value='" + provValue + "']").html() + "-" + $("#" + cityDOMId + " option[value='" + cityValue + "']").html();
    $("#" + documentId).html(html);
}
var GetProvinceCityName = function(provValue, cityValue) {
    var prov = $("#" + provDOMId + " option[value='" + provValue + "']").html();
    var city = $("#" + cityDOMId + " option[value='" + cityValue + "']").html();
    return { prov: prov, city: city }
}