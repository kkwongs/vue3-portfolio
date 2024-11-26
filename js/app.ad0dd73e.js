(function(){"use strict";var t={2646:function(t,e,o){var n=o(1532),i=o(5612);function r(t,e,o,n,r,s){const c=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.Wv)(c)}var s={name:"App"},c=o(787);const l=(0,c.A)(s,[["render",r]]);var a=l,u=o(3449);const p=[{title:"포트폴리오 웹 사이트",site:"https://kkwongs.github.io/portfolio/",github:"https://github.com/kkwongs/portfolio",description:"\n    포트폴리오 용도로 제작한 웹사이트입니다.<br /><br />\n    애니메이션 라이브러리인 GSAP을 통해 특정 위치에서 자연스럽게 TOP버튼이\n    나타나고 사라지도록 하였습니다. 그리고 특정 위치를 알기 위해 Window\n    인터페이스의 scrollY 속성을 사용했는데 스크롤 할 때마다 계속해서\n    호출되는 것을 방지하기 위해 Lodash 라이브러리의 _.throttle 메소드를\n    사용하였습니다. Projects section을 구현하기 위해 Swiper 라이브러리를\n    사용하여 하나의 프로젝트씩 나올 수 있도록 슬라이드를 구현하였습니다.\n    ",technology:"\n    Frontend: HTML, CSS, JavaScript<br />\n    Deployment: GitHub Pages\n    ",image:o(6291)},{title:"Momentum(ToDoList)",site:"https://kkwongs.github.io/Momentum/",github:"https://github.com/kkwongs/Momentum",description:"\n    Nomad Coders 강의를 보고 따라 해본 프로젝트입니다.<br /><br />\n    setInterval api를 사용하여 매초 시간이 갱신되도록 하였고, localStorage\n    api를 사용하여 이름을 적고 ToDoList를 저장하거나 삭제할 수 있도록\n    하였습니다. 그리고 OpenWeatherMap에서 제공하는 Weather api를 사용하여\n    사용자의 위치와 기온을 확인할 수 있도록 하였습니다.\n    ",technology:"\n    Frontend: HTML, CSS, JavaScript<br />\n    Deployment: GitHub Pages\n    ",image:o(4312)},{title:"오버워치 영웅 선택",site:"https://kkwongs.github.io/overwatch-hero-selector-vanilla/",github:"https://github.com/kkwongs/overwatch-hero-selector-vanilla",description:"\n    패스트캠퍼스 강의를 참고하여 오버워치 게임의 영웅 선택 화면을\n    구현해봤습니다.<br /><br />\n    처음으로 SCSS라는 신세계를 경험했습니다. CSS에서의 복잡하고 반복되는\n    내용을 JS처럼 변수를 사용하고 for문을 사용함으로써 코드를 훨씬 간결하게\n    하는 것이 신기하고 재밌었습니다.\n    ",technology:"\n    Frontend: HTML, SCSS<br />\n    Deployment: GitHub Pages\n    ",image:o(6353)},{title:"포트폴리오 웹 사이트 with Vue.js",site:"https://kkwongs.github.io/vue3-portfolio/#/",github:"https://github.com/kkwongs/vue3-portfolio",description:"\n    기존에 VanillJS로 만들었던 포트폴리오 웹 페이지를 Vue.js 프레임워크를 사용하여 제작하였습니다.<br /><br />\n    새로운 프로젝트를 쉽게 추가하기 위해 반복됐던 코드들을 Vue 프레임워크를 사용하여 간결하게 표현하였습니다.\n    ",technology:"\n    Frontend: Vue.js<br />\n    Deployment: GitHub Pages\n    ",image:o(8142)},{title:"광고돼지",site:"https://gg-pigs.com/",github:"https://github.com/95team/gg-pigs-web",description:"\n    대학교 친구들과 3인 프로젝트를 진행 중이고 Front를 맡고 있습니다.<br />\n    SEO 를 위해 SSR 기반인 Nuxt 프레임워크를 사용하였습니다. 디자인 프레임워크는 Vuetify 를 사용하였습니다.<br /><br />\n    CORS 문제 등 모든 게 처음이다 보니 많은 어려움을 겪으며 하나씩 해결해나가고 있습니다.\n    ",technology:"\n    Frontend: Nuxt.js, Vuetify<br />\n    Backend: Spring Boot, MySQL, Redis, Apache Kafka<br />\n    Design: Figma<br />\n    Deployment: Personal Server\n    ",image:o(4111)}];var d=p,g={namespaced:!0,state(){return{isShowProject:!1,projectNum:"",projectInfo:d}},mutations:{showProject(t,e){t.isShowProject=!0,t.projectNum=e},closeProject(t){t.isShowProject=!1}}},v=(0,u.y$)({modules:{project:g}}),m=o(7635);function f(t,e,o,n,r,s){const c=(0,i.g2)("MainHeader"),l=(0,i.g2)("MastheadSection"),a=(0,i.g2)("AboutMeSection"),u=(0,i.g2)("ProjectsSection"),p=(0,i.g2)("MainFooter"),d=(0,i.g2)("ScrollTop");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(c),(0,i.bF)(l),(0,i.bF)(a),(0,i.bF)(u),(0,i.bF)(p),(0,i.bF)(d)],64)}const h={class:"inner"},k={class:"logo"},b={class:"menu"};function L(t,e,o,n,r,s){const c=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("header",null,[(0,i.Lk)("div",h,[(0,i.Lk)("div",k,[(0,i.bF)(c,{to:"/"},{default:(0,i.k6)((()=>e[0]||(e[0]=[(0,i.eW)("KKWONG'S Portfolio")]))),_:1})]),(0,i.Lk)("ul",b,[(0,i.Lk)("li",null,[(0,i.bF)(c,{to:"/#about-me"},{default:(0,i.k6)((()=>e[1]||(e[1]=[(0,i.eW)("About me")]))),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(c,{to:"/#projects"},{default:(0,i.k6)((()=>e[2]||(e[2]=[(0,i.eW)("Projects")]))),_:1})])])])])}var A={};const w=(0,c.A)(A,[["render",L],["__scopeId","data-v-44601a76"]]);var j=w;const S={class:"masthead"};function M(t,e,o,n,r,s){return(0,i.uX)(),(0,i.CE)("section",S,e[0]||(e[0]=[(0,i.Lk)("div",{class:"inner"},[(0,i.Lk)("div",{class:"title"},"Front-End Developer"),(0,i.Lk)("div",{class:"description"},[(0,i.Lk)("p",null,"안녕하세요."),(0,i.Lk)("p",null,"배우는 것과 배운 지식을 적용하는 것을 좋아하는 웹 개발자입니다."),(0,i.Lk)("p",null,"어떤 일을 하더라도 기본기를 중요하게 생각합니다.")])],-1)]))}var F={};const P=(0,c.A)(F,[["render",M],["__scopeId","data-v-22b82a18"]]);var D=P;const y={class:"about-me",id:"about-me"},C={class:"inner"},I={class:"info"},B={class:"info-wrapper"},H={class:"materail-icons"},O={class:"info-wrapper"},T={class:"materail-icons"},W={class:"info-wrapper"},V={class:"materail-icons"},Q={class:"info-wrapper"},K={class:"materail-icons"},N={class:"info-wrapper"},J={class:"materail-icons"},G={class:"info-wrapper"},Y={class:"materail-icons"};function E(t,e,o,n,r,s){const c=(0,i.g2)("AccountIcon"),l=(0,i.g2)("CalendarIcon"),a=(0,i.g2)("MapMarkerIcon"),u=(0,i.g2)("CellphoneIcon"),p=(0,i.g2)("EmailIcon"),d=(0,i.g2)("SchoolIcon");return(0,i.uX)(),(0,i.CE)("section",y,[(0,i.Lk)("div",C,[e[6]||(e[6]=(0,i.Lk)("div",{class:"title"},"About me",-1)),(0,i.Lk)("ul",I,[(0,i.Lk)("li",null,[(0,i.Lk)("div",B,[(0,i.Lk)("div",H,[(0,i.bF)(c)]),e[0]||(e[0]=(0,i.Lk)("div",null,[(0,i.Lk)("div",{class:"title"},"이름"),(0,i.Lk)("div",{class:"description"},"권기현")],-1))])]),(0,i.Lk)("li",null,[(0,i.Lk)("div",O,[(0,i.Lk)("div",T,[(0,i.bF)(l)]),e[1]||(e[1]=(0,i.Lk)("div",null,[(0,i.Lk)("div",{class:"title"},"생년월일"),(0,i.Lk)("div",{class:"description"},"95.10.26")],-1))])]),(0,i.Lk)("li",null,[(0,i.Lk)("div",W,[(0,i.Lk)("div",V,[(0,i.bF)(a)]),e[2]||(e[2]=(0,i.Lk)("div",null,[(0,i.Lk)("div",{class:"title"},"주소"),(0,i.Lk)("div",{class:"description"},"경기도 용인시 기흥구")],-1))])]),(0,i.Lk)("li",null,[(0,i.Lk)("div",Q,[(0,i.Lk)("div",K,[(0,i.bF)(u)]),e[3]||(e[3]=(0,i.Lk)("div",null,[(0,i.Lk)("div",{class:"title"},"연락처"),(0,i.Lk)("div",{class:"description"},"010 6512 5741")],-1))])]),(0,i.Lk)("li",null,[(0,i.Lk)("div",N,[(0,i.Lk)("div",J,[(0,i.bF)(p)]),e[4]||(e[4]=(0,i.Lk)("div",null,[(0,i.Lk)("div",{class:"title"},"이메일"),(0,i.Lk)("div",{class:"description"},"kihyun5741@gmail.com")],-1))])]),(0,i.Lk)("li",null,[(0,i.Lk)("div",G,[(0,i.Lk)("div",Y,[(0,i.bF)(d)]),e[5]||(e[5]=(0,i.Lk)("div",null,[(0,i.Lk)("div",{class:"title"},"학력"),(0,i.Lk)("div",{class:"description"},"단국대학교 소프트웨어학과")],-1))])])])])])}var R=o(7311),x=o(2698),X=o(6461),Z=o(8281),q=o(1866),z=o(5291),U={components:{AccountIcon:R.A,CalendarIcon:x.A,MapMarkerIcon:X.A,CellphoneIcon:Z.A,EmailIcon:q.A,SchoolIcon:z.A}};const _=(0,c.A)(U,[["render",E],["__scopeId","data-v-43ebfef9"]]);var $=_;const tt={class:"projects",id:"projects"},et={class:"inner"};function ot(t,e,o,r,s,c){const l=(0,i.g2)("SwiperProject"),a=(0,i.g2)("DetailProject");return(0,i.uX)(),(0,i.CE)("section",tt,[(0,i.Lk)("div",et,[e[0]||(e[0]=(0,i.Lk)("div",{class:"title"},"Projects",-1)),(0,i.bF)(l),(0,i.bF)(n.eB,{name:"fade"},{default:(0,i.k6)((()=>[t.isShowProject?((0,i.uX)(),(0,i.Wv)(a,{key:0})):(0,i.Q3)("",!0)])),_:1})])])}const nt=["src"],it=["onClick"];function rt(t,e,o,n,r,s){const c=(0,i.g2)("swiper-slide"),l=(0,i.g2)("swiper");return(0,i.uX)(),(0,i.Wv)(l,{navigation:!0,pagination:{dynamicBullets:!0,clickable:!0},modules:n.modules},{default:(0,i.k6)((()=>[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(t.projectInfo,((e,o)=>((0,i.uX)(),(0,i.Wv)(c,{key:o},{default:(0,i.k6)((()=>[(0,i.Lk)("img",{src:e.image,alt:"Project Image"},null,8,nt),(0,i.Lk)("div",{class:"btn",onClick:e=>t.showProject(o)}," 자세히 보기 ",8,it)])),_:2},1024)))),128))])),_:1},8,["modules"])}var st=o(2805),ct=o(2055),lt={components:{Swiper:st.RC,SwiperSlide:st.qr},setup(){return{modules:[ct.Vx,ct.dK]}},computed:{...(0,u.aH)("project",["projectInfo"])},methods:{...(0,u.PY)("project",["showProject"])}};const at=(0,c.A)(lt,[["render",rt]]);var ut=at,pt=o(1288);const dt={class:"project-info"},gt={class:"inner"},vt={class:"title"},mt={class:"info"},ft={class:"title"},ht={class:"description"},kt=["href"],bt={class:"description"},Lt=["href"],At={class:"title"},wt={class:"description"},jt=["innerHTML"],St={class:"title"},Mt={class:"description"},Ft=["innerHTML"];function Pt(t,e,o,n,r,s){const c=(0,i.g2)("LinkIcon"),l=(0,i.g2)("FileDocumentIcon"),a=(0,i.g2)("ToolsIcon");return(0,i.uX)(),(0,i.CE)("div",dt,[(0,i.Lk)("div",gt,[(0,i.Lk)("div",{class:"cancel btn",onClick:e[0]||(e[0]=(...e)=>t.closeProject&&t.closeProject(...e))},"닫기"),(0,i.Lk)("div",vt,(0,pt.v_)(t.projectInfo[t.projectNum].title),1),e[6]||(e[6]=(0,i.Lk)("hr",null,null,-1)),(0,i.Lk)("ul",mt,[(0,i.Lk)("li",null,[(0,i.Lk)("div",ft,[(0,i.bF)(c,{size:28,class:"material-icons"}),e[1]||(e[1]=(0,i.eW)(" URL "))]),(0,i.Lk)("div",ht,[e[2]||(e[2]=(0,i.eW)(" 웹사이트: ")),(0,i.Lk)("a",{href:t.projectInfo[t.projectNum].site,target:"_blank"},(0,pt.v_)(t.projectInfo[t.projectNum].site),9,kt)]),(0,i.Lk)("div",bt,[e[3]||(e[3]=(0,i.eW)(" Github: ")),(0,i.Lk)("a",{href:t.projectInfo[t.projectNum].github,target:"_blank"},(0,pt.v_)(t.projectInfo[t.projectNum].github),9,Lt)])]),(0,i.Lk)("li",null,[(0,i.Lk)("div",At,[(0,i.bF)(l,{size:28,class:"material-icons"}),e[4]||(e[4]=(0,i.eW)(" Summary "))]),(0,i.Lk)("div",wt,[(0,i.Lk)("span",{innerHTML:t.projectInfo[t.projectNum].description},null,8,jt)])]),(0,i.Lk)("li",null,[(0,i.Lk)("div",St,[(0,i.bF)(a,{size:28,class:"material-icons"}),e[5]||(e[5]=(0,i.eW)(" Technology "))]),(0,i.Lk)("div",Mt,[(0,i.Lk)("span",{innerHTML:t.projectInfo[t.projectNum].technology},null,8,Ft)])])])])])}var Dt=o(4024),yt=o(4378),Ct=o(7056),It={components:{LinkIcon:Dt.A,FileDocumentIcon:yt.A,ToolsIcon:Ct.A},computed:{...(0,u.aH)("project",["projectNum","projectInfo"])},methods:{...(0,u.PY)("project",["closeProject"])}};const Bt=(0,c.A)(It,[["render",Pt],["__scopeId","data-v-cab3700e"]]);var Ht=Bt,Ot={components:{SwiperProject:ut,DetailProject:Ht},computed:{...(0,u.aH)("project",["isShowProject"])}};const Tt=(0,c.A)(Ot,[["render",ot],["__scopeId","data-v-7ca18d32"]]);var Wt=Tt,Vt="data:image/png;base64,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";function Qt(t,e,o,n,r,s){return(0,i.uX)(),(0,i.CE)("footer",null,e[0]||(e[0]=[(0,i.Lk)("div",{class:"inner"},[(0,i.Lk)("a",{href:"https://github.com/kkwongs",target:"_blank",class:"git-logo"},[(0,i.Lk)("img",{src:Vt,alt:"GitHub"})]),(0,i.Lk)("div",{class:"copyright"},"© 2021. KKOWNG'S. All Rights Reserved")],-1)]))}var Kt={};const Nt=(0,c.A)(Kt,[["render",Qt],["__scopeId","data-v-090a6753"]]);var Jt=Nt;function Gt(t,e,o,r,s,c){const l=(0,i.g2)("ArrowUpBoldIcon"),a=(0,i.g2)("router-link");return(0,i.bo)(((0,i.uX)(),(0,i.Wv)(n.eB,{name:"fade"},{default:(0,i.k6)((()=>[(0,i.bF)(a,{to:"/"},{default:(0,i.k6)((()=>[(0,i.bF)(l,{size:36,class:"material-icons"})])),_:1})])),_:1},512)),[[n.aG,s.isShow]])}var Yt=o(5936),Et=o(6932),Rt={components:{ArrowUpBoldIcon:Yt.A},data(){return{isShow:!1}},mounted(){window.addEventListener("scroll",(0,Et.throttle)(this.scroll,300))},beforeUnmount(){window.removeEventListener("scroll",this.scroll)},methods:{scroll(){window.scrollY>300?this.isShow=!0:this.isShow=!1}}};const xt=(0,c.A)(Rt,[["render",Gt],["__scopeId","data-v-74611c95"]]);var Xt=xt,Zt={name:"HomePage",components:{MainHeader:j,MastheadSection:D,AboutMeSection:$,ProjectsSection:Wt,MainFooter:Jt,ScrollTop:Xt}};const qt=(0,c.A)(Zt,[["render",f]]);var zt=qt;const Ut=[{path:"/",component:zt}],_t=(0,m.aE)({history:(0,m.Bt)(),routes:Ut,scrollBehavior(t){return t.hash?{el:t.hash,behavior:"smooth"}:{top:0,behavior:"smooth"}}});var $t=_t;(0,n.Ef)(a).use(v).use($t).mount("#app")},4111:function(t,e,o){t.exports=o.p+"img/gg-pigs.99b7bc34.png"},6291:function(t,e,o){t.exports=o.p+"img/project1.c4c91d7b.png"},4312:function(t,e,o){t.exports=o.p+"img/project2.7667e8a4.png"},6353:function(t,e,o){t.exports=o.p+"img/project3.ff043db7.png"},8142:function(t,e,o){t.exports=o.p+"img/project4.de9fe44d.png"}},e={};function o(n){var i=e[n];if(void 0!==i)return i.exports;var r=e[n]={id:n,loaded:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}o.m=t,function(){var t=[];o.O=function(e,n,i,r){if(!n){var s=1/0;for(u=0;u<t.length;u++){n=t[u][0],i=t[u][1],r=t[u][2];for(var c=!0,l=0;l<n.length;l++)(!1&r||s>=r)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(c=!1,r<s&&(s=r));if(c){t.splice(u--,1);var a=i();void 0!==a&&(e=a)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[n,i,r]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){o.p="/vue3-portfolio/"}(),function(){var t={524:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,r,s=n[0],c=n[1],l=n[2],a=0;if(s.some((function(e){return 0!==t[e]}))){for(i in c)o.o(c,i)&&(o.m[i]=c[i]);if(l)var u=l(o)}for(e&&e(n);a<s.length;a++)r=s[a],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(u)},n=self["webpackChunkvue3_portfolio"]=self["webpackChunkvue3_portfolio"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(2646)}));n=o.O(n)})();
//# sourceMappingURL=app.ad0dd73e.js.map