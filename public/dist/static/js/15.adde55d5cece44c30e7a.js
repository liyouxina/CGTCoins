webpackJsonp([15],{O0xG:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={data:function(){return{nickname:"",pwd:"",rePwd:""}},methods:{reset:function(){var t=this,e=this.nickname,a=this.pwd,s=this.rePwd;""!=e&&""!=a&&""!=s&&(a.length>20||a.length<6||s.length>20||s.length<6?layer.msg("密码6-20位，由数字与字母组成"):a==s?this.$http({url:"/api/user/setaccount",method:"post",data:{account:e,password:a,repassword:s},headers:{Authorization:localStorage.getItem("token")}}).then(function(e){layer.msg(e.data.message),"ok"==e.data.type&&t.$router.go(-1)}):layer.msg("两次输入的密码不一致"))}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"legaltrade-set"}},[a("div",{staticClass:"contentBK"},[a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"account"},[a("div",{staticClass:"main"},[a("p",{staticClass:"main_title"},[t._v("法币交易设置")]),t._v(" "),a("div",{staticClass:"register-input"},[a("span",{staticClass:"register-item"},[t._v("昵称")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.nickname,expression:"nickname"}],staticClass:"input-main input-content",attrs:{type:"text",maxlength:"20",id:"account"},domProps:{value:t.nickname},on:{input:function(e){e.target.composing||(t.nickname=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"register-input"},[a("span",{staticClass:"register-item"},[t._v("法币资金密码（6-20位，由数字与字母组成）")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],staticClass:"input-main input-content",attrs:{type:"password",maxlength:"16",id:"pwd"},domProps:{value:t.pwd},on:{input:function(e){e.target.composing||(t.pwd=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"register-input"},[a("span",{staticClass:"register-item"},[t._v("确认法币资金密码（6-20位，由数字与字母组成）")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.rePwd,expression:"rePwd"}],staticClass:"input-main input-content",attrs:{type:"password",maxlength:"16"},domProps:{value:t.rePwd},on:{input:function(e){e.target.composing||(t.rePwd=e.target.value)}}})]),t._v(" "),a("div",{staticStyle:{"margin-top":"10px"}},[a("span",{staticClass:"register-item"}),t._v(" "),a("button",{staticClass:"register-button curPer redBg",attrs:{type:"button"},on:{click:t.reset}},[t._v("确认")])])])])])])])},staticRenderFns:[]};var i=a("VU/8")(s,n,!1,function(t){a("oYlv")},"data-v-09fc2dfd",null);e.default=i.exports},oYlv:function(t,e){}});