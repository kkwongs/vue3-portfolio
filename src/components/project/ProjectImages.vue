<template>
  <div class="modal-background" @click.self="closeProjectImage">
    <div class="modal-wrapper" @click.self="closeProjectImage">
      <div class="modal-container">
        <header>
          <span>이미지</span>
          <button
            class="close-button"
            @click="closeProjectImage"
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
          <div class="swiper-wrapper">
            <swiper
              :modules="modules"
              :navigation="{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }"
              :pagination="{ el: '.swiper-pagination', clickable: true }"
              :loop="true"
              :autoHeight="true"
              class="c-swiper"
            >
              <swiper-slide
                v-for="(image, index) in projectInfo[projectNum].images"
                :key="index"
              >
                <img :src="image" alt="" />
              </swiper-slide>
            </swiper>

            <div class="swiper-pagination"></div>

            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import CloseIcon from "vue-material-design-icons/Close.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  name: "ProjectImages",
  components: {
    CloseIcon,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      isHoverClose: false,
      modules: [Navigation, Pagination],
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
    document.addEventListener("keydown", this.keydownESC);
  },
  beforeUnmount() {
    document.body.style.paddingRight = "0";
    document.body.style.overflow = "auto";
    document.removeEventListener("keydown", this.keydownESC);
  },
  methods: {
    ...mapMutations("project", ["closeProjectImage"]),
    keydownESC(e) {
      if (e.key === "Escape") this.closeProjectImage();
    },
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
    transition: max-width 0.3s;
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
          border-bottom: 1px solid rgba(color($dark), 0.1);
          .title {
            font-size: 1.5rem;
            font-weight: bold;
          }
          .sub-title {
            color: rgba(color($dark), 0.5);
          }
        }
        .swiper-wrapper {
          width: calc(500px - 5rem);
          padding: 2.5rem 2.5rem;
          --swiper-navigation-size: 2rem;
          --swiper-navigation-color: color($dark);
          --swiper-pagination-color: #333;
          .c-swiper {
            background-color: #fff;
          }
        }
      }
    }
  }
}
</style>
