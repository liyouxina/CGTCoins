(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-market-market"],{"4cfc":function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAARCAYAAAAL4VbbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ODc5MzBBOUFDNTYxMUU5QjcwQkYxQjQ2MkQxMkVDRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1ODc5MzBBQUFDNTYxMUU5QjcwQkYxQjQ2MkQxMkVDRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU4NzkzMEE3QUM1NjExRTlCNzBCRjFCNDYyRDEyRUNFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU4NzkzMEE4QUM1NjExRTlCNzBCRjFCNDYyRDEyRUNFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+AGQj/wAAAONJREFUeNpi+P//PwM63rz7oAk2cSYGNLBlz6EIIHUKSIejyzGCdCApNANSB4GYA4i/A7Gdj4vdGQzFQIUyQOo0EEsgGfYciE2AGp7BFQMVcgHZR4DYkAETnIXa8I0R6BlGIGc1EAcz4AargDiCBUjoA/ETIJ7IgB/ooniQEGDUrztDtGImBhIAyM0GQJxAhNoFIMUXgViGQGisBakDOQPkwzggPo9D4Xmo/H+Ym78BsR8Qv0BT+AIq/g3dg6Cw9gfiH1D+Dyj/Ca7QOAXEiVCnJUL5KKGBDlYA8R0gxogAgAADAAbpYkyLyLw8AAAAAElFTkSuQmCC"},"4def":function(i,t,e){var s=e("24fb");t=s(!1),t.push([i.i,"uni-page-body[data-v-26698137]{background:#102030}body.?%PAGE?%[data-v-26698137]{background:#102030}",""]),i.exports=t},8334:function(i,t,e){"use strict";var s=e("4ea4");e("4e82"),e("a9e3"),e("b680"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(e("5530")),n=e("2f62"),l={data:function(){return{isActive:0,marketLists:[],legal_name:"",isfilter1:0,isfilter2:0,isfilter3:0}},computed:(0,a.default)({},(0,n.mapState)(["theme"])),filters:{toFixed2:function(i){return i=Number(i),i.toFixed(2)},toFixed3:function(i){return i=Number(i),i.toFixed(3)},toFixed4:function(i){return i=Number(i),i.toFixed(4)}},onLoad:function(){},onShow:function(){var i=this;uni.setNavigationBarTitle({title:this.$t("market").market}),this.$utils.setThemeTop(this.theme),this.$utils.setThemeBottom(this.theme),this.getList(),this.$utils.initDataToken({url:"user/info"},(function(t){var e=i.$socketio(i.$socket_api);e.emit("login",t.id),e.on("daymarket",(function(t){if(t.legal_name==i.legal_name){var e=i.marketLists[i.isActive].quotation;for(var s in e)e[s].currency_name==t.currency_name&&e[s].legal_name==t.legal_name&&(e[s].volume=t.volume-0,e[s].now_price=t.now_price-0,e[s].change=t.change)}}))}))},onHide:function(){this.$socket.closeSocket()},onPullDownRefresh:function(){this.getList()},methods:{filterList:function(i,t){this.marketLists[this.isActive].quotation.sort((function(e,s){return"currency_name"==i?1==t?e[i].charCodeAt(0)-s[i].charCodeAt(0):s[i].charCodeAt(0)-e[i].charCodeAt(0):1==t?e[i]-s[i]:s[i]-e[i]}))},tapFilters:function(i,t){console.log(i,t),1==i&&(this.isfilter2=0,this.isfilter3=0,this.isfilter1=1==this.isfilter1?2:1,this.filterList(t,this.isfilter1)),2==i&&(this.isfilter1=0,this.isfilter3=0,this.isfilter2=1==this.isfilter2?2:1,this.filterList(t,this.isfilter2)),3==i&&(this.isfilter2=0,this.isfilter1=0,this.isfilter3=1==this.isfilter3?2:1,this.filterList(t,this.isfilter3))},getList:function(){var i=this;this.$utils.initData({url:"currency/quotation_new"},(function(t){uni.stopPullDownRefresh(),i.marketLists=t,t.length>0&&(i.legal_name=t[0].name)}))},changeTab:function(i,t){this.isfilter3=0,this.isfilter2=0,this.isfilter1=0,this.isActive=i,this.legal_name=t}}};t.default=l},aae6:function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAARCAYAAAAL4VbbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MkI4NDE1QkFDNTYxMUU5QUY3MUREOEQ3QkE1MzYwNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0MkI4NDE1Q0FDNTYxMUU5QUY3MUREOEQ3QkE1MzYwNiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQyQjg0MTU5QUM1NjExRTlBRjcxREQ4RDdCQTUzNjA2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQyQjg0MTVBQUM1NjExRTlBRjcxREQ4RDdCQTUzNjA2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+URCzOgAAANdJREFUeNpi1K87w4AFmAAxhgQTFoURQHwKiMMJKTYD4vlAzAilTXAplgHijUDMAeVzAvEmIJZCV8wFlZBAs0kSKs4FUwyychEQGzJgB8Ywp7EACX0gfgLEExnwA12Q4gtAXMBABGBiIAEw/v//n2jFLFv2HDIA0glEqF0AcvNFaBgH41G4FqQO7Ayg6aBwPIIj+M4DsY2Pi903uJuBGkCmn0aLmBdAbApU+AQlNKAC/kD8AyoEov1hCjGCDigBSm2JQAyyLhHKRwCQM9Dx5t0HTbCJAwQYAOy6VAohqsxnAAAAAElFTkSuQmCC"},b59c:function(i,t,e){"use strict";e.r(t);var s=e("8334"),a=e.n(s);for(var n in s)"default"!==n&&function(i){e.d(t,i,(function(){return s[i]}))}(n);t["default"]=a.a},bca1:function(i,t,e){"use strict";var s=e("edc7"),a=e.n(s);a.a},cd36:function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAARCAYAAAAL4VbbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3OTVDNDY3N0E3QTgxMUU5QTlBRUU4NDczODk0QzA0OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3OTVDNDY3OEE3QTgxMUU5QTlBRUU4NDczODk0QzA0OSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc5NUM0Njc1QTdBODExRTlBOUFFRTg0NzM4OTRDMDQ5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc5NUM0Njc2QTdBODExRTlBOUFFRTg0NzM4OTRDMDQ5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+7SNDwQAAANpJREFUeNpi+v//PwM63rz7oAk2cSYGNLBlz6EIIHUKSIejyzGCdCApNANSB4GYA4i/A7Gdj4vdGQzFQIUyQOo0EEsgGfYciE2AGp6BOExQhVxAahOaQhCQBIlD5RkYgZ5hBNKrgTiYATdYBcQRLEBCH4ifAPFEBvxAF8WDhAATAwmAJMUsQJ8aAOkEItQuAHnwIhDLEAiNtSB1YA9Cw/EIEBtiUXgeiG2AEfONUAy+AGJToMInKB6ECvgD8Q+oEIj2hynECA2gxCkglQjEIOsSoXwEICU9AwQYAJ5CiorCy+x0AAAAAElFTkSuQmCC"},d37f:function(i,t,e){"use strict";e.r(t);var s=e("ea1d"),a=e("b59c");for(var n in a)"default"!==n&&function(i){e.d(t,i,(function(){return a[i]}))}(n);e("bca1");var l,c=e("f0c5"),A=Object(c["a"])(a["default"],s["b"],s["c"],!1,null,"26698137",null,!1,s["a"],l);t["default"]=A.exports},ea1d:function(i,t,e){"use strict";var s;e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return n})),e.d(t,"a",(function(){return s}));var a=function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("v-uni-view",{class:{light:"light"==i.theme}},[s("v-uni-view",{staticClass:"bgHeader pb10 pb5 plr20 flex alcenter bdb1f"},i._l(i.marketLists,(function(t,e){return s("v-uni-view",{key:e,staticClass:"pt10 pb5 ft16 bold mr20 posRelt",class:{blue2:i.isActive==e},on:{click:function(s){arguments[0]=s=i.$handleEvent(s),i.changeTab(e,t.name)}}},[i.isActive==e?s("v-uni-image",{staticClass:"myline",attrs:{src:"/static/line_blue.png"}}):i._e(),i._v(i._s(t.name))],1)})),1),s("v-uni-view",{staticClass:"plr10 "},[s("v-uni-view",{staticClass:"flex alcenter ft12 blue3 ptb10"},[s("v-uni-view",{staticClass:"flex alcenter",staticStyle:{flex:"1.5"}},[s("v-uni-view",{staticClass:"flex alcenter",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.tapFilters(1,"currency_name")}}},[s("v-uni-text",{staticClass:"pr5"},[i._v(i._s(i.$t("home.name")))]),s("v-uni-view",{},[0==i.isfilter1?s("v-uni-image",{staticClass:"wt8 h10",attrs:{src:e("cd36")}}):1==i.isfilter1?s("v-uni-image",{staticClass:"wt8 h10",attrs:{src:e("aae6")}}):s("v-uni-image",{staticClass:"wt8 h10",attrs:{src:e("4cfc")}})],1)],1)],1),s("v-uni-view",{staticClass:"flex1 flex alcenter"},[s("v-uni-view",{staticClass:"flex alcenter",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.tapFilters(2,"now_price")}}},[s("v-uni-text",{staticClass:"pr5"},[i._v(i._s(i.$t("home.new_price")))]),s("v-uni-view",{},[0==i.isfilter2?s("v-uni-image",{staticClass:"wt8 h10",attrs:{src:e("cd36")}}):1==i.isfilter2?s("v-uni-image",{staticClass:"wt8 h10",attrs:{src:e("aae6")}}):s("v-uni-image",{staticClass:"wt8 h10",attrs:{src:e("4cfc")}})],1)],1)],1),s("v-uni-view",{staticClass:"wt70 flex alcenter jsend"},[s("v-uni-view",{staticClass:"flex alcenter",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.tapFilters(3,"change")}}},[s("v-uni-text",{staticClass:"pr5"},[i._v(i._s(i.$t("home.fu")))]),s("v-uni-view",{},[0==i.isfilter3?s("v-uni-image",{staticClass:"wt8 h10",attrs:{src:e("cd36")}}):1==i.isfilter3?s("v-uni-image",{staticClass:"wt8 h10",attrs:{src:e("aae6")}}):s("v-uni-image",{staticClass:"wt8 h10",attrs:{src:e("4cfc")}})],1)],1)],1)],1),i._l(i.marketLists[i.isActive].quotation,(function(t,e){return i.marketLists[i.isActive]?s("v-uni-navigator",{directives:[{name:"show",rawName:"v-show",value:i.marketLists&&i.marketLists[i.isActive],expression:"marketLists&&marketLists[isActive]"}],key:e,staticClass:"mb10 flex alcenter bdb1f ptb10",attrs:{url:"/pages/market/kline?legal_id="+t.legal_id+"&currency_id="+t.currency_id+"&symbol="+t.currency_name+"/"+t.legal_name}},[s("v-uni-view",{staticStyle:{flex:"1.5"}},[s("v-uni-view",[s("v-uni-text",{staticClass:"ft14 bold"},[i._v(i._s(t.currency_name))]),s("v-uni-text",{staticClass:"ft12 blue pl5"},[i._v("/"+i._s(t.legal_name))])],1),s("v-uni-view",{staticClass:"gray9 blue pt5 ft12"},[i._v(i._s(i.$t("market.volume"))+" "+i._s(i._f("toFixed4")(t.volume)))])],1),s("v-uni-view",{staticClass:"flex1"},[s("v-uni-view",{},[s("v-uni-text",{staticClass:"ft14 bold"},[i._v(i._s(i._f("toFixed2")(t.now_price)))]),s("v-uni-view",{staticClass:"pt5 ft12 blue"},[i._v("￥"+i._s(Math.floor(t.rmb_relation*t.now_price*100)/100))])],1)],1),s("v-uni-view",{staticClass:"wt70"},[s("v-uni-view",{staticClass:"tc h30 lh30 white wt70 radius2",class:["-"==t.change.substr(0,1)?"bgRed":"bgGreen"]},[i._v(i._s("-"==t.change.substr(0,1)?"":"+")+i._s(i._f("toFixed2")(t.change-0))+"%")])],1)],1):i._e()}))],2)],1)},n=[]},edc7:function(i,t,e){var s=e("4def");"string"===typeof s&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals);var a=e("4f06").default;a("d091e5d2",s,!0,{sourceMap:!1,shadowMode:!1})}}]);