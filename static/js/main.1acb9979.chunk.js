(this.webpackJsonpportfolioproject=this.webpackJsonpportfolioproject||[]).push([[0],{24:function(e,t,a){},39:function(e,t,a){},58:function(e,t,a){},61:function(e,t,a){},85:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(0),r=a.n(s),c=a(17),i=a.n(c),o=(a(58),a(6)),l=a(7),u=a(12),d=a(11),h=(a(39),a(19)),j=Object(h.a)(),b=a(3),p=new(function(){function e(){Object(o.a)(this,e),this.userName="",this.osrsStats=null,this.title1="",this.title2="",this.title3="",this.title4="",this.paragraph1="",this.osrsUsername="IcekraksIG",this.name="Felix Hu",this.tableStats={},this.pageName="Home",this.token=null,Object(b.k)(this)}return Object(l.a)(e,[{key:"setUserName",value:function(e){this.userName=e}},{key:"setTitle",value:function(e,t){switch(e){case 0:this.title1=t;break;case 1:this.title2=t;break;case 2:this.title3=t;break;case 3:this.title4=t}}},{key:"setParagraph",value:function(e){this.paragraph1=e}},{key:"setOsrsUsername",value:function(e){this.osrsUsername=e}},{key:"setTableStats",value:function(e){this.tableStats=e}},{key:"appendTitle",value:function(e,t){switch(e){case 0:this.title1=this.title1+t;break;case 1:this.title2=this.title2+t;break;case 2:this.title3=this.title3+t;break;case 3:this.title4=this.title4+t}}},{key:"appendParagraph",value:function(e){this.paragraph1=this.paragraph1+e}},{key:"appendUserName",value:function(e){this.userName=this.userName+e}},{key:"setPageName",value:function(e){this.pageName=e}}]),e}()),m=a(22),v=(a(59),a(101)),O=a(14),x=a(5),g=a.n(x),f=a(15),y=a(20),w=(a(61),{name:"Felix Hu",amITitle:"whoami",amIString:"dunno what to write",apiTitle2:"Runescape Stats",apiTitle3:"Videography",apiTitle4:"Github"}),N=[{location:"Harbour Bridge",coordinate:[151.2107644753664,-33.85215800198618],link:"https://www.youtube.com/embed/6R_Q0iVVBdw"},{location:"Anzac Bridge",coordinate:[151.18476024702366,-33.868850568527996],link:"https://www.youtube.com/embed/DKC9SfqTBgY"},{location:"Wynyard",coordinate:[151.20243845156062,-33.86582387037274],link:"https://www.youtube.com/embed/4y3ILAQreLM"},{location:"Eastern Creek",coordinate:[150.8706175038421,-33.80604793791279],link:"https://www.youtube.com/embed/9H9qb4e0vNw"},{location:"Chinatown",coordinate:[151.20395868708442,-33.87799980498216],link:"https://www.youtube.com/embed/jDH-Pn58TYU"},{location:"Sydney Olympic Park",coordinate:[151.06516819770854,-33.84592538777842],link:"https://www.youtube.com/embed/hWG3xzNh69Y"},{location:"Sydney Showground",coordinate:[151.0682804,-33.8458129],link:"https://www.youtube.com/embed/3Zuptqsdguc"},{location:"Vaucluse",coordinate:[151.28379642825044,-33.86107034383786],link:"https://www.youtube.com/embed/ExlJvwbFmps"},{location:"Rydalmere",coordinate:[151.0351039148289,-33.80970329227861],link:"https://www.youtube.com/embed/vb2PPgwEBcA"},{location:"University of Sydney",coordinate:[151.1950529,-33.8884706],link:"https://www.youtube.com/embed/zkXsZZUtjCs"}],k=a(92),C=a(93),S="true"===Object({NODE_ENV:"production",PUBLIC_URL:"/personalPortfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DEBUG;function B(){return localStorage.getItem("IcekraksBlog:credentials")}function P(e){p.token=e,localStorage.setItem("IcekraksBlog:credentials",e)}var I=function(){var e=Object(f.a)(g.a.mark((function e(t,a,n){var s,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={method:a,mode:"no-cors",headers:{"Content-Type":"application/json"}},"get"!==a.toLowerCase()&&(s.body=JSON.stringify(n)),e.prev=2,e.next=5,fetch("".concat("http://localhost:8080/").concat(t),s).then((function(e){return e.json()}));case 5:r=e.sent,e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(2),S&&console.error(e.t0),e.abrupt("return",new Error("An unexpected error occurred."));case 12:if(!r.error){e.next=15;break}return S&&console.error(r.error.desc),e.abrupt("return",new Error(r.error.desc));case 15:return e.abrupt("return",r);case 16:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,a,n){return e.apply(this,arguments)}}();function T(e){return E.apply(this,arguments)}function E(){return(E=Object(f.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(t,"GET",null);case 2:if(!((a=e.sent)instanceof Error)){e.next=6;break}return m.b.error(a.message),e.abrupt("return",null);case 6:return e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e,t){return M.apply(this,arguments)}function M(){return(M=Object(f.a)(g.a.mark((function e(t,a){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n="token","Icekraks"===t&&"lol"===a){e.next=4;break}return m.b.error("Wrong Password"),e.abrupt("return",null);case 4:return P(n),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){localStorage.removeItem("IcekraksBlog:credentials"),p.setPageName("Home")}function L(e){return R.apply(this,arguments)}function R(){return(R=Object(f.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("token",null!==t&&console.log(t.toString()),"token"===t){e.next=5;break}return m.b.error("Token not Valid."),e.abrupt("return",null);case 5:return e.abrupt("return",!0);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=Object(O.a)(function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).displayName=function(e){p.setUserName(""),Object(y.a)(e).forEach((function(e,t){setTimeout((function(){p.appendUserName(e)}),200*t)}))},n.closeName=function(){var e=n.state.visible;n.setState({visible:!1}),!0===e&&n.displayString(w)},n.displayString=function(e){for(var t=[Object(y.a)(e.amITitle),Object(y.a)(e.apiTitle2),Object(y.a)(e.apiTitle3),Object(y.a)(e.apiTitle4),Object(y.a)(e.amIString)],a=function(e){p.setTitle(e,""),t[e].forEach((function(t,a){setTimeout((function(){p.appendTitle(e,t)}),200*a)}))},n=0;n<t.length-1;n++)a(n);p.setParagraph(""),t[4].forEach((function(e,t){setTimeout((function(){p.appendParagraph(e)}),200*t)}))},n.swapPage=function(e){switch(e){case 1:p.setPageName("AboutMe");break;case 2:p.setPageName("Video");break;case 3:window.open("https://github.com/Icekraks","_blank");break;case 4:console.log("runescape");break;case 5:console.log("HELLO IAM WORK IN PROGRESS");break;default:p.setPageName("Home")}},n.callApiTest=Object(f.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T("osrs");case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}}),e)}))),n.state={visible:!0,loaded:!1,pageName:"Home"},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({loaded:!0}),this.displayName("Felix Hu");case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.visible;return t.loaded?(window.document.addEventListener("click",this.closeName),Object(n.jsxs)("div",{className:"homeBody",children:[a?null:Object(n.jsx)("div",{className:"ee",children:Object(n.jsx)(k.a,{className:"terminalIcon",onClick:function(){return e.swapPage(5)}})}),Object(n.jsx)("div",{children:Object(n.jsxs)("span",{id:"textBlock",className:a?"textBlock":"fadeOut",children:[Object(n.jsx)(C.a,{className:"chevronRight, titleChevron"}),p.userName,Object(n.jsx)("div",{style:{padding:"5px",display:"inline"},children:Object(n.jsx)("div",{id:"cursor",style:{display:"inline"}})})]})}),Object(n.jsxs)("div",{className:a?"mainElementsHidden":"mainElements",children:[Object(n.jsx)("div",{className:"mainRow",children:Object(n.jsxs)("div",{className:"mainQuadrant",children:[Object(n.jsx)("div",{onClick:function(){return e.swapPage(1)},className:"titleButton",children:Object(n.jsxs)("h1",{className:"navigationH1",children:[Object(n.jsx)(C.a,{className:"chevronRight"}),p.title1]})}),Object(n.jsxs)("div",{className:"paragraphBlock",children:[Object(n.jsxs)("p",{className:"paragraph",children:["I am a 23 year old male that graduated from the University of Sydney with a ",Object(n.jsx)("b",{children:"Bachelor of Computer Science"})," in 2019."]}),Object(n.jsxs)("p",{className:"paragraph",children:["I spent a year working in 2020 during Covid working at a company called ",Object(n.jsx)("b",{children:"Leigo Industries"})," where most of the time was spent developing my skills using ReactJS and MobX working on client projects and internal projects."]}),Object(n.jsx)("p",{className:"paragraph",children:"My other hobbies include building Computers, Videography, Photography and Cars."})]})]})}),Object(n.jsxs)("div",{className:"mainRow",children:[Object(n.jsxs)("div",{className:"mainQuadrant",children:[Object(n.jsx)("div",{onClick:function(){return e.swapPage(2)},className:"titleButton",children:Object(n.jsxs)("h1",{onClick:function(){return e.swapPage(2)},className:"navigationH1",children:[Object(n.jsx)(C.a,{className:"chevronRight"}),p.title3]})}),Object(n.jsx)("div",{className:"paragraphBlock",children:Object(n.jsx)("div",{className:"youtubeEmbed",children:Object(n.jsx)("iframe",{title:"showreelvideo",id:"showreel",width:"100%",height:"100%",src:"https://www.youtube.com/embed/IZEM1jpcEhY",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})]}),Object(n.jsxs)("div",{className:"mainQuadrant",children:[Object(n.jsx)("div",{onClick:function(){return e.swapPage(3)},className:"titleButton",children:Object(n.jsxs)("h1",{onClick:function(){return e.swapPage(3)},className:"navigationH1",children:[Object(n.jsx)(C.a,{className:"chevronRight"}),p.title4]})}),Object(n.jsx)("div",{className:"paragraphBlock",children:Object(n.jsx)("p",{className:"paragraph",children:"My Github is where all my projects are hosted including this portfolio if you want to have a look. It varies from uni work to personal projects or tools, that I have used."})})]})]})]})]})):null}}]),a}(s.Component)),U=(a(24),a(94)),D=Object(O.a)(function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"auxBody",children:Object(n.jsxs)("div",{id:"auxChild",className:"auxChild",children:[Object(n.jsx)("div",{className:"auxNavigation",children:Object(n.jsx)("div",{className:"auxButton",children:Object(n.jsxs)("h1",{onClick:function(){return p.setPageName("Home")},className:"navigationH1",children:[Object(n.jsx)(U.a,{className:"ArrowCircle"}),"Back"]})})}),Object(n.jsxs)("div",{className:"auxPage",children:[Object(n.jsx)("div",{className:"auxTitle",children:"About Me"}),Object(n.jsxs)("div",{className:"paragraphBlockText",children:[Object(n.jsxs)("p",{className:"paragraph",children:["I am a 23 year old male that graduated from the University of Sydney with a ",Object(n.jsx)("b",{children:"Bachelor of Computer Science"})," in 2019."]}),Object(n.jsxs)("p",{className:"paragraph",children:["I spent a year working in 2020 during COVID working at a company called ",Object(n.jsx)("b",{children:"Leigo Industries"})," where most of the time was spent developing my skills using ",Object(n.jsx)("b",{children:"ReactJS and MobX"})," working on client projects and internal projects, building user interfaces, websites and admin panels."]}),Object(n.jsx)("p",{className:"paragraph",children:"I have also other skills besides the Javascript/ReactJS/MobX, in Java and C++ as those were fundamentals taught at University. My main focus is on Javascript and Web Development for the front end with user interfaces and usability in mind, as that is what I enjoy."}),Object(n.jsxs)("p",{className:"paragraph",children:["My other hobbies include ",Object(n.jsx)("b",{children:"building Computers, Videography, Photography and Cars"}),"."]}),Object(n.jsxs)("p",{className:"paragraph",children:["I have been filming video and taking photos since 2016 and have gather skills and gear throughout the years through self learning via the internet and experimenting. I have also self taught myself video editing in ",Object(n.jsx)("b",{children:"Adobe Premiere Pro"})," and ",Object(n.jsx)("b",{children:"Adobe After Effects"})," putting together cinematic pieces for my satisfaction and others to watch."]})]})]})]})})}}]),a}(s.Component)),V=a(28),_=a(8),J=a.n(_),G=a(95);a(49);J.a.workerClass=a(84).default;var W=Object(V.c)({accessToken:"pk.eyJ1IjoiaWNla3Jha3MiLCJhIjoiY2tuNDhic3U5MW93ejJubnp1OW92NmVkOCJ9.IIcLN4Ah-LS9yFuTX4y1VA"}),Y=Object(O.a)(function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).openYoutube=function(){window.open("https://www.youtube.com/channel/UCWx3bqTrPhhx6XmRFt1hR2w","_blank")},n.overlayState=function(e,t){n.setState({overlay:e,location:t}),e?(document.getElementById("overlay").style.display="flex",document.getElementById("videoBody").style.display="none"):(document.getElementById("overlay").style.display="none",document.getElementById("videoBody").style.display="flex")},n.state={overlay:!1,location:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state.location;return Object(n.jsxs)("div",{className:"auxBody",children:[Object(n.jsxs)("div",{id:"overlay",className:"overlay",children:[Object(n.jsx)("div",{className:"overlayNavigation",children:Object(n.jsx)("div",{className:"overlayButton",children:Object(n.jsxs)("h1",{onClick:function(){return e.overlayState(!1,"")},className:"overlayH1",children:[Object(n.jsx)(U.a,{className:"ArrowCircle"}),"Close"]})})}),Object(n.jsxs)("div",{className:"overlayPage",children:[Object(n.jsx)("div",{className:"auxTitle videoTitle",children:t.location}),Object(n.jsx)("div",{className:"videoDivOverlay",children:Object(n.jsx)("iframe",{title:"showreelvideo",id:"showreel"+t.location,width:"100%",height:"100%",src:t.link,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})]}),Object(n.jsxs)("div",{id:"videoBody",className:"auxChild",children:[Object(n.jsx)("div",{className:"auxNavigation",children:Object(n.jsx)("div",{className:"auxButton",children:Object(n.jsxs)("h1",{onClick:function(){return p.setPageName("Home")},className:"navigationH1",children:[Object(n.jsx)(U.a,{className:"ArrowCircle"}),"Back"]})})}),Object(n.jsxs)("div",{className:"auxPage",children:[Object(n.jsx)("div",{className:"auxTitle",children:"Videography"}),Object(n.jsx)("div",{className:"secondaryNav",children:Object(n.jsx)("div",{className:"auxButton",children:Object(n.jsxs)("h1",{onClick:function(){return e.openYoutube},className:"navigationH1",children:[Object(n.jsx)(G.a,{className:"ArrowCircle"}),"Link to Youtube Channel"]})})}),Object(n.jsxs)("div",{className:"paragraphBlock",children:[Object(n.jsxs)("div",{className:"mapDiv",children:[Object(n.jsx)(W,{style:"mapbox://styles/mapbox/dark-v10",center:[151.0732534,-33.8712938],containerStyle:{height:"100%",width:"100%"},zoom:[10.5],children:Object(n.jsx)(V.b,{type:"symbol",id:"marker",layout:{"icon-image":"attraction-15"},children:N.map((function(t){return Object(n.jsx)(V.a,{onClick:function(){return e.overlayState(!0,t)},coordinates:t.coordinate})}))})}),Object(n.jsx)("span",{style:{paddingTop:"10px"},children:"Click Map Markers to See Individual Videos."})]}),Object(n.jsx)("div",{className:"videoDiv",children:Object(n.jsx)("iframe",{title:"showreelvideo",id:"showreel",width:"100%",height:"100%",src:"https://www.youtube.com/embed/IZEM1jpcEhY",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})]})]})]})}}]),a}(s.Component)),K=Object(O.a)(function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"auxBody",children:[Object(n.jsx)("div",{className:"auxNavigation",children:Object(n.jsx)("div",{className:"auxButton",children:Object(n.jsxs)("h1",{onClick:function(){return p.setPageName("Home")},className:"navigationH1",children:[Object(n.jsx)("span",{children:"> "}),"Back"]})})}),Object(n.jsx)("div",{className:"auxPage",children:Object(n.jsx)("div",{className:"auxTitle",children:"Github"})})]})}}]),a}(s.Component)),X=a(96),Q=a(97),Z=a(98),q=a(99),z=a(100),$=Object(O.a)(function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).submitLogin=function(){var e=Object(f.a)(g.a.mark((function e(t){var a,s,r,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state,s=a.username,r=a.password,console.log(s,r),e.next=5,H(s,r);case 5:c=e.sent,console.log(c),null!==c&&p.setPageName("CMSPage");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={loaded:!1,username:"",password:"",attribute:!1},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(t=B())){e.next=6;break}return e.next=4,L(t);case 4:e.sent&&(p.token=t,p.setPageName("CMSPage"));case 6:this.setState({loaded:!0});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.loaded,s=t.attribute;return a?Object(n.jsx)("div",{className:"auxBody",children:Object(n.jsxs)("div",{id:"auxChild",className:"auxChild",children:[Object(n.jsx)("div",{className:"auxNavigation",children:Object(n.jsx)("div",{className:"auxButton",children:Object(n.jsxs)("h1",{onClick:function(){return p.setPageName("Home")},className:"navigationH1",children:[Object(n.jsx)(U.a,{className:"ArrowCircle"}),"Back"]})})}),Object(n.jsxs)("div",{className:"auxPage",children:[Object(n.jsx)("div",{className:"auxTitle",children:"Login"}),Object(n.jsx)("div",{className:"paragraphBlock",children:Object(n.jsxs)(X.a,{onSubmit:function(t){return e.submitLogin(t)},className:"loginForm",children:[Object(n.jsxs)(Q.a,{className:"loginFormGroup",children:[Object(n.jsx)(Z.a,{children:"Username"}),Object(n.jsx)("br",{}),Object(n.jsx)(q.a,{onChange:function(t){e.setState({username:t.target.value})}})]}),Object(n.jsxs)(Q.a,{className:"loginFormGroup",children:[Object(n.jsx)(Z.a,{children:"Password"}),Object(n.jsx)("br",{}),Object(n.jsx)(q.a,{id:"passwordField",type:"password",onChange:function(t){return e.setState({password:t.target.value})}})]}),Object(n.jsx)(z.a,{onClick:function(){s?(document.getElementById("passwordField").setAttribute("type","password"),e.setState({attribute:!1})):(document.getElementById("passwordField").setAttribute("type","text"),e.setState({attribute:!0}))},children:!1===s?"Show Password":"Hide Password"}),Object(n.jsx)(z.a,{type:"submit",id:"submitButton",children:"Login"})]})})]})]})}):null}}]),a}(s.Component)),ee=(a(85),{Home:F,AboutMe:D,Video:Y,Github:K,Login:$,CMSPage:Object(O.a)(function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={loaded:!1},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(B());case 2:e.sent||p.setPageName("Home"),this.setState({loaded:!0});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loaded?Object(n.jsx)("div",{className:"cmsBody",children:Object(n.jsxs)("div",{id:"cmsChild",className:"cmsChild",children:[Object(n.jsxs)("div",{className:"cmsNavBar",children:["hi Iam the nav Bar",Object(y.a)(Array(10)).map((function(e,t){return Object(n.jsx)(z.a,{className:"navBarButton",children:"nav".concat(t)})})),Object(n.jsx)(z.a,{className:"navBarButton",style:{marginTop:"auto"},onClick:A,children:"Logout"})]}),Object(n.jsxs)("div",{className:"auxPage",children:[Object(n.jsx)("div",{className:"auxTitle",children:"CMS Page"}),Object(n.jsx)("div",{className:"paragraphBlock",children:"WORK IN PROGRESS CMS"})]})]})}):null}}]),a}(s.Component))}),te=Object(O.a)(function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={visible:!0},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"BodyElement",children:"Video"===p.pageName?Object(n.jsx)(ee.Video,{}):"AboutMe"===p.pageName?Object(n.jsx)(ee.AboutMe,{}):"Github"===p.pageName?Object(n.jsx)(ee.Github,{}):"Login"===p.pageName?Object(n.jsx)(ee.Login,{}):"CMSPage"===p.pageName?Object(n.jsx)(ee.CMSPage,{}):Object(n.jsx)(ee.Home,{})})}}]),a}(s.Component)),ae=r.a.createContext(null),ne=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)(ae.Provider,{value:p,children:Object(n.jsxs)(v.c,{history:j,children:[Object(n.jsx)(m.a,{hideProgressBar:!0,pauseOnHover:!1,pauseOnFocusLoss:!1,autoClose:3e3}),Object(n.jsx)(se,{exact:"/",component:te,redirectTo:"/",accessible:!0})]})})}}]),a}(s.Component),se=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;Object(o.a)(this,a),n=t.call(this,e);var s={};return Object.keys(e).forEach((function(t){s[t]=e[t]})),s.accessible=void 0,s.path=void 0,s.redirectTo=void 0,s.component=void 0,s.exact=void 0,n.exact="exact"in n.props,n.props_copy=s,n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props;if(this.props.accessible){var t=this.props_copy;return Object(n.jsx)(v.b,{path:e.path,exact:this.exact,render:function(a){return r.a.createElement(e.component,Object.assign(t,a))}})}return Object(n.jsx)(v.b,{path:e.path,exact:this.exact,render:function(){return Object(n.jsx)(v.a,{to:e.redirectTo})}})}}]),a}(s.Component),re=ne,ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,102)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(re,{})}),document.getElementById("root")),ce()}},[[88,1,2]]]);
//# sourceMappingURL=main.1acb9979.chunk.js.map