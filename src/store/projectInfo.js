const projectInfo = [
  {
    name: "KKWONG'S Portfolio(with Vue.js)",
    period: "2022.07 ~ (1인 개인 프로젝트)",
    title: "포트폴리오 웹 사이트",
    url: "https://kkwongs.github.io/vue3-portfolio/",
    details: [
      "Vanill JS에서 Vue.js로 마이그레이션",
      "디바이스별 최적의 UX를 위해 반응형 웹 페이지로 구현",
    ],
    technologies: ["Frontend: Vue.js, Sass", "Deployment: GitHub Pages"],
    github: "https://github.com/kkwongs/vue3-portfolio",
    mainFunction: "자기소개, 인적 사항, 프로젝트 경험",
    background: [
      "Vue.js를 공부하면서 이전에 작업했던 포트폴리오를 Vue.js로 다시 만들어보고 싶다는 생각이 들었어요.",
    ],
    meaning: [
      "HTML, CSS, JavaScript를 .vue 파일 안에 통합하여 사용하면서 컴포넌트를 재사용해 개발 효율을 높일 수 있었어요. 특히 <BaseButton> 컴포넌트를 만들어 버튼 태그에 일관되게 적용할 수 있었어요.",
      "하나의 파일에서 데이터를 관리하다가 여러 개의 컴포넌트로 나누면서 데이터 관리의 어려움을 겪었는데, Vuex 라이브러리를 설치해 중앙 집중식 상태 관리를 도입하면서 데이터를 쉽게 주고받을 수 있었어요.",
      "Sass의 문법을 활용하여 반응형 웹 페이지를 체계적으로 구현할 수 있었어요. 특히 변수, 믹스인, 함수 등의 기능을 활용함으로써 코드의 재사용성과 유지 보수성을 높일 수 있었어요.",
    ],
  },
  {
    name: "KKWONG'S Portfolio",
    period: "2021.11 ~ 2022.08 (1인 개인 프로젝트)",
    title: "포트폴리오 웹 사이트",
    url: "https://kkwongs.github.io/portfolio/",
    details: [
      "나만의 포트폴리오를 위한 웹사이트 개발",
      `<a href="https://cdg-portfolio.com/" target="_blank" style="color: #007bff; text-decoration: underline">CDG's Portfolio</a>를 모방하여 제작`,
    ],
    technologies: [
      "Frontend: HTML, CSS, JavaScript",
      "Deployment: GitHub Pages",
    ],
    github: "https://github.com/kkwongs/portfolio",
    mainFunction: "자기소개, 인적 사항, 프로젝트 경험",
    background: [
      "HTML, CSS, JavaScript로 클론 코딩 강의를 따라하던 중, 나만의 포트폴리오를 만들고 싶다는 생각이 들었어요. 그래서 프론트엔드 개발자 포트폴리오를 검색하며 마음에 드는 디자인을 찾아 클론해보기로 했어요.",
    ],
    meaning: [
      "강의 없이 직접 클론을 진행하면서 HTML, CSS, JavaScript 실력을 더욱 향상시킬 수 있었어요. 또한 Swiper, Lodash, GSAP와 같은 라이브러리를 적용하면서 라이브러리를 활용하는 방법에 대해 더 깊이 이해할 수 있었어요.",
    ],
  },
  {
    name: "광고돼지",
    period: "2020.05 ~ 2022.08 (3인 팀 프로젝트)",
    // url: "https://gg-pigs.com/",
    title: "자영업자들을 위한 광고 배너 웹 사이트",
    details: [
      `<a href="https://ko.wikipedia.org/wiki/밀리언_달러_홈페이지" target="_blank" style="color: #007bff; text-decoration: underline">
        The Million Dollar Homepage
      </a>에서 아이디어를 얻어 자영업하는 사람들을 돕기 위해 개발
      <span style="font-weight: 500; color: #dc3545">(밀리언 달러 홈페이지에 검증 안 된 사이트가 있기 때문에 배너 클릭 주의)</span>`,
      "SSR 기반인 Nuxt.js 프레임워크를 사용하여 검색 엔진 최적화",
    ],
    technologies: [
      "Frontend: Nuxt.js, Vuetify",
      "Backend: Spring Boot, MySQL, Redis, Apache Kafka",
      "Design: Figma",
      "Deployment: Personal Server",
    ],
    github: "https://github.com/95team/gg-pigs-web",
    images: [
      `${require("@/assets/projects/gg-pigs/1.png")}`,
      `${require("@/assets/projects/gg-pigs/2.png")}`,
      `${require("@/assets/projects/gg-pigs/3.png")}`,
      `${require("@/assets/projects/gg-pigs/4.png")}`,
      `${require("@/assets/projects/gg-pigs/5.png")}`,
      `${require("@/assets/projects/gg-pigs/6.png")}`,
    ],
    mainFunction: "광고 배너 등록, 테마(라이트 모드, 다크 모드) 설정",
    background: [
      "사이드 프로젝트를 함께할 사람을 찾던 대학 동기의 아이디어에서 시작된 프로젝트에요. 자영업을 하는 친척에게 도움을 주고 싶다는 마음으로 프로젝트에 참여하게 됐어요.",
    ],
    meaning: [
      "디자이너, 프론트엔드, 백엔드가 모두 갖춰진 첫 프로젝트로, Figma를 통해 디자인을 공유하고 GitHub를 활용해 코드 공유와 코드 리뷰를 처음 경험한 자리였어요. 어려움도 있었지만, 매우 흥미롭고 의미 있는 프로젝트였어요.",
      "웹 개발에 대한 지식이 전무한 상태에서 강의를 통해 학습하며 프로젝트를 진행했지만, 많은 어려움에 직면했고 시간이 많이 소요되면서 결국 완성하지 못한 점이 아쉬웠어요.",
    ],
  },
];

export default projectInfo;
