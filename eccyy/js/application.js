!
function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    }: e(t)
} ("undefined" != typeof window ? window: this,
function(t, e) {
    function i(t) {
        var e = t.length,
        i = se.type(t);
        return "function" === i || se.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }
    function n(t, e, i) {
        if (se.isFunction(e)) return se.grep(t,
        function(t, n) {
            return !! e.call(t, n, t) !== i
        });
        if (e.nodeType) return se.grep(t,
        function(t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (fe.test(e)) return se.filter(e, t, i);
            e = se.filter(e, t)
        }
        return se.grep(t,
        function(t) {
            return se.inArray(t, e) >= 0 !== i
        })
    }
    function s(t, e) {
        do t = t[e];
        while (t && 1 !== t.nodeType);
        return t
    }
    function o(t) {
        var e = we[t] = {};
        return se.each(t.match(be) || [],
        function(t, i) {
            e[i] = !0
        }),
        e
    }
    function r() {
        pe.addEventListener ? (pe.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (pe.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }
    function a() { (pe.addEventListener || "load" === event.type || "complete" === pe.readyState) && (r(), se.ready())
    }
    function l(t, e, i) {
        if (void 0 === i && 1 === t.nodeType) {
            var n = "data-" + e.replace(ke, "-$1").toLowerCase();
            if (i = t.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null: +i + "" === i ? +i: Te.test(i) ? se.parseJSON(i) : i
                } catch(s) {}
                se.data(t, e, i)
            } else i = void 0
        }
        return i
    }
    function h(t) {
        var e;
        for (e in t) if (("data" !== e || !se.isEmptyObject(t[e])) && "toJSON" !== e) return ! 1;
        return ! 0
    }
    function c(t, e, i, n) {
        if (se.acceptData(t)) {
            var s, o, r = se.expando,
            a = t.nodeType,
            l = a ? se.cache: t,
            h = a ? t[r] : t[r] && r;
            if (h && l[h] && (n || l[h].data) || void 0 !== i || "string" != typeof e) return h || (h = a ? t[r] = Y.pop() || se.guid++:r),
            l[h] || (l[h] = a ? {}: {
                toJSON: se.noop
            }),
            ("object" == typeof e || "function" == typeof e) && (n ? l[h] = se.extend(l[h], e) : l[h].data = se.extend(l[h].data, e)),
            o = l[h],
            n || (o.data || (o.data = {}), o = o.data),
            void 0 !== i && (o[se.camelCase(e)] = i),
            "string" == typeof e ? (s = o[e], null == s && (s = o[se.camelCase(e)])) : s = o,
            s
        }
    }
    function u(t, e, i) {
        if (se.acceptData(t)) {
            var n, s, o = t.nodeType,
            r = o ? se.cache: t,
            a = o ? t[se.expando] : se.expando;
            if (r[a]) {
                if (e && (n = i ? r[a] : r[a].data)) {
                    se.isArray(e) ? e = e.concat(se.map(e, se.camelCase)) : e in n ? e = [e] : (e = se.camelCase(e), e = e in n ? [e] : e.split(" ")),
                    s = e.length;
                    for (; s--;) delete n[e[s]];
                    if (i ? !h(n) : !se.isEmptyObject(n)) return
                } (i || (delete r[a].data, h(r[a]))) && (o ? se.cleanData([t], !0) : ie.deleteExpando || r != r.window ? delete r[a] : r[a] = null)
            }
        }
    }
    function f() {
        return ! 0
    }
    function d() {
        return ! 1
    }
    function p() {
        try {
            return pe.activeElement
        } catch(t) {}
    }
    function g(t) {
        var e = We.split("|"),
        i = t.createDocumentFragment();
        if (i.createElement) for (; e.length;) i.createElement(e.pop());
        return i
    }
    function m(t, e) {
        var i, n, s = 0,
        o = typeof t.getElementsByTagName !== Ce ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Ce ? t.querySelectorAll(e || "*") : void 0;
        if (!o) for (o = [], i = t.childNodes || t; null != (n = i[s]); s++) ! e || se.nodeName(n, e) ? o.push(n) : se.merge(o, m(n, e));
        return void 0 === e || e && se.nodeName(t, e) ? se.merge([t], o) : o
    }
    function v(t) {
        De.test(t.type) && (t.defaultChecked = t.checked)
    }
    function y(t, e) {
        return se.nodeName(t, "table") && se.nodeName(11 !== e.nodeType ? e: e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    function b(t) {
        return t.type = (null !== se.find.attr(t, "type")) + "/" + t.type,
        t
    }
    function w(t) {
        var e = Ve.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"),
        t
    }
    function x(t, e) {
        for (var i, n = 0; null != (i = t[n]); n++) se._data(i, "globalEval", !e || se._data(e[n], "globalEval"))
    }
    function _(t, e) {
        if (1 === e.nodeType && se.hasData(t)) {
            var i, n, s, o = se._data(t),
            r = se._data(e, o),
            a = o.events;
            if (a) {
                delete r.handle,
                r.events = {};
                for (i in a) for (n = 0, s = a[i].length; s > n; n++) se.event.add(e, i, a[i][n])
            }
            r.data && (r.data = se.extend({},
            r.data))
        }
    }
    function C(t, e) {
        var i, n, s;
        if (1 === e.nodeType) {
            if (i = e.nodeName.toLowerCase(), !ie.noCloneEvent && e[se.expando]) {
                s = se._data(e);
                for (n in s.events) se.removeEvent(e, n, s.handle);
                e.removeAttribute(se.expando)
            }
            "script" === i && e.text !== t.text ? (b(e).text = t.text, w(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), ie.html5Clone && t.innerHTML && !se.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && De.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected: ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
        }
    }
    function T(e, i) {
        var n, s = se(i.createElement(e)).appendTo(i.body),
        o = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(s[0])) ? n.display: se.css(s[0], "display");
        return s.detach(),
        o
    }
    function k(t) {
        var e = pe,
        i = Ze[t];
        return i || (i = T(t, e), "none" !== i && i || (Je = (Je || se("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Je[0].contentWindow || Je[0].contentDocument).document, e.write(), e.close(), i = T(t, e), Je.detach()), Ze[t] = i),
        i
    }
    function S(t, e) {
        return {
            get: function() {
                var i = t();
                if (null != i) return i ? void delete this.get: (this.get = e).apply(this, arguments)
            }
        }
    }
    function P(t, e) {
        if (e in t) return e;
        for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, s = fi.length; s--;) if (e = fi[s] + i, e in t) return e;
        return n
    }
    function E(t, e) {
        for (var i, n, s, o = [], r = 0, a = t.length; a > r; r++) n = t[r],
        n.style && (o[r] = se._data(n, "olddisplay"), i = n.style.display, e ? (o[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && Ee(n) && (o[r] = se._data(n, "olddisplay", k(n.nodeName)))) : (s = Ee(n), (i && "none" !== i || !s) && se._data(n, "olddisplay", s ? i: se.css(n, "display"))));
        for (r = 0; a > r; r++) n = t[r],
        n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[r] || "": "none"));
        return t
    }
    function N(t, e, i) {
        var n = li.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }
    function D(t, e, i, n, s) {
        for (var o = i === (n ? "border": "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > o; o += 2)"margin" === i && (r += se.css(t, i + Pe[o], !0, s)),
        n ? ("content" === i && (r -= se.css(t, "padding" + Pe[o], !0, s)), "margin" !== i && (r -= se.css(t, "border" + Pe[o] + "Width", !0, s))) : (r += se.css(t, "padding" + Pe[o], !0, s), "padding" !== i && (r += se.css(t, "border" + Pe[o] + "Width", !0, s)));
        return r
    }
    function H(t, e, i) {
        var n = !0,
        s = "width" === e ? t.offsetWidth: t.offsetHeight,
        o = ti(t),
        r = ie.boxSizing && "border-box" === se.css(t, "boxSizing", !1, o);
        if (0 >= s || null == s) {
            if (s = ei(t, e, o), (0 > s || null == s) && (s = t.style[e]), ni.test(s)) return s;
            n = r && (ie.boxSizingReliable() || s === t.style[e]),
            s = parseFloat(s) || 0
        }
        return s + D(t, e, i || (r ? "border": "content"), n, o) + "px"
    }
    function I(t, e, i, n, s) {
        return new I.prototype.init(t, e, i, n, s)
    }
    function z() {
        return setTimeout(function() {
            di = void 0
        }),
        di = se.now()
    }
    function $(t, e) {
        var i, n = {
            height: t
        },
        s = 0;
        for (e = e ? 1 : 0; 4 > s; s += 2 - e) i = Pe[s],
        n["margin" + i] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t),
        n
    }
    function A(t, e, i) {
        for (var n, s = (bi[e] || []).concat(bi["*"]), o = 0, r = s.length; r > o; o++) if (n = s[o].call(i, e, t)) return n
    }
    function W(t, e, i) {
        var n, s, o, r, a, l, h, c, u = this,
        f = {},
        d = t.style,
        p = t.nodeType && Ee(t),
        g = se._data(t, "fxshow");
        i.queue || (a = se._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, u.always(function() {
            u.always(function() {
                a.unqueued--,
                se.queue(t, "fx").length || a.empty.fire()
            })
        })),
        1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [d.overflow, d.overflowX, d.overflowY], h = se.css(t, "display"), c = "none" === h ? se._data(t, "olddisplay") || k(t.nodeName) : h, "inline" === c && "none" === se.css(t, "float") && (ie.inlineBlockNeedsLayout && "inline" !== k(t.nodeName) ? d.zoom = 1 : d.display = "inline-block")),
        i.overflow && (d.overflow = "hidden", ie.shrinkWrapBlocks() || u.always(function() {
            d.overflow = i.overflow[0],
            d.overflowX = i.overflow[1],
            d.overflowY = i.overflow[2]
        }));
        for (n in e) if (s = e[n], gi.exec(s)) {
            if (delete e[n], o = o || "toggle" === s, s === (p ? "hide": "show")) {
                if ("show" !== s || !g || void 0 === g[n]) continue;
                p = !0
            }
            f[n] = g && g[n] || se.style(t, n)
        } else h = void 0;
        if (se.isEmptyObject(f))"inline" === ("none" === h ? k(t.nodeName) : h) && (d.display = h);
        else {
            g ? "hidden" in g && (p = g.hidden) : g = se._data(t, "fxshow", {}),
            o && (g.hidden = !p),
            p ? se(t).show() : u.done(function() {
                se(t).hide()
            }),
            u.done(function() {
                var e;
                se._removeData(t, "fxshow");
                for (e in f) se.style(t, e, f[e])
            });
            for (n in f) r = A(p ? g[n] : 0, n, u),
            n in g || (g[n] = r.start, p && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
        }
    }
    function j(t, e) {
        var i, n, s, o, r;
        for (i in t) if (n = se.camelCase(i), s = e[n], o = t[i], se.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), r = se.cssHooks[n], r && "expand" in r) {
            o = r.expand(o),
            delete t[n];
            for (i in o) i in t || (t[i] = o[i], e[i] = s)
        } else e[n] = s
    }
    function M(t, e, i) {
        var n, s, o = 0,
        r = yi.length,
        a = se.Deferred().always(function() {
            delete l.elem
        }),
        l = function() {
            if (s) return ! 1;
            for (var e = di || z(), i = Math.max(0, h.startTime + h.duration - e), n = i / h.duration || 0, o = 1 - n, r = 0, l = h.tweens.length; l > r; r++) h.tweens[r].run(o);
            return a.notifyWith(t, [h, o, i]),
            1 > o && l ? i: (a.resolveWith(t, [h]), !1)
        },
        h = a.promise({
            elem: t,
            props: se.extend({},
            e),
            opts: se.extend(!0, {
                specialEasing: {}
            },
            i),
            originalProperties: e,
            originalOptions: i,
            startTime: di || z(),
            duration: i.duration,
            tweens: [],
            createTween: function(e, i) {
                var n = se.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                return h.tweens.push(n),
                n
            },
            stop: function(e) {
                var i = 0,
                n = e ? h.tweens.length: 0;
                if (s) return this;
                for (s = !0; n > i; i++) h.tweens[i].run(1);
                return e ? a.resolveWith(t, [h, e]) : a.rejectWith(t, [h, e]),
                this
            }
        }),
        c = h.props;
        for (j(c, h.opts.specialEasing); r > o; o++) if (n = yi[o].call(h, t, c, h.opts)) return n;
        return se.map(c, A, h),
        se.isFunction(h.opts.start) && h.opts.start.call(t, h),
        se.fx.timer(se.extend(l, {
            elem: t,
            anim: h,
            queue: h.opts.queue
        })),
        h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
    }
    function L(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, s = 0,
            o = e.toLowerCase().match(be) || [];
            if (se.isFunction(i)) for (; n = o[s++];)"+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }
    function O(t, e, i, n) {
        function s(a) {
            var l;
            return o[a] = !0,
            se.each(t[a] || [],
            function(t, a) {
                var h = a(e, i, n);
                return "string" != typeof h || r || o[h] ? r ? !(l = h) : void 0 : (e.dataTypes.unshift(h), s(h), !1)
            }),
            l
        }
        var o = {},
        r = t === qi;
        return s(e.dataTypes[0]) || !o["*"] && s("*")
    }
    function R(t, e) {
        var i, n, s = se.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((s[n] ? t: i || (i = {}))[n] = e[n]);
        return i && se.extend(!0, t, i),
        t
    }
    function F(t, e, i) {
        for (var n, s, o, r, a = t.contents,
        l = t.dataTypes;
        "*" === l[0];) l.shift(),
        void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
        if (s) for (r in a) if (a[r] && a[r].test(s)) {
            l.unshift(r);
            break
        }
        if (l[0] in i) o = l[0];
        else {
            for (r in i) {
                if (!l[0] || t.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                n || (n = r)
            }

            o = o || n
        }
        return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
    }
    function q(t, e, i, n) {
        var s, o, r, a, l, h = {},
        c = t.dataTypes.slice();
        if (c[1]) for (r in t.converters) h[r.toLowerCase()] = t.converters[r];
        for (o = c.shift(); o;) if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;
        else if ("*" !== l && l !== o) {
            if (r = h[l + " " + o] || h["* " + o], !r) for (s in h) if (a = s.split(" "), a[1] === o && (r = h[l + " " + a[0]] || h["* " + a[0]])) {
                r === !0 ? r = h[s] : h[s] !== !0 && (o = a[0], c.unshift(a[1]));
                break
            }
            if (r !== !0) if (r && t["throws"]) e = r(e);
            else try {
                e = r(e)
            } catch(u) {
                return {
                    state: "parsererror",
                    error: r ? u: "No conversion from " + l + " to " + o
                }
            }
        }
        return {
            state: "success",
            data: e
        }
    }
    function B(t, e, i, n) {
        var s;
        if (se.isArray(e)) se.each(e,
        function(e, s) {
            i || Vi.test(t) ? n(t, s) : B(t + "[" + ("object" == typeof s ? e: "") + "]", s, i, n)
        });
        else if (i || "object" !== se.type(e)) n(t, e);
        else for (s in e) B(t + "[" + s + "]", e[s], i, n)
    }
    function X() {
        try {
            return new t.XMLHttpRequest
        } catch(e) {}
    }
    function U() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch(e) {}
    }
    function V(t) {
        return se.isWindow(t) ? t: 9 === t.nodeType ? t.defaultView || t.parentWindow: !1
    }
    var Y = [],
    Q = Y.slice,
    G = Y.concat,
    K = Y.push,
    J = Y.indexOf,
    Z = {},
    te = Z.toString,
    ee = Z.hasOwnProperty,
    ie = {},
    ne = "1.11.1",
    se = function(t, e) {
        return new se.fn.init(t, e)
    },
    oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    re = /^-ms-/,
    ae = /-([\da-z])/gi,
    le = function(t, e) {
        return e.toUpperCase()
    };
    se.fn = se.prototype = {
        jquery: ne,
        constructor: se,
        selector: "",
        length: 0,
        toArray: function() {
            return Q.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : Q.call(this)
        },
        pushStack: function(t) {
            var e = se.merge(this.constructor(), t);
            return e.prevObject = this,
            e.context = this.context,
            e
        },
        each: function(t, e) {
            return se.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(se.map(this,
            function(e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function() {
            return this.pushStack(Q.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(t) {
            var e = this.length,
            i = +t + (0 > t ? e: 0);
            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: K,
        sort: Y.sort,
        splice: Y.splice
    },
    se.extend = se.fn.extend = function() {
        var t, e, i, n, s, o, r = arguments[0] || {},
        a = 1,
        l = arguments.length,
        h = !1;
        for ("boolean" == typeof r && (h = r, r = arguments[a] || {},
        a++), "object" == typeof r || se.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++) if (null != (s = arguments[a])) for (n in s) t = r[n],
        i = s[n],
        r !== i && (h && i && (se.isPlainObject(i) || (e = se.isArray(i))) ? (e ? (e = !1, o = t && se.isArray(t) ? t: []) : o = t && se.isPlainObject(t) ? t: {},
        r[n] = se.extend(h, o, i)) : void 0 !== i && (r[n] = i));
        return r
    },
    se.extend({
        expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === se.type(t)
        },
        isArray: Array.isArray ||
        function(t) {
            return "array" === se.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return ! se.isArray(t) && t - parseFloat(t) >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return ! 1;
            return ! 0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== se.type(t) || t.nodeType || se.isWindow(t)) return ! 1;
            try {
                if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(i) {
                return ! 1
            }
            if (ie.ownLast) for (e in t) return ee.call(t, e);
            for (e in t);
            return void 0 === e || ee.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "": "object" == typeof t || "function" == typeof t ? Z[te.call(t)] || "object": typeof t
        },
        globalEval: function(e) {
            e && se.trim(e) && (t.execScript ||
            function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(re, "ms-").replace(ae, le)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, n) {
            var s, o = 0,
            r = t.length,
            a = i(t);
            if (n) {
                if (a) for (; r > o && (s = e.apply(t[o], n), s !== !1); o++);
                else for (o in t) if (s = e.apply(t[o], n), s === !1) break
            } else if (a) for (; r > o && (s = e.call(t[o], o, t[o]), s !== !1); o++);
            else for (o in t) if (s = e.call(t[o], o, t[o]), s === !1) break;
            return t
        },
        trim: function(t) {
            return null == t ? "": (t + "").replace(oe, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? se.merge(n, "string" == typeof t ? [t] : t) : K.call(n, t)),
            n
        },
        inArray: function(t, e, i) {
            var n;
            if (e) {
                if (J) return J.call(e, t, i);
                for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i: 0; n > i; i++) if (i in e && e[i] === t) return i
            }
            return - 1
        },
        merge: function(t, e) {
            for (var i = +e.length,
            n = 0,
            s = t.length; i > n;) t[s++] = e[n++];
            if (i !== i) for (; void 0 !== e[n];) t[s++] = e[n++];
            return t.length = s,
            t
        },
        grep: function(t, e, i) {
            for (var n, s = [], o = 0, r = t.length, a = !i; r > o; o++) n = !e(t[o], o),
            n !== a && s.push(t[o]);
            return s
        },
        map: function(t, e, n) {
            var s, o = 0,
            r = t.length,
            a = i(t),
            l = [];
            if (a) for (; r > o; o++) s = e(t[o], o, n),
            null != s && l.push(s);
            else for (o in t) s = e(t[o], o, n),
            null != s && l.push(s);
            return G.apply([], l)
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, s;
            return "string" == typeof e && (s = t[e], e = t, t = s),
            se.isFunction(t) ? (i = Q.call(arguments, 2), n = function() {
                return t.apply(e || this, i.concat(Q.call(arguments)))
            },
            n.guid = t.guid = t.guid || se.guid++, n) : void 0
        },
        now: function() {
            return + new Date
        },
        support: ie
    }),
    se.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(t, e) {
        Z["[object " + e + "]"] = e.toLowerCase()
    });
    var he = function(t) {
        function e(t, e, i, n) {
            var s, o, r, a, l, h, u, d, p, g;
            if ((e ? e.ownerDocument || e: O) !== I && H(e), e = e || I, i = i || [], !t || "string" != typeof t) return i;
            if (1 !== (a = e.nodeType) && 9 !== a) return [];
            if ($ && !n) {
                if (s = ye.exec(t)) if (r = s[1]) {
                    if (9 === a) {
                        if (o = e.getElementById(r), !o || !o.parentNode) return i;
                        if (o.id === r) return i.push(o),
                        i
                    } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(r)) && M(e, o) && o.id === r) return i.push(o),
                    i
                } else {
                    if (s[2]) return Z.apply(i, e.getElementsByTagName(t)),
                    i;
                    if ((r = s[3]) && x.getElementsByClassName && e.getElementsByClassName) return Z.apply(i, e.getElementsByClassName(r)),
                    i
                }
                if (x.qsa && (!A || !A.test(t))) {
                    if (d = u = L, p = e, g = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (h = k(t), (u = e.getAttribute("id")) ? d = u.replace(we, "\\$&") : e.setAttribute("id", d), d = "[id='" + d + "'] ", l = h.length; l--;) h[l] = d + f(h[l]);
                        p = be.test(t) && c(e.parentNode) || e,
                        g = h.join(",")
                    }
                    if (g) try {
                        return Z.apply(i, p.querySelectorAll(g)),
                        i
                    } catch(m) {} finally {
                        u || e.removeAttribute("id")
                    }
                }
            }
            return P(t.replace(le, "$1"), e, i, n)
        }
        function i() {
            function t(i, n) {
                return e.push(i + " ") > _.cacheLength && delete t[e.shift()],
                t[i + " "] = n
            }
            var e = [];
            return t
        }
        function n(t) {
            return t[L] = !0,
            t
        }
        function s(t) {
            var e = I.createElement("div");
            try {
                return !! t(e)
            } catch(i) {
                return ! 1
            } finally {
                e.parentNode && e.parentNode.removeChild(e),
                e = null
            }
        }
        function o(t, e) {
            for (var i = t.split("|"), n = t.length; n--;) _.attrHandle[i[n]] = e
        }
        function r(t, e) {
            var i = e && t,
            n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
            if (n) return n;
            if (i) for (; i = i.nextSibling;) if (i === e) return - 1;
            return t ? 1 : -1
        }
        function a(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return "input" === i && e.type === t
            }
        }
        function l(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }
        function h(t) {
            return n(function(e) {
                return e = +e,
                n(function(i, n) {
                    for (var s, o = t([], i.length, e), r = o.length; r--;) i[s = o[r]] && (i[s] = !(n[s] = i[s]))
                })
            })
        }
        function c(t) {
            return t && typeof t.getElementsByTagName !== V && t
        }
        function u() {}
        function f(t) {
            for (var e = 0,
            i = t.length,
            n = ""; i > e; e++) n += t[e].value;
            return n
        }
        function d(t, e, i) {
            var n = e.dir,
            s = i && "parentNode" === n,
            o = F++;
            return e.first ?
            function(e, i, o) {
                for (; e = e[n];) if (1 === e.nodeType || s) return t(e, i, o)
            }: function(e, i, r) {
                var a, l, h = [R, o];
                if (r) {
                    for (; e = e[n];) if ((1 === e.nodeType || s) && t(e, i, r)) return ! 0
                } else for (; e = e[n];) if (1 === e.nodeType || s) {
                    if (l = e[L] || (e[L] = {}), (a = l[n]) && a[0] === R && a[1] === o) return h[2] = a[2];
                    if (l[n] = h, h[2] = t(e, i, r)) return ! 0
                }
            }
        }
        function p(t) {
            return t.length > 1 ?
            function(e, i, n) {
                for (var s = t.length; s--;) if (!t[s](e, i, n)) return ! 1;
                return ! 0
            }: t[0]
        }
        function g(t, i, n) {
            for (var s = 0,
            o = i.length; o > s; s++) e(t, i[s], n);
            return n
        }
        function m(t, e, i, n, s) {
            for (var o, r = [], a = 0, l = t.length, h = null != e; l > a; a++)(o = t[a]) && (!i || i(o, n, s)) && (r.push(o), h && e.push(a));
            return r
        }
        function v(t, e, i, s, o, r) {
            return s && !s[L] && (s = v(s)),
            o && !o[L] && (o = v(o, r)),
            n(function(n, r, a, l) {
                var h, c, u, f = [],
                d = [],
                p = r.length,
                v = n || g(e || "*", a.nodeType ? [a] : a, []),
                y = !t || !n && e ? v: m(v, f, t, a, l),
                b = i ? o || (n ? t: p || s) ? [] : r: y;
                if (i && i(y, b, a, l), s) for (h = m(b, d), s(h, [], a, l), c = h.length; c--;)(u = h[c]) && (b[d[c]] = !(y[d[c]] = u));
                if (n) {
                    if (o || t) {
                        if (o) {
                            for (h = [], c = b.length; c--;)(u = b[c]) && h.push(y[c] = u);
                            o(null, b = [], h, l)
                        }
                        for (c = b.length; c--;)(u = b[c]) && (h = o ? ee.call(n, u) : f[c]) > -1 && (n[h] = !(r[h] = u))
                    }
                } else b = m(b === r ? b.splice(p, b.length) : b),
                o ? o(null, r, b, l) : Z.apply(r, b)
            })
        }
        function y(t) {
            for (var e, i, n, s = t.length,
            o = _.relative[t[0].type], r = o || _.relative[" "], a = o ? 1 : 0, l = d(function(t) {
                return t === e
            },
            r, !0), h = d(function(t) {
                return ee.call(e, t) > -1
            },
            r, !0), c = [function(t, i, n) {
                return ! o && (n || i !== E) || ((e = i).nodeType ? l(t, i, n) : h(t, i, n))
            }]; s > a; a++) if (i = _.relative[t[a].type]) c = [d(p(c), i)];
            else {
                if (i = _.filter[t[a].type].apply(null, t[a].matches), i[L]) {
                    for (n = ++a; s > n && !_.relative[t[n].type]; n++);
                    return v(a > 1 && p(c), a > 1 && f(t.slice(0, a - 1).concat({
                        value: " " === t[a - 2].type ? "*": ""
                    })).replace(le, "$1"), i, n > a && y(t.slice(a, n)), s > n && y(t = t.slice(n)), s > n && f(t))
                }
                c.push(i)
            }
            return p(c)
        }
        function b(t, i) {
            var s = i.length > 0,
            o = t.length > 0,
            r = function(n, r, a, l, h) {
                var c, u, f, d = 0,
                p = "0",
                g = n && [],
                v = [],
                y = E,
                b = n || o && _.find.TAG("*", h),
                w = R += null == y ? 1 : Math.random() || .1,
                x = b.length;
                for (h && (E = r !== I && r); p !== x && null != (c = b[p]); p++) {
                    if (o && c) {
                        for (u = 0; f = t[u++];) if (f(c, r, a)) {
                            l.push(c);
                            break
                        }
                        h && (R = w)
                    }
                    s && ((c = !f && c) && d--, n && g.push(c))
                }
                if (d += p, s && p !== d) {
                    for (u = 0; f = i[u++];) f(g, v, r, a);
                    if (n) {
                        if (d > 0) for (; p--;) g[p] || v[p] || (v[p] = K.call(l));
                        v = m(v)
                    }
                    Z.apply(l, v),
                    h && !n && v.length > 0 && d + i.length > 1 && e.uniqueSort(l)
                }
                return h && (R = w, E = y),
                g
            };
            return s ? n(r) : r
        }
        var w, x, _, C, T, k, S, P, E, N, D, H, I, z, $, A, W, j, M, L = "sizzle" + -new Date,
        O = t.document,
        R = 0,
        F = 0,
        q = i(),
        B = i(),
        X = i(),
        U = function(t, e) {
            return t === e && (D = !0),
            0
        },
        V = "undefined",
        Y = 1 << 31,
        Q = {}.hasOwnProperty,
        G = [],
        K = G.pop,
        J = G.push,
        Z = G.push,
        te = G.slice,
        ee = G.indexOf ||
        function(t) {
            for (var e = 0,
            i = this.length; i > e; e++) if (this[e] === t) return e;
            return - 1
        },
        ie = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ne = "[\\x20\\t\\r\\n\\f]",
        se = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        oe = se.replace("w", "w#"),
        re = "\\[" + ne + "*(" + se + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]",
        ae = ":(" + se + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
        le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
        he = new RegExp("^" + ne + "*," + ne + "*"),
        ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
        ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
        fe = new RegExp(ae),
        de = new RegExp("^" + oe + "$"),
        pe = {
            ID: new RegExp("^#(" + se + ")"),
            CLASS: new RegExp("^\\.(" + se + ")"),
            TAG: new RegExp("^(" + se.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + re),
            PSEUDO: new RegExp("^" + ae),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + ie + ")$", "i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
        },
        ge = /^(?:input|select|textarea|button)$/i,
        me = /^h\d$/i,
        ve = /^[^{]+\{\s*\[native \w/,
        ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        be = /[+~]/,
        we = /'|\\/g,
        xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
        _e = function(t, e, i) {
            var n = "0x" + e - 65536;
            return n !== n || i ? e: 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        };
        try {
            Z.apply(G = te.call(O.childNodes), O.childNodes),
            G[O.childNodes.length].nodeType
        } catch(Ce) {
            Z = {
                apply: G.length ?
                function(t, e) {
                    J.apply(t, te.call(e))
                }: function(t, e) {
                    for (var i = t.length,
                    n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }
        x = e.support = {},
        T = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName: !1
        },
        H = e.setDocument = function(t) {
            var e, i = t ? t.ownerDocument || t: O,
            n = i.defaultView;
            return i !== I && 9 === i.nodeType && i.documentElement ? (I = i, z = i.documentElement, $ = !T(i), n && n !== n.top && (n.addEventListener ? n.addEventListener("unload",
            function() {
                H()
            },
            !1) : n.attachEvent && n.attachEvent("onunload",
            function() {
                H()
            })), x.attributes = s(function(t) {
                return t.className = "i",
                !t.getAttribute("className")
            }), x.getElementsByTagName = s(function(t) {
                return t.appendChild(i.createComment("")),
                !t.getElementsByTagName("*").length
            }), x.getElementsByClassName = ve.test(i.getElementsByClassName) && s(function(t) {
                return t.innerHTML = "<div class='a'></div><div class='a i'></div>",
                t.firstChild.className = "i",
                2 === t.getElementsByClassName("i").length
            }), x.getById = s(function(t) {
                return z.appendChild(t).id = L,
                !i.getElementsByName || !i.getElementsByName(L).length
            }), x.getById ? (_.find.ID = function(t, e) {
                if (typeof e.getElementById !== V && $) {
                    var i = e.getElementById(t);
                    return i && i.parentNode ? [i] : []
                }
            },
            _.filter.ID = function(t) {
                var e = t.replace(xe, _e);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete _.find.ID, _.filter.ID = function(t) {
                var e = t.replace(xe, _e);
                return function(t) {
                    var i = typeof t.getAttributeNode !== V && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }), _.find.TAG = x.getElementsByTagName ?
            function(t, e) {
                return typeof e.getElementsByTagName !== V ? e.getElementsByTagName(t) : void 0
            }: function(t, e) {
                var i, n = [],
                s = 0,
                o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = o[s++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return o
            },
            _.find.CLASS = x.getElementsByClassName &&
            function(t, e) {
                return typeof e.getElementsByClassName !== V && $ ? e.getElementsByClassName(t) : void 0
            },
            W = [], A = [], (x.qsa = ve.test(i.querySelectorAll)) && (s(function(t) {
                t.innerHTML = "<select msallowclip=''><option selected=''></option></select>",
                t.querySelectorAll("[msallowclip^='']").length && A.push("[*^$]=" + ne + "*(?:''|\"\")"),
                t.querySelectorAll("[selected]").length || A.push("\\[" + ne + "*(?:value|" + ie + ")"),
                t.querySelectorAll(":checked").length || A.push(":checked")
            }), s(function(t) {
                var e = i.createElement("input");
                e.setAttribute("type", "hidden"),
                t.appendChild(e).setAttribute("name", "D"),
                t.querySelectorAll("[name=d]").length && A.push("name" + ne + "*[*^$|!~]?="),
                t.querySelectorAll(":enabled").length || A.push(":enabled", ":disabled"),
                t.querySelectorAll("*,:x"),
                A.push(",.*:")
            })), (x.matchesSelector = ve.test(j = z.matches || z.webkitMatchesSelector || z.mozMatchesSelector || z.oMatchesSelector || z.msMatchesSelector)) && s(function(t) {
                x.disconnectedMatch = j.call(t, "div"),
                j.call(t, "[s!='']:x"),
                W.push("!=", ae)
            }), A = A.length && new RegExp(A.join("|")), W = W.length && new RegExp(W.join("|")), e = ve.test(z.compareDocumentPosition), M = e || ve.test(z.contains) ?
            function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement: t,
                n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            }: function(t, e) {
                if (e) for (; e = e.parentNode;) if (e === t) return ! 0;
                return ! 1
            },
            U = e ?
            function(t, e) {
                if (t === e) return D = !0,
                0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n: (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === O && M(O, t) ? -1 : e === i || e.ownerDocument === O && M(O, e) ? 1 : N ? ee.call(N, t) - ee.call(N, e) : 0 : 4 & n ? -1 : 1)
            }: function(t, e) {
                if (t === e) return D = !0,
                0;
                var n, s = 0,
                o = t.parentNode,
                a = e.parentNode,
                l = [t],
                h = [e];
                if (!o || !a) return t === i ? -1 : e === i ? 1 : o ? -1 : a ? 1 : N ? ee.call(N, t) - ee.call(N, e) : 0;
                if (o === a) return r(t, e);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (n = e; n = n.parentNode;) h.unshift(n);
                for (; l[s] === h[s];) s++;
                return s ? r(l[s], h[s]) : l[s] === O ? -1 : h[s] === O ? 1 : 0
            },
            i) : I
        },
        e.matches = function(t, i) {
            return e(t, null, null, i)
        },
        e.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== I && H(t), i = i.replace(ue, "='$1']"), !(!x.matchesSelector || !$ || W && W.test(i) || A && A.test(i))) try {
                var n = j.call(t, i);
                if (n || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch(s) {}
            return e(i, I, null, [t]).length > 0
        },
        e.contains = function(t, e) {
            return (t.ownerDocument || t) !== I && H(t),
            M(t, e)
        },
        e.attr = function(t, e) { (t.ownerDocument || t) !== I && H(t);
            var i = _.attrHandle[e.toLowerCase()],
            n = i && Q.call(_.attrHandle, e.toLowerCase()) ? i(t, e, !$) : void 0;
            return void 0 !== n ? n: x.attributes || !$ ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value: null
        },
        e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        },
        e.uniqueSort = function(t) {
            var e, i = [],
            n = 0,
            s = 0;
            if (D = !x.detectDuplicates, N = !x.sortStable && t.slice(0), t.sort(U), D) {
                for (; e = t[s++];) e === t[s] && (n = i.push(s));
                for (; n--;) t.splice(i[n], 1)
            }
            return N = null,
            t
        },
        C = e.getText = function(t) {
            var e, i = "",
            n = 0,
            s = t.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += C(t)
                } else if (3 === s || 4 === s) return t.nodeValue
            } else for (; e = t[n++];) i += C(e);
            return i
        },
        _ = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(xe, _e),
                    t[3] = (t[3] || t[4] || t[5] || "").replace(xe, _e),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(),
                    "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]),
                    t
                },
                PSEUDO: function(t) {
                    var e, i = !t[6] && t[2];
                    return pe.CHILD.test(t[0]) ? null: (t[3] ? t[2] = t[4] || t[5] || "": i && fe.test(i) && (e = k(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(xe, _e).toLowerCase();
                    return "*" === t ?
                    function() {
                        return ! 0
                    }: function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = q[t + " "];
                    return e || (e = new RegExp("(^|" + ne + ")" + t + "(" + ne + "|$)")) && q(t,
                    function(t) {
                        return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== V && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, i, n) {
                    return function(s) {
                        var o = e.attr(s, t);
                        return null == o ? "!=" === i: i ? (o += "", "=" === i ? o === n: "!=" === i ? o !== n: "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice( - n.length) === n: "~=" === i ? (" " + o + " ").indexOf(n) > -1 : "|=" === i ? o === n || o.slice(0, n.length + 1) === n + "-": !1) : !0
                    }
                },
                CHILD: function(t, e, i, n, s) {
                    var o = "nth" !== t.slice(0, 3),
                    r = "last" !== t.slice( - 4),
                    a = "of-type" === e;
                    return 1 === n && 0 === s ?
                    function(t) {
                        return !! t.parentNode
                    }: function(e, i, l) {
                        var h, c, u, f, d, p, g = o !== r ? "nextSibling": "previousSibling",
                        m = e.parentNode,
                        v = a && e.nodeName.toLowerCase(),
                        y = !l && !a;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (u = e; u = u[g];) if (a ? u.nodeName.toLowerCase() === v: 1 === u.nodeType) return ! 1;
                                    p = g = "only" === t && !p && "nextSibling"
                                }
                                return ! 0
                            }
                            if (p = [r ? m.firstChild: m.lastChild], r && y) {
                                for (c = m[L] || (m[L] = {}), h = c[t] || [], d = h[0] === R && h[1], f = h[0] === R && h[2], u = d && m.childNodes[d]; u = ++d && u && u[g] || (f = d = 0) || p.pop();) if (1 === u.nodeType && ++f && u === e) {
                                    c[t] = [R, d, f];
                                    break
                                }
                            } else if (y && (h = (e[L] || (e[L] = {}))[t]) && h[0] === R) f = h[1];
                            else for (; (u = ++d && u && u[g] || (f = d = 0) || p.pop()) && ((a ? u.nodeName.toLowerCase() !== v: 1 !== u.nodeType) || !++f || (y && ((u[L] || (u[L] = {}))[t] = [R, f]), u !== e)););
                            return f -= s,
                            f === n || f % n === 0 && f / n >= 0
                        }
                    }
                },
                PSEUDO: function(t, i) {
                    var s, o = _.pseudos[t] || _.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[L] ? o(i) : o.length > 1 ? (s = [t, t, "", i], _.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                        for (var n, s = o(t, i), r = s.length; r--;) n = ee.call(t, s[r]),
                        t[n] = !(e[n] = s[r])
                    }) : function(t) {
                        return o(t, 0, s)
                    }) : o
                }
            },
            pseudos: {
                not: n(function(t) {
                    var e = [],
                    i = [],
                    s = S(t.replace(le, "$1"));
                    return s[L] ? n(function(t, e, i, n) {
                        for (var o, r = s(t, null, n, []), a = t.length; a--;)(o = r[a]) && (t[a] = !(e[a] = o))
                    }) : function(t, n, o) {
                        return e[0] = t,
                        s(e, null, o, i),
                        !i.pop()
                    }
                }),
                has: n(function(t) {
                    return function(i) {
                        return e(t, i).length > 0
                    }
                }),
                contains: n(function(t) {
                    return function(e) {
                        return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                    }
                }),
                lang: n(function(t) {
                    return de.test(t || "") || e.error("unsupported lang: " + t),
                    t = t.replace(xe, _e).toLowerCase(),
                    function(e) {
                        var i;
                        do
                        if (i = $ ? e.lang: e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(),
                        i === t || 0 === i.indexOf(t + "-");
                        while ((e = e.parentNode) && 1 === e.nodeType);
                        return ! 1
                    }
                }),
                target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                },
                root: function(t) {
                    return t === z
                },
                focus: function(t) {
                    return t === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex,
                    t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return ! 1;
                    return ! 0
                },
                parent: function(t) {
                    return ! _.pseudos.empty(t)
                },
                header: function(t) {
                    return me.test(t.nodeName)
                },
                input: function(t) {
                    return ge.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: h(function() {
                    return [0]
                }),
                last: h(function(t, e) {
                    return [e - 1]
                }),
                eq: h(function(t, e, i) {
                    return [0 > i ? i + e: i]
                }),
                even: h(function(t, e) {
                    for (var i = 0; e > i; i += 2) t.push(i);
                    return t
                }),
                odd: h(function(t, e) {
                    for (var i = 1; e > i; i += 2) t.push(i);
                    return t
                }),
                lt: h(function(t, e, i) {
                    for (var n = 0 > i ? i + e: i; --n >= 0;) t.push(n);
                    return t
                }),
                gt: h(function(t, e, i) {
                    for (var n = 0 > i ? i + e: i; ++n < e;) t.push(n);
                    return t
                })
            }
        },
        _.pseudos.nth = _.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) _.pseudos[w] = a(w);
        for (w in {
            submit: !0,
            reset: !0
        }) _.pseudos[w] = l(w);
        return u.prototype = _.filters = _.pseudos,
        _.setFilters = new u,
        k = e.tokenize = function(t, i) {
            var n, s, o, r, a, l, h, c = B[t + " "];
            if (c) return i ? 0 : c.slice(0);
            for (a = t, l = [], h = _.preFilter; a;) { (!n || (s = he.exec(a))) && (s && (a = a.slice(s[0].length) || a), l.push(o = [])),
                n = !1,
                (s = ce.exec(a)) && (n = s.shift(), o.push({
                    value: n,
                    type: s[0].replace(le, " ")
                }), a = a.slice(n.length));
                for (r in _.filter) ! (s = pe[r].exec(a)) || h[r] && !(s = h[r](s)) || (n = s.shift(), o.push({
                    value: n,
                    type: r,
                    matches: s
                }), a = a.slice(n.length));
                if (!n) break
            }
            return i ? a.length: a ? e.error(t) : B(t, l).slice(0)
        },
        S = e.compile = function(t, e) {
            var i, n = [],
            s = [],
            o = X[t + " "];
            if (!o) {
                for (e || (e = k(t)), i = e.length; i--;) o = y(e[i]),
                o[L] ? n.push(o) : s.push(o);
                o = X(t, b(s, n)),
                o.selector = t
            }
            return o
        },
        P = e.select = function(t, e, i, n) {
            var s, o, r, a, l, h = "function" == typeof t && t,
            u = !n && k(t = h.selector || t);
            if (i = i || [], 1 === u.length) {
                if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (r = o[0]).type && x.getById && 9 === e.nodeType && $ && _.relative[o[1].type]) {
                    if (e = (_.find.ID(r.matches[0].replace(xe, _e), e) || [])[0], !e) return i;
                    h && (e = e.parentNode),
                    t = t.slice(o.shift().value.length)
                }
                for (s = pe.needsContext.test(t) ? 0 : o.length; s--&&(r = o[s], !_.relative[a = r.type]);) if ((l = _.find[a]) && (n = l(r.matches[0].replace(xe, _e), be.test(o[0].type) && c(e.parentNode) || e))) {
                    if (o.splice(s, 1), t = n.length && f(o), !t) return Z.apply(i, n),
                    i;
                    break
                }
            }
            return (h || S(t, u))(n, e, !$, i, be.test(t) && c(e.parentNode) || e),
            i
        },
        x.sortStable = L.split("").sort(U).join("") === L,
        x.detectDuplicates = !!D,
        H(),
        x.sortDetached = s(function(t) {
            return 1 & t.compareDocumentPosition(I.createElement("div"))
        }),
        s(function(t) {
            return t.innerHTML = "<a href='#'></a>",
            "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width",
        function(t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }),
        x.attributes && s(function(t) {
            return t.innerHTML = "<input/>",
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
        }) || o("value",
        function(t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }),
        s(function(t) {
            return null == t.getAttribute("disabled")
        }) || o(ie,
        function(t, e, i) {
            var n;
            return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value: null
        }),
        e
    } (t);
    se.find = he,
    se.expr = he.selectors,
    se.expr[":"] = se.expr.pseudos,
    se.unique = he.uniqueSort,
    se.text = he.getText,
    se.isXMLDoc = he.isXML,
    se.contains = he.contains;
    var ce = se.expr.match.needsContext,
    ue = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    fe = /^.[^:#\[\.,]*$/;
    se.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"),
        1 === e.length && 1 === n.nodeType ? se.find.matchesSelector(n, t) ? [n] : [] : se.find.matches(t, se.grep(e,
        function(t) {
            return 1 === t.nodeType
        }))
    },
    se.fn.extend({
        find: function(t) {
            var e, i = [],
            n = this,
            s = n.length;
            if ("string" != typeof t) return this.pushStack(se(t).filter(function() {
                for (e = 0; s > e; e++) if (se.contains(n[e], this)) return ! 0
            }));
            for (e = 0; s > e; e++) se.find(t, n[e], i);
            return i = this.pushStack(s > 1 ? se.unique(i) : i),
            i.selector = this.selector ? this.selector + " " + t: t,
            i
        },
        filter: function(t) {
            return this.pushStack(n(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(n(this, t || [], !0))
        },
        is: function(t) {
            return !! n(this, "string" == typeof t && ce.test(t) ? se(t) : t || [], !1).length
        }
    });
    var de, pe = t.document,
    ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    me = se.fn.init = function(t, e) {
        var i, n;
        if (!t) return this;
        if ("string" == typeof t) {
            if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : ge.exec(t), !i || !i[1] && e) return ! e || e.jquery ? (e || de).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof se ? e[0] : e, se.merge(this, se.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e: pe, !0)), ue.test(i[1]) && se.isPlainObject(e)) for (i in e) se.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            if (n = pe.getElementById(i[2]), n && n.parentNode) {
                if (n.id !== i[2]) return de.find(t);
                this.length = 1,
                this[0] = n
            }
            return this.context = pe,
            this.selector = t,
            this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : se.isFunction(t) ? "undefined" != typeof de.ready ? de.ready(t) : t(se) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), se.makeArray(t, this))
    };
    me.prototype = se.fn,
    de = se(pe);
    var ve = /^(?:parents|prev(?:Until|All))/,
    ye = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    se.extend({
        dir: function(t, e, i) {
            for (var n = [], s = t[e]; s && 9 !== s.nodeType && (void 0 === i || 1 !== s.nodeType || !se(s).is(i));) 1 === s.nodeType && n.push(s),
            s = s[e];
            return n
        },
        sibling: function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        }
    }),
    se.fn.extend({
        has: function(t) {
            var e, i = se(t, this),
            n = i.length;
            return this.filter(function() {
                for (e = 0; n > e; e++) if (se.contains(this, i[e])) return ! 0
            })
        },
        closest: function(t, e) {
            for (var i, n = 0,
            s = this.length,
            o = [], r = ce.test(t) || "string" != typeof t ? se(t, e || this.context) : 0; s > n; n++) for (i = this[n]; i && i !== e; i = i.parentNode) if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && se.find.matchesSelector(i, t))) {
                o.push(i);
                break
            }
            return this.pushStack(o.length > 1 ? se.unique(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? se.inArray(this[0], se(t)) : se.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(t, e) {
            return this.pushStack(se.unique(se.merge(this.get(), se(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject: this.prevObject.filter(t))
        }
    }),
    se.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e: null
        },
        parents: function(t) {
            return se.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return se.dir(t, "parentNode", i)
        },
        next: function(t) {
            return s(t, "nextSibling")
        },
        prev: function(t) {
            return s(t, "previousSibling")
        },
        nextAll: function(t) {
            return se.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return se.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return se.dir(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return se.dir(t, "previousSibling", i)
        },
        siblings: function(t) {
            return se.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return se.sibling(t.firstChild)
        },
        contents: function(t) {
            return se.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document: se.merge([], t.childNodes)
        }
    },
    function(t, e) {
        se.fn[t] = function(i, n) {
            var s = se.map(this, e, i);
            return "Until" !== t.slice( - 5) && (n = i),
            n && "string" == typeof n && (s = se.filter(n, s)),
            this.length > 1 && (ye[t] || (s = se.unique(s)), ve.test(t) && (s = s.reverse())),
            this.pushStack(s)
        }
    });
    var be = /\S+/g,
    we = {};
    se.Callbacks = function(t) {
        t = "string" == typeof t ? we[t] || o(t) : se.extend({},
        t);
        var e, i, n, s, r, a, l = [],
        h = !t.once && [],
        c = function(o) {
            for (i = t.memory && o, n = !0, r = a || 0, a = 0, s = l.length, e = !0; l && s > r; r++) if (l[r].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                i = !1;
                break
            }
            e = !1,
            l && (h ? h.length && c(h.shift()) : i ? l = [] : u.disable())
        },
        u = {
            add: function() {
                if (l) {
                    var n = l.length; !
                    function o(e) {
                        se.each(e,
                        function(e, i) {
                            var n = se.type(i);
                            "function" === n ? t.unique && u.has(i) || l.push(i) : i && i.length && "string" !== n && o(i)
                        })
                    } (arguments),
                    e ? s = l.length: i && (a = n, c(i))
                }
                return this
            },
            remove: function() {
                return l && se.each(arguments,
                function(t, i) {
                    for (var n; (n = se.inArray(i, l, n)) > -1;) l.splice(n, 1),
                    e && (s >= n && s--, r >= n && r--)
                }),
                this
            },
            has: function(t) {
                return t ? se.inArray(t, l) > -1 : !(!l || !l.length)
            },
            empty: function() {
                return l = [],
                s = 0,
                this
            },
            disable: function() {
                return l = h = i = void 0,
                this
            },
            disabled: function() {
                return ! l
            },
            lock: function() {
                return h = void 0,
                i || u.disable(),
                this
            },
            locked: function() {
                return ! h
            },
            fireWith: function(t, i) {
                return ! l || n && !h || (i = i || [], i = [t, i.slice ? i.slice() : i], e ? h.push(i) : c(i)),
                this
            },
            fire: function() {
                return u.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! n
            }
        };
        return u
    },
    se.extend({
        Deferred: function(t) {
            var e = [["resolve", "done", se.Callbacks("once memory"), "resolved"], ["reject", "fail", se.Callbacks("once memory"), "rejected"], ["notify", "progress", se.Callbacks("memory")]],
            i = "pending",
            n = {
                state: function() {
                    return i
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var t = arguments;
                    return se.Deferred(function(i) {
                        se.each(e,
                        function(e, o) {
                            var r = se.isFunction(t[e]) && t[e];
                            s[o[1]](function() {
                                var t = r && r.apply(this, arguments);
                                t && se.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === n ? i.promise() : this, r ? [t] : arguments)
                            })
                        }),
                        t = null
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? se.extend(t, n) : n
                }
            },
            s = {};
            return n.pipe = n.then,
            se.each(e,
            function(t, o) {
                var r = o[2],
                a = o[3];
                n[o[1]] = r.add,
                a && r.add(function() {
                    i = a
                },
                e[1 ^ t][2].disable, e[2][2].lock),
                s[o[0]] = function() {
                    return s[o[0] + "With"](this === s ? n: this, arguments),
                    this
                },
                s[o[0] + "With"] = r.fireWith
            }),
            n.promise(s),
            t && t.call(s, s),
            s
        },
        when: function(t) {
            var e, i, n, s = 0,
            o = Q.call(arguments),
            r = o.length,
            a = 1 !== r || t && se.isFunction(t.promise) ? r: 0,
            l = 1 === a ? t: se.Deferred(),
            h = function(t, i, n) {
                return function(s) {
                    i[t] = this,
                    n[t] = arguments.length > 1 ? Q.call(arguments) : s,
                    n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                }
            };
            if (r > 1) for (e = new Array(r), i = new Array(r), n = new Array(r); r > s; s++) o[s] && se.isFunction(o[s].promise) ? o[s].promise().done(h(s, n, o)).fail(l.reject).progress(h(s, i, e)) : --a;
            return a || l.resolveWith(n, o),
            l.promise()
        }
    });
    var xe;
    se.fn.ready = function(t) {
        return se.ready.promise().done(t),
        this
    },
    se.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? se.readyWait++:se.ready(!0)
        },
        ready: function(t) {
            if (t === !0 ? !--se.readyWait: !se.isReady) {
                if (!pe.body) return setTimeout(se.ready);
                se.isReady = !0,
                t !== !0 && --se.readyWait > 0 || (xe.resolveWith(pe, [se]), se.fn.triggerHandler && (se(pe).triggerHandler("ready"), se(pe).off("ready")))
            }
        }
    }),
    se.ready.promise = function(e) {
        if (!xe) if (xe = se.Deferred(), "complete" === pe.readyState) setTimeout(se.ready);
        else if (pe.addEventListener) pe.addEventListener("DOMContentLoaded", a, !1),
        t.addEventListener("load", a, !1);
        else {
            pe.attachEvent("onreadystatechange", a),
            t.attachEvent("onload", a);
            var i = !1;
            try {
                i = null == t.frameElement && pe.documentElement
            } catch(n) {}
            i && i.doScroll && !
            function s() {
                if (!se.isReady) {
                    try {
                        i.doScroll("left")
                    } catch(t) {
                        return setTimeout(s, 50)
                    }
                    r(),
                    se.ready()
                }
            } ()
        }
        return xe.promise(e)
    };
    var _e, Ce = "undefined";
    for (_e in se(ie)) break;
    ie.ownLast = "0" !== _e,
    ie.inlineBlockNeedsLayout = !1,
    se(function() {
        var t, e, i, n;
        i = pe.getElementsByTagName("body")[0],
        i && i.style && (e = pe.createElement("div"), n = pe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== Ce && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ie.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(n))
    }),
    function() {
        var t = pe.createElement("div");
        if (null == ie.deleteExpando) {
            ie.deleteExpando = !0;
            try {
                delete t.test
            } catch(e) {
                ie.deleteExpando = !1
            }
        }
        t = null
    } (),
    se.acceptData = function(t) {
        var e = se.noData[(t.nodeName + " ").toLowerCase()],
        i = +t.nodeType || 1;
        return 1 !== i && 9 !== i ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
    };
    var Te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    ke = /([A-Z])/g;
    se.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return t = t.nodeType ? se.cache[t[se.expando]] : t[se.expando],
            !!t && !h(t)
        },
        data: function(t, e, i) {
            return c(t, e, i)
        },
        removeData: function(t, e) {
            return u(t, e)
        },
        _data: function(t, e, i) {
            return c(t, e, i, !0)
        },
        _removeData: function(t, e) {
            return u(t, e, !0)
        }
    }),
    se.fn.extend({
        data: function(t, e) {
            var i, n, s, o = this[0],
            r = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (s = se.data(o), 1 === o.nodeType && !se._data(o, "parsedAttrs"))) {
                    for (i = r.length; i--;) r[i] && (n = r[i].name, 0 === n.indexOf("data-") && (n = se.camelCase(n.slice(5)), l(o, n, s[n])));
                    se._data(o, "parsedAttrs", !0)
                }
                return s
            }
            return "object" == typeof t ? this.each(function() {
                se.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                se.data(this, t, e)
            }) : o ? l(o, t, se.data(o, t)) : void 0
        },
        removeData: function(t) {
            return this.each(function() {
                se.removeData(this, t)
            })
        }
    }),
    se.extend({
        queue: function(t, e, i) {
            var n;
            return t ? (e = (e || "fx") + "queue", n = se._data(t, e), i && (!n || se.isArray(i) ? n = se._data(t, e, se.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = se.queue(t, e),
            n = i.length,
            s = i.shift(),
            o = se._queueHooks(t, e),
            r = function() {
                se.dequeue(t, e)
            };
            "inprogress" === s && (s = i.shift(), n--),
            s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, r, o)),
            !n && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return se._data(t, i) || se._data(t, i, {
                empty: se.Callbacks("once memory").add(function() {
                    se._removeData(t, e + "queue"),
                    se._removeData(t, i)
                })
            })
        }
    }),
    se.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--),
            arguments.length < i ? se.queue(this[0], t) : void 0 === e ? this: this.each(function() {
                var i = se.queue(this, t, e);
                se._queueHooks(this, t),
                "fx" === t && "inprogress" !== i[0] && se.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                se.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var i, n = 1,
            s = se.Deferred(),
            o = this,
            r = this.length,
            a = function() {--n || s.resolveWith(o, [o])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;) i = se._data(o[r], t + "queueHooks"),
            i && i.empty && (n++, i.empty.add(a));
            return a(),
            s.promise(e)
        }
    });
    var Se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Pe = ["Top", "Right", "Bottom", "Left"],
    Ee = function(t, e) {
        return t = e || t,
        "none" === se.css(t, "display") || !se.contains(t.ownerDocument, t)
    },
    Ne = se.access = function(t, e, i, n, s, o, r) {
        var a = 0,
        l = t.length,
        h = null == i;
        if ("object" === se.type(i)) {
            s = !0;
            for (a in i) se.access(t, e, a, i[a], !0, o, r)
        } else if (void 0 !== n && (s = !0, se.isFunction(n) || (r = !0), h && (r ? (e.call(t, n), e = null) : (h = e, e = function(t, e, i) {
            return h.call(se(t), i)
        })), e)) for (; l > a; a++) e(t[a], i, r ? n: n.call(t[a], a, e(t[a], i)));
        return s ? t: h ? e.call(t) : l ? e(t[0], i) : o
    },
    De = /^(?:checkbox|radio)$/i; !
    function() {
        var t = pe.createElement("input"),
        e = pe.createElement("div"),
        i = pe.createDocumentFragment();
        if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ie.leadingWhitespace = 3 === e.firstChild.nodeType, ie.tbody = !e.getElementsByTagName("tbody").length, ie.htmlSerialize = !!e.getElementsByTagName("link").length, ie.html5Clone = "<:nav></:nav>" !== pe.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, i.appendChild(t), ie.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, i.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ie.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ie.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick",
        function() {
            ie.noCloneEvent = !1
        }), e.cloneNode(!0).click()), null == ie.deleteExpando) {
            ie.deleteExpando = !0;
            try {
                delete e.test
            } catch(n) {
                ie.deleteExpando = !1
            }
        }
    } (),
    function() {
        var e, i, n = pe.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        }) i = "on" + e,
        (ie[e + "Bubbles"] = i in t) || (n.setAttribute(i, "t"), ie[e + "Bubbles"] = n.attributes[i].expando === !1);
        n = null
    } ();
    var He = /^(?:input|select|textarea)$/i,
    Ie = /^key/,
    ze = /^(?:mouse|pointer|contextmenu)|click/,
    $e = /^(?:focusinfocus|focusoutblur)$/,
    Ae = /^([^.]*)(?:\.(.+)|)$/;
    se.event = {
        global: {},
        add: function(t, e, i, n, s) {
            var o, r, a, l, h, c, u, f, d, p, g, m = se._data(t);
            if (m) {
                for (i.handler && (l = i, i = l.handler, s = l.selector), i.guid || (i.guid = se.guid++), (r = m.events) || (r = m.events = {}), (c = m.handle) || (c = m.handle = function(t) {
                    return typeof se === Ce || t && se.event.triggered === t.type ? void 0 : se.event.dispatch.apply(c.elem, arguments)
                },
                c.elem = t), e = (e || "").match(be) || [""], a = e.length; a--;) o = Ae.exec(e[a]) || [],
                d = g = o[1],
                p = (o[2] || "").split(".").sort(),
                d && (h = se.event.special[d] || {},
                d = (s ? h.delegateType: h.bindType) || d, h = se.event.special[d] || {},
                u = se.extend({
                    type: d,
                    origType: g,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: s,
                    needsContext: s && se.expr.match.needsContext.test(s),
                    namespace: p.join(".")
                },
                l), (f = r[d]) || (f = r[d] = [], f.delegateCount = 0, h.setup && h.setup.call(t, n, p, c) !== !1 || (t.addEventListener ? t.addEventListener(d, c, !1) : t.attachEvent && t.attachEvent("on" + d, c))), h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), s ? f.splice(f.delegateCount++, 0, u) : f.push(u), se.event.global[d] = !0);
                t = null
            }
        },
        remove: function(t, e, i, n, s) {
            var o, r, a, l, h, c, u, f, d, p, g, m = se.hasData(t) && se._data(t);
            if (m && (c = m.events)) {
                for (e = (e || "").match(be) || [""], h = e.length; h--;) if (a = Ae.exec(e[h]) || [], d = g = a[1], p = (a[2] || "").split(".").sort(), d) {
                    for (u = se.event.special[d] || {},
                    d = (n ? u.delegateType: u.bindType) || d, f = c[d] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) r = f[o],
                    !s && g !== r.origType || i && i.guid !== r.guid || a && !a.test(r.namespace) || n && n !== r.selector && ("**" !== n || !r.selector) || (f.splice(o, 1), r.selector && f.delegateCount--, u.remove && u.remove.call(t, r));
                    l && !f.length && (u.teardown && u.teardown.call(t, p, m.handle) !== !1 || se.removeEvent(t, d, m.handle), delete c[d])
                } else for (d in c) se.event.remove(t, d + e[h], i, n, !0);
                se.isEmptyObject(c) && (delete m.handle, se._removeData(t, "events"))
            }
        },
        trigger: function(e, i, n, s) {
            var o, r, a, l, h, c, u, f = [n || pe],
            d = ee.call(e, "type") ? e.type: e,
            p = ee.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = c = n = n || pe, 3 !== n.nodeType && 8 !== n.nodeType && !$e.test(d + se.event.triggered) && (d.indexOf(".") >= 0 && (p = d.split("."), d = p.shift(), p.sort()), r = d.indexOf(":") < 0 && "on" + d, e = e[se.expando] ? e: new se.Event(d, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : se.makeArray(i, [e]), h = se.event.special[d] || {},
            s || !h.trigger || h.trigger.apply(n, i) !== !1)) {
                if (!s && !h.noBubble && !se.isWindow(n)) {
                    for (l = h.delegateType || d, $e.test(l + d) || (a = a.parentNode); a; a = a.parentNode) f.push(a),
                    c = a;
                    c === (n.ownerDocument || pe) && f.push(c.defaultView || c.parentWindow || t)
                }
                for (u = 0; (a = f[u++]) && !e.isPropagationStopped();) e.type = u > 1 ? l: h.bindType || d,
                o = (se._data(a, "events") || {})[e.type] && se._data(a, "handle"),
                o && o.apply(a, i),
                o = r && a[r],
                o && o.apply && se.acceptData(a) && (e.result = o.apply(a, i), e.result === !1 && e.preventDefault());
                if (e.type = d, !s && !e.isDefaultPrevented() && (!h._default || h._default.apply(f.pop(), i) === !1) && se.acceptData(n) && r && n[d] && !se.isWindow(n)) {
                    c = n[r],
                    c && (n[r] = null),
                    se.event.triggered = d;
                    try {
                        n[d]()
                    } catch(g) {}
                    se.event.triggered = void 0,
                    c && (n[r] = c)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = se.event.fix(t);
            var e, i, n, s, o, r = [],
            a = Q.call(arguments),
            l = (se._data(this, "events") || {})[t.type] || [],
            h = se.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !h.preDispatch || h.preDispatch.call(this, t) !== !1) {
                for (r = se.event.handlers.call(this, t, l), e = 0; (s = r[e++]) && !t.isPropagationStopped();) for (t.currentTarget = s.elem, o = 0; (n = s.handlers[o++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n, t.data = n.data, i = ((se.event.special[n.origType] || {}).handle || n.handler).apply(s.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, t),
                t.result
            }
        },
        handlers: function(t, e) {
            var i, n, s, o, r = [],
            a = e.delegateCount,
            l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                for (s = [], o = 0; a > o; o++) n = e[o],
                i = n.selector + " ",
                void 0 === s[i] && (s[i] = n.needsContext ? se(i, this).index(l) >= 0 : se.find(i, this, null, [l]).length),
                s[i] && s.push(n);
                s.length && r.push({
                    elem: l,
                    handlers: s
                })
            }
            return a < e.length && r.push({
                elem: this,
                handlers: e.slice(a)
            }),
            r
        },
        fix: function(t) {
            if (t[se.expando]) return t;
            var e, i, n, s = t.type,
            o = t,
            r = this.fixHooks[s];
            for (r || (this.fixHooks[s] = r = ze.test(s) ? this.mouseHooks: Ie.test(s) ? this.keyHooks: {}), n = r.props ? this.props.concat(r.props) : this.props, t = new se.Event(o), e = n.length; e--;) i = n[e],
            t[i] = o[i];
            return t.target || (t.target = o.srcElement || pe),
            3 === t.target.nodeType && (t.target = t.target.parentNode),
            t.metaKey = !!t.metaKey,
            r.filter ? r.filter(t, o) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode: e.keyCode),
                t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var i, n, s, o = e.button,
                r = e.fromElement;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || pe, s = n.documentElement, i = n.body, t.pageX = e.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)),
                !t.relatedTarget && r && (t.relatedTarget = r === t.target ? e.toElement: r),
                t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== p() && this.focus) try {
                        return this.focus(),
                        !1
                    } catch(t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === p() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return se.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return se.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, i, n) {
            var s = se.extend(new se.Event, i, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? se.event.trigger(s, null, e) : se.event.dispatch.call(e, s),
            s.isDefaultPrevented() && i.preventDefault()
        }
    },
    se.removeEvent = pe.removeEventListener ?
    function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1)
    }: function(t, e, i) {
        var n = "on" + e;
        t.detachEvent && (typeof t[n] === Ce && (t[n] = null), t.detachEvent(n, i))
    },
    se.Event = function(t, e) {
        return this instanceof se.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? f: d) : this.type = t, e && se.extend(this, e), this.timeStamp = t && t.timeStamp || se.now(), void(this[se.expando] = !0)) : new se.Event(t, e)
    },
    se.Event.prototype = {
        isDefaultPrevented: d,
        isPropagationStopped: d,
        isImmediatePropagationStopped: d,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = f,
            t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = f,
            t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = f,
            t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    se.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    },
    function(t, e) {
        se.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = this,
                s = t.relatedTarget,
                o = t.handleObj;
                return (!s || s !== n && !se.contains(n, s)) && (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e),
                i
            }
        }
    }),
    ie.submitBubbles || (se.event.special.submit = {
        setup: function() {
            return se.nodeName(this, "form") ? !1 : void se.event.add(this, "click._submit keypress._submit",
            function(t) {
                var e = t.target,
                i = se.nodeName(e, "input") || se.nodeName(e, "button") ? e.form: void 0;
                i && !se._data(i, "submitBubbles") && (se.event.add(i, "submit._submit",
                function(t) {
                    t._submit_bubble = !0
                }), se._data(i, "submitBubbles", !0))
            })
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && se.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            return se.nodeName(this, "form") ? !1 : void se.event.remove(this, "._submit")
        }
    }),
    ie.changeBubbles || (se.event.special.change = {
        setup: function() {
            return He.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (se.event.add(this, "propertychange._change",
            function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), se.event.add(this, "click._change",
            function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1),
                se.event.simulate("change", this, t, !0)
            })), !1) : void se.event.add(this, "beforeactivate._change",
            function(t) {
                var e = t.target;
                He.test(e.nodeName) && !se._data(e, "changeBubbles") && (se.event.add(e, "change._change",
                function(t) { ! this.parentNode || t.isSimulated || t.isTrigger || se.event.simulate("change", this.parentNode, t, !0)
                }), se._data(e, "changeBubbles", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return se.event.remove(this, "._change"),
            !He.test(this.nodeName)
        }
    }),
    ie.focusinBubbles || se.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(t, e) {
        var i = function(t) {
            se.event.simulate(e, t.target, se.event.fix(t), !0)
        };
        se.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this,
                s = se._data(n, e);
                s || n.addEventListener(t, i, !0),
                se._data(n, e, (s || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                s = se._data(n, e) - 1;
                s ? se._data(n, e, s) : (n.removeEventListener(t, i, !0), se._removeData(n, e))
            }
        }
    }),
    se.fn.extend({
        on: function(t, e, i, n, s) {
            var o, r;
            if ("object" == typeof t) {
                "string" != typeof e && (i = i || e, e = void 0);
                for (o in t) this.on(o, e, i, t[o], s);
                return this
            }
            if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = d;
            else if (!n) return this;
            return 1 === s && (r = n, n = function(t) {
                return se().off(t),
                r.apply(this, arguments)
            },
            n.guid = r.guid || (r.guid = se.guid++)),
            this.each(function() {
                se.event.add(this, t, n, i, e)
            })
        },
        one: function(t, e, i, n) {
            return this.on(t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, s;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj,
            se(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace: n.origType, n.selector, n.handler),
            this;
            if ("object" == typeof t) {
                for (s in t) this.off(s, e, t[s]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (i = e, e = void 0),
            i === !1 && (i = d),
            this.each(function() {
                se.event.remove(this, t, i, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                se.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            return i ? se.event.trigger(t, e, i, !0) : void 0
        }
    });
    var We = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    je = / jQuery\d+="(?:null|\d+)"/g,
    Me = new RegExp("<(?:" + We + ")[\\s/>]", "i"),
    Le = /^\s+/,
    Oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Re = /<([\w:]+)/,
    Fe = /<tbody/i,
    qe = /<|&#?\w+;/,
    Be = /<(?:script|style|link)/i,
    Xe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ue = /^$|\/(?:java|ecma)script/i,
    Ve = /^true\/(.*)/,
    Ye = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Qe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    Ge = g(pe),
    Ke = Ge.appendChild(pe.createElement("div"));
    Qe.optgroup = Qe.option,
    Qe.tbody = Qe.tfoot = Qe.colgroup = Qe.caption = Qe.thead,
    Qe.th = Qe.td,
    se.extend({
        clone: function(t, e, i) {
            var n, s, o, r, a, l = se.contains(t.ownerDocument, t);
            if (ie.html5Clone || se.isXMLDoc(t) || !Me.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Ke.innerHTML = t.outerHTML, Ke.removeChild(o = Ke.firstChild)), !(ie.noCloneEvent && ie.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || se.isXMLDoc(t))) for (n = m(o), a = m(t), r = 0; null != (s = a[r]); ++r) n[r] && C(s, n[r]);
            if (e) if (i) for (a = a || m(t), n = n || m(o), r = 0; null != (s = a[r]); r++) _(s, n[r]);
            else _(t, o);
            return n = m(o, "script"),
            n.length > 0 && x(n, !l && m(t, "script")),
            n = a = s = null,
            o
        },
        buildFragment: function(t, e, i, n) {
            for (var s, o, r, a, l, h, c, u = t.length,
            f = g(e), d = [], p = 0; u > p; p++) if (o = t[p], o || 0 === o) if ("object" === se.type(o)) se.merge(d, o.nodeType ? [o] : o);
            else if (qe.test(o)) {
                for (a = a || f.appendChild(e.createElement("div")), l = (Re.exec(o) || ["", ""])[1].toLowerCase(), c = Qe[l] || Qe._default, a.innerHTML = c[1] + o.replace(Oe, "<$1></$2>") + c[2], s = c[0]; s--;) a = a.lastChild;
                if (!ie.leadingWhitespace && Le.test(o) && d.push(e.createTextNode(Le.exec(o)[0])), !ie.tbody) for (o = "table" !== l || Fe.test(o) ? "<table>" !== c[1] || Fe.test(o) ? 0 : a: a.firstChild, s = o && o.childNodes.length; s--;) se.nodeName(h = o.childNodes[s], "tbody") && !h.childNodes.length && o.removeChild(h);
                for (se.merge(d, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = f.lastChild
            } else d.push(e.createTextNode(o));
            for (a && f.removeChild(a), ie.appendChecked || se.grep(m(d, "input"), v), p = 0; o = d[p++];) if ((!n || -1 === se.inArray(o, n)) && (r = se.contains(o.ownerDocument, o), a = m(f.appendChild(o), "script"), r && x(a), i)) for (s = 0; o = a[s++];) Ue.test(o.type || "") && i.push(o);
            return a = null,
            f
        },
        cleanData: function(t, e) {
            for (var i, n, s, o, r = 0,
            a = se.expando,
            l = se.cache,
            h = ie.deleteExpando,
            c = se.event.special; null != (i = t[r]); r++) if ((e || se.acceptData(i)) && (s = i[a], o = s && l[s])) {
                if (o.events) for (n in o.events) c[n] ? se.event.remove(i, n) : se.removeEvent(i, n, o.handle);
                l[s] && (delete l[s], h ? delete i[a] : typeof i.removeAttribute !== Ce ? i.removeAttribute(a) : i[a] = null, Y.push(s))
            }
        }
    }),
    se.fn.extend({
        text: function(t) {
            return Ne(this,
            function(t) {
                return void 0 === t ? se.text(this) : this.empty().append((this[0] && this[0].ownerDocument || pe).createTextNode(t))
            },
            null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments,
            function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments,
            function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments,
            function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments,
            function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var i, n = t ? se.filter(t, this) : this, s = 0; null != (i = n[s]); s++) e || 1 !== i.nodeType || se.cleanData(m(i)),
            i.parentNode && (e && se.contains(i.ownerDocument, i) && x(m(i, "script")), i.parentNode.removeChild(i));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && se.cleanData(m(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && se.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t,
            e = null == e ? t: e,
            this.map(function() {
                return se.clone(this, t, e)
            })
        },
        html: function(t) {
            return Ne(this,
            function(t) {
                var e = this[0] || {},
                i = 0,
                n = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(je, "") : void 0;
                if (! ("string" != typeof t || Be.test(t) || !ie.htmlSerialize && Me.test(t) || !ie.leadingWhitespace && Le.test(t) || Qe[(Re.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(Oe, "<$1></$2>");
                    try {
                        for (; n > i; i++) e = this[i] || {},
                        1 === e.nodeType && (se.cleanData(m(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch(s) {}
                }
                e && this.empty().append(t)
            },
            null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments,
            function(e) {
                t = this.parentNode,
                se.cleanData(m(this)),
                t && t.replaceChild(e, this)
            }),
            t && (t.length || t.nodeType) ? this: this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = G.apply([], t);
            var i, n, s, o, r, a, l = 0,
            h = this.length,
            c = this,
            u = h - 1,
            f = t[0],
            d = se.isFunction(f);
            if (d || h > 1 && "string" == typeof f && !ie.checkClone && Xe.test(f)) return this.each(function(i) {
                var n = c.eq(i);
                d && (t[0] = f.call(this, i, n.html())),
                n.domManip(t, e)
            });
            if (h && (a = se.buildFragment(t, this[0].ownerDocument, !1, this), i = a.firstChild, 1 === a.childNodes.length && (a = i), i)) {
                for (o = se.map(m(a, "script"), b), s = o.length; h > l; l++) n = a,
                l !== u && (n = se.clone(n, !0, !0), s && se.merge(o, m(n, "script"))),
                e.call(this[l], n, l);
                if (s) for (r = o[o.length - 1].ownerDocument, se.map(o, w), l = 0; s > l; l++) n = o[l],
                Ue.test(n.type || "") && !se._data(n, "globalEval") && se.contains(r, n) && (n.src ? se._evalUrl && se._evalUrl(n.src) : se.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Ye, "")));
                a = i = null
            }
            return this
        }
    }),
    se.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(t, e) {
        se.fn[t] = function(t) {
            for (var i, n = 0,
            s = [], o = se(t), r = o.length - 1; r >= n; n++) i = n === r ? this: this.clone(!0),
            se(o[n])[e](i),
            K.apply(s, i.get());
            return this.pushStack(s)
        }
    });
    var Je, Ze = {}; !
    function() {
        var t;
        ie.shrinkWrapBlocks = function() {
            if (null != t) return t;
            t = !1;
            var e, i, n;
            return i = pe.getElementsByTagName("body")[0],
            i && i.style ? (e = pe.createElement("div"), n = pe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== Ce && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(pe.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), i.removeChild(n), t) : void 0
        }
    } ();
    var ti, ei, ii = /^margin/,
    ni = new RegExp("^(" + Se + ")(?!px)[a-z%]+$", "i"),
    si = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (ti = function(t) {
        return t.ownerDocument.defaultView.getComputedStyle(t, null)
    },
    ei = function(t, e, i) {
        var n, s, o, r, a = t.style;
        return i = i || ti(t),
        r = i ? i.getPropertyValue(e) || i[e] : void 0,
        i && ("" !== r || se.contains(t.ownerDocument, t) || (r = se.style(t, e)), ni.test(r) && ii.test(e) && (n = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = s, a.maxWidth = o)),
        void 0 === r ? r: r + ""
    }) : pe.documentElement.currentStyle && (ti = function(t) {
        return t.currentStyle
    },
    ei = function(t, e, i) {
        var n, s, o, r, a = t.style;
        return i = i || ti(t),
        r = i ? i[e] : void 0,
        null == r && a && a[e] && (r = a[e]),
        ni.test(r) && !si.test(e) && (n = a.left, s = t.runtimeStyle, o = s && s.left, o && (s.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em": r, r = a.pixelLeft + "px", a.left = n, o && (s.left = o)),
        void 0 === r ? r: r + "" || "auto"
    }),
    function() {
        function e() {
            var e, i, n, s;
            i = pe.getElementsByTagName("body")[0],
            i && i.style && (e = pe.createElement("div"), n = pe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = r = !1, l = !0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(e, null) || {}).top, r = "4px" === (t.getComputedStyle(e, null) || {
                width: "4px"
            }).width, s = e.appendChild(pe.createElement("div")), s.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", s.style.marginRight = s.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(s, null) || {}).marginRight)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = e.getElementsByTagName("td"), s[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === s[0].offsetHeight, a && (s[0].style.display = "", s[1].style.display = "none", a = 0 === s[0].offsetHeight), i.removeChild(n))
        }
        var i, n, s, o, r, a, l;
        i = pe.createElement("div"),
        i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        s = i.getElementsByTagName("a")[0],
        n = s && s.style,
        n && (n.cssText = "float:left;opacity:.5", ie.opacity = "0.5" === n.opacity, ie.cssFloat = !!n.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === i.style.backgroundClip, ie.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, se.extend(ie, {
            reliableHiddenOffsets: function() {
                return null == a && e(),
                a
            },
            boxSizingReliable: function() {
                return null == r && e(),
                r
            },
            pixelPosition: function() {
                return null == o && e(),
                o
            },
            reliableMarginRight: function() {
                return null == l && e(),
                l
            }
        }))
    } (),
    se.swap = function(t, e, i, n) {
        var s, o, r = {};
        for (o in e) r[o] = t.style[o],
        t.style[o] = e[o];
        s = i.apply(t, n || []);
        for (o in e) t.style[o] = r[o];
        return s
    };
    var oi = /alpha\([^)]*\)/i,
    ri = /opacity\s*=\s*([^)]*)/,
    ai = /^(none|table(?!-c[ea]).+)/,
    li = new RegExp("^(" + Se + ")(.*)$", "i"),
    hi = new RegExp("^([+-])=(" + Se + ")", "i"),
    ci = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    ui = {
        letterSpacing: "0",
        fontWeight: "400"
    },
    fi = ["Webkit", "O", "Moz", "ms"];
    se.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = ei(t, "opacity");
                        return "" === i ? "1": i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ie.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, o, r, a = se.camelCase(e),
                l = t.style;
                if (e = se.cssProps[a] || (se.cssProps[a] = P(l, a)), r = se.cssHooks[e] || se.cssHooks[a], void 0 === i) return r && "get" in r && void 0 !== (s = r.get(t, !1, n)) ? s: l[e];
                if (o = typeof i, "string" === o && (s = hi.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(se.css(t, e)), o = "number"), null != i && i === i && ("number" !== o || se.cssNumber[a] || (i += "px"), ie.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(r && "set" in r && void 0 === (i = r.set(t, i, n))))) try {
                    l[e] = i
                } catch(h) {}
            }
        },
        css: function(t, e, i, n) {
            var s, o, r, a = se.camelCase(e);
            return e = se.cssProps[a] || (se.cssProps[a] = P(t.style, a)),
            r = se.cssHooks[e] || se.cssHooks[a],
            r && "get" in r && (o = r.get(t, !0, i)),
            void 0 === o && (o = ei(t, e, n)),
            "normal" === o && e in ui && (o = ui[e]),
            "" === i || i ? (s = parseFloat(o), i === !0 || se.isNumeric(s) ? s || 0 : o) : o
        }
    }),
    se.each(["height", "width"],
    function(t, e) {
        se.cssHooks[e] = {
            get: function(t, i, n) {
                return i ? ai.test(se.css(t, "display")) && 0 === t.offsetWidth ? se.swap(t, ci,
                function() {
                    return H(t, e, n)
                }) : H(t, e, n) : void 0
            },
            set: function(t, i, n) {
                var s = n && ti(t);
                return N(t, i, n ? D(t, e, n, ie.boxSizing && "border-box" === se.css(t, "boxSizing", !1, s), s) : 0)
            }
        }
    }),
    ie.opacity || (se.cssHooks.opacity = {
        get: function(t, e) {
            return ri.test((e && t.currentStyle ? t.currentStyle.filter: t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": e ? "1": ""
        },
        set: function(t, e) {
            var i = t.style,
            n = t.currentStyle,
            s = se.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")": "",
            o = n && n.filter || i.filter || "";
            i.zoom = 1,
            (e >= 1 || "" === e) && "" === se.trim(o.replace(oi, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = oi.test(o) ? o.replace(oi, s) : o + " " + s)
        }
    }),
    se.cssHooks.marginRight = S(ie.reliableMarginRight,
    function(t, e) {
        return e ? se.swap(t, {
            display: "inline-block"
        },
        ei, [t, "marginRight"]) : void 0
    }),
    se.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(t, e) {
        se.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0,
                s = {},
                o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) s[t + Pe[n] + e] = o[n] || o[n - 2] || o[0];
                return s
            }
        },
        ii.test(t) || (se.cssHooks[t + e].set = N)
    }),
    se.fn.extend({
        css: function(t, e) {
            return Ne(this,
            function(t, e, i) {
                var n, s, o = {},
                r = 0;
                if (se.isArray(e)) {
                    for (n = ti(t), s = e.length; s > r; r++) o[e[r]] = se.css(t, e[r], !1, n);
                    return o
                }
                return void 0 !== i ? se.style(t, e, i) : se.css(t, e)
            },
            t, e, arguments.length > 1)
        },
        show: function() {
            return E(this, !0)
        },
        hide: function() {
            return E(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Ee(this) ? se(this).show() : se(this).hide()
            })
        }
    }),
    se.Tween = I,
    I.prototype = {
        constructor: I,
        init: function(t, e, i, n, s, o) {
            this.elem = t,
            this.prop = i,
            this.easing = s || "swing",
            this.options = e,
            this.start = this.now = this.cur(),
            this.end = n,
            this.unit = o || (se.cssNumber[i] ? "": "px")
        },
        cur: function() {
            var t = I.propHooks[this.prop];
            return t && t.get ? t.get(this) : I.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = I.propHooks[this.prop];
            return this.pos = e = this.options.duration ? se.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t,
            this.now = (this.end - this.start) * e + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            i && i.set ? i.set(this) : I.propHooks._default.set(this),
            this
        }
    },
    I.prototype.init.prototype = I.prototype,
    I.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = se.css(t.elem, t.prop, ""), e && "auto" !== e ? e: 0) : t.elem[t.prop]
            },
            set: function(t) {
                se.fx.step[t.prop] ? se.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[se.cssProps[t.prop]] || se.cssHooks[t.prop]) ? se.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    },
    I.propHooks.scrollTop = I.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    se.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return.5 - Math.cos(t * Math.PI) / 2
        }
    },
    se.fx = I.prototype.init,
    se.fx.step = {};
    var di, pi, gi = /^(?:toggle|show|hide)$/,
    mi = new RegExp("^(?:([+-])=|)(" + Se + ")([a-z%]*)$", "i"),
    vi = /queueHooks$/,
    yi = [W],
    bi = {
        "*": [function(t, e) {
            var i = this.createTween(t, e),
            n = i.cur(),
            s = mi.exec(e),
            o = s && s[3] || (se.cssNumber[t] ? "": "px"),
            r = (se.cssNumber[t] || "px" !== o && +n) && mi.exec(se.css(i.elem, t)),
            a = 1,
            l = 20;
            if (r && r[3] !== o) {
                o = o || r[3],
                s = s || [],
                r = +n || 1;
                do a = a || ".5",
                r /= a,
                se.style(i.elem, t, r + o);
                while (a !== (a = i.cur() / n) && 1 !== a && --l)
            }
            return s && (r = i.start = +r || +n || 0, i.unit = o, i.end = s[1] ? r + (s[1] + 1) * s[2] : +s[2]),
            i
        }]
    };
    se.Animation = se.extend(M, {
        tweener: function(t, e) {
            se.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var i, n = 0,
            s = t.length; s > n; n++) i = t[n],
            bi[i] = bi[i] || [],
            bi[i].unshift(e)
        },
        prefilter: function(t, e) {
            e ? yi.unshift(t) : yi.push(t)
        }
    }),
    se.speed = function(t, e, i) {
        var n = t && "object" == typeof t ? se.extend({},
        t) : {
            complete: i || !i && e || se.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !se.isFunction(e) && e
        };
        return n.duration = se.fx.off ? 0 : "number" == typeof n.duration ? n.duration: n.duration in se.fx.speeds ? se.fx.speeds[n.duration] : se.fx.speeds._default,
        (null == n.queue || n.queue === !0) && (n.queue = "fx"),
        n.old = n.complete,
        n.complete = function() {
            se.isFunction(n.old) && n.old.call(this),
            n.queue && se.dequeue(this, n.queue)
        },
        n
    },
    se.fn.extend({
        fadeTo: function(t, e, i, n) {
            return this.filter(Ee).css("opacity", 0).show().end().animate({
                opacity: e
            },
            t, i, n)
        },
        animate: function(t, e, i, n) {
            var s = se.isEmptyObject(t),
            o = se.speed(e, i, n),
            r = function() {
                var e = M(this, se.extend({},
                t), o); (s || se._data(this, "finish")) && e.stop(!0)
            };
            return r.finish = r,
            s || o.queue === !1 ? this.each(r) : this.queue(o.queue, r)
        },
        stop: function(t, e, i) {
            var n = function(t) {
                var e = t.stop;
                delete t.stop,
                e(i)
            };
            return "string" != typeof t && (i = e, e = t, t = void 0),
            e && t !== !1 && this.queue(t || "fx", []),
            this.each(function() {
                var e = !0,
                s = null != t && t + "queueHooks",
                o = se.timers,
                r = se._data(this);
                if (s) r[s] && r[s].stop && n(r[s]);
                else for (s in r) r[s] && r[s].stop && vi.test(s) && n(r[s]);
                for (s = o.length; s--;) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), e = !1, o.splice(s, 1)); (e || !i) && se.dequeue(this, t)
            })
        },
        finish: function(t) {
            return t !== !1 && (t = t || "fx"),
            this.each(function() {
                var e, i = se._data(this),
                n = i[t + "queue"],
                s = i[t + "queueHooks"],
                o = se.timers,
                r = n ? n.length: 0;
                for (i.finish = !0, se.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; r > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish
            })
        }
    }),
    se.each(["toggle", "show", "hide"],
    function(t, e) {
        var i = se.fn[e];
        se.fn[e] = function(t, n, s) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate($(e, !0), t, n, s)
        }
    }),
    se.each({
        slideDown: $("show"),
        slideUp: $("hide"),
        slideToggle: $("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(t, e) {
        se.fn[t] = function(t, i, n) {
            return this.animate(e, t, i, n)
        }
    }),
    se.timers = [],
    se.fx.tick = function() {
        var t, e = se.timers,
        i = 0;
        for (di = se.now(); i < e.length; i++) t = e[i],
        t() || e[i] !== t || e.splice(i--, 1);
        e.length || se.fx.stop(),
        di = void 0
    },
    se.fx.timer = function(t) {
        se.timers.push(t),
        t() ? se.fx.start() : se.timers.pop()
    },
    se.fx.interval = 13,
    se.fx.start = function() {
        pi || (pi = setInterval(se.fx.tick, se.fx.interval))
    },
    se.fx.stop = function() {
        clearInterval(pi),
        pi = null
    },
    se.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    se.fn.delay = function(t, e) {
        return t = se.fx ? se.fx.speeds[t] || t: t,
        e = e || "fx",
        this.queue(e,
        function(e, i) {
            var n = setTimeout(e, t);
            i.stop = function() {
                clearTimeout(n)
            }
        })
    },
    function() {
        var t, e, i, n, s;
        e = pe.createElement("div"),
        e.setAttribute("className", "t"),
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        n = e.getElementsByTagName("a")[0],
        i = pe.createElement("select"),
        s = i.appendChild(pe.createElement("option")),
        t = e.getElementsByTagName("input")[0],
        n.style.cssText = "top:1px",
        ie.getSetAttribute = "t" !== e.className,
        ie.style = /top/.test(n.getAttribute("style")),
        ie.hrefNormalized = "/a" === n.getAttribute("href"),
        ie.checkOn = !!t.value,
        ie.optSelected = s.selected,
        ie.enctype = !!pe.createElement("form").enctype,
        i.disabled = !0,
        ie.optDisabled = !s.disabled,
        t = pe.createElement("input"),
        t.setAttribute("value", ""),
        ie.input = "" === t.getAttribute("value"),
        t.value = "t",
        t.setAttribute("type", "radio"),
        ie.radioValue = "t" === t.value
    } ();
    var wi = /\r/g;
    se.fn.extend({
        val: function(t) {
            var e, i, n, s = this[0]; {
                if (arguments.length) return n = se.isFunction(t),
                this.each(function(i) {
                    var s;
                    1 === this.nodeType && (s = n ? t.call(this, i, se(this).val()) : t, null == s ? s = "": "number" == typeof s ? s += "": se.isArray(s) && (s = se.map(s,
                    function(t) {
                        return null == t ? "": t + ""
                    })), e = se.valHooks[this.type] || se.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
                });
                if (s) return e = se.valHooks[s.type] || se.valHooks[s.nodeName.toLowerCase()],
                e && "get" in e && void 0 !== (i = e.get(s, "value")) ? i: (i = s.value, "string" == typeof i ? i.replace(wi, "") : null == i ? "": i)
            }
        }
    }),
    se.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = se.find.attr(t, "value");
                    return null != e ? e: se.trim(se.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options,
                    s = t.selectedIndex,
                    o = "select-one" === t.type || 0 > s,
                    r = o ? null: [], a = o ? s + 1 : n.length, l = 0 > s ? a: o ? s: 0; a > l; l++) if (i = n[l], !(!i.selected && l !== s || (ie.optDisabled ? i.disabled: null !== i.getAttribute("disabled")) || i.parentNode.disabled && se.nodeName(i.parentNode, "optgroup"))) {
                        if (e = se(i).val(), o) return e;
                        r.push(e)
                    }
                    return r
                },
                set: function(t, e) {
                    for (var i, n, s = t.options,
                    o = se.makeArray(e), r = s.length; r--;) if (n = s[r], se.inArray(se.valHooks.option.get(n), o) >= 0) try {
                        n.selected = i = !0
                    } catch(a) {
                        n.scrollHeight
                    } else n.selected = !1;
                    return i || (t.selectedIndex = -1),
                    s
                }
            }
        }
    }),
    se.each(["radio", "checkbox"],
    function() {
        se.valHooks[this] = {
            set: function(t, e) {
                return se.isArray(e) ? t.checked = se.inArray(se(t).val(), e) >= 0 : void 0
            }
        },
        ie.checkOn || (se.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on": t.value
        })
    });
    var xi, _i, Ci = se.expr.attrHandle,
    Ti = /^(?:checked|selected)$/i,
    ki = ie.getSetAttribute,
    Si = ie.input;
    se.fn.extend({
        attr: function(t, e) {
            return Ne(this, se.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                se.removeAttr(this, t)
            })
        }
    }),
    se.extend({
        attr: function(t, e, i) {
            var n, s, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === Ce ? se.prop(t, e, i) : (1 === o && se.isXMLDoc(t) || (e = e.toLowerCase(), n = se.attrHooks[e] || (se.expr.match.bool.test(e) ? _i: xi)), void 0 === i ? n && "get" in n && null !== (s = n.get(t, e)) ? s: (s = se.find.attr(t, e), null == s ? void 0 : s) : null !== i ? n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s: (t.setAttribute(e, i + ""), i) : void se.removeAttr(t, e))
        },
        removeAttr: function(t, e) {
            var i, n, s = 0,
            o = e && e.match(be);
            if (o && 1 === t.nodeType) for (; i = o[s++];) n = se.propFix[i] || i,
            se.expr.match.bool.test(i) ? Si && ki || !Ti.test(i) ? t[n] = !1 : t[se.camelCase("default-" + i)] = t[n] = !1 : se.attr(t, i, ""),
            t.removeAttribute(ki ? i: n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!ie.radioValue && "radio" === e && se.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e),
                        i && (t.value = i),
                        e
                    }
                }
            }
        }
    }),
    _i = {
        set: function(t, e, i) {
            return e === !1 ? se.removeAttr(t, i) : Si && ki || !Ti.test(i) ? t.setAttribute(!ki && se.propFix[i] || i, i) : t[se.camelCase("default-" + i)] = t[i] = !0,
            i
        }
    },
    se.each(se.expr.match.bool.source.match(/\w+/g),
    function(t, e) {
        var i = Ci[e] || se.find.attr;
        Ci[e] = Si && ki || !Ti.test(e) ?
        function(t, e, n) {
            var s, o;
            return n || (o = Ci[e], Ci[e] = s, s = null != i(t, e, n) ? e.toLowerCase() : null, Ci[e] = o),
            s
        }: function(t, e, i) {
            return i ? void 0 : t[se.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }),
    Si && ki || (se.attrHooks.value = {
        set: function(t, e, i) {
            return se.nodeName(t, "input") ? void(t.defaultValue = e) : xi && xi.set(t, e, i)
        }
    }),
    ki || (xi = {
        set: function(t, e, i) {
            var n = t.getAttributeNode(i);
            return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)),
            n.value = e += "",
            "value" === i || e === t.getAttribute(i) ? e: void 0
        }
    },
    Ci.id = Ci.name = Ci.coords = function(t, e, i) {
        var n;
        return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value: null
    },
    se.valHooks.button = {
        get: function(t, e) {
            var i = t.getAttributeNode(e);
            return i && i.specified ? i.value: void 0
        },
        set: xi.set
    },
    se.attrHooks.contenteditable = {
        set: function(t, e, i) {
            xi.set(t, "" === e ? !1 : e, i)
        }
    },
    se.each(["width", "height"],
    function(t, e) {
        se.attrHooks[e] = {
            set: function(t, i) {
                return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
            }
        }
    })),
    ie.style || (se.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var Pi = /^(?:input|select|textarea|button|object)$/i,
    Ei = /^(?:a|area)$/i;
    se.fn.extend({
        prop: function(t, e) {
            return Ne(this, se.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = se.propFix[t] || t,
            this.each(function() {
                try {
                    this[t] = void 0,
                    delete this[t]
                } catch(e) {}
            })
        }
    }),
    se.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, i) {
            var n, s, o, r = t.nodeType;
            if (t && 3 !== r && 8 !== r && 2 !== r) return o = 1 !== r || !se.isXMLDoc(t),
            o && (e = se.propFix[e] || e, s = se.propHooks[e]),
            void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n: t[e] = i: s && "get" in s && null !== (n = s.get(t, e)) ? n: t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = se.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Pi.test(t.nodeName) || Ei.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }),
    ie.hrefNormalized || se.each(["href", "src"],
    function(t, e) {
        se.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }),
    ie.optSelected || (se.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex),
            null
        }
    }),
    se.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        se.propFix[this.toLowerCase()] = this
    }),
    ie.enctype || (se.propFix.enctype = "encoding");
    var Ni = /[\t\r\n\f]/g;
    se.fn.extend({
        addClass: function(t) {
            var e, i, n, s, o, r, a = 0,
            l = this.length,
            h = "string" == typeof t && t;
            if (se.isFunction(t)) return this.each(function(e) {
                se(this).addClass(t.call(this, e, this.className))
            });
            if (h) for (e = (t || "").match(be) || []; l > a; a++) if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ni, " ") : " ")) {
                for (o = 0; s = e[o++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                r = se.trim(n),
                i.className !== r && (i.className = r)
            }
            return this
        },
        removeClass: function(t) {
            var e, i, n, s, o, r, a = 0,
            l = this.length,
            h = 0 === arguments.length || "string" == typeof t && t;
            if (se.isFunction(t)) return this.each(function(e) {
                se(this).removeClass(t.call(this, e, this.className))
            });
            if (h) for (e = (t || "").match(be) || []; l > a; a++) if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ni, " ") : "")) {
                for (o = 0; s = e[o++];) for (; n.indexOf(" " + s + " ") >= 0;) n = n.replace(" " + s + " ", " ");
                r = t ? se.trim(n) : "",
                i.className !== r && (i.className = r)
            }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(se.isFunction(t) ?
            function(i) {
                se(this).toggleClass(t.call(this, i, this.className, e), e)
            }: function() {
                if ("string" === i) for (var e, n = 0,
                s = se(this), o = t.match(be) || []; e = o[n++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                else(i === Ce || "boolean" === i) && (this.className && se._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "": se._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ",
            i = 0,
            n = this.length; n > i; i++) if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Ni, " ").indexOf(e) >= 0) return ! 0;
            return ! 1
        }
    }),
    se.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(t, e) {
        se.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }),
    se.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    });
    var Di = se.now(),
    Hi = /\?/,
    Ii = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    se.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var i, n = null,
        s = se.trim(e + "");
        return s && !se.trim(s.replace(Ii,
        function(t, e, s, o) {
            return i && e && (n = 0),
            0 === n ? t: (i = s || e, n += !o - !s, "")
        })) ? Function("return " + s)() : se.error("Invalid JSON: " + e)
    },
    se.parseXML = function(e) {
        var i, n;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (n = new DOMParser, i = n.parseFromString(e, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e))
        } catch(s) {
            i = void 0
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || se.error("Invalid XML: " + e),
        i
    };
    var zi, $i, Ai = /#.*$/,
    Wi = /([?&])_=[^&]*/,
    ji = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Mi = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Li = /^(?:GET|HEAD)$/,
    Oi = /^\/\//,
    Ri = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Fi = {},
    qi = {},
    Bi = "*/".concat("*");
    try {
        $i = location.href
    } catch(Xi) {
        $i = pe.createElement("a"),
        $i.href = "",
        $i = $i.href
    }
    zi = Ri.exec($i.toLowerCase()) || [],
    se.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: $i,
            type: "GET",
            isLocal: Mi.test(zi[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bi,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": se.parseJSON,
                "text xml": se.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? R(R(t, se.ajaxSettings), e) : R(se.ajaxSettings, t)
        },
        ajaxPrefilter: L(Fi),
        ajaxTransport: L(qi),
        ajax: function(t, e) {
            function i(t, e, i, n) {
                var s, c, v, y, w, _ = e;
                2 !== b && (b = 2, a && clearTimeout(a), h = void 0, r = n || "", x.readyState = t > 0 ? 4 : 0, s = t >= 200 && 300 > t || 304 === t, i && (y = F(u, x, i)), y = q(u, y, x, s), s ? (u.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (se.lastModified[o] = w), w = x.getResponseHeader("etag"), w && (se.etag[o] = w)), 204 === t || "HEAD" === u.type ? _ = "nocontent": 304 === t ? _ = "notmodified": (_ = y.state, c = y.data, v = y.error, s = !v)) : (v = _, (t || !_) && (_ = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || _) + "", s ? p.resolveWith(f, [c, _, x]) : p.rejectWith(f, [x, _, v]), x.statusCode(m), m = void 0, l && d.trigger(s ? "ajaxSuccess": "ajaxError", [x, u, s ? c: v]), g.fireWith(f, [x, _]), l && (d.trigger("ajaxComplete", [x, u]), --se.active || se.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0),
            e = e || {};
            var n, s, o, r, a, l, h, c, u = se.ajaxSetup({},
            e),
            f = u.context || u,
            d = u.context && (f.nodeType || f.jquery) ? se(f) : se.event,
            p = se.Deferred(),
            g = se.Callbacks("once memory"),
            m = u.statusCode || {},
            v = {},
            y = {},
            b = 0,
            w = "canceled",
            x = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (2 === b) {
                        if (!c) for (c = {}; e = ji.exec(r);) c[e[1].toLowerCase()] = e[2];
                        e = c[t.toLowerCase()]
                    }
                    return null == e ? null: e
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? r: null
                },
                setRequestHeader: function(t, e) {
                    var i = t.toLowerCase();
                    return b || (t = y[i] = y[i] || t, v[t] = e),
                    this
                },
                overrideMimeType: function(t) {
                    return b || (u.mimeType = t),
                    this
                },
                statusCode: function(t) {
                    var e;
                    if (t) if (2 > b) for (e in t) m[e] = [m[e], t[e]];
                    else x.always(t[x.status]);
                    return this
                },
                abort: function(t) {
                    var e = t || w;
                    return h && h.abort(e),
                    i(0, e),
                    this
                }
            };
            if (p.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, u.url = ((t || u.url || $i) + "").replace(Ai, "").replace(Oi, zi[1] + "//"), u.type = e.method || e.type || u.method || u.type, u.dataTypes = se.trim(u.dataType || "*").toLowerCase().match(be) || [""], null == u.crossDomain && (n = Ri.exec(u.url.toLowerCase()), u.crossDomain = !(!n || n[1] === zi[1] && n[2] === zi[2] && (n[3] || ("http:" === n[1] ? "80": "443")) === (zi[3] || ("http:" === zi[1] ? "80": "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = se.param(u.data, u.traditional)), O(Fi, u, e, x), 2 === b) return x;
            l = u.global,
            l && 0 === se.active++&&se.event.trigger("ajaxStart"),
            u.type = u.type.toUpperCase(),
            u.hasContent = !Li.test(u.type),
            o = u.url,
            u.hasContent || (u.data && (o = u.url += (Hi.test(o) ? "&": "?") + u.data, delete u.data), u.cache === !1 && (u.url = Wi.test(o) ? o.replace(Wi, "$1_=" + Di++) : o + (Hi.test(o) ? "&": "?") + "_=" + Di++)),
            u.ifModified && (se.lastModified[o] && x.setRequestHeader("If-Modified-Since", se.lastModified[o]), se.etag[o] && x.setRequestHeader("If-None-Match", se.etag[o])),
            (u.data && u.hasContent && u.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", u.contentType),
            x.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Bi + "; q=0.01": "") : u.accepts["*"]);
            for (s in u.headers) x.setRequestHeader(s, u.headers[s]);
            if (u.beforeSend && (u.beforeSend.call(f, x, u) === !1 || 2 === b)) return x.abort();
            w = "abort";
            for (s in {
                success: 1,
                error: 1,
                complete: 1
            }) x[s](u[s]);
            if (h = O(qi, u, e, x)) {
                x.readyState = 1,
                l && d.trigger("ajaxSend", [x, u]),
                u.async && u.timeout > 0 && (a = setTimeout(function() {
                    x.abort("timeout")
                },
                u.timeout));
                try {
                    b = 1,
                    h.send(v, i)
                } catch(_) {
                    if (! (2 > b)) throw _;
                    i( - 1, _)
                }
            } else i( - 1, "No Transport");
            return x
        },
        getJSON: function(t, e, i) {
            return se.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return se.get(t, void 0, e, "script")
        }
    }),
    se.each(["get", "post"],
    function(t, e) {
        se[e] = function(t, i, n, s) {
            return se.isFunction(i) && (s = s || n, n = i, i = void 0),
            se.ajax({
                url: t,
                type: e,
                dataType: s,
                data: i,
                success: n
            })
        }
    }),
    se.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(t, e) {
        se.fn[e] = function(t) {
            return this.on(e, t)
        }
    }),
    se._evalUrl = function(t) {
        return se.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    },
    se.fn.extend({
        wrapAll: function(t) {
            if (se.isFunction(t)) return this.each(function(e) {
                se(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = se(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]),
                e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return this.each(se.isFunction(t) ?
            function(e) {
                se(this).wrapInner(t.call(this, e))
            }: function() {
                var e = se(this),
                i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = se.isFunction(t);
            return this.each(function(i) {
                se(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                se.nodeName(this, "body") || se(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    se.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ie.reliableHiddenOffsets() && "none" === (t.style && t.style.display || se.css(t, "display"))
    },
    se.expr.filters.visible = function(t) {
        return ! se.expr.filters.hidden(t)
    };
    var Ui = /%20/g,
    Vi = /\[\]$/,
    Yi = /\r?\n/g,
    Qi = /^(?:submit|button|image|reset|file)$/i,
    Gi = /^(?:input|select|textarea|keygen)/i;
    se.param = function(t, e) {
        var i, n = [],
        s = function(t, e) {
            e = se.isFunction(e) ? e() : null == e ? "": e,
            n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (void 0 === e && (e = se.ajaxSettings && se.ajaxSettings.traditional), se.isArray(t) || t.jquery && !se.isPlainObject(t)) se.each(t,
        function() {
            s(this.name, this.value)
        });
        else for (i in t) B(i, t[i], e, s);
        return n.join("&").replace(Ui, "+")
    },
    se.fn.extend({
        serialize: function() {
            return se.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = se.prop(this, "elements");
                return t ? se.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !se(this).is(":disabled") && Gi.test(this.nodeName) && !Qi.test(t) && (this.checked || !De.test(t))
            }).map(function(t, e) {
                var i = se(this).val();
                return null == i ? null: se.isArray(i) ? se.map(i,
                function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Yi, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(Yi, "\r\n")
                }
            }).get()
        }
    }),
    se.ajaxSettings.xhr = void 0 !== t.ActiveXObject ?
    function() {
        return ! this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || U()
    }: X;
    var Ki = 0,
    Ji = {},
    Zi = se.ajaxSettings.xhr();
    t.ActiveXObject && se(t).on("unload",
    function() {
        for (var t in Ji) Ji[t](void 0, !0)
    }),
    ie.cors = !!Zi && "withCredentials" in Zi,
    Zi = ie.ajax = !!Zi,
    Zi && se.ajaxTransport(function(t) {
        if (!t.crossDomain || ie.cors) {
            var e;
            return {
                send: function(i, n) {
                    var s, o = t.xhr(),
                    r = ++Ki;
                    if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) o[s] = t.xhrFields[s];
                    t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType),
                    t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (s in i) void 0 !== i[s] && o.setRequestHeader(s, i[s] + "");
                    o.send(t.hasContent && t.data || null),
                    e = function(i, s) {
                        var a, l, h;
                        if (e && (s || 4 === o.readyState)) if (delete Ji[r], e = void 0, o.onreadystatechange = se.noop, s) 4 !== o.readyState && o.abort();
                        else {
                            h = {},
                            a = o.status,
                            "string" == typeof o.responseText && (h.text = o.responseText);
                            try {
                                l = o.statusText
                            } catch(c) {
                                l = ""
                            }
                            a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = h.text ? 200 : 404
                        }
                        h && n(a, l, h, o.getAllResponseHeaders())
                    },
                    t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = Ji[r] = e: e()
                },
                abort: function() {
                    e && e(void 0, !0)
                }
            }
        }
    }),
    se.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return se.globalEval(t),
                t
            }
        }
    }),
    se.ajaxPrefilter("script",
    function(t) {
        void 0 === t.cache && (t.cache = !1),
        t.crossDomain && (t.type = "GET", t.global = !1)
    }),
    se.ajaxTransport("script",
    function(t) {
        if (t.crossDomain) {
            var e, i = pe.head || se("head")[0] || pe.documentElement;
            return {
                send: function(n, s) {
                    e = pe.createElement("script"),
                    e.async = !0,
                    t.scriptCharset && (e.charset = t.scriptCharset),
                    e.src = t.url,
                    e.onload = e.onreadystatechange = function(t, i) { (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || s(200, "success"))
                    },
                    i.insertBefore(e, i.firstChild)
                },
                abort: function() {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var tn = [],
    en = /(=)\?(?=&|$)|\?\?/;
    se.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = tn.pop() || se.expando + "_" + Di++;
            return this[t] = !0,
            t
        }
    }),
    se.ajaxPrefilter("json jsonp",
    function(e, i, n) {
        var s, o, r, a = e.jsonp !== !1 && (en.test(e.url) ? "url": "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (s = e.jsonpCallback = se.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(en, "$1" + s) : e.jsonp !== !1 && (e.url += (Hi.test(e.url) ? "&": "?") + e.jsonp + "=" + s), e.converters["script json"] = function() {
            return r || se.error(s + " was not called"),
            r[0]
        },
        e.dataTypes[0] = "json", o = t[s], t[s] = function() {
            r = arguments
        },
        n.always(function() {
            t[s] = o,
            e[s] && (e.jsonpCallback = i.jsonpCallback, tn.push(s)),
            r && se.isFunction(o) && o(r[0]),
            r = o = void 0
        }), "script") : void 0
    }),
    se.parseHTML = function(t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (i = e, e = !1),
        e = e || pe;
        var n = ue.exec(t),
        s = !i && [];
        return n ? [e.createElement(n[1])] : (n = se.buildFragment([t], e, s), s && s.length && se(s).remove(), se.merge([], n.childNodes))
    };
    var nn = se.fn.load;
    se.fn.load = function(t, e, i) {
        if ("string" != typeof t && nn) return nn.apply(this, arguments);
        var n, s, o, r = this,
        a = t.indexOf(" ");
        return a >= 0 && (n = se.trim(t.slice(a, t.length)), t = t.slice(0, a)),
        se.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"),
        r.length > 0 && se.ajax({
            url: t,
            type: o,
            dataType: "html",
            data: e
        }).done(function(t) {
            s = arguments,
            r.html(n ? se("<div>").append(se.parseHTML(t)).find(n) : t)
        }).complete(i &&
        function(t, e) {
            r.each(i, s || [t.responseText, e, t])
        }),
        this
    },
    se.expr.filters.animated = function(t) {
        return se.grep(se.timers,
        function(e) {
            return t === e.elem
        }).length
    };
    var sn = t.document.documentElement;
    se.offset = {
        setOffset: function(t, e, i) {
            var n, s, o, r, a, l, h, c = se.css(t, "position"),
            u = se(t),
            f = {};
            "static" === c && (t.style.position = "relative"),
            a = u.offset(),
            o = se.css(t, "top"),
            l = se.css(t, "left"),
            h = ("absolute" === c || "fixed" === c) && se.inArray("auto", [o, l]) > -1,
            h ? (n = u.position(), r = n.top, s = n.left) : (r = parseFloat(o) || 0, s = parseFloat(l) || 0),
            se.isFunction(e) && (e = e.call(t, i, a)),
            null != e.top && (f.top = e.top - a.top + r),
            null != e.left && (f.left = e.left - a.left + s),
            "using" in e ? e.using.call(t, f) : u.css(f)
        }
    },
    se.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this: this.each(function(e) {
                se.offset.setOffset(this, t, e)
            });
            var e, i, n = {
                top: 0,
                left: 0
            },
            s = this[0],
            o = s && s.ownerDocument;
            if (o) return e = o.documentElement,
            se.contains(e, s) ? (typeof s.getBoundingClientRect !== Ce && (n = s.getBoundingClientRect()), i = V(o), {
                top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : n
        },
        position: function() {
            if (this[0]) {
                var t, e, i = {
                    top: 0,
                    left: 0
                },
                n = this[0];
                return "fixed" === se.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), se.nodeName(t[0], "html") || (i = t.offset()), i.top += se.css(t[0], "borderTopWidth", !0), i.left += se.css(t[0], "borderLeftWidth", !0)),
                {
                    top: e.top - i.top - se.css(n, "marginTop", !0),
                    left: e.left - i.left - se.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || sn; t && !se.nodeName(t, "html") && "static" === se.css(t, "position");) t = t.offsetParent;
                return t || sn
            })
        }
    }),
    se.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(t, e) {
        var i = /Y/.test(e);
        se.fn[t] = function(n) {
            return Ne(this,
            function(t, n, s) {
                var o = V(t);
                return void 0 === s ? o ? e in o ? o[e] : o.document.documentElement[n] : t[n] : void(o ? o.scrollTo(i ? se(o).scrollLeft() : s, i ? s: se(o).scrollTop()) : t[n] = s)
            },
            t, n, arguments.length, null)
        }
    }),
    se.each(["top", "left"],
    function(t, e) {
        se.cssHooks[e] = S(ie.pixelPosition,
        function(t, i) {
            return i ? (i = ei(t, e), ni.test(i) ? se(t).position()[e] + "px": i) : void 0
        })
    }),
    se.each({
        Height: "height",
        Width: "width"
    },
    function(t, e) {
        se.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        },
        function(i, n) {
            se.fn[n] = function(n, s) {
                var o = arguments.length && (i || "boolean" != typeof n),
                r = i || (n === !0 || s === !0 ? "margin": "border");
                return Ne(this,
                function(e, i, n) {
                    var s;
                    return se.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? se.css(e, i, r) : se.style(e, i, n, r)
                },
                e, o ? n: void 0, o, null)
            }
        })
    }),
    se.fn.size = function() {
        return this.length
    },
    se.fn.andSelf = se.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return se
    });
    var on = t.jQuery,
    rn = t.$;
    return se.noConflict = function(e) {
        return t.$ === se && (t.$ = rn),
        e && t.jQuery === se && (t.jQuery = on),
        se
    },
    typeof e === Ce && (t.jQuery = t.$ = se),
    se
}),
function(t, e) {
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var i, n = t(document);
    t.rails = i = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote], button[data-confirm]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        CSRFProtection: function(e) {
            var i = t('meta[name="csrf-token"]').attr("content");
            i && e.setRequestHeader("X-CSRF-Token", i)
        },
        refreshCSRFTokens: function() {
            var e = t("meta[name=csrf-token]").attr("content"),
            i = t("meta[name=csrf-param]").attr("content");
            t('form input[name="' + i + '"]').val(e)
        },
        fire: function(e, i, n) {
            var s = t.Event(i);
            return e.trigger(s, n),
            s.result !== !1
        },
        confirm: function(t) {
            return confirm(t)
        },
        ajax: function(e) {
            return t.ajax(e)
        },
        href: function(t) {
            return t.attr("href")
        },
        handleRemote: function(n) {
            var s, o, r, a, l, h, c, u;
            if (i.fire(n, "ajax:before")) {
                if (a = n.data("cross-domain"), l = a === e ? null: a, h = n.data("with-credentials") || null, c = n.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, n.is("form")) {
                    s = n.attr("method"),
                    o = n.attr("action"),
                    r = n.serializeArray();
                    var f = n.data("ujs:submit-button");
                    f && (r.push(f), n.data("ujs:submit-button", null))
                } else n.is(i.inputChangeSelector) ? (s = n.data("method"), o = n.data("url"), r = n.serialize(), n.data("params") && (r = r + "&" + n.data("params"))) : n.is(i.buttonClickSelector) ? (s = n.data("method") || "get", o = n.data("url"), r = n.serialize(), n.data("params") && (r = r + "&" + n.data("params"))) : (s = n.data("method"), o = i.href(n), r = n.data("params") || null);
                return u = {
                    type: s || "GET",
                    data: r,
                    dataType: c,
                    beforeSend: function(t, s) {
                        return s.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + s.accepts.script),
                        i.fire(n, "ajax:beforeSend", [t, s]) ? void n.trigger("ajax:send", t) : !1
                    },
                    success: function(t, e, i) {
                        n.trigger("ajax:success", [t, e, i])
                    },
                    complete: function(t, e) {
                        n.trigger("ajax:complete", [t, e])
                    },
                    error: function(t, e, i) {
                        n.trigger("ajax:error", [t, e, i])
                    },
                    crossDomain: l
                },
                h && (u.xhrFields = {
                    withCredentials: h
                }),
                o && (u.url = o),
                i.ajax(u)
            }
            return ! 1
        },
        handleMethod: function(n) {
            var s = i.href(n),
            o = n.data("method"),
            r = n.attr("target"),
            a = t("meta[name=csrf-token]").attr("content"),
            l = t("meta[name=csrf-param]").attr("content"),
            h = t('<form method="post" action="' + s + '"></form>'),
            c = '<input name="_method" value="' + o + '" type="hidden" />';
            l !== e && a !== e && (c += '<input name="' + l + '" value="' + a + '" type="hidden" />'),
            r && h.attr("target", r),
            h.hide().append(c).appendTo("body"),
            h.submit()
        },
        formElements: function(e, i) {
            return e.is("form") ? t(e[0].elements).filter(i) : e.find(i)
        },
        disableFormElements: function(e) {
            i.formElements(e, i.disableSelector).each(function() {
                i.disableFormElement(t(this))
            })
        },
        disableFormElement: function(t) {
            var i, n;
            i = t.is("button") ? "html": "val",
            n = t.data("disable-with"),
            t.data("ujs:enable-with", t[i]()),
            n !== e && t[i](n),
            t.prop("disabled", !0)
        },
        enableFormElements: function(e) {
            i.formElements(e, i.enableSelector).each(function() {
                i.enableFormElement(t(this))
            })
        },
        enableFormElement: function(t) {
            var e = t.is("button") ? "html": "val";
            t.data("ujs:enable-with") && t[e](t.data("ujs:enable-with")),
            t.prop("disabled", !1)
        },
        allowAction: function(t) {
            var e, n = t.data("confirm"),
            s = !1;
            return n ? (i.fire(t, "confirm") && (s = i.confirm(n), e = i.fire(t, "confirm:complete", [s])), s && e) : !0
        },
        blankInputs: function(e, i, n) {
            var s, o, r = t(),
            a = i || "input,textarea",
            l = e.find(a);
            return l.each(function() {
                if (s = t(this), o = s.is("input[type=checkbox],input[type=radio]") ? s.is(":checked") : s.val(), !o == !n) {
                    if (s.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + s.attr("name") + '"]').length) return ! 0;
                    r = r.add(s)
                }
            }),
            r.length ? r: !1
        },
        nonBlankInputs: function(t, e) {
            return i.blankInputs(t, e, !0)
        },
        stopEverything: function(e) {
            return t(e.target).trigger("ujs:everythingStopped"),
            e.stopImmediatePropagation(),
            !1
        },
        disableElement: function(t) {
            var n = t.data("disable-with");
            t.data("ujs:enable-with", t.html()),
            n !== e && t.html(n),
            t.bind("click.railsDisable",
            function(t) {
                return i.stopEverything(t)
            })
        },
        enableElement: function(t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")),
            t.unbind("click.railsDisable")
        }
    },
    i.fire(n, "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, n) {
        t.crossDomain || i.CSRFProtection(n)
    }), n.delegate(i.linkDisableSelector, "ajax:complete",
    function() {
        i.enableElement(t(this))
    }), n.delegate(i.buttonDisableSelector, "ajax:complete",
    function() {
        i.enableFormElement(t(this))
    }), n.delegate(i.linkClickSelector, "click.rails",
    function(n) {
        var s = t(this),
        o = s.data("method"),
        r = s.data("params"),
        a = n.metaKey || n.ctrlKey;
        if (!i.allowAction(s)) return i.stopEverything(n);
        if (!a && s.is(i.linkDisableSelector) && i.disableElement(s), s.data("remote") !== e) {
            if (a && (!o || "GET" === o) && !r) return ! 0;
            var l = i.handleRemote(s);
            return l === !1 ? i.enableElement(s) : l.error(function() {
                i.enableElement(s)
            }),
            !1
        }
        return s.data("method") ? (i.handleMethod(s), !1) : void 0
    }), n.delegate(i.buttonClickSelector, "click.rails",
    function(e) {
        var n = t(this);
        if (!i.allowAction(n)) return i.stopEverything(e);
        n.is(i.buttonDisableSelector) && i.disableFormElement(n);
        var s = i.handleRemote(n);
        return s === !1 ? i.enableFormElement(n) : s.error(function() {
            i.enableFormElement(n)
        }),
        !1
    }), n.delegate(i.inputChangeSelector, "change.rails",
    function(e) {
        var n = t(this);
        return i.allowAction(n) ? (i.handleRemote(n), !1) : i.stopEverything(e)
    }), n.delegate(i.formSubmitSelector, "submit.rails",
    function(n) {
        var s, o, r = t(this),
        a = r.data("remote") !== e;
        if (!i.allowAction(r)) return i.stopEverything(n);
        if (r.attr("novalidate") == e && (s = i.blankInputs(r, i.requiredInputSelector), s && i.fire(r, "ajax:aborted:required", [s]))) return i.stopEverything(n);
        if (a) {
            if (o = i.nonBlankInputs(r, i.fileInputSelector)) {
                setTimeout(function() {
                    i.disableFormElements(r)
                },
                13);
                var l = i.fire(r, "ajax:aborted:file", [o]);
                return l || setTimeout(function() {
                    i.enableFormElements(r)
                },
                13),
                l
            }
            return i.handleRemote(r),
            !1
        }
        setTimeout(function() {
            i.disableFormElements(r)
        },
        13)
    }), n.delegate(i.formInputClickSelector, "click.rails",
    function(e) {
        var n = t(this);
        if (!i.allowAction(n)) return i.stopEverything(e);
        var s = n.attr("name"),
        o = s ? {
            name: s,
            value: n.val()
        }: null;
        n.closest("form").data("ujs:submit-button", o)
    }), n.delegate(i.formSubmitSelector, "ajax:send.rails",
    function(e) {
        this == e.target && i.disableFormElements(t(this))
    }), n.delegate(i.formSubmitSelector, "ajax:complete.rails",
    function(e) {
        this == e.target && i.enableFormElements(t(this))
    }), t(function() {
        i.refreshCSRFTokens()
    }))
} (jQuery),
function(t, e) {
    function i(e, i) {
        var s, o, r, a = e.nodeName.toLowerCase();
        return "area" === a ? (s = e.parentNode, o = s.name, e.href && o && "map" === s.nodeName.toLowerCase() ? (r = t("img[usemap=#" + o + "]")[0], !!r && n(r)) : !1) : (/input|select|textarea|button|object/.test(a) ? !e.disabled: "a" === a ? e.href || i: i) && n(e)
    }
    function n(e) {
        return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
            return "hidden" === t.css(this, "visibility")
        }).length
    }
    var s = 0,
    o = /^ui-id-\d+$/;
    t.ui = t.ui || {},
    t.extend(t.ui, {
        version: "1.10.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }),
    t.fn.extend({
        focus: function(e) {
            return function(i, n) {
                return "number" == typeof i ? this.each(function() {
                    var e = this;
                    setTimeout(function() {
                        t(e).focus(),
                        n && n.call(e)
                    },
                    i)
                }) : e.apply(this, arguments)
            }
        } (t.fn.focus),
        scrollParent: function() {
            var e;
            return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
            }).eq(0),
            /fixed/.test(this.css("position")) || !e.length ? t(document) : e
        },
        zIndex: function(i) {
            if (i !== e) return this.css("zIndex", i);
            if (this.length) for (var n, s, o = t(this[0]); o.length && o[0] !== document;) {
                if (n = o.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (s = parseInt(o.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                o = o.parent()
            }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++s)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                o.test(this.id) && t(this).removeAttr("id")
            })
        }
    }),
    t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
            return function(i) {
                return !! t.data(i, e)
            }
        }) : function(e, i, n) {
            return !! t.data(e, n[3])
        },
        focusable: function(e) {
            return i(e, !isNaN(t.attr(e, "tabindex")))
        },
        tabbable: function(e) {
            var n = t.attr(e, "tabindex"),
            s = isNaN(n);
            return (s || n >= 0) && i(e, !s)
        }
    }),
    t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"],
    function(i, n) {
        function s(e, i, n, s) {
            return t.each(o,
            function() {
                i -= parseFloat(t.css(e, "padding" + this)) || 0,
                n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0),
                s && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
            }),
            i
        }
        var o = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
        r = n.toLowerCase(),
        a = {
            innerWidth: t.fn.innerWidth,
            innerHeight: t.fn.innerHeight,
            outerWidth: t.fn.outerWidth,
            outerHeight: t.fn.outerHeight
        };
        t.fn["inner" + n] = function(i) {
            return i === e ? a["inner" + n].call(this) : this.each(function() {
                t(this).css(r, s(this, i) + "px")
            })
        },
        t.fn["outer" + n] = function(e, i) {
            return "number" != typeof e ? a["outer" + n].call(this, e) : this.each(function() {
                t(this).css(r, s(this, e, !0, i) + "px")
            })
        }
    }),
    t.fn.addBack || (t.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject: this.prevObject.filter(t))
    }),
    t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
        return function(i) {
            return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
        }
    } (t.fn.removeData)),
    t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
    t.support.selectstart = "onselectstart" in document.createElement("div"),
    t.fn.extend({
        disableSelection: function() {
            return this.bind((t.support.selectstart ? "selectstart": "mousedown") + ".ui-disableSelection",
            function(t) {
                t.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }),
    t.extend(t.ui, {
        plugin: {
            add: function(e, i, n) {
                var s, o = t.ui[e].prototype;
                for (s in n) o.plugins[s] = o.plugins[s] || [],
                o.plugins[s].push([i, n[s]])
            },
            call: function(t, e, i) {
                var n, s = t.plugins[e];
                if (s && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType) for (n = 0; n < s.length; n++) t.options[s[n][0]] && s[n][1].apply(t.element, i)
            }
        },
        hasScroll: function(e, i) {
            if ("hidden" === t(e).css("overflow")) return ! 1;
            var n = i && "left" === i ? "scrollLeft": "scrollTop",
            s = !1;
            return e[n] > 0 ? !0 : (e[n] = 1, s = e[n] > 0, e[n] = 0, s)
        }
    })
} (jQuery),
function(t, e) {
    var i = 0,
    n = Array.prototype.slice,
    s = t.cleanData;
    t.cleanData = function(e) {
        for (var i, n = 0; null != (i = e[n]); n++) try {
            t(i).triggerHandler("remove")
        } catch(o) {}
        s(e)
    },
    t.widget = function(e, i, n) {
        var s, o, r, a, l = {},
        h = e.split(".")[0];
        e = e.split(".")[1],
        s = h + "-" + e,
        n || (n = i, i = t.Widget),
        t.expr[":"][s.toLowerCase()] = function(e) {
            return !! t.data(e, s)
        },
        t[h] = t[h] || {},
        o = t[h][e],
        r = t[h][e] = function(t, e) {
            return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new r(t, e)
        },
        t.extend(r, o, {
            version: n.version,
            _proto: t.extend({},
            n),
            _childConstructors: []
        }),
        a = new i,
        a.options = t.widget.extend({},
        a.options),
        t.each(n,
        function(e, n) {
            return t.isFunction(n) ? void(l[e] = function() {
                var t = function() {
                    return i.prototype[e].apply(this, arguments)
                },
                s = function(t) {
                    return i.prototype[e].apply(this, t)
                };
                return function() {
                    var e, i = this._super,
                    o = this._superApply;
                    return this._super = t,
                    this._superApply = s,
                    e = n.apply(this, arguments),
                    this._super = i,
                    this._superApply = o,
                    e
                }
            } ()) : void(l[e] = n)
        }),
        r.prototype = t.widget.extend(a, {
            widgetEventPrefix: o ? a.widgetEventPrefix || e: e
        },
        l, {
            constructor: r,
            namespace: h,
            widgetName: e,
            widgetFullName: s
        }),
        o ? (t.each(o._childConstructors,
        function(e, i) {
            var n = i.prototype;
            t.widget(n.namespace + "." + n.widgetName, r, i._proto)
        }), delete o._childConstructors) : i._childConstructors.push(r),
        t.widget.bridge(e, r)
    },
    t.widget.extend = function(i) {
        for (var s, o, r = n.call(arguments, 1), a = 0, l = r.length; l > a; a++) for (s in r[a]) o = r[a][s],
        r[a].hasOwnProperty(s) && o !== e && (i[s] = t.isPlainObject(o) ? t.isPlainObject(i[s]) ? t.widget.extend({},
        i[s], o) : t.widget.extend({},
        o) : o);
        return i
    },
    t.widget.bridge = function(i, s) {
        var o = s.prototype.widgetFullName || i;
        t.fn[i] = function(r) {
            var a = "string" == typeof r,
            l = n.call(arguments, 1),
            h = this;
            return r = !a && l.length ? t.widget.extend.apply(null, [r].concat(l)) : r,
            this.each(a ?
            function() {
                var n, s = t.data(this, o);
                return s ? t.isFunction(s[r]) && "_" !== r.charAt(0) ? (n = s[r].apply(s, l), n !== s && n !== e ? (h = n && n.jquery ? h.pushStack(n.get()) : n, !1) : void 0) : t.error("no such method '" + r + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; attempted to call method '" + r + "'")
            }: function() {
                var e = t.data(this, o);
                e ? e.option(r || {})._init() : t.data(this, o, new s(r, this))
            }),
            h
        }
    },
    t.Widget = function() {},
    t.Widget._childConstructors = [],
    t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(e, n) {
            n = t(n || this.defaultElement || this)[0],
            this.element = t(n),
            this.uuid = i++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.options = t.widget.extend({},
            this.options, this._getCreateOptions(), e),
            this.bindings = t(),
            this.hoverable = t(),
            this.focusable = t(),
            n !== this && (t.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === n && this.destroy()
                }
            }), this.document = t(n.style ? n.ownerDocument: n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            this._destroy(),
            this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: t.noop,
        widget: function() {
            return this.element
        },
        option: function(i, n) {
            var s, o, r, a = i;
            if (0 === arguments.length) return t.widget.extend({},
            this.options);
            if ("string" == typeof i) if (a = {},
            s = i.split("."), i = s.shift(), s.length) {
                for (o = a[i] = t.widget.extend({},
                this.options[i]), r = 0; r < s.length - 1; r++) o[s[r]] = o[s[r]] || {},
                o = o[s[r]];
                if (i = s.pop(), 1 === arguments.length) return o[i] === e ? null: o[i];
                o[i] = n
            } else {
                if (1 === arguments.length) return this.options[i] === e ? null: this.options[i];
                a[i] = n
            }
            return this._setOptions(a),
            this
        },
        _setOptions: function(t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return this.options[t] = e,
            "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")),
            this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(e, i, n) {
            var s, o = this;
            "boolean" != typeof e && (n = i, i = e, e = !1),
            n ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()),
            t.each(n,
            function(n, r) {
                function a() {
                    return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? o[r] : r).apply(o, arguments) : void 0
                }
                "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
                var l = n.match(/^(\w+)\s*(.*)$/),
                h = l[1] + o.eventNamespace,
                c = l[2];
                c ? s.delegate(c, h, a) : i.bind(h, a)
            })
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            t.unbind(e).undelegate(e)
        },
        _delay: function(t, e) {
            function i() {
                return ("string" == typeof t ? n[t] : t).apply(n, arguments)
            }
            var n = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e),
            this._on(e, {
                mouseenter: function(e) {
                    t(e.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(e) {
                    t(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e),
            this._on(e, {
                focusin: function(e) {
                    t(e.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(e) {
                    t(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(e, i, n) {
            var s, o, r = this.options[e];
            if (n = n || {},
            i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e: this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent) for (s in o) s in i || (i[s] = o[s]);
            return this.element.trigger(i, n),
            !(t.isFunction(r) && r.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
        }
    },
    t.each({
        show: "fadeIn",
        hide: "fadeOut"
    },
    function(e, i) {
        t.Widget.prototype["_" + e] = function(n, s, o) {
            "string" == typeof s && (s = {
                effect: s
            });
            var r, a = s ? s === !0 || "number" == typeof s ? i: s.effect || i: e;
            s = s || {},
            "number" == typeof s && (s = {
                duration: s
            }),
            r = !t.isEmptyObject(s),
            s.complete = o,
            s.delay && n.delay(s.delay),
            r && t.effects && t.effects.effect[a] ? n[e](s) : a !== e && n[a] ? n[a](s.duration, s.easing, o) : n.queue(function(i) {
                t(this)[e](),
                o && o.call(n[0]),
                i()
            })
        }
    })
} (jQuery),
function(t) {
    var e = !1;
    t(document).mouseup(function() {
        e = !1
    }),
    t.widget("ui.mouse", {
        version: "1.10.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.bind("mousedown." + this.widgetName,
            function(t) {
                return e._mouseDown(t)
            }).bind("click." + this.widgetName,
            function(i) {
                return ! 0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
            }),
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName),
            this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(i) {
            if (!e) {
                this._mouseStarted && this._mouseUp(i),
                this._mouseDownEvent = i;
                var n = this,
                s = 1 === i.which,
                o = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length: !1;
                return s && !o && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    n.mouseDelayMet = !0
                },
                this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                    return n._mouseMove(t)
                },
                this._mouseUpDelegate = function(t) {
                    return n._mouseUp(t)
                },
                t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0)) : !0
            }
        },
        _mouseMove: function(e) {
            return t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function(e) {
            return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)),
            !1
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return ! 0
        }
    })
} (jQuery),
function(t, e) {
    function i(t, e, i) {
        return [parseFloat(t[0]) * (d.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (d.test(t[1]) ? i / 100 : 1)]
    }
    function n(e, i) {
        return parseInt(t.css(e, i), 10) || 0
    }
    function s(e) {
        var i = e[0];
        return 9 === i.nodeType ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: 0,
                left: 0
            }
        }: t.isWindow(i) ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: e.scrollTop(),
                left: e.scrollLeft()
            }
        }: i.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: i.pageY,
                left: i.pageX
            }
        }: {
            width: e.outerWidth(),
            height: e.outerHeight(),
            offset: e.offset()
        }
    }
    t.ui = t.ui || {};
    var o, r = Math.max,
    a = Math.abs,
    l = Math.round,
    h = /left|center|right/,
    c = /top|center|bottom/,
    u = /[\+\-]\d+(\.[\d]+)?%?/,
    f = /^\w+/,
    d = /%$/,
    p = t.fn.position;
    t.position = {
        scrollbarWidth: function() {
            if (o !== e) return o;
            var i, n, s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
            r = s.children()[0];
            return t("body").append(s),
            i = r.offsetWidth,
            s.css("overflow", "scroll"),
            n = r.offsetWidth,
            i === n && (n = s[0].clientWidth),
            s.remove(),
            o = i - n
        },
        getScrollInfo: function(e) {
            var i = e.isWindow || e.isDocument ? "": e.element.css("overflow-x"),
            n = e.isWindow || e.isDocument ? "": e.element.css("overflow-y"),
            s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
            o = "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight;
            return {
                width: o ? t.position.scrollbarWidth() : 0,
                height: s ? t.position.scrollbarWidth() : 0
            }
        },
        getWithinInfo: function(e) {
            var i = t(e || window),
            n = t.isWindow(i[0]),
            s = !!i[0] && 9 === i[0].nodeType;
            return {
                element: i,
                isWindow: n,

                isDocument: s,
                offset: i.offset() || {
                    left: 0,
                    top: 0
                },
                scrollLeft: i.scrollLeft(),
                scrollTop: i.scrollTop(),
                width: n ? i.width() : i.outerWidth(),
                height: n ? i.height() : i.outerHeight()
            }
        }
    },
    t.fn.position = function(e) {
        if (!e || !e.of) return p.apply(this, arguments);
        e = t.extend({},
        e);
        var o, d, g, m, v, y, b = t(e.of),
        w = t.position.getWithinInfo(e.within),
        x = t.position.getScrollInfo(w),
        _ = (e.collision || "flip").split(" "),
        C = {};
        return y = s(b),
        b[0].preventDefault && (e.at = "left top"),
        d = y.width,
        g = y.height,
        m = y.offset,
        v = t.extend({},
        m),
        t.each(["my", "at"],
        function() {
            var t, i, n = (e[this] || "").split(" ");
            1 === n.length && (n = h.test(n[0]) ? n.concat(["center"]) : c.test(n[0]) ? ["center"].concat(n) : ["center", "center"]),
            n[0] = h.test(n[0]) ? n[0] : "center",
            n[1] = c.test(n[1]) ? n[1] : "center",
            t = u.exec(n[0]),
            i = u.exec(n[1]),
            C[this] = [t ? t[0] : 0, i ? i[0] : 0],
            e[this] = [f.exec(n[0])[0], f.exec(n[1])[0]]
        }),
        1 === _.length && (_[1] = _[0]),
        "right" === e.at[0] ? v.left += d: "center" === e.at[0] && (v.left += d / 2),
        "bottom" === e.at[1] ? v.top += g: "center" === e.at[1] && (v.top += g / 2),
        o = i(C.at, d, g),
        v.left += o[0],
        v.top += o[1],
        this.each(function() {
            var s, h, c = t(this),
            u = c.outerWidth(),
            f = c.outerHeight(),
            p = n(this, "marginLeft"),
            y = n(this, "marginTop"),
            T = u + p + n(this, "marginRight") + x.width,
            k = f + y + n(this, "marginBottom") + x.height,
            S = t.extend({},
            v),
            P = i(C.my, c.outerWidth(), c.outerHeight());
            "right" === e.my[0] ? S.left -= u: "center" === e.my[0] && (S.left -= u / 2),
            "bottom" === e.my[1] ? S.top -= f: "center" === e.my[1] && (S.top -= f / 2),
            S.left += P[0],
            S.top += P[1],
            t.support.offsetFractions || (S.left = l(S.left), S.top = l(S.top)),
            s = {
                marginLeft: p,
                marginTop: y
            },
            t.each(["left", "top"],
            function(i, n) {
                t.ui.position[_[i]] && t.ui.position[_[i]][n](S, {
                    targetWidth: d,
                    targetHeight: g,
                    elemWidth: u,
                    elemHeight: f,
                    collisionPosition: s,
                    collisionWidth: T,
                    collisionHeight: k,
                    offset: [o[0] + P[0], o[1] + P[1]],
                    my: e.my,
                    at: e.at,
                    within: w,
                    elem: c
                })
            }),
            e.using && (h = function(t) {
                var i = m.left - S.left,
                n = i + d - u,
                s = m.top - S.top,
                o = s + g - f,
                l = {
                    target: {
                        element: b,
                        left: m.left,
                        top: m.top,
                        width: d,
                        height: g
                    },
                    element: {
                        element: c,
                        left: S.left,
                        top: S.top,
                        width: u,
                        height: f
                    },
                    horizontal: 0 > n ? "left": i > 0 ? "right": "center",
                    vertical: 0 > o ? "top": s > 0 ? "bottom": "middle"
                };
                u > d && a(i + n) < d && (l.horizontal = "center"),
                f > g && a(s + o) < g && (l.vertical = "middle"),
                l.important = r(a(i), a(n)) > r(a(s), a(o)) ? "horizontal": "vertical",
                e.using.call(this, t, l)
            }),
            c.offset(t.extend(S, {
                using: h
            }))
        })
    },
    t.ui.position = {
        fit: {
            left: function(t, e) {
                var i, n = e.within,
                s = n.isWindow ? n.scrollLeft: n.offset.left,
                o = n.width,
                a = t.left - e.collisionPosition.marginLeft,
                l = s - a,
                h = a + e.collisionWidth - o - s;
                e.collisionWidth > o ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - o - s, t.left += l - i) : t.left = h > 0 && 0 >= l ? s: l > h ? s + o - e.collisionWidth: s: l > 0 ? t.left += l: h > 0 ? t.left -= h: t.left = r(t.left - a, t.left)
            },
            top: function(t, e) {
                var i, n = e.within,
                s = n.isWindow ? n.scrollTop: n.offset.top,
                o = e.within.height,
                a = t.top - e.collisionPosition.marginTop,
                l = s - a,
                h = a + e.collisionHeight - o - s;
                e.collisionHeight > o ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - o - s, t.top += l - i) : t.top = h > 0 && 0 >= l ? s: l > h ? s + o - e.collisionHeight: s: l > 0 ? t.top += l: h > 0 ? t.top -= h: t.top = r(t.top - a, t.top)
            }
        },
        flip: {
            left: function(t, e) {
                var i, n, s = e.within,
                o = s.offset.left + s.scrollLeft,
                r = s.width,
                l = s.isWindow ? s.scrollLeft: s.offset.left,
                h = t.left - e.collisionPosition.marginLeft,
                c = h - l,
                u = h + e.collisionWidth - r - l,
                f = "left" === e.my[0] ? -e.elemWidth: "right" === e.my[0] ? e.elemWidth: 0,
                d = "left" === e.at[0] ? e.targetWidth: "right" === e.at[0] ? -e.targetWidth: 0,
                p = -2 * e.offset[0];
                0 > c ? (i = t.left + f + d + p + e.collisionWidth - r - o, (0 > i || i < a(c)) && (t.left += f + d + p)) : u > 0 && (n = t.left - e.collisionPosition.marginLeft + f + d + p - l, (n > 0 || a(n) < u) && (t.left += f + d + p))
            },
            top: function(t, e) {
                var i, n, s = e.within,
                o = s.offset.top + s.scrollTop,
                r = s.height,
                l = s.isWindow ? s.scrollTop: s.offset.top,
                h = t.top - e.collisionPosition.marginTop,
                c = h - l,
                u = h + e.collisionHeight - r - l,
                f = "top" === e.my[1],
                d = f ? -e.elemHeight: "bottom" === e.my[1] ? e.elemHeight: 0,
                p = "top" === e.at[1] ? e.targetHeight: "bottom" === e.at[1] ? -e.targetHeight: 0,
                g = -2 * e.offset[1];
                0 > c ? (n = t.top + d + p + g + e.collisionHeight - r - o, t.top + d + p + g > c && (0 > n || n < a(c)) && (t.top += d + p + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + d + p + g - l, t.top + d + p + g > u && (i > 0 || a(i) < u) && (t.top += d + p + g))
            }
        },
        flipfit: {
            left: function() {
                t.ui.position.flip.left.apply(this, arguments),
                t.ui.position.fit.left.apply(this, arguments)
            },
            top: function() {
                t.ui.position.flip.top.apply(this, arguments),
                t.ui.position.fit.top.apply(this, arguments)
            }
        }
    },
    function() {
        var e, i, n, s, o, r = document.getElementsByTagName("body")[0],
        a = document.createElement("div");
        e = document.createElement(r ? "div": "body"),
        n = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        },
        r && t.extend(n, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (o in n) e.style[o] = n[o];
        e.appendChild(a),
        i = r || document.documentElement,
        i.insertBefore(e, i.firstChild),
        a.style.cssText = "position: absolute; left: 10.7432222px;",
        s = t(a).offset().left,
        t.support.offsetFractions = s > 10 && 11 > s,
        e.innerHTML = "",
        i.removeChild(e)
    } ()
} (jQuery),
function(t) {
    t.widget("ui.draggable", t.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"),
            this.options.addClasses && this.element.addClass("ui-draggable"),
            this.options.disabled && this.element.addClass("ui-draggable-disabled"),
            this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),
            this._mouseDestroy()
        },
        _mouseCapture: function(e) {
            var i = this.options;
            return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (t(i.iframeFix === !0 ? "iframe": i.iframeFix).each(function() {
                t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(t(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function(e) {
            var i = this.options;
            return this.helper = this._createHelper(e),
            this.helper.addClass("ui-draggable-dragging"),
            this._cacheHelperProportions(),
            t.ui.ddmanager && (t.ui.ddmanager.current = this),
            this._cacheMargins(),
            this.cssPosition = this.helper.css("position"),
            this.scrollParent = this.helper.scrollParent(),
            this.offsetParent = this.helper.offsetParent(),
            this.offsetParentCssPosition = this.offsetParent.css("position"),
            this.offset = this.positionAbs = this.element.offset(),
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            this.offset.scroll = !1,
            t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }),
            this.originalPosition = this.position = this._generatePosition(e),
            this.originalPageX = e.pageX,
            this.originalPageY = e.pageY,
            i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
            this._setContainment(),
            this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
        },
        _mouseDrag: function(e, i) {
            if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var n = this._uiHash();
                if (this._trigger("drag", e, n) === !1) return this._mouseUp({}),
                !1;
                this.position = n.position
            }
            return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"),
            t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
            !1
        },
        _mouseStop: function(e) {
            var i = this,
            n = !1;
            return t.ui.ddmanager && !this.options.dropBehaviour && (n = t.ui.ddmanager.drop(this, e)),
            this.dropped && (n = this.dropped, this.dropped = !1),
            "original" !== this.options.helper || t.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !n || "valid" === this.options.revert && n || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10),
            function() {
                i._trigger("stop", e) !== !1 && i._clear()
            }) : this._trigger("stop", e) !== !1 && this._clear(), !1) : !1
        },
        _mouseUp: function(e) {
            return t("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }),
            t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e),
            t.ui.mouse.prototype._mouseUp.call(this, e)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(),
            this
        },
        _getHandle: function(e) {
            return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length: !0
        },
        _createHelper: function(e) {
            var i = this.options,
            n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode: i.appendTo),
            n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"),
            n
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")),
            t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }),
            "left" in e && (this.offset.click.left = e.left + this.margins.left),
            "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
            "top" in e && (this.offset.click.top = e.top + this.margins.top),
            "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }),
            {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.element.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, i, n, s = this.options;
            return s.containment ? "window" === s.containment ? void(this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === s.containment ? void(this.containment = [0, 0, t(document).width() - this.helperProportions.width - this.margins.left, (t(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : s.containment.constructor === Array ? void(this.containment = s.containment) : ("parent" === s.containment && (s.containment = this.helper[0].parentNode), i = t(s.containment), n = i[0], void(n && (e = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i))) : void(this.containment = null)
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var n = "absolute" === e ? 1 : -1,
            s = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent;
            return this.offset.scroll || (this.offset.scroll = {
                top: s.scrollTop(),
                left: s.scrollLeft()
            }),
            {
                top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * n,
                left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * n
            }
        },
        _generatePosition: function(e) {
            var i, n, s, o, r = this.options,
            a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent,
            l = e.pageX,
            h = e.pageY;
            return this.offset.scroll || (this.offset.scroll = {
                top: a.scrollTop(),
                left: a.scrollLeft()
            }),
            this.originalPosition && (this.containment && (this.relative_container ? (n = this.relative_container.offset(), i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), r.grid && (s = r.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, h = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s: s - this.offset.click.top >= i[1] ? s - r.grid[1] : s + r.grid[1] : s, o = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o: o - this.offset.click.left >= i[0] ? o - r.grid[0] : o + r.grid[0] : o)),
            {
                top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"),
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
            this.helper = null,
            this.cancelHelperRemoval = !1
        },
        _trigger: function(e, i, n) {
            return n = n || this._uiHash(),
            t.ui.plugin.call(this, e, [i, n]),
            "drag" === e && (this.positionAbs = this._convertPositionTo("absolute")),
            t.Widget.prototype._trigger.call(this, e, i, n)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }),
    t.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, i) {
            var n = t(this).data("ui-draggable"),
            s = n.options,
            o = t.extend({},
            i, {
                item: n.element
            });
            n.sortables = [],
            t(s.connectToSortable).each(function() {
                var i = t.data(this, "ui-sortable");
                i && !i.options.disabled && (n.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }), i.refreshPositions(), i._trigger("activate", e, o))
            })
        },
        stop: function(e, i) {
            var n = t(this).data("ui-draggable"),
            s = t.extend({},
            i, {
                item: n.element
            });
            t.each(n.sortables,
            function() {
                this.instance.isOver ? (this.instance.isOver = 0, n.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" === n.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, s))
            })
        },
        drag: function(e, i) {
            var n = t(this).data("ui-draggable"),
            s = this;
            t.each(n.sortables,
            function() {
                var o = !1,
                r = this;
                this.instance.positionAbs = n.positionAbs,
                this.instance.helperProportions = n.helperProportions,
                this.instance.offset.click = n.offset.click,
                this.instance._intersectsWith(this.instance.containerCache) && (o = !0, t.each(n.sortables,
                function() {
                    return this.instance.positionAbs = n.positionAbs,
                    this.instance.helperProportions = n.helperProportions,
                    this.instance.offset.click = n.offset.click,
                    this !== r && this.instance._intersectsWith(this.instance.containerCache) && t.contains(r.instance.element[0], this.instance.element[0]) && (o = !1),
                    o
                })),
                o ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(s).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return i.helper[0]
                },
                e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = n.offset.click.top, this.instance.offset.click.left = n.offset.click.left, this.instance.offset.parent.left -= n.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= n.offset.parent.top - this.instance.offset.parent.top, n._trigger("toSortable", e), n.dropped = this.instance.element, n.currentItem = n.element, this.instance.fromOutside = n), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), n._trigger("fromSortable", e), n.dropped = !1)
            })
        }
    }),
    t.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var e = t("body"),
            i = t(this).data("ui-draggable").options;
            e.css("cursor") && (i._cursor = e.css("cursor")),
            e.css("cursor", i.cursor)
        },
        stop: function() {
            var e = t(this).data("ui-draggable").options;
            e._cursor && t("body").css("cursor", e._cursor)
        }
    }),
    t.ui.plugin.add("draggable", "opacity", {
        start: function(e, i) {
            var n = t(i.helper),
            s = t(this).data("ui-draggable").options;
            n.css("opacity") && (s._opacity = n.css("opacity")),
            n.css("opacity", s.opacity)
        },
        stop: function(e, i) {
            var n = t(this).data("ui-draggable").options;
            n._opacity && t(i.helper).css("opacity", n._opacity)
        }
    }),
    t.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var e = t(this).data("ui-draggable");
            e.scrollParent[0] !== document && "HTML" !== e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset())
        },
        drag: function(e) {
            var i = t(this).data("ui-draggable"),
            n = i.options,
            s = !1;
            i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (n.axis && "x" === n.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < n.scrollSensitivity ? i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop + n.scrollSpeed: e.pageY - i.overflowOffset.top < n.scrollSensitivity && (i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < n.scrollSensitivity ? i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft + n.scrollSpeed: e.pageX - i.overflowOffset.left < n.scrollSensitivity && (i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(document).scrollTop() < n.scrollSensitivity ? s = t(document).scrollTop(t(document).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < n.scrollSensitivity && (s = t(document).scrollTop(t(document).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (e.pageX - t(document).scrollLeft() < n.scrollSensitivity ? s = t(document).scrollLeft(t(document).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < n.scrollSensitivity && (s = t(document).scrollLeft(t(document).scrollLeft() + n.scrollSpeed)))),
            s !== !1 && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(i, e)
        }
    }),
    t.ui.plugin.add("draggable", "snap", {
        start: function() {
            var e = t(this).data("ui-draggable"),
            i = e.options;
            e.snapElements = [],
            t(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)": i.snap).each(function() {
                var i = t(this),
                n = i.offset();
                this !== e.element[0] && e.snapElements.push({
                    item: this,
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: n.top,
                    left: n.left
                })
            })
        },
        drag: function(e, i) {
            var n, s, o, r, a, l, h, c, u, f, d = t(this).data("ui-draggable"),
            p = d.options,
            g = p.snapTolerance,
            m = i.offset.left,
            v = m + d.helperProportions.width,
            y = i.offset.top,
            b = y + d.helperProportions.height;
            for (u = d.snapElements.length - 1; u >= 0; u--) a = d.snapElements[u].left,
            l = a + d.snapElements[u].width,
            h = d.snapElements[u].top,
            c = h + d.snapElements[u].height,
            a - g > v || m > l + g || h - g > b || y > c + g || !t.contains(d.snapElements[u].item.ownerDocument, d.snapElements[u].item) ? (d.snapElements[u].snapping && d.options.snap.release && d.options.snap.release.call(d.element, e, t.extend(d._uiHash(), {
                snapItem: d.snapElements[u].item
            })), d.snapElements[u].snapping = !1) : ("inner" !== p.snapMode && (n = Math.abs(h - b) <= g, s = Math.abs(c - y) <= g, o = Math.abs(a - v) <= g, r = Math.abs(l - m) <= g, n && (i.position.top = d._convertPositionTo("relative", {
                top: h - d.helperProportions.height,
                left: 0
            }).top - d.margins.top), s && (i.position.top = d._convertPositionTo("relative", {
                top: c,
                left: 0
            }).top - d.margins.top), o && (i.position.left = d._convertPositionTo("relative", {
                top: 0,
                left: a - d.helperProportions.width
            }).left - d.margins.left), r && (i.position.left = d._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left - d.margins.left)), f = n || s || o || r, "outer" !== p.snapMode && (n = Math.abs(h - y) <= g, s = Math.abs(c - b) <= g, o = Math.abs(a - m) <= g, r = Math.abs(l - v) <= g, n && (i.position.top = d._convertPositionTo("relative", {
                top: h,
                left: 0
            }).top - d.margins.top), s && (i.position.top = d._convertPositionTo("relative", {
                top: c - d.helperProportions.height,
                left: 0
            }).top - d.margins.top), o && (i.position.left = d._convertPositionTo("relative", {
                top: 0,
                left: a
            }).left - d.margins.left), r && (i.position.left = d._convertPositionTo("relative", {
                top: 0,
                left: l - d.helperProportions.width
            }).left - d.margins.left)), !d.snapElements[u].snapping && (n || s || o || r || f) && d.options.snap.snap && d.options.snap.snap.call(d.element, e, t.extend(d._uiHash(), {
                snapItem: d.snapElements[u].item
            })), d.snapElements[u].snapping = n || s || o || r || f)
        }
    }),
    t.ui.plugin.add("draggable", "stack", {
        start: function() {
            var e, i = this.data("ui-draggable").options,
            n = t.makeArray(t(i.stack)).sort(function(e, i) {
                return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
            });
            n.length && (e = parseInt(t(n[0]).css("zIndex"), 10) || 0, t(n).each(function(i) {
                t(this).css("zIndex", e + i)
            }), this.css("zIndex", e + n.length))
        }
    }),
    t.ui.plugin.add("draggable", "zIndex", {
        start: function(e, i) {
            var n = t(i.helper),
            s = t(this).data("ui-draggable").options;
            n.css("zIndex") && (s._zIndex = n.css("zIndex")),
            n.css("zIndex", s.zIndex)
        },
        stop: function(e, i) {
            var n = t(this).data("ui-draggable").options;
            n._zIndex && t(i.helper).css("zIndex", n._zIndex)
        }
    })
} (jQuery),
function(t) {
    function e(t, e, i) {
        return t > e && e + i > t
    }
    t.widget("ui.droppable", {
        version: "1.10.4",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var e, i = this.options,
            n = i.accept;
            this.isover = !1,
            this.isout = !0,
            this.accept = t.isFunction(n) ? n: function(t) {
                return t.is(n)
            },
            this.proportions = function() {
                return arguments.length ? void(e = arguments[0]) : e ? e: e = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                }
            },
            t.ui.ddmanager.droppables[i.scope] = t.ui.ddmanager.droppables[i.scope] || [],
            t.ui.ddmanager.droppables[i.scope].push(this),
            i.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function() {
            for (var e = 0,
            i = t.ui.ddmanager.droppables[this.options.scope]; e < i.length; e++) i[e] === this && i.splice(e, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(e, i) {
            "accept" === e && (this.accept = t.isFunction(i) ? i: function(t) {
                return t.is(i)
            }),
            t.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass),
            i && this._trigger("activate", e, this.ui(i))
        },
        _deactivate: function(e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass),
            i && this._trigger("deactivate", e, this.ui(i))
        },
        _over: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i)))
        },
        _out: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i)))
        },
        _drop: function(e, i) {
            var n = i || t.ui.ddmanager.current,
            s = !1;
            return n && (n.currentItem || n.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var e = t.data(this, "ui-droppable");
                return e.options.greedy && !e.options.disabled && e.options.scope === n.options.scope && e.accept.call(e.element[0], n.currentItem || n.element) && t.ui.intersect(n, t.extend(e, {
                    offset: e.element.offset()
                }), e.options.tolerance) ? (s = !0, !1) : void 0
            }), s ? !1 : this.accept.call(this.element[0], n.currentItem || n.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(n)), this.element) : !1) : !1
        },
        ui: function(t) {
            return {
                draggable: t.currentItem || t.element,
                helper: t.helper,
                position: t.position,
                offset: t.positionAbs
            }
        }
    }),
    t.ui.intersect = function(t, i, n) {
        if (!i.offset) return ! 1;
        var s, o, r = (t.positionAbs || t.position.absolute).left,
        a = (t.positionAbs || t.position.absolute).top,
        l = r + t.helperProportions.width,
        h = a + t.helperProportions.height,
        c = i.offset.left,
        u = i.offset.top,
        f = c + i.proportions().width,
        d = u + i.proportions().height;
        switch (n) {
        case "fit":
            return r >= c && f >= l && a >= u && d >= h;
        case "intersect":
            return c < r + t.helperProportions.width / 2 && l - t.helperProportions.width / 2 < f && u < a + t.helperProportions.height / 2 && h - t.helperProportions.height / 2 < d;
        case "pointer":
            return s = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left,
            o = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top,
            e(o, u, i.proportions().height) && e(s, c, i.proportions().width);
        case "touch":
            return (a >= u && d >= a || h >= u && d >= h || u > a && h > d) && (r >= c && f >= r || l >= c && f >= l || c > r && l > f);
        default:
            return ! 1
        }
    },
    t.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(e, i) {
            var n, s, o = t.ui.ddmanager.droppables[e.options.scope] || [],
            r = i ? i.type: null,
            a = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
            t: for (n = 0; n < o.length; n++) if (! (o[n].options.disabled || e && !o[n].accept.call(o[n].element[0], e.currentItem || e.element))) {
                for (s = 0; s < a.length; s++) if (a[s] === o[n].element[0]) {
                    o[n].proportions().height = 0;
                    continue t
                }
                o[n].visible = "none" !== o[n].element.css("display"),
                o[n].visible && ("mousedown" === r && o[n]._activate.call(o[n], i), o[n].offset = o[n].element.offset(), o[n].proportions({
                    width: o[n].element[0].offsetWidth,
                    height: o[n].element[0].offsetHeight
                }))
            }
        },
        drop: function(e, i) {
            var n = !1;
            return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(),
            function() {
                this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance) && (n = this._drop.call(this, i) || n), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
            }),
            n
        },
        dragStart: function(e, i) {
            e.element.parentsUntil("body").bind("scroll.droppable",
            function() {
                e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            })
        },
        drag: function(e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i),
            t.each(t.ui.ddmanager.droppables[e.options.scope] || [],
            function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var n, s, o, r = t.ui.intersect(e, this, this.options.tolerance),
                    a = !r && this.isover ? "isout": r && !this.isover ? "isover": null;
                    a && (this.options.greedy && (s = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function() {
                        return t.data(this, "ui-droppable").options.scope === s
                    }), o.length && (n = t.data(o[0], "ui-droppable"), n.greedyChild = "isover" === a)), n && "isover" === a && (n.isover = !1, n.isout = !0, n._out.call(n, i)), this[a] = !0, this["isout" === a ? "isover": "isout"] = !1, this["isover" === a ? "_over": "_out"].call(this, i), n && "isout" === a && (n.isout = !1, n.isover = !0, n._over.call(n, i)))
                }
            })
        },
        dragStop: function(e, i) {
            e.element.parentsUntil("body").unbind("scroll.droppable"),
            e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
        }
    }
} (jQuery),
function(t) {
    function e(t) {
        return parseInt(t, 10) || 0
    }
    function i(t) {
        return ! isNaN(parseInt(t, 10))
    }
    t.widget("ui.resizable", t.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _create: function() {
            var e, i, n, s, o, r = this,
            a = this.options;
            if (this.element.addClass("ui-resizable"), t.extend(this, {
                _aspectRatio: !!a.aspectRatio,
                aspectRatio: a.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: a.helper || a.ghost || a.animate ? a.helper || "ui-resizable-helper": null
            }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({
                margin: this.originalElement.css("margin")
            }), this._proportionallyResize()), this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            }: "e,s,se"), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {},
            i = 0; i < e.length; i++) n = t.trim(e[i]),
            o = "ui-resizable-" + n,
            s = t("<div class='ui-resizable-handle " + o + "'></div>"),
            s.css({
                zIndex: a.zIndex
            }),
            "se" === n && s.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),
            this.handles[n] = ".ui-resizable-" + n,
            this.element.append(s);
            this._renderAxis = function(e) {
                var i, n, s, o;
                e = e || this.element;
                for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = t(this.handles[i], this.element).show()),
                this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (n = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(), s = ["padding", /ne|nw|n/.test(i) ? "Top": /se|sw|s/.test(i) ? "Bottom": /^e$/.test(i) ? "Right": "Left"].join(""), e.css(s, o), this._proportionallyResize()),
                t(this.handles[i]).length
            },
            this._renderAxis(this.element),
            this._handles = t(".ui-resizable-handle", this.element).disableSelection(),
            this._handles.mouseover(function() {
                r.resizing || (this.className && (s = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = s && s[1] ? s[1] : "se")
            }),
            a.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                a.disabled || (t(this).removeClass("ui-resizable-autohide"), r._handles.show())
            }).mouseleave(function() {
                a.disabled || r.resizing || (t(this).addClass("ui-resizable-autohide"), r._handles.hide())
            })),
            this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var e, i = function(e) {
                t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left")
            }).insertAfter(e), e.remove()),
            this.originalElement.css("resize", this.originalResizeStyle),
            i(this.originalElement),
            this
        },
        _mouseCapture: function(e) {
            var i, n, s = !1;
            for (i in this.handles) n = t(this.handles[i])[0],
            (n === e.target || t.contains(n, e.target)) && (s = !0);
            return ! this.options.disabled && s
        },
        _mouseStart: function(i) {
            var n, s, o, r = this.options,
            a = this.element.position(),
            l = this.element;
            return this.resizing = !0,
            /absolute/.test(l.css("position")) ? l.css({
                position: "absolute",
                top: l.css("top"),
                left: l.css("left")
            }) : l.is(".ui-draggable") && l.css({
                position: "absolute",
                top: a.top,
                left: a.left
            }),
            this._renderProxy(),
            n = e(this.helper.css("left")),
            s = e(this.helper.css("top")),
            r.containment && (n += t(r.containment).scrollLeft() || 0, s += t(r.containment).scrollTop() || 0),
            this.offset = this.helper.offset(),
            this.position = {
                left: n,
                top: s
            },
            this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            }: {
                width: l.width(),
                height: l.height()
            },
            this.originalSize = this._helper ? {
                width: l.outerWidth(),
                height: l.outerHeight()
            }: {
                width: l.width(),
                height: l.height()
            },
            this.originalPosition = {
                left: n,
                top: s
            },
            this.sizeDiff = {
                width: l.outerWidth() - l.width(),
                height: l.outerHeight() - l.height()
            },
            this.originalMousePosition = {
                left: i.pageX,
                top: i.pageY
            },
            this.aspectRatio = "number" == typeof r.aspectRatio ? r.aspectRatio: this.originalSize.width / this.originalSize.height || 1,
            o = t(".ui-resizable-" + this.axis).css("cursor"),
            t("body").css("cursor", "auto" === o ? this.axis + "-resize": o),
            l.addClass("ui-resizable-resizing"),
            this._propagate("start", i),
            !0
        },
        _mouseDrag: function(e) {
            var i, n = this.helper,
            s = {},
            o = this.originalMousePosition,
            r = this.axis,
            a = this.position.top,
            l = this.position.left,
            h = this.size.width,
            c = this.size.height,
            u = e.pageX - o.left || 0,
            f = e.pageY - o.top || 0,
            d = this._change[r];
            return d ? (i = d.apply(this, [e, u, f]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), this.position.top !== a && (s.top = this.position.top + "px"), this.position.left !== l && (s.left = this.position.left + "px"), this.size.width !== h && (s.width = this.size.width + "px"), this.size.height !== c && (s.height = this.size.height + "px"), n.css(s), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(s) || this._trigger("resize", e, this.ui()), !1) : !1
        },
        _mouseStop: function(e) {
            this.resizing = !1;
            var i, n, s, o, r, a, l, h = this.options,
            c = this;
            return this._helper && (i = this._proportionallyResizeElements, n = i.length && /textarea/i.test(i[0].nodeName), s = n && t.ui.hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, o = n ? 0 : c.sizeDiff.width, r = {
                width: c.helper.width() - o,
                height: c.helper.height() - s
            },
            a = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null, l = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null, h.animate || this.element.css(t.extend(r, {
                top: l,
                left: a
            })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !h.animate && this._proportionallyResize()),
            t("body").css("cursor", "auto"),
            this.element.removeClass("ui-resizable-resizing"),
            this._propagate("stop", e),
            this._helper && this.helper.remove(),
            !1
        },
        _updateVirtualBoundaries: function(t) {
            var e, n, s, o, r, a = this.options;
            r = {
                minWidth: i(a.minWidth) ? a.minWidth: 0,
                maxWidth: i(a.maxWidth) ? a.maxWidth: 1 / 0,
                minHeight: i(a.minHeight) ? a.minHeight: 0,
                maxHeight: i(a.maxHeight) ? a.maxHeight: 1 / 0
            },
            (this._aspectRatio || t) && (e = r.minHeight * this.aspectRatio, s = r.minWidth / this.aspectRatio, n = r.maxHeight * this.aspectRatio, o = r.maxWidth / this.aspectRatio, e > r.minWidth && (r.minWidth = e), s > r.minHeight && (r.minHeight = s), n < r.maxWidth && (r.maxWidth = n), o < r.maxHeight && (r.maxHeight = o)),
            this._vBoundaries = r
        },
        _updateCache: function(t) {
            this.offset = this.helper.offset(),
            i(t.left) && (this.position.left = t.left),
            i(t.top) && (this.position.top = t.top),
            i(t.height) && (this.size.height = t.height),
            i(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function(t) {
            var e = this.position,
            n = this.size,
            s = this.axis;
            return i(t.height) ? t.width = t.height * this.aspectRatio: i(t.width) && (t.height = t.width / this.aspectRatio),
            "sw" === s && (t.left = e.left + (n.width - t.width), t.top = null),
            "nw" === s && (t.top = e.top + (n.height - t.height), t.left = e.left + (n.width - t.width)),
            t
        },
        _respectSize: function(t) {
            var e = this._vBoundaries,
            n = this.axis,
            s = i(t.width) && e.maxWidth && e.maxWidth < t.width,
            o = i(t.height) && e.maxHeight && e.maxHeight < t.height,
            r = i(t.width) && e.minWidth && e.minWidth > t.width,
            a = i(t.height) && e.minHeight && e.minHeight > t.height,
            l = this.originalPosition.left + this.originalSize.width,
            h = this.position.top + this.size.height,
            c = /sw|nw|w/.test(n),
            u = /nw|ne|n/.test(n);
            return r && (t.width = e.minWidth),
            a && (t.height = e.minHeight),
            s && (t.width = e.maxWidth),
            o && (t.height = e.maxHeight),
            r && c && (t.left = l - e.minWidth),
            s && c && (t.left = l - e.maxWidth),
            a && u && (t.top = h - e.minHeight),
            o && u && (t.top = h - e.maxHeight),
            t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null,
            t
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length) {
                var t, e, i, n, s, o = this.helper || this.element;
                for (t = 0; t < this._proportionallyResizeElements.length; t++) {
                    if (s = this._proportionallyResizeElements[t], !this.borderDif) for (this.borderDif = [], i = [s.css("borderTopWidth"), s.css("borderRightWidth"), s.css("borderBottomWidth"), s.css("borderLeftWidth")], n = [s.css("paddingTop"), s.css("paddingRight"), s.css("paddingBottom"), s.css("paddingLeft")], e = 0; e < i.length; e++) this.borderDif[e] = (parseInt(i[e], 10) || 0) + (parseInt(n[e], 10) || 0);
                    s.css({
                        height: o.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: o.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
            }
        },
        _renderProxy: function() {
            var e = this.element,
            i = this.options;
            this.elementOffset = e.offset(),
            this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(t, e) {
                return {
                    width: this.originalSize.width + e
                }
            },
            w: function(t, e) {
                var i = this.originalSize,
                n = this.originalPosition;
                return {
                    left: n.left + e,
                    width: i.width - e
                }
            },
            n: function(t, e, i) {
                var n = this.originalSize,
                s = this.originalPosition;
                return {
                    top: s.top + i,
                    height: n.height - i
                }
            },
            s: function(t, e, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(e, i, n) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
            },
            sw: function(e, i, n) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
            },
            ne: function(e, i, n) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
            },
            nw: function(e, i, n) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
            }
        },
        _propagate: function(e, i) {
            t.ui.plugin.call(this, e, [i, this.ui()]),
            "resize" !== e && this._trigger(e, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }),
    t.ui.plugin.add("resizable", "animate", {
        stop: function(e) {
            var i = t(this).data("ui-resizable"),
            n = i.options,
            s = i._proportionallyResizeElements,
            o = s.length && /textarea/i.test(s[0].nodeName),
            r = o && t.ui.hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
            a = o ? 0 : i.sizeDiff.width,
            l = {
                width: i.size.width - a,
                height: i.size.height - r
            },
            h = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
            c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(l, c && h ? {
                top: c,
                left: h

            }: {}), {
                duration: n.animateDuration,
                easing: n.animateEasing,
                step: function() {
                    var n = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    s && s.length && t(s[0]).css({
                        width: n.width,
                        height: n.height
                    }),
                    i._updateCache(n),
                    i._propagate("resize", e)
                }
            })
        }
    }),
    t.ui.plugin.add("resizable", "containment", {
        start: function() {
            var i, n, s, o, r, a, l, h = t(this).data("ui-resizable"),
            c = h.options,
            u = h.element,
            f = c.containment,
            d = f instanceof t ? f.get(0) : /parent/.test(f) ? u.parent().get(0) : f;
            d && (h.containerElement = t(d), /document/.test(f) || f === document ? (h.containerOffset = {
                left: 0,
                top: 0
            },
            h.containerPosition = {
                left: 0,
                top: 0
            },
            h.parentData = {
                element: t(document),
                left: 0,
                top: 0,
                width: t(document).width(),
                height: t(document).height() || document.body.parentNode.scrollHeight
            }) : (i = t(d), n = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, s) {
                n[t] = e(i.css("padding" + s))
            }), h.containerOffset = i.offset(), h.containerPosition = i.position(), h.containerSize = {
                height: i.innerHeight() - n[3],
                width: i.innerWidth() - n[1]
            },
            s = h.containerOffset, o = h.containerSize.height, r = h.containerSize.width, a = t.ui.hasScroll(d, "left") ? d.scrollWidth: r, l = t.ui.hasScroll(d) ? d.scrollHeight: o, h.parentData = {
                element: d,
                left: s.left,
                top: s.top,
                width: a,
                height: l
            }))
        },
        resize: function(e) {
            var i, n, s, o, r = t(this).data("ui-resizable"),
            a = r.options,
            l = r.containerOffset,
            h = r.position,
            c = r._aspectRatio || e.shiftKey,
            u = {
                top: 0,
                left: 0
            },
            f = r.containerElement;
            f[0] !== document && /static/.test(f.css("position")) && (u = l),
            h.left < (r._helper ? l.left: 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - l.left: r.position.left - u.left), c && (r.size.height = r.size.width / r.aspectRatio), r.position.left = a.helper ? l.left: 0),
            h.top < (r._helper ? l.top: 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - l.top: r.position.top), c && (r.size.width = r.size.height * r.aspectRatio), r.position.top = r._helper ? l.top: 0),
            r.offset.left = r.parentData.left + r.position.left,
            r.offset.top = r.parentData.top + r.position.top,
            i = Math.abs((r._helper ? r.offset.left - u.left: r.offset.left - u.left) + r.sizeDiff.width),
            n = Math.abs((r._helper ? r.offset.top - u.top: r.offset.top - l.top) + r.sizeDiff.height),
            s = r.containerElement.get(0) === r.element.parent().get(0),
            o = /relative|absolute/.test(r.containerElement.css("position")),
            s && o && (i -= Math.abs(r.parentData.left)),
            i + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - i, c && (r.size.height = r.size.width / r.aspectRatio)),
            n + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - n, c && (r.size.width = r.size.height * r.aspectRatio))
        },
        stop: function() {
            var e = t(this).data("ui-resizable"),
            i = e.options,
            n = e.containerOffset,
            s = e.containerPosition,
            o = e.containerElement,
            r = t(e.helper),
            a = r.offset(),
            l = r.outerWidth() - e.sizeDiff.width,
            h = r.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                left: a.left - s.left - n.left,
                width: l,
                height: h
            }),
            e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                left: a.left - s.left - n.left,
                width: l,
                height: h
            })
        }
    }),
    t.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var e = t(this).data("ui-resizable"),
            i = e.options,
            n = function(e) {
                t(e).each(function() {
                    var e = t(this);
                    e.data("ui-resizable-alsoresize", {
                        width: parseInt(e.width(), 10),
                        height: parseInt(e.height(), 10),
                        left: parseInt(e.css("left"), 10),
                        top: parseInt(e.css("top"), 10)
                    })
                })
            };
            "object" != typeof i.alsoResize || i.alsoResize.parentNode ? n(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], n(i.alsoResize)) : t.each(i.alsoResize,
            function(t) {
                n(t)
            })
        },
        resize: function(e, i) {
            var n = t(this).data("ui-resizable"),
            s = n.options,
            o = n.originalSize,
            r = n.originalPosition,
            a = {
                height: n.size.height - o.height || 0,
                width: n.size.width - o.width || 0,
                top: n.position.top - r.top || 0,
                left: n.position.left - r.left || 0
            },
            l = function(e, n) {
                t(e).each(function() {
                    var e = t(this),
                    s = t(this).data("ui-resizable-alsoresize"),
                    o = {},
                    r = n && n.length ? n: e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    t.each(r,
                    function(t, e) {
                        var i = (s[e] || 0) + (a[e] || 0);
                        i && i >= 0 && (o[e] = i || null)
                    }),
                    e.css(o)
                })
            };
            "object" != typeof s.alsoResize || s.alsoResize.nodeType ? l(s.alsoResize) : t.each(s.alsoResize,
            function(t, e) {
                l(t, e)
            })
        },
        stop: function() {
            t(this).removeData("resizable-alsoresize")
        }
    }),
    t.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var e = t(this).data("ui-resizable"),
            i = e.options,
            n = e.size;
            e.ghost = e.originalElement.clone(),
            e.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: n.height,
                width: n.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost: ""),
            e.ghost.appendTo(e.helper)
        },
        resize: function() {
            var e = t(this).data("ui-resizable");
            e.ghost && e.ghost.css({
                position: "relative",
                height: e.size.height,
                width: e.size.width
            })
        },
        stop: function() {
            var e = t(this).data("ui-resizable");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
        }
    }),
    t.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var e = t(this).data("ui-resizable"),
            i = e.options,
            n = e.size,
            s = e.originalSize,
            o = e.originalPosition,
            r = e.axis,
            a = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
            l = a[0] || 1,
            h = a[1] || 1,
            c = Math.round((n.width - s.width) / l) * l,
            u = Math.round((n.height - s.height) / h) * h,
            f = s.width + c,
            d = s.height + u,
            p = i.maxWidth && i.maxWidth < f,
            g = i.maxHeight && i.maxHeight < d,
            m = i.minWidth && i.minWidth > f,
            v = i.minHeight && i.minHeight > d;
            i.grid = a,
            m && (f += l),
            v && (d += h),
            p && (f -= l),
            g && (d -= h),
            /^(se|s|e)$/.test(r) ? (e.size.width = f, e.size.height = d) : /^(ne)$/.test(r) ? (e.size.width = f, e.size.height = d, e.position.top = o.top - u) : /^(sw)$/.test(r) ? (e.size.width = f, e.size.height = d, e.position.left = o.left - c) : (d - h > 0 ? (e.size.height = d, e.position.top = o.top - u) : (e.size.height = h, e.position.top = o.top + s.height - h), f - l > 0 ? (e.size.width = f, e.position.left = o.left - c) : (e.size.width = l, e.position.left = o.left + s.width - l))
        }
    })
} (jQuery),
function(t) {
    t.widget("ui.selectable", t.ui.mouse, {
        version: "1.10.4",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var e, i = this;
            this.element.addClass("ui-selectable"),
            this.dragged = !1,
            this.refresh = function() {
                e = t(i.options.filter, i.element[0]),
                e.addClass("ui-selectee"),
                e.each(function() {
                    var e = t(this),
                    i = e.offset();
                    t.data(this, "selectable-item", {
                        element: this,
                        $element: e,
                        left: i.left,
                        top: i.top,
                        right: i.left + e.outerWidth(),
                        bottom: i.top + e.outerHeight(),
                        startselected: !1,
                        selected: e.hasClass("ui-selected"),
                        selecting: e.hasClass("ui-selecting"),
                        unselecting: e.hasClass("ui-unselecting")
                    })
                })
            },
            this.refresh(),
            this.selectees = e.addClass("ui-selectee"),
            this._mouseInit(),
            this.helper = t("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"),
            this.element.removeClass("ui-selectable ui-selectable-disabled"),
            this._mouseDestroy()
        },
        _mouseStart: function(e) {
            var i = this,
            n = this.options;
            this.opos = [e.pageX, e.pageY],
            this.options.disabled || (this.selectees = t(n.filter, this.element[0]), this._trigger("start", e), t(n.appendTo).append(this.helper), this.helper.css({
                left: e.pageX,
                top: e.pageY,
                width: 0,
                height: 0
            }), n.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var n = t.data(this, "selectable-item");
                n.startselected = !0,
                e.metaKey || e.ctrlKey || (n.$element.removeClass("ui-selected"), n.selected = !1, n.$element.addClass("ui-unselecting"), n.unselecting = !0, i._trigger("unselecting", e, {
                    unselecting: n.element
                }))
            }), t(e.target).parents().addBack().each(function() {
                var n, s = t.data(this, "selectable-item");
                return s ? (n = !e.metaKey && !e.ctrlKey || !s.$element.hasClass("ui-selected"), s.$element.removeClass(n ? "ui-unselecting": "ui-selected").addClass(n ? "ui-selecting": "ui-unselecting"), s.unselecting = !n, s.selecting = n, s.selected = n, n ? i._trigger("selecting", e, {
                    selecting: s.element
                }) : i._trigger("unselecting", e, {
                    unselecting: s.element
                }), !1) : void 0
            }))
        },
        _mouseDrag: function(e) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, n = this,
                s = this.options,
                o = this.opos[0],
                r = this.opos[1],
                a = e.pageX,
                l = e.pageY;
                return o > a && (i = a, a = o, o = i),
                r > l && (i = l, l = r, r = i),
                this.helper.css({
                    left: o,
                    top: r,
                    width: a - o,
                    height: l - r
                }),
                this.selectees.each(function() {
                    var i = t.data(this, "selectable-item"),
                    h = !1;
                    i && i.element !== n.element[0] && ("touch" === s.tolerance ? h = !(i.left > a || i.right < o || i.top > l || i.bottom < r) : "fit" === s.tolerance && (h = i.left > o && i.right < a && i.top > r && i.bottom < l), h ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, n._trigger("selecting", e, {
                        selecting: i.element
                    }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), n._trigger("unselecting", e, {
                        unselecting: i.element
                    }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, n._trigger("unselecting", e, {
                        unselecting: i.element
                    })))))
                }),
                !1
            }
        },
        _mouseStop: function(e) {
            var i = this;
            return this.dragged = !1,
            t(".ui-unselecting", this.element[0]).each(function() {
                var n = t.data(this, "selectable-item");
                n.$element.removeClass("ui-unselecting"),
                n.unselecting = !1,
                n.startselected = !1,
                i._trigger("unselected", e, {
                    unselected: n.element
                })
            }),
            t(".ui-selecting", this.element[0]).each(function() {
                var n = t.data(this, "selectable-item");
                n.$element.removeClass("ui-selecting").addClass("ui-selected"),
                n.selecting = !1,
                n.selected = !0,
                n.startselected = !0,
                i._trigger("selected", e, {
                    selected: n.element
                })
            }),
            this._trigger("stop", e),
            this.helper.remove(),
            !1
        }
    })
} (jQuery),
function(t) {
    function e(t, e, i) {
        return t > e && e + i > t
    }
    function i(t) {
        return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
    }
    t.widget("ui.sortable", t.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function() {
            var t = this.options;
            this.containerCache = {},
            this.element.addClass("ui-sortable"),
            this.refresh(),
            this.floating = this.items.length ? "x" === t.axis || i(this.items[0].item) : !1,
            this.offset = this.element.offset(),
            this._mouseInit(),
            this.ready = !0
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled"),
            this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function(e, i) {
            "disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(e, i) {
            var n = null,
            s = !1,
            o = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function() {
                return t.data(this, o.widgetName + "-item") === o ? (n = t(this), !1) : void 0
            }), t.data(e.target, o.widgetName + "-item") === o && (n = t(e.target)), n && (!this.options.handle || i || (t(this.options.handle, n).find("*").addBack().each(function() {
                this === e.target && (s = !0)
            }), s)) ? (this.currentItem = n, this._removeCurrentsFromItems(), !0) : !1)
        },
        _mouseStart: function(e, i, n) {
            var s, o, r = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            },
            this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), r.containment && this._setContainment(), r.cursor && "auto" !== r.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", r.cursor), this.storedStylesheet = t("<style>*{ cursor: " + r.cursor + " !important; }</style>").appendTo(o)), r.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", r.opacity)), r.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", r.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n) for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this),
            t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e),
            this.dragging = !0,
            this.helper.addClass("ui-sortable-helper"),
            this._mouseDrag(e),
            !0
        },
        _mouseDrag: function(e) {
            var i, n, s, o, r = this.options,
            a = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < r.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + r.scrollSpeed: e.pageY - this.overflowOffset.top < r.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - r.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < r.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + r.scrollSpeed: e.pageX - this.overflowOffset.left < r.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - r.scrollSpeed)) : (e.pageY - t(document).scrollTop() < r.scrollSensitivity ? a = t(document).scrollTop(t(document).scrollTop() - r.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < r.scrollSensitivity && (a = t(document).scrollTop(t(document).scrollTop() + r.scrollSpeed)), e.pageX - t(document).scrollLeft() < r.scrollSensitivity ? a = t(document).scrollLeft(t(document).scrollLeft() - r.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < r.scrollSensitivity && (a = t(document).scrollLeft(t(document).scrollLeft() + r.scrollSpeed))), a !== !1 && t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--) if (n = this.items[i], s = n.item[0], o = this._intersectsWithPointer(n), o && n.instance === this.currentContainer && s !== this.currentItem[0] && this.placeholder[1 === o ? "next": "prev"]()[0] !== s && !t.contains(this.placeholder[0], s) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], s) : !0)) {
                if (this.direction = 1 === o ? "down": "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
                this._rearrange(e, n),
                this._trigger("change", e, this._uiHash());
                break
            }
            return this._contactContainers(e),
            t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
            this._trigger("sort", e, this._uiHash()),
            this.lastPositionAbs = this.positionAbs,
            !1
        },
        _mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var n = this,
                    s = this.placeholder.offset(),
                    o = this.options.axis,
                    r = {};
                    o && "x" !== o || (r.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)),
                    o && "y" !== o || (r.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)),
                    this.reverting = !0,
                    t(this.helper).animate(r, parseInt(this.options.revert, 10) || 500,
                    function() {
                        n._clear(e)
                    })
                } else this._clear(e, i);
                return ! 1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }),
                "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)),
                this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)),
            this
        },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
            n = [];
            return e = e || {},
            t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }),
            !n.length && e.key && n.push(e.key + "="),
            n.join("&")
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
            n = [];
            return e = e || {},
            i.each(function() {
                n.push(t(e.item || this).attr(e.attribute || "id") || "")
            }),
            n
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left,
            i = e + this.helperProportions.width,
            n = this.positionAbs.top,
            s = n + this.helperProportions.height,
            o = t.left,
            r = o + t.width,
            a = t.top,
            l = a + t.height,
            h = this.offset.click.top,
            c = this.offset.click.left,
            u = "x" === this.options.axis || n + h > a && l > n + h,
            f = "y" === this.options.axis || e + c > o && r > e + c,
            d = u && f;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width": "height"] > t[this.floating ? "width": "height"] ? d: o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < r && a < n + this.helperProportions.height / 2 && s - this.helperProportions.height / 2 < l
        },
        _intersectsWithPointer: function(t) {
            var i = "x" === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height),
            n = "y" === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width),
            s = i && n,
            o = this._getDragVerticalDirection(),
            r = this._getDragHorizontalDirection();
            return s ? this.floating ? r && "right" === r || "down" === o ? 2 : 1 : o && ("down" === o ? 2 : 1) : !1
        },
        _intersectsWithSides: function(t) {
            var i = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
            n = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
            s = this._getDragVerticalDirection(),
            o = this._getDragHorizontalDirection();
            return this.floating && o ? "right" === o && n || "left" === o && !n: s && ("down" === s && i || "up" === s && !i)
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down": "up")
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right": "left")
        },
        refresh: function(t) {
            return this._refreshItems(t),
            this.refreshPositions(),
            this
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function(e) {
            function i() {
                a.push(this)
            }
            var n, s, o, r, a = [],
            l = [],
            h = this._connectWith();
            if (h && e) for (n = h.length - 1; n >= 0; n--) for (o = t(h[n]), s = o.length - 1; s >= 0; s--) r = t.data(o[s], this.widgetFullName),
            r && r !== this && !r.options.disabled && l.push([t.isFunction(r.options.items) ? r.options.items.call(r.element) : t(r.options.items, r.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), r]);
            for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), n = l.length - 1; n >= 0; n--) l[n][0].each(i);
            return t(a)
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items,
            function(t) {
                for (var i = 0; i < e.length; i++) if (e[i] === t.item[0]) return ! 1;
                return ! 0
            })
        },
        _refreshItems: function(e) {
            this.items = [],
            this.containers = [this];
            var i, n, s, o, r, a, l, h, c = this.items,
            u = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                item: this.currentItem
            }) : t(this.options.items, this.element), this]],
            f = this._connectWith();
            if (f && this.ready) for (i = f.length - 1; i >= 0; i--) for (s = t(f[i]), n = s.length - 1; n >= 0; n--) o = t.data(s[n], this.widgetFullName),
            o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                item: this.currentItem
            }) : t(o.options.items, o.element), o]), this.containers.push(o));
            for (i = u.length - 1; i >= 0; i--) for (r = u[i][1], a = u[i][0], n = 0, h = a.length; h > n; n++) l = t(a[n]),
            l.data(this.widgetName + "-item", r),
            c.push({
                item: l,
                instance: r,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            })
        },
        refreshPositions: function(e) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, n, s, o;
            for (i = this.items.length - 1; i >= 0; i--) n = this.items[i],
            n.instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item, e || (n.width = s.outerWidth(), n.height = s.outerHeight()), o = s.offset(), n.left = o.left, n.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(),
            this.containers[i].containerCache.left = o.left,
            this.containers[i].containerCache.top = o.top,
            this.containers[i].containerCache.width = this.containers[i].element.outerWidth(),
            this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(e) {
            e = e || this;
            var i, n = e.options;
            n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {
                element: function() {
                    var n = e.currentItem[0].nodeName.toLowerCase(),
                    s = t("<" + n + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tr" === n ? e.currentItem.children().each(function() {
                        t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(s)
                    }) : "img" === n && s.attr("src", e.currentItem.attr("src")),
                    i || s.css("visibility", "hidden"),
                    s
                },
                update: function(t, s) { (!i || n.forcePlaceholderSize) && (s.height() || s.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                }
            }),
            e.placeholder = t(n.placeholder.element.call(e.element, e.currentItem)),
            e.currentItem.after(e.placeholder),
            n.placeholder.update(e, e.placeholder)
        },
        _contactContainers: function(n) {
            var s, o, r, a, l, h, c, u, f, d, p = null,
            g = null;
            for (s = this.containers.length - 1; s >= 0; s--) if (!t.contains(this.currentItem[0], this.containers[s].element[0])) if (this._intersectsWith(this.containers[s].containerCache)) {
                if (p && t.contains(this.containers[s].element[0], p.element[0])) continue;
                p = this.containers[s],
                g = s
            } else this.containers[s].containerCache.over && (this.containers[s]._trigger("out", n, this._uiHash(this)), this.containers[s].containerCache.over = 0);
            if (p) if (1 === this.containers.length) this.containers[g].containerCache.over || (this.containers[g]._trigger("over", n, this._uiHash(this)), this.containers[g].containerCache.over = 1);
            else {
                for (r = 1e4, a = null, d = p.floating || i(this.currentItem), l = d ? "left": "top", h = d ? "width": "height", c = this.positionAbs[l] + this.offset.click[l], o = this.items.length - 1; o >= 0; o--) t.contains(this.containers[g].element[0], this.items[o].item[0]) && this.items[o].item[0] !== this.currentItem[0] && (!d || e(this.positionAbs.top + this.offset.click.top, this.items[o].top, this.items[o].height)) && (u = this.items[o].item.offset()[l], f = !1, Math.abs(u - c) > Math.abs(u + this.items[o][h] - c) && (f = !0, u += this.items[o][h]), Math.abs(u - c) < r && (r = Math.abs(u - c), a = this.items[o], this.direction = f ? "up": "down"));
                if (!a && !this.options.dropOnEmpty) return;
                if (this.currentContainer === this.containers[g]) return;
                a ? this._rearrange(n, a, null, !0) : this._rearrange(n, null, this.containers[g].element, !0),
                this._trigger("change", n, this._uiHash()),
                this.containers[g]._trigger("change", n, this._uiHash(this)),
                this.currentContainer = this.containers[g],
                this.options.placeholder.update(this.currentContainer, this.placeholder),
                this.containers[g]._trigger("over", n, this._uiHash(this)),
                this.containers[g].containerCache.over = 1
            }
        },
        _createHelper: function(e) {
            var i = this.options,
            n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return n.parents("body").length || t("parent" !== i.appendTo ? i.appendTo: this.currentItem[0].parentNode)[0].appendChild(n[0]),
            n[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }),
            (!n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()),
            (!n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()),
            n
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")),
            t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }),
            "left" in e && (this.offset.click.left = e.left + this.margins.left),
            "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
            "top" in e && (this.offset.click.top = e.top + this.margins.top),
            "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }),
            {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, i, n, s = this.options;
            "parent" === s.containment && (s.containment = this.helper[0].parentNode),
            ("document" === s.containment || "window" === s.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === s.containment ? document: window).width() - this.helperProportions.width - this.margins.left, (t("document" === s.containment ? document: window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]),
            /^(document|window|parent)$/.test(s.containment) || (e = t(s.containment)[0], i = t(s.containment).offset(), n = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var n = "absolute" === e ? 1 : -1,
            s = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent,
            o = /(html|body)/i.test(s[0].tagName);
            return {
                top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n,
                left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n
            }
        },
        _generatePosition: function(e) {
            var i, n, s = this.options,
            o = e.pageX,
            r = e.pageY,
            a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent,
            l = /(html|body)/i.test(a[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()),
            this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), s.grid && (i = this.originalPageY + Math.round((r - this.originalPageY) / s.grid[1]) * s.grid[1], r = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i: i - this.offset.click.top >= this.containment[1] ? i - s.grid[1] : i + s.grid[1] : i, n = this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0], o = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n: n - this.offset.click.left >= this.containment[0] ? n - s.grid[0] : n + s.grid[0] : n)),
            {
                top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
            }
        },
        _rearrange: function(t, e, i, n) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling),
            this.counter = this.counter ? ++this.counter: 1;
            var s = this.counter;
            this._delay(function() {
                s === this.counter && this.refreshPositions(!n)
            })
        },
        _clear: function(t, e) {
            function i(t, e, i) {
                return function(n) {
                    i._trigger(t, n, e._uiHash(e))
                }
            }
            this.reverting = !1;
            var n, s = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (n in this._storedCSS)("auto" === this._storedCSS[n] || "static" === this._storedCSS[n]) && (this._storedCSS[n] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !e && s.push(function(t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside))
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function(t) {
                this._trigger("update", t, this._uiHash())
            }), this !== this.currentContainer && (e || (s.push(function(t) {
                this._trigger("remove", t, this._uiHash())
            }), s.push(function(t) {
                return function(e) {
                    t._trigger("receive", e, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), s.push(function(t) {
                return function(e) {
                    t._trigger("update", e, this._uiHash(this))
                }
            }.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) e || s.push(i("deactivate", this, this.containers[n])),
            this.containers[n].containerCache.over && (s.push(i("out", this, this.containers[n])), this.containers[n].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "": this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!e) {
                    for (this._trigger("beforeStop", t, this._uiHash()), n = 0; n < s.length; n++) s[n].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1,
                !1
            }
            if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e) {
                for (n = 0; n < s.length; n++) s[n].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1,
            !0
        },
        _trigger: function() {
            t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element: null
            }
        }
    })
} (jQuery),
function(t) {
    var e = 5;
    t.widget("ui.slider", t.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._keySliding = !1,
            this._mouseSliding = !1,
            this._animateOff = !0,
            this._handleIndex = null,
            this._detectOrientation(),
            this._mouseInit(),
            this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"),
            this._refresh(),
            this._setOption("disabled", this.options.disabled),
            this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(),
            this._createHandles(),
            this._setupEvents(),
            this._refreshValue()
        },
        _createHandles: function() {
            var e, i, n = this.options,
            s = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
            o = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
            r = [];
            for (i = n.values && n.values.length || 1, s.length > i && (s.slice(i).remove(), s = s.slice(0, i)), e = s.length; i > e; e++) r.push(o);
            this.handles = s.add(t(r.join("")).appendTo(this.element)),
            this.handle = this.handles.eq(0),
            this.handles.each(function(e) {
                t(this).data("ui-slider-handle-index", e)
            })
        },
        _createRange: function() {
            var e = this.options,
            i = "";
            e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = t("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range: ""))) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() {
            var t = this.handles.add(this.range).filter("a");
            this._off(t),
            this._on(t, this._handleEvents),
            this._hoverable(t),
            this._focusable(t)
        },
        _destroy: function() {
            this.handles.remove(),
            this.range && this.range.remove(),
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),
            this._mouseDestroy()
        },
        _mouseCapture: function(e) {
            var i, n, s, o, r, a, l, h, c = this,
            u = this.options;
            return u.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            },
            this.elementOffset = this.element.offset(), i = {
                x: e.pageX,
                y: e.pageY
            },
            n = this._normValueFromMouse(i), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                var i = Math.abs(n - c.values(e)); (s > i || s === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (s = i, o = t(this), r = e)
            }), a = this._start(e, r), a === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = r, o.addClass("ui-state-active").focus(), l = o.offset(), h = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h ? {
                left: 0,
                top: 0
            }: {
                left: e.pageX - l.left - o.width() / 2,
                top: e.pageY - l.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
            },
            this.handles.hasClass("ui-state-hover") || this._slide(e, r, n), this._animateOff = !0, !0))
        },
        _mouseStart: function() {
            return ! 0
        },
        _mouseDrag: function(t) {
            var e = {
                x: t.pageX,
                y: t.pageY
            },
            i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i),
            !1
        },
        _mouseStop: function(t) {
            return this.handles.removeClass("ui-state-active"),
            this._mouseSliding = !1,
            this._stop(t, this._handleIndex),
            this._change(t, this._handleIndex),
            this._handleIndex = null,
            this._clickOffset = null,
            this._animateOff = !1,
            !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical": "horizontal"
        },
        _normValueFromMouse: function(t) {
            var e, i, n, s, o;
            return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left: 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top: 0)),
            n = i / e,
            n > 1 && (n = 1),
            0 > n && (n = 0),
            "vertical" === this.orientation && (n = 1 - n),
            s = this._valueMax() - this._valueMin(),
            o = this._valueMin() + n * s,
            this._trimAlignValue(o)
        },
        _start: function(t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()),
            this._trigger("start", t, i)
        },
        _slide: function(t, e, i) {
            var n, s, o;
            this.options.values && this.options.values.length ? (n = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > n || 1 === e && n > i) && (i = n), i !== this.values(e) && (s = this.values(), s[e] = i, o = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i,
                values: s
            }), n = this.values(e ? 0 : 1), o !== !1 && this.values(e, i))) : i !== this.value() && (o = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i
            }), o !== !1 && this.value(i))
        },
        _stop: function(t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()),
            this._trigger("stop", t, i)
        },
        _change: function(t, e) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()),
                this._lastChangedValue = e,
                this._trigger("change", t, i)
            }
        },
        value: function(t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
        },
        values: function(e, i) {
            var n, s, o;
            if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i),
            this._refreshValue(),
            void this._change(null, e);
            if (!arguments.length) return this._values();
            if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
            for (n = this.options.values, s = arguments[0], o = 0; o < n.length; o += 1) n[o] = this._trimAlignValue(s[o]),
            this._change(null, o);
            this._refreshValue()
        },
        _setOption: function(e, i) {
            var n, s = 0;
            switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (s = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), e) {
            case "orientation":
                this._detectOrientation(),
                this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation),
                this._refreshValue();
                break;
            case "value":
                this._animateOff = !0,
                this._refreshValue(),
                this._change(null, 0),
                this._animateOff = !1;
                break;
            case "values":
                for (this._animateOff = !0, this._refreshValue(), n = 0; s > n; n += 1) this._change(null, n);
                this._animateOff = !1;
                break;
            case "min":
            case "max":
                this._animateOff = !0,
                this._refreshValue(),
                this._animateOff = !1;
                break;
            case "range":
                this._animateOff = !0,
                this._refresh(),
                this._animateOff = !1
            }
        },
        _value: function() {
            var t = this.options.value;
            return t = this._trimAlignValue(t)
        },
        _values: function(t) {
            var e, i, n;
            if (arguments.length) return e = this.options.values[t],
            e = this._trimAlignValue(e);
            if (this.options.values && this.options.values.length) {
                for (i = this.options.values.slice(), n = 0; n < i.length; n += 1) i[n] = this._trimAlignValue(i[n]);
                return i
            }
            return []
        },
        _trimAlignValue: function(t) {
            if (t <= this._valueMin()) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step: 1,
            i = (t - this._valueMin()) % e,
            n = t - i;
            return 2 * Math.abs(i) >= e && (n += i > 0 ? e: -e),
            parseFloat(n.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var e, i, n, s, o, r = this.options.range,
            a = this.options,
            l = this,
            h = this._animateOff ? !1 : a.animate,
            c = {};
            this.options.values && this.options.values.length ? this.handles.each(function(n) {
                i = (l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100,
                c["horizontal" === l.orientation ? "left": "bottom"] = i + "%",
                t(this).stop(1, 1)[h ? "animate": "css"](c, a.animate),
                l.options.range === !0 && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[h ? "animate": "css"]({
                    left: i + "%"
                },
                a.animate), 1 === n && l.range[h ? "animate": "css"]({
                    width: i - e + "%"
                },
                {
                    queue: !1,
                    duration: a.animate
                })) : (0 === n && l.range.stop(1, 1)[h ? "animate": "css"]({
                    bottom: i + "%"
                },
                a.animate), 1 === n && l.range[h ? "animate": "css"]({
                    height: i - e + "%"
                },
                {
                    queue: !1,
                    duration: a.animate
                }))),
                e = i
            }) : (n = this.value(), s = this._valueMin(), o = this._valueMax(), i = o !== s ? (n - s) / (o - s) * 100 : 0, c["horizontal" === this.orientation ? "left": "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate": "css"](c, a.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate": "css"]({
                width: i + "%"
            },
            a.animate), "max" === r && "horizontal" === this.orientation && this.range[h ? "animate": "css"]({
                width: 100 - i + "%"
            },
            {
                queue: !1,
                duration: a.animate
            }), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate": "css"]({
                height: i + "%"
            },
            a.animate), "max" === r && "vertical" === this.orientation && this.range[h ? "animate": "css"]({
                height: 100 - i + "%"
            },
            {
                queue: !1,
                duration: a.animate
            }))
        },
        _handleEvents: {
            keydown: function(i) {
                var n, s, o, r, a = t(i.target).data("ui-slider-handle-index");
                switch (i.keyCode) {
                case t.ui.keyCode.HOME:
                case t.ui.keyCode.END:
                case t.ui.keyCode.PAGE_UP:
                case t.ui.keyCode.PAGE_DOWN:
                case t.ui.keyCode.UP:
                case t.ui.keyCode.RIGHT:
                case t.ui.keyCode.DOWN:
                case t.ui.keyCode.LEFT:
                    if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, t(i.target).addClass("ui-state-active"), n = this._start(i, a), n === !1)) return
                }
                switch (r = this.options.step, s = o = this.options.values && this.options.values.length ? this.values(a) : this.value(), i.keyCode) {
                case t.ui.keyCode.HOME:
                    o = this._valueMin();
                    break;
                case t.ui.keyCode.END:
                    o = this._valueMax();
                    break;
                case t.ui.keyCode.PAGE_UP:
                    o = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    o = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / e);
                    break;
                case t.ui.keyCode.UP:
                case t.ui.keyCode.RIGHT:
                    if (s === this._valueMax()) return;
                    o = this._trimAlignValue(s + r);
                    break;
                case t.ui.keyCode.DOWN:
                case t.ui.keyCode.LEFT:
                    if (s === this._valueMin()) return;
                    o = this._trimAlignValue(s - r)
                }
                this._slide(i, a, o)
            },
            click: function(t) {
                t.preventDefault()
            },
            keyup: function(e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
            }
        }
    })
} (jQuery),
function(t, e) {
    var i = "ui-effects-";
    t.effects = {
        effect: {}
    },
    function(t, e) {
        function i(t, e, i) {
            var n = u[e.type] || {};
            return null == t ? i || !e.def ? null: e.def: (t = n.floor ? ~~t: parseFloat(t), isNaN(t) ? e.def: n.mod ? (t + n.mod) % n.mod: 0 > t ? 0 : n.max < t ? n.max: t)
        }
        function n(e) {
            var i = h(),
            n = i._rgba = [];
            return e = e.toLowerCase(),
            p(l,
            function(t, s) {
                var o, r = s.re.exec(e),
                a = r && s.parse(r),
                l = s.space || "rgba";
                return a ? (o = i[l](a), i[c[l].cache] = o[c[l].cache], n = i._rgba = o._rgba, !1) : void 0
            }),
            n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), i) : o[e]
        }
        function s(t, e, i) {
            return i = (i + 1) % 1,
            1 > 6 * i ? t + (e - t) * i * 6 : 1 > 2 * i ? e: 2 > 3 * i ? t + (e - t) * (2 / 3 - i) * 6 : t
        }
        var o, r = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
        a = /^([\-+])=\s*(\d+\.?\d*)/,
        l = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [t[1], t[2], t[3], t[4]]
            }
        },
        {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
            }
        },
        {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(t) {
                return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
            }
        },
        {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(t) {
                return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
            }
        },
        {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(t) {
                return [t[1], t[2] / 100, t[3] / 100, t[4]]
            }
        }],
        h = t.Color = function(e, i, n, s) {
            return new t.Color.fn.parse(e, i, n, s)
        },
        c = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        },
        u = {
            "byte": {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        },
        f = h.support = {},
        d = t("<p>")[0],
        p = t.each;
        d.style.cssText = "background-color:rgba(1,1,1,.5)",
        f.rgba = d.style.backgroundColor.indexOf("rgba") > -1,
        p(c,
        function(t, e) {
            e.cache = "_" + t,
            e.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        }),
        h.fn = t.extend(h.prototype, {
            parse: function(s, r, a, l) {
                if (s === e) return this._rgba = [null, null, null, null],
                this; (s.jquery || s.nodeType) && (s = t(s).css(r), r = e);
                var u = this,
                f = t.type(s),
                d = this._rgba = [];
                return r !== e && (s = [s, r, a, l], f = "array"),
                "string" === f ? this.parse(n(s) || o._default) : "array" === f ? (p(c.rgba.props,
                function(t, e) {
                    d[e.idx] = i(s[e.idx], e)
                }), this) : "object" === f ? (s instanceof h ? p(c,
                function(t, e) {
                    s[e.cache] && (u[e.cache] = s[e.cache].slice())
                }) : p(c,
                function(e, n) {
                    var o = n.cache;
                    p(n.props,
                    function(t, e) {
                        if (!u[o] && n.to) {
                            if ("alpha" === t || null == s[t]) return;
                            u[o] = n.to(u._rgba)
                        }
                        u[o][e.idx] = i(s[t], e, !0)
                    }),
                    u[o] && t.inArray(null, u[o].slice(0, 3)) < 0 && (u[o][3] = 1, n.from && (u._rgba = n.from(u[o])))
                }), this) : void 0
            },
            is: function(t) {
                var e = h(t),
                i = !0,
                n = this;
                return p(c,
                function(t, s) {
                    var o, r = e[s.cache];
                    return r && (o = n[s.cache] || s.to && s.to(n._rgba) || [], p(s.props,
                    function(t, e) {
                        return null != r[e.idx] ? i = r[e.idx] === o[e.idx] : void 0
                    })),
                    i
                }),
                i
            },
            _space: function() {
                var t = [],
                e = this;
                return p(c,
                function(i, n) {
                    e[n.cache] && t.push(i)
                }),
                t.pop()
            },
            transition: function(t, e) {
                var n = h(t),
                s = n._space(),
                o = c[s],
                r = 0 === this.alpha() ? h("transparent") : this,
                a = r[o.cache] || o.to(r._rgba),
                l = a.slice();
                return n = n[o.cache],
                p(o.props,
                function(t, s) {
                    var o = s.idx,
                    r = a[o],
                    h = n[o],
                    c = u[s.type] || {};
                    null !== h && (null === r ? l[o] = h: (c.mod && (h - r > c.mod / 2 ? r += c.mod: r - h > c.mod / 2 && (r -= c.mod)), l[o] = i((h - r) * e + r, s)))
                }),
                this[s](l)
            },
            blend: function(e) {
                if (1 === this._rgba[3]) return this;
                var i = this._rgba.slice(),
                n = i.pop(),
                s = h(e)._rgba;
                return h(t.map(i,
                function(t, e) {
                    return (1 - n) * s[e] + n * t
                }))
            },
            toRgbaString: function() {
                var e = "rgba(",
                i = t.map(this._rgba,
                function(t, e) {
                    return null == t ? e > 2 ? 1 : 0 : t
                });
                return 1 === i[3] && (i.pop(), e = "rgb("),
                e + i.join() + ")"
            },
            toHslaString: function() {
                var e = "hsla(",
                i = t.map(this.hsla(),
                function(t, e) {
                    return null == t && (t = e > 2 ? 1 : 0),
                    e && 3 > e && (t = Math.round(100 * t) + "%"),
                    t
                });
                return 1 === i[3] && (i.pop(), e = "hsl("),
                e + i.join() + ")"
            },
            toHexString: function(e) {
                var i = this._rgba.slice(),
                n = i.pop();
                return e && i.push(~~ (255 * n)),
                "#" + t.map(i,
                function(t) {
                    return t = (t || 0).toString(16),
                    1 === t.length ? "0" + t: t
                }).join("")
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent": this.toRgbaString()
            }
        }),
        h.fn.parse.prototype = h.fn,
        c.hsla.to = function(t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
            var e, i, n = t[0] / 255,
            s = t[1] / 255,
            o = t[2] / 255,
            r = t[3],
            a = Math.max(n, s, o),
            l = Math.min(n, s, o),
            h = a - l,
            c = a + l,
            u = .5 * c;
            return e = l === a ? 0 : n === a ? 60 * (s - o) / h + 360 : s === a ? 60 * (o - n) / h + 120 : 60 * (n - s) / h + 240,
            i = 0 === h ? 0 : .5 >= u ? h / c: h / (2 - c),
            [Math.round(e) % 360, i, u, null == r ? 1 : r]
        },
        c.hsla.from = function(t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
            var e = t[0] / 360,
            i = t[1],
            n = t[2],
            o = t[3],
            r = .5 >= n ? n * (1 + i) : n + i - n * i,
            a = 2 * n - r;
            return [Math.round(255 * s(a, r, e + 1 / 3)), Math.round(255 * s(a, r, e)), Math.round(255 * s(a, r, e - 1 / 3)), o]
        },
        p(c,
        function(n, s) {
            var o = s.props,
            r = s.cache,
            l = s.to,
            c = s.from;
            h.fn[n] = function(n) {
                if (l && !this[r] && (this[r] = l(this._rgba)), n === e) return this[r].slice();
                var s, a = t.type(n),
                u = "array" === a || "object" === a ? n: arguments,
                f = this[r].slice();
                return p(o,
                function(t, e) {
                    var n = u["object" === a ? t: e.idx];
                    null == n && (n = f[e.idx]),
                    f[e.idx] = i(n, e)
                }),
                c ? (s = h(c(f)), s[r] = f, s) : h(f)
            },
            p(o,
            function(e, i) {
                h.fn[e] || (h.fn[e] = function(s) {
                    var o, r = t.type(s),
                    l = "alpha" === e ? this._hsla ? "hsla": "rgba": n,
                    h = this[l](),
                    c = h[i.idx];
                    return "undefined" === r ? c: ("function" === r && (s = s.call(this, c), r = t.type(s)), null == s && i.empty ? this: ("string" === r && (o = a.exec(s), o && (s = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), h[i.idx] = s, this[l](h)))
                })
            })
        }),
        h.hook = function(e) {
            var i = e.split(" ");
            p(i,
            function(e, i) {
                t.cssHooks[i] = {
                    set: function(e, s) {
                        var o, r, a = "";
                        if ("transparent" !== s && ("string" !== t.type(s) || (o = n(s)))) {
                            if (s = h(o || s), !f.rgba && 1 !== s._rgba[3]) {
                                for (r = "backgroundColor" === i ? e.parentNode: e; ("" === a || "transparent" === a) && r && r.style;) try {
                                    a = t.css(r, "backgroundColor"),
                                    r = r.parentNode
                                } catch(l) {}
                                s = s.blend(a && "transparent" !== a ? a: "_default")
                            }
                            s = s.toRgbaString()
                        }
                        try {
                            e.style[i] = s
                        } catch(l) {}
                    }
                },
                t.fx.step[i] = function(e) {
                    e.colorInit || (e.start = h(e.elem, i), e.end = h(e.end), e.colorInit = !0),
                    t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                }
            })
        },
        h.hook(r),
        t.cssHooks.borderColor = {
            expand: function(t) {
                var e = {};
                return p(["Top", "Right", "Bottom", "Left"],
                function(i, n) {
                    e["border" + n + "Color"] = t
                }),
                e
            }
        },
        o = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    } (jQuery),
    function() {
        function i(e) {
            var i, n, s = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
            o = {};
            if (s && s.length && s[0] && s[s[0]]) for (n = s.length; n--;) i = s[n],
            "string" == typeof s[i] && (o[t.camelCase(i)] = s[i]);
            else for (i in s)"string" == typeof s[i] && (o[i] = s[i]);
            return o
        }
        function n(e, i) {
            var n, s, r = {};
            for (n in i) s = i[n],
            e[n] !== s && (o[n] || (t.fx.step[n] || !isNaN(parseFloat(s))) && (r[n] = s));
            return r
        }
        var s = ["add", "remove", "toggle"],
        o = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"],
        function(e, i) {
            t.fx.step[i] = function(t) { ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0)
            }
        }),
        t.fn.addBack || (t.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject: this.prevObject.filter(t))
        }),
        t.effects.animateClass = function(e, o, r, a) {
            var l = t.speed(o, r, a);
            return this.queue(function() {
                var o, r = t(this),
                a = r.attr("class") || "",
                h = l.children ? r.find("*").addBack() : r;
                h = h.map(function() {
                    var e = t(this);
                    return {
                        el: e,
                        start: i(this)
                    }
                }),
                o = function() {
                    t.each(s,
                    function(t, i) {
                        e[i] && r[i + "Class"](e[i])
                    })
                },
                o(),
                h = h.map(function() {
                    return this.end = i(this.el[0]),
                    this.diff = n(this.start, this.end),
                    this
                }),
                r.attr("class", a),
                h = h.map(function() {
                    var e = this,
                    i = t.Deferred(),
                    n = t.extend({},
                    l, {
                        queue: !1,
                        complete: function() {
                            i.resolve(e)
                        }
                    });
                    return this.el.animate(this.diff, n),
                    i.promise()
                }),
                t.when.apply(t, h.get()).done(function() {
                    o(),
                    t.each(arguments,
                    function() {
                        var e = this.el;
                        t.each(this.diff,
                        function(t) {
                            e.css(t, "")
                        })
                    }),
                    l.complete.call(r[0])
                })
            })
        },
        t.fn.extend({
            addClass: function(e) {
                return function(i, n, s, o) {
                    return n ? t.effects.animateClass.call(this, {
                        add: i
                    },
                    n, s, o) : e.apply(this, arguments)
                }
            } (t.fn.addClass),
            removeClass: function(e) {
                return function(i, n, s, o) {
                    return arguments.length > 1 ? t.effects.animateClass.call(this, {
                        remove: i
                    },
                    n, s, o) : e.apply(this, arguments)
                }
            } (t.fn.removeClass),
            toggleClass: function(i) {
                return function(n, s, o, r, a) {
                    return "boolean" == typeof s || s === e ? o ? t.effects.animateClass.call(this, s ? {
                        add: n
                    }: {
                        remove: n
                    },
                    o, r, a) : i.apply(this, arguments) : t.effects.animateClass.call(this, {
                        toggle: n
                    },
                    s, o, r)
                }
            } (t.fn.toggleClass),
            switchClass: function(e, i, n, s, o) {
                return t.effects.animateClass.call(this, {
                    add: i,
                    remove: e
                },
                n, s, o)
            }
        })
    } (),
    function() {
        function n(e, i, n, s) {
            return t.isPlainObject(e) && (i = e, e = e.effect),
            e = {
                effect: e
            },
            null == i && (i = {}),
            t.isFunction(i) && (s = i, n = null, i = {}),
            ("number" == typeof i || t.fx.speeds[i]) && (s = n, n = i, i = {}),
            t.isFunction(n) && (s = n, n = null),
            i && t.extend(e, i),
            n = n || i.duration,
            e.duration = t.fx.off ? 0 : "number" == typeof n ? n: n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default,
            e.complete = s || i.complete,
            e
        }
        function s(e) {
            return ! e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
        }
        t.extend(t.effects, {
            version: "1.10.4",
            save: function(t, e) {
                for (var n = 0; n < e.length; n++) null !== e[n] && t.data(i + e[n], t[0].style[e[n]])
            },
            restore: function(t, n) {
                var s, o;
                for (o = 0; o < n.length; o++) null !== n[o] && (s = t.data(i + n[o]), s === e && (s = ""), t.css(n[o], s))
            },
            setMode: function(t, e) {
                return "toggle" === e && (e = t.is(":hidden") ? "show": "hide"),
                e
            },
            getBaseline: function(t, e) {
                var i, n;
                switch (t[0]) {
                case "top":
                    i = 0;
                    break;
                case "middle":
                    i = .5;
                    break;
                case "bottom":
                    i = 1;
                    break;
                default:
                    i = t[0] / e.height
                }
                switch (t[1]) {
                case "left":
                    n = 0;
                    break;
                case "center":
                    n = .5;
                    break;
                case "right":
                    n = 1;
                    break;
                default:
                    n = t[1] / e.width
                }
                return {
                    x: n,
                    y: i
                }
            },
            createWrapper: function(e) {
                if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                var i = {
                    width: e.outerWidth(!0),
                    height: e.outerHeight(!0),
                    "float": e.css("float")
                },
                n = t("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }),
                s = {
                    width: e.width(),
                    height: e.height()
                },
                o = document.activeElement;
                try {
                    o.id
                } catch(r) {
                    o = document.body
                }
                return e.wrap(n),
                (e[0] === o || t.contains(e[0], o)) && t(o).focus(),
                n = e.parent(),
                "static" === e.css("position") ? (n.css({
                    position: "relative"
                }), e.css({
                    position: "relative"
                })) : (t.extend(i, {
                    position: e.css("position"),
                    zIndex: e.css("z-index")
                }), t.each(["top", "left", "bottom", "right"],
                function(t, n) {
                    i[n] = e.css(n),
                    isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
                }), e.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })),
                e.css(s),
                n.css(i).show()
            },
            removeWrapper: function(e) {
                var i = document.activeElement;
                return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()),
                e
            },
            setTransition: function(e, i, n, s) {
                return s = s || {},
                t.each(i,
                function(t, i) {
                    var o = e.cssUnit(i);
                    o[0] > 0 && (s[i] = o[0] * n + o[1])
                }),
                s
            }
        }),
        t.fn.extend({
            effect: function() {
                function e(e) {
                    function n() {
                        t.isFunction(o) && o.call(s[0]),
                        t.isFunction(e) && e()
                    }
                    var s = t(this),
                    o = i.complete,
                    a = i.mode; (s.is(":hidden") ? "hide" === a: "show" === a) ? (s[a](), n()) : r.call(s[0], i, n)
                }
                var i = n.apply(this, arguments),
                s = i.mode,
                o = i.queue,
                r = t.effects.effect[i.effect];
                return t.fx.off || !r ? s ? this[s](i.duration, i.complete) : this.each(function() {
                    i.complete && i.complete.call(this)
                }) : o === !1 ? this.each(e) : this.queue(o || "fx", e)
            },
            show: function(t) {
                return function(e) {
                    if (s(e)) return t.apply(this, arguments);
                    var i = n.apply(this, arguments);
                    return i.mode = "show",
                    this.effect.call(this, i)
                }
            } (t.fn.show),
            hide: function(t) {
                return function(e) {
                    if (s(e)) return t.apply(this, arguments);
                    var i = n.apply(this, arguments);
                    return i.mode = "hide",
                    this.effect.call(this, i)
                }
            } (t.fn.hide),
            toggle: function(t) {
                return function(e) {
                    if (s(e) || "boolean" == typeof e) return t.apply(this, arguments);
                    var i = n.apply(this, arguments);
                    return i.mode = "toggle",
                    this.effect.call(this, i)
                }
            } (t.fn.toggle),
            cssUnit: function(e) {
                var i = this.css(e),
                n = [];
                return t.each(["em", "px", "%", "pt"],
                function(t, e) {
                    i.indexOf(e) > 0 && (n = [parseFloat(i), e])
                }),
                n
            }
        })
    } (),
    function() {
        var e = {};
        t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"],
        function(t, i) {
            e[i] = function(e) {
                return Math.pow(e, t + 2)
            }
        }),
        t.extend(e, {
            Sine: function(t) {
                return 1 - Math.cos(t * Math.PI / 2)
            },
            Circ: function(t) {
                return 1 - Math.sqrt(1 - t * t)
            },
            Elastic: function(t) {
                return 0 === t || 1 === t ? t: -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
            },
            Back: function(t) {
                return t * t * (3 * t - 2)
            },
            Bounce: function(t) {
                for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;);
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
            }
        }),
        t.each(e,
        function(e, i) {
            t.easing["easeIn" + e] = i,
            t.easing["easeOut" + e] = function(t) {
                return 1 - i(1 - t)
            },
            t.easing["easeInOut" + e] = function(t) {
                return.5 > t ? i(2 * t) / 2 : 1 - i( - 2 * t + 2) / 2
            }
        })
    } ()
} (jQuery),
function(t) {
    var e = /up|down|vertical/,
    i = /up|left|vertical|horizontal/;
    t.effects.effect.blind = function(n, s) {
        var o, r, a, l = t(this),
        h = ["position", "top", "bottom", "left", "right", "height", "width"],
        c = t.effects.setMode(l, n.mode || "hide"),
        u = n.direction || "up",
        f = e.test(u),
        d = f ? "height": "width",
        p = f ? "top": "left",
        g = i.test(u),
        m = {},
        v = "show" === c;
        l.parent().is(".ui-effects-wrapper") ? t.effects.save(l.parent(), h) : t.effects.save(l, h),
        l.show(),
        o = t.effects.createWrapper(l).css({
            overflow: "hidden"
        }),
        r = o[d](),
        a = parseFloat(o.css(p)) || 0,
        m[d] = v ? r: 0,
        g || (l.css(f ? "bottom": "right", 0).css(f ? "top": "left", "auto").css({
            position: "absolute"
        }), m[p] = v ? a: r + a),
        v && (o.css(d, 0), g || o.css(p, a + r)),
        o.animate(m, {
            duration: n.duration,
            easing: n.easing,
            queue: !1,
            complete: function() {
                "hide" === c && l.hide(),
                t.effects.restore(l, h),
                t.effects.removeWrapper(l),
                s()
            }
        })
    }
} (jQuery),
function(t) {
    t.effects.effect.bounce = function(e, i) {
        var n, s, o, r = t(this),
        a = ["position", "top", "bottom", "left", "right", "height", "width"],
        l = t.effects.setMode(r, e.mode || "effect"),
        h = "hide" === l,
        c = "show" === l,
        u = e.direction || "up",
        f = e.distance,
        d = e.times || 5,
        p = 2 * d + (c || h ? 1 : 0),
        g = e.duration / p,
        m = e.easing,
        v = "up" === u || "down" === u ? "top": "left",
        y = "up" === u || "left" === u,
        b = r.queue(),
        w = b.length;
        for ((c || h) && a.push("opacity"), t.effects.save(r, a), r.show(), t.effects.createWrapper(r), f || (f = r["top" === v ? "outerHeight": "outerWidth"]() / 3), c && (o = {
            opacity: 1
        },
        o[v] = 0, r.css("opacity", 0).css(v, y ? 2 * -f: 2 * f).animate(o, g, m)), h && (f /= Math.pow(2, d - 1)), o = {},
        o[v] = 0, n = 0; d > n; n++) s = {},
        s[v] = (y ? "-=": "+=") + f,
        r.animate(s, g, m).animate(o, g, m),
        f = h ? 2 * f: f / 2;
        h && (s = {
            opacity: 0
        },
        s[v] = (y ? "-=": "+=") + f, r.animate(s, g, m)),
        r.queue(function() {
            h && r.hide(),
            t.effects.restore(r, a),
            t.effects.removeWrapper(r),
            i()
        }),
        w > 1 && b.splice.apply(b, [1, 0].concat(b.splice(w, p + 1))),
        r.dequeue()
    }
} (jQuery),
function(t) {
    t.effects.effect.clip = function(e, i) {
        var n, s, o, r = t(this),
        a = ["position", "top", "bottom", "left", "right", "height", "width"],
        l = t.effects.setMode(r, e.mode || "hide"),
        h = "show" === l,
        c = e.direction || "vertical",
        u = "vertical" === c,
        f = u ? "height": "width",
        d = u ? "top": "left",
        p = {};
        t.effects.save(r, a),
        r.show(),
        n = t.effects.createWrapper(r).css({
            overflow: "hidden"
        }),
        s = "IMG" === r[0].tagName ? n: r,
        o = s[f](),
        h && (s.css(f, 0), s.css(d, o / 2)),
        p[f] = h ? o: 0,
        p[d] = h ? 0 : o / 2,
        s.animate(p, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                h || r.hide(),
                t.effects.restore(r, a),
                t.effects.removeWrapper(r),
                i()
            }
        })
    }
} (jQuery),
function(t) {
    t.effects.effect.drop = function(e, i) {
        var n, s = t(this),
        o = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
        r = t.effects.setMode(s, e.mode || "hide"),
        a = "show" === r,
        l = e.direction || "left",
        h = "up" === l || "down" === l ? "top": "left",
        c = "up" === l || "left" === l ? "pos": "neg",
        u = {
            opacity: a ? 1 : 0
        };
        t.effects.save(s, o),
        s.show(),
        t.effects.createWrapper(s),
        n = e.distance || s["top" === h ? "outerHeight": "outerWidth"](!0) / 2,
        a && s.css("opacity", 0).css(h, "pos" === c ? -n: n),
        u[h] = (a ? "pos" === c ? "+=": "-=": "pos" === c ? "-=": "+=") + n,
        s.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === r && s.hide(),
                t.effects.restore(s, o),
                t.effects.removeWrapper(s),
                i()
            }
        })
    }
} (jQuery),
function(t) {
    t.effects.effect.explode = function(e, i) {
        function n() {
            b.push(this),
            b.length === u * f && s()
        }
        function s() {
            d.css({
                visibility: "visible"
            }),
            t(b).remove(),
            g || d.hide(),
            i()
        }
        var o, r, a, l, h, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
        f = u,
        d = t(this),
        p = t.effects.setMode(d, e.mode || "hide"),
        g = "show" === p,
        m = d.show().css("visibility", "hidden").offset(),
        v = Math.ceil(d.outerWidth() / f),
        y = Math.ceil(d.outerHeight() / u),
        b = [];
        for (o = 0; u > o; o++) for (l = m.top + o * y, c = o - (u - 1) / 2, r = 0; f > r; r++) a = m.left + r * v,
        h = r - (f - 1) / 2,
        d.clone().appendTo("body").wrap("<div></div>").css({
            position: "absolute",
            visibility: "visible",
            left: -r * v,
            top: -o * y
        }).parent().addClass("ui-effects-explode").css({
            position: "absolute",
            overflow: "hidden",
            width: v,
            height: y,
            left: a + (g ? h * v: 0),
            top: l + (g ? c * y: 0),
            opacity: g ? 0 : 1
        }).animate({
            left: a + (g ? 0 : h * v),
            top: l + (g ? 0 : c * y),
            opacity: g ? 1 : 0
        },
        e.duration || 500, e.easing, n)
    }
} (jQuery),
function(t) {
    t.effects.effect.fade = function(e, i) {
        var n = t(this),
        s = t.effects.setMode(n, e.mode || "toggle");
        n.animate({
            opacity: s
        },
        {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }
} (jQuery),
function(t) {
    t.effects.effect.fold = function(e, i) {
        var n, s, o = t(this),
        r = ["position", "top", "bottom", "left", "right", "height", "width"],
        a = t.effects.setMode(o, e.mode || "hide"),
        l = "show" === a,
        h = "hide" === a,
        c = e.size || 15,
        u = /([0-9]+)%/.exec(c),
        f = !!e.horizFirst,
        d = l !== f,
        p = d ? ["width", "height"] : ["height", "width"],
        g = e.duration / 2,
        m = {},
        v = {};
        t.effects.save(o, r),
        o.show(),
        n = t.effects.createWrapper(o).css({
            overflow: "hidden"
        }),
        s = d ? [n.width(), n.height()] : [n.height(), n.width()],
        u && (c = parseInt(u[1], 10) / 100 * s[h ? 0 : 1]),
        l && n.css(f ? {
            height: 0,
            width: c
        }: {
            height: c,
            width: 0
        }),
        m[p[0]] = l ? s[0] : c,
        v[p[1]] = l ? s[1] : 0,
        n.animate(m, g, e.easing).animate(v, g, e.easing,
        function() {
            h && o.hide(),
            t.effects.restore(o, r),
            t.effects.removeWrapper(o),
            i()
        })
    }
} (jQuery),
function(t) {
    t.effects.effect.highlight = function(e, i) {
        var n = t(this),
        s = ["backgroundImage", "backgroundColor", "opacity"],
        o = t.effects.setMode(n, e.mode || "show"),
        r = {
            backgroundColor: n.css("backgroundColor")
        };
        "hide" === o && (r.opacity = 0),
        t.effects.save(n, s),
        n.show().css({
            backgroundImage: "none",
            backgroundColor: e.color || "#ffff99"
        }).animate(r, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === o && n.hide(),
                t.effects.restore(n, s),
                i()
            }
        })
    }
} (jQuery),
function(t) {
    t.effects.effect.pulsate = function(e, i) {
        var n, s = t(this),
        o = t.effects.setMode(s, e.mode || "show"),
        r = "show" === o,
        a = "hide" === o,
        l = r || "hide" === o,
        h = 2 * (e.times || 5) + (l ? 1 : 0),
        c = e.duration / h,
        u = 0,
        f = s.queue(),
        d = f.length;
        for ((r || !s.is(":visible")) && (s.css("opacity", 0).show(), u = 1), n = 1; h > n; n++) s.animate({
            opacity: u
        },
        c, e.easing),
        u = 1 - u;
        s.animate({
            opacity: u
        },
        c, e.easing),
        s.queue(function() {
            a && s.hide(),
            i()
        }),
        d > 1 && f.splice.apply(f, [1, 0].concat(f.splice(d, h + 1))),
        s.dequeue()
    }
} (jQuery),
function(t) {
    t.effects.effect.puff = function(e, i) {
        var n = t(this),
        s = t.effects.setMode(n, e.mode || "hide"),
        o = "hide" === s,
        r = parseInt(e.percent, 10) || 150,
        a = r / 100,
        l = {
            height: n.height(),
            width: n.width(),
            outerHeight: n.outerHeight(),
            outerWidth: n.outerWidth()
        };
        t.extend(e, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: s,
            complete: i,
            percent: o ? r: 100,
            from: o ? l: {
                height: l.height * a,
                width: l.width * a,
                outerHeight: l.outerHeight * a,
                outerWidth: l.outerWidth * a
            }
        }),
        n.effect(e)
    },
    t.effects.effect.scale = function(e, i) {
        var n = t(this),
        s = t.extend(!0, {},
        e),
        o = t.effects.setMode(n, e.mode || "effect"),
        r = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === o ? 0 : 100),
        a = e.direction || "both",
        l = e.origin,
        h = {
            height: n.height(),
            width: n.width(),
            outerHeight: n.outerHeight(),
            outerWidth: n.outerWidth()
        },
        c = {
            y: "horizontal" !== a ? r / 100 : 1,
            x: "vertical" !== a ? r / 100 : 1
        };
        s.effect = "size",
        s.queue = !1,
        s.complete = i,
        "effect" !== o && (s.origin = l || ["middle", "center"], s.restore = !0),
        s.from = e.from || ("show" === o ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        }: h),
        s.to = {
            height: h.height * c.y,
            width: h.width * c.x,
            outerHeight: h.outerHeight * c.y,
            outerWidth: h.outerWidth * c.x
        },
        s.fade && ("show" === o && (s.from.opacity = 0, s.to.opacity = 1), "hide" === o && (s.from.opacity = 1, s.to.opacity = 0)),
        n.effect(s)
    },
    t.effects.effect.size = function(e, i) {
        var n, s, o, r = t(this),
        a = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
        l = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
        h = ["width", "height", "overflow"],
        c = ["fontSize"],
        u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
        f = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
        d = t.effects.setMode(r, e.mode || "effect"),
        p = e.restore || "effect" !== d,
        g = e.scale || "both",
        m = e.origin || ["middle", "center"],
        v = r.css("position"),
        y = p ? a: l,
        b = {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        };
        "show" === d && r.show(),
        n = {
            height: r.height(),
            width: r.width(),
            outerHeight: r.outerHeight(),
            outerWidth: r.outerWidth()
        },
        "toggle" === e.mode && "show" === d ? (r.from = e.to || b, r.to = e.from || n) : (r.from = e.from || ("show" === d ? b: n), r.to = e.to || ("hide" === d ? b: n)),
        o = {
            from: {
                y: r.from.height / n.height,
                x: r.from.width / n.width
            },
            to: {
                y: r.to.height / n.height,
                x: r.to.width / n.width
            }
        },
        ("box" === g || "both" === g) && (o.from.y !== o.to.y && (y = y.concat(u), r.from = t.effects.setTransition(r, u, o.from.y, r.from), r.to = t.effects.setTransition(r, u, o.to.y, r.to)), o.from.x !== o.to.x && (y = y.concat(f), r.from = t.effects.setTransition(r, f, o.from.x, r.from), r.to = t.effects.setTransition(r, f, o.to.x, r.to))),
        ("content" === g || "both" === g) && o.from.y !== o.to.y && (y = y.concat(c).concat(h), r.from = t.effects.setTransition(r, c, o.from.y, r.from), r.to = t.effects.setTransition(r, c, o.to.y, r.to)),
        t.effects.save(r, y),
        r.show(),
        t.effects.createWrapper(r),
        r.css("overflow", "hidden").css(r.from),
        m && (s = t.effects.getBaseline(m, n), r.from.top = (n.outerHeight - r.outerHeight()) * s.y, r.from.left = (n.outerWidth - r.outerWidth()) * s.x, r.to.top = (n.outerHeight - r.to.outerHeight) * s.y, r.to.left = (n.outerWidth - r.to.outerWidth) * s.x),
        r.css(r.from),
        ("content" === g || "both" === g) && (u = u.concat(["marginTop", "marginBottom"]).concat(c), f = f.concat(["marginLeft", "marginRight"]), h = a.concat(u).concat(f), r.find("*[width]").each(function() {
            var i = t(this),
            n = {
                height: i.height(),
                width: i.width(),
                outerHeight: i.outerHeight(),
                outerWidth: i.outerWidth()
            };
            p && t.effects.save(i, h),
            i.from = {
                height: n.height * o.from.y,
                width: n.width * o.from.x,
                outerHeight: n.outerHeight * o.from.y,
                outerWidth: n.outerWidth * o.from.x
            },
            i.to = {
                height: n.height * o.to.y,
                width: n.width * o.to.x,
                outerHeight: n.height * o.to.y,
                outerWidth: n.width * o.to.x
            },
            o.from.y !== o.to.y && (i.from = t.effects.setTransition(i, u, o.from.y, i.from), i.to = t.effects.setTransition(i, u, o.to.y, i.to)),
            o.from.x !== o.to.x && (i.from = t.effects.setTransition(i, f, o.from.x, i.from), i.to = t.effects.setTransition(i, f, o.to.x, i.to)),
            i.css(i.from),
            i.animate(i.to, e.duration, e.easing,
            function() {
                p && t.effects.restore(i, h)
            })
        })),
        r.animate(r.to, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                0 === r.to.opacity && r.css("opacity", r.from.opacity),
                "hide" === d && r.hide(),
                t.effects.restore(r, y),
                p || ("static" === v ? r.css({
                    position: "relative",
                    top: r.to.top,
                    left: r.to.left
                }) : t.each(["top", "left"],
                function(t, e) {
                    r.css(e,
                    function(e, i) {
                        var n = parseInt(i, 10),
                        s = t ? r.to.left: r.to.top;
                        return "auto" === i ? s + "px": n + s + "px"
                    })
                })),
                t.effects.removeWrapper(r),
                i()
            }
        })
    }
} (jQuery),
function(t) {
    t.effects.effect.shake = function(e, i) {
        var n, s = t(this),
        o = ["position", "top", "bottom", "left", "right", "height", "width"],
        r = t.effects.setMode(s, e.mode || "effect"),
        a = e.direction || "left",
        l = e.distance || 20,
        h = e.times || 3,
        c = 2 * h + 1,
        u = Math.round(e.duration / c),
        f = "up" === a || "down" === a ? "top": "left",
        d = "up" === a || "left" === a,
        p = {},
        g = {},
        m = {},
        v = s.queue(),
        y = v.length;
        for (t.effects.save(s, o), s.show(), t.effects.createWrapper(s), p[f] = (d ? "-=": "+=") + l, g[f] = (d ? "+=": "-=") + 2 * l, m[f] = (d ? "-=": "+=") + 2 * l, s.animate(p, u, e.easing), n = 1; h > n; n++) s.animate(g, u, e.easing).animate(m, u, e.easing);
        s.animate(g, u, e.easing).animate(p, u / 2, e.easing).queue(function() {
            "hide" === r && s.hide(),
            t.effects.restore(s, o),
            t.effects.removeWrapper(s),
            i()
        }),
        y > 1 && v.splice.apply(v, [1, 0].concat(v.splice(y, c + 1))),
        s.dequeue()
    }
} (jQuery),
function(t) {
    t.effects.effect.slide = function(e, i) {
        var n, s = t(this),
        o = ["position", "top", "bottom", "left", "right", "width", "height"],
        r = t.effects.setMode(s, e.mode || "show"),
        a = "show" === r,
        l = e.direction || "left",
        h = "up" === l || "down" === l ? "top": "left",
        c = "up" === l || "left" === l,
        u = {};
        t.effects.save(s, o),
        s.show(),
        n = e.distance || s["top" === h ? "outerHeight": "outerWidth"](!0),
        t.effects.createWrapper(s).css({
            overflow: "hidden"
        }),
        a && s.css(h, c ? isNaN(n) ? "-" + n: -n: n),
        u[h] = (a ? c ? "+=": "-=": c ? "-=": "+=") + n,
        s.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === r && s.hide(),
                t.effects.restore(s, o),
                t.effects.removeWrapper(s),
                i()
            }
        })
    }
} (jQuery),
function(t) {
    t.effects.effect.transfer = function(e, i) {
        var n = t(this),
        s = t(e.to),
        o = "fixed" === s.css("position"),
        r = t("body"),
        a = o ? r.scrollTop() : 0,
        l = o ? r.scrollLeft() : 0,
        h = s.offset(),
        c = {
            top: h.top - a,
            left: h.left - l,
            height: s.innerHeight(),
            width: s.innerWidth()
        },
        u = n.offset(),
        f = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
            top: u.top - a,
            left: u.left - l,
            height: n.innerHeight(),
            width: n.innerWidth(),
            position: o ? "fixed": "absolute"
        }).animate(c, e.duration, e.easing,
        function() {
            f.remove(),
            i()
        })
    }
} (jQuery),
function(t, e, i) {
    function n(t) {
        var e = {},
        n = /^jQuery\d+$/;
        return i.each(t.attributes,
        function(t, i) {
            i.specified && !n.test(i.name) && (e[i.name] = i.value)
        }),
        e
    }
    function s(t, n) {
        var s = this,
        o = i(s);
        if (s.value == o.attr("placeholder") && o.hasClass("placeholder")) if (o.data("placeholder-password")) {
            if (o = o.hide().next().show().attr("id", o.removeAttr("id").data("placeholder-id")), t === !0) return o[0].value = n;
            o.focus()
        } else s.value = "",
        o.removeClass("placeholder"),
        s == e.activeElement && s.select()
    }
    function o() {
        var t, e = this,
        o = i(e),
        r = this.id;
        if ("" == e.value) {
            if ("password" == e.type) {
                if (!o.data("placeholder-textinput")) {
                    try {
                        t = o.clone().attr({
                            type: "text"
                        })
                    } catch(a) {
                        t = i("<input>").attr(i.extend(n(this), {
                            type: "text"
                        }))
                    }
                    t.removeAttr("name").data({
                        "placeholder-password": !0,
                        "placeholder-id": r
                    }).bind("focus.placeholder", s),
                    o.data({
                        "placeholder-textinput": t,
                        "placeholder-id": r
                    }).before(t)
                }
                o = o.removeAttr("id").hide().prev().attr("id", r).show()
            }
            o.addClass("placeholder"),
            o[0].value = o.attr("placeholder")
        } else o.removeClass("placeholder")
    }
    var r, a, l = "placeholder" in e.createElement("input"),
    h = "placeholder" in e.createElement("textarea"),
    c = i.fn,
    u = i.valHooks;
    l && h ? (a = c.placeholder = function() {
        return this
    },
    a.input = a.textarea = !0) : (a = c.placeholder = function() {
        var t = this;
        return t.filter((l ? "textarea": ":input") + "[placeholder]").not(".placeholder").bind({
            "focus.placeholder": s,
            "blur.placeholder": o
        }).data("placeholder-enabled", !0).trigger("blur.placeholder"),
        t
    },
    a.input = l, a.textarea = h, r = {
        get: function(t) {
            var e = i(t);
            return e.data("placeholder-enabled") && e.hasClass("placeholder") ? "": t.value
        },
        set: function(t, n) {
            var r = i(t);
            return r.data("placeholder-enabled") ? ("" == n ? (t.value = n, t != e.activeElement && o.call(t)) : r.hasClass("placeholder") ? s.call(t, !0, n) || (t.value = n) : t.value = n, r) : t.value = n
        }
    },
    l || (u.input = r), h || (u.textarea = r), i(function() {
        i(e).delegate("form", "submit.placeholder",
        function() {
            var t = i(".placeholder", this).each(s);
            setTimeout(function() {
                t.each(o)
            },
            10)
        })
    }), i(t).bind("beforeunload.placeholder",
    function() {
        i(".placeholder").each(function() {
            this.value = ""
        })
    }))
} (this, document, jQuery),
function($) {
    $.extend($.fn, {
        isempty: function(t) {
            0 == this.children().length && this.html($('<div class="empty">' + t + "</div>"))
        }
    }),
    $.ui_core = function() {},
    $.extend($.ui_core, {
        ready: function(params) {
            $("body").on("click", ".action-toggle",
            function(t) {
                $.each($(this).attr("data-action-target").split(" "),
                function(t, e) {
                    $("#" + e).toggle()
                }),
                t.preventDefault()
            }),
            $("body").on("click", ".action-switch-toggle",
            function(t) {
                $.each($(this).attr("data-action-target").split(" "),
                function(t, e) {
                    0 == t ? $("#" + e).toggle() : $("#" + e).hide()
                }),
                t.preventDefault()
            }),
            $("body").on("click", ".action-next",
            function() {
                $(this).after($('<input type="hidden" name="next" value="next">'))
            }),
            $("body").on("click", ".action-prev",
            function() {
                $(this).after($('<input type="hidden" name="prev" value="prev">'))
            }),
            $("body").on("click", ".action-submit",
            function() {
                $(this).addClass("button-disable"),
                0 == $(this).find(".load").length && $(this).append('<div class="load"></div>')
            }),
            $("body").on("click", ".action-clean",
            function(t) {
                $("#" + $(this).attr("data-action-target")).val(""),
                $("." + $(this).attr("data-action-target")).val(""),
                t.preventDefault()
            }),
            $("body").on("click", ".action-scroll",
            function(t) {
                $("html,body").animate({
                    scrollTop: $("#" + $(this).attr("data-action-target")).offset().top
                },
                500),
                t.preventDefault()
            }),
            $.each($.makeArray(arguments),
            function(i, n) {
                eval("$.ui_" + n + ".ready()")
            })
        },
        alert: function(t) {
            t && "" != t && ($("#popup_alert_message").html(t), $("#popup_alert").show())
        },
        setting: function(t) {
            0 == $("#setting").find("ul").length && $("#setting").append('<ul class="c6"></ul>'),
            $("#setting").find("ul").append("<li>" + t + "</li>")
        },
        scroll: function() {
            $(window).scroll(function() {
                $(window).scrollTop() >= 200 ? $("#scroll").fadeIn(500) : $("#scroll").fadeOut(500)
            }),
            $("body").on("click", "#scroll",
            function() {
                return $("html, body").animate({
                    scrollTop: 0
                },
                500),
                !1
            })
        },
        select: function(t, e, i) {
            i = i || {},
            $(t + " option").each(function() {
                this.selected = this.value == e
            })
        },
        allow: function(t, e) {
            1 == e ? $("." + t).show() : $("." + t + "-by-" + e).show()
        },
        format: function(t, e) {
            return 1 == arguments.length ?
            function() {
                var e = $.makeArray(arguments);
                return e.unshift(t),
                $.ui_core.format.apply(this, e)
            }: (arguments.length > 2 && e.constructor != Array && (e = $.makeArray(arguments).slice(1)), e.constructor != Array && (e = [e]), $.each(e,
            function(e, i) {
                t = t.replace(new RegExp("\\{" + e + "\\}", "g"), i)
            }), t)
        },
        distance: function(t) {
            var e = t && t.now ? Date.parse(t.now.replace(/\-/g, "/")) : (new Date).getTime();
            $("span[data-timestamp],div[data-timestamp],td[data-timestamp],a[data-timestamp],i[data-timestamp],dd[data-timestamp]").each(function() {
                var t, i, n, s, o, r, a = Date.parse($(this).attr("data-timestamp").replace(/\-/g, "/")),
                l = parseInt((e > a ? e - a: a - e) / 1e3);
                if ($(this).attr("data-timestamp-until") && l > parseInt($(this).attr("data-timestamp-until"))) a = new Date(a),
                $(this).html("long" == $(this).attr("data-timestamp-format") ? a.getFullYear() + "\u5e74" + (a.getMonth() + 1) + "\u6708" + a.getDate() + "\u65e5" + a.getHours() + "\u70b9" + (a.getMinutes() > 0 ? a.getMinutes() + "\u5206": "") : a.getMonth() + 1 + "\u6708" + a.getDate() + "\u65e5" + a.getHours() + "\u70b9" + (a.getMinutes() > 0 ? a.getMinutes() + "\u5206": ""));
                else {
                    var h = [];
                    t = l > 31536e3 ? parseInt(l / 31536e3) : 0,
                    i = l - 31536e3 * t > 2592e3 ? parseInt((l - 31536e3 * t) / 2592e3) : 0,
                    n = parseInt((l - 31536e3 * t - 2592e3 * i) / 86400),
                    s = parseInt((l - 31536e3 * t - 2592e3 * i - 86400 * n) / 3600),
                    o = parseInt((l - 31536e3 * t - 2592e3 * i - 86400 * n - 3600 * s) / 60),
                    r = parseInt(l - 31536e3 * t - 2592e3 * i - 86400 * n - 3600 * s - 60 * o),
                    t > 0 && h.push(t + "\u5e74"),
                    i > 0 && h.push(i + "\u4e2a\u6708"),
                    n > 0 && h.push(n + "\u5929"),
                    s > 0 && h.push(s + "\u5c0f\u65f6"),
                    o > 0 && h.push(o + "\u5206"),
                    r > 0 && h.push(r + "\u79d2"),
                    $(this).html(0 == l ? "1\u79d2\u524d": "long" == $(this).attr("data-timestamp-format") ? h.slice(0, 3).join("") + (e > a ? "\u524d": "\u540e") : "medium" == $(this).attr("data-timestamp-format") ? h.slice(0, 2).join("") + (e > a ? "\u524d": "\u540e") : h.slice(0, 1).join("") + (e > a ? "\u524d": "\u540e"))
                }
            })
        },
        countdown: function() {
            var t, e, i, n = {};
            $("div[data-countdown]").each(function() {
                n["#" + $(this).attr("id")] = parseInt($(this).attr("data-countdown"))
            }),
            $.isEmptyObject(n) || setInterval(function() {
                $.each(n,
                function(s, o) {
                    o >= 0 && (t = parseInt(o / 3600), e = parseInt((o - 3600 * t) / 60), i = parseInt(o - 3600 * t - 60 * e), $(s).find(".hour").html(10 > t ? "0" + t: t), $(s).find(".minute").html(10 > e ? "0" + e: e), $(s).find(".second").html(10 > i ? "0" + i: i), n[s]--)
                })
            },
            1e3)
        },
        paginate: function(t, e) {
            e = e || {},
            e.pages = e.pages || 2,
            $(window).scroll(function() {
                $(t).length > 0 && $(t).position().top - $(window).scrollTop() - $(window).height() < 50 && $(t).find("a").attr("href") != e.url && e.pages-->0 && (e.url = $(t).find("a").attr("href"), $(t).find("a").trigger("click"))
            })
        },
        notice: function(t, e, i) {
            i = i || {},
            $.each(e,
            function(e, n) {
                e.constructor == String ? n.constructor == Array && (n = n[0]) : (e = n[0], n = n[1]),
                n && ($(t + "_" + e + "_error").length > 0 ? $(t + "_" + e + "_error").html($('<strong class="notice-' + (i.style || "failure") + '">' + n + "</strong>")) : ($(t + "_" + e).parent().find("strong").remove(), $(t + "_" + e).parent().append($('<strong class="notice-' + (i.style || "failure") + '">' + n + "</strong>"))))
            }),
            $("select").change(function() {
                $(this).parents("li").find(".notice-failure").remove()
            }),
            $("input, textarea").click(function() {
                $(this).parents("li").find(".notice-failure").remove()
            })
        },
        flash: function(t, e, i) {
            i = i || {},
            $.each(e,
            function(e, n) {
                n.constructor == Array && (e = n[0], n = n[1]),
                $(t).find("div.flash").remove(),
                $.globalEval("$('" + t + "')." + (i.position || "prepend") + "($('<div class=\"flash flash-" + (i.style || e) + '">' + n + '<a href="#close" title="\u5173\u95ed" class="flash-close">\u5173\u95ed</a></div>\'))')
            }),
            $("body").on("click", "a.flash-close",
            function(t) {
                $(t.target).parent("div").remove()
            })
        },
        tag: function(t, e) {
            e = e || {},
            $(t).before($('<input id="' + t.replace("#", "input_") + '" type="text" />')),
            $.each($(t).val().split(" "),
            function(e, i) {
                "" != i && $(t.replace("#", "#input_")).before($("<span>" + i + '<a href="#remove" class="action-tag-remove">' + i + "</a></span>"))
            }),
            $("body").on("keypress", t.replace("#", "#input_"),
            function(t) { (13 == t.which || 32 == t.which || 44 == t.which || 59 == t.which) && ($(this).blur(), t.preventDefault())
            }),
            $("body").on("blur", t.replace("#", "#input_"),
            function() {
                var e = $(t.replace("#", "#input_")).val().replace(/(\s*)/g, "");
                "" != e && $.inArray(e, $(t).val().split(" ")) < 0 && ($(t).val($(t).val() + " " + e), $(t.replace("#", "#input_")).before($("<span>" + e + '<a href="#remove" class="action-tag-remove">' + e + "</a></span>"))),
                $(t.replace("#", "#input_")).val("")
            }),
            $("body").on("click", ".action-tag-remove",
            function() {
                var e = $(t).val().split(" ");
                e.splice($.inArray($(this).html(), e), 1),
                $(t).val(e.join(" ")),
                $(this).parent().remove()
            })
        },
        banner: function(t, e, i) {
            i = i || {},
            e.length > 1 ? ($(t).css("background-image", "url(" + e[0][0] + ")"), $(t).html('<div class="c1"><a href="' + e[0][1] + '"></a></div><a href="#left" class="action-slide c21"></a><a href="#right" class="action-slide c22"></a>')) : e.length > 0 ? ($(t).css("background-image", "url(" + e[0][0] + ")"), $(t).html('<div class="c1"><a href="' + e[0][1] + '"></a></div>')) : $(t).hide();
            var n = 0;
            $(t).find(".action-slide").click(function() {
                $(this).attr("href").indexOf("right") >= 0 ? e.length > n + 1 ? n++:n = 0 : 0 > n - 1 ? n = e.length - 1 : n--,
                $(t).css("background-image", "url(" + e[n][0] + ")"),
                $(t).find("div.c1").find("a").attr("href", e[n][1])
            })
        }
    }),
    $.ui_checkbox = function() {},
    $.extend($.ui_checkbox, {
        ready: function() {
            $("body").on("click", "input[type=checkbox]",
            function() {
                $.ui_checkbox.check()
            }),
            $.ui_checkbox.check()
        },
        check: function() {
            $("input[type=checkbox]").each(function() {
                $(this).is(":checked") ? $(this).parent("label").addClass("checkbox-checked") : $(this).parent("label").removeClass("checkbox-checked")
            })
        }
    }),
    $.ui_radio = function() {},
    $.extend($.ui_radio, {
        options: {},
        ready: function() {
            $("body").on("click", "input[type=radio]",
            function() {
                $.ui_radio.check()
            }),
            $.ui_radio.check()
        },
        check: function() {
            $("input[type=radio]").each(function() {
                $(this).is(":checked") ? $(this).parent("label").addClass("radio-checked") : $(this).parent("label").removeClass("radio-checked")
            })
        }
    }),
    $.ui_button = function() {},
    $.extend($.ui_button, {
        ready: function() {
            $("body").on("ajax:beforeSend", "a[data-remote]",
            function() {
                var t = $(this).parent(".button-ajax");
                t.length > 0 ? (t.addClass("button-disable"), 0 == $(this).next(".load").length && $(this).after('<div class="load"></div>')) : (t = $(this).parents(".button-ajax"), t.length > 0 && (t.find(".load").show(), t.find(".buttons").hide()))
            }),
            $("body").on("ajax:complete", "a[data-remote]",
            function() {
                var t = $(this).parent(".button-ajax");
                t.length > 0 ? ($(this).next(".load").remove(), t.removeClass("button-disable")) : (t = $(this).parents(".button-ajax"), t.length > 0 && (t.find(".load").hide(), t.find(".buttons").show()))
            }),
            $("body").on("ajax:beforeSend", "form[data-remote]",
            function() {
                var t = $(this).find(".button-ajax");
                t.length > 0 && (t.addClass("button-disable"), 0 == t.find(".load").length && t.append('<div class="load"></div>'))
            }),
            $("body").on("ajax:complete", "form[data-remote]",
            function() {
                var t = $(this).find(".button-ajax");
                t.length > 0 && (t.removeClass("button-disable"), t.find(".load").remove())
            })
        }
    }),
    $.ui_notify = function() {},
    $.extend($.ui_notify, {
        ready: function(t) {
            this.options = t,
            $.ui_notify.update(t.data),
            window.isActive = !0,
            $(window).hover(function(t) {
                window.isActive = t.toElement ? !0 : !1
            }),
            setInterval(function() {
                window.isActive && $.getJSON($.ui_notify.options.url + "?callback=?",
                function(t) {
                    $.ui_notify.update(t)
                })
            },
            3e4)
        },
        update: function(t) {
            var e = "";
            t.new_notifications_count > 0 && (e += "<li>" + (t.new_notifications_count > 10 ? "N": t.new_notifications_count) + '\u6761\u65b0\u901a\u77e5\uff0c<a href="/notify?type=notifications">\u67e5\u770b\u8be6\u60c5</a></li>'),
            t.new_messages_count > 0 && (e += "<li>" + (t.new_messages_count > 10 ? "N": t.new_messages_count) + '\u6761\u65b0\u79c1\u4fe1\uff0c<a href="/notify?type=messages">\u67e5\u770b\u8be6\u60c5</a></li>'),
            t.new_comments_count > 0 && (e += "<li>" + (t.new_comments_count > 10 ? "N": t.new_comments_count) + '\u6761\u65b0\u8bc4\u8bba\uff0c<a href="/notify?type=comments">\u67e5\u770b\u8be6\u60c5</a></li>'),
            t.new_tickets_count > 0 && (e += "<li>" + (t.new_tickets_count > 10 ? "N": t.new_tickets_count) + '\u6761\u65b0\u56de\u5e94\uff0c<a href="/notify?type=tickets">\u67e5\u770b\u8be6\u60c5</a></li>'),
            t.new_supports_count > 0 && (e += "<li>" + (t.new_supports_count > 10 ? "N": t.new_supports_count) + '\u6761\u65b0\u63d0\u95ee\uff0c<a href="/notify?type=supports">\u67e5\u770b\u8be6\u60c5</a></li>'),
            "" != e && ($("#popup_notify").find("ul").html(e), $("#popup_notify").show())
        }
    }),
    $.ui_preview = function() {},
    $.extend($.ui_preview, {
        current: 0,
        images: [],
        ready: function() {
            $("body").on("click", ".action-popup-preview",
            function(t) {
                $.ui_preview.current = $.ui_preview.images.indexOf($(this).attr("data-action-target")),
                $.ui_preview.current < 0 && ($.ui_preview.images.push($(this).attr("data-action-target")), $.ui_preview.current = 0),
                $("#popup_preview").toggle(),
                $("#popup_preview_image").attr("src", $(this).attr("data-action-target")),
                t.preventDefault()
            }),
            $("body").on("click", "#popup_preview_prev",
            function(t) {--$.ui_preview.current < 0 && ($.ui_preview.current = $.ui_preview.images.length - 1),
                $("#popup_preview_image").attr("src", $.ui_preview.images[$.ui_preview.current]),
                t.preventDefault()
            }),
            $("body").on("click", "#popup_preview_next",
            function(t) {++$.ui_preview.current > $.ui_preview.images.length - 1 && ($.ui_preview.current = 0),
                $("#popup_preview_image").attr("src", $.ui_preview.images[$.ui_preview.current]),
                t.preventDefault()
            }),
            $("#popup_preview_open").click(function(t) {
                window.open("/attachments?url=" + $.ui_preview.images[$.ui_preview.current]),
                t.preventDefault()
            })
        },
        load: function() {
            $.ui_preview.current = 0,
            $(".action-popup-preview").each(function() {
                $.ui_preview.images.indexOf($(this).attr("data-action-target")) < 0 && $.ui_preview.images.push($(this).attr("data-action-target"))
            }),
            $.ui_preview.images.length > 1 && ($("#popup_preview_next").addClass("c135"), $("#popup_preview_prev").removeClass("c134"))
        }
    })
} (jQuery);