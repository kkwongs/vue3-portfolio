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
      v-for="(project, index) in projectInfo" 
      :key="index"
    >
      <img :src="project.image" alt="Project Image">
      <div
        class="btn"
        @click="showProject(index)"
      >
        자세히 보기
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
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
  computed: {
    ...mapState('project', ['projectInfo'])
  },
  methods: {
    ...mapMutations('project', ['showProject'])
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