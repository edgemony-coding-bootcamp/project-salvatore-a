"use strict";(self.webpackChunkedgeflix=self.webpackChunkedgeflix||[]).push([[891],{2538:function(e,n,s){s.d(n,{Z:function(){return h}});var t=s(8214),r=s(5861),a=s(4942),i=s(1413),c=s(885),o=s(2791),u=s(6871),l=s(9815),p=["https://occ-0-3092-2581.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVXPTTvsd2xi4o0OCh5RuMYTUnlwAERLP5RIoMCObB6-Tp23ADj_dcd00pV2p0Gh8UjHBdIfXzm9I1zWuViessUtvBapy3_hWJAO.png?r=e59","https://occ-0-3092-2581.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbEpsFiYWCUEB6_95Mf5IggdpqegCC_zRIn-zI6GYFN94vp5_tX9qNfNOFwNb6LH4Tng7ENAwvNxJ-_I2gePe-sdPO0E7k1FLUXF.png?r=9cc","https://occ-0-3092-2581.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWbBDxHBii4kJ-J6A29-cKvhLPlsTDLbzNDVdXftJo16-oIKJ9OVVLP8zqUV1oJPFOAjLMegxfPK8KEmJjyDP_Ysow38gR_yzvrb.png?r=358"],d="AccessForm_AccessForm__rMrwg",m="AccessForm_AccessForm__AvatarsWrapper__OKcfK",f="AccessForm_Selected__lnhrf",g="AccessForm_AccessForm__inputGroup__-EiD1",v=s(184);var h=function(e){e.sendData;var n=e.formType,s=(0,o.useState)({avatar:"https://cdn-icons-png.flaticon.com/512/843/843331.png?w=740"}),h=(0,c.Z)(s,2),x=h[0],_=h[1],j=(0,u.s0)(),A=(0,l.S)(),w=A.users,S=A.fetchAllUsers;(0,o.useEffect)((function(){S()}),[]);var b=function(e){var n=e.target.name,s=e.target.value;_((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,a.Z)({},n,s))}))},k=function(){var e=(0,r.Z)((0,t.Z)().mark((function e(n,s){var r,a,i;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signup"!==s){e.next=22;break}return e.prev=1,e.next=4,fetch("https://edgemony-backend.herokuapp.com/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:return r=e.sent,e.next=7,r.json();case 7:if(a=e.sent,201===r.status){e.next=12;break}throw new Error(a);case 12:localStorage.setItem("JWT_accessToken",a.accessToken),localStorage.setItem("currentUser",a.user.id),j("/browse");case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),alert(e.t0);case 20:e.next=24;break;case 22:(i=w.filter((function(e){return e.email===n.email}))).length?(localStorage.setItem("currentUser",i[0].id),j("/browse")):alert("Questa email non esiste, registrati!");case 24:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(n,s){return e.apply(this,arguments)}}(),C=(0,o.useState)(""),F=(0,c.Z)(C,2),N=F[0],P=F[1],y=function(e){var n=e.target.id;P(n),_((function(n){return(0,i.Z)((0,i.Z)({},n),{},{avatar:e.target.id})}))};return(0,v.jsxs)("form",{autoComplete:"false",onSubmit:function(e){e.preventDefault(),k(x,n)},className:d,children:["signup"===n?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:m,children:[(0,v.jsx)("small",{children:"Scegli il tuo avatar!"}),p.map((function(e,n){return(0,v.jsx)("img",{id:e,className:N===e?f:null,onClick:y,src:e,alt:"Avatar ".concat(n)},n)}))]}),(0,v.jsxs)("div",{className:g,children:[(0,v.jsx)("label",{htmlFor:"username",children:"Username"}),(0,v.jsx)("input",{required:!0,autoComplete:"new-password",type:"text",value:x.username||"",name:"username",onChange:b,id:"username"})]})]}):null,(0,v.jsxs)("div",{className:g,children:[(0,v.jsx)("label",{htmlFor:"email",children:"Email"}),(0,v.jsx)("input",{required:!0,autoComplete:"new-password",type:"email",value:x.email||"",name:"email",onChange:b,id:"email"})]}),(0,v.jsxs)("div",{className:g,children:[(0,v.jsx)("label",{htmlFor:"password",children:"Password"}),(0,v.jsx)("input",{required:!0,autoComplete:"new-password",type:"password",value:x.password||"",name:"password",onChange:b,id:"password"})]}),(0,v.jsx)("div",{className:g,children:"signup"===n?(0,v.jsx)("input",{type:"submit",value:"Sign Up"}):(0,v.jsx)("input",{type:"submit",value:"Sign In"})})]})}},7648:function(e,n,s){s.d(n,{Z:function(){return a}});var t="Overlay_Overlay__QvtbA",r=s(184);var a=function(e){var n=e.functionOnClick,s=void 0===n?function(){}:n;return(0,r.jsx)("div",{onClick:function(){return s()},className:t})}},8891:function(e,n,s){s.r(n),s.d(n,{default:function(){return d}});var t=s(2538),r=s(7648),a=s(3504),i=s(6871),c="Signup_Signup__hmLPH",o="Signup_Signup__Logo__ncAvu",u="Signup_Signup__redirect__egHmf",l=s(1221),p=s(184);var d=function(){var e=(0,i.s0)();return(0,p.jsxs)("div",{className:c,children:[(0,p.jsx)("img",{className:o,onClick:function(){return e("/signin")},src:l,alt:"Edgeflix"}),(0,p.jsx)("h1",{children:"Signup"}),(0,p.jsx)(r.Z,{}),(0,p.jsx)(t.Z,{formType:"signup"}),(0,p.jsxs)("small",{className:u,children:["Sei gi\xe0 registrato? ",(0,p.jsx)(a.rU,{to:"/signin",children:"Sign In!"})]})]})}},1221:function(e,n,s){e.exports=s.p+"static/media/logo.606f44d2a13c4c194bf1.png"}}]);
//# sourceMappingURL=891.6f151598.chunk.js.map