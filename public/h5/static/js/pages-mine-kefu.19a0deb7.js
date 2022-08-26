(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mine-kefu"], {
    "05b4": function(n, t, e) {
        "use strict";
        var u;
        e.d(t, "b", (function() {
                return r
            }
        )),
            e.d(t, "c", (function() {
                    return c
                }
            )),
            e.d(t, "a", (function() {
                    return u
                }
            ));
        var r = function() {
            var n = this
                , t = n.$createElement
                , e = n._self._c || t;
            return e("v-uni-view", {}, [e("v-uni-web-view", {
                attrs: {
                    src: "/hybrid/html/kefu.html"
                }
            })], 1)
        }
            , c = []
    },
    b648: function(n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var u = {
            data: function() {
                return {
                    url: ""
                }
            },
            onLoad: function(n) {
                uni.setNavigationBarTitle({
                    title: this.$t("zdy").zxkf
                })
            }
        };
        t.default = u
    },
    ba19: function(n, t, e) {
        "use strict";
        e.r(t);
        var u = e("05b4")
            , r = e("ce11");
        for (var c in r)
            "default" !== c && function(n) {
                e.d(t, n, (function() {
                        return r[n]
                    }
                ))
            }(c);
        var i, a = e("f0c5"), f = Object(a["a"])(r["default"], u["b"], u["c"], !1, null, "20c9739c", null, !1, u["a"], i);
        t["default"] = f.exports
    },
    ce11: function(n, t, e) {
        "use strict";
        e.r(t);
        var u = e("b648")
            , r = e.n(u);
        for (var c in u)
            "default" !== c && function(n) {
                e.d(t, n, (function() {
                        return u[n]
                    }
                ))
            }(c);
        t["default"] = r.a
    }
}]);
