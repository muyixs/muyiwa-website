<template>
  <div class="c-post">
    <div class="c-post__tags-mobile">
      <nuxt-link
        :to="{
          name: 'blog-category-category',
          params: {
            category: formatCategory(postDetails.fields.tag),
          },
        }"
      >
        {{ postDetails.fields.tag }}
      </nuxt-link>
    </div>
    <nuxt-link
      :to="{
        name: 'blog-article',
        params: {
          article: postDetails.fields.slug,
        },
      }"
      class="c-post__title u-font-h2"
    >
      {{ postDetails.fields.title }}
    </nuxt-link>
    <div class="c-post__tags">
      <nuxt-link
        :to="{
          name: 'blog-category-category',
          params: {
            category: formatCategory(postDetails.fields.tag),
          },
        }"
        class="c-tag"
      >
        {{ postDetails.fields.tag }}
      </nuxt-link>
      <nuxt-link
        v-if="postDetails.fields.secondaryTag"
        :to="{
          name: 'blog-category-category',
          params: {
            category: formatCategory(postDetails.fields.secondaryTag),
          },
        }"
        class="c-tag"
      >
        {{ postDetails.fields.secondaryTag }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true,
    },
    postDetails: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    formatCategory(category) {
      return category.toLowerCase().replace(/\s/g, '-')
    },
  },
}
</script>

<style lang="scss" scoped>
.c-post {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: block;
  }

  &:not(:last-child) {
    margin-bottom: 80px;
    padding-bottom: 66px;
    border-bottom: 1px dashed rgba(0, 0, 0, 0.3);

    @include screen('small') {
      margin-bottom: 50px;
      padding-bottom: 30px;
    }
  }

  &__title {
    text-decoration: none;
    color: inherit;
    font-weight: 400;
    transition: color 0.5s ease-out;

    &:hover {
      color: $color-turquoise;
    }
  }

  &__tags {
    flex-shrink: 0;
    margin-left: 40px;

    @media screen and (max-width: 960px) {
      display: none;
    }

    &-mobile {
      display: none;

      > * {
        font-size: 1.6rem;
        font-weight: 500;
        text-transform: uppercase;
        display: inline-block;
        margin-bottom: 15px;
        text-decoration: none;
        color: inherit;
      }

      @media screen and (max-width: 960px) {
        display: block;
      }
    }
  }
}
</style>
