webpackJsonp([8],{fEWD:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"allmarket",data:function(){return{token:"",current:0,topnow:1,sortindex:"",direction:!0,quoList:[],selectedName:"",typeList:[{type:this.$t("market.selfmarket")},{type:this.$t("market.allmarket")}],classtify:[{text:this.$t("market.symbol"),key:"at"},{text:this.$t("market.newprice"),key:"now_price"},{text:this.$t("market.change"),key:"change"},{text:this.$t("market.highprice"),key:""},{text:this.$t("market.lowprice"),key:""},{text:this.$t("market.vol"),key:""}],marketList:[],myAdd:[]}},filters:{toFixeds:function(e){return(e=Number(e)).toFixed(2)}},created:function(){this.token=window.localStorage.getItem("token")||"",window.localStorage.getItem("current")&&(this.current=window.localStorage.getItem("current")),this.token,this.topnow=1,this.getData(),this.connect()},beforeCreate:function(){document.querySelector("html").setAttribute("style","background-color:#fff;")},beforeDestroy:function(){document.querySelector("html").removeAttribute("style")},methods:{changeType:function(e){this.topnow=e},changeLegal:function(e,t){this.current=e,this.selectedName=t,window.localStorage.setItem("current",this.current),window.localStorage.setItem("selectedName",this.selectedName),this.getData()},godeal:function(e,t,n,a,i,o,s,c,r,l){var d=t+"/"+i;window.localStorage.setItem("downUp",o),window.localStorage.setItem("legal_id_cur",n),window.localStorage.setItem("shareNum",s),window.localStorage.setItem("legal_id",a),window.localStorage.setItem("currency_id",n),window.localStorage.setItem("currency_name",t),window.localStorage.setItem("legal_name",i),window.localStorage.setItem("index1",this.current),window.localStorage.setItem("index2",e),window.localStorage.setItem("symbol",d),window.localStorage.setItem("dealDownUp",o),window.localStorage.setItem("dealLegalId",a),window.localStorage.setItem("dealCurrencyId",n),window.localStorage.setItem("dealCurrencyName",t),window.localStorage.setItem("dealLegalName",i),window.localStorage.setItem("dealIndex1",this.current),window.localStorage.setItem("dealIndex2",e),window.localStorage.setItem("dealSymbol",d),this.$router.push({path:"/dealCenter"})},getData:function(){var e=this,t=this;this.axios.get("/api/currency/quotation_new",{}).then(function(n){var a=n.data.message;e.myAdd.length&&a.forEach(function(t,n){e.myAdd.forEach(function(e,n){t.id==e.legal_id&&(t.quotation.find(function(t){return t.currency_id==e.currency_id}).added=!0)})}),t.quoList=a;for(var i=[],o=0;o<a.length;o++)i[o]=a[o].quotation;var s=i[0][0];t.marketList=i,window.localStorage.getItem("selectedName")?t.selectedName=window.localStorage.getItem("selectedName"):(t.selectedName=s.legal_name,window.localStorage.setItem("selectedName",t.selectedName))}).catch(function(e){e.response})},connect:function(){var e=this;e.$socket.emit("login",localStorage.getItem("user_id")),e.$socket.on("daymarket",function(t){"daymarket"==t.type&&e.selectedName&&e.selectedName==t.legal_name&&e.marketList.forEach(function(e,n){var a=e.findIndex(function(e,n){return e.currency_id==t.currency_id&&e.legal_id==t.legal_id});-1!=a&&(e[a].now_price=t.now_price,e[a].change=t.change,e[a].high=t.high,e[a].low=t.low)})})},sortData:function(e,t){this.direction=e===this.sortindex&&!this.direction,this.sortindex=e;var n=t,a=1==this.direction?"up":"down";this.marketList[this.current].sort(function(e,t){return"at"==n?"up"==a?e.currency_name.charCodeAt()-t.currency_name.charCodeAt():t.currency_name.charCodeAt()-e.currency_name.charCodeAt():"up"==a?e[n]-t[n]:t[n]-e[n]})},addDelete:function(e,t){var n=this;this.token?this.$http({url:"/api/user_match/"+e,method:"post",data:{id:t},headers:{Authorization:this.token}}).then(function(e){layer.msg(e.data.message),n.getMyAdd()}):layer.msg("请先登录")},getMyAdd:function(){var e=this;this.token?this.$http({url:"/api/user_match/list",headers:{Authorization:this.token}}).then(function(t){if("ok"==t.data.type){var n=t.data.message.data;e.myAdd=n,e.getData()}}):"zh"==this.$i18n.locale?layer.msg("请先登录"):layer.msg("Please sign in")}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"allmarket"},[n("div",{staticClass:"container_nav"},[n("p",{staticClass:"tc white ft16"},[e._v(e._s(e.$t("header.markets")))])]),e._v(" "),n("div",{staticClass:"innerbox"},[n("div",{staticClass:"inner_box"},[n("div",{staticClass:"nav_top_top flex ft14"},e._l(e.typeList,function(t,a){return 1==a?n("p",{key:a,class:["pointer",{select:e.topnow==a}],on:{click:function(t){e.changeType(a)}}},[0==a?n("i",{staticClass:"iconfont icon-pingjiaxingxing",staticStyle:{color:"#596a7a"}}):e._e(),e._v("\n          "+e._s(t.type)+"\n        ")]):e._e()})),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:1==e.topnow,expression:"topnow==1"}],staticClass:"nav_top flex"},e._l(e.quoList,function(t,a){return n("p",{class:["pointer",{select:e.current==a}],on:{click:function(n){e.changeLegal(a,t.name)}}},[e._v(e._s(t.name))])})),e._v(" "),n("div",{staticClass:"coinbox ft12 rbom"},[n("div",{staticClass:"flex classfity txtgray"},e._l(e.classtify,function(t,a){return n("div",{class:["flex alcenter",{jscenter:0!=a}],on:{click:function(n){e.sortData(a,t.key)}}},[n("span",[e._v(e._s(t.text))]),e._v(" "),""!=t.key?n("p",{staticClass:"flex column between"},[n("span",{class:["up",{sort:a===e.sortindex&&e.direction}]}),e._v(" "),n("span",{class:["down",{sort:a===e.sortindex&&!e.direction}]})]):e._e()])})),e._v(" "),1==e.topnow?n("ul",e._l(e.marketList,function(t,a){return e.current==a?n("li",e._l(t,function(t,a){return 1==t.is_display?n("div",{staticClass:"flex coinlist alcenter curPer"},[n("p",{staticClass:"flex alcenter"},[t.added?n("span",{staticClass:"iconfont ft14 blue icon-pingjiaxingxing",on:{click:function(n){e.addDelete("del",t.id)}}}):n("span",{staticClass:"iconfont ft14 gray icon-pingjiaxingxing",on:{click:function(n){e.addDelete("add",t.id)}}}),e._v(" "),n("span",{staticClass:"ml5"},[e._v(e._s(t.currency_name))])]),e._v(" "),n("p",[n("span",[e._v(e._s(t.now_price))]),e._v(" "),n("span",{staticStyle:{"font-size":"12px"}},[e._v("≈ "+e._s((t.now_price*t.rmb_relation).toFixed(4))+" CNY")])]),e._v(" "),n("p",{class:["tl","change","green",{red:t.change<0}]},[t.change>0?n("span",[e._v("\n                  +"+e._s(e._f("toFixeds")(t.change||"0.00"))+"%\n                ")]):n("span",[e._v("\n                  "+e._s(e._f("toFixeds")(t.change||"0.00"))+"%\n                ")])]),e._v(" "),n("p",[e._v(e._s(t.high||0))]),e._v(" "),n("p",[e._v(e._s(t.low||0))]),e._v(" "),n("p",[e._v(e._s(t.volume))])]):e._e()})):e._e()})):n("ul",e._l(e.marketList,function(t,a){return n("li",e._l(t,function(t,a){return 1==t.is_display&&t.added?n("div",{staticClass:"flex coinlist alcenter curPer"},[n("p",{staticClass:"flex alcenter"},[n("span",{staticClass:"iconfont ft14 blue icon-pingjiaxingxing",on:{click:function(n){e.addDelete("del",t.id)}}}),e._v(" "),n("span",{staticClass:"ml5"},[e._v(e._s(t.currency_name)+"/"+e._s(t.legal_name))])]),e._v(" "),n("p",[e._v(e._s(t.now_price))]),e._v(" "),n("p",{class:["tl","change","green",{red:t.change<0}]},[n("span",[e._v(e._s(e._f("toFixeds")(t.change||"0.00"))+"% ")])]),e._v(" "),n("p",[e._v(e._s(t.high||0))]),e._v(" "),n("p",[e._v(e._s(t.low||0))]),e._v(" "),n("p",[e._v(e._s(t.volume))])]):e._e()}))}))])])])])},staticRenderFns:[]};var o=n("VU/8")(a,i,!1,function(e){n("lBuo")},"data-v-60fd9c24",null);t.default=o.exports},lBuo:function(e,t){}});