export default {
  state() {
    return {
      projectInfo: [
        {
          title: '포트폴리오 웹 사이트',
          site: 'https://kkwongs.github.io/portfolio/',
          github: 'https://github.com/kkwongs/portfolio',
          description: `
          포트폴리오 용도로 제작한 웹사이트입니다.<br /><br />
          애니메이션 라이브러리인 GSAP을 통해 특정 위치에서 자연스럽게 TOP버튼이
          나타나고 사라지도록 하였습니다. 그리고 특정 위치를 알기 위해 Window
          인터페이스의 scrollY 속성을 사용했는데 스크롤 할 때마다 계속해서
          호출되는 것을 방지하기 위해 Lodash 라이브러리의 _.throttle 메소드를
          사용하였습니다. Projects section을 구현하기 위해 Swiper 라이브러리를
          사용하여 하나의 프로젝트씩 나올 수 있도록 슬라이드를 구현하였습니다.
          `,
          technology: `
          Frontend: HTML, CSS, JavaScript<br />
          Deployment: GitHub Pages
          `
        },
        {
          title: 'Momentum(ToDoList)',
          site: 'https://kkwongs.github.io/Momentum/',
          github: 'https://github.com/kkwongs/Momentum',
          description: `
          Nomad Coders 강의를 보고 따라 해본 프로젝트입니다.<br /><br />
          setInterval api를 사용하여 매초 시간이 갱신되도록 하였고, localStorage
          api를 사용하여 이름을 적고 ToDoList를 저장하거나 삭제할 수 있도록
          하였습니다. 그리고 OpenWeatherMap에서 제공하는 Weather api를 사용하여
          사용자의 위치와 기온을 확인할 수 있도록 하였습니다.
          `,
          technology: `
          Frontend: HTML, CSS, JavaScript<br />
          Deployment: GitHub Pages
          `
        },
        {
          title: '오버워치 영웅 선택',
          site: 'https://kkwongs.github.io/overwatch-hero-selector-vanilla/',
          github: 'https://github.com/kkwongs/overwatch-hero-selector-vanilla',
          description: `
          패스트캠퍼스 강의를 참고하여 오버워치 게임의 영웅 선택 화면을
          구현해봤습니다.<br /><br />
          처음으로 SCSS라는 신세계를 경험했습니다. CSS에서의 복잡하고 반복되는
          내용을 JS처럼 변수를 사용하고 for문을 사용함으로써 코드를 훨씬 간결하게
          하는 것이 신기하고 재밌었습니다.
          `,
          technology: `
          Frontend: HTML, SCSS<br />
          Deployment: GitHub Pages
          `
        }
      ]
    }
  }
}