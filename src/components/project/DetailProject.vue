<template>
  <div class="modal-background" @click.self="closeProject">
    <div
      class="modal-wrapper"
      :class="{ 'modal-wrapper--active': isShowProject }"
      @click.self="closeProject"
    >
      <div class="modal-container">
        <header>
          <span>README</span>
          <button
            class="close-button"
            @click="closeProject"
            @mouseenter="isHoverClose = true"
            @mouseleave="isHoverClose = false"
          >
            <CloseIcon
              :size="32"
              :fillColor="isHoverClose ? '#fff' : '#ddd'"
              class="material-icons"
            />
          </button>
        </header>
        <div class="content">
          <div class="title-container">
            <div class="title">{{ projectInfo[projectNum].title }}</div>
            <div class="sub-title">{{ projectInfo[projectNum].period }}</div>
          </div>
          <ul class="info">
            <li v-if="projectInfo[projectNum].url">
              <div>
                <LinkIcon :size="28" class="material-icons" />
                <span>Deployment URL</span>
              </div>
              <div class="url-container">
                <a
                  :href="projectInfo[projectNum].url"
                  target="_blank"
                  class="deployment-url"
                >
                  {{ projectInfo[projectNum].url }}
                </a>
              </div>
            </li>

            <li v-if="projectInfo[projectNum].details">
              <div>
                <FileDocumentIcon :size="28" class="material-icons" />
                <span>Summary</span>
              </div>
              <div class="summary-container">
                <div class="summary-title">
                  {{ projectInfo[projectNum].title }}
                </div>
                <ul class="summary-content">
                  <li
                    v-for="detail in projectInfo[projectNum].details"
                    :key="detail"
                    v-html="detail"
                    class="summary-item"
                  ></li>
                </ul>
                <div
                  class="main-function"
                  v-if="projectInfo[projectNum].mainFunction"
                >
                  주요 기능: {{ projectInfo[projectNum].mainFunction }}
                </div>
              </div>
            </li>

            <li v-if="projectInfo[projectNum].background">
              <div>
                <FileDocumentIcon :size="28" class="material-icons" />
                <span>Background</span>
              </div>
              <div class="background-container">
                <p
                  v-for="background in projectInfo[projectNum].background"
                  :key="background"
                  v-html="background"
                ></p>
              </div>
            </li>

            <li v-if="projectInfo[projectNum].meaning">
              <div>
                <FileDocumentIcon :size="28" class="material-icons" />
                <span>Meaning</span>
              </div>
              <div class="meaning-container">
                <p
                  v-for="meaning in projectInfo[projectNum].meaning"
                  :key="meaning"
                  v-html="meaning"
                ></p>
              </div>
            </li>

            <li v-if="projectInfo[projectNum].technologies">
              <div>
                <ToolsIcon :size="28" class="material-icons" />
                <span>Technology Stack(s)</span>
              </div>
              <ul class="tech-container">
                <li
                  v-for="technology in projectInfo[projectNum].technologies"
                  :key="technology"
                >
                  {{ technology }}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import LinkIcon from "vue-material-design-icons/Link.vue";
import FileDocumentIcon from "vue-material-design-icons/FileDocument.vue";
import ToolsIcon from "vue-material-design-icons/Tools.vue";
import CloseIcon from "vue-material-design-icons/Close.vue";

export default {
  name: "DetailProject",
  components: {
    LinkIcon,
    FileDocumentIcon,
    ToolsIcon,
    CloseIcon,
  },
  props: {
    isShowProject: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isHoverClose: false,
    };
  },
  computed: {
    ...mapState("project", ["projectNum", "projectInfo"]),
  },
  created() {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollBarWidth}px`;
    document.body.style.overflow = "hidden";
  },
  beforeUnmount() {
    document.body.style.paddingRight = "0";
    document.body.style.overflow = "auto";
  },
  methods: {
    ...mapMutations("project", ["closeProject"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/colors";
@import "@/assets/scss/functions";
@import "@/assets/scss/mixins";

.modal-background {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  .modal-wrapper {
    $modal-margin-x: 1.75rem;
    display: flex;
    align-items: center;
    max-width: 800px;
    min-height: calc(100% - $modal-margin-x * 2);
    margin: $modal-margin-x auto;
    transform: translateY(-50px);
    transition: all 2s;
    &--active {
      transform: none;
    }
    @include media(large) {
      max-width: 500px;
    }
    .modal-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      border-radius: 0.5rem;
      background-color: #fff;
      overflow: hidden;
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1.25rem;
        background-color: #000;
        font-weight: bold;
        color: #fff;
        .close-button {
          background-color: transparent;
          border: 0;
          cursor: pointer;
        }
      }
      .content {
        .title-container {
          padding: 1.25rem;
          border-bottom: 1px solid #eee;
          .title {
            font-size: 1.5rem;
            font-weight: bold;
          }
          .sub-title {
            color: #888;
          }
        }
        .info {
          display: grid;
          gap: 2.5rem;
          padding: 2rem 1.25rem;
          > * {
            display: grid;
            gap: 0.75rem;
            > :first-child {
              display: flex;
              align-items: center;
              gap: 0.5rem;
              font-size: 1.25rem;
              font-weight: bold;
              > :first-child {
                display: inline-flex;
              }
            }
            // > :last-child {
            // }

            .url-container {
              .deployment-url {
                color: color($primary);
                &:hover {
                  text-decoration: underline;
                }
              }
            }

            .summary-container {
              .summary-title {
                font-weight: 600;
              }
              .summary-content {
                padding: 0.5rem 0 0.5rem 1rem;
                .summary-item {
                  list-style-type: disc;
                }
              }
              .main-function {
                $border-width: 4px;
                padding: $border-width 0 $border-width
                  calc(1rem - $border-width);
                border-left: $border-width solid #777;
                color: #777;
              }
            }

            .background-container,
            .meaning-container {
              display: grid;
              gap: 1rem;
              > * {
                text-indent: 0.75rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
