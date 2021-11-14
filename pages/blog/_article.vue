<template>
  <div class="c-article">
    <div class="c-article__container">
      <p class="c-article__tag">SOFTWARE ARCHITECTURE</p>
      <h1 class="u-font-h1">{{ post.title }}</h1>
      <p class="c-article__excerpt u-font-regular">
        {{ post.summary }}
      </p>
      <p class="c-article__date">
        <span>NOV 10, 2021</span><span>4 MIN READ</span>
      </p>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div ref="articleBody" class="c-article__body">
        <p>{{ post.body }}</p>
      </div>
    </div>
    <div class="c-article__posts-wrap">
      <h3>More Articles</h3>
      <!-- <blog-post tags="Software design" />
      <blog-post tags="artificial intelligence" /> -->
      <blog-post :key="index" :post-details="entry" />
      <blog-post :key="index" :post-details="entry" />
    </div>
    <blog-subscribe />
  </div>
</template>

<script>
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
// import { BLOCKS } from '@contentful/rich-text-types'
import api from '@/utils/api.js'

export default {
  components: {},
  async asyncData({ params }) {
    // const options = {
    //   renderNode: {
    //     [BLOCKS.EMBEDDED_ASSET]: ({
    //       data: {
    //         target: { fields },
    //       },
    //     }) =>
    //       `<img
    //         src="${fields.file.url}"
    //         height="${fields.file.details.image.height}"
    //         width="${fields.file.details.image.width}"
    //         alt="${fields.description}"
    //       />`,
    //   },
    // }

    try {
      const entries = await api.fetchPosts({ slug: params.article })
      const entry = entries.data.items[0]
      // const assets = entries.data.includes.Asset
      // const title = post.fields.title
      const postBody = entry.fields.content
      // console.log(postBody)

      // const renderOptions = {
      //   renderNode: {
      //     [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
      //       const asset = assets.filter(
      //         (asset) => asset.sys.id === node.data.target.sys.id
      //       )[0]

      //       switch (asset.fields.file.contentType) {
      //         case 'image/png':
      //           return `<img
      //             title="${asset.fields.title}"
      //             src="${`https:${asset.fields.file.url}`}"
      //             alt="${asset.fields.description}"
      //           />`

      //         case 'image/gif':
      //           return `<img
      //             title="${asset.fields.title}"
      //             src="${`https:${asset.fields.file.url}`}"
      //             alt="${asset.fields.description}"
      //           />`

      //         default:
      //           break
      //       }
      //     },
      //   },
      // }

      const post = {
        title: entry.fields.title,
        summary: entry.fields.summary,
        body: postBody,
      }

      return {
        post,
        entry,
        // assets,
      }
    } catch (error) {}
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.c-article {
  padding-top: 13vh;

  &__container {
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
  }

  &__excerpt {
    margin-top: 24px;
    // font-size: 2rem;
    line-height: 33px;
  }

  &__tag,
  &__date {
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 500;
  }

  &__date {
    margin-top: 28px;
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

  &__body {
    margin-top: 80px;

    p {
      margin-bottom: 50px;
      font-size: 2.2rem;
      line-height: 36px;
    }
  }

  &__posts-wrap {
    margin-top: 190px;

    h3 {
      font-size: 2.4rem;
      text-transform: uppercase;
      margin-bottom: 60px;
      font-weight: 500;
    }
  }
}
</style>
