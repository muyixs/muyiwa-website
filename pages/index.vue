<template>
  <div class="c-home">
    <section ref="sectionAbout" class="c-home__about">
      <div class="c-home__about-text">
        <h1 class="u-font-h1">
          <div><span>H</span><span>I</span><span>,</span></div>
          <div><span>I’</span><span>M</span></div>
          <div>
            <span>O</span><span>L</span><span>U</span><span>M</span
            ><span>U</span><span>Y</span><span>I</span><span>W</span
            ><span>A</span>
          </div>
          <div>
            <span>A</span><span>D</span><span>E</span><span>N</span
            ><span>A</span><span>I</span><span>K</span><span>E</span>
          </div>
        </h1>
        <p class="u-font-regular">
          Welcome to my personal site and blog, a place to learn about me and
          the many things that pique my interest. I am incredibly passionate
          about technology, people and the intriguing ways they intersect. I am
          also driven by the desire to constantly challenge myself, and to open
          myself up to new perspectives and opportunities for growth. During my
          free time, I enjoy being physically active, picking up new hobbies,
          and exploring new destinations with my wife. I was born and raised in
          Lagos, Nigeria, but today I live in the Bay Area, working as a
          <span class="u-font-highlighted">Senior Software Engineer</span> on
          <span class="u-font-highlighted">Google Search</span>.
        </p>
      </div>
      <a class="c-home__about-scroll" href="#section-interests">Scroll</a>
      <div class="c-home__about-image">
        <div>
          <img
            src="@/assets/images/muyiwa-portrait.jpg"
            alt="Muyiwa's portrait"
          />
        </div>
      </div>
    </section>
    <section ref="sectionInterests" class="c-home__interests">
      <div class="c-home__interests-text">
        <p class="c-home__interests-subtext u-font-regular">
          This <nuxt-link to="blog">blog</nuxt-link> exists as a vehicle to hone
          my voice and shape my perspective on issues I am passionate and
          curious about, and also to provide an insight into who I am. I
          primarily write about the following topics and themes:
        </p>
        <div class="c-home__interests-topic">
          <h2 class="u-font-h2">My Identity</h2>
          <p class="u-font-regular">
            My focus here is to be open about who I am and what motivates me. I
            aim to provide my perspective on situations I encounter in my day to
            day life and how they relate to my identity.
          </p>
        </div>
        <div class="c-home__interests-topic">
          <h2 class="u-font-h2">People and Community</h2>
          <p class="u-font-regular">
            I believe in the end people matter most, as a result my goal is to
            document my journey as I learn about society and the ways
            communities form and function.
          </p>
        </div>
        <div class="c-home__interests-topic">
          <h2 class="u-font-h2">Computer Science</h2>
          <p class="u-font-regular">
            Computers intrigue me. I am excited about being in a field with so
            many opportunities to document new advancements, technologies,
            frameworks, languages and disruptions I come across.
          </p>
        </div>
      </div>
    </section>
    <section ref="cities" class="c-home__cities">
      <p class="c-home__cities-subtext u-font-regular">
        I have had the pleasure of living and working in
        <span class="u-font-highlighted">Lagos</span>,
        <span class="u-font-highlighted">San Francisco</span>,
        <span class="u-font-highlighted">London</span>, and
        <span class="u-font-highlighted">Chicago</span>, and each city has
        shaped my worldview and perspective.
      </p>
      <div class="c-home__cities-row animation">
        <p v-for="(i, index) in 2" :key="index">
          <span data-text="San Francisco">San Francisco</span>
          <span data-text="Lagos">Lagos</span>
          <span data-text="London">London</span>
          <span data-text="Chicago">Chicago</span>
        </p>
      </div>
      <div class="c-home__cities-row animation">
        <p v-for="(i, index) in 2" :key="index">
          <span data-text="San Francisco">San Francisco</span>
          <span data-text="Lagos">Lagos</span>
          <span data-text="London">London</span>
          <span data-text="Chicago">Chicago</span>
        </p>
      </div>
      <div ref="cityImage" class="c-home__cities-image">
        <img
          data-img="San Francisco"
          src="@/assets/images/cities/san-francisco.jpg"
          alt="Golden gate bridge image"
        />
        <img
          data-img="Chicago"
          src="@/assets/images/cities/chicago.jpg"
          alt="Chicago image"
        />
        <img
          data-img="Lagos"
          src="@/assets/images/cities/san-francisco.jpg"
          alt="Lagos image"
        />
        <img
          data-img="London"
          src="@/assets/images/cities/london.jpg"
          alt="London image"
        />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    this.initIntersectionObserver()
    this.initCitiesAnimation()
  },
  methods: {
    initCitiesAnimation() {
      let windowWidth = window.innerWidth
      const citiesRows = this.$refs.cities.querySelectorAll(
        '.c-home__cities-row'
      )
      const cityNames = this.$refs.cities.querySelectorAll(
        '.c-home__cities-row span'
      )

      const setRowAnimationValues = () => {
        const rowParagraphWidth = citiesRows[0].querySelector('p').offsetWidth

        citiesRows.forEach((row) => {
          const translateValue = (rowParagraphWidth / windowWidth) * 100
          row.style.setProperty('--translate-value', translateValue)
          row.style.setProperty('--anim-play-state', 'initial')
          row.classList.remove('animation')
          setTimeout(() => {
            row.classList.add('animation')
          }, 10)
        })
      }
      const showCityImage = (city) => {
        const citiesSectionTopOffset =
          this.$refs.cities.getBoundingClientRect().top
        const elRect = city.getBoundingClientRect()
        const elWidth = elRect.width
        const elHeight = elRect.height
        const elOffsetX = elRect.left
        const elOffsetY = elRect.top

        let xPosition
        if (elOffsetX < window.innerWidth / 2) {
          xPosition = elWidth + elOffsetX + 15
        } else {
          const cityImageWidth =
            this.$refs.cityImage.getBoundingClientRect().width
          xPosition = elOffsetX - cityImageWidth - 15
        }
        const yPosition =
          elOffsetY +
          elHeight / 2 -
          citiesSectionTopOffset -
          this.$refs.cityImage.getBoundingClientRect().height / 2

        const selectedCityText = city.getAttribute('data-text')
        const cityImage = this.$refs.cityImage.querySelector(
          `img[data-img="${selectedCityText}"]`
        )

        cityImage.style.setProperty('--opacity', '1')
        this.$refs.cityImage.style.setProperty('--x-position', `${xPosition}px`)
        this.$refs.cityImage.style.setProperty('--y-position', `${yPosition}px`)
      }
      const hideCityImage = (city) => {
        const yPosition = this.$refs.cityImage.getBoundingClientRect().top + 70

        const selectedCityText = city.getAttribute('data-text')
        const cityImage = this.$refs.cityImage.querySelector(
          `img[data-img="${selectedCityText}"]`
        )
        cityImage.style.setProperty('--opacity', '0')

        this.$refs.cityImage.style.setProperty('--y-position', `${yPosition}px`)
      }
      const handleCityHover = () => {
        cityNames.forEach((city) => {
          city.addEventListener('mouseenter', () => {
            if (windowWidth < 768) return
            showCityImage(city)
          })
          city.addEventListener('mouseleave', () => {
            if (windowWidth < 768) return
            hideCityImage(city)
          })
        })
      }
      const handleResize = () => {
        const newWidth = window.innerWidth
        if (windowWidth !== newWidth) {
          windowWidth = newWidth
          setRowAnimationValues()
        }
      }

      setRowAnimationValues()
      handleCityHover()
      window.addEventListener('resize', handleResize, false)
    },
    initIntersectionObserver() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
              entry.target.style.setProperty('--anim-play-state', 'running')
            }
          })
        },
        {
          threshold: 0.2,
        }
      )
      observer.observe(this.$refs.sectionInterests)
    },
  },
}
</script>

<style lang="scss" scoped>
.c-home {
  padding-top: 13vh;

  @keyframes slide {
    to {
      transform: translateY(0%);
    }
  }

  @keyframes fade {
    to {
      opacity: 1;
    }
  }

  &__about {
    display: flex;
    justify-content: space-between;
    position: relative;

    @media screen and (max-width: 960px) {
      flex-direction: column;
    }

    &-text {
      width: 50%;
      height: fit-content;

      @media screen and (max-width: 960px) {
        width: 100%;
      }

      h1 {
        div {
          display: inline-block;
        }

        span {
          --delay: 0.1s;
          position: relative;
          display: inline-block;
          transform: translateY(50%);
          opacity: 0;
          animation: slide 0.6s $easeOutExpo forwards var(--delay),
            fade 0.8s linear forwards var(--delay);

          @for $i from 1 through 9 {
            &:nth-child(#{$i}) {
              --delay: #{$i * 0.06s};
            }
          }
        }
      }

      p {
        margin-top: 70px;
        max-width: 560px;
        opacity: 0;
        animation: fade 1.2s linear forwards 0.7s;

        @media screen and (max-width: 960px) {
          width: 100%;
          margin-top: 30px;
        }
      }
    }

    &-scroll {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      --size: 140px;
      position: absolute;
      right: 0;
      top: 515px;
      width: var(--size);
      height: var(--size);
      border-radius: 100px;
      border: none;
      background-color: $color-navy-blue;
      color: white;
      font-size: 1.8rem;
      box-shadow: 0px 10px 30px 2px rgba(0, 0, 0, 0.3);
      font-weight: 400;
      transition: 1.2s $easeOutExpo;
      text-transform: uppercase;
      z-index: 2;
      opacity: 0;
      animation: scale 0.6s $easeOutExpo 1.4s, fade 0s 1.4s forwards;

      @media screen and (max-width: 1440px) {
        --size: 120px;
        font-size: 1.6rem;
        top: 480px;
      }

      @keyframes scale {
        from {
          transform: scale(0);
        }
        to {
          transform: scale(1);
        }
      }

      @media screen and (max-width: 1024px) {
        display: none;
      }

      &:hover {
        transform: scale(1.12);
      }
    }

    &-image {
      width: 49%;
      margin-top: 75px;
      margin-left: 30px;
      position: relative;
      flex-shrink: 0;
      margin-right: auto;

      @media screen and (max-width: 1024px) {
        margin-top: auto;
      }

      @media screen and (max-width: 960px) {
        width: 100%;
        margin: 50px 0 0;
      }

      div {
        width: 90%;
        height: 680px;
        overflow: hidden;

        @media screen and (max-width: 1024px) {
          width: 100%;
        }

        @media screen and (max-width: 960px) {
          height: auto;
          max-height: 680px;
          object-position: top;
        }

        img {
          width: 100%;
          height: 100%;
          object-position: center top;
          object-fit: cover;
          transform: scale(1.14);
          opacity: 0;
          animation: scaledown 1.2s $easeOutExpo 0.7s forwards,
            fade 0.7s linear 0.7s forwards;

          @keyframes scaledown {
            to {
              transform: scale(1);
            }
          }

          @keyframes fade {
            to {
              opacity: 1;
            }
          }
        }
      }
    }
  }

  &__interests {
    --anim-play-state: paused;
    display: flex;
    position: relative;
    margin-top: 100px;
    padding: 100px 0;
    border-top: 1px dashed rgba(0, 0, 0, 0.3);

    @include screen('small') {
      margin-top: 80px;
      padding-top: 60px;
    }

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
      transform: translateY(70%);
      opacity: 0;
      animation: slide 1.3s $easeOutExpo forwards 0.2s,
        fade 1s linear forwards 0.2s;
      animation-play-state: var(--anim-play-state);
    }

    &-topic {
      --delay: 0;
      max-width: 800px;
      margin-top: 100px;
      transform: translateY(50%);
      opacity: 0;
      animation: slide 1.3s $easeOutExpo forwards var(--delay),
        fade 1s linear forwards var(--delay);
      animation-play-state: var(--anim-play-state);

      @for $i from 1 through 4 {
        &:nth-child(#{$i}) {
          --delay: #{$i * 0.3s};
        }
      }

      @include screen('small') {
        margin-top: 70px;
      }

      &:not(:first-of-type) {
        margin-top: 90px;

        @include screen('small') {
          margin-top: 65px;
        }
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
    padding: 12% 0 27%;
    overflow: hidden;

    @include screen('small') {
      padding: 90px 0 150px;
    }

    &-subtext {
      text-align: center;
      max-width: 720px;
      margin: 0 auto;
      height: 200px;

      @include screen('small') {
        height: 170px;
      }

      @media screen and (max-width: 480px) {
        height: 240px;
      }

      @include screen('med') {
        padding: 0 30px;
      }

      .u-font-highlighted {
        color: #37e1ec;
      }
    }

    &-row {
      --translate-value: 0;
      --anim-play-state: paused;
      width: 100%;
      margin-bottom: 15vw;
      font-size: 6vw;
      will-change: transform;
      animation-play-state: var(--anim-play-state);

      &.animation {
        animation: move 16s linear infinite;

        @keyframes move {
          to {
            transform: translateX(calc(var(--translate-value) * -1%));
          }
        }
      }

      &:nth-of-type(2) {
        animation-direction: reverse;
      }

      &:hover {
        animation-play-state: paused;
      }

      @include screen('small') {
        font-size: 4.2rem;
        margin-bottom: 120px;
      }

      p {
        position: absolute;
        white-space: nowrap;

        &:nth-child(2) {
          transform: translateX(100%);
        }

        span {
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
    }

    &-image {
      $size: 18vw;
      --x-position: 0;
      --y-position: 50%;
      position: absolute;
      width: $size;
      height: $size;
      left: 0;
      top: 0;
      pointer-events: none;
      z-index: 6;
      border-radius: 20px;
      overflow: hidden;
      transform: rotate(5deg);
      transform: translate3d(var(--x-position), var(--y-position), 0)
        rotate(3deg);
      transition: transform 0.8s $easeOutExpo;

      img {
        --opacity: 0;
        position: absolute;
        border-radius: inherit;
        object-position: center;
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-color: whitesmoke;
        opacity: var(--opacity);
        transition: opacity 0.6s $easeOutExpo;
      }
    }
  }
}
</style>
