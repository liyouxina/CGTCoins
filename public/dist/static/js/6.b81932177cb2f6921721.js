webpackJsonp([6],{mTUA:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={data:function(){return{list:[],page:1}},filters:{toFixeds:function(t){return(t=Number(t)).toFixed(3)},strFirst:function(t){return t.substr(0,1)}},created:function(){var t=window.localStorage.getItem("token")||"";t&&(this.token=t,this.getList())},methods:{getList:function(){var t=this;this.$http({url:"/api/my_seller",headers:{Authorization:this.token}}).then(function(s){if("ok"==s.data.type){var e=s.data.message.data;e.length&&(t.list=e)}})}}},a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"whites",attrs:{id:"myshops"}},[e("div",{staticClass:"title bgf8"},[t._v(t._s(t.$t("fat.myshops")))]),t._v(" "),e("div",{staticClass:"list-box bgf8"},[e("div",{staticClass:"list-header flex"},[e("div",[t._v(t._s(t.$t("fat.name")))]),t._v(" "),e("div",[t._v(t._s(t.$t("fat.fiatSub")))]),t._v(" "),e("div",[t._v(t._s(t.$t("fat.register_time")))]),t._v(" "),e("div",[t._v(t._s(t.$t("fat.shoper_balance")))]),t._v(" "),e("div",[t._v(t._s(t.$t("asset.frezz")))]),t._v(" "),e("div",[t._v(t._s(t.$t("td.do")))])]),t._v(" "),e("ul",{staticClass:"list"},t._l(t.list,function(s,i){return e("li",{key:i,staticClass:"flex bdb"},[e("div",{staticClass:"flex"},[e("span",{staticClass:"icon"},[t._v(t._s(t._f("strFirst")(s.name||"")))]),t._v(" "),e("span",[t._v(t._s(s.name))])]),t._v(" "),e("div",[t._v(t._s(s.currency_name))]),t._v(" "),e("div",[t._v(t._s(s.create_time))]),t._v(" "),e("div",[t._v(t._s(t._f("toFixeds")(s.legal_balance||"0.000")))]),t._v(" "),e("div",[t._v(t._s(t._f("toFixeds")(s.lock_seller_balance||"0.000")))]),t._v(" "),e("div",[e("router-link",{attrs:{to:{path:"/legalShopDetail",query:{id:s.id}}}},[t._v(t._s(t.$t("fat.enterShop")))])],1)])}))])])},staticRenderFns:[]};var _=e("VU/8")(i,a,!1,function(t){e("w/+L")},null,null);s.default=_.exports},"w/+L":function(t,s){}});