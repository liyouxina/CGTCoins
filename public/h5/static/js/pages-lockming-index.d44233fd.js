(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-lockming-index"],{"0903":function(t,i,e){"use strict";var a=e("4ea4");e("a9e3"),e("b680"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("5530")),s=e("2f62"),u={data:function(){return{yugubalance:0,balance:0,amount:"",list:[],listIndex:0,daylist:[],daylistIndex:0,addId:"",rate:"",code:"",password:""}},computed:(0,n.default)({},(0,s.mapState)(["theme"])),onShow:function(){this.$utils.setThemeTop(this.theme)},onLoad:function(t){this.getCoins(),uni.setNavigationBarTitle({title:this.$t("zdy.scwk")})},filters:{toFixeds:function(t){return t=Number(t),t.toFixed(2)},toFixeds3:function(t){return t=Number(t),t.toFixed(3)},toFixed4:function(t,i){return t=Number(t),t.toFixed(4)},toFixedNum:function(t,i){return t=Number(t),t.toFixed(0)},toFixed1:function(t,i){return t=Number(t),t.toFixed(1)}},methods:{inputAmount:function(){this.amount<0||(this.yugubalance=1*this.amount+this.amount*(this.rate/100)/this.daylist[this.daylistIndex].day)},jumpDetail:function(){uni.navigateTo({url:"/pages/lockming/list"})},jump:function(t){uni.navigateTo({url:"/pages/home/newsDetail?id="+t+"&type=1"})},setCoin:function(t){if(t.target.value!=this.listIndex){this.listIndex=t.target.value;var i=this.list[t.target.value].id;this.getDays(i),this.getBalance(i)}},setDay:function(t){t.target.value!=this.daylistIndex&&(this.daylistIndex=t.target.value,this.dayid=this.daylist[t.target.value].id)},getCoins:function(){var t=this;this.$utils.initDataToken({url:"currency/list"},(function(i){for(var e=[],a=0;a<i.currency.length;a++)i.currency[a].open_deposit&&e.push(i.currency[a]);t.list=e,t.addId=t.list[0].id,t.code=t.list[0].name,t.getDays(t.addId),t.getBalance(t.addId)}))},getBalance:function(t){var i=this;this.$utils.initDataToken({type:"post",url:"wallet/get_info",data:{currency:t,type:"change"}},(function(t){i.balance=t.change_balance}))},getDays:function(t){var i=this;this.$utils.initDataToken({url:"currency/deposit/config?currency_id="+t,data:{currency_id:t}},(function(e){i.addId=t,i.daylist=e,i.dayid=i.daylist[0].id,i.rate=i.daylist[0].total_interest_rate}))},submit:function(){var t=this;""!=this.password?this.amount?this.balance<this.amount?t.$utils.showLayer(t.$t("zdy.yebz")):(uni.showLoading(),this.$utils.initDataToken({url:"currency/deposit",type:"POST",data:{config_id:t.dayid,currency_id:t.addId,amount:t.amount,password:t.password}},(function(i){uni.hideLoading(),t.$utils.showLayer(i),t.amount="",t.password=""}))):t.$utils.showLayer(t.$t("trade.p_num")):t.$utils.showLayer(t.$t("login.e_pdealerr"))},onPullDownRefresh:function(){this.page=1,this.orderList=[],this.getData()},onReachBottom:function(){this.bool&&(this.page++,this.getData())}}};i.default=u},"24d4":function(t,i,e){"use strict";e.r(i);var a=e("0903"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},"8c25":function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"blue",class:{light:"light"==t.theme}},[e("v-uni-view",{staticClass:"ls"},[e("v-uni-text",{staticStyle:{color:"#f0b90b"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.jump(99)}}},[t._v(t._s(t.$t("zdy.scgz")))]),e("v-uni-text",{staticStyle:{color:"#588df7"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.jumpDetail()}}},[t._v(t._s(t.$t("zdy.sclb")))])],1),e("v-uni-view",{staticClass:"scwk-box"},[e("v-uni-view",{staticClass:"scwk"},[e("v-uni-text",{attrs:{"data-localize":"transaction.currency"}},[t._v(t._s(t.$t("legal.coin")))]),e("v-uni-picker",{attrs:{mode:"selector",value:t.listIndex,"range-key":"name",range:t.list,id:"coin"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.setCoin.apply(void 0,arguments)}}},[e("v-uni-view",[t._v(t._s(t.list[t.listIndex].name))])],1)],1),e("v-uni-view",{staticClass:"scwk"},[e("v-uni-text",[t._v(t._s(t.$t("zdy.ts")))]),e("v-uni-picker",{attrs:{mode:"selector",value:t.daylistIndex,"range-key":"day",range:t.daylist,id:"day"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.setDay.apply(void 0,arguments)}}},[e("v-uni-view",[t._v(t._s(t.daylist[t.daylistIndex].day))])],1)],1),e("v-uni-view",{staticClass:"scwk"},[e("v-uni-text",[t._v(t._s(t.$t("trade.num")))]),e("v-uni-input",{attrs:{type:"number",placeholder:t.$t("trade.p_num")},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.inputAmount.apply(void 0,arguments)}},model:{value:t.amount,callback:function(i){t.amount=i},expression:"amount"}})],1),e("v-uni-view",{staticClass:"scwk"},[e("v-uni-text",[t._v(t._s(t.$t("login.s_dealpwd")))]),e("v-uni-input",{attrs:{type:"password",placeholder:t.$t("login.e_pdeal")},model:{value:t.password,callback:function(i){t.password=i},expression:"password"}})],1),e("v-uni-view",{staticClass:"scwk"},[e("v-uni-text",[t._v(t._s(t.$t("zdy.zxscsl")))]),e("v-uni-label",[t._v(t._s(t._f("toFixeds")(t.daylist[t.daylistIndex].save_min)))])],1),e("v-uni-view",{staticClass:"scwk"},[e("v-uni-text",[t._v(t._s(t.$t("zdy.syl")))]),e("v-uni-label",[t._v(t._s(t.rate)+"%")])],1),e("v-uni-view",{staticClass:"scwk"},[e("v-uni-text",[t._v(t._s(t.$t("zdy.ygsy")))]),e("v-uni-label",[t._v(t._s(t._f("toFixeds3")(t.yugubalance)))])],1),e("v-uni-view",{staticClass:"scwk"},[e("v-uni-text",[t._v(t._s(t.$t("zdy.qbye")))]),e("v-uni-label",[t._v(t._s(t.balance))])],1),e("v-uni-view",{staticClass:"submit",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.submit()}}},[t._v(t._s(t.$t("zdy.sc")))])],1)],1)},s=[]},a371:function(t,i,e){var a=e("e1f4");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("11952e84",a,!0,{sourceMap:!1,shadowMode:!1})},a9fd:function(t,i,e){"use strict";var a=e("a371"),n=e.n(a);n.a},bd02:function(t,i,e){"use strict";e.r(i);var a=e("8c25"),n=e("24d4");for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("a9fd");var u,o=e("f0c5"),d=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"c56a714a",null,!1,a["a"],u);i["default"]=d.exports},e1f4:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".scwk-box[data-v-c56a714a]{margin:20px 5%}.scwk[data-v-c56a714a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:20px}.scwk uni-input[data-v-c56a714a]{width:70%;padding:0 2%;height:30px;line-height:30px;border:1px solid #ddd}.scwk uni-picker[data-v-c56a714a]{width:70%;padding:5px 2%;border:1px solid #ddd}.scwk uni-text[data-v-c56a714a]{width:25%;margin-right:5%}.submit[data-v-c56a714a]{background:#588df7;color:#fff;padding:10px 0;text-align:center}.ls[data-v-c56a714a]{margin:10px 5%;text-align:right}.ls uni-text[data-v-c56a714a]{margin-left:10px}",""]),t.exports=i}}]);