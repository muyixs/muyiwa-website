<template>
  <div class="l-app">
    <top-nav />
    <Nuxt />
    <div ref="siteLoader" class="c-siteloader"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    this.loadNoiseBackground()
  },
  methods: {
    loadNoiseBackground() {
      const vm = this
      const img = new Image()
      img.src = require(`@/assets/images/noise.png`)

      img.onload = () => {
        vm.$refs.siteLoader.style.display = 'none'
      }
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/main.scss';

.l-app {
  padding: 0px 12% 30px;
}

.c-siteloader {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: $color-pastel-brown;
}
</style>
