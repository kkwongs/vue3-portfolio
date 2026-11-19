<template>
  <div v-if="isEnabled" class="moved-banner" role="status" aria-live="polite">
    <p class="moved-banner__text">
      포트폴리오가 새 주소로 이전되었습니다.
      <strong>{{ countdown }}초</strong> 후 자동으로 이동합니다.
    </p>
    <a class="moved-banner__link" :href="newUrl">지금 이동하기 →</a>
  </div>
</template>

<script>
const NEW_URL = "https://gihyun-portfolio.vercel.app/";
const REDIRECT_SECONDS = 5;

export default {
  name: "MovedBanner",
  data() {
    return {
      newUrl: NEW_URL,
      countdown: REDIRECT_SECONDS,
      // 로컬 개발 서버에서는 이동하지 않도록 프로덕션 빌드에서만 동작
      isEnabled: process.env.NODE_ENV === "production",
      timerId: null,
    };
  },
  mounted() {
    if (!this.isEnabled) return;

    this.timerId = setInterval(() => {
      this.countdown -= 1;
      if (this.countdown <= 0) {
        clearInterval(this.timerId);
        // replace: 뒤로 가기 시 옛 주소로 돌아와 다시 이동되는 루프 방지
        window.location.replace(NEW_URL);
      }
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timerId);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixins";

.moved-banner {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem 1rem;
  padding: 0.75rem 1.25rem;
  background-color: #ffd43b;
  color: #222;
  font-size: 0.95rem;
  text-align: center;
  line-height: 1.5;

  @include media(medium) {
    font-size: 0.875rem;
  }

  &__link {
    color: #222;
    font-weight: 700;
    text-decoration: underline;
    white-space: nowrap;
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
