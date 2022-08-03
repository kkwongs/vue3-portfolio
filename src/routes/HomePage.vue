<template>
  <MainHeader />
  <MastheadSection />
  <AboutMeSection />
  <ProjectsSection />
  <MainFooter />
  <ScrollTop />
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import MastheadSection from '@/components/section/MastheadSection.vue'
import AboutMeSection from '@/components/section/AboutMeSection.vue'
import ProjectsSection from '@/components/section/ProjectsSection.vue'
import MainFooter from '@/components/MainFooter.vue'
import ScrollTop from '@/components/ScrollTop.vue'

export default {
  name: 'HomePage',
  components: {
    MainHeader,
    MastheadSection,
    AboutMeSection,
    ProjectsSection,
    MainFooter,
    ScrollTop
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

#app {
  color: #2c3e50;
  font-family: 'Lato', sans-serif;
  a {
    text-decoration: none;
  }
  .inner {
    max-width: 1140px;
    margin: 0 auto;
    position: relative;
    >.title {
      text-align: center;
      font-size: 56px;
      font-weight: 700;
      padding-top: 150px;
      padding-bottom: 72px;
    }
  }
  .btn {
    padding: 10px 5px;
    border: 2px solid #222;
    border-radius: 4px;
    color: #333;
    font-weight: 700;
    cursor: pointer;
    transition: 0.2s;
  }
  .btn:hover {
    background-color: #222;
    color: #fff;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
