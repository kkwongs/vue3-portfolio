<template>
  <div class="project-info">
    <div class="inner">
      <div class="cancel btn" @click="closeProject">닫기</div>
      <div class="title">포트폴리오 웹 사이트</div>
      <hr />
      <ul class="info">
        <li>
          <div class="title">
            <LinkIcon class="material-icons"/>
            URL
          </div>
          <div class="description">
            웹사이트:
            <a
              href="https://kkwongs.github.io/portfolio/"
              target="_blank"
            >
              https://kkwongs.github.io/portfolio/
            </a>
          </div>
          <div class="description">
            Github:
            <a
              href="https://github.com/kkwongs/portfolio"
              target="_blank"
            >
              https://github.com/kkwongs/portfolio
            </a>
          </div>
        </li>
        <li>
          <div class="title">
            <FileDocumentIcon class="material-icons"/>
            Summary
          </div>
          <div class="description">
            포트폴리오 용도로 제작한 웹사이트입니다.<br /><br />
            애니메이션 라이브러리인 GSAP을 통해 특정 위치에서 자연스럽게 TOP버튼이
            나타나고 사라지도록 하였습니다. 그리고 특정 위치를 알기 위해 Window
            인터페이스의 scrollY 속성을 사용했는데 스크롤 할 때마다 계속해서
            호출되는 것을 방지하기 위해 Lodash 라이브러리의 _.throttle 메소드를
            사용하였습니다. Projects section을 구현하기 위해 Swiper 라이브러리를
            사용하여 하나의 프로젝트씩 나올 수 있도록 슬라이드를 구현하였습니다.
          </div>
        </li>
        <li>
          <div class="title">
            <span class="material-icons">construction</span>Technology
          </div>
          <div class="description">
            Frontend: HTML, CSS, JavaScript<br />
            Deployment: GitHub Pages
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import LinkIcon from 'vue-material-design-icons/Link.vue';
import FileDocumentIcon from 'vue-material-design-icons/FileDocument.vue';

export default {
  components: {
    LinkIcon,
    FileDocumentIcon
  },
  methods: {
    closeProject() {
      this.$store.commit('showProject')
    }
  }
}
</script>

<style lang="scss" scoped>
.project-info {
  position: absolute;
  z-index: 8;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 82%;
  background-color: #fff;
  border-radius: 10px;
  .inner {
    padding: 0 32px;
    .cancel {
      width: 50px;
      text-align: center;
      float: right;
      margin-top: 24px;
    }
    >.title {
      font-size: 32px !important;
      padding: 64px 0 32px !important;
    }
    .info {
      li {
        a {
          color: blue;
          &:hover {
            text-decoration: underline !important;
          }
          &:active {
            color: red;
          }
        }
        .title {
          font-size: 24px;
          font-weight: 700;
          padding-top: 32px;
          .material-icons {
            margin-right: 8px;
          }
        }
        .description {
          font-size: 18px;
          line-height: 1.2;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>