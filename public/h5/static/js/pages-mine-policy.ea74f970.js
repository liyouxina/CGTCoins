(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-policy"],{1225:function(t,e,n){"use strict";n.r(e);var i=n("e7b6"),u=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=u.a},db07:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{class:{light:"light"==t.theme}},[n("v-uni-view",{staticClass:"plr10 ptb20",domProps:{innerHTML:t._s(t.msg)}})],1)},a=[]},e339:function(t,e,n){"use strict";n.r(e);var i=n("db07"),u=n("1225");for(var a in u)"default"!==a&&function(t){n.d(e,t,(function(){return u[t]}))}(a);var r,o=n("f0c5"),s=Object(o["a"])(u["default"],i["b"],i["c"],!1,null,"d5f9c4ce",null,!1,i["a"],r);e["default"]=s.exports},e7b6:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=i(n("5530")),a=n("2f62"),r={data:function(){return{msg:""}},created:function(){this.getMsg()},onLoad:function(){uni.setNavigationBarTitle({title:this.$t("about").privat})},computed:(0,u.default)({},(0,a.mapState)(["theme"])),onShow:function(){this.$utils.setThemeTop(this.theme)},methods:{getMsg:function(){var t=this;this.$utils.initData({url:"news/detail",data:{id:8},type:"POST"},(function(e,n){t.msg=e}))}}};e.default=r}}]);