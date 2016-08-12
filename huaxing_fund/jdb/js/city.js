var provDOMId = ""; cityDOMId = ""//省份城市控件Id;
//设置省份
var setProv = function(selectId) {
    var obj = $("#" + selectId);
    obj.change(function() { setCity(cityDOMId, $(this).val()); });
    obj.append("<option value='1'>广东</option>");
    obj.append("<option value='23'>北京</option>");
    obj.append("<option value='24'>天津</option>");
    obj.append("<option value='25'>河北</option>");
    obj.append("<option value='37'>山西</option>");
    obj.append("<option value='49'>内蒙古</option>");
    obj.append("<option value='62'>辽宁</option>");
    obj.append("<option value='77'>吉林</option>");
    obj.append("<option value='87'>黑龙江</option>");
    obj.append("<option value='101'>上海</option>");
    obj.append("<option value='102'>江苏</option>");
    obj.append("<option value='116'>浙江</option>");
    obj.append("<option value='128'>安徽</option>");
    obj.append("<option value='146'>福建</option>");
    obj.append("<option value='156'>江西</option>");
    obj.append("<option value='168'>山东</option>");
    obj.append("<option value='186'>河南</option>");
    obj.append("<option value='204'>湖北</option>");
    obj.append("<option value='217'>湖南</option>");
    obj.append("<option value='232'>广西</option>");
    obj.append("<option value='247'>海南</option>");
    obj.append("<option value='250'>重庆</option>");
    obj.append("<option value='251'>四川</option>");
    obj.append("<option value='270'>贵州</option>");
    obj.append("<option value='277'>云南</option>");
    obj.append("<option value='286'>西藏</option>");
    obj.append("<option value='294'>陕西</option>");
    obj.append("<option value='305'>甘肃</option>");
    obj.append("<option value='320'>青海</option>");
    obj.append("<option value='329'>宁夏</option>");
    obj.append("<option value='335'>新疆</option>");
    obj.append("<option value='348'>香港</option>");
    obj.append("<option value='349'>澳门</option>");
    obj.append("<option value='350'>台湾</option>");
}

//设置城市
var setCity = function(selectId, provId) {
    var obj = $("#" + selectId);
    obj.empty();
    switch (provId) {
        case '': obj.append("<option value=''>城市</option>"); break;
        case '0': obj.append("<option value='0'>城市</option>"); break;
        case "1":
            obj.append("<option value='2'>广州</option>");
            obj.append("<option value='3'>深圳</option>");
            obj.append("<option value='4'>珠海</option>");
            obj.append("<option value='5'>汕头</option>");
            obj.append("<option value='6'>韶关</option>");
            obj.append("<option value='7'>佛山</option>");
            obj.append("<option value='8'>江门</option>");
            obj.append("<option value='9'>湛江</option>");
            obj.append("<option value='10'>茂名</option>");
            obj.append("<option value='11'>肇庆</option>");
            obj.append("<option value='12'>惠州</option>");
            obj.append("<option value='13'>梅州</option>");
            obj.append("<option value='14'>汕尾</option>");
            obj.append("<option value='15'>河源</option>");
            obj.append("<option value='16'>阳江</option>");
            obj.append("<option value='17'>清远</option>");
            obj.append("<option value='18'>东莞</option>");
            obj.append("<option value='19'>中山</option>");
            obj.append("<option value='20'>潮州</option>");
            obj.append("<option value='21'>揭阳</option>");
            obj.append("<option value='22'>云浮</option>");
            break;
        case "23":
            obj.append("<option value='352'>北京市</option>");
            break;
        case "24":
            obj.append("<option value='353'>天津市</option>");
            break;
        case "25":
            obj.append("<option value='26'>石家庄</option>");
            obj.append("<option value='27'>唐山</option>");
            obj.append("<option value='28'>秦皇岛</option>");
            obj.append("<option value='29'>邯郸</option>");
            obj.append("<option value='30'>邢台</option>");
            obj.append("<option value='31'>保定</option>");
            obj.append("<option value='32'>张家口</option>");
            obj.append("<option value='33'>承德</option>");
            obj.append("<option value='34'>沧州</option>");
            obj.append("<option value='35'>廊坊</option>");
            obj.append("<option value='36'>衡水</option>");
            break;
        case "37":
            obj.append("<option value='38'>太原</option>");
            obj.append("<option value='39'>大同</option>");
            obj.append("<option value='40'>阳泉</option>");
            obj.append("<option value='41'>长治</option>");
            obj.append("<option value='42'>晋城</option>");
            obj.append("<option value='43'>朔州</option>");
            obj.append("<option value='44'>晋中</option>");
            obj.append("<option value='45'>运城</option>");
            obj.append("<option value='46'>忻州</option>");
            obj.append("<option value='47'>临汾</option>");
            obj.append("<option value='48'>吕梁</option>");
            break;
        case "49":
            obj.append("<option value='50'>呼和浩特</option>");
            obj.append("<option value='51'>包头</option>");
            obj.append("<option value='52'>乌海</option>");
            obj.append("<option value='53'>赤峰</option>");
            obj.append("<option value='54'>通辽</option>");
            obj.append("<option value='55'>鄂尔多斯</option>");
            obj.append("<option value='56'>呼伦贝尔</option>");
            obj.append("<option value='57'>巴彦淖尔</option>");
            obj.append("<option value='58'>乌兰察布</option>");
            obj.append("<option value='59'>锡林郭勒盟</option>");
            obj.append("<option value='60'>兴安盟</option>");
            obj.append("<option value='61'>阿拉善盟</option>");
            break;
        case "62":
            obj.append("<option value='63'>沈阳</option>");
            obj.append("<option value='64'>大连</option>");
            obj.append("<option value='65'>鞍山</option>");
            obj.append("<option value='66'>抚顺</option>");
            obj.append("<option value='67'>本溪</option>");
            obj.append("<option value='68'>丹东</option>");
            obj.append("<option value='69'>锦州</option>");
            obj.append("<option value='70'>营口</option>");
            obj.append("<option value='71'>阜新</option>");
            obj.append("<option value='72'>辽阳</option>");
            obj.append("<option value='73'>盘锦</option>");
            obj.append("<option value='74'>铁岭</option>");
            obj.append("<option value='75'>朝阳</option>");
            obj.append("<option value='76'>葫芦岛</option>");
            break;
        case "77":
            obj.append("<option value='78'>长春</option>");
            obj.append("<option value='79'>吉林</option>");
            obj.append("<option value='80'>四平</option>");
            obj.append("<option value='81'>辽源</option>");
            obj.append("<option value='82'>通化</option>");
            obj.append("<option value='83'>白山</option>");
            obj.append("<option value='84'>松原</option>");
            obj.append("<option value='85'>白城</option>");
            obj.append("<option value='86'>延边朝鲜族自治州</option>");
            break;
        case "87":
            obj.append("<option value='88'>哈尔滨</option>");
            obj.append("<option value='89'>齐齐哈尔</option>");
            obj.append("<option value='90'>鹤岗市</option>");
            obj.append("<option value='91'>双鸭山</option>");
            obj.append("<option value='92'>鸡西市</option>");
            obj.append("<option value='93'>大庆</option>");
            obj.append("<option value='94'>伊春</option>");
            obj.append("<option value='95'>牡丹江</option>");
            obj.append("<option value='96'>佳木斯</option>");
            obj.append("<option value='97'>七台河</option>");
            obj.append("<option value='98'>黑河</option>");
            obj.append("<option value='99'>绥化</option>");
            obj.append("<option value='100'>大兴安岭</option>");
            break;
        case "101":
            obj.append("<option value='351'>上海市</option>");
            break;
        case "102":
            obj.append("<option value='103'>南京</option>");
            obj.append("<option value='104'>无锡</option>");
            obj.append("<option value='105'>徐州</option>");
            obj.append("<option value='106'>常州</option>");
            obj.append("<option value='107'>苏州</option>");
            obj.append("<option value='108'>南通</option>");
            obj.append("<option value='109'>连云港</option>");
            obj.append("<option value='110'>淮安</option>");
            obj.append("<option value='111'>盐城</option>");
            obj.append("<option value='112'>扬州</option>");
            obj.append("<option value='113'>镇江</option>");
            obj.append("<option value='114'>泰州</option>");
            obj.append("<option value='115'>宿迁</option>");
            break;
        case "116":
            obj.append("<option value='117'>杭州</option>");
            obj.append("<option value='118'>宁波</option>");
            obj.append("<option value='119'>温州</option>");
            obj.append("<option value='120'>嘉兴</option>");
            obj.append("<option value='121'>湖州</option>");
            obj.append("<option value='122'>绍兴</option>");
            obj.append("<option value='123'>金华</option>");
            obj.append("<option value='124'>衢州</option>");
            obj.append("<option value='125'>舟山</option>");
            obj.append("<option value='126'>台州</option>");
            obj.append("<option value='127'>丽水</option>");
            break;
        case "128":
            obj.append("<option value='129'>合肥</option>");
            obj.append("<option value='130'>芜湖</option>");
            obj.append("<option value='131'>蚌埠</option>");
            obj.append("<option value='132'>淮南</option>");
            obj.append("<option value='133'>马鞍山</option>");
            obj.append("<option value='134'>淮北</option>");
            obj.append("<option value='135'>铜陵</option>");
            obj.append("<option value='136'>安庆</option>");
            obj.append("<option value='137'>黄山</option>");
            obj.append("<option value='138'>滁州</option>");
            obj.append("<option value='139'>阜阳</option>");
            obj.append("<option value='140'>宿州</option>");
            obj.append("<option value='141'>巢湖</option>");
            obj.append("<option value='142'>六安</option>");
            obj.append("<option value='143'>亳州</option>");
            obj.append("<option value='144'>池州</option>");
            obj.append("<option value='145'>宣城</option>");
            break;
        case "146":
            obj.append("<option value='147'>福州</option>");
            obj.append("<option value='148'>厦门</option>");
            obj.append("<option value='149'>莆田</option>");
            obj.append("<option value='150'>三明</option>");
            obj.append("<option value='151'>泉州</option>");
            obj.append("<option value='152'>漳州</option>");
            obj.append("<option value='153'>南平</option>");
            obj.append("<option value='154'>龙岩</option>");
            obj.append("<option value='155'>宁德</option>");
            break;
        case "156":
            obj.append("<option value='157'>南昌</option>");
            obj.append("<option value='158'>景德镇</option>");
            obj.append("<option value='159'>萍乡</option>");
            obj.append("<option value='160'>九江</option>");
            obj.append("<option value='161'>新余</option>");
            obj.append("<option value='162'>鹰潭</option>");
            obj.append("<option value='163'>赣州</option>");
            obj.append("<option value='164'>吉安</option>");
            obj.append("<option value='165'>宜春</option>");
            obj.append("<option value='166'>抚州</option>");
            obj.append("<option value='167'>上饶</option>");
            break;
        case "168":
            obj.append("<option value='169'>济南</option>");
            obj.append("<option value='170'>青岛</option>");
            obj.append("<option value='171'>淄博</option>");
            obj.append("<option value='172'>枣庄</option>");
            obj.append("<option value='173'>东营</option>");
            obj.append("<option value='174'>烟台</option>");
            obj.append("<option value='175'>潍坊</option>");
            obj.append("<option value='176'>济宁</option>");
            obj.append("<option value='177'>泰安</option>");
            obj.append("<option value='178'>威海</option>");
            obj.append("<option value='179'>日照</option>");
            obj.append("<option value='180'>莱芜</option>");
            obj.append("<option value='181'>临沂</option>");
            obj.append("<option value='182'>德州</option>");
            obj.append("<option value='183'>聊城</option>");
            obj.append("<option value='184'>滨州</option>");
            obj.append("<option value='185'>菏泽</option>");
            break;
        case "186":
            obj.append("<option value='187'>郑州</option>");
            obj.append("<option value='188'>开封</option>");
            obj.append("<option value='189'>洛阳</option>");
            obj.append("<option value='190'>平顶山</option>");
            obj.append("<option value='191'>安阳</option>");
            obj.append("<option value='192'>鹤壁</option>");
            obj.append("<option value='193'>新乡</option>");
            obj.append("<option value='194'>焦作</option>");
            obj.append("<option value='195'>濮阳</option>");
            obj.append("<option value='196'>许昌</option>");
            obj.append("<option value='197'>漯河</option>");
            obj.append("<option value='198'>三门峡</option>");
            obj.append("<option value='199'>南阳</option>");
            obj.append("<option value='200'>商丘</option>");
            obj.append("<option value='201'>信阳</option>");
            obj.append("<option value='202'>周口</option>");
            obj.append("<option value='203'>驻马店</option>");
            break;
        case "204":
            obj.append("<option value='205'>武汉</option>");
            obj.append("<option value='206'>黄石</option>");
            obj.append("<option value='207'>十堰</option>");
            obj.append("<option value='208'>荆州</option>");
            obj.append("<option value='209'>宜昌</option>");
            obj.append("<option value='210'>襄樊</option>");
            obj.append("<option value='211'>鄂州</option>");
            obj.append("<option value='212'>荆门</option>");
            obj.append("<option value='213'>孝感</option>");
            obj.append("<option value='214'>黄冈</option>");
            obj.append("<option value='215'>咸宁</option>");
            obj.append("<option value='216'>随州</option>");
            break;
        case "217":
            obj.append("<option value='218'>长沙</option>");
            obj.append("<option value='219'>株洲</option>");
            obj.append("<option value='220'>湘潭</option>");
            obj.append("<option value='221'>衡阳</option>");
            obj.append("<option value='222'>邵阳</option>");
            obj.append("<option value='223'>岳阳</option>");
            obj.append("<option value='224'>常德</option>");
            obj.append("<option value='225'>张家界</option>");
            obj.append("<option value='226'>益阳</option>");
            obj.append("<option value='227'>郴州</option>");
            obj.append("<option value='228'>永州</option>");
            obj.append("<option value='229'>怀化</option>");
            obj.append("<option value='230'>娄底</option>");
            obj.append("<option value='231'>湘西土家族苗族自治州</option>");
            break;
        case "232":
            obj.append("<option value='233'>南宁</option>");
            obj.append("<option value='234'>柳州市</option>");
            obj.append("<option value='235'>桂林</option>");
            obj.append("<option value='236'>梧州</option>");
            obj.append("<option value='237'>北海</option>");
            obj.append("<option value='238'>防城港</option>");
            obj.append("<option value='239'>钦州</option>");
            obj.append("<option value='240'>贵港</option>");
            obj.append("<option value='241'>玉林</option>");
            obj.append("<option value='242'>百色</option>");
            obj.append("<option value='243'>贺州</option>");
            obj.append("<option value='244'>河池</option>");
            obj.append("<option value='245'>来宾</option>");
            obj.append("<option value='246'>崇左</option>");
            break;
        case "247":
            obj.append("<option value='248'>海口</option>");
            obj.append("<option value='249'>三亚</option>");
            break;
        case "250":
            obj.append("<option value='354'>重庆市</option>");
            break;
        case "251":
            obj.append("<option value='252'>成都</option>");
            obj.append("<option value='253'>自贡</option>");
            obj.append("<option value='254'>攀枝花</option>");
            obj.append("<option value='255'>泸州</option>");
            obj.append("<option value='256'>德阳</option>");
            obj.append("<option value='257'>绵阳</option>");
            obj.append("<option value='258'>广元</option>");
            obj.append("<option value='259'>遂宁</option>");
            obj.append("<option value='260'>内江</option>");
            obj.append("<option value='261'>乐山</option>");
            obj.append("<option value='262'>南充</option>");
            obj.append("<option value='263'>眉山</option>");
            obj.append("<option value='264'>宜宾</option>");
            obj.append("<option value='265'>广安</option>");
            obj.append("<option value='266'>达州</option>");
            obj.append("<option value='267'>雅安</option>");
            obj.append("<option value='268'>巴中</option>");
            obj.append("<option value='269'>资阳</option>");
            obj.append("<option value='355'>阿坝州</option>");
            obj.append("<option value='356'>甘孜州</option>");
            obj.append("<option value='357'>凉山州</option>");
            break;
        case "270":
            obj.append("<option value='271'>贵阳</option>");
            obj.append("<option value='272'>六盘水</option>");
            obj.append("<option value='273'>遵义</option>");
            obj.append("<option value='274'>安顺</option>");
            obj.append("<option value='275'>铜仁</option>");
            obj.append("<option value='276'>毕节</option>");
            obj.append("<option value='358'>黔西南州</option>");
            obj.append("<option value='359'>黔东南州</option>");
            obj.append("<option value='360'>黔 南 州</option>");
            break;
        case "277":
            obj.append("<option value='278'>昆明</option>");
            obj.append("<option value='279'>曲靖</option>");
            obj.append("<option value='280'>玉溪</option>");
            obj.append("<option value='281'>保山</option>");
            obj.append("<option value='282'>昭通</option>");
            obj.append("<option value='283'>丽江</option>");
            obj.append("<option value='285'>临沧</option>");
            obj.append("<option value='361'>普洱</option>");
            obj.append("<option value='362'>文山</option>");
            obj.append("<option value='363'>红河州</option>");
            obj.append("<option value='364'>西双版纳州</option>");
            obj.append("<option value='365'>楚雄州</option>");
            obj.append("<option value='366'>大理州</option>");
            obj.append("<option value='367'>德宏州</option>");
            obj.append("<option value='368'>怒江州</option>");
            obj.append("<option value='369'>迪庆州</option>");
            break;
        case "286":
            obj.append("<option value='287'>拉萨</option>");
            obj.append("<option value='288'>那曲</option>");
            obj.append("<option value='289'>昌都</option>");
            obj.append("<option value='290'>山南</option>");
            obj.append("<option value='291'>日喀则</option>");
            obj.append("<option value='292'>阿里</option>");
            obj.append("<option value='293'>林芝</option>");
            break;
        case "294":
            obj.append("<option value='295'>西安</option>");
            obj.append("<option value='296'>铜川</option>");
            obj.append("<option value='297'>宝鸡</option>");
            obj.append("<option value='298'>咸阳</option>");
            obj.append("<option value='299'>渭南</option>");
            obj.append("<option value='300'>延安</option>");
            obj.append("<option value='301'>汉中</option>");
            obj.append("<option value='302'>榆林</option>");
            obj.append("<option value='303'>安康</option>");
            obj.append("<option value='304'>商洛</option>");
            break;
        case "305":
            obj.append("<option value='306'>兰州</option>");
            obj.append("<option value='307'>金昌</option>");
            obj.append("<option value='308'>白银</option>");
            obj.append("<option value='309'>天水</option>");
            obj.append("<option value='310'>嘉峪关</option>");
            obj.append("<option value='311'>武威</option>");
            obj.append("<option value='312'>张掖</option>");
            obj.append("<option value='313'>平凉</option>");
            obj.append("<option value='314'>酒泉</option>");
            obj.append("<option value='315'>庆阳</option>");
            obj.append("<option value='316'>定西</option>");
            obj.append("<option value='317'>陇南</option>");
            obj.append("<option value='318'>临夏</option>");
            obj.append("<option value='319'>甘南</option>");
            obj.append("<option value='370'>嘉峪关市</option>");
            break;
        case "320":
            obj.append("<option value='321'>西宁</option>");
            obj.append("<option value='322'>海东</option>");
            obj.append("<option value='323'>海北</option>");
            obj.append("<option value='324'>黄南</option>");
            obj.append("<option value='325'>海南</option>");
            obj.append("<option value='326'>果洛</option>");
            obj.append("<option value='327'>玉树</option>");
            obj.append("<option value='328'>海西</option>");
            break;
        case "329":
            obj.append("<option value='330'>银川</option>");
            obj.append("<option value='331'>石嘴山</option>");
            obj.append("<option value='332'>吴忠</option>");
            obj.append("<option value='333'>固原</option>");
            obj.append("<option value='334'>中卫</option>");
            break;
        case "335":
            obj.append("<option value='336'>乌鲁木齐</option>");
            obj.append("<option value='337'>克拉玛依</option>");
            obj.append("<option value='338'>吐鲁番</option>");
            obj.append("<option value='339'>哈密</option>");
            obj.append("<option value='340'>和田</option>");
            obj.append("<option value='341'>阿克苏</option>");
            obj.append("<option value='342'>喀什</option>");
            obj.append("<option value='343'>克孜勒苏柯尔克孜</option>");
            obj.append("<option value='344'>巴音郭楞</option>");
            obj.append("<option value='345'>昌吉</option>");
            obj.append("<option value='346'>博尔塔拉</option>");
            obj.append("<option value='347'>伊犁</option>");
            break;
        case "348":
            obj.append("<option value='371'>香港</option>");
            break;
        case "349":
            obj.append("<option value='372'>澳门</option>");
            break;
        case "350":
            obj.append("<option value='373'>台北市</option>");
            obj.append("<option value='374'>高雄市</option>");
            obj.append("<option value='375'>基隆市</option>");
            obj.append("<option value='376'>台中市</option>");
            obj.append("<option value='377'>台南市</option>");
            obj.append("<option value='378'>新竹市</option>");
            obj.append("<option value='379'>嘉义市</option>");
            break;
    }
}
//初始化
var initCity = function(provId, cityId) { provDOMId = provId; cityDOMId = cityId; setProv(provId); }
//设置选中值type=0代表省份，1代表城市，value代表值 
var setSelect = function(type, value) {
    if (type == 0) { setCity(cityDOMId, value); $("#" + provDOMId + " option[value='" + value + "']").attr("selected", true); }
    else { $("#" + cityDOMId + " option[value='" + value + "']").attr("selected", true); }
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