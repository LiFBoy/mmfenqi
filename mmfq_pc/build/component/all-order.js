"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),R_AllOrder=function(e){function t(e){_classCallCheck(this,t);var a=_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,e));return a.state={data:[],myOrderResponse:[],abc:[],paid_number:"",completed_number:"",using_number:"",cancel_number:"",refund_number:"",id:"",pic_img:[],length:"-1",index:1,blockOrnone:!1},a.config={width:"400px",height:"400px",position:"fixed",zIndex:10,marginLeft:"-200px",left:"50%",top:"50%",marginTop:"-200px"},a.content={position:"relative",backgroundColor:"#FFFFff",minHeight:100,textAlign:"left"},a}return _inherits(t,e),_createClass(t,[{key:"loadComments",value:function(e){var t=this;"-1"==e?$(".top ul li").eq(0).addClass("color_fd").siblings("li").removeClass("color_fd"):$(".top ul li").eq(e).addClass("color_fd").siblings("li").removeClass("color_fd");var a={orderStatus:e};$.ajax({type:"post",url:"/pc/computer/query_my_order",data:a,dataType:"json",success:function(e){console.log(e),t.setState({data:e,myOrderResponse:e.data.myOrderResponse,paid_number:e.data.paid_number,completed_number:e.data.completed_number,using_number:e.data.using_number,cancel_number:e.data.cancel_number,refund_number:e.data.refund_number,length:e.data.myOrderResponse.length})}})}},{key:"detail",value:function(e){window.open("my-detail.html?id="+e)}},{key:"componentDidMount",value:function(){this.loadComments("-1")}},{key:"getType",value:function(e){switch(e){case"1":return"待支付";case"2":return"已支付";case"3":return"已完成";case"4":return"已取消";case"5":return"退款审核中";case"6":return"退款成功"}}},{key:"cancel_order",value:function(e){var t=this;this.setState({blockOrnone:!0}),this.config={issure:!1,iscancle:!1,img:"../../build/static/images/ca_od.jpg",text:"确认取消订单?",yescb:function(){var a={orderId:e};$.ajax({url:"/pc/computer/cancel_order",type:"post",data:a,dataType:"json",success:function(e){"0"==e.result&&(t.setState({blockOrnone:!1}),window.location.reload())}})},nocb:function(e){t.setState({blockOrnone:e})}}}},{key:"toPay",value:function(e){$.ajax({url:"/pc/computer/to_pay_order",type:"post",data:{orderId:e},dataType:"json",success:function(e){"0"==e.result&&(console.log(e),window.open("my-order-detail.html?orderId="+e.data.orderInfo.orderId+"&orderNo="+e.data.orderInfo.orderNo+"&orderName="+e.data.orderInfo.orderName+"&downpayAmount="+e.data.orderInfo.downpayAmount+"&creditPay="+e.data.orderInfo.creditPay+"&telephone="+e.data.orderInfo.telephone+"&startPhone="+e.data.orderInfo.starPhone))}.bind(this)})}},{key:"render",value:function(){var e=this;console.log(this.state.pic_img),console.log(this.state.blockOrnone);var t=this.state.length;return React.createElement("div",{style:{float:"left"}},React.createElement(R_Flex,{config:this.config,blockOrnone:this.state.blockOrnone}),React.createElement("div",{className:"wrap-content"},React.createElement("div",{className:"wrap-content-right"},React.createElement("div",null,React.createElement("div",{className:"top"},React.createElement("ul",null,React.createElement("li",{className:"color_fd",onClick:this.loadComments.bind(this,"-1")},"所有订单"),React.createElement("li",{onClick:this.loadComments.bind(this,"1")},"待支付 ",React.createElement("span",{style:{display:0==this.state.paid_number?"none":"inline-block"}},"(",this.state.paid_number,")")),React.createElement("li",{onClick:this.loadComments.bind(this,"2")},"已支付 ",React.createElement("span",{style:{display:0==this.state.completed_number?"none":"inline-block"}},"(",this.state.completed_number,")")),React.createElement("li",{onClick:this.loadComments.bind(this,"3")},"已完成 ",React.createElement("span",{style:{display:0==this.state.using_number?"none":"inline-block"}},"(",this.state.using_number,")")),React.createElement("li",{onClick:this.loadComments.bind(this,"4")},"已取消 ",React.createElement("span",{style:{display:0==this.state.cancel_number?"none":"inline-block"}},"(",this.state.cancel_number,")")),React.createElement("li",{onClick:this.loadComments.bind(this,"5")},"退款/售后 ",React.createElement("span",{style:{display:0==this.state.refund_number?"none":"inline-block"}},"(",this.state.refund_number,")")))),React.createElement("div",{className:"top-content"},t==-1?React.createElement("div",null):0==t?React.createElement("div",null,React.createElement("div",{style:{width:"150px",float:"left",minHeight:500}},React.createElement("ul",null,React.createElement("li",{style:{paddingTop:10}},"亲，暂还没有订单哦！")))):React.createElement("div",null,React.createElement("table",{cellSpacing:"0",cellPadding:"0",width:"100%",style:{border:"0"}},React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",{style:{width:346}},"商品"),React.createElement("th",{style:{width:108}},"首付金额(元)"),React.createElement("th",{style:{width:80}},"分期数"),React.createElement("th",{style:{width:128}},"信用支付(元)"),React.createElement("th",{style:{width:123}},"订单状态"),React.createElement("th",{style:{width:133}},"操作"))),this.state.myOrderResponse.map(function(t){return React.createElement("tbody",{key:t.orderId},React.createElement("tr",null,React.createElement("td",{style:{collapse:6},className:"_order"},React.createElement("div",{className:"order-no"},"订单号:",t.orderNo))),React.createElement("tr",{className:"bg_bd"},React.createElement("td",null,React.createElement("div",{className:"goods-info"},React.createElement("div",{className:"goods-info-left"},React.createElement("img",{src:t.goodsPic,width:"100%",height:"100%"})),React.createElement("div",{className:"goods-info-right"},React.createElement("li",null,t.goodsName),React.createElement("li",null,t.hospital),React.createElement("li",null,"单价:￥",t.orderPrice)))),React.createElement("td",null,React.createElement("li",null,t.downpayAmount)),React.createElement("td",null,React.createElement("li",null,t.staging)),React.createElement("td",null,React.createElement("li",null,t.creditPay)),React.createElement("td",null,React.createElement("li",null,e.getType(t.orderStatus)),React.createElement("li",{className:"color_999",onClick:e.detail.bind(e,t.orderId)},"订单详情")),React.createElement("td",null,React.createElement("li",{className:"2"==t.orderStatus},React.createElement(R_Upload,{projectReviewStatus:t.projectReviewStatus,orderId:t.orderId}),React.createElement("a",{href:"#",className:"",style:{display:1==t.projectReviewStatus?"inline":"none"}},"知情同意书待审核"),React.createElement("a",{href:"#",className:"",style:{display:3==t.projectReviewStatus?"inline":"none"}},"知情同意书审核不通过"),React.createElement("a",{href:"#",className:"",style:{display:2==t.projectReviewStatus?"inline":"none"}},"知情同意书审核通过")),React.createElement("li",{className:"3"==t.orderStatus&&1==t.isCanBuy},React.createElement("a",{href:"goods-detail.html?goodsId="+t.goodsId,target:"_blank"},"再去购买")),React.createElement("li",{className:"4"==t.orderStatus&&1==t.isCanBy},React.createElement("a",{href:"goods-detail.html?goodsId="+t.goodsId,target:"_blank"},"重新购买")),React.createElement("li",{className:"1"==t.orderStatus},React.createElement("a",{href:"#",className:"pay",onClick:e.toPay.bind(e,t.orderId)},"去支付")),React.createElement("li",{className:"1"==t.orderStatus},React.createElement("a",{href:"#",onClick:e.cancel_order.bind(e,t.orderId)},"取消订单")))))}))))))))}}]),t}(React.Component);