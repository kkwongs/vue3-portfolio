<template>
  <SectionLayout title="Projects" id="projects">
    <div class="project-wrapper">
      <div
        class="project-container"
        v-for="(theProject, index) in projectInfo"
        :key="theProject"
      >
        <div class="project-title">
          <div class="project-name">
            <template v-if="!!theProject.url">
              <a :href="theProject.url" target="_blank">
                <Button variant="contained" size="large">
                  {{ theProject.name }}
                </Button>
              </a>
              <div class="project-url">
                <!-- <a :href="theProject.url" target="_blank"> Link </a> -->
              </div>
            </template>
            <template v-else>
              <Button
                variant="contained"
                size="large"
                class="project-name--no-link"
              >
                {{ theProject.name }}
              </Button>
            </template>
          </div>
          <div class="project-period">{{ theProject.period }}</div>
        </div>

        <div class="project-summary">
          <div class="project-detail-title">{{ theProject.title }}</div>
          <ul class="project-detail-list">
            <li
              v-for="detail in theProject.details"
              :key="detail"
              v-html="detail"
            ></li>
          </ul>
        </div>

        <ul class="project-tech-stack">
          <li v-for="technology in theProject.technologies" :key="technology">
            {{ technology }}
          </li>
        </ul>

        <div class="project-readme">
          <a :href="theProject.github" target="_blank">
            <Button variant="outlined" color="dark" size="small">
              GitHub Link
            </Button>
          </a>
          <Button
            variant="outlined"
            color="dark"
            size="small"
            @clicked="showProject(index)"
          >
            README
          </Button>
        </div>
      </div>

      <Transition name="fade">
        <div v-if="isShowProject" class="modal"></div>
      </Transition>
    </div>

    <Transition name="fade-slide-down">
      <DetailProject v-if="isShowProject" :isShowProject="isShowProject" />
    </Transition>
  </SectionLayout>
</template>

<script>
import { mapState, mapMutations } from "vuex";
// import SwiperProject from "../project/SwiperProject.vue";
import DetailProject from "../project/DetailProject.vue";
import SectionLayout from "./SectionLayout.vue";
import Button from "../BaseButton.vue";

export default {
  components: {
    // SwiperProject,
    DetailProject,
    SectionLayout,
    Button,
  },
  computed: {
    ...mapState("project", ["projectInfo", "isShowProject"]),
  },
  methods: {
    ...mapMutations("project", ["showProject"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixins";
@import "@/assets/scss/colors";
@import "@/assets/scss/functions";

#projects {
  position: relative;
  background-color: #fde4cf;
  .project-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    @include media(large) {
      grid-template-columns: none;
    }
    .project-container {
      display: grid;
      gap: 1rem;
      padding: 32px;
      background-color: #fff;
      border-radius: 1rem;
      .project-title {
        border-bottom: 1px solid #e0e0e0;
        .project-name {
          display: flex;
          align-items: flex-end;
          gap: 8px;
          &--no-link {
            cursor: default;
            &:hover {
              filter: none;
            }
          }
        }
        .project-period {
          padding: 0.25rem 0;
          color: #888;
        }
        .project-url {
          a {
            color: color($primary);
            text-decoration: underline;
          }
        }
      }

      .project-summary {
        .project-detail-title {
          font-weight: 600;
        }
        .project-detail-list {
          padding-left: 1rem;
          padding-top: 0.5rem;
          li {
            list-style-type: disc;
          }
        }
      }

      .project-tech-stack {
        padding: 0.5rem 1rem;
        border: 1px solid color($primary);
        border-radius: 0.5rem;
        background-color: rgba(color($primary), 0.1);
      }

      .project-readme {
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
      }
    }
  }
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(color($dark), 0.4);
}

.fade-slide-down-enter-active,
.fade-slide-down-leave-active {
  transition: all 0.5s ease;
}
.fade-slide-down-enter-from,
.fade-slide-down-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
</style>
