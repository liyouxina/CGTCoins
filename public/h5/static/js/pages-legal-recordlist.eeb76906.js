(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-legal-recordlist"],{"0a6e":function(t,e,i){"use strict";var a=i("4ea4");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(i("5530")),n=i("2f62"),A={data:function(){return{id:"",show:!1,type:"",statu:"",orderlist:[],page:1,hasMore:!0,over:!1}},onLoad:function(t){this.id=t.id},onShow:function(){this.$utils.setThemeTop(this.theme),this.getData()},computed:(0,s.default)({},(0,n.mapState)(["theme"])),methods:{getData:function(){var t=this,e=this.type?this.type:"",i=this.statu||0===this.statu?this.statu:"";t.$utils.initDataToken({url:"legal_user_deal",data:{page:t.page,currency_id:t.id,type:e,is_sure:i}},(function(e){var i=e.data;uni.stopPullDownRefresh(),t.orderlist=1==t.page?i:t.orderlist.concat(i),t.over=!0,t.hasMore=!(e.page>=e.pages),console.log(t.hasMore)}))},back:function(){uni.navigateBack()},goDetail:function(t,e){uni.navigateTo({url:"/pages/legal/order?id="+t})},detail:function(){uni.navigateTo({url:"/pages/legal/finished"})},isshow:function(){this.show=!this.show},changetype:function(t){this.type=this.type==t?this.type=!this.type:this.type=t},changestatu:function(t){this.statu=this.statu===t?this.statu=!this.statu:this.statu=t,console.log(this.statu)},reset:function(){this.statu="",this.type="",this.show=!this.show,this.page=1,this.hasMore=!0,this.over=!1,this.getData()},confirm:function(){this.show=!1,this.page=1,this.hasMore=!0,this.over=!1,this.getData()},onPullDownRefresh:function(){this.page=1,this.getData()},onReachBottom:function(){this.hasMore&&(this.page++,this.getData())}}};e.default=A},"0ba8":function(t,e,i){"use strict";i.r(e);var a=i("beca"),s=i("6783");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("3c44");var A,l=i("f0c5"),c=Object(l["a"])(s["default"],a["b"],a["c"],!1,null,"07243e9f",null,!1,a["a"],A);e["default"]=c.exports},1177:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAwtJREFUaN7tl11IU2Ecxp//zHJ9EBV9YCAVCLX5kSJRXQRRSUQJZU0jYmE4MLR1o24usrU5FkEIM4JGdNFFubOgD9iMiurCGAw/UrQw7ZOFLJtezOSszbeL2o0RZ2s7Hqnzu37fP8/z4z0v7wFkZGT+Z0howRG/bVvf4YcP6RIO4FxpqdSBE8aHb1Q5NMS28BaFKj+fc5tJ7Y5EZi5TCA6KQEtdSqXUfZJGRzeYnzGQmhvQxGJ/WiYoYLoOXVim00EJL9VNTUndS5BjyKb90SgqYg0oP3GC4zQaTSoC7nQ3OfO7X7/GYzyB3WCQup8QbB+2IGS3u3LP6gs6fD6h9cKfwC9cAWNm3laHgzWSGSqvV+qivxWvwV0609ODo/wmxV6LJdF9CQsAiIgYgz3mmb5WXY0VdA49oZDUxaEFh+c8jyuKg2y7Vvunyy4NAn7CcWd3bT4VCOAD8lhlba3U/bGWaemzycS5DcYCa39/stuTFhDH5TH2Fi64dYuZoaWO27dnvfgICA2dnawlN/tVUWvr3475awFxIhv57Gh9TQ2eYQ9GPn0Svfh9dGLp5CRbT20Zi4VvedEF3CMzFdHEBM7TI2yoqkIFWtDHmFj92QGoFRv1es5tDKjdw8OpzhN8CSZLxXLb6j6vw8F2Q4+1abwjwuSiqw8euDzG3vyrZWXpGpvyCZhJ1ld+dMne+nqmg4WaBwZSHtjBGskyNsYWZTQpvuh06c6b9hMQp0LZkvMyWFzMIjSf5vt8KEcVPmZmJh+QAKbRtLuMTQWFHJfunGk/AXHap0wfC1d1d7Moe8OW2mxJD3DAj6M3b4pVXHQBcYKIIASrFYtxCO/D4YSDHZ9eQ3dNJrHziS7gOZlpJ0WjcMGJdd+/J7qPyrNO8hPi/3yJLmCuIwuQOoDUyAKkDiA1c09AMVbCPDgYfZzz9u278fF/X0ADrFgfDMJDBBgMrCvr+qSvpCTVv7xEmTdbPdlTvMAFv58WIoLLKhVrplGsuHgxXLloh7LR6fSGTxtz23geor35ZGRkZH7nB5hDH/VOo5RcAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA4LTMxVDE3OjUwOjQzKzA4OjAw1lTZuwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wOC0zMVQxNzo1MDo0MyswODowMKcJYQcAAABVdEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL2hvbWUvYWRtaW4vaWNvbi1mb250L3RtcC9pY29uX2hlY3pwMHRmZndpLyVFNyVBRCU5QiVFOSU4MCU4OS5zdmeNxtg8AAAAAElFTkSuQmCC"},"28f9":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAA4RJREFUaN7tmD9IG1Ecx38vJkUsbQMRMXWR6BgSw13SDKHiDdXJQULTSoUgIgXBQSFBodUhg5q4OfmHbu0kDrYhyXxDxXsvuFTakrYpQRvtUrTEP5d7HcLdYCjR2rtHaT7LDffj7vv93rv7/e4B1KnDFPFQPBQPb93a6tjq2Oq4fdvo+yNWxncmdyZ3Jm/eLB+Xj8vHr1/TA3pAD27cMDvMDrPjwQP3onvRvfjzJyt9uqE+cTJEhsiQKGKMMcaUasd23I7bV1eN0mPYClCfuJyX83L+zRuYgimY6u7WChzgAMfXrzRHczQnCDzP8zyfy/3zAWjGO+VOuTOZBB/4wHf/vlZQhCIU83llSVlSlgTBm/QmvclPn/TWpWLW68LqR00Oy2E5nE7DGZzBmd+vFWzABmx8+WIumUvmkiC4k+6kO/n5s1HGdQtA2pa2pe07d1AjakSNqVSV8U3YhM2PHy2SRbJIguBKuVKuVKFgtHEVk2HGoxCF6IcPDS0NLQ0tPT2sjatcewXUMo7G0Bgae/8eEpCAhCB0BboCXYG9PdbGr41qnNiIjdjevq1qZzKWsby7S0QiEvHuXdZ6DTcuSZIkSXY7a721uHQbVI2b+kx9pr50mmZohmbu3dMKjuAIjnZ3y8VysVwUBF/IF/KFvn1jbfDaAWRplmap1ar0K/1KfyYDszALs16vVmAFK1h//EDraB2tP32KYiiGYt+/szam4QIXuPb2PKJH9Ijv3l06ANU4DdIgDabTdJpO02mfj7WfK1OCEpRevOACXIALDA9fPP3bLqCMK+PKeE8PNEMzNPM8ax96UfMVqPy0DA/TJtpEm1ZWYBRGYdSkzQ9oAk2giZMTaqd2ahdF1oaqKEABCuk0J3IiJyYSVw5ABQdxEAfDYbCBDWxraxeDgDZog7Z4nGvlWrnWSIS1b93I2rP2rP3xY+InfuKX5ao2GMdxHJ+fZ63zslx5FPbse/Y9+69ewQAMwMCTJ5VJr1zWCgQQQIhE/rUg/hiyQBbIwqNHxEIsxHJ+XrUinNiJnXNzrHWyD2IZL+PlmRnWOnUHn+JTfBoK1YOoFQSPecw/f85ap/5BjOARPPLwYT2IGkFU/h6fPWOtU3cqRgcHfzdHkBiJkVg0apSev7Yldlkq290vX1IndVLn4CDyIz/yy7I6Tyi9Sq/Sa9yuMHPU9qlOmKz11Pnf+AXI9X9ikZ9y1wAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wOC0zMFQxNToxMjo1NiswODowMDLececAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDgtMzBUMTU6MTI6NTYrMDg6MDBDg8lbAAAAVHRFWHRzdmc6YmFzZS11cmkAZmlsZTovLy9ob21lL2FkbWluL2ljb24tZm9udC90bXAvaWNvbl9zdmZ0d3hjdXh3LyVFNyVBRSVBRCVFNSVBNCVCNC5zdmdQxMzSAAAAAElFTkSuQmCC"},"31aa":function(t,e,i){var a=i("dadf");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("6c9797d7",a,!0,{sourceMap:!1,shadowMode:!1})},"3c44":function(t,e,i){"use strict";var a=i("31aa"),s=i.n(a);s.a},6783:function(t,e,i){"use strict";i.r(e);var a=i("0a6e"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},beca:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{class:{light:"light"==t.theme}},[a("v-uni-view",{staticClass:"status_bar"},[a("v-uni-view",{staticClass:"top_view"})],1),a("v-uni-view",{staticClass:"header fixed flex alcenter between plr15 bg_legal"},[a("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back()}}},["light"==t.theme?a("v-uni-image",{staticClass:"wt20 h20",attrs:{src:i("dc84"),mode:"aspectFit"}}):a("v-uni-image",{staticClass:"wt20 h20",attrs:{src:i("28f9"),mode:"aspectFit"}})],1),a("v-uni-view",[a("v-uni-image",{staticClass:"wt20 h20",attrs:{src:i("1177"),mode:"aspectFit"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isshow()}}})],1)],1),a("v-uni-view",{staticClass:"pt50"},[a("v-uni-view",{staticClass:"h50"},[a("v-uni-text",{staticClass:" ft24 plr15 bold"},[t._v(t._s(t.$t("legal.list")))])],1),a("v-uni-view",[t._l(t.orderlist,(function(e,s){return a("v-uni-view",{key:s,staticClass:"gray75 flex column w100 plr15 ptb15 bdb27",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetail(e.id,e.is_sure)}}},[a("v-uni-view",{staticClass:"flex between"},[a("v-uni-view",{staticClass:" flex alcenter ft13 bold"},[a("v-uni-text",{class:["blue21 mr5 ft14",{redColor:"buy"==e.type}]},[t._v(t._s("sell"==e.type?t.$t("legal.buy"):t.$t("legal.sell")))]),a("v-uni-text",[t._v(t._s(e.currency_name))])],1),a("v-uni-view",{staticClass:"flex alcenter"},[0==e.is_sure?a("v-uni-text",{},[t._v(t._s(t.$t("store.notdone")))]):t._e(),1==e.is_sure?a("v-uni-text",{},[t._v(t._s(t.$t("store.done")))]):t._e(),2==e.is_sure?a("v-uni-text",{},[t._v(t._s(t.$t("trade.has_cancel")))]):t._e(),3==e.is_sure?a("v-uni-text",{},[t._v(t._s(t.$t("trade.has_pay")))]):t._e(),a("v-uni-image",{staticClass:"wt15 h15",attrs:{src:i("e3e2"),mode:"aspectFit"}})],1)],1),a("v-uni-view",{staticClass:"flex between mt10"},[a("v-uni-view",{staticClass:"flex column flexstart"},[a("v-uni-text",[t._v(t._s(t.$t("trade.time")))]),a("v-uni-text",{staticClass:"b7c ft13 mt5"},[t._v(t._s(e.create_time))])],1),a("v-uni-view",{staticClass:"flex column flexstart"},[a("v-uni-text",[t._v(t._s(t.$t("trade.num"))+"("+t._s(e.currency_name)+")")]),a("v-uni-text",{staticClass:"b7c ft13 mt5"},[t._v(t._s(e.number))])],1),a("v-uni-view",{staticClass:"flex column flexend"},[a("v-uni-text",[t._v(t._s(t.$t("legal.allmoney"))+"(￥)")]),a("v-uni-text",{staticClass:"b7c ft13 mt5"},[t._v(t._s(e.deal_money))])],1)],1),a("v-uni-view",{staticClass:"flex mt10"},[a("v-uni-text",{staticClass:"ft14 "},[t._v(t._s(e.seller_name))])],1)],1)})),a("v-uni-view",{class:["tc pt30 pt100 pb100 hidden",{block:0==t.orderlist.length&&t.over}]},[a("v-uni-image",{staticClass:"h50 wt50",attrs:{src:"/static/image/nodata.png"}}),a("v-uni-view",{staticClass:"gray7"},[t._v(t._s(t.$t("home.norecord")))])],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.hasMore&&t.orderlist.length>10,expression:"!hasMore && orderlist.length>10"}],staticClass:"tc gray7 ptb20"},[t._v(t._s(t.$t("home.nomore")))])],2)],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"sx_show",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isshow()}}},[a("v-uni-view",{staticClass:"bgPart",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[a("v-uni-view",{staticClass:"pt10 plr10 ft10 "},[a("v-uni-text",{staticClass:"gray75 ft14"},[t._v(t._s(t.$t("trade.dealtype")))]),a("v-uni-view",{staticClass:"select deal_type mt10  mb10 flex"},[a("v-uni-view",{class:"sell"==t.type?"active":"baseBg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changetype("sell")}}},[t._v(t._s(t.$t("legal.buy")))]),a("v-uni-view",{class:"buy"==t.type?"active":"baseBg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changetype("buy")}}},[t._v(t._s(t.$t("legal.sell")))])],1),a("v-uni-text",{staticClass:"gray75 ft14"},[t._v(t._s(t.$t("store.orderstatus")))]),a("v-uni-view",{staticClass:"select deal_statu mt10 mb10 flex wraps"},[a("v-uni-view",{class:0===t.statu?"active":"baseBg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changestatu(0)}}},[t._v(t._s(t.$t("store.notdone")))]),a("v-uni-view",{class:1===t.statu?"active":"baseBg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changestatu(1)}}},[t._v(t._s(t.$t("store.done")))]),a("v-uni-view",{class:2===t.statu?"active":"baseBg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changestatu(2)}}},[t._v(t._s(t.$t("trade.has_cancel")))])],1)],1),a("v-uni-view",{staticClass:"flex alcenter bdt2f"},[a("v-uni-view",{staticClass:"flex1 tc ptb10 reset  gray75",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.reset()}}},[t._v(t._s(t.$t("store.chongzhi")))]),a("v-uni-view",{staticClass:"active flex1 tc ptb10 bgBlue2 white confirm",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}},[t._v(t._s(t.$t("login.e_confrim2")))])],1)],1)],1)],1)},n=[]},dadf:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-07243e9f]{background-color:#131f30}.sx_show[data-v-07243e9f]{position:fixed;top:calc(0px + %?100?%);width:100%;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.7)}.sx_box[data-v-07243e9f]{background-color:#131f30}.select uni-view[data-v-07243e9f]{width:30%;height:%?60?%;margin-bottom:%?20?%;text-align:center;margin:%?10?% %?10?% %?20?%;\n\t/* color: #d7e8f5; */\n\t/* background: #0b1726; */display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.select .active[data-v-07243e9f]{background:none;border:1px solid #217dc1;color:#217dc1;border-radius:%?4?%}body.?%PAGE?%[data-v-07243e9f]{background-color:#131f30}",""]),t.exports=e},dc84:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAYCAYAAADpnJ2CAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2MURBOEVDRkUwRkUxMUU5QTRGMURDRDEwOEQxODY5OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MURBOEVEMEUwRkUxMUU5QTRGMURDRDEwOEQxODY5OSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYxREE4RUNERTBGRTExRTlBNEYxRENEMTA4RDE4Njk5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjYxREE4RUNFRTBGRTExRTlBNEYxRENEMTA4RDE4Njk5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Fegg9wAAAKVJREFUeNrU1sEKgCAMBmDp6ermoehQT6+PYWAKKhIWW9uMBv9Fwg/E5pSClw6xKVNe9N6jAq01xMX9U6wkeMVijBTYwlw6XnZwaWBHyFZ/xAWCMC4QjHGAKIwKojEK+Ap7C+oGJpHSoWwHrDSMQX1QvY40tsMxo/PNpdklLg0Jpf74aJSjtaFQruYNRjmfJxD66wf4CbW9hygjDdZjoqGMiacAAwAY94Qw+qTyYQAAAABJRU5ErkJggg=="},e3e2:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABxElEQVRYR+3WsUtbQRwH8O/vpY9CoJMF/QNcMkjI3W0OrSKC2EFLBenQyUy61Llb54LUQVy6iUihUJdMxUHHlxsa0gTe0KHQoVDwQR7EpLyfHEQI0uEu79GDkpsPvh/ud/e7H8HzIs/5mAKsTiCKosdBELzIsuxUKZUUWTYrgNZ6n5nfAfhaLpeXK5XK76IQVoB2uz3X7/cvAcwDiInoqRDiZxEIK4AJ6nQ6M2maXhDRAjP/CMPwSbVa/Z4XYQ0wQd1u91Gv12sQ0SKAX0S0JIT4lgfhBDBBcRw/TJLknIhWAVwDWJFSNidFOANMEDM/0FqfAXgOIAWwJqU0d8R5TQQYIUhrfQygDuCGiNaFEF9cBRMD7oKiKHpLRG+YeVgqlbZqtdpnF0RugAlrNpt7AN6b6gB4JaU8sUUUAjBhWuttZjbBxMy7SqkjG0RhgNFJPGPmT0QUBkGwYVOO/wcwVoIAwGsp5cE/K8HYJQQR7QghPtiEmz25SzD2DP8AeKmU+mgbngvAzPcb0aYQouESPjHAayv2+hl5/Y69DiStVmt2MBhceRvJvA+l5gSGw2E9y7JDL2O569t22Z+7E7qE/W3vFHALsaDXIQTuHAkAAAAASUVORK5CYII="}}]);