(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-newsDetail"],{"1e04":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5530")),u=i("2f62"),s={data:function(){return{news:"",time:"",title:""}},onLoad:function(t){uni.setNavigationBarTitle({title:this.$t("home").detail}),this.getDetail(t.id)},computed:(0,a.default)({},(0,u.mapState)(["theme"])),onShow:function(){this.$utils.setThemeTop(this.theme)},methods:{getDetail:function(t){var e=this;this.$utils.initData({url:"news/detail",data:{id:t},type:"post"},(function(t,i){e.news=t.content,e.time=t.update_time,e.title=t.title}))}}};e.default=s},"5aa5":function(t,e,i){"use strict";i.r(e);var n=i("df35"),a=i("c1b8");for(var u in a)"default"!==u&&function(t){i.d(e,t,(function(){return a[t]}))}(u);var s,r=i("f0c5"),o=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"5e6224dc",null,!1,n["a"],s);e["default"]=o.exports},c1b8:function(t,e,i){"use strict";i.r(e);var n=i("1e04"),a=i.n(n);for(var u in n)"default"!==u&&function(t){i.d(e,t,(function(){return n[t]}))}(u);e["default"]=a.a},df35:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return u})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"plr10 ptb10",class:{light:"light"==t.theme}},[i("v-uni-view",{staticClass:"tc mb10 ft16 pt10"},[t._v(t._s(t.title))]),i("v-uni-view",{domProps:{innerHTML:t._s(t.news)}}),i("v-uni-view",{staticClass:"mt30 pr15 ft12 tr blue4"},[t._v(t._s(t.time))])],1)},u=[]}}]);