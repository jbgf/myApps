define("indexher:component/coolsitelocal/coolsitelocal.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/widget.js", "indexher:static/js/events.js"], function(e, o, t, c, i, n, l) {
    var a = i,
        s = l,
        r = "hao123.",
        d = "coolsitelocal";
    a.widget(r + d, { _init: function() {
            try { this.initTuijian() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:component/coolsitelocal/coolsitelocal.js", ln: 22 }) } }, initTuijian: function() {
            function e() {
                try {
                    return t(), r.show(), i = setTimeout(o, 1e4), n._off(l, "mouseover"), !1 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:component/coolsitelocal/coolsitelocal.js", ln: 48 }) } }

            function o() {
                try {
                    return t(), r.hide(), !1 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:component/coolsitelocal/coolsitelocal.js", ln: 54 }) } }

            function t() {
                try { i && (clearTimeout(i), i = null) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:component/coolsitelocal/coolsitelocal.js", ln: 61 }) } }

            function c() {
                try {
                    return a(window).scrollTop(0), s.emit("weather.changecity"), !1 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:component/coolsitelocal/coolsitelocal.js", ln: 67 }) } }
            try {
                var i, n = this,
                    l = n.element,
                    r = a(".kzloc-pop", l);
                n._on({ "mouseover .kzloc-icon": e, "click .kzloc-icon": e, "click .kzloc-close": o, "click .kzloc-change": c }), s.on("weather.firstload", function() {
                    try { s.emit("weather.registreload", "coolsite-tuijian") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:component/coolsitelocal/coolsitelocal.js", ln: 40 }) } }) } catch (d) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: d.message || d.description, path: "indexher:component/coolsitelocal/coolsitelocal.js", ln: 68 }) } }, destroy: function() {
            try { a.Widget.prototype.destroy.call(this), s.emit("weather.unregistreload", "coolsite-tuijian") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:component/coolsitelocal/coolsitelocal.js", ln: 73 }) } } }) });;
define("indexher:component/coolsiteresource/coolsiteresource.js", ["global", "module", "exports", "require", "indexher:static/js/config.js", "indexher:static/js/format.js", "indexher:static/js/jquery.js"], function(e, o, t, s, c, i, r) {
    var n = c,
        a = i,
        l = r,
        d = '<a hidefocus="true" data-hook="siteresource-link" href="#{url}" alog-text="#{alogText}" class="coolsiteresource-link"><span class="coolsiteresource-title" #{showTitle}>#{title}</span><img class="coolsiteresource-img #{isLarge}" src="#{imgurl}" /></a>',
        u = '<div data-hook="siteresource-tip" class="g-ib coolsiteresource-tip"></div>',
        p = { addResource: function(e) {
                try {
                    var o = l(this).parent().addClass("coolsiteresource"),
                        t = p.createDom(e),
                        s = p.createTip();
                    o.append(t).append(s), p.bindEvents(t, s, o) } catch (c) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: c.message || c.description, path: "indexher:component/coolsiteresource/coolsiteresource.js", ln: 30 }) } }, bindEvents: function(e, o, t) {
                try { t.hover(function() {
                        try { e.show() } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:component/coolsiteresource/coolsiteresource.js", ln: 35 }) } }, function() {
                        try { e.hide() } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:component/coolsiteresource/coolsiteresource.js", ln: 38 }) } }) } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:component/coolsiteresource/coolsiteresource.js", ln: 39 }) } }, createTip: function() {
                try {
                    return l(u) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:component/coolsiteresource/coolsiteresource.js", ln: 43 }) } }, createDom: function(e) {
                try {
                    var o = a(d, { url: e.kzzywurl, alogText: e.kzzywtitle || "coolsiteresource-title", showTitle: e.kzzywtitle ? "" : 'style="display:none"', isLarge: e.kzzywtitle ? "" : "coolsiteresource-lgimg", title: e.kzzywtitle, imgurl: e.kzzywimg ? HAO.httpsTrans(e.kzzywimg) : "" }),
                        t = "coolsiteresource_container";
                    return l('<div class="' + t + '" monkey="' + t + '">' + o + "</div>") } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:component/coolsiteresource/coolsiteresource.js", ln: 58 }) } } };
    o.exports = { add: p.addResource, adds: function(e) {
            try {
                var o = this,
                    t = n.get("coolsiteresource");
                t && l("a.mainlink", e).each(function() {
                    try {
                        var e = this.href,
                            s = t[e] || t[e + "/"];
                        s && o.add.call(this, s) } catch (c) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: c.message || c.description, path: "indexher:component/coolsiteresource/coolsiteresource.js", ln: 74 }) } }) } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:component/coolsiteresource/coolsiteresource.js", ln: 76 }) } } } });;
define("indexher:component/coolsiterecommend/coolsiterecommend.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/widget.js", "indexher:static/js/adjust.js", "indexher:static/js/slider.js", "indexher:static/js/log.js", "indexher:static/js/cpcbll2.js", "indexher:static/js/format.js", "indexher:static/js/browser.js", "indexher:static/js/events.js", "indexher:static/js/config.js"], function(e, t, i, o, c, n, s, l, r, a, d, m, p, h) {
    var g = c,
        u = "hao123.",
        f = "coolsiterecommend",
        x = s,
        v = l,
        y = r,
        w = a,
        _ = d,
        j = m,
        T = p,
        k = h,
        I = '<div class="coolsite-recommend" style="#{customStyle}"><div class="slider slider--nav-2" monkey="kztjcpc-#{monkey}"><div class="slider__grid"><div class="slider__content"><ul class="slider__slides">#{list}</ul></div>#{switchLink}</div></div><i class="up"></i>#{adicon}</div>',
        L = '<a class="slider__nav slider__nav--prev" alog-text="上一页" href="#"></a><a class="slider__nav slider__nav--next" alog-text="下一页" href="#"></a>',
        z = '<li class="slider__slide"><div class="items">#{item}</div></li>',
        C = '<a class="item item-link #{customClass} #{itemClass}" href="#{url}" title="#{title}" #{cpcflag} cls="#{cls}"><img class="cpcimg #{customImgClass}" src="#{img}" data-cpc="img" width="62" height="62" /><span class="desc recommend-text" data-cpc="txt">#{title}</span></a>',
        b = '<li class="textlist" style="#{customStyle}"><div class="items">#{item}</div></li>',
        S = '<span class="item textitem #{customClass}"><i class="rank g-ib"></i><a class="item-link textitem-link recommend-text" href="#{url}" title="#{title}" #{cpcflag} cls="#{cls}">#{title}</a></span>',
        H = '<a alog-text="展开收起开关" class="fold" href="#">展开</a>',
        q = '<div class="adicon"></div>',
        D = "cpckuzhan-";
    g.widget(u + f, { options: { hoverCls: "g-bg1", recommend: 0, adicon: 0, config: { youxi: { title: "游戏", switchTpl: L, listTpl: z, itemTpl: C, colLen: 10, rowLen: 2, type: "smallimg", narrowHide: 2, cpcId: "cpckzyx" }, junshi: { title: "军事", switchTpl: null, listTpl: b, itemTpl: S, colLen: 5, rowLen: 2, type: "longtext", narrowHide: 1, cpcId: "cpc_kz_longtext_junshi" }, zixun: { title: "新闻", switchTpl: null, listTpl: b, itemTpl: S, colLen: 5, rowLen: 2, type: "longtext", narrowHide: 1, cpcId: "cpc_kz_longtext_zixun" }, gouwu: { title: "购物", switchTpl: null, listTpl: z, itemTpl: C, colLen: 5, rowLen: 1, type: "bigimg", narrowHide: 1, cpcId: "cpc_kz_bigimg_gouwu" }, lvyou: { title: "旅游", switchTpl: null, listTpl: z, itemTpl: C, colLen: 5, rowLen: 1, type: "bigimg", narrowHide: 1, cpcId: "cpc_kz_bigimg_lvyou" }, qiche: { title: "汽车", switchTpl: null, listTpl: b, itemTpl: S, colLen: 6, rowLen: 3, type: "shorttext", narrowHide: 1, cpcId: "cpc_kz_shorttext_qiche" }, jinrong: { title: "金融", switchTpl: null, listTpl: b, itemTpl: S, colLen: 6, rowLen: 3, type: "shorttext", narrowHide: 1, cpcId: "cpc_kz_shorttext_jinrong" } }, recomIsShow: k.get("coolsiteRecomKey") || { youxi: "0", junshi: "0", zixun: "0", gouwu: "0", lvyou: "0", qiche: "0", jinrong: "0" }, recomOrder: ["youxi", "gouwu", "jinrong", "qiche", "lvyou", "junshi", "zixun"], recomData: k.get("coolsiteRecomData") || { youxi: null, junshi: null, zixun: null, gouwu: null, lvyou: null, qiche: null, jinrong: null } }, _init: function() {
            try {
                var e = this,
                    t = e.options;
                if (e.showKey = "", t.recomIsShow || (t.recomIsShow = { youxi: "0", junshi: "0", zixun: "0", gouwu: "0", lvyou: "0", qiche: "0", jinrong: "0" }), 1 === t.recommend) {
                    var i = e.showKey = e.checkIfShow();
                    i && (e.$recomContainer = e.render(i, t.recomData[i]), e.bindEvent()) } } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:component/coolsiterecommend/coolsiterecommend.js", ln: 204 }) } }, bindEvent: function() {
            try {
                var e = this;
                e.$recomContainer && e.$recomContainer.hover(function() {
                    try { g(this).addClass("recommend-hover") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:component/coolsiterecommend/coolsiterecommend.js", ln: 211 }) } }, function() {
                    try { g(this).removeClass("recommend-hover") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:component/coolsiterecommend/coolsiterecommend.js", ln: 214 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:component/coolsiterecommend/coolsiterecommend.js", ln: 216 }) } }, checkIfShow: function() {
            try {
                for (var e = this.options, t = e.recomOrder, i = t.length, o = 0; i > o; o++) {
                    var c = t[o];
                    if (e.recomIsShow[c] + "" == "1") return c }
                return null } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:component/coolsiterecommend/coolsiterecommend.js", ln: 229 }) } }, findTargetRow: function(e) {
            try {
                var t = this,
                    i = t.options.config[e].title,
                    o = null;
                return g("a.coolsite-itemname", t.element).each(function() {
                    try {
                        var e = g(this),
                            t = e.text();
                        if (t && t.replace(/\s/g, "") === i) return o = e.closest(".coolsite-category"), !1 } catch (c) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: c.message || c.description, path: "indexher:component/coolsiterecommend/coolsiterecommend.js", ln: 242 }) } }), o } catch (c) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: c.message || c.description, path: "indexher:component/coolsiterecommend/coolsiterecommend.js", ln: 245 }) } }, render: function(e, t) {
            function i() {
                try { b.slideDown(function() {
                        try { x.adjust() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:component/coolsiterecommend/coolsiterecommend.js", ln: 381 }) } }), $.text("收起") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:component/coolsiterecommend/coolsiterecommend.js", ln: 383 }) } }
            try {
                if (t = t && t[0] && t[0].data, !t || !t[0]) return;
                var o = this,
                    c = o.findTargetRow(e);
                if (!c || !c[0]) return;
                y({ type: "auto", k: "kzcpc-" + e });
                for (var n = o.options, s = (o.element, n.config[e]), l = s.rowLen, r = s.colLen, a = s.type, d = s.cpcId, m = "", p = 0; l > p; p++) {
                    for (var h = "", u = 0; r > u; u++) {
                        var f = t[u + r * p],
                            k = 'data-cpc="link"'; "youxi" !== e || p || u || (k = "");
                        var L = "",
                            z = s.narrowHide,
                            C = r - 1;
                        u === C - z ? L = "width-nr-last" : u >= r - z && (L = "width-nr-hide", u === C && (L += " last")), h += _(s.itemTpl, { cpcflag: k, url: f.url, img: HAO.httpsTrans(f.imgurl), title: f.title, cls: f.cls, customClass: a, itemClass: L, customImgClass: "cpc" + a }) }
                    m += _(s.listTpl, { customStyle: p + 1 === l ? "margin-bottom:0;" : null, item: h }) }
                var b = g(_(I, { switchLink: s.switchTpl, customStyle: a.indexOf("text") > -1 ? "height:" + (28 * l - 14) + "px" : null, list: m, monkey: e, adicon: "gouwu" === e && 1 === n.adicon ? q : null })).css("overflow", "visible").insertAfter(c);
                if ("smallimg" === a) {
                    var S = v({ context: b, slider: ".slider", grid: ">.slider__grid", gridhoverCls: "slider__grid--hover", slides: ">.slider__grid>.slider__content>.slider__slides", next: ">.slider__grid>.slider__nav--next", prev: ">.slider__grid>.slider__nav--prev" }),
                        O = 898,
                        R = 698;
                    T.on("wideversion.viewportchange", function(e) {
                        try { S && S.resize({ width: "wide" === e ? O : R }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:component/coolsiterecommend/coolsiterecommend.js", ln: 347 }) } }) }
                if (d && w.init({ id: d, ctx: b }), "6.0" !== j.ie) {
                    var K = !1,
                        $ = g(H),
                        A = window.localStorage;
                    if (A) {
                        var E = A.getItem(D + e),
                            B = new Date;
                        E && 6048e5 > B - E ? K = !0 : i() } else i();
                    g(".coolsite-more-wrap", c).html($).click(function() {
                        try {
                            return b.slideToggle(function() {
                                try { K = !K, A && A.removeItem(D + e), K ? ($.text("展开"), A && A.setItem(D + e, +new Date)) : $.text("收起"), x.adjust() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:component/coolsiterecommend/coolsiterecommend.js", ln: 402 }) } }), !1 } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:component/coolsiterecommend/coolsiterecommend.js", ln: 404 }) } }) }
                return b } catch (F) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: F.message || F.description, path: "indexher:component/coolsiterecommend/coolsiterecommend.js", ln: 408 }) } } }) });;
define("indexher:component/eltips/eltips.js", ["global", "module", "exports", "require", "indexher:static/js/imageloader.js", "indexher:static/js/events.js", "indexher:static/js/format.js", "indexher:static/js/jquery.js", "indexher:static/js/widget.js"], function(e, t, i, n, s, o, c, p, a) {
    var l = s,
        r = o,
        h = c,
        d = p,
        g = "hao123.",
        f = "eltips",
        m = "el-tips",
        x = 750;
    d.widget(g + f, { _create: function() {
            try {
                var e = this;
                e.$cont = e.element.offsetParent(), e.options.imgurl = HAO.httpsTrans(e.options.imgurl);
                var t = e._initHTML(),
                    i = t.children();
                e.$el = t, e.$imgWrp = i.eq(0), e.$txtWrp = i.eq(1), e._initShow(), i = null } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:component/eltips/eltips.js", ln: 44 }) } }, _initHTML: function() {
            try {
                var e = '<a class="el-tips el-tips-hidden #{style}" monkey="#{monkey}" href="#{url}" style="width:#{width}px"><span class="el-tips-img-wrap" style="width:#{width}px"><img class="el-tips-img" src="#{imgurl}" style="height:#{height}px;width:#{width}px" /></span><span class="el-tips-txt-wrap"><span class="el-tips-txt">#{title}</span><span class="el-tips-txt-arrow"></span></span></a>';
                return d(h(e, this.options)).appendTo(this.$cont) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:component/eltips/eltips.js", ln: 64 }) } }, _initShow: function() {
            try {
                var e = this;
                this._loadImg(function() {
                    try { e.$el.addClass(m + "-show"), e._setPosition(), e._bindEvent(), e._showImg(function() {
                            try { e._showTxt(function() {
                                    try { e._delay(e._hideAll, 3e3) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:component/eltips/eltips.js", ln: 80 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:component/eltips/eltips.js", ln: 81 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:component/eltips/eltips.js", ln: 82 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:component/eltips/eltips.js", ln: 83 }) } }, _loadImg: function(e) {
            try { l([this.$imgWrp.children().prop("src")], e) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:component/eltips/eltips.js", ln: 92 }) } }, _showImg: function(e) {
            try { this.$imgWrp.animate({ height: 60 }, x, e) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:component/eltips/eltips.js", ln: 101 }) } }, _hideImg: function(e) {
            try { this.$imgWrp.animate({ height: 0 }, x, e) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:component/eltips/eltips.js", ln: 110 }) } }, _centerTxt: function() {
            try { this.$txtWrp.children().eq(0).css("marginLeft", function() {
                    try {
                        return d(this).outerWidth() / -2 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:component/eltips/eltips.js", ln: 119 }) } }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:component/eltips/eltips.js", ln: 120 }) } }, _showTxt: function(e) {
            try { this.$txtWrp.fadeIn(x, e), this._centerTxt() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:component/eltips/eltips.js", ln: 130 }) } }, _hideTxt: function() {
            try { this.$txtWrp.fadeOut(x) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:component/eltips/eltips.js", ln: 138 }) } }, _setPosition: function() {
            try {
                var e = this,
                    t = e.element,
                    i = e.$cont;
                e.$el.css("right", i.offset().left + i.outerWidth() - t.offset().left - t.outerWidth()), e._centerTxt() } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:component/eltips/eltips.js", ln: 154 }) } }, _hideAll: function() {
            try {
                var e = this;
                e._hideTxt(), e._hideImg(function() {
                    try { e.destroy() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:component/eltips/eltips.js", ln: 165 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:component/eltips/eltips.js", ln: 166 }) } }, _bindEvent: function() {
            try {
                var e = this;
                r.on("wideversion.viewportchange", e._setPosition, e), e.$el.click(function(t) {
                    try {
                        var i = e.options,
                            n = i.events;
                        n && (r.emit(n, i.eventsparam), t.preventDefault()) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:component/eltips/eltips.js", ln: 185 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:component/eltips/eltips.js", ln: 186 }) } }, _destroy: function() {
            try {
                var e = this;
                r.un("wideversion.viewportchange", e._setPosition, e), e.$el.off("click").remove(), e.$imgWrp = null, e.$txtWrp = null } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:component/eltips/eltips.js", ln: 199 }) } } }) });;
define("indexher:component/subsite/showfamousbanner.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/format.js", "indexher:static/js/cookie.js", "indexher:static/js/events.js", "indexher:static/js/log.js", "indexher:static/js/adjust.js"], function(e, n, t, o, s, i, a, r, c, l) {
    function h() {
        try {} catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:component/subsite/showfamousbanner.js", ln: 16 }) } }
    var p = s,
        d = i,
        u = a,
        m = r,
        f = c,
        g = l;
    h.prototype.init = function(e, n, t) {
        try {
            if (!e) return;
            var o = this;
            if (o.linktype = e.linkstyle || "m", t !== o.linktype) return;
            o.linksdata = e.data || [], o.line = e.line, o.column = e.column, o.monkey = e.monkey, o.iconimg = e.imgurl, o.bannerbox = "", o.bannerboxtpl = '<div class="banner-box banner-box#{line}" monkey="subsite" data-hook="bannerBox">#{content}<span class="arrow posl#{column}"></span><a href="###" class="closebanner" data-hook="closebanner"></a></div>', o.linkTpl = '<li class="#{isred}"><a target="_blank" class="famous-banner" cls="#{cls}" hidefocus="true" title="#{title}" href="#{url}" alog-text="#{title}"><span>#{title}</span></a></li>', o.renderBanner(n), f({ page: "index", level: 1, type: "auto", k: "famousbannershow-" + o.monkey }), o.closeBanner() } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:component/subsite/showfamousbanner.js", ln: 64 }) } }, h.prototype.renderOneLink = function(e) {
        try {
            return d(this.linkTpl, e) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:component/subsite/showfamousbanner.js", ln: 69 }) } }, h.prototype.renderBanner = function(e) {
        try {
            var n = this,
                t = "";
            p.each(n.linksdata, function() {
                try {
                    var e = this,
                        o = e.imgurl || n.iconimg;
                    t += n.renderOneLink({ isred: e.isred ? "isred" : "", title: e.title, url: e.url, isicon: o ? "" : "noicon", cls: e.tjtype || "", iconimg: HAO.httpsTrans(o || "http://s0.hao123img.com/img/1L/Aw/2F/mk/ch/o/blank.gif") }) } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:component/subsite/showfamousbanner.js", ln: 88 }) } }), n.bannerbox = p(d(n.bannerboxtpl, { line: n.line, column: n.column, content: '<ul class="link-banner" monkey="' + n.monkey + '">' + t + "</ul>" })).appendTo(e) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:component/subsite/showfamousbanner.js", ln: 95 }) } }, h.prototype.closeBanner = function(e) {
        try {
            var n = this,
                t = p('[data-hook="closebanner"]', e);
            m.on("linkheight.modify", function(e) {
                try { t.show().click(function() {
                        try {
                            return n.bannerbox.remove(), e.css("height", ""), u.set("famous_banner_close", 1, { expires: 1 }), g.adjust(), !1 } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:component/subsite/showfamousbanner.js", ln: 111 }) } }), g.adjust() } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:component/subsite/showfamousbanner.js", ln: 113 }) } }) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:component/subsite/showfamousbanner.js", ln: 114 }) } }, n.exports = h });;
define("indexher:component/subsite/handlebannercookie.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/cookie.js", "indexher:static/js/events.js", "indexher:static/js/JSON.js", "indexher:component/subsite/showfamousbanner.js"], function(e, n, t, i, o, a, s, c, r) {
    function h(e, n, t, i) {
        try {
            var o = new j;
            o.init(d(e, n, t, i), m(t), i) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:component/subsite/handlebannercookie.js", ln: 25 }) } }

    function d(e, n, t, i) {
        try {
            var o = u(e, n, t);
            if (o && "none" !== o)
                for (var a = e.length; a--;) {
                    var s = e[a];
                    if (s.linkkey === o && s.data) return p(s.url, i, m(t + " a")), s }
            return !1 } catch (c) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: c.message || c.description, path: "indexher:component/subsite/handlebannercookie.js", ln: 41 }) } }

    function p(e, n, t) {
        try { t.each(function() {
                try {
                    var n = m(this),
                        t = n.attr("href");
                    if (f(e, t)) return y.done("linkheight.modify", n.parent().css("height", 64)), !1 } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:component/subsite/handlebannercookie.js", ln: 52 }) } }) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:component/subsite/handlebannercookie.js", ln: 53 }) } }

    function f(e, n) {
        try {
            return e === n || e + "/" === n } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:component/subsite/handlebannercookie.js", ln: 57 }) } }

    function l(e, n) {
        try { g(n), m(e).mousedown(function() {
                try {
                    var e = m(this).attr("href");
                    for (var n in w)
                        if (w.hasOwnProperty(n)) {
                            var t = w[n];
                            f(e, t) && (v[n] = (v[n] || 0) + 1, x.set(k, b.stringify(v), { expires: 7 })) } } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:component/subsite/handlebannercookie.js", ln: 75 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:component/subsite/handlebannercookie.js", ln: 76 }) } }

    function g(e) {
        try {
            for (var n = e && e.length || 0; n--;) {
                var t = e[n];
                w[t.linkkey] = t.url } } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:component/subsite/handlebannercookie.js", ln: 85 }) } }

    function u(e, n) {
        try { g(e);
            var t = 0,
                i = "";
            return m.each(v, function(e, n) {
                try { w[e] ? n > t && (i = e, t = n) : v[e] = void 0 } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:component/subsite/handlebannercookie.js", ln: 104 }) } }), x.set(k, b.stringify(v), { expires: 7 }), t >= n ? i : "none" } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:component/subsite/handlebannercookie.js", ln: 111 }) } }
    var m = o,
        x = a,
        y = s,
        b = c,
        j = r,
        k = "famous_banner",
        v = b.parse(x.get(k) || "{}"),
        w = {};
    n.exports = { showBanner: h, setclickcookie: l } });;
define("indexher:component/sitelinks/sitelinks.js", ["global", "module", "exports", "require", "indexher:static/js/browser.js", "indexher:static/js/jquery.js", "indexher:static/js/widget.js"], function(e, i, n, t, s, o, c) {
    var a = s,
        r = o,
        d = "hao123.",
        h = "sitelinks";
    r.widget(d + h, { _create: function() {
            try { this._render(), this._bindEvent() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:component/sitelinks/sitelinks.js", ln: 27 }) } }, _render: function() {
            try {
                var e = this,
                    i = e.element;
                e.$bgbox = i, e.$openup = r("#" + i.prop("id") + "_hook"), e.$sites = r("a", i), a.ie && a.ie < 7 && e.$sites.width(e.element.width() - 16) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:component/sitelinks/sitelinks.js", ln: 45 }) } }, _bindEvent: function() {
            try {
                var e = this;
                e.$bgbox.hover(function() {
                    try { e._clearTimer(e.hideTimer) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:component/sitelinks/sitelinks.js", ln: 58 }) } }, function() {
                    try { e._setHideTimer() } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:component/sitelinks/sitelinks.js", ln: 61 }) } }), e.$openup.hover(function() {
                    try { e._setShowTimer() } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:component/sitelinks/sitelinks.js", ln: 67 }) } }, function() {
                    try { e._setHideTimer() } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:component/sitelinks/sitelinks.js", ln: 70 }) } }), e.$sites.click(function() {
                    try { e._hide() } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:component/sitelinks/sitelinks.js", ln: 75 }) } }) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:component/sitelinks/sitelinks.js", ln: 76 }) } }, _clearTimer: function(e) {
            try { clearTimeout(e) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:component/sitelinks/sitelinks.js", ln: 85 }) } }, _setHideTimer: function() {
            try {
                var e = this;
                e._clearTimer(e.showTimer), e.hideTimer = setTimeout(function() {
                    try { e._hide() } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:component/sitelinks/sitelinks.js", ln: 96 }) } }, 300) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:component/sitelinks/sitelinks.js", ln: 97 }) } }, _setShowTimer: function() {
            try {
                var e = this;
                e._clearTimer(e.hideTimer), e.showTimer = setTimeout(function() {
                    try { e._show() } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:component/sitelinks/sitelinks.js", ln: 108 }) } }, 300) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:component/sitelinks/sitelinks.js", ln: 109 }) } }, _hide: function() {
            try {
                var e = this;
                r(e.element).parent().css("zIndex", 0).parent().css("zIndex", ""), e.$bgbox.hide(), e.$openup.removeClass("open-down") } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:component/sitelinks/sitelinks.js", ln: 123 }) } }, _show: function() {
            try {
                var e = this;
                r(e.element).parent().css("zIndex", 90).parent().css("zIndex", 200), a.ie && a.ie < 7 && r("a", e.$bgbox).css("width", 0), e.$bgbox.show(), e.$openup.addClass("open-down") } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:component/sitelinks/sitelinks.js", ln: 140 }) } } }) });;
define("indexher:component/toptab/toptab.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/profile.js"], function(t, e, o, n, a, c) {
    function i(t) {
        try { s.set(t.topKey, t.current);
            var e = p("#" + t.id);
            if (e.find("div[data-hook=bangdan_drop]")[0]) {
                var o, n = function() {
                        try { this.removeClass(r).next().hide(), p(document).off("click", o), o = null } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:component/toptab/toptab.js", ln: 29 }) } },
                    a = function() {
                        try { this.addClass(r).next().show(), o = p.proxy(n, this), p(document).on("click", o) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:component/toptab/toptab.js", ln: 35 }) } };
                e.on("click", "[data-hook=drop-arrow]", function() {
                    try {
                        var t = p(this);
                        return t.hasClass(r) ? n.call(t) : a.call(t), !1 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:component/toptab/toptab.js", ln: 47 }) } }).on("click", "[data-hook=bangdan_link]", function() {
                    try { t.dropKey && s.set(t.dropKey, p(this).data("alias")) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:component/toptab/toptab.js", ln: 52 }) } }) }
            return function() {
                try { p(document).off("click", o || p.noop), e.off("click"), e = null } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:component/toptab/toptab.js", ln: 59 }) } } } catch (c) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: c.message || c.description, path: "indexher:component/toptab/toptab.js", ln: 60 }) } }
    var p = a,
        s = c,
        r = "drop-up";
    e.exports = i });;
define("indexher:component/specialicon/speciallinkstyle.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/format.js", "indexher:static/js/imageloader.js", "indexher:static/js/config.js", "indexher:static/js/events.js"], function(e, n, i, t, s, c, a, o, l) {
    function p(e, n) {
        try {
            var i, t = e.url;
            return i = n.is("#box-site,#box-famoussite") ? 'a[href="' + t + '"]' : 'a.mainlink[href="' + t + '"]', x(i, n) } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:component/specialicon/speciallinkstyle.js", ln: 27 }) } }

    function r(e, n, i, t) {
        try {
            var s = n.imgurl = HAO.httpsTrans(n.imgurl),
                c = n.icon = HAO.httpsTrans(n.icon);
            d(e), j([s, c], function() {
                try { n.iconshow = "0" === n.iconshow ? !1 : !0, s && (g(e, n), h(e, i, n)), c && f(e, n), u(e, t) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:component/specialicon/speciallinkstyle.js", ln: 51 }) } }) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:component/specialicon/speciallinkstyle.js", ln: 52 }) } }

    function d(e) {
        try {
            for (var n = e.parent(), i = n.prop("childNodes"), t = i.length - 1; t >= 0; t--) {
                var s = i[t];
                if (3 !== s.nodeType) {
                    var c = x(s);
                    c.is(e) || c.hide() } else s.parentNode.removeChild(s) } } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:component/specialicon/speciallinkstyle.js", ln: 69 }) } }

    function h(e, n, i) {
        try { e.addClass("imgtxt"), "none" !== e.css("backgroundImage") && (i.iconshow || e.attr("style", "").addClass("no-icon")) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:component/specialicon/speciallinkstyle.js", ln: 80 }) } }

    function g(e, n) {
        try {
            var i = e.attr("alog-text", n.tip).find("span");
            i.length ? i.text("") : i = e.html("<span></span>").find("span"), i.css({ backgroundImage: "url(" + n.imgurl + ")", width: m(n) }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:component/specialicon/speciallinkstyle.js", ln: 97 }) } }

    function f(e, n) {
        try { e.addClass("imgicon").css("backgroundImage", "url(" + n.icon + ")") } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:component/specialicon/speciallinkstyle.js", ln: 102 }) } }

    function m(e) {
        try {
            var n = e.iconshow ? 83 : 103,
                i = parseInt(e.width, 10);
            return !i || i > n ? n : i } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:component/specialicon/speciallinkstyle.js", ln: 112 }) } }

    function u(e, n) {
        try {
            var i, t;
            ("famoussite" === n || "site" === n) && (i = ".sitemainlink,.sitesublink,.js_text"), i && (t = e.width(), e.siblings(i).each(function() {
                try { t += x(this).width() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:component/specialicon/speciallinkstyle.js", ln: 127 }) } }), t > 56 && e.parent().addClass("site-item-longchar")) } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:component/specialicon/speciallinkstyle.js", ln: 134 }) } }

    function y(e, n) {
        try {
            var i = x(e),
                t = e.substring(5);
            n && i && x.each(n, function(e, n) {
                try {
                    if ("1" === n.isshow) {
                        var s = p(n, i);
                        s.length && r(s.eq(0), n, i, t) } } catch (c) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: c.message || c.description, path: "indexher:component/specialicon/speciallinkstyle.js", ln: 147 }) } }) } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:component/specialicon/speciallinkstyle.js", ln: 149 }) } }
    var x = s,
        j = a;
    n.exports = y });;
define("indexher:container/module/skin/hooks.js", ["global", "module", "exports", "require", "indexher:static/js/pageEvents.js", "indexher:static/js/format.js", "indexher:static/js/browser.js", "indexher:static/js/jquery.js", "indexher:static/js/events.js", "indexher:static/js/autoheight-server.js"], function(e, n, o, i, s, t, r, c, a, d) {
    function h(e) {
        function n() {
            try {
                return !x(document.body).hasClass("width-nr") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/skin/hooks.js", ln: 35 }) } }
        try {
            var o = "layoutContainer",
                i = '<a class="xinglink skinresourcecls js_skinresource" monkey="#{monkeyval}" alog-text="#{monkeytitle}" href="#{url}"></a>',
                s = { position: "fixed", height: j, width: w, left: "50%", top: v, cursor: "pointer", "z-index": 200, background: "url(" + HAO.httpsTrans(e.imgurl) + ") 0 0 no-repeat" };
            6 === parseInt(k.ie, 10) && (s.position = "absolute"), s["margin-left"] = n() ? "-652px" : "-552px";
            var t = x(m(i, { monkeyval: e.tip, monkeytitle: e.title, url: e.url }));
            if (window.skinresource) return;
            t.css(s).appendTo(x("#" + o)), y.on("wideversion.viewportchange", function(e) {
                try { "wide" === e ? t.css("margin-left", -652) : t.css("margin-left", -552) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/skin/hooks.js", ln: 77 }) } }), window.skinresource = !0, k.ie < 7 && t.css({ position: "absolute", top: x(window).scrollTop() + v }), t.hover(function() {
                try { x(this).css("background-position", "-50px 0") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/skin/hooks.js", ln: 91 }) } }, function() {
                try { x(this).css("background-position", "0 0") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/skin/hooks.js", ln: 94 }) } }), g(), f.on("viewport.deferchange", function(e) {
                try { u(), g(e) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/skin/hooks.js", ln: 100 }) } }) } catch (r) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: r.message || r.description, path: "indexher:container/module/skin/hooks.js", ln: 101 }) } }

    function l(e) {
        try { f.emit("skinresource", e) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/skin/hooks.js", ln: 109 }) } }

    function p() {
        try { x(".js_skinresource") && (x(".js_skinresource").remove(), k.ie < 7 && f.un("viewport.deferchange", function(e) {
                try { u(), g(e) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/skin/hooks.js", ln: 119 }) } }), window.skinresource = !1) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/skin/hooks.js", ln: 124 }) } }

    function u() {
        try { k.ie < 7 && x(".js_skinresource").stop(!0, !0).animate({ top: x(window).scrollTop() + v }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/skin/hooks.js", ln: 132 }) } }

    function g(e) {
        try { e = e || f.getViewport(), e.width < 1210 ? x(".js_skinresource").hide() : e.width < 1410 && e.width >= 1260 ? x(".js_skinresource").hide() : x(".js_skinresource").fadeIn() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/skin/hooks.js", ln: 144 }) } }
    var f = s,
        m = t,
        k = r,
        x = c,
        y = a,
        j = 160,
        w = 50,
        v = 270;
    f.on("skinresource", h);
    var _ = { _Loadskinresource: l, _Unloadskinresource: p, _add: function(e, n) {
            try {
                if (this[e]) {
                    var o = this[e];
                    this[e] = function(e) {
                        try { o(e), n(e) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/skin/hooks.js", ln: 173 }) } } } else this[e] = n } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/skin/hooks.js", ln: 175 }) } }, _cover: function(e, n) {
            try { this[e] = n } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/skin/hooks.js", ln: 185 }) } } };
    n.exports = _ });;
define("indexher:container/module/skin/service.js", ["global", "module", "exports", "require", "indexher:static/js/log.js", "indexher:static/js/profile.js", "indexher:static/js/events.js", "indexher:static/js/cookie.js", "indexher:static/js/JSON.js", "indexher:static/js/config.js", "indexher:container/module/skin/hooks.js"], function(e, n, i, t, s, r, c, o, a, d, l) {
    function u() {
        try {
            var e = T.length * Math.random() | 0,
                n = "";
            return T.length > 0 && T[e] !== H.curSkin ? (n = T[e], T.splice(e, 1), n) : (T.length <= 0 && (T = C.slice()), u()) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/skin/service.js", ln: 61 }) } }

    function k() {
        try {
            var e = u();
            g(e, { src: "random" }), h(e), I.emit("skinbtn.click", { skin: H.userSkin }) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/skin/service.js", ln: 76 }) } }

    function h(e) {
        try { e = e || H.curSkin, F || H.userSkin === b && e !== b && _({ type: "newskin" }), F = !0, e && H.userSkin !== e && (B.set(v, e), H.lastSkin = J = H.userSkin, H.userSkin = H.curSkin = e, I.emit("skin.save", e)) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/skin/service.js", ln: 105 }) } }

    function g(e, n) {
        try {
            var i, t, s = document,
                r = s.getElementById("skinroot"),
                c = "",
                o = H.curSkin;
            e && H.curSkin !== e && (c = HAO.httpsTrans(A + "?c=" + L.getCSRFId() + "&type=kp&skin=" + e), document.getElementById("userSkin") ? document.getElementById("userSkin").setAttribute("href", c) : (i = s.createElement("link"), t = s.getElementsByTagName("head")[0], i.setAttribute("rel", "stylesheet"), i.setAttribute("type", "text/css"), i.setAttribute("id", "userSkin"), t.appendChild(i), i.setAttribute("href", c)), H.curSkin = e);
            var a = r.className,
                d = a.substring(a.indexOf("sk_"));
            r.className = a.replace(d, "sk_" + e), n && n.src && (H.src = n.src), I.emit(o + "unload"), m(o, H.curSkin) } catch (l) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: l.message || l.description, path: "indexher:container/module/skin/service.js", ln: 160 }) } }

    function m(e, n) {
        try { O && O[e] && O[e](!1), O && O[n] && O[n](!0) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/skin/service.js", ln: 175 }) } }

    function p() {
        try { g(H.userSkin, { src: "cansel" }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/skin/service.js", ln: 184 }) } }

    function f() {
        try { g(b, { src: "reset" }), h(b) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/skin/service.js", ln: 194 }) } }

    function S(e) {
        try { e = e || "resetLast", g(H.lastSkin, { src: e }), h(H.lastSkin) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/skin/service.js", ln: 206 }) } }

    function x(e) {
        try { q || (H.curSkin = H.userSkin = H.lastSkin = e.userSkin, H.recommendSkin = e.recommendSkin, H.src = e.src || H.src, q = !0), e.skinresource && O._add(H.curSkin, function(n) {
                try { n ? O._Loadskinresource(e.skinresource) : O._Unloadskinresource() } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/skin/service.js", ln: 231 }) } });
            try { m(null, H.curSkin) } catch (n) {} } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/skin/service.js", ln: 238 }) } }

    function y(e) {
        try {
            return arguments.length >= 0 ? H[e] ? H[e] : void 0 : H } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/skin/service.js", ln: 248 }) } }

    function j() {
        try {
            return J } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/skin/service.js", ln: 255 }) } }
    var v = "skin",
        b = "skin-color-green",
        A = "/api/getskins/",
        E = "init",
        _ = s,
        B = r,
        I = c,
        L = o,
        N = d,
        O = l,
        w = N.get("allskin"),
        C = [],
        T = [],
        q = !1,
        F = !1,
        H = { userSkin: b, curSkin: b, recommendSkin: b, lastSkin: b, src: E },
        J = b;
    for (var M in w) w.hasOwnProperty(M) && C.push(w[M]);
    T = C.slice(), n.exports = { init: x, get: y, resetLastSkin: S, config: H, setSkin: h, viewSkin: g, canselSkin: p, resetSkin: f, randomSkin: k, getLastSkin: j } });;
define("indexher:container/module/siye/siye.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/animation.js", "indexher:static/js/store.js", "indexher:static/js/browser.js"], function(e, i, n, t, s, o, c, r) {
    function a(e) {
        try {
            try {
                var i = g.get(e) } catch (n) {
                return !0 }
            if (i && new Date - i <= 864e5) return;
            return !0 } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/siye/siye.js", ln: 27 }) } }

    function d() {
        try {
            var e = h("#siye"),
                i = h(".close", e).click(function() {
                    try {
                        var i = (new Date).toDateString();
                        g.set("siye", +new Date(i)), e.hide() } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/siye/siye.js", ln: 36 }) } });
            if (!y.ie || y.ie > 6) {
                var n, t, s = h(".advertise", e),
                    o = s[0],
                    c = i[0],
                    r = ["0 0", "-90 0", "-180 0", "-270 0", "-360 0", "-450 0", "-540 0", "-630 0", "-720 0"],
                    a = r.slice(0).reverse(),
                    d = ["34 33", "37 36", "39 39", "41 41", "44 43", "47 46", "49 49", "52 51", "54 53"],
                    p = d.slice(0).reverse(),
                    f = function(e, i) {
                        try {
                            var n = h.inArray(i, e);
                            return 0 > n && (n = 0), e.slice(n) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/siye/siye.js", ln: 61 }) } },
                    u = function(e) {
                        try {
                            return e && e.replace(/[^-\d ]/g, "") } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/siye/siye.js", ln: 66 }) } },
                    m = function() {
                        try {
                            return u(s.css("backgroundPosition")) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/siye/siye.js", ln: 71 }) } },
                    x = function() {
                        try {
                            return u(i.css("top") + " " + i.css("right")) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/siye/siye.js", ln: 76 }) } },
                    j = function(e, i) {
                        try { n && n.dispose(), t && t.dispose(), e = f(e, x()), i = f(i, m()), t = l().changePosition(o, i).start(40), n = l().changeMove(c, e).start(40) } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/siye/siye.js", ln: 88 }) } };
                e.hover(function() {
                    try { j(d, r) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/siye/siye.js", ln: 92 }) } }, function() {
                    try { j(p, a) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/siye/siye.js", ln: 95 }) } }) }
            e.show() } catch (v) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: v.message || v.description, path: "indexher:container/module/siye/siye.js", ln: 99 }) } }
    var h = s,
        l = o,
        g = c,
        y = r;
    a("siye") && d() });;
define("indexher:container/module/popup/getTpl.js", ["global", "module", "exports", "require", "indexher:static/js/format.js"], function(p, s, t, o, e) {
    function a(p) {
        try {
            return "sethome" === p ? c[p] : "sethomeNotie" === p ? c[p] : l(c.tpl, { head: c.head, content: c[p] }) } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/popup/getTpl.js", ln: 87 }) } }
    var l = e,
        c = { head: '<div class="popup-head"><a class="js_close" href="javascript:void(0);"></a><span class="js_title"></span></div>', confirm: '<div class="popup-body"><i></i><div><strong class="js_text"></strong><p><button class="button js_ok"></button><button class="button js_cancel">取消</button></p></div></div>', alert: '<div class="popup-alert-w"><p class="popup-alert-text js_text"></p><p class="popup-alert-control"><button class="button js_ok">确定</button></p></div>', sethome: '<div class="popup-sethome" monkey="homefail"><p class="popup-sethome-title"></p><p class="popup-sethome-text">您可能正遭受恶意软件的强行篡改<br/>建议您安装hao123浏览器，保护您的主页</p><p class="popup-sethome-hint">仅需2秒即可完成</p><a class="popup-sethome-close js_close" href="###"></a><a class="popup-sethome-ok js_ok" href="http://update.123juzi.net/dl.php?edition=hao123_juzi_canal&cid=94906731_o2_hao_" title="下载hao123浏览器"></a></div>', upload: '<div class="popup-upload-w g_clr"><div class="g-ib popup-upload-ct"><p class="popup-upload-select"><button class="popup-upload-btns"></button><span class="btnselect js_select"></span><span class="tip js_text"></span></p><div class="popup-upload-desk js_cutter"></div><div class="popup-upload-state" style="display:none;"><span class="state-txt js_stattxt"></span></div><p class="popup-upload-caijian"><button class="popup-upload-btncj js_ok"></button></p></div></div>', sethomeNotie: '<div class="popup-sethome" monkey=sethomeNotie"><p class="popup-sethome-title-notie"></p><p class="popup-sethome-text" style="color:#F46417">您的浏览器不支持一键设为主页<br/>建议下载hao123浏览器，上网更快更简单</p><p class="popup-sethome-hint-notie-w"><a class="popup-sethome-hint-notie" href="#{openUrl}">#{helpText}浏览器中，如何设hao123为主页？</a></p><a class="popup-sethome-close js_close" href="###"></a><a class="popup-sethome-ok js_ok" title="下载hao123浏览器" href="http://update.123juzi.net/dl.php?edition=hao123_juzi_canal&cid=94906731_o2_hao_"></a></div>', tpl: '<div class="popup">#{head}#{content}</div>' };
    s.exports = a });;
define("indexher:container/module/popup/mask.js", ["global", "module", "exports", "require", "indexher:static/js/browser.js"], function(e, t, n, o, a) {
    function i() {
        try {
            var e = s.body,
                t = s.documentElement,
                n = "BackCompat" === s.compatMode ? e : s.documentElement;
            return Math.max(t.scrollHeight, e.scrollHeight, n.clientHeight) + "px" } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/popup/mask.js", ln: 18 }) } }
    var c = a,
        p = null,
        s = e.document,
        r = { show: function() {
                try { p || (p = s.createElement("div"), p.className = "popup-mask", s.body.appendChild(p)), 6 === parseInt(c.ie, 10) && (p.style.height = i()), p.style.display = "" } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/popup/mask.js", ln: 33 }) } }, hide: function() {
                try { p && (p.style.display = "none") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/popup/mask.js", ln: 39 }) } }, refresh: function() {
                try { p && (p.style.height = i()) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/popup/mask.js", ln: 45 }) } }, remove: function() {
                try { p && (p.parentNode.removeChild(p), p = null) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/popup/mask.js", ln: 52 }) } } };
    t.exports = r });;
define("indexher:container/module/popup/base.js", ["global", "module", "exports", "require", "indexher:container/module/popup/mask.js", "indexher:static/js/browser.js", "indexher:static/js/pageEvents.js", "indexher:static/js/jquery.js", "indexher:static/js/widget.js"], function(e, n, o, t, i, a, s, p, c) {
    function d(e) {
        try {
            var n = e || l.getViewport(),
                o = (n.height - this.height) / 2;
            u && (r.refresh(), o += n.scrollTop), this.element && this.element.css({ left: (n.width - this.width) / 2, top: o }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/popup/base.js", ln: 32 }) } }
    var r = i,
        h = a,
        l = s,
        g = p,
        u = 6 === parseInt(h.ie, 10);
    g.widget("lottery.popup", { _baseCreate: function() {
            try { this.element.addClass(this.options.className) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/popup/base.js", ln: 42 }) } }, _appendToBody: !1, _baseShow: function(e) {
            try {
                var n = this,
                    o = n.element;
                n._appendToBody || (o.appendTo("body"), n._appendToBody = !0), n.height = o.height(), n.width = o.width(), g.isFunction(e) ? (d.call(n), e(o)) : o.show(), n.options.isModel && r.show(), n.bindDeferChange(), d.call(n) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/popup/base.js", ln: 80 }) } }, _baseTipShow: function(e) {
            try {
                var n = this,
                    o = n.element;
                n._appendToBody || (o.appendTo("body"), n._appendToBody = !0), n.height = o.height(), n.width = o.width(), g.isFunction(e) ? e(o) : o.show(), n.options.isModel && r.show() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/popup/base.js", ln: 108 }) } }, _baseHide: function(e) {
            function n() {
                try { t.hide(), o.options.isModel && r.hide() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/popup/base.js", ln: 130 }) } }
            try {
                var o = this,
                    t = o.element;
                g.isFunction(e) ? e(t, n) : n(), o.unbindDeferChange() } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/popup/base.js", ln: 133 }) } }, remove: function(e) {
            function n() {
                try { t.remove(), o.options.isModel && r.remove() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/popup/base.js", ln: 150 }) } }
            try {
                var o = this,
                    t = o.element;
                g.isFunction(e) ? e(t, n) : n(), o.unbindDeferChange() } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/popup/base.js", ln: 153 }) } }, bindDeferChange: function() {
            try {
                var e = this;
                e.deferchangeProxy || (e.deferchangeProxy = g.proxy(d, e), l.on("viewport.deferchange", e.deferchangeProxy)) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/popup/base.js", ln: 161 }) } }, unbindDeferChange: function() {
            try {
                var e = this;
                e.deferchangeProxy && (l.un("viewport.deferchange", e.deferchangeProxy), e.deferchangeProxy = null) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/popup/base.js", ln: 169 }) } } }) });;
define("indexher:container/module/headad/headad.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/browser.js", "indexher:static/js/cookie.js", "indexher:static/js/juziAX.js", "indexher:static/js/juziDPS.js", "indexher:static/js/log.js", "indexher:static/js/format.js"], function(e, t, a, n, i, o, c, d, s, r, h) {
    function l(t) {
        function a() {
            try { e.getXhtData = function(e) {
                    try {
                        var a = e.data;
                        if (a) {
                            var i = +e.count;
                            if (l ? -1 !== i && l++ : l = 0, (i > l || -1 === i) && 100 > l) { n(a), h(l, 365);
                                var o = t.h360id;
                                if (o) {
                                    var c = function() {
                                            try { p("#" + o).remove(), p("style").each(function() {
                                                    try { p(this).attr("id") && p(this).remove() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/headad/headad.js", ln: 63 }) } }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/headad/headad.js", ln: 64 }) } },
                                        d = setInterval(c, 1e3);
                                    setTimeout(function() {
                                        try { clearInterval(d) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/headad/headad.js", ln: 70 }) } }, 6e4) } } } } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/headad/headad.js", ln: 74 }) } } } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/headad/headad.js", ln: 75 }) } }

        function n(e) {
            try { i({ title: e["content" + Math.floor(3 * Math.random() + 1)] || e.content, url: e.content_url, imgurl: e.icon, btn: e.button, btnhover: e.style, btnurl: e.button_url, showPopup: e.content4, monkey: s() }), r() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/headad/headad.js", ln: 91 }) } }

        function i(e) {
            function a(e) {
                try { c.slideUp(), h(b, +("close" === e ? t.closec : t.downc)) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/headad/headad.js", ln: 160 }) } }
            try {
                var n = { iconStyle: e.imgurl ? "background:url(" + HAO.httpsTrans(e.imgurl) + ") no-repeat;" : "", url: e.url, title: e.title, btnurl: e.btnurl || e.url, btnStyle: e.btn ? "background:url(" + HAO.httpsTrans(e.btn) + ") no-repeat;" : "", monkey: e.monkey, id: t.id, fblink: t.fblink, fbtitle: t.fbtitle, fbtype: "true" === t.fbtype ? "block" : "none", fbcolor: t.fbcolor },
                    i = '<div id="#{id}" class="g-wrap widget-topbanner" monkey="#{monkey}" alog-alias="topbanner"><div class="g-wd topbanner-inner"><span class="icon" style="#{iconStyle}"></span><a href="#{url}" class="link download">#{title}</a><a href="#{btnurl}" title="点击下载" class="g-ib g_icon btn download" style="#{btnStyle}"></a></div><a href="#{fblink}" title="#{fbtitle}" class="close-leftlink" style="display:#{fbtype};color:#{fbcolor}">#{fbtitle}</a><a href="javascript:void(0);" title="点击关闭" class="close"></a><div class="xht-popup js_xht_popup"><a href="#{url}" class="xht-btn ok js_xht_ok" title="确定"></a><a href="javascript:;" class="xht-btn cancel" title="取消"></a></div></div>',
                    c = p(y(i, n)).prependTo("body").show();
                p(".close", c).click(function(t) {
                    try {
                        return e.showPopup && p(window).width() > 1258 ? p(".js_xht_popup", c).show() : a("close"), !1 } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/headad/headad.js", ln: 133 }) } }), p(".download", c).click(function() {
                    try { o(), a("down") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/headad/headad.js", ln: 138 }) } }), p(".xht-btn", c).click(function() {
                    try {
                        if (a("close"), p(this).hasClass("cancel")) return !1 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/headad/headad.js", ln: 145 }) } }), e.btnhover && p(".btn.download", c).hover(function() {
                    try { p(this).css("backgroundImage", "url(" + HAO.httpsTrans(e.btnhover) + ")") } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/headad/headad.js", ln: 150 }) } }, function() {
                    try { p(this).css("backgroundImage", "url(" + HAO.httpsTrans(e.btn) + ")") } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/headad/headad.js", ln: 153 }) } }) } catch (d) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: d.message || d.description, path: "indexher:container/module/headad/headad.js", ln: 161 }) } }

        function o() {
            try { g && (g.checkExist(0) || g.checkExist(1)) && (x({ type: "auto", k: "xhtlaqi", v: 1 }), g.callBrowser("http://www.hao123.com/anshuang"), g.callBrowser("http://www.hao123.com/"), m.checkDeskTip(1)) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/headad/headad.js", ln: 175 }) } }

        function c(e) {
            try {
                var t = { win2000: 1, winxp: 2, win2003: 3, winvista: 4, win7: 5, win8: 6, "win8.1": 7, mac: 8, unix: 9, linux: 10, other: 11, win10: 12 };
                return t[e] } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/headad/headad.js", ln: 193 }) } }

        function d(e) {
            try {
                var t, a = { chrome: 1, firefox: 2, msie: 3, 360: 4, "360se": 5, sougou: 6, liebao: 7, qq: 8, tt: 9, opera: 10, safari: 11, maxthon: 12, baidu: 13, hao123: 14 };
                return t = e.is360 ? 4 : e.is360se ? 5 : e.isSougou ? 6 : e.isLiebao ? 7 : e.isQQ ? 8 : e.isTT ? 9 : e.maxthon ? 12 : e.isHao123() ? 14 : a[e.types[0]] || 0 } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/headad/headad.js", ln: 235 }) } }

        function s() {
            try {
                return "topbanner-" + j + "-" + u.types[0] + "-" + v } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/headad/headad.js", ln: 239 }) } }

        function r() {
            try { x({ page: "index", level: 1, type: "auto", k: "m-" + s() }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/headad/headad.js", ln: 248 }) } }

        function h(e, t) {
            try { f.set("toptips", e, { expires: t }) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/headad/headad.js", ln: 254 }) } }
        try {
            var l = f.get("toptips"),
                b = 100,
                j = u.system.toLowerCase(),
                w = u.ie,
                v = parseInt(w || 0, 10);
            a(), p.getScript("/api/newxhtiao?pid=hao123-index&callback=getXhtData&c=" + (f.getCSRFId() || "") + "&sys=" + c(j) + "&brw=" + d(u) + "&edt=" + v) } catch (k) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: k.message || k.description, path: "indexher:container/module/headad/headad.js", ln: 255 }) } }
    var p = i,
        u = o,
        f = c,
        g = d,
        m = s,
        x = r,
        y = h;
    t.exports = u.isHao123() || u.isBaidu || "17173" === u.shell[0] ? function() {
        try {} catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/headad/headad.js", ln: 257 }) } } : l });;
define("indexher:container/module/logo/logo.js", ["global", "module", "exports", "require", "indexher:static/js/format.js", "indexher:static/js/fixpng.js", "indexher:static/js/browser.js", "indexher:static/js/events.js", "indexher:static/js/jquery.js", "indexher:static/js/widget.js"], function(e, t, i, o, n, a, s, r, l, h) {
    function c(e) {
        try {
            return parseInt(e, 10) || 0 } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/logo/logo.js", ln: 28 }) } }
    var g = a,
        d = s,
        f = r,
        m = l,
        u = "hao123.",
        p = "logo",
        x = "beforeload",
        j = "click";
    m.widget(u + p, { options: { url: "", title: "", target: "", style: "", imgurl: "", swfurl: "", width: 0, height: 0, defaultWidth: 210, defaultHeight: 60 }, _create: function() {
            try {
                var e = this;
                e.$flash = null, e._on({ "click .link-hook": e.handleClick }), e._on(e.window, { unload: e.destroy }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/logo/logo.js", ln: 59 }) } }, _init: function() {
            try {
                var e = this,
                    t = e.element,
                    i = e.options;
                i.width = c(i.width) || i.defaultWidth, i.height = c(i.height) || i.defaultHeight, e._trigger(x) && (e.$link = t.find("a.link-hook").attr({ href: i.url, title: i.title, target: i.target }), e.$img = m("img.img-hook", t).attr({ width: i.width, height: i.height, alt: i.title }), i.swfurl ? d.isIpad() || d.safari || e.setFlash(i.swfurl) : e.setImage(i.imgurl, i.ieimg)) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/logo/logo.js", ln: 97 }) } }, handleClick: function(e) {
            try {
                var t = !0,
                    i = this; "1" === i.options.issethomeon && (f.emit("logo.sethome"), t = !1);
                var o = i._trigger(j, e);
                return t && o } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/logo/logo.js", ln: 111 }) } }, setFlash: function(e) {
            try {
                var t = this,
                    i = t.options;
                o.async(["indexher:static/js/swf.js"], function(o) {
                    try {
                        var n = o.createHTML({ url: e, width: i.width, height: i.height, wmode: "transparent" });
                        if (!n) return;
                        t.$flash || (t.$flash = m('<div class="card flash"></div>').insertBefore(t.$link), t.$flash.html(n)), t.$img.fadeOut(function() {
                            try { t.$img.attr("src", HAO.httpsTrans("http://s0.hao123img.com/img/1L/Aw/2F/mk/ch/o/blank.gif")).show() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/logo/logo.js", ln: 138 }) } }) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/logo/logo.js", ln: 139 }) } }) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/logo/logo.js", ln: 140 }) } }, setImage: function(e, t) {
            try {
                var i = this;
                i.$img.attr("src", e), g(i.$img, t || e) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/logo/logo.js", ln: 147 }) } }, _destroy: function() {
            try {
                var e = this;
                e.$link = e.$img = null } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/logo/logo.js", ln: 156 }) } } }) });;
define("indexher:container/module/sethome/sethome.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:container/module/sethome/homeKeeper.js", "indexher:static/js/events.js"], function(e, t, o, n, i, s, c) {
    function a(e) {
        function t() {
            try { h("#sethome").attr({ monkey: "gift", href: e.url8 }).find(".js_text").text(e.font8) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/sethome/sethome.js", ln: 12 }) } }

        function o() {
            try { h("#sethome").removeClass("sethome--hide") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/sethome/sethome.js", ln: 16 }) } }
        try { r.addCallback(function(e) {
                try { e && t() } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/sethome/sethome.js", ln: 22 }) } }), r.init(function() {
                try { t(), o() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/sethome/sethome.js", ln: 27 }) } }, function() {
                try { m.on("logo.sethome", function() {
                        try { h("#sethome").click() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/sethome/sethome.js", ln: 31 }) } }), h("#sethome").click(function() {
                        try {
                            return r.clickHandler(null, "link", e) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/sethome/sethome.js", ln: 35 }) } }), o() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/sethome/sethome.js", ln: 38 }) } }) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/sethome/sethome.js", ln: 39 }) } }
    var h = i,
        r = s,
        m = c;
    t.exports = a });;
define("indexher:container/module/popup/count.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js"], function(e, o, n, t, i) {
    function c(e, o, n) {
        try {
            var t, i = a + "?callback=?&k=" + e;
            if (r.isArray(e) ? (e = e.join(","), p = !0) : p = !1, void 0 !== o && !r.isFunction(o)) {
                if ("function" != typeof n && (n = r.noop), 0 === o) return;
                p ? t = { act: "mincrby", step: o } : o > 0 ? t = { act: 1 === o ? "incr" : "incrby", step: o } : 0 > o && (t = { act: -1 === o ? "decr" : "decrby", step: -o }) }
            if (void 0 === o || void 0 !== o && r.isFunction(o)) { n = void 0 === o ? r.noop : o;
                var t = { act: p ? "mget" : "get" } }
            return void r.getJSON(i, t).done(function(e) {
                try { n(e) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/popup/count.js", ln: 66 }) } }).fail(function() {
                try { n({ err_no: -1, data: null, errors: "服务请求失败" }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/popup/count.js", ln: 73 }) } }) } catch (c) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: c.message || c.description, path: "indexher:container/module/popup/count.js", ln: 77 }) } }
    var r = i,
        a = location.protocol + "//count.hao123.com/",
        p = !1;
    o.exports = c });;
define("indexher:container/module/slidetoolbar/slidetoolbar.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/widget.js", "indexher:static/js/browser.js", "indexher:static/js/pageEvents.js", "indexher:static/js/events.js", "indexher:static/js/profile.js"], function(e, t, o, i, n, a, l, s, r, d) {
    var c = n,
        h = l,
        p = s,
        f = r,
        m = d,
        g = 0,
        u = 1,
        b = null,
        x = "hao123.",
        y = "slidetoolbar";
    c.widget(x + y, { options: { hoverCls: "appitem-hover", openCls: "slideclosebtn-open", closeCls: "slideclosebtn-close", profKey: "slide", foldTitle: "展开", unfoldTitle: "收起", showitem: "", animateTime1: 1e3, animateTime2: 5e3, foldDefault: "" }, _create: function() {
            try {
                {
                    var e = this;
                    e.element }
                e.$close = c("#slidetoolbar-btn"), e.bindEvent() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/slidetoolbar/slidetoolbar.js", ln: 44 }) } }, _init: function() {
            try {
                var e = this,
                    t = e.element.children("div.slidetoolbar"),
                    o = e.options;
                e.state = "" !== o.foldDefault ? parseInt(o.foldDefault, 10) : "1" === m.get(o.profKey) ? u : g, e.state === u ? (t.animate({ left: 0 }, function() {
                    try { e.showDefault(o.showitem), e.$close.addClass(o.closeCls).show().attr("title", o.unfoldTitle) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/slidetoolbar/slidetoolbar.js", ln: 65 }) } }), e.initFlip()) : e.$close.addClass(o.openCls).show().attr("title", o.foldTitle);
                var i = p.getViewport();
                6 === parseInt(h.ie, 10) && e.fixIE6(i), e.showOrHide(i) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/slidetoolbar/slidetoolbar.js", ln: 78 }) } }, showDefault: function(e) {
            try {
                if (!e) return;
                var t = this,
                    o = t.options.hoverCls,
                    i = t.$showitem = t.element.find("div.appitem-hook").eq(e).addClass(o);
                t.animation = !0, t.hideTimer = setTimeout(function() {
                    try { t.animation && i.find("div.content-hook").animate({ width: 0 }, function() {
                            try { i.css("width", 210), t.animation && (t.animation = !1, i.removeClass(o)) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/slidetoolbar/slidetoolbar.js", ln: 101 }) } }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/slidetoolbar/slidetoolbar.js", ln: 103 }) } }, 3e3) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/slidetoolbar/slidetoolbar.js", ln: 104 }) } }, handleAppitemEnter: function(e) {
            try {
                var t, o, i, n = c(e.currentTarget),
                    a = n.next(),
                    l = a.length;
                l && (t = parseInt(a.css("right"), 10)), l && 50 !== t || (o = this, i = o.options.hoverCls, n.addClass(i), o.animation && (clearTimeout(o.hideTimer), o.animation = !1, o.$showitem.is(n) || o.$showitem.removeClass(i))) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/slidetoolbar/slidetoolbar.js", ln: 130 }) } }, handleAppitemLeave: function(e) {
            try { c(e.currentTarget).removeClass(this.options.hoverCls) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/slidetoolbar/slidetoolbar.js", ln: 134 }) } }, handleClickClose: function(e) {
            try {
                var t, o, i, n, a = this,
                    l = a.options,
                    s = a.element.children("div.slidetoolbar"),
                    r = c(e.currentTarget);
                return a.state === u ? (a.state = g, t = -50, o = l.closeCls, i = l.openCls, n = l.foldTitle, b && clearTimeout(b), a.$flipicon && a.$flipicon.length && a.$flipicon.stop(!0).animate({ right: 50 })) : (a.state = u, t = 0, o = l.openCls, i = l.closeCls, n = l.unfoldTitle), s.stop().animate({ left: t }, function() {
                    try { r.removeClass(o).addClass(i).attr("title", n), m.set(l.profKey, "" + a.state) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/slidetoolbar/slidetoolbar.js", ln: 172 }) } }), !1 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/slidetoolbar/slidetoolbar.js", ln: 175 }) } }, handleFold: function() {
            try { this.$close.click() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/slidetoolbar/slidetoolbar.js", ln: 179 }) } }, handleDeferchange: function(e) {
            try { "resize" === e.eventType && this.showOrHide(e) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/slidetoolbar/slidetoolbar.js", ln: 185 }) } }, bindEvent: function() {
            try {
                var e = this;
                e._on({ "mouseenter .appitem-hook": "handleAppitemEnter", "mouseleave .appitem-hook": "handleAppitemLeave", "click .slidetoolbar-closebtn": "handleClickClose" }), f.on("slidetoolbar.fold", e.handleFold, e), 6 === parseInt(h.ie, 10) && p.on("viewport.deferchange", e.fixIE6, e), p.on("viewport.deferchange", e.handleDeferchange, e) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/slidetoolbar/slidetoolbar.js", ln: 203 }) } }, initFlip: function() {
            try {
                var e = this,
                    t = c("div.flipicon", e.element);
                t.length && (e.flip(t), e.$flipicon = t) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/slidetoolbar/slidetoolbar.js", ln: 213 }) } }, flip: function(e) {
            try {
                var t = this,
                    o = t.options,
                    i = 0,
                    n = function() {
                        try { clearTimeout(b), b = null } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/slidetoolbar/slidetoolbar.js", ln: 222 }) } },
                    a = { mouseenter: [!1, !1, !0, !1], mouseleave: [!1, !1, !1, !0] };
                e.queue("fliping", function(t) {
                    try { i = 1, e.animate({ right: -110 }, o.animateTime1, t) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/slidetoolbar/slidetoolbar.js", ln: 232 }) } }).queue("fliping", function(e) {
                    try { i = 2, b = setTimeout(e, o.animateTime2) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/slidetoolbar/slidetoolbar.js", ln: 236 }) } }).queue("fliping", function(t) {
                    try { i = 3, b ? e.animate({ right: 50 }, o.animateTime1, t) : e.css({ right: 50 }) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/slidetoolbar/slidetoolbar.js", ln: 244 }) } }).queue("fliping", function(t) {
                    try { i = 0, e.off("mouseenter mouseleave"), t() } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/slidetoolbar/slidetoolbar.js", ln: 249 }) } }), e.dequeue("fliping"), e.hover(function(t) {
                    try {
                        var l = t.type;
                        if (!a[l][i]) return;
                        n(), e.dequeue("fliping").prev().addClass(o.hoverCls).find(".content-hook").css({ width: 210 }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/slidetoolbar/slidetoolbar.js", ln: 259 }) } }, function(t) {
                    try {
                        var n = t.type;
                        if (!a[n][i]) return;
                        e.dequeue("fliping").prev().removeClass(o.hoverCls) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/slidetoolbar/slidetoolbar.js", ln: 266 }) } }) } catch (l) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: l.message || l.description, path: "indexher:container/module/slidetoolbar/slidetoolbar.js", ln: 267 }) } }, fixIE6: function(e) {
            try { this.element.css({ top: e.scrollTop, height: e.height }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/slidetoolbar/slidetoolbar.js", ln: 274 }) } }, showOrHide: function(e) {
            try {
                var t = this.element,
                    o = e.width;
                1290 > o && o >= 1260 || 1090 > o ? t.hide() : t.fadeIn() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/slidetoolbar/slidetoolbar.js", ln: 285 }) } } }) });;
define("indexher:container/module/suggest/nssug.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/config.js", "indexher:static/js/format.js"], function(e, t, n, a, s, r, i) {
    function o(e) {
        try { e = e || {};
            for (var t, n, a = arguments, s = a.length, r = 0; ++r < s;)
                if (t = a[r])
                    for (n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return e } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/suggest/nssug.js", ln: 37 }) } }

    function c(e, t, n, a) {
        try {
            var s = { url: HAO.httpsTrans("http://nssug.baidu.com/su?cb=?"), data: {}, queryKey: "wd", cache: !1, dataType: "jsonp", scriptCharset: "gbk" },
                r = {};
            return n = n || c.defaultCallback, e && (r.prod = e), o(s.data, r, t), o(s, a),
                function(e) {
                    try {
                        var t = this,
                            a = s.data || {};
                        if (e = e.replace(/^\s+|\s+$/g, ""), !e) return void t.clear();
                        a[s.queryKey] = e, s.data = a, u.ajax(s).done(function() {
                            try { n.apply(t, arguments), t = null } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/suggest/nssug.js", ln: 75 }) } }) } catch (r) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: r.message || r.description, path: "indexher:container/module/suggest/nssug.js", ln: 76 }) } } } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/suggest/nssug.js", ln: 77 }) } }

    function g(e, t) {
        try {
            var n = t;
            return e && n.indexOf(e) > -1 && (n = ["<b>", n.replace(e, d("</b>#{0}<b>", e)), "</b>"].join("").replace("<b></b>", "")), n } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/suggest/nssug.js", ln: 105 }) } }
    var u = s,
        d = i;
    c.defaultCallback = function(e) {
        try {
            var t, n, a, s = this;
            if (s.clear(), !e || !(n = e.s) || !(a = n.length)) return;
            t = e.q || "";
            for (var r = 0; a > r; r++) {
                var i = n[r];
                s.add(i, g(t, i)) }
            s.show() } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/suggest/nssug.js", ln: 97 }) } }, c.getSuggestHTML = g, t.exports = c });;
define("indexher:container/module/suggest/suggest.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/widget.js", "indexher:static/js/cookie.js", "indexher:container/module/search/history.js", "indexher:static/js/format.js", "indexher:static/js/events.js", "indexher:static/js/JSON.js"], function(e, t, s, n, i, a, o, c, g, r, d) {
    function l(e, t) {
        try {
            return "length" in e && (e = e[0]), e.getAttribute("data-" + t) } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/suggest/suggest.js", ln: 44 }) } }

    function u(e) {
        try {
            return _.parse(l(e, "data")) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/suggest/suggest.js", ln: 48 }) } }

    function h(e) {
        try {
            return parseInt(l(e, "index"), 10) || 0 } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/suggest/suggest.js", ln: 52 }) } }

    function p(e) {
        try {
            return l(e, "query") } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/suggest/suggest.js", ln: 56 }) } }
    var f = i,
        m = o,
        x = c,
        y = "sls",
        v = g,
        j = r,
        _ = d,
        k = "hao123.",
        $ = "suggest",
        T = "input",
        C = "change",
        w = "submit",
        b = "show",
        E = "hide",
        q = 0,
        H = 38,
        B = 40,
        D = 13,
        I = 27,
        S = !0,
        A = function() {
            try {} catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/suggest/suggest.js", ln: 37 }) } };
    f.widget(k + $, { options: { popupTpl: ['<div class="suggest #{classes|e}">', '<div class="header-hook"></div>', '<ul class="list-hook"></ul>', '<div class="footer-hook"></div>', "</div>"].join(""), itemTpl: ['<li class="suggest-item item-hook #{cls}" data-query="#{query|e}" data-index="#{index|e}"', ' data-data="#{data|e}">#{html}</li>'].join(""), header: "", footer: "", classes: "", hoverClass: "hover g-bg1", inputDelay: 200, hideDelay: 20, eventSpace: $, sugBType: !1, headerTpl: '<div class="list-header"><p class="list-title">实时热点</p></div>', cmsTpl: '<div class="sug-cms" monkey="sugcms"></div>', picTpl: '<a href="#{url}" alog-text="#{title}" class="sug-pic sug-link" data-text="#{title}"><span class="sug-img" style="cursor:pointer;background:url(#{pic}) 0 0 no-repeat;display:block;width:161px;height:92px;"></span><span class="picbg"></span><span class="pictitle">#{title}</span></a>', linkTpl: '<a href="#{linkurl}" class="sug-text sug-link #{cls}" data-text="#{text}"><span class="sug-title ">#{text}</span></a>', hotURL: "/sugdata_s4.json" }, _create: function() {
            try {
                var e = this,
                    t = e.options,
                    s = e.element;
                e.sugBType = t.sugBType, e.addheader = !1, e.addcms = !1;
                var n = f(v(t.popupTpl, t));
                e.$list = f(".list-hook", n), e.$header = f(".header-hook", n), e.$footer = f(".footer-hook", n), e._header = "", e._footer = "", e.header(t.header), e.footer(t.footer), e.$tip = n.appendTo(s.parent()), e.sugBType && (e.$tip.addClass("sugB-Box"), e._initCmsEvent()) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/suggest/suggest.js", ln: 128 }) } }, _init: function() {
            try {
                var e = this;
                e.inited = !1, e.showed = !1, e.repaint = !1, e.content = [], e.$items = null, e._index = q, e._original = e.element.val(), e._skipChange = !1, e._shouldClose = !1, e._initInputEvent(), e._initTipToggle(), e._initKeyEvent(), e._initHistoryEvent() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/suggest/suggest.js", ln: 149 }) } }, _initCmsEvent: function() {
            try {
                var e, t, s, n, i = this,
                    a = 0;
                i.$tip.on("click", ".sug-link", function(o) {
                    try {
                        if (s = f(o.target).closest(".sug-link"), n = s.attr("href"), e = s.data("text"), i.element.val(e), !n) return t = { value: e, from: "click" }, s.hasClass("sug-pic") ? a = "cmsimage" : s.hasClass("sug-text") && (a = "cmstxt"), j.emit("suggest.clickcms", a), i._triggerEvent(w, t), !1 } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/suggest/suggest.js", ln: 181 }) } }) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/suggest/suggest.js", ln: 182 }) } }, _initHistoryEvent: function() {
            try {
                var e = this,
                    t = f('div[data-hooks="hao123-search"]').data("flag");
                e.searchInput = f("#search-input"), e.searchInput.on("click", function() {
                    try {
                        var s = f(this).val(); "hao123-indexsearchlist1" === t && e._inputHandler(s), !s && e._inputHandler("") } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/suggest/suggest.js", ln: 200 }) } }), e.$footer.on("click", 'a[data-hooks="close-history-sug"]', function(t) {
                    try { e.hide(), t.preventDefault() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/suggest/suggest.js", ln: 205 }) } }), e.$footer.on("click", 'a[data-hooks="close-history"]', function(t) {
                    try { m.set(y, 1, { expires: 30 }), e.hide(), t.preventDefault() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/suggest/suggest.js", ln: 213 }) } }) } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/suggest/suggest.js", ln: 214 }) } }, _initTipToggle: function() {
            function e() {
                try { clearTimeout(a), a = setTimeout(t, o) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/suggest/suggest.js", ln: 282 }) } }

            function t() {
                try {
                    var e;
                    if (s._shouldClose = e = !c && !g, !e || s._hold) return;
                    s.original(i.val()), s.hide(S) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/suggest/suggest.js", ln: 292 }) } }
            try {
                var s = this,
                    n = s.options,
                    i = s.element,
                    a = 0,
                    o = n.hideDelay,
                    c = !1,
                    g = !1,
                    r = !1;
                i.on("input focus keydown", function() {
                    try { c = !0, e() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/suggest/suggest.js", ln: 233 }) } }).on("blur", function() {
                    try { c = !1, e(), f(".item-hook", s.$list).removeClass(s.options.hoverClass) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/suggest/suggest.js", ln: 238 }) } }).on("beforedeactivate", function() {
                    try {
                        return !r } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/suggest/suggest.js", ln: 241 }) } }), s.$tip.hover(function() {
                    try { g = !0, e() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/suggest/suggest.js", ln: 246 }) } }, function() {
                    try { g = !1, e() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/suggest/suggest.js", ln: 250 }) } }), s.$list.mousedown(function() {
                    try {
                        return r = !0, setTimeout(function() {
                            try { r = !1 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/suggest/suggest.js", ln: 257 }) } }, 0), !1 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/suggest/suggest.js", ln: 259 }) } }).mouseup(function(e) {
                    try {
                        var t = e.target;
                        if (t && t.getAttribute("data-history") && t.getAttribute("data-history").indexOf("lishi") > -1) { s.removeHistory(f(t).parent());
                            var n = f(".item-hook", s.$list);
                            return 0 === n.length && s.clear(), !1 }
                        if (e.which > 2 || s._index === q) return;
                        s.select(s._index, !0), s.submit("click") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/suggest/suggest.js", ln: 277 }) } }) } catch (d) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: d.message || d.description, path: "indexher:container/module/suggest/suggest.js", ln: 293 }) } }, removeHistory: function(e) {
            try { e.remove(), x.remove(p(e), f.noop) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/suggest/suggest.js", ln: 299 }) } }, hold: function(e) {
            try {
                var t = this,
                    s = t.element;
                t._hold = !!e, t._shouldClose && !e && (t.original(s.val()), t.clear()) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/suggest/suggest.js", ln: 312 }) } }, _initInputEvent: function() {
            function e() {
                try { c = f.trim(i.val()), s.original(c), clearTimeout(o), o = setTimeout(t, a) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/suggest/suggest.js", ln: 347 }) } }

            function t() {
                try {
                    if (g === c) return;
                    g = c;
                    var e = { value: c };
                    s._triggerEvent(T, e) && s._inputHandler(c) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/suggest/suggest.js", ln: 363 }) } }
            try {
                var s = this,
                    n = s.options,
                    i = s.element,
                    a = n.inputDelay,
                    o = 0,
                    c = "",
                    g = "";
                i.attr("autocomplete", "off"), i.on("input", e), i.on("propertychange", function(t) {
                    try { t = t.originalEvent, t && "value" === t.propertyName && (s._skipChange || e()) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/suggest/suggest.js", ln: 336 }) } }), s.original() && e() } catch (r) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: r.message || r.description, path: "indexher:container/module/suggest/suggest.js", ln: 364 }) } }, _initKeyEvent: function() {
            try {
                var e = this,
                    t = e.element,
                    s = !1;
                t.on("keydown", function(t) {
                    try { s = e.$tip.hasClass("sugB-Box");
                        var n = !1;
                        switch (t.keyCode) {
                            case H:
                                s ? "" : e.select(e._index - 1, !0), n = !0;
                                break;
                            case B:
                                s ? "" : e.select(e._index + 1, !0), n = !0;
                                break;
                            case D:
                                e.submit("enter"), n = !1;
                                break;
                            case I:
                                e.hide(S), n = !0 }
                        return !n } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/suggest/suggest.js", ln: 397 }) } }) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/suggest/suggest.js", ln: 398 }) } }, _addItemEvent: function() {
            try {
                {
                    var e = this;
                    e.options }
                e.$items.mouseenter(function() {
                    try { e.select(h(this)) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/suggest/suggest.js", ln: 410 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/suggest/suggest.js", ln: 411 }) } }, _removeItemEvent: function() {
            try {
                var e = this;
                e.$items.off("mouseenter mouseleave click") } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/suggest/suggest.js", ln: 420 }) } }, _triggerEvent: function(e, t) {
            try {
                var s = this,
                    n = s.options,
                    i = !0;
                return i = s._trigger(e, null, t) && i, i = j.emit(n.eventSpace + "." + e, t) && i, !!i } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/suggest/suggest.js", ln: 437 }) } }, submit: function(e) {
            try {
                var t = this;
                t.hide(S), t._triggerEvent(w, { value: t.element.val(), index: t._index, from: e }) } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/suggest/suggest.js", ln: 448 }) } }, show: function() {
            try {
                var e = this;
                if (e.content && !e.content.length) return;
                e.repaint && (e.$item && e._removeItemEvent(), e.$list.html(e.content.join("")), e.$items = f(".item-hook", e.$list), e._addItemEvent(), e.repaint = !1), e.showed || (e.$tip.show(), e._triggerEvent(b));
                var t = f("li:eq(0)", e.$list);
                f(".video-detail", t).length && (t.addClass("video-detail-open").one("hover", function() {
                    try { t.removeClass("video-detail-open") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/suggest/suggest.js", ln: 481 }) } }), e.select(1, !1)), f(".short-detail", t).length && t.addClass("short-detail-open"), e.showed = !0 } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/suggest/suggest.js", ln: 492 }) } }, hide: function(e) {
            try {
                var t = this;
                t.showed && (t.$tip.hide(), t._triggerEvent(E)), t.showed = !1, e || t.select(q) } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/suggest/suggest.js", ln: 505 }) } }, header: function(e) {
            try {
                var t = this;
                t._header !== e && (e ? (t.$header.html(e), t._header || t.$header.show()) : t.$header.hide(), t._header = e) } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/suggest/suggest.js", ln: 521 }) } }, getHeader: function() {
            try {
                return this.$header } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/suggest/suggest.js", ln: 525 }) } }, getList: function() {
            try {
                return this.$list } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/suggest/suggest.js", ln: 529 }) } }, footer: function(e) {
            try {
                var t = this;
                t._footer !== e && (e ? (t.$footer.html(e), t._footer || t.$footer.show()) : t.$footer.hide(), t._footer = e) } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/suggest/suggest.js", ln: 545 }) } }, clear: function() {
            try {
                var e = this;
                e.content.length && (e.content = [], e.repaint = !0), e.hide() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/suggest/suggest.js", ln: 557 }) } }, add: function(e, t, s, n) {
            try {
                var i = this,
                    a = i.options,
                    o = i.content,
                    c = o.length + 1;
                t = void 0 === t ? e : t, o.push(v(a.itemTpl, { query: e, index: c, html: t, data: _.stringify(arguments.length > 2 ? s : null), cls: n })), i.repaint = !0, i.showed && i.show() } catch (g) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: g.message || g.description, path: "indexher:container/module/suggest/suggest.js", ln: 578 }) } }, addHeader: function() {
            try {
                var e = this;
                if (e.addheader) return;
                e.addheader = !0, e.$list.before(f(e.options.headerTpl)) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/suggest/suggest.js", ln: 589 }) } }, addCmsData: function(e, t) {
            try {
                var s = this;
                if (s.addcms) return;
                s.addcms = !0;
                var n = s.options;
                s.$pic = f(v(n.picTpl, { url: e.url, pic: HAO.httpsTrans(e.imgurl), title: e.title })).hover(function() {
                    try { f(this).addClass("pichover") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/suggest/suggest.js", ln: 607 }) } }, function() {
                    try { f(this).removeClass("pichover") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/suggest/suggest.js", ln: 610 }) } });
                for (var i = t.length, a = "", o = 0; i > o; o++) {
                    var c = t[o];
                    a += v(n.linkTpl, { linkurl: c.url, text: c.title, cls: o % 2 ? "sug-righttext" : "" }) }
                s.$textbox = f('<div class="sug-textbox">' + a + "</div>"), s.$cmsBox = f(n.cmsTpl).append(s.$pic).append(s.$textbox), s.$tip.append(s.$cmsBox) } catch (g) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: g.message || g.description, path: "indexher:container/module/suggest/suggest.js", ln: 631 }) } }, select: function(e, t) {
            try {
                var s, n = this,
                    i = n.options,
                    a = n.element,
                    o = n.$items,
                    c = i.hoverClass,
                    g = n.content.length + 1,
                    r = n._index,
                    d = null,
                    l = null,
                    h = null,
                    m = null;
                if (e %= g, 0 > e && (e += g), t = !!t, n._index = e, r > 0 && o.eq(r - 1).removeClass(c).find('span[data-history="lishi"]').html("历史"), e > 0) { s = o.eq(e - 1).addClass(c).find('span[data-history="lishi"]').html("删除");
                    var x = f(".video-detail", s);
                    x && x.length && (x = this._selectedVideoDetail, x && x.length && x.removeClass("last-video-detail"), this._selectedVideoDetail = s.addClass("last-video-detail")) }
                if (t) {
                    if (e) { s = o.eq(e - 1), l = p(s);
                        var y = s.find(".tag-type:eq(0)"),
                            v = y.attr("data-hooks"),
                            j = y.attr("data-suez");
                        window.SearchHistoryTn = v || "", window.SearchLuSuez = j || "", h = u(s) } else l = n.original(), h = null;
                    d = a.val(), m = { index: e, oldValue: d, newValue: l, data: h }, n._triggerEvent(C, m) && (n._skipChange = !0, a.val(l), setTimeout(function() {
                        try { n._skipChange = !1 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/suggest/suggest.js", ln: 711 }) } }, 0)) }
                var _ = e;
                0 === _ && (_ = 1), setTimeout(function() {
                    try {
                        var t = n.$list.find("li").eq(_ - 1);
                        t = t && t.data() ? t.data().data : void 0, n._trigger("select", null, { index: e, data: t, q: a.val() }) } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/suggest/suggest.js", ln: 734 }) } }, 0) } catch (k) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: k.message || k.description, path: "indexher:container/module/suggest/suggest.js", ln: 735 }) } }, original: function(e) {
            try {
                if (!arguments.length) return this._original;
                this._original = e } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/suggest/suggest.js", ln: 748 }) } }, index: function() {
            try {
                return this._index } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/suggest/suggest.js", ln: 756 }) } }, handler: function(e) {
            try { this._inputHandler = e || A } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/suggest/suggest.js", ln: 764 }) } } }) });;
define("indexher:container/module/suggest/webHandler.js", ["global", "module", "exports", "require", "indexher:container/module/search/history.js", "indexher:static/js/JSON.js", "indexher:static/js/config.js", "indexher:static/js/jquery.js", "indexher:static/js/format.js", "indexher:static/js/cookie.js"], function(e, t, a, s, i, n, o, r, c, d) {
    function l(e) {
        try {
            var t = window.SearchHistoryData || [],
                a = 8;
            t = t.slice(0, a);
            var s = this;
            if (s.$footer.hide(), !e && "hao123-indexsearchlist1" === z) return void y.get(function(e) {
                try { window.SearchHistoryData = e || [], e = e.slice(0, a);
                    for (var t = [], i = [], n = w.get("sls"), o = 0; o < e.length; o++) t.push("历史"), i.push({ kw: e[o], time: parseInt(new Date / 1e3, 10) });
                    n || p(s.options.hotURL, function(a) {
                        try {
                            var i = g({ data: a.keywords, result: e, key: "keyword", types: t, type: "热词", length: 10 });
                            h({ s: i.result || [], cls: " history" }, s, i.types), s.footer(I), s.$footer.show() } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/suggest/webHandler.js", ln: 308 }) } }, "json"), n && !D.hasClass("hotword-on") ? (x(".hotword-hook").click(), s.$footer.hide()) : s.hide() } catch (r) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: r.message || r.description, path: "indexher:container/module/suggest/webHandler.js", ln: 322 }) } }); "hao123-indexsearchlist1" !== z && (t = []), x.ajax({ url: HAO.httpsTrans("http://suggestion.baidu.com/su?cb=?"), data: { wd: e, sc: "hao123" }, queryKey: "wd", cache: !1, dataType: "jsonp", scriptCharset: "gbk" }).done(function(a) {
                try {
                    for (var i = [], n = [], o = [], r = [], c = [], d = 0; d < t.length; d++) t[d] && t[d].indexOf(e) > -1 && (r.push("删除"), n.push(t[d])); { n.length }
                    n = n.slice(0, 2), r = r.slice(0, 2);
                    for (var l = 0; l < a.s.length; l++) a.s[l] !== n[0] && a.s[l] !== n[1] && (c.push("推荐"), o.push(a.s[l]));
                    a.s = n.concat(o), i = r.concat(c), a.cls = " history", "hao123-indexsearchlist1" === z && a.s && a.s.length < 10 && T && e.length >= parseInt(T, 10) ? x.ajax({ url: M + encodeURIComponent(e), success: function(e) {
                            try {
                                for (var t = e.data.recommends || [], o = 0; o < t.length; o++) t[o].word !== n[0] && t[o].word !== n[1] && (a.s.push(t[o].word), i.push("rp"));
                                h(a, s, i) } catch (r) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: r.message || r.description, path: "indexher:container/module/suggest/webHandler.js", ln: 448 }) } }, dataType: "jsonp", jsonp: "jsonp", jsonpCallback: "haocrsback" }) : h(a, s, i) } catch (g) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: g.message || g.description, path: "indexher:container/module/suggest/webHandler.js", ln: 460 }) } }) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/suggest/webHandler.js", ln: 461 }) } }

    function h(e, t, a) {
        try { t.clear();
            var s = !1,
                i = C.check(e.s),
                n = e.z ? !0 : !1;
            try { e.q = decodeURIComponent(e.q) } catch (o) { e.q = e.q }
            var r = C.getShortVideoData(e.q);
            r && t.add(e.q, C.getHTML(e.q, r.title, r), r), x.each(e.s, function(o) {
                try {
                    if (o >= 10) return !1;
                    if (i && this.length > 10) return !0;
                    if (s = !0, n && e.z[o]) {
                        var r = m(e.z[o]);
                        t.add(e.q, r.html, { suggestId: r.id }) } else if (C.checkItem(this)) {
                        var c = C.getData(this);
                        t.add(e.s[o], C.getHTML(e.q, this, c), c) } else {
                        var d = "sug-input" + (a && a[o] && "推荐" !== a[o] && "rp" !== a[o] && "lu" !== a[o] ? e.cls || "" : "");
                        e.suezIndex = o, t.add(e.s[o], u(e.q, this, a[o], e), null, d) } } catch (l) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: l.message || l.description, path: "indexher:container/module/suggest/webHandler.js", ln: 506 }) } }), s ? t.show() : t.hide() } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/suggest/webHandler.js", ln: 509 }) } }

    function g(e) {
        try {
            var t = e.data,
                a = e.result,
                s = e.key;
            if (t)
                for (var i = 0; i < e.length; i++) t[i] && -1 === ("," + a.join(",") + ",").indexOf("," + t[i][s] + ",") && (a.push(t[i][s]), e.types.push(e.type));
            return { result: a, types: e.types } } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/suggest/webHandler.js", ln: 531 }) } }

    function p(e, t, a) {
        try { x.ajax({ url: e, success: function(e) {
                    try { t(e) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/suggest/webHandler.js", ln: 539 }) } }, dataType: a }) } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/suggest/webHandler.js", ln: 542 }) } }

    function u(e, t, a, s) {
        try { e = f(e), t = f(t);
            var i, n, o = e.match(/[.~!@#$%\^\+\*&\\\/\?\|:\.{}()';="\[\]]/g);
            if (o && o.length > 0 ? i = '<span class="suggest-text">' + t + "</span>" : (n = RegExp(e, "g"), i = '<span class="suggest-text"><b>' + t.replace(n, "</b>" + e + "<b>") + "</b></span>"), a) {
                var r, c, d = "";
                switch (a) {
                    case "删除":
                        r = "50000023_hao_pg", c = "lishi sugdel";
                        break;
                    case "历史":
                        r = "50000023_hao_pg", c = "lishi";
                        break;
                    case "recom":
                        r = "50000029_hao_pg", c = "tuijian", a = "推荐";
                        break;
                    case "often":
                        r = "50000026_hao_pg", c = "changsou", a = "推荐";
                        break;
                    case "热词":
                        r = "50000031_hao_pg", c = "reci", a = "推荐";
                        break;
                    case "rp":
                        r = "50000033_hao_pg", c = "hide", a = "推荐";
                        break;
                    case "lu":
                        r = "50000025_hao_pg", c = "hide", a = "推荐", d = s.suez[s.suezIndex - s.count];
                        break;
                    default:
                        r = c = "hide" }
                i += '<span class="tag-type ' + c + '" data-history="' + c + '" data-hooks="' + r + '" data-suez="' + d + '">' + a + "</span>" }
            return i.replace("<b></b>", "") } catch (l) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: l.message || l.description, path: "indexher:container/module/suggest/webHandler.js", ln: 631 }) } }

    function f(e) {
        try {
            return e.replace(/</g, "&lt;").replace(/>/g, "&gt;") } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/suggest/webHandler.js", ln: 634 }) } }

    function m(e) {
        try {
            var t = parseInt(e.type, 10),
                a = {};
            switch (t) {
                case 1:
                case 2:
                    if (void 0 === e.key) return !1;
                    a.query = e.key, a.html = b('<dl class="aladdin"><dt class="info g-fc2"><img class="icon" src="http://s1.hao123img.com/index/images/xiongzhang.png" width="12" height="12" />#{key}#{auth}</dt><dd class="define">#{word}#{word_add}</dd></dl>', { key: e.key, auth: function() {
                            try {
                                return 2 === t ? " - 百度安全认证" : "" } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/suggest/webHandler.js", ln: 658 }) } }, word: e.word || "", word_add: function() {
                            try {
                                return e.word_add ? b(' <span class="info g-fc2">(#{0})</span>', e.word_add) : "" } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/suggest/webHandler.js", ln: 663 }) } } }), a.id = e.id;
                    break;
                default:
                    return !1 }
            return a } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/suggest/webHandler.js", ln: 672 }) } }
    var y = i,
        v = o,
        x = r,
        b = c,
        w = d,
        j = '<div class="video-detail"><div class="col-left"><span><img width="74" height="100" src="#{imgurl}" /></span></div><div class="col-right">    <div><label>评分：</label><em>#{n}分</em></div>    <div><label>类型：</label>#{type1} #{type2}</div>    <div><label>主演：</label>#{actor1} #{actor2}</div></div><span class="icon icon-movie"></span></div>',
        k = '<div class="video-detail"><div class="col-left"><span><img width="74" height="100" src="#{imgurl}" /></span></div><div class="col-right">    <div style="color: #3b5998">#{n}</div>    <div><label>类型：</label>#{type1} #{type2}</div>    <div><label>地区：</label>#{area}</div></div><span class="icon icon-tv"></span></div>',
        _ = '<div class="video-detail"><div class="col-left"><span><img width="74" height="100" src="#{imgurl}" /></span></div><div class="col-right">    <div style="color: #3b5998">#{n}</div>    <div><label>类型：</label>#{type1} #{type2}</div>    <div><label>地区：</label>#{area}</div></div><span class="icon icon-comic"></span></div>',
        H = '<div class="video-detail"><div class="col-left"><span><img width="74" height="100" src="#{imgurl}" /></span></div><div class="col-right">    <div style="color: #3b5998">#{n}</div>    <div><label>类型：</label>#{type1} #{type2}</div>    <div><label>地区：</label>#{area}</div>    <div><label>主持：</label>#{actor1} #{actor2}</div></div><span class="icon icon-show"></span></div>',
        q = '<div class="short-detail video-detail" style="padding-top: 0"><div class="short-video-desc">#{subtitle}</div><div class="col-left"><span><img width="108" height="60" src="#{imgurl}" /></span></div><div class="col-right">    <div style="margin-top: 45px; line-height: 1.4;"><label>播放：</label>#{n}</div></div><span class="icon icon-short"></span></div>',
        I = '<a href="javascript:;" monkey="history" class="fr" data-hooks="close-history-sug">关闭</a><a href="javascript:;" monkey="history" class="fl" data-hooks="close-history">关闭历史</a>',
        D = x(".hotword-hook"),
        S = x('div[data-hooks="hao123-search"]'),
        z = S.attr("data-flag"),
        T = S.attr("data-open"),
        C = function() {
            try {
                var e, t = [];
                return x.ajax({ url: "/api/ssugdata", data: { c: w.getCSRFId(), r: new Date / 3e5 | 0 }, cache: !0, dataType: "json" }).done(function(t) {
                    try { e = t } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/suggest/webHandler.js", ln: 89 }) } }), x.ajax({ url: "/api/sug_short", data: { c: w.getCSRFId(), r: new Date / 3e5 | 0 }, cache: !0, dataType: "json" }).done(function(e) {
                    try { t = e } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/suggest/webHandler.js", ln: 101 }) } }), { check: function(t) {
                        try {
                            if (!e) return !1;
                            for (var a = 0, s = t.length; s > a; a++)
                                for (var i = 0, n = e.length; n > i; i++)
                                    if (x.trim(t[a]) === x.trim(e[i].title)) return !0 } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/suggest/webHandler.js", ln: 115 }) } }, checkItem: function(t) {
                        try {
                            if (!e) return !1;
                            for (var a = 0, s = e.length; s > a; a++)
                                if (x.trim(t) === x.trim(e[a].title)) return !0;
                            return !1 } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/suggest/webHandler.js", ln: 126 }) } }, getShortVideoData: function(e) {
                        try {
                            if (0 !== t.length)
                                for (var a = 0, s = t.length; s > a; a++) {
                                    var i = t[a];
                                    if (i.isSpecial = !0, -1 !== i.title.indexOf(e)) return i }
                            return !1 } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/suggest/webHandler.js", ln: 138 }) } }, getData: function(t) {
                        try {
                            if (!e) return void 0;
                            if (e)
                                for (var a = 0, s = e.length; s > a; a++)
                                    if (x.trim(e[a].title) === x.trim(t)) return e[a].isSpecial = !0, e[a] } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/suggest/webHandler.js", ln: 152 }) } }, getHTML: function(e, t, a) {
                        try {
                            var s = "<div>",
                                i = { m: j, t: k, d: _, z: H, s: q },
                                n = { m: "电影", t: "电视剧", d: "动漫", z: "综艺", s: "热点" };
                            return s += '<span class="video-type-label">' + n[a.sort] + "</span>", s += u(e, t), s += '<span class="video-type-icon"></span>', s += "</div>", a.imgurl = HAO.httpsTrans(a.imgurl), s += b(i[a.sort], a) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/suggest/webHandler.js", ln: 182 }) } }, getPMData: function() {
                        try {
                            return e } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/suggest/webHandler.js", ln: 185 }) } } } } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/suggest/webHandler.js", ln: 188 }) } }();
    l.getPMData = C.getPMData; {
        var R = "//m.baidu.com",
            M = (R + "/his?from=hao123&rf=1&net=1&os=1&hissid=1,2&pic=1&lid=2954122319534538991&often=1&recom=1&pid=" + (v.get("userinfo").useridStr || ""), "//entry.baidu.com/rp/api?di=pu100047&qnum=10&title=");
        ({ magic_num: 778, channel_page: "pc_sug_hao123", query: "", pre_query: "", user_ip: 0, baidu_id: w.getCSRFId(), experiment_id_list: [0], passport_user_id: 0, url: "", service_control: { union_title: "", request_num: 20, request_url: "https://www.baidu.com/s?word=" }, encode_type: 3 }) }
    t.exports = l });;
define("indexher:container/module/suggest/videoHandler.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/format.js", "indexher:static/js/browser.js", "indexher:static/js/cookie.js"], function(e, s, a, t, i, d, n, o) {
    function r(e) {
        try {
            var s = this,
                a = "{#S+_}";
            l.ajax({ url: "http://nssug.baidu.com/su?cb=?", data: { wd: e, sc: "hao123", prod: "video_ala", oe: "utf-8" }, queryKey: "wd", scriptCharset: "gbk", cache: !1, dataType: "jsonp" }).done(function(t) {
                try { s.clear();
                    var i = !1;
                    window.s = t.s, l.each(t.s, function(t, d) {
                        try {
                            var n = d.split(a);
                            if (!n.length || t > 5) return !0;
                            i = !0;
                            var o = l.parseJSON(n[1]);
                            o ? s.add(n[0], c(e, n[0], o.type), { videoid: o.id, url: "http://v.baidu.com/" + o.type + "_sug/?callback=?" }) : s.add(n[0], c(e, n[0])) } catch (r) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: r.message || r.description, path: "indexher:container/module/suggest/videoHandler.js", ln: 48 }) } }), i && s.show() } catch (d) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: d.message || d.description, path: "indexher:container/module/suggest/videoHandler.js", ln: 52 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/suggest/videoHandler.js", ln: 53 }) } }

    function c(e, s, a) {
        try {
            var t = RegExp(e, "g"),
                i = s.replace(t, "<b>" + e + "</b>"),
                d = p[a];
            return d && (i += g('<div class="suggest-video-type">#{text}<i>&gt;</i></i>', { text: d })), i } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/suggest/videoHandler.js", ln: 72 }) } } {
        var l = i,
            g = d,
            p = { movie: "电影", tv: "电视剧", comic: "动漫", show: "综艺" },
            u = l("#search");! function() {
            function e(e) {
                try {
                    var a = { movie: '<div class="suggest-video-detail-pic"><a href="#{url}"><img src="#{poster}"/><div class="suggest-video-detail-pictext">#{year}</div></a></div><div class="suggest-video-detail-content"><div class="suggest-video-detail-title"><a href="#{url}">#{title}</a></div><div class="suggest-video-detail-info"><p><span class="label">评分：</span><span class="rate">#{rating}</span></p><p><span class="label">主演：</span>#{actors}</p><p><span class="label">导演：</span>#{directors}</p><p><span class="label">类型：</span>#{genres}</p></div><a class="suggest-video-detail-link" href="#{url}">查看详情<span>&gt;&gt;</span></a></div>', tvplay: '<div class="suggest-video-detail-pic"><a href="#{url}"><img src="#{poster}"/><div class="suggest-video-detail-pictext">#{update}</div></a></div><div class="suggest-video-detail-content"><div class="suggest-video-detail-title"><a href="#{url}">#{title}</a></div><div class="suggest-video-detail-info"><p><span class="label">主演：</span>#{actors}</p><p><span class="label">年代：</span>#{year}</p><p><span class="label">类型：</span>#{genres}</p></div><a class="suggest-video-detail-link" href="#{url}">查看详情<span>&gt;&gt;</span></a></div>', comic: '<div class="suggest-video-detail-pic"><a href="#{url}"><img src="#{poster}"/><div class="suggest-video-detail-pictext">#{update}</div></a></div><div class="suggest-video-detail-content"><div class="suggest-video-detail-title"><a href="#{url}">#{title}</a></div><div class="suggest-video-detail-info"><p><span class="label">年代：</span>#{year}</p><p><span class="label">地区：</span>#{areas}</p><p><span class="label">类型：</span>#{genres}</p></div><a class="suggest-video-detail-link" href="#{url}">查看详情<span>&gt;&gt;</span></a></div>', tvshow: '<div class="suggest-video-detail-pic"><a href="#{url}"><img src="#{poster}"/><div class="suggest-video-detail-pictext">#{update}</div></a></div><div class="suggest-video-detail-content"><div class="suggest-video-detail-title"><a href="#{url}">#{title}</a></div><div class="suggest-video-detail-info"><p><span class="label">主持：</span>#{hosts}</p><p><span class="label">地区：</span>#{areas}</p><p><span class="label">类型：</span>#{genres}</p></div><a class="suggest-video-detail-link" href="#{url}">查看详情<span>&gt;&gt;</span></a></div>' };
                    t || (t = !0, s = l("<div>"), u.find(".suggest").append(s));
                    var i = { movie: "suggest-video-detail suggest-video-detail-movie", tvplay: "suggest-video-detail suggest-video-detail-tv", comic: "suggest-video-detail suggest-video-detail-comic", tvshow: "suggest-video-detail suggest-video-detail-tvshow" };
                    s.get(0).className = i[e.category], s.show().html(g(a[e.category], e)), l("#search .suggest").css({ height: 264 }) } catch (d) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: d.message || d.description, path: "indexher:container/module/suggest/videoHandler.js", ln: 268 }) } }
            try {
                var s, a = {},
                    t = !1,
                    i = function() {
                        function e(e) {
                            try {
                                for (var s = [], a = 0; a < e.length; a++) s.push('<span class="text">' + e[a] + "</span>");
                                return s.join("") } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/suggest/videoHandler.js", ln: 115 }) } }

                        function s(e) {
                            try {
                                var s = e.episodes_count || e.episode_count;
                                return e.update < s ? "更新至" + e.update + "集" : "全" + s + "集" } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/suggest/videoHandler.js", ln: 124 }) } }
                        try {
                            return function(a) {
                                try {
                                    var t;
                                    switch (a.category) {
                                        case "movie":
                                            t = { actors: e(a.actors), directors: e(a.directors), genres: e(a.genres), url: "http://v.hao123.com/dianying/" + a.id + ".htm", year: a.year };
                                            break;
                                        case "tvplay":
                                            t = { actors: e(a.actors), directors: e(a.directors), genres: e(a.genres), url: "http://v.hao123.com/dianshi/" + a.id + ".htm", year: a.year, update: s(a) };
                                            break;
                                        case "comic":
                                            t = { genres: e(a.genres), url: "http://v.hao123.com/dongman/" + a.id + ".htm", year: a.year, areas: a.areas, update: s(a) };
                                            break;
                                        case "tvshow":
                                            t = { hosts: e(a.hosts), genres: e(a.genres), url: "http://v.hao123.com/zongyi/" + a.id + ".htm", year: a.year, areas: e(a.areas), update: "更新至" + a.update.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3") } }
                                    return t.title = a.title, t.category = a.category, t.poster = a.poster, t.rating = a.rating, t } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/suggest/videoHandler.js", ln: 176 }) } } } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/suggest/videoHandler.js", ln: 177 }) } }();
                return { show: e, hide: function() {
                        try { s && (s.hide(), l("#search .suggest").css({ height: "auto" })) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/suggest/videoHandler.js", ln: 278 }) } }, fill: function(s) {
                        try { a[s.videoid] ? e(a[s.videoid]) : l.ajax({ url: s.url, data: { id: s.videoid }, cache: !0, dataType: "jsonp" }).done(function(t) {
                                try {
                                    var d = i(t.video);
                                    a[s.videoid] = d, e(d) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/suggest/videoHandler.js", ln: 295 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/suggest/videoHandler.js", ln: 297 }) } } } } catch (d) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: d.message || d.description, path: "indexher:container/module/suggest/videoHandler.js", ln: 299 }) } }() }
    s.exports = r });;
define("indexher:container/module/search/ssl/bd_input.js", ["global", "module", "exports", "require"], function() {! function() {
        function e() {
            try {
                var e = navigator && navigator.userAgent ? navigator.userAgent : "",
                    t = (new RegExp(/chrome|firefox|safari|msie 10|rsv:11|msie [89]/i), /msie 6/i),
                    n = !t.test(e);
                return n } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/search/ssl/bd_input.js", ln: 44 }) } }

        function t() {
            try { o({ url: "https://www.baidu.com/con", tn: "jinshan" }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/ssl/bd_input.js", ln: 52 }) } }

        function n(e) {
            try { c._option.protocol = e, c._option.checked = !0 } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/search/ssl/bd_input.js", ln: 61 }) } }

        function o(e) {
            try {
                var t = e.url ? e.url : "https://www.baidu.com/con",
                    o = document.createElement("script");
                o.onload = function() {
                    try {} catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/ssl/bd_input.js", ln: 77 }) } }, o.onerror = function() {
                    try { n("http") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/ssl/bd_input.js", ln: 81 }) } }, o.src = t + "?from=" + e.tn, document.body.appendChild(o) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/search/ssl/bd_input.js", ln: 84 }) } }

        function i() {
            try { c._option.time_checked = !0, c._option.timeout = !0 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/ssl/bd_input.js", ln: 146 }) } }
        try {
            var c = window.BaiduHttps = { _option: {} },
                s = function() {
                    try { e() ? t() : n("http") } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/search/ssl/bd_input.js", ln: 20 }) } };
            c.callbacks = function(e) {
                try { "object" == typeof e && n(0 == e.s ? "https" : "http") } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/search/ssl/bd_input.js", ln: 99 }) } };
            var a;
            c.useHttps = function() {
                try { this._option.timeout === !0 && this._option.timeout === !0 && (s(), this._option.timeout = !1, this._option.time_checked = !1, a = setTimeout(i, 12e4)); { Math.random() }
                    return this._option.time_checked || (a = setTimeout(i, 12e4)), this._option.checked && "https" === this._option.protocol ? 1 : 0 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/ssl/bd_input.js", ln: 139 }) } }, s() } catch (r) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: r.message || r.description, path: "indexher:container/module/search/ssl/bd_input.js", ln: 150 }) } }() });;
define("indexher:container/module/search/history.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/config.js", "indexher:static/js/store.js", "indexher:static/js/cookie.js"], function(e, t, n, o, i, c, a, r) {
    function s(e) {
        try {
            if (H) h(e);
            else {
                var t;
                try {
                    var n = S.get(R) } catch (o) {}
                n && (t = n.split(k)), e(t || []) } } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/search/history.js", ln: 50 }) } }

    function h(e) {
        try { j.ajax({ url: b, success: function(t) {
                    try {
                        if (t) {
                            var n = t.data;
                            e(n ? n.split(k) : []) } } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/search/history.js", ln: 61 }) } }, dataType: "jsonp", type: "get" }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/search/history.js", ln: 65 }) } }

    function d(e) {
        try { s(function(t) {
                try {
                    for (var n = t, o = n.length; o--;) n[o] = decodeURIComponent(n[o]);
                    e(n) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/search/history.js", ln: 90 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/search/history.js", ln: 91 }) } }

    function p(e) {
        try { H ? l(e) : S.set(R, e) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/search/history.js", ln: 96 }) } }

    function l(e) {
        try {
            var t = T + "?v=" + encodeURIComponent(e) + "&c=" + I;
            j.ajax({ url: t, success: function() {
                    try {} catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/history.js", ln: 107 }) } }, dataType: "jsonp", type: "get" }) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/search/history.js", ln: 111 }) } }

    function g(e) {
        try {
            if (e = j.trim(e), !e) return;
            e = j.trim(e.substring(0, 16)), e = encodeURIComponent(e), s(function(t) {
                try { f(t, e) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/search/history.js", ln: 131 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/search/history.js", ln: 133 }) } }

    function f(e, t) {
        try {
            for (var n = e, o = n.length, i = 0; o > i; i++)
                if (n[i] === t) {
                    if (!i) return;
                    n.splice(i, 1), o--;
                    break }
            n.unshift(t), o++, o > U && n.splice(U, o - U), window.SearchHistoryData = decodeURIComponent(n.join(k)).split(k), p(n.join(k)) } catch (c) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: c.message || c.description, path: "indexher:container/module/search/history.js", ln: 167 }) } }

    function m(e) {
        try { d(function(t) {
                try {
                    var n = t && t.length > 0 && ("--" + t.join("--")).replace("--" + e, "").replace(/^--/, "");
                    n = encodeURIComponent(n).replace(/--/g, k), window.SearchHistoryData = decodeURIComponent(n).split(k), p(n) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/search/history.js", ln: 178 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/search/history.js", ln: 179 }) } }

    function u() {
        try { p("") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/history.js", ln: 184 }) } }

    function y() {
        try {
            var e = '.today-hook, a[data-hook="colcalendar-info"], a[data-lu="link"]',
                t = j(".hotwords-hook");
            t.on("click", "a", function() {
                try { x(j(this)) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/history.js", ln: 194 }) } }), j(document).on("click", e, function() {
                try { x(j(this)) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/history.js", ln: 198 }) } }) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/search/history.js", ln: 199 }) } }

    function x(e) {
        try {
            var t = (decodeURIComponent(e.attr("href")) || "").match(/word=([^&]+)/);
            t && t[1] && g(decodeURIComponent(t[1])) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/search/history.js", ln: 204 }) } }
    var j = i,
        v = c,
        w = a,
        C = r,
        I = C.getCSRFId() || "",
        R = "search_history",
        k = "|",
        U = 8,
        H = v.get("userinfo").islanding,
        T = HAO.httpsTrans("http://www.hao123.com/api/sethotsearch"),
        b = HAO.httpsTrans("http://www.hao123.com/api/gethotsearch?c=" + I),
        S = w;
    y(), t.exports = { get: d, add: g, clear: u, remove: m } });;
define("indexher:container/module/search/config.js", ["global", "module", "exports", "require", "indexher:static/js/format.js", "indexher:static/js/events.js", "indexher:container/module/suggest/nssug.js", "indexher:container/module/suggest/webHandler.js", "indexher:container/module/suggest/videoHandler.js", "indexher:static/js/config.js", "indexher:static/js/log.js", "indexher:static/js/browser.js"], function(e, t, o, a, i, n, c, r, s, h, d, g) {
    function u(e, t) {
        try {
            return S.ie && S.ie < 7 && (e += "_png8"), t ? "http://s0.hao123img.com/res/images/search_logo_white/" + e + ".png" : "http://s1.hao123img.com/res/images/search_logo/" + e + ".png" } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/search/config.js", ln: 30 }) } }

    function l(e) {
        try {
            var t, o = this;
            if (e = e.replace(/^\s+|\s+$/g, ""), !e) return void o.clear();
            t = j("http://tieba.baidu.com/sug?query=#{0|u}&callback=?", e), $.ajax({ url: t, data: { sc: "hao123" }, cache: !1, dataType: "jsonp", scriptCharset: "gbk" }).done(function() {
                try { p.apply(o, arguments), o = null } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/config.js", ln: 56 }) } }) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/search/config.js", ln: 57 }) } }

    function p(e) {
        try {
            var t, o, a, i, n, c, r = this;
            if (r.clear(), !e || e.error || !(t = e.msg) || !(n = t.length)) return;
            for (c = j("#{0|e}", r.original()), i = 0; n > i; i++) o = t[i], a = q.getSuggestHTML(c, o), r.add(o, a);
            r.show() } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/search/config.js", ln: 80 }) } }

    function m(e) {
        try {
            var t, o = this;
            if (e = e.replace(/^\s+|\s+$/g, ""), !e) return void o.clear();
            t = j("http://map.baidu.com/su?wd=#{0|u}&callback=?", e), $.ajax({ url: t, data: { cid: 1, type: 0, newmap: 1, sc: "hao123" }, cache: !1, dataType: "jsonp", scriptCharset: "utf-8" }).done(function() {
                try { f.apply(o, arguments), o = null } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/config.js", ln: 106 }) } }) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/search/config.js", ln: 108 }) } }

    function f(e) {
        try {
            var t, o, a, i, n, c, r, s = this;
            if (s.clear(), !e || !(t = e.s) || !(n = t.length)) return;
            for (c = e.q || "", i = 0; n > i; i++)(o = t[i]) && (o = o.split("$"), r = o[0] + o[1], o = o[2] || "" + o[3] || "", o || (o = t[i].split("$"), o = o[3] ? o[1] : o[0] + o[1], r = o[3] ? o[0] : ""), o || (o = t[i].split("$"), o = o[3] || "", r = o[0] + o[1]), a = q.getSuggestHTML(c, o), a += j('<i class="g-fc2">#{0}</i>', r), s.add(o, a));
            s.show() } catch (h) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: h.message || h.description, path: "indexher:container/module/search/config.js", ln: 154 }) } }

    function y() {
        try {
            return window.__originTn__ || window.__haoTn__ || "sitehao123" } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/config.js", ln: 165 }) } }

    function w(e, t) {
        try { k.web[e] = t } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/search/config.js", ln: 375 }) } }

    function x(e) {
        try {
            return k.web[e] } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/search/config.js", ln: 379 }) } }

    function b(e, t, o) {
        try {
            return e.hasOwnProperty(t) ? e[t] : o } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/search/config.js", ln: 386 }) } } {
        var j = i,
            v = n,
            q = c,
            _ = r,
            W = s,
            S = g,
            k = { web: { alt: "百度首页", logo: u("webv2", !1), logoWhite: u("web", !0), url: "http://www.baidu.com/?tn=" + encodeURIComponent(y()), action: "http://www.baidu.com/s", actionSSL: "https://www.baidu.com/s", query: "word", params: { tn: y(), ie: "utf-8" }, sug: _, hotword: "/sugdata_s4.json" }, music: { alt: "百度音乐", logo: u("yinyue", !1), logoWhite: u("yinyue", !0), url: "http://music.baidu.com", action: "http://music.hao123.com/search", query: "key", params: { fr: "hao123", ie: "utf-8" }, sug: q("mp3", { sc: "hao123" }) }, video: { alt: "百度视频搜索", logo: u("video", !1), logoWhite: u("video", !0), url: "http://v.baidu.com", action: "http://v.baidu.com/v", query: "word", params: { fr: "video", ie: "utf-8" }, sug: W }, image: { alt: "百度图片", logo: u("image", !1), logoWhite: u("image", !0), url: "http://image.baidu.com", action: "http://image.baidu.com/i", query: "word", params: { tn: "baiduimage", ct: "201326592", cl: "2", lm: "-1", ie: "utf-8", fm: "hao123" }, sug: q("image", { sc: "hao123" }), hotword: "" }, tieba: { alt: "百度贴吧", logo: u("tieba", !1), logoWhite: u("tieba", !0), url: "http://tieba.baidu.com", action: "http://tieba.baidu.com/f", query: "kw", params: { ie: "utf-8", sc: "hao123" }, sug: l }, zhidao: { alt: "百度知道", logo: u("zhidao", !1), logoWhite: u("zhidao", !0), url: "http://zhidao.baidu.com", action: "http://zhidao.baidu.com/q", query: "word", params: { tn: "ikaslist", ct: "17", ie: "utf-8", sc: "hao123", rn: "20" }, sug: q("zhidao", { sc: "hao123" }) }, news: { alt: "百度新闻搜索", logo: u("news", !1), logoWhite: u("news", !0), url: "http://news.baidu.com", action: "http://news.baidu.com/ns", query: "word", params: { tn: "news", ie: "utf-8", from: "hao123", sr: 0, cl: 2, rn: 20, ct: 1, prevct: "no" }, sug: q("news", { sc: "hao123" }) }, map: { alt: "百度地图搜索", logo: u("map", !1), logoWhite: u("map", !0), url: "http://map.baidu.com", action: "http://map.baidu.com/m", query: "word", params: { c: 1, ie: "utf-8", sc: "hao123" }, sug: m } };
        Object.prototype.toString }
    v.on("tnchecked", function(e, t) {
        try {
            var o = x("params");
            if (t && t.fake && t.tn) {
                var a = "http://www.baidu.com/?tn=" + encodeURIComponent(t.tn);
                o.tn = t.tn, w("url", a) }
            t.ft && (o.sc = t.ft), w("params", o) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/config.js", ln: 400 }) } }), t.exports = function(e) {
        try {
            var t = k[e];
            return t ? { alt: b(t, "alt"), logo: b(t, "logo"), logoWhite: b(t, "logoWhite"), url: b(t, "url"), action: b(t, "action"), actionSSL: b(t, "actionSSL"), query: b(t, "query"), params: b(t, "params"), sug: b(t, "sug"), hotword: b(t, "hotword", !1) } : void 0 } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/search/config.js", ln: 419 }) } } });;
define("indexher:container/module/search/search.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/widget.js", "indexher:container/module/suggest/suggest.js", "indexher:static/js/repeat.js", "indexher:static/js/format.js", "indexher:static/js/events.js", "indexher:static/js/cookie.js", "indexher:static/js/browser.js", "indexher:static/js/config.js", "indexher:container/module/search/config.js", "indexher:container/module/suggest/webHandler.js", "indexher:static/js/log.js", "indexher:container/module/search/history.js"], function(e, t, a, o, s, n, i, r, c, h, d, l, g, u, p, f, m) {
    function x(e) {
        try { e = e || {};
            for (var t, a, o = arguments, s = o.length, n = 0; ++n < s;) { t = o[n];
                for (a in t) t.hasOwnProperty(a) && (e[a] = t[a]) }
            return e } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/search/search.js", ln: 76 }) } }
    var y = s,
        w = c,
        b = h,
        j = d,
        _ = l,
        $ = g,
        v = u,
        T = p,
        k = (Object.prototype.toString, m),
        C = "hao123.",
        H = "search",
        B = "tabchange",
        S = "init",
        q = "submit",
        D = "hotwordshow",
        O = "hotwordhide",
        F = H + B,
        I = H + S,
        L = H + q,
        U = H + D,
        P = H + O,
        N = "index_searchhint",
        W = "tp3",
        R = window.location.hash || "",
        E = function() {
            try {} catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/search.js", ln: 55 }) } },
        M = "clickbox";
    y.widget(C + H, { options: { defaultTab: "web", currClass: "s-bg20 g-fc5 g-fc5h curr", normalClass: "g-fc0", suggestClass: "suggest-search g-bg11 g-br9", paramTpl: '<input type="hidden" name="#{name|e}" value="#{value|e}" />', hotURL: "/sugdata_s4.json", hotItemTpl: '<span class="hot-icon hot-icon-index hot-icon-#{cls}"><span class="hot-icon-num">#{index}</span></span>#{word}#{tag}', hotNumTpl: '<span class="hot-num">#{num}</span>', yindaoTibTpl: '<div style="display:none;hotword-yindao-tip" class="g_icon hotword-yindao-tip"><span class="g_icon hot-quan"></span><span class="hot-close"></span></div>', hotOnClass: "hotword-on", hotOffClass: "hotword-off", hotSugFooter: '<a class="hotword-tip g-fc2" href="http://top.baidu.com/">由百度搜索风云榜提供</a>' }, _create: function() {
            try {
                var e = this,
                    t = e.element,
                    a = e.options,
                    o = e.sugBType = "hao123-indexsuga" === a.pageId;
                e.cmssrc = "0", e.hotwordsNum = o ? 14 : 10, e.$magnify = y(".input-magnify", t), e.$recentWord = y(".input-word", t), e.showed = !1, e.$logoLink = y("a.link-hook", t), e.$logoImg = y("img.img-hook", t), e.$form = y("form.form-hook", t), e.$shadow = y("div.shadow-hook", t), e.$wrapper = y("div.wrapper-hook", t), e.$input = y("input.input-hook", t), e.$params = y("div.params-hook", t), e.$button = y("input.button-hook", t), e.$tabs = y("a.tab-hook", t).attr("hidefocus", "true"), e.$currTab = y("a.curr-hook", t), e.$suggest = e.$input.suggest({ classes: e.options.suggestClass, eventSpace: H + "suggest", sugBType: o }), e.$sugBox = y("div.suggest-search", t), e.$hotword = y("a.hotword-hook", t).attr("hidefocus", "true"), "" === R && e.$input.focus(), e.$tabsToggle = y("a.tabs-toggle-hook", t).attr("hidefocus", !0), e.$tabsView = e.$tabs.closest("div.tabs"), e.dataFlag = y('div[data-hooks="hao123-search"]').attr("data-flag") } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/search/search.js", ln: 152 }) } }, _init: function() {
            function e() {
                try {
                    var e = s.$currTab,
                        t = e.data("tab"),
                        a = null;
                    return e.removeClass(i).addClass(r), e = y(this).removeClass(r).addClass(i), s.$currTab = e, a = e.data("tab"), t !== a && s._trigger(B, null, { prevTab: t, currTab: a }), s._selectText(), !1 } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/search/search.js", ln: 188 }) } }

            function t() {
                try { s.$tabsView.hide(), s.$tabsToggle.removeClass("tabs-toggle-open").find("i").html("展开") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/search.js", ln: 194 }) } }

            function a(e) {
                try { y(e.target).closest(s.$tabsToggle)[0] ? (s.$tabsToggle.hasClass("tabs-toggle-open") ? t() : (s.$tabsView.show(), s.$tabsToggle.addClass("tabs-toggle-open").find("i").html("收起")), e.preventDefault()) : t() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/search.js", ln: 209 }) } }

            function o() {
                try { y(this).toggleClass("tabs-hover") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/search.js", ln: 213 }) } }
            try {
                var s = this,
                    n = s.options,
                    i = n.currClass,
                    r = n.normalClass;
                s.$detail = s.$suggest.suggest("getHeader"), s.$detail.addClass("detail"), s.$list = s.$suggest.suggest("getList"), j.set("hword", (new Date).getDate()), s.$input.focus(function() {
                    try { BaiduHttps && BaiduHttps.useHttps && BaiduHttps.useHttps() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/search.js", ln: 219 }) } }), s.$suggest.on("suggestselect", function(e, t) {
                    try { s.$list.css({ height: "auto" }), t = t.data, t && t.isSpecial && s._trigger("specialshow") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/search.js", ln: 257 }) } }), s.$tabs.click(e), y(document).click(a), s.element.on(F, function(e) {
                    try { s.$tabsToggle.find(".tab-curr").html(s.$currTab.text()), t() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/search.js", ln: 265 }) } }), s.$tabsView.hover(o, o), s.$suggest.on("suggestshow", function() {
                    try { s.showed = !0, s.$hotword.addClass(n.hotOnClass), t() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/search.js", ln: 274 }) } }), s.$shadow.click(function() {
                    try { s.$input.focus(), s._trigger(M, null, { tab: s.$currTab.data("tab") }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/search.js", ln: 283 }) } }), s.$shadow.hover(function() {
                    try { s.$input.is(":focus") || s._selectText() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/search.js", ln: 289 }) } }), s._initHotWord(), s._bindAdvancedEvent(), s._initSubmitEvent(), s._trigger(S, null, { currTab: n.defaultTab }), s.element.on("mouseover", ".footer-hook", function() {
                    try { y(".item-hook", s.element).removeClass("hover g-bg3").filter(":last").addClass("hover g-bg3") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/search.js", ln: 302 }) } }), s.element.on("mouseout", ".footer-hook", function() {
                    try { y(".item-hook:last", s.element).removeClass("hover g-bg3") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/search.js", ln: 305 }) } }), s.element.on("mouseout", ".list-hook", function() {
                    try { s.$sugBox.hasClass("sugB-Box") && y(".item-hook", s.element).removeClass("hover g-bg3 g-bg1") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/search.js", ln: 311 }) } }) } catch (c) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: c.message || c.description, path: "indexher:container/module/search/search.js", ln: 313 }) } }, _initSubmitEvent: function() {
            try {
                var e, t = this,
                    a = !1,
                    o = "other",
                    s = "input",
                    n = 0,
                    i = null,
                    r = t.options.defaultTab;
                t.$suggest.on("suggestinit", function(e, a) {
                    try {
                        return t.$wrapper.append(a), !1 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/search.js", ln: 332 }) } }).on("suggestinput", function(e) {
                    try { s = "input", n = 0, i = null, t.$sugBox.removeClass("sugB-Box") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/search.js", ln: 338 }) } }).on("suggestchange", function(e, o) {
                    try { n = o.index, i = o.data, s = n ? a ? "hotword" : "suggest" : "input", t.$sugBox.removeClass("sugB-Box") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/search.js", ln: 344 }) } }).on("suggestsubmit", function(a, s) {
                    try {
                        switch (t.$sugBox.removeClass("sugB-Box"), s.from) {
                            case "enter":
                                o = "enter", e = "enter";
                                break;
                            case "click":
                                o = "select", e = "click", t.$form.submit();
                                break;
                            default:
                                o = "other", e = "other" } } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/search/search.js", ln: 362 }) } }), t.$button.on("mousedown", function() {
                    try { e = "button", t.$button.addClass("button-active") } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/search/search.js", ln: 367 }) } }).on("mouseout mouseup", function() {
                    try { t.$button.removeClass("button-active") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/search.js", ln: 370 }) } }).mouseup(function() {
                    try { o = "button", t._trigger("buttonclick", null, { query: t.$input.val() }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/search.js", ln: 376 }) } }), t.element.on([F, I].join(" "), function(e, t) {
                    try { r = t.currTab, i = null } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/search.js", ln: 381 }) } }).on(U, function() {
                    try { a = !0 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/search.js", ln: 384 }) } }).on(P, function() {
                    try { a = !1 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/search.js", ln: 387 }) } }), b.on("suggest.clickcms", function(e) {
                    try { t.cmssrc = e } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/search/search.js", ln: 391 }) } }), t.$form.on("submit", function(a) {
                    function c() {
                        try {
                            if (!T.getPMData()) return null;
                            var e = T.getPMData(),
                                t = [];
                            return y("#search .list-hook li").each(function() {
                                try {
                                    for (var a = y(this).data().query, o = 0; o < e.length; o++) e[o].title === a && t.push(e[o]) } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/search/search.js", ln: 563 }) } }), t.length > 0 ? t : null } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/search/search.js", ln: 565 }) } }

                    function h(e) {
                        try {
                            if (!T.getPMData()) return !1;
                            for (var t = T.getPMData(), a = 0; a < t.length; a++)
                                if (t[a].title === e) return !0;
                            return !1 } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/search/search.js", ln: 579 }) } }
                    try {
                        var d = v(r),
                            l = t.$input.attr("key-word"),
                            g = t.$input.attr("default-word"),
                            u = !0,
                            p = t.$input.attr("placeholder"),
                            f = t.$input.val();
                        if ((!f && l && p === g || f === l) && (_.ie && _.ie < 10 || (t.$input.val(l), u = !1)), k.isSetHistory = u, "web" === r) {
                            var d = v(r),
                                m = d.params,
                                w = x({}, t.defaultParams, m),
                                b = BaiduHttps.useHttps(),
                                j = w.tn; "sitehao123" === j && (j = "50000023_hao_pg" === window.SearchHistoryTn ? "50000023_hao_pg" : "50000029_hao_pg" === window.SearchHistoryTn ? "50000029_hao_pg" : "50000026_hao_pg" === window.SearchHistoryTn ? "50000026_hao_pg" : "50000031_hao_pg" === window.SearchHistoryTn ? "50000031_hao_pg" : "50000033_hao_pg" === window.SearchHistoryTn ? "50000033_hao_pg" : "50000025_hao_pg" === window.SearchHistoryTn ? "50000025_hao_pg" : u ? "suggest" === s ? "50000022_hao_pg" : "hotword" === s ? "50000024_hao_pg" : "50000021_hao_pg" : "50000041_hao_pg", window.SearchHistoryTn = "") }
                        var $ = t._trigger(q, a, { action: o, from: s, suggestIndex: n, suggestData: i, query: t.$input.val(), tab: r, ssl_type: b, ssl_tn: j, ssl_pageFlag: t.options.pageFlag, cmssrc: t.cmssrc, "float": t.isfloat ? 1 : 0, ssl_sample: t.dataFlag ? "hao123-indexsearchlist1" === t.dataFlag ? "1001" : "1002" : "" });
                        if (t.cmssrc = "0", $ && "tieba" === r && "" === t.$input.val()) return t._goUrl("http://tieba.baidu.com"), !1;
                        if ($ && "hotword" === s && i && i.url && (t._goUrl(i.url), $ = !1), o = "other", "web" === r) {
                            var C = !1,
                                H = 0,
                                B = 0,
                                S = c(),
                                D = y("#search .list-hook li").eq(n - 1).data();
                            n > 0 && D && D.data && D.data.isSpecial ? ($ = !1, window.open(D.data.detailurl), B = 1, H = 1, C = !0) : S && (C = !0, B = !n && h(t.$input.val()) ? 1 : 0), C && t._trigger("secialsubmit", null, { toerji: H, from: e, hit: B, index: n }) } else $ && ($ = !1, t._goUrl(d.action + "?" + t.$form.serialize()));
                        return $ } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/search/search.js", ln: 581 }) } }) } catch (c) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: c.message || c.description, path: "indexher:container/module/search/search.js", ln: 582 }) } }, _goUrl: function(e) {
            try { window.open(e) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/search/search.js", ln: 591 }) } }, _selectText: function() {
            try { "" === R && (this.$input.focus(), this.$input.select()) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/search.js", ln: 602 }) } }, _initHotWord: function() {
            function e(e) {
                try {
                    var n, i, r;
                    if (!e || !e.data) return;
                    for (e && e.boardurl && (r = !0), t.sugBType && t.$sugBox.addClass("sugB-Box"), e = e.data, o.suggest("clear"), r && o.suggest("footer", a.hotSugFooter), n = 0; n < t.hotwordsNum && (i = e[n], i); n++) o.suggest("add", i.word, w(a.hotItemTpl, { index: n + 1, cls: 3 > n ? "orange" : "dark", word: i.word, tag: i.isnew ? ' <span class="hot-icon hot-icon-new">新</span>' : "" }), { url: i.url || null });
                    if (t.sugBType) {
                        var c = a.cmsdata[0].data[0],
                            h = a.cmsdata[1].data;
                        o.suggest("addHeader"), o.suggest("addCmsData", c, h) }
                    o.suggest("show"), s.addClass(a.hotOnClass) } catch (d) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: d.message || d.description, path: "indexher:container/module/search/search.js", ln: 712 }) } }
            try {
                var t = this,
                    a = t.options,
                    o = t.$suggest,
                    s = t.$hotword;
                s.click(function() {
                    try {
                        return t.showed ? (s.addClass("hotword-off").removeClass("hotword-on"), o.suggest("clear")) : (s.addClass("hotword-on").removeClass("hotword-off"), t._loadHotWord(e), t._trigger(D), t.$input.focus()), !1 } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/search/search.js", ln: 627 }) } }).hover(function() {
                    try { o.suggest("hold", !0) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/search.js", ln: 630 }) } }, function() {
                    try { o.suggest("hold", !1) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/search.js", ln: 633 }) } }), o.on("suggesthide", function() {
                    try { s.addClass(a.hotOffClass), s.removeClass(a.hotOnClass), t.showed = !1, o.suggest("footer", ""), t._trigger(O) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/search.js", ln: 645 }) } }) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/search/search.js", ln: 714 }) } }, _loadHotWord: function(e) {
            try {
                var t = this;
                if (!t.hotURL) return;
                e = e || E, y.ajax({ dataType: "json", url: t.hotURL, cache: !0, data: { r: ~(new Date / 18e5) }, success: function(a) {
                        try { a.data = {};
                            for (var o, s = 0; s < a.keywords.length; s++) o = a.keywords[s], a.data[s] = { word: o.keyword, isnew: o.isNew, srchs: o.searches, change: o.changeRate, detailurl: "", m_detailurl: "", links: {} };
                            e.call(t, a), b.emit("hotword.loaded", a) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/search/search.js", ln: 791 }) } } }) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/search/search.js", ln: 793 }) } }, _bindAdvancedEvent: function() {
            function e(e) {
                try {
                    if (!e || !e.data) return;
                    var a, o, s;
                    for (e = e.data, a = 0, s = 0; a < r.hotwordsNum && (o = e[a], o); a++) o.isnew && s++;
                    s && t(s) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/search/search.js", ln: 1096 }) } }

            function t(e) {
                try { o ? o.text(e).show() : o = y(w(d.hotNumTpl, { num: e })).appendTo(r.$hotword).css({ height: 18, top: 6, opacity: 1 }).animate({ height: 18, top: 6, opacity: 1 }, 400), r.$num = o } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/search/search.js", ln: 1117 }) } }

            function a() {
                try {
                    var e;
                    g && (s ? s.show() : (s = y(d.yindaoTibTpl).appendTo(r.$wrapper), n = y(".hot-close", s), e = setTimeout(function() {
                        try { s.fadeIn(), u = 0 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/search.js", ln: 1130 }) } }, u)), n && n.click(function() {
                        try { s && s.remove(), j.set(W, 1, { expires: 30 }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/search.js", ln: 1140 }) } })) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/search/search.js", ln: 1143 }) } }
            try {
                var o, s, n, i, r = this,
                    c = r.element,
                    h = null,
                    d = r.options,
                    l = !j.has(N),
                    g = !j.has(W),
                    u = 1900,
                    p = $.get("searchtip") - 0;
                y(document).on("floatstart", function() {
                    try { r.isfloat = !0, b.emit("search.floatstart") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/search.js", ln: 821 }) } }), y(document).on("floatend", function() {
                    try { r.isfloat = !1, b.emit("search.floatend") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/search.js", ln: 825 }) } }), c.on([I, F].join(" "), function(t, n) {
                    try {
                        var c, d = n.currTab,
                            l = v(d);
                        if (i = d, !l) return;
                        c = l.hotword, "" === R && r.$input.focus(), r.$input.attr({ name: l.query }), h = l.params, r.$suggest.suggest("handler", v("web").sug), r.hotURL = c, c && (o && o.hide(), r._loadHotWord(e)), r.$hotword.toggle(!!c), p && (c ? a() : (s && s.remove(), s = null)) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/search/search.js", ln: 967 }) } }).on(L, function(e, t) {
                    try {
                        var a, o = t.tab,
                            s = v(o),
                            n = s.params,
                            i = x({}, h, n); "web" === o && t.ssl_pageFlag && x(i, { ssl_sample: t.ssl_pageFlag }), "web" === o && window.win_logid && x(i, { srcqid: window.win_logid }), "web" === o && void 0 !== t.ssl_type && t.ssl_tn && r.$form.attr(1 === t.ssl_type ? { action: s.actionSSL } : { action: HAO.httpsTrans(s.action) }), ("suggest" === t.from || "hotword" === t.from) && (x(i, { f: 3, rsp: t.suggestIndex - 1 }), a = t.suggestData, a && a.suggestId && x(i, { rsv_sug5: a.suggestId })), "50000025_hao_pg" === window.SearchHistoryTn && x(i, { qsource: window.SearchLuSuez }), "web" === o && "sitehao123" === i.tn && (i.tn = t.ssl_tn), r.params(i), k.isSetHistory && k.add(t.query) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/search.js", ln: 1051 }) } }).on(U, function() {
                    try { l && (j.set(N, 1, { expires: 1 }), l = !1), p && g && (j.set(W, 1, { expires: 30 }), s && s.remove()) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/search.js", ln: 1070 }) } }) } catch (f) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: f.message || f.description, path: "indexher:container/module/search/search.js", ln: 1144 }) } }, params: function(e, t) {
            try {
                var a, o, s, n = this,
                    i = n.options.paramTpl;
                arguments.length > 1 ? (n._params || (n._params = {}), a = n._params, a[String(e)] = t) : a = n._params = e, s = [];
                for (o in a) a.hasOwnProperty(o) && s.push(w(i, { name: o, value: a[o] }));
                n.$params.html(s.join("")) } catch (r) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: r.message || r.description, path: "indexher:container/module/search/search.js", ln: 1175 }) } } }) });;
define("indexher:container/module/search/searchLog.js", ["global", "module", "exports", "require", "indexher:static/js/log.js", "indexher:static/js/config.js"], function(e, t, a, s, o, i) {
    function n(e) {
        try {
            var t = 0;
            e.on("searchclickbox", function(e, a) {
                try {
                    var s = +new Date;
                    if (1e3 > s - t) return;
                    t = s, c({ type: "clickbox", pageId: r.get("pageId"), position: a.tab }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/searchLog.js", ln: 28 }) } }), e.on("searchspecialshow", function(e) {
                try { c({ type: "suggestspecialshow" }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/searchLog.js", ln: 42 }) } }), e.on("searchsecialsubmit", function(e, t) {
                try { c({ type: "special", hit: t.hit, from: t.from, toerji: t.toerji, index: t.index }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/searchLog.js", ln: 51 }) } }), e.on("searchsubmit", function(e, t) {
                try {
                    var a = { type: "submit", position: t.tab, title: t.query, pageId: r.get("pageId"), "float": t["float"], sugposition: t.suggestIndex };
                    switch (t.ssl_pageFlag && (a.pageFlag = t.ssl_pageFlag), t.ssl_tn && (a.tn = t.ssl_tn), t.ssl_sample && (a.sample = t.ssl_sample), t.action) {
                        case "button":
                            a.trigger = "button";
                            break;
                        case "select":
                            a.trigger = "click";
                            break;
                        case "enter":
                            a.trigger = "enter" }
                    var s = { input: 0, suggest: 2, hotword: { web: 1, image: 3 }, cmsimage: 4, cmstxt: 5 };
                    a.src = "hotword" === t.from ? s[t.from][t.tab] : s[t.from], c(a) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/searchLog.js", ln: 139 }) } }).on("searchhotwordshow", function(e) {
                try { c({ sugposition: 1, pageId: r.get("pageId") }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/search/searchLog.js", ln: 197 }) } }) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/search/searchLog.js", ln: 198 }) } }
    var c = o,
        r = i;
    t.exports = n });;
define("indexher:container/module/search/searchtop.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/browser.js", "indexher:static/js/pageEvents.js"], function(e, r, t, a, s, o, n) {
    function c() {
        try {
            if (h.ie && h.ie < 7) return;
            var e = i(".hao123-search-panel"),
                r = i(".hao123-search", e),
                t = "search-fixed",
                a = !1,
                s = i(".hao123-search-panel-box"),
                o = i(".hotsearchCon"),
                n = o.clone(),
                c = i(".js-hotsearch-box", o);
            d.on("viewport.change", function(h) {
                try {
                    var d = s.offset().top + 20;
                    if (h.scrollTop > d) {
                        if (a) return;
                        r.css("height", 46), e.addClass(t), a = !0, i(document).trigger("floatstart"), s.after(n), o.css("marginTop", -4).appendTo(e), c.trigger("changeHostSearchData", !0) } else {
                        if (!a) return;
                        e.removeClass(t), r.css("height", 41), a = !1, i(document).trigger("floatend"), n.remove(), s.after(o.removeAttr("style")), c.trigger("changeHostSearchData", !1) } } catch (g) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: g.message || g.description, path: "indexher:container/module/search/searchtop.js", ln: 95 }) } }) } catch (g) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: g.message || g.description, path: "indexher:container/module/search/searchtop.js", ln: 96 }) } }
    var i = s,
        h = o,
        d = n;
    r.exports = c });;
define("indexher:container/module/hotsearch/hotsearch.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/widget.js", "indexher:static/js/events.js", "indexher:static/js/log.js", "indexher:static/js/cookie.js", "indexher:static/js/lu/ludata.js", "indexher:static/js/store.js", "indexher:static/js/JSON.js", "indexher:static/js/recomlog.js"], function(e, t, a, o, n, c, r, s, i, h, d, l, p) {
    var g = n,
        m = s,
        f = i,
        u = d,
        x = l,
        y = p,
        j = "hao123.",
        w = "hotsearch";
    g.widget(j + w, { _create: function() {
            try {
                var e = this;
                e.$hotword = g("a.js-hotword", e.element), e.logParams = e.options.logParams, e.getRecom(), e.bindEvent() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/hotsearch/hotsearch.js", ln: 45 }) } }, initYHJF: function() {
            try {
                var e, t = this,
                    a = t.options;
                t.wordsBackup = a.hotwords, t.index = a.max, t.wordsBackup && t.element.on("click", ".js-hotword", function() {
                    try {
                        var a = g(this);
                        t.wordsBackup.length && (clearTimeout(e), e = setTimeout(function() {
                            try {
                                if (t.replaceItem(a, t.wordsBackup.shift()), t.options.flag) {
                                    var e = t.getVLogParams();
                                    t.sendVLog(e) } } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/hotsearch/hotsearch.js", ln: 68 }) } }, 600)) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/hotsearch/hotsearch.js", ln: 70 }) } }) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/hotsearch/hotsearch.js", ln: 72 }) } }, initStrategyData: function() {
            try {
                var e = this,
                    t = u.get("jsznData");
                e.getStrategyData(function(a) {
                    try {
                        var o = { data: [] };
                        e.rsresult = a;
                        for (var n = 0; n < a.data.length; n++) { e.replaceItem(e.$hotword.eq(n), { title: a.data[n].data[0].title });
                            for (var c = 0; c < a.data[n].data.length; c++) {
                                var r = a.data[n].data[c];
                                r.s_click_max = a.data[n].click_max, r.s_show_max = a.data[n].show_max, o.data.push(r) } }
                        if (!t) return u.set("jsznData", x.stringify(o)), void(t = o);
                        t = x.parse(t), t = e.execStrategyData(a, t, "init"), u.set("jsznData", x.stringify(t)) } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/hotsearch/hotsearch.js", ln: 112 }) } }), g("#hotsearch-box").on("click", ".js-hotword", function() {
                    try {
                        for (var a = g(this), o = 0, n = 0; n < t.data.length; n++) a.text() === t.data[n].title && (t.data[n].show_max = t.data[n].s_show_max);
                        o && clearTimeout(o), o = setTimeout(function() {
                            try { t = e.execStrategyData(e.rsresult, t, "click"), u.set("jsznData", x.stringify(t)) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/hotsearch/hotsearch.js", ln: 133 }) } }, 600) } catch (c) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: c.message || c.description, path: "indexher:container/module/hotsearch/hotsearch.js", ln: 134 }) } }) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/hotsearch/hotsearch.js", ln: 135 }) } }, execStrategyData: function(e, t) {
            try {
                for (var a = this, o = { data: [] }, n = 0; n < e.data.length; n++) {
                    for (var c = e.data[n], r = null, s = null, i = 0; i < c.data.length; i++) {
                        for (var h = 0, d = 0; d < t.data.length; d++) t.data[d].title === c.data[i].title && (o.data.push(t.data[d]), h++, c.show_max - 0 === t.data[d].show_max - 0 ? s = t.data[d].title : r || (t.data[d].show_max = t.data[d].show_max - 0 + 1, r = t.data[d].title));
                        h || (o.data.push(c.data[i]), r = c.data[i].title) }
                    a.replaceItem(a.$hotword.eq(n), { title: r || s }) }
                return o } catch (l) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: l.message || l.description, path: "indexher:container/module/hotsearch/hotsearch.js", ln: 192 }) } }, getStrategyData: function(e) {
            try { g.ajax({ url: "/api/searchword?tn=pc_search_word&c=" + f.getCSRFId(), success: function(t) {
                        try { e(t) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/hotsearch/hotsearch.js", ln: 199 }) } }, dataType: "json" }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/hotsearch/hotsearch.js", ln: 202 }) } }, getRecom: function() {
            try {
                var e = this,
                    t = e.options,
                    a = t.flag,
                    o = t.recomUrl;
                if (!a || !o) return;
                o = HAO.httpsTrans(decodeURIComponent(o)), g.ajax(o, { dataType: "jsonp", jsonpCallback: "setRecom" }).success(function(t) {
                    try {
                        var a = t.flag;
                        4 === a ? e.renderRecom(t.json, a) : 3 === a && (e.logParams = e.logParams.replace(/(recom:)\d/, "$1" + a), e.$hotword.each(function() {
                            try { g(this).attr("alog-custom", function(e, t) {
                                    try {
                                        return t.replace(/(recom:)\d/, "$1" + a) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/hotsearch/hotsearch.js", ln: 237 }) } }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/hotsearch/hotsearch.js", ln: 238 }) } }));
                        var o = e.getVLogParams();
                        e.sendVLog(o) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/hotsearch/hotsearch.js", ln: 245 }) } }).fail(function() {
                    try {} catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/hotsearch/hotsearch.js", ln: 248 }) } }) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/hotsearch/hotsearch.js", ln: 249 }) } }, renderRecom: function(e, t) {
            try {
                var a = this,
                    o = [],
                    n = a.options,
                    c = n.hotwords;
                a.index = 0;
                for (var r = c.shift(), s = e.length; s--;)
                    if (e[s].title === r.title) { e.splice(s, 1);
                        break }
                e.unshift(r), e.push.apply(e, c), s = e.length;
                for (var i = 0; s > i; i++) o.push(e[i].title);
                a.logParams = a.logParams.replace(/(hotq:)[^,]+/, "$1" + o.join("|")).replace(/(recom:)\d/, "$1" + t), a.$hotword.each(function(t) {
                    try { a.replaceItem(g(this), e[t]) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/hotsearch/hotsearch.js", ln: 288 }) } }), n.hotwords = e } catch (h) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: h.message || h.description, path: "indexher:container/module/hotsearch/hotsearch.js", ln: 291 }) } }, replaceItem: function(e, t) {
            try {
                if (t) {
                    var a = this,
                        o = t.title,
                        n = t.url;
                    e.text(o).prop("href", n || this.getUrl(o)).attr("alog-custom", a.getLogParams(t)).css("color", t.style || "") } } catch (c) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: c.message || c.description, path: "indexher:container/module/hotsearch/hotsearch.js", ln: 304 }) } }, getUrl: function(e) {
            try {
                return "http://www.baidu.com/s?word=" + encodeURIComponent(e) + "&tn=" + this.options.tn + "&ie=utf-8" } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/hotsearch/hotsearch.js", ln: 312 }) } }, getLogParams: function(e) {
            try {
                return e.link_hash && (this.logParams += ",hash:" + e.link_hash), this.logParams + ",index:" + this.index++ } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/hotsearch/hotsearch.js", ln: 320 }) } }, getVLogParams: function() {
            try {
                var e = this,
                    t = {};
                g.each(this.logParams.split(","), function(e, a) {
                    try {
                        var o = a.split(":");
                        t[o[0]] = o[1] } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/hotsearch/hotsearch.js", ln: 328 }) } });
                var a = [];
                a.push(t.abtest), a.push(t.recom), a.push(t.organic), a.push(t.ts);
                var o = [],
                    n = e.$hotword.closest("ul"),
                    c = n.offset();
                return c.right = c.left + n.innerWidth(), c.bottom = c.top + n.innerHeight(), e.$hotword.each(function() {
                    try {
                        var e = g(this),
                            t = e.offset();
                        c.top <= t.top && c.left <= t.left && c.right >= t.left + e.innerWidth() && c.bottom >= t.top + e.innerHeight() && o.push(e.text()) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/hotsearch/hotsearch.js", ln: 357 }) } }), a.push(o.join("|")), a } catch (r) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: r.message || r.description, path: "indexher:container/module/hotsearch/hotsearch.js", ln: 361 }) } }, sendVLog: function(e) {
            try {
                var t = (+new Date, { q: e.join("_") });
                t._ = (+new Date).toString(36), m(t, { url: "/v.gif" }) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/hotsearch/hotsearch.js", ln: 370 }) } }, bindEvent: function() {
            try {
                var e = this,
                    t = e.options;
                if (!t.flag) {
                    var a = "/api/sample",
                        o = "lu_hotsearch",
                        n = f.getCSRFId();
                    g.ajax({ url: a, dataType: "json", data: { appname: o, c: n } }).success(function(t) {
                        function a(t, a) {
                            try {
                                if (r) return;
                                g.ajax({ url: c, dataType: "jsonp", success: function(t) {
                                        try {
                                            var o = e.element,
                                                n = g('[data-lu="link"]', o),
                                                c = t.data || [];
                                            n.each(function() {
                                                try {
                                                    var e = g(this),
                                                        t = c.shift();
                                                    if (!t || !t.word) return !1;
                                                    e.text(t.word);
                                                    var o = "http://www.baidu.com/s?word=" + encodeURIComponent(t.word) + "&tn=" + a + "&ie=utf-8&rsv_dl=0_qwss_hao123_box";
                                                    e.attr("href", o);
                                                    var n = e.attr("alog-custom") + ",ss:rp";
                                                    e.attr("alog-custom", n) } catch (r) { "undefined" != typeof n && n("exception.fire", "catch", { msg: r.message || r.description, path: "indexher:container/module/hotsearch/hotsearch.js", ln: 437 }) } }), m({ type: "auto", k: "lu_hotsearch" });
                                            for (var r = 0; r < t.data.length; r++) t.data[r].style = 3 === r ? 1 : 0, t.data[r].dtype = 3, t.data[r].pic = 0, t.data[r].stype = 3;
                                            t.page = "hao123-indexnu", t.from = "search", t.monkey = "hotsearchShow", y.show({ el: o, items: n, result: t }) } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/hotsearch/hotsearch.js", ln: 474 }) } } }) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/hotsearch/hotsearch.js", ln: 476 }) } }
                        try {
                            var o = window.location.href || "",
                                n = o && o.match(/tn=([^&]+)/),
                                c = "//www.hao123.com/api/searchrecom?c=" + f.getCSRFId() + "&pageid=hao123-indexnu&cue=1&type=pc&dataType=rp",
                                r = f.get("sls");
                            t && n && a(1 === t.code ? !0 : !1, "50000050_hao_pg"), e.htmlSource = e.element.html().replace(/tn=([^&]+)/g, "tn=50000035_hao_pg"), e.element.on("changeHostSearchData", function(o, c) {
                                try {
                                    var r = g(this).data("change-type");
                                    if (!r && c) {
                                        if (g(this).data("change-type", "1"), e.luSource || (e.luSource = e.element.html()), t && !n) {
                                            var s = e.lu50000036;
                                            e.lu50000036 ? e.htmlSource = s : a(!0, "50000053_hao_pg") }
                                        e.element.html(e.htmlSource) }
                                    r && !c && (g(this).data("change-type", ""), e.lu50000036 || (e.lu50000036 = e.element.html()), e.element.html(e.luSource)) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/hotsearch/hotsearch.js", ln: 520 }) } }) } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/hotsearch/hotsearch.js", ln: 522 }) } }).error(function() {
                        try {} catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/hotsearch/hotsearch.js", ln: 525 }) } }) } } catch (c) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: c.message || c.description, path: "indexher:container/module/hotsearch/hotsearch.js", ln: 530 }) } } }) });;
define("indexher:container/module/notice/notice.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/widget.js", "indexher:static/js/events.js", "indexher:static/js/slider.js", "indexher:static/js/format.js"], function(e, t, o, n, i, s, c, r, a) {
    var d = i,
        h = "hao123.",
        l = "notice",
        p = c,
        f = a;
    d.widget(h + l, { options: { tpl: '<li class="g-ib"><a class="s-wea" href="#{url}">#{word}</a></li>', len: 10, hoverCls: "notice-hover" }, _create: function() {
            try {
                var e = this,
                    t = e.elements;
                e.$hotwords = d(".hotwords-hook", t), e.$icon = d(".js_noticeicon", t), e.yuntipshow = !1, e._bindEvent() } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/notice/notice.js", ln: 35 }) } }, _bindEvent: function() {
            try {
                var e = this,
                    t = e.options;
                p.on("hotword.wsqloaded", function(o) {
                    try { e.loaded = !0;
                        var n, i, s, c = [],
                            r = 0;
                        for (var a in o) o.hasOwnProperty(a) && r++;
                        for (var a = 1, h = t.len, l = 0; r >= a && (n = o[l], i = n.title, l++, !(l > h)); a++) s = d("#getHotwordLength").text(i).css("font-size", "12px").width(), s > 154 || c.push(f(t.tpl, { url: n.url, word: i }));
                        e.$hotwords.html(c.join("")) } catch (p) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: p.message || p.description, path: "indexher:container/module/notice/notice.js", ln: 82 }) } }), e.element.hover(function() {
                    try { d(this).addClass(t.hoverCls) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/notice/notice.js", ln: 96 }) } }, function() {
                    try { d(this).removeClass(t.hoverCls) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/notice/notice.js", ln: 99 }) } }) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/notice/notice.js", ln: 100 }) } } }) });;
define("indexher:container/module/notice/noticedownload.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/juziAX.js", "indexher:static/js/juziDPS.js"], function(e, i, n, t, o, c, r) {
    function a(e) {
        function i() {
            try {
                return l.checkExist(h) || l.checkExist(u) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/notice/noticedownload.js", ln: 18 }) } }

        function n() {
            try {
                var i = '<i style="display:inline-block;font-size:0;width:10px;height:10px;line-height:10px;overflow:hidden;background:url(' + HAO.httpsTrans(e.juziiconsrc) + ') no-repeat;margin-right:3px;position:relative;top:1px;"></i>';
                t.attr("monkey", "jopenurl").html(i + e.juzititle) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/notice/noticedownload.js", ln: 27 }) } }
        try {
            var t = d("#downloadlink");
            if (l.checkRunOnJuzi()) return n(), void t.attr("href", e.juziurl);
            i() && (n(), t.click(function(i) {
                try { i.preventDefault(), l.callBrowser(e.juziurl), s.checkDeskTip(u) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/notice/noticedownload.js", ln: 42 }) } })) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/notice/noticedownload.js", ln: 45 }) } }
    var d = o,
        l = c,
        s = r,
        h = 0,
        u = 1;
    i.exports = a });;
define("indexher:container/module/menus/recommendmenu.js", ["global", "module", "exports", "require", "indexher:static/js/events.js", "indexher:static/js/config.js", "indexher:static/js/once.js", "indexher:static/js/imageloader.js", "indexher:static/js/jquery.js", "indexher:static/js/widget.js"], function(e, n, i, t, o, c, m, s, r, a) {
    var d = m,
        h = s,
        l = r,
        u = "hao123.",
        p = "recommendmenu";
    l.widget(u + p, { _create: function() {
            try {
                var e = this.options,
                    n = e.imgurl = HAO.httpsTrans(e.imgurl);
                h([n], l.proxy(this, "_initRecommend")) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/menus/recommendmenu.js", ln: 28 }) } }, _initRecommend: function() {
            try {
                var e = this,
                    n = e.options,
                    i = n.title,
                    t = '<div class="recommend-wrap"><div class="recommend"><a class="recommend-link" monkey="tabtip_' + i + '" hidefocus="true" href="#" style="background-image:url(' + n.imgurl + ')"></a></div></div>';
                e.$recom = l(t).appendTo(e.element).find(".recommend"), e._on({ mouseenter: "_show", "click .recommend-link": "_handleRecommendClick" }), d("menu_animation_" + i, function() {
                    try { e._show() } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/menus/recommendmenu.js", ln: 56 }) } }) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/menus/recommendmenu.js", ln: 57 }) } }, _show: function() {
            try {
                var e = this,
                    n = e.$recom;
                n.parent().is(":visible") && n.stop().show().animate({ height: 60 }, function() {
                    try { e._delay(e._hide, 1e3 * e.options.playtime) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/menus/recommendmenu.js", ln: 72 }) } }) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/menus/recommendmenu.js", ln: 74 }) } }, _hide: function(e) {
            try {
                var n = this;
                n.$recom.stop().animate({ height: 0 }, function() {
                    try { l(this).hide() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/menus/recommendmenu.js", ln: 87 }) } }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/menus/recommendmenu.js", ln: 88 }) } }, _handleRecommendClick: function(e) {
            try {
                return this.$recom.parent().prev()[0].click(), !1 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/menus/recommendmenu.js", ln: 101 }) } }, _destroy: function() {
            try { this.$recom.remove(), this.$recom = null } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/menus/recommendmenu.js", ln: 110 }) } } }) });;
define("indexher:container/module/menus/menus.js", ["global", "module", "exports", "require", "indexher:static/js/events.js", "indexher:static/js/config.js", "indexher:static/js/jquery.js", "indexher:container/module/menus/recommendmenu.js", "indexher:static/js/widget.js"], function(e, n, t, i, a, o, s, c, r) {
    var d = a,
        u = o,
        m = s,
        l = "hao123.",
        h = "menus";
    m.widget(l + h, { options: { data: null, current: null }, _init: function() {
            try {
                var e = this,
                    n = e.options,
                    t = n.current,
                    i = e.element;
                d.done("goTop.sendCurrent", t), m.each(n.data, function(e, n) {
                    try {
                        var a = n.title;
                        a !== t && n.imgurl && i.find("li[data-key=" + a + "]").recommendmenu(n) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/menus/menus.js", ln: 47 }) } }), e._bindEvent() } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/menus/menus.js", ln: 50 }) } }, _bindEvent: function() {
            try { this._on({ "click .menu": "_handleClickMenu" }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/menus/menus.js", ln: 60 }) } }, _handleClickMenu: function(e) {
            try {
                var n = m(e.currentTarget),
                    t = n.data("key");
                d.emit("menus.changed", n.index()), u.set("menu", t) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/menus/menus.js", ln: 76 }) } }, _destroy: function() {
            try {
                var e = this,
                    n = e.element,
                    t = e.options,
                    i = t.current;
                m.each(t.data, function(e, t) {
                    try {
                        var a = t.title;
                        a !== i && t.imgurl && n.find("li[data-key=" + a + "]").recommendmenu("destroy") } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/menus/menus.js", ln: 94 }) } }) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/menus/menus.js", ln: 95 }) } } }) });;
define("indexher:container/module/sethome/popSethome.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/browser.js", "indexher:static/js/cookie.js", "indexher:static/js/format.js", "indexher:static/js/log.js", "indexher:static/js/config.js", "indexher:container/module/popup/count.js", "indexher:container/module/popup/base.js", "indexher:static/js/widget.js"], function(e, o, t, n, a, s, i, c, l, r, m, h, g) {
    function d() {
        try {
            var e = '<div class="sethome-tip" monkey="sethomeTip"></div>';
            F = j(e).sethomeTip().sethomeTip("show") } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/sethome/popSethome.js", ln: 107 }) } }

    function p() {
        try { F.sethomeTip("remove") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/sethome/popSethome.js", ln: 111 }) } }

    function u(e) {
        try { z = e;
            var o = '<div class="sethometype" monkey="sethome-success"><a class="clz" href="javascript:;" alog-text="关闭" style="background-image:url(#{msgimg})" monkey="close"></a><div class="contents" style="background-image:url(#{successimg})"><a class="go2" style="background-image:url(#{baoxiang})" href="#{baoxiangurl}" target="_blank" alog-text="前往hao123宝箱" monkey="gift"></a></div><a class="info" href="#{url}#{anchor|e}" target="_blank" alog-text="#{txt}" monkey="link"><span style="color:#{fontcolor}">#{txt}</span><i class="icon" style="background-image:url(#{msgimg})"></i></a></div>',
                t = j(w(o, { type: "2", successimg: e.imgurl2, msgimg: e.imgurl7, baoxiang: e.imgurl6, baoxiangurl: e.url6, txt: e.font1, fontcolor: e.font3, url: e.font2 })).sethomeSuccess();
            T("licaishuju_sethome", 1, j.noop), setTimeout(function() {
                try { t.sethomeSuccess("show") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/sethome/popSethome.js", ln: 147 }) } }, 1), b.get("ss_active") || b.set("ss_active", "1") } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/sethome/popSethome.js", ln: 152 }) } }

    function f(e) {
        try { z = e;
            var o = '<div class="sethometype" monkey="sethome-download"><a class="clz" href="javascript:;" alog-text="关闭" style="background-image:url(#{msgimg})" monkey="close"></a><div class="contents" style="background-image:url(#{thanksimg})"><a class="go" href="#{url2}" style="color:#{font2color}" target="_blank" alog-text="#{txt2}" monkey="outlead">#{txt2}</a></div><a class="info" href="#{url}#{anchor|e}" target="_blank" alog-text="#{txt}" monkey="link"><span style="color:#{fontcolor}">#{txt}</span><i class="icon" style="background-image:url(#{msgimg})"></i></a></div>',
                t = j(w(o, { type: "2", thanksimg: e.imgurl4, msgimg: e.imgurl7, choujiang: e.imgurl6, fontcolor: e.font3, font2color: e.font4, bordercolor: e.font5, url: e.font2, anchor: k, txt: e.font1, txt2: e.font6, url2: e.font7 })).sethomeSuccess();
            setTimeout(function() {
                try { t.sethomeSuccess("show"), S({ page: _.get("pageId"), level: 1, type: "auto", k: "m-sethome-download" }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/sethome/popSethome.js", ln: 196 }) } }, 1), b.get("ss_active") || b.set("ss_active", "1") } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/sethome/popSethome.js", ln: 200 }) } }

    function y(e) {
        try { z = e;
            var o = '<div class="sethometype" monkey="sethome-fail"><a class="clz" href="javascript:;" alog-text="关闭" style="background-image:url(#{msgimg})" monkey="close"></a><div class="contents" style="background-image:url(#{failimg})"><a class="download" monkey="download" target="_blank" style="background-image:url(#{downloadimg})" href="#{downloadurl}" alog-text="下载hao123浏览器"></a></div><a class="info" href="#{url}#{anchor|e}" target="_blank" alog-text="#{txt}" monkey="link"><span style="color:#{fontcolor}">#{txt}</span><i class="icon" style="background-image:url(#{msgimg})"></i></a></div>';
            j(w(o, { failimg: e.imgurl3, msgimg: e.imgurl7, downloadimg: e.imgurl5, fontcolor: e.font3, font2color: e.font4, bordercolor: e.font5, url: e.font2, url2: e.font7, txt: e.font1, txt2: e.font6, anchor: k, downloadurl: e.url5 })).sethomeFail().sethomeFail("show") } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/sethome/popSethome.js", ln: 232 }) } }

    function x(e) {
        try { z = e;
            var o = '<div class="sethometype" monkey="sethome-notsupport"><a class="clz" href="javascript:;" alog-text="关闭" style="background-image:url(#{msgimg})" monkey="close"></a><div class="contents" style="background-image:url(#{notsupportimg})"><a class="download" monkey="download" target="_blank" style="background-image:url(#{downloadimg})" href="#{downloadurl}" alog-text="下载hao123浏览器"></a></div><a class="info" href="#{url}#{anchor|e}" target="_blank" alog-text="#{txt}" monkey="link"><span style="color:#{fontcolor}">#{txt}</span><i class="icon" style="background-image:url(#{msgimg})"></i></a></div>';
            j(w(o, { notsupportimg: e.imgurl1, msgimg: e.imgurl7, downloadimg: e.imgurl5, fontcolor: e.font3, bkgroundcolor: e.font4, bordercolor: e.font5, url: e.font2, url2: e.font7, anchor: k, txt: e.font1, txt2: e.font6, downloadurl: e.url5 })).sethomeFail().sethomeFail("show") } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/sethome/popSethome.js", ln: 264 }) } }
    var k, j = a,
        v = s,
        b = i,
        w = c,
        S = l,
        _ = r,
        T = m,
        z = {};
    k = v.firefox ? "#ff" : v.isIE11 || v.ie ? "#01" : "#08", j.widget("hao123.sethomeTip", j.lottery.popup, { options: { className: "pop-sethome", isModel: !1 }, _create: function() {
            try { this._baseCreate() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/sethome/popSethome.js", ln: 46 }) } }, show: function() {
            try { this._baseTipShow() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/sethome/popSethome.js", ln: 50 }) } } }), j.widget("hao123.sethomeSuccess", j.hao123.sethomeTip, { _init: function() {
            try { this._on({ click: function() {
                        try {
                            return !1 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/sethome/popSethome.js", ln: 62 }) } }, "click .clz": function() {
                        try {
                            return this.remove(), !1 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/sethome/popSethome.js", ln: 67 }) } }, "click .go": function() {
                        try { this.remove() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/sethome/popSethome.js", ln: 71 }) } } }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/sethome/popSethome.js", ln: 73 }) } } }), j.widget("hao123.sethomeFail", j.hao123.sethomeTip, { _init: function() {
            try { this._on({ click: function() {
                        try {
                            return !1 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/sethome/popSethome.js", ln: 86 }) } }, "click .clz": function() {
                        try {
                            return this.remove(), !1 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/sethome/popSethome.js", ln: 91 }) } }, "click .download": function() {
                        try { this.remove(), f(z) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/sethome/popSethome.js", ln: 96 }) } } }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/sethome/popSethome.js", ln: 98 }) } } });
    var F;
    j(document).click(function() {
        try { j(".sethometype a.clz").click() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/sethome/popSethome.js", ln: 268 }) } }), o.exports = { showTip: d, hideTip: p, showSethomeSuccess: u, showDownloadSuccess: f, showSethomeFail: y, showNotSupport: x } });;
define("indexher:container/module/sethome/homeKeeper.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/refer.js", "indexher:static/js/config.js", "indexher:static/js/setHome.js", "indexher:static/js/log.js", "indexher:static/js/juziAX.js", "indexher:static/js/browser.js", "indexher:static/js/imageloader.js", "indexher:container/module/sethome/popSethome.js"], function(e, t, o, n, s, i, r, a, c, h, m, d, p) {
    function l() {
        try {
            return w.getUserType() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/sethome/homeKeeper.js", ln: 25 }) } }

    function u(e, t, o) {
        try { H(t, function() {
                try { T[e](o) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/sethome/homeKeeper.js", ln: 30 }) } }, 1e3) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/sethome/homeKeeper.js", ln: 31 }) } }

    function f(e) {
        try { S({ page: K.get("pageId"), level: 1, type: "auto", k: e }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/sethome/homeKeeper.js", ln: 40 }) } }

    function g(e, t) {
        try {
            var o = l();
            0 === o || 2 === o ? e() : t() } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/sethome/homeKeeper.js", ln: 46 }) } }

    function x(e) {
        try { q.push(e) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/sethome/homeKeeper.js", ln: 51 }) } }

    function j(e, t, o) {
        try {
            if (b.exist() && !k.isHao123()) return b.callBrowser(location.href), !1;
            if (y(".sethometype").length) return !1;
            var n, s, i = [];
            for (n = 1; 8 > n; n++) {
                var r = "imgurl" + n,
                    a = HAO.httpsTrans(o[r]);
                o[r] = a, i.push(a) }
            switch (l()) {
                case 0:
                case 2:
                    return !0;
                case 1:
                    T.showTip(), v.set("http://www.hao123.com/?from=newhome", function(t) {
                        try {
                            for (T.hideTip(), t ? (u("showSethomeSuccess", i, o), f("m-sethome-success")) : (u("showSethomeFail", i, o), f("m-sethome-fail")), e && e(t), n = 0, s = q.length; s > n; n++) q[n](t) } catch (r) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: r.message || r.description, path: "indexher:container/module/sethome/homeKeeper.js", ln: 98 }) } });
                    break;
                case 3:
                    u("showNotSupport", i, o), f("m-sethome-notsupport") }
            return !1 } catch (c) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: c.message || c.description, path: "indexher:container/module/sethome/homeKeeper.js", ln: 106 }) } }
    var y = s,
        w = i,
        K = r,
        v = a,
        S = c,
        b = h,
        k = m,
        H = d,
        T = p,
        q = [];
    t.exports = { init: g, addCallback: x, clickHandler: j } });;
define("indexher:container/module/weather/weatherTip.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/format.js", "indexher:static/js/imageloader.js"], function(e, t, a, i, o, n, r) {
    var s = '<div style="color:#{color};width:#{width};" class="weather-tips" data-hook="weatherTips"><i style="display:#{ifshow};background-image:url(#{iconurl})" class="weather-tips-icon"></i>#{text}<i class="weather-tips-tr g-ib"></i></div>',
        c = "weatherTips",
        p = 1e4,
        h = o,
        l = n,
        d = r,
        x = "hao123.",
        f = "weatherTip";
    h.widget(x + f, { options: { defaultColor: "#c78544", defaultWidth: "108px", blankUrl: HAO.httpsTrans("http://s0.hao123img.com/img/1L/Aw/2F/mk/ch/o/blank.gif"), iconUrl: HAO.httpsTrans("http://s0.hao123img.com/res/weather/alarm/#{id}.png"), alarmConfMap: { "0101": ["#6b93e3", "0101", "90px"], "0102": ["#6b93e3", "0102", "90px"], "0103": ["#6b93e3", "0103", "90px"], "0104": ["#6b93e3", "0104", "90px"], "0105": ["#6b93e3", "0105", "90px"], "0106": ["#6b93e3", "0106", "108px"], "0107": ["#6b93e3", "0107", "90px"], "0110": ["#6b93e3", "0110", "90px"], "0111": ["#6b93e3", "0111", "90px"], "0112": ["#6b93e3", "0112", "90px"], "0201": ["#e1bb35", "0201", "90px"], "0202": ["#e1bb35", "0202", "90px"], "0203": ["#e1bb35", "0203", "90px"], "0204": ["#e1bb35", "0204", "90px"], "0205": ["#e1bb35", "0205", "90px"], "0206": ["#e1bb35", "0206", "108px"], "0207": ["#e1bb35", "0207", "90px"], "0210": ["#e1bb35", "0210", "90px"], "0211": ["#e1bb35", "0211", "90px"], "0212": ["#e1bb35", "0212", "90px"], "0301": ["#ed9238", "0301", "90px"], "0302": ["#ed9238", "0302", "90px"], "0303": ["#ed9238", "0303", "90px"], "0304": ["#ed9238", "0304", "90px"], "0305": ["#ed9238", "0305", "90px"], "0306": ["#ed9238", "0306", "108px"], "0307": ["#ed9238", "0307", "90px"], "0310": ["#ed9238", "0310", "90px"], "0311": ["#ed9238", "0311", "90px"], "0312": ["#ed9238", "0312", "90px"], "0401": ["#e35959", "0401", "90px"], "0402": ["#e35959", "0402", "90px"], "0403": ["#e35959", "0403", "90px"], "0404": ["#e35959", "0404", "90px"], "0405": ["#e35959", "0405", "90px"], "0406": ["#e35959", "0406", "108px"], "0407": ["#e35959", "0407", "90px"], "0410": ["#e35959", "0410", "90px"], "0411": ["#e35959", "0411", "90px"], "0412": ["#e35959", "0412", "90px"] } }, _init: function() {
            try {
                var e = this,
                    t = e.element,
                    a = (e.options, {}),
                    i = h('[data-hook="' + c + '"]', t);
                i.length > 0 && i.remove(), a = e.dealWithText(), a && a.isshow && e.renderTip(a.text, a.color, a.icon, a.width, function() {
                    try { e.$tips = h('[data-hook="' + c + '"]', t), e.$tips.show(), setTimeout(function() {
                            try { e.$tips.hide() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/weather/weatherTip.js", ln: 99 }) } }, p), e.bindEvent() } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/weather/weatherTip.js", ln: 101 }) } }) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/weather/weatherTip.js", ln: 103 }) } }, bindEvent: function() {
            try {
                {
                    var e = this,
                        t = e.element;
                    e.options }
                h(t).hover(function() {
                    try { e.$tips.show() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/weather/weatherTip.js", ln: 110 }) } }, function() {
                    try { setTimeout(function() {
                            try { e.$tips.hide() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/weather/weatherTip.js", ln: 114 }) } }, 200) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/weather/weatherTip.js", ln: 115 }) } }) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/weather/weatherTip.js", ln: 116 }) } }, renderTip: function(e, t, a, i, o) {
            try {
                var n = this,
                    r = n.element,
                    c = n.options;
                if (a) {
                    var p = [];
                    p.push(a), d(p, function() {
                        try { h(r).append(l(s, { text: e, ifshow: a ? "inline-block" : "none", iconurl: a || c.blankUrl, color: t || c.defaultColor, width: i || c.defaultWidth })), o && o() } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/weather/weatherTip.js", ln: 135 }) } }) } else h(r).append(l(s, { text: e, ifshow: "none", iconurl: c.blankUrl, color: t || c.defaultColor, width: i || c.defaultWidth })), o && o() } catch (x) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: x.message || x.description, path: "indexher:container/module/weather/weatherTip.js", ln: 147 }) } }, getAlarmInfo: function(e) {
            try {
                for (var t = this, a = (t.element, t.options), i = { isshow: !1 }, o = 0; o < e.length; o++) {
                    var n = e[o];
                    if (n.w4 && n.w5 && n.w6 && n.w7) {
                        var r = n.w6 + n.w4;
                        if (a.alarmConfMap[r]) { i.isshow = !0, i.color = a.alarmConfMap[r][0], i.icon = l(a.iconUrl, { id: a.alarmConfMap[r][1] }), i.width = a.alarmConfMap[r][2], i.text = n.w5 + n.w7 + "预警";
                            break } } }
                return i } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/weather/weatherTip.js", ln: 174 }) } }, getNormalInfo: function(e) {
            try {
                var t = this,
                    a = (t.element, t.options, { isshow: !0 });
                switch (e) {
                    case "03":
                    case "04":
                    case "05":
                    case "07":
                    case "08":
                    case "09":
                    case "21":
                    case "22":
                    case "23":
                    case "301":
                        a.text = "今天有雨，记得带伞";
                        break;
                    case "06":
                    case "13":
                    case "14":
                    case "15":
                    case "26":
                    case "27":
                    case "302":
                        a.text = "今天有雪，小心路滑";
                        break;
                    case "10":
                    case "11":
                    case "24":
                    case "25":
                        a.text = "暴雨预警，减少出行";
                        break;
                    case "12":
                        a.text = "特大暴雨，注意防护";
                        break;
                    case "16":
                    case "28":
                        a.text = "大雪纷纷，小心出行";
                        break;
                    case "17":
                        a.text = "暴雪预警，减少出行";
                        break;
                    case "18":
                    case "32":
                    case "57":
                        a.text = "今天有雾，小心慢行";
                        break;
                    case "19":
                        a.text = "冻雨成冰，路滑慢行";
                        break;
                    case "20":
                    case "30":
                    case "31":
                        a.text = "沙尘天气，减少出行";
                        break;
                    case "49":
                    case "58":
                        a.text = "浓雾预警，小心慢行";
                        break;
                    case "29":
                        a.text = "浮尘天气，减少出行";
                        break;
                    case "53":
                    case "54":
                    case "55":
                    case "56":
                        a.text = "雾霾天气，注意防护";
                        break;
                    default:
                        a.isshow = !1 }
                return a } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/weather/weatherTip.js", ln: 251 }) } }, dealWithText: function() {
            try {
                var e = this,
                    t = (e.element, e.options),
                    a = t.weather,
                    i = { isshow: !1 };
                return a && (a.alarm && a.alarm.w && a.alarm.w.length > 0 && (i = e.getAlarmInfo(a.alarm.w)), i.isshow !== !0 && a.forecast && a.forecast[0] && a.forecast[0].weather && (i = e.getNormalInfo(a.forecast[0].weather))), i } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/weather/weatherTip.js", ln: 273 }) } } }) });;
define("indexher:container/module/weather/weather.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/widget.js", "indexher:static/js/format.js", "indexher:static/js/events.js", "indexher:container/module/weather/weatherTip.js"], function(e, t, a, i, n, r, o, c, s) {
    function h(e, t) {
        try {
            return d("[data-hook=" + e + "]", t) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/weather/weather.js", ln: 20 }) } }
    var d = n,
        l = o,
        p = c,
        f = "hao123.",
        g = "weather",
        m = "afterload",
        y = "firstload",
        u = "selectchange",
        w = "citychanged",
        _ = "registreload",
        v = "unregistreload",
        x = "changecity";
    d.widget(f + g, { options: { forecastUrl: "/api/newforecast?callback=?", areaUrl: "/api/citymenu?callback=?", cityTpl: '<a href="#" class="weather__item weather__city s-wea" data-hook="modify"><span class="weather__city-name" data-hook="name"></span><span class="weather__city-arrow"></span></a>', pmTpl: '<a href="#" class="weather__item weather__pm25 s-wea" data-hook="pm25" monkey="pm25"><span class="weather__pm25-text g-ib" data-hook="pm25-text">良</span></a>', modifyCityTpl: '<div class="weather__city-modify-panel" data-hook="modifyPanel" style="display:none"><div class="weather__city-select-wrap"><select class="weather__city-select weather__city-select--province" data-hook="province"></select><select class="weather__city-select weather__city-select--city" data-hook="city"></select><select class="weather__city-select weather__city-select--district" data-hook="district"></select></div><a href="#" class="weather__city-btn weather__city-btn--save" data-hook="save">确定</a><a href="#" class="weather__city-btn weather__city-btn--cancel" data-hook="cancel">取消</a></div>', infoTpl: '<a href="#" class="weather__item weather__info s-wea" data-hook="today"><span class="weather__info-icon" data-hook="icon"></span><span class="weather__info-txt" data-hook="weather"></span><span class="weather__info-temperature" data-hook="tempera"></span></a>', siteTpl: '<a href="#" class="weather__item weather__site" title="7日天气" data-hook="site">    <span class="weather__site-icon"></span></a>', maskTpl: '<div class="weather__mask"></div>', timeoutTpl: '加载超时，请<a href="#" class="g-fc1 retry-hook">重试</a>', selectTpl: "<option value=#{id|e}>#{firstchar|e} #{name|e}</option>", timeout: 5e3, province: void 0, city: void 0, district: void 0 }, _create: function() {
            try {
                var e = this,
                    t = e.element;
                e.areaMap = {}, e._initHTML(), e.$today = h("today", t).weathericon(), e.$pm25 = h("pm25", t), e.$pm25text = h("pm25-text", t), e.$site = h("site", t);
                var a = h("modify", t);
                e.$modify = a, e.$name = h("name", a);
                var i = h("modifyPanel", t);
                e.$modifyPanel = i, e.$provinceSelect = h("province", i), e.$citySelect = h("city", i), e.$districtSelect = h("district", i), e._bindEvent() } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/weather/weather.js", ln: 116 }) } }, _init: function() {
            try {
                var e = this,
                    t = e.options;
                e.load(t.province, t.city, t.district) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/weather/weather.js", ln: 127 }) } }, _initHTML: function() {
            try {
                var e = this,
                    t = e.options;
                e.element.html(t.cityTpl + t.pmTpl + t.infoTpl + t.siteTpl + t.maskTpl + t.modifyCityTpl) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/weather/weather.js", ln: 138 }) } }, _bindEvent: function() {
            try {
                {
                    var e = this;
                    e.options }
                e.element.on(g + m, function(t, a) {
                    try {
                        var i = e._parseData(a);
                        if (i) {
                            var n = e.options;
                            n.province = i.province, n.city = i.city, n.district = i.district, e._render(i), e._hideModifyPanel(), e._trigger("ready"), e.$today.weatherTip({ weather: i }) } } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/weather/weather.js", ln: 167 }) } }).on(g + u, function(t, a) {
                    try { a && void 0 !== a.province ? void 0 === a.city ? e._loadCity(a.province) : void 0 === a.district && e._loadDistrict(a.province, a.city) : e._loadProvince() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/weather/weather.js", ln: 180 }) } }).hover(function() {
                    try { d(this).addClass("weather--state-hover") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/weather/weather.js", ln: 187 }) } }, function() {
                    try { d(this).removeClass("weather--state-hover") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/weather/weather.js", ln: 190 }) } }), e.$modify.click(d.proxy(e.showModifyPanel, e)), p.on(g + "." + x, function() {
                    try { e._delay(e.showModifyPanel, 0) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/weather/weather.js", ln: 199 }) } });
                var t = [];
                p.on(g + "." + _, function(e) {
                    try {-1 === d.inArray(e, t) && t.push(e) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/weather/weather.js", ln: 206 }) } }), p.on(g + "." + v, function(e) {
                    try {
                        var a = d.inArray(e, t);
                        a > -1 && t.splice(a, 1) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/weather/weather.js", ln: 213 }) } }), p.on(g + "." + m, function() {
                    try { t.length && (BigPipe.fetch(t.slice(0), "/api/gettop?" + +new Date, !1), t = []) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/weather/weather.js", ln: 220 }) } }), e.document.on("click", function(t) {
                    try {
                        var a = e.$modifyPanel.get(0),
                            i = t.target;
                        i === a || d.contains(a, i) || e._hideModifyPanel() } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/weather/weather.js", ln: 228 }) } }), e._on({ "click [data-hook=save]": function() {
                        try {
                            var e = this,
                                t = e._getSelect();
                            return e.load(t.province, t.city, t.district), p.emit(g + "." + w, { province: e._getAreaName(t.province), city: e._getAreaName(t.province, t.city), district: e._getAreaName(t.province, t.city, t.district) }), !1 } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/weather/weather.js", ln: 242 }) } }, "click [data-hook=cancel]": function() {
                        try {
                            return this._hideModifyPanel(), !1 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/weather/weather.js", ln: 248 }) } } }), e.$provinceSelect.change(function(t) {
                    try { e._trigger(u, t, { province: e.$provinceSelect.val() }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/weather/weather.js", ln: 258 }) } }), e.$citySelect.change(function(t) {
                    try { e._trigger(u, t, { province: e.$provinceSelect.val(), city: e.$citySelect.val() }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/weather/weather.js", ln: 268 }) } }) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/weather/weather.js", ln: 269 }) } }, _getAreaName: function(e, t, a) {
            try {
                var i, n, r, o = this,
                    c = o.areaMap;
                switch (arguments.length) {
                    case 0:
                        return;
                    case 1:
                        i = o._genAreaId(), n = e;
                        break;
                    case 2:
                        i = o._genAreaId(e), n = t;
                        break;
                    case 3:
                    default:
                        i = o._genAreaId(e, t), n = a }
                var s = !1,
                    h = c[i];
                return h && d.each(h, function(e, t) {
                    try {
                        if (t.id === n) return r = t.name, s = !0 } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/weather/weather.js", ln: 314 }) } }), s ? r : void 0 } catch (l) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: l.message || l.description, path: "indexher:container/module/weather/weather.js", ln: 317 }) } }, load: function(e, t, a) {
            try {
                var i = this,
                    n = i.options,
                    r = e && t && a ? { t: 2, provice: i._getAreaName(e), city: i._getAreaName(e, t), district: i._getAreaName(e, t, a) } : { t: 1 };
                d.getJSON(n.forecastUrl, r, function(e) {
                    try { i._trigger(m, null, e), p.emit(g + "." + m), i.firstLoad || (i.firstLoad = !0, p.done(g + "." + y)) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/weather/weather.js", ln: 358 }) } }) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/weather/weather.js", ln: 359 }) } }, _parseData: function(e) {
            try {
                var t, a, i;
                if (!(e && (t = e.cityinfo) && (a = e.forecast5d) && (i = a.f.f1) && i.length > 1)) return !1;
                var n = e.aqi,
                    r = n ? n.url : void 0,
                    o = e.alarm || "";
                return { province: t.pid, city: t.cid, district: t.zid, name: t.dist, url: r, forecast: [{ weather: i[0].fa || i[0].fb, temperaMin: i[0].fd, temperaMax: i[0].fc, url: r, day: "今天" }], pm: n, alarm: o, id: a.c.c1 } } catch (c) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: c.message || c.description, path: "indexher:container/module/weather/weather.js", ln: 409 }) } }, _render: function(e) {
            try {
                var t = this,
                    a = e.name,
                    i = e.pm,
                    n = t.$pm25;
                if (t.$name.text(a.substr(0, 4)), t.$today.weathericon("render", e.forecast[0], a), t.$site.prop("href", "http://www.weather.com.cn/weather/" + e.id + ".shtml#7d"), i && i.level && i.tip) {
                    var r = ["优", "良", "轻", "中", "重"],
                        o = i.level;
                    if (d.inArray(o, r) > -1) {
                        var c = i.tip,
                            s = encodeURIComponent(a + "pm2.5");
                        t.$pm25text.text(o), n.attr({ title: c, href: "http://www.baidu.com/s?word=" + s + "&tn=50000030_hao_pg&ie=utf-8" }).css("display", "inline-block") } else n.hide() } else n.hide() } catch (h) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: h.message || h.description, path: "indexher:container/module/weather/weather.js", ln: 447 }) } }, _triggerSelectChange: function(e, t, a) {
            try { this._trigger(u, null, { province: e, city: t, district: a }) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/weather/weather.js", ln: 462 }) } }, _loadProvince: function(e) {
            try {
                var t = this,
                    a = t.$provinceSelect;
                t._loadSelect(a, {}, e, function() {
                    try { t._triggerSelectChange(a.val()) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/weather/weather.js", ln: 475 }) } }) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/weather/weather.js", ln: 476 }) } }, _loadCity: function(e, t) {
            try {
                var a = this,
                    i = a.$citySelect;
                a._loadSelect(i, { province: e }, t, function() {
                    try { a._triggerSelectChange(e, i.val()) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/weather/weather.js", ln: 492 }) } }) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/weather/weather.js", ln: 493 }) } }, _loadDistrict: function(e, t, a) {
            try {
                var i = this,
                    n = i.$districtSelect;
                i._loadSelect(n, { province: e, city: t }, a, function() {
                    try { i._triggerSelectChange(e, t, n.val()) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/weather/weather.js", ln: 511 }) } }) } catch (r) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: r.message || r.description, path: "indexher:container/module/weather/weather.js", ln: 512 }) } }, _loadSelect: function(e, t, a, i) {
            function n(t) {
                try {
                    var n = [];
                    d.each(t, function(e, t) {
                        try { n.push(l(o.selectTpl, t)) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/weather/weather.js", ln: 530 }) } }), e.html(n.join("")), void 0 !== a && setTimeout(function() {
                        try { e.val(a) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/weather/weather.js", ln: 535 }) } }, 0), d.isFunction(i) && i() } catch (r) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: r.message || r.description, path: "indexher:container/module/weather/weather.js", ln: 540 }) } }
            try {
                var r = this,
                    o = r.options;
                r._loadArea(t.province, t.city, n) } catch (c) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: c.message || c.description, path: "indexher:container/module/weather/weather.js", ln: 542 }) } }, _genAreaId: function(e, t) {
            try {
                var a = ["ROOT"];
                return void 0 !== e && (a.push(e), void 0 !== t && a.push(t)), a.join() } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/weather/weather.js", ln: 560 }) } }, _loadArea: function(e, t, a) {
            try {
                var i = this,
                    n = i.options,
                    r = i.areaMap,
                    o = i._genAreaId(e, t),
                    c = r[o];
                if (c) a(c);
                else {
                    var s = {};
                    e && (s.pid = e, t && (s.cid = t)), d.getJSON(n.areaUrl, s, function(e) {
                        try { e && (r[o] = e), a(e) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/weather/weather.js", ln: 591 }) } }) } } catch (h) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: h.message || h.description, path: "indexher:container/module/weather/weather.js", ln: 593 }) } }, _getSelect: function() {
            try {
                var e = this;
                return { province: e.$provinceSelect.val(), city: e.$citySelect.val(), district: e.$districtSelect.val() } } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/weather/weather.js", ln: 607 }) } }, showModifyPanel: function() {
            try {
                var e = this,
                    t = e.options;
                if (e.isShowModifyPanel) e._hideModifyPanel();
                else {
                    var a = {};
                    e._loadSelect(e.$provinceSelect, a, t.province), a.province = t.province, e._loadSelect(e.$citySelect, a, t.city), a.city = t.city, e._loadSelect(e.$districtSelect, a, t.district), e._showModifyPanel() }
                return !1 } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/weather/weather.js", ln: 626 }) } }, _showModifyPanel: function() {
            try { this.element.addClass("weather--state-active"), this.$modifyPanel.show(), this.isShowModifyPanel = !0 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/weather/weather.js", ln: 636 }) } }, _hideModifyPanel: function() {
            try { this.element.removeClass("weather--state-active"), this.$modifyPanel.hide(), this.isShowModifyPanel = !1 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/weather/weather.js", ln: 646 }) } } });
    var j = g + "icon";
    d.widget(f + j, { options: { iconTpl: HAO.httpsTrans("http://s0.hao123img.com/res/weather/v1/#{id}.png"), defaultKey: "00", confMap: { "00": ["晴", "a0"], "01": ["多云", "a1"], "02": ["阴", "a2"], "03": ["阵雨", "a3"], "04": ["雷阵雨", "a4"], "05": ["雷阵雨", "a5"], "06": ["雨夹雪", "a6"], "07": ["小雨", "a7"], "08": ["中雨", "a8"], "09": ["大雨", "a9"], 10: ["暴雨", "a10"], 11: ["大暴雨", "a11"], 12: ["大暴雨", "a12"], 13: ["阵雪", "a13"], 14: ["小雪", "a14"], 15: ["中雪", "a15"], 16: ["大雪", "a16"], 17: ["暴雪", "a17"], 18: ["雾", "a18"], 19: ["冻雨", "a19"], 20: ["沙尘暴", "a20"], 21: ["小雨", "a21"], 22: ["中雨", "a22"], 23: ["大雨", "a23"], 24: ["暴雨", "a24"], 25: ["大暴雨", "a25"], 26: ["小雪", "a26"], 27: ["中雪", "a27"], 28: ["大雪", "a28"], 29: ["浮尘", "a29"], 30: ["扬沙", "a30"], 31: ["强沙尘暴", "a31"], 32: ["浓雾", "a49"], 49: ["强浓雾", "a49"], 53: ["霾", "a53"], 54: ["中度霾", "a54"], 55: ["重度霾", "a54"], 56: ["严重霾", "a54"], 57: ["大雾", "a49"], 58: ["特强浓雾", "a49"], 301: ["雨", "a22"], 302: ["雪", "a27"] } }, _create: function() {
            try {
                var e = this.element;
                this.$icon = h("icon", e), this.$weather = h("weather", e), this.$tempera = h("tempera", e) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/weather/weather.js", ln: 711 }) } }, render: function(e, t) {
            try {
                var a = this,
                    i = e.weather,
                    n = a._getWeather(i),
                    r = a._getIcon(i),
                    o = a._getTempera(e.temperaMin, e.temperaMax),
                    c = encodeURIComponent(t + "天气");
                a.element.attr({ href: "http://www.baidu.com/s?word=" + c + "&tn=50000030_hao_pg&ie=utf-8", "alog-text": "今天" + n + " " + o }), a.$icon.css("backgroundImage", "url(" + r + ")"), a.$weather.html(n), a.$tempera.html(o) } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/weather/weather.js", ln: 731 }) } }, _getIcon: function(e) {
            try {
                var t = this.options,
                    a = t.confMap,
                    i = a[e] || a[t.defaultKey];
                return l(t.iconTpl, { id: i[1] }) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/weather/weather.js", ln: 747 }) } }, _getTempera: function(e, t) {
            try {
                return t = d.trim(t), (t ? t + " ~ " : "") + d.trim(e) + "℃" } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/weather/weather.js", ln: 759 }) } }, _getWeather: function(e) {
            try {
                var t = this.options,
                    a = t.confMap,
                    i = a[e];
                return i ? i[0] || e : a[t.defaultKey][0] } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/weather/weather.js", ln: 773 }) } } }), d("#weather").weather() });;
define("indexher:container/module/login/login.js", ["global", "module", "exports", "require", "indexher:static/js/login.js", "indexher:static/js/events.js", "indexher:static/js/jquery.js", "indexher:static/js/widget.js"], function(e, n, o, i, t, s, l, a) {
    var c = t,
        r = l;
    r.widget("hao123.login", { _create: function() {
            try { this._on({ mouseenter: "_handleMouseHover", mouseleave: "_handleMouseHover" }), c.isLogin() || this._on({ "click .login__user": "_showLoginPop" }), this.element.removeClass("login--hide") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/login/login.js", ln: 31 }) } }, _handleMouseHover: function() {
            try { this.element.toggleClass("login--state-hover") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/login/login.js", ln: 39 }) } }, _showLoginPop: function() {
            try {
                return c.show(function() {
                    try { window.location.reload() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/login/login.js", ln: 49 }) } }), !1 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/login/login.js", ln: 51 }) } } }) });;
define("indexher:container/module/mail/mail.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/widget.js", "indexher:static/js/format.js", "indexher:static/js/log.js", "indexher:static/js/cookie.js", "indexher:static/js/config.js", "indexher:static/js/secure.js", "indexher:static/js/login.js"], function(e, i, a, t, n, o, l, s, c, r, m, d) {
    var h = n,
        p = l,
        g = s,
        u = c,
        f = r,
        x = m,
        _ = d,
        y = "mail--state-open",
        v = "mail--state-hover",
        j = "mail__list--state-open",
        w = "mail__submit--state-hover";
    h.widget("hao123.mail", { options: { curIndex: 0, mails: [{ mail: "163", name: "@163.com", action: "https://reg.163.com/CheckUser.jsp?df=hao123", params: { url: "http://entry.mail.163.com/coremail/fcg/ntesdoor2?lightweight=1&verifycookie=1&language=-1&style=15", username: "#{u|e}", password: "#{p|e}" } }, { mail: "126", name: "@126.com", action: "https://reg.163.com/logins.jsp?df=hao123", params: { domain: "126.com", username: "#{u|e}@126.com", password: "#{p|e}", url: "http://entry.mail.126.com/cgi/ntesdoor?lightweight%3D1%26verifycookie%3D1%26language%3D0%26style%3D-1" } }, { mail: "sina", name: "@sina.com", action: "https://login.sina.com.cn/sso/login.php", params: { username: "#{u|e}@sina.com", password: "#{p|e}", entry: "freemail", gateway: 0, encoding: "UTF-8", url: "http://mail.sina.com.cn/", returntype: "META" } }, { mail: "sohu", name: "@sohu.com", action: "https://passport.sohu.com/act/loginjs", params: { userid: "#{u|e}@sohu.com", password: "#{p|e}", t: +new Date, appid: "1113", ru: "http://mail.sohu.com/", ct: "1173080990", persistentcookie: 2 } }, { mail: "yeah", name: "@yeah.net", action: "https://reg.163.com/logins.jsp?df=hao123", params: { domain: "yeah.net", username: "#{u|e}@yeah.net", password: "#{p|e}", url: "http://entry.mail.yeah.net/cgi/ntesdoor?lightweight%3D1%26verifycookie%3D1%26style%3D-1" } }, { mail: "139", name: "@139.com", action: "https://mail.10086.cn/Login/Login.ashx", params: { UserName: "#{u|e}", Password: "#{p|e}", clientid: "5015" } }], links: [{ name: "支付宝", url: "https://www.alipay.com/user/login.htm" }, { name: "登录百度", url: "https://passport.baidu.com/v2/?login" }, { name: "QQ邮箱", url: "http://mail.qq.com" }, { name: "QQ空间", url: "http://qzone.qq.com/index.html" }, { name: "新浪微博", url: "http://weibo.com/login.php" }, { name: "gmail.com", url: "http://mail.google.com/mail/" }, { name: "hotmail.com", url: "http://www.hotmail.com" }, { name: "21cn.com", url: "http://passport.21cn.com" }, { name: "阿里云邮箱", url: "https://passport.alipay.com/login/login.htm?return_url=http%3A%2F%2Fmail.aliyun.com%2Falimail%2Fauth%2FcallbackForHavana%3Freurl%3D%252Falimail%252F&fromSite=9" }, { name: "189邮箱", url: "http://mail.189.cn" }, { name: "开心网", url: "http://www.kaixin001.com" }, { name: "人人网", url: "http://passport.renren.com" }] }, _create: function() {
            try { this._on(!0, { "click a[data-hook=trigger]": "_handleFirstClick", mouseenter: "_handleMouseHover", mouseleave: "_handleMouseHover" }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/mail/mail.js", ln: 159 }) } }, _handleMouseHover: function() {
            try { this.element.toggleClass(v) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/mail/mail.js", ln: 167 }) } }, _initPop: function() {
            try { this.$mailLogin = h('<div class="mail__pop"><form id="mailForm" class="mail__form" method="post"><div class="mail__box mail__box--name"><label class="mail__placeholder" for="mailName">邮箱帐号</label><input id="mailName" class="mail__input mail__input--name" autocomplete="off" /></div><div class="mail__box mail__box--suffix" id="mailSuffixBox"><a class="mail__suffix" id="mailSuffix" hidefocus="true" href="javacript:;"><span id="mailSuffixText"></span><i class="mail__icon mail__icon--more"></i></a></div><div class="mail__box mail__box--pwd"><label class="mail__placeholder" for="mailPwd">邮箱密码</label><input id="mailPwd" class="mail__input mail__input--pwd" type="password" autocomplete="new-password"/></div><div class="mail__box mail__box--btn"><input id="mailSubmit" class="mail__submit" type="submit" hidefocus="true" value="登录" /><span id="mailCancel" class="mail__btn mail__cancel">取消</span></div><div id="mailParas" class="mail__paras" style="display:none"></div></form><div class="mail__proxy" data-hook="proxy"><input name="agree" class="mail__agree" id="mailAgree" type="checkbox" checked="checked" /><label for="mail-agree">我阅读并同意</label><a class="mail__agree-link" href="http://www.hao123.com/mailproxy">使用协议</a></div></div>').appendTo(this.element), this._createMailList() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/mail/mail.js", ln: 208 }) } }, getMailSelectBox: function() {
            try {
                return h("#mailSuffixBox") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/mail/mail.js", ln: 212 }) } }, getMailSelectText: function() {
            try {
                return h("#mailSuffixText") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/mail/mail.js", ln: 216 }) } }, getParamsBox: function() {
            try {
                return h("#mailParas") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/mail/mail.js", ln: 220 }) } }, getFormEl: function() {
            try {
                return h("#mailForm") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/mail/mail.js", ln: 224 }) } }, getMailEl: function() {
            try {
                return h("#mailName") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/mail/mail.js", ln: 228 }) } }, getPwdEl: function() {
            try {
                return h("#mailPwd") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/mail/mail.js", ln: 232 }) } }, getArgree: function() {
            try {
                return h("#mailAgree") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/mail/mail.js", ln: 236 }) } }, _handleFirstClick: function() {
            try {
                var e = this;
                e._off(e.element, "click"), e._initPop(), e._bindPopEvent();
                var i = u.get("HUN") || "",
                    a = "";
                return i && (e.getPwdEl().val(""), e._hidePlaceholder(e.getMailEl().val(i)), a = u.get("HUM") || ""), e.email = "", e.show = !1, e._setMailText(a), e._handleClick() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/mail/mail.js", ln: 265 }) } }, _bindPopEvent: function() {
            try {
                var e = this;
                e._on({ "click a[data-hook=trigger]": "_handleClick", "mouseenter #mailSubmit": function(e) {
                        try { h(e.target).addClass(w) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/mail/mail.js", ln: 279 }) } }, "mouseleave #mailSubmit": function(e) {
                        try { h(e.target).removeClass(w) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/mail/mail.js", ln: 283 }) } }, "click #mailSuffix": function(i) {
                        try {
                            return e.showMailList ? e._hideMailList() : e._showMailList(), !1 } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/mail/mail.js", ln: 293 }) } }, "focusout #mailName": e._setNtesInfo, "click .mail__list-item-mail": function(i) {
                        try {
                            return e._setMailText(e.options.mails[h(i.currentTarget).attr("index")].mail), e._setNtesInfo(), e._hideMailList(), !1 } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/mail/mail.js", ln: 303 }) } }, "click .mail__list-item-link": function(i) {
                        try { g({ type: "mail", index: h(i.currentTarget).text() }), e._hideMailList() } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/mail/mail.js", ln: 308 }) } }, "submit #mailForm": function(i) {
                        try {
                            var a = e._valInput();
                            if (a) {
                                var t = e.options,
                                    n = e.getMailEl().val(),
                                    o = t.mails[t.curIndex];
                                u.set("HUM", o.mail), u.set("HUN", n), e._createParams(n, e.getPwdEl().val());
                                var l = { type: "mail", index: o.name }; "1" === f.get("mailsend") && e._is163Mail() && (l.extra = x.encrypt(n)), g(l), !_.isLogin() && e.getArgree().is(":checked") && e._check163Login(), e._hidePop(), e._clear() }
                            return a } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/mail/mail.js", ln: 344 }) } }, "focusin .mail__input": function(i) {
                        try { e._hidePlaceholder(h(i.currentTarget), !0) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/mail/mail.js", ln: 349 }) } }, "focusout .mail__input": function(i) {
                        try {
                            var a = h(i.currentTarget);
                            a.val() || a.prev().show(), e._hideValTip() } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/mail/mail.js", ln: 359 }) } } }), e.getPwdEl().on("input", function() {
                    try { e._hidePlaceholder(h(this)) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/mail/mail.js", ln: 364 }) } }), e.getMailEl().on("input", function() {
                    try {
                        var i = e.getPwdEl();
                        i.val() && (e._setNtesInfo(), e._hidePlaceholder(i)) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/mail/mail.js", ln: 373 }) } }).on("propertychange", function(i) {
                    try {
                        if (i = i.originalEvent, i && "value" === i.propertyName) {
                            var a = e.getPwdEl();
                            a.val() && (e._setNtesInfo(), e._hidePlaceholder(a)) } } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/mail/mail.js", ln: 383 }) } }), h(document).click(function(i) {
                    try {
                        var a = i.target;
                        if (e.show) {
                            var t = e.$mailLogin;
                            ("mailCancel" === a.id || !t.is(a) && !h.contains(t[0], a)) && (e._hideMailList(), e._hidePop()) }
                        if (e.showMailList) {
                            var n = e.getMailSelectBox();
                            n.is(a) || h.contains(n[0], a) || e._hideMailList() } } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/mail/mail.js", ln: 403 }) } }) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/mail/mail.js", ln: 404 }) } }, _handleClick: function() {
            try {
                var e = this;
                return e.show ? e._hidePop() : e._showPop(), !1 } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/mail/mail.js", ln: 419 }) } }, _showPop: function() {
            try {
                var e = this;
                e.show = !0, e.element.addClass(y);
                var i = e.getMailEl(),
                    a = e.getPwdEl();
                i.val() ? (a.focus(), e._setNtesInfo()) : (i.focus(), e._hidePlaceholder(a)) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/mail/mail.js", ln: 439 }) } }, _hidePop: function() {
            try { this.show = !1, this.element.removeClass(y) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/mail/mail.js", ln: 448 }) } }, _hideMailList: function() {
            try { this.showMailList = !1, this.$mailList.removeClass(j) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/mail/mail.js", ln: 457 }) } }, _showMailList: function() {
            try { this.showMailList = !0, this.$mailList.addClass(j) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/mail/mail.js", ln: 466 }) } }, _showProxy: function() {
            try { this.element[(this._is163Mail() ? "add" : "remove") + "Class"]("mail--state-163") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/mail/mail.js", ln: 474 }) } }, _setMailText: function(e) {
            try {
                var i = this;
                i.getMailSelectText().text(i._getMailText(e)), i._showProxy() } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/mail/mail.js", ln: 485 }) } }, _getMailText: function(e) {
            try {
                var i = this,
                    a = i.options,
                    t = a.mails,
                    n = 0,
                    o = t[n],
                    l = o.name,
                    s = o.action;
                if (e)
                    for (var c = t.length, r = 0; c > r; r++) {
                        var m = t[r];
                        if (m.mail === e) { l = m.name, n = r, l = l.length > 9 ? l.substr(0, 6) + "..." : l, s = m.action;
                            break } }
                return a.curIndex = n, i.getFormEl().attr("action", s), l } catch (d) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: d.message || d.description, path: "indexher:container/module/mail/mail.js", ln: 522 }) } }, _is163Mail: function() {
            try {
                var e = this.options;
                return h.inArray(e.mails[e.curIndex].mail, ["163", "126", "yeah"]) > -1 } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/mail/mail.js", ln: 532 }) } }, _setNtesInfo: function() {
            try {
                var e = this;
                if (e._is163Mail()) {
                    var i = e.getMailEl().val();
                    i && e._getNtesInfo(i) } } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/mail/mail.js", ln: 546 }) } }, _getNtesInfo: function(e) {
            try {
                if (_.isLogin()) return;
                var i = this,
                    a = i.options;
                if (e += a.mails[a.curIndex].name, e === i.email) return;
                i.email = e, h.getJSON("//passport.baidu.com/phoenix/external/api/ntes/info?callback=?", { email: e }, function(e) {
                    try { e && 3 !== e.error_code && (i.netsInfo = e.ntes_info) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/mail/mail.js", ln: 574 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/mail/mail.js", ln: 575 }) } }, _check163Login: function() {
            function e() {
                try {
                    if (!a--) return;
                    h.getJSON("//passport.baidu.com/phoenix/external/api/ntes/check?callback=?", { ntes_info: i.netsInfo }, function(a) {
                        try {
                            if (a) {
                                if (a.bdu) return void i._loginViaBduss(a.bdu);
                                1 === a.error_code && setTimeout(e, t) } } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/mail/mail.js", ln: 611 }) } }) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/mail/mail.js", ln: 612 }) } }
            try {
                var i = this;
                if (!i._is163Mail() || !i.netsInfo) return;
                var a = 10,
                    t = 2e3;
                setTimeout(e, t) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/mail/mail.js", ln: 613 }) } }, _loginViaBduss: function(e) {
            try { h.getScript("https://user.hao123.com/static/crossdomain.php?bdu=" + e + "&t=" + +new Date, function() {
                    try { g({ type: "auto", k: "wylogin" }, { callback: function() {
                                try { window.location.href = window.location.href } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/mail/mail.js", ln: 629 }) } } }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/mail/mail.js", ln: 631 }) } }) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/mail/mail.js", ln: 632 }) } }, _valInput: function() {
            try {
                var e = this,
                    i = e.getMailEl();
                if (!i.val()) return e._showValTip({ el: i, msg: "请输入您的邮箱帐号!" }), !1;
                var a = e.getPwdEl();
                return a.val() ? !0 : (e._showValTip({ el: a, msg: "请输入您的邮箱密码!" }), !1) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/mail/mail.js", ln: 662 }) } }, _showValTip: function(e) {
            try {
                var i = this,
                    a = i.$mailLogin,
                    t = i.$msg;
                t || (t = h('<div class="mail__msg"></div>').appendTo(a), i.$msg = t), e.el.focus(), t.html(e.msg).show() } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/mail/mail.js", ln: 682 }) } }, _hideValTip: function() {
            try {
                var e = this.$msg;
                e && e.hide() } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/mail/mail.js", ln: 693 }) } }, _createMailList: function() {
            function e(e, i, a) {
                try {
                    for (var t = '<li><a class="mail__list-item #{style}" href="#{url}" index="#{index}">#{title}</a></li>', n = "", o = e.length, l = 0; o > l; l++) {
                        var s = e[l];
                        n += p(t, { style: i, url: s[a], title: s.name, index: l }) }
                    return n } catch (c) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: c.message || c.description, path: "indexher:container/module/mail/mail.js", ln: 719 }) } }
            try {
                var i = this,
                    a = i.options;
                i.$mailList = h('<ul class="mail__list">' + e(a.mails, "mail__list-item-mail", "action") + '<li><span class="mail__list-item mail__list-item-tip">以下为弹出登录</span></li>' + e(a.links, "mail__list-item-link", "url") + "</ul>").appendTo(i.getMailSelectBox()) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/mail/mail.js", ln: 727 }) } }, _hidePlaceholder: function(e, i) {
            try {
                (e.val() || i) && e.prev().hide() } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/mail/mail.js", ln: 739 }) } }, _createParams: function(e, i) {
            try {
                var a, t = this,
                    n = t.options,
                    o = n.mails,
                    l = o[n.curIndex].params,
                    s = [];
                for (var c in l) a = l[c], "url" === c && t._is163Mail() && t.getArgree().is(":checked") ? t.netsInfo && (a += "&hao123_ntes_info=" + encodeURIComponent(t.netsInfo)) : a = p("" + a, { u: e, p: i }), s.push('<input name="' + c + '" value="' + a + '" type="hidden">');
                t.getParamsBox().html(s.join("")) } catch (r) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: r.message || r.description, path: "indexher:container/module/mail/mail.js", ln: 769 }) } }, _clear: function() {
            try {
                var e = this;
                e.getPwdEl().val("").blur(), setTimeout(function() {
                    try { e.getParamsBox().html("") } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/mail/mail.js", ln: 784 }) } }, 3e3) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/mail/mail.js", ln: 785 }) } } }) });;
define("indexher:container/module/headjoke/headjoke.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js"], function(e, o, t, a, n) {
    function i(e, o) {
        try { c(e).prop("href", o.url).addClass(o.style || "").find('span[data-hook="joke-text"]').text(o.title) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/headjoke/headjoke.js", ln: 12 }) } }

    function d(e, o) {
        try {
            var t;
            c("#" + e).on("click", 'a[data-hook="joke-link"]', function(e) {
                try {
                    if (o.length) {
                        var a = this;
                        t && clearTimeout(t), t = setTimeout(function() {
                            try { i(a, o.shift()), t = null, o.length || c(e.delegateTarget).off("click") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/headjoke/headjoke.js", ln: 28 }) } }, 600) } } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/headjoke/headjoke.js", ln: 30 }) } }) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/headjoke/headjoke.js", ln: 31 }) } }
    var c = n;
    o.exports = d });;
define("indexher:container/module/shortcut/shortcut.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/browser.js", "indexher:static/js/events.js", "indexher:static/js/pageEvents.js", "indexher:static/js/widget.js"], function(e, t, o, i, n, c, r, s, h) {
    var a, d = n,
        l = c,
        u = r,
        g = s,
        p = l.ie && l.ie < 7;
    d.widget("hao123.shortcut", { _init: function() {
            try { a = this, a._goAnchor(), u.on("viewport.deferchange", a._showHideShortCut, a), a._showHideShortCut(), p && a._ie6Fixed() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/shortcut/shortcut.js", ln: 36 }) } }, _ie6Fixed: function() {
            try { u.on("viewport.deferchange", a._ie6FixedPosition, a), a._ie6FixedPosition() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/shortcut/shortcut.js", ln: 45 }) } }, _ie6FixedPosition: function() {
            try { a.scrollingTimer && (clearTimeout(a.scrollingTimer), a.scrollingTimer = null), a.scrollingTimer = setTimeout(function() {
                    try { a.element.css("top", d(window).scrollTop() + d("html").prop("clientHeight") - 231) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/shortcut/shortcut.js", ln: 59 }) } }, 100) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/shortcut/shortcut.js", ln: 60 }) } }, _showHideShortCut: function(e) {
            try { e = e || g.getViewport();
                var t = e.width,
                    o = t - (t >= 1260 ? 1190 : 990),
                    i = "shortcut-box-nr",
                    n = a.element;
                o >= 240 ? n.show().removeClass(i) : o >= 144 ? n.show().addClass(i) : n.hide(), a._toggleTopBtnOrBottomBtn(e) } catch (c) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: c.message || c.description, path: "indexher:container/module/shortcut/shortcut.js", ln: 82 }) } }, _toggleTopBtnOrBottomBtn: function(e) {
            try {
                var t = ["show", "hide"],
                    o = e.scrollTop > 2e3;
                d("#shortcut-toptoggle")[t[+!o]](), d("#shortcut-bottomtoggle")[t[+o]]() } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/shortcut/shortcut.js", ln: 94 }) } }, _goAnchor: function() {
            try { a.element.on("click", ".vip", function() {
                    try {
                        var e, t = d(this).data("to");
                        if (!t) return;
                        if ("top" === t) e = 0;
                        else if ("bottom" === t) e = d("body").height();
                        else {
                            var o = d("#" + t);
                            if (!o[0]) return;
                            e = o.offset().top - 100 }
                        return a._goScrollTop(e), !1 } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/shortcut/shortcut.js", ln: 124 }) } }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/shortcut/shortcut.js", ln: 125 }) } }, _goScrollTop: function(e) {
            try { this._delay(function() {
                    try { d("html,body").animate({ scrollTop: e }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/shortcut/shortcut.js", ln: 137 }) } }, 20) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/shortcut/shortcut.js", ln: 138 }) } }, _destroy: function() {
            try { u.un("viewport.deferchange", this._showHideShortCut), u.un("viewport.deferchange", this._ie6FixedPosition) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/shortcut/shortcut.js", ln: 147 }) } } }) });;
define("indexher:container/module/servicetab/startips.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/format.js", "indexher:static/js/cookie.js", "indexher:static/js/adjust.js", "indexher:static/js/log.js"], function(t, e, i, s, a, n, r, l, o) {
    var c = a,
        p = n,
        d = r,
        f = l,
        h = o,
        u = "tvtip_notshow",
        v = { init: function(t) {
                try {
                    if ("true" !== t.isShow) return;
                    if ("0" === t.tiptype) {
                        var e = d.get(u),
                            i = t.line;
                        if (e === i + "_0") return !1 }
                    this.insertTpl(t) } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/servicetab/startips.js", ln: 32 }) } }, insertTpl: function(t) {
                try {
                    var e, i = this,
                        s = c.trim(t.img),
                        a = parseInt(t.pos, 10);
                    e = "0" === t.tiptype ? '<li class="tips"><div class="tips-arrow tips-arrowOut" data-hook="tips-arrowOut" style="left:#{outLeft}px"></div><div class="tips-arrow tips-arrowIn" data-hook="tips-arrowIn" style="left:#{inLeft}px"></div><div class="tvtip"><a class="tvtip-txtkey" id="tvtip-txtkey" target="_blank" href="#{url}" title="#{title}">#{img}</a><a class="tvtip-txtlink" id="tvtip-txtlink" href="#{url2}" title="#{title2}">#{title2}</a><a class="tip-closed" title="不再提醒"></a></div></li>' : '<li class="tips tiptime"><div class="tvtip"><span class="tvtip-txtkey">#{img}</span><a class="tvtip-txtlink" id="tvtip-txtlink" title="#{title2}" href="#{url2}">#{title2}</a></div></li>', i.log({ data: { v: 1 } }), c(p(e, { img: s ? '<img src="' + HAO.httpsTrans(s) + '" />' : " ", url: t.url, title: t.title, url2: t.url2, title2: t.title2, outLeft: a, inLeft: a + 1 })).on("click", ".tip-closed", { line: t.line }, i.close).on("click", ".tip-closed", { v: 0 }, i.log).on("click", "#tvtip-txtkey", { v: 2 }, i.log).on("click", "#tvtip-txtlink", { v: 3 }, i.log).insertAfter(c(t.parID).find("li").eq(i.index(t.line))).slideDown(800, f.adjust) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/servicetab/startips.js", ln: 87 }) } }, close: function(t) {
                try {
                    var e = t.data.line;
                    c(this).closest(".tips").slideUp(800, function() {
                        try { f.adjust(), d.set(u, e + "_0", { expires: 1 }), c(this).remove() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/servicetab/startips.js", ln: 95 }) } }).off("click") } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/servicetab/startips.js", ln: 96 }) } }, log: function(t) {
                try { h({ type: "starbar_tvtip", v: t.data.v, f: 0 }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/servicetab/startips.js", ln: 104 }) } }, index: function(t) {
                try {
                    return 2 * parseInt(t, 10) - 1 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/servicetab/startips.js", ln: 109 }) } } };
    e.exports = v });;
define("indexher:container/module/servicetab/startools.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/adjust.js"], function(t, e, o, a, s, r) {
    function n(t) {
        try {
            var e = !1;
            i("#" + t).on("click", "a[data-hook=startools-arrow]", function() {
                try {
                    var t = i(this),
                        o = t.next("div[data-hook=startools-container]"),
                        a = "startools-arrowDown",
                        s = "box-toolsDown";
                    return e = !e, e ? (t.addClass(a).attr("alog-text", "收起"), o.removeClass(s)) : (t.removeClass(a).attr("alog-text", "展开"), o.addClass(s)), c.adjust(), !1 } catch (r) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: r.message || r.description, path: "indexher:container/module/servicetab/startools.js", ln: 31 }) } }) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/servicetab/startools.js", ln: 32 }) } }
    var i = s,
        c = r;
    e.exports = n });;
define("indexher:container/module/toppicture/toppicture.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/widget.js", "indexher:static/js/lazy.js", "indexher:static/js/events.js", "indexher:static/js/store.js", "indexher:static/js/format.js", "indexher:static/js/ctr.js"], function(e, t, i, n, o, c, a, r, s, p, h) {
    var d = o,
        l = "hao123.",
        u = "toppicture",
        g = a,
        m = p,
        f = h;
    d.widget(l + u, { options: { selectCls: "selected", interval: 1e4, lazy: !1, picturedata: [], areaFlag: "", recomFlag: 0, "switch": "off" }, _create: function() {
            try {
                var e = this.element;
                this.$imglist = d(".js_content li", e), this.$imgs = this.$imglist.find("img"), this.$links = d(".pic", e), this.$next = d(".js_next", e), this.$pre = d(".js_pre", e) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/toppicture/toppicture.js", ln: 47 }) } }, _init: function() {
            try {
                if (!this.$imgs) return;
                this.options.lazy && g.add(this.$imgs.eq(0)), this.imgCount = this.$imglist.length, this.currentIndex = 0, this.loadMore = this.options.loadMore || !1, this._bindEvent(), this.imgCount > 1 && this._autoPlay(), "off" !== this.options["switch"] && 9 !== this.recomFlag && this._clickPlay() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/toppicture/toppicture.js", ln: 73 }) } }, _bindEvent: function() {
            try {
                {
                    var e = this;
                    e.options }
                this.$imglist.hover(function() {
                    try { clearTimeout(e.hideTimer), e._slideShow() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/toppicture/toppicture.js", ln: 85 }) } }, function() {
                    try { e.hideTimer = setTimeout(function() {
                            try { e._slideHide() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/toppicture/toppicture.js", ln: 89 }) } }, 100) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/toppicture/toppicture.js", ln: 90 }) } }), this.$next.click(function() {
                    try {
                        return e._goNext(), e._autoPlay(), !1 } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/toppicture/toppicture.js", ln: 95 }) } }), this.$pre.click(function() {
                    try {
                        return e._goPre(), e._autoPlay(), !1 } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/toppicture/toppicture.js", ln: 100 }) } }), this.$next.hover(function() {
                    try { clearTimeout(e.hideTimer), e._slideShow() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/toppicture/toppicture.js", ln: 104 }) } }, function() {
                    try { e.hideTimer = setTimeout(function() {
                            try { e._slideHide() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/toppicture/toppicture.js", ln: 108 }) } }, 100) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/toppicture/toppicture.js", ln: 109 }) } }), this.$pre.hover(function() {
                    try { clearTimeout(e.hideTimer), e._slideShow() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/toppicture/toppicture.js", ln: 113 }) } }, function() {
                    try { e.hideTimer = setTimeout(function() {
                            try { e._slideHide() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/toppicture/toppicture.js", ln: 117 }) } }, 100) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/toppicture/toppicture.js", ln: 118 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/toppicture/toppicture.js", ln: 119 }) } }, _slideHide: function() {
            try { this.$next.hide(), this.$pre.hide() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/toppicture/toppicture.js", ln: 128 }) } }, _slideShow: function() {
            try { this.$next.show(), this.$pre.show() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/toppicture/toppicture.js", ln: 137 }) } }, _autoPlay: function() {
            try {
                var e = this,
                    t = e.options;
                clearInterval(this.timer), this.timer = setInterval(function() {
                    try { e._goNext() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/toppicture/toppicture.js", ln: 149 }) } }, t.interval) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/toppicture/toppicture.js", ln: 150 }) } }, _goNext: function() {
            try {
                var e = this.currentIndex;++this.currentIndex === this.imgCount && (this.currentIndex = 0), this._display(e) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/toppicture/toppicture.js", ln: 162 }) } }, _goPre: function() {
            try {
                var e = this.currentIndex;--this.currentIndex < 0 && (this.currentIndex = this.imgCount - 1), this._display(e) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/toppicture/toppicture.js", ln: 174 }) } }, _clickPlay: function() {
            try {
                var e = this;
                this.$links.click(function() {
                    try { e._changeLink(d(this)) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/toppicture/toppicture.js", ln: 185 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/toppicture/toppicture.js", ln: 186 }) } }, _changeLink: function(e) {
            function t() {
                try {
                    return (+new Date % 6048e5).toString(36) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/toppicture/toppicture.js", ln: 248 }) } }
            try {
                var i, n, o, c = this,
                    a = c.options,
                    r = "index:#{index},recom:#{recom},abtest:#{abtest},hash:#{hash},ts:#{ts}",
                    s = "area:#{area},type:link,hash:#{hash},recom:#{recom},index:#{index},ts:#{ts}",
                    p = t();
                i = e.data("index"), n = d("img", e), o = d(".pic-txt", e);
                var h = "";
                if (a.picturedata && a.picturedata.length > 0 && (h = a.picturedata.shift()), !h) return;
                setTimeout(function() {
                    try { o.text(h.title), n.attr("src", HAO.httpsTrans(h.img)), n.attr("data-src", HAO.httpsTrans(h.img)), e.attr("href", h.url), e.attr("title", h.title), e.attr("alog-custom", m(r, { index: i, recom: h.is_backup || 0, abtest: a.area, hash: h.link_hash || "", ts: p })), e.attr("data-ctr", m(s, { index: i, type: "link", recom: h.is_backup || 0, area: a.area, hash: h.link_hash || "", ts: p })), e.attr("data-ctr-status", 0), f.callCTR(e) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/toppicture/toppicture.js", ln: 244 }) } }, 600) } catch (l) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: l.message || l.description, path: "indexher:container/module/toppicture/toppicture.js", ln: 251 }) } }, _display: function(e) {
            try {
                var t = this,
                    i = t.options;
                this.loadMore || (this.loadMore = !0, this.$imgs.not(":first").each(function() {
                    try { d(this).prop("src", d(this).data("src")) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/toppicture/toppicture.js", ln: 266 }) } })), this.$imglist.eq(e).removeClass(i.selectCls), this.$imglist.eq(this.currentIndex).addClass(i.selectCls), this._animateShow(e) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/toppicture/toppicture.js", ln: 272 }) } }, _animateShow: function(e) {
            try { this.$imglist.eq(e).css({ opacity: 1 }).stop().addClass("animating").animate({ opacity: 0 }, 800, function() {
                    try { d(this).css("filter", "none").removeClass("animating") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/toppicture/toppicture.js", ln: 287 }) } }), this.$imglist.eq(this.currentIndex).css({ opacity: 0, display: "block" }).stop().addClass("animating").animate({ opacity: 1 }, 800, function() {
                    try { d(this).css("filter", "none").removeClass("animating") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/toppicture/toppicture.js", ln: 296 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/toppicture/toppicture.js", ln: 297 }) } }, _destroy: function() {
            try { clearInterval(this.timer) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/toppicture/toppicture.js", ln: 305 }) } } }) });;
define("indexher:container/module/topzixun/topzixun.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/widget.js", "indexher:static/js/ctr.js", "indexher:static/js/format.js"], function(t, e, a, i, n, s, o, r) {
    var c = n,
        h = o,
        l = r,
        d = "hao123.",
        p = "topzixun";
    c.widget(d + p, { options: { txtdata: [], area: "", places: 5 }, _init: function() {
            try {
                var t = this.element;
                this.$ps = c("p:lt(" + this.options.places + ")", t), this.$links = c("a", this.$ps), this._bindEvent() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/topzixun/topzixun.js", ln: 38 }) } }, _bindEvent: function() {
            try {
                {
                    var t = this;
                    this.options }
                this.$links.click(function() {
                    try { t._changeLink(c(this)) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/topzixun/topzixun.js", ln: 52 }) } }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/topzixun/topzixun.js", ln: 53 }) } }, _changeLink: function(t) {
            function e() {
                try {
                    return (+new Date % 6048e5).toString(36) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/topzixun/topzixun.js", ln: 170 }) } }
            try {
                var a, i = this.options,
                    n = i.txtdata,
                    s = "index:#{index},abtest:#{abtest},recom:#{recom},hash:#{hash},ts:#{ts}",
                    o = "area:#{area},type:link,hash:#{hash},recom:#{recom},index:#{index},ts:#{ts}",
                    r = t.parents("p"),
                    d = e();
                t = c(".js_link", r);
                var p = c(".js_sublink", r),
                    u = parseInt(t.data("index"), 10);
                if (a = n.shift(), !a) return;
                setTimeout(function() {
                    try {
                        if (p.length) {
                            var e = c("span", p),
                                n = p.data("index"),
                                r = p.data("style");
                            p.removeClass(r).addClass(a.ext.style2 || ""), p.data("style", a.ext.style2 || ""), e.text(a.ext.title2 || ""), p.attr("href", a.ext.url2 || a.url), p.attr("title", a.ext.title2), p.attr("alog-custom", l(s, { index: n, recom: a.is_backup || 0, abtest: i.area, hash: a.link_hash || "", ts: d })), p.attr("data-ctr", l(o, { index: n, type: "link", recom: a.is_backup || 0, area: i.area, hash: a.link_hash || "", ts: d })), p.attr("data-ctr-status", 0), a.ext.title2 ? p.show() : p.hide() }
                        var x = c("span", t),
                            m = t.data("style");
                        t.removeClass(m).addClass(a.style || ""), t.data("style", a.style || ""), x.text(a.title || ""), t.attr("href", a.url), t.attr("title", a.title), t.attr("alog-custom", l(s, { index: u, recom: a.is_backup || 0, abtest: i.area, hash: a.link_hash || "", ts: d })), t.attr("data-ctr", l(o, { index: u, type: "link", recom: a.is_backup || 0, area: i.area, hash: a.link_hash || "", ts: d })), t.attr("data-ctr-status", 0), h.callCTR(p.length ? c([p[0], t[0]]) : t) } catch (g) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: g.message || g.description, path: "indexher:container/module/topzixun/topzixun.js", ln: 165 }) } }, 600) } catch (x) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: x.message || x.description, path: "indexher:container/module/topzixun/topzixun.js", ln: 172 }) } }, _destroy: function() {
            try { clearInterval(this.timer) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/topzixun/topzixun.js", ln: 180 }) } } }) });;
define("indexher:container/module/scrolltip/scrolltip.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/widget.js", "indexher:static/js/cookie.js", "indexher:static/js/log.js"], function(e, t, i, o, l, n, c, s) {
    var r = l,
        a = c,
        p = "hao123.",
        d = "scrolltip",
        h = a.get("scrollflag"),
        m = (new Date).getTime();
    r.widget(p + d, { _create: function() {
            try {
                if ("undefined" == typeof h) {
                    var e = m + 604800;
                    a.set("scrollflag", e + "", { expires: 30 }), h = e }
                if (m - h > 0) return;
                var t = this,
                    i = this.element,
                    o = this.options.scrollBox,
                    l = this.options.scrollBtn,
                    n = "onwheel" in document || document.documentMode >= 9 ? "wheel.scrolltip" : "mousewheel.scrolltip DomMouseScroll.scrolltip";
                this.tiptimer = null, this.topelem = i, this.scrollTip = r("<span>", { "class": "top-scroll-tip" }).css({ "z-index": 600, display: "none" }), this._startTime(), i.on(n, function() {
                    try { t._wheelHandler() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/scrolltip/scrolltip.js", ln: 50 }) } }), o.on("click.scrolltip", function() {
                    try { t._wheelHandler() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/scrolltip/scrolltip.js", ln: 54 }) } }), l.on("mousedown.scrolltip", function() {
                    try { r(document).on("mousemove.scrolltip", function() {
                            try { t._wheelHandler() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/scrolltip/scrolltip.js", ln: 59 }) } }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/scrolltip/scrolltip.js", ln: 60 }) } }), i.parent().on("mouseenter.scrolltip", t.debouce(function() {
                    try { clearTimeout(t.tiptimer), t.tiptimer = null, t._tipHide() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/scrolltip/scrolltip.js", ln: 67 }) } }, 400, !0)), i.parent().on("mouseleave.scrolltip", t.debouce(function() {
                    try { t._startTime(), t._tipShow() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/scrolltip/scrolltip.js", ln: 72 }) } }, 400, !0)), this.scrollTip.prependTo(i).show(300) } catch (c) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: c.message || c.description, path: "indexher:container/module/scrolltip/scrolltip.js", ln: 75 }) } }, _destroy: function() {
            try { this.scrollTip.remove(), this._clearTime(), this.element.off(".scrolltip"), this.element.parent().off(".scrolltip"), this.options.scrollBox.off("click.scrolltip"), this.options.scrollBtn.off("mousedown.scrolltip"), r(document).off("mousemove.scrolltip") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/scrolltip/scrolltip.js", ln: 89 }) } }, _startTime: function() {
            try {
                var e = this;
                this.tiptimer = setTimeout(function() {
                    try { e.destroy() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/scrolltip/scrolltip.js", ln: 99 }) } }, 2e4) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/scrolltip/scrolltip.js", ln: 100 }) } }, _clearTime: function() {
            try { clearTimeout(this.tiptimer), this.tiptimer = null } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/scrolltip/scrolltip.js", ln: 109 }) } }, _wheelHandler: function() {
            try {
                var e = s;
                this.destroy(), a.set("scrollflag", 0, { expires: 30 }), e({ page: "index", level: 1, type: "auto", k: "topzixun-scrolltip" }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/scrolltip/scrolltip.js", ln: 125 }) } }, _tipHide: function() {
            try { this.scrollTip.hide(300) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/scrolltip/scrolltip.js", ln: 134 }) } }, _tipShow: function() {
            try { this.scrollTip.show(300) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/scrolltip/scrolltip.js", ln: 142 }) } }, debouce: function(e, t, i) {
            try {
                var o, l, n, c, s, r = this;
                return function() {
                    try { n = r, l = arguments, c = new Date;
                        var a = function() {
                                try {
                                    var r = new Date - c;
                                    t > r ? o = setTimeout(a, t - r) : (o = null, i || (s = e.apply(n, l))) } catch (p) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: p.message || p.description, path: "indexher:container/module/scrolltip/scrolltip.js", ln: 165 }) } },
                            p = i && !o;
                        return o || (o = setTimeout(a, t)), p && (s = e.apply(n, l)), s } catch (d) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: d.message || d.description, path: "indexher:container/module/scrolltip/scrolltip.js", ln: 174 }) } } } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/scrolltip/scrolltip.js", ln: 175 }) } } }) });;
define("indexher:container/module/site/logintip.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/events.js", "indexher:static/js/store.js", "indexher:static/js/adjust.js", "indexher:static/js/log.js", "indexher:static/js/login.js", "indexher:static/js/browser.js", "indexher:static/js/cookie.js"], function(e, i, t, n, o, s, a, c, r, d, l, g) {
    function p() {
        try {
            var e = '<div id="loginTip" class="g-fc3 login-tip" monkey="logintip" style="display:none"><a class="g-fc9 g-fc9h tiplink js_loginhook" href="#" data-src="sitetip" alog-text="登录">登录</a>后将保留您的设置，便于您在其他地方查看<a class="g-fc5 g-fc5h g-ib tipbtn js_loginhook" href="#" alog-text="登录btn" data-src="sitetip">登 录</a><a class="tipclz" alog-text="关闭"></a></div>';
            return f(e).appendTo("#site div.js_site") } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/logintip.js", ln: 28 }) } }

    function h(e) {
        function i() {
            try {
                if (s) return;
                n = n || f("#loginTip"), n.length || (n = p(), t()), s = !0, x({ type: "auto", k: "show-login-sitetip" }), f("#box-famoussite").find("div.wf-line").hide(), n.show(function() {
                    try { u.done("logintip.showed") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/logintip.js", ln: 72 }) } }), j.adjust() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/logintip.js", ln: 75 }) } }

        function t() {
            try { u.on("login.success", function() {
                    try { n && (n.remove(), j.adjust()) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/logintip.js", ln: 83 }) } }), n.on("click", ".js_loginhook", function() {
                    try {
                        var e = f(this).data("src");
                        return y.show(function() {
                            try { x({ type: "auto", k: "login-" + e }), v.set(w, e, { expires: k.ie ? "" : "Session" }), f.getJSON("/api/synctouser", { c: v.getCSRFId(), key: +new Date }, function() {
                                    try { window.location.href = window.location.href } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/logintip.js", ln: 103 }) } }) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/logintip.js", ln: 104 }) } }), !1 } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/logintip.js", ln: 107 }) } }).on("click", ".tipclz", function() {
                    try {
                        return m.set(o, "1"), n.remove(), j.adjust(), !1 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/logintip.js", ln: 113 }) } }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/logintip.js", ln: 114 }) } }
        try {
            var n, o = "loginTip1",
                s = !1;
            try {
                if (m.get(o)) return } catch (a) {}
            parseInt(e, 10) > 2 && i(), u.on("added", i), u.on("modified", i), u.on("delete", i) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/site/logintip.js", ln: 115 }) } }
    var f = o,
        u = s,
        m = a,
        j = c,
        x = r,
        y = d,
        k = l,
        v = g,
        w = "_src";
    i.exports = h });;
define("indexher:container/module/site/config.js", ["global", "module", "exports", "require"], function(e, t) {
    var i = { css: { siteNormal: "site-normal", siteEdit: "site-edit", hdNormal: "site-hd-normal", hdEdit: "site-hd-edit", itemNormal: "site-item-normal", itemMove: "site-item-move", itemEdit: "site-item-edit", itemCurrent: "site-item-current", itemDashed: "site-item-dashed", itemAdd: "site-item-add", itemAddUp: "site-item-add-up", itemAddDown: "site-item-add-down", item: "site-item", js_item: "js_site-item", bdNormal: "site-bd-normal", itemText: "site-text", itemTpl: "site-tpl", sugError: "error" }, sug: { requestQuery: "wd", url: "http://nssug.baidu.com/su", callbackFn: "baidu.sug", callbackDataKey: "s", requestParas: { prod: "superpage" }, n: 5, noSubmit: !0 }, error: { 500: '出现错误，请点 <a href="http://www.hao123.com" target="_self">这里</a> 刷新页面', 501: "该网址已存在", 510: '出现错误，请点 <a href="http://www.hao123.com"  target="_self">这里</a> 刷新页面', 503: '出现错误，请点 <a href="http://www.hao123.com"  target="_self">这里</a> 刷新页面', 511: "请输入正确格式，如http://www.abc.com", 512: "网站名称过长", 513: "网址过长", 515: "请输入网站名称", 516: "请输入网址", 507: "请您先登录", 514: "网址已满，请删除不常用的网址" }, info: { loading: "正在请求，请稍候", ok: "操作成功！", refresh: "正在刷新，请稍候" }, url: { init: "/url/init", add: "/url/add", modify: "/url/modify", doDelete: "/url/delete", recover: "/url/reset", needImport: "/url/isneedimport", doImport: "/url/import", sort: "/url/sort", cr: "/api/paneldata", delRecommend: "/api/delrecom", delRecombyid: "/api/delrecombyid", user: "/api/username" }, retry: 2, recommendN: 3, recommendMaxWord: 5, showSaveMax: 5, nameMaxLength: 40, urlMaxLength: 200, siteMaxlength: 48, guestMaxLength: 10, guestStatus: 2, dragHint: "拖动排序", confirmTitle: "提示", confirmText: "登录后可编辑更多网址，随时随地收藏，不再担心网址丢失！", alertTitle: "提示", recoverTitle: "恢复默认", recoverText: "是否要恢复为默认网址？", adddedText: "已添加，点击取消", emptyText: "清空历史记录！", guestHint: "网址过多，建议登录后永久保存", baiduCookie: "BAIDUID", flashCookie: "FLASHID", dataIdAttr: "data-id", iconBaseUrl: "hao123img.com/urlicon/", defaultIconUrl: "http://sc1.hao123img.com/urlicon/6000.png", jsItem: ".js_site-item", tpl: { sugMain: '<ol class="site-sugwrap">#{content}<ol>', sugItem: '<li site="#{site}" q="#{q}"><span class="name">#{title}</span><span class="url">#{text}</span></li>', sugSplitChar: "0{#S+_}", recommend: '<li><a class="item item-add js_recommend" data-id="#{id}" hidefocus="true" data-type="recommend" href="#{url}">#{name}</a></li>', cms: '<dl class="g_clr"><dt><span class="popup-site-cms-title">#{name}:</span></dt>#{content}</dl>', cmsContent: '<dd #{itemStyle}><a href="#{url}" data-httpslink="off" data-id="#{id}" hidefocus="true" data-type="cms" class="#{className}">#{name}</a></dd>', itemTag: "<ul>", editItem: '<li title="拖动排序" class="js_site-item" data-id="#{id}" data-status="#{status}" data-name="#{rawName}" data-url="#{url}"><span class="js_text text" >#{name}</span><a  class="js_modify modify"  href="#" title="修改" hidefocus="true"></a><a class="js_delete delete"  href="#"  title="删除" hidefocus="true"></a></li>', item: '<li class="js_site-item g-ib site-item site-item-normal #{style}" data-status="#{status}" title="#{title}" data-id="#{id}"><a class="js_text sitemainlink" href="#{url}" style="background-image:url(#{icon})" hidefocus="true">#{name}</a></li>', subitem: '<li class="js_site-item g-ib site-item site-item-normal #{class}" data-id="#{id}" data-status="#{status}"><a class="js_text sitemainlink" href="#{url}" style="background-image:url(#{icon})" data-title="#{name}" hidefocus="true">#{name}</a>&nbsp;•&nbsp;<a href="#{subUrl}" class="sitesublink">#{subName}</a></li>', noData: '<li class="js_no-data nodata">没有常用网址，请您<a href="javascript:void(0)">添加</a></li>', addNormalBtn: '<li class="js_item-add g-ib site-item site-item-add site-item-add-normal"><i></i><span class="site-item-add-text">添加网址</span></li>', addShortBtn: '<li title="添加网址" class="js_item-add g-ib site-item site-item-add site-item-add-short"><i></i></li>', tipTpl: '<div class="popup-site-tip-add"><i class="popup-site-tip-close js_add-tip-close">关闭</i></div>' } };
    t.exports = i });;
define("indexher:container/module/site/drag.js", ["global", "module", "exports", "require", "indexher:container/module/site/config.js", "indexher:static/js/jquery.js", "indexher:static/js/browser.js", "indexher:static/js/events.js"], function(e, t, i, n, o, s, a, r) {
    function c(e, t) {
        try { this.container = e, this.placeHolder = t, this._events = { sorted: [] }, this.activeIndex = -1 } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/drag.js", ln: 26 }) } }

    function d(e) {
        try {
            return { x: e.pageX, y: e.pageY } } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/drag.js", ln: 243 }) } }
    var f = o,
        h = s,
        g = a,
        l = r,
        p = null,
        u = f.jsItem,
        m = (u.substring(1), "item-move");
    c.prototype = { setIsCanDrag: function(e) {
            try { this._isCanDrag = e } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/drag.js", ln: 31 }) } }, dragable: function() {
            try {
                var e = this;
                this.container.delegate(u, "mousedown", function(t) {
                    function i(t) {
                        try {
                            var i = d(t),
                                n = i.x,
                                o = i.y,
                                c = n - v + x,
                                f = o - _ + y;
                            return c > 0 && c + a.offsetWidth < s.width() + 10 && (x = c), f > 0 && f < s.height() && (y = f), r.css({ left: x, top: y }), v = n, _ = o, e._dealMeet(a), !1 } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/drag.js", ln: 100 }) } }

                    function n() {
                        try {
                            return h(document).off("mousemove", i).off("mouseup", n), g.ie ? a.releaseCapture() : r.css("opacity", ""), e._moveTo(a, function() {
                                try { r.removeClass(m).insertBefore(f.hide());
                                    var t = h(u, s).index(a);
                                    e.activeIndex !== t && (e.activeIndex = t, l.emit("sorted")) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/drag.js", ln: 124 }) } }), !1 } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/drag.js", ln: 127 }) } }

                    function o() {
                        try {
                            return e._isCanDrag ? !1 : !0 } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/drag.js", ln: 135 }) } }
                    try {
                        var s = e.container.on("click", o);
                        if (h(t.target).is(".js_modify,.js_delete")) return;
                        var a = this,
                            r = h(a);
                        e.activeIndex = h(u, s).index(a), g.ie ? a.setCapture() : r.css("opacity", .8);
                        var c = r.offset();
                        r.addClass(m).offset(c);
                        var f = e.placeHolder.insertBefore(a).show(),
                            p = r.position(),
                            x = p.left,
                            y = p.top,
                            j = d(t),
                            v = j.x,
                            _ = j.y;
                        return e._registePosition(), h(document).on("mousemove", i).on("mouseup", n).off("mouseup", o), !1 } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/drag.js", ln: 138 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/drag.js", ln: 139 }) } }, _registePosition: function() {
            try {
                var e = this,
                    t = e.container,
                    i = e.placeHolder;
                p = [], h(u, t).each(function(e) {
                    try { p.push({ left: this.offsetLeft, top: this.offsetTop, index: e, thisObj: this }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/drag.js", ln: 157 }) } }), i.index = h("li", t).index(i) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/site/drag.js", ln: 160 }) } }, _dealMeet: function(e) {
            try {
                for (var t = e.offsetLeft, i = e.offsetTop, n = e.offsetWidth, o = e.offsetHeight, s = p.length, a = 0; s > a; a++) {
                    var r = p[a],
                        c = r.thisObj;
                    if (c !== e && Math.abs(r.left - t) < .5 * n && Math.abs(r.top - i) < .3 * o) {
                        var d = this.placeHolder;
                        d.index > r.index ? d.insertBefore(c) : d.insertAfter(c), this._registePosition();
                        break } } } catch (f) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: f.message || f.description, path: "indexher:container/module/site/drag.js", ln: 191 }) } }, _moveTo: function(e, t) {
            function i() {
                try { n += l, o += p, u.css({ left: n, top: o }), f-- ? setTimeout(i, g) : t() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/drag.js", ln: 233 }) } }
            try {
                var n = e.offsetLeft,
                    o = e.offsetTop,
                    s = this.placeHolder.get(0),
                    a = s.offsetLeft,
                    r = s.offsetTop,
                    c = a - n,
                    d = r - o;
                if (Math.abs(Math.max(c, d)) < 10) return void t();
                var f = 6,
                    g = 20,
                    l = c / f,
                    p = d / f,
                    u = h(e);
                setTimeout(i, g) } catch (m) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: m.message || m.description, path: "indexher:container/module/site/drag.js", ln: 235 }) } } }, t.exports = c });;
define("indexher:container/module/site/log.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/login.js", "indexher:static/js/log.js", "indexher:static/js/config.js"], function(e, t, i, n, o, s, c, a) {
    function d(e, t) {
        try { e = e || {};
            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
            return e } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/site/log.js", ln: 20 }) } }
    var r = o,
        l = s,
        g = c,
        p = a,
        f = function(e) {
            function t() {
                try {
                    return l.isLogin() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/log.js", ln: 48 }) } }
            try {
                var i = { level: 1, page: p.get("pageId") };
                r('.js_site-item[data-status="0"]', e)[0] && g(d({ type: "rpuser2", ut: "haveadd" }, i));
                var n = p.get("userinfo");
                e.bind("sitemanageclick", function() {
                    try { g(d({ type: "manage", isLogin: t() }, i)) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/log.js", ln: 55 }) } }), e.bind("siteintoaddclick", function() {
                    try { g(d({ type: "intoadd", isLogin: t() }, i)) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/log.js", ln: 62 }) } }), e.bind("sitenoneaddclick", function() {
                    try { g(d({ type: "noneadd" }, i)) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/log.js", ln: 68 }) } }), e.bind("sitelogin", function(e, t) {
                    try { g(d({ type: t.login, twicetype: t.twicelogin }, i)) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/site/log.js", ln: 75 }) } }), e.bind("sitedefaultlogin", function() {
                    try {
                        var e = r.parseJSON(n.cinfo);
                        g(d({ type: "defaultLogin", cinfo: e ? e.loginFrom : "" }, i)) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/log.js", ln: 83 }) } }), e.bind("siteadd", function(e, n) {
                    try { g(d({ type: "add", siteId: n.id, siteUrl: n.url, isLogin: t(), siteStatus: n.status || "" }, i)) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/site/log.js", ln: 93 }) } }), e.bind("siteaddsync", function(e, n) {
                    try { g(d({ type: "addsync", siteId: n.id, siteUrl: n.url, isLogin: t() }, i)) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/site/log.js", ln: 102 }) } }), e.bind("siterecommend", function(e, n) {
                    try { g(d({ type: "recommend", siteId: n.id, siteUrl: n.url, isLogin: t() }, i)) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/site/log.js", ln: 111 }) } }), e.bind("siteaddclicksync", function(e, n) {
                    try { g(d({ type: "addclicksync", siteId: n.id, siteUrl: n.url, isLogin: t() }, i)) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/site/log.js", ln: 120 }) } }), e.bind("sitecms", function(e, n) {
                    try { g(d({ type: "cms", siteId: n.id, siteUrl: n.url, isLogin: t(), siteStatus: n.status || "" }, i)) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/site/log.js", ln: 130 }) } }), e.bind("sitemodify", function(e, n) {
                    try { g(d({ type: "modify", siteId: n.id, siteUrl: n.url, isLogin: t(), siteStatus: n.status || "" }, i)) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/site/log.js", ln: 140 }) } }), e.bind("sitedeletesync", function() {
                    try { g(d({ type: "syncdelete" }, i)) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/log.js", ln: 146 }) } }), e.bind("sitedodelete", function(e, n) {
                    try { g(d({ type: "delete", siteId: n.id, siteUrl: n.url, isLogin: t(), siteStatus: n.status || "" }, i)) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/site/log.js", ln: 156 }) } }), e.bind("siterecovered", function() {
                    try { g(d({ type: "recover", isLogin: t() }, i)) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/log.js", ln: 163 }) } }), e.bind("sitetextclick", function(e, n) {
                    try { g(d({ type: "textclick", siteId: n.id, siteUrl: n.url, status: n.status, isLogin: t() }, i)) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/site/log.js", ln: 173 }) } }), e.bind("siterefresh", function() {
                    try { g(d({ type: "refresh" }, i)) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/log.js", ln: 179 }) } }), e.bind("siteerror", function(e, t) {
                    try {
                        var n = d({ type: "siteerror", code: t.code }, i);
                        t.info && (n.info = t.info), g(n) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/site/log.js", ln: 192 }) } }), e.bind("siteerrorflash", function() {
                    try { g(d({ type: "siteerrorflash" }, i)) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/log.js", ln: 198 }) } }), e.bind("sitemanagerecommend", function() {
                    try { g(d({ type: "managerecommend" }, i)) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/log.js", ln: 204 }) } }), e.bind("sitedeleteallrecommend", function() {
                    try { g(d({ type: "deleteallrecommend" }, i)) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/log.js", ln: 210 }) } }), e.bind("sitegetusererror", function(e, t) {
                    try { g(d({ type: "getusererror", code: t }, i)) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/site/log.js", ln: 217 }) } }), e.bind("sitehintclose", function() {
                    try { g(d({ type: "sitehintclose" }, i)) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/log.js", ln: 223 }) } }) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/site/log.js", ln: 224 }) } };
    t.exports = f });;
define("indexher:container/module/site/siteView.js", ["global", "module", "exports", "require", "indexher:static/js/events.js", "indexher:static/js/cookie.js", "indexher:static/js/format.js", "indexher:static/js/jquery.js", "indexher:container/module/site/config.js", "indexher:container/module/suggest/suggest.js", "indexher:container/module/suggest/nssug.js"], function(e, t, i, n, s, a, o, r, c, d, h) {
    function l() {
        try { g(""), u("") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/siteView.js", ln: 745 }) } }

    function g(e) {
        try { b.sugName.val(e), e ? _.sugNamePlaceholder.hide() : _.sugNamePlaceholder.show() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteView.js", ln: 754 }) } }

    function u(e) {
        try { b.sugUrl.val(e), e ? _.sugUrlPlaceholder.hide() : _.sugUrlPlaceholder.show() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteView.js", ln: 763 }) } }

    function p(e) {
        try {
            return e.isImportant ? 'class="important"' : "" } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/siteView.js", ln: 771 }) } }

    function m(e) {
        try {
            return e = C.trim(e), /^.+:\/\/.*$/i.test(e) || (e = "http://" + e), e = e.replace(/^(.+:\/\/)([^\/?]+)(.*)$/, function(e, t, i, n) {
                try {
                    return /^(https?|ftp)/i.test(t) ? t.toLowerCase() + i.toLowerCase() + n : "http://" + i.toLowerCase() + n } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/site/siteView.js", ln: 785 }) } }), e = e.replace(/^(.+:\/\/[^\/?]+)[\/?]$/, "$1"), e = e.replace(/\x3c/g, "").replace(/\x3E/g, "").replace(/\x22/g, "").replace(/\x27/g, "") } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteView.js", ln: 791 }) } }

    function f(e) {
        try {
            if (e) {
                var t = parseInt("0" + e.split(".")[0], 10);
                return "http://sc" + (t % 2 + 1) + "." + E.iconBaseUrl + e }
            return E.defaultIconUrl } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/siteView.js", ln: 800 }) } }

    function x(e) {
        try {
            return V(C.trim(e).replace(/^(.+:\/\/[^\/?]+)[\/?]$/, "$1")) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteView.js", ln: 804 }) } }

    function y(e) {
        try {
            return e.length < 6 ? "" : v(e) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteView.js", ln: 811 }) } }

    function w(e) {
        try {
            for (var t = 80, i = 0, n = 0; n < e.length; n++)
                if (i += /\w/.test(e.charAt(n)) ? 8 : 14, i > t) { e = e.substring(0, n) + "...";
                    break }
            return e } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/site/siteView.js", ln: 829 }) } }

    function v(e) {
        try {
            return e = w(C.trim(e), 60), 2 === e.length ? e = e.charAt(0) + "&#12288;" + e.charAt(1) : 3 === e.length && (e = e.charAt(0) + " " + e.charAt(1) + " " + e.charAt(2)), V(e) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteView.js", ln: 839 }) } }

    function j(e) {
        try {
            return e.replace("&#12288;", "").replace(/ /g, "").replace("　", "") } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteView.js", ln: 843 }) } }

    function V(e) {
        try {
            return e.replace(/\x3c/g, "&lt;").replace(/\x3E/g, "&gt;").replace(/\x22/g, "&quot;").replace(/\x27/g, "&#39;") } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteView.js", ln: 847 }) } }

    function A(e, t) {
        try {
            return e && t ? e.replace(/(.*)\/$/, "$1").toLowerCase() === t.replace(/(.*)\/$/, "$1").toLowerCase() : !1 } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/siteView.js", ln: 854 }) } }
    var b, _, N = s,
        S = a,
        k = o,
        C = r,
        E = c,
        U = h,
        P = "data-id",
        I = "data-style",
        H = "data-status",
        $ = E.jsItem,
        D = "6000.png",
        L = null,
        M = "js_recommend item item-normal",
        T = "item item-added",
        O = "item-added",
        q = null,
        B = { onSecondAdd: function(e) {
                try { b.bd.find(".js_item-add").before(C(k(E.tpl.item, { id: e.id, name: v(e.name), url: x(e.url), icon: HAO.httpsTrans(f(e.icon)), title: y(e.name), status: e.status }))).remove(), this._addAddBtn() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteView.js", ln: 51 }) } }, _getPosition: function(e) {
                try {
                    for (var t = 0, i = 0; e && !C(e).hasClass("popup-site");) t += e.offsetLeft, i += e.offsetTop, e = e.offsetParent;
                    return { left: t, top: i - 34 } } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/site/siteView.js", ln: 73 }) } }, on517: function() {
                try { l(), b.modify.hide(), b.add.show() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/siteView.js", ln: 79 }) } }, clearHint: function() {
                try { b.hintSug.hide(), b.hintSave.hide(), b.hintNoicon.hide(), b.hintAdded.hide() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/siteView.js", ln: 87 }) } }, onImported: function(e) {
                try {
                    var t = b.psite;
                    if (t.is(":visible")) { _.updatePopup(e), _.clearError(), l();
                        var i = {};
                        C.each(e, function() {
                            try { i[this.url] = this.id } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/siteView.js", ln: 100 }) } }), C(".item", t).each(function() {
                            try {
                                var e = this.href.replace(/(.*)\/$/, "$1"),
                                    t = i[e];
                                t && (this.className = T, this.setAttribute(P, t)) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/site/siteView.js", ln: 109 }) } }) } else this.update(e) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/site/siteView.js", ln: 113 }) } }, onAddedClick: function(e) {
                try { _._recoverAdded(e.href), l(), b.modify.hide(), b.add.show();
                    var t = e.getAttribute(P);
                    return C($, b.sites).each(function() {
                        try {
                            if (this.getAttribute(P) === t) return C(this).remove(), !1 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/siteView.js", ln: 126 }) } }), this.clearError(), b.hintNoicon.hide(), b.hintAdded.hide(), b.hintSave.hide(), b.hintSug.hide(), b.recover.show(), t } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/siteView.js", ln: 135 }) } }, onAddedItemOut: function() {
                try { b.hintNoicon.hide() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/siteView.js", ln: 139 }) } }, onAddedItemOver: function(e) {
                try { b.hintAdded.hide(), b.hintNoicon.show(_._getPosition(e), { text: E.adddedText }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteView.js", ln: 144 }) } }, onItemClick: function(e) {
                try {
                    var t = C.trim(e.innerHTML),
                        i = e.getAttribute("href", 2);
                    return t && C.trim(i) ? (q = e, { name: t, url: m(i), type: e.getAttribute("data-type") }) : !1 } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/site/siteView.js", ln: 160 }) } }, onFirsted: function(e) {
                try { C($, b.sites).each(function() {
                        try { this.setAttribute(P, e[this.getAttribute(P)]) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteView.js", ln: 165 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteView.js", ln: 166 }) } }, onRecovered: function(e) {
                try { b.noDataHint.hide(), b.recover.hide(), b.saveForeverHint.hide(), _.updatePopup(e), C("." + O, b.cms).each(function() {
                        try { this.className = M } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/siteView.js", ln: 176 }) } });
                    var t = {};
                    C.each(e, function() {
                        try { t[this.url] = !0 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/siteView.js", ln: 182 }) } }), this.clearError(), l(), b.add.show(), b.modify.hide(), b.hintAdded.hide() } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/siteView.js", ln: 190 }) } }, onSorted: function() {
                try {
                    var e = [];
                    return b.recover.show(), C($, b.sites).each(function() {
                        try {
                            var t = this.getAttribute(P);
                            C.trim(t) && e.push(t) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/siteView.js", ln: 200 }) } }), e } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteView.js", ln: 203 }) } }, onCred: function(e) {
                try {
                    var t = [],
                        i = b.cms.empty();
                    S.get("stip0") ? S.get("stip1") ? b.tipDel.hide() : b.tipDel.show() : i.html(E.tpl.tipTpl), S.get("stip2") || b._tipsave ? b.tipSave.hide() : b.tipSave.show(), b._tipsave2 = !0, C.each(e.data.cms, function() {
                        try {
                            var e = this;
                            e.isTitle ? (i.append(k(E.tpl.cms, { name: e.name, content: t.join("") })), t = []) : t.push(k(E.tpl.cmsContent, { className: e.isAdded ? T : M, name: e.name, url: e.url, id: e.id, itemStyle: p(e) })) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/site/siteView.js", ln: 245 }) } }) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/site/siteView.js", ln: 246 }) } }, onItemModifyClick: function(e) {
                try { b.modify.show(), b.add.hide();
                    var t = C(e);
                    L = t, b.sugName.get(0).focus(), g(t.data("name")), u(t.data("url")), _.clearError() } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/siteView.js", ln: 259 }) } }, _recoverAdded: function(e) {
                try { C("." + O, b.psite).each(function() {
                        try {
                            var t = this;
                            A(e, t.href) && (t.className = M) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/siteView.js", ln: 272 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteView.js", ln: 273 }) } }, onItemDeleteClick: function(e) {
                try { C("." + O, b.psite).each(function() {
                        try {
                            var t = this.getAttribute(P);
                            if (t && t === e.getAttribute(P)) return _._recoverAdded(this.href), !1 } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/siteView.js", ln: 282 }) } }), C(e).remove(), b.recover.show(), l(), b.add.show(), b.hintAdded.hide(), b.modify.hide(), C(".js_site-item", b.sites).length || (b.noDataHint.show(), b.sites.hide()) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteView.js", ln: 296 }) } }, onAdded: function(e) {
                try { b.noDataHint.hide(), b.hintSave.hide(), b.recover.show(), b.sites.show().append(k(E.tpl.editItem, { id: e.id, url: x(e.url), name: v(e.name), rawName: e.name, status: e.status || "" })), l(), e.type && (b.hintAdded.show(_._getPosition(q), { text: E.addedText }), q = null), C(".js_recommend", b.psite).each(function() {
                        try { A(this.getAttribute("href", 2), e.url) && (this.className = T, this.setAttribute(P, e.id)) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteView.js", ln: 322 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteView.js", ln: 323 }) } }, onModified: function(e) {
                try { b.add.show(), b.recover.show(), b.modify.hide(), L.before(C(k(E.tpl.editItem, { id: e.id, url: x(e.url), name: v(e.name), rawName: e.name, status: e.status || "" }))).remove(), l(), C(".item-added", b.psite).each(function() {
                        try { A(_.href, L.data("url")) && (this.className = M) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/siteView.js", ln: 344 }) } }), L = null } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteView.js", ln: 347 }) } }, onAddClick: function() {
                try {
                    return this._check() ? (this.clearError(), { name: C.trim(b.sugName.val()), url: m(b.sugUrl.val()) }) : !1 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/siteView.js", ln: 360 }) } }, onModifyClick: function() {
                try {
                    return this._check() ? (this.clearError(), { name: C.trim(b.sugName.val()), url: m(b.sugUrl.val()), id: L.attr(P) }) : !1 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/siteView.js", ln: 374 }) } }, init: function(e) {
                try { b = e, _ = this;
                    var t = [_.sugNamePlaceholder = C("#js_placeholder-name"), _.sugUrlPlaceholder = C("#js_placeholder-url")];
                    C.each([b.sugName, b.sugUrl], function(e) {
                        try { this.on("focus keydown", function() {
                                try { t[e].hide() } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/siteView.js", ln: 388 }) } }), this.blur(function() {
                                try { this.value || t[e].show() } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/siteView.js", ln: 394 }) } }) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/siteView.js", ln: 395 }) } }), b.isLanding && b.save.hide() } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/siteView.js", ln: 400 }) } }, onManageClick: function(e, t) {
                try {
                    var i = b.recover;
                    e ? i && i.show() : i && i.hide(), l(), t ? _.showSaveMessage() : b.saveForeverHint.hide() } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/site/siteView.js", ln: 416 }) } }, showSaveMessage: function() {
                try {
                    if (S.get(b.saveHintCookie)) return;
                    b.saveForeverHint.show(), b._tipsave = !0, b._tipsave2 && b.tipSave.hide() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/siteView.js", ln: 427 }) } }, getSiteData: function() {
                try {
                    var e = [],
                        t = this;
                    return C($, b.bd).each(function() {
                        try {
                            var i = this,
                                n = i.children[0],
                                s = { id: i.getAttribute(P), name: j(n.getAttribute("data-title")), url: n.getAttribute("href", 2), status: i.getAttribute(H), icon: t._getIcon(n), style: i.getAttribute(I) },
                                a = C(i).children("a").eq(1);
                            a.length && (s.name2 = a.text(), s.url2 = a.attr("href")), e.push(s) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/site/siteView.js", ln: 452 }) } }), e } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/siteView.js", ln: 454 }) } }, _getIcon: function(e) {
                try {
                    var t = e.parentNode.getAttribute("data-icon");
                    if (t) return t;
                    var i = e.style.backgroundImage;
                    return i ? i.match(/^.*\/([^)]+)/)[1] : D } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/site/siteView.js", ln: 475 }) } }, update: function(e) {
                try {
                    if (!e.length) return void b.bd.html(E.tpl.noData);
                    var t = [];
                    C.each(e, function() {
                        try {
                            var e, i = this;
                            e = 1 === parseInt(i.status, 10) && i.name2 ? k(E.tpl.subitem, { id: i.id, url: x(i.url), icon: HAO.httpsTrans(f(i.icon)), name: i.name, subName: i.name2, subUrl: i.url2, "class": "site-item-hassub" }) : k(E.tpl.item, { id: i.id, name: v(i.name), url: x(i.url), icon: HAO.httpsTrans(f(i.icon)), title: y(i.name), status: i.status, style: i.style }), t.push(e) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/site/siteView.js", ln: 512 }) } }), b.bd.html(t.join("")), this._addAddBtn(), b.add.show(), b.modify.hide(), l() } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/siteView.js", ln: 520 }) } }, _addAddBtn: function() {
                try {
                    var e = b.bd.find(".js_site-item").length;
                    if (6 === e) return;
                    e % 6 === 0 || b.bd.append(k(E.tpl.addNormalBtn)) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteView.js", ln: 550 }) } }, updatePopup: function(e) {
                try {
                    var t = [];
                    C.each(e, function() {
                        try {
                            var e = this;
                            t.push(k(E.tpl.editItem, { id: e.id, url: x(e.url), name: v(e.name), rawName: e.name, status: e.status || "" })) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/siteView.js", ln: 565 }) } }), t.length ? (b.noDataHint && b.noDataHint.hide(), b.sites && b.sites.html(t.join("")).show()) : (b.noDataHint && b.noDataHint.show(), b.sites && b.sites.hide()) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/siteView.js", ln: 574 }) } }, initSug: function() {
                try {
                    var e = this,
                        t = "sitesuggest";
                    b.sugName.suggest({ classes: "suggest-site", eventSpace: t }).suggest("handler", e._nssug).on("suggestinput", function() {
                        try {
                            if (C.trim(b.sugUrl.val())) return !1 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/siteView.js", ln: 587 }) } }), b.sugUrl.suggest({ classes: "suggest-site", eventSpace: t }).suggest("handler", e._nssug).on("suggestinput", function() {
                        try {
                            if (C.trim(b.sugName.val())) return !1 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/siteView.js", ln: 596 }) } }), N.on(t + ".change", function(e) {
                        try {
                            return e.index ? (g(e.data[0]), u(e.data[1]), !1) : !0 } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteView.js", ln: 606 }) } }), N.on(t + ".submit", function() {
                        try {
                            return "none" !== b.add.get(0).style.display ? b.add.click() : b.modify.click(), !1 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/siteView.js", ln: 615 }) } }) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/siteView.js", ln: 616 }) } }, _nssug: U("superpage", { sc: "hao123" }, function(e) {
                try {
                    var t = this,
                        i = e.s,
                        n = i.length;
                    if (!n) return void t.hide();
                    var s = {},
                        a = e.q;
                    t.clear();
                    for (var o = 0, r = 0; n > o && 5 > r; o++) {
                        var c, d = C.parseJSON(i[o].split("0{#S+_}")[1]);
                        if (d && (c = d[4])) {
                            var h = d[1] || "";
                            s[c] || (r++, s[c] = !0, t.add(c, k('<span class="name">#{title}</span><span class="url">#{text}</span>', { title: c.replace(a, "<strong>" + a + "</strong>"), text: h.replace(a, "<strong>" + a + "</strong>") }), [c, h])) } }
                    t.show() } catch (l) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: l.message || l.description, path: "indexher:container/module/site/siteView.js", ln: 658 }) } }), clearError: function() {
                try { b.sugName.removeClass(E.css.sugError), b.sugUrl.removeClass(E.css.sugError), b.hintSug.hide() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/siteView.js", ln: 664 }) } }, showError: function(e) {
                try {
                    switch (e) {
                        case 515:
                        case 512:
                            b.hintSug.show(_._getPosition(b.sugName.get(0)), { text: E.error[e] }), b.sugName.addClass(E.css.sugError).get(0).focus(), b.sugUrl.removeClass(E.css.sugError);
                            break;
                        case 516:
                        case 513:
                        case 501:
                            b.hintSug && (b.hintSug.show(_._getPosition(b.sugUrl.get(0)), { text: E.error[e] }), b.sugUrl.addClass(E.css.sugError).get(0).focus(), b.sugName.removeClass(E.css.sugError));
                            break;
                        case 514:
                            b.hintSave.show(_._getPosition(b.sugUrl.get(0)), { text: E.error[e] });
                            break;
                        case 507:
                        case 599:
                        case 588:
                        case 900:
                        case 500:
                            break;
                        case 600:
                        case 601:
                        case 602:
                        case 603:
                            b.hintSug.show(_._getPosition(b.sugUrl.get(0)), { text: "出现错误，请稍侯重试！" });
                            break;
                        default:
                            b.hintSave && b.hintSave.show(_._getPosition(b.sugUrl.get(0)), { text: E.error[e] }) } } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteView.js", ln: 703 }) } }, _check: function() {
                try {
                    var e = this,
                        t = C.trim(b.sugName.val()),
                        i = C.trim(b.sugUrl.val());
                    return t ? i.length <= 0 || /^(https?:\/\/|ftp:\/\/)$/i.test(i) ? e.showError(516) : t.length > E.nameMaxLength ? e.showError(512) : i.length > E.urlMaxLength ? e.showError(513) : (e.clearError(), !0) : e.showError(515) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/site/siteView.js", ln: 737 }) } } };
    t.exports = B });;
define("indexher:container/module/site/siteModel.js", ["global", "module", "exports", "require", "indexher:static/js/events.js", "indexher:static/js/cookie.js", "indexher:static/js/login.js", "indexher:static/js/config.js", "indexher:static/js/jquery.js", "indexher:container/module/site/config.js"], function(e, t, i, n, o, a, c, s, d, r) {
    function l() {
        try {
            var e = u();
            return e && { key: h(), c: e } || null } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteModel.js", ln: 22 }) } }

    function h() {
        try {
            return +new Date } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/siteModel.js", ln: 26 }) } }

    function u() {
        try {
            var e = y.getCSRFId();
            return e && encodeURIComponent(e) || null } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteModel.js", ln: 31 }) } }

    function p(e) {
        try {
            if (1 === parseInt(j.get("tnuser"), 10)) {
                var t = location.search.match(/[?&](tn=[^&<>'"]+)/);
                e += 0 / 0 + t[1] }
            return e } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/siteModel.js", ln: 347 }) } }

    function g(e) {
        try {
            if (!e) return;
            for (var t = k.length; t--;) {
                var i = k[t];
                i.id = e[i.id], i.style = "" } } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/site/siteModel.js", ln: 362 }) } }

    function f(e) {
        try {
            return e.replace(/(.*)\/$/, "$1").toLowerCase() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteModel.js", ln: 366 }) } }
    var m = o,
        y = a,
        x = c,
        j = s,
        M = d,
        v = r,
        I = v.url,
        k = [],
        D = { setData: function(e) {
                try { k = e } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteModel.js", ln: 38 }) } }, checkLimit: function(e) {
                try {
                    return e && this.getItemById(e).status + "" == "" + v.guestStatus || this.getUserDataCount() < v.guestMaxLength ? 0 : 517 } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteModel.js", ln: 48 }) } }, getUserDataCount: function() {
                try {
                    for (var e = 0, t = k.length, i = "" + v.guestStatus; t--;) k[t].status + "" === i && e++;
                    return e } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/site/siteModel.js", ln: 61 }) } }, getData: function() {
                try {
                    return k } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/siteModel.js", ln: 65 }) } }, checkIsShowSave: function() {
                try {
                    return x.isLogin() || this.getUserDataCount() < v.showSaveMax ? !1 : !0 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/siteModel.js", ln: 73 }) } }, checkIsShowRecover: function() {
                try {
                    return !k.length || k[0].id > 500 ? !0 : !1 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/siteModel.js", ln: 81 }) } }, checkFull: function() {
                try {
                    return k.length >= v.siteMaxlength ? 514 : 0 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/siteModel.js", ln: 89 }) } }, checkAddDuplicate: function(e) {
                try {
                    for (var t = k.length; t--;)
                        if (k[t].url === e) return 501;
                    return 0 } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/siteModel.js", ln: 99 }) } }, checkModifyDuplicate: function(e) {
                try {
                    var t = e.url;
                    return t === this.getItemById(e.id).url ? 0 : this.checkAddDuplicate(t) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/siteModel.js", ln: 108 }) } }, init: function(e) {
                try { k = e } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteModel.js", ln: 112 }) } }, getModifyItem: function(e) {
                try {
                    return this.getItemById(e) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteModel.js", ln: 116 }) } }, getItemById: function(e) {
                try {
                    var t = k.length;
                    for (e = "" + e; t--;) {
                        var i = k[t];
                        if (i.id + "" === e) return i } } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/site/siteModel.js", ln: 127 }) } }, deleteItemById: function(e) {
                try {
                    for (var t = k.length; t--;) k[t].id + "" == e + "" && k.splice(t, 1) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/siteModel.js", ln: 136 }) } }, getUser: function() {
                try {
                    var e = l();
                    M.ajax({ url: I.user, success: function(e) {
                            try {
                                switch (e.code) {
                                    case 200:
                                        m.emit("getUser", { userName: e.name, code: 200 });
                                        break;
                                    default:
                                        m.emit("getUser", { userName: "", code: e.code }) } } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteModel.js", ln: 150 }) } }, error: function() {
                            try { m.emit("getUser", { userName: "", code: "900" }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/siteModel.js", ln: 153 }) } }, data: e, dataType: "json", type: "GET" }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteModel.js", ln: 158 }) } }, sort: function(e) {
                try { M.post(I.sort, M.extend({ ids: e }, l()), function(e) {
                        try {
                            switch (m.emit("operated"), e.code) {
                                case 201:
                                    g(e.data.map), m.emit("firsted", e.data.map);
                                    break;
                                default:
                                    m.emit("error", { code: e.code, src: "sort" }) } } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteModel.js", ln: 171 }) } }, "json") } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteModel.js", ln: 172 }) } }, recover: function() {
                try { M.getJSON(I.recover, l(), function(e) {
                        try {
                            switch (e.code) {
                                case 200:
                                    k = e.data.sites, m.emit("recovered", e.data.sites);
                                    break;
                                default:
                                    m.emit("error", { code: e.code, src: "recover" }) } } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteModel.js", ln: 184 }) } }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/siteModel.js", ln: 185 }) } }, add: function(e) {
                try {
                    var t = D.checkAddDuplicate(e.url);
                    if (t > 0) return void m.emit("error", { code: t, src: "feadd" });
                    e.key = h(), M.post(I.add, M.extend(e, l()), function(t) {
                        try {
                            switch (m.emit("operated"), t.code) {
                                case 201:
                                    g(t.data.map), m.emit("firsted", t.data.map);
                                case 200:
                                    var i = { isRecommend: e.isRecommend, icon: t.data.icon, name: e.name, url: e.url, id: t.data.id, status: t.data.status, type: e.type, obj: e.obj };
                                    k.push(i), m.emit("added", i);
                                    break;
                                default:
                                    var n = "add";
                                    e.isSynadd && (n = "synadd"), m.emit("error", { code: t.code, src: n }) } } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/site/siteModel.js", ln: 227 }) } }, "json") } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/siteModel.js", ln: 228 }) } }, doDelete: function(e) {
                try { M.getJSON(I.doDelete, M.extend({ id: e }, l()), function(t) {
                        try {
                            switch (m.emit("operated"), t.code) {
                                case 201:
                                    D.deleteItemById(e), g(t.data.map), m.emit("firsted", t.data.map), m.emit("delete");
                                    break;
                                case 200:
                                    D.deleteItemById(e), m.emit("delete");
                                    break;
                                default:
                                    m.emit("error", { code: t.code, src: "del" }) } } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/siteModel.js", ln: 251 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteModel.js", ln: 252 }) } }, modify: function(e) {
                try {
                    var t = D.checkModifyDuplicate(e);
                    if (t > 0) return void m.emit("error", { code: t, src: "femodify" });
                    var i = this;
                    M.post(I.modify, M.extend(e, l()), function(t) {
                        try { m.emit("operated");
                            var n = t.data;
                            switch (t.code) {
                                case 201:
                                    var o = n.map;
                                    g(o), m.emit("firsted", o);
                                case 200:
                                    var a = n.oldid,
                                        c = i.getItemById(201 === t.code ? t.data.map[a] : a);
                                    c.name = e.name, c.url = e.url, c.id = n.id, c.status = n.status, c.icon = n.icon;
                                    break;
                                default:
                                    m.emit("error", { code: t.code, src: "modify" }) } } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/site/siteModel.js", ln: 286 }) } }, "json") } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/site/siteModel.js", ln: 287 }) } }, sortData: function(e) {
                try {
                    var t = {};
                    return M.each(k, function() {
                        try { t[this.id] = this } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/siteModel.js", ln: 294 }) } }), k = [], M.each(e, function() {
                        try { k.push(t[this]) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/siteModel.js", ln: 299 }) } }), k } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/siteModel.js", ln: 302 }) } }, getCRdata: function() {
                try {
                    var e = l();
                    e.n = 6;
                    var t = {};
                    M.each(k, function() {
                        try { t[f(this.url)] = this.id } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/siteModel.js", ln: 311 }) } }), document.URL.indexOf("sitepopuppreview") > 0 && (e.preview = 1), M.ajax({ url: p(I.cr), success: function(e) {
                            try { M.each(e.data.cms, function() {
                                    try {
                                        if (!this.isTitle) {
                                            var e = t[f(this.url)];
                                            this.isAdded = !!e, this.id = e } } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/siteModel.js", ln: 326 }) } }), m.emit("cred", e) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/siteModel.js", ln: 328 }) } }, error: function() {
                            try { m.emit("error", { code: 599, src: "cr" + arguments[1] + arguments[2] }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/siteModel.js", ln: 331 }) } }, data: e, dataType: "json", type: "GET" }) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/siteModel.js", ln: 336 }) } } };
    t.exports = D });;
define("indexher:container/module/site/siteResource.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/format.js", "indexher:static/js/animation.js"], function(e, t, i, r, s, n, o) {
    function a(e, t) {
        try {
            var i, r = ["-3 -4", "-28 -4", "-53 -4", "-78 -4", "-103 -4", "-128 -4", "-153 -4", "-178 -4", "-203 -4", "-228 -4", "-253 -4", "-328 -4", "-353 -4", "-403 -4", "-353 -4", "-328 -4", "-253 -4", "-228 -4", "-203 -4", "-178 -4", "-153 -4", "-128 -4", "-103 -4", "-78 -4", "-53 -4", "-28 -4", "-3 -4"],
                s = ["-5 -5", "-30 -5", "-55 -5", "-80 -5", "-105 -5", "-130 -5", "-155 -5", "-180 -5", "-205 -5", "-230 -5", "-255 -5", "-330 -5", "-255 -5", "-230 -5", "-205 -5", "-180 -5", "-155 -5", "-130 -5", "-105 -5", "-80 -5", "-55 -5", "-30 -5", "-5 -5"]; "wide" === t ? i = r : "narrow" === t && (i = s), i && u().changePosition(e, i).start(100) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/site/siteResource.js", ln: 90 }) } }
    var c = s,
        d = n,
        u = o,
        l = "mzzywtitle",
        h = "mzzywurl",
        p = '<a hidefocus="true" data-hook="siteresource-link" href="#{url}" title="#{title}" class="siteresource-link">#{title}</a>',
        f = '<div data-hook="siteresource-tip" class="g-ib siteresource-tip"></div>',
        m = 6,
        g = { addResource: function(e, t, i, r) {
                try {
                    var s = g.createDom(e, t, i),
                        n = g.createTip(),
                        o = c(this).parent().append(s).append(n);
                    a(n[0], r), g.bindEvents(s, n, o) } catch (d) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: d.message || d.description, path: "indexher:container/module/site/siteResource.js", ln: 101 }) } }, bindEvents: function(e, t, i) {
                try {
                    var r = "";
                    r = e.hasClass("resource-container-right") ? "resourcelink-bg" : "resourcelink-bg-left", i.mouseleave(function(i) {
                        try { c(this).hasClass(r) && (e.hide(), c(this).removeClass(r), t.show()) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/siteResource.js", ln: 117 }) } }), t.mouseover(function() {
                        try { e.show(), i.addClass(r), c(this).hide() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/siteResource.js", ln: 123 }) } }) } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/site/siteResource.js", ln: 124 }) } }, createTip: function() {
                try {
                    return c(f) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/siteResource.js", ln: 129 }) } }, createDom: function(e, t, i) {
                try {
                    if (!e.mzzyw) return;
                    var r, s = parseInt(e.mzzyw, 10),
                        n = c(document.createElement("div")),
                        o = "resource-container ",
                        a = Math.floor(t / m);
                    (t + 1) % m || (o += "resource-container-right resource-container-right" + a + " "), o += "resource-container-r" + a + " ";
                    for (var u = 1; s >= u; u++) { r = 1 === u ? "siteresource-firstlink siteresource-link1" : u === s ? "siteresource-lastlink siteresource-link3" : "siteresource-link2", "mz" === i && a + 1 === u && (r += " siteresource-curlink");
                        var f = c(d(p, { url: e[h + u], title: e[l + u] })).addClass(r);
                        n.append(f).addClass(o).attr("monkey", "siteresource_container") }
                    return n } catch (g) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: g.message || g.description, path: "indexher:container/module/site/siteResource.js", ln: 172 }) } } };
    t.exports = { add: g.addResource } });;
define("indexher:container/module/popup/alert.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/widget.js", "indexher:container/module/popup/base.js"], function(e, t, o, i, n, a, s) {
    var r = n;
    r.widget("hao123.alert", r.lottery.popup, { options: { className: "popup-alert", isModel: !0, okText: "确定" }, _create: function() {
            try {
                var e = this,
                    t = e.options,
                    o = e.element;
                e._baseCreate(), r(".js_title", o).html(t.title), r(".js_text", o).html(t.text), r(".js_close", o).click(function() {
                    try {
                        return e._baseHide(), !1 } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/popup/alert.js", ln: 38 }) } }), r(".js_ok", o).click(function() {
                    try { e._baseHide(), e._trigger("ok") } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/popup/alert.js", ln: 43 }) } }).text(e.options.okText) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/popup/alert.js", ln: 44 }) } }, show: function() {
            try { this._baseShow() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/popup/alert.js", ln: 48 }) } } }) });;
define("indexher:container/module/popup/confirm.js", ["global", "module", "exports", "require", "indexher:container/module/popup/base.js", "indexher:static/js/jquery.js", "indexher:static/js/widget.js"], function(e, t, o, i, n, c, r) {
    var a = c;
    a.widget("hao123.confirm", a.lottery.popup, { options: { className: "popup-confirm", isModel: !0, okText: "确定" }, _create: function() {
            try {
                var e = this,
                    t = e.element,
                    o = e.options;
                e._baseCreate(), a(".js_title", t).html(o.title), a(".js_text", t).html(o.text), a(".js_close", t).click(function() {
                    try {
                        return e._baseHide(), e._trigger("close"), !1 } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/popup/confirm.js", ln: 40 }) } }), a(".js_ok", t).click(function() {
                    try { e._baseHide(), e._trigger("ok") } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/popup/confirm.js", ln: 45 }) } }).text(o.okText), a(".js_cancel", t).click(function() {
                    try { e._baseHide(), e._trigger("cancel") } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/popup/confirm.js", ln: 50 }) } }) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/popup/confirm.js", ln: 51 }) } }, show: function() {
            try { this._baseShow() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/popup/confirm.js", ln: 55 }) } } }) });;
define("indexher:container/module/site/site.js", ["global", "module", "exports", "require", "indexher:static/js/events.js", "indexher:static/js/cookie.js", "indexher:static/js/config.js", "indexher:static/js/profile.js", "indexher:static/js/adjust.js", "indexher:static/js/timeHint.js", "indexher:static/js/browser.js", "indexher:static/js/login.js", "indexher:static/js/jquery.js", "indexher:static/js/widget.js", "indexher:container/module/popup/getTpl.js", "indexher:container/module/popup/mask.js", "indexher:container/module/popup/confirm.js", "indexher:container/module/popup/alert.js", "indexher:container/module/site/siteResource.js", "indexher:container/module/site/siteModel.js", "indexher:container/module/site/config.js", "indexher:container/module/site/siteView.js", "indexher:container/module/site/log.js", "indexher:container/module/site/drag.js"], function(e, t, i, n, o, s, a, c, r, d, l, p, h, g, u, f, m, x, y, j, v, _, w, k) {
    function b(e) {
        try {
            return e && "/" === e.substr(-1) ? e.substr(0, e.length - 1) : e } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 43 }) } }
    var C, P = o,
        S = s,
        A = a,
        I = c,
        M = r.adjust,
        N = d,
        T = l,
        D = p,
        F = h,
        H = u,
        L = f,
        z = y,
        E = j,
        O = v,
        R = _,
        q = w,
        U = k,
        Q = !1;
    F.widget("hao123.site", { _create: function() {
            try { q(this.element) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/site.js", ln: 54 }) } }, _initTask: function() {
            function e() {
                try { S.set(t, 1, { expires: 0 }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/site.js", ln: 83 }) } }
            try {
                var t, i = this,
                    n = window.location.search.match(/\?key=([^<>&]+)&taskid=5/);
                n && n[1] && (i.isTask = !0, t = n[1], i._onManageClick(), P.on("added", e), P.on("modified", e), P.on("delete", e)) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/site/site.js", ln: 84 }) } }, _init: function() {
            try { C = this;
                var e = C.element;
                C.config = O;
                var t = A.get("userinfo");
                C.iscuser = t.iscuser, C.newStyle = !1, C.retried = 0, C.isFromTopLogin = !1, C.view = R, C.model = E, C.confirmPopup = F(H("confirm")).confirm({ title: O.confirmTitle, text: O.confirmText }), C.recoverPopup = F(H("confirm")).confirm({ title: O.recoverTitle, text: O.recoverText }), C.alertPopup = F(H("alert")).alert({ title: O.alertTitle, text: O.alertText }), C.loading = F("div.popup-site-loading", e), C.popContent = F("div.popup-site-content", e), C.manage = F("div.js_manage", e), C.add = F("a.js_psite-add", e), C.modify = F("a.js_psite-modify", e), C.psite = F("div.js_psite", e), C.sugName = F("#js_sug-name"), C.sugUrl = F("#js_sug-url"), C.save = F("a.js_psite-save", e), C.saveForeverHint = F("a.js_hint-saveForever", e), C.bd = F("ul.js_bd", e), C.dash = F("<li></li>"), C.context = F("#popup-site-holder"), C.psite.appendTo(C.context), C._bind(), Q || (C._eventBind(), Q = !0), C.init(), C.saveHintCookie = "site_shave_hint", F(function() {
                    try {
                        var e = 0;
                        F("li", C.bd).each(function(t, i) {
                            try {
                                if ("0" === i.getAttribute("data-status")) return e = 1, !1 } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/site/site.js", ln: 158 }) } }), C._trigger("rp", null, { iszdyuser: C.iscuser, isrpuser: e }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 164 }) } }); { F(".site-hd0", C.element) }
                C._initTask() } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/site.js", ln: 168 }) } }, _calAlogCustom: function(e) {
            try {
                var t = "",
                    i = e.split(","),
                    n = i.length;
                if (1 === n) t = "ind:" + i[0];
                else if (2 === n) {
                    var o = i[1];
                    o = "y" === o ? 1 : "n" === o ? 0 : "", t = "ind:" + i[0] + ",sal:" + o }
                return t } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/site/site.js", ln: 197 }) } }, init: function() {
            try {
                var e = this,
                    t = A.get("userinfo");
                e.isLanding = t.islanding, e.userName = t.username, e.isLanding && (e._trigger("defaultlogin", null), e.userName || e.model.getUser()); { e.view.init(e) }
                e.model.init(e.view.getSiteData()), this._ajust(), this._delete1(), this._delete2() } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/site.js", ln: 223 }) } }, _initPopupVariable: function() {
            try {
                var e = this,
                    t = e.context;
                e.close = F(".js_psite-close", t), e.sites = F(".js_psite-sites", t), e.cms = F(".js_psite-cms", t), e.recover = F(".js_psite-recover", t), e.sug = F(".js_psite-sug", t), e.tipDel = F(".popup-site-tip-del", t), e.tipSave = F(".popup-site-tip-save", t), e.hintSug = new N(F(".js_hint-sug", t)), e.hintAdded = new N(F(".js_hint-added", t)), e.hintNoicon = new N(F(".js_hint-noicon", t)), e.hintSave = new N(F(".js_hint-save", t), 6e3), e.noDataHint = F(".js_nodata-hint", t), e.blink = F(".popup-site-blink", t) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/site.js", ln: 249 }) } }, _initPopupPopup: function() {
            try {
                var e = this;
                e.confirmPopup.bind("confirmok", function() {
                    try { D.show(function() {
                            try { F.getJSON("/api/getprof", { c: S.getCSRFId(), key: +new Date }, function() {
                                    try { window.location.href = window.location.href } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/site.js", ln: 264 }) } }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/site.js", ln: 265 }) } }), e._hidePsite() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 268 }) } }), e.confirmPopup.bind("confirmcancel confirmclose", function() {
                    try { e._showPopup() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 272 }) } }), e.recoverPopup.bind("confirmok", function() {
                    try { e.model.recover() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 276 }) } }), e.recoverPopup.bind("confirmcancel confirmclose", function() {
                    try { e._showPopup() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 280 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 281 }) } }, _initPopupEvent: function() {
            try {
                var e = this;
                e.save.click(function() {
                    try {
                        return L.hide(), e._hidePsite(), D.show(function() {
                            try { F.getJSON("/api/getprof", { c: S.getCSRFId(), key: +new Date }, function() {
                                    try { window.location.href = window.location.href } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/site.js", ln: 300 }) } }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/site.js", ln: 301 }) } }), e.saveForeverHint.hide(), !1 } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 305 }) } }), e.saveForeverHint.click(function() {
                    try { S.set(e.saveHintCookie, 1), e.saveForeverHint.hide(), S.get("stip2") || e.tipSave.show() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 315 }) } }), e.psite.on("mouseover", ".item-added", function() {
                    try { e.view.onAddedItemOver(this) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 319 }) } }), e.psite.on("mouseout", ".item-added", function() {
                    try { e.view.onAddedItemOut(this) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 323 }) } }), e.psite.on("click", ".js_recommend", function() {
                    try {
                        if (e._showTip(), !e._checkAdd()) return !1;
                        var t = e.view.onItemClick(this);
                        return t && e.model.add(t), !1 } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/site.js", ln: 338 }) } }), e.psite.on("click", ".js_add-tip-close", function() {
                    try { F(this).parent(".popup-site-tip-add").hide(), S.set("stip0", 1, { expires: 30 }), S.get("stip1") || F(".popup-site-tip-del", e.context).show() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 349 }) } }).on("click", ".js_del-tip-close", function() {
                    try { F(this).parent(".popup-site-tip-del").hide(), S.set("stip1", 1, { expires: 30 }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/site.js", ln: 355 }) } }).on("click", ".js_save-tip-close", function() {
                    try { e.tipSave.hide(), S.set("stip2", 1, { expires: 30 }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 361 }) } }).on("click", ".item-added", function() {
                    try {
                        var t = e.view.onAddedClick(this);
                        return e.model.doDelete(t), e._trigger("dodelete", null, { id: t, url: this.parentNode.getAttribute("data-url"), status: this.parentNode.getAttribute("data-status") }), !1 } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/site.js", ln: 371 }) } }), e.recover.click(function() {
                    try {
                        return e._hidePsite(), e.recoverPopup.confirm("show"), !1 } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 378 }) } }), e.close.click(function() {
                    try {
                        var t = e.view.onSorted();
                        return e.view.clearError(), e.view.update(e.model.sortData(t)), e._delete2(), L.hide(), e._hidePsite(), e._trigger("backclick"), P.emit("close.cywzpopup"), e.tipSave.hide(), S.set("stip2", 1, { expires: 30 }), M(), !1 } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/site.js", ln: 398 }) } }), e.add.click(function() {
                    try {
                        if (e._checkAdd()) {
                            var t = e.view.onAddClick();
                            t && e.model.add(t) }
                        return !1 } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/site.js", ln: 408 }) } }), e.modify.click(function() {
                    try {
                        var t = e.view.onModifyClick();
                        if (!t) return !1;
                        var i = 0;
                        return D.isLogin() || (i = e.model.checkLimit(t.id), 517 !== parseInt(i, 10)) ? i > 0 ? (e.view.showError(i), !1) : (t && e.model.modify(t), !1) : (e.confirmPopup.confirm("show"), e._hidePsite(), e.view.on517(), !1) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/site/site.js", ln: 437 }) } }), e.sites.on("click", ".js_modify", function() {
                    try {
                        return e.view.onItemModifyClick(this.parentNode), !1 } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 442 }) } }).on("click", ".js_delete", function() {
                    try { e._showTip(1), e.view.onItemDeleteClick(this.parentNode);
                        var t = this.parentNode.getAttribute("data-id");
                        return e.model.doDelete(t), e.model.checkIsShowSave() || e.saveForeverHint.hide(), e._trigger("dodelete", null, { id: t, url: this.parentNode.getAttribute("data-url"), status: this.parentNode.getAttribute("data-status") }), !1 } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/site.js", ln: 461 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 462 }) } }, _showTip: function(e) {
            try { e ? (F(".popup-site-tip-del", C.context).hide(), S.set("stip1", 1, { expires: 30 })) : (F(".popup-site-tip-add", C.context).hide(), S.set("stip0", 1, { expires: 30 }), S.get("stip1") || F(".popup-site-tip-del", C.context).show()) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 484 }) } }, _initPopup: function() {
            try {
                var e = this;
                e._initPopupVariable(), e._initPopupPopup(), e._initPopupEvent(), e.siteDrag = new U(e.sites, e.dash), e.siteDrag.dragable(), e.view.initSug(), e.model.getCRdata() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 502 }) } }, _showPopup: function() {
            try {
                var e = this;
                e.psite.show(), L.show() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 512 }) } }, _checkAdd: function() {
            try {
                var e = 0;
                return D.isLogin() || (e = this.model.checkLimit()), e > 0 ? (this.confirmPopup.confirm("show"), this._hidePsite(), !1) : (e = this.model.checkFull(), e > 0 ? (this.view.showError(e), !1) : !0) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 536 }) } }, _hidePsite: function() {
            try { this.view.clearHint(), this.psite.hide() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/site.js", ln: 545 }) } }, _bind: function() {
            try {
                var e = this;
                F(document).bind("getprof", function(t, i) {
                    try {
                        if (i && i.urls) {
                            var n = i.urls;
                            switch (n.code) {
                                case 200:
                                    i = n.data.sites, e.view.onImported(i), e.model.init(i);
                                    break;
                                default:
                                    e._trigger("error", null, { code: n.code + "getrof" }) } } } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 570 }) } }), 6 === parseInt(T.ie, 10) && (this.bd.on("mouseover", ".js_item-add", function() {
                    try { F(this).addClass("site-item-add-hover") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/site.js", ln: 576 }) } }), this.bd.on("mouseout", ".js_item-add", function() {
                    try { F(this).removeClass("site-item-add-hover") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/site.js", ln: 580 }) } })), e.bd.on("click", ".js_item-add", function() {
                    try { e._trigger("intoaddclick"), e._onManageClick() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 586 }) } }).on("click", ".js_no-data", function() {
                    try {
                        return e._onManageClick(), e._trigger("noneaddclick"), !1 } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 591 }) } }).on("mousedown", ".js_text", function(t) {
                    try {
                        var i = F(this).parent();
                        e._trigger("textclick", null, { url: this.href, id: i.data("id"), status: i.data("status") }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 600 }) } }), e.manage.click(function() {
                    try {
                        return e._onManageClick(), !1 } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 605 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 606 }) } }, _eventBind: function() {
            try {
                var e = this;
                P.on("firsted", function(t) {
                    try { e.view.onFirsted(t), I.set("urls", "true") } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/site.js", ln: 618 }) } }), P.on("recovered", function(t) {
                    try { e.view.onRecovered(t), e._showPopup(), I.set("urls", "false"), e._trigger("recovered") } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/site.js", ln: 625 }) } }), P.on("modified", function(t) {
                    try { e.view.onModified(t), e._trigger("modify", null, t) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/site.js", ln: 630 }) } }), P.on("cred", function(t) {
                    try { e.view.onCred(t) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/site.js", ln: 634 }) } }), P.on("sorted", function() {
                    try { e.model.sort(e.view.onSorted().join(",")) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 638 }) } }), P.on("site.update", function(t) {
                    try { e.model.setData(t.data.sites), e.view.update(t.data.sites) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/site.js", ln: 643 }) } }), P.on("site.updatePopup", function(t) {
                    try { e._showPopup(), e.model.setData(t.data.sites), e.view.updatePopup(t.data.sites) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/site.js", ln: 649 }) } }), P.on("getUser", function(t) {
                    try { t.userName ? P.emit("login.otherSignin", t) : e.retried < e.config.retry ? (e.retried++, e._trigger("getusererror", null, e.retried + "_" + t.code), e.model.getUser()) : (P.emit("login.otherSignin", { userName: "" }), e.retried++, e._trigger("getusererror", null, e.retried + "_" + t.code)) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/site.js", ln: 666 }) } }), P.on("operated", function() {
                    try { I.set("urls", "true") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/site.js", ln: 670 }) } }), P.on("addtwoed", function(t) {
                    try { e.view.onSecondAdd(t) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/site.js", ln: 674 }) } }), P.on("addsed", function(t) {
                    try { e.view.onManageClick(!0, !1), e.view.updatePopup(t), e.loading.hide(), e.popContent.show() } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/site.js", ln: 681 }) } }), P.on("addClickSynced", function(t) {
                    try { e._trigger("addclicksync", null, t) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/site.js", ln: 685 }) } }), P.on("added", function(t) {
                    try { e.view.onAdded(t), e.model.checkIsShowSave() && e.view.showSaveMessage(), t.type ? e._trigger(t.type, null, t) : e._trigger("add", null, t) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/site.js", ln: 697 }) } }), P.on("imported", function(t) {
                    try { e.view.onImported(t) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/site.js", ln: 701 }) } }), P.on("error", function(t) {
                    try { e._trigger("error", null, { code: t.code + t.src, info: t.info }), e.view.showError(t.code) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/site.js", ln: 709 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 710 }) } }, _onManageClick: function() {
            try {
                var e = this;
                e.isManageClicked || (e.isManageClicked = !0, F("#popup-site").get(0).className = "popup-site", e._initPopup()), e.view.onManageClick(e.model.checkIsShowRecover(), e.model.checkIsShowSave()), e.view.updatePopup(e.model.getData()), e.loading.hide(), e.popContent.show(), e._showPopup(), e._trigger("manageclick") } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 730 }) } }, _ajust: function() {
            try { this.element.bind("sitebackclick siterecovered sitelogin", M) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/site.js", ln: 738 }) } }, _delete1: function() {
            try {
                var e = window.location.search.match(/[?&]tn=([^&<>'"]+)/);
                null !== e && F("#site .js_text").each(function(e, t) {
                    try {
                        if ("http://www.baidu.com/index.php?tn=10018801_hao" === t.getAttribute("href", 2)) return t.href = "http://www.baidu.com/?tn=10018802_hao", !1 } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/site.js", ln: 752 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 754 }) } }, _delete2: function() {
            try {
                for (var e = function() {
                        try { F(this).parent().toggleClass("g_tips-r-show") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/site.js", ln: 765 }) } }, t = { g_green: function(e) {
                            try {
                                return e.hasClass("g_green") ? !1 : (e.addClass("g_green"), !1) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 775 }) } }, g_red: function(e) {
                            try {
                                return e.hasClass("g_red") ? !1 : (e.addClass("g_red"), !1) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 784 }) } }, g_hot: function(e, t) {
                            try {
                                return e.hasClass("g_hot") || e.hasClass("g_tips-r") ? !1 : e.width() > 70 ? !0 : t % 6 === 5 ? !0 : (e.addClass("g_hot"), e.append('<i class="g_icon"></i>'), !1) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/site.js", ln: 802 }) } }, "g_tips-r": function(e, t, n, o, s) {
                            try {
                                if (n && n.seed && n.rand && n.seed !== n.rand && !n.ifshow) return !0;
                                if (e.hasClass("g_hot") || e.hasClass("g_tips-r")) return !1;
                                var a = function(e) {
                                    try {
                                        var t = F(e);
                                        return s && (s.el = t), t } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/site.js", ln: 820 }) } };
                                if (n.url2) {
                                    var c = "";
                                    c = n.cls ? '<a monkey="tips_on" class="tips_link g_tips-r" cls="' + n.cls + '" alog-custom="' + i._calAlogCustom(n.cls) + '" alog-text="' + e.text() + "_" + n.tip + '" href="' + n.url2 + '">&nbsp;<i class="g_icon">' + n.tip + "</i></a>" : '<a monkey="tips_on" class="tips_link g_tips-r" alog-text="' + e.text() + "_" + n.tip + '" href="' + n.url2 + '">&nbsp;<i class="g_icon">' + n.tip + "</i></a>";
                                    var r = 0;
                                    r = e.parent().find(".js_text").width(), e.parent().find(".sitesublink") && (r += e.parent().find(".sitesublink").width()), r > 56 && e.parent().addClass("site-item-longchar"), e.parent().append(a(c)) } else {
                                    var d = e.addClass("g_tips-r").html();
                                    e.html("<b>" + d + "</b>"), e.after(a(e.clone().find("b").hide().end().append('<i class="g_icon" style="top:-19px;left:-7px;">' + n.tip + "</i>").css("padding", "1px 0").attr("monkey", "qipao"))) }
                                return !1 } catch (l) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: l.message || l.description, path: "indexher:container/module/site/site.js", ln: 863 }) } }, "g_tips-r-hover": function(t, i, n, o) {
                            try {
                                var s = {},
                                    a = this["g_tips-r"](t, i, n, o, s);
                                if (s = s.el) { s.addClass("g_tips-r-hover").attr("monkey", "tips_off");
                                    var c = t.parent();
                                    c.children().hover(e, e) }
                                return a } catch (r) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: r.message || r.description, path: "indexher:container/module/site/site.js", ln: 878 }) } }, "g_tips-r-img": function(e, t, i, n) {
                            try {
                                var o = {},
                                    s = this["g_tips-r"](e, t, i, n, o);
                                if (o = o.el) {
                                    var a = 4,
                                        c = -2;
                                    o.attr("monkey", "tips_pic").prop("title", i.tip), F(".g_icon", o).css({ background: "url(" + HAO.httpsTrans(i.icon) + ") no-repeat", width: parseInt(i.iconwidth, 10), height: parseInt(i.iconheight, 10), padding: 0, left: "wide" === A.get("wideornarrow", "wide") ? a : c, top: (14 - i.iconheight) / 2 }).html(""), P.on("wideversion.viewportchange", function() {
                                        try { F(".g_icon", o).css({ left: "wide" === A.get("wideornarrow", "wide") ? a : c }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/site/site.js", ln: 904 }) } }) }
                                return s } catch (r) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: r.message || r.description, path: "indexher:container/module/site/site.js", ln: 909 }) } }, "g_tips-l": function(e, t, i) {
                            try {
                                if (i && i.seed && i.rand && i.seed !== i.rand && !i.ifshow) return !0;
                                if (e.hasClass("g_hot") || e.hasClass("g_tips-l")) return !1;
                                if (i.url2) {
                                    var n = '<a monkey="tips"  style="width:0;" class="tips_link g_tips-l" href="' + i.url2 + '">&nbsp;<i class="g_icon">' + i.tip + "</i></a>";
                                    e.parent().prepend(n) } else {
                                    var o = e.addClass("g_tips-l").html();
                                    e.html("<b>" + o + "</b>"), e.after(e.clone().find("b").hide().end().append('<i class="g_icon" style="top:-19px;left:-7px;">' + i.tip + "</i>").css("padding", "1px 0").attr("monkey", "qipao")) }
                                return !1 } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/site/site.js", ln: 937 }) } } }, i = this, n = A.get("mzQipao"), o = {}, s = n.length, a = 0, c = 0, r = 0; s > r; r++) {
                    var d = n[r];
                    d && d.style && d.style.indexOf("g_tips-") > -1 && !d.ifshow ? (a++, d.rand = a) : d.rand = -1 }
                var l = S.get("mtip");
                l ? (l = parseInt(l, 10), c = l + 1, c > a && (c = 1)) : c = Math.ceil(Math.random() * a), S.set("mtip", c, { expires: 30 });
                for (var r = 0; s > r; r++) {
                    var p = n[r];
                    p.seed = c;
                    var h = b(p.url);
                    o[h] = p }
                if (i.iscuser || F("a.js_text", i.element).each(function(e) {
                        try {
                            var i = b(this.href),
                                n = o[i];
                            if (n) {
                                var s = t[n.style];
                                s && (s.call(t, F(this), e, n) || delete o[i]) } } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/site/site.js", ln: 995 }) } }), i.newQipao || (F("#box-famoussite li>a").each(function() {
                        try {
                            var e = b(this.href),
                                i = o[e];
                            if (i) {
                                var n = t[i.style];
                                n && (n.call(t, F(this), void 0, i), delete o[e]) } } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/site/site.js", ln: 1010 }) } }), i.newQipao = !0), !i.iscuser) {
                    var g = A.get("sitestyle"),
                        u = g.length;
                    if (u) {
                        for (var f, m = A.get("wideornarrow", "wide"), x = {}, r = 0; u > r; r++) { f = g[r];
                            var y = b(f.url);
                            x[y] = f }
                        F("a.js_text", i.element).each(function(e) {
                            try { f = x[b(this.href)], f && f.mzzyw && z.add.call(this, f, e, "mz", m) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/site/site.js", ln: 1035 }) } }) } } } catch (j) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: j.message || j.description, path: "indexher:container/module/site/site.js", ln: 1038 }) } } }) });;
define("indexher:container/module/site/specialtextstyle.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/format.js", "indexher:static/js/imageloader.js", "indexher:static/js/config.js", "indexher:static/js/events.js"], function(e, t, i, n, a, s, c, o, r) {
    function l(e, t) {
        try {
            var i = g('[href="' + e.url + '"]', t);
            return i.length && i.text() === e.title ? i : !1 } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/site/specialtextstyle.js", ln: 33 }) } }

    function d(e, t, i) {
        try {
            var n, a; "wide" === (i || u.get("wideornarrow", "wide")) ? (n = t.imgurl_lg, a = 52) : (n = t.imgurl, a = 30), n = HAO.httpsTrans(n), x([n], function() {
                try { e.empty().attr({ "alog-text": t.title + "(图片)", href: t.change_url, style: f(y, { imgurl: n, width: a }) }) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/specialtextstyle.js", ln: 59 }) } }) } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/site/specialtextstyle.js", ln: 60 }) } }

    function p(e, t) {
        try { m.on("wideversion.viewportchange", function(i) {
                try { d(e, t, i) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/site/specialtextstyle.js", ln: 65 }) } }) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/site/specialtextstyle.js", ln: 66 }) } }

    function h(e, t) {
        try {
            var i = g(e);
            i.length && g.each(t, function() {
                try {
                    var e = this,
                        t = l(e, i);
                    t && (d(t, e), p(t, e)) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/site/specialtextstyle.js", ln: 78 }) } }) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/site/specialtextstyle.js", ln: 80 }) } }
    var g = a,
        f = s,
        x = c,
        u = o,
        m = r,
        y = 'background:url("#{imgurl}") center left no-repeat;vertical-align: top;width:#{width}px;height:20px;margin-left:4px;padding:0;position:relative;top:-1px;';
    t.exports = h });;
define("indexher:container/module/famoussite/famoussiterecom.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/log.js", "indexher:static/js/events.js", "indexher:static/js/cookie.js"], function(e, i, t, o, n, a, s, c) {
    function r() {
        try {
            var e = m("#box-famoussite"),
                i = m(".tuijian-icon", e),
                t = m(".tuijian-icon-tips", e),
                o = m(".tuijianChange", e);
            if (i[0] && t[0] && o[0]) { setTimeout(function() {
                    try { t.hide() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/famoussite/famoussiterecom.js", ln: 22 }) } }, 3e3), i.hover(function() {
                    try { t.show() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/famoussite/famoussiterecom.js", ln: 27 }) } }, function() {
                    try { setTimeout(function() {
                            try { t.hide() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/famoussite/famoussiterecom.js", ln: 31 }) } }, 1e3) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/famoussite/famoussiterecom.js", ln: 32 }) } }), o.click(function() {
                    try {
                        var e = t.nextAll(".wf-tuijian"),
                            i = e.length,
                            o = e.filter(".show"),
                            n = o.data("screen");
                        o = o.add(e.eq((+n + 1) % i)), o.toggleClass("show") } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/famoussite/famoussiterecom.js", ln: 42 }) } });
                var n = { 0: "mingzhan-recom-backup", 1: "mingzhan-recom", 2: "mingzhan-recom-erised", 3: "mingzhan-recom-hot", 4: "mingzhan-recom-erised0", 5: "mingzhan-recom-erised1" },
                    a = n[o.parent().attr("data-recomflag")];
                d({ type: "auto", k: a }) } } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/famoussite/famoussiterecom.js", ln: 67 }) } }
    var m = n,
        d = a;
    i.exports = r });;
define("indexher:container/module/famoussite/famoussite.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/config.js", "indexher:container/module/site/siteResource.js", "indexher:container/module/famoussite/famoussiterecom.js"], function(e, i, t, s, o, a, n, r) {
    function c() {
        try { m();
            var e = {},
                i = d.get("sitestyle");
            if (!i || !i.length) return;
            u.each(i, function() {
                try { e[this.url.replace(/(.*)\/$/, "$1")] = this } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/famoussite/famoussite.js", ln: 24 }) } }), u("#box-famoussite a.mainlink").each(function(i) {
                try {
                    var t = e[this.href.replace(/(.*)\/$/, "$1")];
                    t && t.mzzyw && f.add.call(this, t, i, "mz", d.get("wideornarrow", "wide")) } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/famoussite/famoussite.js", ln: 33 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/famoussite/famoussite.js", ln: 34 }) } }
    var u = o,
        d = a,
        f = n,
        m = r;
    i.exports = c });;
define("indexher:container/module/guesslikesite/guesslikesite.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/widget.js", "indexher:static/js/cpcbll2.js", "indexher:static/js/format.js", "indexher:static/js/ctr.js", "indexher:static/js/events.js", "indexher:static/js/cpcctr.js"], function(e, i, t, s, n, c, a, o, l, r, g) {
    var d = n,
        u = a,
        h = o,
        p = r,
        f = g,
        m = "hao123.",
        k = "guesslikesite";
    d.widget(m + k, { options: { cpcClickChange: !1, cpcInitAdvance: !0, cpcTypeBegin: 0, area: null }, _create: function() {
            try {
                var e = this,
                    i = e.options,
                    t = e.element;
                e.$changeBtn = d(".changeBtn", t), e.$changeLink = d(".js-changeLink", t), e.$row = d(".js_guesslike-industry", t), e.$row4screen = d(".guesslike-row", t), e.typeNumber = 3, e.screenNumber = 3, e.cpcInitCache = [{ id: "cpc_gl_hot", initScreen: [] }, { id: "cpc_gl_gouwu", initScreen: [] }, { id: "cpc_gl_game", initScreen: [] }, { id: "cpc_gl_mall", initScreen: [] }, { id: "cpc_gl_temai", initScreen: [] }, { id: "cpc_gl_caijing", initScreen: [] }, { id: "cpc_gl_health", initScreen: [] }, { id: "cpc_gl_junshi", initScreen: [] }, { id: "cpc_gl_zonghe", initScreen: [] }], e.bindEvent(), i.cpcClickChange && e.burnAfterRead() } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/guesslikesite/guesslikesite.js", ln: 79 }) } }, initCPC: function() {
            try {
                for (var e = this, i = (e.options.cpcTypeBegin, 0); i < e.$row.length; i++) {
                    var t = e.$row.eq(i),
                        s = t.find(".guesslike-row").eq(0),
                        n = s.data("type"),
                        c = t.attr("data-cpcon");
                    c && "1" !== c || ! function(i, t) {
                        try { u.init({ id: e.cpcInitCache[i].id + "0", ctx: t, success: function(t) {
                                    try { t.length > 0 && (e.cpcInitCache[i].initScreen[0] = 1) } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/guesslikesite/guesslikesite.js", ln: 100 }) } }, complete: function() {
                                    try { f.sendCtrLog(t) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/guesslikesite/guesslikesite.js", ln: 103 }) } } }) } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/guesslikesite/guesslikesite.js", ln: 105 }) } }(n, s) } } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/guesslikesite/guesslikesite.js", ln: 108 }) } }, bindEvent: function() {
            try {
                var e = this,
                    i = (e.element, e.options);
                i.cpcInitAdvance ? e.initCPC() : p.on("guesslikesite.initcpcnext", function() {
                    try { e.initCPC(), p.un("guesslikesite.initcpcnext") } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/guesslikesite/guesslikesite.js", ln: 120 }) } }), e.$row.hover(function() {
                    try { d(this).addClass("g-bg1") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/guesslikesite/guesslikesite.js", ln: 125 }) } }, function() {
                    try { d(this).removeClass("g-bg1") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/guesslikesite/guesslikesite.js", ln: 128 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/guesslikesite/guesslikesite.js", ln: 129 }) } }, burnAfterRead: function() {
            function e(e, t) {
                try { n[t].data.length > 0 && (clearTimeout(i), i = setTimeout(function() {
                        try {
                            var i = n[t].data.shift(),
                                c = i.curl,
                                a = i.tit;
                            e.attr("href", c), e.text(a), e.attr("alog-custom", h(s, { recom: 1 })) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/guesslikesite/guesslikesite.js", ln: 199 }) } }, 500)) } catch (c) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: c.message || c.description, path: "indexher:container/module/guesslikesite/guesslikesite.js", ln: 201 }) } }
            try {
                var i, t = this,
                    s = (t.options, "recom:#{recom}"),
                    n = [{ id: "cpc_gl_hot1", hasRequest: 0, data: [] }, { id: "cpc_gl_gouwu1", hasRequest: 0, data: [] }, { id: "cpc_gl_game1", hasRequest: 0, data: [] }, { id: "cpc_gl_mall1", hasRequest: 0, data: [] }, { id: "cpc_gl_temai1", hasRequest: 0, data: [] }, { id: "cpc_gl_caijing1", hasRequest: 0, data: [] }, { id: "cpc_gl_health1", hasRequest: 0, data: [] }, { id: "cpc_gl_junshi1", hasRequest: 0, data: [] }, { id: "cpc_gl_zonghe1", hasRequest: 0, data: [] }];
                t.$changeLink.click(function() {
                    try {
                        var i = d(this),
                            t = i.parents(".guesslike-industry"),
                            s = t.data("type"),
                            c = t.attr("data-cpcon"),
                            a = d(this).attr("data-cpc");
                        if ((!c || "1" === c) && a && "link" === a) {
                            var o = n[s];
                            0 === o.hasRequest ? u.init({ id: o.id, doNotRewriteDom: !0, success: function(t, n, c) {
                                    try { o.hasRequest = 1, o.data = t.slice(), o.appid = n, o.flowinfo = c, f.saveLinkCtrInfo(i, o.data[0], n, c), e(i, s), f.sendCtrLog(i, "link") } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/guesslikesite/guesslikesite.js", ln: 229 }) } } }) : (f.saveLinkCtrInfo(i, o.data[0], o.appid, o.flowinfo), e(i, s), f.sendCtrLog(i, "link")) } } catch (l) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: l.message || l.description, path: "indexher:container/module/guesslikesite/guesslikesite.js", ln: 241 }) } }) } catch (c) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: c.message || c.description, path: "indexher:container/module/guesslikesite/guesslikesite.js", ln: 243 }) } } }) });;
define("indexher:container/module/movinglink/movinglink.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/widget.js", "indexher:static/js/events.js", "indexher:static/js/animation.js", "indexher:static/js/imageloader.js"], function(i, e, n, t, o, a, s, r, m) {
    var c = o,
        l = s,
        h = r,
        g = m,
        d = "hao123.",
        p = "movinglink",
        u = 1190,
        f = 990;
    c.widget(d + p, { _create: function() {
            try {
                {
                    var i = this,
                        e = i.options,
                        n = e.anim;
                    e.isOnePic }
                if (i.$animBox = c('[data-hook="anim-box"]', i.element), 2 === e.isOnePic) return i.$animBox.css({ position: "absolute", top: +n.onepic.top, right: +n.onepic.left, width: +n.onepic.width, height: +n.onepic.height, background: "url(" + HAO.httpsTrans(n.onepic.imgurl) + ") 0 0 no-repeat" }), !1;
                1 === parseInt(e.isOnePic) && (i.$rightAnim = c('[data-hook="right-anim"]', i.element)), g({ def: HAO.httpsTrans(n.def.imgurl), hover: HAO.httpsTrans(n.hover.imgurl), stop: HAO.httpsTrans(n.stop.imgurl), rightanim: HAO.httpsTrans(1 == parseInt(e.isOnePic) ? n.rightanim.imgurl : "http://s0.hao123img.com/img/1L/Aw/2F/mk/ch/o/blank.gif") }, function() {
                    try { i._initAnims(), 1 === parseInt(e.isOnePic) && (i.animRight = i._initRightAnim(i.$rightAnim, n.rightanim)), i._initMove(), i.bindEvent();
                        var t = {},
                            o = e.move.width,
                            a = n.stop.width,
                            s = a + n.stop.left;
                        o > s ? (t.$el = i.$animBox, t.width = o) : (t.$el = i.$animStop, t.width = a), i.visibleOpt = t } catch (r) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: r.message || r.description, path: "indexher:container/module/movinglink/movinglink.js", ln: 69 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/movinglink/movinglink.js", ln: 70 }) } }, type: c("body").hasClass("width-nr") ? "narrow" : "wide", _initAnim: function(i, e) {
            try {
                var n = this;
                return i.css({ position: "absolute", top: +e.top, left: +e.left, width: +e.width, height: +e.height, backgroundImage: "url(" + HAO.httpsTrans(e.imgurl) + ")" }).hide(), e.pos = e.pos.split(","), e.perFrameDuration = e.duration / e.pos.length, h().changePosition(i[0], n._handlePosition(e.pos, e.height)) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/movinglink/movinglink.js", ln: 95 }) } }, _handlePosition: function(i, e) {
            try {
                var n, t = [],
                    o = [],
                    a = /[0-9]*\*[0-9]*/g;
                if (i && i.length > 0) { t = i;
                    for (var s = 0; s < t.length; s++) {
                        var r = t[s];
                        if (a.test(r))
                            for (var m = (r.length, r.indexOf("*")), c = parseInt(r.substring(0, m)), l = parseInt(r.substring(m + 1)), h = 0; l > h; h++) n = "0 " + (1 - c) * e, o.push(n);
                        else n = "0 " + (1 - parseInt(r)) * e, o.push(n) }
                    return o }
                return o.push("0 0"), o } catch (g) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: g.message || g.description, path: "indexher:container/module/movinglink/movinglink.js", ln: 140 }) } }, _initRightAnim: function(i, e) {
            try {
                var n = this;
                return i.css({ position: "absolute", top: +e.top, right: +e.left, width: +e.width, height: +e.height, backgroundImage: "url(" + HAO.httpsTrans(e.imgurl) + ")" }).hide(), e.pos = e.pos.split(","), e.perFrameDuration = e.duration / e.pos.length, h().changePosition(i[0], n._handlePosition(e.pos, e.height)) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/movinglink/movinglink.js", ln: 163 }) } }, _initAnims: function() {
            try {
                var i = this,
                    e = i.options.anim,
                    n = i.$animBox;
                i.$animDefault = c('[data-hook="anim-default"]', n), i.$animHover = c('[data-hook="anim-hover"]', n), i.$animStop = c('[data-hook="anim-stop"]', n), i.animDefault = i._initAnim(i.$animDefault, e.def), i.animHover = i._initAnim(i.$animHover, e.hover), i.animStop = i._initAnim(i.$animStop, e.stop), i._startAnim(i.$animDefault, i.animDefault, e.def.perFrameDuration, !0) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/movinglink/movinglink.js", ln: 183 }) } }, _startAnim: function(i, e, n, t) {
            try { i.show(), e.start(n), t && e.repeat() } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/movinglink/movinglink.js", ln: 200 }) } }, _pauseAnim: function(i, e) {
            try { e.pause(), i.hide() } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/movinglink/movinglink.js", ln: 211 }) } }, _disposeAnim: function(i, e) {
            try { e.dispose(), i.hide() } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/movinglink/movinglink.js", ln: 222 }) } }, _disposeRightAnim: function(i, e) {
            try { e.dispose(), i.fadeOut() } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/movinglink/movinglink.js", ln: 233 }) } }, _getMoveOpt: function() {
            try {
                var i = this,
                    e = parseInt(i.options.move.stopoffsetleft, 10) || 0,
                    n = i.$animBox.width(),
                    t = i.moveDuration,
                    o = u - n + e,
                    a = i.moveDuration / o,
                    s = f - n + e,
                    r = a * s;
                return i._getMoveOpt = function() {
                    try {
                        var e, n, a = i.type;
                        return "narrow" === a ? (e = r - i.moveTime, n = s) : (e = t - i.moveTime, n = o), 0 > e && (e = 0), { duration: e, left: n } } catch (m) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: m.message || m.description, path: "indexher:container/module/movinglink/movinglink.js", ln: 270 }) } }, i._getMoveOpt() } catch (m) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: m.message || m.description, path: "indexher:container/module/movinglink/movinglink.js", ln: 273 }) } }, _startMove: function(i) {
            try {
                var e = this;
                e.moveStartTime = new Date;
                var n = e._getMoveOpt();
                n.duration ? i.animate({ left: n.left }, n.duration, "linear", function() {
                    try { l.emit("moving.end"), e._endMove(i) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/movinglink/movinglink.js", ln: 293 }) } }) : i.css("left", n.left) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/movinglink/movinglink.js", ln: 297 }) } }, _endMove: function(i) {
            try {
                var e = this;
                e.moveTime = e.moveDuration, i.off("mouseenter mouseleave"), e._disposeAnim(e.$animDefault, e.animDefault), e._disposeAnim(e.$animHover, e.animHover), e._startAnim(e.$animStop, e.animStop, e.options.anim.stop.perFrameDuration), e._handleVisible() } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/movinglink/movinglink.js", ln: 313 }) } }, _pauseMove: function(i) {
            try {
                var e = this;
                e.moveTime += new Date - e.moveStartTime, i.stop() } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/movinglink/movinglink.js", ln: 324 }) } }, _initMove: function() {
            try {
                var i = this,
                    e = i.options.move;
                i.moveDuration = e.duration, i.moveTime = 0, i._startMove(i.$animBox.css({ top: +e.top, left: +e.left, width: +e.width, height: +e.height })) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/movinglink/movinglink.js", ln: 347 }) } }, _handleVisible: function() {
            try {
                var i = this,
                    e = i.options,
                    n = parseInt(e.move.hideexpand, 10);
                if (i.moveDuration === e.move.duration) {
                    var t = c(window).width(),
                        o = (i.$animBox.show(), i.visibleOpt),
                        a = +o.width,
                        s = o.$el.css("width", a),
                        r = s.offset().left + a;
                    if (r > t) {
                        var m = r - t;
                        m > n ? i.$animBox.hide() : s.css("width", "-=" + m) } } } catch (l) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: l.message || l.description, path: "indexher:container/module/movinglink/movinglink.js", ln: 379 }) } }, bindEvent: function() {
            try {
                var i = this,
                    e = i.options.anim;
                i.$animBox.hover(function() {
                    try { i._pauseAnim(i.$animDefault, i.animDefault), i._startAnim(i.$animHover, i.animHover, e.hover.perFrameDuration, !0), i._pauseMove(i.$animBox) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/movinglink/movinglink.js", ln: 389 }) } }, function() {
                    try { i._pauseAnim(i.$animHover, i.animHover), i._startAnim(i.$animDefault, i.animDefault, e.def.perFrameDuration, !0), i._startMove(i.$animBox) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/movinglink/movinglink.js", ln: 394 }) } }), 1 === parseInt(i.options.isOnePic) && i._startAnim(i.$rightAnim, i.animRight, e.rightanim.perFrameDuration, !0), l.on("wideversion.viewportchange", function(e) {
                    try { e !== i.type && (i.type = e), i._pauseMove(i.$animBox), i._startMove(i.$animBox), i._handleVisible() } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/movinglink/movinglink.js", ln: 410 }) } }), c(window).on("resize", function() {
                    try { i._handleVisible() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/movinglink/movinglink.js", ln: 414 }) } }), 1 === parseInt(i.options.isOnePic) && l.on("moving.end", function() {
                    try { i._disposeRightAnim(i.$rightAnim, i.animRight) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/movinglink/movinglink.js", ln: 420 }) } }) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/movinglink/movinglink.js", ln: 422 }) } } }) });;
define("indexher:container/module/goTop/goTop.js", ["global", "module", "exports", "require", "indexher:static/js/browser.js", "indexher:static/js/events.js", "indexher:static/js/pageEvents.js", "indexher:static/js/jquery.js", "indexher:static/js/widget.js"], function(e, o, i, t, n, s, r, c, a) {
    var d = n,
        g = s,
        p = r,
        h = c;
    h.widget("hao123.goTop", { isIE6: 6 === parseInt(d.ie, 10), _ie6Fixed: function(e) {
            try {
                var o = this;
                o.isIE6 && (g.on("viewport.deferchange", o._ie6FixedPosition, o), o._ie6FixedPosition(e)) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/goTop/goTop.js", ln: 29 }) } }, _ie6FixedPosition: function(e) {
            try {
                var o = this,
                    i = e.scrollTop,
                    t = e.height;
                o.scrollingTimer && (clearTimeout(o.scrollingTimer), o.scrollingTimer = null), o.scrollingTimer = setTimeout(function() {
                    try { o.element.css("top", i + t - 234) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/goTop/goTop.js", ln: 48 }) } }, 100) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/goTop/goTop.js", ln: 49 }) } }, _showHideShortCut: function(e) {
            try {
                var o = this,
                    i = o.element,
                    t = e.width,
                    n = t - (t >= 1260 ? 1190 : 990);
                e.scrollTop > 1e3 && n >= 140 ? i.show() : i.hide() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/goTop/goTop.js", ln: 67 }) } }, _init: function() {
            try {
                var e = this;
                e._on({ click: e._goTop }), g.on("viewport.deferchange", e._showHideShortCut, e);
                var o = p.getViewport();
                e._showHideShortCut(o), e._ie6Fixed(o) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/goTop/goTop.js", ln: 85 }) } }, _goTop: function(e) {
            try { e.preventDefault(), h("html, body").animate({ scrollTop: 0 }) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/goTop/goTop.js", ln: 98 }) } }, _destroy: function() {
            try {
                var e = this;
                e._off(e.element, "click"), g.un("viewport.deferchange", e._showHideShortCut, e), e.isIE6 && g.un("viewport.deferchange", e._ie6FixedPosition, e) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/goTop/goTop.js", ln: 113 }) } } }) });;
define("indexher:container/module/hlbar/hlbar.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/cpcbll2.js"], function(e, t, i, n, a, c) {
    var r = a,
        l = c;
    t.exports = { init: function(e) {
            try {
                var t = [],
                    i = r('a[data-cpc="link"]', e),
                    n = 0,
                    a = "";
                l.init({ id: "cpc_hlbar", ctx: e, success: function(e) {
                        try { e.length > 0 && (n = i.length, t = e.slice(n), i.click(function() {
                                try {
                                    if (t.length > 0) { clearTimeout(a);
                                        var e = r(this);
                                        a = setTimeout(function() {
                                            try {
                                                var i = t.shift(),
                                                    n = i.curl,
                                                    a = i.tit;
                                                e.attr("href", n), e.text(a) } catch (c) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: c.message || c.description, path: "indexher:container/module/hlbar/hlbar.js", ln: 38 }) } }, 500) } } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/hlbar/hlbar.js", ln: 40 }) } })) } catch (c) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: c.message || c.description, path: "indexher:container/module/hlbar/hlbar.js", ln: 42 }) } } }) } catch (c) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: c.message || c.description, path: "indexher:container/module/hlbar/hlbar.js", ln: 45 }) } } } });;
define("indexher:container/module/treasure/config.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js"], function(e, t, i, n, a) {
    var o = a,
        r = { gameState: { unInit: 0, init: 1, start: 2, end: 3, dolottary: 4 }, images: { duozai: "http://s0.hao123img.com/res/treasure/duozai-kp.png", imagebtn: "", animateimg: "", pop: "http://s0.hao123img.com/res/treasure/treasure-pop.png" }, lottery: { pid: "116", token: "296cd89197bcc8373c2bc8f73a88ad85", lotteryUrl: "http://zhuanla.hao123.com/lucky/draw?callback=?", submitUrl: "http://zhuanla.hao123.com/lucky/update?callback=?", goldUrl: "http://zhuanla.hao123.com/task/addvipcoin?callback=?" }, duozai: { width: 80, height: 172, normal: { interval: 100, frames: ["-16 30", "-16 -172", "-16 -344", "-16 -516", "-16 -688", "-16 -860", "-96 0"] }, onceHover: { interval: 200, frames: ["-16 0", "-16 -172", "-16 -344", "-16 -516", "-16 -688", "-16 -860", "-96 0"] }, working: { interval: 100, frames: ["-96 0", "-96 -172", "-95 -344", "-95 -516", "-95 -687", "-95 -859", "-95 -1032"] }, jumping: { interval: 200, frames: ["-45 -5", "-45 -139", "-45 -273", "-45 -407", "-45 -5"] } }, progressbar: { width: 56, height: 166, left: 13, bottom: 135, emptyposition: "0px 0px", fullposition: "0px 0px", btnwidth: 50, btnheight: 60, btntop: 0, btnleft: 0, score: { zero: 166, one: 154, two: 134, three: 114, four: 94, five: 74, six: 54, seven: 0 } } },
        c = { init: function() {
                try {
                    return this.data = r, this } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/treasure/config.js", ln: 82 }) } }, get: function(e, t) {
                try {
                    var i = this.data || {},
                        n = (e || "").split(".");
                    return o.each(n, function(e, t) {
                        try { t && "undefined" != typeof i && (i = i[t]) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/treasure/config.js", ln: 91 }) } }), "undefined" != typeof i ? i : t } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/treasure/config.js", ln: 97 }) } }, set: function(e, t) {
                try {
                    var i, n, a;
                    return "undefined" == typeof t ? this.data = e : (e = o.trim(String(e || "")), e && (i = e.split("."), n = i.pop(), a = this.data || {}, o.each(i, function(e, t) {
                        try {
                            var i = a[t];
                            if ("object" == typeof i) a = a[t];
                            else {
                                if ("undefiend" != typeof i) throw new Error("forbidden to set property[" + t + "] of [" + i + "] data");
                                a = a[t] = {} } } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/treasure/config.js", ln: 118 }) } }), a[n] = t)), this } catch (r) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: r.message || r.description, path: "indexher:container/module/treasure/config.js", ln: 123 }) } } };
    t.exports = c.init() });;
define("indexher:container/module/treasure/diamondSprite.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/format.js", "indexher:container/module/treasure/config.js"], function(t, e, i, a, r, s, o) {
    function n(t, e, i, a) {
        try { this.ctx = t, this.url = e, this.num = a, this.diamondStore = i || {}, this.create() } catch (r) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: r.message || r.description, path: "indexher:container/module/treasure/diamondSprite.js", ln: 27 }) } } {
        var d = r,
            h = s,
            c = o,
            p = ['<a class="g-ib treasure-item" target="_blank" alog-text="#{title}" href="#{url}" style="position:relative;padding: 0;">', '&nbsp<i data-hook="treasure-diamond" style="cursor:pointer;*margin-top:3px;position: absolute;top:#{top}px;left:#{left}px;display:block;width:#{width}px;height:#{height}px;background-repeat:no-repeat;"></i>', "</a>"].join("");
        c.get("diamond"), c.get("images") }
    n.prototype.create = function() {
        try {
            var t = this.diamondStore,
                e = this.url,
                i = this.ctx.text(),
                a = this.num,
                r = c.get("diamond" + a);
            return this.state1pic = c.get("images.diamond" + a + "state1"), this.state2pic = c.get("images.diamond" + a + "state2"), this.$tpl = d(h(p, { width: r.width, height: r.height, top: r.top, left: r.left, url: e, title: i })), this.$diamond = d('[data-hook="treasure-diamond"]', this.$tpl), this.render(t && t[e] ? t[e] : 1), this.$tpl } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/treasure/diamondSprite.js", ln: 54 }) } }, n.prototype.render = function(t) {
        try {
            var e = this;
            t || (t = 1);
            var i = this.ctx.text();
            switch (i += "-diamond", t) {
                case 1:
                    this.$tpl.attr({ "data-state": 1, "alog-text": i }), this.$diamond.css({ "background-image": "url(" + e.state1pic.src + ")" });
                    break;
                default:
                    this.$tpl.attr({ "data-state": 2, "alog-text": i }), this.$diamond.css({ "background-image": "url(" + e.state2pic.src + ")" }) } } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/treasure/diamondSprite.js", ln: 74 }) } }, e.exports = n });;
define("indexher:container/module/treasure/treasure_ajax.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js"], function(e, t, n, a, r) {
    function o(e, t, n) {
        try {
            var t = t || {};
            t.c = c(), s.getJSON(HAO.httpsTrans(e), t, function(e) {
                try { n && n(e) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/treasure_ajax.js", ln: 12 }) } }) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/treasure/treasure_ajax.js", ln: 13 }) } }

    function i(e) {
        try {
            var t = document.cookie.match("(?:^|; )" + window.encodeURIComponent(e) + "=([^;]+)");
            return null === t ? void 0 : window.decodeURIComponent(t[1]) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/treasure/treasure_ajax.js", ln: 22 }) } }

    function c() {
        try {
            var e = i("FLASHID") || i("BAIDUID");
            return e ? e.split(":")[0] : void 0 } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/treasure_ajax.js", ln: 30 }) } }
    var s = r;
    t.exports = { doPost: o } });;
define("indexher:container/module/treasure/dolotteryTip.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/widget.js", "indexher:container/module/treasure/config.js", "indexher:static/js/cookie.js", "indexher:static/js/login.js", "indexher:static/js/animation.js", "indexher:container/module/treasure/treasure_ajax.js", "indexher:static/js/share.js"], function(e, t, o, a, i, n, r, s, p, c, d, l) {
    function h(e, t) {
        try {
            { g(T)[v]({ popconf: t, game: e }) } } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/treasure/dolotteryTip.js", ln: 334 }) } }
    var g = i,
        u = r,
        m = s,
        f = p,
        x = c,
        y = d,
        b = l,
        k = "hao123.",
        v = "dolotteryTip",
        $ = "treasure_logintip",
        T = ['<div id="treasure-dolotteryTip" class="treasure-dolotteryTip" monkey="treasure-dolotteryTip">', '<a href="#" title="关闭弹窗" class="dolotteryTip-close" data-hook="dolotteryTip-close"></a>', '<a href="#" data-hook="dolotteryTip" alog-text="点击抽奖"></a>', "</div>"].join(""),
        j = '<div class="animateDiv1"></div>',
        q = '<div class="animateDiv2"></div>',
        w = '<div data-hook="interface-info"></div>',
        _ = ['<a href="#" data-hook="share-box" alog-text="分享"></a>', '<div data-hook="share-container">', '<a href="#" data-hook="share-qqzone" title="分享到qq空间" data-type="qzone"></a>', '<a href="#" data-hook="share-weibo" title="分享到新浪微博" data-type="sina"></a>', '<a href="#" data-hook="share-qq" title="分享到腾讯微博" data-type="qq"></a>', "</div>"].join("");
    g.widget(k + v, g.lottery.popup, { options: { className: "dolotteryTip-box", isModel: !0 }, _create: function() {
            try {
                var e = this.element;
                this._baseCreate(), this.element.appendTo(g("body")), this.$close = g('[data-hook="dolotteryTip-close"]', e), this.$dolottery = g('[data-hook="dolotteryTip"]', e), this._render(), this._play(), this._bindEvent(), this._baseShow() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/dolotteryTip.js", ln: 46 }) } }, _init: function() {
            try {} catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/treasure/dolotteryTip.js", ln: 49 }) } }, _render: function() {
            try {
                var e = this,
                    t = this.options,
                    o = this.element,
                    a = u.get("images"),
                    i = t.popconf.boxlayout.split(" "),
                    n = t.popconf.closebtnlayout.split(" "),
                    r = t.popconf.btn1layout.split(" "),
                    s = t.popconf.isanimate1,
                    p = t.popconf.isanimate2,
                    c = t.popconf.animatediv1.split(" "),
                    d = t.popconf.animatediv2.split(" "),
                    l = t.popconf.animatemap1.split(","),
                    h = t.popconf.animatemap2.split(","),
                    m = parseInt(t.popconf.animaterepeat),
                    f = t.game.logicdata.isshare;
                if (e.element.css({ position: "fixed", width: i[0], height: i[1], "z-index": 9999, "background-image": "url(" + HAO.httpsTrans(a.pop.src) + ")", "background-repeat": "no-repeat", "background-position": t.game.convertPX(t.popconf.boxbgposition) }), e.$close.css({ position: "absolute", display: "block", width: n[0] + "px", height: n[1] + "px", top: n[2] + "px", left: n[3] + "px", "z-index": 998 }), e.$dolottery.css({ position: "absolute", display: "block", width: r[0] + "px", height: r[1] + "px", top: r[2] + "px", left: r[3] + "px", "z-index": 998, "background-position": t.game.convertPX("" + r[4] + " " + r[5]), "background-image": "url(" + HAO.httpsTrans(a.pop.src) + ")", "background-repeat": "no-repeat" }), "1" == s && (e.$animatediv1 = g(j), e.element.append(e.$animatediv1), e.$animatediv1.css({ position: "absolute", display: "block", width: c[0] + "px", height: c[1] + "px", top: c[2] + "px", left: c[3] + "px", "background-image": "url(" + HAO.httpsTrans(a.animateimg.src) + ")", "background-repeat": "no-repeat", "background-position": "1000px 1000px" }), e.animation1 = x().changePosition(e.$animatediv1[0], l).repeat(m)), "1" == p && (e.$animatediv2 = g(q), e.element.append(e.$animatediv2), e.$animatediv2.css({ position: "absolute", display: "block", width: d[0] + "px", height: d[1] + "px", top: d[2] + "px", left: d[3] + "px", "background-image": "url(" + HAO.httpsTrans(a.animateimg.src) + ")", "background-repeat": "no-repeat", "background-position": "1000px 1000px" }), e.animation2 = x().changePosition(e.$animatediv2[0], h).repeat(m)), "1" == f) { e.element.append(g(_)), e.$share = g('[data-hook="share-box"]', o), e.$shareContainer = g('[data-hook="share-container"]', o), e.$qzone = g('[data-hook="share-qqzone"]', o), e.$weibo = g('[data-hook="share-weibo"]', o), e.$qq = g('[data-hook="share-qq"]', o);
                    var y = t.popconf.btn2layout.split(" "),
                        b = t.popconf.sharecontainer.split(" "),
                        k = t.popconf.shareqqzone.split(" "),
                        v = t.popconf.shareqq.split(" "),
                        $ = t.popconf.shareweibo.split(" ");
                    e.$share.css({ position: "absolute", display: "block", width: y[0] + "px", height: y[1] + "px", top: y[2] + "px", left: y[3] + "px", "background-position": t.game.convertPX("" + y[4] + " " + y[5]), "background-image": "url(" + HAO.httpsTrans(a.pop.src) + ")", "background-repeat": "no-repeat" }), e.$qzone.css({ position: "absolute", display: "block", width: k[0] + "px", height: k[1] + "px", top: k[2] + "px", left: k[3] + "px" }), e.$qq.css({ position: "absolute", display: "block", width: v[0] + "px", height: v[1] + "px", top: v[2] + "px", left: v[3] + "px" }), e.$weibo.css({ position: "absolute", display: "block", width: $[0] + "px", height: $[1] + "px", top: $[2] + "px", left: $[3] + "px" }), e.$shareContainer.css({ position: "absolute", display: "none", width: b[0] + "px", height: b[1] + "px", top: b[2] + "px", left: b[3] + "px", "background-position": t.game.convertPX("" + b[4] + " " + b[5]), "background-image": "url(" + HAO.httpsTrans(a.pop.src) + ")", "background-repeat": "no-repeat" }) } "" != t.game.logicdata.interfacefirst && e._renderInterface() } catch (T) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: T.message || T.description, path: "indexher:container/module/treasure/dolotteryTip.js", ln: 197 }) } }, _renderInterface: function() {
            function e(e) {
                try {
                    var t, a = e.err_code,
                        i = e.data || e.data[s];
                    t = (200 == a || 201 == a) && 0 != i ? i : p, o.append(g(w));
                    var r = g('[data-hook="interface-info"]', o);
                    r.css({ position: "absolute", width: n[0] + "px", height: n[1] + "px", top: n[2] + "px", left: n[3] + "px", "font-size": n[4] + "px", "line-height": n[4] + "px", color: n[5], "text-align": "center" }).text(t) } catch (c) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: c.message || c.description, path: "indexher:container/module/treasure/dolotteryTip.js", ln: 237 }) } }
            try {
                var t = this,
                    o = this.element,
                    a = t.options,
                    i = a.game.logicdata,
                    n = a.popconf.input1layout.split(" "),
                    r = HAO.httpsTrans(i.interfacefirst),
                    s = i.interfacedata,
                    p = parseFloat(a.game.goodtotal) + .7;
                p = p.toFixed(1), y.doPost(r, {}, e) } catch (c) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: c.message || c.description, path: "indexher:container/module/treasure/dolotteryTip.js", ln: 238 }) } }, _share: function(e) {
            try {
                var t, o = this,
                    a = e,
                    i = o.options.popconf,
                    n = i.shareurl.split(","),
                    r = i.sharetitle,
                    s = HAO.httpsTrans(i.sharepic),
                    p = i.sharetext;
                switch (a) {
                    case "qzone":
                        t = n[0];
                        break;
                    case "sina":
                        t = n[1];
                        break;
                    case "qq":
                        t = n[2] }
                p = p + " " + t, b(a, p, s, r, t) } catch (c) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: c.message || c.description, path: "indexher:container/module/treasure/dolotteryTip.js", ln: 263 }) } }, _play: function() {
            try {
                var e = this,
                    t = this.options,
                    o = t.popconf;
                e.animation1 && e.animation1.start(o.animateintervel1), e.animation2 && e.animation2.start(o.animateintervel2) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/treasure/dolotteryTip.js", ln: 270 }) } }, _stop: function() {
            try {
                var e = this;
                e.animation1 && e.animation1.dispose(), e.animation2 && e.animation2.dispose() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/dolotteryTip.js", ln: 275 }) } }, _bindEvent: function() {
            try {
                var e = this,
                    t = e.options;
                e.$close.click(function() {
                    try {
                        return e._stop(), e._baseHide(), e.remove(), !1 } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/dolotteryTip.js", ln: 284 }) } }), e.$dolottery.click(function() {
                    try {
                        return "1" == t.game.logicdata.isloginseconde && "1" != t.game.login ? (e._baseHide(), e.remove(), f.show(function() {
                            try {!m.get($) && m.set($, 2, { expires: 1 }), window.location.reload() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/treasure/dolotteryTip.js", ln: 294 }) } }), !1) : (e._stop(), e._baseHide(), e.remove(), e.options.game.doLottery(), !1) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/treasure/dolotteryTip.js", ln: 302 }) } }), e.$share && e.$share.click(function() {
                    try {
                        return !1 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/treasure/dolotteryTip.js", ln: 306 }) } }).mouseover(function() {
                    try { e.$dolottery.hide(), e.$share.hide(), e.$shareContainer.show() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/dolotteryTip.js", ln: 311 }) } }), e.$shareContainer && e.$shareContainer.mouseleave(function() {
                    try { e.$dolottery.show(), e.$share.show(), e.$shareContainer.hide() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/dolotteryTip.js", ln: 316 }) } }), e.$shareContainer && e.$shareContainer.children("a").click(function() {
                    try {
                        var t = g(this).data("type");
                        return e._share(t), e.$dolottery.show(), e.$share.show(), e.$shareContainer.hide(), !1 } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/treasure/dolotteryTip.js", ln: 325 }) } }) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/treasure/dolotteryTip.js", ln: 326 }) } } }), t.exports = { pop: h } });;
define("indexher:container/module/treasure/duozaiSprite.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/format.js", "indexher:static/js/animation.js", "indexher:container/module/treasure/config.js"], function(t, i, e, o, n, a, r, s) {
    function c(t) {
        try { this.game = t, this.normalAnimationDone = !1, this.normalFrames = l.normal.frames, this.hoverDonePosition = t.convertPX(this.normalFrames[this.normalFrames.length - 1]), this.create() } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/treasure/duozaiSprite.js", ln: 23 }) } }
    var h = n,
        m = a,
        d = r,
        p = s,
        g = '<div class="duozai" style="width:#{width}px;height:#{height}px;background-image:url(#{bgurl});background-position:#{backgroundPos};bottom:#{bottom}px"></div>',
        l = p.get("duozai"),
        u = p.get("images");
    c.prototype.create = function() {
        try { this.$tpl = h(m(g, { width: l.width, height: l.height, bgurl: u.duozai.src, backgroundPos: this.game.convertPX(this.game.duozaiinitposition), bottom: this.game.startbtnheight })) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/duozaiSprite.js", ln: 34 }) } }, c.prototype.show = function(t) {
        try { this.$tpl.css({ "background-position": this.game.initAnimationPosition }).animate({ bottom: this.game.startbtnheight }, 100, function() {
                try { t && t() } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/treasure/duozaiSprite.js", ln: 44 }) } }) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/treasure/duozaiSprite.js", ln: 45 }) } }, c.prototype.playNormalAnimation = function(t) {
        try {
            var i = this,
                e = this.$tpl[0],
                o = l.normal;
            this.normalAnimation = d().changePosition(e, o.frames).then(function() {
                try { i.normalAnimationDone = !0, t && t() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/treasure/duozaiSprite.js", ln: 55 }) } }), this.normalAnimation.start(o.interval) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/treasure/duozaiSprite.js", ln: 57 }) } }, c.prototype.stopNormalAnimation = function() {
        try { this.normalAnimation && this.normalAnimation.dispose(), this.normalAnimationDone = !0, this.$tpl.css("background-position", "-16px 0") } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/duozaiSprite.js", ln: 64 }) } }, c.prototype.playWorkingAnimation = function() {
        try {
            var t = this.$tpl[0],
                i = l.working;
            this.normalAnimationDone || this.stopNormalAnimation(), this.workingAnimation = d().changePosition(t, i.frames).repeatForever(), this.workingAnimation.start(i.interval) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/treasure/duozaiSprite.js", ln: 75 }) } }, c.prototype.stopWorkingAnimation = function() {
        try { this.workingAnimation && this.workingAnimation.dispose(), this.$tpl.css("background-position", this.hoverDonePosition) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/duozaiSprite.js", ln: 81 }) } }, i.exports = c });;
define("indexher:container/module/treasure/progressbarSprite.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/format.js", "indexher:static/js/animation.js", "indexher:static/js/pageEvents.js", "indexher:container/module/treasure/config.js", "indexher:static/js/events.js"], function(e, t, r, i, s, o, n, a, p, c) {
    function h(e) {
        try { this.game = e;
            var t = e.score;
            this.score = t || 0, this.create() } catch (r) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: r.message || r.description, path: "indexher:container/module/treasure/progressbarSprite.js", ln: 30 }) } }
    var l = s,
        d = o,
        g = p,
        b = c,
        f = g.get("progressbar"),
        u = g.get("images"),
        m = ['<div class="progressbar-box" style="position:absolute;width:#{width}px;height:#{height}px;left:#{left}px;bottom:#{bottom}px;cursor:pointer">', '<div class="pointer js-pointer" style="position: absolute;width:#{width}px;height:#{height}px;background: url(#{bgurl})  #{fullposition}  no-repeat;"></div>', '<div class="progressbar js-progressbar" style="position: absolute;width:#{width}px;height:#{emptybarheight}px;background: url(#{bgurl}) #{emptyposition} no-repeat"></div>', "</div>"].join(""),
        x = '<a href="#" alog-text="领取奖励" class="prize-btn js-prize" style="width: #{btnwidth}px;height: #{btnheight}px;display:block;position: absolute;top: #{btntop}px;left: #{btnleft}px;cursor:pointer"></a>';
    h.prototype.create = function() {
        try {
            var e = this,
                t = this.renderScore(this.score);
            this.$tpl = l(d(m, { width: f.width, height: f.height, left: f.left, bottom: f.bottom, fullposition: f.fullposition, emptyposition: f.emptyposition, bgurl: u.imagebtn.src, btnwidth: f.btnwidth, btnheight: f.btnheight, btntop: f.btntop, btnleft: f.btnleft, emptybarheight: t })), "1" == e.game.logicdata.isloginfirst && "1" != e.game.login && (e.$btnTpl = l(d(x, { btnwidth: f.btnwidth, btnheight: f.btnheight, btntop: f.btntop, btnleft: f.btnleft }))), this.$progressbar = l(".js-progressbar", this.$tpl), this.$pointer = l(".js-pointer", this.$tpl), 7 == this.score && e.$btnTpl && (e.$tpl.append(e.$btnTpl), e.$prizeBtn = l(".js-prize", e.$tpl), b.done("weekend.progressbar-bindbtnclick")) } catch (r) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: r.message || r.description, path: "indexher:container/module/treasure/progressbarSprite.js", ln: 68 }) } }, h.prototype.playflyanimation = function() {
        try { this.$tpl.fadeIn(1e3) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/treasure/progressbarSprite.js", ln: 73 }) } }, h.prototype.renderScore = function(e) {
        try {
            var t, r = this;
            switch (e) {
                case 0:
                    t = f.score.zero;
                    break;
                case 1:
                    t = f.score.one;
                    break;
                case 2:
                    t = f.score.two;
                    break;
                case 3:
                    t = f.score.three;
                    break;
                case 4:
                    t = f.score.four;
                    break;
                case 5:
                    t = f.score.five;
                    break;
                case 6:
                    t = f.score.six;
                    break;
                case 7:
                    t = f.score.seven;
                    break;
                default:
                    t = f.score.seven }
            return this.$progressbar && this.$progressbar.animate({ height: t }, 1e3), 7 == e && r.$btnTpl && (r.$prizeBtn || (r.$tpl.append(r.$btnTpl), r.$prizeBtn = l(".js-prize", r.$tpl), b.done("weekend.progressbar-bindbtnclick"))), t } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/treasure/progressbarSprite.js", ln: 118 }) } }, h.prototype.forward = function(e) {
        try { this.renderScore(e) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/progressbarSprite.js", ln: 124 }) } }, h.prototype.back = function() {
        try {
            var e = this.forwardTime;
            this.$pointer.stop().animate({ left: pointerConf.minLeft }, e, "linear") } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/progressbarSprite.js", ln: 135 }) } }, h.prototype.reset = function() {
        try { this.renderScore(0) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/treasure/progressbarSprite.js", ln: 142 }) } }, t.exports = h });;
define("indexher:container/module/treasure/treasure_goodSubmit.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/widget.js", "indexher:container/module/popup/base.js", "indexher:container/module/treasure/config.js"], function(e, o, t, i, r, n, a, s) {
    function c(e) {
        try {
            { d(g)[l]({ game: e }) } } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/treasure/treasure_goodSubmit.js", ln: 71 }) } }
    var d = r,
        u = s,
        p = "hao123.",
        l = "treasure_goodSubmit",
        g = ['<div id="treasure-good-confirm" class="treasure-good-confirm" monkey="treasure_good_confirm">', '<a href="#" title="关闭弹窗" class="good-confirm-close" data-hook="good-confirm-close"></a>', "</div>"].join("");
    d.widget(p + l, d.lottery.popup, { options: { className: "good-confirm-box", isModel: !0 }, _create: function() {
            try {
                var e = this.element;
                this._baseCreate(), this.element.appendTo(d("body")), this.$close = d('[data-hook="good-confirm-close"]', e), this._bindEvent(), this._render(), this._baseShow() } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/treasure/treasure_goodSubmit.js", ln: 29 }) } }, _init: function() {
            try {} catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/treasure/treasure_goodSubmit.js", ln: 31 }) } }, _render: function() {
            try {
                var e = this,
                    o = this.options,
                    t = o.game.popdata[4],
                    i = t.boxlayout.split(" "),
                    r = t.closebtnlayout.split(" "),
                    n = u.get("images");
                e.element.css({ position: "fixed", width: i[0] + "px", height: i[1] + "px", "z-index": 9999, "background-image": "url(" + HAO.httpsTrans(n.pop.src) + ")", "background-repeat": "no-repeat", "background-position": o.game.convertPX(t.boxbgposition) }), e.$close.css({ position: "absolute", display: "block", width: r[0] + "px", height: r[1] + "px", top: r[2] + "px", left: r[3] + "px" }) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/treasure/treasure_goodSubmit.js", ln: 56 }) } }, _bindEvent: function() {
            try {
                var e = this;
                e.$close.click(function() {
                    try {
                        return e._baseHide(), e.remove(), !1 } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/treasure/treasure_goodSubmit.js", ln: 63 }) } }) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/treasure/treasure_goodSubmit.js", ln: 64 }) } } }), o.exports = { pop: c } });;
define("indexher:container/module/treasure/treasure_good.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/widget.js", "indexher:container/module/treasure/treasure_ajax.js", "indexher:container/module/treasure/config.js", "indexher:container/module/treasure/treasure_goodSubmit.js"], function(e, t, o, a, s, i, r, n, d) {
    function p(e, t, o) {
        try {
            var a = {};
            a.prize = e, a.args = t, a.game = o; { c(x)[m](a) } } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/treasure/treasure_good.js", ln: 199 }) } }
    var c = s,
        l = r,
        u = n,
        h = d,
        g = "hao123.",
        m = "treasure_good",
        f = u.get("lottery").submitUrl,
        x = ['<div id="pop-treasure-good" class="pop-treasure-good" monkey="pop_treasure_good">', '<div class="treasure-good-prize" data-hook="treasure-good-prize"></div>', '<input class="prizer-name" data-hook="prizer-name">', '<input class="prizer-phone" data-hook="prizer-phone">', '<textarea rows="2" cols="20" class="prizer-address" data-hook="prizer-address"></textarea>', '<a href="#" class="treasure-good-submit" data-hook="treasure-good-submit" title="提交"></a>', '<a href="#" title="关闭中奖弹层" class="treasure-good-close" data-hook="treasure-good-close"></a>', "</div>"].join("");
    c.widget(g + m, c.lottery.popup, { options: { className: "pop-treasure-good", isModel: !0 }, _create: function() {
            try {
                {
                    var e = this.element;
                    u.get("images") }
                this._baseCreate(), this.element.appendTo(c("body")), this.valid = !1, this.$close = c('[data-hook="treasure-good-close"]', e), this.$submit = c('[data-hook="treasure-good-submit"]', e), this.$prize = c('[data-hook="treasure-good-prize"]', e), this.$name = c('[data-hook="prizer-name"]', e), this.$phone = c('[data-hook="prizer-phone"]', e), this.$address = c('[data-hook="prizer-address"]', e), this._bindEvent(), this._baseShow() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/treasure_good.js", ln: 40 }) } }, _init: function() {
            try { this._render() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/treasure/treasure_good.js", ln: 43 }) } }, _render: function() {
            try {
                var e = this,
                    t = this.options,
                    o = u.get("images"),
                    a = t.game.popdata[3],
                    s = a.boxlayout.split(" "),
                    i = a.closebtnlayout.split(" "),
                    r = a.btn1layout.split(" "),
                    n = a.btn2layout.split(" "),
                    d = a.input1layout.split(" "),
                    p = a.input2layout.split(" "),
                    c = a.input3layout.split(" ");
                e.element.css({ position: "fixed", width: s[0], height: s[1], "z-index": 9999, "background-image": "url(" + HAO.httpsTrans(o.pop.src) + ")", "background-repeat": "no-repeat", "background-position": t.game.convertPX(a.boxbgposition) }), e.$close.css({ position: "absolute", display: "block", width: i[0] + "px", height: i[1] + "px", top: i[2] + "px", left: i[3] + "px" }), e.$submit.css({ position: "absolute", display: "block", width: r[0] + "px", height: r[1] + "px", top: r[2] + "px", left: r[3] + "px" }).attr("href", t.url), e.$prize.css({ position: "absolute", width: n[0] + "px", height: n[1] + "px", top: n[2] + "px", left: n[3] + "px" }).text(t.prize), e.$name.css({ position: "absolute", display: "block", width: d[0] + "px", height: d[1] + "px", top: d[2] + "px", left: d[3] + "px" }), e.$phone.css({ position: "absolute", display: "block", width: p[0] + "px", height: p[1] + "px", top: p[2] + "px", left: p[3] + "px" }), e.$address.css({ position: "absolute", display: "block", width: c[0] + "px", height: c[1] + "px", top: c[2] + "px", left: c[3] + "px" }) } catch (l) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: l.message || l.description, path: "indexher:container/module/treasure/treasure_good.js", ln: 112 }) } }, show: function() {
            try {
                { this.element }
                this._baseShow() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/treasure/treasure_good.js", ln: 118 }) } }, _commit: function() {
            function e() {
                try { t._baseHide(), h.pop(o.game) } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/treasure/treasure_good.js", ln: 131 }) } }
            try {
                var t = this,
                    o = t.options;
                t._valid(), t.valid && l.doPost(f, o.args, e) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/treasure/treasure_good.js", ln: 133 }) } }, _valid: function() {
            function e(e, t) {
                try {
                    switch (e = c.trim(e), t) {
                        case "phone":
                            return /^0?1[3|4|5|8][0-9]\d{8}$/.test(e);
                        case "notnull":
                        default:
                            return !!e } } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/treasure/treasure_good.js", ln: 174 }) } }
            try {
                var t = this,
                    o = t.$name.val(),
                    a = t.$phone.val(),
                    s = t.$address.val();
                e(o, "notnull") ? e(a, "notnull") ? e(a, "phone") ? e(s, "notnull") ? (t.valid = !0, t.options.args.winfo.address = s, t.options.args.winfo.phone = a, t.options.args.winfo.uname = o) : (t.valid = !1, t.$address.focus()) : (t.valid = !1, t.$phone.val("").focus()) : (t.valid = !1, t.$phone.focus()) : (t.valid = !1, t.$name.focus()) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/treasure/treasure_good.js", ln: 175 }) } }, _bindEvent: function() {
            try {
                {
                    var e = this;
                    this.options }
                this.$close.click(function() {
                    try {
                        return e._baseHide(), e.remove(), !1 } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/treasure_good.js", ln: 184 }) } }), this.$submit.click(function() {
                    try {
                        return e._commit(), !1 } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/treasure_good.js", ln: 189 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/treasure_good.js", ln: 190 }) } } }), t.exports = { pop: p } });;
define("indexher:container/module/treasure/treasure_virtual.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/widget.js", "indexher:container/module/popup/base.js", "indexher:container/module/treasure/config.js", "indexher:container/module/treasure/treasure_good.js"], function(e, t, i, a, r, s, o, n, u) {
    function l(e, t, i) {
        try {
            var a = {};
            a.img = t.img_url, a.url = t.url, a.game = e, a.name = t.prize_name, a.prize_id = t.prize_id, a.real = t.real, a.params = i; { p(m)[g](a) } } catch (r) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: r.message || r.description, path: "indexher:container/module/treasure/treasure_virtual.js", ln: 134 }) } }
    var p = r,
        c = n,
        d = u,
        h = "hao123.",
        g = "treasure_virtual",
        m = ['<div id="pop-treasure-virtual" class="pop-treasure-virtual" monkey="pop_treasure_virtual">', '<div class="treasure-virtual-prize" data-hook="treasure-virtual-prize"></div>', '<div class="treasure-virtual-img" data-hook="treasure-virtual-img"></div>', '<a href="#" target="_blank" class="treasure-virtual-submit" data-hook="treasure-virtual-submit" title="go"></a>', '<a href="#" title="关闭弹窗" class="treasure-virtual-close" data-hook="treasure-virtual-close"></a>', "</div>"].join("");
    p.widget(h + g, p.lottery.popup, { options: { className: "pop-treasure-virtual", isModel: !0 }, _create: function() {
            try {
                {
                    var e = this.element;
                    c.get("images") }
                this._baseCreate(), this.element.appendTo(p("body")), this.$close = p('[data-hook="treasure-virtual-close"]', e), this.$submit = p('[data-hook="treasure-virtual-submit"]', e), this.$img = p('[data-hook="treasure-virtual-img"]', e), this.$prize = p('[data-hook="treasure-virtual-prize"]', e), this._bindEvent(), this._baseShow() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/treasure_virtual.js", ln: 35 }) } }, _init: function() {
            try { this._render() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/treasure/treasure_virtual.js", ln: 38 }) } }, _render: function() {
            try {
                var e = this,
                    t = this.options,
                    i = c.get("images"),
                    a = t.game.popdata[2],
                    r = a.boxlayout.split(" "),
                    s = a.boxbgposition,
                    o = a.closebtnlayout.split(" "),
                    n = a.btn1layout.split(" "),
                    u = a.input1layout.split(" "),
                    l = a.input2layout.split(" "); "0" == a.isprizeshow && "0" == t.real && (r = a.boxlayout2.split(" "), o = a.closebtnlayout2.split(" "), n = a.btn1layout2.split(" "), u[0] = 0, u[1] = 0, l[0] = 0, l[1] = 0, s = a.boxbgposition2), e.element.css({ position: "fixed", width: r[0], height: r[1], "z-index": 9999, "background-image": "url(" + HAO.httpsTrans(i.pop.src) + ")", "background-repeat": "no-repeat", "background-position": t.game.convertPX(s) }), e.$close.css({ position: "absolute", display: "block", width: o[0] + "px", height: o[1] + "px", top: o[2] + "px", left: o[3] + "px" }), e.$submit.css({ position: "absolute", display: "block", width: n[0] + "px", height: n[1] + "px", top: n[2] + "px", left: n[3] + "px" }).attr("href", t.url), e.$img.css({ position: "absolute", width: l[0] + "px", height: l[1] + "px", top: l[2] + "px", left: l[3] + "px", "background-image": "url(" + HAO.httpsTrans(t.img) + ")", "background-repeat": "no-repeat", "background-position": "center center" }), e.$prize.css({ position: "absolute", width: u[0] + "px", height: u[1] + "px", top: u[2] + "px", left: u[3] + "px" }).text(t.name) } catch (p) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: p.message || p.description, path: "indexher:container/module/treasure/treasure_virtual.js", ln: 102 }) } }, _bindEvent: function() {
            try {
                var e = this,
                    t = this.options;
                this.$close.click(function() {
                    try {
                        return e._baseHide(), e.remove(), !1 } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/treasure_virtual.js", ln: 110 }) } }), this.$submit.click(function() {
                    try {
                        if (e._baseHide(), e.remove(), 0 != t.real) return d.pop(t.name, t.params, t.game), !1 } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/treasure/treasure_virtual.js", ln: 119 }) } }) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/treasure/treasure_virtual.js", ln: 121 }) } } }), t.exports = { pop: l } });;
define("indexher:container/module/treasure/treasure_getGold.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/widget.js", "indexher:container/module/treasure/config.js"], function(e, t, o, i, a, r, n) {
    function s(e) {
        try {
            { c(g)[p]({ game: e }) } } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/treasure_getGold.js", ln: 103 }) } }
    var c = a,
        d = n,
        l = "hao123.",
        p = "treasure_getGold",
        g = ['<div id="treasure-gold-confirm" class="treasure-gold-confirm" monkey="treasure_gold_confirm">', '<a target="_blank" href="http://vip.hao123.com//?from=weekend" alog-text="goVip" class="gold-confirm-vip" data-hook="gold-confirm-vip"></a>', '<a href="#" title="关闭弹窗" class="gold-confirm-close" data-hook="gold-confirm-close"></a>', "</div>"].join("");
    c.widget(l + p, c.lottery.popup, { options: { className: "gold-confirm-box", isModel: !0 }, _create: function() {
            try {
                {
                    var e = this.element;
                    d.get("images") }
                this._baseCreate(), this.element.appendTo(c("body")), this.$close = c('[data-hook="gold-confirm-close"]', e), this.$goVip = c('[data-hook="gold-confirm-vip"]', e), this._render(), this._bindEvent(), this._baseShow() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/treasure_getGold.js", ln: 30 }) } }, _init: function() {
            try {} catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/treasure/treasure_getGold.js", ln: 33 }) } }, _render: function() {
            try {
                var e = this,
                    t = this.options,
                    o = t.game.popdata[5],
                    i = o.boxlayout.split(" "),
                    a = o.closebtnlayout.split(" "),
                    r = o.btn1layout.split(" "),
                    n = d.get("images");
                e.element.css({ position: "fixed", width: i[0] + "px", height: i[1] + "px", "z-index": 9999, "background-image": "url(" + HAO.httpsTrans(n.pop.src) + ")", "background-repeat": "no-repeat", "background-position": t.game.convertPX(o.boxbgposition) }), e.$close.css({ position: "absolute", display: "block", width: a[0] + "px", height: a[1] + "px", top: a[2] + "px", left: a[3] + "px" }), e.$goVip.css({ position: "absolute", display: "block", width: r[0] + "px", height: r[1] + "px", top: r[2] + "px", left: r[3] + "px" }).attr("href", t.game.logicdata.nodrwaurl) } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/treasure/treasure_getGold.js", ln: 67 }) } }, _bindEvent: function() {
            try {
                var e = this;
                e.$close.click(function() {
                    try {
                        return e._baseHide(), e.remove(), !1 } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/treasure_getGold.js", ln: 90 }) } }), e.$goVip.click(function() {
                    try { e._baseHide(), e.remove() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/treasure_getGold.js", ln: 95 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/treasure_getGold.js", ln: 96 }) } } }), t.exports = { pop: s } });;
define("indexher:container/module/treasure/game.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/format.js", "indexher:static/js/events.js", "indexher:static/js/log.js", "indexher:static/js/JSON.js", "indexher:static/js/imageloader.js", "indexher:container/module/treasure/config.js", "indexher:static/js/config.js", "indexher:static/js/store.js", "indexher:container/module/treasure/duozaiSprite.js", "indexher:container/module/treasure/progressbarSprite.js", "indexher:container/module/treasure/diamondSprite.js", "indexher:container/module/treasure/treasure_virtual.js", "indexher:container/module/treasure/treasure_ajax.js", "indexher:container/module/treasure/treasure_getGold.js", "indexher:static/js/profile.js", "indexher:static/js/pageEvents.js", "indexher:container/module/treasure/dolotteryTip.js", "indexher:static/js/login.js", "indexher:static/js/cookie.js"], function(e, t, a, r, n, o, i, s, c, d, p, g, l, h, m, u, f, x, y, b, v, j, w, k) {
    function $() {
        try { window.gameinstance = this, this.state = q.unInit, this.resourceLoaded = !1, this.login = A.get("userinfo").islanding } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/treasure/game.js", ln: 51 }) } }
    var B = n,
        z = o,
        S = i,
        C = s,
        P = c,
        T = d,
        D = p,
        A = g,
        H = l,
        I = h,
        O = m,
        G = u,
        X = f,
        E = x,
        L = y,
        U = b,
        W = v,
        C = s,
        N = j,
        R = w,
        _ = k,
        V = "treasure_logintip",
        q = D.get("gameState"),
        F = D.get("images"),
        M = '<div class="treasure-game" monkey="treasure-game"></div>',
        J = '<div></div><a id="treasure-start" class="treasure-start" href="#" title="开始游戏" style="background-image:url(#{bgurl})"></a>',
        K = '<div class="treasure-tip" style="display:none;position:absolute;background:url(#{bgurl}) #{bgposition} no-repeat;width:#{width}px;height:#{height}px;top:#{top}px;left:#{left}px;"></div>',
        Q = '<a href="#" alog-text="关闭游戏" class="treasure-close js-close"></a>',
        Y = '<div data-hook="result-box"><span data-hook="result-info"></span></div>';
    $.prototype.init = function(e, t, a, r, n, o) {
        try { this.diamondData = "hao123-index-tnwbdz" == n ? e[1].data : e[2].data, this.initdata = e[0], this.logicdata = t[0], this.popdata = a, this.goodtotal = r, this.initDiamondConf(), this.pageid = n, this.type = e[2].type || "0", this.updateStore(), this.$parent = o || B("body"), this.initConfig(e), this.slideState = U.get("slide"), this.diamonds = [], this.show = !0;
            var i = this;
            return this.loadResource(function(e) {
                try { e && i.initGameScene() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/game.js", ln: 84 }) } }), !0 } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/treasure/game.js", ln: 86 }) } }, $.prototype.convertPX = function(e) {
        try {
            return e.replace(/(\S+)\s+(\S+)/, "$1px $2px") } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/game.js", ln: 91 }) } }, $.prototype.initDiamondConf = function() {
        try {
            for (var e, t, a, r, n, o, i, s = this, c = s.diamondData.length, d = s.diamondData, p = 0; c > p; p++) e = d[p].diamondconf.split(" "), t = d[p].state1, a = d[p].state2, r = "diamond" + e[0], o = "images." + r + "state1", i = "images." + r + "state2", n = { width: e[1], height: e[2], top: e[3], left: e[4], index: e[0] }, D.set(r, n), D.set(o, HAO.httpsTrans(t)), D.set(i, HAO.httpsTrans(a)) } catch (g) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: g.message || g.description, path: "indexher:container/module/treasure/game.js", ln: 126 }) } }, $.prototype.renderResult = function() {
        try {
            var e = this,
                t = e.initdata.resultbox.split(" "),
                a = e.initdata.resultinput.split(" "),
                r = B(Y);
            e.$container.append(r), e.resultBox = B('[data-hook="result-box"]', e.element), e.resultInfo = B('[data-hook="result-info"]', e.element), e.resultBox.css({ position: "absolute", width: t[0] + "px", height: t[1] + "px", top: t[2] + "px", left: t[3] + "px", "background-position": e.convertPX("" + t[4] + " " + t[5]), "background-image": "url(" + HAO.httpsTrans(F.duozai.src) + ")", "background-repeat": "no-repeat" }), e.resultInfo.css({ position: "absolute", width: a[0] + "px", height: a[1] + "px", top: a[2] + "px", left: a[3] + "px", "font-size": a[4] + "px", "line-height": a[4] + "px", color: a[5], "text-align": "center" }).text(e.goodtotal) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/treasure/game.js", ln: 157 }) } }, $.prototype.initConfig = function(e) {
        try {
            var t = this,
                a = D.get("lottery.lotteryUrl"),
                r = D.get("lottery.submitUrl"),
                n = D.get("lottery.goldUrl"),
                o = e[0].initanimationmap.split(","),
                i = e[0].hoveranimationmap.split(",");
            t.duozaiwidth = e[0].duozaiwidth, t.duozaiheight = e[0].duozaiheight, t.duozaiinitposition = t.convertPX(e[0].duozaiinitposition), t.containerbottomgame = parseInt(e[0].containerbottomgame, 10), t.startbtnheight = parseInt(e[0].startbtnheight, 10), t.startBtnPosition = t.convertPX(e[0].startbtnposition), t.closeBtnConf = e[0].closebtnconf.split(" "), t.closeBtnPosition = t.convertPX(t.closeBtnConf[2] + " " + t.closeBtnConf[3]), t.containerHeightGameing = e[0].containerheightgameing, t.containerBottomGameing = t.containerbottomgame + t.startbtnheight, t.initAnimationPosition = t.convertPX(o[0]), t.initanimationinterval = parseInt(e[0].initanimationinterval, 10), t.hoveranimationinterval = parseInt(e[0].hoveranimationinterval, 10), t.gameTipConf = e[0].gameruleconf.split(" "), t.gameTipPosition = t.convertPX(t.gameTipConf.slice(4).join(" ")), t.progressBarConf = e[0].progressbarconf.split(" "), t.progressBarStep = e[0].progressbarstep.split(" "), t.progressBarWidth = t.progressBarConf[0], t.progressBarHeight = t.progressBarConf[1], t.progressBarLeft = t.progressBarConf[2], t.progressBarBottom = t.progressBarConf[3], t.progressScoreMap = { zero: t.progressBarStep[0], one: t.progressBarStep[1], two: t.progressBarStep[2], three: t.progressBarStep[3], four: t.progressBarStep[4], five: t.progressBarStep[5], six: t.progressBarStep[6], seven: t.progressBarStep[7] }, t.progressBarEmptyPosition = t.convertPX(e[0].progressbaremptyposition), t.progressBarFullPosition = t.convertPX(e[0].progressbarfullposition), t.progressBarStep = e[0].progressbarstep.split(" "), t.getPrizeBtnConf = e[0].getprizebtnconf.split(" "), D.set("duozai.width", e[0].duozaiwidth), D.set("duozai.height", e[0].duozaiheight), D.set("duozai.normal.frames", o), D.set("duozai.normal.interval", t.initanimationinterval), D.set("duozai.working.frames", i), D.set("duozai.working.interval", t.hoveranimationinterval), D.set("progressbar.width", t.progressBarWidth), D.set("progressbar.height", t.progressBarHeight), D.set("progressbar.left", t.progressBarLeft), D.set("progressbar.bottom", t.progressBarBottom), D.set("progressbar.btnwidth", t.getPrizeBtnConf[0]), D.set("progressbar.btnheight", t.getPrizeBtnConf[1]), D.set("progressbar.btnleft", t.getPrizeBtnConf[2]), D.set("progressbar.btnbottom", t.getPrizeBtnConf[3]), D.set("progressbar.score", t.progressScoreMap), D.set("progressbar.emptyposition", t.progressBarEmptyPosition), D.set("progressbar.fullposition", t.progressBarFullPosition), D.set("images.duozai", HAO.httpsTrans(e[0].duozai)), D.set("images.imagebtn", HAO.httpsTrans(e[0].imagebtn)), D.set("images.rule", HAO.httpsTrans(e[0].rule)), D.set("images.animateimg", HAO.httpsTrans(t.popdata[1].animateimgurl)), D.set("images.pop", HAO.httpsTrans(e[0].pop)), D.set("lottery.pid", e[0].pid), D.set("lottery.token", e[0].token), D.set("lottery.lotteryUrl", HAO.httpsTrans(a)), D.set("lottery.submitUrl", HAO.httpsTrans(r)), D.set("lottery.goldUrl", HAO.httpsTrans(n)) } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/treasure/game.js", ln: 229 }) } }, $.prototype.updateStore = function() {
        try {
            var e = H.get("treasure-state"),
                t = H.get("treasure-score"),
                a = H.get("treasure-createtime"),
                r = H.get("treasure-diamonds");
            this.state = e ? e : q.init, this.score = t ? t : 0, this.diamondStore = r ? r : "{}", this.diamondStore = P.parse(this.diamondStore);
            var n = Date.parse(new Date) / 1e3,
                o = 172800;!a || n - a >= o ? this.resetStore() : this.createtime = a } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/treasure/game.js", ln: 266 }) } }, $.prototype.resetStore = function() {
        try {
            var e = H.get("treasure-state"),
                t = H.get("treasure-score"),
                a = H.get("treasure-createtime"),
                r = H.get("treasure-diamonds");
            e && H.remove("treasure-state"), t && H.remove("treasure-score"), a && H.remove("treasure-createtime"), r && H.remove("treasure-diamonds") } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/treasure/game.js", ln: 279 }) } }, $.prototype.resetData = function() {
        try {
            var e = this;
            e.score = 0, e.state = q.unInit, e.createtime = 0, e.diamondStore = "{}", e.diamondStore = P.parse(e.diamondStore), e.diamonds = [], e.index = !0 } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/game.js", ln: 291 }) } }, $.prototype.loadResource = function(e) {
        try {
            if (this.resourceLoaded) e(!0);
            else {
                var t = this;
                T(F, function(a) {
                    try { t.resouceLoaded = a, e(a) } catch (r) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: r.message || r.description, path: "indexher:container/module/treasure/game.js", ln: 305 }) } }) } } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/treasure/game.js", ln: 307 }) } }, $.prototype.initGameScene = function() {
        try {
            var e = this;
            e.createStage(), e.createDuozai(function() {
                try {
                    if (e.$container.css("overflow", "visible"), 0 == e.score && e.state != q.start && e.state != q.end) e.duozai.playNormalAnimation(function() {
                        try { e.createStartBtn(), e.createCloseBtn(), "1" == e.initdata.resultshow && e.renderResult() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/game.js", ln: 323 }) } });
                    else {
                        if ("1" == e.slideState) {
                            var t = parseInt(W.getViewport().width, 10);
                            1450 > t && S.done("slidetoolbar.fold") }
                        e.duozai.playNormalAnimation(function() {
                            try { e.createCloseBtn(), "1" == e.initdata.resultshow && e.renderResult() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/game.js", ln: 338 }) } }) }
                    e.createProgressBar(), e.createTip(), e.state != q.start && e.state != q.end || (e.$container.addClass("treasure-gameing").css({ bottom: e.containerBottomGameing, height: e.containerHeightGameing }), e.duozai.$tpl.css("bottom", 0), e.progressbar.playflyanimation(), e.createDiamonds()), e.bindEvent() } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/treasure/game.js", ln: 355 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/game.js", ln: 356 }) } }, $.prototype.createStage = function() {
        try {
            var e = this;
            e.$container = B(M).appendTo(e.$parent), e.$container.css({ width: e.duozaiwidth, height: e.duozaiheight, bottom: e.containerbottomgame }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/game.js", ln: 367 }) } }, $.prototype.createDuozai = function(e) {
        try {
            var t = this;
            this.duozai = new I(t), this.$container.append(this.duozai.$tpl), t.sendCurrent = function(e) {
                try { "index" != e ? (t.index = !1, t.$container.hide()) : (t.index = !0, t.$container.show()) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/treasure/game.js", ln: 383 }) } }, S.on("goTop.sendCurrent", t.sendCurrent), this.duozai.show(e) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/treasure/game.js", ln: 387 }) } }, $.prototype.createStartBtn = function() {
        function e(e) {
            try {
                var t = B("#hao123-bodyct").offset().top,
                    a = B(".hao123-search .fixed-bg").height() || 60;
                B("body").scrollTop(t - a), e && e() } catch (r) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: r.message || r.description, path: "indexher:container/module/treasure/game.js", ln: 438 }) } }
        try {
            var t = this,
                a = B(z(J, { bgurl: F.duozai.src }));
            this.$container.append(a), a = B("#treasure-start"), a.css({ display: "block", width: t.duozaiwidth, height: t.startbtnheight, "background-image": "url(" + F.imagebtn.src + ")", "background-position": t.startBtnPosition, "background-repeat": "no-repeat", "margin-top": t.duozaiheight - t.startbtnheight }), a.bind("mousedown", function() {
                try { a.addClass("clicked") } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/treasure/game.js", ln: 408 }) } }).bind("click", function() {
                try {
                    if (a.remove(), "1" == t.slideState) {
                        var r = parseInt(W.getViewport().width, 10);
                        1450 > r && S.done("slidetoolbar.fold") }
                    return e(function() {
                        try { t.duozai.stopWorkingAnimation(), t.start() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/treasure/game.js", ln: 421 }) } }), !1 } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/treasure/game.js", ln: 423 }) } }).hover(function() {
                try { t.$tip.show() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/treasure/game.js", ln: 426 }) } }, function() {
                try { t.$tip.hide() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/treasure/game.js", ln: 429 }) } }), t.duozai.$tpl.one("click", function() {
                try { a.click() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/treasure/game.js", ln: 432 }) } }) } catch (r) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: r.message || r.description, path: "indexher:container/module/treasure/game.js", ln: 439 }) } }, $.prototype.createCloseBtn = function() {
        try {
            var e = this,
                t = B(Q);
            e.$container.append(t), e.$closeBtn = t, t.css({ top: e.closeBtnConf[0] + "px", left: e.closeBtnConf[1] + "px", "background-image": "url(" + F.imagebtn.src + ")", "background-position": e.closeBtnPosition }), e.$closeBtn.click(function() {
                try {
                    return e.destroy(), !1 } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/game.js", ln: 456 }) } }) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/treasure/game.js", ln: 457 }) } }, $.prototype.createDiamonds = function() {
        function e(e, t) {
            try {
                var a = e.attr("cls"),
                    r = e.attr("alog-custom");
                t.attr({ cls: a, "alog-custom": r }) } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/treasure/game.js", ln: 480 }) } }
        try {
            var t = this,
                a = {},
                r = this.diamondData,
                n = r.length;
            if (t.diamonds = [], t.state != q.start) return;
            for (var o = 0; n > o; o++) {
                var i = r[o].url.replace(/(.*)\/$/, "$1");
                a[i] = r[o] } "1" != t.type || "hao123-index-tnwbdz" == t.pageid ? (B("#box-famoussite .mainlink").each(function() {
                try {
                    var r = this.href.replace(/(.*)\/$/, "$1");
                    if (a[r]) {
                        var n = a[r].diamondconf.split(" ")[0],
                            o = new G(B(this), r, t.diamondStore, n);
                        B(this).parent().append(o.$tpl), e(o.$tpl.prev(".mainlink"), o.$tpl), t.diamonds.push(o.$tpl), o.$tpl.click(function() {
                            try {
                                var e = parseInt(B(this).attr("data-state"), 10),
                                    a = H.get("treasure-score") || 0;
                                if (e += 1, t.diamondStore[r] = e, H.set("treasure-diamonds", P.stringify(t.diamondStore)), o.render(e), 2 == e && (++a > 6 && (a = 7, S.emit("weekend.diamond-clear"), t.state = q.end, H.set("treasure-state", t.state)), t.score = a, H.set("treasure-score", a), t.progressbar.forward(a), a > 6)) {
                                    if ("1" != t.login && "1" == t.logicdata.isloginfirst) return; "1" == t.login && !_.get(V) && _.set(V, 3, { expires: 1 }), S.emit("weekend.progressbar-full") } } catch (n) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: n.message || n.description, path: "indexher:container/module/treasure/game.js", ln: 520 }) } }) } } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/treasure/game.js", ln: 522 }) } }), B("#box-starbar .baritem-link").each(function() {
                try {
                    var e = this.href.replace(/(.*)\/$/, "$1");
                    if (a[e]) {
                        var r = a[e].diamondconf.split(" ")[0],
                            n = new G(B(this), e, t.diamondStore, r);
                        B(this).parent().append(n.$tpl), t.diamonds.push(n.$tpl), n.$tpl.click(function() {
                            try {
                                var a = parseInt(B(this).attr("data-state"), 10),
                                    r = H.get("treasure-score") || 0;
                                if (a += 1, t.diamondStore[e] = a, H.set("treasure-diamonds", P.stringify(t.diamondStore)), n.render(a), 2 == a && (++r > 6 && (r = 7, S.emit("weekend.diamond-clear"), t.state = q.end, H.set("treasure-state", t.state)), t.score = r, H.set("treasure-score", r), t.progressbar.forward(r), r > 6)) {
                                    if ("1" != t.login && "1" == t.logicdata.isloginfirst) return; "1" == t.login && !_.get(V) && _.set(V, 3, { expires: 1 }), S.emit("weekend.progressbar-full") } } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/treasure/game.js", ln: 561 }) } }) } } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/treasure/game.js", ln: 563 }) } })) : B("#box-coolsite .mainlink").each(function() {
                try {
                    var r = this.href.replace(/(.*)\/$/, "$1");
                    if (a[r]) {
                        var n = new G(B(this), r, t.diamondStore);
                        B(this).parent().append(n.$tpl), e(n.$tpl.prev(".mainlink"), n.$tpl), t.diamonds.push(n.$tpl), n.$tpl.click(function() {
                            try {
                                var e = parseInt(B(this).attr("data-state"), 10),
                                    a = H.get("treasure-score") || 0;
                                e += 1, t.diamondStore[r] = e, H.set("treasure-diamonds", P.stringify(t.diamondStore)), n.render(e), 2 == e && (++a > 6 && (a = 7, S.emit("weekend.diamond-clear"), t.state = q.end, H.set("treasure-state", t.state)), t.score = a, H.set("treasure-score", a), t.progressbar.forward(a), a > 6 && S.emit("weekend.progressbar-full")) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/treasure/game.js", ln: 594 }) } }) } } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/treasure/game.js", ln: 596 }) } }) } catch (s) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: s.message || s.description, path: "indexher:container/module/treasure/game.js", ln: 599 }) } }, $.prototype.start = function() {
        try {
            var e = this;
            e.resetStore(), e.createtime || H.set("treasure-createtime", Date.parse(new Date) / 1e3), H.set("treasure-state", q.start), H.set("treasure-score", 0), e.score = 0, e.state = q.start, e.duozai.stopWorkingAnimation(), e.$tip.hide(), e.$container.addClass("treasure-gameing").css({ bottom: e.containerBottomGameing, height: e.containerHeightGameing }), e.duozai.$tpl.css("bottom", 0), e.progressbar.playflyanimation(), e.createDiamonds() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/game.js", ln: 622 }) } }, $.prototype.createProgressBar = function() {
        try {
            var e = this;
            this.progressbar = new O(e), this.$container.append(this.progressbar.$tpl); { _.get(V) }
            S.on("weekend.progressbar-full", function() {
                try { e.goNext() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/game.js", ln: 632 }) } }), _.get(V) && S.emit("weekend.progressbar-full"), S.on("weekend.progressbar-bindbtnclick", function() {
                try { e.progressbar.$prizeBtn.click(function() {
                        try {
                            return R.show(function() {
                                try {!_.get(V) && _.set(V, 1, { expires: 1 }), window.location.reload() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/treasure/game.js", ln: 647 }) } }), !1 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/treasure/game.js", ln: 649 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/game.js", ln: 650 }) } }) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/game.js", ln: 651 }) } }, $.prototype.doLottery = function() {
        function e(e) {
            try {
                var a = e.errno,
                    r = e.data,
                    i = {};
                if (i.pid = n, i.token = o, i.winfo = {}, 0 === a) {
                    var s = parseInt(r.prize_id);
                    0 != s ? (i.oid = r.oid, X.pop(t, r, i)) : L.pop(t) } else L.pop(t) } catch (c) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: c.message || c.description, path: "indexher:container/module/treasure/game.js", ln: 685 }) } }
        try {
            var t = this,
                a = {},
                r = D.get("lottery"),
                n = a.pid = r.pid,
                o = a.token = r.token;
            E.doPost(r.lotteryUrl, a, e) } catch (i) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: i.message || i.description, path: "indexher:container/module/treasure/game.js", ln: 686 }) } }, $.prototype.goNext = function() {
        try {
            var e = this;
            B("body").scrollTop(0);
            var t = _.get(V); "0" == e.login ? (N.pop(e, e.popdata[1]), e.restart()) : "1" == e.login && ((3 == t || 1 == t) && (_.remove(V), N.pop(e, e.popdata[1]), e.restart()), 2 == t && (_.remove(V), e.doLottery())) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/treasure/game.js", ln: 723 }) } }, $.prototype.bindEvent = function() {
        try {
            var e = this;
            e.duozai.$tpl.hover(function() {
                try { e.$tip.show() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/game.js", ln: 729 }) } }, function() {
                try { e.$tip.hide() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/game.js", ln: 732 }) } }), e.$container.hover(function() {
                try { 7 == e.score || (e.duozai.normalAnimationDone && e.duozai.playWorkingAnimation(), e.state == q.init && C({ page: "index", level: 1, type: "auto", k: "weekend-hover" })) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/game.js", ln: 750 }) } }, function() {
                try { 7 == e.score || e.duozai.normalAnimationDone && e.duozai.stopWorkingAnimation() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/game.js", ln: 759 }) } }), S.on("weekend.progressbar-forward", function() {
                try { e.progressbar.forward() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/game.js", ln: 762 }) } }), S.on("weekend.progressbar-reset", function() {
                try { e.progressbar.reset() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/game.js", ln: 765 }) } }), S.on("weekend.diamond-clear", function() {
                try {
                    for (var t = e.diamonds.length, a = 0; t > a; a++) e.diamonds[a].remove() } catch (r) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: r.message || r.description, path: "indexher:container/module/treasure/game.js", ln: 772 }) } }), S.on("weekend.diamond-hide", function() {
                try {
                    for (var t = e.diamonds.length, a = 0; t > a; a++) e.diamonds[a].hide() } catch (r) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: r.message || r.description, path: "indexher:container/module/treasure/game.js", ln: 778 }) } }), S.on("weekend.diamond-show", function() {
                try {
                    for (var t = e.diamonds.length, a = 0; t > a; a++) e.diamonds[a].show() } catch (r) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: r.message || r.description, path: "indexher:container/module/treasure/game.js", ln: 785 }) } }), S.on("treasure.createDiamonds", function() {
                try { e.createDiamonds() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/game.js", ln: 789 }) } }), e.menuChange = function(t) {
                try { 0 == t ? (e.index = !0, e.$container && e.$container.show()) : (e.index = !1, window.menuChange = !0, e.$container && e.$container.hide()) } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/treasure/game.js", ln: 801 }) } }, e.viewChange = function(t) {
                try {
                    if (t = t || W.getViewport(), !e.index) return;
                    t.width < 1339 ? (e.$container && e.$container.hide(), S.emit("weekend.diamond-hide")) : (e.$container && e.$container.show(), S.emit("weekend.diamond-show")) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/game.js", ln: 816 }) } }, S.on("menus.changed", e.menuChange), W.on("viewport.deferchange", e.viewChange) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/game.js", ln: 820 }) } }, $.prototype.unEvents = function() {
        try {
            var e = this;
            S.un("weekend.progressbar-forward"), S.un("weekend.progressbar-reset"), S.un("weekend.diamond-clear"), S.un("weekend.progressbar-hide"), S.un("weekend.progressbar-show"), S.un("treasure.createDiamonds"), S.un("weekend.progressbar-full"), S.un("weekend.progressbar-bindbtnclick"), e.menuChange && S.un("menus.changed", e.menuChange), e.viewChange && W.un("viewport.deferchange", e.viewChange), e.sendCurrent && S.un("goTop.sendCurrent", e.sendCurrent) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/game.js", ln: 836 }) } }, $.prototype.createTip = function() {
        try {
            var e = this;
            this.$tip = B(z(K, { bgurl: F.imagebtn.src, bgposition: e.gameTipPosition, width: e.gameTipConf[0], height: e.gameTipConf[1], top: e.gameTipConf[2], left: e.gameTipConf[3] })), this.$container.append(this.$tip) } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/game.js", ln: 850 }) } }, $.prototype.restart = function() {
        try { this.destroy(), this.initGameScene() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/treasure/game.js", ln: 855 }) } }, $.prototype.destroy = function() {
        try { this.$container.remove(), S.emit("weekend.diamond-clear"), this.resetStore(), this.resetData(), this.unEvents() } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/treasure/game.js", ln: 864 }) } }, t.exports = new $ });;
define("indexher:container/module/treasure/sharePop.js", ["global", "module", "exports", "require", "indexher:static/js/jquery.js", "indexher:static/js/widget.js", "indexher:container/module/treasure/config.js", "indexher:static/js/cookie.js", "indexher:container/module/treasure/dolotteryTip.js", "indexher:container/module/treasure/treasure_ajax.js", "indexher:static/js/share.js"], function(e, t, o, a, s, i, r, n, p, h, c) {
    function d(e, t) {
        try {
            { l(j)[b]({ popconf: t, game: e }) } } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/treasure/sharePop.js", ln: 230 }) } }
    var l = s,
        u = r,
        g = n,
        f = p,
        x = h,
        m = c,
        y = "hao123.",
        b = "sharePop",
        k = "treasure_poptip",
        j = ['<div id="treasure-sharePop" class="treasure-sharePop" monkey="treasure-sharePop">', '<a href="#" title="关闭弹窗" class="sharePop-close" data-hook="sharePop-close"></a>', '<a href="#" data-hook="share-box" alog-text="分享抽奖"></a>', '<div data-hook="share-container">', '<a href="#" data-hook="share-qqzone" title="分享到qq空间" data-type="qzone"></a>', '<a href="#" data-hook="share-weibo" title="分享到新浪微博" data-type="sina"></a>', '<a href="#" data-hook="share-qq" title="分享到腾讯微博" data-type="qq"></a>', "</div>", '<a href="#" data-hook="dolotteryTip" alog-text="点击抽奖"></a>', "</div>"].join(""),
        q = '<div data-hook="interface-info"></div>';
    l.widget(y + b, l.lottery.popup, { options: { className: "sharePop-box", isModel: !0 }, _create: function() {
            try {
                var e = this.element;
                this._baseCreate(), this.element.appendTo(l("body")), this.$close = l('[data-hook="sharePop-close"]', e), this.$share = l('[data-hook="share-box"]', e), this.$shareContainer = l('[data-hook="share-container"]', e), this.$qzone = l('[data-hook="share-qqzone"]', e), this.$weibo = l('[data-hook="share-weibo"]', e), this.$qq = l('[data-hook="share-qq"]', e), this._render(), this._bindEvent(), this._baseShow() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/sharePop.js", ln: 45 }) } }, _init: function() {
            try {} catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/treasure/sharePop.js", ln: 48 }) } }, _render: function() {
            try {
                var e = this,
                    t = this.options,
                    o = u.get("images"),
                    a = t.popconf.boxlayout.split(" "),
                    s = t.popconf.closebtnlayout.split(" "),
                    i = t.popconf.btn1layout.split(" "),
                    r = parseInt(t.popconf.treasure_poptip),
                    n = t.popconf.sharecontainer.split(" "),
                    p = t.popconf.shareqqzone.split(" "),
                    h = t.popconf.shareqq.split(" "),
                    c = t.popconf.shareweibo.split(" ");
                e.element.css({ position: "fixed", width: a[0], height: a[1], "z-index": 9999, "background-image": "url(" + HAO.httpsTrans(o.pop.src) + ")", "background-repeat": "no-repeat", "background-position": t.game.convertPX(t.popconf.boxbgposition) }), e.$close.css({ position: "absolute", display: "block", width: s[0] + "px", height: s[1] + "px", top: s[2] + "px", left: s[3] + "px" }), e.$share.css({ position: "absolute", display: "block", width: i[0] + "px", height: i[1] + "px", top: i[2] + "px", left: i[3] + "px", "background-position": t.game.convertPX("" + i[4] + " " + i[5]), "background-image": "url(" + HAO.httpsTrans(o.pop.src) + ")", "background-repeat": "no-repeat" }), g.setMidnight(k, 1, { expires: r }), e.$qzone.css({ position: "absolute", display: "block", width: p[0] + "px", height: p[1] + "px", top: p[2] + "px", left: p[3] + "px" }), e.$qq.css({ position: "absolute", display: "block", width: h[0] + "px", height: h[1] + "px", top: h[2] + "px", left: h[3] + "px" }), e.$weibo.css({ position: "absolute", display: "block", width: c[0] + "px", height: c[1] + "px", top: c[2] + "px", left: c[3] + "px" }), e.$shareContainer.css({ position: "absolute", display: "none", width: n[0] + "px", height: n[1] + "px", top: n[2] + "px", left: n[3] + "px", "background-position": t.game.convertPX("" + n[4] + " " + n[5]), "background-image": "url(" + HAO.httpsTrans(o.pop.src) + ")", "background-repeat": "no-repeat" }), e._renderInterface() } catch (d) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: d.message || d.description, path: "indexher:container/module/treasure/sharePop.js", ln: 128 }) } }, _renderInterface: function() {
            function e(e) {
                try {
                    var t, a = e.err_code,
                        s = e.data;
                    t = (200 == a || 201 == a) && 0 != s ? s : n, o.append(l(q));
                    var r = l('[data-hook="interface-info"]', o);
                    r.css({ position: "absolute", width: i[0] + "px", height: i[1] + "px", top: i[2] + "px", left: i[3] + "px", "font-size": i[4] + "px", "line-height": i[4] + "px", color: i[5], "text-align": "center" }).text(t) } catch (p) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: p.message || p.description, path: "indexher:container/module/treasure/sharePop.js", ln: 167 }) } }
            try {
                var t = this,
                    o = this.element,
                    a = t.options,
                    s = a.game.logicdata,
                    i = a.popconf.input1layout.split(" "),
                    r = HAO.httpsTrans(s.interfacefirst),
                    n = parseFloat(a.game.goodtotal) + .7;
                n = n.toFixed(1), x.doPost(r, {}, e) } catch (p) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: p.message || p.description, path: "indexher:container/module/treasure/sharePop.js", ln: 168 }) } }, _share: function(e) {
            try {
                var t, o = this,
                    a = e,
                    s = o.options.popconf,
                    i = s.shareurl.split(","),
                    r = s.sharetitle,
                    n = HAO.httpsTrans(s.sharepic),
                    p = s.sharetext;
                switch (a) {
                    case "qzone":
                        t = i[0];
                        break;
                    case "sina":
                        t = i[1];
                        break;
                    case "qq":
                        t = i[2] }
                p = p + " " + t, m(a, p, n, r, t) } catch (h) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: h.message || h.description, path: "indexher:container/module/treasure/sharePop.js", ln: 193 }) } }, _bindEvent: function() {
            try {
                var e = this,
                    t = e.options;
                e.$close.click(function() {
                    try {
                        return e._baseHide(), e.remove(), !1 } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/sharePop.js", ln: 201 }) } }), e.$share.click(function() {
                    try {
                        return !1 } catch (e) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: e.message || e.description, path: "indexher:container/module/treasure/sharePop.js", ln: 204 }) } }).mouseover(function() {
                    try { e.$share.hide(), e.$shareContainer.show() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/sharePop.js", ln: 208 }) } }), e.$shareContainer.mouseleave(function() {
                    try { e.$share.show(), e.$shareContainer.hide() } catch (t) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: t.message || t.description, path: "indexher:container/module/treasure/sharePop.js", ln: 212 }) } }), e.$shareContainer.children("a").click(function() {
                    try {
                        var o = l(this).data("type");
                        return e._share(o), e._baseHide(), e.remove(), f.pop(t.game, t.game.popdata[1]), !1 } catch (a) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: a.message || a.description, path: "indexher:container/module/treasure/sharePop.js", ln: 221 }) } }) } catch (o) { "undefined" != typeof alog && alog("exception.fire", "catch", { msg: o.message || o.description, path: "indexher:container/module/treasure/sharePop.js", ln: 222 }) } } }), t.exports = { pop: d } });
