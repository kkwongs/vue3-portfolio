<template>
  <header class="header">
    <div class="container">
      <div class="logo-container">
        <router-link to="/">
          <Button size="extra-large" color="light">KKWONG'S Portfolio</Button>
        </router-link>
      </div>

      <div class="nav-container">
        <ul
          class="section-nav"
          :class="{ 'section-nav--active': isShowNavigation }"
          ref="refSectionNav"
        >
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
        <button
          class="section-nav-toggle__button"
          @click.stop="isShowNavigation = !isShowNavigation"
        >
          <MenuIcon fillColor="#f8f9fa" />
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import Button from "@/components/BaseButton.vue";
import MenuIcon from "vue-material-design-icons/Menu.vue";

export default {
  name: "MainHeader",
  components: { Button, MenuIcon },
  data() {
    return {
      sections: {
        "about-me": "About me",
        projects: "Projects",
      },
      isShowNavigation: false,
    };
  },
  watch: {
    isShowNavigation(newValue) {
      if (newValue) {
        document.addEventListener("click", this.clickOutSideNav);
        document.addEventListener("keydown", this.keydownEsc);
      } else {
        document.removeEventListener("click", this.clickOutSideNav);
        document.removeEventListener("keydown", this.keydownEsc);
      }
    },
  },
  methods: {
    scrollToSection(sectionId) {
      const headerHeight = document.querySelector(".header").offsetHeight;
      const sectionOffset = document.getElementById(sectionId).offsetTop;
      const top = sectionOffset - headerHeight;

      window.scrollTo({ top, behavior: "smooth" });

      this.isShowNavigation = false;
    },

    clickOutSideNav(e) {
      const refSectionNav = this.$refs.refSectionNav;

      if (refSectionNav && !refSectionNav.contains(e.target)) {
        this.isShowNavigation = false;
      }
    },

    keydownEsc(e) {
      if (e.key === "Escape") {
        this.isShowNavigation = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixins";

.header {
  position: sticky;
  top: 0;
  z-index: 9;
  background-color: #222;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    margin: auto;
    padding: 1.25rem 2.5rem;

    $header-y-padding: 1rem;
    @include media(medium) {
      padding: $header-y-padding 1.25rem;
    }
    .nav-container {
      .section-nav {
        display: flex;
        gap: 0.75rem;
        @include media(medium) {
          position: absolute;
          top: 100%;
          left: 0;
          flex-direction: column;
          gap: 0.25rem;
          background-color: #222;
          width: 100%;
          max-height: 0;
          padding: 0 1.25rem;
          transition: max-height 0.3s ease-in-out;
          overflow: hidden;
          &--active {
            max-height: 5.5rem;
          }
          > :last-child {
            margin-bottom: $header-y-padding;
          }
        }
      }

      .section-nav-toggle__button {
        display: none;
        @include media(medium) {
          display: inline-block;
          aspect-ratio: 1;
          background-color: inherit;
          border: 0;
          cursor: pointer;
          &:hover {
            background-color: rgba(#f8f9fa, 0.1);
            border-radius: 0.125rem;
          }
        }
      }
    }
  }
}
</style>
