(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-trade-entrust"],{"0912":function(t,e,i){"use strict";var s;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return s}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{class:{light:"light"==t.theme}},[i("v-uni-view",{staticClass:"flex flexend between plr15 ptb10 w100 bdb_1e fixed lf0 bgPart zdx100"},[i("v-uni-view",{staticClass:"flex flexend"},[i("v-uni-view",{class:["ft14 gray7",{"ft18 white":0==t.current}],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.change(0)}}},[t._v(t._s(t.$t("trade.all_delegate")))]),i("v-uni-view",{class:["pl10 ft14 gray7",{"ft18 white":1==t.current}],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.change(1)}}},[t._v(t._s(t.$t("trade.his_delegate")))])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0==t.current,expression:"current==0"}],staticClass:"flex alcenter ml10 ft14"},[i("v-uni-text",{staticClass:"gray7",attrs:{"data-position":"bottom"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.togglePopup("bottom-entrust")}}},[t._v(t._s("in"==t.enType?t.$t("trade.buy"):t.$t("trade.sell")))]),i("v-uni-image",{staticClass:"h10 wt10 ml5",attrs:{src:"/static/image/pull.png"}})],1)],1),i("uni-popup",{attrs:{show:"bottom-entrust"===t.popType,position:"bottom"},on:{hidePopup:function(e){arguments[0]=e=t.$handleEvent(e),t.togglePopup("")}}},[i("v-uni-view",{staticClass:"bottom-content"},[i("v-uni-view",{staticClass:"bottom-content-box tc gray7"},[i("v-uni-view",{class:["bdb_1e ptb10 ft14 bgPart",{blueColor:"in"==t.enType}],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeEntrustType("in")}}},[t._v(t._s(t.$t("trade.buy")))]),i("v-uni-view",{class:["ptb10 ft14 bgPart",{blueColor:"out"==t.enType}],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeEntrustType("out")}}},[t._v(t._s(t.$t("trade.sell")))]),i("v-uni-view",{staticClass:"pt5 pb10"},[i("v-uni-view",{staticClass:"ptb10 ft14 bgPart",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.togglePopup("")}}},[t._v(t._s(t.$t("trade.cancel")))])],1)],1)],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0==t.current,expression:"current==0"}],staticClass:"en-ul pl15 pt50"},[t._l(t.enList,(function(e,s){return"in"==t.enType&&1==e.type?i("v-uni-view",{key:e.id,staticClass:"ptb10 bdb_1e pr15"},[i("v-uni-view",{staticClass:"flex between alcenter"},[i("v-uni-view",{staticClass:"flex flex flexend"},[i("v-uni-text",{class:["ft14 redColor",{greenColor:"1"==e.type}]},[t._v(t._s("1"==e.type?t.$t("trade.buy"):t.$t("trade.sell")))]),i("v-uni-text",{staticClass:"gray_e pl5 ft14"},[t._v(t._s(e.symbol))])],1),3==e.status?i("v-uni-view",{staticClass:"blueColor bgBlack radius2 plr20 ptb5"},[t._v(t._s(t.$t("trade.has_cancel")))]):t._e(),2==e.status?i("v-uni-view",{staticClass:"blueColor bgBlack radius2 plr20 ptb5"},[t._v(t._s(t.$t("trade.has_done")))]):t._e(),1==e.status?i("v-uni-view",{staticClass:"blueColor bgBlack radius2 plr20 ptb5",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.revoke(s,e.id)}}},[t._v(t._s(t.$t("trade.back")))]):t._e()],1),i("v-uni-view",{staticClass:"mt15 flex"},[i("v-uni-view",{staticClass:"flex1"},[i("v-uni-text",{staticClass:"gray4"},[t._v(t._s(t.$t("trade.price")))]),i("v-uni-view",{staticClass:"mt5"},[t._v(t._s(e.target_price))])],1),i("v-uni-view",{staticClass:"flex1 tc"},[i("v-uni-text",{staticClass:"gray4"},[t._v(t._s(t.$t("trade.num")))]),i("v-uni-view",{staticClass:"mt5"},[t._v(t._s(e.trade_amount))])],1),i("v-uni-view",{staticClass:"flex1 tr"},[i("v-uni-text",{staticClass:"gray4"},[t._v(t._s(t.$t("trade.time")))]),i("v-uni-view",{staticClass:"mt5"},[t._v(t._s(e.created_at))])],1)],1)],1):t._e()})),t._l(t.enList,(function(e,s){return"out"==t.enType&&2==e.type?i("v-uni-view",{key:e.id,staticClass:"ptb10 bdb_1e pr15"},[i("v-uni-view",{staticClass:"flex between alcenter"},[i("v-uni-view",{staticClass:"flex flex flexend"},[i("v-uni-text",{class:["ft14 redColor",{greenColor:"1"==e.type}]},[t._v(t._s("1"==e.type?t.$t("trade.buy"):t.$t("trade.sell")))]),i("v-uni-text",{staticClass:"gray_e pl5 ft14"},[t._v(t._s(e.symbol))])],1),3==e.status?i("v-uni-view",{staticClass:"blueColor bgBlack radius2 plr20 ptb5"},[t._v(t._s(t.$t("trade.has_cancel")))]):t._e(),2==e.status?i("v-uni-view",{staticClass:"blueColor bgBlack radius2 plr20 ptb5"},[t._v(t._s(t.$t("trade.has_done")))]):t._e(),1==e.status?i("v-uni-view",{staticClass:"blueColor bgBlack radius2 plr20 ptb5",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.revoke(s,e.id)}}},[t._v(t._s(t.$t("trade.back")))]):t._e()],1),i("v-uni-view",{staticClass:"mt15 flex"},[i("v-uni-view",{staticClass:"flex1"},[i("v-uni-text",{staticClass:"gray4"},[t._v(t._s(t.$t("trade.price")))]),i("v-uni-view",{staticClass:"mt5"},[t._v(t._s(e.target_price))])],1),i("v-uni-view",{staticClass:"flex1 tc"},[i("v-uni-text",{staticClass:"gray4"},[t._v(t._s(t.$t("trade.num")))]),i("v-uni-view",{staticClass:"mt5"},[t._v(t._s(e.trade_amount))])],1),i("v-uni-view",{staticClass:"flex1 tr"},[i("v-uni-text",{staticClass:"gray4"},[t._v(t._s(t.$t("trade.time")))]),i("v-uni-view",{staticClass:"mt5"},[t._v(t._s(e.created_at))])],1)],1)],1):t._e()})),0==t.enList.length?i("v-uni-view",{staticClass:"tc ptb30"},[i("v-uni-image",{staticClass:"h50 wt50",attrs:{src:"/static/image/nodata.png"}}),i("v-uni-view",{staticClass:"gray7"},[t._v(t._s(t.$t("home.norecord")))])],1):t._e(),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.isBottom,expression:"isBottom"}],staticClass:"tc gray7 ptb20"},[t._v(t._s(t.$t("home.loading"))+"...")]),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.hasMore&&t.enList.length>10,expression:"!hasMore && enList.length>10"}],staticClass:"tc gray7 ptb20"},[t._v(t._s(t.$t("home.nomore")))])],2),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.current,expression:"current==1"}],staticClass:"en-ul pl15 pt50"},[t._l(t.hisList,(function(e){return i("v-uni-view",{key:e.id,staticClass:"ptb10 bdb_1e pr15"},[i("v-uni-view",{staticClass:"flex between alcenter"},[i("v-uni-view",{staticClass:"flex flex flexend"},["in"==e.type?i("v-uni-text",{staticClass:"ft14 greenColor"},[t._v(t._s(t.$t("trade.buy")))]):i("v-uni-text",{staticClass:"ft14 redColor"},[t._v(t._s(t.$t("trade.sell")))]),i("v-uni-text",{staticClass:"gray_e pl5 ft14"},[t._v(t._s(e.symbol))]),i("v-uni-text",{staticClass:"pl5 gray7"},[t._v(t._s(e.created_at))])],1),i("v-uni-view",{staticClass:"gray7 ptb5"},[t._v(t._s(t.$t("trade.has_done")))])],1),i("v-uni-view",{staticClass:"mt15 flex"},[i("v-uni-view",{staticClass:"flex1"},[i("v-uni-text",{staticClass:"gray4"},[t._v(t._s(t.$t("trade.price")))]),i("v-uni-view",{staticClass:"mt5"},[t._v(t._s(e.trade_price))])],1),i("v-uni-view",{staticClass:"flex1 tc"},[i("v-uni-text",{staticClass:"gray4"},[t._v(t._s(t.$t("trade.num")))]),i("v-uni-view",{staticClass:"mt5"},[t._v(t._s(e.trade_amount))])],1),i("v-uni-view",{staticClass:"flex1 tr"},[i("v-uni-text",{staticClass:"gray4"},[t._v(t._s(t.$t("trade.fee")))]),i("v-uni-view",{staticClass:"mt5"},[t._v(t._s(e.trade_amount*e.target_price*e.charge_fee))])],1)],1)],1)})),0==t.hisList.length?i("v-uni-view",{staticClass:"tc ptb30"},[i("v-uni-image",{staticClass:"h50 wt50",attrs:{src:"/static/image/nodata.png"}}),i("v-uni-view",{staticClass:"gray7"},[t._v(t._s(t.$t("home.norecord")))])],1):t._e(),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.isBottom,expression:"isBottom"}],staticClass:"tc gray7 ptb20"},[t._v(t._s(t.$t("home.loading"))+"...")]),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.hasMore&&t.hisList.length>10,expression:"!hasMore && hisList.length>10"}],staticClass:"tc gray7 ptb20"},[t._v(t._s(t.$t("home.nomore")))])],2)],1)},n=[]},"19a1":function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,"uni-page-body[data-v-d1ef2edc]{background:#102030}body.?%PAGE?%[data-v-d1ef2edc]{background:#102030}",""]),t.exports=e},"1f2e":function(t,e,i){"use strict";i.r(e);var s=i("0912"),a=i("77d1");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("c675");var o,r=i("f0c5"),u=Object(r["a"])(a["default"],s["b"],s["c"],!1,null,"d1ef2edc",null,!1,s["a"],o);e["default"]=u.exports},4442:function(t,e,i){var s=i("19a1");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("4f06").default;a("1e5ee416",s,!0,{sourceMap:!1,shadowMode:!1})},"64ee":function(t,e,i){"use strict";var s;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return s}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"uni-mask",style:{top:t.offsetTop+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hide.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.moveHandle.apply(void 0,arguments)}}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"uni-popup",class:["uni-popup-"+t.position,"uni-popup-"+t.mode]},[t._v(t._s(t.msg)),t._t("default"),"middle"===t.position&&"insert"===t.mode?i("v-uni-view",{staticClass:" uni-icon uni-icon-close",class:{"uni-close-bottom":"bottom"===t.buttonMode,"uni-close-right":"right"===t.buttonMode},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeMask.apply(void 0,arguments)}}}):t._e()],2)],1)},n=[]},"67c9":function(t,e,i){"use strict";var s=i("4ea4");i("99af"),i("a9e3"),i("b680"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(i("5530")),n=s(i("a3b2")),o=i("2f62"),r={components:{uniPopup:n.default},data:function(){return{uid:"",current:0,popType:"",enType:"in",enList:[],hisList:[],page:1,isBottom:!1,hasMore:!0}},filters:{toFixed2:function(t,e){return t=Number(t),t.toFixed(2)}},computed:(0,a.default)({},(0,o.mapState)(["theme"])),onLoad:function(){},onShow:function(){this.uid=uni.getStorageSync("uid"),this.$utils.setThemeTop(this.theme),this.entrustList()},methods:{change:function(t){this.current!=t&&(this.current=t,this.page=1,0==t?this.entrustList():this.hisenList())},togglePopup:function(t){this.popType=t},changeEntrustType:function(t){this.enType=t,this.togglePopup(""),this.page=1,this.isBottom=!1,this.hasMore=!0,this.enList=[],this.entrustList()},entrustList:function(){var t=this,e="coin/list";t.enType,t.$utils.initDataToken({url:e,data:{page:t.page,limit:30},type:"get"},(function(e){var i=e;uni.stopPullDownRefresh(),t.isBottom=!1,t.enList=1==t.page?i:t.enList.concat(i),t.hasMore=e.limit==i.length,console.log(t.hasMore)}))},hisenList:function(){var t=this;t.$utils.initDataToken({url:"coin/list",data:{page:t.page,limit:60},type:"get"},(function(e){for(var i=[],s=0;s<e.length;s++)3!=e[s].status&&2!=e[s].status||i.push(e[s]);var a=i;uni.stopPullDownRefresh(),t.isBottom=!1,t.hisList=1==t.page?a:t.hisList.concat(a),t.hasMore=e.limit==a.length,console.log(t.hasMore)}))},onPullDownRefresh:function(){this.page=1,this.isBottom=!1,this.hasMore=!0,0==this.currentrent?this.entrustList():this.hisenList()},onReachBottom:function(){this.hasMore&&(this.page++,0==this.currentrent?this.entrustList():this.hisenList())},revoke:function(t,e){var i=this;i.$utils.initDataToken({url:"coin/trade",data:{type:i.enType,id:e},type:"put"},(function(e){i.$utils.showLayer(e),i.enList[t].status=3}))}}};e.default=r},"77d1":function(t,e,i){"use strict";i.r(e);var s=i("67c9"),a=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);e["default"]=a.a},9470:function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,'.uni-mask[data-v-6f8ce276]{position:fixed;z-index:101;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.3)}.uni-popup[data-v-6f8ce276]{position:fixed;z-index:101;background-color:#0b1622}.uni-popup-middle[data-v-6f8ce276]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.uni-popup-middle.uni-popup-insert[data-v-6f8ce276]{min-width:%?380?%;min-height:%?380?%;max-width:100%;max-height:80%;-webkit-transform:translate(-50%,-65%);transform:translate(-50%,-65%);background:none;-webkit-box-shadow:none;box-shadow:none}.uni-popup-middle.uni-popup-fixed[data-v-6f8ce276]{-webkit-border-radius:%?10?%;border-radius:%?10?%;padding:%?30?%}.uni-close-bottom[data-v-6f8ce276],\n.uni-close-right[data-v-6f8ce276]{position:absolute;bottom:%?-180?%;text-align:center;-webkit-border-radius:50%;border-radius:50%;color:#f5f5f5;font-size:%?60?%;font-weight:700;opacity:.8;z-index:-1}.uni-close-right[data-v-6f8ce276]{right:%?-60?%;top:%?-80?%}.uni-close-bottom[data-v-6f8ce276]:after{content:"";position:absolute;width:0;border:1px #f5f5f5 solid;top:%?-200?%;bottom:%?56?%;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);opacity:.8}.uni-popup-top[data-v-6f8ce276]{top:0;left:0;width:100%;height:%?100?%;line-height:%?100?%;text-align:center}.uni-popup-bottom[data-v-6f8ce276]{left:0;bottom:0;width:100%;min-height:%?100?%;line-height:%?100?%;text-align:center}',""]),t.exports=e},a3b2:function(t,e,i){"use strict";i.r(e);var s=i("64ee"),a=i("ef1e");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("cdee");var o,r=i("f0c5"),u=Object(r["a"])(a["default"],s["b"],s["c"],!1,null,"6f8ce276",null,!1,s["a"],o);e["default"]=u.exports},a4345:function(t,e,i){var s=i("9470");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("4f06").default;a("09f51c5e",s,!0,{sourceMap:!1,shadowMode:!1})},bbc9:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={name:"uni-popup",props:{show:{type:Boolean,default:!1},position:{type:String,default:"middle"},mode:{type:String,default:"insert"},msg:{type:String,default:""},h5Top:{type:Boolean,default:!1},buttonMode:{type:String,default:"bottom"}},data:function(){var t=0;return t=this.h5Top?0:44,{offsetTop:t}},watch:{h5Top:function(t){console.log(t),this.offsetTop=t?44:0}},methods:{hide:function(){"insert"===this.mode&&"middle"===this.position||this.$emit("hidePopup")},closeMask:function(){"insert"===this.mode&&this.$emit("hidePopup")},moveHandle:function(){}}};e.default=s},c675:function(t,e,i){"use strict";var s=i("4442"),a=i.n(s);a.a},cdee:function(t,e,i){"use strict";var s=i("a4345"),a=i.n(s);a.a},ef1e:function(t,e,i){"use strict";i.r(e);var s=i("bbc9"),a=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);e["default"]=a.a}}]);