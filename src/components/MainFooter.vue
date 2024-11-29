<template>
  <footer>
    <div class="inner">
      <a href="https://github.com/kkwongs" target="_blank" class="git-logo">
        <img src="@/assets/git-hub-logo.png" alt="GitHub" />
      </a>
      <div class="copyright">&copy; 2021. KKOWNG'S. All rights reserved.</div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  background-color: #222;
  .inner {
    height: 144px;
    text-align: center;
    a {
      display: inline-block;
      background-color: #fff;
      padding: 2px;
      border-radius: 32px;
      margin-top: 36px;
      img {
        display: block;
        width: 48px;
      }
    }
    .copyright {
      color: #fff;
      margin-top: 10px;
    }
  }
}
</style>
