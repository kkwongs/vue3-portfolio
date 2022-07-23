<template>
  <section class="projects" id="projects">
    <div class="inner">
      <div class="title">Projects</div>
      <SwiperProject />
      <DetailProject v-if="isShowProject" />
    </div>
  </section>
</template>

<script>
import SwiperProject from './SwiperProject.vue';
import DetailProject from './DetailProject.vue';

export default {
  components: {
    SwiperProject,
    DetailProject
  },
  computed: {
    isShowProject() {
      return this.$store.state.isShowProject;
    }
  }
}
</script>

<style lang="scss" scoped>
.projects {
  background-color: #FDE4CF;
  position: relative;
  .inner {
    height: 805px;
  }
}
</style>