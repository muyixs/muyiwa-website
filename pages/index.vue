<template>
  <div class="c-home">
    <div class="c-home__about">
      <div class="c-home__about-text">
        <h1 class="u-font-h1">HI, I’M OLUMUYIWA ADENAIKE</h1>
        <p class="u-font-regular">
          Welcome to my blog and personal site, a place to learn more about me
          and the many things that pique my interest. I’m a Software engineer,
          currently living in San Francisco, California, where I work as a
          senior software engineer on Google search. I was born & raised in
          Lagos, Nigeria, and I’m incredibly passionate about technology and the
          many opportunities it creates.
        </p>
      </div>
      <div class="c-home__about-image">
        <img src="@/assets/images/portrait.jpg" alt="Muyiwa's portrait" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  async asyncData({ params }) {},
  data() {
    return {}
  },
  mounted() {},
  methods: {},
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

      img {
        width: 90%;
        height: 680px;
        object-position: center bottom;
        object-fit: cover;
      }
    }
  }
}
</style>
