(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-setPwd"],{"3baa":function(t,e,i){"use strict";i.r(e);var s=i("6a6f"),a=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);e["default"]=a.a},"6a6f":function(t,e,i){"use strict";var s=i("4ea4");i("acd8"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(i("5530")),n=i("2f62"),r={data:function(){return{user_string:"",password:"",re_password:"",code:"",area_code:"",isAgree:!1,invite_code:"",verifyPwd1:!1,verifyPwd2:!1,lang:"",disable:!1,load:!1,codeText:this.$t("login.r_send"),from_invite:!1}},onLoad:function(t){this.user_string=t.user_string,this.code=t.code,this.is_mobile=t.is_mobile,this.area_code=t.areaCode,t.invitecode&&"undefined"!=t.invitecode&&(this.invite_code=t.invitecode||"",this.from_invite=!0),this.lang=uni.getStorageSync("lang"),uni.setNavigationBarTitle({title:this.$t("login").p_setPwd})},computed:(0,a.default)({},(0,n.mapState)(["theme"])),onShow:function(){this.$utils.setThemeTop(this.theme)},methods:{send:function(){var t=this;this.disable=!0;var e=10,i=setInterval((function(){e--,e<10&&(e="0"+e),t.codeText=e+"s",e<=0&&(clearInterval(i),t.disable=!1,t.load=!1,t.codeText=t.$t("login").r_send)}),1e3)},passwordInput1:function(t){t.target.value.length<6?this.verifyPwd1=!0:this.verifyPwd1=!1},passwordInput2:function(t){t.target.value!=this.password?this.verifyPwd2=!0:this.verifyPwd2=!1},tapChecked:function(){this.isAgree=!this.isAgree},register:function(){var t=this;if(!this.password)return this.$utils.showLayer(this.$t("login").p_pwd);if(this.password.length<6)return this.$utils.showLayer(this.$t("login").p_simple);if(this.password!=this.re_password)return this.$utils.showLayer(this.$t("login").p_inputagain);if(!this.isAgree)return this.$utils.showLayer(this.$t("login").p_first);var e={user_string:this.user_string,password:this.password,code:this.code,re_password:this.re_password,lang:this.lang,extension_code:this.invite_code};this.area_code=parseFloat(this.area_code),0==this.is_mobile?(e.type="mobile",e.area_code_id="86"==this.area_code?1:0,e.area_code=this.area_code):(e.type="email",e.area_code_id="86"==this.area_code?1:0,e.area_code=this.area_code),this.$utils.initData({url:"user/register",data:e,type:"POST"},(function(e){t.$utils.showLayer(e.message),e.jump&&t.from_invite?location.href=e.jump:setTimeout((function(){uni.reLaunch({url:"login"})}),1500)}))}}};e.default=r},7107:function(t,e,i){"use strict";i.r(e);var s=i("8a21"),a=i("3baa");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);var r,o=i("f0c5"),l=Object(o["a"])(a["default"],s["b"],s["c"],!1,null,"d5e92cd8",null,!1,s["a"],r);e["default"]=l.exports},"8a21":function(t,e,i){"use strict";var s;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return s}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"pt20 plr20",class:{light:"light"==t.theme}},[i("v-uni-view",{staticClass:"mb10 mt30"},[i("v-uni-view",{staticClass:"flex bgwhite alcenter bdb_myblue "},[i("v-uni-input",{staticClass:"h40 lh40 flex1",attrs:{type:"text",password:"",placeholder:t.$t("login").p_pwd},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.passwordInput1.apply(void 0,arguments)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),i("v-uni-image",{staticClass:"wt15 h15 ml10",attrs:{src:"/static/image/password.png"}})],1),t.verifyPwd1?i("v-uni-view",{staticClass:"ft10 pt5 chengse"},[t._v(t._s(t.$t("login").p_len))]):t._e()],1),i("v-uni-view",{staticClass:"mb10"},[i("v-uni-view",{staticClass:"flex bgwhite alcenter bdb_myblue "},[i("v-uni-input",{staticClass:"h40 lh40 flex1",attrs:{type:"text",password:"",placeholder:t.$t("login").p_confirmPwd},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.passwordInput2.apply(void 0,arguments)}},model:{value:t.re_password,callback:function(e){t.re_password=e},expression:"re_password"}}),i("v-uni-image",{staticClass:"wt15 h15 ml10",attrs:{src:"/static/image/password.png"}})],1),t.verifyPwd2?i("v-uni-view",{staticClass:"ft10 pt5 chengse"},[t._v(t._s(t.$t("login").p_notsame))]):t._e()],1),i("v-uni-view",{staticClass:"flex bgwhite alcenter bdb_myblue "},[i("v-uni-input",{staticClass:"h40 lh40 flex1",attrs:{type:"text",placeholder:t.$t("login").p_invitecode},model:{value:t.invite_code,callback:function(e){t.invite_code=e},expression:"invite_code"}})],1),i("v-uni-view",{staticClass:"mt20 flex alcenter"},[i("v-uni-view",{staticClass:" flex alcenter"},[i("v-uni-checkbox",{staticStyle:{transform:"scale(0.7)",color:"'#1881d2'"},attrs:{value:"cb",checked:t.isAgree},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tapChecked.apply(void 0,arguments)}}}),i("v-uni-text",[t._v(t._s(t.$t("login").p_agree))])],1),i("v-uni-navigator",{attrs:{url:"/pages/home/agreement"}},[i("v-uni-view",{staticClass:"ml10 blue2"},[t._v("《"+t._s(t.$t("login").p_private)+"》")])],1)],1),i("v-uni-view",{staticClass:"mt45 bgBlue radius4 ptb10 white ft14 tc mb10",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.register.apply(void 0,arguments)}}},[t._v(t._s(t.$t("login").p_set))])],1)},n=[]}}]);