(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ieo-detail"],{"0a41":function(t,e,i){"use strict";var a=i("4ea4");i("a9e3"),i("b680"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("5530")),o=i("2f62"),r={data:function(){return{seleCurrency:[{id:3,name:"USDT"},{id:1,name:"BTC"},{id:2,name:"ETH"}],currencyIndex:0,bool:!1,amount:"",compute_price:0,detail:[],searchBarRightFixed:!1,searchBarFixed:!1,tabIndex:0,token:"",price:"",currency_id:3,balance:""}},computed:(0,n.default)({},(0,o.mapState)(["theme"])),onShow:function(){this.$utils.setThemeTop(this.theme),setTimeout((function(){uni.setNavigationBarColor({navigationBarBackgroundColor:"#999"})}),1500)},onLoad:function(t){this.token=uni.getStorageSync("token"),this.init(t.id)},filters:{toFixed8:function(t){return Number(t).toFixed(8)}},methods:{getQuotantionPrice:function(){var t=this;this.$http({url:"/api/project/detail?project_id="+this.nextId,headers:{Authorization:this.token}}).then((function(e){"ok"==e.data.type&&("USDT"==t.seleCurrencyName?t.price=t.detail.price:"BTC"==t.seleCurrencyName?t.price=t.detail.btc_price:t.price=t.detail.eth_price)}))},ChangePrice:function(t){var e=t.detail.value;this.currencyIndex=e,0==e?(this.currency_id=this.seleCurrency[e].id,this.price=this.detail.price,this.getBalance(this.currency_id),this.inputAmount()):1==e?(this.currency_id=this.seleCurrency[e].id,this.price=this.detail.btc_price,this.getBalance(this.currency_id),this.inputAmount()):(this.currency_id=this.seleCurrency[e].id,this.price=this.detail.eth_price,this.getBalance(this.currency_id),this.inputAmount())},closerg:function(){this.bool=!this.bool},inputAmount:function(){1*this.amount<=0||(this.compute_price=this.amount/this.price)},submitrg:function(){var t=this;1*this.amount<=0?t.$utils.showLayer(t.$t("trade.p_num")):(uni.showLoading(),this.$utils.initDataToken({url:"project/order",type:"post",data:{price:this.price,pay_currency:this.currency_id,amount:this.amount,project_id:this.detail.id}},(function(e){uni.hideLoading(),t.$utils.showLayer(e.message),"ok"==e.type&&(t.amount="",t.compute_price="",t.bool=!1)})))},login:function(){uni.reLaunch({url:"/pages/mine/login"})},submit:function(){this.bool=!this.bool},init:function(t){var e=this;this.$utils.initDataToken({url:"project/detail",data:{project_id:t}},(function(t){e.detail=t.info,e.price=t.info.price,e.getBalance(e.currency_id)}))},getBalance:function(t){var e=this;this.$utils.initDataToken({url:"wallet/detail",type:"post",data:{type:"change",currency:t}},(function(t){e.balance=t.change_balance}))}}};e.default=r},"0fc2":function(t,e,i){"use strict";i.r(e);var a=i("0a41"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},3629:function(t,e,i){"use strict";i.r(e);var a=i("c6bc"),n=i("0fc2");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("fe4f");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"17e9ed78",null,!1,a["a"],r);e["default"]=d.exports},"3ce0":function(t,e,i){var a=i("f804");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("0a4b6b96",a,!0,{sourceMap:!1,shadowMode:!1})},c6bc:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-navigator",{staticClass:"back mt5",attrs:{"open-type":"navigateBack"}},[i("v-uni-image",{attrs:{src:"/static/image/return.png"}})],1),t.bool?i("v-uni-view",{staticClass:"rgcz"},[i("v-uni-view",{staticClass:"rgcz-mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closerg()}}}),i("v-uni-view",{staticClass:"rgcz-content"},[i("v-uni-view",{staticClass:"rgcz-title"},[t._v(t._s(t.$t("zdy.rgcz")))]),i("v-uni-view",{staticClass:"rgcz-input"},[i("v-uni-input",{attrs:{type:"number",placeholder:t.$t("zdy.srrgsl")},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputAmount()}},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1),i("v-uni-view",{staticClass:"rgcz-currency"},[t._v("1 "+t._s(t.detail.currency_name)+" = "+t._s(t.price)+" "+t._s(t.seleCurrency[t.currencyIndex].name))]),i("v-uni-view",{staticClass:"rg-ptb"},[t._v(t._s(t.$t("zdy.a2"))+t._s(t.seleCurrency[t.currencyIndex].name)+"："+t._s(t._f("toFixed8")(t.compute_price)))]),i("v-uni-view",{staticClass:"rg-ptb"},[t._v(t._s(t.$t("zdy.dqyuee"))+"："+t._s(t._f("toFixed8")(t.balance)))]),i("v-uni-view",{staticClass:"rg-submit",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submitrg()}}},[t._v(t._s(t.$t("zdy.rg")))])],1)],1):t._e(),i("v-uni-view",{staticClass:"top-bg"},[i("v-uni-view",{staticClass:"top-title"},[i("v-uni-view",{staticClass:"top-title-h1"},[t._v(t._s(t.detail.title))]),i("v-uni-text",[t._v(t._s(t.detail.summary))])],1)],1),i("v-uni-view",{staticClass:"white-jje"},[i("v-uni-view",{staticClass:"white-time"},[i("v-uni-view",{staticClass:"white-time-h1"},[t._v(t._s(t.$t("zdy.jssj")))]),i("v-uni-text",[t._v(t._s(t.detail.end_at))])],1),i("v-uni-view",{staticClass:"white-time between"},[i("v-uni-view",{staticClass:"white-time-h1"},[t._v(t._s(t.$t("zdy.a1")))]),i("v-uni-picker",{attrs:{mode:"selector",range:t.seleCurrency,"range-key":"name"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.ChangePrice.apply(void 0,arguments)}}},[t._v(t._s(t.seleCurrency[t.currencyIndex].name))])],1),i("v-uni-view",{staticClass:"white-time between"},[i("v-uni-view",{staticClass:"white-time-h2"},[t._v(t._s(t.$t("zdy.fhjg")))]),i("v-uni-text",[t._v("1 "+t._s(t.detail.currency_name)+" = "+t._s(t.price)+" "+t._s(t.seleCurrency[t.currencyIndex].name))])],1),i("v-uni-view",{staticClass:"white-time between"},[i("v-uni-view",{staticClass:"white-time-h2"},[t._v(t._s(t.$t("zdy.fhzl")))]),i("v-uni-text",[t._v(t._s(t.detail.amount)+" "+t._s(t.detail.currency_name))])],1),i("v-uni-view",{staticClass:"white-link"},[i("v-uni-navigator",{attrs:{url:"/pages/ieo/link?url="+t.detail.link,target:"_blank"}},[t._v(t._s(t.$t("zdy.gw")))]),i("v-uni-navigator",{attrs:{url:"/pages/ieo/link?url="+t.detail.white_book,target:"_blank"}},[t._v(t._s(t.$t("zdy.bps")))])],1)],1),i("v-uni-view",{staticClass:"sgzq"},[i("v-uni-view",{staticClass:"sgzq-title"},[t._v(t._s(t.$t("zdy.sgzq")))]),i("v-uni-view",{staticClass:"sc-1hdolm6-1 hFymFN"},[i("v-uni-view",{staticClass:"item active"},[i("v-uni-text",{staticClass:"item-circle"},[t._v("1")]),i("v-uni-view",{staticClass:"item-title"},[t._v(t._s(t.$t("zdy.yr"))),i("v-uni-view",{staticClass:"time"})],1)],1),i("v-uni-view",{staticClass:"item active"},[i("v-uni-text",{staticClass:"item-circle"},[t._v("2")]),i("v-uni-view",{staticClass:"item-title"},[t._v(t._s(t.$t("zdy.sg"))),i("v-uni-view",{staticClass:"time"},[t._v(t._s(t.detail.start_at))])],1)],1),i("v-uni-view",{staticClass:"item active"},[i("v-uni-text",{staticClass:"item-circle"},[t._v("3")]),i("v-uni-view",{staticClass:"item-title"},[t._v(t._s(t.$t("zdy.js"))),i("v-uni-view",{staticClass:"time"},[t._v(t._s(t.detail.end_at))])],1)],1)],1)],1),i("v-uni-view",{staticClass:"xmxq"},[i("v-uni-view",{staticClass:"xmxq-title"},[t._v(t._s(t.$t("zdy.xmxq")))]),i("v-uni-view",{staticClass:"xmxq-content",domProps:{innerHTML:t._s(t.detail.content)}})],1),i("v-uni-view",{staticStyle:{height:"60px",background:"#fff"}}),i("v-uni-view",{staticClass:"submit"},[t.token?t._e():i("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.login()}}},[t._v(t._s(t.$t("login.login")))]),2==t.detail.time_status&&t.token?i("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit()}}},[t._v(t._s(t.$t("zdy.rg")))]):t._e(),1==t.detail.time_status&&t.token?i("v-uni-button",{staticStyle:{background:"#999"}},[t._v(t._s(t.$t("zdy.wks")))]):t._e(),3==t.detail.time_status&&t.token?i("v-uni-button",{staticStyle:{background:"#999"}},[t._v(t._s(t.$t("zdy.yjs")))]):t._e()],1)],1)},o=[]},f804:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'uni-page-body[data-v-17e9ed78]{background:#ddd}.top-bg[data-v-17e9ed78]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;color:#fff;padding:40px 5%;color:#fff;background:#5a96fd\n        /* background: linear-gradient(90deg, rgb(48, 78, 236) 0%, rgb(90, 150, 253) 100%) */}.top-title-h1[data-v-17e9ed78]{margin:10px 0 5px;font-size:16px;font-weight:700}.top-title uni-text[data-v-17e9ed78]{font-size:12px}.back uni-image[data-v-17e9ed78]{width:100%;height:100%}.back[data-v-17e9ed78]{position:absolute;left:12px;display:block;margin:0 auto;background-position:50%;margin-left:-10px;top:8px;width:30px;height:24px}.top-img uni-image[data-v-17e9ed78]{width:100%;height:100%;border-radius:50%}.top-img[data-v-17e9ed78]{width:50px;height:50px;border-radius:50%}.white-jje[data-v-17e9ed78]{background:#fff;border-radius:20px 20px 0 0;position:relative;margin-top:-20px;padding:10px 5%}.white-time[data-v-17e9ed78]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;margin-top:20px;padding-bottom:10px;border-bottom:1px solid #ddd}.white-time-h1[data-v-17e9ed78]:after{content:"："}.white-time uni-text[data-v-17e9ed78]{font-size:13px;color:#212833}.white-time-h1[data-v-17e9ed78]{color:#212833;font-size:13px;font-weight:400}.white-time-h2[data-v-17e9ed78]{color:#212833;font-size:13px;font-weight:400}.between[data-v-17e9ed78]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.white-link[data-v-17e9ed78]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;margin-top:20px;padding-bottom:10px}.white-link uni-navigator[data-v-17e9ed78]{color:#212833;margin-right:20px}.sgzq[data-v-17e9ed78]{padding:15px 5%;margin-top:10px;background:#fff}.sgzq-title[data-v-17e9ed78]{color:#212833;font-size:16px;font-weight:700}.hFymFN[data-v-17e9ed78]{margin-left:6px;margin-top:15px;color:#848e9c}.hFymFN .item[data-v-17e9ed78]{position:relative;padding-left:20px;padding-bottom:10px;border-left:1px solid #eaecef}.hFymFN .item.active .item-circle[data-v-17e9ed78]{background-color:#f0b90b;color:#fff}.hFymFN .item-title[data-v-17e9ed78]{top:3px;position:relative;padding-bottom:6px;font-size:12px;line-height:10px;color:#212833}.hFymFN .item-circle[data-v-17e9ed78]{position:absolute;width:15px;height:15px;line-height:15px;left:-7px;text-align:center;background-color:#eaecef;color:#848e9c;border-radius:9px}.hFymFN .time[data-v-17e9ed78]{position:absolute;right:0;top:0}.sc-1hdolm6-1 hFymFN .item[data-v-17e9ed78]:last-child{padding-bottom:0}.xmxq[data-v-17e9ed78]{margin-top:10px;padding:15px 5%;background:#fff}.xmxq-title[data-v-17e9ed78]{color:#212833;font-size:16px;font-weight:700}.xmxq-content img[data-v-17e9ed78]{max-width:100%}.xmxq-content[data-v-17e9ed78]{color:#212833;margin-top:5px;word-break:break-all}.rg-submit[data-v-17e9ed78]{color:#212833;background:-webkit-gradient(linear,left top,right top,from(#f0b90b),to(#fbda3c));background:-webkit-linear-gradient(left,#f0b90b,#fbda3c);background:-moz-linear-gradient(left,#f0b90b 0,#fbda3c 100%);background:-o-linear-gradient(left,#f0b90b 0,#fbda3c 100%);background:linear-gradient(90deg,#f0b90b,#fbda3c);border:0;-webkit-box-shadow:0 10px 30px 0 rgba(240,185,10,.3);-moz-box-shadow:0 10px 30px 0 rgba(240,185,10,.3);box-shadow:0 10px 30px 0 rgba(240,185,10,.3);display:block;text-align:center;width:100%;padding:10px 0;font-size:14px}.submit[data-v-17e9ed78]{position:fixed;bottom:0;left:0;right:0;padding:10px 5%;box-shadow:rgba(0,0,0,.1) 0 0 1.25rem 0;z-index:10;background:-webkit-linear-gradient(#fff,#fff);background:linear-gradient(#fff,#fff)}.submit uni-button[data-v-17e9ed78]{color:#212833;background:-webkit-gradient(linear,left top,right top,from(#f0b90b),to(#fbda3c));background:-webkit-linear-gradient(left,#f0b90b,#fbda3c);background:-moz-linear-gradient(left,#f0b90b 0,#fbda3c 100%);background:-o-linear-gradient(left,#f0b90b 0,#fbda3c 100%);background:linear-gradient(90deg,#f0b90b,#fbda3c);border:0;-webkit-box-shadow:0 10px 30px 0 rgba(240,185,10,.3);-moz-box-shadow:0 10px 30px 0 rgba(240,185,10,.3);box-shadow:0 10px 30px 0 rgba(240,185,10,.3);display:block;text-align:center;width:100%;padding:10px 0;font-size:14px}.rgcz[data-v-17e9ed78]{position:fixed;background:rgba(0,0,0,.5);width:100%;height:100%;z-index:88;margin:auto;left:0;top:0;bottom:0;right:0}.rgcz-mask[data-v-17e9ed78]{position:fixed;background:rgba(0,0,0,.5);width:100%;height:100%;margin:auto;left:0;top:0;bottom:0;right:0}.rgcz-content[data-v-17e9ed78]{color:#000;width:60%;margin:auto}.rgcz-title[data-v-17e9ed78]{font-size:16px;font-weight:700}.rgcz-currency[data-v-17e9ed78]{margin-bottom:5px;font-size:13px}.rgcz-input uni-input[data-v-17e9ed78]{color:#000}.rgcz-input[data-v-17e9ed78]{border:1px solid #999;padding:3px 3%;margin:10px 0}.rg-ptb[data-v-17e9ed78]{margin-bottom:10px}.rgcz-content[data-v-17e9ed78]{margin:auto;height:30vh;position:absolute;width:80%;top:0;left:0;right:0;bottom:0;background:#fff;border-radius:5px;padding:10px 5%}.white-time uni-picker[data-v-17e9ed78]{color:#000;border:1px solid #ddd;padding:%?10?% %?60?% %?10?% %?20?%;position:relative}.white-time uni-picker[data-v-17e9ed78]:after{position:absolute;top:%?20?%;right:%?10?%;content:"";width:0;height:0;border:%?16?% solid;border-color:#000 transparent transparent transparent}body.?%PAGE?%[data-v-17e9ed78]{background:#ddd}',""]),t.exports=e},fe4f:function(t,e,i){"use strict";var a=i("3ce0"),n=i.n(a);n.a}}]);