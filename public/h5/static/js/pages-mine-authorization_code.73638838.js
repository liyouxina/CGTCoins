(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-authorization_code"],{5775:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("5530")),u=n("2f62"),o={data:function(){return{code:""}},onLoad:function(){uni.setNavigationBarTitle({title:this.$t("bind.codeauth")})},onShow:function(){this.$utils.setThemeTop(this.theme),this.getInfo()},methods:{getInfo:function(){var t=this;this.$utils.initDataToken({url:"user/authorization_code"},(function(e){t.code=e}))}},computed:(0,a.default)({},(0,u.mapState)(["theme"]))};e.default=o},"786f":function(t,e,n){"use strict";n.r(e);var i=n("5775"),a=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=a.a},ae21:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{class:{light:"light"==t.theme}},[n("v-uni-view",{staticClass:"bgHeader mt20 gray7 ptb15 ft12 plr15 mlr10 radius4"},[t._v(t._s(t.$t("bind.codetip")))]),n("v-uni-view",{staticClass:"ptb20 plr10  flex alcenter jscenter mt20"},[n("v-uni-text",[t._v(t._s(t.$t("bind.codeauth"))+"：")]),n("v-uni-text",{staticClass:"ft16 bold pl5 red2"},[t._v(t._s(t.code))])],1)],1)},u=[]},c2ae:function(t,e,n){"use strict";n.r(e);var i=n("ae21"),a=n("786f");for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);var o,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"54553bfe",null,!1,i["a"],o);e["default"]=c.exports}}]);