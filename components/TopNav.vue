<template>
  <div class="c-nav">
    <div class="c-nav__left">
      <nuxt-link to="/">Olumuyiwa Adenaike</nuxt-link>
    </div>
    <div class="c-nav__right">
      <a class="c-nav__contact" href="#section-footer">Contact</a>
      <nuxt-link to="/blog" tag="button" class="c-nav__blog">Blog</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
}
</script>

<style lang="scss" scoped>
.c-nav {
  display: flex;
  justify-content: space-between;
  margin-top: 45px;
  font-size: 1.8rem;
  align-items: center;
  text-transform: uppercase;
  font-weight: 400;

  a {
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    opacity: 0.8;
  }

  &__contact {
    @include screen('small') {
      display: none;
    }
  }

  &__blog {
    margin-left: 40px;
    background-color: $color-navy-blue;
    color: white;
    padding: 10px 32px;
    border: none;
    border-radius: 30px;
    text-transform: inherit;
    font-size: 1.6rem;

    @include screen('small') {
      padding: 9px 26px;
    }
  }
}
</style>
