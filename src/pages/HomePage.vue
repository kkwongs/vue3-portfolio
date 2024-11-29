<template>
  <MainHeader />
  <MastheadSection />
  <AboutMeSection />
  <ProjectsSection />
  <MainFooter />
  <ScrollTop />
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import MastheadSection from "@/components/section/MastheadSection.vue";
import AboutMeSection from "@/components/section/AboutMeSection.vue";
import ProjectsSection from "@/components/section/ProjectsSection.vue";
import MainFooter from "@/components/MainFooter.vue";
import ScrollTop from "@/components/ScrollTop.vue";

export default {
  name: "HomePage",
  components: {
    MainHeader,
    MastheadSection,
    AboutMeSection,
    ProjectsSection,
    MainFooter,
    ScrollTop,
  },
};
</script>

<style lang="scss" scoped></style>
