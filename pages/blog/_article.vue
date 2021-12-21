<template>
  <div class="c-article">
    <div class="c-article__container">
      <p class="c-article__tag">{{ post.fields.primaryTag }}</p>
      <h1 class="u-font-h1">{{ post.fields.title }}</h1>
      <p class="c-article__excerpt u-font-regular">
        {{ post.fields.summary }}
      </p>
      <p class="c-article__date">
        <span> {{ formatDate(post.sys.createdAt) }}</span>
        <span>{{ getReadingTime(postBody) }} MIN READ</span>
      </p>
      <img
        v-if="post.fields.coverImage"
        class="c-article__cover-image"
        :src="getCoverImage(post.fields.coverImage.sys.id)"
        alt="Article cover image"
      />
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div ref="articleBody" class="c-article__body" v-html="postBody" />
    </div>
    <div v-if="nextPost" class="c-article__posts-wrap">
      <h3>More Articles</h3>
      <blog-post
        v-if="previousPost"
        :key="index"
        :post-details="previousPost"
      />
      <blog-post v-if="nextPost" :key="index" :post-details="nextPost" />
    </div>
    <blog-subscribe />
  </div>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import api from '@/utils/api.js'
import months from '@/utils/months'

export default {
  components: {},
  async asyncData({ params, payload }) {
    let assets = []
    const renderOptions = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
          const asset = assets.filter(
            (asset) => asset.sys.id === node.data.target.sys.id
          )[0]

          switch (asset.fields.file.contentType) {
            case 'image/png':
              return `<img
                  title="${asset.fields.title}"
                  src="${`https:${asset.fields.file.url}`}"
                  alt="${asset.fields.description}"
                />`

            case 'image/gif':
              return `<img
                  title="${asset.fields.title}"
                  src="${`https:${asset.fields.file.url}`}"
                  alt="${asset.fields.description}"
                />`

            default:
              break
          }
        },
      },
    }

    if (payload) {
      assets = payload.assets

      return {
        post: payload.entry,
        postBody: documentToHtmlString(
          payload.entry.fields.body,
          renderOptions
        ),
        assets,
      }
    }

    try {
      const entries = await api.fetchPosts({ slug: params.article })
      const post = entries.data.items[0]
      assets = entries.data.includes.Asset

      return {
        post,
        postBody: documentToHtmlString(post.fields.body, renderOptions),
        assets,
      }
    } catch (error) {}
  },
  data() {
    return {
      nextPost: null,
      previousPost: null,
    }
  },
  mounted() {
    this.fetchMorePosts()
  },
  methods: {
    formatDate: (d) => {
      const date = new Date(d)
      let utcDate = date.getUTCDate()
      const utcMonth = date.getUTCMonth()
      if (utcDate < 10) {
        utcDate = `0${utcDate}`
      }
      return `${months[utcMonth]} ${utcDate}, ${date.getUTCFullYear()}`
    },
    getReadingTime: (content) => {
      const text = documentToHtmlString(content)
      const wpm = 250
      const words = text.trim().split(/\s+/).length
      return Math.ceil(words / wpm)
    },
    async fetchMorePosts() {
      try {
        const entries = await api.fetchPosts()
        const posts = entries.data.items
        const post = posts.filter(
          (post) => post.fields.slug === this.$route.params.article
        )[0]
        const postIndex = posts.indexOf(post)

        // if there's only one active post, don't set next & previous posts
        if (posts.length === 1) return

        this.nextPost =
          posts[postIndex === posts.length - 1 ? 0 : postIndex + 1]

        if (posts.length > 2) {
          this.previousPost =
            posts[postIndex === 0 ? posts.length - 1 : postIndex - 1]
        }
      } catch (error) {}
    },
    getCoverImage(id) {
      const asset = this.assets.filter((asset) => asset.sys.id === id)
      return `https:${asset[0].fields.file.url}`
    },
  },
}
</script>

<style lang="scss" scoped>
.c-article {
  padding: 13vh 0 150px;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.3);

  @include screen('small') {
    padding-bottom: 70px;
  }

  &__container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }

  &__excerpt {
    margin: 30px 0 32px;
    line-height: 33px;
  }

  &__tag,
  &__date {
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 500;
  }

  &__tag {
    @include screen('small') {
      margin-bottom: 10px;
    }
  }

  &__date {
    display: flex;
    align-items: center;

    & > :first-child {
      display: flex;
      align-items: center;

      &::after {
        content: '';
        display: inline-block;
        $size: 6px;
        width: $size;
        height: $size;
        background-color: rgba(0, 0, 0, 0.8);
        margin: 0 10px;
        border-radius: 100%;
      }
    }
  }

  &__cover-image {
    margin-top: 50px;
    width: 100%;
    max-height: 600px;
    object-fit: cover;
    object-position: center;
  }

  &__body {
    margin-top: 80px;
    font-size: 2.2rem;
    line-height: 36px;

    @include screen('small') {
      font-size: 2.2rem;
      line-height: 34px;
    }

    ::v-deep h1,
    ::v-deep h2,
    ::v-deep h3,
    ::v-deep h4,
    ::v-deep h5,
    ::v-deep h6 {
      font-family: 'GT America Condensed';
      font-weight: 500;
      font-size: 2.2rem;
      line-height: 31px;
      margin: 40px 0px 10px;
      color: rgb(27, 27, 27);
    }

    ::v-deep h1 {
      font-size: 2.6rem;

      @include screen('small') {
        font-size: 2.4rem;
      }
    }

    ::v-deep h2 {
      font-size: 2.6rem;

      @include screen('small') {
        font-size: 2.2rem;
      }
    }

    ::v-deep strong,
    ::v-deep b {
      font-weight: 500;
    }

    ::v-deep img {
      margin: 50px 0;
      height: auto;
      max-height: 600px;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }

    ::v-deep blockquote {
      font-size: 3.4rem;
      line-height: 46px;
      padding: 0% 0% 2%;
      font-weight: 400;
      margin-top: 0px;
      margin: 0;
      color: $color-blue;

      @include screen('small') {
        font-size: 2.5rem;
        line-height: 34px;
      }
    }

    ::v-deep a {
      text-decoration: none;
      color: $color-blue;
      font-weight: 500;
    }

    ::v-deep p {
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    ::v-deep ul {
      margin-left: 35px;
      list-style-type: disc;

      @include screen('small') {
        margin-left: 25px;
      }

      li {
        margin-bottom: 17px;
      }
    }
  }

  &__posts-wrap {
    margin-top: 180px;

    @include screen('small') {
      margin-top: 105px;
    }

    h3 {
      font-size: 2.4rem;
      text-transform: uppercase;
      margin-bottom: 40px;
      font-weight: 500;

      @include screen('small') {
        margin-bottom: 32px;
      }
    }
  }
}
</style>
