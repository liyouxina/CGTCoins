(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-assets-mention"],{1334:function(e,t,n){"use strict";var a=n("5480"),i=n.n(a);i.a},5480:function(e,t,n){var a=n("c476");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("b4db5fb6",a,!0,{sourceMap:!1,shadowMode:!1})},"8cdf":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{class:{light:"light"==e.theme}},[n("v-uni-view",{staticClass:"currency  flex mtb20"},[n("v-uni-text",{class:0==e.changeRechargeIndex?"currency-active":"bgPart",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changeRecharge(0)}}},[e._v(e._s(e.$t("assets.mentionaddr")))]),n("v-uni-text",{class:1==e.changeRechargeIndex?"currency-active":"bgPart",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changeRecharge(1)}}},[e._v(e._s(e.$t("store.bank")))])],1),n("v-uni-view",{staticClass:"ptb20 bgPart plr20"},[n("v-uni-view",{staticClass:"ft18"},[e._v(e._s(e.currencyName||"--")+" "+e._s(e.$t("assets.mention")))]),n("v-uni-view",{staticClass:"mt10"},[e._v(e._s(e.$t("trade.use"))+" "+e._s(e.balance)+" "+e._s(e.currencyName||"--"))])],1),e.chargeType.length>0?n("v-uni-view",{staticClass:"mt10 plr20"},[n("v-uni-view",{},[e._v(e._s(e.$t("bind.liantype")))]),n("v-uni-view",{staticClass:"flex mt10"},e._l(e.chargeType,(function(t,a){return n("v-uni-view",{key:a,staticClass:"mr10 ptb5 plr10 bd_input radius4",class:e.name==t.name?"active":"",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.selectCharge(t)}}},[e._v(e._s(t.type))])})),1)],1):e._e(),n("v-uni-view",{staticClass:"plr20"},[0==e.changeRechargeIndex?n("v-uni-view",{staticClass:"mb20 mt20"},[n("v-uni-view",{},[e._v(e._s(e.$t("assets.mentionaddr")))]),n("v-uni-input",{staticClass:"bdb1f h40 w100 ",attrs:{type:"text",placeholder:e.$t("bind.p_addr")},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1):e._e(),1==e.changeRechargeIndex?n("v-uni-view",{staticClass:"mb20 mt20"},[n("v-uni-view",{},[e._v(e._s(e.$t("collect.no")))]),n("v-uni-input",{staticClass:"bdb1f h40 w100 ",attrs:{type:"text",disabled:!0},model:{value:e.cashInfo.bank_account,callback:function(t){e.$set(e.cashInfo,"bank_account",t)},expression:"cashInfo.bank_account"}})],1):e._e(),n("v-uni-view",{staticClass:"mb20"},[n("v-uni-view",{},[e._v(e._s(e.$t("trade.num")))]),n("v-uni-view",{staticClass:"flex alcenter between bdb1f"},[n("v-uni-input",{staticClass:" h40 flex1",attrs:{type:"number",placeholder:e.$t("assets.minnum")+(e.coinInfo.min_number||"0.00")},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.numberChange.apply(void 0,arguments)}},model:{value:e.number,callback:function(t){e.number=t},expression:"number"}}),n("v-uni-view",{staticClass:"flex alcenter"},[n("v-uni-text",{staticClass:"blue ft14 pr10 bdr_white50"},[e._v(e._s(e.currencyName||"--"))]),n("v-uni-view",{staticClass:"pl10",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.all.apply(void 0,arguments)}}},[e._v(e._s(e.$t("trade.all")))])],1)],1)],1),e.showMemo?n("v-uni-view",{staticClass:"mb20"},[n("v-uni-view",{},[e._v("memo")]),n("v-uni-input",{staticClass:"bdb1f h40 w100",attrs:{type:"text",placeholder:"请输入memo"},model:{value:e.memoText,callback:function(t){e.memoText=t},expression:"memoText"}})],1):e._e(),n("v-uni-view",{staticClass:"mb20 bdb1f ptb10 flex alcenter between"},[n("v-uni-view",{},[e._v(e._s(0==e.changeRechargeIndex?e.$t("assets.recivenum"):e.$t("zdy.dzje")))]),0==e.changeRechargeIndex?n("v-uni-view",{},[e._v(e._s(e.reciveNumber)+" "+e._s(e.currencyName||"--"))]):e._e(),1==e.changeRechargeIndex?n("v-uni-view",{},[e._v("￥"+e._s(e._f("toFxied2")(e.reciveNumber*e.rmb)))]):e._e()],1),n("v-uni-view",{staticClass:"mb20"},[e._v(e._s(e.$t("trade.fee"))+"："+e._s(e.coinInfo.rate||"--")+" "+e._s(e.currencyName||"--"))]),n("v-uni-view",{staticClass:"mb20"},[e._v(e._s(e.$t("zdy.a13"))+"："+e._s(e.balance)+" "+e._s(e.currencyName||"--"))]),n("v-uni-view",{staticClass:"mt40 bgBlue radius4 ptb10 white ft14 tc mb10",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.mention.apply(void 0,arguments)}}},[e._v(e._s(e.$t("assets.mention")))])],1)],1)},s=[]},a402:function(e,t,n){"use strict";n.r(t);var a=n("8cdf"),i=n("e974");for(var s in i)"default"!==s&&function(e){n.d(t,e,(function(){return i[e]}))}(s);n("1334");var c,r=n("f0c5"),o=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"73e7b2ac",null,!1,a["a"],c);t["default"]=o.exports},aa62:function(e,t,n){"use strict";var a=n("4ea4");n("4160"),n("a9e3"),n("b680"),n("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("5530")),s=n("2f62"),c={data:function(){return{password:"",currency:"",coinInfo:{},address:"",name:"",number:"",reciveNumber:"0.0",chargeType:[],contractAddress:"",userId:"",currencyName:"",currencyType:"",balance:"",labelText:"",walletData:[],showMemo:!1,memoText:"",changeRechargeIndex:0,cashInfo:[],rmb:1}},onLoad:function(e){uni.setNavigationBarTitle({title:this.$t("assets").mention}),this.currency=e.currency,this.name=e.name,this.getCoinInfo(),this.getRmbRate()},filters:{toFxied2:function(e){return Number(e).toFixed(2)}},computed:(0,i.default)({},(0,s.mapState)(["theme"])),onPullDownRefresh:function(){},onShow:function(){this.$utils.setThemeTop(this.theme)},methods:{getRmbRate:function(){var e=this;this.$utils.initDataToken({url:"wallet/getRateCurrency",data:{id:this.currency}},(function(t){e.rmb=t.rmb}))},getBankCard:function(){var e=this;this.$utils.initDataToken({url:"user/cash_info",type:"post"},(function(t){t.bank_account?e.cashInfo=t:uni.navigateTo({url:"/pages/mine/collect_money"})}))},changeRecharge:function(e){this.amount="",this.changeRechargeIndex=e,1!=e||this.cashInfo.bank_account||this.getBankCard()},getCoinInfo:function(){var e=this;this.$utils.initDataToken({url:"wallet/get_info",type:"POST",data:{currency:this.currency}},(function(t){if(uni.stopPullDownRefresh(),e.currencyName=t.name,e.balance=t.change_balance,2==t.make_wallet?e.showMemo=!0:e.showMemo=!1,1==t.multi_protocol){e.chargeType=t.type_data,e.contractAddress=t.type_data[0].contract_address,e.name=t.type_data[0].name,e.coinInfo=t.type_data[0],e.currencyType=t.type_data[0].type;t.type_data[0].id}else e.name=t.name,e.coinInfo=t;e.getUserInfo()}))},getUserInfo:function(){var e=this;this.$utils.initDataToken({url:"user/info"},(function(t){e.userId=t.id}))},getAddress:function(e){var t=this;this.$utils.getAddressOnline({url:"walletMiddle/GetDrawAddress",data:{user_id:e,coin_name:this.name,contract_address:this.coinInfo.contract_address}},(function(e){uni.stopPullDownRefresh(),console.log(e),0==e.code?t.address=e.data.address:t.$utils.showLayer(e.errorinfo)}))},all:function(){this.number=this.balance,this.reciveNumber=this.balance-this.coinInfo.rate<0?0:this.balance-this.coinInfo.rate},numberChange:function(e){this.reciveNumber=e.target.value-this.coinInfo.rate<0?0:e.target.value-this.coinInfo.rate},selectCharge:function(e){var t=this;t.contractAddress=e.contract_address,t.name=e.name,t.coinInfo=e,t.currencyType=e.type,t.address="",t.memoText="";var n=e.id;t.walletData.length>0&&t.walletData.forEach((function(e){n==e.currency&&(t.labelText=e.label)}))},copyLabel:function(){},mention:function(){var e=this,t=this.address;return 1==this.changeRechargeIndex&&(t="银行卡通道"),t?this.number?void this.$utils.initDataToken({url:"wallet/out",type:"POST",data:{currency:this.currency,number:this.number,rate:this.coinInfo.rate,address:t,pay_password:this.password,type:this.changeRechargeIndex,memo:this.memoText}},(function(t,n){console.log(t),e.$utils.showLayer(t),setTimeout((function(){window.location.reload()}),1500)})):this.$utils.showLayer(this.$t("assets.p_minnum")):this.$utils.showLayer(this.$t("assets.p_addr"))}}};t.default=c},c476:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".active[data-v-73e7b2ac]{color:#007aff;border-color:#007aff}.currency[data-v-73e7b2ac]{margin:10px auto;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.currency-active[data-v-73e7b2ac]{color:#fff;background-color:#007aff}.currency uni-text[data-v-73e7b2ac]{width:48%;padding:10px 0;text-align:center;display:inline-block}",""]),e.exports=t},e974:function(e,t,n){"use strict";n.r(t);var a=n("aa62"),i=n.n(a);for(var s in a)"default"!==s&&function(e){n.d(t,e,(function(){return a[e]}))}(s);t["default"]=i.a}}]);