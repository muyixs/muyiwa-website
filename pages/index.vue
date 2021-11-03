<template>
  <div class="c-home">
    <section class="c-home__about">
      <div class="c-home__about-text">
        <h1 class="u-font-h1">HI, I’M OLUMUYIWA ADENAIKE</h1>
        <p class="u-font-regular">
          Welcome to my blog and personal site, a place to learn more about me
          and the many things that pique my interest. I’m a
          <span class="u-font-highlighted">Software engineer</span>, currently
          living in San Francisco, California, where I work as a senior software
          engineer on <span class="u-font-highlighted">Google search</span>. I
          was born & raised in Lagos, Nigeria, and I’m incredibly passionate
          about technology and the many opportunities it creates.
        </p>
      </div>
      <div class="c-home__about-image">
        <button>Scroll</button>
        <img src="@/assets/images/portrait.jpg" alt="Muyiwa's portrait" />
      </div>
    </section>
    <section class="c-home__interests">
      <p class="c-home__interests-subtext u-font-regular">
        I write about blah blah, you can read some interesting articles I’ve
        written on my <nuxt-link to="/blog">blog</nuxt-link>. I also find a lot
        of things interesting, but my focus nowadays is on the following;
      </p>
      <div class="c-home__interests-child">
        <h2 class="u-font-h2">Software Engineering</h2>
        <p class="u-font-regular">
          Artificial Intelligence, Quantum Computing, Large scale data
          processing, User understanding
        </p>
      </div>
      <div class="c-home__interests-child">
        <h2 class="u-font-h2">Consumer Goods</h2>
        <p class="u-font-regular">
          Product Design and Manufacturing, Ecommerce, Logistics, Localization
        </p>
      </div>
      <div class="c-home__interests-child">
        <h2 class="u-font-h2">Community</h2>
        <p class="u-font-regular">
          African economics and politics. People and community development
          technology.
        </p>
      </div>
    </section>
    <section class="c-home__cities">
      <p class="c-home__cities-subtext u-font-regular">
        I have had the pleasure of living and working in
        <span class="u-font-highlighted">Lagos</span>,
        <span class="u-font-highlighted">San Francisco</span>,
        <span class="u-font-highlighted">London</span>,
        <span class="u-font-highlighted">Oakland</span> &
        <span class="u-font-highlighted">Chicago</span>, and each city has
        shaped my worldview and perspective.
      </p>
      <div class="c-home__cities-row">
        <div class="c-home__cities-wrap">
          <span>San Francisco</span>
          <span>Lagos</span>
          <span>London</span>
          <span>Oakland</span>
          <span>Chicago</span>
        </div>
        <div class="c-home__cities-wrap">
          <span>San Francisco</span>
          <span>Lagos</span>
          <span>London</span>
          <span>Oakland</span>
          <span>Chicago</span>
        </div>
      </div>
      <div class="c-home__cities-row">
        <div ref="test" class="c-home__cities-wrap">
          <span>Chicago</span>
          <span>Oakland</span>
          <span>London</span>
          <span>Lagos</span>
          <span>San Francisco</span>
        </div>
        <div class="c-home__cities-wrap">
          <span>Chicago</span>
          <span>Oakland</span>
          <span>London</span>
          <span>Lagos</span>
          <span>San Francisco</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
  async asyncData({ params }) {},
  data() {
    return {}
  },
  mounted() {
    this.$refs.test.addEventListener(
      'animationend',
      function () {
        alert(1000)
      },
      false
    )
    setTimeout(() => {
      // alert(0)
    }, 10000)
  },
  methods: {
    initCitiesScroll() {},
  },
}
</script>

<style lang="scss" scoped>
.c-home {
  padding-top: 13vh;

  &__about {
    display: flex;
    justify-content: space-between;

    &-text {
      width: 50%;
      height: fit-content;

      p {
        margin-top: 70px;
        max-width: 560px;
      }
    }

    &-image {
      width: 49%;
      // background-color: rgb(141, 141, 141);
      margin-top: 75px;
      position: relative;

      img {
        width: 90%;
        height: 680px;
        object-position: center bottom;
        object-fit: cover;
      }

      button {
        $size: 140px;
        position: absolute;
        right: 0;
        bottom: 100px;
        width: $size;
        height: $size;
        border-radius: 100px;
        border: none;
        background-color: $color-dark-plum;
        color: white;
        font-size: 1.8rem;
        box-shadow: 0px 10px 30px 2px rgba(0, 0, 0, 0.3);
        font-weight: 400;
      }
    }
  }

  &__interests {
    margin-top: 100px;
    padding: 100px 0;
    border-top: 1px dashed rgba(0, 0, 0, 0.3);

    a {
      color: $color-turquoise;
      font-weight: 400;
    }

    &-subtext {
      max-width: 740px;
    }

    &-child {
      max-width: 800px;
      margin-top: 100px;

      &:not(:first-of-type) {
        margin-top: 90px;
      }

      p {
        margin-top: 15px;
      }
    }
  }

  &__cities {
    position: relative;
    width: 100vw;
    left: calc(-50vw + 50%);
    background-color: $color-dark-plum;
    background-image: url('@/assets/images/noise.png');
    background-repeat: repeat;
    background-position: center;
    color: white;
    padding: 160px 0;

    &-subtext {
      text-align: center;
      width: 720px;
      margin: 0 auto;

      .u-font-highlighted {
        color: #37e1ec;
      }
    }

    &-row {
      --anim-play-state: running;
      --switch: -1;
      --rotation: rotate(calc(0.6deg * var(--switch)));
      margin-top: 150px;
      font-size: 6vw;
      width: fit-content;
      white-space: nowrap;
      transform: var(--rotation);

      &:last-of-type {
        --switch: 1;
      }

      &:hover {
        --anim-play-state: paused;
      }

      .c-home__cities-wrap {
        display: inline-block;
        animation: scrollText 10s linear;
        animation-play-state: var(--anim-play-state);

        @keyframes scrollText {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(calc(-100% * var(--switch)));
          }
        }

        > * {
          margin-right: 6vw;
          opacity: 0.4;
        }
      }
    }
  }
}
</style>
