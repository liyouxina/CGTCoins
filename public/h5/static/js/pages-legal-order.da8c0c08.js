(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-legal-order"],{"0f65":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".zfps uni-image[data-v-31febde5]{margin-top:%?20?%;display:block}uni-page-body[data-v-31febde5]{background-color:#131f30}.info .infos[data-v-31febde5]{border-bottom:1px solid #263243}.pay_order[data-v-31febde5]{background-color:#152a42;z-index:11}\n/* 付款码弹窗 */.sx_show[data-v-31febde5]{position:fixed;top:calc(0px + %?100?%);width:100%;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.7);z-index:102}.sx_show .xian[data-v-31febde5]{height:%?40?%;width:%?4?%}\n/* 取消交易弹窗 */.uni-tip[data-v-31febde5]{padding:%?20?%;width:%?600?%;background:#131e34;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-border-radius:%?20?%;border-radius:%?20?%}.uni-tip-title[data-v-31febde5]{text-align:center;font-weight:700;font-size:%?32?%;color:#fff}.uni-tip-content[data-v-31febde5]{padding:%?30?%}.uni-tip-group-button[data-v-31febde5]{margin-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex}.uni-tip-button[data-v-31febde5]{width:100%;text-align:center;font-size:%?28?%}.center-box[data-v-31febde5]{width:%?500?%;height:%?500?%}.center-box .image[data-v-31febde5]{width:100%;height:100%}body.?%PAGE?%[data-v-31febde5]{background-color:#131f30}",""]),t.exports=e},2713:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{class:{light:"light"==t.theme}},[a("v-uni-view",{staticClass:"status_bar bgBlue3"},[a("v-uni-view",{staticClass:"top_view bgBlue3"})],1),a("v-uni-view",{staticClass:"header fixed flex alcenter between plr15 bgBlue3"},[a("v-uni-view",[a("v-uni-image",{staticClass:"wt20 h20",attrs:{src:i("1e67"),mode:"aspectFit"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back()}}})],1)],1),a("v-uni-view",{},[a("v-uni-view",{staticClass:"done flex between alcenter pt60 plr15 pb15 bgBlue3"},[a("v-uni-view",{staticClass:"flex column flexstart"},[a("v-uni-view",{staticClass:"flex alcenter"},[a("v-uni-image",{staticClass:"wt20 h20",attrs:{src:i("bc78"),mode:"aspectFit"}}),0===t.data.is_sure&&"sell"==t.data.type?a("v-uni-text",{staticClass:"white ft24 bold ml5"},[t._v(t._s(t.$t("store.p_pay")))]):t._e(),0===t.data.is_sure&&"buy"==t.data.type?a("v-uni-text",{staticClass:"white ft24 bold ml5"},[t._v(t._s(t.$t("store.p_waitpay")))]):t._e(),2==t.data.is_sure?a("v-uni-text",{staticClass:"white ft24 bold ml5"},[t._v(t._s(t.$t("trade.has_cancel")))]):t._e(),3==t.data.is_sure?a("v-uni-text",{staticClass:"white ft24 bold ml5"},[t._v(t._s(t.$t("trade.has_pay")))]):t._e(),1===t.data.is_sure?a("v-uni-text",{staticClass:"white ft24 bold ml5"},[t._v(t._s(t.$t("trade.has_done")))]):t._e()],1),a("v-uni-view",{staticClass:"pt5"},[0===t.data.is_sure&&"sell"==t.data.type?a("v-uni-text",{staticClass:"white"},[t._v(t._s(t.$t("legal.t_tip1")))]):t._e(),0===t.data.is_sure&&"buy"==t.data.type?a("v-uni-text",{staticClass:"white"},[t._v(t._s(t.$t("legal.t_tip2")))]):t._e(),2==t.data.is_sure?a("v-uni-text",{staticClass:"white"},[t._v(t._s(t.$t("store.t_paycancel")))]):t._e(),3==t.data.is_sure?a("v-uni-text",{staticClass:"white"},[t._v(t._s(t.$t("store.t_havepay")))]):t._e(),1===t.data.is_sure?a("v-uni-text",{staticClass:"white"},[t._v(t._s(t.$t("store.t_hasdone")))]):t._e()],1)],1),a("v-uni-view",{staticClass:"flex column alcenter",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.call(t.data.seller_phone)}}},[a("v-uni-image",{staticClass:"wt30 h25",attrs:{src:i("2946"),mode:"aspectFit"}}),a("v-uni-text",{staticClass:"ft12 white mt5"},[t._v(t._s(t.$t("store.call")))])],1)],1),a("v-uni-view",{staticClass:"price flex column plr15 ptb15"},[a("v-uni-view",{staticClass:"flex alcenter"},[a("v-uni-text",{staticClass:"mr5 blue21 ft18 bold"},[t._v("￥"+t._s(t.data.deal_money))])],1),a("v-uni-view",{staticClass:"flex between alcenter mt10 ft13 price_b"},[a("v-uni-view",{staticClass:"flex column between gray75",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.togglePopup("bottom","share")}}},[a("v-uni-text",[t._v(t._s(t.$t("legal.price")))]),a("v-uni-text",{staticClass:"pt5"},[t._v(t._s(t.$t("legal.num")))])],1),a("v-uni-view",{staticClass:"flex column between"},[a("v-uni-text",[t._v("￥"+t._s(t.data.price))]),a("v-uni-text",{staticClass:"pt5"},[t._v(t._s(t.data.number)+" "+t._s(t.data.currency_name))])],1),a("v-uni-view",{staticClass:"flex column alcenter between"},[a("v-uni-image",{staticClass:"wt20 h20",attrs:{src:i("9f1c"),mode:"aspectFit"}}),a("v-uni-text",{},[t._v(t._s(t.data.currency_name))])],1)],1)],1),a("v-uni-view",{staticClass:"h15 bggray"}),a("v-uni-view",{staticClass:"info flex column plr15 ft13  pt10 pb150"},[a("v-uni-view",{staticClass:"flex between alcenter ptb10 bdb1f"},[a("v-uni-view",{staticClass:"flex alcenter"},["ali_pay"==t.data.way_name?a("v-uni-image",{staticClass:"wt15 h15 mr5",attrs:{src:i("b25e"),mode:"aspectFit"}}):"we_chat"==t.data.way_name?a("v-uni-image",{staticClass:"wt15 h15 mr5",attrs:{src:i("3637"),mode:"aspectFit"}}):a("v-uni-image",{staticClass:"wt15 h15 mr5",attrs:{src:i("77c1"),mode:"aspectFit"}}),a("v-uni-text",{staticClass:"mr5"},[t._v(t._s(t.data.way_name))])],1)],1),a("v-uni-view",{staticClass:"flex between alcenter ptb10 bdb1f"},[a("v-uni-text",{staticClass:"gray75"},[t._v(t._s("sell"==t.data.type?t.$t("store.collectper"):t.$t("store.payper")))]),a("v-uni-view",{staticClass:"flex alcenter ht100 w65"},[a("v-uni-text",{staticClass:"tr mr5 flex1"},[t._v(t._s(t.data.hes_realname))])],1)],1),"sell"!=t.data.type||"ali_pay"!=t.data.way_name&&"we_chat"!=t.data.way_name?t._e():a("v-uni-view",{staticClass:"flex between alcenter ptb10 bdb1f"},[a("v-uni-text",{staticClass:"gray75"},[t._v(t._s(t.$t("store.collectcode")))]),a("v-uni-view",{staticClass:"flex alcenter"},[a("v-uni-image",{staticClass:"wt20 h20",attrs:{src:i("3010"),mode:"aspectFit"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isshow()}}})],1)],1),"sell"==t.data.type?a("v-uni-view",{staticClass:"flex between alcenter ptb10 bdb1f"},[a("v-uni-text",{staticClass:"gray75"},[t._v(t._s(t.$t("store.collectacc")))]),a("v-uni-view",{staticClass:"flex alcenter ht100 w65"},[a("v-uni-text",{staticClass:"tr mr5 flex1"},[t._v(t._s(t.data.hes_account))]),a("v-uni-image",{staticClass:"wt15 h15",attrs:{src:i("e127"),mode:"aspectFit"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copy(t.data.hes_account)}}})],1)],1):t._e(),a("v-uni-view",{staticClass:"flex between alcenter ptb10 bdb1f"},[a("v-uni-text",{staticClass:"gray75"},[t._v(t._s(t.$t("store.paycancode")))]),a("v-uni-view",{staticClass:"flex alcenter"},[a("v-uni-text",{staticClass:"mr5"},[t._v(t._s(t.data.id))])],1)],1),a("v-uni-view",{staticClass:"flex between alcenter ptb10 bdb1f"},[a("v-uni-text",{staticClass:"gray75"},[t._v(t._s(t.$t("store.dotime")))]),a("v-uni-text",{staticClass:"mr5"},[t._v(t._s(t.data.create_time))])],1),0==t.data.is_sure&&"sell"==t.data.type?a("v-uni-view",{staticClass:"flex alcenter ptb10"},[a("v-uni-text",[t._v(t._s(t.$t("store.t_self"))+t._s(t.data.way_name)+t._s(t.$t("store.t_transfer")))])],1):t._e(),0==t.data.is_sure&&"sell"==t.data.type?a("v-uni-view",{staticClass:"zfps gray75"},[a("v-uni-text",[t._v(t._s(t.$t("zdy.zfpz")))]),t.pay_orders_img?t._e():a("v-uni-image",{attrs:{src:i("d738"),mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadImg.apply(void 0,arguments)}}}),t.pay_orders_img?a("v-uni-image",{attrs:{src:t.pay_orders_img,mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadImg.apply(void 0,arguments)}}}):t._e()],1):t._e(),t.data.is_sure?a("v-uni-view",{staticClass:"zfps gray75"},[a("v-uni-text",[t._v(t._s(t.$t("zdy.zfpz")))]),t.pay_orders_img?a("v-uni-image",{attrs:{src:t.pay_orders_img,mode:"widthFix"}}):t._e()],1):t._e()],1)],1),0==t.data.is_sure&&"sell"==t.data.type?a("v-uni-view",{staticClass:"bggray w100 fixed lf0 btm0"},[a("v-uni-view",{staticClass:"ptb10 plr15 gray75"},[t._v(t._s(t.$t("store.t_tip"))+"。")]),a("v-uni-view",{staticClass:"flex between alcenter white bold plr15 ft14 ptb10 baseBg2"},[a("v-uni-view",{staticClass:"baseBg3 radius2 ptb10 flex1 tc mr10",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.togglePopup("center","ceil"),t.payType="ceil"}}},[t._v(t._s(t.$t("store.cancelorder")))]),a("v-uni-view",{staticClass:"bgBlue2 radius2 ptb10 flex1 tc doit pointer ml5",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.togglePopup("center","ceil"),t.payType="ipay"}}},[t._v(t._s(t.$t("store.ipay")))])],1)],1):t._e(),3==t.data.is_sure&&"buy"==t.data.type?a("v-uni-view",{staticClass:"bggray w100 fixed lf0 btm0"},[a("v-uni-view",{staticClass:"ptb10 plr15 gray75 tc"},[t._v(t._s(t.$t("store.t_look")))]),a("v-uni-view",{staticClass:"flex between alcenter white bold plr15 ft14 ptb10 baseBg2"},[a("v-uni-view",{staticClass:"bgBlue2 radius2 ptb10 flex1 tc doit pointer ml5",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.togglePopup("center","ceil"),t.payType="fpay"}}},[t._v(t._s(t.$t("store.t_con_collect")))])],1)],1):t._e(),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.pay_code,expression:"pay_code"}],staticClass:"sx_show flex column alcenter jscenter",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isshow()}}},[a("v-uni-view",{staticClass:"center-box ptb15 plr15 tc bgWhite",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[a("v-uni-image",{staticClass:"w100",attrs:{src:"ali_pay"==t.data.way_name?t.cash.to_pay_info.alipay_qr_code:t.cash.to_pay_info.wechat_qr_code,mode:"aspectFit"}})],1),a("v-uni-view",{staticClass:"xian bgWhite"}),a("v-uni-image",{staticClass:"wt30 h30",attrs:{src:i("20a4"),mode:"aspectFit"},on:{click:[function(e){arguments[0]=e=t.$handleEvent(e),t.isshow()},function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}]}})],1),a("uni-popup",{ref:"ceil",attrs:{type:t.type,custom:!0}},["ceil"==t.payType?a("v-uni-view",{staticClass:"uni-tip"},[a("v-uni-view",{staticClass:"uni-tip-title"},[t._v(t._s(t.$t("store.cancel_confrim")))]),a("v-uni-view",{staticClass:"uni-tip-content flex column white ft12"},[a("v-uni-text",{staticClass:"blue21"},[t._v(t._s(t.$t("store.t_tip1")))]),a("v-uni-text",{staticClass:"tl mt5"},[t._v(t._s(t.$t("store.t_rule"))+":"+t._s(t.$t("store.t_tip2"))+"。")]),a("v-uni-view",{staticClass:"mt5 flex alcenter"},[a("v-uni-checkbox",{staticStyle:{transform:"scale(0.7)",color:"'#1881d2'"},attrs:{value:"cb",checked:t.is_ok},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tapChecked.apply(void 0,arguments)}}}),a("v-uni-text",[t._v(t._s(t.$t("legal.t_tip3")))])],1)],1),a("v-uni-view",{staticClass:"uni-tip-group-button"},[a("v-uni-view",{staticClass:"uni-tip-button white",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel("ceil")}}},[t._v(t._s(t.$t("store.ithink")))]),a("v-uni-view",{staticClass:"uni-tip-button blue21",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel("ceil"),t.togglePopup("bottom","share")}}},[t._v(t._s(t.$t("login.e_confrim2")))])],1)],1):t._e(),"ipay"==t.payType?a("v-uni-view",{staticClass:"uni-tip"},[a("v-uni-view",{staticClass:"uni-tip-title"},[t._v(t._s(t.$t("store.confrim_ipay")))]),a("v-uni-view",{staticClass:"uni-tip-content white tc ft12"},[a("v-uni-text",{staticClass:"blue21"},[t._v(t._s(t.$t("store.donotconfrim"))+"。")]),a("v-uni-view",{staticClass:"mt5"},[t._v(t._s(t.$t("store.lockacc"))+"。")])],1),a("v-uni-view",{staticClass:"uni-tip-group-button"},[a("v-uni-view",{staticClass:"uni-tip-button white",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel("ceil")}}},[t._v(t._s(t.$t("trade.cancel")))]),a("v-uni-view",{staticClass:"uni-tip-button blue21",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel("ceil"),t.togglePopup("bottom","share")}}},[t._v(t._s(t.$t("login.e_confrim2")))])],1)],1):t._e(),"fpay"==t.payType?a("v-uni-view",{staticClass:"uni-tip"},[a("v-uni-view",{staticClass:"uni-tip-title"},[t._v(t._s(t.$t("store.t_con_collect")))]),a("v-uni-view",{staticClass:"uni-tip-content white tc ft12"},[a("v-uni-text",{staticClass:"blue21"},[t._v(t._s(t.$t("store.notpayconfrim"))+"。")]),a("v-uni-view",{staticClass:"mt5"},[t._v(t._s(t.$t("store.hedui"))+"。")])],1),a("v-uni-view",{staticClass:"uni-tip-group-button"},[a("v-uni-view",{staticClass:"uni-tip-button white",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel("ceil")}}},[t._v(t._s(t.$t("trade.cancel")))]),a("v-uni-view",{staticClass:"uni-tip-button blue21",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel("ceil"),t.togglePopup("bottom","share")}}},[t._v(t._s(t.$t("login.e_confrim2")))])],1)],1):t._e()],1),a("uni-popup",{ref:"share",attrs:{type:t.type,custom:!0}},[a("v-uni-view",{staticClass:"uni-share bgPart"},[a("v-uni-view",{staticClass:"uni-share-content"},[a("v-uni-view",{staticClass:"uni-share-title tc h40 lh40 bdb_1e ft16"},[t._v(t._s(t.$t("login.s_dealpwd")))]),a("v-uni-view",{staticClass:"flex alcenter ptb20 plr20"},[a("v-uni-text",[t._v(t._s(t.$t("login.s_dealpwd")))]),a("v-uni-input",{staticClass:"h40 flex1 plr15 ml10 bd_input radius2",attrs:{type:"password",placeholder:t.$t("login.e_pdeal")},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("v-uni-view",{staticClass:"bgBlue tc h40 lh40 white",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v(t._s(t.$t("login.e_confrim")))])],1)],1)],1)],1)},n=[]},"2da7":function(t,e,i){var a=i("0f65");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("08487f79",a,!0,{sourceMap:!1,shadowMode:!1})},3637:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2MTIyMDY5RThGQTgxMUU4QjA3NERCOEVBRkM4MjY1NCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MTIyMDY5RjhGQTgxMUU4QjA3NERCOEVBRkM4MjY1NCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYxMjIwNjlDOEZBODExRThCMDc0REI4RUFGQzgyNjU0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjYxMjIwNjlEOEZBODExRThCMDc0REI4RUFGQzgyNjU0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+NmmPyAAAA3BJREFUeNrUmX1oTWEcx88919qLeRsji0ZMQ8aSd6FkoiSpETX84R/KH4pI5P3lH2//Yc0fKySTyR+4KKvZvLQijbGEkaEhe7FNM98f38vZ09nuOfc+d7vnW5/Wnufc7Xue83t+z+93rs+4kWxYlARWghUgE3SY7EY1gSpwCZwD34MTPovhySAfTDJiS8/AelAqv5gczAaBGDQrGguug1lBw71BIRhgxK6S6bG/GM4F443Y10iwVgyvNryjXJPZwCsaYTKVeUUJYrjdQ4bbe2n4Iz9BC/CDxGg7DtdwOfN2GXgNGkAcSAUTwFyQAwbrNiwnXR1+pji8/i44QLOhNBSsA1tBP01+v5guLj4MFjg0K/oADoLZ4IGuFXZqeBfYznh1q6dgEcOnWwxfAfuUsaVgD0i3uV5ieC+YZ32UrAI/R3vTNXFlrZrImxClsZIKSjZeEciQYxSMBq2cewsOgaPRXOFb4Lky9hHcZ41aocy1McbrwT2L2aAKrbVtNFa41GasFsxhCnuvzP0CGxlCtUxrOQyTvjRbCca4yEyuDL/pZLzVxqz6FHaCqaAEXGVINILdoA/DZhnI481rMRzOwTIEnAGPWAnahcAP8IlP8DjYD9boMJzh0mwS26yz4LLDz7zjBq22yUauN918l4Z3gGuKWfkfCTbXJv45af9LVvlUpIZnctM4UTo5rZgKsJEcZxnPZPYJKOXtNq542IZl/pjDfk9u7KZSrvqZKQayd7SGTgrn/Jbxb2ztIzrpZGXOc2eHivdKZayBT0kOkIeW8QqOzWDOtqpMRy2xkK32qBCdbZPNeD0zgl3qa7SryHQYDsZzdhfzX3k4RKrhuvJsDXd/KuuHLPAYvGLspfKGyiM0vFhXAV8MboMtXayCxOl0HtHhaBqbhHgdBbzc+ckQj2wK2Bym2RSmxHhdMRzn8LojbI3cKI1laZaujsNtyVoAToBhDj9ToBT82rtmJ9oEVoGL4A54wZQVx7DKYsUnzUAVU2ePGhYNAhtIG/O0XzmOpfR8wnm/7jY/qm91lGIo4iwRbfmcbhCf4R35xHCzhwy3mNyhXlGNGL7gIcNFJmvdag+YlZydb7KrzeukNo0VtbJRrTMtVb68sHsZg2bl3cgSvoXq8E2owd5N3g8sN/5+zZTYQyababSYdca/l4i/BRgAqFqymY7QN6sAAAAASUVORK5CYII="},"982b":function(t,e,i){"use strict";i.r(e);var a=i("2713"),s=i("a0f8");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("c403");var l,c=i("f0c5"),o=Object(c["a"])(s["default"],a["b"],a["c"],!1,null,"31febde5",null,!1,a["a"],l);e["default"]=o.exports},a0f8:function(t,e,i){"use strict";i.r(e);var a=i("de77"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},c403:function(t,e,i){"use strict";var a=i("2da7"),s=i.n(a);s.a},de77:function(t,e,i){"use strict";var a=i("4ea4");i("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(i("5530")),n=(i("17be"),a(i("649d"))),l=i("2f62"),c=a(i("426a")),o={components:{uniPopup:n.default},data:function(){return{pay_orders_img:"",id:"",password:"",show:!1,type:"",pay_code:!1,is_ok:!1,data:{},cash:{},payType:"",timer:""}},onLoad:function(t){this.id=t.id},onShow:function(){this.$utils.setThemeTop(this.theme),this.getDetail()},computed:(0,s.default)({},(0,l.mapState)(["theme"])),methods:{uploadImg:function(){if(!this.cash.is_sure){var t=this;uni.chooseImage({count:1,sizeType:["compressed"],success:function(e){var i=e.tempFilePaths;uni.uploadFile({url:"/api/upload",filePath:i[0],name:"file",formData:{user:"test"},success:function(e){console.log(typeof e.data);var i=JSON.parse(e.data);console.log(i),"ok"==i.type&&(t.pay_orders_img=i.message)}})}})}},checkTime:function(t){return t<10&&(t="0"+t),t},downTime:function(t){var e=this,i=Date.parse(new Date)/1e3;t=t;setInterval((function(){var a=t-i,s=parseInt(a/60/60%24,10),n=parseInt(a/60%60,10),l=parseInt(a%60,10);s=e.checkTime(s),n=e.checkTime(n),l=e.checkTime(l),a>0?(e.timer=s+"时"+n+"分"+l+"秒",i++):a<0&&(e.timer="00:00:00")}),1e3)},back:function(){uni.navigateBack()},getDetail:function(){var t=this;this.$utils.initDataToken({url:"legal_deal",data:{id:this.id}},(function(e){t.data=e,t.cash=e,e.is_sure&&(t.pay_orders_img=e.pay_orders_img)}))},sendUrl:function(t){var e=this;e.$utils.initDataToken({url:t,data:{id:this.id,password:e.password,pay_orders_img:e.pay_orders_img},type:"post"},(function(t){e.password="",e.cancel("share"),e.$utils.showLayer(t),setTimeout((function(){e.getDetail()}),1e3)}))},submit:function(){var t=this;if(t.password.length<6)return t.$utils.showLayer(t.$t("login.e_pdeal"));if("ceil"==t.payType&&t.sendUrl("user_legal_pay_cancel"),"ipay"==t.payType){if(""==t.pay_orders_img)return t.$utils.showLayer(t.$t("zdy.qrszfpz"));t.sendUrl("user_legal_pay")}"fpay"==t.payType&&t.sendUrl("legal_deal_user_sure")},call:function(t){console.log(t),uni.makePhoneCall({phoneNumber:t})},copy:function(t){var e=(0,c.default)(t);!1===e?uni.showToast({title:"不支持"}):uni.showToast({title:"复制成功",icon:"none"})},isshow:function(){this.pay_code=!this.pay_code},togglePopup:function(t,e){this.type=t,"tip"===e?this.show=!0:this.$refs[e].open()},cancel:function(t){if("tip"===t)return this.show=!1;this.$refs[t].close()},tapChecked:function(){this.is_ok=!this.is_ok},apply:function(){var t=this;t.$utils.initDataToken({url:"legal/arbitrate",data:{id:t.id},type:"post"},(function(e){t.$utils.showLayer(e),setTimeout((function(){t.getDetail()}),1e3)}))}}};e.default=o}}]);