webpackJsonp([4],{0:function(t,e,n){(function(t){!function(){var e=n(13),o=n(14),a=n(6),r=n(1);t.makeHot=t.hot.data?t.hot.data.makeHot:e(function(){return o.getRootInstances(a)},r)}();try{(function(){"use strict";function t(t){return t&&t.__esModule?t:{default:t}}function e(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),u=n(1),c=e(u),s=n(16),l=e(s),f=n(1272),p=n(65),m=n(1271),d=t(m),v={accout:{name:"用户",require:!0},password:{name:"密码",require:!0}},g=function(t){function e(t){o(this,e);var n=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.submitDate={accout:"",password:""},n.state={type:1},n}return r(e,t),i(e,[{key:"sublimeButton",value:function(t){t.preventDefault();var e=d.default.verifyConfig(this.submitDate,v,!0);if(e.length>0)return(0,p.Tips)({message:e[0].tips,type:2}),!1;var n=this.submitDate.accout,o=this.submitDate.password;(0,f.LoginAction)(n,o)}},{key:"valueChange",value:function(t,e){this.submitDate[t]=e}},{key:"createLogin",value:function(){var t=this;return c.createElement("div",{className:"login-content-input"},c.createElement("div",{style:{padding:"30px 0"}},c.createElement("img",{src:"/dist/images/logo2.png",alt:""})),c.createElement("div",{className:"login-item"},c.createElement("span",{className:"item-icon"},c.createElement(p.Icon,{type:"user",size:"25"})),c.createElement(p.InputText,{type:"test",placeholder:"请输入账号",onChange:function(e){return t.valueChange("accout",e.target.value)}})),c.createElement("form",{action:"#",onSubmit:this.sublimeButton.bind(this)},c.createElement("div",{className:"login-item"},c.createElement("span",{className:"item-icon"},c.createElement(p.Icon,{type:"mm"})),c.createElement(p.InputText,{type:"password",placeholder:"请输入密码",onChange:function(e){return t.valueChange("password",e.target.value)}})),c.createElement("div",{className:"login-btn-box"},c.createElement(p.Buttons,{type:"primary",display:"block"},"登录"))))}},{key:"createRegistered",value:function(){return c.createElement("div",null,"我是注册面板")}},{key:"changeType",value:function(t){this.setState({type:t})}},{key:"render",value:function(){var t=this,e=function(){return 1==t.state.type?t.createLogin():t.createRegistered()};return c.createElement("div",null,c.createElement("div",{className:"login-log"},c.createElement("img",{src:"/dist/images/tu.png"})),c.createElement("div",{className:"login-header"},e()))}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}}]),e}(c.Component),h=document.getElementById("example");l.render(c.createElement(g,null),h)}).call(this)}finally{!function(){var e=t.hot.data&&t.hot.data.foundReactClasses||!1;if(t.exports&&t.makeHot){var o=n(15);o(t,n(1))&&(e=!0);var a=e;a&&t.hot.accept(function(t){t&&console.error("Cannot not apply hot update to LoginContainer.tsx: "+t.message)})}t.hot.dispose(function(n){n.makeHot=t.makeHot,n.foundReactClasses=e})}()}}).call(e,n(12)(t))},1271:function(t,e,n){(function(t){!function(){var e=n(13),o=n(14),a=n(6),r=n(1);t.makeHot=t.hot.data?t.hot.data.makeHot:e(function(){return o.getRootInstances(a)},r)}();try{(function(){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t={require:{test:function(t,e){return!e||!!t&&t.toString().trim().length>0},tip:"不能为空"},password:{test:function(t,e){return!e||!!t&&t.toString().trim().length>0},tip:"不能为空"},minLength:{test:function(t,e){return t&&t.toString().trim().length>=e},tip:"长度不能小于{value}位"},maxLength:{test:function(t,e){return t&&t.toString().trim().length<e},tip:"长度不能大于{value}位"},number:{test:function(t){return/^\d+$/.test(t.toString().trim())},tip:"只能为数字"},mobile:{test:function(t){return t&&/^((1[378][0-9]{9})|(15[89][0-9]{8}))$/.test(t.toString().trim())},tip:"手机号码格式不正确"},email:{test:function(t){return t&&/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(t.toString().trim())},tip:"格式不对"},select:{test:function(t,e){return t!=e},tip:"不能为空"},group:{test:function(t,e){return parseInt(t.length)+1>e},tip:"选择不能小于{value}个"},bank:{test:function(t){return t&&/^\d{16}|\d{19}$/.test(t.toString().trim())},tip:"格式不对"}},n=function(e,n,o){if("test"===e)return!(o.test&&!o.test(n))||o.tip||"fail";var a=t[e];if(a&&a.test){var r=a.test(n,o);if(!r)return a.tip.replace("{value}",o)}return!0},o=function(t,e){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=[];for(var r in e){var i=e[r];for(var u in i){var c=i[u],s=n(u,t[r],c);if("string"==typeof s){var l=i.name+s;if(l={name:r,tips:l},o)return[l];a.push(l)}}}return a},a={verifyConfig:o,verify:n};e.default=a}).call(this)}finally{!function(){var e=t.hot.data&&t.hot.data.foundReactClasses||!1;if(t.exports&&t.makeHot){var o=n(15);o(t,n(1))&&(e=!0);var a=e;a&&t.hot.accept(function(t){t&&console.error("Cannot not apply hot update to Verifier.ts: "+t.message)})}t.hot.dispose(function(n){n.makeHot=t.makeHot,n.foundReactClasses=e})}()}}).call(e,n(12)(t))},1272:function(t,e,n){(function(t){!function(){var e=n(13),o=n(14),a=n(6),r=n(1);t.makeHot=t.hot.data?t.hot.data.makeHot:e(function(){return o.getRootInstances(a)},r)}();try{(function(){"use strict";function t(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if("admin"==t&&"123456"==e){var n={AdvAccount_ID:35,CityID:115,LOGIN_ID:"admin",ROLE_ID:17,USER_ID:154,pass:!0};return u.default.add("cw_auth",n),console.log(22),r.default.goPush("index"),!1}(0,c.Tips)({message:"账号或者密码错误",type:2})}Object.defineProperty(e,"__esModule",{value:!0}),e.LoginAction=void 0;var a=n(38),r=t(a),i=n(105),u=t(i),c=n(65);e.LoginAction=o}).call(this)}finally{!function(){var e=t.hot.data&&t.hot.data.foundReactClasses||!1;if(t.exports&&t.makeHot){var o=n(15);o(t,n(1))&&(e=!0);var a=e;a&&t.hot.accept(function(t){t&&console.error("Cannot not apply hot update to LoginAction.ts: "+t.message)})}t.hot.dispose(function(n){n.makeHot=t.makeHot,n.foundReactClasses=e})}()}}).call(e,n(12)(t))}});