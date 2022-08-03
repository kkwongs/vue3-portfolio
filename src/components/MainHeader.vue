<template>
  <header>
    <div class="inner">
      <div class="logo">
        <router-link to="/">KKWONG'S Portfolio</router-link>
      </div>
      <ul class="menu">
        <li>
          <router-link to="/#about-me">About me</router-link>
        </li>
        <li>
          <router-link to="/#projects">Projects</router-link>
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
    .logo {
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
        margin: 10px;
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