webpackJsonp([4],{"2iIv":function(t,s){},"q/5l":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("bOdI"),i=a.n(e),n={data:function(){var t;return t={msg:"",user:"",token:"",showConfirm:!1,showCancel:!1,hasPay:!1,showPay:!1,id:""},i()(t,"msg",{}),i()(t,"src",""),i()(t,"password",""),i()(t,"timer","--"),t},filters:{toFixeds:function(t){return(t=Number(t)).toFixed(3)}},created:function(){var t=window.localStorage.getItem("token")||"";t&&(this.token=t,this.id=this.$route.query.id||"",this.getMsg())},methods:{checkTime:function(t){return t<10&&(t="0"+t),t},downTime:function(t){var s=this,a=Date.parse(new Date)/1e3;t=t;setInterval(function(){var e=t-a,i=parseInt(e/60/60%24,10),n=parseInt(e/60%60,10),_=parseInt(e%60,10);i=s.checkTime(i),n=s.checkTime(n),_=s.checkTime(_),e>0?(s.timer=i+"时"+n+"分"+_+"秒",a++):e<0&&(s.timer="00:00:00")},1e3)},apply:function(){this.$http({url:"/api/legal/arbitrate",method:"post",data:{id:this.id},headers:{Authorization:this.token}}).then(function(t){layer.msg(t.data.message),"ok"==t.data.type&&setTimeout(function(){location.reload()},1e3)})},getMsg:function(){var t=this,s=layer.load();this.$http({url:"/api/legal_deal",params:{id:this.id},headers:{Authorization:this.token}}).then(function(a){if(layer.close(s),"ok"==a.data.type){t.msg=a.data.message,t.user=a.data.message.user_cash_info;var e,i=a.data.message;if("buy"==i.type&&0==i.is_sure)e=new Date(i.payment_at.replace(/-/g,"/")).getTime()/1e3,t.downTime(e);if("sell"==i.type&&3==i.is_sure)e=new Date(i.comp_at.replace(/-/g,"/")).getTime()/1e3,t.downTime(e)}})},getData:function(){var t=this,s=layer.load();this.$http({url:"/api/legal_deal",params:{id:this.id},headers:{Authorization:this.token}}).then(function(a){layer.close(s),"ok"==a.data.type&&(t.msg=a.data.message)})},cancel:function(){var t=this;t.showCancel=!1,layer.prompt({title:t.$t("td.pwd"),formType:1,btn:[t.$t("td.confirm"),t.$t("td.canceil")]},function(s,a){t.password=s,t.$http({url:"/api/user_legal_pay_cancel",method:"post",data:{id:t.id,password:t.password},headers:{Authorization:t.token}}).then(function(s){layer.msg(s.data.message),t.showCancel=!1,"ok"==s.data.type&&location.reload()}),layer.close(a)})},confirm:function(){var t=this;t.showConfirm=!1,layer.prompt({title:t.$t("td.pwd"),formType:1,btn:[t.$t("td.confirm"),t.$t("td.canceil")]},function(s,a){t.password=s,t.$http({url:"/api/legal_deal_sure",method:"post",data:{id:t.id,password:t.password},headers:{Authorization:t.token}}).then(function(t){layer.msg(t.data.message),"ok"==t.data.type&&setTimeout(function(){location.reload()},1e3)}).then(function(){t.showConfirm=!1}),layer.close(a)})},file:function(){var t=this,s=new FormData;s.append("file",$("#file")[0].files[0]);var a=layer.load();$.ajax({url:"/api/upload",type:"post",data:s,processData:!1,contentType:!1,success:function(s){layer.close(a),"ok"==s.type&&(t.src=s.message,t.src?t.showPay=!0:layer.msg(t.$t("zdy.upimgfail")))}})},confirmPay:function(){var t=this;if(t.showPay=!1,""==t.src)return layer.msg(this.$t("zdy.qrszfpz"));layer.prompt({title:t.$t("td.pwd"),formType:1,btn:[t.$t("td.confirm"),t.$t("td.canceil")]},function(s,a){t.password=s,t.$http({url:"/api/user_legal_pay",method:"post",data:{id:t.id,pay_orders_img:t.src,password:t.password},headers:{Authorization:t.token}}).then(function(t){layer.msg(t.data.message),"ok"==t.data.type&&setTimeout(function(){location.reload()},2e3)}).then(function(){t.showPay=!1}),layer.close(a)})},evimgs:function(t){return layer.open({type:1,area:["375px","500px"],title:"",shade:.6,anim:1,content:"<img src='"+t+"' alt='' class='openimg'>",btn:[this.$t("zdy.close")],yes:function(t){layer.close(t)}})}}},_={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"whites",attrs:{id:"legal-pay-detail"}},[a("div",{staticClass:"title bg-part radius4"},[0==t.msg.is_sure?a("span",[t._v(t._s(t.$t("td.nofinish")))]):t._e(),t._v(" "),1==t.msg.is_sure?a("span",[t._v(t._s(t.$t("td.finished")))]):t._e(),t._v(" "),2==t.msg.is_sure?a("span",[t._v(t._s(t.$t("td.ceiled")))]):t._e(),t._v(" "),3==t.msg.is_sure?a("span",[t._v(t._s(t.$t("td.payed")))]):t._e(),t._v(" "),0==t.msg.is_sure?a("div",[t._v(t._s(t.$t("fat.pwaitPay")))]):t._e(),t._v(" "),1==t.msg.is_sure?a("div",[t._v(t._s(t.$t("fat.odFinish")))]):t._e(),t._v(" "),2==t.msg.is_sure?a("div",[t._v(t._s(t.$t("fat.odCeil")))]):t._e(),t._v(" "),3==t.msg.is_sure?a("div",[t._v(t._s(t.$t("fat.payedWait")))]):t._e()]),t._v(" "),a("div",{staticClass:"info bg-part ft14 radius4"},[a("div",[a("span",[t._v(t._s(t.$t("td.tradeTotal"))+"：")]),t._v(" "),a("span",[t._v("￥ "+t._s(t._f("toFixeds")(t.msg.deal_money||"0.000"))+" ")])]),t._v(" "),a("div",{staticClass:"column"},[a("div",[a("span",[t._v(t._s("sell"==t.msg.type?this.$t("td.buyer"):this.$t("td.seller"))+"：")]),t._v(" "),a("span",[t._v(t._s(t.user.real_name))])]),t._v(" "),"bank"==t.msg.way_name?a("div",[a("span",[t._v(t._s(t.$t("fat.bank"))+":")]),t._v(" "),a("span",[t._v(t._s(t.user.bank_account)+" "+t._s(t.user.bank_name)+" "+t._s(t.user.bank_branch))])]):t._e(),t._v(" "),"ali_pay"==t.msg.way_name?a("div",[a("span",[t._v(t._s(t.$t("fat.alipay"))+":")]),t._v(" "),a("span",[t._v(t._s(t.user.alipay_account))])]):t._e(),t._v(" "),"we_chat"==t.msg.way_name?a("div",[a("span",[t._v(t._s(t.$t("fat.wechat"))+":")]),t._v(" "),a("span",[t._v(t._s(t.user.wechat_account))])]):t._e()]),t._v(" "),a("div",[a("span",[t._v(t._s(t.$t("td.price"))+"：")]),t._v(" "),a("span",[t._v("￥ "+t._s(t._f("toFixeds")(t.msg.price||"0.000")))])]),t._v(" "),a("div",[a("span",[t._v(t._s(t.$t("td.num"))+"：")]),t._v(" "),a("span",[t._v(t._s(t._f("toFixeds")(t.msg.number||"0.000")))])]),t._v(" "),a("div",[a("span",[t._v(t._s(t.$t("td.placeTime"))+"：")]),t._v(" "),a("span",[t._v(t._s(t.msg.format_create_time))])]),t._v(" "),a("div",[a("span",[t._v(t._s(t.$t("td.callWay"))+"：")]),t._v(" "),a("span",[t._v(t._s("sell"==t.msg.type?t.msg.phone:t.msg.seller_phone))])]),t._v(" "),t.msg.pay_orders_img?a("div",[a("span",[t._v(t._s(t.$t("zdy.zfpz")))]),t._v(" "),a("img",{staticClass:"pay_voucher",attrs:{src:t.msg.pay_orders_img,alt:""},on:{click:function(s){t.evimgs(t.msg.pay_orders_img)}}})]):t._e(),t._v(" "),a("div",[a("span",[t._v(t._s(t.$t("td.renum"))+"：")]),t._v(" "),a("span",[t._v(t._s(t.msg.id))])]),t._v(" "),"buy"==t.msg.type?a("div",["we_chat"==t.msg.way_name?a("div",{staticClass:"flex alcenter"},[a("span",[t._v(t._s(t.$t("td.paycode"))+"：")]),t._v(" "),a("img",{staticClass:"mt10 ",staticStyle:{width:"150px"},attrs:{src:t.msg.user_cash_info.wechat_qr_code,alt:""}})]):t._e(),t._v(" "),"ali_pay"==t.msg.way_name?a("div",{staticClass:"flex alcenter"},[a("span",[t._v(t._s(t.$t("td.paycode"))+"：")]),t._v(" "),a("img",{staticClass:"mt10",staticStyle:{width:"150px"},attrs:{src:t.msg.user_cash_info.alipay_qr_code,alt:""}})]):t._e()]):t._e(),t._v(" "),"sell"==t.msg.type?a("div",["we_chat"==t.msg.way_name?a("div",{staticClass:"flex alcenter"},[a("span",[t._v(t._s(t.$t("td.paycode"))+"：")]),t._v(" "),a("img",{staticClass:"mt10 ",staticStyle:{width:"150px"},attrs:{src:t.msg.to_pay_info.wechat_qr_code,alt:""}})]):t._e(),t._v(" "),"ali_pay"==t.msg.way_name?a("div",{staticClass:"flex alcenter"},[a("span",[t._v(t._s(t.$t("td.paycode"))+"：")]),t._v(" "),a("img",{staticClass:"mt10",staticStyle:{width:"150px"},attrs:{src:t.msg.to_pay_info.alipay_qr_code,alt:""}})]):t._e()]):t._e(),t._v(" "),0==t.msg.is_sure&&"buy"==t.msg.type?a("div",{staticClass:"payimgupload"},[a("span",{staticStyle:{display:"block"}},[t._v(t._s(t.$t("zdy.zfpz")))]),t._v(" "),a("div",{staticClass:"payimg-box"},[a("input",{attrs:{type:"file",id:"file",accept:"image/*"},on:{change:t.file}}),t._v(" "),t.src?a("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:t.src}}):a("img",{attrs:{src:"/static/imgs/addimg.png"}})])]):t._e(),t._v(" "),a("div",{staticClass:"btns"},[0==t.msg.is_sure&&"buy"==t.msg.type?a("div",{staticClass:"btn cancelBtn",on:{click:function(s){t.showCancel=!0}}},[t._v(t._s(t.$t("fat.odCeil")))]):t._e(),t._v(" "),3==t.msg.is_sure&&"sell"==t.msg.type?a("div",{staticClass:"btn",on:{click:function(s){t.showConfirm=!0}}},[t._v(t._s(t.$t("fat.receivePays")))]):t._e(),t._v(" "),0==t.msg.is_sure&&"buy"==t.msg.type?a("div",{staticClass:"btn imgbtn",on:{click:function(s){t.showPay=!0}}},[t._v("\n        "+t._s(t.$t("fat.imPay"))+"\n        ")]):t._e()])]),t._v(" "),t.showCancel?a("div",{staticClass:"cancel-box white"},[a("div",{staticClass:"content"},[a("div",[t._v(t._s(t.$t("fat.tdCeil")))]),t._v(" "),a("div",[t._v(t._s(t.$t("fat.pCeil")))]),t._v(" "),a("div",{staticClass:"yes-no flex"},[a("div",{on:{click:function(s){t.showCancel=!1}}},[t._v(t._s(t.$t("td.canceil")))]),t._v(" "),a("div",{on:{click:t.cancel}},[t._v(t._s(t.$t("td.confirm")))])])])]):t._e(),t._v(" "),t.showConfirm?a("div",{staticClass:"confirm-box"},[a("div",{staticClass:"content"},[a("div",[t._v(t._s(t.$t("fat.receivePay")))]),t._v(" "),a("div",[t._v(t._s(t.$t("fat.payReceive")))]),t._v(" "),a("div",[t._v(t._s(t.$t("fat.badClick")))]),t._v(" "),a("div",{staticClass:"yes-no flex"},[a("div",{on:{click:function(s){t.showConfirm=!1}}},[t._v(t._s(t.$t("td.canceil")))]),t._v(" "),a("div",{on:{click:t.confirm}},[t._v(t._s(t.$t("td.confirm")))])])])]):t._e(),t._v(" "),t.showPay?a("div",{staticClass:"confirm-box"},[a("div",{staticClass:"content"},[a("div",[t._v(t._s(t.$t("fat.paySure")))]),t._v(" "),a("div",[t._v(t._s(t.$t("fat.pdopay")))]),t._v(" "),a("div",[t._v(t._s(t.$t("fat.badClick")))]),t._v(" "),a("div",{staticClass:"yes-no flex"},[a("div",{on:{click:function(s){t.showPay=!1}}},[t._v(t._s(t.$t("td.canceil")))]),t._v(" "),a("div",{on:{click:t.confirmPay}},[t._v(t._s(t.$t("td.confirm")))])])])]):t._e()])},staticRenderFns:[]};var o=a("VU/8")(n,_,!1,function(t){a("2iIv")},null,null);s.default=o.exports}});