(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ieo-upcurrency"],{"05c9":function(t,i,e){var n=e("dbbd");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("f15c3b28",n,!0,{sourceMap:!1,shadowMode:!1})},"1de5":function(t,i,e){"use strict";t.exports=function(t,i){return i||(i={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),i.hash&&(t+=i.hash),/["'() \t\n]/.test(t)||i.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},2274:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAABECAYAAAAhmH0UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NjY4MEZEQTBFRDIxMUVCQUU2REVCODkxRUNFNzI4NCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0NjY4MEZEQjBFRDIxMUVCQUU2REVCODkxRUNFNzI4NCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ2NjgwRkQ4MEVEMjExRUJBRTZERUI4OTFFQ0U3Mjg0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQ2NjgwRkQ5MEVEMjExRUJBRTZERUI4OTFFQ0U3Mjg0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+tsPRYwAABppJREFUeNrUWmuPE1UY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"},"40e1":function(t,i,e){t.exports=e.p+"static/img/banner.e00c7c19.png"},"602c":function(t,i,e){"use strict";var n=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("5530")),s=e("2f62"),c={data:function(){return{}},computed:(0,a.default)({},(0,s.mapState)(["theme"])),onShow:function(){this.$utils.setThemeTop(this.theme)},onLoad:function(t){uni.setNavigationBarTitle({title:this.$t("zdy.sbsq")}),this.init()},onPullDownRefresh:function(){},onReachBottom:function(){},filters:{},methods:{}};i.default=c},"681a":function(t,i,e){"use strict";e.r(i);var n=e("b234"),a=e("852b");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("ece0");var c,o=e("f0c5"),r=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"75604306",null,!1,n["a"],c);i["default"]=r.exports},"852b":function(t,i,e){"use strict";e.r(i);var n=e("602c"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},b234:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"upbg"},[e("v-uni-view",[e("v-uni-text",{staticClass:"title"},[t._v(t._s(t.$t("zdy.sbsq")))]),e("v-uni-text",{staticClass:"des"},[t._v(t._s(t.$t("zdy.sb09")))]),e("a",{attrs:{target:"_blank",href:"http://coincheck.hk.mikecrm.com/dgXD3Xb"}},[t._v(t._s(t.$t("zdy.sb08")))])],1)],1),e("v-uni-view",{staticClass:"con"},[e("v-uni-view",{staticClass:"title"},[e("v-uni-text",[t._v("/////////////////////")]),t._v(t._s(t.$t("zdy.sb07"))),e("v-uni-text",[t._v("/////////////////////")])],1),e("v-uni-view",{staticClass:"step"},[e("v-uni-view",{staticClass:"step1"},[e("v-uni-text",{staticClass:"img"},[e("v-uni-image",{attrs:{src:"/static/image/upcurrency/1.png",alt:""}})],1),e("v-uni-text",{staticClass:"hx"}),e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.$t("zdy.sb06")))]),e("v-uni-view",[t._v(t._s(t.$t("zdy.sb05")))])],1),e("v-uni-view",{staticClass:"step2"},[e("v-uni-text",{staticClass:"img"},[e("v-uni-image",{attrs:{src:"/static/image/upcurrency/2.png",alt:""}})],1),e("v-uni-text",{staticClass:"hx"}),e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.$t("zdy.sb04")))]),e("v-uni-view",[t._v(t._s(t.$t("zdy.sb03")))])],1),e("v-uni-view",{staticClass:"step3"},[e("v-uni-text",{staticClass:"img"},[e("v-uni-image",{attrs:{src:"/static/image/upcurrency/3.png",alt:""}})],1),e("v-uni-text",{staticClass:"hx"}),e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.$t("zdy.sb02")))]),e("v-uni-view",[t._v(t._s(t.$t("zdy.sb01")))])],1)],1),e("v-uni-view",{staticClass:"title"},[e("v-uni-text",[t._v("/////////////////////")]),t._v(t._s(t.$t("zdy.ksgt"))),e("v-uni-text",[t._v("/////////////////////")])],1),e("v-uni-view",{staticClass:"otherLink"},[e("a",{attrs:{target:"_blank"}},[e("v-uni-image",{attrs:{src:"/static/image/upcurrency/4.svg",alt:""}})],1),e("a",{attrs:{target:"_blank"}},[e("v-uni-image",{attrs:{src:"/static/image/upcurrency/5.svg",alt:""}})],1),e("a",{staticClass:"email",attrs:{href:"mailto:coincheck0@gmail.com",target:"_blank"}},[e("v-uni-image",{attrs:{src:"/static/image/upcurrency/6.svg",alt:""}})],1)])],1)],1)},s=[]},dbbd:function(t,i,e){var n=e("24fb"),a=e("1de5"),s=e("40e1"),c=e("2274");i=n(!1);var o=a(s),r=a(c);i.push([t.i,"uni-page-body[data-v-75604306]{overflow:hidden;background-color:#fff}.upbg[data-v-75604306]{position:relative;clear:both;overflow:hidden;background:url("+o+") 50% no-repeat;background-size:100% 100%;margin-top:%?-120?%;height:%?650?%}.upbg uni-view[data-v-75604306]{color:#fff;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap}.upbg uni-view uni-text.title[data-v-75604306]{font-size:36px;font-weight:700;margin-top:%?50?%}.upbg uni-view uni-text.des[data-v-75604306]{width:%?536?%;font-size:12px;font-weight:400;text-align:center;margin:%?40?% 0}.upbg uni-view a[data-v-75604306]:hover{background:#588df7;color:#fff}.upbg uni-view a[data-v-75604306]{display:block;min-width:%?268?%;height:%?72?%;line-height:%?72?%;text-align:center;border:1px solid #588df7;border-radius:4px;font-size:16px;text-decoration:none;color:#588df7}.con[data-v-75604306]{padding-top:%?64?%}.con .title[data-v-75604306]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:18px;font-weight:700;color:#212121}.con .title uni-text[data-v-75604306]{font-size:10.25px;color:#bbc8ec;margin-right:%?14?%}.con .title uni-text[data-v-75604306]:last-child{margin-right:0;margin-left:%?14?%}.con .step[data-v-75604306]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin:%?54?% 0}.con .step>uni-view[data-v-75604306]{width:%?295?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:%?4?%}.con .step>uni-view .img[data-v-75604306]{overflow:hidden;display:block;width:%?106?%;height:%?136?%;background:url("+r+")}.con .step>uni-view .img uni-image[data-v-75604306]{display:block;margin:%?28?% auto 0;width:%?40?%;height:%?40?%}.con .step>uni-view .hx[data-v-75604306]{display:block;width:%?295?%;height:%?8?%;background:#588df7;margin-top:%?10?%}.con .step>uni-view uni-view[data-v-75604306]{color:#505050;font-size:12px;text-align:center}.con .step>uni-view .title[data-v-75604306]{font-size:16px;margin-bottom:%?10?%;font-weight:700;color:#212121;line-height:%?38?%}.con .otherLink[data-v-75604306]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:%?60?%;margin-top:%?40?%;margin-bottom:%?50?%}.otherLink uni-image[data-v-75604306]{width:%?80?%;height:%?80?%}.con .otherLink a[data-v-75604306]{margin-right:%?60?%}body.?%PAGE?%[data-v-75604306]{background-color:#fff}",""]),t.exports=i},ece0:function(t,i,e){"use strict";var n=e("05c9"),a=e.n(n);a.a}}]);