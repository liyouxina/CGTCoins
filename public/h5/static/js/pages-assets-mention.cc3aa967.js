(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-assets-mention"],{"0c4d":function(e,t,n){var s=n("24fb");t=s(!1),t.push([e.i,".active[data-v-49b4db73]{color:#007aff;border-color:#007aff}",""]),e.exports=t},3475:function(e,t,n){"use strict";var s=n("d5b9"),a=n.n(s);a.a},"525f":function(e,t,n){"use strict";var s;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return s}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{class:{light:"light"==e.theme}},[n("v-uni-view",{staticClass:"ptb20 bgPart plr20"},[n("v-uni-view",{staticClass:"ft18"},[e._v(e._s(e.currencyName||"--")+" "+e._s(e.$t("assets.mention")))]),n("v-uni-view",{staticClass:"mt10"},[e._v(e._s(e.$t("trade.use"))+" "+e._s(e.balance)+" "+e._s(e.currencyName||"--"))])],1),e.chargeType.length>0?n("v-uni-view",{staticClass:"mt10 plr20"},[n("v-uni-view",{},[e._v(e._s(e.$t("bind.liantype")))]),n("v-uni-view",{staticClass:"flex mt10"},e._l(e.chargeType,(function(t,s){return n("v-uni-view",{key:s,staticClass:"mr10 ptb5 plr10 bd_input radius4",class:e.name==t.name?"active":"",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.selectCharge(t)}}},[e._v(e._s(t.type))])})),1)],1):e._e(),n("v-uni-view",{staticClass:"plr20"},[n("v-uni-view",{staticClass:"mb20 mt20"},[n("v-uni-view",{},[e._v(e._s(e.$t("assets.mentionaddr")))]),n("v-uni-input",{staticClass:"bdb1f h40 w100 ",attrs:{type:"text",placeholder:e.$t("bind.p_addr")},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1),n("v-uni-view",{staticClass:"mb20"},[n("v-uni-view",{},[e._v(e._s(e.$t("trade.num")))]),n("v-uni-view",{staticClass:"flex alcenter between bdb1f"},[n("v-uni-input",{staticClass:" h40 flex1",attrs:{type:"number",placeholder:e.$t("assets.minnum")+(e.coinInfo.min_number||"0.00")},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.numberChange.apply(void 0,arguments)}},model:{value:e.number,callback:function(t){e.number=t},expression:"number"}}),n("v-uni-view",{staticClass:"flex alcenter"},[n("v-uni-text",{staticClass:"blue ft14 pr10 bdr_white50"},[e._v(e._s(e.currencyName||"--"))]),n("v-uni-view",{staticClass:"pl10",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.all.apply(void 0,arguments)}}},[e._v(e._s(e.$t("trade.all")))])],1)],1)],1),e.showMemo?n("v-uni-view",{staticClass:"mb20"},[n("v-uni-view",{},[e._v("memo")]),n("v-uni-input",{staticClass:"bdb1f h40 w100",attrs:{type:"text",placeholder:"请输入memo"},model:{value:e.memoText,callback:function(t){e.memoText=t},expression:"memoText"}})],1):e._e(),n("v-uni-view",{staticClass:"mb20"},[n("v-uni-view",{},[e._v(e._s(e.$t("login.s_dealpwd")))]),n("v-uni-input",{staticClass:"bdb1f h40 w100",attrs:{type:"text",password:"",placeholder:e.$t("login.e_pdeal")},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),n("v-uni-view",{staticClass:"mb20 bdb1f ptb10 flex alcenter between"},[n("v-uni-view",{},[e._v(e._s(e.$t("assets.recivenum")))]),n("v-uni-view",{},[e._v(e._s(e.reciveNumber)+" "+e._s(e.currencyName||"--"))])],1),n("v-uni-view",{staticClass:"mb20"},[e._v(e._s(e.$t("trade.fee"))+"："+e._s(e.coinInfo.rate||"--")+"%")]),n("v-uni-view",{staticClass:"mb20"},[e._v(e._s(e.$t("zdy.a0"))+e._s(e.$t("trade.fee"))+"："+e._s(e._f("toFixeds")(e.number*e.coinInfo.rate/100))+e._s(e.currencyName||"--"))]),n("v-uni-view",{staticClass:"mt40 bgBlue radius4 ptb10 white ft14 tc mb10",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.mention.apply(void 0,arguments)}}},[e._v(e._s(e.$t("assets.mention")))])],1)],1)},i=[]},a402:function(e,t,n){"use strict";n.r(t);var s=n("525f"),a=n("e974");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("3475");var r,o=n("f0c5"),c=Object(o["a"])(a["default"],s["b"],s["c"],!1,null,"49b4db73",null,!1,s["a"],r);t["default"]=c.exports},aa62:function(e,t,n){"use strict";var s=n("4ea4");n("4160"),n("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n("5530")),i=n("2f62"),r={data:function(){return{password:"",currency:"",coinInfo:{},address:"",name:"",number:"",reciveNumber:"0.0",chargeType:[],contractAddress:"",userId:"",currencyName:"",currencyType:"",balance:"",labelText:"",walletData:[],showMemo:!1,memoText:""}},onLoad:function(e){uni.setNavigationBarTitle({title:this.$t("assets").mention}),this.currency=e.currency,this.name=e.name,this.getCoinInfo()},computed:(0,a.default)({},(0,i.mapState)(["theme"])),onPullDownRefresh:function(){},onShow:function(){this.$utils.setThemeTop(this.theme)},methods:{getCoinInfo:function(){var e=this;this.$utils.initDataToken({url:"wallet/get_info",type:"POST",data:{currency:this.currency}},(function(t){if(uni.stopPullDownRefresh(),e.currencyName=t.name,e.balance=t.change_balance,2==t.make_wallet?e.showMemo=!0:e.showMemo=!1,1==t.multi_protocol){e.chargeType=t.type_data,e.contractAddress=t.type_data[0].contract_address,e.name=t.type_data[0].name,e.coinInfo=t.type_data[0],e.currencyType=t.type_data[0].type;t.type_data[0].id}else e.name=t.name,e.coinInfo=t;e.getUserInfo()}))},getUserInfo:function(){var e=this;this.$utils.initDataToken({url:"user/info"},(function(t){e.userId=t.id}))},getAddress:function(e){var t=this;this.$utils.getAddressOnline({url:"walletMiddle/GetDrawAddress",data:{user_id:e,coin_name:this.name,contract_address:this.coinInfo.contract_address}},(function(e){uni.stopPullDownRefresh(),console.log(e),0==e.code?t.address=e.data.address:t.$utils.showLayer(e.errorinfo)}))},all:function(){this.number=this.balance,this.reciveNumber=this.balance*(1-this.coinInfo.rate/100)},numberChange:function(e){this.reciveNumber=e.target.value*(1-this.coinInfo.rate/100)},selectCharge:function(e){var t=this;t.contractAddress=e.contract_address,t.name=e.name,t.coinInfo=e,t.currencyType=e.type,t.address="",t.memoText="";var n=e.id;t.walletData.length>0&&t.walletData.forEach((function(e){n==e.currency&&(t.labelText=e.label)}))},copyLabel:function(){},mention:function(){var e=this;return this.address?this.number?this.password?this.password.length<6?this.$utils.showLayer(this.$t("login.e_pdealerr")):void this.$utils.initDataToken({url:"wallet/out",type:"POST",data:{currency:this.currency,number:this.number,rate:this.coinInfo.rate,address:this.address,pay_password:this.password,type:this.currencyType,memo:this.memoText}},(function(t,n){console.log(t),e.$utils.showLayer(t),setTimeout((function(){window.location.reload()}),1500)})):this.$utils.showLayer(this.$t("login.e_pdeal")):this.$utils.showLayer(this.$t("assets.p_minnum")):this.$utils.showLayer(this.$t("assets.p_addr"))}}};t.default=r},d5b9:function(e,t,n){var s=n("0c4d");"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var a=n("4f06").default;a("02ba6dd4",s,!0,{sourceMap:!1,shadowMode:!1})},e974:function(e,t,n){"use strict";n.r(t);var s=n("aa62"),a=n.n(s);for(var i in s)"default"!==i&&function(e){n.d(t,e,(function(){return s[e]}))}(i);t["default"]=a.a}}]);