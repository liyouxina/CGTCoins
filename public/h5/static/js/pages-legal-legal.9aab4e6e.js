(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-legal-legal"],{"1db3":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-0554088c]{background-color:#102030}.uni-tab-item[data-v-0554088c]{display:inline-block}.uni-tab-item .coin[data-v-0554088c]{border-bottom:2px solid #217dc1}.scroll-v[data-v-0554088c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:%?750?%}.logo[data-v-0554088c]{height:%?45?%;width:%?45?%;border-radius:50%}.layer_box[data-v-0554088c]{width:100%;height:100%;background:rgba(0,0,0,.6);position:fixed;top:0;left:0;right:0;bottom:0;z-index:100}.layer_box .layer_opeation[data-v-0554088c]{width:100%;position:fixed;left:0;bottom:0;\n\t/* background-color: #131f30; */border-radius:%?20?% %?20?% 0 0;z-index:101}.op_header[data-v-0554088c]{background:#081926;border-radius:%?20?% %?20?% 0 0}.tab .num_price[data-v-0554088c]{height:%?54?%}.tab .num_price uni-view[data-v-0554088c]{height:%?54?%;line-height:%?50?%}.tab .num_price uni-view[data-v-0554088c]:first-child{margin-right:%?20?%}.tab .num_price .cur[data-v-0554088c]{color:#217dc1;border-bottom:2px solid #217dc1}.tab .Ipt[data-v-0554088c]{height:%?100?%;width:100%;\n\t/* border: 1px solid #485362; */border-radius:%?4?%}body.?%PAGE?%[data-v-0554088c]{background-color:#102030}",""]),t.exports=e},"2f09":function(t,e,a){"use strict";a.r(e);var i=a("e061"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"471d":function(t,e,a){"use strict";var i=a("4ea4");a("99af"),a("a9e3"),a("b680"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("5530")),s=i(a("72ab")),l=a("2f62"),c={components:{uniPopup:s.default},data:function(){return{priceDw:"￥",id:"",msg:0,box1:!1,Type:"sell",coinindex:0,legal_list:[],orderlist:[],currency_id:"",time:59,page:1,hasMore:!0,over:!1,Data:{price:"",coin_code:"--"},money:"",number:"",password:"",type:"",interval:function(){}}},filters:{chart0:function(t){return t.charAt(0)},toFixed2:function(t){return t=Number(t),t.toFixed(2)},toFixed4:function(t){return t=Number(t),t.toFixed(4)}},computed:(0,n.default)({totalPrice:function(){var t=0==this.msg?this.money||0:this.number*this.Data.price||0;return t}},(0,l.mapState)(["theme"])),onLoad:function(){uni.setNavigationBarTitle({title:this.$t("legal").legal}),this.legallist()},onShow:function(){this.$utils.setThemeTop(this.theme)},methods:{all:function(t){var e=this;0==t?e.money=Number(e.Data.limitation.max):e.number=Number(e.Data.max_number)},isshow:function(){var t=this;clearInterval(t.interval),this.box1=!this.box1},changetype:function(t){var e=this;e.Type=t,e.page=1,e.hasMore=!0,e.over=!1,e.getData()},changeCoin:function(t,e){var a=this;a.coinindex=t,a.currency_id=e,a.page=1,a.hasMore=!0,a.over=!1,a.getData()},record:function(){uni.navigateTo({url:"/pages/legal/recordlist"})},pay:function(t){var e=this;e.id=t;e.msg;var a=0==e.msg?e.money:e.number;return 0!=e.msg||a?1!=e.msg||a?(e.box1=!1,void e.togglePopup("bottom","share")):e.$utils.showLayer(e.$t("trade.p_num")):e.$utils.showLayer(e.$t("legal.p_amout"))},submit:function(){var t=this,e=0==t.msg?"money":"number",a=0==t.msg?t.money:t.number,i=t.password;if(i.length<6)return t.$utils.showLayer(t.$t("login.e_pdeal"));t.$utils.initDataToken({url:"do_legal_deal",data:{id:t.id,means:e,value:a,password:i},type:"post"},(function(e){t.$utils.showLayer(e.msg),t.cancel("share"),setTimeout((function(){uni.navigateTo({url:"/pages/legal/order?id="+e.data.id})}),1e3)}))},legallist:function(){var t=this;t.$utils.initData({url:"currency/list"},(function(e){t.legal_list=e.legal,t.currency_id=t.legal_list[0].id,t.getData()}))},getData:function(){var t=this;t.$utils.initDataToken({url:"legal_deal_platform",data:{type:t.Type,page:t.page,currency_id:t.currency_id}},(function(e){var a=e.data;uni.stopPullDownRefresh(),t.orderlist=1==t.page?a:t.orderlist.concat(a),t.over=!0,t.hasMore=!(e.page>=e.pages),console.log(t.hasMore)}))},getinfo:function(t){var e=this;e.box1=!0,e.number="",e.money="",e.password="",this.msg=1,clearInterval(e.interval),e.$utils.initDataToken({url:"legal_deal_info",data:{id:t}},(function(t){e.Data=t,e.time=59,e.interval=setInterval((function(){var t=e.time;0==t?(clearInterval(e.interval),e.box1=!1):e.time--}),1e3)}))},onPullDownRefresh:function(){this.page=1,this.getData()},onReachBottom:function(){this.hasMore&&(this.page++,this.getData())},togglePopup:function(t,e){this.type=t,"tip"===e?this.show=!0:this.$refs[e].open()},cancel:function(t){if("tip"===t)return this.show=!1;this.$refs[t].close()}}};e.default=c},"49dd":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAnCAYAAAB0Q6rCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NzdGQzI2MThGQTgxMUU4QURENkRGRDA1NDY2MjZERiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NzdGQzI2MjhGQTgxMUU4QURENkRGRDA1NDY2MjZERiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU3N0ZDMjVGOEZBODExRThBREQ2REZEMDU0NjYyNkRGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU3N0ZDMjYwOEZBODExRThBREQ2REZEMDU0NjYyNkRGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+U1MTbQAAAT5JREFUeNrsmL9qAkEQh+cuGzTRE4MgBmKbLrWFIFhZWtpbBtImpLGw8RVsA4E8heAb2FlYSRoxAcXCP5gz5jeylZDqbmVHduBbWA5uP+aOmWG9bbNeIqIOeAAh2ReXYAm64ENheQFVsjty4AkUfSxlkhG3oMbCHsmJJAvvBAn/+CQsnPAphCVJ+yybFiQccON4Azdgb7nsBfhSuoNIqMXs+KuE1WFi4RbIsr3l2eUhaMrCz+BKSILnLLwCKSHCa9/SGfi/CKVNa56bJZywE3bCZyasjvYbMAQTkIhYo0Pd/+/BnSnhb9AGfX1YFGGeAq/BK3g0JbwFn2AR0/tnOgnGfom8nt7G+lnUDPNXqpgUDkDDwCxrTDj2A1wddsJOWLbw4apKScvwSIgrd+EBZ/cdFECG7L1fY88eu/4JMAAn5SzXt3IFEQAAAABJRU5ErkJggg=="},5892:function(t,e,a){"use strict";a.r(e);var i=a("471d"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"5c94":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1QTBDOTE1MDhGQTgxMUU4ODVEMEU0NTIzRTdGQzJEMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1QTBDOTE1MThGQTgxMUU4ODVEMEU0NTIzRTdGQzJEMCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjVBMEM5MTRFOEZBODExRTg4NUQwRTQ1MjNFN0ZDMkQwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjVBMEM5MTRGOEZBODExRTg4NUQwRTQ1MjNFN0ZDMkQwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+znUR9gAAA/xJREFUeNrUmXmITVEcx+973tj3ncFIsk2ypIQsYSTZSShFIf6ZyBaiyJI9SxSPhyJkG1uY+YOJmCn7SBqNhrGVGcNk7Mv3V9+r23HfXbwz4823PnPfnHffub93zu/8zu93XsCIvDYUNQITwCjQDtQyylcfQS44B46AV9Y3A4rBk8E60MKID70BS8FesyFoeXMJOBRHxoqagDBYoxo8Eaw24leLwQzTJRrg+pDfJp71HnSSEZ5UAYwV1QHTQvgzRmOnx8EdpW0mSNLU/4gQQ5cO/eTCzVXah2g0uKW4RA2NI1zVpi2ks38x+JfGDgNl7chBzX1VsmmvqdNgL9P10rrTOOgX71W1A7TyaM8U0DpWg/PA8hgGJezj3h46DG4PdnuMEqtAgdK+ELT1OENd3BdJ5HUhrvU1uVh3mzgs/3fV1H9R0Khg8hMj74F9LlOab9MuSVUi3w9EiUziNk11G/wYbPMQh0M227WTxB1XlMUIDwU5Mc7oebBIaRvup6rxY3BtkByjwVts2kb+r53OTW/BKaWtBZMjrYtOHvSA7vAClIIE+l4iM7FE4pRIibFFSts4v0Wuk8HPwCZwlMWgkyqDZqAbGAQG0H3MZOg72Kp8pgpzZS1h7TKYqpbYDvrKkCacZr+ya43lccFdlmFWjZaSx386+PdOdxv04/mAqA/oywRGRqwEyNnAE+YZeXSTaEpgFvdZKXdugg5+dzp1hL+BWTRWKpFdYKBDB9/pOpkgjdcimz6/KW0d6RJGrCOcAVK4kDJ9pIWmZFEeA/vBfZd7q4GedJsUj6P9Vy6RxuuKfzDWYKSYC27R6ASHez+BKyCV/t6L2d4NmxmJGodvs22whhwlmy7jddGKTy8DvZn1LeDiL7GuB9WHSy2+GYskmdmptEnIawwuefh8DtlI90xhapCsjnAzJuKZ/2ioZGTzwAalvQ04Cy7S4DE+0oJ8Vi3jxW2CNmcIovXgg09jn3MBbVbPEsAZ+rf5jJP01emgro9nFKsGT2TEyOG2+dRDJ6UsoXpx07BKQuOFKEmT1G97uG6WuNVyThvHEZ63iRry9TDGzrpclB+YH2fQyEdR0tGwZWTd9A6c4JfI9lvTyYKZo4SX6kwxg1y5JQ6HdnI8Oj/KOYWbftDX99KVfqgGy85Uz+aD18BKkO7xQU04G7M1ntdJPD8ADoNC0+ACl2m7zqnP4oo1R1bSwuagM/23P8NWWaiAWWNEDL7KZMeLxEW+WA7+Qkb5Kitos7INl8yrJilvY0XpQat/xLkkgwwHWU0sqAAGy89f+ebGEQFr49jY7WaJpf5ON4tFZ7yomOlqqjUOGzZ7/xTubkncMMpTn5iXSJJ0kCXYH/0WYACFOuNNhEvkXAAAAABJRU5ErkJggg=="},"6f3f":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2MTIyMDY5RThGQTgxMUU4QjA3NERCOEVBRkM4MjY1NCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MTIyMDY5RjhGQTgxMUU4QjA3NERCOEVBRkM4MjY1NCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYxMjIwNjlDOEZBODExRThCMDc0REI4RUFGQzgyNjU0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjYxMjIwNjlEOEZBODExRThCMDc0REI4RUFGQzgyNjU0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+NmmPyAAAA3BJREFUeNrUmX1oTWEcx88919qLeRsji0ZMQ8aSd6FkoiSpETX84R/KH4pI5P3lH2//Yc0fKySTyR+4KKvZvLQijbGEkaEhe7FNM98f38vZ09nuOfc+d7vnW5/Wnufc7Xue83t+z+93rs+4kWxYlARWghUgE3SY7EY1gSpwCZwD34MTPovhySAfTDJiS8/AelAqv5gczAaBGDQrGguug1lBw71BIRhgxK6S6bG/GM4F443Y10iwVgyvNryjXJPZwCsaYTKVeUUJYrjdQ4bbe2n4Iz9BC/CDxGg7DtdwOfN2GXgNGkAcSAUTwFyQAwbrNiwnXR1+pji8/i44QLOhNBSsA1tBP01+v5guLj4MFjg0K/oADoLZ4IGuFXZqeBfYznh1q6dgEcOnWwxfAfuUsaVgD0i3uV5ieC+YZ32UrAI/R3vTNXFlrZrImxClsZIKSjZeEciQYxSMBq2cewsOgaPRXOFb4Lky9hHcZ41aocy1McbrwT2L2aAKrbVtNFa41GasFsxhCnuvzP0CGxlCtUxrOQyTvjRbCca4yEyuDL/pZLzVxqz6FHaCqaAEXGVINILdoA/DZhnI481rMRzOwTIEnAGPWAnahcAP8IlP8DjYD9boMJzh0mwS26yz4LLDz7zjBq22yUauN918l4Z3gGuKWfkfCTbXJv45af9LVvlUpIZnctM4UTo5rZgKsJEcZxnPZPYJKOXtNq542IZl/pjDfk9u7KZSrvqZKQayd7SGTgrn/Jbxb2ztIzrpZGXOc2eHivdKZayBT0kOkIeW8QqOzWDOtqpMRy2xkK32qBCdbZPNeD0zgl3qa7SryHQYDsZzdhfzX3k4RKrhuvJsDXd/KuuHLPAYvGLspfKGyiM0vFhXAV8MboMtXayCxOl0HtHhaBqbhHgdBbzc+ckQj2wK2Bym2RSmxHhdMRzn8LojbI3cKI1laZaujsNtyVoAToBhDj9ToBT82rtmJ9oEVoGL4A54wZQVx7DKYsUnzUAVU2ePGhYNAhtIG/O0XzmOpfR8wnm/7jY/qm91lGIo4iwRbfmcbhCf4R35xHCzhwy3mNyhXlGNGL7gIcNFJmvdag+YlZydb7KrzeukNo0VtbJRrTMtVb68sHsZg2bl3cgSvoXq8E2owd5N3g8sN/5+zZTYQyababSYdca/l4i/BRgAqFqymY7QN6sAAAAASUVORK5CYII="},"72ab":function(t,e,a){"use strict";a.r(e);var i=a("cab1"),n=a("2f09");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("ece2");var l,c=a("f0c5"),o=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"30accbc0",null,!1,i["a"],l);e["default"]=o.exports},"74b0":function(t,e,a){var i=a("bf78");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("7e429216",i,!0,{sourceMap:!1,shadowMode:!1})},7884:function(t,e,a){var i=a("1db3");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("25390914",i,!0,{sourceMap:!1,shadowMode:!1})},"9c8e":function(t,e,a){"use strict";a.r(e);var i=a("a5c3"),n=a("5892");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("d5da");var l,c=a("f0c5"),o=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"0554088c",null,!1,i["a"],l);e["default"]=o.exports},a5c3:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"legal",class:{light:"light"==t.theme}},[i("v-uni-view",{staticClass:"fixed lf0 bgBlack zdx100 w100"},[i("v-uni-view",{staticClass:"flex between alcenter content plr20 w100 h50"},[i("v-uni-view",{staticClass:"content-left flex baseline jscenter bold"},[i("v-uni-view",{class:"sell"==t.Type?" ft24 mr10":"gray75 ft14 mr10",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changetype("sell")}}},[t._v(t._s(t.$t("legal.ibuy")))]),i("v-uni-view",{class:"buy"==t.Type?" ft24":"gray75 ft14",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changetype("buy")}}},[t._v(t._s(t.$t("legal.isell")))])],1),i("v-uni-navigator",{attrs:{url:"/pages/legal/recordlist?id="+t.currency_id}},[i("v-uni-image",{staticClass:"wt20 h20 ml10",attrs:{src:a("d0eb"),mode:"aspectFit"}})],1)],1),i("v-uni-view",{staticClass:"bdb27 bgPart rat4"},[i("v-uni-scroll-view",{staticClass:"tab-bar nowrap plr10 flex alcenter",attrs:{"scroll-x":"true"}},t._l(t.legal_list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"uni-tab-item"},[i("v-uni-view",{class:t.coinindex==a?"mlr10 h40 lh40 ft13 gray75 blue21 coin":"mlr10 h40 lh40 ft13 gray75",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.changeCoin(a,e.id)}}},[t._v(t._s(e.name))])],1)})),1)],1)],1),i("v-uni-view",{staticClass:"currency pt100"},[t._l(t.orderlist,(function(e){return i("v-uni-view",{key:e.id,staticClass:"gray75 flex column w100 plr20 ptb10 bdb27"},[i("v-uni-view",{staticClass:"flex between mt5"},[i("v-uni-view",{staticClass:" flex alcenter"},[e.seller_name?i("v-uni-view",{staticClass:"logo bgBlue2 ft12 flex alcenter jscenter white"},[t._v(t._s(t._f("chart0")(e.seller_name||"")))]):t._e(),i("v-uni-text",{staticClass:"ml10 ft14"},[t._v(t._s(e.seller_name))])],1),i("v-uni-view",{staticClass:"flex alcenter"})],1),i("v-uni-view",{staticClass:"flex between mt10"},[i("v-uni-view",{staticClass:"flex alcenter"},[i("v-uni-text",{},[t._v(t._s(t.$t("trade.num")))]),i("v-uni-text",{staticClass:"mlr5"},[t._v(t._s(t._f("toFixed4")(e.surplus_number)))]),i("v-uni-text",{},[t._v(t._s(e.currency_name))])],1),i("v-uni-view",{staticClass:"flex alcenter"},[i("v-uni-text",{},[t._v(t._s(t.$t("legal.price")))])],1)],1),i("v-uni-view",{staticClass:"flex between mt5"},[i("v-uni-view",{staticClass:"flex alcenter"},[i("v-uni-text",{},[t._v(t._s(t.$t("legal.limit")))]),i("v-uni-text",{staticClass:"pl5"},[t._v(t._s(t._f("toFixed2")(e.min_number))+t._s(e.currency_name)+"-"+t._s(t._f("toFixed2")(e.max_number))+t._s(e.currency_name))])],1),i("v-uni-view",{staticClass:"flex alcenter"},[i("v-uni-text",{staticClass:"blue21 ft16"},[t._v(t._s(t.priceDw)+" "+t._s(e.price))])],1)],1),i("v-uni-view",{staticClass:"flex between mt5"},[i("v-uni-view",{staticClass:"flex alcenter"},["ali_pay"==e.way?i("v-uni-image",{staticClass:"wt15 h15 mr5",attrs:{src:a("5c94"),mode:"aspectFit"}}):t._e(),"we_chat"==e.way?i("v-uni-image",{staticClass:"wt15 h15 mr5",attrs:{src:a("6f3f"),mode:"aspectFit"}}):t._e(),"bank"==e.way?i("v-uni-image",{staticClass:"wt15 h15 mr5",attrs:{src:a("49dd"),mode:"aspectFit"}}):t._e()],1),i("v-uni-view",{staticClass:"flex alcenter jscenter h25 plr20 bgBlue2 radius2",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.getinfo(e.id)}}},[i("v-uni-text",{staticClass:"white ft14"},[t._v(t._s("sell"==t.Type?t.$t("legal.buy"):t.$t("legal.sell")))])],1)],1)],1)})),i("v-uni-view",{class:["tc pt30 pt100 pb100 hidden",{block:0===t.orderlist.length&&t.over}]},[i("v-uni-image",{staticClass:"h50 wt50",attrs:{src:"/static/image/nodata.png"}}),i("v-uni-view",{staticClass:"gray7"},[t._v(t._s(t.$t("home.norecord")))])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.hasMore&&t.orderlist.length>10,expression:"!hasMore && orderlist.length>10"}],staticClass:"tc gray7 ptb20"},[t._v(t._s(t.$t("home.nomore")))])],2),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.box1,expression:"box1"}],staticClass:"layer_box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isshow.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"layer_opeation bgHeader",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[i("v-uni-view",{staticClass:"bggray flex between alcenter plr15 ptb10"},[i("v-uni-view",{staticClass:" flex column"},[i("v-uni-view",{staticClass:"ft20 ft16"},[i("v-uni-text",[t._v(t._s("sell"==t.Type?t.$t("legal.buy"):t.$t("legal.sell")))]),i("v-uni-text",[t._v(t._s(t.Data.currency_name))])],1),i("v-uni-view",{staticClass:"mt5 ft14"},[i("v-uni-text",[t._v(t._s(t.$t("legal.price")))]),t.Data.price?i("v-uni-text",{staticClass:"blue21 price pl5"},[t._v(t._s(t.priceDw)+" "+t._s(t._f("toFixed2")(t.Data.price)))]):t._e(),i("v-uni-text",{staticClass:"blue21 price pl5"},[t._v(t._s(t.Data.coin_code))])],1)],1),t.Data.currency_logo?i("v-uni-view",{staticClass:"tc"},[i("v-uni-image",{staticClass:"wt30 h30 mr5",attrs:{src:t.Data.currency_logo,mode:"aspectFit"}})],1):t._e()],1),i("v-uni-view",{staticClass:"mtb10 tab flex column plr15"},[i("v-uni-view",{staticClass:"num_price flex alcenter gray75 ft14"},[i("v-uni-view",{class:{cur:1==t.msg},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.msg=1}}},[t._v(t._s("sell"==t.Type?t.$t("legal.buy"):t.$t("legal.sell"))+t._s(t.$t("trade.num")))])],1),1==t.msg?i("v-uni-view",{staticClass:"flex between alcenter Ipt ft13 pl10 mt10 bd3a"},[i("v-uni-input",{staticClass:"flex1  h25",attrs:{type:"number",placeholder:"sell"==t.Type?t.$t("legal.buy")+t.$t("legal.num"):t.$t("legal.sell")+t.$t("legal.num"),value:""},model:{value:t.number,callback:function(e){t.number=e},expression:"number"}}),i("v-uni-view",{staticClass:"ptb10 flex w40 jscenter w40"},[i("v-uni-text",{staticClass:"white coin_code flex1 pr10 tr bdr_input"},[t._v(t._s(t.Data.currency_name))]),i("v-uni-text",{staticClass:"plr10 blue21 tc",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.all(1)}}},[t._v(t._s(t.$t("trade.all"))+t._s("sell"==t.Type?t.$t("trade.buy"):t.$t("trade.sell")))])],1)],1):t._e(),t.Data.limitation?i("v-uni-view",{staticClass:"gray75 mt5"},[i("v-uni-text",[t._v(t._s(t.$t("legal.limit")))]),i("v-uni-text",{staticClass:"limit pl5"},[t._v(t._s(t.Data.min_number)+t._s(t.Data.currency_name)+"-"+t._s(t.Data.max_number)+t._s(t.Data.currency_name))])],1):t._e(),i("v-uni-view",{staticClass:"ft14 flex alcenter between mt10"},[i("v-uni-text",{staticClass:"gray75"},[t._v(t._s(t.$t("legal.allmoney")))]),i("v-uni-text",{staticClass:"blue21 ft16 total"},[t._v(t._s(t.priceDw)+" "+t._s(t._f("toFixed2")(t.totalPrice)))])],1)],1),i("v-uni-view",{staticClass:"flex between alcenter  plr15 ft14 ptb10"},[i("v-uni-view",{staticClass:"bgGray radius2 ptb10 flex1 tc mr10 gray3",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isshow.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cutdown"},[t._v(t._s(t.time))]),i("v-uni-text",[t._v("s"+t._s(t.$t("legal.autocancel")))])],1),i("v-uni-view",{staticClass:"bgBlue2 radius2 ptb10 flex1 tc doit pointer ml5 white",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pay(t.Data.id)}}},[t._v(t._s(t.$t("legal.do")))])],1)],1)],1),i("uni-popup",{ref:"share",attrs:{type:t.type,custom:!0}},[i("v-uni-view",{staticClass:"uni-share bgPart"},[i("v-uni-view",{staticClass:"uni-share-content"},[i("v-uni-view",{staticClass:"uni-share-title tc h40 lh40 bdb_1e ft16"},[t._v(t._s(t.$t("login.s_dealpwd")))]),i("v-uni-view",{staticClass:"flex alcenter ptb20 plr20"},[i("v-uni-text",[t._v(t._s(t.$t("login.s_dealpwd")))]),i("v-uni-input",{staticClass:"h40 flex1 plr15 ml10 bd_input radius2",attrs:{type:"password",placeholder:t.$t("login.e_pdeal")},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),i("v-uni-view",{staticClass:"bgBlue tc h40 lh40 white",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v(t._s(t.$t("login.e_confrim")))])],1)],1)],1)],1)},s=[]},bf78:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".uni-popup[data-v-30accbc0]{position:fixed;top:0;top:0;bottom:0;left:0;right:0;z-index:101;\n\t/* z-index: 99; */overflow:hidden}.uni-popup__mask[data-v-30accbc0]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:998;background:rgba(0,0,0,.4);opacity:0}.uni-popup__mask.ani[data-v-30accbc0]{-webkit-transition:all .3s;transition:all .3s}.uni-popup__mask.uni-bottom[data-v-30accbc0],\n.uni-popup__mask.uni-center[data-v-30accbc0],\n.uni-popup__mask.uni-top[data-v-30accbc0]{opacity:1}.uni-popup__wrapper[data-v-30accbc0]{position:absolute;z-index:999;box-sizing:border-box}.uni-popup__wrapper.ani[data-v-30accbc0]{-webkit-transition:all .3s;transition:all .3s}.uni-popup__wrapper.top[data-v-30accbc0]{top:0;left:0;width:100%;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.uni-popup__wrapper.bottom[data-v-30accbc0]{bottom:0;left:0;width:100%;-webkit-transform:translateY(100%);transform:translateY(100%)}.uni-popup__wrapper.center[data-v-30accbc0]{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transform:scale(1.2);transform:scale(1.2);opacity:0}.uni-popup__wrapper-box[data-v-30accbc0]{position:relative;box-sizing:border-box}.uni-popup__wrapper.uni-custom .uni-popup__wrapper-box[data-v-30accbc0]{\n\t/* padding: 30upx; */background:#131f30}.uni-popup__wrapper.uni-custom.center .uni-popup__wrapper-box[data-v-30accbc0]{position:relative;max-width:80%;max-height:80%;overflow-y:scroll}.uni-popup__wrapper.uni-custom.bottom .uni-popup__wrapper-box[data-v-30accbc0],\n.uni-popup__wrapper.uni-custom.top .uni-popup__wrapper-box[data-v-30accbc0]{width:100%;max-height:500px;overflow-y:scroll}.uni-popup__wrapper.uni-bottom[data-v-30accbc0],\n.uni-popup__wrapper.uni-top[data-v-30accbc0]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-popup__wrapper.uni-center[data-v-30accbc0]{-webkit-transform:scale(1);transform:scale(1);opacity:1}",""]),t.exports=e},cab1:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.showPopup?a("v-uni-view",{staticClass:"uni-popup"},[a("v-uni-view",{staticClass:"uni-popup__mask",class:[t.ani,t.animation?"ani":"",t.custom?"":"uni-custom"],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close(!0)}}}),a("v-uni-view",{staticClass:"uni-popup__wrapper",class:[t.type,t.ani,t.animation?"ani":"",t.custom?"":"uni-custom"],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close(!0)}}},[a("v-uni-view",{staticClass:"uni-popup__wrapper-box",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[t._t("default")],2)],1)],1):t._e()},s=[]},d0eb:function(t,e){t.exports="data:image/png;base64,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"},d5da:function(t,e,a){"use strict";var i=a("7884"),n=a.n(i);n.a},e061:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniPopup",props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},custom:{type:Boolean,default:!1},maskClick:{type:Boolean,default:!0},show:{type:Boolean,default:!0}},data:function(){return{ani:"",showPopup:!1}},watch:{show:function(t){t?this.open():this.close()}},created:function(){},methods:{clear:function(){},open:function(){var t=this;this.$emit("change",{show:!0}),this.showPopup=!0,this.$nextTick((function(){setTimeout((function(){t.ani="uni-"+t.type}),30)}))},close:function(t){var e=this;!this.maskClick&&t||(this.$emit("change",{show:!1}),this.ani="",this.$nextTick((function(){setTimeout((function(){e.showPopup=!1}),300)})))}}};e.default=i},ece2:function(t,e,a){"use strict";var i=a("74b0"),n=a.n(i);n.a}}]);