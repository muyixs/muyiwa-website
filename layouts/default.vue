<template>
  <div class="c-app">
    <div class="c-app__container">
      <top-nav />
      <Nuxt />
      <div ref="siteLoader" class="c-siteloader" />
      <base-footer />
    </div>
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

.c-app {
  padding: 0px 12% 30px;

  &__container {
    margin: 0 auto;
    max-width: 1680px;
  }
}

.c-siteloader {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: $color-pastel-blue;
}
</style>
