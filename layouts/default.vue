<template>
  <div class="c-app">
    <div class="c-app__container">
      <top-nav />
      <Nuxt v-if="showPage" />
      <div v-else class="c-loader">
        <span ref="loaderText" class="c-loader__text">
          Loading assets - {{ counter }}%
        </span>
        <div class="c-loader__overlay"></div>
      </div>
      <base-footer />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPage: false,
      counter: 0,
      loadedAssets: false,
    }
  },
  mounted() {
    this.setTheme()
    this.preloadAssets()
    if (this.$route.path === '/') {
      this.startCounter()
    } else {
      this.showPage = true
    }
  },
  methods: {
    setTheme() {
      const bgColor = localStorage.getItem('theme')
      document.body.style.setProperty('--bg-color', bgColor)
    },
    preloadAssets() {
      const vm = this
      const img = new Image()
      img.src = require(`@/assets/images/noise.png`)

      img.onload = () => {
        document.fonts.ready.then(() => {
          vm.loadedAssets = true
        })
      }
    },
    startCounter() {
      const counter = setInterval(() => {
        if (this.counter !== 80) {
          this.counter += 20
        } else if (this.loadedAssets) this.counter += 20

        this.$refs.loaderText.style.setProperty('--scale', this.counter / 100)

        if (this.counter === 100) {
          clearInterval(counter)
          setTimeout(() => {
            this.hideLoader()
          }, 800)
        }
      }, 500)
    },
    hideLoader() {
      this.$refs.loaderText.style.setProperty('--transform-origin', 'right')
      this.$refs.loaderText.style.setProperty('--scale', 0)
      this.$refs.loaderText.style.setProperty('--translate-y', '100%')

      setTimeout(() => {
        this.showPage = true
      }, 1500)
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

.c-loader {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 10;

  &__overlay {
    width: 100vw;
    height: 40px;
    background-color: var(--bg-color);
    z-index: 2;
  }

  &__text {
    --scale: 0;
    --transform-origin: left;
    --translate-y: 0;
    position: relative;
    font-size: 2.2rem;
    font-family: 'Inter', 'Roboto', sans-serif;
    text-transform: uppercase;
    font-variant-numeric: tabular-nums;
    transform: translateY(var(--translate-y));
    transition: transform 0.8s $easeOutExpo 0.9s;

    @include screen('small') {
      font-size: 1.9rem;
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      height: 40%;
      width: 100%;
      bottom: 0;
      background-color: $color-blue;
      z-index: -1;
      opacity: 0.7;
      transform-origin: var(--transform-origin);
      transform: scaleX(var(--scale));
      transition: transform 0.8s $easeOutExpo;
    }
  }
}
</style>
