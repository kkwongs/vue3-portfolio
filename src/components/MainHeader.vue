<template>
  <header>
    <div class="inner">
      <div class="title">
        <a href="#">KKWONG'S Portfolio</a>
      </div>
      <ul class="menu">
        <li>
          <a href="#about-me">About me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9;
  background-color: #222;
  .inner {
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      margin-left: 32px;
      a {
        color: #f5f5f7;
        font-size: 24px;
        font-weight: 700;
        padding: 5px;
        border-radius: 5px;
        transition: .2s;
        &:hover {
          color: #333;
          background: #fff;
        }
      }
    }
    .menu {
      margin-right: 32px;
      display: flex;
      li {
        margin: 5px;
        a {
          color: #f5f5f7;
          font-weight: 700;
          padding: 5px;
          border-radius: 5px;
          transition: 0.2s;
          &:hover {
            color: #333;
            background-color: #fff;
          }
        }
      }
    }
  }
}
</style>