(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-collect_money"],{"09b2":function(t,a,e){"use strict";var c=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=c(e("5530")),l=e("d9f3"),n=e("2f62"),s={data:function(){return{name:"",mobile:"",kaihu:"",card_no:"",wechat_account:"",alipay_account:"",wechat_code:"/static/image/addImg.png",alipay_code:"/static/image/addImg.png",weichat_name:""}},onLoad:function(){this.getInfo(),uni.setNavigationBarTitle({title:this.$t("collect").method})},computed:(0,i.default)({},(0,n.mapState)(["theme"])),onShow:function(){this.$utils.setThemeTop(this.theme)},methods:{getInfo:function(){var t=this;this.$utils.initDataToken({url:"user/cash_info",type:"POST",data:{}},(function(a,e){t.name=a.real_name,t.kaihu=a.bank_name,t.card_no=a.bank_account,t.wechat_account=a.wechat_account,t.weichat_name=a.wechat_nickname,t.alipay_account=a.alipay_account,a.wechat_collect&&(t.wechat_code=a.wechat_collect),a.alipay_collect&&(t.alipay_code=a.alipay_collect)}))},uploadImg:function(t){console.log(l.domain);var a=this;uni.chooseImage({count:1,sizeType:["compressed"],success:function(e){var c=e.tempFilePaths;uni.uploadFile({url:"/api/upload",filePath:c[0],name:"file",formData:{user:"test"},success:function(e){console.log(typeof e.data);var c=JSON.parse(e.data);"ok"==c.type&&("wechat"==t?a.wechat_code=c.message:a.alipay_code=c.message)}})}})},confirm:function(){var t=this;return this.name?this.kaihu?this.card_no?this.alipay_account?this.weichat_name?this.wechat_account?"/static/image/addImg.png"==this.wechat_code?this.$utils.showLayer(this.$t("collect.up_wechatCode")):"/static/image/addImg.png"==this.alipay_code?this.$utils.showLayer(this.$t("collect.up_alipayCode")):void this.$utils.initDataToken({url:"user/cash_save",type:"POST",data:{real_name:this.name,bank_name:this.kaihu,bank_account:this.card_no,alipay_account:this.alipay_account,wechat_nickname:this.weichat_name,wechat_account:this.wechat_account,wechat_collect:this.wechat_code,alipay_collect:this.alipay_code}},(function(a,e){t.$utils.showLayer(e),setTimeout((function(){uni.navigateBack({delta:1})}),1500)})):this.$utils.showLayer(this.$t("collect.p_wechat")):this.$utils.showLayer(this.$t("collect.p_nick")):this.$utils.showLayer(this.$t("collect.p_alipay")):this.$utils.showLayer(this.$t("collect.p_no")):this.$utils.showLayer(this.$t("collect.p_bank")):this.$utils.showLayer(this.$t("collect.p_name"))}}};a.default=s},"3f9a":function(t,a,e){"use strict";var c;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return l})),e.d(a,"a",(function(){return c}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"plr20 ",class:{light:"light"==t.theme}},[e("v-uni-view",{staticClass:"flex bgwhite alcenter radius4 pl10 mt10 bdb_blue3"},[e("v-uni-text",{staticClass:"tr"},[t._v(t._s(t.$t("collect.name"))+"：")]),e("v-uni-input",{staticClass:"h40 lh40 flex1 pr10 tr ",attrs:{type:"text",placeholder:t.$t("collect.p_name")},model:{value:t.name,callback:function(a){t.name=a},expression:"name"}})],1),e("v-uni-view",{staticClass:"flex bgwhite alcenter radius4 pl10 mt10 bdb_blue3"},[e("v-uni-text",{staticClass:"tr"},[t._v(t._s(t.$t("collect.bank"))+"：")]),e("v-uni-input",{staticClass:"h40 lh40 flex1 pr10 tr ",attrs:{type:"text",placeholder:t.$t("collect.p_bank")},model:{value:t.kaihu,callback:function(a){t.kaihu=a},expression:"kaihu"}})],1),e("v-uni-view",{staticClass:"flex bgwhite alcenter radius4 pl10 mt10 bdb_blue3"},[e("v-uni-text",{staticClass:"tr"},[t._v(t._s(t.$t("collect.no"))+"：")]),e("v-uni-input",{staticClass:"h40 lh40 flex1 pr10 tr ",attrs:{type:"text",placeholder:t.$t("collect.p_no")},model:{value:t.card_no,callback:function(a){t.card_no=a},expression:"card_no"}})],1),e("v-uni-view",{staticClass:"flex bgwhite alcenter radius4 pl10 mt10 bdb_blue3"},[e("v-uni-text",{staticClass:"tr"},[t._v(t._s(t.$t("collect.alipay"))+"：")]),e("v-uni-input",{staticClass:"h40 lh40 flex1 pr10 tr ",attrs:{type:"text",placeholder:t.$t("collect.p_alipay")},model:{value:t.alipay_account,callback:function(a){t.alipay_account=a},expression:"alipay_account"}})],1),e("v-uni-view",{staticClass:"flex bgwhite alcenter radius4 pl10 mt10 bdb_blue3"},[e("v-uni-text",{staticClass:"tr"},[t._v(t._s(t.$t("collect.nick"))+"：")]),e("v-uni-input",{staticClass:"h40 lh40 flex1 pr10 tr ",attrs:{type:"text",placeholder:t.$t("collect.p_nick")},model:{value:t.weichat_name,callback:function(a){t.weichat_name=a},expression:"weichat_name"}})],1),e("v-uni-view",{staticClass:"flex bgwhite alcenter radius4 pl10 mt10 bdb_blue3"},[e("v-uni-text",{staticClass:"tr"},[t._v(t._s(t.$t("collect.wechat"))+"：")]),e("v-uni-input",{staticClass:"h40 lh40 pr10 tr flex1",attrs:{type:"text",placeholder:t.$t("collect.p_wechat")},model:{value:t.wechat_account,callback:function(a){t.wechat_account=a},expression:"wechat_account"}})],1),e("v-uni-view",{staticClass:"flex mt20"},[e("v-uni-view",{staticClass:"flex1 "},[e("v-uni-view",{staticClass:"mb10"},[t._v(t._s(t.$t("collect.wechatCode")))]),e("v-uni-image",{staticClass:"wt100 h100",attrs:{src:t.wechat_code},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.uploadImg("wechat")}}})],1),e("v-uni-view",{staticClass:"flex1"},[e("v-uni-view",{staticClass:"mb10"},[t._v(t._s(t.$t("collect.alipayCode")))]),e("v-uni-image",{staticClass:"wt100 h100",attrs:{src:t.alipay_code},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.uploadImg("alipay")}}})],1)],1),e("v-uni-view",{staticClass:"mt30 h40 lh40 tc white bgDark radius28 ft14",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.confirm.apply(void 0,arguments)}}},[t._v(t._s(t.$t("login.e_confrim")))])],1)},l=[]},"9f03":function(t,a,e){"use strict";e.r(a);var c=e("09b2"),i=e.n(c);for(var l in c)"default"!==l&&function(t){e.d(a,t,(function(){return c[t]}))}(l);a["default"]=i.a},fb86:function(t,a,e){"use strict";e.r(a);var c=e("3f9a"),i=e("9f03");for(var l in i)"default"!==l&&function(t){e.d(a,t,(function(){return i[t]}))}(l);var n,s=e("f0c5"),o=Object(s["a"])(i["default"],c["b"],c["c"],!1,null,"b7578b2c",null,!1,c["a"],n);a["default"]=o.exports}}]);