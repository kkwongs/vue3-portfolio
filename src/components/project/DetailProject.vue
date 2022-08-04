<template>
  <div class="project-info">
    <div class="inner">
      <div class="cancel btn" @click="closeProject">닫기</div>
      <div class="title">{{ projectInfo[projectNum].title }}</div>
      <hr />
      <ul class="info">
        <li>
          <div class="title">
            <LinkIcon :size="28" class="material-icons"/>
            URL
          </div>
          <div class="description">
            웹사이트:
            <a
              
              :href="projectInfo[projectNum].site"
              target="_blank"
            >
              {{ projectInfo[projectNum].site }}
            </a>
          </div>
          <div class="description">
            Github:
            <a
              :href="projectInfo[projectNum].github"
              target="_blank"
            >
              {{ projectInfo[projectNum].github }}
            </a>
          </div>
        </li>
        <li>
          <div class="title">
            <FileDocumentIcon :size="28" class="material-icons"/>
            Summary
          </div>
          <div class="description">
            <span v-html="projectInfo[projectNum].description"></span>
          </div>
        </li>
        <li>
          <div class="title">
            <ToolsIcon :size="28" class="material-icons"/>
            Technology
          </div>
          <div class="description">
            <span v-html="projectInfo[projectNum].technology"></span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import LinkIcon from 'vue-material-design-icons/Link.vue';
import FileDocumentIcon from 'vue-material-design-icons/FileDocument.vue';
import ToolsIcon from 'vue-material-design-icons/Tools.vue';

export default {
  components: {
    LinkIcon,
    FileDocumentIcon,
    ToolsIcon
  },
  computed: {
    ...mapState('project', [
      'projectNum',
      'projectInfo'
    ])
  },
  methods: {
    ...mapMutations('project', ['closeProject'])
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
          display: flex;
          align-items: center;
          .material-icons {
            margin-right: 8px;
          }
        }
        .description {
          font-size: 18px;
          line-height: 1.4;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>