<template>
  <header class="header">
    <div class="container">
      <div>
        <router-link to="/">
          <Button size="extra-large" color="light">KKWONG'S Portfolio</Button>
        </router-link>
      </div>
      <div>
        <ul class="section-nav">
          <Button
            v-for="(sectionName, sectionId) in sections"
            :key="sectionId"
            class="section-nav__button"
            color="light"
            @clicked="scrollToSection(sectionId)"
          >
            {{ sectionName }}
          </Button>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import Button from "@/components/BaseButton.vue";
export default {
  name: "MainHeader",
  components: { Button },
  data() {
    return {
      sections: {
        "about-me": "About me",
        projects: "Projects",
      },
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const headerHeight = document.querySelector(".header").offsetHeight;
      const sectionOffset = document.getElementById(sectionId).offsetTop;
      const top = sectionOffset - headerHeight;

      window.scrollTo({ top, behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 9;
  background-color: #222;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    .section-nav {
      display: flex;
      gap: 12px;
    }
  }
}
</style>
