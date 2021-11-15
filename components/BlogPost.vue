<template>
  <div class="c-post">
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

  &:not(:last-child) {
    margin-bottom: 80px;
    padding-bottom: 66px;
    border-bottom: 1px dashed rgba(0, 0, 0, 0.3);
  }

  &__title {
    font-size: 4.8rem;
    width: 74%;
    text-decoration: none;
    color: inherit;
    font-weight: 400;
  }
}
</style>
