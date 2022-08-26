(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-trade-trade"], {
    "0e3c": function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.default = void 0;
        var a = {
            name: "uni-popup",
            props: {
                show: {
                    type: Boolean,
                    default: !1
                },
                position: {
                    type: String,
                    default: "middle"
                },
                mode: {
                    type: String,
                    default: "insert"
                },
                msg: {
                    type: String,
                    default: ""
                },
                h5Top: {
                    type: Boolean,
                    default: !1
                },
                buttonMode: {
                    type: String,
                    default: "bottom"
                }
            },
            data: function() {
                var t = 0;
                return t = this.h5Top ? 0 : 44,
                    {
                        offsetTop: t
                    }
            },
            watch: {
                h5Top: function(t) {
                    console.log(t),
                        this.offsetTop = t ? 44 : 0
                }
            },
            methods: {
                hide: function() {
                    "insert" === this.mode && "middle" === this.position || this.$emit("hidePopup")
                },
                closeMask: function() {
                    "insert" === this.mode && this.$emit("hidePopup")
                },
                moveHandle: function() {}
            }
        };
        e.default = a
    },
    "1e07": function(t, e, i) {
        "use strict";
        var a = i("4ea4");
        i("99af"),
            i("4de4"),
            i("d81d"),
            i("a434"),
            i("a9e3"),
            i("b680"),
            i("e25e"),
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.default = void 0;
        var n = a(i("5530"))
            , s = a(i("8bda"))
            , r = a(i("bea5"))
            , c = a(i("625f"))
            , l = i("2f62")
            , o = {
            components: {
                uniDrawer: s.default,
                uniIcon: r.default,
                uniPopup: c.default
            },
            data: function() {
                return {
                    rate: 80,
                    current: 0,
                    type: "buy",
                    ptype: 0,
                    cny: 7,
                    price: "",
                    number: "",
                    showLeft: !1,
                    popType: "",
                    priceType: "limit",
                    enType: "in",
                    percentList: [25, 50, 75, 100],
                    percent: "",
                    balance: "",
                    last_price: "",
                    change: "",
                    quotationList: [],
                    marketList: [],
                    enList: [],
                    page: 1,
                    isBottom: !1,
                    hasMore: !0,
                    legal_name: "",
                    currency_name: "",
                    legal_id: "",
                    currency_id: "",
                    sellData: [["--", "--"], ["--", "--"], ["--", "--"], ["--", "--"], ["--", "--"]],
                    buyData: [["--", "--"], ["--", "--"], ["--", "--"], ["--", "--"], ["--", "--"]],
                    first: !0,
                    usdt_price: 1,
                    tradePassword: ""
                }
            },
            filters: {
                toFixed2: function(t) {
                    return t = Number(t),
                        t.toFixed(2)
                },
                toFixed3: function(t) {
                    return t = Number(t),
                        t.toFixed(3)
                }
            },
            computed: (0,
                n.default)({
                myCNY: function() {
                    return (this.price * this.cny * this.usdt_price).toFixed(4) || "0.00"
                },
                tradeNum: function() {
                    return (this.price * this.number).toFixed(8) || "0.0000000"
                },
                buyMax: function() {
                    var t = []
                        , e = this.buyData;
                    return e.map((function(e) {
                            t.push(e[1])
                        }
                    )),
                        Math.max.apply(null, t)
                },
                sellMax: function() {
                    var t = []
                        , e = this.sellData;
                    return e.map((function(e) {
                            t.push(e[1])
                        }
                    )),
                        Math.max.apply(null, t)
                }
            }, (0,
                l.mapState)(["theme"])),
            onLoad: function(t) {
                uni.setNavigationBarTitle({
                    title: this.$t("trade").trade
                }),
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
            onShow: function() {
                this.$utils.setThemeTop(this.theme),
                    this.$utils.setThemeBottom(this.theme),
                    uni.getStorageSync("token") ? this.initList() : uni.navigateTo({
                        url: "/pages/mine/login"
                    })
            },
            onHide: function() {
                this.$socket.closeSocket(),
                    this.showLeft = !1,
                    this.popType = ""
            },
            onPullDownRefresh: function() {
                this.initList()
            },
            onReachBottom: function() {
                this.hasMore && (this.page++,
                    this.entrustList())
            },
            methods: {
                sliderChange: function(t) {
                    console.log("value 发生变化：" + t.detail.value)
                },
                togglePopup: function(t) {
                    this.popType = t
                },
                changePercent: function(t) {
                    if (0 == this.balance)
                        return this.$utils.showLayer(this.$t("trade.notenough"));
                    if ("market" == this.priceType) {
                        if (this.getPrice(),
                        !this.price || "" == this.price)
                            return this.$utils.showLayer(this.$t("trade.notbest"))
                    } else if (!this.price)
                        return this.$utils.showLayer(this.$t("trade.p_price"));
                    var e;
                    this.percent = t,
                        e = "buy" == this.type ? Number(this.balance / this.price * this.percent / 100) : Number(this.balance * this.percent / 100),
                        this.number = (parseInt(1e4 * e) / 1e4 - 0).toFixed(4)
                },
                changeType: function(t) {
                    this.type = t,
                        this.number = "",
                        this.percent = "",
                        uni.setStorageSync("tradeType", t),
                        this.getPrice(),
                        this.currencyDetail()
                },
                changePriceType: function(t) {
                    this.priceType = t,
                        this.togglePopup(""),
                        this.getPrice()
                },
                changeEntrustType: function(t) {
                    this.enType = t,
                        this.togglePopup(""),
                        this.clear(),
                        this.enList = [],
                        this.entrustList()
                },
                changeNum: function(t) {
                    "limit" == this.priceType && (this.price = t)
                },
                plus: function() {
                    var t = 10 * Number(this.price) * 10;
                    t += 1,
                        this.price = (t / 100).toFixed(4)
                },
                sub: function() {
                    var t = 10 * Number(this.price) * 10;
                    if (t <= 0)
                        return this.price = 0;
                    t -= 1,
                        this.price = (t / 100).toFixed(4)
                },
                inputNum: function(t) {
                    this.percent = "";
                    var e = Number(t.detail.value)
                        , i = Number(e * this.price);
                    if ("buy" == this.type) {
                        if (i > this.balance - 0)
                            return this.$utils.showLayer("余额不足")
                    } else if (e > this.balance - 0)
                        return this.$utils.showLayer("余额不足")
                },
                getPrice: function() {
                    this.price = "buy" == this.type ? this.sellData.length > 0 ? this.sellData[this.sellData.length - 1][0] : "" : this.buyData.length > 0 ? this.buyData[0][0] : ""
                },
                changeLegal: function(t) {
                    this.current = t
                },
                changeCurrency: function(t) {
                    var e = this.marketList[this.current][t];
                    this.legal_name = e.legal_name,
                        this.legal_id = e.legal_id,
                        this.currency_id = e.currency_id,
                        this.currency_name = e.currency_name;
                    var i = {
                        legal_name: this.legal_name,
                        legal_id: this.legal_id,
                        currency_name: this.currency_name,
                        currency_id: this.currency_id
                    };
                    uni.setStorageSync("tradeData", i),
                        this.$socket.closeSocket(),
                        this.percent = "",
                        this.price = "",
                        this.number = "",
                        this.first = !0,
                        this.tradeDetail(),
                        this.socketData(),
                        this.showLeft = !1,
                        this.currencyDetail(),
                        this.clear(),
                        this.entrustList()
                },
                initList: function() {
                    var t = this
                        , e = this;
                    e.$utils.initData({
                        url: "currency/quotation_new"
                    }, (function(i) {
                            if (i.length > 0) {
                                var a = i.filter((function(t, e) {
                                        return 1 == t.is_display
                                    }
                                ));
                                e.quotationList = a;
                                for (var n = [], s = 0; s < a.length; s++)
                                    n[s] = a[s].quotation;
                                var r = n[0][0];
                                e.marketList = n,
                                    e.cny = r.rmb_relation,
                                    e.change = r.change;
                                var c = uni.getStorageSync("tradeData")
                                    , l = uni.getStorageSync("tradeType");
                                l && (e.type = l),
                                c && "string" == typeof c && (c = JSON.parse(c)),
                                    c ? (e.legal_name = c.legal_name,
                                        e.legal_id = c.legal_id,
                                        e.currency_id = c.currency_id,
                                        e.currency_name = c.currency_name,
                                        a.map((function(t, i) {
                                                if (t.id == c.legal_id)
                                                    return e.current = i
                                            }
                                        ))) : (e.legal_name = r.legal_name,
                                        e.legal_id = r.legal_id,
                                        e.currency_id = r.currency_id,
                                        e.currency_name = r.currency_name),
                                uni.getStorageSync("token") && (e.sellData = [["--", "--"], ["--", "--"], ["--", "--"], ["--", "--"], ["--", "--"]],
                                    e.buyData = [["--", "--"], ["--", "--"], ["--", "--"], ["--", "--"], ["--", "--"]],
                                    t.percent = "",
                                    t.price = "",
                                    t.number = "",
                                    e.first = !0,
                                    e.clear(),
                                    e.currencyDetail(),
                                    e.tradeDetail(),
                                    e.socketData(),
                                    e.entrustList())
                            }
                        }
                    ))
                },
                submit: function() {
                    var t = this;
                    if (!t.number)
                        return t.$utils.showLayer(this.$t("trade.p_num"));
                    if ("market" == t.priceType) {
                        if (this.getPrice(),
                        !this.price || "" == this.price)
                            return t.$utils.showLayer(this.$t("trade.notbest"))
                    } else if (!t.price)
                        return t.$utils.showLayer(this.$t("trade.p_price"));
                    var e = "coin/trade"
                        , i = "sell" == t.type ? 2 : 1;
                    t.$utils.initDataToken({
                        url: e,
                        data: {
                            type: i,
                            target_price: t.price,
                            amount: t.number,
                            legal_id: t.legal_id,
                            currency_id: t.currency_id,
                            password: t.tradePassword
                        },
                        type: "post"
                    }, (function(e) {
                            t.$utils.showLayer(e),
                                t.number = "",
                                t.currencyDetail(),
                                t.clear(),
                                t.entrustList()
                        }
                    ))
                },
                currencyDetail: function() {
                    var t, e = this;
                    t = "buy" == this.type ? this.legal_id : this.currency_id,
                        e.$utils.noshowToken({
                            url: "wallet/detail",
                            data: {
                                currency: t,
                                type: "change"
                            },
                            type: "post",
                            load: !1
                        }, (function(t) {
                                e.balance = t.change_balance
                            }
                        ))
                },
                tradeDetail: function() {},
                socketData: function() {
                    var t = this
                        , e = uni.getStorageSync("token")
                        , i = (this.currency_name,
                        this.legal_name,
                        this.$socketio(this.$socket_api));
                    i.emit("login", e),
                        i.on("market_depth", (function(e) {
                                e.currency_id == t.currency_id && e.legal_id == t.legal_id && (t.buyData = e.bids,
                                    t.sellData = e.asks,
                                t.first && (t.getPrice(),
                                    t.first = !1))
                            }
                        )),
                        i.on("daymarket", (function(e) {
                                "daymarket" == e.type && t.currency_id == e.currency_id && t.legal_id == e.legal_id && (t.last_price = e.now_price,
                                    t.change = e.change,
                                    t.marketList[t.current].map((function(i, a) {
                                            if (i.currency_id == e.currency_id && i.legal_id == e.legal_id)
                                                return t.marketList[t.current][a].now_price = e.now_price
                                        }
                                    )))
                            }
                        ))
                },
                clear: function() {
                    var t = this;
                    t.page = 1,
                        t.isBottom = !1,
                        t.hasMore = !0
                },
                entrustList: function() {
                    var t = this
                        , e = "coin/list"
                        , i = 1;
                    i = "out" == t.enType ? "2" : "1",
                        t.$utils.initDataToken({
                            url: e,
                            data: {
                                currency_id: t.currency_id,
                                legal_id: t.legal_id,
                                page: t.page
                            }
                        }, (function(e) {
                                var a = e
                                    , n = [];
                                uni.stopPullDownRefresh(),
                                    t.isBottom = !1;
                                for (var s = 0; s < a.length; s++)
                                    a[s].type == i && n.push(a[s]);
                                t.enList = 1 == t.page ? n : t.enList.concat(n),
                                    t.hasMore = e.limit == n.length
                            }
                        ))
                },
                revoke: function(t, e) {
                    var i = this;
                    i.$utils.initDataToken({
                        url: "coin/trade",
                        data: {
                            type: i.enType,
                            id: e
                        },
                        type: "put"
                    }, (function(e) {
                            i.$utils.showLayer(e),
                                i.enList.splice(t, 1)
                        }
                    ))
                }
            }
        };
        e.default = o
    },
    2364: function(t, e, i) {
        "use strict";
        var a;
        i.d(e, "b", (function() {
                return n
            }
        )),
            i.d(e, "c", (function() {
                    return s
                }
            )),
            i.d(e, "a", (function() {
                    return a
                }
            ));
        var n = function() {
            var t = this
                , e = t.$createElement
                , i = t._self._c || e;
            return i("v-uni-view", {
                class: {
                    light: "light" == t.theme
                }
            }, [i("v-uni-view", {
                staticClass: "status_bar"
            }, [i("v-uni-view", {
                staticClass: "top_view"
            })], 1), i("v-uni-view", {
                staticClass: "header bgPart fixed flex alcenter between plr15 zdx100"
            }, [i("v-uni-view", {
                staticClass: "flex alcenter",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.showLeft = !0
                    }
                }
            }, [i("v-uni-image", {
                staticClass: "h20 wt20",
                attrs: {
                    src: "/static/image/list.png"
                }
            }), i("v-uni-text", {
                staticClass: "ft18 ml10 bold"
            }, [t._v(t._s(t.currency_name) + "/" + t._s(t.legal_name))]), t.change ? i("v-uni-text", {
                class: ["ml10 radius2 p2 dwbg redColor ft12", {
                    "upbg greenColor": "+" == t.change.substr(0, 1)
                }]
            }, [t._v(t._s(t.change) + "%")]) : t._e()], 1), i("v-uni-navigator", {
                attrs: {
                    url: "/pages/market/kline?legal_id=" + t.legal_id + "&currency_id=" + t.currency_id + "&symbol=" + t.currency_name + "/" + t.legal_name
                }
            }, [i("v-uni-image", {
                staticClass: "h20 wt20",
                attrs: {
                    src: "/static/image/datamap.png"
                }
            })], 1)], 1), i("v-uni-view", {
                staticClass: "flex pt50 pb15 bgPart"
            }, [i("v-uni-view", {
                staticClass: "flex1 plr15"
            }, [i("v-uni-view", {
                staticClass: "flex alcenter tc overxy posRelt bggray gray7"
            }, [i("v-uni-view", {
                class: ["flex1 h35 lh35 ft14", {
                    "bggreen white": "buy" == t.type
                }],
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.changeType("buy")
                    }
                }
            }, [t._v(t._s(t.$t("trade").buy))]), i("v-uni-view", {
                staticClass: "bor abstrot mt5 bgPart"
            }), i("v-uni-view", {
                class: ["flex1 h35 lh35 ft14", {
                    "bgred white": "sell" == t.type
                }],
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.changeType("sell")
                    }
                }
            }, [t._v(t._s(t.$t("trade").sell))])], 1), i("v-uni-view", {
                staticClass: "flex alcenter ptb15 ft14"
            }, [i("v-uni-text", {
                staticClass: "gray7",
                attrs: {
                    "data-position": "bottom"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.togglePopup("bottom-share")
                    }
                }
            }, [t._v(t._s("limit" == t.priceType ? t.$t("trade").limit : t.$t("trade").shi))]), i("v-uni-image", {
                staticClass: "h10 wt10 ml5",
                attrs: {
                    src: "/static/image/pull.png"
                }
            })], 1), i("uni-popup", {
                attrs: {
                    show: "bottom-share" === t.popType,
                    position: "bottom"
                },
                on: {
                    hidePopup: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.togglePopup("")
                    }
                }
            }, [i("v-uni-view", {
                staticClass: "bottom-content"
            }, [i("v-uni-view", {
                staticClass: "bottom-content-box tc gray7"
            }, [i("v-uni-view", {
                class: ["bdb_1e ptb10 ft14 bgPart", {
                    blueColor: "limit" == t.priceType
                }],
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.changePriceType("limit")
                    }
                }
            }, [t._v(t._s(t.$t("trade").limit))]), i("v-uni-view", {
                class: ["ptb10 ft14 bgPart", {
                    blueColor: "market" == t.priceType
                }],
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.changePriceType("market")
                    }
                }
            }, [t._v(t._s(t.$t("trade").shi))]), i("v-uni-view", {
                staticClass: "pt5 pb10"
            }, [i("v-uni-view", {
                staticClass: "ptb10 ft14 bgPart",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.togglePopup("")
                    }
                }
            }, [t._v(t._s(t.$t("trade").cancel))])], 1)], 1)], 1)], 1), i("v-uni-view", {}, [i("v-uni-view", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "limit" == t.priceType,
                    expression: "priceType=='limit'"
                }]
            }, [i("v-uni-view", {
                staticClass: "bd_input flex alcenter radius2"
            }, [i("v-uni-input", {
                staticClass: "h40 flex1 plr10 bdr_input",
                attrs: {
                    type: "number",
                    placeholder: t.$t("trade.price")
                },
                model: {
                    value: t.price,
                    callback: function(e) {
                        t.price = e
                    },
                    expression: "price"
                }
            }), i("v-uni-view", {
                staticClass: "wt80 flex alcenter tc"
            }, [i("v-uni-view", {
                staticClass: "flex1 sub h12 flex alcenter jscenter",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.sub.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-image", {
                staticClass: "h12 wt12",
                attrs: {
                    src: "/static/image/sub.png"
                }
            })], 1), i("v-uni-view", {
                staticClass: "flex1 h12 flex alcenter jscenter",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.plus.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-image", {
                staticClass: "h12 wt12",
                attrs: {
                    src: "/static/image/plus.png"
                }
            })], 1)], 1)], 1)], 1), i("v-uni-view", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "market" == t.priceType,
                    expression: "priceType=='market'"
                }]
            }, [i("v-uni-view", {
                staticClass: "bd_input flex alcenter radius2 bgBlack"
            }, [i("v-uni-input", {
                staticClass: "h40 flex1 plr10",
                attrs: {
                    type: "text",
                    value: t.$t("trade.best"),
                    disabled: !0
                }
            })], 1)], 1), i("v-uni-view", {
                staticClass: "bd_input flex alcenter between mt15 plr10 radius2"
            }, [i("v-uni-input", {
                staticClass: "h40 flex1",
                attrs: {
                    type: "number",
                    placeholder: t.$t("trade.num")
                },
                on: {
                    input: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.inputNum.apply(void 0, arguments)
                    }
                },
                model: {
                    value: t.number,
                    callback: function(e) {
                        t.number = e
                    },
                    expression: "number"
                }
            }), i("v-uni-view", {
                staticClass: "gray7 ft16"
            }, [t._v(t._s(t.currency_name))])], 1), i("v-uni-view", {
                staticClass: "gray7 mt7"
            }, [t._v(t._s(t.$t("trade.use")) + " " + t._s(t.balance) + " " + t._s("buy" == t.type ? t.legal_name : t.currency_name))]), i("v-uni-view", {
                staticClass: "ptb15"
            }, [i("v-uni-view", {
                staticClass: "flex alcenter around tc tab-box gray7"
            }, t._l(t.percentList, (function(e, a) {
                    return i("v-uni-view", {
                        key: a,
                        class: ["bd_input flex1 radius2", {
                            "bggreen white bd_green": t.percent == e && "buy" == t.type
                        }, {
                            "bgred white bd_red": t.percent == e && "sell" == t.type
                        }, {
                            ml10: a > 0
                        }],
                        on: {
                            click: function(i) {
                                arguments[0] = i = t.$handleEvent(i),
                                    t.changePercent(e)
                            }
                        }
                    }, [t._v(t._s(e) + "%")])
                }
            )), 1)], 1), i("v-uni-view", {
                staticClass: "gray7 flex alcenter mt10"
            }, [i("v-uni-text", [t._v(t._s(t.$t("trade.amout")))]), i("v-uni-text", {
                staticClass: "nWhite pl5"
            }, [t._v(t._s(t.tradeNum || "--") + t._s(t.legal_name))])], 1), i("v-uni-view", {
                class: ["btn-default mt10 bgred", {
                    bggreen: "buy" == t.type
                }],
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.submit.apply(void 0, arguments)
                    }
                }
            }, [t._v(t._s("buy" == t.type ? t.$t("trade.buy") : t.$t("trade.sell")) + t._s(t.currency_name))])], 1)], 1), i("v-uni-view", {
                staticClass: "trade-left flex column"
            }, [i("v-uni-view", {
                staticClass: "flex between gray4 pr15 ft12"
            }, [i("v-uni-text", [t._v(t._s(t.$t("trade.price")))]), i("v-uni-text", [t._v(t._s(t.$t("trade.num")))])], 1), i("v-uni-view", {
                staticClass: "ft12 flex flex1 column"
            }, [1 != t.ptype ? i("v-uni-view", {
                staticClass: "flex1 flex column jsend asks"
            }, t._l(t.sellData, (function(e, a) {
                    return (0 == t.ptype ? t.sellData.length > 5 ? a > t.sellData.length - 6 && a < 10 : a < 5 : a < 10) ? i("v-uni-view", {
                        key: a,
                        staticClass: "flex between hg20 alcenter mtn gray7 pr15",
                        style: "background-size:" + parseInt(e[1] / t.sellMax * 100) + "% 100%",
                        on: {
                            click: function(i) {
                                arguments[0] = i = t.$handleEvent(i),
                                    t.changeNum(e[0])
                            }
                        }
                    }, [i("v-uni-text", {
                        staticClass: "redColor"
                    }, [t._v(t._s(e[0]))]), e[1] > 0 ? i("v-uni-text", [t._v(t._s(t._f("toFixed3")(e[1])))]) : i("v-uni-text", [t._v(t._s(e[1]))])], 1) : t._e()
                }
            )), 1) : t._e(), i("v-uni-view", {
                staticClass: "mtn"
            }, [i("v-uni-view", {
                class: ["redColor ft18", {
                    greenColor: "buy" == t.type
                }]
            }, [t._v(t._s(t.last_price))])], 1), 2 != t.ptype ? i("v-uni-view", {
                staticClass: "flex1 flex column bids"
            }, t._l(t.buyData, (function(e, a) {
                    return (0 == t.ptype ? a < 5 : a < 10) ? i("v-uni-view", {
                        key: a,
                        staticClass: "flex between hg20 alcenter mtn gray7 pr15",
                        style: "background-size:" + parseInt(e[1] / t.buyMax * 100) + "% 100%",
                        on: {
                            click: function(i) {
                                arguments[0] = i = t.$handleEvent(i),
                                    t.changeNum(e[0])
                            }
                        }
                    }, [i("v-uni-text", {
                        staticClass: "greenColor"
                    }, [t._v(t._s(e[0]))]), e[1] > 0 ? i("v-uni-text", [t._v(t._s(t._f("toFixed3")(e[1])))]) : i("v-uni-text", [t._v(t._s(e[1]))])], 1) : t._e()
                }
            )), 1) : t._e()], 1), i("v-uni-view", {
                staticClass: "flex alcenter"
            }, [i("v-uni-view", {
                class: ["wt20 h20 flex alcenter jscenter radius2 bd3a", {
                    bdActive: 0 == t.ptype
                }],
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.ptype = 0
                    }
                }
            }, [i("v-uni-image", {
                staticClass: "wt15 h15",
                attrs: {
                    src: "/static/image/pan1.svg",
                    mode: ""
                }
            })], 1), i("v-uni-view", {
                class: ["wt20 h20 flex alcenter jscenter radius2 bd3a ml5", {
                    bdActive: 1 == t.ptype
                }],
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.ptype = 1
                    }
                }
            }, [i("v-uni-image", {
                staticClass: "wt15 h15",
                attrs: {
                    src: "/static/image/pan2.svg",
                    mode: ""
                }
            })], 1), i("v-uni-view", {
                class: ["wt20 h20 flex alcenter jscenter radius2 bd3a ml5", {
                    bdActive: 2 == t.ptype
                }],
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.ptype = 2
                    }
                }
            }, [i("v-uni-image", {
                staticClass: "wt15 h15",
                attrs: {
                    src: "/static/image/pan3.svg",
                    mode: ""
                }
            })], 1)], 1)], 1)], 1), i("v-uni-view", {
                staticClass: "left-mode "
            }, [i("uni-drawer", {
                staticStyle: {
                    background: "rgb(16, 32, 48,.5)"
                },
                attrs: {
                    visible: t.showLeft,
                    mode: "left"
                },
                on: {
                    close: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.showLeft = !1
                    }
                }
            }, [i("v-uni-view", {
                staticClass: "flex column ht100"
            }, [i("v-uni-view", {
                staticClass: "pt20"
            }, [i("v-uni-view", {
                staticClass: "ft18 pl15 ptb10"
            }, [t._v(t._s(t.$t("trade.bibi")))]), i("v-uni-view", {
                staticClass: "flex plr15 bdb_1e bold gray7"
            }, t._l(t.quotationList, (function(e, a) {
                    return i("v-uni-view", {
                        key: e.id,
                        class: ["mr20 pb5 ft14", {
                            "blueColor bdb_active": t.current == a
                        }],
                        on: {
                            click: function(i) {
                                arguments[0] = i = t.$handleEvent(i),
                                    t.changeLegal(a, e.name)
                            }
                        }
                    }, [t._v(t._s(e.name))])
                }
            )), 1)], 1), t._l(t.marketList, (function(e, a) {
                    return t.current == a ? i("v-uni-view", {
                        key: a,
                        staticClass: "pb50 flex1",
                        staticStyle: {
                            "overflow-y": "scroll"
                        }
                    }, t._l(e, (function(e, a) {
                            return 1 == e.open_coin_trade ? i("v-uni-view", {
                                key: a,
                                class: ["flex alcenter between ptb15 plr15  bdb_1e", {
                                    " bggray": t.legal_id == e.legal_id && t.currency_id == e.currency_id
                                }],
                                on: {
                                    click: function(e) {
                                        arguments[0] = e = t.$handleEvent(e),
                                            t.changeCurrency(a)
                                    }
                                }
                            }, [i("v-uni-view", {
                                staticClass: "flex flexend"
                            }, [i("v-uni-text", {
                                staticClass: "ft14"
                            }, [t._v(t._s(e.currency_name))]), i("v-uni-text", {
                                staticClass: "gray7"
                            }, [t._v("/" + t._s(e.legal_name))])], 1), i("v-uni-view", {
                                class: [e.change >= 0 ? "greenColor" : "redColor"]
                            }, [t._v(t._s(e.now_price))])], 1) : t._e()
                        }
                    )), 1) : t._e()
                }
            ))], 2)], 1)], 1), i("v-uni-view", {
                staticClass: "mt10 bgPart"
            }, [i("v-uni-view", {
                staticClass: "flex alcenter between ptb10  plr15"
            }, [i("v-uni-view", {
                staticClass: "flex flexend"
            }, [i("v-uni-text", {
                staticClass: "ft18"
            }, [t._v(t._s(t.$t("trade.delegate")))]), i("v-uni-view", {
                staticClass: "flex alcenter ml10 ft14"
            }, [i("v-uni-text", {
                staticClass: "gray7",
                attrs: {
                    "data-position": "bottom"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.togglePopup("bottom-entrust")
                    }
                }
            }, [t._v(t._s("in" == t.enType ? t.$t("trade.buy") : t.$t("trade.sell")))]), i("v-uni-image", {
                staticClass: "h10 wt10 ml5",
                attrs: {
                    src: "/static/image/pull.png"
                }
            })], 1)], 1), i("v-uni-view", {
                staticClass: "flex alcenter gray7"
            }, [i("v-uni-image", {
                staticClass: "h20 wt20 ml5",
                attrs: {
                    src: "/static/image/all.png"
                }
            }), i("v-uni-navigator", {
                attrs: {
                    url: "entrust"
                }
            }, [t._v(t._s(t.$t("trade.all")))])], 1)], 1), i("uni-popup", {
                attrs: {
                    show: "bottom-entrust" === t.popType,
                    position: "bottom"
                },
                on: {
                    hidePopup: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.togglePopup("")
                    }
                }
            }, [i("v-uni-view", {
                staticClass: "bottom-content"
            }, [i("v-uni-view", {
                staticClass: "bottom-content-box tc gray7"
            }, [i("v-uni-view", {
                class: ["bdb_1e ptb10 ft14 bgPart", {
                    blueColor: "in" == t.enType
                }],
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.changeEntrustType("in")
                    }
                }
            }, [t._v(t._s(t.$t("trade.buy")))]), i("v-uni-view", {
                class: ["ptb10 ft14 bgPart", {
                    blueColor: "out" == t.enType
                }],
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.changeEntrustType("out")
                    }
                }
            }, [t._v(t._s(t.$t("trade.sell")))]), i("v-uni-view", {
                staticClass: "pt5 pb10"
            }, [i("v-uni-view", {
                staticClass: "ptb10 ft14 bgPart",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.togglePopup("")
                    }
                }
            }, [t._v(t._s(t.$t("trade.cancel")))])], 1)], 1)], 1)], 1), i("v-uni-view", {
                staticClass: "en-ul"
            }, [t._l(t.enList, (function(e, a) {
                    return i("v-uni-view", {
                        key: e.id,
                        staticClass: "ptb10 bdb_1e plr15"
                    }, [i("v-uni-view", {
                        staticClass: "flex between alcenter"
                    }, [i("v-uni-view", {
                        staticClass: "flex flex flexend"
                    }, [i("v-uni-text", {
                        class: ["ft14 redColor", {
                            greenColor: "in" == t.enType
                        }]
                    }, [t._v(t._s("in" == t.enType ? t.$t("trade.buy") : t.$t("trade.sell")))]), i("v-uni-text", {
                        staticClass: "gray4 pl10"
                    }, [t._v(t._s(e.created_at))])], 1), 3 == e.status ? i("v-uni-view", {
                        staticClass: "blueColor bgBlack radius2 plr20 ptb5"
                    }, [t._v(t._s(t.$t("trade.has_cancel")))]) : t._e(), 2 == e.status ? i("v-uni-view", {
                        staticClass: "blueColor bgBlack radius2 plr20 ptb5"
                    }, [t._v(t._s(t.$t("trade.has_done")))]) : t._e(), 1 == e.status ? i("v-uni-view", {
                        staticClass: "blueColor bgBlack radius2 plr20 ptb5",
                        on: {
                            click: function(i) {
                                arguments[0] = i = t.$handleEvent(i),
                                    t.revoke(a, e.id)
                            }
                        }
                    }, [t._v(t._s(t.$t("trade.back")))]) : t._e()], 1), i("v-uni-view", {
                        staticClass: "mt15 flex"
                    }, [i("v-uni-view", {
                        staticClass: "flex1"
                    }, [i("v-uni-text", {
                        staticClass: "gray4"
                    }, [t._v(t._s(t.$t("trade.price")))]), i("v-uni-view", {
                        staticClass: "mt5"
                    }, [t._v(t._s(e.target_price))])], 1), i("v-uni-view", {
                        staticClass: "flex1 tc"
                    }, [i("v-uni-text", {
                        staticClass: "gray4"
                    }, [t._v(t._s(t.$t("trade.num")))]), i("v-uni-view", {
                        staticClass: "mt5"
                    }, [t._v(t._s(e.trade_amount))])], 1), i("v-uni-view", {
                        staticClass: "flex1 tr"
                    }, [i("v-uni-text", {
                        staticClass: "gray4"
                    }, [t._v(t._s(t.$t("trade.dui")))]), i("v-uni-view", {
                        staticClass: "mt5"
                    }, [t._v(t._s(e.symbol))])], 1)], 1)], 1)
                }
            )), 0 == t.enList.length ? i("v-uni-view", {
                staticClass: "tc pt30 pb100"
            }, [i("v-uni-image", {
                staticClass: "h50 wt50",
                attrs: {
                    src: "/static/image/nodata.png"
                }
            }), i("v-uni-view", {
                staticClass: "gray7"
            }, [t._v(t._s(t.$t("home.norecord")))])], 1) : t._e(), i("v-uni-view", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isBottom,
                    expression: "isBottom"
                }],
                staticClass: "tc gray7 ptb20"
            }, [t._v(t._s(t.$t("home.loading")) + "...")]), i("v-uni-view", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.hasMore && t.enList.length > 10,
                    expression: "!hasMore && enList.length>10"
                }],
                staticClass: "tc gray7 ptb20"
            }, [t._v(t._s(t.$t("home.nomore")))])], 2)], 1)], 1)
        }
            , s = []
    },
    "29c5": function(t, e, i) {
        "use strict";
        var a = i("41fb")
            , n = i.n(a);
        n.a
    },
    "2caf": function(t, e, i) {
        var a = i("24fb");
        e = a(!1),
            e.push([t.i, ".uni-drawer[data-v-28e4674a]{display:block;position:fixed;top:0;left:0;right:0;bottom:0;overflow:hidden;visibility:hidden;z-index:10000000;height:100%}.uni-drawer>.uni-drawer-mask[data-v-28e4674a]{display:block;position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.4)}.uni-drawer>.uni-drawer-content[data-v-28e4674a]{display:block;position:absolute;top:0;left:0;width:70%;height:100%;background:#102030;-webkit-transition:all .3s ease-out;transition:all .3s ease-out;-webkit-transform:translatex(-100%);transform:translatex(-100%)}.uni-drawer.uni-drawer-right>.uni-drawer-content[data-v-28e4674a]{left:auto;right:0;-webkit-transform:translatex(100%);transform:translatex(100%)}.uni-drawer.uni-drawer-visible[data-v-28e4674a]{visibility:visible}.uni-drawer.uni-drawer-visible>.uni-drawer-mask[data-v-28e4674a]{display:block}.uni-drawer.uni-drawer-visible>.uni-drawer-content[data-v-28e4674a]{-webkit-transform:translatex(0);transform:translatex(0)}", ""]),
            t.exports = e
    },
    "3a6d": function(t, e, i) {
        var a = i("24fb");
        e = a(!1),
            e.push([t.i, ".trade-left[data-v-7042357a]{width:%?300?%}.w270[data-v-7042357a]{width:%?270?%}uni-slider[data-v-7042357a]{margin:0 0 0 %?14?%}.tab-box uni-view[data-v-7042357a]{padding:%?4?% 0}.sub[data-v-7042357a]{border-right:1px solid #253247}.bor[data-v-7042357a]{width:%?32?%;height:%?140?%;left:calc(50% - %?20?%);transform:rotate(25deg);-ms-transform:rotate(25deg);-moz-transform:rotate(25deg);-webkit-transform:rotate(25deg);-o-transform:rotate(25deg)}.en-ul>.bdb_1e[data-v-7042357a]:last-child{border-bottom:none}.p2[data-v-7042357a]{padding:0 %?4?%}.dwbg[data-v-7042357a]{background:rgba(250,82,82,.1)}.upbg[data-v-7042357a]{background:rgba(18,184,134,.1)}.asks>uni-view[data-v-7042357a]{background-image:-webkit-linear-gradient(rgba(250,82,82,.1),rgba(250,82,82,.1));background-image:linear-gradient(rgba(250,82,82,.1),rgba(250,82,82,.1))}.bids>uni-view[data-v-7042357a]{background-image:-webkit-linear-gradient(rgba(18,184,134,.1),rgba(18,184,134,.1));background-image:linear-gradient(rgba(18,184,134,.1),rgba(18,184,134,.1))}.asks>uni-view[data-v-7042357a],.bids>uni-view[data-v-7042357a]{background-position:100%;background-repeat:no-repeat;background-size:0 100%}", ""]),
            t.exports = e
    },
    "41fb": function(t, e, i) {
        var a = i("3a6d");
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        var n = i("4f06").default;
        n("95bf9c6a", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "538c": function(t, e, i) {
        "use strict";
        i.r(e);
        var a = i("2364")
            , n = i("6ede");
        for (var s in n)
            "default" !== s && function(t) {
                i.d(e, t, (function() {
                        return n[t]
                    }
                ))
            }(s);
        i("29c5");
        var r, c = i("f0c5"), l = Object(c["a"])(n["default"], a["b"], a["c"], !1, null, "7042357a", null, !1, a["a"], r);
        e["default"] = l.exports
    },
    "5ccf": function(t, e, i) {
        "use strict";
        i.r(e);
        var a = i("0e3c")
            , n = i.n(a);
        for (var s in a)
            "default" !== s && function(t) {
                i.d(e, t, (function() {
                        return a[t]
                    }
                ))
            }(s);
        e["default"] = n.a
    },
    "5e6d": function(t, e, i) {
        "use strict";
        i("a9e3"),
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.default = void 0;
        var a = {
            props: {
                type: String,
                color: String,
                size: [Number, String]
            },
            computed: {
                fontSize: function() {
                    return "".concat(this.size, "px")
                }
            },
            methods: {
                onClick: function() {
                    this.$emit("click")
                }
            }
        };
        e.default = a
    },
    "625f": function(t, e, i) {
        "use strict";
        i.r(e);
        var a = i("c92e")
            , n = i("5ccf");
        for (var s in n)
            "default" !== s && function(t) {
                i.d(e, t, (function() {
                        return n[t]
                    }
                ))
            }(s);
        i("a8e7");
        var r, c = i("f0c5"), l = Object(c["a"])(n["default"], a["b"], a["c"], !1, null, "6f8ce276", null, !1, a["a"], r);
        e["default"] = l.exports
    },
    "6ede": function(t, e, i) {
        "use strict";
        i.r(e);
        var a = i("1e07")
            , n = i.n(a);
        for (var s in a)
            "default" !== s && function(t) {
                i.d(e, t, (function() {
                        return a[t]
                    }
                ))
            }(s);
        e["default"] = n.a
    },
    "80db": function(t, e, i) {
        "use strict";
        var a = i("a885")
            , n = i.n(a);
        n.a
    },
    "82a7": function(t, e, i) {
        var a = i("ee19");
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        var n = i("4f06").default;
        n("c40b161e", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "893a": function(t, e, i) {
        "use strict";
        i.r(e);
        var a = i("ef5b")
            , n = i.n(a);
        for (var s in a)
            "default" !== s && function(t) {
                i.d(e, t, (function() {
                        return a[t]
                    }
                ))
            }(s);
        e["default"] = n.a
    },
    "8bc0": function(t, e, i) {
        "use strict";
        i.r(e);
        var a = i("5e6d")
            , n = i.n(a);
        for (var s in a)
            "default" !== s && function(t) {
                i.d(e, t, (function() {
                        return a[t]
                    }
                ))
            }(s);
        e["default"] = n.a
    },
    "8bda": function(t, e, i) {
        "use strict";
        i.r(e);
        var a = i("a73d")
            , n = i("893a");
        for (var s in n)
            "default" !== s && function(t) {
                i.d(e, t, (function() {
                        return n[t]
                    }
                ))
            }(s);
        i("80db");
        var r, c = i("f0c5"), l = Object(c["a"])(n["default"], a["b"], a["c"], !1, null, "28e4674a", null, !1, a["a"], r);
        e["default"] = l.exports
    },
    "93e1": function(t, e, i) {
        "use strict";
        var a;
        i.d(e, "b", (function() {
                return n
            }
        )),
            i.d(e, "c", (function() {
                    return s
                }
            )),
            i.d(e, "a", (function() {
                    return a
                }
            ));
        var n = function() {
            var t = this
                , e = t.$createElement
                , i = t._self._c || e;
            return i("v-uni-view", {
                staticClass: "uni-icon",
                class: ["uni-icon-" + t.type],
                style: {
                    color: t.color,
                    "font-size": t.fontSize
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.onClick()
                    }
                }
            })
        }
            , s = []
    },
    a73d: function(t, e, i) {
        "use strict";
        var a;
        i.d(e, "b", (function() {
                return n
            }
        )),
            i.d(e, "c", (function() {
                    return s
                }
            )),
            i.d(e, "a", (function() {
                    return a
                }
            ));
        var n = function() {
            var t = this
                , e = t.$createElement
                , i = t._self._c || e;
            return i("v-uni-view", {
                staticClass: "uni-drawer",
                class: {
                    "uni-drawer-visible": t.visible,
                    "uni-drawer-right": t.rightMode
                }
            }, [t.showMask ? i("v-uni-view", {
                staticClass: "uni-drawer-mask",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.close.apply(void 0, arguments)
                    }
                }
            }) : t._e(), i("v-uni-view", {
                staticClass: "uni-drawer-content"
            }, [t._t("default")], 2)], 1)
        }
            , s = []
    },
    a885: function(t, e, i) {
        var a = i("2caf");
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        var n = i("4f06").default;
        n("167dc0e6", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    a8e7: function(t, e, i) {
        "use strict";
        var a = i("82a7")
            , n = i.n(a);
        n.a
    },
    bea5: function(t, e, i) {
        "use strict";
        i.r(e);
        var a = i("93e1")
            , n = i("8bc0");
        for (var s in n)
            "default" !== s && function(t) {
                i.d(e, t, (function() {
                        return n[t]
                    }
                ))
            }(s);
        var r, c = i("f0c5"), l = Object(c["a"])(n["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], r);
        e["default"] = l.exports
    },
    c92e: function(t, e, i) {
        "use strict";
        var a;
        i.d(e, "b", (function() {
                return n
            }
        )),
            i.d(e, "c", (function() {
                    return s
                }
            )),
            i.d(e, "a", (function() {
                    return a
                }
            ));
        var n = function() {
            var t = this
                , e = t.$createElement
                , i = t._self._c || e;
            return i("v-uni-view", [i("v-uni-view", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.show,
                    expression: "show"
                }],
                staticClass: "uni-mask",
                style: {
                    top: t.offsetTop + "px"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.hide.apply(void 0, arguments)
                    },
                    touchmove: function(e) {
                        e.stopPropagation(),
                            e.preventDefault(),
                            arguments[0] = e = t.$handleEvent(e),
                            t.moveHandle.apply(void 0, arguments)
                    }
                }
            }), i("v-uni-view", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.show,
                    expression: "show"
                }],
                staticClass: "uni-popup",
                class: ["uni-popup-" + t.position, "uni-popup-" + t.mode]
            }, [t._v(t._s(t.msg)), t._t("default"), "middle" === t.position && "insert" === t.mode ? i("v-uni-view", {
                staticClass: " uni-icon uni-icon-close",
                class: {
                    "uni-close-bottom": "bottom" === t.buttonMode,
                    "uni-close-right": "right" === t.buttonMode
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.closeMask.apply(void 0, arguments)
                    }
                }
            }) : t._e()], 2)], 1)
        }
            , s = []
    },
    ee19: function(t, e, i) {
        var a = i("24fb");
        e = a(!1),
            e.push([t.i, '.uni-mask[data-v-6f8ce276]{position:fixed;z-index:101;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.3)}.uni-popup[data-v-6f8ce276]{position:fixed;z-index:101;background-color:#0b1622}.uni-popup-middle[data-v-6f8ce276]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.uni-popup-middle.uni-popup-insert[data-v-6f8ce276]{min-width:%?380?%;min-height:%?380?%;max-width:100%;max-height:80%;-webkit-transform:translate(-50%,-65%);transform:translate(-50%,-65%);background:none;box-shadow:none}.uni-popup-middle.uni-popup-fixed[data-v-6f8ce276]{border-radius:%?10?%;padding:%?30?%}.uni-close-bottom[data-v-6f8ce276],\n.uni-close-right[data-v-6f8ce276]{position:absolute;bottom:%?-180?%;text-align:center;border-radius:50%;color:#f5f5f5;font-size:%?60?%;font-weight:700;opacity:.8;z-index:-1}.uni-close-right[data-v-6f8ce276]{right:%?-60?%;top:%?-80?%}.uni-close-bottom[data-v-6f8ce276]:after{content:"";position:absolute;width:0;border:1px #f5f5f5 solid;top:%?-200?%;bottom:%?56?%;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);opacity:.8}.uni-popup-top[data-v-6f8ce276]{top:0;left:0;width:100%;height:%?100?%;line-height:%?100?%;text-align:center}.uni-popup-bottom[data-v-6f8ce276]{left:0;bottom:0;width:100%;min-height:%?100?%;line-height:%?100?%;text-align:center}', ""]),
            t.exports = e
    },
    ef5b: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.default = void 0;
        var a = {
            props: {
                visible: {
                    type: Boolean,
                    default: !1
                },
                mode: String,
                mask: {
                    type: [Boolean, String],
                    default: !0
                }
            },
            data: function() {
                return {
                    rightMode: !1,
                    catchtouchmove: !1
                }
            },
            computed: {
                showMask: function() {
                    return "true" === String(this.mask)
                }
            },
            created: function() {
                this.rightMode = "right" === this.mode
            },
            methods: {
                close: function() {
                    this.$emit("close")
                }
            }
        };
        e.default = a
    }
}]);
