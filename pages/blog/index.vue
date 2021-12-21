<template>
  <div class="c-blog">
    <h1 class="u-font-h1">Blog</h1>
    <p class="c-blog__page-subtext u-font-regular">Enjoy the read :)</p>
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
        <nuxt-link
          to="/blog"
          class="c-tag"
          :class="{ 'is-active': category === '' }"
        >
          All
        </nuxt-link>
        <nuxt-link
          v-for="(tag, index) in tags"
          :key="index"
          :to="{
            name: 'blog-category-category',
            params: {
              category: tag.slug,
            },
          }"
          class="c-tag"
          :class="{ 'is-active': category === tag.title }"
        >
          {{ tag.title }}
        </nuxt-link>
      </div>
    </section>
    <section class="c-blog__posts-wrap">
      <blog-post
        v-for="(post, index) in posts"
        :key="index"
        :post-details="post"
      />
    </section>
    <paginate
      v-model="page"
      :page-count="totalPages"
      :click-handler="updatePage"
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
import api from '@/utils/api.js'
import tags from '@/utils/blog-tags.js'

export default {
  components: {},
  async asyncData({ route }) {
    const toTitleCase = (string) => {
      string = string.replace(/-/g, ' ')
      return string.replace(
        /\w\S*/g,
        (t) => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()
      )
    }

    const category = route.params.category
      ? toTitleCase(route.params.category)
      : ''
    const pageLimit = 5
    const page = route.query.page || 1

    const payload = {
      limit: pageLimit,
      skip: pageLimit * (page - 1),
      category,
    }

    try {
      const entries = await api.fetchPosts(payload)

      return {
        posts: entries.data.items,
        totalPages: entries.data.total / pageLimit,
        category,
      }
    } catch (error) {}
  },
  data() {
    return {
      page: this.$route.query.page || 1,
      PAGE_LIMIT: 5,
      tags,
    }
  },
  watch: {
    async '$route.query.page'() {
      this.page = this.$route.query.page || 1
      const category = this.$route.params.category
        ? this.toTitleCase(this.$route.params.category)
        : ''
      try {
        const payload = {
          limit: this.PAGE_LIMIT,
          skip: this.PAGE_LIMIT * (this.page - 1),
          category,
        }
        const entries = await api.fetchPosts(payload)
        this.posts = entries.data.items
        window.scrollTo(0, 0)
      } catch (error) {}
    },
  },
  mounted() {
    this.toggleFilter(0)
  },
  methods: {
    toggleFilter(duration) {
      const filterTags = this.$refs.filterTags

      this.$refs.toggleIcon.style.setProperty(
        '--trans-time',
        duration === 0 ? 0 : '0.3s'
      )
      filterTags.style.setProperty('--trans-time', duration === 0 ? 0 : '0.1s')

      if (filterTags.style.maxHeight) {
        filterTags.style.maxHeight = null
        this.$refs.toggleIcon.style.transform = 'rotate(0deg)'
      } else {
        filterTags.style.maxHeight = `${filterTags.scrollHeight}px`
        this.$refs.toggleIcon.style.transform = 'rotate(-180deg)'
      }
    },
    updatePage() {
      this.$router.push({
        path: this.$route.path,
        query: { page: this.page },
      })
    },
    formatCategory(category) {
      return category.toLowerCase().replace(/\s/g, '-')
    },
    toTitleCase(string) {
      string = string.replace(/-/g, ' ')
      return string.replace(
        /\w\S*/g,
        (t) => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.c-blog {
  padding: 13vh 0 150px;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.3);

  @include screen('small') {
    padding-bottom: 70px;
  }

  &__page-subtext {
    max-width: 750px;
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
      color: inherit;
      padding: 0;

      svg {
        --trans-time: 0.3s;
        margin-left: 5px;
        margin-bottom: 1px;
        height: 12px;
        transition: transform var(--trans-time) $easeOutExpo;
      }
    }

    &-tags {
      --trans-time: 0.1s;
      margin-top: 28px;
      max-height: 0px;
      overflow-y: hidden;
      transition: max-height var(--trans-time) linear;

      @include screen('small') {
        display: flex;
        flex-wrap: wrap;

        .c-tag {
          margin-bottom: 16px;
        }
      }

      a.is-active {
        background-color: $color-navy-blue;
        color: white;
      }
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
        color: unset;
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

    @include screen('small') {
      margin-top: 70px;
    }
  }
}
</style>
