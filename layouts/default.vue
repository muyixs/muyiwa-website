<template>
  <div class="c-app">
    <div class="c-app__container">
      <top-nav />
      <Nuxt v-if="showPage" />
      <div v-else ref="siteLoader" class="c-siteloader" />
      <base-footer />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPage: false,
    }
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
        document.fonts.ready.then(() => {
          vm.showPage = true
        })
      }
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/main.scss';

.c-app {
  padding: 0px 12% 30px;

  @media screen and (max-width: 1280px) {
    padding: 0px 6% 30px;
  }

  @media screen and (max-width: 960px) {
    padding: 0px 12% 30px;
  }

  @include screen('small') {
    padding: 0px 30px 30px;
  }

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
  background: var(--color-pastel-blue);
}
</style>
