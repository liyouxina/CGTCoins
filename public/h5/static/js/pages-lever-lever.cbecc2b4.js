(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-lever-lever"],{"014d":function(e,t,i){e.exports=i.p+"static/img/anonymous.8c51edd4.png"},"0e2b":function(e,t,i){"use strict";var a=i("742b"),n=i.n(a);n.a},"128f":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={props:{visible:{type:Boolean,default:!1},mode:String,mask:{type:[Boolean,String],default:!0}},data:function(){return{rightMode:!1,catchtouchmove:!1}},computed:{showMask:function(){return"true"===String(this.mask)}},created:function(){this.rightMode="right"===this.mode},methods:{close:function(){this.$emit("close")}}};t.default=a},"283c":function(e,t,i){"use strict";i.r(t);var a=i("5614"),n=i("7156b");for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("0e2b");var s,l=i("f0c5"),o=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"28e4674a",null,!1,a["a"],s);t["default"]=o.exports},"2c3d":function(e,t,i){e.exports=i.p+"static/img/datamap.a1ca4912.png"},"32f0":function(e,t,i){"use strict";var a=i("4ea4");i("4de4"),i("4160"),i("fb6a"),i("a9e3"),i("b680"),i("acd8"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("5530")),r=a(i("283c")),s=a(i("6cc1")),l=a(i("42ee")),o=i("2f62"),c={components:{uniDrawer:r.default,uniIcon:s.default,uniPopup:l.default},data:function(){return{leftStatus:!1,legalId:"",legalIds:"",legalName:"",currencyId:"",currencyName:"",leverTradeType:"buy",priceValue:this.$t("trade.best"),priceStatus:1,quotationList:[],legalIndex:0,currencyIndex:0,linkStatus:!1,minShare:0,maxShare:0,leverOrder:{shareNUm:0,mult:0,share:"",fee:"",spread:"",fees:"",bonds:"",passwords:"",marketPrice:""},multShare:{},leverBalance:"0",sellList:[["--","--"],["--","--"],["--","--"],["--","--"],["--","--"]],buyList:[["--","--"],["--","--"],["--","--"],["--","--"],["--","--"]],newPrice:0,cny:1,orderList:[],showModal:!1,tipbtnShow:!0,title:this.$t("trade.confrim_order"),closeTrades:{closeTradeShow:!1,title:"",orderId:""},tradeTypes:{shows:!1,types:"bottom"},mults:{shows:!1,types:"bottom"},shares:{shows:!1,types:"bottom"},timer:"",timers:"",langs:""}},filters:{toFixed2:function(e){return e=Number(e),e.toFixed(2)},toFixed4:function(e){return e=Number(e),e.toFixed(4)}},onLoad:function(e){var t=this;e.legalId&&(t.legalId=e.legalId,t.currencyId=e.currencyId,t.linkStatus=!0)},onPullDownRefresh:function(){this.init()},onShow:function(){var e=this;e.init(),e.getTime(),e.priceValue=this.$t("trade.best"),e.langs=uni.getStorageSync("lang")||"hk",e.$utils.setThemeTop(e.theme),e.$utils.setThemeBottom(e.theme)},onHide:function(){this.$socket.closeSocket()},computed:(0,n.default)({},(0,o.mapState)(["theme"])),methods:{getTime:function(){var e=this;e.timer=(new Date).getTime(),e.timers=(new Date).getTime()+1e3},shows:function(){},init:function(){var e=this;if(!e.linkStatus&&uni.getStorageSync("leverOrder")){var t=JSON.parse(uni.getStorageSync("leverOrder"));e.legalId=t.legalId,e.currencyId=t.currencyId}e.$utils.initDataToken({url:"currency/quotation_new"},(function(t){if(uni.stopPullDownRefresh(),t.length>0){var i=t.filter((function(e,t){return 1==e.is_display&&1==e.is_lever}));if(e.quotationList=i,console.log(e.quotationList),e.legalId)e.legalIds=e.legalId,i.forEach((function(t,i){if(e.legalId==t.id){e.legalName=t.name,e.legalIndex=i,console.log(t);var a=t.quotation;console.log(a);var n=a.filter((function(e,t){return 1==e.is_display}));n.length>0&&n.forEach((function(t,i){if(e.currencyId==t.currency_id)return e.currencyIndex=i,e.currencyName=t.currency_name,e.leverOrder.shareNUm=t.lever_share_num,e.leverOrder.spread=t.spread,e.leverOrder.fee=t.lever_trade_fee,e.handicap(),e.deals(),!1}))}}));else{var a=i[0].quotation.filter((function(e,t){return 1==e.is_display}));e.legalName=i[0].name,e.legalId=i[0].id,e.currencyId=a[0].currency_id,e.currencyName=a[0].currency_name,e.leverOrder.shareNUm=a[0].lever_share_num,e.leverOrder.spread=a[0].spread,e.leverOrder.fee=a[0].lever_trade_fee,e.legalIds=i[0].id,e.handicap(),e.deals()}}}))},deals:function(){var e=this;e.$utils.initDataToken({url:"lever/deal",type:"POST",data:{legal_id:e.legalId,currency_id:e.currencyId}},(function(t){e.multShare=t.multiple,e.buyList=[["--","--"],["--","--"],["--","--"],["--","--"],["--","--"]],e.sellList=[["--","--"],["--","--"],["--","--"],["--","--"],["--","--"]],e.minShare=t.lever_share_limit.min,e.maxShare=t.lever_share_limit.max,e.cny=t.ExRAte,e.newPrice=t.last_price,t.multiple.muit.length>0&&(e.leverOrder.mult=t.multiple.muit[0].value),t.multiple.share.length>0&&(e.leverOrder.share=t.multiple.share[0].value),e.orderList=t.my_transaction,e.leverBalance=t.user_lever}))},tradeType:function(e){var t=this;t.leverTradeType=e,t.leverOrder.share=""},priceTab:function(e){var t=this;t.priceStatus=e,t.tradeTypes.shows=!1,t.priceValue=1==e?this.$t("trade.best"):(t.newPrice-0).toFixed(4)},selectmult:function(e){var t=this;t.leverOrder.mult=e,t.mults.shows=!1},selectShare:function(e){var t=this;t.leverOrder.share=e,t.shares.shows=!1},calculation:function(e){var t=this,i=parseFloat(e*t.leverOrder.spread/100),a=0;a="sell"==t.leverTradeType?parseFloat(e-i):parseFloat(e+i);var n=parseFloat(t.leverOrder.shareNUm),r=parseFloat(a*t.leverOrder.share*n);t.leverOrder.bonds=parseFloat((r-0)/(t.leverOrder.mult-0)).toFixed(4),t.leverOrder.fees=parseFloat(r*t.leverOrder.fee/100).toFixed(4),t.leverOrder.marketPrice=parseFloat(a*t.leverOrder.share*n).toFixed(4)},submits:function(){var e=this;if(!e.leverOrder.mult)return e.$utils.showLayer(this.$t("trade.p_times")),!1;if(!e.leverOrder.share)return e.$utils.showLayer(this.$t("trade.p_hands")),!1;if(0==e.priceStatus){if(console.log(e.priceValue,123),!e.priceValue)return e.$utils.showLayer(this.$t("trade.p_delprice")),!1;e.calculation(e.priceValue)}else e.calculation(e.newPrice);return e.leverOrder.share<e.minShare?(e.$utils.showLayer(this.$t("trade.p_notless")+e.minShare),!1):e.leverOrder.share>e.maxShare?(e.$utils.showLayer(this.$t("trade.p_notmore")+e.maxShare),!1):(e.showModal=!0,e.shows=!1,e.title=e.$t("trade.confrim_order"),e.getTime(),void(e.leverOrder.passwords=""))},hideBtn:function(){var e=this;e.showModal=!1,e.closeTrades.closeTradeShow=!1,e.shows=!0,e.tradeTypes.shows=!1,e.mults.shows=!1},confirmBtn:function(){var e=this;e.showModal=!1,e.$utils.initDataToken({url:"lever/submit",type:"POST",data:{share:e.leverOrder.share,multiple:e.leverOrder.mult,legal_id:e.legalId,currency_id:e.currencyId,type:"buy"==e.leverTradeType?1:2,status:e.priceStatus,target_price:e.priceValue,password:e.leverOrder.passwords}},(function(t){e.$utils.showLayer(t),setTimeout((function(){0==e.priceStatus?uni.navigateTo({url:"leverList"}):uni.navigateTo({url:"orderList?legalId="+e.legalId+"&currencyId="+e.currencyId})}),1e3)}))},selectedLegal:function(e){var t=this;t.legalIds=e;for(var i=0;i<t.quotationList.length;i++)t.quotationList[i].id==e&&(t.legalIndex=i)},selectCurrency:function(e){var t=this;t.$socket.closeSocket(),t.legalName=e.legal_name,t.legalId=e.legal_id,t.currencyId=e.currency_id,t.currencyName=e.currency_name,t.leverOrder.shareNUm=e.lever_share_num,t.leverOrder.spread=e.spread,t.leverOrder.fee=e.lever_trade_fee,t.legalIds=e.legal_id,t.leftStatus=!1;var i={legalId:t.legalId,currencyId:t.currencyId};uni.setStorageSync("leverOrder",JSON.stringify(i)),t.handicap(),t.deals()},closeTrade:function(e){var t=this;t.closeTrades.orderId=e,t.closeTrades.closeTradeShow=!0,t.getTime(),t.shows=!1},comfirmClose:function(){var e=this;e.closeTrades.closeTradeShow=!1,e.$utils.initDataToken({url:"lever/close",type:"POST",data:{id:e.closeTrades.orderId}},(function(t){e.$utils.showLayer(t),setTimeout((function(){e.closeTrades.orderId="",e.deals()}),1e3)}))},linkKline:function(){var e=this,t=e.currencyName+"/"+e.legalName;uni.navigateTo({url:"/pages/market/kline?legal_id="+e.legalId+"&currency_id="+e.currencyId+"&symbol="+t})},linkLever:function(){uni.navigateTo({url:"leverList"})},totalOrder:function(){var e=this;uni.navigateTo({url:"orderList?legalId="+e.legalId+"&currencyId="+e.currencyId})},bindChange:function(){},handicap:function(){var e=this,t=uni.getStorageSync("token"),i=(e.currencyName,e.legalName,this.$socketio(this.$socket_api));i.emit("login",t),i.on("market_depth",(function(t){console.log("执行"),t.currency_id==e.currencyId&&t.legal_id==e.legalId&&(e.buyList=t.bids.slice(0,5),e.sellList=t.asks.slice(-5))})),i.on("daymarket",(function(t){console.log("执行2"),e.currencyId==t.currency_id&&e.legalId==t.legal_id&&(e.newPrice=t.now_price),e.quotationList.forEach((function(i,a){var n=i.quotation;n.forEach((function(i,n){if(i.currency_id==t.currency_id&&i.legal_id==t.legal_id)return e.quotationList[a].quotation[n].now_price=t.now_price}))}))}))}}};t.default=c},3876:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABv0lEQVRYR+2Uv0tCURzFz/epYQRNgoNrq7PWYCpCBGX5ojHcQsWC/oLsTwg0pSEaGkvFoa2nQyI1t7ZGBNIQhEbvfeNJhZl5n79yeXd73Ps958O57x7ChBdN2B8mgJmAmcB3AoH12AaIkv/yLJnT5WLuQvdqu4KUFJSfzgFExgrBfKYUnFEgpXUAAPObe9N2tVEiUGgcEMys8LNzqVJJvX/p//oJPcs7szN29RoE9yghmPnuTW0uVEsnL+26XV9BcCXmwhTdAOQaBQQz37+pFl+1lH7o1PvzGfrWkm6rpOlJzA4FwaiD3z1K8fi+m07PHvDL8RABlwSyDQLB4AZpvKgUc7d/zQuLyB+JRyWi0wEANAZHyvlsqdesEEAfDsqJFID9fiA05mSlkM2IZgwB6CKBSOKQCLsiwc/9AyV/pEMLl2EAwGBRtYomuyV0/jzQB8B3USkE8nYz6FY0IpC+AHQx/+q2g2zWGgFzP8SZb5tqM9RZNCMHaEGEE3Nk4RoROfRvvWgkSJ6rQqYuMjRcRCIhvxz3EkghxmuvohHp9H0F7YIBOR4mjR97Fc1YAUTiRvaHSsCIgeiMCWAmYCbwAZQnmCHIouTzAAAAAElFTkSuQmCC"},"39bf":function(e,t,i){"use strict";var a=i("a165"),n=i.n(a);n.a},4170:function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{class:{light:"light"==e.theme}},[a("v-uni-view",{staticClass:"status_bar"},[a("v-uni-view",{staticClass:"top_view"})],1),a("v-uni-view",{staticClass:"header bgHeader fixed flex alcenter between plr15"},[a("v-uni-view",{staticClass:"flex alcenter",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.leftStatus=!0}}},[a("v-uni-image",{staticClass:"wt20 h20",attrs:{src:i("ca7b"),mode:"aspectFit"}}),a("v-uni-view",{staticClass:"ml10 ft14"},[e._v(e._s(e.currencyName)+"/"+e._s(e.legalName))])],1),a("v-uni-view",[a("v-uni-image",{staticClass:"wt20 h20",attrs:{src:i("2c3d"),mode:"aspectFit"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.linkKline.apply(void 0,arguments)}}}),a("v-uni-image",{staticClass:"wt20 h20 ml10",attrs:{src:i("f227"),mode:"aspectFit"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.linkLever.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",{staticClass:"pt50"},[a("v-uni-view",{staticClass:"flex between plr15 pb10 mt10 bgPart pt10"},[a("v-uni-view",{staticClass:"content-left"},[a("v-uni-view",{staticClass:"content-left-header posRelt flex between bggray overxy"},[a("v-uni-view",{staticClass:"bggray h35 lh35 flex1 tc",class:"buy"==e.leverTradeType?"bgGreen white":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.tradeType("buy")}}},[e._v(e._s(e.$t("trade.buy")))]),a("v-uni-view",{staticClass:"bor  abstrot mt5 bgPart"}),a("v-uni-view",{staticClass:"bggray h35 lh35 flex1 tc",class:"sell"==e.leverTradeType?"bgRed white":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.tradeType("sell")}}},[e._v(e._s(e.$t("trade.sell")))])],1),a("v-uni-view",{staticClass:"flex alcenter between mt10"},[a("v-uni-view",{staticClass:"flex alcenter between bor1 flex2 h30  pr5",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.tradeTypes.shows=!0}}},[a("v-uni-view",{staticClass:"flex1 tc"},[e._v(e._s(1==e.priceStatus?e.$t("trade.shi"):e.$t("trade.limit")))]),a("v-uni-image",{staticClass:"wt15 h15 ",attrs:{src:i("3876"),mode:"aspectFit"}})],1),a("v-uni-view",{staticClass:"flex1 h30 ml5"},[a("v-uni-view",{staticClass:"bor1 h30 flex alcenter between pr5",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.mults.shows=!0}}},[a("v-uni-text",{staticClass:"flex1 tc"},[e._v(e._s(e.leverOrder.mult)+"X")]),a("v-uni-image",{staticClass:"wt15 h15  ",attrs:{src:i("3876"),mode:"aspectFit"}})],1)],1)],1),a("v-uni-view",{staticClass:"bor1 h35 flex alcenter mt15 radius6 pl10"},[a("v-uni-input",{class:1==e.priceStatus?"color1":"",attrs:{type:"text",disabled:1==e.priceStatus},model:{value:e.priceValue,callback:function(t){e.priceValue=t},expression:"priceValue"}})],1),a("v-uni-view",{staticClass:"mt10"},[e._v(e._s(e._f("toFixed2")(e.leverOrder.shareNUm))+e._s(e.currencyName))]),a("v-uni-view",{staticClass:"mt10 ft14"},[a("v-uni-view",{},[e._v(e._s(e.$t("trade.handnum")))]),a("v-uni-view",{staticClass:"flex between alcenter mt10"},[a("v-uni-view",{staticClass:"bor1 h30 flex alcenter pl10"},[a("v-uni-input",{attrs:{type:"number"},model:{value:e.leverOrder.share,callback:function(t){e.$set(e.leverOrder,"share",t)},expression:"leverOrder.share"}})],1),e.multShare.share&&e.multShare.share.length>0?a("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.shares.shows=!0}}},[a("v-uni-view",{staticClass:"bor1 h30 flex alcenter between plr8 ml5"},[a("v-uni-text",[e._v(e._s(e.leverOrder.share))]),a("v-uni-image",{staticClass:"wt15 h15  ml10",attrs:{src:i("3876"),mode:"aspectFit"}})],1)],1):e._e()],1)],1),a("v-uni-view",{staticClass:"mt20 ft14"},[e._v(e._s(e.$t("trade.balance"))+"："+e._s(e._f("toFixed4")(e.leverBalance))+e._s(e.legalName))]),a("v-uni-view",{staticClass:"btns h35 flex jscenter alcenter mt15",class:"buy"==e.leverTradeType?"bgGreen":"bgRed",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submits.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"flex1 tc white"},[e._v(e._s("buy"==e.leverTradeType?e.$t("trade.buy_duo"):e.$t("trade.sell_kong")))])],1)],1),a("v-uni-view",{staticClass:"content-right flex column ml10"},[a("v-uni-view",{staticClass:"flex between"},[a("v-uni-view",{},[e._v(e._s(e.$t("trade.price")))]),a("v-uni-view",{},[e._v(e._s(e.$t("trade.num")))])],1),a("v-uni-view",{staticClass:"flex1 flex column"},e._l(e.sellList,(function(t,i){return i<5?a("v-uni-view",{key:i,staticClass:"flex between flex1 alcenter"},[t[0]>=0?a("v-uni-view",{staticClass:"red"},[e._v(e._s(e._f("toFixed4")(t[0])))]):a("v-uni-view",{staticClass:"red"},[e._v(e._s(t[0]))]),t[1]>=0?a("v-uni-view",[e._v(e._s(e._f("toFixed2")(t[1])))]):a("v-uni-view",[e._v(e._s(t[1]))])],1):e._e()})),1),a("v-uni-view",{},[a("v-uni-view",{staticClass:"red2 ft18"},[e._v(e._s(e._f("toFixed4")(e.newPrice)))]),a("v-uni-view",{staticClass:"mt5"},[e._v("≈"+e._s(e._f("toFixed4")(e.newPrice*e.cny))+"CNY")])],1),a("v-uni-view",{staticClass:"flex1 flex column"},e._l(e.buyList,(function(t,i){return i<5?a("v-uni-view",{key:i,staticClass:"flex between flex1 alcenter"},[t[0]>=0?a("v-uni-view",{staticClass:"green"},[e._v(e._s(e._f("toFixed4")(t[0])))]):a("v-uni-view",{staticClass:"green"},[e._v(e._s(t[0]))]),t[1]>=0?a("v-uni-view",[e._v(e._s(e._f("toFixed2")(t[1])))]):a("v-uni-view",[e._v(e._s(t[1]))])],1):e._e()})),1)],1)],1)],1),a("v-uni-view",{staticClass:"bggray h10"}),a("v-uni-view",{staticClass:"lever-order pt10 pb15 bgPart"},[a("v-uni-view",{staticClass:"flex between plr15"},[a("v-uni-view",{staticClass:"ft16"},[e._v(e._s(e.$t("trade.delegate")))]),a("v-uni-view",{staticClass:"flex",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.totalOrder.apply(void 0,arguments)}}},[a("v-uni-image",{staticClass:"wt20 h20",attrs:{src:i("f227"),mode:"aspectFit"}}),a("v-uni-view",{staticClass:"ml10 ft14"},[e._v(e._s(e.$t("trade.chicang")))])],1)],1),a("v-uni-view",{staticClass:"mt10"},[a("v-uni-view",{staticClass:"flex between"},[a("v-uni-view",{staticClass:"flex1 tc ml5"},[e._v(e._s(e.$t("trade.types")))]),a("v-uni-view",{staticClass:"flex2 tc"},[e._v(e._s(e.$t("trade.time")))]),a("v-uni-view",{staticClass:"flex2 tc"},[e._v(e._s(e.$t("trade.price")))]),a("v-uni-view",{staticClass:"flex1 tc"},[e._v(e._s(e.$t("trade.amout")))]),a("v-uni-view",{staticClass:"flex1 tc mr10 ml10"},[e._v(e._s(e.$t("trade.operate")))])],1),e.orderList.length>0?a("v-uni-view",{},e._l(e.orderList,(function(t,i){return a("v-uni-view",{key:i,staticClass:"flex between alcenter mt10"},[a("v-uni-view",{staticClass:"flex1 tc ml5"},[e._v(e._s(1==t.type?e.$t("trade.buy"):e.$t("trade.sell")))]),a("v-uni-view",{staticClass:"flex2 tc"},[e._v(e._s(t.time))]),a("v-uni-view",{staticClass:"flex2 tc"},[e._v(e._s(e._f("toFixed4")(t.price||"0.0000")))]),a("v-uni-view",{staticClass:"flex1 tc"},[e._v(e._s(e._f("toFixed2")(t.number||"0.00")))]),a("v-uni-view",{staticClass:"flex1 tc bgBlue mr10 pt5 pb5 radius4 ml10 white",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.closeTrade(t.id)}}},[e._v(e._s(e.$t("trade.pingcang")))])],1)})),1):e._e(),0==e.orderList.length?a("v-uni-view",{staticClass:"tc mt40 pb20"},[a("v-uni-image",{staticClass:"wt80 h80",attrs:{src:i("014d"),mode:"aspectFit"}}),a("v-uni-view",{staticClass:"tc"},[e._v(e._s(e.$t("home.norecord")))])],1):e._e()],1)],1),a("v-uni-view",{staticClass:"bottom-space"}),a("v-uni-view",{staticClass:"header-left"},[e.quotationList.length>0?a("uni-drawer",{attrs:{visible:e.leftStatus},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.leftStatus=!1}}},[a("v-uni-view",{staticClass:"flex column ht100"},[a("v-uni-view",{staticClass:"tr mt10 mr10"},[a("uni-icon",{attrs:{size:"30",type:"arrowthinright"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.leftStatus=!1}}})],1),a("v-uni-view",{staticClass:"flex plr10 mt10"},e._l(e.quotationList,(function(t,i){return a("v-uni-view",{key:i,staticClass:"flex1 tc pb10",class:e.legalIds==t.id?"bdb_blue":"",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.selectedLegal(t.id)}}},[e._v(e._s(t.name))])})),1),e.quotationList.length>0?a("v-uni-view",{staticClass:"pb50 flex1",staticStyle:{"overflow-y":"scroll"}},e._l(e.quotationList[e.legalIndex].quotation,(function(t,i){return a("v-uni-view",{key:i,staticClass:"bor5"},[1==t.is_display?a("v-uni-view",{staticClass:"flex between plr10 ptb20",class:e.legalId==t.legal_id&&e.currencyId==t.currency_id?"bggray":"",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.selectCurrency(t)}}},[a("v-uni-view",{staticClass:"color1"},[e._v(e._s(t.currency_name))]),a("v-uni-view",{class:t.change<0?"red":"green"},[e._v(e._s(t.now_price||"0.00"))]),a("v-uni-view",{class:t.change<0?"red":"green"},[e._v(e._s(t.change||"0.00"))])],1):e._e()],1)})),1):e._e()],1)],1):e._e()],1),a("uni-popup",{key:e.timer,attrs:{show:e.showModal,msg:e.title,btnShow:e.tipbtnShow,lang:e.langs},on:{hidePopup:function(t){arguments[0]=t=e.$handleEvent(t),e.hideBtn.apply(void 0,arguments)},comfirmPopup:function(t){arguments[0]=t=e.$handleEvent(t),e.confirmBtn.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"uni-common-mt show-content flex1"},[a("v-uni-view",{staticClass:"container ft14"},[a("v-uni-view",{},[e._v(e._s(e.currencyName)+"/"+e._s(e.legalName))]),a("v-uni-view",{staticClass:"flex between mt10"},[a("v-uni-view",{staticClass:"ft14"},[e._v(e._s(e.$t("trade.types")))]),a("v-uni-view",{staticClass:"ft14"},[e._v(e._s("buy"==e.leverTradeType?e.$t("trade.duo"):e.$t("trade.kong")))])],1),a("v-uni-view",{staticClass:"flex between mt10"},[a("v-uni-view",{staticClass:"ft14"},[e._v(e._s(e.$t("trade.hands")))]),a("v-uni-view",{staticClass:"ft14"},[e._v(e._s(e.leverOrder.share))])],1),a("v-uni-view",{staticClass:"flex between mt10"},[a("v-uni-view",{staticClass:"ft14"},[e._v(e._s(e.$t("trade.times")))]),a("v-uni-view",{staticClass:"ft14"},[e._v(e._s(e.leverOrder.mult))])],1),a("v-uni-view",{staticClass:"flex between mt10"},[a("v-uni-view",{staticClass:"ft14"},[e._v(e._s(e.$t("trade.fee")))]),a("v-uni-view",{staticClass:"ft14"},[e._v(e._s(e.leverOrder.fees))])],1),a("v-uni-view",{staticClass:"flex between mt10"},[a("v-uni-view",{staticClass:"ft14"},[e._v(e._s(e.$t("trade.money")))]),a("v-uni-view",{staticClass:"ft14"},[e._v(e._s(e.leverOrder.bonds))])],1)],1)],1)],1),a("uni-popup",{key:e.timers,attrs:{show:e.closeTrades.closeTradeShow,msg:e.closeTrades.title,lang:e.langs},on:{hidePopup:function(t){arguments[0]=t=e.$handleEvent(t),e.hideBtn.apply(void 0,arguments)},comfirmPopup:function(t){arguments[0]=t=e.$handleEvent(t),e.comfirmClose.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"uni-common-mt flex1 ft16"},[e._v(e._s(e.$t("trade.confrim_ping"))+"？")])],1),a("uni-popup",{attrs:{show:e.tradeTypes.shows,type:e.tradeTypes.types,btnShow:!1,bgColor:!1,lang:e.langs},on:{hidePopup:function(t){arguments[0]=t=e.$handleEvent(t),e.hideBtn.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"uni-common-mt w100 gray7"},[a("v-uni-view",{staticClass:"flex1 ft14 w100  flex alcenter jscenter bdb_1e ptb15 bgPart",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.priceTab(1)}}},[e._v(e._s(e.$t("trade.shi")))]),a("v-uni-view",{staticClass:"flex1 ft14 w100  flex alcenter jscenter ptb15 bgPart",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.priceTab(0)}}},[e._v(e._s(e.$t("trade.limit")))]),a("v-uni-view",{staticClass:"flex1 ft14 w100  flex alcenter jscenter ptb15 mt10 bgPart",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.hideBtn.apply(void 0,arguments)}}},[e._v(e._s(e.$t("trade.cancel")))])],1)],1),a("uni-popup",{attrs:{show:e.mults.shows,type:e.mults.types,btnShow:!1,bgColor:!1,lang:e.langs},on:{hidePopup:function(t){arguments[0]=t=e.$handleEvent(t),e.hideBtn.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"uni-common-mt w100 gray7"},[e._l(e.multShare.muit,(function(t,i){return a("v-uni-view",{key:i,staticClass:"flex1 ft14 w100  flex alcenter jscenter bdb_1e ptb15 bgPart",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.selectmult(t.value)}}},[e._v(e._s(t.value)+"X")])})),a("v-uni-view",{staticClass:"flex1 ft14 w100  flex alcenter jscenter ptb15 mt10 bgPart",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.hideBtn.apply(void 0,arguments)}}},[e._v(e._s(e.$t("trade.cancel")))])],2)],1),a("uni-popup",{attrs:{show:e.shares.shows,type:e.shares.types,btnShow:!1,bgColor:!1,lang:e.langs},on:{hidePopup:function(t){arguments[0]=t=e.$handleEvent(t),e.hideBtn.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"uni-common-mt w100 gray7"},[e._l(e.multShare.share,(function(t,i){return a("v-uni-view",{key:i,staticClass:"flex1 ft14 w100  flex alcenter jscenter bdb_1e ptb15 bgPart",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.selectShare(t.value)}}},[e._v(e._s(t.value))])})),a("v-uni-view",{staticClass:"flex1 ft14 w100  flex alcenter jscenter ptb15 mt10 bgPart",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.hideBtn.apply(void 0,arguments)}}},[e._v(e._s(e.$t("trade.cancel")))])],2)],1),a("v-uni-view",{staticClass:"h50"})],1)},r=[]},"42ee":function(e,t,i){"use strict";i.r(t);var a=i("893a"),n=i("e3d2");for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("4f5f");var s,l=i("f0c5"),o=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"a6f8b9a4",null,!1,a["a"],s);t["default"]=o.exports},"4f5f":function(e,t,i){"use strict";var a=i("f57e"),n=i.n(a);n.a},5351:function(e,t,i){"use strict";i.r(t);var a=i("4170"),n=i("ef6d");for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("39bf");var s,l=i("f0c5"),o=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"75f96238",null,!1,a["a"],s);t["default"]=o.exports},5614:function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-drawer",class:{"uni-drawer-visible":e.visible,"uni-drawer-right":e.rightMode}},[e.showMask?i("v-uni-view",{staticClass:"uni-drawer-mask",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.close.apply(void 0,arguments)}}}):e._e(),i("v-uni-view",{staticClass:"uni-drawer-content"},[e._t("default")],2)],1)},r=[]},"6cc1":function(e,t,i){"use strict";i.r(t);var a=i("c94e"),n=i("dfe1");for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);var s,l=i("f0c5"),o=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);t["default"]=o.exports},"7156b":function(e,t,i){"use strict";i.r(t);var a=i("128f"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},"742b":function(e,t,i){var a=i("9c45");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("c46a008c",a,!0,{sourceMap:!1,shadowMode:!1})},"893a":function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.show?i("v-uni-view",[i("v-uni-view",{staticClass:"uni-mask",style:{top:e.offsetTop+"px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.hide.apply(void 0,arguments)}}}),i("v-uni-view",{class:"middle"==e.type?"flex jscenter alcenter contents":""},[i("v-uni-view",{class:["uni-popup",{bgWhite:e.bgColor,bgBlack:!e.bgColor},"uni-popup-"+e.type]},[i("v-uni-view",{staticClass:"title"},[e._v(e._s(e.msg))]),e._t("default"),e.btnShow?i("v-uni-view",{staticClass:"mt20 uni-popup-bottoms"},[i("v-uni-view",{staticClass:"uni-popup-bottom1 flex jscenter alcenter"},[i("v-uni-view",{staticClass:"cannel flex1",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.hide.apply(void 0,arguments)}}},[e._v(e._s(e.transwords[e.lang].cancel))]),i("v-uni-view",{staticClass:"comfirms flex1",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.comfirms.apply(void 0,arguments)}}},[e._v(e._s(e.transwords[e.lang].confrim))])],1)],1):e._e()],2)],1)],1):e._e()},r=[]},"9c45":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,".uni-drawer[data-v-28e4674a]{display:block;position:fixed;top:0;left:0;right:0;bottom:0;overflow:hidden;visibility:hidden;z-index:10000000;height:100%}.uni-drawer>.uni-drawer-mask[data-v-28e4674a]{display:block;position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.4)}.uni-drawer>.uni-drawer-content[data-v-28e4674a]{display:block;position:absolute;top:0;left:0;width:70%;height:100%;background:#102030;-webkit-transition:all .3s ease-out;transition:all .3s ease-out;-webkit-transform:translatex(-100%);transform:translatex(-100%)}.uni-drawer.uni-drawer-right>.uni-drawer-content[data-v-28e4674a]{left:auto;right:0;-webkit-transform:translatex(100%);transform:translatex(100%)}.uni-drawer.uni-drawer-visible[data-v-28e4674a]{visibility:visible}.uni-drawer.uni-drawer-visible>.uni-drawer-mask[data-v-28e4674a]{display:block}.uni-drawer.uni-drawer-visible>.uni-drawer-content[data-v-28e4674a]{-webkit-transform:translatex(0);transform:translatex(0)}",""]),e.exports=t},a165:function(e,t,i){var a=i("d156");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("b045c7a6",a,!0,{sourceMap:!1,shadowMode:!1})},aba4:function(e,t,i){"use strict";i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};t.default=a},c94e:function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-icon",class:["uni-icon-"+e.type],style:{color:e.color,"font-size":e.fontSize},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick()}}})},r=[]},ca7b:function(e,t,i){e.exports=i.p+"static/img/list.1b238eef.png"},d156:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,"uni-page-body[data-v-75f96238]{background-color:#102030;width:100vw;height:100vh;overflow-y:scroll}.content-left[data-v-75f96238]{width:60%}.content-right[data-v-75f96238]{width:40%}.content-left-header[data-v-75f96238]{height:%?70?%;overflow:hidden}.content-left-text[data-v-75f96238]{height:%?70?%;line-height:%?70?%;\r\n\t/* color: #828181; */\r\n\t/* background: #0b1823; */text-align:center}.bor[data-v-75f96238]{width:%?36?%;height:%?140?%;left:calc(50% - %?18?%);top:%?-50?%;transform:rotate(25deg);-ms-transform:rotate(25deg);-moz-transform:rotate(25deg);-webkit-transform:rotate(25deg);-o-transform:rotate(25deg)}.content-left-price[data-v-75f96238]{height:%?72?%;line-height:%?72?%;text-align:center}.show-content[data-v-75f96238]{width:88%}body.?%PAGE?%[data-v-75f96238]{background-color:#102030}",""]),e.exports=t},dfe1:function(e,t,i){"use strict";i.r(t);var a=i("aba4"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},e3d2:function(e,t,i){"use strict";i.r(t);var a=i("e4e6"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},e4e6:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={props:{show:{type:Boolean,default:!1},type:{type:String,default:"middle"},msg:{type:String,default:""},btnShow:{type:Boolean,default:!0},bgColor:{type:Boolean,default:!0},lang:{type:String,default:"hk"}},data:function(){var e=0;return e=44,{offsetTop:e,transwords:{zh:{cancel:"取消",confrim:"确定"},en:{cancel:"cancel",confrim:"confirm"},hk:{cancel:"取消",confrim:"確定"},jp:{cancel:"キャンセル",confrim:"を選択します"}},translatedInfo:{cancel:"取消",confrim:"确定"}}},created:function(){var e=this;e.lang=uni.getStorageSync("lang")||"hk",console.log(e.lang)},mounted:function(){console.log(uni.getStorageSync("lang")),this.lang=uni.getStorageSync("lang")||"hk",this.translatedInfo=this.transwords[this.lang]},methods:{hide:function(){this.$emit("hidePopup")},comfirms:function(){this.$emit("comfirmPopup")},moveHandle:function(){}}};t.default=a},ef6d:function(e,t,i){"use strict";i.r(t);var a=i("32f0"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},f227:function(e,t){e.exports="data:image/png;base64,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"},f554:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,".contents[data-v-a6f8b9a4]{width:100vw;height:100vh;overflow:hidden;position:fixed;left:0;top:0;bottom:0;z-index:997}.uni-mask[data-v-a6f8b9a4]{position:fixed;z-index:996;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.6);height:100vh;overflow:hidden}.uni-popup[data-v-a6f8b9a4]{position:absolute;z-index:997;color:#333;-webkit-box-shadow:0 0 %?30?% rgba(0,0,0,.1);box-shadow:0 0 %?30?% rgba(0,0,0,.1)}.uni-popup-middle[data-v-a6f8b9a4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:86%;-webkit-border-radius:%?10?%;border-radius:%?10?%;\n\t/* justify-content: center; */top:50vh;left:50vw;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.uni-popup-top[data-v-a6f8b9a4]{top:0;left:0;width:100%;height:%?100?%;line-height:%?100?%;text-align:center}.uni-popup-bottom[data-v-a6f8b9a4]{left:0;bottom:-50px;width:100%;min-height:%?100?%;line-height:%?100?%;text-align:center}.uni-popup-bottoms[data-v-a6f8b9a4]{left:0;bottom:0;width:100%;height:%?80?%;line-height:%?80?%}.uni-popup-bottom1[data-v-a6f8b9a4]{left:0;bottom:0;width:100%;height:%?80?%;line-height:%?80?%;text-align:center;\n\t/* margin-top:30upx; */border-top:1px solid #d0d0d0}.cannel[data-v-a6f8b9a4]{background-color:#f2f2f2;font-size:%?28?%;height:%?80?%;line-height:%?80?%;color:#333;-webkit-border-bottom-left-radius:%?10?%;border-bottom-left-radius:%?10?%;border-right:1px solid #d0d0d0}.comfirms[data-v-a6f8b9a4]{background-color:#f2f2f2;color:#40affe;font-size:%?28?%;height:%?80?%;line-height:%?80?%;-webkit-border-bottom-right-radius:%?10?%;border-bottom-right-radius:%?10?%}.title[data-v-a6f8b9a4]{color:#333;line-height:%?100?%;font-size:16px}",""]),e.exports=t},f57e:function(e,t,i){var a=i("f554");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("1120e44c",a,!0,{sourceMap:!1,shadowMode:!1})}}]);