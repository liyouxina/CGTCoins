(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-resetLegalPwd"],{"24d4":function(t,e,s){"use strict";var i=s("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(s("5530")),n=s("2f62"),o={data:function(){return{user_string:"",password:"",re_password:"",code:"",area_code:"",isAgree:!1,invite_code:"",verifyPwd1:!1,verifyPwd2:!1,lang:"",disable:!1,load:!1,codeText:this.$t("login").r_send,accountNumber:""}},onLoad:function(t){this.getUserInfo(),this.user_string=t.user_string,this.code=t.code,this.is_mobile=this.is_mobile,this.area_code=this.areaCode,this.lang=uni.getStorageSync("lang"),uni.setNavigationBarTitle({title:this.$t("login").e_dealPwd})},computed:(0,a.default)({},(0,n.mapState)(["theme"])),onShow:function(){this.$utils.setThemeTop(this.theme)},methods:{getUserInfo:function(){var t=this;this.$utils.initDataToken({url:"user/info",data:{},type:"get"},(function(e,s){t.accountNumber=e.account_number,t.area_code=e.area_code,t.area_code_id=e.area_code_id}))},send:function(){var t=this,e=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,s="sms_send";e.test(this.accountNumber)&&(s="sms_mail"),this.$utils.initDataToken({url:s,data:{user_string:this.accountNumber,type:"forget",lang:this.lang,area_code_id:this.area_code_id,area_code:this.area_code},type:"post"},(function(e,s){t.disable=!0;var i=10,a=setInterval((function(){i--,i<10&&(i="0"+i),t.codeText=i+"s",i<=0&&(clearInterval(a),t.disable=!1,t.load=!1,t.codeText=t.$t("login").r_send)}),1e3)}))},passwordInput1:function(t){t.target.value.length<6?this.verifyPwd1=!0:this.verifyPwd1=!1},passwordInput2:function(t){t.target.value!=this.password?this.verifyPwd2=!0:this.verifyPwd2=!1},tapChecked:function(){this.isAgree=!this.isAgree},register:function(){var t=this,e=this;if(!this.password)return this.$utils.showLayer(this.$t("login").e_pdeal);if(this.password.length<6)return this.$utils.showLayer(this.$t("login").p_simple);if(this.password!=this.re_password)return this.$utils.showLayer(this.$t("login").p_inputagain);if(this.code){var s={password:this.password,code:this.code,re_password:this.re_password};this.$utils.initDataToken({url:"safe/update_password",data:s,type:"POST"},(function(s,i){t.password="",t.code="",t.re_password="",e.$utils.showLayer(i),setTimeout((function(){uni.navigateBack({delta:1})}),1e3)}))}else this.$utils.showLayer(this.$t("login").p_vcode)}}};e.default=o},"5cb3":function(t,e,s){"use strict";s.r(e);var i=s("24d4"),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,(function(){return i[t]}))}(n);e["default"]=a.a},ba78:function(t,e,s){"use strict";s.r(e);var i=s("d722"),a=s("5cb3");for(var n in a)"default"!==n&&function(t){s.d(e,t,(function(){return a[t]}))}(n);var o,r=s("f0c5"),d=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"cf697ed8",null,!1,i["a"],o);e["default"]=d.exports},d722:function(t,e,s){"use strict";var i;s.d(e,"b",(function(){return a})),s.d(e,"c",(function(){return n})),s.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",{staticClass:"pt20 plr20",class:{light:"light"==t.theme}},[s("v-uni-view",{staticClass:"mb10 mt30"},[s("v-uni-view",{staticClass:"flex bgwhite alcenter bdb_myblue "},[s("v-uni-input",{staticClass:"h40 lh40 flex1",attrs:{type:"text",password:"",placeholder:t.$t("login").e_pdeal},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.passwordInput1.apply(void 0,arguments)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),s("v-uni-image",{staticClass:"wt15 h15 ml10",attrs:{src:"/static/image/password.png"}})],1),t.verifyPwd1?s("v-uni-view",{staticClass:"ft10 pt5 chengse"},[t._v(t._s(t.$t("login").p_len))]):t._e()],1),s("v-uni-view",{staticClass:"mb10"},[s("v-uni-view",{staticClass:"flex bgwhite alcenter bdb_myblue "},[s("v-uni-input",{staticClass:"h40 lh40 flex1",attrs:{type:"text",password:"",placeholder:t.$t("login").e_pdealConfrim},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.passwordInput2.apply(void 0,arguments)}},model:{value:t.re_password,callback:function(e){t.re_password=e},expression:"re_password"}}),s("v-uni-image",{staticClass:"wt15 h15 ml10",attrs:{src:"/static/image/password.png"}})],1),t.verifyPwd2?s("v-uni-view",{staticClass:"ft10 pt5 chengse"},[t._v(t._s(t.$t("login").p_notsame))]):t._e()],1),s("v-uni-view",{staticClass:"flex bgwhite alcenter bdb_myblue "},[s("v-uni-input",{staticClass:"h40 lh40 flex1",attrs:{type:"text",placeholder:t.$t("login").p_vcode},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),s("v-uni-view",[s("v-uni-button",{attrs:{size:"mini",type:"primary",disabled:t.disable,loading:t.load},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.send.apply(void 0,arguments)}}},[t._v(t._s(t.codeText))])],1)],1),s("v-uni-view",{staticClass:"mt45 bgBlue radius4 ptb10 white ft14 tc mb10",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.register.apply(void 0,arguments)}}},[t._v(t._s(t.$t("login").e_confrim))])],1)},n=[]}}]);