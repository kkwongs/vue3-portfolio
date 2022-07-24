<template>
  <transition name="fade">
    <ArrowUpBoldIcon :size="36" class="material-icons" v-show="isShow" @click="top"/>
  </transition>
</template>

<script>
import ArrowUpBoldIcon from 'vue-material-design-icons/ArrowUpBold.vue';
import { throttle } from 'lodash';

export default {
  components: {
    ArrowUpBoldIcon
  },
  data() {
    return {
      isShow: false,
    }
  },
  mounted () {
    window.addEventListener('scroll', throttle(this.scroll, 300))
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.scroll)
  },
  methods: {
    scroll() {
      if(window.scrollY > 300) this.isShow = true
      else this.isShow = false
    },
    top() {
      window.scroll(0, 0);
    }
  }
}
</script>

<style lang="scss" scoped>
.material-icons {
  width: 36px;
  height: 36px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: #333;
  transition: 0.2s;
  border-radius: 5px;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
  }
}
</style>