(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-lever-leverList"],{"0765":function(t,e,i){"use strict";i.r(e);var a=i("1d94"),s=i("4928");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("f347");var o,r=i("f0c5"),c=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,"b01c01c2",null,!1,a["a"],o);e["default"]=c.exports},"09cd":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-icon",class:["uni-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick()}}})},n=[]},"1d94":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{class:{light:"light"==t.theme}},[i("v-uni-view",{staticClass:"status_bar"},[i("v-uni-view",{staticClass:"top_view"})],1),i("v-uni-view",{staticClass:"header bgHeader fixed flex alcenter between pr15"},[i("v-uni-view",{staticClass:"flex",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.backs.apply(void 0,arguments)}}},[i("uni-icons",{staticClass:"white mt5",attrs:{type:"arrowleft",size:"30"}})],1),i("v-uni-view",{staticClass:"tabs flex alcenter between ft13"},t._l(t.tabs,(function(e){return i("v-uni-view",{key:e.id,class:t.status==e.id?"blue2":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.selectType(e.id)}}},[t._v(t._s(e.texts))])})),1)],1),i("v-uni-view",{staticClass:"list pt60"},t._l(t.orderList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"plr15 bdb_1e mt10 pb10"},[i("v-uni-view",{staticClass:"flex between mb10"},[i("v-uni-view",{},[i("v-uni-text",{class:1==e.type?"green ft14":"red ft14"},[t._v(t._s(1==e.type?t.$t("trade.buy"):t.$t("trade.sell")))]),i("v-uni-text",{staticClass:"ml5"},[t._v(t._s(e.symbol))]),i("v-uni-text",{staticClass:"ml5"},[t._v("x"+t._s(e.share)+t._s(t.$t("trade.hand")))])],1),i("v-uni-view",{class:e.profits<0?"red":"green"},[t._v(t._s(t._f("toFixed4")(e.profits||"0.0000")))])],1),i("v-uni-view",{staticClass:"flex wraps"},[i("v-uni-view",{staticClass:"w33"},[i("v-uni-view",{staticClass:"gray4"},[t._v(t._s(0==t.status?t.$t("trade.delegate_price"):t.$t("trade.price_cang")))]),i("v-uni-view",{staticClass:"mt5  ft14"},[t._v(t._s(t._f("toFixed4")(0==t.status?e.origin_price:e.price||"0.0000")))])],1),i("v-uni-view",{staticClass:" w33 tc"},[i("v-uni-view",{staticClass:"gray4"},[t._v(t._s(t.$t("trade.price_zhiying")))]),i("v-uni-view",{staticClass:"mt5  ft14"},[t._v(t._s(t._f("toFixed4")(e.target_profit_price||"0.0000")))])],1),i("v-uni-view",{staticClass:" w33 tr"},[i("v-uni-view",{staticClass:"gray4"},[t._v(t._s(t.$t("trade.num_zhehe")))]),i("v-uni-view",{staticClass:"mt5  ft14"},[t._v(t._s(t._f("toFixed4")(e.number||"0.0000")))])],1),i("v-uni-view",{staticClass:"mt10 w33"},[i("v-uni-view",{staticClass:"gray4"},[t._v(t._s(t.$t("trade.price_cur")))]),i("v-uni-view",{staticClass:"mt5  ft14"},[t._v(t._s(t._f("toFixed4")(e.update_price||"0.0000")))])],1),i("v-uni-view",{staticClass:"mt10 w33 tc"},[i("v-uni-view",{staticClass:"gray4"},[t._v(t._s(t.$t("trade.price_lose")))]),i("v-uni-view",{staticClass:"mt5  ft14"},[t._v(t._s(t._f("toFixed4")(e.stop_loss_price||"0.0000")))])],1),i("v-uni-view",{staticClass:"mt10 w33 tr"},[i("v-uni-view",{staticClass:"gray4"},[t._v(t._s(t.$t("trade.can_money")))]),i("v-uni-view",{staticClass:"mt5  ft14"},[t._v(t._s(t._f("toFixed4")(e.caution_money||"0.0000")))])],1),i("v-uni-view",{staticClass:"mt10 w33"},[i("v-uni-view",{staticClass:"gray4"},[t._v(t._s(t.$t("trade.money")))]),i("v-uni-view",{staticClass:"mt5  ft14"},[t._v(t._s(t._f("toFixed4")(e.origin_caution_money||"0.0000")))])],1),i("v-uni-view",{staticClass:"mt10 w33 tc"},[i("v-uni-view",{staticClass:"gray4"},[t._v(t._s(t.$t("trade.fee")))]),i("v-uni-view",{staticClass:"mt5  ft14"},[t._v(t._s(t._f("toFixed4")(e.trade_fee||"0.0000")))])],1),i("v-uni-view",{staticClass:"mt10 w33 tr"},[i("v-uni-view",{staticClass:"gray4"},[t._v(t._s(t.$t("trade.geye_fee")))]),i("v-uni-view",{staticClass:"mt5  ft14"},[t._v(t._s(t._f("toFixed4")(e.overnight_money||"0.0000")))])],1),i("v-uni-view",{staticClass:"mt10 "},[i("v-uni-view",{staticClass:"gray4"},[t._v(t._s(t.$t("trade.time_start")))]),i("v-uni-view",{staticClass:"mt5"},[t._v(t._s(e.time))])],1)],1),0==t.status||1==t.status?i("v-uni-view",{staticClass:"flex tr mt15 jsend"},[i("v-uni-view",{staticClass:"bgBlue ptb10 plr15 white radius4 ml10",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.closes(e.id,a)}}},[t._v(t._s(0==t.status?t.$t("trade.chedan"):t.$t("trade.pingcang")))])],1):t._e()],1)})),1),0==t.orderList.length?i("v-uni-view",{staticClass:"tc ptb30"},[i("v-uni-image",{staticClass:"h50 wt50",attrs:{src:"/static/image/nodata.png"}}),i("v-uni-view",{staticClass:"gray7"},[t._v(t._s(t.$t("home.norecord")))])],1):t._e(),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.isBottom,expression:"isBottom"}],staticClass:"tc gray7 ptb20"},[t._v(t._s(t.$t("home.loading"))+"...")]),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.hasMore&&t.orderList.length>10,expression:"!hasMore && orderList.length > 10"}],staticClass:"tc gray7 ptb20"},[t._v(t._s(t.$t("home.nomore")))]),i("uni-popup",{attrs:{show:t.closeTrades.closeTradeShow,msg:t.closeTrades.title,lang:t.langs},on:{hidePopup:function(e){arguments[0]=e=t.$handleEvent(e),t.hideBtn.apply(void 0,arguments)},comfirmPopup:function(e){arguments[0]=e=t.$handleEvent(e),t.comfirmClose.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-common-mt flex1 ft16"},[t._v(t._s(0==t.status?t.$t("trade.confrim_chedan"):t.$t("trade.confrim_ping")))])],1)],1)},n=[]},"276f":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".tabs[data-v-b01c01c2]{width:calc(100vw - %?90?%)}",""]),t.exports=e},"2db5":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};e.default=a},4928:function(t,e,i){"use strict";i.r(e);var a=i("ba24"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},"4f09":function(t,e,i){var a=i("276f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("79d8ff3e",a,!0,{sourceMap:!1,shadowMode:!1})},"54c3":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",[i("v-uni-view",{staticClass:"uni-mask",style:{top:t.offsetTop+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hide.apply(void 0,arguments)}}}),i("v-uni-view",{class:"middle"==t.type?"flex jscenter alcenter contents":""},[i("v-uni-view",{class:["uni-popup",{bgWhite:t.bgColor,bgBlack:!t.bgColor},"uni-popup-"+t.type]},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.msg))]),t._t("default"),t.btnShow?i("v-uni-view",{staticClass:"mt20 uni-popup-bottoms"},[i("v-uni-view",{staticClass:"uni-popup-bottom1 flex jscenter alcenter"},[i("v-uni-view",{staticClass:"cannel flex1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hide.apply(void 0,arguments)}}},[t._v(t._s(t.transwords[t.lang].cancel))]),i("v-uni-view",{staticClass:"comfirms flex1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.comfirms.apply(void 0,arguments)}}},[t._v(t._s(t.transwords[t.lang].confrim))])],1)],1):t._e()],2)],1)],1):t._e()},n=[]},"60ac":function(t,e,i){var a=i("9dd9");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("f42e744e",a,!0,{sourceMap:!1,shadowMode:!1})},"619b":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{show:{type:Boolean,default:!1},type:{type:String,default:"middle"},msg:{type:String,default:""},btnShow:{type:Boolean,default:!0},bgColor:{type:Boolean,default:!0},lang:{type:String,default:"hk"}},data:function(){var t=0;return t=44,{offsetTop:t,transwords:{zh:{cancel:"取消",confrim:"确定"},en:{cancel:"cancel",confrim:"confirm"},hk:{cancel:"取消",confrim:"確定"},jp:{cancel:"キャンセル",confrim:"を選択します"}},translatedInfo:{cancel:"取消",confrim:"确定"}}},created:function(){var t=this;t.lang=uni.getStorageSync("lang")||"zh",console.log(t.lang)},mounted:function(){console.log(uni.getStorageSync("lang")),this.lang=uni.getStorageSync("lang")||"zh",this.translatedInfo=this.transwords[this.lang]},methods:{hide:function(){this.$emit("hidePopup")},comfirms:function(){this.$emit("comfirmPopup")},moveHandle:function(){}}};e.default=a},"8d2b":function(t,e,i){"use strict";i.r(e);var a=i("619b"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},"9dd9":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".contents[data-v-5a4fdeee]{width:100vw;height:100vh;overflow:hidden;position:fixed;left:0;top:0;bottom:0;z-index:997}.uni-mask[data-v-5a4fdeee]{position:fixed;z-index:996;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.6);height:100vh;overflow:hidden}.uni-popup[data-v-5a4fdeee]{position:absolute;z-index:997;color:#333;box-shadow:0 0 %?30?% rgba(0,0,0,.1)}.uni-popup-middle[data-v-5a4fdeee]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:86%;border-radius:%?10?%;\n\t/* justify-content: center; */top:50vh;left:50vw;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.uni-popup-top[data-v-5a4fdeee]{top:0;left:0;width:100%;height:%?100?%;line-height:%?100?%;text-align:center}.uni-popup-bottom[data-v-5a4fdeee]{left:0;bottom:-50px;width:100%;min-height:%?100?%;line-height:%?100?%;text-align:center}.uni-popup-bottoms[data-v-5a4fdeee]{left:0;bottom:0;width:100%;height:%?80?%;line-height:%?80?%}.uni-popup-bottom1[data-v-5a4fdeee]{left:0;bottom:0;width:100%;height:%?80?%;line-height:%?80?%;text-align:center;\n\t/* margin-top:30upx; */border-top:1px solid #d0d0d0}.cannel[data-v-5a4fdeee]{background-color:#f2f2f2;font-size:%?28?%;height:%?80?%;line-height:%?80?%;color:#333;border-bottom-left-radius:%?10?%;border-right:1px solid #d0d0d0}.comfirms[data-v-5a4fdeee]{background-color:#f2f2f2;color:#40affe;font-size:%?28?%;height:%?80?%;line-height:%?80?%;border-bottom-right-radius:%?10?%}.title[data-v-5a4fdeee]{color:#333;line-height:%?100?%;font-size:16px}",""]),t.exports=e},a36d:function(t,e,i){"use strict";var a=i("60ac"),s=i.n(a);s.a},a8ec:function(t,e,i){"use strict";i.r(e);var a=i("54c3"),s=i("8d2b");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("a36d");var o,r=i("f0c5"),c=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,"5a4fdeee",null,!1,a["a"],o);e["default"]=c.exports},ba24:function(t,e,i){"use strict";var a=i("4ea4");i("99af"),i("4160"),i("a434"),i("a9e3"),i("b680"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(i("5530")),n=a(i("f839")),o=a(i("a8ec")),r=i("2f62"),c={components:{uniIcons:n.default,uniPopup:o.default},data:function(){return{uid:"",current:0,popType:"",enType:"in",orderList:[],hisList:[],page:1,status:0,legalId:"",currencyId:"",isBottom:!1,hasMore:!0,tabs:[{id:0,texts:this.$t("lever.delegating")},{id:1,texts:this.$t("lever.dealing")},{id:3,texts:this.$t("lever.hasping")},{id:4,texts:this.$t("lever.hasback")}],closeTrades:{closeTradeShow:!1,title:"",orderId:"",indexs:""},colors:"#ffffff",langs:""}},filters:{toFixed2:function(t,e){return t=Number(t),t.toFixed(2)},toFixed4:function(t){return t=Number(t),t.toFixed(4)}},computed:(0,s.default)({},(0,r.mapState)(["theme"])),onLoad:function(){},onShow:function(){this.$utils.setThemeTop(this.theme),this.$utils.setThemeBottom(this.theme),this.uid=uni.getStorageSync("uid"),this.init(),this.langs=uni.getStorageSync("lang")||"zh"},methods:{init:function(){var t=this;t.$utils.initDataToken({url:"lever/my_trade",data:{page:t.page,status:t.status,currency_id:t.currencyId,legal_id:t.legalId},type:"POST"},(function(e){var i=e.message.data;t.risk=e.rate_profits_total.hazard_rate,t.totalRisk=e.rate_profits_total.profits_total,console.log(i),uni.stopPullDownRefresh(),t.isBottom=!1,1==t.page?t.orderList=i:t.orderList=t.orderList.concat(i),0!=t.status&&1!=t.status||t.orderTrade(),e.message.per_page==i.length?t.hasMore=!0:t.hasMore=!1,console.log(t.hasMore)}))},selectType:function(t){var e=this;e.status=t,e.orderList=[],e.page=1,e.$socket.closeSocket(),e.init()},closes:function(t,e){var i=this;i.closeTrades.orderId=t,i.closeTrades.indexs=e,i.closeTrades.closeTradeShow=!0},hideBtn:function(){var t=this;t.closeTrades.closeTradeShow=!1},comfirmClose:function(){var t=this,e="";t.closeTrades.closeTradeShow=!1,0==t.status?e="lever/cancel":1==t.status&&(e="lever/close"),t.$utils.initDataToken({url:e,type:"POST",data:{id:t.closeTrades.orderId}},(function(e){t.$utils.showLayer(e),t.$socket.closeSocket(),setTimeout((function(){t.closeTrades.orderId="",t.orderList.splice(t.closeTrades.indexs,1)}),1e3)}))},onPullDownRefresh:function(){this.page=1,this.init()},onReachBottom:function(){this.hasMore&&(this.page++,this.init())},backs:function(){uni.navigateBack({delta:1})},orderTrade:function(){var t=this,e=uni.getStorageSync("token"),i=this.$socketio(this.$socket_api);i.emit("login",e),i.on("lever_trade",(function(e){var i=e.trades_all;t.legalId==e.legal_id&&(t.risk=e.hazard_rate,t.totalRisk=e.profits_all),i.forEach((function(e,i){datas.forEach((function(i,a){i.currency==e.currency&&i.legal==e.legal&&e.id==i.id&&t.orderList.splice(a,1,e)}))}))}))}}};e.default=c},c9e6:function(t,e,i){"use strict";i.r(e);var a=i("2db5"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},f347:function(t,e,i){"use strict";var a=i("4f09"),s=i.n(a);s.a},f839:function(t,e,i){"use strict";i.r(e);var a=i("09cd"),s=i("c9e6");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);var o,r=i("f0c5"),c=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);e["default"]=c.exports}}]);