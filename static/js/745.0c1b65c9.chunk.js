"use strict";(self.webpackChunkedgeflix=self.webpackChunkedgeflix||[]).push([[745],{7648:function(e,i,n){n.d(i,{Z:function(){return s}});var r="Overlay_Overlay__QvtbA",t=n(184);var s=function(e){var i=e.functionOnClick,n=void 0===i?function(){}:i;return(0,t.jsx)("div",{onClick:function(){return n()},className:r})}},149:function(e,i,n){n.r(i),n.d(i,{default:function(){return Ye}});var r=n(885),t="Footer_Footer__MEpnh",s="Footer_Footer__Wrapper__WHair",a="Footer_Footer__IconsWrapper__9TJ6W",o="Footer_Footer__ColumnWrapper__Fmngm",l="Footer_Footer__column__R5KlD",c="Footer_Footer__button__RtP1p",_="Footer_Footer__authors__YiwS5",d=n(828),u=n(9126),h=n(184);function x(){return(0,h.jsx)("div",{className:t,children:(0,h.jsxs)("div",{className:s,children:[(0,h.jsxs)("div",{className:a,children:[(0,h.jsx)(d.$Hv,{}),(0,h.jsx)(u.Vs6,{}),(0,h.jsx)(d.Fwv,{}),(0,h.jsx)(d.Rne,{})]}),(0,h.jsxs)("div",{className:o,children:[(0,h.jsxs)("ul",{className:l,children:[(0,h.jsx)("li",{children:"Audio e sottotitoli"}),(0,h.jsx)("li",{children:"Media Center"}),(0,h.jsx)("li",{children:"Privacy"}),(0,h.jsx)("li",{children:"Contattaci"})]}),(0,h.jsxs)("ul",{className:l,children:[(0,h.jsx)("li",{children:"Audiodescrizione"}),(0,h.jsx)("li",{children:"Rapporti con gli investitori"}),(0,h.jsx)("li",{children:"Note legali"})]}),(0,h.jsxs)("ul",{className:l,children:[(0,h.jsx)("li",{children:"Centro assistenza"}),(0,h.jsx)("li",{children:"Opportunit\xe0 di lavoro"}),(0,h.jsx)("li",{children:"Preferenze per i cookie"})]}),(0,h.jsxs)("ul",{className:l,children:[(0,h.jsx)("li",{children:"Carte regalo"}),(0,h.jsx)("li",{children:"Condizioni di utilizzo"}),(0,h.jsx)("li",{children:"Informazioni sull'azienda"})]})]}),(0,h.jsx)("button",{className:c,children:"Codice di servizio"}),(0,h.jsx)("p",{className:_,children:"Credits by Ester Giulio Carmelo Alessia Paolo"})]})})}var f="Navbar_Navbar__pugEK",j="Navbar_Navbar__Logo__+qJYw",m="Navbar_Navbar__GroupApp__0J+7M",v="Navbar_Navbar__IconsWrapper__S9bXq",g="Navbar_Navbar__IconsWrapper__Notify__0QO-I",p=n(1221),S=n(6856),N=n(8820),C=n(2791),M=n(8214),H=n(5861),F="FETCH_ALL_USERS_REQUEST",b="FETCH_ALL_USERS_SUCCESS",w="FETCH_ALL_USERS_ERROR",y=n(1413);function k(e,i){switch(i.type){case F:return(0,y.Z)((0,y.Z)({},e),{},{loading:!0});case b:return(0,y.Z)((0,y.Z)({},e),{},{loading:!1,users:i.payload});case w:return(0,y.Z)((0,y.Z)({},e),{},{loading:!1,error:i.payload});default:return e}}var D=(0,C.createContext)({users:[]}),E={users:[],loading:!1,error:!1};function R(e){var i=e.children,n=(0,C.useReducer)(k,E),t=(0,r.Z)(n,2),s=t[0],a=t[1],o=function(){var e=(0,H.Z)((0,M.Z)().mark((function e(){var i,n;return(0,M.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:F}),e.prev=1,e.next=4,fetch("https://edgemony-backend.herokuapp.com/users");case 4:return i=e.sent,e.next=7,i.json();case 7:n=e.sent,a({type:b,payload:n}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),a({type:w,payload:e.t0});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();return(0,h.jsx)(D.Provider,{value:{users:s.users,fetchAllUsers:o},children:i})}var Z="UsersMenu_UsersMenu__Wor8j",L="UsersMenu_UsersMenu__DropdownMenu__YAFVL",T="UsersMenu_UsersMenu__DropdownMenu__UserIcon__j8MUG",A="UsersMenu_UsersMenu__DropdownMenu__Exit__Z-Hot",I=n(6871);var O=function(){var e=(0,C.useContext)(D),i=e.fetchAllUsers,n=e.users,t=(0,C.useState)(!1),s=(0,r.Z)(t,2),a=s[0],o=s[1],l=(0,I.s0)();return(0,C.useEffect)((function(){i()}),[]),(0,h.jsxs)("div",{className:Z,onMouseOver:function(){o(!0)},onClick:function(){return o((function(e){return!e}))},children:[(0,h.jsx)("img",{alt:"User Icon",src:"https://occ-0-3092-2581.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZoA7Ad6wq_Mr6n2PeiNE7b3crY5UFBH3HZBKFEn-sNnuFYr2nFRDhXaJ-n4AffDKow6laNMiqveHP9dquslaL1U7sGHr8g.png?r=e59"}),(0,h.jsx)(S.gwH,{}),a&&(0,h.jsx)("div",{className:L,onMouseLeave:function(){return a?setTimeout((function(){return o(!1)}),500):null},children:(0,h.jsxs)("ul",{children:[n&&n.filter((function(e,i){return i>0&&i<5})).map((function(e,i){return(0,h.jsxs)("li",{children:[(0,h.jsx)("img",{className:T,src:e.avatar,alt:"".concat(e.username," icon")}),e.username]},e.id)})),(0,h.jsxs)("li",{children:[(0,h.jsx)(u.jox,{})," Gestisci i profili"]}),(0,h.jsx)("hr",{}),(0,h.jsxs)("li",{children:[(0,h.jsx)(N.nf1,{})," Account"]}),(0,h.jsxs)("li",{children:[(0,h.jsx)(N.KpA,{}),"Centro assistenza"]}),(0,h.jsx)("hr",{}),(0,h.jsx)("li",{onClick:function(){return l("/signin")},className:A,children:"Esci da Edgeflix"})]})})]})},P=n(7762),W="SelectCategory_SelectCategory__jLrhg",U="SelectCategory_SelectCategory__MenuTitle__RoNlP",B="SelectCategory_SelectCategory__CategoriesWrapper__uJt-V",z=n(2680);var J=function(e){var i=e.getFilter,n=(0,z.t)().movies,t=(0,C.useState)(!1),s=(0,r.Z)(t,2),a=s[0],o=s[1];return(0,h.jsxs)("div",{className:W,children:[(0,h.jsxs)("div",{onClick:function(){return o((function(e){return!e}))},className:U,children:[(0,h.jsx)("span",{children:" Categorie"}),(0,h.jsx)(S.gwH,{})]}),a&&(0,h.jsx)("div",{className:B,children:(0,h.jsx)("ul",{children:function(e){var i=[];return e.forEach((function(e){var n,r=(0,P.Z)(e.genres);try{for(r.s();!(n=r.n()).done;){var t=n.value;-1===i.indexOf(t)&&i.push(t)}}catch(s){r.e(s)}finally{r.f()}})),i}(n).map((function(e,n){return(0,h.jsx)("li",{onClick:function(n){i(e),o(!1)},children:e},n)}))})})]})},V=n(4373),K=n(6355),q="SearchInput_SearchInput__8c1yK",G="SearchInput_SearchInput__showInput__+dDn5",X="SearchInput_SearchInput__display__oPCzS",Y="SearchInput_SearchInput__searchBtnMobile__jXUJr",Q="SearchInput_SearchInput__moveBtn__6rNkN";function $(e){var i=e.getFilter,n=e.onFocus,t=(0,C.useState)(!1),s=(0,r.Z)(t,2),a=s[0],o=s[1],l=(0,C.useState)(""),c=(0,r.Z)(l,2),_=c[0],d=c[1],u=(0,C.useRef)();return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{onMouseLeave:function(){return a?setTimeout((function(){return o(!1)}),500):null},className:q,children:[(0,h.jsx)("input",{autoFocus:!0,className:a?G:n?X:"",type:"text",ref:u,placeholder:"Titoli, persone, generi",value:_,onChange:function(e){d(e.target.value),i(e.target.value,!0)}}),(0,h.jsx)("span",{onClick:function(){return!n&&(o((function(e){return!e})),u.current.focus(),void i("",!0))},className:a?Q:n?Y:"",children:(0,h.jsx)(K.U41,{})})]})})}var ee=function(e){var i=e.getFilter,n=(0,C.useState)("transparent"),t=(0,r.Z)(n,2),s=t[0],a=t[1],o=function(){window.scrollY>10?a("rgb(20, 20, 20)"):a("transparent")};return(0,C.useEffect)((function(){return window.addEventListener("scroll",o),function(){window.removeEventListener("scroll",o)}}),[]),(0,h.jsxs)("div",{className:f,style:{backgroundColor:s,transition:"all 1s"},children:[(0,h.jsxs)("div",{className:m,children:[(0,h.jsx)("img",{className:j,src:p,alt:"Edgeflix"}),(0,h.jsx)(J,{getFilter:i})]}),(0,h.jsxs)("div",{className:v,children:[(0,h.jsx)($,{getFilter:i}),(0,h.jsx)(V.rCk,{className:g}),(0,h.jsx)(O,{})]})]})},ie={};var ne=function(e){var i=e.getFilter;return(0,h.jsx)("div",{className:ie.Header,children:(0,h.jsx)(ee,{getFilter:i})})},re="Hero_Hero__2aKvT",te="Hero_Hero__BackgrVid__d5w60",se="Hero_Hero__WrapOver__-M1wJ",ae="Hero_Hero__Title__lKaT4",oe="Hero_Hero__Desc__F25bC",le="Hero_Hero__BtnWrap__lHxmM",ce="Hero_Hero__BtnPlay__dQ7Zu",_e="Hero_Hero__BtnInfo__pmk2V",de="Hero_Hero__BtnIcon__q2p45",ue=n(8127),he=n(1429);var xe=function(e){var i=e.toggleModal,n=e.toggleDetailsModal,r=e.movieData;return(0,h.jsxs)("div",{className:re,children:[(0,h.jsx)("img",{className:te,src:ue,alt:"Stranger Things"}),(0,h.jsxs)("div",{className:se,children:[(0,h.jsx)("img",{className:ae,src:he,alt:"Stranger Things"}),(0,h.jsxs)("h3",{className:oe,children:[" ",r&&r.description," "]}),(0,h.jsxs)("div",{className:le,children:[(0,h.jsxs)("button",{onClick:function(){return i()},className:ce,children:[" ",(0,h.jsx)(u.mz0,{className:de}),"  Riproduci"]}),(0,h.jsxs)("button",{onClick:function(){return n(r)},className:_e,children:[" ",(0,h.jsx)(N.ocf,{className:de})," Altre info"]})]})]})]})},fe="ModalDetails_ModalContainer__4My3y",je="ModalDetails_ModalContainer__Poster__btYJd",me="ModalDetails_ModalData__HeA9e",ve="ModalDetails_ModalData__Title__rdygH",ge="ModalDetails_ModalData__BtnCir__0Xhk5",pe="ModalDetails_ModalData__Season__89OFP",Se="ModalDetails_ModalData__Desc__DcR3m",Ne="ModalDetails_ModalData__Cast__EATlc",Ce="ModalDetails_ModalContainer__BtnClose__2Fesh",Me=n(2982),He={Rating__On:"Rating_Rating__On__GEfQF",Rating__Off:"Rating_Rating__Off__9ftwt"};function Fe(e){var i=e.movieData,n=e.setRender,t=(0,C.useState)(0),s=(0,r.Z)(t,2),a=s[0],o=s[1],l=(0,z.t)().movieRating;return(0,C.useEffect)((function(){i&&o(i.rating)}),[i]),(0,h.jsx)(h.Fragment,{children:i&&(0,h.jsx)("div",{className:He.Rating,children:(0,Me.Z)(Array(5)).map((function(e,r){return r+=1,(0,h.jsx)("button",{type:"button",className:r<=a?He.Rating__On:He.Rating__Off,onClick:function(){i&&l(i.id,r).then((function(){n((function(e){return!e})),o(r)}))},children:(0,h.jsx)("span",{className:He.Rating__Span,children:(0,h.jsx)(N.pHD,{className:He.Rating__Star})})},r)}))})})}var be=n(3853),we=n(7648);function ye(e){var i=e.isVisible,n=e.movieData,t=e.toggleModal,s=e.togglePlayModal,a=e.setRender,o=(0,z.t)().favouriteMovie,l=(0,C.useState)(n.favorite),c=(0,r.Z)(l,2),_=c[0],d=c[1];return(0,h.jsx)("div",{children:i&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(we.Z,{functionOnClick:t}),(0,h.jsxs)("div",{className:fe,children:[(0,h.jsx)(V.abH,{onClick:function(){return t()},className:Ce}),(0,h.jsx)("img",{className:je,src:n.poster,alt:n.title}),(0,h.jsxs)("div",{className:me,children:[(0,h.jsx)(Fe,{movieData:n,setRender:a}),(0,h.jsx)("h1",{className:ve,children:n.title}),(0,h.jsxs)("h3",{className:pe,children:[" ","Stagioni: ",n.seasons," "]}),(0,h.jsx)("h3",{className:Se,children:n.description}),(0,h.jsxs)("h4",{className:Ne,children:[" ","Genere: ",n.genres.join(", ")]}),(0,h.jsxs)("h4",{className:Ne,children:[" ","Cast:",n.cast.join(", ")]}),_?(0,h.jsx)(be.FS3,{className:ge,onClick:function(){o(n.id,!_).then((function(){a((function(e){return!e})),d(!_)}))}}):(0,h.jsx)(S.OrI,{onClick:function(){o(n.id,!_).then((function(){a((function(e){return!e})),d(!_)}))},className:ge}),(0,h.jsx)(S.Hm_,{onClick:function(){return s()},className:ge})]})]})]})})}var ke="SliderWrapper_SliderWrapper__ggDmi",De={SliderSection__Title:"SliderSection_SliderSection__Title__8skt2",SliderSection__Slider:"SliderSection_SliderSection__Slider__kHM8N",SliderSection__Left:"SliderSection_SliderSection__Left__EZP3I",SliderSection__Right:"SliderSection_SliderSection__Right__5hEqc",SliderSection__ListEmpty:"SliderSection_SliderSection__ListEmpty__OjoJ4"},Ee=n(1052),Re=n.n(Ee);n(6505);var Ze=function(e){var i=e.moviesData,n=e.title,t=e.toggleModal,s=function(e){return e.preventDefault()},a=i.map((function(e){return(0,h.jsx)("img",{onClick:function(){t(e)},src:e.poster,alt:e.title,onDragStart:s,role:"presentation"},e.id)})),o=(0,C.useState)(window.innerWidth),l=(0,r.Z)(o,2),c=l[0],_=l[1];return(0,C.useEffect)((function(){window.addEventListener("resize",(function(){_(window.innerWidth)}))})),(0,h.jsxs)("div",{className:De.SliderSection,children:[(0,h.jsx)("h1",{className:De.SliderSection__Title,children:n}),i.length?(0,h.jsx)("div",{className:De.SliderSection__Slider,children:(0,h.jsx)(Re(),{mouseTracking:!(window.innerWidth>770)&&c,items:a,infinite:!1,autoHeight:!0,autoWidth:!0,disableButtonsControls:!(window.innerWidth>770)&&c,disableDotsControls:!0,responsive:{0:{items:2},500:{items:3},1024:{items:6}},renderPrevButton:function(){return(0,h.jsxs)("span",{className:De.SliderSection__Left,children:[" ",(0,h.jsx)(S.aQX,{})," "]})},renderNextButton:function(){return(0,h.jsxs)("span",{className:De.SliderSection__Right,children:[" ",(0,h.jsx)(S.Djl,{})," "]})}})}):(0,h.jsxs)("div",{className:De.SliderSection__ListEmpty,children:["Whoooops, lista vuota... aggiungi qualcosa! ",(0,h.jsx)(K.Xnh,{})]})]})};var Le=function(e){var i=e.toggleModal,n=(0,z.t)().movies,r=(0,z.t)().movies.filter((function(e){return e.new})),t=(0,z.t)().movies.filter((function(e){return e.favorite}));return(0,h.jsxs)("div",{className:ke,children:[n&&(0,h.jsx)(Ze,{toggleModal:i,moviesData:n,title:"Serie TV"}),r&&(0,h.jsx)(Ze,{toggleModal:i,moviesData:r,title:"Nuovi e popolari"}),t&&(0,h.jsx)(Ze,{toggleModal:i,moviesData:t,title:"La tua lista"})]})},Te="ModalPlay_ModalContainer__nX+Kc",Ae="ModalPlay_ModalContainer__Title__kKdhC",Ie="ModalPlay_ModalContainer__TitleTwo__YZAw4",Oe="ModalPlay_ModalContainer__BtnClose__JB7KX";function Pe(e){var i=e.isVisible,n=e.toggleModal;return(0,h.jsx)("div",{children:i&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(we.Z,{functionOnClick:n}),(0,h.jsxs)("div",{className:Te,children:[(0,h.jsx)("img",{src:p,alt:"Edgeflix"}),(0,h.jsxs)("h2",{className:Ae,children:["Al momento non \xe8 possibile riprodurre questo titolo.",(0,h.jsx)("br",{}),"Riprova pi\xf9 tardi, quando verremo assunti da Netflix"," "]}),(0,h.jsx)("h3",{className:Ie,children:"p.s. Se potete, metteteci una buona parola"}),(0,h.jsxs)("button",{onClick:function(){return n()},className:Oe,children:[" ","Torna a Edgeflix"]})]})]})})}var We="NoResultsAlert_NoResultsAlert__5ewxd";var Ue=function(e){var i=e.filter;return(0,h.jsxs)("div",{className:We,children:[(0,h.jsxs)("p",{children:["Nessun risultato per la tua ricerca di ",(0,h.jsx)("i",{children:i}),".",(0,h.jsx)("br",{}),"Suggerimenti:"]}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:"Prova con parole chiave diverse"}),(0,h.jsx)("li",{children:"Cerchi un film o una serie TV?"}),(0,h.jsx)("li",{children:"Prova a usare il titolo di un film o programma TV oppure il nome di un attore"}),(0,h.jsx)("li",{children:"Prova con un genere, per esempio Commedia,Romantici, Sport o Dramma"})]})]})},Be="Homepage_Homepage__cu8Zj",ze="Homepage_Homepage__FilteredFilmWrapper__F8pky",Je="Homepage_Homepage__BackBtn__IxNOq",Ve="Homepage_Homepage__MobileSearch__6IvwN",Ke="Homepage_Homepage__MobileSearch__Header__IpGUN",qe="Homepage_Homepage__MobileSearch__CloseBtn__crujT",Ge="Homepage_Homepage__MobileSearch__MoviesWrapper__Qc9Jg",Xe="Homepage_Homepage__MobileSearch__MoviesWrapper__Section__eMChW";var Ye=function(){var e=(0,C.useState)(!1),i=(0,r.Z)(e,2),n=i[0],t=i[1],s=(0,C.useState)(window.innerWidth),a=(0,r.Z)(s,2),o=a[0],l=a[1],c=(0,C.useState)({visibility:!1,datas:{}}),_=(0,r.Z)(c,2),d=_[0],f=_[1],j=(0,z.t)().fetchAllMovies,m=(0,C.useState)(!1),v=(0,r.Z)(m,2),g=v[0],p=v[1],M=(0,C.useState)({filter:"",isOnFocus:!1}),H=(0,r.Z)(M,2),F=H[0],b=H[1],w=(0,z.t)().movies,y=w.filter((function(e){return e.title.toLowerCase().includes(F.filter.toLowerCase())||e.cast.join(" ").toLowerCase().includes(F.filter.toLowerCase())||e.genres.join(" ").toLowerCase().includes(F.filter.toLowerCase())})),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};f({visibility:!d.visibility,datas:e})},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];b({filter:e,isOnFocus:i})},E=function(){p(!g)};return(0,C.useEffect)((function(){j()}),[n]),(0,C.useEffect)((function(){window.addEventListener("resize",(function(){l(window.innerWidth)}))})),(0,h.jsxs)("div",{className:Be,children:[(0,h.jsx)(ye,{isVisible:d.visibility,movieData:d.datas,toggleModal:k,togglePlayModal:E,setRender:t,render:n}),(0,h.jsx)(Pe,{isVisible:g,toggleModal:E}),o<700&&F.isOnFocus?(0,h.jsxs)("div",{className:Ve,children:[(0,h.jsxs)("div",{className:Ke,children:[(0,h.jsx)("span",{className:qe,onClick:function(){return D("",!1)},children:(0,h.jsx)(N.kyg,{})}),(0,h.jsx)($,{onFocus:F.isOnFocus,getFilter:D})]}),y.length?(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:Ge,children:[(0,h.jsx)("h1",{children:"Ecco i risultati della tua ricerca:"}),(0,h.jsxs)("p",{children:["Hai cercato ",(0,h.jsxs)("i",{children:[" ",F.filter," "]})," "]}),y.map((function(e){return(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{className:Xe,onClick:function(){return k(e)},children:[(0,h.jsx)("img",{src:e.poster,alt:e.title},e.id),(0,h.jsx)("p",{children:e.title})]},e.id),(0,h.jsx)(S.Hm_,{onClick:function(){return E()}})]})}))]})}):(0,h.jsx)(Ue,{filter:F.filter})]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(R,{children:(0,h.jsx)(ne,{getFilter:D})}),F.filter?(0,h.jsx)("div",{className:ze,children:y.length?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h1",{children:"Ecco i risultati della tua ricerca:"}),(0,h.jsxs)("p",{children:["Hai cercato ",(0,h.jsxs)("i",{children:[" ",F.filter," "]})," "]}),(0,h.jsxs)("div",{className:Je,onClick:function(){return b({filter:"",isOnFocus:!1})},children:[(0,h.jsx)(u.eJf,{}),"Torna Indietro"]}),y.map((function(e){return(0,h.jsx)("img",{onClick:function(){return k(e)},src:e.poster,alt:e.title},e.id)}))]}):(0,h.jsx)(Ue,{filter:F.filter})}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(xe,{toggleModal:E,toggleDetailsModal:k,movieData:w[0]}),(0,h.jsx)(Le,{toggleModal:k})]}),(0,h.jsx)(x,{})]})]})}},1429:function(e,i,n){e.exports=n.p+"static/media/Stranger-Things-logo.4c69a318b55b9178a8f7.webp"},8127:function(e,i,n){e.exports=n.p+"static/media/hero-stranger.083d9054f3fd1aacf4f4.webp"},1221:function(e,i,n){e.exports=n.p+"static/media/logo.606f44d2a13c4c194bf1.png"}}]);
//# sourceMappingURL=745.0c1b65c9.chunk.js.map