(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-market-second"], {
    "301e": function(t, n, e) {
        "use strict";
        var c;
        e.d(n, "b", (function() {
                return r
            }
        )),
            e.d(n, "c", (function() {
                    return u
                }
            )),
            e.d(n, "a", (function() {
                    return c
                }
            ));
        var r = function() {
            var t = this
                , n = t.$createElement
                , e = t._self._c || n;
            return e("v-uni-view", {}, [e("v-uni-web-view", {
                attrs: {
                    src: t.url
                }
            })], 1)
        }
            , u = []
    },
    "69cd": function(t, n, e) {
        "use strict";
        var c = e("4ea4");
        e("99af"),
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.default = void 0;
        var r = c(e("5530"))
            , u = e("2f62")
            , a = {
            data: function() {
                return {
                    url: ""
                }
            },
            onLoad: function(t) {
                this.url = "/hybrid/html/second.html?legal_id=".concat(t.legal_id, "&currency_id=").concat(t.currency_id, "&symbol=").concat(t.symbol, "&currency_match_id=").concat(t.currency_match_id, "&plate=").concat(t.plate)
            },
            computed: (0,
                r.default)({}, (0,
                u.mapState)(["theme"])),
            onShow: function() {
                this.$utils.setThemeTop(this.theme)
            }
        };
        n.default = a
    },
    9318: function(t, n, e) {
        "use strict";
        e.r(n);
        var c = e("69cd")
            , r = e.n(c);
        for (var u in c)
            "default" !== u && function(t) {
                e.d(n, t, (function() {
                        return c[t]
                    }
                ))
            }(u);
        n["default"] = r.a
    },
    a801: function(t, n, e) {
        "use strict";
        e.r(n);
        var c = e("301e")
            , r = e("9318");
        for (var u in r)
            "default" !== u && function(t) {
                e.d(n, t, (function() {
                        return r[t]
                    }
                ))
            }(u);
        var a, i = e("f0c5"), o = Object(i["a"])(r["default"], c["b"], c["c"], !1, null, "9f035cc6", null, !1, c["a"], a);
        n["default"] = o.exports
    }
}]);
