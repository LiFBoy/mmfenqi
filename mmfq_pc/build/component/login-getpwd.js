"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),R_LoginGetpwd=function(e){function t(){_classCallCheck(this,t);var e=_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this));return e.state={pwd_error:"",pwde_img:"",repwd_error:"",repwd_img:"",pwd:"",repwd:""},e}return _inherits(t,e),_createClass(t,[{key:"pwd_handle",value:function(e){var t=this.props.pwd_regex,r=e.target.value;console.log("----------"),console.log("正则："+t+" 输入值："+r),console.log("匹配结果："+t.test(r)),this.check_pwd(r)}},{key:"check_pwd",value:function(e){var t=this.props.pwd_regex;return""==e?(this.setState({pwd_error:"密码不能为空",pwde_img:React.createElement("img",{src:"../static/images/register/r_er.png",style:{verticalAlign:"middle"},alt:""}),pwd:""}),!1):t.test(e)?(this.setState({pwd_error:"",pwde_img:React.createElement("img",{src:"../static/images/register/r_su.png",style:{verticalAlign:"middle"},alt:""}),pwd:e}),!0):(this.setState({pwd_error:"密码长度6-16，请重新输入",pwde_img:React.createElement("img",{src:"../static/images/register/r_er.png",style:{verticalAlign:"middle"},alt:""}),pwd:e}),!1)}},{key:"check_pwd2",value:function(e){return e!==this.state.pwd?(this.setState({repwd_error:"两次密码不一样",repwd_img:React.createElement("img",{src:"../static/images/register/r_er.png",style:{verticalAlign:"middle"},alt:""}),repqd:e}),!1):(this.setState({repwd_error:"",repwd_img:React.createElement("img",{src:"../static/images/register/r_su.png",style:{verticalAlign:"middle"},alt:""}),repwd:e}),!0)}},{key:"pwd_handle2",value:function(e){var t=this.props.pwd_regex,r=e.target.value;console.log("----------"),console.log("正则："+t+" 输入值："+r),console.log("匹配结果："+t.test(r)),this.check_pwd2(r)}},{key:"sure",value:function(e,t){this.check_pwd(e)&&this.check_pwd2(t)&&$.ajax({type:"post",url:"/pc/computer/reset_pwd",dataType:"json",data:{telPhone:window.localStorage.getItem("telephone"),verifyCode:window.localStorage.getItem("verifyCode"),confirmPassword:CommonService.MD5(e),newPassword:CommonService.MD5(e)},error:function(){},timeout:6e4,success:function(e){"0"==e.result&&(window.location.href="login.html")}})}},{key:"render",value:function(){var e=this.state.pwd,t=this.state.repwd,r=this.state.pwd_error,i=this.state.pwde_img,n=this.state.repwd_error,a=this.state.repwd_img;return React.createElement("div",{style:{flexGrow:"1",width:"100%",backgroundImage:"url(../static/images/login-background.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",minHeight:680,display:"flex",flexDirection:"column",justifyContent:"center"}},React.createElement("div",{className:"wrap"},React.createElement("div",{style:{backgroundColor:"#fff",height:638,width:1198,border:"1px solid #e2e2e2"}},React.createElement("div",{style:{height:48,borderBottom:"1px solid #e2e2e2",backgroundColor:"#FCFCFC",textIndent:"24px",lineHeight:"48px",fontSize:"16px"}},"找回密码"),React.createElement("div",{style:{height:589,width:1198}},React.createElement("div",{style:{height:589,width:448,float:"left"}},React.createElement("div",{style:{textAlign:"right",marginRight:10}},React.createElement("div",{style:{marginTop:124}},"新密码"),React.createElement("div",{style:{marginTop:47}},"确认密码"))),React.createElement("div",{style:{height:589,width:750,float:"left"}},React.createElement("div",{style:{marginTop:110}},React.createElement("input",{placeholder:"请输入6-16位字符或数字",type:"password",onBlur:this.pwd_handle.bind(this),style:{width:340,height:44,border:"1px solid #e2e2e2",textIndent:"24px"}}),React.createElement("div",{style:{marginLeft:"10px",display:"inline"}},i," ",React.createElement("span",{style:{verticalAlign:"middle"}},r))),React.createElement("div",{style:{marginTop:25}},React.createElement("input",{placeholder:"请重新输入",type:"password",onBlur:this.pwd_handle2.bind(this),style:{width:340,height:44,border:"1px solid #e2e2e2",textIndent:"24px"}}),React.createElement("div",{style:{marginLeft:"10px",display:"inline"}},a," ",React.createElement("span",{style:{verticalAlign:"middle"}},n))),React.createElement("div",{onClick:this.sure.bind(this,e,t),style:{marginTop:25,backgroundColor:"#FD657A",height:45,width:342,lineHeight:"45px",color:"#fff",textAlign:"center"}},"确认更改"))))))}}]),t}(React.Component);