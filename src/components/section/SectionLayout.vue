<template>
  <section class="section-wrapper">
    <div class="section-container">
      <h2 class="title">{{ title }}</h2>
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixins";

.section-wrapper {
  .section-container {
    display: grid;
    gap: 60px;
    max-width: 1280px;
    margin: 0 auto;
    padding: 5rem 2.5rem;
    @include media(medium) {
      padding: 2.5rem 1.25rem;
    }
    .title {
      font-size: 3rem;
      font-weight: 700;
      text-align: center;
    }
  }
}
</style>
