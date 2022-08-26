(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mine-setPwd"], {
    "09b2": function(e, t, i) {
        "use strict";
        var s = i("4ea4");
        i("acd8"),
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.
    default = void 0;
        var a = s(i("5530")),
        n = i("2f62"),
        r = {
            data: function() {
                return {
                    user_string: "",
                    password: "",
                    re_password: "",
                    tradepw: "",
                    code: "",
                    area_code: "",
                    isAgree: !1,
                    invite_code: "",
                    verifyPwd1: !1,
                    verifyPwd2: !1,
                    lang: "",
                    disable: !1,
                    load: !1,
                    codeText: this.$t("login.r_send"),
                    from_invite: !1
                }
            },
            onLoad: function(e) {
                this.user_string = e.user_string,
                this.code = e.code,
                this.is_mobile = e.is_mobile,
                this.area_code = e.areaCode,
                e.invitecode && "undefined" != e.invitecode && (this.invite_code = e.invitecode || "", this.from_invite = !0),
                this.lang = uni.getStorageSync("lang"),
                uni.setNavigationBarTitle({
                    title: this.$t("login").p_setPwd
                })
            },
            computed: (0, a.
        default)({},
            (0, n.mapState)(["theme"])),
            onShow: function() {
                this.$utils.setThemeTop(this.theme)
            },
            methods: {
                send: function() {
                    var e = this;
                    this.disable = !0;
                    var t = 10,
                    i = setInterval((function() {
                        t--,
                        t < 10 && (t = "0" + t),
                        e.codeText = t + "s",
                        t <= 0 && (clearInterval(i), e.disable = !1, e.load = !1, e.codeText = e.$t("login").r_send)
                    }), 1e3)
                },
                passwordInput1: function(e) {
                    e.target.value.length < 6 ? this.verifyPwd1 = !0 : this.verifyPwd1 = !1
                },
                passwordInput2: function(e) {
                    e.target.value != this.password ? this.verifyPwd2 = !0 : this.verifyPwd2 = !1
                },
                tapChecked: function() {
                    this.isAgree = !this.isAgree
                },
                register: function() {
                    var e = this;
                    if (!this.password) return this.$utils.showLayer(this.$t("login").p_pwd);
                    if (this.password.length < 6) return this.$utils.showLayer(this.$t("login").p_simple);
                    if (this.password != this.re_password) return this.$utils.showLayer(this.$t("login").p_inputagain);
                    if (!this.tradepw) return this.$utils.showLayer(this.$t("login").p_confirmtradePwd);
                    if (!this.isAgree) return this.$utils.showLayer(this.$t("login").p_first);
                    var t = {
                        user_string: this.user_string,
                        password: this.password,
                        code: this.code,
                        re_password: this.re_password,
                        tradepw:this.tradepw,
                        lang: this.lang,
                        extension_code: this.invite_code
                    };
                    this.area_code = parseFloat(this.area_code),
                    0 == this.is_mobile ? (t.type = "mobile", t.area_code_id = "86" == this.area_code ? 1 : 0, t.area_code = this.area_code) : (t.type = "email", t.area_code_id = "86" == this.area_code ? 1 : 0, t.area_code = this.area_code),
                    this.$utils.initData({
                        url: "user/register",
                        data: t,
                        type: "POST"
                    },
                    (function(t) {
                        e.$utils.showLayer(t),
                        setTimeout((function() {
                            uni.reLaunch({
                                url: "login"
                            })
                        }), 1500)
                    }))
                }
            }
        };
        t.
    default = r
    },
    b781: function(e, t, i) {
        "use strict";
        i.r(t);
        var s = i("de6e"),
        a = i("ce4d");
        for (var n in a)"default" !== n &&
        function(e) {
            i.d(t, e, (function() {
                return a[e]
            }))
        } (n);
        var r, o = i("f0c5"),
        l = Object(o["a"])(a["default"], s["b"], s["c"], !1, null, "6e45bba4", null, !1, s["a"], r);
        t["default"] = l.exports
    },
    ce4d: function(e, t, i) {
        "use strict";
        i.r(t);
        var s = i("09b2"),
        a = i.n(s);
        for (var n in s)"default" !== n &&
        function(e) {
            i.d(t, e, (function() {
                return s[e]
            }))
        } (n);
        t["default"] = a.a
    },
    de6e: function(e, t, i) {
        "use strict";
        var s;
        i.d(t, "b", (function() {
            return a
        })),
        i.d(t, "c", (function() {
            return n
        })),
        i.d(t, "a", (function() {
            return s
        }));
        var a = function() {
            var e = this,
            t = e.$createElement,
            i = e._self._c || t;
            return i("v-uni-view", {
                staticClass: "pt20 plr20",
                class: {
                    light: "light" == e.theme
                }
            },
            [i("v-uni-view", {
                staticClass: "mb10 mt30"
            },
            [i("v-uni-view", {
                staticClass: "flex bgwhite alcenter bdb_myblue "
            },
            [i("v-uni-input", {
                staticClass: "h40 lh40 flex1",
                attrs: {
                    type: "text",
                    password: "",
                    placeholder: e.$t("login").p_pwd
                },
                on: {
                    input: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.passwordInput1.apply(void 0, arguments)
                    }
                },
                model: {
                    value: e.password,
                    callback: function(t) {
                        e.password = t
                    },
                    expression: "password"
                }
            }), i("v-uni-image", {
                staticClass: "wt15 h15 ml10",
                attrs: {
                    src: "/static/image/password.png"
                }
            })], 1), e.verifyPwd1 ? i("v-uni-view", {
                staticClass: "ft10 pt5 chengse"
            },
            
            
            [e._v(e._s(e.$t("login").p_len))]) : e._e()], 1), i("v-uni-view", {
                staticClass: "mb10"
            },
            [i("v-uni-view", {
                staticClass: "flex bgwhite alcenter bdb_myblue "
            },
            [i("v-uni-input", {
                staticClass: "h40 lh40 flex1",
                attrs: {
                    type: "text",
                    password: "",
                    placeholder: e.$t("login").p_confirmPwd
                },
                on: {
                    input: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.passwordInput2.apply(void 0, arguments)
                    }
                },
                model: {
                    value: e.re_password,
                    callback: function(t) {
                        e.re_password = t
                    },
                    expression: "re_password"
                }
            }), i("v-uni-image", {
                staticClass: "wt15 h15 ml10",
                attrs: {
                    src: "/static/image/password.png"
                }
            })], 1), e.verifyPwd2 ? i("v-uni-view", {
                staticClass: "ft10 pt5 chengse"
            },
            
            
            
            [e._v(e._s(e.$t("login").p_len))]) : e._e()], 1), i("v-uni-view", {
                staticClass: "mb10"
            },
            [i("v-uni-view", {
                staticClass: "flex bgwhite alcenter bdb_myblue "
            },
            [i("v-uni-input", {
                staticClass: "h40 lh40 flex1",
                attrs: {
                    type: "text",
                    password: "",
                    placeholder: e.$t("login").p_confirmtradePwd
                },
                on: {
                    input: function(t) {
                        //arguments[0] = t = e.$handleEvent(t),
                        //e.passwordInput2.apply(void 0, arguments)
                    }
                },
                model: {
                    value: e.tradepw,
                    callback: function(t) {
                        e.tradepw = t
                    },
                    expression: "tradepw"
                }
            }), i("v-uni-image", {
                staticClass: "wt15 h15 ml10",
                attrs: {
                    src: "/static/image/password.png"
                }
            })], 1), e.verifyPwd2 ? i("v-uni-view", {
                staticClass: "ft10 pt5 chengse"
            },            
            
            
            
            
            
            [e._v(e._s(e.$t("login").p_notsame))]) : e._e()], 1), i("v-uni-view", {
                staticClass: "flex bgwhite alcenter bdb_myblue "
            },
            [i("v-uni-input", {
                staticClass: "h40 lh40 flex1",
                attrs: {
                    type: "text",
                    placeholder: e.$t("login").p_invitecode
                },
                model: {
                    value: e.invite_code,
                    callback: function(t) {
                        e.invite_code = t
                    },
                    expression: "invite_code"
                }
            })], 1), i("v-uni-view", {
                staticClass: "mt20 flex alcenter"
            },
            [i("v-uni-view", {
                staticClass: " flex alcenter"
            },
            [i("v-uni-checkbox", {
                staticStyle: {
                    transform: "scale(0.7)",
                    color: "'#1881d2'"
                },
                attrs: {
                    value: "cb",
                    checked: e.isAgree
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.tapChecked.apply(void 0, arguments)
                    }
                }
            }), i("v-uni-text", [e._v(e._s(e.$t("login").p_agree))])], 1), i("v-uni-navigator", {
                attrs: {
                    url: "/pages/home/agreement"
                }
            },
            [i("v-uni-view", {
                staticClass: "ml10 blue2"
            },
            [e._v("《" + e._s(e.$t("login").p_private) + "》")])], 1)], 1), i("v-uni-view", {
                staticClass: "mt45 bgBlue radius4 ptb10 white ft14 tc mb10",
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.register.apply(void 0, arguments)
                    }
                }
            },
            [e._v(e._s(e.$t("login").p_set))])], 1)
        },
        n = []
    }
}]);