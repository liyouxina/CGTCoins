(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-userCenter"],{"667e":function(t,e,i){"use strict";i.r(e);var n=i("d2ce"),a=i("e22c");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);var u,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"73e892b2",null,!1,n["a"],u);e["default"]=r.exports},6684:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5530")),s=i("2f62"),u={data:function(){return{msg:""}},onLoad:function(){uni.setNavigationBarTitle({title:this.$t("authentication").renzheng}),this.getInfo()},methods:{getInfo:function(){var t=this;this.$utils.initDataToken({url:"user/center",data:{},type:"get"},(function(e,i){t.msg=e}))}},computed:(0,a.default)({},(0,s.mapState)(["theme"])),onShow:function(){this.$utils.setThemeTop(this.theme)}};e.default=u},d2ce:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"plr20 ptb10",class:{light:"light"==t.theme}},[i("v-uni-view",{staticClass:"flex alcenter between ptb10 ft16"},[i("v-uni-text",{staticClass:"ft18 bold"},[t._v(t._s(t.$t("authentication.renzheng")))]),0==t.msg.review_status?i("v-uni-navigator",{staticClass:"blue2",attrs:{url:"/pages/mine/real_authentication"}},[t._v(t._s(t.$t("authentication.go")))]):t._e(),1==t.msg.review_status?i("v-uni-text",{staticClass:"blue2"},[t._v(t._s(t.$t("authentication.ing")))]):t._e(),2==t.msg.review_status?i("v-uni-text",{staticClass:"blue2"},[t._v(t._s(t.$t("authentication.has")))]):t._e()],1),0==t.msg.review_status?i("v-uni-view",{staticClass:"mt10 ft14"},[t._v("·"+t._s(t.$t("authentication.rz_tip")))]):t._e(),2==t.msg.review_status?i("v-uni-view",{staticClass:"ft16"},[i("v-uni-view",{staticClass:"mb5 mt10 ft16"},[t._v(t._s(t.$t("authentication.name"))+"："+t._s(t.msg.name))]),i("v-uni-view",{staticClass:"mb5 ft16"},[t._v(t._s(t.$t("authentication.account"))+"："+t._s(t.msg.account))]),i("v-uni-view",{staticClass:"mb5 ft16"},[t._v("UID："+t._s(t.msg.id))]),i("v-uni-view",{staticClass:"ft16"},[t._v(t._s(t.$t("authentication.zj"))+"："+t._s(t.msg.card_id))])],1):t._e()],1)},s=[]},e22c:function(t,e,i){"use strict";i.r(e);var n=i("6684"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a}}]);