(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-lever-orderList"], {
    "0b43": function(t, e, i) {
        "use strict";
        i.r(e);
        var a = i("290f")
            , s = i("0b9a");
        for (var n in s)
            "default" !== n && function(t) {
                i.d(e, t, (function() {
                        return s[t]
                    }
                ))
            }(n);
        i("943a");
        var o, r = i("f0c5"), l = Object(r["a"])(s["default"], a["b"], a["c"], !1, null, "1c680574", null, !1, a["a"], o);
        e["default"] = l.exports
    },
    "0b9a": function(t, e, i) {
        "use strict";
        i.r(e);
        var a = i("7282")
            , s = i.n(a);
        for (var n in a)
            "default" !== n && function(t) {
                i.d(e, t, (function() {
                        return a[t]
                    }
                ))
            }(n);
        e["default"] = s.a
    },
    "1f3a": function(t, e, i) {
        "use strict";
        var a = i("7c96")
            , s = i.n(a);
        s.a
    },
    "290f": function(t, e, i) {
        "use strict";
        var a;
        i.d(e, "b", (function() {
                return s
            }
        )),
            i.d(e, "c", (function() {
                    return n
                }
            )),
            i.d(e, "a", (function() {
                    return a
                }
            ));
        var s = function() {
            var t = this
                , e = t.$createElement
                , i = t._self._c || e;
            return i("v-uni-view", {
                staticClass: "uni-numbox"
            }, [i("v-uni-view", {
                staticClass: "uni-numbox__minus",
                class: {
                    "uni-numbox--disabled": t.inputValue <= t.min || t.disabled
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t._calcValue("minus")
                    }
                }
            }, [t._v("-")]), i("v-uni-input", {
                staticClass: "uni-numbox__value gray3",
                attrs: {
                    disabled: t.disabled,
                    type: "number"
                },
                on: {
                    blur: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t._onBlur.apply(void 0, arguments)
                    }
                },
                model: {
                    value: t.inputValue,
                    callback: function(e) {
                        t.inputValue = e
                    },
                    expression: "inputValue"
                }
            }), i("v-uni-view", {
                staticClass: "uni-numbox__plus",
                class: {
                    "uni-numbox--disabled": t.inputValue >= t.max || t.disabled
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t._calcValue("plus")
                    }
                }
            }, [t._v("+")])], 1)
        }
            , n = []
    },
    "40d0": function(t, e, i) {
        "use strict";
        i.r(e);
        var a = i("a7af")
            , s = i.n(a);
        for (var n in a)
            "default" !== n && function(t) {
                i.d(e, t, (function() {
                        return a[t]
                    }
                ))
            }(n);
        e["default"] = s.a
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
    "5ee6": function(t, e, i) {
        "use strict";
        var a = i("4ea4");
        i("99af"),
            i("4160"),
            i("a434"),
            i("a9e3"),
            i("b680"),
            i("159b"),
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.default = void 0;
        var s = a(i("5530"))
            , n = a(i("bea5"))
            , o = a(i("a3af"))
            , r = a(i("0b43"))
            , l = i("2f62")
            , c = {
            components: {
                uniIcon: n.default,
                uniPopup: o.default,
                uniNumberBox: r.default
            },
            data: function() {
                return {
                    risk: "0.00",
                    totalRisk: "0.00",
                    legalId: "",
                    currencyId: "",
                    orderList: [],
                    page: 1,
                    closeTrades: {
                        closeTradeShow: !1,
                        title: "",
                        orderId: "",
                        indexs: ""
                    },
                    isBottom: !1,
                    hasMore: !0,
                    lossData: {
                        shows: !1,
                        title: this.$t("lever.setys"),
                        datas: {},
                        expectedProfit: "0.00",
                        expectedLoss: "0.00",
                        lossPrice: "",
                        profitPrice: "",
                        indexs: ""
                    },
                    allClose: {
                        shows: !1,
                        title: this.$t("trade.confrim_ping")
                    },
                    closeType: 0,
                    langs: ""
                }
            },
            filters: {
                toFixed2: function(t) {
                    return t = Number(t),
                        t.toFixed(2)
                },
                toFixed4: function(t) {
                    return t = Number(t),
                        t.toFixed(4)
                }
            },
            onLoad: function(t) {
                uni.setNavigationBarTitle({
                    title: this.$t("trade").all_delegate
                });
                var e = this;
                t.legalId && (e.legalId = t.legalId,
                    e.currencyId = t.currencyId)
            },
            onShow: function() {
                var t = this;
                t.orderList = [],
                    t.$utils.setThemeTop(t.theme),
                    t.init(),
                    t.langs = uni.getStorageSync("lang") || "zh"
            },
            onHide: function() {},
            computed: (0,
                s.default)({}, (0,
                l.mapState)(["theme"])),
            methods: {
                init: function() {
                    var t = this;
                    t.$utils.initDataToken({
                        url: "lever/dealall",
                        type: "POST",
                        data: {
                            legal_id: t.legalId,
                            currency_id: t.currencyId,
                            page: t.page
                        }
                    }, (function(e) {

                            e.order.data.length > 0 && (t.orderList = t.orderList.concat(e.order.data),
                            t.risk = e.hazard_rate,t.totalRisk = e.profits_total,
                            1 == t.page && t.orderTrade())
                        }
                    ))
                },
                closes: function(t, e) {
                    var i = this;
                    i.closeTrades.orderId = t,
                        i.closeTrades.indexs = e,
                        i.closeTrades.closeTradeShow = !0
                },
                hideBtn: function() {
                    var t = this;
                    t.closeTrades.closeTradeShow = !1,
                        t.lossData.shows = !1,
                        t.allClose.shows = !1
                },
                comfirmClose: function() {
                    var t = this;
                    t.closeTrades.closeTradeShow = !1,
                        t.$utils.initDataToken({
                            url: "lever/close",
                            type: "POST",
                            data: {
                                id: t.closeTrades.orderId
                            }
                        }, (function(e) {
                                t.$utils.showLayer(e),
                                    t.$socket.closeSocket(),
                                    t.orderTrade(),
                                    setTimeout((function() {
                                            t.closeTrades.orderId = "",
                                                t.orderList.splice(t.closeTrades.indexs, 1)
                                        }
                                    ), 1e3)
                            }
                        ))
                },
                loss: function(t, e) {
                    var i = this;
                    i.lossData.datas = t,
                        i.lossData.shows = !0,
                        i.lossData.indexs = e,
                        t.target_profit_price > 0 ? (i.lossData.profitPrice = Number(t.target_profit_price),
                            1 == t.type ? i.lossData.profitPrice > t.price ? i.lossData.expectedProfit = (i.lossData.profitPrice - t.price) * t.share : i.lossData.expectedProfit = "0.00" : t.price > i.lossData.profitPrice ? i.lossData.expectedProfit = (t.price - i.lossData.profitPrice) * t.share : i.lossData.expectedProfit = "0.00") : i.lossData.profitPrice = Number(t.update_price),
                        t.stop_loss_price > 0 ? (i.lossData.lossPrice = Number(t.stop_loss_price),
                            1 == t.type ? t.price > i.lossData.lossPrice ? i.lossData.expectedLoss = (t.price - i.lossData.lossPrice) * t.share : i.lossData.expectedLoss = "0.00" : i.lossData.lossPrice > t.price && (i.lossData.expectedLoss = (i.lossData.lossPrice - t.price) * t.share)) : i.lossData.lossPrice = Number(t.update_price),
                        console.log(t, i.lossData)
                },
                profitChange: function(t) {
                    var e = this;
                    e.lossData.profitPrice = t,
                        1 == e.lossData.datas.type ? e.lossData.profitPrice > e.lossData.datas.price ? e.lossData.expectedProfit = (e.lossData.profitPrice - e.lossData.datas.price) * e.lossData.datas.share : e.lossData.expectedProfit = "0.00" : e.lossData.datas.price > e.lossData.profitPrice ? e.lossData.expectedProfit = (e.lossData.datas.price - e.lossData.profitPrice) * e.lossData.datas.share : e.lossData.expectedProfit = "0.00"
                },
                lossChange: function(t) {
                    var e = this;
                    e.lossData.lossPrice = t,
                        1 == e.lossData.datas.type ? e.lossData.datas.price > e.lossData.lossPrice ? e.lossData.expectedLoss = (e.lossData.datas.price - e.lossData.lossPrice) * e.lossData.datas.share : e.lossData.expectedLoss = "0.00" : e.lossData.lossPrice > e.lossData.datas.price ? e.lossData.expectedLoss = (e.lossData.lossPrice - e.lossData.datas.price) * e.lossData.datas.share : e.lossData.expectedLoss = "0.00"
                },
                lossClose: function() {
                    var t = this;
                    t.$utils.initDataToken({
                        url: "lever/setstop",
                        type: "POST",
                        data: {
                            id: t.lossData.datas.id,
                            target_profit_price: t.lossData.profitPrice,
                            stop_loss_price: t.lossData.lossPrice
                        }
                    }, (function(e) {
                            t.lossData.shows = !1,
                                t.$utils.showLayer(e),
                                t.orderList[t.lossData.indexs].target_profit_price = t.lossData.profitPrice,
                                t.orderList[t.lossData.indexs].stop_loss_price = t.lossData.lossPrice
                        }
                    ))
                },
                totalCloses: function() {
                    var t = this;
                    t.$utils.initDataToken({
                        url: "lever/batch_close",
                        type: "POST",
                        data: {
                            type: t.closeType
                        }
                    }, (function(e) {
                            t.allClose.shows = !1,
                                t.$utils.showLayer(e),
                                t.page = 1,
                                t.orderList = [],
                                t.that.init()
                        }
                    ))
                },
                onPullDownRefresh: function() {
                    this.page = 1,
                        this.init()
                },
                onReachBottom: function() {
                    this.hasMore && (this.page++,
                        this.init())
                },
                orderTrade: function() {
                    var t = this
                        , e = uni.getStorageSync("token");
                    t.$socket.listenFun([{
                        event: "login",
                        params: e
                    }, {
                        event: "sub",
                        params: "lever_trade"
                    }, {
                        event: "sub",
                        params: "lever_closed"
                    }], (function(e) {
                            var i = JSON.parse(e)
                                , a = t.orderList;
                            if ("lever_trade" == i.type) {
                                var s = i.trades_all;
                                t.legalId == i.legal_id && (t.risk = i.hazard_rate,
                                    t.totalRisk = i.profits_all),
                                    s.forEach((function(e, i) {
                                            a.forEach((function(i, a) {
                                                    i.currency == e.currency && i.legal == e.legal && e.id == i.id && t.orderList.splice(a, 1, e)
                                                }
                                            ))
                                        }
                                    ))
                            }
                            if ("lever_closed" == i.type) {
                                var n = i.id;
                                n.forEach((function(e, i) {
                                        a.forEach((function(i, a) {
                                                e == i.id && t.orderList.splice(a, 1)
                                            }
                                        ))
                                    }
                                ))
                            }
                        }
                    ))
                }
            }
        };
        e.default = c
    },
    6139: function(t, e, i) {
        "use strict";
        var a;
        i.d(e, "b", (function() {
                return s
            }
        )),
            i.d(e, "c", (function() {
                    return n
                }
            )),
            i.d(e, "a", (function() {
                    return a
                }
            ));
        var s = function() {
            var t = this
                , e = t.$createElement
                , i = t._self._c || e;
            return t.show ? i("v-uni-view", [i("v-uni-view", {
                staticClass: "uni-mask",
                style: {
                    top: t.offsetTop + "px"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.hide.apply(void 0, arguments)
                    }
                }
            }), i("v-uni-view", {
                class: "middle" == t.type ? "flex jscenter alcenter contents" : ""
            }, [i("v-uni-view", {
                class: ["uni-popup", {
                    bgWhite: t.bgColor,
                    bgBlack: !t.bgColor
                }, "uni-popup-" + t.type]
            }, [i("v-uni-view", {
                staticClass: "title"
            }, [t._v(t._s(t.msg))]), t._t("default"), t.btnShow ? i("v-uni-view", {
                staticClass: "mt20 uni-popup-bottoms"
            }, [i("v-uni-view", {
                staticClass: "uni-popup-bottom1 flex jscenter alcenter"
            }, [i("v-uni-view", {
                staticClass: "cannel flex1",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.hide.apply(void 0, arguments)
                    }
                }
            }, [t._v(t._s(t.transwords[t.lang].cancel))]), i("v-uni-view", {
                staticClass: "comfirms flex1",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.comfirms.apply(void 0, arguments)
                    }
                }
            }, [t._v(t._s(t.transwords[t.lang].confrim))])], 1)], 1) : t._e()], 2)], 1)], 1) : t._e()
        }
            , n = []
    },
    7282: function(t, e, i) {
        "use strict";
        i("a9e3"),
            i("ac1f"),
            i("1276"),
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.default = void 0;
        var a = {
            name: "UniNumberBox",
            props: {
                value: {
                    type: [Number, String],
                    default: 1
                },
                min: {
                    type: Number,
                    default: 0
                },
                max: {
                    type: Number,
                    default: 100
                },
                step: {
                    type: Number,
                    default: 1
                },
                disabled: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    inputValue: 0
                }
            },
            watch: {
                value: function(t) {
                    this.inputValue = +t
                },
                inputValue: function(t, e) {
                    +t !== +e && this.$emit("change", t)
                }
            },
            created: function() {
                this.inputValue = +this.value
            },
            methods: {
                _calcValue: function(t) {
                    if (!this.disabled) {
                        var e = this._getDecimalScale()
                            , i = this.inputValue * e
                            , a = this.step * e;
                        "minus" === t ? i -= a : "plus" === t && (i += a),
                        i < this.min || i > this.max || (this.inputValue = i / e)
                    }
                },
                _getDecimalScale: function() {
                    var t = 1;
                    return ~~this.step !== this.step && (t = Math.pow(10, (this.step + "").split(".")[1].length)),
                        t
                },
                _onBlur: function(t) {
                    var e = t.detail.value;
                    e ? (e = +e,
                        e > this.max ? e = this.max : e < this.min && (e = this.min),
                        this.inputValue = e) : this.inputValue = 0
                }
            }
        };
        e.default = a
    },
    "7c96": function(t, e, i) {
        var a = i("9ee7");
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        var s = i("4f06").default;
        s("8e1df22c", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "86e8": function(t, e, i) {
        var a = i("9704");
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        var s = i("4f06").default;
        s("79693224", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "8bc0": function(t, e, i) {
        "use strict";
        i.r(e);
        var a = i("5e6d")
            , s = i.n(a);
        for (var n in a)
            "default" !== n && function(t) {
                i.d(e, t, (function() {
                        return a[t]
                    }
                ))
            }(n);
        e["default"] = s.a
    },
    "93e1": function(t, e, i) {
        "use strict";
        var a;
        i.d(e, "b", (function() {
                return s
            }
        )),
            i.d(e, "c", (function() {
                    return n
                }
            )),
            i.d(e, "a", (function() {
                    return a
                }
            ));
        var s = function() {
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
            , n = []
    },
    "943a": function(t, e, i) {
        "use strict";
        var a = i("86e8")
            , s = i.n(a);
        s.a
    },
    9704: function(t, e, i) {
        var a = i("24fb");
        e = a(!1),
            e.push([t.i, '.uni-numbox[data-v-1c680574]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;height:%?70?%;position:relative}.uni-numbox[data-v-1c680574]:after{content:"";position:absolute;-webkit-transform-origin:center;transform-origin:center;box-sizing:border-box;pointer-events:none;top:-50%;left:-50%;right:-50%;bottom:-50%;border:1px solid #c8c7cc;border-radius:%?12?%;-webkit-transform:scale(.5);transform:scale(.5)}.uni-numbox__minus[data-v-1c680574],\n.uni-numbox__plus[data-v-1c680574]{margin:0;background-color:#f8f8f8;width:%?70?%;font-size:%?40?%;height:100%;line-height:%?70?%;text-align:center;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#333;position:relative}.uni-numbox__value[data-v-1c680574]{position:relative;background-color:#fff;width:%?180?%;height:100%;text-align:center;padding:0}.uni-numbox__value[data-v-1c680574]:after{content:"";position:absolute;-webkit-transform-origin:center;transform-origin:center;box-sizing:border-box;pointer-events:none;top:-50%;left:-50%;right:-50%;bottom:-50%;border-style:solid;border-color:#c8c7cc;border-left-width:1px;border-right-width:1px;border-top-width:0;border-bottom-width:0;-webkit-transform:scale(.5);transform:scale(.5)}.uni-numbox--disabled[data-v-1c680574]{color:silver}', ""]),
            t.exports = e
    },
    "9ee7": function(t, e, i) {
        var a = i("24fb");
        e = a(!1),
            e.push([t.i, ".uni-input-input[data-v-40a687f2]{color:#333}", ""]),
            t.exports = e
    },
    a2e8: function(t, e, i) {
        var a = i("24fb");
        e = a(!1),
            e.push([t.i, ".contents[data-v-5a4fdeee]{width:100vw;height:100vh;overflow:hidden;position:fixed;left:0;top:0;bottom:0;z-index:997}.uni-mask[data-v-5a4fdeee]{position:fixed;z-index:996;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.6);height:100vh;overflow:hidden}.uni-popup[data-v-5a4fdeee]{position:absolute;z-index:997;color:#333;box-shadow:0 0 %?30?% rgba(0,0,0,.1)}.uni-popup-middle[data-v-5a4fdeee]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:86%;border-radius:%?10?%;\n\t/* justify-content: center; */top:50vh;left:50vw;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.uni-popup-top[data-v-5a4fdeee]{top:0;left:0;width:100%;height:%?100?%;line-height:%?100?%;text-align:center}.uni-popup-bottom[data-v-5a4fdeee]{left:0;bottom:-50px;width:100%;min-height:%?100?%;line-height:%?100?%;text-align:center}.uni-popup-bottoms[data-v-5a4fdeee]{left:0;bottom:0;width:100%;height:%?80?%;line-height:%?80?%}.uni-popup-bottom1[data-v-5a4fdeee]{left:0;bottom:0;width:100%;height:%?80?%;line-height:%?80?%;text-align:center;\n\t/* margin-top:30upx; */border-top:1px solid #d0d0d0}.cannel[data-v-5a4fdeee]{background-color:#f2f2f2;font-size:%?28?%;height:%?80?%;line-height:%?80?%;color:#333;border-bottom-left-radius:%?10?%;border-right:1px solid #d0d0d0}.comfirms[data-v-5a4fdeee]{background-color:#f2f2f2;color:#40affe;font-size:%?28?%;height:%?80?%;line-height:%?80?%;border-bottom-right-radius:%?10?%}.title[data-v-5a4fdeee]{color:#333;line-height:%?100?%;font-size:16px}", ""]),
            t.exports = e
    },
    a3af: function(t, e, i) {
        "use strict";
        i.r(e);
        var a = i("6139")
            , s = i("40d0");
        for (var n in s)
            "default" !== n && function(t) {
                i.d(e, t, (function() {
                        return s[t]
                    }
                ))
            }(n);
        i("d6a5");
        var o, r = i("f0c5"), l = Object(r["a"])(s["default"], a["b"], a["c"], !1, null, "5a4fdeee", null, !1, a["a"], o);
        e["default"] = l.exports
    },
    a7af: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.default = void 0;
        var a = {
            props: {
                show: {
                    type: Boolean,
                    default: !1
                },
                type: {
                    type: String,
                    default: "middle"
                },
                msg: {
                    type: String,
                    default: ""
                },
                btnShow: {
                    type: Boolean,
                    default: !0
                },
                bgColor: {
                    type: Boolean,
                    default: !0
                },
                lang: {
                    type: String,
                    default: "hk"
                }
            },
            data: function() {
                var t = 0;
                return t = 44,
                    {
                        offsetTop: t,
                        transwords: {
                            zh: {
                                cancel: "取消",
                                confrim: "确定"
                            },
                            en: {
                                cancel: "cancel",
                                confrim: "confirm"
                            },
                            hk: {
                                cancel: "取消",
                                confrim: "確定"
                            },
                            jp: {
                                cancel: "キャンセル",
                                confrim: "を選択します"
                            }
                        },
                        translatedInfo: {
                            cancel: "取消",
                            confrim: "确定"
                        }
                    }
            },
            created: function() {
                var t = this;
                t.lang = uni.getStorageSync("lang") || "zh",
                    console.log(t.lang)
            },
            mounted: function() {
                console.log(uni.getStorageSync("lang")),
                    this.lang = uni.getStorageSync("lang") || "zh",
                    this.translatedInfo = this.transwords[this.lang]
            },
            methods: {
                hide: function() {
                    this.$emit("hidePopup")
                },
                comfirms: function() {
                    this.$emit("comfirmPopup")
                },
                moveHandle: function() {}
            }
        };
        e.default = a
    },
    ad00: function(t, e, i) {
        "use strict";
        i.d(e, "b", (function() {
                return s
            }
        )),
            i.d(e, "c", (function() {
                    return n
                }
            )),
            i.d(e, "a", (function() {
                    return a
                }
            ));
        var a = {
            uniNumberBox: i("0b43").default
        }
            , s = function() {
            var t = this
                , e = t.$createElement
                , i = t._self._c || e;
            return i("v-uni-view", {
                class: {
                    light: "light" == t.theme
                }
            }, [i("v-uni-view", {
                staticClass: "flex between alcenter pt10 plr15 bdb_1e pb10 fixed bgBlack w100"
            }, [i("v-uni-view", {}, [i("v-uni-view", {}, [t._v(t._s(t.$t("lever.risk")) + "：" + t._s(t._f("toFixed2")(t.risk || "0.00")) + "%")]), i("v-uni-view", {
                staticClass: "pt5"
            }, [t._v(t._s(t.$t("lever.totalyk")) + "："), i("v-uni-text", {
                class: t.totalRisk < 0 ? "red" : "green"
            }, [t._v(t._s(t._f("toFixed4")(t.totalRisk || "0.0000")))])], 1)], 1), i("v-uni-view", {
                staticClass: "bgBlue white ptb10 tc radius6",
                staticStyle: {
                    width: "120px"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.allClose.shows = !0
                    }
                }
            }, [t._v(t._s(t.$t("lever.yijian")))])], 1), i("v-uni-view", {
                staticClass: "list pt60 ft13"
            }, t._l(t.orderList, (function(e, a) {
                    return i("v-uni-view", {
                        key: a,
                        staticClass: "plr15 bdb_1e mt10 pb10"
                    }, [i("v-uni-view", {
                        staticClass: "flex between mb10"
                    }, [i("v-uni-view", {}, [i("v-uni-text", {
                        class: 1 == e.type ? "green ft14" : "red ft14"
                    }, [t._v(t._s(1 == e.type ? t.$t("trade.buy") : t.$t("trade.sell")))]), i("v-uni-text", {
                        staticClass: "ml5"
                    }, [t._v(t._s(e.symbol))]), i("v-uni-text", {
                        staticClass: "ml5"
                    }, [t._v("x" + t._s(e.share) + t._s(t.$t("trade.hand")))])], 1), i("v-uni-view", {
                        class: e.profits < 0 ? "red" : "green"
                    }, [t._v(t._s(t._f("toFixed4")(e.profits || "0.0000")))])], 1), i("v-uni-view", {
                        staticClass: "flex wraps"
                    }, [i("v-uni-view", {
                        staticClass: "w33"
                    }, [i("v-uni-view", {
                        staticClass: "gray4"
                    }, [t._v(t._s(t.$t("trade.price_cang")))]), i("v-uni-view", {
                        staticClass: "mt5 ft14"
                    }, [t._v(t._s(t._f("toFixed4")(e.price || "0.0000")))])], 1), i("v-uni-view", {
                        staticClass: "w33 tc"
                    }, [i("v-uni-view", {
                        staticClass: "gray4"
                    }, [t._v(t._s(t.$t("trade.price_zhiying")))]), i("v-uni-view", {
                        staticClass: "mt5 ft14"
                    }, [t._v(t._s(t._f("toFixed4")(e.target_profit_price || "0.0000")))])], 1), i("v-uni-view", {
                        staticClass: "w33 tr"
                    }, [i("v-uni-view", {
                        staticClass: "gray4"
                    }, [t._v(t._s(t.$t("trade.price_cur")))]), i("v-uni-view", {
                        staticClass: "mt5 ft14"
                    }, [t._v(t._s(t._f("toFixed4")(e.update_price || "0.0000")))])], 1), i("v-uni-view", {
                        staticClass: "w33 mt10"
                    }, [i("v-uni-view", {
                        staticClass: "gray4"
                    }, [t._v(t._s(t.$t("trade.price_lose")))]), i("v-uni-view", {
                        staticClass: "mt5 ft14"
                    }, [t._v(t._s(t._f("toFixed4")(e.stop_loss_price || "0.0000")))])], 1), i("v-uni-view", {
                        staticClass: "w33 tc mt10"
                    }, [i("v-uni-view", {
                        staticClass: "gray4"
                    }, [t._v(t._s(t.$t("trade.money")))]), i("v-uni-view", {
                        staticClass: "mt5 ft14"
                    }, [t._v(t._s(t._f("toFixed4")(e.caution_money || "0.0000")))])], 1), i("v-uni-view", {
                        staticClass: "w33 tr mt10"
                    }, [i("v-uni-view", {
                        staticClass: "gray4"
                    }, [t._v(t._s(t.$t("trade.geye_fee")))]), i("v-uni-view", {
                        staticClass: "mt5 ft14"
                    }, [t._v(t._s(t._f("toFixed4")(e.overnight_money || "0.0000")))])], 1), i("v-uni-view", {
                        staticClass: "w33 mt10"
                    }, [i("v-uni-view", {
                        staticClass: "gray4"
                    }, [t._v(t._s(t.$t("trade.fee")))]), i("v-uni-view", {
                        staticClass: "mt5 ft14"
                    }, [t._v(t._s(t._f("toFixed4")(e.trade_fee || "0.0000")))])], 1), i("v-uni-view", {
                        staticClass: "w33 tc mt10"
                    }, [i("v-uni-view", {
                        staticClass: "gray4"
                    }, [t._v(t._s(t.$t("trade.time_start")))]), i("v-uni-view", {
                        staticClass: "mt5"
                    }, [t._v(t._s(e.time))])], 1)], 1), i("v-uni-view", {
                        staticClass: "flex tr mt15 jsend"
                    }, [i("v-uni-view", {
                        staticClass: "bgBlue ptb10 plr15 white radius4",
                        on: {
                            click: function(i) {
                                arguments[0] = i = t.$handleEvent(i),
                                    t.loss(e, a)
                            }
                        }
                    }, [t._v(t._s(t.$t("lever.setys")))]), i("v-uni-view", {
                        staticClass: "bgBlue ptb10 plr15 white radius4 ml10",
                        on: {
                            click: function(i) {
                                arguments[0] = i = t.$handleEvent(i),
                                    t.closes(e.id, a)
                            }
                        }
                    }, [t._v(t._s(t.$t("trade.pingcang")))])], 1)], 1)
                }
            )), 1), 0 == t.orderList.length ? i("v-uni-view", {
                staticClass: "tc ptb30"
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
                    value: !t.hasMore && t.orderList.length > 10,
                    expression: "!hasMore && orderList.length > 10"
                }],
                staticClass: "tc gray7 ptb20"
            }, [t._v(t._s(t.$t("home.nomore")))]), i("uni-popup", {
                attrs: {
                    show: t.closeTrades.closeTradeShow,
                    msg: t.closeTrades.title,
                    lang: t.langs
                },
                on: {
                    hidePopup: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.hideBtn.apply(void 0, arguments)
                    },
                    comfirmPopup: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.comfirmClose.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-view", {
                staticClass: "uni-common-mt flex1 ft16"
            }, [t._v(t._s(t.$t("trade.confrim_ping")))])], 1), i("uni-popup", {
                attrs: {
                    show: t.lossData.shows,
                    msg: t.lossData.title,
                    lang: t.langs
                },
                on: {
                    hidePopup: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.hideBtn.apply(void 0, arguments)
                    },
                    comfirmPopup: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.lossClose.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-view", {
                staticClass: "uni-common-mt flex1 ft16"
            }, [i("v-uni-view", {
                staticClass: "flex alcenter"
            }, [i("v-uni-view", {
                staticClass: "ft13"
            }, [t._v(t._s(t.$t("lever.price_zhiying")) + "：")]), i("v-uni-view", {
                staticClass: "gray3"
            }, [i("uni-number-box", {
                staticClass: "gray3",
                attrs: {
                    value: t.lossData.profitPrice,
                    max: 1e14
                },
                on: {
                    change: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.profitChange.apply(void 0, arguments)
                    }
                }
            })], 1)], 1), i("v-uni-view", {
                staticClass: "ft13 mt20 tc"
            }, [t._v(t._s(t.$t("lever.profit")) + "：" + t._s(t._f("toFixed2")(t.lossData.expectedProfit || "0.00")))]), i("v-uni-view", {
                staticClass: "flex alcenter mt10"
            }, [i("v-uni-view", {
                staticClass: "ft13"
            }, [t._v(t._s(t.$t("lever.price_lose")) + "：")]), i("v-uni-view", {
                staticClass: "gray3"
            }, [i("uni-number-box", {
                staticClass: "gray3",
                attrs: {
                    value: t.lossData.lossPrice,
                    max: 1e14
                },
                on: {
                    change: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.lossChange.apply(void 0, arguments)
                    }
                }
            })], 1)], 1), i("v-uni-view", {
                staticClass: "ft13 mt20 tc"
            }, [t._v(t._s(t.$t("lever.lose")) + "：" + t._s(t._f("toFixed2")(t.lossData.expectedLoss || "0.00")))])], 1)], 1), i("uni-popup", {
                attrs: {
                    show: t.allClose.shows,
                    msg: t.allClose.title,
                    lang: t.langs
                },
                on: {
                    hidePopup: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.hideBtn.apply(void 0, arguments)
                    },
                    comfirmPopup: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.totalCloses.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-view", {
                staticClass: "uni-common-mt flex1 ft16 flex "
            }, [i("v-uni-view", {
                staticClass: "ptb5 plr10 radius6 ft13",
                class: 0 == t.closeType ? "bgBlue white" : "bor2 blue2",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.closeType = 0
                    }
                }
            }, [t._v(t._s(t.$t("lever.all_ping")))]), i("v-uni-view", {
                staticClass: "ml10 ptb5 plr10 radius6 ft13",
                class: 1 == t.closeType ? "bgGreen white" : "green bor3",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.closeType = 1
                    }
                }
            }, [t._v(t._s(t.$t("lever.duo_ping")))]), i("v-uni-view", {
                staticClass: "ml10 ptb5 plr10 radius6 ft13",
                class: 2 == t.closeType ? "bgRed white" : "red bor4",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                            t.closeType = 2
                    }
                }
            }, [t._v(t._s(t.$t("lever.kong_ping")))])], 1)], 1)], 1)
        }
            , n = []
    },
    bea5: function(t, e, i) {
        "use strict";
        i.r(e);
        var a = i("93e1")
            , s = i("8bc0");
        for (var n in s)
            "default" !== n && function(t) {
                i.d(e, t, (function() {
                        return s[t]
                    }
                ))
            }(n);
        var o, r = i("f0c5"), l = Object(r["a"])(s["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], o);
        e["default"] = l.exports
    },
    c538: function(t, e, i) {
        "use strict";
        i.r(e);
        var a = i("5ee6")
            , s = i.n(a);
        for (var n in a)
            "default" !== n && function(t) {
                i.d(e, t, (function() {
                        return a[t]
                    }
                ))
            }(n);
        e["default"] = s.a
    },
    ca2b: function(t, e, i) {
        "use strict";
        i.r(e);
        var a = i("ad00")
            , s = i("c538");
        for (var n in s)
            "default" !== n && function(t) {
                i.d(e, t, (function() {
                        return s[t]
                    }
                ))
            }(n);
        i("1f3a");
        var o, r = i("f0c5"), l = Object(r["a"])(s["default"], a["b"], a["c"], !1, null, "40a687f2", null, !1, a["a"], o);
        e["default"] = l.exports
    },
    d6a5: function(t, e, i) {
        "use strict";
        var a = i("db55")
            , s = i.n(a);
        s.a
    },
    db55: function(t, e, i) {
        var a = i("a2e8");
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        var s = i("4f06").default;
        s("9e2f1e4e", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }
}]);
