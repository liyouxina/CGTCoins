(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home"], {
    "155e": function(t, e, a) {
        "use strict";
        var i;
        a.d(e, "b", (function() {
                return s
            }
        )),
            a.d(e, "c", (function() {
                    return n
                }
            )),
            a.d(e, "a", (function() {
                    return i
                }
            ));
        var s = function() {
            var t = this
                , e = t.$createElement
                , i = t._self._c || e;
            return i("v-uni-view", {
                staticClass: "content ",
                class: {
                    light: "light" == t.theme
                }
            }, [i("v-uni-view", {
                staticClass: "status_bar"
            }, [i("v-uni-view", {
                staticClass: "top_view"
            })], 1), i("v-uni-view", {
                staticClass: "ptb10 w100 tc flex alcenter between fixed bgPart head pr10"
            }, [i("v-uni-view", {
                staticClass: "pl10"
            }, [i("v-uni-image", {
                staticClass: "headImg",
                attrs: {
                    src: "/static/image/head.png",
                    mode: "widthFix"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.show.apply(void 0, arguments)
                    }
                }
            })], 1), i("v-uni-view", [t._v("Paxful")]), i("v-uni-view", {
                staticClass: " posRelt"
            }, [i("v-uni-view", {
                staticClass: "flex alcenter",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.isshowlang = !t.isshowlang
                    }
                }
            }, [i("v-uni-text", [t._v(t._s(t.languages[t.lang].name))]), i("v-uni-image", {
                staticClass: "wt15 h12 ml5",
                attrs: {
                    src: t.languages[t.lang].img
                }
            })], 1), i("v-uni-view", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isshowlang,
                    expression: "isshowlang"
                }],
                staticClass: "abstrot bggray plr8 wt90 radius4",
                staticStyle: {
                    right: "0",
                    top: "60upx"
                }
            }, t._l(t.languages, (function(e, a) {
                    return i("v-uni-view", {
                        key: a,
                        staticClass: "flex alcenter  ptb10 between bdb1f langs",
                        on: {
                            click: function(e) {
                                arguments[0] = e = t.$handleEvent(e),
                                    t.changeLang(a)
                            }
                        }
                    }, [i("v-uni-text", [t._v(t._s(e.name))]), i("v-uni-image", {
                        staticClass: "wt15 h12 ml5",
                        attrs: {
                            src: e.img
                        }
                    })], 1)
                }
            )), 1)], 1)], 1), i("v-uni-swiper", {
                staticClass: "swiper w100 mt50",
                attrs: {
                    "indicator-dots": !0,
                    autoplay: !0,
                    interval: 3e3,
                    circular: !0,
                    "indicator-color": "#aaa",
                    "indicator-active-color": "#eee"
                }
            }, t._l(t.bannerList, (function(t, e) {
                    return i("v-uni-swiper-item", {
                        key: e
                    }, [i("v-uni-image", {
                        staticClass: "w100 ht100",
                        attrs: {
                            src: t.thumbnail
                        }
                    })], 1)
                }
            )), 1), i("v-uni-view", {
                staticClass: "w100 plr10 bgPart"
            }, [i("v-uni-view", {
                staticClass: " flex alcenter bdb_blue3"
            }, [i("v-uni-image", {
                staticClass: "wt20 h20",
                attrs: {
                    src: a("c4d9")
                }
            }), i("v-uni-swiper", {
                staticClass: "w100 h40 ml10",
                attrs: {
                    vertical: !0,
                    autoplay: !0,
                    interval: 3e3,
                    circular: !0
                }
            }, t._l(t.noticeList, (function(e, a) {
                    return i("v-uni-swiper-item", {
                        key: a,
                        staticClass: "flex alcenter"
                    }, [i("v-uni-navigator", {
                        attrs: {
                            url: "/pages/home/newsDetail?id=" + e.id
                        }
                    }, [t._v(t._s(e.title))])], 1)
                }
            )), 1)], 1)], 1), t.quoListSwier.length ? i("v-uni-swiper", {
                staticClass: "ptb10 h100 w100 bgPart",
                attrs: {
                    "display-multiple-items": "3"
                }
            }, t._l(t.quoListSwier, (function(e, a) {
                    return 1 == e.is_display ? i("v-uni-swiper-item", {
                        key: a,
                        staticClass: "flex alcenter around"
                    }, [i("v-uni-navigator", {
                        staticClass: "flex column alcenter",
                        attrs: {
                            url: "/pages/market/kline?legal_id=" + e.legal_id + "&currency_id=" + e.currency_id + "&symbol=" + e.currency_name + "/" + e.legal_name
                        }
                    }, [i("v-uni-text", {
                        staticClass: "ft12"
                    }, [t._v(t._s(e.currency_name) + "/" + t._s(e.legal_name))]), i("v-uni-text", {
                        staticClass: "ft18 bold",
                        class: {
                            red2: parseFloat(e.change) < 0,
                            green: parseFloat(e.change) >= 0 || "" == e.change
                        }
                    }, [t._v(t._s(e.now_price))]), i("v-uni-text", {
                        staticClass: "ft12",
                        class: {
                            red2: parseFloat(e.change) < 0,
                            green: parseFloat(e.change) >= 0 || "" == e.change
                        }
                    }, [t._v(t._s("-" == e.change.substr(0, 1) ? "" : "+") + t._s(t._f("toFixed2")(e.change - 0)) + "%")])], 1)], 1) : t._e()
                }
            )), 1) : t._e(), i("v-uni-view", {
                staticClass: "flex alcenter plr10 w100 ptb5"
            }, [i("v-uni-navigator", {
                staticClass: "flex flex2 alcenter between bgPart plr10 radius4",
                staticStyle: {
                    height: "85px"
                },
                attrs: {
                    url: "/pages/assets/charge?currency=3&name=usdt"
                }
            }, [i("v-uni-view", {
                staticClass: "flex column ht100 jscenter"
            }, [i("v-uni-text", {
                staticClass: "ft16 bold"
            }, [t._v(t._s(t.$t("home.fast")))]), i("v-uni-text", {
                staticClass: "blue4 ft12 mt5"
            }, [t._v(t._s(t.$t("home.zhichi")))])], 1), i("v-uni-image", {
                staticClass: "wt50 h40",
                attrs: {
                    src: "/static/image/legal_card.png"
                }
            })], 1), i("v-uni-view", {
                staticClass: "flex column between flex1 ml5"
            }, [i("v-uni-navigator", {
                staticClass: "flex alcenter bgPart plr10 radius4 h40 ",
                staticStyle: {
                    height: "40px"
                },
                attrs: {
                    url: "/pages/lockming/index"
                }
            }, [i("v-uni-image", {
                staticClass: "wt30 h30 mr10",
                attrs: {
                    src: "/static/image/news.png"
                }
            }), i("v-uni-text", {
                staticClass: "ft12"
            }, [t._v(t._s(t.$t("zdy.scwk")))])], 1), i("v-uni-navigator", {
                staticClass: "flex alcenter bgPart plr10 radius4 h40 mt5",
                staticStyle: {
                    height: "40px"
                },
                attrs: {
                    url: "/pages/market/second"
                }
            }, [i("v-uni-image", {
                staticClass: "wt30 h25 mr10",
                attrs: {
                    src: "/static/footer/gang1.png"
                }
            }), i("v-uni-text", {
                staticClass: "ft12"
            }, [t._v(t._s(t.$t("home.micro")))])], 1)], 1)], 1), i("v-uni-view", {
                staticClass: "w100 plr10 pb5 posRelt"
            }, [i("v-uni-view", {
                staticClass: "abstrot zdx100 white",
                staticStyle: {
                    top: "15%",
                    left: "10%"
                }
            }, [i("v-uni-view", {
                staticClass: "ft16 bold"
            }, [t._v(t._s(t.$t("home.security")))]), i("v-uni-view", {
                staticClass: "mt5"
            }, [t._v(t._s(t.$t("home.leader")))])], 1), i("v-uni-image", {
                staticClass: "w100 h70",
                attrs: {
                    src: "/static/image/banner.png"
                }
            })], 1), i("v-uni-view", {
                staticClass: " w100 bgPart"
            }, [i("v-uni-view", {
                staticClass: "ptb10 bdb_blue3 ft14 plr10 bold"
            }, [t._v(t._s(t.$t("home.updowns")))]), i("v-uni-view", {
                staticClass: "flex alcenter ft12 ptb5 blue4 plr10"
            }, [i("v-uni-text", {
                staticStyle: {
                    flex: "1.5"
                }
            }, [t._v(t._s(t.$t("home.name")))]), i("v-uni-text", {
                staticClass: "flex1"
            }, [t._v(t._s(t.$t("home.new_price")))]), i("v-uni-text", {
                staticClass: "flex1 tr"
            }, [t._v(t._s(t.$t("home.fu")))])], 1), t._l(t.quoList, (function(e, a) {
                    return 1 == e.is_display ? i("v-uni-navigator", {
                        key: a,
                        staticClass: "flex alcenter ft12 ptb10 blue4 plr10 bdb_blue3",
                        attrs: {
                            url: "/pages/market/kline?legal_id=" + e.legal_id + "&currency_id=" + e.currency_id + "&symbol=" + e.currency_name + "/" + e.legal_name
                        }
                    }, [i("v-uni-view", {
                        staticStyle: {
                            flex: "1.5"
                        }
                    }, [i("v-uni-view", {}, [i("v-uni-text", {
                        staticClass: "gray_e ft14 bold ft16"
                    }, [t._v(t._s(e.currency_name))]), t._v("/" + t._s(e.legal_name))], 1)], 1), i("v-uni-text", {
                        staticClass: "flex1 bold gray_e ft16"
                    }, [t._v(t._s(e.now_price))]), i("v-uni-text", {
                        staticClass: "flex1 tr flex jsend"
                    }, [i("v-uni-text", {
                        staticClass: "radius2 ptb5 white wt70 block tc",
                        class: {
                            bgRed: parseFloat(e.change) < 0,
                            bgGreen: parseFloat(e.change) >= 0 || "" == e.change
                        }
                    }, [t._v(t._s("-" == e.change.substr(0, 1) ? "" : "+") + t._s(t._f("toFixed2")(e.change - 0)) + "%")])], 1)], 1) : t._e()
                }
            ))], 2), i("v-uni-view", {
                staticClass: "fixed w100 ht100 mask",
                class: {
                    showMask: t.showLeft
                },
                on: {
                    click: function(e) {
                        e.stopPropagation(),
                            arguments[0] = e = t.$handleEvent(e),
                            t.hide.apply(void 0, arguments)
                    },
                    touchmove: function(e) {
                        e.stopPropagation(),
                            arguments[0] = e = t.$handleEvent(e)
                    }
                }
            }, [i("v-uni-view", {
                staticClass: "fixed bgPart w65 ht100 leftBox flex column",
                class: {
                    isShow: t.showLeft
                },
                on: {
                    click: function(e) {
                        e.stopPropagation(),
                            arguments[0] = e = t.$handleEvent(e),
                            t.stop.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-view", {
                staticClass: "bgBlack pt60 pb20 plr20"
            }, [t.token ? t._e() : i("v-uni-navigator", {
                staticClass: "flex alcenter between",
                attrs: {
                    url: "/pages/mine/login",
                    "open-type": "navigate"
                }
            }, [i("v-uni-view", [i("v-uni-view", {
                staticClass: "ft20 mb5"
            }, [t._v(t._s(t.$t("home.p_login")))]), i("v-uni-view", {
                staticClass: "ft14"
            }, [t._v(t._s(t.$t("home.welcome")))])], 1), i("v-uni-view", [i("v-uni-image", {
                staticClass: "wt20 h20",
                attrs: {
                    src: "/static/image/mores.png"
                }
            })], 1)], 1), t.token ? i("v-uni-navigator", {
                staticClass: "flex alcenter between",
                attrs: {
                    url: "/pages/mine/userCenter"
                }
            }, [i("v-uni-view", [i("v-uni-view", {
                staticClass: "ft20 mb5"
            }, [t._v(t._s(t.info.account))]), i("v-uni-view", {
                staticClass: "ft14"
            }, [t._v("UID:" + t._s(t.info.id))])], 1), i("v-uni-view", [i("v-uni-image", {
                staticClass: "wt20 h20",
                attrs: {
                    src: "/static/image/mores.png"
                }
            })], 1)], 1) : t._e()], 1), i("v-uni-scroll-view", {
                staticClass: "flex1 pb30",
                staticStyle: {
                    "min-height": "300px"
                },
                attrs: {
                    "scroll-y": "true",
                    "show-scrollbar": "true"
                }
            }, [t.token ? i("v-uni-navigator", {
                staticClass: "flex alcenter ptb15 between plr20 ft14 bdb_blue3",
                attrs: {
                    url: "/pages/mine/userCenter"
                }
            }, [i("v-uni-view", {
                staticClass: "flex alcenter"
            }, [i("v-uni-image", {
                staticClass: "wt20 h20",
                attrs: {
                    src: "/static/image/personal.png"
                }
            }), i("v-uni-text", {
                staticClass: "ml10"
            }, [t._v(t._s(t.$t("authentication.renzheng")))])], 1), i("v-uni-image", {
                staticClass: "wt15 h15",
                attrs: {
                    src: "/static/image/mores.png"
                }
            })], 1) : t._e(), t.info.is_seller ? i("v-uni-navigator", {
                staticClass: "flex alcenter ptb15 between plr20 ft14 bdb_blue3",
                attrs: {
                    url: "/pages/legal/store"
                }
            }, [i("v-uni-view", {
                staticClass: "flex alcenter"
            }, [i("v-uni-image", {
                staticClass: "wt20 h20",
                attrs: {
                    src: "/static/image/shops.png"
                }
            }), i("v-uni-text", {
                staticClass: "ml10"
            }, [t._v(t._s(t.$t("home.myshop")))])], 1), i("v-uni-image", {
                staticClass: "wt15 h15",
                attrs: {
                    src: "/static/image/mores.png"
                }
            })], 1) : t._e(), t.token ? i("v-uni-navigator", {
                staticClass: "flex alcenter ptb15 between plr20 ft14 bdb27",
                attrs: {
                    url: "/pages/mine/invite?code=" + t.info.extension_code
                }
            }, [i("v-uni-view", {
                staticClass: "flex alcenter"
            }, [i("v-uni-image", {
                staticClass: "wt20 h20",
                attrs: {
                    src: "/static/image/share.png"
                }
            }), i("v-uni-text", {
                staticClass: "ml10"
            }, [t._v(t._s(t.$t("home.myshare")))])], 1), i("v-uni-image", {
                staticClass: "wt15 h15",
                attrs: {
                    src: "/static/image/mores.png"
                }
            })], 1) : t._e(), i("v-uni-view", {
                staticClass: "flex alcenter ptb15 between plr20 ft14 bdb_blue3"
            }, [i("v-uni-view", {
                staticClass: "flex alcenter"
            }, [i("v-uni-image", {
                staticClass: "wt20 h20",
                attrs: {
                    src: "/static/image/sucerty.png"
                }
            }), i("v-uni-text", {
                staticClass: "ml10"
            }, [t._v(t._s(t.$t("about.theme")))])], 1), i("v-uni-switch", {
                attrs: {
                    checked: "light" != t.theme
                },
                on: {
                    change: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.switchChange.apply(void 0, arguments)
                    }
                }
            })], 1), i("v-uni-navigator", {
                staticClass: "flex alcenter ptb15 between plr20 ft14 bdb_blue3 ",
                staticStyle: {
                    height: "40px"
                },
                attrs: {
                    url: "/pages/market/second"
                }
            }, [i("v-uni-view", {
                staticClass: "flex alcenter"
            }, [i("v-uni-image", {
                staticClass: "wt20 h20",
                attrs: {
                    src: "/static/footer/gang1.png"
                }
            }), i("v-uni-text", {
                staticClass: "ml10"
            }, [t._v(t._s(t.$t("home.micro")))])], 1), i("v-uni-image", {
                staticClass: "wt15 h15",
                attrs: {
                    src: "/static/image/mores.png"
                }
            })], 1), i("v-uni-navigator", {
                staticClass: "flex alcenter ptb15 between plr20 ft14 bdb_blue3",
                attrs: {
                    url: "/pages/lockming/index"
                }
            }, [i("v-uni-view", {
                staticClass: "flex alcenter"
            }, [i("v-uni-image", {
                staticClass: "wt20 h20",
                attrs: {
                    src: "/static/image/suocang.png"
                }
            }), i("v-uni-text", {
                staticClass: "ml10"
            }, [t._v(t._s(t.$t("zdy.scwk")))])], 1), i("v-uni-image", {
                staticClass: "wt15 h15",
                attrs: {
                    src: "/static/image/mores.png"
                }
            })], 1), i("v-uni-navigator", {
                staticClass: "flex alcenter ptb15 between plr20 ft14 bdb_blue3",
                attrs: {
                    url: "/pages/assets/mention?currency=3&name=USDT"//ieo修改提币
                }
            }, [i("v-uni-view", {
                staticClass: "flex alcenter"
            }, [i("v-uni-image", {
                staticClass: "wt20 h20",
                attrs: {
                    src: "/static/image/ieo.png"
                }
            }), i("v-uni-text", {
                staticClass: "ml10"
            }, [t._v(t._s(t.$t("assets.mention")))])], 1), i("v-uni-image", {//zdy.ieo 修改提币 字库
                staticClass: "wt15 h15",
                attrs: {
                    src: "/static/image/mores.png"
                }
            })], 1), i("v-uni-navigator", {
                staticClass: "flex alcenter ptb15 between plr20 ft14 bdb_blue3",
                attrs: {
                    url: "/pages/mine/security"
                }
            }, [i("v-uni-view", {
                staticClass: "flex alcenter"
            }, [i("v-uni-image", {
                staticClass: "wt20 h20",
                attrs: {
                    src: "/static/image/sucerty.png"
                }
            }), i("v-uni-text", {
                staticClass: "ml10"
            }, [t._v(t._s(t.$t("login.security")))])], 1), i("v-uni-image", {
                staticClass: "wt15 h15",
                attrs: {
                    src: "/static/image/mores.png"
                }
            })], 1), i("v-uni-navigator", {
                staticClass: "flex alcenter ptb15 between plr20 ft14 bdb_blue3",
                attrs: {
                    url: "/pages/mine/about"
                }
            }, [i("v-uni-view", {
                staticClass: "flex alcenter"
            }, [i("v-uni-image", {
                staticClass: "wt20 h20",
                attrs: {
                    src: "/static/image/account_about_image.png"
                }
            }), i("v-uni-text", {
                staticClass: "ml10"
            }, [t._v(t._s(t.$t("about.abt")))])], 1), i("v-uni-image", {
                staticClass: "wt15 h15",
                attrs: {
                    src: "/static/image/mores.png"
                }
            })], 1), i("v-uni-navigator", {
                staticClass: "flex alcenter ptb15 between plr20 ft14 bdb_blue3",
                attrs: {
                    url: "/pages/mine/kefu"
                }
            }, [i("v-uni-view", {
                staticClass: "flex alcenter"
            }, [i("v-uni-image", {
                staticClass: "wt20 h20",
                attrs: {
                    src: "/static/image/account_about_image.png"
                }
            }), i("v-uni-text", {
                staticClass: "ml10"
            }, [t._v(t._s(t.$t("zdy.zxkf")))])], 1), i("v-uni-image", {
                staticClass: "wt15 h15",
                attrs: {
                    src: "/static/image/mores.png"
                }
            })], 1), t.token ? i("v-uni-view", {
                staticClass: "mt30 plr20"
            }, [i("v-uni-button", {
                staticClass: "ft14",
                attrs: {
                    type: "primary",
                    size: "default"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.logout.apply(void 0, arguments)
                    }
                }
            }, [t._v(t._s(t.$t("home.logout")))])], 1) : t._e()], 1)], 1)], 1)], 1)
        }
            , n = []
    },
    "1a69": function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("692e")
            , s = a.n(i);
        for (var n in i)
            "default" !== n && function(t) {
                a.d(e, t, (function() {
                        return i[t]
                    }
                ))
            }(n);
        e["default"] = s.a
    },
    5325: function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("155e")
            , s = a("1a69");
        for (var n in s)
            "default" !== n && function(t) {
                a.d(e, t, (function() {
                        return s[t]
                    }
                ))
            }(n);
        a("81b8");
        var l, c = a("f0c5"), r = Object(c["a"])(s["default"], i["b"], i["c"], !1, null, "7bcc2233", null, !1, i["a"], l);
        e["default"] = r.exports
    },
    "692e": function(t, e, a) {
        "use strict";
        var i = a("4ea4");
        a("4de4"),
            a("7db0"),
            a("4e82"),
            a("a9e3"),
            a("b680"),
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.default = void 0;
        var s = i(a("5530"))
            , n = a("2f62")
            , l = {
            components: {},
            data: function() {
                return {
                    quoListSwier: [],
                    timer: "",
                    bannerList: [],
                    noticeList: [],
                    quoList: [],
                    title: "Hello",
                    showLeft: !1,
                    showMask: !1,
                    token: "",
                    info: "",
                    cny_rate: "",
                    languages: {
                        en: {
                            name: "English",
                            img: "/static/image/en.png"
                        },
                        jp: {
                            name: "日本語",
                            img: "/static/image/jp.png"
                        },
                        kor: {
                            name: "한국어",
                            img: "/static/image/kor.jpg"
                        },
                        hk: {
                            name: "繁體中文",
                            img: "/static/image/hk.png"
                        },
                        it: {
                            name: "italiano",
                            img: "/static/image/it.png"
                        },
                        spa: {
                            name: "Español",
                            img: "/static/image/spa.jpg"
                        },
                        de: {
                            name: "Deutsch",
                            img: "/static/image/de.jpg"
                        },
                        fra: {
                            name: "français",
                            img: "/static/image/fra.jpg"
                        },
                        tg: {
                            name: "ประเทศไทย",
                            img: "/static/image/tg.jpg"
                        },
                        mlxy: {
                            name: "Malaysia",
                            img: "/static/image/Malaysia.jpg"
                        },
                        xjb: {
                            name: "Singapore",
                            img: "/static/image/Singapore.jpg"
                        },
                    },
                    lang: "",
                    isshowlang: !1
                }
            },
            filters: {
                toFixed2: function(t, e) {
                    return t = Number(t),
                        t.toFixed(2)
                }
            },
            computed: (0,
                s.default)({}, (0,
                n.mapState)(["theme"])),
            onLoad: function() {
                var t = this
                    , e = uni.getStorageSync("token");
                this.lang = uni.getStorageSync("lang") || "en",
                uni.getStorageSync("lang") || this.$utils.initData({
                    url: "set/lang",
                    data: {
                        lang: this.lang
                    },
                    type: "POST"
                }, (function(e) {
                        uni.setStorageSync("lang", t.lang),
                            uni.setStorageSync("locale", t.lang),
                            t.$i18n.locale = t.lang,
                            t.isshowlang = !1,
                            t.changeFooter(),
                            t.showLeft = !1,
                            t.showMask = !1,
                            t.token = uni.getStorageSync("token"),
                            t.getBannerImg(),
                            t.getNoticeList()
                    }
                )),
                    this.changeFooter(),
                e && this.getUserInfo()
            },
            onShow: function() {
                var t = this;
                this.$utils.setThemeTop(this.theme),
                    this.$utils.setThemeBottom(this.theme),
                    this.showLeft = !1,
                    this.showMask = !1,
                    this.token = uni.getStorageSync("token"),
                    this.getBannerImg(),
                    this.getNoticeList(),
                    this.quotation(),
                    this.timer = setInterval((function() {
                            t.quotation()
                        }
                    ), 3e3)
            },
            methods: {
                changeFooter: function() {
                    uni.setTabBarItem({
                        index: 0,
                        text: this.$t("market.home")
                    }),
                        uni.setTabBarItem({
                            index: 1,
                            text: this.$t("market.market")
                        }),
                        uni.setTabBarItem({
                            index: 2,
                            text: this.$t("trade.bibi")
                        }),
                        uni.setTabBarItem({
                            index: 3,
                            text: this.$t("assets.lever")
                        }),
                        uni.setTabBarItem({
                            index: 4,
                            text: this.$t("assets.assets")
                        })
                },
                switchChange: function(t) {
                    var e = "light" == this.theme ? "dark" : "light";
                    this.$store.dispatch("changeTheme", e),
                        this.$utils.setThemeTop(this.theme),
                        this.$utils.setThemeBottom(this.theme)
                },
                changeLang: function(t) {
                    var e = this;
                    this.$utils.initData({
                        url: "set/lang",
                        data: {
                            lang: t
                        },
                        type: "POST"
                    }, (function(a) {
                            console.log(t),
                                e.lang = t,
                                uni.setStorageSync("lang", t),
                                e.$i18n.locale = t,
                                e.isshowlang = !1,
                                e.changeFooter(),
                                e.showLeft = !1,
                                e.showMask = !1,
                                e.token = uni.getStorageSync("token"),
                                e.getBannerImg(),
                                e.getNoticeList()
                        }
                    ))
                },
                getBannerImg: function() {
                    var t = this;
                    uni.showLoading(),
                        this.$utils.initData({
                            url: "news/list",
                            data: {
                                c_id: 5,
                                lang: uni.getStorageSync("lang")
                            },
                            type: "POST"
                        }, (function(e, a) {
                                uni.stopPullDownRefresh(),
                                    t.bannerList = e.list,
                                    uni.hideLoading()
                            }
                        ))
                },
                getNoticeList: function() {
                    var t = this;
                    this.$utils.initData({
                        url: "news/list",
                        data: {
                            c_id: 4,
                            lang: uni.getStorageSync("lang")
                        },
                        type: "POST"
                    }, (function(e, a) {
                            uni.stopPullDownRefresh(),
                                t.noticeList = e.list
                        }
                    ))
                },
                quotation: function() {
                    var t = this;
                    this.$utils.initData({
                        url: "currency/quotation_new",
                        data: {},
                        type: "get"
                    }, (function(e, a) {
                            uni.stopPullDownRefresh();
                            var i = e.find((function(t) {
                                    return "USDT" == t.name
                                }
                            ));
                            t.cny_rate = i.fiat_convert_cny;
                            var s = {}
                                , n = {}
                                , l = {};
                            t.quoListSwier,
                                i.quotation.filter((function(t) {
                                        return 1 == t.currency_id ? s = t : 2 == t.currency_id ? n = t : 10 == t.currency_id ? l = t : 1 == t.is_display && 1 == t.open_coin_trade ? t : void 0
                                    }
                                ));
                            for (var c = 0; c < i.quotation.length; c++) {
                                if (1 == i.quotation[c].currency_id && 1 == i.quotation[c].open_coin_trade) {
                                    s = i.quotation[c];
                                    break
                                }
                                if (2 == i.quotation[c].currency_id && 1 == i.quotation[c].open_coin_trade) {
                                    n = i.quotation[c];
                                    break
                                }
                                if (10 == i.quotation[c].currency_id && 1 == i.quotation[c].open_coin_trade) {
                                    l = i.quotation[c];
                                    break
                                }
                                1 == item.is_display && 1 == item.open_coin_trade && t.quoListSwier.push(i.quotation[c])
                            }
                            t.quoListSwier.unshift(l),
                                t.quoListSwier.unshift(n),
                                t.quoListSwier.unshift(s),
                                t.quoList = i.quotation.sort((function(t, e) {
                                        return e.change - t.change
                                    }
                                ))
                        }
                    ))
                },
                show: function() {
                    this.token && this.getUserInfo(),
                        this.showLeft = !this.showLeft
                },
                hide: function() {
                    this.showLeft = !this.showLeft
                },
                stop: function() {},
                getUserInfo: function() {
                    var t = this;
                    this.$utils.initDataToken({
                        url: "user/info",
                        data: {},
                        type: "get"
                    }, (function(e, a) {
                            uni.stopPullDownRefresh(),
                                uni.setStorageSync("uid", a.id),
                                t.info = e
                        }
                    ))
                },
                logout: function() {
                    var t = this;
                    this.$utils.initDataToken({
                        url: "user/logout",
                        data: {},
                        type: "get"
                    }, (function(e, a) {
                            uni.clearStorageSync(),
                                t.$utils.showLayer(a),
                                uni.reLaunch({
                                    url: "/pages/mine/login"
                                })
                        }
                    ))
                }
            },
            onHide: function() {
                clearInterval(this.timer),
                    this.$socket.closeSocket()
            },
            onPullDownRefresh: function() {
                this.getBannerImg(),
                    this.getNoticeList(),
                    this.quotation()
            }
        };
        e.default = l
    },
    "81b8": function(t, e, a) {
        "use strict";
        var i = a("ff8a")
            , s = a.n(i);
        s.a
    },
    c4c4: function(t, e, a) {
        var i = a("24fb");
        e = i(!1),
            e.push([t.i, ".head[data-v-7bcc2233]{top:0;left:0;z-index:999}.content[data-v-7bcc2233]{\n\t/* display: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tjustify-content: center; */\n\t/* padding-bottom: 20px; */}.headImg[data-v-7bcc2233]{width:%?50?%;height:%?50?%\n\t/* left: 10px; */}.swiper[data-v-7bcc2233]{height:%?300?%}.bgIndex[data-v-7bcc2233]{background:#0a1b2b}.bgParts[data-v-7bcc2233]{background:#061623}.leftBox[data-v-7bcc2233]{left:-100%;top:0;z-index:9999;-webkit-transition:all .5s ease-out;transition:all .5s ease-out;opacity:.5}.isShow[data-v-7bcc2233]{left:0;top:0;z-index:9999;-webkit-transition:all .5s ease-out;transition:all .5s ease-out;opacity:1}.mask[data-v-7bcc2233]{top:0;left:-100%;background:rgba(0,0,0,.4);z-index:999}.showMask[data-v-7bcc2233]{left:0;top:0;z-index:999;opacity:1}.langs[data-v-7bcc2233]:last-child{border-bottom:none}.kefu[data-v-7bcc2233]{\n\t/* position: fixed; */bottom:%?50?%\n\t/* right: 0; */}.menus[data-v-7bcc2233]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin:%?20?% 0}.menusitem[data-v-7bcc2233]{width:25%;text-align:center;margin-bottom:%?20?%;padding:%?20?% 0 0}.menusitem uni-image[data-v-7bcc2233]{width:%?60?%;display:block;height:%?60?%;margin:0 auto %?20?%}", ""]),
            t.exports = e
    },
    c4d9: function(t, e) {
        t.exports = "data:image/png;base64,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"
    },
    ff8a: function(t, e, a) {
        var i = a("c4c4");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var s = a("4f06").default;
        s("e8494240", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }
}]);
