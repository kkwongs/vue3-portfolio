<template>
  <SectionLayout title="PORTFOLIO">
    <div class="content">
      <p>안녕하세요</p>
      <p>프론트엔드 개발자</p>
      <p>권기현입니다</p>
    </div>
  </SectionLayout>
</template>

<script>
import SectionLayout from "@/components/section/SectionLayout.vue";

export default {
  components: { SectionLayout },
};
</script>

<style lang="scss" scoped>
.section-wrapper {
  position: relative;
  color: #f5f5f7;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(110, 90, 80, 0.7), rgba(110, 90, 80, 0.7)),
      url("@/assets/masthead-background.jpg") center / cover fixed;
  }
  .content {
    text-align: center;
    font-size: 1.5rem;
    line-height: 1.5;
  }
}
</style>
