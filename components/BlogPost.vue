<template>
  <div class="c-post">
    <nuxt-link
      :to="{
        name: 'article',
        params: {
          article: postDetails.fields.slug,
        },
      }"
      class="c-post__title u-font-h2"
    >
      {{ postDetails.fields.title }}
    </nuxt-link>
    <!-- <nuxt-link
      v-for="(tag, index) in tags"
      :key="index"
      to=""
      class="c-post__tag"
    >
      {{ tag }}
    </nuxt-link> -->
    <nuxt-link v-if="tags" to="" class="c-tag">
      {{ tags }}
    </nuxt-link>
    <template v-else>
      <nuxt-link to="" class="c-tag">Software design</nuxt-link>
      <nuxt-link to="" class="c-tag">Artificial intelligence</nuxt-link>
    </template>
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
  methods: {},
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
