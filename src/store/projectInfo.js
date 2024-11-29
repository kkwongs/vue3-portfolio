const projectInfo = [
  {
    name: "KKWONG'S Portfolio(with Vue.js)",
    period: "2022.08 ~ ",
    title: "포트폴리오 웹 사이트",
    url: "https://kkwongs.github.io/vue3-portfolio/",
    details: [
      "Vanill JS에서 Vue.js로 마이그레이션",
      "디바이스별 최적의 UX를 위해 반응형 웹 페이지로 구현",
    ],
    technologies: ["Frontend: Vue.js, Sass", "Deployment: GitHub Pages"],
    github: "https://github.com/kkwongs/vue3-portfolio",
    image: require("@/assets/projects/project4.png"),
  },
  {
    name: "KKWONG'S Portfolio",
    period: "2021.11 ~ 2022.08",
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
    image: require("@/assets/projects/project1.png"),
  },
  {
    name: "광고돼지",
    period: "2020.05 ~ 2022.08",
    // url: "https://gg-pigs.com/",
    title: "자영업자들을 위한 광고 배너 웹 사이트",
    details: [
      `<a href="https://ko.wikipedia.org/wiki/밀리언_달러_홈페이지" target="_blank" style="color: #007bff; text-decoration: underline">
        The Million Dollar Homepage
      </a>에서 아이디어를 얻어 자영업하는 지인들을 돕기 위해 개발
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
    image: require("@/assets/projects/gg-pigs.png"),
  },
];

export default projectInfo;
