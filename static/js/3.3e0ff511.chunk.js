(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[3],{63:function(e,t,n){"use strict";var a=n(12),r=n(0),c=n.n(r),l=n(11),o=n(64),i=n.n(o),u=function(e){var t=e.spring,n=e.animFunc,r=e.color,o=e.myStyle;return c.a.createElement(l.a.button,{type:"button",onClick:n,className:i.a.closeBtn,style:Object(a.a)({},o,{},t)},c.a.createElement("svg",{x:"0px",y:"0px",width:"55px",height:"55px",viewBox:"0 0 55 55"},c.a.createElement("line",{fill:"none",stroke:r,strokeWidth:"2",strokeMiterlimit:"10",x1:"21.614",y1:"22.125",x2:"38.562",y2:"39.073",strokeDasharray:"122.28",strokeDashoffset:"0"}),c.a.createElement("line",{fill:"none",stroke:r,strokeWidth:"2",strokeMiterlimit:"10",x1:"38.562",y1:"22.125",x2:"21.614",y2:"39.073",strokeDasharray:"122.28",strokeDashoffset:"0"})))};u.defaultProps={color:"#fff",myStyle:{},animFunc:function(){}},t.a=u},64:function(e,t,n){e.exports={closeBtn:"xButton_closeBtn__14o2y","stroke-anim-full":"xButton_stroke-anim-full__1-uXq"}},70:function(e,t,n){e.exports={home:"home_home__n68vr",nameTitle:"home_nameTitle__3msGq",scroll:"home_scroll__2pOOK"}},71:function(e,t,n){e.exports={projects:"project_projects__1kMXW",image:"project_image__1svhS",title:"project_title__2zixQ"}},73:function(e,t,n){e.exports={projectPage:"projectPage_projectPage__3ALvZ",zero:"projectPage_zero__2NNNQ",one:"projectPage_one__20GQi",second:"projectPage_second___Uy-k",third:"projectPage_third__tQiM_",linkContainer:"projectPage_linkContainer__1u7m3",arrow:"projectPage_arrow__1fCmS",colorSection:"projectPage_colorSection__2za7E",backgroundSection:"projectPage_backgroundSection__1St7r",websiteImages:"projectPage_websiteImages__2ELB0"}},74:function(e,t,n){e.exports={page404:"page404_page404__blxW4",back:"page404_back__3nwK9"}},76:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),l=n(70),o=n.n(l),i=n(12),u=n(2),s=n(11),m=n(71),p=n.n(m),f=n(14),E=n(10),b=n(13);var h=function(){var e=Object(c.f)(),t=Object(E.b)(),n=t.currentProj,l=t.animValue,o=t.setAnimValue,m=t.setSvgNumber,h=t.toggleTransition,d=t.weAreTransitioning,g=f.a[n],j=g.backgroundColor,_=g.alt,k=g.src,v=g.name,O=g.link,y=Object(a.useRef)(!0),x=Object(a.useRef)([]),w=Object(a.useRef)(v);w.current=v;var N=Object(a.useState)(!0),S=Object(u.a)(N,2),P=S[0],C=S[1],T=Object(s.b)({width:P?"80vw":"100vw",height:P?"50vh":"100vh",maxWidth:P?"60vw":"100vw",top:P?"42vh":"50%",config:b.b.imageConfig}),L=Object(s.d)(l.title,null,{config:b.c,from:{transform:"translate3d(0px, 50%, 0px)"},enter:{transform:"translate3d(0px, -55%, 0px)"},leave:{transform:"translate3d(0px, -140%, 0px)"}}),H=Object(a.useState)(!1),D=Object(u.a)(H,2),B=D[0],I=D[1],R=Object(s.b)({transform:B?"translateY(0%)":"translateY(100%)",config:b.c});function A(){d||(h(!0),m([]),x.current.map(clearTimeout),x.current=[],o(Object(i.a)({},l,{title:[],rLinks:!1})),setTimeout((function(){return C(!1)}),b.b.imageDelay),setTimeout((function(){return e.push(O)}),b.b.doneDelay),setTimeout((function(){return h(!1)}),b.b.doneDelay))}return Object(a.useEffect)((function(){y.current?y.current=!1:(x.current.map(clearTimeout),x.current=[],o(Object(i.a)({},l,{title:[]})),x.current.push(setTimeout((function(){return o(Object(i.a)({},l,{title:[w.current]}))}),b.h)))}),[n]),Object(a.useEffect)((function(){document.body.style.overflow="hidden",o(Object(i.a)({},l,{title:[w.current],rLinks:!0})),I(!0)}),[]),r.a.createElement("div",{className:p.a.projects,style:{backgroundColor:j}},r.a.createElement(s.a.span,{className:p.a.image,style:T},r.a.createElement(s.a.img,{style:R,alt:_,src:k,onClick:A,onKeyDown:A})),L.map((function(e){var t=e.item,n=e.props,a=e.key;return r.a.createElement(s.a.span,{className:p.a.title,key:a},r.a.createElement(s.a.h1,{style:Object(i.a)({},n),onClick:A},t))})))},d=n(65),g=n.n(d),j=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],l=Object(E.b)(),o=l.currentProj,i=l.setProj,s=l.weAreTransitioning,m=Object(a.useRef)(o),p=Object(a.useRef)(n);p.current=n;var b=Object(a.useRef)(s);b.current=s;var h=g.a.throttle((function(){!b.current&&p.current&&(m.current+1>f.a.length-1?(i(0),m.current=0):(i(m.current+1),m.current++),setTimeout((function(){return c(!1)}),1e3))}),1e3),d=g.a.throttle((function(){!b.current&&p.current&&(m.current-1<0?(i(f.a.length-1),m.current=2):(i(m.current-1),m.current--),setTimeout((function(){return c(!1)}),1e3))}),1e3),j=Object(a.useCallback)((function(e){p.current||(e.deltaY>20?(c(!0),h()):e.deltaY<-20&&(c(!0),d()))}),[]);return Object(a.useEffect)((function(){return window.addEventListener("wheel",j),function(){return window.removeEventListener("wheel",j)}}),[]),r.a.createElement(r.a.Fragment,null)};var _=function(){return r.a.createElement("div",{className:o.a.home},r.a.createElement(j,null),r.a.createElement(h,null))},k=n(73),v=n.n(k),O=n(63),y=function(){var e=Object(E.b)().setLineHeight,t=Object(c.g)(),n=document.body,l=document.documentElement,o="innerHeight"in window?window.innerHeight:document.documentElement.offsetHeight,i=g.a.throttle((function(){var t=Math.max(n.scrollHeight,n.offsetHeight,l.clientHeight,l.scrollHeight,l.offsetHeight),a=o+window.pageYOffset;e(a/t*5)}),200);return Object(a.useEffect)((function(){"/"!==t.pathname&&i()}),[t.pathname]),Object(a.useEffect)((function(){return window.addEventListener("scroll",i),function(){return window.removeEventListener("scroll",i)}}),[]),r.a.createElement(r.a.Fragment,null)},x=function(){var e=Object(c.g)(),t=Object(c.f)(),n=Object(E.b)(),l=n.currentProj,o=n.setAnimValue,m=n.animValue,p=n.setSvgNumber,h=n.setTrans,d=n.setProj,g=f.a[l],j=g.backgroundColor,_=g.alt,k=g.src,x=g.nameArray,w=g.colorsArray,N=g.description,S=g.githubLink,P=g.hostLink,C=g.firstImages,T=g.secondImages,L=v.a.projectPage,H=v.a.zero,D=v.a.one,B=v.a.second,I=v.a.third,R=v.a.backgroundSection,A=v.a.websiteImages,W=Object(a.useState)(!1),z=Object(u.a)(W,2),F=z[0],V=z[1],M=Object(s.b)({transform:F?"translate3d(0px, 0%, 0px)":"translate3d(0px, 100%, 0px)",config:b.c}),Y=Object(a.useState)(!1),Q=Object(u.a)(Y,2),G=Q[0],K=Q[1],q=Object(s.b)({transform:G?"translate3d(0px, 0%, 0px)":"translate3d(0px, -150%, 0px)",config:b.c});return Object(a.useEffect)((function(){return document.body.style.overflow="auto",V(!0),K(!0),f.a.forEach((function(t,n){"/".concat(t.link)===e.pathname&&d(n)})),function(){h(!1),o(Object(i.a)({},m,{lineColor:"white"}))}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),r.a.createElement("div",{className:L},r.a.createElement(O.a,{color:"#000",spring:q,myStyle:{position:"fixed",top:"1rem",left:"48%",zIndex:100},animFunc:function(){return document.body.style.overflow="hidden",o(Object(i.a)({},m,{rLinks:!0})),p(["1"]),K(!1),h(!0),void setTimeout((function(){return t.push("/")}),1e3)}}),r.a.createElement("section",{className:H},r.a.createElement("img",{alt:_,src:k}),r.a.createElement("div",null,x.map((function(e){return r.a.createElement("span",{key:e},r.a.createElement(s.a.h1,{style:M},e))})))),r.a.createElement("section",{className:D},r.a.createElement("div",null,r.a.createElement("h1",null,"01"),r.a.createElement("h2",null,"CONCEPT")),r.a.createElement("p",null,N)),r.a.createElement("section",{className:R,style:{backgroundColor:j}}),C.length>0&&r.a.createElement("section",{className:A},r.a.createElement("div",null,C.map((function(e){return r.a.createElement("img",{key:e.alt,alt:e.alt,src:e.pic})})))),r.a.createElement("section",{className:B},r.a.createElement("div",null,r.a.createElement("h1",null,"02"),r.a.createElement("h2",null,"COLORS")),w.map((function(e,t){return r.a.createElement("div",{className:v.a.colorSection,key:t},e.map((function(e){return r.a.createElement("span",{key:e,style:{backgroundColor:e}},r.a.createElement("p",null,e))})))}))),r.a.createElement("section",{className:A},r.a.createElement("div",null,T.map((function(e){return r.a.createElement("img",{key:e.alt,alt:e.alt,src:e.pic})})))),r.a.createElement("section",{className:I},r.a.createElement("div",null,r.a.createElement("h1",null,"03"),r.a.createElement("h2",null,"OVERVIEW")),r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("h3",null,"ROLE"),r.a.createElement("p",null,"Full Stack Web Developer")),r.a.createElement("hr",null),r.a.createElement("span",null,r.a.createElement("h3",null,"DATE"),r.a.createElement("p",null,"10.2017")),r.a.createElement("hr",null),r.a.createElement("span",null,r.a.createElement("h3",null,"WEBSITE"),r.a.createElement("a",{href:P,className:v.a.linkContainer},r.a.createElement("p",null,"Link to website"),r.a.createElement("p",{className:v.a.arrow}," \u2192"))),r.a.createElement("hr",null),r.a.createElement("span",null,r.a.createElement("h3",null,"GITHUB"),r.a.createElement("a",{href:S,className:v.a.linkContainer},r.a.createElement("p",null,"Link to repo"),r.a.createElement("p",{className:v.a.arrow}," \u2192")))))))},w=n(15),N=n(74),S=n.n(N),P=[{name:"Home",path:"/",exact:!0,component:_},{name:"Donuts",path:"/projects/donuts",exact:!0,component:x},{name:"Pokedex",path:"/projects/pokedex",exact:!0,component:x},{name:"Sort",path:"/projects/visualizer",exact:!0,component:x},{name:"Page404",component:function(){return r.a.createElement("div",{className:S.a.page404},r.a.createElement("p",null,"Sorry, the page you are looking for is not here :("),r.a.createElement(w.b,{to:"/"},r.a.createElement("button",{type:"button",className:S.a.back},"Back Home!")))}}];t.default=function(){return r.a.createElement(c.c,null,P.map((function(e){return r.a.createElement(c.a,{key:e.name,exact:e.exact,path:e.path,component:e.component})})))}}}]);
//# sourceMappingURL=3.3e0ff511.chunk.js.map