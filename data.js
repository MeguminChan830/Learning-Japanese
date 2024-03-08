export const dataRaw=`<!doctype html>
<html lang=en-us class=no-js>

<head>
    <script>var _ez_ab_test = 'mod1-c'</script>
    <script>var __ezHttpConsent = { setByCat: function (src, tagType, attributes, category, force) { var setScript = function () { if (force || window.ezTcfConsent[category]) { var scriptElement = document.createElement(tagType); scriptElement.src = src; attributes.forEach(function (attr) { for (var key in attr) { if (attr.hasOwnProperty(key)) { scriptElement.setAttribute(key, attr[key]); } } }); var firstScript = document.getElementsByTagName(tagType)[0]; firstScript.parentNode.insertBefore(scriptElement, firstScript); } }; if (force || (window.ezTcfConsent && window.ezTcfConsent.loaded)) { setScript(); } else if (typeof getEzConsentData === "function") { getEzConsentData().then(function (ezTcfConsent) { if (ezTcfConsent && ezTcfConsent.loaded) { setScript(); } else { console.error("cannot get ez consent data"); force = true; setScript(); } }); } else { force = true; setScript(); console.error("getEzConsentData is not a function"); } }, };</script>
    <script>var ezTcfConsent = window.ezTcfConsent ? window.ezTcfConsent : { loaded: false, store_info: false, develop_and_improve_services: false, measure_ad_performance: false, measure_content_performance: false, select_basic_ads: false, create_ad_profile: false, select_personalized_ads: false, create_content_profile: false, select_personalized_content: false, understand_audiences: false, use_limited_data_to_select_content: false, }; function getEzConsentData() { return new Promise(function (resolve) { document.addEventListener("ezConsentEvent", function (event) { var ezTcfConsent = event.detail.ezTcfConsent; resolve(ezTcfConsent); }); }); }</script>
    <script>function _setEzCookies(ezConsentData) { var cookies = [{ name: "ezoadgid_121822", value: "-1; Path=/; Domain=jlptsensei.com; Expires=Fri, 08 Mar 2024 03:24:26 UTC", tcfCategory: "understand_audiences", isEzoic: "true", }, { name: "ezoref_121822", value: "; Path=/; Domain=jlptsensei.com; Expires=Fri, 08 Mar 2024 04:54:26 UTC", tcfCategory: "understand_audiences", isEzoic: "true", }, { name: "ezosuibasgeneris-1", value: "b498b006-2504-4f2f-40a6-44c721c3dd77; Path=/; Domain=jlptsensei.com; Expires=Sat, 08 Mar 2025 02:54:26 UTC; Secure; SameSite=None", tcfCategory: "understand_audiences", isEzoic: "true", }, { name: "ezoab_121822", value: "mod1-c; Path=/; Domain=jlptsensei.com; Expires=Fri, 08 Mar 2024 04:54:26 UTC", tcfCategory: "store_info", isEzoic: "true", }, { name: "active_template::121822", value: "pub_site.1709866466; Path=/; Domain=jlptsensei.com; Expires=Sun, 10 Mar 2024 02:54:26 UTC", tcfCategory: "store_info", isEzoic: "true", }, { name: "lp_121822", value: "https://jlptsensei.com/learn-japanese/top-100-most-frequent-kanji-characters/; Path=/; Domain=jlptsensei.com; Expires=Fri, 08 Mar 2024 03:24:26 UTC", tcfCategory: "store_info", isEzoic: "true", }, { name: "ezovuuidtime_121822", value: "1709866466; Path=/; Domain=jlptsensei.com; Expires=Sun, 10 Mar 2024 02:54:26 UTC", tcfCategory: "understand_audiences", isEzoic: "true", }, { name: "ezovuuid_121822", value: "d672a4e2-a33b-4177-5e62-bcd9f815c22c; Path=/; Domain=jlptsensei.com; Expires=Fri, 08 Mar 2024 03:24:26 UTC", tcfCategory: "understand_audiences", isEzoic: "true", }, { name: "ezopvc_121822", value: "1; Path=/; Domain=jlptsensei.com; Expires=Fri, 08 Mar 2024 03:24:26 UTC", tcfCategory: "understand_audiences", isEzoic: "true", }]; for (var i = 0; i < cookies.length; i++) { var cookie = cookies[i]; if (ezConsentData && ezConsentData.loaded && ezConsentData[cookie.tcfCategory]) { document.cookie = cookie.name + "=" + cookie.value; } } }
        if (window.ezTcfConsent && window.ezTcfConsent.loaded) { _setEzCookies(window.ezTcfConsent); } else if (typeof getEzConsentData === "function") { getEzConsentData().then(function (ezTcfConsent) { if (ezTcfConsent && ezTcfConsent.loaded) { _setEzCookies(window.ezTcfConsent); } else { console.error("cannot get ez consent data"); _setEzCookies(window.ezTcfConsent); } }); } else { console.error("getEzConsentData is not a function"); _setEzCookies(window.ezTcfConsent); }</script>
    <link rel=preload as=image importance=high fetchpriority=high
        href="https://jlptsensei.com/wp-content/uploads/2020/03/top-100-japanese-kanji-most-frequent-%E6%BC%A2%E5%AD%97-900x507.png?ezimgfmt=rs%3Adevice%2Frscb1-1">
    <script data-ezscrex=false data-cfasync=false
        data-pagespeed-no-defer>var __ez = __ez || {}; __ez.stms = Date.now(); __ez.evt = {}; __ez.script = {}; __ez.ck = __ez.ck || {}; __ez.template = {}; __ez.template.isOrig = false; window.__ezScriptHost = "//www.ezojs.com"; __ez.queue = function () { var e = 0, i = 0, t = [], n = !1, o = [], r = [], s = !0, a = function (e, i, n, o, r, s, a) { var l = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : window, d = this; this.name = e, this.funcName = i, this.parameters = null === n ? null : p(n) ? n : [n], this.isBlock = o, this.blockedBy = r, this.deleteWhenComplete = s, this.isError = !1, this.isComplete = !1, this.isInitialized = !1, this.proceedIfError = a, this.fWindow = l, this.isTimeDelay = !1, this.process = function () { f("... func = " + e), d.isInitialized = !0, d.isComplete = !0, f("... func.apply: " + e); var i = d.funcName.split("."), n = null, o = this.fWindow || window; i.length > 3 || (n = 3 === i.length ? o[i[0]][i[1]][i[2]] : 2 === i.length ? o[i[0]][i[1]] : o[d.funcName]), null != n && n.apply(null, this.parameters), !0 === d.deleteWhenComplete && delete t[e], !0 === d.isBlock && (f("----- F'D: " + d.name), u()) } }, l = function (e, i, t, n, o, r, s) { var a = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : window, l = this; this.name = e, this.path = i, this.async = o, this.defer = r, this.isBlock = t, this.blockedBy = n, this.isInitialized = !1, this.isError = !1, this.isComplete = !1, this.proceedIfError = s, this.fWindow = a, this.isTimeDelay = !1, this.isPath = function (e) { return "/" === e[0] && "/" !== e[1] }, this.getSrc = function (e) { return void 0 !== window.__ezScriptHost && this.isPath(e) && "banger.js" !== this.name ? window.__ezScriptHost + e : e }, this.process = function () { l.isInitialized = !0, f("... file = " + e); var i = this.fWindow ? this.fWindow.document : document, t = i.createElement("script"); t.src = this.getSrc(this.path), !0 === o ? t.async = !0 : !0 === r && (t.defer = !0), t.onerror = function () { var e = { url: window.location.href, name: l.name, path: l.path, user_agent: window.navigator.userAgent }; "undefined" != typeof _ezaq && (e.pageview_id = _ezaq.page_view_id); var i = encodeURIComponent(JSON.stringify(e)), t = new XMLHttpRequest; t.open("GET", "//g.ezoic.net/ezqlog?d=" + i, !0), t.send(), f("----- ERR'D: " + l.name), l.isError = !0, !0 === l.isBlock && u() }, t.onreadystatechange = t.onload = function () { var e = t.readyState; f("----- F'D: " + l.name), e && !/loaded|complete/.test(e) || (l.isComplete = !0, !0 === l.isBlock && u()) }, i.getElementsByTagName("head")[0].appendChild(t) } }, d = function (e, i) { this.name = e, this.path = "", this.async = !1, this.defer = !1, this.isBlock = !1, this.blockedBy = [], this.isInitialized = !0, this.isError = !1, this.isComplete = i, this.proceedIfError = !1, this.isTimeDelay = !1, this.process = function () { } }; function c(e) { !0 !== h(e) && 0 != s && e.process() } function h(e) { if (!0 === e.isTimeDelay && !1 === n) return f(e.name + " blocked = TIME DELAY!"), !0; if (p(e.blockedBy)) for (var i = 0; i < e.blockedBy.length; i++) { var o = e.blockedBy[i]; if (!1 === t.hasOwnProperty(o)) return f(e.name + " blocked = " + o), !0; if (!0 === e.proceedIfError && !0 === t[o].isError) return !1; if (!1 === t[o].isComplete) return f(e.name + " blocked = " + o), !0 } return !1 } function f(e) { var i = window.location.href, t = new RegExp("[?&]ezq=([^&#]*)", "i").exec(i); "1" === (t ? t[1] : null) && console.debug(e) } function u() { ++e > 200 || (f("let's go"), m(o), m(r)) } function m(e) { for (var i in e) if (!1 !== e.hasOwnProperty(i)) { var t = e[i]; !0 === t.isComplete || h(t) || !0 === t.isInitialized || !0 === t.isError ? !0 === t.isError ? f(t.name + ": error") : !0 === t.isComplete ? f(t.name + ": complete already") : !0 === t.isInitialized && f(t.name + ": initialized already") : t.process() } } function p(e) { return "[object Array]" == Object.prototype.toString.call(e) } return window.addEventListener("load", (function () { setTimeout((function () { n = !0, f("TDELAY -----"), u() }), 5e3) }), !1), { addFile: function (e, i, n, s, a, d, h, f, u) { var m = new l(e, i, n, s, a, d, h, u); !0 === f ? o[e] = m : r[e] = m, t[e] = m, c(m) }, addDelayFile: function (e, i) { var n = new l(e, i, !1, [], !1, !1, !0); n.isTimeDelay = !0, f(e + " ...  FILE! TDELAY"), r[e] = n, t[e] = n, c(n) }, addFunc: function (e, n, s, l, d, h, f, u, m, p) { !0 === h && (e = e + "_" + i++); var w = new a(e, n, s, l, d, f, u, p); !0 === m ? o[e] = w : r[e] = w, t[e] = w, c(w) }, addDelayFunc: function (e, i, n) { var o = new a(e, i, n, !1, [], !0, !0); o.isTimeDelay = !0, f(e + " ...  FUNCTION! TDELAY"), r[e] = o, t[e] = o, c(o) }, items: t, processAll: u, setallowLoad: function (e) { s = e }, markLoaded: function (e) { if (e && 0 !== e.length) { if (e in t) { var i = t[e]; !0 === i.isComplete ? f(i.name + " " + e + ": error loaded duplicate") : (i.isComplete = !0, i.isInitialized = !0) } else t[e] = new d(e, !0); f("markLoaded dummyfile: " + t[e].name) } }, logWhatsBlocked: function () { for (var e in t) !1 !== t.hasOwnProperty(e) && h(t[e]) } } }(); __ez.evt.add = function (e, t, n) { e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n() }, __ez.evt.remove = function (e, t, n) { e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent ? e.detachEvent("on" + t, n) : delete e["on" + t] }; __ez.script.add = function (e) { var t = document.createElement("script"); t.src = e, t.async = !0, t.type = "text/javascript", document.getElementsByTagName("head")[0].appendChild(t) }; __ez.dot = {}; __ez.queue.addFile('/detroitchicago/boise.js', '/detroitchicago/boise.js?gcb=195-2&cb=5', true, [], true, false, true, false); __ez.queue.addFile('/parsonsmaize/abilene.js', '/parsonsmaize/abilene.js?gcb=195-2&cb=33', true, [], true, false, true, false);</script>
    <script data-ezscrex=false
        data-cfasync=false>__ez.ssaf = [17, 19, 16]; __ez.sswp = 4; __ez.ssv = 347525; __ez.sshsdef = false;</script>
    <script data-ezscrex=false
        data-cfasync=false>__ez.queue.addFile('/tardisrocinante/screx.js', '/tardisrocinante/screx.js?gcb=2&cb=5', false, ['/detroitchicago/tulsa.js'], true, false, true, false);</script>
    <script data-ezscrex=false
        data-cfasync=false>(function () { if ("function" === typeof window.CustomEvent) return !1; window.CustomEvent = function (c, a) { a = a || { bubbles: !1, cancelable: !1, detail: null }; var b = document.createEvent("CustomEvent"); b.initCustomEvent(c, a.bubbles, a.cancelable, a.detail); return b } })();</script>
    <script data-ezscrex=false
        data-cfasync=false>__ez.queue.addFile('/detroitchicago/tulsa.js', '/detroitchicago/tulsa.js?gcb=195-2&cb=9', false, [], true, false, true, false);</script>
    <script data-ezscrex=false
        data-cfasync=false>window._ezaq = Object.assign({}, typeof window._ezaq !== "undefined" ? window._ezaq : {}, { "ad_cache_level": 0, "domain_id": 121822, "ezcache_level": 2, "ezcache_skip_code": 0, "has_bad_image": 0, "has_bad_words": 0, "is_sitespeed": 1, "lt_cache_level": 0, "page_view_id": "1f2f28bb-c182-433b-622a-1cf42a1bd3de", "response_size_orig": 190906, "response_time_orig": 3, "template_id": 134, "url": "https://jlptsensei.com/learn-japanese/top-100-most-frequent-kanji-characters/", "visit_uuid": "d672a4e2-a33b-4177-5e62-bcd9f815c22c", "word_count": 1824, "worst_bad_word_level": 0 }); __ez.queue.markLoaded('ezaqBaseReady');</script>
    <link rel=preconnect href=//www.googletagmanager.com crossorigin>
    <link rel=preconnect href=//cdnjs.cloudflare.com crossorigin>
    <link rel=preconnect href=//go.ezodn.com crossorigin>
    <link rel=preconnect href=//fonts.gstatic.com crossorigin>
    <link rel=preconnect href=//fonts.googleapis.com crossorigin>
    <link rel=preconnect href=//stackpath.bootstrapcdn.com crossorigin>
    <link rel=preconnect href=//go.ezoic.net crossorigin>
    <style class=ezcritcss>
        :root {
            --blue: #007bff;
            --indigo: #6610f2;
            --purple: #6f42c1;
            --pink: #e83e8c;
            --red: #dc3545;
            --orange: #fd7e14;
            --yellow: #ffc107;
            --green: #28a745;
            --teal: #20c997;
            --cyan: #17a2b8;
            --white: #fff;
            --gray: #6c757d;
            --gray-dark: #343a40;
            --primary: #007bff;
            --secondary: #6c757d;
            --success: #28a745;
            --info: #17a2b8;
            --warning: #ffc107;
            --danger: #dc3545;
            --light: #f8f9fa;
            --dark: #343a40;
            --breakpoint-xs: 0;
            --breakpoint-sm: 576px;
            --breakpoint-md: 768px;
            --breakpoint-lg: 992px;
            --breakpoint-xl: 1200px;
            --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
            --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace
        }

        *,
        ::after,
        ::before {
            box-sizing: border-box
        }

        html {
            font-family: sans-serif;
            line-height: 1.15;
            -webkit-text-size-adjust: 100%
        }

        article,
        aside,
        header,
        main,
        nav,
        section {
            display: block
        }

        body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, segoe ui, Roboto, helvetica neue, Arial, noto sans, sans-serif, apple color emoji, segoe ui emoji, segoe ui symbol, noto color emoji;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #212529;
            text-align: left;
            background-color: #fff
        }

        h1,
        h2 {
            margin-top: 0;
            margin-bottom: .5rem
        }

        p {
            margin-top: 0;
            margin-bottom: 1rem
        }

        ul {
            margin-top: 0;
            margin-bottom: 1rem
        }

        b {
            font-weight: bolder
        }

        a {
            color: #007bff;
            text-decoration: none;
            background-color: initial
        }

        img {
            vertical-align: middle;
            border-style: none
        }

        table {
            border-collapse: collapse
        }

        th {
            text-align: inherit
        }

        label {
            display: inline-block;
            margin-bottom: .5rem
        }

        button {
            border-radius: 0
        }

        button,
        input {
            margin: 0;
            font-family: inherit;
            font-size: inherit;
            line-height: inherit
        }

        button,
        input {
            overflow: visible
        }

        button {
            text-transform: none
        }

        [type=button],
        [type=submit],
        button {
            -webkit-appearance: button
        }

        [type=button]::-moz-focus-inner,
        [type=submit]::-moz-focus-inner,
        button::-moz-focus-inner {
            padding: 0;
            border-style: none
        }

        [type=search] {
            outline-offset: -2px;
            -webkit-appearance: none
        }

        [type=search]::-webkit-search-decoration {
            -webkit-appearance: none
        }

        ::-webkit-file-upload-button {
            font: inherit;
            -webkit-appearance: button
        }

        h1,
        h2 {
            margin-bottom: .5rem;
            font-weight: 500;
            line-height: 1.2
        }

        h1 {
            font-size: 2.5rem
        }

        h2 {
            font-size: 2rem
        }

        .container {
            width: 100%;
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto
        }

        @media(min-width:576px) {
            .container {
                max-width: 540px
            }
        }

        @media(min-width:768px) {
            .container {
                max-width: 720px
            }
        }

        @media(min-width:992px) {
            .container {
                max-width: 960px
            }
        }

        @media(min-width:1200px) {
            .container {
                max-width: 1140px
            }
        }

        .row {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            margin-right: -15px;
            margin-left: -15px
        }

        .col-12,
        .col-lg-4,
        .col-lg-8 {
            position: relative;
            width: 100%;
            padding-right: 15px;
            padding-left: 15px
        }

        .col-12 {
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            max-width: 100%
        }

        @media(min-width:992px) {
            .col-lg-4 {
                -ms-flex: 0 0 33.333333%;
                flex: 0 0 33.333333%;
                max-width: 33.333333%
            }

            .col-lg-8 {
                -ms-flex: 0 0 66.666667%;
                flex: 0 0 66.666667%;
                max-width: 66.666667%
            }
        }

        .table {
            width: 100%;
            margin-bottom: 1rem;
            color: #212529
        }

        .table td,
        .table th {
            padding: .75rem;
            vertical-align: top;
            border-top: 1px solid #dee2e6
        }

        .table thead th {
            vertical-align: bottom;
            border-bottom: 2px solid #dee2e6
        }

        .table-bordered {
            border: 1px solid #dee2e6
        }

        .table-bordered td,
        .table-bordered th {
            border: 1px solid #dee2e6
        }

        .table-bordered thead th {
            border-bottom-width: 2px
        }

        .table-striped tbody tr:nth-of-type(odd) {
            background-color: rgba(0, 0, 0, 5%)
        }

        .table-responsive {
            display: block;
            width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch
        }

        .table-responsive>.table-bordered {
            border: 0
        }

        .form-control {
            display: block;
            width: 100%;
            height: calc(1.5em + .75rem + 2px);
            padding: .375rem .75rem;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #495057;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #ced4da;
            border-radius: .25rem
        }

        .form-control::-ms-expand {
            background-color: initial;
            border: 0
        }

        .form-control::-webkit-input-placeholder {
            color: #6c757d;
            opacity: 1
        }

        .form-control::-moz-placeholder {
            color: #6c757d;
            opacity: 1
        }

        .form-control:-ms-input-placeholder {
            color: #6c757d;
            opacity: 1
        }

        .form-control::-ms-input-placeholder {
            color: #6c757d;
            opacity: 1
        }

        .form-inline {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-flow: row wrap;
            flex-flow: row wrap;
            -ms-flex-align: center;
            align-items: center
        }

        @media(min-width:576px) {
            .form-inline .form-control {
                display: inline-block;
                width: auto;
                vertical-align: middle
            }
        }

        .btn {
            display: inline-block;
            font-weight: 400;
            color: #212529;
            text-align: center;
            vertical-align: middle;
            background-color: initial;
            border: 1px solid transparent;
            padding: .375rem .75rem;
            font-size: 1rem;
            line-height: 1.5;
            border-radius: .25rem
        }

        .btn-danger {
            color: #fff;
            background-color: #dc3545;
            border-color: #dc3545
        }

        .btn-outline-info {
            color: #17a2b8;
            border-color: #17a2b8
        }

        .btn-block {
            display: block;
            width: 100%
        }

        .collapse:not(.show) {
            display: none
        }

        .dropdown {
            position: relative
        }

        .dropdown-toggle {
            white-space: nowrap
        }

        .dropdown-toggle::after {
            display: inline-block;
            margin-left: .255em;
            vertical-align: .255em;
            content: "";
            border-top: .3em solid;
            border-right: .3em solid transparent;
            border-bottom: 0;
            border-left: .3em solid transparent
        }

        .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 0;
            z-index: 1000;
            display: none;
            float: left;
            min-width: 10rem;
            padding: .5rem 0;
            margin: .125rem 0 0;
            font-size: 1rem;
            color: #212529;
            text-align: left;
            list-style: none;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid rgba(0, 0, 0, .15);
            border-radius: .25rem
        }

        .dropdown-item {
            display: block;
            width: 100%;
            padding: .25rem 1.5rem;
            clear: both;
            font-weight: 400;
            color: #212529;
            text-align: inherit;
            white-space: nowrap;
            background-color: initial;
            border: 0
        }

        .nav-link {
            display: block;
            padding: .5rem 1rem
        }

        .navbar {
            position: relative;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-pack: justify;
            justify-content: space-between;
            padding: .5rem 1rem
        }

        .navbar>.container {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-pack: justify;
            justify-content: space-between
        }

        .navbar-brand {
            display: inline-block;
            padding-top: .3125rem;
            padding-bottom: .3125rem;
            margin-right: 1rem;
            font-size: 1.25rem;
            line-height: inherit;
            white-space: nowrap
        }

        .navbar-nav {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-direction: column;
            flex-direction: column;
            padding-left: 0;
            margin-bottom: 0;
            list-style: none
        }

        .navbar-nav .nav-link {
            padding-right: 0;
            padding-left: 0
        }

        .navbar-nav .dropdown-menu {
            position: static;
            float: none
        }

        .navbar-collapse {
            -ms-flex-preferred-size: 100%;
            flex-basis: 100%;
            -ms-flex-positive: 1;
            flex-grow: 1;
            -ms-flex-align: center;
            align-items: center
        }

        .navbar-toggler {
            padding: .25rem .75rem;
            font-size: 1.25rem;
            line-height: 1;
            background-color: initial;
            border: 1px solid transparent;
            border-radius: .25rem
        }

        .navbar-toggler-icon {
            display: inline-block;
            width: 1.5em;
            height: 1.5em;
            vertical-align: middle;
            content: "";
            background: no-repeat 50%;
            background-size: 100% 100%
        }

        @media(max-width:991.98px) {
            .navbar-expand-lg>.container {
                padding-right: 0;
                padding-left: 0
            }
        }

        @media(min-width:992px) {
            .navbar-expand-lg {
                -ms-flex-flow: row nowrap;
                flex-flow: row nowrap;
                -ms-flex-pack: start;
                justify-content: flex-start
            }

            .navbar-expand-lg .navbar-nav {
                -ms-flex-direction: row;
                flex-direction: row
            }

            .navbar-expand-lg .navbar-nav .dropdown-menu {
                position: absolute
            }

            .navbar-expand-lg .navbar-nav .nav-link {
                padding-right: .5rem;
                padding-left: .5rem
            }

            .navbar-expand-lg>.container {
                -ms-flex-wrap: nowrap;
                flex-wrap: nowrap
            }

            .navbar-expand-lg .navbar-collapse {
                display: -ms-flexbox !important;
                display: flex !important;
                -ms-flex-preferred-size: auto;
                flex-basis: auto
            }

            .navbar-expand-lg .navbar-toggler {
                display: none
            }
        }

        .navbar-light .navbar-brand {
            color: rgba(0, 0, 0, .9)
        }

        .navbar-light .navbar-nav .nav-link {
            color: rgba(0, 0, 0, .5)
        }

        .navbar-light .navbar-toggler {
            color: rgba(0, 0, 0, .5);
            border-color: rgba(0, 0, 0, .1)
        }

        .align-middle {
            vertical-align: middle !important
        }

        .bg-danger {
            background-color: #dc3545 !important
        }

        .bg-light {
            background-color: #f8f9fa !important
        }

        .bg-white {
            background-color: #fff !important
        }

        .rounded-circle {
            border-radius: 50% !important
        }

        .clearfix::after {
            display: block;
            clear: both;
            content: ""
        }

        .d-block {
            display: block !important
        }

        @media(min-width:992px) {
            .d-lg-none {
                display: none !important
            }
        }

        .fixed-top {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            z-index: 1030
        }

        .mt-0 {
            margin-top: 0 !important
        }

        .mb-0 {
            margin-bottom: 0 !important
        }

        .mt-2,
        .my-2 {
            margin-top: .5rem !important
        }

        .mb-2,
        .my-2 {
            margin-bottom: .5rem !important
        }

        .mt-3,
        .my-3 {
            margin-top: 1rem !important
        }

        .mb-3,
        .my-3 {
            margin-bottom: 1rem !important
        }

        .mr-auto,
        .mx-auto {
            margin-right: auto !important
        }

        .mx-auto {
            margin-left: auto !important
        }

        @media(min-width:576px) {
            .my-sm-0 {
                margin-top: 0 !important
            }

            .my-sm-0 {
                margin-bottom: 0 !important
            }
        }

        @media(min-width:768px) {
            .my-md-4 {
                margin-top: 1.5rem !important
            }

            .my-md-4 {
                margin-bottom: 1.5rem !important
            }
        }

        @media(min-width:992px) {
            .mt-lg-4 {
                margin-top: 1.5rem !important
            }

            .mt-lg-5 {
                margin-top: 3rem !important
            }
        }

        .text-center {
            text-align: center !important
        }

        .text-white {
            color: #fff !important
        }

        .text-dark {
            color: #343a40 !important
        }

        ul {
            box-sizing: border-box
        }

        :root {
            --wp--preset--font-size--normal: 16px;
            --wp--preset--font-size--huge: 42px
        }

        #cookie-notice {
            position: fixed;
            min-width: 100%;
            height: auto;
            z-index: 100000;
            font-size: 13px;
            letter-spacing: 0;
            line-height: 20px;
            left: 0;
            text-align: center;
            font-weight: 400;
            font-family: -apple-system, BlinkMacSystemFont, Arial, Roboto, helvetica neue, sans-serif
        }

        #cookie-notice,
        #cookie-notice * {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box
        }

        #cookie-notice .cookie-notice-container {
            display: block
        }

        .cn-position-bottom {
            bottom: 0
        }

        .cookie-notice-container {
            padding: 15px 30px;
            text-align: center;
            width: 100%;
            z-index: 2
        }

        .cn-close-icon {
            position: absolute;
            right: 15px;
            top: 50%;
            margin-top: -10px;
            width: 15px;
            height: 15px;
            opacity: .5;
            padding: 10px;
            outline: 0
        }

        .cn-close-icon:before,
        .cn-close-icon:after {
            position: absolute;
            content: ' ';
            height: 15px;
            width: 2px;
            top: 3px;
            background-color: gray
        }

        .cn-close-icon:before {
            transform: rotate(45deg)
        }

        .cn-close-icon:after {
            transform: rotate(-45deg)
        }

        #cookie-notice .cn-button {
            margin: 0 0 0 10px;
            display: inline-block
        }

        .cn-text-container {
            margin: 0 0 6px
        }

        .cn-text-container,
        .cn-buttons-container {
            display: inline-block
        }

        #cookie-notice.cookie-notice-visible.cn-effect-fade {
            -webkit-animation-name: fadeIn;
            animation-name: fadeIn
        }

        #cookie-notice.cn-effect-fade {
            -webkit-animation-name: fadeOut;
            animation-name: fadeOut
        }

        @-webkit-keyframes fadeIn {
            0% {
                opacity: 0
            }

            to {
                opacity: 1
            }
        }

        @keyframes fadeIn {
            0% {
                opacity: 0
            }

            to {
                opacity: 1
            }
        }

        @-webkit-keyframes fadeOut {
            0% {
                opacity: 1
            }

            to {
                opacity: 0
            }
        }

        @keyframes fadeOut {
            0% {
                opacity: 1
            }

            to {
                opacity: 0
            }
        }

        @media all and (max-width:900px) {
            .cookie-notice-container #cn-notice-text {
                display: block
            }

            .cookie-notice-container #cn-notice-buttons {
                display: block
            }

            #cookie-notice .cn-button {
                margin: 0 5px 5px
            }
        }

        @media all and (max-width:480px) {
            .cookie-notice-container {
                padding: 15px 25px
            }
        }

        .bg-n1 {
            background-color: #eb2b92;
            color: #fff
        }

        .bg-n2 {
            background-color: #fa9716
        }

        .bg-n3 {
            background-color: #88c029
        }

        .bg-n4 {
            background-color: #45a099;
            color: #fff
        }

        .bg-n5 {
            background-color: #3573bc;
            color: #fff
        }

        .bg-n6 {
            background-color: #e60021
        }

        a.bg-n1 {
            background-color: rgba(235, 43, 146, .5)
        }

        a.bg-n2 {
            background-color: rgba(250, 151, 22, .5)
        }

        a.bg-n3 {
            background-color: rgba(136, 192, 41, .5)
        }

        a.bg-n4 {
            background-color: rgba(69, 160, 153, .5)
        }

        a.bg-n5 {
            background-color: rgba(53, 115, 188, .5)
        }

        a.bg-n1 {
            border-color: #cf1478
        }

        a.bg-n2 {
            border-color: #d87c05
        }

        a.bg-n3 {
            border-color: #6a9620
        }

        a.bg-n4 {
            border-color: #367c77
        }

        a.bg-n5 {
            border-color: #2a5b94
        }

        a {
            text-decoration: none
        }

        a.btn {
            text-decoration: none !important
        }

        .block-link {
            display: block;
            text-decoration: none;
            padding: 10px 15px;
            margin: 5px 0 0;
            text-align: left;
            border-left: solid #333 7px
        }

        .block-link.block-link-dark {
            background: #333;
            color: #fff
        }

        a.bg-n1 {
            border-left-width: 7px;
            border-left-style: solid;
            color: #333
        }

        a.bg-n2 {
            border-left-width: 7px;
            border-left-style: solid;
            color: #333
        }

        a.bg-n3 {
            border-left-width: 7px;
            border-left-style: solid;
            color: #333
        }

        a.bg-n4 {
            border-left-width: 7px;
            border-left-style: solid;
            color: #333
        }

        a.bg-n5 {
            border-left-width: 7px;
            border-left-style: solid;
            color: #333
        }

        h1,
        h2 {
            margin-top: 1em;
            font-weight: 700;
            letter-spacing: 1px;
            line-height: 1.3
        }

        h1 {
            font-size: 32px;
            font-size: 2rem
        }

        h2 {
            font-size: 1.75rem
        }

        p {
            margin-bottom: 20px;
            line-height: 1.9
        }

        li {
            line-height: 1.9
        }

        .clearfix {
            clear: both
        }

        label {
            font-weight: 400
        }

        .img-responsive {
            max-width: 100%
        }

        html,
        body {
            width: 100%;
            height: 100%
        }

        body {
            background: #fff;
            margin-top: 64px;
            overflow-x: hidden;
            font-family: libre franklin, open sans, sans-serif;
            color: #363940;
            line-height: 1.5
        }

        .container {
            padding-left: 20px;
            padding-right: 20px;
            max-width: 1280px !important
        }

        .row {
            margin-right: -20px;
            margin-left: -20px
        }

        .col-12,
        .col-lg-4,
        .col-lg-8 {
            padding-left: 20px;
            padding-right: 20px
        }

        @media screen and (min-width:992px) {

            #main-content,
            #sidebar,
            .col-12 {
                padding-left: 40px;
                padding-right: 40px
            }
        }

        #bnav {
            border-bottom: solid 8px #333;
            padding: 0
        }

        #bnav #nav-logo {
            width: auto;
            height: 44px !important
        }

        #bnav a {
            text-decoration: none
        }

        @media screen and (min-width:992px) {
            #bnav .container {
                padding-left: 40px;
                padding-right: 40px
            }

            #bnav .dropdown-toggle::after {
                display: none
            }

            #bnav .dropdown-menu {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                margin-top: 0;
                border-left: solid 8px #555;
                border-top: solid 8px #555
            }

            #bnav .dropdown-menu a {
                padding-left: 10px
            }
        }

        @media screen and (min-width:992px) {
            #bnav li a.nav-link {
                padding: 1rem 1.3rem
            }
        }

        @media screen and (max-width:991px) {
            #bnav .navbar-brand {
                margin-left: 20px
            }

            #bnav .navbar-toggler {
                margin-right: 20px;
                margin-top: 9px;
                margin-bottom: 9px
            }

            #bnav .nav-link {
                padding: .5em 1em
            }

            #bnav .dropdown-toggle::after {
                position: absolute;
                right: 1em;
                top: 1em
            }

            #bnav .dropdown-menu {
                border-radius: 0;
                border: 0
            }

            #bnav form {
                padding: 1em;
                background-color: #333
            }

            #bnav .dropdown-item {
                white-space: pre-wrap
            }
        }

        #bnav .nav-link {
            color: #555
        }

        #sidebar {
            border-left: solid 2px #f0f0f0
        }

        #sidebar .widget {
            padding-top: 20px
        }

        #sidebar .widget-title {
            text-align: center;
            margin-top: 0;
            color: #fff;
            text-transform: uppercase;
            background: #363940;
            margin-bottom: 20px;
            font-size: 1.125rem;
            line-height: 1.5
        }

        #sidebar p {
            font-size: 1em;
            line-height: 1.5
        }

        .jl-table thead th {
            border-bottom: 1px solid #000
        }

        .jl-table td,
        .jl-table th {
            border: 1px solid #000
        }

        a.jl-link {
            color: #333;
            text-decoration: none !important;
            display: block
        }

        .st-jp {
            background-color: #343a40;
            color: #fff;
            display: inline-block;
            padding: 5px;
            font-size: 18px;
            margin-left: 7px;
            position: relative;
            top: -3px
        }

        @media screen and (max-width:767px) {

            table#jl-kanji td,
            table#jl-kanji th {
                padding: .35rem
            }
        }

        .jl-td-on,
        .jl-td-kun {
            min-width: 120px
        }

        .jl-td-k {
            font-size: 26px
        }

        .entry-content a {
            text-decoration: underline
        }

        .single-header {
            text-align: center;
            margin: 0 0 35px
        }

        .single-header .entry-meta {
            text-align: center;
            font-size: 14px;
            font-size: .875rem;
            margin-bottom: 20px;
            color: #b6babb;
            letter-spacing: 1px
        }

        .single-bar {
            height: 5px;
            margin: 0 0 20px;
            background-color: #343a40
        }

        @media screen and (min-width:992px) {
            #bnav .menu-item-2139 .dropdown-menu {
                border-top-color: #eb2b92 !important;
                border-left-color: #eb2b92 !important
            }
        }

        @media screen and (min-width:992px) {
            #bnav .menu-item-2136 .dropdown-menu {
                border-top-color: #fa9716 !important;
                border-left-color: #fa9716 !important
            }
        }

        @media screen and (min-width:992px) {
            #bnav .menu-item-2135 .dropdown-menu {
                border-top-color: #88c029 !important;
                border-left-color: #88c029 !important
            }
        }

        @media screen and (min-width:992px) {
            #bnav .menu-item-2138 .dropdown-menu {
                border-top-color: #45a099 !important;
                border-left-color: #45a099 !important
            }
        }

        @media screen and (min-width:992px) {
            #bnav .menu-item-2137 .dropdown-menu {
                border-top-color: #3573bc !important;
                border-left-color: #3573bc !important
            }
        }

        @media screen and (min-width:992px) {
            #bnav .menu-item-2141 .dropdown-menu {
                border-top-color: #01b9ba !important;
                border-left-color: #01b9ba !important
            }
        }

        .mailpoet_form_loading {
            display: none;
            text-align: center;
            width: 30px
        }

        .mailpoet_form_loading>span {
            animation: mailpoet-bouncedelay 1.4s infinite ease-in-out both;
            background-color: #5b5b5b;
            border-radius: 100%;
            display: inline-block;
            height: 5px;
            width: 5px
        }

        .mailpoet_form_loading .mailpoet_bounce1 {
            animation-delay: -.32s
        }

        .mailpoet_form_loading .mailpoet_bounce2 {
            animation-delay: -.16s;
            margin: 0 7px
        }

        @keyframes mailpoet-bouncedelay {

            0%,
            80%,
            to {
                transform: scale(0)
            }

            40% {
                transform: scale(1)
            }
        }

        .mailpoet_form_popup_overlay {
            background-color: #000;
            display: none;
            height: 100%;
            left: 0;
            margin: 0;
            max-width: 100% !important;
            opacity: .7;
            position: fixed;
            top: 0;
            width: 100% !important;
            z-index: 100000
        }
    </style>
    <link rel=preload as=script href=//securepubads.g.doubleclick.net/tag/js/gpt.js>
    <link rel=preload as=script href="//go.ezodn.com/hb/dall.js?cb=195-2-81">
    <script type=text/ez-screx>(function(){function storageAvailable(type){var storage;try{storage=window[type];var x='__storage_test__';storage.setItem(x,x);storage.removeItem(x);return true;}
catch(e){return e instanceof DOMException&&(e.code===22||e.code===1014||e.name==='QuotaExceededError'||e.name==='NS_ERROR_DOM_QUOTA_REACHED')&&(storage&&storage.length!==0);}}
function remove_ama_config(){if(storageAvailable('localStorage')){localStorage.removeItem("google_ama_config");}}
remove_ama_config()})()</script>
    <script>var ezoicTestActive = true</script>
    <script data-ezscrex=false
        data-cfasync=false>window._ezaq = Object.assign({}, typeof window._ezaq !== "undefined" ? window._ezaq : {}, { "ab_test_id": "mod1-c", "ad_cache_level": 0, "ad_count_adjustment": 1, "ad_lazyload_version": 0, "ad_load_version": 1, "ad_location_ids": "", "adx_ad_count": 0, "ai_placeholder_cache_level": 2, "ai_placeholder_placement_cnt": 2, "bidder_method": 1, "bidder_version": 3, "city": "Hanoi", "country": "VN", "days_since_last_visit": -1, "display_ad_count": 7, "domain_id": 121822, "domain_test_group": 20230810, "ds_adsize_opt_id": -1, "engaged_time_visit": 0, "ezcache_level": 2, "ezcache_skip_code": 0, "form_factor_id": 1, "framework_id": 1, "has_bad_image": 0, "has_bad_words": 0, "iab_category": "", "is_embed": false, "is_from_recommended_pages": false, "is_return_visitor": false, "is_sitespeed": 1, "last_page_load": "", "last_pageview_id": "", "lt_cache_level": 0, "max_ads": 14, "metro_code": 0, "optimization_version": 1, "page_ad_positions": "", "page_view_count": 0, "page_view_id": "1f2f28bb-c182-433b-622a-1cf42a1bd3de", "position_selection_id": 0, "postal_code": "", "pv_event_count": 0, "response_size_orig": 190906, "response_time_orig": 3, "serverid": "i-0fb48dc76c6dc91b2", "state": "HN", "sub_page_ad_positions": "", "t_epoch": 1709866466, "template_id": 134, "time_on_site_visit": 0, "url": "https://jlptsensei.com/learn-japanese/top-100-most-frequent-kanji-characters/", "visit_uuid": "d672a4e2-a33b-4177-5e62-bcd9f815c22c", "weather_precipitation": 0, "weather_summary": "", "weather_temperature": 0, "word_count": 1824, "worst_bad_word_level": 0 }); __ez.queue.markLoaded('ezaqReady');</script>
    <script data-ezscrex=false data-cfasync=false
        data-pagespeed-no-defer>__ez.queue.addFile('/parsonsmaize/mulvane.js', '/parsonsmaize/mulvane.js?gcb=195-2&cb=6', true, ['/parsonsmaize/abilene.js'], true, false, true, false); __ez.queue.addFile('/parsonsmaize/olathe.js', '/parsonsmaize/olathe.js?gcb=195-2&cb=24', false, ['/parsonsmaize/abilene.js', '/parsonsmaize/mulvane.js'], true, false, true, false); __ez.queue.addFile('/porpoiseant/et.js', '/porpoiseant/et.js?gcb=195-2&cb=2', false, [], true, false, true, false); !function () { var e = function (e, i, t) { var o = [], n = null; return { Add: function (t, d) { var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null; if (__ez.dot.isDefined(t) && __ez.dot.isValid(d)) if (n == t && o.length > 0 && o[o.length - 1].data.length + d.length <= 5) o[o.length - 1].data = o[o.length - 1].data.concat(__ez.dot.dataToStr(d)); else { var _ = { type: e, domain_id: __ez.dot.getDID(), t_epoch: __ez.dot.getEpoch(0), data: __ez.dot.dataToStr(d) }; _[i] = t, a && a.hasOwnProperty("impression_id") && a.hasOwnProperty("ad_unit") && (_.impression_id = a.impression_id.toString(), _.unit = a.ad_unit), o.push(_), n = t } }, Fire: function () { if (void 0 === document.visibilityState || "prerender" !== document.visibilityState) { if (__ez.dot.isDefined(o) && o.length > 0) for (; o.length > 0;) { var e = 5; e > o.length && (e = o.length); var i = o.splice(0, e), n = __ez.dot.getURL(t) + "?orig=" + (!0 === __ez.template.isOrig ? 1 : 0) + "&v=" + btoa(JSON.stringify(i)); __ez.dot.Fire(n) } o = [] } } } }; __ez.vep = e("video", "video_impression_id", "/detroitchicago/grapefruit.gif"), __ez.vaep = e("video-ad", "video_ad_impression_id", "/porpoiseant/lemon.gif"), __ez.osvaep = e("outstream-video-ad", "video_ad_impression_id", "/porpoiseant/tangerine.gif") }();</script>
    <script data-ezscrex=false data-cfasync=false
        data-pagespeed-no-defer>__ez.queue.addFile('/detroitchicago/wichita.js', '/detroitchicago/wichita.js?gcb=195-2&cb=12', false, ['/parsonsmaize/abilene.js'], true, false, true, false); __ez.queue.addFile('/detroitchicago/raleigh.js', '/detroitchicago/raleigh.js?gcb=195-2&cb=7', false, ['/parsonsmaize/abilene.js'], true, false, true, false); __ez.queue.addFile('/detroitchicago/vista.js', '/detroitchicago/vista.js?gcb=195-2&cb=6', false, ['/parsonsmaize/abilene.js'], true, false, true, false);</script>
    <script data-ezscrex=false data-cfasync=false async>function productEzoicAds() {
            window.google_reactive_ads_global_state = { adCount: {}, floatingAdsStacking: { maxZIndexListeners: [], maxZIndexRestrictions: {}, nextRestrictionId: 0 }, messageValidationEnabled: false, reactiveTypeDisabledByPublisher: {}, reactiveTypeEnabledInAsfe: {}, sideRailAvailableSpace: [], sideRailOverlappableElements: [], stateForType: {}, tagSpecificState: {}, wasPlaTagProcessed: true, wasReactiveAdConfigReceived: { 1: true, 2: true, 8: true }, wasReactiveAdVisible: {}, wasReactiveTagRequestSent: true, description: "Can't disable auto ads programmatically on the page, so here we are!" }; var d = { "ab": "", "km": {}, "pv": "", "vu": "d672a4e2-a33b-4177-5e62-bcd9f815c22c", "r": { "r": [{ "p": " ezoic_pub_ad_placeholder-103-top_of_page-728x90-103-nonexxxnonexxxxxxezmaxscaleval100 ", "s": 103, "h": 280, "w": 728 }, { "p": " ezoic_ad_placeholder-long_content-250x250-999995-nonexxxclearxxxblock ", "s": 360, "h": 400, "w": 728 }, { "p": " ezoic_pub_ad_placeholder-143-native_bottom-100x480-143-nonexxxnonexxxxxxezmaxscaleval100 ", "s": 143, "h": 480, "w": 100 }, { "p": " ezoic_pub_ad_placeholder-144-sidebar_floating_1-336x280-144-nonexxxnonexxxxxxezmaxscaleval100 ", "s": 144, "h": 600, "w": 336 }, { "p": " ezoic_pub_ad_placeholder-101-sidebar-300x250v2-101-nonexxxnonexxxxxxezmaxscaleval100 ", "s": 101, "h": 600, "w": 336 }, { "p": " ezoic_pub_ad_placeholder-123-sidebar_middle-300x250v4-123-nonexxxnonexxxxxxezmaxscaleval100 ", "s": 123, "h": 1050, "w": 336 }, { "p": " ezoic_pub_ad_placeholder-102-sidebar_bottom-300x250v4-102-nonexxxnonexxxxxxezmaxscaleval100 ", "s": 102, "h": 1050, "w": 468 }, { "p": " ezoic_pub_ad_placeholder-122-bottom_of_page-728x90-122-nonexxxnonexxxxxxezmaxscaleval100 ", "s": 122, "h": 400, "w": 728 }, { "p": " ezoic_pub_ad_placeholder-100-bottom_floating-728x90-100-nonexxxnonexxxxxxezmaxscaleval100 ", "s": 100, "h": 90, "w": 970 }, { "p": " ezoic_pub_ad_placeholder-975-edge-160x600-975-nonexxxnonexxxxxxezmaxscaleval100 ", "s": 975, "h": 600, "w": 160 }, { "p": " ezoic_pub_ad_placeholder-976-edge_2-160x600-976-nonexxxnonexxxxxxezmaxscaleval100 ", "s": 976, "h": 600, "w": 160 }], "a": { "100": true, "101": true, "102": true, "103": true, "110": true, "122": true, "123": true, "124": true, "143": true, "144": true, "30": true, "35": true, "360": true, "540": true, "6": true, "975": true, "976": true }, "g": -1, "l": { "0": 15, "1": 3, "2": 2, "3": 1, "4": -1, "5": -1 }, "m": { "0": 14, "1": 3, "2": 2, "3": 1, "4": -1, "5": -1 }, "v": 0, "ve": false, "hr": false, "ag": 0 }, "tid": 134, "tn": "pub_site", "url": "https://jlptsensei.com/learn-japanese/top-100-most-frequent-kanji-characters/", "wc": 1824, "dw": 1024, "dh": 1280, "ff": 1, "dhh": "" }; d.ab = _ezaq.ab_test_id; d.pv = _ezaq.page_view_id; d.vu = _ezaq.visit_uuid; var dynamicAddScript = function (script) {
                if (window.ezFinishedStatic === true) { console.error("attempted to load dynamic script again"); return; }
                var errorMessages = []; function errorHandler(event) {
                    var errorObj = event.error; if (errorObj && errorObj.stack && errorObj.stack.indexOf('dynamicAddScript') !== -1) { var errorMessage = { Message: event.message, LineNo: event.lineno, ColumnNo: event.colno, Stack: errorObj.stack }; errorMessages.push(errorMessage); }
                    if (typeof window.onerror === 'function') { window.onerror.apply(this, arguments); }
                }
                window.addEventListener('error', errorHandler); var ezDynamic = document.createElement('script'); ezDynamic.type = 'text/javascript'; ezDynamic.innerHTML = script; document.head.appendChild(ezDynamic); window.removeEventListener('error', errorHandler); if (window.ezFinishedStatic !== true || typeof window.ezstaticerrors !== 'undefined') {
                    d.Script = script; d.ErrorMessages = JSON.stringify(errorMessages); d.ErrorStaticMessages = window.ezstaticerrors || ''; var dataTxt = JSON.stringify(d); if (dataTxt.length > 0) {
                        var logXHR = new XMLHttpRequest()
                        logXHR.open('POST', '/ezais/log?cb=1', true); logXHR.setRequestHeader('Content-Type', 'application/json'); logXHR.send(dataTxt);
                    }
                }
            }; var dataText = JSON.stringify(d); if (dataText.length > 0) {
                var startTime = Date.now() - __ez.stms; var xhr = new XMLHttpRequest(); xhr.open('POST', '/ezais/dynamic?cb=1', true); xhr.onload = function () {
                    if (xhr.status != 200) { return; }
                    if (document.readyState !== 'loading') { dynamicAddScript(xhr.response); return; }
                    var eventFunc = function () {
                        if (document.readyState === 'loading') { return; }
                        document.removeEventListener('readystatechange', eventFunc, false); dynamicAddScript(xhr.response);
                    }; document.addEventListener('readystatechange', eventFunc, false);
                }; xhr.setRequestHeader('Content-Type', 'text/plain'); xhr.send(dataText);
            }
        }
        __ez.queue.addFunc("productEzoicAds", "productEzoicAds", null, true, ['ezaqReady'], false, false, false, true);</script>
    <base href=https://jlptsensei.com/learn-japanese/top-100-most-frequent-kanji-characters />
    <meta charset=utf-8>
    <meta http-equiv=content-language content="en, en-us, jp">
    <meta http-equiv=x-ua-compatible content="IE=edge">
    <meta name=HandheldFriendly content="True">
    <meta name=MobileOptimized content="320">
    <meta name=viewport content="width=device-width,initial-scale=1">
    <title>Top 100 Most Frequent Kanji Characters – JLPTsensei.com</title>
    <link rel=preconnect href=https://fonts.gstatic.com/ crossorigin>
    <link rel=preconnect href=https://fonts.googleapis.com>
    <style>
        @font-face {
            font-family: alegreya;
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/alegreya/v27/4UaSrEBBsBhlBjvfkSLk3abBFkvpkARTPlbgv5qhmSA.ttf)format('truetype')
        }

        @font-face {
            font-family: alegreya;
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/alegreya/v27/4UaSrEBBsBhlBjvfkSLk3abBFkvpkARTPlYHuJqhmSA.ttf)format('truetype')
        }

        @font-face {
            font-family: alegreya;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/alegreya/v27/4UacrEBBsBhlBjvfkQjt71kZfyBzPgNG9hU4-6qm.ttf)format('truetype')
        }

        @font-face {
            font-family: alegreya;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/alegreya/v27/4UacrEBBsBhlBjvfkQjt71kZfyBzPgNGERI4-6qm.ttf)format('truetype')
        }

        @font-face {
            font-family: alegreya sans;
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/alegreyasans/v21/5aUt9_-1phKLFgshYDvh6Vwt7V9dv21W.ttf)format('truetype')
        }

        @font-face {
            font-family: alegreya sans;
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/alegreyasans/v21/5aUo9_-1phKLFgshYDvh6Vwt7V9VBEhGiU9D.ttf)format('truetype')
        }

        @font-face {
            font-family: alegreya sans;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/alegreyasans/v21/5aUz9_-1phKLFgshYDvh6Vwt7VptuA.ttf)format('truetype')
        }

        @font-face {
            font-family: alegreya sans;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/alegreyasans/v21/5aUu9_-1phKLFgshYDvh6Vwt5eFIqEp2jg.ttf)format('truetype')
        }

        @font-face {
            font-family: amatic sc;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/amaticsc/v24/TUZyzwprpvBS1izr_vOECuSa.ttf)format('truetype')
        }

        @font-face {
            font-family: amatic sc;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/amaticsc/v24/TUZ3zwprpvBS1izr_vOMscGKfrUH.ttf)format('truetype')
        }

        @font-face {
            font-family: anonymous pro;
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/anonymouspro/v21/rP2fp2a15UIB7Un-bOeISG3pHl4G9wn8.ttf)format('truetype')
        }

        @font-face {
            font-family: anonymous pro;
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/anonymouspro/v21/rP2ap2a15UIB7Un-bOeISG3pHl4OTCzs74uz.ttf)format('truetype')
        }

        @font-face {
            font-family: anonymous pro;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/anonymouspro/v21/rP2Bp2a15UIB7Un-bOeISG3pHls28A.ttf)format('truetype')
        }

        @font-face {
            font-family: anonymous pro;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/anonymouspro/v21/rP2cp2a15UIB7Un-bOeISG3pFuAT4C7c6A.ttf)format('truetype')
        }

        @font-face {
            font-family: architects daughter;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/architectsdaughter/v18/KtkxAKiDZI_td1Lkx62xHZHDtgO_Y-bvTYlg5g.ttf)format('truetype')
        }

        @font-face {
            font-family: archivo;
            font-style: italic;
            font-weight: 400;
            font-stretch: normal;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/archivo/v16/k3k8o8UDI-1M0wlSfdzyIEkpwTM29hr-8mTYIRyOSVz60_PG_HCBsydrD0o.ttf)format('truetype')
        }

        @font-face {
            font-family: archivo;
            font-style: italic;
            font-weight: 700;
            font-stretch: normal;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/archivo/v16/k3k8o8UDI-1M0wlSfdzyIEkpwTM29hr-8mTYIRyOSVz60_PG_HBmtCdrD0o.ttf)format('truetype')
        }

        @font-face {
            font-family: archivo;
            font-style: normal;
            font-weight: 400;
            font-stretch: normal;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/archivo/v16/k3k6o8UDI-1M0wlSV9XAw6lQkqWY8Q82sJaRE-NWIDdgffTTNDNZ9xds.ttf)format('truetype')
        }

        @font-face {
            font-family: archivo;
            font-style: normal;
            font-weight: 700;
            font-stretch: normal;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/archivo/v16/k3k6o8UDI-1M0wlSV9XAw6lQkqWY8Q82sJaRE-NWIDdgffTT0zRZ9xds.ttf)format('truetype')
        }

        @font-face {
            font-family: archivo narrow;
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/archivonarrow/v22/tss7ApVBdCYD5Q7hcxTE1ArZ0bb1k3JSLwe1hB965BJi50muPCU.ttf)format('truetype')
        }

        @font-face {
            font-family: archivo narrow;
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/archivonarrow/v22/tss7ApVBdCYD5Q7hcxTE1ArZ0bb1k3JSLwe1hB965BKF4EmuPCU.ttf)format('truetype')
        }

        @font-face {
            font-family: archivo narrow;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/archivonarrow/v22/tss5ApVBdCYD5Q7hcxTE1ArZ0Zz8oY2KRmwvKhhvLFG6o3mp.ttf)format('truetype')
        }

        @font-face {
            font-family: archivo narrow;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/archivonarrow/v22/tss5ApVBdCYD5Q7hcxTE1ArZ0Zz8oY2KRmwvKhhvy1a6o3mp.ttf)format('truetype')
        }

        @font-face {
            font-family: asap;
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/asap/v22/KFO7CniXp96ayz4E7kS706qGLdTylUANa3yUAQ.ttf)format('truetype')
        }

        @font-face {
            font-family: asap;
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/asap/v22/KFO7CniXp96ayz4E7kS706qGLdTylacKa3yUAQ.ttf)format('truetype')
        }

        @font-face {
            font-family: asap;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/asap/v22/KFO9CniXp96a4Tc2EZzSuDAoKsE61phJW3s.ttf)format('truetype')
        }

        @font-face {
            font-family: asap;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/asap/v22/KFO9CniXp96a4Tc2EZzSuDAoKsHd0ZhJW3s.ttf)format('truetype')
        }

        @font-face {
            font-family: barlow;
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/barlow/v12/7cHrv4kjgoGqM7E_Cfs7wHo.ttf)format('truetype')
        }

        @font-face {
            font-family: barlow;
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/barlow/v12/7cHsv4kjgoGqM7E_CfOA5WouvT8.ttf)format('truetype')
        }

        @font-face {
            font-family: barlow;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/barlow/v12/7cHpv4kjgoGqM7E_DMs8.ttf)format('truetype')
        }

        @font-face {
            font-family: barlow;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/barlow/v12/7cHqv4kjgoGqM7E3t-4s51op.ttf)format('truetype')
        }

        @font-face {
            font-family: biorhyme;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/biorhyme/v12/1cXwaULHBpDMsHYW_ExBr1E.ttf)format('truetype')
        }

        @font-face {
            font-family: biorhyme;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/biorhyme/v12/1cX3aULHBpDMsHYW_ET6ikGHocA.ttf)format('truetype')
        }

        @font-face {
            font-family: bonbon;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/bonbon/v26/0FlVVPeVlFec4eePdzsE.ttf)format('truetype')
        }

        @font-face {
            font-family: cabin;
            font-style: italic;
            font-weight: 400;
            font-stretch: normal;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/cabin/v24/u-4V0qWljRw-Pd815fNqc8T_wAFcX-c37MPiNYlWniJ2hJXHx_KVxUbq.ttf)format('truetype')
        }

        @font-face {
            font-family: cabin;
            font-style: italic;
            font-weight: 700;
            font-stretch: normal;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/cabin/v24/u-4V0qWljRw-Pd815fNqc8T_wAFcX-c37MPiNYlWniJ2hJXHIPWVxUbq.ttf)format('truetype')
        }

        @font-face {
            font-family: cabin;
            font-style: normal;
            font-weight: 400;
            font-stretch: normal;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/cabin/v24/u-4X0qWljRw-PfU81xCKCpdpbgZJl6XFpfEd7eA9BIxxkV2EH7alwg.ttf)format('truetype')
        }

        @font-face {
            font-family: cabin;
            font-style: normal;
            font-weight: 700;
            font-stretch: normal;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/cabin/v24/u-4X0qWljRw-PfU81xCKCpdpbgZJl6XFpfEd7eA9BIxxkbqDH7alwg.ttf)format('truetype')
        }

        @font-face {
            font-family: cairo;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/cairo/v18/SLXVc1nY6HkvangtZmpcWmhzfH5lWWgcRiyX.ttf)format('truetype')
        }

        @font-face {
            font-family: cairo;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/cairo/v18/SLXVc1nY6HkvangtZmpcWmhzfH5lvm8cRiyX.ttf)format('truetype')
        }

        @font-face {
            font-family: cardo;
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/cardo/v19/wlpxgwjKBV1pqhv97IMx2Q.ttf)format('truetype')
        }

        @font-face {
            font-family: cardo;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/cardo/v19/wlp_gwjKBV1pqhv43IQ.ttf)format('truetype')
        }

        @font-face {
            font-family: cardo;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/cardo/v19/wlpygwjKBV1pqhND-ZQW-WY.ttf)format('truetype')
        }

        @font-face {
            font-family: chivo;
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/chivo/v17/va9G4kzIxd1KFrBtceFfkA.ttf)format('truetype')
        }

        @font-face {
            font-family: chivo;
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/chivo/v17/va9D4kzIxd1KFrBteVp6gK_uQQ.ttf)format('truetype')
        }

        @font-face {
            font-family: chivo;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/chivo/v17/va9I4kzIxd1KFrBoQeY.ttf)format('truetype')
        }

        @font-face {
            font-family: chivo;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/chivo/v17/va9F4kzIxd1KFrjTZPZ4sKg.ttf)format('truetype')
        }

        @font-face {
            font-family: concert one;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/concertone/v17/VEM1Ro9xs5PjtzCu-srDqSTijPs.ttf)format('truetype')
        }

        @font-face {
            font-family: cormorant;
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/cormorant/v16/H4cjBXOCl9bbnla_nHIq6qu_oqY.ttf)format('truetype')
        }

        @font-face {
            font-family: cormorant;
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/cormorant/v16/H4c-BXOCl9bbnla_nHIq6qMEh7axSzA.ttf)format('truetype')
        }

        @font-face {
            font-family: cormorant;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/cormorant/v16/H4clBXOCl9bbnla_nHIq75u4.ttf)format('truetype')
        }

        @font-face {
            font-family: cormorant;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/cormorant/v16/H4cgBXOCl9bbnla_nHIiVL6ohYa2.ttf)format('truetype')
        }

        @font-face {
            font-family: crimson text;
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/crimsontext/v19/wlpogwHKFkZgtmSR3NB0oRJfajhRK_M.ttf)format('truetype')
        }

        @font-face {
            font-family: crimson text;
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/crimsontext/v19/wlprgwHKFkZgtmSR3NB0oRJfajDqDuNS_LA.ttf)format('truetype')
        }

        @font-face {
            font-family: crimson text;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/crimsontext/v19/wlp2gwHKFkZgtmSR3NB0oRJfbwhW.ttf)format('truetype')
        }

        @font-face {
            font-family: crimson text;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/crimsontext/v19/wlppgwHKFkZgtmSR3NB0oRJX1C1GDNNV.ttf)format('truetype')
        }

        @font-face {
            font-family: eczar;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/eczar/v16/BXR2vF3Pi-DLmxcpJB-qbNTyTMDXHd6mrjgR.ttf)format('truetype')
        }

        @font-face {
            font-family: eczar;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/eczar/v16/BXR2vF3Pi-DLmxcpJB-qbNTyTMDX-tmmrjgR.ttf)format('truetype')
        }

        @font-face {
            font-family: 'exo 2';
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/exo2/v19/7cH3v4okm5zmbtYtMeA0FKq0Jjg2drF0feC9hpo.ttf)format('truetype')
        }

        @font-face {
            font-family: 'exo 2';
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/exo2/v19/7cH3v4okm5zmbtYtMeA0FKq0Jjg2drGTeuC9hpo.ttf)format('truetype')
        }

        @font-face {
            font-family: 'exo 2';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/exo2/v19/7cH1v4okm5zmbvwkAx_sfcEuiD8jvvKsOdC6.ttf)format('truetype')
        }

        @font-face {
            font-family: 'exo 2';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/exo2/v19/7cH1v4okm5zmbvwkAx_sfcEuiD8jWfWsOdC6.ttf)format('truetype')
        }

        @font-face {
            font-family: fira sans;
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/firasans/v16/va9C4kDNxMZdWfMOD5VvkrjJYTc.ttf)format('truetype')
        }

        @font-face {
            font-family: fira sans;
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/firasans/v16/va9f4kDNxMZdWfMOD5VvkrByRCf4VFw.ttf)format('truetype')
        }

        @font-face {
            font-family: fira sans;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/firasans/v16/va9E4kDNxMZdWfMOD5Vvl4jO.ttf)format('truetype')
        }

        @font-face {
            font-family: fira sans;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/firasans/v16/va9B4kDNxMZdWfMOD5VnLK3eRhf_.ttf)format('truetype')
        }

        @font-face {
            font-family: fjalla one;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/fjallaone/v13/Yq6R-LCAWCX3-6Ky7FAFrOF6lw.ttf)format('truetype')
        }

        @font-face {
            font-family: frank ruhl libre;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/frankruhllibre/v12/j8_w6_fAw7jrcalD7oKYNX0QfAnPW7Dl5A.ttf)format('truetype')
        }

        @font-face {
            font-family: frank ruhl libre;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/frankruhllibre/v12/j8_36_fAw7jrcalD7oKYNX0QfAnPUwvA9JfGgQ.ttf)format('truetype')
        }

        @font-face {
            font-family: great vibes;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/greatvibes/v14/RWmMoKWR9v4ksMfaWd_JN9XFiaE.ttf)format('truetype')
        }

        @font-face {
            font-family: heebo;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/heebo/v20/NGSpv5_NC0k9P_v6ZUCbLRAHxK1EiSysdUmj.ttf)format('truetype')
        }

        @font-face {
            font-family: heebo;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/heebo/v20/NGSpv5_NC0k9P_v6ZUCbLRAHxK1EbiusdUmj.ttf)format('truetype')
        }

        @font-face {
            font-family: inconsolata;
            font-style: normal;
            font-weight: 400;
            font-stretch: normal;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/inconsolata/v30/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lpp4U8WR32kg.ttf)format('truetype')
        }

        @font-face {
            font-family: inconsolata;
            font-style: normal;
            font-weight: 700;
            font-stretch: normal;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/inconsolata/v30/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lpp2I7WR32kg.ttf)format('truetype')
        }

        @font-face {
            font-family: indie flower;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/indieflower/v17/m8JVjfNVeKWVnh3QMuKkFcZVaUuC.ttf)format('truetype')
        }

        @font-face {
            font-family: inknut antiqua;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/inknutantiqua/v14/Y4GSYax7VC4ot_qNB4nYpBdaKUUE4Jg.ttf)format('truetype')
        }

        @font-face {
            font-family: inknut antiqua;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/inknutantiqua/v14/Y4GRYax7VC4ot_qNB4nYpBdaKU2_xYj-Zh4.ttf)format('truetype')
        }

        @font-face {
            font-family: inter;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/inter/v11/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjQ.ttf)format('truetype')
        }

        @font-face {
            font-family: inter;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/inter/v11/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hjQ.ttf)format('truetype')
        }

        @font-face {
            font-family: karla;
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/karla/v22/qkBKXvYC6trAT7RQNNK2EG7SIwPWMNlCV3lIb7Y.ttf)format('truetype')
        }

        @font-face {
            font-family: karla;
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/karla/v22/qkBKXvYC6trAT7RQNNK2EG7SIwPWMNmlUHlIb7Y.ttf)format('truetype')
        }

        @font-face {
            font-family: karla;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/karla/v22/qkBIXvYC6trAT55ZBi1ueQVIjQTD-JqaE0lP.ttf)format('truetype')
        }

        @font-face {
            font-family: karla;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/karla/v22/qkBIXvYC6trAT55ZBi1ueQVIjQTDH52aE0lP.ttf)format('truetype')
        }

        @font-face {
            font-family: libre baskerville;
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/librebaskerville/v14/kmKhZrc3Hgbbcjq75U4uslyuy4kn0qNcWxEQCQ.ttf)format('truetype')
        }

        @font-face {
            font-family: libre baskerville;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/librebaskerville/v14/kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNZaxY.ttf)format('truetype')
        }

        @font-face {
            font-family: libre baskerville;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/librebaskerville/v14/kmKiZrc3Hgbbcjq75U4uslyuy4kn0qviTgY3KcU.ttf)format('truetype')
        }

        @font-face {
            font-family: libre franklin;
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/librefranklin/v12/jizMREVItHgc8qDIbSTKq4XkRiUawTk7f45UM9y05oZ8RODLR-M.ttf)format('truetype')
        }

        @font-face {
            font-family: libre franklin;
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/librefranklin/v12/jizMREVItHgc8qDIbSTKq4XkRiUawTk7f45UM9y05oabQ-DLR-M.ttf)format('truetype')
        }

        @font-face {
            font-family: libre franklin;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/librefranklin/v12/jizOREVItHgc8qDIbSTKq4XkRg8T88bjFuXOnduhLsWkANDM.ttf)format('truetype')
        }

        @font-face {
            font-family: libre franklin;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/librefranklin/v12/jizOREVItHgc8qDIbSTKq4XkRg8T88bjFuXOnduhycKkANDM.ttf)format('truetype')
        }

        @font-face {
            font-family: montserrat;
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/montserrat/v24/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq6R9WXh0ow.ttf)format('truetype')
        }

        @font-face {
            font-family: montserrat;
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/montserrat/v24/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq0N6WXh0ow.ttf)format('truetype')
        }

        @font-face {
            font-family: montserrat;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/montserrat/v24/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw5aX8.ttf)format('truetype')
        }

        @font-face {
            font-family: montserrat;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/montserrat/v24/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM73w5aX8.ttf)format('truetype')
        }

        @font-face {
            font-family: neuton;
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/neuton/v18/UMBRrPtMoH62xUZCyrg4Wio.ttf)format('truetype')
        }

        @font-face {
            font-family: neuton;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/neuton/v18/UMBTrPtMoH62xUZCz4g_.ttf)format('truetype')
        }

        @font-face {
            font-family: neuton;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/neuton/v18/UMBQrPtMoH62xUZKdK0vfQr9.ttf)format('truetype')
        }

        @font-face {
            font-family: notable;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/notable/v14/gNMEW3N_SIqx-WX9yHQiEA.ttf)format('truetype')
        }

        @font-face {
            font-family: nothing you could do;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/nothingyoucoulddo/v15/oY1B8fbBpaP5OX3DtrRYf_Q2BPB1SnfZb3OOnV4.ttf)format('truetype')
        }

        @font-face {
            font-family: noto sans;
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/notosans/v27/o-0OIpQlx3QUlC5A4PNr4ARCQ_w.ttf)format('truetype')
        }

        @font-face {
            font-family: noto sans;
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/notosans/v27/o-0TIpQlx3QUlC5A4PNr4Az5ZuyDzWg.ttf)format('truetype')
        }

        @font-face {
            font-family: noto sans;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/notosans/v27/o-0IIpQlx3QUlC5A4PNr5TRF.ttf)format('truetype')
        }

        @font-face {
            font-family: noto sans;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/notosans/v27/o-0NIpQlx3QUlC5A4PNjXhFVZNyE.ttf)format('truetype')
        }

        @font-face {
            font-family: nunito;
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/nunito/v24/XRXK3I6Li01BKofIMPyPbj8d7IEAGXNirXAHjabf.ttf)format('truetype')
        }

        @font-face {
            font-family: nunito;
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/nunito/v24/XRXK3I6Li01BKofIMPyPbj8d7IEAGXNiSncHjabf.ttf)format('truetype')
        }

        @font-face {
            font-family: nunito;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/nunito/v24/XRXI3I6Li01BKofiOc5wtlZ2di8HDLshdTQ3ig.ttf)format('truetype')
        }

        @font-face {
            font-family: nunito;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/nunito/v24/XRXI3I6Li01BKofiOc5wtlZ2di8HDFwmdTQ3ig.ttf)format('truetype')
        }

        @font-face {
            font-family: old standard tt;
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/oldstandardtt/v18/MwQsbh3o1vLImiwAVvYawgcf2eVer2q6bHY.ttf)format('truetype')
        }

        @font-face {
            font-family: old standard tt;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/oldstandardtt/v18/MwQubh3o1vLImiwAVvYawgcf2eVeqlq9.ttf)format('truetype')
        }

        @font-face {
            font-family: old standard tt;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/oldstandardtt/v18/MwQrbh3o1vLImiwAVvYawgcf2eVWEX-tS1Za.ttf)format('truetype')
        }

        @font-face {
            font-family: oxygen;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/oxygen/v15/2sDfZG1Wl4LcnbuKjk0j.ttf)format('truetype')
        }

        @font-face {
            font-family: oxygen;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/oxygen/v15/2sDcZG1Wl4LcnbuCNWgzaGW8.ttf)format('truetype')
        }

        @font-face {
            font-family: pt sans;
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ptsans/v17/jizYRExUiTo99u79D0e0x8mN.ttf)format('truetype')
        }

        @font-face {
            font-family: pt sans;
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ptsans/v17/jizdRExUiTo99u79D0e8fOydLxUY.ttf)format('truetype')
        }

        @font-face {
            font-family: pt sans;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ptsans/v17/jizaRExUiTo99u79D0KEwA.ttf)format('truetype')
        }

        @font-face {
            font-family: pt sans;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ptsans/v17/jizfRExUiTo99u79B_mh0O6tKA.ttf)format('truetype')
        }

        @font-face {
            font-family: pt serif;
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ptserif/v17/EJRTQgYoZZY2vCFuvAFT_r21dw.ttf)format('truetype')
        }

        @font-face {
            font-family: pt serif;
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ptserif/v17/EJRQQgYoZZY2vCFuvAFT9gaQZynfpQ.ttf)format('truetype')
        }

        @font-face {
            font-family: pt serif;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ptserif/v17/EJRVQgYoZZY2vCFuvAFWzro.ttf)format('truetype')
        }

        @font-face {
            font-family: pt serif;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ptserif/v17/EJRSQgYoZZY2vCFuvAnt66qSVy4.ttf)format('truetype')
        }

        @font-face {
            font-family: pacifico;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/pacifico/v22/FwZY7-Qmy14u9lezJ-6H6Mw.ttf)format('truetype')
        }

        @font-face {
            font-family: poppins;
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/poppins/v20/pxiGyp8kv8JHgFVrJJLucHtF.ttf)format('truetype')
        }

        @font-face {
            font-family: poppins;
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLmy15VF9eL.ttf)format('truetype')
        }

        @font-face {
            font-family: poppins;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfedw.ttf)format('truetype')
        }

        @font-face {
            font-family: poppins;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7Z1xlEA.ttf)format('truetype')
        }

        @font-face {
            font-family: proza libre;
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/prozalibre/v9/LYjEdGHgj0k1DIQRyUEyyEotRNj_WA.ttf)format('truetype')
        }

        @font-face {
            font-family: proza libre;
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/prozalibre/v9/LYjZdGHgj0k1DIQRyUEyyEotTGPaSJOS9w.ttf)format('truetype')
        }

        @font-face {
            font-family: proza libre;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/prozalibre/v9/LYjGdGHgj0k1DIQRyUEyyEoodN8.ttf)format('truetype')
        }

        @font-face {
            font-family: proza libre;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/prozalibre/v9/LYjbdGHgj0k1DIQRyUEyyEKTUc_YeJQ.ttf)format('truetype')
        }

        @font-face {
            font-family: rakkas;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rakkas/v17/Qw3cZQlNHiblL3jPkdFL.ttf)format('truetype')
        }

        @font-face {
            font-family: reenie beanie;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/reeniebeanie/v16/z7NSdR76eDkaJKZJFkkjuvWxXPq1rg.ttf)format('truetype')
        }

        @font-face {
            font-family: roboto slab;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/robotoslab/v23/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmb2Rm.ttf)format('truetype')
        }

        @font-face {
            font-family: roboto slab;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/robotoslab/v23/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjoa4Omb2Rm.ttf)format('truetype')
        }

        @font-face {
            font-family: ropa sans;
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ropasans/v15/EYq3maNOzLlWtsZSScy6WANre5M.ttf)format('truetype')
        }

        @font-face {
            font-family: ropa sans;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ropasans/v15/EYqxmaNOzLlWtsZSScy6XTNs.ttf)format('truetype')
        }

        @font-face {
            font-family: rubik;
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWbBXyIfDnIV7nEt3KSJbVDV49rz8tdE3U3f4c.ttf)format('truetype')
        }

        @font-face {
            font-family: rubik;
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWbBXyIfDnIV7nEt3KSJbVDV49rz8u6FHU3f4c.ttf)format('truetype')
        }

        @font-face {
            font-family: rubik;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFV0Uw.ttf)format('truetype')
        }

        @font-face {
            font-family: rubik;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-4I-FV0Uw.ttf)format('truetype')
        }

        @font-face {
            font-family: shadows into light;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/shadowsintolight/v15/UqyNK9UOIntux_czAvDQx_ZcHqZXBNQzdcD8.ttf)format('truetype')
        }

        @font-face {
            font-family: space mono;
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/spacemono/v11/i7dNIFZifjKcF5UAWdDRYERMR3K6.ttf)format('truetype')
        }

        @font-face {
            font-family: space mono;
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/spacemono/v11/i7dSIFZifjKcF5UAWdDRYERE_FeqHCSU.ttf)format('truetype')
        }

        @font-face {
            font-family: space mono;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/spacemono/v11/i7dPIFZifjKcF5UAWdDRYEF8QA.ttf)format('truetype')
        }

        @font-face {
            font-family: space mono;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/spacemono/v11/i7dMIFZifjKcF5UAWdDRaPpZUFWaGw.ttf)format('truetype')
        }

        @font-face {
            font-family: spectral;
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/spectral/v12/rnCt-xNNww_2s0amA9M8onrmSQ.ttf)format('truetype')
        }

        @font-face {
            font-family: spectral;
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/spectral/v12/rnCu-xNNww_2s0amA9M8qsHDWfSFWA.ttf)format('truetype')
        }

        @font-face {
            font-family: spectral;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/spectral/v12/rnCr-xNNww_2s0amA9M5kn0.ttf)format('truetype')
        }

        @font-face {
            font-family: spectral;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/spectral/v12/rnCs-xNNww_2s0amA9uCt23BafM.ttf)format('truetype')
        }

        @font-face {
            font-family: sue ellen francisco;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/sueellenfrancisco/v16/wXK3E20CsoJ9j1DDkjHcQ5ZL8xRaxru9no1P3g.ttf)format('truetype')
        }

        @font-face {
            font-family: titillium web;
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/titilliumweb/v15/NaPAcZTIAOhVxoMyOr9n_E7fdMbWD6xT.ttf)format('truetype')
        }

        @font-face {
            font-family: titillium web;
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/titilliumweb/v15/NaPFcZTIAOhVxoMyOr9n_E7fdMbetIlDYZyZ.ttf)format('truetype')
        }

        @font-face {
            font-family: titillium web;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/titilliumweb/v15/NaPecZTIAOhVxoMyOr9n_E7fdMPmCA.ttf)format('truetype')
        }

        @font-face {
            font-family: titillium web;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/titilliumweb/v15/NaPDcZTIAOhVxoMyOr9n_E7ffHjDGItzZg.ttf)format('truetype')
        }

        @font-face {
            font-family: ubuntu;
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ubuntu/v20/4iCu6KVjbNBYlgoKej70l0w.ttf)format('truetype')
        }

        @font-face {
            font-family: ubuntu;
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ubuntu/v20/4iCp6KVjbNBYlgoKejZPslyPN4Q.ttf)format('truetype')
        }

        @font-face {
            font-family: ubuntu;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgoKfw7z.ttf)format('truetype')
        }

        @font-face {
            font-family: ubuntu;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCxCvjsGyI.ttf)format('truetype')
        }

        @font-face {
            font-family: varela;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/varela/v16/DPEtYwqExx0AWHX5Ax4B.ttf)format('truetype')
        }

        @font-face {
            font-family: vollkorn;
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/vollkorn/v20/0ybuGDoxxrvAnPhYGxksckM2WMCpRjDj-DJGWlmeObE.ttf)format('truetype')
        }

        @font-face {
            font-family: vollkorn;
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/vollkorn/v20/0ybuGDoxxrvAnPhYGxksckM2WMCpRjDj-DKhXVmeObE.ttf)format('truetype')
        }

        @font-face {
            font-family: vollkorn;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/vollkorn/v20/0ybgGDoxxrvAnPhYGzMlQLzuMasz6Df2MHGeHmmZ.ttf)format('truetype')
        }

        @font-face {
            font-family: vollkorn;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/vollkorn/v20/0ybgGDoxxrvAnPhYGzMlQLzuMasz6Df213aeHmmZ.ttf)format('truetype')
        }

        @font-face {
            font-family: work sans;
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/worksans/v17/QGY9z_wNahGAdqQ43Rh_ebrnlwyYfEPxPoGU3ms5pIfd.ttf)format('truetype')
        }

        @font-face {
            font-family: work sans;
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/worksans/v17/QGY9z_wNahGAdqQ43Rh_ebrnlwyYfEPxPoGUOWw5pIfd.ttf)format('truetype')
        }

        @font-face {
            font-family: work sans;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/worksans/v17/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBi8Jow.ttf)format('truetype')
        }

        @font-face {
            font-family: work sans;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/worksans/v17/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K67QBi8Jow.ttf)format('truetype')
        }

        @font-face {
            font-family: yatra one;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/yatraone/v14/C8ch4copsHzj8p7NaF0BxFmF.ttf)format('truetype')
        }
    </style>
    <meta name=author content="Cruise Bogedin">
    <link rel=apple-touch-icon
        href=https://jlptsensei.com/wp-content/themes/jlpt_sensei_rename/library/images/apple-touch-icon.png>
    <link rel=icon href=https://jlptsensei.com/wp-content/themes/jlpt_sensei_rename/favicon.png>
    <link rel=pingback href=https://jlptsensei.com/xmlrpc.php>
    <link rel=preload href=https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css
        integrity=sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T crossorigin=anonymous as=style
        onload="this.onload=null;this.rel='stylesheet'"><noscript>
        <link rel=stylesheet href=https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css
            integrity=sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T crossorigin=anonymous>
    </noscript>
    <link rel=preconnect href=https://fonts.gstatic.com/ crossorigin>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XTCTJ8B9F8"></script>
    <script>window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date()); gtag('config', 'G-XTCTJ8B9F8');</script>
    <meta name=robots content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <link rel=canonical href=https://jlptsensei.com/learn-japanese/top-100-most-frequent-kanji-characters />
    <meta property="og:locale" content="en_US">
    <meta property="og:type" content="article">
    <meta property="og:title" content="Top 100 Most Frequent Kanji Characters – JLPTsensei.com">
    <meta property="og:description"
        content="The best way to start learning Japanese kanji (漢字) is to focus on the most common characters first. This list includes the top 100 most...">
    <meta property="og:url" content="https://jlptsensei.com/learn-japanese/top-100-most-frequent-kanji-characters/">
    <meta property="og:site_name" content="JLPT Sensei">
    <meta property="article:publisher" content="https://www.facebook.com/jlptsensei">
    <meta property="article:author" content="https://facebook.com/jlptsensei">
    <meta property="article:published_time" content="2020-03-16T14:44:22+00:00">
    <meta property="article:modified_time" content="2020-05-15T05:38:20+00:00">
    <meta property="og:image"
        content="https://jlptsensei.com/wp-content/uploads/2020/03/top-100-japanese-kanji-most-frequent-漢字.png">
    <meta property="og:image:width" content="1000">
    <meta property="og:image:height" content="563">
    <meta property="og:image:type" content="image/png">
    <meta name=author content="Cruise Bogedin">
    <meta name=twitter:label1 content="Written by">
    <meta name=twitter:data1 content="Cruise Bogedin">
    <meta name=twitter:label2 content="Est. reading time">
    <meta name=twitter:data2 content="4 minutes">
    <script type=application/ld+json
        class=yoast-schema-graph>{"@context":"https://schema.org","@graph":[{"@type":"Article","@id":"https://jlptsensei.com/learn-japanese/top-100-most-frequent-kanji-characters/#article","isPartOf":{"@id":"https://jlptsensei.com/learn-japanese/top-100-most-frequent-kanji-characters/"},"author":{"name":"Cruise Bogedin","@id":"https://jlptsensei.com/#/schema/person/d389914b57600a30c9815bfa480e4871"},"headline":"Top 100 Most Frequent Kanji Characters","datePublished":"2020-03-16T14:44:22+00:00","dateModified":"2020-05-15T05:38:20+00:00","mainEntityOfPage":{"@id":"https://jlptsensei.com/learn-japanese/top-100-most-frequent-kanji-characters/"},"wordCount":838,"publisher":{"@id":"https://jlptsensei.com/#organization"},"image":{"@id":"https://jlptsensei.com/learn-japanese/top-100-most-frequent-kanji-characters/#primaryimage"},"thumbnailUrl":"https://jlptsensei.com/wp-content/uploads/2020/03/top-100-japanese-kanji-most-frequent-漢字.png","articleSection":["Beginner Japanese","Elementary Japanese","Kanji","Learn Japanese"],"inLanguage":"en-US"},{"@type":"WebPage","@id":"https://jlptsensei.com/learn-japanese/top-100-most-frequent-kanji-characters/","url":"https://jlptsensei.com/learn-japanese/top-100-most-frequent-kanji-characters/","name":"Top 100 Most Frequent Kanji Characters – JLPTsensei.com","isPartOf":{"@id":"https://jlptsensei.com/#website"},"primaryImageOfPage":{"@id":"https://jlptsensei.com/learn-japanese/top-100-most-frequent-kanji-characters/#primaryimage"},"image":{"@id":"https://jlptsensei.com/learn-japanese/top-100-most-frequent-kanji-characters/#primaryimage"},"thumbnailUrl":"https://jlptsensei.com/wp-content/uploads/2020/03/top-100-japanese-kanji-most-frequent-漢字.png","datePublished":"2020-03-16T14:44:22+00:00","dateModified":"2020-05-15T05:38:20+00:00","breadcrumb":{"@id":"https://jlptsensei.com/learn-japanese/top-100-most-frequent-kanji-characters/#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["https://jlptsensei.com/learn-japanese/top-100-most-frequent-kanji-characters/"]}]},{"@type":"ImageObject","inLanguage":"en-US","@id":"https://jlptsensei.com/learn-japanese/top-100-most-frequent-kanji-characters/#primaryimage","url":"https://jlptsensei.com/wp-content/uploads/2020/03/top-100-japanese-kanji-most-frequent-漢字.png","contentUrl":"https://jlptsensei.com/wp-content/uploads/2020/03/top-100-japanese-kanji-most-frequent-漢字.png","width":1000,"height":563,"caption":"top 100 japanese kanji most frequent 漢字"},{"@type":"BreadcrumbList","@id":"https://jlptsensei.com/learn-japanese/top-100-most-frequent-kanji-characters/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://jlptsensei.com/"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://jlptsensei.com/blog/"},{"@type":"ListItem","position":3,"name":"Top 100 Most Frequent Kanji Characters"}]},{"@type":"WebSite","@id":"https://jlptsensei.com/#website","url":"https://jlptsensei.com/","name":"JLPT Sensei","description":"Learn Japanese Grammar &amp; Study for the JLPT","publisher":{"@id":"https://jlptsensei.com/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://jlptsensei.com/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":"Organization","@id":"https://jlptsensei.com/#organization","name":"JLPT Sensei","url":"https://jlptsensei.com/","logo":{"@type":"ImageObject","inLanguage":"en-US","@id":"https://jlptsensei.com/#/schema/logo/image/","url":"https://jlptsensei.com/wp-content/uploads/2017/09/JLPT-Sensei-logo-circle-red.png","contentUrl":"https://jlptsensei.com/wp-content/uploads/2017/09/JLPT-Sensei-logo-circle-red.png","width":500,"height":500,"caption":"JLPT Sensei"},"image":{"@id":"https://jlptsensei.com/#/schema/logo/image/"},"sameAs":["https://www.facebook.com/jlptsensei","https://www.instagram.com/jlptsensei/","http://pinterest.com/jlptsensei","https://www.youtube.com/channel/UCubV75tHSAp4_8c1Zsq0wiA"]},{"@type":"Person","@id":"https://jlptsensei.com/#/schema/person/d389914b57600a30c9815bfa480e4871","name":"Cruise Bogedin","image":{"@type":"ImageObject","inLanguage":"en-US","@id":"https://jlptsensei.com/#/schema/person/image/","url":"https://secure.gravatar.com/avatar/08235b8fb22225f922ef433697f8c080?s=96&d=mm&r=pg","contentUrl":"https://secure.gravatar.com/avatar/08235b8fb22225f922ef433697f8c080?s=96&d=mm&r=pg","caption":"Cruise Bogedin"},"description":"Cruise works full time at a Japanese company in Nagoya, Japan. He worked for 4 years as a University lecturer teaching English before making the move to a 100% Japanese speaking environment to continue improving his Japanese. In his free time, he is either cycling around Japan making YouTube videos or adding new Japanese lessons to this blog.","sameAs":["https://twowheelcruise.com","https://facebook.com/jlptsensei","https://twitter.com/jlptsensei"],"url":"https://jlptsensei.com/author/cruise-bogedin/"}]}</script>
    <link rel=preload id=wp-block-library-css
        href="//jlptsensei.com/wp-includes/css/dist/block-library/style.min.css?ez_used_css_s=110" media=all as=style
        onload="this.onload=null;this.rel='stylesheet'"><noscript>
        <link rel=stylesheet id=wp-block-library-css
            href="//jlptsensei.com/wp-includes/css/dist/block-library/style.min.css?ff=1&amp;wps=false&amp;ez_used_css_s=110"
            media=all>
    </noscript>
    <style id=classic-theme-styles-inline-css>
        /*!This file is auto-generated*/
        .wp-block-button__link {
            color: #fff;
            background-color: #32373c;
            border-radius: 9999px;
            box-shadow: 0 0;
            text-decoration: none;
            padding: calc(.667em + 2px)calc(1.333em + 2px);
            font-size: 1.125em
        }

        .wp-block-file__button {
            background: #32373c;
            color: #fff;
            text-decoration: none
        }
    </style>
    <style id=global-styles-inline-css>
        body {
            --wp--preset--color--black: #000000;
            --wp--preset--color--cyan-bluish-gray: #abb8c3;
            --wp--preset--color--white: #ffffff;
            --wp--preset--color--pale-pink: #f78da7;
            --wp--preset--color--vivid-red: #cf2e2e;
            --wp--preset--color--luminous-vivid-orange: #ff6900;
            --wp--preset--color--luminous-vivid-amber: #fcb900;
            --wp--preset--color--light-green-cyan: #7bdcb5;
            --wp--preset--color--vivid-green-cyan: #00d084;
            --wp--preset--color--pale-cyan-blue: #8ed1fc;
            --wp--preset--color--vivid-cyan-blue: #0693e3;
            --wp--preset--color--vivid-purple: #9b51e0;
            --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg, rgba(6, 147, 227, 1) 0%, rgb(155, 81, 224) 100%);
            --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg, rgb(122, 220, 180) 0%, rgb(0, 208, 130) 100%);
            --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg, rgba(252, 185, 0, 1) 0%, rgba(255, 105, 0, 1) 100%);
            --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg, rgba(255, 105, 0, 1) 0%, rgb(207, 46, 46) 100%);
            --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg, rgb(238, 238, 238) 0%, rgb(169, 184, 195) 100%);
            --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg, rgb(74, 234, 220) 0%, rgb(151, 120, 209) 20%, rgb(207, 42, 186) 40%, rgb(238, 44, 130) 60%, rgb(251, 105, 98) 80%, rgb(254, 248, 76) 100%);
            --wp--preset--gradient--blush-light-purple: linear-gradient(135deg, rgb(255, 206, 236) 0%, rgb(152, 150, 240) 100%);
            --wp--preset--gradient--blush-bordeaux: linear-gradient(135deg, rgb(254, 205, 165) 0%, rgb(254, 45, 45) 50%, rgb(107, 0, 62) 100%);
            --wp--preset--gradient--luminous-dusk: linear-gradient(135deg, rgb(255, 203, 112) 0%, rgb(199, 81, 192) 50%, rgb(65, 88, 208) 100%);
            --wp--preset--gradient--pale-ocean: linear-gradient(135deg, rgb(255, 245, 203) 0%, rgb(182, 227, 212) 50%, rgb(51, 167, 181) 100%);
            --wp--preset--gradient--electric-grass: linear-gradient(135deg, rgb(202, 248, 128) 0%, rgb(113, 206, 126) 100%);
            --wp--preset--gradient--midnight: linear-gradient(135deg, rgb(2, 3, 129) 0%, rgb(40, 116, 252) 100%);
            --wp--preset--font-size--small: 13px;
            --wp--preset--font-size--medium: 20px;
            --wp--preset--font-size--large: 36px;
            --wp--preset--font-size--x-large: 42px;
            --wp--preset--spacing--20: 0.44rem;
            --wp--preset--spacing--30: 0.67rem;
            --wp--preset--spacing--40: 1rem;
            --wp--preset--spacing--50: 1.5rem;
            --wp--preset--spacing--60: 2.25rem;
            --wp--preset--spacing--70: 3.38rem;
            --wp--preset--spacing--80: 5.06rem;
            --wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);
            --wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);
            --wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);
            --wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);
            --wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1)
        }

        :where(.is-layout-flex) {
            gap: .5em
        }

        :where(.is-layout-grid) {
            gap: .5em
        }

        body .is-layout-flow>.alignleft {
            float: left;
            margin-inline-start: 0;
            margin-inline-end: 2em
        }

        body .is-layout-flow>.alignright {
            float: right;
            margin-inline-start: 2em;
            margin-inline-end: 0
        }

        body .is-layout-flow>.aligncenter {
            margin-left: auto !important;
            margin-right: auto !important
        }

        body .is-layout-constrained>.alignleft {
            float: left;
            margin-inline-start: 0;
            margin-inline-end: 2em
        }

        body .is-layout-constrained>.alignright {
            float: right;
            margin-inline-start: 2em;
            margin-inline-end: 0
        }

        body .is-layout-constrained>.aligncenter {
            margin-left: auto !important;
            margin-right: auto !important
        }

        body .is-layout-constrained>:where(:not(.alignleft):not(.alignright):not(.alignfull)) {
            max-width: var(--wp--style--global--content-size);
            margin-left: auto !important;
            margin-right: auto !important
        }

        body .is-layout-constrained>.alignwide {
            max-width: var(--wp--style--global--wide-size)
        }

        body .is-layout-flex {
            display: flex
        }

        body .is-layout-flex {
            flex-wrap: wrap;
            align-items: center
        }

        body .is-layout-flex>* {
            margin: 0
        }

        body .is-layout-grid {
            display: grid
        }

        body .is-layout-grid>* {
            margin: 0
        }

        :where(.wp-block-columns.is-layout-flex) {
            gap: 2em
        }

        :where(.wp-block-columns.is-layout-grid) {
            gap: 2em
        }

        :where(.wp-block-post-template.is-layout-flex) {
            gap: 1.25em
        }

        :where(.wp-block-post-template.is-layout-grid) {
            gap: 1.25em
        }

        .has-black-color {
            color: var(--wp--preset--color--black) !important
        }

        .has-cyan-bluish-gray-color {
            color: var(--wp--preset--color--cyan-bluish-gray) !important
        }

        .has-white-color {
            color: var(--wp--preset--color--white) !important
        }

        .has-pale-pink-color {
            color: var(--wp--preset--color--pale-pink) !important
        }

        .has-vivid-red-color {
            color: var(--wp--preset--color--vivid-red) !important
        }

        .has-luminous-vivid-orange-color {
            color: var(--wp--preset--color--luminous-vivid-orange) !important
        }

        .has-luminous-vivid-amber-color {
            color: var(--wp--preset--color--luminous-vivid-amber) !important
        }

        .has-light-green-cyan-color {
            color: var(--wp--preset--color--light-green-cyan) !important
        }

        .has-vivid-green-cyan-color {
            color: var(--wp--preset--color--vivid-green-cyan) !important
        }

        .has-pale-cyan-blue-color {
            color: var(--wp--preset--color--pale-cyan-blue) !important
        }

        .has-vivid-cyan-blue-color {
            color: var(--wp--preset--color--vivid-cyan-blue) !important
        }

        .has-vivid-purple-color {
            color: var(--wp--preset--color--vivid-purple) !important
        }

        .has-black-background-color {
            background-color: var(--wp--preset--color--black) !important
        }

        .has-cyan-bluish-gray-background-color {
            background-color: var(--wp--preset--color--cyan-bluish-gray) !important
        }

        .has-white-background-color {
            background-color: var(--wp--preset--color--white) !important
        }

        .has-pale-pink-background-color {
            background-color: var(--wp--preset--color--pale-pink) !important
        }

        .has-vivid-red-background-color {
            background-color: var(--wp--preset--color--vivid-red) !important
        }

        .has-luminous-vivid-orange-background-color {
            background-color: var(--wp--preset--color--luminous-vivid-orange) !important
        }

        .has-luminous-vivid-amber-background-color {
            background-color: var(--wp--preset--color--luminous-vivid-amber) !important
        }

        .has-light-green-cyan-background-color {
            background-color: var(--wp--preset--color--light-green-cyan) !important
        }

        .has-vivid-green-cyan-background-color {
            background-color: var(--wp--preset--color--vivid-green-cyan) !important
        }

        .has-pale-cyan-blue-background-color {
            background-color: var(--wp--preset--color--pale-cyan-blue) !important
        }

        .has-vivid-cyan-blue-background-color {
            background-color: var(--wp--preset--color--vivid-cyan-blue) !important
        }

        .has-vivid-purple-background-color {
            background-color: var(--wp--preset--color--vivid-purple) !important
        }

        .has-black-border-color {
            border-color: var(--wp--preset--color--black) !important
        }

        .has-cyan-bluish-gray-border-color {
            border-color: var(--wp--preset--color--cyan-bluish-gray) !important
        }

        .has-white-border-color {
            border-color: var(--wp--preset--color--white) !important
        }

        .has-pale-pink-border-color {
            border-color: var(--wp--preset--color--pale-pink) !important
        }

        .has-vivid-red-border-color {
            border-color: var(--wp--preset--color--vivid-red) !important
        }

        .has-luminous-vivid-orange-border-color {
            border-color: var(--wp--preset--color--luminous-vivid-orange) !important
        }

        .has-luminous-vivid-amber-border-color {
            border-color: var(--wp--preset--color--luminous-vivid-amber) !important
        }

        .has-light-green-cyan-border-color {
            border-color: var(--wp--preset--color--light-green-cyan) !important
        }

        .has-vivid-green-cyan-border-color {
            border-color: var(--wp--preset--color--vivid-green-cyan) !important
        }

        .has-pale-cyan-blue-border-color {
            border-color: var(--wp--preset--color--pale-cyan-blue) !important
        }

        .has-vivid-cyan-blue-border-color {
            border-color: var(--wp--preset--color--vivid-cyan-blue) !important
        }

        .has-vivid-purple-border-color {
            border-color: var(--wp--preset--color--vivid-purple) !important
        }

        .has-vivid-cyan-blue-to-vivid-purple-gradient-background {
            background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important
        }

        .has-light-green-cyan-to-vivid-green-cyan-gradient-background {
            background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important
        }

        .has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background {
            background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important
        }

        .has-luminous-vivid-orange-to-vivid-red-gradient-background {
            background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important
        }

        .has-very-light-gray-to-cyan-bluish-gray-gradient-background {
            background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important
        }

        .has-cool-to-warm-spectrum-gradient-background {
            background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important
        }

        .has-blush-light-purple-gradient-background {
            background: var(--wp--preset--gradient--blush-light-purple) !important
        }

        .has-blush-bordeaux-gradient-background {
            background: var(--wp--preset--gradient--blush-bordeaux) !important
        }

        .has-luminous-dusk-gradient-background {
            background: var(--wp--preset--gradient--luminous-dusk) !important
        }

        .has-pale-ocean-gradient-background {
            background: var(--wp--preset--gradient--pale-ocean) !important
        }

        .has-electric-grass-gradient-background {
            background: var(--wp--preset--gradient--electric-grass) !important
        }

        .has-midnight-gradient-background {
            background: var(--wp--preset--gradient--midnight) !important
        }

        .has-small-font-size {
            font-size: var(--wp--preset--font-size--small) !important
        }

        .has-medium-font-size {
            font-size: var(--wp--preset--font-size--medium) !important
        }

        .has-large-font-size {
            font-size: var(--wp--preset--font-size--large) !important
        }

        .has-x-large-font-size {
            font-size: var(--wp--preset--font-size--x-large) !important
        }

        .wp-block-navigation a:where(:not(.wp-element-button)) {
            color: inherit
        }

        :where(.wp-block-post-template.is-layout-flex) {
            gap: 1.25em
        }

        :where(.wp-block-post-template.is-layout-grid) {
            gap: 1.25em
        }

        :where(.wp-block-columns.is-layout-flex) {
            gap: 2em
        }

        :where(.wp-block-columns.is-layout-grid) {
            gap: 2em
        }

        .wp-block-pullquote {
            font-size: 1.5em;
            line-height: 1.6
        }
    </style>
    <link rel=preload id=cookie-notice-front-css
        href="//jlptsensei.com/wp-content/plugins/cookie-notice/css/front.min.css?ez_used_css_s=110" media=all as=style
        onload="this.onload=null;this.rel='stylesheet'"><noscript>
        <link rel=stylesheet id=cookie-notice-front-css
            href="//jlptsensei.com/wp-content/plugins/cookie-notice/css/front.min.css?ff=1&amp;wps=false&amp;ez_used_css_s=110"
            media=all>
    </noscript>
    <link rel=preload id=bones-stylesheet-css
        href="//jlptsensei.com/wp-content/themes/jlpt_sensei_rename/library/css/style.css?noc=d5223&amp;ez_used_css_s=110"
        media=all as=style onload="this.onload=null;this.rel='stylesheet'"><noscript>
        <link rel=stylesheet id=bones-stylesheet-css
            href="//jlptsensei.com/wp-content/themes/jlpt_sensei_rename/library/css/style.css?ff=1&amp;noc=d5223&amp;wps=false&amp;ez_used_css_s=110"
            media=all>
    </noscript>
    <script async type=text/ez-screx
        id=cookie-notice-front-js-before>var cnArgs={"ajaxUrl":"https:\/\/jlptsensei.com\/wp-admin\/admin-ajax.php","nonce":"8561292903","hideEffect":"fade","position":"bottom","onScroll":false,"onScrollOffset":100,"onClick":false,"cookieName":"cookie_notice_accepted","cookieTime":2592000,"cookieTimeRejected":2592000,"globalCookie":false,"redirection":false,"cache":true,"revokeCookies":false,"revokeCookiesOpt":"automatic"};</script>
    <script async type=text/ez-screx
        src="//jlptsensei.com/wp-content/plugins/cookie-notice/js/front.min.js?screx=1&amp;sxcb=1a"
        id=cookie-notice-front-js></script>
    <link rel=https://api.w.org/ href=https://jlptsensei.com/wp-json />
    <link rel=alternate type=application/json href=https://jlptsensei.com/wp-json/wp/v2/posts/16073>
    <link rel=alternate type=application/json+oembed
        href="https://jlptsensei.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fjlptsensei.com%2Flearn-japanese%2Ftop-100-most-frequent-kanji-characters%2F">
    <link rel=alternate type=text/xml+oembed
        href="https://jlptsensei.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fjlptsensei.com%2Flearn-japanese%2Ftop-100-most-frequent-kanji-characters%2F&amp;format=xml">
    <style id=ezoicCSS>
        .video-js .vjs-big-play-button .vjs-icon-placeholder:before,
        .video-js .vjs-modal-dialog,
        .vjs-button>.vjs-icon-placeholder:before,
        .vjs-modal-dialog .vjs-modal-dialog-content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%
        }

        .video-js .vjs-big-play-button .vjs-icon-placeholder:before,
        .vjs-button>.vjs-icon-placeholder:before {
            text-align: center
        }

        @font-face {
            font-family: VideoJS;
            src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABUgAAsAAAAAItAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAPgAAAFZRiV33Y21hcAAAAYQAAAEJAAAD5p42+VxnbHlmAAACkAAADwwAABdk9R/WHmhlYWQAABGcAAAAKwAAADYn8kSnaGhlYQAAEcgAAAAdAAAAJA+RCL1obXR4AAAR6AAAABMAAAC8Q44AAGxvY2EAABH8AAAAYAAAAGB7SIHGbWF4cAAAElwAAAAfAAAAIAFAAI9uYW1lAAASfAAAASUAAAIK1cf1oHBvc3QAABOkAAABfAAAAnXdFqh1eJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGR7xDiBgZWBgaWQ5RkDA8MvCM0cwxDOeI6BgYmBlZkBKwhIc01hcPjI+FGPHcRdyA4RZgQRADbZCycAAHic7dPXbcMwAEXRK1vuvffem749XAbKV3bjBA6fXsaIgMMLEWoQJaAEFKNnlELyQ4K27zib5PNF6vl8yld+TKr5kH0+cUw0xv00Hwvx2DResUyFKrV4XoMmLdp06NKjz4AhI8ZMmDJjzoIlK9Zs2LJjz4EjJ85cuHLjziPe/0UWL17mf2tqKLz/9jK9f8tXpGCoRdPKhtS0RqFkWvVQNtSKoVYNtWaoddPXEBqG2jQ9XWgZattQO4baNdSeofYNdWCoQ0MdGerYUCeGOjXUmaHODXVhqEtDXRnq2lA3hro11J2h7g31YKhHQz0Z6tlQL4Z6NdSbod4N9WGoT9MfHF6GmhnZLxyDcRMAAAB4nJ1YC1gUV5auc6urCmxEGrq6VRD6ATQP5dHPKK8GRIyoKApoEBUDAiGzGmdUfKNRM4qLZrUZdGKcGN/GZJKd0SyOWTbfbmZ2NxqzM5IxRtNZd78vwYlJdtREoO7sudVNq6PmmxmKqrqPU+eee173P80Bh39Cu9DOEY4DHZBK3i20D/QRLcfxbE5sEVtwLpZzclw4ibFIkSCJUcZ4MBpMnnzwuKNsGWBL5i3qy6kO2dVpvUpKbkAP9fq62rdeGJ+TM/7C1nbIutfuWrWk5ci4zMxxR1qW/N+9JsmCGXj9VKWhFx/6tr/nz78INDm2C9yPF/fDcxLuyKxLBZ1ZBz2QTi+RSkiH5RrDQJ/GgGQadX9m0YSURs7GpSG905Zsk41uj14yul1OtieZ7QUk5GRG/YiS7PYYPSAZNRed9sq3+bOpz00rKb7pe/ZEZvbALxZAHT3AFoH8GXP3rt67QFn40kt8W13FjLTDb48c+fSi5/7h0P4dL5yz7DPtbmgmYxfQA9RL2+EOfTcvdp+1vmuBpvOll1As1S6ak0IvJzC7sKWJFtJgBd2uWcg+0Zyg7dzQfhcjXRgXGZRf5/a4A58IDU777Nl252AUk4m2ByRRjqTNqIDCEJeAnU3iCFwrkrNwXEzg4yFevBwypzxkcX+AIfk3VEKl3XmWbT8788SzvpvFJaiOezL6QyuSr9VNf97csNu0z3LuhR0wATUxZAfVBwVOy+nQFhxYdWaXlXe4HC4zWGWzzsrLDtmhI9pOWOHv7PTT7XybH1Z0+v2d5Abd3kmG+TsH23CS/KwTxx/JkzEwx6jcQOUc42LLwHJ/J93uZ9ygh3HuZGwqsY9dWDHQ58dxNqyqKRQTYdxwTubiOSs3FiMDkq0WSZQgCT0GBDOg2lxOAd1FlPVGs4AKBAcYHHaP2wPkHaivmLF5zYqnIZrvcHx5gN4k/6tchNW1DtdgNL2KrxEkS/kfnIHoVnp1VjmjpTf5r0lTzLj0mdS28tX+XGorU364eMPmnWVl8J36nlKGw3CZhjEiuMw8h8mKvhGD+4/lElBWjAhLJMg6fTw4zPZ8cOmcGQBm2Qxml1nAm13CpYGq1JKUlJJUzQn1PTAO0mgv6VMMpA/DuRfSWEu4lDIxdbAtdWIKvnn2Vk766CWfz9fpY0sH/UpdP50rfszaVpdVRmvIejEdLMk45s4Bu0EWHjeOySmFyZSiMahvZdNSn29peoI/YexYfKQTLeurTXXwEVLeSfInTWHkkMaeUx7sBvOCSTSj3AlcKjfueyS36tCrXDlgRtF0etFq9jhc1kfKuBT/OwMr0F4UUTTh1AN0g20+H/ScPcsIEsYu9d/zN5PmjprPtNwI1ZZcDK6iC97Mcjp2y2aX36f+QbpGHrgRuHlXJ+Zf6PFRL2uQSp8vxHeF2IoRb8Rd2rhMzsNxSRmEuKK4JFnkojhMcx6jzqHzGMGFcW+MhBj0bhf6cowN+45I4LHvwT6fteu7M42wGRI/pxcg6/MZdEvt1U1XaulHFXuLmqov/MukvRVL35/b3ODM1+4aPjtzeK7zmUkV2h3DN54HaQ9GzJvxHRb6Ks2gB81fwqraT+A7GvZJrRLRofU6G0urNL+zFw3v0FaVDFxsKEZW56F31r6ip6vOL+FCObBPuIMRiXld9RaMdLzRIOGhPey2T9vA/35DmZPK9IWaT9d/WgOGMieYqJ/dzjLIhZU118gbysxrNUGefxD6UO/hyNNllpFTOIbx32kSFQctnweV5PxTMHLjRqiAN+fQE9gL+Xy5WB6MOS4GJJuYbDUHhcKDhHGRbLzOpjsjdM1+iwAZLGeieehACX2hhI7SjK/ZUTNrvVje31TxJiFBGYViWFkCn9PMeX9fS6qVbzfCj4fOCTzDnuWy2c4xA7mdNkA3RS9FH2VeqzdCBlixxbzXjvkHU1I8BOYFb1pZvPIHSSIj4svT8xpzcxtXN+ZKyjdDvbz08niiF3PqV9Tn5NST8vg48MTaY8E5xqSSIsWoWHo+LtAzxdH/GDUyp37CBEYfso04F/NlMTcDJUTpECLY0HFGQHImE8xsEUdgnrQlixIvGhJA1BvxpDHGxEMBYFeNOHcBJlSjwe2JcSfbBEsGOPPBHg/6SBBOCsLLw0SpUxod0Z1bFMfLkbQ3UiZxEyd0Dx8t+SRBu18Q9msFbI4e3p1THEfkSEh7kEJ5orR10qTWDvbgPWn5aWvCYyOAjwgXyjJi34uMjo58L25cmRAeQZWI2PA1QQLsPESAH8WGFwZZ4SPoR73BHPzIPMJj9AreBzKUmrH4todT18ANvi1oc3YGjUT/0j+ExUwq8PI9BLaCQIpvewwYu2evAG/Vo/5avPdY7o+BemLLXw3y+AdkzP9bpIxB1wm5EYq8fesHbPEPtm6HrHvtx4jcGPR8fDDpkZBefIjB46QnlUNRltv4Z/pO/J6dxEjhYAtmoMeq+GozvUVvNYOW3m6GCIhoprcfr97B8AcIQYsfD8ljUvGNjvkrpj0ETA48ZMIxCeqsRIsQALE0gi2GB+glSOfbOjW3GSBM9yPq8/rpJXrJDz0BPxV6xdN4uiCGDQed3WhgFkBUZEFsmeyyBpzXrm7UGTBZG8Lh5aubFufk5eUsbrrFGr7McYdbltxa0nKYqRKbQjvikXYkTGM0f2xuyM3Ly21oXnWfvf6I1BmZwfh7EWWIYsg2nHhsDhOnczhJcmI6eBAmy3jZ3RiJmKQR/JA99FcwsfaVbNDDyi1rL9NPj9hfo61wjM6BjzOLijLpeTgk/pL+ip6tfYWupzeOgPny2tcUu9J/9mhxJlgyi985NFRbvCVewXUNXLJaW0RxZqtRYtnfYdcYomXQWdnJHQA3jiEEkeTQWcWxdDP9IvvVWvo2TK553XEMEq+s69/QDU1Q7p0zxwsm9qS379whr8NI2PJqLUyGyfNeX3eFfnJU2U+uHR9cVV1IqgurqwuV44XVp0h2qN55X5XJwtk59yP0IZuHrqBOBIuIYhkcoT6Kx79Pu2HS/IPZIMOqLWs/pteOOk4NPgEb6QAIdAPsyZk5Mwd+wVaHMexJv719W7xCu2l37UG6lvYdBcvHa08p89741zd63phTRGqL5ggo6SlvdbWXzCqsPq78NnSu7wnKy2HNZbVoRCI7UJEOyRj+sPE002tOOY7Qa5fXboFWkLNeqYUSZRocp9XwSUZxcQZ9Hw6LV2pOoVmvHQEDbGIENEG5i6bLgMSM4n8+FNLTtAds99DaWEvgcf4o5SyYe9x+kF6/tGoTPAdRmS/XQIEy//QxKC2oqioAI3tS5auvxCtzT6y6RK8fhChYcwCJaMJhxc0vqSxQ/qmgsrKAlBZUHlauheTpvd9uj5DnLzJct6qfq5fXbYHVIGcfrIVJihbaVLu1wW7Vbs8zK0A8e9Jvb91S9cVMjPrazD6gpfeZTXzYbCFMcppVRsGMpp55OWgx1/3JeAxW1Y7AORgM/m3rWrsdLkQVmEVSU16cX/e7uvkvpqRiQsG06XJ0t64Tf+l0nG1dt025gyOIZlvq5u9KSU1N2TW/rsWnnMRPyTDkctbhvIcNvYIXWyLzdwYLoYesUbaQG4iK2cWO2gdpeUYLqDD0MUTOPhDIGnZEs58yArR86FznuWEsU4YDi2x26dA4klkn8Qa6vhk2QUfX4Jxm/ngX9r7ogn1dmlmwqZmuhxtdg9XN/DEcUgqb+9hMyNansfaQET2mcROCmGEMVqxm5u+h6kN2MOwgqykV2wH9yQG9DvVFU38Pogaf4FVuE62KI/oJ02RDdWW2w5dqQwU/8+N1q1DlvsL863u61KLE7x/o8w0VJQM/Y/SQ3unIrqxueEa1BqT5VFNsO7p39/UC771a77RowpaKe9nvJQIT1Pog5LGx8XblBKmCNGTf3xMogAQvPnz9PYKX/08sVDTG1OKUlOLUgS/UaZtm1NAaYTsl7i9ZQ+L6O4Rl0OGa577LuWvc+C+x96/vYh0lLBuM+7XwI/dTLtdT7v4d6rRTWDnku0IBrqFnZ5bVIqKP8lasJlithWnaLhTsr8qFJBulF/70p4undou36HeTJ5+jv1fCybeQ8nH3+Xv6aENczmOFlab+hqMDg1rLOt12A+tiUFrYDwQ6c3RUJp601nzegTNX6WlYAI2zSUV945F6zU56ZmZVQaWspWcIADxJ9GmljQUnL2p2Dpr5T8H+5KJFu+vqBq8qvyHRzStLHPEO5SPYCV9nZe0yZT2RcH0oHvegSzNEJ0oGWU8iQWM12dgPEugngVceGIwZgPFp0BiT1a0a3R5Rcot7ihfA1J/20v96jX7zmTX9s583H0kwx6WnLd09cXrR9LGroOa9sHNbdyz8wcKk5lqhaVFJZNwmqtw884MXNdvJujpBa3xzuSaZH9sxa06Z7x+HJSduPbdYHv/DgmEhfbehvlmGN7JUkcG78GDM12CeyFFTPNqVeNxC1gzjz+c2nVo63Xxs8rKJWXoBJM0tmEbfGm4qzpoOH3xpzQfyxLzW1gnE9NHo6tol1eMEic4ZVPrjnVi0kqAe2sQ2bgqupScaq8WGlUWgWHI51SKJl/UYT6zccNsCSkBtiVZLsiefuFSDYT3Fi8Zk7EUnmjTRYtsFeuDDJS05MW79M3mr3mla+d8dzac31KTPmBYfFiYSUef48PhPjm9ryZsSGZZkdNvzq0Y9rdNcwDq5Dg5C3QW+7UN64IKptvS3tvHbvu5c9pv1Exau21rc9LIpwpQwUjTq8576yeVDz5+4WZ1nXT43wV60rPLJbDp/UksNrP3iQ2SA63Pst058gOYDbhRnRUw8l/sRt4HbxPzO4WYpInCpuVgSbVh6JXuwnnJngKTTCwaPWmG5Xbhpm1U0Yt3FyBGpGYemPM77p2TD904JjgJ2QFpFLeYpGx8X15Qx1Zk31p5ki9ZLUuXE0lmuJlcakJMVLeFS1iIvrB8drY0aloilakqCZwzwRORtxlgwxS4IThggJd4TDxoiaAIT80fFPGrCPPru+puFn504P/ybr4ihA/6dKASLshEJic7xE8tmzu3KzA7TABBe8y5fNbWo3ilQn/SuFKM16b2l5bOeayqfGhYmhIulU+fVNDdWVv4NMzX10MBHyPR5uhWUu8D9P1VnIMt4nGNgZGBgAOJ/1bf64vltvjJwszOAwAOlmqvINEc/WJyDgQlEAQA+dgnjAHicY2BkYGBnAAGOPgaG//85+hkYGVCBPgBGJwNkAAAAeJxjYGBgYB/EmKMPtxwAhg4B0gAAAAAAAA4AaAB+AMwA4AECAUIBbAGYAe4CLgKKAtAC/ANiA4wDqAPgBDAEsATaBQgFWgXABggGLgZwBqwG9gdOB4oH0ggqCHAIhgicCMgJJAlWCYgJrAnyCkAKdgrkC7J4nGNgZGBg0GdoZmBnAAEmIOYCQgaG/2A+AwAaqwHQAHicXZBNaoNAGIZfE5PQCKFQ2lUps2oXBfOzzAESyDKBQJdGR2NQR3QSSE/QE/QEPUUPUHqsvsrXjTMw83zPvPMNCuAWP3DQDAejdm1GjzwS7pMmwi75XngAD4/CQ/oX4TFe4Qt7uMMbOzjuDc0EmXCP/C7cJ38Iu+RP4QEe8CU8pP8WHmOPX2EPz87TPo202ey2OjlnQSXV/6arOjWFmvszMWtd6CqwOlKHq6ovycLaWMWVydXKFFZnmVFlZU46tP7R2nI5ncbi/dDkfDtFBA2DDXbYkhKc+V0Bqs5Zt9JM1HQGBRTm/EezTmZNKtpcAMs9Yu6AK9caF76zoLWIWcfMGOSkVduvSWechqZsz040Ib2PY3urxBJTzriT95lipz+TN1fmAAAAeJxtkXlT2zAQxf1C4thJAwRajt4HRy8VMwwfSJHXsQZZcnUQ+PYoTtwpM+wf2t9brWZ2n5JBsol58nJcYYAdDDFCijEy5JhgileYYRd72MccBzjEa7zBEY5xglO8xTu8xwd8xCd8xhd8xTec4RwXuMR3/MBP/MJvMPzBFYpk2Cr+OF0fTEgrFI1aHhxN740KDbEmeJpsWZlVj40s+45aLuv9KijlhCXSjLQnu/d/4UH6sWul1mRzFxZeekUuE7z10mg3qMtM1FGQddPSrLQyvJR6OaukItYXDp6pCJrmz0umqkau5pZ2hFmm7m+ImG5W2t0kZoJXUtPhVnYTbbdOBdeCVGqpJe7XKTqSbRK7zbdwXfR0U+SVsStuS3Y76em6+Ic3xYiHUppc04Nn0lMzay3dSxNcp8auDlWlaCi48yetFD7Y9USsx87G45cuop1ZxQUtjLnL4j53FO0a+5X08UXqQ7NQNo92R0XOz7sxWEnxN2TneJI8Acttu4Q=)format("woff");
            font-weight: 400;
            font-style: normal
        }

        .video-js .vjs-big-play-button .vjs-icon-placeholder:before,
        .video-js .vjs-play-control .vjs-icon-placeholder,
        .vjs-icon-play {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .video-js .vjs-big-play-button .vjs-icon-placeholder:before,
        .video-js .vjs-play-control .vjs-icon-placeholder:before,
        .vjs-icon-play:before {
            content: "\f101"
        }

        .vjs-icon-play-circle {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .vjs-icon-play-circle:before {
            content: "\f102"
        }

        .video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder,
        .vjs-icon-pause {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder:before,
        .vjs-icon-pause:before {
            content: "\f103"
        }

        .video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder,
        .vjs-icon-volume-mute {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder:before,
        .vjs-icon-volume-mute:before {
            content: "\f104"
        }

        .video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder,
        .vjs-icon-volume-low {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder:before,
        .vjs-icon-volume-low:before {
            content: "\f105"
        }

        .video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder,
        .vjs-icon-volume-mid {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder:before,
        .vjs-icon-volume-mid:before {
            content: "\f106"
        }

        .video-js .vjs-mute-control .vjs-icon-placeholder,
        .vjs-icon-volume-high {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .video-js .vjs-mute-control .vjs-icon-placeholder:before,
        .vjs-icon-volume-high:before {
            content: "\f107"
        }

        .video-js .vjs-fullscreen-control .vjs-icon-placeholder,
        .vjs-icon-fullscreen-enter {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .video-js .vjs-fullscreen-control .vjs-icon-placeholder:before,
        .vjs-icon-fullscreen-enter:before {
            content: "\f108"
        }

        .video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder,
        .vjs-icon-fullscreen-exit {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder:before,
        .vjs-icon-fullscreen-exit:before {
            content: "\f109"
        }

        .vjs-icon-spinner {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .vjs-icon-spinner:before {
            content: "\f10a"
        }

        .video-js .vjs-subs-caps-button .vjs-icon-placeholder,
        .video-js .vjs-subtitles-button .vjs-icon-placeholder,
        .video-js.video-js:lang(en-au) .vjs-subs-caps-button .vjs-icon-placeholder,
        .video-js.video-js:lang(en-gb) .vjs-subs-caps-button .vjs-icon-placeholder,
        .video-js.video-js:lang(en-ie) .vjs-subs-caps-button .vjs-icon-placeholder,
        .video-js.video-js:lang(en-nz) .vjs-subs-caps-button .vjs-icon-placeholder,
        .vjs-icon-subtitles {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .video-js .vjs-subs-caps-button .vjs-icon-placeholder:before,
        .video-js .vjs-subtitles-button .vjs-icon-placeholder:before,
        .video-js.video-js:lang(en-au) .vjs-subs-caps-button .vjs-icon-placeholder:before,
        .video-js.video-js:lang(en-gb) .vjs-subs-caps-button .vjs-icon-placeholder:before,
        .video-js.video-js:lang(en-ie) .vjs-subs-caps-button .vjs-icon-placeholder:before,
        .video-js.video-js:lang(en-nz) .vjs-subs-caps-button .vjs-icon-placeholder:before,
        .vjs-icon-subtitles:before {
            content: "\f10b"
        }

        .video-js .vjs-captions-button .vjs-icon-placeholder,
        .video-js:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder,
        .video-js:lang(fr-ca) .vjs-subs-caps-button .vjs-icon-placeholder,
        .vjs-icon-captions {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .video-js .vjs-captions-button .vjs-icon-placeholder:before,
        .video-js:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder:before,
        .video-js:lang(fr-ca) .vjs-subs-caps-button .vjs-icon-placeholder:before,
        .vjs-icon-captions:before {
            content: "\f10c"
        }

        .vjs-icon-hd {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .vjs-icon-hd:before {
            content: "\f10d"
        }

        .video-js .vjs-chapters-button .vjs-icon-placeholder,
        .vjs-icon-chapters {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .video-js .vjs-chapters-button .vjs-icon-placeholder:before,
        .vjs-icon-chapters:before {
            content: "\f10e"
        }

        .vjs-icon-downloading {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .vjs-icon-downloading:before {
            content: "\f10f"
        }

        .vjs-icon-file-download {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .vjs-icon-file-download:before {
            content: "\f110"
        }

        .vjs-icon-file-download-done {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .vjs-icon-file-download-done:before {
            content: "\f111"
        }

        .vjs-icon-file-download-off {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .vjs-icon-file-download-off:before {
            content: "\f112"
        }

        .vjs-icon-share {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .vjs-icon-share:before {
            content: "\f113"
        }

        .vjs-icon-cog {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .vjs-icon-cog:before {
            content: "\f114"
        }

        .vjs-icon-square {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .vjs-icon-square:before {
            content: "\f115"
        }

        .video-js .vjs-play-progress-circle,
        .video-js .vjs-volume-level,
        .vjs-icon-circle,
        .vjs-seek-to-live-control .vjs-icon-placeholder {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .video-js .vjs-play-progress-circle:before,
        .video-js .vjs-volume-level:before,
        .vjs-icon-circle:before,
        .vjs-seek-to-live-control .vjs-icon-placeholder:before {
            content: "\f116"
        }

        .vjs-icon-circle-outline {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .vjs-icon-circle-outline:before {
            content: "\f117"
        }

        .vjs-icon-circle-inner-circle {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .vjs-icon-circle-inner-circle:before {
            content: "\f118"
        }

        .video-js .vjs-control.vjs-close-button .vjs-icon-placeholder,
        .vjs-icon-cancel {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .video-js .vjs-control.vjs-close-button .vjs-icon-placeholder:before,
        .vjs-icon-cancel:before {
            content: "\f119"
        }

        .vjs-icon-repeat {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .vjs-icon-repeat:before {
            content: "\f11a"
        }

        .video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder,
        .vjs-icon-replay {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder:before,
        .vjs-icon-replay:before {
            content: "\f11b"
        }

        .video-js .vjs-skip-backward-5 .vjs-icon-placeholder,
        .vjs-icon-replay-5 {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .video-js .vjs-skip-backward-5 .vjs-icon-placeholder:before,
        .vjs-icon-replay-5:before {
            content: "\f11c"
        }

        .video-js .vjs-skip-backward-10 .vjs-icon-placeholder,
        .vjs-icon-replay-10 {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .video-js .vjs-skip-backward-10 .vjs-icon-placeholder:before,
        .vjs-icon-replay-10:before {
            content: "\f11d"
        }

        .video-js .vjs-skip-backward-30 .vjs-icon-placeholder,
        .vjs-icon-replay-30 {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .video-js .vjs-skip-backward-30 .vjs-icon-placeholder:before,
        .vjs-icon-replay-30:before {
            content: "\f11e"
        }

        .video-js .vjs-skip-forward-5 .vjs-icon-placeholder,
        .vjs-icon-forward-5 {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .video-js .vjs-skip-forward-5 .vjs-icon-placeholder:before,
        .vjs-icon-forward-5:before {
            content: "\f11f"
        }

        .video-js .vjs-skip-forward-10 .vjs-icon-placeholder,
        .vjs-icon-forward-10 {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .video-js .vjs-skip-forward-10 .vjs-icon-placeholder:before,
        .vjs-icon-forward-10:before {
            content: "\f120"
        }

        .video-js .vjs-skip-forward-30 .vjs-icon-placeholder,
        .vjs-icon-forward-30 {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .video-js .vjs-skip-forward-30 .vjs-icon-placeholder:before,
        .vjs-icon-forward-30:before {
            content: "\f121"
        }

        .video-js .vjs-audio-button .vjs-icon-placeholder,
        .vjs-icon-audio {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .video-js .vjs-audio-button .vjs-icon-placeholder:before,
        .vjs-icon-audio:before {
            content: "\f122"
        }

        .vjs-icon-next-item {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .vjs-icon-next-item:before {
            content: "\f123"
        }

        .vjs-icon-previous-item {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .vjs-icon-previous-item:before {
            content: "\f124"
        }

        .vjs-icon-shuffle {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .vjs-icon-shuffle:before {
            content: "\f125"
        }

        .vjs-icon-cast {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .vjs-icon-cast:before {
            content: "\f126"
        }

        .video-js .vjs-picture-in-picture-control .vjs-icon-placeholder,
        .vjs-icon-picture-in-picture-enter {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .video-js .vjs-picture-in-picture-control .vjs-icon-placeholder:before,
        .vjs-icon-picture-in-picture-enter:before {
            content: "\f127"
        }

        .video-js.vjs-picture-in-picture .vjs-picture-in-picture-control .vjs-icon-placeholder,
        .vjs-icon-picture-in-picture-exit {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .video-js.vjs-picture-in-picture .vjs-picture-in-picture-control .vjs-icon-placeholder:before,
        .vjs-icon-picture-in-picture-exit:before {
            content: "\f128"
        }

        .vjs-icon-facebook {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .vjs-icon-facebook:before {
            content: "\f129"
        }

        .vjs-icon-linkedin {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .vjs-icon-linkedin:before {
            content: "\f12a"
        }

        .vjs-icon-twitter {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .vjs-icon-twitter:before {
            content: "\f12b"
        }

        .vjs-icon-tumblr {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .vjs-icon-tumblr:before {
            content: "\f12c"
        }

        .vjs-icon-pinterest {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .vjs-icon-pinterest:before {
            content: "\f12d"
        }

        .video-js .vjs-descriptions-button .vjs-icon-placeholder,
        .vjs-icon-audio-description {
            font-family: VideoJS !important;
            font-weight: 400;
            font-style: normal
        }

        .video-js .vjs-descriptions-button .vjs-icon-placeholder:before,
        .vjs-icon-audio-description:before {
            content: "\f12e"
        }

        .video-js {
            display: inline-block;
            vertical-align: top;
            box-sizing: border-box;
            color: #fff;
            background-color: #000;
            position: relative;
            padding: 0;
            font-size: 10px;
            line-height: 1;
            font-weight: 400;
            font-style: normal;
            font-family: Arial, Helvetica, sans-serif;
            word-break: initial
        }

        .video-js:-moz-full-screen {
            position: absolute
        }

        .video-js:-webkit-full-screen {
            width: 100% !important;
            height: 100% !important
        }

        .video-js[tabindex="-1"] {
            outline: 0
        }

        .video-js *,
        .video-js :after,
        .video-js :before {
            box-sizing: inherit
        }

        .video-js ul {
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
            list-style-position: outside;
            margin-left: 0;
            margin-right: 0;
            margin-top: 0;
            margin-bottom: 0
        }

        .video-js.vjs-1-1,
        .video-js.vjs-16-9,
        .video-js.vjs-4-3,
        .video-js.vjs-9-16,
        .video-js.vjs-fluid {
            width: 100%;
            max-width: 100%
        }

        .video-js.vjs-1-1:not(.vjs-audio-only-mode),
        .video-js.vjs-16-9:not(.vjs-audio-only-mode),
        .video-js.vjs-4-3:not(.vjs-audio-only-mode),
        .video-js.vjs-9-16:not(.vjs-audio-only-mode),
        .video-js.vjs-fluid:not(.vjs-audio-only-mode) {
            height: 0
        }

        .video-js.vjs-16-9:not(.vjs-audio-only-mode) {
            padding-top: 56.25%
        }

        .video-js.vjs-4-3:not(.vjs-audio-only-mode) {
            padding-top: 75%
        }

        .video-js.vjs-9-16:not(.vjs-audio-only-mode) {
            padding-top: 177.7777777778%
        }

        .video-js.vjs-1-1:not(.vjs-audio-only-mode) {
            padding-top: 100%
        }

        .video-js.vjs-fill:not(.vjs-audio-only-mode) {
            width: 100%;
            height: 100%
        }

        .video-js .vjs-tech {
            position: absolute;
            top: 0;
            left: 0;
            width: 100% !important;
            height: 100% !important
        }

        .video-js.vjs-audio-only-mode .vjs-tech {
            display: none
        }

        body.vjs-full-window,
        body.vjs-pip-window {
            padding: 0;
            margin: 0;
            height: 100%
        }

        .vjs-full-window .video-js.vjs-fullscreen,
        body.vjs-pip-window .video-js {
            position: fixed;
            overflow: hidden;
            z-index: 1000;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0
        }

        .video-js.vjs-fullscreen:not(.vjs-ios-native-fs),
        body.vjs-pip-window .video-js {
            width: 100% !important;
            height: 100% !important;
            padding-top: 0 !important
        }

        .video-js.vjs-fullscreen.vjs-user-inactive {
            cursor: none
        }

        .vjs-pip-container .vjs-pip-text {
            position: absolute;
            bottom: 10%;
            font-size: 2em;
            background-color: rgba(0, 0, 0, .7);
            padding: .5em;
            text-align: center;
            width: 100%
        }

        .vjs-layout-small.vjs-pip-container .vjs-pip-text,
        .vjs-layout-tiny.vjs-pip-container .vjs-pip-text,
        .vjs-layout-x-small.vjs-pip-container .vjs-pip-text {
            bottom: 0;
            font-size: 1.4em
        }

        .vjs-hidden {
            display: none !important
        }

        .vjs-disabled {
            opacity: .5;
            cursor: default
        }

        .video-js .vjs-offscreen {
            height: 1px;
            left: -9999px;
            position: absolute;
            top: 0;
            width: 1px
        }

        .vjs-lock-showing {
            display: block !important;
            opacity: 1 !important;
            visibility: visible !important
        }

        .vjs-no-js {
            padding: 20px;
            color: #fff;
            background-color: #000;
            font-size: 18px;
            font-family: Arial, Helvetica, sans-serif;
            text-align: center;
            width: 300px;
            height: 150px;
            margin: 0 auto
        }

        .vjs-no-js a,
        .vjs-no-js a:visited {
            color: #66a8cc
        }

        .video-js .vjs-big-play-button {
            font-size: 3em;
            line-height: 1.5em;
            height: 1.63332em;
            width: 3em;
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            padding: 0;
            margin-top: -.81666em;
            margin-left: -1.5em;
            cursor: pointer;
            opacity: 1;
            border: .06666em solid #fff;
            background-color: #2b333f;
            background-color: rgba(43, 51, 63, .7);
            border-radius: .3em;
            transition: all .4s
        }

        .video-js .vjs-big-play-button:focus,
        .video-js:hover .vjs-big-play-button {
            border-color: #fff;
            background-color: #73859f;
            background-color: rgba(115, 133, 159, .5);
            transition: all 0s
        }

        .vjs-controls-disabled .vjs-big-play-button,
        .vjs-error .vjs-big-play-button,
        .vjs-has-started .vjs-big-play-button,
        .vjs-using-native-controls .vjs-big-play-button {
            display: none !important
        }

        .vjs-has-started.vjs-paused.vjs-show-big-play-button-on-pause .vjs-big-play-button {
            display: block
        }

        .video-js button {
            background: 0 0;
            border: none;
            color: inherit;
            display: inline-block;
            font-size: inherit;
            line-height: inherit;
            text-transform: none;
            text-decoration: none;
            transition: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none
        }

        .vjs-control .vjs-button {
            width: 100%;
            height: 100%
        }

        .video-js .vjs-control.vjs-close-button {
            cursor: pointer;
            height: 3em;
            position: absolute;
            right: 0;
            top: .5em;
            z-index: 2
        }

        .video-js .vjs-modal-dialog {
            background: rgba(0, 0, 0, .8);
            background: linear-gradient(180deg, rgba(0, 0, 0, .8), transparent);
            overflow: auto
        }

        .video-js .vjs-modal-dialog>* {
            box-sizing: border-box
        }

        .vjs-modal-dialog .vjs-modal-dialog-content {
            font-size: 1.2em;
            line-height: 1.5;
            padding: 20px 24px;
            z-index: 1
        }

        .vjs-menu-button {
            cursor: pointer
        }

        .vjs-menu-button.vjs-disabled {
            cursor: default
        }

        .vjs-workinghover .vjs-menu-button.vjs-disabled:hover .vjs-menu {
            display: none
        }

        .vjs-menu .vjs-menu-content {
            display: block;
            padding: 0;
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
            overflow: auto
        }

        .vjs-menu .vjs-menu-content>* {
            box-sizing: border-box
        }

        .vjs-scrubbing .vjs-control.vjs-menu-button:hover .vjs-menu {
            display: none
        }

        .vjs-menu li {
            list-style: none;
            margin: 0;
            padding: .2em 0;
            line-height: 1.4em;
            font-size: 1.2em;
            text-align: center;
            text-transform: lowercase
        }

        .js-focus-visible .vjs-menu li.vjs-menu-item:hover,
        .vjs-menu li.vjs-menu-item:focus,
        .vjs-menu li.vjs-menu-item:hover {
            background-color: #73859f;
            background-color: rgba(115, 133, 159, .5)
        }

        .js-focus-visible .vjs-menu li.vjs-selected:hover,
        .vjs-menu li.vjs-selected,
        .vjs-menu li.vjs-selected:focus,
        .vjs-menu li.vjs-selected:hover {
            background-color: #fff;
            color: #2b333f
        }

        .js-focus-visible .vjs-menu :not(.vjs-selected):focus:not(.focus-visible),
        .video-js .vjs-menu :not(.vjs-selected):focus:not(:focus-visible) {
            background: 0 0
        }

        .vjs-menu li.vjs-menu-title {
            text-align: center;
            text-transform: uppercase;
            font-size: 1em;
            line-height: 2em;
            padding: 0;
            margin: 0 0 .3em;
            font-weight: 700;
            cursor: default
        }

        .vjs-menu-button-popup .vjs-menu {
            display: none;
            position: absolute;
            bottom: 0;
            width: 10em;
            left: -3em;
            height: 0;
            margin-bottom: 1.5em;
            border-top-color: rgba(43, 51, 63, .7)
        }

        .vjs-pip-window .vjs-menu-button-popup .vjs-menu {
            left: unset;
            right: 1em
        }

        .vjs-menu-button-popup .vjs-menu .vjs-menu-content {
            background-color: #2b333f;
            background-color: rgba(43, 51, 63, .7);
            position: absolute;
            width: 100%;
            bottom: 1.5em;
            max-height: 15em
        }

        .vjs-layout-tiny .vjs-menu-button-popup .vjs-menu .vjs-menu-content,
        .vjs-layout-x-small .vjs-menu-button-popup .vjs-menu .vjs-menu-content {
            max-height: 5em
        }

        .vjs-layout-small .vjs-menu-button-popup .vjs-menu .vjs-menu-content {
            max-height: 10em
        }

        .vjs-layout-medium .vjs-menu-button-popup .vjs-menu .vjs-menu-content {
            max-height: 14em
        }

        .vjs-layout-huge .vjs-menu-button-popup .vjs-menu .vjs-menu-content,
        .vjs-layout-large .vjs-menu-button-popup .vjs-menu .vjs-menu-content,
        .vjs-layout-x-large .vjs-menu-button-popup .vjs-menu .vjs-menu-content {
            max-height: 25em
        }

        .vjs-menu-button-popup .vjs-menu.vjs-lock-showing,
        .vjs-workinghover .vjs-menu-button-popup.vjs-hover .vjs-menu {
            display: block
        }

        .video-js .vjs-menu-button-inline {
            transition: all .4s;
            overflow: hidden
        }

        .video-js .vjs-menu-button-inline:before {
            width: 2.222222222em
        }

        .video-js .vjs-menu-button-inline.vjs-slider-active,
        .video-js .vjs-menu-button-inline:focus,
        .video-js .vjs-menu-button-inline:hover {
            width: 12em
        }

        .vjs-menu-button-inline .vjs-menu {
            opacity: 0;
            height: 100%;
            width: auto;
            position: absolute;
            left: 4em;
            top: 0;
            padding: 0;
            margin: 0;
            transition: all .4s
        }

        .vjs-menu-button-inline.vjs-slider-active .vjs-menu,
        .vjs-menu-button-inline:focus .vjs-menu,
        .vjs-menu-button-inline:hover .vjs-menu {
            display: block;
            opacity: 1
        }

        .vjs-menu-button-inline .vjs-menu-content {
            width: auto;
            height: 100%;
            margin: 0;
            overflow: hidden
        }

        .video-js .vjs-control-bar {
            display: none;
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 3em;
            background-color: #2b333f;
            background-color: rgba(43, 51, 63, .7)
        }

        .vjs-audio-only-mode .vjs-control-bar,
        .vjs-has-started .vjs-control-bar {
            display: flex;
            visibility: visible;
            opacity: 1;
            transition: visibility .1s, opacity .1s
        }

        .vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {
            visibility: visible;
            opacity: 0;
            pointer-events: none;
            transition: visibility 1s, opacity 1s
        }

        .vjs-controls-disabled .vjs-control-bar,
        .vjs-error .vjs-control-bar,
        .vjs-using-native-controls .vjs-control-bar {
            display: none !important
        }

        .vjs-audio-only-mode.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar,
        .vjs-audio.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {
            opacity: 1;
            visibility: visible;
            pointer-events: auto
        }

        .video-js .vjs-control {
            position: relative !important;
            text-align: center;
            margin: 0;
            padding: 0;
            height: 100%;
            width: 3em;
            flex: none
        }

        .video-js .vjs-control.vjs-visible-text {
            width: auto;
            padding-left: 1em;
            padding-right: 1em
        }

        .vjs-button>.vjs-icon-placeholder:before {
            font-size: 1.8em;
            line-height: 1.67
        }

        .vjs-button>.vjs-icon-placeholder {
            display: block
        }

        .video-js .vjs-control:focus,
        .video-js .vjs-control:focus:before,
        .video-js .vjs-control:hover:before {
            text-shadow: 0 0 1em #fff
        }

        .video-js :not(.vjs-visible-text)>.vjs-control-text {
            border: 0;
            clip: rect(0 0 0 0);
            height: 1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px
        }

        .video-js .vjs-custom-control-spacer {
            display: none
        }

        .video-js .vjs-progress-control {
            cursor: pointer;
            flex: auto;
            display: flex;
            align-items: center;
            min-width: 3em;
            touch-action: none
        }

        .video-js .vjs-progress-control.disabled {
            cursor: default
        }

        .vjs-live .vjs-progress-control {
            display: none
        }

        .vjs-liveui .vjs-progress-control {
            display: flex;
            align-items: center
        }

        .video-js .vjs-progress-holder {
            flex: auto;
            transition: all .2s;
            position: relative !important;
            height: .3em
        }

        .video-js .vjs-progress-control .vjs-progress-holder {
            margin: 0 15px;
            display: flex !important
        }

        .video-js .vjs-progress-control:hover .vjs-progress-holder {
            font-size: 1.6666666667em
        }

        .video-js .vjs-progress-control:hover .vjs-progress-holder.disabled .video-js .vjs-progress-control:hover .vjs-progress-holder-slice .vjs-progress-holder.disabled {
            font-size: 1em
        }

        .vjs-progress-holder-slice {
            float: left
        }

        .video-js .vjs-progress-holder .vjs-progress-holder-slice .vjs-load-progress,
        .video-js .vjs-progress-holder .vjs-progress-holder-slice .vjs-load-progress div,
        .video-js .vjs-progress-holder .vjs-progress-holder-slice .vjs-play-progress-circle,
        .video-js .vjs-progress-holder .vjs-progress-holder-slice .vjs-play-progress-slice {
            position: absolute;
            display: block;
            height: 100%;
            margin: 0;
            padding: 0;
            width: 0
        }

        .video-js .vjs-play-progress-circle {
            position: absolute;
            top: 0;
            z-index: 1
        }

        .video-js .vjs-play-progress-circle:before {
            position: relative;
            float: right;
            font-size: .9em;
            line-height: .35em;
            right: -.5em
        }

        .video-js .vjs-play-progress-slice {
            background-color: #fff;
            height: 100%
        }

        .video-js .vjs-load-progress {
            background: rgba(115, 133, 159, .75)
        }

        .video-js .vjs-time-tooltip {
            background-color: #fff;
            background-color: rgba(255, 255, 255, .8);
            border-radius: .3em;
            color: #000;
            float: right;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 1em;
            padding: 6px 8px 8px;
            pointer-events: none;
            position: absolute;
            top: -3.4em;
            visibility: hidden;
            z-index: 1;
            transform: translate(-50%)
        }

        .video-js .vjs-progress-holder:focus .vjs-time-tooltip {
            display: none
        }

        .video-js .vjs-progress-control:hover .vjs-progress-holder:focus .vjs-time-tooltip,
        .video-js .vjs-progress-control:hover .vjs-time-tooltip {
            display: block;
            font-size: .6em;
            visibility: visible
        }

        .video-js .vjs-progress-control.disabled:hover .vjs-time-tooltip {
            font-size: 1em
        }

        .video-js .vjs-progress-control .vjs-mouse-display {
            display: none;
            position: absolute;
            width: 1px;
            height: 100%;
            background-color: #000;
            z-index: 1
        }

        .video-js .vjs-progress-control:hover .vjs-mouse-display {
            display: block
        }

        .video-js.vjs-user-inactive .vjs-progress-control .vjs-mouse-display {
            visibility: hidden;
            opacity: 0;
            transition: visibility 1s, opacity 1s
        }

        .vjs-mouse-display .vjs-time-tooltip {
            color: #fff;
            background-color: #000;
            background-color: rgba(0, 0, 0, .8)
        }

        .video-js .vjs-slider {
            position: relative;
            cursor: pointer;
            padding: 0;
            margin: 0 .45em;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
            background-color: #73859f;
            background-color: rgba(115, 133, 159, .5)
        }

        .video-js .vjs-slider.disabled {
            cursor: default
        }

        .video-js .vjs-slider:focus {
            text-shadow: 0 0 1em #fff;
            box-shadow: 0 0 1em #fff
        }

        .video-js .vjs-mute-control {
            cursor: pointer;
            flex: none
        }

        .video-js .vjs-volume-control {
            cursor: pointer;
            margin-right: 1em;
            display: flex
        }

        .video-js .vjs-volume-control.vjs-volume-horizontal {
            width: 5em
        }

        .video-js .vjs-volume-panel .vjs-volume-control {
            visibility: visible;
            opacity: 0;
            width: 1px;
            height: 1px;
            margin-left: -1px
        }

        .video-js .vjs-volume-panel {
            transition: width 1s
        }

        .video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active,
        .video-js .vjs-volume-panel .vjs-volume-control:active,
        .video-js .vjs-volume-panel.vjs-hover .vjs-mute-control~.vjs-volume-control,
        .video-js .vjs-volume-panel.vjs-hover .vjs-volume-control,
        .video-js .vjs-volume-panel:active .vjs-volume-control,
        .video-js .vjs-volume-panel:focus .vjs-volume-control {
            visibility: visible;
            opacity: 1;
            position: relative;
            transition: visibility .1s, opacity .1s, height .1s, width .1s, left 0s, top 0s
        }

        .video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-horizontal,
        .video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-horizontal,
        .video-js .vjs-volume-panel.vjs-hover .vjs-mute-control~.vjs-volume-control.vjs-volume-horizontal,
        .video-js .vjs-volume-panel.vjs-hover .vjs-volume-control.vjs-volume-horizontal,
        .video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-horizontal,
        .video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-horizontal {
            width: 5em;
            height: 3em;
            margin-right: 0
        }

        .video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-vertical,
        .video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-vertical,
        .video-js .vjs-volume-panel.vjs-hover .vjs-mute-control~.vjs-volume-control.vjs-volume-vertical,
        .video-js .vjs-volume-panel.vjs-hover .vjs-volume-control.vjs-volume-vertical,
        .video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-vertical,
        .video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-vertical {
            left: -3.5em;
            transition: left 0s
        }

        .video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover,
        .video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,
        .video-js .vjs-volume-panel.vjs-volume-panel-horizontal:active {
            width: 10em;
            transition: width .1s
        }

        .video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-mute-toggle-only {
            width: 4em
        }

        .video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical {
            height: 8em;
            width: 3em;
            left: -3e3em;
            transition: visibility 1s, opacity 1s, height 1s 1s, width 1s 1s, left 1s 1s, top 1s 1s
        }

        .video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal {
            transition: visibility 1s, opacity 1s, height 1s 1s, width 1s, left 1s 1s, top 1s 1s
        }

        .video-js .vjs-volume-panel {
            display: flex
        }

        .video-js .vjs-volume-bar {
            margin: 1.35em .45em
        }

        .vjs-volume-bar.vjs-slider-horizontal {
            width: 5em;
            height: .3em
        }

        .vjs-volume-bar.vjs-slider-vertical {
            width: .3em;
            height: 5em;
            margin: 1.35em auto
        }

        .video-js .vjs-volume-level {
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: #fff
        }

        .video-js .vjs-volume-level:before {
            position: absolute;
            font-size: .9em;
            z-index: 1
        }

        .vjs-slider-vertical .vjs-volume-level {
            width: .3em
        }

        .vjs-slider-vertical .vjs-volume-level:before {
            top: -.5em;
            left: -.3em;
            z-index: 1
        }

        .vjs-slider-horizontal .vjs-volume-level {
            height: .3em
        }

        .vjs-slider-horizontal .vjs-volume-level:before {
            right: -.5em
        }

        .video-js .vjs-volume-panel.vjs-volume-panel-vertical {
            width: 4em
        }

        .video-js .vjs-volume-vertical {
            width: 3em;
            height: 8em;
            bottom: 8em;
            background-color: #2b333f;
            background-color: rgba(43, 51, 63, .7)
        }

        .video-js .vjs-volume-horizontal .vjs-menu {
            left: -2em
        }

        .video-js .vjs-volume-tooltip {
            background-color: #fff;
            background-color: rgba(255, 255, 255, .8);
            border-radius: .3em;
            color: #000;
            float: right;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 1em;
            padding: 6px 8px 8px;
            pointer-events: none;
            position: absolute;
            top: -3.4em;
            visibility: hidden;
            z-index: 1
        }

        .video-js .vjs-volume-control:hover .vjs-progress-holder:focus .vjs-volume-tooltip,
        .video-js .vjs-volume-control:hover .vjs-volume-tooltip {
            display: block;
            font-size: 1em;
            visibility: visible
        }

        .video-js .vjs-volume-vertical:hover .vjs-progress-holder:focus .vjs-volume-tooltip,
        .video-js .vjs-volume-vertical:hover .vjs-volume-tooltip {
            left: 1em;
            top: -12px
        }

        .video-js .vjs-volume-control.disabled:hover .vjs-volume-tooltip {
            font-size: 1em
        }

        .video-js .vjs-volume-control .vjs-mouse-display {
            display: none;
            position: absolute;
            width: 100%;
            height: 1px;
            background-color: #000;
            z-index: 1
        }

        .video-js .vjs-volume-horizontal .vjs-mouse-display {
            width: 1px;
            height: 100%
        }

        .video-js .vjs-volume-control:hover .vjs-mouse-display {
            display: block
        }

        .video-js.vjs-user-inactive .vjs-volume-control .vjs-mouse-display {
            visibility: hidden;
            opacity: 0;
            transition: visibility 1s, opacity 1s
        }

        .vjs-mouse-display .vjs-volume-tooltip {
            color: #fff;
            background-color: #000;
            background-color: rgba(0, 0, 0, .8)
        }

        .vjs-poster {
            display: inline-block;
            vertical-align: middle;
            cursor: pointer;
            margin: 0;
            padding: 0;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            height: 100%
        }

        .vjs-has-started .vjs-poster,
        .vjs-using-native-controls .vjs-poster {
            display: none
        }

        .vjs-audio.vjs-has-started .vjs-poster,
        .vjs-has-started.vjs-audio-poster-mode .vjs-poster,
        .vjs-pip-container.vjs-has-started .vjs-poster {
            display: block
        }

        .vjs-poster img {
            width: 100%;
            height: 100%;
            -o-object-fit: contain;
            object-fit: contain
        }

        .video-js .vjs-live-control {
            display: flex;
            align-items: flex-start;
            flex: auto;
            font-size: 1em;
            line-height: 3em
        }

        .video-js.vjs-liveui .vjs-live-control,
        .video-js:not(.vjs-live) .vjs-live-control {
            display: none
        }

        .video-js .vjs-seek-to-live-control {
            align-items: center;
            cursor: pointer;
            flex: none;
            display: inline-flex;
            height: 100%;
            padding-left: .5em;
            padding-right: .5em;
            font-size: 1em;
            line-height: 3em;
            width: auto;
            min-width: 4em
        }

        .video-js.vjs-live:not(.vjs-liveui) .vjs-seek-to-live-control,
        .video-js:not(.vjs-live) .vjs-seek-to-live-control {
            display: none
        }

        .vjs-seek-to-live-control.vjs-control.vjs-at-live-edge {
            cursor: auto
        }

        .vjs-seek-to-live-control .vjs-icon-placeholder {
            margin-right: .5em;
            color: #888
        }

        .vjs-seek-to-live-control.vjs-control.vjs-at-live-edge .vjs-icon-placeholder {
            color: red
        }

        .video-js .vjs-time-control {
            flex: none;
            font-size: 1em;
            line-height: 3em;
            min-width: 2em;
            width: auto;
            padding-left: 1em;
            padding-right: 1em
        }

        .video-js .vjs-current-time,
        .video-js .vjs-duration,
        .vjs-live .vjs-time-control,
        .vjs-live .vjs-time-divider {
            display: none
        }

        .vjs-time-divider {
            display: none;
            line-height: 3em
        }

        .video-js .vjs-play-control {
            cursor: pointer
        }

        .video-js .vjs-play-control .vjs-icon-placeholder {
            flex: none
        }

        .vjs-text-track-display {
            position: absolute;
            bottom: 3em;
            left: 0;
            right: 0;
            top: 0;
            pointer-events: none
        }

        .video-js.vjs-controls-disabled .vjs-text-track-display,
        .video-js.vjs-user-inactive.vjs-playing .vjs-text-track-display {
            bottom: 1em
        }

        .video-js .vjs-text-track {
            font-size: 1.4em;
            text-align: center;
            margin-bottom: .1em
        }

        .vjs-subtitles {
            color: #fff
        }

        .vjs-captions {
            color: #fc6
        }

        .vjs-tt-cue {
            display: block
        }

        video::-webkit-media-text-track-display {
            transform: translateY(-3em)
        }

        .video-js.vjs-controls-disabled video::-webkit-media-text-track-display,
        .video-js.vjs-user-inactive.vjs-playing video::-webkit-media-text-track-display {
            transform: translateY(-1.5em)
        }

        .video-js .vjs-picture-in-picture-control {
            cursor: pointer;
            flex: none
        }

        .video-js.vjs-audio-only-mode .vjs-picture-in-picture-control,
        .vjs-pip-window .vjs-picture-in-picture-control {
            display: none
        }

        .video-js .vjs-fullscreen-control {
            cursor: pointer;
            flex: none
        }

        .video-js.vjs-audio-only-mode .vjs-fullscreen-control,
        .vjs-pip-window .vjs-fullscreen-control {
            display: none
        }

        .vjs-playback-rate .vjs-playback-rate-value,
        .vjs-playback-rate>.vjs-menu-button {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%
        }

        .vjs-playback-rate .vjs-playback-rate-value {
            pointer-events: none;
            font-size: 1.5em;
            line-height: 2;
            text-align: center
        }

        .vjs-playback-rate .vjs-menu {
            width: 4em;
            left: 0
        }

        .vjs-error .vjs-error-display .vjs-modal-dialog-content {
            font-size: 1.4em;
            text-align: center
        }

        .vjs-error .vjs-error-display:before {
            color: #fff;
            content: "X";
            font-family: Arial, Helvetica, sans-serif;
            font-size: 4em;
            left: 0;
            line-height: 1;
            margin-top: -.5em;
            position: absolute;
            text-shadow: .05em .05em .1em #000;
            text-align: center;
            top: 50%;
            vertical-align: middle;
            width: 100%
        }

        .vjs-loading-spinner {
            display: none;
            position: absolute;
            top: 50%;
            left: 50%;
            margin: -25px 0 0 -25px;
            opacity: .85;
            text-align: left;
            border: 6px solid rgba(43, 51, 63, .7);
            box-sizing: border-box;
            background-clip: padding-box;
            width: 50px;
            height: 50px;
            border-radius: 25px;
            visibility: hidden
        }

        .vjs-seeking .vjs-loading-spinner,
        .vjs-waiting .vjs-loading-spinner {
            display: block;
            animation: vjs-spinner-show 0s linear .3s forwards
        }

        .vjs-loading-spinner:after,
        .vjs-loading-spinner:before {
            content: "";
            position: absolute;
            margin: -6px;
            box-sizing: inherit;
            width: inherit;
            height: inherit;
            border-radius: inherit;
            opacity: 1;
            border: inherit;
            border-color: transparent;
            border-top-color: #fff
        }

        .vjs-seeking .vjs-loading-spinner:after,
        .vjs-seeking .vjs-loading-spinner:before,
        .vjs-waiting .vjs-loading-spinner:after,
        .vjs-waiting .vjs-loading-spinner:before {
            animation: vjs-spinner-spin 1.1s cubic-bezier(.6, .2, 0, .8)infinite, vjs-spinner-fade 1.1s linear infinite
        }

        .vjs-seeking .vjs-loading-spinner:before,
        .vjs-waiting .vjs-loading-spinner:before {
            border-top-color: #fff
        }

        .vjs-seeking .vjs-loading-spinner:after,
        .vjs-waiting .vjs-loading-spinner:after {
            border-top-color: #fff;
            animation-delay: .44s
        }

        @keyframes vjs-spinner-show {
            to {
                visibility: visible
            }
        }

        @keyframes vjs-spinner-spin {
            100% {
                transform: rotate(360deg)
            }
        }

        @keyframes vjs-spinner-fade {
            0% {
                border-top-color: #73859f
            }

            20% {
                border-top-color: #73859f
            }

            35% {
                border-top-color: #fff
            }

            60% {
                border-top-color: #73859f
            }

            100% {
                border-top-color: #73859f
            }
        }

        .video-js.vjs-audio-only-mode .vjs-captions-button {
            display: none
        }

        .vjs-chapters-button .vjs-menu ul {
            width: 24em
        }

        .video-js.vjs-audio-only-mode .vjs-descriptions-button {
            display: none
        }

        .video-js .vjs-subs-caps-button+.vjs-menu .vjs-captions-menu-item .vjs-menu-item-text .vjs-icon-placeholder {
            vertical-align: middle;
            display: inline-block;
            margin-bottom: -.1em
        }

        .video-js .vjs-subs-caps-button+.vjs-menu .vjs-captions-menu-item .vjs-menu-item-text .vjs-icon-placeholder:before {
            font-family: VideoJS !important;
            content: "\f10c";
            font-size: 1.5em;
            line-height: inherit
        }

        .video-js.vjs-audio-only-mode .vjs-subs-caps-button {
            display: none
        }

        .video-js .vjs-audio-button+.vjs-menu .vjs-main-desc-menu-item .vjs-menu-item-text .vjs-icon-placeholder {
            vertical-align: middle;
            display: inline-block;
            margin-bottom: -.1em
        }

        .video-js .vjs-audio-button+.vjs-menu .vjs-main-desc-menu-item .vjs-menu-item-text .vjs-icon-placeholder:before {
            font-family: VideoJS !important;
            content: " \f12e";
            font-size: 1.5em;
            line-height: inherit
        }

        .video-js.vjs-layout-small .vjs-current-time,
        .video-js.vjs-layout-small .vjs-duration,
        .video-js.vjs-layout-small .vjs-playback-rate,
        .video-js.vjs-layout-small .vjs-remaining-time,
        .video-js.vjs-layout-small .vjs-time-divider,
        .video-js.vjs-layout-small .vjs-volume-control,
        .video-js.vjs-layout-tiny .vjs-current-time,
        .video-js.vjs-layout-tiny .vjs-duration,
        .video-js.vjs-layout-tiny .vjs-playback-rate,
        .video-js.vjs-layout-tiny .vjs-remaining-time,
        .video-js.vjs-layout-tiny .vjs-time-divider,
        .video-js.vjs-layout-tiny .vjs-volume-control,
        .video-js.vjs-layout-x-small .vjs-current-time,
        .video-js.vjs-layout-x-small .vjs-duration,
        .video-js.vjs-layout-x-small .vjs-playback-rate,
        .video-js.vjs-layout-x-small .vjs-remaining-time,
        .video-js.vjs-layout-x-small .vjs-time-divider,
        .video-js.vjs-layout-x-small .vjs-volume-control {
            display: none
        }

        .video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover,
        .video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,
        .video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal:active,
        .video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal:hover,
        .video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover,
        .video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,
        .video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal:active,
        .video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal:hover,
        .video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover,
        .video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,
        .video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal:active,
        .video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal:hover {
            width: auto;
            width: initial
        }

        .video-js.vjs-layout-tiny .vjs-progress-control,
        .video-js.vjs-layout-x-small .vjs-progress-control {
            display: none
        }

        .video-js.vjs-layout-x-small .vjs-custom-control-spacer {
            flex: auto;
            display: block
        }

        .vjs-modal-dialog.vjs-text-track-settings {
            background-color: #2b333f;
            background-color: rgba(43, 51, 63, .75);
            color: #fff;
            height: 70%
        }

        .vjs-text-track-settings .vjs-modal-dialog-content {
            display: table
        }

        .vjs-text-track-settings .vjs-track-settings-colors,
        .vjs-text-track-settings .vjs-track-settings-controls,
        .vjs-text-track-settings .vjs-track-settings-font {
            display: table-cell
        }

        .vjs-text-track-settings .vjs-track-settings-controls {
            text-align: right;
            vertical-align: bottom
        }

        @supports(display:grid) {
            .vjs-text-track-settings .vjs-modal-dialog-content {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr;
                padding: 20px 24px 0
            }

            .vjs-track-settings-controls .vjs-default-button {
                margin-bottom: 20px
            }

            .vjs-text-track-settings .vjs-track-settings-controls {
                grid-column: 1/-1
            }

            .vjs-layout-small .vjs-text-track-settings .vjs-modal-dialog-content,
            .vjs-layout-tiny .vjs-text-track-settings .vjs-modal-dialog-content,
            .vjs-layout-x-small .vjs-text-track-settings .vjs-modal-dialog-content {
                grid-template-columns: 1fr
            }
        }

        .vjs-track-setting>select {
            margin-right: 1em;
            margin-bottom: .5em
        }

        .vjs-text-track-settings fieldset {
            margin: 10px;
            border: none
        }

        .vjs-text-track-settings fieldset span {
            display: inline-block;
            padding: 0 6px 8px
        }

        .vjs-text-track-settings fieldset span>select {
            max-width: 7.3em
        }

        .vjs-text-track-settings legend {
            color: #fff;
            font-weight: 700;
            font-size: 14px
        }

        .vjs-text-track-settings .vjs-label {
            clip: rect(1px 1px 1px 1px);
            clip: rect(1px, 1px, 1px, 1px);
            margin: 0 5px 5px 0;
            border: 0;
            height: 1px;
            width: 1px;
            overflow: hidden
        }

        .vjs-track-settings-controls button:active,
        .vjs-track-settings-controls button:focus {
            outline-style: solid;
            outline-width: medium;
            background-image: linear-gradient(0deg, #fff 88%, #73859f 100%)
        }

        .vjs-track-settings-controls button:hover {
            color: rgba(43, 51, 63, .75)
        }

        .vjs-track-settings-controls button {
            background-color: #fff;
            background-image: linear-gradient(-180deg, #fff 88%, #73859f 100%);
            color: #2b333f;
            cursor: pointer;
            border-radius: 2px
        }

        .vjs-track-settings-controls .vjs-default-button {
            margin-right: 1em
        }

        .vjs-title-bar {
            background: rgba(0, 0, 0, .9);
            background: linear-gradient(180deg, rgba(0, 0, 0, .9) 0, rgba(0, 0, 0, .7) 60%, transparent 100%);
            font-size: 1.2em;
            line-height: 1.5;
            transition: opacity .1s;
            padding: .666em 1.333em 4em;
            pointer-events: none;
            position: absolute;
            top: 0;
            width: 100%
        }

        .vjs-title-bar-description,
        .vjs-title-bar-title {
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap
        }

        .vjs-title-bar-title {
            font-weight: 700;
            margin-bottom: .333em
        }

        .vjs-playing.vjs-user-inactive .vjs-title-bar {
            opacity: 0;
            transition: opacity 1s
        }

        .video-js .vjs-skip-forward-5 {
            cursor: pointer
        }

        .video-js .vjs-skip-forward-10 {
            cursor: pointer
        }

        .video-js .vjs-skip-forward-30 {
            cursor: pointer
        }

        .video-js .vjs-skip-backward-5 {
            cursor: pointer
        }

        .video-js .vjs-skip-backward-10 {
            cursor: pointer
        }

        .video-js .vjs-skip-backward-30 {
            cursor: pointer
        }

        @media print {
            .video-js>:not(.vjs-tech):not(.vjs-poster) {
                visibility: hidden
            }
        }

        .vjs-resize-manager {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
            z-index: -1000
        }

        .js-focus-visible .video-js :focus:not(.focus-visible) {
            outline: 0
        }

        .video-js :focus:not(:focus-visible) {
            outline: 0
        }

        .vjs-ad-playing.vjs-ad-playing .vjs-progress-control {
            pointer-events: none
        }

        .vjs-ad-playing.vjs-ad-playing .vjs-play-progress {
            background-color: #ffe400
        }

        .vjs-ad-loading .vjs-loading-spinner {
            display: block;
            visibility: visible
        }

        .vjs-ad-playing .vjs-captions-button {
            display: none
        }

        .vjs-ad-playing .vjs-audio-button {
            display: none
        }

        .vjs-ad-loading .vjs-loading-spinner:after,
        .vjs-ad-loading .vjs-loading-spinner:before {
            -webkit-animation: vjs-spinner-spin 1.1s cubic-bezier(.6, .2, 0, .8)infinite, vjs-spinner-fade 1.1s linear infinite;
            animation: vjs-spinner-spin 1.1s cubic-bezier(.6, .2, 0, .8)infinite, vjs-spinner-fade 1.1s linear infinite
        }

        .vjs-ad-loading .vjs-loading-spinner:before {
            border-top-color: #fff
        }

        .vjs-ad-loading .vjs-loading-spinner:after {
            border-top-color: #fff;
            -webkit-animation-delay: .44s;
            animation-delay: .44s
        }

        .vjs-ad-content-resuming .vjs-big-play-button,
        .vjs-ad-content-resuming .vjs-poster,
        .vjs-ad-loading .vjs-big-play-button,
        .vjs-ad-loading .vjs-poster {
            display: none
        }

        .video-container {
            overflow: hidden !important
        }

        .player-container {
            background: #1a1a1a !important;
            overflow: auto !important;
            width: 900px !important;
            margin: 0 0 20px !important
        }

        .ez-outstream-container {
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            flex-wrap: wrap
        }

        .ez-outstream-container.ez-stuck {
            position: fixed;
            bottom: 100px;
            z-index: 999;
            right: 20px;
            height: auto;
            transform: translateY(50%)
        }

        .vjs-big-play-button #ez-video-outstream {
            display: none !important
        }

        #ez-video-outstream-wrap .ez-outstream-ez-stuck-close {
            position: absolute;
            text-shadow: 0 0 4px #000 !important;
            opacity: .6;
            z-index: 9999999;
            color: #fff;
            left: 4px;
            top: 4px;
            transition: .3s;
            cursor: pointer;
            line-height: 1
        }

        #ez-video-outstream-wrap .ez-outstream-ez-stuck-close:hover {
            opacity: 1
        }

        .ez-outstream-container.ez-stuck.raise {
            transform: translateY(100%);
            animation: fade-in-up .25s ease forwards
        }

        .ez-outstream-container.ez-stuck.lower {
            transform: translateY(100%);
            animation: fade-out-down .5s ease forwards
        }

        .ez-outstream-container.ez-stuck.raise-horizontal {
            transform: translateX(100%);
            animation: fade-in-horizontal .25s ease forwards
        }

        .ez-outstream-container.ez-stuck.lower-horizontal {
            transform: translateX(100%);
            animation: fade-out-horizontal .5s ease forwards
        }

        @keyframes fade-in-up {
            0% {
                opacity: 0;
                transform: translateY(50%);
                visibility: hidden
            }

            100% {
                opacity: 1;
                transform: translateY(0%);
                visibility: visible
            }
        }

        @keyframes fade-out-down {
            0% {
                opacity: 1;
                transform: translateY(0%);
                visibility: visible
            }

            100% {
                opacity: 0;
                transform: translateY(50%);
                visibility: hidden
            }
        }

        @keyframes fade-in-horizontal {
            0% {
                opacity: 0;
                transform: translateX(50);
                visibility: hidden
            }

            100% {
                opacity: 1;
                transform: translateX(0);
                visibility: visible
            }
        }

        @keyframes fade-out-horizontal {
            0% {
                opacity: 1;
                transform: translateX(0);
                visibility: visible
            }

            100% {
                opacity: 0;
                transform: translateX(50);
                visibility: hidden
            }
        }

        @media screen and (min-width:100px) {
            .ez-outstream-container.ez-stuck {
                width: 75%
            }
        }

        @media screen and (min-width:768px) {
            .ez-outstream-container.ez-stuck {
                width: 55%
            }
        }

        @media screen and (min-width:1024px) {
            .ez-outstream-container.ez-stuck {
                width: 30%;
                margin-bottom: 20px
            }
        }

        .ez-video-ad-container {
            top: 0;
            position: absolute;
            display: none;
            width: 100%;
            height: 100%
        }

        .ez-vad-controls {
            bottom: 0;
            height: 1.4em;
            position: absolute;
            overflow: hidden;
            display: none;
            opacity: 1;
            background-color: #07141eb2;
            background: -moz-linear-gradient(bottom, rgba(7, 20, 30, .7) 0%, transparent 100%);
            background: -webkit-gradient(linear, left bottom, left top, color-stop(0%, rgba(7, 20, 30, .7)), color-stop(100%, transparent));
            background: -webkit-linear-gradient(bottom, rgba(7, 20, 30, .7) 0%, transparent 100%);
            background: -o-linear-gradient(bottom, rgba(7, 20, 30, .7) 0%, transparent 100%);
            background: -ms-linear-gradient(bottom, rgba(7, 20, 30, .7) 0%, transparent 100%);
            background: linear-gradient(to top, rgba(7, 20, 30, .7) 0%, transparent 100%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0007141E', endColorstr='#07141E', GradientType=0)
        }

        .ez-vad-controls.ez-vad-controls-showing {
            height: 3.7em
        }

        .ez-vad-countdown {
            height: 1em;
            color: #fff;
            text-shadow: 0 0 .2em #000;
            cursor: default
        }

        .ez-vad-seek-bar {
            top: 1.2em;
            height: .3em;
            position: absolute;
            background: #fff6
        }

        .ez-vad-progress {
            width: 0;
            height: .3em;
            background-color: #ecc546
        }

        .ez-vad-play-pause,
        .ez-vad-mute,
        .ez-vad-slider,
        .ez-vad-fullscreen {
            width: 2.33em;
            height: 1.33em;
            top: .733em;
            left: 0;
            position: absolute;
            color: #ccc;
            font-size: 1.5em;
            line-height: 2;
            text-align: center;
            font-family: VideoJS;
            cursor: pointer
        }

        .ez-vad-mute {
            left: auto;
            right: 5.667em
        }

        .ez-vad-slider {
            left: auto;
            right: 2.33em;
            width: 3.33em;
            height: .667em;
            top: 1.33em;
            background-color: #555
        }

        .ez-vad-slider-level {
            width: 100%;
            height: .667em;
            background-color: #ecc546
        }

        .ez-vad-fullscreen {
            left: auto;
            right: 0
        }

        .ez-vad-playing:before {
            content: "\f103"
        }

        .ez-vad-paused:before {
            content: "\f101"
        }

        .ez-vad-playing:hover:before,
        .ez-vad-paused:hover:before {
            text-shadow: 0 0 1em #fff
        }

        .ez-vad-non-muted:before {
            content: "\f107"
        }

        .ez-vad-muted:before {
            content: "\f104"
        }

        .ez-vad-non-muted:hover:before,
        .ez-vad-muted:hover:before {
            text-shadow: 0 0 1em #fff
        }

        .ez-vad-non-fullscreened:before {
            content: "\f108"
        }

        .ez-vad-fullscreened:before {
            content: "\f109"
        }

        .ez-vad-non-fullscreened:hover:before,
        .ez-vad-fullscreened:hover:before {
            text-shadow: 0 0 1em #fff
        }

        .ez-video-wrap video {
            visibility: visible !important
        }

        .ez-playlist-float-only {
            display: none !important
        }

        .video-js .vjs-share__middle {
            padding: 0 !important;
            width: 80%
        }

        .video-js {
            float: left !important;
            font-size: 10px;
            color: #fff;
            position: relative !important;
            width: 100%;
            height: auto;
            margin: 0
        }

        .ez-stuck.ez-outstream-container {
            display: flex !important
        }

        .cnx-button-closebutton {
            visibility: visible !important;
            opacity: 1 !important
        }
    </style>
    <script>var ezoTemplate = 'pub_site'; var ezouid = '1'; var ezoFormfactor = '1';</script>
    <script
        data-ezscrex=false>var soc_app_id = '0'; var did = 121822; var ezdomain = 'jlptsensei.com'; var ezoicSearchable = 1;</script>
    <script
        data-cfasync=false>__ez.queue.addFile('/tardisrocinante/lazy_load.js', '/tardisrocinante/lazy_load.js?gcb=2&cb=6', false, [], true, false, true, false);</script>
    <link rel=preload as=image
        href="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%221%22%20height=%221%22%3E%3C/svg%3E">
    <script>__ez.queue.addFile('/beardeddragon/axolotl.js', '/beardeddragon/axolotl.js?gcb=2&cb=25', true, [], true, false, true, false);</script>
    <script>if (typeof __ezOutstream == "undefined" || typeof __ezOutstream.breaks == "undefined") { window.__ezOutstream = { "prebidBidders": [{ "bidder": "adtelligent", "params": { "aid": "774249" }, "ssid": "11316" }, { "bidder": "ix", "params": { "siteId": "682022", "size": [400, 300], "video": {} }, "ssid": "10082" }, { "bidder": "rubicon", "params": { "accountId": 21150, "bidonmultiformat": true, "siteId": 421616, "zoneId": 2526956 }, "ssid": "10063" }], "apsSlot": { "slotID": "Outstream2", "divID": "", "slotName": "", "mediaType": "video", "sizes": [[640, 480]] }, "breaks": [], "AdIndex": 1, "UnfilledCnt": 0, "AllowPreviousBidToSetBidFloor": false, "bidCacheThreshold": -1 }; }</script>
    <script data-ezscrex=false data-pagespeed-no-defer
        data-cfasync=false>function create_ezolpl() {
                var d = new Date(); d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000); var expires = "expires=" + d.toUTCString(); __ez.ck.setByCat("ezux_lpl_121822", new Date().getTime() +
                    "|" +
                    _ezaq.page_view_id +
                    "|" +
                    _ezaq.is_return_visitor +
                    "; " +
                    expires, "understand_audiences", false);
            }
            function attach_ezolpl() {
                if (document.readyState === "complete") { create_ezolpl(); return; }
                window.addEventListener("load", create_ezolpl);
            }
            __ez.queue.addFunc("attach_ezolpl", "attach_ezolpl", null, false, ['/detroitchicago/boise.js'], true, false, false, false);</script>
</head>

<body class="post-template-default single single-post postid-16073 single-format-standard cookies-not-set" itemscope
    itemtype=http://schema.org/WebPage>
    <div id=container>
        <header id=top class=header role=banner itemscope itemtype=http://schema.org/WPHeader>
            <nav id=bnav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" role=navigation itemscope
                itemtype=http://schema.org/SiteNavigationElement>
                <div class=container><a href=https://jlptsensei.com/ class=navbar-brand rel=home itemprop=url><img
                            id=nav-logo
                            src=https://jlptsensei.com/wp-content/themes/jlpt_sensei_rename/library/images/logo/jlpt-sensei-logo-rectangle-black-text.png
                            alt="JLPT Sensei" ezimgfmt="rs rscb1 src ng ngcb1"></a> <button class=navbar-toggler
                        type=button data-toggle=collapse data-target=#navbarColor01 aria-controls=navbarColor01
                        aria-expanded=false aria-label="Toggle navigation"> <span
                            class=navbar-toggler-icon></span></button>
                    <div class="collapse navbar-collapse" id=navbarColor01>
                        <ul id=menu-main-menu class="main-nav navbar-nav mr-auto">
                            <li id=menu-item-2137
                                class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-2137 nav-item dropdown">
                                <a href=# class="nav-link dropdown-toggle" data-toggle=dropdown
                                    id=navbar-dropdown-menu-link-2137 aria-haspopup=true aria-expanded=false>N5</a>
                                <div class="sub-menu dropdown-menu" id=navbar-dropdown-menu-link-2137><a
                                        href=https://jlptsensei.com/how-to-pass-jlpt-n5-study-guide/ class=dropdown-item
                                        id=menu-item-2150>How to Pass JLPT N5 – Study Guide</a><a
                                        href=https://jlptsensei.com/jlpt-n5-grammar-list/ class=dropdown-item
                                        id=menu-item-2151>JLPT N5 Grammar List</a><a
                                        href=https://jlptsensei.com/jlpt-n5-kanji-list/ class=dropdown-item
                                        id=menu-item-5418>JLPT N5 Kanji List</a><a
                                        href=https://jlptsensei.com/jlpt-n5-vocabulary-list/ class=dropdown-item
                                        id=menu-item-5863>JLPT N5 Vocabulary List</a><a
                                        href=https://jlptsensei.com/downloads/jlpt-n5-practice-test/ class=dropdown-item
                                        id=menu-item-2156>JLPT N5 Practice Test – Free Download</a></div>
                            <li id=menu-item-2138
                                class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-2138 nav-item dropdown">
                                <a href=# class="nav-link dropdown-toggle" data-toggle=dropdown
                                    id=navbar-dropdown-menu-link-2138 aria-haspopup=true aria-expanded=false>N4</a>
                                <div class="sub-menu dropdown-menu" id=navbar-dropdown-menu-link-2138><a
                                        href=https://jlptsensei.com/how-to-pass-jlpt-n4-study-guide/ class=dropdown-item
                                        id=menu-item-2148>How to Pass JLPT N4 – Study Guide</a><a
                                        href=https://jlptsensei.com/jlpt-n4-grammar-list/ class=dropdown-item
                                        id=menu-item-2149>JLPT N4 Grammar List</a><a
                                        href=https://jlptsensei.com/jlpt-n4-kanji-list/ class=dropdown-item
                                        id=menu-item-5862>JLPT N4 Kanji List</a><a
                                        href=https://jlptsensei.com/jlpt-n4-vocabulary-list/ class=dropdown-item
                                        id=menu-item-6643>JLPT N4 Vocabulary List</a><a
                                        href=https://jlptsensei.com/downloads/jlpt-n4-practice-test/ class=dropdown-item
                                        id=menu-item-2155>JLPT N4 Practice Test – Free Download</a></div>
                            <li id=menu-item-2135
                                class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-2135 nav-item dropdown">
                                <a href=# class="nav-link dropdown-toggle" data-toggle=dropdown
                                    id=navbar-dropdown-menu-link-2135 aria-haspopup=true aria-expanded=false>N3</a>
                                <div class="sub-menu dropdown-menu" id=navbar-dropdown-menu-link-2135><a
                                        href=https://jlptsensei.com/how-to-pass-jlpt-n3-study-guide/ class=dropdown-item
                                        id=menu-item-2146>How to Pass JLPT N3 – Study Guide</a><a
                                        href=https://jlptsensei.com/jlpt-n3-grammar-list/ class=dropdown-item
                                        id=menu-item-2147>JLPT N3 Grammar List</a><a
                                        href=https://jlptsensei.com/jlpt-n3-kanji-list/ class=dropdown-item
                                        id=menu-item-7588>JLPT N3 Kanji List</a><a
                                        href=https://jlptsensei.com/jlpt-n3-vocabulary-list/ class=dropdown-item
                                        id=menu-item-7589>JLPT N3 Vocabulary List</a><a
                                        href=https://jlptsensei.com/downloads/jlpt-n3-practice-test/ class=dropdown-item
                                        id=menu-item-2154>JLPT N3 Practice Test – Free Download</a></div>
                            <li id=menu-item-2136
                                class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-2136 nav-item dropdown">
                                <a href=# class="nav-link dropdown-toggle" data-toggle=dropdown
                                    id=navbar-dropdown-menu-link-2136 aria-haspopup=true aria-expanded=false>N2</a>
                                <div class="sub-menu dropdown-menu" id=navbar-dropdown-menu-link-2136><a
                                        href=https://jlptsensei.com/how-to-pass-jlpt-n2-study-guide/ class=dropdown-item
                                        id=menu-item-2144>How to Pass JLPT N2 – Study Guide</a><a
                                        href=https://jlptsensei.com/jlpt-n2-grammar-list/ class=dropdown-item
                                        id=menu-item-2145>JLPT N2 Grammar List</a><a
                                        href=https://jlptsensei.com/jlpt-n2-kanji-list/ class=dropdown-item
                                        id=menu-item-30968>JLPT N2 Kanji List</a><a
                                        href=https://jlptsensei.com/jlpt-n2-vocabulary-list/ class=dropdown-item
                                        id=menu-item-11711>JLPT N2 Vocabulary List</a><a
                                        href=https://jlptsensei.com/downloads/jlpt-n2-practice-test/ class=dropdown-item
                                        id=menu-item-2153>JLPT N2 Practice Test – Free Download</a></div>
                            <li id=menu-item-2139
                                class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-2139 nav-item dropdown">
                                <a href=# class="nav-link dropdown-toggle" data-toggle=dropdown
                                    id=navbar-dropdown-menu-link-2139 aria-haspopup=true aria-expanded=false>N1</a>
                                <div class="sub-menu dropdown-menu" id=navbar-dropdown-menu-link-2139><a
                                        href=https://jlptsensei.com/how-to-pass-jlpt-n1-study-guide/ class=dropdown-item
                                        id=menu-item-2142>How to Pass JLPT N1 – Study Guide</a><a
                                        href=https://jlptsensei.com/jlpt-n1-grammar-list/ class=dropdown-item
                                        id=menu-item-2143>JLPT N1 Grammar List</a><a
                                        href=https://jlptsensei.com/downloads/jlpt-n1-practice-test/ class=dropdown-item
                                        id=menu-item-2152>JLPT N1 Practice Test – Free Download</a></div>
                            <li id=menu-item-2141
                                class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-2141 nav-item dropdown">
                                <a href=# class="nav-link dropdown-toggle" data-toggle=dropdown
                                    id=navbar-dropdown-menu-link-2141 aria-haspopup=true aria-expanded=false>JLPT
                                    Info</a>
                                <div class="sub-menu dropdown-menu" id=navbar-dropdown-menu-link-2141><a
                                        href=https://jlptsensei.com/jlpt-info/what-is-the-jlpt/ class=dropdown-item
                                        id=menu-item-3537>What is the JLPT?</a><a href=https://jlptsensei.com/about/
                                        class=dropdown-item id=menu-item-32036>About JLPTsensei.com</a><a
                                        href=https://jlptsensei.com/complete-jlpt-grammar-list/ class=dropdown-item
                                        id=menu-item-2172>JLPT Grammar (all)</a><a
                                        href=https://jlptsensei.com/kanji-list-ordered-by-frequency-of-use/
                                        class=dropdown-item id=menu-item-32035>JLPT Kanji (Top 1,000)</a><a
                                        href=https://jlptsensei.com/jlpt-info/jlpt-pass-rate-statistics/
                                        class=dropdown-item id=menu-item-3517>JLPT Pass Rate Statistics</a><a
                                        href=https://jlptsensei.com/jlpt-info/ class=dropdown-item
                                        id=menu-item-2167>JLPT Info & News</a><a
                                        href=https://jlptsensei.com/recommended-resources-for-studying-japanese/
                                        class=dropdown-item id=menu-item-2170>Recommended Resources</a></div>
                            <li id=menu-item-2171
                                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2171 nav-item dropdown">
                                <a href=# class="nav-link dropdown-toggle" data-toggle=dropdown
                                    id=navbar-dropdown-menu-link-2171 aria-haspopup=true
                                    aria-expanded=false>Downloads</a>
                                <div class="sub-menu dropdown-menu" id=navbar-dropdown-menu-link-2171><a
                                        href=https://jlptsensei.com/member-benefits/ class=dropdown-item
                                        id=menu-item-32034>All Downloads</a><a href=https://jlptsensei.com/ebooks/
                                        class=dropdown-item id=menu-item-21336>ebooks</a><a
                                        href=https://jlptsensei.com/flashcards/ class=dropdown-item
                                        id=menu-item-21324>Flashcards</a></div>
                        </ul>
                        <form role=search class=form-inline action=https://jlptsensei.com /><input class=form-control
                            type=search id=s name=s placeholder="Search EN or 日本語" aria-label=Search> <button
                            class="btn btn-outline-info my-2 my-sm-0 d-lg-none">Search</button></form>
                    </div>
                </div>
            </nav>
        </header>
        <div id=content>
            <div class=container>
                <div class=row>
                    <div class=col-12>
                        <div class="adsense-cont adsense-responsive my-3 my-md-4 adsense-top-banner"><span
                                id=ezoic-pub-ad-placeholder-103></span><span data-ez-ph-id=103
                                style=margin-left:auto!important;min-height:90px;max-width:100%!important;line-height:0;padding:0;float:none!important;margin-right:auto!important;margin-bottom:10px!important;display:block!important;text-align:center!important;min-width:728px;margin-top:10px!important></span>
                        </div>
                    </div>
                    <div class=col-12>
                        <div class=single-bar></div>
                    </div>
                    <main id=main-content class=col-lg-8>
                        <article id=post-16073
                            class="clearfix post-16073 post type-post status-publish format-standard has-post-thumbnail hentry category-beginner-japanese category-elementary-japanese category-kanji category-learn-japanese"
                            role=article itemscope itemtype=http://schema.org/BlogPosting>
                            <meta itemprop=headline content="Top 100 Most Frequent Kanji Characters">
                            <header class="entry-header single-header">
                                <div class=mb-3 itemprop=image itemscope itemtype=https://schema.org/ImageObject><img
                                        src="https://jlptsensei.com/wp-content/uploads/2020/03/top-100-japanese-kanji-most-frequent-%E6%BC%A2%E5%AD%97-900x507.png?ezimgfmt=rs%3Adevice%2Frscb1-1"
                                        alt="Top 100 Most Frequent Kanji Characters" class=img-responsive
                                        id=header-image ezimgfmt="rs rscb1 src ng ngcb1" loading=eager srcset sizes
                                        importance=high fetchpriority=high>
                                    <meta itemprop=url
                                        content="https://jlptsensei.com/wp-content/uploads/2020/03/top-100-japanese-kanji-most-frequent-漢字-900x507.png">
                                </div>
                                <h1 class="entry-title single-title mt-0 mt-lg-4" itemprop="headline name" rel=bookmark>
                                    Top 100 Most Frequent Kanji Characters</h1>
                                <div class=entry-meta>
                                    <meta itemprop=datePublished content="2020-03-16">
                                    <meta itemprop=dateModified content="2020-05-15"><span class=byline>Written by <span
                                            class="author vcard"><a class="url fn n"
                                                href=https://jlptsensei.com/author/cruise-bogedin />Cruise
                                            Bogedin</a></span></span>
                                    <meta itemprop=author content="Cruise Bogedin">
                                    <link id=page-url itemprop=mainEntityOfPage
                                        href=https://jlptsensei.com/learn-japanese/top-100-most-frequent-kanji-characters />
                                    in <span class=post-category><a href=https://jlptsensei.com/learn-japanese/
                                            rel="category tag">Learn Japanese</a></span>
                                </div>
                            </header>
                            <section class="entry-content clearfix" itemprop=articleBody>
                                <p>The best way to start learning Japanese kanji (漢字) is to focus on the most common
                                    characters first. This list includes the top 100 most frequent kanji characters in
                                    order of most frequent.
                                <p>100 kanji characters may not be enough to get you through a newspaper, but starting
                                    with the most frequent characters will greatly accelerate your reading ability, and
                                    many of these characters are a base part of future kanji you will need to memorize.
                                <p>Click on any of the kanji to see a full lesson for that character, including
                                    onyomi/kunyomi readings, meaning, example sentences, related JLPT vocabulary /
                                    grammar, and more.
                                <p>See full<a href=https://jlptsensei.com/kanji-list-ordered-by-frequency-of-use/
                                        target=_blank rel="noreferrer noopener"> Japanese kanji list</a>.
                                <div class="table-responsive mt-3 mt-lg-5">
                                    <table id=jl-kanji class="table table-striped table-hover table-bordered jl-table">
                                        <thead>
                                            <tr class="bg-n6 text-white">
                                                <th class=text-center>#
                                                <th class=text-center>Kanji
                                                <th class=text-center>Onyomi
                                                <th class=text-center>Kunyomi
                                                <th>Kanji Meaning
                                        <tbody>
                                            <tr class=jl-row>
<td class="jl-td-num align-middle text-center">1
<td class="jl-td-k align-middle text-center"><a target=_blank
        class="jl-link jp"
        href=https://jlptsensei.com/learn-japanese-kanji/%e6%97%a5-nichi-jitsu-day-sun/
        rel="bookmark noopener noreferrer"
        title="Learn JLPT N5 Kanji: 日 (nichi, jitsu) day, sun">日</a>
<td class="jl-td-on align-middle"><a target=_blank class=jl-link
        href=https://jlptsensei.com/learn-japanese-kanji/%e6%97%a5-nichi-jitsu-day-sun/
        rel="bookmark noopener noreferrer"
        title="Learn JLPT N5 Kanji: 日 (nichi, jitsu) day, sun">nichi,
        jitsu<p class="mb-0 mt-2">ニチ, ジツ</p></a>
<td class="jl-td-kun align-middle"><a target=_blank class=jl-link
        href=https://jlptsensei.com/learn-japanese-kanji/%e6%97%a5-nichi-jitsu-day-sun/
        rel="bookmark noopener noreferrer"
        title="Learn JLPT N5 Kanji: 日 (nichi, jitsu) day, sun">hi, -bi,
        -ka<p class="mb-0 mt-2">ひ, -び, -か</p></a>
<td class="jl-td-m align-middle">day, sun, Japan, counter for days
<tr class=jl-row>
<td class="jl-td-num align-middle text-center">2
<td class="jl-td-k align-middle text-center"><a target=_blank
        class="jl-link jp"
        href=https://jlptsensei.com/learn-japanese-kanji/%e4%b8%80-ichi-hito-tsu-one/
        rel="bookmark noopener noreferrer"
        title="Learn JLPT N5 Kanji: 一 (ichi, hito) one">一</a>
<td class="jl-td-on align-middle"><a target=_blank class=jl-link
        href=https://jlptsensei.com/learn-japanese-kanji/%e4%b8%80-ichi-hito-tsu-one/
        rel="bookmark noopener noreferrer"
        title="Learn JLPT N5 Kanji: 一 (ichi, hito) one">ichi<p
            class="mb-0 mt-2">イチ</p></a>
<td class="jl-td-kun align-middle"><a target=_blank class=jl-link
        href=https://jlptsensei.com/learn-japanese-kanji/%e4%b8%80-ichi-hito-tsu-one/
        rel="bookmark noopener noreferrer"
        title="Learn JLPT N5 Kanji: 一 (ichi, hito) one">hito(tsu)<p
            class="mb-0 mt-2">ひと(つ)</p></a>
<td class="jl-td-m align-middle">one
<tr class=jl-row>
<td class="jl-td-num align-middle text-center">3
<td class="jl-td-k align-middle text-center"><a target=_blank
        class="jl-link jp"
        href=https://jlptsensei.com/learn-japanese-kanji/%e5%9b%bd-koku-kuni-country/
        rel="bookmark noopener noreferrer"
        title="Learn JLPT N5 Kanji: 国 (koku, kuni) country">国</a>
<td class="jl-td-on align-middle"><a target=_blank class=jl-link
        href=https://jlptsensei.com/learn-japanese-kanji/%e5%9b%bd-koku-kuni-country/
        rel="bookmark noopener noreferrer"
        title="Learn JLPT N5 Kanji: 国 (koku, kuni) country">koku<p
            class="mb-0 mt-2">コク</p></a>
<td class="jl-td-kun align-middle"><a target=_blank class=jl-link
        href=https://jlptsensei.com/learn-japanese-kanji/%e5%9b%bd-koku-kuni-country/
        rel="bookmark noopener noreferrer"
        title="Learn JLPT N5 Kanji: 国 (koku, kuni) country">kuni<p
            class="mb-0 mt-2">くに</p></a>
<td class="jl-td-m align-middle">country
<tr class=jl-row>
<td class="jl-td-num align-middle text-center">4
<td class="jl-td-k align-middle text-center"><a target=_blank
        class="jl-link jp"
        href=https://jlptsensei.com/learn-japanese-kanji/%e4%bc%9a-kai-au-meet/
        rel="bookmark noopener noreferrer"
        title="Learn JLPT N4 Kanji: 会 (kai, au) meet">会</a>
<td class="jl-td-on align-middle"><a target=_blank class=jl-link
        href=https://jlptsensei.com/learn-japanese-kanji/%e4%bc%9a-kai-au-meet/
        rel="bookmark noopener noreferrer"
        title="Learn JLPT N4 Kanji: 会 (kai, au) meet">kai<p
            class="mb-0 mt-2">カイ</p></a>
<td class="jl-td-kun align-middle"><a target=_blank class=jl-link
        href=https://jlptsensei.com/learn-japanese-kanji/%e4%bc%9a-kai-au-meet/
        rel="bookmark noopener noreferrer"
        title="Learn JLPT N4 Kanji: 会 (kai, au) meet">a(u)<p
            class="mb-0 mt-2">あ(う)</p></a>
<td class="jl-td-m align-middle">meeting; meet
<tr class=jl-row>
<td class="jl-td-num align-middle text-center">5
<td class="jl-td-k align-middle text-center"><a target=_blank
        class="jl-link jp"
        href=https://jlptsensei.com/learn-japanese-kanji/%e4%ba%ba-jin-hito-person/
        rel="bookmark noopener noreferrer"
        title="Learn JLPT N5 Kanji: 人 (jin, hito) person">人</a>
<td class="jl-td-on align-middle"><a target=_blank class=jl-link
        href=https://jlptsensei.com/learn-japanese-kanji/%e4%ba%ba-jin-hito-person/
        rel="bookmark noopener noreferrer"
        title="Learn JLPT N5 Kanji: 人 (jin, hito) person">jin, nin<p
            class="mb-0 mt-2">ジン、 ニン</p></a>
<td class="jl-td-kun align-middle"><a target=_blank class=jl-link
        href=https://jlptsensei.com/learn-japanese-kanji/%e4%ba%ba-jin-hito-person/
        rel="bookmark noopener noreferrer"
        title="Learn JLPT N5 Kanji: 人 (jin, hito) person">hito<p
            class="mb-0 mt-2">ひと</p></a>
<td class="jl-td-m align-middle">person
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">6
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%b9%b4-nen-toshi-year/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 年 (nen, toshi) year">年</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%b9%b4-nen-toshi-year/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 年 (nen, toshi) year">nen<p
                                                            class="mb-0 mt-2">ネン</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%b9%b4-nen-toshi-year/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 年 (nen, toshi) year">toshi<p
                                                            class="mb-0 mt-2">とし</p></a>
                                                <td class="jl-td-m align-middle">year, counter for years
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">7
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%a4%a7-dai-tai-ookii-large-big/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 大 (dai, tai, ookii) large, big">大</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%a4%a7-dai-tai-ookii-large-big/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 大 (dai, tai, ookii) large, big">dai,
                                                        tai<p class="mb-0 mt-2">ダイ、 タイ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%a4%a7-dai-tai-ookii-large-big/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 大 (dai, tai, ookii) large, big">oo(kii)
                                                        <p class="mb-0 mt-2">おお(きい)</p></a>
                                                <td class="jl-td-m align-middle">large, big
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">8
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%8d%81-juu-ten-10/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 十 (juu) ten, 10">十</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%8d%81-juu-ten-10/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 十 (juu) ten, 10">juu<p
                                                            class="mb-0 mt-2">ジュウ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%8d%81-juu-ten-10/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 十 (juu) ten, 10">tou, to<p
                                                            class="mb-0 mt-2">とお、 と</p></a>
                                                <td class="jl-td-m align-middle">ten, 10
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">9
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%ba%8c-ni-futatsu-two-2/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 二 (ni, futatsu) two, 2">二</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%ba%8c-ni-futatsu-two-2/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 二 (ni, futatsu) two, 2">ni, ji<p
                                                            class="mb-0 mt-2">ニ、 ジ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%ba%8c-ni-futatsu-two-2/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 二 (ni, futatsu) two, 2">futa(tsu),
                                                        futatabi<p class="mb-0 mt-2">ふた(つ)、 ふたたび</p></a>
                                                <td class="jl-td-m align-middle">two, 2
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">10
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%9c%ac-hon-moto-book-true/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 本 (hon, moto) book, true">本</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%9c%ac-hon-moto-book-true/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 本 (hon, moto) book, true">hon<p
                                                            class="mb-0 mt-2">ホン</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%9c%ac-hon-moto-book-true/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 本 (hon, moto) book, true">moto<p
                                                            class="mb-0 mt-2">もと</p></a>
                                                <td class="jl-td-m align-middle">book, present, true, counter for long
                                                    cylindrical things
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">11
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%b8%ad-chuu-naka-inside-center/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 中 (chuu, naka) inside, center">中</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%b8%ad-chuu-naka-inside-center/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 中 (chuu, naka) inside, center">chuu
                                                        <p class="mb-0 mt-2">チュウ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%b8%ad-chuu-naka-inside-center/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 中 (chuu, naka) inside, center">naka,
                                                        uchi, ata(ru)<p class="mb-0 mt-2">なか、 うち、 あた(る)</p></a>
                                                <td class="jl-td-m align-middle">in, inside, middle, mean, center
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">12
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%95%b7-chou-nagai-long-superior/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 長 (chou, nagai) long, superior">長</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%95%b7-chou-nagai-long-superior/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 長 (chou, nagai) long, superior">chou
                                                        <p class="mb-0 mt-2">チョウ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%95%b7-chou-nagai-long-superior/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 長 (chou, nagai) long, superior">naga(i),
                                                        osa<p class="mb-0 mt-2">なが(い)、 おさ</p></a>
                                                <td class="jl-td-m align-middle">long, leader, superior, senior
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">13
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%87%ba-shutsu-deru-exit/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 出 (shutsu, deru) exit">出</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%87%ba-shutsu-deru-exit/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 出 (shutsu, deru) exit">shutsu, sui<p
                                                            class="mb-0 mt-2">シュツ、 スイ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%87%ba-shutsu-deru-exit/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 出 (shutsu, deru) exit">de(ru),
                                                        da(su), i(deru)<p class="mb-0 mt-2">で(る)、 だ(す)、 い(でる)</p></a>
                                                <td class="jl-td-m align-middle">exit, leave, go out
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">14
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%b8%89-san-mitsu-three-3/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 三 (san, mitsu) three, 3">三</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%b8%89-san-mitsu-three-3/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 三 (san, mitsu) three, 3">san<p
                                                            class="mb-0 mt-2">サン</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%b8%89-san-mitsu-three-3/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 三 (san, mitsu) three, 3">mi(tsu)<p
                                                            class="mb-0 mt-2">み(つ)</p></a>
                                                <td class="jl-td-m align-middle">three, 3
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">15
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%90%8c-dou-onaji-same-agree/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 同 (dou, onaji) same, agree">同</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%90%8c-dou-onaji-same-agree/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 同 (dou, onaji) same, agree">dou<p
                                                            class="mb-0 mt-2">ドウ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%90%8c-dou-onaji-same-agree/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 同 (dou, onaji) same, agree">onaji<p
                                                            class="mb-0 mt-2">おな(じ)</p></a>
                                                <td class="jl-td-m align-middle">same, agree, equal
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">16
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%99%82-ji-toki-time-hour/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 時 (ji, toki) time, hour">時</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%99%82-ji-toki-time-hour/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 時 (ji, toki) time, hour">ji<p
                                                            class="mb-0 mt-2">ジ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%99%82-ji-toki-time-hour/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 時 (ji, toki) time, hour">toki, doki
                                                        <p class="mb-0 mt-2">とき、 -どき</p></a>
                                                <td class="jl-td-m align-middle">time, hour
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">17
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%94%bf-sei-matsurigoto-meaning-government/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 政 (sei, matsurigoto) Meaning: government">政</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%94%bf-sei-matsurigoto-meaning-government/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 政 (sei, matsurigoto) Meaning: government">sei
                                                        <p class="mb-0 mt-2">セイ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%94%bf-sei-matsurigoto-meaning-government/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 政 (sei, matsurigoto) Meaning: government">matsurigoto
                                                        <p class="mb-0 mt-2">まつりごと</p></a>
                                                <td class="jl-td-m align-middle">politics, government
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">18
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%ba%8b-ji-koto-matter-thing/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 事 (ji, koto) matter, thing">事</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%ba%8b-ji-koto-matter-thing/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 事 (ji, koto) matter, thing">ji<p
                                                            class="mb-0 mt-2">ジ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%ba%8b-ji-koto-matter-thing/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 事 (ji, koto) matter, thing">koto<p
                                                            class="mb-0 mt-2">こと</p></a>
                                                <td class="jl-td-m align-middle">matter, thing, fact, business, reason,
                                                    possibly
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">19
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e8%87%aa-ji-mizukara-oneself/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 自 (ji, mizukara) oneself">自</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e8%87%aa-ji-mizukara-oneself/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 自 (ji, mizukara) oneself">ji, shi<p
                                                            class="mb-0 mt-2">ジ、 シ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e8%87%aa-ji-mizukara-oneself/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 自 (ji, mizukara) oneself">mizuka(ra)
                                                        <p class="mb-0 mt-2">みずか(ら)</p></a>
                                                <td class="jl-td-m align-middle">oneself
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">20
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e8%a1%8c-kou-iku-going-line/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 行 (kou, iku) going, line">行</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e8%a1%8c-kou-iku-going-line/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 行 (kou, iku) going, line">kou, gyou,
                                                        an<p class="mb-0 mt-2">コウ、 ギョウ、 アン</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e8%a1%8c-kou-iku-going-line/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 行 (kou, iku) going, line">i(ku),
                                                        yu(ku), okona(u)<p class="mb-0 mt-2">い(く)、 ゆ(く)、 おこな(う)</p></a>
                                                <td class="jl-td-m align-middle">going, journey, carry out, line, row
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">21
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%a4%be-sha-company/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 社 (sha) company">社</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%a4%be-sha-company/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 社 (sha) company">sha<p
                                                            class="mb-0 mt-2">シャ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%a4%be-sha-company/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 社 (sha) company">yashiro<p
                                                            class="mb-0 mt-2">やしろ</p></a>
                                                <td class="jl-td-m align-middle">company, firm, office, association,
                                                    shrine
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">22
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e8%a6%8b-ken-miru-to-see/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 見 (ken, miru) to see, to show">見</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e8%a6%8b-ken-miru-to-see/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 見 (ken, miru) to see, to show">ken<p
                                                            class="mb-0 mt-2">ケン</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e8%a6%8b-ken-miru-to-see/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 見 (ken, miru) to see, to show">mi(ru),
                                                        mi(seru)<p class="mb-0 mt-2">み(る)、 み(せる)</p></a>
                                                <td class="jl-td-m align-middle">see, hopes, chances, idea, opinion,
                                                    look at, visible
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">23
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%9c%88-getsu-tsuki-month-moon/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 月 (getsu, tsuki) month, moon">月</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%9c%88-getsu-tsuki-month-moon/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 月 (getsu, tsuki) month, moon">getsu,
                                                        gatsu<p class="mb-0 mt-2">ゲツ、 ガツ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%9c%88-getsu-tsuki-month-moon/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 月 (getsu, tsuki) month, moon">tsuki
                                                        <p class="mb-0 mt-2">つき</p></a>
                                                <td class="jl-td-m align-middle">month, moon
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">24
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%88%86-bun-wakeru-part-minute/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 分 (bun, wakeru) part, minute">分</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%88%86-bun-wakeru-part-minute/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 分 (bun, wakeru) part, minute">bun,
                                                        fun, bu<p class="mb-0 mt-2">ブン、 フン、 ブ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%88%86-bun-wakeru-part-minute/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 分 (bun, wakeru) part, minute">wa(keru)
                                                        <p class="mb-0 mt-2">わ(ける)</p></a>
                                                <td class="jl-td-m align-middle">part, minute of time, understand
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">25
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e8%ad%b0-gi-meaning-deliberation/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 議 (gi) deliberation">議</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e8%ad%b0-gi-meaning-deliberation/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 議 (gi) deliberation">gi<p
                                                            class="mb-0 mt-2">ギ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e8%ad%b0-gi-meaning-deliberation/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 議 (gi) deliberation">
                                                        <p class="mb-0 mt-2"></p>
                                                    </a>
                                                <td class="jl-td-m align-middle">deliberation, consultation, debate
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">26
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%be%8c-go-ato-behind-later/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 後 (go, ato) behind, later">後</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%be%8c-go-ato-behind-later/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 後 (go, ato) behind, later">go, kou<p
                                                            class="mb-0 mt-2">ゴ、 コウ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%be%8c-go-ato-behind-later/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 後 (go, ato) behind, later">nochi,
                                                        ushi(ro), ato<p class="mb-0 mt-2">のち、 うし(ろ)、 あと</p></a>
                                                <td class="jl-td-m align-middle">behind, back, later
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">27
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%89%8d-zen-mae-in-front-before/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 前 (zen, mae) in front, before">前</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%89%8d-zen-mae-in-front-before/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 前 (zen, mae) in front, before">zen<p
                                                            class="mb-0 mt-2">ゼン</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%89%8d-zen-mae-in-front-before/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 前 (zen, mae) in front, before">mae<p
                                                            class="mb-0 mt-2">まえ</p></a>
                                                <td class="jl-td-m align-middle">in front, before
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">28
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%b0%91-min-tami-meaning-people/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 民 (min, tami) Meaning: people">民</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%b0%91-min-tami-meaning-people/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 民 (min, tami) Meaning: people">min<p
                                                            class="mb-0 mt-2">ミン</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%b0%91-min-tami-meaning-people/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 民 (min, tami) Meaning: people">tami
                                                        <p class="mb-0 mt-2">たみ</p></a>
                                                <td class="jl-td-m align-middle">people, nation, subjects
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">29
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%94%9f-sei-ikiru-nama-life/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 生 (sei, ikiru, nama) life">生</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%94%9f-sei-ikiru-nama-life/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 生 (sei, ikiru, nama) life">sei, shou
                                                        <p class="mb-0 mt-2">セイ、 ショウ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%94%9f-sei-ikiru-nama-life/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 生 (sei, ikiru, nama) life">i(kiru),
                                                        u(mu), o(u), ha(eru), nama<p class="mb-0 mt-2">い(きる)、 う(む)、
                                                            お(う)、 は(える)、 なま</p></a>
                                                <td class="jl-td-m align-middle">life, genuine, birth
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">30
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%80%a3-ren-tsureru-meaning-take-along/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 連 (ren, tsureru) take along">連</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%80%a3-ren-tsureru-meaning-take-along/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 連 (ren, tsureru) take along">ren<p
                                                            class="mb-0 mt-2">レン</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%80%a3-ren-tsureru-meaning-take-along/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 連 (ren, tsureru) take along">tsura(naru),
                                                        tsu(reru)<p class="mb-0 mt-2">つら(なる)、 つ(れる)</p></a>
                                                <td class="jl-td-m align-middle">take along, lead, join, connect
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">31
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%ba%94-go-itsutsu-five-5/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 五 (go, itsutsu) five, 5">五</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%ba%94-go-itsutsu-five-5/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 五 (go, itsutsu) five, 5">go<p
                                                            class="mb-0 mt-2">ゴ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%ba%94-go-itsutsu-five-5/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 五 (go, itsutsu) five, 5">itsu(tsu)<p
                                                            class="mb-0 mt-2">いつ(つ)</p></a>
                                                <td class="jl-td-m align-middle">five, 5
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">32
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%99%ba-hatsu-departure/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 発 (hatsu) departure">発</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%99%ba-hatsu-departure/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 発 (hatsu) departure">hatsu, hotsu<p
                                                            class="mb-0 mt-2">ハツ、 ホツ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%99%ba-hatsu-departure/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 発 (hatsu) departure">
                                                        <p class="mb-0 mt-2"></p>
                                                    </a>
                                                <td class="jl-td-m align-middle">departure, discharge, emit, start from
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">33
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%96%93-kan-aida-interval-space/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 間 (kan, aida) interval, space">間</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%96%93-kan-aida-interval-space/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 間 (kan, aida) interval, space">kan,
                                                        ken<p class="mb-0 mt-2">カン、 ケン</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%96%93-kan-aida-interval-space/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 間 (kan, aida) interval, space">aida,
                                                        ma, ai<p class="mb-0 mt-2">あいだ、 ま、 あい</p></a>
                                                <td class="jl-td-m align-middle">interval, space
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">34
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%af%be-tai-tsui-meaning-compare/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 対 (tai, tsui) Meaning: compare">対</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%af%be-tai-tsui-meaning-compare/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 対 (tai, tsui) Meaning: compare">tai,
                                                        tsui<p class="mb-0 mt-2">タイ、 ツイ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%af%be-tai-tsui-meaning-compare/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 対 (tai, tsui) Meaning: compare">
                                                        <p class="mb-0 mt-2"></p>
                                                    </a>
                                                <td class="jl-td-m align-middle">opposite, even, equal, versus, anti-,
                                                    compare
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">35
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%b8%8a-ue-kami-jou-above-up/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 上 (ue, kami, jou) above, up">上</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%b8%8a-ue-kami-jou-above-up/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 上 (ue, kami, jou) above, up">jou,
                                                        shou, shan<p class="mb-0 mt-2">ジョウ、 ショウ、 シャン</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%b8%8a-ue-kami-jou-above-up/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 上 (ue, kami, jou) above, up">ue,
                                                        uwa, kami, a(geru), nobo(ru), tatematsu(ru)<p class="mb-0 mt-2">
                                                            うえ、 うわ-、 かみ、 あ(げる)、 のぼ(る)、 たてまつ(る)</p></a>
                                                <td class="jl-td-m align-middle">above, up
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">36
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%83%a8-bu-section/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 部 (bu) section">部</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%83%a8-bu-section/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 部 (bu) section">bu<p
                                                            class="mb-0 mt-2">ブ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%83%a8-bu-section/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 部 (bu) section">
                                                        <p class="mb-0 mt-2"></p>
                                                    </a>
                                                <td class="jl-td-m align-middle">section, bureau, dept, class, copy,
                                                    part, portion
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">37
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%9d%b1-tou-higashi-east/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 東 (tou, higashi) east">東</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%9d%b1-tou-higashi-east/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 東 (tou, higashi) east">tou<p
                                                            class="mb-0 mt-2">トウ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%9d%b1-tou-higashi-east/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 東 (tou, higashi) east">higashi<p
                                                            class="mb-0 mt-2">ひがし</p></a>
                                                <td class="jl-td-m align-middle">east
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">38
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e8%80%85-sha-mono-someone/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 者 (sha, mono) someone">者</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e8%80%85-sha-mono-someone/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 者 (sha, mono) someone">sha<p
                                                            class="mb-0 mt-2">シャ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e8%80%85-sha-mono-someone/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 者 (sha, mono) someone">mono<p
                                                            class="mb-0 mt-2">もの</p></a>
                                                <td class="jl-td-m align-middle">someone, person
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">39
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%85%9a-tou-meaning-party/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N2 Kanji: 党 (tou) Meaning: party">党</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%85%9a-tou-meaning-party/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N2 Kanji: 党 (tou) Meaning: party">tou<p
                                                            class="mb-0 mt-2">トウ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%85%9a-tou-meaning-party/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N2 Kanji: 党 (tou) Meaning: party">
                                                        <p class="mb-0 mt-2"></p>
                                                    </a>
                                                <td class="jl-td-m align-middle">party, faction, clique
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">40
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%9c%b0-chi-ji-ground-earth/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 地 (chi, ji) ground, earth">地</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%9c%b0-chi-ji-ground-earth/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 地 (chi, ji) ground, earth">chi, ji<p
                                                            class="mb-0 mt-2">チ、 ジ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%9c%b0-chi-ji-ground-earth/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 地 (chi, ji) ground, earth">
                                                        <p class="mb-0 mt-2"></p>
                                                    </a>
                                                <td class="jl-td-m align-middle">ground, earth
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">41
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%90%88-gou-au-meaning-fit/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 合 (gou, au) fit">合</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%90%88-gou-au-meaning-fit/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 合 (gou, au) fit">gou, ga, ka<p
                                                            class="mb-0 mt-2">ゴウ、 ガッ、 カッ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%90%88-gou-au-meaning-fit/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 合 (gou, au) fit">a(u)<p
                                                            class="mb-0 mt-2">あ(う)、あい</p></a>
                                                <td class="jl-td-m align-middle">fit, suit, join, 0.1
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">42
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%b8%82-shi-ichi-meaning-city/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 市 (shi, ichi) Meaning: city">市</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%b8%82-shi-ichi-meaning-city/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 市 (shi, ichi) Meaning: city">shi<p
                                                            class="mb-0 mt-2">シ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%b8%82-shi-ichi-meaning-city/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 市 (shi, ichi) Meaning: city">ichi<p
                                                            class="mb-0 mt-2">いち</p></a>
                                                <td class="jl-td-m align-middle">market, city, town
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">43
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%a5%ad-gyou-waza-business/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 業 (gyou, waza) business">業</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%a5%ad-gyou-waza-business/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 業 (gyou, waza) business">gyou<p
                                                            class="mb-0 mt-2">ギョウ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%a5%ad-gyou-waza-business/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 業 (gyou, waza) business">waza<p
                                                            class="mb-0 mt-2">わざ</p></a>
                                                <td class="jl-td-m align-middle">business, vocation, arts, performance
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">44
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%86%85-nai-uchi-inside/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 内 (nai, uchi) inside">内</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%86%85-nai-uchi-inside/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 内 (nai, uchi) inside">nai<p
                                                            class="mb-0 mt-2">ナイ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%86%85-nai-uchi-inside/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 内 (nai, uchi) inside">uchi<p
                                                            class="mb-0 mt-2">うち</p></a>
                                                <td class="jl-td-m align-middle">inside, within, between, among, house,
                                                    home
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">45
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%9b%b8-sou-shou-ai-meaning-mutual/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 相 (sou, shou, ai) Meaning: mutual">相</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%9b%b8-sou-shou-ai-meaning-mutual/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 相 (sou, shou, ai) Meaning: mutual">sou,
                                                        shou<p class="mb-0 mt-2">ソウ、 ショウ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%9b%b8-sou-shou-ai-meaning-mutual/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 相 (sou, shou, ai) Meaning: mutual">ai
                                                        <p class="mb-0 mt-2">あい</p></a>
                                                <td class="jl-td-m align-middle">inter-, mutual, together, each other,
                                                    minister of state
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">46
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%96%b9-hou-kata-direction-person/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 方 (hou, kata) direction, person">方</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%96%b9-hou-kata-direction-person/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 方 (hou, kata) direction, person">hou
                                                        <p class="mb-0 mt-2">ホウ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%96%b9-hou-kata-direction-person/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 方 (hou, kata) direction, person">kata
                                                        <p class="mb-0 mt-2">かた</p></a>
                                                <td class="jl-td-m align-middle">direction, person, alternative
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">47
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%9b%9b-shi-yotsu-four-4/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 四 (shi, yotsu) four, 4">四</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%9b%9b-shi-yotsu-four-4/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 四 (shi, yotsu) four, 4">shi<p
                                                            class="mb-0 mt-2">シ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%9b%9b-shi-yotsu-four-4/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 四 (shi, yotsu) four, 4">yo(tsu), yon
                                                        <p class="mb-0 mt-2">よ(つ)、 よん</p></a>
                                                <td class="jl-td-m align-middle">four, 4
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">48
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%ae%9a-tei-jou-sadameru-meaning-determine/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 定 (tei, jou, sadameru) Meaning: determine">定</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%ae%9a-tei-jou-sadameru-meaning-determine/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 定 (tei, jou, sadameru) Meaning: determine">tei,
                                                        jou<p class="mb-0 mt-2">テイ、 ジョウ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%ae%9a-tei-jou-sadameru-meaning-determine/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 定 (tei, jou, sadameru) Meaning: determine">sada(meru)
                                                        <p class="mb-0 mt-2">さだ(める)</p></a>
                                                <td class="jl-td-m align-middle">determine, fix, establish, decide
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">49
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%bb%8a-ima-kon-now/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 今 (ima, kon) now">今</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%bb%8a-ima-kon-now/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 今 (ima, kon) now">kon, kin<p
                                                            class="mb-0 mt-2">コン、 キン</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%bb%8a-ima-kon-now/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 今 (ima, kon) now">ima<p
                                                            class="mb-0 mt-2">いま</p></a>
                                                <td class="jl-td-m align-middle">now; the present
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">50
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%9b%9e-kai-mawasu-revolve/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 回 (kai, mawasu) revolve">回</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%9b%9e-kai-mawasu-revolve/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 回 (kai, mawasu) revolve">kai<p
                                                            class="mb-0 mt-2">カイ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%9b%9e-kai-mawasu-revolve/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 回 (kai, mawasu) revolve">mawa(su)<p
                                                            class="mb-0 mt-2">まわ(す)</p></a>
                                                <td class="jl-td-m align-middle">-times, round, revolve, counter
                                            <tr>
                                                <td colspan=5><span
                                                        class="ezoic-autoinsert-video ezoic-mid_content"></span>
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">51
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%96%b0-shin-atarashii-new/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 新 (shin, atarashii) new">新</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%96%b0-shin-atarashii-new/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 新 (shin, atarashii) new">shin<p
                                                            class="mb-0 mt-2">シン</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%96%b0-shin-atarashii-new/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 新 (shin, atarashii) new">atara(shii),
                                                        ara(ta)<p class="mb-0 mt-2">あたら(しい)、 あら(た)</p></a>
                                                <td class="jl-td-m align-middle">new
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">52
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%a0%b4-jou-ba-location/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 場 (jou, ba) location">場</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%a0%b4-jou-ba-location/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 場 (jou, ba) location">jou<p
                                                            class="mb-0 mt-2">ジョウ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%a0%b4-jou-ba-location/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 場 (jou, ba) location">ba<p
                                                            class="mb-0 mt-2">ば</p></a>
                                                <td class="jl-td-m align-middle">location, place
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">53
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%87%91-kin-kane-gold/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 金 (kin, kane) gold">金</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%87%91-kin-kane-gold/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 金 (kin, kane) gold">kin, kon, gon<p
                                                            class="mb-0 mt-2">キン、 コン、 ゴン</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%87%91-kin-kane-gold/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 金 (kin, kane) gold">kane, kana, gane
                                                        <p class="mb-0 mt-2">かね、 かな-、 -がね</p></a>
                                                <td class="jl-td-m align-middle">gold
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">54
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%93%a1-in-employee-member/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 員 (in) employee, member">員</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%93%a1-in-employee-member/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 員 (in) employee, member">in<p
                                                            class="mb-0 mt-2">イン</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%93%a1-in-employee-member/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 員 (in) employee, member">
                                                        <p class="mb-0 mt-2"></p>
                                                    </a>
                                                <td class="jl-td-m align-middle">employee, member, number, the one in
                                                    charge
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">55
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%b9%9d-kyuu-ku-nine-9/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 九 (kyuu, ku) nine, 9">九</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%b9%9d-kyuu-ku-nine-9/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 九 (kyuu, ku) nine, 9">kyuu, ku<p
                                                            class="mb-0 mt-2">キュウ、 ク</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%b9%9d-kyuu-ku-nine-9/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 九 (kyuu, ku) nine, 9">kokono(tsu)<p
                                                            class="mb-0 mt-2">ここの(つ)</p></a>
                                                <td class="jl-td-m align-middle">nine, 9
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">56
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%85%a5-nyuu-hairu-enter/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 入 (nyuu, hairu) enter">入</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%85%a5-nyuu-hairu-enter/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 入 (nyuu, hairu) enter">nyuu<p
                                                            class="mb-0 mt-2">ニュウ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%85%a5-nyuu-hairu-enter/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 入 (nyuu, hairu) enter">i(ru),
                                                        hai(ru)<p class="mb-0 mt-2">い(る)、はい(る)</p></a>
                                                <td class="jl-td-m align-middle">enter, insert
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">57
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%81%b8-sen-erabu-meaning-select/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 選 (sen, erabu) Meaning: select">選</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%81%b8-sen-erabu-meaning-select/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 選 (sen, erabu) Meaning: select">sen
                                                        <p class="mb-0 mt-2">セン</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%81%b8-sen-erabu-meaning-select/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 選 (sen, erabu) Meaning: select">era(bu)
                                                        <p class="mb-0 mt-2">えら(ぶ)</p></a>
                                                <td class="jl-td-m align-middle">elect, select, choose, prefer
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">58
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%ab%8b-ritsu-tatsu-meaning-stand-up/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 立 (ritsu, tatsu) stand up">立</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%ab%8b-ritsu-tatsu-meaning-stand-up/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 立 (ritsu, tatsu) stand up">ritsu<p
                                                            class="mb-0 mt-2">リツ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%ab%8b-ritsu-tatsu-meaning-stand-up/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 立 (ritsu, tatsu) stand up">ta(tsu)<p
                                                            class="mb-0 mt-2">た(つ)</p></a>
                                                <td class="jl-td-m align-middle">stand up, rise
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">59
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%96%8b-kai-hiraku-open/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 開 (kai, hiraku) open">開</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%96%8b-kai-hiraku-open/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 開 (kai, hiraku) open">kai<p
                                                            class="mb-0 mt-2">カイ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%96%8b-kai-hiraku-open/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 開 (kai, hiraku) open">hira(ku),
                                                        a(keru)<p class="mb-0 mt-2">ひら(く)、 あ(ける)</p></a>
                                                <td class="jl-td-m align-middle">open, unfold, unseal
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">60
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%89%8b-shu-te-hand/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 手 (shu, te) hand">手</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%89%8b-shu-te-hand/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 手 (shu, te) hand">shu<p
                                                            class="mb-0 mt-2">シュ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%89%8b-shu-te-hand/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 手 (shu, te) hand">te<p
                                                            class="mb-0 mt-2">て</p></a>
                                                <td class="jl-td-m align-middle">hand
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">61
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%b1%b3-bei-kome-meaning-rice-usa/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 米 (bei, kome) Meaning: rice, USA">米</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%b1%b3-bei-kome-meaning-rice-usa/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 米 (bei, kome) Meaning: rice, USA">bei,
                                                        mai, meetoru<p class="mb-0 mt-2">ベイ、 マイ、 メエトル</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%b1%b3-bei-kome-meaning-rice-usa/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 米 (bei, kome) Meaning: rice, USA">kome
                                                        <p class="mb-0 mt-2">こめ</p></a>
                                                <td class="jl-td-m align-middle">rice, USA, meter
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">62
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%8a%9b-ryoku-chikara-power/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 力 (ryoku, chikara) power">力</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%8a%9b-ryoku-chikara-power/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 力 (ryoku, chikara) power">ryoku,
                                                        riki<p class="mb-0 mt-2">リョク、 リキ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%8a%9b-ryoku-chikara-power/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 力 (ryoku, chikara) power">chikara<p
                                                            class="mb-0 mt-2">ちから</p></a>
                                                <td class="jl-td-m align-middle">power, strength, strong, strain, bear
                                                    up, exert
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">63
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%ad%a6-gaku-manabu-study/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 学 (gaku, manabu) study">学</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%ad%a6-gaku-manabu-study/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 学 (gaku, manabu) study">gaku<p
                                                            class="mb-0 mt-2">ガク</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%ad%a6-gaku-manabu-study/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 学 (gaku, manabu) study">mana(bu)<p
                                                            class="mb-0 mt-2">まな(ぶ)</p></a>
                                                <td class="jl-td-m align-middle">study, learning, science
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">64
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%95%8f-mon-tou-question/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 問 (mon, tou) question">問</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%95%8f-mon-tou-question/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 問 (mon, tou) question">mon<p
                                                            class="mb-0 mt-2">モン</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%95%8f-mon-tou-question/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 問 (mon, tou) question">to(u)<p
                                                            class="mb-0 mt-2">と(う)</p></a>
                                                <td class="jl-td-m align-middle">question, ask, problem
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">65
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%ab%98-kou-takai-tall-expensive/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 高 (kou, takai) tall, expensive">高</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%ab%98-kou-takai-tall-expensive/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 高 (kou, takai) tall, expensive">kou
                                                        <p class="mb-0 mt-2">コウ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%ab%98-kou-takai-tall-expensive/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 高 (kou, takai) tall, expensive">taka(i)
                                                        <p class="mb-0 mt-2">たか(い)</p></a>
                                                <td class="jl-td-m align-middle">tall, high, expensive
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">66
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%bb%a3-dai-kawari-substitute-change/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 代 (dai, kawari) substitute, change">代</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%bb%a3-dai-kawari-substitute-change/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 代 (dai, kawari) substitute, change">dai
                                                        <p class="mb-0 mt-2">ダイ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%bb%a3-dai-kawari-substitute-change/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 代 (dai, kawari) substitute, change">ka(wari)
                                                        <p class="mb-0 mt-2">か(わり)</p></a>
                                                <td class="jl-td-m align-middle">substitute, change, convert, replace,
                                                    period
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">67
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%98%8e-mei-akarui-bright-light/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 明 (mei, akarui) bright, light">明</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%98%8e-mei-akarui-bright-light/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 明 (mei, akarui) bright, light">mei,
                                                        myou<p class="mb-0 mt-2">メイ、 ミョウ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%98%8e-mei-akarui-bright-light/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 明 (mei, akarui) bright, light">aka(rui)
                                                        <p class="mb-0 mt-2">あか(るい)</p></a>
                                                <td class="jl-td-m align-middle">bright, light
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">68
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%ae%9f-jitsu-mi-meaning-reality/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 実 (jitsu, mi) reality">実</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%ae%9f-jitsu-mi-meaning-reality/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 実 (jitsu, mi) reality">jitsu<p
                                                            class="mb-0 mt-2">ジツ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%ae%9f-jitsu-mi-meaning-reality/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 実 (jitsu, mi) reality">mi, mino(ru),
                                                        michi(ru), makoto<p class="mb-0 mt-2">み、 みの(る)、 みち(る)、 まこと</p>
                                                        </a>
                                                <td class="jl-td-m align-middle">reality, truth
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">69
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%86%86-en-marui-circle-yen/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 円 (en, marui) circle, yen">円</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%86%86-en-marui-circle-yen/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 円 (en, marui) circle, yen">en<p
                                                            class="mb-0 mt-2">エン</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%86%86-en-marui-circle-yen/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 円 (en, marui) circle, yen">maru(i)<p
                                                            class="mb-0 mt-2">まる(い)</p></a>
                                                <td class="jl-td-m align-middle">circle, yen, round
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">70
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%96%a2-kan-seki-kakawaru-meaning-connection/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 関 (kan, seki, kakawaru) Meaning: connection">関</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%96%a2-kan-seki-kakawaru-meaning-connection/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 関 (kan, seki, kakawaru) Meaning: connection">kan
                                                        <p class="mb-0 mt-2">カン</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%96%a2-kan-seki-kakawaru-meaning-connection/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 関 (kan, seki, kakawaru) Meaning: connection">seki,
                                                        kaka(waru), karakuri<p class="mb-0 mt-2">せき、 かか(わる)、 からくり</p>
                                                        </a>
                                                <td class="jl-td-m align-middle">connection, barrier, gateway, involve,
                                                    concerning
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">71
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%b1%ba-ketsu-kimeru-meaning-decide/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 決 (ketsu, kimeru) decide">決</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%b1%ba-ketsu-kimeru-meaning-decide/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 決 (ketsu, kimeru) decide">ketsu<p
                                                            class="mb-0 mt-2">ケツ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%b1%ba-ketsu-kimeru-meaning-decide/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 決 (ketsu, kimeru) decide">ki(meru)<p
                                                            class="mb-0 mt-2">き(める)</p></a>
                                                <td class="jl-td-m align-middle">decide, fix, agree upon, appoint
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">72
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%ad%90-shi-ko-child/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 子 (shi, ko) child">子</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%ad%90-shi-ko-child/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 子 (shi, ko) child">shi, su, tsu<p
                                                            class="mb-0 mt-2">シ、 ス、 ツ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%ad%90-shi-ko-child/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 子 (shi, ko) child">ko, ne<p
                                                            class="mb-0 mt-2">こ、 ね</p></a>
                                                <td class="jl-td-m align-middle">child
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">73
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%8b%95-dou-ugoku-move/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 動 (dou, ugoku) move">動</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%8b%95-dou-ugoku-move/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 動 (dou, ugoku) move">dou<p
                                                            class="mb-0 mt-2">ドウ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%8b%95-dou-ugoku-move/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 動 (dou, ugoku) move">ugo(ku)<p
                                                            class="mb-0 mt-2">うご(く)</p></a>
                                                <td class="jl-td-m align-middle">move, motion, change
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">74
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%ba%ac-kyou-miyako-meaning-capital/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 京 (kyou, miyako) meaning: capital">京</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%ba%ac-kyou-miyako-meaning-capital/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 京 (kyou, miyako) meaning: capital">kyou,
                                                        kei, kin<p class="mb-0 mt-2">キョウ、 ケイ、 キン</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%ba%ac-kyou-miyako-meaning-capital/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 京 (kyou, miyako) meaning: capital">miyako
                                                        <p class="mb-0 mt-2">みやこ</p></a>
                                                <td class="jl-td-m align-middle">capital
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">75
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%85%a8-zen-subete-meaning-all/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 全 (zen, subete) all">全</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%85%a8-zen-subete-meaning-all/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 全 (zen, subete) all">zen<p
                                                            class="mb-0 mt-2">ゼン</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%85%a8-zen-subete-meaning-all/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 全 (zen, subete) all">matta(ku),
                                                        sube(te)<p class="mb-0 mt-2">まった(く)、 すべ(て)</p></a>
                                                <td class="jl-td-m align-middle">whole, entire, all, complete, fulfill
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">76
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%9b%ae-moku-me-meaning-eye/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 目 (moku, me) eye">目</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%9b%ae-moku-me-meaning-eye/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 目 (moku, me) eye">moku, boku<p
                                                            class="mb-0 mt-2">モク、 ボク</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%9b%ae-moku-me-meaning-eye/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 目 (moku, me) eye">me<p
                                                            class="mb-0 mt-2">め</p></a>
                                                <td class="jl-td-m align-middle">eye, class, look, insight, experience
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">77
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e8%a1%a8-hyou-omote-arawasu-meaning-table/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 表 (hyou, omote, arawasu) Meaning: table">表</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e8%a1%a8-hyou-omote-arawasu-meaning-table/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 表 (hyou, omote, arawasu) Meaning: table">hyou
                                                        <p class="mb-0 mt-2">ヒョウ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e8%a1%a8-hyou-omote-arawasu-meaning-table/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 表 (hyou, omote, arawasu) Meaning: table">omote,
                                                        arawa(su)<p class="mb-0 mt-2">おもて、 あらわ(す)</p></a>
                                                <td class="jl-td-m align-middle">surface, table, chart, diagram
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">78
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%88%a6-sen-ikusa-tatakau-meaning-battle/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 戦 (sen, ikusa, tatakau) Meaning: battle">戦</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%88%a6-sen-ikusa-tatakau-meaning-battle/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 戦 (sen, ikusa, tatakau) Meaning: battle">sen
                                                        <p class="mb-0 mt-2">セン</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%88%a6-sen-ikusa-tatakau-meaning-battle/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 戦 (sen, ikusa, tatakau) Meaning: battle">ikusa,
                                                        tataka(u)<p class="mb-0 mt-2">いくさ、 たたか(う)</p></a>
                                                <td class="jl-td-m align-middle">war, battle, match
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">79
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%b5%8c-kei-meaning-longitude-pass-thru/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 経 (kei) Meaning: longitude, pass thru">経</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%b5%8c-kei-meaning-longitude-pass-thru/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 経 (kei) Meaning: longitude, pass thru">kei
                                                        <p class="mb-0 mt-2">ケイ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%b5%8c-kei-meaning-longitude-pass-thru/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 経 (kei) Meaning: longitude, pass thru">he(ru),
                                                        ta(tsu)<p class="mb-0 mt-2">へ(る)、 た(つ)</p></a>
                                                <td class="jl-td-m align-middle">longitude, pass thru, expire, warp
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">80
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%80%9a-tsuu-tooru-meaning-traffic/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 通 (tsuu, tooru) traffic">通</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%80%9a-tsuu-tooru-meaning-traffic/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 通 (tsuu, tooru) traffic">tsuu<p
                                                            class="mb-0 mt-2">ツウ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%80%9a-tsuu-tooru-meaning-traffic/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 通 (tsuu, tooru) traffic">too(ru),
                                                        kayo(u)<p class="mb-0 mt-2">とお(る)、かよ(う)</p></a>
                                                <td class="jl-td-m align-middle">traffic, pass through, avenue, commute
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">81
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%a4%96-gai-soto-outside/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 外 (gai, soto) outside">外</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%a4%96-gai-soto-outside/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 外 (gai, soto) outside">gai, ge<p
                                                            class="mb-0 mt-2">ガイ、 ゲ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%a4%96-gai-soto-outside/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 外 (gai, soto) outside">soto, hoka,
                                                        hazu-, to-<p class="mb-0 mt-2">そと、 ほか、 はず(す)、 と-</p></a>
                                                <td class="jl-td-m align-middle">outside
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">82
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%9c%80-sai-mottomo-meaning-most/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 最 (sai, mottomo) Meaning: most">最</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%9c%80-sai-mottomo-meaning-most/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 最 (sai, mottomo) Meaning: most">sai
                                                        <p class="mb-0 mt-2">サイ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%9c%80-sai-mottomo-meaning-most/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 最 (sai, mottomo) Meaning: most">motto(mo)
                                                        <p class="mb-0 mt-2">もっと(も)</p></a>
                                                <td class="jl-td-m align-middle">utmost, most, extreme
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">83
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e8%a8%80-gen-koto-meaning-say/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 言 (gen, koto) say">言</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e8%a8%80-gen-koto-meaning-say/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 言 (gen, koto) say">gen, gon<p
                                                            class="mb-0 mt-2">ゲン、 ゴン</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e8%a8%80-gen-koto-meaning-say/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 言 (gen, koto) say">i(u), koto<p
                                                            class="mb-0 mt-2">い（う）、 こと</p></a>
                                                <td class="jl-td-m align-middle">say, word
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">84
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%b0%8f-shi-uji-meaning-family-name/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N1 Kanji: 氏 (shi, uji) Meaning: family name">氏</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%b0%8f-shi-uji-meaning-family-name/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N1 Kanji: 氏 (shi, uji) Meaning: family name">shi
                                                        <p class="mb-0 mt-2">シ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%b0%8f-shi-uji-meaning-family-name/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N1 Kanji: 氏 (shi, uji) Meaning: family name">uji
                                                        <p class="mb-0 mt-2">うじ</p></a>
                                                <td class="jl-td-m align-middle">family name, surname, clan
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">85
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%8f%be-gen-arawareru-meaning-present/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 現 (gen, arawareru) present">現</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%8f%be-gen-arawareru-meaning-present/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 現 (gen, arawareru) present">gen<p
                                                            class="mb-0 mt-2">ゲン</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%8f%be-gen-arawareru-meaning-present/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 現 (gen, arawareru) present">arawa(reru),
                                                        utsu(tsu)<p class="mb-0 mt-2">あらわ(れる)、 うつ(つ)</p></a>
                                                <td class="jl-td-m align-middle">present, existing, actual
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">86
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%90%86-ri-logic/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 理 (ri) logic">理</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%90%86-ri-logic/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 理 (ri) logic">ri<p
                                                            class="mb-0 mt-2">リ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%90%86-ri-logic/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 理 (ri) logic">
                                                        <p class="mb-0 mt-2"></p>
                                                    </a>
                                                <td class="jl-td-m align-middle">logic, arrangement, reason, justice,
                                                    truth
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">87
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e8%aa%bf-chou-shiraberu-tonou-meaning-tune/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 調 (chou, shiraberu, tonou) Meaning: tune">調</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e8%aa%bf-chou-shiraberu-tonou-meaning-tune/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 調 (chou, shiraberu, tonou) Meaning: tune">chou
                                                        <p class="mb-0 mt-2">チョウ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e8%aa%bf-chou-shiraberu-tonou-meaning-tune/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 調 (chou, shiraberu, tonou) Meaning: tune">shira(beru),
                                                        tono(u)<p class="mb-0 mt-2">しら(べる)、ととの(う)</p></a>
                                                <td class="jl-td-m align-middle">tune, tone, meter, prepare, investigate
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">88
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%bd%93-tai-karada-body/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 体 (tai, karada) body">体</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%bd%93-tai-karada-body/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 体 (tai, karada) body">tai<p
                                                            class="mb-0 mt-2">タイ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%bd%93-tai-karada-body/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 体 (tai, karada) body">karada<p
                                                            class="mb-0 mt-2">からだ</p></a>
                                                <td class="jl-td-m align-middle">body, substance, object, reality
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">89
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%8c%96-ka-meaning-change/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 化 (ka) change">化</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%8c%96-ka-meaning-change/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 化 (ka) change">ka, ke<p
                                                            class="mb-0 mt-2">カ、 ケ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%8c%96-ka-meaning-change/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 化 (ka) change">ba(keru), fu(keru)<p
                                                            class="mb-0 mt-2">ば(ける)、 ふ(ける)</p></a>
                                                <td class="jl-td-m align-middle">change, take the form of, influence,
                                                    enchant, delude, -ization
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">90
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%94%b0-den-ta-meaning-rice-field/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 田 (den, ta) meaning: rice field">田</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%94%b0-den-ta-meaning-rice-field/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 田 (den, ta) meaning: rice field">den
                                                        <p class="mb-0 mt-2">デン</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%94%b0-den-ta-meaning-rice-field/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 田 (den, ta) meaning: rice field">ta
                                                        <p class="mb-0 mt-2">た</p></a>
                                                <td class="jl-td-m align-middle">rice field, rice paddy
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">91
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%bd%93-tou-ataru-meaning-hit/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 当 (tou, ataru) hit">当</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%bd%93-tou-ataru-meaning-hit/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 当 (tou, ataru) hit">tou<p
                                                            class="mb-0 mt-2">トウ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%bd%93-tou-ataru-meaning-hit/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 当 (tou, ataru) hit">a(taru)<p
                                                            class="mb-0 mt-2">あ(たる)</p></a>
                                                <td class="jl-td-m align-middle">hit, right, appropriate
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">92
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%85%ab-hachi-yatsu-eight-8/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 八 (hachi, yatsu) eight, 8">八</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%85%ab-hachi-yatsu-eight-8/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 八 (hachi, yatsu) eight, 8">hachi<p
                                                            class="mb-0 mt-2">ハチ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%85%ab-hachi-yatsu-eight-8/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 八 (hachi, yatsu) eight, 8">ya(tsu),
                                                        you<p class="mb-0 mt-2">や(つ)、 よう</p></a>
                                                <td class="jl-td-m align-middle">eight, 8
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">93
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%85%ad-roku-mutsu-six-6/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 六 (roku, mutsu) six, 6">六</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%85%ad-roku-mutsu-six-6/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 六 (roku, mutsu) six, 6">roku<p
                                                            class="mb-0 mt-2">ロク</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e5%85%ad-roku-mutsu-six-6/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 六 (roku, mutsu) six, 6">mu(tsu), mui
                                                        <p class="mb-0 mt-2">む(つ)、 むい</p></a>
                                                <td class="jl-td-m align-middle">six, 6
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">94
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%b4%84-yaku-meaning-approximately/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 約 (yaku) Meaning: approximately">約</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%b4%84-yaku-meaning-approximately/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 約 (yaku) Meaning: approximately">yaku
                                                        <p class="mb-0 mt-2">ヤク</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e7%b4%84-yaku-meaning-approximately/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 約 (yaku) Meaning: approximately">tsuzu(maru)
                                                        <p class="mb-0 mt-2">つづ(まる)</p></a>
                                                <td class="jl-td-m align-middle">promise, approximately, shrink
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">95
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%b8%bb-shu-nushi-master/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 主 (shu, nushi) master">主</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%b8%bb-shu-nushi-master/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 主 (shu, nushi) master">shu<p
                                                            class="mb-0 mt-2">シュ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%b8%bb-shu-nushi-master/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 主 (shu, nushi) master">nushi, omo<p
                                                            class="mb-0 mt-2">ぬし、 おも</p></a>
                                                <td class="jl-td-m align-middle">lord, chief, master, main thing,
                                                    principal
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">96
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%a1%8c-dai-topic-subject/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 題 (dai) topic, subject">題</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%a1%8c-dai-topic-subject/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 題 (dai) topic, subject">dai<p
                                                            class="mb-0 mt-2">ダイ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%a1%8c-dai-topic-subject/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 題 (dai) topic, subject">
                                                        <p class="mb-0 mt-2"></p>
                                                    </a>
                                                <td class="jl-td-m align-middle">topic, subject
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">97
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%b8%8b-ka-shita-below-down/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 下 (ka, shita) below, down">下</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%b8%8b-ka-shita-below-down/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 下 (ka, shita) below, down">ka, ge<p
                                                            class="mb-0 mt-2">カ、 ゲ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e4%b8%8b-ka-shita-below-down/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N5 Kanji: 下 (ka, shita) below, down">shita,
                                                        shimo, moto, sa(geru), kuda(ru), o(rosu)<p class="mb-0 mt-2">した、
                                                            しも、 もと、 さ(げる)、 くだ(る)、 お(ろす)</p></a>
                                                <td class="jl-td-m align-middle">below, down, descend, give, low,
                                                    inferior
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">98
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%a6%96-shu-kubi-meaning-neck/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 首 (shu, kubi) Meaning: neck">首</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%a6%96-shu-kubi-meaning-neck/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 首 (shu, kubi) Meaning: neck">shu<p
                                                            class="mb-0 mt-2">シュ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e9%a6%96-shu-kubi-meaning-neck/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 首 (shu, kubi) Meaning: neck">kubi<p
                                                            class="mb-0 mt-2">くび</p></a>
                                                <td class="jl-td-m align-middle">neck
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">99
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%84%8f-i-idea-mind/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 意 (i) idea, mind">意</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%84%8f-i-idea-mind/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 意 (i) idea, mind">i<p
                                                            class="mb-0 mt-2">イ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%84%8f-i-idea-mind/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N4 Kanji: 意 (i) idea, mind">
                                                        <p class="mb-0 mt-2"></p>
                                                    </a>
                                                <td class="jl-td-m align-middle">idea, mind, heart, taste, thought
                                            <tr>
                                                <td colspan=5><span
                                                        class="ezoic-autoinsert-video ezoic-long_content"></span>
                                            <tr class=jl-row>
                                                <td class="jl-td-num align-middle text-center">100
                                                <td class="jl-td-k align-middle text-center"><a target=_blank
                                                        class="jl-link jp"
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%b3%95-hou-nori-meaning-method-law/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 法 (hou, nori) Meaning: method, law">法</a>
                                                <td class="jl-td-on align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%b3%95-hou-nori-meaning-method-law/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 法 (hou, nori) Meaning: method, law">hou
                                                        <p class="mb-0 mt-2">ホウ</p></a>
                                                <td class="jl-td-kun align-middle"><a target=_blank class=jl-link
                                                        href=https://jlptsensei.com/learn-japanese-kanji/%e6%b3%95-hou-nori-meaning-method-law/
                                                        rel="bookmark noopener noreferrer"
                                                        title="Learn JLPT N3 Kanji: 法 (hou, nori) Meaning: method, law">nori
                                                        <p class="mb-0 mt-2">のり</p></a>
                                                <td class="jl-td-m align-middle">method, law, rule, principle, model,
                                                    system
                                    </table>
                                </div><span class="ezoic-autoinsert-ad ezoic-long_content"></span><span
                                    data-ez-ph-id=999995
                                    style="margin-right:auto!important;min-width:250px;max-width:728px;line-height:0;float:none!important;margin-top:15px!important;min-height:400px;padding:0;background:rgba(128,128,128,5%)!important;margin-left:auto!important;text-align:center!important;background-color:rgba(128,128,128,5%)!important;border:0 solid #ddd!important;margin-bottom:15px!important;display:block!important;width:728px"></span>
                                <div class=row>
                                    <div class="col-lg-4 mt-3 mb-5 text-center">
                                        <p class=text-center><a target=_blank
                                                href=https://jlptsensei.com/jlpt-n5-kanji-list/
                                                rel="category tag noopener noreferrer" title="JLPT N5 kanji list"><img
                                                    decoding=async class=ezlazyload width=200 height=200
                                                    alt="JLPT N5 kanji list"
                                                    src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22300%22%20height=%22300%22%3E%3C/svg%3E"
                                                    ezimgfmt="rs rscb1 src ng ngcb1"
                                                    data-ezsrc=https://jlptsensei.com/wp-content/uploads/2019/11/jlpt-n5-kanji-list-漢字-bg-300x300.png><noscript><img
                                                        decoding=async class=lazyload width=200 height=200
                                                        alt="JLPT N5 kanji list"
                                                        src=https://jlptsensei.com/wp-content/uploads/2019/11/jlpt-n5-kanji-list-漢字-bg-300x300.png></noscript></a>
                                        <p><a class="btn btn-dark text-white"
                                                href=https://jlptsensei.com/jlpt-n5-kanji-list/ rel="category tag">N5
                                                kanji list</a>
                                    </div>
                                    <div class="col-lg-4 mt-3 mb-5 text-center">
                                        <p class=text-center><a target=_blank
                                                href=https://jlptsensei.com/jlpt-n4-kanji-list/
                                                rel="category tag noopener noreferrer" title="JLPT N4 kanji list"><img
                                                    decoding=async class=ezlazyload width=200 height=200
                                                    alt="JLPT N4 kanji list"
                                                    src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22300%22%20height=%22300%22%3E%3C/svg%3E"
                                                    ezimgfmt="rs rscb1 src ng ngcb1"
                                                    data-ezsrc=https://jlptsensei.com/wp-content/uploads/2019/11/jlpt-n4-kanji-list-漢字-bg-300x300.png><noscript><img
                                                        decoding=async class=lazyload width=200 height=200
                                                        alt="JLPT N4 kanji list"
                                                        src=https://jlptsensei.com/wp-content/uploads/2019/11/jlpt-n4-kanji-list-漢字-bg-300x300.png></noscript></a>
                                        <p><a class="btn btn-dark text-white"
                                                href=https://jlptsensei.com/jlpt-n4-kanji-list/ rel="category tag">N4
                                                kanji list</a>
                                    </div>
                                    <div class="col-lg-4 mt-3 mb-5 text-center">
                                        <p class=text-center><a target=_blank
                                                href=https://jlptsensei.com/jlpt-n3-kanji-list/
                                                rel="category tag noopener noreferrer" title="JLPT N3 kanji list"><img
                                                    decoding=async class=ezlazyload width=200 height=200
                                                    alt="JLPT N3 kanji list"
                                                    src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22300%22%20height=%22300%22%3E%3C/svg%3E"
                                                    ezimgfmt="rs rscb1 src ng ngcb1"
                                                    data-ezsrc=https://jlptsensei.com/wp-content/uploads/2019/11/jlpt-n3-kanji-list-漢字-bg-300x300.png><noscript><img
                                                        decoding=async class=lazyload width=200 height=200
                                                        alt="JLPT N3 kanji list"
                                                        src=https://jlptsensei.com/wp-content/uploads/2019/11/jlpt-n3-kanji-list-漢字-bg-300x300.png></noscript></a>
                                        <p><a class="btn btn-dark text-white"
                                                href=https://jlptsensei.com/jlpt-n3-kanji-list/ rel="category tag">N3
                                                kanji list</a>
                                    </div>
                                </div>
                            </section>
                            <footer class=entry-footer></footer>
                            <article class="author-card clearfix"><a class=author-link
                                    href=https://jlptsensei.com/author/cruise-bogedin />
                                <div class="ezlazyload avatar-container"
                                    style="background-image:url(data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%221%22%20height=%221%22%3E%3C/svg%3E)"
                                    data-ezbg="https://jlptsensei.com/ezoimgfmt/secure.gravatar.com/avatar/08235b8fb22225f922ef433697f8c080?d=mm&amp;ezimgfmt=rs%3Adevice%2Frscb1-1&amp;r=pg&amp;s=96">
                                </div></a>
                                <div class=author-info>
                                    <header>
                                        <p class=h3><a href=https://jlptsensei.com/author/cruise-bogedin/
                                                rel=author>Cruise Bogedin</a>
                                    </header>
                                    <p>Cruise works full time at a Japanese company in Nagoya, Japan. He worked for 4
                                        years as a University lecturer teaching English before making the move to a 100%
                                        Japanese speaking environment to continue improving his Japanese. In his free
                                        time, he is either cycling around Japan making YouTube videos or adding new
                                        Japanese lessons to this blog.</p><span
                                        class="ezoic-autoinsert-video ezoic-longer_content"></span>
                                </div>
                            </article>
                            <div class="adsense-cont adsense-matched-content my-3"><span
                                    id=ezoic-pub-ad-placeholder-143></span><span data-ez-ph-id=143
                                    style="min-width:100%;max-width:300px;padding:0;border:0 solid #ddd!important;margin-top:0!important;margin-right:0!important;min-height:480px;background:rgba(128,128,128,5%)!important;margin-left:0!important;display:inline-block;background-color:rgba(128,128,128,5%)!important;float:none!important;margin-bottom:0!important"></span>
                            </div>
                        </article>
                    </main>
                    <aside id=sidebar class=col-lg-4>
                        <div id=custom_html-3 class="widget_text widget widget_custom_html"><span
                                id=ezoic-pub-ad-placeholder-144 class=ezoic-adpicker-ad></span><span data-ez-ph-id=144
                                style=margin-top:15px!important;margin-bottom:15px!important;margin-left:auto!important;text-align:center!important;min-width:336px;min-height:280px;max-width:100%!important;line-height:0;float:none!important;margin-right:auto!important;display:block!important;padding:0></span>
                            <h2 class=widget-title>Member Benefits</h2>
                            <div class="textwidget custom-html-widget">
                                <p class="aboug-img text-center"><img class="ezlazyload rounded-circle"
                                        src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22200%22%20height=%22200%22%3E%3C/svg%3E"
                                        alt="about jlptsensei.com" ezimgfmt="rs rscb1 src ng ngcb1"
                                        data-ezsrc=https://jlptsensei.com/wp-content/uploads/2019/08/cruise-jlpt-sensei-200x200.jpg>
                                <p class=about-copy>JLPT Sensei is the best website to learn Japanese and study for the
                                    JLPT!
                                <p class="about-copy mb-2">Become a <a href=/member-benefits/ target=_blank
                                        rel=noopener>member</a> for:
                                <ul>
                                    <li><b>unlimited downloads</b> of our e-books, flashcards, and study guides.
                                    <li>Completely <b>ad-free</b> website!
                                </ul>
                            </div>
                        </div>
                        <div id=media_image-2 class="widget widget_media_image"><a href=/member-benefits /><img
                                width=300 height=169
                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22300%22%20height=%22169%22%3E%3C/svg%3E"
                                class="ezlazyload image wp-image-21400 d-block mx-auto attachment-bones-thumb-300x169 size-bones-thumb-300x169"
                                alt="jlpt book download study lists" style=max-width:100%;height:auto decoding=async
                                data-ezsrcset="https://jlptsensei.com/wp-content/uploads/2020/05/jlpt-book-download-study-lists-300x169.png 300w,https://jlptsensei.com/wp-content/uploads/2020/05/jlpt-book-download-study-lists-600x338.png 600w,https://jlptsensei.com/wp-content/uploads/2020/05/jlpt-book-download-study-lists-1200x675.png 1200w,https://jlptsensei.com/wp-content/uploads/2020/05/jlpt-book-download-study-lists-768x432.png 768w,https://jlptsensei.com/wp-content/uploads/2020/05/jlpt-book-download-study-lists-1536x864.png 1536w,https://jlptsensei.com/wp-content/uploads/2020/05/jlpt-book-download-study-lists-900x506.png 900w,https://jlptsensei.com/wp-content/uploads/2020/05/jlpt-book-download-study-lists-1320x743.png 1320w,https://jlptsensei.com/wp-content/uploads/2020/05/jlpt-book-download-study-lists.png 1600w"
                                sizes="(max-width: 300px) 100vw, 300px" ezimgfmt="rs rscb1 src ng ngcb1 srcset"
                                data-ezsrc=https://jlptsensei.com/wp-content/uploads/2020/05/jlpt-book-download-study-lists-300x169.png></a>
                        </div>
                        <div id=text-2 class="widget widget_text">
                            <div class=textwidget>
                                <div class="adsense-cont adsense-responsive adsense-sidebar-atf"><span
                                        id=ezoic-pub-ad-placeholder-101></span><span data-ez-ph-id=101
                                        style="margin-right:auto!important;min-height:0!important;padding:0;margin-top:0!important;display:block!important;text-align:center!important;min-width:300px;width:300px;background:0 0!important;float:none!important;margin-bottom:0!important;margin-left:auto!important;max-width:100%!important;line-height:0"></span>
                                </div>
                            </div>
                        </div>
                        <div id=text-4 class="widget widget_text">
                            <h2 class=widget-title>Learn Japanese</h2>
                            <div class=textwidget>
                                <div id=side-grammar>
                                    <h2 class="widget-title text-dark bg-white my-3">JLPT Grammar <span
                                            class="jp st-jp bg-danger">文法</span></h2><a
                                        class="block-link block-link-dark bg-n5"
                                        href=https://jlptsensei.com/jlpt-n5-grammar-list />JLPT N5 grammar list</a><a
                                        class="block-link block-link-dark bg-n4"
                                        href=https://jlptsensei.com/jlpt-n4-grammar-list />JLPT N4 grammar list</a><a
                                        class="block-link block-link-dark bg-n3"
                                        href=https://jlptsensei.com/jlpt-n3-grammar-list />JLPT N3 grammar list</a><a
                                        class="block-link block-link-dark bg-n2"
                                        href=https://jlptsensei.com/jlpt-n2-grammar-list />JLPT N2 grammar list</a><a
                                        class="block-link block-link-dark bg-n1"
                                        href=https://jlptsensei.com/jlpt-n1-grammar-list />JLPT N1 grammar list</a><a
                                        class="btn block-link btn-block btn-danger"
                                        href=https://jlptsensei.com/complete-jlpt-grammar-list />JLPT Grammar List (all
                                    levels)</a>
                                </div>
                                <div id=side-kanji>
                                    <h2 class="widget-title text-dark bg-white my-3">JLPT Kanji <span
                                            class="jp st-jp bg-danger">漢字</span></h2><a
                                        class="block-link block-link-dark bg-n5"
                                        href=https://jlptsensei.com/jlpt-n5-kanji-list />JLPT N5 kanji list</a><a
                                        class="block-link block-link-dark bg-n4"
                                        href=https://jlptsensei.com/jlpt-n4-kanji-list />JLPT N4 kanji list</a><a
                                        class="block-link block-link-dark bg-n3"
                                        href=https://jlptsensei.com/jlpt-n3-kanji-list />JLPT N3 kanji list</a><a
                                        class="block-link block-link-dark bg-n2"
                                        href=https://jlptsensei.com/jlpt-n2-kanji-list />JLPT N2 kanji list</a><a
                                        class="btn block-link btn-block btn-danger"
                                        href=https://jlptsensei.com/kanji-list-ordered-by-frequency-of-use />Most
                                    frequently used kanji</a>
                                </div>
                            </div><span class="ezoic-autoinsert-ad ezoic-sidebar_bottom"></span>
                        </div>
                        <div id=custom_html-6 class="widget_text widget widget_custom_html">
                            <h2 class=widget-title>JLPT TEST DATES</h2>
                            <div class="textwidget custom-html-widget">
                                <ul>
                                    <li>Sunday, Jul 2, 2023
                                    <li>Sunday, Dec 3, 2023
                                </ul>
                                <p class=text-center><a class="btn btn-success text-white"
                                        href=https://jlptsensei.com/downloads/jlpt-n3-practice-test />Free practice
                                    tests</a>
                            </div>
                        </div>
                        <div id=text-7 class="widget widget_text">
                            <h2 class=widget-title>Disclaimer</h2>
                            <div class=textwidget>
                                <p><span id=ezoic-pub-ad-placeholder-123 class=ezoic-adpicker-ad></span><span
                                        data-ez-ph-id=123
                                        style="display:block!important;margin-top:0!important;margin-bottom:0!important;min-width:300px;min-height:0!important;padding:0;margin-left:auto!important;line-height:0;background:0 0!important;float:none!important;margin-right:auto!important;text-align:center!important;max-width:100%!important;width:300px"></span>JLPT
                                    Sensei participates in the Amazon Services LLC Associates Program, an affiliate
                                    advertising program designed to provide a means for sites to earn advertising fees
                                    by advertising and linking to Amazon.com / Amazon.co.jp. JLPT Sensei also
                                    participates in other affiliate programs to earn a commission at no extra cost to
                                    you.
                                <p>JLPT Sensei is not officially affiliated with the JLPT in any way and is only
                                    intended to serve as a supplementary study resource. We try to make our JLPT study
                                    guides, lessons, and other learning materials as accurate as possible, but this blog
                                    is a constant work in progress and some errors may appear from time to time.
                                    Therefore, JLPT Sensei does not assume any responsibilities or liability for any
                                    errors or omissions in the content of this site.
                                <p>To help JLPT Sensei continue improving, if you find any errors, please report them to
                                    us.
                            </div>
                        </div>
                        <div id=text-6 class="widget widget_text">
                            <div class=textwidget>
                                <div class="adsense-cont adsense-responsive adsense-sidebar-btf text-center"><span
                                        id=ezoic-pub-ad-placeholder-102></span><span data-ez-ph-id=102
                                        style="background:0 0!important;padding:0;margin-top:0!important;margin-bottom:0!important;margin-left:auto!important;display:block!important;float:none!important;margin-right:auto!important;width:300px;line-height:0;text-align:center!important;min-width:300px;min-height:0!important;max-width:100%!important"></span>
                                </div>
                            </div>
                        </div><span id=ezoic-pub-ad-placeholder-124 class=ezoic-adpicker-ad></span>
                    </aside>
                </div>
            </div>
        </div><span id=ezoic-pub-ad-placeholder-122 class=ezoic-adpicker-ad></span><span data-ez-ph-id=122
            style=margin-right:auto!important;margin-bottom:15px!important;display:block!important;min-height:90px;line-height:0;padding:0;margin-top:15px!important;margin-left:auto!important;text-align:center!important;min-width:728px;max-width:100%!important;float:none!important></span>
        <section id=footer-mailing-list class="mt-md-4 bg-info text-white text-center">
            <h5 class="p-3 bg-dark">Join our subscription list to get the latest lessons / content</h5>
            <div class="p-2 clearfix mx-auto" style=max-width:618px>
                <div class=mailpoet_form_popup_overlay></div>
                <div id=mailpoet_form_1 class="mailpoet_form
mailpoet_form_php
mailpoet_form_position_
mailpoet_form_animation_">
                    <style>
                        #mailpoet_form_1 .mailpoet_form {
                            clear: both
                        }

                        #mailpoet_form_1 .mailpoet_paragraph {
                            line-height: 20px;
                            float: left;
                            margin: 20px 10px
                        }

                        #mailpoet_form_1 .mailpoet_divider+.mailpoet_paragraph {
                            float: none;
                            clear: both;
                            margin-top: 25px
                        }

                        #mailpoet_form_1 .mailpoet_segment_label,
                        #mailpoet_form_1 .mailpoet_text_label,
                        #mailpoet_form_1 .mailpoet_textarea_label,
                        #mailpoet_form_1 .mailpoet_select_label,
                        #mailpoet_form_1 .mailpoet_radio_label,
                        #mailpoet_form_1 .mailpoet_checkbox_label,
                        #mailpoet_form_1 .mailpoet_list_label,
                        #mailpoet_form_1 .mailpoet_date_label {
                            display: block;
                            font-weight: 700
                        }

                        #mailpoet_form_1 .mailpoet_text,
                        #mailpoet_form_1 .mailpoet_textarea,
                        #mailpoet_form_1 .mailpoet_select,
                        #mailpoet_form_1 .mailpoet_date_month,
                        #mailpoet_form_1 .mailpoet_date_day,
                        #mailpoet_form_1 .mailpoet_date_year,
                        #mailpoet_form_1 .mailpoet_date {
                            display: block
                        }

                        #mailpoet_form_1 .mailpoet_text,
                        #mailpoet_form_1 .mailpoet_textarea {
                            width: 280px
                        }

                        #mailpoet_form_1 .mailpoet_checkbox {}

                        #mailpoet_form_1 .mailpoet_submit {
                            margin-top: 15px;
                            font-size: 20px;
                            padding: 12px 10px;
                            background: #333;
                            border: 0;
                            color: #fff;
                            display: block;
                            clear: both;
                            margin-left: auto;
                            margin-right: auto
                        }

                        #mailpoet_form_1 .mailpoet_submit:hover,
                        #mailpoet_form_1 .mailpoet_submit:active {
                            background: #000
                        }

                        #mailpoet_form_1 .mailpoet_divider {
                            display: none
                        }

                        #mailpoet_form_1 .mailpoet_message {}

                        #mailpoet_form_1 .mailpoet_validate_success {
                            color: #468847
                        }

                        #mailpoet_form_1 .mailpoet_validate_error {
                            color: #b94a48
                        }

                        #mailpoet_form_1 {}

                        #mailpoet_form_1 .mailpoet_message {
                            margin: 0;
                            padding: 0 20px
                        }

                        #mailpoet_form_1 .mailpoet_paragraph.last {
                            margin-bottom: 0
                        }

                        @media(max-width:500px) {
                            #mailpoet_form_1 {
                                background-image: none
                            }
                        }

                        @media(min-width:500px) {
                            #mailpoet_form_1 .last .mailpoet_paragraph:last-child {
                                margin-bottom: 0
                            }
                        }

                        @media(max-width:500px) {
                            #mailpoet_form_1 .mailpoet_form_column:last-child .mailpoet_paragraph:last-child {
                                margin-bottom: 0
                            }
                        }
                    </style>
                    <form target=_self method=post
                        action="https://jlptsensei.com/wp-admin/admin-post.php?action=mailpoet_subscription_form"
                        class="mailpoet_form mailpoet_form_form mailpoet_form_php" novalidate data-delay
                        data-exit-intent-enabled data-font-family data-cookie-expiration-time><input type=hidden
                            name=data[form_id] value=1> <input type=hidden name=token value=4c9e8e0c29> <input
                            type=hidden name=api_version value=v1> <input type=hidden name=endpoint value=subscribers>
                        <input type=hidden name=mailpoet_method value=subscribe> <label class=mailpoet_hp_email_label
                            style=display:none!important>Please leave this field empty<input type=email
                                name=data[email]></label>
                        <div class=mailpoet_paragraph><label for=form_first_name_1 class=mailpoet_text_label
                                data-automation-id=form_first_name_label>Name <span
                                    class=mailpoet_required>*</span></label><input autocomplete=given-name
                                class=mailpoet_text id=form_first_name_1
                                name="data[form_field_NzBiZGE3YmE1NjA3X2ZpcnN0X25hbWU=]" title=Name
                                data-automation-id=form_first_name
                                data-parsley-names='["Please specify a valid name.","Addresses in names are not permitted, please add your name instead."]'
                                data-parsley-required=true data-parsley-errors-container=.mailpoet_error_first_name_
                                data-parsley-required-message="This field is required."></div>
                        <div class=mailpoet_paragraph><label for=form_email_1 class=mailpoet_text_label
                                data-automation-id=form_email_label>Email <span
                                    class=mailpoet_required>*</span></label><input type=email autocomplete=email
                                class=mailpoet_text id=form_email_1 name=data[form_field_ZWJhMWYzM2E0NTg2X2VtYWls]
                                title=Email data-automation-id=form_email data-parsley-required=true
                                data-parsley-minlength=6 data-parsley-maxlength=150
                                data-parsley-type-message="This value should be a valid email."
                                data-parsley-errors-container=.mailpoet_error_email_
                                data-parsley-required-message="This field is required."></div>
                        <div class=mailpoet_spacer style=height:1px>
                            <div class=mailpoet_divider data-automation-id=form_divider
                                style=border-top-style:solid;border-top-width:1px;border-top-color:#000;height:1px;width:100%>
                            </div>
                        </div>
                        <div class=mailpoet_paragraph><input type=submit class=mailpoet_submit value=Subscribe!
                                data-automation-id=subscribe-submit-button style=border-color:transparent><span
                                class=mailpoet_form_loading><span class=mailpoet_bounce1></span><span
                                    class=mailpoet_bounce2></span><span class=mailpoet_bounce3></span></span></div>
                        <div class=mailpoet_message>
                            <p class=mailpoet_validate_success style=display:none>Check your inbox or spam folder to
                                confirm your subscription.
                            <p class=mailpoet_validate_error style=display:none>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <footer id=main-footer>
            <div class=container>
                <div class="row py-3">
                    <div class="col-lg-4 py-3">
                        <nav role=navigation class=nav-footer-links>
                            <ul id=menu-footer-menu class=footer-nav>
                                <li id=menu-item-1000
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-1000">
                                    <a href=https://jlptsensei.com />Home</a>
                                <li id=menu-item-22101
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-22101"><a
                                        href=https://jlptsensei.com/about />About Us</a>
                                <li id=menu-item-32033
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-32033"><a
                                        href=https://jlptsensei.com/member-benefits />Downloads</a>
                                <li id=menu-item-21338
                                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-21338">
                                    <a href=https://jlptsensei.com/ebooks />ebooks</a>
                                <li id=menu-item-3513
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-3513">
                                    <a rel=privacy-policy href=https://jlptsensei.com/privacy-policy />Privacy
                                    Policy</a>
                                <li id=menu-item-3512
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3512"><a
                                        href=https://jlptsensei.com/terms-and-conditions />Terms and Conditions</a>
                            </ul>
                        </nav>
                    </div>
                    <div class="col-lg-4 py-3">
                        <p id=logo itemscope itemtype=http://schema.org/Organization><a href=https://jlptsensei.com
                                rel=home itemprop=url><img class=footer-logo alt="JLPT Sensei Logo"
                                    src=https://jlptsensei.com/wp-content/uploads/2017/09/JLPT-Sensei-logo-circle-red-200x200.png
                                    ezimgfmt="rs rscb1 src ng ngcb1"></a>
                        <p><a target=_blank href=https://jlptvietnam.com />【 Tiếng Việt 】</a> ・ <a target=_blank
                                href=https://guiadejapones.com />【 Español 】</a>
                    </div>
                    <div class="col-lg-4 py-3 text-center">
                        <p>© 2015~2024 JLPT Sensei.<br>Created by <a href=https://www.youtube.com/twowheelcruise
                                target=_blank>Two Wheel Cruise</a>
                        <h6 class=jp>日本語能力試験に合格しましょう！</h6>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    <link rel=preload id=mailpoet_public-css
        href="//jlptsensei.com/wp-content/plugins/mailpoet/assets/dist/css/mailpoet-public.6d11f60f.css?ez_used_css_s=110"
        media=all as=style onload="this.onload=null;this.rel='stylesheet'"><noscript>
        <link rel=stylesheet id=mailpoet_public-css
            href="//jlptsensei.com/wp-content/plugins/mailpoet/assets/dist/css/mailpoet-public.6d11f60f.css?ff=1&amp;wps=false&amp;ez_used_css_s=110"
            media=all>
    </noscript>
    <script type=text/ez-screx
        src="//jlptsensei.com/wp-content/plugins/sg-cachepress/assets/js/lazysizes.min.js?screx=1&amp;sxcb=1a"
        id=siteground-optimizer-lazy-sizes-js-js></script>
    <script type=text/ez-screx src="//jlptsensei.com/wp-includes/js/jquery/jquery.min.js?screx=1&amp;sxcb=1a"
        id=jquery-core-js></script>
    <script type=text/ez-screx src="//jlptsensei.com/wp-includes/js/jquery/jquery-migrate.min.js?screx=1&amp;sxcb=1a"
        id=jquery-migrate-js></script>
    <script type=text/ez-screx
        id=mailpoet_public-js-extra>var MailPoetForm={"ajax_url":"https:\/\/jlptsensei.com\/wp-admin\/admin-ajax.php","is_rtl":"","ajax_common_error_message":"An error has happened while performing a request, please try again later."};</script>
    <script type=text/ez-screx
        src="//jlptsensei.com/wp-content/plugins/mailpoet/assets/dist/js/public.js?screx=1&amp;sxcb=1a"
        id=mailpoet_public-js defer data-wp-strategy=defer></script>
    <div id=cookie-notice role=dialog class="cookie-notice-hidden cookie-revoke-hidden cn-position-bottom"
        aria-label="Cookie Notice" style=background-color:rgba(50,50,58,.8)>
        <div class=cookie-notice-container style=color:#fff><span id=cn-notice-text class=cn-text-container>We use
                cookies to ensure that we give you the best experience on our website. If you continue to use this site
                we will assume that you are happy with it.</span><span id=cn-notice-buttons
                class=cn-buttons-container><a href=# id=cn-accept-cookie data-cookie-set=accept
                    class="cn-set-cookie cn-button cn-button-custom button" aria-label=Ok>Ok</a><a href=#
                    id=cn-refuse-cookie data-cookie-set=refuse class="cn-set-cookie cn-button cn-button-custom button"
                    aria-label=No>No</a></span><span id=cn-close-notice data-cookie-set=accept class=cn-close-icon
                title=No></span></div>
    </div><span id=ezoic-pub-ad-placeholder-110 class=ezoic-adpicker-ad></span>
    <script
        src="https://jlptsensei.com/ezossp/https/cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js?screx=1&amp;sxcb=1a"
        integrity=sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1 crossorigin=anonymous
        type=text/ez-screx></script>
    <script
        src="https://jlptsensei.com/ezossp/https/stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js?screx=1&amp;sxcb=1a"
        integrity=sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM crossorigin=anonymous
        type=text/ez-screx></script>
    <div id=amzn-assoc-ad-332142b7-9be7-40f5-af3b-5647ce9800ed></div>
    <div class="ezmob-footer ezoic-floating-bottom ezo_ad ezmob-footer-desktop" id=ezmobfooter>
        <center><span id=ezoic-pub-ad-placeholder-100></span><span data-ez-ph-id=100
                style=float:none!important;display:inline-block;min-width:0;min-height:90px;max-width:100%!important;line-height:0;padding:0></span><span
                class=ezmob-footer-close-wrap id=ezmob-footer-close style=display:none><span class=ezmob-footer-close
                    onclick=__ez_close_anchor() title=close></span><span class=ezoicwhat><img
                        src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2218%22%20height=%2218%22%3E%3C/svg%3E"
                        title=ezoic class="ezlazyload ezmob-anchor-img" ezimgfmt="rs rscb1 src ng ngcb1"
                        data-ezsrc=https://jlptsensei.com/ezoimgfmt/go.ezodn.com/utilcave_com/ezoic.png></span></span>
        </center>
    </div>
    <div id=ez-sidebar-wall-left class=ez-sidebar-wall style=left:0>
        <div class=ez-sidebar-wall-ad><span id=ezoic-pub-ad-placeholder-975></span><span data-ez-ph-id=975
                style=display:inline-block;min-width:160px;min-height:600px;max-width:100%!important;padding:0;float:none!important;margin-left:0!important;margin-bottom:0!important;line-height:0;margin-top:0!important;margin-right:0!important></span><span
                class=ez-rail-close id=ez-rail-close-left style=top:-21px;left:0;display:none
                onclick=__ez_close_rail(this.parentElement.parentElement.id)>x</span></div>
    </div>
    <div id=ez-sidebar-wall-right class=ez-sidebar-wall style=right:0>
        <div class=ez-sidebar-wall-ad><span id=ezoic-pub-ad-placeholder-976></span><span data-ez-ph-id=976
                style=margin-top:0!important;margin-right:0!important;margin-left:0!important;min-height:600px;line-height:0;padding:0;float:none!important;margin-bottom:0!important;display:inline-block;min-width:160px;max-width:100%!important></span><span
                class=ez-rail-close id=ez-rail-close-right style=top:-21px;right:0;display:none
                onclick=__ez_close_rail(this.parentElement.parentElement.id)>x</span></div>
    </div><span id=ezoic-pub-outstream-placeholder class=ezoic-outstream></span>
    <script async src="https://g.ezodn.com/cmp/v2/v.js?v=4"></script>
    <script>(function () {
            if (typeof document.body === 'undefined' || document.body === null) { return; }
            var attachEvent = function (element, evt, func) { if (element.addEventListener) { element.addEventListener(evt, func, false); } else { element.attachEvent("on" + evt, func); } }; attachEvent(document.body, "ezVigImpression", function (e) { if (typeof (_ezaq) !== "undefined" && typeof e === "object") { __ez.pel.AddAndFire(e.slot, [(new __ezDotData(e.key, e.value))]); } });
        })();</script>
    <script>window.__ez_vig_close_wrapper = function (closeFunc, urlAddition) {
            closeFunc(); var vc = { "enabled": false, "useVignetteLoader": true, "fireEventName": "ezVigImpression", "impressionSource": "anchor", "urlAddition": "utm_content=anc-true", "disableFloor": true, "eventHandlerTest": false }; if (typeof urlAddition == 'string') { vc.urlAddition = urlAddition; }
            var v = newEzVignette(vc); v.handleClick();
        };</script>
    <script
        data-cfasync=false>!function () { var e = function (e, t) { for (var r = 0; r < t.length; r++) { var n = t[r]; if (0 == n.complete || void 0 !== n.readyState && n.readyState < 4) { var o = n.getAttribute("src") || n.currentSrc; void 0 !== n.readyState && 0 == n.readyState ? n.addEventListener("loadstart", (function (e) { var t = e.currentTarget.getAttribute("src") || e.currentSrc; window.ezorqs(e, t) })) : (o = n.getAttribute("src") || n.currentSrc, window.ezorqs(n, o)), n.addEventListener("load", (function (e) { var t = e.currentTarget.getAttribute("src") || e.srcElement.currentSrc; window.ezorqe(e, t) })), n.addEventListener("loadeddata", (function (e) { var t = e.currentTarget.getAttribute("src") || e.srcElement.currentSrc; window.ezorqe(e, t) })), n.addEventListener("error", (function (e) { var t = e.currentTarget.getAttribute("src") || e.srcElement.currentSrc; window.ezorqe(e, t) })) } } }; function t(e) { for (var t = 0; t < document.styleSheets.length; t++)if (document.styleSheets[t].href == e) return !0; return !1 } __ez_addAllListeners = function () { e(0, document.querySelectorAll("img")), e(0, document.querySelectorAll("video")), e(0, document.querySelectorAll("audio")), function (e) { for (var r = 0; r < e.length; r++) { var n = e[r]; if (("preload" == n.getAttribute("rel") || "stylesheet" == n.getAttribute("rel")) && null != n.getAttribute("href") && t(n.getAttribute("href"))) { window.ezorqs(n, n.getAttribute("href")); var o = document.createElement("img"); o.onerror = function (e) { void 0 !== e.path && void 0 !== e.path[0].currentSrc ? window.ezorqe(n, e.path[0].currentSrc) : void 0 !== e.srcElement && void 0 !== e.srcElement.href && window.ezorqe(n, e.srcElement.href) }, o.src = n.getAttribute("href") } } }(document.querySelectorAll("link")), void 0 !== window.__ez.ssaf && window.__ez.ssaf.indexOf(16) > -1 && void 0 !== window.__ez.sshsdef && !1 === window.__ez.sshsdef && Element.prototype.addEventListener && ("function" == typeof window.onload && (window.addEventListener("load", window.onload), window.onload = null), "function" == typeof document.onload && (document.addEventListener.addEventListener("load", document.onload), document.onload = null)) }, __ez.queue.addFunc("__ez_addAllListeners", "__ez_addAllListeners", null, !1, ["/detroitchicago/tulsa.js"], !0, !0, !0, !0) }();</script>
    <script>__ez.queue.addFile('/tardisrocinante/css_onload.js', '/tardisrocinante/css_onload.js?gcb=2&cb=1', false, [], true, false, true, false);</script>
    <script
        data-cfasync=false>__ez.queue.addFile('/tardisrocinante/script_delay.js', '/tardisrocinante/script_delay.js?gcb=2&cb=2', false, ['/tardisrocinante/screx.js'], true, false, true, false);</script>
    <script>__ez.queue.addFile('/beardeddragon/turtle.js', '/beardeddragon/turtle.js?gcb=2&cb=54', true, ['/beardeddragon/axolotl.js'], true, false, true, false);</script>
    <script>function renderEzoicOutstreamVideoContent() {
            var videoObject = { "AdUnit": "jlptsensei_com-outstream-video-1", "AdsEnabled": 0, "DelayBetweenAdRequest": 0, "DomainId": 0, "FloatPosition": 0, "IsAutoPlay": true, "IsFloating": true, "IsLoop": true, "PlayerId": "ez-o", "PublisherVideoContentShare": { "IsEzoicOwnedVideo": false, "IsGenericInstream": false, "IsOutstream": true }, "VideoPlaceholderId": 15, "IsMagicEmbed": false, "VideoContentId": "6806692413811506580-outstream", "FallbackVideoContentId": "", "Title": "", "Description": "", "PreviewImage": "", "VideoDurationMs": 0 }; if (typeof ezVideoPlayer === "undefined") { __ez.queue.addFile("/beardeddragon/wyvern.js", '/beardeddragon/wyvern.js?cb=97', true, [], false, true, true, false); __ez.queue.addFile("/beardeddragon/gilamonster.js", '/beardeddragon/gilamonster.js?cb=281', true, ["/beardeddragon/wyvern.js"], false, true, true, false); __ez.queue.addFile("/beardeddragon/iguana.js", '/beardeddragon/iguana.js?cb=298', true, ["/beardeddragon/wyvern.js"], false, true, true, false); __ez.queue.addFile("/detroitchicago/springfield.js", '/detroitchicago/springfield.js?cb=3', true, ["/beardeddragon/wyvern.js"], false, true, true, false); __ez.queue.addFunc("ezoutstream", "renderEzoicOutstreamVideoContent", null, false, ["/beardeddragon/iguana.js"], false, false, true, false); return; }
            window.ezIntType = ""; if (typeof ezOutstreamPlayer !== "undefined") { ezOutstreamPlayer.Init(videoObject); }
        }
        __ez.queue.addFile("/beardeddragon/wyvern.js", "/beardeddragon/wyvern.js?cb=97", true, [], false, false, true, false, window); __ez.queue.addFile("/porpoiseant/jellyfish.js", "/porpoiseant/jellyfish.js?a=a&cb=14&dcb=14&shcb=34", true, [], false, false, true, false, window); __ez.queue.addFile("/beardeddragon/gilamonster.js", "/beardeddragon/gilamonster.js?cb=281", true, ["/beardeddragon/wyvern.js", "/porpoiseant/jellyfish.js"], false, false, true, false, window); __ez.queue.addFile("/beardeddragon/iguana.js", "/beardeddragon/iguana.js?cb=298", true, ["/beardeddragon/gilamonster.js"], false, false, true, false, window); __ez.queue.addFile("ima", "//imasdk.googleapis.com/js/sdkloader/ima3.js", true, [], false, true, true, false, window); __ez.queue.addFunc("ezoicOutstreamVideo", "renderEzoicOutstreamVideoContent", null, false, ["/beardeddragon/turtle.js", "/beardeddragon/iguana.js", "ima", "/detroitchicago/portland.js"], false, false, true, false, window);</script>
    <script>__ez.queue.addFile('/tardisrocinante/vitals.js', '/tardisrocinante/vitals.js?gcb=2&cb=3', false, ['/parsonsmaize/mulvane.js'], true, false, true, false);</script>
    <script>var _audins_dom = "jlptsensei_com", _audins_did = 121822; __ez.queue.addDelayFunc("audins.js", "__ez.script.add", "//go.ezodn.com/detroitchicago/audins.js?cb=3");</script>
    <noscript>
        <div style=display:none><img
                src="//pixel.quantserve.com/pixel/p-31iz6hfFutd16.gif?labels=Domain.jlptsensei_com,DomainId.121822"
                border=0 height=1 width=1 alt=Quantcast></div>
    </noscript>
    <script>__ez.queue.addFile('/beardeddragon/drake.js', '/beardeddragon/drake.js?gcb=2&cb=8', false, [], true, false, true, false);</script>
    <script
        style=display:none>var __ez_dims = (function () { var setCookie = function (name, content, expiry) { return document.cookie = name + '=' + content + ((expiry) ? ';expires=' + (new Date(Math.floor(new Date().getTime() + expiry * 1000)).toUTCString()) : '') + ';path=/'; }; var ffid = 1; var oh = window.screen.height; var ow = window.screen.width; var h = ffid === 1 ? oh : (oh > ow) ? oh : ow; var w = ffid === 1 ? ow : (oh > ow) ? ow : oh; var uh = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight; var uw = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth; var setAllCookies = function () { setCookie('ezds', encodeURIComponent('ffid=' + ffid + ',w=' + w + ',h=' + h), (31536e3 * 7)); setCookie('ezohw', encodeURIComponent('w=' + uw + ',h=' + uh), (31536e3 * 7)); }; if (window.ezTcfConsent && window.ezTcfConsent.loaded) { if (window.ezTcfConsent.understand_audiences) { setAllCookies(); } } else if (typeof getEzConsentData === "function") { getEzConsentData().then(function (ezTcfConsent) { if (ezTcfConsent && ezTcfConsent.loaded) { if (ezTcfConsent.understand_audiences) { setAllCookies(); } } else { console.error("cannot get ez consent data"); setAllCookies(); } }); } else { console.error("getEzConsentData is not a function"); setAllCookies(); } })();</script>
    <script style=display:none
        async>__ez.queue.addFile('/parsonsmaize/chanute.js', '/parsonsmaize/chanute.js?a=a&cb=9&dcb=195-2&shcb=34', true, ['/parsonsmaize/mulvane.js'], true, false, false, false);</script>
    <script style=display:none
        async>__ez.queue.addFile('/porpoiseant/jellyfish.js', '/porpoiseant/jellyfish.js?a=a&cb=14&dcb=195-2&shcb=34', false, [], true, false, false, false);</script>
    <script>if (typeof _ezaq !== "undefined" && typeof __ez == "object" && typeof __ez.bit == "object" && typeof __ezDotData == "function") { if ("cookieDeprecationLabel" in navigator) { navigator.cookieDeprecationLabel.getValue().then((label) => { __ez.bit.AddAndFire(_ezaq["page_view_id"], [new __ezDotData("chrome_cookie_deprecation_label", label),]); }); } }</script>
    <script
        data-cfasync="false">function _emitEzConsentEvent() { var customEvent = new CustomEvent("ezConsentEvent", { detail: { ezTcfConsent: window.ezTcfConsent }, bubbles: true, cancelable: true, }); document.dispatchEvent(customEvent); }
            (function (window, document) {
                function _setAllEzConsentTrue() { window.ezTcfConsent.loaded = true; window.ezTcfConsent.store_info = true; window.ezTcfConsent.develop_and_improve_services = true; window.ezTcfConsent.measure_ad_performance = true; window.ezTcfConsent.measure_content_performance = true; window.ezTcfConsent.select_basic_ads = true; window.ezTcfConsent.create_ad_profile = true; window.ezTcfConsent.select_personalized_ads = true; window.ezTcfConsent.create_content_profile = true; window.ezTcfConsent.select_personalized_content = true; window.ezTcfConsent.understand_audiences = true; window.ezTcfConsent.use_limited_data_to_select_content = true; window.ezTcfConsent.select_personalized_content = true; }
                function _clearEzConsentCookie() { document.cookie = "ezCMPCookieConsent=tcf2;Domain=.jlptsensei.com;Path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT"; }
                _clearEzConsentCookie(); if (typeof window.__tcfapi !== "undefined") {
                    window.ezgconsent = false; var amazonHasRun = false; function _ezAllowed(tcdata, purpose) { return (tcdata.purpose.consents[purpose] || tcdata.purpose.legitimateInterests[purpose]); }
                    function _reloadAds() {
                        if (typeof window.ezorefgsl === "function" && typeof window.ezslots === "object") {
                            if (typeof __ezapsFetchBids == "function" && amazonHasRun === false) {
                                ezapsFetchBids(__ezaps); if (typeof __ezapsVideo != "undefined") { ezapsFetchBids(__ezapsVideo, "video"); }
                                amazonHasRun = true;
                            }
                            var slots = []; for (var i = 0; i < window.ezslots.length; i++) { if (window[window.ezslots[i]] && typeof window[window.ezslots[i]] === "object") { slots.push(window[window.ezslots[i]]); } else { setTimeout(_reloadAds, 100); return false; } }
                            for (var i = 0; i < slots.length; i++) { window.ezorefgsl(slots[i]); }
                        } else if (!window.ezadtimeoutset) { window.ezadtimeoutset = true; setTimeout(_reloadAds, 100); }
                    }
                    function _handleConsentDecision(tcdata) {
                        window.ezTcfConsent.loaded = true; if (!tcdata.vendor.consents["347"] && !tcdata.vendor.legitimateInterests["347"]) { window._emitEzConsentEvent(); return; }
                        window.ezTcfConsent.store_info = _ezAllowed(tcdata, "1"); window.ezTcfConsent.develop_and_improve_services = _ezAllowed(tcdata, "10"); window.ezTcfConsent.measure_content_performance = _ezAllowed(tcdata, "8"); window.ezTcfConsent.select_basic_ads = _ezAllowed(tcdata, "2"); window.ezTcfConsent.create_ad_profile = _ezAllowed(tcdata, "3"); window.ezTcfConsent.select_personalized_ads = _ezAllowed(tcdata, "4"); window.ezTcfConsent.create_content_profile = _ezAllowed(tcdata, "5"); window.ezTcfConsent.measure_ad_performance = _ezAllowed(tcdata, "7"); window.ezTcfConsent.use_limited_data_to_select_content = _ezAllowed(tcdata, "11"); window.ezTcfConsent.select_personalized_content = _ezAllowed(tcdata, "6"); window.ezTcfConsent.understand_audiences = _ezAllowed(tcdata, "9"); window._emitEzConsentEvent();
                    }
                    __tcfapi("addEventListener", 2, function (tcdata, success) {
                        if (!success || !tcdata) { window._emitEzConsentEvent(); return; }
                        if (!tcdata.gdprApplies) { _setAllEzConsentTrue(); window._emitEzConsentEvent(); return; }
                        if (tcdata.eventStatus === "useractioncomplete" || tcdata.eventStatus === "tcloaded") {
                            _handleConsentDecision(tcdata); if (tcdata.purpose.consents["1"] === true && tcdata.vendor.consents["755"] !== false) { window.ezgconsent = true; (adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 0; _reloadAds(); } else { _reloadAds(); }
                            if (window.__ezconsent) { __ezconsent.setEzoicConsentSettings(ezConsentCategories); }
                            __tcfapi("removeEventListener", 2, function (success) { return null; }, tcdata.listenerId); if (!(tcdata.purpose.consents["1"] === true && _ezAllowed(tcdata, "2") && _ezAllowed(tcdata, "3") && _ezAllowed(tcdata, "4"))) { if (typeof __ez == "object" && typeof __ez.bit == "object" && typeof window["_ezaq"] == "object" && typeof window["_ezaq"]["page_view_id"] == "string") { __ez.bit.AddAndFire(window["_ezaq"]["page_view_id"], [new __ezDotData("non_personalized_ads", true),]); } }
                        }
                    });
                } else { _setAllEzConsentTrue(); window._emitEzConsentEvent(); }
            })(window, document);</script>
</body>

</html>
`