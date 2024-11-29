(function(){"use strict";var e={7841:function(e,t,n){var o=n(1532),r=n(5612);function i(e,t,n,o,i,u){const a=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.Wv)(a)}var u={name:"App"},a=n(787);const c=(0,a.A)(u,[["render",i]]);var f=c,s=n(3449);const l=[{name:"KKWONG'S Portfolio(with Vue.js)",period:"2022.08 ~ ",title:"포트폴리오 웹 사이트",url:"https://kkwongs.github.io/vue3-portfolio/",details:["Vanill JS에서 Vue.js로 마이그레이션","디바이스별 최적의 UX를 위해 반응형 웹 페이지로 구현"],technologies:["Frontend: Vue.js, Sass","Deployment: GitHub Pages"],github:"https://github.com/kkwongs/vue3-portfolio",image:n(8142)},{name:"KKWONG'S Portfolio",period:"2021.11 ~ 2022.08",title:"포트폴리오 웹 사이트",url:"https://kkwongs.github.io/portfolio/",details:["나만의 포트폴리오를 위한 웹사이트 개발",'<a href="https://cdg-portfolio.com/" target="_blank" style="color: #007bff; text-decoration: underline">CDG\'s Portfolio</a>를 모방하여 제작'],technologies:["Frontend: HTML, CSS, JavaScript","Deployment: GitHub Pages"],github:"https://github.com/kkwongs/portfolio",image:n(6291)},{name:"광고돼지",period:"2020.05 ~ 2022.08",title:"자영업자들을 위한 광고 배너 웹 사이트",details:['<a href="https://ko.wikipedia.org/wiki/밀리언_달러_홈페이지" target="_blank" style="color: #007bff; text-decoration: underline">\n        The Million Dollar Homepage\n      </a>에서 아이디어를 얻어 자영업하는 지인들을 돕기 위해 개발\n      <span style="font-weight: 500; color: #dc3545">(밀리언 달러 홈페이지에 검증 안 된 사이트가 있기 때문에 배너 클릭 주의)</span>',"SSR 기반인 Nuxt.js 프레임워크를 사용하여 검색 엔진 최적화"],technologies:["Frontend: Nuxt.js, Vuetify","Backend: Spring Boot, MySQL, Redis, Apache Kafka","Design: Figma","Deployment: Personal Server"],github:"https://github.com/95team/gg-pigs-web",image:n(4111)}];var p=l,d={namespaced:!0,state(){return{isShowProject:!1,projectNum:"",projectInfo:p}},mutations:{showProject(e,t){e.isShowProject=!0,e.projectNum=t},closeProject(e){e.isShowProject=!1}}},h=(0,s.y$)({modules:{project:d}}),g=n(7635);const m=[{path:"",component:()=>n.e(639).then(n.bind(n,4639))}],v=(0,g.aE)({history:(0,g.LA)("vue3-portfolio"),scrollBehavior(e){return e.hash?{el:e.hash,behavior:"smooth"}:{top:0,behavior:"smooth"}},routes:m});var b=v;(0,o.Ef)(f).use(h).use(b).mount("#app")},4111:function(e,t,n){e.exports=n.p+"img/gg-pigs.99b7bc34.png"},6291:function(e,t,n){e.exports=n.p+"img/project1.c4c91d7b.png"},8142:function(e,t,n){e.exports=n.p+"img/project4.de9fe44d.png"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var u=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],i=e[s][2];for(var a=!0,c=0;c<o.length;c++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(s--,1);var f=r();void 0!==f&&(t=f)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{281:"24351b0c",291:"ee082457",311:"1a430913",461:"537da132",639:"c2484175",698:"8d99f311",866:"5a4103b5"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".7c6aae48.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue3-portfolio:";n.l=function(o,r,i,u){if(e[o])e[o].push(r);else{var a,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var l=f[s];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==t+i){a=l;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=o),e[o]=[r];var p=function(t,n){a.onerror=a.onload=null,clearTimeout(d);var r=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/vue3-portfolio/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,r,i){var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",n.nc&&(u.nonce=n.nc);var a=function(n){if(u.onerror=u.onload=null,"load"===n.type)r();else{var o=n&&n.type,a=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+a+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=a,u.parentNode&&u.parentNode.removeChild(u),i(c)}};return u.onerror=u.onload=a,u.href=t,o?o.parentNode.insertBefore(u,o.nextSibling):document.head.appendChild(u),u},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){r=u[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var u=n.miniCssF(o),a=n.p+u;if(t(u,a))return r();e(o,a,null,r,i)}))},r={524:0};n.f.miniCss=function(e,t){var n={639:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var u=n.p+n.u(t),a=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,r[1](a)}};n.l(u,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,u=o[0],a=o[1],c=o[2],f=0;if(u.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(c)var s=c(n)}for(t&&t(o);f<u.length;f++)i=u[f],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},o=self["webpackChunkvue3_portfolio"]=self["webpackChunkvue3_portfolio"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(7841)}));o=n.O(o)})();
//# sourceMappingURL=app.929d3122.js.map