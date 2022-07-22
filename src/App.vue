<template>
  <main-header></main-header>
  <masthead-section></masthead-section>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import MastheadSection from './components/MastheadSection.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    MastheadSection
  }
}
</script>

<style lang="scss">
#app {
  color: #2c3e50;
  margin-top: 72px;
  font-family: 'Lato', sans-serif;
  a {
    text-decoration: none;
  }
  .inner {
    max-width: 1140px;
    margin: 0 auto;
    position: relative;
  }
}
</style>
