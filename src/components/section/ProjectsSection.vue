<template>
  <section class="projects" id="projects">
    <div class="inner">
      <div class="title">Projects</div>
      <SwiperProject />
      <transition name="fade">
        <DetailProject v-if="isShowProject" />
      </transition>
    </div>
  </section>
</template>

<script>
import SwiperProject from '@/components/project/SwiperProject.vue';
import DetailProject from '@/components/project/DetailProject.vue';

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