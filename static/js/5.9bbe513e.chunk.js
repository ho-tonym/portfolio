(this.webpackJsonpnewportfolio=this.webpackJsonpnewportfolio||[]).push([[5],{59:function(e,t,o){"use strict";var n=o(60).CopyToClipboard;n.CopyToClipboard=n,e.exports=n},60:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var n=a(o(0)),r=a(o(61));function a(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?y(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var d=function(e){function t(){var e,o;s(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return b(y(o=p(this,(e=f(t)).call.apply(e,[this].concat(c)))),"onClick",(function(e){var t=o.props,a=t.text,c=t.onCopy,l=t.children,i=t.options,s=n.default.Children.only(l),u=(0,r.default)(a,i);c&&c(a,u),s&&s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e)})),o}var o,a,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),o=t,(a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),o=i(e,["text","onCopy","options","children"]),r=n.default.Children.only(t);return n.default.cloneElement(r,function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(o,!0).forEach((function(t){b(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},o,{onClick:this.onClick}))}}])&&u(o.prototype,a),c&&u(o,c),t}(n.default.PureComponent);t.CopyToClipboard=d,b(d,"defaultProps",{onCopy:void 0,options:void 0})},61:function(e,t,o){"use strict";var n=o(62),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var o,a,c,l,i,s,u=!1;t||(t={}),o=t.debug||!1;try{if(c=n(),l=document.createRange(),i=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=r[t.format]||r.default;window.clipboardData.setData(a,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)})),document.body.appendChild(s),l.selectNodeContents(s),i.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(p){o&&console.error("unable to copy using execCommand: ",p),o&&console.error("unable to copy using clipboardData: ",p),o&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}finally{i&&("function"==typeof i.removeRange?i.removeRange(l):i.removeAllRanges()),s&&document.body.removeChild(s),c()}return u}},62:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],n=0;n<e.rangeCount;n++)o.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||o.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},63:function(e,t,o){"use strict";var n=o(12),r=o(0),a=o.n(r),c=o(64),l=o.n(c),i=o(10),s=function(e){var t=e.spring,o=e.animFunc,r=e.color,c=e.myStyle;return a.a.createElement(i.a.button,{type:"button",onClick:o,className:l.a.closeBtn,style:Object(n.a)({},c,{},t)},a.a.createElement("svg",{x:"0px",y:"0px",width:"55px",height:"55px",viewBox:"0 0 55 55"},a.a.createElement("line",{fill:"none",stroke:r,strokeWidth:"2",strokeMiterlimit:"10",x1:"21.614",y1:"22.125",x2:"38.562",y2:"39.073",strokeDasharray:"122.28",strokeDashoffset:"0"}),a.a.createElement("line",{fill:"none",stroke:r,strokeWidth:"2",strokeMiterlimit:"10",x1:"38.562",y1:"22.125",x2:"21.614",y2:"39.073",strokeDasharray:"122.28",strokeDashoffset:"0"})))};s.defaultProps={color:"#fff",myStyle:{},animFunc:function(){}},t.a=s},64:function(e,t,o){e.exports={closeBtn:"xButton_closeBtn__14o2y","stroke-anim-full":"xButton_stroke-anim-full__1-uXq"}},66:function(e,t,o){e.exports={overlay:"overlayNav_overlay__6Di0e",overlayContent:"overlayNav_overlayContent__Oiw81",contact:"overlayNav_contact__1h4Ae",projects:"overlayNav_projects__Wpvt8"}},67:function(e,t,o){e.exports=o.p+"static/media/email.db63510a.png"},72:function(e,t,o){"use strict";o.r(t);var n=o(12),r=o(2),a=o(0),c=o.n(a),l=(o(57),o(10)),i=o(59),s=o(66),u=o.n(s),p=o(67),f=o.n(p),y=o(25),m=o(9),b=o(63),d=o(13);t.default=function(){var e=Object(m.b)(),t=e.animValue,o=e.setAnimValue,a=e.isOverlayTextShowing,s=e.overlayTextShowing,p=Object(y.a)(),v=Object(r.a)(p,2),g=v[0],h=(v[1].height,Object(l.b)({height:t.overlay?"100%":"0%"})),O=Object(l.c)(3,{config:d.b,opacity:s?1:0,transform:s?"translate3d(0px, 0%, 0px)":"translate3d(0px, 25%, 0px)"});return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a.div,Object.assign({},g,{className:u.a.overlay,style:h}),c.a.createElement(b.a,{animFunc:function(){a(!1),setTimeout((function(){return o(Object(n.a)({},t,{overlay:!1}))}),d.d.closeOverlayDelay)},color:"#000"}),c.a.createElement("button",{type:"button",className:u.a.projects},"Projects"),c.a.createElement("div",{className:u.a.overlayContent},O.map((function(e,t){return function(e,t){return[c.a.createElement(l.a.h1,{className:"black",key:"0",style:Object(n.a)({},e)},"Hi my name is",c.a.createElement("span",{className:"white"}," Tony Ho"),", a full stack web developer + graphic designer working in New York."),c.a.createElement(l.a.p,{key:"1",style:Object(n.a)({},e)},"Interested in working together? Feel free to contact me for any project or collaboration."),c.a.createElement(l.a.div,{key:"2",id:u.a.contact,style:Object(n.a)({},e)},c.a.createElement("img",{alt:"email icon",src:f.a}),c.a.createElement(i.CopyToClipboard,{text:"ho.tonym@gmail.com"},c.a.createElement("p",null,"ho.tonym@gmail.com")))][t]}(e,t)})))))}}}]);
//# sourceMappingURL=5.9bbe513e.chunk.js.map