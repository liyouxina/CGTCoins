(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-about"],{"21a3":function(t,a,i){"use strict";i.r(a);var e=i("d44c"),n=i("9c1d");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("b463");var r,l=i("f0c5"),d=Object(l["a"])(n["default"],e["b"],e["c"],!1,null,"280f880c",null,!1,e["a"],r);a["default"]=d.exports},"4d4d":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={name:"UniLoadMore",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{}}};a.default=e},"74dd":function(t,a,i){"use strict";i.r(a);var e=i("c212"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},7917:function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"plr10 ptb10",class:{light:"light"==t.theme}},[t._l(t.list,(function(a,e){return i("v-uni-navigator",{key:e,staticClass:" plr8 bdb_blue3 ptb20",attrs:{url:"/pages/home/newsDetail?id="+a.id}},[i("v-uni-view",{staticClass:"ft14 color1 ellipsis"},[t._v(t._s(a.title))])],1)})),t.show?i("v-uni-view",{staticClass:"tc mtb20 blue4 ft12"},[t._v(t._s(t.more))]):t._e()],2)},o=[]},9815:function(t,a,i){"use strict";i.r(a);var e=i("7917"),n=i("74dd");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);var r,l=i("f0c5"),d=Object(l["a"])(n["default"],e["b"],e["c"],!1,null,"a6a6230e",null,!1,e["a"],r);a["default"]=d.exports},"9c1d":function(t,a,i){"use strict";i.r(a);var e=i("4d4d"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},ae0e:function(t,a,i){var e=i("df99");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("5266e62a",e,!0,{sourceMap:!1,shadowMode:!1})},b463:function(t,a,i){"use strict";var e=i("ae0e"),n=i.n(e);n.a},c212:function(t,a,i){"use strict";var e=i("4ea4");i("99af"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("5530")),o=e(i("21a3")),r=i("2f62"),l={data:function(){return{list:[],page:1,more:this.$t("zdy").more,show:!0}},components:{uniLoadMore:o.default},onLoad:function(){uni.setNavigationBarTitle({title:this.$t("about").abt}),this.getList()},computed:(0,n.default)({},(0,r.mapState)(["theme"])),onShow:function(){this.$utils.setThemeTop(this.theme)},methods:{getList:function(){var t=this;uni.showLoading(),this.$utils.initData({url:"news/list",data:{page:this.page,c_id:19,lang:uni.getStorageSync("lang")},type:"post"},(function(a,i){uni.hideLoading(),1==t.page&&a.list.length<=a.count&&(t.show=!1),t.list=t.list.concat(a.list),a.list.length>0?(t.more=t.$t("home").up,t.show=!0):t.more=t.$t("home").nomore}))}},onReachBottom:function(){this.status="loading",this.page++,this.getList()}};a.default=l},d44c:function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"uni-load-more"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[i("v-uni-view",{staticClass:"load1 load"},[i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load2 load"},[i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load3 load"},[i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}})],1)],1),i("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},o=[]},df99:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-load-more[data-v-280f880c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-load-more__text[data-v-280f880c]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-280f880c]{height:24px;width:24px;margin-right:10px}.uni-load-more__img > .load[data-v-280f880c]{position:absolute}.uni-load-more__img > .load .uni-load-view_wrapper[data-v-280f880c]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-280f880c 1.56s ease infinite;animation:load-data-v-280f880c 1.56s ease infinite}.uni-load-more__img > .load .uni-load-view_wrapper[data-v-280f880c]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img > .load .uni-load-view_wrapper[data-v-280f880c]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img > .load .uni-load-view_wrapper[data-v-280f880c]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img > .load .uni-load-view_wrapper[data-v-280f880c]:nth-child(4){top:11px;left:0}.load1[data-v-280f880c],\r\n.load2[data-v-280f880c],\r\n.load3[data-v-280f880c]{height:24px;width:24px}.load2[data-v-280f880c]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-280f880c]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 .uni-load-view_wrapper[data-v-280f880c]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 .uni-load-view_wrapper[data-v-280f880c]:nth-child(1){-webkit-animation-delay:.13s;animation-delay:.13s}.load3 .uni-load-view_wrapper[data-v-280f880c]:nth-child(1){-webkit-animation-delay:.26s;animation-delay:.26s}.load1 .uni-load-view_wrapper[data-v-280f880c]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 .uni-load-view_wrapper[data-v-280f880c]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 .uni-load-view_wrapper[data-v-280f880c]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 .uni-load-view_wrapper[data-v-280f880c]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 .uni-load-view_wrapper[data-v-280f880c]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 .uni-load-view_wrapper[data-v-280f880c]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 .uni-load-view_wrapper[data-v-280f880c]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 .uni-load-view_wrapper[data-v-280f880c]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 .uni-load-view_wrapper[data-v-280f880c]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-280f880c{0%{opacity:1}100%{opacity:.2}}',""]),t.exports=a}}]);