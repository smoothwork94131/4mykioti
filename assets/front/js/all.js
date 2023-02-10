function detect_old_ie() { if (!/MSIE (\d+\.\d+);/.test(navigator.userAgent)) return !1; var t = new Number(RegExp.$1); return !(t >= 9) && (t >= 8 || (t >= 7 || (t >= 6 || (t >= 5 || void 0)))) }! function(t, e) { "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) { if (!t.document) throw new Error("jQuery requires a window with a document"); return e(t) } : e(t) }("undefined" != typeof window ? window : this, function(t, e) {
    function i(t) {
        var e = t.length,
            i = Z.type(t);
        return "function" !== i && !Z.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
    }

    function n(t, e, i) {
        if (Z.isFunction(e)) return Z.grep(t, function(t, n) { return !!e.call(t, n, t) !== i });
        if (e.nodeType) return Z.grep(t, function(t) { return t === e !== i });
        if ("string" == typeof e) {
            if (at.test(e)) return Z.filter(e, t, i);
            e = Z.filter(e, t)
        }
        return Z.grep(t, function(t) { return Y.call(e, t) >= 0 !== i })
    }

    function s(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function o(t) { var e = pt[t] = {}; return Z.each(t.match(dt) || [], function(t, i) { e[i] = !0 }), e }

    function r() { G.removeEventListener("DOMContentLoaded", r, !1), t.removeEventListener("load", r, !1), Z.ready() }

    function a() { Object.defineProperty(this.cache = {}, 0, { get: function() { return {} } }), this.expando = Z.expando + Math.random() }

    function l(t, e, i) {
        var n;
        if (void 0 === i && 1 === t.nodeType)
            if (n = "data-" + e.replace(yt, "-$1").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) {
                try { i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : _t.test(i) ? Z.parseJSON(i) : i) } catch (t) {}
                vt.set(t, e, i)
            } else i = void 0;
        return i
    }

    function c() { return !0 }

    function u() { return !1 }

    function h() { try { return G.activeElement } catch (t) {} }

    function d(t, e) { return Z.nodeName(t, "table") && Z.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t }

    function p(t) { return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t }

    function f(t) { var e = Ht.exec(t.type); return e ? t.type = e[1] : t.removeAttribute("type"), t }

    function m(t, e) { for (var i = 0, n = t.length; n > i; i++) gt.set(t[i], "globalEval", !e || gt.get(e[i], "globalEval")) }

    function g(t, e) {
        var i, n, s, o, r, a, l, c;
        if (1 === e.nodeType) {
            if (gt.hasData(t) && (o = gt.access(t), r = gt.set(e, o), c = o.events)) {
                delete r.handle, r.events = {};
                for (s in c)
                    for (i = 0, n = c[s].length; n > i; i++) Z.event.add(e, s, c[s][i])
            }
            vt.hasData(t) && (a = vt.access(t), l = Z.extend({}, a), vt.set(e, l))
        }
    }

    function v(t, e) { var i = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : []; return void 0 === e || e && Z.nodeName(t, e) ? Z.merge([t], i) : i }

    function _(t, e) { var i = e.nodeName.toLowerCase(); "input" === i && xt.test(t.type) ? e.checked = t.checked : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue) }

    function y(e, i) {
        var n, s = Z(i.createElement(e)).appendTo(i.body),
            o = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(s[0])) ? n.display : Z.css(s[0], "display");
        return s.detach(), o
    }

    function b(t) {
        var e = G,
            i = jt[t];
        return i || (i = y(t, e), "none" !== i && i || (zt = (zt || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = zt[0].contentDocument, e.write(), e.close(), i = y(t, e), zt.detach()), jt[t] = i), i
    }

    function w(t, e, i) { var n, s, o, r, a = t.style; return i = i || Wt(t), i && (r = i.getPropertyValue(e) || i[e]), i && ("" !== r || Z.contains(t.ownerDocument, t) || (r = Z.style(t, e)), Rt.test(r) && Ft.test(e) && (n = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = s, a.maxWidth = o)), void 0 !== r ? r + "" : r }

    function C(t, e) { return { get: function() { return t() ? void delete this.get : (this.get = e).apply(this, arguments) } } }

    function x(t, e) {
        if (e in t) return e;
        for (var i = e[0].toUpperCase() + e.slice(1), n = e, s = Xt.length; s--;)
            if ((e = Xt[s] + i) in t) return e;
        return n
    }

    function T(t, e, i) { var n = Bt.exec(e); return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e }

    function S(t, e, i, n, s) { for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > o; o += 2) "margin" === i && (r += Z.css(t, i + wt[o], !0, s)), n ? ("content" === i && (r -= Z.css(t, "padding" + wt[o], !0, s)), "margin" !== i && (r -= Z.css(t, "border" + wt[o] + "Width", !0, s))) : (r += Z.css(t, "padding" + wt[o], !0, s), "padding" !== i && (r += Z.css(t, "border" + wt[o] + "Width", !0, s))); return r }

    function k(t, e, i) {
        var n = !0,
            s = "width" === e ? t.offsetWidth : t.offsetHeight,
            o = Wt(t),
            r = "border-box" === Z.css(t, "boxSizing", !1, o);
        if (0 >= s || null == s) {
            if (s = w(t, e, o), (0 > s || null == s) && (s = t.style[e]), Rt.test(s)) return s;
            n = r && (Q.boxSizingReliable() || s === t.style[e]), s = parseFloat(s) || 0
        }
        return s + S(t, e, i || (r ? "border" : "content"), n, o) + "px"
    }

    function D(t, e) { for (var i, n, s, o = [], r = 0, a = t.length; a > r; r++) n = t[r], n.style && (o[r] = gt.get(n, "olddisplay"), i = n.style.display, e ? (o[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && Ct(n) && (o[r] = gt.access(n, "olddisplay", b(n.nodeName)))) : (s = Ct(n), "none" === i && s || gt.set(n, "olddisplay", s ? i : Z.css(n, "display")))); for (r = 0; a > r; r++) n = t[r], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[r] || "" : "none")); return t }

    function E(t, e, i, n, s) { return new E.prototype.init(t, e, i, n, s) }

    function I() { return setTimeout(function() { Kt = void 0 }), Kt = Z.now() }

    function P(t, e) {
        var i, n = 0,
            s = { height: t };
        for (e = e ? 1 : 0; 4 > n; n += 2 - e) i = wt[n], s["margin" + i] = s["padding" + i] = t;
        return e && (s.opacity = s.width = t), s
    }

    function A(t, e, i) {
        for (var n, s = (ee[e] || []).concat(ee["*"]), o = 0, r = s.length; r > o; o++)
            if (n = s[o].call(i, e, t)) return n
    }

    function O(t, e, i) {
        var n, s, o, r, a, l, c, u = this,
            h = {},
            d = t.style,
            p = t.nodeType && Ct(t),
            f = gt.get(t, "fxshow");
        i.queue || (a = Z._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() { a.unqueued || l() }), a.unqueued++, u.always(function() { u.always(function() { a.unqueued--, Z.queue(t, "fx").length || a.empty.fire() }) })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [d.overflow, d.overflowX, d.overflowY], c = Z.css(t, "display"), "inline" === ("none" === c ? gt.get(t, "olddisplay") || b(t.nodeName) : c) && "none" === Z.css(t, "float") && (d.display = "inline-block")), i.overflow && (d.overflow = "hidden", u.always(function() { d.overflow = i.overflow[0], d.overflowX = i.overflow[1], d.overflowY = i.overflow[2] }));
        for (n in e)
            if (s = e[n], Gt.exec(s)) {
                if (delete e[n], o = o || "toggle" === s, s === (p ? "hide" : "show")) {
                    if ("show" !== s || !f || void 0 === f[n]) continue;
                    p = !0
                }
                h[n] = f && f[n] || Z.style(t, n)
            } else c = void 0;
        if (Z.isEmptyObject(h)) "inline" === ("none" === c ? b(t.nodeName) : c) && (d.display = c);
        else {
            f ? "hidden" in f && (p = f.hidden) : f = gt.access(t, "fxshow", {}), o && (f.hidden = !p), p ? Z(t).show() : u.done(function() { Z(t).hide() }), u.done(function() {
                var e;
                gt.remove(t, "fxshow");
                for (e in h) Z.style(t, e, h[e])
            });
            for (n in h) r = A(p ? f[n] : 0, n, u), n in f || (f[n] = r.start, p && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function N(t, e) {
        var i, n, s, o, r;
        for (i in t)
            if (n = Z.camelCase(i), s = e[n], o = t[i], Z.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), (r = Z.cssHooks[n]) && "expand" in r) { o = r.expand(o), delete t[n]; for (i in o) i in t || (t[i] = o[i], e[i] = s) } else e[n] = s
    }

    function M(t, e, i) {
        var n, s, o = 0,
            r = te.length,
            a = Z.Deferred().always(function() { delete l.elem }),
            l = function() { if (s) return !1; for (var e = Kt || I(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, o = 1 - n, r = 0, l = c.tweens.length; l > r; r++) c.tweens[r].run(o); return a.notifyWith(t, [c, o, i]), 1 > o && l ? i : (a.resolveWith(t, [c]), !1) },
            c = a.promise({
                elem: t,
                props: Z.extend({}, e),
                opts: Z.extend(!0, { specialEasing: {} }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: Kt || I(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) { var n = Z.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing); return c.tweens.push(n), n },
                stop: function(e) {
                    var i = 0,
                        n = e ? c.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; n > i; i++) c.tweens[i].run(1);
                    return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
                }
            }),
            u = c.props;
        for (N(u, c.opts.specialEasing); r > o; o++)
            if (n = te[o].call(c, t, u, c.opts)) return n;
        return Z.map(u, A, c), Z.isFunction(c.opts.start) && c.opts.start.call(t, c), Z.fx.timer(Z.extend(l, { elem: t, anim: c, queue: c.opts.queue })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function H(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, s = 0,
                o = e.toLowerCase().match(dt) || [];
            if (Z.isFunction(i))
                for (; n = o[s++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function $(t, e, i, n) {
        function s(a) { var l; return o[a] = !0, Z.each(t[a] || [], function(t, a) { var c = a(e, i, n); return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1) }), l }
        var o = {},
            r = t === ye;
        return s(e.dataTypes[0]) || !o["*"] && s("*")
    }

    function L(t, e) { var i, n, s = Z.ajaxSettings.flatOptions || {}; for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]); return n && Z.extend(!0, t, n), t }

    function z(t, e, i) {
        for (var n, s, o, r, a = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
        if (n)
            for (s in a)
                if (a[s] && a[s].test(n)) { l.unshift(s); break }
        if (l[0] in i) o = l[0];
        else {
            for (s in i) {
                if (!l[0] || t.converters[s + " " + l[0]]) { o = s; break }
                r || (r = s)
            }
            o = o || r
        }
        return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
    }

    function j(t, e, i, n) {
        var s, o, r, a, l, c = {},
            u = t.dataTypes.slice();
        if (u[1])
            for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
        for (o = u.shift(); o;)
            if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (!(r = c[l + " " + o] || c["* " + o]))
                for (s in c)
                    if (a = s.split(" "), a[1] === o && (r = c[l + " " + a[0]] || c["* " + a[0]])) {!0 === r ? r = c[s] : !0 !== c[s] && (o = a[0], u.unshift(a[1])); break }
            if (!0 !== r)
                if (r && t.throws) e = r(e);
                else try { e = r(e) } catch (t) { return { state: "parsererror", error: r ? t : "No conversion from " + l + " to " + o } }
        }
        return { state: "success", data: e }
    }

    function F(t, e, i, n) {
        var s;
        if (Z.isArray(e)) Z.each(e, function(e, s) { i || Ce.test(t) ? n(t, s) : F(t + "[" + ("object" == typeof s ? e : "") + "]", s, i, n) });
        else if (i || "object" !== Z.type(e)) n(t, e);
        else
            for (s in e) F(t + "[" + s + "]", e[s], i, n)
    }

    function R(t) { return Z.isWindow(t) ? t : 9 === t.nodeType && t.defaultView }
    var W = [],
        q = W.slice,
        B = W.concat,
        U = W.push,
        Y = W.indexOf,
        V = {},
        X = V.toString,
        K = V.hasOwnProperty,
        Q = {},
        G = t.document,
        J = "2.1.1",
        Z = function(t, e) { return new Z.fn.init(t, e) },
        tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        et = /^-ms-/,
        it = /-([\da-z])/gi,
        nt = function(t, e) { return e.toUpperCase() };
    Z.fn = Z.prototype = {
        jquery: J,
        constructor: Z,
        selector: "",
        length: 0,
        toArray: function() { return q.call(this) },
        get: function(t) { return null != t ? 0 > t ? this[t + this.length] : this[t] : q.call(this) },
        pushStack: function(t) { var e = Z.merge(this.constructor(), t); return e.prevObject = this, e.context = this.context, e },
        each: function(t, e) { return Z.each(this, t, e) },
        map: function(t) { return this.pushStack(Z.map(this, function(e, i) { return t.call(e, i, e) })) },
        slice: function() { return this.pushStack(q.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(t) {
            var e = this.length,
                i = +t + (0 > t ? e : 0);
            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
        },
        end: function() { return this.prevObject || this.constructor(null) },
        push: U,
        sort: W.sort,
        splice: W.splice
    }, Z.extend = Z.fn.extend = function() {
        var t, e, i, n, s, o, r = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || Z.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++)
            if (null != (t = arguments[a]))
                for (e in t) i = r[e], n = t[e], r !== n && (c && n && (Z.isPlainObject(n) || (s = Z.isArray(n))) ? (s ? (s = !1, o = i && Z.isArray(i) ? i : []) : o = i && Z.isPlainObject(i) ? i : {}, r[e] = Z.extend(c, o, n)) : void 0 !== n && (r[e] = n));
        return r
    }, Z.extend({
        expando: "jQuery" + (J + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) { throw new Error(t) },
        noop: function() {},
        isFunction: function(t) { return "function" === Z.type(t) },
        isArray: Array.isArray,
        isWindow: function(t) { return null != t && t === t.window },
        isNumeric: function(t) { return !Z.isArray(t) && t - parseFloat(t) >= 0 },
        isPlainObject: function(t) { return "object" === Z.type(t) && !t.nodeType && !Z.isWindow(t) && !(t.constructor && !K.call(t.constructor.prototype, "isPrototypeOf")) },
        isEmptyObject: function(t) { var e; for (e in t) return !1; return !0 },
        type: function(t) { return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? V[X.call(t)] || "object" : typeof t },
        globalEval: function(t) {
            var e, i = eval;
            (t = Z.trim(t)) && (1 === t.indexOf("use strict") ? (e = G.createElement("script"), e.text = t, G.head.appendChild(e).parentNode.removeChild(e)) : i(t))
        },
        camelCase: function(t) { return t.replace(et, "ms-").replace(it, nt) },
        nodeName: function(t, e) { return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase() },
        each: function(t, e, n) {
            var s = 0,
                o = t.length,
                r = i(t);
            if (n) {
                if (r)
                    for (; o > s && !1 !== e.apply(t[s], n); s++);
                else
                    for (s in t)
                        if (!1 === e.apply(t[s], n)) break
            } else if (r)
                for (; o > s && !1 !== e.call(t[s], s, t[s]); s++);
            else
                for (s in t)
                    if (!1 === e.call(t[s], s, t[s])) break; return t
        },
        trim: function(t) { return null == t ? "" : (t + "").replace(tt, "") },
        makeArray: function(t, e) { var n = e || []; return null != t && (i(Object(t)) ? Z.merge(n, "string" == typeof t ? [t] : t) : U.call(n, t)), n },
        inArray: function(t, e, i) { return null == e ? -1 : Y.call(e, t, i) },
        merge: function(t, e) { for (var i = +e.length, n = 0, s = t.length; i > n; n++) t[s++] = e[n]; return t.length = s, t },
        grep: function(t, e, i) { for (var n = [], s = 0, o = t.length, r = !i; o > s; s++) !e(t[s], s) !== r && n.push(t[s]); return n },
        map: function(t, e, n) {
            var s, o = 0,
                r = t.length,
                a = i(t),
                l = [];
            if (a)
                for (; r > o; o++) null != (s = e(t[o], o, n)) && l.push(s);
            else
                for (o in t) null != (s = e(t[o], o, n)) && l.push(s);
            return B.apply([], l)
        },
        guid: 1,
        proxy: function(t, e) { var i, n, s; return "string" == typeof e && (i = t[e], e = t, t = i), Z.isFunction(t) ? (n = q.call(arguments, 2), s = function() { return t.apply(e || this, n.concat(q.call(arguments))) }, s.guid = t.guid = t.guid || Z.guid++, s) : void 0 },
        now: Date.now,
        support: Q
    }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) { V["[object " + e + "]"] = e.toLowerCase() });
    var st = function(t) {
        function e(t, e, i, n) {
            var s, o, r, a, c, h, d, p, f, m;
            if ((e ? e.ownerDocument || e : z) !== P && I(e), e = e || P, i = i || [], !t || "string" != typeof t) return i;
            if (1 !== (a = e.nodeType) && 9 !== a) return [];
            if (O && !n) {
                if (s = gt.exec(t))
                    if (r = s[1]) { if (9 === a) { if (!(o = e.getElementById(r)) || !o.parentNode) return i; if (o.id === r) return i.push(o), i } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(r)) && $(e, o) && o.id === r) return i.push(o), i } else { if (s[2]) return G.apply(i, e.getElementsByTagName(t)), i; if ((r = s[3]) && y.getElementsByClassName && e.getElementsByClassName) return G.apply(i, e.getElementsByClassName(r)), i }
                if (y.qsa && (!N || !N.test(t))) {
                    if (p = d = L, f = e, m = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (h = x(t), (d = e.getAttribute("id")) ? p = d.replace(_t, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", c = h.length; c--;) h[c] = p + u(h[c]);
                        f = vt.test(t) && l(e.parentNode) || e, m = h.join(",")
                    }
                    if (m) try { return G.apply(i, f.querySelectorAll(m)), i } catch (t) {} finally { d || e.removeAttribute("id") }
                }
            }
            return S(t.replace(rt, "$1"), e, i, n)
        }

        function i() {
            function t(i, n) { return e.push(i + " ") > b.cacheLength && delete t[e.shift()], t[i + " "] = n }
            var e = [];
            return t
        }

        function n(t) { return t[L] = !0, t }

        function s(t) { var e = P.createElement("div"); try { return !!t(e) } catch (t) { return !1 } finally { e.parentNode && e.parentNode.removeChild(e), e = null } }

        function o(t, e) { for (var i = t.split("|"), n = t.length; n--;) b.attrHandle[i[n]] = e }

        function r(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function a(t) { return n(function(e) { return e = +e, n(function(i, n) { for (var s, o = t([], i.length, e), r = o.length; r--;) i[s = o[r]] && (i[s] = !(n[s] = i[s])) }) }) }

        function l(t) { return t && typeof t.getElementsByTagName !== U && t }

        function c() {}

        function u(t) { for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value; return n }

        function h(t, e, i) {
            var n = e.dir,
                s = i && "parentNode" === n,
                o = F++;
            return e.first ? function(e, i, o) {
                for (; e = e[n];)
                    if (1 === e.nodeType || s) return t(e, i, o)
            } : function(e, i, r) {
                var a, l, c = [j, o];
                if (r) {
                    for (; e = e[n];)
                        if ((1 === e.nodeType || s) && t(e, i, r)) return !0
                } else
                    for (; e = e[n];)
                        if (1 === e.nodeType || s) { if (l = e[L] || (e[L] = {}), (a = l[n]) && a[0] === j && a[1] === o) return c[2] = a[2]; if (l[n] = c, c[2] = t(e, i, r)) return !0 }
            }
        }

        function d(t) {
            return t.length > 1 ? function(e, i, n) {
                for (var s = t.length; s--;)
                    if (!t[s](e, i, n)) return !1;
                return !0
            } : t[0]
        }

        function p(t, i, n) { for (var s = 0, o = i.length; o > s; s++) e(t, i[s], n); return n }

        function f(t, e, i, n, s) { for (var o, r = [], a = 0, l = t.length, c = null != e; l > a; a++)(o = t[a]) && (!i || i(o, n, s)) && (r.push(o), c && e.push(a)); return r }

        function m(t, e, i, s, o, r) {
            return s && !s[L] && (s = m(s)), o && !o[L] && (o = m(o, r)), n(function(n, r, a, l) {
                var c, u, h, d = [],
                    m = [],
                    g = r.length,
                    v = n || p(e || "*", a.nodeType ? [a] : a, []),
                    _ = !t || !n && e ? v : f(v, d, t, a, l),
                    y = i ? o || (n ? t : g || s) ? [] : r : _;
                if (i && i(_, y, a, l), s)
                    for (c = f(y, m), s(c, [], a, l), u = c.length; u--;)(h = c[u]) && (y[m[u]] = !(_[m[u]] = h));
                if (n) {
                    if (o || t) {
                        if (o) {
                            for (c = [], u = y.length; u--;)(h = y[u]) && c.push(_[u] = h);
                            o(null, y = [], c, l)
                        }
                        for (u = y.length; u--;)(h = y[u]) && (c = o ? Z.call(n, h) : d[u]) > -1 && (n[c] = !(r[c] = h))
                    }
                } else y = f(y === r ? y.splice(g, y.length) : y), o ? o(null, r, y, l) : G.apply(r, y)
            })
        }

        function g(t) {
            for (var e, i, n, s = t.length, o = b.relative[t[0].type], r = o || b.relative[" "], a = o ? 1 : 0, l = h(function(t) { return t === e }, r, !0), c = h(function(t) { return Z.call(e, t) > -1 }, r, !0), p = [function(t, i, n) { return !o && (n || i !== k) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n)) }]; s > a; a++)
                if (i = b.relative[t[a].type]) p = [h(d(p), i)];
                else {
                    if (i = b.filter[t[a].type].apply(null, t[a].matches), i[L]) { for (n = ++a; s > n && !b.relative[t[n].type]; n++); return m(a > 1 && d(p), a > 1 && u(t.slice(0, a - 1).concat({ value: " " === t[a - 2].type ? "*" : "" })).replace(rt, "$1"), i, n > a && g(t.slice(a, n)), s > n && g(t = t.slice(n)), s > n && u(t)) }
                    p.push(i)
                }
            return d(p)
        }

        function v(t, i) {
            var s = i.length > 0,
                o = t.length > 0,
                r = function(n, r, a, l, c) {
                    var u, h, d, p = 0,
                        m = "0",
                        g = n && [],
                        v = [],
                        _ = k,
                        y = n || o && b.find.TAG("*", c),
                        w = j += null == _ ? 1 : Math.random() || .1,
                        C = y.length;
                    for (c && (k = r !== P && r); m !== C && null != (u = y[m]); m++) {
                        if (o && u) {
                            for (h = 0; d = t[h++];)
                                if (d(u, r, a)) { l.push(u); break }
                            c && (j = w)
                        }
                        s && ((u = !d && u) && p--, n && g.push(u))
                    }
                    if (p += m, s && m !== p) {
                        for (h = 0; d = i[h++];) d(g, v, r, a);
                        if (n) {
                            if (p > 0)
                                for (; m--;) g[m] || v[m] || (v[m] = K.call(l));
                            v = f(v)
                        }
                        G.apply(l, v), c && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                    }
                    return c && (j = w, k = _), g
                };
            return s ? n(r) : r
        }
        var _, y, b, w, C, x, T, S, k, D, E, I, P, A, O, N, M, H, $, L = "sizzle" + -new Date,
            z = t.document,
            j = 0,
            F = 0,
            R = i(),
            W = i(),
            q = i(),
            B = function(t, e) { return t === e && (E = !0), 0 },
            U = "undefined",
            Y = 1 << 31,
            V = {}.hasOwnProperty,
            X = [],
            K = X.pop,
            Q = X.push,
            G = X.push,
            J = X.slice,
            Z = X.indexOf || function(t) {
                for (var e = 0, i = this.length; i > e; e++)
                    if (this[e] === t) return e;
                return -1
            },
            tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            et = "[\\x20\\t\\r\\n\\f]",
            it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            nt = it.replace("w", "w#"),
            st = "\\[" + et + "*(" + it + ")(?:" + et + "*([*^$|!~]?=)" + et + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + et + "*\\]",
            ot = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
            rt = new RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"),
            at = new RegExp("^" + et + "*," + et + "*"),
            lt = new RegExp("^" + et + "*([>+~]|" + et + ")" + et + "*"),
            ct = new RegExp("=" + et + "*([^\\]'\"]*?)" + et + "*\\]", "g"),
            ut = new RegExp(ot),
            ht = new RegExp("^" + nt + "$"),
            dt = { ID: new RegExp("^#(" + it + ")"), CLASS: new RegExp("^\\.(" + it + ")"), TAG: new RegExp("^(" + it.replace("w", "w*") + ")"), ATTR: new RegExp("^" + st), PSEUDO: new RegExp("^" + ot), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + et + "*(even|odd|(([+-]|)(\\d*)n|)" + et + "*(?:([+-]|)" + et + "*(\\d+)|))" + et + "*\\)|)", "i"), bool: new RegExp("^(?:" + tt + ")$", "i"), needsContext: new RegExp("^" + et + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + et + "*((?:-\\d)?\\d*)" + et + "*\\)|)(?=[^-]|$)", "i") },
            pt = /^(?:input|select|textarea|button)$/i,
            ft = /^h\d$/i,
            mt = /^[^{]+\{\s*\[native \w/,
            gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            vt = /[+~]/,
            _t = /'|\\/g,
            yt = new RegExp("\\\\([\\da-f]{1,6}" + et + "?|(" + et + ")|.)", "ig"),
            bt = function(t, e, i) { var n = "0x" + e - 65536; return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320) };
        try { G.apply(X = J.call(z.childNodes), z.childNodes), X[z.childNodes.length].nodeType } catch (t) {
            G = {
                apply: X.length ? function(t, e) { Q.apply(t, J.call(e)) } : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }
        y = e.support = {}, C = e.isXML = function(t) { var e = t && (t.ownerDocument || t).documentElement; return !!e && "HTML" !== e.nodeName }, I = e.setDocument = function(t) {
            var e, i = t ? t.ownerDocument || t : z,
                n = i.defaultView;
            return i !== P && 9 === i.nodeType && i.documentElement ? (P = i, A = i.documentElement, O = !C(i), n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", function() { I() }, !1) : n.attachEvent && n.attachEvent("onunload", function() { I() })), y.attributes = s(function(t) { return t.className = "i", !t.getAttribute("className") }), y.getElementsByTagName = s(function(t) { return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length }), y.getElementsByClassName = mt.test(i.getElementsByClassName) && s(function(t) { return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length }), y.getById = s(function(t) { return A.appendChild(t).id = L, !i.getElementsByName || !i.getElementsByName(L).length }), y.getById ? (b.find.ID = function(t, e) { if (typeof e.getElementById !== U && O) { var i = e.getElementById(t); return i && i.parentNode ? [i] : [] } }, b.filter.ID = function(t) { var e = t.replace(yt, bt); return function(t) { return t.getAttribute("id") === e } }) : (delete b.find.ID, b.filter.ID = function(t) { var e = t.replace(yt, bt); return function(t) { var i = typeof t.getAttributeNode !== U && t.getAttributeNode("id"); return i && i.value === e } }), b.find.TAG = y.getElementsByTagName ? function(t, e) { return typeof e.getElementsByTagName !== U ? e.getElementsByTagName(t) : void 0 } : function(t, e) {
                var i, n = [],
                    s = 0,
                    o = e.getElementsByTagName(t);
                if ("*" === t) { for (; i = o[s++];) 1 === i.nodeType && n.push(i); return n }
                return o
            }, b.find.CLASS = y.getElementsByClassName && function(t, e) { return typeof e.getElementsByClassName !== U && O ? e.getElementsByClassName(t) : void 0 }, M = [], N = [], (y.qsa = mt.test(i.querySelectorAll)) && (s(function(t) { t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && N.push("[*^$]=" + et + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || N.push("\\[" + et + "*(?:value|" + tt + ")"), t.querySelectorAll(":checked").length || N.push(":checked") }), s(function(t) {
                var e = i.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && N.push("name" + et + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), N.push(",.*:")
            })), (y.matchesSelector = mt.test(H = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && s(function(t) { y.disconnectedMatch = H.call(t, "div"), H.call(t, "[s!='']:x"), M.push("!=", ot) }), N = N.length && new RegExp(N.join("|")), M = M.length && new RegExp(M.join("|")), e = mt.test(A.compareDocumentPosition), $ = e || mt.test(A.contains) ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t,
                    n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, B = e ? function(t, e) { if (t === e) return E = !0, 0; var n = !t.compareDocumentPosition - !e.compareDocumentPosition; return n || (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !y.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === z && $(z, t) ? -1 : e === i || e.ownerDocument === z && $(z, e) ? 1 : D ? Z.call(D, t) - Z.call(D, e) : 0 : 4 & n ? -1 : 1) } : function(t, e) {
                if (t === e) return E = !0, 0;
                var n, s = 0,
                    o = t.parentNode,
                    a = e.parentNode,
                    l = [t],
                    c = [e];
                if (!o || !a) return t === i ? -1 : e === i ? 1 : o ? -1 : a ? 1 : D ? Z.call(D, t) - Z.call(D, e) : 0;
                if (o === a) return r(t, e);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (n = e; n = n.parentNode;) c.unshift(n);
                for (; l[s] === c[s];) s++;
                return s ? r(l[s], c[s]) : l[s] === z ? -1 : c[s] === z ? 1 : 0
            }, i) : P
        }, e.matches = function(t, i) { return e(t, null, null, i) }, e.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== P && I(t), i = i.replace(ct, "='$1']"), !(!y.matchesSelector || !O || M && M.test(i) || N && N.test(i))) try { var n = H.call(t, i); if (n || y.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n } catch (t) {}
            return e(i, P, null, [t]).length > 0
        }, e.contains = function(t, e) { return (t.ownerDocument || t) !== P && I(t), $(t, e) }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== P && I(t);
            var i = b.attrHandle[e.toLowerCase()],
                n = i && V.call(b.attrHandle, e.toLowerCase()) ? i(t, e, !O) : void 0;
            return void 0 !== n ? n : y.attributes || !O ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, e.error = function(t) { throw new Error("Syntax error, unrecognized expression: " + t) }, e.uniqueSort = function(t) {
            var e, i = [],
                n = 0,
                s = 0;
            if (E = !y.detectDuplicates, D = !y.sortStable && t.slice(0), t.sort(B), E) { for (; e = t[s++];) e === t[s] && (n = i.push(s)); for (; n--;) t.splice(i[n], 1) }
            return D = null, t
        }, w = e.getText = function(t) {
            var e, i = "",
                n = 0,
                s = t.nodeType;
            if (s) { if (1 === s || 9 === s || 11 === s) { if ("string" == typeof t.textContent) return t.textContent; for (t = t.firstChild; t; t = t.nextSibling) i += w(t) } else if (3 === s || 4 === s) return t.nodeValue } else
                for (; e = t[n++];) i += w(e);
            return i
        }, b = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: dt,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: { ATTR: function(t) { return t[1] = t[1].replace(yt, bt), t[3] = (t[3] || t[4] || t[5] || "").replace(yt, bt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4) }, CHILD: function(t) { return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t }, PSEUDO: function(t) { var e, i = !t[6] && t[2]; return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ut.test(i) && (e = x(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3)) } },
            filter: {
                TAG: function(t) { var e = t.replace(yt, bt).toLowerCase(); return "*" === t ? function() { return !0 } : function(t) { return t.nodeName && t.nodeName.toLowerCase() === e } },
                CLASS: function(t) { var e = R[t + " "]; return e || (e = new RegExp("(^|" + et + ")" + t + "(" + et + "|$)")) && R(t, function(t) { return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== U && t.getAttribute("class") || "") }) },
                ATTR: function(t, i, n) { return function(s) { var o = e.attr(s, t); return null == o ? "!=" === i : !i || (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o + " ").indexOf(n) > -1 : "|=" === i && (o === n || o.slice(0, n.length + 1) === n + "-")) } },
                CHILD: function(t, e, i, n, s) {
                    var o = "nth" !== t.slice(0, 3),
                        r = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === n && 0 === s ? function(t) { return !!t.parentNode } : function(e, i, l) {
                        var c, u, h, d, p, f, m = o !== r ? "nextSibling" : "previousSibling",
                            g = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            _ = !l && !a;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (h = e; h = h[m];)
                                        if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                    f = m = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [r ? g.firstChild : g.lastChild], r && _) {
                                for (u = g[L] || (g[L] = {}), c = u[t] || [], p = c[0] === j && c[1], d = c[0] === j && c[2], h = p && g.childNodes[p]; h = ++p && h && h[m] || (d = p = 0) || f.pop();)
                                    if (1 === h.nodeType && ++d && h === e) { u[t] = [j, p, d]; break }
                            } else if (_ && (c = (e[L] || (e[L] = {}))[t]) && c[0] === j) d = c[1];
                            else
                                for (;
                                    (h = ++p && h && h[m] || (d = p = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++d || (_ && ((h[L] || (h[L] = {}))[t] = [j, d]), h !== e)););
                            return (d -= s) === n || d % n == 0 && d / n >= 0
                        }
                    }
                },
                PSEUDO: function(t, i) { var s, o = b.pseudos[t] || b.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t); return o[L] ? o(i) : o.length > 1 ? (s = [t, t, "", i], b.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) { for (var n, s = o(t, i), r = s.length; r--;) n = Z.call(t, s[r]), t[n] = !(e[n] = s[r]) }) : function(t) { return o(t, 0, s) }) : o }
            },
            pseudos: {
                not: n(function(t) {
                    var e = [],
                        i = [],
                        s = T(t.replace(rt, "$1"));
                    return s[L] ? n(function(t, e, i, n) { for (var o, r = s(t, null, n, []), a = t.length; a--;)(o = r[a]) && (t[a] = !(e[a] = o)) }) : function(t, n, o) { return e[0] = t, s(e, null, o, i), !i.pop() }
                }),
                has: n(function(t) { return function(i) { return e(t, i).length > 0 } }),
                contains: n(function(t) { return function(e) { return (e.textContent || e.innerText || w(e)).indexOf(t) > -1 } }),
                lang: n(function(t) {
                    return ht.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(yt, bt).toLowerCase(),
                        function(e) {
                            var i;
                            do { if (i = O ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-") } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) { var i = t.location && t.location.hash; return i && i.slice(1) === e.id },
                root: function(t) { return t === A },
                focus: function(t) { return t === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(t.type || t.href || ~t.tabIndex) },
                enabled: function(t) { return !1 === t.disabled },
                disabled: function(t) { return !0 === t.disabled },
                checked: function(t) { var e = t.nodeName.toLowerCase(); return "input" === e && !!t.checked || "option" === e && !!t.selected },
                selected: function(t) { return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) { return !b.pseudos.empty(t) },
                header: function(t) { return ft.test(t.nodeName) },
                input: function(t) { return pt.test(t.nodeName) },
                button: function(t) { var e = t.nodeName.toLowerCase(); return "input" === e && "button" === t.type || "button" === e },
                text: function(t) { var e; return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase()) },
                first: a(function() { return [0] }),
                last: a(function(t, e) { return [e - 1] }),
                eq: a(function(t, e, i) { return [0 > i ? i + e : i] }),
                even: a(function(t, e) { for (var i = 0; e > i; i += 2) t.push(i); return t }),
                odd: a(function(t, e) { for (var i = 1; e > i; i += 2) t.push(i); return t }),
                lt: a(function(t, e, i) { for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n); return t }),
                gt: a(function(t, e, i) { for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n); return t })
            }
        }, b.pseudos.nth = b.pseudos.eq;
        for (_ in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) b.pseudos[_] = function(t) { return function(e) { return "input" === e.nodeName.toLowerCase() && e.type === t } }(_);
        for (_ in { submit: !0, reset: !0 }) b.pseudos[_] = function(t) { return function(e) { var i = e.nodeName.toLowerCase(); return ("input" === i || "button" === i) && e.type === t } }(_);
        return c.prototype = b.filters = b.pseudos, b.setFilters = new c, x = e.tokenize = function(t, i) {
            var n, s, o, r, a, l, c, u = W[t + " "];
            if (u) return i ? 0 : u.slice(0);
            for (a = t, l = [], c = b.preFilter; a;) {
                (!n || (s = at.exec(a))) && (s && (a = a.slice(s[0].length) || a), l.push(o = [])), n = !1, (s = lt.exec(a)) && (n = s.shift(), o.push({ value: n, type: s[0].replace(rt, " ") }), a = a.slice(n.length));
                for (r in b.filter) !(s = dt[r].exec(a)) || c[r] && !(s = c[r](s)) || (n = s.shift(), o.push({ value: n, type: r, matches: s }), a = a.slice(n.length));
                if (!n) break
            }
            return i ? a.length : a ? e.error(t) : W(t, l).slice(0)
        }, T = e.compile = function(t, e) {
            var i, n = [],
                s = [],
                o = q[t + " "];
            if (!o) {
                for (e || (e = x(t)), i = e.length; i--;) o = g(e[i]), o[L] ? n.push(o) : s.push(o);
                o = q(t, v(s, n)), o.selector = t
            }
            return o
        }, S = e.select = function(t, e, i, n) {
            var s, o, r, a, c, h = "function" == typeof t && t,
                d = !n && x(t = h.selector || t);
            if (i = i || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (r = o[0]).type && y.getById && 9 === e.nodeType && O && b.relative[o[1].type]) {
                    if (!(e = (b.find.ID(r.matches[0].replace(yt, bt), e) || [])[0])) return i;
                    h && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (s = dt.needsContext.test(t) ? 0 : o.length; s-- && (r = o[s], !b.relative[a = r.type]);)
                    if ((c = b.find[a]) && (n = c(r.matches[0].replace(yt, bt), vt.test(o[0].type) && l(e.parentNode) || e))) { if (o.splice(s, 1), !(t = n.length && u(o))) return G.apply(i, n), i; break }
            }
            return (h || T(t, d))(n, e, !O, i, vt.test(t) && l(e.parentNode) || e), i
        }, y.sortStable = L.split("").sort(B).join("") === L, y.detectDuplicates = !!E, I(), y.sortDetached = s(function(t) { return 1 & t.compareDocumentPosition(P.createElement("div")) }), s(function(t) { return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href") }) || o("type|href|height|width", function(t, e, i) { return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2) }), y.attributes && s(function(t) { return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value") }) || o("value", function(t, e, i) { return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue }), s(function(t) { return null == t.getAttribute("disabled") }) || o(tt, function(t, e, i) { var n; return i ? void 0 : !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null }), e
    }(t);
    Z.find = st, Z.expr = st.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = st.uniqueSort, Z.text = st.getText, Z.isXMLDoc = st.isXML, Z.contains = st.contains;
    var ot = Z.expr.match.needsContext,
        rt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        at = /^.[^:#\[\.,]*$/;
    Z.filter = function(t, e, i) { var n = e[0]; return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? Z.find.matchesSelector(n, t) ? [n] : [] : Z.find.matches(t, Z.grep(e, function(t) { return 1 === t.nodeType })) }, Z.fn.extend({
        find: function(t) {
            var e, i = this.length,
                n = [],
                s = this;
            if ("string" != typeof t) return this.pushStack(Z(t).filter(function() {
                for (e = 0; i > e; e++)
                    if (Z.contains(s[e], this)) return !0
            }));
            for (e = 0; i > e; e++) Z.find(t, s[e], n);
            return n = this.pushStack(i > 1 ? Z.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function(t) { return this.pushStack(n(this, t || [], !1)) },
        not: function(t) { return this.pushStack(n(this, t || [], !0)) },
        is: function(t) { return !!n(this, "string" == typeof t && ot.test(t) ? Z(t) : t || [], !1).length }
    });
    var lt, ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (Z.fn.init = function(t, e) {
        var i, n;
        if (!t) return this;
        if ("string" == typeof t) {
            if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ct.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || lt).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof Z ? e[0] : e, Z.merge(this, Z.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : G, !0)), rt.test(i[1]) && Z.isPlainObject(e))
                    for (i in e) Z.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            return n = G.getElementById(i[2]), n && n.parentNode && (this.length = 1, this[0] = n), this.context = G, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : Z.isFunction(t) ? void 0 !== lt.ready ? lt.ready(t) : t(Z) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), Z.makeArray(t, this))
    }).prototype = Z.fn, lt = Z(G);
    var ut = /^(?:parents|prev(?:Until|All))/,
        ht = { children: !0, contents: !0, next: !0, prev: !0 };
    Z.extend({
        dir: function(t, e, i) {
            for (var n = [], s = void 0 !== i;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (s && Z(t).is(i)) break;
                    n.push(t)
                }
            return n
        },
        sibling: function(t, e) { for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t); return i }
    }), Z.fn.extend({
        has: function(t) {
            var e = Z(t, this),
                i = e.length;
            return this.filter(function() {
                for (var t = 0; i > t; t++)
                    if (Z.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            for (var i, n = 0, s = this.length, o = [], r = ot.test(t) || "string" != typeof t ? Z(t, e || this.context) : 0; s > n; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && Z.find.matchesSelector(i, t))) { o.push(i); break }
            return this.pushStack(o.length > 1 ? Z.unique(o) : o)
        },
        index: function(t) { return t ? "string" == typeof t ? Y.call(Z(t), this[0]) : Y.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(t, e) { return this.pushStack(Z.unique(Z.merge(this.get(), Z(t, e)))) },
        addBack: function(t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) }
    }), Z.each({ parent: function(t) { var e = t.parentNode; return e && 11 !== e.nodeType ? e : null }, parents: function(t) { return Z.dir(t, "parentNode") }, parentsUntil: function(t, e, i) { return Z.dir(t, "parentNode", i) }, next: function(t) { return s(t, "nextSibling") }, prev: function(t) { return s(t, "previousSibling") }, nextAll: function(t) { return Z.dir(t, "nextSibling") }, prevAll: function(t) { return Z.dir(t, "previousSibling") }, nextUntil: function(t, e, i) { return Z.dir(t, "nextSibling", i) }, prevUntil: function(t, e, i) { return Z.dir(t, "previousSibling", i) }, siblings: function(t) { return Z.sibling((t.parentNode || {}).firstChild, t) }, children: function(t) { return Z.sibling(t.firstChild) }, contents: function(t) { return t.contentDocument || Z.merge([], t.childNodes) } }, function(t, e) { Z.fn[t] = function(i, n) { var s = Z.map(this, e, i); return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = Z.filter(n, s)), this.length > 1 && (ht[t] || Z.unique(s), ut.test(t) && s.reverse()), this.pushStack(s) } });
    var dt = /\S+/g,
        pt = {};
    Z.Callbacks = function(t) {
        t = "string" == typeof t ? pt[t] || o(t) : Z.extend({}, t);
        var e, i, n, s, r, a, l = [],
            c = !t.once && [],
            u = function(o) {
                for (e = t.memory && o, i = !0, a = s || 0, s = 0, r = l.length, n = !0; l && r > a; a++)
                    if (!1 === l[a].apply(o[0], o[1]) && t.stopOnFalse) { e = !1; break }
                n = !1, l && (c ? c.length && u(c.shift()) : e ? l = [] : h.disable())
            },
            h = {
                add: function() { if (l) { var i = l.length;! function e(i) { Z.each(i, function(i, n) { var s = Z.type(n); "function" === s ? t.unique && h.has(n) || l.push(n) : n && n.length && "string" !== s && e(n) }) }(arguments), n ? r = l.length : e && (s = i, u(e)) } return this },
                remove: function() {
                    return l && Z.each(arguments, function(t, e) {
                        for (var i;
                            (i = Z.inArray(e, l, i)) > -1;) l.splice(i, 1), n && (r >= i && r--, a >= i && a--)
                    }), this
                },
                has: function(t) { return t ? Z.inArray(t, l) > -1 : !(!l || !l.length) },
                empty: function() { return l = [], r = 0, this },
                disable: function() { return l = c = e = void 0, this },
                disabled: function() { return !l },
                lock: function() { return c = void 0, e || h.disable(), this },
                locked: function() { return !c },
                fireWith: function(t, e) { return !l || i && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], n ? c.push(e) : u(e)), this },
                fire: function() { return h.fireWith(this, arguments), this },
                fired: function() { return !!i }
            };
        return h
    }, Z.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", Z.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() { return i },
                    always: function() { return s.done(arguments).fail(arguments), this },
                    then: function() {
                        var t = arguments;
                        return Z.Deferred(function(i) {
                            Z.each(e, function(e, o) {
                                var r = Z.isFunction(t[e]) && t[e];
                                s[o[1]](function() {
                                    var t = r && r.apply(this, arguments);
                                    t && Z.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === n ? i.promise() : this, r ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) { return null != t ? Z.extend(t, n) : n }
                },
                s = {};
            return n.pipe = n.then, Z.each(e, function(t, o) {
                var r = o[2],
                    a = o[3];
                n[o[1]] = r.add, a && r.add(function() { i = a }, e[1 ^ t][2].disable, e[2][2].lock), s[o[0]] = function() { return s[o[0] + "With"](this === s ? n : this, arguments), this }, s[o[0] + "With"] = r.fireWith
            }), n.promise(s), t && t.call(s, s), s
        },
        when: function(t) {
            var e, i, n, s = 0,
                o = q.call(arguments),
                r = o.length,
                a = 1 !== r || t && Z.isFunction(t.promise) ? r : 0,
                l = 1 === a ? t : Z.Deferred(),
                c = function(t, i, n) { return function(s) { i[t] = this, n[t] = arguments.length > 1 ? q.call(arguments) : s, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n) } };
            if (r > 1)
                for (e = new Array(r), i = new Array(r), n = new Array(r); r > s; s++) o[s] && Z.isFunction(o[s].promise) ? o[s].promise().done(c(s, n, o)).fail(l.reject).progress(c(s, i, e)) : --a;
            return a || l.resolveWith(n, o), l.promise()
        }
    });
    var ft;
    Z.fn.ready = function(t) { return Z.ready.promise().done(t), this }, Z.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) { t ? Z.readyWait++ : Z.ready(!0) },
        ready: function(t) {
            (!0 === t ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, !0 !== t && --Z.readyWait > 0 || (ft.resolveWith(G, [Z]), Z.fn.triggerHandler && (Z(G).triggerHandler("ready"), Z(G).off("ready"))))
        }
    }), Z.ready.promise = function(e) { return ft || (ft = Z.Deferred(), "complete" === G.readyState ? setTimeout(Z.ready) : (G.addEventListener("DOMContentLoaded", r, !1), t.addEventListener("load", r, !1))), ft.promise(e) }, Z.ready.promise();
    var mt = Z.access = function(t, e, i, n, s, o, r) {
        var a = 0,
            l = t.length,
            c = null == i;
        if ("object" === Z.type(i)) { s = !0; for (a in i) Z.access(t, e, a, i[a], !0, o, r) } else if (void 0 !== n && (s = !0, Z.isFunction(n) || (r = !0), c && (r ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) { return c.call(Z(t), i) })), e))
            for (; l > a; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
        return s ? t : c ? e.call(t) : l ? e(t[0], i) : o
    };
    Z.acceptData = function(t) { return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType }, a.uid = 1, a.accepts = Z.acceptData, a.prototype = {
        key: function(t) {
            if (!a.accepts(t)) return 0;
            var e = {},
                i = t[this.expando];
            if (!i) { i = a.uid++; try { e[this.expando] = { value: i }, Object.defineProperties(t, e) } catch (n) { e[this.expando] = i, Z.extend(t, e) } }
            return this.cache[i] || (this.cache[i] = {}), i
        },
        set: function(t, e, i) {
            var n, s = this.key(t),
                o = this.cache[s];
            if ("string" == typeof e) o[e] = i;
            else if (Z.isEmptyObject(o)) Z.extend(this.cache[s], e);
            else
                for (n in e) o[n] = e[n];
            return o
        },
        get: function(t, e) { var i = this.cache[this.key(t)]; return void 0 === e ? i : i[e] },
        access: function(t, e, i) { var n; return void 0 === e || e && "string" == typeof e && void 0 === i ? (n = this.get(t, e), void 0 !== n ? n : this.get(t, Z.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e) },
        remove: function(t, e) {
            var i, n, s, o = this.key(t),
                r = this.cache[o];
            if (void 0 === e) this.cache[o] = {};
            else { Z.isArray(e) ? n = e.concat(e.map(Z.camelCase)) : (s = Z.camelCase(e), e in r ? n = [e, s] : (n = s, n = n in r ? [n] : n.match(dt) || [])), i = n.length; for (; i--;) delete r[n[i]] }
        },
        hasData: function(t) { return !Z.isEmptyObject(this.cache[t[this.expando]] || {}) },
        discard: function(t) { t[this.expando] && delete this.cache[t[this.expando]] }
    };
    var gt = new a,
        vt = new a,
        _t = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        yt = /([A-Z])/g;
    Z.extend({ hasData: function(t) { return vt.hasData(t) || gt.hasData(t) }, data: function(t, e, i) { return vt.access(t, e, i) }, removeData: function(t, e) { vt.remove(t, e) }, _data: function(t, e, i) { return gt.access(t, e, i) }, _removeData: function(t, e) { gt.remove(t, e) } }), Z.fn.extend({
        data: function(t, e) {
            var i, n, s, o = this[0],
                r = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (s = vt.get(o), 1 === o.nodeType && !gt.get(o, "hasDataAttrs"))) {
                    for (i = r.length; i--;) r[i] && (n = r[i].name, 0 === n.indexOf("data-") && (n = Z.camelCase(n.slice(5)), l(o, n, s[n])));
                    gt.set(o, "hasDataAttrs", !0)
                }
                return s
            }
            return "object" == typeof t ? this.each(function() { vt.set(this, t) }) : mt(this, function(e) {
                var i, n = Z.camelCase(t);
                if (o && void 0 === e) { if (void 0 !== (i = vt.get(o, t))) return i; if (void 0 !== (i = vt.get(o, n))) return i; if (void 0 !== (i = l(o, n, void 0))) return i } else this.each(function() {
                    var i = vt.get(this, n);
                    vt.set(this, n, e), -1 !== t.indexOf("-") && void 0 !== i && vt.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) { return this.each(function() { vt.remove(this, t) }) }
    }), Z.extend({
        queue: function(t, e, i) { var n; return t ? (e = (e || "fx") + "queue", n = gt.get(t, e), i && (!n || Z.isArray(i) ? n = gt.access(t, e, Z.makeArray(i)) : n.push(i)), n || []) : void 0 },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = Z.queue(t, e),
                n = i.length,
                s = i.shift(),
                o = Z._queueHooks(t, e),
                r = function() { Z.dequeue(t, e) };
            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, r, o)), !n && o && o.empty.fire()
        },
        _queueHooks: function(t, e) { var i = e + "queueHooks"; return gt.get(t, i) || gt.access(t, i, { empty: Z.Callbacks("once memory").add(function() { gt.remove(t, [e + "queue", i]) }) }) }
    }), Z.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? Z.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var i = Z.queue(this, t, e);
                Z._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && Z.dequeue(this, t)
            })
        },
        dequeue: function(t) { return this.each(function() { Z.dequeue(this, t) }) },
        clearQueue: function(t) { return this.queue(t || "fx", []) },
        promise: function(t, e) {
            var i, n = 1,
                s = Z.Deferred(),
                o = this,
                r = this.length,
                a = function() {--n || s.resolveWith(o, [o]) };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;)(i = gt.get(o[r], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), s.promise(e)
        }
    });
    var bt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        wt = ["Top", "Right", "Bottom", "Left"],
        Ct = function(t, e) { return t = e || t, "none" === Z.css(t, "display") || !Z.contains(t.ownerDocument, t) },
        xt = /^(?:checkbox|radio)$/i;
    ! function() {
        var t = G.createDocumentFragment(),
            e = t.appendChild(G.createElement("div")),
            i = G.createElement("input");
        i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), Q.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", Q.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Tt = "undefined";
    Q.focusinBubbles = "onfocusin" in t;
    var St = /^key/,
        kt = /^(?:mouse|pointer|contextmenu)|click/,
        Dt = /^(?:focusinfocus|focusoutblur)$/,
        Et = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function(t, e, i, n, s) {
            var o, r, a, l, c, u, h, d, p, f, m, g = gt.get(t);
            if (g)
                for (i.handler && (o = i, i = o.handler, s = o.selector), i.guid || (i.guid = Z.guid++), (l = g.events) || (l = g.events = {}), (r = g.handle) || (r = g.handle = function(e) { return typeof Z !== Tt && Z.event.triggered !== e.type ? Z.event.dispatch.apply(t, arguments) : void 0 }), e = (e || "").match(dt) || [""], c = e.length; c--;) a = Et.exec(e[c]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p && (h = Z.event.special[p] || {}, p = (s ? h.delegateType : h.bindType) || p, h = Z.event.special[p] || {}, u = Z.extend({ type: p, origType: m, data: n, handler: i, guid: i.guid, selector: s, needsContext: s && Z.expr.match.needsContext.test(s), namespace: f.join(".") }, o), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, h.setup && !1 !== h.setup.call(t, n, f, r) || t.addEventListener && t.addEventListener(p, r, !1)), h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, u) : d.push(u), Z.event.global[p] = !0)
        },
        remove: function(t, e, i, n, s) {
            var o, r, a, l, c, u, h, d, p, f, m, g = gt.hasData(t) && gt.get(t);
            if (g && (l = g.events)) {
                for (e = (e || "").match(dt) || [""], c = e.length; c--;)
                    if (a = Et.exec(e[c]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p) {
                        for (h = Z.event.special[p] || {}, p = (n ? h.delegateType : h.bindType) || p, d = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = o = d.length; o--;) u = d[o], !s && m !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, h.remove && h.remove.call(t, u));
                        r && !d.length && (h.teardown && !1 !== h.teardown.call(t, f, g.handle) || Z.removeEvent(t, p, g.handle), delete l[p])
                    } else
                        for (p in l) Z.event.remove(t, p + e[c], i, n, !0);
                Z.isEmptyObject(l) && (delete g.handle, gt.remove(t, "events"))
            }
        },
        trigger: function(e, i, n, s) {
            var o, r, a, l, c, u, h, d = [n || G],
                p = K.call(e, "type") ? e.type : e,
                f = K.call(e, "namespace") ? e.namespace.split(".") : [];
            if (r = a = n = n || G, 3 !== n.nodeType && 8 !== n.nodeType && !Dt.test(p + Z.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), c = p.indexOf(":") < 0 && "on" + p, e = e[Z.expando] ? e : new Z.Event(p, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : Z.makeArray(i, [e]), h = Z.event.special[p] || {}, s || !h.trigger || !1 !== h.trigger.apply(n, i))) {
                if (!s && !h.noBubble && !Z.isWindow(n)) {
                    for (l = h.delegateType || p, Dt.test(l + p) || (r = r.parentNode); r; r = r.parentNode) d.push(r), a = r;
                    a === (n.ownerDocument || G) && d.push(a.defaultView || a.parentWindow || t)
                }
                for (o = 0;
                    (r = d[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? l : h.bindType || p, u = (gt.get(r, "events") || {})[e.type] && gt.get(r, "handle"), u && u.apply(r, i), (u = c && r[c]) && u.apply && Z.acceptData(r) && (e.result = u.apply(r, i), !1 === e.result && e.preventDefault());
                return e.type = p, s || e.isDefaultPrevented() || h._default && !1 !== h._default.apply(d.pop(), i) || !Z.acceptData(n) || c && Z.isFunction(n[p]) && !Z.isWindow(n) && (a = n[c], a && (n[c] = null), Z.event.triggered = p, n[p](), Z.event.triggered = void 0, a && (n[c] = a)), e.result
            }
        },
        dispatch: function(t) {
            t = Z.event.fix(t);
            var e, i, n, s, o, r = [],
                a = q.call(arguments),
                l = (gt.get(this, "events") || {})[t.type] || [],
                c = Z.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                for (r = Z.event.handlers.call(this, t, l), e = 0;
                    (s = r[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = s.elem, i = 0;
                        (o = s.handlers[i++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, void 0 !== (n = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, a)) && !1 === (t.result = n) && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var i, n, s, o, r = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type))
                for (; l !== this; l = l.parentNode || this)
                    if (!0 !== l.disabled || "click" !== t.type) {
                        for (n = [], i = 0; a > i; i++) o = e[i], s = o.selector + " ", void 0 === n[s] && (n[s] = o.needsContext ? Z(s, this).index(l) >= 0 : Z.find(s, this, null, [l]).length), n[s] && n.push(o);
                        n.length && r.push({ elem: l, handlers: n })
                    }
            return a < e.length && r.push({ elem: this, handlers: e.slice(a) }), r
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(t, e) { return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t } },
        mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(t, e) { var i, n, s, o = e.button; return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || G, n = i.documentElement, s = i.body, t.pageX = e.clientX + (n && n.scrollLeft || s && s.scrollLeft || 0) - (n && n.clientLeft || s && s.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || s && s.scrollTop || 0) - (n && n.clientTop || s && s.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t } },
        fix: function(t) {
            if (t[Z.expando]) return t;
            var e, i, n, s = t.type,
                o = t,
                r = this.fixHooks[s];
            for (r || (this.fixHooks[s] = r = kt.test(s) ? this.mouseHooks : St.test(s) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, t = new Z.Event(o), e = n.length; e--;) i = n[e], t[i] = o[i];
            return t.target || (t.target = G), 3 === t.target.nodeType && (t.target = t.target.parentNode), r.filter ? r.filter(t, o) : t
        },
        special: { load: { noBubble: !0 }, focus: { trigger: function() { return this !== h() && this.focus ? (this.focus(), !1) : void 0 }, delegateType: "focusin" }, blur: { trigger: function() { return this === h() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() { return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0 }, _default: function(t) { return Z.nodeName(t.target, "a") } }, beforeunload: { postDispatch: function(t) { void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result) } } },
        simulate: function(t, e, i, n) {
            var s = Z.extend(new Z.Event, i, { type: t, isSimulated: !0, originalEvent: {} });
            n ? Z.event.trigger(s, null, e) : Z.event.dispatch.call(e, s), s.isDefaultPrevented() && i.preventDefault()
        }
    }, Z.removeEvent = function(t, e, i) { t.removeEventListener && t.removeEventListener(e, i, !1) }, Z.Event = function(t, e) { return this instanceof Z.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? c : u) : this.type = t, e && Z.extend(this, e), this.timeStamp = t && t.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(t, e) }, Z.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = c, t && t.preventDefault && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = c, t && t.stopPropagation && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = c, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Z.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(t, e) {
        Z.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = this,
                    s = t.relatedTarget,
                    o = t.handleObj;
                return (!s || s !== n && !Z.contains(n, s)) && (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), Q.focusinBubbles || Z.each({ focus: "focusin", blur: "focusout" }, function(t, e) {
        var i = function(t) { Z.event.simulate(e, t.target, Z.event.fix(t), !0) };
        Z.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    s = gt.access(n, e);
                s || n.addEventListener(t, i, !0), gt.access(n, e, (s || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    s = gt.access(n, e) - 1;
                s ? gt.access(n, e, s) : (n.removeEventListener(t, i, !0), gt.remove(n, e))
            }
        }
    }), Z.fn.extend({
        on: function(t, e, i, n, s) {
            var o, r;
            if ("object" == typeof t) { "string" != typeof e && (i = i || e, e = void 0); for (r in t) this.on(r, e, i, t[r], s); return this }
            if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), !1 === n) n = u;
            else if (!n) return this;
            return 1 === s && (o = n, n = function(t) { return Z().off(t), o.apply(this, arguments) }, n.guid = o.guid || (o.guid = Z.guid++)), this.each(function() { Z.event.add(this, t, n, i, e) })
        },
        one: function(t, e, i, n) { return this.on(t, e, i, n, 1) },
        off: function(t, e, i) { var n, s; if (t && t.preventDefault && t.handleObj) return n = t.handleObj, Z(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this; if ("object" == typeof t) { for (s in t) this.off(s, e, t[s]); return this } return (!1 === e || "function" == typeof e) && (i = e, e = void 0), !1 === i && (i = u), this.each(function() { Z.event.remove(this, t, i, e) }) },
        trigger: function(t, e) { return this.each(function() { Z.event.trigger(t, e, this) }) },
        triggerHandler: function(t, e) { var i = this[0]; return i ? Z.event.trigger(t, e, i, !0) : void 0 }
    });
    var It = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Pt = /<([\w:]+)/,
        At = /<|&#?\w+;/,
        Ot = /<(?:script|style|link)/i,
        Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Mt = /^$|\/(?:java|ecma)script/i,
        Ht = /^true\/(.*)/,
        $t = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Lt = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    Lt.optgroup = Lt.option, Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead, Lt.th = Lt.td, Z.extend({
        clone: function(t, e, i) {
            var n, s, o, r, a = t.cloneNode(!0),
                l = Z.contains(t.ownerDocument, t);
            if (!(Q.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || Z.isXMLDoc(t)))
                for (r = v(a), o = v(t), n = 0, s = o.length; s > n; n++) _(o[n], r[n]);
            if (e)
                if (i)
                    for (o = o || v(t), r = r || v(a), n = 0, s = o.length; s > n; n++) g(o[n], r[n]);
                else g(t, a);
            return r = v(a, "script"), r.length > 0 && m(r, !l && v(t, "script")), a
        },
        buildFragment: function(t, e, i, n) {
            for (var s, o, r, a, l, c, u = e.createDocumentFragment(), h = [], d = 0, p = t.length; p > d; d++)
                if ((s = t[d]) || 0 === s)
                    if ("object" === Z.type(s)) Z.merge(h, s.nodeType ? [s] : s);
                    else if (At.test(s)) {
                for (o = o || u.appendChild(e.createElement("div")), r = (Pt.exec(s) || ["", ""])[1].toLowerCase(), a = Lt[r] || Lt._default, o.innerHTML = a[1] + s.replace(It, "<$1></$2>") + a[2], c = a[0]; c--;) o = o.lastChild;
                Z.merge(h, o.childNodes), o = u.firstChild, o.textContent = ""
            } else h.push(e.createTextNode(s));
            for (u.textContent = "", d = 0; s = h[d++];)
                if ((!n || -1 === Z.inArray(s, n)) && (l = Z.contains(s.ownerDocument, s), o = v(u.appendChild(s), "script"), l && m(o), i))
                    for (c = 0; s = o[c++];) Mt.test(s.type || "") && i.push(s);
            return u
        },
        cleanData: function(t) {
            for (var e, i, n, s, o = Z.event.special, r = 0; void 0 !== (i = t[r]); r++) {
                if (Z.acceptData(i) && (s = i[gt.expando]) && (e = gt.cache[s])) {
                    if (e.events)
                        for (n in e.events) o[n] ? Z.event.remove(i, n) : Z.removeEvent(i, n, e.handle);
                    gt.cache[s] && delete gt.cache[s]
                }
                delete vt.cache[i[vt.expando]]
            }
        }
    }), Z.fn.extend({
        text: function(t) {
            return mt(this, function(t) {
                return void 0 === t ? Z.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() { return this.domManip(arguments, function(t) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { d(this, t).appendChild(t) } }) },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = d(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() { return this.domManip(arguments, function(t) { this.parentNode && this.parentNode.insertBefore(t, this) }) },
        after: function() { return this.domManip(arguments, function(t) { this.parentNode && this.parentNode.insertBefore(t, this.nextSibling) }) },
        remove: function(t, e) { for (var i, n = t ? Z.filter(t, this) : this, s = 0; null != (i = n[s]); s++) e || 1 !== i.nodeType || Z.cleanData(v(i)), i.parentNode && (e && Z.contains(i.ownerDocument, i) && m(v(i, "script")), i.parentNode.removeChild(i)); return this },
        empty: function() { for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.textContent = ""); return this },
        clone: function(t, e) { return t = null != t && t, e = null == e ? t : e, this.map(function() { return Z.clone(this, t, e) }) },
        html: function(t) {
            return mt(this, function(t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Ot.test(t) && !Lt[(Pt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(It, "<$1></$2>");
                    try {
                        for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() { var t = arguments[0]; return this.domManip(arguments, function(e) { t = this.parentNode, Z.cleanData(v(this)), t && t.replaceChild(e, this) }), t && (t.length || t.nodeType) ? this : this.remove() },
        detach: function(t) { return this.remove(t, !0) },
        domManip: function(t, e) {
            t = B.apply([], t);
            var i, n, s, o, r, a, l = 0,
                c = this.length,
                u = this,
                h = c - 1,
                d = t[0],
                m = Z.isFunction(d);
            if (m || c > 1 && "string" == typeof d && !Q.checkClone && Nt.test(d)) return this.each(function(i) {
                var n = u.eq(i);
                m && (t[0] = d.call(this, i, n.html())), n.domManip(t, e)
            });
            if (c && (i = Z.buildFragment(t, this[0].ownerDocument, !1, this), n = i.firstChild, 1 === i.childNodes.length && (i = n), n)) {
                for (s = Z.map(v(i, "script"), p), o = s.length; c > l; l++) r = i, l !== h && (r = Z.clone(r, !0, !0), o && Z.merge(s, v(r, "script"))), e.call(this[l], r, l);
                if (o)
                    for (a = s[s.length - 1].ownerDocument, Z.map(s, f), l = 0; o > l; l++) r = s[l], Mt.test(r.type || "") && !gt.access(r, "globalEval") && Z.contains(a, r) && (r.src ? Z._evalUrl && Z._evalUrl(r.src) : Z.globalEval(r.textContent.replace($t, "")))
            }
            return this
        }
    }), Z.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(t, e) { Z.fn[t] = function(t) { for (var i, n = [], s = Z(t), o = s.length - 1, r = 0; o >= r; r++) i = r === o ? this : this.clone(!0), Z(s[r])[e](i), U.apply(n, i.get()); return this.pushStack(n) } });
    var zt, jt = {},
        Ft = /^margin/,
        Rt = new RegExp("^(" + bt + ")(?!px)[a-z%]+$", "i"),
        Wt = function(t) { return t.ownerDocument.defaultView.getComputedStyle(t, null) };
    ! function() {
        function e() {
            r.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r.innerHTML = "", s.appendChild(o);
            var e = t.getComputedStyle(r, null);
            i = "1%" !== e.top, n = "4px" === e.width, s.removeChild(o)
        }
        var i, n, s = G.documentElement,
            o = G.createElement("div"),
            r = G.createElement("div");
        r.style && (r.style.backgroundClip = "content-box", r.cloneNode(!0).style.backgroundClip = "", Q.clearCloneStyle = "content-box" === r.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(r), t.getComputedStyle && Z.extend(Q, { pixelPosition: function() { return e(), i }, boxSizingReliable: function() { return null == n && e(), n }, reliableMarginRight: function() { var e, i = r.appendChild(G.createElement("div")); return i.style.cssText = r.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", r.style.width = "1px", s.appendChild(o), e = !parseFloat(t.getComputedStyle(i, null).marginRight), s.removeChild(o), e } }))
    }(), Z.swap = function(t, e, i, n) {
        var s, o, r = {};
        for (o in e) r[o] = t.style[o], t.style[o] = e[o];
        s = i.apply(t, n || []);
        for (o in e) t.style[o] = r[o];
        return s
    };
    var qt = /^(none|table(?!-c[ea]).+)/,
        Bt = new RegExp("^(" + bt + ")(.*)$", "i"),
        Ut = new RegExp("^([+-])=(" + bt + ")", "i"),
        Yt = { position: "absolute", visibility: "hidden", display: "block" },
        Vt = { letterSpacing: "0", fontWeight: "400" },
        Xt = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: { opacity: { get: function(t, e) { if (e) { var i = w(t, "opacity"); return "" === i ? "1" : i } } } },
        cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { float: "cssFloat" },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, o, r, a = Z.camelCase(e),
                    l = t.style;
                return e = Z.cssProps[a] || (Z.cssProps[a] = x(l, a)), r = Z.cssHooks[e] || Z.cssHooks[a], void 0 === i ? r && "get" in r && void 0 !== (s = r.get(t, !1, n)) ? s : l[e] : (o = typeof i, "string" === o && (s = Ut.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(Z.css(t, e)), o = "number"), void(null != i && i === i && ("number" !== o || Z.cssNumber[a] || (i += "px"), Q.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), r && "set" in r && void 0 === (i = r.set(t, i, n)) || (l[e] = i))))
            }
        },
        css: function(t, e, i, n) { var s, o, r, a = Z.camelCase(e); return e = Z.cssProps[a] || (Z.cssProps[a] = x(t.style, a)), r = Z.cssHooks[e] || Z.cssHooks[a], r && "get" in r && (s = r.get(t, !0, i)), void 0 === s && (s = w(t, e, n)), "normal" === s && e in Vt && (s = Vt[e]), "" === i || i ? (o = parseFloat(s), !0 === i || Z.isNumeric(o) ? o || 0 : s) : s }
    }), Z.each(["height", "width"], function(t, e) { Z.cssHooks[e] = { get: function(t, i, n) { return i ? qt.test(Z.css(t, "display")) && 0 === t.offsetWidth ? Z.swap(t, Yt, function() { return k(t, e, n) }) : k(t, e, n) : void 0 }, set: function(t, i, n) { var s = n && Wt(t); return T(t, i, n ? S(t, e, n, "border-box" === Z.css(t, "boxSizing", !1, s), s) : 0) } } }), Z.cssHooks.marginRight = C(Q.reliableMarginRight, function(t, e) { return e ? Z.swap(t, { display: "inline-block" }, w, [t, "marginRight"]) : void 0 }), Z.each({ margin: "", padding: "", border: "Width" }, function(t, e) { Z.cssHooks[t + e] = { expand: function(i) { for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) s[t + wt[n] + e] = o[n] || o[n - 2] || o[0]; return s } }, Ft.test(t) || (Z.cssHooks[t + e].set = T) }), Z.fn.extend({
        css: function(t, e) {
            return mt(this, function(t, e, i) {
                var n, s, o = {},
                    r = 0;
                if (Z.isArray(e)) { for (n = Wt(t), s = e.length; s > r; r++) o[e[r]] = Z.css(t, e[r], !1, n); return o }
                return void 0 !== i ? Z.style(t, e, i) : Z.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() { return D(this, !0) },
        hide: function() { return D(this) },
        toggle: function(t) { return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() { Ct(this) ? Z(this).show() : Z(this).hide() }) }
    }), Z.Tween = E, E.prototype = { constructor: E, init: function(t, e, i, n, s, o) { this.elem = t, this.prop = i, this.easing = s || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (Z.cssNumber[i] ? "" : "px") }, cur: function() { var t = E.propHooks[this.prop]; return t && t.get ? t.get(this) : E.propHooks._default.get(this) }, run: function(t) { var e, i = E.propHooks[this.prop]; return this.pos = e = this.options.duration ? Z.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : E.propHooks._default.set(this), this } }, E.prototype.init.prototype = E.prototype, E.propHooks = { _default: { get: function(t) { var e; return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = Z.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop] }, set: function(t) { Z.fx.step[t.prop] ? Z.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[Z.cssProps[t.prop]] || Z.cssHooks[t.prop]) ? Z.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now } } }, E.propHooks.scrollTop = E.propHooks.scrollLeft = { set: function(t) { t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now) } }, Z.easing = { linear: function(t) { return t }, swing: function(t) { return .5 - Math.cos(t * Math.PI) / 2 } }, Z.fx = E.prototype.init, Z.fx.step = {};
    var Kt, Qt, Gt = /^(?:toggle|show|hide)$/,
        Jt = new RegExp("^(?:([+-])=|)(" + bt + ")([a-z%]*)$", "i"),
        Zt = /queueHooks$/,
        te = [O],
        ee = {
            "*": [function(t, e) {
                var i = this.createTween(t, e),
                    n = i.cur(),
                    s = Jt.exec(e),
                    o = s && s[3] || (Z.cssNumber[t] ? "" : "px"),
                    r = (Z.cssNumber[t] || "px" !== o && +n) && Jt.exec(Z.css(i.elem, t)),
                    a = 1,
                    l = 20;
                if (r && r[3] !== o) {
                    o = o || r[3], s = s || [], r = +n || 1;
                    do { a = a || ".5", r /= a, Z.style(i.elem, t, r + o) } while (a !== (a = i.cur() / n) && 1 !== a && --l)
                }
                return s && (r = i.start = +r || +n || 0, i.unit = o, i.end = s[1] ? r + (s[1] + 1) * s[2] : +s[2]), i
            }]
        };
    Z.Animation = Z.extend(M, { tweener: function(t, e) { Z.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" "); for (var i, n = 0, s = t.length; s > n; n++) i = t[n], ee[i] = ee[i] || [], ee[i].unshift(e) }, prefilter: function(t, e) { e ? te.unshift(t) : te.push(t) } }), Z.speed = function(t, e, i) { var n = t && "object" == typeof t ? Z.extend({}, t) : { complete: i || !i && e || Z.isFunction(t) && t, duration: t, easing: i && e || e && !Z.isFunction(e) && e }; return n.duration = Z.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in Z.fx.speeds ? Z.fx.speeds[n.duration] : Z.fx.speeds._default, (null == n.queue || !0 === n.queue) && (n.queue = "fx"), n.old = n.complete, n.complete = function() { Z.isFunction(n.old) && n.old.call(this), n.queue && Z.dequeue(this, n.queue) }, n }, Z.fn.extend({
            fadeTo: function(t, e, i, n) { return this.filter(Ct).css("opacity", 0).show().end().animate({ opacity: e }, t, i, n) },
            animate: function(t, e, i, n) {
                var s = Z.isEmptyObject(t),
                    o = Z.speed(e, i, n),
                    r = function() {
                        var e = M(this, Z.extend({}, t), o);
                        (s || gt.get(this, "finish")) && e.stop(!0)
                    };
                return r.finish = r, s || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
            },
            stop: function(t, e, i) {
                var n = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        s = null != t && t + "queueHooks",
                        o = Z.timers,
                        r = gt.get(this);
                    if (s) r[s] && r[s].stop && n(r[s]);
                    else
                        for (s in r) r[s] && r[s].stop && Zt.test(s) && n(r[s]);
                    for (s = o.length; s--;) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), e = !1, o.splice(s, 1));
                    (e || !i) && Z.dequeue(this, t)
                })
            },
            finish: function(t) {
                return !1 !== t && (t = t || "fx"), this.each(function() {
                    var e, i = gt.get(this),
                        n = i[t + "queue"],
                        s = i[t + "queueHooks"],
                        o = Z.timers,
                        r = n ? n.length : 0;
                    for (i.finish = !0, Z.queue(this, t, []), s && s.stop && s.stop.call(this, !0),
                        e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; r > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }), Z.each(["toggle", "show", "hide"], function(t, e) {
            var i = Z.fn[e];
            Z.fn[e] = function(t, n, s) { return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(P(e, !0), t, n, s) }
        }), Z.each({ slideDown: P("show"), slideUp: P("hide"), slideToggle: P("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(t, e) { Z.fn[t] = function(t, i, n) { return this.animate(e, t, i, n) } }), Z.timers = [], Z.fx.tick = function() {
            var t, e = 0,
                i = Z.timers;
            for (Kt = Z.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
            i.length || Z.fx.stop(), Kt = void 0
        }, Z.fx.timer = function(t) { Z.timers.push(t), t() ? Z.fx.start() : Z.timers.pop() }, Z.fx.interval = 13, Z.fx.start = function() { Qt || (Qt = setInterval(Z.fx.tick, Z.fx.interval)) }, Z.fx.stop = function() { clearInterval(Qt), Qt = null }, Z.fx.speeds = { slow: 600, fast: 200, _default: 400 }, Z.fn.delay = function(t, e) {
            return t = Z.fx ? Z.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                var n = setTimeout(e, t);
                i.stop = function() { clearTimeout(n) }
            })
        },
        function() {
            var t = G.createElement("input"),
                e = G.createElement("select"),
                i = e.appendChild(G.createElement("option"));
            t.type = "checkbox", Q.checkOn = "" !== t.value, Q.optSelected = i.selected, e.disabled = !0, Q.optDisabled = !i.disabled, t = G.createElement("input"), t.value = "t", t.type = "radio", Q.radioValue = "t" === t.value
        }();
    var ie, ne = Z.expr.attrHandle;
    Z.fn.extend({ attr: function(t, e) { return mt(this, Z.attr, t, e, arguments.length > 1) }, removeAttr: function(t) { return this.each(function() { Z.removeAttr(this, t) }) } }), Z.extend({
        attr: function(t, e, i) { var n, s, o = t.nodeType; if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === Tt ? Z.prop(t, e, i) : (1 === o && Z.isXMLDoc(t) || (e = e.toLowerCase(), n = Z.attrHooks[e] || (Z.expr.match.bool.test(e) ? ie : void 0)), void 0 === i ? n && "get" in n && null !== (s = n.get(t, e)) ? s : (s = Z.find.attr(t, e), null == s ? void 0 : s) : null !== i ? n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s : (t.setAttribute(e, i + ""), i) : void Z.removeAttr(t, e)) },
        removeAttr: function(t, e) {
            var i, n, s = 0,
                o = e && e.match(dt);
            if (o && 1 === t.nodeType)
                for (; i = o[s++];) n = Z.propFix[i] || i, Z.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
        },
        attrHooks: { type: { set: function(t, e) { if (!Q.radioValue && "radio" === e && Z.nodeName(t, "input")) { var i = t.value; return t.setAttribute("type", e), i && (t.value = i), e } } } }
    }), ie = { set: function(t, e, i) { return !1 === e ? Z.removeAttr(t, i) : t.setAttribute(i, i), i } }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = ne[e] || Z.find.attr;
        ne[e] = function(t, e, n) { var s, o; return n || (o = ne[e], ne[e] = s, s = null != i(t, e, n) ? e.toLowerCase() : null, ne[e] = o), s }
    });
    var se = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({ prop: function(t, e) { return mt(this, Z.prop, t, e, arguments.length > 1) }, removeProp: function(t) { return this.each(function() { delete this[Z.propFix[t] || t] }) } }), Z.extend({ propFix: { for: "htmlFor", class: "className" }, prop: function(t, e, i) { var n, s, o, r = t.nodeType; if (t && 3 !== r && 8 !== r && 2 !== r) return o = 1 !== r || !Z.isXMLDoc(t), o && (e = Z.propFix[e] || e, s = Z.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e] }, propHooks: { tabIndex: { get: function(t) { return t.hasAttribute("tabindex") || se.test(t.nodeName) || t.href ? t.tabIndex : -1 } } } }), Q.optSelected || (Z.propHooks.selected = { get: function(t) { var e = t.parentNode; return e && e.parentNode && e.parentNode.selectedIndex, null } }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { Z.propFix[this.toLowerCase()] = this });
    var oe = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function(t) {
            var e, i, n, s, o, r, a = "string" == typeof t && t,
                l = 0,
                c = this.length;
            if (Z.isFunction(t)) return this.each(function(e) { Z(this).addClass(t.call(this, e, this.className)) });
            if (a)
                for (e = (t || "").match(dt) || []; c > l; l++)
                    if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(oe, " ") : " ")) {
                        for (o = 0; s = e[o++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        r = Z.trim(n), i.className !== r && (i.className = r)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, n, s, o, r, a = 0 === arguments.length || "string" == typeof t && t,
                l = 0,
                c = this.length;
            if (Z.isFunction(t)) return this.each(function(e) { Z(this).removeClass(t.call(this, e, this.className)) });
            if (a)
                for (e = (t || "").match(dt) || []; c > l; l++)
                    if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(oe, " ") : "")) {
                        for (o = 0; s = e[o++];)
                            for (; n.indexOf(" " + s + " ") >= 0;) n = n.replace(" " + s + " ", " ");
                        r = t ? Z.trim(n) : "", i.className !== r && (i.className = r)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(Z.isFunction(t) ? function(i) { Z(this).toggleClass(t.call(this, i, this.className, e), e) } : function() {
                if ("string" === i)
                    for (var e, n = 0, s = Z(this), o = t.match(dt) || []; e = o[n++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                else(i === Tt || "boolean" === i) && (this.className && gt.set(this, "__className__", this.className), this.className = this.className || !1 === t ? "" : gt.get(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(oe, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    });
    var re = /\r/g;
    Z.fn.extend({
        val: function(t) {
            var e, i, n, s = this[0];
            return arguments.length ? (n = Z.isFunction(t), this.each(function(i) {
                var s;
                1 === this.nodeType && (s = n ? t.call(this, i, Z(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : Z.isArray(s) && (s = Z.map(s, function(t) { return null == t ? "" : t + "" })), (e = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
            })) : s ? (e = Z.valHooks[s.type] || Z.valHooks[s.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : (i = s.value, "string" == typeof i ? i.replace(re, "") : null == i ? "" : i)) : void 0
        }
    }), Z.extend({
        valHooks: {
            option: { get: function(t) { var e = Z.find.attr(t, "value"); return null != e ? e : Z.trim(Z.text(t)) } },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options, s = t.selectedIndex, o = "select-one" === t.type || 0 > s, r = o ? null : [], a = o ? s + 1 : n.length, l = 0 > s ? a : o ? s : 0; a > l; l++)
                        if (i = n[l], !(!i.selected && l !== s || (Q.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && Z.nodeName(i.parentNode, "optgroup"))) {
                            if (e = Z(i).val(), o) return e;
                            r.push(e)
                        }
                    return r
                },
                set: function(t, e) { for (var i, n, s = t.options, o = Z.makeArray(e), r = s.length; r--;) n = s[r], (n.selected = Z.inArray(n.value, o) >= 0) && (i = !0); return i || (t.selectedIndex = -1), o }
            }
        }
    }), Z.each(["radio", "checkbox"], function() { Z.valHooks[this] = { set: function(t, e) { return Z.isArray(e) ? t.checked = Z.inArray(Z(t).val(), e) >= 0 : void 0 } }, Q.checkOn || (Z.valHooks[this].get = function(t) { return null === t.getAttribute("value") ? "on" : t.value }) }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) { Z.fn[e] = function(t, i) { return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e) } }), Z.fn.extend({ hover: function(t, e) { return this.mouseenter(t).mouseleave(e || t) }, bind: function(t, e, i) { return this.on(t, null, e, i) }, unbind: function(t, e) { return this.off(t, null, e) }, delegate: function(t, e, i, n) { return this.on(e, t, i, n) }, undelegate: function(t, e, i) { return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i) } });
    var ae = Z.now(),
        le = /\?/;
    Z.parseJSON = function(t) { return JSON.parse(t + "") }, Z.parseXML = function(t) { var e, i; if (!t || "string" != typeof t) return null; try { i = new DOMParser, e = i.parseFromString(t, "text/xml") } catch (t) { e = void 0 } return (!e || e.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + t), e };
    var ce, ue, he = /#.*$/,
        de = /([?&])_=[^&]*/,
        pe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        fe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        me = /^(?:GET|HEAD)$/,
        ge = /^\/\//,
        ve = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        _e = {},
        ye = {},
        be = "*/".concat("*");
    try { ue = location.href } catch (t) { ue = G.createElement("a"), ue.href = "", ue = ue.href }
    ce = ve.exec(ue.toLowerCase()) || [], Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: ue, type: "GET", isLocal: fe.test(ce[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": be, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": Z.parseJSON, "text xml": Z.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(t, e) { return e ? L(L(t, Z.ajaxSettings), e) : L(Z.ajaxSettings, t) },
        ajaxPrefilter: H(_e),
        ajaxTransport: H(ye),
        ajax: function(t, e) {
            function i(t, e, i, r) {
                var l, u, v, _, b, C = e;
                2 !== y && (y = 2, a && clearTimeout(a), n = void 0, o = r || "", w.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, i && (_ = z(h, w, i)), _ = j(h, _, w, l), l ? (h.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (Z.lastModified[s] = b), (b = w.getResponseHeader("etag")) && (Z.etag[s] = b)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = _.state, u = _.data, v = _.error, l = !v)) : (v = C, (t || !C) && (C = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || C) + "", l ? f.resolveWith(d, [u, C, w]) : f.rejectWith(d, [w, C, v]), w.statusCode(g), g = void 0, c && p.trigger(l ? "ajaxSuccess" : "ajaxError", [w, h, l ? u : v]), m.fireWith(d, [w, C]), c && (p.trigger("ajaxComplete", [w, h]), --Z.active || Z.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var n, s, o, r, a, l, c, u, h = Z.ajaxSetup({}, e),
                d = h.context || h,
                p = h.context && (d.nodeType || d.jquery) ? Z(d) : Z.event,
                f = Z.Deferred(),
                m = Z.Callbacks("once memory"),
                g = h.statusCode || {},
                v = {},
                _ = {},
                y = 0,
                b = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === y) {
                            if (!r)
                                for (r = {}; e = pe.exec(o);) r[e[1].toLowerCase()] = e[2];
                            e = r[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() { return 2 === y ? o : null },
                    setRequestHeader: function(t, e) { var i = t.toLowerCase(); return y || (t = _[i] = _[i] || t, v[t] = e), this },
                    overrideMimeType: function(t) { return y || (h.mimeType = t), this },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > y)
                                for (e in t) g[e] = [g[e], t[e]];
                            else w.always(t[w.status]);
                        return this
                    },
                    abort: function(t) { var e = t || b; return n && n.abort(e), i(0, e), this }
                };
            if (f.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, h.url = ((t || h.url || ue) + "").replace(he, "").replace(ge, ce[1] + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = Z.trim(h.dataType || "*").toLowerCase().match(dt) || [""], null == h.crossDomain && (l = ve.exec(h.url.toLowerCase()), h.crossDomain = !(!l || l[1] === ce[1] && l[2] === ce[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (ce[3] || ("http:" === ce[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = Z.param(h.data, h.traditional)), $(_e, h, e, w), 2 === y) return w;
            c = h.global, c && 0 == Z.active++ && Z.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !me.test(h.type), s = h.url, h.hasContent || (h.data && (s = h.url += (le.test(s) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (h.url = de.test(s) ? s.replace(de, "$1_=" + ae++) : s + (le.test(s) ? "&" : "?") + "_=" + ae++)), h.ifModified && (Z.lastModified[s] && w.setRequestHeader("If-Modified-Since", Z.lastModified[s]), Z.etag[s] && w.setRequestHeader("If-None-Match", Z.etag[s])), (h.data && h.hasContent && !1 !== h.contentType || e.contentType) && w.setRequestHeader("Content-Type", h.contentType), w.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + be + "; q=0.01" : "") : h.accepts["*"]);
            for (u in h.headers) w.setRequestHeader(u, h.headers[u]);
            if (h.beforeSend && (!1 === h.beforeSend.call(d, w, h) || 2 === y)) return w.abort();
            b = "abort";
            for (u in { success: 1, error: 1, complete: 1 }) w[u](h[u]);
            if (n = $(ye, h, e, w)) {
                w.readyState = 1, c && p.trigger("ajaxSend", [w, h]), h.async && h.timeout > 0 && (a = setTimeout(function() { w.abort("timeout") }, h.timeout));
                try { y = 1, n.send(v, i) } catch (t) {
                    if (!(2 > y)) throw t;
                    i(-1, t)
                }
            } else i(-1, "No Transport");
            return w
        },
        getJSON: function(t, e, i) { return Z.get(t, e, i, "json") },
        getScript: function(t, e) { return Z.get(t, void 0, e, "script") }
    }), Z.each(["get", "post"], function(t, e) { Z[e] = function(t, i, n, s) { return Z.isFunction(i) && (s = s || n, n = i, i = void 0), Z.ajax({ url: t, type: e, dataType: s, data: i, success: n }) } }), Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) { Z.fn[e] = function(t) { return this.on(e, t) } }), Z._evalUrl = function(t) { return Z.ajax({ url: t, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 }) }, Z.fn.extend({
        wrapAll: function(t) { var e; return Z.isFunction(t) ? this.each(function(e) { Z(this).wrapAll(t.call(this, e)) }) : (this[0] && (e = Z(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() { for (var t = this; t.firstElementChild;) t = t.firstElementChild; return t }).append(this)), this) },
        wrapInner: function(t) {
            return this.each(Z.isFunction(t) ? function(e) { Z(this).wrapInner(t.call(this, e)) } : function() {
                var e = Z(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) { var e = Z.isFunction(t); return this.each(function(i) { Z(this).wrapAll(e ? t.call(this, i) : t) }) },
        unwrap: function() { return this.parent().each(function() { Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes) }).end() }
    }), Z.expr.filters.hidden = function(t) { return t.offsetWidth <= 0 && t.offsetHeight <= 0 }, Z.expr.filters.visible = function(t) { return !Z.expr.filters.hidden(t) };
    var we = /%20/g,
        Ce = /\[\]$/,
        xe = /\r?\n/g,
        Te = /^(?:submit|button|image|reset|file)$/i,
        Se = /^(?:input|select|textarea|keygen)/i;
    Z.param = function(t, e) {
        var i, n = [],
            s = function(t, e) { e = Z.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e) };
        if (void 0 === e && (e = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(t) || t.jquery && !Z.isPlainObject(t)) Z.each(t, function() { s(this.name, this.value) });
        else
            for (i in t) F(i, t[i], e, s);
        return n.join("&").replace(we, "+")
    }, Z.fn.extend({ serialize: function() { return Z.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var t = Z.prop(this, "elements"); return t ? Z.makeArray(t) : this }).filter(function() { var t = this.type; return this.name && !Z(this).is(":disabled") && Se.test(this.nodeName) && !Te.test(t) && (this.checked || !xt.test(t)) }).map(function(t, e) { var i = Z(this).val(); return null == i ? null : Z.isArray(i) ? Z.map(i, function(t) { return { name: e.name, value: t.replace(xe, "\r\n") } }) : { name: e.name, value: i.replace(xe, "\r\n") } }).get() } }), Z.ajaxSettings.xhr = function() { try { return new XMLHttpRequest } catch (t) {} };
    var ke = 0,
        De = {},
        Ee = { 0: 200, 1223: 204 },
        Ie = Z.ajaxSettings.xhr();
    t.ActiveXObject && Z(t).on("unload", function() { for (var t in De) De[t]() }), Q.cors = !!Ie && "withCredentials" in Ie, Q.ajax = Ie = !!Ie, Z.ajaxTransport(function(t) {
        var e;
        return Q.cors || Ie && !t.crossDomain ? {
            send: function(i, n) {
                var s, o = t.xhr(),
                    r = ++ke;
                if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) o[s] = t.xhrFields[s];
                t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (s in i) o.setRequestHeader(s, i[s]);
                e = function(t) { return function() { e && (delete De[r], e = o.onload = o.onerror = null, "abort" === t ? o.abort() : "error" === t ? n(o.status, o.statusText) : n(Ee[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? { text: o.responseText } : void 0, o.getAllResponseHeaders())) } }, o.onload = e(), o.onerror = e("error"), e = De[r] = e("abort");
                try { o.send(t.hasContent && t.data || null) } catch (t) { if (e) throw t }
            },
            abort: function() { e && e() }
        } : void 0
    }), Z.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(t) { return Z.globalEval(t), t } } }), Z.ajaxPrefilter("script", function(t) { void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET") }), Z.ajaxTransport("script", function(t) { if (t.crossDomain) { var e, i; return { send: function(n, s) { e = Z("<script>").prop({ async: !0, charset: t.scriptCharset, src: t.url }).on("load error", i = function(t) { e.remove(), i = null, t && s("error" === t.type ? 404 : 200, t.type) }), G.head.appendChild(e[0]) }, abort: function() { i && i() } } } });
    var Pe = [],
        Ae = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var t = Pe.pop() || Z.expando + "_" + ae++; return this[t] = !0, t } }), Z.ajaxPrefilter("json jsonp", function(e, i, n) { var s, o, r, a = !1 !== e.jsonp && (Ae.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ae.test(e.data) && "data"); return a || "jsonp" === e.dataTypes[0] ? (s = e.jsonpCallback = Z.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ae, "$1" + s) : !1 !== e.jsonp && (e.url += (le.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function() { return r || Z.error(s + " was not called"), r[0] }, e.dataTypes[0] = "json", o = t[s], t[s] = function() { r = arguments }, n.always(function() { t[s] = o, e[s] && (e.jsonpCallback = i.jsonpCallback, Pe.push(s)), r && Z.isFunction(o) && o(r[0]), r = o = void 0 }), "script") : void 0 }), Z.parseHTML = function(t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || G;
        var n = rt.exec(t),
            s = !i && [];
        return n ? [e.createElement(n[1])] : (n = Z.buildFragment([t], e, s), s && s.length && Z(s).remove(), Z.merge([], n.childNodes))
    };
    var Oe = Z.fn.load;
    Z.fn.load = function(t, e, i) {
        if ("string" != typeof t && Oe) return Oe.apply(this, arguments);
        var n, s, o, r = this,
            a = t.indexOf(" ");
        return a >= 0 && (n = Z.trim(t.slice(a)), t = t.slice(0, a)), Z.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"), r.length > 0 && Z.ajax({ url: t, type: s, dataType: "html", data: e }).done(function(t) { o = arguments, r.html(n ? Z("<div>").append(Z.parseHTML(t)).find(n) : t) }).complete(i && function(t, e) { r.each(i, o || [t.responseText, e, t]) }), this
    }, Z.expr.filters.animated = function(t) { return Z.grep(Z.timers, function(e) { return t === e.elem }).length };
    var Ne = t.document.documentElement;
    Z.offset = {
        setOffset: function(t, e, i) {
            var n, s, o, r, a, l, c, u = Z.css(t, "position"),
                h = Z(t),
                d = {};
            "static" === u && (t.style.position = "relative"), a = h.offset(), o = Z.css(t, "top"), l = Z.css(t, "left"), c = ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1, c ? (n = h.position(), r = n.top, s = n.left) : (r = parseFloat(o) || 0, s = parseFloat(l) || 0), Z.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (d.top = e.top - a.top + r), null != e.left && (d.left = e.left - a.left + s), "using" in e ? e.using.call(t, d) : h.css(d)
        }
    }, Z.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) { Z.offset.setOffset(this, t, e) });
            var e, i, n = this[0],
                s = { top: 0, left: 0 },
                o = n && n.ownerDocument;
            return o ? (e = o.documentElement, Z.contains(e, n) ? (typeof n.getBoundingClientRect !== Tt && (s = n.getBoundingClientRect()), i = R(o), { top: s.top + i.pageYOffset - e.clientTop, left: s.left + i.pageXOffset - e.clientLeft }) : s) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, i = this[0],
                    n = { top: 0, left: 0 };
                return "fixed" === Z.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), Z.nodeName(t[0], "html") || (n = t.offset()), n.top += Z.css(t[0], "borderTopWidth", !0), n.left += Z.css(t[0], "borderLeftWidth", !0)), { top: e.top - n.top - Z.css(i, "marginTop", !0), left: e.left - n.left - Z.css(i, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { for (var t = this.offsetParent || Ne; t && !Z.nodeName(t, "html") && "static" === Z.css(t, "position");) t = t.offsetParent; return t || Ne }) }
    }), Z.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, i) {
        var n = "pageYOffset" === i;
        Z.fn[e] = function(s) { return mt(this, function(e, s, o) { var r = R(e); return void 0 === o ? r ? r[i] : e[s] : void(r ? r.scrollTo(n ? t.pageXOffset : o, n ? o : t.pageYOffset) : e[s] = o) }, e, s, arguments.length, null) }
    }), Z.each(["top", "left"], function(t, e) { Z.cssHooks[e] = C(Q.pixelPosition, function(t, i) { return i ? (i = w(t, e), Rt.test(i) ? Z(t).position()[e] + "px" : i) : void 0 }) }), Z.each({ Height: "height", Width: "width" }, function(t, e) {
        Z.each({ padding: "inner" + t, content: e, "": "outer" + t }, function(i, n) {
            Z.fn[n] = function(n, s) {
                var o = arguments.length && (i || "boolean" != typeof n),
                    r = i || (!0 === n || !0 === s ? "margin" : "border");
                return mt(this, function(e, i, n) { var s; return Z.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? Z.css(e, i, r) : Z.style(e, i, n, r) }, e, o ? n : void 0, o, null)
            }
        })
    }), Z.fn.size = function() { return this.length }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() { return Z });
    var Me = t.jQuery,
        He = t.$;
    return Z.noConflict = function(e) { return t.$ === Z && (t.$ = He), e && t.jQuery === Z && (t.jQuery = Me), Z }, typeof e === Tt && (t.jQuery = t.$ = Z), Z
}),
function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery) }(function(t) {
    function e(t) {
        for (var e = t.css("visibility");
            "inherit" === e;) t = t.parent(), e = t.css("visibility");
        return "hidden" !== e
    }

    function i(t) {
        for (var e, i; t.length && t[0] !== document;) {
            if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
            t = t.parent()
        }
        return 0
    }

    function n() { this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }, this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1 }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = s(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) }

    function s(e) { var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"; return e.on("mouseout", i, function() { t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover") }).on("mouseover", i, o) }

    function o() { t.datepicker._isDisabledDatepicker(p.inline ? p.dpDiv.parent()[0] : p.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover")) }

    function r(e, i) { t.extend(e, i); for (var n in i) null == i[n] && (e[n] = i[n]); return e }

    function a(t) {
        return function() {
            var e = this.element.val();
            t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
        }
    }
    t.ui = t.ui || {}, t.ui.version = "1.12.1";
    var l = 0,
        c = Array.prototype.slice;
    t.cleanData = function(e) {
            return function(i) {
                var n, s, o;
                for (o = 0; null != (s = i[o]); o++) try {
                    (n = t._data(s, "events")) && n.remove && t(s).triggerHandler("remove")
                } catch (t) {}
                e(i)
            }
        }(t.cleanData), t.widget = function(e, i, n) {
            var s, o, r, a = {},
                l = e.split(".")[0];
            e = e.split(".")[1];
            var c = l + "-" + e;
            return n || (n = i, i = t.Widget), t.isArray(n) && (n = t.extend.apply(null, [{}].concat(n))), t.expr[":"][c.toLowerCase()] = function(e) { return !!t.data(e, c) }, t[l] = t[l] || {}, s = t[l][e], o = t[l][e] = function(t, e) { return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new o(t, e) }, t.extend(o, s, { version: n.version, _proto: t.extend({}, n), _childConstructors: [] }), r = new i, r.options = t.widget.extend({}, r.options), t.each(n, function(e, n) {
                return t.isFunction(n) ? void(a[e] = function() {
                    function t() { return i.prototype[e].apply(this, arguments) }

                    function s(t) { return i.prototype[e].apply(this, t) }
                    return function() {
                        var e, i = this._super,
                            o = this._superApply;
                        return this._super = t, this._superApply = s, e = n.apply(this, arguments), this._super = i, this._superApply = o, e
                    }
                }()) : void(a[e] = n)
            }), o.prototype = t.widget.extend(r, { widgetEventPrefix: s ? r.widgetEventPrefix || e : e }, a, { constructor: o, namespace: l, widgetName: e, widgetFullName: c }), s ? (t.each(s._childConstructors, function(e, i) {
                var n = i.prototype;
                t.widget(n.namespace + "." + n.widgetName, o, i._proto)
            }), delete s._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
        }, t.widget.extend = function(e) {
            for (var i, n, s = c.call(arguments, 1), o = 0, r = s.length; r > o; o++)
                for (i in s[o]) n = s[o][i], s[o].hasOwnProperty(i) && void 0 !== n && (e[i] = t.isPlainObject(n) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], n) : t.widget.extend({}, n) : n);
            return e
        }, t.widget.bridge = function(e, i) {
            var n = i.prototype.widgetFullName || e;
            t.fn[e] = function(s) {
                var o = "string" == typeof s,
                    r = c.call(arguments, 1),
                    a = this;
                return o ? this.length || "instance" !== s ? this.each(function() { var i, o = t.data(this, n); return "instance" === s ? (a = o, !1) : o ? t.isFunction(o[s]) && "_" !== s.charAt(0) ? (i = o[s].apply(o, r), i !== o && void 0 !== i ? (a = i && i.jquery ? a.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + s + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + s + "'") }) : a = void 0 : (r.length && (s = t.widget.extend.apply(null, [s].concat(r))), this.each(function() {
                    var e = t.data(this, n);
                    e ? (e.option(s || {}), e._init && e._init()) : t.data(this, n, new i(s, this))
                })), a
            }
        }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: { classes: {}, disabled: !1, create: null },
            _createWidget: function(e, i) { i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = l++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, { remove: function(t) { t.target === i && this.destroy() } }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init() },
            _getCreateOptions: function() { return {} },
            _getCreateEventData: t.noop,
            _create: t.noop,
            _init: t.noop,
            destroy: function() {
                var e = this;
                this._destroy(), t.each(this.classesElementLookup, function(t, i) { e._removeClass(i, t) }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
            },
            _destroy: t.noop,
            widget: function() { return this.element },
            option: function(e, i) {
                var n, s, o, r = e;
                if (0 === arguments.length) return t.widget.extend({}, this.options);
                if ("string" == typeof e)
                    if (r = {}, n = e.split("."), e = n.shift(), n.length) {
                        for (s = r[e] = t.widget.extend({}, this.options[e]), o = 0; n.length - 1 > o; o++) s[n[o]] = s[n[o]] || {}, s = s[n[o]];
                        if (e = n.pop(), 1 === arguments.length) return void 0 === s[e] ? null : s[e];
                        s[e] = i
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                        r[e] = i
                    }
                return this._setOptions(r), this
            },
            _setOptions: function(t) { var e; for (e in t) this._setOption(e, t[e]); return this },
            _setOption: function(t, e) { return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this },
            _setOptionClasses: function(e) { var i, n, s; for (i in e) s = this.classesElementLookup[i], e[i] !== this.options.classes[i] && s && s.length && (n = t(s.get()), this._removeClass(s, i), n.addClass(this._classes({ element: n, keys: i, classes: e, add: !0 }))) },
            _setOptionDisabled: function(t) { this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus")) },
            enable: function() { return this._setOptions({ disabled: !1 }) },
            disable: function() { return this._setOptions({ disabled: !0 }) },
            _classes: function(e) {
                function i(i, o) { var r, a; for (a = 0; i.length > a; a++) r = s.classesElementLookup[i[a]] || t(), r = t(e.add ? t.unique(r.get().concat(e.element.get())) : r.not(e.element).get()), s.classesElementLookup[i[a]] = r, n.push(i[a]), o && e.classes[i[a]] && n.push(e.classes[i[a]]) }
                var n = [],
                    s = this;
                return e = t.extend({ element: this.element, classes: this.options.classes || {} }, e), this._on(e.element, { remove: "_untrackClassesElement" }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), n.join(" ")
            },
            _untrackClassesElement: function(e) {
                var i = this;
                t.each(i.classesElementLookup, function(n, s) {-1 !== t.inArray(e.target, s) && (i.classesElementLookup[n] = t(s.not(e.target).get())) })
            },
            _removeClass: function(t, e, i) { return this._toggleClass(t, e, i, !1) },
            _addClass: function(t, e, i) { return this._toggleClass(t, e, i, !0) },
            _toggleClass: function(t, e, i, n) {
                n = "boolean" == typeof n ? n : i;
                var s = "string" == typeof t || null === t,
                    o = { extra: s ? e : i, keys: s ? t : e, element: s ? this.element : t, add: n };
                return o.element.toggleClass(this._classes(o), n), this
            },
            _on: function(e, i, n) {
                var s, o = this;
                "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()), t.each(n, function(n, r) {
                    function a() { return e || !0 !== o.options.disabled && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? o[r] : r).apply(o, arguments) : void 0 }
                    "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
                    var l = n.match(/^([\w:-]*)\s*(.*)$/),
                        c = l[1] + o.eventNamespace,
                        u = l[2];
                    u ? s.on(c, u, a) : i.on(c, a)
                })
            },
            _off: function(e, i) { i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get()) },
            _delay: function(t, e) {
                function i() { return ("string" == typeof t ? n[t] : t).apply(n, arguments) }
                var n = this;
                return setTimeout(i, e || 0)
            },
            _hoverable: function(e) { this.hoverable = this.hoverable.add(e), this._on(e, { mouseenter: function(e) { this._addClass(t(e.currentTarget), null, "ui-state-hover") }, mouseleave: function(e) { this._removeClass(t(e.currentTarget), null, "ui-state-hover") } }) },
            _focusable: function(e) { this.focusable = this.focusable.add(e), this._on(e, { focusin: function(e) { this._addClass(t(e.currentTarget), null, "ui-state-focus") }, focusout: function(e) { this._removeClass(t(e.currentTarget), null, "ui-state-focus") } }) },
            _trigger: function(e, i, n) {
                var s, o, r = this.options[e];
                if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                    for (s in o) s in i || (i[s] = o[s]);
                return this.element.trigger(i, n), !(t.isFunction(r) && !1 === r.apply(this.element[0], [i].concat(n)) || i.isDefaultPrevented())
            }
        }, t.each({ show: "fadeIn", hide: "fadeOut" }, function(e, i) {
            t.Widget.prototype["_" + e] = function(n, s, o) {
                "string" == typeof s && (s = { effect: s });
                var r, a = s ? !0 === s || "number" == typeof s ? i : s.effect || i : e;
                s = s || {}, "number" == typeof s && (s = { duration: s }), r = !t.isEmptyObject(s), s.complete = o, s.delay && n.delay(s.delay), r && t.effects && t.effects.effect[a] ? n[e](s) : a !== e && n[a] ? n[a](s.duration, s.easing, o) : n.queue(function(i) { t(this)[e](), o && o.call(n[0]), i() })
            }
        }), t.widget,
        function() {
            function e(t, e, i) { return [parseFloat(t[0]) * (h.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (h.test(t[1]) ? i / 100 : 1)] }

            function i(e, i) { return parseInt(t.css(e, i), 10) || 0 }

            function n(e) {
                var i = e[0];
                return 9 === i.nodeType ? { width: e.width(), height: e.height(), offset: { top: 0, left: 0 } } : t.isWindow(i) ? { width: e.width(), height: e.height(), offset: { top: e.scrollTop(), left: e.scrollLeft() } } : i.preventDefault ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } } : { width: e.outerWidth(), height: e.outerHeight(), offset: e.offset() }
            }
            var s, o = Math.max,
                r = Math.abs,
                a = /left|center|right/,
                l = /top|center|bottom/,
                c = /[\+\-]\d+(\.[\d]+)?%?/,
                u = /^\w+/,
                h = /%$/,
                d = t.fn.position;
            t.position = {
                scrollbarWidth: function() {
                    if (void 0 !== s) return s;
                    var e, i, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        o = n.children()[0];
                    return t("body").append(n), e = o.offsetWidth, n.css("overflow", "scroll"), i = o.offsetWidth, e === i && (i = n[0].clientWidth), n.remove(), s = e - i
                },
                getScrollInfo: function(e) {
                    var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                        n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                        s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth;
                    return { width: "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0, height: s ? t.position.scrollbarWidth() : 0 }
                },
                getWithinInfo: function(e) {
                    var i = t(e || window),
                        n = t.isWindow(i[0]),
                        s = !!i[0] && 9 === i[0].nodeType;
                    return { element: i, isWindow: n, isDocument: s, offset: n || s ? { left: 0, top: 0 } : t(e).offset(), scrollLeft: i.scrollLeft(), scrollTop: i.scrollTop(), width: i.outerWidth(), height: i.outerHeight() }
                }
            }, t.fn.position = function(s) {
                if (!s || !s.of) return d.apply(this, arguments);
                s = t.extend({}, s);
                var h, p, f, m, g, v, _ = t(s.of),
                    y = t.position.getWithinInfo(s.within),
                    b = t.position.getScrollInfo(y),
                    w = (s.collision || "flip").split(" "),
                    C = {};
                return v = n(_), _[0].preventDefault && (s.at = "left top"), p = v.width, f = v.height, m = v.offset, g = t.extend({}, m), t.each(["my", "at"], function() {
                    var t, e, i = (s[this] || "").split(" ");
                    1 === i.length && (i = a.test(i[0]) ? i.concat(["center"]) : l.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = a.test(i[0]) ? i[0] : "center", i[1] = l.test(i[1]) ? i[1] : "center", t = c.exec(i[0]), e = c.exec(i[1]), C[this] = [t ? t[0] : 0, e ? e[0] : 0], s[this] = [u.exec(i[0])[0], u.exec(i[1])[0]]
                }), 1 === w.length && (w[1] = w[0]), "right" === s.at[0] ? g.left += p : "center" === s.at[0] && (g.left += p / 2), "bottom" === s.at[1] ? g.top += f : "center" === s.at[1] && (g.top += f / 2), h = e(C.at, p, f), g.left += h[0], g.top += h[1], this.each(function() {
                    var n, a, l = t(this),
                        c = l.outerWidth(),
                        u = l.outerHeight(),
                        d = i(this, "marginLeft"),
                        v = i(this, "marginTop"),
                        x = c + d + i(this, "marginRight") + b.width,
                        T = u + v + i(this, "marginBottom") + b.height,
                        S = t.extend({}, g),
                        k = e(C.my, l.outerWidth(), l.outerHeight());
                    "right" === s.my[0] ? S.left -= c : "center" === s.my[0] && (S.left -= c / 2), "bottom" === s.my[1] ? S.top -= u : "center" === s.my[1] && (S.top -= u / 2), S.left += k[0], S.top += k[1], n = { marginLeft: d, marginTop: v }, t.each(["left", "top"], function(e, i) { t.ui.position[w[e]] && t.ui.position[w[e]][i](S, { targetWidth: p, targetHeight: f, elemWidth: c, elemHeight: u, collisionPosition: n, collisionWidth: x, collisionHeight: T, offset: [h[0] + k[0], h[1] + k[1]], my: s.my, at: s.at, within: y, elem: l }) }), s.using && (a = function(t) {
                        var e = m.left - S.left,
                            i = e + p - c,
                            n = m.top - S.top,
                            a = n + f - u,
                            h = { target: { element: _, left: m.left, top: m.top, width: p, height: f }, element: { element: l, left: S.left, top: S.top, width: c, height: u }, horizontal: 0 > i ? "left" : e > 0 ? "right" : "center", vertical: 0 > a ? "top" : n > 0 ? "bottom" : "middle" };
                        c > p && p > r(e + i) && (h.horizontal = "center"), u > f && f > r(n + a) && (h.vertical = "middle"), h.important = o(r(e), r(i)) > o(r(n), r(a)) ? "horizontal" : "vertical", s.using.call(this, t, h)
                    }), l.offset(t.extend(S, { using: a }))
                })
            }, t.ui.position = {
                fit: {
                    left: function(t, e) {
                        var i, n = e.within,
                            s = n.isWindow ? n.scrollLeft : n.offset.left,
                            r = n.width,
                            a = t.left - e.collisionPosition.marginLeft,
                            l = s - a,
                            c = a + e.collisionWidth - r - s;
                        e.collisionWidth > r ? l > 0 && 0 >= c ? (i = t.left + l + e.collisionWidth - r - s, t.left += l - i) : t.left = c > 0 && 0 >= l ? s : l > c ? s + r - e.collisionWidth : s : l > 0 ? t.left += l : c > 0 ? t.left -= c : t.left = o(t.left - a, t.left)
                    },
                    top: function(t, e) {
                        var i, n = e.within,
                            s = n.isWindow ? n.scrollTop : n.offset.top,
                            r = e.within.height,
                            a = t.top - e.collisionPosition.marginTop,
                            l = s - a,
                            c = a + e.collisionHeight - r - s;
                        e.collisionHeight > r ? l > 0 && 0 >= c ? (i = t.top + l + e.collisionHeight - r - s, t.top += l - i) : t.top = c > 0 && 0 >= l ? s : l > c ? s + r - e.collisionHeight : s : l > 0 ? t.top += l : c > 0 ? t.top -= c : t.top = o(t.top - a, t.top)
                    }
                },
                flip: {
                    left: function(t, e) {
                        var i, n, s = e.within,
                            o = s.offset.left + s.scrollLeft,
                            a = s.width,
                            l = s.isWindow ? s.scrollLeft : s.offset.left,
                            c = t.left - e.collisionPosition.marginLeft,
                            u = c - l,
                            h = c + e.collisionWidth - a - l,
                            d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                            p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                            f = -2 * e.offset[0];
                        0 > u ? (0 > (i = t.left + d + p + f + e.collisionWidth - a - o) || r(u) > i) && (t.left += d + p + f) : h > 0 && ((n = t.left - e.collisionPosition.marginLeft + d + p + f - l) > 0 || h > r(n)) && (t.left += d + p + f)
                    },
                    top: function(t, e) {
                        var i, n, s = e.within,
                            o = s.offset.top + s.scrollTop,
                            a = s.height,
                            l = s.isWindow ? s.scrollTop : s.offset.top,
                            c = t.top - e.collisionPosition.marginTop,
                            u = c - l,
                            h = c + e.collisionHeight - a - l,
                            d = "top" === e.my[1],
                            p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                            f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                            m = -2 * e.offset[1];
                        0 > u ? (0 > (n = t.top + p + f + m + e.collisionHeight - a - o) || r(u) > n) && (t.top += p + f + m) : h > 0 && ((i = t.top - e.collisionPosition.marginTop + p + f + m - l) > 0 || h > r(i)) && (t.top += p + f + m)
                    }
                },
                flipfit: { left: function() { t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments) }, top: function() { t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments) } }
            }
        }(), t.ui.position, t.extend(t.expr[":"], { data: t.expr.createPseudo ? t.expr.createPseudo(function(e) { return function(i) { return !!t.data(i, e) } }) : function(e, i, n) { return !!t.data(e, n[3]) } }), t.fn.extend({ disableSelection: function() { var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown"; return function() { return this.on(t + ".ui-disableSelection", function(t) { t.preventDefault() }) } }(), enableSelection: function() { return this.off(".ui-disableSelection") } }), t.ui.focusable = function(i, n) { var s, o, r, a, l, c = i.nodeName.toLowerCase(); return "area" === c ? (s = i.parentNode, o = s.name, !(!i.href || !o || "map" !== s.nodeName.toLowerCase()) && (r = t("img[usemap='#" + o + "']"), r.length > 0 && r.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(c) ? (a = !i.disabled) && (l = t(i).closest("fieldset")[0]) && (a = !l.disabled) : a = "a" === c ? i.href || n : n, a && t(i).is(":visible") && e(t(i))) }, t.extend(t.expr[":"], { focusable: function(e) { return t.ui.focusable(e, null != t.attr(e, "tabindex")) } }), t.ui.focusable, t.fn.form = function() { return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form) }, t.ui.formResetMixin = {
            _formResetHandler: function() {
                var e = t(this);
                setTimeout(function() {
                    var i = e.data("ui-form-reset-instances");
                    t.each(i, function() { this.refresh() })
                })
            },
            _bindFormResetHandler: function() {
                if (this.form = this.element.form(), this.form.length) {
                    var t = this.form.data("ui-form-reset-instances") || [];
                    t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
                }
            },
            _unbindFormResetHandler: function() {
                if (this.form.length) {
                    var e = this.form.data("ui-form-reset-instances");
                    e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
                }
            }
        }, "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], function(e, i) {
            function n(e, i, n, o) { return t.each(s, function() { i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0) }), i }
            var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                o = i.toLowerCase(),
                r = { innerWidth: t.fn.innerWidth, innerHeight: t.fn.innerHeight, outerWidth: t.fn.outerWidth, outerHeight: t.fn.outerHeight };
            t.fn["inner" + i] = function(e) { return void 0 === e ? r["inner" + i].call(this) : this.each(function() { t(this).css(o, n(this, e) + "px") }) }, t.fn["outer" + i] = function(e, s) { return "number" != typeof e ? r["outer" + i].call(this, e) : this.each(function() { t(this).css(o, n(this, e, !0, s) + "px") }) }
        }), t.fn.addBack = function(t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) }), t.ui.keyCode = { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 }, t.ui.escapeSelector = function() { var t = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g; return function(e) { return e.replace(t, "\\$1") } }(), t.fn.labels = function() { var e, i, n, s, o; return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (s = this.eq(0).parents("label"), n = this.attr("id"), n && (e = this.eq(0).parents().last(), o = e.add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(n) + "']", s = s.add(o.find(i).addBack(i))), this.pushStack(s)) }, t.fn.scrollParent = function(e) {
            var i = this.css("position"),
                n = "absolute" === i,
                s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                o = this.parents().filter(function() { var e = t(this); return (!n || "static" !== e.css("position")) && s.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x")) }).eq(0);
            return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
        }, t.extend(t.expr[":"], {
            tabbable: function(e) {
                var i = t.attr(e, "tabindex"),
                    n = null != i;
                return (!n || i >= 0) && t.ui.focusable(e, n)
            }
        }), t.fn.extend({ uniqueId: function() { var t = 0; return function() { return this.each(function() { this.id || (this.id = "ui-id-" + ++t) }) } }(), removeUniqueId: function() { return this.each(function() { /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id") }) } }), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var u = !1;
    t(document).on("mouseup", function() { u = !1 }), t.widget("ui.mouse", {
        version: "1.12.1",
        options: { cancel: "input, textarea, button, select, option", distance: 1, delay: 0 },
        _mouseInit: function() {
            var e = this;
            this.element.on("mousedown." + this.widgetName, function(t) { return e._mouseDown(t) }).on("click." + this.widgetName, function(i) { return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0 }), this.started = !1
        },
        _mouseDestroy: function() { this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate) },
        _mouseDown: function(e) {
            if (!u) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var i = this,
                    n = 1 === e.which,
                    s = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                return !(n && !s && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() { i.mouseDelayMet = !0 }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) { return i._mouseMove(t) }, this._mouseUpDelegate = function(t) { return i._mouseUp(t) }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), u = !0, !0))
            }
        },
        _mouseMove: function(e) {
            if (this._mouseMoved) {
                if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
                if (!e.which)
                    if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich) return this._mouseUp(e)
            }
            return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function(e) { this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, u = !1, e.preventDefault() },
        _mouseDistanceMet: function(t) { return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance },
        _mouseDelayMet: function() { return this.mouseDelayMet },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() { return !0 }
    }), t.ui.plugin = {
        add: function(e, i, n) { var s, o = t.ui[e].prototype; for (s in n) o.plugins[s] = o.plugins[s] || [], o.plugins[s].push([i, n[s]]) },
        call: function(t, e, i, n) {
            var s, o = t.plugins[e];
            if (o && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                for (s = 0; o.length > s; s++) t.options[o[s][0]] && o[s][1].apply(t.element, i)
        }
    }, t.ui.safeActiveElement = function(t) { var e; try { e = t.activeElement } catch (i) { e = t.body } return e || (e = t.body), e.nodeName || (e = t.body), e }, t.ui.safeBlur = function(e) { e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur") }, t.widget("ui.draggable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: { addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1, drag: null, start: null, stop: null },
        _create: function() { "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit() },
        _setOption: function(t, e) { this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName()) },
        _destroy: function() { return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this._removeHandleClassName(), void this._mouseDestroy()) },
        _mouseCapture: function(e) { var i = this.options; return !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(e), !!this.handle && (this._blurActiveElement(e), this._blockFrames(!0 === i.iframeFix ? "iframe" : i.iframeFix), !0)) },
        _blockFrames: function(e) { this.iframeBlocks = this.document.find(e).map(function() { var e = t(this); return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0] }) },
        _unblockFrames: function() { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) },
        _blurActiveElement: function(e) {
            var i = t.ui.safeActiveElement(this.document[0]);
            t(e.target).closest(i).length || t.ui.safeBlur(i)
        },
        _mouseStart: function(e) { var i = this.options; return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() { return "fixed" === t(this).css("position") }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), !1 === this._trigger("start", e) ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0) },
        _refreshOffsets: function(t) { this.offset = { top: this.positionAbs.top - this.margins.top, left: this.positionAbs.left - this.margins.left, scroll: !1, parent: this._getParentOffset(), relative: this._getRelativeOffset() }, this.offset.click = { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top } },
        _mouseDrag: function(e, i) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var n = this._uiHash();
                if (!1 === this._trigger("drag", e, n)) return this._mouseUp(new t.Event("mouseup", e)), !1;
                this.position = n.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
        },
        _mouseStop: function(e) {
            var i = this,
                n = !1;
            return t.ui.ddmanager && !this.options.dropBehaviour && (n = t.ui.ddmanager.drop(this, e)), this.dropped && (n = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !n || "valid" === this.options.revert && n || !0 === this.options.revert || t.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {!1 !== i._trigger("stop", e) && i._clear() }) : !1 !== this._trigger("stop", e) && this._clear(), !1
        },
        _mouseUp: function(e) { return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e) },
        cancel: function() { return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", { target: this.element[0] })) : this._clear(), this },
        _getHandle: function(e) { return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length },
        _setHandleClassName: function() { this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle") },
        _removeHandleClassName: function() { this._removeClass(this.handleElement, "ui-draggable-handle") },
        _createHelper: function(e) {
            var i = this.options,
                n = t.isFunction(i.helper),
                s = n ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), n && s[0] === this.element[0] && this._setPositionRelative(), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
        },
        _setPositionRelative: function() { /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative") },
        _adjustOffsetFromHelper: function(e) { "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top) },
        _isRootNode: function(t) { return /(html|body)/i.test(t.tagName) || t === this.document[0] },
        _getParentOffset: function() {
            var e = this.offsetParent.offset(),
                i = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = { top: 0, left: 0 }), { top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) }
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
            var t = this.element.position(),
                e = this._isRootNode(this.scrollParent[0]);
            return { top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft()) }
        },
        _cacheMargins: function() { this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0 } },
        _cacheHelperProportions: function() { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } },
        _setContainment: function() {
            var e, i, n, s = this.options,
                o = this.document[0];
            return this.relativeContainer = null, s.containment ? "window" === s.containment ? void(this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === s.containment ? void(this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : s.containment.constructor === Array ? void(this.containment = s.containment) : ("parent" === s.containment && (s.containment = this.helper[0].parentNode), i = t(s.containment), void((n = i[0]) && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i))) : void(this.containment = null)
        },
        _convertPositionTo: function(t, e) {
            e || (e = this.position);
            var i = "absolute" === t ? 1 : -1,
                n = this._isRootNode(this.scrollParent[0]);
            return { top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i, left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i }
        },
        _generatePosition: function(t, e) {
            var i, n, s, o, r = this.options,
                a = this._isRootNode(this.scrollParent[0]),
                l = t.pageX,
                c = t.pageY;
            return a && this.offset.scroll || (this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() }), e && (this.containment && (this.relativeContainer ? (n = this.relativeContainer.offset(), i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (c = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (c = i[3] + this.offset.click.top)), r.grid && (s = r.grid[1] ? this.originalPageY + Math.round((c - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, c = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - r.grid[1] : s + r.grid[1] : s, o = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - r.grid[0] : o + r.grid[0] : o), "y" === r.axis && (l = this.originalPageX), "x" === r.axis && (c = this.originalPageY)), { top: c - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : a ? 0 : this.offset.scroll.top), left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : a ? 0 : this.offset.scroll.left) }
        },
        _clear: function() { this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy() },
        _trigger: function(e, i, n) { return n = n || this._uiHash(), t.ui.plugin.call(this, e, [i, n, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), n.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, n) },
        plugins: {},
        _uiHash: function() { return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs } }
    }), t.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, i, n) {
            var s = t.extend({}, i, { item: n.element });
            n.sortables = [], t(n.options.connectToSortable).each(function() {
                var i = t(this).sortable("instance");
                i && !i.options.disabled && (n.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, s))
            })
        },
        stop: function(e, i, n) {
            var s = t.extend({}, i, { item: n.element });
            n.cancelHelperRemoval = !1, t.each(n.sortables, function() {
                var t = this;
                t.isOver ? (t.isOver = 0, n.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = { position: t.placeholder.css("position"), top: t.placeholder.css("top"), left: t.placeholder.css("left") }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, s))
            })
        },
        drag: function(e, i, n) {
            t.each(n.sortables, function() {
                var s = !1,
                    o = this;
                o.positionAbs = n.positionAbs, o.helperProportions = n.helperProportions, o.offset.click = n.offset.click, o._intersectsWith(o.containerCache) && (s = !0, t.each(n.sortables, function() { return this.positionAbs = n.positionAbs, this.helperProportions = n.helperProportions, this.offset.click = n.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (s = !1), s })), s ? (o.isOver || (o.isOver = 1, n._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function() { return i.helper[0] }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = n.offset.click.top, o.offset.click.left = n.offset.click.left, o.offset.parent.left -= n.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= n.offset.parent.top - o.offset.parent.top, n._trigger("toSortable", e), n.dropped = o.element, t.each(n.sortables, function() { this.refreshPositions() }), n.currentItem = n.element, o.fromOutside = n), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(n._parent), n._refreshOffsets(e), i.position = n._generatePosition(e, !0), n._trigger("fromSortable", e), n.dropped = !1, t.each(n.sortables, function() { this.refreshPositions() }))
            })
        }
    }), t.ui.plugin.add("draggable", "cursor", {
        start: function(e, i, n) {
            var s = t("body"),
                o = n.options;
            s.css("cursor") && (o._cursor = s.css("cursor")), s.css("cursor", o.cursor)
        },
        stop: function(e, i, n) {
            var s = n.options;
            s._cursor && t("body").css("cursor", s._cursor)
        }
    }), t.ui.plugin.add("draggable", "opacity", {
        start: function(e, i, n) {
            var s = t(i.helper),
                o = n.options;
            s.css("opacity") && (o._opacity = s.css("opacity")), s.css("opacity", o.opacity)
        },
        stop: function(e, i, n) {
            var s = n.options;
            s._opacity && t(i.helper).css("opacity", s._opacity)
        }
    }), t.ui.plugin.add("draggable", "scroll", {
        start: function(t, e, i) { i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset()) },
        drag: function(e, i, n) {
            var s = n.options,
                o = !1,
                r = n.scrollParentNotHidden[0],
                a = n.document[0];
            r !== a && "HTML" !== r.tagName ? (s.axis && "x" === s.axis || (n.overflowOffset.top + r.offsetHeight - e.pageY < s.scrollSensitivity ? r.scrollTop = o = r.scrollTop + s.scrollSpeed : e.pageY - n.overflowOffset.top < s.scrollSensitivity && (r.scrollTop = o = r.scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (n.overflowOffset.left + r.offsetWidth - e.pageX < s.scrollSensitivity ? r.scrollLeft = o = r.scrollLeft + s.scrollSpeed : e.pageX - n.overflowOffset.left < s.scrollSensitivity && (r.scrollLeft = o = r.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(a).scrollTop() < s.scrollSensitivity ? o = t(a).scrollTop(t(a).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(a).scrollTop()) < s.scrollSensitivity && (o = t(a).scrollTop(t(a).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (e.pageX - t(a).scrollLeft() < s.scrollSensitivity ? o = t(a).scrollLeft(t(a).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(a).scrollLeft()) < s.scrollSensitivity && (o = t(a).scrollLeft(t(a).scrollLeft() + s.scrollSpeed)))), !1 !== o && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(n, e)
        }
    }), t.ui.plugin.add("draggable", "snap", {
        start: function(e, i, n) {
            var s = n.options;
            n.snapElements = [], t(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each(function() {
                var e = t(this),
                    i = e.offset();
                this !== n.element[0] && n.snapElements.push({ item: this, width: e.outerWidth(), height: e.outerHeight(), top: i.top, left: i.left })
            })
        },
        drag: function(e, i, n) {
            var s, o, r, a, l, c, u, h, d, p, f = n.options,
                m = f.snapTolerance,
                g = i.offset.left,
                v = g + n.helperProportions.width,
                _ = i.offset.top,
                y = _ + n.helperProportions.height;
            for (d = n.snapElements.length - 1; d >= 0; d--) l = n.snapElements[d].left - n.margins.left, c = l + n.snapElements[d].width, u = n.snapElements[d].top - n.margins.top, h = u + n.snapElements[d].height, l - m > v || g > c + m || u - m > y || _ > h + m || !t.contains(n.snapElements[d].item.ownerDocument, n.snapElements[d].item) ? (n.snapElements[d].snapping && n.options.snap.release && n.options.snap.release.call(n.element, e, t.extend(n._uiHash(), { snapItem: n.snapElements[d].item })), n.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (s = m >= Math.abs(u - y), o = m >= Math.abs(h - _), r = m >= Math.abs(l - v), a = m >= Math.abs(c - g), s && (i.position.top = n._convertPositionTo("relative", { top: u - n.helperProportions.height, left: 0 }).top), o && (i.position.top = n._convertPositionTo("relative", { top: h, left: 0 }).top), r && (i.position.left = n._convertPositionTo("relative", { top: 0, left: l - n.helperProportions.width }).left), a && (i.position.left = n._convertPositionTo("relative", { top: 0, left: c }).left)), p = s || o || r || a, "outer" !== f.snapMode && (s = m >= Math.abs(u - _), o = m >= Math.abs(h - y), r = m >= Math.abs(l - g), a = m >= Math.abs(c - v), s && (i.position.top = n._convertPositionTo("relative", { top: u, left: 0 }).top), o && (i.position.top = n._convertPositionTo("relative", { top: h - n.helperProportions.height, left: 0 }).top), r && (i.position.left = n._convertPositionTo("relative", { top: 0, left: l }).left), a && (i.position.left = n._convertPositionTo("relative", { top: 0, left: c - n.helperProportions.width }).left)), !n.snapElements[d].snapping && (s || o || r || a || p) && n.options.snap.snap && n.options.snap.snap.call(n.element, e, t.extend(n._uiHash(), { snapItem: n.snapElements[d].item })), n.snapElements[d].snapping = s || o || r || a || p)
        }
    }), t.ui.plugin.add("draggable", "stack", {
        start: function(e, i, n) {
            var s, o = n.options,
                r = t.makeArray(t(o.stack)).sort(function(e, i) { return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0) });
            r.length && (s = parseInt(t(r[0]).css("zIndex"), 10) || 0, t(r).each(function(e) { t(this).css("zIndex", s + e) }), this.css("zIndex", s + r.length))
        }
    }), t.ui.plugin.add("draggable", "zIndex", {
        start: function(e, i, n) {
            var s = t(i.helper),
                o = n.options;
            s.css("zIndex") && (o._zIndex = s.css("zIndex")), s.css("zIndex", o.zIndex)
        },
        stop: function(e, i, n) {
            var s = n.options;
            s._zIndex && t(i.helper).css("zIndex", s._zIndex)
        }
    }), t.ui.draggable, t.widget("ui.droppable", {
        version: "1.12.1",
        widgetEventPrefix: "drop",
        options: { accept: "*", addClasses: !0, greedy: !1, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null },
        _create: function() {
            var e, i = this.options,
                n = i.accept;
            this.isover = !1, this.isout = !0, this.accept = t.isFunction(n) ? n : function(t) { return t.is(n) }, this.proportions = function() { return arguments.length ? void(e = arguments[0]) : e || (e = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight }) }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable")
        },
        _addToManager: function(e) { t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this) },
        _splice: function(t) { for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1) },
        _destroy: function() {
            var e = t.ui.ddmanager.droppables[this.options.scope];
            this._splice(e)
        },
        _setOption: function(e, i) {
            if ("accept" === e) this.accept = t.isFunction(i) ? i : function(t) {
                return t.is(i)
            };
            else if ("scope" === e) {
                var n = t.ui.ddmanager.droppables[this.options.scope];
                this._splice(n), this._addToManager(i)
            }
            this._super(e, i)
        },
        _activate: function(e) {
            var i = t.ui.ddmanager.current;
            this._addActiveClass(), i && this._trigger("activate", e, this.ui(i))
        },
        _deactivate: function(e) {
            var i = t.ui.ddmanager.current;
            this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i))
        },
        _over: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i)))
        },
        _out: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i)))
        },
        _drop: function(e, i) {
            var n = i || t.ui.ddmanager.current,
                s = !1;
            return !(!n || (n.currentItem || n.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() { var i = t(this).droppable("instance"); return i.options.greedy && !i.options.disabled && i.options.scope === n.options.scope && i.accept.call(i.element[0], n.currentItem || n.element) && h(n, t.extend(i, { offset: i.element.offset() }), i.options.tolerance, e) ? (s = !0, !1) : void 0 }), !s && (!!this.accept.call(this.element[0], n.currentItem || n.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(n)), this.element)))
        },
        ui: function(t) { return { draggable: t.currentItem || t.element, helper: t.helper, position: t.position, offset: t.positionAbs } },
        _addHoverClass: function() { this._addClass("ui-droppable-hover") },
        _removeHoverClass: function() { this._removeClass("ui-droppable-hover") },
        _addActiveClass: function() { this._addClass("ui-droppable-active") },
        _removeActiveClass: function() { this._removeClass("ui-droppable-active") }
    });
    var h = t.ui.intersect = function() {
        function t(t, e, i) { return t >= e && e + i > t }
        return function(e, i, n, s) {
            if (!i.offset) return !1;
            var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
                r = (e.positionAbs || e.position.absolute).top + e.margins.top,
                a = o + e.helperProportions.width,
                l = r + e.helperProportions.height,
                c = i.offset.left,
                u = i.offset.top,
                h = c + i.proportions().width,
                d = u + i.proportions().height;
            switch (n) {
                case "fit":
                    return o >= c && h >= a && r >= u && d >= l;
                case "intersect":
                    return o + e.helperProportions.width / 2 > c && h > a - e.helperProportions.width / 2 && r + e.helperProportions.height / 2 > u && d > l - e.helperProportions.height / 2;
                case "pointer":
                    return t(s.pageY, u, i.proportions().height) && t(s.pageX, c, i.proportions().width);
                case "touch":
                    return (r >= u && d >= r || l >= u && d >= l || u > r && l > d) && (o >= c && h >= o || a >= c && h >= a || c > o && a > h);
                default:
                    return !1
            }
        }
    }();
    t.ui.ddmanager = {
        current: null,
        droppables: { default: [] },
        prepareOffsets: function(e, i) {
            var n, s, o = t.ui.ddmanager.droppables[e.options.scope] || [],
                r = i ? i.type : null,
                a = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
            t: for (n = 0; o.length > n; n++)
                if (!(o[n].options.disabled || e && !o[n].accept.call(o[n].element[0], e.currentItem || e.element))) {
                    for (s = 0; a.length > s; s++)
                        if (a[s] === o[n].element[0]) { o[n].proportions().height = 0; continue t }
                    o[n].visible = "none" !== o[n].element.css("display"), o[n].visible && ("mousedown" === r && o[n]._activate.call(o[n], i), o[n].offset = o[n].element.offset(), o[n].proportions({ width: o[n].element[0].offsetWidth, height: o[n].element[0].offsetHeight }))
                }
        },
        drop: function(e, i) { var n = !1; return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() { this.options && (!this.options.disabled && this.visible && h(e, this, this.options.tolerance, i) && (n = this._drop.call(this, i) || n), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i))) }), n },
        dragStart: function(e, i) { e.element.parentsUntil("body").on("scroll.droppable", function() { e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i) }) },
        drag: function(e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var n, s, o, r = h(e, this, this.options.tolerance, i),
                        a = !r && this.isover ? "isout" : r && !this.isover ? "isover" : null;
                    a && (this.options.greedy && (s = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function() { return t(this).droppable("instance").options.scope === s }), o.length && (n = t(o[0]).droppable("instance"), n.greedyChild = "isover" === a)), n && "isover" === a && (n.isover = !1, n.isout = !0, n._out.call(n, i)), this[a] = !0, this["isout" === a ? "isover" : "isout"] = !1, this["isover" === a ? "_over" : "_out"].call(this, i), n && "isout" === a && (n.isout = !1, n.isover = !0, n._over.call(n, i)))
                }
            })
        },
        dragStop: function(e, i) { e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i) }
    }, !1 !== t.uiBackCompat && t.widget("ui.droppable", t.ui.droppable, { options: { hoverClass: !1, activeClass: !1 }, _addActiveClass: function() { this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass) }, _removeActiveClass: function() { this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass) }, _addHoverClass: function() { this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass) }, _removeHoverClass: function() { this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass) } }), t.ui.droppable, t.widget("ui.resizable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: { alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, classes: { "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se" }, containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null },
        _num: function(t) { return parseFloat(t) || 0 },
        _isNumber: function(t) { return !isNaN(parseFloat(t)) },
        _hasScroll: function(e, i) {
            if ("hidden" === t(e).css("overflow")) return !1;
            var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                s = !1;
            return e[n] > 0 || (e[n] = 1, s = e[n] > 0, e[n] = 0, s)
        },
        _create: function() {
            var e, i = this.options,
                n = this;
            this._addClass("ui-resizable"), t.extend(this, { _aspectRatio: !!i.aspectRatio, aspectRatio: i.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({ position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left") })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = { marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom"), marginLeft: this.originalElement.css("marginLeft") }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", function() { i.disabled || (n._removeClass("ui-resizable-autohide"), n._handles.show()) }).on("mouseleave", function() { i.disabled || n.resizing || (n._addClass("ui-resizable-autohide"), n._handles.hide()) }), this._mouseInit()
        },
        _destroy: function() { this._mouseDestroy(); var e, i = function(e) { t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove() }; return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({ position: e.css("position"), width: e.outerWidth(), height: e.outerHeight(), top: e.css("top"), left: e.css("left") }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this },
        _setOption: function(t, e) {
            switch (this._super(t, e), t) {
                case "handles":
                    this._removeHandles(), this._setupHandles()
            }
        },
        _setupHandles: function() {
            var e, i, n, s, o, r = this.options,
                a = this;
            if (this.handles = r.handles || (t(".ui-resizable-handle", this.element).length ? { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" } : "e,s,se"), this._handles = t(), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), n = this.handles.split(","), this.handles = {}, i = 0; n.length > i; i++) e = t.trim(n[i]), s = "ui-resizable-" + e, o = t("<div>"), this._addClass(o, "ui-resizable-handle " + s), o.css({ zIndex: r.zIndex }), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
            this._renderAxis = function(e) {
                var i, n, s, o;
                e = e || this.element;
                for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], { mousedown: a._mouseDown })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (n = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(), s = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(s, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
            }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function() { a.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), a.axis = o && o[1] ? o[1] : "se") }), r.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
        },
        _removeHandles: function() { this._handles.remove() },
        _mouseCapture: function(e) { var i, n, s = !1; for (i in this.handles)((n = t(this.handles[i])[0]) === e.target || t.contains(n, e.target)) && (s = !0); return !this.options.disabled && s },
        _mouseStart: function(e) {
            var i, n, s, o = this.options,
                r = this.element;
            return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), n = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, n += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = { left: i, top: n }, this.size = this._helper ? { width: this.helper.width(), height: this.helper.height() } : { width: r.width(), height: r.height() }, this.originalSize = this._helper ? { width: r.outerWidth(), height: r.outerHeight() } : { width: r.width(), height: r.height() }, this.sizeDiff = { width: r.outerWidth() - r.width(), height: r.outerHeight() - r.height() }, this.originalPosition = { left: i, top: n }, this.originalMousePosition = { left: e.pageX, top: e.pageY }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, s = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === s ? this.axis + "-resize" : s), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0
        },
        _mouseDrag: function(e) {
            var i, n, s = this.originalMousePosition,
                o = this.axis,
                r = e.pageX - s.left || 0,
                a = e.pageY - s.top || 0,
                l = this._change[o];
            return this._updatePrevProperties(), !!l && (i = l.apply(this, [e, r, a]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), n = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1)
        },
        _mouseStop: function(e) {
            this.resizing = !1;
            var i, n, s, o, r, a, l, c = this.options,
                u = this;
            return this._helper && (i = this._proportionallyResizeElements, n = i.length && /textarea/i.test(i[0].nodeName), s = n && this._hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, o = n ? 0 : u.sizeDiff.width, r = { width: u.helper.width() - o, height: u.helper.height() - s }, a = parseFloat(u.element.css("left")) + (u.position.left - u.originalPosition.left) || null, l = parseFloat(u.element.css("top")) + (u.position.top - u.originalPosition.top) || null, c.animate || this.element.css(t.extend(r, { top: l, left: a })), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !c.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
        },
        _updatePrevProperties: function() { this.prevPosition = { top: this.position.top, left: this.position.left }, this.prevSize = { width: this.size.width, height: this.size.height } },
        _applyChanges: function() { var t = {}; return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t },
        _updateVirtualBoundaries: function(t) {
            var e, i, n, s, o, r = this.options;
            o = { minWidth: this._isNumber(r.minWidth) ? r.minWidth : 0, maxWidth: this._isNumber(r.maxWidth) ? r.maxWidth : 1 / 0, minHeight: this._isNumber(r.minHeight) ? r.minHeight : 0, maxHeight: this._isNumber(r.maxHeight) ? r.maxHeight : 1 / 0 }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, s = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), n > o.minHeight && (o.minHeight = n), o.maxWidth > i && (o.maxWidth = i), o.maxHeight > s && (o.maxHeight = s)), this._vBoundaries = o
        },
        _updateCache: function(t) { this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width) },
        _updateRatio: function(t) {
            var e = this.position,
                i = this.size,
                n = this.axis;
            return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === n && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
        },
        _respectSize: function(t) {
            var e = this._vBoundaries,
                i = this.axis,
                n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                s = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                r = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                a = this.originalPosition.left + this.originalSize.width,
                l = this.originalPosition.top + this.originalSize.height,
                c = /sw|nw|w/.test(i),
                u = /nw|ne|n/.test(i);
            return o && (t.width = e.minWidth), r && (t.height = e.minHeight), n && (t.width = e.maxWidth), s && (t.height = e.maxHeight), o && c && (t.left = a - e.minWidth), n && c && (t.left = a - e.maxWidth), r && u && (t.top = l - e.minHeight), s && u && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
        },
        _getPaddingPlusBorderDimensions: function(t) { for (var e = 0, i = [], n = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], s = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) i[e] = parseFloat(n[e]) || 0, i[e] += parseFloat(s[e]) || 0; return { height: i[0] + i[2], width: i[1] + i[3] } },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({ height: i.height() - this.outerDimensions.height || 0, width: i.width() - this.outerDimensions.width || 0 })
        },
        _renderProxy: function() {
            var e = this.element,
                i = this.options;
            this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({ width: this.element.outerWidth(), height: this.element.outerHeight(), position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++i.zIndex }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: { e: function(t, e) { return { width: this.originalSize.width + e } }, w: function(t, e) { var i = this.originalSize; return { left: this.originalPosition.left + e, width: i.width - e } }, n: function(t, e, i) { var n = this.originalSize; return { top: this.originalPosition.top + i, height: n.height - i } }, s: function(t, e, i) { return { height: this.originalSize.height + i } }, se: function(e, i, n) { return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, n])) }, sw: function(e, i, n) { return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, n])) }, ne: function(e, i, n) { return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, n])) }, nw: function(e, i, n) { return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, n])) } },
        _propagate: function(e, i) { t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui()) },
        plugins: {},
        ui: function() { return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition } }
    }), t.ui.plugin.add("resizable", "animate", {
        stop: function(e) {
            var i = t(this).resizable("instance"),
                n = i.options,
                s = i._proportionallyResizeElements,
                o = s.length && /textarea/i.test(s[0].nodeName),
                r = o && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
                a = o ? 0 : i.sizeDiff.width,
                l = { width: i.size.width - a, height: i.size.height - r },
                c = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                u = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(l, u && c ? { top: u, left: c } : {}), {
                duration: n.animateDuration,
                easing: n.animateEasing,
                step: function() {
                    var n = { width: parseFloat(i.element.css("width")), height: parseFloat(i.element.css("height")), top: parseFloat(i.element.css("top")), left: parseFloat(i.element.css("left")) };
                    s && s.length && t(s[0]).css({ width: n.width, height: n.height }), i._updateCache(n), i._propagate("resize", e)
                }
            })
        }
    }), t.ui.plugin.add("resizable", "containment", {
        start: function() {
            var e, i, n, s, o, r, a, l = t(this).resizable("instance"),
                c = l.options,
                u = l.element,
                h = c.containment,
                d = h instanceof t ? h.get(0) : /parent/.test(h) ? u.parent().get(0) : h;
            d && (l.containerElement = t(d), /document/.test(h) || h === document ? (l.containerOffset = { left: 0, top: 0 }, l.containerPosition = { left: 0, top: 0 }, l.parentData = { element: t(document), left: 0, top: 0, width: t(document).width(), height: t(document).height() || document.body.parentNode.scrollHeight }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, n) { i[t] = l._num(e.css("padding" + n)) }), l.containerOffset = e.offset(), l.containerPosition = e.position(), l.containerSize = { height: e.innerHeight() - i[3], width: e.innerWidth() - i[1] }, n = l.containerOffset, s = l.containerSize.height, o = l.containerSize.width, r = l._hasScroll(d, "left") ? d.scrollWidth : o, a = l._hasScroll(d) ? d.scrollHeight : s, l.parentData = { element: d, left: n.left, top: n.top, width: r, height: a }))
        },
        resize: function(e) {
            var i, n, s, o, r = t(this).resizable("instance"),
                a = r.options,
                l = r.containerOffset,
                c = r.position,
                u = r._aspectRatio || e.shiftKey,
                h = { top: 0, left: 0 },
                d = r.containerElement,
                p = !0;
            d[0] !== document && /static/.test(d.css("position")) && (h = l), c.left < (r._helper ? l.left : 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - l.left : r.position.left - h.left), u && (r.size.height = r.size.width / r.aspectRatio, p = !1), r.position.left = a.helper ? l.left : 0), c.top < (r._helper ? l.top : 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - l.top : r.position.top), u && (r.size.width = r.size.height * r.aspectRatio, p = !1), r.position.top = r._helper ? l.top : 0), s = r.containerElement.get(0) === r.element.parent().get(0), o = /relative|absolute/.test(r.containerElement.css("position")), s && o ? (r.offset.left = r.parentData.left + r.position.left, r.offset.top = r.parentData.top + r.position.top) : (r.offset.left = r.element.offset().left, r.offset.top = r.element.offset().top), i = Math.abs(r.sizeDiff.width + (r._helper ? r.offset.left - h.left : r.offset.left - l.left)), n = Math.abs(r.sizeDiff.height + (r._helper ? r.offset.top - h.top : r.offset.top - l.top)), i + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - i, u && (r.size.height = r.size.width / r.aspectRatio, p = !1)), n + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - n, u && (r.size.width = r.size.height * r.aspectRatio, p = !1)), p || (r.position.left = r.prevPosition.left, r.position.top = r.prevPosition.top, r.size.width = r.prevSize.width, r.size.height = r.prevSize.height)
        },
        stop: function() {
            var e = t(this).resizable("instance"),
                i = e.options,
                n = e.containerOffset,
                s = e.containerPosition,
                o = e.containerElement,
                r = t(e.helper),
                a = r.offset(),
                l = r.outerWidth() - e.sizeDiff.width,
                c = r.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({ left: a.left - s.left - n.left, width: l, height: c }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({ left: a.left - s.left - n.left, width: l, height: c })
        }
    }), t.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var e = t(this).resizable("instance"),
                i = e.options;
            t(i.alsoResize).each(function() {
                var e = t(this);
                e.data("ui-resizable-alsoresize", { width: parseFloat(e.width()), height: parseFloat(e.height()), left: parseFloat(e.css("left")), top: parseFloat(e.css("top")) })
            })
        },
        resize: function(e, i) {
            var n = t(this).resizable("instance"),
                s = n.options,
                o = n.originalSize,
                r = n.originalPosition,
                a = { height: n.size.height - o.height || 0, width: n.size.width - o.width || 0, top: n.position.top - r.top || 0, left: n.position.left - r.left || 0 };
            t(s.alsoResize).each(function() {
                var e = t(this),
                    n = t(this).data("ui-resizable-alsoresize"),
                    s = {},
                    o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                t.each(o, function(t, e) {
                    var i = (n[e] || 0) + (a[e] || 0);
                    i && i >= 0 && (s[e] = i || null)
                }), e.css(s)
            })
        },
        stop: function() { t(this).removeData("ui-resizable-alsoresize") }
    }), t.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var e = t(this).resizable("instance"),
                i = e.size;
            e.ghost = e.originalElement.clone(), e.ghost.css({ opacity: .25, display: "block", position: "relative", height: i.height, width: i.width, margin: 0, left: 0, top: 0 }), e._addClass(e.ghost, "ui-resizable-ghost"), !1 !== t.uiBackCompat && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper)
        },
        resize: function() {
            var e = t(this).resizable("instance");
            e.ghost && e.ghost.css({ position: "relative", height: e.size.height, width: e.size.width })
        },
        stop: function() {
            var e = t(this).resizable("instance");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
        }
    }), t.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var e, i = t(this).resizable("instance"),
                n = i.options,
                s = i.size,
                o = i.originalSize,
                r = i.originalPosition,
                a = i.axis,
                l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid,
                c = l[0] || 1,
                u = l[1] || 1,
                h = Math.round((s.width - o.width) / c) * c,
                d = Math.round((s.height - o.height) / u) * u,
                p = o.width + h,
                f = o.height + d,
                m = n.maxWidth && p > n.maxWidth,
                g = n.maxHeight && f > n.maxHeight,
                v = n.minWidth && n.minWidth > p,
                _ = n.minHeight && n.minHeight > f;
            n.grid = l, v && (p += c), _ && (f += u), m && (p -= c), g && (f -= u), /^(se|s|e)$/.test(a) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(a) ? (i.size.width = p, i.size.height = f, i.position.top = r.top - d) : /^(sw)$/.test(a) ? (i.size.width = p, i.size.height = f, i.position.left = r.left - h) : ((0 >= f - u || 0 >= p - c) && (e = i._getPaddingPlusBorderDimensions(this)), f - u > 0 ? (i.size.height = f, i.position.top = r.top - d) : (f = u - e.height, i.size.height = f, i.position.top = r.top + o.height - f), p - c > 0 ? (i.size.width = p, i.position.left = r.left - h) : (p = c - e.width, i.size.width = p, i.position.left = r.left + o.width - p))
        }
    }), t.ui.resizable, t.widget("ui.selectable", t.ui.mouse, {
        version: "1.12.1",
        options: { appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null },
        _create: function() {
            var e = this;
            this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function() {
                    var i = t(this),
                        n = i.offset(),
                        s = { left: n.left - e.elementPos.left, top: n.top - e.elementPos.top };
                    t.data(this, "selectable-item", { element: this, $element: i, left: s.left, top: s.top, right: s.left + i.outerWidth(), bottom: s.top + i.outerHeight(), startselected: !1, selected: i.hasClass("ui-selected"), selecting: i.hasClass("ui-selecting"), unselecting: i.hasClass("ui-unselecting") })
                })
            }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper")
        },
        _destroy: function() { this.selectees.removeData("selectable-item"), this._mouseDestroy() },
        _mouseStart: function(e) {
            var i = this,
                n = this.options;
            this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).offset(), this.options.disabled || (this.selectees = t(n.filter, this.element[0]), this._trigger("start", e), t(n.appendTo).append(this.helper), this.helper.css({ left: e.pageX, top: e.pageY, width: 0, height: 0 }), n.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var n = t.data(this, "selectable-item");
                n.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(n.$element, "ui-selected"), n.selected = !1, i._addClass(n.$element, "ui-unselecting"), n.unselecting = !0, i._trigger("unselecting", e, { unselecting: n.element }))
            }), t(e.target).parents().addBack().each(function() { var n, s = t.data(this, "selectable-item"); return s ? (n = !e.metaKey && !e.ctrlKey || !s.$element.hasClass("ui-selected"), i._removeClass(s.$element, n ? "ui-unselecting" : "ui-selected")._addClass(s.$element, n ? "ui-selecting" : "ui-unselecting"), s.unselecting = !n, s.selecting = n, s.selected = n, n ? i._trigger("selecting", e, { selecting: s.element }) : i._trigger("unselecting", e, { unselecting: s.element }), !1) : void 0 }))
        },
        _mouseDrag: function(e) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, n = this,
                    s = this.options,
                    o = this.opos[0],
                    r = this.opos[1],
                    a = e.pageX,
                    l = e.pageY;
                return o > a && (i = a, a = o, o = i), r > l && (i = l, l = r, r = i), this.helper.css({ left: o, top: r, width: a - o, height: l - r }), this.selectees.each(function() {
                    var i = t.data(this, "selectable-item"),
                        c = !1,
                        u = {};
                    i && i.element !== n.element[0] && (u.left = i.left + n.elementPos.left, u.right = i.right + n.elementPos.left, u.top = i.top + n.elementPos.top, u.bottom = i.bottom + n.elementPos.top, "touch" === s.tolerance ? c = !(u.left > a || o > u.right || u.top > l || r > u.bottom) : "fit" === s.tolerance && (c = u.left > o && a > u.right && u.top > r && l > u.bottom), c ? (i.selected && (n._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (n._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (n._addClass(i.$element, "ui-selecting"), i.selecting = !0, n._trigger("selecting", e, { selecting: i.element }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (n._removeClass(i.$element, "ui-selecting"), i.selecting = !1, n._addClass(i.$element, "ui-selected"), i.selected = !0) : (n._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (n._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), n._trigger("unselecting", e, { unselecting: i.element }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (n._removeClass(i.$element, "ui-selected"), i.selected = !1, n._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, n._trigger("unselecting", e, { unselecting: i.element })))))
                }), !1
            }
        },
        _mouseStop: function(e) {
            var i = this;
            return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() {
                var n = t.data(this, "selectable-item");
                i._removeClass(n.$element, "ui-unselecting"), n.unselecting = !1, n.startselected = !1, i._trigger("unselected", e, { unselected: n.element })
            }), t(".ui-selecting", this.element[0]).each(function() {
                var n = t.data(this, "selectable-item");
                i._removeClass(n.$element, "ui-selecting")._addClass(n.$element, "ui-selected"), n.selecting = !1, n.selected = !0, n.startselected = !0, i._trigger("selected", e, { selected: n.element })
            }), this._trigger("stop", e), this.helper.remove(), !1
        }
    }), t.widget("ui.sortable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: { appendTo: "parent", axis: !1, connectWith: !1, containment: !1, cursor: "auto", cursorAt: !1, dropOnEmpty: !0, forcePlaceholderSize: !1, forceHelperSize: !1, grid: !1, handle: !1, helper: "original", items: "> *", opacity: !1, placeholder: !1, revert: !1, scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1e3, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null },
        _isOverAxis: function(t, e, i) { return t >= e && e + i > t },
        _isFloating: function(t) { return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display")) },
        _create: function() { this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0 },
        _setOption: function(t, e) { this._super(t, e), "handle" === t && this._setHandleClassName() },
        _setHandleClassName: function() {
            var e = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, function() { e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle") })
        },
        _destroy: function() { this._mouseDestroy(); for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item"); return this },
        _mouseCapture: function(e, i) {
            var n = null,
                s = !1,
                o = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), t(e.target).parents().each(function() { return t.data(this, o.widgetName + "-item") === o ? (n = t(this), !1) : void 0 }), t.data(e.target, o.widgetName + "-item") === o && (n = t(e.target)), !!n && (!(this.options.handle && !i && (t(this.options.handle, n).find("*").addBack().each(function() { this === e.target && (s = !0) }), !s)) && (this.currentItem = n, this._removeCurrentsFromItems(), !0))))
        },
        _mouseStart: function(e, i, n) {
            var s, o, r = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }, t.extend(this.offset, { click: { left: e.pageX - this.offset.left, top: e.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt), this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), r.containment && this._setContainment(), r.cursor && "auto" !== r.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", r.cursor), this.storedStylesheet = t("<style>*{ cursor: " + r.cursor + " !important; }</style>").appendTo(o)), r.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", r.opacity)), r.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", r.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)
                for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0
        },
        _mouseDrag: function(e) {
            var i, n, s, o, r = this.options,
                a = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
                this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < r.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + r.scrollSpeed : e.pageY - this.overflowOffset.top < r.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - r.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < r.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + r.scrollSpeed : e.pageX - this.overflowOffset.left < r.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - r.scrollSpeed)) : (e.pageY - this.document.scrollTop() < r.scrollSensitivity ? a = this.document.scrollTop(this.document.scrollTop() - r.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < r.scrollSensitivity && (a = this.document.scrollTop(this.document.scrollTop() + r.scrollSpeed)), e.pageX - this.document.scrollLeft() < r.scrollSensitivity ? a = this.document.scrollLeft(this.document.scrollLeft() - r.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < r.scrollSensitivity && (a = this.document.scrollLeft(this.document.scrollLeft() + r.scrollSpeed))), !1 !== a && t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                if (n = this.items[i], s = n.item[0], (o = this._intersectsWithPointer(n)) && n.instance === this.currentContainer && s !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== s && !t.contains(this.placeholder[0], s) && ("semi-dynamic" !== this.options.type || !t.contains(this.element[0], s))) {
                    if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
                    this._rearrange(e, n), this._trigger("change", e, this._uiHash());
                    break
                }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var n = this,
                        s = this.placeholder.offset(),
                        o = this.options.axis,
                        r = {};
                    o && "x" !== o || (r.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (r.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(r, parseInt(this.options.revert, 10) || 500, function() { n._clear(e) })
                } else this._clear(e, i);
                return !1
            }
        },
        cancel: function() { if (this.dragging) { this._mouseUp(new t.Event("mouseup", { target: null })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show(); for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0) } return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, { helper: null, dragging: !1, reverting: !1, _noFinalSort: null }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                n = [];
            return e = e || {}, t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }), !n.length && e.key && n.push(e.key + "="), n.join("&")
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                n = [];
            return e = e || {}, i.each(function() { n.push(t(e.item || this).attr(e.attribute || "id") || "") }), n
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
                c = this.offset.click.top,
                u = this.offset.click.left,
                h = "x" === this.options.axis || n + c > a && l > n + c,
                d = "y" === this.options.axis || e + u > o && r > e + u,
                p = h && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && r > i - this.helperProportions.width / 2 && n + this.helperProportions.height / 2 > a && l > s - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function(t) {
            var e, i, n = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                s = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width);
            return !(!n || !s) && (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1))
        },
        _intersectsWithSides: function(t) {
            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                n = this._getDragVerticalDirection(),
                s = this._getDragHorizontalDirection();
            return this.floating && s ? "right" === s && i || "left" === s && !i : n && ("down" === n && e || "up" === n && !e)
        },
        _getDragVerticalDirection: function() { var t = this.positionAbs.top - this.lastPositionAbs.top; return 0 !== t && (t > 0 ? "down" : "up") },
        _getDragHorizontalDirection: function() { var t = this.positionAbs.left - this.lastPositionAbs.left; return 0 !== t && (t > 0 ? "right" : "left") },
        refresh: function(t) { return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this },
        _connectWith: function() { var t = this.options; return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith },
        _getItemsAsjQuery: function(e) {
            function i() { a.push(this) }
            var n, s, o, r, a = [],
                l = [],
                c = this._connectWith();
            if (c && e)
                for (n = c.length - 1; n >= 0; n--)
                    for (o = t(c[n], this.document[0]), s = o.length - 1; s >= 0; s--)(r = t.data(o[s], this.widgetFullName)) && r !== this && !r.options.disabled && l.push([t.isFunction(r.options.items) ? r.options.items.call(r.element) : t(r.options.items, r.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), r]);
            for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), n = l.length - 1; n >= 0; n--) l[n][0].each(i);
            return t(a)
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var i = 0; e.length > i; i++)
                    if (e[i] === t.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function(e) {
            this.items = [], this.containers = [this];
            var i, n, s, o, r, a, l, c, u = this.items,
                h = [
                    [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, { item: this.currentItem }) : t(this.options.items, this.element), this]
                ],
                d = this._connectWith();
            if (d && this.ready)
                for (i = d.length - 1; i >= 0; i--)
                    for (s = t(d[i], this.document[0]), n = s.length - 1; n >= 0; n--)(o = t.data(s[n], this.widgetFullName)) && o !== this && !o.options.disabled && (h.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, { item: this.currentItem }) : t(o.options.items, o.element), o]), this.containers.push(o));
            for (i = h.length - 1; i >= 0; i--)
                for (r = h[i][1], a = h[i][0], n = 0, c = a.length; c > n; n++) l = t(a[n]), l.data(this.widgetName + "-item", r), u.push({ item: l, instance: r, width: 0, height: 0, left: 0, top: 0 })
        },
        refreshPositions: function(e) {
            this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, n, s, o;
            for (i = this.items.length - 1; i >= 0; i--) n = this.items[i], n.instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item, e || (n.width = s.outerWidth(), n.height = s.outerHeight()), o = s.offset(), n.left = o.left, n.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(e) {
            e = e || this;
            var i, n = e.options;
            n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {
                element: function() {
                    var n = e.currentItem[0].nodeName.toLowerCase(),
                        s = t("<" + n + ">", e.document[0]);
                    return e._addClass(s, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(s, "ui-sortable-helper"), "tbody" === n ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(s)) : "tr" === n ? e._createTrPlaceholder(e.currentItem, s) : "img" === n && s.attr("src", e.currentItem.attr("src")), i || s.css("visibility", "hidden"), s
                },
                update: function(t, s) {
                    (!i || n.forcePlaceholderSize) && (s.height() || s.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                }
            }), e.placeholder = t(n.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), n.placeholder.update(e, e.placeholder)
        },
        _createTrPlaceholder: function(e, i) {
            var n = this;
            e.children().each(function() { t("<td>&#160;</td>", n.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i) })
        },
        _contactContainers: function(e) {
            var i, n, s, o, r, a, l, c, u, h, d = null,
                p = null;
            for (i = this.containers.length - 1; i >= 0; i--)
                if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
                    if (this._intersectsWith(this.containers[i].containerCache)) {
                        if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
                        d = this.containers[i], p = i
                    } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
            if (d)
                if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);
                else {
                    for (s = 1e4, o = null, u = d.floating || this._isFloating(this.currentItem), r = u ? "left" : "top", a = u ? "width" : "height", h = u ? "pageX" : "pageY", n = this.items.length - 1; n >= 0; n--) t.contains(this.containers[p].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (l = this.items[n].item.offset()[r], c = !1, e[h] - l > this.items[n][a] / 2 && (c = !0), s > Math.abs(e[h] - l) && (s = Math.abs(e[h] - l), o = this.items[n], this.direction = c ? "up" : "down"));
                    if (!o && !this.options.dropOnEmpty) return;
                    if (this.currentContainer === this.containers[p]) return void(this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
                    o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
                }
        },
        _createHelper: function(e) {
            var i = this.options,
                n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return n.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] === this.currentItem[0] && (this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") }), (!n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()), (!n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()), n
        },
        _adjustOffsetFromHelper: function(e) { "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top) },
        _getParentOffset: function() { this.offsetParent = this.helper.offsetParent(); var e = this.offsetParent.offset(); return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = { top: 0, left: 0 }), { top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) } },
        _getRelativeOffset: function() { if ("relative" === this.cssPosition) { var t = this.currentItem.position(); return { top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() } } return { top: 0, left: 0 } },
        _cacheMargins: function() { this.margins = { left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0 } },
        _cacheHelperProportions: function() { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } },
        _setContainment: function() { var e, i, n, s = this.options; "parent" === s.containment && (s.containment = this.helper[0].parentNode), ("document" === s.containment || "window" === s.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === s.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === s.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(s.containment) || (e = t(s.containment)[0], i = t(s.containment).offset(), n = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]) },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var n = "absolute" === e ? 1 : -1,
                s = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                o = /(html|body)/i.test(s[0].tagName);
            return { top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n, left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n }
        },
        _generatePosition: function(e) {
            var i, n, s = this.options,
                o = e.pageX,
                r = e.pageY,
                a = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                l = /(html|body)/i.test(a[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), s.grid && (i = this.originalPageY + Math.round((r - this.originalPageY) / s.grid[1]) * s.grid[1], r = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - s.grid[1] : i + s.grid[1] : i, n = this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0], o = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - s.grid[0] : n + s.grid[0] : n)), { top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()), left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft()) }
        },
        _rearrange: function(t, e, i, n) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var s = this.counter;
            this._delay(function() { s === this.counter && this.refreshPositions(!n) })
        },
        _clear: function(t, e) {
            function i(t, e, i) { return function(n) { i._trigger(t, n, e._uiHash(e)) } }
            this.reverting = !1;
            var n, s = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (n in this._storedCSS)("auto" === this._storedCSS[n] || "static" === this._storedCSS[n]) && (this._storedCSS[n] = "");
                this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !e && s.push(function(t) { this._trigger("receive", t, this._uiHash(this.fromOutside)) }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function(t) { this._trigger("update", t, this._uiHash()) }), this !== this.currentContainer && (e || (s.push(function(t) { this._trigger("remove", t, this._uiHash()) }), s.push(function(t) { return function(e) { t._trigger("receive", e, this._uiHash(this)) } }.call(this, this.currentContainer)), s.push(function(t) { return function(e) { t._trigger("update", e, this._uiHash(this)) } }.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) e || s.push(i("deactivate", this, this.containers[n])), this.containers[n].containerCache.over && (s.push(i("out", this, this.containers[n])), this.containers[n].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                for (n = 0; s.length > n; n++) s[n].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval
        },
        _trigger: function() {!1 === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel() },
        _uiHash: function(e) { var i = e || this; return { helper: i.helper, placeholder: i.placeholder || t([]), position: i.position, originalPosition: i.originalPosition, offset: i.positionAbs, item: i.currentItem, sender: e ? e.element : null } }
    }), t.widget("ui.accordion", {
        version: "1.12.1",
        options: { active: 0, animate: {}, classes: { "ui-accordion-header": "ui-corner-top", "ui-accordion-header-collapsed": "ui-corner-all", "ui-accordion-content": "ui-corner-bottom" }, collapsible: !1, event: "click", header: "> li > :first-child, > :not(li):even", heightStyle: "auto", icons: { activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e" }, activate: null, beforeActivate: null },
        hideProps: { borderTopWidth: "hide", borderBottomWidth: "hide", paddingTop: "hide", paddingBottom: "hide", height: "hide" },
        showProps: { borderTopWidth: "show", borderBottomWidth: "show", paddingTop: "show", paddingBottom: "show", height: "show" },
        _create: function() {
            var e = this.options;
            this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || !1 !== e.active && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh()
        },
        _getCreateEventData: function() { return { header: this.active, panel: this.active.length ? this.active.next() : t() } },
        _createIcons: function() {
            var e, i, n = this.options.icons;
            n && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + n.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, n.header)._addClass(i, null, n.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
        },
        _destroyIcons: function() { this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove() },
        _destroy: function() {
            var t;
            this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
        },
        _setOption: function(t, e) { return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), void("icons" === t && (this._destroyIcons(), e && this._createIcons()))) },
        _setOptionDisabled: function(t) { this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t) },
        _keydown: function(e) {
            if (!e.altKey && !e.ctrlKey) {
                var i = t.ui.keyCode,
                    n = this.headers.length,
                    s = this.headers.index(e.target),
                    o = !1;
                switch (e.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        o = this.headers[(s + 1) % n];
                        break;
                    case i.LEFT:
                    case i.UP:
                        o = this.headers[(s - 1 + n) % n];
                        break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(e);
                        break;
                    case i.HOME:
                        o = this.headers[0];
                        break;
                    case i.END:
                        o = this.headers[n - 1]
                }
                o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault())
            }
        },
        _panelKeyDown: function(e) { e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus") },
        refresh: function() {
            var e = this.options;
            this._processPanels(), !1 === e.active && !0 === e.collapsible || !this.headers.length ? (e.active = !1, this.active = t()) : !1 === e.active ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },
        _processPanels: function() {
            var t = this.headers,
                e = this.panels;
            this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
        },
        _refresh: function() {
            var e, i = this.options,
                n = i.heightStyle,
                s = this.element.parent();
            this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function() {
                var e = t(this),
                    i = e.uniqueId().attr("id"),
                    n = e.next(),
                    s = n.uniqueId().attr("id");
                e.attr("aria-controls", s), n.attr("aria-labelledby", i)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }).next().attr({ "aria-hidden": "true" }).hide(), this.active.length ? this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }).next().attr({ "aria-hidden": "false" }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === n ? (e = s.height(), this.element.siblings(":visible").each(function() {
                var i = t(this),
                    n = i.css("position");
                "absolute" !== n && "fixed" !== n && (e -= i.outerHeight(!0))
            }), this.headers.each(function() { e -= t(this).outerHeight(!0) }), this.headers.next().each(function() { t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height())) }).css("overflow", "auto")) : "auto" === n && (e = 0, this.headers.next().each(function() {
                var i = t(this).is(":visible");
                i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide()
            }).height(e))
        },
        _activate: function(e) {
            var i = this._findActive(e)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: t.noop }))
        },
        _findActive: function(e) { return "number" == typeof e ? this.headers.eq(e) : t() },
        _setupEvents: function(e) {
            var i = { keydown: "_keydown" };
            e && t.each(e.split(" "), function(t, e) { i[e] = "_eventHandler" }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), { keydown: "_panelKeyDown" }), this._hoverable(this.headers), this._focusable(this.headers)
        },
        _eventHandler: function(e) {
            var i, n, s = this.options,
                o = this.active,
                r = t(e.currentTarget),
                a = r[0] === o[0],
                l = a && s.collapsible,
                c = l ? t() : r.next(),
                u = o.next(),
                h = { oldHeader: o, oldPanel: u, newHeader: l ? t() : r, newPanel: c };
            e.preventDefault(), a && !s.collapsible || !1 === this._trigger("beforeActivate", e, h) || (s.active = !l && this.headers.index(r), this.active = a ? t() : r, this._toggle(h), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), s.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, s.icons.activeHeader)._addClass(i, null, s.icons.header)), a || (this._removeClass(r, "ui-accordion-header-collapsed")._addClass(r, "ui-accordion-header-active", "ui-state-active"), s.icons && (n = r.children(".ui-accordion-header-icon"), this._removeClass(n, null, s.icons.header)._addClass(n, null, s.icons.activeHeader)), this._addClass(r.next(), "ui-accordion-content-active")))
        },
        _toggle: function(e) {
            var i = e.newPanel,
                n = this.prevShow.length ? this.prevShow : e.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = n, this.options.animate ? this._animate(i, n, e) : (n.hide(), i.show(), this._toggleComplete(e)), n.attr({ "aria-hidden": "true" }), n.prev().attr({ "aria-selected": "false", "aria-expanded": "false" }), i.length && n.length ? n.prev().attr({ tabIndex: -1, "aria-expanded": "false" }) : i.length && this.headers.filter(function() { return 0 === parseInt(t(this).attr("tabIndex"), 10) }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 })
        },
        _animate: function(t, e, i) {
            var n, s, o, r = this,
                a = 0,
                l = t.css("box-sizing"),
                c = t.length && (!e.length || t.index() < e.index()),
                u = this.options.animate || {},
                h = c && u.down || u,
                d = function() { r._toggleComplete(i) };
            return "number" == typeof h && (o = h), "string" == typeof h && (s = h), s = s || h.easing || u.easing, o = o || h.duration || u.duration, e.length ? t.length ? (n = t.show().outerHeight(), e.animate(this.hideProps, { duration: o, easing: s, step: function(t, e) { e.now = Math.round(t) } }), void t.hide().animate(this.showProps, { duration: o, easing: s, complete: d, step: function(t, i) { i.now = Math.round(t), "height" !== i.prop ? "content-box" === l && (a += i.now) : "content" !== r.options.heightStyle && (i.now = Math.round(n - e.outerHeight() - a), a = 0) } })) : e.animate(this.hideProps, o, s, d) : t.animate(this.showProps, o, s, d)
        },
        _toggleComplete: function(t) {
            var e = t.oldPanel,
                i = e.prev();
            this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
        }
    }), t.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: { icons: { submenu: "ui-icon-caret-1-e" }, items: "> *", menus: "ul", position: { my: "left top", at: "right top" }, role: "menu", blur: null, focus: null, select: null },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({ role: this.options.role, tabIndex: 0 }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                "mousedown .ui-menu-item": function(t) { t.preventDefault() },
                "click .ui-menu-item": function(e) {
                    var i = t(e.target),
                        n = t(t.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && n.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(e) {
                    if (!this.previousFilter) {
                        var i = t(e.target).closest(".ui-menu-item"),
                            n = t(e.currentTarget);
                        i[0] === n[0] && (this._removeClass(n.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, n))
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(t, e) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    e || this.focus(t, i)
                },
                blur: function(e) { this._delay(function() {!t.contains(this.element[0], t.ui.safeActiveElement(this.document[0])) && this.collapseAll(e) }) },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, { click: function(t) { this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1 } })
        },
        _destroy: function() {
            var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
                i = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), i.children().each(function() {
                var e = t(this);
                e.data("ui-menu-submenu-caret") && e.remove()
            })
        },
        _keydown: function(e) {
            var i, n, s, o, r = !0;
            switch (e.keyCode) {
                case t.ui.keyCode.PAGE_UP:
                    this.previousPage(e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    this.nextPage(e);
                    break;
                case t.ui.keyCode.HOME:
                    this._move("first", "first", e);
                    break;
                case t.ui.keyCode.END:
                    this._move("last", "last", e);
                    break;
                case t.ui.keyCode.UP:
                    this.previous(e);
                    break;
                case t.ui.keyCode.DOWN:
                    this.next(e);
                    break;
                case t.ui.keyCode.LEFT:
                    this.collapse(e);
                    break;
                case t.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                    break;
                case t.ui.keyCode.ENTER:
                case t.ui.keyCode.SPACE:
                    this._activate(e);
                    break;
                case t.ui.keyCode.ESCAPE:
                    this.collapse(e);
                    break;
                default:
                    r = !1, n = this.previousFilter || "", o = !1, s = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), s === n ? o = !0 : s = n + s, i = this._filterMenuItems(s), i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (s = String.fromCharCode(e.keyCode), i = this._filterMenuItems(s)), i.length ? (this.focus(e, i), this.previousFilter = s,
                        this.filterTimer = this._delay(function() { delete this.previousFilter }, 1e3)) : delete this.previousFilter
            }
            r && e.preventDefault()
        },
        _activate: function(t) { this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t)) },
        refresh: function() {
            var e, i, n, s, o, r = this,
                a = this.options.icons.submenu,
                l = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), n = l.filter(":not(.ui-menu)").hide().attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" }).each(function() {
                var e = t(this),
                    i = e.prev(),
                    n = t("<span>").data("ui-menu-submenu-caret", !0);
                r._addClass(n, "ui-menu-icon", "ui-icon " + a), i.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", i.attr("id"))
            }), this._addClass(n, "ui-menu", "ui-widget ui-widget-content ui-front"), e = l.add(this.element), i = e.find(this.options.items), i.not(".ui-menu-item").each(function() {
                var e = t(this);
                r._isDivider(e) && r._addClass(e, "ui-menu-divider", "ui-widget-content")
            }), s = i.not(".ui-menu-item, .ui-menu-divider"), o = s.children().not(".ui-menu").uniqueId().attr({ tabIndex: -1, role: this._itemRole() }), this._addClass(s, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() { return { menu: "menuitem", listbox: "option" }[this.options.role] },
        _setOption: function(t, e) {
            if ("icons" === t) {
                var i = this.element.find(".ui-menu-icon");
                this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
            }
            this._super(t, e)
        },
        _setOptionDisabled: function(t) { this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t) },
        focus: function(t, e) {
            var i, n, s;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), n = this.active.children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), s = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() { this._close() }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, { item: e })
        },
        _scrollIntoView: function(e) {
            var i, n, s, o, r, a;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, s = e.offset().top - this.activeMenu.offset().top - i - n, o = this.activeMenu.scrollTop(), r = this.activeMenu.height(), a = e.outerHeight(), 0 > s ? this.activeMenu.scrollTop(o + s) : s + a > r && this.activeMenu.scrollTop(o + s - r + a))
        },
        blur: function(t, e) { e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, { item: this.active }), this.active = null) },
        _startOpening: function(t) { clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() { this._close(), this._open(t) }, this.delay)) },
        _open: function(e) {
            var i = t.extend({ of: this.active }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function(e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var n = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                n.length || (n = this.element), this._close(n), this.blur(e), this._removeClass(n.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = n
            }, this.delay)
        },
        _close: function(t) { t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false") },
        _closeOnDocumentClick: function(e) { return !t(e.target).closest(".ui-menu").length },
        _isDivider: function(t) { return !/[^\-\u2014\u2013\s]/.test(t.text()) },
        collapse: function(t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e))
        },
        expand: function(t) {
            var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            e && e.length && (this._open(e.parent()), this._delay(function() { this.focus(t, e) }))
        },
        next: function(t) { this._move("next", "first", t) },
        previous: function(t) { this._move("prev", "last", t) },
        isFirstItem: function() { return this.active && !this.active.prevAll(".ui-menu-item").length },
        isLastItem: function() { return this.active && !this.active.nextAll(".ui-menu-item").length },
        _move: function(t, e, i) {
            var n;
            this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.find(this.options.items)[e]()), this.focus(i, n)
        },
        nextPage: function(e) { var i, n, s; return this.active ? void(this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() { return i = t(this), 0 > i.offset().top - n - s }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(e) },
        previousPage: function(e) { var i, n, s; return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() { return i = t(this), i.offset().top - n + s > 0 }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first()))) : void this.next(e) },
        _hasScroll: function() { return this.element.outerHeight() < this.element.prop("scrollHeight") },
        select: function(e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = { item: this.active };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
        },
        _filterMenuItems: function(e) {
            var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                n = RegExp("^" + i, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() { return n.test(t.trim(t(this).children(".ui-menu-item-wrapper").text())) })
        }
    }), t.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: { appendTo: null, autoFocus: !1, delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var e, i, n, s = this.element[0].nodeName.toLowerCase(),
                o = "textarea" === s,
                r = "input" === s;
            this.isMultiLine = o || !r && this._isContentEditable(this.element), this.valueMethod = this.element[o || r ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                keydown: function(s) {
                    if (this.element.prop("readOnly")) return e = !0, n = !0, void(i = !0);
                    e = !1, n = !1, i = !1;
                    var o = t.ui.keyCode;
                    switch (s.keyCode) {
                        case o.PAGE_UP:
                            e = !0, this._move("previousPage", s);
                            break;
                        case o.PAGE_DOWN:
                            e = !0, this._move("nextPage", s);
                            break;
                        case o.UP:
                            e = !0, this._keyEvent("previous", s);
                            break;
                        case o.DOWN:
                            e = !0, this._keyEvent("next", s);
                            break;
                        case o.ENTER:
                            this.menu.active && (e = !0, s.preventDefault(), this.menu.select(s));
                            break;
                        case o.TAB:
                            this.menu.active && this.menu.select(s);
                            break;
                        case o.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(s), s.preventDefault());
                            break;
                        default:
                            i = !0, this._searchTimeout(s)
                    }
                },
                keypress: function(n) {
                    if (e) return e = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && n.preventDefault());
                    if (!i) {
                        var s = t.ui.keyCode;
                        switch (n.keyCode) {
                            case s.PAGE_UP:
                                this._move("previousPage", n);
                                break;
                            case s.PAGE_DOWN:
                                this._move("nextPage", n);
                                break;
                            case s.UP:
                                this._keyEvent("previous", n);
                                break;
                            case s.DOWN:
                                this._keyEvent("next", n)
                        }
                    }
                },
                input: function(t) { return n ? (n = !1, void t.preventDefault()) : void this._searchTimeout(t) },
                focus: function() { this.selectedItem = null, this.previous = this._value() },
                blur: function(t) { return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t)) }
            }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({ role: null }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                mousedown: function(e) { e.preventDefault(), this.cancelBlur = !0, this._delay(function() { delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus") }) },
                menufocus: function(e, i) { var n, s; return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function() { t(e.target).trigger(e.originalEvent) })) : (s = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, { item: s }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value), void((n = i.item.attr("aria-label") || s.value) && t.trim(n).length && (this.liveRegion.children().hide(), t("<div>").text(n).appendTo(this.liveRegion)))) },
                menuselect: function(e, i) {
                    var n = i.item.data("ui-autocomplete-item"),
                        s = this.previous;
                    this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = s, this._delay(function() { this.previous = s, this.selectedItem = n })), !1 !== this._trigger("select", e, { item: n }) && this._value(n.value), this.term = this._value(), this.close(e), this.selectedItem = n
                }
            }), this.liveRegion = t("<div>", { role: "status", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, { beforeunload: function() { this.element.removeAttr("autocomplete") } })
        },
        _destroy: function() { clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove() },
        _setOption: function(t, e) { this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort() },
        _isEventTargetInWidget: function(e) { var i = this.menu.element[0]; return e.target === this.element[0] || e.target === i || t.contains(i, e.target) },
        _closeOnClickOutside: function(t) { this._isEventTargetInWidget(t) || this.close() },
        _appendTo: function() { var e = this.options.appendTo; return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e },
        _initSource: function() {
            var e, i, n = this;
            t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, n) { n(t.ui.autocomplete.filter(e, i.term)) }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, s) { n.xhr && n.xhr.abort(), n.xhr = t.ajax({ url: i, data: e, dataType: "json", success: function(t) { s(t) }, error: function() { s([]) } }) }) : this.source = this.options.source
        },
        _searchTimeout: function(t) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                var e = this.term === this._value(),
                    i = this.menu.element.is(":visible"),
                    n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                (!e || e && !i && !n) && (this.selectedItem = null, this.search(null, t))
            }, this.options.delay)
        },
        search: function(t, e) { return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0 },
        _search: function(t) { this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({ term: t }, this._response()) },
        _response: function() { var e = ++this.requestIndex; return t.proxy(function(t) { e === this.requestIndex && this.__response(t), --this.pending || this._removeClass("ui-autocomplete-loading") }, this) },
        __response: function(t) { t && (t = this._normalize(t)), this._trigger("response", null, { content: t }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close() },
        close: function(t) { this.cancelSearch = !0, this._close(t) },
        _close: function(t) { this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t)) },
        _change: function(t) { this.previous !== this._value() && this._trigger("change", t, { item: this.selectedItem }) },
        _normalize: function(e) { return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) { return "string" == typeof e ? { label: e, value: e } : t.extend({}, e, { label: e.label || e.value, value: e.value || e.label }) }) },
        _suggest: function(e) {
            var i = this.menu.element.empty();
            this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({ of: this.element }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, { mousedown: "_closeOnClickOutside" })
        },
        _resizeMenu: function() {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(e, i) {
            var n = this;
            t.each(i, function(t, i) { n._renderItemData(e, i) })
        },
        _renderItemData: function(t, e) { return this._renderItem(t, e).data("ui-autocomplete-item", e) },
        _renderItem: function(e, i) { return t("<li>").append(t("<div>").text(i.label)).appendTo(e) },
        _move: function(t, e) { return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e) },
        widget: function() { return this.menu.element },
        _value: function() { return this.valueMethod.apply(this.element, arguments) },
        _keyEvent: function(t, e) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
        },
        _isContentEditable: function(t) { if (!t.length) return !1; var e = t.prop("contentEditable"); return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e }
    }), t.extend(t.ui.autocomplete, { escapeRegex: function(t) { return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&") }, filter: function(e, i) { var n = RegExp(t.ui.autocomplete.escapeRegex(i), "i"); return t.grep(e, function(t) { return n.test(t.label || t.value || t) }) } }), t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: { messages: { noResults: "No search results.", results: function(t) { return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate." } } },
        __response: function(e) {
            var i;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
        }
    }), t.ui.autocomplete;
    var d = /ui-corner-([a-z]){2,6}/g;
    t.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: { direction: "horizontal", disabled: null, onlyVisible: !0, items: { button: "input[type=button], input[type=submit], input[type=reset], button, a", controlgroupLabel: ".ui-controlgroup-label", checkboxradio: "input[type='checkbox'], input[type='radio']", selectmenu: "select", spinner: ".ui-spinner-input" } },
        _create: function() { this._enhance() },
        _enhance: function() { this.element.attr("role", "toolbar"), this.refresh() },
        _destroy: function() { this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap() },
        _initWidgets: function() {
            var e = this,
                i = [];
            t.each(this.options.items, function(n, s) {
                var o, r = {};
                return s ? "controlgroupLabel" === n ? (o = e.element.find(s), o.each(function() {
                    var e = t(this);
                    e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                }), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), void(i = i.concat(o.get()))) : void(t.fn[n] && (r = e["_" + n + "Options"] ? e["_" + n + "Options"]("middle") : { classes: {} }, e.element.find(s).each(function() {
                    var s = t(this),
                        o = s[n]("instance"),
                        a = t.widget.extend({}, r);
                    if ("button" !== n || !s.parent(".ui-spinner").length) {
                        o || (o = s[n]()[n]("instance")), o && (a.classes = e._resolveClassesValues(a.classes, o)), s[n](a);
                        var l = s[n]("widget");
                        t.data(l[0], "ui-controlgroup-data", o || s[n]("instance")), i.push(l[0])
                    }
                }))) : void 0
            }), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item")
        },
        _callChildMethod: function(e) {
            this.childWidgets.each(function() {
                var i = t(this),
                    n = i.data("ui-controlgroup-data");
                n && n[e] && n[e]()
            })
        },
        _updateCornerClass: function(t, e) {
            var i = this._buildSimpleOptions(e, "label").classes.label;
            this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), this._addClass(t, null, i)
        },
        _buildSimpleOptions: function(t, e) {
            var i = "vertical" === this.options.direction,
                n = { classes: {} };
            return n.classes[e] = { middle: "", first: "ui-corner-" + (i ? "top" : "left"), last: "ui-corner-" + (i ? "bottom" : "right"), only: "ui-corner-all" }[t], n
        },
        _spinnerOptions: function(t) { var e = this._buildSimpleOptions(t, "ui-spinner"); return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e },
        _buttonOptions: function(t) { return this._buildSimpleOptions(t, "ui-button") },
        _checkboxradioOptions: function(t) { return this._buildSimpleOptions(t, "ui-checkboxradio-label") },
        _selectmenuOptions: function(t) { var e = "vertical" === this.options.direction; return { width: !!e && "auto", classes: { middle: { "ui-selectmenu-button-open": "", "ui-selectmenu-button-closed": "" }, first: { "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"), "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left") }, last: { "ui-selectmenu-button-open": e ? "" : "ui-corner-tr", "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right") }, only: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" } }[t] } },
        _resolveClassesValues: function(e, i) {
            var n = {};
            return t.each(e, function(s) {
                var o = i.options.classes[s] || "";
                o = t.trim(o.replace(d, "")), n[s] = (o + " " + e[s]).replace(/\s+/g, " ")
            }), n
        },
        _setOption: function(t, e) { return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? void this._callChildMethod(e ? "disable" : "enable") : void this.refresh() },
        refresh: function() {
            var e, i = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], function(t, n) {
                var s = e[n]().data("ui-controlgroup-data");
                if (s && i["_" + s.widgetName + "Options"]) {
                    var o = i["_" + s.widgetName + "Options"](1 === e.length ? "only" : n);
                    o.classes = i._resolveClassesValues(o.classes, s), s.element[s.widgetName](o)
                } else i._updateCornerClass(e[n](), n)
            }), this._callChildMethod("refresh"))
        }
    }), t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
        version: "1.12.1",
        options: { disabled: null, label: null, icon: !0, classes: { "ui-checkboxradio-label": "ui-corner-all", "ui-checkboxradio-icon": "ui-corner-all" } },
        _getCreateOptions: function() {
            var e, i, n = this,
                s = this._super() || {};
            return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function() { n.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML }), this.originalLabel && (s.label = this.originalLabel), e = this.element[0].disabled, null != e && (s.disabled = e), s
        },
        _create: function() {
            var t = this.element[0].checked;
            this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({ change: "_toggleClasses", focus: function() { this._addClass(this.label, null, "ui-state-focus ui-visual-focus") }, blur: function() { this._removeClass(this.label, null, "ui-state-focus ui-visual-focus") } })
        },
        _readType: function() {
            var e = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type)
        },
        _enhance: function() { this._updateIcon(this.element[0].checked) },
        widget: function() { return this.label },
        _getRadioGroup: function() {
            var e, i = this.element[0].name,
                n = "input[name='" + t.ui.escapeSelector(i) + "']";
            return i ? (e = this.form.length ? t(this.form[0].elements).filter(n) : t(n).filter(function() { return 0 === t(this).form().length }), e.not(this.element)) : t([])
        },
        _toggleClasses: function() {
            var e = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each(function() {
                var e = t(this).checkboxradio("instance");
                e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active")
            })
        },
        _destroy: function() { this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove()) },
        _setOption: function(t, e) { return "label" !== t || e ? (this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), void(this.element[0].disabled = e)) : void this.refresh()) : void 0 },
        _updateIcon: function(e) {
            var i = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
        },
        _updateLabel: function() {
            var t = this.label.contents().not(this.element[0]);
            this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label)
        },
        refresh: function() {
            var t = this.element[0].checked,
                e = this.element[0].disabled;
            this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({ disabled: e })
        }
    }]), t.ui.checkboxradio, t.widget("ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: { classes: { "ui-button": "ui-corner-all" }, disabled: null, icon: null, iconPosition: "beginning", label: null, showLabel: !0 },
        _getCreateOptions: function() { var t, e = this._super() || {}; return this.isInput = this.element.is("input"), t = this.element[0].disabled, null != t && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e },
        _create: function() {!this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({ keyup: function(e) { e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click")) } }) },
        _enhance: function() { this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip()) },
        _updateTooltip: function() { this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label) },
        _updateIcon: function(e, i) {
            var n = "iconPosition" !== e,
                s = n ? this.options.iconPosition : i,
                o = "top" === s || "bottom" === s;
            this.icon ? n && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), n && this._addClass(this.icon, null, i), this._attachIcon(s), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(s))
        },
        _destroy: function() { this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title") },
        _attachIconSpace: function(t) { this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace) },
        _attachIcon: function(t) { this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon) },
        _setOptions: function(t) {
            var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
                i = void 0 === t.icon ? this.options.icon : t.icon;
            e || i || (t.showLabel = !0), this._super(t)
        },
        _setOption: function(t, e) { "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur()) },
        refresh: function() {
            var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOptions({ disabled: t }), this._updateTooltip()
        }
    }), !1 !== t.uiBackCompat && (t.widget("ui.button", t.ui.button, { options: { text: !0, icons: { primary: null, secondary: null } }, _create: function() { this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super() }, _setOption: function(t, e) { return "text" === t ? void this._super("showLabel", e) : ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), void this._superApply(arguments)) } }), t.fn.button = function(e) { return function() { return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({ icon: !1 }) : this.checkboxradio.apply(this, arguments)) } }(t.fn.button), t.fn.buttonset = function() { return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = { button: arguments[0].items }), this.controlgroup.apply(this, arguments)) }), t.ui.button, t.extend(t.ui, { datepicker: { version: "1.12.1" } });
    var p;
    t.extend(n.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() { return this.dpDiv },
        setDefaults: function(t) { return r(this._defaults, t || {}), this },
        _attachDatepicker: function(e, i) {
            var n, s, o;
            n = e.nodeName.toLowerCase(), s = "div" === n || "span" === n, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), s), o.settings = t.extend({}, i || {}), "input" === n ? this._connectDatepicker(e, o) : s && this._inlineDatepicker(e, o)
        },
        _newInst: function(e, i) { return { id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"), input: e, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: i, dpDiv: i ? s(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv } },
        _connectDatepicker: function(e, i) {
            var n = t(e);
            i.append = t([]), i.trigger = t([]), n.hasClass(this.markerClassName) || (this._attachments(n, i), n.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
        },
        _attachments: function(e, i) {
            var n, s, o, r = this._get(i, "appendText"),
                a = this._get(i, "isRTL");
            i.append && i.append.remove(), r && (i.append = t("<span class='" + this._appendClass + "'>" + r + "</span>"), e[a ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), n = this._get(i, "showOn"), ("focus" === n || "both" === n) && e.on("focus", this._showDatepicker), ("button" === n || "both" === n) && (s = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({ src: o, alt: s, title: s }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({ src: o, alt: s, title: s }) : s)), e[a ? "before" : "after"](i.trigger), i.trigger.on("click", function() { return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1 }))
        },
        _autoSize: function(t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e, i, n, s, o = new Date(2009, 11, 20),
                    r = this._get(t, "dateFormat");
                r.match(/[DM]/) && (e = function(t) { for (i = 0, n = 0, s = 0; t.length > s; s++) t[s].length > i && (i = t[s].length, n = s); return n }, o.setMonth(e(this._get(t, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
            }
        },
        _inlineDatepicker: function(e, i) {
            var n = t(e);
            n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(e, i, n, s, o) { var a, l, c, u, h, d = this._dialogInst; return d || (this.uuid += 1, a = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), r(d.settings, s || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (l = document.documentElement.clientWidth, c = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, h = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + u, c / 2 - 150 + h]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this },
        _destroyDatepicker: function(e) {
            var i, n = t(e),
                s = t.data(e, "datepicker");
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (s.append.remove(), s.trigger.remove(), n.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && n.removeClass(this.markerClassName).empty(), p === s && (p = null))
        },
        _enableDatepicker: function(e) {
            var i, n, s = t(e),
                o = t.data(e, "datepicker");
            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function() { this.disabled = !1 }).end().filter("img").css({ opacity: "1.0", cursor: "" })) : ("div" === i || "span" === i) && (n = s.children("." + this._inlineClass), n.children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) { return t === e ? null : t }))
        },
        _disableDatepicker: function(e) {
            var i, n, s = t(e),
                o = t.data(e, "datepicker");
            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function() { this.disabled = !0 }).end().filter("img").css({ opacity: "0.5", cursor: "default" })) : ("div" === i || "span" === i) && (n = s.children("." + this._inlineClass), n.children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) { return t === e ? null : t }), this._disabledInputs[this._disabledInputs.length] = e)
        },
        _isDisabledDatepicker: function(t) {
            if (!t) return !1;
            for (var e = 0; this._disabledInputs.length > e; e++)
                if (this._disabledInputs[e] === t) return !0;
            return !1
        },
        _getInst: function(e) { try { return t.data(e, "datepicker") } catch (t) { throw "Missing instance data for this datepicker" } },
        _optionDatepicker: function(e, i, n) { var s, o, a, l, c = this._getInst(e); return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : c ? "all" === i ? t.extend({}, c.settings) : this._get(c, i) : null : (s = i || {}, "string" == typeof i && (s = {}, s[i] = n), void(c && (this._curInst === c && this._hideDatepicker(), o = this._getDateDatepicker(e, !0), a = this._getMinMaxDate(c, "min"), l = this._getMinMaxDate(c, "max"), r(c.settings, s), null !== a && void 0 !== s.dateFormat && void 0 === s.minDate && (c.settings.minDate = this._formatDate(c, a)), null !== l && void 0 !== s.dateFormat && void 0 === s.maxDate && (c.settings.maxDate = this._formatDate(c, l)), "disabled" in s && (s.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), c), this._autoSize(c), this._setDate(c, o), this._updateAlternate(c), this._updateDatepicker(c)))) },
        _changeDatepicker: function(t, e, i) { this._optionDatepicker(t, e, i) },
        _refreshDatepicker: function(t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function(t, e) { var i = this._getInst(t); return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null },
        _doKeyDown: function(e) {
            var i, n, s, o = t.datepicker._getInst(e.target),
                r = !0,
                a = o.dpDiv.is(".ui-datepicker-rtl");
            if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
                case 9:
                    t.datepicker._hideDatepicker(), r = !1;
                    break;
                case 13:
                    return s = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), s[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, s[0]), i = t.datepicker._get(o, "onSelect"), i ? (n = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [n, o])) : t.datepicker._hideDatepicker(), !1;
                case 27:
                    t.datepicker._hideDatepicker();
                    break;
                case 33:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 34:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 35:
                    (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), r = e.ctrlKey || e.metaKey;
                    break;
                case 36:
                    (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), r = e.ctrlKey || e.metaKey;
                    break;
                case 37:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? 1 : -1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 38:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), r = e.ctrlKey || e.metaKey;
                    break;
                case 39:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? -1 : 1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 40:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), r = e.ctrlKey || e.metaKey;
                    break;
                default:
                    r = !1
            } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : r = !1;
            r && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function(e) { var i, n, s = t.datepicker._getInst(e.target); return t.datepicker._get(s, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(s, "dateFormat")), n = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > n || !i || i.indexOf(n) > -1) : void 0 },
        _doKeyUp: function(e) {
            var i = t.datepicker._getInst(e.target);
            if (i.input.val() !== i.lastVal) try { t.datepicker.parseDate(t.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, t.datepicker._getFormatConfig(i)) && (t.datepicker._setDateFromField(i), t.datepicker._updateAlternate(i), t.datepicker._updateDatepicker(i)) } catch (t) {}
            return !0
        },
        _showDatepicker: function(e) {
            if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
                var n, s, o, a, l, c, u;
                n = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== n && (t.datepicker._curInst.dpDiv.stop(!0, !0), n && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), s = t.datepicker._get(n, "beforeShow"), !1 !== (o = s ? s.apply(e, [e, n]) : {}) && (r(n.settings, o), n.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(n), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), a = !1, t(e).parents().each(function() { return !(a |= "fixed" === t(this).css("position")) }), l = { left: t.datepicker._pos[0], top: t.datepicker._pos[1] }, t.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), t.datepicker._updateDatepicker(n), l = t.datepicker._checkOffset(n, l, a), n.dpDiv.css({ position: t.datepicker._inDialog && t.blockUI ? "static" : a ? "fixed" : "absolute", display: "none", left: l.left + "px", top: l.top + "px" }), n.inline || (c = t.datepicker._get(n, "showAnim"), u = t.datepicker._get(n, "duration"), n.dpDiv.css("z-index", i(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[c] ? n.dpDiv.show(c, t.datepicker._get(n, "showOptions"), u) : n.dpDiv[c || "show"](c ? u : null), t.datepicker._shouldFocusInput(n) && n.input.trigger("focus"), t.datepicker._curInst = n))
            }
        },
        _updateDatepicker: function(e) {
            this.maxRows = 4, p = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
            var i, n = this._getNumberOfMonths(e),
                s = n[1],
                r = e.dpDiv.find("." + this._dayOverClass + " a");
            r.length > 0 && o.apply(r.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", 17 * s + "em"), e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout(function() { i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null }, 0))
        },
        _shouldFocusInput: function(t) { return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus") },
        _checkOffset: function(e, i, n) {
            var s = e.dpDiv.outerWidth(),
                o = e.dpDiv.outerHeight(),
                r = e.input ? e.input.outerWidth() : 0,
                a = e.input ? e.input.outerHeight() : 0,
                l = document.documentElement.clientWidth + (n ? 0 : t(document).scrollLeft()),
                c = document.documentElement.clientHeight + (n ? 0 : t(document).scrollTop());
            return i.left -= this._get(e, "isRTL") ? s - r : 0, i.left -= n && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= n && i.top === e.input.offset().top + a ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0), i.top -= Math.min(i.top, i.top + o > c && c > o ? Math.abs(o + a) : 0), i
        },
        _findPos: function(e) { for (var i, n = this._getInst(e), s = this._get(n, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[s ? "previousSibling" : "nextSibling"]; return i = t(e).offset(), [i.left, i.top] },
        _hideDatepicker: function(e) { var i, n, s, o, r = this._curInst;!r || e && r !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(r, "showAnim"), n = this._get(r, "duration"), s = function() { t.datepicker._tidyDialog(r) }, t.effects && (t.effects.effect[i] || t.effects[i]) ? r.dpDiv.hide(i, t.datepicker._get(r, "showOptions"), n, s) : r.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, s), i || s(), this._datepickerShowing = !1, o = this._get(r, "onClose"), o && o.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1) },
        _tidyDialog: function(t) { t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar") },
        _checkExternalClick: function(e) {
            if (t.datepicker._curInst) {
                var i = t(e.target),
                    n = t.datepicker._getInst(i[0]);
                (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== n) && t.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(e, i, n) {
            var s = t(e),
                o = this._getInst(s[0]);
            this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(o, i + ("M" === n ? this._get(o, "showCurrentAtPos") : 0), n), this._updateDatepicker(o))
        },
        _gotoToday: function(e) {
            var i, n = t(e),
                s = this._getInst(n[0]);
            this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date, s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()), this._notifyChange(s), this._adjustDate(n)
        },
        _selectMonthYear: function(e, i, n) {
            var s = t(e),
                o = this._getInst(s[0]);
            o["selected" + ("M" === n ? "Month" : "Year")] = o["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(s)
        },
        _selectDay: function(e, i, n, s) {
            var o, r = t(e);
            t(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (o = this._getInst(r[0]), o.selectedDay = o.currentDay = t("a", s).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = n, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
        },
        _clearDate: function(e) {
            var i = t(e);
            this._selectDate(i, "")
        },
        _selectDate: function(e, i) {
            var n, s = t(e),
                o = this._getInst(s[0]);
            i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), n = this._get(o, "onSelect"), n ? n.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null)
        },
        _updateAlternate: function(e) {
            var i, n, s, o = this._get(e, "altField");
            o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), n = this._getDate(e), s = this.formatDate(i, n, this._getFormatConfig(e)), t(o).val(s))
        },
        noWeekends: function(t) { var e = t.getDay(); return [e > 0 && 6 > e, ""] },
        iso8601Week: function(t) { var e, i = new Date(t.getTime()); return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1 },
        parseDate: function(e, i, n) {
            if (null == e || null == i) throw "Invalid arguments";
            if ("" === (i = "object" == typeof i ? "" + i : i + "")) return null;
            var s, o, r, a, l = 0,
                c = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                u = "string" != typeof c ? c : (new Date).getFullYear() % 100 + parseInt(c, 10),
                h = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                d = (n ? n.dayNames : null) || this._defaults.dayNames,
                p = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                f = (n ? n.monthNames : null) || this._defaults.monthNames,
                m = -1,
                g = -1,
                v = -1,
                _ = -1,
                y = !1,
                b = function(t) { var i = e.length > s + 1 && e.charAt(s + 1) === t; return i && s++, i },
                w = function(t) {
                    var e = b(t),
                        n = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                        s = "y" === t ? n : 1,
                        o = RegExp("^\\d{" + s + "," + n + "}"),
                        r = i.substring(l).match(o);
                    if (!r) throw "Missing number at position " + l;
                    return l += r[0].length, parseInt(r[0], 10)
                },
                C = function(e, n, s) {
                    var o = -1,
                        r = t.map(b(e) ? s : n, function(t, e) {
                            return [
                                [e, t]
                            ]
                        }).sort(function(t, e) { return -(t[1].length - e[1].length) });
                    if (t.each(r, function(t, e) { var n = e[1]; return i.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (o = e[0], l += n.length, !1) : void 0 }), -1 !== o) return o + 1;
                    throw "Unknown name at position " + l
                },
                x = function() {
                    if (i.charAt(l) !== e.charAt(s)) throw "Unexpected literal at position " + l;
                    l++
                };
            for (s = 0; e.length > s; s++)
                if (y) "'" !== e.charAt(s) || b("'") ? x() : y = !1;
                else switch (e.charAt(s)) {
                    case "d":
                        v = w("d");
                        break;
                    case "D":
                        C("D", h, d);
                        break;
                    case "o":
                        _ = w("o");
                        break;
                    case "m":
                        g = w("m");
                        break;
                    case "M":
                        g = C("M", p, f);
                        break;
                    case "y":
                        m = w("y");
                        break;
                    case "@":
                        a = new Date(w("@")), m = a.getFullYear(), g = a.getMonth() + 1, v = a.getDate();
                        break;
                    case "!":
                        a = new Date((w("!") - this._ticksTo1970) / 1e4), m = a.getFullYear(), g = a.getMonth() + 1, v = a.getDate();
                        break;
                    case "'":
                        b("'") ? x() : y = !0;
                        break;
                    default:
                        x()
                }
            if (i.length > l && (r = i.substr(l), !/^\s+/.test(r))) throw "Extra/unparsed characters found in date: " + r;
            if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= m ? 0 : -100)), _ > -1)
                for (g = 1, v = _; !((o = this._getDaysInMonth(m, g - 1)) >= v);) g++, v -= o;
            if (a = this._daylightSavingAdjust(new Date(m, g - 1, v)), a.getFullYear() !== m || a.getMonth() + 1 !== g || a.getDate() !== v) throw "Invalid date";
            return a
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(t, e, i) {
            if (!e) return "";
            var n, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                o = (i ? i.dayNames : null) || this._defaults.dayNames,
                r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                a = (i ? i.monthNames : null) || this._defaults.monthNames,
                l = function(e) { var i = t.length > n + 1 && t.charAt(n + 1) === e; return i && n++, i },
                c = function(t, e, i) {
                    var n = "" + e;
                    if (l(t))
                        for (; i > n.length;) n = "0" + n;
                    return n
                },
                u = function(t, e, i, n) { return l(t) ? n[e] : i[e] },
                h = "",
                d = !1;
            if (e)
                for (n = 0; t.length > n; n++)
                    if (d) "'" !== t.charAt(n) || l("'") ? h += t.charAt(n) : d = !1;
                    else switch (t.charAt(n)) {
                        case "d":
                            h += c("d", e.getDate(), 2);
                            break;
                        case "D":
                            h += u("D", e.getDay(), s, o);
                            break;
                        case "o":
                            h += c("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            h += c("m", e.getMonth() + 1, 2);
                            break;
                        case "M":
                            h += u("M", e.getMonth(), r, a);
                            break;
                        case "y":
                            h += l("y") ? e.getFullYear() : (10 > e.getFullYear() % 100 ? "0" : "") + e.getFullYear() % 100;
                            break;
                        case "@":
                            h += e.getTime();
                            break;
                        case "!":
                            h += 1e4 * e.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            l("'") ? h += "'" : d = !0;
                            break;
                        default:
                            h += t.charAt(n)
                    }
            return h
        },
        _possibleChars: function(t) {
            var e, i = "",
                n = !1,
                s = function(i) { var n = t.length > e + 1 && t.charAt(e + 1) === i; return n && e++, n };
            for (e = 0; t.length > e; e++)
                if (n) "'" !== t.charAt(e) || s("'") ? i += t.charAt(e) : n = !1;
                else switch (t.charAt(e)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        s("'") ? i += "'" : n = !0;
                        break;
                    default:
                        i += t.charAt(e)
                }
            return i
        },
        _get: function(t, e) { return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e] },
        _setDateFromField: function(t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat"),
                    n = t.lastVal = t.input ? t.input.val() : null,
                    s = this._getDefaultDate(t),
                    o = s,
                    r = this._getFormatConfig(t);
                try { o = this.parseDate(i, n, r) || s } catch (t) { n = e ? "" : n }
                t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = n ? o.getDate() : 0, t.currentMonth = n ? o.getMonth() : 0, t.currentYear = n ? o.getFullYear() : 0, this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function(t) { return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date)) },
        _determineDate: function(e, i, n) {
            var s = null == i || "" === i ? n : "string" == typeof i ? function(i) {
                try { return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e)) } catch (t) {}
                for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, s = n.getFullYear(), o = n.getMonth(), r = n.getDate(), a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = a.exec(i); l;) {
                    switch (l[2] || "d") {
                        case "d":
                        case "D":
                            r += parseInt(l[1], 10);
                            break;
                        case "w":
                        case "W":
                            r += 7 * parseInt(l[1], 10);
                            break;
                        case "m":
                        case "M":
                            o += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(s, o));
                            break;
                        case "y":
                        case "Y":
                            s += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(s, o))
                    }
                    l = a.exec(i)
                }
                return new Date(s, o, r)
            }(i) : "number" == typeof i ? isNaN(i) ? n : function(t) { var e = new Date; return e.setDate(e.getDate() + t), e }(i) : new Date(i.getTime());
            return s = s && "Invalid Date" == "" + s ? n : s, s && (s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0)), this._daylightSavingAdjust(s)
        },
        _daylightSavingAdjust: function(t) { return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null },
        _setDate: function(t, e, i) {
            var n = !e,
                s = t.selectedMonth,
                o = t.selectedYear,
                r = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = r.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth(), t.drawYear = t.selectedYear = t.currentYear = r.getFullYear(), s === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(n ? "" : this._formatDate(t))
        },
        _getDate: function(t) { return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay)) },
        _attachHandlers: function(e) {
            var i = this._get(e, "stepMonths"),
                n = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function() {
                var e = { prev: function() { t.datepicker._adjustDate(n, -i, "M") }, next: function() { t.datepicker._adjustDate(n, +i, "M") }, hide: function() { t.datepicker._hideDatepicker() }, today: function() { t.datepicker._gotoToday(n) }, selectDay: function() { return t.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1 }, selectMonth: function() { return t.datepicker._selectMonthYear(n, this, "M"), !1 }, selectYear: function() { return t.datepicker._selectMonthYear(n, this, "Y"), !1 } };
                t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(t) {
            var e, i, n, s, o, r, a, l, c, u, h, d, p, f, m, g, v, _, y, b, w, C, x, T, S, k, D, E, I, P, A, O, N, M, H, $, L, z, j, F = new Date,
                R = this._daylightSavingAdjust(new Date(F.getFullYear(), F.getMonth(), F.getDate())),
                W = this._get(t, "isRTL"),
                q = this._get(t, "showButtonPanel"),
                B = this._get(t, "hideIfNoPrevNext"),
                U = this._get(t, "navigationAsDateFormat"),
                Y = this._getNumberOfMonths(t),
                V = this._get(t, "showCurrentAtPos"),
                X = this._get(t, "stepMonths"),
                K = 1 !== Y[0] || 1 !== Y[1],
                Q = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                G = this._getMinMaxDate(t, "min"),
                J = this._getMinMaxDate(t, "max"),
                Z = t.drawMonth - V,
                tt = t.drawYear;
            if (0 > Z && (Z += 12, tt--), J)
                for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - Y[0] * Y[1] + 1, J.getDate())), e = G && G > e ? G : e; this._daylightSavingAdjust(new Date(tt, Z, 1)) > e;) 0 > --Z && (Z = 11, tt--);
            for (t.drawMonth = Z, t.drawYear = tt, i = this._get(t, "prevText"), i = U ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, Z - X, 1)), this._getFormatConfig(t)) : i, n = this._canAdjustMonth(t, -1, tt, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "e" : "w") + "'>" + i + "</span></a>" : B ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(t, "nextText"), s = U ? this.formatDate(s, this._daylightSavingAdjust(new Date(tt, Z + X, 1)), this._getFormatConfig(t)) : s, o = this._canAdjustMonth(t, 1, tt, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "w" : "e") + "'>" + s + "</span></a>" : B ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "w" : "e") + "'>" + s + "</span></a>", r = this._get(t, "currentText"), a = this._get(t, "gotoCurrent") && t.currentDay ? Q : R, r = U ? this.formatDate(r, a, this._getFormatConfig(t)) : r, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", c = q ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (W ? l : "") + (this._isInRange(t, a) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (W ? "" : l) + "</div>" : "", u = parseInt(this._get(t, "firstDay"), 10), u = isNaN(u) ? 0 : u, h = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), m = this._get(t, "monthNamesShort"), g = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), _ = this._get(t, "selectOtherMonths"), y = this._getDefaultDate(t), b = "", C = 0; Y[0] > C; C++) {
                for (x = "", this.maxRows = 4, T = 0; Y[1] > T; T++) {
                    if (S = this._daylightSavingAdjust(new Date(tt, Z, t.selectedDay)), k = " ui-corner-all", D = "", K) {
                        if (D += "<div class='ui-datepicker-group", Y[1] > 1) switch (T) {
                            case 0:
                                D += " ui-datepicker-group-first", k = " ui-corner-" + (W ? "right" : "left");
                                break;
                            case Y[1] - 1:
                                D += " ui-datepicker-group-last", k = " ui-corner-" + (W ? "left" : "right");
                                break;
                            default:
                                D += " ui-datepicker-group-middle", k = ""
                        }
                        D += "'>"
                    }
                    for (D += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + k + "'>" + (/all|left/.test(k) && 0 === C ? W ? o : n : "") + (/all|right/.test(k) && 0 === C ? W ? n : o : "") + this._generateMonthYearHeader(t, Z, tt, G, J, C > 0 || T > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", E = h ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) I = (w + u) % 7, E += "<th scope='col'" + ((w + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[I] + "'>" + p[I] + "</span></th>";
                    for (D += E + "</tr></thead><tbody>", P = this._getDaysInMonth(tt, Z), tt === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, P)), A = (this._getFirstDayOfMonth(tt, Z) - u + 7) % 7, O = Math.ceil((A + P) / 7), N = K && this.maxRows > O ? this.maxRows : O, this.maxRows = N, M = this._daylightSavingAdjust(new Date(tt, Z, 1 - A)), H = 0; N > H; H++) {
                        for (D += "<tr>", $ = h ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(M) + "</td>" : "", w = 0; 7 > w; w++) L = g ? g.apply(t.input ? t.input[0] : null, [M]) : [!0, ""], z = M.getMonth() !== Z, j = z && !_ || !L[0] || G && G > M || J && M > J, $ += "<td class='" + ((w + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (z ? " ui-datepicker-other-month" : "") + (M.getTime() === S.getTime() && Z === t.selectedMonth && t._keyEvent || y.getTime() === M.getTime() && y.getTime() === S.getTime() ? " " + this._dayOverClass : "") + (j ? " " + this._unselectableClass + " ui-state-disabled" : "") + (z && !v ? "" : " " + L[1] + (M.getTime() === Q.getTime() ? " " + this._currentClass : "") + (M.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (z && !v || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (j ? "" : " data-handler='selectDay' data-event='click' data-month='" + M.getMonth() + "' data-year='" + M.getFullYear() + "'") + ">" + (z && !v ? "&#xa0;" : j ? "<span class='ui-state-default'>" + M.getDate() + "</span>" : "<a class='ui-state-default" + (M.getTime() === R.getTime() ? " ui-state-highlight" : "") + (M.getTime() === Q.getTime() ? " ui-state-active" : "") + (z ? " ui-priority-secondary" : "") + "' href='#'>" + M.getDate() + "</a>") + "</td>", M.setDate(M.getDate() + 1), M = this._daylightSavingAdjust(M);
                        D += $ + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, tt++), D += "</tbody></table>" + (K ? "</div>" + (Y[0] > 0 && T === Y[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += D
                }
                b += x
            }
            return b += c, t._keyEvent = !1, b
        },
        _generateMonthYearHeader: function(t, e, i, n, s, o, r, a) {
            var l, c, u, h, d, p, f, m, g = this._get(t, "changeMonth"),
                v = this._get(t, "changeYear"),
                _ = this._get(t, "showMonthAfterYear"),
                y = "<div class='ui-datepicker-title'>",
                b = "";
            if (o || !g) b += "<span class='ui-datepicker-month'>" + r[e] + "</span>";
            else {
                for (l = n && n.getFullYear() === i, c = s && s.getFullYear() === i, b += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; 12 > u; u++)(!l || u >= n.getMonth()) && (!c || s.getMonth() >= u) && (b += "<option value='" + u + "'" + (u === e ? " selected='selected'" : "") + ">" + a[u] + "</option>");
                b += "</select>"
            }
            if (_ || (y += b + (!o && g && v ? "" : "&#xa0;")), !t.yearshtml)
                if (t.yearshtml = "", o || !v) y += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (h = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function(t) { var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10); return isNaN(e) ? d : e }, f = p(h[0]), m = Math.max(f, p(h[1] || "")), f = n ? Math.max(f, n.getFullYear()) : f, m = s ? Math.min(m, s.getFullYear()) : m, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    t.yearshtml += "</select>", y += t.yearshtml, t.yearshtml = null
                }
            return y += this._get(t, "yearSuffix"), _ && (y += (!o && g && v ? "" : "&#xa0;") + b), y += "</div>"
        },
        _adjustInstDate: function(t, e, i) {
            var n = t.selectedYear + ("Y" === i ? e : 0),
                s = t.selectedMonth + ("M" === i ? e : 0),
                o = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? e : 0),
                r = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, s, o)));
            t.selectedDay = r.getDate(), t.drawMonth = t.selectedMonth = r.getMonth(), t.drawYear = t.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
        },
        _restrictMinMax: function(t, e) {
            var i = this._getMinMaxDate(t, "min"),
                n = this._getMinMaxDate(t, "max"),
                s = i && i > e ? i : e;
            return n && s > n ? n : s
        },
        _notifyChange: function(t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function(t) { var e = this._get(t, "numberOfMonths"); return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e },
        _getMinMaxDate: function(t, e) { return this._determineDate(t, this._get(t, e + "Date"), null) },
        _getDaysInMonth: function(t, e) { return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate() },
        _getFirstDayOfMonth: function(t, e) { return new Date(t, e, 1).getDay() },
        _canAdjustMonth: function(t, e, i, n) {
            var s = this._getNumberOfMonths(t),
                o = this._daylightSavingAdjust(new Date(i, n + (0 > e ? e : s[0] * s[1]), 1));
            return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
        },
        _isInRange: function(t, e) {
            var i, n, s = this._getMinMaxDate(t, "min"),
                o = this._getMinMaxDate(t, "max"),
                r = null,
                a = null,
                l = this._get(t, "yearRange");
            return l && (i = l.split(":"), n = (new Date).getFullYear(), r = parseInt(i[0], 10), a = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += n), i[1].match(/[+\-].*/) && (a += n)), (!s || e.getTime() >= s.getTime()) && (!o || e.getTime() <= o.getTime()) && (!r || e.getFullYear() >= r) && (!a || a >= e.getFullYear())
        },
        _getFormatConfig: function(t) { var e = this._get(t, "shortYearCutoff"); return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), { shortYearCutoff: e, dayNamesShort: this._get(t, "dayNamesShort"), dayNames: this._get(t, "dayNames"), monthNamesShort: this._get(t, "monthNamesShort"), monthNames: this._get(t, "monthNames") } },
        _formatDate: function(t, e, i, n) { e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear); var s = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay)); return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t)) }
    }), t.fn.datepicker = function(e) {
        if (!this.length) return this;
        t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() { "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e) }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
    }, t.datepicker = new n, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.12.1", t.datepicker, t.widget("ui.dialog", {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            classes: { "ui-dialog": "ui-corner-all", "ui-dialog-titlebar": "ui-corner-all" },
            closeOnEscape: !0,
            closeText: "Close",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(e) {
                    var i = t(this).css(e).offset().top;
                    0 > i && t(this).css("top", e.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: { buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0 },
        resizableRelatedOptions: { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 },
        _create: function() { this.originalCss = { display: this.element[0].style.display, width: this.element[0].style.width, minHeight: this.element[0].style.minHeight, maxHeight: this.element[0].style.maxHeight, height: this.element[0].style.height }, this.originalPosition = { parent: this.element.parent(), index: this.element.parent().children().index(this.element) }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus() },
        _init: function() { this.options.autoOpen && this.open() },
        _appendTo: function() { var e = this.options.appendTo; return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0) },
        _destroy: function() {
            var t, e = this.originalPosition;
            this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
        },
        widget: function() { return this.uiDialog },
        disable: t.noop,
        enable: t.noop,
        close: function(e) {
            var i = this;
            this._isOpen && !1 !== this._trigger("beforeClose", e) && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function() { i._trigger("close", e) }))
        },
        isOpen: function() { return this._isOpen },
        moveToTop: function() { this._moveToTop() },
        _moveToTop: function(e, i) {
            var n = !1,
                s = this.uiDialog.siblings(".ui-front:visible").map(function() { return +t(this).css("z-index") }).get(),
                o = Math.max.apply(null, s);
            return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), n = !0), n && !i && this._trigger("focus", e), n
        },
        open: function() { var e = this; return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() { e._focusTabbable(), e._trigger("focus") }), this._makeFocusTarget(), void this._trigger("open")) },
        _focusTabbable: function() {
            var t = this._focusedElement;
            t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus")
        },
        _keepFocus: function(e) {
            function i() {
                var e = t.ui.safeActiveElement(this.document[0]);
                this.uiDialog[0] === e || t.contains(this.uiDialog[0], e) || this._focusTabbable()
            }
            e.preventDefault(), i.call(this), this._delay(i)
        },
        _createWrapper: function() {
            this.uiDialog = t("<div>").hide().attr({ tabIndex: -1, role: "dialog" }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
                keydown: function(e) {
                    if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e);
                    if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                        var i = this.uiDialog.find(":tabbable"),
                            n = i.filter(":first"),
                            s = i.filter(":last");
                        e.target !== s[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== n[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function() { s.trigger("focus") }), e.preventDefault()) : (this._delay(function() { n.trigger("focus") }), e.preventDefault())
                    }
                },
                mousedown: function(t) { this._moveToTop(t) && this._focusTabbable() }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({ "aria-describedby": this.element.uniqueId().attr("id") })
        },
        _createTitlebar: function() {
            var e;
            this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, { mousedown: function(e) { t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus") } }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({ label: t("<a>").text(this.options.closeText).html(), icon: "ui-icon-closethick", showLabel: !1 }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, { click: function(t) { t.preventDefault(), this.close(t) } }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({ "aria-labelledby": e.attr("id") })
        },
        _title: function(t) { this.options.title ? t.text(this.options.title) : t.html("&#160;") },
        _createButtonPane: function() { this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons() },
        _createButtons: function() {
            var e = this,
                i = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this._removeClass(this.uiDialog, "ui-dialog-buttons") : (t.each(i, function(i, n) {
                var s, o;
                n = t.isFunction(n) ? { click: n, text: i } : n, n = t.extend({ type: "button" }, n), s = n.click, o = { icon: n.icon, iconPosition: n.iconPosition, showLabel: n.showLabel, icons: n.icons, text: n.text }, delete n.click, delete n.icon, delete n.iconPosition, delete n.showLabel, delete n.icons, "boolean" == typeof n.text && delete n.text, t("<button></button>", n).button(o).appendTo(e.uiButtonSet).on("click", function() { s.apply(e.element[0], arguments) })
            }), this._addClass(this.uiDialog, "ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function() {
            function e(t) { return { position: t.position, offset: t.offset } }
            var i = this,
                n = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(n, s) { i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", n, e(s)) },
                drag: function(t, n) { i._trigger("drag", t, e(n)) },
                stop: function(s, o) {
                    var r = o.offset.left - i.document.scrollLeft(),
                        a = o.offset.top - i.document.scrollTop();
                    n.position = { my: "left top", at: "left" + (r >= 0 ? "+" : "") + r + " top" + (a >= 0 ? "+" : "") + a, of: i.window }, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", s, e(o))
                }
            })
        },
        _makeResizable: function() {
            function e(t) { return { originalPosition: t.originalPosition, originalSize: t.originalSize, position: t.position, size: t.size } }
            var i = this,
                n = this.options,
                s = n.resizable,
                o = this.uiDialog.css("position"),
                r = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: n.maxWidth,
                maxHeight: n.maxHeight,
                minWidth: n.minWidth,
                minHeight: this._minHeight(),
                handles: r,
                start: function(n, s) { i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", n, e(s)) },
                resize: function(t, n) { i._trigger("resize", t, e(n)) },
                stop: function(s, o) {
                    var r = i.uiDialog.offset(),
                        a = r.left - i.document.scrollLeft(),
                        l = r.top - i.document.scrollTop();
                    n.height = i.uiDialog.height(), n.width = i.uiDialog.width(), n.position = { my: "left top", at: "left" + (a >= 0 ? "+" : "") + a + " top" + (l >= 0 ? "+" : "") + l, of: i.window }, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", s, e(o))
                }
            }).css("position", o)
        },
        _trackFocus: function() { this._on(this.widget(), { focusin: function(e) { this._makeFocusTarget(), this._focusedElement = t(e.target) } }) },
        _makeFocusTarget: function() { this._untrackInstance(), this._trackingInstances().unshift(this) },
        _untrackInstance: function() {
            var e = this._trackingInstances(),
                i = t.inArray(this, e); - 1 !== i && e.splice(i, 1)
        },
        _trackingInstances: function() { var t = this.document.data("ui-dialog-instances"); return t || (t = [], this.document.data("ui-dialog-instances", t)), t },
        _minHeight: function() { var t = this.options; return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height) },
        _position: function() {
            var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
        },
        _setOptions: function(e) {
            var i = this,
                n = !1,
                s = {};
            t.each(e, function(t, e) { i._setOption(t, e), t in i.sizeRelatedOptions && (n = !0), t in i.resizableRelatedOptions && (s[t] = e) }), n && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", s)
        },
        _setOption: function(e, i) { var n, s, o = this.uiDialog; "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({ label: t("<a>").text("" + this.options.closeText).html() }), "draggable" === e && (n = o.is(":data(ui-draggable)"), n && !i && o.draggable("destroy"), !n && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (s = o.is(":data(ui-resizable)"), s && !i && o.resizable("destroy"), s && "string" == typeof i && o.resizable("option", "handles", i), s || !1 === i || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))) },
        _size: function() {
            var t, e, i, n = this.options;
            this.element.show().css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }), n.minWidth > n.width && (n.width = n.minWidth), t = this.uiDialog.css({ height: "auto", width: n.width }).outerHeight(), e = Math.max(0, n.minHeight - t), i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none", "auto" === n.height ? this.element.css({ minHeight: e, maxHeight: i, height: "auto" }) : this.element.height(Math.max(0, n.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() { this.iframeBlocks = this.document.find("iframe").map(function() { var e = t(this); return t("<div>").css({ position: "absolute", width: e.outerWidth(), height: e.outerHeight() }).appendTo(e.parent()).offset(e.offset())[0] }) },
        _unblockFrames: function() { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) },
        _allowInteraction: function(e) { return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length },
        _createOverlay: function() {
            if (this.options.modal) {
                var e = !0;
                this._delay(function() { e = !1 }), this.document.data("ui-dialog-overlays") || this._on(this.document, { focusin: function(t) { e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable()) } }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, { mousedown: "_keepFocus" }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var t = this.document.data("ui-dialog-overlays") - 1;
                t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
            }
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.dialog", t.ui.dialog, { options: { dialogClass: "" }, _createWrapper: function() { this._super(), this.uiDialog.addClass(this.options.dialogClass) }, _setOption: function(t, e) { "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments) } }), t.ui.dialog, t.widget("ui.progressbar", {
        version: "1.12.1",
        options: { classes: { "ui-progressbar": "ui-corner-all", "ui-progressbar-value": "ui-corner-left", "ui-progressbar-complete": "ui-corner-right" }, max: 100, value: 0, change: null, complete: null },
        min: 0,
        _create: function() { this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({ role: "progressbar", "aria-valuemin": this.min }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue() },
        _destroy: function() { this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove() },
        value: function(t) { return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), void this._refreshValue()) },
        _constrainedValue: function(t) { return void 0 === t && (t = this.options.value), this.indeterminate = !1 === t, "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t)) },
        _setOptions: function(t) {
            var e = t.value;
            delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
        },
        _setOption: function(t, e) { "max" === t && (e = Math.max(this.min, e)), this._super(t, e) },
        _setOptionDisabled: function(t) { this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t) },
        _percentage: function() { return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min) },
        _refreshValue: function() {
            var e = this.options.value,
                i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({ "aria-valuemax": this.options.max, "aria-valuenow": e }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
        }
    }), t.widget("ui.selectmenu", [t.ui.formResetMixin, {
        version: "1.12.1",
        defaultElement: "<select>",
        options: { appendTo: null, classes: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" }, disabled: null, icons: { button: "ui-icon-triangle-1-s" }, position: { my: "left top", at: "left bottom", collision: "none" }, width: !1, change: null, close: null, focus: null, open: null, select: null },
        _create: function() {
            var e = this.element.uniqueId().attr("id");
            this.ids = { element: e, button: e + "-button", menu: e + "-menu" }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = t()
        },
        _drawButton: function() {
            var e, i = this,
                n = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, { click: function(t) { this.button.focus(), t.preventDefault() } }), this.element.hide(), this.button = t("<span>", { tabindex: this.options.disabled ? -1 : 0, id: this.ids.button, role: "combobox", "aria-expanded": "false", "aria-autocomplete": "list", "aria-owns": this.ids.menu, "aria-haspopup": "true", title: this.element.attr("title") }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(n).appendTo(this.button), !1 !== this.options.width && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() { i._rendered || i._refreshMenu() })
        },
        _drawMenu: function() {
            var e = this;
            this.menu = t("<ul>", { "aria-hidden": "true", "aria-labelledby": this.ids.button, id: this.ids.menu }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                classes: { "ui-menu": "ui-corner-bottom" },
                role: "listbox",
                select: function(t, i) { t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t) },
                focus: function(t, i) {
                    var n = i.item.data("ui-selectmenu-item");
                    null != e.focusIndex && n.index !== e.focusIndex && (e._trigger("focus", t, { item: n }), e.isOpen || e._select(n, t)), e.focusIndex = n.index, e.button.attr("aria-activedescendant", e.menuItems.eq(n.index).attr("id"))
                }
            }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() { return !1 }, this.menuInstance._isDivider = function() { return !1 }
        },
        refresh: function() { this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton() },
        _refreshMenu: function() {
            var t, e = this.element.find("option");
            this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
        },
        open: function(t) { this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t))) },
        _position: function() { this.menuWrap.position(t.extend({ of: this.button }, this.options.position)) },
        close: function(t) { this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t)) },
        widget: function() { return this.button },
        menuWidget: function() { return this.menu },
        _renderButtonItem: function(e) { var i = t("<span>"); return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i },
        _renderMenu: function(e, i) {
            var n = this,
                s = "";
            t.each(i, function(i, o) {
                var r;
                o.optgroup !== s && (r = t("<li>", { text: o.optgroup }), n._addClass(r, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), r.appendTo(e), s = o.optgroup), n._renderItemData(e, o)
            })
        },
        _renderItemData: function(t, e) { return this._renderItem(t, e).data("ui-selectmenu-item", e) },
        _renderItem: function(e, i) {
            var n = t("<li>"),
                s = t("<div>", { title: i.element.attr("title") });
            return i.disabled && this._addClass(n, null, "ui-state-disabled"), this._setText(s, i.label), n.append(s).appendTo(e)
        },
        _setText: function(t, e) { e ? t.text(e) : t.html("&#160;") },
        _move: function(t, e) {
            var i, n, s = ".ui-menu-item";
            this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), s += ":not(.ui-state-disabled)"), n = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1) : i[t + "All"](s).eq(0), n.length && this.menuInstance.focus(e, n)
        },
        _getSelectedItem: function() { return this.menuItems.eq(this.element[0].selectedIndex).parent("li") },
        _toggle: function(t) { this[this.isOpen ? "close" : "open"](t) },
        _setSelection: function() {
            var t;
            this.range && (window.getSelection ? (t = window.getSelection(), t.removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
        },
        _documentClick: { mousedown: function(e) { this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e)) } },
        _buttonEvents: {
            mousedown: function() {
                var t;
                window.getSelection ? (t = window.getSelection(), t.rangeCount && (this.range = t.getRangeAt(0))) : this.range = document.selection.createRange()
            },
            click: function(t) { this._setSelection(), this._toggle(t) },
            keydown: function(e) {
                var i = !0;
                switch (e.keyCode) {
                    case t.ui.keyCode.TAB:
                    case t.ui.keyCode.ESCAPE:
                        this.close(e), i = !1;
                        break;
                    case t.ui.keyCode.ENTER:
                        this.isOpen && this._selectFocusedItem(e);
                        break;
                    case t.ui.keyCode.UP:
                        e.altKey ? this._toggle(e) : this._move("prev", e);
                        break;
                    case t.ui.keyCode.DOWN:
                        e.altKey ? this._toggle(e) : this._move("next", e);
                        break;
                    case t.ui.keyCode.SPACE:
                        this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                        break;
                    case t.ui.keyCode.LEFT:
                        this._move("prev", e);
                        break;
                    case t.ui.keyCode.RIGHT:
                        this._move("next", e);
                        break;
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.PAGE_UP:
                        this._move("first", e);
                        break;
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_DOWN:
                        this._move("last", e);
                        break;
                    default:
                        this.menu.trigger(e), i = !1
                }
                i && e.preventDefault()
            }
        },
        _selectFocusedItem: function(t) {
            var e = this.menuItems.eq(this.focusIndex).parent("li");
            e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
        },
        _select: function(t, e) {
            var i = this.element[0].selectedIndex;
            this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, { item: t }), t.index !== i && this._trigger("change", e, { item: t }), this.close(e)
        },
        _setAria: function(t) {
            var e = this.menuItems.eq(t.index).attr("id");
            this.button.attr({ "aria-labelledby": e, "aria-activedescendant": e }), this.menu.attr("aria-activedescendant", e)
        },
        _setOption: function(t, e) {
            if ("icons" === t) {
                var i = this.button.find("span.ui-icon");
                this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)
            }
            this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton()
        },
        _setOptionDisabled: function(t) { this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0) },
        _appendTo: function() { var e = this.options.appendTo; return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e },
        _toggleAttr: function() { this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen) },
        _resizeButton: function() { var t = this.options.width; return !1 === t ? void this.button.css("width", "") : (null === t && (t = this.element.show().outerWidth(), this.element.hide()), void this.button.outerWidth(t)) },
        _resizeMenu: function() { this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1)) },
        _getCreateOptions: function() { var t = this._super(); return t.disabled = this.element.prop("disabled"), t },
        _parseOptions: function(e) {
            var i = this,
                n = [];
            e.each(function(e, s) { n.push(i._parseOption(t(s), e)) }), this.items = n
        },
        _parseOption: function(t, e) { var i = t.parent("optgroup"); return { element: t, index: e, value: t.val(), label: t.text(), optgroup: i.attr("label") || "", disabled: i.prop("disabled") || t.prop("disabled") } },
        _destroy: function() { this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element) }
    }]), t.widget("ui.slider", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: { animate: !1, classes: { "ui-slider": "ui-corner-all", "ui-slider-handle": "ui-corner-all", "ui-slider-range": "ui-corner-all ui-widget-header" }, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null },
        numPages: 5,
        _create: function() { this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1 },
        _refresh: function() { this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue() },
        _createHandles: function() {
            var e, i, n = this.options,
                s = this.element.find(".ui-slider-handle"),
                o = [];
            for (i = n.values && n.values.length || 1, s.length > i && (s.slice(i).remove(), s = s.slice(0, i)), e = s.length; i > e; e++) o.push("<span tabindex='0'></span>");
            this.handles = s.add(t(o.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(e) { t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0) })
        },
        _createRange: function() {
            var e = this.options;
            e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({ left: "", bottom: "" })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() { this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles) },
        _destroy: function() { this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy() },
        _mouseCapture: function(e) {
            var i, n, s, o, r, a, l, c = this,
                u = this.options;
            return !u.disabled && (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this.elementOffset = this.element.offset(), i = { x: e.pageX, y: e.pageY }, n = this._normValueFromMouse(i), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                var i = Math.abs(n - c.values(e));
                (s > i || s === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (s = i, o = t(this), r = e)
            }), !1 !== this._start(e, r) && (this._mouseSliding = !0, this._handleIndex = r, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), a = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? { left: 0, top: 0 } : { left: e.pageX - a.left - o.width() / 2, top: e.pageY - a.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0) }, this.handles.hasClass("ui-state-hover") || this._slide(e, r, n), this._animateOff = !0, !0))
        },
        _mouseStart: function() { return !0 },
        _mouseDrag: function(t) {
            var e = { x: t.pageX, y: t.pageY },
                i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1
        },
        _mouseStop: function(t) { return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1 },
        _detectOrientation: function() { this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal" },
        _normValueFromMouse: function(t) { var e, i, n, s, o; return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), n = i / e, n > 1 && (n = 1), 0 > n && (n = 0), "vertical" === this.orientation && (n = 1 - n), s = this._valueMax() - this._valueMin(), o = this._valueMin() + n * s, this._trimAlignValue(o) },
        _uiHash: function(t, e, i) { var n = { handle: this.handles[t], handleIndex: t, value: void 0 !== e ? e : this.value() }; return this._hasMultipleValues() && (n.value = void 0 !== e ? e : this.values(t), n.values = i || this.values()), n },
        _hasMultipleValues: function() { return this.options.values && this.options.values.length },
        _start: function(t, e) { return this._trigger("start", t, this._uiHash(e)) },
        _slide: function(t, e, i) {
            var n, s = this.value(),
                o = this.values();
            this._hasMultipleValues() && (n = this.values(e ? 0 : 1), s = this.values(e), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), o[e] = i), i !== s && !1 !== this._trigger("slide", t, this._uiHash(e, i, o)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i))
        },
        _stop: function(t, e) { this._trigger("stop", t, this._uiHash(e)) },
        _change: function(t, e) { this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e))) },
        value: function(t) { return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value() },
        values: function(e, i) {
            var n, s, o;
            if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
            if (!arguments.length) return this._values();
            if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
            for (n = this.options.values, s = arguments[0], o = 0; n.length > o; o += 1) n[o] = this._trimAlignValue(s[o]), this._change(null, o);
            this._refreshValue()
        },
        _setOption: function(e, i) {
            var n, s = 0;
            switch ("range" === e && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (s = this.options.values.length), this._super(e, i), e) {
                case "orientation":
                    this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), n = s - 1; n >= 0; n--) this._change(null, n);
                    this._animateOff = !1;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _setOptionDisabled: function(t) { this._super(t), this._toggleClass(null, "ui-state-disabled", !!t) },
        _value: function() { var t = this.options.value; return t = this._trimAlignValue(t) },
        _values: function(t) { var e, i, n; if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e); if (this._hasMultipleValues()) { for (i = this.options.values.slice(), n = 0; i.length > n; n += 1) i[n] = this._trimAlignValue(i[n]); return i } return [] },
        _trimAlignValue: function(t) {
            if (this._valueMin() >= t) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1,
                i = (t - this._valueMin()) % e,
                n = t - i;
            return 2 * Math.abs(i) >= e && (n += i > 0 ? e : -e), parseFloat(n.toFixed(5))
        },
        _calculateNewMax: function() {
            var t = this.options.max,
                e = this._valueMin(),
                i = this.options.step;
            t = Math.round((t - e) / i) * i + e, t > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
        },
        _precision: function() { var t = this._precisionOf(this.options.step); return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t },
        _precisionOf: function(t) {
            var e = "" + t,
                i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _valueMin: function() { return this.options.min },
        _valueMax: function() { return this.max },
        _refreshRange: function(t) { "vertical" === t && this.range.css({ width: "", left: "" }), "horizontal" === t && this.range.css({ height: "", bottom: "" }) },
        _refreshValue: function() {
            var e, i, n, s, o, r = this.options.range,
                a = this.options,
                l = this,
                c = !this._animateOff && a.animate,
                u = {};
            this._hasMultipleValues() ? this.handles.each(function(n) { i = (l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, u["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[c ? "animate" : "css"](u, a.animate), !0 === l.options.range && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[c ? "animate" : "css"]({ left: i + "%" }, a.animate), 1 === n && l.range[c ? "animate" : "css"]({ width: i - e + "%" }, { queue: !1, duration: a.animate })) : (0 === n && l.range.stop(1, 1)[c ? "animate" : "css"]({ bottom: i + "%" }, a.animate), 1 === n && l.range[c ? "animate" : "css"]({ height: i - e + "%" }, { queue: !1, duration: a.animate }))), e = i }) : (n = this.value(), s = this._valueMin(), o = this._valueMax(), i = o !== s ? (n - s) / (o - s) * 100 : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[c ? "animate" : "css"](u, a.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({ width: i + "%" }, a.animate), "max" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({ width: 100 - i + "%" }, a.animate), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({ height: i + "%" }, a.animate), "max" === r && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({ height: 100 - i + "%" }, a.animate))
        },
        _handleEvents: {
            keydown: function(e) {
                var i, n, s, o = t(e.target).data("ui-slider-handle-index");
                switch (e.keyCode) {
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_UP:
                    case t.ui.keyCode.PAGE_DOWN:
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), !1 === this._start(e, o))) return
                }
                switch (s = this.options.step, i = n = this._hasMultipleValues() ? this.values(o) : this.value(), e.keyCode) {
                    case t.ui.keyCode.HOME:
                        n = this._valueMin();
                        break;
                    case t.ui.keyCode.END:
                        n = this._valueMax();
                        break;
                    case t.ui.keyCode.PAGE_UP:
                        n = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        n = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                        if (i === this._valueMax()) return;
                        n = this._trimAlignValue(i + s);
                        break;
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (i === this._valueMin()) return;
                        n = this._trimAlignValue(i - s)
                }
                this._slide(e, o, n)
            },
            keyup: function(e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
            }
        }
    }), t.widget("ui.spinner", {
        version: "1.12.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: { classes: { "ui-spinner": "ui-corner-all", "ui-spinner-down": "ui-corner-br", "ui-spinner-up": "ui-corner-tr" }, culture: null, icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" }, incremental: !0, max: null, min: null, numberFormat: null, page: 10, step: 1, change: null, spin: null, start: null, stop: null },
        _create: function() { this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, { beforeunload: function() { this.element.removeAttr("autocomplete") } }) },
        _getCreateOptions: function() {
            var e = this._super(),
                i = this.element;
            return t.each(["min", "max", "step"], function(t, n) {
                var s = i.attr(n);
                null != s && s.length && (e[n] = s)
            }), e
        },
        _events: {
            keydown: function(t) { this._start(t) && this._keydown(t) && t.preventDefault() },
            keyup: "_stop",
            focus: function() { this.previous = this.element.val() },
            blur: function(t) { return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", t))) },
            mousewheel: function(t, e) {
                if (e) {
                    if (!this.spinning && !this._start(t)) return !1;
                    this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() { this.spinning && this._stop(t) }, 100), t.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(e) {
                function i() { this.element[0] === t.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"), this.previous = n, this._delay(function() { this.previous = n })) }
                var n;
                n = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() { delete this.cancelBlur, i.call(this) }), !1 !== this._start(e) && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(e) { return t(e.currentTarget).hasClass("ui-state-active") ? !1 !== this._start(e) && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) : void 0 },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _enhance: function() { this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>") },
        _draw: function() { this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({ classes: { "ui-button": "" } }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({ icon: this.options.icons.up, showLabel: !1 }), this.buttons.last().button({ icon: this.options.icons.down, showLabel: !1 }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height()) },
        _keydown: function(e) {
            var i = this.options,
                n = t.ui.keyCode;
            switch (e.keyCode) {
                case n.UP:
                    return this._repeat(null, 1, e), !0;
                case n.DOWN:
                    return this._repeat(null, -1, e), !0;
                case n.PAGE_UP:
                    return this._repeat(null, i.page, e), !0;
                case n.PAGE_DOWN:
                    return this._repeat(null, -i.page, e), !0
            }
            return !1
        },
        _start: function(t) { return !(!this.spinning && !1 === this._trigger("start", t)) && (this.counter || (this.counter = 1), this.spinning = !0, !0) },
        _repeat: function(t, e, i) { t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() { this._repeat(40, e, i) }, t), this._spin(e * this.options.step, i) },
        _spin: function(t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && !1 === this._trigger("spin", e, { value: i }) || (this._value(i), this.counter++)
        },
        _increment: function(e) { var i = this.options.incremental; return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1 },
        _precision: function() { var t = this._precisionOf(this.options.step); return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t },
        _precisionOf: function(t) {
            var e = "" + t,
                i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _adjustValue: function(t) { var e, i, n = this.options; return e = null !== n.min ? n.min : 0, i = t - e, i = Math.round(i / n.step) * n.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== n.max && t > n.max ? n.max : null !== n.min && n.min > t ? n.min : t },
        _stop: function(t) { this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t)) },
        _setOption: function(t, e) { var i, n, s; return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), this.options[t] = e, void this.element.val(this._format(i))) : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (n = this.buttons.first().find(".ui-icon"), this._removeClass(n, null, this.options.icons.up), this._addClass(n, null, e.up), s = this.buttons.last().find(".ui-icon"), this._removeClass(s, null, this.options.icons.down), this._addClass(s, null, e.down)), void this._super(t, e)) },
        _setOptionDisabled: function(t) { this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable") },
        _setOptions: a(function(t) { this._super(t) }),
        _parse: function(t) { return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t },
        _format: function(t) { return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t },
        _refresh: function() { this.element.attr({ "aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val()) }) },
        isValid: function() { var t = this.value(); return null !== t && t === this._adjustValue(t) },
        _value: function(t, e) { var i; "" !== t && null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), t = this._format(i)), this.element.val(t), this._refresh() },
        _destroy: function() { this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element) },
        stepUp: a(function(t) { this._stepUp(t) }),
        _stepUp: function(t) { this._start() && (this._spin((t || 1) * this.options.step), this._stop()) },
        stepDown: a(function(t) { this._stepDown(t) }),
        _stepDown: function(t) { this._start() && (this._spin((t || 1) * -this.options.step), this._stop()) },
        pageUp: a(function(t) { this._stepUp((t || 1) * this.options.page) }),
        pageDown: a(function(t) { this._stepDown((t || 1) * this.options.page) }),
        value: function(t) { return arguments.length ? void a(this._value).call(this, t) : this._parse(this.element.val()) },
        widget: function() { return this.uiSpinner }
    }), !1 !== t.uiBackCompat && t.widget("ui.spinner", t.ui.spinner, { _enhance: function() { this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml()) }, _uiSpinnerHtml: function() { return "<span>" }, _buttonHtml: function() { return "<a></a><a></a>" } }), t.ui.spinner, t.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: { active: null, classes: { "ui-tabs": "ui-corner-all", "ui-tabs-nav": "ui-corner-all", "ui-tabs-panel": "ui-corner-bottom", "ui-tabs-tab": "ui-corner-top" }, collapsible: !1, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null },
        _isLocal: function() {
            var t = /#.*$/;
            return function(e) {
                var i, n;
                i = e.href.replace(t, ""), n = location.href.replace(t, "");
                try { i = decodeURIComponent(i) } catch (t) {}
                try { n = decodeURIComponent(n) } catch (t) {}
                return e.hash.length > 1 && i === n
            }
        }(),
        _create: function() {
            var e = this,
                i = this.options;
            this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) { return e.tabs.index(t) }))).sort()), this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
        },
        _initialActive: function() {
            var e = this.options.active,
                i = this.options.collapsible,
                n = location.hash.substring(1);
            return null === e && (n && this.tabs.each(function(i, s) { return t(s).attr("aria-controls") === n ? (e = i, !1) : void 0 }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = !!this.tabs.length && 0)), !1 !== e && -1 === (e = this.tabs.index(this.tabs.eq(e))) && (e = !i && 0), !i && !1 === e && this.anchors.length && (e = 0), e
        },
        _getCreateEventData: function() { return { tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : t() } },
        _tabKeydown: function(e) {
            var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
                n = this.tabs.index(i),
                s = !0;
            if (!this._handlePageNav(e)) {
                switch (e.keyCode) {
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                        n++;
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.LEFT:
                        s = !1, n--;
                        break;
                    case t.ui.keyCode.END:
                        n = this.anchors.length - 1;
                        break;
                    case t.ui.keyCode.HOME:
                        n = 0;
                        break;
                    case t.ui.keyCode.SPACE:
                        return e.preventDefault(), clearTimeout(this.activating), void this._activate(n);
                    case t.ui.keyCode.ENTER:
                        return e.preventDefault(), clearTimeout(this.activating), void this._activate(n !== this.options.active && n);
                    default:
                        return
                }
                e.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, s), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function() { this.option("active", n) }, this.delay))
            }
        },
        _panelKeydown: function(e) { this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus")) },
        _handlePageNav: function(e) { return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0 },
        _findNextTab: function(e, i) { for (var n = this.tabs.length - 1; - 1 !== t.inArray(function() { return e > n && (e = 0), 0 > e && (e = n), e }(), this.options.disabled);) e = i ? e + 1 : e - 1; return e },
        _focusNextTab: function(t, e) { return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t },
        _setOption: function(t, e) { return "active" === t ? void this._activate(e) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), void("heightStyle" === t && this._setupHeightStyle(e))) },
        _sanitizeSelector: function(t) { return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "" },
        refresh: function() {
            var e = this.options,
                i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) { return i.index(t) }), this._processTabs(), !1 !== e.active && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
        },
        _refresh: function() { this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({ "aria-hidden": "true" }), this.active.length ? (this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({ "aria-hidden": "false" })) : this.tabs.eq(0).attr("tabIndex", 0) },
        _processTabs: function() {
            var e = this,
                i = this.tabs,
                n = this.anchors,
                s = this.panels;
            this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function(e) { t(this).is(".ui-state-disabled") && e.preventDefault() }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() { t(this).closest("li").is(".ui-state-disabled") && this.blur() }), this.tabs = this.tablist.find("> li:has(a[href])").attr({ role: "tab", tabIndex: -1 }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function() { return t("a", this)[0] }).attr({ role: "presentation", tabIndex: -1 }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function(i, n) {
                var s, o, r, a = t(n).uniqueId().attr("id"),
                    l = t(n).closest("li"),
                    c = l.attr("aria-controls");
                e._isLocal(n) ? (s = n.hash, r = s.substring(1), o = e.element.find(e._sanitizeSelector(s))) : (r = l.attr("aria-controls") || t({}).uniqueId()[0].id, s = "#" + r, o = e.element.find(s), o.length || (o = e._createPanel(r), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), c && l.data("ui-tabs-aria-controls", c), l.attr({ "aria-controls": r, "aria-labelledby": a }), o.attr("aria-labelledby", a)
            }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(n.not(this.anchors)), this._off(s.not(this.panels)))
        },
        _getList: function() { return this.tablist || this.element.find("ol, ul").eq(0) },
        _createPanel: function(e) { return t("<div>").attr("id", e).data("ui-tabs-destroy", !0) },
        _setOptionDisabled: function(e) {
            var i, n, s;
            for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), s = 0; n = this.tabs[s]; s++) i = t(n), !0 === e || -1 !== t.inArray(s, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
            this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === e)
        },
        _setupEvents: function(e) {
            var i = {};
            e && t.each(e.split(" "), function(t, e) { i[e] = "_eventHandler" }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, { click: function(t) { t.preventDefault() } }), this._on(this.anchors, i), this._on(this.tabs, { keydown: "_tabKeydown" }), this._on(this.panels, { keydown: "_panelKeydown" }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(e) {
            var i, n = this.element.parent();
            "fill" === e ? (i = n.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var e = t(this),
                    n = e.css("position");
                "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() { i -= t(this).outerHeight(!0) }), this.panels.each(function() { t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height())) }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() { i = Math.max(i, t(this).height("").height()) }).height(i))
        },
        _eventHandler: function(e) {
            var i = this.options,
                n = this.active,
                s = t(e.currentTarget),
                o = s.closest("li"),
                r = o[0] === n[0],
                a = r && i.collapsible,
                l = a ? t() : this._getPanelForTab(o),
                c = n.length ? this._getPanelForTab(n) : t(),
                u = { oldTab: n, oldPanel: c, newTab: a ? t() : o, newPanel: l };
            e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || r && !i.collapsible || !1 === this._trigger("beforeActivate", e, u) || (i.active = !a && this.tabs.index(o), this.active = r ? t() : o, this.xhr && this.xhr.abort(), c.length || l.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(o), e), this._toggle(e, u))
        },
        _toggle: function(e, i) {
            function n() { o.running = !1, o._trigger("activate", e, i) }

            function s() { o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.length && o.options.show ? o._show(r, o.options.show, n) : (r.show(), n()) }
            var o = this,
                r = i.newPanel,
                a = i.oldPanel;
            this.running = !0, a.length && this.options.hide ? this._hide(a, this.options.hide, function() { o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), s() }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.hide(), s()), a.attr("aria-hidden", "true"), i.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" }), r.length && a.length ? i.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter(function() { return 0 === t(this).attr("tabIndex") }).attr("tabIndex", -1), r.attr("aria-hidden", "false"), i.newTab.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 })
        },
        _activate: function(e) {
            var i, n = this._findActive(e);
            n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: t.noop }))
        },
        _findActive: function(e) { return !1 === e ? t() : this.tabs.eq(e) },
        _getIndex: function(e) { return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() { t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded") }), this.tabs.each(function() {
                var e = t(this),
                    i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(e) { var i = this.options.disabled;!1 !== i && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function(t) { return t !== e ? t : null }) : t.map(this.tabs, function(t, i) { return i !== e ? i : null })), this._setOptionDisabled(i)) },
        disable: function(e) {
            var i = this.options.disabled;
            if (!0 !== i) {
                if (void 0 === e) i = !0;
                else {
                    if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
                    i = t.isArray(i) ? t.merge([e], i).sort() : [e]
                }
                this._setOptionDisabled(i)
            }
        },
        load: function(e, i) {
            e = this._getIndex(e);
            var n = this,
                s = this.tabs.eq(e),
                o = s.find(".ui-tabs-anchor"),
                r = this._getPanelForTab(s),
                a = { tab: s, panel: r },
                l = function(t, e) { "abort" === e && n.panels.stop(!1, !0), n._removeClass(s, "ui-tabs-loading"), r.removeAttr("aria-busy"), t === n.xhr && delete n.xhr };
            this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, a)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(s, "ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.done(function(t, e, s) { setTimeout(function() { r.html(t), n._trigger("load", i, a), l(s, e) }, 1) }).fail(function(t, e) { setTimeout(function() { l(t, e) }, 1) })))
        },
        _ajaxSettings: function(e, i, n) { var s = this; return { url: e.attr("href").replace(/#.*$/, ""), beforeSend: function(e, o) { return s._trigger("beforeLoad", i, t.extend({ jqXHR: e, ajaxSettings: o }, n)) } } },
        _getPanelForTab: function(e) { var i = t(e).attr("aria-controls"); return this.element.find(this._sanitizeSelector("#" + i)) }
    }), !1 !== t.uiBackCompat && t.widget("ui.tabs", t.ui.tabs, { _processTabs: function() { this._superApply(arguments), this._addClass(this.tabs, "ui-tab") } }), t.ui.tabs, t.widget("ui.tooltip", {
        version: "1.12.1",
        options: { classes: { "ui-tooltip": "ui-corner-all ui-widget-shadow" }, content: function() { var e = t(this).attr("title") || ""; return t("<a>").text(e).html() }, hide: !0, items: "[title]:not([disabled])", position: { my: "left top+15", at: "left bottom", collision: "flipfit flip" }, show: !0, track: !1, close: null, open: null },
        _addDescribedBy: function(e, i) {
            var n = (e.attr("aria-describedby") || "").split(/\s+/);
            n.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(n.join(" ")))
        },
        _removeDescribedBy: function(e) {
            var i = e.data("ui-tooltip-id"),
                n = (e.attr("aria-describedby") || "").split(/\s+/),
                s = t.inArray(i, n); - 1 !== s && n.splice(s, 1), e.removeData("ui-tooltip-id"), n = t.trim(n.join(" ")), n ? e.attr("aria-describedby", n) : e.removeAttr("aria-describedby")
        },
        _create: function() { this._on({ mouseover: "open", focusin: "open" }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({ role: "log", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([]) },
        _setOption: function(e, i) {
            var n = this;
            this._super(e, i), "content" === e && t.each(this.tooltips, function(t, e) { n._updateContent(e.element) })
        },
        _setOptionDisabled: function(t) { this[t ? "_disable" : "_enable"]() },
        _disable: function() {
            var e = this;
            t.each(this.tooltips, function(i, n) {
                var s = t.Event("blur");
                s.target = s.currentTarget = n.element[0], e.close(s, !0)
            }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() { var e = t(this); return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0 }))
        },
        _enable: function() {
            this.disabledTitles.each(function() {
                var e = t(this);
                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
            }), this.disabledTitles = t([])
        },
        open: function(e) {
            var i = this,
                n = t(e ? e.target : this.element).closest(this.options.items);
            n.length && !n.data("ui-tooltip-id") && (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")), n.data("ui-tooltip-open", !0), e && "mouseover" === e.type && n.parents().each(function() {
                var e, n = t(this);
                n.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), n.attr("title") && (n.uniqueId(), i.parents[this.id] = { element: this, title: n.attr("title") }, n.attr("title", ""))
            }), this._registerCloseHandlers(e, n), this._updateContent(n, e))
        },
        _updateContent: function(t, e) {
            var i, n = this.options.content,
                s = this,
                o = e ? e.type : null;
            return "string" == typeof n || n.nodeType || n.jquery ? this._open(e, t, n) : void((i = n.call(t[0], function(i) { s._delay(function() { t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i)) }) })) && this._open(e, t, i))
        },
        _open: function(e, i, n) {
            function s(t) { c.of = t, r.is(":hidden") || r.position(c) }
            var o, r, a, l, c = t.extend({}, this.options.position);
            if (n) {
                if (o = this._find(i)) return void o.tooltip.find(".ui-tooltip-content").html(n);
                i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), r = o.tooltip, this._addDescribedBy(i, r.attr("id")), r.find(".ui-tooltip-content").html(n), this.liveRegion.children().hide(), l = t("<div>").html(r.find(".ui-tooltip-content").html()), l.removeAttr("name").find("[name]").removeAttr("name"), l.removeAttr("id").find("[id]").removeAttr("id"), l.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, { mousemove: s }), s(e)) : r.position(t.extend({ of: i }, this.options.position)), r.hide(), this._show(r, this.options.show), this.options.track && this.options.show && this.options.show.delay && (a = this.delayedShow = setInterval(function() { r.is(":visible") && (s(c.of), clearInterval(a)) }, t.fx.interval)), this._trigger("open", e, { tooltip: r })
            }
        },
        _registerCloseHandlers: function(e, i) {
            var n = {
                keyup: function(e) {
                    if (e.keyCode === t.ui.keyCode.ESCAPE) {
                        var n = t.Event(e);
                        n.currentTarget = i[0], this.close(n, !0)
                    }
                }
            };
            i[0] !== this.element[0] && (n.remove = function() { this._removeTooltip(this._find(i).tooltip) }), e && "mouseover" !== e.type || (n.mouseleave = "close"), e && "focusin" !== e.type || (n.focusout = "close"), this._on(!0, i, n)
        },
        close: function(e) {
            var i, n = this,
                s = t(e ? e.currentTarget : this.element),
                o = this._find(s);
            return o ? (i = o.tooltip, void(o.closing || (clearInterval(this.delayedShow), s.data("ui-tooltip-title") && !s.attr("title") && s.attr("title", s.data("ui-tooltip-title")), this._removeDescribedBy(s), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function() { n._removeTooltip(t(this)) }), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function(e, i) { t(i.element).attr("title", i.title), delete n.parents[e] }), o.closing = !0, this._trigger("close", e, { tooltip: i }), o.hiding || (o.closing = !1)))) : void s.removeData("ui-tooltip-open")
        },
        _tooltip: function(e) {
            var i = t("<div>").attr("role", "tooltip"),
                n = t("<div>").appendTo(i),
                s = i.uniqueId().attr("id");
            return this._addClass(n, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[s] = { element: e, tooltip: i }
        },
        _find: function(t) { var e = t.data("ui-tooltip-id"); return e ? this.tooltips[e] : null },
        _removeTooltip: function(t) { t.remove(), delete this.tooltips[t.attr("id")] },
        _appendTo: function(t) { var e = t.closest(".ui-front, dialog"); return e.length || (e = this.document[0].body), e },
        _destroy: function() {
            var e = this;
            t.each(this.tooltips, function(i, n) {
                var s = t.Event("blur"),
                    o = n.element;
                s.target = s.currentTarget = o[0], e.close(s, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"))
            }), this.liveRegion.remove()
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.tooltip", t.ui.tooltip, { options: { tooltipClass: null }, _tooltip: function() { var t = this._superApply(arguments); return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t } }), t.ui.tooltip;
    var f = "ui-effects-",
        m = "ui-effects-style",
        g = "ui-effects-animated",
        v = t;
    t.effects = { effect: {} },
        function(t, e) {
            function i(t, e, i) { var n = u[e.type] || {}; return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : t > n.max ? n.max : t) }

            function n(i) {
                var n = l(),
                    s = n._rgba = [];
                return i = i.toLowerCase(), p(a, function(t, o) {
                    var r, a = o.re.exec(i),
                        l = a && o.parse(a),
                        u = o.space || "rgba";
                    return l ? (r = n[u](l), n[c[u].cache] = r[c[u].cache], s = n._rgba = r._rgba, !1) : e
                }), s.length ? ("0,0,0,0" === s.join() && t.extend(s, o.transparent), n) : o[i]
            }

            function s(t, e, i) { return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t }
            var o, r = /^([\-+])=\s*(\d+\.?\d*)/,
                a = [{ re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(t) { return [t[1], t[2], t[3], t[4]] } }, { re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(t) { return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]] } }, { re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function(t) { return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] } }, { re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function(t) { return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)] } }, { re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function(t) { return [t[1], t[2] / 100, t[3] / 100, t[4]] } }],
                l = t.Color = function(e, i, n, s) { return new t.Color.fn.parse(e, i, n, s) },
                c = { rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } }, hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } } },
                u = { byte: { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } },
                h = l.support = {},
                d = t("<p>")[0],
                p = t.each;
            d.style.cssText = "background-color:rgba(1,1,1,.5)", h.rgba = d.style.backgroundColor.indexOf("rgba") > -1, p(c, function(t, e) { e.cache = "_" + t, e.props.alpha = { idx: 3, type: "percent", def: 1 } }), l.fn = t.extend(l.prototype, {
                parse: function(s, r, a, u) {
                    if (s === e) return this._rgba = [null, null, null, null], this;
                    (s.jquery || s.nodeType) && (s = t(s).css(r), r = e);
                    var h = this,
                        d = t.type(s),
                        f = this._rgba = [];
                    return r !== e && (s = [s, r, a, u], d = "array"), "string" === d ? this.parse(n(s) || o._default) : "array" === d ? (p(c.rgba.props, function(t, e) { f[e.idx] = i(s[e.idx], e) }), this) : "object" === d ? (s instanceof l ? p(c, function(t, e) { s[e.cache] && (h[e.cache] = s[e.cache].slice()) }) : p(c, function(e, n) {
                        var o = n.cache;
                        p(n.props, function(t, e) {
                            if (!h[o] && n.to) {
                                if ("alpha" === t || null == s[t]) return;
                                h[o] = n.to(h._rgba)
                            }
                            h[o][e.idx] = i(s[t], e, !0)
                        }), h[o] && 0 > t.inArray(null, h[o].slice(0, 3)) && (h[o][3] = 1, n.from && (h._rgba = n.from(h[o])))
                    }), this) : e
                },
                is: function(t) {
                    var i = l(t),
                        n = !0,
                        s = this;
                    return p(c, function(t, o) { var r, a = i[o.cache]; return a && (r = s[o.cache] || o.to && o.to(s._rgba) || [], p(o.props, function(t, i) { return null != a[i.idx] ? n = a[i.idx] === r[i.idx] : e })), n }), n
                },
                _space: function() {
                    var t = [],
                        e = this;
                    return p(c, function(i, n) { e[n.cache] && t.push(i) }), t.pop()
                },
                transition: function(t, e) {
                    var n = l(t),
                        s = n._space(),
                        o = c[s],
                        r = 0 === this.alpha() ? l("transparent") : this,
                        a = r[o.cache] || o.to(r._rgba),
                        h = a.slice();
                    return n = n[o.cache], p(o.props, function(t, s) {
                        var o = s.idx,
                            r = a[o],
                            l = n[o],
                            c = u[s.type] || {};
                        null !== l && (null === r ? h[o] = l : (c.mod && (l - r > c.mod / 2 ? r += c.mod : r - l > c.mod / 2 && (r -= c.mod)), h[o] = i((l - r) * e + r, s)))
                    }), this[s](h)
                },
                blend: function(e) {
                    if (1 === this._rgba[3]) return this;
                    var i = this._rgba.slice(),
                        n = i.pop(),
                        s = l(e)._rgba;
                    return l(t.map(i, function(t, e) { return (1 - n) * s[e] + n * t }))
                },
                toRgbaString: function() {
                    var e = "rgba(",
                        i = t.map(this._rgba, function(t, e) { return null == t ? e > 2 ? 1 : 0 : t });
                    return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                },
                toHslaString: function() {
                    var e = "hsla(",
                        i = t.map(this.hsla(), function(t, e) { return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t });
                    return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                },
                toHexString: function(e) {
                    var i = this._rgba.slice(),
                        n = i.pop();
                    return e && i.push(~~(255 * n)), "#" + t.map(i, function(t) { return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t }).join("")
                },
                toString: function() { return 0 === this._rgba[3] ? "transparent" : this.toRgbaString() }
            }), l.fn.parse.prototype = l.fn, c.hsla.to = function(t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e, i, n = t[0] / 255,
                    s = t[1] / 255,
                    o = t[2] / 255,
                    r = t[3],
                    a = Math.max(n, s, o),
                    l = Math.min(n, s, o),
                    c = a - l,
                    u = a + l,
                    h = .5 * u;
                return e = l === a ? 0 : n === a ? 60 * (s - o) / c + 360 : s === a ? 60 * (o - n) / c + 120 : 60 * (n - s) / c + 240, i = 0 === c ? 0 : .5 >= h ? c / u : c / (2 - u), [Math.round(e) % 360, i, h, null == r ? 1 : r]
            }, c.hsla.from = function(t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e = t[0] / 360,
                    i = t[1],
                    n = t[2],
                    o = t[3],
                    r = .5 >= n ? n * (1 + i) : n + i - n * i,
                    a = 2 * n - r;
                return [Math.round(255 * s(a, r, e + 1 / 3)), Math.round(255 * s(a, r, e)), Math.round(255 * s(a, r, e - 1 / 3)), o]
            }, p(c, function(n, s) {
                var o = s.props,
                    a = s.cache,
                    c = s.to,
                    u = s.from;
                l.fn[n] = function(n) {
                    if (c && !this[a] && (this[a] = c(this._rgba)), n === e) return this[a].slice();
                    var s, r = t.type(n),
                        h = "array" === r || "object" === r ? n : arguments,
                        d = this[a].slice();
                    return p(o, function(t, e) {
                        var n = h["object" === r ? t : e.idx];
                        null == n && (n = d[e.idx]), d[e.idx] = i(n, e)
                    }), u ? (s = l(u(d)), s[a] = d, s) : l(d)
                }, p(o, function(e, i) {
                    l.fn[e] || (l.fn[e] = function(s) {
                        var o, a = t.type(s),
                            l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : n,
                            c = this[l](),
                            u = c[i.idx];
                        return "undefined" === a ? u : ("function" === a && (s = s.call(this, u), a = t.type(s)), null == s && i.empty ? this : ("string" === a && (o = r.exec(s)) && (s = u + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1)), c[i.idx] = s, this[l](c)))
                    })
                })
            }), l.hook = function(e) {
                var i = e.split(" ");
                p(i, function(e, i) {
                    t.cssHooks[i] = {
                        set: function(e, s) {
                            var o, r, a = "";
                            if ("transparent" !== s && ("string" !== t.type(s) || (o = n(s)))) {
                                if (s = l(o || s), !h.rgba && 1 !== s._rgba[3]) {
                                    for (r = "backgroundColor" === i ? e.parentNode : e;
                                        ("" === a || "transparent" === a) && r && r.style;) try { a = t.css(r, "backgroundColor"), r = r.parentNode } catch (t) {}
                                    s = s.blend(a && "transparent" !== a ? a : "_default")
                                }
                                s = s.toRgbaString()
                            }
                            try { e.style[i] = s } catch (t) {}
                        }
                    }, t.fx.step[i] = function(e) { e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos)) }
                })
            }, l.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), t.cssHooks.borderColor = { expand: function(t) { var e = {}; return p(["Top", "Right", "Bottom", "Left"], function(i, n) { e["border" + n + "Color"] = t }), e } }, o = t.Color.names = { aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff" }
        }(v),
        function() {
            function e(e) {
                var i, n, s = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                    o = {};
                if (s && s.length && s[0] && s[s[0]])
                    for (n = s.length; n--;) i = s[n], "string" == typeof s[i] && (o[t.camelCase(i)] = s[i]);
                else
                    for (i in s) "string" == typeof s[i] && (o[i] = s[i]);
                return o
            }

            function i(e, i) { var n, o, r = {}; for (n in i) o = i[n], e[n] !== o && (s[n] || (t.fx.step[n] || !isNaN(parseFloat(o))) && (r[n] = o)); return r }
            var n = ["add", "remove", "toggle"],
                s = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 };
            t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
                t.fx.step[i] = function(t) {
                    ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (v.style(t.elem, i, t.end), t.setAttr = !0)
                }
            }), t.fn.addBack || (t.fn.addBack = function(t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) }), t.effects.animateClass = function(s, o, r, a) {
                var l = t.speed(o, r, a);
                return this.queue(function() {
                    var o, r = t(this),
                        a = r.attr("class") || "",
                        c = l.children ? r.find("*").addBack() : r;
                    c = c.map(function() { return { el: t(this), start: e(this) } }), o = function() { t.each(n, function(t, e) { s[e] && r[e + "Class"](s[e]) }) }, o(), c = c.map(function() { return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this }), r.attr("class", a), c = c.map(function() {
                        var e = this,
                            i = t.Deferred(),
                            n = t.extend({}, l, { queue: !1, complete: function() { i.resolve(e) } });
                        return this.el.animate(this.diff, n), i.promise()
                    }), t.when.apply(t, c.get()).done(function() {
                        o(), t.each(arguments, function() {
                            var e = this.el;
                            t.each(this.diff, function(t) { e.css(t, "") })
                        }), l.complete.call(r[0])
                    })
                })
            }, t.fn.extend({ addClass: function(e) { return function(i, n, s, o) { return n ? t.effects.animateClass.call(this, { add: i }, n, s, o) : e.apply(this, arguments) } }(t.fn.addClass), removeClass: function(e) { return function(i, n, s, o) { return arguments.length > 1 ? t.effects.animateClass.call(this, { remove: i }, n, s, o) : e.apply(this, arguments) } }(t.fn.removeClass), toggleClass: function(e) { return function(i, n, s, o, r) { return "boolean" == typeof n || void 0 === n ? s ? t.effects.animateClass.call(this, n ? { add: i } : { remove: i }, s, o, r) : e.apply(this, arguments) : t.effects.animateClass.call(this, { toggle: i }, n, s, o) } }(t.fn.toggleClass), switchClass: function(e, i, n, s, o) { return t.effects.animateClass.call(this, { add: i, remove: e }, n, s, o) } })
        }(),
        function() {
            function e(e, i, n, s) { return t.isPlainObject(e) && (i = e, e = e.effect), e = { effect: e }, null == i && (i = {}), t.isFunction(i) && (s = i, n = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (s = n, n = i, i = {}), t.isFunction(n) && (s = n, n = null), i && t.extend(e, i), n = n || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default, e.complete = s || i.complete, e }

            function i(e) { return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect)) }

            function n(t, e) {
                var i = e.outerWidth(),
                    n = e.outerHeight(),
                    s = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
                    o = s.exec(t) || ["", 0, i, n, 0];
                return { top: parseFloat(o[1]) || 0, right: "auto" === o[2] ? i : parseFloat(o[2]), bottom: "auto" === o[3] ? n : parseFloat(o[3]), left: parseFloat(o[4]) || 0 }
            }
            t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function(e) { return function(i) { return !!t(i).data(g) || e(i) } }(t.expr.filters.animated)), !1 !== t.uiBackCompat && t.extend(t.effects, {
                save: function(t, e) { for (var i = 0, n = e.length; n > i; i++) null !== e[i] && t.data(f + e[i], t[0].style[e[i]]) },
                restore: function(t, e) { for (var i, n = 0, s = e.length; s > n; n++) null !== e[n] && (i = t.data(f + e[n]), t.css(e[n], i)) },
                setMode: function(t, e) { return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e },
                createWrapper: function(e) {
                    if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                    var i = { width: e.outerWidth(!0), height: e.outerHeight(!0), float: e.css("float") },
                        n = t("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }),
                        s = { width: e.width(), height: e.height() },
                        o = document.activeElement;
                    try { o.id } catch (t) { o = document.body }
                    return e.wrap(n), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), n = e.parent(), "static" === e.css("position") ? (n.css({ position: "relative" }), e.css({ position: "relative" })) : (t.extend(i, { position: e.css("position"), zIndex: e.css("z-index") }), t.each(["top", "left", "bottom", "right"], function(t, n) { i[n] = e.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto") }), e.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })), e.css(s), n.css(i).show()
                },
                removeWrapper: function(e) { var i = document.activeElement; return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e }
            }), t.extend(t.effects, {
                version: "1.12.1",
                define: function(e, i, n) { return n || (n = i, i = "effect"), t.effects.effect[e] = n, t.effects.effect[e].mode = i, n },
                scaledDimensions: function(t, e, i) {
                    if (0 === e) return { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
                    var n = "horizontal" !== i ? (e || 100) / 100 : 1,
                        s = "vertical" !== i ? (e || 100) / 100 : 1;
                    return { height: t.height() * s, width: t.width() * n, outerHeight: t.outerHeight() * s, outerWidth: t.outerWidth() * n }
                },
                clipToBox: function(t) { return { width: t.clip.right - t.clip.left, height: t.clip.bottom - t.clip.top, left: t.clip.left, top: t.clip.top } },
                unshift: function(t, e, i) {
                    var n = t.queue();
                    e > 1 && n.splice.apply(n, [1, 0].concat(n.splice(e, i))), t.dequeue()
                },
                saveStyle: function(t) { t.data(m, t[0].style.cssText) },
                restoreStyle: function(t) { t[0].style.cssText = t.data(m) || "", t.removeData(m) },
                mode: function(t, e) { var i = t.is(":hidden"); return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e },
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
                    return { x: n, y: i }
                },
                createPlaceholder: function(e) {
                    var i, n = e.css("position"),
                        s = e.position();
                    return e.css({ marginTop: e.css("marginTop"), marginBottom: e.css("marginBottom"), marginLeft: e.css("marginLeft"), marginRight: e.css("marginRight") }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(n) && (n = "absolute", i = t("<" + e[0].nodeName + ">").insertAfter(e).css({ display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block", visibility: "hidden", marginTop: e.css("marginTop"), marginBottom: e.css("marginBottom"), marginLeft: e.css("marginLeft"), marginRight: e.css("marginRight"), float: e.css("float") }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(f + "placeholder", i)), e.css({ position: n, left: s.left, top: s.top }), i
                },
                removePlaceholder: function(t) {
                    var e = f + "placeholder",
                        i = t.data(e);
                    i && (i.remove(), t.removeData(e))
                },
                cleanUp: function(e) { t.effects.restoreStyle(e), t.effects.removePlaceholder(e) },
                setTransition: function(e, i, n, s) {
                    return s = s || {}, t.each(i, function(t, i) {
                        var o = e.cssUnit(i);
                        o[0] > 0 && (s[i] = o[0] * n + o[1])
                    }), s
                }
            }), t.fn.extend({
                effect: function() {
                    function i(e) {
                        function i() { a.removeData(g), t.effects.cleanUp(a), "hide" === n.mode && a.hide(), r() }

                        function r() { t.isFunction(l) && l.call(a[0]), t.isFunction(e) && e() }
                        var a = t(this);
                        n.mode = u.shift(), !1 === t.uiBackCompat || o ? "none" === n.mode ? (a[c](), r()) : s.call(a[0], n, i) : (a.is(":hidden") ? "hide" === c : "show" === c) ? (a[c](), r()) : s.call(a[0], n, r)
                    }
                    var n = e.apply(this, arguments),
                        s = t.effects.effect[n.effect],
                        o = s.mode,
                        r = n.queue,
                        a = r || "fx",
                        l = n.complete,
                        c = n.mode,
                        u = [],
                        h = function(e) {
                            var i = t(this),
                                n = t.effects.mode(i, c) || o;
                            i.data(g, !0), u.push(n), o && ("show" === n || n === o && "hide" === n) && i.show(), o && "none" === n || t.effects.saveStyle(i), t.isFunction(e) && e()
                        };
                    return t.fx.off || !s ? c ? this[c](n.duration, l) : this.each(function() { l && l.call(this) }) : !1 === r ? this.each(h).each(i) : this.queue(a, h).queue(a, i)
                },
                show: function(t) { return function(n) { if (i(n)) return t.apply(this, arguments); var s = e.apply(this, arguments); return s.mode = "show", this.effect.call(this, s) } }(t.fn.show),
                hide: function(t) { return function(n) { if (i(n)) return t.apply(this, arguments); var s = e.apply(this, arguments); return s.mode = "hide", this.effect.call(this, s) } }(t.fn.hide),
                toggle: function(t) { return function(n) { if (i(n) || "boolean" == typeof n) return t.apply(this, arguments); var s = e.apply(this, arguments); return s.mode = "toggle", this.effect.call(this, s) } }(t.fn.toggle),
                cssUnit: function(e) {
                    var i = this.css(e),
                        n = [];
                    return t.each(["em", "px", "%", "pt"], function(t, e) { i.indexOf(e) > 0 && (n = [parseFloat(i), e]) }), n
                },
                cssClip: function(t) { return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : n(this.css("clip"), this) },
                transfer: function(e, i) {
                    var n = t(this),
                        s = t(e.to),
                        o = "fixed" === s.css("position"),
                        r = t("body"),
                        a = o ? r.scrollTop() : 0,
                        l = o ? r.scrollLeft() : 0,
                        c = s.offset(),
                        u = { top: c.top - a, left: c.left - l, height: s.innerHeight(), width: s.innerWidth() },
                        h = n.offset(),
                        d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({ top: h.top - a, left: h.left - l, height: n.innerHeight(), width: n.innerWidth(), position: o ? "fixed" : "absolute" }).animate(u, e.duration, e.easing, function() { d.remove(), t.isFunction(i) && i() })
                }
            }), t.fx.step.clip = function(e) { e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = n(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({ top: e.pos * (e.end.top - e.start.top) + e.start.top, right: e.pos * (e.end.right - e.start.right) + e.start.right, bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom, left: e.pos * (e.end.left - e.start.left) + e.start.left }) }
        }(),
        function() {
            var e = {};
            t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) { e[i] = function(e) { return Math.pow(e, t + 2) } }), t.extend(e, {
                Sine: function(t) { return 1 - Math.cos(t * Math.PI / 2) },
                Circ: function(t) { return 1 - Math.sqrt(1 - t * t) },
                Elastic: function(t) { return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15) },
                Back: function(t) { return t * t * (3 * t - 2) },
                Bounce: function(t) {
                    for (var e, i = 4;
                        ((e = Math.pow(2, --i)) - 1) / 11 > t;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                }
            }), t.each(e, function(e, i) { t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) { return 1 - i(1 - t) }, t.easing["easeInOut" + e] = function(t) { return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2 } })
        }();
    t.effects;
    t.effects.define("blind", "hide", function(e, i) {
        var n = { up: ["bottom", "top"], vertical: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], horizontal: ["right", "left"], right: ["left", "right"] },
            s = t(this),
            o = e.direction || "up",
            r = s.cssClip(),
            a = { clip: t.extend({}, r) },
            l = t.effects.createPlaceholder(s);
        a.clip[n[o][0]] = a.clip[n[o][1]], "show" === e.mode && (s.cssClip(a.clip), l && l.css(t.effects.clipToBox(a)), a.clip = r), l && l.animate(t.effects.clipToBox(a), e.duration, e.easing), s.animate(a, { queue: !1, duration: e.duration, easing: e.easing, complete: i })
    }), t.effects.define("bounce", function(e, i) {
        var n, s, o, r = t(this),
            a = e.mode,
            l = "hide" === a,
            c = "show" === a,
            u = e.direction || "up",
            h = e.distance,
            d = e.times || 5,
            p = 2 * d + (c || l ? 1 : 0),
            f = e.duration / p,
            m = e.easing,
            g = "up" === u || "down" === u ? "top" : "left",
            v = "up" === u || "left" === u,
            _ = 0,
            y = r.queue().length;
        for (t.effects.createPlaceholder(r), o = r.css(g), h || (h = r["top" === g ? "outerHeight" : "outerWidth"]() / 3), c && (s = { opacity: 1 }, s[g] = o, r.css("opacity", 0).css(g, v ? 2 * -h : 2 * h).animate(s, f, m)), l && (h /= Math.pow(2, d - 1)), s = {}, s[g] = o; d > _; _++) n = {}, n[g] = (v ? "-=" : "+=") + h, r.animate(n, f, m).animate(s, f, m), h = l ? 2 * h : h / 2;
        l && (n = { opacity: 0 }, n[g] = (v ? "-=" : "+=") + h, r.animate(n, f, m)), r.queue(i), t.effects.unshift(r, y, p + 1)
    }), t.effects.define("clip", "hide", function(e, i) {
        var n, s = {},
            o = t(this),
            r = e.direction || "vertical",
            a = "both" === r,
            l = a || "horizontal" === r,
            c = a || "vertical" === r;
        n = o.cssClip(), s.clip = { top: c ? (n.bottom - n.top) / 2 : n.top, right: l ? (n.right - n.left) / 2 : n.right, bottom: c ? (n.bottom - n.top) / 2 : n.bottom, left: l ? (n.right - n.left) / 2 : n.left }, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(s.clip), s.clip = n), o.animate(s, { queue: !1, duration: e.duration, easing: e.easing, complete: i })
    }), t.effects.define("drop", "hide", function(e, i) {
        var n, s = t(this),
            o = e.mode,
            r = "show" === o,
            a = e.direction || "left",
            l = "up" === a || "down" === a ? "top" : "left",
            c = "up" === a || "left" === a ? "-=" : "+=",
            u = "+=" === c ? "-=" : "+=",
            h = { opacity: 0 };
        t.effects.createPlaceholder(s), n = e.distance || s["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, h[l] = c + n, r && (s.css(h), h[l] = u + n, h.opacity = 1), s.animate(h, { queue: !1, duration: e.duration, easing: e.easing, complete: i })
    }), t.effects.define("explode", "hide", function(e, i) {
        function n() { y.push(this), y.length === h * d && s() }

        function s() { p.css({ visibility: "visible" }), t(y).remove(), i() }
        var o, r, a, l, c, u, h = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
            d = h,
            p = t(this),
            f = e.mode,
            m = "show" === f,
            g = p.show().css("visibility", "hidden").offset(),
            v = Math.ceil(p.outerWidth() / d),
            _ = Math.ceil(p.outerHeight() / h),
            y = [];
        for (o = 0; h > o; o++)
            for (l = g.top + o * _, u = o - (h - 1) / 2, r = 0; d > r; r++) a = g.left + r * v, c = r - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({ position: "absolute", visibility: "visible", left: -r * v, top: -o * _ }).parent().addClass("ui-effects-explode").css({ position: "absolute", overflow: "hidden", width: v, height: _, left: a + (m ? c * v : 0), top: l + (m ? u * _ : 0), opacity: m ? 0 : 1 }).animate({ left: a + (m ? 0 : c * v), top: l + (m ? 0 : u * _), opacity: m ? 1 : 0 }, e.duration || 500, e.easing, n)
    }), t.effects.define("fade", "toggle", function(e, i) {
        var n = "show" === e.mode;
        t(this).css("opacity", n ? 0 : 1).animate({ opacity: n ? 1 : 0 }, { queue: !1, duration: e.duration, easing: e.easing, complete: i })
    }), t.effects.define("fold", "hide", function(e, i) {
        var n = t(this),
            s = e.mode,
            o = "show" === s,
            r = "hide" === s,
            a = e.size || 15,
            l = /([0-9]+)%/.exec(a),
            c = !!e.horizFirst,
            u = c ? ["right", "bottom"] : ["bottom", "right"],
            h = e.duration / 2,
            d = t.effects.createPlaceholder(n),
            p = n.cssClip(),
            f = { clip: t.extend({}, p) },
            m = { clip: t.extend({}, p) },
            g = [p[u[0]], p[u[1]]],
            v = n.queue().length;
        l && (a = parseInt(l[1], 10) / 100 * g[r ? 0 : 1]), f.clip[u[0]] = a, m.clip[u[0]] = a, m.clip[u[1]] = 0, o && (n.cssClip(m.clip), d && d.css(t.effects.clipToBox(m)), m.clip = p), n.queue(function(i) { d && d.animate(t.effects.clipToBox(f), h, e.easing).animate(t.effects.clipToBox(m), h, e.easing), i() }).animate(f, h, e.easing).animate(m, h, e.easing).queue(i), t.effects.unshift(n, v, 4)
    }), t.effects.define("highlight", "show", function(e, i) {
        var n = t(this),
            s = { backgroundColor: n.css("backgroundColor") };
        "hide" === e.mode && (s.opacity = 0), t.effects.saveStyle(n), n.css({ backgroundImage: "none", backgroundColor: e.color || "#ffff99" }).animate(s, { queue: !1, duration: e.duration, easing: e.easing, complete: i })
    }), t.effects.define("size", function(e, i) {
        var n, s, o, r = t(this),
            a = ["fontSize"],
            l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            c = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            u = e.mode,
            h = "effect" !== u,
            d = e.scale || "both",
            p = e.origin || ["middle", "center"],
            f = r.css("position"),
            m = r.position(),
            g = t.effects.scaledDimensions(r),
            v = e.from || g,
            _ = e.to || t.effects.scaledDimensions(r, 0);
        t.effects.createPlaceholder(r), "show" === u && (o = v, v = _, _ = o), s = { from: { y: v.height / g.height, x: v.width / g.width }, to: { y: _.height / g.height, x: _.width / g.width } }, ("box" === d || "both" === d) && (s.from.y !== s.to.y && (v = t.effects.setTransition(r, l, s.from.y, v), _ = t.effects.setTransition(r, l, s.to.y, _)), s.from.x !== s.to.x && (v = t.effects.setTransition(r, c, s.from.x, v), _ = t.effects.setTransition(r, c, s.to.x, _))), ("content" === d || "both" === d) && s.from.y !== s.to.y && (v = t.effects.setTransition(r, a, s.from.y, v), _ = t.effects.setTransition(r, a, s.to.y, _)), p && (n = t.effects.getBaseline(p, g), v.top = (g.outerHeight - v.outerHeight) * n.y + m.top, v.left = (g.outerWidth - v.outerWidth) * n.x + m.left, _.top = (g.outerHeight - _.outerHeight) * n.y + m.top, _.left = (g.outerWidth - _.outerWidth) * n.x + m.left), r.css(v), ("content" === d || "both" === d) && (l = l.concat(["marginTop", "marginBottom"]).concat(a), c = c.concat(["marginLeft", "marginRight"]), r.find("*[width]").each(function() {
            var i = t(this),
                n = t.effects.scaledDimensions(i),
                o = { height: n.height * s.from.y, width: n.width * s.from.x, outerHeight: n.outerHeight * s.from.y, outerWidth: n.outerWidth * s.from.x },
                r = { height: n.height * s.to.y, width: n.width * s.to.x, outerHeight: n.height * s.to.y, outerWidth: n.width * s.to.x };
            s.from.y !== s.to.y && (o = t.effects.setTransition(i, l, s.from.y, o), r = t.effects.setTransition(i, l, s.to.y, r)), s.from.x !== s.to.x && (o = t.effects.setTransition(i, c, s.from.x, o), r = t.effects.setTransition(i, c, s.to.x, r)), h && t.effects.saveStyle(i), i.css(o), i.animate(r, e.duration, e.easing, function() { h && t.effects.restoreStyle(i) })
        })), r.animate(_, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                var e = r.offset();
                0 === _.opacity && r.css("opacity", v.opacity), h || (r.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(r)), i()
            }
        })
    }), t.effects.define("scale", function(e, i) {
        var n = t(this),
            s = e.mode,
            o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== s ? 0 : 100),
            r = t.extend(!0, { from: t.effects.scaledDimensions(n), to: t.effects.scaledDimensions(n, o, e.direction || "both"), origin: e.origin || ["middle", "center"] }, e);
        e.fade && (r.from.opacity = 1, r.to.opacity = 0), t.effects.effect.size.call(this, r, i)
    }), t.effects.define("puff", "hide", function(e, i) {
        var n = t.extend(!0, {}, e, { fade: !0, percent: parseInt(e.percent, 10) || 150 });
        t.effects.effect.scale.call(this, n, i)
    }), t.effects.define("pulsate", "show", function(e, i) {
        var n = t(this),
            s = e.mode,
            o = "show" === s,
            r = "hide" === s,
            a = o || r,
            l = 2 * (e.times || 5) + (a ? 1 : 0),
            c = e.duration / l,
            u = 0,
            h = 1,
            d = n.queue().length;
        for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), u = 1); l > h; h++) n.animate({ opacity: u }, c, e.easing), u = 1 - u;
        n.animate({ opacity: u }, c, e.easing), n.queue(i), t.effects.unshift(n, d, l + 1)
    }), t.effects.define("shake", function(e, i) {
        var n = 1,
            s = t(this),
            o = e.direction || "left",
            r = e.distance || 20,
            a = e.times || 3,
            l = 2 * a + 1,
            c = Math.round(e.duration / l),
            u = "up" === o || "down" === o ? "top" : "left",
            h = "up" === o || "left" === o,
            d = {},
            p = {},
            f = {},
            m = s.queue().length;
        for (t.effects.createPlaceholder(s), d[u] = (h ? "-=" : "+=") + r, p[u] = (h ? "+=" : "-=") + 2 * r, f[u] = (h ? "-=" : "+=") + 2 * r, s.animate(d, c, e.easing); a > n; n++) s.animate(p, c, e.easing).animate(f, c, e.easing);
        s.animate(p, c, e.easing).animate(d, c / 2, e.easing).queue(i), t.effects.unshift(s, m, l + 1)
    }), t.effects.define("slide", "show", function(e, i) {
        var n, s, o = t(this),
            r = { up: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], right: ["left", "right"] },
            a = e.mode,
            l = e.direction || "left",
            c = "up" === l || "down" === l ? "top" : "left",
            u = "up" === l || "left" === l,
            h = e.distance || o["top" === c ? "outerHeight" : "outerWidth"](!0),
            d = {};
        t.effects.createPlaceholder(o), n = o.cssClip(), s = o.position()[c], d[c] = (u ? -1 : 1) * h + s, d.clip = o.cssClip(), d.clip[r[l][1]] = d.clip[r[l][0]], "show" === a && (o.cssClip(d.clip), o.css(c, d[c]), d.clip = n, d[c] = s), o.animate(d, { queue: !1, duration: e.duration, easing: e.easing, complete: i })
    });
    !1 !== t.uiBackCompat && t.effects.define("transfer", function(e, i) { t(this).transfer(e, i) })
}),
function(t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Popper = e() }(this, function() {
    "use strict";

    function t(t) { return t && "[object Function]" === {}.toString.call(t) }

    function e(t, e) { if (1 !== t.nodeType) return []; var i = getComputedStyle(t, null); return e ? i[e] : i }

    function i(t) { return "HTML" === t.nodeName ? t : t.parentNode || t.host }

    function n(t) {
        if (!t) return document.body;
        switch (t.nodeName) {
            case "HTML":
            case "BODY":
                return t.ownerDocument.body;
            case "#document":
                return t.body
        }
        var s = e(t),
            o = s.overflow,
            r = s.overflowX;
        return /(auto|scroll)/.test(o + s.overflowY + r) ? t : n(i(t))
    }

    function s(t) {
        var i = t && t.offsetParent,
            n = i && i.nodeName;
        return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TD", "TABLE"].indexOf(i.nodeName) && "static" === e(i, "position") ? s(i) : i : t ? t.ownerDocument.documentElement : document.documentElement
    }

    function o(t) { var e = t.nodeName; return "BODY" !== e && ("HTML" === e || s(t.firstElementChild) === t) }

    function r(t) { return null === t.parentNode ? t : r(t.parentNode) }

    function a(t, e) {
        if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
        var i = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            n = i ? t : e,
            l = i ? e : t,
            c = document.createRange();
        c.setStart(n, 0), c.setEnd(l, 0);
        var u = c.commonAncestorContainer;
        if (t !== u && e !== u || n.contains(l)) return o(u) ? u : s(u);
        var h = r(t);
        return h.host ? a(h.host, e) : a(t, r(e).host)
    }

    function l(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top",
            i = "top" === e ? "scrollTop" : "scrollLeft",
            n = t.nodeName;
        if ("BODY" === n || "HTML" === n) { var s = t.ownerDocument.documentElement; return (t.ownerDocument.scrollingElement || s)[i] }
        return t[i]
    }

    function c(t, e) {
        var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            n = l(e, "top"),
            s = l(e, "left"),
            o = i ? -1 : 1;
        return t.top += n * o, t.bottom += n * o, t.left += s * o, t.right += s * o, t
    }

    function u(t, e) {
        var i = "x" === e ? "Left" : "Top",
            n = "Left" == i ? "Right" : "Bottom";
        return parseFloat(t["border" + i + "Width"], 10) + parseFloat(t["border" + n + "Width"], 10)
    }

    function h(t, e, i, n) { return K(e["offset" + t], e["scroll" + t], i["client" + t], i["offset" + t], i["scroll" + t], nt() ? i["offset" + t] + n["margin" + ("Height" === t ? "Top" : "Left")] + n["margin" + ("Height" === t ? "Bottom" : "Right")] : 0) }

    function d() {
        var t = document.body,
            e = document.documentElement,
            i = nt() && getComputedStyle(e);
        return { height: h("Height", t, e, i), width: h("Width", t, e, i) }
    }

    function p(t) { return at({}, t, { right: t.left + t.width, bottom: t.top + t.height }) }

    function f(t) {
        var i = {};
        if (nt()) try {
            i = t.getBoundingClientRect();
            var n = l(t, "top"),
                s = l(t, "left");
            i.top += n, i.left += s, i.bottom += n, i.right += s
        } catch (t) {} else i = t.getBoundingClientRect();
        var o = { left: i.left, top: i.top, width: i.right - i.left, height: i.bottom - i.top },
            r = "HTML" === t.nodeName ? d() : {},
            a = r.width || t.clientWidth || o.right - o.left,
            c = r.height || t.clientHeight || o.bottom - o.top,
            h = t.offsetWidth - a,
            f = t.offsetHeight - c;
        if (h || f) {
            var m = e(t);
            h -= u(m, "x"), f -= u(m, "y"), o.width -= h, o.height -= f
        }
        return p(o)
    }

    function m(t, i) {
        var s = nt(),
            o = "HTML" === i.nodeName,
            r = f(t),
            a = f(i),
            l = n(t),
            u = e(i),
            h = parseFloat(u.borderTopWidth, 10),
            d = parseFloat(u.borderLeftWidth, 10),
            m = p({ top: r.top - a.top - h, left: r.left - a.left - d, width: r.width, height: r.height });
        if (m.marginTop = 0, m.marginLeft = 0, !s && o) {
            var g = parseFloat(u.marginTop, 10),
                v = parseFloat(u.marginLeft, 10);
            m.top -= h - g, m.bottom -= h - g, m.left -= d - v, m.right -= d - v, m.marginTop = g, m.marginLeft = v
        }
        return (s ? i.contains(l) : i === l && "BODY" !== l.nodeName) && (m = c(m, i)), m
    }

    function g(t) {
        var e = t.ownerDocument.documentElement,
            i = m(t, e),
            n = K(e.clientWidth, window.innerWidth || 0),
            s = K(e.clientHeight, window.innerHeight || 0),
            o = l(e),
            r = l(e, "left");
        return p({ top: o - i.top + i.marginTop, left: r - i.left + i.marginLeft, width: n, height: s })
    }

    function v(t) { var n = t.nodeName; return "BODY" !== n && "HTML" !== n && ("fixed" === e(t, "position") || v(i(t))) }

    function _(t, e, s, o) {
        var r = { top: 0, left: 0 },
            l = a(t, e);
        if ("viewport" === o) r = g(l);
        else {
            var c;
            "scrollParent" === o ? (c = n(i(e)), "BODY" === c.nodeName && (c = t.ownerDocument.documentElement)) : c = "window" === o ? t.ownerDocument.documentElement : o;
            var u = m(c, l);
            if ("HTML" !== c.nodeName || v(l)) r = u;
            else {
                var h = d(),
                    p = h.height,
                    f = h.width;
                r.top += u.top - u.marginTop, r.bottom = p + u.top, r.left += u.left - u.marginLeft, r.right = f + u.left
            }
        }
        return r.left += s, r.top += s, r.right -= s, r.bottom -= s, r
    }

    function y(t) { return t.width * t.height }

    function b(t, e, i, n, s) {
        var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto")) return t;
        var r = _(i, n, o, s),
            a = { top: { width: r.width, height: e.top - r.top }, right: { width: r.right - e.right, height: r.height }, bottom: { width: r.width, height: r.bottom - e.bottom }, left: { width: e.left - r.left, height: r.height } },
            l = Object.keys(a).map(function(t) { return at({ key: t }, a[t], { area: y(a[t]) }) }).sort(function(t, e) { return e.area - t.area }),
            c = l.filter(function(t) {
                var e = t.width,
                    n = t.height;
                return e >= i.clientWidth && n >= i.clientHeight
            }),
            u = 0 < c.length ? c[0].key : l[0].key,
            h = t.split("-")[1];
        return u + (h ? "-" + h : "")
    }

    function w(t, e, i) { return m(i, a(e, i)) }

    function C(t) {
        var e = getComputedStyle(t),
            i = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
            n = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
        return { width: t.offsetWidth + n, height: t.offsetHeight + i }
    }

    function x(t) { var e = { left: "right", right: "left", bottom: "top", top: "bottom" }; return t.replace(/left|right|bottom|top/g, function(t) { return e[t] }) }

    function T(t, e, i) {
        i = i.split("-")[0];
        var n = C(t),
            s = { width: n.width, height: n.height },
            o = -1 !== ["right", "left"].indexOf(i),
            r = o ? "top" : "left",
            a = o ? "left" : "top",
            l = o ? "height" : "width",
            c = o ? "width" : "height";
        return s[r] = e[r] + e[l] / 2 - n[l] / 2, s[a] = i === a ? e[a] - n[c] : e[x(a)], s
    }

    function S(t, e) { return Array.prototype.find ? t.find(e) : t.filter(e)[0] }

    function k(t, e, i) { if (Array.prototype.findIndex) return t.findIndex(function(t) { return t[e] === i }); var n = S(t, function(t) { return t[e] === i }); return t.indexOf(n) }

    function D(e, i, n) {
        return (void 0 === n ? e : e.slice(0, k(e, "name", n))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = e.function || e.fn;
            e.enabled && t(n) && (i.offsets.popper = p(i.offsets.popper), i.offsets.reference = p(i.offsets.reference), i = n(i, e))
        }), i
    }

    function E() {
        if (!this.state.isDestroyed) {
            var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
            t.offsets.reference = w(this.state, this.popper, this.reference), t.placement = b(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.offsets.popper = T(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = "absolute", t = D(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
        }
    }

    function I(t, e) { return t.some(function(t) { var i = t.name; return t.enabled && i === e }) }

    function P(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], i = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < e.length - 1; n++) {
            var s = e[n],
                o = s ? "" + s + i : t;
            if (void 0 !== document.body.style[o]) return o
        }
        return null
    }

    function A() { return this.state.isDestroyed = !0, I(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[P("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this }

    function O(t) { var e = t.ownerDocument; return e ? e.defaultView : window }

    function N(t, e, i, s) {
        var o = "BODY" === t.nodeName,
            r = o ? t.ownerDocument.defaultView : t;
        r.addEventListener(e, i, { passive: !0 }), o || N(n(r.parentNode), e, i, s), s.push(r)
    }

    function M(t, e, i, s) { i.updateBound = s, O(t).addEventListener("resize", i.updateBound, { passive: !0 }); var o = n(t); return N(o, "scroll", i.updateBound, i.scrollParents), i.scrollElement = o, i.eventsEnabled = !0, i }

    function H() { this.state.eventsEnabled || (this.state = M(this.reference, this.options, this.state, this.scheduleUpdate)) }

    function $(t, e) { return O(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function(t) { t.removeEventListener("scroll", e.updateBound) }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e }

    function L() { this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = $(this.reference, this.state)) }

    function z(t) { return "" !== t && !isNaN(parseFloat(t)) && isFinite(t) }

    function j(t, e) { Object.keys(e).forEach(function(i) { var n = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && z(e[i]) && (n = "px"), t.style[i] = e[i] + n }) }

    function F(t, e) { Object.keys(e).forEach(function(i) {!1 === e[i] ? t.removeAttribute(i) : t.setAttribute(i, e[i]) }) }

    function R(t, e, i) {
        var n = S(t, function(t) { return t.name === e }),
            s = !!n && t.some(function(t) { return t.name === i && t.enabled && t.order < n.order });
        if (!s) {
            var o = "`" + e + "`";
            console.warn("`" + i + "` modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return s
    }

    function W(t) { return "end" === t ? "start" : "start" === t ? "end" : t }

    function q(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            i = ct.indexOf(t),
            n = ct.slice(i + 1).concat(ct.slice(0, i));
        return e ? n.reverse() : n
    }

    function B(t, e, i, n) {
        var s = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            o = +s[1],
            r = s[2];
        if (!o) return t;
        if (0 === r.indexOf("%")) {
            var a;
            switch (r) {
                case "%p":
                    a = i;
                    break;
                case "%":
                case "%r":
                default:
                    a = n
            }
            return p(a)[e] / 100 * o
        }
        if ("vh" === r || "vw" === r) { return ("vh" === r ? K(document.documentElement.clientHeight, window.innerHeight || 0) : K(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o }
        return o
    }

    function U(t, e, i, n) {
        var s = [0, 0],
            o = -1 !== ["right", "left"].indexOf(n),
            r = t.split(/(\+|\-)/).map(function(t) { return t.trim() }),
            a = r.indexOf(S(r, function(t) { return -1 !== t.search(/,|\s/) }));
        r[a] && -1 === r[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 === a ? [r] : [r.slice(0, a).concat([r[a].split(l)[0]]), [r[a].split(l)[1]].concat(r.slice(a + 1))];
        return c = c.map(function(t, n) {
            var s = (1 === n ? !o : o) ? "height" : "width",
                r = !1;
            return t.reduce(function(t, e) { return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, r = !0, t) : r ? (t[t.length - 1] += e, r = !1, t) : t.concat(e) }, []).map(function(t) { return B(t, s, e, i) })
        }), c.forEach(function(t, e) { t.forEach(function(i, n) { z(i) && (s[e] += i * ("-" === t[n - 1] ? -1 : 1)) }) }), s
    }

    function Y(t, e) {
        var i, n = e.offset,
            s = t.placement,
            o = t.offsets,
            r = o.popper,
            a = o.reference,
            l = s.split("-")[0];
        return i = z(+n) ? [+n, 0] : U(n, r, a, l), "left" === l ? (r.top += i[0], r.left -= i[1]) : "right" === l ? (r.top += i[0], r.left += i[1]) : "top" === l ? (r.left += i[0], r.top -= i[1]) : "bottom" === l && (r.left += i[0], r.top += i[1]), t.popper = r, t
    }
    for (var V = Math.min, X = Math.floor, K = Math.max, Q = "undefined" != typeof window && "undefined" != typeof document, G = ["Edge", "Trident", "Firefox"], J = 0, Z = 0; Z < G.length; Z += 1)
        if (Q && 0 <= navigator.userAgent.indexOf(G[Z])) { J = 1; break }
    var tt, et = Q && window.Promise,
        it = et ? function(t) { var e = !1; return function() { e || (e = !0, window.Promise.resolve().then(function() { e = !1, t() })) } } : function(t) { var e = !1; return function() { e || (e = !0, setTimeout(function() { e = !1, t() }, J)) } },
        nt = function() { return void 0 == tt && (tt = -1 !== navigator.appVersion.indexOf("MSIE 10")), tt },
        st = function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") },
        ot = function() {
            function t(t, e) { for (var i, n = 0; n < e.length; n++) i = e[n], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) }
            return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e }
        }(),
        rt = function(t, e, i) { return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = i, t },
        at = Object.assign || function(t) {
            for (var e, i = 1; i < arguments.length; i++)
                for (var n in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t
        },
        lt = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        ct = lt.slice(3),
        ut = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" },
        ht = function() {
            function e(i, n) {
                var s = this,
                    o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                st(this, e), this.scheduleUpdate = function() { return requestAnimationFrame(s.update) }, this.update = it(this.update.bind(this)), this.options = at({}, e.Defaults, o), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = i && i.jquery ? i[0] : i, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(at({}, e.Defaults.modifiers, o.modifiers)).forEach(function(t) { s.options.modifiers[t] = at({}, e.Defaults.modifiers[t] || {}, o.modifiers ? o.modifiers[t] : {}) }), this.modifiers = Object.keys(this.options.modifiers).map(function(t) { return at({ name: t }, s.options.modifiers[t]) }).sort(function(t, e) { return t.order - e.order }), this.modifiers.forEach(function(e) { e.enabled && t(e.onLoad) && e.onLoad(s.reference, s.popper, s.options, e, s.state) }), this.update();
                var r = this.options.eventsEnabled;
                r && this.enableEventListeners(), this.state.eventsEnabled = r
            }
            return ot(e, [{ key: "update", value: function() { return E.call(this) } }, { key: "destroy", value: function() { return A.call(this) } }, { key: "enableEventListeners", value: function() { return H.call(this) } }, { key: "disableEventListeners", value: function() { return L.call(this) } }]), e
        }();
    return ht.Utils = ("undefined" == typeof window ? global : window).PopperUtils, ht.placements = lt, ht.Defaults = {
        placement: "bottom",
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(t) {
                    var e = t.placement,
                        i = e.split("-")[0],
                        n = e.split("-")[1];
                    if (n) {
                        var s = t.offsets,
                            o = s.reference,
                            r = s.popper,
                            a = -1 !== ["bottom", "top"].indexOf(i),
                            l = a ? "left" : "top",
                            c = a ? "width" : "height",
                            u = { start: rt({}, l, o[l]), end: rt({}, l, o[l] + o[c] - r[c]) };
                        t.offsets.popper = at({}, r, u[n])
                    }
                    return t
                }
            },
            offset: { order: 200, enabled: !0, fn: Y, offset: 0 },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(t, e) {
                    var i = e.boundariesElement || s(t.instance.popper);
                    t.instance.reference === i && (i = s(i));
                    var n = _(t.instance.popper, t.instance.reference, e.padding, i);
                    e.boundaries = n;
                    var o = e.priority,
                        r = t.offsets.popper,
                        a = {
                            primary: function(t) { var i = r[t]; return r[t] < n[t] && !e.escapeWithReference && (i = K(r[t], n[t])), rt({}, t, i) },
                            secondary: function(t) {
                                var i = "right" === t ? "left" : "top",
                                    s = r[i];
                                return r[t] > n[t] && !e.escapeWithReference && (s = V(r[i], n[t] - ("right" === t ? r.width : r.height))), rt({}, i, s)
                            }
                        };
                    return o.forEach(function(t) {
                        var e = -1 === ["left", "top"].indexOf(t) ? "secondary" : "primary";
                        r = at({}, r, a[e](t))
                    }), t.offsets.popper = r, t
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(t) {
                    var e = t.offsets,
                        i = e.popper,
                        n = e.reference,
                        s = t.placement.split("-")[0],
                        o = X,
                        r = -1 !== ["top", "bottom"].indexOf(s),
                        a = r ? "right" : "bottom",
                        l = r ? "left" : "top",
                        c = r ? "width" : "height";
                    return i[a] < o(n[l]) && (t.offsets.popper[l] = o(n[l]) - i[c]), i[l] > o(n[a]) && (t.offsets.popper[l] = o(n[a])), t
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(t, i) {
                    var n;
                    if (!R(t.instance.modifiers, "arrow", "keepTogether")) return t;
                    var s = i.element;
                    if ("string" == typeof s) { if (!(s = t.instance.popper.querySelector(s))) return t } else if (!t.instance.popper.contains(s)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                    var o = t.placement.split("-")[0],
                        r = t.offsets,
                        a = r.popper,
                        l = r.reference,
                        c = -1 !== ["left", "right"].indexOf(o),
                        u = c ? "height" : "width",
                        h = c ? "Top" : "Left",
                        d = h.toLowerCase(),
                        f = c ? "left" : "top",
                        m = c ? "bottom" : "right",
                        g = C(s)[u];
                    l[m] - g < a[d] && (t.offsets.popper[d] -= a[d] - (l[m] - g)), l[d] + g > a[m] && (t.offsets.popper[d] += l[d] + g - a[m]), t.offsets.popper = p(t.offsets.popper);
                    var v = l[d] + l[u] / 2 - g / 2,
                        _ = e(t.instance.popper),
                        y = parseFloat(_["margin" + h], 10),
                        b = parseFloat(_["border" + h + "Width"], 10),
                        w = v - t.offsets.popper[d] - y - b;
                    return w = K(V(a[u] - g, w), 0),
                        t.arrowElement = s, t.offsets.arrow = (n = {}, rt(n, d, Math.round(w)), rt(n, f, ""), n), t
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(t, e) {
                    if (I(t.instance.modifiers, "inner")) return t;
                    if (t.flipped && t.placement === t.originalPlacement) return t;
                    var i = _(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement),
                        n = t.placement.split("-")[0],
                        s = x(n),
                        o = t.placement.split("-")[1] || "",
                        r = [];
                    switch (e.behavior) {
                        case ut.FLIP:
                            r = [n, s];
                            break;
                        case ut.CLOCKWISE:
                            r = q(n);
                            break;
                        case ut.COUNTERCLOCKWISE:
                            r = q(n, !0);
                            break;
                        default:
                            r = e.behavior
                    }
                    return r.forEach(function(a, l) {
                        if (n !== a || r.length === l + 1) return t;
                        n = t.placement.split("-")[0], s = x(n);
                        var c = t.offsets.popper,
                            u = t.offsets.reference,
                            h = X,
                            d = "left" === n && h(c.right) > h(u.left) || "right" === n && h(c.left) < h(u.right) || "top" === n && h(c.bottom) > h(u.top) || "bottom" === n && h(c.top) < h(u.bottom),
                            p = h(c.left) < h(i.left),
                            f = h(c.right) > h(i.right),
                            m = h(c.top) < h(i.top),
                            g = h(c.bottom) > h(i.bottom),
                            v = "left" === n && p || "right" === n && f || "top" === n && m || "bottom" === n && g,
                            _ = -1 !== ["top", "bottom"].indexOf(n),
                            y = !!e.flipVariations && (_ && "start" === o && p || _ && "end" === o && f || !_ && "start" === o && m || !_ && "end" === o && g);
                        (d || v || y) && (t.flipped = !0, (d || v) && (n = r[l + 1]), y && (o = W(o)), t.placement = n + (o ? "-" + o : ""), t.offsets.popper = at({}, t.offsets.popper, T(t.instance.popper, t.offsets.reference, t.placement)), t = D(t.instance.modifiers, t, "flip"))
                    }), t
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(t) {
                    var e = t.placement,
                        i = e.split("-")[0],
                        n = t.offsets,
                        s = n.popper,
                        o = n.reference,
                        r = -1 !== ["left", "right"].indexOf(i),
                        a = -1 === ["top", "left"].indexOf(i);
                    return s[r ? "left" : "top"] = o[i] - (a ? s[r ? "width" : "height"] : 0), t.placement = x(e), t.offsets.popper = p(s), t
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(t) {
                    if (!R(t.instance.modifiers, "hide", "preventOverflow")) return t;
                    var e = t.offsets.reference,
                        i = S(t.instance.modifiers, function(t) { return "preventOverflow" === t.name }).boundaries;
                    if (e.bottom < i.top || e.left > i.right || e.top > i.bottom || e.right < i.left) {
                        if (!0 === t.hide) return t;
                        t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === t.hide) return t;
                        t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                    }
                    return t
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(t, e) {
                    var i = e.x,
                        n = e.y,
                        o = t.offsets.popper,
                        r = S(t.instance.modifiers, function(t) { return "applyStyle" === t.name }).gpuAcceleration;
                    void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var a, l, c = void 0 === r ? e.gpuAcceleration : r,
                        u = s(t.instance.popper),
                        h = f(u),
                        d = { position: o.position },
                        p = { left: X(o.left), top: X(o.top), bottom: X(o.bottom), right: X(o.right) },
                        m = "bottom" === i ? "top" : "bottom",
                        g = "right" === n ? "left" : "right",
                        v = P("transform");
                    if (l = "bottom" == m ? -h.height + p.bottom : p.top, a = "right" == g ? -h.width + p.right : p.left, c && v) d[v] = "translate3d(" + a + "px, " + l + "px, 0)", d[m] = 0, d[g] = 0, d.willChange = "transform";
                    else {
                        var _ = "bottom" == m ? -1 : 1,
                            y = "right" == g ? -1 : 1;
                        d[m] = l * _, d[g] = a * y, d.willChange = m + ", " + g
                    }
                    var b = { "x-placement": t.placement };
                    return t.attributes = at({}, b, t.attributes), t.styles = at({}, d, t.styles), t.arrowStyles = at({}, t.offsets.arrow, t.arrowStyles), t
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(t) { return j(t.instance.popper, t.styles), F(t.instance.popper, t.attributes), t.arrowElement && Object.keys(t.arrowStyles).length && j(t.arrowElement, t.arrowStyles), t },
                onLoad: function(t, e, i, n, s) {
                    var o = w(s, e, t),
                        r = b(i.placement, o, e, t, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
                    return e.setAttribute("x-placement", r), j(e, { position: "absolute" }), i
                },
                gpuAcceleration: void 0
            }
        }
    }, ht
}),
function(t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = t || self).bootstrap = {}, t.jQuery, t.Popper) }(this, function(t, e, i) {
    "use strict";

    function n(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function s(t, e, i) { return e && n(t.prototype, e), i && n(t, i), t }

    function o(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {},
                n = Object.keys(i);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) { return Object.getOwnPropertyDescriptor(i, t).enumerable }))), n.forEach(function(e) {
                var n, s, o;
                n = t, o = i[s = e], s in n ? Object.defineProperty(n, s, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : n[s] = o
            })
        }
        return t
    }

    function r(t) {
        var i = this,
            n = !1;
        return e(this).one(c.TRANSITION_END, function() { n = !0 }), setTimeout(function() { n || c.triggerTransitionEnd(i) }, t), this
    }

    function a(t, e, i) {
        if (0 === t.length) return t;
        if (i && "function" == typeof i) return i(t);
        for (var n = (new window.DOMParser).parseFromString(t, "text/html"), s = Object.keys(e), o = [].slice.call(n.body.querySelectorAll("*")), r = 0, a = o.length; r < a; r++) ! function(t, i) {
            var n = o[t],
                r = n.nodeName.toLowerCase();
            if (-1 === s.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
            var a = [].slice.call(n.attributes),
                l = [].concat(e["*"] || [], e[r] || []);
            a.forEach(function(t) {
                (function(t, e) {
                    var i = t.nodeName.toLowerCase();
                    if (-1 !== e.indexOf(i)) return -1 === It.indexOf(i) || Boolean(t.nodeValue.match(At) || t.nodeValue.match(Ot));
                    for (var n = e.filter(function(t) { return t instanceof RegExp }), s = 0, o = n.length; s < o; s++)
                        if (i.match(n[s])) return !0;
                    return !1
                })(t, l) || n.removeAttribute(t.nodeName)
            })
        }(r);
        return n.body.innerHTML
    }
    e = e && e.hasOwnProperty("default") ? e.default : e, i = i && i.hasOwnProperty("default") ? i.default : i;
    var l = "transitionend",
        c = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(t) { for (; t += ~~(1e6 * Math.random()), document.getElementById(t);); return t },
            getSelectorFromElement: function(t) {
                var e = t.getAttribute("data-target");
                if (!e || "#" === e) {
                    var i = t.getAttribute("href");
                    e = i && "#" !== i ? i.trim() : ""
                }
                try { return document.querySelector(e) ? e : null } catch (t) { return null }
            },
            getTransitionDurationFromElement: function(t) {
                if (!t) return 0;
                var i = e(t).css("transition-duration"),
                    n = e(t).css("transition-delay"),
                    s = parseFloat(i),
                    o = parseFloat(n);
                return s || o ? (i = i.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(i) + parseFloat(n))) : 0
            },
            reflow: function(t) { return t.offsetHeight },
            triggerTransitionEnd: function(t) { e(t).trigger(l) },
            supportsTransitionEnd: function() { return Boolean(l) },
            isElement: function(t) { return (t[0] || t).nodeType },
            typeCheckConfig: function(t, e, i) {
                for (var n in i)
                    if (Object.prototype.hasOwnProperty.call(i, n)) {
                        var s = i[n],
                            o = e[n],
                            r = o && c.isElement(o) ? "element" : (a = o, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                        if (!new RegExp(s).test(r)) throw new Error(t.toUpperCase() + ': Option "' + n + '" provided type "' + r + '" but expected type "' + s + '".')
                    }
                var a
            },
            findShadowRoot: function(t) { if (!document.documentElement.attachShadow) return null; if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? c.findShadowRoot(t.parentNode) : null; var e = t.getRootNode(); return e instanceof ShadowRoot ? e : null }
        };
    e.fn.emulateTransitionEnd = r, e.event.special[c.TRANSITION_END] = { bindType: l, delegateType: l, handle: function(t) { if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments) } };
    var u = "alert",
        h = "bs.alert",
        d = "." + h,
        p = e.fn[u],
        f = { CLOSE: "close" + d, CLOSED: "closed" + d, CLICK_DATA_API: "click" + d + ".data-api" },
        m = function() {
            function t(t) { this._element = t }
            var i = t.prototype;
            return i.close = function(t) {
                var e = this._element;
                t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, i.dispose = function() { e.removeData(this._element, h), this._element = null }, i._getRootElement = function(t) {
                var i = c.getSelectorFromElement(t),
                    n = !1;
                return i && (n = document.querySelector(i)), n || (n = e(t).closest(".alert")[0]), n
            }, i._triggerCloseEvent = function(t) { var i = e.Event(f.CLOSE); return e(t).trigger(i), i }, i._removeElement = function(t) {
                var i = this;
                if (e(t).removeClass("show"), e(t).hasClass("fade")) {
                    var n = c.getTransitionDurationFromElement(t);
                    e(t).one(c.TRANSITION_END, function(e) { return i._destroyElement(t, e) }).emulateTransitionEnd(n)
                } else this._destroyElement(t)
            }, i._destroyElement = function(t) { e(t).detach().trigger(f.CLOSED).remove() }, t._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = e(this),
                        s = n.data(h);
                    s || (s = new t(this), n.data(h, s)), "close" === i && s[i](this)
                })
            }, t._handleDismiss = function(t) { return function(e) { e && e.preventDefault(), t.close(this) } }, s(t, null, [{ key: "VERSION", get: function() { return "4.3.1" } }]), t
        }();
    e(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', m._handleDismiss(new m)), e.fn[u] = m._jQueryInterface, e.fn[u].Constructor = m, e.fn[u].noConflict = function() { return e.fn[u] = p, m._jQueryInterface };
    var g = "button",
        v = "bs.button",
        _ = "." + v,
        y = ".data-api",
        b = e.fn[g],
        w = "active",
        C = '[data-toggle^="button"]',
        x = ".btn",
        T = { CLICK_DATA_API: "click" + _ + y, FOCUS_BLUR_DATA_API: "focus" + _ + y + " blur" + _ + y },
        S = function() {
            function t(t) { this._element = t }
            var i = t.prototype;
            return i.toggle = function() {
                var t = !0,
                    i = !0,
                    n = e(this._element).closest('[data-toggle="buttons"]')[0];
                if (n) {
                    var s = this._element.querySelector('input:not([type="hidden"])');
                    if (s) {
                        if ("radio" === s.type)
                            if (s.checked && this._element.classList.contains(w)) t = !1;
                            else {
                                var o = n.querySelector(".active");
                                o && e(o).removeClass(w)
                            }
                        if (t) {
                            if (s.hasAttribute("disabled") || n.hasAttribute("disabled") || s.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            s.checked = !this._element.classList.contains(w), e(s).trigger("change")
                        }
                        s.focus(), i = !1
                    }
                }
                i && this._element.setAttribute("aria-pressed", !this._element.classList.contains(w)), t && e(this._element).toggleClass(w)
            }, i.dispose = function() { e.removeData(this._element, v), this._element = null }, t._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = e(this).data(v);
                    n || (n = new t(this), e(this).data(v, n)), "toggle" === i && n[i]()
                })
            }, s(t, null, [{ key: "VERSION", get: function() { return "4.3.1" } }]), t
        }();
    e(document).on(T.CLICK_DATA_API, C, function(t) {
        t.preventDefault();
        var i = t.target;
        e(i).hasClass("btn") || (i = e(i).closest(x)), S._jQueryInterface.call(e(i), "toggle")
    }).on(T.FOCUS_BLUR_DATA_API, C, function(t) {
        var i = e(t.target).closest(x)[0];
        e(i).toggleClass("focus", /^focus(in)?$/.test(t.type))
    }), e.fn[g] = S._jQueryInterface, e.fn[g].Constructor = S, e.fn[g].noConflict = function() { return e.fn[g] = b, S._jQueryInterface };
    var k = "carousel",
        D = "bs.carousel",
        E = "." + D,
        I = ".data-api",
        P = e.fn[k],
        A = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
        O = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
        N = "next",
        M = "prev",
        H = { SLIDE: "slide" + E, SLID: "slid" + E, KEYDOWN: "keydown" + E, MOUSEENTER: "mouseenter" + E, MOUSELEAVE: "mouseleave" + E, TOUCHSTART: "touchstart" + E, TOUCHMOVE: "touchmove" + E, TOUCHEND: "touchend" + E, POINTERDOWN: "pointerdown" + E, POINTERUP: "pointerup" + E, DRAG_START: "dragstart" + E, LOAD_DATA_API: "load" + E + I, CLICK_DATA_API: "click" + E + I },
        $ = "active",
        L = ".active.carousel-item",
        z = ".carousel-indicators",
        j = { TOUCH: "touch", PEN: "pen" },
        F = function() {
            function t(t, e) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(z), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners() }
            var i = t.prototype;
            return i.next = function() { this._isSliding || this._slide(N) }, i.nextWhenVisible = function() {!document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next() }, i.prev = function() { this._isSliding || this._slide(M) }, i.pause = function(t) { t || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (c.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, i.cycle = function(t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, i.to = function(t) {
                var i = this;
                this._activeElement = this._element.querySelector(L);
                var n = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding) e(this._element).one(H.SLID, function() { return i.to(t) });
                    else {
                        if (n === t) return this.pause(), void this.cycle();
                        var s = n < t ? N : M;
                        this._slide(s, this._items[t])
                    }
            }, i.dispose = function() { e(this._element).off(E), e.removeData(this._element, D), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, i._getConfig = function(t) { return t = o({}, A, t), c.typeCheckConfig(k, t, O), t }, i._handleSwipe = function() {
                var t = Math.abs(this.touchDeltaX);
                if (!(t <= 40)) {
                    var e = t / this.touchDeltaX;
                    0 < e && this.prev(), e < 0 && this.next()
                }
            }, i._addEventListeners = function() {
                var t = this;
                this._config.keyboard && e(this._element).on(H.KEYDOWN, function(e) { return t._keydown(e) }), "hover" === this._config.pause && e(this._element).on(H.MOUSEENTER, function(e) { return t.pause(e) }).on(H.MOUSELEAVE, function(e) { return t.cycle(e) }), this._config.touch && this._addTouchEventListeners()
            }, i._addTouchEventListeners = function() {
                var t = this;
                if (this._touchSupported) {
                    var i = function(e) { t._pointerEvent && j[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX) },
                        n = function(e) { t._pointerEvent && j[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function(e) { return t.cycle(e) }, 500 + t._config.interval)) };
                    e(this._element.querySelectorAll(".carousel-item img")).on(H.DRAG_START, function(t) { return t.preventDefault() }), this._pointerEvent ? (e(this._element).on(H.POINTERDOWN, function(t) { return i(t) }), e(this._element).on(H.POINTERUP, function(t) { return n(t) }), this._element.classList.add("pointer-event")) : (e(this._element).on(H.TOUCHSTART, function(t) { return i(t) }), e(this._element).on(H.TOUCHMOVE, function(e) {
                        var i;
                        (i = e).originalEvent.touches && 1 < i.originalEvent.touches.length ? t.touchDeltaX = 0 : t.touchDeltaX = i.originalEvent.touches[0].clientX - t.touchStartX
                    }), e(this._element).on(H.TOUCHEND, function(t) { return n(t) }))
                }
            }, i._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next()
                }
            }, i._getItemIndex = function(t) { return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(t) }, i._getItemByDirection = function(t, e) {
                var i = t === N,
                    n = t === M,
                    s = this._getItemIndex(e),
                    o = this._items.length - 1;
                if ((n && 0 === s || i && s === o) && !this._config.wrap) return e;
                var r = (s + (t === M ? -1 : 1)) % this._items.length;
                return -1 === r ? this._items[this._items.length - 1] : this._items[r]
            }, i._triggerSlideEvent = function(t, i) {
                var n = this._getItemIndex(t),
                    s = this._getItemIndex(this._element.querySelector(L)),
                    o = e.Event(H.SLIDE, { relatedTarget: t, direction: i, from: s, to: n });
                return e(this._element).trigger(o), o
            }, i._setActiveIndicatorElement = function(t) {
                if (this._indicatorsElement) {
                    var i = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                    e(i).removeClass($);
                    var n = this._indicatorsElement.children[this._getItemIndex(t)];
                    n && e(n).addClass($)
                }
            }, i._slide = function(t, i) {
                var n, s, o, r = this,
                    a = this._element.querySelector(L),
                    l = this._getItemIndex(a),
                    u = i || a && this._getItemByDirection(t, a),
                    h = this._getItemIndex(u),
                    d = Boolean(this._interval);
                if (o = t === N ? (n = "carousel-item-left", s = "carousel-item-next", "left") : (n = "carousel-item-right", s = "carousel-item-prev", "right"), u && e(u).hasClass($)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(u, o).isDefaultPrevented() && a && u) {
                    this._isSliding = !0, d && this.pause(), this._setActiveIndicatorElement(u);
                    var p = e.Event(H.SLID, { relatedTarget: u, direction: o, from: l, to: h });
                    if (e(this._element).hasClass("slide")) {
                        e(u).addClass(s), c.reflow(u), e(a).addClass(n), e(u).addClass(n);
                        var f = parseInt(u.getAttribute("data-interval"), 10);
                        this._config.interval = f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, f) : this._config.defaultInterval || this._config.interval;
                        var m = c.getTransitionDurationFromElement(a);
                        e(a).one(c.TRANSITION_END, function() { e(u).removeClass(n + " " + s).addClass($), e(a).removeClass($ + " " + s + " " + n), r._isSliding = !1, setTimeout(function() { return e(r._element).trigger(p) }, 0) }).emulateTransitionEnd(m)
                    } else e(a).removeClass($), e(u).addClass($), this._isSliding = !1, e(this._element).trigger(p);
                    d && this.cycle()
                }
            }, t._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = e(this).data(D),
                        s = o({}, A, e(this).data());
                    "object" == typeof i && (s = o({}, s, i));
                    var r = "string" == typeof i ? i : s.slide;
                    if (n || (n = new t(this, s), e(this).data(D, n)), "number" == typeof i) n.to(i);
                    else if ("string" == typeof r) {
                        if (void 0 === n[r]) throw new TypeError('No method named "' + r + '"');
                        n[r]()
                    } else s.interval && s.ride && (n.pause(), n.cycle())
                })
            }, t._dataApiClickHandler = function(i) {
                var n = c.getSelectorFromElement(this);
                if (n) {
                    var s = e(n)[0];
                    if (s && e(s).hasClass("carousel")) {
                        var r = o({}, e(s).data(), e(this).data()),
                            a = this.getAttribute("data-slide-to");
                        a && (r.interval = !1), t._jQueryInterface.call(e(s), r), a && e(s).data(D).to(a), i.preventDefault()
                    }
                }
            }, s(t, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return A } }]), t
        }();
    e(document).on(H.CLICK_DATA_API, "[data-slide], [data-slide-to]", F._dataApiClickHandler), e(window).on(H.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), i = 0, n = t.length; i < n; i++) {
            var s = e(t[i]);
            F._jQueryInterface.call(s, s.data())
        }
    }), e.fn[k] = F._jQueryInterface, e.fn[k].Constructor = F, e.fn[k].noConflict = function() { return e.fn[k] = P, F._jQueryInterface };
    var R = "collapse",
        W = "bs.collapse",
        q = "." + W,
        B = e.fn[R],
        U = { toggle: !0, parent: "" },
        Y = { toggle: "boolean", parent: "(string|element)" },
        V = { SHOW: "show" + q, SHOWN: "shown" + q, HIDE: "hide" + q, HIDDEN: "hidden" + q, CLICK_DATA_API: "click" + q + ".data-api" },
        X = "show",
        K = "collapse",
        Q = "collapsing",
        G = "collapsed",
        J = '[data-toggle="collapse"]',
        Z = function() {
            function t(t, e) {
                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var i = [].slice.call(document.querySelectorAll(J)), n = 0, s = i.length; n < s; n++) {
                    var o = i[n],
                        r = c.getSelectorFromElement(o),
                        a = [].slice.call(document.querySelectorAll(r)).filter(function(e) { return e === t });
                    null !== r && 0 < a.length && (this._selector = r, this._triggerArray.push(o))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var i = t.prototype;
            return i.toggle = function() { e(this._element).hasClass(X) ? this.hide() : this.show() }, i.show = function() {
                var i, n, s = this;
                if (!(this._isTransitioning || e(this._element).hasClass(X) || (this._parent && 0 === (i = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(t) { return "string" == typeof s._config.parent ? t.getAttribute("data-parent") === s._config.parent : t.classList.contains(K) })).length && (i = null), i && (n = e(i).not(this._selector).data(W)) && n._isTransitioning))) {
                    var o = e.Event(V.SHOW);
                    if (e(this._element).trigger(o), !o.isDefaultPrevented()) {
                        i && (t._jQueryInterface.call(e(i).not(this._selector), "hide"), n || e(i).data(W, null));
                        var r = this._getDimension();
                        e(this._element).removeClass(K).addClass(Q), this._element.style[r] = 0, this._triggerArray.length && e(this._triggerArray).removeClass(G).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var a = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                            l = c.getTransitionDurationFromElement(this._element);
                        e(this._element).one(c.TRANSITION_END, function() { e(s._element).removeClass(Q).addClass(K).addClass(X), s._element.style[r] = "", s.setTransitioning(!1), e(s._element).trigger(V.SHOWN) }).emulateTransitionEnd(l), this._element.style[r] = this._element[a] + "px"
                    }
                }
            }, i.hide = function() {
                var t = this;
                if (!this._isTransitioning && e(this._element).hasClass(X)) {
                    var i = e.Event(V.HIDE);
                    if (e(this._element).trigger(i), !i.isDefaultPrevented()) {
                        var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", c.reflow(this._element), e(this._element).addClass(Q).removeClass(K).removeClass(X);
                        var s = this._triggerArray.length;
                        if (0 < s)
                            for (var o = 0; o < s; o++) {
                                var r = this._triggerArray[o],
                                    a = c.getSelectorFromElement(r);
                                null !== a && (e([].slice.call(document.querySelectorAll(a))).hasClass(X) || e(r).addClass(G).attr("aria-expanded", !1))
                            }
                        this.setTransitioning(!0), this._element.style[n] = "";
                        var l = c.getTransitionDurationFromElement(this._element);
                        e(this._element).one(c.TRANSITION_END, function() { t.setTransitioning(!1), e(t._element).removeClass(Q).addClass(K).trigger(V.HIDDEN) }).emulateTransitionEnd(l)
                    }
                }
            }, i.setTransitioning = function(t) { this._isTransitioning = t }, i.dispose = function() { e.removeData(this._element, W), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, i._getConfig = function(t) { return (t = o({}, U, t)).toggle = Boolean(t.toggle), c.typeCheckConfig(R, t, Y), t }, i._getDimension = function() { return e(this._element).hasClass("width") ? "width" : "height" }, i._getParent = function() {
                var i, n = this;
                c.isElement(this._config.parent) ? (i = this._config.parent, void 0 !== this._config.parent.jquery && (i = this._config.parent[0])) : i = document.querySelector(this._config.parent);
                var s = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    o = [].slice.call(i.querySelectorAll(s));
                return e(o).each(function(e, i) { n._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i]) }), i
            }, i._addAriaAndCollapsedClass = function(t, i) {
                var n = e(t).hasClass(X);
                i.length && e(i).toggleClass(G, !n).attr("aria-expanded", n)
            }, t._getTargetFromElement = function(t) { var e = c.getSelectorFromElement(t); return e ? document.querySelector(e) : null }, t._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = e(this),
                        s = n.data(W),
                        r = o({}, U, n.data(), "object" == typeof i && i ? i : {});
                    if (!s && r.toggle && /show|hide/.test(i) && (r.toggle = !1), s || (s = new t(this, r), n.data(W, s)), "string" == typeof i) {
                        if (void 0 === s[i]) throw new TypeError('No method named "' + i + '"');
                        s[i]()
                    }
                })
            }, s(t, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return U } }]), t
        }();
    e(document).on(V.CLICK_DATA_API, J, function(t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var i = e(this),
            n = c.getSelectorFromElement(this),
            s = [].slice.call(document.querySelectorAll(n));
        e(s).each(function() {
            var t = e(this),
                n = t.data(W) ? "toggle" : i.data();
            Z._jQueryInterface.call(t, n)
        })
    }), e.fn[R] = Z._jQueryInterface, e.fn[R].Constructor = Z, e.fn[R].noConflict = function() { return e.fn[R] = B, Z._jQueryInterface };
    var tt = "dropdown",
        et = "bs.dropdown",
        it = "." + et,
        nt = ".data-api",
        st = e.fn[tt],
        ot = new RegExp("38|40|27"),
        rt = { HIDE: "hide" + it, HIDDEN: "hidden" + it, SHOW: "show" + it, SHOWN: "shown" + it, CLICK: "click" + it, CLICK_DATA_API: "click" + it + nt, KEYDOWN_DATA_API: "keydown" + it + nt, KEYUP_DATA_API: "keyup" + it + nt },
        at = "disabled",
        lt = "show",
        ct = "dropdown-menu-right",
        ut = '[data-toggle="dropdown"]',
        ht = ".dropdown-menu",
        dt = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" },
        pt = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" },
        ft = function() {
            function t(t, e) { this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() }
            var n = t.prototype;
            return n.toggle = function() {
                if (!this._element.disabled && !e(this._element).hasClass(at)) {
                    var n = t._getParentFromElement(this._element),
                        s = e(this._menu).hasClass(lt);
                    if (t._clearMenus(), !s) {
                        var o = { relatedTarget: this._element },
                            r = e.Event(rt.SHOW, o);
                        if (e(n).trigger(r), !r.isDefaultPrevented()) { if (!this._inNavbar) { if (void 0 === i) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"); var a = this._element; "parent" === this._config.reference ? a = n : c.isElement(this._config.reference) && (a = this._config.reference, void 0 !== this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && e(n).addClass("position-static"), this._popper = new i(a, this._menu, this._getPopperConfig()) } "ontouchstart" in document.documentElement && 0 === e(n).closest(".navbar-nav").length && e(document.body).children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(lt), e(n).toggleClass(lt).trigger(e.Event(rt.SHOWN, o)) }
                    }
                }
            }, n.show = function() {
                if (!(this._element.disabled || e(this._element).hasClass(at) || e(this._menu).hasClass(lt))) {
                    var i = { relatedTarget: this._element },
                        n = e.Event(rt.SHOW, i),
                        s = t._getParentFromElement(this._element);
                    e(s).trigger(n), n.isDefaultPrevented() || (e(this._menu).toggleClass(lt), e(s).toggleClass(lt).trigger(e.Event(rt.SHOWN, i)))
                }
            }, n.hide = function() {
                if (!this._element.disabled && !e(this._element).hasClass(at) && e(this._menu).hasClass(lt)) {
                    var i = { relatedTarget: this._element },
                        n = e.Event(rt.HIDE, i),
                        s = t._getParentFromElement(this._element);
                    e(s).trigger(n), n.isDefaultPrevented() || (e(this._menu).toggleClass(lt), e(s).toggleClass(lt).trigger(e.Event(rt.HIDDEN, i)))
                }
            }, n.dispose = function() { e.removeData(this._element, et), e(this._element).off(it), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null) }, n.update = function() { this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate() }, n._addEventListeners = function() {
                var t = this;
                e(this._element).on(rt.CLICK, function(e) { e.preventDefault(), e.stopPropagation(), t.toggle() })
            }, n._getConfig = function(t) { return t = o({}, this.constructor.Default, e(this._element).data(), t), c.typeCheckConfig(tt, t, this.constructor.DefaultType), t }, n._getMenuElement = function() {
                if (!this._menu) {
                    var e = t._getParentFromElement(this._element);
                    e && (this._menu = e.querySelector(ht))
                }
                return this._menu
            }, n._getPlacement = function() {
                var t = e(this._element.parentNode),
                    i = "bottom-start";
                return t.hasClass("dropup") ? (i = "top-start", e(this._menu).hasClass(ct) && (i = "top-end")) : t.hasClass("dropright") ? i = "right-start" : t.hasClass("dropleft") ? i = "left-start" : e(this._menu).hasClass(ct) && (i = "bottom-end"), i
            }, n._detectNavbar = function() { return 0 < e(this._element).closest(".navbar").length }, n._getOffset = function() {
                var t = this,
                    e = {};
                return "function" == typeof this._config.offset ? e.fn = function(e) { return e.offsets = o({}, e.offsets, t._config.offset(e.offsets, t._element) || {}), e } : e.offset = this._config.offset, e
            }, n._getPopperConfig = function() { var t = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }; return "static" === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), t }, t._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = e(this).data(et);
                    if (n || (n = new t(this, "object" == typeof i ? i : null), e(this).data(et, n)), "string" == typeof i) {
                        if (void 0 === n[i]) throw new TypeError('No method named "' + i + '"');
                        n[i]()
                    }
                })
            }, t._clearMenus = function(i) {
                if (!i || 3 !== i.which && ("keyup" !== i.type || 9 === i.which))
                    for (var n = [].slice.call(document.querySelectorAll(ut)), s = 0, o = n.length; s < o; s++) {
                        var r = t._getParentFromElement(n[s]),
                            a = e(n[s]).data(et),
                            l = { relatedTarget: n[s] };
                        if (i && "click" === i.type && (l.clickEvent = i), a) {
                            var c = a._menu;
                            if (e(r).hasClass(lt) && !(i && ("click" === i.type && /input|textarea/i.test(i.target.tagName) || "keyup" === i.type && 9 === i.which) && e.contains(r, i.target))) {
                                var u = e.Event(rt.HIDE, l);
                                e(r).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), n[s].setAttribute("aria-expanded", "false"), e(c).removeClass(lt), e(r).removeClass(lt).trigger(e.Event(rt.HIDDEN, l)))
                            }
                        }
                    }
            }, t._getParentFromElement = function(t) { var e, i = c.getSelectorFromElement(t); return i && (e = document.querySelector(i)), e || t.parentNode }, t._dataApiKeydownHandler = function(i) {
                if ((/input|textarea/i.test(i.target.tagName) ? !(32 === i.which || 27 !== i.which && (40 !== i.which && 38 !== i.which || e(i.target).closest(ht).length)) : ot.test(i.which)) && (i.preventDefault(), i.stopPropagation(), !this.disabled && !e(this).hasClass(at))) {
                    var n = t._getParentFromElement(this),
                        s = e(n).hasClass(lt);
                    if (s && (!s || 27 !== i.which && 32 !== i.which)) {
                        var o = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"));
                        if (0 !== o.length) {
                            var r = o.indexOf(i.target);
                            38 === i.which && 0 < r && r--, 40 === i.which && r < o.length - 1 && r++, r < 0 && (r = 0), o[r].focus()
                        }
                    } else {
                        if (27 === i.which) {
                            var a = n.querySelector(ut);
                            e(a).trigger("focus")
                        }
                        e(this).trigger("click")
                    }
                }
            }, s(t, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return dt } }, { key: "DefaultType", get: function() { return pt } }]), t
        }();
    e(document).on(rt.KEYDOWN_DATA_API, ut, ft._dataApiKeydownHandler).on(rt.KEYDOWN_DATA_API, ht, ft._dataApiKeydownHandler).on(rt.CLICK_DATA_API + " " + rt.KEYUP_DATA_API, ft._clearMenus).on(rt.CLICK_DATA_API, ut, function(t) { t.preventDefault(), t.stopPropagation(), ft._jQueryInterface.call(e(this), "toggle") }).on(rt.CLICK_DATA_API, ".dropdown form", function(t) { t.stopPropagation() }), e.fn[tt] = ft._jQueryInterface, e.fn[tt].Constructor = ft, e.fn[tt].noConflict = function() { return e.fn[tt] = st, ft._jQueryInterface };
    var mt = "modal",
        gt = "bs.modal",
        vt = "." + gt,
        _t = e.fn[mt],
        yt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        bt = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
        wt = { HIDE: "hide" + vt, HIDDEN: "hidden" + vt, SHOW: "show" + vt, SHOWN: "shown" + vt, FOCUSIN: "focusin" + vt, RESIZE: "resize" + vt, CLICK_DISMISS: "click.dismiss" + vt, KEYDOWN_DISMISS: "keydown.dismiss" + vt, MOUSEUP_DISMISS: "mouseup.dismiss" + vt, MOUSEDOWN_DISMISS: "mousedown.dismiss" + vt, CLICK_DATA_API: "click" + vt + ".data-api" },
        Ct = "modal-open",
        xt = "fade",
        Tt = "show",
        St = ".modal-dialog",
        kt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        Dt = ".sticky-top",
        Et = function() {
            function t(t, e) { this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(St), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0 }
            var i = t.prototype;
            return i.toggle = function(t) { return this._isShown ? this.hide() : this.show(t) }, i.show = function(t) {
                var i = this;
                if (!this._isShown && !this._isTransitioning) {
                    e(this._element).hasClass(xt) && (this._isTransitioning = !0);
                    var n = e.Event(wt.SHOW, { relatedTarget: t });
                    e(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(wt.CLICK_DISMISS, '[data-dismiss="modal"]', function(t) { return i.hide(t) }), e(this._dialog).on(wt.MOUSEDOWN_DISMISS, function() { e(i._element).one(wt.MOUSEUP_DISMISS, function(t) { e(t.target).is(i._element) && (i._ignoreBackdropClick = !0) }) }), this._showBackdrop(function() { return i._showElement(t) }))
                }
            }, i.hide = function(t) {
                var i = this;
                if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
                    var n = e.Event(wt.HIDE);
                    if (e(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var s = e(this._element).hasClass(xt);
                        if (s && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(wt.FOCUSIN), e(this._element).removeClass(Tt), e(this._element).off(wt.CLICK_DISMISS), e(this._dialog).off(wt.MOUSEDOWN_DISMISS), s) {
                            var o = c.getTransitionDurationFromElement(this._element);
                            e(this._element).one(c.TRANSITION_END, function(t) { return i._hideModal(t) }).emulateTransitionEnd(o)
                        } else this._hideModal()
                    }
                }
            }, i.dispose = function() {
                [window, this._element, this._dialog].forEach(function(t) { return e(t).off(vt) }), e(document).off(wt.FOCUSIN), e.removeData(this._element, gt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, i.handleUpdate = function() { this._adjustDialog() }, i._getConfig = function(t) { return t = o({}, yt, t), c.typeCheckConfig(mt, t, bt), t }, i._showElement = function(t) {
                var i = this,
                    n = e(this._element).hasClass(xt);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), e(this._dialog).hasClass("modal-dialog-scrollable") ? this._dialog.querySelector(".modal-body").scrollTop = 0 : this._element.scrollTop = 0, n && c.reflow(this._element), e(this._element).addClass(Tt), this._config.focus && this._enforceFocus();
                var s = e.Event(wt.SHOWN, { relatedTarget: t }),
                    o = function() { i._config.focus && i._element.focus(), i._isTransitioning = !1, e(i._element).trigger(s) };
                if (n) {
                    var r = c.getTransitionDurationFromElement(this._dialog);
                    e(this._dialog).one(c.TRANSITION_END, o).emulateTransitionEnd(r)
                } else o()
            }, i._enforceFocus = function() {
                var t = this;
                e(document).off(wt.FOCUSIN).on(wt.FOCUSIN, function(i) { document !== i.target && t._element !== i.target && 0 === e(t._element).has(i.target).length && t._element.focus() })
            }, i._setEscapeEvent = function() {
                var t = this;
                this._isShown && this._config.keyboard ? e(this._element).on(wt.KEYDOWN_DISMISS, function(e) { 27 === e.which && (e.preventDefault(), t.hide()) }) : this._isShown || e(this._element).off(wt.KEYDOWN_DISMISS)
            }, i._setResizeEvent = function() {
                var t = this;
                this._isShown ? e(window).on(wt.RESIZE, function(e) { return t.handleUpdate(e) }) : e(window).off(wt.RESIZE)
            }, i._hideModal = function() {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() { e(document.body).removeClass(Ct), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(wt.HIDDEN) })
            }, i._removeBackdrop = function() { this._backdrop && (e(this._backdrop).remove(), this._backdrop = null) }, i._showBackdrop = function(t) {
                var i = this,
                    n = e(this._element).hasClass(xt) ? xt : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), e(this._backdrop).appendTo(document.body), e(this._element).on(wt.CLICK_DISMISS, function(t) { i._ignoreBackdropClick ? i._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === i._config.backdrop ? i._element.focus() : i.hide()) }), n && c.reflow(this._backdrop), e(this._backdrop).addClass(Tt), !t) return;
                    if (!n) return void t();
                    var s = c.getTransitionDurationFromElement(this._backdrop);
                    e(this._backdrop).one(c.TRANSITION_END, t).emulateTransitionEnd(s)
                } else if (!this._isShown && this._backdrop) {
                    e(this._backdrop).removeClass(Tt);
                    var o = function() { i._removeBackdrop(), t && t() };
                    if (e(this._element).hasClass(xt)) {
                        var r = c.getTransitionDurationFromElement(this._backdrop);
                        e(this._backdrop).one(c.TRANSITION_END, o).emulateTransitionEnd(r)
                    } else o()
                } else t && t()
            }, i._adjustDialog = function() { var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, i._resetAdjustments = function() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, i._checkScrollbar = function() {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, i._setScrollbar = function() {
                var t = this;
                if (this._isBodyOverflowing) {
                    var i = [].slice.call(document.querySelectorAll(kt)),
                        n = [].slice.call(document.querySelectorAll(Dt));
                    e(i).each(function(i, n) {
                        var s = n.style.paddingRight,
                            o = e(n).css("padding-right");
                        e(n).data("padding-right", s).css("padding-right", parseFloat(o) + t._scrollbarWidth + "px")
                    }), e(n).each(function(i, n) {
                        var s = n.style.marginRight,
                            o = e(n).css("margin-right");
                        e(n).data("margin-right", s).css("margin-right", parseFloat(o) - t._scrollbarWidth + "px")
                    });
                    var s = document.body.style.paddingRight,
                        o = e(document.body).css("padding-right");
                    e(document.body).data("padding-right", s).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                }
                e(document.body).addClass(Ct)
            }, i._resetScrollbar = function() {
                var t = [].slice.call(document.querySelectorAll(kt));
                e(t).each(function(t, i) {
                    var n = e(i).data("padding-right");
                    e(i).removeData("padding-right"), i.style.paddingRight = n || ""
                });
                var i = [].slice.call(document.querySelectorAll("" + Dt));
                e(i).each(function(t, i) {
                    var n = e(i).data("margin-right");
                    void 0 !== n && e(i).css("margin-right", n).removeData("margin-right")
                });
                var n = e(document.body).data("padding-right");
                e(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
            }, i._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = "modal-scrollbar-measure", document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, t._jQueryInterface = function(i, n) {
                return this.each(function() {
                    var s = e(this).data(gt),
                        r = o({}, yt, e(this).data(), "object" == typeof i && i ? i : {});
                    if (s || (s = new t(this, r), e(this).data(gt, s)), "string" == typeof i) {
                        if (void 0 === s[i]) throw new TypeError('No method named "' + i + '"');
                        s[i](n)
                    } else r.show && s.show(n)
                })
            }, s(t, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return yt } }]), t
        }();
    e(document).on(wt.CLICK_DATA_API, '[data-toggle="modal"]', function(t) {
        var i, n = this,
            s = c.getSelectorFromElement(this);
        s && (i = document.querySelector(s));
        var r = e(i).data(gt) ? "toggle" : o({}, e(i).data(), e(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var a = e(i).one(wt.SHOW, function(t) { t.isDefaultPrevented() || a.one(wt.HIDDEN, function() { e(n).is(":visible") && n.focus() }) });
        Et._jQueryInterface.call(e(i), r, this)
    }), e.fn[mt] = Et._jQueryInterface, e.fn[mt].Constructor = Et, e.fn[mt].noConflict = function() { return e.fn[mt] = _t, Et._jQueryInterface };
    var It = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Pt = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] },
        At = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        Ot = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i,
        Nt = "tooltip",
        Mt = "bs.tooltip",
        Ht = "." + Mt,
        $t = e.fn[Nt],
        Lt = "bs-tooltip",
        zt = new RegExp("(^|\\s)" + Lt + "\\S+", "g"),
        jt = ["sanitize", "whiteList", "sanitizeFn"],
        Ft = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object" },
        Rt = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
        Wt = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent", sanitize: !0, sanitizeFn: null, whiteList: Pt },
        qt = "show",
        Bt = { HIDE: "hide" + Ht, HIDDEN: "hidden" + Ht, SHOW: "show" + Ht, SHOWN: "shown" + Ht, INSERTED: "inserted" + Ht, CLICK: "click" + Ht, FOCUSIN: "focusin" + Ht, FOCUSOUT: "focusout" + Ht, MOUSEENTER: "mouseenter" + Ht, MOUSELEAVE: "mouseleave" + Ht },
        Ut = "fade",
        Yt = "show",
        Vt = "hover",
        Xt = "focus",
        Kt = function() {
            function t(t, e) {
                if (void 0 === i) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
            }
            var n = t.prototype;
            return n.enable = function() { this._isEnabled = !0 }, n.disable = function() { this._isEnabled = !1 }, n.toggleEnabled = function() { this._isEnabled = !this._isEnabled }, n.toggle = function(t) {
                if (this._isEnabled)
                    if (t) {
                        var i = this.constructor.DATA_KEY,
                            n = e(t.currentTarget).data(i);
                        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (e(this.getTipElement()).hasClass(Yt)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, n.dispose = function() { clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null }, n.show = function() {
                var t = this;
                if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
                var n = e.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    e(this.element).trigger(n);
                    var s = c.findShadowRoot(this.element),
                        o = e.contains(null !== s ? s : this.element.ownerDocument.documentElement, this.element);
                    if (n.isDefaultPrevented() || !o) return;
                    var r = this.getTipElement(),
                        a = c.getUID(this.constructor.NAME);
                    r.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && e(r).addClass(Ut);
                    var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                        u = this._getAttachment(l);
                    this.addAttachmentClass(u);
                    var h = this._getContainer();
                    e(r).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(r).appendTo(h), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new i(this.element, r, { placement: u, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: ".arrow" }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function(e) { e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e) }, onUpdate: function(e) { return t._handlePopperPlacementChange(e) } }), e(r).addClass(Yt), "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);
                    var d = function() {
                        t.config.animation && t._fixTransition();
                        var i = t._hoverState;
                        t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), "out" === i && t._leave(null, t)
                    };
                    if (e(this.tip).hasClass(Ut)) {
                        var p = c.getTransitionDurationFromElement(this.tip);
                        e(this.tip).one(c.TRANSITION_END, d).emulateTransitionEnd(p)
                    } else d()
                }
            }, n.hide = function(t) {
                var i = this,
                    n = this.getTipElement(),
                    s = e.Event(this.constructor.Event.HIDE),
                    o = function() { i._hoverState !== qt && n.parentNode && n.parentNode.removeChild(n), i._cleanTipClass(), i.element.removeAttribute("aria-describedby"), e(i.element).trigger(i.constructor.Event.HIDDEN), null !== i._popper && i._popper.destroy(), t && t() };
                if (e(this.element).trigger(s), !s.isDefaultPrevented()) {
                    if (e(n).removeClass(Yt), "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), this._activeTrigger.click = !1, this._activeTrigger[Xt] = !1, this._activeTrigger[Vt] = !1, e(this.tip).hasClass(Ut)) {
                        var r = c.getTransitionDurationFromElement(n);
                        e(n).one(c.TRANSITION_END, o).emulateTransitionEnd(r)
                    } else o();
                    this._hoverState = ""
                }
            }, n.update = function() { null !== this._popper && this._popper.scheduleUpdate() }, n.isWithContent = function() { return Boolean(this.getTitle()) }, n.addAttachmentClass = function(t) { e(this.getTipElement()).addClass(Lt + "-" + t) }, n.getTipElement = function() { return this.tip = this.tip || e(this.config.template)[0], this.tip }, n.setContent = function() {
                var t = this.getTipElement();
                this.setElementContent(e(t.querySelectorAll(".tooltip-inner")), this.getTitle()), e(t).removeClass(Ut + " " + Yt)
            }, n.setElementContent = function(t, i) { "object" != typeof i || !i.nodeType && !i.jquery ? this.config.html ? (this.config.sanitize && (i = a(i, this.config.whiteList, this.config.sanitizeFn)), t.html(i)) : t.text(i) : this.config.html ? e(i).parent().is(t) || t.empty().append(i) : t.text(e(i).text()) }, n.getTitle = function() { var t = this.element.getAttribute("data-original-title"); return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t }, n._getOffset = function() {
                var t = this,
                    e = {};
                return "function" == typeof this.config.offset ? e.fn = function(e) { return e.offsets = o({}, e.offsets, t.config.offset(e.offsets, t.element) || {}), e } : e.offset = this.config.offset, e
            }, n._getContainer = function() { return !1 === this.config.container ? document.body : c.isElement(this.config.container) ? e(this.config.container) : e(document).find(this.config.container) }, n._getAttachment = function(t) { return Rt[t.toUpperCase()] }, n._setListeners = function() {
                var t = this;
                this.config.trigger.split(" ").forEach(function(i) {
                    if ("click" === i) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function(e) { return t.toggle(e) });
                    else if ("manual" !== i) {
                        var n = i === Vt ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                            s = i === Vt ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                        e(t.element).on(n, t.config.selector, function(e) { return t._enter(e) }).on(s, t.config.selector, function(e) { return t._leave(e) })
                    }
                }), e(this.element).closest(".modal").on("hide.bs.modal", function() { t.element && t.hide() }), this.config.selector ? this.config = o({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle()
            }, n._fixTitle = function() {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, n._enter = function(t, i) {
                var n = this.constructor.DATA_KEY;
                (i = i || e(t.currentTarget).data(n)) || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), t && (i._activeTrigger["focusin" === t.type ? Xt : Vt] = !0), e(i.getTipElement()).hasClass(Yt) || i._hoverState === qt ? i._hoverState = qt : (clearTimeout(i._timeout), i._hoverState = qt, i.config.delay && i.config.delay.show ? i._timeout = setTimeout(function() { i._hoverState === qt && i.show() }, i.config.delay.show) : i.show())
            }, n._leave = function(t, i) {
                var n = this.constructor.DATA_KEY;
                (i = i || e(t.currentTarget).data(n)) || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), t && (i._activeTrigger["focusout" === t.type ? Xt : Vt] = !1), i._isWithActiveTrigger() || (clearTimeout(i._timeout), i._hoverState = "out", i.config.delay && i.config.delay.hide ? i._timeout = setTimeout(function() { "out" === i._hoverState && i.hide() }, i.config.delay.hide) : i.hide())
            }, n._isWithActiveTrigger = function() {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1
            }, n._getConfig = function(t) { var i = e(this.element).data(); return Object.keys(i).forEach(function(t) {-1 !== jt.indexOf(t) && delete i[t] }), "number" == typeof(t = o({}, this.constructor.Default, i, "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), c.typeCheckConfig(Nt, t, this.constructor.DefaultType), t.sanitize && (t.template = a(t.template, t.whiteList, t.sanitizeFn)), t }, n._getDelegateConfig = function() {
                var t = {};
                if (this.config)
                    for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, n._cleanTipClass = function() {
                var t = e(this.getTipElement()),
                    i = t.attr("class").match(zt);
                null !== i && i.length && t.removeClass(i.join(""))
            }, n._handlePopperPlacementChange = function(t) {
                var e = t.instance;
                this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
            }, n._fixTransition = function() {
                var t = this.getTipElement(),
                    i = this.config.animation;
                null === t.getAttribute("x-placement") && (e(t).removeClass(Ut), this.config.animation = !1, this.hide(), this.show(), this.config.animation = i)
            }, t._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = e(this).data(Mt),
                        s = "object" == typeof i && i;
                    if ((n || !/dispose|hide/.test(i)) && (n || (n = new t(this, s), e(this).data(Mt, n)), "string" == typeof i)) {
                        if (void 0 === n[i]) throw new TypeError('No method named "' + i + '"');
                        n[i]()
                    }
                })
            }, s(t, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return Wt } }, { key: "NAME", get: function() { return Nt } }, { key: "DATA_KEY", get: function() { return Mt } }, { key: "Event", get: function() { return Bt } }, { key: "EVENT_KEY", get: function() { return Ht } }, { key: "DefaultType", get: function() { return Ft } }]), t
        }();
    e.fn[Nt] = Kt._jQueryInterface, e.fn[Nt].Constructor = Kt, e.fn[Nt].noConflict = function() { return e.fn[Nt] = $t, Kt._jQueryInterface };
    var Qt = "popover",
        Gt = "bs.popover",
        Jt = "." + Gt,
        Zt = e.fn[Qt],
        te = "bs-popover",
        ee = new RegExp("(^|\\s)" + te + "\\S+", "g"),
        ie = o({}, Kt.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
        ne = o({}, Kt.DefaultType, { content: "(string|element|function)" }),
        se = { HIDE: "hide" + Jt, HIDDEN: "hidden" + Jt, SHOW: "show" + Jt, SHOWN: "shown" + Jt, INSERTED: "inserted" + Jt, CLICK: "click" + Jt, FOCUSIN: "focusin" + Jt, FOCUSOUT: "focusout" + Jt, MOUSEENTER: "mouseenter" + Jt, MOUSELEAVE: "mouseleave" + Jt },
        oe = function(t) {
            function i() { return t.apply(this, arguments) || this }
            var n, o;
            o = t, (n = i).prototype = Object.create(o.prototype), (n.prototype.constructor = n).__proto__ = o;
            var r = i.prototype;
            return r.isWithContent = function() { return this.getTitle() || this._getContent() }, r.addAttachmentClass = function(t) { e(this.getTipElement()).addClass(te + "-" + t) }, r.getTipElement = function() { return this.tip = this.tip || e(this.config.template)[0], this.tip }, r.setContent = function() {
                var t = e(this.getTipElement());
                this.setElementContent(t.find(".popover-header"), this.getTitle());
                var i = this._getContent();
                "function" == typeof i && (i = i.call(this.element)), this.setElementContent(t.find(".popover-body"), i), t.removeClass("fade show")
            }, r._getContent = function() { return this.element.getAttribute("data-content") || this.config.content }, r._cleanTipClass = function() {
                var t = e(this.getTipElement()),
                    i = t.attr("class").match(ee);
                null !== i && 0 < i.length && t.removeClass(i.join(""))
            }, i._jQueryInterface = function(t) {
                return this.each(function() {
                    var n = e(this).data(Gt),
                        s = "object" == typeof t ? t : null;
                    if ((n || !/dispose|hide/.test(t)) && (n || (n = new i(this, s), e(this).data(Gt, n)), "string" == typeof t)) {
                        if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                        n[t]()
                    }
                })
            }, s(i, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return ie } }, { key: "NAME", get: function() { return Qt } }, { key: "DATA_KEY", get: function() { return Gt } }, { key: "Event", get: function() { return se } }, { key: "EVENT_KEY", get: function() { return Jt } }, { key: "DefaultType", get: function() { return ne } }]), i
        }(Kt);
    e.fn[Qt] = oe._jQueryInterface, e.fn[Qt].Constructor = oe, e.fn[Qt].noConflict = function() { return e.fn[Qt] = Zt, oe._jQueryInterface };
    var re = "scrollspy",
        ae = "bs.scrollspy",
        le = "." + ae,
        ce = e.fn[re],
        ue = { offset: 10, method: "auto", target: "" },
        he = { offset: "number", method: "string", target: "(string|element)" },
        de = { ACTIVATE: "activate" + le, SCROLL: "scroll" + le, LOAD_DATA_API: "load" + le + ".data-api" },
        pe = "active",
        fe = ".nav, .list-group",
        me = ".nav-link",
        ge = ".list-group-item",
        ve = ".dropdown-item",
        _e = "position",
        ye = function() {
            function t(t, i) {
                var n = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(i), this._selector = this._config.target + " " + me + "," + this._config.target + " " + ge + "," + this._config.target + " " + ve, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(de.SCROLL, function(t) { return n._process(t) }), this.refresh(), this._process()
            }
            var i = t.prototype;
            return i.refresh = function() {
                var t = this,
                    i = this._scrollElement === this._scrollElement.window ? "offset" : _e,
                    n = "auto" === this._config.method ? i : this._config.method,
                    s = n === _e ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(t) { var i, o = c.getSelectorFromElement(t); if (o && (i = document.querySelector(o)), i) { var r = i.getBoundingClientRect(); if (r.width || r.height) return [e(i)[n]().top + s, o] } return null }).filter(function(t) { return t }).sort(function(t, e) { return t[0] - e[0] }).forEach(function(e) { t._offsets.push(e[0]), t._targets.push(e[1]) })
            }, i.dispose = function() { e.removeData(this._element, ae), e(this._scrollElement).off(le), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, i._getConfig = function(t) {
                if ("string" != typeof(t = o({}, ue, "object" == typeof t && t ? t : {})).target) {
                    var i = e(t.target).attr("id");
                    i || (i = c.getUID(re), e(t.target).attr("id", i)), t.target = "#" + i
                }
                return c.typeCheckConfig(re, t, he), t
            }, i._getScrollTop = function() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, i._getScrollHeight = function() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, i._getOffsetHeight = function() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, i._process = function() {
                var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    i = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), i <= t) {
                    var n = this._targets[this._targets.length - 1];
                    this._activeTarget !== n && this._activate(n)
                } else { if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear(); for (var s = this._offsets.length; s--;) this._activeTarget !== this._targets[s] && t >= this._offsets[s] && (void 0 === this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s]) }
            }, i._activate = function(t) {
                this._activeTarget = t, this._clear();
                var i = this._selector.split(",").map(function(e) { return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]' }),
                    n = e([].slice.call(document.querySelectorAll(i.join(","))));
                n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass(pe), n.addClass(pe)) : (n.addClass(pe), n.parents(fe).prev(me + ", " + ge).addClass(pe), n.parents(fe).prev(".nav-item").children(me).addClass(pe)), e(this._scrollElement).trigger(de.ACTIVATE, { relatedTarget: t })
            }, i._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(t) { return t.classList.contains(pe) }).forEach(function(t) { return t.classList.remove(pe) })
            }, t._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = e(this).data(ae);
                    if (n || (n = new t(this, "object" == typeof i && i), e(this).data(ae, n)), "string" == typeof i) {
                        if (void 0 === n[i]) throw new TypeError('No method named "' + i + '"');
                        n[i]()
                    }
                })
            }, s(t, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return ue } }]), t
        }();
    e(window).on(de.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), i = t.length; i--;) {
            var n = e(t[i]);
            ye._jQueryInterface.call(n, n.data())
        }
    }), e.fn[re] = ye._jQueryInterface, e.fn[re].Constructor = ye, e.fn[re].noConflict = function() { return e.fn[re] = ce, ye._jQueryInterface };
    var be = "bs.tab",
        we = "." + be,
        Ce = e.fn.tab,
        xe = { HIDE: "hide" + we, HIDDEN: "hidden" + we, SHOW: "show" + we, SHOWN: "shown" + we, CLICK_DATA_API: "click" + we + ".data-api" },
        Te = "active",
        Se = ".active",
        ke = "> li > .active",
        De = function() {
            function t(t) { this._element = t }
            var i = t.prototype;
            return i.show = function() {
                var t = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(Te) || e(this._element).hasClass("disabled"))) {
                    var i, n, s = e(this._element).closest(".nav, .list-group")[0],
                        o = c.getSelectorFromElement(this._element);
                    if (s) {
                        var r = "UL" === s.nodeName || "OL" === s.nodeName ? ke : Se;
                        n = (n = e.makeArray(e(s).find(r)))[n.length - 1]
                    }
                    var a = e.Event(xe.HIDE, { relatedTarget: this._element }),
                        l = e.Event(xe.SHOW, { relatedTarget: n });
                    if (n && e(n).trigger(a), e(this._element).trigger(l), !l.isDefaultPrevented() && !a.isDefaultPrevented()) {
                        o && (i = document.querySelector(o)), this._activate(this._element, s);
                        var u = function() {
                            var i = e.Event(xe.HIDDEN, { relatedTarget: t._element }),
                                s = e.Event(xe.SHOWN, { relatedTarget: n });
                            e(n).trigger(i), e(t._element).trigger(s)
                        };
                        i ? this._activate(i, i.parentNode, u) : u()
                    }
                }
            }, i.dispose = function() { e.removeData(this._element, be), this._element = null }, i._activate = function(t, i, n) {
                var s = this,
                    o = (!i || "UL" !== i.nodeName && "OL" !== i.nodeName ? e(i).children(Se) : e(i).find(ke))[0],
                    r = n && o && e(o).hasClass("fade"),
                    a = function() { return s._transitionComplete(t, o, n) };
                if (o && r) {
                    var l = c.getTransitionDurationFromElement(o);
                    e(o).removeClass("show").one(c.TRANSITION_END, a).emulateTransitionEnd(l)
                } else a()
            }, i._transitionComplete = function(t, i, n) {
                if (i) {
                    e(i).removeClass(Te);
                    var s = e(i.parentNode).find("> .dropdown-menu .active")[0];
                    s && e(s).removeClass(Te), "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1)
                }
                if (e(t).addClass(Te), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), c.reflow(t), t.classList.contains("fade") && t.classList.add("show"), t.parentNode && e(t.parentNode).hasClass("dropdown-menu")) {
                    var o = e(t).closest(".dropdown")[0];
                    if (o) {
                        var r = [].slice.call(o.querySelectorAll(".dropdown-toggle"));
                        e(r).addClass(Te)
                    }
                    t.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, t._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = e(this),
                        s = n.data(be);
                    if (s || (s = new t(this), n.data(be, s)), "string" == typeof i) {
                        if (void 0 === s[i]) throw new TypeError('No method named "' + i + '"');
                        s[i]()
                    }
                })
            }, s(t, null, [{ key: "VERSION", get: function() { return "4.3.1" } }]), t
        }();
    e(document).on(xe.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(t) { t.preventDefault(), De._jQueryInterface.call(e(this), "show") }), e.fn.tab = De._jQueryInterface, e.fn.tab.Constructor = De, e.fn.tab.noConflict = function() { return e.fn.tab = Ce, De._jQueryInterface };
    var Ee = "toast",
        Ie = "bs.toast",
        Pe = "." + Ie,
        Ae = e.fn[Ee],
        Oe = { CLICK_DISMISS: "click.dismiss" + Pe, HIDE: "hide" + Pe, HIDDEN: "hidden" + Pe, SHOW: "show" + Pe, SHOWN: "shown" + Pe },
        Ne = "show",
        Me = "showing",
        He = { animation: "boolean", autohide: "boolean", delay: "number" },
        $e = { animation: !0, autohide: !0, delay: 500 },
        Le = function() {
            function t(t, e) { this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners() }
            var i = t.prototype;
            return i.show = function() {
                var t = this;
                e(this._element).trigger(Oe.SHOW), this._config.animation && this._element.classList.add("fade");
                var i = function() { t._element.classList.remove(Me), t._element.classList.add(Ne), e(t._element).trigger(Oe.SHOWN), t._config.autohide && t.hide() };
                if (this._element.classList.remove("hide"), this._element.classList.add(Me), this._config.animation) {
                    var n = c.getTransitionDurationFromElement(this._element);
                    e(this._element).one(c.TRANSITION_END, i).emulateTransitionEnd(n)
                } else i()
            }, i.hide = function(t) {
                var i = this;
                this._element.classList.contains(Ne) && (e(this._element).trigger(Oe.HIDE), t ? this._close() : this._timeout = setTimeout(function() { i._close() }, this._config.delay))
            }, i.dispose = function() { clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Ne) && this._element.classList.remove(Ne), e(this._element).off(Oe.CLICK_DISMISS), e.removeData(this._element, Ie), this._element = null, this._config = null }, i._getConfig = function(t) { return t = o({}, $e, e(this._element).data(), "object" == typeof t && t ? t : {}), c.typeCheckConfig(Ee, t, this.constructor.DefaultType), t }, i._setListeners = function() {
                var t = this;
                e(this._element).on(Oe.CLICK_DISMISS, '[data-dismiss="toast"]', function() { return t.hide(!0) })
            }, i._close = function() {
                var t = this,
                    i = function() { t._element.classList.add("hide"), e(t._element).trigger(Oe.HIDDEN) };
                if (this._element.classList.remove(Ne), this._config.animation) {
                    var n = c.getTransitionDurationFromElement(this._element);
                    e(this._element).one(c.TRANSITION_END, i).emulateTransitionEnd(n)
                } else i()
            }, t._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = e(this),
                        s = n.data(Ie);
                    if (s || (s = new t(this, "object" == typeof i && i), n.data(Ie, s)), "string" == typeof i) {
                        if (void 0 === s[i]) throw new TypeError('No method named "' + i + '"');
                        s[i](this)
                    }
                })
            }, s(t, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "DefaultType", get: function() { return He } }, { key: "Default", get: function() { return $e } }]), t
        }();
    e.fn[Ee] = Le._jQueryInterface, e.fn[Ee].Constructor = Le, e.fn[Ee].noConflict = function() { return e.fn[Ee] = Ae, Le._jQueryInterface },
        function() { if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); var t = e.fn.jquery.split(" ")[0].split("."); if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0") }(), t.Util = c, t.Alert = m, t.Button = S, t.Carousel = F, t.Collapse = Z, t.Dropdown = ft, t.Modal = Et, t.Popover = oe, t.Scrollspy = ye, t.Tab = De, t.Toast = Le, t.Tooltip = Kt, Object.defineProperty(t, "__esModule", { value: !0 })
}),
function() {
    var t = [].indexOf || function(t) {
            for (var e = 0, i = this.length; e < i; e++)
                if (e in this && this[e] === t) return e;
            return -1
        },
        e = [].slice;
    ! function(t, e) { "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function(i) { return e(i, t) }) : e(t.jQuery, t) }(this, function(i, n) {
        var s, o, r, a, l, c, u, h, d, p, f, m, g, v, _, y;
        return s = i(n), h = t.call(n, "ontouchstart") >= 0, a = { horizontal: {}, vertical: {} }, l = 1, u = {}, c = "waypoints-context-id", f = "resize.waypoints", m = "scroll.waypoints", g = 1, v = "waypoints-waypoint-ids", _ = "waypoint", y = "waypoints", o = function() {
            function t(t) {
                var e = this;
                this.$element = t, this.element = t[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + l++, this.oldScroll = { x: t.scrollLeft(), y: t.scrollTop() }, this.waypoints = { horizontal: {}, vertical: {} }, t.data(c, this.id), u[this.id] = this, t.bind(m, function() { var t; if (!e.didScroll && !h) return e.didScroll = !0, t = function() { return e.doScroll(), e.didScroll = !1 }, n.setTimeout(t, i[y].settings.scrollThrottle) }), t.bind(f, function() { var t; if (!e.didResize) return e.didResize = !0, t = function() { return i[y]("refresh"), e.didResize = !1 }, n.setTimeout(t, i[y].settings.resizeThrottle) })
            }
            return t.prototype.doScroll = function() { var t, e = this; return t = { horizontal: { newScroll: this.$element.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" }, vertical: { newScroll: this.$element.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" } }, !h || t.vertical.oldScroll && t.vertical.newScroll || i[y]("refresh"), i.each(t, function(t, n) { var s, o, r; return r = [], o = n.newScroll > n.oldScroll, s = o ? n.forward : n.backward, i.each(e.waypoints[t], function(t, e) { var i, s; return n.oldScroll < (i = e.offset) && i <= n.newScroll ? r.push(e) : n.newScroll < (s = e.offset) && s <= n.oldScroll ? r.push(e) : void 0 }), r.sort(function(t, e) { return t.offset - e.offset }), o || r.reverse(), i.each(r, function(t, e) { if (e.options.continuous || t === r.length - 1) return e.trigger([s]) }) }), this.oldScroll = { x: t.horizontal.newScroll, y: t.vertical.newScroll } }, t.prototype.refresh = function() { var t, e, n, s = this; return n = i.isWindow(this.element), e = this.$element.offset(), this.doScroll(), t = { horizontal: { contextOffset: n ? 0 : e.left, contextScroll: n ? 0 : this.oldScroll.x, contextDimension: this.$element.width(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" }, vertical: { contextOffset: n ? 0 : e.top, contextScroll: n ? 0 : this.oldScroll.y, contextDimension: n ? i[y]("viewportHeight") : this.$element.height(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" } }, i.each(t, function(t, e) { return i.each(s.waypoints[t], function(t, n) { var s, o, r, a, l; if (s = n.options.offset, r = n.offset, o = i.isWindow(n.element) ? 0 : n.$element.offset()[e.offsetProp], i.isFunction(s) ? s = s.apply(n.element) : "string" == typeof s && (s = parseFloat(s), n.options.offset.indexOf("%") > -1 && (s = Math.ceil(e.contextDimension * s / 100))), n.offset = o - e.contextOffset + e.contextScroll - s, (!n.options.onlyOnScroll || null == r) && n.enabled) return null !== r && r < (a = e.oldScroll) && a <= n.offset ? n.trigger([e.backward]) : null !== r && r > (l = e.oldScroll) && l >= n.offset ? n.trigger([e.forward]) : null === r && e.oldScroll >= n.offset ? n.trigger([e.forward]) : void 0 }) }) }, t.prototype.checkEmpty = function() { if (i.isEmptyObject(this.waypoints.horizontal) && i.isEmptyObject(this.waypoints.vertical)) return this.$element.unbind([f, m].join(" ")), delete u[this.id] }, t
        }(), r = function() {
            function t(t, e, n) {
                var s, o;
                n = i.extend({}, i.fn[_].defaults, n), "bottom-in-view" === n.offset && (n.offset = function() { var t; return t = i[y]("viewportHeight"), i.isWindow(e.element) || (t = e.$element.height()), t - i(this).outerHeight() }), this.$element = t, this.element = t[0], this.axis = n.horizontal ? "horizontal" : "vertical", this.callback = n.handler, this.context = e, this.enabled = n.enabled, this.id = "waypoints" + g++, this.offset = null, this.options = n, e.waypoints[this.axis][this.id] = this, a[this.axis][this.id] = this, s = null != (o = t.data(v)) ? o : [], s.push(this.id), t.data(v, s)
            }
            return t.prototype.trigger = function(t) { if (this.enabled) return null != this.callback && this.callback.apply(this.element, t), this.options.triggerOnce ? this.destroy() : void 0 }, t.prototype.disable = function() { return this.enabled = !1 }, t.prototype.enable = function() { return this.context.refresh(), this.enabled = !0 }, t.prototype.destroy = function() { return delete a[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty() }, t.getWaypointsByElement = function(t) { var e, n; return (n = i(t).data(v)) ? (e = i.extend({}, a.horizontal, a.vertical), i.map(n, function(t) { return e[t] })) : [] }, t
        }(), p = { init: function(t, e) { return null == e && (e = {}), null == e.handler && (e.handler = t), this.each(function() { var t, n, s, a; return t = i(this), s = null != (a = e.context) ? a : i.fn[_].defaults.context, i.isWindow(s) || (s = t.closest(s)), s = i(s), n = u[s.data(c)], n || (n = new o(s)), new r(t, n, e) }), i[y]("refresh"), this }, disable: function() { return p._invoke(this, "disable") }, enable: function() { return p._invoke(this, "enable") }, destroy: function() { return p._invoke(this, "destroy") }, prev: function(t, e) { return p._traverse.call(this, t, e, function(t, e, i) { if (e > 0) return t.push(i[e - 1]) }) }, next: function(t, e) { return p._traverse.call(this, t, e, function(t, e, i) { if (e < i.length - 1) return t.push(i[e + 1]) }) }, _traverse: function(t, e, s) { var o, r; return null == t && (t = "vertical"), null == e && (e = n), r = d.aggregate(e), o = [], this.each(function() { var e; return e = i.inArray(this, r[t]), s(o, e, r[t]) }), this.pushStack(o) }, _invoke: function(t, e) { return t.each(function() { var t; return t = r.getWaypointsByElement(this), i.each(t, function(t, i) { return i[e](), !0 }) }), this } }, i.fn[_] = function() { var t, n; return n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], p[n] ? p[n].apply(this, t) : i.isFunction(n) ? p.init.apply(this, arguments) : i.isPlainObject(n) ? p.init.apply(this, [null, n]) : n ? i.error("The " + n + " method does not exist in jQuery Waypoints.") : i.error("jQuery Waypoints needs a callback function or handler option.") }, i.fn[_].defaults = { context: n, continuous: !0, enabled: !0, horizontal: !1, offset: 0, triggerOnce: !1 }, d = { refresh: function() { return i.each(u, function(t, e) { return e.refresh() }) }, viewportHeight: function() { var t; return null != (t = n.innerHeight) ? t : s.height() }, aggregate: function(t) { var e, n, s; return e = a, t && (e = null != (s = u[i(t).data(c)]) ? s.waypoints : void 0), e ? (n = { horizontal: [], vertical: [] }, i.each(n, function(t, s) { return i.each(e[t], function(t, e) { return s.push(e) }), s.sort(function(t, e) { return t.offset - e.offset }), n[t] = i.map(s, function(t) { return t.element }), n[t] = i.unique(n[t]) }), n) : [] }, above: function(t) { return null == t && (t = n), d._filter(t, "vertical", function(t, e) { return e.offset <= t.oldScroll.y }) }, below: function(t) { return null == t && (t = n), d._filter(t, "vertical", function(t, e) { return e.offset > t.oldScroll.y }) }, left: function(t) { return null == t && (t = n), d._filter(t, "horizontal", function(t, e) { return e.offset <= t.oldScroll.x }) }, right: function(t) { return null == t && (t = n), d._filter(t, "horizontal", function(t, e) { return e.offset > t.oldScroll.x }) }, enable: function() { return d._invoke("enable") }, disable: function() { return d._invoke("disable") }, destroy: function() { return d._invoke("destroy") }, extendFn: function(t, e) { return p[t] = e }, _invoke: function(t) { var e; return e = i.extend({}, a.vertical, a.horizontal), i.each(e, function(e, i) { return i[t](), !0 }) }, _filter: function(t, e, n) { var s, o; return (s = u[i(t).data(c)]) ? (o = [], i.each(s.waypoints[e], function(t, e) { if (n(s, e)) return o.push(e) }), o.sort(function(t, e) { return t.offset - e.offset }), i.map(o, function(t) { return t.element })) : [] } }, i[y] = function() { var t, i; return i = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], d[i] ? d[i].apply(null, t) : d.aggregate.call(null, i) }, i[y].settings = { resizeThrottle: 100, scrollThrottle: 30 }, s.load(function() { return i[y]("refresh") })
    })
}.call(this),
    function(t) {
        "use strict";
        t.fn.counterUp = function(e) {
            var i = t.extend({ time: 400, delay: 10 }, e);
            return this.each(function() {
                var e = t(this),
                    n = i,
                    s = function() {
                        var t = [],
                            i = n.time / n.delay,
                            s = e.text(),
                            o = /[0-9]+,[0-9]+/.test(s);
                        s = s.replace(/,/g, "");
                        for (var r = (/^[0-9]+$/.test(s), /^[0-9]+\.[0-9]+$/.test(s)), a = r ? (s.split(".")[1] || []).length : 0, l = i; l >= 1; l--) {
                            var c = parseInt(s / i * l);
                            if (r && (c = parseFloat(s / i * l).toFixed(a)), o)
                                for (;
                                    /(\d+)(\d{3})/.test(c.toString());) c = c.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                            t.unshift(c)
                        }
                        e.data("counterup-nums", t), e.text("0");
                        var u = function() { e.text(e.data("counterup-nums").shift()), e.data("counterup-nums").length ? setTimeout(e.data("counterup-func"), n.delay) : (e.data("counterup-nums"), e.data("counterup-nums", null), e.data("counterup-func", null)) };
                        e.data("counterup-func", u), setTimeout(e.data("counterup-func"), n.delay)
                    };
                e.waypoint(s, { offset: "100%", triggerOnce: !0 })
            })
        }
    }(jQuery),
    function(t) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery) }(function(t) {
        "use strict";

        function e(t) { if (t instanceof Date) return t; if (String(t).match(r)) return String(t).match(/^[0-9]*$/) && (t = Number(t)), String(t).match(/\-/) && (t = String(t).replace(/\-/g, "/")), new Date(t); throw new Error("Couldn't cast `" + t + "` to a date object.") }

        function i(t) { var e = t.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"); return new RegExp(e) }

        function n(t) {
            return function(e) {
                var n = e.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
                if (n)
                    for (var o = 0, r = n.length; o < r; ++o) {
                        var a = n[o].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                            c = i(a[0]),
                            u = a[1] || "",
                            h = a[3] || "",
                            d = null;
                        a = a[2], l.hasOwnProperty(a) && (d = l[a], d = Number(t[d])), null !== d && ("!" === u && (d = s(h, d)), "" === u && d < 10 && (d = "0" + d.toString()), e = e.replace(c, d.toString()))
                    }
                return e = e.replace(/%%/, "%")
            }
        }

        function s(t, e) {
            var i = "s",
                n = "";
            return t && (t = t.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === t.length ? i = t[0] : (n = t[0], i = t[1])), Math.abs(e) > 1 ? i : n
        }
        var o = [],
            r = [],
            a = { precision: 100, elapse: !1, defer: !1 };
        r.push(/^[0-9]*$/.source), r.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), r.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), r = new RegExp(r.join("|"));
        var l = { Y: "years", m: "months", n: "daysToMonth", d: "daysToWeek", w: "weeks", W: "weeksToMonth", H: "hours", M: "minutes", S: "seconds", D: "totalDays", I: "totalHours", N: "totalMinutes", T: "totalSeconds" },
            c = function(e, i, n) { this.el = e, this.$el = t(e), this.interval = null, this.offset = {}, this.options = t.extend({}, a), this.firstTick = !0, this.instanceNumber = o.length, o.push(this), this.$el.data("countdown-instance", this.instanceNumber), n && ("function" == typeof n ? (this.$el.on("update.countdown", n), this.$el.on("stoped.countdown", n), this.$el.on("finish.countdown", n)) : this.options = t.extend({}, a, n)), this.setFinalDate(i), !1 === this.options.defer && this.start() };
        t.extend(c.prototype, {
            start: function() {
                null !== this.interval && clearInterval(this.interval);
                var t = this;
                this.update(), this.interval = setInterval(function() { t.update.call(t) }, this.options.precision)
            },
            stop: function() { clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped") },
            toggle: function() { this.interval ? this.stop() : this.start() },
            pause: function() { this.stop() },
            resume: function() { this.start() },
            remove: function() { this.stop.call(this), o[this.instanceNumber] = null, delete this.$el.data().countdownInstance },
            setFinalDate: function(t) { this.finalDate = e(t) },
            update: function() {
                if (0 === this.$el.closest("html").length) return void this.remove();
                var t, e = new Date;
                if (t = this.finalDate.getTime() - e.getTime(), t = Math.ceil(t / 1e3), t = !this.options.elapse && t < 0 ? 0 : Math.abs(t), this.totalSecsLeft === t || this.firstTick) return void(this.firstTick = !1);
                this.totalSecsLeft = t, this.elapsed = e >= this.finalDate, this.offset = { seconds: this.totalSecsLeft % 60, minutes: Math.floor(this.totalSecsLeft / 60) % 60, hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24, days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7, daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7, daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368), weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7), weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4, months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368), years: Math.abs(this.finalDate.getFullYear() - e.getFullYear()), totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24), totalHours: Math.floor(this.totalSecsLeft / 60 / 60), totalMinutes: Math.floor(this.totalSecsLeft / 60), totalSeconds: this.totalSecsLeft }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish"))
            },
            dispatchEvent: function(e) {
                var i = t.Event(e + ".countdown");
                i.finalDate = this.finalDate, i.elapsed = this.elapsed, i.offset = t.extend({}, this.offset), i.strftime = n(this.offset), this.$el.trigger(i)
            }
        }), t.fn.countdown = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return this.each(function() {
                var i = t(this).data("countdown-instance");
                if (void 0 !== i) {
                    var n = o[i],
                        s = e[0];
                    c.prototype.hasOwnProperty(s) ? n[s].apply(n, e.slice(1)) : null === String(s).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (n.setFinalDate.call(n, s), n.start()) : t.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, s))
                } else new c(this, e[0], e[1])
            })
        }
    }),
    function(t, e, i, n) {
        function s(e, i) { this.settings = null, this.options = t.extend({}, s.Defaults, i), this.$element = t(e), this.drag = t.extend({}, d), this.state = t.extend({}, p), this.e = t.extend({}, f), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], t.each(s.Plugins, t.proxy(function(t, e) { this._plugins[t[0].toLowerCase() + t.slice(1)] = new e(this) }, this)), t.each(s.Pipe, t.proxy(function(e, i) { this._pipe.push({ filter: i.filter, run: t.proxy(i.run, this) }) }, this)), this.setup(), this.initialize() }

        function o(t) { if (t.touches !== n) return { x: t.touches[0].pageX, y: t.touches[0].pageY }; if (t.touches === n) { if (t.pageX !== n) return { x: t.pageX, y: t.pageY }; if (t.pageX === n) return { x: t.clientX, y: t.clientY } } }

        function r(t) {
            var e, n, s = i.createElement("div"),
                o = t;
            for (e in o)
                if (n = o[e], void 0 !== s.style[n]) return s = null, [n, e];
            return [!1]
        }

        function a() { return r(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1] }

        function l() { return r(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0] }

        function c() { return r(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0] }

        function u() { return "ontouchstart" in e || !!navigator.msMaxTouchPoints }

        function h() { return e.navigator.msPointerEnabled }
        var d, p, f;
        d = { start: 0, startX: 0, startY: 0, current: 0, currentX: 0, currentY: 0, offsetX: 0, offsetY: 0, distance: null, startTime: 0, endTime: 0, updatedX: 0, targetEl: null }, p = { isTouch: !1, isScrolling: !1, isSwiping: !1, direction: !1, inMotion: !1 }, f = { _onDragStart: null, _onDragMove: null, _onDragEnd: null, _transitionEnd: null, _resizer: null, _responsiveCall: null, _goToLoop: null, _checkVisibile: null }, s.Defaults = { items: 3, loop: !1, center: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: e, responsiveClass: !1, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", themeClass: "owl-theme", baseClass: "owl-carousel", itemClass: "owl-item", centerClass: "center", activeClass: "active" }, s.Width = { Default: "default", Inner: "inner", Outer: "outer" }, s.Plugins = {}, s.Pipe = [{ filter: ["width", "items", "settings"], run: function(t) { t.current = this._items && this._items[this.relative(this._current)] } }, {
            filter: ["items", "settings"],
            run: function() {
                var t = this._clones;
                (this.$stage.children(".cloned").length !== t.length || !this.settings.loop && t.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var t, e, i = this._clones,
                    n = this._items,
                    s = this.settings.loop ? i.length - Math.max(2 * this.settings.items, 4) : 0;
                for (t = 0, e = Math.abs(s / 2); e > t; t++) s > 0 ? (this.$stage.children().eq(n.length + i.length - 1).remove(), i.pop(), this.$stage.children().eq(0).remove(), i.pop()) : (i.push(i.length / 2), this.$stage.append(n[i[i.length - 1]].clone().addClass("cloned")), i.push(n.length - 1 - (i.length - 1) / 2), this.$stage.prepend(n[i[i.length - 1]].clone().addClass("cloned")))
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var t, e, i, n = this.settings.rtl ? 1 : -1,
                    s = (this.width() / this.settings.items).toFixed(3),
                    o = 0;
                for (this._coordinates = [], e = 0, i = this._clones.length + this._items.length; i > e; e++) t = this._mergers[this.relative(e)], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, o += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : s * t) * n, this._coordinates.push(o)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var e, i, n = (this.width() / this.settings.items).toFixed(3),
                    s = { width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding, "padding-left": this.settings.stagePadding || "", "padding-right": this.settings.stagePadding || "" };
                if (this.$stage.css(s), s = { width: this.settings.autoWidth ? "auto" : n - this.settings.margin }, s[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && t.grep(this._mergers, function(t) { return t > 1 }).length > 0)
                    for (e = 0, i = this._coordinates.length; i > e; e++) s.width = Math.abs(this._coordinates[e]) - Math.abs(this._coordinates[e - 1] || 0) - this.settings.margin, this.$stage.children().eq(e).css(s);
                else this.$stage.children().css(s)
            }
        }, { filter: ["width", "items", "settings"], run: function(t) { t.current && this.reset(this.$stage.children().index(t.current)) } }, { filter: ["position"], run: function() { this.animate(this.coordinates(this._current)) } }, {
            filter: ["width", "position", "items", "settings"],
            run: function() {
                var t, e, i, n, s = this.settings.rtl ? 1 : -1,
                    o = 2 * this.settings.stagePadding,
                    r = this.coordinates(this.current()) + o,
                    a = r + this.width() * s,
                    l = [];
                for (i = 0, n = this._coordinates.length; n > i; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * s, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(i);
                this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
            }
        }], s.prototype.initialize = function() {
            if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && !0 !== this.state.imagesLoaded) { var e, i, s; if (e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, s = this.$element.children(i).width(), e.length && 0 >= s) return this.preloadAutoWidthImages(e), !1 }
            this.$element.addClass("owl-loading"), this.$stage = t("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
        }, s.prototype.setup = function() {
            var e = this.viewport(),
                i = this.options.responsive,
                n = -1,
                s = null;
            i ? (t.each(i, function(t) { e >= t && t > n && (n = Number(t)) }), s = t.extend({}, this.options, i[n]), delete s.responsive, s.responsiveClass && this.$element.attr("class", function(t, e) { return e.replace(/\b owl-responsive-\S+/g, "") }).addClass("owl-responsive-" + n)) : s = t.extend({}, this.options), (null === this.settings || this._breakpoint !== n) && (this.trigger("change", { property: { name: "settings", value: s } }), this._breakpoint = n, this.settings = s, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } }))
        }, s.prototype.optionsLogic = function() { this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, s.prototype.prepare = function(e) { var i = this.trigger("prepare", { content: e }); return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(e)), this.trigger("prepared", { content: i.data }), i.data }, s.prototype.update = function() {
            for (var e = 0, i = this._pipe.length, n = t.proxy(function(t) { return this[t] }, this._invalidated), s = {}; i > e;)(this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(s), e++;
            this._invalidated = {}
        }, s.prototype.width = function(t) {
            switch (t = t || s.Width.Default) {
                case s.Width.Inner:
                case s.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }, s.prototype.refresh = function() {
            if (0 === this._items.length) return !1;
            (new Date).getTime(), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = e.orientation, this.watchVisibility(), this.trigger("refreshed")
        }, s.prototype.eventsCall = function() { this.e._onDragStart = t.proxy(function(t) { this.onDragStart(t) }, this), this.e._onDragMove = t.proxy(function(t) { this.onDragMove(t) }, this), this.e._onDragEnd = t.proxy(function(t) { this.onDragEnd(t) }, this), this.e._onResize = t.proxy(function(t) { this.onResize(t) }, this), this.e._transitionEnd = t.proxy(function(t) { this.transitionEnd(t) }, this), this.e._preventClick = t.proxy(function(t) { this.preventClick(t) }, this) }, s.prototype.onThrottledResize = function() { e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate) }, s.prototype.onResize = function() { return !!this._items.length && (this._width !== this.$element.width() && (!this.trigger("resize").isDefaultPrevented() && (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")))) }, s.prototype.eventsRouter = function(t) { var e = t.type; "mousedown" === e || "touchstart" === e ? this.onDragStart(t) : "mousemove" === e || "touchmove" === e ? this.onDragMove(t) : "mouseup" === e || "touchend" === e ? this.onDragEnd(t) : "touchcancel" === e && this.onDragEnd(t) }, s.prototype.internalEvents = function() {
            var i = (u(), h());
            this.settings.mouseDrag ? (this.$stage.on("mousedown", t.proxy(function(t) { this.eventsRouter(t) }, this)), this.$stage.on("dragstart", function() { return !1 }), this.$stage.get(0).onselectstart = function() { return !1 }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !i && this.$stage.on("touchstart touchcancel", t.proxy(function(t) { this.eventsRouter(t) }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), !1 !== this.settings.responsive && this.on(e, "resize", t.proxy(this.onThrottledResize, this))
        }, s.prototype.onDragStart = function(n) {
            var s, r, a, l;
            if (s = n.originalEvent || n || e.event, 3 === s.which || this.state.isTouch) return !1;
            if ("mousedown" === s.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, r = o(s).x, a = o(s).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) l = this.getTransformProperty(), this.drag.offsetX = l, this.animate(l), this.state.inMotion = !0;
            else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
            this.drag.startX = r - this.drag.offsetX, this.drag.startY = a - this.drag.offsetY, this.drag.start = r - this.drag.startX, this.drag.targetEl = s.target || s.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), t(i).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", t.proxy(function(t) { this.eventsRouter(t) }, this))
        }, s.prototype.onDragMove = function(t) {
            var i, s, r, a, l, c;
            this.state.isTouch && (this.state.isScrolling || (i = t.originalEvent || t || e.event, s = o(i).x, r = o(i).y, this.drag.currentX = s - this.drag.startX, this.drag.currentY = r - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (a = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), l = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), c = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, a + c), l + c)), (this.drag.distance > 8 || this.drag.distance < -8) && (i.preventDefault !== n ? i.preventDefault() : i.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && !1 === this.state.isSwiping && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
        }, s.prototype.onDragEnd = function(e) {
            var n, s, o;
            if (this.state.isTouch) {
                if ("mouseup" === e.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && !0 !== this.state.inMotion) return this.state.inMotion = !1, !1;
                this.drag.endTime = (new Date).getTime(), n = this.drag.endTime - this.drag.startTime, s = Math.abs(this.drag.distance), (s > 3 || n > 300) && this.removeClick(this.drag.targetEl), o = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(o), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(o) || this.transitionEnd(), this.drag.distance = 0, t(i).off(".owl.dragEvents")
            }
        }, s.prototype.removeClick = function(i) { this.drag.targetEl = i, t(i).on("click.preventClick", this.e._preventClick), e.setTimeout(function() { t(i).off("click.preventClick") }, 300) }, s.prototype.preventClick = function(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), t(e.target).off("click.preventClick") }, s.prototype.getTransformProperty = function() { var t, i; return t = e.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), t = t.replace(/matrix(3d)?\(|\)/g, "").split(","), i = 16 === t.length, !0 !== i ? t[4] : t[12] }, s.prototype.closest = function(e) {
            var i = -1,
                n = this.width(),
                s = this.coordinates();
            return this.settings.freeDrag || t.each(s, t.proxy(function(t, o) { return e > o - 30 && o + 30 > e ? i = t : this.op(e, "<", o) && this.op(e, ">", s[t + 1] || o - n) && (i = "left" === this.state.direction ? t + 1 : t), -1 === i }, this)), this.settings.loop || (this.op(e, ">", s[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", s[this.maximum()]) && (i = e = this.maximum())), i
        }, s.prototype.animate = function(e) { this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({ transform: "translate3d(" + e + "px,0px, 0px)", transition: this.speed() / 1e3 + "s" }) : this.state.isTouch ? this.$stage.css({ left: e + "px" }) : this.$stage.animate({ left: e }, this.speed() / 1e3, this.settings.fallbackEasing, t.proxy(function() { this.state.inMotion && this.transitionEnd() }, this)) }, s.prototype.current = function(t) {
            if (t === n) return this._current;
            if (0 === this._items.length) return n;
            if (t = this.normalize(t), this._current !== t) {
                var e = this.trigger("change", { property: { name: "position", value: t } });
                e.data !== n && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } })
            }
            return this._current
        }, s.prototype.invalidate = function(t) { this._invalidated[t] = !0 }, s.prototype.reset = function(t) {
            (t = this.normalize(t)) !== n && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
        }, s.prototype.normalize = function(e, i) { var s = i ? this._items.length : this._items.length + this._clones.length; return !t.isNumeric(e) || 1 > s ? n : e = this._clones.length ? (e % s + s) % s : Math.max(this.minimum(i), Math.min(this.maximum(i), e)) }, s.prototype.relative = function(t) { return t = this.normalize(t), t -= this._clones.length / 2, this.normalize(t, !0) }, s.prototype.maximum = function(t) {
            var e, i, n, s = 0,
                o = this.settings;
            if (t) return this._items.length - 1;
            if (!o.loop && o.center) e = this._items.length - 1;
            else if (o.loop || o.center)
                if (o.loop || o.center) e = this._items.length + o.items;
                else {
                    if (!o.autoWidth && !o.merge) throw "Can not detect maximum absolute position.";
                    for (revert = o.rtl ? 1 : -1, i = this.$stage.width() - this.$element.width();
                        (n = this.coordinates(s)) && !(n * revert >= i);) e = ++s
                }
            else e = this._items.length - o.items;
            return e
        }, s.prototype.minimum = function(t) { return t ? 0 : this._clones.length / 2 }, s.prototype.items = function(t) { return t === n ? this._items.slice() : (t = this.normalize(t, !0), this._items[t]) }, s.prototype.mergers = function(t) { return t === n ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t]) }, s.prototype.clones = function(e) {
            var i = this._clones.length / 2,
                s = i + this._items.length,
                o = function(t) { return t % 2 == 0 ? s + t / 2 : i - (t + 1) / 2 };
            return e === n ? t.map(this._clones, function(t, e) { return o(e) }) : t.map(this._clones, function(t, i) { return t === e ? o(i) : null })
        }, s.prototype.speed = function(t) { return t !== n && (this._speed = t), this._speed }, s.prototype.coordinates = function(e) { var i = null; return e === n ? t.map(this._coordinates, t.proxy(function(t, e) { return this.coordinates(e) }, this)) : (this.settings.center ? (i = this._coordinates[e], i += (this.width() - i + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : i = this._coordinates[e - 1] || 0, i) }, s.prototype.duration = function(t, e, i) { return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed) }, s.prototype.to = function(i, n) {
            if (this.settings.loop) {
                var s = i - this.relative(this.current()),
                    o = this.current(),
                    r = this.current(),
                    a = this.current() + s,
                    l = 0 > r - a,
                    c = this._clones.length + this._items.length;
                a < this.settings.items && !1 === l ? (o = r + this._items.length, this.reset(o)) : a >= c - this.settings.items && !0 === l && (o = r - this._items.length, this.reset(o)), e.clearTimeout(this.e._goToLoop), this.e._goToLoop = e.setTimeout(t.proxy(function() { this.speed(this.duration(this.current(), o + s, n)), this.current(o + s), this.update() }, this), 30)
            } else this.speed(this.duration(this.current(), i, n)), this.current(i), this.update()
        }, s.prototype.next = function(t) { t = t || !1, this.to(this.relative(this.current()) + 1, t) }, s.prototype.prev = function(t) { t = t || !1, this.to(this.relative(this.current()) - 1, t) }, s.prototype.transitionEnd = function(t) { return (t === n || (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) === this.$stage.get(0))) && (this.state.inMotion = !1, void this.trigger("translated")) }, s.prototype.viewport = function() {
            var n;
            if (this.options.responsiveBaseElement !== e) n = t(this.options.responsiveBaseElement).width();
            else if (e.innerWidth) n = e.innerWidth;
            else {
                if (!i.documentElement || !i.documentElement.clientWidth) throw "Can not detect viewport width.";
                n = i.documentElement.clientWidth
            }
            return n
        }, s.prototype.replace = function(e) { this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() { return 1 === this.nodeType }).each(t.proxy(function(t, e) { e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1) }, this)), this.reset(t.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items") }, s.prototype.add = function(t, e) { e = e === n ? this._items.length : this.normalize(e, !0), this.trigger("add", { content: t, position: e }), 0 === this._items.length || e === this._items.length ? (this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", { content: t, position: e }) }, s.prototype.remove = function(t) {
            (t = this.normalize(t, !0)) !== n && (this.trigger("remove", { content: this._items[t], position: t }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: t }))
        }, s.prototype.addTriggerableEvents = function() {
            var e = t.proxy(function(e, i) { return t.proxy(function(t) { t.relatedTarget !== this && (this.suppress([i]), e.apply(this, [].slice.call(arguments, 1)), this.release([i])) }, this) }, this);
            t.each({ next: this.next, prev: this.prev, to: this.to, destroy: this.destroy, refresh: this.refresh, replace: this.replace, add: this.add, remove: this.remove }, t.proxy(function(t, i) { this.$element.on(t + ".owl.carousel", e(i, t + ".owl.carousel")) }, this))
        }, s.prototype.watchVisibility = function() {
            function i(t) { return t.offsetWidth > 0 && t.offsetHeight > 0 }

            function n() { i(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), e.clearInterval(this.e._checkVisibile)) }
            i(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), e.clearInterval(this.e._checkVisibile), this.e._checkVisibile = e.setInterval(t.proxy(n, this), 500))
        }, s.prototype.preloadAutoWidthImages = function(e) {
            var i, n, s, o;
            i = 0, n = this, e.each(function(r, a) { s = t(a), o = new Image, o.onload = function() { i++, s.attr("src", o.src), s.css("opacity", 1), i >= e.length && (n.state.imagesLoaded = !0, n.initialize()) }, o.src = s.attr("src") || s.attr("data-src") || s.attr("data-src-retina") })
        }, s.prototype.destroy = function() {
            this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), !1 !== this.settings.responsive && t(e).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
            for (var n in this._plugins) this._plugins[n].destroy();
            (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), t(i).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() { return !1 })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
        }, s.prototype.op = function(t, e, i) {
            var n = this.settings.rtl;
            switch (e) {
                case "<":
                    return n ? t > i : i > t;
                case ">":
                    return n ? i > t : t > i;
                case ">=":
                    return n ? i >= t : t >= i;
                case "<=":
                    return n ? t >= i : i >= t
            }
        }, s.prototype.on = function(t, e, i, n) { t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i) }, s.prototype.off = function(t, e, i, n) { t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i) }, s.prototype.trigger = function(e, i, n) {
            var s = { item: { count: this._items.length, index: this.current() } },
                o = t.camelCase(t.grep(["on", e, n], function(t) { return t }).join("-").toLowerCase()),
                r = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({ relatedTarget: this }, s, i));
            return this._supress[e] || (t.each(this._plugins, function(t, e) { e.onTrigger && e.onTrigger(r) }), this.$element.trigger(r), this.settings && "function" == typeof this.settings[o] && this.settings[o].apply(this, r)), r
        }, s.prototype.suppress = function(e) { t.each(e, t.proxy(function(t, e) { this._supress[e] = !0 }, this)) }, s.prototype.release = function(e) { t.each(e, t.proxy(function(t, e) { delete this._supress[e] }, this)) }, s.prototype.browserSupport = function() {
            if (this.support3d = c(), this.support3d) {
                this.transformVendor = l();
                var t = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
                this.transitionEndVendor = t[a()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
            }
            this.state.orientation = e.orientation
        }, t.fn.owlCarousel = function(e) { return this.each(function() { t(this).data("owlCarousel") || t(this).data("owlCarousel", new s(this, e)) }) }, t.fn.owlCarousel.Constructor = s
    }(window.Zepto || window.jQuery, window, document),
    function(t, e) {
        var i = function(e) {
            this._core = e, this._loaded = [], this._handlers = {
                "initialized.owl.carousel change.owl.carousel": t.proxy(function(e) {
                    if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                        for (var i = this._core.settings, n = i.center && Math.ceil(i.items / 2) || i.items, s = i.center && -1 * n || 0, o = (e.property && e.property.value || this._core.current()) + s, r = this._core.clones().length, a = t.proxy(function(t, e) { this.load(e) }, this); s++ < n;) this.load(r / 2 + this._core.relative(o)), r && t.each(this._core.clones(this._core.relative(o++)), a)
                }, this)
            }, this._core.options = t.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        i.Defaults = { lazyLoad: !1 }, i.prototype.load = function(i) {
            var n = this._core.$stage.children().eq(i),
                s = n && n.find(".owl-lazy");
            !s || t.inArray(n.get(0), this._loaded) > -1 || (s.each(t.proxy(function(i, n) {
                var s, o = t(n),
                    r = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src");
                this._core.trigger("load", { element: o, url: r }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function() { o.css("opacity", 1), this._core.trigger("loaded", { element: o, url: r }, "lazy") }, this)).attr("src", r) : (s = new Image, s.onload = t.proxy(function() { o.css({ "background-image": "url(" + r + ")", opacity: "1" }), this._core.trigger("loaded", { element: o, url: r }, "lazy") }, this), s.src = r)
            }, this)), this._loaded.push(n.get(0)))
        }, i.prototype.destroy = function() { var t, e; for (t in this.handlers) this._core.$element.off(t, this.handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.Lazy = i
    }(window.Zepto || window.jQuery, window, document),
    function(t) {
        var e = function(i) { this._core = i, this._handlers = { "initialized.owl.carousel": t.proxy(function() { this._core.settings.autoHeight && this.update() }, this), "changed.owl.carousel": t.proxy(function(t) { this._core.settings.autoHeight && "position" == t.property.name && this.update() }, this), "loaded.owl.lazy": t.proxy(function(t) { this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update() }, this) }, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers) };
        e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, e.prototype.update = function() { this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass) }, e.prototype.destroy = function() { var t, e; for (t in this._handlers) this._core.$element.off(t, this._handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i) {
        var n = function(e) {
            this._core = e, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
                "resize.owl.carousel": t.proxy(function(t) { this._core.settings.video && !this.isInFullScreen() && t.preventDefault() }, this),
                "refresh.owl.carousel changed.owl.carousel": t.proxy(function() { this._playing && this.stop() }, this),
                "prepared.owl.carousel": t.proxy(function(e) {
                    var i = t(e.content).find(".owl-video");
                    i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                }, this)
            }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) { this.play(t) }, this))
        };
        n.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, n.prototype.fetch = function(t, e) {
            var i = t.attr("data-vimeo-id") ? "vimeo" : "youtube",
                n = t.attr("data-vimeo-id") || t.attr("data-youtube-id"),
                s = t.attr("data-width") || this._core.settings.videoWidth,
                o = t.attr("data-height") || this._core.settings.videoHeight,
                r = t.attr("href");
            if (!r) throw new Error("Missing video URL.");
            if (n = r.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), n[3].indexOf("youtu") > -1) i = "youtube";
            else {
                if (!(n[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
                i = "vimeo"
            }
            n = n[6], this._videos[r] = { type: i, id: n, width: s, height: o }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
        }, n.prototype.thumbnail = function(e, i) {
            var n, s, o, r = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
                a = e.find("img"),
                l = "src",
                c = "",
                u = this._core.settings,
                h = function(t) { s = '<div class="owl-video-play-icon"></div>', n = u.lazyLoad ? '<div class="owl-video-tn ' + c + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(n), e.after(s) };
            return e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (l = "data-src", c = "owl-lazy"), a.length ? (h(a.attr(l)), a.remove(), !1) : void("youtube" === i.type ? (o = "http://img.youtube.com/vi/" + i.id + "/hqdefault.jpg", h(o)) : "vimeo" === i.type && t.ajax({ type: "GET", url: "http://vimeo.com/api/v2/video/" + i.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(t) { o = t[0].thumbnail_large, h(o) } }))
        }, n.prototype.stop = function() { this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null }, n.prototype.play = function(e) {
            this._core.trigger("play", null, "video"), this._playing && this.stop();
            var i, n, s = t(e.target || e.srcElement),
                o = s.closest("." + this._core.settings.itemClass),
                r = this._videos[o.attr("data-video")],
                a = r.width || "100%",
                l = r.height || this._core.$stage.height();
            "youtube" === r.type ? i = '<iframe width="' + a + '" height="' + l + '" src="http://www.youtube.com/embed/' + r.id + "?autoplay=1&v=" + r.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === r.type && (i = '<iframe src="http://player.vimeo.com/video/' + r.id + '?autoplay=1" width="' + a + '" height="' + l + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), o.addClass("owl-video-playing"), this._playing = o, n = t('<div style="height:' + l + "px; width:" + a + 'px" class="owl-video-frame">' + i + "</div>"), s.after(n)
        }, n.prototype.isInFullScreen = function() { var n = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement; return n && t(n).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), !(n && this._fullscreen && this._playing) && (this._fullscreen ? (this._fullscreen = !1, !1) : !this._playing || this._core.state.orientation === e.orientation || (this._core.state.orientation = e.orientation, !1)) }, n.prototype.destroy = function() {
            var t, e;
            this._core.$element.off("click.owl.video");
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Video = n
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var s = function(e) { this.core = e, this.core.options = t.extend({}, s.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = { "change.owl.carousel": t.proxy(function(t) { "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) { this.swapping = "translated" == t.type }, this), "translate.owl.carousel": t.proxy(function() { this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) }, this.core.$element.on(this.handlers) };
        s.Defaults = { animateOut: !1, animateIn: !1 }, s.prototype.swap = function() {
            if (1 === this.core.settings.items && this.core.support3d) {
                this.core.speed(0);
                var e, i = t.proxy(this.clear, this),
                    n = this.core.$stage.children().eq(this.previous),
                    s = this.core.$stage.children().eq(this.next),
                    o = this.core.settings.animateIn,
                    r = this.core.settings.animateOut;
                this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.css({ left: e + "px" }).addClass("animated owl-animated-out").addClass(r).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)), o && s.addClass("animated owl-animated-in").addClass(o).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i))
            }
        }, s.prototype.clear = function(e) { t(e.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd() }, s.prototype.destroy = function() { var t, e; for (t in this.handlers) this.core.$element.off(t, this.handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.Animate = s
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i) {
        var n = function(e) { this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.handlers = { "translated.owl.carousel refreshed.owl.carousel": t.proxy(function() { this.autoplay() }, this), "play.owl.autoplay": t.proxy(function(t, e, i) { this.play(e, i) }, this), "stop.owl.autoplay": t.proxy(function() { this.stop() }, this), "mouseover.owl.autoplay": t.proxy(function() { this.core.settings.autoplayHoverPause && this.pause() }, this), "mouseleave.owl.autoplay": t.proxy(function() { this.core.settings.autoplayHoverPause && this.autoplay() }, this) }, this.core.$element.on(this.handlers) };
        n.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, n.prototype.autoplay = function() { this.core.settings.autoplay && !this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(t.proxy(function() { this.play() }, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval) }, n.prototype.play = function() { return !0 === i.hidden || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : !1 === this.core.settings.autoplay ? void e.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed) }, n.prototype.stop = function() { e.clearInterval(this.interval) }, n.prototype.pause = function() { e.clearInterval(this.interval) }, n.prototype.destroy = function() {
            var t, i;
            e.clearInterval(this.interval);
            for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.autoplay = n
    }(window.Zepto || window.jQuery, window, document),
    function(t) {
        "use strict";
        var e = function(i) {
            this._core = i, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = {
                "prepared.owl.carousel": t.proxy(function(e) { this._core.settings.dotsData && this._templates.push(t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot")) }, this),
                "add.owl.carousel": t.proxy(function(e) { this._core.settings.dotsData && this._templates.splice(e.position, 0, t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot")) }, this),
                "remove.owl.carousel prepared.owl.carousel": t.proxy(function(t) { this._core.settings.dotsData && this._templates.splice(t.position, 1) }, this),
                "change.owl.carousel": t.proxy(function(t) {
                    if ("position" == t.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                        var e = this._core.current(),
                            i = this._core.maximum(),
                            n = this._core.minimum();
                        t.data = t.property.value > i ? e >= i ? n : i : t.property.value < n ? i : t.property.value
                    }
                }, this),
                "changed.owl.carousel": t.proxy(function(t) { "position" == t.property.name && this.draw() }, this),
                "refreshed.owl.carousel": t.proxy(function() { this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation") }, this)
            }, this._core.options = t.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
        };
        e.Defaults = { nav: !1, navRewind: !0, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotData: !1, dotsSpeed: !1, dotsContainer: !1, controlsClass: "owl-controls" }, e.prototype.initialize = function() {
            var e, i, n = this._core.settings;
            n.dotsData || (this._templates = [t("<div>").addClass(n.dotClass).append(t("<span>")).prop("outerHTML")]), n.navContainer && n.dotsContainer || (this._controls.$container = t("<div>").addClass(n.controlsClass).appendTo(this.$element)), this._controls.$indicators = n.dotsContainer ? t(n.dotsContainer) : t("<div>").hide().addClass(n.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", t.proxy(function(e) {
                var i = t(e.target).parent().is(this._controls.$indicators) ? t(e.target).index() : t(e.target).parent().index();
                e.preventDefault(), this.to(i, n.dotsSpeed)
            }, this)), e = n.navContainer ? t(n.navContainer) : t("<div>").addClass(n.navContainerClass).prependTo(this._controls.$container), this._controls.$next = t("<" + n.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(n.navClass[0]).html(n.navText[0]).hide().prependTo(e).on("click", t.proxy(function() { this.prev(n.navSpeed) }, this)), this._controls.$next.addClass(n.navClass[1]).html(n.navText[1]).hide().appendTo(e).on("click", t.proxy(function() { this.next(n.navSpeed) }, this));
            for (i in this._overrides) this._core[i] = t.proxy(this[i], this)
        }, e.prototype.destroy = function() { var t, e, i, n; for (t in this._handlers) this.$element.off(t, this._handlers[t]); for (e in this._controls) this._controls[e].remove(); for (n in this.overides) this._core[n] = this._overrides[n]; for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null) }, e.prototype.update = function() {
            var t, e, i, n = this._core.settings,
                s = this._core.clones().length / 2,
                o = s + this._core.items().length,
                r = n.center || n.autoWidth || n.dotData ? 1 : n.dotsEach || n.items;
            if ("page" !== n.slideBy && (n.slideBy = Math.min(n.slideBy, n.items)), n.dots || "page" == n.slideBy)
                for (this._pages = [], t = s, e = 0, i = 0; o > t; t++)(e >= r || 0 === e) && (this._pages.push({ start: t - s, end: t - s + r - 1 }), e = 0, ++i), e += this._core.mergers(this._core.relative(t))
        }, e.prototype.draw = function() {
            var e, i, n = "",
                s = this._core.settings,
                o = (this._core.$stage.children(), this._core.relative(this._core.current()));
            if (!s.nav || s.loop || s.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= o), this._controls.$next.toggleClass("disabled", o >= this._core.maximum())), this._controls.$previous.toggle(s.nav), this._controls.$next.toggle(s.nav), s.dots) {
                if (e = this._pages.length - this._controls.$indicators.children().length, s.dotData && 0 !== e) {
                    for (i = 0; i < this._controls.$indicators.children().length; i++) n += this._templates[this._core.relative(i)];
                    this._controls.$indicators.html(n)
                } else e > 0 ? (n = new Array(e + 1).join(this._templates[0]), this._controls.$indicators.append(n)) : 0 > e && this._controls.$indicators.children().slice(e).remove();
                this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(t.inArray(this.current(), this._pages)).addClass("active")
            }
            this._controls.$indicators.toggle(s.dots)
        }, e.prototype.onTrigger = function(e) {
            var i = this._core.settings;
            e.page = { index: t.inArray(this.current(), this._pages), count: this._pages.length, size: i && (i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items) }
        }, e.prototype.current = function() { var e = this._core.relative(this._core.current()); return t.grep(this._pages, function(t) { return t.start <= e && t.end >= e }).pop() }, e.prototype.getPosition = function(e) { var i, n, s = this._core.settings; return "page" == s.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += s.slideBy : i -= s.slideBy), i }, e.prototype.next = function(e) { t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e) }, e.prototype.prev = function(e) { t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e) }, e.prototype.to = function(e, i, n) {
            var s;
            n ? t.proxy(this._overrides.to, this._core)(e, i) : (s = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % s + s) % s].start, i))
        }, t.fn.owlCarousel.Constructor.Plugins.Navigation = e
    }(window.Zepto || window.jQuery, window, document),
    function(t, e) {
        "use strict";
        var i = function(n) {
            this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                "initialized.owl.carousel": t.proxy(function() { "URLHash" == this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation") }, this),
                "prepared.owl.carousel": t.proxy(function(e) {
                    var i = t(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                    this._hashes[i] = e.content
                }, this)
            }, this._core.options = t.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function() {
                var t = e.location.hash.substring(1),
                    i = this._core.$stage.children(),
                    n = this._hashes[t] && i.index(this._hashes[t]) || 0;
                return !!t && void this._core.to(n, !1, !0)
            }, this))
        };
        i.Defaults = { URLhashListener: !1 }, i.prototype.destroy = function() {
            var i, n;
            t(e).off("hashchange.owl.navigation");
            for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
            for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Hash = i
    }(window.Zepto || window.jQuery, window, document),
    function(t) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery) }(function(t) {
        "use strict";
        var e = window.Slick || {};
        (e = function() {
            var e = 0;
            return function(i, n) {
                var s, o = this;
                o.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: t(i), appendDots: t(i), arrows: !0, asNavFor: null, prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>', nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function(e, i) { return t('<button type="button" />').text(i + 1) }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, focusOnChange: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, o.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, scrolling: !1, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, swiping: !1, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, t.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, o.interrupted = !1, o.hidden = "hidden", o.paused = !0, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = t(i), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, s = t(i).data("slick") || {}, o.options = t.extend({}, o.defaults, n, s), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, void 0 !== document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = t.proxy(o.autoPlay, o), o.autoPlayClear = t.proxy(o.autoPlayClear, o), o.autoPlayIterator = t.proxy(o.autoPlayIterator, o), o.changeSlide = t.proxy(o.changeSlide, o), o.clickHandler = t.proxy(o.clickHandler, o), o.selectHandler = t.proxy(o.selectHandler, o), o.setPosition = t.proxy(o.setPosition, o), o.swipeHandler = t.proxy(o.swipeHandler, o), o.dragHandler = t.proxy(o.dragHandler, o), o.keyHandler = t.proxy(o.keyHandler, o), o.instanceUid = e++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0)
            }
        }()).prototype.activateADA = function() { this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" }) }, e.prototype.addSlide = e.prototype.slickAdd = function(e, i, n) {
            var s = this;
            if ("boolean" == typeof i) n = i, i = null;
            else if (i < 0 || i >= s.slideCount) return !1;
            s.unload(), "number" == typeof i ? 0 === i && 0 === s.$slides.length ? t(e).appendTo(s.$slideTrack) : n ? t(e).insertBefore(s.$slides.eq(i)) : t(e).insertAfter(s.$slides.eq(i)) : !0 === n ? t(e).prependTo(s.$slideTrack) : t(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, i) { t(i).attr("data-slick-index", e) }), s.$slidesCache = s.$slides, s.reinit()
        }, e.prototype.animateHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.animate({ height: e }, t.options.speed)
            }
        }, e.prototype.animateSlide = function(e, i) {
            var n = {},
                s = this;
            s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({ left: e }, s.options.speed, s.options.easing, i) : s.$slideTrack.animate({ top: e }, s.options.speed, s.options.easing, i) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), t({ animStart: s.currentLeft }).animate({ animStart: e }, { duration: s.options.speed, easing: s.options.easing, step: function(t) { t = Math.ceil(t), !1 === s.options.vertical ? (n[s.animType] = "translate(" + t + "px, 0px)", s.$slideTrack.css(n)) : (n[s.animType] = "translate(0px," + t + "px)", s.$slideTrack.css(n)) }, complete: function() { i && i.call() } })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? n[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(n), i && setTimeout(function() { s.disableTransition(), i.call() }, s.options.speed))
        }, e.prototype.getNavTarget = function() {
            var e = this,
                i = e.options.asNavFor;
            return i && null !== i && (i = t(i).not(e.$slider)), i
        }, e.prototype.asNavFor = function(e) {
            var i = this.getNavTarget();
            null !== i && "object" == typeof i && i.each(function() {
                var i = t(this).slick("getSlick");
                i.unslicked || i.slideHandler(e, !0)
            })
        }, e.prototype.applyTransition = function(t) {
            var e = this,
                i = {};
            !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, e.prototype.autoPlay = function() {
            var t = this;
            t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
        }, e.prototype.autoPlayClear = function() {
            var t = this;
            t.autoPlayTimer && clearInterval(t.autoPlayTimer)
        }, e.prototype.autoPlayIterator = function() {
            var t = this,
                e = t.currentSlide + t.options.slidesToScroll;
            t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
        }, e.prototype.buildArrows = function() { var e = this;!0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" })) }, e.prototype.buildDots = function() {
            var e, i, n = this;
            if (!0 === n.options.dots) {
                for (n.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
                n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active")
            }
        }, e.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i) { t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "") }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
        }, e.prototype.buildRows = function() {
            var t, e, i, n, s, o, r, a = this;
            if (n = document.createDocumentFragment(), o = a.$slider.children(), a.options.rows > 1) {
                for (r = a.options.slidesPerRow * a.options.rows, s = Math.ceil(o.length / r), t = 0; t < s; t++) {
                    var l = document.createElement("div");
                    for (e = 0; e < a.options.rows; e++) {
                        var c = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                            var u = t * r + (e * a.options.slidesPerRow + i);
                            o.get(u) && c.appendChild(o.get(u))
                        }
                        l.appendChild(c)
                    }
                    n.appendChild(l)
                }
                a.$slider.empty().append(n), a.$slider.children().children().children().css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" })
            }
        }, e.prototype.checkResponsive = function(e, i) {
            var n, s, o, r = this,
                a = !1,
                l = r.$slider.width(),
                c = window.innerWidth || t(window).width();
            if ("window" === r.respondTo ? o = c : "slider" === r.respondTo ? o = l : "min" === r.respondTo && (o = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                s = null;
                for (n in r.breakpoints) r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? o < r.breakpoints[n] && (s = r.breakpoints[n]) : o > r.breakpoints[n] && (s = r.breakpoints[n]));
                null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || i) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), a = s), e || !1 === a || r.$slider.trigger("breakpoint", [r, a])
            }
        }, e.prototype.changeSlide = function(e, i) {
            var n, s, o, r = this,
                a = t(e.currentTarget);
            switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), o = r.slideCount % r.options.slidesToScroll != 0, n = o ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
                case "previous":
                    s = 0 === n ? r.options.slidesToScroll : r.options.slidesToShow - n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, i);
                    break;
                case "next":
                    s = 0 === n ? r.options.slidesToScroll : n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, i);
                    break;
                case "index":
                    var l = 0 === e.data.index ? 0 : e.data.index || a.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(l), !1, i), a.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, e.prototype.checkNavigable = function(t) {
            var e, i;
            if (e = this.getNavigableIndexes(), i = 0, t > e[e.length - 1]) t = e[e.length - 1];
            else
                for (var n in e) {
                    if (t < e[n]) { t = i; break }
                    i = e[n]
                }
            return t
        }, e.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.cleanUpSlideEvents = function() {
            var e = this;
            e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.cleanUpRows = function() {
            var t, e = this;
            e.options.rows > 1 && ((t = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(t))
        }, e.prototype.clickHandler = function(t) {!1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault()) }, e.prototype.destroy = function(e) {
            var i = this;
            i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() { t(this).attr("style", t(this).data("originalStyling")) }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
        }, e.prototype.disableTransition = function(t) {
            var e = this,
                i = {};
            i[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, e.prototype.fadeSlide = function(t, e) { var i = this;!1 === i.cssTransitions ? (i.$slides.eq(t).css({ zIndex: i.options.zIndex }), i.$slides.eq(t).animate({ opacity: 1 }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({ opacity: 1, zIndex: i.options.zIndex }), e && setTimeout(function() { i.disableTransition(t), e.call() }, i.options.speed)) }, e.prototype.fadeSlideOut = function(t) {
            var e = this;
            !1 === e.cssTransitions ? e.$slides.eq(t).animate({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({ opacity: 0, zIndex: e.options.zIndex - 2 }))
        }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
            var e = this;
            null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
        }, e.prototype.focusHandler = function() {
            var e = this;
            e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(i) {
                i.stopImmediatePropagation();
                var n = t(this);
                setTimeout(function() { e.options.pauseOnFocus && (e.focussed = n.is(":focus"), e.autoPlay()) }, 0)
            })
        }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() { return this.currentSlide }, e.prototype.getDotCount = function() {
            var t = this,
                e = 0,
                i = 0,
                n = 0;
            if (!0 === t.options.infinite)
                if (t.slideCount <= t.options.slidesToShow) ++n;
                else
                    for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else if (!0 === t.options.centerMode) n = t.slideCount;
            else if (t.options.asNavFor)
                for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
            return n - 1
        }, e.prototype.getLeft = function(t) {
            var e, i, n, s, o = this,
                r = 0;
            return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, s = -1, !0 === o.options.vertical && !0 === o.options.centerMode && (2 === o.options.slidesToShow ? s = -1.5 : 1 === o.options.slidesToShow && (s = -2)), r = i * o.options.slidesToShow * s), o.slideCount % o.options.slidesToScroll != 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1, r = (o.options.slidesToShow - (t - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, r = o.slideCount % o.options.slidesToScroll * i * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth, r = (t + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, r = 0), !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow ? o.slideOffset = o.slideWidth * Math.floor(o.options.slidesToShow) / 2 - o.slideWidth * o.slideCount / 2 : !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), e = !1 === o.options.vertical ? t * o.slideWidth * -1 + o.slideOffset : t * i * -1 + r, !0 === o.options.variableWidth && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow), e = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === o.options.centerMode && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1), e = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, e += (o.$list.width() - n.outerWidth()) / 2)), e
        }, e.prototype.getOption = e.prototype.slickGetOption = function(t) { return this.options[t] }, e.prototype.getNavigableIndexes = function() {
            var t, e = this,
                i = 0,
                n = 0,
                s = [];
            for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); i < t;) s.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return s
        }, e.prototype.getSlick = function() { return this }, e.prototype.getSlideCount = function() { var e, i, n = this; return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function(s, o) { if (o.offsetLeft - i + t(o).outerWidth() / 2 > -1 * n.swipeLeft) return e = o, !1 }), Math.abs(t(e).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) { this.changeSlide({ data: { message: "index", index: parseInt(t) } }, e) }, e.prototype.init = function(e) {
            var i = this;
            t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
        }, e.prototype.initADA = function() {
            var e = this,
                i = Math.ceil(e.slideCount / e.options.slidesToShow),
                n = e.getNavigableIndexes().filter(function(t) { return t >= 0 && t < e.slideCount });
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
                var s = n.indexOf(i);
                t(this).attr({ role: "tabpanel", id: "slick-slide" + e.instanceUid + i, tabindex: -1 }), -1 !== s && t(this).attr({ "aria-describedby": "slick-slide-control" + e.instanceUid + s })
            }), e.$dots.attr("role", "tablist").find("li").each(function(s) {
                var o = n[s];
                t(this).attr({ role: "presentation" }), t(this).find("button").first().attr({ role: "tab", id: "slick-slide-control" + e.instanceUid + s, "aria-controls": "slick-slide" + e.instanceUid + o, "aria-label": s + 1 + " of " + i, "aria-selected": null, tabindex: "-1" })
            }).eq(e.currentSlide).find("button").attr({ "aria-selected": "true", tabindex: "0" }).end());
            for (var s = e.currentSlide, o = s + e.options.slidesToShow; s < o; s++) e.$slides.eq(s).attr("tabindex", 0);
            e.activateADA()
        }, e.prototype.initArrowEvents = function() { var t = this;!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler))) }, e.prototype.initDotEvents = function() { var e = this;!0 === e.options.dots && (t("li", e.$dots).on("click.slick", { message: "index" }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1)) }, e.prototype.initSlideEvents = function() {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
        }, e.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", { action: "start" }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", { action: "move" }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", { action: "end" }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(e.setPosition)
        }, e.prototype.initUI = function() { var t = this;!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show() }, e.prototype.keyHandler = function(t) {
            var e = this;
            t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({ data: { message: !0 === e.options.rtl ? "next" : "previous" } }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({ data: { message: !0 === e.options.rtl ? "previous" : "next" } }))
        }, e.prototype.lazyLoad = function() {
            function e(e) {
                t("img[data-lazy]", e).each(function() {
                    var e = t(this),
                        i = t(this).attr("data-lazy"),
                        n = t(this).attr("data-srcset"),
                        s = t(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
                        r = document.createElement("img");
                    r.onload = function() { e.animate({ opacity: 0 }, 100, function() { n && (e.attr("srcset", n), s && e.attr("sizes", s)), e.attr("src", i).animate({ opacity: 1 }, 200, function() { e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading") }), o.$slider.trigger("lazyLoaded", [o, e, i]) }) }, r.onerror = function() { e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, e, i]) }, r.src = i
                })
            }
            var i, n, s, o = this;
            if (!0 === o.options.centerMode ? !0 === o.options.infinite ? s = (n = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (n = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), s = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (n = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, s = Math.ceil(n + o.options.slidesToShow), !0 === o.options.fade && (n > 0 && n--, s <= o.slideCount && s++)), i = o.$slider.find(".slick-slide").slice(n, s), "anticipated" === o.options.lazyLoad)
                for (var r = n - 1, a = s, l = o.$slider.find(".slick-slide"), c = 0; c < o.options.slidesToScroll; c++) r < 0 && (r = o.slideCount - 1), i = (i = i.add(l.eq(r))).add(l.eq(a)), r--, a++;
            e(i), o.slideCount <= o.options.slidesToShow ? e(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? e(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && e(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow))
        }, e.prototype.loadSlider = function() {
            var t = this;
            t.setPosition(), t.$slideTrack.css({ opacity: 1 }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
        }, e.prototype.next = e.prototype.slickNext = function() { this.changeSlide({ data: { message: "next" } }) }, e.prototype.orientationChange = function() {
            var t = this;
            t.checkResponsive(), t.setPosition()
        }, e.prototype.pause = e.prototype.slickPause = function() {
            var t = this;
            t.autoPlayClear(), t.paused = !0
        }, e.prototype.play = e.prototype.slickPlay = function() {
            var t = this;
            t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
        }, e.prototype.postSlide = function(e) {
            var i = this;
            i.unslicked || (i.$slider.trigger("afterChange", [i, e]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && t(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
        }, e.prototype.prev = e.prototype.slickPrev = function() { this.changeSlide({ data: { message: "previous" } }) }, e.prototype.preventDefault = function(t) { t.preventDefault() }, e.prototype.progressiveLazyLoad = function(e) {
            e = e || 1;
            var i, n, s, o, r, a = this,
                l = t("img[data-lazy]", a.$slider);
            l.length ? (i = l.first(), n = i.attr("data-lazy"), s = i.attr("data-srcset"), o = i.attr("data-sizes") || a.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() { s && (i.attr("srcset", s), o && i.attr("sizes", o)), i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, n]), a.progressiveLazyLoad() }, r.onerror = function() { e < 3 ? setTimeout(function() { a.progressiveLazyLoad(e + 1) }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, n]), a.progressiveLazyLoad()) }, r.src = n) : a.$slider.trigger("allImagesLoaded", [a])
        }, e.prototype.refresh = function(e) {
            var i, n, s = this;
            n = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > n && (s.currentSlide = n), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), i = s.currentSlide, s.destroy(!0), t.extend(s, s.initials, { currentSlide: i }), s.init(), e || s.changeSlide({ data: { message: "index", index: i } }, !1)
        }, e.prototype.registerBreakpoints = function() {
            var e, i, n, s = this,
                o = s.options.responsive || null;
            if ("array" === t.type(o) && o.length) {
                s.respondTo = s.options.respondTo || "window";
                for (e in o)
                    if (n = s.breakpoints.length - 1, o.hasOwnProperty(e)) {
                        for (i = o[e].breakpoint; n >= 0;) s.breakpoints[n] && s.breakpoints[n] === i && s.breakpoints.splice(n, 1), n--;
                        s.breakpoints.push(i), s.breakpointSettings[i] = o[e].settings
                    }
                s.breakpoints.sort(function(t, e) { return s.options.mobileFirst ? t - e : e - t })
            }
        }, e.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
        }, e.prototype.resize = function() {
            var e = this;
            t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() { e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition() }, 50))
        }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
            var n = this;
            if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : n.slideCount - 1 : !0 === e ? --t : t, n.slideCount < 1 || t < 0 || t > n.slideCount - 1) return !1;
            n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
        }, e.prototype.setCSS = function(t) {
            var e, i, n = this,
                s = {};
            !0 === n.options.rtl && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", s[n.positionProp] = t, !1 === n.transformsEnabled ? n.$slideTrack.css(s) : (s = {}, !1 === n.cssTransitions ? (s[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(s)) : (s[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(s)))
        }, e.prototype.setDimensions = function() { var t = this;!1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({ padding: "0px " + t.options.centerPadding }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({ padding: t.options.centerPadding + " 0px" })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length))); var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();!1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e) }, e.prototype.setFade = function() {
            var e, i = this;
            i.$slides.each(function(n, s) { e = i.slideWidth * n * -1, !0 === i.options.rtl ? t(s).css({ position: "relative", right: e, top: 0, zIndex: i.options.zIndex - 2, opacity: 0 }) : t(s).css({ position: "relative", left: e, top: 0, zIndex: i.options.zIndex - 2, opacity: 0 }) }), i.$slides.eq(i.currentSlide).css({ zIndex: i.options.zIndex - 1, opacity: 1 })
        }, e.prototype.setHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.css("height", e)
            }
        }, e.prototype.setOption = e.prototype.slickSetOption = function() {
            var e, i, n, s, o, r = this,
                a = !1;
            if ("object" === t.type(arguments[0]) ? (n = arguments[0], a = arguments[1], o = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0], s = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) r.options[n] = s;
            else if ("multiple" === o) t.each(n, function(t, e) { r.options[t] = e });
            else if ("responsive" === o)
                for (i in s)
                    if ("array" !== t.type(r.options.responsive)) r.options.responsive = [s[i]];
                    else {
                        for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[i].breakpoint && r.options.responsive.splice(e, 1), e--;
                        r.options.responsive.push(s[i])
                    }
            a && (r.unload(), r.reinit())
        }, e.prototype.setPosition = function() {
            var t = this;
            t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
        }, e.prototype.setProps = function() {
            var t = this,
                e = document.body.style;
            t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
        }, e.prototype.setSlideClasses = function(t) {
            var e, i, n, s, o = this;
            if (i = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(t).addClass("slick-current"), !0 === o.options.centerMode) {
                var r = o.options.slidesToShow % 2 == 0 ? 1 : 0;
                e = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (t >= e && t <= o.slideCount - 1 - e ? o.$slides.slice(t - e + r, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = o.options.slidesToShow + t, i.slice(n - e + 1 + r, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - o.options.slidesToShow).addClass("slick-center") : t === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(t).addClass("slick-center")
            } else t >= 0 && t <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(t, t + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= o.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (s = o.slideCount % o.options.slidesToShow, n = !0 === o.options.infinite ? o.options.slidesToShow + t : t, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - t < o.options.slidesToShow ? i.slice(n - (o.options.slidesToShow - s), n + s).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
            "ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad || o.lazyLoad()
        }, e.prototype.setupInfinite = function() {
            var e, i, n, s = this;
            if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (i = null, s.slideCount > s.options.slidesToShow)) {
                for (n = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - n; e -= 1) i = e - 1, t(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
                for (e = 0; e < n + s.slideCount; e += 1) i = e, t(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
                s.$slideTrack.find(".slick-cloned").find("[id]").each(function() { t(this).attr("id", "") })
            }
        }, e.prototype.interrupt = function(t) {
            var e = this;
            t || e.autoPlay(), e.interrupted = t
        }, e.prototype.selectHandler = function(e) {
            var i = this,
                n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
                s = parseInt(n.attr("data-slick-index"));
            s || (s = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(s, !1, !0) : i.slideHandler(s)
        }, e.prototype.slideHandler = function(t, e, i) {
            var n, s, o, r, a, l = null,
                c = this;
            if (e = e || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t))
                if (!1 === e && c.asNavFor(t), n = t, l = c.getLeft(n), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(r, function() { c.postSlide(n) }) : c.postSlide(n));
                else if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(r, function() { c.postSlide(n) }) : c.postSlide(n));
            else { if (c.options.autoplay && clearInterval(c.autoPlayTimer), s = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, s]), o = c.currentSlide, c.currentSlide = s, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(o), c.fadeSlide(s, function() { c.postSlide(s) })) : c.postSlide(s), void c.animateHeight();!0 !== i ? c.animateSlide(l, function() { c.postSlide(s) }) : c.postSlide(s) }
        }, e.prototype.startLoad = function() { var t = this;!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading") }, e.prototype.swipeDirection = function() { var t, e, i, n, s = this; return t = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, i = Math.atan2(e, t), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 ? !1 === s.options.rtl ? "left" : "right" : n <= 360 && n >= 315 ? !1 === s.options.rtl ? "left" : "right" : n >= 135 && n <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? n >= 35 && n <= 135 ? "down" : "up" : "vertical" }, e.prototype.swipeEnd = function(t) {
            var e, i, n = this;
            if (n.dragging = !1, n.swiping = !1, n.scrolling) return n.scrolling = !1, !1;
            if (n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
            if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                switch (i = n.swipeDirection()) {
                    case "left":
                    case "down":
                        e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
                }
                "vertical" != i && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
            } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
        }, e.prototype.swipeHandler = function(t) {
            var e = this;
            if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
                case "start":
                    e.swipeStart(t);
                    break;
                case "move":
                    e.swipeMove(t);
                    break;
                case "end":
                    e.swipeEnd(t)
            }
        }, e.prototype.swipeMove = function(t) { var e, i, n, s, o, r, a = this; return o = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!a.dragging || a.scrolling || o && 1 !== o.length) && (e = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX, a.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && r > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r), i = a.swipeDirection(), void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, t.preventDefault()), s = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (s = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = e + n * s : a.swipeLeft = e + n * (a.$list.height() / a.listWidth) * s, !0 === a.options.verticalSwiping && (a.swipeLeft = e + n * s), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft)))) }, e.prototype.swipeStart = function(t) {
            var e, i = this;
            if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
            void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, i.dragging = !0
        }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
            var t = this;
            null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
        }, e.prototype.unload = function() {
            var e = this;
            t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, e.prototype.unslick = function(t) {
            var e = this;
            e.$slider.trigger("unslick", [e, t]), e.destroy()
        }, e.prototype.updateArrows = function() {
            var t = this;
            Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, e.prototype.updateDots = function() {
            var t = this;
            null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
        }, e.prototype.visibility = function() {
            var t = this;
            t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
        }, t.fn.slick = function() {
            var t, i, n = this,
                s = arguments[0],
                o = Array.prototype.slice.call(arguments, 1),
                r = n.length;
            for (t = 0; t < r; t++)
                if ("object" == typeof s || void 0 === s ? n[t].slick = new e(n[t], s) : i = n[t].slick[s].apply(n[t].slick, o), void 0 !== i) return i;
            return n
        }
    }),
    function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto) }(function(t) {
        var e, i, n, s, o, r, a = "Close",
            l = "BeforeClose",
            c = "MarkupParse",
            u = "Open",
            h = "Change",
            d = "mfp",
            p = "." + d,
            f = "mfp-ready",
            m = "mfp-removing",
            g = "mfp-prevent-close",
            v = function() {},
            _ = !!window.jQuery,
            y = t(window),
            b = function(t, i) { e.ev.on(d + t + p, i) },
            w = function(e, i, n, s) { var o = document.createElement("div"); return o.className = "mfp-" + e, n && (o.innerHTML = n), s ? i && i.appendChild(o) : (o = t(o), i && o.appendTo(i)), o },
            C = function(i, n) { e.ev.triggerHandler(d + i, n), e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(n) ? n : [n])) },
            x = function(i) { return i === r && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), r = i), e.currTemplate.closeBtn },
            T = function() { t.magnificPopup.instance || (e = new v, e.init(), t.magnificPopup.instance = e) },
            S = function() {
                var t = document.createElement("p").style,
                    e = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== t.transition) return !0;
                for (; e.length;)
                    if (e.pop() + "Transition" in t) return !0;
                return !1
            };
        v.prototype = {
            constructor: v,
            init: function() {
                var i = navigator.appVersion;
                e.isLowIE = e.isIE8 = document.all && !document.addEventListener, e.isAndroid = /android/gi.test(i), e.isIOS = /iphone|ipad|ipod/gi.test(i), e.supportsTransition = S(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = t(document), e.popupsCache = {}
            },
            open: function(i) {
                var s;
                if (!1 === i.isObj) {
                    e.items = i.items.toArray(), e.index = 0;
                    var r, a = i.items;
                    for (s = 0; s < a.length; s++)
                        if (r = a[s], r.parsed && (r = r.el[0]), r === i.el[0]) { e.index = s; break }
                } else e.items = t.isArray(i.items) ? i.items : [i.items], e.index = i.index || 0;
                if (e.isOpen) return void e.updateItemHTML();
                e.types = [], o = "", i.mainEl && i.mainEl.length ? e.ev = i.mainEl.eq(0) : e.ev = n, i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, i), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = w("bg").on("click" + p, function() { e.close() }), e.wrap = w("wrap").attr("tabindex", -1).on("click" + p, function(t) { e._checkIfClose(t.target) && e.close() }), e.container = w("container", e.wrap)), e.contentContainer = w("content"), e.st.preloader && (e.preloader = w("preloader", e.container, e.st.tLoading));
                var l = t.magnificPopup.modules;
                for (s = 0; s < l.length; s++) {
                    var h = l[s];
                    h = h.charAt(0).toUpperCase() + h.slice(1), e["init" + h].call(e)
                }
                C("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (b(c, function(t, e, i, n) { i.close_replaceWith = x(n.type) }), o += " mfp-close-btn-in") : e.wrap.append(x())), e.st.alignTop && (o += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({ overflow: e.st.overflowY, overflowX: "hidden", overflowY: e.st.overflowY }) : e.wrap.css({ top: y.scrollTop(), position: "absolute" }), (!1 === e.st.fixedBgPos || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({ height: n.height(), position: "absolute" }), e.st.enableEscapeKey && n.on("keyup" + p, function(t) { 27 === t.keyCode && e.close() }), y.on("resize" + p, function() { e.updateSize() }), e.st.closeOnContentClick || (o += " mfp-auto-cursor"), o && e.wrap.addClass(o);
                var d = e.wH = y.height(),
                    m = {};
                if (e.fixedContentPos && e._hasScrollBar(d)) {
                    var g = e._getScrollbarSize();
                    g && (m.marginRight = g)
                }
                e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : m.overflow = "hidden");
                var v = e.st.mainClass;
                return e.isIE7 && (v += " mfp-ie7"), v && e._addClassToMFP(v), e.updateItemHTML(), C("BuildControls"), t("html").css(m), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout(function() { e.content ? (e._addClassToMFP(f), e._setFocus()) : e.bgOverlay.addClass(f), n.on("focusin" + p, e._onFocusIn) }, 16), e.isOpen = !0, e.updateSize(d), C(u), i
            },
            close: function() { e.isOpen && (C(l), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(m), setTimeout(function() { e._close() }, e.st.removalDelay)) : e._close()) },
            _close: function() {
                C(a);
                var i = m + " " + f + " ";
                if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), e._removeClassFromMFP(i), e.fixedContentPos) {
                    var s = { marginRight: "" };
                    e.isIE7 ? t("body, html").css("overflow", "") : s.overflow = "", t("html").css(s)
                }
                n.off("keyup.mfp focusin" + p), e.ev.off(p), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && !0 !== e.currTemplate[e.currItem.type] || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, C("AfterClose")
            },
            updateSize: function(t) {
                if (e.isIOS) {
                    var i = document.documentElement.clientWidth / window.innerWidth,
                        n = window.innerHeight * i;
                    e.wrap.css("height", n), e.wH = n
                } else e.wH = t || y.height();
                e.fixedContentPos || e.wrap.css("height", e.wH), C("Resize")
            },
            updateItemHTML: function() {
                var i = e.items[e.index];
                e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index));
                var n = i.type;
                if (C("BeforeChange", [e.currItem ? e.currItem.type : "", n]), e.currItem = i, !e.currTemplate[n]) {
                    var o = !!e.st[n] && e.st[n].markup;
                    C("FirstMarkupParse", o), e.currTemplate[n] = !o || t(o)
                }
                s && s !== i.type && e.container.removeClass("mfp-" + s + "-holder");
                var r = e["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, e.currTemplate[n]);
                e.appendContent(r, n), i.preloaded = !0, C(h, i), s = i.type, e.container.prepend(e.contentContainer), C("AfterChange")
            },
            appendContent: function(t, i) { e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && !0 === e.currTemplate[i] ? e.content.find(".mfp-close").length || e.content.append(x()) : e.content = t : e.content = "", C("BeforeAppend"), e.container.addClass("mfp-" + i + "-holder"), e.contentContainer.append(e.content) },
            parseEl: function(i) {
                var n, s = e.items[i];
                if (s.tagName ? s = { el: t(s) } : (n = s.type, s = { data: s, src: s.src }), s.el) {
                    for (var o = e.types, r = 0; r < o.length; r++)
                        if (s.el.hasClass("mfp-" + o[r])) { n = o[r]; break }
                    s.src = s.el.attr("data-mfp-src"), s.src || (s.src = s.el.attr("href"))
                }
                return s.type = n || e.st.type || "inline", s.index = i, s.parsed = !0, e.items[i] = s, C("ElementParse", s), e.items[i]
            },
            addGroup: function(t, i) {
                var n = function(n) { n.mfpEl = this, e._openClick(n, t, i) };
                i || (i = {});
                var s = "click.magnificPopup";
                i.mainEl = t, i.items ? (i.isObj = !0, t.off(s).on(s, n)) : (i.isObj = !1, i.delegate ? t.off(s).on(s, i.delegate, n) : (i.items = t, t.off(s).on(s, n)))
            },
            _openClick: function(i, n, s) {
                if ((void 0 !== s.midClick ? s.midClick : t.magnificPopup.defaults.midClick) || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                    var o = void 0 !== s.disableOn ? s.disableOn : t.magnificPopup.defaults.disableOn;
                    if (o)
                        if (t.isFunction(o)) { if (!o.call(e)) return !0 } else if (y.width() < o) return !0;
                    i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()), s.el = t(i.mfpEl), s.delegate && (s.items = n.find(s.delegate)), e.open(s)
                }
            },
            updateStatus: function(t, n) {
                if (e.preloader) {
                    i !== t && e.container.removeClass("mfp-s-" + i), n || "loading" !== t || (n = e.st.tLoading);
                    var s = { status: t, text: n };
                    C("UpdateStatus", s), t = s.status, n = s.text, e.preloader.html(n), e.preloader.find("a").on("click", function(t) { t.stopImmediatePropagation() }), e.container.addClass("mfp-s-" + t), i = t
                }
            },
            _checkIfClose: function(i) {
                if (!t(i).hasClass(g)) {
                    var n = e.st.closeOnContentClick,
                        s = e.st.closeOnBgClick;
                    if (n && s) return !0;
                    if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0]) return !0;
                    if (i === e.content[0] || t.contains(e.content[0], i)) { if (n) return !0 } else if (s && t.contains(document, i)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function(t) { e.bgOverlay.addClass(t), e.wrap.addClass(t) },
            _removeClassFromMFP: function(t) { this.bgOverlay.removeClass(t), e.wrap.removeClass(t) },
            _hasScrollBar: function(t) { return (e.isIE7 ? n.height() : document.body.scrollHeight) > (t || y.height()) },
            _setFocus: function() {
                (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
            },
            _onFocusIn: function(i) { return i.target === e.wrap[0] || t.contains(e.wrap[0], i.target) ? void 0 : (e._setFocus(), !1) },
            _parseMarkup: function(e, i, n) {
                var s;
                n.data && (i = t.extend(n.data, i)), C(c, [e, i, n]), t.each(i, function(i, n) { if (void 0 === n || !1 === n) return !0; if (s = i.split("_"), s.length > 1) { var o = e.find(p + "-" + s[0]); if (o.length > 0) { var r = s[1]; "replaceWith" === r ? o[0] !== n[0] && o.replaceWith(n) : "img" === r ? o.is("img") ? o.attr("src", n) : o.replaceWith(t("<img>").attr("src", n).attr("class", o.attr("class"))) : o.attr(s[1], n) } } else e.find(p + "-" + i).html(n) })
            },
            _getScrollbarSize: function() {
                if (void 0 === e.scrollbarSize) {
                    var t = document.createElement("div");
                    t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
                }
                return e.scrollbarSize
            }
        }, t.magnificPopup = { instance: null, proto: v.prototype, modules: [], open: function(e, i) { return T(), e = e ? t.extend(!0, {}, e) : {}, e.isObj = !0, e.index = i || 0, this.instance.open(e) }, close: function() { return t.magnificPopup.instance && t.magnificPopup.instance.close() }, registerModule: function(e, i) { i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, t.fn.magnificPopup = function(i) {
            T();
            var n = t(this);
            if ("string" == typeof i)
                if ("open" === i) {
                    var s, o = _ ? n.data("magnificPopup") : n[0].magnificPopup,
                        r = parseInt(arguments[1], 10) || 0;
                    o.items ? s = o.items[r] : (s = n, o.delegate && (s = s.find(o.delegate)), s = s.eq(r)), e._openClick({ mfpEl: s }, n, o)
                } else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
            else i = t.extend(!0, {}, i), _ ? n.data("magnificPopup", i) : n[0].magnificPopup = i, e.addGroup(n, i);
            return n
        };
        var k, D, E, I = "inline",
            P = function() { E && (D.after(E.addClass(k)).detach(), E = null) };
        t.magnificPopup.registerModule(I, {
            options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" },
            proto: {
                initInline: function() { e.types.push(I), b(a + "." + I, function() { P() }) },
                getInline: function(i, n) {
                    if (P(), i.src) {
                        var s = e.st.inline,
                            o = t(i.src);
                        if (o.length) {
                            var r = o[0].parentNode;
                            r && r.tagName && (D || (k = s.hiddenClass, D = w(k), k = "mfp-" + k), E = o.after(D).detach().removeClass(k)), e.updateStatus("ready")
                        } else e.updateStatus("error", s.tNotFound), o = t("<div>");
                        return i.inlineElement = o, o
                    }
                    return e.updateStatus("ready"), e._parseMarkup(n, {}, i), n
                }
            }
        });
        var A, O = "ajax",
            N = function() { A && t(document.body).removeClass(A) },
            M = function() { N(), e.req && e.req.abort() };
        t.magnificPopup.registerModule(O, {
            options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' },
            proto: {
                initAjax: function() { e.types.push(O), A = e.st.ajax.cursor, b(a + "." + O, M), b("BeforeChange." + O, M) },
                getAjax: function(i) {
                    A && t(document.body).addClass(A), e.updateStatus("loading");
                    var n = t.extend({
                        url: i.src,
                        success: function(n, s, o) {
                            var r = { data: n, xhr: o };
                            C("ParseAjax", r), e.appendContent(t(r.data), O), i.finished = !0, N(), e._setFocus(), setTimeout(function() { e.wrap.addClass(f) }, 16), e.updateStatus("ready"), C("AjaxContentAdded")
                        },
                        error: function() { N(), i.finished = i.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src)) }
                    }, e.st.ajax.settings);
                    return e.req = t.ajax(n), ""
                }
            }
        });
        var H, $ = function(i) { if (i.data && void 0 !== i.data.title) return i.data.title; var n = e.st.image.titleSrc; if (n) { if (t.isFunction(n)) return n.call(e, i); if (i.el) return i.el.attr(n) || "" } return "" };
        t.magnificPopup.registerModule("image", {
            options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' },
            proto: {
                initImage: function() {
                    var i = e.st.image,
                        n = ".image";
                    e.types.push("image"), b(u + n, function() { "image" === e.currItem.type && i.cursor && t(document.body).addClass(i.cursor) }), b(a + n, function() { i.cursor && t(document.body).removeClass(i.cursor), y.off("resize" + p) }), b("Resize" + n, e.resizeImage), e.isLowIE && b("AfterChange", e.resizeImage)
                },
                resizeImage: function() {
                    var t = e.currItem;
                    if (t && t.img && e.st.image.verticalFit) {
                        var i = 0;
                        e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - i)
                    }
                },
                _onImageHasSize: function(t) { t.img && (t.hasSize = !0, H && clearInterval(H), t.isCheckingImgSize = !1, C("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1)) },
                findImageSize: function(t) {
                    var i = 0,
                        n = t.img[0],
                        s = function(o) { H && clearInterval(H), H = setInterval(function() { return n.naturalWidth > 0 ? void e._onImageHasSize(t) : (i > 200 && clearInterval(H), i++, void(3 === i ? s(10) : 40 === i ? s(50) : 100 === i && s(500))) }, o) };
                    s(1)
                },
                getImage: function(i, n) {
                    var s = 0,
                        o = function() { i && (i.img[0].complete ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, C("ImageLoadComplete")) : (s++, 200 > s ? setTimeout(o, 100) : r())) },
                        r = function() { i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("error", a.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0) },
                        a = e.st.image,
                        l = n.find(".mfp-img");
                    if (l.length) {
                        var c = document.createElement("img");
                        c.className = "mfp-img", i.el && i.el.find("img").length && (c.alt = i.el.find("img").attr("alt")), i.img = t(c).on("load.mfploader", o).on("error.mfploader", r), c.src = i.src, l.is("img") && (i.img = i.img.clone()), c = i.img[0], c.naturalWidth > 0 ? i.hasSize = !0 : c.width || (i.hasSize = !1)
                    }
                    return e._parseMarkup(n, { title: $(i), img_replaceWith: i.img }, i), e.resizeImage(), i.hasSize ? (H && clearInterval(H), i.loadError ? (n.addClass("mfp-loading"), e.updateStatus("error", a.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), e.updateStatus("ready")), n) : (e.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), e.findImageSize(i)), n)
                }
            }
        });
        var L, z = function() { return void 0 === L && (L = void 0 !== document.createElement("p").style.MozTransform), L };
        t.magnificPopup.registerModule("zoom", {
            options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function(t) { return t.is("img") ? t : t.find("img") } },
            proto: {
                initZoom: function() {
                    var t, i = e.st.zoom,
                        n = ".zoom";
                    if (i.enabled && e.supportsTransition) {
                        var s, o, r = i.duration,
                            c = function(t) {
                                var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    n = "all " + i.duration / 1e3 + "s " + i.easing,
                                    s = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                                    o = "transition";
                                return s["-webkit-" + o] = s["-moz-" + o] = s["-o-" + o] = s[o] = n, e.css(s), e
                            },
                            u = function() { e.content.css("visibility", "visible") };
                        b("BuildControls" + n, function() {
                            if (e._allowZoom()) {
                                if (clearTimeout(s), e.content.css("visibility", "hidden"), !(t = e._getItemToZoom())) return void u();
                                o = c(t), o.css(e._getOffset()), e.wrap.append(o), s = setTimeout(function() { o.css(e._getOffset(!0)), s = setTimeout(function() { u(), setTimeout(function() { o.remove(), t = o = null, C("ZoomAnimationEnded") }, 16) }, r) }, 16)
                            }
                        }), b(l + n, function() {
                            if (e._allowZoom()) {
                                if (clearTimeout(s), e.st.removalDelay = r, !t) {
                                    if (!(t = e._getItemToZoom())) return;
                                    o = c(t)
                                }
                                o.css(e._getOffset(!0)), e.wrap.append(o), e.content.css("visibility", "hidden"), setTimeout(function() { o.css(e._getOffset()) }, 16)
                            }
                        }), b(a + n, function() { e._allowZoom() && (u(), o && o.remove(), t = null) })
                    }
                },
                _allowZoom: function() { return "image" === e.currItem.type },
                _getItemToZoom: function() { return !!e.currItem.hasSize && e.currItem.img },
                _getOffset: function(i) {
                    var n;
                    n = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem);
                    var s = n.offset(),
                        o = parseInt(n.css("padding-top"), 10),
                        r = parseInt(n.css("padding-bottom"), 10);
                    s.top -= t(window).scrollTop() - o;
                    var a = { width: n.width(), height: (_ ? n.innerHeight() : n[0].offsetHeight) - r - o };
                    return z() ? a["-moz-transform"] = a.transform = "translate(" + s.left + "px," + s.top + "px)" : (a.left = s.left, a.top = s.top), a
                }
            }
        });
        var j = "iframe",
            F = function(t) {
                if (e.currTemplate[j]) {
                    var i = e.currTemplate[j].find("iframe");
                    i.length && (t || (i[0].src = "//about:blank"), e.isIE8 && i.css("display", t ? "block" : "none"))
                }
            };
        t.magnificPopup.registerModule(j, {
            options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } },
            proto: {
                initIframe: function() { e.types.push(j), b("BeforeChange", function(t, e, i) { e !== i && (e === j ? F() : i === j && F(!0)) }), b(a + "." + j, function() { F() }) },
                getIframe: function(i, n) {
                    var s = i.src,
                        o = e.st.iframe;
                    t.each(o.patterns, function() { return s.indexOf(this.index) > -1 ? (this.id && (s = "string" == typeof this.id ? s.substr(s.lastIndexOf(this.id) + this.id.length, s.length) : this.id.call(this, s)), s = this.src.replace("%id%", s), !1) : void 0 });
                    var r = {};
                    return o.srcAction && (r[o.srcAction] = s), e._parseMarkup(n, r, i), e.updateStatus("ready"), n
                }
            }
        });
        var R = function(t) { var i = e.items.length; return t > i - 1 ? t - i : 0 > t ? i + t : t },
            W = function(t, e, i) { return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i) };
        t.magnificPopup.registerModule("gallery", {
            options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" },
            proto: {
                initGallery: function() {
                    var i = e.st.gallery,
                        s = ".mfp-gallery";
                    return e.direction = !0, !(!i || !i.enabled) && (o += " mfp-gallery", b(u + s, function() { i.navigateByImgClick && e.wrap.on("click" + s, ".mfp-img", function() { return e.items.length > 1 ? (e.next(), !1) : void 0 }), n.on("keydown" + s, function(t) { 37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next() }) }), b("UpdateStatus" + s, function(t, i) { i.text && (i.text = W(i.text, e.currItem.index, e.items.length)) }), b(c + s, function(t, n, s, o) {
                        var r = e.items.length;
                        s.counter = r > 1 ? W(i.tCounter, o.index, r) : ""
                    }), b("BuildControls" + s, function() {
                        if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                            var n = i.arrowMarkup,
                                s = e.arrowLeft = t(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(g),
                                o = e.arrowRight = t(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(g);
                            s.click(function() { e.prev() }), o.click(function() { e.next() }), e.container.append(s.add(o))
                        }
                    }), b(h + s, function() { e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function() { e.preloadNearbyImages(), e._preloadTimeout = null }, 16) }), void b(a + s, function() { n.off(s), e.wrap.off("click" + s), e.arrowRight = e.arrowLeft = null }))
                },
                next: function() { e.direction = !0, e.index = R(e.index + 1), e.updateItemHTML() },
                prev: function() { e.direction = !1, e.index = R(e.index - 1), e.updateItemHTML() },
                goTo: function(t) { e.direction = t >= e.index, e.index = t, e.updateItemHTML() },
                preloadNearbyImages: function() {
                    var t, i = e.st.gallery.preload,
                        n = Math.min(i[0], e.items.length),
                        s = Math.min(i[1], e.items.length);
                    for (t = 1; t <= (e.direction ? s : n); t++) e._preloadItem(e.index + t);
                    for (t = 1; t <= (e.direction ? n : s); t++) e._preloadItem(e.index - t)
                },
                _preloadItem: function(i) {
                    if (i = R(i), !e.items[i].preloaded) {
                        var n = e.items[i];
                        n.parsed || (n = e.parseEl(i)), C("LazyLoad", n), "image" === n.type && (n.img = t('<img class="mfp-img" />').on("load.mfploader", function() { n.hasSize = !0 }).on("error.mfploader", function() { n.hasSize = !0, n.loadError = !0, C("LazyLoadError", n) }).attr("src", n.src)), n.preloaded = !0
                    }
                }
            }
        });
        var q = "retina";
        t.magnificPopup.registerModule(q, {
            options: { replaceSrc: function(t) { return t.src.replace(/\.\w+$/, function(t) { return "@2x" + t }) }, ratio: 1 },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var t = e.st.retina,
                            i = t.ratio;
                        (i = isNaN(i) ? i() : i) > 1 && (b("ImageHasSize." + q, function(t, e) { e.img.css({ "max-width": e.img[0].naturalWidth / i, width: "100%" }) }), b("ElementParse." + q, function(e, n) { n.src = t.replaceSrc(n, i) }))
                    }
                }
            }
        }), T()
    }),
    function(t) { "function" == typeof define && define.amd ? define(["jquery"], function(e) { return t(e) }) : "object" == typeof module && "object" == typeof module.exports ? exports = t(require("jquery")) : t(jQuery) }(function(t) {
        function e(t) {
            var e = 7.5625,
                i = 2.75;
            return t < 1 / i ? e * t * t : t < 2 / i ? e * (t -= 1.5 / i) * t + .75 : t < 2.5 / i ? e * (t -= 2.25 / i) * t + .9375 : e * (t -= 2.625 / i) * t + .984375
        }
        void 0 !== t.easing && (t.easing.jswing = t.easing.swing);
        var i = Math.pow,
            n = Math.sqrt,
            s = Math.sin,
            o = Math.cos,
            r = Math.PI,
            a = 1.70158,
            l = 1.525 * a,
            c = 2 * r / 3,
            u = 2 * r / 4.5;
        t.extend(t.easing, { def: "easeOutQuad", swing: function(e) { return t.easing[t.easing.def](e) }, easeInQuad: function(t) { return t * t }, easeOutQuad: function(t) { return 1 - (1 - t) * (1 - t) }, easeInOutQuad: function(t) { return t < .5 ? 2 * t * t : 1 - i(-2 * t + 2, 2) / 2 }, easeInCubic: function(t) { return t * t * t }, easeOutCubic: function(t) { return 1 - i(1 - t, 3) }, easeInOutCubic: function(t) { return t < .5 ? 4 * t * t * t : 1 - i(-2 * t + 2, 3) / 2 }, easeInQuart: function(t) { return t * t * t * t }, easeOutQuart: function(t) { return 1 - i(1 - t, 4) }, easeInOutQuart: function(t) { return t < .5 ? 8 * t * t * t * t : 1 - i(-2 * t + 2, 4) / 2 }, easeInQuint: function(t) { return t * t * t * t * t }, easeOutQuint: function(t) { return 1 - i(1 - t, 5) }, easeInOutQuint: function(t) { return t < .5 ? 16 * t * t * t * t * t : 1 - i(-2 * t + 2, 5) / 2 }, easeInSine: function(t) { return 1 - o(t * r / 2) }, easeOutSine: function(t) { return s(t * r / 2) }, easeInOutSine: function(t) { return -(o(r * t) - 1) / 2 }, easeInExpo: function(t) { return 0 === t ? 0 : i(2, 10 * t - 10) }, easeOutExpo: function(t) { return 1 === t ? 1 : 1 - i(2, -10 * t) }, easeInOutExpo: function(t) { return 0 === t ? 0 : 1 === t ? 1 : t < .5 ? i(2, 20 * t - 10) / 2 : (2 - i(2, -20 * t + 10)) / 2 }, easeInCirc: function(t) { return 1 - n(1 - i(t, 2)) }, easeOutCirc: function(t) { return n(1 - i(t - 1, 2)) }, easeInOutCirc: function(t) { return t < .5 ? (1 - n(1 - i(2 * t, 2))) / 2 : (n(1 - i(-2 * t + 2, 2)) + 1) / 2 }, easeInElastic: function(t) { return 0 === t ? 0 : 1 === t ? 1 : -i(2, 10 * t - 10) * s((10 * t - 10.75) * c) }, easeOutElastic: function(t) { return 0 === t ? 0 : 1 === t ? 1 : i(2, -10 * t) * s((10 * t - .75) * c) + 1 }, easeInOutElastic: function(t) { return 0 === t ? 0 : 1 === t ? 1 : t < .5 ? -i(2, 20 * t - 10) * s((20 * t - 11.125) * u) / 2 : i(2, -20 * t + 10) * s((20 * t - 11.125) * u) / 2 + 1 }, easeInBack: function(t) { return (a + 1) * t * t * t - a * t * t }, easeOutBack: function(t) { return 1 + (a + 1) * i(t - 1, 3) + a * i(t - 1, 2) }, easeInOutBack: function(t) { return t < .5 ? i(2 * t, 2) * (7.189819 * t - l) / 2 : (i(2 * t - 2, 2) * ((l + 1) * (2 * t - 2) + l) + 2) / 2 }, easeInBounce: function(t) { return 1 - e(1 - t) }, easeOutBounce: e, easeInOutBounce: function(t) { return t < .5 ? (1 - e(1 - 2 * t)) / 2 : (1 + e(2 * t - 1)) / 2 } })
    }),
    function(t) {
        "use strict";
        t.fn.meanmenu = function(e) {
            var i = { meanMenuTarget: jQuery(this), meanMenuContainer: "body", meanMenuClose: "X", meanMenuCloseSize: "18px", meanMenuOpen: "<span /><span /><span />", meanRevealPosition: "right", meanRevealPositionDistance: "0", meanRevealColour: "", meanScreenWidth: "480", meanNavPush: "", meanShowChildren: !0, meanExpandableChildren: !0, meanExpand: "+", meanContract: "-", meanRemoveAttrs: !1, onePage: !1, meanDisplay: "block", removeElements: "" };
            e = t.extend(i, e);
            var n = window.innerWidth || document.documentElement.clientWidth;
            return this.each(function() {
                var t = e.meanMenuTarget,
                    i = e.meanMenuContainer,
                    s = e.meanMenuClose,
                    o = e.meanMenuCloseSize,
                    r = e.meanMenuOpen,
                    a = e.meanRevealPosition,
                    l = e.meanRevealPositionDistance,
                    c = e.meanRevealColour,
                    u = e.meanScreenWidth,
                    h = e.meanNavPush,
                    d = ".meanmenu-reveal",
                    p = e.meanShowChildren,
                    f = e.meanExpandableChildren,
                    m = e.meanExpand,
                    g = e.meanContract,
                    v = e.meanRemoveAttrs,
                    _ = e.onePage,
                    y = e.meanDisplay,
                    b = e.removeElements,
                    w = !1;
                (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) && (w = !0), (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) && jQuery("html").css("overflow-y", "scroll");
                var C = "",
                    x = function() {
                        if ("center" === a) {
                            var t = window.innerWidth || document.documentElement.clientWidth,
                                e = t / 2 - 22 + "px";
                            C = "left:" + e + ";right:auto;", w ? jQuery(".meanmenu-reveal").animate({ left: e }) : jQuery(".meanmenu-reveal").css("left", e)
                        }
                    },
                    T = !1,
                    S = !1;
                "right" === a && (C = "right:" + l + ";left:auto;"), "left" === a && (C = "left:" + l + ";right:auto;"), x();
                var k = "",
                    D = function() { k.html(jQuery(k).is(".meanmenu-reveal.meanclose") ? s : r) },
                    E = function() { jQuery(".mean-bar,.mean-push").remove(), jQuery(i).removeClass("mean-container"), jQuery(t).css("display", y), T = !1, S = !1, jQuery(b).removeClass("mean-remove") },
                    I = function() {
                        var e = "background:" + c + ";color:" + c + ";" + C;
                        if (u >= n) {
                            jQuery(b).addClass("mean-remove"), S = !0, jQuery(i).addClass("mean-container"), jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + e + '">Show Navigation</a><nav class="mean-nav"></nav></div>');
                            var s = jQuery(t).html();
                            jQuery(".mean-nav").html(s), v && jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function() { jQuery(this).is(".mean-remove") ? jQuery(this).attr("class", "mean-remove") : jQuery(this).removeAttr("class"), jQuery(this).removeAttr("id") }), jQuery(t).before('<div class="mean-push" />'), jQuery(".mean-push").css("margin-top", h), jQuery(t).hide(), jQuery(".meanmenu-reveal").show(), jQuery(d).html(r), k = jQuery(d), jQuery(".mean-nav ul").hide(), p ? f ? (jQuery(".mean-nav ul ul").each(function() { jQuery(this).children().length && jQuery(this, "li:first").parent().append('<a class="mean-expand" href="#" style="font-size: ' + o + '">' + m + "</a>") }), jQuery(".mean-expand").on("click", function(t) { t.preventDefault(), jQuery(this).hasClass("mean-clicked") ? (jQuery(this).text(m), jQuery(this).prev("ul").slideUp(300, function() {})) : (jQuery(this).text(g), jQuery(this).prev("ul").slideDown(300, function() {})), jQuery(this).toggleClass("mean-clicked") })) : jQuery(".mean-nav ul ul").show() : jQuery(".mean-nav ul ul").hide(), jQuery(".mean-nav ul li").last().addClass("mean-last"), k.removeClass("meanclose"), jQuery(k).click(function(t) { t.preventDefault(), !1 === T ? (k.css("text-align", "center"), k.css("text-indent", "0"), k.css("font-size", o), jQuery(".mean-nav ul:first").slideDown(), T = !0) : (jQuery(".mean-nav ul:first").slideUp(), T = !1), k.toggleClass("meanclose"), D(), jQuery(b).addClass("mean-remove") }), _ && jQuery(".mean-nav ul > li > a:first-child").on("click", function() { jQuery(".mean-nav ul:first").slideUp(), T = !1, jQuery(k).toggleClass("meanclose").html(r) })
                        } else E()
                    };
                w || jQuery(window).resize(function() { n = window.innerWidth || document.documentElement.clientWidth, E(), u >= n ? (I(), x()) : E() }), jQuery(window).resize(function() { n = window.innerWidth || document.documentElement.clientWidth, w ? (x(), u >= n ? !1 === S && I() : E()) : (E(), u >= n && (I(), x())) }), I()
            })
        }
    }(jQuery),
    function(t) {
        function e(n) { if (i[n]) return i[n].exports; var s = i[n] = { i: n, l: !1, exports: {} }; return t[n].call(s.exports, s, s.exports, e), s.l = !0, s.exports }
        var i = {};
        e.m = t, e.c = i, e.d = function(t, i, n) { e.o(t, i) || Object.defineProperty(t, i, { configurable: !1, enumerable: !0, get: n }) }, e.r = function(t) { Object.defineProperty(t, "__esModule", { value: !0 }) }, e.n = function(t) { var i = t && t.__esModule ? function() { return t.default } : function() { return t }; return e.d(i, "a", i), i }, e.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "", e(e.s = 24)
    }([function(t, e, i) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
            s = i(16),
            o = "object" == ("undefined" == typeof self ? "undefined" : n(self)) && self && self.Object === Object && self,
            r = s || o || Function("return this")();
        t.exports = r
    }, function(t, e, i) {
        "use strict";
        var n = i(0).Symbol;
        t.exports = n
    }, function(t, e, i) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t };
        t.exports = function(t) { var e = void 0 === t ? "undefined" : n(t); return null != t && ("object" == e || "function" == e) }
    }, function(t, e, i) {
        "use strict";
        var n = i(2),
            s = i(18),
            o = /^\s+|\s+$/g,
            r = /^[-+]0x[0-9a-f]+$/i,
            a = /^0b[01]+$/i,
            l = /^0o[0-7]+$/i,
            c = parseInt;
        t.exports = function(t) {
            if ("number" == typeof t) return t;
            if (s(t)) return NaN;
            if (n(t)) {
                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = n(e) ? e + "" : e
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = t.replace(o, "");
            var i = a.test(t);
            return i || l.test(t) ? c(t.slice(2), i ? 2 : 8) : r.test(t) ? NaN : +t
        }
    }, function(t, e, i) {
        "use strict";
        var n = { init: function(t, e) { $(".core-content").addClass("core-side-icon"), t.addClass("nav-side-icon"), e.toggleHoverSidebar && ($(".core-nav").stop().on("mouseenter", function() { $(".core-content").addClass("open-side-icon") }), $(".core-nav").stop().on("mouseleave", function() { $(".core-content").removeClass("open-side-icon") })) } };
        t.exports = n
    }, function(t, e, i) {
        "use strict";
        var n = {
            init: function(t, e) {
                var i = this;
                $(".core-content").addClass("core-nav-section"), this.setPosition(), $(window).on("resize", function() { i.setPosition() })
            },
            setPosition: function() {
                var t = $(".core-nav-list"),
                    e = t.outerHeight() / 2;
                $(window).width() > 920 ? (t.css("margin-top", -1 * e), t.css("top", .5 * $(window).height())) : (t.css("margin-top", 0), t.css("top", 0))
            }
        };
        t.exports = n
    }, function(t, e, i) {
        "use strict";
        var n = {
            init: function(t, e) {
                var i = this;
                $(".core-content").addClass("core-sidebar-toggle"), t.addClass("sidebar-toggle"), this.layout(e), $(window).on("resize", function() { i.layout(e) }), e.menuFullWidth && $(".wrap-core-nav-list").addClass("full-width")
            },
            layout: function(t) {
                var e = $(window).width(),
                    i = $(".core-nav-toggle"),
                    n = i.height() / 2;
                if (e > 920) {
                    if (i.css("margin-top", "-" + n + "px"), t.menuFullWidth) {
                        var s = $(".core-nav-list > li").length,
                            o = (e - $(".sidebar-toggle").width()) / s;
                        $(".core-nav-list > li").css("width", o - .5 + "px")
                    }
                } else i.css("margin-top", ""), $(".core-nav-list > li").css("width", "")
            }
        };
        t.exports = n
    }, function(t, e, i) {
        "use strict";
        var n = { init: function(t, e) { $(".core-content").addClass("core-sidebar"), t.addClass("nav-sidebar") } };
        t.exports = n
    }, function(t, e, i) {
        "use strict";
        var n = {
            init: function(t, e) {
                e.container ? t.wrapInner("<div class='nav-container'></div>") : t.wrapInner("<div class='full-container'></div>"), $(".core-nav").addClass("fullscreen"), $(".wrap-core-nav-list .menu").wrap("<div class='nav-container'></div>");
                var i = $(".core-nav-toggle").html();
                $(".wrap-core-nav-list > .nav-container").prepend('<button class="toggle-bar core-nav-toggle">' + i + "</button>"), $(".core-nav-toggle").on("click", function(e) { e.preventDefault(), t.toggleClass("open-fullscreen"), $(".core-responsive-slide").length && $(".core-responsive-slide").toggleClass("open") })
            }
        };
        t.exports = n
    }, function(t, e, i) {
        "use strict";
        var n = {
            init: function(t, e) { e.container ? t.wrapInner("<div class='nav-container'></div>") : t.wrapInner("<div class='full-container'></div>"), $(".core-nav-list").addClass("split-list"), this.devidedMenu(e) },
            devidedMenu: function(t) {
                var e = $(".split-list");
                e.each(function() {
                    for (var t = new Array, e = $(".split-list > li"), i = Math.floor(e.length / 2), n = e.length - 2 * i, s = 0; s < 2; s++) t[s] = s < n ? i + 1 : i;
                    for (s = 0; s < 2; s++) {
                        $(".wrap-core-nav-list").append($("<ul></ul>").addClass("core-nav-list"));
                        for (var o = 0; o < t[s]; o++) {
                            for (var r = 0, a = 0; a < s; a++) r += t[a];
                            $(".wrap-core-nav-list").find(".core-nav-list").last().append(e[o + r])
                        }
                    }
                }), e.remove(), $(".core-nav-list").addClass("menu"), $(".core-nav-list").eq(0).addClass("left"), $(".core-nav-list").eq(0).wrap('<div class="col-menu left"></div>'), $(".core-nav-list").eq(1).addClass("right"), $(".core-nav-list").eq(1).wrap('<div class="col-menu right"></div>'), $(".core-nav").addClass("brand-center")
            }
        };
        t.exports = n
    }, function(t, e, i) {
        "use strict";
        var n = i(0);
        t.exports = function() { return n.Date.now() }
    }, function(t, e, i) {
        "use strict";
        var n = i(2),
            s = i(10),
            o = i(3),
            r = Math.max,
            a = Math.min;
        t.exports = function(t, e, i) {
            function l(e) {
                var i = p,
                    n = f;
                return p = f = void 0, y = e, g = t.apply(n, i)
            }

            function c(t) { var i = t - _; return void 0 === _ || i >= e || i < 0 || w && t - y >= m }

            function u() {
                var t = s();
                if (c(t)) return h(t);
                v = setTimeout(u, function(t) { var i = e - (t - _); return w ? a(i, m - (t - y)) : i }(t))
            }

            function h(t) { return v = void 0, C && p ? l(t) : (p = f = void 0, g) }

            function d() {
                var t = s(),
                    i = c(t);
                if (p = arguments, f = this, _ = t, i) { if (void 0 === v) return function(t) { return y = t, v = setTimeout(u, e), b ? l(t) : g }(_); if (w) return v = setTimeout(u, e), l(_) }
                return void 0 === v && (v = setTimeout(u, e)), g
            }
            var p, f, m, g, v, _, y = 0,
                b = !1,
                w = !1,
                C = !0;
            if ("function" != typeof t) throw new TypeError("Expected a function");
            return e = o(e) || 0, n(i) && (b = !!i.leading, m = (w = "maxWait" in i) ? r(o(i.maxWait) || 0, e) : m, C = "trailing" in i ? !!i.trailing : C), d.cancel = function() { void 0 !== v && clearTimeout(v), y = 0, p = _ = f = v = void 0 }, d.flush = function() { return void 0 === v ? g : h(s()) }, d
        }
    }, function(t, e, i) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t };
        t.exports = function(t) { return null != t && "object" == (void 0 === t ? "undefined" : n(t)) }
    }, function(t, e, i) {
        "use strict";
        var n = Object.prototype.toString;
        t.exports = function(t) { return n.call(t) }
    }, function(t, e, i) {
        "use strict";
        var n = i(1),
            s = Object.prototype,
            o = s.hasOwnProperty,
            r = s.toString,
            a = n ? n.toStringTag : void 0;
        t.exports = function(t) {
            var e = o.call(t, a),
                i = t[a];
            try { t[a] = void 0; var n = !0 } catch (t) {}
            var s = r.call(t);
            return n && (e ? t[a] = i : delete t[a]), s
        }
    }, function(t, e, i) {
        "use strict";
        var n, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t };
        n = function() { return this }();
        try { n = n || Function("return this")() || (0, eval)("this") } catch (t) { "object" === ("undefined" == typeof window ? "undefined" : s(window)) && (n = window) }
        t.exports = n
    }, function(t, e, i) {
        "use strict";
        (function(e) {
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
                n = "object" == (void 0 === e ? "undefined" : i(e)) && e && e.Object === Object && e;
            t.exports = n
        }).call(this, i(15))
    }, function(t, e, i) {
        "use strict";
        var n = i(1),
            s = i(14),
            o = i(13),
            r = n ? n.toStringTag : void 0;
        t.exports = function(t) { return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : r && r in Object(t) ? s(t) : o(t) }
    }, function(t, e, i) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
            s = i(17),
            o = i(12);
        t.exports = function(t) { return "symbol" == (void 0 === t ? "undefined" : n(t)) || o(t) && "[object Symbol]" == s(t) }
    }, function(t, e, i) {
        "use strict";
        var n = i(3);
        t.exports = function(t) { return t ? (t = n(t)) === 1 / 0 || t === -1 / 0 ? 1.7976931348623157e308 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0 }
    }, function(t, e, i) {
        "use strict";
        var n = i(19);
        t.exports = function(t) {
            var e = n(t),
                i = e % 1;
            return e == e ? i ? e - i : e : 0
        }
    }, function(t, e, i) {
        "use strict";
        var n = i(20);
        t.exports = function(t, e) {
            var i;
            if ("function" != typeof e) throw new TypeError("Expected a function");
            return t = n(t),
                function() { return --t > 0 && (i = e.apply(this, arguments)), t <= 1 && (e = void 0), i }
        }
    }, function(t, e, i) {
        "use strict";
        var n = i(21);
        t.exports = function(t) { return n(2, t) }
    }, function(t, e, i) {
        "use strict";

        function n(t) { return t && t.__esModule ? t : { default: t } }
        var s = n(i(22)),
            o = n(i(11)),
            r = {
                init: function(t, e) {
                    var i = this;
                    if (t.addClass("core-nav"), $(".core-nav").removeAttr("hidden"), $(".core-content").length || $("body").wrapInner('<div class="core-content"></div>'), $(e.menu).addClass("core-nav-list"), $(e.toggleMenu).addClass("core-nav-toggle"), $(e.menu).wrap('<div class="wrap-core-nav-list"></div>'), $(".wrap-core-nav-list, .nav-header").addClass(e.menuPosition), "default" == e.layout) switch (e.menuPosition) {
                        case "bottom":
                            e.container ? ($(".wrap-core-nav-list").wrapInner("<div class='nav-container'></div>"),
                                $(e.header).wrapInner("<div class='nav-container'></div>")) : ($(".wrap-core-nav-list").wrapInner("<div class='full-container'></div>"), $(e.header).wrapInner("<div class='full-container'></div>"));
                            break;
                        case "bottom center":
                            e.container ? ($(".wrap-core-nav-list").wrapInner("<div class='nav-container center'></div>"), $(e.header).wrapInner("<div class='nav-container center'></div>")) : ($(".wrap-core-nav-list").wrapInner("<div class='full-container center'></div>"), $(e.header).wrapInner("<div class='full-container center'></div>"));
                            break;
                        case "bottom right":
                            e.container ? ($(".wrap-core-nav-list").wrapInner("<div class='nav-container right'></div>"), $(e.header).wrapInner("<div class='nav-container'></div>")) : ($(".wrap-core-nav-list").wrapInner("<div class='full-container right'></div>"), $(e.header).wrapInner("<div class='full-container'></div>"));
                            break;
                        default:
                            e.container ? t.wrapInner("<div class='nav-container'></div>") : t.wrapInner("<div class='full-container'></div>")
                    }
                    e.responsideSlide && $(".core-content").addClass("core-responsive-slide"), i.attributesIcon(e), i.toggleMenu(t), i.megaMenu(e, ".core-nav-list .megamenu"), i.dropddownMenu(e, ".core-nav-list .dropdown"), $(".dropdown-overlay").on("click", function(t) { t.preventDefault(), $(".core-nav .dropdown").removeClass("open"), $(".core-nav .megamenu").removeClass("open"), $(".dropdown-overlay").removeClass("open-dropdown"), $(".core-nav").removeClass("open-dropdown"), $(".core-nav").removeClass("open-responsive"), $(".core-responsive-slide").removeClass("open"), $.isFunction(e.onCloseDropdown) && e.onCloseDropdown(), $.isFunction(e.onCloseMegaMenu) && e.onCloseMegaMenu() }), $(window).on("resize", function() { $(".core-nav .dropdown").removeClass("open") }), this.setMode(e), this.scrollSpy(e), i.contentHeader(e), $.isFunction(e.onInit) && e.onInit(), $(window).on("resize", (0, o.default)(function() { i.contentHeader(e), i.attributesIcon(e), $.isFunction(e.onResize) && e.onResize() }, 1e3))
                },
                setMode: function(t) {
                    switch (t.mode) {
                        case "fixed":
                            $(".core-nav").addClass("nav-core-fixed");
                            break;
                        case "sticky":
                            $(".core-nav").addClass("nav-core-sticky"), $('<div class="stand-sticky"></div>').insertBefore(".core-nav"), $(".stand-sticky").css("height", $(".core-nav").height()), $(".stand-sticky").css("display", "none");
                            var e = $(".nav-core-sticky").offset().top;
                            $(window).on("resize", function() { $(".stand-sticky").css("height", $(".core-nav").height()) }), $(window).on("scroll", function() { $(window).scrollTop() > e ? ($(".nav-core-sticky").hasClass("on-scroll") || $.isFunction(t.onStartSticky) && t.onStartSticky(), $(".nav-core-sticky").addClass("on-scroll"), $(".stand-sticky").css("display", "block")) : ($(".nav-core-sticky").hasClass("on-scroll") && $.isFunction(t.onEndSticky) && t.onEndSticky(), $(".nav-core-sticky").removeClass("on-scroll"), $(".stand-sticky").css("display", "none")) })
                    }
                },
                topSearch: function(t) {
                    var e = $(".wrap-search-top"),
                        i = e.html();
                    e.length && (e.remove(), $(".core-nav").prepend('<div class="wrap-search-top">' + i + "</div>")), t.container ? $(".wrap-search-top").wrapInner("<div class='nav-container'></div>") : $(".wrap-search-top").wrapInner("<div class='full-container'></div>"), $(".toggle-search-top").on("click", function(t) { t.preventDefault(), $(".wrap-search-top").slideToggle() }), $(window).on("resize", function() {
                        (0, s.default)(function() { $(".toggle-search-top").on("click", function(t) { t.preventDefault(), $(".wrap-search-top").slideToggle() }) })()
                    })
                },
                contentHeader: function(t) {
                    var e = $(".content-header").html(),
                        i = $(window).width();
                    if ($(".content-header").length && "default" == t.layout) switch (t.menuPosition) {
                        case "bottom":
                            i > 992 ? t.container ? ($(".nav-header .nav-container").prepend("<div class='content-header'>" + e + "</div>"), $(".core-nav > .content-header").remove()) : ($(".nav-header .full-container").prepend("<div class='content-header'>" + e + "</div>"), $(".core-nav > .content-header").remove()) : ($(".content-header").remove(), $(".core-nav").prepend("<div class='content-header'>" + e + "</div>"))
                    }
                },
                fullScreenSearch: function() {
                    $(".wrap-search-fullscreen").wrapInner("<div class='nav-container'></div>"), $(".toggle-search-fullscreen").on("click", function(t) { t.preventDefault(), $(".wrap-search-fullscreen").addClass("open") }), $(window).on("resize", function() {
                        (0, s.default)(function() { $(".toggle-search-fullscreen").on("click", function(t) { t.preventDefault(), $(".wrap-search-fullscreen").addClass("open") }) })()
                    }), $(".close-search").on("click", function(t) { t.preventDefault(), $(".wrap-search-fullscreen").removeClass("open") })
                },
                toggleMenu: function(t) { $(".core-nav-toggle").on("click", function(e) { e.preventDefault(), t.toggleClass("open-responsive"), $(".core-responsive-slide").length && $(".core-responsive-slide").toggleClass("open"), $(".open-responsive").length ? ($(".dropdown-overlay").addClass("open-dropdown"), $(".core-nav").addClass("open-dropdown"), $(".core-nav .attributes .megamenu").removeClass("open"), $(".core-nav .attributes .dropdown").removeClass("open")) : ($(".dropdown-overlay").removeClass("open-dropdown"), $(".core-nav").removeClass("open-dropdown")), $(".wrap-search-top").slideUp() }) },
                megaMenu: function(t, e) {
                    $(".dropdown-overlay").length || $(".core-nav").after('<div class="dropdown-overlay"></div>'), $(e).each(function() {
                        var e = $(this),
                            i = $(this).find("a").eq(0),
                            n = $(this).data("width");
                        switch (void 0 != n && ($(this).css("position", "relative"), $(this).find(".megamenu-content").eq(0).css("width", n)), e.removeClass("open"), i.on("click", function(i) { i.preventDefault(), $(window).width() < 920 && (e.hasClass("open") ? (t.animated ? r.animateCss(e.find(".megamenu-content").eq(0), t, t.animatedOut, !1, function() { setTimeout(function() { e.removeClass("open") }, 500) }) : e.removeClass("open"), $.isFunction(t.onCloseMegaMenu) && t.onCloseMegaMenu()) : ($(".megamenu").removeClass("open"), t.animated ? (e.addClass("open"), r.animateCss(e.find(".megamenu-content").eq(0), t, t.animatedIn, !0)) : e.addClass("open"), $.isFunction(t.onOpenMegaMenu) && t.onOpenMegaMenu())), r.overlayDropdown() }), t.dropdownEvent) {
                            case "hover":
                                i.on("mouseenter", function(i) { $(window).width() > 920 && (t.animated ? (e.addClass("open"), r.animateCss(e.find(".megamenu-content").eq(0), t, t.animatedIn, !0)) : e.addClass("open")), r.overlayDropdown(), $.isFunction(t.onOpenMegaMenu) && t.onOpenMegaMenu() }), e.stop().on("mouseleave", function() { $(window).width() > 920 && (t.animated ? r.animateCss(e.find(".megamenu-content").eq(0), t, t.animatedOut, !1, function() { setTimeout(function() { e.removeClass("open") }, 500) }) : e.removeClass("open")), r.overlayDropdown(), $.isFunction(t.onCloseMegaMenu) && t.onCloseMegaMenu() });
                                break;
                            case "accordion":
                            case "click":
                                i.on("click", function(i) { i.preventDefault(), $(window).width() > 920 && (e.hasClass("open") ? (t.animated ? r.animateCss(e.find(".megamenu-content").eq(0), t, t.animatedOut, !1, function() { setTimeout(function() { e.removeClass("open") }, 500) }) : e.removeClass("open"), $.isFunction(t.onCloseMegaMenu) && t.onCloseMegaMenu()) : (e.closest("li").closest("ul").find(".open").removeClass("open"), t.animated ? (e.addClass("open"), r.animateCss(e.find(".megamenu-content").eq(0), t, t.animatedIn, !0)) : e.addClass("open"), $.isFunction(t.onOpenMegaMenu) && t.onOpenMegaMenu())), r.overlayDropdown() })
                        }
                    })
                },
                dropddownMenu: function(t, e) {
                    $(".dropdown-overlay").length || $(".core-nav").after('<div class="dropdown-overlay"></div>'), $(e).each(function() {
                        var e = $(this),
                            i = $(this).find("a").eq(0);
                        switch (e.removeClass("open"), i.on("click", function(i) { i.preventDefault(), $(window).width() < 920 && (e.hasClass("open") ? (t.animated ? r.animateCss(e.find(".dropdown-menu").eq(0), t, t.animatedOut, !1, function() { setTimeout(function() { e.removeClass("open") }, 500) }) : e.removeClass("open"), $.isFunction(t.onCloseDropdown) && t.onCloseDropdown()) : (t.animated ? (e.addClass("open"), r.animateCss(e.find(".dropdown-menu").eq(0), t, t.animatedIn, !0)) : e.addClass("open"), $.isFunction(t.onOpenDropdown) && t.onOpenDropdown())), r.overlayDropdown() }), t.dropdownEvent) {
                            case "hover":
                                i.on("mouseenter", function(i) { $(window).width() > 920 && (t.animated ? (e.addClass("open"), r.animateCss(e.find(".dropdown-menu").eq(0), t, t.animatedIn, !0)) : e.addClass("open"), $.isFunction(t.onOpenDropdown) && t.onOpenDropdown()), r.overlayDropdown() }), e.stop().on("mouseleave", function() { $(window).width() > 920 && (t.animated ? r.animateCss(e.find(".dropdown-menu").eq(0), t, t.animatedOut, !1, function() { setTimeout(function() { e.removeClass("open") }, 500) }) : e.removeClass("open"), $.isFunction(t.onCloseDropdown) && t.onCloseDropdown()), r.overlayDropdown() });
                                break;
                            case "click":
                                i.on("click", function(i) { i.preventDefault(), $(window).width() > 920 && (e.hasClass("open") ? (t.animated ? r.animateCss(e.find(".dropdown-menu").eq(0), t, t.animatedOut, !1, function() { setTimeout(function() { e.removeClass("open") }, 500) }) : e.removeClass("open"), $.isFunction(t.onCloseDropdown) && t.onCloseDropdown()) : (e.closest("li").closest("ul").find(".open").removeClass("open"), t.animated ? (e.addClass("open"), r.animateCss(e.find(".dropdown-menu").eq(0), t, t.animatedIn, !0)) : e.addClass("open"), $.isFunction(t.onOpenDropdown) && t.onOpenDropdown())), r.overlayDropdown() });
                                break;
                            case "accordion":
                                $(".wrap-core-nav-list").addClass("dropdown-accordion"), i.on("click", function(i) { i.preventDefault(), $(window).width() > 920 && (e.hasClass("open") ? (t.animated ? r.animateCss(e.find(".dropdown-menu").eq(0), t, t.animatedOut, !1, function() { setTimeout(function() { e.removeClass("open") }, 500) }) : e.removeClass("open"), $.isFunction(t.onCloseDropdown) && t.onCloseDropdown()) : (e.closest("li").closest("ul").find(".open").removeClass("open"), t.animated ? (e.addClass("open"), r.animateCss(e.find(".dropdown-menu").eq(0), t, t.animatedIn, !0)) : e.addClass("open"), $.isFunction(t.onOpenDropdown) && t.onOpenDropdown())), r.overlayDropdown() })
                        }
                    })
                },
                overlayDropdown: function() {
                    var t = $(".dropdown").hasClass("open"),
                        e = $(".megamenu").hasClass("open");
                    t || e ? ($(".dropdown-overlay").addClass("open-dropdown"), $(".core-nav").addClass("open-dropdown")) : ($(".dropdown-overlay").removeClass("open-dropdown"), $(".core-nav").removeClass("open-dropdown"))
                },
                attributesIcon: function(t) {
                    var e = $(window).width(),
                        i = $(".core-nav .attributes"),
                        n = i.length,
                        s = i.html();
                    if (n) {
                        switch (t.menuPosition) {
                            case "bottom center":
                            case "bottom right":
                            case "bottom":
                                t.container ? e > 992 && ($(".core-nav .nav-container").prepend('<ul class="attributes">' + s + "</ul>"), $(".nav-header .attributes").remove()) : e > 992 && ($(".core-nav .full-container").prepend('<ul class="attributes">' + s + "</ul>"), $(".nav-header .attributes").remove());
                                break;
                            default:
                                t.container, e > 992 && ($(".core-nav .wrap-core-nav-list").prepend('<ul class="attributes">' + s + "</ul>"), $(".nav-header .attributes").remove())
                        }
                        "sidebar" == t.layout && e > 992 && $(".core-nav").prepend('<ul class="attributes">' + s + "</ul>"), e < 992 && ($(".nav-header").prepend('<ul class="attributes">' + s + "</ul>"), $(".wrap-core-nav-list .attributes").remove(), $(".core-nav .attributes").find(".dropdown").each(function() {
                            var t = $(this).width(),
                                e = -1 * $(".dropdown-menu", this).width();
                            $(".dropdown-menu", this).css("marginLeft", e + t)
                        }), $(".core-nav .attributes").find(".megamenu").each(function() {
                            var t = $(this).width(),
                                e = -1 * $(".megamenu-content", this).width();
                            $(".megamenu-content", this).css("marginLeft", e + t)
                        })), i.remove(), this.megaMenu(t, ".attributes .megamenu"), this.dropddownMenu(t, ".attributes .dropdown"), $(".toggle-side-menu").on("click", function(t) { t.preventDefault(), $(".core-content").toggleClass("open-side-menu") }), $(window).on("resize", function() { $(".core-content").removeClass("open-side-menu") }), this.topSearch(t), this.fullScreenSearch()
                    }
                },
                scrollSpy: function(t) {
                    $(".scrollspy").each(function() {
                        var e = this,
                            i = $("a", this).attr("href");
                        $(i).length && $(window).on("scroll", function() {
                            var n = void 0;
                            n = "section" == t.layout && $(window).width() > 920 ? $(i).offset().top : $(i).offset().top - parseInt($(i).css("padding-top")), $(window).scrollTop() > n - 1 || $(window).scrollTop() > n + 1 ? ($(".scrollspy").removeClass("active"), $(e).addClass("active")) : $(e).removeClass("active")
                        }), $("a", this).on("click", function(e) {
                            e.preventDefault();
                            var n = $("html, body"),
                                s = void 0;
                            s = "section" == t.layout && $(window).width() > 920 ? $(i).offset().top + 1 : $(i).offset().top - parseInt($(i).css("padding-top")) / 2, n.stop().animate({ scrollTop: s }, 500)
                        })
                    })
                },
                animateCss: function(t, e, i, n, s) { t.removeClass("animated"), n ? t.removeClass(e.animatedOut) : t.removeClass(e.animatedIn), t.addClass("animated " + i), "function" == typeof s && s() }
            };
        t.exports = r
    }, function(t, e, i) {
        "use strict";

        function n(t) { return t && t.__esModule ? t : { default: t } }
        var s, o = n(i(23)),
            r = n(i(9)),
            a = n(i(8)),
            l = n(i(7)),
            c = n(i(6)),
            u = n(i(5)),
            h = n(i(4));
        (s = jQuery).fn.coreNavigation = function(t) {
            var e = s.extend({ layout: "default", menu: ".menu", menuFullWidth: !1, header: ".nav-header", menuPosition: "left", container: !0, toggleMenu: ".toggle-bar", toggleHoverSidebar: !1, responsideSlide: !1, dropdownEvent: "hover", mode: "default", animated: !1, animatedIn: "bounceIn", animatedOut: "bounceOut", onInit: null, onResize: null, onOpenDropdown: null, onCloseDropdown: null, onOpenMegaMenu: null, onCloseMegaMenu: null, onStartSticky: null, onEndSticky: null, scrollspyActiveOn: null }, t);
            switch (o.default.init(this, e), e.layout) {
                case "brand-center":
                    r.default.init(this, e);
                    break;
                case "fullscreen":
                    a.default.init(this, e);
                    break;
                case "sidebar":
                    l.default.init(this, e);
                    break;
                case "sidebar-toggle":
                    c.default.init(this, e);
                    break;
                case "section":
                    u.default.init(this, e);
                    break;
                case "side-icon":
                    h.default.init(this, e)
            }
        }
    }]), $(document).ready(function() {
        $("#price-range-submit").hide(), $("#min_price,#max_price").on("change", function() {
            $("#price-range-submit").show();
            var t = parseInt($("#min_price").val()),
                e = parseInt($("#max_price").val());
            t > e && $("#max_price").val(t), $("#slider-range").slider({ values: [t, e] })
        }), $("#min_price,#max_price").on("paste keyup", function() {
            $("#price-range-submit").show();
            var t = parseInt($("#min_price").val()),
                e = parseInt($("#max_price").val());
            t == e && (e = t + 100, $("#min_price").val(t), $("#max_price").val(e)), $("#slider-range").slider({ values: [t, e] })
        }), $("#slider-range,#price-range-submit").click(function() {
            var t = $("#min_price").val(),
                e = $("#max_price").val();
            $("#searchResults").text("Here List of products will be shown which are cost between " + t + " and " + e + ".")
        })
    }),
    function(t) { "function" == typeof define && define.amd ? define(["jquery"], function(e) { return t(e, window, document) }) : "object" == typeof exports ? module.exports = function(e, i) { return e || (e = window), i || (i = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), t(i, e, e.document) } : t(jQuery, window, document) }(function(t, e, i, n) {
        function s(e) {
            var i, n, o = {};
            t.each(e, function(t) {
                (i = t.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(i[1] + " ") && (n = t.replace(i[0], i[2].toLowerCase()), o[n] = t, "o" === i[1] && s(e[t]))
            }), e._hungarianMap = o
        }

        function o(e, i, r) {
            e._hungarianMap || s(e);
            var a;
            t.each(i, function(s) {
                (a = e._hungarianMap[s]) === n || !r && i[a] !== n || ("o" === a.charAt(0) ? (i[a] || (i[a] = {}), t.extend(!0, i[a], i[s]), o(e[a], i[a], r)) : i[a] = i[s])
            })
        }

        function r(t) {
            var e = Yt.defaults.oLanguage,
                i = e.sDecimal;
            if (i && Ft(i), t) { var n = t.sZeroRecords;!t.sEmptyTable && n && "No data available in table" === e.sEmptyTable && At(t, t, "sZeroRecords", "sEmptyTable"), !t.sLoadingRecords && n && "Loading..." === e.sLoadingRecords && At(t, t, "sZeroRecords", "sLoadingRecords"), t.sInfoThousands && (t.sThousands = t.sInfoThousands), (t = t.sDecimal) && i !== t && Ft(t) }
        }

        function a(t) {
            if (ce(t, "ordering", "bSort"), ce(t, "orderMulti", "bSortMulti"), ce(t, "orderClasses", "bSortClasses"), ce(t, "orderCellsTop", "bSortCellsTop"), ce(t, "order", "aaSorting"), ce(t, "orderFixed", "aaSortingFixed"), ce(t, "paging", "bPaginate"), ce(t, "pagingType", "sPaginationType"), ce(t, "pageLength", "iDisplayLength"), ce(t, "searching", "bFilter"), "boolean" == typeof t.sScrollX && (t.sScrollX = t.sScrollX ? "100%" : ""), "boolean" == typeof t.scrollX && (t.scrollX = t.scrollX ? "100%" : ""), t = t.aoSearchCols)
                for (var e = 0, i = t.length; e < i; e++) t[e] && o(Yt.models.oSearch, t[e])
        }

        function l(e) { ce(e, "orderable", "bSortable"), ce(e, "orderData", "aDataSort"), ce(e, "orderSequence", "asSorting"), ce(e, "orderDataType", "sortDataType"); var i = e.aDataSort; "number" == typeof i && !t.isArray(i) && (e.aDataSort = [i]) }

        function c(i) {
            if (!Yt.__browser) {
                var n = {};
                Yt.__browser = n;
                var s = t("<div/>").css({ position: "fixed", top: 0, left: -1 * t(e).scrollLeft(), height: 1, width: 1, overflow: "hidden" }).append(t("<div/>").css({ position: "absolute", top: 1, left: 1, width: 100, overflow: "scroll" }).append(t("<div/>").css({ width: "100%", height: 10 }))).appendTo("body"),
                    o = s.children(),
                    r = o.children();
                n.barWidth = o[0].offsetWidth - o[0].clientWidth, n.bScrollOversize = 100 === r[0].offsetWidth && 100 !== o[0].clientWidth, n.bScrollbarLeft = 1 !== Math.round(r.offset().left), n.bBounding = !!s[0].getBoundingClientRect().width, s.remove()
            }
            t.extend(i.oBrowser, Yt.__browser), i.oScroll.iBarWidth = Yt.__browser.barWidth
        }

        function u(t, e, i, s, o, r) { var a, l = !1; for (i !== n && (a = i, l = !0); s !== o;) t.hasOwnProperty(s) && (a = l ? e(a, t[s], s, t) : t[s], l = !0, s += r); return a }

        function h(e, n) {
            var s = Yt.defaults.column,
                o = e.aoColumns.length,
                s = t.extend({}, Yt.models.oColumn, s, { nTh: n || i.createElement("th"), sTitle: s.sTitle ? s.sTitle : n ? n.innerHTML : "", aDataSort: s.aDataSort ? s.aDataSort : [o], mData: s.mData ? s.mData : o, idx: o });
            e.aoColumns.push(s), s = e.aoPreSearchCols, s[o] = t.extend({}, Yt.models.oSearch, s[o]), d(e, o, t(n).data())
        }

        function d(e, i, s) {
            var i = e.aoColumns[i],
                r = e.oClasses,
                a = t(i.nTh);
            if (!i.sWidthOrig) {
                i.sWidthOrig = a.attr("width") || null;
                var c = (a.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
                c && (i.sWidthOrig = c[1])
            }
            s !== n && null !== s && (l(s), o(Yt.defaults.column, s), s.mDataProp !== n && !s.mData && (s.mData = s.mDataProp), s.sType && (i._sManualType = s.sType), s.className && !s.sClass && (s.sClass = s.className), s.sClass && a.addClass(s.sClass), t.extend(i, s), At(i, s, "sWidth", "sWidthOrig"), s.iDataSort !== n && (i.aDataSort = [s.iDataSort]), At(i, s, "aDataSort"));
            var u = i.mData,
                h = S(u),
                d = i.mRender ? S(i.mRender) : null,
                s = function(t) { return "string" == typeof t && -1 !== t.indexOf("@") };
            i._bAttrSrc = t.isPlainObject(u) && (s(u.sort) || s(u.type) || s(u.filter)), i._setter = null, i.fnGetData = function(t, e, i) { var s = h(t, e, n, i); return d && e ? d(s, e, t, i) : s }, i.fnSetData = function(t, e, i) { return k(u)(t, e, i) }, "number" != typeof u && (e._rowReadObject = !0), e.oFeatures.bSort || (i.bSortable = !1, a.addClass(r.sSortableNone)), e = -1 !== t.inArray("asc", i.asSorting), s = -1 !== t.inArray("desc", i.asSorting), i.bSortable && (e || s) ? e && !s ? (i.sSortingClass = r.sSortableAsc, i.sSortingClassJUI = r.sSortJUIAscAllowed) : !e && s ? (i.sSortingClass = r.sSortableDesc, i.sSortingClassJUI = r.sSortJUIDescAllowed) : (i.sSortingClass = r.sSortable, i.sSortingClassJUI = r.sSortJUI) : (i.sSortingClass = r.sSortableNone, i.sSortingClassJUI = "")
        }

        function p(t) {
            if (!1 !== t.oFeatures.bAutoWidth) {
                var e = t.aoColumns;
                mt(t);
                for (var i = 0, n = e.length; i < n; i++) e[i].nTh.style.width = e[i].sWidth
            }
            e = t.oScroll, ("" !== e.sY || "" !== e.sX) && pt(t), Ht(t, null, "column-sizing", [t])
        }

        function f(t, e) { var i = v(t, "bVisible"); return "number" == typeof i[e] ? i[e] : null }

        function m(e, i) {
            var n = v(e, "bVisible"),
                n = t.inArray(i, n);
            return -1 !== n ? n : null
        }

        function g(e) { var i = 0; return t.each(e.aoColumns, function(e, n) { n.bVisible && "none" !== t(n.nTh).css("display") && i++ }), i }

        function v(e, i) { var n = []; return t.map(e.aoColumns, function(t, e) { t[i] && n.push(e) }), n }

        function _(t) {
            var e, i, s, o, r, a, l, c, u, h = t.aoColumns,
                d = t.aoData,
                p = Yt.ext.type.detect;
            for (e = 0, i = h.length; e < i; e++)
                if (l = h[e], u = [], !l.sType && l._sManualType) l.sType = l._sManualType;
                else if (!l.sType) {
                for (s = 0, o = p.length; s < o; s++) { for (r = 0, a = d.length; r < a && (u[r] === n && (u[r] = C(t, r, e, "type")), (c = p[s](u[r], t)) || s === p.length - 1) && "html" !== c; r++); if (c) { l.sType = c; break } }
                l.sType || (l.sType = "string")
            }
        }

        function y(e, i, s, o) {
            var r, a, l, c, u, d, p = e.aoColumns;
            if (i)
                for (r = i.length - 1; 0 <= r; r--) {
                    d = i[r];
                    var f = d.targets !== n ? d.targets : d.aTargets;
                    for (t.isArray(f) || (f = [f]), a = 0, l = f.length; a < l; a++)
                        if ("number" == typeof f[a] && 0 <= f[a]) {
                            for (; p.length <= f[a];) h(e);
                            o(f[a], d)
                        } else if ("number" == typeof f[a] && 0 > f[a]) o(p.length + f[a], d);
                    else if ("string" == typeof f[a])
                        for (c = 0, u = p.length; c < u; c++)("_all" == f[a] || t(p[c].nTh).hasClass(f[a])) && o(c, d)
                }
            if (s)
                for (r = 0, e = s.length; r < e; r++) o(r, s[r])
        }

        function b(e, i, s, o) {
            var r = e.aoData.length,
                a = t.extend(!0, {}, Yt.models.oRow, { src: s ? "dom" : "data", idx: r });
            a._aData = i, e.aoData.push(a);
            for (var l = e.aoColumns, c = 0, u = l.length; c < u; c++) l[c].sType = null;
            return e.aiDisplayMaster.push(r), i = e.rowIdFn(i), i !== n && (e.aIds[i] = a), (s || !e.oFeatures.bDeferRender) && O(e, r, s, o), r
        }

        function w(e, i) { var n; return i instanceof t || (i = t(i)), i.map(function(t, i) { return n = A(e, i), b(e, n.data, i, n.cells) }) }

        function C(t, e, i, s) {
            var o = t.iDraw,
                r = t.aoColumns[i],
                a = t.aoData[e]._aData,
                l = r.sDefaultContent,
                c = r.fnGetData(a, s, { settings: t, row: e, col: i });
            if (c === n) return t.iDrawError != o && null === l && (Pt(t, 0, "Requested unknown parameter " + ("function" == typeof r.mData ? "{function}" : "'" + r.mData + "'") + " for row " + e + ", column " + i, 4), t.iDrawError = o), l;
            if (c !== a && null !== c || null === l || s === n) { if ("function" == typeof c) return c.call(a) } else c = l;
            return null === c && "display" == s ? "" : c
        }

        function x(t, e, i, n) { t.aoColumns[i].fnSetData(t.aoData[e]._aData, n, { settings: t, row: e, col: i }) }

        function T(e) { return t.map(e.match(/(\\.|[^\.])+/g) || [""], function(t) { return t.replace(/\\\./g, ".") }) }

        function S(e) {
            if (t.isPlainObject(e)) {
                var i = {};
                return t.each(e, function(t, e) { e && (i[t] = S(e)) }),
                    function(t, e, s, o) { var r = i[e] || i._; return r !== n ? r(t, e, s, o) : t }
            }
            if (null === e) return function(t) { return t };
            if ("function" == typeof e) return function(t, i, n, s) { return e(t, i, n, s) };
            if ("string" == typeof e && (-1 !== e.indexOf(".") || -1 !== e.indexOf("[") || -1 !== e.indexOf("("))) {
                var s = function(e, i, o) {
                    var r, a;
                    if ("" !== o) {
                        a = T(o);
                        for (var l = 0, c = a.length; l < c; l++) {
                            if (o = a[l].match(ue), r = a[l].match(he), o) {
                                if (a[l] = a[l].replace(ue, ""), "" !== a[l] && (e = e[a[l]]), r = [], a.splice(0, l + 1), a = a.join("."), t.isArray(e))
                                    for (l = 0, c = e.length; l < c; l++) r.push(s(e[l], i, a));
                                e = o[0].substring(1, o[0].length - 1), e = "" === e ? r : r.join(e);
                                break
                            }
                            if (r) a[l] = a[l].replace(he, ""), e = e[a[l]]();
                            else {
                                if (null === e || e[a[l]] === n) return n;
                                e = e[a[l]]
                            }
                        }
                    }
                    return e
                };
                return function(t, i) { return s(t, i, e) }
            }
            return function(t) { return t[e] }
        }

        function k(e) {
            if (t.isPlainObject(e)) return k(e._);
            if (null === e) return function() {};
            if ("function" == typeof e) return function(t, i, n) { e(t, "set", i, n) };
            if ("string" == typeof e && (-1 !== e.indexOf(".") || -1 !== e.indexOf("[") || -1 !== e.indexOf("("))) {
                var i = function(e, s, o) {
                    var r, o = T(o);
                    r = o[o.length - 1];
                    for (var a, l, c = 0, u = o.length - 1; c < u; c++) {
                        if (a = o[c].match(ue), l = o[c].match(he), a) {
                            if (o[c] = o[c].replace(ue, ""), e[o[c]] = [], r = o.slice(), r.splice(0, c + 1), a = r.join("."), t.isArray(s))
                                for (l = 0, u = s.length; l < u; l++) r = {}, i(r, s[l], a), e[o[c]].push(r);
                            else e[o[c]] = s;
                            return
                        }
                        l && (o[c] = o[c].replace(he, ""), e = e[o[c]](s)), null !== e[o[c]] && e[o[c]] !== n || (e[o[c]] = {}), e = e[o[c]]
                    }
                    r.match(he) ? e[r.replace(he, "")](s) : e[r.replace(ue, "")] = s
                };
                return function(t, n) { return i(t, n, e) }
            }
            return function(t, i) { t[e] = i }
        }

        function D(t) { return se(t.aoData, "_aData") }

        function E(t) { t.aoData.length = 0, t.aiDisplayMaster.length = 0, t.aiDisplay.length = 0, t.aIds = {} }

        function I(t, e, i) { for (var s = -1, o = 0, r = t.length; o < r; o++) t[o] == e ? s = o : t[o] > e && t[o]--; - 1 != s && i === n && t.splice(s, 1) }

        function P(t, e, i, s) {
            var o, r = t.aoData[e],
                a = function(i, n) {
                    for (; i.childNodes.length;) i.removeChild(i.firstChild);
                    i.innerHTML = C(t, e, n, "display")
                };
            if ("dom" !== i && (i && "auto" !== i || "dom" !== r.src)) {
                var l = r.anCells;
                if (l)
                    if (s !== n) a(l[s], s);
                    else
                        for (i = 0, o = l.length; i < o; i++) a(l[i], i)
            } else r._aData = A(t, r, s, s === n ? n : r._aData).data;
            if (r._aSortData = null, r._aFilterData = null, a = t.aoColumns, s !== n) a[s].sType = null;
            else {
                for (i = 0, o = a.length; i < o; i++) a[i].sType = null;
                N(t, r)
            }
        }

        function A(e, i, s, o) {
            var r, a, l, c = [],
                u = i.firstChild,
                h = 0,
                d = e.aoColumns,
                p = e._rowReadObject,
                o = o !== n ? o : p ? {} : [],
                f = function(t, e) { if ("string" == typeof t) { var i = t.indexOf("@"); - 1 !== i && (i = t.substring(i + 1), k(t)(o, e.getAttribute(i))) } },
                m = function(e) { s !== n && s !== h || (a = d[h], l = t.trim(e.innerHTML), a && a._bAttrSrc ? (k(a.mData._)(o, l), f(a.mData.sort, e), f(a.mData.type, e), f(a.mData.filter, e)) : p ? (a._setter || (a._setter = k(a.mData)), a._setter(o, l)) : o[h] = l), h++ };
            if (u)
                for (; u;) r = u.nodeName.toUpperCase(), "TD" != r && "TH" != r || (m(u), c.push(u)), u = u.nextSibling;
            else
                for (c = i.anCells, u = 0, r = c.length; u < r; u++) m(c[u]);
            return (i = i.firstChild ? i : i.nTr) && (i = i.getAttribute("id")) && k(e.rowId)(o, i), { data: o, cells: c }
        }

        function O(e, n, s, o) {
            var r, a, l, c, u, h = e.aoData[n],
                d = h._aData,
                p = [];
            if (null === h.nTr) {
                for (r = s || i.createElement("tr"), h.nTr = r, h.anCells = p, r._DT_RowIndex = n, N(e, h), c = 0, u = e.aoColumns.length; c < u; c++) l = e.aoColumns[c], a = s ? o[c] : i.createElement(l.sCellType), a._DT_CellIndex = { row: n, column: c }, p.push(a), s && !l.mRender && l.mData === c || t.isPlainObject(l.mData) && l.mData._ === c + ".display" || (a.innerHTML = C(e, n, c, "display")), l.sClass && (a.className += " " + l.sClass), l.bVisible && !s ? r.appendChild(a) : !l.bVisible && s && a.parentNode.removeChild(a), l.fnCreatedCell && l.fnCreatedCell.call(e.oInstance, a, C(e, n, c), d, n, c);
                Ht(e, "aoRowCreatedCallback", null, [r, d, n, p])
            }
            h.nTr.setAttribute("role", "row")
        }

        function N(e, i) {
            var n = i.nTr,
                s = i._aData;
            if (n) {
                var o = e.rowIdFn(s);
                o && (n.id = o), s.DT_RowClass && (o = s.DT_RowClass.split(" "), i.__rowc = i.__rowc ? le(i.__rowc.concat(o)) : o, t(n).removeClass(i.__rowc.join(" ")).addClass(s.DT_RowClass)), s.DT_RowAttr && t(n).attr(s.DT_RowAttr), s.DT_RowData && t(n).data(s.DT_RowData)
            }
        }

        function M(e) {
            var i, n, s, o, r, a = e.nTHead,
                l = e.nTFoot,
                c = 0 === t("th, td", a).length,
                u = e.oClasses,
                h = e.aoColumns;
            for (c && (o = t("<tr/>").appendTo(a)), i = 0, n = h.length; i < n; i++) r = h[i], s = t(r.nTh).addClass(r.sClass), c && s.appendTo(o), e.oFeatures.bSort && (s.addClass(r.sSortingClass), !1 !== r.bSortable && (s.attr("tabindex", e.iTabIndex).attr("aria-controls", e.sTableId), Tt(e, r.nTh, i))), r.sTitle != s[0].innerHTML && s.html(r.sTitle), Lt(e, "header")(e, s, r, u);
            if (c && j(e.aoHeader, a), t(a).find(">tr").attr("role", "row"), t(a).find(">tr>th, >tr>td").addClass(u.sHeaderTH), t(l).find(">tr>th, >tr>td").addClass(u.sFooterTH), null !== l)
                for (e = e.aoFooter[0], i = 0, n = e.length; i < n; i++) r = h[i], r.nTf = e[i].cell, r.sClass && t(r.nTf).addClass(r.sClass)
        }

        function H(e, i, s) {
            var o, r, a, l, c = [],
                u = [],
                h = e.aoColumns.length;
            if (i) {
                for (s === n && (s = !1), o = 0, r = i.length; o < r; o++) {
                    for (c[o] = i[o].slice(), c[o].nTr = i[o].nTr, a = h - 1; 0 <= a; a--) !e.aoColumns[a].bVisible && !s && c[o].splice(a, 1);
                    u.push([])
                }
                for (o = 0, r = c.length; o < r; o++) {
                    if (e = c[o].nTr)
                        for (; a = e.firstChild;) e.removeChild(a);
                    for (a = 0, i = c[o].length; a < i; a++)
                        if (l = h = 1, u[o][a] === n) {
                            for (e.appendChild(c[o][a].cell), u[o][a] = 1; c[o + h] !== n && c[o][a].cell == c[o + h][a].cell;) u[o + h][a] = 1, h++;
                            for (; c[o][a + l] !== n && c[o][a].cell == c[o][a + l].cell;) {
                                for (s = 0; s < h; s++) u[o + s][a + l] = 1;
                                l++
                            }
                            t(c[o][a].cell).attr("rowspan", h).attr("colspan", l)
                        }
                }
            }
        }

        function $(e) {
            var i = Ht(e, "aoPreDrawCallback", "preDraw", [e]);
            if (-1 !== t.inArray(!1, i)) ht(e, !1);
            else {
                var i = [],
                    s = 0,
                    o = e.asStripeClasses,
                    r = o.length,
                    a = e.oLanguage,
                    l = e.iInitDisplayStart,
                    c = "ssp" == zt(e),
                    u = e.aiDisplay;
                e.bDrawing = !0, l !== n && -1 !== l && (e._iDisplayStart = c ? l : l >= e.fnRecordsDisplay() ? 0 : l, e.iInitDisplayStart = -1);
                var l = e._iDisplayStart,
                    h = e.fnDisplayEnd();
                if (e.bDeferLoading) e.bDeferLoading = !1, e.iDraw++, ht(e, !1);
                else if (c) { if (!e.bDestroying && !W(e)) return } else e.iDraw++;
                if (0 !== u.length)
                    for (a = c ? e.aoData.length : h, c = c ? 0 : l; c < a; c++) {
                        var d = u[c],
                            p = e.aoData[d];
                        null === p.nTr && O(e, d);
                        var f = p.nTr;
                        if (0 !== r) {
                            var m = o[s % r];
                            p._sRowStripe != m && (t(f).removeClass(p._sRowStripe).addClass(m), p._sRowStripe = m)
                        }
                        Ht(e, "aoRowCallback", null, [f, p._aData, s, c, d]), i.push(f), s++
                    } else s = a.sZeroRecords, 1 == e.iDraw && "ajax" == zt(e) ? s = a.sLoadingRecords : a.sEmptyTable && 0 === e.fnRecordsTotal() && (s = a.sEmptyTable), i[0] = t("<tr/>", { class: r ? o[0] : "" }).append(t("<td />", { valign: "top", colSpan: g(e), class: e.oClasses.sRowEmpty }).html(s))[0];
                Ht(e, "aoHeaderCallback", "header", [t(e.nTHead).children("tr")[0], D(e), l, h, u]), Ht(e, "aoFooterCallback", "footer", [t(e.nTFoot).children("tr")[0], D(e), l, h, u]), o = t(e.nTBody), o.children().detach(), o.append(t(i)), Ht(e, "aoDrawCallback", "draw", [e]), e.bSorted = !1, e.bFiltered = !1, e.bDrawing = !1
            }
        }

        function L(t, e) {
            var i = t.oFeatures,
                n = i.bFilter;
            i.bSort && wt(t), n ? V(t, t.oPreviousSearch) : t.aiDisplay = t.aiDisplayMaster.slice(), !0 !== e && (t._iDisplayStart = 0), t._drawHold = e, $(t), t._drawHold = !1
        }

        function z(e) {
            var i = e.oClasses,
                n = t(e.nTable),
                n = t("<div/>").insertBefore(n),
                s = e.oFeatures,
                o = t("<div/>", { id: e.sTableId + "_wrapper", class: i.sWrapper + (e.nTFoot ? "" : " " + i.sNoFooter) });
            e.nHolding = n[0], e.nTableWrapper = o[0], e.nTableReinsertBefore = e.nTable.nextSibling;
            for (var r, a, l, c, u, h, d = e.sDom.split(""), p = 0; p < d.length; p++) {
                if (r = null, "<" == (a = d[p])) {
                    if (l = t("<div/>")[0], "'" == (c = d[p + 1]) || '"' == c) { for (u = "", h = 2; d[p + h] != c;) u += d[p + h], h++; "H" == u ? u = i.sJUIHeader : "F" == u && (u = i.sJUIFooter), -1 != u.indexOf(".") ? (c = u.split("."), l.id = c[0].substr(1, c[0].length - 1), l.className = c[1]) : "#" == u.charAt(0) ? l.id = u.substr(1, u.length - 1) : l.className = u, p += h }
                    o.append(l), o = t(l)
                } else if (">" == a) o = o.parent();
                else if ("l" == a && s.bPaginate && s.bLengthChange) r = at(e);
                else if ("f" == a && s.bFilter) r = Y(e);
                else if ("r" == a && s.bProcessing) r = ut(e);
                else if ("t" == a) r = dt(e);
                else if ("i" == a && s.bInfo) r = et(e);
                else if ("p" == a && s.bPaginate) r = lt(e);
                else if (0 !== Yt.ext.feature.length)
                    for (l = Yt.ext.feature, h = 0, c = l.length; h < c; h++)
                        if (a == l[h].cFeature) { r = l[h].fnInit(e); break }
                r && (l = e.aanFeatures, l[a] || (l[a] = []), l[a].push(r), o.append(r))
            }
            n.replaceWith(o), e.nHolding = null
        }

        function j(e, i) {
            var n, s, o, r, a, l, c, u, h, d, p = t(i).children("tr");
            for (e.splice(0, e.length), o = 0, l = p.length; o < l; o++) e.push([]);
            for (o = 0, l = p.length; o < l; o++)
                for (n = p[o], s = n.firstChild; s;) {
                    if ("TD" == s.nodeName.toUpperCase() || "TH" == s.nodeName.toUpperCase()) {
                        for (u = 1 * s.getAttribute("colspan"), h = 1 * s.getAttribute("rowspan"), u = u && 0 !== u && 1 !== u ? u : 1, h = h && 0 !== h && 1 !== h ? h : 1, r = 0, a = e[o]; a[r];) r++;
                        for (c = r, d = 1 === u, a = 0; a < u; a++)
                            for (r = 0; r < h; r++) e[o + r][c + a] = { cell: s, unique: d }, e[o + r].nTr = n
                    }
                    s = s.nextSibling
                }
        }

        function F(t, e, i) {
            var n = [];
            i || (i = t.aoHeader, e && (i = [], j(i, e)));
            for (var e = 0, s = i.length; e < s; e++)
                for (var o = 0, r = i[e].length; o < r; o++) !i[e][o].unique || n[o] && t.bSortCellsTop || (n[o] = i[e][o].cell);
            return n
        }

        function R(e, i, n) {
            if (Ht(e, "aoServerParams", "serverParams", [i]), i && t.isArray(i)) {
                var s = {},
                    o = /(.*?)\[\]$/;
                t.each(i, function(t, e) {
                    var i = e.name.match(o);
                    i ? (i = i[0], s[i] || (s[i] = []), s[i].push(e.value)) : s[e.name] = e.value
                }), i = s
            }
            var r, a = e.ajax,
                l = e.oInstance,
                c = function(t) { Ht(e, null, "xhr", [e, t, e.jqXHR]), n(t) };
            if (t.isPlainObject(a) && a.data) {
                r = a.data;
                var u = "function" == typeof r ? r(i, e) : r,
                    i = "function" == typeof r && u ? u : t.extend(!0, i, u);
                delete a.data
            }
            u = {
                data: i,
                success: function(t) {
                    var i = t.error || t.sError;
                    i && Pt(e, 0, i), e.json = t, c(t)
                },
                dataType: "json",
                cache: !1,
                type: e.sServerMethod,
                error: function(i, n) { var s = Ht(e, null, "xhr", [e, null, e.jqXHR]); - 1 === t.inArray(!0, s) && ("parsererror" == n ? Pt(e, 0, "Invalid JSON response", 1) : 4 === i.readyState && Pt(e, 0, "Ajax error", 7)), ht(e, !1) }
            }, e.oAjaxData = i, Ht(e, null, "preXhr", [e, i]), e.fnServerData ? e.fnServerData.call(l, e.sAjaxSource, t.map(i, function(t, e) { return { name: e, value: t } }), c, e) : e.sAjaxSource || "string" == typeof a ? e.jqXHR = t.ajax(t.extend(u, { url: a || e.sAjaxSource })) : "function" == typeof a ? e.jqXHR = a.call(l, i, c, e) : (e.jqXHR = t.ajax(t.extend(u, a)), a.data = r)
        }

        function W(t) { return !t.bAjaxDataGet || (t.iDraw++, ht(t, !0), R(t, q(t), function(e) { B(t, e) }), !1) }

        function q(e) {
            var i, n, s, o, r = e.aoColumns,
                a = r.length,
                l = e.oFeatures,
                c = e.oPreviousSearch,
                u = e.aoPreSearchCols,
                h = [],
                d = bt(e);
            i = e._iDisplayStart, n = !1 !== l.bPaginate ? e._iDisplayLength : -1;
            var p = function(t, e) { h.push({ name: t, value: e }) };
            p("sEcho", e.iDraw), p("iColumns", a), p("sColumns", se(r, "sName").join(",")), p("iDisplayStart", i), p("iDisplayLength", n);
            var f = { draw: e.iDraw, columns: [], order: [], start: i, length: n, search: { value: c.sSearch, regex: c.bRegex } };
            for (i = 0; i < a; i++) s = r[i], o = u[i], n = "function" == typeof s.mData ? "function" : s.mData, f.columns.push({ data: n, name: s.sName, searchable: s.bSearchable, orderable: s.bSortable, search: { value: o.sSearch, regex: o.bRegex } }), p("mDataProp_" + i, n), l.bFilter && (p("sSearch_" + i, o.sSearch), p("bRegex_" + i, o.bRegex), p("bSearchable_" + i, s.bSearchable)), l.bSort && p("bSortable_" + i, s.bSortable);
            return l.bFilter && (p("sSearch", c.sSearch), p("bRegex", c.bRegex)), l.bSort && (t.each(d, function(t, e) { f.order.push({ column: e.col, dir: e.dir }), p("iSortCol_" + t, e.col), p("sSortDir_" + t, e.dir) }), p("iSortingCols", d.length)), r = Yt.ext.legacy.ajax, null === r ? e.sAjaxSource ? h : f : r ? h : f
        }

        function B(t, e) {
            var i = U(t, e),
                s = e.sEcho !== n ? e.sEcho : e.draw,
                o = e.iTotalRecords !== n ? e.iTotalRecords : e.recordsTotal,
                r = e.iTotalDisplayRecords !== n ? e.iTotalDisplayRecords : e.recordsFiltered;
            if (s) {
                if (1 * s < t.iDraw) return;
                t.iDraw = 1 * s
            }
            for (E(t), t._iRecordsTotal = parseInt(o, 10), t._iRecordsDisplay = parseInt(r, 10), s = 0, o = i.length; s < o; s++) b(t, i[s]);
            t.aiDisplay = t.aiDisplayMaster.slice(), t.bAjaxDataGet = !1, $(t), t._bInitComplete || ot(t, e), t.bAjaxDataGet = !0, ht(t, !1)
        }

        function U(e, i) { var s = t.isPlainObject(e.ajax) && e.ajax.dataSrc !== n ? e.ajax.dataSrc : e.sAjaxDataProp; return "data" === s ? i.aaData || i[s] : "" !== s ? S(s)(i) : i }

        function Y(e) {
            var n = e.oClasses,
                s = e.sTableId,
                o = e.oLanguage,
                r = e.oPreviousSearch,
                a = e.aanFeatures,
                l = '<input type="search" class="' + n.sFilterInput + '"/>',
                c = o.sSearch,
                c = c.match(/_INPUT_/) ? c.replace("_INPUT_", l) : c + l,
                n = t("<div/>", { id: a.f ? null : s + "_filter", class: n.sFilter }).append(t("<label/>").append(c)),
                a = function() {
                    var t = this.value ? this.value : "";
                    t != r.sSearch && (V(e, { sSearch: t, bRegex: r.bRegex, bSmart: r.bSmart, bCaseInsensitive: r.bCaseInsensitive }), e._iDisplayStart = 0, $(e))
                },
                l = null !== e.searchDelay ? e.searchDelay : "ssp" === zt(e) ? 400 : 0,
                u = t("input", n).val(r.sSearch).attr("placeholder", o.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", l ? ge(a, l) : a).on("keypress.DT", function(t) { if (13 == t.keyCode) return !1 }).attr("aria-controls", s);
            return t(e.nTable).on("search.dt.DT", function(t, n) { if (e === n) try { u[0] !== i.activeElement && u.val(r.sSearch) } catch (t) {} }), n[0]
        }

        function V(t, e, i) {
            var s = t.oPreviousSearch,
                o = t.aoPreSearchCols,
                r = function(t) { s.sSearch = t.sSearch, s.bRegex = t.bRegex, s.bSmart = t.bSmart, s.bCaseInsensitive = t.bCaseInsensitive };
            if (_(t), "ssp" != zt(t)) {
                for (Q(t, e.sSearch, i, e.bEscapeRegex !== n ? !e.bEscapeRegex : e.bRegex, e.bSmart, e.bCaseInsensitive), r(e), e = 0; e < o.length; e++) K(t, o[e].sSearch, e, o[e].bEscapeRegex !== n ? !o[e].bEscapeRegex : o[e].bRegex, o[e].bSmart, o[e].bCaseInsensitive);
                X(t)
            } else r(e);
            t.bFiltered = !0, Ht(t, null, "search", [t])
        }

        function X(e) {
            for (var i, n, s = Yt.ext.search, o = e.aiDisplay, r = 0, a = s.length; r < a; r++) {
                for (var l = [], c = 0, u = o.length; c < u; c++) n = o[c], i = e.aoData[n], s[r](e, i._aFilterData, n, i._aData, c) && l.push(n);
                o.length = 0, t.merge(o, l)
            }
        }

        function K(t, e, i, n, s, o) {
            if ("" !== e) {
                for (var r = [], a = t.aiDisplay, n = G(e, n, s, o), s = 0; s < a.length; s++) e = t.aoData[a[s]]._aFilterData[i], n.test(e) && r.push(a[s]);
                t.aiDisplay = r
            }
        }

        function Q(t, e, i, n, s, o) {
            var r, n = G(e, n, s, o),
                o = t.oPreviousSearch.sSearch,
                a = t.aiDisplayMaster,
                s = [];
            if (0 !== Yt.ext.search.length && (i = !0), r = J(t), 0 >= e.length) t.aiDisplay = a.slice();
            else {
                for ((r || i || o.length > e.length || 0 !== e.indexOf(o) || t.bSorted) && (t.aiDisplay = a.slice()), e = t.aiDisplay, i = 0; i < e.length; i++) n.test(t.aoData[e[i]]._sFilterRow) && s.push(e[i]);
                t.aiDisplay = s
            }
        }

        function G(e, i, n, s) {
            return e = i ? e : de(e), n && (e = "^(?=.*?" + t.map(e.match(/"[^"]+"|[^ ]+/g) || [""], function(t) {
                if ('"' === t.charAt(0)) var e = t.match(/^"(.*)"$/),
                    t = e ? e[1] : t;
                return t.replace('"', "")
            }).join(")(?=.*?") + ").*$"), RegExp(e, s ? "i" : "")
        }

        function J(t) {
            var e, i, n, s, o, r, a, l, c = t.aoColumns,
                u = Yt.ext.type.search;
            for (e = !1, i = 0, s = t.aoData.length; i < s; i++)
                if (l = t.aoData[i], !l._aFilterData) {
                    for (r = [], n = 0, o = c.length; n < o; n++) e = c[n], e.bSearchable ? (a = C(t, i, n, "filter"), u[e.sType] && (a = u[e.sType](a)), null === a && (a = ""), "string" != typeof a && a.toString && (a = a.toString())) : a = "", a.indexOf && -1 !== a.indexOf("&") && (pe.innerHTML = a, a = fe ? pe.textContent : pe.innerText), a.replace && (a = a.replace(/[\r\n]/g, "")), r.push(a);
                    l._aFilterData = r, l._sFilterRow = r.join("  "), e = !0
                }
            return e
        }

        function Z(t) { return { search: t.sSearch, smart: t.bSmart, regex: t.bRegex, caseInsensitive: t.bCaseInsensitive } }

        function tt(t) { return { sSearch: t.search, bSmart: t.smart, bRegex: t.regex, bCaseInsensitive: t.caseInsensitive } }

        function et(e) {
            var i = e.sTableId,
                n = e.aanFeatures.i,
                s = t("<div/>", { class: e.oClasses.sInfo, id: n ? null : i + "_info" });
            return n || (e.aoDrawCallback.push({ fn: it, sName: "information" }), s.attr("role", "status").attr("aria-live", "polite"), t(e.nTable).attr("aria-describedby", i + "_info")), s[0]
        }

        function it(e) {
            var i = e.aanFeatures.i;
            if (0 !== i.length) {
                var n = e.oLanguage,
                    s = e._iDisplayStart + 1,
                    o = e.fnDisplayEnd(),
                    r = e.fnRecordsTotal(),
                    a = e.fnRecordsDisplay(),
                    l = a ? n.sInfo : n.sInfoEmpty;
                a !== r && (l += " " + n.sInfoFiltered), l += n.sInfoPostFix, l = nt(e, l), n = n.fnInfoCallback, null !== n && (l = n.call(e.oInstance, e, s, o, r, a, l)), t(i).html(l)
            }
        }

        function nt(t, e) {
            var i = t.fnFormatNumber,
                n = t._iDisplayStart + 1,
                s = t._iDisplayLength,
                o = t.fnRecordsDisplay(),
                r = -1 === s;
            return e.replace(/_START_/g, i.call(t, n)).replace(/_END_/g, i.call(t, t.fnDisplayEnd())).replace(/_MAX_/g, i.call(t, t.fnRecordsTotal())).replace(/_TOTAL_/g, i.call(t, o)).replace(/_PAGE_/g, i.call(t, r ? 1 : Math.ceil(n / s))).replace(/_PAGES_/g, i.call(t, r ? 1 : Math.ceil(o / s)))
        }

        function st(t) {
            var e, i, n, s = t.iInitDisplayStart,
                o = t.aoColumns;
            i = t.oFeatures;
            var r = t.bDeferLoading;
            if (t.bInitialised) {
                for (z(t), M(t), H(t, t.aoHeader), H(t, t.aoFooter), ht(t, !0), i.bAutoWidth && mt(t), e = 0, i = o.length; e < i; e++) n = o[e], n.sWidth && (n.nTh.style.width = yt(n.sWidth));
                Ht(t, null, "preInit", [t]), L(t), o = zt(t), ("ssp" != o || r) && ("ajax" == o ? R(t, [], function(i) {
                    var n = U(t, i);
                    for (e = 0; e < n.length; e++) b(t, n[e]);
                    t.iInitDisplayStart = s, L(t), ht(t, !1), ot(t, i)
                }, t) : (ht(t, !1), ot(t)))
            } else setTimeout(function() { st(t) }, 200)
        }

        function ot(t, e) { t._bInitComplete = !0, (e || t.oInit.aaData) && p(t), Ht(t, null, "plugin-init", [t, e]), Ht(t, "aoInitComplete", "init", [t, e]) }

        function rt(t, e) {
            var i = parseInt(e, 10);
            t._iDisplayLength = i, $t(t), Ht(t, null, "length", [t, i])
        }

        function at(e) { for (var i = e.oClasses, n = e.sTableId, s = e.aLengthMenu, o = t.isArray(s[0]), r = o ? s[0] : s, s = o ? s[1] : s, o = t("<select   />", { name: n + "_length", "aria-controls": n, class: i.sLengthSelect }), a = 0, l = r.length; a < l; a++) o[0][a] = new Option("number" == typeof s[a] ? e.fnFormatNumber(s[a]) : s[a], r[a]); var c = t("<div><label/></div>").addClass(i.sLength); return e.aanFeatures.l || (c[0].id = n + "_length"), c.children().append(e.oLanguage.sLengthMenu.replace("_MENU_", o[0].outerHTML)), t("select", c).val(e._iDisplayLength).on("change.DT", function() { rt(e, t(this).val()), $(e) }), t(e.nTable).on("length.dt.DT", function(i, n, s) { e === n && t("select", c).val(s) }), c[0] }

        function lt(e) {
            var i = e.sPaginationType,
                n = Yt.ext.pager[i],
                s = "function" == typeof n,
                o = function(t) { $(t) },
                i = t("<div/>").addClass(e.oClasses.sPaging + i)[0],
                r = e.aanFeatures;
            return s || n.fnInit(e, i, o), r.p || (i.id = e.sTableId + "_paginate", e.aoDrawCallback.push({
                fn: function(t) {
                    if (s) {
                        var e, i = t._iDisplayStart,
                            a = t._iDisplayLength,
                            l = t.fnRecordsDisplay(),
                            c = -1 === a,
                            i = c ? 0 : Math.ceil(i / a),
                            a = c ? 1 : Math.ceil(l / a),
                            l = n(i, a),
                            c = 0;
                        for (e = r.p.length; c < e; c++) Lt(t, "pageButton")(t, r.p[c], c, l, i, a)
                    } else n.fnUpdate(t, o)
                },
                sName: "pagination"
            })), i
        }

        function ct(t, e, i) {
            var n = t._iDisplayStart,
                s = t._iDisplayLength,
                o = t.fnRecordsDisplay();
            return 0 === o || -1 === s ? n = 0 : "number" == typeof e ? (n = e * s) > o && (n = 0) : "first" == e ? n = 0 : "previous" == e ? 0 > (n = 0 <= s ? n - s : 0) && (n = 0) : "next" == e ? n + s < o && (n += s) : "last" == e ? n = Math.floor((o - 1) / s) * s : Pt(t, 0, "Unknown paging action: " + e, 5), e = t._iDisplayStart !== n, t._iDisplayStart = n, e && (Ht(t, null, "page", [t]), i && $(t)), e
        }

        function ut(e) { return t("<div/>", { id: e.aanFeatures.r ? null : e.sTableId + "_processing", class: e.oClasses.sProcessing }).html(e.oLanguage.sProcessing).insertBefore(e.nTable)[0] }

        function ht(e, i) { e.oFeatures.bProcessing && t(e.aanFeatures.r).css("display", i ? "block" : "none"), Ht(e, null, "processing", [e, i]) }

        function dt(e) {
            var i = t(e.nTable);
            i.attr("role", "grid");
            var n = e.oScroll;
            if ("" === n.sX && "" === n.sY) return e.nTable;
            var s = n.sX,
                o = n.sY,
                r = e.oClasses,
                a = i.children("caption"),
                l = a.length ? a[0]._captionSide : null,
                c = t(i[0].cloneNode(!1)),
                u = t(i[0].cloneNode(!1)),
                h = i.children("tfoot");
            h.length || (h = null), c = t("<div/>", { class: r.sScrollWrapper }).append(t("<div/>", { class: r.sScrollHead }).css({ overflow: "hidden", position: "relative", border: 0, width: s ? s ? yt(s) : null : "100%" }).append(t("<div/>", { class: r.sScrollHeadInner }).css({ "box-sizing": "content-box", width: n.sXInner || "100%" }).append(c.removeAttr("id").css("margin-left", 0).append("top" === l ? a : null).append(i.children("thead"))))).append(t("<div/>", { class: r.sScrollBody }).css({ position: "relative", overflow: "auto", width: s ? yt(s) : null }).append(i)), h && c.append(t("<div/>", { class: r.sScrollFoot }).css({ overflow: "hidden", border: 0, width: s ? s ? yt(s) : null : "100%" }).append(t("<div/>", { class: r.sScrollFootInner }).append(u.removeAttr("id").css("margin-left", 0).append("bottom" === l ? a : null).append(i.children("tfoot")))));
            var i = c.children(),
                d = i[0],
                r = i[1],
                p = h ? i[2] : null;
            return s && t(r).on("scroll.DT", function() {
                var t = this.scrollLeft;
                d.scrollLeft = t, h && (p.scrollLeft = t)
            }), t(r).css(o && n.bCollapse ? "max-height" : "height", o), e.nScrollHead = d, e.nScrollBody = r, e.nScrollFoot = p, e.aoDrawCallback.push({ fn: pt, sName: "scrolling" }), c[0]
        }

        function pt(e) {
            var i, s, o, r, a, l = e.oScroll,
                c = l.sX,
                u = l.sXInner,
                h = l.sY,
                l = l.iBarWidth,
                d = t(e.nScrollHead),
                m = d[0].style,
                g = d.children("div"),
                v = g[0].style,
                _ = g.children("table"),
                g = e.nScrollBody,
                y = t(g),
                b = g.style,
                w = t(e.nScrollFoot).children("div"),
                C = w.children("table"),
                x = t(e.nTHead),
                T = t(e.nTable),
                S = T[0],
                k = S.style,
                D = e.nTFoot ? t(e.nTFoot) : null,
                E = e.oBrowser,
                I = E.bScrollOversize,
                P = se(e.aoColumns, "nTh"),
                A = [],
                O = [],
                N = [],
                M = [],
                H = function(t) { t = t.style, t.paddingTop = "0", t.paddingBottom = "0", t.borderTopWidth = "0", t.borderBottomWidth = "0", t.height = 0 };
            s = g.scrollHeight > g.clientHeight, e.scrollBarVis !== s && e.scrollBarVis !== n ? (e.scrollBarVis = s, p(e)) : (e.scrollBarVis = s, T.children("thead, tfoot").remove(), D && (o = D.clone().prependTo(T), i = D.find("tr"), o = o.find("tr")), r = x.clone().prependTo(T), x = x.find("tr"), s = r.find("tr"), r.find("th, td").removeAttr("tabindex"), c || (b.width = "100%", d[0].style.width = "100%"), t.each(F(e, r), function(t, i) { a = f(e, t), i.style.width = e.aoColumns[a].sWidth }), D && ft(function(t) { t.style.width = "" }, o), d = T.outerWidth(), "" === c ? (k.width = "100%", I && (T.find("tbody").height() > g.offsetHeight || "scroll" == y.css("overflow-y")) && (k.width = yt(T.outerWidth() - l)), d = T.outerWidth()) : "" !== u && (k.width = yt(u), d = T.outerWidth()), ft(H, s), ft(function(e) { N.push(e.innerHTML), A.push(yt(t(e).css("width"))) }, s), ft(function(e, i) {-1 !== t.inArray(e, P) && (e.style.width = A[i]) }, x), t(s).height(0), D && (ft(H, o), ft(function(e) { M.push(e.innerHTML), O.push(yt(t(e).css("width"))) }, o), ft(function(t, e) { t.style.width = O[e] }, i), t(o).height(0)), ft(function(t, e) { t.innerHTML = '<div class="dataTables_sizing">' + N[e] + "</div>", t.childNodes[0].style.height = "0", t.childNodes[0].style.overflow = "hidden", t.style.width = A[e] }, s), D && ft(function(t, e) { t.innerHTML = '<div class="dataTables_sizing">' + M[e] + "</div>", t.childNodes[0].style.height = "0", t.childNodes[0].style.overflow = "hidden", t.style.width = O[e] }, o), T.outerWidth() < d ? (i = g.scrollHeight > g.offsetHeight || "scroll" == y.css("overflow-y") ? d + l : d, I && (g.scrollHeight > g.offsetHeight || "scroll" == y.css("overflow-y")) && (k.width = yt(i - l)), ("" === c || "" !== u) && Pt(e, 1, "Possible column misalignment", 6)) : i = "100%", b.width = yt(i), m.width = yt(i), D && (e.nScrollFoot.style.width = yt(i)), !h && I && (b.height = yt(S.offsetHeight + l)), c = T.outerWidth(), _[0].style.width = yt(c), v.width = yt(c), u = T.height() > g.clientHeight || "scroll" == y.css("overflow-y"), h = "padding" + (E.bScrollbarLeft ? "Left" : "Right"), v[h] = u ? l + "px" : "0px", D && (C[0].style.width = yt(c), w[0].style.width = yt(c), w[0].style[h] = u ? l + "px" : "0px"), T.children("colgroup").insertBefore(T.children("thead")), y.scroll(), !e.bSorted && !e.bFiltered || e._drawHold || (g.scrollTop = 0))
        }

        function ft(t, e, i) {
            for (var n, s, o = 0, r = 0, a = e.length; r < a;) {
                for (n = e[r].firstChild, s = i ? i[r].firstChild : null; n;) 1 === n.nodeType && (i ? t(n, s, o) : t(n, o), o++), n = n.nextSibling, s = i ? s.nextSibling : null;
                r++
            }
        }

        function mt(i) {
            var n, s, o = i.nTable,
                r = i.aoColumns,
                a = i.oScroll,
                l = a.sY,
                c = a.sX,
                u = a.sXInner,
                h = r.length,
                d = v(i, "bVisible"),
                m = t("th", i.nTHead),
                _ = o.getAttribute("width"),
                y = o.parentNode,
                b = !1,
                w = i.oBrowser,
                a = w.bScrollOversize;
            for ((n = o.style.width) && -1 !== n.indexOf("%") && (_ = n), n = 0; n < d.length; n++) s = r[d[n]], null !== s.sWidth && (s.sWidth = gt(s.sWidthOrig, y), b = !0);
            if (a || !b && !c && !l && h == g(i) && h == m.length)
                for (n = 0; n < h; n++) null !== (d = f(i, n)) && (r[d].sWidth = yt(m.eq(n).width()));
            else {
                h = t(o).clone().css("visibility", "hidden").removeAttr("id"), h.find("tbody tr").remove();
                var C = t("<tr/>").appendTo(h.find("tbody"));
                for (h.find("thead, tfoot").remove(), h.append(t(i.nTHead).clone()).append(t(i.nTFoot).clone()), h.find("tfoot th, tfoot td").css("width", ""), m = F(i, h.find("thead")[0]), n = 0; n < d.length; n++) s = r[d[n]], m[n].style.width = null !== s.sWidthOrig && "" !== s.sWidthOrig ? yt(s.sWidthOrig) : "", s.sWidthOrig && c && t(m[n]).append(t("<div/>").css({ width: s.sWidthOrig, margin: 0, padding: 0, border: 0, height: 1 }));
                if (i.aoData.length)
                    for (n = 0; n < d.length; n++) b = d[n], s = r[b], t(vt(i, b)).clone(!1).append(s.sContentPadding).appendTo(C);
                for (t("[name]", h).removeAttr("name"), s = t("<div/>").css(c || l ? { position: "absolute", top: 0, left: 0, height: 1, right: 0, overflow: "hidden" } : {}).append(h).appendTo(y), c && u ? h.width(u) : c ? (h.css("width", "auto"), h.removeAttr("width"), h.width() < y.clientWidth && _ && h.width(y.clientWidth)) : l ? h.width(y.clientWidth) : _ && h.width(_), n = l = 0; n < d.length; n++) y = t(m[n]), u = y.outerWidth() - y.width(), y = w.bBounding ? Math.ceil(m[n].getBoundingClientRect().width) : y.outerWidth(), l += y, r[d[n]].sWidth = yt(y - u);
                o.style.width = yt(l), s.remove()
            }
            _ && (o.style.width = yt(_)), !_ && !c || i._reszEvt || (o = function() { t(e).on("resize.DT-" + i.sInstance, ge(function() { p(i) })) }, a ? setTimeout(o, 1e3) : o(), i._reszEvt = !0)
        }

        function gt(e, n) {
            if (!e) return 0;
            var s = t("<div/>").css("width", yt(e)).appendTo(n || i.body),
                o = s[0].offsetWidth;
            return s.remove(), o
        }

        function vt(e, i) { var n = _t(e, i); if (0 > n) return null; var s = e.aoData[n]; return s.nTr ? s.anCells[i] : t("<td/>").html(C(e, n, i, "display"))[0] }

        function _t(t, e) { for (var i, n = -1, s = -1, o = 0, r = t.aoData.length; o < r; o++) i = C(t, o, e, "display") + "", i = i.replace(me, ""), i = i.replace(/&nbsp;/g, " "), i.length > n && (n = i.length, s = o); return s }

        function yt(t) { return null === t ? "0px" : "number" == typeof t ? 0 > t ? "0px" : t + "px" : t.match(/\d$/) ? t + "px" : t }

        function bt(e) {
            var i, s, o, r, a, l, c = [],
                u = e.aoColumns;
            i = e.aaSortingFixed, s = t.isPlainObject(i);
            var h = [];
            for (o = function(e) { e.length && !t.isArray(e[0]) ? h.push(e) : t.merge(h, e) }, t.isArray(i) && o(i), s && i.pre && o(i.pre), o(e.aaSorting), s && i.post && o(i.post), e = 0; e < h.length; e++)
                for (l = h[e][0], o = u[l].aDataSort, i = 0, s = o.length; i < s; i++) r = o[i], a = u[r].sType || "string", h[e]._idx === n && (h[e]._idx = t.inArray(h[e][1], u[r].asSorting)), c.push({ src: l, col: r, dir: h[e][1], index: h[e]._idx, type: a, formatter: Yt.ext.type.order[a + "-pre"] });
            return c
        }

        function wt(t) {
            var e, i, n, s, o = [],
                r = Yt.ext.type.order,
                a = t.aoData,
                l = 0,
                c = t.aiDisplayMaster;
            for (_(t), s = bt(t), e = 0, i = s.length; e < i; e++) n = s[e], n.formatter && l++, kt(t, n.col);
            if ("ssp" != zt(t) && 0 !== s.length) {
                for (e = 0, i = c.length; e < i; e++) o[c[e]] = e;
                l === s.length ? c.sort(function(t, e) {
                    var i, n, r, l, c = s.length,
                        u = a[t]._aSortData,
                        h = a[e]._aSortData;
                    for (r = 0; r < c; r++)
                        if (l = s[r], i = u[l.col], n = h[l.col], 0 !== (i = i < n ? -1 : i > n ? 1 : 0)) return "asc" === l.dir ? i : -i;
                    return i = o[t], n = o[e], i < n ? -1 : i > n ? 1 : 0
                }) : c.sort(function(t, e) {
                    var i, n, l, c, u = s.length,
                        h = a[t]._aSortData,
                        d = a[e]._aSortData;
                    for (l = 0; l < u; l++)
                        if (c = s[l], i = h[c.col], n = d[c.col], c = r[c.type + "-" + c.dir] || r["string-" + c.dir], 0 !== (i = c(i, n))) return i;
                    return i = o[t], n = o[e], i < n ? -1 : i > n ? 1 : 0
                })
            }
            t.bSorted = !0
        }

        function Ct(t) {
            for (var e, i, n = t.aoColumns, s = bt(t), t = t.oLanguage.oAria, o = 0, r = n.length; o < r; o++) {
                i = n[o];
                var a = i.asSorting;
                e = i.sTitle.replace(/<.*?>/g, "");
                var l = i.nTh;
                l.removeAttribute("aria-sort"), i.bSortable && (0 < s.length && s[0].col == o ? (l.setAttribute("aria-sort", "asc" == s[0].dir ? "ascending" : "descending"), i = a[s[0].index + 1] || a[0]) : i = a[0], e += "asc" === i ? t.sSortAscending : t.sSortDescending), l.setAttribute("aria-label", e)
            }
        }

        function xt(e, i, s, o) {
            var r = e.aaSorting,
                a = e.aoColumns[i].asSorting,
                l = function(e, i) { var s = e._idx; return s === n && (s = t.inArray(e[1], a)), s + 1 < a.length ? s + 1 : i ? null : 0 };
            "number" == typeof r[0] && (r = e.aaSorting = [r]), s && e.oFeatures.bSortMulti ? (s = t.inArray(i, se(r, "0")), -1 !== s ? (i = l(r[s], !0), null === i && 1 === r.length && (i = 0), null === i ? r.splice(s, 1) : (r[s][1] = a[i], r[s]._idx = i)) : (r.push([i, a[0], 0]), r[r.length - 1]._idx = 0)) : r.length && r[0][0] == i ? (i = l(r[0]), r.length = 1, r[0][1] = a[i], r[0]._idx = i) : (r.length = 0, r.push([i, a[0]]), r[0]._idx = 0), L(e), "function" == typeof o && o(e)
        }

        function Tt(t, e, i, n) {
            var s = t.aoColumns[i];
            Nt(e, {}, function(e) {!1 !== s.bSortable && (t.oFeatures.bProcessing ? (ht(t, !0), setTimeout(function() { xt(t, i, e.shiftKey, n), "ssp" !== zt(t) && ht(t, !1) }, 0)) : xt(t, i, e.shiftKey, n)) })
        }

        function St(e) {
            var i, n, s = e.aLastSort,
                o = e.oClasses.sSortColumn,
                r = bt(e),
                a = e.oFeatures;
            if (a.bSort && a.bSortClasses) { for (a = 0, i = s.length; a < i; a++) n = s[a].src, t(se(e.aoData, "anCells", n)).removeClass(o + (2 > a ? a + 1 : 3)); for (a = 0, i = r.length; a < i; a++) n = r[a].src, t(se(e.aoData, "anCells", n)).addClass(o + (2 > a ? a + 1 : 3)) }
            e.aLastSort = r
        }

        function kt(t, e) {
            var i, n = t.aoColumns[e],
                s = Yt.ext.order[n.sSortDataType];
            s && (i = s.call(t.oInstance, t, e, m(t, e)));
            for (var o, r = Yt.ext.type.order[n.sType + "-pre"], a = 0, l = t.aoData.length; a < l; a++) n = t.aoData[a], n._aSortData || (n._aSortData = []), (!n._aSortData[e] || s) && (o = s ? i[a] : C(t, a, e, "sort"), n._aSortData[e] = r ? r(o) : o)
        }

        function Dt(e) {
            if (e.oFeatures.bStateSave && !e.bDestroying) {
                var i = { time: +new Date, start: e._iDisplayStart, length: e._iDisplayLength, order: t.extend(!0, [], e.aaSorting), search: Z(e.oPreviousSearch), columns: t.map(e.aoColumns, function(t, i) { return { visible: t.bVisible, search: Z(e.aoPreSearchCols[i]) } }) };
                Ht(e, "aoStateSaveParams", "stateSaveParams", [e, i]), e.oSavedState = i, e.fnStateSaveCallback.call(e.oInstance, e, i)
            }
        }

        function Et(e, i, s) {
            var o, r, a = e.aoColumns,
                i = function(i) {
                    if (i && i.time) {
                        var l = Ht(e, "aoStateLoadParams", "stateLoadParams", [e, i]);
                        if (-1 === t.inArray(!1, l) && !(0 < (l = e.iStateDuration) && i.time < +new Date - 1e3 * l || i.columns && a.length !== i.columns.length)) {
                            if (e.oLoadedState = t.extend(!0, {}, i), i.start !== n && (e._iDisplayStart = i.start, e.iInitDisplayStart = i.start), i.length !== n && (e._iDisplayLength = i.length), i.order !== n && (e.aaSorting = [], t.each(i.order, function(t, i) { e.aaSorting.push(i[0] >= a.length ? [0, i[1]] : i) })), i.search !== n && t.extend(e.oPreviousSearch, tt(i.search)), i.columns)
                                for (o = 0, r = i.columns.length; o < r; o++) l = i.columns[o], l.visible !== n && (a[o].bVisible = l.visible), l.search !== n && t.extend(e.aoPreSearchCols[o], tt(l.search));
                            Ht(e, "aoStateLoaded", "stateLoaded", [e, i])
                        }
                    }
                    s()
                };
            if (e.oFeatures.bStateSave) {
                var l = e.fnStateLoadCallback.call(e.oInstance, e, i);
                l !== n && i(l)
            } else s()
        }

        function It(e) {
            var i = Yt.settings,
                e = t.inArray(e, se(i, "nTable"));
            return -1 !== e ? i[e] : null
        }

        function Pt(t, i, n, s) {
            if (n = "DataTables warning: " + (t ? "table id=" + t.sTableId + " - " : "") + n, s && (n += ". For more information about this error, please see http://datatables.net/tn/" + s), i) e.console && console.log && console.log(n);
            else if (i = Yt.ext, i = i.sErrMode || i.errMode, t && Ht(t, null, "error", [t, s, n]), "alert" == i) alert(n);
            else { if ("throw" == i) throw Error(n); "function" == typeof i && i(t, s, n) }
        }

        function At(e, i, s, o) { t.isArray(s) ? t.each(s, function(n, s) { t.isArray(s) ? At(e, i, s[0], s[1]) : At(e, i, s) }) : (o === n && (o = s), i[s] !== n && (e[o] = i[s])) }

        function Ot(e, i, n) { var s, o; for (o in i) i.hasOwnProperty(o) && (s = i[o], t.isPlainObject(s) ? (t.isPlainObject(e[o]) || (e[o] = {}), t.extend(!0, e[o], s)) : e[o] = n && "data" !== o && "aaData" !== o && t.isArray(s) ? s.slice() : s); return e }

        function Nt(e, i, n) { t(e).on("click.DT", i, function(i) { t(e).blur(), n(i) }).on("keypress.DT", i, function(t) { 13 === t.which && (t.preventDefault(), n(t)) }).on("selectstart.DT", function() { return !1 }) }

        function Mt(t, e, i, n) { i && t[e].push({ fn: i, sName: n }) }

        function Ht(e, i, n, s) { var o = []; return i && (o = t.map(e[i].slice().reverse(), function(t) { return t.fn.apply(e.oInstance, s) })), null !== n && (i = t.Event(n + ".dt"), t(e.nTable).trigger(i, s), o.push(i.result)), o }

        function $t(t) {
            var e = t._iDisplayStart,
                i = t.fnDisplayEnd(),
                n = t._iDisplayLength;
            e >= i && (e = i - n), e -= e % n, (-1 === n || 0 > e) && (e = 0), t._iDisplayStart = e
        }

        function Lt(e, i) {
            var n = e.renderer,
                s = Yt.ext.renderer[i];
            return t.isPlainObject(n) && n[i] ? s[n[i]] || s._ : "string" == typeof n ? s[n] || s._ : s._
        }

        function zt(t) { return t.oFeatures.bServerSide ? "ssp" : t.ajax || t.sAjaxSource ? "ajax" : "dom" }

        function jt(t, e) {
            var i = [],
                i = Ie.numbers_length,
                n = Math.floor(i / 2);
            return e <= i ? i = re(0, e) : t <= n ? (i = re(0, i - 2), i.push("ellipsis"), i.push(e - 1)) : (t >= e - 1 - n ? i = re(e - (i - 2), e) : (i = re(t - n + 2, t + n - 1), i.push("ellipsis"), i.push(e - 1)), i.splice(0, 0, "ellipsis"), i.splice(0, 0, 0)), i.DT_el = "span", i
        }

        function Ft(e) { t.each({ num: function(t) { return Pe(t, e) }, "num-fmt": function(t) { return Pe(t, e, Jt) }, "html-num": function(t) { return Pe(t, e, Kt) }, "html-num-fmt": function(t) { return Pe(t, e, Kt, Jt) } }, function(t, i) { Wt.type.order[t + e + "-pre"] = i, t.match(/^html\-/) && (Wt.type.search[t + e] = Wt.type.search.html) }) }

        function Rt(t) { return function() { var e = [It(this[Yt.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments)); return Yt.ext.internal[t].apply(this, e) } }
        var Wt, qt, Bt, Ut, Yt = function(e) {
                this.$ = function(t, e) { return this.api(!0).$(t, e) }, this._ = function(t, e) { return this.api(!0).rows(t, e).data() }, this.api = function(t) { return new qt(t ? It(this[Wt.iApiIndex]) : this) }, this.fnAddData = function(e, i) {
                    var s = this.api(!0),
                        o = t.isArray(e) && (t.isArray(e[0]) || t.isPlainObject(e[0])) ? s.rows.add(e) : s.row.add(e);
                    return (i === n || i) && s.draw(), o.flatten().toArray()
                }, this.fnAdjustColumnSizing = function(t) {
                    var e = this.api(!0).columns.adjust(),
                        i = e.settings()[0],
                        s = i.oScroll;
                    t === n || t ? e.draw(!1) : ("" !== s.sX || "" !== s.sY) && pt(i)
                }, this.fnClearTable = function(t) {
                    var e = this.api(!0).clear();
                    (t === n || t) && e.draw()
                }, this.fnClose = function(t) { this.api(!0).row(t).child.hide() }, this.fnDeleteRow = function(t, e, i) {
                    var s = this.api(!0),
                        t = s.rows(t),
                        o = t.settings()[0],
                        r = o.aoData[t[0][0]];
                    return t.remove(), e && e.call(this, o, r), (i === n || i) && s.draw(), r
                }, this.fnDestroy = function(t) { this.api(!0).destroy(t) }, this.fnDraw = function(t) { this.api(!0).draw(t) }, this.fnFilter = function(t, e, i, s, o, r) { o = this.api(!0), null === e || e === n ? o.search(t, i, s, r) : o.column(e).search(t, i, s, r), o.draw() }, this.fnGetData = function(t, e) { var i = this.api(!0); if (t !== n) { var s = t.nodeName ? t.nodeName.toLowerCase() : ""; return e !== n || "td" == s || "th" == s ? i.cell(t, e).data() : i.row(t).data() || null } return i.data().toArray() }, this.fnGetNodes = function(t) { var e = this.api(!0); return t !== n ? e.row(t).node() : e.rows().nodes().flatten().toArray() }, this.fnGetPosition = function(t) {
                    var e = this.api(!0),
                        i = t.nodeName.toUpperCase();
                    return "TR" == i ? e.row(t).index() : "TD" == i || "TH" == i ? (t = e.cell(t).index(), [t.row, t.columnVisible, t.column]) : null
                }, this.fnIsOpen = function(t) { return this.api(!0).row(t).child.isShown() }, this.fnOpen = function(t, e, i) { return this.api(!0).row(t).child(e, i).show().child()[0] }, this.fnPageChange = function(t, e) {
                    var i = this.api(!0).page(t);
                    (e === n || e) && i.draw(!1)
                }, this.fnSetColumnVis = function(t, e, i) { t = this.api(!0).column(t).visible(e), (i === n || i) && t.columns.adjust().draw() }, this.fnSettings = function() { return It(this[Wt.iApiIndex]) }, this.fnSort = function(t) { this.api(!0).order(t).draw() }, this.fnSortListener = function(t, e, i) { this.api(!0).order.listener(t, e, i) }, this.fnUpdate = function(t, e, i, s, o) { var r = this.api(!0); return i === n || null === i ? r.row(e).data(t) : r.cell(e, i).data(t), (o === n || o) && r.columns.adjust(), (s === n || s) && r.draw(), 0 }, this.fnVersionCheck = Wt.fnVersionCheck;
                var i = this,
                    s = e === n,
                    u = this.length;
                s && (e = {}), this.oApi = this.internal = Wt.internal;
                for (var p in Yt.ext.internal) p && (this[p] = Rt(p));
                return this.each(function() {
                    var p, f = {},
                        m = 1 < u ? Ot(f, e, !0) : e,
                        g = 0,
                        f = this.getAttribute("id"),
                        v = !1,
                        _ = Yt.defaults,
                        C = t(this);
                    if ("table" != this.nodeName.toLowerCase()) Pt(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
                    else {
                        a(_), l(_.column), o(_, _, !0), o(_.column, _.column, !0), o(_, t.extend(m, C.data()));
                        var x = Yt.settings,
                            g = 0;
                        for (p = x.length; g < p; g++) { var T = x[g]; if (T.nTable == this || T.nTHead && T.nTHead.parentNode == this || T.nTFoot && T.nTFoot.parentNode == this) { var k = m.bRetrieve !== n ? m.bRetrieve : _.bRetrieve; if (s || k) return T.oInstance; if (m.bDestroy !== n ? m.bDestroy : _.bDestroy) { T.oInstance.fnDestroy(); break } return void Pt(T, 0, "Cannot reinitialise DataTable", 3) } if (T.sTableId == this.id) { x.splice(g, 1); break } }
                        null !== f && "" !== f || (this.id = f = "DataTables_Table_" + Yt.ext._unique++);
                        var D = t.extend(!0, {}, Yt.models.oSettings, { sDestroyWidth: C[0].style.width, sInstance: f, sTableId: f });
                        D.nTable = this, D.oApi = i.internal, D.oInit = m, x.push(D), D.oInstance = 1 === i.length ? i : C.dataTable(), a(m), r(m.oLanguage), m.aLengthMenu && !m.iDisplayLength && (m.iDisplayLength = t.isArray(m.aLengthMenu[0]) ? m.aLengthMenu[0][0] : m.aLengthMenu[0]), m = Ot(t.extend(!0, {}, _), m), At(D.oFeatures, m, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" ")), At(D, m, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"],
                            ["oSearch", "oPreviousSearch"],
                            ["aoSearchCols", "aoPreSearchCols"],
                            ["iDisplayLength", "_iDisplayLength"]
                        ]), At(D.oScroll, m, [
                            ["sScrollX", "sX"],
                            ["sScrollXInner", "sXInner"],
                            ["sScrollY", "sY"],
                            ["bScrollCollapse", "bCollapse"]
                        ]), At(D.oLanguage, m, "fnInfoCallback"), Mt(D, "aoDrawCallback", m.fnDrawCallback, "user"), Mt(D, "aoServerParams", m.fnServerParams, "user"), Mt(D, "aoStateSaveParams", m.fnStateSaveParams, "user"), Mt(D, "aoStateLoadParams", m.fnStateLoadParams, "user"), Mt(D, "aoStateLoaded", m.fnStateLoaded, "user"), Mt(D, "aoRowCallback", m.fnRowCallback, "user"), Mt(D, "aoRowCreatedCallback", m.fnCreatedRow, "user"), Mt(D, "aoHeaderCallback", m.fnHeaderCallback, "user"), Mt(D, "aoFooterCallback", m.fnFooterCallback, "user"), Mt(D, "aoInitComplete", m.fnInitComplete, "user"), Mt(D, "aoPreDrawCallback", m.fnPreDrawCallback, "user"), D.rowIdFn = S(m.rowId), c(D);
                        var E = D.oClasses;
                        t.extend(E, Yt.ext.classes, m.oClasses), C.addClass(E.sTable), D.iInitDisplayStart === n && (D.iInitDisplayStart = m.iDisplayStart, D._iDisplayStart = m.iDisplayStart), null !== m.iDeferLoading && (D.bDeferLoading = !0, f = t.isArray(m.iDeferLoading), D._iRecordsDisplay = f ? m.iDeferLoading[0] : m.iDeferLoading, D._iRecordsTotal = f ? m.iDeferLoading[1] : m.iDeferLoading);
                        var I = D.oLanguage;
                        t.extend(!0, I, m.oLanguage), I.sUrl && (t.ajax({ dataType: "json", url: I.sUrl, success: function(e) { r(e), o(_.oLanguage, e), t.extend(!0, I, e), st(D) }, error: function() { st(D) } }), v = !0), null === m.asStripeClasses && (D.asStripeClasses = [E.sStripeOdd, E.sStripeEven]);
                        var f = D.asStripeClasses,
                            P = C.children("tbody").find("tr").eq(0);
                        if (-1 !== t.inArray(!0, t.map(f, function(t) { return P.hasClass(t) })) && (t("tbody tr", this).removeClass(f.join(" ")), D.asDestroyStripes = f.slice()), f = [], x = this.getElementsByTagName("thead"), 0 !== x.length && (j(D.aoHeader, x[0]), f = F(D)), null === m.aoColumns)
                            for (x = [], g = 0, p = f.length; g < p; g++) x.push(null);
                        else x = m.aoColumns;
                        for (g = 0, p = x.length; g < p; g++) h(D, f ? f[g] : null);
                        if (y(D, m.aoColumnDefs, x, function(t, e) { d(D, t, e) }), P.length) {
                            var A = function(t, e) { return null !== t.getAttribute("data-" + e) ? e : null };
                            t(P[0]).children("th, td").each(function(t, e) {
                                var i = D.aoColumns[t];
                                if (i.mData === t) {
                                    var s = A(e, "sort") || A(e, "order"),
                                        o = A(e, "filter") || A(e, "search");
                                    null === s && null === o || (i.mData = { _: t + ".display", sort: null !== s ? t + ".@data-" + s : n, type: null !== s ? t + ".@data-" + s : n, filter: null !== o ? t + ".@data-" + o : n }, d(D, t))
                                }
                            })
                        }
                        var O = D.oFeatures,
                            f = function() {
                                if (m.aaSorting === n) { var e = D.aaSorting; for (g = 0, p = e.length; g < p; g++) e[g][1] = D.aoColumns[g].asSorting[0] }
                                St(D), O.bSort && Mt(D, "aoDrawCallback", function() {
                                    if (D.bSorted) {
                                        var e = bt(D),
                                            i = {};
                                        t.each(e, function(t, e) { i[e.src] = e.dir }), Ht(D, null, "order", [D, e, i]), Ct(D)
                                    }
                                }), Mt(D, "aoDrawCallback", function() {
                                    (D.bSorted || "ssp" === zt(D) || O.bDeferRender) && St(D)
                                }, "sc");
                                var e = C.children("caption").each(function() { this._captionSide = t(this).css("caption-side") }),
                                    i = C.children("thead");
                                if (0 === i.length && (i = t("<thead/>").appendTo(C)), D.nTHead = i[0], i = C.children("tbody"), 0 === i.length && (i = t("<tbody/>").appendTo(C)), D.nTBody = i[0], i = C.children("tfoot"), 0 === i.length && e.length > 0 && ("" !== D.oScroll.sX || "" !== D.oScroll.sY) && (i = t("<tfoot/>").appendTo(C)), 0 === i.length || 0 === i.children().length ? C.addClass(E.sNoFooter) : i.length > 0 && (D.nTFoot = i[0], j(D.aoFooter, D.nTFoot)), m.aaData)
                                    for (g = 0; g < m.aaData.length; g++) b(D, m.aaData[g]);
                                else(D.bDeferLoading || "dom" == zt(D)) && w(D, t(D.nTBody).children("tr"));
                                D.aiDisplay = D.aiDisplayMaster.slice(), D.bInitialised = !0, !1 === v && st(D)
                            };
                        m.bStateSave ? (O.bStateSave = !0, Mt(D, "aoDrawCallback", Dt, "state_save"), Et(D, m, f)) : f()
                    }
                }), i = null, this
            },
            Vt = {},
            Xt = /[\r\n]/g,
            Kt = /<.*?>/g,
            Qt = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
            Gt = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"),
            Jt = /[',$Â£â‚¬Â¥%\u2009\u202F\u20BD\u20a9\u20BArfkÉƒÎž]/gi,
            Zt = function(t) { return !t || !0 === t || "-" === t },
            te = function(t) { var e = parseInt(t, 10); return !isNaN(e) && isFinite(t) ? e : null },
            ee = function(t, e) { return Vt[e] || (Vt[e] = RegExp(de(e), "g")), "string" == typeof t && "." !== e ? t.replace(/\./g, "").replace(Vt[e], ".") : t },
            ie = function(t, e, i) { var n = "string" == typeof t; return !!Zt(t) || (e && n && (t = ee(t, e)), i && n && (t = t.replace(Jt, "")), !isNaN(parseFloat(t)) && isFinite(t)) },
            ne = function(t, e, i) { return !!Zt(t) || (Zt(t) || "string" == typeof t ? !!ie(t.replace(Kt, ""), e, i) || null : null) },
            se = function(t, e, i) {
                var s = [],
                    o = 0,
                    r = t.length;
                if (i !== n)
                    for (; o < r; o++) t[o] && t[o][e] && s.push(t[o][e][i]);
                else
                    for (; o < r; o++) t[o] && s.push(t[o][e]);
                return s
            },
            oe = function(t, e, i, s) {
                var o = [],
                    r = 0,
                    a = e.length;
                if (s !== n)
                    for (; r < a; r++) t[e[r]][i] && o.push(t[e[r]][i][s]);
                else
                    for (; r < a; r++) o.push(t[e[r]][i]);
                return o
            },
            re = function(t, e) {
                var i, s = [];
                e === n ? (e = 0, i = t) : (i = e, e = t);
                for (var o = e; o < i; o++) s.push(o);
                return s
            },
            ae = function(t) { for (var e = [], i = 0, n = t.length; i < n; i++) t[i] && e.push(t[i]); return e },
            le = function(t) {
                var e;
                t: {
                    if (!(2 > t.length)) {
                        e = t.slice().sort();
                        for (var i = e[0], n = 1, s = e.length; n < s; n++) {
                            if (e[n] === i) { e = !1; break t }
                            i = e[n]
                        }
                    }
                    e = !0
                }
                if (e) return t.slice();
                e = [];
                var o, s = t.length,
                    r = 0,
                    n = 0;
                t: for (; n < s; n++) {
                    for (i = t[n], o = 0; o < r; o++)
                        if (e[o] === i) continue t;
                    e.push(i), r++
                }
                return e
            };
        Yt.util = {
            throttle: function(t, e) {
                var i, s, o = e !== n ? e : 200;
                return function() {
                    var e = this,
                        r = +new Date,
                        a = arguments;
                    i && r < i + o ? (clearTimeout(s), s = setTimeout(function() { i = n, t.apply(e, a) }, o)) : (i = r, t.apply(e, a))
                }
            },
            escapeRegex: function(t) { return t.replace(Gt, "\\$1") }
        };
        var ce = function(t, e, i) { t[e] !== n && (t[i] = t[e]) },
            ue = /\[.*?\]$/,
            he = /\(\)$/,
            de = Yt.util.escapeRegex,
            pe = t("<div>")[0],
            fe = pe.textContent !== n,
            me = /<.*?>/g,
            ge = Yt.util.throttle,
            ve = [],
            _e = Array.prototype,
            ye = function(e) {
                var i, n, s = Yt.settings,
                    o = t.map(s, function(t) { return t.nTable });
                return e ? e.nTable && e.oApi ? [e] : e.nodeName && "table" === e.nodeName.toLowerCase() ? (i = t.inArray(e, o), -1 !== i ? [s[i]] : null) : e && "function" == typeof e.settings ? e.settings().toArray() : ("string" == typeof e ? n = t(e) : e instanceof t && (n = e), n ? n.map(function() { return i = t.inArray(this, o), -1 !== i ? s[i] : null }).toArray() : void 0) : []
            };
        qt = function(e, i) {
            if (!(this instanceof qt)) return new qt(e, i);
            var n = [],
                s = function(t) {
                    (t = ye(t)) && (n = n.concat(t))
                };
            if (t.isArray(e))
                for (var o = 0, r = e.length; o < r; o++) s(e[o]);
            else s(e);
            this.context = le(n), i && t.merge(this, i), this.selector = { rows: null, cols: null, opts: null }, qt.extend(this, this, ve)
        }, Yt.Api = qt, t.extend(qt.prototype, {
            any: function() { return 0 !== this.count() },
            concat: _e.concat,
            context: [],
            count: function() { return this.flatten().length },
            each: function(t) { for (var e = 0, i = this.length; e < i; e++) t.call(this, this[e], e, this); return this },
            eq: function(t) { var e = this.context; return e.length > t ? new qt(e[t], this[t]) : null },
            filter: function(t) {
                var e = [];
                if (_e.filter) e = _e.filter.call(this, t, this);
                else
                    for (var i = 0, n = this.length; i < n; i++) t.call(this, this[i], i, this) && e.push(this[i]);
                return new qt(this.context, e)
            },
            flatten: function() { var t = []; return new qt(this.context, t.concat.apply(t, this.toArray())) },
            join: _e.join,
            indexOf: _e.indexOf || function(t, e) {
                for (var i = e || 0, n = this.length; i < n; i++)
                    if (this[i] === t) return i;
                return -1
            },
            iterator: function(t, e, i, s) {
                var o, r, a, l, c, u, h, d = [],
                    p = this.context,
                    f = this.selector;
                for ("string" == typeof t && (s = i, i = e, e = t, t = !1), r = 0, a = p.length; r < a; r++) {
                    var m = new qt(p[r]);
                    if ("table" === e)(o = i.call(m, p[r], r)) !== n && d.push(o);
                    else if ("columns" === e || "rows" === e)(o = i.call(m, p[r], this[r], r)) !== n && d.push(o);
                    else if ("column" === e || "column-rows" === e || "row" === e || "cell" === e)
                        for (h = this[r], "column-rows" === e && (u = Te(p[r], f.opts)), l = 0, c = h.length; l < c; l++) o = h[l], (o = "cell" === e ? i.call(m, p[r], o.row, o.column, r, l) : i.call(m, p[r], o, r, l, u)) !== n && d.push(o)
                }
                return d.length || s ? (t = new qt(p, t ? d.concat.apply([], d) : d), e = t.selector, e.rows = f.rows, e.cols = f.cols, e.opts = f.opts, t) : this
            },
            lastIndexOf: _e.lastIndexOf || function(t, e) { return this.indexOf.apply(this.toArray.reverse(), arguments) },
            length: 0,
            map: function(t) {
                var e = [];
                if (_e.map) e = _e.map.call(this, t, this);
                else
                    for (var i = 0, n = this.length; i < n; i++) e.push(t.call(this, this[i], i));
                return new qt(this.context, e)
            },
            pluck: function(t) { return this.map(function(e) { return e[t] }) },
            pop: _e.pop,
            push: _e.push,
            reduce: _e.reduce || function(t, e) { return u(this, t, e, 0, this.length, 1) },
            reduceRight: _e.reduceRight || function(t, e) { return u(this, t, e, this.length - 1, -1, -1) },
            reverse: _e.reverse,
            selector: null,
            shift: _e.shift,
            slice: function() { return new qt(this.context, this) },
            sort: _e.sort,
            splice: _e.splice,
            toArray: function() { return _e.slice.call(this) },
            to$: function() { return t(this) },
            toJQuery: function() { return t(this) },
            unique: function() { return new qt(this.context, le(this)) },
            unshift: _e.unshift
        }), qt.extend = function(e, i, n) {
            if (n.length && i && (i instanceof qt || i.__dt_wrapper)) {
                var s, o, r;
                for (s = 0, o = n.length; s < o; s++) r = n[s], i[r.name] = "function" == typeof r.val ? function(t, e, i) { return function() { var n = e.apply(t, arguments); return qt.extend(n, n, i.methodExt), n } }(e, r.val, r) : t.isPlainObject(r.val) ? {} : r.val,
                    i[r.name].__dt_wrapper = !0, qt.extend(e, i[r.name], r.propExt)
            }
        }, qt.register = Bt = function(e, i) {
            if (t.isArray(e))
                for (var n = 0, s = e.length; n < s; n++) qt.register(e[n], i);
            else
                for (var o, r, a = e.split("."), l = ve, n = 0, s = a.length; n < s; n++) {
                    o = (r = -1 !== a[n].indexOf("()")) ? a[n].replace("()", "") : a[n];
                    var c;
                    t: {
                        c = 0;
                        for (var u = l.length; c < u; c++)
                            if (l[c].name === o) { c = l[c]; break t }
                        c = null
                    }
                    c || (c = { name: o, val: {}, methodExt: [], propExt: [] }, l.push(c)), n === s - 1 ? c.val = i : l = r ? c.methodExt : c.propExt
                }
        }, qt.registerPlural = Ut = function(e, i, s) { qt.register(e, s), qt.register(i, function() { var e = s.apply(this, arguments); return e === this ? this : e instanceof qt ? e.length ? t.isArray(e[0]) ? new qt(e.context, e[0]) : e[0] : n : e }) }, Bt("tables()", function(e) {
            var i;
            if (e) {
                i = qt;
                var n = this.context;
                if ("number" == typeof e) e = [n[e]];
                else var s = t.map(n, function(t) { return t.nTable }),
                    e = t(s).filter(e).map(function() { var e = t.inArray(this, s); return n[e] }).toArray();
                i = new i(e)
            } else i = this;
            return i
        }), Bt("table()", function(t) {
            var t = this.tables(t),
                e = t.context;
            return e.length ? new qt(e[0]) : t
        }), Ut("tables().nodes()", "table().node()", function() { return this.iterator("table", function(t) { return t.nTable }, 1) }), Ut("tables().body()", "table().body()", function() { return this.iterator("table", function(t) { return t.nTBody }, 1) }), Ut("tables().header()", "table().header()", function() { return this.iterator("table", function(t) { return t.nTHead }, 1) }), Ut("tables().footer()", "table().footer()", function() { return this.iterator("table", function(t) { return t.nTFoot }, 1) }), Ut("tables().containers()", "table().container()", function() { return this.iterator("table", function(t) { return t.nTableWrapper }, 1) }), Bt("draw()", function(t) { return this.iterator("table", function(e) { "page" === t ? $(e) : ("string" == typeof t && (t = "full-hold" !== t), L(e, !1 === t)) }) }), Bt("page()", function(t) { return t === n ? this.page.info().page : this.iterator("table", function(e) { ct(e, t) }) }), Bt("page.info()", function() {
            if (0 === this.context.length) return n;
            var t = this.context[0],
                e = t._iDisplayStart,
                i = t.oFeatures.bPaginate ? t._iDisplayLength : -1,
                s = t.fnRecordsDisplay(),
                o = -1 === i;
            return { page: o ? 0 : Math.floor(e / i), pages: o ? 1 : Math.ceil(s / i), start: e, end: t.fnDisplayEnd(), length: i, recordsTotal: t.fnRecordsTotal(), recordsDisplay: s, serverSide: "ssp" === zt(t) }
        }), Bt("page.len()", function(t) { return t === n ? 0 !== this.context.length ? this.context[0]._iDisplayLength : n : this.iterator("table", function(e) { rt(e, t) }) });
        var be = function(t, e, i) {
            if (i) {
                var n = new qt(t);
                n.one("draw", function() { i(n.ajax.json()) })
            }
            if ("ssp" == zt(t)) L(t, e);
            else {
                ht(t, !0);
                var s = t.jqXHR;
                s && 4 !== s.readyState && s.abort(), R(t, [], function(i) {
                    E(t);
                    for (var i = U(t, i), n = 0, s = i.length; n < s; n++) b(t, i[n]);
                    L(t, e), ht(t, !1)
                })
            }
        };
        Bt("ajax.json()", function() { var t = this.context; if (0 < t.length) return t[0].json }), Bt("ajax.params()", function() { var t = this.context; if (0 < t.length) return t[0].oAjaxData }), Bt("ajax.reload()", function(t, e) { return this.iterator("table", function(i) { be(i, !1 === e, t) }) }), Bt("ajax.url()", function(e) { var i = this.context; return e === n ? 0 === i.length ? n : (i = i[0], i.ajax ? t.isPlainObject(i.ajax) ? i.ajax.url : i.ajax : i.sAjaxSource) : this.iterator("table", function(i) { t.isPlainObject(i.ajax) ? i.ajax.url = e : i.ajax = e }) }), Bt("ajax.url().load()", function(t, e) { return this.iterator("table", function(i) { be(i, !1 === e, t) }) });
        var we = function(e, i, s, o, r) {
                var a, l, c, u, h, d, p = [];
                for (c = typeof i, i && "string" !== c && "function" !== c && i.length !== n || (i = [i]), c = 0, u = i.length; c < u; c++)
                    for (l = i[c] && i[c].split && !i[c].match(/[\[\(:]/) ? i[c].split(",") : [i[c]], h = 0, d = l.length; h < d; h++)(a = s("string" == typeof l[h] ? t.trim(l[h]) : l[h])) && a.length && (p = p.concat(a));
                if (e = Wt.selector[e], e.length)
                    for (c = 0, u = e.length; c < u; c++) p = e[c](o, r, p);
                return le(p)
            },
            Ce = function(e) { return e || (e = {}), e.filter && e.search === n && (e.search = e.filter), t.extend({ search: "none", order: "current", page: "all" }, e) },
            xe = function(t) {
                for (var e = 0, i = t.length; e < i; e++)
                    if (0 < t[e].length) return t[0] = t[e], t[0].length = 1, t.length = 1, t.context = [t.context[e]], t;
                return t.length = 0, t
            },
            Te = function(e, i) {
                var n, s, o, r = [],
                    a = e.aiDisplay;
                o = e.aiDisplayMaster;
                var l = i.search;
                if (n = i.order, s = i.page, "ssp" == zt(e)) return "removed" === l ? [] : re(0, o.length);
                if ("current" == s)
                    for (n = e._iDisplayStart, s = e.fnDisplayEnd(); n < s; n++) r.push(a[n]);
                else if ("current" == n || "applied" == n) {
                    if ("none" == l) r = o.slice();
                    else if ("applied" == l) r = a.slice();
                    else if ("removed" == l) {
                        var c = {};
                        for (n = 0, s = a.length; n < s; n++) c[a[n]] = null;
                        r = t.map(o, function(t) { return c.hasOwnProperty(t) ? null : t })
                    }
                } else if ("index" == n || "original" == n)
                    for (n = 0, s = e.aoData.length; n < s; n++) "none" == l ? r.push(n) : (-1 === (o = t.inArray(n, a)) && "removed" == l || 0 <= o && "applied" == l) && r.push(n);
                return r
            };
        Bt("rows()", function(e, i) {
            e === n ? e = "" : t.isPlainObject(e) && (i = e, e = "");
            var i = Ce(i),
                s = this.iterator("table", function(s) {
                    var o, r = i;
                    return we("row", e, function(e) {
                        var i = te(e),
                            a = s.aoData;
                        if (null !== i && !r) return [i];
                        if (o || (o = Te(s, r)), null !== i && -1 !== t.inArray(i, o)) return [i];
                        if (null === e || e === n || "" === e) return o;
                        if ("function" == typeof e) return t.map(o, function(t) { var i = a[t]; return e(t, i._aData, i.nTr) ? t : null });
                        if (e.nodeName) {
                            var i = e._DT_RowIndex,
                                l = e._DT_CellIndex;
                            return i !== n ? a[i] && a[i].nTr === e ? [i] : [] : l ? a[l.row] && a[l.row].nTr === e ? [l.row] : [] : (i = t(e).closest("*[data-dt-row]"), i.length ? [i.data("dt-row")] : [])
                        }
                        return "string" == typeof e && "#" === e.charAt(0) && (i = s.aIds[e.replace(/^#/, "")]) !== n ? [i.idx] : (i = ae(oe(s.aoData, o, "nTr")), t(i).filter(e).map(function() { return this._DT_RowIndex }).toArray())
                    }, s, r)
                }, 1);
            return s.selector.rows = e, s.selector.opts = i, s
        }), Bt("rows().nodes()", function() { return this.iterator("row", function(t, e) { return t.aoData[e].nTr || n }, 1) }), Bt("rows().data()", function() { return this.iterator(!0, "rows", function(t, e) { return oe(t.aoData, e, "_aData") }, 1) }), Ut("rows().cache()", "row().cache()", function(t) { return this.iterator("row", function(e, i) { var n = e.aoData[i]; return "search" === t ? n._aFilterData : n._aSortData }, 1) }), Ut("rows().invalidate()", "row().invalidate()", function(t) { return this.iterator("row", function(e, i) { P(e, i, t) }) }), Ut("rows().indexes()", "row().index()", function() { return this.iterator("row", function(t, e) { return e }, 1) }), Ut("rows().ids()", "row().id()", function(t) {
            for (var e = [], i = this.context, n = 0, s = i.length; n < s; n++)
                for (var o = 0, r = this[n].length; o < r; o++) {
                    var a = i[n].rowIdFn(i[n].aoData[this[n][o]]._aData);
                    e.push((!0 === t ? "#" : "") + a)
                }
            return new qt(i, e)
        }), Ut("rows().remove()", "row().remove()", function() {
            var t = this;
            return this.iterator("row", function(e, i, s) {
                var o, r, a, l, c, u = e.aoData,
                    h = u[i];
                for (u.splice(i, 1), o = 0, r = u.length; o < r; o++)
                    if (a = u[o], c = a.anCells, null !== a.nTr && (a.nTr._DT_RowIndex = o), null !== c)
                        for (a = 0, l = c.length; a < l; a++) c[a]._DT_CellIndex.row = o;
                I(e.aiDisplayMaster, i), I(e.aiDisplay, i), I(t[s], i, !1), 0 < e._iRecordsDisplay && e._iRecordsDisplay--, $t(e), (i = e.rowIdFn(h._aData)) !== n && delete e.aIds[i]
            }), this.iterator("table", function(t) { for (var e = 0, i = t.aoData.length; e < i; e++) t.aoData[e].idx = e }), this
        }), Bt("rows.add()", function(e) {
            var i = this.iterator("table", function(t) { var i, n, s, o = []; for (n = 0, s = e.length; n < s; n++) i = e[n], i.nodeName && "TR" === i.nodeName.toUpperCase() ? o.push(w(t, i)[0]) : o.push(b(t, i)); return o }, 1),
                n = this.rows(-1);
            return n.pop(), t.merge(n, i), n
        }), Bt("row()", function(t, e) { return xe(this.rows(t, e)) }), Bt("row().data()", function(e) { var i = this.context; if (e === n) return i.length && this.length ? i[0].aoData[this[0]]._aData : n; var s = i[0].aoData[this[0]]; return s._aData = e, t.isArray(e) && s.nTr.id && k(i[0].rowId)(e, s.nTr.id), P(i[0], this[0], "data"), this }), Bt("row().node()", function() { var t = this.context; return t.length && this.length ? t[0].aoData[this[0]].nTr || null : null }), Bt("row.add()", function(e) { e instanceof t && e.length && (e = e[0]); var i = this.iterator("table", function(t) { return e.nodeName && "TR" === e.nodeName.toUpperCase() ? w(t, e)[0] : b(t, e) }); return this.row(i[0]) });
        var Se = function(t, e) {
                var i = t.context;
                i.length && (i = i[0].aoData[e !== n ? e : t[0]]) && i._details && (i._details.remove(), i._detailsShow = n, i._details = n)
            },
            ke = function(t, e) {
                var i = t.context;
                if (i.length && t.length) {
                    var n = i[0].aoData[t[0]];
                    if (n._details) {
                        (n._detailsShow = e) ? n._details.insertAfter(n.nTr): n._details.detach();
                        var s = i[0],
                            o = new qt(s),
                            r = s.aoData;
                        o.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details"), 0 < se(r, "_details").length && (o.on("draw.dt.DT_details", function(t, e) { s === e && o.rows({ page: "current" }).eq(0).each(function(t) { t = r[t], t._detailsShow && t._details.insertAfter(t.nTr) }) }), o.on("column-visibility.dt.DT_details", function(t, e) {
                            if (s === e)
                                for (var i, n = g(e), o = 0, a = r.length; o < a; o++) i = r[o], i._details && i._details.children("td[colspan]").attr("colspan", n)
                        }), o.on("destroy.dt.DT_details", function(t, e) {
                            if (s === e)
                                for (var i = 0, n = r.length; i < n; i++) r[i]._details && Se(o, i)
                        }))
                    }
                }
            };
        Bt("row().child()", function(e, i) {
            var s = this.context;
            if (e === n) return s.length && this.length ? s[0].aoData[this[0]]._details : n;
            if (!0 === e) this.child.show();
            else if (!1 === e) Se(this);
            else if (s.length && this.length) {
                var o = s[0],
                    s = s[0].aoData[this[0]],
                    r = [],
                    a = function(e, i) {
                        if (t.isArray(e) || e instanceof t)
                            for (var n = 0, s = e.length; n < s; n++) a(e[n], i);
                        else e.nodeName && "tr" === e.nodeName.toLowerCase() ? r.push(e) : (n = t("<tr><td/></tr>").addClass(i), t("td", n).addClass(i).html(e)[0].colSpan = g(o), r.push(n[0]))
                    };
                a(e, i), s._details && s._details.detach(), s._details = t(r), s._detailsShow && s._details.insertAfter(s.nTr)
            }
            return this
        }), Bt(["row().child.show()", "row().child().show()"], function() { return ke(this, !0), this }), Bt(["row().child.hide()", "row().child().hide()"], function() { return ke(this, !1), this }), Bt(["row().child.remove()", "row().child().remove()"], function() { return Se(this), this }), Bt("row().child.isShown()", function() { var t = this.context; return !(!t.length || !this.length) && (t[0].aoData[this[0]]._detailsShow || !1) });
        var De = /^([^:]+):(name|visIdx|visible)$/,
            Ee = function(t, e, i, n, s) { for (var i = [], n = 0, o = s.length; n < o; n++) i.push(C(t, s[n], e)); return i };
        Bt("columns()", function(e, i) {
            e === n ? e = "" : t.isPlainObject(e) && (i = e, e = "");
            var i = Ce(i),
                s = this.iterator("table", function(n) {
                    var s = e,
                        o = i,
                        r = n.aoColumns,
                        a = se(r, "sName"),
                        l = se(r, "nTh");
                    return we("column", s, function(e) {
                        var i = te(e);
                        if ("" === e) return re(r.length);
                        if (null !== i) return [i >= 0 ? i : r.length + i];
                        if ("function" == typeof e) { var s = Te(n, o); return t.map(r, function(t, i) { return e(i, Ee(n, i, 0, 0, s), l[i]) ? i : null }) }
                        var c = "string" == typeof e ? e.match(De) : "";
                        if (c) switch (c[2]) {
                            case "visIdx":
                            case "visible":
                                if ((i = parseInt(c[1], 10)) < 0) { var u = t.map(r, function(t, e) { return t.bVisible ? e : null }); return [u[u.length + i]] }
                                return [f(n, i)];
                            case "name":
                                return t.map(a, function(t, e) { return t === c[1] ? e : null });
                            default:
                                return []
                        }
                        return e.nodeName && e._DT_CellIndex ? [e._DT_CellIndex.column] : (i = t(l).filter(e).map(function() { return t.inArray(this, l) }).toArray(), i.length || !e.nodeName ? i : (i = t(e).closest("*[data-dt-column]"), i.length ? [i.data("dt-column")] : []))
                    }, n, o)
                }, 1);
            return s.selector.cols = e, s.selector.opts = i, s
        }), Ut("columns().header()", "column().header()", function() { return this.iterator("column", function(t, e) { return t.aoColumns[e].nTh }, 1) }), Ut("columns().footer()", "column().footer()", function() { return this.iterator("column", function(t, e) { return t.aoColumns[e].nTf }, 1) }), Ut("columns().data()", "column().data()", function() { return this.iterator("column-rows", Ee, 1) }), Ut("columns().dataSrc()", "column().dataSrc()", function() { return this.iterator("column", function(t, e) { return t.aoColumns[e].mData }, 1) }), Ut("columns().cache()", "column().cache()", function(t) { return this.iterator("column-rows", function(e, i, n, s, o) { return oe(e.aoData, o, "search" === t ? "_aFilterData" : "_aSortData", i) }, 1) }), Ut("columns().nodes()", "column().nodes()", function() { return this.iterator("column-rows", function(t, e, i, n, s) { return oe(t.aoData, s, "anCells", e) }, 1) }), Ut("columns().visible()", "column().visible()", function(e, i) {
            var s = this.iterator("column", function(i, s) {
                if (e === n) return i.aoColumns[s].bVisible;
                var o, r, a, l = i.aoColumns,
                    c = l[s],
                    u = i.aoData;
                if (e !== n && c.bVisible !== e) {
                    if (e) { var h = t.inArray(!0, se(l, "bVisible"), s + 1); for (o = 0, r = u.length; o < r; o++) a = u[o].nTr, l = u[o].anCells, a && a.insertBefore(l[s], l[h] || null) } else t(se(i.aoData, "anCells", s)).detach();
                    c.bVisible = e, H(i, i.aoHeader), H(i, i.aoFooter), i.aiDisplay.length || t(i.nTBody).find("td[colspan]").attr("colspan", g(i)), Dt(i)
                }
            });
            return e !== n && (this.iterator("column", function(t, n) { Ht(t, null, "column-visibility", [t, n, e, i]) }), (i === n || i) && this.columns.adjust()), s
        }), Ut("columns().indexes()", "column().index()", function(t) { return this.iterator("column", function(e, i) { return "visible" === t ? m(e, i) : i }, 1) }), Bt("columns.adjust()", function() { return this.iterator("table", function(t) { p(t) }, 1) }), Bt("column.index()", function(t, e) { if (0 !== this.context.length) { var i = this.context[0]; if ("fromVisible" === t || "toData" === t) return f(i, e); if ("fromData" === t || "toVisible" === t) return m(i, e) } }), Bt("column()", function(t, e) { return xe(this.columns(t, e)) }), Bt("cells()", function(e, i, s) {
            if (t.isPlainObject(e) && (e.row === n ? (s = e, e = null) : (s = i, i = null)), t.isPlainObject(i) && (s = i, i = null), null === i || i === n) return this.iterator("table", function(i) {
                var o, r, a, l, c, u, h, d = e,
                    p = Ce(s),
                    f = i.aoData,
                    m = Te(i, p),
                    g = ae(oe(f, m, "anCells")),
                    v = t([].concat.apply([], g)),
                    _ = i.aoColumns.length;
                return we("cell", d, function(e) {
                    var s = "function" == typeof e;
                    if (null === e || e === n || s) {
                        for (r = [], a = 0, l = m.length; a < l; a++)
                            for (o = m[a], c = 0; c < _; c++) u = { row: o, column: c }, s ? (h = f[o], e(u, C(i, o, c), h.anCells ? h.anCells[c] : null) && r.push(u)) : r.push(u);
                        return r
                    }
                    return t.isPlainObject(e) ? e.column !== n && e.row !== n && -1 !== t.inArray(e.row, m) ? [e] : [] : (s = v.filter(e).map(function(t, e) { return { row: e._DT_CellIndex.row, column: e._DT_CellIndex.column } }).toArray(), s.length || !e.nodeName ? s : (h = t(e).closest("*[data-dt-row]"), h.length ? [{ row: h.data("dt-row"), column: h.data("dt-column") }] : []))
                }, i, p)
            });
            var o, r, a, l, c, u = this.columns(i),
                h = this.rows(e);
            this.iterator("table", function(t, e) {
                for (o = [], r = 0, a = h[e].length; r < a; r++)
                    for (l = 0, c = u[e].length; l < c; l++) o.push({ row: h[e][r], column: u[e][l] })
            }, 1);
            var d = this.cells(o, s);
            return t.extend(d.selector, { cols: i, rows: e, opts: s }), d
        }), Ut("cells().nodes()", "cell().node()", function() { return this.iterator("cell", function(t, e, i) { return (t = t.aoData[e]) && t.anCells ? t.anCells[i] : n }, 1) }), Bt("cells().data()", function() { return this.iterator("cell", function(t, e, i) { return C(t, e, i) }, 1) }), Ut("cells().cache()", "cell().cache()", function(t) { return t = "search" === t ? "_aFilterData" : "_aSortData", this.iterator("cell", function(e, i, n) { return e.aoData[i][t][n] }, 1) }), Ut("cells().render()", "cell().render()", function(t) { return this.iterator("cell", function(e, i, n) { return C(e, i, n, t) }, 1) }), Ut("cells().indexes()", "cell().index()", function() { return this.iterator("cell", function(t, e, i) { return { row: e, column: i, columnVisible: m(t, i) } }, 1) }), Ut("cells().invalidate()", "cell().invalidate()", function(t) { return this.iterator("cell", function(e, i, n) { P(e, i, t, n) }) }), Bt("cell()", function(t, e, i) { return xe(this.cells(t, e, i)) }), Bt("cell().data()", function(t) {
            var e = this.context,
                i = this[0];
            return t === n ? e.length && i.length ? C(e[0], i[0].row, i[0].column) : n : (x(e[0], i[0].row, i[0].column, t), P(e[0], i[0].row, "data", i[0].column), this)
        }), Bt("order()", function(e, i) {
            var s = this.context;
            return e === n ? 0 !== s.length ? s[0].aaSorting : n : ("number" == typeof e ? e = [
                [e, i]
            ] : e.length && !t.isArray(e[0]) && (e = Array.prototype.slice.call(arguments)), this.iterator("table", function(t) { t.aaSorting = e.slice() }))
        }), Bt("order.listener()", function(t, e, i) { return this.iterator("table", function(n) { Tt(n, t, e, i) }) }), Bt("order.fixed()", function(e) {
            if (!e) {
                var i = this.context,
                    i = i.length ? i[0].aaSortingFixed : n;
                return t.isArray(i) ? { pre: i } : i
            }
            return this.iterator("table", function(i) { i.aaSortingFixed = t.extend(!0, {}, e) })
        }), Bt(["columns().order()", "column().order()"], function(e) {
            var i = this;
            return this.iterator("table", function(n, s) {
                var o = [];
                t.each(i[s], function(t, i) { o.push([i, e]) }), n.aaSorting = o
            })
        }), Bt("search()", function(e, i, s, o) { var r = this.context; return e === n ? 0 !== r.length ? r[0].oPreviousSearch.sSearch : n : this.iterator("table", function(n) { n.oFeatures.bFilter && V(n, t.extend({}, n.oPreviousSearch, { sSearch: e + "", bRegex: null !== i && i, bSmart: null === s || s, bCaseInsensitive: null === o || o }), 1) }) }), Ut("columns().search()", "column().search()", function(e, i, s, o) {
            return this.iterator("column", function(r, a) {
                var l = r.aoPreSearchCols;
                if (e === n) return l[a].sSearch;
                r.oFeatures.bFilter && (t.extend(l[a], { sSearch: e + "", bRegex: null !== i && i, bSmart: null === s || s, bCaseInsensitive: null === o || o }), V(r, r.oPreviousSearch, 1))
            })
        }), Bt("state()", function() { return this.context.length ? this.context[0].oSavedState : null }), Bt("state.clear()", function() { return this.iterator("table", function(t) { t.fnStateSaveCallback.call(t.oInstance, t, {}) }) }), Bt("state.loaded()", function() { return this.context.length ? this.context[0].oLoadedState : null }), Bt("state.save()", function() { return this.iterator("table", function(t) { Dt(t) }) }), Yt.versionCheck = Yt.fnVersionCheck = function(t) {
            for (var e, i, n = Yt.version.split("."), t = t.split("."), s = 0, o = t.length; s < o; s++)
                if (e = parseInt(n[s], 10) || 0, i = parseInt(t[s], 10) || 0, e !== i) return e > i;
            return !0
        }, Yt.isDataTable = Yt.fnIsDataTable = function(e) {
            var i = t(e).get(0),
                n = !1;
            return e instanceof Yt.Api || (t.each(Yt.settings, function(e, s) {
                var o = s.nScrollHead ? t("table", s.nScrollHead)[0] : null,
                    r = s.nScrollFoot ? t("table", s.nScrollFoot)[0] : null;
                s.nTable !== i && o !== i && r !== i || (n = !0)
            }), n)
        }, Yt.tables = Yt.fnTables = function(e) {
            var i = !1;
            t.isPlainObject(e) && (i = e.api, e = e.visible);
            var n = t.map(Yt.settings, function(i) { if (!e || e && t(i.nTable).is(":visible")) return i.nTable });
            return i ? new qt(n) : n
        }, Yt.camelToHungarian = o, Bt("$()", function(e, i) {
            var n = this.rows(i).nodes(),
                n = t(n);
            return t([].concat(n.filter(e).toArray(), n.find(e).toArray()))
        }), t.each(["on", "one", "off"], function(e, i) {
            Bt(i + "()", function() {
                var e = Array.prototype.slice.call(arguments);
                e[0] = t.map(e[0].split(/\s/), function(t) { return t.match(/\.dt\b/) ? t : t + ".dt" }).join(" ");
                var n = t(this.tables().nodes());
                return n[i].apply(n, e), this
            })
        }), Bt("clear()", function() { return this.iterator("table", function(t) { E(t) }) }), Bt("settings()", function() { return new qt(this.context, this.context) }), Bt("init()", function() { var t = this.context; return t.length ? t[0].oInit : null }), Bt("data()", function() { return this.iterator("table", function(t) { return se(t.aoData, "_aData") }).flatten() }), Bt("destroy()", function(i) {
            return i = i || !1, this.iterator("table", function(n) {
                var s, o = n.nTableWrapper.parentNode,
                    r = n.oClasses,
                    a = n.nTable,
                    l = n.nTBody,
                    c = n.nTHead,
                    u = n.nTFoot,
                    h = t(a),
                    l = t(l),
                    d = t(n.nTableWrapper),
                    p = t.map(n.aoData, function(t) { return t.nTr });
                n.bDestroying = !0, Ht(n, "aoDestroyCallback", "destroy", [n]), i || new qt(n).columns().visible(!0), d.off(".DT").find(":not(tbody *)").off(".DT"), t(e).off(".DT-" + n.sInstance), a != c.parentNode && (h.children("thead").detach(), h.append(c)), u && a != u.parentNode && (h.children("tfoot").detach(), h.append(u)), n.aaSorting = [], n.aaSortingFixed = [], St(n), t(p).removeClass(n.asStripeClasses.join(" ")), t("th, td", c).removeClass(r.sSortable + " " + r.sSortableAsc + " " + r.sSortableDesc + " " + r.sSortableNone), l.children().detach(), l.append(p), c = i ? "remove" : "detach", h[c](), d[c](), !i && o && (o.insertBefore(a, n.nTableReinsertBefore), h.css("width", n.sDestroyWidth).removeClass(r.sTable), (s = n.asDestroyStripes.length) && l.children().each(function(e) { t(this).addClass(n.asDestroyStripes[e % s]) })), -1 !== (o = t.inArray(n, Yt.settings)) && Yt.settings.splice(o, 1)
            })
        }), t.each(["column", "row", "cell"], function(t, e) {
            Bt(e + "s().every()", function(t) {
                var i = this.selector.opts,
                    s = this;
                return this.iterator(e, function(o, r, a, l, c) { t.call(s[e](r, "cell" === e ? a : i, "cell" === e ? i : n), r, a, l, c) })
            })
        }), Bt("i18n()", function(e, i, s) {
            var o = this.context[0],
                e = S(e)(o.oLanguage);
            return e === n && (e = i), s !== n && t.isPlainObject(e) && (e = e[s] !== n ? e[s] : e._), e.replace("%d", s)
        }), Yt.version = "1.10.18", Yt.settings = [], Yt.models = {}, Yt.models.oSearch = { bCaseInsensitive: !0, sSearch: "", bRegex: !1, bSmart: !0 }, Yt.models.oRow = { nTr: null, anCells: null, _aData: [], _aSortData: null, _aFilterData: null, _sFilterRow: null, _sRowStripe: "", src: null, idx: -1 }, Yt.models.oColumn = { idx: null, aDataSort: null, asSorting: null, bSearchable: null, bSortable: null, bVisible: null, _sManualType: null, _bAttrSrc: !1, fnCreatedCell: null, fnGetData: null, fnSetData: null, mData: null, mRender: null, nTh: null, nTf: null, sClass: null, sContentPadding: null, sDefaultContent: null, sName: null, sSortDataType: "std", sSortingClass: null, sSortingClassJUI: null, sTitle: null, sType: null, sWidth: null, sWidthOrig: null }, Yt.defaults = {
            aaData: null,
            aaSorting: [
                [0, "asc"]
            ],
            aaSortingFixed: [],
            ajax: null,
            aLengthMenu: [10, 25, 50, 100],
            aoColumns: null,
            aoColumnDefs: null,
            aoSearchCols: [],
            asStripeClasses: null,
            bAutoWidth: !0,
            bDeferRender: !1,
            bDestroy: !1,
            bFilter: !0,
            bInfo: !0,
            bLengthChange: !0,
            bPaginate: !0,
            bProcessing: !1,
            bRetrieve: !1,
            bScrollCollapse: !1,
            bServerSide: !1,
            bSort: !0,
            bSortMulti: !0,
            bSortCellsTop: !1,
            bSortClasses: !0,
            bStateSave: !1,
            fnCreatedRow: null,
            fnDrawCallback: null,
            fnFooterCallback: null,
            fnFormatNumber: function(t) { return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands) },
            fnHeaderCallback: null,
            fnInfoCallback: null,
            fnInitComplete: null,
            fnPreDrawCallback: null,
            fnRowCallback: null,
            fnServerData: null,
            fnServerParams: null,
            fnStateLoadCallback: function(t) { try { return JSON.parse((-1 === t.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + t.sInstance + "_" + location.pathname)) } catch (t) {} },
            fnStateLoadParams: null,
            fnStateLoaded: null,
            fnStateSaveCallback: function(t, e) {
                try {
                    (-1 === t.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + t.sInstance + "_" + location.pathname, JSON.stringify(e))
                } catch (t) {}
            },
            fnStateSaveParams: null,
            iStateDuration: 7200,
            iDeferLoading: null,
            iDisplayLength: 10,
            iDisplayStart: 0,
            iTabIndex: 0,
            oClasses: {},
            oLanguage: { oAria: { sSortAscending: ": activate to sort column ascending", sSortDescending: ": activate to sort column descending" }, oPaginate: { sFirst: "First", sLast: "Last", sNext: "Next", sPrevious: "Previous" }, sEmptyTable: "No data available in table", sInfo: "Showing _START_ to _END_ of _TOTAL_ entries", sInfoEmpty: "Showing 0 to 0 of 0 entries", sInfoFiltered: "(filtered from _MAX_ total entries)", sInfoPostFix: "", sDecimal: "", sThousands: ",", sLengthMenu: "Show _MENU_ entries", sLoadingRecords: "Loading...", sProcessing: "Processing...", sSearch: "Search:", sSearchPlaceholder: "", sUrl: "", sZeroRecords: "No matching records found" },
            oSearch: t.extend({}, Yt.models.oSearch),
            sAjaxDataProp: "data",
            sAjaxSource: null,
            sDom: "lfrtip",
            searchDelay: null,
            sPaginationType: "simple_numbers",
            sScrollX: "",
            sScrollXInner: "",
            sScrollY: "",
            sServerMethod: "GET",
            renderer: null,
            rowId: "DT_RowId"
        }, s(Yt.defaults), Yt.defaults.column = { aDataSort: null, iDataSort: -1, asSorting: ["asc", "desc"], bSearchable: !0, bSortable: !0, bVisible: !0, fnCreatedCell: null, mData: null, mRender: null, sCellType: "td", sClass: "", sContentPadding: "", sDefaultContent: null, sName: "", sSortDataType: "std", sTitle: null, sType: null, sWidth: null }, s(Yt.defaults.column), Yt.models.oSettings = {
            oFeatures: { bAutoWidth: null, bDeferRender: null, bFilter: null, bInfo: null, bLengthChange: null, bPaginate: null, bProcessing: null, bServerSide: null, bSort: null, bSortMulti: null, bSortClasses: null, bStateSave: null },
            oScroll: { bCollapse: null, iBarWidth: 0, sX: null, sXInner: null, sY: null },
            oLanguage: { fnInfoCallback: null },
            oBrowser: { bScrollOversize: !1, bScrollbarLeft: !1, bBounding: !1, barWidth: 0 },
            ajax: null,
            aanFeatures: [],
            aoData: [],
            aiDisplay: [],
            aiDisplayMaster: [],
            aIds: {},
            aoColumns: [],
            aoHeader: [],
            aoFooter: [],
            oPreviousSearch: {},
            aoPreSearchCols: [],
            aaSorting: null,
            aaSortingFixed: [],
            asStripeClasses: null,
            asDestroyStripes: [],
            sDestroyWidth: 0,
            aoRowCallback: [],
            aoHeaderCallback: [],
            aoFooterCallback: [],
            aoDrawCallback: [],
            aoRowCreatedCallback: [],
            aoPreDrawCallback: [],
            aoInitComplete: [],
            aoStateSaveParams: [],
            aoStateLoadParams: [],
            aoStateLoaded: [],
            sTableId: "",
            nTable: null,
            nTHead: null,
            nTFoot: null,
            nTBody: null,
            nTableWrapper: null,
            bDeferLoading: !1,
            bInitialised: !1,
            aoOpenRows: [],
            sDom: null,
            searchDelay: null,
            sPaginationType: "two_button",
            iStateDuration: 0,
            aoStateSave: [],
            aoStateLoad: [],
            oSavedState: null,
            oLoadedState: null,
            sAjaxSource: null,
            sAjaxDataProp: null,
            bAjaxDataGet: !0,
            jqXHR: null,
            json: n,
            oAjaxData: n,
            fnServerData: null,
            aoServerParams: [],
            sServerMethod: null,
            fnFormatNumber: null,
            aLengthMenu: null,
            iDraw: 0,
            bDrawing: !1,
            iDrawError: -1,
            _iDisplayLength: 10,
            _iDisplayStart: 0,
            _iRecordsTotal: 0,
            _iRecordsDisplay: 0,
            oClasses: {},
            bFiltered: !1,
            bSorted: !1,
            bSortCellsTop: null,
            oInit: null,
            aoDestroyCallback: [],
            fnRecordsTotal: function() { return "ssp" == zt(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length },
            fnRecordsDisplay: function() { return "ssp" == zt(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length },
            fnDisplayEnd: function() {
                var t = this._iDisplayLength,
                    e = this._iDisplayStart,
                    i = e + t,
                    n = this.aiDisplay.length,
                    s = this.oFeatures,
                    o = s.bPaginate;
                return s.bServerSide ? !1 === o || -1 === t ? e + n : Math.min(e + t, this._iRecordsDisplay) : !o || i > n || -1 === t ? n : i
            },
            oInstance: null,
            sInstance: null,
            iTabIndex: 0,
            nScrollHead: null,
            nScrollFoot: null,
            aLastSort: [],
            oPlugins: {},
            rowIdFn: null,
            rowId: null
        }, Yt.ext = Wt = { buttons: {}, classes: {}, build: "bs4/dt-1.10.18/r-2.2.2", errMode: "alert", feature: [], search: [], selector: { cell: [], column: [], row: [] }, internal: {}, legacy: { ajax: null }, pager: {}, renderer: { pageButton: {}, header: {} }, order: {}, type: { detect: [], search: {}, order: {} }, _unique: 0, fnVersionCheck: Yt.fnVersionCheck, iApiIndex: 0, oJUIClasses: {}, sVersion: Yt.version }, t.extend(Wt, { afnFiltering: Wt.search, aTypes: Wt.type.detect, ofnSearch: Wt.type.search, oSort: Wt.type.order, afnSortData: Wt.order, aoFeatures: Wt.feature, oApi: Wt.internal, oStdClasses: Wt.classes, oPagination: Wt.pager }), t.extend(Yt.ext.classes, { sTable: "dataTable", sNoFooter: "no-footer", sPageButton: "paginate_button", sPageButtonActive: "current", sPageButtonDisabled: "disabled", sStripeOdd: "odd", sStripeEven: "even", sRowEmpty: "dataTables_empty", sWrapper: "dataTables_wrapper", sFilter: "dataTables_filter", sInfo: "dataTables_info", sPaging: "dataTables_paginate paging_", sLength: "dataTables_length", sProcessing: "dataTables_processing", sSortAsc: "sorting_asc", sSortDesc: "sorting_desc", sSortable: "sorting", sSortableAsc: "sorting_asc_disabled", sSortableDesc: "sorting_desc_disabled", sSortableNone: "sorting_disabled", sSortColumn: "sorting_", sFilterInput: "", sLengthSelect: "", sScrollWrapper: "dataTables_scroll", sScrollHead: "dataTables_scrollHead", sScrollHeadInner: "dataTables_scrollHeadInner", sScrollBody: "dataTables_scrollBody", sScrollFoot: "dataTables_scrollFoot", sScrollFootInner: "dataTables_scrollFootInner", sHeaderTH: "", sFooterTH: "", sSortJUIAsc: "", sSortJUIDesc: "", sSortJUI: "", sSortJUIAscAllowed: "", sSortJUIDescAllowed: "", sSortJUIWrapper: "", sSortIcon: "", sJUIHeader: "", sJUIFooter: "" });
        var Ie = Yt.ext.pager;
        t.extend(Ie, { simple: function() { return ["previous", "next"] }, full: function() { return ["first", "previous", "next", "last"] }, numbers: function(t, e) { return [jt(t, e)] }, simple_numbers: function(t, e) { return ["previous", jt(t, e), "next"] }, full_numbers: function(t, e) { return ["first", "previous", jt(t, e), "next", "last"] }, first_last_numbers: function(t, e) { return ["first", jt(t, e), "last"] }, _numbers: jt, numbers_length: 7 }), t.extend(!0, Yt.ext.renderer, {
            pageButton: {
                _: function(e, s, o, r, a, l) {
                    var c, u, h, d = e.oClasses,
                        p = e.oLanguage.oPaginate,
                        f = e.oLanguage.oAria.paginate || {},
                        m = 0,
                        g = function(i, n) {
                            var s, r, h, v, _ = function(t) { ct(e, t.data.action, !0) };
                            for (s = 0, r = n.length; s < r; s++)
                                if (v = n[s], t.isArray(v)) h = t("<" + (v.DT_el || "div") + "/>").appendTo(i), g(h, v);
                                else {
                                    switch (c = null, u = "", v) {
                                        case "ellipsis":
                                            i.append('<span class="ellipsis">&#x2026;</span>');
                                            break;
                                        case "first":
                                            c = p.sFirst, u = v + (a > 0 ? "" : " " + d.sPageButtonDisabled);
                                            break;
                                        case "previous":
                                            c = p.sPrevious, u = v + (a > 0 ? "" : " " + d.sPageButtonDisabled);
                                            break;
                                        case "next":
                                            c = p.sNext, u = v + (a < l - 1 ? "" : " " + d.sPageButtonDisabled);
                                            break;
                                        case "last":
                                            c = p.sLast, u = v + (a < l - 1 ? "" : " " + d.sPageButtonDisabled);
                                            break;
                                        default:
                                            c = v + 1, u = a === v ? d.sPageButtonActive : ""
                                    }
                                    null !== c && (h = t("<a>", { class: d.sPageButton + " " + u, "aria-controls": e.sTableId, "aria-label": f[v], "data-dt-idx": m, tabindex: e.iTabIndex, id: 0 === o && "string" == typeof v ? e.sTableId + "_" + v : null }).html(c).appendTo(i), Nt(h, { action: v }, _), m++)
                                }
                        };
                    try { h = t(s).find(i.activeElement).data("dt-idx") } catch (t) {}
                    g(t(s).empty(), r), h !== n && t(s).find("[data-dt-idx=" + h + "]").focus()
                }
            }
        }), t.extend(Yt.ext.type.detect, [function(t, e) { var i = e.oLanguage.sDecimal; return ie(t, i) ? "num" + i : null }, function(t) { if (t && !(t instanceof Date) && !Qt.test(t)) return null; var e = Date.parse(t); return null !== e && !isNaN(e) || Zt(t) ? "date" : null }, function(t, e) { var i = e.oLanguage.sDecimal; return ie(t, i, !0) ? "num-fmt" + i : null }, function(t, e) { var i = e.oLanguage.sDecimal; return ne(t, i) ? "html-num" + i : null }, function(t, e) { var i = e.oLanguage.sDecimal; return ne(t, i, !0) ? "html-num-fmt" + i : null }, function(t) { return Zt(t) || "string" == typeof t && -1 !== t.indexOf("<") ? "html" : null }]), t.extend(Yt.ext.type.search, { html: function(t) { return Zt(t) ? t : "string" == typeof t ? t.replace(Xt, " ").replace(Kt, "") : "" }, string: function(t) { return Zt(t) ? t : "string" == typeof t ? t.replace(Xt, " ") : t } });
        var Pe = function(t, e, i, n) { return 0 === t || t && "-" !== t ? (e && (t = ee(t, e)), t.replace && (i && (t = t.replace(i, "")), n && (t = t.replace(n, ""))), 1 * t) : -1 / 0 };
        t.extend(Wt.type.order, { "date-pre": function(t) { return t = Date.parse(t), isNaN(t) ? -1 / 0 : t }, "html-pre": function(t) { return Zt(t) ? "" : t.replace ? t.replace(/<.*?>/g, "").toLowerCase() : t + "" }, "string-pre": function(t) { return Zt(t) ? "" : "string" == typeof t ? t.toLowerCase() : t.toString ? t.toString() : "" }, "string-asc": function(t, e) { return t < e ? -1 : t > e ? 1 : 0 }, "string-desc": function(t, e) { return t < e ? 1 : t > e ? -1 : 0 } }), Ft(""), t.extend(!0, Yt.ext.renderer, { header: { _: function(e, i, n, s) { t(e.nTable).on("order.dt.DT", function(t, o, r, a) { e === o && (t = n.idx, i.removeClass(n.sSortingClass + " " + s.sSortAsc + " " + s.sSortDesc).addClass("asc" == a[t] ? s.sSortAsc : "desc" == a[t] ? s.sSortDesc : n.sSortingClass)) }) }, jqueryui: function(e, i, n, s) { t("<div/>").addClass(s.sSortJUIWrapper).append(i.contents()).append(t("<span/>").addClass(s.sSortIcon + " " + n.sSortingClassJUI)).appendTo(i), t(e.nTable).on("order.dt.DT", function(t, o, r, a) { e === o && (t = n.idx, i.removeClass(s.sSortAsc + " " + s.sSortDesc).addClass("asc" == a[t] ? s.sSortAsc : "desc" == a[t] ? s.sSortDesc : n.sSortingClass), i.find("span." + s.sSortIcon).removeClass(s.sSortJUIAsc + " " + s.sSortJUIDesc + " " + s.sSortJUI + " " + s.sSortJUIAscAllowed + " " + s.sSortJUIDescAllowed).addClass("asc" == a[t] ? s.sSortJUIAsc : "desc" == a[t] ? s.sSortJUIDesc : n.sSortingClassJUI)) }) } } });
        var Ae = function(t) { return "string" == typeof t ? t.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : t };
        return Yt.render = {
            number: function(t, e, i, n, s) {
                return {
                    display: function(o) {
                        if ("number" != typeof o && "string" != typeof o) return o;
                        var r = 0 > o ? "-" : "",
                            a = parseFloat(o);
                        return isNaN(a) ? Ae(o) : (a = a.toFixed(i), o = Math.abs(a), a = parseInt(o, 10), o = i ? e + (o - a).toFixed(i).substring(2) : "", r + (n || "") + a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, t) + o + (s || ""))
                    }
                }
            },
            text: function() { return { display: Ae } }
        }, t.extend(Yt.ext.internal, { _fnExternApiFunc: Rt, _fnBuildAjax: R, _fnAjaxUpdate: W, _fnAjaxParameters: q, _fnAjaxUpdateDraw: B, _fnAjaxDataSrc: U, _fnAddColumn: h, _fnColumnOptions: d, _fnAdjustColumnSizing: p, _fnVisibleToColumnIndex: f, _fnColumnIndexToVisible: m, _fnVisbleColumns: g, _fnGetColumns: v, _fnColumnTypes: _, _fnApplyColumnDefs: y, _fnHungarianMap: s, _fnCamelToHungarian: o, _fnLanguageCompat: r, _fnBrowserDetect: c, _fnAddData: b, _fnAddTr: w, _fnNodeToDataIndex: function(t, e) { return e._DT_RowIndex !== n ? e._DT_RowIndex : null }, _fnNodeToColumnIndex: function(e, i, n) { return t.inArray(n, e.aoData[i].anCells) }, _fnGetCellData: C, _fnSetCellData: x, _fnSplitObjNotation: T, _fnGetObjectDataFn: S, _fnSetObjectDataFn: k, _fnGetDataMaster: D, _fnClearTable: E, _fnDeleteIndex: I, _fnInvalidate: P, _fnGetRowElements: A, _fnCreateTr: O, _fnBuildHead: M, _fnDrawHead: H, _fnDraw: $, _fnReDraw: L, _fnAddOptionsHtml: z, _fnDetectHeader: j, _fnGetUniqueThs: F, _fnFeatureHtmlFilter: Y, _fnFilterComplete: V, _fnFilterCustom: X, _fnFilterColumn: K, _fnFilter: Q, _fnFilterCreateSearch: G, _fnEscapeRegex: de, _fnFilterData: J, _fnFeatureHtmlInfo: et, _fnUpdateInfo: it, _fnInfoMacros: nt, _fnInitialise: st, _fnInitComplete: ot, _fnLengthChange: rt, _fnFeatureHtmlLength: at, _fnFeatureHtmlPaginate: lt, _fnPageChange: ct, _fnFeatureHtmlProcessing: ut, _fnProcessingDisplay: ht, _fnFeatureHtmlTable: dt, _fnScrollDraw: pt, _fnApplyToChildren: ft, _fnCalculateColumnWidths: mt, _fnThrottle: ge, _fnConvertToWidth: gt, _fnGetWidestNode: vt, _fnGetMaxLenString: _t, _fnStringToCss: yt, _fnSortFlatten: bt, _fnSort: wt, _fnSortAria: Ct, _fnSortListener: xt, _fnSortAttachListener: Tt, _fnSortingClasses: St, _fnSortData: kt, _fnSaveState: Dt, _fnLoadState: Et, _fnSettingsFromNode: It, _fnLog: Pt, _fnMap: At, _fnBindAction: Nt, _fnCallbackReg: Mt, _fnCallbackFire: Ht, _fnLengthOverflow: $t, _fnRenderer: Lt, _fnDataSource: zt, _fnRowAttributes: N, _fnExtend: Ot, _fnCalculateEnd: function() {} }), t.fn.dataTable = Yt, Yt.$ = t, t.fn.dataTableSettings = Yt.settings, t.fn.dataTableExt = Yt.ext, t.fn.DataTable = function(e) { return t(this).dataTable(e).api() }, t.each(Yt, function(e, i) { t.fn.DataTable[e] = i }), t.fn.dataTable
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "datatables.net"], function(e) { return t(e, window, document) }) : "object" == typeof exports ? module.exports = function(e, i) { return e || (e = window), i && i.fn.dataTable || (i = require("datatables.net")(e, i).$), t(i, e, e.document) } : t(jQuery, window, document)
    }(function(t, e, i, n) {
        var s = t.fn.dataTable;
        return t.extend(!0, s.defaults, { dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>", renderer: "bootstrap" }), t.extend(s.ext.classes, { sWrapper: "dataTables_wrapper dt-bootstrap4", sFilterInput: "form-control form-control-sm", sLengthSelect: "custom-select custom-select-sm form-control form-control-sm", sProcessing: "dataTables_processing card", sPageButton: "paginate_button page-item" }), s.ext.renderer.pageButton.bootstrap = function(e, o, r, a, l, c) {
            var u, h, d, p = new s.Api(e),
                f = e.oClasses,
                m = e.oLanguage.oPaginate,
                g = e.oLanguage.oAria.paginate || {},
                v = 0,
                _ = function(i, n) {
                    var s, o, a, d, y = function(e) { e.preventDefault(), !t(e.currentTarget).hasClass("disabled") && p.page() != e.data.action && p.page(e.data.action).draw("page") };
                    for (s = 0, o = n.length; s < o; s++)
                        if (d = n[s], t.isArray(d)) _(i, d);
                        else {
                            switch (h = u = "", d) {
                                case "ellipsis":
                                    u = "&#x2026;", h = "disabled";
                                    break;
                                case "first":
                                    u = m.sFirst, h = d + (0 < l ? "" : " disabled");
                                    break;
                                case "previous":
                                    u = m.sPrevious, h = d + (0 < l ? "" : " disabled");
                                    break;
                                case "next":
                                    u = m.sNext, h = d + (l < c - 1 ? "" : " disabled");
                                    break;
                                case "last":
                                    u = m.sLast, h = d + (l < c - 1 ? "" : " disabled");
                                    break;
                                default:
                                    u = d + 1, h = l === d ? "active" : ""
                            }
                            u && (a = t("<li>", { class: f.sPageButton + " " + h, id: 0 === r && "string" == typeof d ? e.sTableId + "_" + d : null }).append(t("<a>", { href: "#", "aria-controls": e.sTableId, "aria-label": g[d], "data-dt-idx": v, tabindex: e.iTabIndex, class: "page-link" }).html(u)).appendTo(i), e.oApi._fnBindAction(a, { action: d }, y), v++)
                        }
                };
            try { d = t(o).find(i.activeElement).data("dt-idx") } catch (t) {}
            _(t(o).empty().html('<ul class="pagination"/>').children("ul"), a), d !== n && t(o).find("[data-dt-idx=" + d + "]").focus()
        }, s
    }),
    function(t) { "function" == typeof define && define.amd ? define(["jquery", "datatables.net"], function(e) { return t(e, window, document) }) : "object" == typeof exports ? module.exports = function(e, i) { return e || (e = window), i && i.fn.dataTable || (i = require("datatables.net")(e, i).$), t(i, e, e.document) } : t(jQuery, window, document) }(function(t, e, i, n) {
        function s(t, e, i) { var n = e + "-" + i; if (l[n]) return l[n]; for (var s = [], t = t.cell(e, i).node().childNodes, e = 0, i = t.length; e < i; e++) s.push(t[e]); return l[n] = s }

        function o(t, e, i) {
            var s = e + "-" + i;
            if (l[s]) {
                for (var t = t.cell(e, i).node(), i = l[s][0].parentNode.childNodes, e = [], o = 0, r = i.length; o < r; o++) e.push(i[o]);
                for (i = 0, o = e.length; i < o; i++) t.appendChild(e[i]);
                l[s] = n
            }
        }
        var r = t.fn.dataTable,
            a = function(e, i) {
                if (!r.versionCheck || !r.versionCheck("1.10.10")) throw "DataTables Responsive requires DataTables 1.10.10 or newer";
                this.s = { dt: new r.Api(e), columns: [], current: [] }, this.s.dt.settings()[0].responsive || (i && "string" == typeof i.details ? i.details = { type: i.details } : i && !1 === i.details ? i.details = { type: !1 } : i && !0 === i.details && (i.details = { type: "inline" }), this.c = t.extend(!0, {}, a.defaults, r.defaults.responsive, i), e.responsive = this, this._constructor())
            };
        t.extend(a.prototype, {
            _constructor: function() {
                var i = this,
                    n = this.s.dt,
                    s = n.settings()[0],
                    o = t(e).width();
                n.settings()[0]._responsive = this, t(e).on("resize.dtr orientationchange.dtr", r.util.throttle(function() {
                    var n = t(e).width();
                    n !== o && (i._resize(), o = n)
                })), s.oApi._fnCallbackReg(s, "aoRowCreatedCallback", function(e) {-1 !== t.inArray(!1, i.s.current) && t(">td, >th", e).each(function(e) { e = n.column.index("toData", e), !1 === i.s.current[e] && t(this).css("display", "none") }) }), n.on("destroy.dtr", function() { n.off(".dtr"), t(n.table().body()).off(".dtr"), t(e).off("resize.dtr orientationchange.dtr"), t.each(i.s.current, function(t, e) {!1 === e && i._setColumnVis(t, !0) }) }), this.c.breakpoints.sort(function(t, e) { return t.width < e.width ? 1 : t.width > e.width ? -1 : 0 }), this._classLogic(), this._resizeAuto(), s = this.c.details, !1 !== s.type && (i._detailsInit(), n.on("column-visibility.dtr", function() { i._timer && clearTimeout(i._timer), i._timer = setTimeout(function() { i._timer = null, i._classLogic(), i._resizeAuto(), i._resize(), i._redrawChildren() }, 100) }), n.on("draw.dtr", function() { i._redrawChildren() }), t(n.table().node()).addClass("dtr-" + s.type)), n.on("column-reorder.dtr", function() { i._classLogic(), i._resizeAuto(), i._resize() }), n.on("column-sizing.dtr", function() { i._resizeAuto(), i._resize() }), n.on("preXhr.dtr", function() {
                    var t = [];
                    n.rows().every(function() { this.child.isShown() && t.push(this.id(!0)) }), n.one("draw.dtr", function() { i._resizeAuto(), i._resize(), n.rows(t).every(function() { i._detailsDisplay(this, !1) }) })
                }), n.on("init.dtr", function() { i._resizeAuto(), i._resize(), t.inArray(!1, i.s.current) && n.columns.adjust() }), this._resize()
            },
            _columnsVisiblity: function(e) {
                var i, n, s = this.s.dt,
                    o = this.s.columns,
                    r = o.map(function(t, e) { return { columnIdx: e, priority: t.priority } }).sort(function(t, e) { return t.priority !== e.priority ? t.priority - e.priority : t.columnIdx - e.columnIdx }),
                    a = t.map(o, function(i, n) { return !1 === s.column(n).visible() ? "not-visible" : (!i.auto || null !== i.minWidth) && (!0 === i.auto ? "-" : -1 !== t.inArray(e, i.includeIn)) }),
                    l = 0;
                for (i = 0, n = a.length; i < n; i++) !0 === a[i] && (l += o[i].minWidth);
                for (i = s.settings()[0].oScroll, i = i.sY || i.sX ? i.iBarWidth : 0, l = s.table().container().offsetWidth - i - l, i = 0, n = a.length; i < n; i++) o[i].control && (l -= o[i].minWidth);
                var c = !1;
                for (i = 0, n = r.length; i < n; i++) { var u = r[i].columnIdx; "-" === a[u] && !o[u].control && o[u].minWidth && (c || 0 > l - o[u].minWidth ? (c = !0, a[u] = !1) : a[u] = !0, l -= o[u].minWidth) }
                for (r = !1, i = 0, n = o.length; i < n; i++)
                    if (!o[i].control && !o[i].never && !1 === a[i]) { r = !0; break }
                for (i = 0, n = o.length; i < n; i++) o[i].control && (a[i] = r), "not-visible" === a[i] && (a[i] = !1);
                return -1 === t.inArray(!0, a) && (a[0] = !0), a
            },
            _classLogic: function() {
                var e = this,
                    i = this.c.breakpoints,
                    s = this.s.dt,
                    o = s.columns().eq(0).map(function(e) {
                        var i = this.column(e),
                            o = i.header().className,
                            e = s.settings()[0].aoColumns[e].responsivePriority;
                        return e === n && (i = t(i.header()).data("priority"), e = i !== n ? 1 * i : 1e4), { className: o, includeIn: [], auto: !1, control: !1, never: !!o.match(/\bnever\b/), priority: e }
                    }),
                    r = function(e, i) { var n = o[e].includeIn; - 1 === t.inArray(i, n) && n.push(i) },
                    a = function(t, n, s, a) {
                        if (s) {
                            if ("max-" === s)
                                for (a = e._find(n).width, n = 0, s = i.length; n < s; n++) i[n].width <= a && r(t, i[n].name);
                            else if ("min-" === s)
                                for (a = e._find(n).width, n = 0, s = i.length; n < s; n++) i[n].width >= a && r(t, i[n].name);
                            else if ("not-" === s)
                                for (n = 0, s = i.length; n < s; n++) - 1 === i[n].name.indexOf(a) && r(t, i[n].name)
                        } else o[t].includeIn.push(n)
                    };
                o.each(function(e, n) {
                    for (var s = e.className.split(" "), o = !1, r = 0, l = s.length; r < l; r++) {
                        var c = t.trim(s[r]);
                        if ("all" === c) return o = !0, void(e.includeIn = t.map(i, function(t) { return t.name }));
                        if ("none" === c || e.never) return void(o = !0);
                        if ("control" === c) return o = !0, void(e.control = !0);
                        t.each(i, function(t, e) {
                            var i = e.name.split("-"),
                                s = c.match(RegExp("(min\\-|max\\-|not\\-)?(" + i[0] + ")(\\-[_a-zA-Z0-9])?"));
                            s && (o = !0, s[2] === i[0] && s[3] === "-" + i[1] ? a(n, e.name, s[1], s[2] + s[3]) : s[2] === i[0] && !s[3] && a(n, e.name, s[1], s[2]))
                        })
                    }
                    o || (e.auto = !0)
                }), this.s.columns = o
            },
            _detailsDisplay: function(e, i) {
                var n = this,
                    s = this.s.dt,
                    o = this.c.details;
                if (o && !1 !== o.type) {
                    var r = o.display(e, i, function() { return o.renderer(s, e[0], n._detailsObj(e[0])) });
                    (!0 === r || !1 === r) && t(s.table().node()).triggerHandler("responsive-display.dt", [s, e, r, i])
                }
            },
            _detailsInit: function() {
                var e = this,
                    i = this.s.dt,
                    n = this.c.details;
                "inline" === n.type && (n.target = "td:first-child, th:first-child"), i.on("draw.dtr", function() { e._tabIndexes() }), e._tabIndexes(), t(i.table().body()).on("keyup.dtr", "td, th", function(e) { 13 === e.keyCode && t(this).data("dtr-keyboard") && t(this).click() });
                var s = n.target;
                t(i.table().body()).on("click.dtr mousedown.dtr mouseup.dtr", "string" == typeof s ? s : "td, th", function(n) {
                    if (t(i.table().node()).hasClass("collapsed") && -1 !== t.inArray(t(this).closest("tr").get(0), i.rows().nodes().toArray())) {
                        if ("number" == typeof s) { var o = s < 0 ? i.columns().eq(0).length + s : s; if (i.cell(this).index().column !== o) return }
                        o = i.row(t(this).closest("tr")), "click" === n.type ? e._detailsDisplay(o, !1) : "mousedown" === n.type ? t(this).css("outline", "none") : "mouseup" === n.type && t(this).blur().css("outline", "")
                    }
                })
            },
            _detailsObj: function(e) {
                var i = this,
                    n = this.s.dt;
                return t.map(this.s.columns, function(t, s) { if (!t.never && !t.control) return { title: n.settings()[0].aoColumns[s].sTitle, data: n.cell(e, s).render(i.c.orthogonal), hidden: n.column(s).visible() && !i.s.current[s], columnIndex: s, rowIndex: e } })
            },
            _find: function(t) {
                for (var e = this.c.breakpoints, i = 0, n = e.length; i < n; i++)
                    if (e[i].name === t) return e[i]
            },
            _redrawChildren: function() {
                var t = this,
                    e = this.s.dt;
                e.rows({ page: "current" }).iterator("row", function(i, n) { e.row(n), t._detailsDisplay(e.row(n), !0) })
            },
            _resize: function() {
                var i, n = this,
                    s = this.s.dt,
                    o = t(e).width(),
                    r = this.c.breakpoints,
                    a = r[0].name,
                    l = this.s.columns,
                    c = this.s.current.slice();
                for (i = r.length - 1; 0 <= i; i--)
                    if (o <= r[i].width) { a = r[i].name; break }
                var u = this._columnsVisiblity(a);
                for (this.s.current = u, r = !1, i = 0, o = l.length; i < o; i++)
                    if (!1 === u[i] && !l[i].never && !l[i].control && !1 == !s.column(i).visible()) { r = !0; break }
                t(s.table().node()).toggleClass("collapsed", r);
                var h = !1,
                    d = 0;
                s.columns().eq(0).each(function(t, e) {!0 === u[e] && d++, u[e] !== c[e] && (h = !0, n._setColumnVis(t, u[e])) }), h && (this._redrawChildren(), t(s.table().node()).trigger("responsive-resize.dt", [s, this.s.current]), 0 === s.page.info().recordsDisplay && t("td", s.table().body()).eq(0).attr("colspan", d))
            },
            _resizeAuto: function() {
                var e = this.s.dt,
                    i = this.s.columns;
                if (this.c.auto && -1 !== t.inArray(!0, t.map(i, function(t) { return t.auto }))) {
                    t.isEmptyObject(l) || t.each(l, function(t) { t = t.split("-"), o(e, 1 * t[0], 1 * t[1]) }), e.table().node();
                    var n = e.table().node().cloneNode(!1),
                        s = t(e.table().header().cloneNode(!1)).appendTo(n),
                        r = t(e.table().body()).clone(!1, !1).empty().appendTo(n),
                        a = e.columns().header().filter(function(t) { return e.column(t).visible() }).to$().clone(!1).css("display", "table-cell").css("min-width", 0);
                    if (t(r).append(t(e.rows({ page: "current" }).nodes()).clone(!1)).find("th, td").css("display", ""), r = e.table().footer()) {
                        var r = t(r.cloneNode(!1)).appendTo(n),
                            c = e.columns().footer().filter(function(t) { return e.column(t).visible() }).to$().clone(!1).css("display", "table-cell");
                        t("<tr/>").append(c).appendTo(r)
                    }
                    t("<tr/>").append(a).appendTo(s), "inline" === this.c.details.type && t(n).addClass("dtr-inline collapsed"), t(n).find("[name]").removeAttr("name"), t(n).css("position", "relative"), n = t("<div/>").css({ width: 1, height: 1, overflow: "hidden", clear: "both" }).append(n), n.insertBefore(e.table().node()), a.each(function(t) { t = e.column.index("fromVisible", t), i[t].minWidth = this.offsetWidth || 0 }), n.remove()
                }
            },
            _setColumnVis: function(e, i) {
                var n = this.s.dt,
                    s = i ? "" : "none";
                t(n.column(e).header()).css("display", s), t(n.column(e).footer()).css("display", s), n.column(e).nodes().to$().css("display", s), t.isEmptyObject(l) || n.cells(null, e).indexes().each(function(t) { o(n, t.row, t.column) })
            },
            _tabIndexes: function() {
                var e = this.s.dt,
                    i = e.cells({ page: "current" }).nodes().to$(),
                    n = e.settings()[0],
                    s = this.c.details.target;
                i.filter("[data-dtr-keyboard]").removeData("[data-dtr-keyboard]"), "number" == typeof s ? e.cells(null, s, { page: "current" }).nodes().to$().attr("tabIndex", n.iTabIndex).data("dtr-keyboard", 1) : ("td:first-child, th:first-child" === s && (s = ">td:first-child, >th:first-child"), t(s, e.rows({ page: "current" }).nodes()).attr("tabIndex", n.iTabIndex).data("dtr-keyboard", 1))
            }
        }), a.breakpoints = [{ name: "desktop", width: 1 / 0 }, { name: "tablet-l", width: 1024 }, { name: "tablet-p", width: 768 }, { name: "mobile-l", width: 480 }, { name: "mobile-p", width: 320 }], a.display = {
            childRow: function(e, i, n) { return i ? t(e.node()).hasClass("parent") ? (e.child(n(), "child").show(), !0) : void 0 : e.child.isShown() ? (e.child(!1), t(e.node()).removeClass("parent"), !1) : (e.child(n(), "child").show(), t(e.node()).addClass("parent"), !0) },
            childRowImmediate: function(e, i, n) { return !i && e.child.isShown() || !e.responsive.hasHidden() ? (e.child(!1), t(e.node()).removeClass("parent"), !1) : (e.child(n(), "child").show(), t(e.node()).addClass("parent"), !0) },
            modal: function(e) {
                return function(n, s, o) {
                    if (s) t("div.dtr-modal-content").empty().append(o());
                    else {
                        var r = function() { a.remove(), t(i).off("keypress.dtr") },
                            a = t('<div class="dtr-modal"/>').append(t('<div class="dtr-modal-display"/>').append(t('<div class="dtr-modal-content"/>').append(o())).append(t('<div class="dtr-modal-close">&times;</div>').click(function() { r() }))).append(t('<div class="dtr-modal-background"/>').click(function() { r() })).appendTo("body");
                        t(i).on("keyup.dtr", function(t) { 27 === t.keyCode && (t.stopPropagation(), r()) })
                    }
                    e && e.header && t("div.dtr-modal-content").prepend("<h2>" + e.header(n) + "</h2>")
                }
            }
        };
        var l = {};
        a.renderer = {
            listHiddenNodes: function() {
                return function(e, i, n) {
                    var o = t('<ul data-dtr-index="' + i + '" class="dtr-details"/>'),
                        r = !1;
                    return t.each(n, function(i, n) { n.hidden && (t('<li data-dtr-index="' + n.columnIndex + '" data-dt-row="' + n.rowIndex + '" data-dt-column="' + n.columnIndex + '"><span class="dtr-title">' + n.title + "</span> </li>").append(t('<span class="dtr-data"/>').append(s(e, n.rowIndex, n.columnIndex))).appendTo(o), r = !0) }), !!r && o
                }
            },
            listHidden: function() { return function(e, i, n) { return !!(e = t.map(n, function(t) { return t.hidden ? '<li data-dtr-index="' + t.columnIndex + '" data-dt-row="' + t.rowIndex + '" data-dt-column="' + t.columnIndex + '"><span class="dtr-title">' + t.title + '</span> <span class="dtr-data">' + t.data + "</span></li>" : "" }).join("")) && t('<ul data-dtr-index="' + i + '" class="dtr-details"/>').append(e) } },
            tableAll: function(e) {
                return e = t.extend({ tableClass: "" }, e),
                    function(i, n, s) { return i = t.map(s, function(t) { return '<tr data-dt-row="' + t.rowIndex + '" data-dt-column="' + t.columnIndex + '"><td>' + t.title + ":</td> <td>" + t.data + "</td></tr>" }).join(""), t('<table class="' + e.tableClass + ' dtr-details" width="100%"/>').append(i) }
            }
        }, a.defaults = { breakpoints: a.breakpoints, auto: !0, details: { display: a.display.childRow, renderer: a.renderer.listHidden(), target: 0, type: "inline" }, orthogonal: "display" };
        var c = t.fn.dataTable.Api;
        return c.register("responsive()", function() { return this }), c.register("responsive.index()", function(e) { return e = t(e), { column: e.data("dtr-index"), row: e.parent().data("dtr-index") } }), c.register("responsive.rebuild()", function() { return this.iterator("table", function(t) { t._responsive && t._responsive._classLogic() }) }), c.register("responsive.recalc()", function() { return this.iterator("table", function(t) { t._responsive && (t._responsive._resizeAuto(), t._responsive._resize()) }) }), c.register("responsive.hasHidden()", function() { var e = this.context[0]; return !!e._responsive && -1 !== t.inArray(!1, e._responsive.s.current) }), c.registerPlural("columns().responsiveHidden()", "column().responsiveHidden()", function() { return this.iterator("column", function(t, e) { return !!t._responsive && t._responsive.s.current[e] }, 1) }), a.version = "2.2.2", t.fn.dataTable.Responsive = a, t.fn.DataTable.Responsive = a, t(i).on("preInit.dt.dtr", function(e, i) { if ("dt" === e.namespace && (t(i.nTable).hasClass("responsive") || t(i.nTable).hasClass("dt-responsive") || i.oInit.responsive || r.defaults.responsive)) { var n = i.oInit.responsive;!1 !== n && new a(i, t.isPlainObject(n) ? n : {}) } }), a
    }),
    function(t) { "function" == typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-responsive"], function(e) { return t(e, window, document) }) : "object" == typeof exports ? module.exports = function(e, i) { return e || (e = window), i && i.fn.dataTable || (i = require("datatables.net-bs4")(e, i).$), i.fn.dataTable.Responsive || require("datatables.net-responsive")(e, i), t(i, e.document) } : t(jQuery, window, document) }(function(t) {
        var e = t.fn.dataTable,
            i = e.Responsive.display,
            n = i.modal,
            s = t('<div class="modal fade dtr-bs-modal" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"/></div></div></div>');
        return i.modal = function(e) {
            return function(i, o, r) {
                if (t.fn.modal) {
                    if (!o) {
                        if (e && e.header) {
                            var o = s.find("div.modal-header"),
                                a = o.find("button").detach();
                            o.empty().append('<h4 class="modal-title">' + e.header(i) + "</h4>").append(a)
                        }
                        s.find("div.modal-body").empty().append(r()), s.appendTo("body").modal()
                    }
                } else n(i, o, r)
            }
        }, e.Responsive
    }),
    function(t) {
        t.fn.niceSelect = function(e) {
            function i(e) {
                e.after(t("<div></div>").addClass("nice-select").addClass(e.attr("class") || "").addClass(e.attr("disabled") ? "disabled" : "").attr("tabindex", e.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
                var i = e.next(),
                    n = e.find("option"),
                    s = e.find("option:selected");
                i.find(".current").html(s.data("display") || s.text()), n.each(function(e) {
                    var n = t(this),
                        s = n.data("display");
                    i.find("ul").append(t("<li></li>").attr("data-value", n.val()).attr("data-display", s || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()))
                })
            }
            if ("string" == typeof e) return "update" == e ? this.each(function() {
                var e = t(this),
                    n = t(this).next(".nice-select"),
                    s = n.hasClass("open");
                n.length && (n.remove(), i(e), s && e.next().trigger("click"))
            }) : "destroy" == e ? (this.each(function() {
                var e = t(this),
                    i = t(this).next(".nice-select");
                i.length && (i.remove(), e.css("display", ""))
            }), 0 == t(".nice-select").length && t(document).off(".nice_select")) : console.log('Method "' + e + '" does not exist.'), this;
            this.hide(), this.each(function() {
                var e = t(this);
                e.next().hasClass("nice-select") || i(e)
            }), t(document).off(".nice_select"), t(document).on("click.nice_select", ".nice-select", function(e) {
                var i = t(this);
                t(".nice-select").not(i).removeClass("open"), i.toggleClass("open"), i.hasClass("open") ? (i.find(".option"), i.find(".focus").removeClass("focus"), i.find(".selected").addClass("focus")) : i.focus()
            }), t(document).on("click.nice_select", function(e) { 0 === t(e.target).closest(".nice-select").length && t(".nice-select").removeClass("open").find(".option") }), t(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function(e) {
                var i = t(this),
                    n = i.closest(".nice-select");
                n.find(".selected").removeClass("selected"), i.addClass("selected");
                var s = i.data("display") || i.text();
                n.find(".current").text(s), n.prev("select").val(i.data("value")).trigger("change")
            }), t(document).on("keydown.nice_select", ".nice-select", function(e) {
                var i = t(this),
                    n = t(i.find(".focus") || i.find(".list .option.selected"));
                if (32 == e.keyCode || 13 == e.keyCode) return i.hasClass("open") ? n.trigger("click") : i.trigger("click"), !1;
                if (40 == e.keyCode) {
                    if (i.hasClass("open")) {
                        var s = n.nextAll(".option:not(.disabled)").first();
                        s.length > 0 && (i.find(".focus").removeClass("focus"), s.addClass("focus"))
                    } else i.trigger("click");
                    return !1
                }
                if (38 == e.keyCode) {
                    if (i.hasClass("open")) {
                        var o = n.prevAll(".option:not(.disabled)").first();
                        o.length > 0 && (i.find(".focus").removeClass("focus"), o.addClass("focus"))
                    } else i.trigger("click");
                    return !1
                }
                if (27 == e.keyCode) i.hasClass("open") && i.trigger("click");
                else if (9 == e.keyCode && i.hasClass("open")) return !1
            });
            var n = document.createElement("a").style;
            return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && t("html").addClass("no-csspointerevents"), this
        }
    }(jQuery), window.requestAnimFrame = function() { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) { window.setTimeout(t, 20) } }(),
    function(t) {
        function e(e, i) {
            function n() { var t = document.documentElement; return { left: (window.pageXOffset || t.scrollLeft) - (t.clientLeft || 0), top: (window.pageYOffset || t.scrollTop) - (t.clientTop || 0) } }

            function s() {
                var i = e.offset();
                if (g = "auto" == ut.options.zoomWidth ? rt : ut.options.zoomWidth, v = "auto" == ut.options.zoomHeight ? at : ut.options.zoomHeight, "#" == ut.options.position.substr(0, 1) ? ht = t(ut.options.position) : ht.length = 0, 0 != ht.length) return !0;
                switch (lt) {
                    case "lens":
                    case "inside":
                        return !0;
                    case "top":
                        y = i.top, b = i.left, w = y - v, C = b;
                        break;
                    case "left":
                        y = i.top, b = i.left, w = y, C = b - g;
                        break;
                    case "bottom":
                        y = i.top, b = i.left, w = y + at, C = b;
                        break;
                    case "right":
                    default:
                        y = i.top, b = i.left, w = y, C = b + rt
                }
                return !(C + g > it || C < 0)
            }

            function o() {
                if ("circle" == ut.options.lensShape && "lens" == ut.options.position) {
                    L = z = Math.max(L, z);
                    var t = (L + 2 * Math.max(W, R)) / 2;
                    H.css({ "-moz-border-radius": t, "-webkit-border-radius": t, "border-radius": t })
                }
            }

            function r(t, e, i, n) { "lens" == ut.options.position ? (M.css({ top: -(e - y) * B + z / 2, left: -(t - b) * q + L / 2 }), ut.options.bg && (H.css({ "background-image": "url(" + M.attr("src") + ")", "background-repeat": "no-repeat", "background-position": -(t - b) * q + L / 2 + "px " + (-(e - y) * B + z / 2) + "px" }), i && n && H.css({ "background-size": i + "px " + n + "px" }))) : M.css({ top: -F * B, left: -j * q }) }

            function a(t, e) {
                mt < -1 && (mt = -1), mt > 1 && (mt = 1);
                var i, n, s;
                U < Y ? (i = U - (U - 1) * mt, n = g * i, s = n / V) : (i = Y - (Y - 1) * mt, s = v * i, n = s * V), Q ? (gt = t, vt = e, _t = n, yt = s) : (Q || (bt = _t = n, wt = yt = s), q = n / f, B = s / m, L = g / q, z = v / B, o(), c(t, e), M.width(n), M.height(s), H.width(L), H.height(z), H.css({ top: F - W, left: j - R }), $.css({ top: -F, left: -j }), r(t, e, n, s))
            }

            function l() {
                var t = Ct,
                    e = xt,
                    i = Tt,
                    n = St,
                    s = bt,
                    a = wt;
                t += (gt - t) / ut.options.smoothLensMove, e += (vt - e) / ut.options.smoothLensMove, i += (gt - i) / ut.options.smoothZoomMove, n += (vt - n) / ut.options.smoothZoomMove, s += (_t - s) / ut.options.smoothScale, a += (yt - a) / ut.options.smoothScale, q = s / f, B = a / m, L = g / q, z = v / B, o(), c(t, e), M.width(s), M.height(a), H.width(L), H.height(z), H.css({ top: F - W, left: j - R }), $.css({ top: -F, left: -j }), c(i, n), r(t, e, s, a), Ct = t, xt = e, Tt = i, St = n, bt = s, wt = a, Q && requestAnimFrame(l)
            }

            function c(t, e) { t -= b, e -= y, j = t - L / 2, F = e - z / 2, "lens" != ut.options.position && ut.options.lensCollision && (j < 0 && (j = 0), f >= L && j > f - L && (j = f - L), f < L && (j = f / 2 - L / 2), F < 0 && (F = 0), m >= z && F > m - z && (F = m - z), m < z && (F = m / 2 - z / 2)) }

            function u() { void 0 !== D && D.remove(), void 0 !== I && I.remove(), void 0 !== et && et.remove() }

            function h(i, s) {
                switch ("fullscreen" == ut.options.position ? (f = t(window).width(), m = t(window).height()) : (f = e.width(), m = e.height()), P.css({ top: m / 2 - P.height() / 2, left: f / 2 - P.width() / 2 }), _ = ut.options.rootOutput || "fullscreen" == ut.options.position ? e.offset() : e.position(), _.top = Math.round(_.top), _.left = Math.round(_.left), ut.options.position) {
                    case "fullscreen":
                        y = n().top, b = n().left, w = 0, C = 0;
                        break;
                    case "inside":
                        y = _.top, b = _.left, w = 0, C = 0;
                        break;
                    case "top":
                        y = _.top, b = _.left, w = y - v, C = b;
                        break;
                    case "left":
                        y = _.top, b = _.left, w = y, C = b - g;
                        break;
                    case "bottom":
                        y = _.top, b = _.left, w = y + m, C = b;
                        break;
                    case "right":
                    default:
                        y = _.top, b = _.left, w = y, C = b + f
                }
                y -= D.outerHeight() / 2, b -= D.outerWidth() / 2, "#" == ut.options.position.substr(0, 1) ? ht = t(ut.options.position) : ht.length = 0, 0 == ht.length && "inside" != ut.options.position && "fullscreen" != ut.options.position ? (ut.options.adaptive && st && ot || (st = f, ot = m), g = "auto" == ut.options.zoomWidth ? f : ut.options.zoomWidth, v = "auto" == ut.options.zoomHeight ? m : ut.options.zoomHeight, w += ut.options.Yoffset, C += ut.options.Xoffset, I.css({ width: g + "px", height: v + "px", top: w, left: C }), "lens" != ut.options.position && p.append(I)) : "inside" == ut.options.position || "fullscreen" == ut.options.position ? (g = f, v = m, I.css({ width: g + "px", height: v + "px" }), D.append(I)) : (g = ht.width(), v = ht.height(), ut.options.rootOutput ? (w = ht.offset().top, C = ht.offset().left, p.append(I)) : (w = ht.position().top, C = ht.position().left, ht.parent().append(I)), w += (ht.outerHeight() - v - I.outerHeight()) / 2, C += (ht.outerWidth() - g - I.outerWidth()) / 2, I.css({ width: g + "px", height: v + "px", top: w, left: C })), ut.options.title && "" != Et && ("inside" == ut.options.position || "lens" == ut.options.position || "fullscreen" == ut.options.position ? (x = w, T = C, D.append(et)) : (x = w + (I.outerHeight() - v) / 2, T = C + (I.outerWidth() - g) / 2, p.append(et)), et.css({ width: g + "px", height: v + "px", top: x, left: T })), D.css({ width: f + "px", height: m + "px", top: y, left: b }), E.css({ width: f + "px", height: m + "px" }), ut.options.tint && "inside" != ut.options.position && "fullscreen" != ut.options.position ? E.css("background-color", ut.options.tint) : kt && E.css({ "background-image": "url(" + e.attr("src") + ")", "background-color": "#fff" }), N = new Image;
                var o = "";
                switch (Dt && (o = "?r=" + (new Date).getTime()), N.src = e.attr("xoriginal") + o, M = t(N), M.css("position", "absolute"), N = new Image, N.src = e.attr("src"), $ = t(N), $.css("position", "absolute"), $.width(f), ut.options.position) {
                    case "fullscreen":
                    case "inside":
                        I.append(M);
                        break;
                    case "lens":
                        H.append(M), ut.options.bg && M.css({ display: "none" });
                        break;
                    default:
                        I.append(M), H.append($)
                }
            }

            function d(t) {
                var e = t.attr("title"),
                    i = t.attr("xtitle");
                return i || (e || "")
            }
            this.xzoom = !0;
            var p, f, m, g, v, _, y, b, w, C, x, T, S, k, D, E, I, P, A, O, N, M, H, $, L, z, j, F, R, W, q, B, U, Y, V, X, K, Q, G, J, Z, tt, et, it, nt, st, ot, rt, at, lt, ct, ut = this,
                ht = {},
                dt = (new Array, new Array),
                pt = 0,
                ft = 0,
                mt = 0,
                gt = 0,
                vt = 0,
                _t = 0,
                yt = 0,
                bt = 0,
                wt = 0,
                Ct = 0,
                xt = 0,
                Tt = 0,
                St = 0,
                kt = detect_old_ie(),
                Dt = /MSIE (\d+\.\d+);/.test(navigator.userAgent),
                Et = "";
            this.adaptive = function() {
                0 != st && 0 != ot || (e.css("width", ""), e.css("height", ""), st = e.width(), ot = e.height()), u(), it = t(window).width(), nt = t(window).height(), rt = e.width(), at = e.height();
                var i = !1;
                (st > it || ot > nt) && (i = !0), rt > st && (rt = st), at > ot && (at = ot), i ? e.width("100%") : 0 != st && e.width(st), "fullscreen" != lt && (s() ? ut.options.position = lt : ut.options.position = ut.options.mposition), ut.options.lensReverse || (ct = ut.options.adaptiveReverse && ut.options.position == ut.options.mposition)
            }, this.xscroll = function(t) {
                if (S = t.pageX || t.originalEvent.pageX, k = t.pageY || t.originalEvent.pageY, t.preventDefault(), t.xscale) mt = t.xscale, a(S, k);
                else {
                    var e = -t.originalEvent.detail || t.originalEvent.wheelDelta || t.xdelta,
                        i = S,
                        n = k;
                    kt && (i = G, n = J), e = e > 0 ? -.05 : .05, mt += e, a(i, n)
                }
            }, this.openzoom = function(e) {
                switch (S = e.pageX, k = e.pageY, ut.options.adaptive && ut.adaptive(), mt = ut.options.defaultScale, Q = !1, D = t("<div></div>"), "" != ut.options.sourceClass && D.addClass(ut.options.sourceClass), D.css("position", "absolute"), P = t("<div></div>"), "" != ut.options.loadingClass && P.addClass(ut.options.loadingClass), P.css("position", "absolute"), E = t('<div style="position: absolute; top: 0; left: 0;"></div>'), D.append(P), I = t("<div></div>"), "" != ut.options.zoomClass && "fullscreen" != ut.options.position && I.addClass(ut.options.zoomClass), I.css({ position: "absolute", overflow: "hidden", opacity: 1 }), ut.options.title && "" != Et && (et = t("<div></div>"), tt = t("<div></div>"), et.css({ position: "absolute", opacity: 1 }), ut.options.titleClass && tt.addClass(ut.options.titleClass), tt.html("<span>" + Et + "</span>"), et.append(tt), ut.options.fadeIn && et.css({ opacity: 0 })), H = t("<div></div>"), "" != ut.options.lensClass && H.addClass(ut.options.lensClass), H.css({ position: "absolute", overflow: "hidden" }), ut.options.lens && (lenstint = t("<div></div>"), lenstint.css({ position: "absolute", background: ut.options.lens, opacity: ut.options.lensOpacity, width: "100%", height: "100%", top: 0, left: 0, "z-index": 9999 }), H.append(lenstint)), h(S, k), "inside" != ut.options.position && "fullscreen" != ut.options.position ? ((ut.options.tint || kt) && D.append(E), ut.options.fadeIn && (E.css({ opacity: 0 }), H.css({ opacity: 0 }), I.css({ opacity: 0 })), p.append(D)) : (ut.options.fadeIn && I.css({ opacity: 0 }), p.append(D)), ut.eventmove(D), ut.eventleave(D), ut.options.position) {
                    case "inside":
                        w -= (I.outerHeight() - I.height()) / 2, C -= (I.outerWidth() - I.width()) / 2;
                        break;
                    case "top":
                        w -= I.outerHeight() - I.height(), C -= (I.outerWidth() - I.width()) / 2;
                        break;
                    case "left":
                        w -= (I.outerHeight() - I.height()) / 2, C -= I.outerWidth() - I.width();
                        break;
                    case "bottom":
                        C -= (I.outerWidth() - I.width()) / 2;
                        break;
                    case "right":
                        w -= (I.outerHeight() - I.height()) / 2
                }
                I.css({ top: w, left: C }), M.xon("load", function(t) {
                    if (P.remove(), !ut.options.openOnSmall && (M.width() < g || M.height() < v)) return ut.closezoom(), t.preventDefault(), !1;
                    ut.options.scroll && ut.eventscroll(D), "inside" != ut.options.position && "fullscreen" != ut.options.position ? (D.append(H), ut.options.fadeIn ? (E.fadeTo(300, ut.options.tintOpacity), H.fadeTo(300, 1), I.fadeTo(300, 1)) : (E.css({ opacity: ut.options.tintOpacity }), H.css({ opacity: 1 }), I.css({ opacity: 1 }))) : ut.options.fadeIn ? I.fadeTo(300, 1) : I.css({ opacity: 1 }), ut.options.title && "" != Et && (ut.options.fadeIn ? et.fadeTo(300, 1) : et.css({ opacity: 1 })), X = M.width(), K = M.height(), ut.options.adaptive && (f < st || m < ot) && ($.width(f), $.height(m), X *= f / st, K *= m / ot, M.width(X), M.height(K)), bt = _t = X, wt = yt = K, V = X / K, U = X / g, Y = K / v;
                    var e, i = ["padding-", "border-"];
                    W = R = 0;
                    for (var n = 0; n < i.length; n++) e = parseFloat(H.css(i[n] + "top-width")), W += e !== e ? 0 : e, e = parseFloat(H.css(i[n] + "bottom-width")), W += e !== e ? 0 : e, e = parseFloat(H.css(i[n] + "left-width")), R += e !== e ? 0 : e, e = parseFloat(H.css(i[n] + "right-width")), R += e !== e ? 0 : e;
                    W /= 2, R /= 2, Tt = Ct = gt = S, St = xt = vt = k, a(S, k), ut.options.smooth && (Q = !0, requestAnimFrame(l)), ut.eventclick(D)
                })
            }, this.movezoom = function(t) {
                S = t.pageX, k = t.pageY, kt && (G = S, J = k);
                var e = S - b,
                    i = k - y;
                ct && (t.pageX -= 2 * (e - f / 2), t.pageY -= 2 * (i - m / 2)), (e < 0 || e > f || i < 0 || i > m) && D.trigger("mouseleave"), ut.options.smooth ? (gt = t.pageX, vt = t.pageY) : (o(), c(t.pageX, t.pageY), H.css({ top: F - W, left: j - R }), $.css({ top: -F, left: -j }), r(t.pageX, t.pageY, 0, 0))
            }, this.eventdefault = function() { ut.eventopen = function(t) { t.xon("mouseenter", ut.openzoom) }, ut.eventleave = function(t) { t.xon("mouseleave", ut.closezoom) }, ut.eventmove = function(t) { t.xon("mousemove", ut.movezoom) }, ut.eventscroll = function(t) { t.xon("mousewheel DOMMouseScroll", ut.xscroll) }, ut.eventclick = function(t) { t.xon("click", function(t) { e.trigger("click") }) } }, this.eventunbind = function() { e.xoff("mouseenter"), ut.eventopen = function(t) {}, ut.eventleave = function(t) {}, ut.eventmove = function(t) {}, ut.eventscroll = function(t) {}, ut.eventclick = function(t) {} }, this.init = function(i) { ut.options = t.extend({}, t.fn.xzoom.defaults, i), p = ut.options.rootOutput ? t("body") : e.parent(), lt = ut.options.position, ct = ut.options.lensReverse && "inside" == ut.options.position, ut.options.smoothZoomMove < 1 && (ut.options.smoothZoomMove = 1), ut.options.smoothLensMove < 1 && (ut.options.smoothLensMove = 1), ut.options.smoothScale < 1 && (ut.options.smoothScale = 1), ut.options.adaptive && t(window).xon("load", function() { st = e.width(), ot = e.height(), ut.adaptive(), t(window).resize(ut.adaptive) }), ut.eventdefault(), ut.eventopen(e) }, this.destroy = function() { ut.eventunbind() }, this.closezoom = function() { Q = !1, ut.options.fadeOut ? (ut.options.title && "" != Et && et.fadeOut(299), "inside" != ut.options.position || "fullscreen" != ut.options.position ? (I.fadeOut(299), D.fadeOut(300, function() { u() })) : D.fadeOut(300, function() { u() })) : u() }, this.gallery = function() {
                var t, e = new Array,
                    i = 0;
                for (t = ft; t < dt.length; t++) e[i] = dt[t], i++;
                for (t = 0; t < ft; t++) e[i] = dt[t], i++;
                return { index: ft, ogallery: dt, cgallery: e }
            }, this.xappend = function(i) {
                function n(n) {
                    u(), n.preventDefault(), ut.options.activeClass && (Z.removeClass(ut.options.activeClass), Z = i, Z.addClass(ut.options.activeClass)), ft = t(this).data("xindex"), ut.options.fadeTrans && (O = new Image, O.src = e.attr("src"), A = t(O), A.css({ position: "absolute", top: e.offset().top, left: e.offset().left, width: e.width(), height: e.height() }), t(document.body).append(A), A.fadeOut(200, function() { A.remove() }));
                    var o = s.attr("href"),
                        r = i.attr("xpreview") || i.attr("src");
                    Et = d(i), i.attr("title") && e.attr("title", i.attr("title")), e.attr("xoriginal", o), e.removeAttr("style"), e.attr("src", r), ut.options.adaptive && (st = e.width(), ot = e.height())
                }
                var s = i.parent();
                dt[pt] = s.attr("href"), s.data("xindex", pt), 0 == pt && ut.options.activeClass && (Z = i, Z.addClass(ut.options.activeClass)), 0 == pt && ut.options.title && (Et = d(i)), pt++, ut.options.hover && s.xon("mouseenter", s, n), s.xon("click", s, n)
            }, this.init(i)
        }
        t.fn.xon = t.fn.on || t.fn.bind, t.fn.xoff = t.fn.off || t.fn.bind, t.fn.xzoom = function(i) {
            var n, s;
            if (this.selector) {
                var o = this.selector.split(",");
                for (var r in o) o[r] = t.trim(o[r]);
                this.each(function(r) {
                    if (1 == o.length)
                        if (0 == r) {
                            if (n = t(this), void 0 !== n.data("xzoom")) return n.data("xzoom");
                            n.x = new e(n, i)
                        } else void 0 !== n.x && (s = t(this), n.x.xappend(s));
                    else if (t(this).is(o[0]) && 0 == r) {
                        if (n = t(this), void 0 !== n.data("xzoom")) return n.data("xzoom");
                        n.x = new e(n, i)
                    } else void 0 === n.x || t(this).is(o[0]) || (s = t(this), n.x.xappend(s))
                })
            } else this.each(function(o) {
                if (0 == o) {
                    if (n = t(this), void 0 !== n.data("xzoom")) return n.data("xzoom");
                    n.x = new e(n, i)
                } else void 0 !== n.x && (s = t(this), n.x.xappend(s))
            });
            return void 0 !== n && (n.data("xzoom", n.x), t(n).trigger("xzoom_ready"), n.x)
        }, t.fn.xzoom.defaults = { position: "right", mposition: "inside", rootOutput: !0, Xoffset: 0, Yoffset: 0, fadeIn: !0, fadeTrans: !0, fadeOut: !1, smooth: !0, smoothZoomMove: 3, smoothLensMove: 1, smoothScale: 6, defaultScale: 0, scroll: !0, tint: !1, tintOpacity: .5, lens: !1, lensOpacity: .5, lensShape: "box", lensCollision: !0, lensReverse: !1, openOnSmall: !0, zoomWidth: "auto", zoomHeight: "auto", sourceClass: "xzoom-source", loadingClass: "xzoom-loading", lensClass: "xzoom-lens", zoomClass: "xzoom-preview", activeClass: "xactive", hover: !1, adaptive: !0, adaptiveReverse: !1, title: !1, titleClass: "xzoom-caption", bg: !1 }
    }(jQuery),
    function(t, e) {
        "use strict";

        function i() {
            if (!n.READY) {
                n.event.determineEventTypes();
                for (var t in n.gestures) n.gestures.hasOwnProperty(t) && n.detection.register(n.gestures[t]);
                n.event.onTouch(n.DOCUMENT, n.EVENT_MOVE, n.detection.detect), n.event.onTouch(n.DOCUMENT, n.EVENT_END, n.detection.detect), n.READY = !0
            }
        }
        var n = function(t, e) { return new n.Instance(t, e || {}) };
        n.defaults = { stop_browser_behavior: { userSelect: "none", touchAction: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" } }, n.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled, n.HAS_TOUCHEVENTS = "ontouchstart" in t, n.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i, n.NO_MOUSEEVENTS = n.HAS_TOUCHEVENTS && navigator.userAgent.match(n.MOBILE_REGEX), n.EVENT_TYPES = {}, n.DIRECTION_DOWN = "down", n.DIRECTION_LEFT = "left", n.DIRECTION_UP = "up", n.DIRECTION_RIGHT = "right", n.POINTER_MOUSE = "mouse", n.POINTER_TOUCH = "touch", n.POINTER_PEN = "pen", n.EVENT_START = "start", n.EVENT_MOVE = "move", n.EVENT_END = "end", n.DOCUMENT = document, n.plugins = {}, n.READY = !1, n.Instance = function(t, e) { var s = this; return i(), this.element = t, this.enabled = !0, this.options = n.utils.extend(n.utils.extend({}, n.defaults), e || {}), this.options.stop_browser_behavior && n.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior), n.event.onTouch(t, n.EVENT_START, function(t) { s.enabled && n.detection.startDetect(s, t) }), this }, n.Instance.prototype = {
            on: function(t, e) { for (var i = t.split(" "), n = 0; i.length > n; n++) this.element.addEventListener(i[n], e, !1); return this },
            off: function(t, e) { for (var i = t.split(" "), n = 0; i.length > n; n++) this.element.removeEventListener(i[n], e, !1); return this },
            trigger: function(t, e) {
                var i = n.DOCUMENT.createEvent("Event");
                i.initEvent(t, !0, !0), i.gesture = e;
                var s = this.element;
                return n.utils.hasParent(e.target, s) && (s = e.target), s.dispatchEvent(i), this
            },
            enable: function(t) { return this.enabled = t, this }
        };
        var s = null,
            o = !1,
            r = !1;
        n.event = {
            bindDom: function(t, e, i) { for (var n = e.split(" "), s = 0; n.length > s; s++) t.addEventListener(n[s], i, !1) },
            onTouch: function(t, e, i) {
                var a = this;
                this.bindDom(t, n.EVENT_TYPES[e], function(l) {
                    var c = l.type.toLowerCase();
                    if (!c.match(/mouse/) || !r) {
                        (c.match(/touch/) || c.match(/pointerdown/) || c.match(/mouse/) && 1 === l.which) && (o = !0), c.match(/touch|pointer/) && (r = !0);
                        var u = 0;
                        o && (n.HAS_POINTEREVENTS && e != n.EVENT_END ? u = n.PointerEvent.updatePointer(e, l) : c.match(/touch/) ? u = l.touches.length : r || (u = c.match(/up/) ? 0 : 1), u > 0 && e == n.EVENT_END ? e = n.EVENT_MOVE : u || (e = n.EVENT_END), u || null === s ? s = l : l = s, i.call(n.detection, a.collectEventData(t, e, l)), n.HAS_POINTEREVENTS && e == n.EVENT_END && (u = n.PointerEvent.updatePointer(e, l))), u || (s = null, o = !1, r = !1, n.PointerEvent.reset())
                    }
                })
            },
            determineEventTypes: function() {
                var t;
                t = n.HAS_POINTEREVENTS ? n.PointerEvent.getEvents() : n.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], n.EVENT_TYPES[n.EVENT_START] = t[0], n.EVENT_TYPES[n.EVENT_MOVE] = t[1], n.EVENT_TYPES[n.EVENT_END] = t[2]
            },
            getTouchList: function(t) { return n.HAS_POINTEREVENTS ? n.PointerEvent.getTouchList() : t.touches ? t.touches : [{ identifier: 1, pageX: t.pageX, pageY: t.pageY, target: t.target }] },
            collectEventData: function(t, e, i) {
                var s = this.getTouchList(i, e),
                    o = n.POINTER_TOUCH;
                return (i.type.match(/mouse/) || n.PointerEvent.matchType(n.POINTER_MOUSE, i)) && (o = n.POINTER_MOUSE), { center: n.utils.getCenter(s), timeStamp: (new Date).getTime(), target: i.target, touches: s, eventType: e, pointerType: o, srcEvent: i, preventDefault: function() { this.srcEvent.preventManipulation && this.srcEvent.preventManipulation(), this.srcEvent.preventDefault && this.srcEvent.preventDefault() }, stopPropagation: function() { this.srcEvent.stopPropagation() }, stopDetect: function() { return n.detection.stopDetect() } }
            }
        }, n.PointerEvent = {
            pointers: {},
            getTouchList: function() {
                var t = this,
                    e = [];
                return Object.keys(t.pointers).sort().forEach(function(i) { e.push(t.pointers[i]) }), e
            },
            updatePointer: function(t, e) { return t == n.EVENT_END ? this.pointers = {} : (e.identifier = e.pointerId, this.pointers[e.pointerId] = e), Object.keys(this.pointers).length },
            matchType: function(t, e) { if (!e.pointerType) return !1; var i = {}; return i[n.POINTER_MOUSE] = e.pointerType == e.MSPOINTER_TYPE_MOUSE || e.pointerType == n.POINTER_MOUSE, i[n.POINTER_TOUCH] = e.pointerType == e.MSPOINTER_TYPE_TOUCH || e.pointerType == n.POINTER_TOUCH, i[n.POINTER_PEN] = e.pointerType == e.MSPOINTER_TYPE_PEN || e.pointerType == n.POINTER_PEN, i[t] },
            getEvents: function() { return ["pointerdown MSPointerDown", "pointermove MSPointerMove", "pointerup pointercancel MSPointerUp MSPointerCancel"] },
            reset: function() { this.pointers = {} }
        }, n.utils = {
            extend: function(t, i, n) { for (var s in i) t[s] !== e && n || (t[s] = i[s]); return t },
            hasParent: function(t, e) {
                for (; t;) {
                    if (t == e) return !0;
                    t = t.parentNode
                }
                return !1
            },
            getCenter: function(t) { for (var e = [], i = [], n = 0, s = t.length; s > n; n++) e.push(t[n].pageX), i.push(t[n].pageY); return { pageX: (Math.min.apply(Math, e) + Math.max.apply(Math, e)) / 2, pageY: (Math.min.apply(Math, i) + Math.max.apply(Math, i)) / 2 } },
            getVelocity: function(t, e, i) { return { x: Math.abs(e / t) || 0, y: Math.abs(i / t) || 0 } },
            getAngle: function(t, e) {
                var i = e.pageY - t.pageY,
                    n = e.pageX - t.pageX;
                return 180 * Math.atan2(i, n) / Math.PI
            },
            getDirection: function(t, e) { return Math.abs(t.pageX - e.pageX) >= Math.abs(t.pageY - e.pageY) ? t.pageX - e.pageX > 0 ? n.DIRECTION_LEFT : n.DIRECTION_RIGHT : t.pageY - e.pageY > 0 ? n.DIRECTION_UP : n.DIRECTION_DOWN },
            getDistance: function(t, e) {
                var i = e.pageX - t.pageX,
                    n = e.pageY - t.pageY;
                return Math.sqrt(i * i + n * n)
            },
            getScale: function(t, e) { return t.length >= 2 && e.length >= 2 ? this.getDistance(e[0], e[1]) / this.getDistance(t[0], t[1]) : 1 },
            getRotation: function(t, e) { return t.length >= 2 && e.length >= 2 ? this.getAngle(e[1], e[0]) - this.getAngle(t[1], t[0]) : 0 },
            isVertical: function(t) { return t == n.DIRECTION_UP || t == n.DIRECTION_DOWN },
            stopDefaultBrowserBehavior: function(t, e) {
                var i, n = ["webkit", "khtml", "moz", "ms", "o", ""];
                if (e && t.style) {
                    for (var s = 0; n.length > s; s++)
                        for (var o in e) e.hasOwnProperty(o) && (i = o, n[s] && (i = n[s] + i.substring(0, 1).toUpperCase() + i.substring(1)), t.style[i] = e[o]);
                    "none" == e.userSelect && (t.onselectstart = function() { return !1 })
                }
            }
        }, n.detection = {
            gestures: [],
            current: null,
            previous: null,
            stopped: !1,
            startDetect: function(t, e) { this.current || (this.stopped = !1, this.current = { inst: t, startEvent: n.utils.extend({}, e), lastEvent: !1, name: "" }, this.detect(e)) },
            detect: function(t) { if (this.current && !this.stopped) { t = this.extendEventData(t); for (var e = this.current.inst.options, i = 0, s = this.gestures.length; s > i; i++) { var o = this.gestures[i]; if (!this.stopped && !1 !== e[o.name] && !1 === o.handler.call(o, t, this.current.inst)) { this.stopDetect(); break } } return this.current && (this.current.lastEvent = t), t.eventType == n.EVENT_END && !t.touches.length - 1 && this.stopDetect(), t } },
            stopDetect: function() { this.previous = n.utils.extend({}, this.current), this.current = null, this.stopped = !0 },
            extendEventData: function(t) {
                var e = this.current.startEvent;
                if (e && (t.touches.length != e.touches.length || t.touches === e.touches)) { e.touches = []; for (var i = 0, s = t.touches.length; s > i; i++) e.touches.push(n.utils.extend({}, t.touches[i])) }
                var o = t.timeStamp - e.timeStamp,
                    r = t.center.pageX - e.center.pageX,
                    a = t.center.pageY - e.center.pageY,
                    l = n.utils.getVelocity(o, r, a);
                return n.utils.extend(t, { deltaTime: o, deltaX: r, deltaY: a, velocityX: l.x, velocityY: l.y, distance: n.utils.getDistance(e.center, t.center), angle: n.utils.getAngle(e.center, t.center), direction: n.utils.getDirection(e.center, t.center), scale: n.utils.getScale(e.touches, t.touches), rotation: n.utils.getRotation(e.touches, t.touches), startEvent: e }), t
            },
            register: function(t) { var i = t.defaults || {}; return i[t.name] === e && (i[t.name] = !0), n.utils.extend(n.defaults, i, !0), t.index = t.index || 1e3, this.gestures.push(t), this.gestures.sort(function(t, e) { return t.index < e.index ? -1 : t.index > e.index ? 1 : 0 }), this.gestures }
        }, n.gestures = n.gestures || {}, n.gestures.Hold = {
            name: "hold",
            index: 10,
            defaults: { hold_timeout: 500, hold_threshold: 1 },
            timer: null,
            handler: function(t, e) {
                switch (t.eventType) {
                    case n.EVENT_START:
                        clearTimeout(this.timer), n.detection.current.name = this.name, this.timer = setTimeout(function() { "hold" == n.detection.current.name && e.trigger("hold", t) }, e.options.hold_timeout);
                        break;
                    case n.EVENT_MOVE:
                        t.distance > e.options.hold_threshold && clearTimeout(this.timer);
                        break;
                    case n.EVENT_END:
                        clearTimeout(this.timer)
                }
            }
        }, n.gestures.Tap = {
            name: "tap",
            index: 100,
            defaults: { tap_max_touchtime: 250, tap_max_distance: 10, tap_always: !0, doubletap_distance: 20, doubletap_interval: 300 },
            handler: function(t, e) {
                if (t.eventType == n.EVENT_END) {
                    var i = n.detection.previous,
                        s = !1;
                    if (t.deltaTime > e.options.tap_max_touchtime || t.distance > e.options.tap_max_distance) return;
                    i && "tap" == i.name && t.timeStamp - i.lastEvent.timeStamp < e.options.doubletap_interval && t.distance < e.options.doubletap_distance && (e.trigger("doubletap", t), s = !0), (!s || e.options.tap_always) && (n.detection.current.name = "tap", e.trigger(n.detection.current.name, t))
                }
            }
        }, n.gestures.Swipe = {
            name: "swipe",
            index: 40,
            defaults: { swipe_max_touches: 1, swipe_velocity: .7 },
            handler: function(t, e) {
                if (t.eventType == n.EVENT_END) {
                    if (e.options.swipe_max_touches > 0 && t.touches.length > e.options.swipe_max_touches) return;
                    (t.velocityX > e.options.swipe_velocity || t.velocityY > e.options.swipe_velocity) && (e.trigger(this.name, t), e.trigger(this.name + t.direction, t))
                }
            }
        }, n.gestures.Drag = {
            name: "drag",
            index: 50,
            defaults: { drag_min_distance: 10, drag_max_touches: 1, drag_block_horizontal: !1, drag_block_vertical: !1, drag_lock_to_axis: !1, drag_lock_min_distance: 25 },
            triggered: !1,
            handler: function(t, i) {
                if (n.detection.current.name != this.name && this.triggered) return i.trigger(this.name + "end", t), this.triggered = !1, e;
                if (!(i.options.drag_max_touches > 0 && t.touches.length > i.options.drag_max_touches)) switch (t.eventType) {
                    case n.EVENT_START:
                        this.triggered = !1;
                        break;
                    case n.EVENT_MOVE:
                        if (t.distance < i.options.drag_min_distance && n.detection.current.name != this.name) return;
                        n.detection.current.name = this.name, (n.detection.current.lastEvent.drag_locked_to_axis || i.options.drag_lock_to_axis && i.options.drag_lock_min_distance <= t.distance) && (t.drag_locked_to_axis = !0);
                        var s = n.detection.current.lastEvent.direction;
                        t.drag_locked_to_axis && s !== t.direction && (t.direction = n.utils.isVertical(s) ? 0 > t.deltaY ? n.DIRECTION_UP : n.DIRECTION_DOWN : 0 > t.deltaX ? n.DIRECTION_LEFT : n.DIRECTION_RIGHT), this.triggered || (i.trigger(this.name + "start", t), this.triggered = !0), i.trigger(this.name, t), i.trigger(this.name + t.direction, t), (i.options.drag_block_vertical && n.utils.isVertical(t.direction) || i.options.drag_block_horizontal && !n.utils.isVertical(t.direction)) && t.preventDefault();
                        break;
                    case n.EVENT_END:
                        this.triggered && i.trigger(this.name + "end", t), this.triggered = !1
                }
            }
        }, n.gestures.Transform = {
            name: "transform",
            index: 45,
            defaults: { transform_min_scale: .01, transform_min_rotation: 1, transform_always_block: !1 },
            triggered: !1,
            handler: function(t, i) {
                if (n.detection.current.name != this.name && this.triggered) return i.trigger(this.name + "end", t), this.triggered = !1, e;
                if (!(2 > t.touches.length)) switch (i.options.transform_always_block && t.preventDefault(), t.eventType) {
                    case n.EVENT_START:
                        this.triggered = !1;
                        break;
                    case n.EVENT_MOVE:
                        var s = Math.abs(1 - t.scale),
                            o = Math.abs(t.rotation);
                        if (i.options.transform_min_scale > s && i.options.transform_min_rotation > o) return;
                        n.detection.current.name = this.name, this.triggered || (i.trigger(this.name + "start", t), this.triggered = !0), i.trigger(this.name, t), o > i.options.transform_min_rotation && i.trigger("rotate", t), s > i.options.transform_min_scale && (i.trigger("pinch", t), i.trigger("pinch" + (1 > t.scale ? "in" : "out"), t));
                        break;
                    case n.EVENT_END:
                        this.triggered && i.trigger(this.name + "end", t), this.triggered = !1
                }
            }
        }, n.gestures.Touch = { name: "touch", index: -1 / 0, defaults: { prevent_default: !1, prevent_mouseevents: !1 }, handler: function(t, i) { return i.options.prevent_mouseevents && t.pointerType == n.POINTER_MOUSE ? (t.stopDetect(), e) : (i.options.prevent_default && t.preventDefault(), t.eventType == n.EVENT_START && i.trigger(this.name, t), e) } }, n.gestures.Release = { name: "release", index: 1 / 0, handler: function(t, e) { t.eventType == n.EVENT_END && e.trigger(this.name, t) } }, "object" == typeof module && "object" == typeof module.exports ? module.exports = n : (t.Hammer = n, "function" == typeof t.define && t.define.amd && t.define("hammer", [], function() { return n }))
    }(this),
    function(t, e) {
        "use strict";
        t !== e && (Hammer.event.bindDom = function(i, n, s) {
            t(i).on(n, function(t) {
                var i = t.originalEvent || t;
                i.pageX === e && (i.pageX = t.pageX, i.pageY = t.pageY), i.target || (i.target = t.target), i.which === e && (i.which = i.button), i.preventDefault || (i.preventDefault = t.preventDefault), i.stopPropagation || (i.stopPropagation = t.stopPropagation), s.call(this, i)
            })
        }, Hammer.Instance.prototype.on = function(e, i) { return t(this.element).on(e, i) }, Hammer.Instance.prototype.off = function(e, i) { return t(this.element).off(e, i) }, Hammer.Instance.prototype.trigger = function(e, i) { var n = t(this.element); return n.has(i.target).length && (n = t(i.target)), n.trigger({ type: e, gesture: i }) }, t.fn.hammer = function(e) {
            return this.each(function() {
                var i = t(this),
                    n = i.data("hammer");
                n ? n && e && Hammer.utils.extend(n.options, e) : i.data("hammer", new Hammer(this, e || {}))
            })
        })
    }(window.jQuery || window.Zepto),
    function(t) {
        t(document).ready(function() {
            window.innerWidth > 575 && (t(".xzoom5, .xzoom-gallery5").xzoom({ tint: "#006699", Xoffset: 15 }), "ontouchstart" in window ? (t(".xzoom5").each(function() { t(this).data("xzoom").eventunbind() }), t(".xzoom5").each(function() {
                var e = t(this).data("xzoom");
                t(this).hammer().on("tap", function(i) {
                    function n() {
                        if (2 == s) {
                            e.closezoom();
                            var i, n = e.gallery().cgallery,
                                o = new Array;
                            for (i in n) o[i] = { src: n[i] };
                            t.magnificPopup.open({ items: o, type: "image", gallery: { enabled: !0 } })
                        } else e.closezoom();
                        s = 0
                    }
                    i.pageX = i.gesture.center.pageX, i.pageY = i.gesture.center.pageY, e.eventmove = function(t) { t.hammer().on("drag", function(t) { t.pageX = t.gesture.center.pageX, t.pageY = t.gesture.center.pageY, e.movezoom(t), t.gesture.preventDefault() }) };
                    var s = 0;
                    e.eventclick = function(t) { t.hammer().on("tap", function() { s++, 1 == s && setTimeout(n, 300), i.gesture.preventDefault() }) }, e.openzoom(i)
                })
            })) : (t("#xzoom-fancy").bind("click", function(e) {
                var i = t(this).data("xzoom");
                i.closezoom(), t.fancybox.open(i.gallery().cgallery, { padding: 0, helpers: { overlay: { locked: !1 } } }), e.preventDefault()
            }), t("#xzoom-magnific").bind("click", function(e) {
                var i = t(this).data("xzoom");
                i.closezoom();
                var n, s = i.gallery().cgallery,
                    o = new Array;
                for (n in s) o[n] = { src: s[n] };
                t.magnificPopup.open({ items: o, type: "image", gallery: { enabled: !0 } }), e.preventDefault()
            })))
        })
    }(jQuery),
    function(t) {
        t(["jquery"], function(t) {
            return function() {
                function e(t, e, i) { return f({ type: w.error, iconClass: m().iconClasses.error, message: t, optionsOverride: i, title: e }) }

                function i(e, i) { return e || (e = m()), v = t("#" + e.containerId), v.length ? v : (i && (v = h(e)), v) }

                function n(t, e, i) { return f({ type: w.info, iconClass: m().iconClasses.info, message: t, optionsOverride: i, title: e }) }

                function s(t) { _ = t }

                function o(t, e, i) { return f({ type: w.success, iconClass: m().iconClasses.success, message: t, optionsOverride: i, title: e }) }

                function r(t, e, i) { return f({ type: w.warning, iconClass: m().iconClasses.warning, message: t, optionsOverride: i, title: e }) }

                function a(t, e) {
                    var n = m();
                    v || i(n), u(t, n, e) || c(n)
                }

                function l(e) { var n = m(); return v || i(n), e && 0 === t(":focus", e).length ? void g(e) : void(v.children().length && v.remove()) }

                function c(e) { for (var i = v.children(), n = i.length - 1; n >= 0; n--) u(t(i[n]), e) }

                function u(e, i, n) { var s = !(!n || !n.force) && n.force; return !(!e || !s && 0 !== t(":focus", e).length || (e[i.hideMethod]({ duration: i.hideDuration, easing: i.hideEasing, complete: function() { g(e) } }), 0)) }

                function h(e) { return v = t("<div/>").attr("id", e.containerId).addClass(e.positionClass), v.appendTo(t(e.target)), v }

                function d() { return { tapToDismiss: !0, toastClass: "toast", containerId: "toast-container", debug: !1, showMethod: "fadeIn", showDuration: 300, showEasing: "swing", onShown: void 0, hideMethod: "fadeOut", hideDuration: 1e3, hideEasing: "swing", onHidden: void 0, closeMethod: !1, closeDuration: !1, closeEasing: !1, closeOnHover: !0, extendedTimeOut: 1e3, iconClasses: { error: "toast-error", info: "toast-info", success: "toast-success", warning: "toast-warning" }, iconClass: "toast-info", positionClass: "toast-top-right", timeOut: 5e3, titleClass: "toast-title", messageClass: "toast-message", escapeHtml: !1, target: "body", closeHtml: '<button type="button">&times;</button>', closeClass: "toast-close-button", newestOnTop: !0, preventDuplicates: !1, progressBar: !1, progressClass: "toast-progress", rtl: !1 } }

                function p(t) { _ && _(t) }

                function f(e) {
                    function n(t) { return null == t && (t = ""), t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;") }

                    function s() {
                        var t = "";
                        switch (e.iconClass) {
                            case "toast-success":
                            case "toast-info":
                                t = "polite";
                                break;
                            default:
                                t = "assertive"
                        }
                        S.attr("aria-live", t)
                    }

                    function o() { e.iconClass && S.addClass(C.toastClass).addClass(x) }

                    function r() { C.newestOnTop ? v.prepend(S) : v.append(S) }

                    function a() {
                        if (e.title) {
                            var t = e.title;
                            C.escapeHtml && (t = n(e.title)), k.append(t).addClass(C.titleClass), S.append(k)
                        }
                    }

                    function l() {
                        if (e.message) {
                            var t = e.message;
                            C.escapeHtml && (t = n(e.message)), D.append(t).addClass(C.messageClass), S.append(D)
                        }
                    }

                    function c() { C.closeButton && (I.addClass(C.closeClass).attr("role", "button"), S.prepend(I)) }

                    function u() { C.progressBar && (E.addClass(C.progressClass), S.prepend(E)) }

                    function h() { C.rtl && S.addClass("rtl") }

                    function d(e) {
                        var i = e && !1 !== C.closeMethod ? C.closeMethod : C.hideMethod,
                            n = e && !1 !== C.closeDuration ? C.closeDuration : C.hideDuration,
                            s = e && !1 !== C.closeEasing ? C.closeEasing : C.hideEasing;
                        if (!t(":focus", S).length || e) return clearTimeout(P.intervalId), S[i]({ duration: n, easing: s, complete: function() { g(S), clearTimeout(T), C.onHidden && "hidden" !== A.state && C.onHidden(), A.state = "hidden", A.endTime = new Date, p(A) } })
                    }

                    function f() {
                        (C.timeOut > 0 || C.extendedTimeOut > 0) && (T = setTimeout(d, C.extendedTimeOut), P.maxHideTime = parseFloat(C.extendedTimeOut), P.hideEta = (new Date).getTime() + P.maxHideTime)
                    }

                    function _() { clearTimeout(T), P.hideEta = 0, S.stop(!0, !0)[C.showMethod]({ duration: C.showDuration, easing: C.showEasing }) }

                    function w() {
                        var t = (P.hideEta - (new Date).getTime()) / P.maxHideTime * 100;
                        E.width(t + "%")
                    }
                    var C = m(),
                        x = e.iconClass || C.iconClass;
                    if (void 0 !== e.optionsOverride && (C = t.extend(C, e.optionsOverride), x = e.optionsOverride.iconClass || x), ! function(t, e) {
                            if (t.preventDuplicates) {
                                if (e.message === y) return !0;
                                y = e.message
                            }
                            return !1
                        }(C, e)) {
                        b++, v = i(C, !0);
                        var T = null,
                            S = t("<div/>"),
                            k = t("<div/>"),
                            D = t("<div/>"),
                            E = t("<div/>"),
                            I = t(C.closeHtml),
                            P = { intervalId: null, hideEta: null, maxHideTime: null },
                            A = { toastId: b, state: "visible", startTime: new Date, options: C, map: e };
                        return function() { o(), a(), l(), c(), u(), h(), r(), s() }(),
                            function() { S.hide(), S[C.showMethod]({ duration: C.showDuration, easing: C.showEasing, complete: C.onShown }), C.timeOut > 0 && (T = setTimeout(d, C.timeOut), P.maxHideTime = parseFloat(C.timeOut), P.hideEta = (new Date).getTime() + P.maxHideTime, C.progressBar && (P.intervalId = setInterval(w, 10))) }(),
                            function() { C.closeOnHover && S.hover(_, f), !C.onclick && C.tapToDismiss && S.click(d), C.closeButton && I && I.click(function(t) { t.stopPropagation ? t.stopPropagation() : void 0 !== t.cancelBubble && !0 !== t.cancelBubble && (t.cancelBubble = !0), C.onCloseClick && C.onCloseClick(t), d(!0) }), C.onclick && S.click(function(t) { C.onclick(t), d() }) }(), p(A), C.debug && console && console.log(A), S
                    }
                }

                function m() { return t.extend({}, d(), C.options) }

                function g(t) { v || (v = i()), t.is(":visible") || (t.remove(), t = null, 0 === v.children().length && (v.remove(), y = void 0)) }
                var v, _, y, b = 0,
                    w = { error: "error", info: "info", success: "success", warning: "warning" },
                    C = { clear: a, remove: l, error: e, getContainer: i, info: n, options: {}, subscribe: s, success: o, version: "2.1.3", warning: r };
                return C
            }()
        })
    }("function" == typeof define && define.amd ? define : function(t, e) { "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : window.toastr = e(window.jQuery) }), $(function(t) {
        "use strict";
        t(document).ready(function() {
            function e() { t(".slide-progress").css({ width: "100%", transition: "width 8000ms" }) }

            function i() { t(".slide-progress").css({ width: 0, transition: "width 0s" }) }
            t(".profilearea.my-dropdown").on("mouseover", function() { t(".profilearea.my-dropdown .my-dropdown-menu.profile-dropdown").stop().show(0) }), t(".profilearea.my-dropdown").on("mouseout", function() { t(".profilearea.my-dropdown .my-dropdown-menu.profile-dropdown").stop().hide(0) }), t(function() {
                var e = window.location.href;
                new RegExp(e.replace(/\/$/, "") + "$");
                t(".core-nav-list li a").each(function() { e == this.href && t(this).addClass("active") })
            });
            var n = window.innerWidth;
            n > 991 && (t(".categories_title").on("click", function() { t(this).addClass("active"), t(".categories_menu_inner").stop().slideDown("medium") }), t(".categories_menu_inner > ul > li").on("click", function() { t(this).find(".link-area a").toggleClass("open").parent().parent().find(".categories_mega_menu, categorie_sub").addClass("open"), t(this).siblings().find(".categories_mega_menu, .categorie_sub").removeClass("open") }), t(document).on("mouseover", function(e) {
                var i = t(".categories_menu_inner, .categories_mega_menu, .categories_title");
                i.is(e.target) || 0 !== i.has(e.target).length || (t(".categories_menu_inner").stop().slideUp("medium"), t(".categories_mega_menu, .categorie_sub").removeClass("open"), t(".categories_mega_menu").removeClass("open"), t(".categories_title").removeClass("active"))
            })), n <= 991 && (t(".categories_title").on("click", function() { t(this).toggleClass("active"), t(".categories_menu_inner").stop().slideToggle("medium") }), t(".categories_menu_inner > ul > li").on("click", function() { t(this).find(".link-area a").toggleClass("open").parent().parent().find(".categories_mega_menu, categorie_sub").toggleClass("open"), t(this).siblings().find(".categories_mega_menu, .categorie_sub").removeClass("open") }), t(document).on("click", function(e) {
                var i = t(".categories_menu_inner, .categories_mega_menu, .categories_title");
                i.is(e.target) || 0 !== i.has(e.target).length || (t(".categories_menu_inner").stop().slideUp("medium"), t(".categories_mega_menu, .categorie_sub").removeClass("open"), t(".categories_mega_menu").removeClass("open"), t(".categories_title").removeClass("active"))
            }), t(".categories_menu_inner > ul > li.dropdown_list .link-area > a").on("click", function() { t(this).find("i").toggleClass("fa-plus").toggleClass("fa-minus") }), t(".categories_menu_inner > ul > li.dropdown_list .link-area > a").each(function() { t(this).html('<i class="fas fa-plus"></i>') })), t("nav").coreNavigation({ menuPosition: "right", container: !1, dropdownEvent: "hover", onOpenDropdown: function() { console.log("open") }, onCloseDropdown: function() { console.log("close") } }), t("select.nice").niceSelect(), t("#example").DataTable({ paging: !0, ordering: !1, info: !0 }), t(".video-play-btn").magnificPopup({ type: "video" }), t('[data-toggle="tooltip"]').tooltip({}), t('[rel-toggle="tooltip"]').tooltip(), t('[data-toggle="tooltip"]').on("click", function() { t(this).tooltip("hide") }), t('[rel-toggle="tooltip"]').on("click", function() { t(this).tooltip("hide") }), t("#accordion, #accordion2").accordion({ heightStyle: "content", collapsible: !0, icons: { header: "ui-icon-caret-1-e", activeHeader: " ui-icon-caret-1-s" } }), t("#product-details-tab").tabs();
            var s = t(".intro-carousel");
            if (t(".intro-content").length > 1 && s.owlCarousel({ loop: !0, nav: !1, dots: !0, autoplay: !0, autoplayTimeout: 8e3, animateOut: "fadeOut", animateIn: "fadeIn", smartSpeed: 1e3, onInitialized: e, onTranslate: i, onTranslated: e, responsive: { 0: { dots: !1, items: 1 }, 768: { items: 1 } } }), t(".intro-content").length > 1) {
                var o = t(".owl-item", s).eq(2),
                    r = o.find(".subtitle").attr("data-animation");
                o.find(".subtitle").addClass(r), setTimeout(function() { o.find(".subtitle").removeClass(r) }, 900);
                var a = o.find(".title").attr("data-animation");
                o.find(".title").addClass(a), setTimeout(function() { o.find(".title").removeClass(a) }, 900);
                var l = o.find(".text").attr("data-animation");
                o.find(".text").addClass(l), setTimeout(function() { o.find(".text").removeClass(l) }, 900)
            }
            t(".intro-content").length > 1 && s.on("changed.owl.carousel", function(e) {
                var i = t(".owl-item", s).eq(e.item.index),
                    n = i.find(".subtitle").attr("data-animation");
                i.find(".subtitle").addClass(n), setTimeout(function() { i.find(".subtitle").removeClass(n) }, 900);
                var o = i.find(".title").attr("data-animation");
                i.find(".title").addClass(o), setTimeout(function() { i.find(".title").removeClass(o) }, 900);
                var r = i.find(".text").attr("data-animation");
                i.find(".text").addClass(r), setTimeout(function() { i.find(".text").removeClass(r) }, 900)
            });
            var c = t(".flas-deal-slider");
            c.children().length > 1 && c.owlCarousel({ loop: !0, nav: !0, navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'], dots: !1, margin: 10, autoplay: !0, autoplayTimeout: 6e3, smartSpeed: 1e3, responsive: { 0: { items: 1 }, 414: { items: 2 }, 768: { items: 2 }, 992: { items: 3 }, 1200: { items: 4 } } }), t("[data-countdown]").each(function() {
                var e = t(this),
                    i = t(this).data("countdown");
                e.countdown(i, function(t) { e.html(t.strftime("<span>%D : <small>Days</small></span> <span>%H : <small>Hrs</small></span>  <span>%M : <small>Min</small></span> <span>%S <small>Sec</small></span>")) })
            }), t(".trending-item-slider").owlCarousel({ items: 4, autoplay: !1, margin: 0, loop: !0, dots: !0, nav: !0, center: !1, autoplayHoverPause: !0, navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"], smartSpeed: 800, responsive: { 0: { items: 2 }, 414: { items: 2 }, 768: { items: 2 }, 992: { items: 3 }, 1200: { items: 4 } } });
            var u = t(".hot-and-new-item-slider");
            u.children().length > 1 && u.owlCarousel({ items: 1, autoplay: !0, margin: 0, loop: !0, dots: !0, nav: !0, center: !1, autoplayHoverPause: !0, navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"], smartSpeed: 800, responsive: { 0: { items: 1 }, 414: { items: 1 } } });
            var h = t(".aside-review-slider");
            h.children().length > 1 && h.owlCarousel({ loop: !0, nav: !1, dots: !0, margin: 30, autoplay: !0, autoplayTimeout: 6e3, smartSpeed: 1e3, responsive: { 0: { items: 1 }, 768: { items: 1 } } }), t(document).on("click", function(e) {
                var i = t(".autocomplete-items");
                i.is(e.target) || 0 !== i.has(e.target).length || t(".autocomplete").hide()
            }), n <= 991 && t(document).on("mouseover", function(e) {
                var i = t(".xzoom-preview");
                i.is(e.target) || 0 !== i.has(e.target).length || t(".xzoom-preview").css("display", "none")
            }), n <= 991 && (t(".carticon").on("click", function() { t(this).next().toggleClass("show") }), t(document).on("click", function(e) {
                var i = t(".carticon, .my-dropdown-menu");
                i.is(e.target) || 0 !== i.has(e.target).length || t(".my-dropdown-menu").removeClass("show")
            }))
        }), t(document).on("click", ".bottomtotop", function() { t("html,body").animate({ scrollTop: 0 }, 2e3) });
        var e = "";
        t(window).on("scroll", function() {
            t(window).scrollTop() > 300 ? t(".mainmenu-area").addClass("nav-fixed") : t(".mainmenu-area").removeClass("nav-fixed");
            var i = t(this).scrollTop(),
                n = t(".bottomtotop");
            t(window).scrollTop() > 1e3 ? n.fadeIn(1e3) : n.fadeOut(1e3), e = i
        }), t(window).on("load", function() {
            t("#preloader").addClass("hide");
            t(".back-to-top");
            t(".bottomtotop").fadeOut(100)
        }), t("#coupon-link").on("click", function() { t("#coupon-form,#check-coupon-form").toggle() }), t(".preload-close").click(function() { t(".subscribe-preloader-wrap").hide() }), t(window).load(function() { setTimeout(function() { t("#subscriptionForm").show() }, 1e4) }), t(".partner-slider").owlCarousel({ loop: !0, nav: !1, dots: !0, autoplay: !0, margin: 30, autoplayTimeout: 3e3, smartSpeed: 1e3, responsive: { 0: { items: 2 }, 767: { items: 3 }, 993: { items: 4 }, 1200: { items: 5 }, 1920: { items: 5 } } }), t(".all-slider").owlCarousel({ loop: !0, dots: !1, nav: !0, navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"], margin: 0, autoplay: !1, items: 4, autoplayTimeout: 6e3, smartSpeed: 1e3, responsive: { 0: { items: 4 }, 768: { items: 4 } } })
    }), $(function(t) {
        "use strict";
        t(document).ready(function() {
            function e(t, e) {
                if (t.files && t.files[0]) {
                    var i = new FileReader;
                    i.onload = function(t) { e.attr("src", t.target.result) }, i.readAsDataURL(t.files[0])
                }
            }

            function i() { var e = 0; return t(".product-size .siz-list li").length > 0 && (e = parseFloat(t(".product-size .siz-list li.active").find(".size_price").val())), e }

            function n() {
                var e, i = 0,
                    n = parseFloat(t("#product_price").val()),
                    s = t(".product-attr:checked").map(function() { return t(this).data("price") }).get();
                for (e in s) i += parseFloat(s[e]);
                return i += n
            }
            1 == gs.is_loader && t(window).on("load", function(e) { setTimeout(function() { t("#preloader").fadeOut(500) }, 100) }), t("button.alert-close").on("click", function() { t(this).parent().hide() }), t(".rx-parent").on("click", function() { t(".rx-child").toggle(), t(this).toggleClass("rx-change") }), t(document).on("submit", "#contactform", function(e) {
                e.preventDefault(), t(".gocover").show(), t("button.submit-btn").prop("disabled", !0), t.ajax({
                    method: "POST",
                    url: t(this).prop("action"),
                    data: new FormData(this),
                    contentType: !1,
                    cache: !1,
                    processData: !1,
                    success: function(e) {
                        if (e.errors) {
                            t(".alert-success").hide(), t(".alert-danger").show(), t(".alert-danger ul").html("");
                            for (var i in e.errors) t(".alert-danger ul").append("<li>" + e.errors[i] + "</li>");
                            t("#contactform input[type=text], #contactform input[type=email], #contactform textarea").eq(0).focus(), t("#contactform .refresh_code").trigger("click")
                        } else t(".alert-danger").hide(), t(".alert-success").show(), t(".alert-success p").html(e), t("#contactform input[type=text], #contactform input[type=email], #contactform textarea").eq(0).focus(), t("#contactform input[type=text], #contactform input[type=email], #contactform textarea").val(""), t("#contactform .refresh_code").trigger("click");
                        t(".gocover").hide(), t("button.submit-btn").prop("disabled", !1)
                    }
                })
            }), t(document).on("submit", "#subscribeform", function(e) {
                e.preventDefault(), t("#sub-btn").prop("disabled", !0), t.ajax({
                    method: "POST",
                    url: t(this).prop("action"),
                    data: new FormData(this),
                    contentType: !1,
                    cache: !1,
                    processData: !1,
                    success: function(e) {
                        if (e.errors)
                            for (var i in e.errors) toastr.error(langg.subscribe_error);
                        else toastr.success(langg.subscribe_success), t(".preload-close").click();
                        t("#sub-btn").prop("disabled", !1)
                    }
                })
            }), t("#loginform").on("submit", function(e) {
                var i = t(this).parent();
                e.preventDefault(), i.find("button.submit-btn").prop("disabled", !0), i.find(".alert-info").show(), i.find(".alert-info p").html(t("#authdata").val()), t.ajax({
                    method: "POST",
                    url: t(this).prop("action"),
                    data: new FormData(this),
                    dataType: "JSON",
                    contentType: !1,
                    cache: !1,
                    processData: !1,
                    success: function(t) {
                        if (t.errors) { i.find(".alert-success").hide(), i.find(".alert-info").hide(), i.find(".alert-danger").show(), i.find(".alert-danger ul").html(""); for (var e in t.errors) i.find(".alert-danger p").html(t.errors[e]) } else i.find(".alert-info").hide(), i.find(".alert-danger").hide(), i.find(".alert-success").show(), i.find(".alert-success p").html("Success !"), 1 == t ? location.reload() : window.location = t;
                        i.find("button.submit-btn").prop("disabled", !1)
                    }
                })
            }), t(".mloginform").on("submit", function(e) {
                var i = t(this).parent();
                e.preventDefault(), i.find("button.submit-btn").prop("disabled", !0), i.find(".alert-info").show();
                var n = i.find(".mauthdata").val();
                t(".signin-form .alert-info p").html(n), t.ajax({
                    method: "POST",
                    url: t(this).prop("action"),
                    data: new FormData(this),
                    dataType: "JSON",
                    contentType: !1,
                    cache: !1,
                    processData: !1,
                    success: function(e) {
                        if (e.errors) { i.find(".alert-success").hide(), i.find(".alert-info").hide(), i.find(".alert-danger").show(), i.find(".alert-danger ul").html(""); for (var n in e.errors) t(".signin-form .alert-danger p").html(e.errors[n]) } else i.find(".alert-info").hide(), i.find(".alert-danger").hide(), i.find(".alert-success").show(), i.find(".alert-success p").html("Success !"), 1 == e ? location.reload() : window.location = e;
                        i.find("button.submit-btn").prop("disabled", !1)
                    }
                })
            }), t("#registerform").on("submit", function(e) {
                var i = t(this).parent();
                e.preventDefault(), i.find("button.submit-btn").prop("disabled", !0), i.find(".alert-info").show(), i.find(".alert-info p").html(t("#processdata").val()), t.ajax({
                    method: "POST",
                    url: t(this).prop("action"),
                    data: new FormData(this),
                    dataType: "JSON",
                    contentType: !1,
                    cache: !1,
                    processData: !1,
                    success: function(e) {
                        if (1 == e) window.location = mainurl + "/user/dashboard";
                        else if (e.errors) {
                            i.find(".alert-success").hide(), i.find(".alert-info").hide(), i.find(".alert-danger").show(), i.find(".alert-danger ul").html("");
                            for (var n in e.errors) i.find(".alert-danger p").html(e.errors[n]);
                            i.find("button.submit-btn").prop("disabled", !1)
                        } else i.find(".alert-info").hide(), i.find(".alert-danger").hide(), i.find(".alert-success").show(), i.find(".alert-success p").html(e), i.find("button.submit-btn").prop("disabled", !1);
                        t(".refresh_code").click()
                    }
                })
            }), t(".mregisterform").on("submit", function(e) {
                e.preventDefault();
                var i = t(this).parent();
                i.find("button.submit-btn").prop("disabled", !0), i.find(".alert-info").show();
                var n = i.find(".mprocessdata").val();
                i.find(".alert-info p").html(n), t.ajax({
                    method: "POST",
                    url: t(this).prop("action"),
                    data: new FormData(this),
                    dataType: "JSON",
                    contentType: !1,
                    cache: !1,
                    processData: !1,
                    success: function(e) {
                        if (1 == e) window.location = mainurl + "/user/dashboard";
                        else if (e.errors) {
                            i.find(".alert-success").hide(), i.find(".alert-info").hide(), i.find(".alert-danger").show(), i.find(".alert-danger ul").html("");
                            for (var n in e.errors) i.find(".alert-danger p").html(e.errors[n]);
                            i.find("button.submit-btn").prop("disabled", !1)
                        } else i.find(".alert-info").hide(), i.find(".alert-danger").hide(), i.find(".alert-success").show(), i.find(".alert-success p").html(e), i.find("button.submit-btn").prop("disabled", !1);
                        t(".refresh_code").click()
                    }
                })
            }), t("#forgotform").on("submit", function(e) {
                e.preventDefault();
                var i = t(this).parent();
                i.find("button.submit-btn").prop("disabled", !0), i.find(".alert-info").show(), i.find(".alert-info p").html(t(".authdata").val()), t.ajax({
                    method: "POST",
                    url: t(this).prop("action"),
                    data: new FormData(this),
                    dataType: "JSON",
                    contentType: !1,
                    cache: !1,
                    processData: !1,
                    success: function(t) {
                        if (t.errors) { i.find(".alert-success").hide(), i.find(".alert-info").hide(), i.find(".alert-danger").show(), i.find(".alert-danger ul").html(""); for (var e in t.errors) i.find(".alert-danger p").html(t.errors[e]) } else i.find(".alert-info").hide(), i.find(".alert-danger").hide(), i.find(".alert-success").show(), i.find(".alert-success p").html(t), i.find("input[type=email]").val("");
                        i.find("button.submit-btn").prop("disabled", !1)
                    }
                })
            }), t("#mforgotform").on("submit", function(e) {
                e.preventDefault();
                var i = t(this).parent();
                i.find("button.submit-btn").prop("disabled", !0), i.find(".alert-info").show(), i.find(".alert-info p").html(t(".fauthdata").val()), t.ajax({
                    method: "POST",
                    url: t(this).prop("action"),
                    data: new FormData(this),
                    dataType: "JSON",
                    contentType: !1,
                    cache: !1,
                    processData: !1,
                    success: function(t) {
                        if (t.errors) { i.find(".alert-success").hide(), i.find(".alert-info").hide(), i.find(".alert-danger").show(), i.find(".alert-danger ul").html(""); for (var e in t.errors) i.find(".alert-danger p").html(t.errors[e]) } else i.find(".alert-info").hide(), i.find(".alert-danger").hide(), i.find(".alert-success").show(), i.find(".alert-success p").html(t), i.find("input[type=email]").val("");
                        i.find("button.submit-btn").prop("disabled", !1)
                    }
                })
            }), t("#reportform").on("submit", function(e) {
                e.preventDefault(), t(".gocover").show();
                var i = t(this);
                i.find("button.submit-btn").prop("disabled", !0), t.ajax({
                    method: "POST",
                    url: t(this).prop("action"),
                    data: new FormData(this),
                    dataType: "JSON",
                    contentType: !1,
                    cache: !1,
                    processData: !1,
                    success: function(e) {
                        if (e.errors)
                            for (var n in e.errors) i.find(".alert-danger").show(), i.find(".alert-danger p").html(e.errors[n]);
                        else i.find("input[type=text],textarea").val(""), t("#report-modal").modal("hide"), toastr.success("Report Submitted Successfully.");
                        t(".gocover").hide(), i.find("button.submit-btn").prop("disabled", !1)
                    }
                })
            }), t(document).on("submit", "#userform", function(e) {
                e.preventDefault(), t(".gocover").show(), t("button.submit-btn").prop("disabled", !0), t.ajax({
                    method: "POST",
                    url: t(this).prop("action"),
                    data: new FormData(this),
                    contentType: !1,
                    cache: !1,
                    processData: !1,
                    success: function(e) {
                        if (e.errors) {
                            t(".alert-success").hide(), t(".alert-danger").show(), t(".alert-danger ul").html("");
                            for (var i in e.errors) t(".alert-danger ul").append("<li>" + e.errors[i] + "</li>");
                            t("#userform input[type=text], #userform input[type=email], #userform textarea").eq(0).focus()
                        } else t(".alert-danger").hide(), t(".alert-success").show(), t(".alert-success p").html(e), t("#userform input[type=text], #userform input[type=email], #userform textarea").eq(0).focus();
                        t(".gocover").hide(), t("button.submit-btn").prop("disabled", !1)
                    }
                })
            }), t(".upload").on("change", function() {
                var i = t(this).parent().parent().prev().find("img");
                t(this);
                e(this, i)
            }), t("#show-forgot").on("click", function() { t("#comment-log-reg").modal("hide"), t("#forgot-modal").modal("show") }), t("#show-forgot1").on("click", function() { t("#vendor-login").modal("hide"), t("#forgot-modal").modal("show") }), t("#show-login").on("click", function() { t("#forgot-modal").modal("hide"), t("#comment-log-reg").modal("show") }), t("#category_select").on("change", function() {
                var e = t(this).val();
                t("#category_id").val(e), t("#searchForm").attr("action", mainurl + "/category/" + t(this).val())
            }), t("#prod_name").on("keyup", function() { var e = encodeURIComponent(t(this).val()); "" == e ? t(".autocomplete").hide() : (t(".autocomplete").show(), t("#myInputautocomplete-list").load(mainurl + "/autosearch/product/" + e)) }), t(document).on("click", ".quick-view", function() { var e = t("#quickview"); return e.find(".modal-header").hide(), e.find(".modal-body").hide(), e.find(".modal-content").css("border", "none"), t(".submit-loader").show(), t(".quick-view-modal").load(t(this).data("href"), function(i, n, s) { "success" == n && t(".quick-zoom").on("load", function() { t(".submit-loader").hide(), e.find(".modal-header").show(), e.find(".modal-body").show(), e.find(".modal-content").css("border", "1px solid #00000033"), t(".quick-all-slider").owlCarousel({ loop: !0, dots: !1, nav: !0, navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"], margin: 0, autoplay: !1, items: 4, autoplayTimeout: 6e3, smartSpeed: 1e3, responsive: { 0: { items: 4 }, 768: { items: 4 } } }) }) }), !1 }), t(".selectors").on("change", function() {
                var e = t(this).val();
                window.location = e
            }), t(document).on("click", ".add-to-wish", function() { return t.get(t(this).data("href"), function(e) { 1 == e[0] ? (toastr.success(langg.add_wish), t("#wishlist-count").html(e[1])) : toastr.error(langg.already_wish) }), !1 }), t(document).on("click", "#wish-btn", function() { return !1 }), t(document).on("click", ".wishlist-remove", function() { t(this).parent().parent().remove(), t.get(t(this).data("href"), function(e) { t("#wishlist-count").html(e[1]), toastr.success(langg.wish_remove) }) }), t(document).on("click", ".add-to-compare", function() { return t.get(t(this).data("href"), function(e) { t("#compare-count").html(e[1]), 0 == e[0] ? toastr.success(langg.add_compare) : toastr.error(langg.already_compare) }), !1 }), t(document).on("click", ".compare-remove", function() {
                var e = t(this).attr("data-class");
                t.get(t(this).data("href"), function(i) { t("#compare-count").html(i[1]), 0 == i[0] ? (t("." + e).remove(), toastr.success(langg.compare_remove)) : (t("h2.title").html(langg.lang60), t(".compare-page-content-wrap").remove(), t("." + e).remove(), toastr.success(langg.compare_remove)) })
            }), t(document).on("click", ".add-to-cart", function() { return t.get(t(this).data("href"), function(e) { "digital" == e ? toastr.error(langg.already_cart) : 0 == e ? toastr.error(langg.out_stock) : (t("#cart-count").html(e[0]), t("#cart-items").load(mainurl + "/carts/view"), toastr.success(langg.add_cart)) }), !1 }), t(document).on("click", ".cart-remove", function() {
                var e = t(this).data("class");
                t("." + e).hide(), t.get(t(this).data("href"), function(e) { 0 == e ? (t("#cart-count").html(e), t(".cart-table").html('<h3 class="mt-1 pl-3 text-left">Cart is empty.</h3>'), t("#cart-items").html('<p class="mt-1 pl-3 text-left">Cart is empty.</p>'), t(".cartpage .col-lg-4").html("")) : (t(".cart-quantity").html(e[1]), t(".cart-total").html(e[0]), t(".coupon-total").val(e[0]), t(".main-total").html(e[3])) })
            });
            var s = "",
                o = "",
                r = "",
                a = "",
                l = "",
                c = "",
                u = t("#stock").val(),
                h = "",
                d = "",
                p = "";
            t(document).on("click", ".product-size .siz-list .box", function() {
                t(".qttotal").html("1");
                var e = t(this).parent();
                o = t(this).find(".size_qty").val(), r = t(this).find(".size_price").val(), a = t(this).find(".size_key").val(), s = t(this).find(".size").val(), t(".product-size .siz-list li").removeClass("active"), e.addClass("active"), c = n() + parseFloat(r), c = c.toFixed(2), u = o;
                var i = t("#curr_pos").val(),
                    l = t("#curr_sign").val();
                "0" == i ? t("#sizeprice").html(l + c) : t("#sizeprice").html(c + l)
            }), t(document).on("change", ".product-attr", function() {
                var e = 0;
                e = n() + i(), e = e.toFixed(2);
                var s = t("#curr_pos").val(),
                    o = t("#curr_sign").val();
                "0" == s ? t("#sizeprice").html(o + e) : t("#sizeprice").html(e + o)
            }), t(document).on("click", ".product-color .color-list .box", function() {
                l = t(this).data("color");
                var e = t(this).parent();
                t(".product-color .color-list li").removeClass("active"), e.addClass("active")
            }), t(document).on("submit", "#comment-form", function(e) { e.preventDefault(), t("#comment-form button.submit-btn").prop("disabled", !0), t.ajax({ method: "POST", url: t(this).prop("action"), data: new FormData(this), contentType: !1, cache: !1, processData: !1, success: function(e) { t("#comment_count").html(e[4]), t("#comment-form textarea").val(""), t(".all-comment").prepend('<li><div class="single-comment comment-section"><div class="left-area"><img src="' + e[0] + '" alt=""><h5 class="name">' + e[1] + '</h5><p class="date">' + e[2] + '</p></div><div class="right-area"><div class="comment-body"><p>' + e[3] + '</p></div><div class="comment-footer"><div class="links"><a href="javascript:;" class="comment-link reply mr-2"><i class="fas fa-reply "></i>' + langg.lang107 + '</a><a href="javascript:;" class="comment-link edit mr-2"><i class="fas fa-edit "></i>' + langg.lang111 + '</a><a href="javascript:;" data-href="' + e[5] + '" class="comment-link comment-delete mr-2"><i class="fas fa-trash"></i>' + langg.lang112 + '</a></div></div></div></div><div class="replay-area edit-area"><form class="update" action="' + e[6] + '" method="POST"><input type="hidden" name="_token" value="' + t("input[name=_token]").val() + '"><textarea placeholder="' + langg.lang113 + '" name="text" required=""></textarea><button type="submit">' + langg.lang114 + '</button><a href="javascript:;" class="remove">' + langg.lang115 + '</a></form></div><div class="replay-area reply-reply-area"><form class="reply-form" action="' + e[7] + '" method="POST"><input type="hidden" name="user_id" value="' + e[8] + '"><input type="hidden" name="_token" value="' + t("input[name=_token]").val() + '"><textarea placeholder="' + langg.lang117 + '" name="text" required=""></textarea><button type="submit">' + langg.lang114 + '</button><a href="javascript:;" class="remove">' + langg.lang115 + "</a></form></div></li>"), t("#comment-form button.submit-btn").prop("disabled", !1) } }) }), t(document).on("submit", ".reply-form", function(e) {
                e.preventDefault();
                var i = t(this).find("button[type=submit]");
                i.prop("disabled", !0);
                var n = t(this).parent(),
                    s = t(this).find("textarea");
                t.ajax({ method: "POST", url: t(this).prop("action"), data: new FormData(this), contentType: !1, cache: !1, processData: !1, success: function(e) { t("#comment-form textarea").val(""), t("button.submit-btn").prop("disabled", !1), n.before('<div class="single-comment replay-review"><div class="left-area"><img src="' + e[0] + '" alt=""><h5 class="name">' + e[1] + '</h5><p class="date">' + e[2] + '</p></div><div class="right-area"><div class="comment-body"><p>' + e[3] + '</p></div><div class="comment-footer"><div class="links"><a href="javascript:;" class="comment-link reply mr-2"><i class="fas fa-reply "></i>' + langg.lang107 + '</a><a href="javascript:;" class="comment-link edit mr-2"><i class="fas fa-edit "></i>' + langg.lang111 + '</a><a href="javascript:;" data-href="' + e[4] + '" class="comment-link reply-delete mr-2"><i class="fas fa-trash"></i>' + langg.lang112 + '</a></div></div></div></div><div class="replay-area edit-area"><form class="update" action="' + e[5] + '" method="POST"><input type="hidden" name="_token" value="' + t("input[name=_token]").val() + '"><textarea placeholder="' + langg.lang116 + '" name="text" required=""></textarea><button type="submit">' + langg.lang114 + '</button><a href="javascript:;" class="remove">' + langg.lang115 + "</a></form></div>"), n.toggle(), s.val(""), i.prop("disabled", !1) } })
            }), t(document).on("click", ".edit", function() {
                var e = t(this).parent().parent().prev().find("p").html();
                e = t.trim(e), t(this).parent().parent().parent().parent().next(".edit-area").find("textarea").val(e), t(this).parent().parent().parent().parent().next(".edit-area").toggle()
            }), t(document).on("submit", ".update", function(e) {
                e.preventDefault();
                var i = t(this).find("button[type=submit]"),
                    n = t(this).parent().prev().find(".right-area .comment-body p"),
                    s = t(this).parent();
                i.prop("disabled", !0), t.ajax({ method: "POST", url: t(this).prop("action"), data: new FormData(this), contentType: !1, cache: !1, processData: !1, success: function(t) { n.html(t), s.toggle(), i.prop("disabled", !1) } })
            }), t(document).on("click", ".comment-delete", function() {
                var e = parseInt(t("#comment_count").html());
                e--, t("#comment_count").html(e), t(this).parent().parent().parent().parent().parent().remove(), t.get(t(this).data("href"))
            }), t(document).on("click", ".reply", function() { t(this).parent().parent().parent().parent().parent().show().find(".reply-reply-area").show(), t(this).parent().parent().parent().parent().parent().show().find(".reply-reply-area .reply-form textarea").focus() }), t(document).on("click", ".reply-delete", function() { t(this).parent().parent().parent().parent().remove(), t.get(t(this).data("href")) }), t(document).on("click", ".view-reply", function() { t(this).parent().parent().parent().parent().siblings(".replay-review").removeClass("hidden") }), t(document).on("click", "#comment-area .remove", function() { t(this).parent().parent().hide() }), t(document).on("click", ".qtminus", function() {
                var e = t(this),
                    i = e.parent().parent().find(".qttotal");
                c = t(i).text(), c > 1 && c--, t(i).text(c)
            }), t(document).on("click", ".qtplus", function() {
                var e = t(this),
                    i = e.parent().parent().find(".qttotal");
                if (c = t(i).text(), "" != u) {
                    var n = parseInt(u);
                    c < n && (c++, t(i).text(c))
                } else c++;
                t(i).text(c)
            }), t(document).on("click", "#addcrt", function() {
                var e = t(".qttotal").html(),
                    i = t(this).parent().parent().parent().parent().find("#product_id").val();
                t(".product-attr").length > 0 && (d = t(".product-attr:checked").map(function() { return t(this).val() }).get(), h = t(".product-attr:checked").map(function() { return t(this).data("key") }).get(), p = t(".product-attr:checked").map(function() { return t(this).data("price") }).get()), t.ajax({ type: "GET", url: mainurl + "/addnumcart", data: { id: i, qty: e, size: s, color: l, size_qty: o, size_price: r, size_key: a, keys: h, values: d, prices: p }, success: function(e) { "digital" == e ? toastr.error(langg.already_cart) : 0 == e ? toastr.error(langg.out_stock) : (t("#cart-count").html(e[0]), t("#cart-items").load(mainurl + "/carts/view"), toastr.success(langg.add_cart)) } })
            }), t(document).on("click", "#qaddcrt", function() {
                var e = t(".qttotal").html(),
                    i = t(this).parent().parent().parent().parent().find("#product_id").val();
                t(".product-attr").length > 0 && (d = t(".product-attr:checked").map(function() { return t(this).val() }).get(), h = t(".product-attr:checked").map(function() { return t(this).data("key") }).get(), p = t(".product-attr:checked").map(function() { return t(this).data("price") }).get()), window.location = mainurl + "/addtonumcart?id=" + i + "&qty=" + e + "&size=" + s + "&color=" + l.substring(1, l.length) + "&size_qty=" + o + "&size_price=" + r + "&size_key=" + a + "&keys=" + h + "&values=" + d + "&prices=" + p
            }), t(document).on("click", ".adding", function() {
                var d = t(this).parent().parent().find(".db").val(),
                    e = t(this).parent().parent().find(".prodid").val(),
                    i = t(this).parent().parent().find(".itemid").val(),
                    n = t(this).parent().parent().find(".size_qty").val(),
                    s = t(this).parent().parent().find(".size_price").val(),
                    o = t("#stock" + i).val(),
                    r = t("#qty" + i).html();
                if ("" != o) { r < parseInt(o) && (r++, t("#qty" + i).html(r)) } else r++, t("#qty" + i).html(r);
                t.ajax({ type: "GET", url: mainurl + "/addbyone", data: { db: d, id: e, itemid: i, size_qty: n, size_price: s }, success: function(e) { 0 == e || (t(".discount").html(t("#d-val").val()), t(".cart-total").html(e[0]), t(".main-total").html(e[3]), t(".coupon-total").val(e[3]), t("#prc" + i).html(e[2]), t("#prct" + i).html(e[2]), t("#cqt" + i).html(e[1]), t("#qty" + i).html(e[1])) } })
            }), t(document).on("click", ".reducing", function() {
                var d = t(this).parent().parent().find(".db").val(),
                    e = t(this).parent().parent().find(".prodid").val(),
                    i = t(this).parent().parent().find(".itemid").val(),
                    n = t(this).parent().parent().find(".size_qty").val(),
                    s = t(this).parent().parent().find(".size_price").val(),
                    o = (t("#stock" + i).val(), t("#qty" + i).html());
                o--, o < 1 ? t("#qty" + i).html("1") : (t("#qty" + i).html(o), t.ajax({ type: "GET", url: mainurl + "/reducebyone", data: { db: d, id: e, itemid: i, size_qty: n, size_price: s }, success: function(e) { t(".discount").html(t("#d-val").val()), t(".cart-total").html(e[0]), t(".main-total").html(e[3]), t(".coupon-total").val(e[3]), t("#prc" + i).html(e[2]), t("#prct" + i).html(e[2]), t("#cqt" + i).html(e[1]), t("#qty" + i).html(e[1]) } }))
            }), t("#coupon-form").on("submit", function() {
                var e = t("#code").val(),
                    i = t("#grandtotal").val();
                return t.ajax({ type: "GET", url: mainurl + "/carts/coupon", data: { code: e, total: i }, success: function(e) { 0 == e ? (toastr.error(langg.no_coupon), t("#code").val("")) : 2 == e ? (toastr.error(langg.already_coupon), t("#code").val("")) : (t("#coupon_form").toggle(), t(".main-total").html(e[0]), t(".discount").html(e[4]), toastr.success(langg.coupon_found), t("#code").val("")) } }), !1
            }), t(document).on("change", ".color", function() {
                var e = t(this).parent().find("input[type=hidden]").val(),
                    i = t(this).val();
                t(this).css("background", i), t.ajax({ type: "GET", url: mainurl + "/upcolor", data: { id: e, color: i }, success: function(t) { toastr.success(langg.color_change) } })
            }), t(document).on("click", ".stars", function() { t(".stars").removeClass("active"), t(this).addClass("active"), t("#rating").val(t(this).data("val")) }), t(document).on("submit", "#reviewform", function(e) {
                var i = t(this);
                e.preventDefault(), t(".gocover").show(), t("button.submit-btn").prop("disabled", !0), t.ajax({
                    method: "POST",
                    url: t(this).prop("action"),
                    data: new FormData(this),
                    contentType: !1,
                    cache: !1,
                    processData: !1,
                    success: function(e) {
                        if (e.errors) {
                            t(".alert-success").hide(), t(".alert-danger").show(), t(".alert-danger ul").html("");
                            for (var n in e.errors) t(".alert-danger ul").append("<li>" + e.errors[n] + "</li>");
                            t("#reviewform textarea").eq(0).focus()
                        } else t(".alert-danger").hide(), t(".alert-success").show(), t(".alert-success p").html(e[0]), t("#star-rating").html(e[1]), t("#reviewform textarea").eq(0).focus(), t("#reviewform textarea").val(""), t("#reviews-section").load(i.data("href"));
                        t(".gocover").hide(), t("button.submit-btn").prop("disabled", !1)
                    }
                })
            }), t(document).on("submit", "#messageform", function(e) {
                e.preventDefault();
                var i = t(this).data("href");
                t(".gocover").show(), t("button.mybtn1").prop("disabled", !0), t.ajax({
                    method: "POST",
                    url: t(this).prop("action"),
                    data: new FormData(this),
                    contentType: !1,
                    cache: !1,
                    processData: !1,
                    success: function(e) {
                        if (e.errors) {
                            t(".alert-success").hide(), t(".alert-danger").show(), t(".alert-danger ul").html("");
                            for (var n in e.errors) t(".alert-danger ul").append("<li>" + e.errors[n] + "</li>");
                            t("#messageform textarea").val("")
                        } else t(".alert-danger").hide(), t(".alert-success").show(), t(".alert-success p").html(e), t("#messageform textarea").val(""), t("#messages").load(i);
                        t(".gocover").hide(), t("button.mybtn1").prop("disabled", !1)
                    }
                })
            }), t(document).on("click", ".favorite-prod", function() {
                var e = t(this);
                t.get(t(this).data("href")), e.html('<i class="icofont-check"></i> Favorite'), e.prop("class", "")
            }), t(".refresh_code").on("click", function() { t.get(mainurl + "/contact/refresh_code", function(e, i) { t(".codeimg1").attr("src", mainurl + "/assets/images/capcha_code.png?time=" + Math.random()) }) }), t("#nav-log-tab11").on("click", function() { t("#vendor-login .modal-dialog").removeClass("modal-lg") }), t("#nav-reg-tab11").on("click", function() { t("#vendor-login .modal-dialog").addClass("modal-lg") }), t(document).on("click", ".affilate-btn", function(e) { e.preventDefault(), window.open(t(this).data("href"), "_blank") }), t(document).on("click", ".add-to-cart-quick", function(e) { e.preventDefault(), window.location = t(this).data("href") }), t("#track-form").on("submit", function(e) {
                e.preventDefault();
                var i = t("#track-code").val();
                t(".submit-loader").removeClass("d-none"), t("#track-order").load(mainurl + "/order/track/" + i, function(e, i, n) { "success" == i && t(".submit-loader").addClass("d-none") })
            })
        })
    });