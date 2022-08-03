<template>
  <swiper
    :navigation="true"
    :pagination="{
      dynamicBullets: true,
      clickable: true,
    }"
    :modules="modules"
  >
    <swiper-slide 
      v-for="project in projects" 
      :key="project"
    >
      <img :src="require(`@/assets/projects/project${project}.png`)" alt="Project Image">
      <div
        class="btn"
        @click="showProject(project)"
      >
        자세히 보기
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [
        Navigation,
        Pagination
      ],
    };
  },
  data() {
    return {
      projects: ['1', '2', '3']
    }
  },
  methods: {
    showProject(projectNum) {
      this.$store.commit('showProject', projectNum)
    }
  }
}
</script>

<style lang="scss">
.swiper {
  width: 80%;
  height: 60%;
  position: relative;
  .swiper-slide {
    text-align: center;
    padding: 0 50px 50px 50px;
    box-sizing: border-box;
    img {
      display: block;
      width: 100%;
      height: 90%;
      object-fit: cover;
    }
    .btn {
      width: 130px;
      margin: 20px auto 0;
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: rgba(0, 0, 0, .6);
    transition: 0.2s; 
    &:hover {
      color: #021B30;
    }
  }
  .swiper-pagination-bullet {
    background-color: #222;
  }
}
</style>