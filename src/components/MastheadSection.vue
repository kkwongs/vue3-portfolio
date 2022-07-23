<template>
  <section class="masthead">
      <div class="inner">
        <div class="title">Front-End Developer</div>
        <div class="description">
          <p>안녕하세요.</p>
          <p>배우는 것과 배운 지식을 적용하는 것을 좋아하는 웹 개발자입니다.</p>
          <p>어떤 일을 하더라도 기본기를 중요하게 생각합니다.</p>
        </div>
      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.masthead {
  color: #f5f5f7;
  background-image: url('../assets/masthead-background.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  position: relative;
  &::before {
    content: "";
    background-color: rgba(110, 90, 80, 0.7);
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .inner {
    height: 560px;    
    .description {
      text-align: center;
      font-size: 28px;
      line-height: 1.5;
    }
  }
}
</style>