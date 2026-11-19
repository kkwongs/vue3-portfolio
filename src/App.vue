<template>
  <MovedBanner />
  <router-view />
</template>

<script>
import MovedBanner from "@/components/MovedBanner.vue";

export default {
  name: 'App',
  components: { MovedBanner },
}
</script>
