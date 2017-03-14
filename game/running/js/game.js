if (typeof HdGame == "undefined"){ 
    HdGame = {} 
}
(function(a){ 
    a.imgReady = (function() {
        var f = [],
            e = null,
            d = function() {
                var g = 0;
                for (; g < f.length; g++) { f[g].end ? f.splice(g--, 1) : f[g]() }!f.length && c() },
            c = function() { clearInterval(e);
                e = null };
        return function(h, m, o, l) {
            var n, i, p, k, g, j = new Image();
            if (typeof h === "object") { j = h } else { j.src = h }
            if (j.complete) { m.call(j);
                o && o.call(j);
                return }
            i = j.width;
            p = j.height;
            j.onerror = function() { l && l.call(j);
                n.end = true;
                j = j.onload = j.onerror = null };
            n = function() { k = j.width;
                g = j.height;
                if (k !== i || g !== p || k * g > 1024) { m.call(j);
                    n.end = true } };
            n();
            j.onload = function() {
                !n.end && n();
                o && o.call(j);
                j = j.onload = j.onerror = null 
            };
            if (!n.end) { f.push(n);
                if (e === null) { e = setInterval(d, 40) } 
            } } })();
    a.initEdit = function(d) {
        var o = d.origin,
            k = d.originDef,
            r = d.originMod,
            c = {};
        (function() {
            if (!r) {
                return }
            $.each(r, function(s, u) {
                var v = o[s];
                if (u.css) {
                    function t(w) {
                        if (typeof w.opt !== "undefined") { w.opt = 0 }
                        if (w.tra !== "undefined") { w.defTra = w.tra }
                        w.defVal = w.val }
                    $.each(u.css, function(w, x) {
                        if (x.css) { $.each(x.css, function(y, z) { t(z) }) } else { t(x) } });
                    if (g_config.isNewGame) { $.extend(true, v.css, u.css) } }
                if (u.text) { $.each(u.text, function(w, x) {
                        if (g_config.isNewGame) { $.extend(true, v.text, u.text) }
                        if (x.type == 2) { x.txtopt = 0;
                            delete x.numLimit } }) } });
            $.extend(true, k, r) 
        })();

        function q(t, z) {
            var A = "getImgInfo-" + t;
            if (z) { 
                A = "getImgInfo-rem-" + t 
            }
            var w = c[A];
            if (w) {return w }
            var v = h(t)[0];
            if (!v) {return }
            w = { name: t, css: v.css };
            if (v.path) {
                if (a.getType(v.path[0]) === "array") { 
                    w.path = [];
                    for (var s = 0; s < v.path.length; s++) { 
                        w.path[s] = a.getSrc(v.path[s][0]) 
                    } 
                } else { 
                    w.path = a.getSrc(v.path[0]) 
                } 
            }
            var x = z ? parseFloat : parseRemToPx;
            var B = { 
                size: ["width", "height"], 
                pos: ["left", "top"] 
            };
            for (var A in B) {
                var y = B[A];
                var u = v[A];
                if (!u) {
                    continue 
                }
                if (a.getType(u) === "array") { 
                    w[y[0]] = [], 
                    w[y[1]] = [];
                    $.each(u, function(C, D) { 
                        w[y[0]].push(x(D[y[0]]));
                        w[y[1]].push(x(D[y[1]])) 
                    }) 
                } else { 
                    w[y[0]] = x(u[y[0]]);
                    w[y[1]] = x(u[y[1]]) 
                } 
            }
            c[A] = w;
            return w 
        }

        function l(w, t, s) {
            var v = s ? t.defVal : t.val;
            var u = s ? t.defTra : t.tra;
            if (!v) {
                return }
            if (t.from) { w = $(t.from) }
            if (t.type !== "color") {
                if (t.name === "font-size" && typeof v == "number") { w.css(t.name, (v / 20) + "rem") } else { w.css(t.name, v) } } else {
                if (t.name === "text-shadow") { w.css(t.name, g(j(v, u))) } else { w.css(t.name, j(v, u)) } } }

        function g(s) {
            return s + " -1px -1px 0px, " + s + " 0px -1px 0px, " + s + " 1px -1px 0px, " + s + " 1px 0px 0px, " + s + " 1px 1px 0px, " + s + " 0px 1px 0px, " + s + " -1px 1px 0px, " + s + " -1px 0px 0px" }

        function j(t, s) {
            if (typeof s === "undefined" || s == -1) {
                return t }
            return "rgba" + t.substring(t.indexOf("("), t.indexOf(")")) + "," + (s ? s : 0) + ")" }

        function h(t) {
            for (var u = 0; u < o.length; u++) {
                var s = o[u];
                if (s.name === t) {
                    return [s, k[u]] 
                } 
            }
            return [false, false] 
        }

        function f(u, t) {
            var s = {};
            s.from = u;
            s.title = t[1];
            s.limit = t[2];
            s.defSrc = a.getSrc(t[0]);
            return s 
        }

        function p(s, t) { s.each(function() {
                if (/img/i.test($(this)[0].nodeName)) { $(this).attr("src", t) } else { $(this).css("background-image", 'url("' + t + '")') } }) }

        function n(t, s) { a.getType(s) === "undefined" && (s = 0);
            return a.getType(t) === "array" ? (t[s] || t[0]) : t }

        function m(R) {
            var Q = typeof R === "object" ? R : h(R),
                x = Q[0],
                H = Q[1],
                R = x.name,
                z = $(".editTarget-" + R),
                y = x.pos,
                E = x.size,
                G = H.path,
                u = H.size,
                w = H.pos;
            z = z.not(function() {
                return $(this).data("hasBindEdit") });
            var B = -2,
                P = null,
                v = false,
                N = null,
                J = true;
            if (H.edit) {
                if (typeof H.edit === "number") { B = H.edit } else {
                    if (H.edit === "_background") {!d.bgList && (d.bgList = []);
                        d.bgList.push({ from: ".editTarget-" + R + ",.editRelate-" + R, defSrc: a.getSrc(G[0]) });
                        z.data("hasBindEdit", true);
                        return } else {
                        if (H.edit !== "_none") { P = [];
                            if (c["edit-" + H.edit]) { P = c["edit-" + H.edit] } else {
                                var D = [];
                                if (H.edit === "all") { D = d.originDef.filter(function(S) {
                                        return !S.formDefaultStyle && S.edit != "_background" }) } else { $.each(H.edit.split(","), function(S, T) { D.push(h(T)[1]) }) }
                                for (var O = 0; O < D.length; O++) {
                                    var C = D[O].path;
                                    var I = D[O].name;
                                    var t = ".editTarget-" + I + ",.editRelate-" + I;
                                    if (typeof C != "undefined") {
                                        if (a.getType(C[0]) === "array") {
                                            for (var K = 0; K < C.length; K++) { K > 0 && (t = ".editTarget-" + I + "-" + K + ",.editRelate-" + I + "-" + K);
                                                P.push(f(t, C[K])) } } else { P.push(f(t, C)) } } }!c["edit-" + H.edit] && (c["edit-" + H.edit] = P) }
                            B = -1 } else { J = false } } } } else { J = false }
            var A = "editTarget-" + R,
                M = null,
                L = false;
            if (H.css || H.cssAll) {
                if (H.cssAll) { N = [];
                    $.each(H.cssAll, function(S, T) {
                        if (h(T)[1].css) { N = N.concat(h(T)[1].crrCssArg) } }) } else { N = H.crrCssArg }
                v = !N[0].targetName ? true : N[0].targetName;
                if (H.cssEdit == 1) {
                    var s = N;
                    parent.Edit.addEditBtn("编辑背景", "." + A, function() { parent.Edit.Css.showCssByGame.call($("." + A), "." + A, s);
                        parent.operateFlagList[21] = true;
                        a.logDog(1000078, 5);
                        return false });
                    v = false, N = null } }
            if (H.text) { J = !H.text[0].targetName ? true : H.text[0].targetName;
                x.text = $.extend(true, [], H.text, x.text);
                if (H.text[0].type == 1) { J = false }
                if (x.text.filter(function(S) {
                        return S.type == 2 }).length > 0) { B = 0;
                    A = function() { i.call(this, x.text, H.text, R) } } }
            if (H.edit || N) { a.initModuleLayer(z, B, A, P, v, N, J) }
            var F = (a.getType(w) === "array" && a.getType(u) !== "array");
            z.each(function(X) {
                var V = n(y, X),
                    U = n(E, X),
                    T = n(u, X),
                    W = n(w, X);
                if (U) { $(this).addClass("slaveImg");
                    if (!$(this).parents().hasClass("imgContainer")) { $(this).wrap('<div class="imgContainer absCenter"></div>') }
                    if (!T.disable) {
                        if (F) {
                            var S = null;
                            $(this).addResizableFn("start", function(Z, aa) { S = z.not(this);
                                if (/n|w/.test(aa.axis) && !T.noSyncOffset) { S.each(function(ac, ae) {
                                        var ab = $(this),
                                            ad = ab.parents(".ui-wrapper");
                                        ab.data("originalPosition-relative", { left: parseFloat(ad.css("left")) - aa.originalPosition.left, top: parseFloat(ad.css("top")) - aa.originalPosition.top, }) }) } });
                            $(this).addResizableFn("resize", function(Z, aa) { S.add(S.parents(".ui-wrapper")).css({ width: $(aa.element).width(), height: $(aa.element).height() });
                                if (/n|w/.test(aa.axis) && !T.noSyncOffset) { S.each(function(ac, ad) {
                                        var ab = $(this);
                                        var ae = ab.data("originalPosition-relative");
                                        ab.add(ab.parents(".ui-wrapper")).css({ left: aa.position.left + ae.left, top: aa.position.top + ae.top }) }) } });
                            $(this).addResizableFn("stop", function(Z, aa) {
                                if (!T.noSyncOffset) { S.each(function(ab, ac) { $(this).removeData("originalPosition-relative").attr("resize", "1") }) }
                                S = null }) }
                        var Y = { width: T.width, height: T.height };
                        if (W && W.disable) { Y.left = W.left;
                            Y.top = W.top }
                        a.moduleSlaveImgResize($(this), Y);
                        if (F) { $(this).addResizableFn("recover", function() {
                                var Z = $(this).parents(".ui-wrapper");
                                z.each(function(aa, ab) {
                                    if (aa === X) {
                                        return }
                                    var ad = $(ab).add($(ab).parents(".ui-wrapper"));
                                    ad.width(Z.width()).height(Z.height());
                                    var ac = n(w, aa);
                                    if (ac && ac.disable) { ad.css({ left: ac.left, top: ac.top }) }
                                    ad.attr("resize", 0) }) }) } } }
                if (V && !W.disable) {
                    if (W.forParent != "false" && !$(this).parents().hasClass("imgContainer")) { $(this).wrap('<div class="imgContainer absCenter"></div>') }
                    a.moduleDraggale($(this), W.forParent == "false" ? false : true) } });
            z.data("hasBindEdit", true) }

        function i(w, t, v) { $$("#uploadBg").fadeIn(200);
            $$("#uploadImgBox").css("left", $$(".editDetail").offset().left + 12).removeClass("uploadUp").addClass("uploadDown");
            var x = $$("#uploadInfoBox");
            x.css("overflow-y", "auto").html("");
            $$("#uploadBoxTitle").html(t[0].allTitel || "编辑内容");
            var s = [];
            $.each(w, function(E, A) {
                if (A.type != 2) {
                    return }
                var H = t[E];!H.from && (H.from = ".editTarget-" + v + ",.editRelate-" + v);
                var G = A.val;
                var D = H.numLimit;
                if (a.getType(D) != "array") { D = [0, D] }
                var C = D[0];
                var J = D[1];
                var I = A.txtopt;
                var L = A.shouInput;
                var M = "";
                var B = H.val;
                var K = $(H.from);
                s.push([K.data("hd-editUpload-editClose"), this, [A, H, K]]);
                M += '<div class="uploadLine"  >';
                if (A.shouInput) { M += z((H.title || "文字内容") + "：", "内容", G, "title") } else { M += y((H.title || "文字内容") + "：", "内容", G, "title", E, I) }
                M += "</div>";
                x.append(M);
                var F = $$(".newTextArea .activeInput").eq(E);
                F.off().on("blur", function() {
                    var N = $(this).val();
                    if ($.trim(N).length < (C + 1)) {
                        if (!$(this).hasClass("inputErr")) { $(this).addClass("inputErr") }
                        $(this).parent().find(".editErr").show().text("输入的文字不可少于" + (C + 1) + "个！");
                        K.text(A.val) }
                    var O = K.data("hd-editUpload-textBlur");
                    O && O.fireWith(this, [A, H, K]) }).on("focus", function() { $(this).removeClass("inputErr");
                    $(this).parent().find(".editErr").hide();
                    $(this).parent().find(".editErr2").hide();
                    var N = K.data("hd-editUpload-textFocus");
                    N && N.fireWith(this, [A, H, K]) }).on("input propertychange", function() {
                    var R = $(this).val();
                    R = R.substr(0, J);
                    var O = $.trim($(this).val()).length;
                    if (O > J) { $(this).val(R) }
                    K.text(R);
                    var N = K.data("hd-editUpload-textBeforeSave");
                    if (N) {
                        var Q = {};
                        N.fireWith(this, [A, H, K, Q]);
                        Q.str && (R = Q.str);
                        Q.len && (O = Q.len) }
                    if (u(O, C, J)) { A.val = R }
                    var P = K.data("hd-editUpload-textKeyUp");
                    if (P) { P.fireWith(this, [A, H, K]) } });
                if (I) { F.css("display", "inline-block").val(A.val) } else { F.hide() }
                $$("#TheOnlyOne" + E + "").on("click", function() { A.txtopt = 0;
                    K.text(B);
                    $$(".newTextArea .activeInput").hide().removeClass("inputErr").val(B);
                    $$(".newTextArea .activeInput").siblings(".editErr").hide();
                    $$(".newTextArea .activeInput").siblings(".editErr2").hide() });
                $$("#TheOnlytwo" + E + "").on("click", function() { A.txtopt = 1;
                    $$(".newTextArea .activeInput").css("display", "inline-block").val(A.val);
                    K.text(A.val) }) });
            $$("#uploadImgBox").data("editClose", function() { $.each(s, function(A, C) {
                    var B = C[0];
                    B && B.fireWith(C[1], C[2]) }) });
            g_config.closeWin && g_config.closeWin();

            function u(B, C, A) {
                if (typeof A !== "undefined") {
                    return B > C && B <= A } else {
                    return B > C } }

            function z(E, B, C, A) {
                var D = C;
                D = a.encodeHtml(D);
                return '<div class="answerLine clearfix"><div class="floatLeft newTextT" style="width: 70px; margin-top: 12px" >' + E + '</div><div style="width: 320px;" class="floatLeft"><div class="newTextArea"><input type="text" class="input scrollBox activeInput" style="width: 300px;height: 32px; padding-left: 5px;" value="' + D + '" ' + (isPublish ? "disabled" : "") + '><div style="color:#888; padding-top: 5px;">确认发布后无法修改，请认真输入！</div><div class="editErr hide" style="color: red;margin-top: 10px;">输入文字不能为空</div><div class="editErr2 hide" style="color: red; margin-top: 10px; display: none;">输入仅限中文字母跟数字</div></div></div></div>' }

            function y(F, B, H, G, D, E) {
                var A = H;
                A = a.encodeHtml(A);
                var I = E ? "checked" : "";
                var C = E ? "" : "checked";
                return '<div class="answerLine clearfix"><div class="floatLeft newTextT" style="width: 100px;">' + F + '</div><div class="floatLeft" style="width: 320px;"><div><input id="TheOnlyOne' + D + '" type="radio" name="theRealOnly"' + C + '><label for="TheOnlyOne' + D + '" style="height: 16px;line-height: 16px;">默认</label><input id="TheOnlytwo' + D + '" type="radio" name="theRealOnly"' + I + '><label for="TheOnlytwo' + D + '" style="height: 16px;line-height: 16px;">自定义</label></div><div class="newTextArea" style="margin-top: 12px;"><textarea class="input scrollBox activeInput" style="width: 300px;height: 100px;">' + A + '</textarea><div class="editErr hide" style="color: red;margin-top: 10px;">输入文字不可少于10个！</div><div class="editErr2 hide" style="color: red; margin-top: 10px; display: none;">输入仅限中文</div></div></div></div>' }
            return false }
        if (_manage) { d.setAllEdit = function() { 
                            e();
                            hg.edit.hasInitEle = true;
                            $.each(k, function(s, t) {
                                if (t.css) { t.crrCssArg = $.extend(true, [], t.css, o[s].css) } 
                            });
                            $.each(o, function(t, s) { m([s, k[t]]) }) 
                       } 
        } else { e() }

        function e(){ 
            $.each(o, function(v, t){
                    var w = k[v],
                        u = $(".editTarget-" + t.name),
                        x = t.pos,
                        A = t.size,
                        z = t.path;
                    var s = function(B) { 
                        B.each(function(E){
                            var D = n(x, E),
                                C = n(A, E);
                            if (D && D.top && D.left){ 
                                $(this).css({ top: D.top, left: D.left }).addClass("abs") 
                            }
                            if (C && C.width && C.height){ 
                                $(this).css({ width: C.width, height: C.height }) 
                            } 
                        }) 
                    };
                    s(u);
                    if (z) {
                        var y = ".editRelate-" + t.name;
                        if (a.getType(z[0]) === "array") { $.each(z, function(C, E) {
                                var D = a.getSrc(E[0]);
                                var B = "editTarget-" + t.name;
                                if (C !== 0) { B = "editTarget-" + t.name + "-" + C;
                                    y = ".editRelate-" + t.name + "-" + C }
                                if ($("." + B).length > 0) { p($("." + B), D);
                                    s($("." + B)) } else { $("body").append('<input class="' + B + '" type="hidden" value="' + D + '">') }
                                if ($(y).length > 0) { p($(y), D) } }) } else { p(u.add(y), a.getSrc(z[0])) } }
                    if (t.css){ 
                        $.extend(true, w.css, t.css);
                        $.each(w.css, function(B, C) {
                            if (!C.from) { C.from = ".editTarget-" + t.name + ",.editRelate-" + t.name }
                            if (C.css) { 
                                $.each(C.css, function(E, D) {
                                    if (!D.from) { D.from = C.from }
                                    l($(D.from), D, D.opt === 0) 
                                        }) } else { l($(C.from), C, C.opt === 0) } }) }
                    if (t.text){ $.each(t.text, function(C, D) {
                            var B = w.text[C];!B.from && (B.from = ".editTarget-" + t.name + ",.editRelate-" + t.name);
                            if (B.type == 2) {
                                var E = Fai.encodeHtml(D.txtopt ? D.val : B.val);
                                $(B.from).html(E) } else { $(B.from).val(D.value) } }) 
                    } 
            }) 
        }

        d.getImgInfo = q;
        d.getInfoByName = h;
        d.getRgba = j;
        d.initEdit = e;
        d.cache = c;
        delete d.originMod;
        return d 
    };
    a.initSound = function(e, f, d) {
        if (d) { 
            $.each(d, function(i, j) { 
                f[i].path = j.path;
                if (g_config.isModel) { 
                    e[i].optFlag = f[i].optFlag 
                } 
            }) 
        }
        if (e) { 
            $.each(e, function(j, k) {
                var i = f[j];
                if (j !== 0 && k.optFlag === 1) { k.optFlag = 2 }
                k.path = a.getSrc(k.path);
                i.path = a.getSrc(i.path) 
            }) 
        }
        var c = {};
        var h = LF.sound.webAudioEnabled && LF.global.webAudio;
        $(function() { $.setSoundM() });
        var g = { 
            list: e, 
            listDef: f, 
            allowPlay: true, 
            setPlayPower: function(j, k){
                if (typeof j == "boolean") { this.allowPlay = j }
                var i = c[j];
                if (!i){ 
                    a.tlog("Sound_setPlayPower_err", "这个key:" + j + " 不存在!");
                    return this 
                }
                i._allowPlay = k 
            }, 
            play: function(m, o, k) {
                if (_manage) {
                    return }
                if (!this.allowPlay) {
                    return this }
                if (e && a.getType(m) === "number") {
                    var j = m === 0 ? 1 : 3;
                    if (e[m].optFlag === j) {
                        return this } }
                if (m !== 0 && e && e[0].optFlag !== 1 && !h) {
                    return this }
                var i = c[m];
                if (!i) { a.tlog("Sound_play_err", "这个key:" + m + " 不存在!");
                    return this }
                if (!i._allowPlay) {
                    return }
                i.play(o, k);
                if (!i.playing) {
                    try { wx.checkJsApi({ jsApiList: ["checkJsApi"], success: function() { i.play(o, k) } }) } catch (n) { a.tlog("Sound_play_err", n) } }
                return this }, readyPlay: function(m, n, j) {
                if (_manage) {
                    return }
                var i = c[m];
                if (!i) { a.tlog("Sound_readyPlay_err", "这个key:" + m + " 不存在!");
                    return this }
                var k = this;
                k.play(m, n, j);
                k.onReady(m, function() {!i.playing && k.play(m, n, j) }) }, pause: function(j) {
                if (_manage) {
                    return }
                var i = c[j];
                if (!i) { a.tlog("Sound_pause_err", "这个key:" + j + " 不存在!");
                    return this }
                i.stop();
                return this }, pauseAll: function() {
                if (_manage) {
                    return }
                var i = null;
                for (var j in c) { i = c[j];
                    if (i) { i.stop() } }
                return this }, load: function(n, j, k) {
                if (_manage) {
                    return }
                if (c[j]) { a.tlog("Sound_load_err", "这个key:" + j + " 已经存在!");
                    return this }
                var i = null,
                    m = h;
                typeof k !== "undefined" && (m = k);
                if (/.wav$/.test(n) && a.isIPhone()) { m = false }
                if (m) { i = new LF.webAudio() } else { i = new LF.media();
                    try { i.data = new Audio() } catch (l) { console.warn("ReferenceError: Can't find variable: Audio");
                        i.data = {} }
                    i.data.loop = false;
                    i.data.autoplay = false }
                i._type = "audio";
                if (n) { i.load(n) }
                i.readyCallBack = $.Callbacks("unique memory");
                i.addEventListener(LF.event.COMPLETE, function(o) { i.complete = true;
                    i.readyCallBack.fire(i);
                    i.readyCallBack = null;
                    a.tlog("sound", j + " ready") });
                i._allowPlay = true;
                c[j] = i;
                return this }, onReady: function(j, k) {
                if (_manage) {
                    return }
                var i = c[j];
                if (!i) { a.tlog("Sound_onReady_err", "这个key:" + j + " 不存在!");
                    return this }
                if (i.complete) { k(i) } else { i.readyCallBack.add(k) }
                return this }, cache: c, };
            g.load("music/button.mp3","startButton");
        /*g.load(_resRoot + "/image/button.mp3", "startButton");*/
        if (e) { $.each(e, function(i, j) {
                var l = j.path;
                if (i === 0) { g.load(l, i, false);
                    if (g.cache["0"]) {
                        var k = g.cache["0"].data;
                        if (Audio && k instanceof Audio) { document.getElementById("pageMusic").appendChild(k) } } } else { g.load(l, i) } });
            if (!_manage) { g.cache["0"].data.addEventListener("play", function() { $(function() { $(".soundIcon").removeClass("soundIconOff") }) }, false);
                g.cache["0"].data.addEventListener("pause", function() { $(function() { $(".soundIcon").addClass("soundIconOff") }) }, false) } }
        return g };
    a.initCallBack = function(d, c) { 
        d = d || {};
        var e = {};
        d.addCallBack = function(f) {
            if (a.getType(f) == "array") {
                for (var g = f.length - 1; g >= 0; g--) { arguments.callee(f[g]) }
                return }
            if (typeof f == "string" && typeof e[f] == "undefined") { e[f] = null } };
        d.on = function(f, h) {
            var g = e[f];
            if (typeof g === "undefined") {
                return this }
            if (g === null) { e[f] = g = $.Callbacks("unique memory stopOnFalse") }
            g.add(h);
            return this };
        d.off = function(f, i) {
            var h = this;
            if (typeof f === "undefined") { $.each(e, function(j, k) { h.off(k, i) });
                return h }
            var g = e[f];
            if (!g) {
                return h }
            if (typeof i === "undefined") { g.empty() } else { g.remove(i) }
            return h };
        d.fire = function(g) {
            var f = e[g];
            if (f) {
                var h = Array.prototype.slice.call(arguments);
                h.shift();
                return f.fire.apply(f, h) }
            return true };
        d.fireWith = function(g) {
            var f = e[g];
            if (f) {
                var h = Array.prototype.slice.call(arguments);
                h.shift();
                return f.fireWith.apply(f, h) }
            return true };
        if (typeof c !== "undefined") { d.addCallBack(c) }
        return d };
    a.initTime = function(c) {
        var h = null,
            f, i = 0;

        function e(j) {
            var k = Math.round(j * 100) / 100;
            var l = k.toString();
            var m = l.indexOf(".");
            if (m < 0) { m = l.length;
                l += "." }
            while (l.length <= m + 2) { l += "0" }
            return l }
        var d = [70, 280];
        if (g_config.countsTimeType) {
            if (g_config.sortType) { d[1] = -1 } } else {
            if (g_config.scoreType) {
                if (!g_config.sortType) { d[1] = -1 } } else { d[1] = -1 } }
        var g = { val: 0, pastTime: 0, interval: 140, range: d, target: null, isDesc: !g_config.countsTimeType, acceList: null, initTime: c, status: "ended", updateFlag: true, targetFlag: true, frameInc: 0, setAcceList: function(k) {
                if (typeof k === "number") {
                    var l = k;
                    k = [];
                    for (var j = 0; j < l; j++) { k.push((l - j) * (this.initTime / (l + 1))) } }
                this.acceList = k }, setTarget: function() {
                var j = e(this.val);
                this.targetFlag && this.target.text(j);
                this.fireWith("setTime", this, [j]) }, init: function() {
                if (this.initTime === 99999) {
                    return }!this.target && (this.target = $(".time"));
                this.val = this.initTime;
                this.pastTime = 0;
                $(".timeUpImg").hide();
                this.setTarget();
                return this }, start: function() {
                if (this.initTime === 99999) {
                    return }
                f = new Date().getTime() / 1000;
                if (this.updateFlag && this.status === "ended") { this.status = "runing";
                    this.play() } else { this.status = "runing" }
                return this }, isRunning: function() {
                return this.status === "runing" }, pause: function() { this.status = "pause" }, end: function() {
                if (this.status === "ended") {
                    return }
                clearTimeout(h);
                i = 0;
                this.update();
                this.status = "ended";
                return this }, setTime: function() {
                var j = (new Date).getTime() / 1000;
                var n = j - f;
                var l = this.isDesc ? -1 : 1;
                if (this.range[0] > 0 && n < this.range[0] / 1000) { n = this.range[0] / 1000 } else {
                    if (this.range[1] > 0 && n > this.range[1] / 1000) { n = this.range[1] / 1000 } }
                this.val += l * n;
                this.pastTime = l * (this.val - this.initTime);
                f = j;
                if (this.isDesc) {
                    if (this.acceList) {
                        for (var k = 0; k < this.acceList.length; k++) {
                            if (this.val <= this.acceList[k] && i == k) { i++;
                                this.fireWith("acce", this, [i]);
                                break } } }
                    if (this.val <= 0) { this.val = 0;
                        this.setTarget();
                        clearTimeout(h);
                        i = 0;
                        this.status = "ended";
                        this.fireWith("end", this);
                        var m = $(".timeUpImg");
                        m.removeClass("tada");
                        m.addClass("tada");
                        m.show();
                        return } }
                this.setTarget() }, update: function() {
                if (this.initTime === 99999) {
                    return }
                if (this.status !== "pause") { this.setTime() }
                this.fireWith("timer", this, [this.status !== "pause"]) }, play: function() { this.update();
                if (this.status !== "ended") { h = setTimeout(arguments.callee.bind(this), this.interval) } }, updateInFrame: function(j) {
                if (this.initTime === 99999) {
                    return }
                if (this.status === "ended") {
                    return }
                if (j < 0) { j = 0 }
                this.frameInc += j;
                if (this.frameInc >= this.interval) { this.update();
                    this.frameInc = 0 } } };
        a.initCallBack(g, ["end", "timer", "acce", "setTime"]);
        g.init();
        g.changeTwoDecimal_f = e;
        return g };
    a.initGrade = function() {
        var c = function(d) { c.set(c.val + d) };
        $.extend(c, { val: 0, set: function(d) { c.val = d;
                c.val < 0 && (c.val = 0);
                c.fireWith("setGrade", c, [c.val]);
                c.target && c.target.text(c.val) } });
        $(function() { c.target = $("#grade") });
        a.initCallBack(c, ["setGrade"]);
        return c };
     
})(HdGame);