webpackJsonp([11],{Zv1c:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{token:"",type:1,seller_balance:"",user_balance:"",storeid:"",name:"",types:[this.$t("fat.business"),this.$t("fat.user")],number:"",id:""}},created:function(){this.id=this.$route.query.id||"",this.getinfo()},methods:{getinfo:function(){var t=this;this.token=window.localStorage.getItem("token")||"",this.$http({url:"/api/seller_info",params:{id:this.id},method:"get",headers:{Authorization:this.token}}).then(function(e){"ok"==e.data.type&&(t.seller_balance=e.data.message.seller_balance,t.user_balance=e.data.message.user_legal_balance,t.name=e.data.message.currency_name)})},all:function(){1==this.type?this.number=this.seller_balance:this.number=this.user_balance},transfer:function(){var t=this;if(""!=this.number){var e={};e.number=this.number,e.type=this.type,e.seller_id=this.id,this.$http({url:"/api/seller/transfer",method:"post",data:e,headers:{Authorization:this.token}}).then(function(e){layer.msg(e.data.message),t.number="",t.getinfo()})}else layer.msg(this.$t("asset.pNum"))}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"transfer-legal"}},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("asset.transfer")))]),t._v(" "),a("div",{staticClass:"types"},[a("div",{staticClass:"types-l"},[a("div",[t._v(t._s(t.$t("asset.from")))]),t._v(" "),a("div",[t._v(t._s(t.$t("asset.to")))])]),t._v(" "),a("div",{staticClass:"types-r"},[a("div",[a("div",[t._v(t._s(t.types[0]))]),t._v(" "),a("div",[t._v(t._s(t.types[1]))])]),t._v(" "),a("img",{attrs:{src:s("Zzt/"),alt:""},on:{click:function(e){t.types.reverse(),t.number="",t.type=1==t.type?2:1}}})])]),t._v(" "),a("div",{staticClass:"number"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"number"}],staticClass:"bdb input_color",attrs:{type:"number",placeholder:t.$t("asset.pNum")},domProps:{value:t.number},on:{input:function(e){e.target.composing||(t.number=e.target.value)}}}),t._v(" "),a("span",{staticStyle:{color:"#61688a"}},[t._v(t._s(t.name))]),t._v(" "),a("span",{staticClass:"all",on:{click:t.all}},[t._v(t._s(t.$t("td.all")))])]),t._v(" "),a("div",{staticClass:"balance",staticStyle:{"line-height":"60px",margin:"20px 0 0 0px"}},[t._v(t._s(t.$t("fat.busbalance"))+"："+t._s(t.seller_balance))]),t._v(" "),a("div",{staticClass:"balance",staticStyle:{margin:"5px 0 30px 0"}},[t._v(t._s(t.$t("fat.userbalance"))+"："+t._s(t.user_balance))]),t._v(" "),a("button",{staticClass:"transfer",attrs:{type:"button"},on:{click:t.transfer}},[t._v(t._s(t.$t("asset.transfer")))])])},staticRenderFns:[]};var i=s("VU/8")(a,n,!1,function(t){s("pY/4")},"data-v-3bae0bb1",null);e.default=i.exports},"pY/4":function(t,e){}});