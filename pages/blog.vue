<template>
  <div class="c-blog">
    <h1 class="u-font-h1">Blog</h1>
    <p class="c-blog__page-subtext">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500.
    </p>
    <section class="c-blog__filter">
      <button class="c-blog__filter-toggle" @click="toggleFilter()">
        <span>Filter</span>
        <svg
          ref="toggleIcon"
          width="17"
          height="12"
          viewBox="0 0 17 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.61582 10.5275C9.05562 11.2668 7.94438 11.2668 7.38418 10.5275L1.10834 2.24554C0.409647 1.3235 1.0673 0 2.22416 0L14.7758 0C15.9327 0 16.5904 1.3235 15.8917 2.24554L9.61582 10.5275Z"
            fill="#202020"
          />
        </svg>
      </button>
      <div ref="filterTags" class="c-blog__filter-tags">
        <nuxt-link to="" class="c-tag c-tag--selected"> All </nuxt-link>
        <nuxt-link to="" class="c-tag">Artificial intelligence</nuxt-link>
        <span class="c-tag">Software architecture</span>
        <span class="c-tag">Software design</span>
        <span class="c-tag">Quantum computing</span>
      </div>
    </section>
    <section class="c-blog__posts-wrap">
      <blog-post tags="" />
      <blog-post tags="software design" />
      <blog-post tags="Artificial intelligence" />
      <blog-post tags="software architecture" />
      <blog-post tags="software design" />
      <!-- <div class="c-blog__post">
        <nuxt-link to="/article" class="c-blog__post-title u-font-h2">
          Software design and architecture
        </nuxt-link>
        <nuxt-link to="" class="c-blog__tag">Data processing</nuxt-link>
        <nuxt-link to="" class="c-blog__tag">Artificial intelligence</nuxt-link>
      </div>
      <div class="c-blog__post">
        <nuxt-link to="/article" class="c-blog__post-title u-font-h2">
          Reverse Engineering
        </nuxt-link>
        <nuxt-link to="" class="c-blog__tag">Software design</nuxt-link>
      </div>
      <div class="c-blog__post">
        <nuxt-link to="/article" class="c-blog__post-title u-font-h2">
          Quantum Computing
        </nuxt-link>
        <nuxt-link to="" class="c-blog__tag">Cognitive design</nuxt-link>
      </div>
      <div class="c-blog__post">
        <nuxt-link to="/article" class="c-blog__post-title u-font-h2">
          Large scale data processing
        </nuxt-link>
        <nuxt-link to="" class="c-blog__tag">Machine learning</nuxt-link>
      </div>
      <div class="c-blog__post">
        <nuxt-link to="/article" class="c-blog__post-title u-font-h2">
          Artificial Intelligence
        </nuxt-link>
        <nuxt-link to="" class="c-blog__tag">Machine learning</nuxt-link>
      </div> -->
    </section>
    <paginate
      v-model="page"
      page-count="3"
      prev-text="Prev"
      next-text="Next"
      :hide-prev-next="true"
      class="c-paginate"
      container-class="c-paginate"
      active-class="c-paginate__active"
      break-view-class="c-paginate__break-view"
    >
    </paginate>
    <blog-subscribe />
  </div>
</template>

<script>
export default {
  components: {},
  async asyncData({ params }) {},
  data() {
    return {
      page: 1,
    }
  },
  mounted() {},
  methods: {
    toggleFilter() {
      const filterTags = this.$refs.filterTags

      if (filterTags.style.maxHeight) {
        filterTags.style.maxHeight = null
        this.$refs.toggleIcon.style.transform = 'rotate(0deg)'
      } else {
        filterTags.style.maxHeight = `${filterTags.scrollHeight}px`
        this.$refs.toggleIcon.style.transform = 'rotate(-180deg)'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.c-blog {
  padding-top: 13vh;

  &__page-subtext {
    max-width: 800px;
    font-size: 2.6rem;
    line-height: 35px;
    margin-top: 30px;
  }

  &__filter {
    margin-top: 90px;
    text-transform: uppercase;

    &-toggle {
      font-weight: 500;
      font-size: 2rem;
      width: fit-content;
      background: transparent;
      border: none;
      text-transform: uppercase;

      svg {
        margin-left: 5px;
        margin-bottom: 1px;
        height: 12px;
        transition: transform 0.3s $easeOutExpo;
      }
    }

    &-tags {
      margin-top: 28px;
      max-height: 0px;
      overflow: hidden;
      transition: max-height 0.1s linear;
    }
  }

  .c-paginate {
    display: flex;
    font-weight: 500;
    font-size: 1.3rem;
    margin-top: 115px;
    text-transform: uppercase;
    color: $color-navy-blue;

    @include screen('small') {
      margin-top: 90px;
    }

    ::v-deep li {
      list-style-type: none;
      border-radius: 10px;
      border: 1px solid $color-navy-blue;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      display: inline-block;
      transition: 0.3s border-color $easeOutExpo;

      &:hover {
        color: white;
        border-color: transparent;

        &::before {
          transform: translateY(0);
        }
      }

      &::before {
        content: '';
        position: absolute;
        // background: rgba(76, 54, 67, 1);
        background-color: $color-navy-blue;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: -1;
        border-radius: inherit;
        transform: translateY(100%);
        transition: transform 0.4s $easeOutExpo;
        transform-origin: bottom;
      }

      &:not(:first-child) {
        margin-left: 20px;
      }

      a {
        display: block;
        padding: 12px 18px;
        outline: none;
      }
    }

    ::v-deep .c-paginate__active {
      color: white;
      // background: rgba(76, 54, 67, 1);
      background-color: $color-navy-blue;
    }

    ::v-deep .c-paginate__break-view {
      &:hover {
        background-color: transparent;
      }

      a {
        pointer-events: none;
      }
    }
  }

  &__posts-wrap {
    margin-top: 80px;
  }
}
</style>
