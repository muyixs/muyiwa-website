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
        <a href="#section-interests">Scroll</a>
        <img
          src="@/assets/images/muyiwa-portrait.jpg"
          alt="Muyiwa's portrait"
        />
      </div>
    </section>
    <section id="section-interests" class="c-home__interests">
      <div class="c-home__interests-text">
        <p class="c-home__interests-subtext u-font-regular">
          I write about blah blah, you can read some interesting articles I’ve
          written on my <nuxt-link to="/blog">blog</nuxt-link>. I also find a
          lot of things interesting, but my focus nowadays is on the following;
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
        <div
          class="c-home__interests-child"
          @mouseover="showImage()"
          @mouseleave="hideImage()"
        >
          <h2 class="u-font-h2">Community</h2>
          <p class="u-font-regular">
            African economics and politics. People and community development
            technology.
          </p>
        </div>
      </div>
      <div class="c-home__interests-image">
        <img
          ref="communityImage"
          src="@/assets/images/community.gif"
          alt="community image"
        />
      </div>
    </section>
    <section ref="cities" class="c-home__cities">
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
          <span data-text="San Francisco">San Francisco</span>
          <span data-text="Lagos">Lagos</span>
          <span data-text="London">London</span>
          <span data-text="Oakland">Oakland</span>
          <span data-text="Chicago">Chicago</span>
        </div>
        <div class="c-home__cities-wrap">
          <span data-text="San Francisco">San Francisco</span>
          <span data-text="Lagos">Lagos</span>
          <span data-text="London">London</span>
          <span data-text="Oakland">Oakland</span>
          <span data-text="Chicago">Chicago</span>
        </div>
      </div>
      <div class="c-home__cities-row">
        <div class="c-home__cities-wrap">
          <span data-text="Chicago">Chicago</span>
          <span data-text="Oakland">Oakland</span>
          <span data-text="London">London</span>
          <span data-text="Lagos">Lagos</span>
          <span data-text="San Francisco">San Francisco</span>
        </div>
        <div class="c-home__cities-wrap">
          <span data-text="Chicago">Chicago</span>
          <span data-text="Oakland">Oakland</span>
          <span data-text="London">London</span>
          <span data-text="Lagos">Lagos</span>
          <span data-text="San Francisco">San Francisco</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  mounted() {
    this.initCitiesScroll()
  },
  methods: {
    initCitiesScroll() {
      const citiesWrap = this.$refs.cities.querySelectorAll(
        '.c-home__cities-wrap'
      )
      const citiesRow = this.$refs.cities.querySelectorAll(
        '.c-home__cities-row'
      )
      const elCount = citiesRow.length
      const timeConstant = 16

      citiesWrap.forEach((element) => {
        const elementWidth = element.offsetWidth

        const setAnimationValues = () => {
          // get position of element in parent
          const index = Array.from(element.parentNode.children).indexOf(element)

          const transitionTime = (index + 1) * timeConstant
          const translateValue = (index + 1) * 100
          const xOffset = elementWidth * index

          element.style.setProperty('--translate-value', `${translateValue}%`)
          element.style.setProperty('--transition-time', `${transitionTime}s`)
          element.style.setProperty('--offset', `${xOffset}px`)
        }

        const reset = () => {
          const parent = element.parentNode
          parent.removeChild(element)
          parent.appendChild(element)
          element.style.setProperty(
            '--offset',
            `${elementWidth * (elCount - 1)}px`
          )
          element.style.setProperty('--translate-value', `${100 * elCount}%`)
          element.style.setProperty(
            '--transition-time',
            `${timeConstant * elCount}s`
          )
        }

        setAnimationValues()

        element.addEventListener('animationend', () => {
          reset()
        })
      })

      window.addEventListener('blur', () => {
        citiesRow.forEach((row) => {
          row.style.setProperty('--anim-play-state', 'paused')
        })
      })

      window.addEventListener('focus', () => {
        citiesRow.forEach((row) => {
          row.style.setProperty('--anim-play-state', 'running')
        })
      })

      // document.addEventListener('visibilitychange', () => {
      //   if (document.visibilityState === 'hidden') {
      //     citiesRow.forEach((row) => {
      //       row.style.setProperty('--anim-play-state', 'paused')
      //     })
      //   } else {
      //     citiesRow.forEach((row) => {
      //       row.style.setProperty('--anim-play-state', 'running')
      //     })
      //   }
      // })
    },
    showImage() {
      this.$refs.communityImage.style.setProperty('--opacity', 1)
      this.$refs.communityImage.style.setProperty('--translate-y', '0%')
    },
    hideImage() {
      this.$refs.communityImage.style.setProperty('--translate-y', '10%')
      this.$refs.communityImage.style.setProperty('--opacity', 0)
    },
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

      a {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        $size: 140px;
        position: absolute;
        right: 0;
        bottom: 100px;
        width: $size;
        height: $size;
        border-radius: 100px;
        border: none;
        background-color: $color-navy-blue;
        color: white;
        font-size: 1.8rem;
        box-shadow: 0px 10px 30px 2px rgba(0, 0, 0, 0.3);
        font-weight: 400;
        transition: 1.2s $easeOutExpo;
        text-transform: uppercase;

        &:hover {
          transform: scale(1.12);
        }
      }
    }
  }

  &__interests {
    display: flex;
    position: relative;

    margin-top: 100px;
    padding: 100px 0;
    border-top: 1px dashed rgba(0, 0, 0, 0.3);

    &-text {
      width: fit-content;
      flex-shrink: 0;
    }

    &-image {
      position: absolute;
      right: 0;
      transform: rotate(-1.6deg);
      margin-top: 200px;

      img {
        --opacity: 0;
        --translate-y: 10%;
        height: 600px;
        width: 435px;
        object-fit: cover;
        z-index: -1;
        opacity: var(--opacity);
        transform: translateY(var(--translate-y));
        transition: opacity 0.6s $easeOutExpo, transform 0.8s $easeOutExpo;
      }
    }

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
    background-color: $color-navy-blue;
    background-image: url('@/assets/images/noise.png');
    background-repeat: repeat;
    background-position: center;
    color: white;
    padding: 160px 0 350px;

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
      margin-top: 120px;
      font-size: 6vw;
      white-space: nowrap;
      transform: var(--rotation);
      position: relative;
      // width: fit-content;
      width: 100vw;
      height: 100%;

      &:hover {
        --anim-play-state: paused;
      }

      .c-home__cities-wrap {
        --direction: var(--switch);
        display: inline-block;
        animation: scrollText var(--transition-time) linear;
        animation-play-state: var(--anim-play-state);
        position: absolute;
        top: 0;

        @keyframes scrollText {
          to {
            transform: translateX(calc(var(--translate-value) * var(--switch)));
          }
        }

        > * {
          position: relative;
          margin-right: 6vw;
          color: #79797f;

          &::before {
            position: absolute;
            content: attr(data-text);
            top: 0;
            left: 0;
            color: white;
            width: 0%;
            overflow: hidden;
            transition: 0.3s ease-in-out;
          }

          &:hover {
            &::before {
              width: 100%;
            }
          }
        }
      }

      &:first-of-type {
        .c-home__cities-wrap {
          left: var(--offset);
        }
      }

      &:last-of-type {
        --switch: 1;
        margin-top: 370px;

        .c-home__cities-wrap {
          right: var(--offset);

          // > * {
          //   &::before {
          //     position: absolute;
          //     content: attr(data-text);
          //     top: 0;
          //     left: 0;
          //     color: white;
          //     width: 0%;
          //     overflow: hidden;
          //     transition: 0.3s ease-in-out;
          //   }

          //   &:hover {
          //     &::before {
          //       width: 100%;
          //     }
          //   }
          // }
        }
      }
    }
  }
}
</style>
