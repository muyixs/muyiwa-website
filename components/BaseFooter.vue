<template>
  <section id="section-footer" class="c-footer">
    <h1 class="u-font-h1">CONTACT</h1>
    <p class="c-footer__subtext u-font-regular">
      Feel free to uy interests ar is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has. Some of the interesting.
    </p>
    <div class="c-footer__links">
      <a href="" class="c-footer__links-email">Say hello</a>
      <div class="c-footer__links-social">
        <a data-text="Twitter" href="">Twitter</a>
        <a data-text="Github" href="">Github</a>
        <a data-text="Linkedin" href="">Linkedin</a>
      </div>
    </div>
    <div class="c-footer__credit">
      <span>© {{ new Date().getUTCFullYear() }}</span>
      <span>Lorem ipsum dolor sit</span>
    </div>
  </section>
</template>

<script>
export default {
  methods: {},
}
</script>

<style lang="scss" scoped>
.c-footer {
  margin: 130px 0 20px;

  @include screen('small') {
    margin-top: 80px;
  }

  &__subtext {
    max-width: 750px;
    margin-top: 40px;
  }

  &__links {
    display: flex;
    margin-top: 100px;
    display: flex;
    align-items: center;

    @include screen('small') {
      justify-content: space-between;
      margin-top: 80px;
    }

    > * {
      text-decoration: none;
      text-transform: uppercase;
      font-size: 2.6rem;
      font-weight: 400;

      @include screen('small') {
        font-size: 2rem;
      }
    }

    &-social {
      display: flex;

      @media screen and (max-width: 768px) {
        flex-direction: column;
      }

      a {
        text-decoration: none;
        color: inherit;

        @media screen and (max-width: 768px) {
          &:not(:last-child) {
            margin-bottom: 30px;
          }
        }

        @include screen('small') {
          &:not(:last-child) {
            margin-bottom: 20px;
          }
        }

        &:not(:last-child) {
          margin-right: 50px;
        }
      }
    }

    &-email {
      --size: 220px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      width: var(--size);
      height: var(--size);
      color: var(--bg-color);
      background-color: $color-navy-blue;
      flex-shrink: 0;
      transition: 1.2s $easeOutExpo;
      color: white;
      font-size: 1.8rem;
      font-weight: 400;
      margin-right: 60px;

      @include screen('small') {
        --size: 160px;
        margin-right: 0px;
      }

      &:hover {
        transform: scale(1.12);
      }
    }
  }

  &__credit {
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    text-transform: uppercase;
    font-size: 1.8rem;

    @include screen('small') {
      font-size: 1.6rem;
    }
  }
}
</style>
