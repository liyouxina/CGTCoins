(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ieo-detail"],{3090:function(t,i,e){"use strict";e.r(i);var a=e("82b9"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},"61f5":function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-navigator",{staticClass:"back mt5",attrs:{"open-type":"navigateBack"}},[e("v-uni-image",{attrs:{src:"/static/image/return.png"}})],1),t.bool?e("v-uni-view",{staticClass:"rgcz"},[e("v-uni-view",{staticClass:"rgcz-mask",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.closerg()}}}),e("v-uni-view",{staticClass:"rgcz-content"},[e("v-uni-view",{staticClass:"rgcz-title"},[t._v(t._s(t.$t("zdy.rgcz")))]),e("v-uni-view",{staticClass:"rgcz-input"},[e("v-uni-input",{attrs:{type:"number",placeholder:t.$t("zdy.srrgsl")},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.inputAmount()}},model:{value:t.amount,callback:function(i){t.amount=i},expression:"amount"}})],1),e("v-uni-view",{staticClass:"rgcz-currency"},[t._v("1 "+t._s(t.detail.currency_name)+" = "+t._s(t.detail.price)+" "+t._s(t.detail.pay_currency_name))]),e("v-uni-view",{staticClass:"rg-ptb"},[t._v(t._s(t.$t("zdy.kdh"))+t._s(t.detail.pay_currency_name)+"："+t._s(t._f("toFixed8")(t.compute_price)))]),e("v-uni-view",{staticClass:"rg-ptb"},[t._v(t._s(t.$t("zdy.dqyuee"))+t._s(t.detail.pay_currency_name)+"："+t._s(t._f("toFixed8")(t.balance)))]),e("v-uni-view",{staticClass:"rg-submit",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.submitrg()}}},[t._v(t._s(t.$t("zdy.rg")))])],1)],1):t._e(),e("v-uni-view",{staticClass:"top-bg"},[e("v-uni-view",{staticClass:"top-title"},[e("v-uni-view",{staticClass:"top-title-h1"},[t._v(t._s(t.detail.title))]),e("v-uni-text",[t._v(t._s(t.detail.summary))])],1)],1),e("v-uni-view",{staticClass:"white-jje"},[e("v-uni-view",{staticClass:"white-time"},[e("v-uni-view",{staticClass:"white-time-h1"},[t._v(t._s(t.$t("zdy.jssj")))]),e("v-uni-text",[t._v(t._s(t.detail.end_at))])],1),e("v-uni-view",{staticClass:"white-time between"},[e("v-uni-view",{staticClass:"white-time-h2"},[t._v(t._s(t.$t("zdy.fhjg")))]),e("v-uni-text",[t._v("1 "+t._s(t.detail.currency_name)+" = "+t._s(t.detail.price)+" "+t._s(t.detail.pay_currency_name))])],1),e("v-uni-view",{staticClass:"white-time between"},[e("v-uni-view",{staticClass:"white-time-h2"},[t._v(t._s(t.$t("zdy.fhzl")))]),e("v-uni-text",[t._v(t._s(t.detail.amount)+" "+t._s(t.detail.currency_name))])],1),e("v-uni-view",{staticClass:"white-link"},[e("v-uni-navigator",{attrs:{url:"/pages/ieo/link?url="+t.detail.link,target:"_blank"}},[t._v(t._s(t.$t("zdy.gw")))]),e("v-uni-navigator",{attrs:{url:"/pages/ieo/link?url="+t.detail.white_book,target:"_blank"}},[t._v(t._s(t.$t("zdy.bps")))])],1)],1),e("v-uni-view",{staticClass:"sgzq"},[e("v-uni-view",{staticClass:"sgzq-title"},[t._v(t._s(t.$t("zdy.sgzq")))]),e("v-uni-view",{staticClass:"sc-1hdolm6-1 hFymFN"},[e("v-uni-view",{staticClass:"item active"},[e("v-uni-text",{staticClass:"item-circle"},[t._v("1")]),e("v-uni-view",{staticClass:"item-title"},[t._v(t._s(t.$t("zdy.yr"))),e("v-uni-view",{staticClass:"time"})],1)],1),e("v-uni-view",{staticClass:"item active"},[e("v-uni-text",{staticClass:"item-circle"},[t._v("2")]),e("v-uni-view",{staticClass:"item-title"},[t._v(t._s(t.$t("zdy.sg"))),e("v-uni-view",{staticClass:"time"},[t._v(t._s(t.detail.start_at))])],1)],1),e("v-uni-view",{staticClass:"item active"},[e("v-uni-text",{staticClass:"item-circle"},[t._v("3")]),e("v-uni-view",{staticClass:"item-title"},[t._v(t._s(t.$t("zdy.js"))),e("v-uni-view",{staticClass:"time"},[t._v(t._s(t.detail.end_at))])],1)],1)],1)],1),e("v-uni-view",{staticClass:"xmxq"},[e("v-uni-view",{staticClass:"xmxq-title"},[t._v(t._s(t.$t("zdy.xmxq")))]),e("v-uni-view",{staticClass:"xmxq-content",domProps:{innerHTML:t._s(t.detail.content)}})],1),e("v-uni-view",{staticStyle:{height:"60px",background:"#fff"}}),e("v-uni-view",{staticClass:"submit"},[t.token?t._e():e("v-uni-button",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.login()}}},[t._v(t._s(t.$t("login.login")))]),2==t.detail.time_status&&t.token?e("v-uni-button",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.submit()}}},[t._v(t._s(t.$t("zdy.rg")))]):t._e(),1==t.detail.time_status&&t.token?e("v-uni-button",{staticStyle:{background:"#999"}},[t._v(t._s(t.$t("zdy.wks")))]):t._e(),3==t.detail.time_status&&t.token?e("v-uni-button",{staticStyle:{background:"#999"}},[t._v(t._s(t.$t("zdy.yjs")))]):t._e()],1)],1)},o=[]},"82b9":function(t,i,e){"use strict";var a=e("4ea4");e("a9e3"),e("b680"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("5530")),o=e("2f62"),d={data:function(){return{bool:!1,amount:"",compute_price:0,detail:[],searchBarRightFixed:!1,searchBarFixed:!1,tabIndex:0,token:""}},computed:(0,n.default)({},(0,o.mapState)(["theme"])),onShow:function(){this.$utils.setThemeTop(this.theme),setTimeout((function(){uni.setNavigationBarColor({navigationBarBackgroundColor:"#999"})}),1500)},onLoad:function(t){this.token=uni.getStorageSync("token"),this.init(t.id)},filters:{toFixed8:function(t){return Number(t).toFixed(8)}},methods:{closerg:function(){this.bool=!this.bool},inputAmount:function(){1*this.amount<0||(this.compute_price=this.amount*this.detail.price)},submitrg:function(){var t=this;t.amount<0?t.$utils.showLayer(t.$t("trade.p_num")):(uni.showLoading(),this.$utils.initDataToken({url:"project/order",type:"post",data:{amount:t.amount,project_id:t.detail.id}},(function(i){uni.hideLoading(),t.$utils.showLayer(i.message),"ok"==i.type&&(t.amount="",t.bool=!1)})))},login:function(){uni.reLaunch({url:"/pages/mine/login"})},submit:function(){this.bool=!this.bool},init:function(t){var i=this;this.$utils.initDataToken({url:"project/detail",data:{project_id:t}},(function(t){i.detail=t.info,i.$utils.initDataToken({url:"wallet/detail",type:"post",data:{type:"change",currency:t.info.pay_currency_id}},(function(t){i.balance=t.change_balance}))}))}}};i.default=d},e3f1:function(t,i,e){"use strict";e.r(i);var a=e("61f5"),n=e("3090");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("f543");var d,r=e("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"4675df09",null,!1,a["a"],d);i["default"]=s.exports},e793:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'uni-page-body[data-v-4675df09]{background:#ddd}.top-bg[data-v-4675df09]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;color:#fff;padding:40px 5%;color:#fff;background:#5a96fd\n        /* background: linear-gradient(90deg, rgb(48, 78, 236) 0%, rgb(90, 150, 253) 100%) */}.top-title-h1[data-v-4675df09]{margin:10px 0 5px;font-size:16px;font-weight:700}.top-title uni-text[data-v-4675df09]{font-size:12px}.back uni-image[data-v-4675df09]{width:100%;height:100%}.back[data-v-4675df09]{position:absolute;left:12px;display:block;margin:0 auto;background-position:50%;margin-left:-10px;top:8px;width:30px;height:24px}.top-img uni-image[data-v-4675df09]{width:100%;height:100%;-webkit-border-radius:50%;border-radius:50%}.top-img[data-v-4675df09]{width:50px;height:50px;-webkit-border-radius:50%;border-radius:50%}.white-jje[data-v-4675df09]{background:#fff;-webkit-border-radius:20px 20px 0 0;border-radius:20px 20px 0 0;position:relative;margin-top:-20px;padding:10px 5%}.white-time[data-v-4675df09]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;margin-top:20px;padding-bottom:10px;border-bottom:1px solid #ddd}.white-time-h1[data-v-4675df09]:after{content:"："}.white-time uni-text[data-v-4675df09]{font-size:13px;color:#212833}.white-time-h1[data-v-4675df09]{color:#212833;font-size:13px;font-weight:400}.white-time-h2[data-v-4675df09]{color:#212833;font-size:13px;font-weight:400}.between[data-v-4675df09]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.white-link[data-v-4675df09]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;margin-top:20px;padding-bottom:10px}.white-link uni-navigator[data-v-4675df09]{color:#212833;margin-right:20px}.sgzq[data-v-4675df09]{padding:15px 5%;margin-top:10px;background:#fff}.sgzq-title[data-v-4675df09]{color:#212833;font-size:16px;font-weight:700}.hFymFN[data-v-4675df09]{margin-left:6px;margin-top:15px;color:#848e9c}.hFymFN .item[data-v-4675df09]{position:relative;padding-left:20px;padding-bottom:10px;border-left:1px solid #eaecef}.hFymFN .item.active .item-circle[data-v-4675df09]{background-color:#f0b90b;color:#fff}.hFymFN .item-title[data-v-4675df09]{top:3px;position:relative;padding-bottom:6px;font-size:12px;line-height:10px;color:#212833}.hFymFN .item-circle[data-v-4675df09]{position:absolute;width:15px;height:15px;line-height:15px;left:-7px;text-align:center;background-color:#eaecef;color:#848e9c;-webkit-border-radius:9px;border-radius:9px}.hFymFN .time[data-v-4675df09]{position:absolute;right:0;top:0}.sc-1hdolm6-1 hFymFN .item[data-v-4675df09]:last-child{padding-bottom:0}.xmxq[data-v-4675df09]{margin-top:10px;padding:15px 5%;background:#fff}.xmxq-title[data-v-4675df09]{color:#212833;font-size:16px;font-weight:700}.xmxq-content img[data-v-4675df09]{max-width:100%}.xmxq-content[data-v-4675df09]{color:#212833;margin-top:5px;word-break:break-all}.rg-submit[data-v-4675df09]{color:#212833;background:-webkit-gradient(linear,left top,right top,from(#f0b90b),to(#fbda3c));background:-webkit-linear-gradient(left,#f0b90b,#fbda3c);background:-moz-linear-gradient(left,#f0b90b 0,#fbda3c 100%);background:-o-linear-gradient(left,#f0b90b 0,#fbda3c 100%);background:linear-gradient(90deg,#f0b90b,#fbda3c);border:0;-webkit-box-shadow:0 10px 30px 0 rgba(240,185,10,.3);-moz-box-shadow:0 10px 30px 0 rgba(240,185,10,.3);box-shadow:0 10px 30px 0 rgba(240,185,10,.3);display:block;text-align:center;width:100%;padding:10px 0;font-size:14px}.submit[data-v-4675df09]{position:fixed;bottom:0;left:0;right:0;padding:10px 5%;-webkit-box-shadow:rgba(0,0,0,.1) 0 0 1.25rem 0;box-shadow:rgba(0,0,0,.1) 0 0 1.25rem 0;z-index:10;background:-webkit-gradient(linear,left top,left bottom,from(#fff),to(#fff));background:-webkit-linear-gradient(#fff,#fff);background:linear-gradient(#fff,#fff)}.submit uni-button[data-v-4675df09]{color:#212833;background:-webkit-gradient(linear,left top,right top,from(#f0b90b),to(#fbda3c));background:-webkit-linear-gradient(left,#f0b90b,#fbda3c);background:-moz-linear-gradient(left,#f0b90b 0,#fbda3c 100%);background:-o-linear-gradient(left,#f0b90b 0,#fbda3c 100%);background:linear-gradient(90deg,#f0b90b,#fbda3c);border:0;-webkit-box-shadow:0 10px 30px 0 rgba(240,185,10,.3);-moz-box-shadow:0 10px 30px 0 rgba(240,185,10,.3);box-shadow:0 10px 30px 0 rgba(240,185,10,.3);display:block;text-align:center;width:100%;padding:10px 0;font-size:14px}.rgcz[data-v-4675df09]{position:fixed;background:rgba(0,0,0,.5);width:100%;height:100%;z-index:88;margin:auto;left:0;top:0;bottom:0;right:0}.rgcz-mask[data-v-4675df09]{position:fixed;background:rgba(0,0,0,.5);width:100%;height:100%;margin:auto;left:0;top:0;bottom:0;right:0}.rgcz-content[data-v-4675df09]{color:#000;width:60%;margin:auto}.rgcz-title[data-v-4675df09]{font-size:16px;font-weight:700}.rgcz-currency[data-v-4675df09]{margin-bottom:5px;font-size:13px}.rgcz-input uni-input[data-v-4675df09]{color:#000}.rgcz-input[data-v-4675df09]{border:1px solid #999;padding:3px 3%;margin:10px 0}.rg-ptb[data-v-4675df09]{margin-bottom:10px}.rgcz-content[data-v-4675df09]{margin:auto;height:30vh;position:absolute;width:80%;top:0;left:0;right:0;bottom:0;background:#fff;-webkit-border-radius:5px;border-radius:5px;padding:10px 5%}body.?%PAGE?%[data-v-4675df09]{background:#ddd}',""]),t.exports=i},f05b:function(t,i,e){var a=e("e793");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("21a153d1",a,!0,{sourceMap:!1,shadowMode:!1})},f543:function(t,i,e){"use strict";var a=e("f05b"),n=e.n(a);n.a}}]);