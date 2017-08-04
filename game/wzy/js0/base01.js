
function $$(selector){
    if(!_manage){
        return $('#__notfound__');
    }
    return parent.$(selector);
}
HdGame.gameDomain = 'hd.faisco.cn';
if(false){
    HdGame.gameDomain = 'hd.webportal.cc';
}
HdGame.isReg = false;
$(function() {
    var html = $('html');
    if(parseFloat(html.css('font-size')) != g_rem){
        html.css('font-size',g_rem);
    }
})
/*---------------游戏函数回调--------------------*/
HdGame.initCallBack(hg,['startGame','startGamehead','home','again','jsFootEnd','showResult','changeBottomBar','showPoup','hidePoup','timeChange','beforeDraw']); //hdgame
hg.addCallBack(['setGameType','hpInit','hgLoadEnd','save']); //hdportal
hg.showGameBox = true; //是否在开始游戏时默认显示游戏页

/*----------------------------可编辑元素包装------------------------------------*/
//通过conf文件配置可编辑元素的属性
if(hg.edit){
    HdGame.initEdit(hg.edit);
}
function parseRemToPx(rem){
    if(rem.indexOf('rem') === -1){
        return parseFloat(rem);
    }
    return parseFloat(rem)*g_rem;
}
/*----------------------------------计时------------------------------------*/
hg.time = null;

(function(hg){
    var initTime = 0;
    if(!g_config.countsTimeType && initTime === 0){
        if(!_manage){
            initTime = 99999;
        }else{
            if(true){
                initTime = 30;
            }else{
                initTime = 0; 
            }
        }
        $(function(){$('.timeBox').hide();});
    }
    hg.time = HdGame.initTime(initTime);
})(hg);

/*----------------------------------计分------------------------------------*/

hg.grade = HdGame.initGrade();

/*----------------------------------声音-----------------------------------*/
hg.sound = null; 
(function(hg){
    hg.sound = HdGame.initSound([{"path":"//hdg.faisys.com/image/wzytzs/music/bgmusic04H.mp3","fileName":"背景音乐.mp3","optFlag":0},{"path":"//hdg.faisys.com/image/wzytzs/music/bonus.mp3","fileName":"得分音效.mp3","optFlag":2},{"path":"//hdg.faisys.com/image/wzytzs/music/err.mp3","fileName":"错误音效.mp3","optFlag":2}],[{"path":"*_resRoot*/image/wzytzs/music/bgmusic04H.mp3","fileName":"背景音乐.mp3","optFlag":0},{"path":"*_resRoot*/image/wzytzs/music/bonus.mp3","fileName":"得分音效.mp3","optFlag":2},{"path":"*_resRoot*/image/wzytzs/music/err.mp3","fileName":"错误音效.mp3","optFlag":2}],null);
    
})(hg);
/*----------------------------------获取ip信息-----------------------------------*/
HdGame.initAreaLimit(false);
